---
title: "Tu código es perfecto. Tu arquitectura es brillante. Tu sistema es un desastre."
description: "Cómo componentes excelentes pueden producir sistemas frágiles: acumulaciones, bucles de retroalimentación y retrasos, desde la ingeniería de software hasta Donella Meadows."
date: 2026-11-13
editorialDate: 2026-10-26
series: break-and-change
seriesPart:
  title: "Los sistemas que construimos, los sistemas que habitamos"
  slug: systems-we-build
  number: 1
  total: 5
  stage: "BREAK"
book:
  title: "Thinking in Systems"
  author: "Donella H. Meadows"
  year: 2008
  category: "Systems, Execution & Organizational Design"
topics: ["Systems & Organizations", "History & Classical Thinking", "Learning & Education"]
tags: ["Systems Thinking", "Stocks and Flows", "Feedback Loops", "Conway's Law", "Software Engineering"]
lang: es
translationOf: systems-we-build-1-we-create-them
draft: false
---

Hay una clase de desastre especialmente irritante en ingeniería: aquel en el que nadie ha hecho nada obviamente mal.

El código tiene pruebas. Los servicios están desacoplados. Las APIs están documentadas. Los equipos tienen responsabilidades claras. Cada componente cumple sus objetivos de rendimiento.

Y, sin embargo, el sistema completo es lento, frágil y desesperadamente difícil de modificar.

La reacción habitual consiste en buscar la pieza defectuosa. Algún servicio mal diseñado, una base de datos saturada, un equipo que entrega demasiado despacio. Siempre hay algo que optimizar.

Lo interesante empieza cuando no encontramos esa pieza.

O peor: cuando la encontramos, la mejoramos y el problema sigue ahí.

Donella Meadows dedicó buena parte de su trabajo a estudiar precisamente esa clase de situaciones. Su libro *Thinking in Systems* parte de una idea que parece evidente hasta que intentamos aplicarla: el comportamiento de un sistema depende tanto de sus interconexiones, sus acumulaciones y sus mecanismos de regulación como de los elementos que lo componen.

No es una invitación a pensar en grande. Es una invitación a pensar de otra manera.

Y para alguien que construye software, la diferencia importa bastante.

## Un sistema no es una colección de piezas

Imaginemos una plataforma de comercio electrónico.

El servicio de catálogo responde en 30 milisegundos. El de precios, en 40. El de inventario, en 50. El de promociones, en 60.

Todos cumplen sus respectivos objetivos.

El equipo que construye el checkout necesita consultar los cuatro para mostrar el precio final y confirmar que el producto está disponible.

Si las llamadas se ejecutan secuencialmente, la latencia se acumula. Si se ejecutan en paralelo, el tiempo de respuesta mejora, pero aparecen otras preguntas.

¿Qué ocurre cuando falla una dependencia? ¿Cuánto esperamos antes de abandonar? ¿Qué hacemos si el inventario responde pero promociones no? ¿Cuántas llamadas adicionales genera cada petición de checkout?

Podemos tener cuatro servicios rápidos y un checkout lento.

También podemos tener cuatro servicios fiables y un checkout menos fiable que cualquiera de ellos.

Si cuatro dependencias independientes tienen cada una una disponibilidad del 99,9 % y todas son imprescindibles para completar una operación, la disponibilidad conjunta sería aproximadamente:

0,999⁴ ≈ 99,6 %

La independencia es una simplificación importante: en producción existen fallos correlacionados y mecanismos de recuperación. Pero el ejemplo deja algo claro.

**La calidad de las partes no se suma automáticamente para producir la calidad del conjunto.**

Las relaciones entre componentes también tienen consecuencias.

Meadows distingue tres dimensiones fundamentales: elementos, interconexiones y función o propósito.

Los elementos suelen ser lo más visible. En software son servicios, bases de datos, colas, aplicaciones y personas.

Las interconexiones son las relaciones que permiten que el sistema funcione: llamadas, eventos, dependencias, contratos, información y decisiones.

La función o propósito es aquello que el sistema realmente consigue o tiende a conseguir.

Podemos sustituir una base de datos sin alterar demasiado el comportamiento general. Cambiar la forma en que circula la información, en cambio, puede transformar por completo el sistema.

Por eso algunas migraciones tecnológicas apenas mejoran nada, mientras que modificar una dependencia aparentemente pequeña produce resultados enormes.

No todas las piezas tienen la misma influencia.

Y no todas las relaciones son igual de importantes.

## El error de confundir movimiento con progreso

En un fragmento del borrador de *Thinking in Systems* conocido como [*Bathtubs 101*](https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf), Meadows utiliza una bañera para explicar los *stocks* y los *flows*.

Un stock es una cantidad acumulada: agua, inventario, dinero o trabajo pendiente.

Un flow es el ritmo al que esa cantidad aumenta o disminuye.

Su comportamiento básico puede expresarse así:

Stock nuevo = stock actual + (entrada − salida)

Si recibimos veinte tareas semanales y terminamos dieciocho, acumulamos dos.

No importa que las dieciocho tareas se hayan completado con una calidad extraordinaria.

La cola sigue creciendo.

[John Sterman](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf) estudió nuestra capacidad para razonar sobre este tipo de sistemas dinámicos. En uno de los ejercicios que describe, solo el 36 % de los estudiantes de posgrado del MIT consiguió dibujar correctamente el nivel de una bañera a partir de sus flujos de entrada y salida.

En otro ejercicio, el 94 % interpretó correctamente una gráfica de flujos, pero únicamente el 42 % y el 30 % acertaron dos preguntas sobre las acumulaciones.

Los resultados procedían de ejercicios realizados en sus clases; no describen a todos los estudiantes del MIT.

Aun así, la dificultad que revelan resulta familiar.

Sabemos observar actividades. Nos cuesta entender cómo se acumulan sus consecuencias.

En ingeniería celebramos los despliegues realizados, los pull requests fusionados y las incidencias cerradas.

Pero ¿qué está ocurriendo con el trabajo pendiente? ¿Con las dependencias entre equipos? ¿Con el coste de modificar el software?

Una organización puede aumentar su capacidad de entrega y seguir acumulando trabajo.

Incluso puede aumentar su capacidad de entrega y acumular trabajo más deprisa que antes, si el flujo de entrada crece todavía más.

La actividad ha aumentado.

El problema también.

Aquí aparece una propiedad de los stocks que suele pasar desapercibida: tienen memoria.

Aunque hoy equilibremos las entradas y las salidas, la acumulación del pasado permanece.

Si llevamos seis meses acumulando trabajo, igualar nuestra capacidad a la demanda detiene el crecimiento de la cola. No la elimina.

Necesitamos mantener durante un tiempo una salida superior a la entrada.

Y eso exige decisiones que no se resuelven escribiendo código más rápido.

## La trampa de arreglar lo que acabamos de romper

Los stocks explican cómo se acumulan las cosas. Pero todavía no explican por qué los sistemas se comportan de maneras tan extrañas.

Para eso necesitamos entender los *feedback loops*.

Un bucle de retroalimentación aparece cuando el resultado de un proceso influye sobre las condiciones que lo producen.

Puede reforzar un comportamiento o contrarrestarlo.

Veamos uno que cualquier ingeniero de sistemas distribuidos reconocerá.

Un servicio empieza a responder lentamente.

Sus clientes tienen configurados reintentos automáticos. Cuando una petición supera el timeout, vuelven a intentarlo.

La decisión parece razonable: un fallo transitorio no debería impedir completar una operación.

Pero cada reintento genera más trabajo.

El servicio, que ya estaba saturado, recibe todavía más peticiones. Su latencia aumenta. Más peticiones agotan el timeout. Más clientes reintentan.

Hemos construido un bucle de refuerzo:

**Más latencia → más timeouts → más reintentos → más carga → más latencia.**

Cada cliente intenta mejorar su propia fiabilidad.

El resultado colectivo puede ser una caída completa del servicio.

Ningún cliente necesita tener un bug. Basta con que todos reaccionen de manera parecida ante una dependencia compartida.

Y este detalle es fundamental: el problema no reside necesariamente en una implementación incorrecta, sino en la interacción entre comportamientos individualmente razonables.

Podemos representar el fenómeno con un modelo muy simplificado.

Si llegan λ peticiones originales por segundo y cada intento fallido tiene una probabilidad p de volver a intentarse, sin límite de reintentos y suponiendo que esa probabilidad se mantiene constante, la tasa esperada total de intentos sería:

Intentos totales = peticiones originales / (1 − p)

Con una probabilidad de reintento del 50 %, el volumen esperado se duplica.

Con un 80 %, se multiplica por cinco.

En producción, p no suele ser constante. Puede aumentar precisamente cuando aumenta la carga. Esa dependencia hace que el modelo simplificado se quede corto para describir la dinámica real.

Y ahí está lo peligroso.

El sistema puede amplificar sus propios problemas.

No porque alguien haya programado una instrucción que diga «colapsar», sino porque hemos conectado varias decisiones razonables de una manera que produce ese comportamiento.

## No todos los bucles son enemigos

Los bucles de refuerzo pueden producir crecimiento o deterioro acelerado.

Pero también existen los bucles de equilibrio.

Un termostato es el ejemplo clásico: cuando la temperatura cae por debajo de un objetivo, activa la calefacción. Cuando vuelve a alcanzarlo, deja de calentar.

El resultado de la acción reduce la diferencia que provocó esa misma acción.

En ingeniería encontramos mecanismos similares en los sistemas de control, en el autoscaling y en los controladores de Kubernetes.

Un controlador observa el estado real, lo compara con el estado deseado y ejecuta acciones para reducir la diferencia.

Esa lógica es extraordinariamente útil.

Pero tiene un detalle que complica las cosas.

El mundo no responde instantáneamente.

Supongamos que un autoscaler detecta una subida de carga y decide crear nuevas réplicas.

Las réplicas tardan en arrancar. Después necesitan pasar comprobaciones de salud, recibir tráfico y estabilizarse.

Mientras tanto, el controlador sigue observando una situación de saturación.

Si no tiene en cuenta ese retraso, puede solicitar más capacidad de la necesaria.

Cuando finalmente llegan todas las réplicas, la carga ya ha bajado. El controlador empieza a eliminarlas.

Poco después vuelve a subir.

Y repetimos el ciclo.

Un mecanismo diseñado para estabilizar el sistema puede producir oscilaciones si sus tiempos de reacción, umbrales y retrasos están mal ajustados.

Esto es algo más profundo que un problema de configuración.

**El comportamiento depende de la relación entre la velocidad de nuestras decisiones y la velocidad con la que el sistema puede responder.**

Meadows insiste en la importancia de los retrasos porque separan las acciones de sus consecuencias.

En software nos encontramos con ellos constantemente: cachés que tardan en actualizarse, mensajes que esperan en una cola, réplicas que necesitan arrancar, datos que se propagan y métricas que llegan cuando el problema ya ha cambiado.

Podemos tener una acción correcta ejecutada en el momento equivocado.

O una acción correcta repetida tantas veces que acaba convirtiéndose en el problema.

## A veces optimizar es la forma más rápida de empeorar las cosas

Volvamos a la plataforma de comercio electrónico.

El equipo de catálogo detecta que su servicio recibe demasiadas peticiones. Decide introducir una caché.

La latencia baja. La base de datos respira. Las métricas mejoran.

Buen trabajo.

Ahora imaginemos que el sistema utiliza el mismo mecanismo de caché para información que cambia con frecuencias muy diferentes.

Los datos descriptivos de un producto pueden tolerar cierto retraso.

El inventario disponible para una compra, quizá no.

Si no hemos definido correctamente las reglas de consistencia, podemos terminar mostrando productos que ya no están disponibles.

El checkout empieza a rechazar operaciones.

Los clientes reintentan.

Las peticiones adicionales aumentan la carga sobre otros componentes.

La caché ha mejorado el rendimiento local. Pero el resultado global depende de cómo interactúa con las decisiones de compra, los flujos de actualización y la gestión de errores.

No significa que las cachés sean malas. Significa que su valor depende del comportamiento que queremos conseguir en el conjunto.

El mismo razonamiento aparece con la deuda técnica.

Ward Cunningham introdujo [su metáfora en 1992](https://c2.com/doc/oopsla92.html) para explicar cómo determinadas decisiones permiten avanzar antes, a cambio de encarecer los cambios posteriores.

Martin Fowler distinguió después, en su [cuadrante de la deuda técnica](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), entre deuda prudente y temeraria, deliberada e inadvertida.

Pero hay una dimensión sistémica especialmente interesante.

La deuda puede generar más deuda.

Una arquitectura difícil de modificar hace que los cambios tarden más. Cuando el tiempo disponible es limitado, aumenta la tentación de utilizar soluciones provisionales. Esas soluciones pueden introducir nuevas dependencias y complicar todavía más la arquitectura.

Aparece otro bucle de refuerzo:

**Más complejidad → cambios más costosos → más atajos → más complejidad.**

No siempre ocurre así. Hay equipos que gestionan conscientemente sus compromisos técnicos.

Pero cuando aparece este patrón, aumentar la velocidad de programación no necesariamente lo resuelve.

Podemos escribir más código en menos tiempo y seguir haciendo que cada cambio futuro resulte más caro.

La llegada de los agentes de IA vuelve esta pregunta especialmente relevante.

Si un agente puede producir cambios diez veces más deprisa, ¿qué ocurre con las revisiones, las pruebas, la integración, el despliegue y el mantenimiento?

Dependerá de cómo esté construido el sistema.

La capacidad adicional puede eliminar una restricción importante.

O simplemente trasladar el cuello de botella a otro lugar.

En algunos casos, incluso puede aumentar la presión sobre ese nuevo cuello de botella.

No basta con preguntar cuánto acelera una herramienta.

Hay que preguntar qué cambia en el comportamiento del conjunto cuando la introducimos.

## Cada uno ve un sistema diferente

Hasta ahora hemos hablado de servicios, colas y controladores.

Pero los sistemas de software también están formados por personas.

Y las personas no disponemos de una visión completa de aquello en lo que participamos.

Un desarrollador conoce bien su servicio. Un arquitecto observa las dependencias principales. Un Product Owner entiende las necesidades del producto. Un responsable de plataforma ve restricciones operativas que otros equipos apenas conocen.

Cada uno trabaja con información parcial.

Cada uno construye un modelo mental del sistema.

Y cada uno toma decisiones que pueden tener sentido desde su posición.

Esta es una de las razones por las que Meadows considera tan importantes los flujos de información.

No basta con tener datos.

Importa quién puede verlos, cuándo llegan y qué decisiones permiten tomar.

Imaginemos que un equipo mide su éxito mediante la latencia de su API.

Otro lo mide mediante el coste de infraestructura.

Un tercero, mediante la frecuencia de despliegue.

Y otro, mediante la disponibilidad del checkout.

Todos pueden cumplir sus objetivos y seguir perjudicándose mutuamente.

El equipo de infraestructura reduce capacidad para ahorrar costes. El servicio aumenta su latencia. Los clientes reintentan. El equipo de API incorpora más caché. La información queda desactualizada y el checkout empieza a rechazar operaciones.

Cada equipo ha intentado mejorar algo.

Nadie ha diseñado deliberadamente el resultado final.

Este tipo de comportamiento conecta con la racionalidad limitada: tomamos decisiones con la información, los objetivos y la capacidad de comprensión de los que disponemos.

No es una excusa para las malas decisiones.

Es una advertencia sobre los límites de nuestras buenas decisiones.

Y aquí la ley de Conway adquiere una dimensión distinta.

Melvin Conway [observó en 1968](https://www.melconway.com/Home/Committees_Paper.html) que los diseños de los sistemas tienden a reflejar las estructuras de comunicación de las organizaciones que los construyen.

No es simplemente que un organigrama produzca una arquitectura.

Es que la forma en que circula la información condiciona qué dependencias vemos, cuáles ignoramos y qué soluciones nos parecen naturales.

Si dos equipos apenas se comunican, difícilmente podrán optimizar conjuntamente aquello que ni siquiera saben que comparten.

Podemos mejorar sus herramientas.

Podemos cambiar su estructura.

Pero si no entendemos cómo se toman las decisiones y cómo circula la información, quizá terminemos reproduciendo el mismo problema con nombres diferentes.

## Lo que un sistema hace importa más que lo que decimos que hace

Meadows distingue entre los objetivos declarados y el comportamiento real de un sistema.

Una organización puede afirmar que quiere calidad, innovación y autonomía.

Pero si sus prácticas favorecen únicamente las entregas inmediatas, la reducción del coste a corto plazo y la aprobación centralizada de decisiones, esas prácticas tendrán consecuencias.

No hace falta buscar un villano.

Los sistemas complejos pueden producir resultados que ninguno de sus participantes desea.

Esto también ocurre fuera del software.

[Jenofonte describió](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) cómo la educación espartana estaba organizada alrededor de la disciplina y la resistencia física de los futuros ciudadanos varones.

Aristóteles, en su [*Política*](https://classics.mit.edu/Aristotle/politics.8.eight.html), relacionó explícitamente la educación con la forma de gobierno.

Y en la [*Ética a Nicómaco*](https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html) desarrolló una idea que sigue siendo relevante: adquirimos hábitos mediante la práctica repetida.

La conexión con Meadows no es que los hábitos sean literalmente stocks medibles como el agua de una bañera.

Es que las estructuras y las prácticas recurrentes influyen sobre los comportamientos que un sistema acaba produciendo.

Una escuela puede declarar que valora la autonomía, pero ofrecer pocas oportunidades para tomar decisiones.

Una empresa puede defender la colaboración y organizar sus incentivos alrededor de resultados exclusivamente individuales.

Un equipo de ingeniería puede afirmar que valora la simplicidad y seguir introduciendo abstracciones que nadie necesita.

En todos esos casos hay una diferencia entre la intención y el comportamiento que las prácticas favorecen.

Y esa diferencia merece ser investigada.

Porque un sistema no necesita ser consciente de sus contradicciones para reproducirlas.

## El problema de nuestros modelos mentales

Hay una tentación bastante habitual cuando descubrimos el pensamiento sistémico: empezar a ver bucles de retroalimentación por todas partes.

Todo parece conectado. Cualquier problema se convierte en una consecuencia de otro problema. Y cada decisión puede explicarse mediante una flecha que apunta a otra flecha.

Eso también tiene sus peligros.

Un diagrama causal no demuestra que hayamos comprendido un sistema.

Podemos dibujar una relación convincente que no exista, ignorar una variable importante o confundir correlación con causalidad.

Los sistemas reales contienen relaciones no lineales, retrasos, restricciones físicas, incertidumbre y comportamientos que cambian según las condiciones.

Además, los modelos siempre dejan cosas fuera.

Sterman tituló uno de sus trabajos *All Models Are Wrong*, recuperando una idea conocida en modelización: un modelo no necesita representar toda la realidad para ser útil, pero sí debe ser adecuado para la pregunta que queremos responder.

Esto obliga a ser más exigentes.

Si creemos que la deuda técnica está reduciendo nuestra capacidad de entrega, podemos estudiar cómo evolucionan los tiempos de cambio, los defectos, el trabajo de mantenimiento y las dependencias.

Si sospechamos que los reintentos están amplificando una caída, podemos observar tasas de peticiones, errores, latencias y carga antes y después de aplicar límites.

Si pensamos que nuestra estructura organizativa está perjudicando una arquitectura, podemos examinar las dependencias reales entre equipos y los tiempos de coordinación.

El pensamiento sistémico no sustituye la evidencia.

Nos ayuda a formular preguntas mejores sobre qué evidencia necesitamos.

## Dejar de mejorar piezas no es la solución

Sería absurdo concluir que optimizar componentes carece de sentido.

Un algoritmo ineficiente sigue siendo ineficiente. Una consulta mal diseñada puede saturar una base de datos. Un servicio con errores necesita correcciones.

La ingeniería de calidad importa.

Lo que Meadows nos obliga a cuestionar es otra cosa: nuestra tendencia a asumir que mejorar las partes equivale necesariamente a mejorar el conjunto.

A veces sí.

Otras veces, el comportamiento está dominado por una interconexión, una acumulación, un retraso o un bucle de retroalimentación que no hemos visto.

Y en esos casos, la excelencia local puede resultar insuficiente.

Incluso contraproducente.

Quizá el servicio no necesita responder más rápido, sino dejar de recibir peticiones innecesarias.

Quizá el equipo no necesita producir más cambios, sino reducir el trabajo que mantiene abierto.

Quizá la arquitectura no necesita otra abstracción, sino eliminar una dependencia.

Quizá el problema no está en quién toma las decisiones, sino en qué información tiene disponible cuando debe tomarlas.

Ninguna de estas respuestas puede deducirse de una regla universal.

Hay que estudiar el sistema concreto.

Su estructura.

Sus acumulaciones.

Sus mecanismos de retroalimentación.

Sus retrasos.

Y los objetivos que su comportamiento revela.

La próxima vez que una plataforma funcione mal, seguramente encontraremos alguna pieza que podamos mejorar.

Siempre hay alguna.

La pregunta interesante es si esa mejora cambiará realmente el comportamiento del sistema.

Porque podemos tener código excelente, una arquitectura elegante y equipos extraordinariamente competentes.

Y seguir construyendo algo que funciona fatal.

**Lo inquietante no es que eso sea posible. Es que podemos pasar años perfeccionando las piezas sin llegar a entender por qué ocurre.**

## Referencias y lecturas recomendadas

- **Bathtubs 101** (fragmento de *Thinking in Systems*, borrador), Donella H. Meadows, Donella Meadows Project, borrador sin fecha. <https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf>. Fuente de la definición de stock, de los principios de la bañera y de los stocks como retrasos y amortiguadores. Es un borrador anterior a la publicación, no el texto de 2008.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Fuente de los resultados de la bañera y de los grandes almacenes (estudios en el aula, no estimaciones para una población).
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Fuente original de la metáfora de la deuda citada.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. Fuente de la distinción entre deuda prudente y temeraria.
- **Constitution of the Lacedaimonians, ch. 2**, Xenophon, trad. E. C. Marchant, Perseus Digital Library (Loeb), 1925. <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. Relato de primera mano sobre la educación de los niños espartanos, escrito por un admirador de Esparta.
- **Politics, Book VIII**, Aristotle, trad. Benjamin Jowett, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/politics.8.eight.html>. La educación ajustada a la forma de gobierno.
- **Nicomachean Ethics, Book II**, Aristotle, trad. W. D. Ross, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. El hábito como producto de la práctica repetida, formado por los legisladores.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, abril de 1968. <https://www.melconway.com/Home/Committees_Paper.html>. El enunciado original de lo que acabó llamándose ley de Conway.
- **Conway's Law**, Martin Fowler, 2022. <https://martinfowler.com/bliki/ConwaysLaw.html>. Un repaso desde la práctica; basado en la experiencia, no empírico.

Las citas de textos en inglés son traducción propia.
