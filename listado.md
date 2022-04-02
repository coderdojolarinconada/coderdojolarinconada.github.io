---
layout: default
---
{% assign numeros = "2022,2021,2020,2019"|split: ',' %}
{% for numero in numeros %} 
  Posts año {{ numero }}:
  <ul>
  {% for post in site.posts %}
    {% if post.anyo == numero %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}


