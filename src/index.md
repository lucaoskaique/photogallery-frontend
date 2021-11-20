---
title: Gallery
layout: layout.liquid
pagination:
  data: photos
  size: 100
  alias: photos
---

<ul>
 <div class="container mx-auto mt-10 space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
 {%- for photo in photos -%}
    <div class="w-full rounded">
        <img src="{{ photo.Image.url }}"
            alt="{{ photo.Description }}">
    </div>
    {%- endfor -%}
</div>
</ul>
