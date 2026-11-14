---
title: "Your Metrics Are Quietly Rewriting Your Goals"
description: "A system's goal is its most consequential decision, and measurement can rewrite it without anyone announcing it. Aristotle, Plato, DORA, and an experiment an engineering organization could run, with its failure criteria written in advance."
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
tags: ["Systems Thinking", "Organizational Learning", "Engineering Culture", "Education"]
draft: false
---

Aristotle, in the [*Politics*](https://classics.mit.edu/Aristotle/politics.8.eight.html), thinks education should be public and the same for all citizens, and he admits something that unsettles his own project: "mankind are by no means agreed about the things to be taught". It is a brave thing to concede while designing a curriculum. It also names the decision that matters most in any system, its goal, and the uncomfortable fact that people disagree about it. Goals are contested value choices, and measurement can quietly rewrite them.

I haven't had access to the full book, so what follows draws on a draft excerpt of *Thinking in Systems* published by the Donella Meadows Project, her essays and independent systems research.

## Nobody agrees what school is for

Among my sources, education is where the question was argued most openly. Plato's Socrates pulls against Aristotle in the [*Republic*](https://classics.mit.edu/Plato/republic.8.vii.html): "knowledge which is acquired under compulsion obtains no hold on the mind". As in Part 1, the context is the education of guardians in an ideal city, not a general theory of schooling.

Civic formation pulls one way, autonomy the other. I don't think either text resolves the tension. What I take from the pair is narrower: the answer to "what is it for?" determines the structure, and the people giving that answer do not agree. The school gets built anyway.

## What is an engineering team for, exactly?

Software organizations face a cousin of that question, not a twin. DORA's [guide](https://dora.dev/guides/dora-metrics-four-keys/) defines five delivery metrics instead of one, and warns that targets raise "the likelihood that teams will try to game the metrics". Martin Fowler's older position, in an opinion essay, is that ["any true measure of software development productivity must be based on delivered business value"](https://martinfowler.com/bliki/CannotMeasureProductivity.html). A dashboard can be accurate to the last decimal and still be about the wrong thing.

Meadows has a sentence for this in [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/): "Pay attention to what is important, not just what is quantifiable". Sterman adds the sting in [his reflections](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf): "we measure what we care about, and those measurements alter what we believe is important".

So measurement reveals purpose and rewrites it at the same time, and none of the evidence I have drawn on turns up a measure that leaves its purpose alone. We would send back a thermometer that changed the weather. Metrics that change the goal, we put on the wall.

## Slack or capability? It depends who is looking

If an engineering organization's stated goal is reliable delivery of customer value, an efficiency lens asks how much work flows through; an autonomy lens asks whether the people doing the work have room to notice and fix what is wrong. Part 3 showed where the two conflict: the capability stock drained because time for improvement was the first thing taken for output. Protected time looks like slack to the first lens and like capability to the second. Plato's line about compulsion points the same way for schools, with the caveat above: work done under compulsion may produce output without producing understanding.

Neither lens, in my reading, is a fact to be discovered. They are values, and a metrics dashboard is one place where the choice gets made without anyone announcing it.

## An experiment that admits in advance how it could fail

This is a hypothesis about an engineering organization, not a result.

**Problem.** Chronic firefighting, in which incidents and rework crowd out the work that would have prevented them: the capability trap that [Repenning and Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf) describe.

**Stated goal.** Reliable delivery of customer value.

**Actual incentives.** Visible throughput and heroic recovery get rewarded; preventive work stays invisible.

**Feedback loops.** B1 Work Harder, B2 Work Smarter, B3 Shortcuts and R1 Reinvestment from Part 3, after [Repenning and Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf), plus, in their account, a second reinforcing loop through incentives that promote "heroes". The rule is meant to weaken B3 and let B2 and R1 run in the virtuous direction. It does nothing about the hero loop unless what is rewarded changes as well.

**Important delays.** Improvement effort leads capability change by months for simple processes and by years for product development, according to Repenning and Sterman. My reading is that the delivery metrics may therefore not move inside a two-quarter window at all. The early indicators, the share of toil and the share of unplanned work, have to be read first, and a flat delivery metric at the judging date is weak evidence either way.

**Intervention.** For two quarters, a set of volunteer teams reserves a fixed, protected share of capacity for capability work: test reliability, toil automation, runbooks, upgrade debt. Planning rules protect it, not goodwill, which makes this a change to the rules of the system and not a tweak to a parameter. Goodwill is the first thing a deadline spends. Google's SRE organization has [an advertised goal](https://sre.google/sre-book/eliminating-toil/) of keeping toil below 50% of each SRE's time, one documented precedent for a protective rule. The share is a parameter the organization must choose and justify; I claim no optimum. I expect a short-term dip followed by improved rework and recovery metrics. Changing what a system measures, how soon consequences become visible and what it is for can help, but I have no evidence that it reliably does.

**Pre-registration.** Before starting, write down the expected short-term dip (throughput may fall) and the date on which the experiment will be judged. The accounts Repenning and Sterman report describe a dip that was planned for, including BP Lima's maintenance costs rising 30% in the first six months. Writing the dip down in advance is meant to stop leadership abandoning the experiment at the first bad number. A dip that was predicted is a result; a dip that wasn't is a reason to panic.

**What to watch.** DORA's five metrics: change lead time, deployment frequency, failed deployment recovery time, change fail rate and deployment rework rate. Add the share of toil, the share of unplanned work, and a team-level qualitative check that the work did not become performative. Compare with non-participating teams, and say plainly that the comparison is not randomized.

**Failure criteria.** Any one of these counts as failure:

- At the pre-registered date, rework rate and recovery time are unchanged or worse and the share of toil has not fallen.
- The protected time was routinely raided. That is a failure of the rule, and it is recorded as one.
- The metrics improved, but the qualitative review shows gaming.

**Unintended consequences to watch.** Capability work becomes a reporting ritual. Teams outside the experiment absorb displaced load, a boundary effect. Metrics turn into targets. And "worse-before-better" becomes an excuse for interventions that simply do not work; the pre-registration exists to tell that case from the real thing, and whether it succeeds is an open question.

## What I'd keep from Meadows, and what I'd question

What I find most enduring is the habit of asking where a stock is accumulating while everyone watches the flow. The bathtub framing is simple enough to teach and, as Sterman's classroom results in Part 1 showed, hard enough that well-trained people still get it wrong.

What I would adopt is her humility. A writer who says that "everything you know, and everything everyone knows, is only a model" is a better guide than one who claims to have found the lever.

What I would question is how far the vocabulary carries. Leverage points, as Meadows herself frames them, are a heuristic and not a predictive ranking, and the evidence I could draw on for the mechanisms in practice comes mostly from case studies, models and Chicago schools.

On power, the accessible texts do name it. In [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Meadows writes "Power over the rules is real power", and says "a single player can have the power to change the system's goal". What they do not offer, as far as these sources go, is an account of how competing groups contest a goal, or of how a system's actual goal can be detected from inside it. That seems to me the largest gap, since the goal is the decision that matters most.

The readers who will get most from Meadows are engineers and managers who recognize the symptoms in Part 3 and want a vocabulary for them. Anyone who wants a formula should look elsewhere, and will probably find one, which is rather the problem.

## Who decides what a system is for?

Underneath sits a question none of the frameworks answers: who gets to decide what a system is for, and how would we know, from inside it, that its declared goal and its actual goal have diverged?

If nobody can answer that, what if the most important skill in engineering isn't learning how to build better systems, but recognizing when we're solving the wrong problem?

## References & Further Reading

- **Politics, Book VIII**, Aristotle, trans. Benjamin Jowett, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/politics.8.eight.html>. Education and the form of government, and Aristotle's admission of disagreement about what to teach.
- **The Republic, Book VII**, Plato, trans. Benjamin Jowett, MIT Internet Classics Archive. <https://classics.mit.edu/Plato/republic.8.vii.html>. Education and compulsion, in the context of an ideal city.
- **DORA's software delivery metrics: the four keys**, DORA, updated 5 January 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. The five metrics and the caution about gaming.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. A practitioner's opinion on delivered business value.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/dancing-with-systems/>. Source of the guideline on what is important versus quantifiable, and of the humility quotes. Her essay, not the book.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source of the measurement quotation.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. The capability trap and the BP Lima dip. Case studies and models; figures reported from practitioner sources.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Google SRE's advertised goal of keeping toil below 50% of each SRE's time; a company practice, not a validated optimum.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the quotations on power over rules and over a system's goal. Her essay, not the book.
