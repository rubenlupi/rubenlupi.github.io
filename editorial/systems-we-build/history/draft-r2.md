<!-- PART 1: systems-we-build-1-we-create-them -->
---
title: "We Don't Just Live in Systems. We Create Them."
description: "Stocks, flows and purpose: why a system's behaviour comes from what accumulates in it, from Spartan boyhood to software architecture."
date: 2026-11-13
series: break-and-change
seriesPart:
  title: "The Systems We Build, The Systems We Live In"
  slug: systems-we-build
  number: 1
  total: 5
  stage: "BREAK"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "History & Classical Thinking", "Learning & Education"]
tags: ["Systems Thinking", "Stocks and Flows", "Conway's Law", "Ancient Greece", "Education"]
draft: true
---

Two assumptions sit under most of how we run teams, schools and training plans. The first: if every part gets better, the whole gets better. The second: if results are bad, someone isn't working hard enough.

This series argues that both can fail, and that they fail for a reason you can describe. This first post is about the reason. A system's behaviour comes from what accumulates inside it and from what it rewards, not from how good its parts look or what its mission statement says.

*About the sources. This series engages with Donella Meadows' ideas as they appear in legally accessible sources (a draft excerpt of* Thinking in Systems *published by the Donella Meadows Project, her essays, and independent systems research), not as a review of the full book. The full text was not available to this series, so it does not describe chapters it has not seen.*

## A bathtub is a better model than a to-do list

Start with the simplest object in systems thinking. In a draft excerpt of *Thinking in Systems* [published by the Donella Meadows Project](https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf), Meadows defines a stock as "a store, a quantity of material or information that has built up over time". A stock is whatever has piled up: water in a tub, money in an account, unreviewed pull requests in a queue. The same excerpt describes stocks as "accumulations, or integrals, of flows".

Flows are the rates that fill or drain it. Over one small interval Δt, the arithmetic is:

```
stock(t + Δt) = stock(t) + (inflow − outflow) · Δt
```

In continuous time, the same statement is a derivative:

```
d(stock)/dt = inflow(t) − outflow(t)
```

Nothing here is deep. The consequences are. The stock rises while inflow exceeds outflow, falls in the reverse case, and holds steady, in the excerpt's phrase "dynamic equilibrium", when the two match. The excerpt also makes a point that is easy to forget when a number looks wrong: "A stock can be increased by decreasing its outflow rate as well as by increasing its inflow rate."

Two further properties matter for what follows. The excerpt says stocks "change only slowly, never suddenly, even if the rates flowing into or out of them change suddenly. Therefore stocks act as delays in systems". And they are buffers: "The presence of stocks allows flows to be independent, decoupled, and dependable."

(A caution on provenance. This excerpt is labelled as a pre-publication draft, so its wording may differ from the 2008 edition. I attribute these lines to the excerpt, nothing more.)

## Highly trained people misread accumulation

You would expect this to be obvious. John Sterman, a systems scientist who studied with Meadows, [reports otherwise](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf). In his classroom studies, only 36% of MIT graduate students correctly sketched a bathtub's water level from its inflow and outflow. In a department-store task, 42% and 30% answered the two stock questions correctly, while 94% read the flow graph itself correctly.

Read that last pair carefully. People can read the rates. They struggle to turn rates into accumulation. These are results from one instructor's classes, not a population estimate, but the pattern is the point: the stock is the part we do not see.

## Where the stocks hide in software

What follows is my interpretation, not something the excerpt says about software.

Work in progress is a stock. Arrivals are one flow, completions another. A team that is "busy" may simply have an inflow that has exceeded its outflow for months, and the queue is the memory of that.

Apply the equation. While arrivals exceed completions by any margin, the queue grows every interval, however busy people feel. And the excerpt's point about outflow has a mirror image: reducing arrivals acts on the same stock as raising completions. Pushing people to finish faster and declining or deferring new work are two handles on one bathtub. That is the stock-and-flow argument for limiting work in progress. It is my interpretation, not something the excerpt says about software. The practical habit it suggests is to ask of any queue, before asking who is slow, which flow is larger.

Technical debt is a stock too, with an important caveat: "debt" is a metaphor and has no single unit of measure. Ward Cunningham's [original experience report](https://c2.com/doc/oopsla92.html) put it this way: "Shipping first time code is like going into debt", and "Every minute spent on not-quite-right code counts as interest on that debt." Martin Fowler later added that ["the useful distinction isn't between debt or non-debt, but between prudent and reckless debt"](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), and crossed it with whether the debt was deliberate or inadvertent. So the stock has more than one inflow, and some of them nobody chose.

I read both as stocks whose depletion or growth is delayed and hard to observe. That is an editorial reading of those sources, not a measured result.

## Structure follows purpose

Stocks explain behaviour. Purpose explains why the stocks fill with what they do. Education makes the point unusually visible, because its purposes were argued over in writing.

Xenophon, an Athenian who admired Sparta, [describes](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) how Spartan boys were placed under an official, the "Warden", drawn from the class that filled the highest offices, in place of slave tutors chosen by each father. They went barefoot, got one garment a year, and were rationed food with a measure of theft tolerated. Other Greeks, he says, sent their sons to teachers of letters, music and wrestling.

Aristotle, writing in the *Politics*, [argues](http://classics.mit.edu/Aristotle/politics.8.eight.html) that the legislator should attend above all to the education of the young, and that the citizen should be "molded to suit the form of government under which he lives". Plato's Socrates, in the [*Republic*](http://classics.mit.edu/Plato/republic.8.vii.html), pushes from another side: education is not putting knowledge into the soul "like sight into blind eyes", and "knowledge which is acquired under compulsion obtains no hold on the mind".

Three limits. Xenophon idealizes Sparta, so his account is an admirer's portrait. All three authors are describing citizen males, and I say nothing here about who in practice had access to schooling, because the sources I could open do not settle it. And Plato's remark comes from a discussion of educating guardians in an ideal city, not a general theory of schooling.

My interpretation, then, with those limits in place: Sparta and Athens organized boyhood differently because they pursued different civic goals. The structure followed the purpose. One stock I can name comes from Aristotle, in the [*Nicomachean Ethics*](http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html): "moral virtue comes about as a result of habit", and "legislators make the citizens good by forming habits in them". I read habit as an accumulation built by repeated practice, which is a stock in the sense above, and a school's daily routine as the inflow that a legislator can design. That reading is mine, not Aristotle's vocabulary. I am not drawing a morality tale about two cities.

## The software echo

Software has its own, much-quoted version. In 1968, Melvin Conway [wrote](https://www.melconway.com/Home/Committees_Paper.html) that organizations designing systems are constrained to produce designs that are "copies of the communication structures" of those organizations. Fowler's [overview](https://martinfowler.com/bliki/ConwaysLaw.html) notes that this has been used deliberately, the "Inverse Conway Maneuver", and cautions that it is no quick fix for rigid legacy systems. His support is experience, not empirical research, and I would hold the claim at that level too.

Whether Greek schooling and software architecture work by the same mechanism is a different question. They do not need to. The parallel I am drawing is an analogy: both institutions answer to a question about what to optimize, and the answer shows up in structure before anyone writes it down.

## Why this is the first break

If a system's behaviour lives in its stocks and its rewards, you cannot read it from its parts. A team with excellent engineers can still have a growing queue. A school with a noble mission statement can still teach whatever its structure pays for. The next post asks what happens when each part is improved on its own terms, and the one after that asks why intelligent people keep repeating the pattern.

For now, one question. What happens when we optimize a system without ever questioning what it is for?

## References & Further Reading

- **Bathtubs 101** (excerpt from *Thinking in Systems*, draft), Donella H. Meadows, Donella Meadows Project, undated draft. <https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf>. Source of the definition of stocks, the bathtub principles and stocks as delays and buffers. A pre-publication draft, not the 2008 text.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source of the bathtub and department-store results (classroom studies, not population estimates).
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Original source of the debt metaphor quoted above.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. Source of the prudent/reckless distinction.
- **Constitution of the Lacedaimonians, ch. 2**, Xenophon, trans. E. C. Marchant, Perseus Digital Library (Loeb), 1925. <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. Primary account of Spartan boyhood education, by an admirer of Sparta.
- **Politics, Book VIII**, Aristotle, trans. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/politics.8.eight.html>. Education fitted to the form of government.
- **The Republic, Book VII**, Plato, trans. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Plato/republic.8.vii.html>. Education and compulsion, in the context of an ideal city.
- **Nicomachean Ethics, Book II**, Aristotle, trans. W. D. Ross, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. Habit as the product of repeated practice, formed by legislators.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, April 1968. <https://www.melconway.com/Home/Committees_Paper.html>. The original statement of what became known as Conway's Law.
- **Conway's Law**, Martin Fowler, 2022. <https://martinfowler.com/bliki/ConwaysLaw.html>. A practitioner's overview; experiential, not empirical.

<!-- PART 2: systems-we-build-2-improving-the-parts -->
---
title: "When Improving the Parts Makes the Whole Worse"
description: "Boundaries, metrics and incentives: why better local numbers in schools and engineering teams can mean worse outcomes, and what to change instead."
date: 2026-11-13
series: break-and-change
seriesPart:
  title: "The Systems We Build, The Systems We Live In"
  slug: systems-we-build
  number: 2
  total: 5
  stage: "CHANGE"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "Software Engineering", "Learning & Education"]
tags: ["Systems Thinking", "DORA", "Metrics", "Leverage Points", "Assessment"]
draft: true
---

A metric is a boundary drawn around what you have decided to care about. Everything outside the line is, for purposes of the number, free.

That is the mechanism of this post. Where you draw the boundary decides what counts as success, and local numbers optimized inside a narrow boundary can degrade the outcome outside it. The useful intervention is often a change of rule or goal, not a better number. This is the second post in a series; the first looked at stocks and purpose, and I will not repeat it.

*About the sources. This series engages with Donella Meadows' ideas as they appear in legally accessible sources (a draft excerpt of* Thinking in Systems *published by the Donella Meadows Project, her essays, and independent systems research), not as a review of the full book. Here the Meadows material comes from two of her essays.*

## The warning, and the fences

In her essay [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/), Meadows gives a list of guidelines for living with systems. One of them is blunt: "Don't maximize parts of systems or subsystems while ignoring the whole". Another is "Pay attention to what is important, not just what is quantifiable".

John Sterman, who was taught by Meadows, supplies the mechanism in [his own reflections](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf). Modelling results, he says, are usually more sensitive to the boundary, aggregation and decision-rule assumptions than to the parameters. His image for the boundary is "invisible fences": assumptions about what is inside and outside a model that nobody writes down. A metric works like one. It says what we will look at, and, by silence, what we won't.

## Three things you can change

Meadows' essay [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) ranks places to intervene in a system. I use it here narrowly, for one distinction: changing a parameter (a number), changing a rule (what is allowed or rewarded), and changing a goal (what the system is for). Above those sits what she calls a paradigm; she writes that "Paradigms are the sources of systems."

Meadows is careful about her own list. She calls it "a work in progress", says "It is tentative and its order is slithery", and adds "It's not a recipe for finding leverage points". I treat it as a heuristic lens. It is not an empirically validated ranking, and nothing below depends on it being one.

A target is usually a parameter: raise this number by that much. My interpretation is that many of the problems with metrics come from asking a parameter to do the work of a goal. I offer that as a reading, not a measured proportion.

## A case from schools

One sharply documented example comes from education. Brian Jacob and Steven Levitt [studied](https://www.nber.org/papers/w9413) incentive systems "with bright line rules" and cheating on standardized tests in the Chicago Public Schools, and estimated serious teacher or administrator cheating in at least 4–5% of elementary classrooms a year. They also report that cheating responds strongly to "relatively minor changes in incentives".

That last phrase is the mechanism in one line. When the test score is the boundary, what happens to the score is optimized, including by routes the designers never imagined. These are Chicago data and I will not generalize them.

A second study of Chicago, by Derek Neal and Diane Whitmore Schanzenbach, finds that [accountability based on proficiency counts](https://www.nber.org/papers/w13293) raised scores for students in the middle of the distribution but not for the least advantaged. The gains were real. They were also distributed by the shape of the measure. The paper's title ("Left Behind By Design") and design point to a mechanism, and I read it this way: a proficiency count rewards moving students across a line, so students far below it may be cheaper to ignore. I have read only the abstract, so that is my reading, not a finding I can attribute.

My interpretation: in both cases the measured gap closed while the purpose, presumably that children learn, drifted. I would not call this a law. It is what two bodies of Chicago evidence look like through a boundary lens.

## The same structure in engineering

The DORA research programme is a good place to see how careful practitioners handle this. Its [guide to delivery metrics](https://dora.dev/guides/dora-metrics-four-keys/) now defines five: change lead time, deployment frequency, failed deployment recovery time, change fail rate and deployment rework rate. Together they cover both throughput and stability, which is a boundary decision in itself.

The guide's research conclusion is that "speed and stability are not tradeoffs". It also warns that setting targets increases "the likelihood that teams will try to game the metrics".

Those two statements can look inconsistent, so it is worth separating them. The first is about what tends to go together across teams. The second is about what happens when you push one team on one number. A correlation across teams says nothing about the effect of pushing a single team on a single metric. The second statement is the one a manager acts on.

Martin Fowler made a related point in 2003, in an opinion essay (not empirical research): lines of code do not measure output, and ["any true measure of software development productivity must be based on delivered business value"](https://martinfowler.com/bliki/CannotMeasureProductivity.html). Business value is hard to measure, which is exactly why activity counts creep in.

## Where the analogy stops

A school's assessment regime and an engineering metrics dashboard share a structure, in my reading: a narrow boundary, a visible number, an invisible remainder. Teachers and students adapt, game and resist in ways a software pipeline does not. So this is an analogy about boundaries, not a claim that classrooms are deployment systems.

## What would be a change of rule?

Suppose a team has an individual activity target, say tickets closed per person. A change of parameter lowers the target. A change of rule would replace it with a team-level outcome measure and add a standing review for gaming: someone is asked, on a schedule, what the number now hides. That is a change of structure, and it can still be gamed. It is also cheap to try and easy to reverse.

A larger version is an experiment I will specify fully in Part 5: a group of volunteer teams reserves a fixed, protected share of capacity for capability work such as test reliability, toil and upgrade debt. The share is protected by planning rules, not by goodwill. Google's SRE book offers one [documented precedent](https://sre.google/sre-book/eliminating-toil/) for a rule of that kind: the SRE organization there has an advertised goal of keeping toil below 50% of each SRE's time. That is a company's practice and goal, not a validated optimum, and I claim no optimum for the share here.

Whether any of this works is an open question, and the later posts treat it as one.

## Before you reach for a better number

If you only take one practical habit from this post, make it this: for any metric you rely on, write down what falls outside it, and when someone will look there. Then ask whether the change you are planning is to a parameter, a rule or a goal.

Which leaves the question this post cannot answer. Once a metric has drawn its boundary, how would a team notice that the outcome has started to move outside it?

## References & Further Reading

- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/dancing-with-systems/>. Source of the guidelines quoted. Meadows' essay, not the book.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the caveats quoted and of the parameter/rule/goal/paradigm distinction. Meadows' essay, not the book.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source of the boundary and "invisible fences" argument.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob and Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Chicago estimates of teacher cheating (read at abstract level).
- **Left Behind By Design: Proficiency Counts and Test-Based Accountability**, Derek Neal and Diane Whitmore Schanzenbach, NBER Working Paper 13293, 2007. <https://www.nber.org/papers/w13293>. Chicago evidence on who gained under proficiency-count accountability (read at abstract level).
- **DORA's software delivery metrics: the four keys**, DORA, updated 5 January 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. The five metrics, the warning about gaming, and the speed-and-stability finding.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. A practitioner's opinion on why output is hard to measure.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. A documented company rule capping toil; a practice, not a validated optimum.

<!-- PART 3: systems-we-build-3-same-mistakes -->
---
title: "Why Intelligent People Keep Making the Same Mistakes"
description: "Feedback loops, delays and the capability trap, worked step by step through firefighting, autoscalers and technical debt."
date: 2026-11-13
series: break-and-change
seriesPart:
  title: "The Systems We Build, The Systems We Live In"
  slug: systems-we-build
  number: 3
  total: 5
  stage: "EXPERIENCE"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "Software Engineering"]
tags: ["Systems Thinking", "Feedback Loops", "Technical Debt", "SRE", "Capability Trap"]
draft: true
---

Some mistakes are not mistakes of intelligence. They are the sensible output of a structure in which costs arrive later than rewards. The structure then teaches its participants the wrong lesson, and clever people learn it faster.

This post works through that claim in three places: an improvement trap documented in field research, a literal control loop in Kubernetes, and a small, explicitly hypothetical platform team. It is the most technical of the five.

*About the sources. This series engages with Donella Meadows' ideas as they appear in legally accessible sources (a draft excerpt of* Thinking in Systems *published by the Donella Meadows Project, her essays, and independent systems research), not as a review of the full book. The trap described below is not Meadows' work; it is Nelson Repenning and John Sterman's.*

## The documented case: the capability trap

In ["Nobody Ever Gets Credit for Fixing Problems that Never Happened"](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf), Repenning and Sterman describe organizations whose improvement programmes decay. The theory, they write, "initially emerged from the study of two improvement initiatives in a major automaker" and is supported by "over a dozen in-depth case studies" plus simulation models. That is rich evidence, but it comes from case studies and models, not from controlled trials.

Two field quotes show what it sounds like from inside. An electronics-plant supervisor says: "Supervisors never had time to make improvements…". A product-development engineer says: "The new process is a good one. Someday I'd like to work on a project that actually uses it."

Nobody in those sentences is lazy or stupid. They are describing a loop.

## The loops

The authors model process capability as a stock: it is eroded continuously and refilled, after a delay, by improvement effort. Around it they describe four loops. What follows is my text adaptation of their structure, not a reproduction of their figures.

```
B1 Work Harder:
  gap ─(+)─► pressure to do more work ─(+)─► time on the work itself ─(+)─► output ─(−)─► gap

B2 Work Smarter:
  gap ─(+)─► pressure to improve ─(+)─► time on improvement ─(+, delayed)─► capability
      ─(+)─► output ─(−)─► gap

B3 Shortcuts:
  gap ─(+)─► pressure to do more work ─(+)─► time taken from improvement ─(+)─► output ─(−)─► gap
  (the same time taken lowers time on improvement, so capability erodes, later)

R1 Reinvestment:
  capability ─(+)─► output ─(−)─► gap ─(+)─► pressure to do more work
      ─(−)─► time on improvement ─(+, delayed)─► capability
  (reinforcing: with a high capability it runs in the virtuous direction, with a falling one the vicious)
```

(Adapted from Repenning & Sterman, 2001. A schematic in words, not a validated model. The signs are my reading of the loop logic and are not checked link by link against the authors' figures; consult the paper for the exact diagrams.)

The timing is the whole story. Working harder (B1) is what the authors call "better-before-worse": output improves now and capability pays later. Working smarter (B2) is "worse-before-better": output dips as time goes to improvement, and capability pays back after a delay. Shortcuts (B3) are the same trade as working harder, made by cutting improvement time. A rewarding loop with short feedback beats a rewarding loop with long feedback every time it is judged on this quarter's numbers.

The authors report delays on the order of months for simple processes and years for product development.

## Superstitious learning, worked through

The authors also give an illustrative numeric example, which I walk through step by step. It is their example, not data.

Suppose a manager sees a gap of six hours per person per week between the output wanted and the output delivered. The manager applies pressure. Two of those six hours come from people genuinely working harder. The other four come from cutting improvement time. (For instance, skipped maintenance, skipped documentation or skipped training. Those examples are my gloss, not detail from the authors' example.)

What the manager sees is six hours of extra output. What caused it is two hours of real effort plus four hours borrowed from the future. So the manager concludes that pressure works, and overestimates its effect, the authors say, "by as much as a factor of three". Six over two is three.

They call this the Self-Confirming Attribution Error, and the "self-confirming" part matters. Because the shortcuts are invisible when taken, the evidence the manager has keeps agreeing with the manager's belief. Months later the borrowed hours come due as rework, and the question becomes why the team has gotten worse. Given the same data, the answer many people reach is "the team".

## Heroes get credit

One more link in their account is about reward. An auto-company engineer is quoted: "Nobody ever gets credit for fixing problems that never happened". The authors describe cultures that reward heroic firefighting over prevention, which, in their account, adds a second reinforcing loop running through incentives that promote "heroes".

Their outcome reports include the DuPont and BP Lima maintenance programmes. DuPont plants implementing the programme saw pump mean time between failures improve about 12% per doubling of operating experience, against 5% in 23 comparable plants, and direct maintenance costs fell about 20% against a rise of about 7%. At BP Lima, maintenance costs rose 30% in the first six months. These are figures the authors report from practitioner sources, not independent evaluations. The Lima number is the more interesting one here, because it is a planned dip.

## A control loop you can read

The same arithmetic of delay shows up, more literally, in Kubernetes. The [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) is documented as an intermittent control loop that by default runs every 15 seconds. Its core rule is:

```
desiredReplicas = ceil[ currentReplicas × ( currentMetricValue / desiredMetricValue ) ]
```

By default, per the current documentation, it skips changes while the ratio is within a 0.1 tolerance. The documentation also describes "flapping", where the replica count fluctuates, and defaults to a 300-second stabilization window for scale-down.

Here is the mechanism, walked through. This is my interpretation of how the documented parts fit together, symbolically and with no numbers of my own.

1. Load rises, the metric rises above its target, and the controller adds replicas.
2. The new pods are not useful immediately. They take time to start and become ready, and their metrics lag. During that time the metric still reads high.
3. A controller that took that stale reading at face value would add replicas again, and then again, for capacity that is already on its way. When the new pods all come online, there is too much, the metric falls, and it scales down. Repeat.

So the question is what the documentation does about that lag. It describes an initial readiness delay (by default 30 seconds) and a CPU initialization period (by default 5 minutes) during which pods' metrics are treated with suspicion. And "the controller conservatively assumes that the not-yet-ready pods are consuming 0% of the desired metric, further dampening the magnitude of a scale up". The scale-down stabilization window does the same job on the other side. Read this way, "overshoot" is what the loop would do without those safeguards, and the safeguards trade responsiveness for stability. Meadows' [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) puts the general version in one line: "Delays in feedback loops are critical determinants of system behavior."

The autoscaler is a literal loop with a defined period. A team is not. I use it to make the structure visible, and I return to where the analogy stops in Part 4.

## Policy resistance, and other names

Sterman [defines](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) policy resistance as "the tendency for interventions to be defeated by the response of the system to the intervention itself." That fits: the intervention, pressure, calls up responses (shortcuts, hidden workarounds) that defeat it.

I will use only two named patterns: policy resistance (Sterman) and the capability trap (Repenning and Sterman). Beyond those I describe structures in my own words. One example, as editorial interpretation: pressure and shortcuts have the shape of a symptomatic fix, relieving the visible gap while eroding the capacity to close it. That is my reading of their loops, not a named pattern in any Meadows text I could access.

## Technical debt as a delayed cost

Cunningham's [original line](https://c2.com/doc/oopsla92.html) is "Every minute spent on not-quite-right code counts as interest on that debt." Repenning and Sterman use the same shape of example, a software engineer skipping documentation. Fowler's [quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) distinguishes prudent from reckless debt. I read all of these as capability stocks with a delayed and hard-to-observe drain. Google's SRE book supplies the plausibility for operations work: "toil tends to expand if left unchecked", in the [book's words](https://sre.google/sre-book/eliminating-toil/).

The mechanism, as my reading: the stock that drains is the capacity to do the work in a sustainable way (automation, documentation, clean code). It drains invisibly because skipped work leaves no trace on the day it is skipped, and it surfaces later as interest, in the Cunningham sense: more manual effort and more rework per change, which then compete for the same hours.

## A hypothetical platform team

Consider a **hypothetical** platform team that owns a CI/CD platform. Everything in this paragraph is invented for illustration; no real team or number is described.

The feature backlog grows. Management raises delivery targets (B1). The team defers flaky-test fixes, runbook updates and dependency upgrades (B3). Throughput rises for a quarter, which management reads as proof that the targets worked. Meanwhile the capability stock, meaning test reliability, documentation and how current the dependencies are, drains where nobody is looking.

Later, incident load and rework rise and eat into the time for improvement, so R1 begins to run in the vicious direction. The team now has less capacity to fix the problems that are consuming its capacity. The manager sees a team that got worse and reaches for more pressure.

## Learning from loops that close the wrong gap

Education offers the same structure with a different gap. In Chicago, as Part 2 described, the measured gap, test scores, was what the system closed ([cheating](https://www.nber.org/papers/w9413) in a minority of classrooms, [gains among students in the middle of the distribution](https://www.nber.org/papers/w13293)). The unmeasured purpose drifted. I read these as balancing loops that close the measured gap, and I would not push the parallel with the engineering case beyond that.

## What the structure predicts, and what it doesn't

If this reading is right, exhorting people harder will not work, because the evidence they see confirms the exhortation. Something has to change the rules: when consequences become visible, how protected the improvement time is, and what is rewarded. Part 5 turns that into an experiment.

Whether a real team in your organisation is in a trap is an empirical question. These diagrams cannot answer it, and neither can this post.

Repenning and Sterman themselves extend the pattern beyond organizations, to personal life: they cite learning new software and committing to a new exercise programme. That is the authors' extension, and I offer it only as an analogy, with no claim about physiology. The structure is familiar: effort spent now on getting better is the first thing sacrificed to the demands of the day, and the cost shows up later.

So here is the question this post leaves open. If a reward structure makes the wrong lesson look like the right one, what kind of evidence would the people inside it actually accept?

## References & Further Reading

- **Nobody Ever Gets Credit for Fixing Problems that Never Happened: Creating and Sustaining Process Improvement**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Source of the capability-trap loops, the worked example, the field quotes and the DuPont and BP figures. Case studies and models, not trials; outcome figures come from practitioner sources.
- **Horizontal Pod Autoscaling**, Kubernetes documentation (current). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. Formula, default loop period, tolerance, flapping and stabilization window. Defaults can change between versions.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the statement on delays in feedback loops. Meadows' essay, not the book.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Definition of policy resistance.
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. The debt metaphor, including the interest sentence quoted.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. The prudent/reckless distinction.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Documented reason toil is plausible to grow unchecked; a company's practice, not a validated optimum.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob and Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Chicago evidence (abstract level).
- **Left Behind By Design: Proficiency Counts and Test-Based Accountability**, Derek Neal and Diane Whitmore Schanzenbach, NBER Working Paper 13293, 2007. <https://www.nber.org/papers/w13293>. Chicago evidence (abstract level).

<!-- PART 4: systems-we-build-4-limits -->
---
title: "The Limits of Seeing Everything as a System"
description: "All models are wrong: where systems thinking explains, where it can't predict, and when it erases the people inside the system."
date: 2026-11-13
series: break-and-change
seriesPart:
  title: "The Systems We Build, The Systems We Live In"
  slug: systems-we-build
  number: 4
  total: 5
  stage: "CHALLENGE"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "Mathematics & Reasoning"]
tags: ["Systems Thinking", "Models", "Causal Inference", "Critical Thinking"]
draft: true
---

Systems thinking is itself a model, and a model has a boundary. It is strongest at explaining recurring dynamics. It is weakest at prediction, at attributing causes, and at anything involving power and purpose.

The earlier posts in this series leaned on systems language. This one turns it on itself. A series that criticizes narrow boundaries should draw its own honestly.

*About the sources. This series engages with Donella Meadows' ideas as they appear in legally accessible sources (a draft excerpt of* Thinking in Systems *published by the Donella Meadows Project, her essays, and independent systems research), not as a review of the full book. That limit is not a footnote to this post; it is one of its examples.*

## The model-builder's own warning

John Sterman, who studied with Meadows and is a sympathetic insider, [wrote](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) that all models are wrong. He says system dynamicists reject validation as "establishing truthfulness", and that model results are usually more sensitive to boundary, aggregation and decision-rule assumptions than to parameters.

He also argues that causal maps alone are insufficient, because people cannot mentally simulate even simple dynamic systems. That cuts against the diagrams in this series. When I drew the capability trap in text in Part 3, I borrowed a structure from published research. My drawing is an interpretive model. It is not a finding, and it carries the overconfidence it is supposed to cure.

Sterman even calls system dynamics "a worldview, a paradigm in the sense of Thomas Kuhn". That is an honest description. It means systems thinking has priorities, and the lens is not neutral.

## Meadows is humble too

Meadows' own essays are cautious. In [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/) she writes that "everything you know, and everything everyone knows, is only a model", and that "Systems can't be controlled, but they can be designed and redesigned."

Her [leverage-point list](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) is, in her words, "tentative" and "its order is slithery". My interpretation is that the hierarchy is a heuristic lens, not a validated predictive ranking. If someone presents "paradigm beats rules beats parameters" as a law, they have gone further than Meadows did, and further than the evidence I have seen.

There is also an unresolved difference of emphasis. Meadows' essay puts paradigms near the top of her list. Sterman says that for modellers the highest leverage point is changing clients' mental models by involving them in finding the model's flaws. These views are compatible, but they are not identical. Is a paradigm changed by argument, by participation, or by experience?

## What kind of evidence we actually have

The capability-trap theory is the best-documented mechanism in this series, and its evidence has a specific shape. Repenning and Sterman's theory ["initially emerged from the study of two improvement initiatives in a major automaker"](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf) and is supported by "over a dozen in-depth case studies" and simulation models. That is real evidence. It is not a randomized trial, and the DuPont and BP figures are outcomes reported by practitioners, not independent evaluations.

The consequence is a distinction I should have kept sharper earlier. A model can explain why a pattern recurs without predicting when it will happen in your organization. Explanation is where systems thinking is strong. Prediction and attribution of a specific cause to a specific outcome need data the diagrams cannot provide.

Take the hypothetical platform team from Part 3. Incidents and rework rise after a quarter of pressure. The diagram says drained capability. A rival explanation fits the same picture: demand grew, or a new dependency arrived, and the incidents would have risen anyway. A causal-loop diagram cannot rule that out. Data could help to separate the two: incident rates per unit of traffic rather than raw counts, whether the failing components are the ones whose tests, runbooks or upgrades were deferred, and whether a comparable team under the same demand but without the pressure fared differently. That is my reasoning, not a method taken from a source.

The same caution applies to the DuPont comparison, 23 comparable plants against those implementing the programme. It is not randomized, so selection could explain part of the gap: plants that chose the programme may differ in ways that also affect their pumps.

Here is what would count against this series' thesis. If an organization escaped a capability trap through component upgrades alone, the claim that components cannot fix it would weaken. If changing measurement or goals reliably produced either no change or only new gaming, the claim that structure sometimes helps would weaken. The sources used here contain no evidence for either, though that says more about the series' boundary than about the world.

## The mirror image of the blame error

Repenning and Sterman criticize the fundamental attribution error: blaming people when structure is the cause. There is a mirror error: blaming structure for everything. It erases individual responsibility, and it hides something a feedback diagram rarely shows, which is who designed the structure and who benefits from it.

Aristotle gives the individual side real weight. In the [*Nicomachean Ethics*](http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html) he says "moral virtue comes about as a result of habit", and also that "legislators make the citizens good by forming habits in them". Habit is practised by individuals and shaped by legislators. Both belong in the account. My interpretation is that a systems explanation that leaves out either one is incomplete.

Attribution errors also curdle into stereotypes. Repenning and Sterman quote a manager who blamed "Western" engineers, and I read the example as telling: a structural problem becoming a trait of a group. A systems framing can be a moral corrective to that. It can also be a political act, because deciding that "the system" is the cause also decides who is responsible for changing it. Meadows does not ignore this. Her Leverage Points essay says "Power over the rules is real power", and advises paying attention "to the rules, and to who has power over them". So the critique has to be sharper than "systems thinking forgets power". What the accessible sources do not supply is a method for contesting that power: naming it is not the same as showing how competing groups argue over a goal. And causal-loop diagrams like this series' own still leave it out.

## Where the analogies break

I used a pod autoscaler to make delay visible. The [Kubernetes documentation](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) describes a literal control loop with a defined period, tolerance and stabilization window. You can read its formula and test it.

A school's assessment regime is not a controller. In the Chicago work, teachers and students adapted, gamed and resisted: [Jacob and Levitt](https://www.nber.org/papers/w9413) found cheating that responded strongly to relatively minor changes in incentives. A controller that changed its mind about what it was optimizing because it didn't like the number would be a very strange controller.

So the autoscaler is an illustration of a mechanism, not evidence that classrooms or engineering teams behave the same way. The honest use of the analogy is to make delay vivid and then stop.

History has a version of the problem too. Xenophon, as I noted in Part 1, was an Athenian admirer of Sparta, and [his account](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) idealizes it; that caveat is mine, since the text shows admiration without proving idealization. The Greek sources describe elite citizen males. Neither is a design brief for modern schools.

## The boundary of this series

The last example is this series itself. It draws on one draft excerpt of the book and two of Meadows' essays, plus independent scholarship. A missing chapter's content must not be presented as Meadows' view, and the series tries not to. Where the book's other chapters would be, the series has a blind spot of its own.

That is, I think, a small, practical demonstration of Sterman's point about boundaries. What a model leaves out is invisible from inside it, and this account of Meadows' ideas has a fence whose position the series did not choose.

## What survives

What remains after all this? I would say: systems thinking is a good way to ask why a pattern keeps recurring, and a poor way to claim you know the next outcome. It earns trust through the humility its best practitioners show about it.

The question I take into the last post is this. If every model has a boundary that its builder cannot fully see, how would the people relying on the model ever discover where it ends, before the world shows them?

## References & Further Reading

- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source for model limits, validation, boundary assumptions, causal maps and the "paradigm" description. Written by a sympathetic insider.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/dancing-with-systems/>. Source of Meadows' statements on models and control. Her essay, not the book.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the "tentative" and "slithery" caveats. Her essay, not the book.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Source for the evidence base of the capability trap and the attribution errors.
- **Nicomachean Ethics, Book II**, Aristotle, trans. W. D. Ross, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. Habit and the role of legislators in forming virtue.
- **Horizontal Pod Autoscaling**, Kubernetes documentation (current). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. A literal control loop, used as a contrast with social systems.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob and Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Chicago evidence that people adapt to incentives (abstract level).
- **Constitution of the Lacedaimonians, ch. 2**, Xenophon, trans. E. C. Marchant, Perseus Digital Library (Loeb), 1925. <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. A source whose admiration for Sparta shapes its account.

<!-- PART 5: systems-we-build-5-what-are-we-building -->
---
title: "What Are We Actually Trying to Build?"
description: "Purpose, measurement and autonomy in engineering and education, plus a concrete experiment for an engineering organization."
date: 2026-11-13
series: break-and-change
seriesPart:
  title: "The Systems We Build, The Systems We Live In"
  slug: systems-we-build
  number: 5
  total: 5
  stage: "QUESTION"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "Software Engineering", "Learning & Education"]
tags: ["Systems Thinking", "Organizational Learning", "Engineering Culture", "Education"]
draft: true
---

The most consequential decision in any system is its goal, and goals are contested value choices that measurement can quietly rewrite. The earlier parts of this series built toward that claim: stocks that fill with what the system rewards, boundaries that hide what the metric ignores, loops that teach the wrong lesson, and models that cannot see their own fences.

*About the sources. This series engages with Donella Meadows' ideas as they appear in legally accessible sources (a draft excerpt of* Thinking in Systems *published by the Donella Meadows Project, her essays, and independent systems research), not as a review of the full book. The assessment near the end of this post is therefore about those sources, not about the whole book.*

## What is education for?

The oldest recorded form of the question is about schools. Aristotle, in the [*Politics*](http://classics.mit.edu/Aristotle/politics.8.eight.html), thinks education should be public and the same for all citizens, and he admits something that unsettles his own project: "mankind are by no means agreed about the things to be taught".

Plato's Socrates pulls the other way in the [*Republic*](http://classics.mit.edu/Plato/republic.8.vii.html): "knowledge which is acquired under compulsion obtains no hold on the mind". As in Part 1, the context is the education of guardians in an ideal city, so I do not read it as a general theory of schooling.

These two pull in different directions, civic formation on one side and autonomy on the other. I do not think either text resolves the tension, and I do not want to resolve it artificially here. What I take from the pair is narrower: the answer to "what is it for?" determines the structure, and the people who give it do not agree.

## What should engineering produce?

Software organizations face a cousin of that question, and I mean cousin, not twin. This is an analogy: both institutions must decide what to optimize, and neither shares the other's mechanism.

DORA's [guide](https://dora.dev/guides/dora-metrics-four-keys/) is careful about it. It defines five delivery metrics instead of one, and warns that targets raise "the likelihood that teams will try to game the metrics". Martin Fowler's older position is that ["any true measure of software development productivity must be based on delivered business value"](https://martinfowler.com/bliki/CannotMeasureProductivity.html). That is an opinion essay, but it names the right difficulty: the thing we care about is hard to measure, and the things that are easy to measure are not it.

Meadows has a sentence for this in [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/): "Pay attention to what is important, not just what is quantifiable". And Sterman adds the sting in [his reflections](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf): "we measure what we care about, and those measurements alter what we believe is important".

Measurement, in other words, reveals purpose and also rewrites it. That is the unresolved part: none of the posts in this series found a measure that does not also reshape the purpose it measures.

## Efficiency versus autonomy

If the stated goal of an engineering organization is reliable delivery of customer value, an efficiency lens will ask how much work flows through. An autonomy lens will ask whether the people doing the work have room to notice and fix what is wrong. These can conflict, and the series has already shown where. In Part 3, the capability stock drained because time for improvement was the first thing taken for output: protected time looks like slack to the first lens and like capability to the second. Plato's line about compulsion points the same way for schools, with the caveat above: work done under compulsion may produce output without producing understanding.

My reading is that neither lens is a fact to be discovered. They are values, and a metrics dashboard is one place where the choice gets made without anyone announcing it.

## An experiment, specified

Here is the concrete proposal I promised. It is a hypothesis about an engineering organization, not a result.

**Title.** Protected capability time with a pre-registered "worse-before-better" window.

**Problem.** Chronic firefighting: incidents and rework crowd out the work that would prevent them. This is the capability trap that [Repenning and Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf) describe.

**Stated goal.** Reliable delivery of customer value.

**Actual incentives.** Visible throughput and heroic recovery get rewarded; preventive work stays invisible.

**Feedback loops.** The ones from Part 3: B1 Work Harder, B2 Work Smarter, B3 Shortcuts and R1 Reinvestment, from [Repenning and Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf). There is also a second reinforcing loop, in their account, through incentives that promote "heroes". The rule is meant to weaken B3 and let B2 and R1 run in the virtuous direction. It does nothing about the hero loop unless what is rewarded changes as well.

**Important delays.** Improvement effort leads capability change by months for simple processes and by years for product development, according to Repenning and Sterman. For a two-quarter window that has a practical implication, which is my reading: the delivery metrics may not move inside the window at all. Early indicators, the share of toil and the share of unplanned work, have to be read first, and a flat delivery metric at the judging date is weak evidence either way.

**Intervention.** For two quarters, a set of volunteer teams reserves a fixed, protected share of capacity for capability work: test reliability, toil automation, runbooks, upgrade debt. Planning rules protect it, not goodwill, which makes this a change to the rules of the system and not a tweak to a parameter. Google's SRE organization has [an advertised goal](https://sre.google/sre-book/eliminating-toil/) of keeping toil below 50% of each SRE's time, which is one documented precedent for a protective rule. The share is a parameter the organization must choose and justify. I claim no optimum.

**Pre-registration.** Before starting, write down the expected short-term dip (throughput may fall) and the date on which the experiment will be judged. The accounts Repenning and Sterman report describe a dip that was planned for, including BP Lima's maintenance costs rising 30% in the first six months. Writing the dip down in advance is meant to stop leadership from abandoning the experiment at the first bad number.

**What to watch.** DORA's five metrics: change lead time, deployment frequency, failed deployment recovery time, change fail rate and deployment rework rate. Add the share of toil, the share of unplanned work, and a qualitative check at team level that the work did not become performative. Compare with non-participating teams, and say plainly that the comparison is not randomized.

**Failure criteria.** Any one of these counts as failure:

- At the pre-registered date, rework rate and recovery time are unchanged or worse and the share of toil has not fallen.
- The protected time was routinely raided. That is a failure of the rule, and it is recorded as one.
- The metrics improved, but the qualitative review shows gaming.

**Hypothesis.** My expectation is a short-term dip followed by improved rework and recovery metrics. That is a hypothesis, nothing more.

**Unintended consequences to watch.** Capability work becomes a reporting ritual. Teams outside the experiment absorb displaced load, a boundary effect. Metrics turn into targets. And "worse-before-better" becomes an excuse for interventions that simply do not work. The pre-registration exists to separate the last case from the real thing, and whether it succeeds is an open question.

## An assessment of Meadows' ideas, as far as I can see them

*This section is editorial interpretation, written without the author's personal position and flagged for author review before publication. It assesses Meadows' ideas as they appear in the accessible sources only, and does not assess the full book.*

What I find most enduring is the habit of asking where a stock is accumulating while everyone looks at the flow. The bathtub framing is simple enough to teach and strong enough that experienced people get it wrong.

What I would adopt is her humility. A writer who says that "everything you know, and everything everyone knows, is only a model" is a better guide than one who claims to have found the lever. Part 4 covers her caveats about her own leverage list, so I will not quote them again.

What I would question is how far the vocabulary carries. Leverage points, as Meadows herself frames them, are a heuristic and not a predictive ranking. The evidence for the mechanisms in practice that this series could use comes mostly from case studies, models and Chicago schools.

And on power: the accessible texts do name it. In Leverage Points, Meadows writes "Power over the rules is real power", and says "a single player can have the power to change the system's goal". What they do not offer, as far as these sources go, is an account of how competing groups contest a goal, or how a system's actual goal can be detected from inside it. That seems to me the largest gap in a series that ends by calling the goal the key decision.

Who may benefit? Engineers and managers who recognize the symptoms in Part 3 and want a vocabulary for them. People who want a formula should look elsewhere.

## The question left open

The series thesis was that systems built by intelligent people drift toward outcomes nobody chose when fast, visible feedback rewards activity while costs pile up in slow, invisible stocks. I called the intervention claim "sometimes" on purpose. Changing what a system measures, how soon consequences become visible and what it is for can help. I have no evidence that it reliably does.

Underneath sits a question none of the frameworks answers. Who gets to decide what a system is for, and how would we know, from inside it, that its declared goal and its actual goal have diverged?

What if the most important skill in engineering isn't learning how to build better systems, but recognizing when we're solving the wrong problem?

## References & Further Reading

- **Politics, Book VIII**, Aristotle, trans. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/politics.8.eight.html>. Education and the form of government, and Aristotle's admission of disagreement about what to teach.
- **The Republic, Book VII**, Plato, trans. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Plato/republic.8.vii.html>. Education and compulsion, in the context of an ideal city.
- **DORA's software delivery metrics: the four keys**, DORA, updated 5 January 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. The five metrics and the caution about gaming.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. A practitioner's opinion on delivered business value.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/dancing-with-systems/>. Source of the guideline on what is important versus quantifiable, and of the humility quotes. Her essay, not the book.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source of the measurement quotation.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. The capability trap and the BP Lima dip. Case studies and models; figures reported from practitioner sources.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. A documented rule capping toil; a practice, not a validated optimum.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the "tentative" and "slithery" quotes. Her essay, not the book.
