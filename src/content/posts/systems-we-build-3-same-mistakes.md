---
title: "Why Intelligent People Keep Making the Same Mistakes"
description: "Feedback loops, delays and the capability trap, worked step by step through firefighting, autoscalers and technical debt."
date: 2026-11-13
editorialDate: 2026-11-02   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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
draft: false
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

I will use only two named patterns: policy resistance (Sterman) and the capability trap (Repenning and Sterman). Beyond those I describe structures in my own words. One example, as editorial interpretation: pressure and shortcuts have the shape of a symptomatic fix, relieving the visible gap while eroding the capacity to close it. That is my reading of their loops, not a named pattern in the Meadows texts used in this series.

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

