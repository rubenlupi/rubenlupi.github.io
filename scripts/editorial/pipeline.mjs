#!/usr/bin/env node
// Deterministic gates for the editorial workflow (docs/EDITORIAL_WORKFLOW.md).
// The coordinator runs these between agent stages. Exit codes: 0 = OK, 1 = FAIL (gate failed), 3 = STOP (workflow
// must stop and report to the author: NEEDS_INPUT, BLOCKED, revision limit, thesis change request).
// These checks verify structure, contracts and file ownership. They cannot verify that sources support claims.
import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, readdirSync, mkdtempSync, rmSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import YAML from 'yaml';
import { validate } from '../lib/validate.mjs';
import { extractLinks, isExternal, splitReferences, readPosts, parsePost } from '../lib/content.mjs';
import { CATEGORIES, nextSlot } from '../lib/archive.mjs';

export const MAX_REVISIONS = 3;
export const SHORT = ['Originality', 'Accuracy', 'Evidence', 'Systems', 'Cross-disc.', 'Accessibility', 'Clarity', 'Practical', 'Question'];
export const CRITERIA = [
  'Originality of the argument', 'Technical accuracy', 'Quality of evidence and citations', 'Depth of Systems Thinking',
  'Quality of cross-disciplinary connections', 'Accessibility to the intended audience', 'Clarity and narrative flow',
  'Practical relevance', 'Strength of the final question',
];
// Review criteria for multi-post series (owner assignment, 2026-11-13). "Historical accuracy where applicable" may be n/a.
export const SERIES_CRITERIA = [
  'Originality', 'Technical accuracy', 'Intellectual and technical depth', 'Quality of evidence', 'Systems-thinking rigor',
  'Historical accuracy where applicable', 'Cross-disciplinary connections', 'Accessibility', 'Narrative coherence',
  'Practical relevance', 'Quality of critical analysis', 'Strength of the final question',
];
const OPTIONAL_CRITERIA = new Set(['Historical accuracy where applicable']);
const BRIEF_SECTIONS = ['Thesis', 'Break', 'Challenge', 'Experience', 'Change', 'Question', 'Claims and Evidence', 'Sources',
  'Counterarguments', 'Contradictions and Open Questions', 'Research Gaps', 'Duplication Check', 'Instructions for the Writer',
  'Proposed Metadata'];
const CLAIM_TYPES = ['evidence', 'interpretation', 'analogy', 'hypothesis', 'speculation'];
const CLAIM_STATUS = ['verified', 'unverifiable', 'n/a'];
const EXPERIENCE_SOURCES = ['author-supplied', 'repository-documented', 'hypothetical', 'missing'];
const PLACEHOLDER = /\b(TODO|TBD|FIXME)\b|\[VERIFY\]/;
// Files each stage may change. Everything else in the repo must stay as it was when the stage began.
const OWNERSHIP = {
  brief: ['editorial-brief.md'],
  draft: ['draft.md'],
  review: ['review.md'],
  revise: ['draft.md', 'revision-notes.md'],
};
const APPEND_ONLY = { review: ['review.md'], revise: ['revision-notes.md'] };
const TRANSITIONS = { // stage you can `begin` -> required current stage(s)
  brief: ['initialized', 'needs-input'], draft: ['brief-approved'], review: ['draft-ready'], revise: ['revision-required'],
};

export class GateError extends Error { constructor(msg, code = 1) { super(msg); this.code = code; } }
const fail = (m) => { throw new GateError(m, 1); };
const stop = (m) => { throw new GateError(m, 3); };

export function paths(root, slug) {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug ?? '')) fail(`invalid slug "${slug}" (lowercase kebab-case)`);
  const dir = join(root, 'editorial', slug);
  return {
    root, slug, dir, state: join(dir, 'state.json'), input: join(dir, 'input.md'), brief: join(dir, 'editorial-brief.md'),
    draft: join(dir, 'draft.md'), review: join(dir, 'review.md'), notes: join(dir, 'revision-notes.md'),
    final: join(dir, 'final.md'), publication: join(dir, 'publication.md'), history: join(dir, 'history'),
    posts: join(root, 'src', 'content', 'posts'), catalog: join(root, 'docs', 'BOOK_CATALOG.md'),
  };
}

const sha = (file) => (existsSync(file) ? createHash('sha256').update(readFileSync(file)).digest('hex') : null);
const read = (file) => readFileSync(file, 'utf8');
const loadState = (p) => { if (!existsSync(p.state)) fail(`no workflow at ${relative(p.root, p.dir)} (run init)`); return JSON.parse(read(p.state)); };
const saveState = (p, s) => writeFileSync(p.state, JSON.stringify(s, null, 2) + '\n');
const now = () => new Date().toISOString();

function gitStatus(root) {
  try { return execFileSync('git', ['status', '--porcelain', '--untracked-files=all'], { cwd: root, encoding: 'utf8' }); }
  catch { return null; }
}
function snapshotDir(dir) {
  const out = {};
  const walk = (d) => { for (const e of readdirSync(d, { withFileTypes: true })) {
    const f = join(d, e.name);
    if (e.isDirectory()) walk(f); else if (relative(dir, f) !== 'state.json') out[relative(dir, f)] = sha(f);
  } };
  if (existsSync(dir)) walk(dir);
  return out;
}

export function splitFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { fm: null, body: text };
  try { return { fm: YAML.parse(m[1]) ?? {}, body: m[2] }; } catch (e) { return { fm: null, body: m[2], error: e.message }; }
}
export function sections(body) {
  const out = {};
  const parts = body.split(/^## +/m).slice(1);
  for (const part of parts) { const nl = part.indexOf('\n'); out[part.slice(0, nl < 0 ? undefined : nl).trim()] = nl < 0 ? '' : part.slice(nl + 1); }
  return out;
}
const tableRows = (text) => text.split('\n').map((l) => l.trim()).filter((l) => l.startsWith('|'))
  .map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()))
  .filter((c) => !c.every((x) => /^:?-{2,}:?$/.test(x)));
const normUrl = (u) => u.replace(/#.*$/, '').replace(/[.,;:]+$/, '').replace(/\/$/, '');

// ---------- commands ----------

export function init(root, slug, request = '', extra = '') {
  const p = paths(root, slug);
  if (existsSync(p.dir)) fail(`editorial/${slug} already exists; choose another slug or inspect it with status`);
  if (existsSync(join(p.posts, `${slug}.md`))) fail(`a published post with slug "${slug}" already exists`);
  mkdirSync(p.dir, { recursive: true });
  writeFileSync(p.input, `# Input\n\n## Request\n\n${request.trim() || '(empty)'}\n\n## Supplied material\n\n${extra.trim() || 'None supplied.'}\n\n## Author experiences\n\nNone supplied.\n\n## Constraints\n\nNone.\n`);
  saveState(p, { slug, request, created: now(), stage: 'initialized', revisions: 0, reviews: [], locks: {}, log: [{ at: now(), event: 'init' }] });
  return `initialized editorial/${slug}. Fill in input.md, then: begin ${slug} brief`;
}

export function begin(root, slug, stage) {
  const p = paths(root, slug);
  const s = loadState(p);
  if (!TRANSITIONS[stage]) fail(`unknown stage "${stage}" (brief|draft|review|revise)`);
  if (!TRANSITIONS[stage].includes(s.stage)) fail(`cannot begin "${stage}" while workflow is "${s.stage}"`);
  if (stage === 'revise' && s.revisions >= MAX_REVISIONS) stop(`revision limit (${MAX_REVISIONS}) reached`);
  s.active = { stage, at: now(), files: snapshotDir(p.dir), git: gitStatus(root),
    appendOnly: Object.fromEntries((APPEND_ONLY[stage] ?? []).map((f) => [f, existsSync(join(p.dir, f)) ? read(join(p.dir, f)) : ''])) };
  s.stage = `${stage}-in-progress`;
  s.log.push({ at: now(), event: `begin ${stage}` });
  saveState(p, s);
  return `stage "${stage}" started; ${stage === 'brief' || stage === 'review' ? 'critical-editor' : 'editorial-writer'} may now write: ${OWNERSHIP[stage].join(', ')}`;
}

function checkOwnership(p, s, stage) {
  if (!s.active || s.active.stage !== stage) fail(`stage "${stage}" was not started with begin`);
  const before = s.active.files, after = snapshotDir(p.dir);
  const changed = [...new Set([...Object.keys(before), ...Object.keys(after)])].filter((f) => before[f] !== after[f]);
  const illegal = changed.filter((f) => !OWNERSHIP[stage].includes(f));
  if (illegal.length) fail(`files changed that ${stage} may not touch: ${illegal.join(', ')}`);
  for (const [f, prev] of Object.entries(s.active.appendOnly ?? {})) {
    const cur = existsSync(join(p.dir, f)) ? read(join(p.dir, f)) : '';
    if (!cur.startsWith(prev)) fail(`${f} is append-only, but earlier content was modified`);
  }
  const g = gitStatus(p.root);
  if (g !== null && s.active.git !== null) {
    const outside = (txt) => txt.split('\n').filter(Boolean).map((l) => l.slice(3)).filter((f) => !f.startsWith(`editorial/${p.slug}/`) && f !== `editorial/${p.slug}`);
    const prev = new Set(outside(s.active.git));
    const added = outside(g).filter((f) => !prev.has(f));
    if (added.length) fail(`files outside editorial/${p.slug}/ changed during ${stage}: ${added.join(', ')}`);
  }
  return changed;
}

export function parseBrief(text, slug) {
  const errors = [];
  const { fm, body, error } = splitFrontmatter(text);
  if (!fm) return { errors: [`brief frontmatter missing or invalid${error ? `: ${error}` : ''}`] };
  for (const k of ['slug', 'status', 'kind', 'target_words', 'working_title', 'thesis']) if (fm[k] === undefined || fm[k] === '') errors.push(`frontmatter "${k}" missing`);
  if (fm.slug && fm.slug !== slug) errors.push(`frontmatter slug "${fm.slug}" does not match folder "${slug}"`);
  if (fm.status && !['BRIEF_READY', 'NEEDS_INPUT', 'BLOCKED'].includes(fm.status)) errors.push(`status "${fm.status}" invalid`);
  if (fm.kind && !['essay', 'break-and-change'].includes(fm.kind)) errors.push(`kind "${fm.kind}" invalid`);
  if (fm.target_words && !/^\d+\s*-\s*\d+$/.test(String(fm.target_words))) errors.push('target_words must look like "700-1000"');
  if (fm.kind === 'break-and-change') {
    for (const k of ['book_title', 'book_author', 'book_year', 'category', 'book_access']) if (fm[k] === undefined || fm[k] === '') errors.push(`break-and-change brief needs frontmatter "${k}"`);
    if (fm.category && !CATEGORIES.includes(fm.category)) errors.push(`category "${fm.category}" is not one of: ${CATEGORIES.join('; ')}`);
    if (fm.book_access && !['full-text', 'excerpts', 'none'].includes(fm.book_access)) errors.push('book_access must be full-text | excerpts | none');
    if (fm.book_access === 'none' && fm.status === 'BRIEF_READY') errors.push('book_access is "none": a Break & Change article cannot be based on the book, status must be NEEDS_INPUT');
    if (fm.book_year !== undefined && !Number.isInteger(fm.book_year)) errors.push('book_year must be an integer');
  }
  if (typeof fm.thesis === 'string' && fm.thesis.trim().split(/\s+/).length < 6) errors.push('thesis is too short to be an arguable sentence');
  const sec = sections(body);
  for (const n of BRIEF_SECTIONS) if (!(n in sec)) errors.push(`section "## ${n}" missing`);
  else if (!sec[n].trim()) errors.push(`section "## ${n}" is empty`);
  if (PLACEHOLDER.test(body)) errors.push('placeholder marker found (TODO/TBD/FIXME/[VERIFY])');

  const exp = (sec.Experience ?? '').match(/^Source:\s*([a-z-]+)/m);
  if (!exp || !EXPERIENCE_SOURCES.includes(exp[1])) errors.push(`Experience must declare "Source: ${EXPERIENCE_SOURCES.join(' | ')}"`);
  else if (exp[1] === 'missing' && fm.status === 'BRIEF_READY') errors.push('Experience source is "missing": status must be NEEDS_INPUT');

  const sources = {};
  for (const line of (sec.Sources ?? '').split('\n')) {
    const m = line.match(/^\s*-\s*(S\d+)\b(.*)$/);
    if (!m) continue;
    const insp = m[2].match(/Inspected:\s*(yes|no)/i);
    const url = m[2].match(/https?:\/\/[^\s>)\]]+/);
    if (!insp) errors.push(`source ${m[1]} lacks "Inspected: yes|no"`);
    if (!url && !/self-contained/i.test(m[2])) errors.push(`source ${m[1]} has no URL (or "self-contained")`);
    sources[m[1]] = { inspected: insp?.[1].toLowerCase() === 'yes', url: url ? normUrl(url[0]) : null };
  }
  const rows = tableRows(sec['Claims and Evidence'] ?? '');
  const header = rows.shift();
  if (!header || header.map((h) => h.toLowerCase()).join('|') !== 'id|claim|type|sources|status') errors.push('claims table header must be: ID | Claim | Type | Sources | Status');
  if (!rows.length) errors.push('claims table has no rows');
  for (const r of rows) {
    const [id, , type, srcs = '', status] = r;
    const t = (type ?? '').toLowerCase(), st = (status ?? '').toLowerCase();
    if (!/^C\d+$/.test(id ?? '')) errors.push(`claim id "${id}" must look like C1`);
    if (!CLAIM_TYPES.includes(t)) errors.push(`${id}: type "${type}" not in ${CLAIM_TYPES.join('/')}`);
    if (!CLAIM_STATUS.includes(st)) errors.push(`${id}: status "${status}" not in ${CLAIM_STATUS.join('/')}`);
    const ids = srcs.match(/S\d+/g) ?? [];
    if (t === 'evidence' && st !== 'verified') errors.push(`${id}: evidence claims must be verified (or reclassify / remove)`);
    if (t === 'evidence' && !ids.length) errors.push(`${id}: evidence claim cites no source`);
    for (const sid of ids) {
      if (!sources[sid]) errors.push(`${id}: cites ${sid}, which is not listed under Sources`);
      else if (!sources[sid].inspected) errors.push(`${id}: cites ${sid}, which was not inspected`);
    }
  }
  return { errors, fm, sources };
}

export function checkBrief(root, slug) {
  const p = paths(root, slug);
  const s = loadState(p);
  checkOwnership(p, s, 'brief');
  if (!existsSync(p.brief)) fail('editorial-brief.md was not produced');
  const { errors, fm } = parseBrief(read(p.brief), slug);
  if (errors.length) fail(`brief contract violations:\n  - ${errors.join('\n  - ')}`);
  s.active = null;
  if (fm.status !== 'BRIEF_READY') {
    s.stage = fm.status === 'NEEDS_INPUT' ? 'needs-input' : 'blocked';
    s.log.push({ at: now(), event: `brief ${fm.status}` });
    saveState(p, s);
    stop(`editor returned ${fm.status}. Read editorial/${slug}/editorial-brief.md (Research Gaps / Experience) and ask the author.`);
  }
  s.locks = { brief: sha(p.brief), thesis: fm.thesis, kind: fm.kind, target_words: String(fm.target_words),
    ...(fm.kind === 'break-and-change' ? { book: { title: fm.book_title, author: fm.book_author, year: fm.book_year, category: fm.category }, bookAccess: fm.book_access } : {}) };
  const series = parseSeriesArchitecture(read(p.brief));
  if (series.error) fail(`brief contract violations:\n  - ${series.error}`);
  if (series.parts) s.locks.series = series;
  s.stage = 'brief-approved';
  s.log.push({ at: now(), event: 'brief approved by gate' });
  saveState(p, s);
  return `brief OK and locked. Thesis: "${fm.thesis}"`;
}

function checkDraftContent(p, s) {
  if (s.locks.series) return checkSeriesDraftContent(p, s);
  const errors = [], warnings = [];
  if (sha(p.brief) !== s.locks.brief) errors.push('editorial-brief.md changed after it was locked (thesis lock)');
  if (!existsSync(p.draft)) return { errors: ['draft.md was not produced'], warnings };
  const text = read(p.draft);
  const { fm, body } = splitFrontmatter(text);
  if (!fm) return { errors: ['draft.md frontmatter missing or invalid'], warnings };
  if (fm.draft !== true) errors.push('draft.md must have draft: true (publication is a human decision)');
  if (s.locks.kind === 'break-and-change') {
    if (fm.series !== 'break-and-change') errors.push('brief kind is break-and-change: draft needs series: break-and-change');
    const b = fm.book ?? {}, L = s.locks.book ?? {};
    for (const k of ['title', 'author', 'year', 'category']) if (b[k] !== L[k]) errors.push(`book.${k} must match the brief ("${L[k]}"), found "${b[k]}"`);
    if (fm.editorialDate !== undefined) errors.push('do not set editorialDate in the draft; finalize assigns the archive slot');
  }

  // Repository validator, run as if published, on an isolated copy.
  const tmp = mkdtempSync(join(tmpdir(), 'editorial-'));
  try {
    let probe = text.replace(/^draft:\s*true\s*$/m, 'draft: false');
    // A Break & Change draft has no slot yet: validate it against the slot finalize would assign.
    if (s.locks.kind === 'break-and-change' && fm.editorialDate === undefined) probe = probe.replace(/^date:.*$/m, (d) => `${d}\neditorialDate: ${nextSlot(takenSlots(p)) ?? '1900-01-01'}`);
    writeFileSync(join(tmp, `${p.slug}.md`), probe);
    const r = validate(tmp, { catalogPath: p.catalog });
    errors.push(...r.errors.map((e) => `validator: ${e.replace(tmp + '/', '')}`));
    warnings.push(...r.warnings.map((w) => `validator: ${w.replace(tmp + '/', '')}`));
  } finally { rmSync(tmp, { recursive: true, force: true }); }

  if (existsSync(p.posts)) {
    for (const post of readPosts(p.posts)) {
      if (post.slug === p.slug) errors.push(`slug collides with existing post ${post.slug}`);
      if (post.fm?.title && fm.title && post.fm.title.trim().toLowerCase() === String(fm.title).trim().toLowerCase()) errors.push(`title collides with existing post ${post.slug}`);
    }
  }
  const briefUrls = new Set(Object.values(parseBrief(read(p.brief), p.slug).sources ?? {}).map((x) => x.url).filter(Boolean));
  const draftUrls = [...new Set([...extractLinks(body).map((l) => l.href), ...(body.match(/https?:\/\/[^\s)>\]]+/g) ?? [])].filter(isExternal).map(normUrl))];
  for (const u of draftUrls) if (!briefUrls.has(u)) errors.push(`URL not in the brief's Sources (unvetted source): ${u}`);

  const [lo, hi] = s.locks.target_words.split('-').map((x) => parseInt(x, 10));
  const words = splitReferences(body).main.replace(/<!--[\s\S]*?-->/g, '').split(/\s+/).filter(Boolean).length;
  if (words < lo * 0.85 || words > hi * 1.15) warnings.push(`${words} words; brief target is ${s.locks.target_words}`);
  return { errors, warnings, words };
}

export function checkDraft(root, slug, stage = 'draft') {
  const p = paths(root, slug);
  const s = loadState(p);
  checkOwnership(p, s, stage);
  const { errors, warnings, words } = checkDraftContent(p, s);
  if (stage === 'revise') errors.push(...checkNotes(p, s));
  if (errors.length) fail(`draft gate failed:\n  - ${errors.join('\n  - ')}${warnings.length ? `\n warnings:\n  - ${warnings.join('\n  - ')}` : ''}`);
  if (stage === 'revise') s.revisions += 1;
  s.active = null;
  s.stage = 'draft-ready';
  s.log.push({ at: now(), event: `${stage} accepted by gate`, words, warnings });
  saveState(p, s);
  return `draft OK (${words} words)${warnings.length ? `\nwarnings (for the editor to judge):\n  - ${warnings.join('\n  - ')}` : ''}`;
}
export const checkRevision = (root, slug) => checkDraft(root, slug, 'revise');

function lastRound(text) {
  const parts = text.split(/^## Round (\d+)\s*$/m);
  if (parts.length < 3) return null;
  return { n: parseInt(parts[parts.length - 2], 10), body: parts[parts.length - 1] };
}

export function parseReview(body) {
  const errors = [];
  const verdict = body.match(/^Verdict:\s*(APPROVED|REVISION_REQUIRED|BLOCKED)\s*$/m)?.[1];
  const thesis = body.match(/^Thesis preserved:\s*(yes|no)\s*$/mi)?.[1]?.toLowerCase();
  const open = body.match(/^Open factual\/citation issues:\s*(\d+)\s*$/m);
  if (!verdict) errors.push('missing "Verdict: APPROVED|REVISION_REQUIRED|BLOCKED"');
  if (!thesis) errors.push('missing "Thesis preserved: yes|no"');
  if (!open) errors.push('missing "Open factual/citation issues: <n>"');
  const scores = {};
  for (const r of tableRows(body)) {
    const name = CRITERIA.find((c) => c.toLowerCase() === (r[0] ?? '').toLowerCase());
    if (name) scores[name] = Number(r[1]);
  }
  for (const c of CRITERIA) {
    if (!(c in scores)) errors.push(`criterion "${c}" missing`);
    else if (!Number.isInteger(scores[c]) || scores[c] < 1 || scores[c] > 5) errors.push(`criterion "${c}" score must be 1-5`);
  }
  const sec = Object.fromEntries(body.split(/^### +/m).slice(1).map((x) => { const i = x.indexOf('\n'); return [x.slice(0, i).trim(), x.slice(i + 1)]; }));
  const issues = [...(sec['Factual and citation issues'] ?? '').matchAll(/^\s*-\s*(I\d+)\b/gm)].map((m) => m[1]);
  const feedback = [...(sec.Feedback ?? '').matchAll(/^\s*-\s*(F\d+)\b/gm)].map((m) => m[1]);
  if (!('Factual and citation issues' in sec)) errors.push('section "### Factual and citation issues" missing');
  if (!('Feedback' in sec)) errors.push('section "### Feedback" missing');
  if (open && Number(open[1]) !== issues.length) errors.push(`"Open factual/citation issues: ${open[1]}" but ${issues.length} I-items listed`);
  if (verdict === 'APPROVED') {
    const low = CRITERIA.filter((c) => scores[c] < 4);
    if (low.length) errors.push(`APPROVED is not allowed with scores below 4: ${low.join(', ')}`);
    if (issues.length) errors.push('APPROVED is not allowed with open factual/citation issues');
    if (thesis !== 'yes') errors.push('APPROVED is not allowed when the thesis was not preserved');
  }
  if (verdict === 'REVISION_REQUIRED' && !issues.length && !feedback.length) errors.push('REVISION_REQUIRED needs at least one I- or F-item');
  return { errors, verdict, scores, issues, feedback, thesis };
}

export function checkReview(root, slug) {
  const p = paths(root, slug);
  const s = loadState(p);
  checkOwnership(p, s, 'review');
  if (sha(p.brief) !== s.locks.brief) fail('editorial-brief.md changed after it was locked');
  if (!existsSync(p.review)) fail('review.md was not produced');
  const last = lastRound(read(p.review));
  const expected = s.reviews.length + 1;
  if (!last) fail('review.md has no "## Round N" section');
  if (last.n !== expected) fail(`latest review round is ${last.n}, expected ${expected}`);
  const r = s.locks.series ? parseSeriesReview(last.body, s.locks.series.parts) : parseReview(last.body);
  if (r.errors.length) fail(`review contract violations (round ${last.n}):\n  - ${r.errors.join('\n  - ')}`);
  s.reviews.push({ round: last.n, at: now(), verdict: r.verdict, scores: r.scores, issues: r.issues, feedback: r.feedback, thesisPreserved: r.thesis, ...(r.parts ? { parts: r.parts, seriesVerdict: r.seriesVerdict } : {}) });
  s.active = null;
  let msg;
  if (r.verdict === 'APPROVED') { s.stage = 'approved'; msg = `round ${last.n}: APPROVED. Next: finalize ${slug}`; }
  else if (r.verdict === 'BLOCKED') { s.stage = 'blocked'; }
  else if (s.revisions >= MAX_REVISIONS) { s.stage = 'stopped-limit'; }
  else {
    mkdirSync(p.history, { recursive: true });
    copyFileSync(p.draft, join(p.history, `draft-r${last.n}.md`));
    s.stage = 'revision-required';
    msg = `round ${last.n}: REVISION_REQUIRED (${r.issues.length} issue(s), ${r.feedback.length} feedback item(s); revision ${s.revisions + 1} of ${MAX_REVISIONS}). Next: begin ${slug} revise`;
  }
  s.log.push({ at: now(), event: `review round ${last.n}: ${r.verdict}` });
  saveState(p, s);
  if (s.stage === 'blocked') stop(`round ${last.n}: editor returned BLOCKED. See editorial/${slug}/review.md`);
  if (s.stage === 'stopped-limit') stop(`round ${last.n}: still REVISION_REQUIRED after ${MAX_REVISIONS} revisions. Revision limit reached; human decision needed`);
  return msg;
}

function checkNotes(p, s) {
  const errors = [];
  const review = s.reviews[s.reviews.length - 1];
  if (!existsSync(p.notes)) return ['revision-notes.md was not produced'];
  const text = read(p.notes);
  const parts = text.split(/^## Round (\d+) response\s*$/m);
  if (parts.length < 3 || Number(parts[parts.length - 2]) !== review.round) return [`revision-notes.md needs "## Round ${review.round} response"`];
  const body = parts[parts.length - 1];
  for (const id of [...review.issues, ...review.feedback]) {
    const m = body.match(new RegExp(`^\\s*-\\s*${id}:\\s*(done|declined)\\b`, 'm'));
    if (!m) errors.push(`revision-notes: no "done|declined" response for ${id}`);
    else if (m[1] === 'declined' && /(^|-)I\d+$/.test(id)) errors.push(`revision-notes: factual/citation issue ${id} cannot be declined`);
  }
  if (!/^Thesis:\s*unchanged\s*$/m.test(body)) errors.push('revision-notes: missing "Thesis: unchanged"');
  return errors;
}

/** Archive slots already used by posts (published or draft) and by other finalized workflows. */
export function takenSlots(p) {
  const out = new Set();
  const add = (v) => { if (v) out.add(v instanceof Date ? v.toISOString().slice(0, 10) : String(v)); };
  if (existsSync(p.posts)) for (const post of readPosts(p.posts)) add(post.fm?.editorialDate);
  const ed = join(p.root, 'editorial');
  if (existsSync(ed)) for (const d of readdirSync(ed)) {
    if (d === p.slug) continue;
    const f = join(ed, d, 'final.md');
    if (existsSync(f)) add(parsePost(f).fm?.editorialDate);
    const fd = join(ed, d, 'final');
    if (existsSync(fd)) for (const x of readdirSync(fd)) if (x.endsWith('.md')) add(parsePost(join(fd, x)).fm?.editorialDate);
  }
  return out;
}

export function finalize(root, slug) {
  const p = paths(root, slug);
  const s = loadState(p);
  if (s.stage !== 'approved') fail(`cannot finalize: workflow is "${s.stage}", not "approved"`);
  if (s.locks.series) return finalizeSeries(p, s);
  const { errors, warnings, words } = checkDraftContent(p, s);
  if (errors.length) fail(`final checks failed:\n  - ${errors.join('\n  - ')}`);
  let finalText = read(p.draft), slot = null;
  if (s.locks.kind === 'break-and-change') {
    slot = nextSlot(takenSlots(p));
    if (!slot) stop('the ~240-week archive horizon is exhausted; the owner must decide how to date this article');
    finalText = finalText.replace(/^date:.*$/m, (d) => `${d}\neditorialDate: ${slot}   # archive slot assigned by pipeline finalize (policy §6)`);
  }
  writeFileSync(p.final, finalText);
  const { fm } = splitFrontmatter(read(p.final));

  const tmp = mkdtempSync(join(tmpdir(), 'editorial-links-'));
  let links = '(not run)';
  try {
    writeFileSync(join(tmp, `${slug}.md`), read(p.final).replace(/^draft:\s*true\s*$/m, 'draft: false'));
    const r = spawnSync(process.execPath, [join(root, 'scripts', 'check-links.mjs'), tmp], { encoding: 'utf8', timeout: 180000 });
    links = (r.stdout || r.stderr || '').trim();
  } finally { rmSync(tmp, { recursive: true, force: true }); }

  const last = s.reviews[s.reviews.length - 1];
  const md = `# Publication package: ${fm.title}

**Status: awaiting the author's explicit approval. Nothing has been committed, pushed or deployed.**

## Metadata

| Field | Value |
|---|---|
| Target file | \`src/content/posts/${slug}.md\` |
| Title | ${fm.title} |
| Description | ${fm.description} |
| Date (actual) | ${fm.date} |
| Editorial date (archive slot) | ${slot ?? 'n/a (essay: dated by its actual date)'} |
| Book | ${fm.book ? `${fm.book.title}, ${fm.book.author} (${fm.book.year}). Category: ${fm.book.category}. Access used: ${s.locks.bookAccess}` : 'n/a'} |
| Topics | ${(fm.topics ?? []).join(', ')} |
| Tags | ${(fm.tags ?? []).join(', ')} |
| Words (body) | ${words} |
| Thesis (locked) | ${s.locks.thesis} |

## Review history

| Round | Verdict | ${SHORT.join(' | ')} |
|---|---|${CRITERIA.map(() => '---').join('|')}|
${s.reviews.map((r) => `| ${r.round} | ${r.verdict} | ${CRITERIA.map((c) => r.scores[c]).join(' | ')} |`).join('\n')}

Approved in round ${last.round} after ${s.revisions} revision(s).

## Automated checks

- Repository validator (as published): passed${warnings.length ? `, with warnings:\n${warnings.map((w) => `  - ${w}`).join('\n')}` : ''}
- Source gate: every URL in the article is in the editor's inspected Sources.
- Link check:

\`\`\`
${links}
\`\`\`

## Still requires human review

- Automated checks verify structure and reachability, not truth. Spot-check the key claims against the sources in
  \`editorial-brief.md\`.
- Any opinion presented as the author's own must actually be the author's.
- Hypothetical examples must be clearly labelled.

## To publish (only with explicit approval)

1. Copy \`final.md\` to \`src/content/posts/${slug}.md\` and set \`draft: false\`.${fm.book ? `\n   Also record the category and article in \`docs/BOOK_CATALOG.md\` (row "${fm.book.title}").` : ''}
2. \`npm run build && npm run check-links\`.
3. Commit on a branch (include \`editorial/${slug}/\`), show the author, push or merge only when approved.
`;
  writeFileSync(p.publication, md);
  if (slot) s.editorialDate = slot;
  s.stage = 'awaiting-human-approval';
  s.log.push({ at: now(), event: 'finalized; awaiting human approval' });
  saveState(p, s);
  return `final.md and publication.md written. STOP: present editorial/${slug}/publication.md to the author for approval.`;
}


// ---------- multi-post series (docs/EDITORIAL_WORKFLOW.md, "Series extension") ----------
const STAGE_ORDER = ['BREAK', 'CHANGE', 'EXPERIENCE', 'CHALLENGE', 'QUESTION'];
const PART_MARK = /^<!-- PART (\d+): ([a-z0-9]+(?:-[a-z0-9]+)*) -->\s*$/gm;

/** Reads "## Series Architecture" with "### Part N — <title> — <STAGE>" subsections. No section = not a series. */
export function parseSeriesArchitecture(text) {
  const { body } = splitFrontmatter(text);
  const sec = sections(body)['Series Architecture'];
  if (sec === undefined) return {};
  const heads = [...sec.matchAll(/^### Part (\d+)\s+[—-]\s+(.+?)\s+[—-]\s+([A-Z]+)\s*$/gm)];
  if (heads.length < 2) return { error: 'Series Architecture needs at least two "### Part N — <title> — <STAGE>" subsections' };
  const parts = heads.map((m) => ({ number: Number(m[1]), title: m[2].trim(), stage: m[3] }));
  if (parts.some((x, i) => x.number !== i + 1)) return { error: 'Series Architecture parts must be numbered 1..N in order' };
  return { parts: parts.length, outline: parts };
}

/** Splits a series draft into parts at "<!-- PART N: slug -->" markers. */
export function splitParts(text) {
  const marks = [...text.matchAll(PART_MARK)];
  return marks.map((m, i) => ({ number: Number(m[1]), slug: m[2], text: text.slice(m.index + m[0].length, i + 1 < marks.length ? marks[i + 1].index : undefined).replace(/^\s+/, '') }));
}

function checkSeriesDraftContent(p, s) {
  const errors = [], warnings = [], L = s.locks, N = L.series.parts;
  if (sha(p.brief) !== L.brief) errors.push('editorial-brief.md changed after it was locked (thesis lock)');
  if (!existsSync(p.draft)) return { errors: ['draft.md was not produced'], warnings };
  const parts = splitParts(read(p.draft));
  if (parts.length !== N) return { errors: [`series draft must contain exactly ${N} "<!-- PART N: slug -->" sections, found ${parts.length}`], warnings };
  const briefUrls = new Set(Object.values(parseBrief(read(p.brief), p.slug).sources ?? {}).map((x) => x.url).filter(Boolean));
  const slot = L.kind === 'break-and-change' ? (nextSlot(takenSlots(p)) ?? '1900-01-01') : null;
  const existing = existsSync(p.posts) ? readPosts(p.posts) : [];
  const [lo, hi] = L.target_words.split('-').map((x) => parseInt(x, 10));
  const words = [];
  const tmp = mkdtempSync(join(tmpdir(), 'editorial-series-'));
  try {
    const seen = new Set();
    for (const [i, part] of parts.entries()) {
      const tag = `part ${part.number}`;
      if (part.number !== i + 1) errors.push(`parts must be in order 1..${N}; found ${part.number} at position ${i + 1}`);
      if (seen.has(part.slug)) errors.push(`${tag}: duplicate slug ${part.slug}`); seen.add(part.slug);
      const { fm, body } = splitFrontmatter(part.text);
      if (!fm) { errors.push(`${tag}: frontmatter missing or invalid`); continue; }
      if (fm.draft !== true) errors.push(`${tag}: must have draft: true (publication is a human decision)`);
      if (fm.editorialDate !== undefined) errors.push(`${tag}: do not set editorialDate; finalize assigns one shared slot`);
      const sp = fm.seriesPart ?? {}, o = L.series.outline[i] ?? {};
      if (sp.slug !== p.slug) errors.push(`${tag}: seriesPart.slug must be "${p.slug}"`);
      if (sp.number !== part.number || sp.total !== N) errors.push(`${tag}: seriesPart.number/total must be ${part.number}/${N}`);
      if (o.stage && sp.stage !== o.stage) errors.push(`${tag}: seriesPart.stage must be "${o.stage}" (from the brief)`);
      if (L.kind === 'break-and-change') {
        if (fm.series !== 'break-and-change') errors.push(`${tag}: needs series: break-and-change`);
        const b = fm.book ?? {};
        for (const k of ['title', 'author', 'year', 'category']) if (b[k] !== L.book[k]) errors.push(`${tag}: book.${k} must match the brief ("${L.book[k]}")`);
      }
      for (const post of existing) {
        if (post.slug === part.slug) errors.push(`${tag}: slug collides with existing post ${post.slug}`);
        if (post.fm?.title && fm.title && post.fm.title.trim().toLowerCase() === String(fm.title).trim().toLowerCase()) errors.push(`${tag}: title collides with existing post ${post.slug}`);
      }
      const urls = [...new Set([...extractLinks(body).map((l) => l.href), ...(body.match(/https?:\/\/[^\s)>\]]+/g) ?? [])].filter(isExternal).map(normUrl))];
      for (const u of urls) if (!briefUrls.has(u)) errors.push(`${tag}: URL not in the brief's Sources (unvetted source): ${u}`);
      const w = splitReferences(body).main.replace(/<!--[\s\S]*?-->/g, '').split(/\s+/).filter(Boolean).length;
      words.push(w);
      if (w < lo * 0.85 || w > hi * 1.15) warnings.push(`${tag}: ${w} words; brief target is ${L.target_words}`);
      let probe = part.text.replace(/^draft:\s*true\s*$/m, 'draft: false');
      if (slot) probe = probe.replace(/^date:.*$/m, (d) => `${d}\neditorialDate: ${slot}`);
      writeFileSync(join(tmp, `${part.slug}.md`), probe);
    }
    const r = validate(tmp, { catalogPath: p.catalog });
    errors.push(...r.errors.map((e) => `validator: ${e.replace(tmp + '/', '')}`));
    warnings.push(...r.warnings.map((w) => `validator: ${w.replace(tmp + '/', '')}`));
  } finally { rmSync(tmp, { recursive: true, force: true }); }
  return { errors, warnings, words: words.join('/') };
}

function parseCriteriaTable(text, criteria) {
  const scores = {}, errors = [];
  for (const r of tableRows(text)) {
    const name = criteria.find((c) => c.toLowerCase() === (r[0] ?? '').toLowerCase());
    if (name) scores[name] = /^n\/a$/i.test(r[1] ?? '') ? 'n/a' : Number(r[1]);
  }
  for (const c of criteria) {
    if (!(c in scores)) errors.push(`criterion "${c}" missing`);
    else if (scores[c] === 'n/a') { if (!OPTIONAL_CRITERIA.has(c)) errors.push(`criterion "${c}" cannot be n/a`); }
    else if (!Number.isInteger(scores[c]) || scores[c] < 1 || scores[c] > 5) errors.push(`criterion "${c}" score must be 1-5 (or n/a where allowed)`);
  }
  return { scores, errors };
}

/** Series review round: overall Verdict/Thesis, then "### Part N" blocks, a "### Series" block and "### Keep". */
export function parseSeriesReview(body, N) {
  const errors = [];
  const head = body.split(/^### /m)[0];
  const verdict = head.match(/^Verdict:\s*(APPROVED|REVISION_REQUIRED|BLOCKED)\s*$/m)?.[1];
  const thesis = head.match(/^Thesis preserved:\s*(yes|no)\s*$/mi)?.[1]?.toLowerCase();
  if (!verdict) errors.push('missing overall "Verdict: APPROVED|REVISION_REQUIRED|BLOCKED"');
  if (!thesis) errors.push('missing "Thesis preserved: yes|no"');
  const blocks = Object.fromEntries(body.split(/^### +/m).slice(1).map((x) => { const i = x.indexOf('\n'); return [x.slice(0, i).trim(), x.slice(i + 1)]; }));
  const sub = (t) => Object.fromEntries(t.split(/^#### +/m).slice(1).map((x) => { const i = x.indexOf('\n'); return [x.slice(0, i).trim(), x.slice(i + 1)]; }));
  const issues = [], feedback = [], parts = {}, scores = {};
  for (let n = 1; n <= N; n++) {
    const b = blocks[`Part ${n}`];
    if (b === undefined) { errors.push(`"### Part ${n}" block missing`); continue; }
    const v = b.match(/^Verdict:\s*(APPROVED|REVISION_REQUIRED)\s*$/m)?.[1];
    const open = b.match(/^Open factual\/citation issues:\s*(\d+)\s*$/m);
    if (!v) errors.push(`part ${n}: missing "Verdict: APPROVED|REVISION_REQUIRED"`);
    if (!open) errors.push(`part ${n}: missing "Open factual/citation issues: <n>"`);
    const t = parseCriteriaTable(b, SERIES_CRITERIA);
    errors.push(...t.errors.map((e) => `part ${n}: ${e}`));
    const ss = sub(b);
    if (!('Factual and citation issues' in ss)) errors.push(`part ${n}: "#### Factual and citation issues" missing`);
    if (!('Feedback' in ss)) errors.push(`part ${n}: "#### Feedback" missing`);
    const I = [...(ss['Factual and citation issues'] ?? '').matchAll(new RegExp(`^\\s*-\\s*(P${n}-I\\d+)\\b`, 'gm'))].map((m) => m[1]);
    const F = [...(ss.Feedback ?? '').matchAll(new RegExp(`^\\s*-\\s*(P${n}-F\\d+)\\b`, 'gm'))].map((m) => m[1]);
    if (open && Number(open[1]) !== I.length) errors.push(`part ${n}: "Open factual/citation issues: ${open[1]}" but ${I.length} P${n}-I items listed`);
    if (v === 'APPROVED') {
      const low = SERIES_CRITERIA.filter((c) => typeof t.scores[c] === 'number' && t.scores[c] < 4);
      if (low.length) errors.push(`part ${n}: APPROVED is not allowed with scores below 4: ${low.join(', ')}`);
      if (I.length) errors.push(`part ${n}: APPROVED is not allowed with open factual/citation issues`);
    }
    if (v === 'REVISION_REQUIRED' && !I.length && !F.length) errors.push(`part ${n}: REVISION_REQUIRED needs at least one P${n}-I or P${n}-F item`);
    issues.push(...I); feedback.push(...F);
    parts[n] = { verdict: v, issues: I, feedback: F };
    scores[`Part ${n}`] = t.scores;
  }
  const sb = blocks.Series;
  let seriesVerdict;
  if (sb === undefined) errors.push('"### Series" block (collective coherence review) missing');
  else {
    seriesVerdict = sb.match(/^Verdict:\s*(APPROVED|REVISION_REQUIRED)\s*$/m)?.[1];
    if (!seriesVerdict) errors.push('series: missing "Verdict: APPROVED|REVISION_REQUIRED"');
    const F = [...(sub(sb).Feedback ?? '').matchAll(/^\s*-\s*(S-F\d+)\b/gm)].map((m) => m[1]);
    if (!('Feedback' in sub(sb))) errors.push('series: "#### Feedback" missing');
    if (seriesVerdict === 'REVISION_REQUIRED' && !F.length) errors.push('series: REVISION_REQUIRED needs at least one S-F item');
    feedback.push(...F);
  }
  const allApproved = Object.values(parts).length === N && Object.values(parts).every((x) => x.verdict === 'APPROVED') && seriesVerdict === 'APPROVED';
  if (verdict === 'APPROVED') {
    if (!allApproved) errors.push('overall APPROVED requires every part and the series block to be APPROVED (hold the entire series otherwise)');
    if (issues.length || feedback.length) errors.push('overall APPROVED is not allowed with open items');
    if (thesis !== 'yes') errors.push('APPROVED is not allowed when the thesis was not preserved');
  }
  if (verdict === 'REVISION_REQUIRED' && allApproved) errors.push('overall verdict is REVISION_REQUIRED but every block is APPROVED');
  return { errors, verdict, scores, issues, feedback, thesis, parts, seriesVerdict };
}

function finalizeSeries(p, s) {
  const { errors, warnings, words } = checkSeriesDraftContent(p, s);
  if (errors.length) fail(`final checks failed:\n  - ${errors.join('\n  - ')}`);
  let slot = null;
  if (s.locks.kind === 'break-and-change') {
    slot = nextSlot(takenSlots(p));
    if (!slot) stop('the ~240-week archive horizon is exhausted; the owner must decide how to date this series');
  }
  const parts = splitParts(read(p.draft));
  const finalDir = join(p.dir, 'final');
  rmSync(finalDir, { recursive: true, force: true });
  mkdirSync(finalDir, { recursive: true });
  const rows = [];
  for (const part of parts) {
    let t = part.text;
    if (slot) t = t.replace(/^date:.*$/m, (d) => `${d}\neditorialDate: ${slot}   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)`);
    writeFileSync(join(finalDir, `${part.slug}.md`), t);
    const { fm } = splitFrontmatter(t);
    rows.push({ n: part.number, slug: part.slug, title: fm.title, stage: fm.seriesPart?.stage });
  }
  writeFileSync(p.final, parts.map((x) => `<!-- PART ${x.number}: ${x.slug} -->\n${readFileSync(join(finalDir, `${x.slug}.md`), 'utf8')}`).join('\n'));

  const tmp = mkdtempSync(join(tmpdir(), 'editorial-links-'));
  let links = '(not run)';
  try {
    for (const part of parts) writeFileSync(join(tmp, `${part.slug}.md`), readFileSync(join(finalDir, `${part.slug}.md`), 'utf8').replace(/^draft:\s*true\s*$/m, 'draft: false'));
    const r = spawnSync(process.execPath, [join(p.root, 'scripts', 'check-links.mjs'), tmp], { encoding: 'utf8', timeout: 300000 });
    links = (r.stdout || r.stderr || '').trim();
  } finally { rmSync(tmp, { recursive: true, force: true }); }

  const last = s.reviews[s.reviews.length - 1];
  const minOf = (sc) => Math.min(...Object.values(sc).filter((v) => typeof v === 'number'));
  const md = `# Publication package: series "${splitFrontmatter(read(join(finalDir, `${parts[0].slug}.md`))).fm.seriesPart?.title}"

**Status: awaiting the author's explicit approval. Nothing has been committed, pushed or deployed.**

## Parts (one weekly release)

| Part | Stage | Title | Target file | Words |
|---|---|---|---|---|
${rows.map((r, i) => `| ${r.n} | ${r.stage} | ${r.title} | \`src/content/posts/${r.slug}.md\` | ${String(words).split('/')[i]} |`).join('\n')}

- Editorial date (shared archive slot): ${slot ?? 'n/a'}
- Actual date: see each part's \`date\`
- Book: ${s.locks.book ? `${s.locks.book.title}, ${s.locks.book.author} (${s.locks.book.year}). Category: ${s.locks.book.category}. Access used: ${s.locks.bookAccess}` : 'n/a'}
- Thesis (locked): ${s.locks.thesis}

## Review history (lowest score per part; series coherence verdict)

| Round | Verdict | ${rows.map((r) => `P${r.n}`).join(' | ')} | Series |
|---|---|${rows.map(() => '---').join('|')}|---|
${s.reviews.map((r) => `| ${r.round} | ${r.verdict} | ${rows.map((x) => `${r.parts?.[x.n]?.verdict === 'APPROVED' ? '✓' : '✗'} ${minOf(r.scores[`Part ${x.n}`] ?? {})}`).join(' | ')} | ${r.seriesVerdict ?? ''} |`).join('\n')}

Approved in round ${last.round} after ${s.revisions} revision(s). Full scores: \`review.md\`.

## Automated checks

- Repository validator on all parts as published, sharing one slot: passed${warnings.length ? `, with warnings:\n${warnings.map((w) => `  - ${w}`).join('\n')}` : ''}
- Source gate: every URL in every part is in the editor's inspected Sources.
- Link check:

\`\`\`
${links}
\`\`\`

## Still requires human review

- Automated checks verify structure and reachability, not truth. Spot-check key claims against \`editorial-brief.md\`.
- Any opinion presented as the author's own must actually be the author's. Hypotheticals must be labelled.

## To publish (only with explicit approval)

1. Copy every file in \`final/\` to \`src/content/posts/\` and set \`draft: false\` in **all five** (the validator refuses a partial series).
2. Record the category and the series in \`docs/BOOK_CATALOG.md\`.
3. \`npm run build && npm run check-links\`, commit on a branch (include \`editorial/${p.slug}/\`), show the author, push only when approved.
`;
  writeFileSync(p.publication, md);
  if (slot) s.editorialDate = slot;
  s.stage = 'awaiting-human-approval';
  s.log.push({ at: now(), event: 'series finalized; awaiting human approval' });
  saveState(p, s);
  return `final/ (${parts.length} posts), final.md and publication.md written. STOP: present editorial/${p.slug}/publication.md to the author for approval.`;
}

export function status(root, slug) {
  const p = paths(root, slug);
  const s = loadState(p);
  return JSON.stringify({ slug: s.slug, stage: s.stage, revisions: `${s.revisions}/${MAX_REVISIONS}`, thesis: s.locks?.thesis,
    reviews: s.reviews.map((r) => ({ round: r.round, verdict: r.verdict, min: Math.min(...Object.values(r.scores)) })) }, null, 2);
}

// ---------- CLI ----------
const isMain = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;
if (isMain) {
  const [cmd, slug, ...rest] = process.argv.slice(2);
  // Repo root: EDITORIAL_ROOT, else the nearest ancestor of cwd that contains docs/EDITORIAL_WORKFLOW.md.
  let root = process.env.EDITORIAL_ROOT;
  if (!root) {
    let d = process.cwd();
    while (!existsSync(join(d, 'docs', 'EDITORIAL_WORKFLOW.md')) && dirname(d) !== d) d = dirname(d);
    root = existsSync(join(d, 'docs', 'EDITORIAL_WORKFLOW.md')) ? d : process.cwd();
  }
  const cmds = {
    init: () => init(root, slug, rest[0] ?? '', rest.slice(1).join(' ')),
    begin: () => begin(root, slug, rest[0]),
    'check-brief': () => checkBrief(root, slug),
    'check-draft': () => checkDraft(root, slug),
    'check-review': () => checkReview(root, slug),
    'check-revision': () => checkRevision(root, slug),
    finalize: () => finalize(root, slug),
    status: () => status(root, slug),
  };
  if (!cmds[cmd]) { console.error(`usage: pipeline.mjs <${Object.keys(cmds).join('|')}> <slug> [args]`); process.exit(1); }
  try { console.log(`OK: ${cmds[cmd]()}`); }
  catch (e) {
    if (e instanceof GateError) { console.error(`${e.code === 3 ? 'STOP' : 'FAIL'}: ${e.message}`); process.exit(e.code); }
    throw e;
  }
}
