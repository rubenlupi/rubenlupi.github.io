---
title: "¿Qué estamos intentando construir realmente?"
description: "Propósito, medición y autonomía en la ingeniería y la educación, más un experimento concreto para una organización de ingeniería."
date: 2026-11-13
editorialDate: 2026-11-02
series: break-and-change
seriesPart:
  title: "Los sistemas que construimos, los sistemas en que vivimos"
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
draft: false
---

La decisión más trascendente de cualquier sistema es su objetivo, y los objetivos son elecciones de valor disputadas que la medición puede reescribir en silencio. Las partes anteriores de esta serie construyeron el camino hacia esa afirmación: stocks que se llenan de lo que el sistema recompensa, límites que ocultan lo que la métrica ignora, bucles que enseñan la lección equivocada y modelos que no pueden ver sus propias vallas.

*Sobre las fuentes. Esta serie dialoga con las ideas de Donella Meadows tal como aparecen en fuentes de acceso legal (un extracto en borrador de* Thinking in Systems *publicado por el Donella Meadows Project, sus ensayos e investigación independiente sobre sistemas), no como una reseña del libro completo. La valoración que aparece hacia el final de este artículo trata, por tanto, de esas fuentes, no del libro entero.*

## ¿Para qué sirve la educación?

La educación es el ámbito donde la pregunta se discutió de manera más abierta en las fuentes que usa esta serie. Aristóteles, en la [*Política*](http://classics.mit.edu/Aristotle/politics.8.eight.html), piensa que la educación debe ser pública e idéntica para todos los ciudadanos, y admite algo que desestabiliza su propio proyecto: «la humanidad no está de acuerdo en absoluto sobre las cosas que deben enseñarse».

El Sócrates de Platón tira en sentido contrario en la [*República*](http://classics.mit.edu/Plato/republic.8.vii.html): «el conocimiento que se adquiere por la fuerza no se asienta en la mente». Como en la Parte 1, el contexto es la educación de los guardianes en una ciudad ideal, así que no lo leo como una teoría general de la escolarización.

Estos dos tiran en direcciones distintas, la formación cívica por un lado y la autonomía por otro. No creo que ninguno de los textos resuelva la tensión, y no quiero resolverla aquí de forma artificial. Lo que extraigo del par es más acotado: la respuesta a «¿para qué sirve?» determina la estructura, y quienes la dan no están de acuerdo.

## ¿Qué debería producir la ingeniería?

Las organizaciones de software se enfrentan a una pregunta prima de esa, y digo prima, no gemela. Esto es una analogía: ambas instituciones deben decidir qué optimizar, y ninguna comparte el mecanismo de la otra.

La [guía](https://dora.dev/guides/dora-metrics-four-keys/) de DORA es cuidadosa al respecto. Define cinco métricas de entrega en lugar de una, y advierte de que los objetivos aumentan «la probabilidad de que los equipos intenten manipular las métricas». La postura más antigua de Martin Fowler es que [«cualquier medida verdadera de la productividad del desarrollo de software debe basarse en el valor de negocio entregado»](https://martinfowler.com/bliki/CannotMeasureProductivity.html). Es un ensayo de opinión, pero nombra la dificultad correcta: lo que nos importa es difícil de medir, y lo que es fácil de medir no es eso.

Meadows tiene una frase para esto en [Dancing With Systems](https://donellameadows.org/archives/dancing-with-systems/): «Presta atención a lo que es importante, no solo a lo que es cuantificable». Y Sterman añade el aguijón en [sus reflexiones](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf): «medimos lo que nos importa, y esas mediciones alteran lo que creemos que es importante».

La medición, en otras palabras, revela el propósito y también lo reescribe. Esa es la parte sin resolver: ninguno de los artículos de esta serie encontró una medida que no remodele también el propósito que mide.

## Eficiencia frente a autonomía

Si el objetivo declarado de una organización de ingeniería es la entrega fiable de valor al cliente, una lente de eficiencia preguntará cuánto trabajo fluye. Una lente de autonomía preguntará si quienes hacen el trabajo tienen margen para notar y arreglar lo que va mal. Pueden entrar en conflicto, y la serie ya ha mostrado dónde. En la Parte 3, el stock de capacidad se drenó porque el tiempo de mejora fue lo primero que se quitó para producir: el tiempo protegido parece holgura para la primera lente y capacidad para la segunda. La frase de Platón sobre la coacción apunta en el mismo sentido para las escuelas, con la salvedad anterior: el trabajo hecho bajo coacción puede producir resultados sin producir comprensión.

Mi lectura es que ninguna de las lentes es un hecho por descubrir. Son valores, y un panel de métricas es un lugar donde la elección se hace sin que nadie la anuncie.

## Un experimento, especificado

Aquí está la propuesta concreta que prometí. Es una hipótesis sobre una organización de ingeniería, no un resultado.

**Título.** Tiempo protegido para capacidades con una ventana «peor antes que mejor» preregistrada.

**Problema.** Gestión crónica de crisis: los incidentes y el retrabajo desplazan el trabajo que los evitaría. Es la trampa de la capacidad que describen [Repenning y Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf).

**Objetivo declarado.** Entrega fiable de valor al cliente.

**Incentivos reales.** Se recompensan el rendimiento (*throughput*) visible y la recuperación heroica; el trabajo preventivo permanece invisible.

**Bucles de retroalimentación.** Los de la Parte 3: B1 Trabajar más duro, B2 Trabajar de forma más inteligente, B3 Atajos y R1 Reinversión, de [Repenning y Sterman](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf). Hay también un segundo bucle de refuerzo, según su relato, que pasa por incentivos que promueven a los «héroes». La regla pretende debilitar B3 y permitir que B2 y R1 funcionen en sentido virtuoso. No hace nada con el bucle de los héroes a menos que cambie también lo que se recompensa.

**Retrasos importantes.** El esfuerzo de mejora precede al cambio de capacidad en meses para procesos simples y en años para el desarrollo de producto, según Repenning y Sterman. Para una ventana de dos trimestres eso tiene una implicación práctica, que es lectura mía: las métricas de entrega quizá no se muevan en absoluto dentro de la ventana. Hay que leer primero los indicadores tempranos, la proporción de *toil* y la proporción de trabajo no planificado, y una métrica de entrega plana en la fecha de evaluación es una evidencia débil en un sentido o en otro.

**Intervención.** Durante dos trimestres, un conjunto de equipos voluntarios reserva una proporción fija y protegida de su capacidad para trabajo de capacidades: fiabilidad de los tests, automatización del *toil*, runbooks, deuda de actualizaciones. La protegen las reglas de planificación, no la buena voluntad, lo que convierte esto en un cambio en las reglas del sistema y no en un retoque de un parámetro. La organización de SRE de Google tiene [un objetivo declarado](https://sre.google/sre-book/eliminating-toil/) de mantener el *toil* por debajo del 50 % del tiempo de cada SRE, que es un precedente documentado de una regla protectora. La proporción es un parámetro que la organización debe elegir y justificar. No afirmo ningún óptimo.

**Preregistro.** Antes de empezar, escribe la caída esperada a corto plazo (el rendimiento puede bajar) y la fecha en que se evaluará el experimento. Los relatos que comunican Repenning y Sterman describen una caída que se había previsto, incluido el aumento del 30 % de los costes de mantenimiento de BP Lima en los primeros seis meses. Escribir la caída de antemano busca evitar que la dirección abandone el experimento ante la primera mala cifra.

**Qué vigilar.** Las cinco métricas de DORA: tiempo de entrega de los cambios, frecuencia de despliegue, tiempo de recuperación de despliegues fallidos, tasa de fallos de cambio y tasa de retrabajo de despliegues. Añade la proporción de *toil*, la proporción de trabajo no planificado y una comprobación cualitativa a nivel de equipo de que el trabajo no se ha vuelto performativo. Compara con equipos que no participan, y di con claridad que la comparación no es aleatorizada.

**Criterios de fracaso.** Cualquiera de estos cuenta como fracaso:

- En la fecha preregistrada, la tasa de retrabajo y el tiempo de recuperación no han cambiado o han empeorado y la proporción de *toil* no ha bajado.
- El tiempo protegido se asaltó de forma rutinaria. Eso es un fracaso de la regla, y se registra como tal.
- Las métricas mejoraron, pero la revisión cualitativa muestra manipulación.

**Hipótesis.** Mi expectativa es una caída a corto plazo seguida de mejores métricas de retrabajo y recuperación. Es una hipótesis, nada más.

**Consecuencias no deseadas que vigilar.** El trabajo de capacidades se convierte en un ritual de informes. Los equipos ajenos al experimento absorben la carga desplazada, un efecto de límite. Las métricas se vuelven objetivos. Y «peor antes que mejor» se convierte en una excusa para intervenciones que simplemente no funcionan. El preregistro existe para separar este último caso del auténtico, y si lo consigue es una cuestión abierta.

## Una valoración de las ideas de Meadows, dentro de estas fuentes

*Esta sección es una interpretación editorial, escrita sin la postura personal del autor y señalada para su revisión por el autor antes de la publicación. Valora las ideas de Meadows tal como aparecen únicamente en las fuentes accesibles, y no valora el libro completo.*

Lo que más perdurable me parece es el hábito de preguntar dónde se está acumulando un stock mientras todos miran el flujo. El marco de la bañera es lo bastante simple para enseñarse y lo bastante fuerte como para que personas con experiencia se equivoquen con él.

Lo que adoptaría es su humildad. Quien dice que «todo lo que sabes, y todo lo que sabe todo el mundo, es solo un modelo» es mejor guía que quien afirma haber encontrado la palanca. La Parte 4 trata sus salvedades sobre su propia lista de puntos de apalancamiento, así que no las citaré de nuevo.

Lo que cuestionaría es hasta dónde llega el vocabulario. Los puntos de apalancamiento, tal como los plantea la propia Meadows, son una heurística y no una clasificación predictiva. La evidencia sobre los mecanismos en la práctica que esta serie pudo usar procede sobre todo de estudios de caso, modelos y escuelas de Chicago.

Y sobre el poder: los textos accesibles sí lo nombran. En [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Meadows escribe «El poder sobre las reglas es poder real», y dice que «un solo actor puede tener el poder de cambiar el objetivo del sistema». Lo que no ofrecen, hasta donde llegan estas fuentes, es un relato de cómo se disputan los grupos rivales un objetivo, ni de cómo puede detectarse desde dentro el objetivo real de un sistema. Eso me parece el mayor hueco de una serie que termina llamando al objetivo la decisión clave.

¿Quién puede beneficiarse? Ingenieros y responsables que reconozcan los síntomas de la Parte 3 y quieran un vocabulario para ellos. Quien busque una fórmula debería mirar en otra parte.

## La pregunta que queda abierta

La tesis de la serie era que los sistemas construidos por personas inteligentes derivan hacia resultados que nadie eligió cuando una retroalimentación rápida y visible recompensa la actividad mientras los costes se acumulan en stocks lentos e invisibles. Dije «a veces» en la afirmación sobre la intervención a propósito. Cambiar lo que un sistema mide, con qué rapidez se hacen visibles las consecuencias y para qué sirve puede ayudar. No tengo evidencia de que lo haga de forma fiable.

Debajo hay una pregunta que ninguno de los marcos responde. ¿Quién decide para qué sirve un sistema, y cómo sabríamos, desde dentro, que su objetivo declarado y su objetivo real han divergido?

¿Y si la habilidad más importante de la ingeniería no fuera aprender a construir mejores sistemas, sino reconocer cuándo estamos resolviendo el problema equivocado?

## Referencias y lecturas recomendadas

- **Politics, Book VIII**, Aristotle, trad. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/politics.8.eight.html>. La educación y la forma de gobierno, y la admisión de Aristóteles de que hay desacuerdo sobre qué enseñar.
- **The Republic, Book VII**, Plato, trad. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Plato/republic.8.vii.html>. Educación y coacción, en el contexto de una ciudad ideal.
- **DORA's software delivery metrics: the four keys**, DORA, actualizado el 5 de enero de 2026. <https://dora.dev/guides/dora-metrics-four-keys/>. Las cinco métricas y la advertencia sobre la manipulación.
- **CannotMeasureProductivity**, Martin Fowler, 2003. <https://martinfowler.com/bliki/CannotMeasureProductivity.html>. La opinión de un profesional sobre el valor de negocio entregado.
- **Dancing With Systems**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/dancing-with-systems/>. Fuente de la pauta sobre lo importante frente a lo cuantificable y de las citas sobre humildad. Su ensayo, no el libro.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Fuente de la cita sobre la medición.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning y John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. La trampa de la capacidad y la caída de BP Lima. Estudios de caso y modelos; cifras comunicadas por fuentes de profesionales.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Objetivo declarado de Google SRE de mantener el *toil* por debajo del 50 % del tiempo de cada SRE; una práctica empresarial, no un óptimo validado.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de las citas sobre el poder sobre las reglas y sobre el objetivo de un sistema. Su ensayo, no el libro.

Las citas de textos en inglés son traducción propia.
