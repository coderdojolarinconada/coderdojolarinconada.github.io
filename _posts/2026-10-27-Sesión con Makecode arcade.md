---
layout: post
title: Programar con Makecode Arcade
categories: Programacion
author: CoderDojo La Rinconada
anyo: "2026"
---

¿Alguna vez has querido diseñar tu propio videojuego en 2D desde cero? En esta sesión hemos  trasteado un poco con Microsoft MakeCode Arcade, una plataforma online divertida y gratuita que te permite programar juegos con el estilo de las máquinas recreativas clásicas usando bloques de código, con JavaScript o Python si te va más el código escrito.

Para esta sesión, el objetivo ha sido programar las objetos principales de un juego espacial: un jugador, enemigos y un sistema de puntuación y vidas.

🛠️ Paso 1: Preparar el escenario y a nuestro jugador (al iniciar)

Al arrancar el editor y poner nombre a nuestro juego, lo primero es programar nuestro escenario dentro del bloque principal al iniciar. 

- El Fondo: Añadimos un color o un mapa de píxeles (fijar color de fondo).
- El jugador: Creamos nuestro primer Sprite (una nave), le dibujamos su aspecto en el editor y lo definimos como objeto tipo Player.
- Enemigos y laser.
- Controles: Con un solo bloque (mover mySprite con botones), el mando virtual del simulador ya nos permite mover el personaje en todas direcciones.

🪙 Paso 2: Destruir al enemigo y la puntuación

Un buen juego arcade necesita objetivos. Añadimos un segundo objeto de tipo Enemy (por ejemplo, un meteorito que no debe impactar con nuestra nave para poder volver a casa) y un objeto tipo Projectile para poder destruir los meteoritos. 
- Puntuación inicial: Fijamos el marcador a 0 con el bloque que tenemos en información.
- Vidas iniciales: Fijamos nuestras vidas en 3 (tambien en información).
- Colisión: Programamos un evento de superposición de la nave con los meteoritos y otro con nuestro laser y los meteoritos (cuando el sprite de tipo Player se superpone con..). Al tocar el objeto:
	1. Ganamos +1 punto al destruir el meteorito con el proyectil.
  2. Perdemos una vida al tocar nuestra nave el meteorito.
	3. El objeto se recoloca en una posición aleatoria de la pantalla para volver a ir a por él.
	4. ¡Suena un efecto de sonido retro! 🎵 
- Disparo: Utilizamos el bloque cuando A botón presionado.... y fijamos el proyectil desde nuestra nave con una velocidad determinada por nosostros en el eje Y.

👾 Paso 3: Game Over

- Fin de la partida: El motor de MakeCode gestiona de forma automática la pantalla de Game Over cuando las vidas llegan a cero. ¡Y si logras llegar a una puntuación máxima, saltará la pantalla de victoria!

Lo mejor de MakeCode Arcade es la velocidad con la que pasas de tener una idea a verla jugable en el simulador de la pantalla. No necesitas instalar absolutamente nada y es una forma muy fácil de entender la lógica de programación detrás de los videojuegos mientras te diviertes. 

¿Has probado alguna vez esta herramienta? ¿Qué tipo de juego te gustaría programar? 

Si te interesa aprender, asiste a nuestras sesiones en CoderDojo La Rinconada. Podrás aprender a tu ritmo. 


<span style="display:block;text-align:center;max-width:400px; margin:auto;padding: 10px 0px"> ![makecode_foto]</span>


¡¡ Nos vemos en el siguiente !! 

[makecode_foto]: /images/makecode_asist.jpg