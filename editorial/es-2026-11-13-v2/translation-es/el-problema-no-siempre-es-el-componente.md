---
title: "A veces el problema no es el componente, sino el sistema"
description: "LinkedIn sustituyó Argo CD en sus despliegues a gran escala. Donella Meadows lo vería como una historia de estructura, y quizá diga algo también sobre la IA agéntica."
date: 2026-11-13
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Systems Thinking", "Platform Engineering", "Agentic AI", "Architecture"]
lang: es
translationOf: sometimes-the-problem-isnt-the-component
draft: true
---

Cuando un sistema se porta mal, lo primero que solemos tocar es el componente: cambiamos de herramienta, ajustamos un parámetro, pasamos a un modelo mejor. A veces es lo que toca. Aquí me detengo en un caso documentado en el que no bastó, en un marco que ayuda a pensar por qué y, ya con más cautela, en lo que todo ello podría significar para la IA agéntica.

Una advertencia sobre el método: separo **lo que documentan las fuentes**, **mi interpretación** y **mi propia valoración**, y en cada caso digo de cuál se trata.

## Lo que contó LinkedIn

En noviembre de 2026, el ingeniero de LinkedIn Ramesh G. Iyer explicó [cómo escala la empresa sus despliegues con un motor GitOps propio](https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine). Según los datos de la propia LinkedIn, hablamos de más de 250 clústeres de Kubernetes, más de 4000 servicios y más de 100.000 despliegues a la semana. Argo CD, escriben, les dio «una base para incorporar 4000 servicios», y lo siguen usando para los complementos de los clústeres y los servicios del sistema. Pero para desplegar aplicaciones a esa escala acabaron sustituyéndolo.

El artículo es un caso de estudio sobre el sistema de la propia LinkedIn, no una evaluación independiente de Argo CD. Dentro de ese límite, los problemas que enumera tienen que ver más con la estructura que con defectos:

- **Estado compartido.** En una de las pruebas de escala de LinkedIn, la sincronización tardaba menos de 3 minutos en clústeres con 60.000 pods, y más de 10 cuando pasaban de 80.000.
- **Señales de estado insuficientes.** Que una aplicación figurase como `Synced` y `Healthy` no bastaba, por sí solo, para confirmar que se había desplegado la revisión prevista, así que LinkedIn tuvo que añadir sus propias comprobaciones.
- **Cambios acoplados.** Modificar el esquema de un CRD obligaba a reiniciar los controladores de Argo CD en toda la flota antes de que se aceptaran los atributos nuevos.

La respuesta de LinkedIn tuvo otra forma: una biblioteca en lugar de un controlador, en la que cada despliegue se ejecuta «en su propio pod efímero» y ninguna aplicación comparte estado de controlador con otra.

Para medir los resultados comparan el mismo mes con un año de distancia. En ese tiempo, el volumen de despliegues se multiplicó por 3,7, los fallos de infraestructura de despliegue bajaron de 925 a 63 y la mediana del tiempo necesario para detectar y dar por cerrado un despliegue fallido pasó de 16,1 a 2,45 minutos. LinkedIn tiene la prudencia de añadir que la reducción de fallos «no puede atribuirse por completo» al nuevo motor, porque la capa de orquestación mejoró a la vez. Son mediciones de una sola organización, y yo las leería como un caso bien documentado, no como una ley general sobre las herramientas GitOps.

## Un marco para entender el porqué

En [*Leverage Points: Places to Intervene in a System*](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Donella Meadows enumera doce lugares en los que se puede intervenir en un sistema, ordenados más o menos de menor a mayor efecto. Abajo del todo están las «constantes, parámetros, números». Más arriba aparecen «la fuerza de los bucles de retroalimentación negativa…», «la estructura de los flujos de información (quién tiene acceso a la información y quién no)» y «las reglas del sistema». Meadows escribe también que «la falta de retroalimentación es una de las causas más comunes del mal funcionamiento de los sistemas» y que «los retrasos en los bucles de retroalimentación son determinantes críticos del comportamiento del sistema»: si son demasiado cortos provocan reacciones desmedidas, y si son demasiado largos, oscilaciones.

Hasta donde alcanzo a ver, la lista es un marco conceptual y no una clasificación validada empíricamente, de modo que la uso como lente y no como prueba.

**Mi interpretación.** Mirado a través de esa lente, afinar las instancias de Argo CD parece trabajo sobre parámetros, mientras que aislar cada despliegue y disponer de señales fiables de estado y de deriva (*drift*) parecen cambios en la estructura y en los flujos de información. LinkedIn no describe su trabajo con el vocabulario de Meadows, y puede que yo esté haciendo encajar una cosa en la otra con demasiada facilidad. Conviene señalar, eso sí, que la propia LinkedIn presenta la detección más rápida de fallos como «bucles de retroalimentación más cortos», lo que al menos casa con la lente.

## Agentes: una hipótesis, no un hallazgo

Aquí quiero ir con más cuidado, porque no tengo pruebas para la versión fuerte de esta idea. No conozco ninguna investigación que demuestre que los modelos más inteligentes no logran arreglar una mala arquitectura, y no afirmo que exista.

Lo que sí puedo señalar es algo más acotado. Anthropic, que también vende modelos, [cuenta que](https://www.anthropic.com/engineering/building-effective-agents), entre las implementaciones de clientes que ha visto, «las implementaciones de más éxito no usaban marcos complejos ni bibliotecas especializadas», sino «patrones simples y componibles». Es la observación de un proveedor sobre diseño, no una comparación entre la potencia del modelo y la arquitectura.

**Mi interpretación, a modo de hipótesis.** Si un sistema de agentes descansa sobre límites poco claros, estado mutable compartido y señales de estado capaces de decir «hecho» cuando algo no lo está, colocar en ese mismo sitio un modelo más capaz quizá no haga desaparecer esos problemas, porque viven en la estructura que rodea al modelo. El caso de LinkedIn muestra el mismo patrón en otro terreno. La analogía es mía, y ninguna de las dos fuentes la demuestra.

## Qué probaría a cambiar

Lo que sigue es **mi valoración**, no un resultado demostrado. Allí donde las pruebas escasean, miraría la estructura antes de cambiar el componente:

1. **Límites claros.** Cada unidad de trabajo, sea un despliegue o la tarea de un agente, responde de su propio alcance y de sus propios fallos.
2. **Menos acoplamiento.** Nada de estado compartido a través del cual el ajetreo de una carga de trabajo acabe convertido en latencia para otra.
3. **Bucles de retroalimentación bajo control.** Una retroalimentación lo bastante rápida para corregir y lo bastante acotada para no amplificarse. Lo que dice Meadows sobre los retrasos vale igual para los reintentos, la reconciliación y la autocorrección.
4. **Observabilidad de extremo a extremo.** Debería poder preguntar «¿qué tenía que pasar, qué pasó y por qué?» y recibir una respuesta de la que fiarme.

Tengo menos claro que esto sirva para los agentes tanto como para las plataformas de despliegue, y me gustaría ver pruebas, en un sentido o en otro.

## Referencias y lecturas recomendadas

- **How we scale deployments with a custom GitOps engine**, Ramesh G. Iyer, LinkedIn Engineering, 2 de noviembre de 2026. <https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine>. Fuente de todas las cifras y citas de LinkedIn de este artículo. Es el relato de una empresa sobre su propio sistema.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project (página sin fecha). <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de los puntos de apalancamiento citados y de lo que se dice sobre la falta de retroalimentación y los retrasos.
- **Building effective agents**, Anthropic Engineering, 19 de diciembre de 2024. <https://www.anthropic.com/engineering/building-effective-agents>. Solo respalda la observación de que las implementaciones con éxito usaban patrones simples y componibles. No compara la capacidad del modelo con la arquitectura.

Las citas de textos en inglés son traducción propia.
