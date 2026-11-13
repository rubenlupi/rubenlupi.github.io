---
title: "Por qué la gente inteligente repite una y otra vez los mismos errores"
description: "Bucles de retroalimentación, retrasos y la trampa de la capacidad, desmontados paso a paso con tres ejemplos: apagar fuegos, el autoescalado y la deuda técnica."
date: 2026-11-13
editorialDate: 2026-11-02
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
draft: false
---

Hay errores que no tienen nada que ver con la inteligencia. Son la respuesta sensata a una estructura en la que los costes llegan después que las recompensas. Esa estructura enseña después la lección equivocada a quienes forman parte de ella, y los más listos la aprenden antes.

Este artículo pone a prueba esa idea en tres escenarios: una trampa de la mejora documentada en investigación de campo, un bucle de control en sentido literal dentro de Kubernetes y un pequeño equipo de plataforma, explícitamente hipotético. Es la más técnica de las cinco entregas.

*Sobre las fuentes. Esta serie trabaja con las ideas de Donella Meadows tal como aparecen en fuentes de acceso legal (un fragmento de un borrador de* Thinking in Systems *publicado por el Donella Meadows Project, sus ensayos e investigación independiente sobre sistemas); no es una reseña del libro completo. La trampa que se describe más abajo no es obra de Meadows, sino de Nelson Repenning y John Sterman.*

## El caso documentado: la trampa de la capacidad

En [«Nobody Ever Gets Credit for Fixing Problems that Never Happened»](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf), Repenning y Sterman describen organizaciones cuyos programas de mejora se van apagando. La teoría, escriben, «surgió inicialmente del estudio de dos iniciativas de mejora en un gran fabricante de automóviles» y se apoya en «más de una docena de estudios de caso en profundidad», además de modelos de simulación. Es una base empírica rica, pero procede de estudios de caso y de modelos, no de ensayos controlados.

Dos testimonios de campo muestran cómo se vive desde dentro. Un supervisor de una planta de electrónica cuenta: «Los supervisores nunca tenían tiempo para introducir mejoras…». Y un ingeniero de desarrollo de producto: «El proceso nuevo es bueno. Algún día me gustaría trabajar en un proyecto que lo use de verdad».

Nadie en esas frases es vago ni tonto. Lo que describen es un bucle.

## Los bucles

Los autores modelan la capacidad de los procesos como un stock que se erosiona sin cesar y que el esfuerzo de mejora repone, con retraso. A su alrededor describen cuatro bucles. Lo que sigue es mi adaptación en texto de esa estructura, no una reproducción de sus figuras.

```
B1 Esforzarse más:
  brecha ─(+)─► presión para producir más ─(+)─► tiempo dedicado al trabajo en sí ─(+)─► producción ─(−)─► brecha

B2 Trabajar mejor:
  brecha ─(+)─► presión para mejorar ─(+)─► tiempo dedicado a mejorar ─(+, con retraso)─► capacidad
      ─(+)─► producción ─(−)─► brecha

B3 Atajos:
  brecha ─(+)─► presión para producir más ─(+)─► tiempo restado a la mejora ─(+)─► producción ─(−)─► brecha
  (ese mismo tiempo restado reduce el que se dedica a mejorar, así que la capacidad se erosiona, más tarde)

R1 Reinversión:
  capacidad ─(+)─► producción ─(−)─► brecha ─(+)─► presión para producir más
      ─(−)─► tiempo dedicado a mejorar ─(+, con retraso)─► capacidad
  (de refuerzo: con una capacidad alta gira en sentido virtuoso; con una capacidad que cae, en sentido vicioso)
```

(Adaptado de Repenning y Sterman, 2001. Es un esquema en palabras, no un modelo validado. Los signos son mi lectura de la lógica de los bucles y no los he cotejado relación por relación con las figuras de los autores; para los diagramas exactos, consulta el artículo.)

Todo depende de los tiempos. Esforzarse más (B1) es lo que los autores llaman «mejor antes que peor»: la producción mejora ya y la capacidad lo paga más tarde. Trabajar mejor (B2) es «peor antes que mejor»: la producción baja mientras el tiempo se va en mejorar, y la capacidad devuelve la inversión al cabo de un tiempo. Los atajos (B3) son el mismo trueque que esforzarse más, solo que a costa del tiempo de mejora. Entre dos bucles que dan fruto, el de retroalimentación corta gana al de retroalimentación larga siempre que se los juzgue por las cifras de este trimestre.

Según los autores, los retrasos son del orden de meses en procesos sencillos y de años en el desarrollo de productos.

## El aprendizaje supersticioso, paso a paso

Los autores dan además un ejemplo numérico ilustrativo, que voy a recorrer paso a paso. El ejemplo es suyo; no son datos.

Supón que un directivo observa una brecha de seis horas por persona y semana entre la producción que quiere y la que obtiene, y aprieta. Dos de esas seis horas salen de un esfuerzo adicional y genuino. Las otras cuatro, de recortar tiempo de mejora (por ejemplo, mantenimiento, documentación o formación que se dejan de hacer; estos ejemplos son glosa mía, no detalles del ejemplo de los autores).

Lo que el directivo ve son seis horas más de producción. Lo que las ha provocado son dos horas de esfuerzo real y cuatro pedidas prestadas al futuro. Así que concluye que la presión funciona y, según los autores, sobrestima su efecto «hasta en un factor de tres». Seis entre dos, tres.

Lo llaman error de atribución autoconfirmado (*Self-Confirming Attribution Error*), y lo de «autoconfirmado» no es un detalle menor. Como los atajos no se ven en el momento de tomarlos, todo lo que observa el directivo sigue dándole la razón. Meses después, las horas prestadas se cobran en forma de retrabajo y la pregunta pasa a ser por qué ha empeorado el equipo. Con los mismos datos delante, la respuesta a la que llega mucha gente es: «el equipo».

## El mérito se lo llevan los héroes

Su explicación tiene otro eslabón, el de la recompensa. Citan a un ingeniero de una empresa automovilística: «A nadie le reconocen nunca el mérito de arreglar problemas que no llegaron a ocurrir». Los autores describen culturas que premian apagar fuegos con heroísmo antes que prevenirlos, lo que, según su relato, añade un segundo bucle de refuerzo que pasa por unos incentivos que encumbran a los «héroes».

Entre los resultados que recogen figuran los programas de mantenimiento de DuPont y de BP Lima. En las plantas de DuPont que aplicaron el programa, el tiempo medio entre fallos de las bombas mejoró alrededor de un 12 % por cada duplicación de la experiencia operativa, frente a un 5 % en 23 plantas comparables, y los costes directos de mantenimiento bajaron cerca de un 20 %, frente a una subida de en torno al 7 %. En BP Lima, los costes de mantenimiento aumentaron un 30 % en los seis primeros meses. Son cifras que los autores toman de fuentes del propio sector, no de evaluaciones independientes. La de Lima es aquí la más interesante, porque es un bache planificado.

## Un bucle de control que se puede leer

La misma aritmética del retraso aparece, de forma más literal, en Kubernetes. La documentación del [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) lo describe como un bucle de control intermitente que, por defecto, se ejecuta cada 15 segundos. Su regla central es esta:

```
desiredReplicas = ceil[ currentReplicas × ( currentMetricValue / desiredMetricValue ) ]
```

Según la documentación actual, por defecto no hace cambios mientras la proporción quede dentro de una tolerancia de 0,1. La documentación describe también el *flapping*, cuando el número de réplicas sube y baja sin parar, y fija por defecto una ventana de estabilización de 300 segundos para reducir réplicas.

El mecanismo, paso a paso, sería el siguiente. Es mi interpretación de cómo encajan las piezas documentadas, en términos simbólicos y sin cifras propias.

1. Sube la carga, la métrica supera su objetivo y el controlador añade réplicas.
2. Los pods nuevos no sirven de inmediato: tardan en arrancar y en estar listos, y sus métricas llegan con retraso. Mientras tanto, la métrica sigue marcando alto.
3. Un controlador que se fiara sin más de esa lectura desfasada volvería a añadir réplicas, y otra vez después, para una capacidad que ya viene en camino. Cuando todos los pods nuevos entran en servicio sobra capacidad, la métrica cae y el controlador reduce réplicas. Y vuelta a empezar.

La cuestión, entonces, es qué hace la documentación con ese retraso. Describe un retraso inicial de disponibilidad (*readiness*), de 30 segundos por defecto, y un periodo de inicialización de CPU, de 5 minutos por defecto, durante los cuales las métricas de los pods se miran con recelo. Además, «el controlador supone, de forma conservadora, que los pods que aún no están listos consumen el 0 % de la métrica deseada, lo que amortigua todavía más la magnitud de un escalado al alza». La ventana de estabilización hace el mismo trabajo en el sentido contrario, al reducir. Visto así, el «sobreimpulso» (*overshoot*) es lo que haría el bucle sin esas salvaguardas, y las salvaguardas sacrifican capacidad de respuesta a cambio de estabilidad. En [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Meadows resume la versión general en una línea: «Los retrasos en los bucles de retroalimentación son determinantes críticos del comportamiento del sistema».

El autoescalador es un bucle literal con un periodo definido; un equipo, no. Lo uso para hacer visible la estructura, y en la cuarta entrega vuelvo sobre el punto en que la analogía deja de valer.

## La resistencia a las políticas, y otros nombres

Sterman [define](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) la resistencia a las políticas (*policy resistance*) como «la tendencia de las intervenciones a verse frustradas por la respuesta del sistema a la propia intervención». Encaja: la intervención, que aquí es la presión, despierta respuestas (atajos, apaños ocultos) que la neutralizan.

Solo voy a usar dos patrones con nombre propio: la resistencia a las políticas (Sterman) y la trampa de la capacidad (Repenning y Sterman). Fuera de esos dos, describo las estructuras con mis palabras. Un ejemplo, como interpretación editorial: la presión y los atajos tienen la forma de un remedio sintomático, que alivia la brecha visible mientras va minando la capacidad de cerrarla. Es mi lectura de sus bucles, no un patrón con nombre en los textos de Meadows que maneja esta serie.

## La deuda técnica como coste diferido

La [frase original](https://c2.com/doc/oopsla92.html) de Cunningham dice: «Cada minuto dedicado a código que no está del todo bien cuenta como intereses de esa deuda». Repenning y Sterman usan un ejemplo de la misma forma, el de un ingeniero de software que se salta la documentación, y el [cuadrante](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) de Fowler distingue la deuda prudente de la temeraria. Leo todo ello como stocks de capacidad que se vacían con retraso y de forma difícil de observar. Para el trabajo de operaciones, el libro de SRE de Google aporta la verosimilitud: «el *toil* tiende a crecer si no se le pone freno», en [palabras del propio libro](https://sre.google/sre-book/eliminating-toil/).

El mecanismo, tal como lo leo, es este. El stock que se vacía es la capacidad de hacer el trabajo de forma sostenible (automatización, documentación, código limpio). Se vacía sin que nadie lo note porque lo que se deja de hacer no deja rastro el día en que se deja de hacer, y aflora más tarde en forma de intereses, en el sentido de Cunningham: más esfuerzo manual y más retrabajo por cada cambio, que a su vez compiten por las mismas horas.

## Un equipo de plataforma hipotético

Pensemos en un equipo de plataforma **hipotético** que se ocupa de una plataforma de CI/CD. Todo lo que cuenta este párrafo es inventado para ilustrar la idea; no describe ningún equipo ni ninguna cifra reales.

La lista de funcionalidades pendientes crece y la dirección sube las metas de entrega (B1). El equipo aplaza los arreglos de las pruebas inestables, la puesta al día de los runbooks y las actualizaciones de dependencias (B3). El rendimiento sube durante un trimestre, y la dirección lo interpreta como prueba de que las metas han funcionado. Mientras tanto, el stock de capacidad, es decir, la fiabilidad de las pruebas, la documentación y lo al día que estén las dependencias, se vacía donde nadie mira.

Más adelante, los incidentes y el retrabajo aumentan y se comen el tiempo de mejora, de modo que R1 empieza a girar en sentido vicioso. El equipo tiene ahora menos capacidad para arreglar los problemas que le están consumiendo la capacidad. El directivo ve un equipo que ha empeorado y recurre a más presión.

## Aprender de bucles que cierran la brecha equivocada

La educación ofrece la misma estructura con otra brecha. En Chicago, como se vio en la segunda entrega, lo que cerró el sistema fue la brecha medida, la de las notas de los exámenes ([trampas](https://www.nber.org/papers/w9413) en una minoría de aulas, [mejoras entre los alumnos del centro de la distribución](https://www.nber.org/papers/w13293)). El propósito, que nadie medía, se fue desviando. Leo estos casos como bucles de equilibrio que cierran la brecha medida, y no llevaría el paralelismo con el caso de ingeniería más allá de eso.

## Lo que la estructura predice, y lo que no

Si esta lectura es correcta, exhortar a la gente con más empeño no dará resultado, porque todo lo que ve confirma la exhortación. Hace falta algo que cambie las reglas: cuándo se hacen visibles las consecuencias, hasta qué punto se protege el tiempo de mejora y qué se recompensa. La quinta entrega convierte todo esto en un experimento.

Saber si un equipo real de tu organización está atrapado en una trampa así es una cuestión empírica. Estos diagramas no pueden responderla, y este artículo tampoco.

Los propios Repenning y Sterman llevan el patrón más allá de las organizaciones, a la vida personal: mencionan aprender a usar un programa nuevo y comprometerse con un nuevo plan de ejercicio. Esa extensión es de los autores, y yo la ofrezco solo como analogía, sin pretender decir nada sobre fisiología. La estructura resulta familiar: el esfuerzo que hoy dedicaríamos a mejorar es lo primero que sacrificamos ante las urgencias del día, y el coste llega después.

Esta es, pues, la pregunta que el artículo deja abierta: si una estructura de recompensas hace que la lección equivocada parezca la correcta, ¿qué clase de pruebas aceptarían de verdad quienes están dentro?

## Referencias y lecturas recomendadas

- **Nobody Ever Gets Credit for Fixing Problems that Never Happened: Creating and Sustaining Process Improvement**, Nelson P. Repenning y John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Fuente de los bucles de la trampa de la capacidad, del ejemplo numérico, de los testimonios de campo y de las cifras de DuPont y BP. Estudios de caso y modelos, no ensayos; las cifras de resultados proceden de fuentes del sector.
- **Horizontal Pod Autoscaling**, documentación de Kubernetes (versión actual). <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. Fórmula, periodo por defecto del bucle, tolerancia, *flapping* y ventana de estabilización. Los valores por defecto pueden cambiar de una versión a otra.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project, sin fecha. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de la afirmación sobre los retrasos en los bucles de retroalimentación. Es un ensayo de Meadows, no el libro.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Definición de la resistencia a las políticas.
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. La metáfora de la deuda, incluida la frase sobre los intereses que se cita.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. La distinción entre deuda prudente y temeraria.
- **Eliminating Toil (Site Reliability Engineering, ch. 5)**, Vivek Rau, ed. Betsy Beyer, Google, 2016. <https://sre.google/sre-book/eliminating-toil/>. Razón documentada por la que es verosímil que el *toil* crezca sin control; la práctica de una empresa, no un óptimo validado.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob y Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Datos de Chicago (consultado a nivel de resumen).
- **Left Behind By Design: Proficiency Counts and Test-Based Accountability**, Derek Neal y Diane Whitmore Schanzenbach, NBER Working Paper 13293, 2007. <https://www.nber.org/papers/w13293>. Datos de Chicago (consultado a nivel de resumen).

Las citas de textos en inglés son traducción propia.
