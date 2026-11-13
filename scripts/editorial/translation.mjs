#!/usr/bin/env node
// Deterministic gates for the Spanish edition (docs/EDITORIAL_WORKFLOW.md, "Spanish edition").
// The coordinator runs these around the editorial-translator agent. Exit codes: 0 OK, 1 FAIL, 3 STOP.
// They check structure, file ownership and parity with the original. They cannot judge translation quality.
import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync, mkdtempSync, rmSync } from 'node:fs';
import { join, relative, basename, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { validate } from '../lib/validate.mjs';
import { parsePost, readPosts, splitReferences } from '../lib/content.mjs';

export class GateError extends Error { constructor(msg, code = 1) { super(msg); this.code = code; } }
const fail = (m) => { throw new GateError(m, 1); };
const sha = (f) => (existsSync(f) ? createHash('sha256').update(readFileSync(f)).digest('hex') : null);
const now = () => new Date().toISOString();
const NOTES_SECTIONS = ['Terminology', 'Quotations', 'Open questions'];

export function paths(root, job) {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(job ?? '')) fail(`invalid job "${job}" (lowercase kebab-case)`);
  const dir = join(root, 'editorial', job, 'translation-es');
  return { root, job, dir, state: join(dir, 'state.json'), notes: join(dir, 'notes.md'), publication: join(dir, 'publication.md'),
    posts: join(root, 'src', 'content', 'posts'), catalog: join(root, 'docs', 'BOOK_CATALOG.md') };
}
const load = (p) => { if (!existsSync(p.state)) fail(`no translation job at ${relative(p.root, p.dir)} (run init)`); return JSON.parse(readFileSync(p.state, 'utf8')); };
const save = (p, s) => writeFileSync(p.state, JSON.stringify(s, null, 2) + '\n');
function gitStatus(root) {
  try { return execFileSync('git', ['status', '--porcelain', '--untracked-files=all'], { cwd: root, encoding: 'utf8' }); } catch { return null; }
}
function snapshot(dir) {
  const out = {};
  if (existsSync(dir)) for (const f of readdirSync(dir)) if (f !== 'state.json' && f.endsWith('.md')) out[f] = sha(join(dir, f));
  return out;
}
const translations = (p) => readdirSync(p.dir).filter((f) => f.endsWith('.md') && !['notes.md', 'publication.md'].includes(f));

/** init <job> <source.md...>: sources are English originals (published posts or editorial final/ files). */
export function init(root, job, files) {
  const p = paths(root, job);
  if (existsSync(p.state)) fail(`translation job ${job} already exists`);
  if (!files.length) fail('give at least one English source file');
  const sources = files.map((f) => {
    const abs = join(root, f);
    if (!existsSync(abs)) fail(`source not found: ${f}`);
    const post = parsePost(abs);
    if (!post.fm) fail(`source has no valid frontmatter: ${f}`);
    if (post.fm.lang === 'es') fail(`source is already Spanish: ${f}`);
    return { file: f, slug: basename(f, '.md'), sha: sha(abs), title: post.fm.title };
  });
  mkdirSync(p.dir, { recursive: true });
  save(p, { job, created: now(), stage: 'initialized', sources, attempts: 0, log: [{ at: now(), event: 'init' }] });
  return `translation job ${job} initialized with ${sources.length} source(s). Next: begin ${job}`;
}

export function begin(root, job) {
  const p = paths(root, job), s = load(p);
  if (!['initialized', 'failed'].includes(s.stage)) fail(`cannot begin while job is "${s.stage}"`);
  s.active = { at: now(), files: snapshot(p.dir), git: gitStatus(root) };
  s.stage = 'translating';
  s.log.push({ at: now(), event: 'begin translation' });
  save(p, s);
  return `translation started; editorial-translator may write only *.md files in ${relative(root, p.dir)}/`;
}

export function check(root, job) {
  const p = paths(root, job), s = load(p);
  if (s.stage !== 'translating' || !s.active) fail('translation was not started with begin');
  const errors = [], warnings = [];
  // Ownership: nothing outside the job's translation folder may change.
  const g = gitStatus(root);
  if (g !== null && s.active.git !== null) {
    const outside = (t) => t.split('\n').filter(Boolean).map((l) => l.slice(3)).filter((f) => !f.startsWith(`editorial/${job}/translation-es/`));
    const prev = new Set(outside(s.active.git));
    const added = outside(g).filter((f) => !prev.has(f));
    if (added.length) errors.push(`files outside editorial/${job}/translation-es/ changed: ${added.join(', ')}`);
  }
  for (const src of s.sources) if (sha(join(root, src.file)) !== src.sha) errors.push(`source changed during translation: ${src.file}`);
  // Notes.
  if (!existsSync(p.notes)) errors.push('notes.md was not produced');
  else {
    const notes = readFileSync(p.notes, 'utf8');
    for (const sec of NOTES_SECTIONS) if (!new RegExp(`^## ${sec}\\s*$`, 'm').test(notes)) errors.push(`notes.md needs "## ${sec}"`);
  }
  // One translation per source.
  const files = translations(p);
  const bySource = new Map();
  for (const f of files) {
    const post = parsePost(join(p.dir, f));
    if (!post.fm) { errors.push(`${f}: frontmatter missing or invalid`); continue; }
    if (post.fm.lang !== 'es') errors.push(`${f}: needs lang: es`);
    if (post.fm.draft !== true) errors.push(`${f}: must have draft: true (publication is a human decision)`);
    const src = s.sources.find((x) => x.slug === post.fm.translationOf);
    if (!src) errors.push(`${f}: translationOf "${post.fm.translationOf}" is not one of this job's sources`);
    else if (bySource.has(src.slug)) errors.push(`${f}: second translation of ${src.slug} (also ${bySource.get(src.slug)})`);
    else bySource.set(src.slug, f);
  }
  for (const src of s.sources) if (!bySource.has(src.slug)) errors.push(`missing translation of ${src.file}`);
  // Collisions with the existing Spanish edition.
  const existingEs = readPosts(p.posts).filter((x) => x.lang === 'es');
  for (const f of files) {
    const slug = basename(f, '.md');
    const clash = existingEs.find((x) => x.slug === slug && x.fm?.translationOf !== parsePost(join(p.dir, f)).fm?.translationOf);
    if (clash) errors.push(`${f}: slug collides with existing Spanish post ${clash.slug}`);
  }
  // Repository validator, as published: originals at the top level, translations under es/.
  const tmp = mkdtempSync(join(tmpdir(), 'translation-'));
  try {
    mkdirSync(join(tmp, 'es'));
    const pub = (t) => t.replace(/^draft:\s*true\s*$/m, 'draft: false');
    for (const src of s.sources) writeFileSync(join(tmp, `${src.slug}.md`), pub(readFileSync(join(root, src.file), 'utf8')));
    for (const f of files) writeFileSync(join(tmp, 'es', f), pub(readFileSync(join(p.dir, f), 'utf8')));
    const r = validate(tmp, { catalogPath: p.catalog });
    const mine = (m) => m.includes(`${tmp}/es/`);
    errors.push(...r.errors.filter(mine).map((e) => `validator: ${e.replace(`${tmp}/`, '')}`));
    warnings.push(...r.warnings.filter(mine).map((w) => `validator: ${w.replace(`${tmp}/`, '')}`));
    // Spanish is usually 10-30% longer than English; flag big deviations (possible omissions or additions).
    for (const [slug, f] of bySource) {
      const words = (t) => splitReferences(t.replace(/^---[\s\S]*?---/, '')).main.split(/\s+/).filter(Boolean).length;
      const we = words(readFileSync(join(root, s.sources.find((x) => x.slug === slug).file), 'utf8'));
      const ws = words(readFileSync(join(p.dir, f), 'utf8'));
      const ratio = ws / Math.max(we, 1);
      if (ratio < 0.85 || ratio > 1.5) warnings.push(`${f}: ${ws} words vs ${we} in the original (ratio ${ratio.toFixed(2)}): check for omissions or additions`);
    }
  } finally { rmSync(tmp, { recursive: true, force: true }); }

  const before = s.active.files, after = snapshot(p.dir);
  s.attempts += 1;
  if (errors.length) {
    s.stage = 'failed'; s.active = null; s.log.push({ at: now(), event: 'check failed', errors }); save(p, s);
    fail(`translation gate failed:\n  - ${errors.join('\n  - ')}${warnings.length ? `\n warnings:\n  - ${warnings.join('\n  - ')}` : ''}`);
  }
  const rows = [...bySource].map(([slug, f]) => `| \`${s.sources.find((x) => x.slug === slug).file}\` | \`src/content/posts/es/${f}\` | ${parsePost(join(p.dir, f)).fm.title} |`);
  writeFileSync(p.publication, `# Spanish edition: ${job}

**Status: awaiting the author's explicit approval. Nothing has been committed, pushed or deployed.**

| Original | Target file | Spanish title |
|---|---|---|
${rows.join('\n')}

## Automated checks

- Parity with the original (same sources, sections, topics, tags, book, series fields, editorial date): passed
- Repository validator (as published): passed${warnings.length ? `, with warnings:\n${warnings.map((w) => `  - ${w}`).join('\n')}` : ''}
- Translator's notes (terminology, quotations, open questions): \`notes.md\`

## Still requires human review

- Automated checks cannot judge fidelity or style. Read the Spanish text against the original, at least the
  passages listed under "Open questions" in notes.md.

## To publish (only with explicit approval)

Copy each file to its target path, set \`draft: false\`, run \`npm run build\`, commit on a branch, push only when approved.
A translation may not be published before its original.
`);
  s.stage = 'awaiting-human-approval'; s.active = null;
  s.log.push({ at: now(), event: 'translation accepted by gate', warnings, changed: Object.keys(after).filter((k) => before[k] !== after[k]) });
  save(p, s);
  return `translations OK (${files.length}).${warnings.length ? `\nwarnings:\n  - ${warnings.join('\n  - ')}` : ''}\nSTOP: present editorial/${job}/translation-es/publication.md to the author.`;
}

export function status(root, job) {
  const s = load(paths(root, job));
  return JSON.stringify({ job: s.job, stage: s.stage, attempts: s.attempts, sources: s.sources.map((x) => x.file) }, null, 2);
}

const isMain = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;
if (isMain) {
  const [cmd, job, ...rest] = process.argv.slice(2);
  let root = process.env.EDITORIAL_ROOT;
  if (!root) {
    let d = process.cwd();
    while (!existsSync(join(d, 'docs', 'EDITORIAL_WORKFLOW.md')) && dirname(d) !== d) d = dirname(d);
    root = existsSync(join(d, 'docs', 'EDITORIAL_WORKFLOW.md')) ? d : process.cwd();
  }
  const cmds = { init: () => init(root, job, rest), begin: () => begin(root, job), check: () => check(root, job), status: () => status(root, job) };
  if (!cmds[cmd]) { console.error(`usage: translation.mjs <${Object.keys(cmds).join('|')}> <job> [source files]`); process.exit(1); }
  try { console.log(`OK: ${cmds[cmd]()}`); }
  catch (e) { if (e instanceof GateError) { console.error(`${e.code === 3 ? 'STOP' : 'FAIL'}: ${e.message}`); process.exit(e.code); } throw e; }
}
