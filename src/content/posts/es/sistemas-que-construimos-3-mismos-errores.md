---
title: "Apretar funciona, hasta que llega la factura"
description: "En el ejemplo de los autores, seis horas de producción extra salen de dos horas de esfuerzo real y dejan a un directivo convencido de que la presión funciona: por qué el atajo parece un éxito, por qué la factura llega meses después y qué tienen en común los héroes que apagan fuegos, los autoescaladores impacientes y la deuda técnica."
date: 2026-11-13
editorialDate: 2026-10-26
series: break-and-change
seriesPart:
  title: "Los sistemas que construimos, los sistemas que habitamos"
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
draft: true
---

«El proceso nuevo es bueno. Algún día me gustaría trabajar en un proyecto que lo use de verdad.» Lo dijo un ingeniero de desarrollo de producto, y Nelson Repenning y John Sterman lo citan en [su estudio sobre la mejora de procesos](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf). El proceso nuevo tiene admiradores de sobra y ni un solo usuario.

Detrás de la frase hay un mecanismo sobre lo que los directivos aprenden de sus propios datos. La presión sube la producción, quien la aplica ve la subida y concluye que funciona, y meses después llega la factura en forma de retrabajo. Entonces esas mismas personas, con el mismo tipo de datos delante, se preguntan por qué el equipo ha empeorado. Aquí nadie tiene que ser vago ni tonto. Cuando los costes llegan más tarde que las recompensas, la estructura enseña la lección equivocada a quienes están dentro, y los listos sencillamente la aprenden antes.

No he tenido acceso al libro completo, así que me apoyo en el fragmento del borrador de *Thinking in Systems* que publica el Donella Meadows Project, en los ensayos de Meadows y en investigación independiente sobre sistemas. La trampa que ocupa el centro de lo que sigue es de Repenning y Sterman, no de Meadows.

## La mejora para la que nadie tuvo tiempo

En [«Nobody Ever Gets Credit for Fixing Problems that Never Happened»](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf), Repenning y Sterman describen organizaciones cuyos programas de mejora se van marchitando. Su teoría «surgió inicialmente del estudio de dos iniciativas de mejora en un gran fabricante de automóviles» y descansa en «más de una docena de estudios de caso en profundidad», además de modelos de simulación. Son muchas pruebas, aunque se trate de estudios de caso y modelos, no de ensayos controlados.

El ingeniero no está solo en el artículo. Un supervisor de una planta de electrónica dice: «Los supervisores nunca tenían tiempo para introducir mejoras…». Entre los dos cubren la vida entera de un programa de mejora: primero nadie tiene tiempo para construirlo, luego nadie tiene un proyecto donde usarlo, y a ninguno de los dos le parece mal.

## Cuatro bucles, y el que paga demasiado tarde

Los autores modelan la capacidad de los procesos como un stock que se erosiona sin parar y que el esfuerzo de mejora repone, con retraso. A su alrededor dibujan cuatro bucles.

```
B1 Esforzarse más:
  brecha ─(+)─► presión para trabajar más ─(+)─► tiempo dedicado al trabajo en sí ─(+)─► producción ─(−)─► brecha

B2 Trabajar mejor:
  brecha ─(+)─► presión para mejorar ─(+)─► tiempo dedicado a mejorar ─(+, con retraso)─► capacidad
      ─(+)─► producción ─(−)─► brecha

B3 Atajos:
  brecha ─(+)─► presión para trabajar más ─(+)─► tiempo quitado a la mejora ─(+)─► producción ─(−)─► brecha
  (ese mismo tiempo quitado reduce el tiempo dedicado a mejorar, así que la capacidad se erosiona, más tarde)

R1 Reinversión:
  capacidad ─(+)─► producción ─(−)─► brecha ─(+)─► presión para trabajar más
      ─(−)─► tiempo dedicado a mejorar ─(+, con retraso)─► capacidad
  (de refuerzo: con una capacidad alta gira en sentido virtuoso; con una capacidad en caída, en sentido vicioso)
```

Es mi adaptación de Repenning y Sterman (2001), un esquema en palabras y no un modelo validado. Los signos salen de mi lectura de la lógica de los bucles, no de contrastar cada enlace con las figuras de los autores; para los diagramas exactos, mejor ir al artículo.

Todo depende de cuándo llega cada cosa. Esforzarse más (B1) es lo que los autores llaman «mejor antes que peor»: la producción mejora ya y la capacidad lo paga después. Trabajar mejor (B2) es «peor antes que mejor»: la producción baja mientras el tiempo se va a la mejora, y la capacidad solo lo devuelve con retraso. Los atajos (B3) hacen el mismo trato que esforzarse más, solo que a costa de saquear el tiempo de mejora. Y los retrasos son largos, del orden de meses en procesos sencillos y de años en desarrollo de producto, según los autores. Si juzgas por las cifras de este trimestre, el marcador da la razón a esforzarse más y a tomar atajos, y da el partido por cerrado mucho antes de que lleguen los resultados del bucle lento.

## Seis horas de producción, dos de esfuerzo

Los autores aterrizan la consecuencia con un ejemplo numérico propio, construido para mostrar la lógica y no sacado de datos. Un directivo ve una brecha de seis horas por persona y semana entre la producción que quiere y la que obtiene, y aprieta. Dos de esas seis horas salen de gente que de verdad se esfuerza más. Las otras cuatro salen de recortar el tiempo de mejora: mantenimiento, documentación o formación que se dejan de hacer, por ejemplo (los ejemplos son míos, no de los autores).

El directivo ve seis horas más de producción y nada de su origen, así que concluye que la presión funciona y, según los autores, sobrestima su efecto «hasta en un factor de tres». Seis entre dos, tres. Dos horas de esfuerzo real, cuatro pedidas prestadas al futuro y un directivo convencido de haber presenciado un milagro. Es el único préstamo en el que el banco te da las gracias por pedirlo.

Lo llaman error de atribución autoconfirmado (*Self-Confirming Attribution Error*). Los atajos no se ven en el momento de tomarlos, de modo que los datos siguen dando la razón a lo que el directivo ya creía: pides a los datos una segunda opinión y te devuelven la primera, con cifras. Cuando las horas prestadas vencen en forma de retrabajo, mucha gente con esos mismos datos culparía al equipo. Quizá tú también; los datos son muy convincentes, y ahí está justamente el problema.

## Nadie asciende por el incendio que no hubo

Las recompensas lo empeoran. Un ingeniero de una empresa de automoción le dio título al artículo: «Nadie se lleva nunca el mérito de arreglar problemas que nunca ocurrieron». Los autores describen culturas que premian apagar fuegos con heroísmo por encima de la prevención, lo que, según ellos, crea un segundo bucle de refuerzo a través de incentivos que ascienden a los «héroes». A quien se queda hasta tarde apagando el incendio se le ve; quien tiene un sistema que nunca ardió no ha producido, a juzgar por cualquier informe, absolutamente nada.

Los programas de mantenimiento de DuPont y de BP Lima que recogen los autores muestran lo que la prevención puede comprar, y lo que cuesta primero. En las plantas de DuPont que aplicaron el programa, el tiempo medio entre fallos de las bombas mejoró alrededor de un 12 % por cada duplicación de la experiencia operativa, frente al 5 % en 23 plantas comparables, y los costes directos de mantenimiento bajaron cerca de un 20 %, mientras que en las plantas de comparación subieron alrededor de un 7 %. En BP Lima, los costes de mantenimiento subieron un 30 % en los seis primeros meses. Los autores toman estas cifras de fuentes del propio sector, no de evaluaciones independientes. La de Lima me interesa más, porque ese bache estaba previsto: alguien aceptó de antemano que las cosas pareciesen ir peor. Eso exige más valor que cualquier noche apagando fuegos, y no dan medalla por ello.

## Una máquina capaz del mismo error

La misma aritmética del retraso aparece, de forma mucho más literal, en Kubernetes. Su documentación describe el [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) como un bucle de control intermitente que se ejecuta cada 15 segundos por defecto y que gira en torno a una regla:

```
desiredReplicas = ceil[ currentReplicas × ( currentMetricValue / desiredMetricValue ) ]
```

Por defecto, el controlador no hace cambios mientras la proporción se mantenga dentro de una tolerancia de 0,1. La documentación habla de *flapping*, cuando el número de réplicas sube y baja sin parar, y fija por defecto una ventana de estabilización de 300 segundos para reducir réplicas.

Cómo encajan estas piezas es interpretación mía. Sube la carga, la métrica supera su objetivo y el controlador añade réplicas. Los pods nuevos tardan en estar listos y sus métricas llegan con retraso, así que durante un rato la métrica sigue marcando alto. Un controlador que se fiara de esa lectura caducada volvería a añadir réplicas, y otra vez, encargando capacidad que ya viene de camino. Cuando los pods entraran en servicio sobraría capacidad para esa carga, la métrica caería, el controlador reduciría réplicas y el ciclo empezaría de nuevo. Eso es una sobrecorrección (*overshoot*): el remedio dura más que el problema porque la prueba de que ya está resuelto llega tarde. Es el error del directivo en miniatura. La máquina, al menos, tiene la excusa de ser una máquina.

La documentación se ocupa de ese retraso. Describe un retraso inicial de disponibilidad (30 segundos por defecto) y un periodo de inicialización de la CPU (5 minutos por defecto) durante los que las métricas de los pods se miran con recelo, y añade que «el controlador supone, de forma conservadora, que los pods que aún no están listos consumen el 0 % de la métrica deseada, lo que amortigua todavía más la magnitud de un aumento de escala». Dicho de otro modo, el controlador cuenta la capacidad que ya viene de camino antes de pedir más, que es bastante más paciencia de la que tuvo el directivo de las seis horas. La ventana de estabilización hace lo mismo en sentido contrario. Leído así, la sobrecorrección es lo que haría el bucle sin esas salvaguardas, y las salvaguardas compran estabilidad a costa de capacidad de reacción. El ensayo [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) de Meadows lo dice en general en una línea: «Los retrasos en los bucles de retroalimentación son determinantes críticos del comportamiento del sistema». El autoescalador, claro, es un bucle literal con un periodo definido, y un equipo no lo es.

## Cuando el sistema se defiende del remedio

Sterman [define](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) la resistencia a las políticas (*policy resistance*) como «la tendencia de las intervenciones a verse derrotadas por la respuesta del propio sistema a la intervención». La presión encaja demasiado bien, porque provoca justo las respuestas que acaban derrotándola, los atajos y los apaños que nadie ve. La medicina produce los síntomas para los que se recetó.

Llamar a esto un arreglo sintomático es etiqueta mía; Meadows no le pone nombre al patrón en los textos que he usado.

## Deuda técnica: intereses que nadie apunta

El software ya tiene nombre para esas cuatro horas prestadas. La [frase original](https://c2.com/doc/oopsla92.html) de Cunningham dice: «Cada minuto dedicado a código que no está del todo bien cuenta como intereses de esa deuda». Repenning y Sterman recurren a un ejemplo parecido, un ingeniero de software que se salta la documentación. El libro de SRE de Google hace verosímil la misma deriva en el trabajo de operaciones cuando advierte de que el *toil*, el trabajo operativo repetitivo, [«tiende a expandirse si nadie lo frena»](https://sre.google/sre-book/eliminating-toil/).

Lo que se vacía, tal como lo leo, es la capacidad de hacer el trabajo de forma sostenible, con automatización, documentación y código limpio. El trabajo que se salta no deja rastro el día que se salta; ninguna alerta ha sonado nunca porque un runbook se haya quedado anticuado en silencio esta tarde. Aflora más adelante como intereses en el sentido de Cunningham: más esfuerzo manual y más retrabajo por cada cambio. Es una deuda que cobra sus intereses en la única moneda con la que se podría haber saldado.

## Un equipo inventado que quizá te suene

Pongamos un caso inventado pero corriente: un equipo responsable de una plataforma de CI/CD. Si te suena, sigue siendo inventado.

El backlog de funcionalidades crece, así que la dirección sube las metas de entrega (B1), y el equipo aplaza el arreglo de los tests inestables, la actualización de los runbooks y la de las dependencias (B3). El rendimiento sube durante un trimestre y la dirección lo toma como prueba de que las metas funcionaron, lo cual, con las únicas cifras disponibles ese trimestre, es cierto. Mientras tanto, el stock de capacidad (la fiabilidad de los tests, la documentación, lo actualizadas que están las dependencias) se vacía donde nadie mira.

Luego los incidentes y el retrabajo se comen el tiempo de mejora, y R1 se vuelve vicioso: el equipo tiene cada vez menos margen para arreglar los problemas que le devoran el margen. El directivo ve un equipo que ha empeorado y recurre a más presión. Por lo que él alcanza a ver, la presión funciona de maravilla; es el equipo el que ha dejado de funcionar.

## Cuando esforzarse más agranda el agujero

Si esta lectura es correcta, pedir a los directivos que dejen de apretar no servirá de nada, porque los datos que ven siguen avalando la presión. Algo tiene que cambiar las reglas: cuándo se hacen visibles las consecuencias, hasta qué punto se protege el tiempo de mejora y qué se premia. Si un equipo concreto de tu organización está atrapado en algo así es una cuestión empírica que ningún diagrama puede zanjar.

Repenning y Sterman llevan el patrón a la vida personal y citan aprender a usar un programa nuevo o comprometerse con un nuevo plan de ejercicio. Esa extensión es suya, y yo la tomo solo como analogía, sin afirmar nada sobre fisiología. Aun así, la estructura te resultará conocida, y también al ingeniero que sigue esperando, algún día, un proyecto que use de verdad el proceso nuevo.

Si una estructura de recompensas hace que la lección equivocada parezca la buena, ¿qué clase de prueba aceptarían de verdad quienes están dentro?

## Referencias y lecturas recomendadas

- **Nobody Ever Gets Credit for Fixing Problems that Never Happened: Creating and Sustaining Process Improvement**, Nelson P. Repenning y John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Fuente de los bucles de la trampa de la capacidad, del ejemplo numérico, de las citas de campo y de las cifras de DuPont y BP. Estudios de caso y modelos, no ensayos; las cifras de resultados proceden de fuentes del sector.
- **Horizontal Pod Autoscaling**, documentación de Kubernetes (versión actual). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. Fórmula, periodo del bucle por defecto, tolerancia, *flapping* y ventana de estabilización. Los valores por defecto pueden cambiar entre versiones.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de la afirmación sobre los retrasos en los bucles de retroalimentación. Es un ensayo de Meadows, no el libro.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Definición de resistencia a las políticas.
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. La metáfora de la deuda, incluida la frase sobre los intereses citada.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Razón documentada de que sea verosímil que el *toil* crezca sin control; es la práctica de una empresa, no un óptimo validado.

Las citas de textos en inglés son traducción propia.
