---
layout: post
title: Pygame Zero(II)
categories: lenguajes de programación
author: CoderDojo La Rinconada
anyo : "2024"
---


Hola de nuevo, continuamos con la segunda parte de Pygame Zero. Para resumir, hasta ahora has creado una ventana, un jugador, le has dado una posición y movimiento en la pantalla. 

Aquí te dejo al jugador, la moneda y el enemigo por si quieres utilizarlos. Solo haz clic en el botón derecho y "guardar imagen como", dentro de la carpeta "images" del proyecto.

<span style="display:block;text-align:center">![moneda] ![jugador]</span>


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

Después de este código ya te aparece la moneda y 

#### Creando el enemigo










[jugador]: /images/jugador.png
[moneda]: /images/moneda.png
