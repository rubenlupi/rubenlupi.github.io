# Editorial Policy

> Curiosity drives the questions. Evidence shapes the answers. Critical thinking connects the dots.

This policy governs all content creation, editing, research, review and publication on this blog. It is a
**hard rule**. It binds human authors and AI agents alike. Where this policy and a publication schedule
conflict, the policy wins.

A published article must not merely sound convincing. Its arguments must be traceable, its evidence
inspectable, and its conclusions intellectually defensible.

## 1. Scope and voice

The blog explores software engineering, education, mathematics, history, human performance, systems thinking
and the connections between them. Some articles are purely historical, mathematical or educational. Connections
between disciplines appear only when they add value; no article has to end by explaining what software
engineering can learn from it.

- All public content is written in **English**.
- Voice: thoughtful, accessible, technically credible; curiosity over expertise, questions over certainty,
  understanding over trends. There should be a person behind the article, not a personal brand.
- Avoid: corporate marketing language, generic AI-sounding conclusions, excessive jargon, artificial enthusiasm,
  unnecessary repetition, unsupported certainty, motivational clichés, invented anecdotes, and superficial
  cross-disciplinary comparisons.
- Length: generally 1,500–2,000 words, but quality takes priority over length. Short paragraphs, clear
  arguments, concrete examples.
- Each article should offer original synthesis, not a rearrangement of existing sources.

## 2. Evidence policy

Every **substantive factual claim** must be supported by reliable, verifiable evidence. This covers, at least:
software engineering practices and technical claims; organizational performance and management; education and
learning theories; exercise science and physiology; historical events and interpretations; mathematical and
scientific claims; AI capabilities and limitations; company case studies and industry trends.

### 2.1 Fabrication and misuse of sources

- Never fabricate references, URLs, statistics, quotations, studies or case studies.
- Never cite a source that does not support the **specific** claim. Mentioning the same subject is not support.
- Never cite a source you did not open. Quote only text you have seen in the source, verbatim.
- Do not claim to have read a book or paper you could not access. Without access to the actual text, the
  article stays a draft and the missing access is reported.
- Avoid circular citation (several pages repeating one unsupported claim) and secondary summaries when the
  original is available.

### 2.2 Source hierarchy

Prefer primary sources, peer-reviewed research, original publications, official documentation and recognized
experts. Examples, by discipline:

- **Software engineering:** Martin Fowler (martinfowler.com), Kent Beck, Dave Farley, DORA, ACM, IEEE,
  Microsoft Research and Learn, Google Research, AWS Builders' Library, Thoughtworks Technology Radar, CNCF and
  official project documentation, peer-reviewed empirical software engineering research. Company engineering
  blogs (Netflix, LinkedIn, Uber, Spotify, Amazon, …) are valid for describing **their own documented
  experience**; present them as case studies, not as independently validated general conclusions.
- **Education & learning:** peer-reviewed educational research, OECD and PISA, UNESCO, national education
  ministries, university research groups, systematic reviews and meta-analyses, original writings of
  educational thinkers (Montessori, Dewey, Freire, …), official Pikler Institute materials. Distinguish
  pedagogical philosophy from experimentally supported outcomes.
- **Strength & human performance:** ACSM, NSCA, WHO, PubMed-indexed research, Cochrane reviews, peer-reviewed
  exercise science, professional position statements. Distinguish established consensus from emerging
  hypotheses and individual coaching opinion.
- **History & classical thinking:** primary texts interpreted in context, academic historians, archaeology,
  museums and research institutions, university publications, peer-reviewed scholarship. Distinguish evidence
  from later interpretation, legend and modern assumption.
- **Mathematics & reasoning:** original publications, university textbooks and lecture notes, established
  references, reproducible demonstrations. Proofs and original logical arguments may rest on a
  **self-contained derivation** instead of external URLs (mark the post `selfContained: true`).
- **Systems & organizations:** original works (e.g. Meadows), peer-reviewed organizational research, and
  documented case studies, with the same case-study caveat as above.

**Authority is not correctness.** Recognized experts and major companies can be wrong. Evaluate the strength of
evidence, not the prestige of the speaker.

### 2.3 Disagreement and uncertainty

- When credible sources disagree, explain the disagreement, separate empirical findings from expert opinion,
  state the assumptions and limits on each side, and say which reading is better supported and why.
- Avoid false balance where evidence strongly favors one position.
- Say when research is outdated, preliminary, contested or based on small or non-representative samples.
- If evidence is incomplete, say so plainly. Uncertainty is information.

### 2.4 Facts, interpretation, hypothesis, opinion

Keep these visibly apart, and label them when they could be confused:

- **Established evidence:** what reliable research or documented experience supports.
- **Interpretation:** what the evidence might imply in another discipline or context.
- **Hypothesis:** a testable idea without adequate evidence yet.
- **Personal assessment:** the author's reasoned conclusion.

Cross-disciplinary analogies must be presented as analogies, never as demonstrated relationships.

**Never fabricate the author's personal experiences or opinions.** If the author's position is not known,
frame the assessment as a reasoned editorial interpretation that requires author review (see §5, Chapter 5).

## 3. Citations

- Use **inline Markdown hyperlinks** close to the claim they support. Do not collect every URL at the bottom.
- Link to the specific study, article, section or document, not a generic homepage, wherever possible.
- Do not impose arbitrary citation counts. Relevance and quality matter, not volume.
- Every article ends with a `## References & Further Reading` section listing, for each source: title,
  author or organization, year when available, direct URL, and one line on why it is relevant.
- For important or contested claims, look for independent corroboration.

## 4. Source verification (before publication)

1. Open and read each referenced source. Do not rely on search snippets.
2. Confirm the URL resolves to the intended document.
3. Confirm the source supports the specific claim as stated; check quotations and numbers verbatim.
4. Check dates, versions, editions and historical context. Respect context and avoid presentism.
5. Prefer originals to summaries and reposts.
6. Record when a source is undated, outdated, preliminary or contested.
7. If a site blocks automated access, use a legitimate tool or read it in a browser. Do not evade access
   controls (for example, by spoofing browser identity). If you still cannot verify, treat the claim as unverified.
8. If a claim cannot be verified: **qualify it, remove it, or leave the article as a draft.**

A successful HTTP response is **not** proof that a source supports a claim.

## 5. Break & Change (book collection)

Break & Change is a dedicated collection. Its purpose is **not** to summarize books. It is to discover ideas,
challenge them, connect them with documented experience, and translate them into meaningful change.

> BREAK → CHALLENGE → EXPERIENCE → CHANGE → QUESTION

Each book yields **one independent article** with exactly five chapters, in this order. Use the template in
[`BOOK_REVIEW_TEMPLATE.md`](BOOK_REVIEW_TEMPLATE.md).

1. **Key Ideas — BREAK.** The author's central ideas, original context and assumptions, and those that
   meaningfully challenge conventional thinking. Keep the author's arguments distinct from editorial
   interpretation.
2. **What Still Matters Today — CHANGE.** Ideas that remain relevant; connections to software engineering,
   organizations, education, product development or other disciplines **only when appropriate**; concrete
   applications, trade-offs and testable experiments. Do not force software analogies onto unrelated subjects.
3. **Why We Keep Getting It Wrong — EXPERIENCE.** Recurring failures in applying the ideas, shown with
   documented industry examples, empirical evidence and organizational case studies; underlying causes such as
   incentives, structures, complexity, misunderstanding and constraints. **No fabricated first-person
   experience.**
4. **The Book's Blind Spots — CHALLENGE.** Assumptions, omissions, contradictions and limitations, supported
   by credible counterarguments and independent evidence. Respect historical context. Do not manufacture
   criticism to look balanced.
5. **My Take — QUESTION.** An independent critical assessment grounded in the preceding chapters: the most
   enduring contribution, what to adopt or question, who may benefit from reading it, and a meaningful
   unresolved question to finish. Where the author's personal position is not known, write it as a reasoned
   editorial interpretation and flag it for author review before publication.

Requirements specific to book articles:

- The article must be based on the actual book. If the text is not accessible, keep the article a draft.
- Book title and author must match an entry in [`BOOK_CATALOG.md`](BOOK_CATALOG.md). Do not invent books or
  silently substitute books or authors. Catalogue changes are made deliberately, in that file.
- Frontmatter records the book (`book.title`, `book.author`, `book.year`) and `series: break-and-change`.

## 6. Historical archive and dating

The blog may carry a retrospectively curated archive (target cadence: one article a week over a historical
horizon of about 240 weeks before November 2026). Honesty about dates is mandatory. Three dates are kept apart:

| Date | Meaning | Where |
|---|---|---|
| **Editorial date** | The slot assigned for archive organization | `editorialDate` frontmatter |
| **Actual date** | When the article was really written and published | `date` frontmatter and Git history |
| **Book's original publication** | When the book first appeared | `book.year` frontmatter |

Rules:

- Never present a newly written article as genuinely published years ago. Any article with an
  `editorialDate` shows a visible archive note stating when it was actually written.
- Never rewrite Git history or backdate commits.
- `editorialDate` must not be later than `date`, and must not precede the book's original publication year.
  If a catalogue sequence and these constraints conflict, the conflict is resolved by the owner, not by
  adjusting facts.
- Do not generate filler to occupy unused weeks. An unused slot stays unused.

## 7. Publication quality gate

No article is ready for publication unless **all** of the following hold:

1. Factual claims are appropriately supported.
2. Referenced URLs have been opened and verified.
3. The original book (if any) is represented accurately.
4. Quotations and statistics are authentic.
5. The analysis distinguishes evidence from interpretation.
6. Counterarguments and limitations are considered.
7. Cross-disciplinary connections are defensible.
8. The writing provides meaningful original synthesis.
9. The article passes `npm run validate` and `npm run build`.
10. Unresolved factual or editorial issues are disclosed and resolved before publication.

If a check fails, the article stays `draft: true`. Never bypass validation to meet a schedule. Publication
(merging to `master`) requires the owner's explicit approval.

## 8. Automation and its limits

The repository runs automated checks (`npm run validate`, `npm test`, `npm run check-links`, and the
`Validate content` GitHub Action). They check: required frontmatter and valid values, date validity, unique
slugs and titles, draft versus published status, the References section, presence of inline citations, link
syntax, placeholder markers, the five-chapter structure for Break & Change, catalogue membership, and link
reachability (with tolerance for rate limits, temporary failures and sites that block automated clients).

They **cannot** establish that a claim is true, that a source supports it, that a quotation is accurate, or that
the reasoning is sound. Those require editorial review against §4 and §7.

## 9. Required agent workflow

Every AI agent creating or modifying content must: read `AGENTS.md`, this policy and the relevant template;
inspect existing content to avoid duplication; research with authoritative sources; write and verify the
article; run the validation checks; and report unresolved issues honestly. See `AGENTS.md`.
