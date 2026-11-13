---
title: "We Don't Just Live in Systems. We Create Them."
description: "Stocks, flows and purpose: why a system's behaviour comes from what accumulates in it, from Spartan boyhood to software architecture."
date: 2026-11-13
editorialDate: 2026-11-02   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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
tags: ["Systems Thinking", "Stocks and Flows", "Conway's Law", "Ancient Greece", "Education"]
draft: false
---

Two assumptions sit under most of how we run teams, schools and training plans. The first: if every part gets better, the whole gets better. The second: if results are bad, someone isn't working hard enough.

This series argues that both can fail, and that they fail for a reason you can describe. This first post is about the reason. A system's behaviour comes from what accumulates inside it and from what it rewards, not from how good its parts look or what its mission statement says.

*About the sources. This series engages with Donella Meadows' ideas as they appear in legally accessible sources (a draft excerpt of* Thinking in Systems *published by the Donella Meadows Project, her essays, and independent systems research), not as a review of the full book. The full text was not available to this series, so it does not describe chapters it has not seen.*

## A bathtub is a better model than a to-do list

Start with the simplest object in systems thinking. In a draft excerpt of *Thinking in Systems* [published by the Donella Meadows Project](https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf), Meadows defines a stock as "a store, a quantity of material or information that has built up over time". A stock is whatever has piled up: water in a tub, money in an account, unreviewed pull requests in a queue. The same excerpt describes stocks as "accumulations, or integrals, of flows".

Flows are the rates that fill or drain it. Over one small interval Δt, the arithmetic is:

```
stock(t + Δt) = stock(t) + (inflow − outflow) · Δt
```

In continuous time, the same statement is a derivative:

```
d(stock)/dt = inflow(t) − outflow(t)
```

Nothing here is deep. The consequences are. The stock rises while inflow exceeds outflow, falls in the reverse case, and holds steady, in the excerpt's phrase "dynamic equilibrium", when the two match. The excerpt also makes a point that is easy to forget when a number looks wrong: "A stock can be increased by decreasing its outflow rate as well as by increasing its inflow rate."

Two further properties matter for what follows. The excerpt says stocks "change only slowly, never suddenly, even if the rates flowing into or out of them change suddenly. Therefore stocks act as delays in systems". And they are buffers: "The presence of stocks allows flows to be independent, decoupled, and dependable."

(A caution on provenance. This excerpt is labelled as a pre-publication draft, so its wording may differ from the 2008 edition. I attribute these lines to the excerpt, nothing more.)

## Highly trained people misread accumulation

You would expect this to be obvious. John Sterman, a systems scientist who studied with Meadows, [reports otherwise](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf). In his classroom studies, only 36% of MIT graduate students correctly sketched a bathtub's water level from its inflow and outflow. In a department-store task, 42% and 30% answered the two stock questions correctly, while 94% read the flow graph itself correctly.

Read that last pair carefully. People can read the rates. They struggle to turn rates into accumulation. These are results from one instructor's classes, not a population estimate, but the pattern is the point: the stock is the part we do not see.

## Where the stocks hide in software

What follows is my interpretation, not something the excerpt says about software.

Work in progress is a stock. Arrivals are one flow, completions another. A team that is "busy" may simply have an inflow that has exceeded its outflow for months, and the queue is the memory of that.

Apply the equation. While arrivals exceed completions by any margin, the queue grows every interval, however busy people feel. And the excerpt's point about outflow has a mirror image: reducing arrivals acts on the same stock as raising completions. Pushing people to finish faster and declining or deferring new work are two handles on one bathtub. That is the stock-and-flow argument for limiting work in progress. The practical habit it suggests is to ask of any queue, before asking who is slow, which flow is larger.

Technical debt is a stock too, with an important caveat: "debt" is a metaphor and has no single unit of measure. Ward Cunningham's [original experience report](https://c2.com/doc/oopsla92.html) put it this way: "Shipping first time code is like going into debt", and "Every minute spent on not-quite-right code counts as interest on that debt." Martin Fowler later added that ["the useful distinction isn't between debt or non-debt, but between prudent and reckless debt"](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), and crossed it with whether the debt was deliberate or inadvertent. So the stock has more than one inflow, and some of them nobody chose.

I read both as stocks whose depletion or growth is delayed and hard to observe. That is an editorial reading of those sources, not a measured result.

## Structure follows purpose

Stocks explain behaviour. Purpose explains why the stocks fill with what they do. Education makes the point unusually visible, because its purposes were argued over in writing.

Xenophon, an Athenian who admired Sparta, [describes](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) how Spartan boys were placed under an official, the "Warden", drawn from the class that filled the highest offices, in place of slave tutors chosen by each father. They went barefoot, got one garment a year, and were rationed food with a measure of theft tolerated. Other Greeks, he says, sent their sons to teachers of letters, music and wrestling.

Aristotle, writing in the *Politics*, [argues](http://classics.mit.edu/Aristotle/politics.8.eight.html) that the legislator should attend above all to the education of the young, and that the citizen should be "molded to suit the form of government under which he lives". Plato's Socrates, in the [*Republic*](http://classics.mit.edu/Plato/republic.8.vii.html), pushes from another side: education is not putting knowledge into the soul "like sight into blind eyes", and "knowledge which is acquired under compulsion obtains no hold on the mind".

Three limits. Xenophon idealizes Sparta, so his account is an admirer's portrait. All three authors are describing citizen males, and I say nothing here about who in practice had access to schooling, because the sources used in this series do not settle it. And Plato's remark comes from a discussion of educating guardians in an ideal city, not a general theory of schooling.

My interpretation, then, with those limits in place: Sparta and Athens organized boyhood differently because they pursued different civic goals. The structure followed the purpose. One stock I can name comes from Aristotle, in the [*Nicomachean Ethics*](http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html): "moral virtue comes about as a result of habit", and "legislators make the citizens good by forming habits in them". I read habit as an accumulation built by repeated practice, which is a stock in the sense above, and a school's daily routine as the inflow that a legislator can design. That reading is mine, not Aristotle's vocabulary. I am not drawing a morality tale about two cities.

## The software echo

Software has its own, much-quoted version. In 1968, Melvin Conway [wrote](https://www.melconway.com/Home/Committees_Paper.html) that organizations designing systems are constrained to produce designs that are "copies of the communication structures" of those organizations. Fowler's [overview](https://martinfowler.com/bliki/ConwaysLaw.html) notes that this has been used deliberately, the "Inverse Conway Maneuver", and cautions that it is no quick fix for rigid legacy systems. His support is experience, not empirical research, and I would hold the claim at that level too.

Whether Greek schooling and software architecture work by the same mechanism is a different question. They do not need to. The parallel I am drawing is an analogy: both institutions answer to a question about what to optimize, and the answer shows up in structure before anyone writes it down.

## Why this is the first break

If a system's behaviour lives in its stocks and its rewards, you cannot read it from its parts. A team with excellent engineers can still have a growing queue. A school with a noble mission statement can still teach whatever its structure pays for. The next post asks what happens when each part is improved on its own terms, and the one after that asks why intelligent people keep repeating the pattern.

For now, one question. What happens when we optimize a system without ever questioning what it is for?

## References & Further Reading

- **Bathtubs 101** (excerpt from *Thinking in Systems*, draft), Donella H. Meadows, Donella Meadows Project, undated draft. <https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf>. Source of the definition of stocks, the bathtub principles and stocks as delays and buffers. A pre-publication draft, not the 2008 text.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source of the bathtub and department-store results (classroom studies, not population estimates).
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Original source of the debt metaphor quoted above.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. Source of the prudent/reckless distinction.
- **Constitution of the Lacedaimonians, ch. 2**, Xenophon, trans. E. C. Marchant, Perseus Digital Library (Loeb), 1925. <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. Primary account of Spartan boyhood education, by an admirer of Sparta.
- **Politics, Book VIII**, Aristotle, trans. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/politics.8.eight.html>. Education fitted to the form of government.
- **The Republic, Book VII**, Plato, trans. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Plato/republic.8.vii.html>. Education and compulsion, in the context of an ideal city.
- **Nicomachean Ethics, Book II**, Aristotle, trans. W. D. Ross, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. Habit as the product of repeated practice, formed by legislators.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, April 1968. <https://www.melconway.com/Home/Committees_Paper.html>. The original statement of what became known as Conway's Law.
- **Conway's Law**, Martin Fowler, 2022. <https://martinfowler.com/bliki/ConwaysLaw.html>. A practitioner's overview; experiential, not empirical.

