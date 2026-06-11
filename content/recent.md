---
title: نوشته‌ها
aliases:
  - نوشته‌ها
created: 2025-01-01
modified:
publish: true
status:
draft: false
comments: false
---

```base
views:
  - type: cards
    name: تاریخ بروزرسانی
    filters:
      and:
        - draft == false
    order:
      - file.name
      - status
      - modified
    sort:
      - property: modified
        direction: DESC
    image: note.image
    imageAspectRatio: 2
    cardSize: 300
  - type: cards
    name: تاریخ ایجاد
    filters:
      and:
        - draft == false
    order:
      - file.name
      - status
      - modified
    sort:
      - property: created
        direction: DESC
    image: note.image
    cardSize: 300
    imageAspectRatio: 2

```

