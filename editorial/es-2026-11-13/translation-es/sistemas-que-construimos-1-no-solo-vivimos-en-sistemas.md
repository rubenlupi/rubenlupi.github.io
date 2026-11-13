---
title: "No solo vivimos en sistemas. Los creamos."
description: "Stocks, flujos y propósito: por qué el comportamiento de un sistema nace de lo que se acumula en él, desde la infancia espartana hasta la arquitectura de software."
date: 2026-11-13
editorialDate: 2026-11-02
series: break-and-change
seriesPart:
  title: "Los sistemas que construimos, los sistemas en que vivimos"
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
tags: ["Systems Thinking", "Stocks and Flows", "Conway's Law", "Ancient Greece", "Education"]
lang: es
translationOf: systems-we-build-1-we-create-them
draft: true
---

Dos supuestos subyacen a buena parte de cómo dirigimos equipos, escuelas y planes de entrenamiento. El primero: si cada parte mejora, el conjunto mejora. El segundo: si los resultados son malos, alguien no está trabajando lo bastante duro.

Esta serie sostiene que ambos pueden fallar, y que fallan por una razón que se puede describir. Este primer artículo trata de esa razón. El comportamiento de un sistema nace de lo que se acumula en su interior y de lo que recompensa, no de lo buenas que parezcan sus partes ni de lo que diga su declaración de misión.

*Sobre las fuentes. Esta serie dialoga con las ideas de Donella Meadows tal como aparecen en fuentes de acceso legal (un extracto en borrador de* Thinking in Systems *publicado por el Donella Meadows Project, sus ensayos e investigación independiente sobre sistemas), no como una reseña del libro completo. La serie no tuvo acceso al texto íntegro, así que no describe capítulos que no ha visto.*

## Una bañera es mejor modelo que una lista de tareas

Empecemos por el objeto más simple del pensamiento sistémico. En un extracto en borrador de *Thinking in Systems* [publicado por el Donella Meadows Project](https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf), Meadows define un stock como «una reserva, una cantidad de material o de información que se ha ido acumulando con el tiempo». Un stock, o acumulación, es todo lo que se ha ido apilando: agua en una bañera, dinero en una cuenta, pull requests sin revisar en una cola. El mismo extracto describe los stocks como «acumulaciones, o integrales, de flujos».

Los flujos son las tasas que lo llenan o lo vacían. En un pequeño intervalo Δt, la aritmética es:

```
stock(t + Δt) = stock(t) + (inflow − outflow) · Δt
```

En tiempo continuo, el mismo enunciado es una derivada:

```
d(stock)/dt = inflow(t) − outflow(t)
```

Nada de esto es profundo. Las consecuencias sí. El stock sube mientras el flujo de entrada supera al de salida, baja en el caso contrario, y se mantiene estable, en la expresión del extracto «equilibrio dinámico», cuando ambos coinciden. El extracto también hace una observación fácil de olvidar cuando una cifra parece incorrecta: «Un stock puede aumentarse disminuyendo su tasa de salida tanto como aumentando su tasa de entrada».

Otras dos propiedades importan para lo que sigue. El extracto dice que los stocks «cambian solo lentamente, nunca de golpe, aunque las tasas que entran o salen de ellos cambien de golpe. Por tanto, los stocks actúan como retrasos en los sistemas». Y son amortiguadores: «La presencia de stocks permite que los flujos sean independientes, desacoplados y fiables».

(Una cautela sobre la procedencia. Este extracto está etiquetado como borrador previo a la publicación, así que su redacción puede diferir de la edición de 2008. Atribuyo estas líneas al extracto, nada más.)

## Personas muy formadas interpretan mal la acumulación

Cabría esperar que esto fuera obvio. John Sterman, un científico de sistemas que estudió con Meadows, [informa de lo contrario](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf). En sus estudios en el aula, solo el 36 % de los estudiantes de posgrado del MIT dibujó correctamente el nivel de agua de una bañera a partir de su flujo de entrada y de salida. En una tarea con unos grandes almacenes, el 42 % y el 30 % respondieron correctamente a las dos preguntas sobre el stock, mientras que el 94 % leyó correctamente el propio gráfico de flujos.

Fíjate bien en este último par. Las personas saben leer las tasas. Les cuesta convertir las tasas en acumulación. Son resultados de las clases de un solo profesor, no una estimación sobre una población, pero lo importante es el patrón: el stock es la parte que no vemos.

## Dónde se esconden los stocks en el software

Lo que sigue es mi interpretación, no algo que el extracto diga sobre el software.

El trabajo en curso es un stock. Las llegadas son un flujo; las finalizaciones, otro. Un equipo que está «ocupado» puede tener simplemente un flujo de entrada que lleva meses superando al de salida, y la cola es la memoria de ello.

Aplica la ecuación. Mientras las llegadas superen a las finalizaciones por poco que sea, la cola crece en cada intervalo, por muy ocupada que se sienta la gente. Y la observación del extracto sobre la salida tiene una imagen especular: reducir las llegadas actúa sobre el mismo stock que aumentar las finalizaciones. Presionar a la gente para que termine más rápido y rechazar o aplazar trabajo nuevo son dos asas de una misma bañera. Ese es el argumento de stocks y flujos para limitar el trabajo en curso. El hábito práctico que sugiere es preguntarse, ante cualquier cola y antes de preguntar quién es lento, qué flujo es mayor.

La deuda técnica es también un stock, con una salvedad importante: «deuda» es una metáfora y no tiene una única unidad de medida. El [informe de experiencia original](https://c2.com/doc/oopsla92.html) de Ward Cunningham lo expresó así: «Entregar código a la primera es como endeudarse», y «Cada minuto dedicado a código que no está del todo bien cuenta como interés de esa deuda». Martin Fowler añadió después que [«la distinción útil no es entre deuda y no deuda, sino entre deuda prudente e imprudente»](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), y la cruzó con si la deuda era deliberada o inadvertida. Así que el stock tiene más de un flujo de entrada, y algunos no los eligió nadie.

Leo ambos como stocks cuyo agotamiento o crecimiento es tardío y difícil de observar. Es una lectura editorial de esas fuentes, no un resultado medido.

## La estructura sigue al propósito

Los stocks explican el comportamiento. El propósito explica por qué los stocks se llenan de lo que se llenan. La educación hace el argumento especialmente visible, porque sus propósitos se discutieron por escrito.

Jenofonte, un ateniense que admiraba a Esparta, [describe](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) cómo los niños espartanos eran puestos bajo un magistrado, el «Warden» (el celador), tomado de la clase que ocupaba los cargos más altos, en lugar de los tutores esclavos elegidos por cada padre. Iban descalzos, recibían una sola prenda al año y se les racionaba la comida, con cierta tolerancia hacia el robo. Los demás griegos, dice, enviaban a sus hijos con maestros de letras, de música y de lucha.

Aristóteles, en la *Política*, [sostiene](http://classics.mit.edu/Aristotle/politics.8.eight.html) que el legislador debe atender ante todo a la educación de los jóvenes, y que el ciudadano debe ser «moldeado para adaptarse a la forma de gobierno bajo la que vive». El Sócrates de Platón, en la [*República*](http://classics.mit.edu/Plato/republic.8.vii.html), empuja desde otro lado: la educación no consiste en poner conocimiento en el alma «como la vista en ojos ciegos», y «el conocimiento que se adquiere por la fuerza no se asienta en la mente».

Tres límites. Jenofonte idealiza Esparta, de modo que su relato es el retrato de un admirador. Los tres autores describen a varones ciudadanos, y aquí no digo nada sobre quién tenía en la práctica acceso a la escuela, porque las fuentes usadas en esta serie no lo zanjan. Y la observación de Platón procede de una discusión sobre la educación de los guardianes en una ciudad ideal, no de una teoría general de la escolarización.

Mi interpretación, entonces, con esos límites en su sitio: Esparta y Atenas organizaron la infancia de forma distinta porque perseguían objetivos cívicos distintos. La estructura siguió al propósito. Un stock que sí puedo nombrar procede de Aristóteles, en la [*Ética a Nicómaco*](http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html): «la virtud moral resulta del hábito», y «los legisladores hacen buenos a los ciudadanos formando hábitos en ellos». Leo el hábito como una acumulación construida por la práctica repetida, es decir, un stock en el sentido anterior, y la rutina diaria de una escuela como el flujo de entrada que un legislador puede diseñar. Esa lectura es mía, no el vocabulario de Aristóteles. No estoy extrayendo una fábula moral sobre dos ciudades.

## El eco en el software

El software tiene su propia versión, muy citada. En 1968, Melvin Conway [escribió](https://www.melconway.com/Home/Committees_Paper.html) que las organizaciones que diseñan sistemas están condicionadas a producir diseños que son «copias de las estructuras de comunicación» de esas organizaciones. La [visión general](https://martinfowler.com/bliki/ConwaysLaw.html) de Fowler señala que esto se ha usado de forma deliberada, la «maniobra inversa de Conway» (*Inverse Conway Maneuver*), y advierte de que no es una solución rápida para sistemas heredados rígidos. Su respaldo es la experiencia, no la investigación empírica, y yo mantendría la afirmación a ese mismo nivel.

Si la escolarización griega y la arquitectura de software funcionan por el mismo mecanismo es otra cuestión. No necesitan hacerlo. El paralelo que establezco es una analogía: ambas instituciones responden a una pregunta sobre qué optimizar, y la respuesta se manifiesta en la estructura antes de que nadie la ponga por escrito.

## Por qué esta es la primera ruptura

Si el comportamiento de un sistema reside en sus stocks y en sus recompensas, no puedes leerlo a partir de sus partes. Un equipo con ingenieros excelentes puede tener aun así una cola creciente. Una escuela con una declaración de misión noble puede seguir enseñando lo que su estructura premia. El próximo artículo pregunta qué ocurre cuando cada parte se mejora en sus propios términos, y el siguiente, por qué las personas inteligentes siguen repitiendo el patrón.

Por ahora, una pregunta. ¿Qué ocurre cuando optimizamos un sistema sin cuestionar jamás para qué sirve?

## Referencias y lecturas recomendadas

- **Bathtubs 101** (extracto de *Thinking in Systems*, borrador), Donella H. Meadows, Donella Meadows Project, borrador sin fecha. <https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf>. Fuente de la definición de stocks, de los principios de la bañera y de los stocks como retrasos y amortiguadores. Un borrador previo a la publicación, no el texto de 2008.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Fuente de los resultados de la bañera y de los grandes almacenes (estudios en el aula, no estimaciones poblacionales).
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Fuente original de la metáfora de la deuda citada arriba.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. Fuente de la distinción entre deuda prudente e imprudente.
- **Constitution of the Lacedaimonians, ch. 2**, Xenophon, trad. E. C. Marchant, Perseus Digital Library (Loeb), 1925. <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. Relato primario de la educación de la infancia espartana, escrito por un admirador de Esparta.
- **Politics, Book VIII**, Aristotle, trad. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/politics.8.eight.html>. Una educación ajustada a la forma de gobierno.
- **The Republic, Book VII**, Plato, trad. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Plato/republic.8.vii.html>. Educación y coacción, en el contexto de una ciudad ideal.
- **Nicomachean Ethics, Book II**, Aristotle, trad. W. D. Ross, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. El hábito como producto de la práctica repetida, formado por los legisladores.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, abril de 1968. <https://www.melconway.com/Home/Committees_Paper.html>. El enunciado original de lo que pasó a conocerse como la ley de Conway.
- **Conway's Law**, Martin Fowler, 2022. <https://martinfowler.com/bliki/ConwaysLaw.html>. Una visión general de un profesional; basada en la experiencia, no empírica.

Las citas de textos en inglés son traducción propia.
