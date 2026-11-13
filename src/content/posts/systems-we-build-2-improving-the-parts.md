---
title: "When Improving the Parts Makes the Whole Worse"
description: "Boundaries, metrics and incentives: why better local numbers in schools and engineering teams can mean worse outcomes, and what to change instead."
date: 2026-11-13
editorialDate: 2026-11-02   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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
draft: false
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

A second study of Chicago, by Derek Neal and Diane Whitmore Schanzenbach, finds that [accountability based on proficiency counts](https://www.nber.org/papers/w13293) raised scores for students in the middle of the distribution but not for the least advantaged. The gains were real. They were also distributed by the shape of the measure. The paper's title ("Left Behind By Design") and design point to a mechanism, and I read it this way: a proficiency count rewards moving students across a line, so students far below it may be cheaper to ignore. Only the abstract was inspected for this series, so this is a reading, not a finding I can attribute.

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
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Google SRE's advertised goal of keeping toil below 50% of each SRE's time; a company practice, not a validated optimum.

