---
title: "Cuando mejorar las partes empeora el conjunto"
description: "Fronteras, métricas e incentivos: por qué unas cifras locales mejores pueden traducirse en peores resultados en escuelas y equipos de ingeniería, y qué cambiar en su lugar."
date: 2026-11-13
editorialDate: 2026-11-02
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

Una métrica es una frontera trazada alrededor de aquello que hemos decidido que nos importa. Todo lo que queda fuera de la línea sale gratis, al menos a ojos de la cifra.

De ese mecanismo trata este artículo. Dónde se traza la frontera decide qué cuenta como éxito, y las cifras locales que se optimizan dentro de una frontera estrecha pueden degradar lo que ocurre fuera de ella. La intervención útil suele consistir en cambiar una regla o un objetivo, no en conseguir una cifra mejor. Es la segunda entrega de una serie; la primera trató de los stocks y del propósito, y no voy a repetirla.

*Sobre las fuentes. Esta serie trabaja con las ideas de Donella Meadows tal como aparecen en fuentes de acceso legal (un fragmento de un borrador de* Thinking in Systems *publicado por el Donella Meadows Project, sus ensayos e investigación independiente sobre sistemas); no es una reseña del libro completo. Aquí, el material de Meadows procede de dos de sus ensayos.*

## La advertencia y las vallas

En su ensayo [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/), Meadows propone una serie de pautas para convivir con los sistemas. Una de ellas no se anda con rodeos: «No maximices partes de los sistemas o subsistemas ignorando el conjunto». Otra dice: «Presta atención a lo que es importante, no solo a lo que es cuantificable».

John Sterman, que fue alumno de Meadows, explica el mecanismo en [sus propias reflexiones](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf). Los resultados de un modelo, dice, suelen ser más sensibles a los supuestos sobre la frontera, la agregación y las reglas de decisión que a los parámetros. Para la frontera tiene una imagen, la de las «vallas invisibles»: supuestos sobre qué queda dentro y qué fuera de un modelo que nadie pone por escrito. Una métrica funciona igual. Dice qué vamos a mirar y, con su silencio, qué no.

## Tres cosas que se pueden cambiar

El ensayo [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) ordena los lugares en los que se puede intervenir en un sistema. Aquí lo uso con un fin limitado, para una sola distinción: cambiar un parámetro (una cifra), cambiar una regla (lo que se permite o se recompensa) y cambiar un objetivo (para qué existe el sistema). Por encima de todo ello está lo que Meadows llama el paradigma, y de él escribe que «los paradigmas son el origen de los sistemas».

Meadows es cauta con su propia lista. La llama «un trabajo en curso», dice que «es provisional y su orden es resbaladizo» y añade: «No es una receta para encontrar puntos de apalancamiento». Yo la trato como una lente heurística. No es una clasificación validada empíricamente, y nada de lo que sigue depende de que lo sea.

Una meta numérica suele ser un parámetro: subir esta cifra tanto. Mi interpretación es que muchos de los problemas de las métricas nacen de pedirle a un parámetro que haga el trabajo de un objetivo. Lo propongo como lectura, no como una proporción medida.

## Un caso escolar

Uno de los ejemplos mejor documentados viene de la educación. Brian Jacob y Steven Levitt [estudiaron](https://www.nber.org/papers/w9413) los sistemas de incentivos «con reglas de corte nítidas» y las trampas en los exámenes estandarizados de las escuelas públicas de Chicago, y calcularon que al menos en un 4-5 % de las aulas de primaria había cada año trampas graves por parte de docentes o administradores. También observan que las trampas reaccionan con fuerza a «cambios relativamente menores en los incentivos».

Esa última frase resume el mecanismo. Cuando la nota del examen es la frontera, se optimiza lo que le pasa a la nota, incluso por caminos que nadie había imaginado al diseñar el sistema. Son datos de Chicago y no voy a generalizarlos.

Un segundo estudio sobre Chicago, de Derek Neal y Diane Whitmore Schanzenbach, concluye que [la rendición de cuentas basada en el número de alumnos que alcanzan el nivel exigido](https://www.nber.org/papers/w13293) subió las notas de los estudiantes situados en el centro de la distribución, pero no las de los más desfavorecidos. Las mejoras fueron reales, pero se repartieron según la forma de la medida. El título del trabajo («Left Behind By Design») y su diseño apuntan a un mecanismo que yo leo así: contar cuántos alumnos alcanzan el nivel premia que crucen una línea, de modo que puede salir más barato desentenderse de quienes están muy por debajo. Para esta serie solo se ha consultado el resumen, así que esto es una lectura, no un hallazgo que pueda atribuirles.

Mi interpretación es que, en ambos casos, la brecha medida se cerró mientras el propósito, que cabe suponer que es que los niños aprendan, se iba desviando. No lo llamaría una ley. Es lo que muestran dos conjuntos de datos de Chicago cuando se miran con la lente de la frontera.

## La misma estructura en ingeniería

El programa de investigación DORA permite ver cómo manejan esto los profesionales cuidadosos. Su [guía de métricas de entrega](https://dora.dev/guides/dora-metrics-four-keys/) define hoy cinco: el tiempo de entrega de los cambios, la frecuencia de despliegue, el tiempo de recuperación tras un despliegue fallido, la tasa de fallos de los cambios y la tasa de retrabajo de despliegues. Entre todas abarcan el rendimiento (*throughput*) y la estabilidad, lo que ya es, en sí mismo, una decisión sobre la frontera.

La conclusión de la investigación, según la guía, es que «la velocidad y la estabilidad no están reñidas». La misma guía advierte también de que fijar metas aumenta «la probabilidad de que los equipos intenten manipular las métricas».

Las dos afirmaciones pueden parecer incoherentes, así que conviene separarlas. La primera habla de lo que suele ir junto cuando se comparan muchos equipos; la segunda, de lo que ocurre cuando se presiona a un equipo con una cifra concreta. Una correlación entre equipos no dice nada sobre el efecto de presionar a un único equipo con una única métrica, y es la segunda afirmación la que guía lo que hace un directivo.

Martin Fowler dijo algo parecido en 2003, en un ensayo de opinión (no en una investigación empírica): las líneas de código no miden la producción, y [«cualquier medida verdadera de la productividad en el desarrollo de software tiene que basarse en el valor de negocio entregado»](https://martinfowler.com/bliki/CannotMeasureProductivity.html). El valor de negocio es difícil de medir, y precisamente por eso se cuelan los recuentos de actividad.

## Hasta dónde llega la analogía

Tal como yo lo veo, el sistema de evaluación de una escuela y un panel de métricas de ingeniería comparten estructura: una frontera estrecha, una cifra visible y un resto invisible. Pero docentes y alumnos se adaptan, hacen trampas y se resisten de un modo del que una *pipeline* de software es incapaz. Se trata, por tanto, de una analogía sobre fronteras, no de afirmar que las aulas sean sistemas de despliegue.

## ¿Qué sería cambiar una regla?

Imagina un equipo con una meta de actividad individual, por ejemplo, tickets cerrados por persona. Cambiar el parámetro sería rebajar la meta. Cambiar la regla sería sustituirla por una medida de resultados del equipo y añadir una revisión periódica de la manipulación: cada cierto tiempo, según un calendario, se le pregunta a alguien qué oculta ahora la cifra. Es un cambio de estructura, y aun así se puede manipular. Pero también es barato de probar y fácil de deshacer.

Una versión más ambiciosa es un experimento que detallaré por completo en la quinta entrega: un grupo de equipos voluntarios reserva una parte fija y protegida de su capacidad para trabajo que refuerza esa capacidad, como la fiabilidad de las pruebas, el *toil* (el trabajo operativo repetitivo) y la deuda de actualizaciones. Esa parte la protegen las reglas de planificación, no la buena voluntad. El libro de SRE de Google ofrece un [precedente documentado](https://sre.google/sre-book/eliminating-toil/) de una regla así: la organización de SRE se ha fijado como objetivo declarado que el *toil* no supere el 50 % del tiempo de cada SRE. Es la práctica y el objetivo de una empresa, no un óptimo validado, y aquí no defiendo ningún óptimo para esa proporción.

Si algo de esto funciona es una cuestión abierta, y las entregas siguientes la tratan como tal.

## Antes de buscar una cifra mejor

Si solo te llevas un hábito práctico de este artículo, que sea este: para cada métrica en la que te apoyes, apunta qué queda fuera de ella y cuándo va a mirar alguien ahí. Y después pregúntate si el cambio que planeas toca un parámetro, una regla o un objetivo.

Queda la pregunta que este artículo no puede responder. Una vez que una métrica ha trazado su frontera, ¿cómo se daría cuenta un equipo de que el resultado ha empezado a moverse fuera de ella?

## Referencias y lecturas recomendadas

- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/dancing-with-systems/>. Fuente de las pautas citadas. Es un ensayo de Meadows, no el libro.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de las salvedades citadas y de la distinción entre parámetro, regla, objetivo y paradigma. Es un ensayo de Meadows, no el libro.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Fuente del argumento sobre la frontera y las «vallas invisibles».
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob y Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Estimaciones de las trampas de docentes en Chicago (consultado a nivel de resumen).
- **Left Behind By Design: Proficiency Counts and Test-Based Accountability**, Derek Neal y Diane Whitmore Schanzenbach, NBER Working Paper 13293, 2007. <https://www.nber.org/papers/w13293>. Datos de Chicago sobre quién mejoró con una rendición de cuentas basada en el recuento de alumnos que alcanzan el nivel (consultado a nivel de resumen).
- **DORA's software delivery metrics: the four keys**, DORA, actualizado el 5 de enero de 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. Las cinco métricas, la advertencia sobre la manipulación y el hallazgo sobre velocidad y estabilidad.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. La opinión de un profesional sobre por qué la producción es difícil de medir.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. El objetivo declarado de SRE en Google de mantener el *toil* por debajo del 50 % del tiempo de cada SRE; una práctica de empresa, no un óptimo validado.

Las citas de textos en inglés son traducción propia.
