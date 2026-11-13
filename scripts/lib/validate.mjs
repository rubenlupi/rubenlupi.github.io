// Editorial structure validation. Checks MACHINE-VERIFIABLE requirements only.
// It cannot establish factual accuracy, source relevance or quality of reasoning.
import { readFileSync, existsSync } from 'node:fs';
import { readPosts, extractLinks, isExternal, splitReferences, cleanBody } from './content.mjs';
import { ANCHOR, EARLIEST, CATEGORIES, isMonday } from './archive.mjs';

export const AREAS = [
  'Software Engineering', 'Learning & Education', 'Strength & Human Performance',
  'History & Classical Thinking', 'Mathematics & Reasoning', 'Systems & Organizations',
];
const ALLOWED = new Set(['title', 'description', 'date', 'topics', 'tags', 'draft', 'series', 'book', 'editorialDate', 'selfContained', 'seriesPart']);
export const STAGES = ['BREAK', 'CHANGE', 'EXPERIENCE', 'CHALLENGE', 'QUESTION'];
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const SERIES = new Set(['break-and-change']);
const CHAPTERS = [
  ['Key Ideas', 'BREAK'], ['What Still Matters Today', 'CHANGE'], ['Why We Keep Getting It Wrong', 'EXPERIENCE'],
  ["The Book's Blind Spots", 'CHALLENGE'], ['My Take', 'QUESTION'],
];
const PLACEHOLDER = /\b(TODO|TBD|FIXME|XXX)\b|\[VERIFY\]|\[CITATION NEEDED\]|\[citation needed\]|lorem ipsum/i;
const norm = (s) => s.replace(/[’‘]/g, "'");

const asDate = (v) => {
  const s = v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? '');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const d = new Date(`${s}T00:00:00Z`);
  return Number.isNaN(+d) || d.toISOString().slice(0, 10) !== s ? null : d;
};

export function loadCatalog(path) {
  if (!path || !existsSync(path)) return null;
  const rows = [];
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const c = line.split('|').map((x) => x.trim().replace(/\*\*/g, ''));
    if (c.length >= 6 && /^\d+$/.test(c[1])) rows.push({ title: c[2], author: c[3], year: c[4] });
  }
  return rows;
}

export function validate(dir, { catalogPath, today = new Date() } = {}) {
  const errors = [], warnings = [];
  const err = (f, m) => errors.push(`${f}: ${m}`);
  const warn = (f, m) => warnings.push(`${f}: ${m}`);
  const posts = readPosts(dir);
  const catalog = loadCatalog(catalogPath);
  const slugs = new Map(), titles = new Map(), slots = new Map(), seriesMap = new Map();

  for (const p of posts) {
    const f = p.file;
    if (!p.fm) { err(f, p.fmError); continue; }
    const { fm } = p;
    const published = fm.draft !== true;

    for (const k of Object.keys(fm)) if (!ALLOWED.has(k)) err(f, `unknown frontmatter key "${k}"`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) err(f, `slug "${p.slug}" must be lowercase kebab-case`);
    if (slugs.has(p.slug)) err(f, `duplicate slug "${p.slug}" (also ${slugs.get(p.slug)})`); else slugs.set(p.slug, f);

    for (const k of ['title', 'description']) {
      if (typeof fm[k] !== 'string' || !fm[k].trim()) err(f, `"${k}" is required and must be a non-empty string`);
    }
    if (typeof fm.title === 'string') {
      const t = fm.title.trim().toLowerCase();
      if (titles.has(t)) err(f, `duplicate title (also ${titles.get(t)})`); else titles.set(t, f);
    }
    if (fm.draft !== undefined && typeof fm.draft !== 'boolean') err(f, '"draft" must be true or false');
    if (fm.selfContained !== undefined && typeof fm.selfContained !== 'boolean') err(f, '"selfContained" must be true or false');

    const date = asDate(fm.date);
    if (!date) err(f, '"date" is required and must be a valid YYYY-MM-DD date');
    else if (published && +date > +today + 86400000) err(f, `"date" ${fm.date} is in the future but the article is published`);

    if (!Array.isArray(fm.topics)) err(f, '"topics" must be a list');
    else {
      for (const t of fm.topics) if (!AREAS.includes(t)) err(f, `unknown topic "${t}" (allowed: ${AREAS.join(', ')})`);
      if (published && fm.topics.length === 0) err(f, 'published articles need at least one topic');
    }
    if (!Array.isArray(fm.tags)) err(f, '"tags" must be a list');

    const isBC = fm.series !== undefined;
    if (isBC && !SERIES.has(fm.series)) err(f, `unknown series "${fm.series}"`);
    const edDate = fm.editorialDate !== undefined ? asDate(fm.editorialDate) : null;
    if (fm.editorialDate !== undefined && !edDate) err(f, '"editorialDate" must be a valid YYYY-MM-DD date');
    if (edDate && date && +edDate > +date) err(f, '"editorialDate" cannot be later than the actual "date"');
    if (edDate) {
      const e = String(fm.editorialDate instanceof Date ? fm.editorialDate.toISOString().slice(0, 10) : fm.editorialDate);
      if (!isMonday(e)) err(f, `"editorialDate" ${e} must be a Monday (weekly archive slots)`);
      if (e > ANCHOR) err(f, `"editorialDate" ${e} is after the archive anchor ${ANCHOR}`);
      if (e < EARLIEST) err(f, `"editorialDate" ${e} is before the archive horizon (${EARLIEST})`);
      // One weekly slot per release. Parts of the same multi-post series share their slot.
      const owner = fm.seriesPart?.slug ?? null;
      const prev = slots.get(e);
      if (prev && !(owner && prev.series === owner)) err(f, `"editorialDate" ${e} is already used by ${prev.file}`);
      else if (!prev) slots.set(e, { file: f, series: owner });
    }
    if (fm.book !== undefined) {
      const b = fm.book;
      if (!b || typeof b.title !== 'string' || typeof b.author !== 'string' || !Number.isInteger(b.year)) {
        err(f, '"book" needs title (string), author (string) and year (integer)');
      }
      if (b && b.category !== undefined && !CATEGORIES.includes(b.category)) err(f, `book.category "${b.category}" is not one of: ${CATEGORIES.join('; ')}`);
      if (b && Object.keys(b).some((k) => !['title', 'author', 'year', 'category'].includes(k))) err(f, 'book has unknown keys (allowed: title, author, year, category)');
      if (b && Number.isInteger(b.year) && edDate && edDate.getUTCFullYear() < b.year) {
        err(f, `"editorialDate" (${fm.editorialDate}) precedes the book's original publication year (${b.year})`);
      }
    }
    const sp = fm.seriesPart;
    if (sp !== undefined) {
      const okShape = sp && typeof sp.title === 'string' && sp.title.trim() && typeof sp.slug === 'string' && SLUG_RE.test(sp.slug)
        && Number.isInteger(sp.number) && Number.isInteger(sp.total) && sp.total >= 2 && sp.number >= 1 && sp.number <= sp.total;
      if (!okShape) err(f, 'seriesPart needs title (string), slug (kebab-case), number (1..total) and total (>= 2)');
      if (sp && Object.keys(sp).some((k) => !['title', 'slug', 'number', 'total', 'stage'].includes(k))) err(f, 'seriesPart has unknown keys (allowed: title, slug, number, total, stage)');
      if (isBC && okShape) {
        if (sp.total !== STAGES.length) err(f, `a Break & Change series has ${STAGES.length} parts (one per stage), found total ${sp.total}`);
        else if (sp.stage !== STAGES[sp.number - 1]) err(f, `seriesPart.stage must be "${STAGES[sp.number - 1]}" for part ${sp.number}`);
      }
      if (okShape) {
        if (!seriesMap.has(sp.slug)) seriesMap.set(sp.slug, []);
        seriesMap.get(sp.slug).push({ f, sp, published, ed: fm.editorialDate ? String(fm.editorialDate instanceof Date ? fm.editorialDate.toISOString().slice(0, 10) : fm.editorialDate) : null, book: fm.book?.title ?? null });
      }
    }
    if (isBC) {
      if (!fm.book) err(f, 'Break & Change articles need a "book" block');
      if (published && !edDate) err(f, 'published Break & Change articles need an "editorialDate" (see docs/BOOK_CATALOG.md)');
      if (published && fm.book && !fm.book.category) err(f, 'published Break & Change articles need book.category (chosen by the critical editor)');
      if (fm.book && catalog) {
        const row = catalog.find((r) => norm(r.title).toLowerCase() === norm(String(fm.book.title)).toLowerCase());
        if (!row) err(f, `book "${fm.book.title}" is not in docs/BOOK_CATALOG.md (no silent substitutions)`);
        else if (/unresolved/i.test(row.author) || row.year === '?' || /unresolved/i.test(row.year)) {
          err(f, `catalogue entry for "${row.title}" is unresolved; the owner must confirm the book first`);
        }
      }
    }

    // Body checks. Drafts get warnings; published articles get errors.
    const level = published ? err : warn;
    const { main, refs } = splitReferences(p.body);
    const text = cleanBody(p.body);
    if (PLACEHOLDER.test(text)) level(f, 'contains a placeholder marker (TODO/TBD/FIXME/[VERIFY]/…)');
    if (refs === null) level(f, 'missing "## References & Further Reading" section');
    else {
      const idx = p.body.search(/^##\s+References & Further Reading\s*$/m);
      if (/^##\s+/m.test(p.body.slice(idx + 3))) level(f, '"References & Further Reading" must be the last H2 section');
      const refLinks = extractLinks(refs).filter((l) => isExternal(l.href));
      const bare = (refs.match(/https?:\/\/[^\s)>\]]+/g) ?? []);
      if (refLinks.length === 0 && bare.length === 0) level(f, 'References section has no URLs');
    }

    const all = extractLinks(p.body);
    for (const l of all) {
      if (!l.href) level(f, `empty link target for [${l.text}]`);
      else if (/\s/.test(l.href)) level(f, `link target contains whitespace: "${l.href}"`);
      else if (/^https?:\/\/[^/]*$/.test(l.href) || /^https?:\/\/[^/]+\/?$/.test(l.href)) warn(f, `link points to a bare homepage, prefer a specific page: ${l.href}`);
      else if (/^http:\/\//i.test(l.href)) warn(f, `non-HTTPS link: ${l.href}`);
      if (l.kind === 'inline' && !l.text.trim()) level(f, `link with empty text: ${l.href}`);
    }
    const stray = cleanBody(p.body).replace(/\[[^\]]*\]\([^)]*\)/g, '');
    if (/\]\(\s*$/m.test(stray) || /\[[^\]\n]*\]\s+\(/.test(stray)) level(f, 'possibly malformed Markdown link (e.g. "] (" or unclosed "](")');

    if (!fm.selfContained) {
      const inline = extractLinks(main).filter((l) => isExternal(l.href));
      if (inline.length === 0) level(f, 'no inline external citation in the body (set selfContained: true only for self-contained derivations)');
    }
    if (refs !== null && !fm.selfContained) {
      const refUrls = new Set((refs.match(/https?:\/\/[^\s)>\]]+/g) ?? []).map((u) => u.replace(/[.,;]+$/, '')));
      for (const l of extractLinks(main).filter((x) => isExternal(x.href))) {
        if (!refUrls.has(l.href.replace(/[.,;]+$/, ''))) warn(f, `inline link not listed under References: ${l.href}`);
      }
    }

    const words = main.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').split(/\s+/).filter(Boolean).length;
    if (published && (words < 400)) warn(f, `only ${words} words`);
    if (isBC && published && !sp && (words < 1200 || words > 2600)) warn(f, `${words} words; guideline is roughly 1,500–2,000 (quality takes priority)`);
    if (isBC && published && sp && (words < 850 || words > 1900)) warn(f, `${words} words; series parts aim for roughly 1,000–1,500 (quality takes priority)`);

    if (isBC && !sp) { // a single book article has five chapters; a series spreads the five stages over five posts
      const h2 = [...stripCommentsH2(p.body)];
      const expected = CHAPTERS.map(([n, tag], i) => `${i + 1}. ${n} — ${tag}`);
      const found = h2.filter((h) => h !== 'References & Further Reading');
      const ok = found.length === 5 && found.every((h, i) => norm(h) === norm(expected[i]));
      if (!ok) level(f, `Break & Change needs exactly these five H2 chapters in order: ${expected.join(' | ')}. Found: ${found.join(' | ') || '(none)'}`);
    }
  }
  for (const [slug, parts] of seriesMap) {
    const pub = parts.filter((x) => x.published);
    const where = `series "${slug}"`;
    const nums = parts.map((x) => x.sp.number);
    for (const n of new Set(nums)) if (nums.filter((m) => m === n).length > 1) errors.push(`${where}: part ${n} appears more than once`);
    for (const k of ['title', 'total']) if (new Set(parts.map((x) => x.sp[k])).size > 1) errors.push(`${where}: parts disagree on seriesPart.${k}`);
    if (new Set(parts.map((x) => x.book)).size > 1) errors.push(`${where}: parts disagree on book.title`);
    if (pub.length) {
      const total = parts[0].sp.total;
      if (pub.length !== total || new Set(pub.map((x) => x.sp.number)).size !== total) errors.push(`${where}: only ${pub.length} of ${total} parts are published; publish the whole series together or keep all parts as drafts`);
      if (new Set(pub.map((x) => x.ed)).size > 1) errors.push(`${where}: published parts must share one editorialDate (one weekly release)`);
    }
  }
  return { errors, warnings, count: posts.length };
}

function* stripCommentsH2(body) {
  const text = cleanBody(body);
  for (const m of text.matchAll(/^##\s+(.+?)\s*$/gm)) yield m[1];
}
