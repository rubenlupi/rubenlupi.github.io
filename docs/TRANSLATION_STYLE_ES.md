# Spanish edition — style guide

The blog is written in English and published in a parallel Spanish edition under `/es/`. This guide governs the
Spanish text. Fidelity rules are in [`EDITORIAL_POLICY.md`](EDITORIAL_POLICY.md) (§1) and in the
`editorial-translator` agent definition. Where this guide and fidelity conflict, fidelity wins.

## Variant and register

- **Spanish from Spain** (castellano peninsular): *ordenador*, *móvil*, *vale*. Avoid regionalisms that
  would sound odd elsewhere.
- Address the reader as **tú**, as Spanish tech writing usually does. Keep the author's tone: reflective, precise,
  sometimes provocative, never solemn.
- Write natural Spanish syntax. Do not mirror English word order, and do not keep English punctuation habits
  (e.g. title case in headings: write "Por qué seguimos equivocándonos", not "Por Qué Seguimos Equivocándonos").
  Terminology table entries are defaults, not obligations: if a natural Spanish sentence wants another word, use it
  and say so in `notes.md`.
- Avoid anglicisms when a good Spanish word exists (*retroalimentación*, *rendimiento*, *despliegue*). Keep the
  English term when it is the established term of the trade (*software*, *testing*, *pipeline*, *on-call* if no
  better local term fits). On first mention of a key concept you may give the English term in parentheses, e.g.
  "puntos de apalancamiento (*leverage points*)", when the reader may meet it in English sources.

## Faithful to the meaning, free in the form

The first Spanish edition was rejected by the author for being **too literal**: correct Spanish that follows the
English sentence by sentence. Avoid that above all. A good test is to ask whether a reader would guess the text was
translated. If they would, rewrite it.

### Anti-calque checklist

- **English sentence scaffolding.** "Start with…", "The first: … The second: …", "It turns out…", "Here is the
  thing", "Consider…" become Spanish openings, or disappear.
- **Abstract nouns as subjects.** "Two assumptions sit under most of how we run teams" is not «Dos supuestos
  subyacen a buena parte de cómo dirigimos equipos». Prefer verbs and people: «Casi todo lo que hacemos al dirigir
  equipos, escuelas o planes de entrenamiento descansa en dos ideas».
- **Literal idioms.** "isn't working hard enough" is not «no está trabajando lo bastante duro», but «no se esfuerza
  lo suficiente». "draft excerpt" is not «extracto en borrador», but «fragmento de un borrador».
- **Possessives, passives and gerunds.** Cut the redundant *su/sus*, prefer active voice or *se* constructions,
  and avoid strings of gerunds and nouns ending in *-ción*.
- **Rhythm.** English likes short declaratives in a row. Spanish tolerates (and often prefers) a longer, well-tied
  sentence. Join with *pero, así que, de modo que, mientras, aunque*. Do not chop.
- **Punctuation.** Keep few colons and semicolons. Use em-dashes —like this— sparingly, Spanish style.
- **Fixed expressions.** "In other words" → «dicho de otro modo», «es decir». "That said" → «aun así», «con todo».
  "At scale" → «a gran escala». "The point is" → «lo que importa es».
- **False friends.** *eventually* ≠ «eventualmente», *actually* ≠ «actualmente», *realize* ≠ «realizar»,
  *assume* ≠ «asumir» (prefer «suponer»), *evidence* ≠ «evidencia» (prefer «pruebas», «datos»), *relevant* (often
  «pertinente»), *consistent* ≠ «consistente» (prefer «coherente», «constante»).

### Before and after (from this blog)

| English | Too literal (rejected) | Spanish essay |
|---|---|---|
| Two assumptions sit under most of how we run teams, schools and training plans. | Dos supuestos subyacen a buena parte de cómo dirigimos equipos, escuelas y planes de entrenamiento. | Casi todo lo que hacemos al dirigir equipos, escuelas o planes de entrenamiento descansa en dos supuestos. |
| If results are bad, someone isn't working hard enough. | Si los resultados son malos, alguien no está trabajando lo bastante duro. | Si los resultados son malos, es que alguien no se esfuerza lo suficiente. |
| Start with the simplest object in systems thinking. | Empecemos por el objeto más simple del pensamiento sistémico. | Conviene empezar por lo más básico del pensamiento sistémico. |

## Terminology (living list)

Keep this consistent across posts. Add entries when a translator settles a recurring term (record it in the job's
`notes.md`; the author promotes it here).

| English | Spanish |
|---|---|
| systems thinking | pensamiento sistémico |
| stock / flow | stock / flujo (first mention: "stock, o acumulación") |
| feedback loop | bucle de retroalimentación |
| reinforcing / balancing loop | bucle de refuerzo / bucle de equilibrio (o compensador) |
| delay | retraso |
| leverage point | punto de apalancamiento |
| technical debt | deuda técnica |
| platform engineering | ingeniería de plataformas |
| incident | incidente |
| toil | *toil* (trabajo operativo repetitivo), first mention explained |
| throughput | rendimiento (*throughput*) |
| Break & Change, BREAK, CHANGE, EXPERIENCE, CHALLENGE, QUESTION | unchanged (name of the collection and its stages) |

Break & Change single-article chapter headings (validator-enforced):
`1. Ideas clave — BREAK`, `2. Lo que sigue importando hoy — CHANGE`, `3. Por qué seguimos equivocándonos — EXPERIENCE`,
`4. Los puntos ciegos del libro — CHALLENGE`, `5. Mi valoración — QUESTION`.

## Typography and numbers

- Decimal comma (2,45 minutos). Thousands with a point from five digits up (100.000; but 4000).
- Dates: "13 de noviembre de 2026". Percentages with a space: "94 %".
- Quotation marks: «comillas latinas» for quotations in running text, “inglesas” for quotations inside quotations.
- Titles of works in italics, in their original language.
- References section heading: `## Referencias y lecturas recomendadas`.
