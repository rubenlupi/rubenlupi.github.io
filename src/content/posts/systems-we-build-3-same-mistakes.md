---
title: "Pressure Works Today. The Bill Comes Later."
description: "In the authors' worked example, six hours of extra output come from two hours of real effort, and a manager convinced that pressure works: why the shortcut looks like success, why the bill arrives months later, and what firefighting heroes, impatient autoscalers and technical debt have in common."
date: 2026-11-13
editorialDate: 2026-10-26   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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

"The new process is a good one. Someday I'd like to work on a project that actually uses it." An engineer in product development said that, and Nelson Repenning and John Sterman quote it in [their study of process improvement](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf). The new process has plenty of admirers and no users.

Behind the sentence sits a mechanism about what managers learn from their own data. Pressure raises output, the people applying it see the rise and conclude that pressure works, and months later the bill arrives as rework, at which point the same people, reading the same kind of evidence, ask why the team has got worse. Nobody here needs to be lazy or stupid. When costs arrive later than rewards, the structure teaches the people inside it the wrong lesson, and clever people simply learn it faster.

I haven't had access to the full book, so I draw on the draft excerpt of *Thinking in Systems* that the Donella Meadows Project publishes, her essays and independent systems research. The trap at the center of what follows belongs to Repenning and Sterman, not to Meadows.

## The improvement nobody had time for

In ["Nobody Ever Gets Credit for Fixing Problems that Never Happened"](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf), Repenning and Sterman describe organizations whose improvement programs decay. Their theory "initially emerged from the study of two improvement initiatives in a major automaker", and it rests on "over a dozen in-depth case studies" along with simulation models: a lot of evidence, though case studies and models rather than controlled trials.

The engineer has company in the paper. A supervisor at an electronics plant says "Supervisors never had time to make improvements…". Together the two remarks cover the whole life of an improvement program: first nobody has time to build it, then nobody has a project to use it in, and neither speaker objects to it.

## Four loops, and the one that pays back too late

The authors model process capability as a stock that erodes all the time and is refilled, after a delay, by improvement effort. Around it they draw four loops.

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

This is my adaptation of Repenning & Sterman, 2001, a schematic in words and not a validated model. I set the signs from my reading of the loop logic rather than by checking each link against the authors' figures; for the exact diagrams, go to the paper.

Everything turns on timing. Working harder (B1) is what the authors call "better-before-worse": output improves now and capability pays later. Working smarter (B2) is "worse-before-better": output dips while time goes to improvement, and capability repays it only after a delay. Shortcuts (B3) make the same trade as working harder, by raiding improvement time. And the delays are long, on the order of months for simple processes and years for product development, according to the authors. Judge by this quarter's numbers and the scoreboard favors working harder and cutting corners; it has made up its mind long before the slow loop's results come in.

## Six hours of output, two hours of effort

The authors make the consequence concrete with a numerical example of their own, built to show the logic rather than drawn from data. A manager sees a gap of six hours per person per week between the output wanted and the output delivered, and applies pressure. Two of those six hours come from people genuinely working harder. The other four come from cutting improvement time: skipped maintenance, documentation or training, say (those examples are mine, not the authors').

The manager sees six extra hours of output and nothing of where they came from, so concludes that pressure works and, the authors say, overestimates its effect "by as much as a factor of three". Six over two is three. Two hours of real effort, four hours borrowed from the future, and one manager convinced of a miracle. It is the only kind of loan where the bank thanks you for taking it.

They call this the Self-Confirming Attribution Error. Shortcuts are invisible when they are taken, so the evidence keeps agreeing with what the manager already believes: ask the data for a second opinion and you get the first one back, with numbers attached. When the borrowed hours later come due as rework, many people given the same data would blame the team. You might too; the data are very persuasive, which is the whole problem.

## Nobody gets promoted for the fire that never started

Rewards make it worse. An engineer at an auto company gave the paper its title: "Nobody ever gets credit for fixing problems that never happened". The authors describe cultures that prize heroic firefighting over prevention, which in their account creates a second reinforcing loop, through incentives that promote "heroes". The person who stays late putting out the fire is visible; the person whose system never caught fire has produced, as far as any report can show, nothing at all.

What prevention can buy, and what it costs first, shows in the maintenance programs they report at DuPont and BP Lima. In DuPont plants that implemented the program, pump mean time between failures improved about 12% per doubling of operating experience, against 5% in 23 comparable plants, and direct maintenance costs fell about 20%, against a rise of about 7% in the comparison plants. At BP Lima, maintenance costs rose 30% in the first six months. The authors take these figures from practitioner sources, not independent evaluations. The Lima number interests me more, because that dip was planned: someone agreed in advance to let things look worse. That takes more nerve than any night of firefighting, and there is no medal for it.

## A machine that would make the same mistake

The same arithmetic of delay turns up, far more literally, in Kubernetes. Its documentation describes the [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) as an intermittent control loop that runs every 15 seconds by default, built around one core rule:

```
desiredReplicas = ceil[ currentReplicas × ( currentMetricValue / desiredMetricValue ) ]
```

By default the controller skips changes while the ratio stays within a 0.1 tolerance. The documentation describes "flapping", where the replica count fluctuates, and sets a default 300-second stabilization window for scale-down.

How these pieces fit together is my interpretation. Load rises, the metric climbs above its target, and the controller adds replicas. New pods take time to become ready and their metrics lag, so for a while the metric still reads high. A controller that took that stale reading at face value would add replicas again, and again, ordering capacity already on its way. Once the pods came online there would be more than the load needs, the metric would fall, the controller would scale down, and the cycle would restart. That is overshoot: the correction outlives the problem because the evidence of the solution arrives late. It is the manager's mistake in miniature. The machine, at least, has the excuse of being a machine.

The documentation deals with that lag. It describes an initial readiness delay (30 seconds by default) and a CPU initialization period (5 minutes by default) during which pods' metrics are treated with suspicion, and adds that "the controller conservatively assumes that the not-yet-ready pods are consuming 0% of the desired metric, further dampening the magnitude of a scale up". In other words, the controller counts the capacity already on its way before asking for more, which is more patience than the manager with the six hours showed. The scale-down stabilization window does the same job in the other direction. Read this way, overshoot is what the loop would do without those safeguards, and the safeguards buy stability at the price of responsiveness. Meadows' [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) states the general version in one line: "Delays in feedback loops are critical determinants of system behavior." The autoscaler, of course, is a literal loop with a defined period, and a team is not.

## When the system fights the fix

Sterman [defines](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) policy resistance as "the tendency for interventions to be defeated by the response of the system to the intervention itself." Pressure fits uncomfortably well, because it calls up the very responses, shortcuts and hidden workarounds, that defeat it. The medicine produces the symptoms it was prescribed for.

Calling this a symptomatic fix is my label; Meadows doesn't name the pattern in the texts I've drawn on.

## Technical debt: interest nobody books

Software already has a name for those four borrowed hours. Cunningham's [original line](https://c2.com/doc/oopsla92.html) is "Every minute spent on not-quite-right code counts as interest on that debt." Repenning and Sterman reach for a similar example, a software engineer who skips documentation. Google's SRE book makes the same drift plausible for operations work, warning that ["toil tends to expand if left unchecked"](https://sre.google/sre-book/eliminating-toil/).

What drains, as I read it, is the capacity to do the work sustainably, through automation, documentation and clean code. Skipped work leaves no trace on the day it is skipped; no pager has ever gone off because a runbook went quietly out of date this afternoon. It surfaces later as interest in Cunningham's sense, more manual effort and more rework per change. It is a debt that charges its interest in the only currency that could have cleared it.

## A made-up team you may recognize

Take an invented but ordinary case: a team that owns a CI/CD platform. If you recognize it, it is still made up.

The feature backlog grows, so management raises delivery targets (B1), and the team defers flaky-test fixes, runbook updates and dependency upgrades (B3). Throughput rises for a quarter, and management takes that as proof the targets worked, which, on the only numbers available that quarter, it is. Meanwhile the capability stock (test reliability, documentation, how current the dependencies are) drains where nobody is looking.

Then incidents and rework eat into improvement time, and R1 turns vicious: the team has less and less capacity to fix the problems consuming its capacity. The manager sees a team that has got worse and reaches for more pressure. As far as the manager can tell, the pressure works fine; it is the team that has stopped working.

## When trying harder digs the hole deeper

If this reading is right, urging managers to stop pushing will not work, because the evidence they see keeps endorsing the push. Something has to change the rules: when consequences become visible, how well improvement time is protected, and what gets rewarded. Whether a particular team in your organization is caught in such a trap is an empirical question no diagram can settle.

Repenning and Sterman carry the pattern into personal life, citing learning new software and committing to a new exercise program. That extension is theirs, and I take it only as an analogy, with no claim about physiology. Still, you will know the structure, and so would the engineer still hoping, someday, for a project that actually uses the new process.

If a reward structure makes the wrong lesson look like the right one, what kind of evidence would the people inside it actually accept?

## References & Further Reading

- **Nobody Ever Gets Credit for Fixing Problems that Never Happened: Creating and Sustaining Process Improvement**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Source of the capability-trap loops, the worked example, the field quotes and the DuPont and BP figures. Case studies and models, not trials; outcome figures come from practitioner sources.
- **Horizontal Pod Autoscaling**, Kubernetes documentation (current). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. Formula, default loop period, tolerance, flapping and stabilization window. Defaults can change between versions.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the statement on delays in feedback loops. Meadows' essay, not the book.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Definition of policy resistance.
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. The debt metaphor, including the interest sentence quoted.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Documented reason toil is plausible to grow unchecked; a company's practice, not a validated optimum.


