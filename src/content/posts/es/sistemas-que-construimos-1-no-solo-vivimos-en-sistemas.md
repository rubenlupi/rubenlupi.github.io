---
title: "No solo vivimos en sistemas: también los creamos"
description: "Stocks, flujos y propósito: por qué la conducta de un sistema nace de lo que se acumula en él, de la infancia en Esparta a la arquitectura de software."
date: 2026-11-13
editorialDate: 2026-11-02
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
draft: true
---

Casi todo lo que hacemos al dirigir equipos, escuelas o planes de entrenamiento descansa en dos supuestos: que si cada parte mejora, mejora el conjunto, y que si los resultados son malos es porque alguien no se esfuerza lo suficiente.

Esta serie sostiene que los dos pueden fallar, y que fallan por una razón que se puede describir. De esa razón trata esta primera entrega. La conducta de un sistema nace de lo que se acumula dentro de él y de lo que recompensa, no de lo buenas que parezcan sus piezas ni de lo que proclame su declaración de misión.

*Sobre las fuentes. Esta serie trabaja con las ideas de Donella Meadows tal como aparecen en fuentes de acceso legal (un fragmento de un borrador de* Thinking in Systems *publicado por el Donella Meadows Project, sus ensayos e investigación independiente sobre sistemas); no es una reseña del libro completo. La serie no ha tenido acceso al texto íntegro, así que no describe capítulos que no ha visto.*

## Una bañera explica más que una lista de tareas

Conviene empezar por lo más básico del pensamiento sistémico. En un fragmento de un borrador de *Thinking in Systems* [publicado por el Donella Meadows Project](https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf), Meadows define el stock, o acumulación, como «una reserva, una cantidad de material o de información que se ha ido acumulando con el tiempo». Es todo aquello que se amontona: el agua de una bañera, el dinero de una cuenta, las *pull requests* que esperan revisión en una cola. El mismo fragmento describe los stocks como «acumulaciones, o integrales, de flujos».

Los flujos son los ritmos a los que el stock se llena o se vacía. En un intervalo pequeño, Δt, la cuenta es esta:

```
stock(t + Δt) = stock(t) + (entrada − salida) · Δt
```

En tiempo continuo, lo mismo se escribe como una derivada:

```
d(stock)/dt = entrada(t) − salida(t)
```

No hay nada profundo en ello; lo profundo son las consecuencias. El stock sube mientras el flujo de entrada supera al de salida, baja en el caso contrario y se mantiene estable cuando los dos se igualan, en lo que el fragmento llama «equilibrio dinámico». El texto recuerda además algo que se olvida con facilidad cuando una cifra no cuadra: «Un stock puede aumentarse tanto reduciendo su ritmo de salida como aumentando su ritmo de entrada».

Para lo que viene después importan otras dos propiedades. Según el fragmento, los stocks «cambian solo lentamente, nunca de repente, aunque los ritmos de entrada o de salida cambien de repente. Por eso los stocks actúan como retrasos en los sistemas». Y hacen de amortiguadores: «La presencia de stocks permite que los flujos sean independientes, desacoplados y fiables».

(Una advertencia sobre la procedencia: el fragmento figura como borrador previo a la publicación, así que su redacción puede no coincidir con la de la edición de 2008. Atribuyo estas frases al fragmento y a nada más.)

## Incluso la gente muy formada lee mal la acumulación

Cabría pensar que todo esto es evidente. John Sterman, científico de sistemas que estudió con Meadows, [cuenta lo contrario](https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf). En sus estudios en el aula, solo el 36 % de los estudiantes de posgrado del MIT dibujó bien el nivel de agua de una bañera a partir de sus flujos de entrada y de salida. En un ejercicio sobre unos grandes almacenes, el 42 % y el 30 % acertaron las dos preguntas sobre el stock, mientras que el 94 % interpretó correctamente la propia gráfica de flujos.

Merece la pena fijarse en ese contraste. La gente sabe leer los ritmos; lo que le cuesta es convertirlos en acumulación. Son resultados de las clases de un solo profesor, no una estimación válida para toda la población, pero lo que cuenta es el patrón: el stock es la parte que no vemos.

## Dónde se esconden los stocks en el software

Lo que sigue es interpretación mía, no algo que el fragmento diga sobre el software.

El trabajo en curso es un stock. Lo que llega es un flujo, y lo que se termina, otro. Un equipo que anda «muy ocupado» quizá solo tenga, desde hace meses, más entrada que salida, y la cola es la memoria de ese desfase.

Si se aplica la ecuación, mientras lleguen más tareas de las que se terminan, por poco que sea, la cola crece en cada intervalo, por mucho que la gente se sienta atareada. Y lo que el fragmento dice sobre la salida tiene su reverso: frenar lo que llega actúa sobre el mismo stock que acelerar lo que sale. Apretar para que se termine antes y rechazar o aplazar trabajo nuevo son dos maneras de actuar sobre la misma bañera. Ese es, en términos de stocks y flujos, el argumento para limitar el trabajo en curso, y el hábito práctico que sugiere es preguntarse ante cualquier cola, antes de averiguar quién va lento, qué flujo es mayor.

La deuda técnica también es un stock, con una salvedad importante: «deuda» es una metáfora y no tiene una única unidad de medida. Ward Cunningham lo planteaba así en su [informe de experiencia original](https://c2.com/doc/oopsla92.html): «Entregar código en su primera versión es como endeudarse», y «Cada minuto dedicado a código que no está del todo bien cuenta como intereses de esa deuda». Más tarde, Martin Fowler añadió que [«la distinción útil no es entre deuda y ausencia de deuda, sino entre deuda prudente y deuda temeraria»](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), y la cruzó con otra: si la deuda se contrajo a sabiendas o sin darse cuenta. El stock tiene, por tanto, más de un flujo de entrada, y algunos no los eligió nadie.

Leo ambos casos como stocks que se vacían o crecen con retraso y de forma difícil de observar. Es una lectura editorial de esas fuentes, no un resultado medido.

## La estructura sigue al propósito

Los stocks explican la conducta; el propósito explica por qué se llenan de lo que se llenan. La educación lo deja ver con una claridad poco habitual, porque sus fines se discutieron por escrito.

Jenofonte, un ateniense admirador de Esparta, [describe](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2) cómo allí los muchachos quedaban a cargo de un magistrado, al que la traducción inglesa llama «Warden» (algo así como el supervisor), elegido entre la clase que ocupaba los cargos más altos, en lugar de preceptores esclavos escogidos por cada padre. Iban descalzos, recibían una sola prenda al año y comían con la ración medida, aunque se les toleraba cierta dosis de robo. Los demás griegos, dice, mandaban a sus hijos a maestros de letras, de música y de lucha.

Aristóteles, en la *Política*, [sostiene](http://classics.mit.edu/Aristotle/politics.8.eight.html) que el legislador debe ocuparse ante todo de la educación de los jóvenes, y que el ciudadano debe ser «moldeado conforme a la forma de gobierno bajo la que vive». El Sócrates de Platón, en la [*República*](http://classics.mit.edu/Plato/republic.8.vii.html), empuja desde otro lado: educar no es meter conocimiento en el alma «como quien pone vista en unos ojos ciegos», y «el conocimiento que se adquiere por obligación no arraiga en la mente».

Conviene tener presentes tres límites. Jenofonte idealiza Esparta, de modo que su relato es el retrato de un admirador. Los tres autores hablan de varones ciudadanos, y aquí no digo nada sobre quién podía ir a la escuela en la práctica, porque las fuentes de esta serie no lo resuelven. Y la observación de Platón sale de una discusión sobre cómo educar a los guardianes de una ciudad ideal, no de una teoría general de la enseñanza.

Con esos límites presentes, mi interpretación es que Esparta y Atenas organizaban la infancia de forma distinta porque perseguían fines cívicos distintos: la estructura seguía al propósito. Hay un stock al que puedo poner nombre gracias a Aristóteles, en la [*Ética a Nicómaco*](http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html): «la virtud moral es fruto del hábito», y «los legisladores hacen buenos a los ciudadanos formando en ellos hábitos». Entiendo el hábito como una acumulación que se va formando con la práctica repetida, es decir, un stock en el sentido de antes, y la rutina diaria de una escuela como el flujo de entrada que un legislador puede diseñar. Esa lectura es mía; el vocabulario no es de Aristóteles. Tampoco pretendo sacar de aquí una fábula moral sobre dos ciudades.

## El eco en el software

El software tiene su propia versión, muy citada. En 1968, Melvin Conway [escribió](https://www.melconway.com/Home/Committees_Paper.html) que las organizaciones que diseñan sistemas se ven obligadas a producir diseños que son «copias de las estructuras de comunicación» de esas mismas organizaciones. En su [repaso del tema](https://martinfowler.com/bliki/ConwaysLaw.html), Fowler señala que la idea se ha aprovechado de forma deliberada, en la llamada «maniobra inversa de Conway» (*Inverse Conway Maneuver*), y advierte de que no es un remedio rápido para sistemas heredados rígidos. Fowler se apoya en la experiencia, no en investigación empírica, y yo tampoco llevaría la afirmación más allá.

Otra cuestión es si la escuela griega y la arquitectura de software funcionan con el mismo mecanismo, y no hace falta que así sea. El paralelismo que trazo es una analogía: las dos instituciones responden a una pregunta sobre qué optimizar, y la respuesta aparece en la estructura antes de que nadie la ponga por escrito.

## Por qué la primera ruptura es esta

Si la conducta de un sistema reside en sus stocks y en lo que recompensa, no puede deducirse de sus piezas. Un equipo de ingenieros excelentes puede tener una cola que no deja de crecer, y una escuela con una misión de lo más noble puede acabar enseñando lo que su estructura premia. La próxima entrega se pregunta qué ocurre cuando cada parte se mejora según sus propios criterios; la siguiente, por qué gente inteligente sigue repitiendo el patrón.

De momento, una sola pregunta: ¿qué pasa cuando optimizamos un sistema sin preguntarnos nunca para qué sirve?

## Referencias y lecturas recomendadas

- **Bathtubs 101** (fragmento de *Thinking in Systems*, borrador), Donella H. Meadows, Donella Meadows Project, borrador sin fecha. <https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf>. Fuente de la definición de stock, de los principios de la bañera y de los stocks como retrasos y amortiguadores. Es un borrador previo a la publicación, no el texto de 2008.
- **All models are wrong: reflections on becoming a systems scientist**, John D. Sterman, System Dynamics Review 18(4), 2002. <https://www.mit.edu/~jsterman/All_Models_Are_Wrong_%28SDR%29.pdf>. Fuente de los resultados de la bañera y de los grandes almacenes (estudios en el aula, no estimaciones para la población).
- **The WyCash Portfolio Management System (OOPSLA '92 Experience Report)**, Ward Cunningham, 1992. <https://c2.com/doc/oopsla92.html>. Fuente original de la metáfora de la deuda citada.
- **Technical Debt Quadrant**, Martin Fowler, 2009. <https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>. Fuente de la distinción entre deuda prudente y temeraria.
- **Constitution of the Lacedaimonians, ch. 2**, Xenophon, trad. E. C. Marchant, Perseus Digital Library (Loeb), 1925. <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0210%3Atext%3DConst.+Lac.%3Achapter%3D2>. Testimonio directo sobre la educación de los muchachos espartanos, escrito por un admirador de Esparta.
- **Politics, Book VIII**, Aristotle, trad. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/politics.8.eight.html>. Una educación ajustada a la forma de gobierno.
- **The Republic, Book VII**, Plato, trad. Benjamin Jowett, MIT Internet Classics Archive. <http://classics.mit.edu/Plato/republic.8.vii.html>. La educación y la obligación, en el contexto de una ciudad ideal.
- **Nicomachean Ethics, Book II**, Aristotle, trad. W. D. Ross, MIT Internet Classics Archive. <http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html>. El hábito como fruto de la práctica repetida, formado por los legisladores.
- **How Do Committees Invent?**, Melvin E. Conway, Datamation, abril de 1968. <https://www.melconway.com/Home/Committees_Paper.html>. La formulación original de lo que acabó conociéndose como ley de Conway.
- **Conway's Law**, Martin Fowler, 2022. <https://martinfowler.com/bliki/ConwaysLaw.html>. El repaso de un profesional; basado en la experiencia, no en datos empíricos.

Las citas de textos en inglés son traducción propia.
