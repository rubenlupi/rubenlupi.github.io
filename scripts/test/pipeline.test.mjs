import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, appendFileSync, copyFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import * as P from '../editorial/pipeline.mjs';

const SLUG = 'test-article';
function repo() {
  const root = mkdtempSync(join(tmpdir(), 'pipe-'));
  mkdirSync(join(root, 'src/content/posts'), { recursive: true });
  mkdirSync(join(root, 'docs'), { recursive: true });
  copyFileSync('docs/BOOK_CATALOG.md', join(root, 'docs/BOOK_CATALOG.md'));
  return root;
}
const dir = (root) => join(root, 'editorial', SLUG);
const words = (n) => Array.from({ length: n }, (_, i) => `w${i}`).join(' ');

const BRIEF = (o = {}) => `---
slug: ${SLUG}
status: ${o.status ?? 'BRIEF_READY'}
kind: essay
target_words: 700-1000
working_title: "Test"
thesis: "${o.thesis ?? 'Structure, not components, usually explains persistent failure in socio-technical systems.'}"
---
## Thesis
x
## Break
x
## Challenge
x
## Experience
Source: ${o.exp ?? 'hypothetical'}
x
## Change
x
## Question
x
## Claims and Evidence
| ID | Claim | Type | Sources | Status |
|---|---|---|---|---|
| C1 | A documented thing | ${o.ctype ?? 'evidence'} | ${o.csrc ?? 'S1'} | ${o.cstatus ?? 'verified'} |
| C2 | My reading | interpretation | S1 | n/a |
## Sources
- S1 — A source. Org, 2024. <https://example.org/a/b>. Inspected: ${o.insp ?? 'yes'}. Supports: C1.
## Counterarguments
x
## Contradictions and Open Questions
x
## Research Gaps
None.
## Duplication Check
x
## Instructions for the Writer
x
## Proposed Metadata
x
`;
const DRAFT = (o = {}) => `---
title: "${o.title ?? 'A test article'}"
description: "D"
date: 2026-11-13
topics: ["Systems & Organizations"]
tags: []
draft: true
---
Intro [s](${o.url ?? 'https://example.org/a/b'}). ${words(o.n ?? 800)}

## References & Further Reading

- **A source**, Org, 2024. <${o.url ?? 'https://example.org/a/b'}>. Relevant.
`;
const ROWS = (s) => P.CRITERIA.map((c) => `| ${c} | ${s} | ok |`).join('\n');
const REVIEW = (n, o = {}) => `
## Round ${n}
Verdict: ${o.verdict ?? 'APPROVED'}
Thesis preserved: ${o.thesis ?? 'yes'}
Open factual/citation issues: ${o.issues ?? 0}

| Criterion | Score | Justification |
|---|---|---|
${o.rows ?? ROWS(o.score ?? 4)}

### Factual and citation issues
${o.issueItems ?? 'None.'}

### Feedback
${o.feedback ?? 'None.'}

### Keep
- x
`;
function toDraftReady(root, draft = DRAFT()) {
  P.init(root, SLUG, 'topic');
  P.begin(root, SLUG, 'brief');
  writeFileSync(join(dir(root), 'editorial-brief.md'), BRIEF());
  P.checkBrief(root, SLUG);
  P.begin(root, SLUG, 'draft');
  writeFileSync(join(dir(root), 'draft.md'), draft);
  P.checkDraft(root, SLUG);
}
const state = (root) => JSON.parse(readFileSync(join(dir(root), 'state.json'), 'utf8'));
const throwsCode = (fn, code, re) => assert.throws(fn, (e) => e instanceof P.GateError && e.code === code && (!re || re.test(e.message)));

test('happy path with one revision reaches awaiting-human-approval', () => {
  const root = repo();
  try {
    toDraftReady(root);
    P.begin(root, SLUG, 'review');
    appendFileSync(join(dir(root), 'review.md'), REVIEW(1, { verdict: 'REVISION_REQUIRED', score: 3, feedback: '- F1 — para 2: vague. Required: be concrete.' }));
    P.checkReview(root, SLUG);
    assert.equal(state(root).stage, 'revision-required');
    assert.ok(existsSync(join(dir(root), 'history/draft-r1.md')));
    P.begin(root, SLUG, 'revise');
    writeFileSync(join(dir(root), 'draft.md'), DRAFT({ n: 850 }));
    appendFileSync(join(dir(root), 'revision-notes.md'), '## Round 1 response\n- F1: done — concrete example added\nThesis: unchanged\n');
    P.checkRevision(root, SLUG);
    P.begin(root, SLUG, 'review');
    appendFileSync(join(dir(root), 'review.md'), REVIEW(2));
    P.checkReview(root, SLUG);
    P.finalize(root, SLUG);
    assert.equal(state(root).stage, 'awaiting-human-approval');
    assert.ok(existsSync(join(dir(root), 'final.md')));
    assert.match(readFileSync(join(dir(root), 'publication.md'), 'utf8'), /awaiting the author's explicit approval/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('brief contract: evidence must be verified and cite inspected sources', () => {
  for (const o of [{ cstatus: 'unverifiable' }, { csrc: '' }, { insp: 'no' }, { csrc: 'S9' }, { ctype: 'rumour' }, { exp: 'missing' }]) {
    const root = repo();
    try {
      P.init(root, SLUG, 't'); P.begin(root, SLUG, 'brief');
      writeFileSync(join(dir(root), 'editorial-brief.md'), BRIEF(o));
      throwsCode(() => P.checkBrief(root, SLUG), 1, /brief contract/);
    } finally { rmSync(root, { recursive: true, force: true }); }
  }
});

test('NEEDS_INPUT brief stops the workflow', () => {
  const root = repo();
  try {
    P.init(root, SLUG, 't'); P.begin(root, SLUG, 'brief');
    writeFileSync(join(dir(root), 'editorial-brief.md'), BRIEF({ status: 'NEEDS_INPUT', exp: 'missing' }));
    throwsCode(() => P.checkBrief(root, SLUG), 3, /NEEDS_INPUT/);
    throwsCode(() => P.begin(root, SLUG, 'draft'), 1);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('thesis lock: writer editing the brief is rejected', () => {
  const root = repo();
  try {
    P.init(root, SLUG, 't'); P.begin(root, SLUG, 'brief');
    writeFileSync(join(dir(root), 'editorial-brief.md'), BRIEF());
    P.checkBrief(root, SLUG); P.begin(root, SLUG, 'draft');
    writeFileSync(join(dir(root), 'draft.md'), DRAFT());
    writeFileSync(join(dir(root), 'editorial-brief.md'), BRIEF({ thesis: 'A completely different thesis that the writer preferred today.' }));
    throwsCode(() => P.checkDraft(root, SLUG), 1, /may not touch: editorial-brief.md/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('writer may not introduce unvetted sources', () => {
  const root = repo();
  try {
    P.init(root, SLUG, 't'); P.begin(root, SLUG, 'brief');
    writeFileSync(join(dir(root), 'editorial-brief.md'), BRIEF());
    P.checkBrief(root, SLUG); P.begin(root, SLUG, 'draft');
    writeFileSync(join(dir(root), 'draft.md'), DRAFT({ url: 'https://example.com/new/source' }));
    throwsCode(() => P.checkDraft(root, SLUG), 1, /unvetted source/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('editor may not edit the draft during review', () => {
  const root = repo();
  try {
    toDraftReady(root); P.begin(root, SLUG, 'review');
    writeFileSync(join(dir(root), 'draft.md'), DRAFT({ n: 900 }));
    appendFileSync(join(dir(root), 'review.md'), REVIEW(1));
    throwsCode(() => P.checkReview(root, SLUG), 1, /may not touch: draft.md/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('APPROVED with a score below 4 or open issues is rejected', () => {
  for (const o of [{ rows: ROWS(4).replace('| Practical relevance | 4 |', '| Practical relevance | 3 |') },
    { issues: 1, issueItems: '- I1 — p1: wrong year. Required: fix.' }, { thesis: 'no' }]) {
    const root = repo();
    try {
      toDraftReady(root); P.begin(root, SLUG, 'review');
      appendFileSync(join(dir(root), 'review.md'), REVIEW(1, o));
      throwsCode(() => P.checkReview(root, SLUG), 1, /APPROVED is not allowed/);
    } finally { rmSync(root, { recursive: true, force: true }); }
  }
});

test('review rounds are append-only and complete', () => {
  const root = repo();
  try {
    toDraftReady(root); P.begin(root, SLUG, 'review');
    appendFileSync(join(dir(root), 'review.md'), REVIEW(1, { rows: ROWS(5).split('\n').slice(1).join('\n') }));
    throwsCode(() => P.checkReview(root, SLUG), 1, /missing/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('revision notes must answer every item; factual issues cannot be declined', () => {
  const root = repo();
  try {
    toDraftReady(root); P.begin(root, SLUG, 'review');
    appendFileSync(join(dir(root), 'review.md'), REVIEW(1, { verdict: 'REVISION_REQUIRED', issues: 1, issueItems: '- I1 — p1: wrong. Required: fix.', feedback: '- F1 — p2: x. Required: y.' }));
    P.checkReview(root, SLUG); P.begin(root, SLUG, 'revise');
    appendFileSync(join(dir(root), 'revision-notes.md'), '## Round 1 response\n- I1: declined — disagree\nThesis: unchanged\n');
    throwsCode(() => P.checkRevision(root, SLUG), 1, /cannot be declined[\s\S]*F1|F1[\s\S]*cannot be declined/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('revision limit: fourth non-approved review stops the workflow', () => {
  const root = repo();
  try {
    toDraftReady(root);
    for (let n = 1; n <= 4; n++) {
      P.begin(root, SLUG, 'review');
      appendFileSync(join(dir(root), 'review.md'), REVIEW(n, { verdict: 'REVISION_REQUIRED', score: 3, feedback: `- F1 — x: y. Required: z.` }));
      if (n === 4) { throwsCode(() => P.checkReview(root, SLUG), 3, /limit/); break; }
      P.checkReview(root, SLUG); P.begin(root, SLUG, 'revise');
      writeFileSync(join(dir(root), 'draft.md'), DRAFT({ n: 800 + n }));
      appendFileSync(join(dir(root), 'revision-notes.md'), `## Round ${n} response\n- F1: done — fixed\nThesis: unchanged\n`);
      P.checkRevision(root, SLUG);
    }
    assert.equal(state(root).stage, 'stopped-limit');
    assert.equal(state(root).revisions, 3);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('stages must run in order', () => {
  const root = repo();
  try {
    P.init(root, SLUG, 't');
    throwsCode(() => P.begin(root, SLUG, 'draft'), 1, /cannot begin/);
    throwsCode(() => P.finalize(root, SLUG), 1, /cannot finalize/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

// ---- Break & Change: book access, category lock, backwards archive slots ----
const BC_FM = (o = {}) => `kind: break-and-change
book_title: "Thinking in Systems"
book_author: "Donella H. Meadows"
book_year: 2008
category: "${o.category ?? 'Systems, Execution & Organizational Design'}"
book_access: ${o.access ?? 'full-text'}`;
const BC_BRIEF = (o = {}) => BRIEF(o).replace('kind: essay', BC_FM(o)).replace('target_words: 700-1000', 'target_words: 1500-2000');
const ch = (n) => Array.from({ length: n }, (_, i) => `c${i}`).join(' ');
const BC_DRAFT = (o = {}) => `---
title: "${o.title ?? 'Stocks, flows and the limits of tuning'}"
description: "D"
date: 2026-11-13
series: break-and-change
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "${o.category ?? 'Systems, Execution & Organizational Design'}"
topics: ["Systems & Organizations"]
tags: []
draft: true
---
Intro [s](https://example.org/a/b).

## 1. Key Ideas — BREAK
${ch(340)}
## 2. What Still Matters Today — CHANGE
${ch(340)}
## 3. Why We Keep Getting It Wrong — EXPERIENCE
${ch(340)}
## 4. The Book's Blind Spots — CHALLENGE
${ch(340)}
## 5. My Take — QUESTION
${ch(340)}

## References & Further Reading

- **A source**, Org, 2024. <https://example.org/a/b>. Relevant.
`;
function bcToApproved(root, draft = BC_DRAFT()) {
  P.init(root, SLUG, 'Thinking in Systems'); P.begin(root, SLUG, 'brief');
  writeFileSync(join(dir(root), 'editorial-brief.md'), BC_BRIEF());
  P.checkBrief(root, SLUG); P.begin(root, SLUG, 'draft');
  writeFileSync(join(dir(root), 'draft.md'), draft);
  P.checkDraft(root, SLUG); P.begin(root, SLUG, 'review');
  appendFileSync(join(dir(root), 'review.md'), REVIEW(1));
  P.checkReview(root, SLUG);
}

test('Break & Change brief without access to the book cannot be BRIEF_READY', () => {
  const root = repo();
  try {
    P.init(root, SLUG, 't'); P.begin(root, SLUG, 'brief');
    writeFileSync(join(dir(root), 'editorial-brief.md'), BC_BRIEF({ access: 'none' }));
    throwsCode(() => P.checkBrief(root, SLUG), 1, /book_access is "none"/);
    writeFileSync(join(dir(root), 'editorial-brief.md'), BC_BRIEF({ category: 'Cooking' }));
    throwsCode(() => P.checkBrief(root, SLUG), 1, /category "Cooking"/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('Break & Change draft must keep the editor\'s category', () => {
  const root = repo();
  try {
    P.init(root, SLUG, 't'); P.begin(root, SLUG, 'brief');
    writeFileSync(join(dir(root), 'editorial-brief.md'), BC_BRIEF());
    P.checkBrief(root, SLUG); P.begin(root, SLUG, 'draft');
    writeFileSync(join(dir(root), 'draft.md'), BC_DRAFT({ category: 'Communication' }));
    throwsCode(() => P.checkDraft(root, SLUG), 1, /book.category must match/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('finalize assigns archive slots backwards from the anchor', () => {
  const root = repo();
  try {
    bcToApproved(root);
    P.finalize(root, SLUG);
    assert.match(readFileSync(join(dir(root), 'final.md'), 'utf8'), /^editorialDate: 2026-11-02\b/m);
    assert.equal(state(root).editorialDate, '2026-11-02');
  } finally { rmSync(root, { recursive: true, force: true }); }
  const root2 = repo();
  try {
    writeFileSync(join(root2, 'src/content/posts/older.md'), '---\ntitle: "x"\ndescription: "d"\ndate: 2026-11-10\neditorialDate: 2026-11-02\ntopics: []\ntags: []\ndraft: true\n---\nx\n');
    bcToApproved(root2);
    P.finalize(root2, SLUG);
    assert.match(readFileSync(join(dir(root2), 'final.md'), 'utf8'), /^editorialDate: 2026-10-26\b/m);
  } finally { rmSync(root2, { recursive: true, force: true }); }
});

// ---- multi-post series ----
const STG = ['BREAK', 'CHANGE', 'EXPERIENCE', 'CHALLENGE', 'QUESTION'];
const SERIES_BRIEF = (o = {}) => BC_BRIEF(o).replace('target_words: 1500-2000', 'target_words: 1000-1500') +
  '\n## Series Architecture\n\n' + STG.map((st, i) => `### Part ${i + 1} — Title ${i + 1} — ${st}\n- Sub-thesis: x\n`).join('\n');
const PART = (n, o = {}) => `<!-- PART ${n}: ${o.slug ?? `series-part-${n}`} -->
---
title: "Series part ${n}"
description: "D"
date: 2026-11-13
series: break-and-change
seriesPart:
  title: "The Systems We Build"
  slug: "${SLUG}"
  number: ${n}
  total: 5
  stage: "${o.stage ?? STG[n - 1]}"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations"]
tags: []
draft: true
---
Intro [s](https://example.org/a/b). ${ch(o.words ?? 1200)}

## References & Further Reading

- **A source**, Org, 2024. <https://example.org/a/b>. Relevant.
`;
const SERIES_DRAFT = (f = () => ({})) => [1, 2, 3, 4, 5].map((n) => PART(n, f(n))).join('\n');
const SROWS = (score) => P.SERIES_CRITERIA.map((c) => `| ${c} | ${c.startsWith('Historical') ? 'n/a' : score} | ok |`).join('\n');
const SREVIEW = (round, o = {}) => `
## Round ${round}
Verdict: ${o.verdict ?? 'APPROVED'}
Thesis preserved: yes

${[1, 2, 3, 4, 5].map((n) => {
  const bad = (o.bad ?? []).includes(n);
  return `### Part ${n}
Verdict: ${bad ? 'REVISION_REQUIRED' : 'APPROVED'}
Open factual/citation issues: ${bad ? 1 : 0}

| Criterion | Score | Justification |
|---|---|---|
${SROWS(bad ? 3 : 4)}

#### Factual and citation issues
${bad ? `- P${n}-I1 — para 2: wrong date. Required: fix.` : 'None.'}

#### Feedback
None.
`; }).join('\n')}
### Series
Verdict: ${o.series ?? 'APPROVED'}

#### Feedback
${o.series === 'REVISION_REQUIRED' ? '- S-F1 — parts 2-3 repeat the same example. Required: differentiate.' : 'None.'}

### Keep
- x
`;
function seriesToDraftReady(root, draft = SERIES_DRAFT()) {
  P.init(root, SLUG, 'series'); P.begin(root, SLUG, 'brief');
  writeFileSync(join(dir(root), 'editorial-brief.md'), SERIES_BRIEF());
  P.checkBrief(root, SLUG); P.begin(root, SLUG, 'draft');
  writeFileSync(join(dir(root), 'draft.md'), draft);
  P.checkDraft(root, SLUG);
}

test('series: brief locks the architecture; draft must contain exactly five parts', () => {
  const root = repo();
  try {
    P.init(root, SLUG, 'series'); P.begin(root, SLUG, 'brief');
    writeFileSync(join(dir(root), 'editorial-brief.md'), SERIES_BRIEF());
    P.checkBrief(root, SLUG);
    assert.equal(state(root).locks.series.parts, 5);
    P.begin(root, SLUG, 'draft');
    writeFileSync(join(dir(root), 'draft.md'), [1, 2, 3, 4].map((n) => PART(n)).join('\n'));
    throwsCode(() => P.checkDraft(root, SLUG), 1, /exactly 5/);
    writeFileSync(join(dir(root), 'draft.md'), SERIES_DRAFT((n) => (n === 2 ? { stage: 'BREAK' } : {})));
    throwsCode(() => P.checkDraft(root, SLUG), 1, /stage must be "CHANGE"/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('series: one failing part holds the whole series; revision then approval; one shared slot', () => {
  const root = repo();
  try {
    seriesToDraftReady(root);
    P.begin(root, SLUG, 'review');
    appendFileSync(join(dir(root), 'review.md'), SREVIEW(1, { verdict: 'APPROVED', bad: [3] }));
    throwsCode(() => P.checkReview(root, SLUG), 1, /overall APPROVED requires every part/);
    writeFileSync(join(dir(root), 'review.md'), '');
    appendFileSync(join(dir(root), 'review.md'), SREVIEW(1, { verdict: 'REVISION_REQUIRED', bad: [3], series: 'REVISION_REQUIRED' }));
    P.checkReview(root, SLUG);
    assert.deepEqual(state(root).reviews[0].issues, ['P3-I1']);
    P.begin(root, SLUG, 'revise');
    writeFileSync(join(dir(root), 'draft.md'), SERIES_DRAFT((n) => (n === 3 ? { words: 1250 } : {})));
    appendFileSync(join(dir(root), 'revision-notes.md'), '## Round 1 response\n- P3-I1: done — fixed date\n- S-F1: done — new example\nThesis: unchanged\n');
    P.checkRevision(root, SLUG);
    P.begin(root, SLUG, 'review');
    appendFileSync(join(dir(root), 'review.md'), SREVIEW(2));
    P.checkReview(root, SLUG);
    P.finalize(root, SLUG);
    for (let n = 1; n <= 5; n++) {
      const t = readFileSync(join(dir(root), `final/series-part-${n}.md`), 'utf8');
      assert.match(t, /^editorialDate: 2026-11-02\b/m);
    }
    assert.equal(state(root).stage, 'awaiting-human-approval');
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('series: factual issue in a part cannot be declined; n/a only for historical accuracy', () => {
  const root = repo();
  try {
    seriesToDraftReady(root);
    P.begin(root, SLUG, 'review');
    appendFileSync(join(dir(root), 'review.md'), SREVIEW(1).replace('| Originality | 4 |', '| Originality | n/a |'));
    throwsCode(() => P.checkReview(root, SLUG), 1, /"Originality" cannot be n\/a/);
    writeFileSync(join(dir(root), 'review.md'), '');
    appendFileSync(join(dir(root), 'review.md'), SREVIEW(1, { verdict: 'REVISION_REQUIRED', bad: [1] }));
    P.checkReview(root, SLUG); P.begin(root, SLUG, 'revise');
    appendFileSync(join(dir(root), 'revision-notes.md'), '## Round 1 response\n- P1-I1: declined — disagree\nThesis: unchanged\n');
    throwsCode(() => P.checkRevision(root, SLUG), 1, /cannot be declined/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('a NEEDS_INPUT brief can be reopened after the author responds', () => {
  const root = repo();
  try {
    P.init(root, SLUG, 't'); P.begin(root, SLUG, 'brief');
    writeFileSync(join(dir(root), 'editorial-brief.md'), BRIEF({ status: 'NEEDS_INPUT', exp: 'missing' }));
    throwsCode(() => P.checkBrief(root, SLUG), 3);
    P.begin(root, SLUG, 'brief');
    writeFileSync(join(dir(root), 'editorial-brief.md'), BRIEF());
    P.checkBrief(root, SLUG);
    assert.equal(state(root).stage, 'brief-approved');
  } finally { rmSync(root, { recursive: true, force: true }); }
});
