---
title: "Cuando mejorar las partes empeora el conjunto"
description: "Límites, métricas e incentivos: por qué unas cifras locales mejores en escuelas y equipos de ingeniería pueden significar peores resultados, y qué cambiar en su lugar."
date: 2026-11-13
editorialDate: 2026-11-02
series: break-and-change
seriesPart:
  title: "Los sistemas que construimos, los sistemas en que vivimos"
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
draft: false
---

Una métrica es un límite trazado alrededor de lo que has decidido que te importa. Todo lo que queda fuera de la línea es, a efectos del número, gratis.

Ese es el mecanismo de este artículo. Dónde trazas el límite decide qué cuenta como éxito, y las cifras locales optimizadas dentro de un límite estrecho pueden degradar el resultado fuera de él. La intervención útil suele ser un cambio de regla o de objetivo, no una cifra mejor. Este es el segundo artículo de una serie; el primero trató de stocks y propósito, y no lo repetiré.

*Sobre las fuentes. Esta serie dialoga con las ideas de Donella Meadows tal como aparecen en fuentes de acceso legal (un extracto en borrador de* Thinking in Systems *publicado por el Donella Meadows Project, sus ensayos e investigación independiente sobre sistemas), no como una reseña del libro completo. Aquí el material de Meadows procede de dos de sus ensayos.*

## La advertencia y las vallas

En su ensayo [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/), Meadows da una lista de pautas para vivir con sistemas. Una de ellas es tajante: «No maximices partes de los sistemas o subsistemas ignorando el conjunto». Otra es «Presta atención a lo que es importante, no solo a lo que es cuantificable».

John Sterman, que fue alumno de Meadows, aporta el mecanismo en [sus propias reflexiones](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf). Los resultados de la modelización, dice, suelen ser más sensibles a los supuestos sobre el límite, la agregación y las reglas de decisión que a los parámetros. Su imagen para el límite son las «vallas invisibles»: supuestos sobre lo que está dentro y fuera de un modelo que nadie escribe. Una métrica funciona como una de ellas. Dice qué vamos a mirar y, por omisión, qué no.

## Tres cosas que puedes cambiar

El ensayo de Meadows [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) clasifica lugares donde intervenir en un sistema. Lo uso aquí de forma acotada, para una sola distinción: cambiar un parámetro (un número), cambiar una regla (lo que se permite o se recompensa) y cambiar un objetivo (para qué sirve el sistema). Por encima de esos está lo que ella llama un paradigma; escribe que «Los paradigmas son las fuentes de los sistemas».

Meadows es cuidadosa con su propia lista. La llama «un trabajo en curso», dice «Es tentativa y su orden es resbaladizo» y añade «No es una receta para encontrar puntos de apalancamiento». La trato como una lente heurística. No es una clasificación validada empíricamente, y nada de lo que sigue depende de que lo sea.

Un objetivo numérico suele ser un parámetro: sube esta cifra en tanto. Mi interpretación es que muchos de los problemas de las métricas vienen de pedirle a un parámetro que haga el trabajo de un objetivo. Lo ofrezco como una lectura, no como una proporción medida.

## Un caso en las escuelas

Un ejemplo muy bien documentado procede de la educación. Brian Jacob y Steven Levitt [estudiaron](https://www.nber.org/papers/w9413) los sistemas de incentivos «con reglas de línea clara» y las trampas en las pruebas estandarizadas en las escuelas públicas de Chicago, y estimaron que había trampas graves por parte de docentes o administradores en al menos el 4-5 % de las aulas de primaria al año. También informan de que las trampas responden con fuerza a «cambios relativamente menores en los incentivos».

Esa última frase es el mecanismo en una línea. Cuando la puntuación de la prueba es el límite, se optimiza lo que le ocurre a la puntuación, incluso por vías que los diseñadores nunca imaginaron. Son datos de Chicago y no los voy a generalizar.

Un segundo estudio sobre Chicago, de Derek Neal y Diane Whitmore Schanzenbach, concluye que la [rendición de cuentas basada en recuentos de competencia](https://www.nber.org/papers/w13293) elevó las puntuaciones de los estudiantes situados en medio de la distribución, pero no las de los más desfavorecidos. Las mejoras fueron reales. También quedaron repartidas según la forma de la medida. El título del artículo («Left Behind By Design») y su diseño apuntan a un mecanismo, y lo leo así: un recuento de competencia premia hacer cruzar una línea a los estudiantes, de modo que los que están muy por debajo pueden resultar más baratos de ignorar. Para esta serie solo se examinó el resumen, así que esto es una lectura, no un hallazgo que pueda atribuir.

Mi interpretación: en ambos casos la brecha medida se cerró mientras el propósito, presumiblemente que los niños aprendan, se desviaba. No lo llamaría una ley. Es el aspecto que tienen dos conjuntos de evidencia de Chicago vistos a través de una lente de límites.

## La misma estructura en la ingeniería

El programa de investigación DORA es un buen lugar para ver cómo manejan esto los profesionales cuidadosos. Su [guía de métricas de entrega](https://dora.dev/guides/dora-metrics-four-keys/) define ahora cinco: tiempo de entrega de los cambios, frecuencia de despliegue, tiempo de recuperación de despliegues fallidos, tasa de fallos de cambio y tasa de retrabajo de despliegues. Juntas cubren tanto el rendimiento (*throughput*) como la estabilidad, lo cual es en sí mismo una decisión sobre el límite.

La conclusión de investigación de la guía es que «la velocidad y la estabilidad no son compromisos que se excluyan entre sí». También advierte de que fijar objetivos aumenta «la probabilidad de que los equipos intenten manipular las métricas».

Esas dos afirmaciones pueden parecer incoherentes, así que conviene separarlas. La primera trata de lo que tiende a darse junto entre equipos. La segunda, de lo que ocurre cuando presionas a un equipo con un número. Una correlación entre equipos no dice nada sobre el efecto de presionar a un solo equipo con una sola métrica. La segunda afirmación es la que un responsable convierte en acción.

Martin Fowler hizo una observación relacionada en 2003, en un ensayo de opinión (no una investigación empírica): las líneas de código no miden la producción, y [«cualquier medida verdadera de la productividad del desarrollo de software debe basarse en el valor de negocio entregado»](https://martinfowler.com/bliki/CannotMeasureProductivity.html). El valor de negocio es difícil de medir, que es precisamente la razón por la que se cuelan los recuentos de actividad.

## Dónde se acaba la analogía

El régimen de evaluación de una escuela y un panel de métricas de ingeniería comparten, a mi juicio, una estructura: un límite estrecho, un número visible, un resto invisible. Docentes y estudiantes se adaptan, hacen trampas y se resisten de maneras que un pipeline de software no hace. Así que esto es una analogía sobre límites, no una afirmación de que las aulas sean sistemas de despliegue.

## ¿Qué sería un cambio de regla?

Supón que un equipo tiene un objetivo individual de actividad, por ejemplo tickets cerrados por persona. Un cambio de parámetro rebaja el objetivo. Un cambio de regla lo sustituiría por una medida de resultado a nivel de equipo y añadiría una revisión permanente para detectar manipulaciones: a alguien se le pide, con una periodicidad fija, que diga qué oculta ahora el número. Eso es un cambio de estructura, y aun así puede manipularse. También es barato de probar y fácil de revertir.

Una versión mayor es un experimento que especificaré por completo en la Parte 5: un grupo de equipos voluntarios reserva una proporción fija y protegida de su capacidad para trabajo de capacidades, como la fiabilidad de los tests, el *toil* (trabajo operativo repetitivo) y la deuda de actualizaciones. La proporción la protegen las reglas de planificación, no la buena voluntad. El libro de SRE de Google ofrece un [precedente documentado](https://sre.google/sre-book/eliminating-toil/) de una regla de ese tipo: la organización de SRE de allí tiene el objetivo declarado de mantener el *toil* por debajo del 50 % del tiempo de cada SRE. Eso es una práctica y un objetivo de una empresa, no un óptimo validado, y aquí no afirmo ningún óptimo para esa proporción.

Si algo de esto funciona es una cuestión abierta, y los artículos posteriores la tratan como tal.

## Antes de buscar una cifra mejor

Si te llevas de este artículo un único hábito práctico, que sea este: para cada métrica en la que te apoyes, escribe qué queda fuera de ella y cuándo va a mirar alguien ahí. Después pregúntate si el cambio que planeas es a un parámetro, a una regla o a un objetivo.

Lo cual deja la pregunta que este artículo no puede responder. Una vez que una métrica ha trazado su límite, ¿cómo se daría cuenta un equipo de que el resultado ha empezado a moverse fuera de él?

## Referencias y lecturas recomendadas

- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/dancing-with-systems/>. Fuente de las pautas citadas. Ensayo de Meadows, no el libro.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de las salvedades citadas y de la distinción entre parámetro, regla, objetivo y paradigma. Ensayo de Meadows, no el libro.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Fuente del argumento sobre el límite y las «vallas invisibles».
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob y Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Estimaciones de Chicago sobre las trampas de los docentes (leído a nivel de resumen).
- **Left Behind By Design: Proficiency Counts and Test-Based Accountability**, Derek Neal y Diane Whitmore Schanzenbach, NBER Working Paper 13293, 2007. <https://www.nber.org/papers/w13293>. Evidencia de Chicago sobre quién salió ganando con la rendición de cuentas basada en recuentos de competencia (leído a nivel de resumen).
- **DORA's software delivery metrics: the four keys**, DORA, actualizado el 5 de enero de 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. Las cinco métricas, la advertencia sobre la manipulación y el hallazgo sobre velocidad y estabilidad.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. La opinión de un profesional sobre por qué es difícil medir la producción.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Objetivo declarado de Google SRE de mantener el *toil* por debajo del 50 % del tiempo de cada SRE; una práctica empresarial, no un óptimo validado.

Las citas de textos en inglés son traducción propia.
