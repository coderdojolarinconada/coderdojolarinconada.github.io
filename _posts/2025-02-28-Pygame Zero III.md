---
layout: post
title: Pygame Zero(III)
categories: lenguajes de programación
author: CoderDojo La Rinconada
anyo : "2025"
---


Estamos de vuelta y continúa la tercera parte de nuestro programa realizado con Pygame Zero. Introducirás nuevo código que evitará algunos errores de posición y nuevos objetos para la ejecución del juego.

Para resumir : 
- Has creado una **ventana** 
- También **un jugador** 
- Posición y movimiento en la pantalla 
- Objeto que debes recolectar(**moneda**)
- Colisión de la **moneda** con el **jugador** para su recolección


Así queda nuestro código hasta ahora.
~~~
import pgzrun
import random

WIDTH = 800
HEIGHT = 600

#Creamos un actor (nuestro personaje). Así comienzan las líneas de comentarios #
#Imagen jugador.png, guardada en images, carpeta creada dentro de la carpeta 
#del juego

player = Actor("jugador")
player.pos = 100, 100  # posición inicial del jugador

moneda = Actor("moneda")
moneda.x = random.randint(0,800)
moneda.y = random.randint(0,600)

#variables
puntos = 0

def update():  # función que actualiza nuestro tablero de juego 60 veces por segundo.

    global puntos
    
    # movimiento del jugador
    if keyboard.left:
        player.x -= 4  # es lo mismo que player.x = player.x - 4
    if keyboard.right:
        player.x += 4
    if keyboard.up:
        player.y -= 4
    if keyboard.down:
        player.y += 4
        
    # colisión del jugador con la moneda 
    if player.colliderect(moneda):
    moneda.x = random.randint(0,800)
    moneda.y = random.randint(0,600)
    puntos = puntos + 1 #  o lo que lo mismo "puntos +=1"

def draw():
    screen.fill("white")
    screen.draw.text('Puntos: ' + str(puntos), (15,10), color=(0,0,0), fontsize=30)
    player.draw()
    moneda.draw()

pgzrun.go()
~~~

Ahora seguiremos introduciendo cambios en nuestro código y objetos nuevos.

El siguiente paso será evitar que nuestro personaje se salga del escenario de juego. Se va a añadir nuevas condiciones dobles dentro de la función update. Debes recordar que se ha creado una pantalla de juego de 800 de ancho por 600 de alto y que el punto con coordenada x=0 e y=0 está en la parte izquierda superior, por lo cuál, dentro del condicional que ejecuta el movimiento a la izquierda, deberás añadir una condición doble que será "**True**" cuando pulsemos la flecha izquierda y la posición del personaje sea mayor que 0 más al mitad del ancho del personaje. Vamos a ver el código.

~~~
if keyboard.left:
        player.x -= 4  # es lo mismo que player.x = player.x - 4
~~~

será modificado por lo siguiente:

~~~
if keyboard.left and player.x > 0 + player.width / 2:
    player.x -= 4  # es lo mismo que player.x = player.x - 4
~~~

Observamos lo que estos cambios implican. Se incorpora el operador lógico "**and**" para que se cumplan ambas condiciones al mismo tiempo y no únicamente una. En otras palabras, debemos pulsar la flecha izquierda del teclado y además la posición en el **eje x** del jugador debe ser mayor que **0**, a la que hay que sumar la **anchura** del jugador **dividida entre 2**. Puedes quitar la segunda parte de la suma y verás qué pasa.¡¡Pruébalo!!


Ahora será necesario realizarlo con el resto de condicionales, quedando como sigue:


~~~
if keyboard.left and player.x > 0 + player.width / 2:
    player.x -= 4  # es lo mismo que player.x = player.x - 4
if keyboard.right and player.x < WIDTH - player.width / 2:
    player.x += 4
if keyboard.up and player.y > 0 + player.height / 2:
    player.y -= 4
if keyboard.down and player.y < HEIGHT - player.height / 2:
    player.y += 4
~~~

Podrás ver que cuando mueves a tu jugador horizontalmente se tiene en cuenta la posición en "**x**" y la mitad de la anchura del jugador y al moverlo verticalmente se tiene en cuenta la posición en "**y**" del jugador sumando o restando su altura dividida entre 2. No hay que confundir **player.width** o **player.height** (anchura y altura del personaje) con **WIDTH** o **HEIGHT** (ancho y alto de la pantalla- 800 x 600). Puedes hacer pruebas eliminando la suma o resta a la posición del jugador.

A continuación introducirás otro objeto en el juego. Este será el enemigo del jugador. La roca saldrá por la parte derecha de nuestra pantalla hasta la izquierda y volverá a salir de nuevo por la derecha en posiciones aleatoria en el eje y, es decir, verticalmente. Si colisiona con nuestro personaje perderemos puntos en la partida.


<span style="display:block;text-align:center;width:70%;margin:auto"> ![pantallapygz]</span>


Introducimos el código del objeto enemigo. En la parte superior, a conitnuación del apartado de variables.
~~~
# enemigo
roca = Actor("roca")
roca.x = 790
roca.y = random.randint(0 + roca.height / 2, 600 - roca.height / 2)
~~~

Para que aparezca en nuestra pantalla debemos dibujar el objeto dentro de la función "**draw**", debajo del objeto moneda.

~~~
def draw():
    .......
    moneda.draw()
    roca.draw()
~~~

Y continuación le daremos movimiento. Introducimos un condicional al final de la función **update**.

~~~
def update():
    ......
    if roca.x > 0:
        roca.x = roca.x-4
    else:
        roca.x = 790
        roca.y = random.randint(0 + roca.height / 2, 600 - roca.height / 2)
~~~

Si la posición de roca.x es mayor que cero, debe seguir restando 4 pixeles a la posición en "**x**", desplazándose hacia la izquierda de la pantalla. Si no es así, cambia la roca a la posición  **x= 790**(derecha de la pantalla) y la posición de "**y**" elige un número aleatorio entre **0 más la mitad del alto** de la roca y **600 menos la mitad del alto** de la roca. De esta forma, nunca tendremos parte de la roca fuera de la pantalla.

Y por último,para terminar con el enemigo, inserta este código para la colisión de la roca con nuestro jugador, debajo del anterior. Te quitará 5 puntos si los tienes y si no, te deja el marcador a 0.

~~~
if player.colliderect(roca):
    if puntos > 5:
        puntos -=5
    else:
        puntos = 0
~~~

Por ahora lo dejamos aquí y en el próximo post introducirás sonido, tiempo y al colisionar con la roca, no restará puntos sino que acabará nuestro juego y además pondremos un fondo a nuestro juego. 


Nos vemos en el próximo, última parte.

[pantallapygz]: /images/pantallapygz.jpg