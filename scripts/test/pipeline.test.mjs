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
