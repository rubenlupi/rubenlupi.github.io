---
name: translate-article
description: Coordinate the editorial-translator agent to produce the Spanish (Spain) edition of approved English posts, with deterministic parity gates. Never publishes. Use only when the author runs /translate-article.
argument-hint: "<post slug(s) | all-missing>"
disable-model-invocation: true
---

# /translate-article — Spanish edition coordinator

You are the **coordinator**. You do not translate yourself. You set up a translation job, run the
`editorial-translator` agent with explicit paths, run the gate, and present the result. Read
`docs/EDITORIAL_WORKFLOW.md` ("Spanish edition") first.

Request: **$ARGUMENTS**

## Procedure

1. **Sources.** Resolve the request to English source files:
   - post slugs → `src/content/posts/<slug>.md`;
   - `all-missing` → every published English post without a Spanish translation (check `translationOf` in
     `src/content/posts/es/`).
   For an article still in the editorial workflow, use its approved `editorial/<slug>/final.md` or `final/*.md`.
2. **Init.** Pick a job name: the workflow slug for a single article or series, or `es-<YYYY-MM-DD>` for a batch.
   `node scripts/editorial/translation.mjs init <job> <source files…>`, then
   `node scripts/editorial/translation.mjs begin <job>`.
3. **Translate.** Invoke **editorial-translator**, with the Agent tool if it is available in this session, or
   otherwise with `claude -p --agent editorial-translator --allowedTools "Read" "Grep" "Glob" "Write" "Edit"`:
   > Translation job: `<job>`. Read `AGENTS.md`, `docs/EDITORIAL_POLICY.md`, `docs/TRANSLATION_STYLE_ES.md`,
   > `docs/EDITORIAL_WORKFLOW.md` ("Spanish edition") and `editorial/<job>/translation-es/state.json`. Translate every
   > listed source into `editorial/<job>/translation-es/` and write `notes.md`, per your instructions. Write no other
   > file. End with the RESULT line.
4. **Gate.** `node scripts/editorial/translation.mjs check <job>`. On `FAIL`, begin again and re-invoke the
   translator **once** with the gate's exact output; if it fails again, stop and report.
5. **Present and stop.** Report the Spanish titles and target paths, the gate warnings, and the translator's
   *Open questions*. Nothing is committed or published until the author explicitly approves. A translation may
   not be published before its original.

Never edit the translator's files yourself, and never bypass the gate.
