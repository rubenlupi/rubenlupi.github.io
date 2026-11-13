---
title: "Sometimes the problem isn't the component. It's the system."
description: "LinkedIn replaced Argo CD for large-scale deployments. Donella Meadows would call that a story about structure, and it may say something about agentic AI too."
date: 2026-11-12
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Systems Thinking", "Platform Engineering", "Agentic AI", "Architecture"]
---

When a system misbehaves, we usually reach for the component: swap the tool, tune the parameter, upgrade the model. Sometimes that's right. This post looks at one documented case where it wasn't enough, at a framework for thinking about why, and then, more tentatively, at what that might mean for agentic AI.

A note on method. I separate **what the sources document** from **my interpretation** and from **my own assessment**, and I say which is which.

## What LinkedIn documented

In November 2026, LinkedIn engineer Ramesh G. Iyer described [how LinkedIn scales deployments with a custom GitOps engine](https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine). The scale, as reported by LinkedIn: 250+ Kubernetes clusters, more than 4,000 services, over 100,000 deployments a week. Argo CD, they write, gave them "a foundation to onboard 4,000 services", and it is still used for cluster add-ons and system services. For application deployments at this scale, though, they replaced it.

The post is a case study of LinkedIn's own system, not an independent evaluation of Argo CD. Within that limit, the problems it lists are mostly about structure rather than defects:

- **Shared state.** In one of LinkedIn's scale tests, sync time in clusters with 60,000 pods was under 3 minutes, and over 10 minutes with more than 80,000 pods.
- **Weak status signals.** A `Synced` and `Healthy` status was not enough on its own to confirm the intended revision had been deployed, so LinkedIn had to add its own checks.
- **Coupled change.** A CRD schema change required restarting Argo CD controllers fleetwide before new attributes were accepted.

LinkedIn's answer was a different shape: a library instead of a controller, with every deployment run "in its own ephemeral pod" and no shared controller state across applications.

Their reported results compare the same month a year apart: deployment volume up 3.7x, deployment infrastructure failures down from 925 to 63, and the median time to detect and conclude a failed deployment down from 16.1 to 2.45 minutes. LinkedIn is careful to add that the failure reduction "cannot be completely attributed" to the new engine, since the orchestration layer improved at the same time. These are one organisation's measurements, and I'd read them as a well-documented case, not as a general law about GitOps tools.

## A framework for the "why"

In [*Leverage Points: Places to Intervene in a System*](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Donella Meadows lists twelve places to intervene in a system, roughly in order of increasing effect. At the low end are "Constants, parameters, numbers". Further up are "The strength of negative feedback loops…", "The structure of information flows (who does and does not have access to information)" and "The rules of the system". She also writes that "Missing feedback is one of the most common causes of system malfunction" and that "Delays in feedback loops are critical determinants of system behavior", with delays that are too short causing overreaction and delays that are too long causing oscillations.

As far as I can tell, the list is a conceptual framework and not an empirically validated ranking, so I treat it as a lens and not as proof.

**My interpretation.** Read through that lens, tuning Argo CD instances looks like parameter work, while per-deployment isolation and trustworthy status and drift signals look like changes to structure and information flow. LinkedIn does not describe its work in Meadows' terms, and I may be mapping one onto the other too neatly. Notably, LinkedIn itself frames the faster failure detection as "shorter feedback loops", which at least fits the lens.

## Agents: a hypothesis, not a finding

I want to be more careful here, because I don't have evidence for the strong version of this claim. I'm not aware of research showing that smarter models fail to fix poor architecture, and I'm not claiming one exists.

What I can point to is narrower. Anthropic, which also sells models, [reports that](https://www.anthropic.com/engineering/building-effective-agents) across the customer implementations it saw, "the most successful implementations weren't using complex frameworks or specialized libraries" and instead used "simple, composable patterns". That is one vendor's observation about design, not a comparison of model strength against architecture.

**My interpretation, as a hypothesis.** If an agent system is built on unclear boundaries, shared mutable state and status signals that can say "done" when something isn't, then a more capable model in the same place may not remove those problems, because they live in the structure around the model. The LinkedIn case is the same pattern in a different domain, and the analogy is mine, not something either source demonstrates.

## What I'd try changing

**My assessment**, not a demonstrated result. Where the evidence is thin, I'd look at structure before swapping the component:

1. **Clear boundaries.** Each unit of work, a deployment or an agent task, owns its scope and its failure.
2. **Less coupling.** No shared state through which one workload's churn becomes another's latency.
3. **Controlled feedback loops.** Feedback fast enough to correct and bounded so it can't amplify. Meadows' point about delays applies to retries, reconciliation and self-correction alike.
4. **End-to-end observability.** I should be able to ask "what was supposed to happen, what did happen, and why?" and get an answer I trust.

I'm less sure how well this transfers to agents than to deployment platforms, and I'd like to see evidence either way.

## References & Further Reading

- **How we scale deployments with a custom GitOps engine**, Ramesh G. Iyer, LinkedIn Engineering, 2 November 2026. <https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine>. Source of every LinkedIn figure and quotation above. A company's account of its own system.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project (page undated). <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the quoted leverage points and the statements about missing feedback and delays.
- **Building effective agents**, Anthropic Engineering, 19 December 2024. <https://www.anthropic.com/engineering/building-effective-agents>. Supports only the observation that successful implementations used simple, composable patterns. It does not address model capability versus architecture.
