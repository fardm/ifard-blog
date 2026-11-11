---
title: پیش‌نمایش کوارتز
aliases:
  - پیش‌نمایش کوارتز
created: 2024-09-06
comments: true
modified: 2026-06-03
draft: false
image: "[[none.webp]]"
---
## مواردی که پشتیبانی می‌کند


### هدینگ‌ها
```
# تیتر 1
## تیتر 2
### تیتر 3
#### تیتر 4
##### تیتر 5
###### تیتر 6
```

<br>

### پاراگراف
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.

<br>

### استایل متن
**متن بولد**

~~متن خط خورده~~

*متن ایتالیک*

==متن هایلایت شده==

<br>

### لینک

`[[obsidian-publish|لینک داخلی]]`

`[لینک خارجی](https://example.com)`


### تگ

`#تست`

<br>

### لیست

1. یک
2. دو
3. سه


- یک
- دو
- سه

<br>

### تسک

- [ ] یک
- [x] دو
- [ ] سه

<br>

<br>

### جدول

| تیتر |                           توضیح                            |
| :--: | :--------------------------------------------------------: |
|  یک  | لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. |
|  دو  | لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. |

<br>


### کد
```js
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('p, div, span');
```

```
EmbededCover
```

`code`

<br>

### نقل قول

> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.


<br>

### ‌کال‌اوت
> [!quote]+ نقل قول
> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است

> [!example]- مثال
> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است

> [!info] اطلاعات
> 

> [!NOTE] یادداشت
> 

> [!abstract] خلاصه
> 

> [!tip] نکته

> [!warning] توجه

> [!question] سوال

> [!todo] تو دو

> [!success] تیک

> [!failure] ناموفق

> [!danger] خطر

> [!bug] باگ

<br>

### تصویر
محلی
![[pkm.webp]]

خارجی


![image | 200](https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg)

<br>

### دیاگرام


```mermaid
flowchart TD
A([مدخل‌ها])
A --- B([📝 یادداشت‌برداری])
A --- C([🔮 ابسیدین])
A --- D([📅 روزنوشته])

click B "یادداشت برداری"
click C "ابسیدین"
click D "روزنوشته.html"




classDef default fill:#fff,stroke:gray, stroke-width:1px,color:#282828;
linkStyle default stroke:gray,stroke-width:1px;

```


<br><br>

### نوارپیشرفت (progress)

<progress max=100 value=75> </progress> 75%


<br><br>

### دکمه (button)

<div style="text-align: center;">
<button 
	style="	background-color: black; color: white; padding: 8px 20px; border: none; border-radius: 10px; cursor: pointer; transition: background-color 0.3s ease;"	onclick="location.href='https://example.com/';">
     کلیک کنید
</button>
</div>



<br><br>

### پاورقی

لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.[^1]

لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.[^2]




[^1]: پاورقی شماره یک.
[^2]: پاورقی شماره دو.


<br>

### ریاضی

$$
f(x) = \int_{-\infty}^\infty
    f\hat(\xi),e^{2 \pi i \xi x}
    \,d\xi
$$


<br>

### کنواس (canvas)

![[canvas.canvas]]

<br>

### بیس (Bases)

```base
views:
  - type: cards
    name: view
    filters:
      and:
        - or:
            - file.name == "obsidian-review"
            - file.name == "obsidian-install"
    sort:
      - property: file.name
        direction: DESC
    image: note.image
    cardSize: 200
  - type: table
    name: view 2
    filters:
      and:
        - or:
            - file.name == "obsidian-review"
            - file.name == "obsidian-install"
    sort:
      - property: file.name
        direction: DESC
    image: note.image
    cardSize: 200
  - type: list
    name: view 3
    filters:
      and:
        - or:
            - file.name == "obsidian-review"
            - file.name == "obsidian-install"
    sort: []
    image: note.image
    cardSize: 200

```

<br><br>


## مواردی که پشتیبانی نمی‌کند

### پلاگین دیتاویو (dataview)

```dataview
table without id
file.link as "فایل"
from "content/note"
```

(البته میشه از پلاگین [Obsidian Dataview Serializer](https://github.com/dsebastien/obsidian-dataview-serializer) یا [quartz-syncer](https://github.com/saberzero1/quartz-syncer) استفاده کرد)


<br>