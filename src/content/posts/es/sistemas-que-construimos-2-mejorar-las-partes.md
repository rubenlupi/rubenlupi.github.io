---
title: "El sistema no se cayó. Lo tiramos intentando salvarlo."
description: "Cómo los reintentos, los retrasos y las soluciones locales pueden convertir una degradación recuperable en un fallo sistémico."
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
topics: ["Systems & Organizations", "Software Engineering"]
tags: ["Systems Thinking", "Feedback Loops", "Distributed Systems", "Resilience", "Delays"]
lang: es
translationOf: systems-we-build-2-improving-the-parts
draft: false
---

A las 10:17, el servicio de pagos empieza a responder lentamente.

No está caído. Todavía procesa operaciones, aunque algunas peticiones que antes tardaban 200 milisegundos ahora necesitan varios segundos.

Los clientes tienen reintentos automáticos. Cuando una petición supera el tiempo de espera, vuelven a enviarla.

El equipo de plataforma detecta la saturación y añade réplicas. El equipo de pagos aumenta los *timeouts* para evitar errores innecesarios. Otro equipo incrementa el número de conexiones disponibles.

Todas son decisiones técnicamente defendibles.

A las 10:24, el servicio deja de responder.

Lo hemos arreglado hasta romperlo.

Este incidente es ficticio, aunque los mecanismos que describe son reales. Y sirve para explorar una de las ideas más incómodas de Donella Meadows: una intervención puede empeorar un sistema porque modifica su comportamiento de una manera que no habíamos previsto.

El problema es que normalmente analizamos las soluciones como si el sistema fuera a quedarse quieto mientras las aplicamos.

No lo hace.

## El problema no era el timeout

Volvamos al servicio de pagos.

Recibe habitualmente 800 peticiones por segundo. En condiciones normales puede procesar unas 1.000.

De pronto, una dependencia comienza a responder lentamente. Las operaciones permanecen abiertas más tiempo y aumenta la concurrencia.

Los clientes empiezan a experimentar *timeouts*.

Alguien propone aumentar el tiempo de espera de dos a cinco segundos.

Tiene sentido. Si el servicio necesita tres segundos para responder, abandonar a los dos genera errores que podrían evitarse.

Pero esperar también tiene un coste.

Mientras una operación permanece abierta, puede consumir conexiones, memoria, capacidad de ejecución y otros recursos.

[Little's Law](https://pubsonline.informs.org/doi/10.1287/opre.9.3.383) describe una relación fundamental entre el número medio de operaciones presentes en un sistema, su tasa efectiva y el tiempo medio que permanecen en él:

L = λ · W (operaciones concurrentes = tasa efectiva × tiempo medio en el sistema)

Si un sistema estable completa 800 operaciones por segundo y cada una permanece en él una media de 200 milisegundos, hay aproximadamente 160 operaciones concurrentes.

Si ese tiempo medio aumenta a dos segundos, con la misma tasa efectiva, la concurrencia media pasa a 1.600.

Diez veces más.

Esto no significa que aumentar un *timeout* multiplique necesariamente la concurrencia. Depende de cómo se comporten las operaciones y de qué recursos retengan mientras esperan.

Lo importante es que el tiempo forma parte del consumo de capacidad.

Una intervención diseñada para reducir errores puede aumentar la presión sobre los recursos que provocan esos errores.

Y entonces aparece una pregunta distinta.

¿Estamos corrigiendo el problema o modificando las condiciones que lo alimentan?

## El sistema también responde a nuestras respuestas

En *Thinking in Systems*, Meadows explica que buena parte del comportamiento dinámico de los sistemas surge de sus mecanismos de retroalimentación.

Un *feedback loop* existe cuando una variable influye, directa o indirectamente, sobre sí misma a través de otras variables.

Hay dos grandes familias.

Los **bucles de refuerzo** amplifican cambios. Pueden impulsar crecimiento o acelerar un deterioro.

Los **bucles de equilibrio** contrarrestan desviaciones y tienden a estabilizar alguna variable alrededor de un objetivo.

No son categorías morales. Un bucle de refuerzo puede ser deseable y uno de equilibrio puede impedir un cambio necesario.

En nuestro servicio de pagos aparece un bucle de refuerzo:

**Más latencia → más timeouts → más reintentos → más carga → más latencia.**

Cada cliente intenta proteger su propia operación.

Ninguno necesita tener un error de programación.

Pero el comportamiento colectivo puede destruir la disponibilidad que todos intentan preservar.

Podemos representar la amplificación mediante un modelo simplificado.

Supongamos que llegan λ operaciones originales por segundo y que cada intento tiene una probabilidad constante p de generar otro intento.

Con reintentos ilimitados, el número esperado de intentos por operación es:

1 + p + p² + … = 1 / (1 − p)

Por tanto:

Intentos totales = operaciones originales / (1 − p)

Si p = 0,5, el volumen esperado de intentos se duplica.

Si p = 0,8, se multiplica por cinco.

En producción, esa probabilidad no suele ser constante. Puede aumentar precisamente cuando el servicio se satura. También existen límites de reintentos y distribuciones temporales que este modelo no contempla.

No estamos prediciendo una caída con una ecuación sencilla.

Estamos identificando un mecanismo que puede amplificarla.

Y eso cambia la investigación.

En lugar de preguntar únicamente por qué está lento el servicio, empezamos a preguntar qué está haciendo el propio sistema para volverse todavía más lento.

## El autoscaler no sabe que está llegando tarde

El equipo de plataforma decide añadir capacidad.

La utilización ha aumentado y el autoscaler solicita nuevas réplicas.

En principio, estamos introduciendo un bucle de equilibrio:

**Más utilización → más réplicas → más capacidad → menos utilización.**

Pero las réplicas no aparecen instantáneamente.

Hay que programarlas, arrancar los contenedores, inicializar dependencias, superar comprobaciones de salud y comenzar a recibir tráfico.

Mientras tanto, el controlador sigue observando un sistema saturado.

Si la configuración no tiene suficientemente en cuenta ese retraso, puede solicitar más capacidad de la necesaria.

Cuando finalmente llegan todas las réplicas, quizá la carga ya ha disminuido.

El controlador empieza a reducirlas.

Poco después, la demanda vuelve a subir.

Y repetimos el ciclo.

Los [mecanismos de estabilización](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/), los periodos de enfriamiento, los límites de escalado y la selección de métricas existen precisamente para evitar estas situaciones.

Un controlador bien configurado no tiene por qué oscilar.

Pero el ejemplo muestra por qué Meadows considera los retrasos una propiedad fundamental de los sistemas (en [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) los asocia con el exceso de corrección y la oscilación).

Un *delay* separa una acción de sus consecuencias.

Si reaccionamos repetidamente antes de que una intervención haya producido su efecto, podemos corregir demasiado.

Si esperamos demasiado, el problema puede crecer hasta superar nuestra capacidad de respuesta.

El comportamiento depende de la relación entre la velocidad de nuestras decisiones y la velocidad con la que el sistema puede cambiar.

No basta con tener una buena solución.

También necesitamos aplicarla en el momento adecuado y observar sus efectos durante el tiempo suficiente.

## Cuando todos tienen razón y el sistema pierde

Imaginemos ahora que intervienen tres equipos.

El primero es responsable de los clientes. Su objetivo es reducir errores visibles para los usuarios.

Configura más reintentos.

El segundo gestiona la plataforma. Su objetivo es mantener una utilización eficiente de la infraestructura.

Ajusta los umbrales de escalado.

El tercero mantiene el servicio de pagos. Su objetivo es completar el mayor número posible de operaciones.

Amplía los *timeouts* y el número de conexiones.

Cada equipo dispone de una explicación razonable de sus decisiones.

Pero ninguno controla por sí solo el comportamiento completo.

El primero aumenta la demanda durante los fallos.

El segundo responde con capacidad que tarda en estar disponible.

El tercero permite que las operaciones permanezcan abiertas durante más tiempo.

El resultado depende de cómo interactúan esas decisiones.

Aquí aparece una idea esencial del pensamiento sistémico: **la racionalidad local no garantiza un resultado global deseable**.

No significa que las personas carezcan de responsabilidad.

Significa que evaluar una decisión únicamente desde la perspectiva de quien la toma puede ser insuficiente.

El equipo que configura reintentos debería conocer el impacto que puede generar sobre sus dependencias.

El responsable de la plataforma debería comprender los tiempos de reacción de sus mecanismos de escalado.

El equipo de pagos debería conocer los recursos que retiene una operación mientras espera.

Y todos necesitan información sobre el comportamiento conjunto.

Porque una decisión puede ser correcta respecto a un objetivo local y perjudicial respecto al objetivo del sistema.

## La trampa de aliviar el síntoma

Meadows describe varias trampas recurrentes en los sistemas.

Una de ellas es *shifting the burden*, que podemos traducir como desplazar la carga o trasladar la responsabilidad de resolver un problema hacia una solución sintomática.

El mecanismo aparece cuando una intervención reduce temporalmente los síntomas, pero deja intacta la causa fundamental.

Con el tiempo, esa intervención puede convertirse en la respuesta habitual.

Imaginemos una plataforma donde los servicios se saturan periódicamente.

Cada vez que ocurre, añadimos capacidad.

La intervención funciona. La latencia baja y las alarmas desaparecen.

Pero quizá el problema de fondo sea que cada operación de negocio genera demasiadas llamadas internas, que las consultas son ineficientes o que existe una dependencia compartida incapaz de escalar.

Añadir réplicas puede ser una decisión perfectamente válida. A veces es la solución adecuada.

La trampa aparece cuando el alivio inmediato reduce el incentivo para investigar el mecanismo que produce la saturación.

El sistema sigue funcionando gracias a intervenciones cada vez más costosas.

Y la causa original permanece.

No es difícil reconocer un patrón parecido en organizaciones.

Un equipo acumula trabajo pendiente.

La respuesta consiste en pedir horas extraordinarias.

La cola disminuye temporalmente.

Pero si el ritmo de entrada continúa superando la capacidad sostenible, el trabajo vuelve a acumularse.

Repetimos la intervención.

Con el tiempo, las horas extraordinarias dejan de ser excepcionales.

Se convierten en parte del funcionamiento esperado.

La solución temporal ha modificado las condiciones del sistema.

Ahora dependemos de ella.

Lo inquietante de esta trampa es que la intervención puede funcionar de verdad.

Precisamente por eso resulta tan fácil repetirla.

## La resistencia no siempre viene de las personas

Otra trampa descrita por Meadows es la *policy resistance*: la resistencia que surge cuando diferentes actores intentan llevar un sistema hacia objetivos incompatibles.

Pensemos en una plataforma compartida.

El equipo de infraestructura quiere reducir costes.

Los equipos de producto quieren minimizar latencia.

Seguridad quiere limitar permisos y conexiones.

Operaciones quiere aumentar la estabilidad.

Cada objetivo puede ser legítimo.

Pero las intervenciones pueden contrarrestarse.

Infraestructura reduce capacidad para controlar el gasto.

Los equipos de producto introducen cachés y mecanismos de recuperación para compensar la pérdida de rendimiento.

Seguridad restringe determinadas conexiones, lo que modifica las rutas de comunicación.

Operaciones incorpora nuevas comprobaciones y procedimientos para controlar el riesgo.

El resultado puede ser un sistema más complejo, caro y difícil de operar que el original.

No porque uno de los objetivos sea incorrecto.

Sino porque los actores están intentando regular variables diferentes mediante mecanismos que interactúan.

Meadows propone una idea contraintuitiva: en determinadas situaciones, aumentar la presión para alcanzar un objetivo puede intensificar la resistencia del sistema.

La alternativa exige comprender qué intenta conseguir cada participante y buscar estructuras que reduzcan los conflictos entre objetivos.

Eso no elimina las decisiones difíciles.

Al contrario.

Obliga a hacer explícitos los compromisos que antes permanecían escondidos entre equipos.

## Más control puede producir menos control

Hay una paradoja que aparece con frecuencia en ingeniería.

Cuando un sistema se vuelve impredecible, añadimos mecanismos de control.

Más comprobaciones. Más reintentos. Más alarmas. Más automatizaciones. Más políticas. Más controladores.

Cada mecanismo puede ser útil individualmente.

Pero también introduce estados, dependencias, condiciones y posibles interacciones.

Un controlador puede modificar una variable que otro controlador está intentando estabilizar.

Una política de recuperación puede activar un mecanismo de protección que provoca nuevos errores.

Una alerta puede desencadenar una intervención automática que modifica las condiciones sobre las que se calculó la alerta.

El problema no es la automatización.

Es que estamos construyendo sistemas que reaccionan a sí mismos.

Y cuanto mayor es el número de mecanismos que interactúan, más importante resulta comprender su dinámica conjunta.

En algunos casos, la solución puede consistir en añadir un mecanismo nuevo.

En otros, en eliminar uno.

Un buen diseño no es necesariamente el que contiene más controles.

Es el que consigue el comportamiento deseado con mecanismos que podemos comprender, observar y mantener.

## Lo que deberíamos haber hecho a las 10:17

Volvamos al incidente inicial.

El servicio de pagos comienza a responder lentamente.

¿Qué habría sido diferente si hubiéramos analizado el sistema como un conjunto de bucles y acumulaciones?

Primero, habríamos distinguido la demanda original del tráfico amplificado por reintentos. Sin esa distinción, una gráfica de peticiones por segundo puede engañarnos: muestra más carga, pero no explica cuánto tráfico ha generado el propio mecanismo de recuperación.

Después, habríamos observado la concurrencia, el tiempo que las operaciones permanecen abiertas, el tamaño de las colas y la saturación de las dependencias. La CPU por sí sola no basta para explicar un servicio que espera conexiones o respuestas remotas.

También habríamos comprobado qué intervenciones ya estaban en marcha. ¿Cuántas réplicas estaban solicitadas pero todavía no listas? ¿Había cambios de configuración propagándose? ¿Estaban los clientes sincronizando sus reintentos? Una métrica tomada durante la transición puede describir un sistema que ya no existe cuando decidimos actuar.

Las medidas posibles son conocidas: límites de reintentos, *exponential backoff* con [*jitter*](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/), presupuestos de reintento, *circuit breakers*, *load shedding*, *backpressure* y límites explícitos de concurrencia. Ninguna es una receta universal. Por ejemplo, un *circuit breaker* mal ajustado también puede oscilar, y rechazar carga requiere decidir qué operaciones son prescindibles.

La diferencia no estaría en disponer de más herramientas. Estaría en seleccionar cada intervención por el bucle que pretende modificar, anticipar sus efectos secundarios y observar si realmente cambia la dinámica.

## El sistema no se salva a base de buenas intenciones

Hay un riesgo al hablar de sistemas: que la responsabilidad se disuelva en una nube de flechas y diagramas. Como todo está conectado, nadie parece haber tomado una decisión concreta.

Sería una lectura cómoda y equivocada.

Las personas eligen los límites de reintento. Diseñan las dependencias. Establecen objetivos locales. Deciden cuándo desplegar, cuándo revertir y cuándo detener una intervención.

El pensamiento sistémico no elimina esas responsabilidades. Las hace más exigentes.

Nos pide que expliquemos no solo qué problema resuelve una decisión, sino también qué comportamiento puede desencadenar en otros lugares del sistema.

Una solución puede funcionar localmente y fallar globalmente. Puede funcionar hoy y generar dependencia mañana. Puede estabilizar una variable y desestabilizar otra.

La pregunta decisiva, entonces, deja de ser «¿hemos aplicado correctamente la solución?».

Pasa a ser: **¿qué está haciendo el sistema ahora que hemos intervenido?**

A las 10:17 teníamos un servicio degradado. A las 10:24, un servicio caído.

Entre ambas horas no faltó actividad. Sobraron respuestas que nadie había analizado juntas.

**El sistema no se cayó. Lo tiramos intentando salvarlo.**

## Referencias y lecturas recomendadas

- **Thinking in Systems: A Primer**, Donella H. Meadows, Chelsea Green Publishing, 2008. Marco conceptual de retroalimentación, retrasos y trampas sistémicas. No se ha comprobado una lectura íntegra del libro: los nombres de las trampas «policy resistance» y «shifting the burden» proceden de su capítulo sobre trampas, que no se ha podido consultar directamente.
- **Leverage Points: Places to Intervene in a System**, Donella H. Meadows, Donella Meadows Project. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Los retrasos y su relación con el exceso de corrección y la oscilación.
- **Dancing With Systems**, Donella H. Meadows, Donella Meadows Project. <https://donellameadows.org/archives/dancing-with-systems/>. Un caso de termostato central en el que las correcciones tardías aumentaron las oscilaciones.
- **A Proof for the Queuing Formula: L = λW**, John D. C. Little, Operations Research 9(3), 1961. <https://pubsonline.informs.org/doi/10.1287/opre.9.3.383>. Enunciado y demostración de la ley de Little, con sus condiciones (medias finitas y procesos estacionarios).
- **Exponential Backoff and Jitter**, Marc Brooker, AWS Architecture Blog, 2015. <https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/>. Análisis técnico de estrategias de reintento y del efecto del jitter.
- **Horizontal Pod Autoscaling**, Kubernetes Documentation. <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>. Mecanismos de escalado y de estabilidad del número de réplicas.
