import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
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
