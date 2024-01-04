---
layout: page
title: Listado anual de posts
description: Listado de todos los post publicados en CoderDojo La Rinconada, filtrados por año.
---
<h1 class="titulo">Listado de posts por año</h1>

<!-- <a class="boton-negro-verde" href="{{ site.baseurl }}/noticias/" alt="Enlace para volver al blog">Volver al blog</a> -->

{% assign numeros = "2024,2023,2022,2021,2020,2019"|split: ',' %}

<div class="listado container">

{% for numero in numeros %} 
  <h3>Año {{ numero }}:</h3>
  <ul>
  {% for post in site.posts %}
    {% if post.anyo == numero %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}

</div>
