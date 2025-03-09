---
layout: post
title: Pygame Zero(IV)
categories: lenguajes de programación
author: CoderDojo La Rinconada
anyo: "2025"
---

Por fin, la última parte de nuestro programa realizado con Pygame Zero. Esta vez introducirás nuevo código para introducir tiempo en el juego y al terminar éste, acabe el juego, introducirás una nueva variable para controlar si hay tiempo o no y cuando colisiones con la roca, no restará puntos, sino que acabará el juego. Además usarás un fondo para el escenario. Habrá que cambiar algún código, pero no te preocupes, lo haremos poco a poco.

Para resumir lo que hicimos en la parte anterior :

- Se puso tope al movimiento del jugador para no salir del escenario por los bordes
- Dibujamos la roca y le dimos movimiento
- Escribimos el patrón de movimiento de la roca
- Programamos la colisión de la roca con el jugador

Aunque el juego era jugable, tenía un fallo. Cuando la roca toca al jugador, está sigue
hacia delante y nos deja a cero los puntos, independiente del número que hayamos conseguido. Para corregir eso, debemos cambiar la posición al inicio integrando dentro del bloque de colisión, tanto si cumplimos la condición como si no, el siguiente código.

```
if player.colliderect(roca):
    if puntos > 5:
        roca.x = 790
        roca.y = random.randint(0 + roca.height / 2, 600 - roca.height / 2)
        puntos -= 5

    else:
        roca.x = 790
        roca.y = random.randint(0 + roca.height / 2, 600 - roca.height / 2)
        puntos = 0
```

Para evitar escribir todo el código que es un poco largo y ocupa mucho espacio en el post, el código lo puedes descargar de <a href="https://drive.google.com/file/d/1sflss3de3PqV93lN61_JL81NtgXSmg7E/view?usp=drive_link">AQUÍ</a>. Ya está integrada la corrección.

Una vez solucionado comenzamos con el nuevo código.

El primer paso será crear dos variables, una llamada tiempo y otra llamada estado. En la parte superior del código se encuentra el apartado de variables donde añadiremos estas. La variable tiempo tendrá el valor de 20 segundos de duración del juego, mientras que la varible estado tendrá el valor booleano True, la cuál indicará si hemos perdido o no.

```
# variables
puntos = 0
tiempo = 20
estado = True # La primera en mayúscula
```

A continuación del apartado enemigo, crearás el código para el fondo del escenario. Lo puedes descargar <a href="https://drive.google.com/file/d/1KoogUp34bejDnbuw9QwpGynOpuCZ5a8A/view?usp=drive_link">AQUÍ<a>.
Deberá estar dentro de la carpeta "images" del proyecto.

```
#fondo
fondo = Actor("fondo")
```

Para dibujar nuestro fondo vas a eliminar la linea **screen.fill('white')** y sustituirla por las siguientes al comenzar la función **draw**.

```
def draw():
    screen.clear()
    fondo.draw()
    .......
```

La primera línea elimina todo el escenario para volver a dibujarlo cada vez que sea llamado por la función **update** y la segunda dibuja el fondo.

Ahora vamos a corregir el código para dar uso a las nuevas variables. Para que la función **update** encuentre esas variables que están fuera de la función, deberás declararlas como variables globales.

```
def update():
    global puntos, tiempo, estado
```
A continuación, todo el código, excepto el anterior que has modificado en el párrafo anterior, deberá estar dentro de un bloque condicional que comprobará el estado de nuestro juego. Introducirás también otra condición en el interior de este último para comprobar que nos queda tiempo. 

En la colisión de la roca con el jugador tambien cambiaremos el código para que termine nuestro juego al golpear la roca a nuestro jugador. 

El código quedará de la siguiente forma.

~~~
def update():  # función que actualiza nuestro tablero de juego 60 veces por segundo.

    global puntos, tiempo, estado
    
    if estado: # es igual a True
        tiempo -= 1 / 60 # recuerda que se actualiza 60 veces por segundo
        if tiempo <= 0: # no nos queda tiempo
            estado = False # acaba el juego

        # movimiento del jugador
        if keyboard.left and player.x > 0 + player.width / 2:
            player.x -= 4  # es lo mismo que player.x = player.x - 4
        if keyboard.right and player.x < WIDTH - player.width / 2:
            player.x += 4
        if keyboard.up and player.y > 0 + player.height / 2:
            player.y -= 4
        if keyboard.down and player.y < HEIGHT - player.height / 2:
            player.y += 4

        # colisión del jugador con la moneda
        if player.colliderect(moneda):
            moneda.x = random.randint(0, 800)
            moneda.y = random.randint(0, 600)
            puntos += 1  # o lo que lo mismo "puntos = puntos + 1"

        #movimiento de la roca
        if roca.x > 0:
            roca.x -= 4
        else:
            roca.x = 790
            roca.y = random.randint(0 + roca.height / 2, 600 - roca.height / 2)

        # colisión de la roca con el jugador
        if player.colliderect(roca):
            estado = False # acaba el juego
~~~

También deberás modificar la función **draw** de nuevo. Será necesario controlar si el juego sigue activo o no para seguir dibujando. Siempre será necesario borrar y dibujar el fondo y verás el texto con los puntos. 
Si está activo dibujará al jugador, la moneda y la roca. Y si no, aparecerá un texto indicando que el juego ha terminado.

Será necesario poner el texto en blanco para el contraste con el fondo cambiando "color=(0,0,0)"-Negro-  por "color=(255,255,255)" -Blanco-.

Así queda la función **draw**.

~~~
def draw():
    screen.clear()
    fondo.draw()
    # str(puntos) debemos cambiar un número por un string(cadena de texto)
    screen.draw.text(
        "Puntos: " + str(puntos), (15, 10), color=(255, 255, 255), fontsize=30
    )
    # igual que la linea superior.
    # pero en este caso transforma decimales en enteros
    screen.draw.text(
        "Tiempo: " + str(int(tiempo)), (680, 10), color=(255, 255, 255), fontsize=30
    )
    if estado:  # es igual a True
        player.draw()
        moneda.draw()
        roca.draw()
    else:  # es igual a False.\n son saltos de linea. + une varias cadenas
        screen.draw.text(
            "Juego terminado\n Has obtenido\n" + str(puntos) + " puntos",
            center=(400, 300),
            color=(255, 255, 255),
            fontsize=50,
        )
~~~

Complicado, mira el código y ve observando los cambios que hemos ido realizando. 

Para terminar, incluiremos sonido cuando el jugador colisione con la moneda y con la roca. Para eso, debemos crear la carpeta "**sounds**" dentro del proyecto. Si estás utilizando el editor Mu, solo debes pulsar sobre el botón de la parte superior "**sonidos**" y se creará la carpeta automáticamente y si no la puedes crear tu mismo dentro de la carpeta del proyecto.

Ahí deberás insertar los sonidos que puedes descargar. Los sonidos deben ser en formato wav. Si quieres usar otros sonidos, puedes transformarlos en alguna página que convierta sonidos de forma online.

- <a href="https://drive.google.com/file/d/1mQyN39erpEtz1W8FHdypw9W4jfQOnaBT/view?usp=sharing">sonido moneda</a>
- <a href="https://drive.google.com/file/d/1iN-wHC-iySxVD9-prWe9aEjXZ71htn6j/view?usp=sharing">sonido roca</a>

Insertaremos el siguiente código en **update**. Debajo de la linea "puntos = puntos + 1".
~~~
sounds.coin.play()
~~~
Debajo de la linea "if player.colliderect(roca):" y antes de estado.
~~~
sounds.roca.play()
~~~

Con esto, ya está terminado el juego. Siempre puedes hacer las modificaciones que creas necesarias.

- Acelerar el movimiento de la roca con una variable que se divida por el número de puntos y aplicarle esa velocidad a la roca. 
- Dar más tiempo modificando el valor de tiempo.
- Aumentar los puntos. 
- Dar menos velocidad al jugador.

¡¡¡PRUEBA!!! y si ves que no funciona, siempre puedes descargarte el archivo original <a href="https://drive.google.com/file/d/1NeZMU2aT4sbRTZLDgJ5A_aiENBx-MrL7/view?usp=sharing">AQUÍ.</a>

Espero que te haya gustado y nos vemos en el próximo.