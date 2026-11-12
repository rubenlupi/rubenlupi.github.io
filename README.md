# rubenlupi.github.io

Personal blog built with [Astro](https://astro.build) and Markdown, deployed to GitHub Pages.

## Write a post

Add a Markdown file to `src/content/posts/`:

```md
---
title: "Post title"
description: "One-line summary shown in the list."
date: 2026-01-31
tags: ["Architecture"]
draft: false   # optional; true hides it
---

Content here.
```

Push to `master` and the GitHub Action builds and publishes it.

The previous (2022) site is preserved on the `backup-web-2022` branch.
