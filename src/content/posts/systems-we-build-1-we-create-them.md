---
title: "Mission Statements Don't Run Systems. Bathtubs Do."
description: "Most of the MIT graduate students in John Sterman's classes couldn't sketch the water level in a bathtub. Why a system behaves according to what piles up in it and what it rewards, from Spartan boyhood to your pull-request queue."
date: 2026-11-13
editorialDate: 2026-10-26   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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

Show graduate students at MIT a graph of the water running into and out of a bathtub, ask them to sketch how much water is in the tub, and most of them get it wrong. A bath, of all things, beats them. That matters well beyond the bathroom, because two assumptions sit under most of how we run teams, schools and training plans: that if every part gets better, the whole gets better, and that if results are bad, someone isn't working hard enough.

Both can fail, for a reason you can describe. A system behaves according to what accumulates inside it and what it rewards, not according to how good its parts look or what its mission statement says. The mission statement is the part of a system that everyone reads and nothing obeys.

I haven't had access to the full book, so what follows draws on a pre-publication draft excerpt of *Thinking in Systems* published by the Donella Meadows Project, her essays and independent systems research, and leaves the chapters I haven't seen alone.

## A bathtub is a better model than a to-do list

The simplest object in systems thinking is the stock. In a draft excerpt of *Thinking in Systems* [published by the Donella Meadows Project](https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf), Meadows defines it as "a store, a quantity of material or information that has built up over time": water in a tub, money in an account, unreviewed pull requests in a queue. The same excerpt calls stocks "accumulations, or integrals, of flows". Flows are the rates that fill or drain a stock, and over one small interval Δt the arithmetic is:

```
stock(t + Δt) = stock(t) + (inflow − outflow) · Δt
```

In continuous time it becomes a derivative:

```
d(stock)/dt = inflow(t) − outflow(t)
```

The algebra is easy; the consequences are not. The stock rises while inflow exceeds outflow, falls in the reverse case, and holds steady when the two match, a state the excerpt calls "dynamic equilibrium". It also makes a point that is easy to forget when a number looks wrong: "A stock can be increased by decreasing its outflow rate as well as by increasing its inflow rate." Every bathtub has a plug, and plans to raise a number have a way of forgetting it exists.

Stocks "change only slowly, never suddenly, even if the rates flowing into or out of them change suddenly. Therefore stocks act as delays in systems". And they are buffers: "The presence of stocks allows flows to be independent, decoupled, and dependable."

## Clever people read the tap and miss the tub

You would expect all this to be obvious. John Sterman, a systems scientist who studied with Meadows, [reports otherwise](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf). In his classroom studies, only 36% of MIT graduate students correctly sketched a bathtub's water level from its inflow and outflow. In a department-store task, 42% and 30% answered the two stock questions correctly, while 94% read the flow graph itself correctly.

These are one instructor's classes, not a wider population, but the pattern is hard to miss. Nearly everyone can tell you how fast the water is running, and far fewer can tell you whether the bathroom is about to flood.

## Where software hides its bathtubs

The excerpt says nothing about software, so from here on the reading is mine.

Work in progress is a stock, filled by arrivals and drained by completions. A team that feels "busy" may simply have had more coming in than going out for months. The queue remembers every promise the roadmap has forgotten.

The equation is unforgiving: while arrivals exceed completions by any margin, the queue grows every interval. Finishing faster and declining or deferring new work are two handles on one bathtub, which is the stock-and-flow argument for limiting work in progress. So before you ask who is slow, ask which flow is larger. It is a less satisfying question, because the answer is rarely a person.

Technical debt is a stock too, though "debt" is a metaphor with no single unit of measure. Ward Cunningham's [original experience report](https://c2.com/doc/oopsla92.html) put it this way: "Shipping first time code is like going into debt", and "Every minute spent on not-quite-right code counts as interest on that debt." Martin Fowler later added that ["the useful distinction isn't between debt or non-debt, but between prudent and reckless debt"](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), and crossed it with whether the debt was deliberate or inadvertent. So the stock has more than one inflow, and some of them nobody chose. The interest is charged either way.

## The structure gives the purpose away

Stocks explain behavior; purpose explains why they fill with what they do. Education makes this unusually visible, because people argued over its purposes in writing.

Xenophon, an Athenian who admired Sparta, [describes](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) how Spartan boys were placed under an official, the "Warden", drawn from the class that filled the highest offices, in place of slave tutors chosen by each father. They went barefoot, got one garment a year, and were rationed food with a measure of theft tolerated. Other Greeks, he says, sent their sons to teachers of letters, music and wrestling. Whatever else the Spartan arrangement was, it was not confused about what it wanted.

Aristotle, in the *Politics*, [argues](https://classics.mit.edu/Aristotle/politics.8.eight.html) that the legislator should attend above all to the education of the young, and that the citizen should be "molded to suit the form of government under which he lives". Plato's Socrates, in the [*Republic*](https://classics.mit.edu/Plato/republic.8.vii.html), pushes from another side: education is not putting knowledge into the soul "like sight into blind eyes", and "knowledge which is acquired under compulsion obtains no hold on the mind".

Each witness needs a caveat. Xenophon's account is an admirer's portrait. All three describe citizen males, and who actually got any schooling is a question these texts don't settle. Plato's remark comes from a discussion of educating guardians in an ideal city, not from a general theory of schooling.

Within those limits, my interpretation is that Sparta and Athens organized boyhood differently because they pursued different civic goals: the structure followed the purpose. Aristotle supplies one stock I can name, in the [*Nicomachean Ethics*](https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html): "moral virtue comes about as a result of habit", and "legislators make the citizens good by forming habits in them". I read habit as an accumulation built by repeated practice, and a school's daily routine as the inflow a legislator can design. The vocabulary is mine, not Aristotle's, and this is no morality tale about two cities.

## Software ships its org chart

Software has its own, much-quoted version. In 1968 Melvin Conway [wrote](https://www.melconway.com/Home/Committees_Paper.html) that organizations designing systems are constrained to produce designs that are "copies of the communication structures" of those organizations. Fowler's [overview](https://martinfowler.com/bliki/ConwaysLaw.html) notes that people have used this deliberately, as the "Inverse Conway Maneuver", and cautions that it is no quick fix for rigid legacy systems. His support is experience rather than empirical research, which puts reorganizing teams for a better architecture where most software advice lives.

Greek schooling and software architecture need not share a mechanism; the parallel is an analogy. Both answer a question about what to optimize, and the answer shows up in the structure before anyone writes it down.

## You can't read a system from its parts

A team of excellent engineers can still have a growing queue. A school with a noble mission statement can still teach whatever its structure pays for, and the structure, unlike the mission statement, is never out of date.

What happens when we optimize a system without ever asking what it is for?

## References & Further Reading

- **Bathtubs 101** (excerpt from *Thinking in Systems*, draft), Donella H. Meadows, Donella Meadows Project, undated draft. <https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf>. Source of the definition of stocks, the bathtub principles and stocks as delays and buffers. A pre-publication draft, not the 2008 text.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source of the bathtub and department-store results (classroom studies, not population estimates).
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Original source of the debt metaphor quoted above.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. Source of the prudent/reckless distinction.
- **Constitution of the Lacedaimonians, ch. 2**, Xenophon, trans. E. C. Marchant, Perseus Digital Library (Loeb), 1925. <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. Primary account of Spartan boyhood education, by an admirer of Sparta.
- **Politics, Book VIII**, Aristotle, trans. Benjamin Jowett, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/politics.8.eight.html>. Education fitted to the form of government.
- **The Republic, Book VII**, Plato, trans. Benjamin Jowett, MIT Internet Classics Archive. <https://classics.mit.edu/Plato/republic.8.vii.html>. Education and compulsion, in the context of an ideal city.
- **Nicomachean Ethics, Book II**, Aristotle, trans. W. D. Ross, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. Habit as the product of repeated practice, formed by legislators.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, April 1968. <https://www.melconway.com/Home/Committees_Paper.html>. The original statement of what became known as Conway's Law.
- **Conway's Law**, Martin Fowler, 2022. <https://martinfowler.com/bliki/ConwaysLaw.html>. A practitioner's overview; experiential, not empirical.


