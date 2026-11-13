# Publication package: series "The Systems We Build, The Systems We Live In"

**Status: awaiting the author's explicit approval. Nothing has been committed, pushed or deployed.**

## Parts (one weekly release)

| Part | Stage | Title | Target file | Words |
|---|---|---|---|---|
| 1 | BREAK | We Don't Just Live in Systems. We Create Them. | `src/content/posts/systems-we-build-1-we-create-them.md` | 1361 |
| 2 | CHANGE | When Improving the Parts Makes the Whole Worse | `src/content/posts/systems-we-build-2-improving-the-parts.md` | 1219 |
| 3 | EXPERIENCE | Why Intelligent People Keep Making the Same Mistakes | `src/content/posts/systems-we-build-3-same-mistakes.md` | 1890 |
| 4 | CHALLENGE | The Limits of Seeing Everything as a System | `src/content/posts/systems-we-build-4-limits.md` | 1410 |
| 5 | QUESTION | What Are We Actually Trying to Build? | `src/content/posts/systems-we-build-5-what-are-we-building.md` | 1625 |

- Editorial date (shared archive slot): 2026-11-02
- Actual date: see each part's `date`
- Book: Thinking in Systems, Donella H. Meadows (2008). Category: Systems, Execution & Organizational Design. Access used: excerpts
- Thesis (locked): Systems built by intelligent people (software organizations, schools, training regimes) drift toward outcomes nobody chose when fast, visible feedback rewards activity while the costs pile up in slow, invisible stocks; better components cannot fix that, but changing what the system measures, how soon consequences become visible, and what the system is for sometimes can.

## Review history (lowest score per part; series coherence verdict)

| Round | Verdict | P1 | P2 | P3 | P4 | P5 | Series |
|---|---|---|---|---|---|---|---|
| 1 | REVISION_REQUIRED | ✗ 3 | ✗ 3 | ✗ 3 | ✗ 3 | ✗ 3 | REVISION_REQUIRED |
| 2 | REVISION_REQUIRED | ✗ 4 | ✗ 4 | ✗ 4 | ✗ 4 | ✗ 3 | REVISION_REQUIRED |
| 3 | APPROVED | ✓ 4 | ✓ 4 | ✓ 4 | ✓ 4 | ✓ 4 | APPROVED |

Approved in round 3 after 2 revision(s). Full scores: `review.md`.

## Automated checks

- Repository validator on all parts as published, sharing one slot: passed, with warnings:
  - part 3: 1890 words; brief target is 1000-1500
  - validator: systems-we-build-1-we-create-them.md: non-HTTPS link: http://classics.mit.edu/Aristotle/politics.8.eight.html
  - validator: systems-we-build-1-we-create-them.md: non-HTTPS link: http://classics.mit.edu/Plato/republic.8.vii.html
  - validator: systems-we-build-1-we-create-them.md: non-HTTPS link: http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html
  - validator: systems-we-build-1-we-create-them.md: non-HTTPS link: http://classics.mit.edu/Aristotle/politics.8.eight.html
  - validator: systems-we-build-1-we-create-them.md: non-HTTPS link: http://classics.mit.edu/Plato/republic.8.vii.html
  - validator: systems-we-build-1-we-create-them.md: non-HTTPS link: http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html
  - validator: systems-we-build-4-limits.md: non-HTTPS link: http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html
  - validator: systems-we-build-4-limits.md: non-HTTPS link: http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html
  - validator: systems-we-build-5-what-are-we-building.md: non-HTTPS link: http://classics.mit.edu/Aristotle/politics.8.eight.html
  - validator: systems-we-build-5-what-are-we-building.md: non-HTTPS link: http://classics.mit.edu/Plato/republic.8.vii.html
  - validator: systems-we-build-5-what-are-we-building.md: non-HTTPS link: http://classics.mit.edu/Aristotle/politics.8.eight.html
  - validator: systems-we-build-5-what-are-we-building.md: non-HTTPS link: http://classics.mit.edu/Plato/republic.8.vii.html
- Source gate: every URL in every part is in the editor's inspected Sources.
- Link check:

```
OK         200                            http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html  [systems-we-build-1-we-create-them, systems-we-build-4-limits]
OK         200                            http://classics.mit.edu/Aristotle/politics.8.eight.html  [systems-we-build-1-we-create-them, systems-we-build-5-what-are-we-building]
OK         200                            http://classics.mit.edu/Plato/republic.8.vii.html  [systems-we-build-1-we-create-them, systems-we-build-5-what-are-we-building]
OK         200                            https://c2.com/doc/oopsla92.html  [systems-we-build-1-we-create-them, systems-we-build-3-same-mistakes]
OK         200                            https://donellameadows.org/archives/dancing-with-systems/  [systems-we-build-2-improving-the-parts, systems-we-build-4-limits, systems-we-build-5-what-are-we-building]
OK         200                            https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/  [systems-we-build-2-improving-the-parts, systems-we-build-3-same-mistakes, systems-we-build-4-limits, systems-we-build-5-what-are-we-building]
OK         200                            https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf  [systems-we-build-1-we-create-them]
OK         200                            https://dora.dev/guides/dora-metrics-four-keys/  [systems-we-build-2-improving-the-parts, systems-we-build-5-what-are-we-building]
OK         200                            https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/  [systems-we-build-3-same-mistakes, systems-we-build-4-limits]
OK         200                            https://martinfowler.com/bliki/CannotMeasureProductivity.html  [systems-we-build-2-improving-the-parts, systems-we-build-5-what-are-we-building]
OK         200                            https://martinfowler.com/bliki/ConwaysLaw.html  [systems-we-build-1-we-create-them]
OK         200                            https://martinfowler.com/bliki/TechnicalDebtQuadrant.html  [systems-we-build-1-we-create-them, systems-we-build-3-same-mistakes]
OK         200                            https://sre.google/sre-book/eliminating-toil/  [systems-we-build-2-improving-the-parts, systems-we-build-3-same-mistakes, systems-we-build-5-what-are-we-building]
OK         200                            https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf  [systems-we-build-3-same-mistakes, systems-we-build-4-limits, systems-we-build-5-what-are-we-building]
OK         200                            https://www.melconway.com/Home/Committees_Paper.html  [systems-we-build-1-we-create-them]
OK         200                            https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf  [systems-we-build-1-we-create-them, systems-we-build-2-improving-the-parts, systems-we-build-3-same-mistakes, systems-we-build-4-limits, systems-we-build-5-what-are-we-building]
OK         200                            https://www.nber.org/papers/w13293  [systems-we-build-2-improving-the-parts, systems-we-build-3-same-mistakes]
OK         200                            https://www.nber.org/papers/w9413  [systems-we-build-2-improving-the-parts, systems-we-build-3-same-mistakes, systems-we-build-4-limits]
OK         200                            https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2  [systems-we-build-1-we-create-them, systems-we-build-4-limits]

19 link(s): 19 ok, 0 broken, 0 unverified.
Reachability is not evidence. Confirm each source supports its claim (docs/EDITORIAL_POLICY.md §4).
```

## Still requires human review

- Automated checks verify structure and reachability, not truth. Spot-check key claims against `editorial-brief.md`.
- Any opinion presented as the author's own must actually be the author's. Hypotheticals must be labelled.

## To publish (only with explicit approval)

1. Copy every file in `final/` to `src/content/posts/` and set `draft: false` in **all five** (the validator refuses a partial series).
2. Record the category and the series in `docs/BOOK_CATALOG.md`.
3. `npm run build && npm run check-links`, commit on a branch (include `editorial/systems-we-build/`), show the author, push only when approved.
