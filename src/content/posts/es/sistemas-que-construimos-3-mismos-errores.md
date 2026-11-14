---
title: "Hemos aprendido a medirlo todo. Excepto lo que importa."
description: "Métricas impecables, incentivos que alteran el comportamiento y equipos que cumplen objetivos mientras el producto pierde valor: qué nos enseñan Meadows, DORA y los estudios sobre educación."
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
tags: ["Systems Thinking", "Metrics", "Incentives", "DORA", "Organizational Design"]
lang: es
translationOf: systems-we-build-3-same-mistakes
draft: false
---

El dashboard está verde.

La frecuencia de despliegue ha aumentado. El tiempo de entrega de los cambios se ha reducido. Los equipos cumplen sus compromisos y la productividad parece mejorar trimestre tras trimestre.

En la reunión de resultados, todo son buenas noticias.

Tres plantas más abajo, atención al cliente está desbordada. Los usuarios abandonan procesos a medio completar. El equipo de producto lleva meses intentando resolver los mismos problemas y los ingenieros empiezan a preguntarse por qué trabajan tanto para conseguir tan poco.

Nadie ha falsificado los números.

El dashboard funciona.

Ese es precisamente el problema.

Hemos construido un sistema capaz de cumplir sus objetivos sin conseguir aquello para lo que supuestamente existe.

Y si pensamos que la solución consiste en encontrar a la persona que eligió mal las métricas, probablemente todavía no hemos entendido el problema.

## El sistema aprende lo que recompensamos

En *Thinking in Systems*, Donella Meadows distingue los elementos de un sistema, sus interconexiones y su función o propósito.

La distinción parece sencilla, pero tiene una consecuencia incómoda: el propósito real de un sistema no siempre coincide con su propósito declarado.

Una organización puede decir que quiere crear valor para sus clientes. Puede escribirlo en su estrategia, repetirlo en sus reuniones y colocarlo en la primera diapositiva de cada presentación.

Pero si sus mecanismos de decisión, sus presupuestos y sus recompensas favorecen exclusivamente la cantidad de funcionalidades entregadas, ese comportamiento acabará influyendo en lo que hace la organización.

No porque todos sus miembros sean oportunistas. Tampoco porque exista una conspiración para ignorar al cliente.

Las personas adaptamos nuestras decisiones al entorno en el que trabajamos. Y ese entorno incluye lo que se mide, lo que se premia, lo que se castiga y lo que resulta visible.

Meadows sitúa los objetivos del sistema entre los [puntos de intervención](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) de mayor influencia. Cambiar el objetivo puede alterar el comportamiento de muchos elementos sin modificar directamente cada uno de ellos.

Pero hay una dificultad: los objetivos que declaramos y los que realmente gobiernan nuestras decisiones pueden ser distintos.

Para descubrir esa diferencia, conviene observar qué ocurre cuando dos objetivos entran en conflicto.

¿Qué sucede cuando mejorar la calidad obliga a retrasar una entrega? ¿Cuando resolver un problema del cliente no aumenta ninguna métrica del equipo? ¿Cuando una decisión técnicamente correcta perjudica el indicador por el que se evalúa a quien debe tomarla?

Ahí es donde las declaraciones de principios empiezan a competir con la estructura real.

## Las métricas no son ventanas transparentes

Una métrica es una representación parcial de la realidad. Elegimos una variable, decidimos cómo medirla y la utilizamos para interpretar un fenómeno más amplio.

Eso resulta imprescindible en ingeniería. No podemos operar una plataforma compleja únicamente mediante intuiciones.

El problema aparece cuando confundimos la representación con aquello que pretende representar.

Pensemos en la productividad de un equipo de software. Podemos medir commits, pull requests, tickets completados, despliegues o tiempo de ciclo.

Todas esas medidas contienen información. Ninguna, por sí sola, demuestra que estemos creando valor.

Un equipo puede cerrar más tickets porque ha dividido las tareas en unidades más pequeñas. Puede desplegar con mayor frecuencia porque ha reducido el tamaño de los cambios. Puede generar más código porque utiliza asistentes de IA.

Cada una de esas transformaciones puede ser positiva. Pero también podemos aumentar la actividad sin mejorar el resultado.

La diferencia importa porque, cuando una métrica se convierte en objetivo, las personas empiezan a tomar decisiones para influir sobre ella.

Esto suele relacionarse con la ley de Goodhart, popularizada en la formulación según la cual una medida deja de ser una buena medida cuando se convierte en objetivo.

La frase es útil, aunque conviene no convertirla en una ley universal. Una métrica puede seguir siendo valiosa incluso cuando la utilizamos para establecer objetivos. Lo que cambia es el comportamiento de las personas y organizaciones que interactúan con ella.

Y ese comportamiento puede modificar la relación entre el indicador y el fenómeno que queríamos observar.

En otras palabras: medir no siempre es una actividad pasiva. A veces cambia el sistema que estamos midiendo.

## Chicago: cuando mejorar la nota no significa mejorar la educación

En 2003, los economistas Brian Jacob y Steven Levitt publicaron [una investigación](https://www.nber.org/papers/w9413) sobre las trampas en exámenes estandarizados de las escuelas públicas de Chicago.

Analizaron patrones estadísticos compatibles con alteraciones de respuestas y utilizaron información adicional para estudiar el fenómeno.

Estimaron que cada año se producían trampas graves de profesores o directivos en al menos un 4–5 % de las aulas de primaria. También encontraron que esos comportamientos respondían a cambios relativamente modestos en los incentivos.

El estudio no demuestra que todos los profesores actuaran así ni que la evaluación estandarizada sea inútil. Revela algo más específico.

Cuando las consecuencias profesionales dependen intensamente de un indicador, algunas personas pueden encontrar maneras de mejorar ese indicador sin mejorar aquello que pretende medir.

La nota del examen se convierte en un objetivo operativo. Y aparecen comportamientos que el sistema de evaluación no pretendía producir.

[Otro estudio](https://www.nber.org/papers/w13293), de Derek Neal y Diane Whitmore Schanzenbach, examinó los efectos de un sistema de rendición de cuentas basado en cuántos alumnos alcanzaban un nivel mínimo de competencia.

Encontraron mejoras concentradas en estudiantes situados cerca del umbral relevante, mientras que los estudiantes con resultados más bajos no experimentaban las mismas mejoras.

El mecanismo económico es comprensible. Si el éxito institucional depende del número de alumnos que supera una línea, invertir recursos en quienes están cerca de cruzarla puede producir una mejora más inmediata del indicador.

Ayudar a un alumno que está muy lejos del umbral puede ser educativamente importante, pero contribuir menos al resultado medido a corto plazo.

No hace falta que nadie declare que ciertos alumnos importan menos. La estructura de incentivos puede favorecer una distribución desigual de la atención.

El paralelismo con ingeniería no consiste en equiparar profesores con desarrolladores. Consiste en reconocer un mecanismo compartido: **cuando definimos una frontera estrecha para medir el éxito, podemos desplazar recursos hacia aquello que cuenta y alejarlos de aquello que también importa.**

Y hay una pregunta todavía más interesante. ¿Qué ocurre cuando las personas que diseñan el sistema de evaluación también empiezan a creer que su indicador representa completamente el objetivo?

Entonces el problema deja de ser únicamente de incentivos. Se convierte en un problema de modelo mental.

## DORA no es el problema

En ingeniería de software tenemos un ejemplo especialmente interesante: las [métricas DORA](https://dora.dev/guides/dora-metrics-four-keys/).

Su propósito es ayudar a comprender el rendimiento de la entrega de software mediante indicadores relacionados con la velocidad y la estabilidad.

Entre ellos encontramos la frecuencia de despliegue, el tiempo de entrega de cambios, la tasa de fallos de cambios y los tiempos de recuperación. La formulación actual de DORA incorpora también el retrabajo asociado a despliegues.

La investigación de DORA ha contribuido a cuestionar la idea de que entregar más rápido implica necesariamente sacrificar estabilidad. Eso es valioso.

Pero la propia DORA advierte de que convertir las métricas en objetivos aumenta la probabilidad de manipularlas, y de que compararlas entre aplicaciones muy distintas puede inducir a error.

Imaginemos que una organización decide aumentar la frecuencia de despliegue un 30 %.

Un equipo comienza a dividir sus cambios en unidades más pequeñas. Mejora la integración continua, automatiza pruebas y reduce dependencias. La frecuencia aumenta. Excelente.

Otro equipo consigue el mismo resultado modificando la forma de contabilizar los despliegues o realizando cambios de escaso valor únicamente para mejorar la cifra. La frecuencia también aumenta.

El dashboard muestra dos éxitos aparentemente equivalentes. Pero el sistema ha producido comportamientos muy distintos.

La métrica no distingue necesariamente entre ellos.

Esto no invalida DORA. Demuestra por qué necesitamos comprender el contexto y el propósito de cada indicador.

La cuestión es especialmente relevante cuando incorporamos agentes de IA al desarrollo.

Si un agente genera código más rápido, podemos observar más commits, más pull requests y más cambios propuestos. Pero el valor del software depende también de la calidad de las decisiones, de su integración, de su mantenimiento y de los resultados que produce.

Podemos acelerar una parte del flujo sin mejorar el conjunto. Incluso podemos saturar la revisión y la integración.

El problema no es que los agentes produzcan demasiado código. Es que seguimos necesitando distinguir entre producir artefactos y conseguir resultados.

## Cada persona toma decisiones con un mapa incompleto

La racionalidad limitada, concepto desarrollado por Herbert Simon y discutido también en la tradición del pensamiento sistémico, describe una característica fundamental de nuestras decisiones.

No disponemos de información perfecta. Tampoco podemos evaluar todas las alternativas posibles. Tomamos decisiones utilizando modelos simplificados de la realidad, bajo restricciones de tiempo, conocimiento y capacidad de procesamiento.

En una organización de ingeniería, esas limitaciones son inevitables.

Un desarrollador puede comprender profundamente su servicio sin conocer todas las dependencias de negocio. Un Product Owner puede conocer las necesidades de los usuarios sin dominar las restricciones técnicas de la plataforma. Un responsable de infraestructura puede optimizar recursos sin disponer de información suficiente sobre el impacto de determinadas decisiones en la experiencia del cliente. Un Engineering Manager puede observar los indicadores de entrega sin conocer todos los compromisos técnicos que están acumulándose.

Ninguna de esas perspectivas es necesariamente incorrecta. Todas son incompletas.

El problema surge cuando convertimos una perspectiva parcial en una representación suficiente del conjunto.

Aquí los flujos de información adquieren una importancia enorme.

Meadows considera la estructura de los flujos de información uno de los puntos donde podemos intervenir para modificar un sistema.

No se trata simplemente de construir otro dashboard. Se trata de cambiar quién puede observar qué consecuencias, con qué retraso y en qué momento puede actuar.

Imaginemos que los ingenieros conocen la latencia de sus servicios, pero nunca reciben información sobre los procesos de negocio que fallan. Pueden optimizar técnicamente una API durante meses sin descubrir que el principal problema del usuario está en una decisión de producto.

Y también ocurre lo contrario. Un equipo de producto puede diseñar una funcionalidad aparentemente sencilla sin conocer el coste operativo de mantenerla.

La solución no consiste en exigir que todos sepan de todo. Consiste en construir mecanismos que permitan conectar las decisiones con sus consecuencias.

## Conway tenía razón, pero no nos dio una solución

En 1968, Melvin Conway [observó](https://www.melconway.com/Home/Committees_Paper.html) que las organizaciones que diseñan sistemas tienden a producir estructuras que reflejan sus patrones de comunicación.

Es una de las ideas más citadas en ingeniería de software. También una de las más fáciles de simplificar.

A menudo se interpreta como una recomendación directa: si queremos una arquitectura diferente, debemos reorganizar los equipos.

A veces puede funcionar. Pero cambiar un organigrama no modifica automáticamente los flujos reales de información, las dependencias, los incentivos o las relaciones de poder.

Podemos crear equipos autónomos sobre el papel y mantener decisiones centralizadas en la práctica. Podemos dividir un monolito en microservicios y conservar las mismas dependencias de coordinación. Podemos asignar responsabilidades claras y seguir necesitando cinco aprobaciones para desplegar un cambio pequeño.

La estructura formal es solo una parte del sistema. Las interacciones reales importan tanto o más.

Y esas interacciones están influidas por los objetivos de cada participante.

Si un equipo es evaluado por minimizar costes y otro por maximizar disponibilidad, sus decisiones pueden entrar en conflicto aunque ambos estén formados por profesionales excelentes.

No basta con pedirles que colaboren mejor. Hay que examinar las condiciones que hacen que determinadas decisiones resulten racionales para cada uno.

## Los objetivos pueden erosionarse sin que nadie lo decida

Meadows describe una trampa denominada *drift to low performance*, asociada a la erosión progresiva de los objetivos.

El mecanismo aparece cuando ajustamos nuestras expectativas a un rendimiento cada vez peor.

Imaginemos una plataforma cuyo objetivo inicial es recuperar el servicio en menos de treinta minutos. Tras varios incidentes complejos, el equipo empieza a considerar aceptable una recuperación de una hora. Más adelante, dos horas.

Cada ajuste puede parecer razonable dadas las circunstancias. Pero si el objetivo se adapta continuamente al rendimiento observado, el sistema pierde presión para mejorar.

La desviación deja de ser visible porque hemos movido la referencia.

Algo parecido puede ocurrir con la calidad del software. Un equipo comienza aceptando un pequeño número de pruebas inestables. Después aprende a ignorar ciertos fallos del pipeline. Más adelante, repetir una ejecución se convierte en una práctica habitual. Finalmente, las pruebas dejan de ofrecer una señal fiable.

No hubo una decisión explícita de abandonar la calidad. Hubo una sucesión de adaptaciones locales.

Y cada adaptación modificó lo que el equipo consideraba normal.

Esta trampa tiene un aspecto especialmente inquietante: podemos confundir nuestra capacidad de adaptación con una mejora del sistema.

Adaptarse es necesario. Pero no toda adaptación es progreso. A veces simplemente nos acostumbramos a funcionar peor.

## El éxito también puede concentrar el éxito

Otra trampa de Meadows es *success to the successful*.

Aparece cuando quienes obtienen buenos resultados reciben recursos adicionales que aumentan su capacidad de seguir obteniéndolos.

Imaginemos dos equipos de producto.

El primero dispone de una plataforma madura, automatización de pruebas y dependencias relativamente estables. El segundo mantiene un sistema heredado con numerosas integraciones y problemas operativos.

El primer equipo entrega más rápido. La organización interpreta que es más productivo y le asigna nuevas inversiones.

El segundo recibe presión para mejorar sus cifras, pero pocos recursos para reducir sus restricciones estructurales.

Con el tiempo, la diferencia puede ampliarse. No necesariamente porque uno de los equipos sea mejor. Parte de la diferencia puede proceder de las condiciones iniciales y de cómo se distribuyen los recursos.

El mecanismo es un bucle de refuerzo:

**Más capacidad → mejores resultados → más recursos → más capacidad.**

No significa que debamos repartir todos los recursos por igual. Puede haber razones excelentes para invertir más en un producto exitoso.

La cuestión es reconocer cuándo una distribución de recursos está amplificando diferencias que después interpretamos como diferencias de mérito.

Sin ese análisis, corremos el riesgo de premiar condiciones favorables y castigar restricciones estructurales.

## Aristóteles, los hábitos y el software que terminamos construyendo

En el libro II de la [*Ética a Nicómaco*](https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html), Aristóteles relaciona la formación de las virtudes con la práctica repetida.

No nacemos con determinados hábitos completamente formados. Los desarrollamos mediante nuestras acciones.

La conexión con los sistemas organizativos resulta interesante, siempre que no confundamos filosofía moral con una teoría cuantitativa de sistemas.

Una organización también desarrolla hábitos.

Cómo revisa el código. Cómo responde a los incidentes. Cómo discute los errores. Cómo decide qué trabajo merece atención. Cómo trata las señales que contradicen sus expectativas.

Esas prácticas se repiten hasta convertirse en parte de la manera habitual de trabajar.

Podemos declarar que valoramos la experimentación y castigar cada experimento fallido. Podemos defender la autonomía y exigir aprobación para cualquier decisión relevante. Podemos hablar de aprendizaje continuo y no reservar nunca tiempo para aprender.

En esos casos, los hábitos reales enseñan algo diferente de lo que dicen los principios.

Y el comportamiento futuro dependerá en buena medida de lo que practicamos repetidamente.

La conexión con Meadows aparece en las reglas, los objetivos y los mecanismos de retroalimentación.

Las personas aprenden de las consecuencias de sus acciones. Si una organización recompensa constantemente determinados comportamientos, no debería sorprenderse cuando esos comportamientos se vuelven habituales.

Pero tampoco deberíamos caer en el determinismo. Las personas pueden cuestionar las reglas, resistirse a los incentivos y transformar las instituciones en las que participan.

Un sistema influye sobre nuestras decisiones. No las determina por completo.

## Cambiar la métrica puede no cambiar nada

Llegados a este punto, la solución parece evidente. Dejemos de medir actividad y empecemos a medir valor.

Pero el valor también es difícil de definir.

¿Ingresos? ¿Retención? ¿Satisfacción? ¿Fiabilidad? ¿Reducción del riesgo? ¿Capacidad futura?

Cada elección introduce nuevas fronteras. Y cada frontera puede generar comportamientos inesperados.

Si medimos exclusivamente ingresos, podemos sacrificar calidad o sostenibilidad. Si medimos únicamente satisfacción inmediata, podemos evitar decisiones necesarias que producen incomodidad a corto plazo. Si premiamos la ausencia de incidentes, podemos incentivar que algunos problemas no se reporten.

No existe una métrica mágica que elimine el problema de los incentivos.

Por eso Meadows distingue diferentes niveles de intervención.

Cambiar el valor objetivo de un indicador es modificar un parámetro. Cambiar quién recibe determinada información modifica los flujos de información. Cambiar qué decisiones están permitidas altera las reglas. Cambiar lo que el sistema intenta conseguir afecta a su propósito. Y cuestionar las ideas que utilizamos para definir el éxito puede exigir revisar nuestros paradigmas.

No todas esas intervenciones tienen la misma dificultad ni producen los mismos efectos. Pero la distinción ayuda a entender por qué algunas reformas generan cambios superficiales y otras transforman el comportamiento.

Una organización puede sustituir un KPI por otro y conservar intacta su manera de pensar. En ese caso, probablemente terminaremos reproduciendo el mismo problema con un dashboard diferente.

## El dashboard debería provocar preguntas

No necesitamos dejar de medir. Necesitamos dejar de tratar las métricas como respuestas completas.

Una medida útil debería ayudarnos a investigar.

¿Por qué ha mejorado este indicador? ¿Qué comportamiento ha cambiado para producir esa mejora? ¿Qué consecuencias quedan fuera de nuestra observación? ¿A quién beneficia y a quién perjudica? ¿Qué podría estar empeorando mientras celebramos el resultado?

Y, sobre todo, ¿qué evidencia nos haría reconocer que estamos optimizando algo equivocado?

Estas preguntas son más difíciles que establecer una meta trimestral. También son más útiles.

Porque el objetivo de un sistema de medición no debería ser demostrar que todo funciona. Debería ayudarnos a descubrir cuándo nuestras interpretaciones son incorrectas.

El pensamiento sistémico no ofrece una forma de diseñar organizaciones donde nadie tome malas decisiones. Nos ofrece herramientas para comprender por qué determinadas decisiones se vuelven habituales, cómo se refuerzan y qué condiciones podríamos modificar.

A veces necesitaremos mejores indicadores. Otras veces, mejores flujos de información. Quizá reglas diferentes. Y en ocasiones tendremos que cuestionar el propio objetivo que estamos intentando alcanzar.

Volvamos a nuestro dashboard.

La frecuencia de despliegue ha aumentado. Los tiempos de entrega han mejorado. Los equipos cumplen sus compromisos.

Todo está verde.

Pero los usuarios siguen teniendo problemas.

El error sería concluir automáticamente que las métricas son falsas. Pueden ser completamente correctas.

**Lo verdaderamente preocupante es que quizá hemos construido una organización extraordinariamente eficiente haciendo algo que ya no tiene demasiado sentido.**

Y mientras sigamos confundiendo cumplir objetivos con cumplir nuestro propósito, cada trimestre podremos celebrar nuevos éxitos.

Aunque el producto sea cada vez peor.

## Referencias y lecturas recomendadas

- **Thinking in Systems: A Primer**, Donella H. Meadows, Chelsea Green Publishing, 2008. Marco sobre objetivos, flujos de información, retroalimentación y trampas sistémicas. No se ha comprobado una lectura íntegra del libro: los nombres de las trampas «drift to low performance» y «success to the successful» proceden de su capítulo sobre trampas, que no se ha podido consultar directamente.
- **Leverage Points: Places to Intervene in a System**, Donella H. Meadows, Donella Meadows Project. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. La jerarquía de puntos de intervención, desde parámetros hasta paradigmas.
- **Rotten Apples: An Investigation of the Prevalence and Predictors of Teacher Cheating**, Brian A. Jacob y Steven D. Levitt, NBER Working Paper 9413, 2003. <https://www.nber.org/papers/w9413>. Estimación de un mínimo del 4–5 % de aulas de primaria con trampas cada año en Chicago, y su sensibilidad a los incentivos (leído a nivel de resumen).
- **Left Behind by Design: Proficiency Counts and Test-Based Accountability**, Derek Neal y Diane Whitmore Schanzenbach, NBER Working Paper 13293, 2007. <https://www.nber.org/papers/w13293>. Mejoras en el centro de la distribución y no en los alumnos con menos ventajas (leído a nivel de resumen).
- **DORA's software delivery metrics: the four keys**, DORA. <https://dora.dev/guides/dora-metrics-four-keys/>. Las cinco métricas, el hallazgo de que velocidad y estabilidad no son una disyuntiva y las advertencias sobre manipulación y comparaciones.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, abril de 1968. <https://www.melconway.com/Home/Committees_Paper.html>. El enunciado original de la ley de Conway.
- **Nicomachean Ethics, Book II**, Aristotle, trad. W. D. Ross, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. El hábito como producto de la práctica repetida.

Las referencias a Goodhart y a Herbert Simon (racionalidad limitada) se mencionan como ideas conocidas y no se apoyan en una fuente abierta para este artículo.
