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

### Humor

The author likes humor a lot, and the blog should be **funny** as well as sharp. Readers who smile keep reading.
The model is a witty essayist explaining something serious, not a stand-up routine.

- **Dry wit and irony**: say the absurd thing with a straight face. "Every organisation agrees that prevention
  beats firefighting, in the same way everyone agrees they should floss."
- **Precise, unexpected comparisons** that *illuminate* the mechanism: a backlog as a bathtub nobody remembers
  turning on; an autoscaler as a nervous shopper buying umbrellas after the rain stops.
- **Self-deprecation** of the author and of the profession (engineers, managers, the author's own trade) is fair
  game. Punch up and inward, never down.
- **Deadpan understatement** after a damning fact: "This did not go well."
- **Rhythm**: a light line every few paragraphs, ideally where the argument turns. One good joke beats three
  forced ones. Jokes in titles and headings are welcome when they also carry the thesis.

**Originality (owner feedback, 2026-11-13).** Stock office comedy is banned: the pushy manager, the pointless
meeting, slides, the gym membership nobody uses, pizza orders, coffee, Mondays, the yes-man, the LinkedIn guru,
"we've all been there". The author has seen it all and finds it stale. Good humor here comes from:

- **The material itself.** The irony is usually already inside the documented case: find it and point at it with
  a straight face, instead of importing a sitcom character.
- **Precise, unexpected images**: physical, specific, a little strange (a stock that fills like sediment, a metric
  as a thermometer someone keeps warming with their hand). If the comparison has appeared in a thousand business
  blogs, it's not allowed.
- **Callbacks** to something earlier in the same piece, and understatement.
- **Comparisons must not smuggle in facts.** A reference to real history, science or people is a factual claim
  and needs a source. Prefer invented or physical images to anecdotes.

**Laugh out loud, not just smile (owner feedback, 2026-11-13, second round).** Dry wit alone reads as polite. The
author wants passages a reader would quote to a friend. Aim higher, while keeping every rule in this section:

- **Escalation**: follow a mechanism to its absurd but logical conclusion, one straight-faced step at a time.
- **Absurd literalism**: take the jargon at its word ("technical debt" as an actual loan with an actual bailiff).
- **Mock-formal register** for something petty, or a petty register for something grand.
- **Running gags**: plant an image early and pay it off two or three times, each time worse.
- **Comic specificity**: the exact, odd number or object is funnier than the general one.
- **Density**: a real laugh roughly every two or three paragraphs, with the biggest ones where the argument turns.
  The serious sentences carrying evidence stay serious; the joke goes next to them, never inside them.

**The register the author chose: columnist irony (owner decision, 2026-11-13, third round).** After seeing
samples, the author picked the voice of a sharp newspaper columnist: a mordant comment on the fact just stated, which
lands **on first reading**. The author did not understand the elaborate humor of the fifth draft (extended lift-button
metaphors, "postal votes arriving after the victory speech", "a bailiff dressed as a flaky test"). So:

- Comment on the fact itself, in plain words, with a twist at the end. Model line: "Two hours of real effort, four
  hours borrowed from the future, and one manager convinced of a miracle. It is the only kind of loan where the bank
  thanks you for taking it."
- No extended or chained metaphors, no running image that needs the reader to track it, no culture-bound
  references (elections, legal procedure, idioms a non-native reader of English might miss). Many readers are not
  native English speakers.
- If a joke takes more than one sentence to set up, cut it. The tests above (escalation, running gags) are optional
  tools, never at the cost of clarity.

**Openings**: no archetypal vignette ("A manager pushes the team…", "Picture a team that…"). Open on a specific,
surprising detail the article actually contains, such as a quotation, a number or a strange fact.

Never: jokes that change or blur a claim, humor inside quotations or figures, mocking real people, groups,
students or victims, sarcasm aimed at the reader, puns by the dozen, emoji, or "lol"-style internet register. If a
joke needs explaining, cut it. Humor must survive translation: in Spanish, adapt the joke (the same idea, a joke
that works in Spanish) rather than translating it word for word.

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

## Get to the point (owner feedback, 2026-11-13)

The author wants articles that go straight to the point. Shorter is better whenever nothing true is lost.

- Say each thing once. No restating a point in other words, no paragraph that repeats the previous one's conclusion.
- Cut warm-up sentences, throat-clearing and signposting. The first sentence of a paragraph carries its point.
- One caveat per claim, in as few words as it needs; don't repeat the same caveat in several sections.
- Prefer the short word and the short sentence when they say the same thing.
- If a paragraph can go without the argument losing a step, it goes.

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
