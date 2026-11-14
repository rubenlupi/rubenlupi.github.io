---
title: "Systems Thinking Explains Why, Not What Happens Next"
description: "All models are wrong, including the one this series has been using: where systems thinking explains, where it can't predict, and when blaming \"the system\" erases the people inside it."
date: 2026-11-13
editorialDate: 2026-10-26   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
series: break-and-change
seriesPart:
  title: "The Systems We Build, The Systems We Live In"
  slug: systems-we-build
  number: 4
  total: 5
  stage: "CHALLENGE"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "Mathematics & Reasoning"]
tags: ["Systems Thinking", "Models", "Causal Inference", "Critical Thinking"]
draft: false
---

The bluntest warning about systems models comes from one of the people who build them. John Sterman studied with Meadows, writes as a systems scientist, and gave his reflections on the field a title that starts "All models are wrong". Systems thinking is itself a model, and a model has a boundary: it is strongest at explaining recurring dynamics, and weakest at prediction, at attributing causes, and at anything involving power and purpose. Anyone who has spent three essays complaining about narrow boundaries owes the reader a look at their own.

I haven't had access to the full book.

## The modeler who says all models are wrong

System dynamicists, [Sterman says](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf), reject validation as "establishing truthfulness", and model results are usually more sensitive to boundary, aggregation and decision-rule assumptions than to parameters.

He also argues that causal maps alone are insufficient, because people cannot mentally simulate even simple dynamic systems. That cuts against my own diagrams. Any diagram of the capability trap borrows a structure from published research, and the drawing is an interpretive model, not a finding. It carries the overconfidence it is supposed to cure, like a lecture on humility delivered with great certainty.

Sterman even calls system dynamics "a worldview, a paradigm in the sense of Thomas Kuhn". That is honest, and uncomfortable: a worldview has priorities, so the lens is not neutral.

## Meadows hedged her own list

Meadows' essays are cautious too. In [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/) she writes that "everything you know, and everything everyone knows, is only a model", and that "Systems can't be controlled, but they can be designed and redesigned."

Her [leverage-point list](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) is, in her words, "tentative" and "its order is slithery". My interpretation is that the hierarchy is a heuristic lens, not a validated predictive ranking. Anyone who presents "paradigm beats rules beats parameters" as a law has gone further than Meadows did, and further than any evidence I have drawn on. Being more certain than a careful author is an odd way to honor her.

A difference of emphasis also remains unresolved. Meadows' essay puts paradigms near the top of her list, while Sterman says that for modelers the highest leverage point is changing clients' mental models by involving them in finding the model's flaws. The views are compatible without being identical, and they leave a real question open: is a paradigm changed by argument, by participation, or by experience?

## Good at why, poor at when

The capability trap is the best-documented mechanism in this series, and its evidence has a specific shape. Repenning and Sterman's theory ["initially emerged from the study of two improvement initiatives in a major automaker"](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf) and is supported by "over a dozen in-depth case studies" and simulation models. That is real evidence, but not a randomized trial, and the DuPont and BP figures are outcomes reported by practitioners, not independent evaluations.

A model can explain why a pattern recurs without predicting when it will happen in your organization, or proving what caused a particular outcome; that takes data.

Take an invented platform team whose incidents and rework rise after a quarter of pressure. The diagram says drained capability. A rival explanation fits the same picture just as well: demand grew, or a new dependency arrived, and the incidents would have risen anyway. A causal-loop diagram cannot rule that out, because a diagram, unlike a dataset, is never surprised. Data could help separate the two: incident rates per unit of traffic rather than raw counts, whether the failing components are the ones whose tests, runbooks or upgrades were deferred, and whether a comparable team under the same demand but without the pressure fared differently. The reasoning is mine.

The DuPont comparison, 23 comparable plants against those implementing the program, needs the same caution. It is not randomized, so selection could explain part of the gap: plants that chose the program may differ in ways that also affect their pumps.

Two kinds of evidence would count against my thesis. If an organization escaped a capability trap through component upgrades alone, the claim that components cannot fix it would weaken. If changing measurement or goals reliably produced either no change or only new gaming, the claim that structure sometimes helps would weaken. None of the sources I have used contains evidence for either.

## When "it's the system" becomes an alibi

Repenning and Sterman criticize the fundamental attribution error: blaming people when structure is the cause. Its mirror image, blaming structure for everything, erases individual responsibility and hides what a feedback diagram rarely shows: who designed the structure and who benefits from it. "The system" is the one culprit that can never be fired.

Aristotle gives the individual side real weight. In the [*Nicomachean Ethics*](https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html) he says "moral virtue comes about as a result of habit", and also that "legislators make the citizens good by forming habits in them". Individuals practice habits and legislators shape them; my interpretation is that a systems explanation that leaves out either one is incomplete.

Attribution errors also curdle into stereotypes. Repenning and Sterman quote a manager who blamed "Western" engineers, which I read as a structural problem turning into a trait of a group. A systems framing can correct that. It can also be a political act, because deciding that "the system" is the cause also decides who is responsible for changing it. Meadows does not ignore this: her Leverage Points essay says "Power over the rules is real power", and advises paying attention "to the rules, and to who has power over them". So the critique has to be sharper than "systems thinking forgets power". What the texts I could read do not supply is a method for contesting that power, and naming it is not the same as showing how competing groups argue over a goal. Causal-loop diagrams, mine included, still leave it out.

## The autoscaler never argues back

I used a pod autoscaler to make delay visible. The [Kubernetes documentation](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) describes a literal control loop with a defined period, tolerance and stabilization window; you can read its formula and test it.

A school's assessment regime is not a controller. In the Chicago work, teachers and students adapted, gamed and resisted: [Jacob and Levitt](https://www.nber.org/papers/w9413) found cheating that responded strongly to relatively minor changes in incentives. A controller that changed its mind about what it was optimizing because it didn't like the number would be a very strange controller. So the autoscaler illustrates a mechanism; it is not evidence that classrooms or engineering teams behave the same way, and the honest use of the analogy is to make delay vivid and then stop.

## My own fence

Everything I know of Meadows here comes from one draft excerpt of the book and two of her essays, plus independent scholarship, and I have avoided guessing at the missing chapters. Sterman's point applies to me: what a model leaves out is invisible from inside it. The most common way to have a fence is not to have chosen where it goes.

## What survives the critique

Quite a lot of systems thinking survives, because it earns trust through the humility its best practitioners show about it. Its weakest advocate is a confident one.

If every model has a boundary that its builder cannot fully see, how would the people relying on it discover where it ends, before the world shows them?

## References & Further Reading

- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source for model limits, validation, boundary assumptions, causal maps and the "paradigm" description. Written by a sympathetic insider.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/dancing-with-systems/>. Source of Meadows' statements on models and control. Her essay, not the book.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the "tentative" and "slithery" caveats. Her essay, not the book.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Source for the evidence base of the capability trap and the attribution errors.
- **Nicomachean Ethics, Book II**, Aristotle, trans. W. D. Ross, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. Habit and the role of legislators in forming virtue.
- **Horizontal Pod Autoscaling**, Kubernetes documentation (current). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. A literal control loop, used as a contrast with social systems.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob and Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Chicago evidence that people adapt to incentives (abstract level).


