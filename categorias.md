---
layout: default
---
<h3>Categories</h3>
<ul>
{% for category in site.categories %}
    <a href="/category/{{ category[0] }}/" style="text-decoration: none;">{% if category[0] == 'Scratch' %}{{ category[0] | upcase }}{% else %}{{ category[0] | capitalize }}{% endif %}</a><br>
{% endfor %}
</ul>
