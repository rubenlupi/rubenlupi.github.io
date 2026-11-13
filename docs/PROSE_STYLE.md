# Prose style — what a published article must sound like

The blog must read like essays written by a thoughtful person, not like generated text. The first Break & Change
series was withdrawn by the author because its prose, although accurate, read as machine-written. This guide is
binding for `editorial-writer`, `prose-editor`, `editorial-translator` and `critical-editor`. Any blacklisted
pattern in a draft caps the review criterion **Prose quality** at 3, which blocks approval.

Accuracy and honesty are **not** negotiable (see `EDITORIAL_POLICY.md`). This guide is about *how* they are
expressed: rigor should be visible in the reasoning, not narrated as an audit trail.

## Blacklist (with real examples from the withdrawn series)

### 1. The text narrating itself
Never describe what the post, part or series does, will do, has done or cannot do. Just do it.

| Don't | Do instead |
|---|---|
| "This post works through that claim in three places: an improvement trap documented in field research, a literal control loop in Kubernetes, and a small, explicitly hypothetical platform team. It is the most technical of the five." | Open with the first case itself: "In the late 1990s, two MIT researchers spent months inside a plant that…" |
| "Here is the mechanism, walked through." / "Here is the concrete proposal I promised." | Start explaining the mechanism. Start making the proposal. |
| "That is the mechanism of this post." / "That is the unresolved part." | Delete. If the point matters, the previous sentence should already make it. |
| "So here is the question this post leaves open." / "These diagrams cannot answer it, and neither can this post." | Ask the question. |
| "The earlier parts of this series built toward that claim: …" | Pick up the thread in one natural clause, or link to the earlier part where the idea came from. |
| "If you only take one practical habit from this post, make it this:" | State the habit. |

### 2. Rigor written as an audit log
Uncertainty, provenance and labels are mandatory, but say them as a writer would, once and briefly, attached to
the claim. Never talk about "inspected", "the sources used in this series", "a finding I can attribute".

| Don't | Do instead |
|---|---|
| "Only the abstract was inspected for this series, so this is a reading, not a finding I can attribute." | "The study's abstract suggests…, though the full paper may qualify it." |
| "I say nothing here about who in practice had access to schooling, because the sources used in this series do not settle it." | "Who actually got that schooling is another question, and these texts don't answer it." |
| "That is my reading of their loops, not a named pattern in the Meadows texts used in this series." | "That reading is mine, not Meadows'." |
| "a small, explicitly hypothetical platform team" | "Take an invented but ordinary case: a platform team of six…" (label once, naturally) |

**Sources note (Break & Change series without access to the full book).** One short sentence, once, near the top,
in plain words. For example: "I haven't had access to the full book, so what follows draws on the excerpt Meadows'
foundation publishes, her essays, and the research cited along the way." Not a parenthetical paragraph.

### 3. Telegraphic fragments and labels as rhythm
| Don't | Do instead |
|---|---|
| "Three limits." / "Nothing here is deep." as standalone paragraphs or sentences | Write the sentence: "The idea has three limits worth keeping in view." Or just discuss them. |
| Bold mini-headings inside paragraphs ("**The mechanism.**") as a substitute for transitions | Real transitions. |
| Lists where an argument is needed | Paragraphs that connect the items with *because, but, so*. |

### 4. Generic AI tics
- Rule-of-three lists by reflex ("stocks, flows and feedback"; "clear, concise and compelling").
- "Not X, but Y" and "It's not about X. It's about Y." more than once per article.
- Colon reveals and one-line punch paragraphs used for effect ("The result: nothing changed.").
- Em-dash chains. Use at most a couple per article.
- Stock phrases: *it's worth noting, crucially, importantly, in short, ultimately, at its core, the key insight,
  delve, landscape, navigate, unlock, leverage (as a verb), robust, seamless, a testament to, double-edged sword*.
- Rhetorical question chains ("What does this mean? Why does it matter?").
- Endings that summarize. The ending is a real question or a real consequence, never a recap.
- Symmetric paragraph shapes (claim, three bullets, one-line moral) repeated through the piece.

## Voice: provocative, never inflated

The author wants a provocative blog. Clean prose is necessary but not enough: each article should unsettle a
comfortable assumption and make the reader want to argue back. Provocation lives in the **framing**, never in the
**evidence**: a claim may be stated with conviction, but not one notch stronger than its support.

- **Lead with the uncomfortable consequence**, not the background. "Your best engineers may be the reason your
  platform keeps breaking" beats "This post examines feedback loops in platform teams".
- **Take a side.** Say what you think is wrong and who believes it. Hedges belong to the evidence (and stay), not
  to the author's judgment.
- **Sharp contrasts and concrete stakes.** Name the cost, the person who pays it, the decision it distorts.
- **Speak to the reader** when it helps: "You have seen this meeting."
- **Earn it.** Every provocation must be cashed out by the argument that follows. A provocative opening the article
  doesn't support is clickbait, and the critical editor will flag it.

### Titles and headings that hook

A title is the article's thesis with an edge: a paradox, an accusation, a reversal or a question the reader can't
ignore. Section headings should pull the reader forward too, not label the contents.

| Flat (rejected) | With a hook |
|---|---|
| Why Intelligent People Keep Making the Same Mistakes | Smart people, same mistakes: the trap is in the plumbing |
| The Limits of Seeing Everything as a System | When "it's the system" becomes an alibi |
| Stocks and flows (heading) | What piles up when nobody's looking |

Never: false promises, manufactured outrage, "you won't believe", numbered-list bait, or a title the article
does not deliver on. Keep titles short (ideally under ten words).

## What good looks like
- **Start in the material**: a scene, a number, a quotation, a puzzle. Not a preview.
- **One idea per paragraph**, joined by reasons (*because, so, but, which is why*).
- **Concrete nouns and active verbs.** People do things; "the system" doesn't "drive outcomes".
- **Varied sentence length**, some long and well-tied, some short. No staccato.
- **The author's voice** shows in choices and judgments, never in announcements of what the author will do.
- **Read it aloud.** If a sentence would embarrass you in front of a smart friend, rewrite it.

## Spanish
Everything above applies to the Spanish edition, plus [`TRANSLATION_STYLE_ES.md`](TRANSLATION_STYLE_ES.md). Calques
of a bad English sentence are still bad Spanish sentences: the prose-editor fixes them in Spanish too.
