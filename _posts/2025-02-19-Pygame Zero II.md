---
layout: post
title: Pygame Zero(II)
categories: lenguajes de programación
author: CoderDojo La Rinconada
anyo : "2025"
---


Hola de nuevo, continuamos con la segunda parte de Pygame Zero. Para resumir, hasta ahora has creado una ventana, un jugador, le has dado una posición y movimiento en la pantalla. 

Aquí te dejo al jugador, la moneda y el enemigo por si quieres utilizarlos. Solo haz clic en el botón derecho y "guardar imagen como", dentro de la carpeta "images" del proyecto.

<span style="display:block;text-align:center"> ![jugador] ![moneda] ![roca]</span>


~~~
import pgzrun

WIDTH = 800
HEIGHT = 600

#Creamos un actor (nuestro personaje). Así comienzan las líneas de comentarios #
#Imagen jugador.png, guardada en images, carpeta creada dentro de la carpeta 
#del juego

player = Actor("jugador")
player.pos = 100, 100  # posición inicial del jugador

def update():  # función que actualiza nuestro tablero de juego 60 veces por segundo.
    if keyboard.left:
        player.x -= 4  # es lo mismo que player.x = player.x - 4
    if keyboard.right:
        player.x += 4
    if keyboard.up:
        player.y -= 4
    if keyboard.down:
        player.y += 4

def draw():
    screen.fill("white")
    player.draw()

pgzrun.go()
~~~


#### Creando el objeto recolectable

Para crear un nuevo objeto en pantalla, utiliza el mismo código que utilizamos para el jugador. Utiliza la imagen de una moneda descargada desde internet o dibujada por ti mismo en tu programa favorito.

Crea también una variable a la que puedes llamar puntos.
~~~
moneda = Actor("moneda", pos=(300,300))
puntos = 0
~~~

Y dentro de la función draw(), la dibujamos con 

~~~
def draw():
    screen.fill("white")
    player.draw()
    moneda.draw()
~~~

Después de este código ya te aparece la moneda y el jugador. Al jugador lo puedes mover por toda la pantalla utilizando las flechas del teclado.

A la moneda le darás una posición aleatoria dentro de la pantalla. Para eso, debes escribir el código siguiente:

En la parte superior utilizarás una instrucción "import" para importar la librería "random". Justo debajo de "import pgzrun". Con esto conseguirás una posición aleatoria dentro de la pantalla.
~~~
import random
~~~

Cambiarás ahora la posición que le dimos al principio a nuestro objeto moneda. Pero vas a separar la creación del objeto moneda de su posición escribiendo lo siguiente:

~~~
moneda = Actor("moneda")
moneda.x = random.randint(0,800)
moneda.y = random.randint(0,600)
~~~

Aqui, al objeto moneda se le da una posición aleatoria entre 0 y 800 (ancho de la pantalla) en el eje X y en el eje Y entre 0 y 600 (alto de la pantalla). Ahora cada vez que inicies el juego, aparecerá la moneda en un sitio diferente.

Ahora hay que insertar el código para que cuando nuestro personaje colisione con la moneda sume un punto y vaya la moneda a otra posición diferente. 

Dentro de la función "update", al final, ingresarás el siguiente código:

~~~
if player.colliderect(moneda):
    moneda.x = random.randint(0,800)
    moneda.y = random.randint(0,600)
~~~
Comprueba tu juego.

Ahora tendrás que sumar los puntos cada vez que nuestro jugador colisione con la moneda. Dentro del condicional que has escrito antes, dentro de "update", sumará un punto a "puntos". Y en la parte superior de la función "update", justo al principio, para que la función reconozca la variable, será necesario indicarle que es una variable global, es decir, para todos los objetos del programa.

~~~
def update():
    global puntos
    ........
~~~


~~~
if player.colliderect(moneda):
    moneda.x = random.randint(0,800)
    moneda.y = random.randint(0,600)
    puntos = puntos + 1 #  o lo que lo mismo "puntos +=1"
~~~

Y para poder ver la puntuación, dentro de la función "draw", será necesario escribir lo siguiente justo debajo de "screen.fill("white")" y antes de dibujar el objeto player y moneda:

~~~
screen.draw.text('Puntos: ' + str(puntos), (15,10), color=(0,0,0), fontsize=30)
~~~

Con este código puedes imprimir en pantalla la palabra "Puntos: ", a continuación convertimos la variable númerica "puntos" en texto con el método string "str()", le da la posición en x=15 e y=10, color negro al texto (formato RGB) y el tamaño de la letra en 30.   

Vuelve a comprobar y verás como va sumando puntos. Con esto acabamos la segunda parte. Seguiremos en una tercera parte donde introduciremos al enemigo, en este caso, la roca y lo que pasará en caso de colisionar con nuestro el jugador e incluiremos código para que nuestro personaje no se salga de la pantalla. Seguiremos perfilando el juego.

¡¡¡Seguimos en el siguiente!!!.

[jugador]: /images/jugador.png
[moneda]: /images/moneda.png
[roca]: /images/roca.png
