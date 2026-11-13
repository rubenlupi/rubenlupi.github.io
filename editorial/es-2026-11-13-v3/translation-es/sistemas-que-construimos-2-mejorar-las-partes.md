---
title: "Lo que la métrica no ve sale gratis"
description: "Una métrica es una valla alrededor de lo que decidiste que te importa. Las notas de los exámenes de Chicago y los paneles de ingeniería muestran qué pasa al otro lado, y por qué cambiar una regla puede servir más que perseguir un número mejor."
date: 2026-11-13
editorialDate: 2026-10-26
series: break-and-change
seriesPart:
  title: "Los sistemas que construimos, los sistemas que habitamos"
  slug: systems-we-build
  number: 2
  total: 5
  stage: "CHANGE"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "Software Engineering", "Learning & Education"]
tags: ["Systems Thinking", "DORA", "Metrics", "Leverage Points", "Assessment"]
lang: es
translationOf: systems-we-build-2-improving-the-parts
draft: true
---

Cuelga suficientes premios y castigos de la nota de un examen y puede que algunos adultos del colegio empiecen a hacer trampas. En los colegios de primaria de Chicago no fue un experimento mental: dos investigadores estimaron que cada año había trampas graves de profesores o directivos en una pequeña parte de las aulas, y que respondían con fuerza a cambios bastante modestos en los incentivos. Nadie se propuso montar un sistema que fabricara trampas. Simplemente, alguien trazó una línea alrededor de la nota.

Una métrica es una frontera alrededor de lo que has decidido que te importa, y todo lo que queda fuera de la línea sale gratis, al menos a ojos del número. Optimizar cifras locales dentro de una frontera estrecha puede estropear el resultado que queda fuera, y por eso lo útil suele ser cambiar una regla o un objetivo, no conseguir un número mejor.

No he tenido acceso al libro completo; lo que aquí procede de Meadows sale de dos de sus ensayos, leídos junto a investigación independiente sobre sistemas.

## Las vallas que nadie pone por escrito

En su ensayo [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/), Meadows reúne pautas para convivir con los sistemas. Una es tajante: «No maximices partes de sistemas o subsistemas ignorando el conjunto». Otra dice: «Presta atención a lo importante, no solo a lo cuantificable».

John Sterman, que estudió con Meadows, explica el mecanismo en [sus reflexiones](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf): los resultados de un modelo suelen depender más de los supuestos sobre la frontera, la agregación y las reglas de decisión que de los parámetros. Para la frontera usa la imagen de las «vallas invisibles», supuestos sobre qué queda dentro y qué fuera de un modelo que nadie escribe en ninguna parte. Una métrica funciona igual. Dice qué vamos a mirar y, con su silencio, qué no, y la gente aprende a leer ese silencio a una velocidad asombrosa.

## Cuando un parámetro hace de objetivo

El ensayo [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) de Meadows ordena los lugares donde intervenir en un sistema, los llamados puntos de apalancamiento. Aquí me sirve para una sola distinción: entre cambiar un parámetro (un número), una regla (qué se permite o se premia) o un objetivo (para qué sirve el sistema). Por encima de todo ello está lo que ella llama paradigma: «Los paradigmas son la fuente de los sistemas».

Meadows es prudente con su propia lista. La llama «un trabajo en curso», dice que «es provisional y su orden es escurridizo» y añade: «No es una receta para encontrar puntos de apalancamiento». Si la autora de una clasificación avisa de que su orden es escurridizo, lo mínimo que puede hacer el lector es creerla. Yo la trato como una lente heurística, no como una clasificación validada empíricamente.

Una meta numérica suele ser un parámetro: sube este número tanto. Mi interpretación, que no es una proporción medida, es que muchos problemas con las métricas nacen de pedirle a un parámetro que haga el trabajo de un objetivo.

## Las notas de Chicago hicieron lo que se les pidió

Brian Jacob y Steven Levitt [estudiaron](https://www.nber.org/papers/w9413) los sistemas de incentivos «con umbrales nítidos» y las trampas en los exámenes estandarizados de las escuelas públicas de Chicago, y estimaron que al menos en el 4-5 % de las aulas de primaria había cada año trampas graves de profesores o directivos. Las trampas, señalan, responden con fuerza a «cambios relativamente menores en los incentivos»: cuando la frontera es la nota, se optimiza la nota, también por caminos que a los diseñadores nunca se les pasaron por la cabeza.

Un segundo estudio sobre Chicago, de Derek Neal y Diane Whitmore Schanzenbach, concluye que [rendir cuentas según el número de alumnos que alcanzan el nivel exigido](https://www.nber.org/papers/w13293) subió las notas de los alumnos del centro de la distribución, pero no las de los más desfavorecidos. Las mejoras fueron reales, y la forma de la medida decidió quién se las llevaba. Solo he leído el resumen, que no explica el porqué. Mi conjetura, sugerida por el título («Left Behind By Design», algo así como «abandonados por diseño»), es que contar cuántos alumnos superan el nivel premia hacerles cruzar una línea, de modo que a los que están muy por debajo puede salir más barato ignorarlos. Si es así, nadie tuvo que decidir nunca desatender a esos alumnos. Lo hizo la aritmética, y la aritmética nunca tiene que firmar nada.

En los dos casos, tal como yo los leo, la brecha medida se cerró mientras el propósito, presumiblemente que los niños aprendan, se iba desviando. No es una ley, sino dos conjuntos de datos de Chicago vistos con la lente de la frontera.

## Los paneles de ingeniería también tienen vallas

La [guía de métricas de entrega](https://dora.dev/guides/dora-metrics-four-keys/) de DORA define ahora cinco: tiempo de entrega de los cambios, frecuencia de despliegue, tiempo de recuperación tras un despliegue fallido, tasa de fallos de los cambios y tasa de retrabajo de los despliegues. Cubrir a la vez el rendimiento (*throughput*) y la estabilidad ya es una decisión de frontera. La investigación que recoge la guía concluye que «la velocidad y la estabilidad no son una disyuntiva», y advierte de que fijar metas aumenta «la probabilidad de que los equipos intenten manipular las métricas».

Las dos afirmaciones no se contradicen. La primera habla de lo que suele ir junto cuando se comparan muchos equipos; la segunda, de presionar a un equipo concreto con un número concreto. Y los directivos, al fin y al cabo, rara vez dirigen al equipo medio.

Martin Fowler dijo algo parecido en 2003, en un ensayo de opinión y no en una investigación empírica: las líneas de código no miden la producción, y [«cualquier medida real de la productividad en el desarrollo de software debe basarse en el valor de negocio entregado»](https://martinfowler.com/bliki/CannotMeasureProductivity.html). El valor de negocio es difícil de medir, y justo por eso se cuelan los recuentos de actividad. Su principal mérito para el puesto es que son fáciles de contar.

## Un aula no es un pipeline

Tal como lo veo, el sistema de evaluación de una escuela y un panel de ingeniería comparten estructura: una frontera estrecha, un número visible y un resto invisible. Pero profesores y alumnos se adaptan, hacen trampas y se resisten como no lo hace ningún pipeline; ningún pipeline ha discrepado jamás de su meta. Es una analogía sobre fronteras, no una afirmación de que las aulas sean sistemas de despliegue.

## Cambia la regla, no el número

Piensa en un equipo con una meta individual de actividad, por ejemplo tickets cerrados por persona. Cambiar el parámetro es bajar la meta. Cambiar la regla es sustituirla por una medida de resultados del equipo y una revisión periódica de la manipulación, en la que alguien tiene que contestar, con fecha fija, qué esconde ahora el número. Eso ya es un cambio de estructura. También puede manipularse, pero probarlo cuesta poco y deshacerlo es fácil. La quinta entrega dedica un experimento completo a una versión más ambiciosa del mismo movimiento: reservar tiempo protegido para el trabajo que refuerza la capacidad del equipo.

## Antes de buscar un número mejor

Para cada métrica en la que te apoyes, apunta qué queda fuera de ella y cuándo va a mirar alguien allí. Luego pregúntate si el cambio que planeas toca un parámetro, una regla o un objetivo. Si es un parámetro, la valla sigue exactamente donde estaba; solo ha cambiado el número pintado en ella.

Una vez que una métrica ha trazado su frontera, ¿cómo notaría un equipo que el resultado ha empezado a moverse al otro lado?

## Referencias y lecturas recomendadas

- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/dancing-with-systems/>. Fuente de las pautas citadas. Es un ensayo de Meadows, no el libro.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de las salvedades citadas y de la distinción entre parámetro, regla, objetivo y paradigma. Es un ensayo de Meadows, no el libro.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Fuente del argumento sobre la frontera y las «vallas invisibles».
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob y Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Estimaciones de las trampas de profesores en Chicago (leído a nivel de resumen).
- **Left Behind By Design: Proficiency Counts and Test-Based Accountability**, Derek Neal y Diane Whitmore Schanzenbach, NBER Working Paper 13293, 2007. <https://www.nber.org/papers/w13293>. Datos de Chicago sobre quién mejoró con una rendición de cuentas basada en el número de alumnos que alcanzan el nivel (leído a nivel de resumen).
- **DORA's software delivery metrics: the four keys**, DORA, actualizado el 5 de enero de 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. Las cinco métricas, la advertencia sobre la manipulación y el hallazgo sobre velocidad y estabilidad.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. La opinión de un profesional sobre por qué la producción es difícil de medir.

Las citas de textos en inglés son traducción propia.
