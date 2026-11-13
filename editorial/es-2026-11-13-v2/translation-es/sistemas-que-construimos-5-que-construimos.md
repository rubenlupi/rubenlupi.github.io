---
title: "¿Qué estamos intentando construir en realidad?"
description: "Propósito, medición y autonomía en la ingeniería y en la educación, y un experimento concreto para una organización de ingeniería."
date: 2026-11-13
editorialDate: 2026-11-02
series: break-and-change
seriesPart:
  title: "Los sistemas que construimos, los sistemas que habitamos"
  slug: systems-we-build
  number: 5
  total: 5
  stage: "QUESTION"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "Software Engineering", "Learning & Education"]
tags: ["Systems Thinking", "Organizational Learning", "Engineering Culture", "Education"]
lang: es
translationOf: systems-we-build-5-what-are-we-building
draft: true
---

En cualquier sistema, la decisión de más peso es su objetivo, y los objetivos son elecciones de valores en disputa que la medición puede reescribir sin hacer ruido. Hacia esa idea apuntaban las entregas anteriores: stocks que se llenan de lo que el sistema recompensa, fronteras que ocultan lo que la métrica ignora, bucles que enseñan la lección equivocada y modelos incapaces de ver sus propias vallas.

*Sobre las fuentes. Esta serie trabaja con las ideas de Donella Meadows tal como aparecen en fuentes de acceso legal (un fragmento de un borrador de* Thinking in Systems *publicado por el Donella Meadows Project, sus ensayos e investigación independiente sobre sistemas); no es una reseña del libro completo. Por eso, la valoración que cierra este artículo se refiere a esas fuentes, no al libro entero.*

## ¿Para qué sirve la educación?

De todas las fuentes que usa esta serie, es en las que hablan de educación donde la pregunta se discutió más abiertamente. Aristóteles, en la [*Política*](http://classics.mit.edu/Aristotle/politics.8.eight.html), cree que la educación debe ser pública e igual para todos los ciudadanos, y reconoce algo que hace tambalearse su propio proyecto: «los hombres no están en absoluto de acuerdo sobre lo que se debe enseñar».

El Sócrates de Platón apunta en la dirección contraria en la [*República*](http://classics.mit.edu/Plato/republic.8.vii.html): «el conocimiento que se adquiere por obligación no arraiga en la mente». Como en la primera entrega, el contexto es la educación de los guardianes en una ciudad ideal, así que no lo leo como una teoría general de la enseñanza.

Uno tira hacia la formación cívica y el otro hacia la autonomía. No creo que ninguno de los dos textos resuelva esa tensión, ni quiero resolverla aquí de forma artificial. Lo que saco de ambos es más modesto: la respuesta a «¿para qué sirve?» determina la estructura, y quienes la dan no se ponen de acuerdo.

## ¿Qué debería producir la ingeniería?

Las organizaciones de software se enfrentan a una pregunta emparentada con esa: prima, y no gemela. Es una analogía; las dos instituciones tienen que decidir qué optimizar, pero ninguna comparte el mecanismo de la otra.

La [guía](https://dora.dev/guides/dora-metrics-four-keys/) de DORA lo trata con cuidado. Define cinco métricas de entrega en lugar de una y advierte de que las metas aumentan «la probabilidad de que los equipos intenten manipular las métricas». La postura de Martin Fowler, más antigua, es que [«cualquier medida verdadera de la productividad en el desarrollo de software tiene que basarse en el valor de negocio entregado»](https://martinfowler.com/bliki/CannotMeasureProductivity.html). Es un ensayo de opinión, pero señala bien la dificultad: lo que nos importa es difícil de medir, y lo que se mide con facilidad no es lo que nos importa.

Meadows tiene una frase para esto en [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/): «Presta atención a lo que es importante, no solo a lo que es cuantificable». Y Sterman remata en [sus reflexiones](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf): «medimos lo que nos importa, y esas mediciones alteran lo que creemos que es importante».

Dicho de otro modo, la medición revela el propósito y, a la vez, lo reescribe. Esa es la parte que queda sin resolver: en ninguna de las entregas de la serie ha aparecido una medida que no remodele también el propósito que mide.

## Eficiencia frente a autonomía

Si el objetivo declarado de una organización de ingeniería es entregar valor al cliente de forma fiable, la lente de la eficiencia preguntará cuánto trabajo pasa por ella. La de la autonomía preguntará si quienes hacen el trabajo tienen margen para darse cuenta de lo que va mal y arreglarlo. Las dos pueden chocar, y la serie ya ha mostrado dónde. En la tercera entrega, el stock de capacidad se vaciaba porque el tiempo de mejora era lo primero que se sacrificaba a la producción: para la primera lente, el tiempo protegido parece holgura; para la segunda, capacidad. La frase de Platón sobre la obligación apunta en la misma dirección para las escuelas, con la salvedad ya hecha: el trabajo hecho por obligación puede dar producción sin dar comprensión.

A mi modo de ver, ninguna de las dos lentes es un hecho que haya que descubrir. Son valores, y un panel de métricas es uno de los lugares donde se elige entre ellos sin que nadie lo anuncie.

## Un experimento, en detalle

Esta es la propuesta concreta que prometí. Es una hipótesis sobre una organización de ingeniería, no un resultado.

**Título.** Tiempo protegido para la capacidad, con una ventana de «peor antes que mejor» registrada de antemano.

**Problema.** Vivir apagando fuegos: los incidentes y el retrabajo desplazan el trabajo que los evitaría. Es la trampa de la capacidad que describen [Repenning y Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf).

**Objetivo declarado.** Entregar valor al cliente de forma fiable.

**Incentivos reales.** Se premian el rendimiento visible y las recuperaciones heroicas; el trabajo preventivo sigue sin verse.

**Bucles de retroalimentación.** Los de la tercera entrega: B1 Esforzarse más, B2 Trabajar mejor, B3 Atajos y R1 Reinversión, de [Repenning y Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf). Según su relato, hay además un segundo bucle de refuerzo, que pasa por unos incentivos que encumbran a los «héroes». La regla busca debilitar B3 y dejar que B2 y R1 giren en sentido virtuoso. Contra el bucle de los héroes no hace nada, salvo que cambie también lo que se recompensa.

**Retrasos importantes.** Según Repenning y Sterman, el cambio de capacidad llega meses después del esfuerzo de mejora en los procesos sencillos, y años después en el desarrollo de productos. En una ventana de dos trimestres eso tiene, a mi juicio, una consecuencia práctica: puede que las métricas de entrega ni se muevan dentro de la ventana. Hay que mirar primero los indicadores tempranos, la proporción de *toil* (trabajo operativo repetitivo) y la de trabajo no planificado, y una métrica de entrega plana en la fecha de evaluación no prueba gran cosa en ningún sentido.

**Intervención.** Durante dos trimestres, un conjunto de equipos voluntarios reserva una parte fija y protegida de su capacidad para trabajo que la refuerce: fiabilidad de las pruebas, automatización del *toil*, runbooks, deuda de actualizaciones. La protegen las reglas de planificación, no la buena voluntad, y por eso es un cambio en las reglas del sistema y no el retoque de un parámetro. La organización de SRE de Google tiene [el objetivo declarado](https://sre.google/sre-book/eliminating-toil/) de mantener el *toil* por debajo del 50 % del tiempo de cada SRE, lo que constituye un precedente documentado de regla protectora. La proporción es un parámetro que la organización tiene que elegir y justificar. No defiendo ningún óptimo.

**Registro previo.** Antes de empezar, se deja por escrito el bache que se espera a corto plazo (el rendimiento puede caer) y la fecha en que se evaluará el experimento. Los casos que recogen Repenning y Sterman describen un bache previsto de antemano, como la subida del 30 % en los costes de mantenimiento de BP Lima durante los seis primeros meses. Dejar el bache por escrito sirve para que la dirección no abandone el experimento ante la primera mala cifra.

**Qué vigilar.** Las cinco métricas de DORA: tiempo de entrega de los cambios, frecuencia de despliegue, tiempo de recuperación tras un despliegue fallido, tasa de fallos de los cambios y tasa de retrabajo de despliegues. Además, la proporción de *toil*, la de trabajo no planificado y una comprobación cualitativa, equipo por equipo, de que el trabajo no se ha convertido en teatro. Hay que comparar con los equipos que no participan y decir con claridad que la comparación no es aleatorizada.

**Criterios de fracaso.** Cualquiera de estos supuestos cuenta como fracaso:

- En la fecha registrada de antemano, la tasa de retrabajo y el tiempo de recuperación siguen igual o han empeorado, y la proporción de *toil* no ha bajado.
- El tiempo protegido se ha saqueado de forma habitual. Eso es un fallo de la regla, y queda registrado como tal.
- Las métricas han mejorado, pero la revisión cualitativa revela manipulación.

**Hipótesis.** Espero un bache a corto plazo seguido de una mejora en las métricas de retrabajo y de recuperación. Es una hipótesis, nada más.

**Consecuencias no deseadas que vigilar.** Que el trabajo de capacidad se convierta en un ritual de informes. Que los equipos de fuera del experimento absorban la carga desplazada, un efecto de frontera. Que las métricas se conviertan en metas. Y que el «peor antes que mejor» acabe sirviendo de excusa para intervenciones que, sencillamente, no funcionan. El registro previo existe para distinguir este último caso del bache genuino, y si lo consigue o no es una cuestión abierta.

## Una valoración de las ideas de Meadows, dentro de estas fuentes

*Esta sección es interpretación editorial, escrita sin contar con la postura personal del autor y marcada para que él la revise antes de publicarse. Valora las ideas de Meadows solo tal como aparecen en las fuentes accesibles, y no el libro completo.*

Lo que me parece más duradero es el hábito de preguntarse dónde se está acumulando un stock mientras todo el mundo mira el flujo. La imagen de la bañera es lo bastante sencilla para enseñarla y lo bastante potente como para que gente con experiencia se equivoque con ella.

Lo que adoptaría es su humildad. Una autora que dice que «todo lo que sabes, y todo lo que sabe todo el mundo, es solo un modelo» es mejor guía que quien asegura haber encontrado la palanca. Sus salvedades sobre su propia lista de puntos de apalancamiento ya se recogen en la cuarta entrega, así que no las vuelvo a citar.

Lo que pondría en duda es hasta dónde llega el vocabulario. Los puntos de apalancamiento, tal como los plantea la propia Meadows, son una heurística, no una clasificación predictiva. Y las pruebas sobre estos mecanismos en la práctica que esta serie ha podido manejar proceden sobre todo de estudios de caso, de modelos y de las escuelas de Chicago.

En cuanto al poder, los textos accesibles sí lo nombran. En [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Meadows escribe que «el poder sobre las reglas es poder real» y que «un solo actor puede tener el poder de cambiar el objetivo del sistema». Lo que no ofrecen, al menos en estas fuentes, es una explicación de cómo se disputan un objetivo distintos grupos, ni de cómo detectar desde dentro cuál es el objetivo real de un sistema. Me parece la mayor laguna de una serie que termina diciendo que el objetivo es la decisión clave.

¿A quién puede servirle? A ingenieros y directivos que reconozcan los síntomas de la tercera entrega y busquen un vocabulario para nombrarlos. Quien quiera una fórmula, mejor que busque en otra parte.

## La pregunta que queda abierta

La tesis de la serie era que los sistemas que construye gente inteligente derivan hacia resultados que nadie eligió cuando una retroalimentación rápida y visible premia la actividad mientras los costes se amontonan en stocks lentos e invisibles. Al hablar de la intervención dije «a veces», y no por casualidad: cambiar lo que mide un sistema, lo pronto que se ven las consecuencias y para qué existe puede ayudar. No tengo pruebas de que lo haga de forma fiable.

Por debajo de todo late una pregunta que ninguno de los marcos responde. ¿Quién decide para qué sirve un sistema, y cómo sabríamos, desde dentro, que su objetivo declarado y su objetivo real han tomado caminos distintos?

¿Y si la habilidad más importante en ingeniería no fuera aprender a construir mejores sistemas, sino saber reconocer cuándo estamos resolviendo el problema equivocado?

## Referencias y lecturas recomendadas

- **Politics, Book VIII**, Aristotle, trad. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/politics.8.eight.html>. La educación y la forma de gobierno, y el reconocimiento por parte de Aristóteles de que no hay acuerdo sobre qué enseñar.
- **The Republic, Book VII**, Plato, trad. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Plato/republic.8.vii.html>. La educación y la obligación, en el contexto de una ciudad ideal.
- **DORA's software delivery metrics: the four keys**, DORA, actualizado el 5 de enero de 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. Las cinco métricas y la advertencia sobre la manipulación.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. La opinión de un profesional sobre el valor de negocio entregado.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/dancing-with-systems/>. Fuente de la pauta sobre lo importante frente a lo cuantificable y de las citas sobre la humildad. Es un ensayo suyo, no el libro.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Fuente de la cita sobre la medición.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning y John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. La trampa de la capacidad y el bache de BP Lima. Estudios de caso y modelos; las cifras proceden de fuentes del sector.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. El objetivo declarado de SRE en Google de mantener el *toil* por debajo del 50 % del tiempo de cada SRE; una práctica de empresa, no un óptimo validado.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de las citas sobre el poder sobre las reglas y sobre el objetivo de un sistema. Es un ensayo suyo, no el libro.

Las citas de textos en inglés son traducción propia.
