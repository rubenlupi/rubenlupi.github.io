---
title: "What Are We Actually Trying to Build?"
description: "Purpose, measurement and autonomy in engineering and education, plus a concrete experiment for an engineering organization."
date: 2026-11-13
editorialDate: 2026-11-02   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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

The most consequential decision in any system is its goal, and goals are contested value choices that measurement can quietly rewrite. The earlier parts of this series built toward that claim: stocks that fill with what the system rewards, boundaries that hide what the metric ignores, loops that teach the wrong lesson, and models that cannot see their own fences.

*About the sources. This series engages with Donella Meadows' ideas as they appear in legally accessible sources (a draft excerpt of* Thinking in Systems *published by the Donella Meadows Project, her essays, and independent systems research), not as a review of the full book. The assessment near the end of this post is therefore about those sources, not about the whole book.*

## What is education for?

Education is where the question was argued most openly in the sources this series uses. Aristotle, in the [*Politics*](http://classics.mit.edu/Aristotle/politics.8.eight.html), thinks education should be public and the same for all citizens, and he admits something that unsettles his own project: "mankind are by no means agreed about the things to be taught".

Plato's Socrates pulls the other way in the [*Republic*](http://classics.mit.edu/Plato/republic.8.vii.html): "knowledge which is acquired under compulsion obtains no hold on the mind". As in Part 1, the context is the education of guardians in an ideal city, so I do not read it as a general theory of schooling.

These two pull in different directions, civic formation on one side and autonomy on the other. I do not think either text resolves the tension, and I do not want to resolve it artificially here. What I take from the pair is narrower: the answer to "what is it for?" determines the structure, and the people who give it do not agree.

## What should engineering produce?

Software organizations face a cousin of that question, and I mean cousin, not twin. This is an analogy: both institutions must decide what to optimize, and neither shares the other's mechanism.

DORA's [guide](https://dora.dev/guides/dora-metrics-four-keys/) is careful about it. It defines five delivery metrics instead of one, and warns that targets raise "the likelihood that teams will try to game the metrics". Martin Fowler's older position is that ["any true measure of software development productivity must be based on delivered business value"](https://martinfowler.com/bliki/CannotMeasureProductivity.html). That is an opinion essay, but it names the right difficulty: the thing we care about is hard to measure, and the things that are easy to measure are not it.

Meadows has a sentence for this in [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/): "Pay attention to what is important, not just what is quantifiable". And Sterman adds the sting in [his reflections](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf): "we measure what we care about, and those measurements alter what we believe is important".

Measurement, in other words, reveals purpose and also rewrites it. That is the unresolved part: none of the posts in this series found a measure that does not also reshape the purpose it measures.

## Efficiency versus autonomy

If the stated goal of an engineering organization is reliable delivery of customer value, an efficiency lens will ask how much work flows through. An autonomy lens will ask whether the people doing the work have room to notice and fix what is wrong. These can conflict, and the series has already shown where. In Part 3, the capability stock drained because time for improvement was the first thing taken for output: protected time looks like slack to the first lens and like capability to the second. Plato's line about compulsion points the same way for schools, with the caveat above: work done under compulsion may produce output without producing understanding.

My reading is that neither lens is a fact to be discovered. They are values, and a metrics dashboard is one place where the choice gets made without anyone announcing it.

## An experiment, specified

Here is the concrete proposal I promised. It is a hypothesis about an engineering organization, not a result.

**Title.** Protected capability time with a pre-registered "worse-before-better" window.

**Problem.** Chronic firefighting: incidents and rework crowd out the work that would prevent them. This is the capability trap that [Repenning and Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf) describe.

**Stated goal.** Reliable delivery of customer value.

**Actual incentives.** Visible throughput and heroic recovery get rewarded; preventive work stays invisible.

**Feedback loops.** The ones from Part 3: B1 Work Harder, B2 Work Smarter, B3 Shortcuts and R1 Reinvestment, from [Repenning and Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf). There is also a second reinforcing loop, in their account, through incentives that promote "heroes". The rule is meant to weaken B3 and let B2 and R1 run in the virtuous direction. It does nothing about the hero loop unless what is rewarded changes as well.

**Important delays.** Improvement effort leads capability change by months for simple processes and by years for product development, according to Repenning and Sterman. For a two-quarter window that has a practical implication, which is my reading: the delivery metrics may not move inside the window at all. Early indicators, the share of toil and the share of unplanned work, have to be read first, and a flat delivery metric at the judging date is weak evidence either way.

**Intervention.** For two quarters, a set of volunteer teams reserves a fixed, protected share of capacity for capability work: test reliability, toil automation, runbooks, upgrade debt. Planning rules protect it, not goodwill, which makes this a change to the rules of the system and not a tweak to a parameter. Google's SRE organization has [an advertised goal](https://sre.google/sre-book/eliminating-toil/) of keeping toil below 50% of each SRE's time, which is one documented precedent for a protective rule. The share is a parameter the organization must choose and justify. I claim no optimum.

**Pre-registration.** Before starting, write down the expected short-term dip (throughput may fall) and the date on which the experiment will be judged. The accounts Repenning and Sterman report describe a dip that was planned for, including BP Lima's maintenance costs rising 30% in the first six months. Writing the dip down in advance is meant to stop leadership from abandoning the experiment at the first bad number.

**What to watch.** DORA's five metrics: change lead time, deployment frequency, failed deployment recovery time, change fail rate and deployment rework rate. Add the share of toil, the share of unplanned work, and a qualitative check at team level that the work did not become performative. Compare with non-participating teams, and say plainly that the comparison is not randomized.

**Failure criteria.** Any one of these counts as failure:

- At the pre-registered date, rework rate and recovery time are unchanged or worse and the share of toil has not fallen.
- The protected time was routinely raided. That is a failure of the rule, and it is recorded as one.
- The metrics improved, but the qualitative review shows gaming.

**Hypothesis.** My expectation is a short-term dip followed by improved rework and recovery metrics. That is a hypothesis, nothing more.

**Unintended consequences to watch.** Capability work becomes a reporting ritual. Teams outside the experiment absorb displaced load, a boundary effect. Metrics turn into targets. And "worse-before-better" becomes an excuse for interventions that simply do not work. The pre-registration exists to separate the last case from the real thing, and whether it succeeds is an open question.

## An assessment of Meadows' ideas, within these sources

*This section is editorial interpretation, written without the author's personal position and flagged for author review before publication. It assesses Meadows' ideas as they appear in the accessible sources only, and does not assess the full book.*

What I find most enduring is the habit of asking where a stock is accumulating while everyone looks at the flow. The bathtub framing is simple enough to teach and strong enough that experienced people get it wrong.

What I would adopt is her humility. A writer who says that "everything you know, and everything everyone knows, is only a model" is a better guide than one who claims to have found the lever. Part 4 covers her caveats about her own leverage list, so I will not quote them again.

What I would question is how far the vocabulary carries. Leverage points, as Meadows herself frames them, are a heuristic and not a predictive ranking. The evidence for the mechanisms in practice that this series could use comes mostly from case studies, models and Chicago schools.

And on power: the accessible texts do name it. In [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Meadows writes "Power over the rules is real power", and says "a single player can have the power to change the system's goal". What they do not offer, as far as these sources go, is an account of how competing groups contest a goal, or how a system's actual goal can be detected from inside it. That seems to me the largest gap in a series that ends by calling the goal the key decision.

Who may benefit? Engineers and managers who recognize the symptoms in Part 3 and want a vocabulary for them. People who want a formula should look elsewhere.

## The question left open

The series thesis was that systems built by intelligent people drift toward outcomes nobody chose when fast, visible feedback rewards activity while costs pile up in slow, invisible stocks. I called the intervention claim "sometimes" on purpose. Changing what a system measures, how soon consequences become visible and what it is for can help. I have no evidence that it reliably does.

Underneath sits a question none of the frameworks answers. Who gets to decide what a system is for, and how would we know, from inside it, that its declared goal and its actual goal have diverged?

What if the most important skill in engineering isn't learning how to build better systems, but recognizing when we're solving the wrong problem?

## References & Further Reading

- **Politics, Book VIII**, Aristotle, trans. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/politics.8.eight.html>. Education and the form of government, and Aristotle's admission of disagreement about what to teach.
- **The Republic, Book VII**, Plato, trans. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Plato/republic.8.vii.html>. Education and compulsion, in the context of an ideal city.
- **DORA's software delivery metrics: the four keys**, DORA, updated 5 January 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. The five metrics and the caution about gaming.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. A practitioner's opinion on delivered business value.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/dancing-with-systems/>. Source of the guideline on what is important versus quantifiable, and of the humility quotes. Her essay, not the book.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source of the measurement quotation.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. The capability trap and the BP Lima dip. Case studies and models; figures reported from practitioner sources.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Google SRE's advertised goal of keeping toil below 50% of each SRE's time; a company practice, not a validated optimum.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the quotations on power over rules and over a system's goal. Her essay, not the book.
