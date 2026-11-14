---
title: "Diseñamos para el día perfecto. Vivimos en el mundo real."
description: "Por qué llevar la utilización al límite puede destruir la resiliencia: teoría de colas, buffers, redundancia, backpressure y capacidad de adaptación desde el pensamiento sistémico."
date: 2026-11-13
editorialDate: 2026-10-26
series: break-and-change
seriesPart:
  title: "Los sistemas que construimos, los sistemas que habitamos"
  slug: systems-we-build
  number: 4
  total: 5
  stage: "CHALLENGE"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "Software Engineering"]
tags: ["Systems Thinking", "Resilience", "Queueing Theory", "Buffers", "Platform Engineering"]
lang: es
translationOf: systems-we-build-4-limits
draft: false
---

El sistema funciona al 98 % de su capacidad.

Infraestructura está satisfecha. Hemos eliminado servidores infrautilizados, consolidado servicios y reducido costes. Cada euro parece estar trabajando. El dashboard está verde.

Entonces llega un aumento de tráfico del 15 %.

La latencia se dispara. Las colas crecen. Los *timeouts* provocan reintentos y los reintentos generan más tráfico. El sistema que hace unos minutos parecía extraordinariamente eficiente empieza a fallar.

Alguien propone añadir capacidad.

Pero esa es precisamente la capacidad que acabamos de eliminar.

**Diseñamos para el día perfecto. Vivimos en el mundo real.** Y en el mundo real hay variabilidad, errores, dependencias que se ralentizan, personas que enferman, proveedores que se retrasan y usuarios que no se comportan como nuestros promedios.

La pregunta no es si debemos ser eficientes. Es qué estamos sacrificando cuando confundimos eficiencia con ocupación permanente.

## Estar ocupado no significa producir valor

Imaginemos un servicio que puede procesar 100 peticiones por segundo. Si recibe 50, su utilización es del 50 %. Si recibe 90, alcanza el 90 %. Parece lógico pensar que el segundo escenario aprovecha mejor la infraestructura.

Pero ¿qué sucede con el tiempo de respuesta?

Un modelo elemental de teoría de colas, [**M/M/1**](https://en.wikipedia.org/wiki/M/M/1_queue), permite estudiar la relación. Supone llegadas de tipo Poisson, tiempos de servicio exponenciales y un único servidor. No es una descripción fiel de una plataforma distribuida moderna, pero muestra un mecanismo importante.

Si la tasa de llegada es λ y la capacidad de servicio es μ, la utilización es:

ρ = λ / μ

Y, mientras λ < μ, el tiempo medio de permanencia en el sistema, incluida la espera, es:

W = 1 / (μ − λ)

Con una capacidad de 100 peticiones por segundo:

| Tráfico | Utilización | Tiempo medio en el sistema |
|---|---:|---:|
| 50 peticiones/s | 50 % | 20 ms |
| 80 peticiones/s | 80 % | 50 ms |
| 90 peticiones/s | 90 % | 100 ms |
| 95 peticiones/s | 95 % | 200 ms |
| 99 peticiones/s | 99 % | 1.000 ms |

Pasar del 90 % al 99 % de utilización multiplica por diez el tiempo medio de respuesta **en este modelo**. No hemos multiplicado por diez el tráfico: hemos consumido nueve puntos más de capacidad.

La relación es no lineal. Cuando un recurso se acerca a su límite, pequeñas variaciones pueden producir consecuencias desproporcionadas.

Los sistemas reales tienen varios servidores, diferentes distribuciones de carga, prioridades y mecanismos de escalado. No podemos usar esa tabla para predecir directamente la latencia de Kubernetes. Sí podemos utilizarla para desmontar una intuición peligrosa: **la capacidad libre no es necesariamente capacidad desperdiciada**.

## La cola es donde escondemos el problema

En *Thinking in Systems*, Donella Meadows distingue los *stocks* —acumulaciones— de los *flows* —flujos que las aumentan o reducen—.

Una cola es un stock. El trabajo entra a un ritmo y sale a otro.

Variación de la cola = tasa de entrada − tasa efectiva de salida

Si entran 1.200 mensajes por segundo y solo podemos procesar 1.000, acumulamos 200 cada segundo. En diez minutos, si las tasas se mantienen, habrá 120.000 mensajes adicionales pendientes.

Ampliar la cola puede ser útil. Permite absorber picos temporales y desacoplar componentes que trabajan a ritmos distintos. Pero no corrige una diferencia persistente entre entrada y salida.

Podemos aumentar la retención, comprar más almacenamiento y construir un dashboard excelente sobre el tamaño de la cola. Mientras sigan entrando más mensajes de los que salen, la acumulación crecerá.

A veces un buffer hace que el sistema parezca estable precisamente porque está guardando el problema para más tarde.

La pregunta que deberíamos hacer no es solo «¿cuánto trabajo pendiente tenemos?», sino «¿qué mecanismo hará que deje de crecer?».

## El espacio vacío también trabaja

Meadows identifica el tamaño de los amortiguadores respecto a sus flujos como uno de los [lugares donde intervenir](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) en un sistema. Un depósito almacena agua para compensar diferencias entre suministro y consumo. Un inventario permite seguir vendiendo cuando una entrega se retrasa. Una reserva de capacidad permite absorber una variación de demanda.

Ese margen tiene un precio. Los servidores cuestan dinero. El inventario inmoviliza capital. Los buffers grandes pueden ocultar problemas y retrasar las señales que necesitamos para corregirlos.

Por eso la conclusión no puede ser «cuanto más buffer, mejor».

La decisión depende de la variabilidad que esperamos, del coste del fallo, del tiempo necesario para recuperar capacidad y de las alternativas disponibles para reducir la demanda.

Una plataforma que puede aprovisionar recursos en segundos necesita reservas distintas de una fábrica que tarda seis meses en instalar una máquina. Un servicio interno que tolera interrupciones puede asumir riesgos que una plataforma de pagos no debería aceptar.

La resiliencia no tiene un porcentaje universal. **Es una decisión de diseño basada en consecuencias**.

## Diez ingenieros, ninguna hora disponible

Ahora traslademos el problema a una organización.

Un equipo de diez ingenieros tiene tareas asignadas para toda la semana. Todas las agendas están llenas. La dirección celebra que la capacidad esté perfectamente aprovechada.

El martes aparece un incidente. Dos personas interrumpen sus tareas. Una dependencia prevista para el miércoles queda bloqueada. Otro equipo, que esperaba esa entrega, reorganiza sus prioridades. Un problema que requería cuatro horas de trabajo acaba generando días de espera distribuidos.

Nadie ha trabajado poco. De hecho, todo el mundo está ocupado.

Pero la ocupación individual y el flujo de valor son cosas diferentes.

Una tarea puede necesitar dos horas de ejecución y permanecer ocho días esperando a que alguien esté disponible. Si solo medimos las horas trabajadas, esa espera resulta casi invisible.

La variabilidad y las dependencias convierten la utilización extrema en un problema de coordinación. Un sistema sin margen para absorber interrupciones puede parecer productivo hasta que aparece la primera.

Esto tampoco significa que un equipo deba reservar arbitrariamente la mitad de su tiempo. Significa que debemos observar simultáneamente utilización, tiempo de ciclo, trabajo en curso, bloqueos y capacidad de respuesta.

**Un calendario lleno puede ser una señal de eficiencia local y de fragilidad global.**

## También podemos gastar la reserva sin tocar infraestructura

La capacidad de adaptación de un equipo se erosiona de otra forma: posponiendo sistemáticamente el trabajo que evita problemas futuros.

Primero aplazamos una refactorización. Después una actualización de dependencias. Más adelante aceptamos pruebas inestables. Cada decisión libera tiempo para la entrega inmediata.

Con el paso de los meses, los tests tardan más, los cambios requieren comprobaciones manuales y los despliegues generan incertidumbre. El equipo sigue trabajando, pero necesita más esfuerzo para conseguir resultados similares.

Ward Cunningham [utilizó la metáfora](https://c2.com/doc/oopsla92.html) de la deuda técnica para explicar cómo determinadas decisiones de implementación pueden generar intereses futuros. Aquí importa otra consecuencia: la deuda puede reducir la capacidad de reaccionar ante lo inesperado.

Si cada cambio es arriesgado, corregir un incidente cuesta más. Si los tests no son fiables, validar una reparación tarda más. Si solo una persona conoce una dependencia crítica, su ausencia puede convertirse en un cuello de botella.

La resiliencia también depende de cuánto podemos cambiar el sistema cuando las condiciones cambian.

Y esa capacidad puede desaparecer silenciosamente mientras los indicadores de entrega permanecen en verde.

## Tres réplicas no son tres oportunidades de sobrevivir

En sistemas distribuidos utilizamos redundancia para tolerar fallos: múltiples instancias, réplicas de datos, zonas de disponibilidad y rutas alternativas.

La redundancia parece un desperdicio si suponemos que nada fallará. ¿Para qué pagar recursos que quizá nunca necesitemos?

Porque el objetivo puede ser mantener el servicio cuando una parte deja de funcionar, no minimizar el coste en ausencia de incidentes.

Pero añadir copias tampoco garantiza resiliencia.

Tres instancias que dependen de la misma base de datos pueden fallar juntas. Dos centros de datos que comparten una dependencia crítica pueden sufrir un fallo común. Replicar información corrupta puede propagar el problema en lugar de resolverlo.

La pregunta no es cuántas copias tenemos. Es **qué fallos pueden ocurrir de manera independiente y cuáles comparten una causa común**.

Aquí regresamos a las interconexiones de Meadows. Podemos duplicar componentes y conservar intacta la fragilidad del conjunto. O podemos reducir dependencias compartidas, introducir aislamiento y permitir que una parte falle sin arrastrar al resto.

La diferencia no reside únicamente en la cantidad de recursos. Reside en la estructura.

## Un sistema resiliente sabe rechazar trabajo

Hay una idea que incomoda a muchos equipos de producto: en determinadas condiciones, aceptar más trabajo empeora el resultado para todos.

Cuando un servicio saturado acepta todas las peticiones, las colas crecen. La latencia aumenta. Algunas operaciones superan sus tiempos de espera y los clientes reintentan. La carga se amplifica. Es el mecanismo que exploramos en el segundo artículo.

Podemos intervenir mediante (como describe Google en su [capítulo sobre sobrecarga](https://sre.google/sre-book/handling-overload/) y en el de [fallos en cascada](https://sre.google/sre-book/addressing-cascading-failures/)) *rate limiting*, *load shedding*, *backpressure* y *circuit breakers*.

No son sinónimos. El *rate limiting* restringe la tasa admitida; el *load shedding* descarta trabajo para proteger el sistema; el *backpressure* transmite presión hacia los productores; y un *circuit breaker* puede suspender temporalmente llamadas a una dependencia degradada.

Todos tienen costes. Rechazar peticiones perjudica a usuarios concretos y una política mal diseñada puede descartar precisamente las operaciones más importantes.

Pero reconocen una realidad: la capacidad es finita.

Una tienda online podría priorizar completar compras frente a generar recomendaciones personalizadas. Una plataforma de contenidos podría servir una versión almacenada en caché mientras una dependencia secundaria se recupera.

La degradación controlada puede ser preferible a una caída total.

Y esa decisión no es solo técnica. Alguien debe decidir qué preservar cuando no podemos preservarlo todo. **La arquitectura termina expresando prioridades de producto**.

## La eficiencia puede trasladar el riesgo a otra parte

Pensemos en una cadena de suministro que reduce inventario para disminuir costes. La decisión mejora un indicador financiero, pero incrementa la dependencia de entregas frecuentes y puntuales.

Si un proveedor se retrasa, la producción puede detenerse. La empresa exige entonces entregas más rápidas; el proveedor reduce sus propias reservas para mantener precios competitivos. Cada participante optimiza sus costes y el conjunto puede volverse más vulnerable.

No es una crítica universal a las estrategias de inventario ajustado. Pueden funcionar bien cuando se diseñan considerando variabilidad, fiabilidad y capacidad de respuesta.

El problema aparece cuando celebramos la eliminación de una reserva sin preguntarnos qué riesgo absorbía.

En software ocurre algo parecido. Consolidamos servicios para ahorrar, pero creamos dependencias compartidas. Centralizamos capacidades para simplificar operaciones, pero concentramos el impacto de los fallos. Reducimos instancias porque su utilización media es baja, aunque quizá esa capacidad libre absorbía picos importantes.

El ahorro es visible inmediatamente. El riesgo desplazado puede tardar meses en manifestarse.

Una mejora local puede ser una transferencia de coste hacia una parte del sistema que nuestro dashboard no observa.

## Sobrevivir también significa poder cambiar

Meadows concede especial importancia a la capacidad de autoorganización: la posibilidad de que un sistema genere nuevas estructuras y cambie sus propias formas de funcionamiento.

En ingeniería, una analogía útil es la capacidad de adaptación.

¿Podemos desplegar una corrección sin coordinar diez equipos? ¿Podemos revertir un cambio? ¿Conocemos nuestras dependencias críticas? ¿Podemos experimentar sin poner en riesgo toda la plataforma? ¿Los ingenieros tienen información suficiente para tomar decisiones cuando aparece algo inesperado?

Una arquitectura puede resistir fallos conocidos y seguir siendo extraordinariamente rígida ante condiciones nuevas.

Lo mismo sucede en una organización. Si eliminamos todo el tiempo para aprender, experimentar, documentar y mejorar, quizá aumentemos la entrega inmediata. También podemos estar reduciendo nuestra capacidad de responder al próximo problema.

No todo espacio sin tareas asignadas es desperdicio. Parte de ese margen permite aprender y reorganizarse.

La resiliencia no consiste únicamente en soportar golpes. Consiste también en **conservar opciones cuando el entorno cambia**.

## ¿Cuánto cuesta realmente ser eficiente?

Imaginemos dos plataformas hipotéticas.

La primera cuesta 100 unidades al mes. Opera cerca de su capacidad máxima y tiene pocas reservas.

La segunda cuesta 120. Mantiene margen adicional, aislamiento entre dependencias y mecanismos de degradación controlada.

Durante seis meses no ocurre ningún incidente importante. La primera parece superior: ofrece un servicio similar por menos dinero.

El séptimo mes falla una dependencia compartida. La primera tarda horas en recuperarse. La segunda conserva sus operaciones esenciales.

¿Cuál era más eficiente?

No podemos responder sin conocer la probabilidad de los incidentes, su impacto, el coste de las reservas y las alternativas disponibles. Y eso es precisamente lo que falta cuando evaluamos la eficiencia únicamente en condiciones normales.

El coste esperado puede ayudarnos a razonar, pero no elimina la incertidumbre. Los eventos raros son difíciles de estimar y los fallos correlacionados pueden invalidar supuestos cómodos.

El pensamiento sistémico tampoco proporciona un porcentaje mágico de utilización ni demuestra que más redundancia sea siempre mejor. Nos obliga a ampliar la frontera del análisis.

¿Estamos optimizando el coste por petición durante un martes tranquilo? ¿O el coste de sostener el servicio a lo largo del tiempo, incluyendo fallos, recuperación, mantenimiento y capacidad de adaptación?

Son problemas diferentes.

## La pregunta que deberíamos hacernos antes de optimizar

La próxima vez que alguien proponga eliminar una reserva, aumentar la utilización o reducir un equipo hasta el mínimo necesario, no hace falta rechazar la propuesta.

Hace falta preguntar qué función cumplía ese margen.

¿Qué variabilidad absorbía? ¿Qué dependencias protegía? ¿Cuánto tardaríamos en recuperarlo? ¿Qué fallaría primero si la demanda creciera? ¿Qué trabajo podríamos aplazar? ¿Qué capacidad de aprendizaje perderíamos?

Si las respuestas muestran que el margen no aporta suficiente valor, eliminarlo puede ser una buena decisión.

Pero si nadie sabe responder, quizá estemos a punto de vender una póliza de seguro cuyo riesgo ni siquiera hemos calculado.

La eficiencia importa. Sin ella desperdiciamos recursos que podríamos dedicar a otras necesidades. Pero perseguirla sin comprender los mecanismos del sistema puede destruir precisamente aquello que queríamos proteger.

No diseñamos software para que un dashboard luzca bien durante el día perfecto.

Lo diseñamos para que las personas puedan seguir haciendo lo que necesitan cuando las condiciones cambian.

**Y el mundo real siempre acaba cambiando las condiciones.**

## Referencias y lecturas recomendadas

- **Thinking in Systems: A Primer**, Donella H. Meadows, Chelsea Green Publishing, 2008. Marco conceptual sobre acumulaciones, flujos, reservas, interconexiones y autoorganización. No se ha comprobado una lectura íntegra del libro; las ideas de buffers y autoorganización se apoyan en el ensayo siguiente.
- **Leverage Points: Places to Intervene in a System**, Donella H. Meadows, Donella Meadows Project. <https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/>. El tamaño de los buffers respecto a sus flujos y la autoorganización como puntos de intervención.
- **M/M/1 queue**, Wikipedia. <https://en.wikipedia.org/wiki/M/M/1_queue>. Supuestos del modelo, utilización y tiempo medio en el sistema (fuente secundaria).
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Origen de la metáfora de la deuda técnica.
- **Handling Overload**, Site Reliability Engineering, Google. <https://sre.google/sre-book/handling-overload/>. Descarte de carga por prioridad, respuestas degradadas, límites del lado del cliente y reintentos acotados. Es la práctica de una empresa.
- **Addressing Cascading Failures**, Site Reliability Engineering, Google. <https://sre.google/sre-book/addressing-cascading-failures/>. La sobrecarga como causa más común de fallos en cascada, el descarte de carga y los reintentos con presupuesto. Es la práctica de una empresa.

Los ejemplos numéricos de teoría de colas son ilustrativos y dependen de los supuestos del modelo M/M/1. Los escenarios de plataformas y equipos son hipotéticos, no incidentes documentados.
