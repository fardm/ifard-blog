---
title: لینک نمادین(Symbolic Link)
aliases:
  - لینک نمادین
date: 2024-08-29
lastmod: 2024-09-20
draft: false
status: 🌱نهال
parent:
order:
image:
tags:
  - Tech
emoji: 🌱
---
لینک نمادین (Symbolic Link) به شما اجازه می‌دهد که یک فایل یا فولدر را طوری به سیستم معرفی کنید که انگار در یک مکان جدید وجود دارد، در حالی که فایل یا فولدر اصلی هنوز در مکان اولیه خودش است. به عبارت دیگر، لینک نمادین یک میان‌بر پیشرفته است که به جای کپی کردن واقعی فایل‌ها، به فایل یا فولدر اصلی اشاره می‌کند. این کار باعث می‌شود که هر تغییری که در فایل اصلی ایجاد شود، به طور خودکار در همه جاهایی که به آن لینک نمادین دسترسی دارند نیز قابل مشاهده باشد.
<br><br>
## ایجاد لینک برای فایل
فرض کنید شما یک یادداشت به نام Note.md در فولدر اول دارید که می‌خواهید آن را در فولدر دوم نیز داشته باشید، بدون اینکه نیاز به کپی کردن و ایجاد دو نسخه مجزا از آن باشد.

 برای اینکار Command Prompt را در حالت Administrator باز کرده و دستور زیر را اجرا کنید:
```
mklink "C:\folder2\Note.md" "C:\folder1\Note.md"
```

این دستور یک لینک نمادین با نام Note.md در فولدر دوم ایجاد می‌کند که به فایل Note.md در فولدر اول اشاره می‌کند. اکنون، وقتی شما فایل Note.md را در فولدر دوم باز می‌کنید، در واقع همان فایل اصلی که در فولدر اول قرار دارد را مشاهده و ویرایش می‌کنید. هر تغییری که انجام دهید، در فایل اصلی نیز منعکس می‌شود. 

این روش کاملاً دو طرفه است. در واقع، شما فقط یک نسخه از فایل دارید، و هر تغییری که در هر یک از مکان‌های لینک شده انجام دهید، مستقیماً روی نسخه دیگر اعمال می‌شود.


> [!question] اگر یک فایل را حذف کنم، فایل دیگر هم حذف می‌شود؟
> بله، اگر فایل اصلی را حذف کنید، لینک نمادین نیز بی‌اثر می‌شود و به‌طور خودکار دیگر به هیچ چیزی اشاره نمی‌کند. اما اگر لینک نمادین را حذف کنید فقط لینک حذف می‌شود و فایل اصلی همچنان در مکان اولیه خود باقی خواهد ماند. برای مثال، اگر شما لینک موجود در فولدر دوم را حذف کنید، فایل اصلی در فولدر اول همچنان وجود دارد.

<br><br>

## ایجاد لینک برای فولدر
علاوه بر فایل می توانید یک پوشه کامل را با این روش لینک کنید.  با این کار، تمام فایل‌ها و زیرپوشه‌های داخل آن پوشه نیز به‌صورت خودکار همگام‌سازی (سینک) می‌شوند. 

برای لینک کردن فولدر دستور زیر را اجرا کنید:
```
mklink /D "C:\folder2\LinkedFolder" "C:\folder1\OriginalFolder"
```

> [!tip] مطابقت نام
> هم نام بودن نام پوشه‌ها یا فایل ها ضروری نیست. شما می‌توانید لینک نمادین یک فایل را با هر نامی که می‌خواهید ایجاد کنید، حتی اگر نام فایل لینک‌شده با فایل اصلی متفاوت باشد.

<br><br>

## فرق لینک نمادین و شورتکات
لینک نمادین (Symbolic Link) و شورتکات (Shortcut) از نظر عملکرد و کاربری با هم تفاوت‌های اساسی دارند، اگرچه هر دو به نوعی به فایل یا پوشه‌ای دیگر ارجاع می‌دهند.

**لینک نمادین**
لینک نمادین به‌عنوان بخشی از سیستم فایل تلقی می‌شود. وقتی یک برنامه یا سیستم عامل به لینک نمادین دسترسی پیدا می‌کند، دقیقاً همانند دسترسی به فایل یا پوشه اصلی رفتار می‌کند. در نتیجه، اگر شما درون یک برنامه به لینک نمادین اشاره کنید (مثلاً باز کردن یک فایل در Obsidian)، برنامه به‌طور خودکار فایل اصلی را باز می‌کند، بدون اینکه تفاوتی بین لینک نمادین و فایل اصلی قائل شود. لینک نمادین بیشتر برای همگام‌سازی و یکپارچه‌سازی فایل‌ها و پوشه‌ها در سیستم فایل استفاده می‌شود. 

**شورتکات**
شورتکات فقط یک فایل معمولی است که حاوی اطلاعاتی درباره محل فایل یا پوشه اصلی است. این فایل معمولاً با یک آیکون خاص نمایش داده می‌شود و هنگام کلیک روی آن، به محل اصلی فایل هدایت می‌شوید. شورتکات‌ها توسط برنامه‌ها به‌عنوان فایل‌های جداگانه‌ای شناخته می‌شوند و خود فایل یا پوشه اصلی را به‌صورت مستقیم در اختیار قرار نمی‌دهند.  
شورتکات بیشتر به‌عنوان میان‌برهای کاربری استفاده می‌شود که به‌صورت گرافیکی به کاربر اجازه می‌دهند تا سریعاً به یک فایل یا پوشه دسترسی پیدا کنند.