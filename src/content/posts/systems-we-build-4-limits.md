---
title: "We Design for the Perfect Day. We Live in the Real World."
description: "Why pushing utilization to the limit can destroy resilience: queueing theory, buffers, redundancy, backpressure and adaptive capacity through systems thinking."
date: 2026-11-13
editorialDate: 2026-10-26   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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
topics: ["Systems & Organizations", "Software Engineering"]
tags: ["Systems Thinking", "Resilience", "Queueing Theory", "Buffers", "Platform Engineering"]
draft: false
---

The system is running at 98% of its capacity.

Infrastructure is pleased. We've removed underused servers, consolidated services and cut costs. Every euro seems to be working. The dashboard is green.

Then traffic rises by 15%.

Latency shoots up. Queues grow. *Timeouts* cause retries and retries generate more traffic. The system that looked extraordinarily efficient a few minutes ago starts to fail.

Someone proposes adding capacity.

But that is exactly the capacity we just removed.

**We design for the perfect day. We live in the real world.** And in the real world there is variability, errors, dependencies that slow down, people who fall ill, suppliers who run late and users who don't behave like our averages.

The question isn't whether we should be efficient. It's what we are sacrificing when we confuse efficiency with permanent busyness.

## Being busy doesn't mean producing value

Imagine a service that can process 100 requests per second. If it receives 50, its utilization is 50%. If it receives 90, it reaches 90%. It seems logical to think the second scenario makes better use of the infrastructure.

But what happens to response time?

A basic queueing-theory model, [**M/M/1**](https://en.wikipedia.org/wiki/M/M/1_queue), lets us study the relationship. It assumes Poisson arrivals, exponential service times and a single server. It isn't a faithful description of a modern distributed platform, but it shows an important mechanism.

If the arrival rate is λ and the service capacity is μ, utilization is:

ρ = λ / μ

And, as long as λ < μ, the average time spent in the system, including waiting, is:

W = 1 / (μ − λ)

With a capacity of 100 requests per second:

| Traffic | Utilization | Average time in the system |
|---|---:|---:|
| 50 requests/s | 50% | 20 ms |
| 80 requests/s | 80% | 50 ms |
| 90 requests/s | 90% | 100 ms |
| 95 requests/s | 95% | 200 ms |
| 99 requests/s | 99% | 1,000 ms |

Going from 90% to 99% utilization multiplies the average response time by ten **in this model**. We haven't multiplied traffic by ten: we've used up nine more points of capacity.

The relationship is nonlinear. When a resource approaches its limit, small variations can produce disproportionate consequences.

Real systems have several servers, different load distributions, priorities and scaling mechanisms. We can't use that table to directly predict Kubernetes latency. But we can use it to dismantle a dangerous intuition: **free capacity isn't necessarily wasted capacity**.

## The queue is where we hide the problem

In *Thinking in Systems*, Donella Meadows distinguishes *stocks*, which are accumulations, from *flows*, which increase or reduce them.

A queue is a stock. Work comes in at one rate and goes out at another.

Change in the queue = inflow rate − effective outflow rate

If 1,200 messages per second come in and we can only process 1,000, we accumulate 200 every second. In ten minutes, if the rates hold, there will be 120,000 additional messages pending.

Enlarging the queue can be useful. It lets us absorb temporary spikes and decouple components that work at different paces. But it doesn't fix a persistent gap between input and output.

We can increase retention, buy more storage and build an excellent dashboard on the queue's size. As long as more messages keep coming in than going out, the accumulation will grow.

Sometimes a buffer makes the system look stable precisely because it is storing the problem for later.

The question we should ask isn't just "how much pending work do we have?", but "what mechanism will make it stop growing?".

## Empty space works too

Meadows identifies the size of buffers relative to their flows as one of the [places to intervene](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) in a system. A reservoir stores water to compensate for differences between supply and consumption. An inventory lets us keep selling when a delivery is late. A capacity reserve lets us absorb a variation in demand.

That margin has a price. Servers cost money. Inventory ties up capital. Large buffers can hide problems and delay the signals we need to correct them.

That's why the conclusion can't be "the more buffer, the better".

The decision depends on the variability we expect, the cost of failure, the time needed to recover capacity and the alternatives available to reduce demand.

A platform that can provision resources in seconds needs different reserves from a factory that takes six months to install a machine. An internal service that tolerates interruptions can take risks that a payments platform shouldn't accept.

Resilience has no universal percentage. **It's a design decision based on consequences**.

## Ten engineers, not a single free hour

Now let's move the problem to an organization.

A team of ten engineers has tasks assigned for the whole week. Every calendar is full. Management celebrates that capacity is perfectly used.

On Tuesday an incident appears. Two people drop their tasks. A dependency planned for Wednesday gets blocked. Another team, which was waiting for that delivery, reshuffles its priorities. A problem that needed four hours of work ends up generating days of distributed waiting.

Nobody has worked too little. In fact, everyone is busy.

But individual busyness and the flow of value are different things.

A task can need two hours of execution and spend eight days waiting for someone to be available. If we only measure hours worked, that wait is almost invisible.

Variability and dependencies turn extreme utilization into a coordination problem. A system with no margin to absorb interruptions can look productive until the first one arrives.

This doesn't mean a team should arbitrarily reserve half its time either. It means we should observe utilization, cycle time, work in progress, blockers and responsiveness at the same time.

**A full calendar can be a sign of local efficiency and global fragility.**

## We can also spend the reserve without touching infrastructure

A team's capacity to adapt erodes in another way: by systematically postponing the work that prevents future problems.

First we postpone a refactoring. Then a dependency upgrade. Later we accept flaky tests. Each decision frees up time for immediate delivery.

As months go by, tests take longer, changes require manual checks and deployments generate uncertainty. The team keeps working, but needs more effort to achieve similar results.

Ward Cunningham [used the metaphor of technical debt](https://c2.com/doc/oopsla92.html) to explain how certain implementation decisions can generate future interest. Here another consequence matters: debt can reduce our capacity to react to the unexpected.

If every change is risky, fixing an incident costs more. If the tests aren't reliable, validating a repair takes longer. If only one person knows a critical dependency, their absence can become a bottleneck.

Resilience also depends on how much we can change the system when conditions change.

And that capacity can disappear silently while the delivery indicators stay green.

## Three replicas are not three chances to survive

In distributed systems we use redundancy to tolerate failures: multiple instances, data replicas, availability zones and alternative routes.

Redundancy looks like waste if we assume nothing will fail. Why pay for resources we may never need?

Because the goal may be to keep the service running when a part stops working, not to minimize cost in the absence of incidents.

But adding copies doesn't guarantee resilience either.

Three instances that depend on the same database can fail together. Two data centers that share a critical dependency can suffer a common failure. Replicating corrupted data can spread the problem instead of solving it.

The question isn't how many copies we have. It's **which failures can happen independently and which share a common cause**.

Here we return to Meadows' interconnections. We can duplicate components and leave the fragility of the whole intact. Or we can reduce shared dependencies, introduce isolation and let one part fail without dragging down the rest.

The difference doesn't lie only in the amount of resources. It lies in the structure.

## A resilient system knows how to refuse work

There is an idea that makes many product teams uncomfortable: under certain conditions, accepting more work makes the outcome worse for everyone.

When a saturated service accepts every request, queues grow. Latency rises. Some operations exceed their timeouts and clients retry. The load is amplified. It's the mechanism we explored in the second article.

We can intervene through (as Google describes in its [chapter on overload](https://sre.google/sre-book/handling-overload/) and the one on [cascading failures](https://sre.google/sre-book/addressing-cascading-failures/)) *rate limiting*, *load shedding*, *backpressure* and *circuit breakers*.

They aren't synonyms. *Rate limiting* restricts the admitted rate; *load shedding* drops work to protect the system; *backpressure* pushes pressure back toward the producers; and a *circuit breaker* can temporarily suspend calls to a degraded dependency.

All of them have costs. Rejecting requests harms specific users, and a badly designed policy can drop precisely the most important operations.

But they acknowledge a reality: capacity is finite.

An online store could prioritize completing purchases over generating personalized recommendations. A content platform could serve a cached version while a secondary dependency recovers.

Controlled degradation can be preferable to a total outage.

And that decision isn't only technical. Someone has to decide what to preserve when we can't preserve everything. **Architecture ends up expressing product priorities**.

## Efficiency can move the risk somewhere else

Think of a supply chain that cuts inventory to reduce costs. The decision improves a financial indicator, but increases dependence on frequent, punctual deliveries.

If a supplier runs late, production can stop. The company then demands faster deliveries; the supplier reduces its own reserves to keep prices competitive. Each participant optimizes its costs and the whole can become more vulnerable.

It isn't a universal criticism of lean-inventory strategies. They can work well when designed with variability, reliability and responsiveness in mind.

The problem appears when we celebrate removing a reserve without asking what risk it was absorbing.

In software something similar happens. We consolidate services to save money, but create shared dependencies. We centralize capabilities to simplify operations, but concentrate the impact of failures. We reduce instances because their average utilization is low, though that free capacity may have been absorbing important spikes.

The saving is visible immediately. The displaced risk can take months to show up.

A local improvement can be a transfer of cost to a part of the system that our dashboard doesn't observe.

## Surviving also means being able to change

Meadows gives special importance to the capacity for self-organization: the possibility that a system generates new structures and changes its own ways of working.

In engineering, a useful analogy is adaptive capacity.

Can we deploy a fix without coordinating ten teams? Can we roll back a change? Do we know our critical dependencies? Can we experiment without putting the whole platform at risk? Do engineers have enough information to make decisions when something unexpected appears?

An architecture can withstand known failures and still be extraordinarily rigid in the face of new conditions.

The same goes for an organization. If we remove all the time for learning, experimenting, documenting and improving, we may increase immediate delivery. We may also be reducing our capacity to respond to the next problem.

Not every space without assigned tasks is waste. Part of that margin lets us learn and reorganize.

Resilience isn't only about taking hits. It's also about **keeping options open when the environment changes**.

## How much does being efficient really cost?

Imagine two hypothetical platforms.

The first costs 100 units a month. It operates close to its maximum capacity and has few reserves.

The second costs 120. It keeps extra margin, isolation between dependencies and controlled-degradation mechanisms.

For six months no major incident occurs. The first seems superior: it offers a similar service for less money.

In the seventh month a shared dependency fails. The first takes hours to recover. The second keeps its essential operations running.

Which one was more efficient?

We can't answer without knowing the probability of incidents, their impact, the cost of the reserves and the available alternatives. And that is exactly what is missing when we evaluate efficiency only under normal conditions.

Expected cost can help us reason, but it doesn't remove uncertainty. Rare events are hard to estimate and correlated failures can invalidate comfortable assumptions.

Systems thinking doesn't provide a magic utilization percentage either, nor does it prove that more redundancy is always better. It forces us to widen the boundary of the analysis.

Are we optimizing the cost per request on a quiet Tuesday? Or the cost of sustaining the service over time, including failures, recovery, maintenance and adaptive capacity?

Those are different problems.

## The question we should ask before optimizing

The next time someone proposes removing a reserve, increasing utilization or shrinking a team to the bare minimum, there's no need to reject the proposal.

We need to ask what function that margin served.

What variability did it absorb? What dependencies did it protect? How long would it take us to get it back? What would fail first if demand grew? What work could we postpone? What learning capacity would we lose?

If the answers show that the margin doesn't provide enough value, removing it can be a good decision.

But if nobody can answer, we may be about to sell an insurance policy whose risk we haven't even calculated.

Efficiency matters. Without it we waste resources we could devote to other needs. But pursuing it without understanding the system's mechanisms can destroy precisely what we wanted to protect.

We don't design software so that a dashboard looks good on the perfect day.

We design it so people can keep doing what they need when conditions change.

**And the real world always ends up changing the conditions.**

## References & Further Reading

- **Thinking in Systems: A Primer**, Donella H. Meadows, Chelsea Green Publishing, 2008. Conceptual framework for stocks, flows, reserves, interconnections and self-organization. A full reading of the book has not been verified; the ideas about buffers and self-organization rest on the essay below.
- **Leverage Points: Places to Intervene in a System**, Donella H. Meadows, Donella Meadows Project. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Buffer size relative to flows and self-organization as points of intervention.
- **M/M/1 queue**, Wikipedia. <https://en.wikipedia.org/wiki/M/M/1_queue>. Model assumptions, utilization and average time in the system (secondary source).
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Origin of the technical-debt metaphor.
- **Handling Overload**, Site Reliability Engineering, Google. <https://sre.google/sre-book/handling-overload/>. Load shedding by priority, degraded responses, client-side limits and bounded retries. A company's practice.
- **Addressing Cascading Failures**, Site Reliability Engineering, Google. <https://sre.google/sre-book/addressing-cascading-failures/>. Overload as the most common cause of cascading failures, load shedding and retry budgets. A company's practice.

The queueing-theory numbers are illustrative and depend on the assumptions of the M/M/1 model. The platform and team scenarios are hypothetical, not documented incidents.
