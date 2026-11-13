import { test } from 'node:test';
import assert from 'node:assert/strict';
import { comparePolish } from '../lib/polish.mjs';

const doc = (body, title = 'T') => `---\ntitle: "${title}"\ndescription: "D"\ndate: 2026-11-13\n---\n${body}`;
const BASE = `## Heading\n\nIn one test, sync time went from under 3 minutes to over 10. "A quoted line stays put" said someone. [x](https://example.org/a/b)\n\n1. First step of the loop.\n2. Second step of the loop.\n3. Third step of the loop.\n\n## References & Further Reading\n\n- <https://example.org/a/b>\n`;

test('style rewrite, list turned into prose, sharper title: allowed', () => {
  const after = BASE.replace('In one test,', 'Under load,')
    .replace('1. First step of the loop.\n2. Second step of the loop.\n3. Third step of the loop.', 'First the loop steps once, then a second time, and then a third time.');
  assert.deepEqual(comparePolish(doc(BASE), doc(after, 'Smart people, same mistakes')), []);
});
test('figures, quotations, links, fixed headings and other frontmatter are protected', () => {
  assert.match(comparePolish(doc(BASE), doc(BASE.replace('10', '12'))).join(), /figures changed/);
  assert.match(comparePolish(doc(BASE), doc(BASE.replace('stays put', 'moved'))).join(), /quotation altered/);
  assert.match(comparePolish(doc(BASE), doc(BASE.replace('[x](https://example.org/a/b)', 'x'))).join(), /links changed/);
  assert.match(comparePolish(doc(BASE), doc(BASE.replace('## References & Further Reading', '## Sources'))).join(), /fixed headings/);
  assert.match(comparePolish(doc(BASE), doc(BASE).replace('date: 2026-11-13', 'date: 2026-11-14')).join(), /beyond title\/description/);
});
