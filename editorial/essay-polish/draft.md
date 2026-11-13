---
title: "When the bug is the shape of the system"
description: "LinkedIn replaced Argo CD for large-scale deployments with a different shape, not a better part. Donella Meadows would call that a story about structure, and it may say something about agentic AI too."
date: 2026-11-12
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Systems Thinking", "Platform Engineering", "Agentic AI", "Architecture"]
---

When a system misbehaves, we blame a part: swap the tool, tune the parameter, upgrade the model. Parts are popular because they can be bought, and sometimes that even works. LinkedIn's deployment platform is a documented case where it wasn't enough, and the reason may matter, more tentatively, to anyone building AI agents.

## What LinkedIn ran into, and what it built instead

In November 2026, LinkedIn engineer Ramesh G. Iyer described [how LinkedIn scales deployments with a custom GitOps engine](https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine). LinkedIn's own numbers: 250+ Kubernetes clusters, more than 4,000 services, over 100,000 deployments a week. Argo CD, they write, gave them "a foundation to onboard 4,000 services", and it still runs their cluster add-ons and system services. For application deployments at this scale, they replaced it.

This is a company describing its own system, not an independent evaluation of Argo CD. Even so, the problems it lists are mostly about structure rather than defects:

- **Shared state.** In one scale test, sync time was under 3 minutes in clusters with 60,000 pods and over 10 minutes with more than 80,000.
- **Weak status signals.** `Synced` and `Healthy` were not enough to confirm the intended revision had been deployed, so LinkedIn added its own checks.
- **Coupled change.** A CRD schema change meant restarting Argo CD controllers fleetwide before new attributes were accepted.

So LinkedIn changed the shape rather than the part: a library instead of a controller, each deployment run "in its own ephemeral pod", no shared controller state across applications.

Comparing the same month a year apart, LinkedIn reports deployment volume up 3.7x, deployment infrastructure failures down from 925 to 63, and the median time to detect and conclude a failed deployment down from 16.1 to 2.45 minutes. It adds that the failure reduction "cannot be completely attributed" to the new engine, because the orchestration layer improved at the same time, which is more modesty than most engineering blogs manage. One organisation's measurements, then: a well-documented case, not a general law about GitOps tools.

## Meadows puts the knobs at the bottom

In [*Leverage Points: Places to Intervene in a System*](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Donella Meadows lists twelve places to intervene in a system, roughly in order of increasing effect. At the low end sit "Constants, parameters, numbers". Higher up come "The strength of negative feedback loops…", "The structure of information flows (who does and does not have access to information)" and "The rules of the system". She also writes that "Missing feedback is one of the most common causes of system malfunction" and that "Delays in feedback loops are critical determinants of system behavior": too short and the system overreacts, too long and it oscillates.

As far as I can tell, the list is a conceptual framework, not an empirically validated ranking, so I use it as a lens rather than as proof.

Through that lens, and the reading is mine, tuning Argo CD instances looks like parameter work, while per-deployment isolation and trustworthy status and drift signals look like changes to structure and information flow. Tune a machine whose shape is the problem and you get a very well-tuned problem. LinkedIn doesn't use Meadows' terms, and I may be mapping one onto the other too neatly, but it does call its faster failure detection "shorter feedback loops", which at least fits.

## Will a smarter model rescue a badly built agent?

Here the ground is thinner. I know of no research showing that smarter models fail to fix poor architecture, and I'm not claiming one exists. The nearest evidence is narrower: Anthropic, which also sells models, [reports that](https://www.anthropic.com/engineering/building-effective-agents) across the customer implementations it saw, "the most successful implementations weren't using complex frameworks or specialized libraries" and instead used "simple, composable patterns". That is one vendor's observation about design, not a comparison of model strength against architecture.

So, as a hypothesis and no more: if an agent system rests on unclear boundaries, shared mutable state and status signals that can say "done" when something isn't, a more capable model in the same place may not remove those problems, because they live in the structure around the model. A better pilot doesn't fix a fuel gauge that lies. The LinkedIn case shows the same pattern in another domain, and that analogy is mine, not something either source demonstrates.

## Before you buy a smarter part

This is my assessment, not a demonstrated result. Where the evidence is thin, I'd look at structure before swapping the component:

1. **Clear boundaries.** Each unit of work, a deployment or an agent task, owns its scope and its failure.
2. **Less coupling.** No shared state through which one workload's churn becomes another's latency.
3. **Controlled feedback loops.** Fast enough to correct, bounded so they can't amplify. Meadows' point about delays applies to retries, reconciliation and self-correction alike.
4. **End-to-end observability.** I should be able to ask "what was supposed to happen, what did happen, and why?" and get an answer I trust.

I'm less sure this transfers to agents than to deployment platforms, and I'd like to see evidence either way. Until it arrives, most of us will keep reaching for the knobs, which have the great merit of being within reach.

## References & Further Reading

- **How we scale deployments with a custom GitOps engine**, Ramesh G. Iyer, LinkedIn Engineering, 2 November 2026. <https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine>. Source of every LinkedIn figure and quotation above. A company's account of its own system.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project (page undated). <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the quoted leverage points and the statements about missing feedback and delays.
- **Building effective agents**, Anthropic Engineering, 19 December 2024. <https://www.anthropic.com/engineering/building-effective-agents>. Supports only the observation that successful implementations used simple, composable patterns. It does not address model capability versus architecture.
