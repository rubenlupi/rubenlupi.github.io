<!-- PART 1: systems-we-build-1-we-create-them -->
---
title: "Mission Statements Don't Run Systems. Bathtubs Do."
description: "Most of the MIT graduate students in John Sterman's classes couldn't sketch the water level in a bathtub. Why a system behaves according to what piles up in it and what it rewards, from Spartan boyhood to your pull-request queue."
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

Show graduate students at MIT a graph of the water running into and out of a bathtub, ask them to sketch how much water is in the tub, and most of them get it wrong. A bath, of all things, beats them. That matters well beyond the bathroom, because two assumptions sit under most of how we run teams, schools and training plans: that if every part gets better, the whole gets better, and that if results are bad, someone isn't working hard enough.

Both can fail, for a reason you can describe. A system behaves according to what accumulates inside it and what it rewards, not according to how good its parts look or what its mission statement says. The mission statement is the part of a system that everyone reads and nothing obeys.

I haven't had access to the full book, so what follows draws on a pre-publication draft excerpt of *Thinking in Systems* published by the Donella Meadows Project, her essays and independent systems research, and leaves the chapters I haven't seen alone.

## A bathtub is a better model than a to-do list

The simplest object in systems thinking is the stock. In a draft excerpt of *Thinking in Systems* [published by the Donella Meadows Project](https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf), Meadows defines it as "a store, a quantity of material or information that has built up over time": water in a tub, money in an account, unreviewed pull requests in a queue. The same excerpt calls stocks "accumulations, or integrals, of flows". Flows are the rates that fill or drain a stock, and over one small interval Δt the arithmetic is:

```
stock(t + Δt) = stock(t) + (inflow − outflow) · Δt
```

In continuous time it becomes a derivative:

```
d(stock)/dt = inflow(t) − outflow(t)
```

The algebra is easy; the consequences are not. The stock rises while inflow exceeds outflow, falls in the reverse case, and holds steady when the two match, a state the excerpt calls "dynamic equilibrium". It also makes a point that is easy to forget when a number looks wrong: "A stock can be increased by decreasing its outflow rate as well as by increasing its inflow rate." Every bathtub has a plug, and plans to raise a number have a way of forgetting it exists.

Stocks "change only slowly, never suddenly, even if the rates flowing into or out of them change suddenly. Therefore stocks act as delays in systems". And they are buffers: "The presence of stocks allows flows to be independent, decoupled, and dependable."

## Clever people read the tap and miss the tub

You would expect all this to be obvious. John Sterman, a systems scientist who studied with Meadows, [reports otherwise](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf). In his classroom studies, only 36% of MIT graduate students correctly sketched a bathtub's water level from its inflow and outflow. In a department-store task, 42% and 30% answered the two stock questions correctly, while 94% read the flow graph itself correctly.

These are one instructor's classes, not a wider population, but the pattern is hard to miss. Nearly everyone can tell you how fast the water is running, and far fewer can tell you whether the bathroom is about to flood.

## Where software hides its bathtubs

The excerpt says nothing about software, so from here on the reading is mine.

Work in progress is a stock, filled by arrivals and drained by completions. A team that feels "busy" may simply have had more coming in than going out for months. The queue remembers every promise the roadmap has forgotten.

The equation is unforgiving: while arrivals exceed completions by any margin, the queue grows every interval. Finishing faster and declining or deferring new work are two handles on one bathtub, which is the stock-and-flow argument for limiting work in progress. So before you ask who is slow, ask which flow is larger. It is a less satisfying question, because the answer is rarely a person.

Technical debt is a stock too, though "debt" is a metaphor with no single unit of measure. Ward Cunningham's [original experience report](https://c2.com/doc/oopsla92.html) put it this way: "Shipping first time code is like going into debt", and "Every minute spent on not-quite-right code counts as interest on that debt." Martin Fowler later added that ["the useful distinction isn't between debt or non-debt, but between prudent and reckless debt"](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), and crossed it with whether the debt was deliberate or inadvertent. So the stock has more than one inflow, and some of them nobody chose. The interest is charged either way.

## The structure gives the purpose away

Stocks explain behavior; purpose explains why they fill with what they do. Education makes this unusually visible, because people argued over its purposes in writing.

Xenophon, an Athenian who admired Sparta, [describes](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) how Spartan boys were placed under an official, the "Warden", drawn from the class that filled the highest offices, in place of slave tutors chosen by each father. They went barefoot, got one garment a year, and were rationed food with a measure of theft tolerated. Other Greeks, he says, sent their sons to teachers of letters, music and wrestling. Whatever else the Spartan arrangement was, it was not confused about what it wanted.

Aristotle, in the *Politics*, [argues](http://classics.mit.edu/Aristotle/politics.8.eight.html) that the legislator should attend above all to the education of the young, and that the citizen should be "molded to suit the form of government under which he lives". Plato's Socrates, in the [*Republic*](http://classics.mit.edu/Plato/republic.8.vii.html), pushes from another side: education is not putting knowledge into the soul "like sight into blind eyes", and "knowledge which is acquired under compulsion obtains no hold on the mind".

Each witness needs a caveat. Xenophon's account is an admirer's portrait. All three describe citizen males, and who actually got any schooling is a question these texts don't settle. Plato's remark comes from a discussion of educating guardians in an ideal city, not from a general theory of schooling.

Within those limits, my interpretation is that Sparta and Athens organized boyhood differently because they pursued different civic goals: the structure followed the purpose. Aristotle supplies one stock I can name, in the [*Nicomachean Ethics*](http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html): "moral virtue comes about as a result of habit", and "legislators make the citizens good by forming habits in them". I read habit as an accumulation built by repeated practice, and a school's daily routine as the inflow a legislator can design. The vocabulary is mine, not Aristotle's, and this is no morality tale about two cities.

## Software ships its org chart

Software has its own, much-quoted version. In 1968 Melvin Conway [wrote](https://www.melconway.com/Home/Committees_Paper.html) that organizations designing systems are constrained to produce designs that are "copies of the communication structures" of those organizations. Fowler's [overview](https://martinfowler.com/bliki/ConwaysLaw.html) notes that people have used this deliberately, as the "Inverse Conway Maneuver", and cautions that it is no quick fix for rigid legacy systems. His support is experience rather than empirical research, which leaves reorganizing teams for a better architecture where most software advice lives: sensible, and backed by experience.

Greek schooling and software architecture need not share a mechanism; the parallel is an analogy. Both answer a question about what to optimize, and the answer shows up in the structure before anyone writes it down.

## You can't read a system from its parts

A team of excellent engineers can still have a growing queue. A school with a noble mission statement can still teach whatever its structure pays for, and the structure, unlike the mission statement, is never out of date.

What happens when we optimize a system without ever asking what it is for?

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
title: "Everything Outside the Metric Is Free"
description: "A metric is a fence around what you decided to care about. Chicago's test scores and engineering dashboards show what happens on the other side, and why changing a rule can beat chasing a better number."
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

In both cases, as I read them, the measured gap closed while the purpose, presumably that children learn, drifted. That is not a law, just two bodies of Chicago evidence seen through a boundary lens, and I won't generalize them.

## Engineering dashboards have fences too

DORA's [guide to delivery metrics](https://dora.dev/guides/dora-metrics-four-keys/) now defines five: change lead time, deployment frequency, failed deployment recovery time, change fail rate and deployment rework rate. Covering both throughput and stability is a boundary decision in itself. The guide's research conclusion is that "speed and stability are not tradeoffs", and it warns that setting targets increases "the likelihood that teams will try to game the metrics".

The two statements don't contradict each other. The first is about what tends to go together across teams; the second is about pushing one team on one number, and it is the one a manager acts on. Managers, after all, rarely manage the average team.

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


<!-- PART 3: systems-we-build-3-same-mistakes -->
---
title: "Pressure Works Today. The Bill Comes Later."
description: "In the authors' worked example, six hours of extra output come from two hours of real effort, and a manager convinced that pressure works: why the shortcut looks like success, why the bill arrives months later, and what firefighting heroes, impatient autoscalers and technical debt have in common."
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

Everything turns on timing. Working harder (B1) is what the authors call "better-before-worse": output improves now and capability pays later. Working smarter (B2) is "worse-before-better": output dips while time goes to improvement, and capability repays it only after a delay. Shortcuts (B3) make the same trade as working harder, by raiding improvement time. And the delays are long, on the order of months for simple processes and years for product development, according to the authors. Judge by this quarter's numbers and the loop with short feedback beats the one with long feedback every time; the scoreboard favors working harder and cutting corners, and it has made up its mind long before the slow loop's results come in.

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

Pressure and shortcuts look to me like a symptomatic fix, relieving the visible gap while eroding the capacity to close it. Meadows doesn't name the pattern in the texts I've drawn on.

## Technical debt: interest nobody books

Software already has a name for those four borrowed hours. Cunningham's [original line](https://c2.com/doc/oopsla92.html) is "Every minute spent on not-quite-right code counts as interest on that debt." Repenning and Sterman reach for a similar example, a software engineer who skips documentation, and Fowler's [quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) separates prudent debt from reckless. Google's SRE book makes the same drift plausible for operations work, warning that ["toil tends to expand if left unchecked"](https://sre.google/sre-book/eliminating-toil/).

What drains, as I read it, is the capacity to do the work sustainably, through automation, documentation and clean code. Skipped work leaves no trace on the day it is skipped; no pager has ever gone off because a runbook went quietly out of date this afternoon. It surfaces later as interest in Cunningham's sense, more manual effort and more rework per change. It is a debt that charges its interest in the only currency that could have cleared it.

## A made-up team you may recognize

Take an invented but ordinary case: a team that owns a CI/CD platform. If you recognize it, it is still made up.

The feature backlog grows, so management raises delivery targets (B1), and the team defers flaky-test fixes, runbook updates and dependency upgrades (B3). Throughput rises for a quarter, and management takes that as proof the targets worked, which, on the only numbers available that quarter, it is. Meanwhile the capability stock (test reliability, documentation, how current the dependencies are) drains where nobody is looking.

Then incidents and rework eat into improvement time, and R1 turns vicious: the team has less and less capacity to fix the problems consuming its capacity. The manager sees a team that has got worse and reaches for more pressure, the one remedy the evidence has so far endorsed without a single objection. As far as the manager can tell, the pressure works fine; it is the team that has stopped working.

## When trying harder digs the hole deeper

If this reading is right, urging managers to stop pushing will not work, because the evidence they see keeps endorsing the push. You cannot talk people out of a lesson their own numbers keep teaching them. Something has to change the rules: when consequences become visible, how well improvement time is protected, and what gets rewarded. Whether a particular team in your organization is caught in such a trap is an empirical question no diagram can settle.

Repenning and Sterman carry the pattern into personal life, citing learning new software and committing to a new exercise program. That extension is theirs, and I take it only as an analogy, with no claim about physiology. Still, you will know the structure, and so would the engineer still hoping, someday, for a project that actually uses the new process: effort spent now on getting better is the first thing sacrificed to the demands of the day, and the cost shows up later.

If a reward structure makes the wrong lesson look like the right one, what kind of evidence would the people inside it actually accept?

## References & Further Reading

- **Nobody Ever Gets Credit for Fixing Problems that Never Happened: Creating and Sustaining Process Improvement**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Source of the capability-trap loops, the worked example, the field quotes and the DuPont and BP figures. Case studies and models, not trials; outcome figures come from practitioner sources.
- **Horizontal Pod Autoscaling**, Kubernetes documentation (current). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. Formula, default loop period, tolerance, flapping and stabilization window. Defaults can change between versions.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the statement on delays in feedback loops. Meadows' essay, not the book.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Definition of policy resistance.
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. The debt metaphor, including the interest sentence quoted.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. The prudent/reckless distinction.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Documented reason toil is plausible to grow unchecked; a company's practice, not a validated optimum.


<!-- PART 4: systems-we-build-4-limits -->
---
title: "Systems Thinking Explains Why, Not What Happens Next"
description: "All models are wrong, including the one this series has been using: where systems thinking explains, where it can't predict, and when blaming \"the system\" erases the people inside it."
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

The bluntest warning about systems models comes from one of the people who build them. John Sterman studied with Meadows, writes as a systems scientist, and gave his reflections on the field a title that starts "All models are wrong". Systems thinking is itself a model, and a model has a boundary: it is strongest at explaining recurring dynamics, and weakest at prediction, at attributing causes, and at anything involving power and purpose. Anyone who has spent three essays complaining about narrow boundaries owes the reader a look at their own.

I haven't had access to the full book.

## The modeler who says all models are wrong

System dynamicists, [Sterman says](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf), reject validation as "establishing truthfulness", and model results are usually more sensitive to boundary, aggregation and decision-rule assumptions than to parameters.

He also argues that causal maps alone are insufficient, because people cannot mentally simulate even simple dynamic systems. That cuts against my own diagrams. The capability trap I drew in text in Part 3 borrows a structure from published research, and the drawing is an interpretive model, not a finding. It carries the overconfidence it is supposed to cure, like a lecture on humility delivered with great certainty.

Sterman even calls system dynamics "a worldview, a paradigm in the sense of Thomas Kuhn". That is honest, and uncomfortable: a worldview has priorities, so the lens is not neutral.

## Meadows hedged her own list

Meadows' essays are cautious too. In [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/) she writes that "everything you know, and everything everyone knows, is only a model", and that "Systems can't be controlled, but they can be designed and redesigned."

Her [leverage-point list](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) is, in her words, "tentative" and "its order is slithery". My interpretation is that the hierarchy is a heuristic lens, not a validated predictive ranking. Anyone who presents "paradigm beats rules beats parameters" as a law has gone further than Meadows did, and further than any evidence I have drawn on. Being more certain than a careful author is an odd way to honor her.

A difference of emphasis also remains unresolved. Meadows' essay puts paradigms near the top of her list, while Sterman says that for modelers the highest leverage point is changing clients' mental models by involving them in finding the model's flaws. The views are compatible without being identical, and they leave a real question open: is a paradigm changed by argument, by participation, or by experience?

## Good at why, poor at when

The capability trap is the best-documented mechanism in this series, and its evidence has a specific shape. Repenning and Sterman's theory ["initially emerged from the study of two improvement initiatives in a major automaker"](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf) and is supported by "over a dozen in-depth case studies" and simulation models. That is real evidence, but not a randomized trial, and the DuPont and BP figures are outcomes reported by practitioners, not independent evaluations.

A model can explain why a pattern recurs without predicting when it will happen in your organization, or proving what caused a particular outcome; that takes data.

Take the invented platform team from Part 3, whose incidents and rework rise after a quarter of pressure. The diagram says drained capability. A rival explanation fits the same picture just as well: demand grew, or a new dependency arrived, and the incidents would have risen anyway. A causal-loop diagram cannot rule that out, because a diagram, unlike a dataset, is never surprised. Data could help separate the two: incident rates per unit of traffic rather than raw counts, whether the failing components are the ones whose tests, runbooks or upgrades were deferred, and whether a comparable team under the same demand but without the pressure fared differently. That reasoning is mine, not a method taken from a source.

The DuPont comparison, 23 comparable plants against those implementing the program, needs the same caution. It is not randomized, so selection could explain part of the gap: plants that chose the program may differ in ways that also affect their pumps.

Two kinds of evidence would count against my thesis. If an organization escaped a capability trap through component upgrades alone, the claim that components cannot fix it would weaken. If changing measurement or goals reliably produced either no change or only new gaming, the claim that structure sometimes helps would weaken. None of the sources I have used contains evidence for either, which says more about where my own fence stands than about the world.

## When "it's the system" becomes an alibi

Repenning and Sterman criticize the fundamental attribution error: blaming people when structure is the cause. Its mirror image, blaming structure for everything, erases individual responsibility and hides what a feedback diagram rarely shows: who designed the structure and who benefits from it. "The system" is the one culprit that can never be fired.

Aristotle gives the individual side real weight. In the [*Nicomachean Ethics*](http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html) he says "moral virtue comes about as a result of habit", and also that "legislators make the citizens good by forming habits in them". Individuals practice habits and legislators shape them; my interpretation is that a systems explanation that leaves out either one is incomplete.

Attribution errors also curdle into stereotypes. Repenning and Sterman quote a manager who blamed "Western" engineers, which I read as a structural problem turning into a trait of a group. A systems framing can correct that. It can also be a political act, because deciding that "the system" is the cause also decides who is responsible for changing it. Meadows does not ignore this: her Leverage Points essay says "Power over the rules is real power", and advises paying attention "to the rules, and to who has power over them". So the critique has to be sharper than "systems thinking forgets power". What the texts I could read do not supply is a method for contesting that power, and naming it is not the same as showing how competing groups argue over a goal. Causal-loop diagrams, mine included, still leave it out.

## The autoscaler never argues back

I used a pod autoscaler to make delay visible. The [Kubernetes documentation](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) describes a literal control loop with a defined period, tolerance and stabilization window; you can read its formula and test it.

A school's assessment regime is not a controller. In the Chicago work, teachers and students adapted, gamed and resisted: [Jacob and Levitt](https://www.nber.org/papers/w9413) found cheating that responded strongly to relatively minor changes in incentives. A controller that changed its mind about what it was optimizing because it didn't like the number would be a very strange controller. So the autoscaler illustrates a mechanism; it is not evidence that classrooms or engineering teams behave the same way, and the honest use of the analogy is to make delay vivid and then stop.

## My own fence

Everything I know of Meadows here comes from one draft excerpt of the book and two of her essays, plus independent scholarship, and I have avoided guessing at the missing chapters. Sterman's point applies to me: what a model leaves out is invisible from inside it. The most common way to have a fence is not to have chosen where it goes.

## What survives the critique

Quite a lot of systems thinking survives, because it earns trust through the humility its best practitioners show about it. Its weakest advocate is a confident one.

If every model has a boundary that its builder cannot fully see, how would the people relying on it discover where it ends, before the world shows them?

## References & Further Reading

- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source for model limits, validation, boundary assumptions, causal maps and the "paradigm" description. Written by a sympathetic insider.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/dancing-with-systems/>. Source of Meadows' statements on models and control. Her essay, not the book.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the "tentative" and "slithery" caveats. Her essay, not the book.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Source for the evidence base of the capability trap and the attribution errors.
- **Nicomachean Ethics, Book II**, Aristotle, trans. W. D. Ross, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. Habit and the role of legislators in forming virtue.
- **Horizontal Pod Autoscaling**, Kubernetes documentation (current). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. A literal control loop, used as a contrast with social systems.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob and Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Chicago evidence that people adapt to incentives (abstract level).


<!-- PART 5: systems-we-build-5-what-are-we-building -->
---
title: "Your Metrics Are Quietly Rewriting Your Goals"
description: "A system's goal is its most consequential decision, and measurement can rewrite it without anyone announcing it. Aristotle, Plato, DORA, and an experiment an engineering organization could run, with its failure criteria written in advance."
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

Aristotle, in the [*Politics*](http://classics.mit.edu/Aristotle/politics.8.eight.html), thinks education should be public and the same for all citizens, and he admits something that unsettles his own project: "mankind are by no means agreed about the things to be taught". It is a brave thing to concede while designing a curriculum. It also names the decision that matters most in any system, its goal, and the uncomfortable fact that people disagree about it. Goals are contested value choices, and measurement can quietly rewrite them.

I haven't had access to the full book, so what follows draws on a draft excerpt of *Thinking in Systems* published by the Donella Meadows Project, her essays and independent systems research.

## Nobody agrees what school is for

Among my sources, education is where the question was argued most openly. Plato's Socrates pulls against Aristotle in the [*Republic*](http://classics.mit.edu/Plato/republic.8.vii.html): "knowledge which is acquired under compulsion obtains no hold on the mind". As in Part 1, the context is the education of guardians in an ideal city, not a general theory of schooling.

Civic formation pulls one way, autonomy the other. I don't think either text resolves the tension. What I take from the pair is narrower: the answer to "what is it for?" determines the structure, and the people giving that answer do not agree. The school gets built anyway.

## What is an engineering team for, exactly?

Software organizations face a cousin of that question, not a twin. DORA's [guide](https://dora.dev/guides/dora-metrics-four-keys/) defines five delivery metrics instead of one, and warns that targets raise "the likelihood that teams will try to game the metrics". Martin Fowler's older position, in an opinion essay, is that ["any true measure of software development productivity must be based on delivered business value"](https://martinfowler.com/bliki/CannotMeasureProductivity.html). It names the right difficulty: the thing we care about is hard to measure, and the things that are easy to measure are not it. A dashboard can be accurate to the last decimal and still be about the wrong thing.

Meadows has a sentence for this in [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/): "Pay attention to what is important, not just what is quantifiable". Sterman adds the sting in [his reflections](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf): "we measure what we care about, and those measurements alter what we believe is important".

So measurement reveals purpose and rewrites it at the same time, and none of the evidence I have drawn on turns up a measure that leaves its purpose alone. We would send back a thermometer that changed the weather. Metrics that change the goal, we put on the wall.

## Slack or capability? It depends who is looking

If an engineering organization's stated goal is reliable delivery of customer value, an efficiency lens asks how much work flows through; an autonomy lens asks whether the people doing the work have room to notice and fix what is wrong. Part 3 showed where the two conflict: the capability stock drained because time for improvement was the first thing taken for output. Protected time looks like slack to the first lens and like capability to the second. Plato's line about compulsion points the same way for schools, with the caveat above: work done under compulsion may produce output without producing understanding.

Neither lens, in my reading, is a fact to be discovered. They are values, and a metrics dashboard is one place where the choice gets made without anyone announcing it.

## An experiment that admits in advance how it could fail

This is a hypothesis about an engineering organization, not a result.

**Problem.** Chronic firefighting, in which incidents and rework crowd out the work that would have prevented them: the capability trap that [Repenning and Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf) describe.

**Stated goal.** Reliable delivery of customer value.

**Actual incentives.** Visible throughput and heroic recovery get rewarded; preventive work stays invisible.

**Feedback loops.** B1 Work Harder, B2 Work Smarter, B3 Shortcuts and R1 Reinvestment from Part 3, after [Repenning and Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf), plus, in their account, a second reinforcing loop through incentives that promote "heroes". The rule is meant to weaken B3 and let B2 and R1 run in the virtuous direction. It does nothing about the hero loop unless what is rewarded changes as well.

**Important delays.** Improvement effort leads capability change by months for simple processes and by years for product development, according to Repenning and Sterman. My reading is that the delivery metrics may therefore not move inside a two-quarter window at all. The early indicators, the share of toil and the share of unplanned work, have to be read first, and a flat delivery metric at the judging date is weak evidence either way.

**Intervention.** For two quarters, a set of volunteer teams reserves a fixed, protected share of capacity for capability work: test reliability, toil automation, runbooks, upgrade debt. Planning rules protect it, not goodwill, which makes this a change to the rules of the system and not a tweak to a parameter. Goodwill is the first thing a deadline spends. Google's SRE organization has [an advertised goal](https://sre.google/sre-book/eliminating-toil/) of keeping toil below 50% of each SRE's time, one documented precedent for a protective rule. The share is a parameter the organization must choose and justify; I claim no optimum. I expect a short-term dip followed by improved rework and recovery metrics. Changing what a system measures, how soon consequences become visible and what it is for can help, but I have no evidence that it reliably does.

**Pre-registration.** Before starting, write down the expected short-term dip (throughput may fall) and the date on which the experiment will be judged. The accounts Repenning and Sterman report describe a dip that was planned for, including BP Lima's maintenance costs rising 30% in the first six months. Writing the dip down in advance is meant to stop leadership abandoning the experiment at the first bad number. A dip that was predicted is a result; a dip that wasn't is a reason to panic.

**What to watch.** DORA's five metrics: change lead time, deployment frequency, failed deployment recovery time, change fail rate and deployment rework rate. Add the share of toil, the share of unplanned work, and a team-level qualitative check that the work did not become performative. Compare with non-participating teams, and say plainly that the comparison is not randomized.

**Failure criteria.** Any one of these counts as failure:

- At the pre-registered date, rework rate and recovery time are unchanged or worse and the share of toil has not fallen.
- The protected time was routinely raided. That is a failure of the rule, and it is recorded as one.
- The metrics improved, but the qualitative review shows gaming.

**Unintended consequences to watch.** Capability work becomes a reporting ritual. Teams outside the experiment absorb displaced load, a boundary effect. Metrics turn into targets. And "worse-before-better" becomes an excuse for interventions that simply do not work; the pre-registration exists to tell that case from the real thing, and whether it succeeds is an open question.

## What I'd keep from Meadows, and what I'd question

*This assessment is editorial interpretation of Meadows' ideas as the accessible sources present them, not of the full book. It does not yet include the author's personal position and is flagged for his review before publication.*

What I find most enduring is the habit of asking where a stock is accumulating while everyone watches the flow. The bathtub framing is simple enough to teach and, as Sterman's classroom results in Part 1 showed, hard enough that well-trained people still get it wrong.

What I would adopt is her humility. A writer who says that "everything you know, and everything everyone knows, is only a model" is a better guide than one who claims to have found the lever.

What I would question is how far the vocabulary carries. Leverage points, as Meadows herself frames them, are a heuristic and not a predictive ranking, and the evidence I could draw on for the mechanisms in practice comes mostly from case studies, models and Chicago schools.

On power, the accessible texts do name it. In [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Meadows writes "Power over the rules is real power", and says "a single player can have the power to change the system's goal". What they do not offer, as far as these sources go, is an account of how competing groups contest a goal, or of how a system's actual goal can be detected from inside it. That seems to me the largest gap, since the goal is the decision that matters most.

The readers who will get most from Meadows are engineers and managers who recognize the symptoms in Part 3 and want a vocabulary for them. Anyone who wants a formula should look elsewhere, and will probably find one, which is rather the problem.

## Who decides what a system is for?

Underneath sits a question none of the frameworks answers: who gets to decide what a system is for, and how would we know, from inside it, that its declared goal and its actual goal have diverged?

If nobody can answer that, what if the most important skill in engineering isn't learning how to build better systems, but recognizing when we're solving the wrong problem?

## References & Further Reading

- **Politics, Book VIII**, Aristotle, trans. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/politics.8.eight.html>. Education and the form of government, and Aristotle's admission of disagreement about what to teach.
- **The Republic, Book VII**, Plato, trans. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Plato/republic.8.vii.html>. Education and compulsion, in the context of an ideal city.
- **DORA's software delivery metrics: the four keys**, DORA, updated 5 January 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. The five metrics and the caution about gaming.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. A practitioner's opinion on delivered business value.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/dancing-with-systems/>. Source of the guideline on what is important versus quantifiable, and of the humility quotes. Her essay, not the book.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source of the measurement quotation.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. The capability trap and the BP Lima dip. Case studies and models; figures reported from practitioner sources.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Google SRE's advertised goal of keeping toil below 50% of each SRE's time; a company practice, not a validated optimum.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the quotations on power over rules and over a system's goal. Her essay, not the book.
