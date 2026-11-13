---
title: "Cuando el fallo está en la forma, no en la pieza"
description: "LinkedIn sustituyó Argo CD en sus despliegues a gran escala por un diseño de otra forma, no por una pieza mejor. Donella Meadows lo llamaría una historia de estructura, y quizá también diga algo sobre la IA agéntica."
date: 2026-11-13
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Systems Thinking", "Platform Engineering", "Agentic AI", "Architecture"]
lang: es
translationOf: sometimes-the-problem-isnt-the-component
draft: true
---

Cuando un sistema se porta mal, culpamos a una pieza: se cambia la herramienta, se ajusta el parámetro, se actualiza el modelo. Las piezas son muy populares por una razón de peso: se pueden comprar. Y a veces hasta funciona. La plataforma de despliegues de LinkedIn es un caso documentado en el que no bastó, y el motivo quizá interese también, con más cautela, a quien construya agentes de IA.

## Con qué tropezó LinkedIn y qué construyó en su lugar

En noviembre de 2026, Ramesh G. Iyer, ingeniero de LinkedIn, explicó [cómo escala la empresa sus despliegues con un motor GitOps propio](https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine). Las cifras son de la propia LinkedIn: más de 250 clústeres de Kubernetes, más de 4000 servicios y más de 100.000 despliegues por semana. Argo CD, escriben, les dio «una base para incorporar 4000 servicios», y todavía gestiona los complementos de los clústeres y los servicios de sistema. Para desplegar aplicaciones a esta escala, en cambio, lo sustituyeron.

Es el relato de una empresa sobre su propio sistema, no una evaluación independiente de Argo CD. Aun así, los problemas que enumera son más de estructura que de defectos:

- **Estado compartido.** En una prueba de escala, la sincronización tardaba menos de 3 minutos en clústeres con 60.000 pods y más de 10 en clústeres con más de 80.000.
- **Señales de estado insuficientes.** Que una aplicación figurase como `Synced` y `Healthy` no bastaba para confirmar que se había desplegado la revisión prevista, así que LinkedIn añadió sus propias comprobaciones.
- **Cambios acoplados.** Modificar el esquema de un CRD obligaba a reiniciar los controladores de Argo CD en toda la flota antes de que se aceptaran los atributos nuevos.

LinkedIn cambió, por tanto, la forma y no la pieza: una biblioteca en lugar de un controlador, cada despliegue ejecutado «en su propio pod efímero» y ningún estado de controlador compartido entre aplicaciones.

Si se compara el mismo mes con un año de diferencia, LinkedIn informa de que el volumen de despliegues se multiplicó por 3,7, de que los fallos de la infraestructura de despliegue bajaron de 925 a 63 y de que la mediana del tiempo necesario para detectar y dar por cerrado un despliegue fallido pasó de 16,1 a 2,45 minutos. Añade que la reducción de fallos «no puede atribuirse por completo» al nuevo motor, porque la capa de orquestación mejoró a la vez, y eso ya es más modestia de la que se permiten casi todos los blogs de ingeniería. Son mediciones de una sola organización: un caso bien documentado, no una ley general sobre las herramientas GitOps.

## Meadows pone los mandos al fondo de la lista

En [*Leverage Points: Places to Intervene in a System*](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), Donella Meadows enumera doce lugares donde intervenir en un sistema, ordenados más o menos de menor a mayor efecto. Abajo del todo están las «constantes, parámetros, números». Más arriba aparecen «la fuerza de los bucles de retroalimentación negativa…», «la estructura de los flujos de información (quién tiene acceso a la información y quién no)» y «las reglas del sistema». Escribe también que «la falta de retroalimentación es una de las causas más comunes del mal funcionamiento de un sistema» y que «los retrasos en los bucles de retroalimentación son determinantes críticos del comportamiento del sistema»: si son demasiado cortos, el sistema reacciona de más, y si son demasiado largos, oscila.

Hasta donde sé, la lista es un marco conceptual y no una clasificación validada empíricamente, así que la uso como lente, no como prueba.

Vista con esa lente, y la lectura es mía, afinar instancias de Argo CD parece trabajo sobre parámetros, mientras que aislar cada despliegue y disponer de señales fiables de estado y de deriva parecen cambios en la estructura y en los flujos de información. Si afinas una máquina cuyo problema es la forma, obtienes un problema muy bien afinado. LinkedIn no usa los términos de Meadows, y quizá yo empareje los suyos con los de ella con demasiada pulcritud, pero sí llama a su detección más rápida de fallos «bucles de retroalimentación más cortos», lo que al menos cuadra.

## ¿Salvará un modelo más listo a un agente mal construido?

Aquí el terreno es más blando. No conozco ninguna investigación que demuestre que los modelos más inteligentes no arreglan una mala arquitectura, ni digo que exista. Lo más cercano dice bastante menos: Anthropic, que también vende modelos, [cuenta](https://www.anthropic.com/engineering/building-effective-agents) que, entre las implementaciones de clientes que ha visto, «las implementaciones de más éxito no usaban marcos complejos ni bibliotecas especializadas», sino «patrones simples y componibles». Es la observación de un proveedor sobre diseño, no una comparación entre la potencia del modelo y la arquitectura.

Así que lo planteo como hipótesis y nada más: si un sistema de agentes descansa sobre límites poco claros, estado mutable compartido y señales de estado capaces de decir «hecho» cuando algo no lo está, poner en el mismo sitio un modelo más capaz quizá no elimine esos problemas, porque viven en la estructura que rodea al modelo. Un piloto mejor no arregla un indicador de combustible que miente. El caso de LinkedIn muestra el mismo patrón en otro terreno, y esa analogía es mía, no algo que demuestre ninguna de las dos fuentes.

## Antes de comprar una pieza más lista

Lo que sigue es valoración mía, no un resultado demostrado. Donde las pruebas escasean, yo miraría la estructura antes de cambiar el componente:

1. **Límites claros.** Cada unidad de trabajo, sea un despliegue o una tarea de un agente, responde de su alcance y de sus fallos.
2. **Menos acoplamiento.** Nada de estado compartido por el que el ajetreo de una carga de trabajo se convierta en la latencia de otra.
3. **Bucles de retroalimentación controlados.** Lo bastante rápidos para corregir y lo bastante acotados para no amplificar nada. Lo que dice Meadows sobre los retrasos vale igual para los reintentos, la reconciliación y la autocorrección.
4. **Observabilidad de extremo a extremo.** Debería poder preguntar «¿qué tenía que pasar, qué pasó y por qué?» y recibir una respuesta de la que fiarme.

Estoy menos seguro de que esto valga para los agentes que para las plataformas de despliegue, y me gustaría ver pruebas en un sentido o en otro. Hasta que lleguen, casi todos seguiremos echando mano de los mandos, que tienen el gran mérito de estar a mano.

## Referencias y lecturas recomendadas

- **How we scale deployments with a custom GitOps engine**, Ramesh G. Iyer, LinkedIn Engineering, 2 de noviembre de 2026. <https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine>. Fuente de todas las cifras y citas de LinkedIn. Es el relato de una empresa sobre su propio sistema.
- **Leverage Points: Places to Intervene in a System**, Donella Meadows, Donella Meadows Project (página sin fecha). <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. Fuente de los puntos de apalancamiento citados y de lo que se dice sobre la falta de retroalimentación y los retrasos.
- **Building effective agents**, Anthropic Engineering, 19 de diciembre de 2024. <https://www.anthropic.com/engineering/building-effective-agents>. Respalda solo la observación de que las implementaciones de éxito usaban patrones simples y componibles. No compara la capacidad del modelo con la arquitectura.

Las citas de textos en inglés son traducción propia.
