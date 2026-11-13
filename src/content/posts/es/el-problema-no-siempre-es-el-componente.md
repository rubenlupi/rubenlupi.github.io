---
title: "A veces el problema no es el componente. Es el sistema."
description: "LinkedIn sustituyó Argo CD en sus despliegues a gran escala. Donella Meadows lo llamaría una historia sobre estructura, y quizá diga algo también sobre la IA agéntica."
date: 2026-11-13
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Systems Thinking", "Platform Engineering", "Agentic AI", "Architecture"]
lang: es
translationOf: sometimes-the-problem-isnt-the-component
draft: false
---

Cuando un sistema se comporta mal, solemos ir a por el componente: cambiar la herramienta, ajustar el parámetro, actualizar el modelo. A veces es lo correcto. Este artículo examina un caso documentado en el que no bastó, un marco para pensar por qué y, de forma más tentativa, lo que eso podría significar para la IA agéntica.

Una nota sobre el método. Separo **lo que documentan las fuentes** de **mi interpretación** y de **mi propia valoración**, y digo en cada momento cuál es cuál.

## Lo que documentó LinkedIn

En noviembre de 2026, Ramesh G. Iyer, ingeniero de LinkedIn, describió [cómo LinkedIn escala sus despliegues con un motor GitOps propio](https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine). La escala, según informa LinkedIn: más de 250 clústeres de Kubernetes, más de 4000 servicios y más de 100.000 despliegues a la semana. Argo CD, escriben, les dio «una base para incorporar 4000 servicios», y se sigue usando para complementos de clúster y servicios del sistema. Sin embargo, para los despliegues de aplicaciones a esta escala lo sustituyeron.

El artículo es un estudio de caso del propio sistema de LinkedIn, no una evaluación independiente de Argo CD. Dentro de ese límite, los problemas que enumera tienen que ver sobre todo con la estructura, más que con defectos:

- **Estado compartido.** En una de las pruebas de escala de LinkedIn, el tiempo de sincronización en clústeres con 60.000 pods fue inferior a 3 minutos, y superior a 10 minutos con más de 80.000 pods.
- **Señales de estado débiles.** Un estado `Synced` y `Healthy` no bastaba por sí solo para confirmar que se había desplegado la revisión prevista, así que LinkedIn tuvo que añadir sus propias comprobaciones.
- **Cambio acoplado.** Un cambio en el esquema de una CRD exigía reiniciar los controladores de Argo CD en toda la flota antes de que se aceptaran los nuevos atributos.

La respuesta de LinkedIn fue una forma distinta: una biblioteca en lugar de un controlador, con cada despliegue ejecutado «en su propio pod efímero» y sin estado de controlador compartido entre aplicaciones.

Los resultados que comunican comparan el mismo mes con un año de diferencia: el volumen de despliegues se multiplicó por 3,7, los fallos de infraestructura de despliegue bajaron de 925 a 63, y la mediana del tiempo para detectar y dar por concluido un despliegue fallido bajó de 16,1 a 2,45 minutos. LinkedIn se cuida de añadir que la reducción de fallos «no puede atribuirse por completo» al nuevo motor, ya que la capa de orquestación mejoró al mismo tiempo. Son mediciones de una sola organización, y yo las leería como un caso bien documentado, no como una ley general sobre las herramientas GitOps.

## Un marco para el «porqué»

En [*Leverage Points: Places to Intervene in a System*](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Donella Meadows enumera doce lugares donde intervenir en un sistema, aproximadamente en orden creciente de efecto. En el extremo bajo están «Constantes, parámetros, números». Más arriba están «La fuerza de los bucles de retroalimentación negativa…», «La estructura de los flujos de información (quién tiene y quién no tiene acceso a la información)» y «Las reglas del sistema». También escribe que «La retroalimentación ausente es una de las causas más comunes de mal funcionamiento de un sistema» y que «Los retrasos en los bucles de retroalimentación son determinantes críticos del comportamiento del sistema», de modo que los retrasos demasiado cortos provocan una reacción excesiva y los demasiado largos provocan oscilaciones.

Hasta donde alcanzo a ver, la lista es un marco conceptual y no una clasificación validada empíricamente, así que la trato como una lente y no como una prueba.

**Mi interpretación.** Vista con esa lente, ajustar las instancias de Argo CD parece un trabajo sobre parámetros, mientras que el aislamiento por despliegue y las señales fiables de estado y de desviación parecen cambios en la estructura y en el flujo de información. LinkedIn no describe su trabajo en los términos de Meadows, y quizá esté haciendo encajar una cosa en la otra con demasiada pulcritud. Cabe señalar que LinkedIn presenta la detección más rápida de fallos como «bucles de retroalimentación más cortos», lo que al menos encaja con la lente.

## Agentes: una hipótesis, no un hallazgo

Quiero ser más cuidadoso aquí, porque no tengo pruebas de la versión fuerte de esta afirmación. No conozco ninguna investigación que muestre que los modelos más inteligentes no corrigen una mala arquitectura, y no afirmo que exista.

Lo que puedo señalar es más acotado. Anthropic, que también vende modelos, [informa de que](https://www.anthropic.com/engineering/building-effective-agents), en las implementaciones de clientes que vio, «las implementaciones más exitosas no usaban frameworks complejos ni bibliotecas especializadas» y empleaban en cambio «patrones simples y componibles». Es la observación de un proveedor sobre el diseño, no una comparación entre la potencia del modelo y la arquitectura.

**Mi interpretación, como hipótesis.** Si un sistema de agentes se construye sobre límites poco claros, estado mutable compartido y señales de estado que pueden decir «hecho» cuando no lo está, un modelo más capaz en el mismo lugar quizá no elimine esos problemas, porque viven en la estructura que rodea al modelo. El caso de LinkedIn es el mismo patrón en otro dominio, y la analogía es mía, no algo que demuestre ninguna de las dos fuentes.

## Qué intentaría cambiar

**Mi valoración**, no un resultado demostrado. Donde la evidencia es escasa, miraría la estructura antes de cambiar el componente:

1. **Límites claros.** Cada unidad de trabajo, un despliegue o una tarea de un agente, es dueña de su alcance y de su fallo.
2. **Menos acoplamiento.** Ningún estado compartido a través del cual la agitación de una carga de trabajo se convierta en la latencia de otra.
3. **Bucles de retroalimentación controlados.** Retroalimentación lo bastante rápida para corregir y acotada para que no pueda amplificarse. La observación de Meadows sobre los retrasos se aplica por igual a los reintentos, la reconciliación y la autocorrección.
4. **Observabilidad de extremo a extremo.** Debería poder preguntar «¿qué se suponía que iba a pasar, qué pasó y por qué?» y obtener una respuesta en la que confíe.

Estoy menos seguro de hasta qué punto esto se traslada a los agentes que a las plataformas de despliegue, y me gustaría ver evidencia en un sentido o en otro.

## Referencias y lecturas recomendadas

- **How we scale deployments with a custom GitOps engine**, Ramesh G. Iyer, LinkedIn Engineering, 2 de noviembre de 2026. <https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine>. Fuente de todas las cifras y citas de LinkedIn anteriores. El relato de una empresa sobre su propio sistema.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project (página sin fecha). <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de los puntos de apalancamiento citados y de las afirmaciones sobre la retroalimentación ausente y los retrasos.
- **Building effective agents**, Anthropic Engineering, 19 de diciembre de 2024. <https://www.anthropic.com/engineering/building-effective-agents>. Apoya únicamente la observación de que las implementaciones exitosas usaron patrones simples y componibles. No aborda la capacidad del modelo frente a la arquitectura.

Las citas de textos en inglés son traducción propia.
