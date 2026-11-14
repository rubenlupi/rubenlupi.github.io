---
title: "When the problem isn't the part, but the system"
description: "LinkedIn didn't need another Argo CD: it needed to stop sharing. What that says about platforms, about Donella Meadows, and about AI agents."
date: 2026-11-12
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Systems Thinking", "Platform Engineering", "Agentic AI", "Architecture"]
---

In engineering we have a bit of a weakness for fixing parts.

If something is slow, we add resources. If a tool doesn't scale, we look for another one. If an AI agent fails, we try a more powerful model.

It's a fairly reasonable reaction. It's also a comfortable one: swapping a component is usually easier than questioning how everything around it works.

The trouble starts when the part works perfectly and the system still keeps failing.

## LinkedIn didn't need another Argo CD

In November 2026, LinkedIn published [how it had redesigned its deployment platform](https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine). The numbers help explain the problem: more than 250 Kubernetes clusters, more than 4,000 services and more than 100,000 deployments a week.

For well over a year they had used Argo CD, a widely adopted GitOps tool. And it hadn't gone badly. In fact, it let them grow to manage thousands of services.

But at a certain scale, problems started to appear that adding resources didn't solve.

In clusters with 60,000 pods, syncs took under three minutes. Above 80,000 pods, they could take more than ten.

On top of that, an application could show as `Synced` and `Healthy` without that guaranteeing the intended revision had actually been deployed.

And changes to certain schemas meant restarting controllers across the whole fleet.

These weren't three independent problems. They had something in common: too many applications depended on shared mechanisms and shared state.

LinkedIn could have kept optimizing controllers, tuning parameters and adding capacity. Instead, it changed the architecture.

For application deployments, it replaced the shared-controller model with a library that runs each deployment in its own ephemeral pod.

One operation, one runtime, one lifecycle.

The published results are interesting:

- Deployments grew 3.7 times.
- Infrastructure failures went from 925 to 63.
- The median time to detect and close out a failed deployment fell from 16.1 to 2.45 minutes.

LinkedIn acknowledges that part of the improvement also comes from changes to its orchestration layer. Worth keeping in mind.

But the most interesting thing isn't the numbers. It's the architectural decision.

They stopped trying to make a shared mechanism work better and better, and started removing the need to share it.

Argo CD wasn't necessarily a bad tool. In fact, LinkedIn still uses it for other parts of its infrastructure.

It had simply stopped fitting one specific part of the problem.

## Donella Meadows had already explained something similar

Long before Kubernetes, Donella Meadows wrote [Leverage Points: Places to Intervene in a System](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/).

Her idea is simple, even if its consequences aren't: not every intervention in a system has the same impact.

Changing numbers, parameters or capacity is usually fairly easy. Changing information flows, rules or the structure of the system is much harder, but it can change how the system behaves far more deeply.

Think of a supermarket.

Customers wait too long to pay. The obvious fix seems clear: open more checkouts.

But imagine every checkout depends on a single payment authorization system that processes requests one at a time.

We can open twenty more checkouts. We can even hire the best cashiers in the world.

The queue will still be there.

We've improved the parts without touching the constraint that sets the performance of the whole.

In software this happens all the time. We add workers to systems blocked by a shared database. We scale services whose bottleneck is a synchronous dependency. We add caches to make up for design decisions nobody wants to revisit.

Sometimes those optimizations are enough. Other times they only postpone the moment we have to face the original problem.

Meadows also pays special attention to feedback loops.

A system needs information about the consequences of its actions in order to correct itself. And it needs to get it in time.

If the information arrives too late, corrections can be useless. If the system overreacts, it can end up oscillating from one problem to another.

Back to LinkedIn.

An application showing as healthy isn't much use if that signal doesn't tell you whether it's actually running the expected version.

Observability isn't just about having more metrics. It's about having information that lets you make the right decisions.

## And what does this have to do with AI agents?

Quite a lot, I think.

We're living through a race to build ever more capable models. And the improvements are real: they reason better, write better code and can solve tasks that until recently seemed out of reach.

But an agent isn't just a model.

It's also the system that decides when to run it, what context it gets, which tools it can use, how it keeps state, how it checks results and what happens when something fails.

Imagine an agent whose job is to modify code.

It gets a task, generates changes, runs tests and opens a pull request.

Now add ten more agents working on the same repository.

Suddenly questions appear that have little to do with how intelligent the model is:

Who controls concurrent changes? What happens when two agents modify the same file? How do we know a task is really finished? Who decides when to retry an operation? How do we stop one failure from spreading to other agents?

We can use a more powerful model. It will probably make fewer mistakes on certain tasks.

But it will still need answers to those questions.

And this is where I find the parallel with LinkedIn especially interesting.

If every task depends on shared global state, if failures aren't isolated and if our success signals don't reflect what actually happened, we have an architecture problem.

Not an intelligence problem.

Anthropic, in its article [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), describes how some of the most successful implementations it has seen use relatively simple, composable patterns rather than large frameworks.

That doesn't mean simplicity always wins, or that a better model can't make up for certain limitations. It means architecture still matters, even when the central component is extraordinarily capable.

## Before changing the model, I'd look at the system

When a system of agents starts behaving unpredictably, four questions interest me in particular.

**Isolation.** Can one task fail without dragging the others down?

**State.** What information is really shared, and who is responsible for keeping it consistent?

**Feedback.** How does the system know an action produced the expected result? Can it tell the difference between having run a tool and having actually completed a task?

**Recovery.** What happens after a failure? Do we just retry, or do we know why it failed and what has changed before trying again?

These are much less glamorous questions than choosing between the latest models.

They're also the ones that usually decide whether something works well in a demo or can be sustained in production.

I don't think the lesson from LinkedIn is that we should build our own deployment engines, or avoid agent frameworks.

The lesson that interests me is a different one.

Before optimizing a component, it's worth understanding how much of the system's behavior really depends on it.

Because sometimes we need a better part.

And other times we've spent months perfecting a part that was never the problem.

## References & Further Reading

- **How we scale deployments with a custom GitOps engine**, Ramesh G. Iyer, LinkedIn Engineering, 2 November 2026. <https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine>. Source of LinkedIn's figures and redesign. A company's account of its own system.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Where to intervene in a system, and the role of feedback and delays.
- **Building effective agents**, Anthropic Engineering, 19 December 2024. <https://www.anthropic.com/engineering/building-effective-agents>. The observation about simple, composable patterns in agent implementations.
