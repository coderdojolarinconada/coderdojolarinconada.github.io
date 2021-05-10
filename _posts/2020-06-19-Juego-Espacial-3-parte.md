---
layout: post
title: Juego Espacial 3ª parte. Presentación del juego y mensajes entre componentes
categories: general
author: CoderDojo La Rinconada
anyo : "2020"
---

Hola a todos, continuamos esta semana con la tercera parte de nuestro juego espacial. Practicaremos con el cambio de escenarios y la pantalla de presentación de un juego, así como con el intercambio de mensajes entre componentes de un programa.

Crearemos una pantalla de inicio donde situaremos el titulo de nuestro juego y un botón(**jugar**), y al hacer clic sobre él,  enviaremos un mensaje al resto de componentes del juego. 

<br>
<span style="display:block;text-align:center">![pinicio]</span>
<br>

Lo primero será clonar el fondo principal del juego, nombrándolo como "Inicio". Posteriormente, pulsando sobre el botón de sprites y la opción pintar, crearemos un texto que nombraremos **"play"** con la palabra **"Jugar"** y utilizaremos el tipo de letra **"Marker"**. A este, le añadiremos una animación que aumentará su tamaño y tras esperar medio segundo, disminuirá al valor inicial. Además, al hacer clic sobre este, enviará un mensaje de inicio al resto de sprites y cambiará el fondo. El fondo **"Inicio"** es igual al **"principal"**, incluso no hubiera hecho falta cambiarlo, sin embargo, si fueran diferentes el fondo de presentación y el del juego, esta es la secuencia a seguir.
 
<br>
<span style="display:block;text-align:center">![cjugar]</span>
<br>

El siguiente paso, crear el título del juego en pantalla(**"Juego espacial"**). Lo crearemos de la misma forma que el anterior y utilizaremos el tipo de letra **"Pixel"**. Pero esta vez, no enviará mensaje de inicio, sino que lo recibirá al igual que el resto de sprites. Le añadimos una animación de cambio de color.Vemos el código.

<br>
<span style="display:block;text-align:center">![ctitulo]</span>
<br>

Tras ello, seleccionamos el sprite **"Rocketship"** de la biblioteca. Le añadimos el siguiente código. Como se observa, al recibir el mensaje de inicio, se esconde, para no estar presente en la pantalla principal durante la ejecución del juego. 

<br>
<span style="display:block;text-align:center">![crocket]</span>
<br>

Por último, modificaremos el código del astronauta y de la bola de carburante. Donde aparezca el bloque **"Al hacer clic en la bandera verde"** se deberá insertar el bloque **"al recibir Inicio"**.

<br>
<span style="display:block;text-align:center">![banderaVerde]({{site.baseurl}}/images/banderaVerde.png) ![flecha derecha]({{site.baseurl}}/images/flechad.png)![recibir]({{site.baseurl}}/images/recibir.png)</span>
<br>

Y en el código de la bola de carburante, además, deberemos esconder la variable **"puntos"** al inicio del juego y cuando se envíe el mensaje **"Inicio"**, deberá mostrarse. 

<br>
<span style="display:block;text-align:center">![código bola]({{site.baseurl}}/images/cball.png)</span>
<br>

Os dejo el video de [Juego Espacial 3ª parte](https://youtu.be/UZpajP--q3g){:target="_blank"} subido a nuestro canal y el [enlace](https://scratch.mit.edu/projects/405708862){:target="_blank"} al programa de Sratch en el que podáis introducir el código.

Espero que os guste y seguimos en contacto.


[pinicio]:/images/pinicio.png
[cjugar]:/images/cjugar.png
[ctitulo]:/images/ctitulo.png
[crocket]:/images/crocket.png







