---
title: "Tu roadmap ya ha decidido"
description: "El descubrimiento continuo de Teresa Torres, puesto a prueba en un equipo de plataforma que entrevista a usuarios el viernes y ya se ha comprometido con lo que construye el lunes."
date: 2026-11-20
editorialDate: 2026-10-19
series: break-and-change
book:
  title: "Continuous Discovery Habits"
  author: "Teresa Torres"
  year: 2021
  category: "Product & Customer Discovery"
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Product Discovery", "Continuous Discovery", "Opportunity Solution Tree", "Assumption Testing", "Platform Teams"]
lang: es
translationOf: your-roadmap-has-already-decided
draft: false
---

El equipo tiene seis entrevistas el viernes. El lunes empieza a construir una alerta de despliegue. ¿Qué tendría que decir un usuario el viernes para que el equipo cambiara el plan del lunes?

En este ejemplo inventado, un ingeniero pidió una alerta porque un despliegue pasó toda la tarde pendiente de aprobación. La petición ya tiene prioridad y estimación. Llegado el viernes, las únicas personas que pueden sacar la alerta del roadmap son las que la metieron. Los demás pueden opinar sobre dónde poner la campanita.

No he tenido acceso al libro completo, así que lo que sigue se basa en las explicaciones públicas de Teresa Torres sobre *Continuous Discovery Habits*, empezando por [su presentación del libro](https://www.producttalk.org/continuous-discovery-habits/).

## 1. Ideas clave — BREAK

Torres parte del cambio que quiere conseguir el equipo. Para el equipo de plataforma, podría ser reducir el tiempo que un cambio rutinario pasa pendiente de aprobación. Una alerta es una forma de intentarlo. La distinción empieza a importar en cuanto resulta que el ingeniero que la pidió tiene un buen motivo para dejarla sin leer. [Torres sobre resultados, oportunidades y soluciones](https://www.producttalk.org/getting-started-with-discovery/)

Torres propone que quienes construyen el producto mantengan al menos un contacto semanal con los clientes, con pequeñas actividades de investigación ligadas al resultado que buscan. El núcleo del equipo que describe reúne a producto, diseño e ingeniería. En una conversación sobre una tarde perdida, alguien de ingeniería puede darse cuenta de que el sistema solo registra el evento que dispararía la alerta cuando el revisor abre la solicitud. Si esa persona se incorpora más tarde para estimar el trabajo, puede encontrarse con una especificación muy detallada para enviar el aviso tarde. [Torres sobre el descubrimiento continuo](https://www.producttalk.org/getting-started-with-discovery/)

Otro giro consiste en tomarse la petición lo bastante en serio como para preguntar por la última vez que habría servido de algo. ¿En qué punto estaba el cambio a las dos de la tarde? ¿Qué le faltaba al revisor? ¿Qué hizo después la persona que esperaba la aprobación? Torres recurre a entrevistas sobre experiencias concretas para descubrir necesidades sin cubrir. En nuestro ejemplo, puede que el revisor cuente que abrió tres herramientas para encontrar los resultados de las pruebas. El equipo ya tiene una necesidad que puede investigar por separado. [Torres sobre las entrevistas centradas en casos concretos](https://www.producttalk.org/discovering-solutions/)

El árbol de oportunidades y soluciones sitúa arriba el resultado que se busca. Debajo van las necesidades y, bajo cada una, las posibles soluciones. [Torres sobre el árbol de oportunidades](https://www.producttalk.org/getting-started-with-discovery/) Si a los revisores les cuesta encontrar los resultados de las pruebas, el equipo podría adjuntar un resumen a la solicitud que ya existe o enlazar directamente a la ejecución correspondiente. Si a menudo se les pasan solicitudes que ya podrían revisar, la alerta se gana un sitio en esa rama. El árbol obliga a la idea favorita a competir por un trabajo concreto. [Torres sobre cómo priorizar oportunidades](https://www.producttalk.org/cdh-book-club-june-2026/)

La idea más incómoda viene después. Antes de construir una solución, pregúntate qué tendría que ser cierto para que funcionara y busca una forma de comprobar si te equivocas. [Torres sobre los supuestos](https://www.producttalk.org/discovering-solutions/) Una alerta presupone que hay un momento en el que merece la pena interrumpir a alguien. El equipo puede reconstruir un despliegue real y comprobar qué habría podido hacer el revisor en ese momento. Torres propone poner a prueba supuestos de varias soluciones candidatas y acordar de antemano qué resultado serviría para decidir. [Torres sobre las pruebas de supuestos](https://www.producttalk.org/ch-10-testing-assumptions/)

## 2. Lo que sigue importando hoy — CHANGE

Dale a la investigación del viernes una decisión sobre la que pueda influir. Supongamos que el equipo acuerda volver a decidir si construye la alerta o incorpora a la solicitud de aprobación la información que falta. Puede reconstruir varios despliegues recientes con quienes envían los cambios y quienes los revisan. En cada caso, apunta cuándo se enteró el revisor, cuándo tuvo a su alcance la información necesaria y cuándo pudo actuar.

Si el revisor se enteró pronto y la información llegó tarde, el equipo puede preparar el resumen a mano y pedirle que lo use con un caso pasado. ¿Puede llegar a la misma decisión y detectar que falta una comprobación? Si se enteró tarde y todo lo demás estaba listo, prueba a enviar el aviso a mano en unos pocos cambios rutinarios. Comprueba si llega cuando el revisor aún puede hacer algo útil. Cada prueba abre un plan distinto para el lunes.

Deja por escrito también qué hará el equipo si el resultado es ambiguo. Al comparar dos o tres casos, quizá descubras que cada equipo se atasca por un motivo distinto. Eso sería una buena razón para acotar la siguiente prueba. Como base para configurar las notificaciones de toda la empresa, sería un poco justo.

## 3. Por qué seguimos equivocándonos — EXPERIENCE

En una entrevista publicada por Torres, Jenn Atkins, diseñadora en Snagajob, cuenta que hablaba con clientes y dedicaba ocho horas a preparar informes que nadie leía. Los problemas que salían en esas conversaciones no encajaban con lo que les habían encargado construir. Más adelante explica que pasó a contribuir a unos objetivos que se definían a partir de lo que el equipo descubría. Es el testimonio de una participante de un equipo al que Torres asesoró, y permite ver cómo cambiaron las decisiones en las que Jenn podía intervenir. [Caso publicado por Torres](https://www.producttalk.org/continuous-discovery-case-study/)

Imagina que intentamos arreglar la primera parte de la historia de Jenn programando más entrevistas. Ahora el equipo puede hacer dos informes en el tiempo que antes dedicaba a uno. Los dos pueden pasar el trimestre en la misma carpeta. En esa situación, la pregunta útil es quién puede reabrir una decisión sobre una funcionalidad ya comprometida y qué tendría que ver para hacerlo.

## 4. Los puntos ciegos del libro — CHALLENGE

El método plantea una pregunta sobre qué experiencias llegan al árbol. En el ejemplo de los despliegues, quizá resulte más fácil hablar con quienes envían cambios a diario. Alguien que contribuye de vez en cuando puede tener un problema distinto, como averiguar quién puede aprobar el cambio. Lleva la cuenta de con qué perfiles has hablado y qué casos has visto antes de decidir hasta dónde puedes generalizar lo que has encontrado.

Otro límite es la distancia entre una prueba pequeña y el resultado que justifica el trabajo. Un revisor puede usar bien un resumen hecho a mano al repasar un caso pasado. Aún queda por ver qué ocurre con los tiempos de aprobación cuando los resúmenes llegan durante una semana normal. Hasta en un experimento con instrumentación puedes sacar una conclusión equivocada si interpretas mal una métrica, como muestran investigadores de Microsoft con ejemplos de sus propios experimentos. En nuestro caso, la gente podría abrir la alerta enseguida y tardar lo mismo en aprobar. Si querías cambiar lo que pasa en la cola de aprobación, mide qué ocurre en la cola. [Dmitriev y sus coautores sobre la interpretación de métricas](https://www.microsoft.com/en-us/research/publication/a-dirty-dozen-twelve-common-metric-interpretation-pitfalls-in-online-controlled-experiments/)

## 5. Mi valoración — QUESTION

La idea más potente de Torres es que el equipo adquiera un compromiso lo bastante concreto para orientar el trabajo y con margen para cambiar de solución. Sirve tanto si haces un producto que tus clientes compran como si haces una herramienta interna que tienen que usar. Quienes hacen el trabajo pueden volver con un motivo para dedicar la próxima semana a otra cosa, mientras la decisión aún está a su alcance.

Antes de reservar las entrevistas del viernes, preguntaría una cosa. Si un revisor te enseña por qué la alerta llegaría demasiado tarde, ¿quién puede sacarla del plan del lunes?

## Referencias y lecturas recomendadas

- [*Continuous Discovery Habits* (the Book) is Finally Here!](https://www.producttalk.org/continuous-discovery-habits/), Teresa Torres, 2021. Anuncio del libro y visión general de la autora.
- [Everyone Can Do Continuous Discovery—Even You! Here’s How](https://www.producttalk.org/getting-started-with-discovery/), Teresa Torres, 2023. Definición, frecuencia y obstáculos para adoptar el método.
- [Discovering Solutions](https://www.producttalk.org/discovering-solutions/), Teresa Torres, 2022. Entrevistas sobre experiencias concretas y función de las pruebas de supuestos.
- [Ch. 7: Prioritizing Opportunities, Not Solutions](https://www.producttalk.org/cdh-book-club-june-2026/), Teresa Torres, 2026. Guía de lectura sobre cómo elegir qué necesidades atender.
- [Ch. 10: Testing Assumptions](https://www.producttalk.org/ch-10-testing-assumptions/), Teresa Torres, 2026. Guía de lectura sobre cómo comparar ideas y fijar criterios para las pruebas.
- [What a Good Continuous Discovery Team Looks Like](https://www.producttalk.org/continuous-discovery-case-study/), Teresa Torres, 2018. Testimonios de un equipo al que asesoró.
- [A Dirty Dozen: Twelve Common Metric Interpretation Pitfalls in Online Controlled Experiments](https://www.microsoft.com/en-us/research/publication/a-dirty-dozen-twelve-common-metric-interpretation-pitfalls-in-online-controlled-experiments/), Pavel Dmitriev, Somit Gupta, Dong Woo Kim y Garnet Vaz, 2017. Ejemplos de métricas mal interpretadas en experimentos de Microsoft.
