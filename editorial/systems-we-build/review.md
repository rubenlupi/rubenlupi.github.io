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

## Round 4
Verdict: REVISION_REQUIRED
Thesis preserved: yes

Reviewer's verification note (process, not an item). This round compares `draft.md` (after Polish 1–8) with the round-3 text (`history/draft-before-reopen-1.md`) and checks it against `docs/PROSE_STYLE.md`. For every polish that touched a figure, quotation or caveat, the polished wording was checked against the brief's claims table. Figures, quotations, URLs and labels are intact, with three exceptions where wit strengthened or altered a claim (P1-I1, P3-I1, P5-I1). I tried S5 once more to settle the DuPont "7%" flag. WebFetch returned only compressed streams, and the PDF reader is unavailable in this session (no poppler). P3-F6 therefore relies on the parallel structure of the brief's verified C13.

Two policy notes:
- **First-person access phrasing.** Round-2 S-F1 asked for "used in this series" wording. `PROSE_STYLE.md` now blacklists that audit-log register and models the first person instead ("I haven't had access to the full book…"). The owner-approved style guide supersedes S-F1, so the new sources notes are accepted. **Manual check for the owner:** the series now says "I haven't had access" and "I have read only the abstract" in his voice. Confirm that you are content to sign these.
- **Length.** I could not run `wc`. Polish 8's own estimates leave Parts 1–5 at roughly 1,290–2,180 words including References, against the owner's wish for markedly shorter parts. The cuts listed below are concrete, and none of them loses an argument step. Taken together they should come to roughly 15–25% per part.

Still open from round 3 for the owner (not items): compare the Part 3 schematic signs against S5's figures in a PDF viewer; resolve Part 5's italic author-position note; decide between http and https for `classics.mit.edu`.

### Part 1
Verdict: REVISION_REQUIRED
Open factual/citation issues: 1

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | Pairing "what accumulates" with "what it rewards" is still a real argument, and the new title states it with an edge. |
| Technical accuracy | 4 | Equations and S1 quotations are unchanged. "Most of them get it wrong" fairly restates 36% correct. |
| Intellectual and technical depth | 4 | "Two handles on one bathtub" survives the polish intact. |
| Quality of evidence | 3 | "a sensible idea that nobody has proven" turns Fowler's experiential support into a universal negative about all evidence (P1-I1). |
| Systems-thinking rigor | 4 | Habit as a stock with routine as its designed inflow is still labelled "the vocabulary is mine". |
| Historical accuracy where applicable | 4 | Warden, citizen-male and guardians caveats are intact. |
| Cross-disciplinary connections | 4 | "need not share a mechanism; the parallel is an analogy" is still explicit. |
| Accessibility | 4 | Plain, and the jokes land on first reading ("A bath, of all things, beats them"). |
| Narrative coherence | 4 | The opening now starts in the material. The last section restates the opening thesis (P1-F3). |
| Practical relevance | 4 | "before you ask who is slow, ask which flow is larger" is kept. |
| Quality of critical analysis | 4 | "Each witness needs a caveat" is concise and specific. |
| Strength of the final question | 4 | It is the required question and is earned by the purpose section. |
| Prose quality | 3 | Strong voice ("The mission statement is the part of a system that everyone reads and nothing obeys"). However, blacklisted series narration remains (P1-F1), and two caveats and one image are said twice (P1-F2). |

#### Factual and citation issues
- P1-I1 — "Software ships its org chart", last sentence: "a sensible idea that nobody has proven" goes beyond S8. The brief records only that Fowler's support is experiential and that he cites no study (C16). Neither source establishes that no evidence exists. The joke strengthens the claim. Required: scope it to the evidence, e.g. "Reorganizing teams to get a better architecture is a sensible idea backed mostly by experience, which makes it a very ordinary idea in software."

#### Feedback
- P1-F1 — Last section: "Part 2 shows how improving each part on its own terms makes things stranger, and Part 3 asks why intelligent people keep doing it anyway." This describes what the series will do (PROSE_STYLE blacklist §1). Required: cut it. The site renders series navigation.
- P1-F2 — Concision. Make these cuts:
  - "and the queue is the memory of that". The next sentence makes the same point better.
  - The whole paragraph "As I read those sources, the queue and the debt are both stocks…". It repeats the label "from here on the reading is mine" from the section's first line.
  - "Two more properties matter later." This is signposting; start with the quotation.
  - "so I attribute these lines to the excerpt and nothing more". This is audit-log register. The sources note already says it is a draft excerpt; if needed, add "pre-publication" there.
- P1-F3 — "You can't read a system from its parts": the first sentence restates the opening's thesis paragraph. Required: start with the examples (the team with a growing queue, the school), and keep the never-out-of-date line.

### Part 2
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "Everything Outside the Metric Is Free" is the thesis with an edge, and the article cashes it out. |
| Technical accuracy | 4 | DORA, Fowler and SRE wording are unchanged and correct. |
| Intellectual and technical depth | 4 | The correlation-versus-push distinction survives, now with "Managers, after all, rarely manage the average team." |
| Quality of evidence | 4 | Chicago figures, "at least 4–5%" and the abstract-level limit are kept. The opening's "small share" is a fair paraphrase. |
| Systems-thinking rigor | 4 | Parameter, rule and goal stay distinct. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "no pipeline has ever disagreed with its target" marks where the analogy breaks, wittily and accurately. |
| Accessibility | 4 | Concrete and clear. |
| Narrative coherence | 4 | The structure is clean, but the same line and the same caveat appear twice (P2-F2). |
| Practical relevance | 4 | The rule change and the "write down what falls outside it" habit are kept. |
| Quality of critical analysis | 4 | "It can still be gamed" is kept. |
| Strength of the final question | 4 | It is specific to the boundary mechanism. |
| Prose quality | 3 | The humor is in the register the owner chose ("arithmetic never has to sign anything"). However, "not a finding I can attribute to the authors" is verbatim on the blacklist (§2), and the series narration in "Change the rule" remains (P2-F1). |

#### Factual and citation issues
None.

#### Feedback
- P2-F1 — Blacklist instances:
  - (a) Neal & Schanzenbach paragraph: "so the mechanism is my reading, suggested by the title… and the design, not a finding I can attribute to the authors". Required: one plain caveat, e.g. "The abstract doesn't say why; my guess, prompted by the title ("Left Behind By Design"), is that a proficiency count rewards moving students across a line, so those far below it may be cheaper to ignore."
  - (b) "Whether any of this works is an open question, and the rest of the series treats it as one." This narrates the series. Cut it.
- P2-F2 — Say each thing once:
  - "the score is what got optimized" (opening) and "when the score is the boundary, the score is what gets optimized" (Chicago section). Keep one.
  - "These are Chicago data, and I won't generalize them" and "That is not a law, just two bodies of Chicago evidence…". Keep one caveat.
  - Cut the warm-up "DORA's research programme is a good place to watch careful practitioners handle this."
- P2-F3 — "Change the rule, not the number", second paragraph: the protected-capacity experiment and the SRE 50% precedent are specified in full in Part 5 (Polish 8 flags this repetition). Required: reduce the paragraph to one cross-reference sentence to Part 5 and drop the SRE sentences. Remove "Eliminating Toil" from this part's References if it is no longer cited.

### Part 3
Verdict: REVISION_REQUIRED
Open factual/citation issues: 1

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | The opening quotation is a far better door than the old preview, and the title states the thesis directly. |
| Technical accuracy | 4 | The HPA defaults and quotation are unchanged. "Counts the capacity already on its way before asking for more" is a fair plain reading of the 0% assumption for not-ready pods (it settles the flag from Polish 3, 4 and 5). |
| Intellectual and technical depth | 5 | The overshoot walk-through followed by the documented dampers is intact. |
| Quality of evidence | 4 | Case, model and practitioner figures are still kept apart. One joke adds a fact the quotes don't carry (P3-I1). |
| Systems-thinking rigor | 4 | "the correction outlives the problem because the evidence of the solution arrives late" is a crisp statement of overshoot. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "a team is not" and the exercise extension are still labelled. |
| Accessibility | 4 | The six-hour example and "the bank thanks you" land on first reading. |
| Narrative coherence | 3 | At an estimated 2,180 words, it is the longest part by far, and several sections end by saying their point twice (P3-F3–F5). The classroom section repeats Part 2 without adding a mechanism (P3-F7). |
| Practical relevance | 4 | The invented team is recognizable and labelled. |
| Quality of critical analysis | 4 | "an empirical question no diagram can settle" is kept. |
| Strength of the final question | 4 | It is still the right question for this part. |
| Prose quality | 3 | It is the best-voiced part ("ask the data for a second opinion and you get the first one back, with numbers attached"). However, it still narrates itself (P3-F1), keeps a telegraphic fragment (P3-F2), and doubles several punchlines. |

#### Factual and citation issues
- P3-I1 — "The improvement nobody had time for", second paragraph: "and at no stage does anyone object to it" is a general claim about improvement programmes. Neither quotation supports it, and the brief does not record it. The joke invents a fact. Required: tie it to the two speakers ("and neither speaker objects to it"), or cut it.

#### Feedback
- P3-F1 — Self-narration (blacklist §1). Required: cut or rewrite each of these.
  - "It is here because it makes the structure easy to see; Part 4 comes back to where the analogy stops working."
  - "Beyond policy resistance and the capability trap, I describe structures in my own words." The next sentence already labels the reading as yours.
  - "kept symbolic rather than dressed in invented numbers".
  - "Part 5 turns that into an experiment."
- P3-F2 — "A supervisor at an electronics plant: "Supervisors never had time to make improvements…"." This is a verbless fragment (blacklist §3). Required: write a full sentence and merge it with P3-I1's fix. Also move the S5 link to the first mention of Repenning and Sterman in the opening, so that the opening quotation sits next to its source (Polish 4 flag).
- P3-F3 — Doubled points:
  - Opening: "A good process exists, the person meant to use it agrees that it is good, and nobody uses it." is followed by "plenty of admirers and no users". Keep the second.
  - Timing paragraph: "it has made up its mind long before the slow loop's results come in" and "Working smarter does pay off, just after the decision has been taken" say the same thing. Keep one.
  - Six hours: "Two thirds of the miracle is a loan" restates "four hours borrowed". Keep the owner's line on its own: "It is the only kind of loan where the bank thanks you for taking it."
- P3-F4 — Heroes section:
  - Two jokes make one point. Cut "Nobody has ever been carried shoulder-high out of a building that didn't burn." The "produced… nothing at all" line is stronger, and "shoulder-high" is culture-bound.
  - "In most organisations that takes more nerve…" is a generalization with no source (open since Polish 3). Drop "In most organisations".
- P3-F5 — Technical debt section:
  - "that interest competes for the very hours that could have paid it down" and "a debt that charges its interest in the only currency that could have cleared it" are the same point. Keep one.
  - "I read all of these as…" and "What drains, as I read it…": keep one label.
- P3-F6 — DuPont sentence: "fell about 20%, against a rise of about 7%" does not say whose costs rose (open since Polish 1). In the brief's verified C13, the 7% sits in parallel with "5% in 23 comparable plants", so it refers to the comparison plants. Required: make that explicit ("in the comparison plants").
- P3-F7 — Cut the section "Closing the wrong gap, in a classroom". It repeats Part 2's Chicago evidence and adds only a label. It also states "the unmeasured purpose drifted" as fact, where Part 2 hedges it. Remove S15 and S16 from this part's References.
- P3-F8 — Description: "Six hours of extra output from two hours of real effort" reads as data in a link preview. Required: mark it as the authors' worked example, e.g. "In a worked example, six hours…".

### Part 4
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 5 | The evidence boundary used as its own example is still the best idea in the series. |
| Technical accuracy | 4 | The S6, S3 and S2 quotations are unchanged. |
| Intellectual and technical depth | 4 | The rival-explanation paragraph is intact, and "a diagram, unlike a dataset, is never surprised" sharpens it. |
| Quality of evidence | 4 | The DuPont selection caveat and the case-study caveat are kept. |
| Systems-thinking rigor | 4 | Explanation versus prediction and the falsifiers hold. |
| Historical accuracy where applicable | 4 | The Xenophon caveat is correct, but it repeats Part 1 (P4-F3). |
| Cross-disciplinary connections | 4 | "The autoscaler never argues back" is a heading that carries the argument. |
| Accessibility | 4 | Clear and free of jargon. |
| Narrative coherence | 4 | Sterman's warning and the sources limit are each stated twice (P4-F2). |
| Practical relevance | 4 | The separating data are checkable. |
| Quality of critical analysis | 4 | "The system" as "the one culprit that can never be fired" is funny and exact. |
| Strength of the final question | 4 | It is specific to model boundaries. |
| Prose quality | 3 | The register is right ("like a lecture on humility delivered with great certainty"), but there is a series self-reference, a narrated sources note and a standalone fragment (P4-F1). |

#### Factual and citation issues
None.

#### Feedback
- P4-F1 — Blacklist instances:
  - "and that gap turns out to be one of the examples below rather than a footnote to them" (§1).
  - "a distinction I should have kept sharper earlier" (narrates the series).
  - "Quite a lot." as a standalone answer (§3).
  Required: cut the first two, and fold the third into the next sentence.
- P4-F2 — Repetition:
  - The opening says Sterman's title starts "All models are wrong", and the first section repeats "Sterman, a sympathetic insider, wrote that all models are wrong". Start the section at "System dynamicists, he says…".
  - The sources note and "My own fence" both list the excerpt and two essays. Keep the list once (in "My own fence") and reduce the note to one plain clause.
- P4-F3 — Cut the Xenophon paragraph in "The autoscaler never argues back". It restates Part 1's caveat and is not about the autoscaler analogy. Remove S20 from this part's References.

### Part 5
Verdict: REVISION_REQUIRED
Open factual/citation issues: 1

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "We would send back a thermometer that changed the weather" is an original, exact image for the post's synthesis. |
| Technical accuracy | 4 | The SRE, DORA, Fowler and S2 power quotations are unchanged. |
| Intellectual and technical depth | 4 | The delays field and "weak evidence either way" are kept. |
| Quality of evidence | 4 | The power paragraph is still linked inline and scoped to the accessible texts. |
| Systems-thinking rigor | 4 | The loops and delays fields are intact. |
| Historical accuracy where applicable | 4 | Aristotle and Plato are in context. The guardians caveat is kept. |
| Cross-disciplinary connections | 4 | "a cousin of that question, not a twin" is kept, but it is now followed by a second, redundant analogy label (P5-F3). |
| Accessibility | 4 | Plain. |
| Narrative coherence | 4 | Opening on Aristotle's admission works. The series recap in the second paragraph does not (P5-F3). |
| Practical relevance | 4 | The experiment, failure criteria and pre-registration are intact. |
| Quality of critical analysis | 4 | The assessment stays scoped and flagged for author review. |
| Strength of the final question | 4 | The new ending is good prose, but it replaces the author's question, which the brief requires verbatim (P5-I1). |
| Prose quality | 3 | The jokes are good ("Goodwill is the first thing a deadline spends"), but the experiment is introduced by narration and the final section opens with a summarizing thesis recap (P5-F1, P5-F2). |

#### Factual and citation issues
- P5-I1 — Ending: Polish 7 replaced the author's question with "If nobody can answer that, the most important skill in engineering may not be building better systems at all, but noticing…". The brief (Question; Part 5 content) requires the author's own words to be kept verbatim, and the round-3 Keep lists them. A prose pass may not rewrite the author's words. Required: restore "What if the most important skill in engineering isn't learning how to build better systems, but recognizing when we're solving the wrong problem?" as the last line. You may introduce it with one bridging clause after the "Who gets to decide…" question. If the owner prefers the polished wording, that is his decision to record, not the writer's.

#### Feedback
- P5-F1 — "An experiment that admits in advance how it could fail":
  - The first sentence narrates the format (blacklist §1). Required: replace it with "This is a hypothesis, not a result."
  - The **Title.** field duplicates the heading and the **Hypothesis.** field repeats that label. Merge **Hypothesis.** into **Intervention.** and drop **Title.**
  - The remaining bold fields are accepted as a specification format, not as a substitute for transitions.
- P5-F2 — "Who decides what a system is for?": the first paragraph restates the series thesis ("That has been my thesis throughout"). An ending that summarizes is blacklisted (§4). Required: cut the recap. Move the one sentence that matters, the "sometimes" and "I have no evidence that it reliably does" caveat, to the end of the experiment section, or to just after the experiment's hypothesis.
- P5-F3 — Concision:
  - Cut "The bathtubs of Part 1, the fences of Part 2, the loops of Part 3 and the blind spots of Part 4 all sit downstream of that one decision." It is a series recap.
  - Cut "Both institutions must decide what to optimize, but this is an analogy, and neither shares the other's mechanism." "cousin, not a twin" already labels the analogy.
  - Trim "and I won't resolve it artificially" (narration).

### Series
Verdict: REVISION_REQUIRED

#### Feedback
- S-F1 — Concision across parts. The owner asked for markedly shorter parts, and the items above (P1-F2/F3, P2-F2/F3, P3-F3–F7, P4-F2/F3, P5-F1–F3) are the concrete cuts. Apply all of them. Then do one more pass per part with a single rule: delete any sentence whose point the previous or next sentence already makes. Do not cut caveats that appear only once, links that support a remaining claim, or the experiment's failure criteria.
- S-F2 — Spelling is mixed: US "organization(s)", "-ize" against British "behaviour", "organisations", "programme", "modelling", "honour", "favours", "centre". Required: pick one variety (the series mostly uses US "-ization") and apply it throughout, except inside quotations.
- S-F3 — Titles: none is clickbait. Each is cashed out by its part. Keep them. Polish 6 settled the Part 3 lift-title flag by replacing that title.

### Keep
- All five titles and the new openings that start in the material (the bathtub task, Chicago cheating, the engineer's quotation, Sterman's title, Aristotle's admission).
- The columnist lines that comment on a stated fact, for example:
  - "The mission statement is the part of a system that everyone reads and nothing obeys."
  - "arithmetic never has to sign anything"
  - "It is the only kind of loan where the bank thanks you for taking it."
  - "ask the data for a second opinion and you get the first one back, with numbers attached"
  - "'The system' is the one culprit that can never be fired."
  - "We would send back a thermometer that changed the weather."
  - "Goodwill is the first thing a deadline spends."
- Every caveat said once next to its claim, the hypothetical labels, the schematic disclaimer, the Part 5 italic author-review note, and everything in the round 1–3 Keep sections.

## Round 5
Verdict: REVISION_REQUIRED
Thesis preserved: yes

Reviewer's verification note (process, not an item). I checked every round-4 item against revision-notes.md ("Round 4 response"), Polish 9 and `draft.md`, and compared the result with `history/draft-r4.md`. Results:
- All 3 round-4 issues are resolved: P1-I1 is scoped to experience, P3-I1 now reads "neither speaker objects to it", and P5-I1 restores the author's question verbatim after one bridging clause, which round 4 allowed.
- Round-4 feedback is resolved except P5-F2, which is only partly done (see P5-F2 below).
- S-F2 is done: a search for British spellings finds none outside quotations.
- I found no em-dashes and no stock phrases from the blacklist.
- No polish since round 4 changed a figure, quotation, URL or caveat. Two changes touched facts. "in the comparison plants" (Part 3) matches the brief's C13. "Everything I know of Meadows here comes from one draft excerpt… and two of her essays" (Part 4) matches what that part cites. No joke strengthens a claim.

On the open polish flags:
- Polish 7's wit lines that generalize slightly ("plans to raise a number have a way of forgetting it exists", "people learn to read the silence remarkably fast", "Managers… rarely manage the average team", "will probably find one") are settled as comments, not claims, and are accepted.
- The Part 5 bold specification fields were accepted in round 4.
- Polish 9 raised no new flags.

Three blacklist instances below (P2-F1, both P5-F1 locations) were already in the round-4 text and I missed them then. They are listed now because any blacklist pattern blocks approval.

Length: I could not run `wc`, so these are estimates. The round-4 cuts removed one section each from Parts 3 and 4 and several sentences elsewhere. The cuts below are smaller, roughly another 5–8% per part. None of them removes an argument step, a caveat or a link.

Still with the owner (not items):
1. Compare the Part 3 schematic signs against S5's figures.
2. Resolve Part 5's italic author-position note.
3. Choose http or https for `classics.mit.edu`.
4. Confirm you are content to sign the first-person sources lines ("I haven't had access…", "I have read only the abstract").

### Part 1
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "Mission Statements Don't Run Systems. Bathtubs Do." is the thesis with an edge, and the part delivers on it. |
| Technical accuracy | 4 | The equations and the S1 quotations are unchanged and correct. |
| Intellectual and technical depth | 4 | "Two handles on one bathtub" and habit read as a stock are intact. |
| Quality of evidence | 4 | The Conway claim is now scoped to experience (P1-I1 resolved). |
| Systems-thinking rigor | 4 | Reading habit as a stock with routine as its designed inflow is still labelled "The vocabulary is mine". |
| Historical accuracy where applicable | 4 | The Warden, citizen-male and guardians caveats are intact. |
| Cross-disciplinary connections | 4 | "need not share a mechanism; the parallel is an analogy". |
| Accessibility | 4 | Plain, and the jokes land on first reading. |
| Narrative coherence | 4 | The series narration is gone, and the ending now opens on examples. |
| Practical relevance | 4 | "before you ask who is slow, ask which flow is larger" is kept. |
| Quality of critical analysis | 4 | "Each witness needs a caveat" is concise. |
| Strength of the final question | 4 | It is the required question, earned by the purpose section. |
| Prose quality | 4 | No blacklist pattern remains. Three points are still said twice (P1-F1), which is minor polish. |

#### Factual and citation issues
None.

#### Feedback
- P1-F1 — Say each thing once:
  - (a) "Clever people read the tap…", second paragraph: cut "So people can read the rates; what they struggle with is turning rates into accumulation." The bathroom sentence makes the same point better. Keep the classroom caveat.
  - (b) "Where software hides its bathtubs", WIP paragraphs: "A team that feels 'busy'…" and "however busy people feel" make the same point, so cut the second clause. Also cut "The excerpt's point about outflow also has a mirror image, since reducing arrivals acts on the same stock as raising completions." The "two handles on one bathtub" sentence carries that point.
  - (c) Conway paragraph: experience is stated twice ("His support is experience… I hold the claim at that level too: … backed mostly by experience"). For example: "His support is experience rather than empirical research, which makes reorganizing teams for a better architecture a sensible idea of the most ordinary kind in software."

### Part 2
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "Everything Outside the Metric Is Free" is cashed out by the argument. |
| Technical accuracy | 4 | The DORA and Fowler wording is unchanged and correct. The SRE material moved to Part 5. |
| Intellectual and technical depth | 4 | The correlation-versus-push distinction is intact. |
| Quality of evidence | 4 | The Neal & Schanzenbach caveat is now one plain sentence ("which doesn't say why; my guess…"). |
| Systems-thinking rigor | 4 | Parameter, rule and goal stay distinct. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "no pipeline has ever disagreed with its target" marks the break. |
| Accessibility | 4 | Concrete. |
| Narrative coherence | 4 | The doubled lines from round 4 are gone, and the Part 5 hand-off is one clause. |
| Practical relevance | 4 | The rule change and the "write down what falls outside it" habit are kept. |
| Quality of critical analysis | 4 | "It can still be gamed" is kept. |
| Strength of the final question | 4 | It is specific to the boundary mechanism. |
| Prose quality | 3 | The register is strong ("arithmetic never has to sign anything"), but one instance of the text narrating itself remains (P2-F1). |

#### Factual and citation issues
None.

#### Feedback
- P2-F1 — "A parameter asked to do a goal's job", second paragraph: "and nothing below depends on more" describes the post itself (blacklist §1). Required: cut it. The sentence ends at "not an empirically validated ranking".
- P2-F2 — "Chicago's scores did as they were told", first paragraph: "That phrase is the mechanism in one line:" is a colon reveal that announces the point instead of making it. Required: join the quotation directly to the point, e.g. "…to 'relatively minor changes in incentives': when the score is the boundary, …".

### Part 3
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | The opening quotation and the title state the thesis directly. |
| Technical accuracy | 4 | HPA defaults and quotations unchanged; DuPont 7% now attributed to the comparison plants (C13). |
| Intellectual and technical depth | 5 | The overshoot walk-through followed by the documented dampers is intact. |
| Quality of evidence | 4 | Case, model and practitioner figures are kept apart. The invented "no one objects" fact is gone. |
| Systems-thinking rigor | 4 | Loops, timing and the self-confirming error are correctly stated. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | The limit "a team is not" and the exercise extension are both labelled. |
| Accessibility | 4 | The six-hour example and the bank line land on first reading. |
| Narrative coherence | 3 | The sentence where the argument turns says the opposite of what is meant (P3-F1), and several labels and points are said twice (P3-F2). |
| Practical relevance | 4 | The invented team is recognizable and labelled. |
| Quality of critical analysis | 4 | "an empirical question no diagram can settle" is kept. |
| Strength of the final question | 4 | It is the right question for this part. |
| Prose quality | 4 | No blacklist pattern remains, and it is still the best-voiced part. The doubles in P3-F2 are polish. |

#### Factual and citation issues
None.

#### Feedback
- P3-F1 — "When trying harder digs the hole deeper", first sentence: "telling people to try harder will not work, because the evidence they see confirms the urging" says that the urging fails because the evidence supports it. The next sentence shows that the target is managers' belief in pressure. Required: say who is being urged, and to do what. For example: "If this reading is right, urging managers to stop pushing will not work, because the evidence they see keeps endorsing the push."
- P3-F2 — Say each thing once:
  - (a) "Four loops…", first paragraph: cut "rendered here in text rather than copied from their figures". The paragraph under the diagram already says it is your adaptation.
  - (b) "When the system fights the fix", last paragraph: "look to me like" and "That reading is mine;" are the same label twice. Cut "That reading is mine;".
  - (c) "Technical debt: interest nobody books": "All of these are, as I read them, capability stocks that drain with a delay and out of sight" is restated by the next paragraph. Cut the sentence and move the label there ("What drains, as I read it, is…").
  - (d) "A made-up team you may recognize": "with no real team or number behind it" and "If you recognize it, it is still made up" are the same label. Keep the joke and cut the clause.
  - (e) "Six hours…", last paragraph: "Months later the borrowed hours come due as rework, and the question becomes why the team has got worse" repeats the opening paragraph almost word for word. Cut it, and join "Given the same data…" to the previous sentence with a short clause about the later rework.

### Part 4
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 5 | The evidence boundary used as its own example is still the best idea in the series. |
| Technical accuracy | 4 | The S6, S3 and S2 quotations are unchanged. |
| Intellectual and technical depth | 4 | The rival-explanation paragraph is intact. |
| Quality of evidence | 4 | The DuPont selection caveat and the case-study caveat are kept. |
| Systems-thinking rigor | 4 | Explanation versus prediction and the falsifiers hold. |
| Historical accuracy where applicable | n/a | The Xenophon paragraph was cut, so no historical claims remain beyond Aristotle on habit, used in context. |
| Cross-disciplinary connections | 4 | "the honest use of the analogy is to make delay vivid and then stop". |
| Accessibility | 4 | Clear. |
| Narrative coherence | 4 | The round-4 repetitions are gone. The explanation-versus-prediction point is still made three times (P4-F1). |
| Practical relevance | 4 | The separating data are checkable. |
| Quality of critical analysis | 4 | The power critique engages the strongest Meadows. |
| Strength of the final question | 4 | It is specific to model boundaries. |
| Prose quality | 4 | No blacklist pattern remains. The P4-F1 cuts are polish. |

#### Factual and citation issues
None.

#### Feedback
- P4-F1 — Say each thing once. The opening, "Good at why, poor at when" and "What survives the critique" each say that systems thinking explains but does not predict.
  - (a) In "Good at why…", merge the second paragraph into one sentence, e.g. "A model can explain why a pattern recurs without predicting when it will happen in your organization, or proving what caused a particular outcome; that takes data."
  - (b) In "What survives the critique", drop the "good way to ask why… poor way to claim you know the next outcome" clause. Keep the humility point and "Its weakest advocate is a confident one."
- P4-F2 — "My own fence": the blind spot is stated three times ("I have a blind spot", "a fence I did not get to place", "The most common way to have a fence…"), and "must not be passed off" reads like a rule, not a writer. Required: keep the source list, one statement that you have avoided guessing at the missing chapters, the Sterman point and the closing line.

### Part 5
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "We would send back a thermometer that changed the weather" is still the post's sharpest synthesis. |
| Technical accuracy | 4 | The SRE, DORA, Fowler and S2 quotations are unchanged. |
| Intellectual and technical depth | 4 | The delays field and "weak evidence either way" are kept. |
| Quality of evidence | 4 | The power paragraph is linked inline and scoped to the accessible texts. |
| Systems-thinking rigor | 4 | The loops and delays fields are intact. |
| Historical accuracy where applicable | 4 | Aristotle and Plato are used in context. |
| Cross-disciplinary connections | 4 | "a cousin of that question, not a twin" now stands alone. |
| Accessibility | 4 | Plain. |
| Narrative coherence | 4 | The series recap is gone. The closing still opens on a thesis sentence (P5-F2). |
| Practical relevance | 4 | The experiment, failure criteria and pre-registration are intact. |
| Quality of critical analysis | 4 | The assessment stays scoped and flagged for review. |
| Strength of the final question | 5 | The author's question is restored verbatim and earned. |
| Prose quality | 3 | The jokes are good ("Goodwill is the first thing a deadline spends"), but the text narrates itself twice and the ending opens with a summary (P5-F1, P5-F2). |

#### Factual and citation issues
None.

#### Feedback
- P5-F1 — The text narrates itself (blacklist §1):
  - (a) Sources note: "so the assessment near the end judges Meadows' ideas as… present them, not the whole book" points ahead in the post and repeats the italic note in the assessment section. Required: reduce it to the plain sentence used in Parts 1 and 3 ("I haven't had access to the full book, so what follows draws on…").
  - (b) Assessment, power paragraph: "in a series that ends by calling the goal the key decision". Required: e.g. "That seems to me the largest gap, since the goal is the decision that matters most."
- P5-F2 — Round-4 P5-F2 is only partly done. "Changing what a system measures… can help, but I have no evidence that it reliably does" now opens the final section, which is still an ending that starts with a summary (§4). Required:
  - Move that sentence to the end of **Intervention.** and let it replace "and that is a hypothesis, nothing more". That phrase also repeats the section's opening label.
  - Open the final section at "Underneath sits a question none of the frameworks answers: …".

### Series
Verdict: REVISION_REQUIRED

#### Feedback
- S-F1 — Apply the concision items above (P1-F1, P3-F2, P4-F1, P4-F2) and the blacklist fixes (P2-F1, P5-F1, P5-F2). Change nothing else. Do not add jokes, labels or transitions to make up for the cuts. Every caveat that appears once, every link that supports a remaining claim, and the failure criteria stay. After that, the series meets the standard: the titles are not clickbait, the humor is in the columnist register the owner chose, and no joke blurs a claim.

### Keep
- Everything in the round 1–4 Keep sections.
- The restored ending of Part 5 ("If nobody can answer that, what if the most important skill in engineering isn't learning how to build better systems, but recognizing when we're solving the wrong problem?").
- Part 3's "which is more patience than the manager with the six hours showed" callback, and "the correction outlives the problem because the evidence of the solution arrives late".
- Part 2's single Neal & Schanzenbach caveat, and Part 4's one-line sources note.

## Round 6
Verdict: REVISION_REQUIRED
Thesis preserved: yes

Reviewer's verification note (process, not an item). I checked every round-5 item against revision-notes.md ("Round 5 response"), Polish 10 and `draft.md`. All round-5 items are resolved in the text:
- P1-F1 (a) and (b) are done.
- P2-F1 and P2-F2 are done.
- P3-F1 is done. The sentence where the argument turns now says who is urged and why it fails.
- P3-F2 (a)–(e), P4-F1, P4-F2, P5-F1 and P5-F2 are done.

There is one regression. Polish 10 rewrote the Conway sentence that round-5 P1-F1(c) had fixed. The new version states "experience" twice again and ends on a colon reveal (P1-F1 below).

Polish 10 changed no figure, quotation, URL or caveat. I checked its other edits against the brief:
- "studied with Meadows" in Part 2 matches the brief's "taught by Meadows" (C-row on S6) and Parts 1 and 4.
- The SRE quotation is still verbatim from S13, now as link text.
- "That is honest, and uncomfortable: …" and "Quite a lot of systems thinking survives" change no claim.

No joke strengthens or invents a fact. "where most software advice lives" is a self-deprecating comment on the profession, in the same class as the wit lines accepted in round 5, and it is accepted as a comment.

Polish 10 raised no new flags, and all earlier flags are settled. I found no em-dashes and no stock phrases. The titles stay as accepted in round 4 (S-F3): each one is cashed out by its part.

Concision. I could not run `wc`. By my estimate, Part 3 is still the longest part at roughly 1,800 body words, and Parts 1, 2 and 4 run about 1,000–1,250. The cuts below are the remaining sentences that repeat a neighbour or another part. None of them removes an argument step, a caveat said once, or a link that supports a remaining claim. Further cuts would start removing arguments, which is the owner's call, not the writer's.

Still with the owner (not items):
1. Compare the Part 3 schematic signs against S5's figures.
2. Resolve Part 5's italic author-position note.
3. Choose http or https for `classics.mit.edu`.
4. Confirm you are content to sign the first-person sources lines.

### Part 1
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "Mission Statements Don't Run Systems. Bathtubs Do." is cashed out by the argument from stocks to purpose. |
| Technical accuracy | 4 | The equations and the S1 quotations are unchanged and correct. |
| Intellectual and technical depth | 4 | "Two handles on one bathtub" and habit read as a stock are intact. |
| Quality of evidence | 4 | Sterman's results are scoped ("one instructor's classes"), and the Conway claim is scoped to experience. |
| Systems-thinking rigor | 4 | The habit-as-stock reading is still labelled "The vocabulary is mine". |
| Historical accuracy where applicable | 4 | The Warden, citizen-male and guardians caveats are intact. |
| Cross-disciplinary connections | 4 | "need not share a mechanism; the parallel is an analogy". |
| Accessibility | 4 | Plain, and "A bath, of all things, beats them" lands on first reading. |
| Narrative coherence | 4 | It is tight. The round-5 cuts removed every doubled point except the one P1-F1 reintroduced. |
| Practical relevance | 4 | "before you ask who is slow, ask which flow is larger". |
| Quality of critical analysis | 4 | "Each witness needs a caveat" is concise and specific. |
| Strength of the final question | 4 | It is the required question, earned by the purpose section. |
| Prose quality | 3 | Polish 10 added a colon reveal used for effect ("where most software advice lives: sensible, and backed by experience"), which is blacklist §4. It also restates "experience" from the same sentence, the duplication round 5 removed. |

#### Factual and citation issues
None.

#### Feedback
- P1-F1 — "Software ships its org chart", Fowler sentence: the colon reveal and the second "experience" (regression from round-5 P1-F1(c)). Required: one statement of the experience point, with no colon reveal. For example: "His support is experience rather than empirical research, which puts reorganizing teams for a better architecture where most software advice lives."

### Part 2
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "Everything Outside the Metric Is Free" is cashed out by the argument. |
| Technical accuracy | 4 | The DORA, Fowler and Sterman wording is unchanged and correct. |
| Intellectual and technical depth | 4 | The correlation-versus-push distinction is intact. |
| Quality of evidence | 4 | The Chicago figures and the single abstract-level caveat are kept. |
| Systems-thinking rigor | 4 | Parameter, rule and goal stay distinct. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "no pipeline has ever disagreed with its target" marks the break. |
| Accessibility | 4 | Concrete. |
| Narrative coherence | 4 | The narration and the colon reveal from round 5 are gone. |
| Practical relevance | 4 | The rule change and the "write down what falls outside it" habit are kept. |
| Quality of critical analysis | 4 | "It can still be gamed" and "That is not a law" are kept. |
| Strength of the final question | 4 | It is specific to the boundary mechanism. |
| Prose quality | 4 | No blacklist pattern remains, and the voice is right ("arithmetic never has to sign anything"). The two cuts below are concision only. |

#### Factual and citation issues
None.

#### Feedback
- P2-F1 — Concision, two cuts:
  - (a) "Chicago's scores did as they were told", last paragraph: cut ", and I won't generalize them". "That is not a law, just two bodies of Chicago evidence" already makes the caveat.
  - (b) "Engineering dashboards have fences too", second paragraph: cut ", and it is the one a manager acts on". "Managers, after all, rarely manage the average team" makes the same point and is the better line.

### Part 3
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | The opening quotation and the title state the thesis directly. |
| Technical accuracy | 4 | The HPA defaults and quotations are unchanged. The DuPont 7% is attributed to the comparison plants (C13). |
| Intellectual and technical depth | 5 | The overshoot walk-through followed by the documented dampers is intact. |
| Quality of evidence | 4 | Case, model and practitioner figures are kept apart, and the gloss examples are labelled "mine, not the authors'". |
| Systems-thinking rigor | 4 | Loops, timing and the self-confirming error are stated correctly. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "a team is not" and the exercise extension are both labelled. |
| Accessibility | 4 | The six-hour example and the bank line land on first reading. |
| Narrative coherence | 4 | The reversed sentence is fixed, so the turn into "When trying harder digs the hole deeper" now reads correctly. |
| Practical relevance | 4 | The invented team is recognizable and labelled. |
| Quality of critical analysis | 4 | "an empirical question no diagram can settle" is kept. |
| Strength of the final question | 4 | It is the right question for this part. |
| Prose quality | 4 | No blacklist pattern remains, and it is still the best-voiced part. It is also still the longest, and the cuts below are where it repeats itself. |

#### Factual and citation issues
None.

#### Feedback
- P3-F1 — Concision, say each thing once:
  - (a) "Four loops…", last sentence: "the loop with short feedback beats the one with long feedback every time" and "the scoreboard favors working harder and cutting corners" make the same point. Keep one. For example: "Judge by this quarter's numbers and the scoreboard favors working harder and cutting corners; it has made up its mind long before the slow loop's results come in."
  - (b) "When the system fights the fix": "The medicine produces the symptoms it was prescribed for" and "relieving the visible gap while eroding the capacity to close it" make one point twice. Keep the medicine line, and reduce the second paragraph to the label. For example: "Calling this a symptomatic fix is my label; Meadows doesn't name the pattern in the texts I've drawn on."
  - (c) "Technical debt: interest nobody books": cut "and Fowler's quadrant separates prudent debt from reckless". Part 1 already makes this point, and nothing in Part 3 uses it. Remove "Technical Debt Quadrant" from this part's References.
  - (d) "A made-up team…" and the next section repeat each other. "the one remedy the evidence has so far endorsed" is followed by "the evidence they see keeps endorsing the push" and "You cannot talk people out of a lesson their own numbers keep teaching them". Keep one statement of the point across the two paragraphs. The round-5 P3-F1 sentence may be shortened, provided it still says who is urged.
  - (e) "When trying harder…", last paragraph: after the colon, "effort spent now on getting better is the first thing sacrificed to the demands of the day, and the cost shows up later" restates the opening, just before the final question (blacklist §4, ending that summarizes). End the sentence at "…a project that actually uses the new process." and keep the callback.

### Part 4
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 5 | The evidence boundary used as its own example is still the best idea in the series. |
| Technical accuracy | 4 | The S6, S3 and S2 quotations are unchanged. |
| Intellectual and technical depth | 4 | The rival-explanation paragraph is intact. |
| Quality of evidence | 4 | The DuPont selection caveat and the case-study caveat are kept. |
| Systems-thinking rigor | 4 | Explanation versus prediction and the falsifiers hold. |
| Historical accuracy where applicable | n/a | Only Aristotle on habit, used in context. |
| Cross-disciplinary connections | 4 | "make delay vivid and then stop". |
| Accessibility | 4 | Clear. |
| Narrative coherence | 4 | The explanation-versus-prediction point is now made once. |
| Practical relevance | 4 | The separating data are checkable. |
| Quality of critical analysis | 4 | The power critique engages the strongest Meadows. |
| Strength of the final question | 4 | It is specific to model boundaries. |
| Prose quality | 4 | No blacklist pattern remains ("like a lecture on humility delivered with great certainty"). The cuts below are concision only. |

#### Factual and citation issues
None.

#### Feedback
- P4-F1 — Concision, two cuts:
  - (a) "Good at why, poor at when", falsifier paragraph: cut ", which says more about where my own fence stands than about the world". "My own fence" makes that point two sections later.
  - (b) Rival-explanation paragraph: "That reasoning is mine, not a method taken from a source" is audit-log register (§2 spirit) and longer than it needs to be. Use "The reasoning is mine."

### Part 5
Verdict: REVISION_REQUIRED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "We would send back a thermometer that changed the weather" is still the post's sharpest synthesis. |
| Technical accuracy | 4 | The SRE, DORA, Fowler and S2 quotations are unchanged. |
| Intellectual and technical depth | 4 | The delays field and "weak evidence either way" are kept. |
| Quality of evidence | 4 | The caveat "I have no evidence that it reliably does" now sits with the intervention it qualifies. |
| Systems-thinking rigor | 4 | The loops and delays fields are intact. |
| Historical accuracy where applicable | 4 | Aristotle and Plato are used in context. |
| Cross-disciplinary connections | 4 | "a cousin of that question, not a twin". |
| Accessibility | 4 | Plain. |
| Narrative coherence | 4 | The ending now opens on the question, not on a summary. |
| Practical relevance | 4 | The experiment, failure criteria and pre-registration are intact. |
| Quality of critical analysis | 4 | The assessment is scoped and flagged for review. |
| Strength of the final question | 5 | The author's question is verbatim and earned. |
| Prose quality | 4 | Both narration instances are gone, and the voice holds ("Goodwill is the first thing a deadline spends"). One sentence repeats Part 2 and its own next line. |

#### Factual and citation issues
None.

#### Feedback
- P5-F1 — "What is an engineering team for, exactly?", first paragraph: cut "It names the right difficulty: the thing we care about is hard to measure, and the things that are easy to measure are not it." It restates the Fowler quotation and Part 2's "easy to count" line. The dashboard sentence that follows makes the point better.

### Series
Verdict: REVISION_REQUIRED

#### Feedback
- S-F1 — Apply P1-F1, P2-F1, P3-F1, P4-F1 and P5-F1, and change nothing else: no new jokes, labels, transitions or rewording elsewhere. The prose-editor's next pass should be limited to checking these edits, because the last pass reintroduced a fixed duplication. After these edits I expect to approve. The remaining cross-part repetition is accepted because each part must stand alone: the Cunningham interest sentence (Parts 1 and 3), the Fowler and DORA quotations (Parts 2 and 5), and BP Lima (Parts 3 and 5).

### Keep
- Everything in the round 1–5 Keep sections.
- Part 3's medicine line ("The medicine produces the symptoms it was prescribed for"), the pager line, and the "a project that actually uses the new process" callback.
- Part 4's "Its weakest advocate is a confident one."
- Part 5's "A dip that was predicted is a result; a dip that wasn't is a reason to panic."

## Round 7
Verdict: APPROVED
Thesis preserved: yes

Reviewer's verification note (process, not an item). I checked every round-6 item against revision-notes.md ("Round 6 response"), Polish 11 and `draft.md`. All of them are resolved in the text:
- P1-F1: the Fowler sentence states "experience" once and has no colon reveal.
- P2-F1 (a) and (b): both clauses are cut, and "Managers, after all, rarely manage the average team" now carries the point alone.
- P3-F1 (a)–(e): one scoreboard sentence; the symptomatic-fix paragraph is reduced to its label; the quadrant clause and its Part 3 reference are gone, and no Part 3 link to that URL remains; the "endorsed" point is made once, in a sentence that still says who is urged; the last paragraph ends on the callback.
- P4-F1 (a) and (b): both done.
- P5-F1: done.

Polish 11 made no changes, so the round-6 revision is the only change since round 6. The revision added no claim, figure, quotation or URL. Every reference entry still matches an inline link in its part. The thesis is unchanged. The author's question closes Part 5 verbatim, as the brief requires.

Search results: no em-dashes in prose (the box-drawing characters in the Part 3 schematic are not dashes), and no blacklisted stock phrases. The only "this series" occurrences are in Part 4's description and in "the best-documented mechanism in this series". Both make a claim about evidence or scope, they do not narrate the text, and both were accepted in earlier rounds. No joke strengthens, blurs or invents a fact. Every title is cashed out by its part (accepted in round 4, S-F3, and unchanged since).

No polish flags are open. Polish 9–11 raised none, and the earlier flags were settled in rounds 4–6.

Optional cuts for the owner. These are not items and do not block approval:
- Part 3, "When the system fights the fix": the one-sentence label paragraph ("Calling this a symptomatic fix is my label…") names a label that the text never uses anywhere else. Deleting it loses nothing, because no pattern is attributed to Meadows.
- Part 2, "Classrooms are not pipelines": "a narrow boundary, a visible number, an invisible remainder" is a reflexive triplet. It is tolerable.

Still with the owner before publication (not items):
1. Compare the Part 3 schematic signs against S5's figures in a PDF viewer.
2. Resolve Part 5's italic author-position note, either by adding your position or by removing the note.
3. Choose http or https for the `classics.mit.edu` links.
4. Confirm that you are content to sign the first-person source lines ("I haven't had access…", "I have read only the abstract", "the texts I could read").

### Part 1
Verdict: APPROVED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | The title "Mission Statements Don't Run Systems. Bathtubs Do." states the argument, and the part delivers it, from stocks to purpose. |
| Technical accuracy | 4 | The equations and the S1 quotations are unchanged and correct, and the WIP lever is applied correctly. |
| Intellectual and technical depth | 4 | "Two handles on one bathtub" and the habit-as-stock reading are intact. |
| Quality of evidence | 4 | Sterman's results are scoped to "one instructor's classes", and Conway is scoped to experience. |
| Systems-thinking rigor | 4 | Habit is read as a stock with routine as its designed inflow, and the text labels this: "The vocabulary is mine". |
| Historical accuracy where applicable | 4 | The Warden, citizen-male and guardians caveats are intact. |
| Cross-disciplinary connections | 4 | "need not share a mechanism; the parallel is an analogy". |
| Accessibility | 4 | "A bath, of all things, beats them" lands on first reading. |
| Narrative coherence | 4 | It is tight, and with the regression fixed no point is made twice. |
| Practical relevance | 4 | "before you ask who is slow, ask which flow is larger". |
| Quality of critical analysis | 4 | "Each witness needs a caveat" is concise and specific. |
| Strength of the final question | 4 | It is the required question, and the purpose section earns it. |
| Prose quality | 4 | No blacklisted pattern remains. The Fowler sentence now ends on the joke ("where most software advice lives") with no colon reveal. |

#### Factual and citation issues
None.

#### Feedback
None.

### Part 2
Verdict: APPROVED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | The argument cashes out the title "Everything Outside the Metric Is Free". |
| Technical accuracy | 4 | The DORA, Fowler and Sterman wording is unchanged and correct. |
| Intellectual and technical depth | 4 | The distinction between the cross-team correlation and pushing one team on one number is intact. |
| Quality of evidence | 4 | The Chicago figures and the single abstract-level caveat are kept. |
| Systems-thinking rigor | 4 | Parameter, rule and goal stay distinct. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "no pipeline has ever disagreed with its target" marks where the analogy breaks. |
| Accessibility | 4 | The tickets-closed example is concrete. |
| Narrative coherence | 4 | Each caveat now appears once. |
| Practical relevance | 4 | The reversible rule change and the "write down what falls outside it" habit are kept. |
| Quality of critical analysis | 4 | "It can still be gamed" and "That is not a law" are kept. |
| Strength of the final question | 4 | It is specific to the boundary mechanism. |
| Prose quality | 4 | No blacklisted pattern remains, and the voice holds ("arithmetic never has to sign anything"). |

#### Factual and citation issues
None.

#### Feedback
None.

### Part 3
Verdict: APPROVED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | The opening quotation and the title state the thesis directly. |
| Technical accuracy | 4 | The HPA defaults and quotation are unchanged and verbatim, and the DuPont 7% is attributed to the comparison plants (C13). |
| Intellectual and technical depth | 5 | The overshoot walk-through is followed by the documented dampers that answer it. |
| Quality of evidence | 4 | Case, model and practitioner figures are kept apart. The gloss examples are labelled as mine, not the authors'. |
| Systems-thinking rigor | 4 | Loops, timing and the self-confirming error are stated correctly, now without doubled points. |
| Historical accuracy where applicable | n/a | No historical claims. |
| Cross-disciplinary connections | 4 | "a team is not" and the exercise extension are both labelled. |
| Accessibility | 4 | The six-hour example and the bank line land on first reading. |
| Narrative coherence | 4 | The made-up team leads into the closing section without repeating it, and the ending is the callback plus the question, not a recap. |
| Practical relevance | 4 | The invented team is recognizable and labelled. |
| Quality of critical analysis | 4 | "an empirical question no diagram can settle". |
| Strength of the final question | 4 | It is the right question for a self-confirming structure. |
| Prose quality | 4 | No blacklisted pattern remains, and it is still the best-voiced part. The one optional cut is in the note above. |

#### Factual and citation issues
None.

#### Feedback
None.

### Part 4
Verdict: APPROVED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 5 | Using the evidence boundary as one of its own examples is still the best idea in the series. |
| Technical accuracy | 4 | The S6, S3 and S2 quotations are unchanged. |
| Intellectual and technical depth | 4 | The rival-explanation paragraph names the data that would separate the explanations. |
| Quality of evidence | 4 | The DuPont selection caveat and the case-study caveat are kept. |
| Systems-thinking rigor | 4 | Explanation versus prediction and the falsifiers hold. |
| Historical accuracy where applicable | n/a | The only historical material is Aristotle on habit, used in context. |
| Cross-disciplinary connections | 4 | "make delay vivid and then stop". |
| Accessibility | 4 | Clear. |
| Narrative coherence | 4 | Each point is made once. The falsifier paragraph now ends cleanly. |
| Practical relevance | 4 | The separating data are checkable. |
| Quality of critical analysis | 4 | The power critique engages the strongest version of Meadows. |
| Strength of the final question | 4 | It is specific to model boundaries. |
| Prose quality | 4 | "The reasoning is mine." replaces the audit-log sentence. The voice holds ("like a lecture on humility delivered with great certainty"). |

#### Factual and citation issues
None.

#### Feedback
None.

### Part 5
Verdict: APPROVED
Open factual/citation issues: 0

| Criterion | Score | Justification |
|---|---|---|
| Originality | 4 | "We would send back a thermometer that changed the weather" is the post's sharpest synthesis. |
| Technical accuracy | 4 | The SRE, DORA, Fowler and S2 quotations are unchanged. |
| Intellectual and technical depth | 4 | The delays field and "weak evidence either way" are kept. |
| Quality of evidence | 4 | The caveat "I have no evidence that it reliably does" sits with the intervention it qualifies. |
| Systems-thinking rigor | 4 | The loops and delays fields are intact. |
| Historical accuracy where applicable | 4 | Aristotle and Plato are used in context, and the guardians caveat is kept. |
| Cross-disciplinary connections | 4 | "a cousin of that question, not a twin". |
| Accessibility | 4 | Plain. |
| Narrative coherence | 4 | The Fowler restatement is gone, so the dashboard line follows the quotation directly. |
| Practical relevance | 4 | The experiment, the failure criteria and the pre-registration are intact. |
| Quality of critical analysis | 4 | The assessment is scoped and flagged for the author's review. |
| Strength of the final question | 5 | The author's question is verbatim and earned. |
| Prose quality | 4 | No blacklisted pattern remains ("Goodwill is the first thing a deadline spends"). The bold specification fields were accepted in round 4. |

#### Factual and citation issues
None.

#### Feedback
None.

### Series
Verdict: APPROVED

#### Feedback
None. Every round-6 item is applied, and nothing else changed. The closing questions still build in sequence: purpose, then boundary, then evidence, then model limits, then who decides, then the author's question. The cross-part repetition accepted in round 6 remains justified because each part must stand alone.

### Keep
- Everything in the round 1–6 Keep sections.
- The owner's checklist above. It must be cleared before publication.
