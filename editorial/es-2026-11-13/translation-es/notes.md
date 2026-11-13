## Terminology
- Series title → «Los sistemas que construimos, los sistemas en que vivimos» (same in every `seriesPart.title`; `seriesPart.slug` stays `systems-we-build`).
- stock → stock, with «stock, o acumulación» on first mention in Part 1; flow → flujo; stock/flow kept as in the style guide.
- feedback loop → bucle de retroalimentación; balancing/reinforcing loop → bucle de equilibrio / de refuerzo; delay → retraso; leverage point → punto de apalancamiento.
- capability trap → trampa de la capacidad; policy resistance → resistencia a las políticas (*policy resistance*); Self-Confirming Attribution Error → Error de Atribución Autoconfirmatorio (English in parentheses on first mention); fundamental attribution error → error fundamental de atribución.
- better-before-worse / worse-before-better → «mejor antes que peor» / «peor antes que mejor».
- toil → *toil* (trabajo operativo repetitivo), explained on first mention in Part 2 (the first part where it appears); later parts keep *toil*.
- throughput → rendimiento (*throughput*) on first mention in each part where it appears; later «rendimiento» alone.
- invisible fences → «vallas invisibles»; boundary → límite; paradigm → paradigma.
- firefighting → «gestión de crisis» in the Part 3 description and problem statement; «extinción de incendios» in the running text on heroes.
- Xenophon's "Warden" → «Warden» (el celador) in Part 1, kept in English with a gloss since it is the translator's term in Loeb.
- The text diagrams of the loops in Part 3 (B1–B3, R1) have their labels translated; the signs, arrows and loop codes are unchanged. The two code formulas in Part 1 and the HPA formula in Part 3 are kept in English identifiers exactly as in the original.
- Book-title and article-title references (e.g. *Thinking in Systems*, *Leverage Points*, *Dancing With Systems*) are kept in English; Aristotle and Plato works are translated in running text (*Política*, *República*, *Ética a Nicómaco*) and kept in English in the References.
- DORA metrics: change lead time → tiempo de entrega de los cambios; deployment frequency → frecuencia de despliegue; failed deployment recovery time → tiempo de recuperación de despliegues fallidos; change fail rate → tasa de fallos de cambio; deployment rework rate → tasa de retrabajo de despliegues.
- Pre-registered → preregistrado. Decimal comma, thousands point from 5 digits («100.000», «4000», «60.000»), «94 %» with space.
- Frontmatter: the essay has no `draft` field in the original; `draft: true` was added as instructed. The YAML comment after `editorialDate` in the series parts was dropped (the value is unchanged).

## Quotations
- Essay (LinkedIn/Meadows/Anthropic): LinkedIn («a foundation to onboard 4,000 services», «in its own ephemeral pod», «cannot be completely attributed», «shorter feedback loops»); Meadows' Leverage Points (parameters, feedback loops, information flows, rules, missing feedback, delays); Anthropic Building effective agents («complex frameworks or specialized libraries», «simple, composable patterns»).
- Part 1: Meadows draft excerpt (stock definition, "accumulations, or integrals, of flows", "dynamic equilibrium", the outflow sentence, stocks as delays/buffers); Cunningham (two lines on debt); Fowler (prudent vs reckless); Conway ("copies of the communication structures"); Xenophon's "Warden"; Aristotle *Politics* VIII, Plato *Republic* VII, Aristotle *Nicomachean Ethics* II.
- Part 2: Meadows (*Dancing With Systems*, *Leverage Points* quotes); Sterman («invisible fences»); Jacob & Levitt («with bright line rules», «relatively minor changes in incentives»); DORA («speed and stability are not tradeoffs», «the likelihood that teams will try to game the metrics»); Fowler (delivered business value).
- Part 3: Repenning & Sterman (field quotes, «initially emerged…», «over a dozen…», «by as much as a factor of three», «Nobody ever gets credit…», «heroes»); Kubernetes HPA documentation (conservative 0 % assumption); Meadows (delays); Sterman (policy resistance); Cunningham; Google SRE («toil tends to expand if left unchecked»).
- Part 4: Sterman («establishing truthfulness», «a worldview, a paradigm in the sense of Thomas Kuhn»); Meadows («everything you know…», «Systems can't be controlled…», «tentative», «slithery», «Power over the rules is real power», «to the rules, and to who has power over them»); Repenning & Sterman; Aristotle.
- Part 5: Aristotle, Plato, DORA, Fowler, Meadows, Sterman («we measure what we care about…»), Repenning & Sterman, Meadows on power and a single player changing the goal.
- All translated from the English as quoted in the posts, not from the original wording elsewhere (I did not open the sources); each post's References ends with «Las citas de textos en inglés son traducción propia.» Where the original text was itself a translation into English from Greek (Jowett, Ross, Marchant), the Spanish is a translation of the English wording shown.

## Open questions
- Quotation wording is rendered from the English as it appears in the posts; I did not compare with the sources. The author may want to check that Spanish phrasing of key quotations (e.g. «equilibrio dinámico», «vallas invisibles») is acceptable as «traducción propia».
- «Warden» in Part 1: I kept the English word with the gloss «el celador»; the author may prefer another rendering.
- Part 3 loop diagrams: labels translated (e.g. «Trabajar más duro»); if the author wants the diagram labels kept in English to match the paper's figures, revert them.
- Part 1: «Warden» and the phrase «tutores esclavos» («slave tutors») translate the original literally.
- Part 4: «sympathetic insider» → «conocedor comprensivo desde dentro»; slightly interpretive, the original is a compact phrase.
- The original says «Part 5» / «Parte 5» in series cross-references; kept as «Parte N».
- Length: all translations should be within the gate's ratio, but I could not run the gate.
