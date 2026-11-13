---
title: "Everything Outside the Metric Is Free"
description: "A metric is a fence around what you decided to care about. Chicago's test scores and engineering dashboards show what happens on the other side, and why changing a rule can beat chasing a better number."
date: 2026-11-13
editorialDate: 2026-10-26   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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

Attach enough rewards and penalties to a test score and some of the adults in the building may start cheating on it. In Chicago's elementary schools this was not a thought experiment: two researchers estimated that serious cheating by teachers or administrators happened in a small share of classrooms every year, and that it responded strongly to fairly minor changes in the incentives. Nobody set out to build a system that produced cheating. Someone drew a line around the score.

A metric is a boundary around what you have decided to care about, and everything outside the line is, for purposes of the number, free. Local numbers optimized inside a narrow boundary can degrade the outcome outside it, which is why the useful intervention is often a change of rule or goal, not a better number.

I haven't had access to the full book; the Meadows material here comes from two of her essays, read alongside independent systems research.

## The fences nobody writes down

In her essay [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/), Meadows lists guidelines for living with systems. One is blunt: "Don't maximize parts of systems or subsystems while ignoring the whole". Another is "Pay attention to what is important, not just what is quantifiable".

John Sterman, who studied with Meadows, supplies the mechanism in [his own reflections](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf): modeling results are usually more sensitive to the boundary, aggregation and decision-rule assumptions than to the parameters. His image for the boundary is "invisible fences", assumptions about what is inside and outside a model that nobody writes down. A metric works like one. It says what we will look at and, by its silence, what we won't, and people learn to read the silence remarkably fast.

## A parameter asked to do a goal's job

Meadows' essay [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) ranks places to intervene in a system. I use it for one distinction: changing a parameter (a number), a rule (what is allowed or rewarded) or a goal (what the system is for). Above those sits what she calls a paradigm: "Paradigms are the sources of systems."

She is careful about her own list. She calls it "a work in progress", says "It is tentative and its order is slithery", and adds "It's not a recipe for finding leverage points". When the author of a ranking calls its order slithery, the least a reader can do is believe her. I treat it as a heuristic lens, not an empirically validated ranking.

A target is usually a parameter: raise this number by that much. My interpretation, not a measured proportion, is that many problems with metrics come from asking a parameter to do the work of a goal.

## Chicago's scores did as they were told

Brian Jacob and Steven Levitt [studied](https://www.nber.org/papers/w9413) incentive systems "with bright line rules" and cheating on standardized tests in the Chicago Public Schools, and estimated serious teacher or administrator cheating in at least 4–5% of elementary classrooms a year. Cheating, they report, responds strongly to "relatively minor changes in incentives": when the score is the boundary, the score is what gets optimized, including by routes the designers never imagined.

A second Chicago study, by Derek Neal and Diane Whitmore Schanzenbach, finds that [accountability based on proficiency counts](https://www.nber.org/papers/w13293) raised scores for students in the middle of the distribution but not for the least advantaged. The gains were real, and the shape of the measure decided who got them. I have read only the abstract, which doesn't say why; my guess, prompted by the title ("Left Behind By Design"), is that a proficiency count rewards moving students across a line, so students far below it may be cheaper to ignore. If that is right, nobody ever had to decide to neglect those students. The arithmetic did it, and arithmetic never has to sign anything.

In both cases, as I read them, the measured gap closed while the purpose, presumably that children learn, drifted. That is not a law, just two bodies of Chicago evidence seen through a boundary lens.

## Engineering dashboards have fences too

DORA's [guide to delivery metrics](https://dora.dev/guides/dora-metrics-four-keys/) now defines five: change lead time, deployment frequency, failed deployment recovery time, change fail rate and deployment rework rate. Covering both throughput and stability is a boundary decision in itself. The guide's research conclusion is that "speed and stability are not tradeoffs", and it warns that setting targets increases "the likelihood that teams will try to game the metrics".

The two statements don't contradict each other. The first is about what tends to go together across teams; the second is about pushing one team on one number. Managers, after all, rarely manage the average team.

Martin Fowler made a related point in 2003, in an opinion essay rather than empirical research: lines of code do not measure output, and ["any true measure of software development productivity must be based on delivered business value"](https://martinfowler.com/bliki/CannotMeasureProductivity.html). Business value is hard to measure, which is exactly why activity counts creep in. Their main qualification for the job is that they are easy to count.

## Classrooms are not pipelines

In my reading, a school's assessment regime and an engineering dashboard share a structure: a narrow boundary, a visible number, an invisible remainder. But teachers and students adapt, game and resist in ways a pipeline does not; no pipeline has ever disagreed with its target. This is an analogy about boundaries, not a claim that classrooms are deployment systems.

## Change the rule, not the number

Take a team with an individual activity target, say tickets closed per person. Changing the parameter means lowering the target. Changing the rule means replacing it with a team-level outcome measure plus a standing review for gaming, in which someone is asked, on a schedule, what the number now hides. That is a change of structure. It can still be gamed, but it is cheap to try and easy to reverse. A larger version of the same move, protected capacity for capability work, gets a full experiment in Part 5.

## Before you reach for a better number

For any metric you rely on, write down what falls outside it and when someone will look there. Then ask whether your planned change touches a parameter, a rule or a goal. If it is a parameter, the fence is still exactly where it was; only the number painted on it has changed.

Once a metric has drawn its boundary, how would a team notice that the outcome has started to move outside it?

## References & Further Reading

- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/dancing-with-systems/>. Source of the guidelines quoted. Meadows' essay, not the book.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the caveats quoted and of the parameter/rule/goal/paradigm distinction. Meadows' essay, not the book.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source of the boundary and "invisible fences" argument.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob and Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Chicago estimates of teacher cheating (read at abstract level).
- **Left Behind By Design: Proficiency Counts and Test-Based Accountability**, Derek Neal and Diane Whitmore Schanzenbach, NBER Working Paper 13293, 2007. <https://www.nber.org/papers/w13293>. Chicago evidence on who gained under proficiency-count accountability (read at abstract level).
- **DORA's software delivery metrics: the four keys**, DORA, updated 5 January 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. The five metrics, the warning about gaming, and the speed-and-stability finding.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. A practitioner's opinion on why output is hard to measure.


