---
name: write-article
description: Coordinate the editorial team (critical-editor, then editorial-writer, then review loop) to turn a topic, source, book, experience or thesis into a reviewed, publication-ready draft in editorial/<slug>/. Never publishes. Use only when the author explicitly runs /write-article.
argument-hint: "<topic | thesis | source | book> [-- supplied material or author experiences]"
disable-model-invocation: true
---

# /write-article — editorial coordinator

You are the **coordinator**. You do not research, write or review the article yourself. You run the two subagents
in a fixed sequence, pass them explicit file paths, run the deterministic gates between stages, and stop when a gate
says so. Read `docs/EDITORIAL_WORKFLOW.md` (the contracts) and `AGENTS.md` before starting.

Request: **$ARGUMENTS**

## Rules for you

- Invoke agents only with the Agent tool: `subagent_type: "critical-editor"` or `subagent_type: "editorial-writer"`.
  One agent per stage, sequentially, never in parallel, never yourself playing either role.
- Each agent starts with no context. Give it the mode, the slug and the **exact file paths**, using the prompts below.
  Do not paste your own opinion of the content into the prompts.
- After every agent, run the matching gate: `node scripts/editorial/pipeline.mjs <command> <slug>`.
  - Exit 0 (`OK:`): continue.
  - Exit 1 (`FAIL:`): a contract was broken. Re-invoke the **same** agent once with the gate's exact output and ask
    it to fix only that. If the gate fails again, stop and report.
  - Exit 3 (`STOP:`): stop immediately and report to the author.
- Never edit `editorial-brief.md`, `draft.md`, `review.md`, `revision-notes.md` or `state.json` yourself, and never
  "fix" an agent's artifact. The only file you write is `input.md`, before the brief stage.
- Never commit, push, deploy, or copy anything into `src/content/posts/`. Publication is the author's decision.
- Report honestly: if a stage failed, was retried, or a check was skipped, say so.
- Do not make editorial judgments yourself, including whether the request duplicates an existing article. If you
  notice an overlap, note it in `input.md` under *Constraints* (e.g. "Overlaps with `src/content/posts/<file>`")
  and let the critical-editor's duplication check decide (new angle, or `BLOCKED`). Only the gates and the agents'
  verdicts stop the workflow.

## Procedure

1. **Slug.** Derive a short kebab-case slug from the request. If `editorial/<slug>/` or
   `src/content/posts/<slug>.md` exists, pick a distinct slug and mention it.
2. **Init.** `node scripts/editorial/pipeline.mjs init <slug> "<request before -->"`
   Then edit `editorial/<slug>/input.md`: put the request verbatim under *Request*. Put anything after `--`
   verbatim under *Supplied material* or *Author experiences*, whichever fits. Never invent experiences. If none
   were given, leave `None supplied.`
3. **Brief.** `pipeline.mjs begin <slug> brief`, then invoke **critical-editor**:
   > Mode: BRIEF. Slug: `<slug>`. Read `AGENTS.md`, `docs/EDITORIAL_POLICY.md`, `docs/EDITORIAL_WORKFLOW.md` and
   > `editorial/<slug>/input.md`. Research the request and write `editorial/<slug>/editorial-brief.md` exactly per
   > the "Contract: editorial-brief.md". Write no other file. End with the RESULT line.

   Gate: `pipeline.mjs check-brief <slug>`. On `STOP` (NEEDS_INPUT/BLOCKED) report the brief's Research Gaps and
   what the author must provide, then end.
4. **Draft.** `pipeline.mjs begin <slug> draft`, then invoke **editorial-writer**:
   > Mode: DRAFT. Slug: `<slug>`. Read `AGENTS.md`, `docs/EDITORIAL_POLICY.md`, `docs/EDITORIAL_WORKFLOW.md` and
   > the approved brief `editorial/<slug>/editorial-brief.md`. Write `editorial/<slug>/draft.md` per
   > "Contract: draft.md". Write no other file. End with the RESULT line.

   If the writer returns `THESIS_CHANGE_REQUEST`, stop and report it. Gate: `pipeline.mjs check-draft <slug>`.
5. **Review.** `pipeline.mjs begin <slug> review`, then invoke **critical-editor**:
   > Mode: REVIEW. Slug: `<slug>`. Read `AGENTS.md`, `docs/EDITORIAL_POLICY.md`, `docs/EDITORIAL_WORKFLOW.md`,
   > `editorial/<slug>/editorial-brief.md`, `editorial/<slug>/draft.md`, and, if present, `editorial/<slug>/review.md`
   > and `editorial/<slug>/revision-notes.md`. Append round <N> to `editorial/<slug>/review.md` per
   > "Contract: review.md". Do not edit any other file. End with the RESULT line.

   (N = number of completed reviews + 1; see `pipeline.mjs status <slug>`.)
   Gate: `pipeline.mjs check-review <slug>`. It records the outcome and tells you the next step:
   - `APPROVED`: go to step 7.
   - `REVISION_REQUIRED`: go to step 6.
   - `STOP` (BLOCKED, or revision limit of 3 reached): report and end.
6. **Revise.** `pipeline.mjs begin <slug> revise`, then invoke **editorial-writer**:
   > Mode: REVISE. Slug: `<slug>`. Read `AGENTS.md`, `docs/EDITORIAL_WORKFLOW.md`, `editorial/<slug>/editorial-brief.md`,
   > `editorial/<slug>/draft.md` and the latest round (<N>) in `editorial/<slug>/review.md`. Apply targeted fixes to
   > `draft.md` for every I- and F-item, and append "## Round <N> response" to `editorial/<slug>/revision-notes.md`
   > per the contract. Do not change the thesis. Write no other file. End with the RESULT line.

   Gate: `pipeline.mjs check-revision <slug>`, then back to step 5.
7. **Finalize.** `pipeline.mjs finalize <slug>`. This writes `final.md` (still `draft: true`) and `publication.md`.
8. **Present and stop.** Tell the author, briefly:
   - the slug, thesis, outcome and number of rounds, with each round's verdict and lowest score;
   - the paths to `final.md`, `publication.md`, `editorial-brief.md` and `review.md`;
   - any warnings, unverifiable claims, hypothetical examples and research gaps the brief lists;
   - that nothing has been committed or published, and what publishing would involve.

   Then **stop**. Do not commit, push or publish until the author explicitly says so in a later message.
