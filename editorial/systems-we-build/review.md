## Round 1
Verdict: REVISION_REQUIRED
Thesis preserved: yes

Reviewer's verification note (process, not an item). This round I re-opened S2, S3, S8, S11, S12, S13, S14 (both halves of the page), S15 and S16 (abstracts), S17, S18, S19 and S20. The S5 and S6 PDFs downloaded but could not be decoded as text in this session. For those two, every quotation and figure in the draft was checked against the brief's verified claims table (C4–C6, C10–C14, C29) and the brief's own inspection notes, which also record "invisible fences", the Kuhn sentence, the two field quotes and the "Western" engineers example. Nothing in the draft contradicts that record. Where an item below depends on S5's figures, it says so.

The non-HTTPS `classics.mit.edu` warnings do not matter for this round. I confirmed that the HTTPS versions of S17–S19 resolve. However, `check-draft` requires the draft's URLs to appear in the brief's Sources, so the writer must **not** change them now. Upgrading them is a publication-time decision for the owner.

### Part 1
Verdict: REVISION_REQUIRED
Open factual/citation issues: 1

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | Pairing "what accumulates" with "what the institution is for" is a real argument, not a summary. The Sterman finding that people read flows (94%) but not stocks is used well. |
| Technical accuracy | 4 | The discrete and continuous stock equations are correct, and every S1 quotation matches C1–C3. The one historical precision error is counted under Historical accuracy. |
| Intellectual and technical depth | 3 | "Where the stocks hide in software" asserts that work in progress and debt are stocks but never uses the mechanism. The outflow-versus-inflow lever, which the post quotes, is never applied to a queue, so an experienced engineer learns nothing they didn't already know. |
| Quality of evidence | 4 | Primary texts with honest caveats (Xenophon's bias, citizen males, Plato's guardians context, the draft excerpt's provenance). |
| Systems-thinking rigor | 3 | "Each structure filled its own stocks with different things" (Structure follows purpose, last paragraph) names no stock. The bridge between the mechanism and the history is asserted rather than shown. |
| Historical accuracy where applicable | 3 | "State-appointed 'Warden'" goes beyond S20 (see P1-I1). "The oldest well-documented case I know of is education" is an unsupported superlative. |
| Cross-disciplinary connections | 4 | The Conway parallel is explicitly labelled an analogy ("They do not need to"), which is exactly the right discipline. |
| Accessibility | 4 | A Product Owner can follow the bathtub logic. The code blocks for the equations are readable. |
| Narrative coherence | 4 | It moves cleanly from mechanism to misperception, software, history and Conway. The "Why this is the first break" section ties it together. |
| Practical relevance | 3 | The reader leaves with no usable habit. Compare Part 2's "write down what falls outside it". |
| Quality of critical analysis | 4 | The "Three limits" paragraph is careful and specific. |
| Strength of the final question | 4 | It is the assignment's required question, set up by the preceding section. |

#### Factual and citation issues
- P1-I1 — "Structure follows purpose", Xenophon paragraph: "a state-appointed 'Warden'" is not what S20 says. Lycurgus "gave the duty of controlling the boys to a member of the class from which the highest offices are filled, in fact to the 'Warden' as he is called". The text does not describe an appointment procedure. Required: describe the Warden as an official drawn from the class that filled the highest offices, or simply as "an official 'Warden'", in place of a slave tutor chosen by each father.

#### Feedback
- P1-F1 — "Where the stocks hide in software": the mechanism is quoted ("A stock can be increased by decreasing its outflow rate as well as by increasing its inflow rate") but never applied. Required: add a short symbolic worked example with no invented numbers. For instance: while arrivals exceed completions by any margin the queue grows every interval however busy people feel, and reducing arrivals acts on the same stock as raising completions, which is the stock-and-flow argument for WIP limits. Label it as your interpretation.
- P1-F2 — "Structure follows purpose", last paragraph: name at least one concrete stock, or drop the stocks claim from the history section. One defensible option uses an already-vetted source: Aristotle's "moral virtue comes about as a result of habit" (S18), read as habit being an accumulation built by repeated practice. Mark that reading as interpretation and add S18 to this post's References.
- P1-F3 — "The oldest well-documented case I know of is education" asserts both a superlative and the author's knowledge. Required: delete the sentence or replace it with a neutral transition, e.g. "Education makes the point unusually visible, because its purposes were argued over in writing."
- P1-F4 — "It also says something engineers tend to feel in their bones" is a cliché the policy asks us to avoid. Required: cut or plainly restate it.

### Part 2
Verdict: REVISION_REQUIRED
Open factual/citation issues: 1

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "A metric is a boundary" is a crisp, original framing, and it avoids repeating the existing leverage-points post, as the brief required. |
| Technical accuracy | 4 | The DORA metrics, quotations and update date match S11, and the Fowler quotation matches S12. The SRE wording is imprecise (P2-I1). |
| Intellectual and technical depth | 4 | It separates the cross-team correlation from the single-team push effect ("Those two statements can look inconsistent…"), which is the post's best analytical move. |
| Quality of evidence | 4 | It uses peer-quality evidence at the level actually read ("read at abstract level" in the References), with Chicago-only caveats. |
| Systems-thinking rigor | 4 | Sterman's boundary-sensitivity point is used as a mechanism, not a slogan, and parameter, rule and goal are kept distinct. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "Where the analogy stops" names the exact point of divergence (people adapt, game and resist). |
| Accessibility | 4 | The tickets-closed example is concrete and jargon-free. |
| Narrative coherence | 4 | It goes from warning to lens, school case, engineering case, limits and intervention. |
| Practical relevance | 4 | It gives a cheap, reversible rule change plus a habit ("write down what falls outside it"). |
| Quality of critical analysis | 4 | It refuses to call the Chicago pattern a law, and it notes that the rule change "can still be gamed". |
| Strength of the final question | 3 | "Who gets to draw it?" anticipates the endings of Parts 4 and 5 almost word for word (see S-F3), so the series' final question loses force. |

#### Factual and citation issues
- P2-I1 — "What would be a change of rule?", second paragraph: "it aims to keep toil below 50% of each engineer's time" generalizes S13. The source says "Our SRE organization has an advertised goal of keeping operational work (i.e., toil) below 50% of each SRE's time." Required: say "each SRE's time" and keep it framed as an advertised goal of Google's SRE organization.

#### Feedback
- P2-F1 — "A case from schools", first paragraph: "studied Chicago elementary schools under test-based accountability" goes slightly beyond what was read. The abstract speaks of "incentive systems, especially those with bright line rules" and "cheating on standardized tests" in the Chicago Public Schools. Required: align the wording with the abstract, or drop "under test-based accountability".
- P2-F2 — "A case from schools", Neal & Schanzenbach paragraph: "so students far below it are cheaper to ignore" reads as an established finding. Required: label it as the mechanism the paper's title and design point to, or as your reading, since only the abstract was inspected.
- P2-F3 — "Three things you can change", last paragraph: "Most of what goes wrong with metrics happens when a parameter is asked to do the work of a goal" is an unsupported generalization. Required: mark it as your interpretation or soften "most".
- P2-F4 — Closing: replace the final question with one specific to this post's mechanism, so it does not duplicate Parts 4 and 5 (see S-F3). One possible direction: how would a team notice that the outcome has started moving outside the boundary its metric draws?

### Part 3
Verdict: REVISION_REQUIRED
Open factual/citation issues: 1

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | Three registers (field research, a literal controller, a labelled hypothetical) give the mechanism real traction. |
| Technical accuracy | 3 | The HPA facts are correct against S14. But the loop schematic gives no link polarities, as the brief required, and the head line "Performance gap ──► pressure to do more" drives B2 as if it were the same pressure (see P3-F1). "Gains concentrated near the cutoff" misstates S16 (P3-I1). |
| Intellectual and technical depth | 4 | The six-hour walk-through ("Six over two is three") is exactly the step-by-step causal example the assignment asked for. |
| Quality of evidence | 4 | Case studies, models and practitioner-reported figures are clearly separated. |
| Systems-thinking rigor | 3 | Overshoot is asserted ("the controller keeps acting on stale information and overshoots") rather than walked through. The documentation's own lag-handling (readiness delay, CPU initialization period, treating not-yet-ready pods as 0%) goes unused, although it is the strongest evidence for the reading. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "The autoscaler is a literal loop with a defined period. A team is not." This is a disciplined analogy. |
| Accessibility | 4 | Demanding but followable, and the six-hour example will land with Product Owners. |
| Narrative coherence | 4 | Strong overall. The "Technical debt as a delayed cost" section is four citations in four sentences with no mechanism, so the post loses momentum there. |
| Practical relevance | 4 | The platform-team hypothetical is recognizable and properly labelled. |
| Quality of critical analysis | 4 | "These diagrams cannot answer it" is honest about the model's limits. |
| Strength of the final question | 4 | It asks what evidence people inside a self-confirming structure would accept. That is genuinely open and specific to the post. |

#### Factual and citation issues
- P3-I1 — "Learning from loops that close the wrong gap": "[gains concentrated near the cutoff]" is not what S16 says. The abstract reports gains "among students in the middle of the achievement distribution". Required: use "the middle of the distribution", consistent with Part 2, or mark "near the cutoff" explicitly as your reading of why.

#### Feedback
- P3-F1 — "The loops", schematic: the brief requires the polarity of each link "as in S5's figures". Required: add + or − to every link, and make the schematic's drivers match S5's figures. Check in particular whether B2 is driven by a separate pressure to improve, and whether R1 runs through rework, as you wrote, or through the throughput gap and pressure, as I recall from S5's figure. Re-open S5 to verify this, and keep the "adapted from" label.
- P3-F2 — "Superstitious learning, worked through": "skipped maintenance, skipped documentation, skipped training" is placed inside what you call "their example". Required: either confirm that S5's example specifies these, or mark them as your gloss ("for instance"), so that detail is not attributed to the authors.
- P3-F3 — "A control loop you can read": walk the overshoot mechanism through in two or three steps, symbolically and with no invented numbers. Then cite S14's documented dampening for exactly this lag: the initial readiness delay (default 30 s), the CPU initialization period (default 5 minutes), and that "the controller conservatively assumes that the not-yet-ready pods are consuming 0% of the desired metric". Recast "overshoots" as what the loop would do without those safeguards.
- P3-F4 — "Technical debt as a delayed cost": "toil tends to expand if left unchecked" is verbatim from S13 but is not in quotation marks. Required: add the quotation marks. Also give the section one sentence of mechanism, such as which stock drains, what makes the drain invisible and when it surfaces, or fold it into the hypothetical.

### Part 4
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | Using the series' own evidence boundary as the final example ("Where a blind spot of the book would be, I only have a blind spot of mine") is the best idea in the series. |
| Technical accuracy | 4 | The S6, S3 and S2 quotations match the brief's record and the re-opened essays. |
| Intellectual and technical depth | 3 | The brief and assignment list causal inference and confounding. The post gives them one sentence ("Prediction and attribution… need data the diagrams cannot provide") and never shows how one would tell a capability trap from a rival explanation. |
| Quality of evidence | 4 | Evidence quality is stated honestly (case studies and models, not trials). |
| Systems-thinking rigor | 4 | The section on explanation versus prediction and the falsifier paragraph are rigorous. |
| Historical accuracy where applicable | 4 | The Xenophon caveat is right, but the link placement implies that S20 documents its own idealization (P4-F3). |
| Cross-disciplinary connections | 4 | "A controller that changed its mind about what it was optimizing… would be a very strange controller" is a precise statement of where the analogy breaks. |
| Accessibility | 4 | Clear, and it doesn't hide behind philosophy-of-science jargon. |
| Narrative coherence | 4 | The progression from model limits to Meadows, evidence, agency, analogies and its own boundary is well built. "Last time" assumes a reading order (P4-F4). |
| Practical relevance | 4 | The falsifiers give practitioners something checkable. |
| Quality of critical analysis | 3 | Every critic is an insider (Sterman, Meadows herself). The power critique ignores that S2 names power explicitly ("Power over the rules is real power"), so the post criticizes a weaker version of Meadows than the one in the essay it cites. |
| Strength of the final question | 3 | "Who should be in the room…" is very close to Part 2's ending and Part 5's underlying question (S-F3). |

#### Factual and citation issues
None.

#### Feedback
- P4-F1 — "The mirror image of the blame error", last paragraph: engage the strongest version of Meadows. Her Leverage Points essay (S2, already in this post's References) says "Power over the rules is real power" and advises paying attention "to the rules, and to who has power over them". Required: acknowledge this, then sharpen the critique to what the accessible sources do *not* supply. For example, naming power is not a method for contesting it, and causal-loop diagrams like this series' own still leave it out.
- P4-F2 — "What kind of evidence we actually have": develop causal inference with the series' own material, without new sources. Required: add a short paragraph that names at least one rival explanation a diagram cannot rule out (e.g. in the Part 3 hypothetical, rising incidents caused by growing demand or a new dependency rather than drained capability), and say what data would separate the two. You may also note that the DuPont comparison with 23 plants is not randomized, so selection could explain part of the gap. Label it as your reasoning.
- P4-F3 — "Where the analogies break", Xenophon paragraph: the link text "[idealizes it]" makes S20 the evidence for the idealization. The primary text shows admiration but does not establish idealization. Required: move the link onto "his account" and keep "idealizes" as your stated caveat.
- P4-F4 — "The model-builder's own warning": "When I drew the capability trap in text last time" assumes the reader came from Part 3. Required: say "in Part 3".
- P4-F5 — Closing question: differentiate it from Parts 2 and 5 (S-F3). A question about how a model's users could discover its boundary, rather than who draws it, would fit this post's argument.

### Part 5
Verdict: REVISION_REQUIRED
Open factual/citation issues: 2

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "Measurement… reveals purpose and also rewrites it" is a genuine synthesis of Sterman with the earlier parts. |
| Technical accuracy | 4 | The DORA, Fowler, Aristotle and Plato quotations match the re-opened sources. The SRE wording repeats Part 2's imprecision (P5-I2). |
| Intellectual and technical depth | 4 | The experiment's failure criteria and its unintended-consequences list are unusually honest for a proposal. |
| Quality of evidence | 3 | The assessment's claim that "the framework says little about who holds power over the goal" is contradicted by S2, which the post cites (P5-I1). |
| Systems-thinking rigor | 3 | The experiment specification omits the two fields the assignment and brief require and that make it a *systems* experiment: the relevant feedback loops and the important delays (P5-F1). |
| Historical accuracy where applicable | 4 | The Aristotle and Plato material is used in context, and the guardians caveat is repeated. |
| Cross-disciplinary connections | 4 | "Cousin, not twin" is an explicit and accurate analogy label. |
| Accessibility | 4 | The experiment is laid out in plain fields. |
| Narrative coherence | 4 | The synthesis opening and the thesis recap in "The question left open" close the arc. "This is the thread I find hardest to pull out of any of the previous parts" is unclear. |
| Practical relevance | 3 | Without the loops and delays fields, a reader cannot say what to look for between the dip and the judgement date, which is the experiment's riskiest period. |
| Quality of critical analysis | 3 | The independent assessment is properly flagged and scoped, but its main criticism (power) misstates the accessible text. |
| Strength of the final question | 5 | The author's question is kept verbatim and earned by the preceding section's open question about declared versus actual goals. |

#### Factual and citation issues
- P5-I1 — "An assessment of Meadows' ideas…", third paragraph: "the framework says little about who holds power over the goal" misrepresents S2. In Leverage Points, Meadows writes "Power over the rules is real power", tells readers to "pay attention to the rules, and to who has power over them", and in her discussion of goals says "a single player can have the power to change the system's goal". Required: correct the claim. A defensible version is that the accessible texts name power over rules and goals as leverage, but offer no account of how competing groups contest a goal or how a system's actual goal can be detected from inside it. Keep the claim scoped to the accessible sources.
- P5-I2 — "An experiment, specified", Intervention: "capping toil at 50% of time" turns S13's "advertised goal of keeping operational work (i.e., toil) below 50% of each SRE's time" into a cap on everyone's time. Required: describe it as Google SRE's advertised goal for each SRE's time (cf. P2-I1).

#### Feedback
- P5-F1 — "An experiment, specified": add the two missing fields, using only the brief's Change section. **Feedback loops:** B1 Work Harder, B2 Work Smarter, B3 Shortcuts and R1 Reinvestment, plus the reinforcing loop through incentives that promote "heroes" (S5), with a cross-reference to Part 3. **Important delays:** improvement effort leads capability change by months for simple processes and by years for product development (S5). Say what this implies for a two-quarter window, e.g. that early indicators such as toil share and unplanned-work share must be read before the delivery metrics move.
- P5-F2 — "What should engineering produce?", last line: "This is the thread I find hardest to pull out of any of the previous parts" is unclear. Required: say plainly what is hard, e.g. that no part of the series found a measure that does not also reshape the purpose it measures.
- P5-F3 — "Efficiency versus autonomy": the section asserts a two-lens contrast with no grounding. Required: anchor it in material already in the series, for example Plato's compulsion line or the capability stock from Part 3 (slack versus capability), so it reads as a conclusion of the series and not as a new assertion.

### Series
Verdict: REVISION_REQUIRED

#### Feedback
- S-F1 — First-person claims about the author's own access, knowledge and searches. Policy §2.4 forbids fabricating the author's experience, and none of these are on record from the author. Locations: Part 1 sources note ("I did not have access to the full text"), Part 1 ("The oldest well-documented case I know of"), Part 2 ("The sharpest documented example I know"), Part 3 ("Neither can I"), Part 4 ("I have seen one draft excerpt…", "I have not searched exhaustively"). Required: rephrase these as statements about the series and its sources, e.g. "This series draws on one draft excerpt and two essays" or "in the sources used here". First-person *interpretive* phrasing ("I read this as…") may stay, since it is labelled as interpretation and will go to the author for review.
- S-F2 — Repetition: the leverage-list caveat ("tentative… slithery") is quoted in Parts 2, 4 and 5, and the Chicago 4–5% figure appears in Parts 2, 3 and 4. Each part must stand alone, so some repetition is legitimate, but the third use of each adds nothing. Required: in Part 5, refer back to Part 4 instead of re-quoting the caveat. In Part 4, use Jacob and Levitt for adaptation without repeating the percentage, or keep the percentage and cut it from Part 3, which already cross-references Part 2.
- S-F3 — Closing questions converge: Part 2 asks "who gets to draw it?", Part 4 asks "who should be in the room when we decide where to draw it?", and Part 5's underlying question is "Who gets to decide what a system is for…?". The arc should build toward Part 5 rather than ask Part 5's question three times. Required: give Parts 2 and 4 questions specific to their own mechanisms (see P2-F4, P4-F5), and leave "who decides purpose" to Part 5.
- S-F4 — Thesis coverage: the series thesis names "training regimes" as one of three kinds of system, but the series mentions training only in Part 1's opening line. The thesis is locked, so the writer cannot drop the phrase. Required: use the brief's C30 once (Repenning and Sterman explicitly extend the pattern to committing to a new exercise programme, S5), labelled as the authors' extension and as an analogy, with no physiological claims (C37). Part 3 or Part 5 would be the natural place.

### Keep
- The mandatory sources note in every part, including Part 4's move of making the evidence boundary one of its own examples.
- Part 3's six-hour walk-through and its explicit "It is their example, not data" framing.
- Part 2's separation of DORA's cross-team correlation from the effect of pushing one team on one metric.
- Every analogy label already in place ("cousin, not twin", "A team is not", "They do not need to").
- Part 4's falsifier paragraph and the "explanation, not prediction" conclusion.
- Part 5's failure criteria, the "not randomized" admission, and the author's closing question, verbatim.
- Restraint about sources: no uninspected source (S21–S26) is cited, no trap name is attributed to Meadows, no Goodhart or Campbell, no "factory model" story, no physiology.

## Round 2
Verdict: REVISION_REQUIRED
Thesis preserved: yes

Reviewer's verification note (process, not an item). This round I re-opened S2 and confirmed these verbatim: "Power over the rules is real power."; "pay attention to the rules, and to who has power over them"; "a single player can have the power to change the system's goal"; and the delay, paradigm, "tentative… slithery", "work in progress" and "not a recipe" lines. I also re-opened S14 and confirmed verbatim the new Part 3 quotation ("the controller conservatively assumes that the not-yet-ready pods are consuming 0% of the desired metric, further dampening the magnitude of a scale up"), the 30-second initial readiness delay, the 5-minute CPU initialization period, the "flapping" passage, the 15-second loop, the 0.1 tolerance and the 300-second scale-down window. I tried twice to decode S5 (the author-hosted PDF and a mirror, which I used for verification only and which is not cited). Both returned only compressed streams, so **I could not check the Part 3 link polarities against S5's figures** (the writer's request). The signs are internally consistent: each B loop has an odd number of negative links and R1 an even number. The schematic now says plainly that the signs are the writer's reading and not checked against the figures, which satisfies §4.8 (qualify what cannot be verified). I accept P3-F1 on that basis. **Manual check for the owner before publication:** compare the Part 3 schematic against S5's figures in a PDF viewer.

Every other round-1 item was checked against revision-notes.md and the draft, and all are resolved except where a residue is noted below (P2-I1/P5-I2 survive in the References annotations, and S-F1 survives in five places). Warnings: Part 3's 1,889 words is about 5% over the brief's "about 1,800". The extra length is the overshoot walk-through and the debt mechanism that round 1 asked for, so it does not matter. The non-HTTPS `classics.mit.edu` links stay as in round 1: they must match the brief's Sources for `check-draft`, so upgrading them is a decision for the owner at publication.

### Part 1
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | Pairing "what accumulates" with "what the institution is for" is a real argument, and the 94%-versus-36% contrast carries it. |
| Technical accuracy | 4 | The equations are correct, the S1 quotations match C1–C3, and the WIP example applies the outflow lever correctly. |
| Intellectual and technical depth | 4 | "Two handles on one bathtub" turns the quoted mechanism into a usable argument for WIP limits. |
| Quality of evidence | 4 | Primary texts with honest caveats. S18 is now added for the habit reading. |
| Systems-thinking rigor | 4 | Habit, read as a stock with daily routine as its designed inflow, closes the gap between mechanism and history. It is labelled "not Aristotle's vocabulary". |
| Historical accuracy where applicable | 4 | The Warden is now described as S20 does. The superlative is gone. |
| Cross-disciplinary connections | 4 | The Conway parallel is still explicitly an analogy ("They do not need to"). |
| Accessibility | 4 | Plain and concrete throughout. |
| Narrative coherence | 4 | It flows well. The duplicated disclaimer in "Where the stocks hide" (P1-F1) is a visible stutter. |
| Practical relevance | 4 | "Ask of any queue, before asking who is slow, which flow is larger" is a habit a reader can use the same day. |
| Quality of critical analysis | 4 | The "Three limits" paragraph is still careful and specific. |
| Strength of the final question | 4 | It is the required question, and it is set up by the purpose section. |

#### Factual and citation issues
None.

#### Feedback
- P1-F1 — "Where the stocks hide in software": "It is my interpretation, not something the excerpt says about software" appears both as the section's first line and in the middle of the WIP paragraph. Required: keep one.
- P1-F2 — "Structure follows purpose", "Three limits" paragraph: "because the sources I could open do not settle it" is a first-person claim about the author's own research (see S-F1). Required: state it about the series, e.g. "because the sources used in this series do not settle it."

### Part 2
Verdict: REVISION_REQUIRED
Open factual/citation issues: 1

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "A metric is a boundary" is still a crisp framing that is distinct from the existing leverage-points post. |
| Technical accuracy | 4 | The SRE sentence in the body is now exact ("each SRE's time", "advertised goal"). The References residue is counted under P2-I1. |
| Intellectual and technical depth | 4 | It keeps the separation of the cross-team correlation from the effect of a single-team push. |
| Quality of evidence | 4 | The Chicago claims now match the abstracts, and "cheaper to ignore" is labelled as a reading. |
| Systems-thinking rigor | 4 | Parameter, rule and goal are kept distinct, and "many… not a measured proportion" is properly hedged. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "Where the analogy stops" is still precise. |
| Accessibility | 4 | The tickets-closed example is concrete. |
| Narrative coherence | 4 | It moves cleanly from warning to lens, cases, limits and intervention. |
| Practical relevance | 4 | The habit and the reversible rule change are both usable. |
| Quality of critical analysis | 4 | "It can still be gamed" and "I would not call this a law" keep the claims proportionate. |
| Strength of the final question | 4 | The new question about noticing movement outside the boundary is specific to this post and no longer anticipates Part 5. |

#### Factual and citation issues
- P2-I1 — References, "Eliminating Toil" entry: "A documented company rule capping toil" restates the cap that round 1 corrected in the body (round-1 P2-I1). S13 describes "an advertised goal of keeping operational work (i.e., toil) below 50% of each SRE's time", not a cap. Required: describe it as Google SRE's advertised goal of keeping toil below 50% of each SRE's time, a company practice and not a validated optimum.

#### Feedback
- P2-F1 — "A case from schools", Neal & Schanzenbach paragraph: "I have read only the abstract" ascribes a reading activity to the author (see S-F1). Required: state it about the series, e.g. "Only the abstract was inspected for this series, so this is a reading, not a finding I can attribute."

### Part 3
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | Three registers (field research, a literal controller, a labelled hypothetical) still give the mechanism traction. |
| Technical accuracy | 4 | The HPA quotation and the defaults are verbatim against S14 this round. The loop signs are internally consistent and openly qualified. |
| Intellectual and technical depth | 5 | The three-step overshoot walk-through, followed by the documented dampers that answer it, is exactly the mechanism-before-metaphor the brief asked for. |
| Quality of evidence | 4 | Case studies, models and practitioner figures are kept apart. The schematic's limit is disclosed rather than hidden. |
| Systems-thinking rigor | 4 | "Overshoot is what the loop would do without those safeguards" is the correct and careful framing. The debt section now names which stock drains, why it is invisible and when it surfaces. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "A team is not" is still in place, and the exercise extension (S-F4) is labelled as the authors' and as an analogy, with no physiology. |
| Accessibility | 4 | Demanding but followable. |
| Narrative coherence | 4 | The debt section no longer stalls. The length is justified (see the note above). |
| Practical relevance | 4 | The hypothetical is recognizable and properly labelled. |
| Quality of critical analysis | 4 | "These diagrams cannot answer it, and neither can this post" is still honest. |
| Strength of the final question | 4 | It asks what evidence people inside a self-confirming structure would accept, which is genuinely open. |

#### Factual and citation issues
None.

#### Feedback
- P3-F1 — "Policy resistance, and other names", last sentence: "not a named pattern in any Meadows text I could access" is a first-person access claim (see S-F1). Required: e.g. "not a named pattern in the Meadows texts used in this series."

### Part 4
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 5 | Using the series' own evidence boundary as its final example is still the best idea in the series. |
| Technical accuracy | 4 | The S6, S3 and S2 quotations match the record and the essays re-opened this round. |
| Intellectual and technical depth | 4 | The rival-explanation paragraph names the confounders and the data that would separate them (incidents per unit of traffic, deferred components, a comparison team). |
| Quality of evidence | 4 | Evidence quality is stated honestly, and the DuPont selection caveat is new and correct. |
| Systems-thinking rigor | 4 | Explanation versus prediction, the falsifiers, and the boundary demonstration all hold. |
| Historical accuracy where applicable | 4 | The Xenophon link now sits on "his account", and "idealizes" is owned as a caveat. |
| Cross-disciplinary connections | 4 | "A very strange controller" still marks the break precisely. |
| Accessibility | 4 | Clear and free of jargon. |
| Narrative coherence | 4 | "In Part 3" fixes the reading-order assumption. |
| Practical relevance | 4 | The falsifiers and the separating data give practitioners something to check. |
| Quality of critical analysis | 4 | It now engages the strongest Meadows ("Power over the rules is real power") and moves the critique to the missing method. |
| Strength of the final question | 4 | Asking how a model's users would discover its boundary is specific to this post and leaves "who decides" to Part 5. |

#### Factual and citation issues
None.

#### Feedback
- P4-F1 — "Meadows is humble too", second paragraph: "and further than the evidence I have seen" is a first-person claim about the author's reading (see S-F1). Required: e.g. "and further than the evidence used in this series."

### Part 5
Verdict: REVISION_REQUIRED
Open factual/citation issues: 3

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "Measurement reveals purpose and also rewrites it" is still a genuine synthesis. |
| Technical accuracy | 4 | The SRE sentence in the body is now exact, and the S2 power quotations are verbatim. |
| Intellectual and technical depth | 4 | The new delays field ("a flat delivery metric at the judging date is weak evidence either way") is a sharp, non-obvious consequence. |
| Quality of evidence | 3 | The Leverage Points quotations in the assessment have no inline link, and the References entry describes quotations the post no longer uses (P5-I2). The SRE annotation still says "capping" (P5-I3). |
| Systems-thinking rigor | 4 | The loops and delays fields make the experiment a systems experiment. "It does nothing about the hero loop unless what is rewarded changes" is good. |
| Historical accuracy where applicable | 3 | "The oldest recorded form of the question is about schools" is an unsupported historical superlative (P5-I1), the same kind round 1 removed from Part 1. |
| Cross-disciplinary connections | 4 | "Cousin, not twin" is still an accurate analogy label. |
| Accessibility | 4 | Plain fields and plain prose. |
| Narrative coherence | 4 | P5-F2 and P5-F3 are resolved. The efficiency-versus-autonomy section now grows out of Part 3. |
| Practical relevance | 4 | Reading the early indicators first is exactly what a team running this needs. |
| Quality of critical analysis | 4 | The power criticism is now correctly scoped to what the accessible texts do not supply. |
| Strength of the final question | 5 | The author's question is kept verbatim and earned. |

#### Factual and citation issues
- P5-I1 — "What is education for?", first sentence: "The oldest recorded form of the question is about schools" is an unsupported historical claim. No source in the brief establishes what is oldest, and Research Gaps item 2 rules out such specifics. Required: delete it or replace it with a neutral transition, e.g. "Education is where the question was argued most openly in the sources this series uses."
- P5-I2 — "An assessment…", power paragraph: "Power over the rules is real power" and "a single player can have the power to change the system's goal" are quoted with no inline link to S2. Policy §3 requires the link to sit close to the claim. The References entry for Leverage Points also says it is the "Source of the 'tentative' and 'slithery' quotes", which this post no longer quotes. Required: link "Leverage Points" inline at that paragraph, and change the annotation to the power quotations.
- P5-I3 — References, "Eliminating Toil" entry: "A documented rule capping toil" carries over the mischaracterization that round-1 P5-I2 corrected in the body. Required: same fix as P2-I1.

#### Feedback
- P5-F1 — Section heading "An assessment of Meadows' ideas, as far as I can see them": a first-person access claim (see S-F1). Required: e.g. "An assessment of Meadows' ideas, within these sources".

### Series
Verdict: REVISION_REQUIRED

#### Feedback
- S-F1 — Residual first-person claims about the author's own access and reading (round-1 S-F1 was only partly applied). The located instances are P1-F2, P2-F1, P3-F1, P4-F1 and P5-F1. Required: fix those, then sweep all five parts once more for any phrasing of the form "I could open / access / have seen / have read" and restate it about the series or its sources. Interpretive first person ("I read this as…", "my interpretation") stays. Apart from this, the series now coheres. The closing questions build in sequence (purpose → boundary → evidence → model limits → who decides), the repetition of the Chicago figure and of the "slithery" caveat is gone, and "training regimes" is now covered in Part 3.

### Keep
- Everything listed in round 1's Keep.
- Part 1's "two handles on one bathtub" and the habit-as-stock reading, with its "not Aristotle's vocabulary" label.
- Part 3's three-step overshoot walk-through followed by the documented dampers, and the honest disclaimer on the schematic's signs.
- Part 4's rival-explanation paragraph and the DuPont selection caveat.
- Part 5's "Feedback loops" and "Important delays" fields, especially "a flat delivery metric at the judging date is weak evidence either way".

## Round 3
Verdict: APPROVED
Thesis preserved: yes

Reviewer's verification note (process, not an item). This round I checked every round-2 item against revision-notes.md (Round 2 response) and the current draft. Each round-2 wording appears in `history/draft-r2.md`, and each corrected wording appears in `draft.md`. All are resolved:
- P1-F1: one disclaimer, at line 59.
- P1-F2: "the sources used in this series".
- P2-I1 and P5-I3: the Eliminating Toil annotations now read "Google SRE's advertised goal of keeping toil below 50% of each SRE's time", which matches S13's verified wording.
- P2-F1: "Only the abstract was inspected for this series".
- P3-F1: "the Meadows texts used in this series".
- P4-F1: "the evidence used in this series".
- P5-I1: the superlative is replaced.
- P5-I2: "Leverage Points" is linked inline at the power paragraph. The annotation describes the power quotations, which I verified verbatim against S2 in round 2.
- P5-F1: the heading is changed.

For S-F1, I searched the whole draft for "I could", "I have seen/read/not", "I know", "I searched", "I did not" and "as far as I" and found no matches. The interpretive first person that remains ("I read", "my interpretation", "I attribute these lines to the excerpt") is labelled and goes to the author for review. Round 3 changed wording only. No new claims, sources or URLs were introduced, so I did not need to re-open any source.

Gate warnings:
- Part 3 at 1,889 words: accepted in round 2 and still accepted. The assignment calls Part 3 the most technically detailed post and says to extend it when depth requires. The brief allows "about 1,800", and the overage is the overshoot walk-through and debt mechanism that round 1 requested.
- Non-HTTPS `classics.mit.edu` links: unchanged. They must match the brief's Sources for `check-draft`, and I confirmed in round 1 that HTTPS versions resolve. Upgrading them is an owner decision at publication, not a writer item.

**Manual checks for the owner before publication (not open items):**
1. Compare the Part 3 loop schematic's signs against Repenning & Sterman's figures (S5) in a PDF viewer. The schematic openly says it was not checked link by link.
2. Part 5's assessment section is flagged as editorial interpretation and needs author review (policy §5).
3. Part 3 spells "organisation" once while the series otherwise uses US "-ization" spellings. This is optional copy-editing.

### Part 1
Verdict: APPROVED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | It pairs "what accumulates" with "what the institution is for", and the 94%-versus-36% contrast carries the argument. |
| Technical accuracy | 4 | The equations are correct, the S1 quotations match C1–C3, and the WIP application of the outflow lever is correct. |
| Intellectual and technical depth | 4 | "Two handles on one bathtub" turns the quoted mechanism into a usable argument for WIP limits. |
| Quality of evidence | 4 | It uses primary texts with honest caveats. The draft excerpt's provenance is stated, and S18 supports the habit reading. |
| Systems-thinking rigor | 4 | Reading habit as a stock and routine as its designed inflow links the mechanism to the history. It is labelled "not Aristotle's vocabulary". |
| Historical accuracy where applicable | 4 | The Warden is described as S20 does. The citizen-male and guardians caveats are kept, and the access limit is stated about the series. |
| Cross-disciplinary connections | 4 | The Conway parallel is explicitly an analogy ("They do not need to"). |
| Accessibility | 4 | Plain and concrete. A Product Owner can follow the bathtub logic. |
| Narrative coherence | 4 | The duplicated disclaimer is gone, and the flow from mechanism to software, history and Conway is clean. |
| Practical relevance | 4 | "Ask of any queue, before asking who is slow, which flow is larger" is a habit a reader can use the same day. |
| Quality of critical analysis | 4 | The "Three limits" paragraph is specific and proportionate. |
| Strength of the final question | 4 | It is the required question, set up by "Structure follows purpose". |

#### Factual and citation issues
None.

#### Feedback
None.

### Part 2
Verdict: APPROVED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "A metric is a boundary" is a crisp framing, distinct from the existing leverage-points post. |
| Technical accuracy | 4 | The SRE wording in the body and in References now matches S13. The DORA and Fowler quotations match S11 and S12. |
| Intellectual and technical depth | 4 | It separates DORA's cross-team correlation from the effect of a single-team push, which is the post's best move. |
| Quality of evidence | 4 | The Chicago claims match the abstracts, and the abstract-level reading is stated about the series. |
| Systems-thinking rigor | 4 | Parameter, rule and goal stay distinct. "Many… not a measured proportion" is properly hedged. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "Where the analogy stops" names the exact divergence (adapt, game, resist). |
| Accessibility | 4 | The tickets-closed example is concrete. |
| Narrative coherence | 4 | It moves cleanly from warning to lens, cases, limits and intervention. |
| Practical relevance | 4 | A reversible rule change and the "write down what falls outside it" habit. |
| Quality of critical analysis | 4 | "It can still be gamed" and "I would not call this a law" keep it proportionate. |
| Strength of the final question | 4 | Noticing movement outside the metric's boundary is specific to this post. |

#### Factual and citation issues
None.

#### Feedback
None.

### Part 3
Verdict: APPROVED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | Three registers (field research, a literal controller, a labelled hypothetical) give the mechanism traction. |
| Technical accuracy | 4 | The HPA facts and quotation are verbatim against S14. The loop signs are internally consistent and openly qualified. |
| Intellectual and technical depth | 5 | The three-step overshoot walk-through followed by the documented dampers is mechanism before metaphor, as the brief asked. |
| Quality of evidence | 4 | Case studies, models and practitioner figures are kept apart. The schematic's limit is disclosed. |
| Systems-thinking rigor | 4 | "Overshoot is what the loop would do without those safeguards" is the careful framing, and the debt mechanism names the stock, why it is invisible and when it surfaces. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "A team is not" holds. The exercise extension is labelled as the authors' and as an analogy, with no physiology. |
| Accessibility | 4 | Demanding but followable. The six-hour example will land with non-specialists. |
| Narrative coherence | 4 | Coherent throughout. The length is justified by the requested depth (see the note above). |
| Practical relevance | 4 | The platform-team hypothetical is recognizable and properly labelled. |
| Quality of critical analysis | 4 | "These diagrams cannot answer it, and neither can this post" is honest about the model's limits. |
| Strength of the final question | 4 | What evidence people inside a self-confirming structure would accept is genuinely open. |

#### Factual and citation issues
None.

#### Feedback
None.

### Part 4
Verdict: APPROVED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 5 | Using the series' own evidence boundary as its final example is the best idea in the series. |
| Technical accuracy | 4 | The S6, S3 and S2 quotations match the record and the essays. |
| Intellectual and technical depth | 4 | The rival-explanation paragraph names the confounders and the data that would separate them. |
| Quality of evidence | 4 | Evidence quality is stated honestly, including the DuPont selection caveat. |
| Systems-thinking rigor | 4 | Explanation versus prediction, the falsifiers and the boundary demonstration all hold. |
| Historical accuracy where applicable | 4 | "Idealizes" is owned as the writer's caveat, and the link sits on "his account". |
| Cross-disciplinary connections | 4 | "A very strange controller" marks the break precisely. |
| Accessibility | 4 | Clear, with no philosophy-of-science jargon. |
| Narrative coherence | 4 | It progresses from model limits to Meadows, evidence, agency, analogies and its own boundary. |
| Practical relevance | 4 | The falsifiers and the separating data are checkable. |
| Quality of critical analysis | 4 | It engages the strongest Meadows ("Power over the rules is real power") and moves the critique to the missing method. |
| Strength of the final question | 4 | How users would discover a model's boundary is specific to this post and leaves "who decides" to Part 5. |

#### Factual and citation issues
None.

#### Feedback
None.

### Part 5
Verdict: APPROVED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "Measurement reveals purpose and also rewrites it" is a genuine synthesis of Sterman with the earlier parts. |
| Technical accuracy | 4 | The SRE, DORA, Fowler and S2 power quotations match the sources. |
| Intellectual and technical depth | 4 | The delays field ("a flat delivery metric at the judging date is weak evidence either way") is a sharp, non-obvious consequence. |
| Quality of evidence | 4 | Leverage Points is now linked inline where it is quoted, and both annotations (S2, S13) describe what the post actually uses. |
| Systems-thinking rigor | 4 | The loops and delays fields make it a systems experiment. "It does nothing about the hero loop unless what is rewarded changes" is good. |
| Historical accuracy where applicable | 4 | The unsupported superlative is replaced with a statement scoped to the series' sources. Aristotle and Plato are used in context. |
| Cross-disciplinary connections | 4 | "Cousin, not twin" is an accurate analogy label. |
| Accessibility | 4 | Plain fields and plain prose. |
| Narrative coherence | 4 | The synthesis opening and "The question left open" close the arc. Efficiency versus autonomy grows out of Part 3. |
| Practical relevance | 4 | All eight required experiment fields are present, plus failure criteria and the instruction to read early indicators first. |
| Quality of critical analysis | 4 | The power criticism is scoped to what the accessible texts do not supply, and the section is flagged for author review. |
| Strength of the final question | 5 | The author's question is verbatim and earned by the declared-versus-actual-goal question before it. |

#### Factual and citation issues
None.

#### Feedback
None.

### Series
Verdict: APPROVED

#### Feedback
None. The series coheres:
- The sources note appears in every part.
- Four mechanisms are explained in depth: stocks and flows (Part 1), boundaries and the parameter/rule/goal distinction (2), feedback with delay, the capability trap and HPA oscillation (3), and model boundaries and causal inference (4).
- The closing questions build in sequence: purpose → boundary → evidence → model limits → who decides → the author's question.
- The third repetitions of "slithery" and the Chicago figure are gone.
- "Training regimes" is covered once, as the authors' own analogy.
- No first-person access or reading claims remain.
- No uninspected source (S21–S26), Meadows trap name, Goodhart/Campbell quote, "factory model" story or physiological claim appears.

### Keep
- Everything listed in the round-1 and round-2 Keep sections.
- The series-scoped phrasing of every evidence limit ("used in this series", "inspected for this series"). It is honest without inventing the author's activities.
- The disclaimer on Part 3's schematic and the editorial-interpretation flag on Part 5's assessment. Both must stay until the owner completes the manual checks listed in this round's note.
