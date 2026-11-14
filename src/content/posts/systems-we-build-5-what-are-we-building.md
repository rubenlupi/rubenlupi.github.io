---
title: "We Are Experts at Improving Things We Should Never Have Built."
description: "The closing article of the series on Thinking in Systems: why optimizing components and parameters isn't enough when rules, goals and mental models keep the wrong problem alive."
date: 2026-11-13
editorialDate: 2026-10-26   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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
tags: ["Systems Thinking", "Leverage Points", "Organizational Design", "Platform Engineering", "Mental Models"]
draft: false
---

At nine in the morning, the platform team meets to solve a problem that has been chasing it for months.

Deployments are too slow.

The first proposal is to increase the *pipeline*'s resources. The second, to run more tests in parallel. The third, to reduce the mandatory checks. The fourth, to bring in a new automation tool.

Any of them might work.

But nobody has asked why a ten-line change needs to go through twelve systems, three teams and five approvals to reach production.

We're devoting an extraordinary amount of talent to perfecting a process whose existence we've stopped questioning.

And maybe that is one of our greatest skills as an industry: **we are experts at improving things we should never have built**.

That doesn't mean every complex system is unnecessary, or that we can erase years of decisions with a clever question. It means that when something works badly, we usually look first for how to make it work better. Much later we ask why it works that way, who decided it should, and what goal it is really serving.

This is the last article in a series on Donella Meadows' *Thinking in Systems*. The previous four explored interconnections, feedback, metrics and resilience. We're left with the most uncomfortable question: **where do we intervene to change a system's behavior and not just its symptoms?**

## The trap of always looking for a parameter

An API responds slowly. We add memory.

A team delivers late. We adjust the sprint size.

A *pipeline* takes twenty minutes. We double the runners.

An organization has coordination problems. We create a meeting.

These are interventions on parameters: quantities, thresholds, frequencies, capacities. Many are useful. Some solve the problem completely.

Donella Meadows didn't claim that changing parameters was useless. In her essay [*Leverage Points: Places to Intervene in a System*](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) she proposes twelve places to intervene, ordered roughly by their potential for transformation. Numbers appear among the points of least relative influence; rules, goals and paradigms, among the deepest.

The list is a **heuristic**, not a predictive law. Meadows warns that its order is tentative. We can't deduce that changing a rule is always better than enlarging a server. If the CPU is saturated by a legitimate load, adding capacity can be exactly the right thing.

The distinction is a different one: **a parameter changes how much we do of something; a structural intervention can change what we need to do**.

Back to the *pipeline*. Maybe it takes twenty minutes because every service runs all the integration tests. Maybe it runs them because nobody knows the dependencies precisely. Maybe nobody knows those dependencies because teams were organized around technical functions and architecture decisions were distributed without clear responsibilities.

Doubling the runners can cut the time from twenty to twelve minutes. It's a real improvement.

But identifying which changes affect which contracts, reducing coupling and redesigning the validation flow could make a good part of the work unnecessary.

We've stopped speeding up the queue. We've started asking why it exists.

## Architecture is also a structure of decisions

In engineering we usually draw boxes and arrows to represent systems.

The boxes are services, databases, queues and applications. The arrows are calls, events and dependencies.

But an architecture also contains decisions: who can change what, what must be coordinated, what information is available and which errors propagate.

Imagine a purchase operation that depends on eight synchronous calls. Each service has its own indicators, its deployments and its team. We can optimize them individually. We can improve the latency of each call.

Even so, the operation will still depend on all the critical pieces responding within the expected time.

If eight dependencies were independent and each had 99.9% availability, the approximate probability that all of them were available would be:

0.999⁸ ≈ 99.2%

It's an illustrative calculation, not an estimate of real availability: failures can be correlated, dependencies can have alternative routes and the definition of the operation's availability matters. But it shows something relevant: **the reliability of each component doesn't automatically equal the reliability of the whole experience**.

We can keep raising the individual availability of the eight services. Or we can ask whether the operation really needs eight critical dependencies.

That question alters the structure of the system.

The same goes for the organization. Hiring more people can increase execution capacity, but not necessarily the speed of a process that demands sequential approvals. If each team waits for the next, we may be adding work to the same bottleneck.

The org chart and the architecture aren't identical, but the interactions between teams shape what we can build. [Melvin Conway's](https://www.melconway.com/Home/Committees_Paper.html) original observation remains useful precisely because it forces us to look at communications, not just components.

## Changing the information changes the decisions

Among Meadows' points of intervention is the structure of information flows.

It sounds less spectacular than a new architecture, but it can transform a system.

Imagine a team that maintains an API. Its dashboards show latency, errors and resource consumption. Everything is reasonably fine.

What it doesn't see is that users abandon their purchase because the API returns a technically correct status that the interface interprets confusingly.

The team can spend weeks shaving ten milliseconds off latency without improving the customer's experience.

It doesn't lack data. It lacks **the connection between its decisions and their consequences**.

Now imagine the team can observe, alongside its technical metrics, the completion rate of the operation and the main reasons for abandonment. We haven't changed its capacity or hired anyone. We've changed what it can know before deciding.

The intervention doesn't guarantee a good decision. But it makes it possible to ask questions that didn't even appear before.

There's a risk: turning that new information into another rigid KPI and reproducing the problem from the third article. Indicators also influence behavior. That's why it matters who interprets them, what context accompanies the numbers and what consequences the decisions they provoke have.

A dashboard should help us discover when our model of the world is wrong. Not merely certify that we're following the plan.

## Rules have more power than they seem

Think of an organization that claims to value quality and sustainability.

Every quarter, however, teams must commit all their capacity to features. Preventive maintenance, test improvement and reducing manual work compete with visible deliveries.

When pressure appears, those tasks vanish from the plan.

We can organize workshops on quality. We can create a committee. We can ask engineers to be more responsible.

But if the planning rule keeps rewarding only immediate deliveries, the organization will tend to repeat the behavior.

Nelson Repenning and John Sterman studied this kind of dynamic in [*Nobody Ever Gets Credit for Fixing Problems that Never Happened*](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf). Their work describes how pressure to produce can displace improvement effort, erode capability and provoke new pressures. It isn't a universal proof about any team: it rests on case studies and system dynamics models.

One possible intervention is to protect improvement capacity through an explicit rule, rather than trusting it to survive the quarter's priorities.

But a rule is only real if it can survive the first conflict.

If we say protected time exists and cancel it every time there's a delivery date, we haven't changed the system. We've changed its presentation.

The difference between a principle and a rule appears when following it costs something.

## And then we get to the goal

Rules matter, but someone decides what they exist for.

A platform can have reducing cost per transaction as its goal.

Another can prioritize availability under failure.

An organization can pursue maximum delivery frequency.

Another, the ability to learn quickly what its users need.

These aren't necessarily incompatible goals. But when they conflict, the decisions reveal which one dominates.

Meadows places a system's purpose among the points of greatest influence. If what the system is trying to achieve changes, many decisions can change without anyone ordering them one by one.

Think of a platform team whose success is measured by the adoption of its internal product.

It can spend resources convincing other teams to migrate, add features to widen its coverage and set standards that increase its use.

But what happens if the product doesn't really reduce developers' effort?

Adoption can grow while the organization's total work grows too.

Now let's change the question: what do we want to achieve with the platform?

Perhaps it's reducing the time needed to take a safe change to production. Perhaps lowering the cognitive load each team needs to operate its software. Perhaps letting teams solve business problems without rebuilding the same capabilities.

Those purposes don't remove the need for metrics. They require choosing metrics that let us question the product, including its very existence.

If a platform doesn't fulfill its purpose, the answer doesn't have to be a new version.

It can be simplifying it, changing its boundaries or ceasing to build it.

## The paradigm is the part we almost never discuss

Meadows places paradigms, the mental models from which we interpret reality, near the top of her list.

A paradigm isn't a Kubernetes configuration. It's an idea we take for granted.

For example:

- If a resource isn't busy, it's wasted.
- If a team produces more code, it's more productive.
- If something is complex, we need another layer of abstraction.
- If a problem repeats, we need more control.
- If a platform has low adoption, we need to push its adoption.

They aren't always false statements. The danger appears when we stop treating them as hypotheses and start using them as unquestionable truths.

The fourth article showed why extreme utilization can increase waiting times and reduce the margin to absorb variability. The third explored how metrics can become goals that distort behavior. The second showed how well-intentioned interventions can amplify a degradation. The first reminded us that a system's properties emerge from its interconnections, not just from the quality of its parts.

All those ideas challenge the same habit: **assuming that improving each part equals improving the whole**.

But we shouldn't turn systems thinking into a paradigm immune to criticism either. John Sterman reminds us in [*All Models Are Wrong*](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) that models depend on their assumptions and on the boundaries we choose. A causal diagram can suggest a mechanism; it doesn't prove by itself what caused an incident, nor predict when it will recur.

Humility isn't a philosophical ornament. It's a condition for learning.

## Not every problem needs a revolution

There's a temptation after reading Meadows: to consider deep changes always superior to incremental improvements.

That would be a mistake.

If a database is badly indexed, maybe we need an index.

If a *timeout* is configured wrongly, maybe we should fix it.

If a dependency fails because of a specific defect, maybe fixing that defect is enough.

There's no merit in redesigning an organization to avoid a simple fix.

The point is to tell apart a one-off failure from a recurring behavior produced by the structure.

We can investigate that difference with verifiable questions:

**What do we expect to change?** Not just the immediate metric, but the behavior over time.

**What mechanism explains the problem?** Do we have data to back it up, or just a convincing story?

**What secondary consequences do we expect?** Where can the cost shift?

**What observation would refute our hypothesis?** If no evidence can, perhaps we aren't investigating.

**Who can really change the rules?** And who will bear the costs of doing so?

These are less showy questions than announcing a transformation.

They're also harder to answer with a presentation.

## An experiment beats another reorganization

Imagine an internal platform that accumulates delays because all changes need review from a central team.

The usual explanation is that the team has little capacity.

The usual solution is to hire more reviewers.

Before doing so, we could test a different hypothesis: the bottleneck exists because the system concentrates decisions that could be made safely elsewhere.

For a limited period, we select a set of low-risk changes and define clear criteria so teams can approve and deploy them without central review. We keep automated controls, traceability and rollback mechanisms. We reserve specialist review for changes that really need it.

We aren't removing responsibility. We're changing where it is exercised.

Before starting, we would record what we expect to observe: shorter waiting time, fewer interruptions for the central team and no unacceptable degradation of security or reliability.

We would also record what would make us stop the experiment: incidents attributable to the new rule, increased rework or load shifting to other teams.

If it works, we'll have changed a rule of the system.

If it doesn't, we'll have information to revise our model.

And if we discover that central review exists to compensate for an architecture that is hard to understand, we may need to intervene even further down, at the causes: contracts, dependencies, boundaries of responsibility and product design.

The idea isn't to always find the deepest intervention. It's to **stop confusing the most available intervention with the most appropriate one**.

## Who can change the rules of the game?

Here systems thinking meets a political question, even though we're talking about software.

Rules don't appear on their own.

Someone decides who can deploy, which metrics count, which risks are acceptable, how the budget is allocated and which problems deserve attention.

And those decisions distribute power.

Meadows points out that [power over the rules is real power](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/). But recognizing it doesn't resolve how to negotiate between legitimate, conflicting goals.

The security team may want more controls. Product may need speed. Operations may prioritize stability. Finance may demand cost reductions.

No perspective should prevail simply because its representative has the most convincing dashboard.

We need to make the trade-offs, dependencies and consequences visible. And we need people accountable who can decide, explain their decisions and revise them when the evidence contradicts them.

Saying "the system made us do it" doesn't remove the responsibility of those who design, maintain or can change that system.

A systemic explanation should widen our capacity to act, not serve as an alibi.

## What we're left with after five articles

We began this series with a provocation: your code can be excellent and the system a mess.

Then we saw that trying to save a service can help bring it down, that measuring everything doesn't guarantee measuring what matters, and that designing for the perfect day leaves us vulnerable to the real world.

Now a conclusion appears that is less comfortable than any list of best practices.

We can be very good at solving the problems in front of us and still be devoting our best efforts to preserving structures we should question.

We can speed up a *pipeline* that shouldn't need so many checks.

We can perfect an approval process that shouldn't intervene in every change.

We can optimize a platform that adds more complexity than it removes.

We can build impeccable dashboards for goals that have stopped mattering.

None of that means the work done is useless. The constraints are real, earlier decisions had their contexts and there isn't always a simple alternative.

But precisely because building and maintaining systems costs so much, we should reserve part of our capacity to question their foundations.

Meadows doesn't hand us a formula for identifying the right solution. She offers us a vocabulary for observing accumulations, flows, delays, loops, rules and goals. And she reminds us that our representations of reality are always incomplete.

Perhaps an engineer's most valuable gesture isn't to add a new piece, speed up another operation or automate one more task.

Perhaps it's to ask a question that interrupts a meeting full of technically brilliant solutions:

**"Before we improve it again, are we sure this should exist like this?"**

Because there are problems that get solved by optimizing.

And there are others we only begin to solve when we stop defending what we built.

## References & Further Reading

- **Thinking in Systems: A Primer**, Donella H. Meadows, Chelsea Green Publishing, 2008. Conceptual framework for the series. This article rests on Meadows' public essays and complementary research; it does not claim to verify a full reading of the book.
- **Leverage Points: Places to Intervene in a System**, Donella H. Meadows, Donella Meadows Project. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. The list of twelve points of intervention, which the author calls tentative, and the sentence on power over the rules.
- **All Models Are Wrong: Reflections on Becoming a Systems Scientist**, John D. Sterman, System Dynamics Review, 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. The limits of models and of their assumptions.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Pressure, process improvement and the capability trap; case studies and models, not a universal proof.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, April 1968. <https://www.melconway.com/Home/Committees_Paper.html>. The influence of communication structures on the systems designed.

The team and platform scenarios and the availability calculation are illustrative, not documented cases.
