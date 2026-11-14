---
title: "Somos expertos en mejorar cosas que nunca deberíamos haber construido."
description: "El cierre de la serie sobre Thinking in Systems: por qué optimizar componentes y parámetros no basta cuando las reglas, los objetivos y los modelos mentales mantienen vivo el problema equivocado."
date: 2026-11-13
editorialDate: 2026-10-26
series: break-and-change
seriesPart:
  title: "Los sistemas que construimos, los sistemas que habitamos"
  slug: systems-we-build
  number: 5
  total: 5
  stage: "QUESTION"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "Software Engineering", "Learning & Education"]
tags: ["Systems Thinking", "Leverage Points", "Organizational Design", "Platform Engineering", "Mental Models"]
lang: es
translationOf: systems-we-build-5-what-are-we-building
draft: false
---

A las nueve de la mañana, el equipo de plataforma se reúne para resolver un problema que lleva meses persiguiéndolo.

Los despliegues son demasiado lentos.

La primera propuesta consiste en aumentar los recursos del *pipeline*. La segunda, ejecutar más pruebas en paralelo. La tercera, reducir las comprobaciones obligatorias. La cuarta, incorporar una nueva herramienta de automatización.

Todas podrían funcionar.

Pero nadie ha preguntado por qué un cambio de diez líneas necesita atravesar doce sistemas, tres equipos y cinco aprobaciones para llegar a producción.

Estamos dedicando una cantidad extraordinaria de talento a perfeccionar un proceso cuya existencia hemos dejado de cuestionar.

Y quizá esa sea una de nuestras mayores habilidades como industria: **somos expertos en mejorar cosas que nunca deberíamos haber construido**.

No significa que todo sistema complejo sea innecesario ni que podamos borrar años de decisiones con una pregunta ingeniosa. Significa que, cuando algo funciona mal, solemos buscar primero cómo hacerlo funcionar mejor. Mucho después nos preguntamos por qué funciona de esa manera, quién decidió que debía hacerlo así y qué objetivo está sirviendo realmente.

Este es el último artículo de una serie sobre *Thinking in Systems*, de Donella Meadows. Los cuatro anteriores exploraron interconexiones, retroalimentación, métricas y resiliencia. Nos queda la pregunta más incómoda: **¿dónde intervenir para cambiar el comportamiento de un sistema y no simplemente sus síntomas?**

## La trampa de buscar siempre un parámetro

Una API responde lentamente. Añadimos memoria.

Un equipo entrega tarde. Ajustamos el tamaño de los sprints.

Un *pipeline* tarda veinte minutos. Duplicamos los ejecutores.

Una organización tiene problemas de coordinación. Creamos una reunión.

Son intervenciones sobre parámetros: cantidades, umbrales, frecuencias, capacidades. Muchas son útiles. Algunas resuelven el problema por completo.

Donella Meadows no sostenía que cambiar parámetros fuera inútil. En su ensayo [*Leverage Points: Places to Intervene in a System*](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) propone doce lugares donde intervenir, ordenados de forma aproximada por su potencial de transformación. Los números aparecen entre los puntos de menor influencia relativa; las reglas, los objetivos y los paradigmas, entre los más profundos.

La lista es una **heurística**, no una ley predictiva. Meadows advierte que su orden es provisional. No podemos deducir que modificar una regla siempre sea mejor que ampliar un servidor. Si la CPU está saturada por una carga legítima, añadir capacidad puede ser exactamente lo correcto.

La distinción es otra: **un parámetro cambia cuánto hacemos de algo; una intervención estructural puede cambiar qué necesitamos hacer**.

Volvamos al *pipeline*. Quizá tarda veinte minutos porque cada servicio ejecuta todas las pruebas de integración. Quizá las ejecuta porque nadie conoce con precisión las dependencias. Quizá nadie conoce esas dependencias porque los equipos se organizaron alrededor de funciones técnicas y las decisiones de arquitectura se distribuyeron sin responsabilidades claras.

Duplicar ejecutores puede reducir el tiempo de veinte a doce minutos. Es una mejora real.

Pero identificar qué cambios afectan a qué contratos, reducir el acoplamiento y rediseñar el flujo de validación podría hacer innecesaria buena parte del trabajo.

Hemos dejado de acelerar la cola. Hemos empezado a preguntar por qué existe.

## La arquitectura también es una estructura de decisiones

En ingeniería solemos dibujar cajas y flechas para representar sistemas.

Las cajas son servicios, bases de datos, colas y aplicaciones. Las flechas son llamadas, eventos y dependencias.

Pero una arquitectura también contiene decisiones: quién puede cambiar algo, qué debe coordinarse, qué información está disponible y qué errores se propagan.

Imaginemos una operación de compra que depende de ocho llamadas síncronas. Cada servicio tiene sus propios indicadores, sus despliegues y su equipo. Podemos optimizarlos individualmente. Podemos mejorar la latencia de cada llamada.

Aun así, la operación seguirá dependiendo de que todas las piezas críticas respondan en el tiempo previsto.

Si ocho dependencias fueran independientes y cada una tuviera una disponibilidad de 99,9 %, la probabilidad aproximada de que todas estuvieran disponibles sería:

0,999⁸ ≈ 99,2 %

Es un cálculo ilustrativo, no una estimación de disponibilidad real: los fallos pueden estar correlacionados, las dependencias pueden tener rutas alternativas y la definición de disponibilidad de la operación importa. Pero muestra algo relevante: **la fiabilidad de cada componente no equivale automáticamente a la fiabilidad de la experiencia completa**.

Podemos seguir elevando la disponibilidad individual de los ocho servicios. O podemos preguntarnos si la operación necesita realmente ocho dependencias críticas.

Esa pregunta altera la estructura del sistema.

Lo mismo sucede con la organización. Contratar más personas puede aumentar la capacidad de ejecución, pero no necesariamente la velocidad de un proceso que exige aprobaciones secuenciales. Si cada equipo espera al siguiente, quizá estemos añadiendo trabajo al mismo cuello de botella.

El organigrama y la arquitectura no son idénticos, pero las interacciones entre equipos condicionan lo que podemos construir. La observación original de [Melvin Conway](https://www.melconway.com/Home/Committees_Paper.html) sigue siendo útil precisamente porque nos obliga a mirar las comunicaciones, no solo los componentes.

## Cambiar la información cambia las decisiones

Entre los puntos de intervención de Meadows está la estructura de los flujos de información.

Suena menos espectacular que una nueva arquitectura, pero puede transformar un sistema.

Imaginemos un equipo que mantiene una API. Sus dashboards muestran latencia, errores y consumo de recursos. Todo está razonablemente bien.

Lo que no ve es que los usuarios abandonan la compra porque la API devuelve un estado técnicamente correcto que la interfaz interpreta de forma confusa.

El equipo puede dedicar semanas a reducir diez milisegundos de latencia sin mejorar la experiencia del cliente.

No le faltan datos. Le falta **la conexión entre sus decisiones y sus consecuencias**.

Ahora imaginemos que el equipo puede observar, junto con sus métricas técnicas, la tasa de finalización de la operación y los principales motivos de abandono. No hemos cambiado su capacidad ni contratado a nadie. Hemos cambiado lo que puede saber antes de decidir.

La intervención no garantiza una buena decisión. Pero permite formular preguntas que antes ni siquiera aparecían.

Hay un riesgo: convertir esa nueva información en otro KPI rígido y reproducir el problema del tercer artículo. Los indicadores también influyen sobre el comportamiento. Por eso importa quién los interpreta, qué contexto acompaña a los números y qué consecuencias tienen las decisiones que provocan.

Un dashboard debería ayudar a descubrir cuándo nuestro modelo del mundo es incorrecto. No limitarse a certificar que estamos cumpliendo el plan.

## Las reglas tienen más poder del que aparentan

Pensemos en una organización que afirma valorar la calidad y la sostenibilidad.

Cada trimestre, sin embargo, los equipos deben comprometer toda su capacidad a funcionalidades. El mantenimiento preventivo, la mejora de tests y la reducción de trabajo manual compiten con entregas visibles.

Cuando aparece presión, esas tareas desaparecen del plan.

Podemos organizar talleres sobre calidad. Podemos crear un comité. Podemos pedir a los ingenieros que sean más responsables.

Pero si la regla de planificación sigue premiando exclusivamente las entregas inmediatas, la organización tenderá a repetir el comportamiento.

Nelson Repenning y John Sterman estudiaron este tipo de dinámicas en [*Nobody Ever Gets Credit for Fixing Problems that Never Happened*](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf). Su trabajo describe cómo la presión por producir puede desplazar el esfuerzo de mejora, erosionar la capacidad y provocar nuevas presiones. No es una demostración universal sobre cualquier equipo: se apoya en estudios de caso y modelos de dinámica de sistemas.

Una intervención posible consiste en proteger capacidad de mejora mediante una regla explícita, en lugar de confiar en que sobreviva a las prioridades del trimestre.

Pero una regla solo es real si puede resistir el primer conflicto.

Si decimos que existe tiempo protegido y lo cancelamos cada vez que hay una fecha de entrega, no hemos cambiado el sistema. Hemos cambiado su presentación.

La diferencia entre un principio y una regla aparece cuando seguirla cuesta algo.

## Y entonces llegamos al objetivo

Las reglas son importantes, pero alguien decide para qué existen.

Una plataforma puede tener como objetivo reducir el coste por transacción.

Otra puede priorizar la disponibilidad ante fallos.

Una organización puede perseguir la máxima frecuencia de entrega.

Otra, la capacidad de aprender rápidamente qué necesitan sus usuarios.

No son objetivos necesariamente incompatibles. Pero cuando entran en conflicto, las decisiones revelan cuál domina.

Meadows coloca el propósito del sistema entre los puntos de intervención de mayor influencia. Si cambia aquello que el sistema intenta conseguir, muchas decisiones pueden cambiar sin que alguien las ordene una por una.

Pensemos en un equipo de plataforma cuyo éxito se mide por la adopción de su producto interno.

Puede dedicar recursos a convencer a otros equipos de migrar, añadir funcionalidades para ampliar su cobertura y establecer estándares que aumenten su uso.

Pero ¿qué sucede si el producto no reduce realmente el esfuerzo de los desarrolladores?

La adopción puede crecer mientras el trabajo total de la organización también crece.

Ahora cambiemos la pregunta: ¿qué queremos conseguir con la plataforma?

Quizá sea reducir el tiempo necesario para llevar un cambio seguro a producción. Quizá disminuir el trabajo cognitivo que cada equipo necesita para operar su software. Quizá permitir que los equipos resuelvan problemas de negocio sin reconstruir las mismas capacidades.

Esos propósitos no eliminan la necesidad de métricas. Exigen elegir métricas que permitan cuestionar el producto, incluida su propia existencia.

Si una plataforma no cumple su propósito, la respuesta no tiene por qué ser una nueva versión.

Puede ser simplificarla, cambiar sus límites o dejar de construirla.

## El paradigma es la parte que casi nunca discutimos

Meadows sitúa los paradigmas —los modelos mentales desde los que interpretamos la realidad— cerca de la parte superior de su lista.

Un paradigma no es una configuración de Kubernetes. Es una idea que damos por evidente.

Por ejemplo:

- Si un recurso no está ocupado, está desperdiciado.
- Si un equipo produce más código, es más productivo.
- Si algo es complejo, necesitamos otra capa de abstracción.
- Si un problema se repite, necesitamos más control.
- Si una plataforma tiene poca adopción, necesitamos impulsar su adopción.

No son siempre afirmaciones falsas. El peligro aparece cuando dejamos de tratarlas como hipótesis y empezamos a utilizarlas como verdades incuestionables.

El cuarto artículo mostró por qué la utilización extrema puede aumentar los tiempos de espera y reducir el margen para absorber variabilidad. El tercero exploró cómo las métricas pueden convertirse en objetivos que deforman el comportamiento. El segundo mostró cómo las intervenciones bienintencionadas pueden amplificar una degradación. El primero recordó que las propiedades de un sistema emergen de sus interconexiones, no solo de la calidad de sus piezas.

Todas esas ideas cuestionan una misma costumbre: **suponer que mejorar cada parte equivale a mejorar el conjunto**.

Pero tampoco debemos convertir el pensamiento sistémico en un paradigma inmune a la crítica. John Sterman recuerda en [*All Models Are Wrong*](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) que los modelos dependen de sus supuestos y de las fronteras que elegimos. Un diagrama causal puede sugerir un mecanismo; no demuestra por sí solo qué causó un incidente ni predice cuándo se repetirá.

La humildad no es un adorno filosófico. Es una condición para aprender.

## No todo problema necesita una revolución

Existe una tentación después de leer a Meadows: considerar que los cambios profundos son siempre superiores a las mejoras incrementales.

Sería un error.

Si una base de datos está mal indexada, quizá necesitemos un índice.

Si un *timeout* está configurado incorrectamente, quizá debamos corregirlo.

Si una dependencia falla por un defecto concreto, quizá baste con arreglar ese defecto.

No hay mérito en rediseñar una organización para evitar una corrección sencilla.

La cuestión es distinguir entre un fallo puntual y un comportamiento recurrente producido por la estructura.

Podemos investigar esa diferencia con preguntas verificables:

**¿Qué esperamos que cambie?** No solo la métrica inmediata, sino el comportamiento a lo largo del tiempo.

**¿Qué mecanismo explica el problema?** ¿Tenemos datos que lo respalden o solo una historia convincente?

**¿Qué consecuencias secundarias esperamos?** ¿Dónde puede desplazarse el coste?

**¿Qué observación refutaría nuestra hipótesis?** Si ninguna evidencia puede hacerlo, quizá no estemos investigando.

**¿Quién puede cambiar realmente las reglas?** Y ¿quién asumirá los costes de hacerlo?

Son preguntas menos vistosas que anunciar una transformación.

También son más difíciles de responder con una presentación.

## Un experimento mejor que otra reorganización

Imaginemos una plataforma interna que acumula retrasos porque todas las modificaciones necesitan revisión de un equipo central.

La explicación habitual es que ese equipo tiene poca capacidad.

La solución habitual consiste en contratar más revisores.

Antes de hacerlo, podríamos probar una hipótesis distinta: el cuello de botella existe porque el sistema concentra decisiones que podrían tomarse de forma segura en otros lugares.

Durante un periodo acotado, seleccionamos un conjunto de cambios de bajo riesgo y definimos criterios claros para que los equipos puedan aprobarlos y desplegarlos sin revisión central. Mantenemos controles automáticos, trazabilidad y mecanismos de reversión. Reservamos la revisión especializada para cambios que realmente la necesitan.

No estamos eliminando la responsabilidad. Estamos cambiando dónde se ejerce.

Antes de empezar, registraríamos qué esperamos observar: menor tiempo de espera, menos interrupciones al equipo central y ninguna degradación inaceptable de la seguridad o la fiabilidad.

También registraríamos qué nos haría detener el experimento: incidentes atribuibles a la nueva regla, aumento del retrabajo o desplazamiento de carga hacia otros equipos.

Si funciona, habremos cambiado una regla del sistema.

Si no funciona, tendremos información para revisar nuestro modelo.

Y si descubrimos que la revisión central existe para compensar una arquitectura difícil de comprender, quizá debamos intervenir todavía más abajo en las causas: contratos, dependencias, límites de responsabilidad y diseño del producto.

La idea no es encontrar siempre la intervención más profunda. Es **dejar de confundir la intervención más disponible con la más adecuada**.

## ¿Quién puede cambiar las reglas del juego?

Aquí el pensamiento sistémico se encuentra con una pregunta política, aunque estemos hablando de software.

Las reglas no aparecen solas.

Alguien decide quién puede desplegar, qué métricas cuentan, qué riesgos son aceptables, cómo se asigna el presupuesto y qué problemas merecen atención.

Y esas decisiones distribuyen poder.

Meadows señala que [el poder sobre las reglas es poder real](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/). Pero reconocerlo no resuelve cómo negociar entre objetivos legítimos y enfrentados.

El equipo de seguridad puede querer más controles. El de producto puede necesitar velocidad. Operaciones puede priorizar estabilidad. Finanzas puede exigir reducir costes.

Ninguna perspectiva debería imponerse simplemente porque su representante tenga el dashboard más convincente.

Necesitamos hacer visibles los compromisos, las dependencias y las consecuencias. Y necesitamos responsables capaces de decidir, explicar sus decisiones y revisarlas cuando la evidencia las contradiga.

Decir «el sistema nos llevó a hacerlo» no elimina la responsabilidad de quienes diseñan, mantienen o pueden cambiar ese sistema.

Una explicación sistémica debería ampliar nuestra capacidad de actuar, no servir como coartada.

## Lo que nos queda después de cinco artículos

Empezamos esta serie con una provocación: tu código puede ser excelente y el sistema un desastre.

Después vimos que intentar salvar un servicio puede contribuir a derribarlo, que medirlo todo no garantiza medir lo importante y que diseñar para el día perfecto nos deja vulnerables ante el mundo real.

Ahora aparece una conclusión menos cómoda que cualquier lista de buenas prácticas.

Podemos ser muy buenos resolviendo los problemas que tenemos delante y, aun así, estar dedicando nuestros mejores esfuerzos a preservar estructuras que deberíamos cuestionar.

Podemos acelerar un *pipeline* que no debería necesitar tantas comprobaciones.

Podemos perfeccionar un proceso de aprobación que no debería intervenir en cada cambio.

Podemos optimizar una plataforma que añade más complejidad de la que elimina.

Podemos construir dashboards impecables para objetivos que han dejado de importar.

Nada de eso significa que el trabajo realizado sea inútil. Las restricciones son reales, las decisiones anteriores tenían contextos y no siempre existe una alternativa sencilla.

Pero precisamente porque construir y mantener sistemas cuesta tanto, deberíamos reservar parte de nuestra capacidad para cuestionar sus fundamentos.

Meadows no nos entrega una fórmula para identificar la solución correcta. Nos ofrece un vocabulario para observar acumulaciones, flujos, retrasos, bucles, reglas y objetivos. Y nos recuerda que nuestras representaciones de la realidad son siempre incompletas.

Quizá el gesto más valioso de un ingeniero no sea añadir una nueva pieza, acelerar otra operación o automatizar una tarea más.

Quizá sea hacer una pregunta que interrumpa una reunión llena de soluciones técnicamente brillantes:

**«Antes de mejorarlo otra vez, ¿estamos seguros de que esto debería existir así?»**

Porque hay problemas que se resuelven optimizando.

Y hay otros que solo empezamos a resolver cuando dejamos de defender lo que construimos.

## Referencias y lecturas recomendadas

- **Thinking in Systems: A Primer**, Donella H. Meadows, Chelsea Green Publishing, 2008. Marco conceptual de la serie. Este artículo se apoya en los ensayos públicos de Meadows y en investigación complementaria; no afirma verificar una lectura íntegra del libro.
- **Leverage Points: Places to Intervene in a System**, Donella H. Meadows, Donella Meadows Project. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. La lista de doce puntos de intervención, que la autora llama provisional, y la frase sobre el poder sobre las reglas.
- **All Models Are Wrong: Reflections on Becoming a Systems Scientist**, John D. Sterman, System Dynamics Review, 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Los límites de los modelos y de sus supuestos.
- **Nobody Ever Gets Credit for Fixing Problems that Never Happened**, Nelson P. Repenning y John D. Sterman, California Management Review 43(4), 2001. <https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf>. Presión, mejora de procesos y trampa de la capacidad; estudios de caso y modelos, no una demostración universal.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, abril de 1968. <https://www.melconway.com/Home/Committees_Paper.html>. La influencia de las estructuras de comunicación sobre los sistemas diseñados.

Los escenarios de equipos, plataformas y el cálculo de disponibilidad son ilustrativos, no casos documentados.
