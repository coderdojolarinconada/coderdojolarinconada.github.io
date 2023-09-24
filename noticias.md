---
layout: default
title: Blog | Noticias
---

<h1 class="center">Para estar al día</h1>

<div class="posicion-calendar">
    <div class="anyos">
        <a href="/listado/"><img src="{{site.baseurl}}/images/calendar.png"/></a>
    </div>
</div>

<div class="posts container">
{% for post in site.posts %} <!--site.posts-->
<article class="post">

<h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

<div class="entry">
{{ post.excerpt }}
</div>

<a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Sigue leyendo</a>
</article>
{% endfor %}
</div>


