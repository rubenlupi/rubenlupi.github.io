---
title: "Tus métricas reescriben tus objetivos sin avisar"
description: "El objetivo de un sistema es su decisión de más peso, y la medición puede reescribirlo sin que nadie lo anuncie. Aristóteles, Platón, DORA y un experimento que una organización de ingeniería podría poner en marcha, con sus criterios de fracaso escritos de antemano."
date: 2026-11-13
editorialDate: 2026-10-26
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

Aristóteles, en la [*Política*](https://classics.mit.edu/Aristotle/politics.8.eight.html), cree que la educación debe ser pública e igual para todos los ciudadanos, y reconoce algo que inquieta a su propio proyecto: «los hombres no están en absoluto de acuerdo sobre lo que debe enseñarse». Hace falta valor para admitirlo mientras se diseña un plan de estudios. La frase, además, señala la decisión más importante de cualquier sistema, su objetivo, y el hecho incómodo de que la gente no se pone de acuerdo sobre él. Los objetivos son elecciones de valores en disputa, y la medición puede reescribirlos sin hacer ruido.

No he tenido acceso al libro completo, así que lo que sigue se apoya en un fragmento de un borrador de *Thinking in Systems* que publica el Donella Meadows Project, en los ensayos de Meadows y en investigación independiente sobre sistemas.

## Nadie se pone de acuerdo en para qué sirve la escuela

Entre mis fuentes, donde la pregunta se discutió más abiertamente es en la educación. El Sócrates de Platón tira en sentido contrario a Aristóteles en la [*República*](https://classics.mit.edu/Plato/republic.8.vii.html): «el conocimiento adquirido por obligación no arraiga en la mente». Como en la primera entrega, el contexto es la educación de los guardianes de una ciudad ideal, no una teoría general de la escuela.

La formación cívica tira hacia un lado y la autonomía hacia el otro. No creo que ninguno de los dos textos resuelva la tensión. Lo que saco de la pareja es más modesto: la respuesta a «¿para qué sirve?» determina la estructura, y quienes dan esa respuesta no están de acuerdo. Y la escuela se construye de todos modos.

## ¿Y para qué sirve, exactamente, un equipo de ingeniería?

Las organizaciones de software se topan con una prima de esa pregunta, no con su gemela. La [guía](https://dora.dev/guides/dora-metrics-four-keys/) de DORA define cinco métricas de entrega en lugar de una, y advierte de que las metas aumentan «la probabilidad de que los equipos intenten manipular las métricas». La postura de Martin Fowler, más antigua y expuesta en un ensayo de opinión, es que [«cualquier medida real de la productividad en el desarrollo de software debe basarse en el valor de negocio entregado»](https://martinfowler.com/bliki/CannotMeasureProductivity.html). Un panel puede ser exacto hasta el último decimal y aun así hablar de lo que no toca.

Meadows tiene una frase para esto en [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/): «Presta atención a lo importante, no solo a lo cuantificable». Sterman le añade el aguijón en [sus reflexiones](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf): «medimos lo que nos importa, y esas mediciones alteran lo que creemos que es importante».

Medir, por tanto, revela el propósito y a la vez lo reescribe, y en ninguna de las pruebas que he manejado aparece una medida que deje el propósito en paz. Devolveríamos a la tienda un termómetro que cambiara el tiempo. Las métricas que cambian el objetivo, en cambio, las colgamos en la pared.

## ¿Holgura o capacidad? Depende de quién mire

Si el objetivo declarado de una organización de ingeniería es entregar valor al cliente de forma fiable, la lente de la eficiencia pregunta cuánto trabajo pasa por el sistema, y la de la autonomía, si quienes hacen el trabajo tienen margen para ver lo que falla y arreglarlo. La tercera entrega mostró dónde chocan: el stock de capacidad se vació porque el tiempo de mejora fue lo primero que se sacrificó a cambio de producción. El tiempo protegido parece holgura a la primera lente y capacidad a la segunda. La frase de Platón sobre la obligación apunta en la misma dirección para las escuelas, con la salvedad ya dicha: el trabajo hecho por obligación puede dar producción sin dar comprensión.

Ninguna de las dos lentes, a mi modo de ver, es un hecho por descubrir. Son valores, y un panel de métricas es uno de los sitios donde se elige entre ellos sin que nadie lo anuncie.

## Un experimento que confiesa de antemano cómo podría fracasar

Lo que sigue es una hipótesis sobre una organización de ingeniería, no un resultado.

**Problema.** Vivir apagando fuegos de forma crónica, con incidentes y retrabajo que desplazan el trabajo que los habría evitado: la trampa de la capacidad que describen [Repenning y Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf).

**Objetivo declarado.** Entregar valor al cliente de forma fiable.

**Incentivos reales.** Se premian el rendimiento visible y las recuperaciones heroicas; el trabajo preventivo sigue sin verse.

**Bucles de retroalimentación.** B1 Esforzarse más, B2 Trabajar mejor, B3 Atajos y R1 Reinversión, los de la tercera entrega, a partir de [Repenning y Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf), y además, según ellos, un segundo bucle de refuerzo a través de incentivos que ascienden a los «héroes». La regla pretende debilitar B3 y dejar que B2 y R1 giren en sentido virtuoso. Contra el bucle de los héroes no hace nada, salvo que cambie también lo que se premia.

**Retrasos importantes.** Según Repenning y Sterman, el cambio en la capacidad llega meses después del esfuerzo de mejora en procesos sencillos, y años después en desarrollo de producto. A mi juicio, eso significa que las métricas de entrega quizá ni se muevan en un plazo de dos trimestres. Hay que leer primero los indicadores tempranos, la proporción de *toil* (el trabajo operativo repetitivo) y la de trabajo no planificado, y una métrica de entrega plana en la fecha de evaluación es una prueba débil en cualquier sentido.

**Intervención.** Durante dos trimestres, un grupo de equipos voluntarios reserva una parte fija y protegida de su tiempo para trabajo que refuerza la capacidad: fiabilidad de los tests, automatización del *toil*, runbooks, deuda de actualizaciones pendientes. Lo protegen las reglas de planificación, no la buena voluntad, y eso lo convierte en un cambio de las reglas del sistema y no en el retoque de un parámetro. La buena voluntad es lo primero que se come una fecha de entrega. La organización de SRE de Google tiene [un objetivo declarado](https://sre.google/sre-book/eliminating-toil/) de mantener el *toil* por debajo del 50 % del tiempo de cada SRE, un precedente documentado de regla protectora. La proporción es un parámetro que la organización tiene que elegir y justificar; no afirmo que exista un óptimo. Espero un bache a corto plazo seguido de mejoras en las métricas de retrabajo y de recuperación. Cambiar lo que mide un sistema, lo pronto que se ven las consecuencias y para qué sirve puede ayudar, pero no tengo pruebas de que lo haga de forma fiable.

**Registro previo.** Antes de empezar, se deja por escrito el bache esperado a corto plazo (el rendimiento puede caer) y la fecha en que se juzgará el experimento. Los casos que recogen Repenning y Sterman describen baches previstos de antemano, como la subida del 30 % en los costes de mantenimiento de BP Lima durante los seis primeros meses. Escribir el bache por adelantado sirve para que la dirección no abandone el experimento a la primera mala cifra. Un bache predicho es un resultado; uno que nadie predijo es un motivo para el pánico.

**Qué vigilar.** Las cinco métricas de DORA: tiempo de entrega de los cambios, frecuencia de despliegue, tiempo de recuperación tras un despliegue fallido, tasa de fallos de los cambios y tasa de retrabajo de los despliegues. A eso se suman la proporción de *toil*, la de trabajo no planificado y una comprobación cualitativa en cada equipo de que el trabajo no se ha convertido en una actuación de cara a la galería. Hay que comparar con los equipos que no participan y decir claramente que la comparación no es aleatorizada.

**Criterios de fracaso.** Basta con que se cumpla uno de estos:

- En la fecha registrada de antemano, la tasa de retrabajo y el tiempo de recuperación siguen igual o peor, y la proporción de *toil* no ha bajado.
- El tiempo protegido se asaltó de forma habitual. Eso es un fracaso de la regla, y se anota como tal.
- Las métricas mejoraron, pero la revisión cualitativa revela manipulación.

**Consecuencias no deseadas que vigilar.** El trabajo de capacidad se convierte en un ritual de informes. Los equipos ajenos al experimento absorben la carga desplazada, un efecto de frontera. Las métricas se vuelven metas. Y el «peor antes que mejor» se convierte en excusa para intervenciones que sencillamente no funcionan; el registro previo existe para distinguir ese caso del verdadero, y si lo consigue es una pregunta abierta.

## Qué me quedo de Meadows y qué pondría en duda

Lo que me parece más duradero es la costumbre de preguntar dónde se está acumulando un stock mientras todo el mundo mira el flujo. La imagen de la bañera es lo bastante simple para enseñarla y, como mostraron los resultados de Sterman en el aula que vimos en la primera entrega, lo bastante difícil para que gente bien formada siga equivocándose.

Lo que adoptaría es su humildad. Una autora que dice que «todo lo que sabes, y todo lo que sabe todo el mundo, es solo un modelo» es mejor guía que quien asegura haber encontrado la palanca.

Lo que pondría en duda es hasta dónde llega el vocabulario. Los puntos de apalancamiento, tal como los plantea la propia Meadows, son una heurística y no una clasificación predictiva, y las pruebas que he podido usar sobre cómo funcionan estos mecanismos en la práctica vienen sobre todo de estudios de caso, de modelos y de escuelas de Chicago.

Sobre el poder, los textos accesibles sí lo nombran. En [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Meadows escribe que «el poder sobre las reglas es poder de verdad» y que «un solo actor puede tener el poder de cambiar el objetivo del sistema». Lo que no ofrecen, hasta donde llegan estas fuentes, es una explicación de cómo se disputan un objetivo grupos enfrentados, ni de cómo detectar desde dentro el objetivo real de un sistema. Me parece la laguna más grande, porque el objetivo es la decisión que más importa.

Quienes más partido le sacarán a Meadows son los ingenieros y directivos que reconozcan los síntomas de la tercera entrega y quieran palabras para nombrarlos. Quien busque una fórmula hará bien en buscarla en otra parte, y probablemente la encontrará, que es más o menos el problema.

## ¿Quién decide para qué sirve un sistema?

Por debajo queda una pregunta que ninguno de estos marcos responde: quién decide para qué sirve un sistema, y cómo sabríamos, desde dentro, que su objetivo declarado y su objetivo real se han separado.

Si nadie sabe responder a eso, ¿y si la habilidad más importante de la ingeniería no fuera aprender a construir sistemas mejores, sino darse cuenta de cuándo estamos resolviendo el problema equivocado?

## Referencias y lecturas recomendadas

- **Politics, Book VIII**, Aristotle, trad. Benjamin Jowett, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/politics.8.eight.html>. La educación y la forma de gobierno, y la admisión de Aristóteles de que no hay acuerdo sobre qué enseñar.
- **The Republic, Book VII**, Plato, trad. Benjamin Jowett, MIT Internet Classics Archive. <https://classics.mit.edu/Plato/republic.8.vii.html>. Educación y obligación, en el contexto de una ciudad ideal.
- **DORA's software delivery metrics: the four keys**, DORA, actualizado el 5 de enero de 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. Las cinco métricas y la advertencia sobre la manipulación.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. La opinión de un profesional sobre el valor de negocio entregado.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/dancing-with-systems/>. Fuente de la pauta sobre lo importante frente a lo cuantificable y de las citas sobre la humildad. Es un ensayo suyo, no el libro.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Fuente de la cita sobre la medición.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning y John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. La trampa de la capacidad y el bache de BP Lima. Estudios de caso y modelos; las cifras proceden de fuentes del sector.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. El objetivo declarado de Google SRE de mantener el *toil* por debajo del 50 % del tiempo de cada SRE; práctica de una empresa, no un óptimo validado.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de las citas sobre el poder sobre las reglas y sobre el objetivo de un sistema. Es un ensayo suyo, no el libro.

Las citas de textos en inglés son traducción propia.
