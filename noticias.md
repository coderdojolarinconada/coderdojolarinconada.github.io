---
layout: default
title: Blog
---
<!--<h2><a href="/listado/">Listado por años</a></h2>-->

<div class="posts">
{% for post in site.posts %}
<article class="post">

<h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

<div class="entry">
{{ post.excerpt }}
</div>

<a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Sigue leyendo</a>
</article>
{% endfor %}
</div>
