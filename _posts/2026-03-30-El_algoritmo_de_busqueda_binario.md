---
layout: post
title: El algoritmo de búsqueda binaria
categories: Programacion
author: CoderDojo La Rinconada
anyo: "2026"
---

Hola a todos, en esta ocasión trataremos el algoritmo de búsqueda binaria. ¿Quieres adivinar un número entre el 1 y el 100 en 7 intentos?.

La búsqueda binaria es un algoritmo eficiente para encontrar un elemento dentro de una lista ordenada. En lugar de revisar cada elemento uno por uno (como haría una búsqueda lineal), divide el espacio de búsqueda a la mitad en cada paso.
Es como jugar a “adivina el número” y siempre preguntar:
“¿Es mayor o menor que X?”

Cómo funciona:

- Empieza con toda la lista.
- Mira el elemento del medio.
- Si es el que buscas, ¡listo!
- Si lo que buscas es menor, descartas la mitad derecha.
- Si es mayor, descartas la mitad izquierda.
- Repite el proceso con la mitad restante.
  Cada paso reduce el problema a la mitad, lo que lo hace muy rápido.

Ejemplo :

Buscas el número 23 en esta lista ordenada de números:
[3, 7, 12, 18, 23, 27, 31]

- Miras el del medio → 18 y como 23 es mayor → descartas los números de la izquierda

- Nueva lista → [23, 27, 31] y el número del medio es el 27 y como 23 es menor → descartas los números de la derecha

- Nueva lista → [23] ¡Encontrado!

Ventajas:

- Muy rápido: La dificultad de este depende de la cantidad de elementos de la lista.
- Ideal para listas grandes.
- Sencillo de implementar.

La idea es utilizar la búsqueda binaria solo si la lista está ordenada. Si no, no tiene sentido dividir la lista.

<span style="display:block;text-align:center;max-width:400px; margin:auto;padding: 10px 0px"> ![busqueda]</span>

Ahora puedes jugar con tus amigos o programar un juego en Scratch. Puedes llamarlo "Adivina el número". Tu serás el algoritmo y deberás adivinar el número seleccionado por tu computadora.

Aquí tienes la estructura lógica para programarlo:

1. Variables necesarias. Crea estas tres variables en la sección de Variables:
- secreto: El número que la computadora elige.
- min: El límite inferior (empieza en 1).
- max: El límite superior (empieza en 100).
2. El código del Objeto (Sprite). Copia esta lógica en el panel de código:
- Al hacer clic en bandera verde:
- Fijar min a 1.
- Fijar max a 100.
- Fijar secreto a número aleatorio entre 1 y 100.
- Decir: "He pensado un número. ¡Usa búsqueda binaria para hallarlo!" por 2 segundos.

3. Control 
* Bucle Por siempre: 
* Sensores - Preguntar: "¿Qué número crees que es?" y esperar.
* Si respuesta < secreto:
* Fijar min a respuesta + 1.
* Decir: "Es más alto. Tu nuevo rango es (unir min y max)".
* Si respuesta > secreto:
* Fijar max a respuesta - 1.
* Decir: "Es más bajo. Tu nuevo rango es (unir min y max)".
* Si respuesta = secreto : 
* Decir: "¡Lo lograste!".
* Detener todos.

Para jugar correctamente como una "búsqueda binaria", tu primer intento siempre debe ser el punto medio: 50.
Si es más alto, tu siguiente intento es 75 (la mitad entre 51 y 100).
Si es más bajo, tu siguiente intento es 25 (la mitad entre 1 y 49).
Y así todas los intentos necesarios.

Te damos una info. Para un número entre el 1 y el 100 puedes adivinarlos en 7 intentos y un número entre el 1 y el 1000 en 11 intentos. Pruébalo !!!!!

En los recursos de Scratch, puedes abrir la guía (Adivina el número) y crearte un programa para jugar y así podrás probar tu pericia. Esperamos que te guste.

!! Seguimos en el próximo ¡¡

[busqueda]: /images/busqueda_binaria.gif
