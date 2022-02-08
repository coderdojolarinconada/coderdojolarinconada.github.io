---
layout: post
title: ¿Qué es Internet y cómo funciona? (2ª parte)
categories: Redes
author: CoderDojo La Rinconada
anyo : "2022"
---

Hola a todos, hoy empezamos con la segunda parte del funcionamiento de las conexiones en Internet.

Siguiendo el hilo de lo que hablamos anteriormente, mi dispositivo envía la petición de una página web hacía Internet. Podría ser una petición de una página web, pero también envío de datos a otro dispositivo, la petición de un video a una red social o una película de algún servicio de Streaming (Netflix, HBO, YouTube).


<span style="display:block;text-align:center">![peticion]</span>

Lo primero que debemos saber que cuando nuestro dispositivo conecta con Internet a través de nuestro router, la IP que tenía anteriormente, la IP privada ya no es la misma en la red pública. Y una vez que sabemos que la IP privada no es la misma que la IP pública, continuamos como funciona y los pasos necesarios.

El usuario quiere conectar con la página de CoderDojo La Rinconada. A través de la IP privada dinámica (que puede cambiar y no es siempre la misma) que nos ha asignado el router mediante el protocolo DHCP (Protocolo de Configuración Dinámica de Host) enviamos la información a través de la puerta de enlace al exterior de nuestra red privada. 

Pero el nombre de CoderDojo La Rinconada, es el alias de la dirección IP del servidor donde se aloja la página web. Es más fácil recordar el nombre que una dirección IP (ejemplo: 215.56.45.78). Y para solucionar esto, existe un servidor llamado DNS (Servidor de nombres de dominio) que va a informar a nuestro pc que esa página tiene esa dirección IP.


<span style="display:block;text-align:center">![dns]</span>

Una vez que ya conocemos la dirección pública de la página web de CoderDojo La Rinconada, nuestro pc comprobará si esa dirección está activa, el servidor responderá y se realizará la petición de datos (página web). Además, los paquetes de información que se envían desde el servidor no siguen el mismo camino, seguirán el más convenga en el momento de salir del servidor. 

El servidor, utilizando el protocolo de transporte TCP, enviará la página web a nuestro dispositivo en muchos paquetes de información numerados, para que nuestro pc sepa como ordenarlos y ver la página correctamente. Una vez nuestro pc comprueba que tiene todos los paquetes de información cerrará la conexión con el servidor. En caso contrario, se pondrá en contacto con el servidor y le pedirá el paquete que falta. Hay que tener en cuenta que algunos paquetes pueden llegar corruptos o puede ser que lleguen paquetes que no sean los correctos. Para evitar que nuestro pc permita el paso de estos paquetes, estos tienen una cabecera en la información que llevan un código, y si el código no es válido, el pc no lo acepta.


<span style="display:block;text-align:center">![red_datos]</span>

Sin embargo, no todos los datos se transportan de la misma forma. En el caso de la página web, se ha utilizado el protocolo TCP, pues es muy importante que llegue toda la información para que nuestra página se vea correctamente. 

Existe también el protocolo de transporte UDP, y en este caso, el servidor que nos pasa los datos le da igual si recibimos todos los datos o no, pues continuamente está mandando paquetes de información. Este protocolo es utilizado para el envío de video y audio generalmente. 

Cuando solicitamos ver un video que está alojado en algún servidor de Internet, nuestro pc se pone en contacto con el servidor y este comienza a enviar datos. Este sistema es utilizado cuando deben transmitirse gran cantidad de datos como en este último ejemplo o en una videoconferencia. 

Probablemente, alguna vez, os habrá pasado que mientras veis un video, aparecen unos cuadros en la imagen y se interrumpe por un breve periodo de tiempo. Pues eso es sencillamente que esos paquetes de información no han llegado, y no importa, porque la transmisión del video continua.

Para terminar, debéis saber que existen diferentes protocolos de conexión y aplicación, como son entre otros:

* FTP- Protocolo de transferencia de archivos (Filezilla)
* RTP- Protocolo de conexión y autenticación del usuario para el envío de video en streaming (Netflix)
* P2P- Transferencia de datos sin utilización de servidores. De Pc a Pc. Peer to peer (Torrent)
* HTTP- Protocolo de transferencia de hipertexto. Página web
* POP3- Protocolo de correo electrónico
* SMTP- Protocolo de correo electrónico


Se ha intentado no ser demasiado técnicos. Esperamos que nos hayamos explicado correctamente, pero si hay alguna duda, no dudéis en contactar con CoderDojo La Rinconada.

Seguimos en el siguiente post. Hasta pronto.

[red_datos]: /images/red_datos.png
[peticion]: /images/peticion.png
[dns]: /images/dns.png









