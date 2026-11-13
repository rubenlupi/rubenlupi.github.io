# Break & Change — Book Catalogue

This file is the **authoritative catalogue** for the Break & Change collection and the plan for the first season.
Source of the initial list: the catalogue provided by the blog owner. The validator checks that every
Break & Change article's `book.title` appears in the first-season or approved-expansion tables below.

**Rules** (see [`EDITORIAL_POLICY.md`](EDITORIAL_POLICY.md)): do not invent books; do not silently substitute books
or authors; one article per book; add or change entries only deliberately, with the owner's approval. Do not
generate filler to occupy schedule slots.

## Categories

The catalogue is organised in seven categories:

1. Systems, Execution & Organizational Design
2. Change & Transformation
3. Product & Customer Discovery
4. Creativity & Innovation
5. Architecture & Engineering
6. AI & Technology
7. Communication

> **Open point:** the material provided lists the seven categories and the eleven first-season titles, but not
> which book belongs to which category. Categories below are therefore left **unassigned** rather than guessed.

## First season (recommended order — preserved as provided)

Verification status: **V** = confirmed against a publisher or author page; **S** = consistent across secondary
sources only (library/retailer catalogues, Open Library), publisher page still to be checked; **?** = unresolved.
Checked on 2026-11-13. "Year" is the original publication year of the book and is not a schedule date.

| # | Title | Author(s) | Year | Status | Notes |
|---|---|---|---|---|---|
| 1 | Thinking in Systems | Donella H. Meadows (ed. Diana Wright) | 2008 | V | [Chelsea Green page](https://chelseagreen.com/product/thinking-in-systems/) gives 3 Dec 2008. Posthumous; Meadows died in 2001. |
| 2 | Escaping the Build Trap | Melissa Perri | 2018 | S | Open Library lists 2018 and 2019 for different records. Confirm publisher and first-edition year. |
| 3 | Creative Confidence | Tom Kelley, David Kelley | 2013 | S | Subtitle and publisher to confirm. |
| 4 | Team Topologies | Matthew Skelton, Manuel Pais | 2019 | S | A second edition exists (2025, per Open Library). Decide which edition the article uses. |
| 5 | Made to Stick | Chip Heath, Dan Heath | 2007 | S | Library and retailer records give Random House, Jan 2007. Open Library's "1998" first-publish year is wrong for this book. Publisher page not found. |
| 6 | Continuous Discovery Habits | Teresa Torres | 2021 | S | Confirm publisher. |
| 7 | Accelerate | Nicole Forsgren, Jez Humble, Gene Kim | 2018 | S | Confirm publisher. |
| 8 | Difficult Conversations | Douglas Stone, Bruce Patton, Sheila Heen | 1999 | S | Later editions exist; decide which edition the article uses. |
| 9 | AI Engineering | Chip Huyen | 2024 or 2025 | S | Sources disagree: Dec 2024 (O'Reilly colophon, some retailers) vs 7 Jan 2025 (most retailers). Check the O'Reilly copyright page. |
| 10 | Irresistible Change | Phil Gilbert | 2025 | S | Wiley, Nov 2025 per retailer listings (exact day varies). Subtitle: *A Blueprint for Earning Buy-In and Breakout Success*. |
| 11 | Nexus | **unresolved** | **?** | ? | **Ambiguous title.** Candidates: *Nexus: A Brief History of Information Networks from the Stone Age to AI* by Yuval Noah Harari (2024), or the Scrum.org Nexus framework book *The Nexus Framework for Scaling Scrum* (Addison-Wesley, c. 2018). Needs the owner's decision. Not to be assumed. |

## Editorial dates for the first season

**Not assigned.** A simple weekly sequence cannot satisfy the policy as it stands: the target horizon starts about
240 weeks before November 2026 (around 2022-04-08), but books 9 (*AI Engineering*, 2024/2025) and 10
(*Irresistible Change*, 2025) did not exist then, and an `editorialDate` may not precede a book's publication year.
Keeping the first-season order *and* a weekly cadence therefore implies either (a) a first season placed late
enough for all eleven books to exist, or (b) relaxing one of the constraints. This is the owner's decision.
Until then, articles carry no `editorialDate`.

When dates are assigned, record for each article the three separate dates (policy §6): editorial slot, actual
writing/publication date, book's original publication year. Git history is never rewritten.

## Future expansions

Education, classical history, mathematics, exercise science and other disciplines may join the catalogue. Add a
new table here (with the same columns and verification status) before writing about a book. Nothing is listed yet.

## Status of articles

No Break & Change article has been written or published.
