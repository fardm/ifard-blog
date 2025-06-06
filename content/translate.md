---
title: چطور از محتوای انگلیسی استفاده کنیم؟ ترجمه سریع همه چیز
aliases:
  - چطور از محتوای انگلیسی استفاده کنیم؟ ترجمه سریع همه چیز
date: 2025-03-31
lastmod: 2025-05-24
draft: false
status: 🌿درختچه
parent: 
order: 
image: 
tags:
  - AI
  - Tech
cssclasses: 
comments: true
emoji: 🌿
---
یکی از مشکلات من استفاده از مطالب انگلیسی هست. بلاگ پست‌ها، خبرها، مقالات و هر چیز دیگه ای که به زبان انگلیسی هست. توی این یادداشت توضیح میدم که از چه روشی برای ترجمه سریع استفاده میکنم. احتمالا شما هم به کارتون میاد.

<br>

## ترجمه سایت
من قبلا از **گوگل ترنسلیت** استفاده میکردم. احتمالا اکثرتون باهاش کار کردید. اگر از مرورگر کروم استفاده میکنید کافیه اون سه نقطه رو بزنید و Translate رو انتخاب کنید تا کل صفحه ترجمه بشه.
![[google tranlate.webp|400]]

اما ترجمه گوگل ترنسلیت چندان خوب نیست و توی ترجمه بعضی از کلمات و جملات اشتباه میکنه. برای ترجمه سریع خوبه اما برای کارهای تخصصی جواب نمیده. به خاطر همین اخیرا از **هوش مصنوعی** و مدل های زبانی برای ترجمه استفاده می‌کنم.

اما مشکل اینجاست که نمیشه هر دفعه کل صفحه رو کپی بگیریم ببریم توی چت تا هوش مصنوعی ترجمه کنه. خوشبختانه یه اکستنشن هست که کار رو راحت کرده. مشابه گوگل ترنسلیت می‌تونید با یک کلیک صفحه رو ترجمه کنید. 

اکستنشن [AIWritingCompanion](https://github.com/iSegaro/AIWritingCompanion) یک api از Gemini یا OpenAi میگیره و خیلی راحت و سریع هر چیزی رو ترجمه میکنه.
از لینک های زیر میتوانید API رایگان بگیرید:
- [Google AI Studio](https://aistudio.google.com/apikey/)
- [OpenRouter API Keys](https://openrouter.ai/settings/keys/)

<br>

> [!ideas]+ مشکل به هم ریختگی متن بعد ترجمه
> وقتی متنی رو ترجمه میکنید چون جهت متن چپ‌چین هست کلمات انگلیسی با کلمات فارسی قاطی میشه و نمیشه مطلب رو فهمید. فرقی هم نمیکنه از گوگل ترنسلیت استفاده کنید یا اکستنشن AIWritingCompanion.
> 
> ![[image-2.webp]]
> 
> برای حل این مشکل کافیه جهت متن رو راستچین کنید. برای اینکار میتونید از افزونه هایی استفاده کنید که یک کد css رو روی مروگر شما فعال می‌کنند. من اکستنشن [User JavaScript and CSS](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) رو پیشنهاد میدم.
> 
> افزونه رو نصب و فعال کنید. بعد روی روی آیکون افزونه کلیک کنید و Settings رو بزنید:
> ![[image-1.webp|300]]
> 
> 1. روی New rule بزنید.
> 2. از فیلد Rule name یک اسم براش انتخاب کنید.
> 3. از  فیلد URL pattern لینک سایت‌هایی که قصد دارید این استایل روی اونها اعمال بشه رو وارد کنید. اگر می خوایید روی همه سایت ها اعمال بشه `*://*/*` رو وارد کنید.
> ![[excss.webp]]
> 
> 4. توی فیلد سمت راست کد زیر رو وارد کنید. این کد علاوه بر براستچین کردن متن فونت وزیر رو هم روی متن اعمال میکنه تا خواناتر بشه.
> ```css
> @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap');
> 
> h1, h2, h3, h4, h5, h6, p, span, a, ul, ol, li {
> 	direction: rtl;
> 	font-family: 'Vazirmatn', sans-serif;
> }
> ```
> 
> 5. آخرش save رو بزنید تا ذخیره بشه.
> 
> دستوراتی که ساختید سمت چپ لیست میشه. میتونید هر کدوم رو خواستید فعال یا غیر فعال کنید. 
> 

<br><br>

## ترجمه زیرنویس
![[translate subtitle]]

<br><br>

## ترجمه صوت یا ویدئو
![[AI Subtitle Creator]]