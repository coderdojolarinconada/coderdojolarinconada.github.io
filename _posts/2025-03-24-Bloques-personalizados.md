---
layout: post
title: Los bloques personalizados
categories: lenguajes de programación
author: CoderDojo La Rinconada
anyo: "2025"
---

Hola a todos, en este post vamos a tratar los "**bloques personalizados**" o "**mis bloques**" en Scratch.
Como introducción, mencionar que en programación existen los términos función, procedimiento y método. Estos tres términos son muy parecidos, e incluso se llegan a confundir a veces, pero tienen pequeñas diferencias.

- Una función es un conjunto de instrucciones agrupadas en un bloque que realizan una tarea determinada y, generalmente, suele devolver un valor al ejecutarse. Este valor devuelto puede ser un número, una palabra u otro diferente. Por ejemplo, una función que realiza una suma de dos números y nos devuelve el resultado total. 

- Un procedimiento hace exactamente lo mismo, pero no devuelve ningún valor, solo se ejecuta. Por ejemplo, un procedimiento que al ejecutarse haga sonar un sonido.

- Un método también realiza lo mismo que los dos anteriores, pero siempre relativo a un objeto concreto. Por ejemplo, el movimiento de saltar de un personaje determinado.

Aunque el método puede ser igual que un procedimiento, el procedimiento sería para todos los personajes o para otros eventos y es independiente, mientras que el método está conectado a un personaje.

Ahora que hemos visto las diferencias entre unos y otros, Scratch ha simplificado estas diferencias para facilitar el uso por los principiantes en la programación.

¿Para qué se utilizan en Scratch?

Para organizar mejor nuestro código, reutilizar ese código repetidamente y no tener la necesidad de reescribirlo cada vez que lo utilicemos. Los bloques son una herramienta muy útil para realizar proyectos más complejos

¿Cómo se crean estos bloques personalizados?

Es muy fácil:

- Ve a la sección "Mis bloques" en Scratch.
- Haz clic en "Crear un bloque".
- Dale un nombre a tu bloque personalizado.
- Arrastra los bloques que quieras introducir en su interior.
- Y listo. Solo tienes que utilizar la llamada a ese bloque cuando quieras utilizarlo.


<span style="display:block;text-align:center;max-width:400px; margin:auto;"> ![ejemplo1]</span>


Cuando haces clic en crear el bloque personalizado aparece la siguiente pantalla. Observa que podemos añadir una entrada de datos con un número, texto, lógico(verdadero o falso) y una etiquetas a esas entradas. Además, en la parte inferior aparece "Ejecutar al instante", con el efecto en nuestro bloque de ejecutarlo de forma muy rápida dentro de nuestro programa.

<span style="display:block;text-align:center;max-width:400px; margin:auto;"> ![crear]</span>

En el siguiente ejemplo realizaremos un bloque personalizado que realizará la suma de dos parámetros o entradas (así se llaman los datos númericos que pasamos a nuestro bloque). Se pregunta el valor del primer número y la respuesta se introduce en la variable "numero1" y el segundo número en la variable "numero2".

Al llamar a la función, pasamos las dos variables en las cajas de entrada de datos o parámetros y nuestro bloque los recibe para dar el resultado de la suma. Los nombres que tienen los parámetros del bloque (numero 1 y numero 2) son independientes de los datos que le pasamos (variables numero1 y numero2). Puedes llamarlos como tu creas. Aunque es fundamental asignar nombres que tengan un significado y que estén vinculados con la función real de ese bloque. Por ejemplo, si el bloque se encarga de sumar dos números, puedes optar por el nombre muy creativo de "Suma", "sumando 1" y "sumando 2". De otra forma, nos perderemos por el camino, es decir, cuando pase tiempo desde que lo realizaste o haya demasiado código, puede pasar que no te acuerdes para que sirve ese bloque.


<span style="display:block;text-align:center;max-width:400px; margin:auto;"> ![ejemplo2]</span>

Si quieres que en vez de sumar, sea restar, podemos editar el bloque personalizado haciendo clic sobre él con el botón secundario de nuestro ratón. 

- Le cambias el nombre a tu bloque personalizado y si quieres el nombre de los dos parámetros.
- La operación por el bloque de operadores "restar".
- El resultado por "El resultado de la resta es". 
- Listo, ya hemos reutilizado un bloque personalizado.

<span style="display:block;text-align:center;max-width:400px; margin:auto;"> ![ejemplo3]</span>

Otros usos para los bloques personalizados son:

- Dibujar formas geométricas ("Dibujar un cuadrado").

- Movimientos personalizados ("Bailar").

- Simplificar tareas repetitivas ("Cambiar puntuación en un momento del juego").

- Mini juegos o rutinas de un personaje("Lanzar hechizo").


También se pueden utilizar variables en el interior y a través de los parámetros modificar esas variables. ¡¡¡ Experimenta y crea tus propios bloques personalizados!!! 


Nos vemos en el siguiente.

[ejemplo1]: /images/mov_lateral.png
[crear]: /images/crear.png
[ejemplo2]: /images/suma.png
[ejemplo3]: /images/resta.png