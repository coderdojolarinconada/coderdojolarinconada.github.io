---
layout: post
title: Pygame Zero(I)
categories: lenguajes de programación
author: CoderDojo La Rinconada
anyo : "2024"
---


Pygame Zero es una versión simplificada de Pygame, una biblioteca de Python popular para crear videojuegos. Lo mejor de Pygame Zero es poder empezar a programar juegos sin tener que escribir mucho código, ¡así que es perfecto para principiantes!

#### ¿Cómo crear tu primer videojuego?

Para comenzar  es necesario instalar Pygame Zero. Si usas el editor Mu, se instala con el programa Pygame Zero, pero si usas otro editor tendrás que instalarlo tú mismo. Puedes encontrar instrucciones detalladas en la página oficial de Pygame Zero. 


Una vez hayas instalado el editor Mu, al iniciarlo, selecciona el modo Pygame Zero, después crea una carpeta donde guardar los archivos y pulsa sobre el botón Nuevo. Esto creará un archivo nuevo y habrá que guardarlo con un nombre en la carpeta que has creado anteriormente con la extensión .py (por ejemplo, mi_primer_juego.py).

#### Escribir el código

Crear la ventana del juego. Define el tamaño de la ventana y el título. Por ejemplo:

~~~

WIDTH = 800
HEIGHT = 600

TITLE = "Mi Primer Juego"

~~~


<br/>
Importar Pygame Zero. Al principio de tu archivo, escribe “import pgzrun” y al final "pgzrun.go()".

Crear los sprites: Los sprites son los objetos que aparecerán en tu juego (como el jugador, los enemigos, los objetos). Puedes crearlos usando imágenes que puedes importar o formas simples.

Ejemplo sencillo:
~~~
import pgzrun

WIDTH = 800
HEIGHT = 600
TITLE = "Hola, Mundo!"


# función que dibuja en la pantalla
def draw(): 
    screen.fill("white")# Pinta la pantalla de blanco
    # Crea un círculo de color azul
    screen.draw.circle((400, 300), 50, "blue")
    
pgzrun.go()
~~~

Este código creará una ventana blanca con un círculo azul en el centro. ¡Ya tienes tu primer juego!

Explicación del código:

- import pgzrun: Importamos la biblioteca Pygame Zero.
- WIDTH y HEIGHT: Definimos el ancho y alto de la ventana.
- draw(): Esta función se ejecuta constantemente y dibuja todo en la pantalla.
- screen.fill("white"): Rellena la pantalla de blanco.
- screen.draw.circle(): Dibuja un círculo azul en el centro de la pantalla.
- pgzrun.go(): Inicia el juego.

#### Seguimos?

Crea la carpeta "images". Tienes dos opciones, o la creas manualmente o si estás usando el editor Mu, al hacer clic sobre el icono images, automáticamente crea la carpeta. Ahí estarán todas las imágenes que necesitemos. Fíjate en los botones que están a su lado (fonts, sounds, music).

Añadir movimiento: Usa las teclas del teclado para mover a tus sprites.

Definir el comportamiento de los sprites: Escribe código para que los sprites se muevan, interactúen entre sí y respondan a tus controles.

Crear el bucle principal (update): Este bucle se encarga de actualizar la pantalla y el juego constantemente.

Aquí tienes un ejemplo de cómo podríamos hacer que un personaje se mueva con las teclas del teclado:


~~~
import pgzrun

WIDTH = 800
HEIGHT = 600

#Creamos un actor (nuestro personaje). Así comienzan las líneas de comentarios #
#Imagen jugador.png, guardada en images, carpeta creada dentro de la carpeta 
#del juego

player = Actor("jugador")
player.pos = 100, 100  # oposición inicial del jugador

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

Este código crea un personaje llamado "player" y lo hace moverse con las teclas izquierda, derecha, arriba y abajo.<br/>

#### ¿Qué más puedes hacer?

- Crear diferentes niveles: Diseña distintos escenarios para que tu juego sea más interesante.
- Agregar enemigos: Crea personajes que persiguen al jugador o que deben ser evitados.
- Detectar colisiones: Hacer que los sprites interactúen entre sí.
- Incluir sonidos y música: Haz que tu juego sea más inmersivo con efectos de sonido y una banda sonora. Los sonidos deben ser en formato wav
- Crear animaciones: Haz que tus sprites se muevan de forma más realista.


#### Recursos útiles

- Tutoriales en YouTube: Busca tutoriales de Pygame Zero para principiantes. Hay muchos canales que ofrecen explicaciones paso a paso y ejemplos de código.
- Documentación oficial: La documentación de Pygame Zero es una gran fuente de información y ejemplos.
- Comunidades en línea: Únete a foros y comunidades de programación para hacer preguntas y compartir tus proyectos con otros.

#### Recuerda que
- La práctica es esencial: ¡No te desanimes si al principio te cuesta un poco!
- Tienes comunidad donde puedes preguntar: Hay muchos foros y grupos en línea donde puedes hacer preguntas y encontrar ayuda.
- La diversión es lo más importante: ¡Lo más importante es que te diviertas creando tu juego!
<br/><br/>
