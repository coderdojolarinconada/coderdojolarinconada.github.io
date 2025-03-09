---
layout: post
title: Pygame Zero(IV)
categories: lenguajes de programación
author: CoderDojo La Rinconada
anyo: "2025"
---

Finalmente, hemos llegado a la última fase de nuestro proyecto desarrollado con Pygame Zero. En esta etapa, incorporarás un nuevo código que permitirá añadir un temporizador al juego, lo que significará que al finalizar el tiempo, el juego concluirá.

Establecerás una nueva variable para controlar el tiempo restante, y al colisionar con la roca, en lugar de perder puntos, el juego se detendrá. Además, se implementará un fondo para el escenario.

Será necesario realizar algunas modificaciones en el código, pero no te preocupes, iremos abordándolo de manera gradual.

A continuación, un breve resumen de lo que hicimos en el post anterior :

- Se limitó el movimiento del jugador para evitar salir por los bordes del área de juego.
- Dibujamos la roca y codificamos su movimiento.
- Desarrolamos el patrón de movimiento de la roca.
- Programamos la colisión de la roca con el jugador.

Aunque el juego era funcional, presentaba un inconveniente: cuando la roca tocaba al jugador, seguía avanzando y restaba todos los pu ntos, sin importar lo conseguido hasta el momento. Para corregirlo, debemos modificar la posición al inicio, integrando el siguiente código dentro del bloque de colisión, tanto si se cumple la condición como si no.

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

Con el fin de evitar escribir todo el código, el cual resulta extenso y ocupa bastante espacio en el artículo, puedes descargarlo desde <a href="https://drive.google.com/file/d/1sflss3de3PqV93lN61_JL81NtgXSmg7E/view?usp=drive_link">AQUÍ</a>. La corrección ya ha sido incorporada.

El primer paso será establecer dos variables: una denominada tiempo y otra estado. En la sección superior del código, se encuentra el apartado de variables, donde añadiremos estas. La variable tiempo tendrá el valor de 20 segundos, mientras que la varible estado tendrá el valor booleano True, que indicará si hemos perdido o no.

```
# variables
puntos = 0
tiempo = 20
estado = True # La primera en mayúscula
```

A continuación del apartado del enemigo, escribirás el código para el fondo del escenario. Puedes descargar la imagen <a href="https://drive.google.com/file/d/1KoogUp34bejDnbuw9QwpGynOpuCZ5a8A/view?usp=drive_link">AQUÍ<a>. Deberá ubicarse en la carpeta "images" del proyecto.

```
#fondo
fondo = Actor("fondo")
```

Para crear nuestro fondo, deberás eliminar la linea **screen.fill('white')** y sustituirla por las siguientes al comenzar la función **draw**.

```
def draw():
    screen.clear()
    fondo.draw()
    .......
```

La primera línea borra todo el entorno para volver a crearlo cada vez que se invoque la función **update**, mientras que la segunda se encarga de dibujar el fondo.

A continuación, procederemos a modificar el código para utilizar las nuevas variables. Para que la función **update** pueda acceder a esas variables que están definidas fuera de ella, será necesario declararlas como globales.

```
def update():
    global puntos, tiempo, estado
```

Ahora, todo el código, a excepción del que has modificado en el párrafo anterior, deberá estar incluido en un bloque condicional que comprobará el **estado** de nuestro juego. Además, añadirás otra condición dentro de esta para controlar si aún tenemos tiempo disponible.

En el evento donde la roca colisiona con el jugador, también modificaremos el código para que el juego se acabe cuando la roca impacte contra nuestro personaje.

El código quedará de la siguiente manera.

```
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
```

Deberás realizar cambios en la función **draw** nuevamente. Será necesario controlar si el juego sigue activo o no para seguir realizando el dibujo del escenario y los objetos.
Si está activo, seguirá el juego ejecutándose, de lo contrario, aparecerá un texto indicando que el juego ha terminado.

Es necesario cambiar el color del texto a blanco para asegurar el contraste con el fondo, cambiando "color=(0,0,0)"-Negro- por "color=(255,255,255)" -Blanco-.

Así queda la función **draw**.

```
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
```

¿Complicado? Revisa el código y presta atención a las modificaciones que hemos estado realizando.

Finalmente, incluiremos sonido que se activará cuando el jugador colisione con la moneda o con la roca. Para esto, debemos crear la carpeta "**sounds**" dentro del proyecto. Si estás utilizando el editor Mu, simplemente haz clic sobre el botón de la parte superior "**sonidos**" y se creará la carpeta automáticamente. En caso contrario, puedes crearla manualmente dentro de la carpeta del proyecto.

Los archivos de sonido necesitan estar en formato wav. Si deseas utilizar otros tipos de sonidos, puedes convertirlos en algún sitio web dedicado a la conversión de audio en línea. En esa carpeta deberás insertar los sonidos que utilices. A continuación, encontrarás los enlaces para descargar los sonidos que se han utilizado.

- <a href="https://drive.google.com/file/d/1mQyN39erpEtz1W8FHdypw9W4jfQOnaBT/view?usp=sharing">sonido moneda</a>
- <a href="https://drive.google.com/file/d/1iN-wHC-iySxVD9-prWe9aEjXZ71htn6j/view?usp=sharing">sonido roca</a>

Deberás insertar el siguiente código en **update**. Bajo la linea "puntos = puntos + 1".

```
sounds.coin.play()
```

Bajo la linea "if player.colliderect(roca):" y antes de **estado**, lo siguiente.

```
sounds.roca.play()
```

Con esto, el juego ya está terminado. Puedes hacer las modificaciones que creas necesarias.

Retos:

- Incrementar la velocidad de la roca sumando al movimiento la cantidad de puntos dividido por 5.
- Prolongar el tiempo ajustando el valor del temporizador en la variable **tiempo**.
- Elevar la cantidad de puntos que se consiguen con la obtención de las monedas o por el tiempo que has permanecido en el juego.
- Reducir la velocidad del jugador.

¡¡¡PRUEBA!!! y si notas que no da resultados, siempre tienes la opción de obtener el archivo original <a href="https://drive.google.com/file/d/1NeZMU2aT4sbRTZLDgJ5A_aiENBx-MrL7/view?usp=sharing">AQUÍ.</a>


Espero que lo hayas disfrutado y nos vemos en el próximo.
