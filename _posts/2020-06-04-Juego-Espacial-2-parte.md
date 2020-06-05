---
layout: post
title: Juego Espacial 2ª parte. Aceleración y cambios de escenario
categories: general
author: CoderDojo La Rinconada
---

Hola a todos, seguimos actualizando nuestro juego espacial que publicamos hace algunas semanas. Esta vez, vamos a aplicar una aceleración al astronauta y programaremos el cambio de escenario mediante un evento.

Crearemos dos variables que indicarán la velocidad del eje X y del eje Y a las que llamaremos movX y movY respectivamente. Debemos tener en cuenta que las variables suelen nombrarse con la primera palabra en minúscula y la segunda palabra comienza por mayúsculas(ejemplos: miPrograma, movX).

<br>
<span style="display:block;text-align:center">![variables]</span>
<br>


Una vez creadas nuestras variables, situamos al astronauta en el centro de la pantalla con el bloque de ir a x=0 e y=0. Inicializamos las variables movX y movY a 0 al inicio del juego y creamos un bucle que siempre esté sumando al astronauta el valor de movX y el valor de movY.Por ello, si el valor de movX es igual a 2, sumaría dos pasos positivamente a X, desplazándose hacia la derecha donde el valor se incrementa positivamente.

 
<br>
<span style="display:block;text-align:center">![bloque1]</span>
<br>


En el siguiente bloque crearemos los eventos que disparan el movimiento del astronauta. Al pulsar la flecha derecha, se incrementa la variable movX positivamente, moviéndose el astronauta por el eje de la X, sumando el valor a la posición x en la cuadrícula. Si recordamos, el valor de x en el centro vale 0, al desplazarse a la derecho el valor se incrementa positivamente hasta 240. Si pulsamos la flecha izquierda iría restando el valor a la variable hasta ser negativa, momento en el cuál, el moviemiento de x es negativo y empieza a moverse hacia la izquierda, pudiendo llegar hasta -240.
Si pulsamos las flechas arriba y abajo, la acción que conseguimos con ello es igual a la que conseguimos pulsando las felchas derecha e izquierda, solo que el valor de y está entre 180 y -180. Del centro hacia la parte superior es positivo y desde el centro a la parte inferior de la pantalla es negativo.


<br>
<span style="display:block;text-align:center">![bloque2]</span>
<br>

En el siguiente introducimos un bloque por siempre y una condición. Esto representa la programción de un bloque que escucha permanentemente si el astronauta ha tocado el borde. Es como la alarma de nuestro despertador. Está comparando continuamente la hora actual del reloj con la grabada en la memoria de la alarma. En el momento que son iguales, el despertador suena. Aunque en este caso, lo que hace es enviar un mensaje para el cambio del escenario.


<br>
<span style="display:block;text-align:center">![bloque3]</span>
<br>


El siguiente bloque lo creamos en la programación del escenario. Cuando recibe el mensaje, cambiamos el fondo del escenario y aparece el escenario llamado "perder". Tras ello, detenemos todos los objetos del programa terminando su ejecución

<br>
<span style="display:block;text-align:center">![bloque4]</span>
<br>


Os dejo el video de [Juego Espacial 2ª parte](https://youtu.be/lnTL5N7n0V0){:target="_blank"} subido a nuestro canal y el [enlace](https://scratch.mit.edu/projects/401764203/){:target="_blank"} al programa de Sratch en el que podais introducir el código.

Espero que os guste y seguimos en contacto.


[variables]:/images/variables.png
[bloque1]:/images/bloque1.png
[bloque2]:/images/bloque2.png
[bloque3]:/images/bloque3.png
[bloque4]:/images/bloque4.png







