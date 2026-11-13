import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, copyFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import * as T from '../editorial/translation.mjs';

const JOB = 'es-test';
const w = (n) => Array.from({ length: n }, (_, i) => `w${i}`).join(' ');
const EN = `---\ntitle: "Original"\ndescription: "D"\ndate: 2026-11-12\ntopics: ["Systems & Organizations"]\ntags: ["Systems Thinking"]\n---\nIntro [s](https://example.org/a/b). ${w(500)}\n\n## Section\n\n${w(100)}\n\n## References & Further Reading\n\n- **A**, Org, 2024. <https://example.org/a/b>. Relevant.\n`;
const ES = (o = {}) => `---\ntitle: "${o.title ?? 'Original en español'}"\ndescription: "D"\ndate: 2026-11-13\ntopics: ${o.topics ?? '["Systems & Organizations"]'}\ntags: ["Systems Thinking"]\nlang: es\ntranslationOf: ${o.of ?? 'original-post'}\ndraft: true\n---\nIntro [fuente](${o.url ?? 'https://example.org/a/b'}). ${w(o.words ?? 620)}\n\n## Sección\n\n${w(120)}\n\n## Referencias y lecturas recomendadas\n\n- **A**, Org, 2024. <${o.url ?? 'https://example.org/a/b'}>. Relevante.\n`;
const NOTES = '## Terminology\n- x\n## Quotations\n- x\n## Open questions\n- None.\n';
function repo() {
  const root = mkdtempSync(join(tmpdir(), 'tr-'));
  mkdirSync(join(root, 'src/content/posts/es'), { recursive: true });
  mkdirSync(join(root, 'docs'), { recursive: true });
  copyFileSync('docs/BOOK_CATALOG.md', join(root, 'docs/BOOK_CATALOG.md'));
  writeFileSync(join(root, 'src/content/posts/original-post.md'), EN);
  return root;
}
const dir = (root) => join(root, 'editorial', JOB, 'translation-es');
const throwsCode = (fn, code, re) => assert.throws(fn, (e) => e instanceof T.GateError && e.code === code && (!re || re.test(e.message)));
const start = (root) => { T.init(root, JOB, ['src/content/posts/original-post.md']); T.begin(root, JOB); };

test('faithful translation passes and awaits human approval', () => {
  const root = repo();
  try {
    start(root);
    writeFileSync(join(dir(root), 'original-en-espanol.md'), ES());
    writeFileSync(join(dir(root), 'notes.md'), NOTES);
    T.check(root, JOB);
    assert.equal(JSON.parse(readFileSync(join(dir(root), 'state.json'), 'utf8')).stage, 'translated');
    T.beginPolish(root, JOB);
    writeFileSync(join(dir(root), 'original-en-espanol.md'), ES().replace('Intro [fuente]', 'Para empezar, [fuente]'));
    writeFileSync(join(dir(root), 'polish-notes.md'), '## Polish 1\n- apertura reescrita\n');
    T.checkPolish(root, JOB);
    const st = JSON.parse(readFileSync(join(dir(root), 'state.json'), 'utf8'));
    assert.equal(st.stage, 'awaiting-human-approval');
    assert.match(readFileSync(join(dir(root), 'publication.md'), 'utf8'), /src\/content\/posts\/es\/original-en-espanol\.md/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
test('parity failures: changed source URL, topics, missing notes, wrong original', () => {
  for (const [o, re] of [[{ url: 'https://example.org/x/y' }, /drops source URLs/], [{ topics: '["Learning & Education"]' }, /topics must match/], [{ of: 'nope' }, /not one of this job's sources/]]) {
    const root = repo();
    try {
      start(root);
      writeFileSync(join(dir(root), 'x.md'), ES(o));
      writeFileSync(join(dir(root), 'notes.md'), NOTES);
      throwsCode(() => T.check(root, JOB), 1, re);
    } finally { rmSync(root, { recursive: true, force: true }); }
  }
  const root = repo();
  try {
    start(root);
    writeFileSync(join(dir(root), 'x.md'), ES());
    throwsCode(() => T.check(root, JOB), 1, /notes.md was not produced/);
    T.begin(root, JOB); // a failed job can be retried
  } finally { rmSync(root, { recursive: true, force: true }); }
});
test('the original may not change during translation; big length deviations are flagged', () => {
  const root = repo();
  try {
    start(root);
    writeFileSync(join(dir(root), 'x.md'), ES({ words: 200 }));
    writeFileSync(join(dir(root), 'notes.md'), NOTES);
    assert.match(T.check(root, JOB), /check for omissions/);
    T.beginPolish(root, JOB);
    writeFileSync(join(dir(root), 'x.md'), ES({ words: 200, url: 'https://example.org/other/page' }));
    writeFileSync(join(dir(root), 'polish-notes.md'), '## Polish 1\n- x\n');
    throwsCode(() => T.checkPolish(root, JOB), 1, /links changed/);
  } finally { rmSync(root, { recursive: true, force: true }); }
  const root2 = repo();
  try {
    start(root2);
    writeFileSync(join(root2, 'src/content/posts/original-post.md'), EN + '\nedited\n');
    writeFileSync(join(dir(root2), 'x.md'), ES());
    writeFileSync(join(dir(root2), 'notes.md'), NOTES);
    throwsCode(() => T.check(root2, JOB), 1, /source changed/);
  } finally { rmSync(root2, { recursive: true, force: true }); }
});
