---
title: "Cuando el problema no es la pieza, sino el sistema"
description: "LinkedIn no necesitaba otro Argo CD: necesitaba dejar de compartir. Lo que eso dice sobre plataformas, sobre Donella Meadows y sobre los agentes de IA."
date: 2026-11-13
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Systems Thinking", "Platform Engineering", "Agentic AI", "Architecture"]
lang: es
translationOf: sometimes-the-problem-isnt-the-component
draft: false
---

En ingeniería tenemos cierta debilidad por arreglar piezas.

Si algo va lento, añadimos recursos. Si una herramienta no escala, buscamos otra. Si un agente de IA falla, probamos con un modelo más potente.

Es una reacción bastante razonable. También es cómoda: cambiar un componente suele ser más sencillo que cuestionar cómo funciona todo lo que lo rodea.

El problema aparece cuando la pieza funciona perfectamente y, aun así, el sistema sigue fallando.

## LinkedIn no necesitaba otro Argo CD

En noviembre de 2026, LinkedIn publicó [cómo había rediseñado su plataforma de despliegues](https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine). Las cifras ayudan a entender el problema: más de 250 clústeres de Kubernetes, más de 4.000 servicios y más de 100.000 despliegues semanales.

Durante más de un año habían utilizado Argo CD, una herramienta GitOps ampliamente adoptada. Y no les había ido mal. De hecho, les permitió crecer hasta gestionar miles de servicios.

Pero a cierta escala empezaron a aparecer problemas que no se solucionaban simplemente añadiendo recursos.

En clústeres de 60.000 pods, algunas sincronizaciones tardaban menos de tres minutos. Por encima de los 80.000 pods, podían superar los diez.

Además, una aplicación podía aparecer como `Synced` y `Healthy` sin que eso garantizara que la revisión esperada estuviera realmente desplegada.

Y los cambios en determinados esquemas obligaban a reiniciar controladores en toda la flota.

No eran tres problemas independientes. Tenían algo en común: demasiadas aplicaciones dependían de mecanismos y estados compartidos.

LinkedIn podía seguir optimizando controladores, ajustando parámetros y aumentando capacidad. En lugar de eso, cambió la arquitectura.

Sustituyó el modelo de controladores compartidos para los despliegues de aplicaciones por una biblioteca que permite ejecutar cada despliegue en su propio pod efímero.

Una operación, un entorno de ejecución, un ciclo de vida.

Los resultados publicados son interesantes:

- Los despliegues aumentaron 3,7 veces.
- Los fallos de infraestructura pasaron de 925 a 63.
- La mediana del tiempo para detectar y cerrar un despliegue fallido bajó de 16,1 a 2,45 minutos.

LinkedIn reconoce que parte de la mejora también procede de cambios en su capa de orquestación. Conviene tenerlo presente.

Pero lo más interesante no son las cifras. Es la decisión arquitectónica.

Dejaron de intentar que un mecanismo compartido funcionara cada vez mejor y empezaron a eliminar la necesidad de compartirlo.

Argo CD no era necesariamente una mala herramienta. De hecho, LinkedIn sigue utilizándolo para otros componentes de su infraestructura.

Simplemente, había dejado de encajar con una parte concreta del problema.

## Donella Meadows ya había explicado algo parecido

Mucho antes de Kubernetes, Donella Meadows escribió [Leverage Points: Places to Intervene in a System](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/).

Su propuesta es sencilla, aunque sus consecuencias no lo sean: no todas las intervenciones sobre un sistema tienen el mismo impacto.

Cambiar números, parámetros o capacidades suele ser relativamente fácil. Modificar los flujos de información, las reglas o la estructura del sistema es bastante más difícil, pero puede alterar su comportamiento de manera mucho más profunda.

Pensemos en un supermercado.

Los clientes esperan demasiado para pagar. La solución inmediata parece evidente: abrir más cajas.

Pero imaginemos que todas las cajas dependen de un único sistema de autorización de pagos que procesa las solicitudes secuencialmente.

Podemos abrir veinte cajas más. Incluso contratar a los mejores cajeros del mundo.

La cola seguirá existiendo.

Hemos mejorado las piezas sin tocar la restricción que determina el rendimiento del conjunto.

En software ocurre constantemente. Añadimos workers a sistemas bloqueados por una base de datos compartida. Escalamos servicios cuyo cuello de botella está en una dependencia síncrona. Introducimos cachés para compensar decisiones de diseño que nadie quiere revisar.

A veces esas optimizaciones son suficientes. Otras veces solo retrasan el momento en que tendremos que enfrentarnos al problema original.

Meadows también presta especial atención a los bucles de retroalimentación.

Un sistema necesita información sobre las consecuencias de sus acciones para poder corregirse. Y necesita recibirla a tiempo.

Si la información llega demasiado tarde, las correcciones pueden ser inútiles. Si el sistema reacciona de forma exagerada, puede acabar oscilando entre un problema y otro.

Volvamos a LinkedIn.

Que una aplicación aparezca como saludable no sirve de mucho si esa señal no permite saber si realmente está ejecutando la versión esperada.

La observabilidad no consiste únicamente en tener más métricas. Consiste en disponer de información que permita tomar decisiones correctas.

## ¿Y qué tiene que ver esto con los agentes de IA?

Bastante, creo.

Estamos viviendo una carrera por construir modelos cada vez más capaces. Y las mejoras son reales: razonan mejor, escriben mejor código y pueden resolver tareas que hace poco parecían fuera de su alcance.

Pero un agente no es solo un modelo.

Es también el sistema que decide cuándo ejecutarlo, qué contexto recibe, qué herramientas puede utilizar, cómo conserva el estado, cómo comprueba los resultados y qué ocurre cuando algo falla.

Imaginemos un agente encargado de modificar código.

Recibe una tarea, genera cambios, ejecuta pruebas y abre una pull request.

Ahora añadamos otros diez agentes trabajando sobre el mismo repositorio.

De repente aparecen preguntas que no tienen demasiado que ver con la inteligencia del modelo:

¿Quién controla los cambios concurrentes? ¿Qué ocurre cuando dos agentes modifican el mismo archivo? ¿Cómo sabemos que una tarea está realmente terminada? ¿Quién decide cuándo reintentar una operación? ¿Cómo evitamos que un fallo se propague a otros agentes?

Podemos utilizar un modelo más potente. Probablemente cometerá menos errores en determinadas tareas.

Pero seguirá necesitando respuestas a esas preguntas.

Y aquí encuentro especialmente interesante el paralelismo con LinkedIn.

Si cada tarea depende de un estado global compartido, si los fallos no están aislados y si nuestras señales de éxito no reflejan lo que realmente ha ocurrido, tenemos un problema de arquitectura.

No de inteligencia.

Anthropic, en su artículo [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), describe cómo algunas de las implementaciones más exitosas que ha observado utilizan patrones relativamente simples y componibles, en lugar de grandes frameworks.

No significa que la simplicidad siempre gane ni que un modelo mejor no pueda compensar ciertas limitaciones. Significa que la arquitectura sigue importando, incluso cuando el componente central es extraordinariamente capaz.

## Antes de cambiar el modelo, miraría el sistema

Cuando un sistema de agentes empieza a comportarse de manera impredecible, me interesan especialmente cuatro cuestiones.

**El aislamiento.** ¿Puede una tarea fallar sin arrastrar a las demás?

**El estado.** ¿Qué información se comparte realmente y quién es responsable de mantenerla consistente?

**La retroalimentación.** ¿Cómo sabe el sistema que una acción ha producido el resultado esperado? ¿Puede distinguir entre haber ejecutado una herramienta y haber completado correctamente una tarea?

**La recuperación.** ¿Qué ocurre después de un fallo? ¿Reintentamos sin más o sabemos por qué falló y qué ha cambiado antes de volver a intentarlo?

Son preguntas bastante menos atractivas que elegir entre los últimos modelos disponibles.

También son las que suelen determinar si algo funciona bien en una demostración o puede mantenerse en producción.

No creo que la lección de LinkedIn sea que debamos construir nuestros propios motores de despliegue, ni que haya que evitar los frameworks de agentes.

La lección que me interesa es otra.

Antes de optimizar un componente, conviene entender qué parte del comportamiento del sistema depende realmente de él.

Porque a veces necesitamos una pieza mejor.

Y otras veces llevamos meses perfeccionando una pieza que nunca fue el problema.

## Referencias y lecturas recomendadas

- **How we scale deployments with a custom GitOps engine**, Ramesh G. Iyer, LinkedIn Engineering, 2 de noviembre de 2026. <https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine>. Fuente de las cifras y del rediseño de LinkedIn. Es el relato de una empresa sobre su propio sistema.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Los puntos de intervención en un sistema y el papel de la retroalimentación y los retrasos.
- **Building effective agents**, Anthropic Engineering, 19 de diciembre de 2024. <https://www.anthropic.com/engineering/building-effective-agents>. La observación sobre patrones simples y componibles en las implementaciones de agentes.
