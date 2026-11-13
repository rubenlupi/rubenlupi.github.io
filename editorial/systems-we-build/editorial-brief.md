---
slug: systems-we-build
status: BRIEF_READY
kind: break-and-change
book_title: "Thinking in Systems"
book_author: "Donella H. Meadows"
book_year: 2008
category: "Systems, Execution & Organizational Design"
book_access: excerpts
target_words: 1000-1500
working_title: "The Systems We Build, The Systems We Live In"
thesis: "Systems built by intelligent people (software organizations, schools, training regimes) drift toward outcomes nobody chose when fast, visible feedback rewards activity while the costs pile up in slow, invisible stocks; better components cannot fix that, but changing what the system measures, how soon consequences become visible, and what the system is for sometimes can."
---

## Thesis

**Refined series thesis (replaces the working thesis):** Systems built by intelligent people (software organizations, schools, training regimes) drift toward outcomes nobody chose when fast, visible feedback rewards activity while the costs pile up in slow, invisible stocks. Better components cannot fix that. Changing what the system measures, how soon consequences become visible, and what the system is for sometimes can.

**Why the working thesis was replaced.** "We spend our careers designing systems, yet rarely stop to question the systems that shape how we think, learn, work, and live" describes where attention goes, not how anything works. It can't be falsified, and it invites the "everything is connected" essay the assignment forbids. The refined thesis can be argued and tested in three places:

1. **Mechanism:** fast, legible flows versus slow, illegible stocks (capability, understanding, design quality, trust). The research documents this mechanism best: Repenning & Sterman's capability trap (S5), the misperception of stocks and flows (S1, S6), and the distortions of test-based accountability (S15, S16).
2. **Intervention claim:** improving components fails, and changing structure (measurement, delays, goals) sometimes works. "Sometimes" is deliberate. Meadows calls her own leverage hierarchy "tentative" (S2), and Sterman insists that models cannot be validated in the sense of "establishing truthfulness" (S6).
3. **Falsifiers:** the thesis is weakened if an organization escapes a capability trap through component upgrades alone, or if changing measurement or goals reliably produces either no change or only new gaming. Part 4 must take these seriously.

Education is the second case study, not decoration. Each institution in the series (the Spartan *agoge*, Athenian schooling, modern test-based accountability, an engineering organization) is a system whose structure follows from its declared or undeclared goal (S17, S20, S16). That is the bridge between "systems we build" and "systems we live in".

**Scope of the engagement with Meadows (owner decision, 2026-11-13).** The full text of *Thinking in Systems* is not legally accessible to the team. The series therefore engages with **Meadows' ideas as documented in legally accessible sources**: the draft excerpt published by the Donella Meadows Project (S1, S4), her essays "Leverage Points" (S2) and "Dancing With Systems" (S3), and independent system-dynamics scholarship (S5, S6). It is not a reading or review of the full book, and every post says so visibly.

## Break

The familiar assumption that breaks: *if every part gets better, the whole gets better*. Its corollary: *if results are bad, someone isn't working hard enough*.

The disruption comes in three layers, one per mechanism:

- **Stocks and flows.** In the draft excerpt (S1), Meadows defines a stock as "a store, a quantity of material or information that has built up over time" and says stocks "change only slowly, never suddenly, even if the rates flowing into or out of them change suddenly. Therefore stocks act as delays in systems". In discrete time, `stock(t+Δt) = stock(t) + (inflow − outflow)·Δt`, which is the change over one interval Δt. In continuous time, `d(stock)/dt = inflow(t) − outflow(t)`. The surprise is empirical, not mathematical. Sterman reports that only 36% of MIT graduate students correctly sketched a bathtub's level from its flows, and that only 42% and 30% answered the two stock questions in a department-store task correctly (S6). Highly trained people misread accumulation.
- **Feedback with delay.** Pressure produces output now. Neglecting capability costs output *later*. Repenning & Sterman's field studies show that this timing asymmetry teaches managers the wrong lesson ("better-before-worse"). They also describe a "self-confirming attribution error", where pressure appears to work because the shortcuts it causes are invisible (S5).
- **Purpose.** Institutions take the shape of their goal. Aristotle wants the citizen "molded to suit the form of government under which he lives" (S17). Xenophon contrasts Sparta's state-appointed "Warden" with other Greeks, who hired slave tutors and sent boys to teachers of letters, music and wrestling (S20). Conway's 1968 thesis says designs are "copies of the communication structures" of the organizations that produce them (S7). Structure follows from purpose and communication. Optimizing structure without questioning purpose can therefore perfect the wrong thing.

## Challenge

This section covers what the original framing (and Meadows) overlooks or oversimplifies. Develop it mainly in Part 4 and seed it in every post.

1. **Models are not the world.** Sterman, a systems scientist taught by Meadows, rejects the idea that models can be validated as true. He warns that results are usually more sensitive to boundary and aggregation assumptions than to parameters (S6). Causal-loop diagrams in a blog post are interpretive models, not findings.
2. **The leverage hierarchy is a heuristic.** Meadows: "It is tentative and its order is slithery", and "It's not a recipe for finding leverage points" (S2). Do not present "paradigm > rules > parameters" as a validated predictive law.
3. **Qualitative systems thinking has a known failure mode.** Sterman argues that causal maps alone are insufficient, because people cannot mentally simulate even simple dynamic systems (S6). The series' own diagrams therefore risk the overconfidence the series criticizes. Use that tension honestly.
4. **"Blame the system" can erase agency and power.** Repenning & Sterman criticize the fundamental attribution error, which blames people instead of structure (S5). The mirror error blames structure for everything. It removes individual responsibility and hides who designed the structure and who benefits from it. Aristotle's account of virtue as habit (S18) puts real weight on individual practice. Culture, politics and power decide who sets the goal, and feedback diagrams rarely show that.
5. **Evidence quality varies.** Repenning & Sterman's theory "initially emerged from the study of two improvement initiatives in a major automaker" and is supported by "over a dozen in-depth case studies" plus simulation models (S5). That is rich evidence, but it comes from case studies and models, not controlled trials. The DuPont and BP figures are outcomes reported by practitioners, not independent evaluations.
6. **Cross-domain analogies break.** A pod autoscaler is a literal control loop with a defined period, tolerance and stabilization window (S14). A school's assessment regime is not a controller: teachers and students adapt, game and resist (S15). Say where the analogy stops.
7. **History is not a design brief.** Xenophon admired Sparta, and his account idealizes it. The Greek sources describe elite citizen males. Do not turn "Athens vs Sparta" into a morality tale about two systems.
8. **The series' own evidence boundary.** The series sees Meadows only through an excerpt and two essays. It must not present a missing chapter's content as Meadows' view. Saying so is part of the series' honesty about models and boundaries, and Part 4 may use it as an example.

## Experience

Source: hypothetical

**No author experiences were supplied** (`input.md`: "None supplied."). The writer must not invent first-person anecdotes or attribute opinions to the author.

The EXPERIENCE material therefore comes in two kinds, kept visibly apart:

1. **Documented cases (evidence, not the author's experience):** Repenning & Sterman's field quotes and cases (S5). These are the electronics-plant supervisor ("Supervisors never had time to make improvements…"), the product-development engineers ("The new process is a good one. Someday I'd like to work on a project that actually uses it."), and the DuPont and BP Lima maintenance programmes with their reported figures. In education, the counterparts are teacher cheating in Chicago (S15) and triage driven by proficiency counts (S16).
2. **One clearly labelled hypothetical** for Part 3's worked example. Introduce it with a phrase like "Consider a hypothetical platform team…". Suggested scenario: a team that owns a CI/CD platform faces a growing backlog of feature requests. Management raises delivery targets (Work Harder, B1). The team defers flaky-test fixes, runbook updates and dependency upgrades (Shortcuts, B3). Throughput rises for a quarter while the "capability" stock (test reliability, documentation, how current the dependencies are) drains invisibly. Months later, incident load and rework rise and consume the time for improvement (Reinvestment R1 running as a vicious cycle). Map each step to the corresponding loop in S5. Use the SRE description of toil, "toil tends to expand if left unchecked" (S13), as the documented reason this is plausible in operations work. Label every number in the hypothetical as illustrative.

An author experience is optional and not required. If the author later supplies one that can be anonymized, it can replace or complement the hypothetical, but only via a re-issued brief. Per the owner's rules, it must name no employer, host or internal project.

## Change

**Experiment for an engineering organization** (Part 2 introduces it; Part 5 specifies it fully). Title: *Protected capability time with a pre-registered "worse-before-better" window.*

- **Recurring problem:** chronic firefighting. Incidents and rework crowd out the work that would prevent them (the capability trap, S5).
- **System's stated goal:** reliable delivery of customer value.
- **Actual incentives:** visible throughput and heroic recovery get rewarded ("Nobody ever gets credit for fixing problems that never happened", an auto-company engineer quoted in S5). Preventive work stays invisible.
- **Feedback loops:** B1 Work Harder, B2 Work Smarter, B3 Shortcuts and R1 Reinvestment (S5). A second reinforcing loop runs through incentives that promote "heroes" (S5).
- **Important delays:** improvement effort leads capability change by weeks to months, and by longer for complex processes. S5 reports months for simple processes and years for product development.
- **Intervention (hypothesis):** for two quarters, a set of volunteer teams reserves a fixed, protected share of capacity for capability work: test reliability, toil automation, runbooks, upgrade debt. The planning rules protect it, not goodwill. That makes it a change to the *rules* of the system, not a parameter tweak. The SRE practice of capping toil at 50% of time (S13) is one documented precedent for a protective rule. The share is a parameter the organization must choose and justify; the brief claims no optimum.
- **Pre-registration:** before starting, write down the expected short-term dip (throughput may fall) and the date on which it will be judged. The DuPont and BP accounts describe a dip that was planned for, including BP Lima's maintenance costs rising 30% in the first six months (S5). Pre-registration stops leadership from abandoning the experiment at the dip.
- **Observable indicators:** DORA's five delivery metrics, as DORA defines them (S11): change lead time, deployment frequency, failed deployment recovery time, change fail rate, deployment rework rate. Add the share of toil (S13), the share of unplanned work, and a qualitative check at team level that the work did *not* become performative. Compare with non-participating teams, and say that the comparison is not randomized.
- **Failure criteria:** any one of these counts as failure. At the pre-registered date, rework rate and recovery time are unchanged or worse **and** the share of toil has not fallen. Or the protected time was routinely raided, which is a failure of the rule and is recorded as such. Or the metrics improved while the qualitative review shows gaming (DORA warns that targets increase "the likelihood that teams will try to game the metrics", S11).
- **Unintended consequences to watch:** capability work becomes a reporting ritual. Teams outside the experiment absorb displaced load (a boundary effect). Metrics become targets. "Worse-before-better" becomes an excuse for interventions that simply don't work.

## Question

The series' unresolved question: Part 5 ends with the author's own question, which must be kept verbatim: "What if the most important skill in engineering isn't learning how to build better systems, but recognizing when we're solving the wrong problem?"

The underlying question the series should leave genuinely open is this: **who gets to decide what a system is for, and how would we know, from inside it, that its declared goal and its actual goal have diverged?** Aristotle already records that "mankind are by no means agreed about the things to be taught" (S17). Sterman notes that "we measure what we care about, and those measurements alter what we believe is important" (S6). Measurement both reveals purpose and rewrites it. No framework in this series resolves that.

## Series Architecture

Five independent posts. Each has its own introduction, conclusion, inline citations, References & Further Reading, prose links to the other parts where useful, and series metadata with a part number. All five share one archive slot (owner decision in `input.md`), and each maps to one Break & Change stage. **Each post must explain at least one mechanism beyond its definition.** Across the series, four mechanisms are explained in depth:

1. Stocks and flows (Part 1).
2. Boundaries and local optimization, with the distinction between parameters, rules and goals (Part 2).
3. Reinforcing and balancing feedback with delays, including the capability trap and oscillation (Part 3).
4. Model boundaries and the limits of causal inference (Part 4).

**Mandatory in every part: the sources note.** Each post must carry, near the start or in a short "About the sources" note, one sentence equivalent to: *"This series engages with Donella Meadows' ideas as they appear in legally accessible sources (a draft excerpt of* Thinking in Systems *published by the Donella Meadows Project, her essays, and independent systems research), not as a review of the full book."* The writer may vary the wording but not the content.

### Part 1 — We Don't Just Live in Systems. We Create Them. — BREAK

- **Sub-thesis:** an institution's structure follows from its purpose, and its behaviour follows from its stocks. You therefore cannot read a system from its parts or its mission statement, only from what accumulates in it and what it rewards.
- **Mechanism in depth:** stocks and flows. Cover:
  - The discrete and continuous forms, and dynamic equilibrium.
  - "A stock can be increased by decreasing its outflow rate as well as by increasing its inflow rate."
  - Stocks as delays and as buffers that decouple flows (S1).
  - Sterman's bathtub findings, as evidence that experts misread accumulation (S6).
  - Software examples (interpretation): work in progress as a stock between an arrival flow and a completion flow, and technical debt as a stock with deliberate and inadvertent inflows (S9, S10). State that "debt" is a metaphor with no single unit of measure.
- **History and education:** cover three primary sources.
  - Xenophon on Spartan boyhood education compared with that of other Greeks (S20).
  - Aristotle on education fitted to the constitution and made public (S17).
  - Plato on education as "turning" rather than insertion, and "knowledge which is acquired under compulsion obtains no hold on the mind" (S19).

  Draw the lesson as interpretation: different goals produce different structures. Name Xenophon's bias and the narrow population the sources describe (citizen males). Say no more about who had access to schooling than the primary texts support (see Research Gaps).
- **Software:** Conway's Law as a structural mirror of communication (S7, S8).
- **Ends with:** what happens when we optimize a system without questioning its purpose?
- **Claims:** C1, C2, C3, C4, C15, C17, C18, C25, C27, C28, C34, C35, C41.
- **Target:** 1,000–1,500 words.

### Part 2 — When Improving the Parts Makes the Whole Worse — CHANGE

- **Sub-thesis:** where you draw the boundary decides what counts as success. Local metrics optimized inside a narrow boundary predictably degrade the outcome outside it. The useful intervention is usually a change of rule or goal, not a better number.
- **Mechanism in depth:** boundaries and local optimization. Cover:
  - Meadows' "Don't maximize parts of systems or subsystems while ignoring the whole" (S3).
  - Sterman's "invisible fences", and his point that results depend more on boundary assumptions than on parameters (S6).
  - Leverage points, used narrowly: only the distinction between parameters, rules, goals and paradigms, with Meadows' own caveats (S2).

  Do **not** re-list all twelve leverage points, and do not reuse the LinkedIn case (see Duplication Check).
- **Evidence:**
  - DORA's five metrics, its warnings about misuse, and "speed and stability are not tradeoffs" (S11).
  - Fowler on why lines of code don't measure output (S12).
  - Education: the estimates of teacher cheating in Chicago, where cheating responds to "relatively minor changes in incentives" (S15), and accountability by proficiency counts, which helped students near the cutoff but not the least advantaged (S16).
- **Practical intervention:** introduce the protected-capability experiment (see Change), or a smaller variant: replace an individual activity target with a team-level outcome measure plus an explicit review for gaming.
- **Claims:** C7, C9, C19, C20, C23, C24, C29, C32, C39.
- **Target:** 1,000–1,500 words.

### Part 3 — Why Intelligent People Keep Making the Same Mistakes — EXPERIENCE

- **Sub-thesis:** repeated mistakes are often the rational output of a feedback structure in which costs arrive later than rewards. The structure then teaches its participants the wrong lesson.
- **Mechanisms in depth (the most technical post):**
  - **The capability-trap loops.** Balancing loops B1 Work Harder, B2 Work Smarter and B3 Shortcuts; reinforcing loop R1 Reinvestment. Give the polarity of each link as in S5's figures. Contrast better-before-worse with worse-before-better (S5).
  - **Superstitious learning.** Work through S5's own numeric example step by step. The gap is six hours per person per week. Pressure yields two hours of real extra effort and shortcuts yield four. Managers see six and overestimate the effect of their policy "by as much as a factor of three". State that this is the authors' illustrative example.
  - **Delay-induced oscillation in a literal control loop.** Use the Kubernetes HPA formula `desiredReplicas = ceil[currentReplicas × (currentMetricValue / desiredMetricValue)]`, its default 15-second loop, its 0.1 tolerance, the "flapping" its documentation describes, and the 300-second scale-down stabilization window (S14). Then explain the mechanism, as interpretation: when new pods take time to become ready and the metric lags, the controller keeps acting on stale information and overshoots. The stabilization window is a deliberate design response to that. Meadows: "Delays in feedback loops are critical determinants of system behavior" (S2).
  - **Policy resistance**, as Sterman defines it (S6).
  - **Technical debt as delayed cost** (S10, S9). S5 explicitly uses the example of a software engineer skipping documentation.
  - **Educational feedback:** S15 and S16 as balancing loops that close the *measured* gap.
  - **Trap vocabulary:** see the Instructions for the Writer. Use "policy resistance" (S6) and "capability trap" (S5) only. Describe the symptomatic-fix structure as interpretation (C41), not as a named Meadows trap.
- **Experience:** the documented cases (S5) plus the labelled hypothetical (see Experience).
- **Allowed diagram:** a causal-loop diagram in text or ASCII, marked as the writer's adaptation of S5, not as a new finding.
- **Claims:** C5, C8, C10, C11, C12, C13, C14, C17, C21, C22, C31, C33, C36, C41.
- **Target:** 1,200–1,800 words. Running past 1,500 is justified here and permitted by the assignment.

### Part 4 — The Limits of Seeing Everything as a System — CHALLENGE

- **Sub-thesis:** systems thinking is itself a model with a boundary. It is strongest at explaining recurring dynamics and weakest at prediction, at attributing causes, and at anything that involves power and purpose.
- **Content:**
  - Sterman: "all models are wrong", validation is impossible, and boundary assumptions hide in the blank spaces (S6).
  - Meadows' own humility: "everything you know, and everything everyone knows, is only a model" and "Systems can't be controlled, but they can be designed and redesigned" (S3); her list is "tentative… slithery" (S2).
  - The evidence base of the capability trap: case studies plus models, not trials (S5).
  - The mirror image of the fundamental attribution error: erasing agency. Use Aristotle on habit (S18).
  - The manager quoted in S5 who blamed "Western" engineers. It shows how attribution errors turn into stereotypes, so systems framing can be a moral corrective but also a political act.
  - Where analogies break down: the HPA compared with a classroom (S14 vs S15).
  - Explanatory models versus testable predictions.
  - The series' own evidence boundary (Challenge item 8).
- **Rule:** do not invent critics. Attribute only critiques present in inspected sources. Abson et al. on leverage points (S25) is listed but uninspected, so it must not be cited.
- **Claims:** C6, C7, C9, C12, C26, C37, C38, C39.
- **Target:** 1,000–1,500 words.

### Part 5 — What Are We Actually Trying to Build? — QUESTION

- **Sub-thesis:** the most consequential design decision is the goal, and goals are contested value choices that measurement can quietly rewrite.
- **Content:**
  - A synthesis of Parts 1–4.
  - What education is for: Aristotle's admission of disagreement (S17) and Plato on compulsion (S19).
  - What engineering should produce: DORA's caution against single metrics (S11) and Fowler's "delivered business value" (S12).
  - Efficiency versus autonomy, and Meadows' "Pay attention to what is important, not just what is quantifiable" (S3).
  - An independent critical assessment of Meadows' ideas *as documented in the accessible sources*. Label it as editorial interpretation that needs author review, and say that it does not assess the full book.
  - The full experiment specification (see Change).
  - The author's question, verbatim, as the ending.
- **Claims:** C9, C19, C20, C25, C27, C29, C36, C40.
- **Target:** 1,000–1,500 words.

## Claims and Evidence

| ID | Claim | Type | Sources | Status |
|---|---|---|---|---|
| C1 | Meadows defines a stock as "a store, a quantity of material or information that has built up over time" and says stocks are "accumulations, or integrals, of flows" (draft excerpt of the book). | evidence | S1, S4 | verified |
| C2 | Bathtub principles: stock rises while inflows exceed outflows, falls in the reverse case, holds in "dynamic equilibrium" when equal; "A stock can be increased by decreasing its outflow rate as well as by increasing its inflow rate." | evidence | S1 | verified |
| C3 | "Stocks change only slowly, never suddenly… Therefore stocks act as delays in systems"; "The presence of stocks allows flows to be independent, decoupled, and dependable." | evidence | S1 | verified |
| C4 | Only 36% of MIT graduate students drew the bathtub task correctly; in the department-store task 42% and 30% answered the two stock questions correctly (94% read the flow graph correctly). | evidence | S6 | verified |
| C5 | Sterman defines policy resistance as "the tendency for interventions to be defeated by the response of the system to the intervention itself." | evidence | S6 | verified |
| C6 | Sterman: all models are wrong; system dynamicists reject validation as "establishing truthfulness"; results are usually more sensitive to boundary, aggregation and decision-rule assumptions than to parameters. | evidence | S6 | verified |
| C7 | Meadows calls her leverage-point list "a work in progress", "not a recipe", and says "It is tentative and its order is slithery." | evidence | S2 | verified |
| C8 | Meadows: "Delays in feedback loops are critical determinants of system behavior"; "Paradigms are the sources of systems." | evidence | S2 | verified |
| C9 | Meadows (Dancing with Systems): "Don't maximize parts of systems or subsystems while ignoring the whole"; "Pay attention to what is important, not just what is quantifiable"; "everything you know, and everything everyone knows, is only a model"; "Systems can't be controlled, but they can be designed and redesigned." | evidence | S3 | verified |
| C10 | Repenning and Sterman model capability as a stock with erosion and a delayed inflow, with loops Work Harder (B1), Work Smarter (B2), Reinvestment (R1, reinforcing) and Shortcuts (B3); working harder is "better-before-worse", working smarter "worse-before-better". | evidence | S5 | verified |
| C11 | In their illustrative example (6-hour gap; 2 hours from effort, 4 from cut improvement time) managers overestimate the effect of pressure "by as much as a factor of three"; the authors call this the Self-Confirming Attribution Error. | evidence | S5 | verified |
| C12 | The capability-trap theory initially emerged from two improvement initiatives at a major automaker, supported by over a dozen in-depth case studies across industries and by system dynamics models. | evidence | S5 | verified |
| C13 | Reported outcomes: DuPont plants implementing the programme saw pump MTBF improve about 12% per doubling of operating experience vs 5% in 23 comparable plants, direct maintenance costs down about 20% vs up about 7%; at BP Lima maintenance costs rose 30% in the first six months. Figures as reported by Repenning and Sterman from practitioner sources. | evidence | S5 | verified |
| C14 | "Nobody ever gets credit for fixing problems that never happened" is a quote from an auto-company engineer; the authors describe cultures that reward heroic firefighting over prevention. | evidence | S5 | verified |
| C15 | Conway (Datamation, April 1968): organizations that design systems are constrained to produce designs that copy their communication structures. | evidence | S7, S8 | verified |
| C16 | Fowler describes the Inverse Conway Maneuver and cautions it is not a quick fix for rigid legacy systems; his support is experiential, not empirical. | evidence | S8 | verified |
| C17 | Cunningham (OOPSLA 1992): "Shipping first time code is like going into debt" and "Every minute spent on not-quite-right code counts as interest on that debt." | evidence | S10 | verified |
| C18 | Fowler: "the useful distinction isn't between debt or non-debt, but between prudent and reckless debt", crossed with deliberate vs inadvertent. | evidence | S9 | verified |
| C19 | DORA defines five delivery metrics (change lead time, deployment frequency, failed deployment recovery time, change fail rate, deployment rework rate), warns that targets raise "the likelihood that teams will try to game the metrics", and states "speed and stability are not tradeoffs" (page updated 5 Jan 2026). | evidence | S11 | verified |
| C20 | Fowler (2003): lines of code do not measure output; "any true measure of software development productivity must be based on delivered business value." | evidence | S12 | verified |
| C21 | Google SRE defines toil (manual, repetitive, automatable, tactical, no enduring value, scales linearly), aims to keep it below 50% of each SRE's time, and warns "toil tends to expand if left unchecked." | evidence | S13 | verified |
| C22 | Kubernetes HPA runs as an intermittent control loop (default 15 s), computes desiredReplicas = ceil[currentReplicas × currentMetricValue / desiredMetricValue], skips changes within a 0.1 tolerance, documents "flapping", and defaults to a 300 s scale-down stabilization window. | evidence | S14 | verified |
| C23 | Jacob and Levitt estimate serious teacher or administrator cheating in at least 4–5% of Chicago elementary classrooms annually, responding strongly to relatively minor changes in incentives. | evidence | S15 | verified |
| C24 | Neal and Schanzenbach find proficiency-count accountability in Chicago raised scores for students in the middle of the distribution but not for the least advantaged. | evidence | S16 | verified |
| C25 | Aristotle (Politics VIII): the legislator should attend above all to the education of youth; the citizen should be molded to the form of government; education should be public and the same for all; people "are by no means agreed about the things to be taught." | evidence | S17 | verified |
| C26 | Aristotle (Nicomachean Ethics II.1): "moral virtue comes about as a result of habit"; "legislators make the citizens good by forming habits in them." | evidence | S18 | verified |
| C27 | Plato (Republic VII): education is not putting knowledge into the soul "like sight into blind eyes"; "knowledge which is acquired under compulsion obtains no hold on the mind." | evidence | S19 | verified |
| C28 | Xenophon describes Spartan boys placed under a state "Warden" instead of slave tutors, barefoot, one garment a year, rationed food with theft tolerated, contrasted with other Greeks sending sons to teachers of letters, music and wrestling. | evidence | S20 | verified |
| C29 | Sterman: "we measure what we care about, and those measurements alter what we believe is important." | evidence | S6 | verified |
| C30 | Repenning and Sterman explicitly extend the capability-trap pattern to personal life, citing learning new software and committing to a new exercise program. | evidence | S5 | verified |
| C31 | Technical debt and team capability can usefully be modelled as stocks whose depletion is delayed and hard to observe. | interpretation | S5, S9, S10 | n/a |
| C32 | Test-based accountability and engineering activity metrics are both cases of optimizing inside a narrow boundary, so the measured gap closes while the purpose drifts. | interpretation | S15, S16, S11, S6 | n/a |
| C33 | Autoscaler overshoot and flapping arise when control acts on lagged metrics faster than capacity changes take effect; stabilization windows trade responsiveness for stability. | interpretation | S14, S2 | n/a |
| C34 | Sparta and Athens organized boyhood education differently because they pursued different civic goals; structure followed purpose. | interpretation | S20, S17 | n/a |
| C35 | Greek educational institutions and software organizations face analogous questions about what to optimize; this is an analogy, not a shared mechanism. | analogy | S17, S11 | n/a |
| C36 | Protecting a fixed share of capacity for capability work will show a short-term dip followed by improved rework and recovery metrics. | hypothesis | S5, S13 | n/a |
| C37 | Physical training adaptation (overload, delayed recovery, overreaching) behaves like a stock with delays; offered only as analogy, no physiological source verified, no physiological claims allowed. | analogy | S5 | n/a |
| C38 | Systems framing can over-correct the fundamental attribution error into erasing individual agency and hiding who set the system's goal. | interpretation | S5, S18 | n/a |
| C39 | Meadows' leverage hierarchy is a heuristic lens, not a validated predictive ranking. | interpretation | S2, S6 | n/a |
| C40 | Series thesis: fast visible feedback plus slow invisible stocks produce unintended outcomes; changing measurement, delays and goals sometimes helps where component improvements do not. | hypothesis | S5, S6, S15, S16 | n/a |
| C41 | The capability trap has the structure of a symptomatic fix (pressure, shortcuts) that relieves the visible gap while eroding the system's own capacity to close it; this is an editorial reading of S5's loops, not a trap named in any inspected Meadows text. | interpretation | S5 | n/a |

## Sources

- S1 — "Bathtubs 101" (excerpt, labelled "CHAPTER TWO THE BASICS (Excerpted from Thinking In Systems, by Dana Meadows)"). Donella H. Meadows; Donella Meadows Project, undated (header "3/28/13 DRAFT Thinking in Systems, © Donella H, Meadows, Dartmouth College"; graphs dated 1992). <https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf>. Inspected: yes. Supports: C1, C2, C3. Notes: all 9 pages read. This is a **pre-publication draft**. The chapter numbering ("Chapter Two") and the wording may differ from the 2008 Chelsea Green edition. Attribute quotes to "a draft excerpt of *Thinking in Systems* published by the Donella Meadows Project", never to a page of the 2008 book. The excerpt contains 1992-era figures (US debt) that must not be presented as current. The site offers it legally (S4), so it is the legitimate publisher-side excerpt the owner's decision allows.
- S2 — Leverage Points: Places to Intervene in a System. Donella Meadows; Donella Meadows Project, page undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Inspected: yes. Supports: C7, C8, C33, C39. Notes: the list of 12 was checked; it runs from 12 (least effective) to 1 (most effective). Caveats quoted verbatim. The page gives no original publication year, so do not assert one. This is Meadows' essay, not the book.
- S3 — Dancing With Systems. Donella Meadows; Donella Meadows Project, page undated. <https://donellameadows.org/archives/dancing-with-systems/>. Inspected: yes. Supports: C9. Notes: 14 guidelines checked. No original date on the page. This is Meadows' essay, not the book.
- S4 — Systems Thinking Resources. Donella Meadows Project, undated. <https://donellameadows.org/systems-thinking-resources/>. Inspected: yes. Supports: C1. Notes: re-opened 2026-11-13. The official legacy site offers S1 as "this excerpt" from *Thinking in Systems*, and it is the only book excerpt the page links. The page offers no excerpt on system traps or archetypes.
- S5 — Nobody Ever Gets Credit for Fixing Problems that Never Happened: Creating and Sustaining Process Improvement. Nelson P. Repenning, John D. Sterman; California Management Review 43(4): 64–88, 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Inspected: yes. Supports: C10, C11, C12, C13, C14, C30, C31, C36, C37, C38, C40, C41. Notes: read in full (25 pp). Figures 1–6 checked for loop names and polarities. The DuPont and BP figures come from practitioner conference papers cited by the authors, so treat them as reported case outcomes. The factor of three comes from a hypothetical worked example. C37 cites S5 only for the authors' passing mention of exercise (C30), not for any physiology.
- S6 — All models are wrong: reflections on becoming a systems scientist. John D. Sterman; System Dynamics Review 18(4): 501–531, 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Inspected: yes. Supports: C4, C5, C6, C29, C32, C39, C40. Notes: read in full; opened as `All_Models_Are_Wrong_(SDR).pdf`. The URL is listed percent-encoded so that link parsers don't truncate it at the parenthesis, and the writer must use this exact form. The bathtub percentages come from the author's classroom studies (MIT students, n=172 for the store task), so they are not a population estimate. Dana Meadows taught Sterman (acknowledged in the text), so he is a sympathetic insider critic.
- S7 — How Do Committees Invent? Melvin E. Conway; Datamation, April 1968 (author's site). <https://www.melconway.com/Home/Committees_Paper.html>. Inspected: yes. Supports: C15. Notes: the thesis clause "are constrained to produce designs which are copies of the communication structures of these organizations" was checked.
- S8 — Conway's Law. Martin Fowler, 20 Oct 2022 (rev. 24 Oct 2022). <https://martinfowler.com/bliki/ConwaysLaw.html>. Inspected: yes. Supports: C15, C16. Notes: the support is experiential and anecdotal. The page cites no empirical study.
- S9 — Technical Debt Quadrant. Martin Fowler, 14 Oct 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. Inspected: yes. Supports: C18, C31. Notes: the quadrant labels are in an image. Quote only the verified text sentences.
- S10 — The WyCash Portfolio Management System (OOPSLA '92 Experience Report). Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Inspected: yes. Supports: C17, C31. Notes: two sentences verified. Do not quote the intervening text without re-checking it.
- S11 — DORA's software delivery metrics: the four keys (guide). DORA, last updated 5 Jan 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. Inspected: yes. Supports: C19, C32, C35. Notes: there are now five metrics, including deployment rework rate. The list of pitfalls was checked. The correlation claim is DORA's own research conclusion.
- S12 — CannotMeasureProductivity. Martin Fowler, 29 Aug 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. Inspected: yes. Supports: C20. Notes: an opinion essay by a recognized practitioner, not empirical research.
- S13 — Eliminating Toil (Site Reliability Engineering, ch. 5). Vivek Rau, ed. Betsy Beyer; Google, 2016 (book). <https://sre.google/sre-book/eliminating-toil/>. Inspected: yes. Supports: C21, C36. Notes: describes a company practice and goal, not a validated optimum.
- S14 — Horizontal Pod Autoscaling. Kubernetes documentation, current (no version date shown). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. Inspected: yes. Supports: C22, C33. Notes: read in two parts because the page is long. Defaults can change between Kubernetes versions, so the writer should say "by default, per the current documentation".
- S15 — Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating. Brian A. Jacob, Steven D. Levitt; NBER Working Paper 9413, Jan 2003 (later QJE 2003). <https://www.nber.org/papers/w9413>. Inspected: yes. Supports: C23, C32, C40. Notes: checked at abstract level. The data are from Chicago, so do not generalize beyond it without qualification.
- S16 — Left Behind By Design: Proficiency Counts and Test-Based Accountability. Derek Neal, Diane Whitmore Schanzenbach; NBER Working Paper 13293, Aug 2007 (later REStat 2010). <https://www.nber.org/papers/w13293>. Inspected: yes. Supports: C24, C32, C40. Notes: checked at abstract level. Chicago 5th grade. The evidence on the most advantaged students is mixed.
- S17 — Politics, Book VIII. Aristotle, trans. Benjamin Jowett (MIT Internet Classics Archive). <https://classics.mit.edu/Aristotle/politics.8.eight.html>. Inspected: yes. Supports: C25, C34, C35. Notes: the page has a typo ("No ne will doubt"), so quote from "the legislator should direct his attention…" onward. Aristotle's "all" means citizens.
- S18 — Nicomachean Ethics, Book II. Aristotle, trans. W. D. Ross (MIT Internet Classics Archive). <https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. Inspected: yes. Supports: C26, C38. Notes: four quotes verified verbatim.
- S19 — The Republic, Book VII. Plato, trans. Benjamin Jowett (MIT Internet Classics Archive). <https://classics.mit.edu/Plato/republic.8.vii.html>. Inspected: yes. Supports: C27. Notes: the speaker is Socrates as written by Plato. The context is the education of the guardians in an ideal city, not a general theory of schooling.
- S20 — Constitution of the Lacedaimonians, ch. 2. Xenophon, trans. E. C. Marchant (Perseus Digital Library, Loeb 1925). <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. Inspected: yes. Supports: C28, C34. Notes: Xenophon was an Athenian admirer of Sparta, so his account idealizes it. Sections 2.1–2.6 checked.
- S21 — Thinking in Systems: A Primer (publisher page). Chelsea Green Publishing. <https://www.chelseagreen.com/product/thinking-in-systems/>. Inspected: no. Notes: returns HTTP 403 to automated access. The catalogue (`docs/BOOK_CATALOG.md`) records the 3 Dec 2008 date as verified earlier. Not used to support any claim. The writer may name the book and publisher but may not link this page as evidence for anything.
- S22 — The SPACE of Developer Productivity. Forsgren, Storey, Maddila, Zimmermann, Houck, Butler; ACM Queue 19(1), 2021. <https://queue.acm.org/detail.cfm?id=3454124>. Inspected: no. Notes: HTTP 403. It would strengthen Part 2, but must not be cited.
- S23 — Prevention, diagnosis and treatment of the overtraining syndrome (ECSS/ACSM joint consensus). Meeusen et al., 2013. <https://pubmed.ncbi.nlm.nih.gov/23247672/>. Inspected: no. Notes: PubMed returned a cookie wall, and the HAL and Loughborough copies were blocked by bot protection or HTTP 403. Access controls were not evaded. It would be needed for any physiology claim.
- S24 — Assessing the Impact of Planned Social Change (Campbell's law). Donald T. Campbell; JMDE reprint of the 1976/1979 paper. <https://jmde.journals.publicknowledgeproject.org/index.php/jmde_1/article/view/297>. Inspected: no. Notes: the connection failed twice in the first pass and again on 2026-11-13 (socket hang-up). Do not quote Campbell's law.
- S25 — Leverage points for sustainability transformation. Abson et al.; Ambio 46(1): 30–39, 2017. <https://link.springer.com/article/10.1007/s13280-016-0800-y>. Inspected: no. Notes: Springer redirected to an authentication flow, and the PMC copy (PMC5226895) served a browser-verification page on 2026-11-13. Neither was evaded. It is a candidate academic critique and extension of leverage points, but must not be cited.
- S26 — Classical Athenian schooling chapter (D. M. Pritchard, as found by search). <https://core.ac.uk/download/15161085.pdf>. Inspected: no. Notes: HTTP 403 in both passes (retried 2026-11-13). It would be needed to say who had access to schooling in Athens.

## Counterarguments

- **"This is just the fundamental attribution error in reverse."** If every failure is "the system", nobody is accountable. Response to develop: Repenning & Sterman's point is that structure *produces* the evidence that misleads managers (S5), not that individuals don't matter. Aristotle on habit formation (S18) shows that individual practice is itself an input to the system. Keep both.
- **"Causal-loop diagrams are unfalsifiable stories."** Partly fair. Sterman himself says qualitative maps are insufficient and that simulation and data are needed (S6). The series must label its diagrams as interpretive and point to where formal models or data exist (S5's simulations, S14's controller).
- **"DORA proves speed and stability go together, so locally optimizing speed is fine."** DORA reports the correlation for most teams, and in the same guide warns against single-metric targets and gaming (S11). A correlation across teams says nothing about what happens when one team is *pushed* on one metric.
- **"Test-based accountability raised scores, so it worked."** S16 finds real gains for some students. The counterargument is about distribution and purpose, not a claim that the gains were zero. S15 shows the incentive also produced fraud in a minority of classrooms.
- **"Ancient Greece is irrelevant to software."** The link is the question of purpose, not a shared mechanism. The writer must say explicitly that it is an analogy (C35).
- **"Meadows was an environmental modeller (*Limits to Growth*). Her framework smuggles in values."** Fair, and Part 4 should say so. Systems thinking is a lens with priorities: Sterman even calls system dynamics "a worldview, a paradigm in the sense of Thomas Kuhn" (S6). That is not a reason to reject it, but it is a reason to name it.
- **"You can't critique a book you haven't read."** Correct, and the series doesn't. It critiques ideas as stated in Meadows' accessible texts and as used by her students and successors. Part 5's assessment must stay within that boundary.

## Contradictions and Open Questions

- **Draft vs published text (handled by framing, not resolved).** S1 is a draft labelled "Chapter Two", and its wording may differ from the 2008 edition. Under the owner's decision this no longer blocks the series. Quotations are attributed to the draft excerpt or to the essays, never to the book's pages.
- **Book vs essays.** Leverage points and the "Dancing with Systems" guidelines may also appear, possibly revised, in the book. The series quotes the essay versions and says so. It must not claim the book uses identical wording.
- **Meadows' hierarchy vs Sterman's emphasis.** Meadows puts paradigms near the top. Sterman says the "highest leverage point" for modellers is changing clients' mental models by involving them in finding the model's flaws (S6). The two views are compatible but not identical. Is a paradigm changed by argument, by participation, or by experience (cf. DuPont's game, S5)?
- **Is "worse-before-better" a finding or an excuse?** S5 documents it in cases, but an organization can invoke it to protect a failing intervention. The experiment's pre-registration exists to separate the two. Whether that works is an open question.
- **Who decides purpose?** Aristotle wants education to fit the constitution (S17), while Plato warns that compulsion doesn't produce learning (S19). They pull in different directions on autonomy versus civic formation, and the series should not resolve that artificially.

## Research Gaps

None of these gaps blocks the series now that the owner has decided on book access. Each is handled by a restriction the writer must follow.

1. **Book text (no longer blocking; owner decision 2026-11-13).** Legally accessible material: one 9-page draft excerpt (S1) and Meadows' essays (S2, S3). Full-text copies hosted by third parties were not used and must not be. Consequences:
   - The book's treatments of system purpose and function, the "systems zoo" examples (thermostat, inventory with delays), the system traps and the closing chapter are **not available**. Do not describe them.
   - The trap names in the assignment (shifting the burden, eroding goals or drift to low performance, success to the successful, escalation, seeking the wrong goal) are known only from general familiarity and secondary summaries, which were not used as sources. They must not be presented as Meadows' wording or as content of the book.
   - "Policy resistance" may be used with Sterman's definition (S6), and "capability trap" with Repenning & Sterman (S5). The symptomatic-fix structure may be described as the editorial interpretation C41, without a Meadows label.
2. **Greek education access and context.** The primary sources (S17–S20) are verified. Scholarship on *who* was schooled (fee-paying Athenian schooling, the agoge's exclusion of non-citizens and helots, girls' education in Sparta) could not be opened (S26 403 twice; Britannica 403). The writer may say only what the primary texts say, plus the caveat that they describe citizen males and that Xenophon idealizes Sparta. Mesopotamian scribal schooling is unverified, so mention it at most as "education long predates Greece", with no specifics, or omit it.
3. **Mass schooling, compulsory education and the history of standardized assessment.** Not researched to a citable standard. Part 2 uses the modern empirical evidence on accountability (S15, S16) instead of a historical narrative. Do not use the "Prussian factory model" story.
4. **Physiology.** No exercise-science source could be opened (S23 blocked). Training and recovery may appear only as a labelled analogy (C37), plus Repenning & Sterman's passing mention (C30). No physiological claims.
5. **Developer-productivity research beyond DORA.** SPACE (S22) was not accessible.
6. **Campbell's law and Goodhart's law.** Not verified (S24). Do not quote either. DORA's warning about gaming (S11) and S15/S16 carry the argument.
7. **Platform engineering and coordination overhead.** No documented case was inspected. Platform engineering appears only as the setting of the labelled hypothetical.
8. **Academic critique of leverage points.** Abson et al. (S25) was not accessible. Part 4's critique rests on Sterman (S6), Meadows' own caveats (S2, S3) and the evidence-quality points about S5.

## Duplication Check

- **Existing posts:** `src/content/posts/` contains one post, `sometimes-the-problem-isnt-the-component.md` (2026-11-12), re-checked 2026-11-13. It quotes Meadows' leverage points (parameters, strength of negative feedback, information flows, rules) and her statements on delays, and it covers the LinkedIn GitOps case. **The overlap risk for Part 2 is real.** Required distinct angle: Part 2 uses leverage points only to distinguish changes to *parameters*, *rules* and *goals* in the design of measurement and incentives (metrics, assessment). It must not repeat the twelve-item list, the delay quote already used there, or the LinkedIn case. Part 3 may quote Meadows on delays (C8) but should lead with the capability-trap and HPA mechanisms. Linking to the existing post as further reading is encouraged.
- **Catalogue:** in `docs/BOOK_CATALOG.md`, *Thinking in Systems* is entry #1 with status V and no published article. Its note already records this series and the owner's decision on access. No duplication.
- **Category: Systems, Execution & Organizational Design.** The series' core is how organizational structure, feedback and incentives produce execution outcomes, which is exactly this category. "Change & Transformation" was considered, because Parts 2 and 5 propose interventions, but rejected: the book's primary contribution is a theory of system structure and behaviour, not a change-management method. "Architecture & Engineering" was rejected because software is one domain among several.
- **Book access, declared honestly:** `excerpts`. That means the S1 draft excerpt only, plus Meadows' own essays S2 and S3, which are not the book. This basis is approved by the owner under EDITORIAL_POLICY §5.

## Instructions for the Writer

**Status: BRIEF_READY.** The owner approved the access exception on 2026-11-13: the series may rely solely on legally accessible material.

**Structure**
- Write five separate posts in `draft.md`, one per Break & Change stage, per "Series extension" in `docs/EDITORIAL_WORKFLOW.md`. Each post needs a `<!-- PART N: <slug> -->` marker, full frontmatter with `series: break-and-change`, `seriesPart` (title "The Systems We Build, The Systems We Live In", slug `systems-we-build`, number, total 5, stage) and `book` (title, author, year, category exactly as in this brief).
- Each post must stand alone and carry its own References & Further Reading, listing only the sources it cites.
- Do not hand-write Previous/Next navigation; the site renders it. Cross-references in the prose are fine.

**Sources note (mandatory in every post)**
- Every post carries the sentence described in Series Architecture, near the start or in a short "About the sources" note. It states that the series engages with Meadows' ideas as documented in legally accessible sources, not as a review of the full book.

**Attribution to Meadows**
- Attribute to Meadows only text verified in C1–C3 (S1), C7–C8 (S2) and C9 (S3).
- Attribute S1 quotes to "a draft excerpt of *Thinking in Systems* published by the Donella Meadows Project". Attribute S2 and S3 quotes to the named essays. Never cite pages of the 2008 book, and never write "in the book, Meadows argues…" about anything outside S1.
- Do not attribute any trap name except "policy resistance" (via Sterman, S6), and do not attribute the "capability trap" (Repenning & Sterman, S5) to Meadows. Describe other trap-like structures only as editorial interpretation (C41) or not at all.
- Quote briefly and with attribution, never more than a sentence or two at a time, and never reproduce substantial passages of S1 (or of any source).

**Evidence rules**
- Use **only** sources marked `Inspected: yes` (S1–S20). Do not cite or link S21–S26.
- Quote **only** text verified in the claims table.
- Label every diagram as your adaptation (e.g. "adapted from Repenning & Sterman, 2001").
- Label every cross-domain link as analogy or interpretation in the text, e.g. "This is an analogy, not a shared mechanism…".
- Show the equations: in Part 1, the discrete and continuous stock equations; in Part 3, the HPA formula and the R&S six-hour example. Explain the mechanism before the metaphor.

**Avoid**
- "everything is connected".
- The "factory model of schooling" myth.
- Quotes of Goodhart's or Campbell's law.
- "Athens educated thinkers, Sparta trained soldiers".
- Any number not in the claims table.
- Invented first-person experience.
- Any claim that leverage points are empirically ranked.
- Any physiological claim.

**Part 5**
- The independent assessment of Meadows must be framed as editorial interpretation flagged for author review (policy §5, chapter 5 rule), scoped to the accessible sources.
- Part 5 ends with the author's question, verbatim.

**Metadata, length and voice**
- Keep `draft: true` and do not set `editorialDate`. The series shares one archive slot, which the pipeline assigns.
- Length: 1,000–1,500 words per post, excluding references. Part 3 may run to about 1,800.
- Voice: a curious software engineer. Concrete before abstract, short paragraphs, no motivational clichés or corporate language.

## Proposed Metadata

Series: "The Systems We Build, The Systems We Live In" (Break & Change; book: *Thinking in Systems*, Donella H. Meadows, 2008; category: Systems, Execution & Organizational Design). The slugs are suggestions and become the marker slugs.

1. **Part 1**
   - title: "We Don't Just Live in Systems. We Create Them."
   - slug: `systems-we-build-1-we-create-them`
   - description: "Stocks, flows and purpose: why a system's behaviour comes from what accumulates in it, from Spartan boyhood to software architecture."
   - topics: ["Systems & Organizations", "History & Classical Thinking", "Learning & Education"]
   - tags: ["Systems Thinking", "Stocks and Flows", "Conway's Law", "Ancient Greece", "Education"]
2. **Part 2**
   - title: "When Improving the Parts Makes the Whole Worse"
   - slug: `systems-we-build-2-improving-the-parts`
   - description: "Boundaries, metrics and incentives: why better local numbers in schools and engineering teams can mean worse outcomes, and what to change instead."
   - topics: ["Systems & Organizations", "Software Engineering", "Learning & Education"]
   - tags: ["Systems Thinking", "DORA", "Metrics", "Leverage Points", "Assessment"]
3. **Part 3**
   - title: "Why Intelligent People Keep Making the Same Mistakes"
   - slug: `systems-we-build-3-same-mistakes`
   - description: "Feedback loops, delays and the capability trap, worked step by step through firefighting, autoscalers and technical debt."
   - topics: ["Systems & Organizations", "Software Engineering"]
   - tags: ["Systems Thinking", "Feedback Loops", "Technical Debt", "SRE", "Capability Trap"]
4. **Part 4**
   - title: "The Limits of Seeing Everything as a System"
   - slug: `systems-we-build-4-limits`
   - description: "All models are wrong: where systems thinking explains, where it can't predict, and when it erases the people inside the system."
   - topics: ["Systems & Organizations", "Mathematics & Reasoning"]
   - tags: ["Systems Thinking", "Models", "Causal Inference", "Critical Thinking"]
5. **Part 5**
   - title: "What Are We Actually Trying to Build?"
   - slug: `systems-we-build-5-what-are-we-building`
   - description: "Purpose, measurement and autonomy in engineering and education, plus a concrete experiment for an engineering organization."
   - topics: ["Systems & Organizations", "Software Engineering", "Learning & Education"]
   - tags: ["Systems Thinking", "Organizational Learning", "Engineering Culture", "Education"]
