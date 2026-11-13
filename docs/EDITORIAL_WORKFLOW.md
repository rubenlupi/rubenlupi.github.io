# Editorial Workflow — Critical Editor + Editorial Writer

A two-agent editorial team that turns a topic, source, book, author experience or thesis into a reviewed,
publication-ready draft. **It never publishes.** Publication always requires the author's explicit approval.

This workflow operates **under** [`EDITORIAL_POLICY.md`](EDITORIAL_POLICY.md) and [`../AGENTS.md`](../AGENTS.md).
Where anything here conflicts with the policy, the policy wins.

## Roles

| Role | Definition | Model | Writes |
|---|---|---|---|
| **Coordinator** | `/write-article` skill (`.claude/skills/write-article/SKILL.md`), run by the main Claude Code session | the session's model | `input.md`, `state.json` (via the pipeline script), `final.md`, `publication.md` |
| **Critical Editor** | `.claude/agents/critical-editor.md` | `claude-opus-5-5` (Claude Opus 5.5) | `editorial-brief.md`; appends rounds to `review.md` |
| **Editorial Writer** | `.claude/agents/editorial-writer.md` | `claude-sonnet-5-5` (Claude Sonnet 5.5) | `draft.md`; appends to `revision-notes.md` |

The agents never call each other. Claude Code subagents cannot spawn subagents, and the coordinator invokes each one
explicitly with file paths. Each invocation starts with a fresh context, so everything an agent needs must be in the
files it is pointed at. That keeps every editorial decision on disk and reviewable.

## Pipeline

```
input.md ──► [Editor: BRIEF] ──► editorial-brief.md ──► check-brief ──┐
                                                                     │ (brief + thesis locked by hash)
                    ┌────────────────────────────────────────────────┘
                    ▼
            [Writer: DRAFT] ──► draft.md ──► check-draft
                    │
                    ▼
            [Editor: REVIEW] ──► review.md (Round N) ──► check-review
                    │
     ┌──────────────┼───────────────────────┬──────────────────────┐
  APPROVED   REVISION_REQUIRED (≤ 3)   REVISION_REQUIRED (limit)   BLOCKED / NEEDS_INPUT
     │              │                        │                      │
 finalize    [Writer: REVISE] ──►       STOP, report             STOP, report
     │       draft.md + revision-notes.md
     ▼       ──► check-revision ──► back to REVIEW
 final.md + publication.md
     │
  STOP: present to the author. Commit / push / deploy only after explicit approval.
```

Every arrow labelled `check-*` is a deterministic gate in `scripts/editorial/pipeline.mjs`. A gate that fails stops
the workflow. The coordinator must not bypass, edit around, or "fix" an artifact on an agent's behalf.

**Revision limit:** at most **3 revision rounds** (so at most 4 reviews). If the 4th review is not `APPROVED`, the
workflow stops and reports.

## Artifacts (`editorial/<slug>/`)

| File | Written by | Purpose |
|---|---|---|
| `input.md` | coordinator | The request: topic/thesis, supplied material, author experiences, constraints |
| `state.json` | pipeline script only | Stage, round, review outcomes, locked hashes. Never edit by hand |
| `editorial-brief.md` | editor (BRIEF) | Research and argument plan. Locked after `check-brief` |
| `draft.md` | writer | Current article draft, in the repository's post format |
| `history/draft-rN.md` | pipeline script | Draft as reviewed in round N (kept when a revision is required) |
| `review.md` | editor (REVIEW) | Append-only log of review rounds |
| `revision-notes.md` | writer (REVISE) | Append-only, per-item responses to each review round |
| `final.md` | pipeline script | The approved article, still `draft: true` |
| `publication.md` | pipeline script | Publication metadata, review history, checks run, remaining manual checks |

`editorial/` is outside `src/`, so Astro never builds it. Artifacts are committed only with the author's approval,
together with the article.

## Contract: `input.md`

Created by `pipeline.mjs init`. The coordinator fills in the sections from the author's request. It must never invent
experiences: if the author gave none, the section says `None supplied.`

```markdown
# Input
## Request
<topic / thesis / source / book, verbatim from the author>
## Supplied material
<URLs, excerpts, notes from the author, or "None supplied.">
## Author experiences
<only what the author actually wrote, or "None supplied.">
## Constraints
<length, audience, angle, deadlines; or "None.">
```

## Contract: `editorial-brief.md`

```markdown
---
slug: <slug>
status: BRIEF_READY            # or NEEDS_INPUT | BLOCKED
kind: essay                    # or break-and-change (book article; uses docs/BOOK_REVIEW_TEMPLATE.md)
# Only for kind: break-and-change:
# book_title: "<exact catalogue title>"
# book_author: "<author(s)>"
# book_year: 2008
# category: "<one of the seven catalogue categories>"   # the editor decides
# book_access: full-text        # full-text | excerpts | none
target_words: 700-1000
working_title: "<title>"
thesis: "<one arguable sentence>"
---

## Thesis
## Break
## Challenge
## Experience
Source: <author-supplied | repository-documented | hypothetical | missing>
## Change
## Question
## Claims and Evidence
| ID | Claim | Type | Sources | Status |
|---|---|---|---|---|
| C1 | <claim> | evidence | S1 | verified |
| C2 | <claim> | interpretation | S1, S2 | n/a |
## Sources
- S1 — <title>. <author/organization>, <year or "undated">. <https://specific.url/>. Inspected: yes. Supports: C1. Notes: <what was checked; caveats>
## Counterarguments
## Contradictions and Open Questions
## Research Gaps
## Duplication Check
## Instructions for the Writer
## Proposed Metadata
title, description, topics (from src/site.ts), tags
```

Machine-checked rules (`check-brief`):

- Frontmatter has `slug` (matching the folder), `status`, `kind`, `target_words`, `working_title`, `thesis`.
- `status` must be `BRIEF_READY` to proceed. `NEEDS_INPUT` or `BLOCKED` stops the workflow and reports.
- Every section above is present, in any order.
- `Experience` declares a `Source:`. `missing` is only allowed with `status: NEEDS_INPUT`.
- Claims table: at least one row. `Type` ∈ {evidence, interpretation, analogy, hypothesis, speculation}.
  `Status` ∈ {verified, unverifiable, n/a}. Every `evidence` row is `verified` and cites at least one source ID.
- Every source ID cited in the table exists under `## Sources` and is `Inspected: yes`. Every source has a URL
  (or `self-contained` for a derivation) and is `Inspected: yes` or `Inspected: no`; uninspected sources may not
  support any claim.
- No placeholder markers (TODO, TBD, FIXME, [VERIFY]).
- `kind: break-and-change` requires `book_title`, `book_author`, `book_year`, `category` (one of the seven) and
  `book_access`. With `book_access: none` the status must be `NEEDS_INPUT`: an article cannot be based on a book
  nobody could read.

What the gate cannot check: whether the sources really say what the brief claims. That is the editor's
responsibility in BRIEF mode and is re-checked in REVIEW mode.

## Contract: `draft.md`

The repository's post format (`src/content/posts/*.md`), with `draft: true`:

```markdown
---
title: "<title>"
description: "<one sentence>"
date: YYYY-MM-DD          # actual date written
topics: ["Systems & Organizations"]
tags: ["Systems Thinking"]
draft: true
---

<article with inline links>

## References & Further Reading

- **<title>**, <author/organization>, <year>. <https://url>. <relevance>
```

Machine-checked rules (`check-draft`, `check-revision`):

- The draft passes the repository validator (`scripts/lib/validate.mjs`) **as if it were published**: frontmatter,
  topics, References section, inline citations, link syntax, no placeholders, and Break & Change structure when
  applicable.
- Its slug and title do not collide with an existing post.
- Break & Change: `book.title/author/year/category` match the brief exactly, and the draft sets **no** `editorialDate`.
- Every external URL in the draft appears in the brief's Sources (no new, unvetted sources).
- The brief is unchanged since `check-brief` (thesis lock).
- Word count outside `target_words` (±15%) is reported as a warning; the editor judges it.

## Contract: `review.md` (append-only)

```markdown
## Round <N>
Verdict: <APPROVED | REVISION_REQUIRED | BLOCKED>
Thesis preserved: <yes | no>
Open factual/citation issues: <count>

| Criterion | Score | Justification |
|---|---|---|
| Originality of the argument | <1-5> | … |
| Technical accuracy | <1-5> | … |
| Quality of evidence and citations | <1-5> | … |
| Depth of Systems Thinking | <1-5> | … |
| Quality of cross-disciplinary connections | <1-5> | … |
| Accessibility to the intended audience | <1-5> | … |
| Clarity and narrative flow | <1-5> | … |
| Practical relevance | <1-5> | … |
| Strength of the final question | <1-5> | … |

### Factual and citation issues
- I1 — <location>: <problem>. Evidence: <source / reason>. Required: <fix>.
(or "None.")

### Feedback
- F1 — <location>: <problem>. Required: <change>.
(or "None.")

### Keep
- <strengths the writer must not lose>
```

Machine-checked rules (`check-review`):

- Round number is exactly the next round. All nine criteria present, each scored 1–5.
- `Open factual/citation issues` equals the number of `I…` items.
- `APPROVED` is **rejected** unless every score ≥ 4, zero open issues and `Thesis preserved: yes`.
- `REVISION_REQUIRED` must contain at least one `I…` or `F…` item.
- `draft.md` and the brief are unchanged since the stage started (the editor may not edit the article).
- Earlier rounds are unchanged (append-only).

### Scoring rubric

| Score | Meaning |
|---|---|
| 5 | Exemplary. Nothing material to improve for this criterion. |
| 4 | Publication standard. Minor polish possible, no substantive weakness. |
| 3 | Acceptable idea, but a clear weakness a careful reader would notice. |
| 2 | Significant problem that undermines the article on this criterion. |
| 1 | Missing or wrong. |

## Contract: `revision-notes.md` (append-only)

```markdown
## Round <N> response
- I1: done — <what changed>
- F1: done — <what changed>
- F2: declined — <reason; subjective items only>
Thesis: unchanged

### Requests to the editor
- <e.g. a source that seems necessary; or "None.">
```

`check-revision` requires a response for every `I…` and `F…` ID in round N, `Thesis: unchanged`, and that no `I…`
item is declined. It then re-runs every `check-draft` rule.

## Stop conditions

The coordinator stops and reports to the author, with the reason and the artifact paths, when:

- the brief's status is `NEEDS_INPUT` or `BLOCKED`, or `check-brief` fails;
- any gate fails (an agent edited a file it does not own, the thesis changed, new unvetted sources, validator errors);
- the editor returns `BLOCKED`, or the writer returns `THESIS_CHANGE_REQUEST`;
- the revision limit is reached without approval;
- an agent fails to produce its artifact.

## Publishing (human-only step)

`finalize` assigns the archive slot to Break & Change articles (the next Monday backwards from 2026-11-02; see
`BOOK_CATALOG.md`). Essays keep their actual date and get no slot.

`final.md` is still `draft: true`. Publishing is **not** part of the workflow. With the author's explicit approval:
copy `final.md` to `src/content/posts/<slug>.md`, set `draft: false`, run `npm run build` and
`npm run check-links`, commit on a branch, show the author, and push or merge only when they approve.

## Invocation

In Claude Code, from the repository root:

```
/write-article Sometimes the problem isn't the component. It's the system.
```

Optional: append author experiences or material after the topic, e.g.
`/write-article <topic> -- Experience: <what happened>` . Anything after `--` goes to `input.md` verbatim.

Pipeline commands (used by the coordinator; useful for inspection):

```
node scripts/editorial/pipeline.mjs init <slug> "<request>"
node scripts/editorial/pipeline.mjs check-brief <slug>
node scripts/editorial/pipeline.mjs begin <slug> <draft|review|revise>
node scripts/editorial/pipeline.mjs check-draft <slug>
node scripts/editorial/pipeline.mjs check-review <slug>
node scripts/editorial/pipeline.mjs check-revision <slug>
node scripts/editorial/pipeline.mjs finalize <slug>
node scripts/editorial/pipeline.mjs status <slug>
```
