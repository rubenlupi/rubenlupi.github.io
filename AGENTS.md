# AGENTS.md — Mandatory instructions for AI agents working on this repository

This is a personal blog about software engineering, education, mathematics, history, human performance,
systems thinking and the connections between them. Its editorial philosophy:

> Curiosity drives the questions. Evidence shapes the answers. Critical thinking connects the dots.

**These instructions are a hard rule, not a style guide.** They apply to every agent (and every human) that
creates, edits, researches, reviews or publishes content here, in every session.

## Before you create or edit any article

You MUST, in this order:

1. Read this file.
2. Read [`docs/EDITORIAL_POLICY.md`](docs/EDITORIAL_POLICY.md) in full.
3. Read the relevant template: [`docs/BOOK_REVIEW_TEMPLATE.md`](docs/BOOK_REVIEW_TEMPLATE.md) for
   Break & Change book articles. Check [`docs/BOOK_CATALOG.md`](docs/BOOK_CATALOG.md) for the verified catalogue.
4. Inspect `src/content/posts/` to avoid duplicating existing articles and to match conventions.
5. Research the subject using authoritative sources. Open and read each source you intend to cite.
6. Write the article, then verify every claim, quotation, statistic and URL against the source.
7. Run `npm run validate` and `npm run build`. Run `npm run check-links` for any article with external links.
8. Report unresolved issues honestly in your final message. Do not hide failed or skipped checks.

## Non-negotiable rules (summary; the policy has the details)

- **Evidence first.** Every substantive factual claim needs a reliable, verifiable source, cited with an inline
  Markdown link close to the claim, plus a `## References & Further Reading` section at the end.
- **Never fabricate** references, URLs, quotations, statistics, studies, case studies, books, authors, or
  personal experiences and opinions of the blog author.
- **Never cite a source you did not open**, or that does not support the specific claim. A URL returning HTTP 200
  proves nothing about relevance. Do not claim to have read a book you could not access: leave such an
  article as a draft and say what access is missing.
- **Separate** established evidence, interpretation, hypothesis and personal assessment, and say which is which.
- **If a claim cannot be verified:** qualify it, remove it, or keep the article `draft: true`.
- **All public content is in English.**
- **New articles start as `draft: true`.** Never set `draft: false` (or push to `master`) unless the quality gate
  in the policy has passed and the owner (Ruben) has approved publication. Never bypass validation to hit a schedule.
- **Never rewrite Git history** or fabricate publication dates. Archive dating uses explicit metadata
  (`editorialDate`) and a visible archive note. See the policy.
- **Do not invent books** or add filler to occupy schedule slots. Do not silently substitute books or authors in
  the catalogue.
- Preserve existing articles, routes, styles and functionality. Make the smallest change that does the job.

## Editorial team workflow

New articles are normally produced with the `/write-article` skill (`.claude/skills/write-article/SKILL.md`), which
coordinates two subagents: `critical-editor` (brief and review) and `editorial-writer` (draft and revisions), with
deterministic gates in `scripts/editorial/pipeline.mjs`. Contracts and stop conditions: [`docs/EDITORIAL_WORKFLOW.md`](docs/EDITORIAL_WORKFLOW.md).
The workflow ends at `editorial/<slug>/final.md` and never publishes; publication needs the owner's explicit approval.

## Project facts

- Astro static site, content in `src/content/posts/*.md` (Markdown + frontmatter). Schema: `src/content.config.ts`.
  The six topic areas are defined in `src/site.ts`.
- Deploys to GitHub Pages from `master` via `.github/workflows/deploy.yml`. A push to `master` publishes immediately.
- Commands: `npm run validate` (editorial structure checks), `npm test` (validator tests),
  `npm run check-links` (external link checks), `npm run build` (runs validate, then builds).

## What automation can and cannot do

Validation checks metadata, structure, citation *presence*, link syntax and link reachability. It cannot establish
that a claim is true, that a source supports it, or that the reasoning is sound. Those require editorial review.
A passing validation is necessary, never sufficient.
