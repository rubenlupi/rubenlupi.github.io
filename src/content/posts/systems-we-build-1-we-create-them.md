---
title: "Your Code Is Perfect. Your Architecture Is Brilliant. Your System Is a Mess."
description: "How excellent components can produce fragile systems: stocks, feedback loops and delays, from software engineering to Donella Meadows."
date: 2026-11-13
editorialDate: 2026-10-26   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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
tags: ["Systems Thinking", "Stocks and Flows", "Feedback Loops", "Conway's Law", "Software Engineering"]
draft: false
---

There is a particularly irritating kind of engineering disaster: the one where nobody has done anything obviously wrong.

The code has tests. The services are decoupled. The APIs are documented. The teams have clear responsibilities. Every component meets its performance targets.

And yet the system as a whole is slow, fragile and desperately hard to change.

The usual reaction is to look for the faulty part. Some badly designed service, a saturated database, a team that delivers too slowly. There is always something to optimize.

Things get interesting when we can't find that part.

Or worse: when we find it, improve it, and the problem is still there.

Donella Meadows devoted much of her work to exactly this kind of situation. Her book *Thinking in Systems* starts from an idea that seems obvious until we try to apply it: a system's behavior depends as much on its interconnections, its accumulations and its regulating mechanisms as on the elements that make it up.

It isn't an invitation to think bigger. It's an invitation to think differently.

And for someone who builds software, the difference matters quite a bit.

## A system is not a collection of parts

Imagine an e-commerce platform.

The catalog service responds in 30 milliseconds. Pricing, in 40. Inventory, in 50. Promotions, in 60.

All of them meet their targets.

The team building checkout needs to query all four to show the final price and confirm the product is available.

If the calls run sequentially, latency adds up. If they run in parallel, response time improves, but other questions appear.

What happens when a dependency fails? How long do we wait before giving up? What do we do if inventory answers but promotions doesn't? How many extra calls does each checkout request generate?

We can have four fast services and a slow checkout.

We can also have four reliable services and a checkout less reliable than any of them.

If four independent dependencies each have 99.9% availability and all are essential to complete an operation, their combined availability would be roughly:

0.999⁴ ≈ 99.6%

Independence is a significant simplification: in production there are correlated failures and recovery mechanisms. But the example makes something clear.

**The quality of the parts doesn't automatically add up to the quality of the whole.**

The relationships between components have consequences too.

Meadows distinguishes three fundamental dimensions: elements, interconnections, and function or purpose.

Elements are usually the most visible. In software they are services, databases, queues, applications and people.

Interconnections are the relationships that let the system work: calls, events, dependencies, contracts, information and decisions.

Function or purpose is what the system actually achieves, or tends to achieve.

We can replace a database without changing the overall behavior much. Changing how information flows, on the other hand, can transform the whole system.

That's why some technology migrations improve almost nothing, while changing a seemingly small dependency produces enormous results.

Not all parts have the same influence.

And not all relationships are equally important.

## The mistake of confusing motion with progress

In an excerpt from the draft of *Thinking in Systems* known as [*Bathtubs 101*](https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf), Meadows uses a bathtub to explain *stocks* and *flows*.

A stock is an accumulated quantity: water, inventory, money or pending work.

A flow is the rate at which that quantity increases or decreases.

Its basic behavior can be written like this:

New stock = current stock + (inflow − outflow)

If twenty tasks arrive each week and we finish eighteen, we accumulate two.

It doesn't matter that the eighteen were completed to an extraordinary standard.

The queue keeps growing.

[John Sterman](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) studied our ability to reason about this kind of dynamic system. In one of the exercises he describes, only 36% of MIT graduate students correctly sketched a bathtub's water level from its inflow and outflow.

In another exercise, 94% read a flow graph correctly, but only 42% and 30% got two questions about the stocks right.

The results came from exercises done in his classes; they don't describe all MIT students.

Even so, the difficulty they reveal sounds familiar.

We know how to observe activity. We struggle to understand how its consequences accumulate.

In engineering we celebrate deployments made, pull requests merged and incidents closed.

But what is happening to the backlog? To the dependencies between teams? To the cost of changing the software?

An organization can increase its delivery capacity and still keep accumulating work.

It can even increase its delivery capacity and accumulate work faster than before, if the inflow grows even more.

Activity has gone up.

So has the problem.

Here is a property of stocks that usually goes unnoticed: they have memory.

Even if today we balance inflows and outflows, the accumulation from the past remains.

If we've been piling up work for six months, matching our capacity to demand stops the queue from growing. It doesn't eliminate it.

We need to keep outflow above inflow for a while.

And that requires decisions that aren't solved by writing code faster.

## The trap of fixing what we just broke

Stocks explain how things accumulate. But they still don't explain why systems behave in such strange ways.

For that we need to understand *feedback loops*.

A feedback loop appears when the result of a process influences the conditions that produce it.

It can reinforce a behavior or counteract it.

Let's look at one that any distributed-systems engineer will recognize.

A service starts responding slowly.

Its clients have automatic retries configured. When a request exceeds the timeout, they try again.

The decision seems reasonable: a transient failure shouldn't stop an operation from completing.

But every retry generates more work.

The service, already saturated, receives even more requests. Its latency goes up. More requests exhaust the timeout. More clients retry.

We've built a reinforcing loop:

**More latency → more timeouts → more retries → more load → more latency.**

Each client tries to improve its own reliability.

The collective result can be a complete outage.

No client needs to have a bug. It's enough that they all react in a similar way to a shared dependency.

And this detail is fundamental: the problem doesn't necessarily lie in a faulty implementation, but in the interaction between individually reasonable behaviors.

We can represent the phenomenon with a very simplified model.

If λ original requests arrive per second and each failed attempt has a probability p of being retried, with no limit on retries and assuming that probability stays constant, the expected total rate of attempts would be:

Total attempts = original requests / (1 − p)

With a 50% retry probability, the expected volume doubles.

With 80%, it multiplies by five.

In production, p isn't usually constant. It can rise precisely when load rises. That dependence means the simplified model falls short of describing the real dynamics.

And that's where the danger lies.

The system can amplify its own problems.

Not because someone programmed an instruction that says "collapse", but because we've connected several reasonable decisions in a way that produces that behavior.

## Not all loops are enemies

Reinforcing loops can produce growth or accelerated deterioration.

But balancing loops exist too.

A thermostat is the classic example: when the temperature falls below a target, it turns the heating on. When it reaches the target again, it stops heating.

The result of the action reduces the gap that triggered the action.

In engineering we find similar mechanisms in control systems, in autoscaling and in Kubernetes controllers.

A controller observes the actual state, compares it with the desired state and takes actions to reduce the difference.

That logic is extraordinarily useful.

But it has a detail that complicates things.

The world doesn't respond instantly.

Suppose an autoscaler detects a rise in load and decides to create new replicas.

The replicas take time to start. Then they need to pass health checks, receive traffic and stabilize.

Meanwhile, the controller keeps observing a saturated system.

If it doesn't account for that delay, it may request more capacity than needed.

When all the replicas finally arrive, the load has already dropped. The controller starts removing them.

Soon after, it goes up again.

And the cycle repeats.

A mechanism designed to stabilize the system can produce oscillations if its reaction times, thresholds and delays are badly tuned.

This is something deeper than a configuration problem.

**The behavior depends on the relationship between the speed of our decisions and the speed at which the system can respond.**

Meadows insists on the importance of delays because they separate actions from their consequences.

In software we run into them constantly: caches that take time to update, messages waiting in a queue, replicas that need to start, data that propagates, and metrics that arrive when the problem has already changed.

We can have a correct action carried out at the wrong time.

Or a correct action repeated so many times that it ends up becoming the problem.

## Sometimes optimizing is the fastest way to make things worse

Back to the e-commerce platform.

The catalog team notices its service receives too many requests. It decides to introduce a cache.

Latency drops. The database can breathe. The metrics improve.

Good work.

Now imagine the system uses the same caching mechanism for information that changes at very different frequencies.

A product's descriptive data can tolerate some delay.

The inventory available for a purchase, perhaps not.

If we haven't defined the consistency rules properly, we may end up showing products that are no longer available.

Checkout starts rejecting operations.

Customers retry.

The extra requests increase the load on other components.

The cache improved local performance. But the global result depends on how it interacts with purchase decisions, update flows and error handling.

That doesn't mean caches are bad. It means their value depends on the behavior we want from the whole.

The same reasoning applies to technical debt.

Ward Cunningham introduced [his metaphor in 1992](https://c2.com/doc/oopsla92.html) to explain how certain decisions let us move faster now, at the price of making later changes more expensive.

Martin Fowler later distinguished, in his [technical debt quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), between prudent and reckless debt, deliberate and inadvertent.

But there is a particularly interesting systemic dimension.

Debt can generate more debt.

An architecture that is hard to change makes changes take longer. When time is limited, the temptation to use stopgap solutions grows. Those solutions can introduce new dependencies and complicate the architecture even further.

Another reinforcing loop appears:

**More complexity → costlier changes → more shortcuts → more complexity.**

It doesn't always happen. Some teams manage their technical commitments deliberately.

But when this pattern appears, increasing programming speed doesn't necessarily solve it.

We can write more code in less time and still make every future change more expensive.

The arrival of AI agents makes this question especially relevant.

If an agent can produce changes ten times faster, what happens to reviews, testing, integration, deployment and maintenance?

It will depend on how the system is built.

The extra capacity can remove an important constraint.

Or simply move the bottleneck somewhere else.

In some cases it can even increase the pressure on that new bottleneck.

It isn't enough to ask how much a tool speeds things up.

We have to ask what changes in the behavior of the whole when we introduce it.

## Everyone sees a different system

So far we've talked about services, queues and controllers.

But software systems are also made of people.

And people don't have a complete view of what we take part in.

A developer knows their service well. An architect sees the main dependencies. A Product Owner understands the product's needs. A platform lead sees operational constraints that other teams barely know about.

Each works with partial information.

Each builds a mental model of the system.

And each makes decisions that can make sense from their position.

This is one of the reasons Meadows considers information flows so important.

Having data isn't enough.

What matters is who can see it, when it arrives and what decisions it allows.

Imagine one team measures its success by its API latency.

Another by infrastructure cost.

A third by deployment frequency.

And another by checkout availability.

They can all meet their targets and still harm each other.

The infrastructure team reduces capacity to save costs. The service's latency goes up. Customers retry. The API team adds more caching. The information goes stale and checkout starts rejecting operations.

Each team tried to improve something.

Nobody deliberately designed the final result.

This kind of behavior connects with bounded rationality: we make decisions with the information, goals and capacity for understanding that we have.

It isn't an excuse for bad decisions.

It's a warning about the limits of our good ones.

And here Conway's law takes on a different dimension.

Melvin Conway [observed in 1968](https://www.melconway.com/Home/Committees_Paper.html) that system designs tend to mirror the communication structures of the organizations that build them.

It isn't simply that an org chart produces an architecture.

It's that the way information flows shapes which dependencies we see, which we ignore and which solutions seem natural to us.

If two teams barely communicate, they will hardly be able to optimize together something they don't even know they share.

We can improve their tools.

We can change their structure.

But if we don't understand how decisions are made and how information flows, we may end up reproducing the same problem under different names.

## What a system does matters more than what we say it does

Meadows distinguishes between a system's stated goals and its actual behavior.

An organization can claim it wants quality, innovation and autonomy.

But if its practices only favor immediate deliveries, short-term cost reduction and centralized approval of decisions, those practices will have consequences.

There's no need to look for a villain.

Complex systems can produce results that none of their participants want.

This also happens outside software.

[Xenophon described](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) how Spartan education was organized around the discipline and physical endurance of future male citizens.

Aristotle, in his [*Politics*](https://classics.mit.edu/Aristotle/politics.8.eight.html), explicitly linked education to the form of government.

And in the [*Nicomachean Ethics*](https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html) he developed an idea that remains relevant: we acquire habits through repeated practice.

The connection with Meadows isn't that habits are literally measurable stocks like the water in a bathtub.

It's that structures and recurring practices influence the behaviors a system ends up producing.

A school can declare that it values autonomy while offering few opportunities to make decisions.

A company can champion collaboration and organize its incentives around purely individual results.

An engineering team can claim to value simplicity and keep introducing abstractions nobody needs.

In all those cases there is a gap between the intention and the behavior that the practices favor.

And that gap deserves investigating.

Because a system doesn't need to be aware of its contradictions to reproduce them.

## The problem with our mental models

There is a fairly common temptation when we discover systems thinking: to start seeing feedback loops everywhere.

Everything seems connected. Any problem becomes a consequence of another problem. And every decision can be explained by an arrow pointing to another arrow.

That has its dangers too.

A causal diagram doesn't prove we've understood a system.

We can draw a convincing relationship that doesn't exist, ignore an important variable or confuse correlation with causation.

Real systems contain nonlinear relationships, delays, physical constraints, uncertainty and behaviors that change with conditions.

Besides, models always leave things out.

Sterman titled one of his papers *All Models Are Wrong*, echoing a well-known idea in modeling: a model doesn't need to represent all of reality to be useful, but it must be adequate for the question we want to answer.

This demands more of us.

If we believe technical debt is reducing our delivery capacity, we can study how lead times, defects, maintenance work and dependencies evolve.

If we suspect retries are amplifying an outage, we can observe request rates, errors, latencies and load before and after applying limits.

If we think our organizational structure is harming an architecture, we can examine the real dependencies between teams and the coordination times.

Systems thinking doesn't replace evidence.

It helps us ask better questions about what evidence we need.

## Giving up on improving parts is not the answer

It would be absurd to conclude that optimizing components is pointless.

An inefficient algorithm is still inefficient. A badly designed query can saturate a database. A buggy service needs fixes.

Quality engineering matters.

What Meadows makes us question is something else: our tendency to assume that improving the parts necessarily means improving the whole.

Sometimes it does.

Other times, the behavior is dominated by an interconnection, an accumulation, a delay or a feedback loop we haven't seen.

And in those cases, local excellence can turn out to be insufficient.

Even counterproductive.

Maybe the service doesn't need to respond faster, but to stop receiving unnecessary requests.

Maybe the team doesn't need to produce more changes, but to reduce the work it keeps open.

Maybe the architecture doesn't need another abstraction, but to remove a dependency.

Maybe the problem isn't who makes the decisions, but what information they have when they have to make them.

None of these answers can be deduced from a universal rule.

We have to study the specific system.

Its structure.

Its accumulations.

Its feedback mechanisms.

Its delays.

And the goals its behavior reveals.

The next time a platform performs badly, we'll probably find some part we can improve.

There always is one.

The interesting question is whether that improvement will really change the system's behavior.

Because we can have excellent code, an elegant architecture and extraordinarily competent teams.

And still keep building something that works terribly.

**What's unsettling isn't that this is possible. It's that we can spend years perfecting the parts without ever understanding why it happens.**

## References & Further Reading
- **Bathtubs 101** (excerpt from *Thinking in Systems*, draft), Donella H. Meadows, Donella Meadows Project, undated draft. <https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf>. Source of the definition of stocks, the bathtub principles and stocks as delays and buffers. A pre-publication draft, not the 2008 text.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source of the bathtub and department-store results (classroom studies, not population estimates).
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Original source of the debt metaphor quoted above.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. Source of the prudent/reckless distinction.
- **Constitution of the Lacedaimonians, ch. 2**, Xenophon, trans. E. C. Marchant, Perseus Digital Library (Loeb), 1925. <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. Primary account of Spartan boyhood education, by an admirer of Sparta.
- **Politics, Book VIII**, Aristotle, trans. Benjamin Jowett, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/politics.8.eight.html>. Education fitted to the form of government.
- **Nicomachean Ethics, Book II**, Aristotle, trans. W. D. Ross, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. Habit as the product of repeated practice, formed by legislators.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, April 1968. <https://www.melconway.com/Home/Committees_Paper.html>. The original statement of what became known as Conway's Law.
- **Conway's Law**, Martin Fowler, 2022. <https://martinfowler.com/bliki/ConwaysLaw.html>. A practitioner's overview; experiential, not empirical.
