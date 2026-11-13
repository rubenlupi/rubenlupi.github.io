---
title: "The Limits of Seeing Everything as a System"
description: "All models are wrong: where systems thinking explains, where it can't predict, and when it erases the people inside the system."
date: 2026-11-13
editorialDate: 2026-11-02   # ONE shared archive slot for the whole series, assigned by pipeline finalize (policy §6)
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
draft: true
---

Systems thinking is itself a model, and a model has a boundary. It is strongest at explaining recurring dynamics. It is weakest at prediction, at attributing causes, and at anything involving power and purpose.

The earlier posts in this series leaned on systems language. This one turns it on itself. A series that criticizes narrow boundaries should draw its own honestly.

*About the sources. This series engages with Donella Meadows' ideas as they appear in legally accessible sources (a draft excerpt of* Thinking in Systems *published by the Donella Meadows Project, her essays, and independent systems research), not as a review of the full book. That limit is not a footnote to this post; it is one of its examples.*

## The model-builder's own warning

John Sterman, who studied with Meadows and is a sympathetic insider, [wrote](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) that all models are wrong. He says system dynamicists reject validation as "establishing truthfulness", and that model results are usually more sensitive to boundary, aggregation and decision-rule assumptions than to parameters.

He also argues that causal maps alone are insufficient, because people cannot mentally simulate even simple dynamic systems. That cuts against the diagrams in this series. When I drew the capability trap in text in Part 3, I borrowed a structure from published research. My drawing is an interpretive model. It is not a finding, and it carries the overconfidence it is supposed to cure.

Sterman even calls system dynamics "a worldview, a paradigm in the sense of Thomas Kuhn". That is an honest description. It means systems thinking has priorities, and the lens is not neutral.

## Meadows is humble too

Meadows' own essays are cautious. In [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/) she writes that "everything you know, and everything everyone knows, is only a model", and that "Systems can't be controlled, but they can be designed and redesigned."

Her [leverage-point list](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) is, in her words, "tentative" and "its order is slithery". My interpretation is that the hierarchy is a heuristic lens, not a validated predictive ranking. If someone presents "paradigm beats rules beats parameters" as a law, they have gone further than Meadows did, and further than the evidence used in this series.

There is also an unresolved difference of emphasis. Meadows' essay puts paradigms near the top of her list. Sterman says that for modellers the highest leverage point is changing clients' mental models by involving them in finding the model's flaws. These views are compatible, but they are not identical. Is a paradigm changed by argument, by participation, or by experience?

## What kind of evidence we actually have

The capability-trap theory is the best-documented mechanism in this series, and its evidence has a specific shape. Repenning and Sterman's theory ["initially emerged from the study of two improvement initiatives in a major automaker"](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf) and is supported by "over a dozen in-depth case studies" and simulation models. That is real evidence. It is not a randomized trial, and the DuPont and BP figures are outcomes reported by practitioners, not independent evaluations.

The consequence is a distinction I should have kept sharper earlier. A model can explain why a pattern recurs without predicting when it will happen in your organization. Explanation is where systems thinking is strong. Prediction and attribution of a specific cause to a specific outcome need data the diagrams cannot provide.

Take the hypothetical platform team from Part 3. Incidents and rework rise after a quarter of pressure. The diagram says drained capability. A rival explanation fits the same picture: demand grew, or a new dependency arrived, and the incidents would have risen anyway. A causal-loop diagram cannot rule that out. Data could help to separate the two: incident rates per unit of traffic rather than raw counts, whether the failing components are the ones whose tests, runbooks or upgrades were deferred, and whether a comparable team under the same demand but without the pressure fared differently. That is my reasoning, not a method taken from a source.

The same caution applies to the DuPont comparison, 23 comparable plants against those implementing the programme. It is not randomized, so selection could explain part of the gap: plants that chose the programme may differ in ways that also affect their pumps.

Here is what would count against this series' thesis. If an organization escaped a capability trap through component upgrades alone, the claim that components cannot fix it would weaken. If changing measurement or goals reliably produced either no change or only new gaming, the claim that structure sometimes helps would weaken. The sources used here contain no evidence for either, though that says more about the series' boundary than about the world.

## The mirror image of the blame error

Repenning and Sterman criticize the fundamental attribution error: blaming people when structure is the cause. There is a mirror error: blaming structure for everything. It erases individual responsibility, and it hides something a feedback diagram rarely shows, which is who designed the structure and who benefits from it.

Aristotle gives the individual side real weight. In the [*Nicomachean Ethics*](http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html) he says "moral virtue comes about as a result of habit", and also that "legislators make the citizens good by forming habits in them". Habit is practised by individuals and shaped by legislators. Both belong in the account. My interpretation is that a systems explanation that leaves out either one is incomplete.

Attribution errors also curdle into stereotypes. Repenning and Sterman quote a manager who blamed "Western" engineers, and I read the example as telling: a structural problem becoming a trait of a group. A systems framing can be a moral corrective to that. It can also be a political act, because deciding that "the system" is the cause also decides who is responsible for changing it. Meadows does not ignore this. Her Leverage Points essay says "Power over the rules is real power", and advises paying attention "to the rules, and to who has power over them". So the critique has to be sharper than "systems thinking forgets power". What the accessible sources do not supply is a method for contesting that power: naming it is not the same as showing how competing groups argue over a goal. And causal-loop diagrams like this series' own still leave it out.

## Where the analogies break

I used a pod autoscaler to make delay visible. The [Kubernetes documentation](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) describes a literal control loop with a defined period, tolerance and stabilization window. You can read its formula and test it.

A school's assessment regime is not a controller. In the Chicago work, teachers and students adapted, gamed and resisted: [Jacob and Levitt](https://www.nber.org/papers/w9413) found cheating that responded strongly to relatively minor changes in incentives. A controller that changed its mind about what it was optimizing because it didn't like the number would be a very strange controller.

So the autoscaler is an illustration of a mechanism, not evidence that classrooms or engineering teams behave the same way. The honest use of the analogy is to make delay vivid and then stop.

History has a version of the problem too. Xenophon, as I noted in Part 1, was an Athenian admirer of Sparta, and [his account](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) idealizes it; that caveat is mine, since the text shows admiration without proving idealization. The Greek sources describe elite citizen males. Neither is a design brief for modern schools.

## The boundary of this series

The last example is this series itself. It draws on one draft excerpt of the book and two of Meadows' essays, plus independent scholarship. A missing chapter's content must not be presented as Meadows' view, and the series tries not to. Where the book's other chapters would be, the series has a blind spot of its own.

That is, I think, a small, practical demonstration of Sterman's point about boundaries. What a model leaves out is invisible from inside it, and this account of Meadows' ideas has a fence whose position the series did not choose.

## What survives

What remains after all this? I would say: systems thinking is a good way to ask why a pattern keeps recurring, and a poor way to claim you know the next outcome. It earns trust through the humility its best practitioners show about it.

The question I take into the last post is this. If every model has a boundary that its builder cannot fully see, how would the people relying on the model ever discover where it ends, before the world shows them?

## References & Further Reading

- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Source for model limits, validation, boundary assumptions, causal maps and the "paradigm" description. Written by a sympathetic insider.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/dancing-with-systems/>. Source of Meadows' statements on models and control. Her essay, not the book.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, undated. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Source of the "tentative" and "slithery" caveats. Her essay, not the book.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning and John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Source for the evidence base of the capability trap and the attribution errors.
- **Nicomachean Ethics, Book II**, Aristotle, trans. W. D. Ross, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. Habit and the role of legislators in forming virtue.
- **Horizontal Pod Autoscaling**, Kubernetes documentation (current). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. A literal control loop, used as a contrast with social systems.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob and Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Chicago evidence that people adapt to incentives (abstract level).
- **Constitution of the Lacedaimonians, ch. 2**, Xenophon, trans. E. C. Marchant, Perseus Digital Library (Loeb), 1925. <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. A source whose admiration for Sparta shapes its account.

