---
title: Blog
---

# Blog

<ul class="post-list">
{%- for post in collections.blog reversed %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%B %e, %Y' }}</time>
    <p>{{ post.data.description }}</p>
  </li>
{%- endfor %}
</ul>
