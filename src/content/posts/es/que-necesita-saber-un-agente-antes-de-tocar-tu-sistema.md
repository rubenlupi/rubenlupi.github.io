---
title: "Qué necesita saber un agente antes de tocar tu sistema"
description: "Una guía práctica para documentar conexiones, decisiones y evaluaciones de un flujo que atraviesa varios servicios."
date: 2026-11-15
topics: ["Software Engineering", "Systems & Organizations"]
tags: ["Systems Thinking", "Documentation", "AI Agents", "Architecture", "Evaluations"]
lang: es
translationOf: what-an-agent-needs-to-know-before-touching-your-system
selfContained: true
draft: false
---

En *Break & Change* vimos cómo un equipo puede mejorar su servicio y empeorar el producto. Para llevar esa idea al trabajo diario, empezaría por documentar un flujo completo. En un e-commerce, elegiría **confirmar un pedido**, desde que el cliente pulsa «Pagar» hasta que recibe una confirmación o recupera su dinero.

## Qué documentar

La página del flujo debe estar en la documentación compartida del producto y ser accesible desde los repositorios de Checkout, Inventario, Pagos y Pedidos. Esto es lo que pondría en ella.

| Qué documentar | Qué debe poder comprobar el equipo |
|---|---|
| **Resultado y reglas del negocio** | Qué significa «pedido confirmado». Por ejemplo, hay un pago confirmado y una unidad asignada a ese pedido. Enumerar los estados intermedios y qué servicio puede mover el pedido de un estado a otro. |
| **Conexiones y contratos** | Quién llama a quién, quién publica y consume cada evento, qué identificadores relacionan pedido, reserva y pago y cuál es la fuente de verdad de cada dato. Enlazar el esquema del evento y su implementación. |
| **Tiempos, colas y límites** | Cuánto dura la reserva, cuánto espera Checkout y qué capa reintenta. Dónde se acumulan pedidos pendientes, a qué ritmo llegan y se resuelven, y qué pasa al superar la capacidad. Enlazar la configuración efectiva y el panel de la cola. |
| **Fallos y recuperación** | Qué pasa si el pago llega tarde, duplicado o fuera de orden. Quién inicia la devolución, qué clave evita duplicarla y qué ve el cliente mientras se resuelve. Enlazar la guía operativa. |
| **Métricas del flujo completo** | Pedidos confirmados sobre intentos de compra, pagos confirmados sin stock sobre cobros confirmados y tiempo hasta resolver esos casos. Enlazar el panel y una traza que permita seguir el mismo pedido entre servicios. |
| **Decisiones e historial** | Qué se acordó, cuándo, con qué equipos y datos, y bajo qué condiciones se revisará. Enlazar el incidente o experimento, el PR y la decisión que siga vigente. Conservar el registro anterior enlazado a su sustitución. |
| **Pruebas y evaluaciones** | Qué escenarios deben pasar al tocar el flujo, qué resultado esperamos y dónde se ejecutan las pruebas. Si un agente prepara cambios, evaluar si encuentra los acuerdos vigentes y reconoce las dependencias afectadas. |

Para las conexiones críticas dejaría una ficha que se pueda leer en un minuto. Por ejemplo, **`PaymentConfirmed`** lo publica Pagos y lo consume Pedidos. Incluye `order_id` y `payment_id`. Puede llegar después de que expire la reserva y puede entregarse más de una vez. Pedidos consulta Inventario antes de confirmar. Si ya no puede reservar una unidad, inicia una devolución idempotente. En esa ficha van los enlaces al esquema, al consumidor y a la prueba de integración.

## Cómo se usa en un cambio real

Inventario propone reducir la reserva de diez a cinco minutos. Antes de aprobarlo, revisaría con Pagos y Pedidos cuatro cosas.

1. **Cuántos pedidos quedan expuestos.** Supongamos que, de 100.000 pagos confirmados en una semana, 600 llegaron entre el minuto cinco y el diez desde el inicio de la reserva. Con el nuevo límite, ese 0,6 % llegaría después de la caducidad. Para estimar cuántos acabarían en devolución falta saber cuántos podrían volver a reservar stock.
2. **Qué recupera el sistema por sí solo.** Probar un cobro tardío con stock disponible, uno con stock agotado y una entrega duplicada del evento. En el primer caso se confirma el pedido tras volver a reservar. En el segundo se inicia una devolución. Si llega el duplicado, debe haber como máximo una confirmación o una devolución para ese pago.
3. **Qué resultado justifica el cambio.** Medir cuántos minutos de reserva se liberan y si eso permite completar más compras. Acordar antes del despliegue cuánto pueden aumentar las devoluciones por falta de stock, durante cuánto tiempo se observará el cambio y quién decide si se revierte.
4. **Dónde queda el acuerdo.** Registrar la decisión en la documentación del flujo, con los datos de partida y los enlaces a los PR. Al terminar el periodo de observación, añadir el resultado y la decisión de mantener o revertir el cambio.

## Qué tiene que encontrar el agente

La evaluación puede empezar con la misma petición que recibiría en el trabajo. «Baja la reserva de stock a cinco minutos».

| Caso de evaluación | Qué debe hacer el agente |
|---|---|
| **La regla vigente está documentada** | Localizar la configuración, seguir la conexión con Pagos y Pedidos, citar la decisión vigente y señalar las pruebas y métricas afectadas. |
| **Hay dos decisiones históricas** | Identificar cuál sustituyó a la otra y usar esa versión para justificar la propuesta. |
| **Faltan los datos de pagos tardíos** | Especificar qué consulta hace falta y qué decisión queda pendiente. |
| **Las pruebas locales pasan** | Comprobar si también hay cobertura para la expiración, el pago tardío y la entrega duplicada. Identificar cualquier escenario sin cobertura. |

Si el agente cambia el valor y solo ejecuta las pruebas de Inventario, **la evaluación falla**. El cambio afecta a una condición que Pagos y Pedidos tienen que conocer.

En la revisión de un PR usaría una pregunta. **¿Cambia algo que otro equipo da por hecho?** Si la respuesta es sí, ese equipo participa en la decisión y el acuerdo queda registrado en el flujo que ambos mantienen.

## Referencias y lecturas recomendadas

- Las dependencias, el trabajo que se acumula y los retrasos entre servicios. [Tu código es perfecto. Tu arquitectura es brillante. Tu sistema es un desastre.](/es/posts/sistemas-que-construimos-1-no-solo-vivimos-en-sistemas/)
- Los reintentos y las respuestas que agravan un fallo. [El sistema no se cayó. Lo tiramos intentando salvarlo.](/es/posts/sistemas-que-construimos-2-mejorar-las-partes/)
- Las métricas que cambian el comportamiento de cada equipo. [Hemos aprendido a medirlo todo. Excepto lo que importa.](/es/posts/sistemas-que-construimos-3-mismos-errores/)
- Los límites, las colas y el margen para absorber picos. [Diseñamos para el día perfecto. Vivimos en el mundo real.](/es/posts/sistemas-que-construimos-4-limites/)
- Los objetivos y las reglas que determinan qué merece la pena mejorar. [Somos expertos en mejorar cosas que nunca deberíamos haber construido.](/es/posts/sistemas-que-construimos-5-que-construimos/)
- Malcolm Featonby, [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/), Amazon Builders' Library. Explica cómo un identificador único de petición permite que un servicio trate un reintento como duplicado. Sus ejemplos son de EC2 y EBS; aplicar la idea a las devoluciones, como hace la guía, es una extrapolación.
