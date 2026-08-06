---
title: 📋گزارش‌های شخصی
aliases:
  - 📋گزارش‌های شخصی
cssclasses:
comments: false
created: 2025-01-01
draft: false
image: "[[reports.webp]]"
---


```base
views:
  - type: cards
    name: view
    filters:
      and:
        - and:
            - file.name.startsWith("report")
            - file.name != "reports"
            - '!file.name.endsWith("webp")'
    sort:
      - property: file.name
        direction: DESC
    image: note.image
    cardSize: 300

```
