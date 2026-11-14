---
title: "We've Learned to Measure Everything. Except What Matters."
description: "Flawless metrics, incentives that change behavior, and teams that hit their targets while the product loses value: what Meadows, DORA and the education studies teach us."
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
tags: ["Systems Thinking", "Metrics", "Incentives", "DORA", "Organizational Design"]
draft: false
---

The dashboard is green.

Deployment frequency is up. Lead time for changes is down. Teams are meeting their commitments and productivity seems to improve quarter after quarter.

At the results meeting, it's all good news.

Three floors down, customer support is swamped. Users abandon processes halfway through. The product team has spent months trying to solve the same problems, and the engineers are starting to wonder why they work so hard to achieve so little.

Nobody has faked the numbers.

The dashboard works.

That is precisely the problem.

We've built a system capable of meeting its targets without achieving what it supposedly exists for.

And if we think the solution is to find the person who chose the wrong metrics, we probably haven't understood the problem yet.

## The system learns what we reward

In *Thinking in Systems*, Donella Meadows distinguishes a system's elements, its interconnections and its function or purpose.

The distinction seems simple, but it has an uncomfortable consequence: a system's real purpose doesn't always match its stated purpose.

An organization can say it wants to create value for its customers. It can write it in its strategy, repeat it in its meetings and put it on the first slide of every presentation.

But if its decision mechanisms, its budgets and its rewards exclusively favor the number of features delivered, that behavior will end up shaping what the organization does.

Not because all its members are opportunists. Nor because there's a conspiracy to ignore the customer.

People adapt their decisions to the environment they work in. And that environment includes what is measured, what is rewarded, what is punished and what is visible.

Meadows places a system's goals among the most influential [points of intervention](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/). Changing the goal can alter the behavior of many elements without directly modifying each one.

But there is a difficulty: the goals we declare and the ones that actually govern our decisions can be different.

To discover that difference, it helps to look at what happens when two goals come into conflict.

What happens when improving quality means delaying a delivery? When solving a customer's problem doesn't move any of the team's metrics? When a technically correct decision hurts the indicator by which the person who must make it is evaluated?

That's where statements of principle start competing with the real structure.

## Metrics are not transparent windows

A metric is a partial representation of reality. We choose a variable, decide how to measure it and use it to interpret a broader phenomenon.

That's indispensable in engineering. We can't operate a complex platform on intuition alone.

The problem appears when we confuse the representation with what it's meant to represent.

Think about the productivity of a software team. We can measure commits, pull requests, completed tickets, deployments or cycle time.

All of those measures contain information. None of them, on its own, proves we're creating value.

A team can close more tickets because it has split tasks into smaller units. It can deploy more often because it has reduced the size of its changes. It can generate more code because it uses AI assistants.

Each of those changes can be positive. But we can also increase activity without improving the outcome.

The difference matters because, when a metric becomes a target, people start making decisions to influence it.

This is usually linked to Goodhart's law, popularized in the formulation that a measure ceases to be a good measure when it becomes a target.

The phrase is useful, though we shouldn't turn it into a universal law. A metric can remain valuable even when we use it to set targets. What changes is the behavior of the people and organizations that interact with it.

And that behavior can change the relationship between the indicator and the phenomenon we wanted to observe.

In other words: measuring isn't always a passive activity. Sometimes it changes the system we're measuring.

## Chicago: when a better score doesn't mean better education

In 2003, the economists Brian Jacob and Steven Levitt published [a study](https://www.nber.org/papers/w9413) on cheating on standardized tests in Chicago's public schools.

They analyzed statistical patterns consistent with altered answers and used additional information to study the phenomenon.

They estimated that serious cheating by teachers or administrators occurred every year in at least 4–5% of elementary classrooms. They also found that this behavior responded to relatively modest changes in incentives.

The study doesn't show that all teachers acted this way, or that standardized assessment is useless. It reveals something more specific.

When professional consequences depend heavily on an indicator, some people can find ways to improve that indicator without improving what it's meant to measure.

The test score becomes an operational target. And behaviors appear that the assessment system wasn't meant to produce.

[Another study](https://www.nber.org/papers/w13293), by Derek Neal and Diane Whitmore Schanzenbach, examined the effects of an accountability system based on how many students reached a minimum level of proficiency.

They found improvements concentrated among students near the relevant threshold, while the lowest-scoring students didn't see the same gains.

The economic mechanism is understandable. If institutional success depends on the number of students who clear a line, investing resources in those close to crossing it can produce a more immediate improvement in the indicator.

Helping a student who is far from the threshold can be educationally important, but contribute less to the short-term measured result.

Nobody needs to declare that some students matter less. The incentive structure can favor an unequal distribution of attention.

The parallel with engineering isn't about equating teachers with developers. It's about recognizing a shared mechanism: **when we define a narrow boundary for measuring success, we can shift resources toward what counts and away from what also matters.**

And there's an even more interesting question. What happens when the people who design the assessment system also start to believe their indicator fully represents the goal?

Then the problem stops being only about incentives. It becomes a problem of mental models.

## DORA is not the problem

In software engineering we have an especially interesting example: the [DORA metrics](https://dora.dev/guides/dora-metrics-four-keys/).

Their purpose is to help understand software delivery performance through indicators related to speed and stability.

Among them are deployment frequency, change lead time, change fail rate and recovery times. The current formulation of DORA also includes the rework associated with deployments.

DORA's research has helped challenge the idea that delivering faster necessarily means sacrificing stability. That is valuable.

But DORA itself warns that turning the metrics into targets makes it more likely that teams will game them, and that comparing them across very different applications can be misleading.

Imagine an organization decides to increase deployment frequency by 30%.

One team starts splitting its changes into smaller units. It improves continuous integration, automates tests and reduces dependencies. Frequency goes up. Excellent.

Another team gets the same result by changing how deployments are counted, or by making low-value changes just to improve the figure. Frequency goes up too.

The dashboard shows two apparently equivalent successes. But the system has produced very different behaviors.

The metric doesn't necessarily tell them apart.

This doesn't invalidate DORA. It shows why we need to understand the context and purpose of each indicator.

The matter is especially relevant when we bring AI agents into development.

If an agent generates code faster, we may see more commits, more pull requests and more proposed changes. But the value of software also depends on the quality of decisions, on integration, on maintenance and on the results it produces.

We can speed up one part of the flow without improving the whole. We can even saturate review and integration.

The problem isn't that agents produce too much code. It's that we still need to tell producing artifacts from achieving outcomes.

## Everyone makes decisions with an incomplete map

Bounded rationality, a concept developed by Herbert Simon and also discussed in the systems-thinking tradition, describes a fundamental feature of our decisions.

We don't have perfect information. Nor can we evaluate every possible alternative. We make decisions using simplified models of reality, under constraints of time, knowledge and processing capacity.

In an engineering organization, those limitations are unavoidable.

A developer can understand their service deeply without knowing all the business dependencies. A Product Owner can know the users' needs without mastering the platform's technical constraints. An infrastructure lead can optimize resources without enough information about the impact of certain decisions on the customer experience. An Engineering Manager can observe delivery indicators without knowing all the technical compromises that are piling up.

None of those perspectives is necessarily wrong. All of them are incomplete.

The problem arises when we turn a partial perspective into a sufficient representation of the whole.

Here information flows take on enormous importance.

Meadows considers the structure of information flows one of the places where we can intervene to change a system.

It isn't simply about building another dashboard. It's about changing who can observe which consequences, with what delay, and when they can act.

Imagine engineers know the latency of their services, but never receive information about the business processes that fail. They can technically optimize an API for months without discovering that the user's main problem lies in a product decision.

And the opposite happens too. A product team can design a seemingly simple feature without knowing the operational cost of maintaining it.

The solution isn't to demand that everyone know everything. It's to build mechanisms that connect decisions with their consequences.

## Conway was right, but he didn't give us a solution

In 1968, Melvin Conway [observed](https://www.melconway.com/Home/Committees_Paper.html) that organizations that design systems tend to produce structures that mirror their communication patterns.

It's one of the most cited ideas in software engineering. It's also one of the easiest to oversimplify.

It's often read as a direct recommendation: if we want a different architecture, we must reorganize the teams.

Sometimes that can work. But changing an org chart doesn't automatically change the real information flows, the dependencies, the incentives or the power relations.

We can create autonomous teams on paper and keep decisions centralized in practice. We can split a monolith into microservices and keep the same coordination dependencies. We can assign clear responsibilities and still need five approvals to deploy a small change.

The formal structure is only one part of the system. The real interactions matter as much or more.

And those interactions are shaped by each participant's goals.

If one team is evaluated on minimizing costs and another on maximizing availability, their decisions can conflict even if both are made up of excellent professionals.

Asking them to collaborate better isn't enough. We have to examine the conditions that make certain decisions rational for each of them.

## Goals can erode without anyone deciding it

Meadows describes a trap called *drift to low performance*, associated with the gradual erosion of goals.

The mechanism appears when we adjust our expectations to an ever-worse performance.

Imagine a platform whose initial goal is to restore service in under thirty minutes. After several complex incidents, the team starts to consider an hour's recovery acceptable. Later, two hours.

Each adjustment can seem reasonable given the circumstances. But if the goal keeps adapting to observed performance, the system loses its pressure to improve.

The deviation stops being visible because we've moved the reference.

Something similar can happen with software quality. A team starts by accepting a small number of flaky tests. Then it learns to ignore certain pipeline failures. Later, rerunning a job becomes standard practice. Finally, the tests stop offering a reliable signal.

There was no explicit decision to abandon quality. There was a succession of local adaptations.

And each adaptation changed what the team considered normal.

This trap has an especially unsettling aspect: we can mistake our capacity to adapt for an improvement of the system.

Adapting is necessary. But not all adaptation is progress. Sometimes we simply get used to working worse.

## Success can also concentrate success

Another Meadows trap is *success to the successful*.

It appears when those who get good results receive extra resources that increase their capacity to keep getting them.

Imagine two product teams.

The first has a mature platform, test automation and relatively stable dependencies. The second maintains a legacy system with numerous integrations and operational problems.

The first team delivers faster. The organization concludes it's more productive and gives it new investment.

The second is pressed to improve its numbers, but gets few resources to reduce its structural constraints.

Over time, the gap can widen. Not necessarily because one team is better. Part of the difference can come from the starting conditions and from how resources are distributed.

The mechanism is a reinforcing loop:

**More capacity → better results → more resources → more capacity.**

That doesn't mean we should split all resources equally. There can be excellent reasons to invest more in a successful product.

The point is to recognize when a distribution of resources is amplifying differences that we later interpret as differences in merit.

Without that analysis, we risk rewarding favorable conditions and punishing structural constraints.

## Aristotle, habits and the software we end up building

In Book II of the [*Nicomachean Ethics*](https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html), Aristotle links the formation of virtues to repeated practice.

We aren't born with fully formed habits. We develop them through our actions.

The connection with organizational systems is interesting, as long as we don't confuse moral philosophy with a quantitative theory of systems.

An organization develops habits too.

How it reviews code. How it responds to incidents. How it discusses mistakes. How it decides what work deserves attention. How it treats signals that contradict its expectations.

Those practices repeat until they become part of the usual way of working.

We can declare that we value experimentation and punish every failed experiment. We can defend autonomy and demand approval for every significant decision. We can talk about continuous learning and never set aside time to learn.

In those cases, the real habits teach something different from what the principles say.

And future behavior will depend largely on what we practice repeatedly.

The connection with Meadows appears in rules, goals and feedback mechanisms.

People learn from the consequences of their actions. If an organization constantly rewards certain behaviors, it shouldn't be surprised when those behaviors become habitual.

But we shouldn't fall into determinism either. People can question the rules, resist the incentives and transform the institutions they take part in.

A system influences our decisions. It doesn't completely determine them.

## Changing the metric may change nothing

At this point, the solution seems obvious. Let's stop measuring activity and start measuring value.

But value is hard to define too.

Revenue? Retention? Satisfaction? Reliability? Risk reduction? Future capacity?

Each choice introduces new boundaries. And each boundary can generate unexpected behaviors.

If we measure only revenue, we can sacrifice quality or sustainability. If we measure only immediate satisfaction, we can avoid necessary decisions that cause short-term discomfort. If we reward the absence of incidents, we can encourage some problems not to be reported.

There is no magic metric that eliminates the incentive problem.

That's why Meadows distinguishes different levels of intervention.

Changing an indicator's target value is modifying a parameter. Changing who receives certain information modifies the information flows. Changing which decisions are allowed alters the rules. Changing what the system is trying to achieve affects its purpose. And questioning the ideas we use to define success may require revisiting our paradigms.

Not all of those interventions are equally difficult or produce the same effects. But the distinction helps explain why some reforms generate superficial changes and others transform behavior.

An organization can swap one KPI for another and keep its way of thinking intact. In that case, we'll probably end up reproducing the same problem with a different dashboard.

## The dashboard should provoke questions

We don't need to stop measuring. We need to stop treating metrics as complete answers.

A useful measure should help us investigate.

Why has this indicator improved? What behavior changed to produce that improvement? Which consequences fall outside our observation? Who benefits and who is harmed? What might be getting worse while we celebrate the result?

And, above all, what evidence would make us recognize that we're optimizing the wrong thing?

These questions are harder than setting a quarterly goal. They're also more useful.

Because the purpose of a measurement system shouldn't be to prove that everything works. It should help us discover when our interpretations are wrong.

Systems thinking doesn't offer a way to design organizations where nobody makes bad decisions. It gives us tools to understand why certain decisions become habitual, how they get reinforced and which conditions we could change.

Sometimes we'll need better indicators. Other times, better information flows. Perhaps different rules. And occasionally we'll have to question the very goal we're trying to reach.

Back to our dashboard.

Deployment frequency is up. Lead times have improved. Teams are meeting their commitments.

Everything is green.

But users still have problems.

The mistake would be to automatically conclude that the metrics are false. They can be completely correct.

**What's truly worrying is that we may have built an extraordinarily efficient organization doing something that no longer makes much sense.**

And as long as we keep confusing meeting targets with fulfilling our purpose, every quarter we can celebrate new successes.

Even as the product gets worse.

## References & Further Reading

- **Thinking in Systems: A Primer**, Donella H. Meadows, Chelsea Green Publishing, 2008. Framework for goals, information flows, feedback and system traps. A full reading of the book has not been verified: the names of the traps "drift to low performance" and "success to the successful" come from its chapter on traps, which could not be consulted directly.
- **Leverage Points: Places to Intervene in a System**, Donella H. Meadows, Donella Meadows Project. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. The hierarchy of intervention points, from parameters to paradigms.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob and Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Estimate of a minimum of 4–5% of elementary classrooms cheating each year in Chicago, and its sensitivity to incentives (read at abstract level).
- **Left Behind by Design: Proficiency Counts and Test-Based Accountability**, Derek Neal and Diane Whitmore Schanzenbach, NBER Working Paper 13293, 2007. <https://www.nber.org/papers/w13293>. Gains in the middle of the distribution and not among the least advantaged students (read at abstract level).
- **DORA's software delivery metrics: the four keys**, DORA. <https://dora.dev/guides/dora-metrics-four-keys/>. The five metrics, the finding that speed and stability are not a trade-off, and the warnings about gaming and comparisons.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, April 1968. <https://www.melconway.com/Home/Committees_Paper.html>. The original statement of Conway's Law.
- **Nicomachean Ethics, Book II**, Aristotle, trans. W. D. Ross, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. Habit as the product of repeated practice.

The references to Goodhart and to Herbert Simon (bounded rationality) are mentioned as well-known ideas and are not backed by an opened source for this article.
