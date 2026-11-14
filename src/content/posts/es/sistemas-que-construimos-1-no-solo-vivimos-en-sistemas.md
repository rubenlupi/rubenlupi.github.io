---
title: "La misión no manda. Manda la bañera."
description: "La mayoría de los estudiantes de posgrado del MIT que pasaron por las clases de John Sterman no supieron dibujar el nivel del agua de una bañera. Por qué un sistema se comporta según lo que acumula y lo que premia, desde la infancia espartana hasta tu cola de pull requests."
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
tags: ["Systems Thinking", "Stocks and Flows", "Conway's Law", "Ancient Greece", "Education"]
lang: es
translationOf: systems-we-build-1-we-create-them
draft: false
---

Enseña a unos estudiantes de posgrado del MIT una gráfica con el agua que entra y sale de una bañera, pídeles que dibujen cuánta agua hay dentro y la mayoría se equivocará. Les gana una bañera, ni más ni menos. Y eso importa mucho más allá del cuarto de baño, porque buena parte de lo que hacemos al llevar equipos, escuelas y planes de entrenamiento descansa en dos ideas: que si cada pieza mejora, mejora el todo, y que si los resultados son malos, es que alguien no se esfuerza bastante.

Las dos pueden fallar, y por un motivo que se puede explicar. Un sistema se comporta según lo que se acumula en su interior y lo que premia, no según lo bien que luzcan sus partes ni lo que diga su declaración de misión. La misión es esa parte del sistema que todo el mundo lee y nadie obedece.

No he tenido acceso al libro completo, así que lo que sigue se apoya en un fragmento de un borrador de *Thinking in Systems*, anterior a su publicación, que difunde el Donella Meadows Project, en los ensayos de Meadows y en investigación independiente sobre sistemas, y deja en paz los capítulos que no he visto.

## Una bañera explica más que una lista de tareas

Lo más elemental del pensamiento sistémico es el stock, o acumulación. En un fragmento de un borrador de *Thinking in Systems* [que publica el Donella Meadows Project](https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf), Meadows lo define como «una reserva, una cantidad de material o de información que se ha ido acumulando con el tiempo»: el agua de una bañera, el dinero de una cuenta, los pull requests que esperan revisión en una cola. El mismo texto llama a los stocks «acumulaciones, o integrales, de flujos». Los flujos son los ritmos a los que un stock se llena o se vacía, y en un intervalo pequeño Δt la cuenta es esta:

```
stock(t + Δt) = stock(t) + (entrada − salida) · Δt
```

En tiempo continuo se convierte en una derivada:

```
d(stock)/dt = entrada(t) − salida(t)
```

El álgebra es sencilla; las consecuencias, no tanto. El stock sube mientras entra más de lo que sale, baja en el caso contrario y se mantiene cuando ambos flujos se igualan, un estado que el fragmento llama «equilibrio dinámico». Recuerda además algo que se olvida con facilidad cuando una cifra no cuadra: «Un stock puede aumentarse tanto reduciendo su flujo de salida como aumentando su flujo de entrada». Toda bañera tiene tapón, y los planes para subir un número suelen olvidar que existe.

Los stocks «cambian solo despacio, nunca de golpe, aunque los flujos que entran o salen de ellos cambien de golpe. Por eso los stocks actúan como retrasos en los sistemas». Y sirven de colchón: «La presencia de stocks permite que los flujos sean independientes, estén desacoplados y sean fiables».

## Gente lista que mira el grifo y no ve la bañera

Cabría esperar que todo esto fuera obvio. John Sterman, científico de sistemas que estudió con Meadows, [cuenta otra cosa](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf). En sus estudios en el aula, solo el 36 % de los estudiantes de posgrado del MIT dibujó bien el nivel de agua de una bañera a partir de lo que entraba y lo que salía. En una tarea sobre unos grandes almacenes, el 42 % y el 30 % acertaron, respectivamente, las dos preguntas sobre stocks, mientras que el 94 % leyó correctamente la propia gráfica de flujos.

Son las clases de un solo profesor, no una población más amplia, pero el patrón salta a la vista. Casi todo el mundo sabe decirte a qué velocidad corre el agua; muchos menos, si el baño está a punto de inundarse.

## Dónde esconde el software sus bañeras

El fragmento no dice nada de software, así que a partir de aquí la lectura es mía.

El trabajo en curso es un stock: lo llenan las llegadas y lo vacían las tareas terminadas. Un equipo que se siente saturado quizá solo lleve meses recibiendo más de lo que despacha. La cola recuerda cada promesa que la hoja de ruta ha olvidado.

La ecuación no perdona. Mientras las llegadas superen a las finalizaciones, por poco que sea, la cola crece en cada intervalo. Terminar más deprisa y rechazar o aplazar trabajo nuevo son dos mandos de una misma bañera, y ese es el argumento de los stocks y los flujos para limitar el trabajo en curso. Así que, antes de preguntar quién va lento, pregunta qué flujo es mayor. Es una pregunta menos satisfactoria, porque la respuesta rara vez es una persona.

La deuda técnica también es un stock, aunque «deuda» sea una metáfora sin una unidad de medida única. Ward Cunningham lo planteó así en su [informe de experiencia original](https://c2.com/doc/oopsla92.html): «Entregar código escrito a la primera es como endeudarse», y «Cada minuto dedicado a código que no está del todo bien cuenta como intereses de esa deuda». Martin Fowler añadió más tarde que [«la distinción útil no es entre deuda y no deuda, sino entre deuda prudente y deuda temeraria»](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), y la cruzó con otra: si la deuda se contrajo a propósito o sin darse cuenta. El stock tiene, pues, más de un flujo de entrada, y algunos no los eligió nadie. Los intereses se cobran igual.

## La estructura delata el propósito

Los stocks explican el comportamiento; el propósito explica por qué se llenan de lo que se llenan. La educación lo deja ver con especial claridad, porque sobre sus fines se discutió por escrito.

Jenofonte, un ateniense que admiraba Esparta, [describe](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) cómo los niños espartanos quedaban bajo la autoridad de un cargo público, el «Warden» de la traducción inglesa, elegido entre la clase que ocupaba las magistraturas más altas, en lugar de esclavos preceptores escogidos por cada padre. Iban descalzos, recibían una sola prenda al año y comían raciones medidas, con cierta tolerancia hacia el robo. Los demás griegos, dice, mandaban a sus hijos con maestros de letras, de música y de lucha. Fuera lo que fuera el sistema espartano, desde luego no tenía dudas sobre lo que quería.

Aristóteles, en la *Política*, [sostiene](https://classics.mit.edu/Aristotle/politics.8.eight.html) que el legislador debe ocuparse ante todo de la educación de los jóvenes y que el ciudadano ha de ser «moldeado según la forma de gobierno bajo la que vive». El Sócrates de Platón empuja desde otro lado en la [*República*](https://classics.mit.edu/Plato/republic.8.vii.html): educar no es meter conocimiento en el alma «como quien pone vista en unos ojos ciegos», y «el conocimiento adquirido por obligación no arraiga en la mente».

Cada testigo trae su letra pequeña. Lo de Jenofonte es el retrato de un admirador. Los tres hablan de ciudadanos varones, y quién recibía de verdad alguna enseñanza es una pregunta que estos textos no resuelven. La frase de Platón sale de una conversación sobre cómo educar a los guardianes de una ciudad ideal, no de una teoría general de la escuela.

Dentro de esos límites, mi interpretación es que Esparta y Atenas organizaron la infancia de forma distinta porque perseguían fines cívicos distintos: la estructura siguió al propósito. Aristóteles me da un stock al que puedo poner nombre en la [*Ética a Nicómaco*](https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html): «la virtud moral es fruto del hábito», y «los legisladores hacen buenos a los ciudadanos inculcándoles hábitos». Yo leo el hábito como una acumulación que se forma con la práctica repetida, y la rutina diaria de una escuela como el flujo de entrada que un legislador puede diseñar. El vocabulario es mío, no de Aristóteles, y esto no es ninguna fábula moral sobre dos ciudades.

## El software sale con el organigrama de serie

El software tiene su propia versión, muy citada. En 1968, Melvin Conway [escribió](https://www.melconway.com/Home/Committees_Paper.html) que las organizaciones que diseñan sistemas están abocadas a producir diseños que son «copias de las estructuras de comunicación» de esas mismas organizaciones. Fowler, en su [repaso del tema](https://martinfowler.com/bliki/ConwaysLaw.html), recuerda que hay quien lo ha aprovechado a propósito, con la llamada «maniobra inversa de Conway» (*Inverse Conway Maneuver*), y advierte de que no es un remedio rápido para sistemas heredados rígidos. Se apoya en la experiencia, no en investigación empírica, lo que deja la idea de reorganizar equipos para conseguir una arquitectura mejor justo donde vive la mayoría de los consejos sobre software.

La escuela griega y la arquitectura de software no tienen por qué compartir mecanismo; el paralelismo es una analogía. Las dos responden a la pregunta de qué optimizar, y la respuesta asoma en la estructura antes de que nadie la ponga por escrito.

## Un sistema no se lee en sus piezas

Un equipo de ingenieros excelentes puede tener una cola que no para de crecer. Una escuela con una misión de lo más noble puede acabar enseñando lo que su estructura pague, y la estructura, a diferencia de la misión, nunca se queda desfasada.

¿Qué ocurre cuando optimizamos un sistema sin preguntarnos nunca para qué sirve?

## Referencias y lecturas recomendadas

- **Bathtubs 101** (fragmento de *Thinking in Systems*, borrador), Donella H. Meadows, Donella Meadows Project, borrador sin fecha. <https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf>. Fuente de la definición de stock, de los principios de la bañera y de los stocks como retrasos y amortiguadores. Es un borrador anterior a la publicación, no el texto de 2008.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Fuente de los resultados de la bañera y de los grandes almacenes (estudios en el aula, no estimaciones para una población).
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Fuente original de la metáfora de la deuda citada.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. Fuente de la distinción entre deuda prudente y temeraria.
- **Constitution of the Lacedaimonians, ch. 2**, Xenophon, trad. E. C. Marchant, Perseus Digital Library (Loeb), 1925. <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. Relato de primera mano sobre la educación de los niños espartanos, escrito por un admirador de Esparta.
- **Politics, Book VIII**, Aristotle, trad. Benjamin Jowett, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/politics.8.eight.html>. La educación ajustada a la forma de gobierno.
- **The Republic, Book VII**, Plato, trad. Benjamin Jowett, MIT Internet Classics Archive. <https://classics.mit.edu/Plato/republic.8.vii.html>. Educación y obligación, en el contexto de una ciudad ideal.
- **Nicomachean Ethics, Book II**, Aristotle, trad. W. D. Ross, MIT Internet Classics Archive. <https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. El hábito como producto de la práctica repetida, formado por los legisladores.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, abril de 1968. <https://www.melconway.com/Home/Committees_Paper.html>. El enunciado original de lo que acabó llamándose ley de Conway.
- **Conway's Law**, Martin Fowler, 2022. <https://martinfowler.com/bliki/ConwaysLaw.html>. Un repaso desde la práctica; basado en la experiencia, no empírico.

Las citas de textos en inglés son traducción propia.
