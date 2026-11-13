import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { validate } from '../lib/validate.mjs';

const CATALOG = 'docs/BOOK_CATALOG.md';
const filler = (n) => Array.from({ length: n }, (_, i) => `word${i}`).join(' ');
const GOOD_BODY = `Intro with a [source](https://example.org/specific/page).\n\n${filler(450)}\n\n## References & Further Reading\n\n- **Specific page**, Example Org, 2024. <https://example.org/specific/page>. Supports the intro.\n`;
const fm = (o = {}) => {
  const base = { title: '"T"', description: '"D"', date: '2026-01-02', topics: '["Software Engineering"]', tags: '[]', ...o };
  return '---\n' + Object.entries(base).filter(([, v]) => v !== undefined).map(([k, v]) => `${k}: ${v}`).join('\n') + '\n---\n';
};
function run(files, opts = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'posts-'));
  try {
    mkdirSync(join(dir, 'es'), { recursive: true });
    for (const [n, c] of Object.entries(files)) writeFileSync(join(dir, n), c);
    return validate(dir, { catalogPath: CATALOG, today: new Date('2026-11-13'), ...opts });
  } finally { rmSync(dir, { recursive: true, force: true }); }
}
const has = (r, re) => r.errors.some((e) => re.test(e));

const chapters = (extra = '') => `Intro [src](https://example.org/a/b).\n\n## 1. Key Ideas — BREAK\n${filler(300)}\n## 2. What Still Matters Today — CHANGE\n${filler(300)}\n## 3. Why We Keep Getting It Wrong — EXPERIENCE\n${filler(300)}\n## 4. The Book's Blind Spots — CHALLENGE\n${filler(300)}\n## 5. My Take — QUESTION\n${filler(300)} ${extra}\n\n## References & Further Reading\n\n- **A**, B, 2020. <https://example.org/a/b>. Relevant.\n`;
const bc = (o = {}) => fm({ series: 'break-and-change', 'book': undefined, editorialDate: '2025-02-03',
  ...o }).replace('---\n', '---\nbook:\n  title: "Thinking in Systems"\n  author: "Donella H. Meadows"\n  year: 2008\n  category: \"Systems, Execution & Organizational Design\"\n');

test('valid published article passes', () => {
  const r = run({ 'good-post.md': fm() + GOOD_BODY });
  assert.deepEqual(r.errors, []);
});
test('missing references section fails when published, only warns as draft', () => {
  const body = 'Text with [a link](https://example.org/x/y).\n';
  assert.ok(has(run({ 'a-post.md': fm() + body }), /References/));
  const d = run({ 'a-post.md': fm({ draft: 'true' }) + body });
  assert.deepEqual(d.errors, []);
  assert.ok(d.warnings.some((w) => /References/.test(w)));
});
test('no inline external citation fails unless selfContained', () => {
  const body = `${filler(450)}\n\n## References & Further Reading\n\n- **X**, Y. <https://example.org/x/y>.\n`;
  assert.ok(has(run({ 'a-post.md': fm() + body }), /inline external citation/));
  assert.deepEqual(run({ 'a-post.md': fm({ selfContained: 'true' }) + body }).errors, []);
});
test('invalid frontmatter is rejected', () => {
  assert.ok(has(run({ 'a-post.md': fm({ date: '2026-13-45' }) + GOOD_BODY }), /valid YYYY-MM-DD/));
  assert.ok(has(run({ 'a-post.md': fm({ topics: '["Cooking"]' }) + GOOD_BODY }), /unknown topic/));
  assert.ok(has(run({ 'a-post.md': fm({ surprise: '1' }) + GOOD_BODY }), /unknown frontmatter key/));
  assert.ok(has(run({ 'a-post.md': 'no frontmatter' }), /frontmatter/));
});
test('future-dated published article fails; draft is fine', () => {
  assert.ok(has(run({ 'a-post.md': fm({ date: '2027-01-01' }) + GOOD_BODY }), /in the future/));
  assert.deepEqual(run({ 'a-post.md': fm({ date: '2027-01-01', draft: 'true' }) + GOOD_BODY }).errors, []);
});
test('duplicate titles and bad slugs are rejected', () => {
  const r = run({ 'one.md': fm() + GOOD_BODY, 'two.md': fm() + GOOD_BODY });
  assert.ok(has(r, /duplicate title/));
  assert.ok(has(run({ 'Bad_Slug.md': fm() + GOOD_BODY }), /kebab-case/));
});
test('placeholders and malformed links are rejected', () => {
  assert.ok(has(run({ 'a-post.md': fm() + GOOD_BODY + '\nTODO fix\n' }), /placeholder/));
  assert.ok(has(run({ 'a-post.md': fm() + GOOD_BODY.replace('(https://example.org/specific/page)', '()') }), /empty link target/));
  assert.ok(has(run({ 'a-post.md': fm() + GOOD_BODY + '\nbad [x] (https://example.org/p/q)\n' }), /malformed/));
});
test('bare homepage link only warns', () => {
  const r = run({ 'a-post.md': fm() + GOOD_BODY.replace('https://example.org/specific/page', 'https://example.org/') });
  assert.ok(r.warnings.some((w) => /bare homepage/.test(w)));
});
test('Break & Change: valid five-chapter article passes', () => {
  const r = run({ 'bc-post.md': bc() + chapters() });
  assert.deepEqual(r.errors, []);
});
test('Break & Change: wrong chapter structure fails', () => {
  assert.ok(has(run({ 'bc-post.md': bc() + chapters().replace('## 5. My Take — QUESTION', '## Conclusion') }), /five H2 chapters/));
  assert.ok(has(run({ 'bc-post.md': bc() + chapters().replace('— CHALLENGE', '— BREAK') }), /five H2 chapters/));
});
test('Break & Change: book must be in the catalogue', () => {
  const r = run({ 'bc-post.md': bc().replace('Thinking in Systems', 'A Book Not In The Catalogue') + chapters() });
  assert.ok(has(r, /not in docs\/BOOK_CATALOG/));
});
test('Break & Change: unresolved catalogue entry is refused', () => {
  const cat = join(mkdtempSync(join(tmpdir(), 'cat-')), 'BOOK_CATALOG.md');
  writeFileSync(cat, '| # | Title | Author(s) | Year | Status | Category | Notes |\n|---|---|---|---|---|---|---|\n| 1 | Thinking in Systems | **unresolved** | **?** | ? |  | x |\n');
  const r = run({ 'bc-post.md': bc() + chapters() }, { catalogPath: cat });
  assert.ok(has(r, /unresolved/));
});
test('catalogue: Nexus is now resolved as Harari (2024)', () => {
  const r = run({ 'bc-post.md': bc().replace('Thinking in Systems', 'Nexus').replace('Donella H. Meadows', 'Yuval Noah Harari').replace('year: 2008', 'year: 2024') + chapters() });
  assert.ok(!has(r, /unresolved|not in docs/));
});
test('Break & Change: editorialDate must not precede the book nor follow the actual date', () => {
  assert.ok(has(run({ 'bc-post.md': bc({ editorialDate: '2005-01-01' }) + chapters() }), /precedes the book/));
  assert.ok(has(run({ 'bc-post.md': bc({ editorialDate: '2026-06-01', date: '2026-01-02' }) + chapters() }), /later than the actual/));
});
test('Break & Change: published needs editorialDate, draft does not', () => {
  assert.ok(has(run({ 'bc-post.md': bc({ editorialDate: undefined }) + chapters() }), /editorialDate/));
  assert.deepEqual(run({ 'bc-post.md': bc({ editorialDate: undefined, draft: 'true' }) + chapters() }).errors, []);
});

test('archive slots: Monday, unique, within horizon, category valid', () => {
  assert.ok(has(run({ 'bc-post.md': bc({ editorialDate: '2025-02-04' }) + chapters() }), /must be a Monday/));
  assert.ok(has(run({ 'bc-post.md': bc({ editorialDate: '2021-01-04' }) + chapters() }), /before the archive horizon|precedes the book/));
  assert.ok(has(run({ 'bc-post.md': bc({ editorialDate: '2026-11-09', date: '2026-11-12' }) + chapters() }), /after the archive anchor/));
  const two = run({ 'bc-one.md': bc() + chapters(), 'bc-two.md': bc().replace('title: "T"', 'title: "T2"') + chapters() });
  assert.ok(has(two, /already used/));
  assert.ok(has(run({ 'bc-post.md': bc().replace('Systems, Execution & Organizational Design', 'Cooking') + chapters() }), /book.category/));
  assert.ok(has(run({ 'bc-post.md': bc().replace(/\n  category: .*\n/, '\n') + chapters() }), /need book.category/));
});

// ---- multi-post Break & Change series (owner decision 2026-11-13) ----
const STAGES = ['BREAK', 'CHANGE', 'EXPERIENCE', 'CHALLENGE', 'QUESTION'];
const part = (n, o = {}) => bc({ editorialDate: o.ed ?? '2026-11-02', date: '2026-11-13', draft: o.draft })
  .replace('title: "T"', `title: "Part ${n} title"`)
  .replace('---\n', `---\nseriesPart:\n  title: "The Systems We Build"\n  slug: "systems-we-build"\n  number: ${n}\n  total: ${o.total ?? 5}\n  stage: "${o.stage ?? STAGES[n - 1]}"\n`)
  + `Intro [src](https://example.org/a/b). ${filler(1100)}\n\n## References & Further Reading\n\n- **A**, B, 2020. <https://example.org/a/b>. Relevant.\n`;
const series = (o = {}) => Object.fromEntries([1, 2, 3, 4, 5].map((n) => [`part-${n}.md`, part(n, typeof o === 'function' ? o(n) : o)]));

test('series: five published parts sharing one slot pass (no five-chapter rule per part)', () => {
  assert.deepEqual(run(series()).errors, []);
});
test('series: parts must share one editorialDate; other posts may not reuse it', () => {
  assert.ok(has(run(series((n) => ({ ed: n === 3 ? '2026-10-26' : '2026-11-02' }))), /share one editorialDate/));
  const r = run({ ...series(), 'other.md': bc({ editorialDate: '2026-11-02', date: '2026-11-13' }).replace('title: "T"', 'title: "Other"') + chapters() });
  assert.ok(has(r, /already used/));
});
test('series: publishing only some parts holds the whole series', () => {
  assert.ok(has(run(series((n) => ({ draft: n === 5 ? 'true' : undefined }))), /only 4 of 5 parts are published/));
  assert.deepEqual(run(series({ draft: 'true' })).errors, []);
});
test('series: stage must match the part number; duplicates rejected', () => {
  assert.ok(has(run(series((n) => ({ stage: n === 2 ? 'BREAK' : undefined }))), /stage must be "CHANGE"/));
  const s = series(); s['part-5.md'] = part(4).replace('Part 4 title', 'Part 4b'); 
  assert.ok(has(run(s), /appears more than once/));
});

// ---- Spanish edition (translations) ----
const ES_BODY = `Intro con una [fuente](https://example.org/specific/page).\n\n${filler(450)}\n\n## Referencias y lecturas recomendadas\n\n- **Specific page**, Example Org, 2024. <https://example.org/specific/page>. Respalda la introducción.\n`;
const esFm = (o = {}) => fm({ title: '"Un título"', lang: 'es', translationOf: 'good-post', ...o });

test('es: a faithful translation passes', () => {
  assert.deepEqual(run({ 'good-post.md': fm() + GOOD_BODY, 'es/buen-post.md': esFm() + ES_BODY }).errors, []);
});
test('es: needs lang, an existing original, and the Spanish References heading', () => {
  assert.ok(has(run({ 'good-post.md': fm() + GOOD_BODY, 'es/x.md': esFm({ lang: undefined }) + ES_BODY }), /need lang: es/));
  assert.ok(has(run({ 'good-post.md': fm() + GOOD_BODY, 'es/x.md': esFm({ translationOf: 'nope' }) + ES_BODY }), /does not match any English post/));
  assert.ok(has(run({ 'good-post.md': fm() + GOOD_BODY, 'es/x.md': esFm() + ES_BODY.replace('Referencias y lecturas recomendadas', 'References & Further Reading') }), /Referencias y lecturas recomendadas/));
});
test('es: parity with the original (URLs, sections, topics, dates, publication order)', () => {
  const base = { 'good-post.md': fm() + GOOD_BODY };
  assert.ok(has(run({ ...base, 'es/x.md': esFm() + ES_BODY.replace(/https:\/\/example.org\/specific\/page/g, 'https://example.org/other/page') }), /drops source URLs/));
  assert.ok(has(run({ ...base, 'es/x.md': esFm() + ES_BODY.replace('## Referencias', '## Extra\n\nx\n\n## Referencias') }), /section count differs/));
  assert.ok(has(run({ ...base, 'es/x.md': esFm({ topics: '["Learning & Education"]' }) + ES_BODY }), /topics must match/));
  assert.ok(has(run({ ...base, 'es/x.md': esFm({ date: '2025-12-31' }) + ES_BODY }), /dated before its original/));
  assert.ok(has(run({ 'good-post.md': fm({ draft: 'true' }) + GOOD_BODY, 'es/x.md': esFm() + ES_BODY }), /cannot be published before its original/));
  assert.ok(has(run({ ...base, 'es/x.md': esFm() + ES_BODY, 'es/y.md': esFm({ title: '"Otro"' }) + ES_BODY }), /already has a Spanish translation/));
});
test('es: translated series parts share the original slot and do not collide with it', () => {
  const s = series();
  for (let n = 1; n <= 5; n++) s[`es/parte-${n}.md`] = part(n).replace(`title: "Part ${n} title"`, `title: "Parte ${n}"\nlang: es\ntranslationOf: part-${n}`).replace('## References & Further Reading', '## Referencias y lecturas recomendadas');
  const r = run(s);
  assert.deepEqual(r.errors.filter((e) => !/translationOf "part-/.test(e)), []);
});

test('placeholders: uppercase markers only; Spanish "todo" is a word, not a marker', () => {
  const base = { 'good-post.md': fm() + GOOD_BODY };
  assert.deepEqual(run({ ...base, 'es/x.md': esFm() + ES_BODY.replace('Intro con', 'Sobre todo, intro con') }).errors, []);
  assert.ok(has(run({ ...base, 'es/x.md': esFm() + ES_BODY + '\nTODO revisar\n' }), /placeholder/));
  assert.ok(has(run({ 'a-post.md': fm() + GOOD_BODY + '\nsee [verify]\n' }), /placeholder/));
});
