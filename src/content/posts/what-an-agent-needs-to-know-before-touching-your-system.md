---
title: "What an Agent Needs to Know Before Touching Your System"
description: "A practical guide to documenting the connections, decisions and evaluations of a flow that crosses several services."
date: 2026-11-15
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Systems Thinking", "Documentation", "AI Agents", "Architecture", "Evaluations"]
selfContained: true
draft: false
---

In *Break & Change* we saw how a team can improve its service and make the product worse. To bring that idea into daily work, I would start by documenting one complete flow. In an e-commerce shop, I would pick **confirming an order**, from the moment the customer clicks "Pay" until they receive a confirmation or get their money back.

## What to document

The flow's page should live in the product's shared documentation and be reachable from the Checkout, Inventory, Payments and Orders repositories. This is what I would put in it.

| What to document | What the team must be able to check |
|---|---|
| **Outcome and business rules** | What "order confirmed" means. For example, there is a confirmed payment and a unit assigned to that order. List the intermediate states and which service can move the order from one state to another. |
| **Connections and contracts** | Who calls whom, who publishes and consumes each event, which identifiers link order, reservation and payment, and which is the source of truth for each piece of data. Link the event schema and its implementation. |
| **Timings, queues and limits** | How long the reservation lasts, how long Checkout waits and which layer retries. Where pending orders pile up, at what rate they arrive and are resolved, and what happens when capacity is exceeded. Link the effective configuration and the queue dashboard. |
| **Failures and recovery** | What happens if the payment arrives late, duplicated or out of order. Who starts the refund, which key prevents it from being duplicated, and what the customer sees while it is resolved. Link the operations guide. |
| **Metrics for the whole flow** | Confirmed orders over purchase attempts, confirmed payments without stock over confirmed charges, and the time taken to resolve those cases. Link the dashboard and a trace that follows the same order across services. |
| **Decisions and history** | What was agreed, when, with which teams and data, and under which conditions it will be reviewed. Link the incident or experiment, the PR and the decision that is still in force. Keep the previous record linked to its replacement. |
| **Tests and evaluations** | Which scenarios must pass when the flow is touched, what result we expect and where the tests run. If an agent prepares changes, evaluate whether it finds the agreements in force and recognises the affected dependencies. |

For the critical connections I would leave a card that can be read in one minute. For example, **`PaymentConfirmed`** is published by Payments and consumed by Orders. It includes `order_id` and `payment_id`. It can arrive after the reservation has expired and can be delivered more than once. Orders checks Inventory before confirming. If it can no longer reserve a unit, it starts an idempotent refund. That card holds the links to the schema, the consumer and the integration test.

## How it is used in a real change

Inventory proposes cutting the reservation from ten minutes to five. Before approving it, I would review four things with Payments and Orders.

1. **How many orders are exposed.** Suppose that, out of 100,000 confirmed payments in a week, 600 arrived between minute five and minute ten after the reservation started. With the new limit, that 0.6% would arrive after expiry. To estimate how many would end in a refund, we need to know how many could reserve stock again.
2. **What the system recovers on its own.** Test a late charge with stock available, one with stock sold out, and a duplicate delivery of the event. In the first case the order is confirmed after reserving again. In the second a refund is started. If the duplicate arrives, there must be at most one confirmation or one refund for that payment.
3. **What result justifies the change.** Measure how many reservation minutes are freed and whether that lets more purchases complete. Agree before deployment how much refunds for lack of stock may increase, for how long the change will be observed and who decides whether to revert it.
4. **Where the agreement lives.** Record the decision in the flow's documentation, with the starting data and the links to the PRs. When the observation period ends, add the result and the decision to keep or revert the change.

## What the agent has to find

The evaluation can start with the same request the agent would receive at work. "Lower the stock reservation to five minutes."

| Evaluation case | What the agent must do |
|---|---|
| **The rule in force is documented** | Locate the configuration, follow the connection to Payments and Orders, cite the decision in force and point to the affected tests and metrics. |
| **There are two historical decisions** | Identify which one replaced the other and use that version to justify the proposal. |
| **The late-payment data is missing** | Specify which query is needed and which decision remains pending. |
| **The local tests pass** | Check whether there is also coverage for expiry, late payment and duplicate delivery. Identify any scenario without coverage. |

If the agent changes the value and only runs Inventory's tests, **the evaluation fails**. The change affects a condition that Payments and Orders need to know about.

In a PR review I would use one question. **Does this change something another team takes for granted?** If the answer is yes, that team takes part in the decision and the agreement is recorded in the flow both of them maintain.

## References & Further Reading

- Dependencies, accumulating work and delays between services. [Your Code Is Perfect. Your Architecture Is Brilliant. Your System Is a Mess.](/posts/systems-we-build-1-we-create-them/)
- Retries and responses that make a failure worse. [The System Didn't Go Down. We Took It Down Trying to Save It.](/posts/systems-we-build-2-improving-the-parts/)
- Metrics that change each team's behaviour. [We've Learned to Measure Everything. Except What Matters.](/posts/systems-we-build-3-same-mistakes/)
- Limits, queues and the margin to absorb peaks. [We Design for the Perfect Day. We Live in the Real World.](/posts/systems-we-build-4-limits/)
- The goals and rules that determine what is worth improving. [We Are Experts at Improving Things We Should Never Have Built.](/posts/systems-we-build-5-what-are-we-building/)
- Malcolm Featonby, [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/), Amazon Builders' Library. Explains how a unique request identifier lets a service treat a retried request as a duplicate. Its examples come from EC2 and EBS; applying the idea to refunds, as in the guide above, is an extrapolation.
