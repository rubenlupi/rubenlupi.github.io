---
title: "The System Didn't Go Down. We Took It Down Trying to Save It."
description: "How retries, delays and local fixes can turn a recoverable degradation into a systemic failure."
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
topics: ["Systems & Organizations", "Software Engineering"]
tags: ["Systems Thinking", "Feedback Loops", "Distributed Systems", "Resilience", "Delays"]
draft: false
---

At 10:17, the payments service starts responding slowly.

It isn't down. It still processes transactions, though some requests that used to take 200 milliseconds now take several seconds.

The clients have automatic retries. When a request exceeds the timeout, they send it again.

The platform team spots the saturation and adds replicas. The payments team raises the *timeouts* to avoid unnecessary errors. Another team increases the number of available connections.

Every one of these decisions is technically defensible.

At 10:24, the service stops responding.

We fixed it until it broke.

This incident is fictional, though the mechanisms it describes are real. And it helps explore one of Donella Meadows' most uncomfortable ideas: an intervention can make a system worse because it changes the system's behavior in a way we hadn't foreseen.

The problem is that we usually analyze solutions as if the system were going to stand still while we apply them.

It doesn't.

## The problem wasn't the timeout

Back to the payments service.

It usually receives 800 requests per second. Under normal conditions it can process about 1,000.

Suddenly a dependency starts responding slowly. Operations stay open longer and concurrency rises.

Clients begin to experience *timeouts*.

Someone proposes raising the timeout from two to five seconds.

It makes sense. If the service needs three seconds to respond, giving up at two generates errors that could be avoided.

But waiting has a cost too.

While an operation stays open, it can consume connections, memory, execution capacity and other resources.

[Little's Law](https://pubsonline.informs.org/doi/10.1287/opre.9.3.383) describes a fundamental relationship between the average number of operations in a system, their effective rate and the average time they spend in it:

L = λ · W (concurrent operations = effective rate × average time in the system)

If a stable system completes 800 operations per second and each spends an average of 200 milliseconds in it, there are about 160 concurrent operations.

If that average time rises to two seconds, with the same effective rate, average concurrency goes to 1,600.

Ten times more.

This doesn't mean raising a *timeout* necessarily multiplies concurrency. It depends on how the operations behave and which resources they hold while they wait.

What matters is that time is part of capacity consumption.

An intervention designed to reduce errors can increase the pressure on the very resources that cause those errors.

And then a different question appears.

Are we fixing the problem, or changing the conditions that feed it?

## The system also responds to our responses

In *Thinking in Systems*, Meadows explains that much of the dynamic behavior of systems arises from their feedback mechanisms.

A *feedback loop* exists when a variable influences itself, directly or indirectly, through other variables.

There are two broad families.

**Reinforcing loops** amplify changes. They can drive growth or speed up deterioration.

**Balancing loops** counteract deviations and tend to stabilize some variable around a target.

These aren't moral categories. A reinforcing loop can be desirable and a balancing one can block a necessary change.

In our payments service, a reinforcing loop appears:

**More latency → more timeouts → more retries → more load → more latency.**

Each client tries to protect its own operation.

None of them needs to have a programming error.

But the collective behavior can destroy the very availability they are all trying to preserve.

We can represent the amplification with a simplified model.

Suppose λ original operations arrive per second and each attempt has a constant probability p of generating another attempt.

With unlimited retries, the expected number of attempts per operation is:

1 + p + p² + … = 1 / (1 − p)

Therefore:

Total attempts = original operations / (1 − p)

If p = 0.5, the expected volume of attempts doubles.

If p = 0.8, it multiplies by five.

In production, that probability isn't usually constant. It can rise precisely when the service saturates. There are also retry limits and time distributions that this model doesn't take into account.

We aren't predicting an outage with a simple equation.

We're identifying a mechanism that can amplify one.

And that changes the investigation.

Instead of asking only why the service is slow, we start asking what the system itself is doing to become even slower.

## The autoscaler doesn't know it's arriving late

The platform team decides to add capacity.

Utilization has gone up and the autoscaler requests new replicas.

In principle, we're introducing a balancing loop:

**More utilization → more replicas → more capacity → less utilization.**

But replicas don't appear instantly.

They have to be scheduled, containers have to start, dependencies have to initialize, health checks have to pass and traffic has to begin to arrive.

Meanwhile, the controller keeps observing a saturated system.

If the configuration doesn't sufficiently account for that delay, it may request more capacity than needed.

When all the replicas finally arrive, the load may already have dropped.

The controller starts removing them.

Soon after, demand goes up again.

And the cycle repeats.

[Stabilization mechanisms](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/), cooldown periods, scaling limits and the choice of metrics exist precisely to prevent these situations.

A well-configured controller doesn't have to oscillate.

But the example shows why Meadows considers delays a fundamental property of systems (in [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) she links them to overcorrection and oscillation).

A *delay* separates an action from its consequences.

If we react repeatedly before an intervention has taken effect, we can correct too much.

If we wait too long, the problem can grow beyond our capacity to respond.

The behavior depends on the relationship between the speed of our decisions and the speed at which the system can change.

Having a good solution isn't enough.

We also need to apply it at the right moment and observe its effects for long enough.

## When everyone is right and the system loses

Now imagine three teams get involved.

The first is responsible for the clients. Its goal is to reduce errors visible to users.

It configures more retries.

The second manages the platform. Its goal is to keep infrastructure utilization efficient.

It adjusts the scaling thresholds.

The third maintains the payments service. Its goal is to complete as many operations as possible.

It extends the *timeouts* and the number of connections.

Each team has a reasonable explanation for its decisions.

But none of them controls the complete behavior on its own.

The first increases demand during failures.

The second responds with capacity that takes time to become available.

The third lets operations stay open for longer.

The outcome depends on how those decisions interact.

Here an essential idea of systems thinking appears: **local rationality doesn't guarantee a desirable global outcome**.

It doesn't mean people lack responsibility.

It means that judging a decision only from the perspective of whoever makes it can be insufficient.

The team that configures retries should know the impact it can have on its dependencies.

The person responsible for the platform should understand the reaction times of its scaling mechanisms.

The payments team should know which resources an operation holds while it waits.

And everyone needs information about the combined behavior.

Because a decision can be right with respect to a local goal and harmful with respect to the system's goal.

## The trap of relieving the symptom

Meadows describes several recurring traps in systems.

One of them is *shifting the burden*: moving the responsibility for solving a problem toward a symptomatic solution.

The mechanism appears when an intervention temporarily reduces the symptoms but leaves the underlying cause intact.

Over time, that intervention can become the usual response.

Imagine a platform where services saturate periodically.

Every time it happens, we add capacity.

The intervention works. Latency drops and the alarms go quiet.

But perhaps the underlying problem is that every business operation generates too many internal calls, that the queries are inefficient or that there's a shared dependency that can't scale.

Adding replicas can be a perfectly valid decision. Sometimes it's the right solution.

The trap appears when the immediate relief reduces the incentive to investigate the mechanism that produces the saturation.

The system keeps working thanks to ever more expensive interventions.

And the original cause remains.

It's not hard to recognize a similar pattern in organizations.

A team accumulates a backlog.

The response is to ask for overtime.

The queue shrinks temporarily.

But if the rate of incoming work keeps exceeding sustainable capacity, the work piles up again.

We repeat the intervention.

Over time, overtime stops being exceptional.

It becomes part of the expected way of working.

The temporary solution has changed the system's conditions.

Now we depend on it.

What's unsettling about this trap is that the intervention can genuinely work.

That's precisely why it's so easy to repeat.

## Resistance doesn't always come from people

Another trap described by Meadows is *policy resistance*: the resistance that arises when different actors try to push a system toward incompatible goals.

Think of a shared platform.

The infrastructure team wants to reduce costs.

The product teams want to minimize latency.

Security wants to limit permissions and connections.

Operations wants to increase stability.

Each goal can be legitimate.

But the interventions can cancel each other out.

Infrastructure reduces capacity to control spending.

The product teams introduce caches and recovery mechanisms to make up for the lost performance.

Security restricts certain connections, which changes the communication paths.

Operations adds new checks and procedures to control the risk.

The result can be a system more complex, expensive and hard to operate than the original.

Not because one of the goals is wrong.

But because the actors are trying to regulate different variables through mechanisms that interact.

Meadows puts forward a counterintuitive idea: in certain situations, increasing the pressure to reach a goal can intensify the system's resistance.

The alternative requires understanding what each participant is trying to achieve and looking for structures that reduce the conflicts between goals.

That doesn't eliminate the hard decisions.

Quite the opposite.

It forces us to make explicit the trade-offs that used to stay hidden between teams.

## More control can produce less control

There's a paradox that often appears in engineering.

When a system becomes unpredictable, we add control mechanisms.

More checks. More retries. More alerts. More automation. More policies. More controllers.

Each mechanism can be useful on its own.

But it also introduces states, dependencies, conditions and possible interactions.

One controller can change a variable another controller is trying to stabilize.

A recovery policy can trigger a protection mechanism that causes new errors.

An alert can trigger an automatic intervention that changes the conditions the alert was calculated on.

The problem isn't automation.

It's that we're building systems that react to themselves.

And the more mechanisms interact, the more important it becomes to understand their combined dynamics.

In some cases, the solution may be to add a new mechanism.

In others, to remove one.

A good design isn't necessarily the one with the most controls.

It's the one that achieves the desired behavior with mechanisms we can understand, observe and maintain.

## What we should have done at 10:17

Back to the initial incident.

The payments service starts responding slowly.

What would have been different if we had analyzed the system as a set of loops and accumulations?

First, we would have separated the original demand from the traffic amplified by retries. Without that distinction, a requests-per-second graph can mislead us: it shows more load, but doesn't explain how much traffic the recovery mechanism itself has generated.

Then, we would have looked at concurrency, the time operations stay open, queue sizes and the saturation of dependencies. CPU alone isn't enough to explain a service that is waiting for connections or remote responses.

We would also have checked which interventions were already in motion. How many replicas had been requested but weren't ready yet? Were configuration changes still propagating? Were clients synchronizing their retries? A metric taken during the transition can describe a system that no longer exists by the time we decide to act.

The possible measures are well known: retry limits, *exponential backoff* with [*jitter*](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/), retry budgets, *circuit breakers*, *load shedding*, *backpressure* and explicit concurrency limits. None is a universal recipe. For example, a badly tuned *circuit breaker* can oscillate too, and shedding load requires deciding which operations are expendable.

The difference wouldn't be in having more tools. It would be in choosing each intervention by the loop it aims to modify, anticipating its side effects and observing whether it really changes the dynamics.

## A system isn't saved by good intentions

There is a risk when talking about systems: that responsibility dissolves into a cloud of arrows and diagrams. Since everything is connected, nobody seems to have made a concrete decision.

That would be a comfortable and mistaken reading.

People choose the retry limits. They design the dependencies. They set local goals. They decide when to deploy, when to roll back and when to stop an intervention.

Systems thinking doesn't remove those responsibilities. It makes them more demanding.

It asks us to explain not only what problem a decision solves, but also what behavior it can trigger elsewhere in the system.

A solution can work locally and fail globally. It can work today and create dependency tomorrow. It can stabilize one variable and destabilize another.

The decisive question, then, stops being "did we apply the solution correctly?".

It becomes: **what is the system doing now that we've intervened?**

At 10:17 we had a degraded service. At 10:24, a service that was down.

Between those two times there was no shortage of activity. There was a surplus of responses that nobody had analyzed together.

**The system didn't go down. We took it down trying to save it.**

## References & Further Reading

- **Thinking in Systems: A Primer**, Donella H. Meadows, Chelsea Green Publishing, 2008. Conceptual framework for feedback, delays and system traps. A full reading of the book has not been verified: the names of the traps, "policy resistance" and "shifting the burden", come from its chapter on traps, which could not be consulted directly.
- **Leverage Points: Places to Intervene in a System**, Donella H. Meadows, Donella Meadows Project. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Delays and their link to overcorrection and oscillation.
- **Dancing With Systems**, Donella H. Meadows, Donella Meadows Project. <https://donellameadows.org/archives/dancing-with-systems/>. A central-thermostat case in which late corrections increased oscillations.
- **A Proof for the Queuing Formula: L = λW**, John D. C. Little, Operations Research 9(3), 1961. <https://pubsonline.informs.org/doi/10.1287/opre.9.3.383>. Statement and proof of Little's Law, with its conditions (finite means and stationary processes).
- **Exponential Backoff and Jitter**, Marc Brooker, AWS Architecture Blog, 2015. <https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/>. Technical analysis of retry strategies and the effect of jitter.
- **Horizontal Pod Autoscaling**, Kubernetes Documentation. <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. Scaling mechanisms and replica-count stability.
