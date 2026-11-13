---
title: "Sometimes the problem isn't the component. It's the system."
description: "LinkedIn replaced Argo CD for large-scale deployments. Donella Meadows would say that's a story about structure, and it matters for agentic AI too."
date: 2026-11-12
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Systems Thinking", "Platform Engineering", "Agentic AI", "Architecture"]
---

When a system misbehaves, we usually reach for the component. Swap the tool, tune the parameter, upgrade the model. Sometimes that's right. Often it's the cheapest move and the least effective one.

## A deployment engine that outgrew its model

LinkedIn recently described [why it replaced Argo CD for large-scale application deployments](https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine). The scale is large: 250+ Kubernetes clusters, over 4,000 services, more than 100,000 deployments a week. Argo CD had carried them a long way, but its controller-centric model stopped fitting.

The problems they list are not bugs in the usual sense. They are properties of the structure:

- **Shared state, noisy neighbours.** A shared watch per resource type means churn from one application slows syncs for others. In one test, sync time went from under 3 minutes at 60,000 pods to over 10 minutes at 80,000+.
- **Weak feedback.** A *Synced and Healthy* status didn't guarantee the intended revision was deployed. Useful errors were buried in boilerplate.
- **Hidden coupling.** A CRD schema change required restarting Argo CD across the fleet.

Their answer wasn't a better controller. It was a different shape: a library instead of a controller, one ephemeral pod per deployment, no shared controller state, drift detection as a first-class step, and error messages taken straight from the API server.

They report deployment infrastructure failures falling from 925 to 63 while volume grew 3.7x, and the median time to conclude a failed deployment dropping from 16.1 to 2.45 minutes. They are also candid that orchestration improvements contributed, so the gain can't be credited to the engine alone. I'd read that candour as part of the lesson: in systems, causes are rarely single.

## What Meadows would call it

In [*Leverage Points: Places to Intervene in a System*](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Donella Meadows ranks twelve kinds of intervention by how much they change behaviour. At the bottom: constants and parameters, the numbers we love to tune. Higher up: the strength of feedback loops, the structure of information flows, the rules of the system, and the power to change its structure.

> "Missing feedback is one of the most common causes of system malfunction."

Read LinkedIn's list through that lens. Tuning Argo CD instances is parameter work. Giving each deployment its own isolated lifecycle, and making status and drift trustworthy, changes structure and information flow. That's higher leverage, and it's also more expensive, which is why we avoid it until we have to.

## Agents don't fix architecture

The same pattern is arriving with agentic AI. When an agent system disappoints, the instinct is to reach for a stronger model. A smarter agent is a better component. But if the system around it has unclear boundaries, tight coupling, no reliable feedback and no way to see what happened, a smarter agent mostly fails in more sophisticated ways.

Give an agent write access to a shared environment with ambiguous ownership and the failure mode is the noisy neighbour again. Give it a status signal that can say "done" when it isn't, and you have LinkedIn's deployment veracity problem, now with a confident narrator.

## What to change instead

The architectural moves are not new, and they apply equally to deployment platforms and agent systems:

1. **Clear boundaries.** Each unit of work, whether a deployment or an agent task, owns its scope and its failure. Isolation first, sharing deliberately.
2. **Less coupling.** No shared state that lets one workload's churn become another's latency. No change that needs the whole fleet to restart.
3. **Controlled feedback loops.** Feedback that is fast enough to correct, and bounded so it can't amplify. Meadows warns that delays that are too long cause oscillation and too short cause overreaction. Retries, reconciliation and agent self-correction all live here.
4. **End-to-end observability.** From intent to effect, you can answer "what was supposed to happen, what did happen, and why?" without parsing through wrappers. Trustworthy status is information flow, and information flow is leverage.

## The question to ask

Before replacing a component, or upgrading a model, ask which of Meadows' levels you are actually working on. If you're adjusting numbers while the structure and information flows stay as they are, you may be pushing on the weakest lever.

Sometimes the problem isn't the component. It's the system.
