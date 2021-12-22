---
layout: post
title: ¿Qué es Internet y cómo funciona? (1ª parte)
categories: Redes
author: CoderDojo La Rinconada
anyo : "2021"
---

Hola a todos, hoy vamos a explicar como funcionan las conexiones en Internet.

Internet se conoce como la red de redes. ¿Pero sabéis cómo funciona?

Para empezar, unos conceptos que se confunden a la hora de hablar de Internet. Muchas veces he escuchado decir tengo Internet o tratar la conexión wifi como si fuera internet o pensar que la conexión wifi se encuentra en todo lugar de la tierra.

Como primera aclaración, podemos decir que internet no es algo virtual, sino una red a la que se conectan pc's, servidores, móviles y demás hardware. Internet no está en el móvil, lo que tenemos es una conexión con Internet (la red).

La siguiente idea es la conexión. Wifi es un tipo de conexión, al igual que Ethernet (cable), por satélite u otros sistemas de conexión existentes. Pero el hecho de tener conexión, no implica que tengamos acceso a Internet, sino que estamos conectado a una red, como podría ser la de nuestra casa.

Otra aclaración, no hay wifi ni internet en todo lugar de la tierra. Como ya hemos dicho debemos conectarnos a Internet mediante un tipo de conexión, y la conexión Wifi es inalámbrica, es decir no tiene alambre como el que está dentro de los cables y las señales se mandan por el aire. Pero como toda señal, tiene un alcance limitado, así que si no estás cerca de un aparato (punto de acceso) que extienda esa conexión, probablemente no puedas conectarte.
Una vez aclarados estos términos, vamos a comenzar a ver como se conectan nuestros pc's o aparatos electrónicos a la red. 

<span style="display:block;text-align:center">![conexion]<br>Conexiones cableadas e inalámbricas</span>

Muchos, si no la mayoría, tenemos en casa esos aparatos que nos instalan las compañías telefónicas (ISP. Proveedor de acceso de Internet) en nuestras casas con muchas luces de diferentes colores y que tienen varios cables conectados. Pues bien, el nombre de esos aparatos es router. Antiguamente se utilizaban los llamados módem analógicos (datos analógicos a digital y viceversa), que aunque eran aparatos para conectarse a Internet, solo permitían una conexión (por lo menos el mío) y que cuando llamaban a tu casa, solía cortarse la conexión a Internet. ¡¡Vaya rollo!!

<span style="display:block;text-align:center">![router]![modem]<br>Router y modem.</span>

Pero afortunadamente la tecnología ha evolucionado y hoy en día podemos conectar varios aparatos a la vez y la linea telefónica va separada de los datos compartiendo el enlace pero con otro protocolo (forma de comunicarse).
Y la misión principal del router es conectarnos a Internet, pero también tiene otras misiones no menos importantes. Dentro de nuestra casa solemos tener varios aparatos conectados a nuestro router, y para ello, cada uno debe tener su dirección dentro de la casa y nuestro router se encarga de dar una identidad a cada aparato conocida como Dirección IP( dirección dentro del protocolo de Internet). Y aunque sé que lo estás pensando, no, no es la MAC del aparato( DNI del aparato-**00:1e:c2:9e:28:6b**), sino que la dirección IP es la identidad de la conexión. 

Esta dirección suele tener el formato siguiente:   **192.168.1.25** 

Las posibles direcciones pueden ser 192.168.1.0 hasta 192.168.1.255 (aunque hay algunas que suelen reservarse para otras conexiones).

Una vez que sabemos como es el formato, todos los dispositivos tienen una donde suele cambiar el ultimo grupo de números. Por ejemplo:

* televisor smart TV 192.168.1.35
* móvil de papá 192.168.1.56
* tablet de mamá 192.168.1.15
* pc 192.168.1.26


<span style="display:block;text-align:center">![red]<br>Red pública y red privada.</span>

Así que cada aparato que se conecte a la red interna privada de nuestra casa tendrá una dirección diferente. Si tuviéramos, aunque no es lo normal, dos redes diferentes dentro de nuestra casa, como diferencia normalmente cambiaría el penúltimo grupo de dígitos.

<span style="display:block;text-align:center">![redes]<br>Varias redes privadas</span>

RED 1 192.168.1.XX
RED 2 192.168.2.XX


Pero como no suele ser lo normal en una casa, nos quedamos solo con la primera red. 

Una vez visto todo esto, ya sabemos que cada aparato que se conecta a nuestra red tiene su propia dirección, y nuestro router sepa a qué aparato debe enviar la información que solicitamos y cual de ellos la ha pedido. Si el televisor está solicitando una película de un canal de pago, el router se encarga de enviar los datos al aparato que los haya solicitado (la TV) y no a otros que estén en nuestra red privada de casa que no hubiera solicitado nada. ¿Os imagináis el lío que se podría montar si al llegar los datos solicitados no supiera el router a qué dirección debe mandar esos datos o llegara a todos los dispositivos?


La dirección predeterminada que está reservada a nuestro router, llamada puerta de enlace ( 192.168.1.1), es la dirección donde todos los aparatos conectados envían los datos que salen desde nuestra red privada a internet y entran los datos desde internet dirigidos a nuestros pc, móviles, consolas, smart TV, etc. Este es el funcionamiento de nuestra red privada sin entrar en demasiadas complicaciones ni tecnicismos.

Como resumen, ya sabes lo que es la conexión a Internet, diferentes tipos de conexión, que es la M.A.C. de los dispositivos, que es la dirección IP de la conexión, qué es un router y la puerta de enlace de nuestra red privada con la red pública.

Seguimos en el siguiente post. Hasta pronto.



[red]: /images/redes.png
[redes]: /images/variasRedes.png
[router]: /images/router.png
[modem]: /images/modem.png
[conexion]: /images/conexion.png
