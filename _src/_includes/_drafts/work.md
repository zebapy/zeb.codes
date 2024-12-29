---
title: What I've worked on
text: Since I wrote my first lines of code in 2010, I've been passionate about building things for the internet. I do it for professional work and for the love of it. Dig in.
---

<ul>
{% for post in collections.work %}
  <li>
    <a href="{{post.url}}">
      <article>
        <h3>{{post.data.title}}</h3>
        <p>{{post.data.text}}</p>
      </article>
    </a>
  </li>
{% endfor %}
</ul>
