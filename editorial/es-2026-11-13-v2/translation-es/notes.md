## Terminology
- Series title → «Los sistemas que construimos, los sistemas que habitamos» (identical in all five `seriesPart.title`). This **differs from the first edition** («…los sistemas en que vivimos»): «habitamos» keeps the parallel and sounds less translated. Revert if the author prefers continuity with the published title.
- Titles changed from the first edition where a better Spanish title existed: essay «A veces el problema no es el componente, sino el sistema»; Part 1 «No solo vivimos en sistemas: también los creamos»; Part 3 «Por qué la gente inteligente repite una y otra vez los mismos errores». File names (slugs) are unchanged.
- systems thinking → pensamiento sistémico; stock → stock («el stock, o acumulación» on first mention, Part 1); flow → flujo; inflow/outflow → flujo de entrada / de salida.
- boundary → **frontera** (not «límite»), consistently in Parts 2–5, because «límite» is needed for "limits"/"limit" (Part 4 title, source notes) and «frontera» suits "a line drawn around". invisible fences → «vallas invisibles».
- feedback loop → bucle de retroalimentación; reinforcing / balancing → de refuerzo / de equilibrio; delay → retraso; leverage point → punto de apalancamiento; paradigm → paradigma.
- target → «meta» (numérica); goal → «objetivo». The English distinction matters in Part 2 ("A target is usually a parameter… do the work of a goal") and is kept throughout.
- capability trap → trampa de la capacidad; capability stock → stock de capacidad; capability work → «trabajo que refuerza la capacidad» on first mention, then «trabajo de capacidad»; "Protected capability time" → «Tiempo protegido para la capacidad».
- Loop labels: Work Harder → «Esforzarse más»; Work Smarter → «Trabajar mejor»; Shortcuts → «Atajos»; Reinvestment → «Reinversión». Codes B1–B3, R1 and arrows/signs unchanged; diagram labels translated.
- better-before-worse / worse-before-better → «mejor antes que peor» / «peor antes que mejor».
- Self-Confirming Attribution Error → «error de atribución autoconfirmado» (English in parentheses on first mention); fundamental attribution error → error fundamental de atribución; policy resistance → resistencia a las políticas (*policy resistance*).
- firefighting → «apagar fuegos» (Part 3, Part 5 "Chronic firefighting" → «Vivir apagando fuegos»).
- toil → *toil*, glossed «(el trabajo operativo repetitivo)» on first mention in Parts 2 and 5 (Part 5 can be read alone); Part 3 uses it only in a quotation and the References, unglossed.
- throughput → rendimiento (*throughput*) on first mention in Part 2; «rendimiento» elsewhere.
- DORA metrics: tiempo de entrega de los cambios; frecuencia de despliegue; tiempo de recuperación tras un despliegue fallido; tasa de fallos de los cambios; tasa de retrabajo de despliegues.
- gaming / game the metrics → «manipular (las métricas)»; for teachers/students «hacer trampas».
- pre-registration → «registro previo» / «registrada de antemano» (rather than the calque «preregistro»).
- Part 1 formulas: `inflow`/`outflow` translated to `entrada`/`salida` inside the code blocks so the text and formula match; `stock` kept. HPA formula (Part 3) kept verbatim (it is Kubernetes' own notation).
- "Part N" → «la N entrega» / «la segunda entrega», etc. ("post" → «entrega» when referring to the series, «artículo» otherwise).
- Works: Aristotle and Plato titles translated in running text (*Política*, *República*, *Ética a Nicómaco*); Meadows' essays and all References titles kept in English.
- Frontmatter: the YAML comment after `editorialDate` was dropped (value unchanged). The essay's original has no `draft` field; `draft: true` added as instructed. (Note: the first-edition files in `src/content/posts/es/` carry `draft: false`; these new files are `draft: true` per instructions.)
- Typography: decimal comma (3,7; 16,1; 2,45; 0,1), «100.000», «60.000», «4000», «36 %», «4-5 %».

## Quotations
- All quotations translated afresh from the English as quoted in the originals (I did not reopen the sources); each References section ends with «Las citas de textos en inglés son traducción propia.» Greek texts are rendered from the English translations shown (Jowett, Ross, Marchant).
- Essay: LinkedIn (onboard 4,000 services; own ephemeral pod; cannot be completely attributed; shorter feedback loops); Meadows, *Leverage Points* (constants/parameters; negative feedback loops; information flows; rules; missing feedback; delays); Anthropic (most successful implementations…; simple, composable patterns).
- Part 1: Meadows excerpt (stock definition; integrals of flows; dynamic equilibrium; outflow sentence; stocks as delays; stocks as buffers); Cunningham (two lines); Fowler (prudent vs reckless); Conway; Xenophon («Warden»); Aristotle *Politics*; Plato *Republic* (two); Aristotle *Nicomachean Ethics* (two).
- Part 2: Meadows *Dancing With Systems* (two), *Leverage Points* (paradigms; work in progress; tentative/slithery; not a recipe); Sterman («vallas invisibles»); Jacob & Levitt (two phrases); DORA (two); Fowler.
- Part 3: Repenning & Sterman (initially emerged; over a dozen; two field quotes; factor of three; nobody ever gets credit; heroes); Kubernetes HPA (0 % assumption); Meadows (delays); Sterman (policy resistance); Cunningham; Google SRE (toil expands).
- Part 4: Sterman (establishing truthfulness; worldview/paradigm); Meadows (only a model; can't be controlled; tentative; slithery; power over the rules; who has power over them); Repenning & Sterman (two); Aristotle (two); «occidentales».
- Part 5: Aristotle; Plato; DORA; Fowler; Meadows (important vs quantifiable; only a model; power over rules; single player); Sterman (we measure what we care about…).
- Shared quotations use identical Spanish wording across posts (e.g. the Meadows delays line, Fowler's business-value line, the Aristotle and Plato lines).

## Before and after
- Part 1, opening. EN: "Two assumptions sit under most of how we run teams, schools and training plans. The first: if every part gets better, the whole gets better. The second: if results are bad, someone isn't working hard enough." → ES: «Casi todo lo que hacemos al dirigir equipos, escuelas o planes de entrenamiento descansa en dos supuestos: que si cada parte mejora, mejora el conjunto, y que si los resultados son malos es porque alguien no se esfuerza lo suficiente.» (Three sentences and the "The first/The second" scaffolding become one sentence; follows the style guide's model.)
- Part 3, timing paragraph. EN: "A rewarding loop with short feedback beats a rewarding loop with long feedback every time it is judged on this quarter's numbers." → ES: «Entre dos bucles que dan fruto, el de retroalimentación corta gana al de retroalimentación larga siempre que se los juzgue por las cifras de este trimestre.»
- Part 5, experiment. EN: "Writing the dip down in advance is meant to stop leadership from abandoning the experiment at the first bad number." → ES: «Dejar el bache por escrito sirve para que la dirección no abandone el experimento ante la primera mala cifra.» (Similar elsewhere: "Here is the mechanism, walked through" → «El mecanismo, paso a paso, sería el siguiente»; "Three limits." → «Conviene tener presentes tres límites.»)

## Open questions
- «Warden» (Part 1): rendered «un magistrado, al que la traducción inglesa llama "Warden" (algo así como el supervisor)». The gloss is mine; the Greek term is *paidonomos*. The author may prefer «paidónomo».
- «sympathetic insider» (Part 4): rendered «habla desde dentro y con simpatía» in the text and «alguien de dentro y bien dispuesto hacia la disciplina» in References; «hacia la disciplina» makes explicit what the English leaves implicit. Please check.
- "All models are wrong" → «todos los modelos son erróneos» (Part 4 description and text). The common Spanish form of Box's aphorism is «todos los modelos son erróneos» / «están equivocados»; I chose the former.
- "speed and stability are not tradeoffs" (DORA) → «la velocidad y la estabilidad no están reñidas»: natural Spanish, but less technical than "trade-off". Check that it is acceptable as the blog's translation.
- Part 3 hypothetical team: "Everything in this paragraph is invented" is kept as «este párrafo», although the scenario spans two paragraphs in both versions (as in the original).
- Part 2: "The gains were real. They were also distributed by the shape of the measure." → «Las mejoras fueron reales, pero se repartieron según la forma de la medida.» The «pero» adds a mild contrast that "also" only implies.
- Part 5: "strong enough that experienced people get it wrong" → «lo bastante potente como para que gente con experiencia se equivoque con ella»; the English is slightly paradoxical and I kept it so.
- Part 5 assessment note: "flagged for author review" → «marcada para que él la revise», where «el autor» is the blog's author, as in the original (same ambiguity with Meadows as in English).
- Titles and the series title differ from the published first edition (see Terminology); URLs stay the same because slugs are unchanged.
- I could not run the gate; URL lists and H2 counts were compared by hand against each original and match.
