# rubenlupi.github.io

Personal blog built with [Astro](https://astro.build) and Markdown, deployed to GitHub Pages.

## Write a post

Add a Markdown file to `src/content/posts/` (English original; the Spanish edition goes in `src/content/posts/es/`
with `lang: es` and `translationOf: <english-slug>`):

```md
---
title: "Post title"
description: "One-line summary shown in the list."
date: 2026-01-31
topics: ["Software Engineering"]   # one or more of the six areas, optional
tags: ["Architecture"]
draft: false   # optional; true hides it
---

Content here.
```

The six areas are defined in `src/site.ts`. Push to `master` and the GitHub Action builds and publishes it.

The previous (2022) site is preserved on the `backup-web-2022` branch.

## Editorial policy (hard rule)

All content follows [`docs/EDITORIAL_POLICY.md`](docs/EDITORIAL_POLICY.md). AI agents must read
[`AGENTS.md`](AGENTS.md) first. Book articles for the **Break & Change** collection use
[`docs/BOOK_REVIEW_TEMPLATE.md`](docs/BOOK_REVIEW_TEMPLATE.md) and the catalogue in
[`docs/BOOK_CATALOG.md`](docs/BOOK_CATALOG.md).

New articles start with `draft: true`. Publish only after the quality gate in the policy has passed.

## Editorial team (Claude Code)

`/write-article <topic>` runs a two-agent workflow: **critical-editor** (Claude Opus 5.5) researches and writes a brief,
**editorial-writer** (Claude Sonnet 5.5) drafts, and the editor reviews, with up to 3 revision rounds. Gates in
`scripts/editorial/pipeline.mjs` enforce the contracts. Output lands in `editorial/<slug>/` and is never published
automatically. **editorial-translator** (Claude Sonnet 5.5) produces the Spanish edition (`/translate-article`),
served under `/es/`. See [`docs/EDITORIAL_WORKFLOW.md`](docs/EDITORIAL_WORKFLOW.md).

## Checks

| Command | What it does |
|---|---|
| `npm run validate` | Frontmatter, dates, unique slugs/titles, draft vs published, References section, inline citation presence, link syntax, placeholders, five-chapter Break & Change structure, catalogue membership. Also runs as the first step of `npm run build`, so a failure blocks deployment. |
| `npm test` | Tests for the validator and the editorial pipeline gates. |
| `npm run check-links` | Link reachability. Fails only on 404/410/DNS errors; blocked or rate-limited sites are reported as *unverified* for manual review. |

These checks verify **structure, not truth**. They cannot tell whether a claim is accurate, a source supports it, or the
reasoning holds. That needs editorial review. The `Validate content` GitHub Action runs them on branches and pull requests.
