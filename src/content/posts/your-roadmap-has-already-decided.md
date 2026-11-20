---
title: "Your Roadmap Has Already Decided"
description: "Teresa Torres's continuous discovery, tested on a platform team that interviews users on Friday and has already committed to Monday's build."
date: 2026-11-20
editorialDate: 2026-10-19
series: break-and-change
book:
  title: "Continuous Discovery Habits"
  author: "Teresa Torres"
  year: 2021
  category: "Product & Customer Discovery"
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Product Discovery", "Continuous Discovery", "Opportunity Solution Tree", "Assumption Testing", "Platform Teams"]
draft: false
---

The team has six interviews booked for Friday. On Monday it starts building a deployment alert. What would a user have to say on Friday to change the plan for Monday?

In this fictional example, an engineer asked for an alert because a release spent an afternoon waiting for approval. The request has survived prioritisation and estimation. By Friday, the only people who can get the alert off the roadmap are the ones who put it there. Everyone else is welcome to suggest where the bell icon should go.

I haven’t had access to the full book, so what follows draws on Teresa Torres’s public explanations of *Continuous Discovery Habits*, starting with [her introduction to the book](https://www.producttalk.org/continuous-discovery-habits/).

## 1. Key Ideas — BREAK

Torres starts with the change the team wants to see. For the platform team, one candidate is to shorten the time a routine change spends waiting for approval. An alert is one possible way to get there. The distinction matters as soon as the engineer who asked for the alert turns out to have a perfectly good reason for leaving it unread. [Torres on outcomes, opportunities and solutions](https://www.producttalk.org/getting-started-with-discovery/)

Torres proposes that the people building the product have at least weekly contact with customers, in small research activities tied to a desired outcome. The core group she describes brings together product, design and engineering. That last role matters here. In a conversation about an afternoon spent waiting, an engineer might recognise that the event that would trigger the alert is recorded only after the reviewer opens the request. Someone who joins later to estimate the work may inherit a very detailed specification for sending the message too late. [Torres on continuous discovery](https://www.producttalk.org/getting-started-with-discovery/)

Another break comes when you take the request seriously enough to ask about the last time it would have helped. Where was the change at two in the afternoon? What did the reviewer still need? What did the person waiting for approval do next? Torres uses interviews about specific experiences to find unmet needs. In our example, the reviewer might describe opening three tools to find the test results. Now the team has a need it can investigate independently of the alert. [Torres on interviewing for specific stories](https://www.producttalk.org/discovering-solutions/)

The opportunity solution tree puts the desired outcome at the top, the needs underneath and possible solutions under the needs they address. [Torres on the opportunity solution tree](https://www.producttalk.org/getting-started-with-discovery/) If reviewers struggle to find the test results, the team could attach a summary to the existing request or link directly to the relevant run. If reviewers regularly miss requests they could already act on, the alert earns a place on that branch. The tree makes a favourite idea compete for a specific job. [Torres on prioritising opportunities](https://www.producttalk.org/cdh-book-club-june-2026/)

Then comes the idea with the sharpest edge. Before building a solution, ask what must be true for it to work and give the answer a chance to be wrong. [Torres on assumptions](https://www.producttalk.org/discovering-solutions/) An alert assumes there’s a useful moment to interrupt someone. The team can replay the timeline of a real release and check what a reviewer could have done at that moment. Torres proposes testing assumptions across candidate solutions and deciding in advance what would count as a useful result. [Torres on testing assumptions](https://www.producttalk.org/ch-10-testing-assumptions/)

## 2. What Still Matters Today — CHANGE

Give Friday’s research a decision to inform. Suppose the team agrees to revisit whether to build the alert or put the missing information in the approval request. It can reconstruct a few recent releases with both the people submitting changes and the people reviewing them. For each case, mark when the reviewer learned about the request, when the required information became available and when the reviewer could act.

If awareness came early and the information came late, the team could assemble the summary by hand and ask reviewers to use it on a past case. Can they reach the same decision and spot a missing check? If awareness came late and everything else was ready, try a manually sent message on a small number of routine changes. Check whether it arrives while the reviewer can still do something useful. Each test gives Monday a different possible plan.

Write down what the team will do with an ambiguous result, too. Comparing two or three cases might reveal that the work stalls for different reasons in different teams. That would give you a good reason to narrow the next test. It would be an awkward basis for a company-wide notification setting.

## 3. Why We Keep Getting It Wrong — EXPERIENCE

In an interview published by Torres, Snagajob designer Jenn Atkins describes speaking with customers and spending eight hours on research reports that went unread. The problems she heard about didn’t line up with what the team had been told to build. Later, she describes contributing to objectives shaped by what the team discovered. It’s a participant’s account from a team Torres coached, and it shows what changed in the decisions Jenn could influence. [Torres’s case study](https://www.producttalk.org/continuous-discovery-case-study/)

Imagine fixing the first part of Jenn’s story by scheduling more interviews. The team can now produce two reports in the time it used to produce one. Both can spend the quarter in the same folder. The useful question for a team in that position is who can reopen a feature commitment, and what they would need to see to do it.

## 4. The Book's Blind Spots — CHALLENGE

The approach raises a question about whose experience makes it into the tree. In the deployment example, the people who submit changes every day may be the easiest to recruit. The occasional contributor could have a different problem, such as working out who can approve a change in the first place. Keep track of which roles and cases you’ve heard from before deciding how broadly to act on the pattern.

A second limit is the distance between a small test and the outcome that justified the work. A reviewer can use a hand-built summary correctly in a replay. You still need to find out what happens to approval time when summaries arrive during a normal week. Even instrumented experiments can mislead if teams misinterpret a metric, as Microsoft researchers document in examples from their own experiments. In our case, an alert could get opened promptly while approval times stay the same. If the approval queue is what you wanted to change, measure what happens to the queue. [Dmitriev and colleagues on metric interpretation](https://www.microsoft.com/en-us/research/publication/a-dirty-dozen-twelve-common-metric-interpretation-pitfalls-in-online-controlled-experiments/)

## 5. My Take — QUESTION

The strongest idea in Torres’s approach is to make the team’s commitment specific enough to guide the work and leave room for the solution to change. That is useful whether you build a product customers buy or an internal tool they have to use. The people doing the work can bring back a reason to spend the next week differently, while the decision is still within reach.

I’d ask one thing before booking Friday’s interviews. If a reviewer shows you exactly why the alert would arrive too late, who can take it off Monday’s plan?

## References & Further Reading

- [*Continuous Discovery Habits* (the Book) is Finally Here!](https://www.producttalk.org/continuous-discovery-habits/), Teresa Torres, 2021. The author’s announcement and overview of the book.
- [Everyone Can Do Continuous Discovery—Even You! Here’s How](https://www.producttalk.org/getting-started-with-discovery/), Teresa Torres, 2023. Definition, cadence and barriers to adoption.
- [Discovering Solutions](https://www.producttalk.org/discovering-solutions/), Teresa Torres, 2022. Interviews about specific experiences and the role of assumption tests.
- [Ch. 7: Prioritizing Opportunities, Not Solutions](https://www.producttalk.org/cdh-book-club-june-2026/), Teresa Torres, 2026. Reading guide on choosing which needs to address.
- [Ch. 10: Testing Assumptions](https://www.producttalk.org/ch-10-testing-assumptions/), Teresa Torres, 2026. Reading guide on comparing ideas and setting criteria for tests.
- [What a Good Continuous Discovery Team Looks Like](https://www.producttalk.org/continuous-discovery-case-study/), Teresa Torres, 2018. First-hand accounts from a team she coached.
- [A Dirty Dozen: Twelve Common Metric Interpretation Pitfalls in Online Controlled Experiments](https://www.microsoft.com/en-us/research/publication/a-dirty-dozen-twelve-common-metric-interpretation-pitfalls-in-online-controlled-experiments/), Pavel Dmitriev, Somit Gupta, Dong Woo Kim and Garnet Vaz, 2017. Examples of misinterpreted metrics from Microsoft experiments.
