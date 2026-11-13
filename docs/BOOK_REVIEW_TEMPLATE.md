# Break & Change — Book Article Template

Copy the block below to `src/content/posts/<slug>.md`. New articles start as `draft: true`.
Read [`EDITORIAL_POLICY.md`](EDITORIAL_POLICY.md) first. Delete all `<!-- guidance -->` comments before publishing.
The validator (`npm run validate`) enforces the frontmatter, the five chapter headings, their order, and the
References section. It does **not** judge accuracy or reasoning.

```markdown
---
title: "<Article title: an idea or question, not just the book title>"
description: "<One-sentence summary shown in lists.>"
date: YYYY-MM-DD            # ACTUAL date written/published. Never backdate.
editorialDate: YYYY-MM-DD   # Archive slot (see policy §6). Must be <= date and >= book.year. Omit until assigned.
series: break-and-change
book:
  title: "<Exact title as listed in docs/BOOK_CATALOG.md>"
  author: "<Author(s)>"
  year: 0000                # Original publication year of the book (verified)
topics: ["Systems & Organizations"]   # one or more of the six areas in src/site.ts
tags: []
draft: true
---

<!-- guidance: 2-4 short paragraphs of framing. What question does this book raise? No summary dump. -->

## 1. Key Ideas — BREAK

<!-- guidance: the author's central ideas, original context and assumptions. Mark which parts are the author's
     argument and which are your interpretation. Quote only verbatim text you have seen. Cite page/section/chapter. -->

## 2. What Still Matters Today — CHANGE

<!-- guidance: what remains relevant, with concrete applications, trade-offs and testable experiments.
     Connect to software, organizations, education etc. ONLY where it genuinely fits. No forced analogies. -->

## 3. Why We Keep Getting It Wrong — EXPERIENCE

<!-- guidance: documented failures in applying the ideas: industry examples, empirical evidence, case studies;
     causes such as incentives, structure, complexity, misunderstanding. NO invented first-person anecdotes.
     Company posts are case studies, not general proof. -->

## 4. The Book's Blind Spots — CHALLENGE

<!-- guidance: assumptions, omissions, contradictions, limits, backed by credible counterarguments and independent
     evidence. Respect historical context; avoid presentism. Do not invent criticism to look balanced. -->

## 5. My Take — QUESTION

<!-- guidance: independent critical assessment grounded in chapters 1-4: most enduring contribution, what to adopt
     or question, who may benefit. End with a meaningful unresolved question. If the author's real position is
     unknown, write it as a reasoned editorial interpretation and flag "needs author review" in the PR/hand-off. -->

## References & Further Reading

<!-- guidance: for each source: title, author/organization, year, direct URL, one line on relevance.
     Include the book itself (publisher, edition used). -->

- **<Title>**, <Author or organization>, <year>. <https://example.org/specific-page>. <Why it is relevant.>
```

## Pre-publication checklist (copy into the PR description)

- [ ] I had access to the book's actual text (not only summaries or reviews).
- [ ] Every factual claim has an inline link or is clearly labelled interpretation, hypothesis or opinion.
- [ ] I opened every URL and confirmed it supports the specific claim; quotations and numbers are verbatim.
- [ ] Counterarguments and limitations are addressed; no manufactured criticism.
- [ ] No fabricated experiences, anecdotes, books or sources.
- [ ] Dates are consistent: `date` actual, `editorialDate` valid, `book.year` verified.
- [ ] `npm run validate`, `npm test` and `npm run build` pass; `npm run check-links` reviewed.
- [ ] Unresolved issues are disclosed. The owner has approved publication (`draft: false`).
