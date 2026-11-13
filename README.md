# rubenlupi.github.io

Personal blog built with [Astro](https://astro.build) and Markdown, deployed to GitHub Pages.

## Write a post

Add a Markdown file to `src/content/posts/`:

```md
---
title: "Post title"
description: "One-line summary shown in the list."
date: 2026-01-31
topics: ["Software Engineering"]   # one or more of the six areas, optional
kind: essay                         # or "book" for a book review (adds a Books page)
tags: ["Architecture"]
draft: false   # optional; true hides it
---

Content here.
```

The six areas are defined in `src/site.ts`. Push to `master` and the GitHub Action builds and publishes it.

The previous (2022) site is preserved on the `backup-web-2022` branch.

## Editorial gate

`npm run build` runs `scripts/check-posts.mjs` first: every published post must have a
`## References & Further Reading` section, or the build (and deploy) fails. Keep unfinished posts as `draft: true`.
