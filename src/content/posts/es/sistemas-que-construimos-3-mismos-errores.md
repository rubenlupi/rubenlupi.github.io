---
title: "Por qué las personas inteligentes repiten los mismos errores"
description: "Bucles de retroalimentación, retrasos y la trampa de la capacidad, analizados paso a paso a través de la gestión de crisis, los autoescaladores y la deuda técnica."
date: 2026-11-13
editorialDate: 2026-11-02
series: break-and-change
seriesPart:
  title: "Los sistemas que construimos, los sistemas en que vivimos"
  slug: systems-we-build
  number: 3
  total: 5
  stage: "EXPERIENCE"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "Software Engineering"]
tags: ["Systems Thinking", "Feedback Loops", "Technical Debt", "SRE", "Capability Trap"]
lang: es
translationOf: systems-we-build-3-same-mistakes
draft: false
---

Algunos errores no son errores de inteligencia. Son el resultado sensato de una estructura en la que los costes llegan más tarde que las recompensas. La estructura enseña entonces a sus participantes la lección equivocada, y las personas listas la aprenden más rápido.

Este artículo recorre esa afirmación en tres lugares: una trampa de mejora documentada en investigación de campo, un bucle de control literal en Kubernetes y un pequeño equipo de plataforma, explícitamente hipotético. Es el más técnico de los cinco.

*Sobre las fuentes. Esta serie dialoga con las ideas de Donella Meadows tal como aparecen en fuentes de acceso legal (un extracto en borrador de* Thinking in Systems *publicado por el Donella Meadows Project, sus ensayos e investigación independiente sobre sistemas), no como una reseña del libro completo. La trampa que se describe a continuación no es obra de Meadows; es de Nelson Repenning y John Sterman.*

## El caso documentado: la trampa de la capacidad

En [«Nobody Ever Gets Credit for Fixing Problems that Never Happened»](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf), Repenning y Sterman describen organizaciones cuyos programas de mejora decaen. La teoría, escriben, «surgió inicialmente del estudio de dos iniciativas de mejora en un gran fabricante de automóviles» y la respaldan «más de una docena de estudios de caso en profundidad» además de modelos de simulación. Es una evidencia rica, pero procede de estudios de caso y modelos, no de ensayos controlados.

Dos citas de campo muestran cómo suena desde dentro. Un supervisor de una planta de electrónica dice: «Los supervisores nunca tenían tiempo para hacer mejoras…». Un ingeniero de desarrollo de producto dice: «El nuevo proceso es bueno. Algún día me gustaría trabajar en un proyecto que lo use de verdad».

Nadie en esas frases es perezoso ni tonto. Están describiendo un bucle.

## Los bucles

Los autores modelan la capacidad de proceso como un stock: se erosiona de forma continua y se rellena, tras un retraso, con el esfuerzo de mejora. A su alrededor describen cuatro bucles. Lo que sigue es mi adaptación textual de su estructura, no una reproducción de sus figuras.

```
B1 Trabajar más duro:
  brecha ─(+)─► presión para hacer más trabajo ─(+)─► tiempo dedicado al trabajo mismo ─(+)─► producción ─(−)─► brecha

B2 Trabajar de forma más inteligente:
  brecha ─(+)─► presión para mejorar ─(+)─► tiempo dedicado a mejorar ─(+, con retraso)─► capacidad
      ─(+)─► producción ─(−)─► brecha

B3 Atajos:
  brecha ─(+)─► presión para hacer más trabajo ─(+)─► tiempo quitado a la mejora ─(+)─► producción ─(−)─► brecha
  (el mismo tiempo quitado reduce el tiempo dedicado a mejorar, de modo que la capacidad se erosiona, más tarde)

R1 Reinversión:
  capacidad ─(+)─► producción ─(−)─► brecha ─(+)─► presión para hacer más trabajo
      ─(−)─► tiempo dedicado a mejorar ─(+, con retraso)─► capacidad
  (de refuerzo: con una capacidad alta funciona en sentido virtuoso, con una capacidad en descenso, en sentido vicioso)
```

(Adaptado de Repenning y Sterman, 2001. Un esquema en palabras, no un modelo validado. Los signos son mi lectura de la lógica de los bucles y no se han contrastado enlace por enlace con las figuras de los autores; consulta el artículo para ver los diagramas exactos.)

El momento en que llegan los efectos lo es todo. Trabajar más duro (B1) es lo que los autores llaman «mejor antes que peor»: la producción mejora ahora y la capacidad paga después. Trabajar de forma más inteligente (B2) es «peor antes que mejor»: la producción cae al dedicar tiempo a mejorar, y la capacidad se recupera tras un retraso. Los atajos (B3) son el mismo trueque que trabajar más duro, hecho recortando el tiempo de mejora. Un bucle gratificante con retroalimentación corta gana siempre a un bucle gratificante con retroalimentación larga cuando se juzga con las cifras de este trimestre.

Los autores informan de retrasos del orden de meses para procesos simples y de años para el desarrollo de producto.

## Aprendizaje supersticioso, paso a paso

Los autores dan también un ejemplo numérico ilustrativo, que recorro paso a paso. Es su ejemplo, no datos.

Supón que un responsable ve una brecha de seis horas por persona y semana entre la producción deseada y la producción entregada. El responsable aplica presión. Dos de esas seis horas provienen de personas que de verdad trabajan más duro. Las otras cuatro provienen de recortar el tiempo de mejora. (Por ejemplo, mantenimiento omitido, documentación omitida o formación omitida. Esos ejemplos son una glosa mía, no un detalle del ejemplo de los autores.)

Lo que ve el responsable son seis horas de producción adicional. Lo que las causó son dos horas de esfuerzo real más cuatro horas tomadas prestadas del futuro. Así que el responsable concluye que la presión funciona y sobrestima su efecto, dicen los autores, «hasta en un factor de tres». Seis entre dos es tres.

Lo llaman Error de Atribución Autoconfirmatorio (*Self-Confirming Attribution Error*), y la parte «autoconfirmatorio» importa. Como los atajos son invisibles cuando se toman, la evidencia de la que dispone el responsable sigue coincidiendo con su creencia. Meses después las horas prestadas vencen en forma de retrabajo, y la pregunta pasa a ser por qué el equipo ha empeorado. Con los mismos datos, la respuesta a la que muchos llegan es «el equipo».

## Los héroes se llevan el mérito

Un eslabón más de su relato trata de la recompensa. Se cita a un ingeniero de una empresa automovilística: «Nadie se lleva nunca el mérito de arreglar problemas que nunca ocurrieron». Los autores describen culturas que recompensan la heroica extinción de incendios por encima de la prevención, lo que, según su relato, añade un segundo bucle de refuerzo que pasa por incentivos que promueven a los «héroes».

Sus informes de resultados incluyen los programas de mantenimiento de DuPont y de BP Lima. En las plantas de DuPont que aplicaron el programa, el tiempo medio entre fallos de las bombas mejoró un 12 % aproximadamente por cada duplicación de la experiencia operativa, frente al 5 % en 23 plantas comparables, y los costes directos de mantenimiento cayeron cerca de un 20 % frente a un aumento de en torno al 7 %. En BP Lima, los costes de mantenimiento subieron un 30 % en los primeros seis meses. Son cifras que los autores recogen de fuentes de profesionales, no evaluaciones independientes. La cifra de Lima es aquí la más interesante, porque es una caída planificada.

## Un bucle de control que puedes leer

La misma aritmética del retraso aparece, de forma más literal, en Kubernetes. El [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) está documentado como un bucle de control intermitente que por defecto se ejecuta cada 15 segundos. Su regla central es:

```
desiredReplicas = ceil[ currentReplicas × ( currentMetricValue / desiredMetricValue ) ]
```

Por defecto, según la documentación actual, omite los cambios mientras el cociente está dentro de una tolerancia de 0,1. La documentación describe también el «flapping» (oscilación), en el que el número de réplicas fluctúa, y fija por defecto una ventana de estabilización de 300 segundos para el escalado a la baja.

Este es el mecanismo, paso a paso. Es mi interpretación de cómo encajan las partes documentadas, de forma simbólica y sin números propios.

1. La carga sube, la métrica supera su objetivo y el controlador añade réplicas.
2. Los nuevos pods no son útiles de inmediato. Tardan en arrancar y en estar listos, y sus métricas se retrasan. Durante ese tiempo la métrica sigue marcando un valor alto.
3. Un controlador que tomara esa lectura obsoleta al pie de la letra añadiría réplicas otra vez, y otra, para una capacidad que ya está en camino. Cuando todos los pods nuevos entran en línea, hay demasiada, la métrica cae y escala a la baja. Y vuelta a empezar.

Así que la pregunta es qué hace la documentación con ese desfase. Describe un retraso inicial de disponibilidad (por defecto, 30 segundos) y un periodo de inicialización de CPU (por defecto, 5 minutos) durante los cuales las métricas de los pods se tratan con recelo. Y «el controlador asume conservadoramente que los pods que aún no están listos consumen el 0 % de la métrica deseada, lo que amortigua aún más la magnitud de un escalado al alza». La ventana de estabilización del escalado a la baja cumple la misma función en el otro sentido. Leído así, el «sobreimpulso» es lo que haría el bucle sin esas salvaguardas, y las salvaguardas cambian capacidad de respuesta por estabilidad. El [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) de Meadows expresa la versión general en una línea: «Los retrasos en los bucles de retroalimentación son determinantes críticos del comportamiento del sistema».

El autoescalador es un bucle literal con un periodo definido. Un equipo no lo es. Lo uso para hacer visible la estructura, y volveré a dónde se acaba la analogía en la Parte 4.

## Resistencia a las políticas y otros nombres

Sterman [define](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) la resistencia a las políticas (*policy resistance*) como «la tendencia de las intervenciones a ser derrotadas por la respuesta del sistema a la propia intervención». Encaja: la intervención, la presión, provoca respuestas (atajos, soluciones alternativas ocultas) que la derrotan.

Usaré solo dos patrones con nombre: la resistencia a las políticas (Sterman) y la trampa de la capacidad (Repenning y Sterman). Más allá de esos, describo las estructuras con mis propias palabras. Un ejemplo, como interpretación editorial: la presión y los atajos tienen la forma de un arreglo sintomático, que alivia la brecha visible mientras erosiona la capacidad de cerrarla. Es mi lectura de sus bucles, no un patrón con nombre en los textos de Meadows usados en esta serie.

## La deuda técnica como coste diferido

La [frase original](https://c2.com/doc/oopsla92.html) de Cunningham es «Cada minuto dedicado a código que no está del todo bien cuenta como interés de esa deuda». Repenning y Sterman usan el mismo tipo de ejemplo: un ingeniero de software que omite la documentación. El [cuadrante](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) de Fowler distingue la deuda prudente de la imprudente. Leo todos estos casos como stocks de capacidad con un drenaje diferido y difícil de observar. El libro de SRE de Google aporta la plausibilidad para el trabajo de operaciones: «el *toil* tiende a expandirse si no se controla», en [palabras del libro](https://sre.google/sre-book/eliminating-toil/).

El mecanismo, según mi lectura: el stock que se drena es la capacidad de hacer el trabajo de manera sostenible (automatización, documentación, código limpio). Se drena de forma invisible porque el trabajo omitido no deja rastro el día en que se omite, y aflora más tarde como interés, en el sentido de Cunningham: más esfuerzo manual y más retrabajo por cambio, que compiten luego por las mismas horas.

## Un equipo de plataforma hipotético

Considera un equipo de plataforma **hipotético** que se encarga de una plataforma de CI/CD. Todo lo de este párrafo es inventado con fines ilustrativos; no se describe ningún equipo ni cifra reales.

El backlog de funcionalidades crece. La dirección sube los objetivos de entrega (B1). El equipo aplaza las correcciones de tests inestables, las actualizaciones de runbooks y las actualizaciones de dependencias (B3). El rendimiento (*throughput*) sube durante un trimestre, lo que la dirección interpreta como prueba de que los objetivos funcionaron. Mientras tanto, el stock de capacidad, es decir, la fiabilidad de los tests, la documentación y lo actualizadas que están las dependencias, se drena donde nadie mira.

Más tarde, la carga de incidentes y el retrabajo aumentan y se comen el tiempo de mejora, de modo que R1 empieza a funcionar en sentido vicioso. El equipo tiene ahora menos capacidad para arreglar los problemas que consumen su capacidad. El responsable ve un equipo que ha empeorado y recurre a más presión.

## Aprender de bucles que cierran la brecha equivocada

La educación ofrece la misma estructura con una brecha distinta. En Chicago, como describió la Parte 2, la brecha medida, las puntuaciones de las pruebas, era la que el sistema cerraba ([trampas](https://www.nber.org/papers/w9413) en una minoría de aulas, [mejoras entre los estudiantes situados en medio de la distribución](https://www.nber.org/papers/w13293)). El propósito no medido se desvió. Leo esto como bucles de equilibrio que cierran la brecha medida, y no llevaría el paralelo con el caso de la ingeniería más allá de eso.

## Qué predice la estructura y qué no

Si esta lectura es correcta, exhortar a la gente con más fuerza no funcionará, porque la evidencia que ve confirma la exhortación. Algo tiene que cambiar las reglas: cuándo se hacen visibles las consecuencias, cuán protegido está el tiempo de mejora y qué se recompensa. La Parte 5 lo convierte en un experimento.

Si un equipo real de tu organización está en una trampa es una cuestión empírica. Estos diagramas no pueden responderla, y este artículo tampoco.

Repenning y Sterman extienden ellos mismos el patrón más allá de las organizaciones, a la vida personal: citan aprender un software nuevo y comprometerse con un nuevo programa de ejercicio. Es una extensión de los autores, y la ofrezco solo como analogía, sin ninguna afirmación sobre fisiología. La estructura es familiar: el esfuerzo que se dedica ahora a mejorar es lo primero que se sacrifica ante las exigencias del día, y el coste aparece más tarde.

Así que esta es la pregunta que deja abierta este artículo. Si una estructura de recompensas hace que la lección equivocada parezca la correcta, ¿qué tipo de evidencia aceptarían realmente quienes están dentro de ella?

## Referencias y lecturas recomendadas

- **Nobody Ever Gets Credit for Fixing Problems that Never Happened: Creating and Sustaining Process Improvement**, Nelson P. Repenning y John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Fuente de los bucles de la trampa de la capacidad, del ejemplo desarrollado, de las citas de campo y de las cifras de DuPont y BP. Estudios de caso y modelos, no ensayos; las cifras de resultados proceden de fuentes de profesionales.
- **Horizontal Pod Autoscaling**, documentación de Kubernetes (versión actual). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. Fórmula, periodo por defecto del bucle, tolerancia, «flapping» y ventana de estabilización. Los valores por defecto pueden cambiar entre versiones.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de la afirmación sobre los retrasos en los bucles de retroalimentación. Ensayo de Meadows, no el libro.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Definición de resistencia a las políticas.
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. La metáfora de la deuda, incluida la frase sobre el interés citada.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. La distinción entre deuda prudente e imprudente.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Razón documentada por la que es verosímil que el *toil* crezca sin control; una práctica de empresa, no un óptimo validado.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob y Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Evidencia de Chicago (a nivel de resumen).
- **Left Behind By Design: Proficiency Counts and Test-Based Accountability**, Derek Neal y Diane Whitmore Schanzenbach, NBER Working Paper 13293, 2007. <https://www.nber.org/papers/w13293>. Evidencia de Chicago (a nivel de resumen).

Las citas de textos en inglés son traducción propia.
