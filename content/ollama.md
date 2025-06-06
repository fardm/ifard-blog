---
title: راهنمای استفاده از اولاما(Ollama)
aliases:
  - راهنمای استفاده از اولاما(Ollama)
date: 2024-09-12
lastmod: 2025-05-21
draft: false
status: 🌿درختچه
parent:
  - "[[ai]]"
order: "1"
image: ollama.svg
tags:
  - AI
emoji: 🌿
---
![[ollama.svg]]

برای استفاده از هوش مصنوعی، سرویس‌های مختلفی وجود دارند. یکی از سرویس‌های محبوب و رایگان، Ollama است که به کمک آن می‌توانید مدل‌های زبانی بزرگ را روی سیستم خود اجرا کنید. در ادامه یاد می‌گیرید چگونه این سرویس را نصب کرده و از طریق روش‌های مختلف با آن ارتباط برقرار کنید.

<br/>

## معرفی Ollama
اگر قصد دارید مدل‌های زبانی بزرگ (LLM) را روی سیستم خود اجرا کنید، یکی از راحت‌ترین روش‌ها استفاده از پلتفرم Ollama است. **اولاما** یک پلتفرم اوپن‌سورس است که به شما اجازه می‌دهد بدون نیاز به سرور‌های قوی یا دانش فنی، مدل‌های زبانی مختلف را به راحتی دانلود، نصب و استفاده کنید.


 استفاده از **اولاما** رایگان است و شما بدون هیچ هزینه یا محدودیتی می‌توانید از مدل‌های زبانی مختلف استفاده کنید. 
 
 این پلتفرم امنیت بالایی دارد. اگر اطلاعات خصوصی یا حساسی دارید که نمی خواهید با دیگران به اشتراک بگذارید استفاده از این روش گزینه مناسبی است. چون بر خلاف سرویس‌هایی مثل چتGPT که اطلاعات شما به سرورهای آن ارسال می شوند، در **اولاما** مدل های زبانی مستقیما روی سیستم شما نصب شده و بدون نیاز به اینترنت اجرا می شوند. به این ترتیب اطمینان دارید که اطلاعات شما تحت هیچ شرایطی به سرورهای خارجی ارسال نخواهند شد.

<br/><br/>

## گام اول: نصب اولاما
برای استفاده از مدل‌های زبانی، اول باید اولاما رو نصب کنید. به سایت [ollama.com](https://ollama.com/) رفته و نسخه مناسب با سیستم عامل خود را دانلود و نصب کنید. (نصب آن آسان است و تنظیم خاصی ندارد)
![[Screenshot113613.webp]]

بعد از نصب، آیکون برنامه به منوی start ویندوز اضافه می‌شود. روی آن کلیک کنید تا اجرا شود. بعد از کلیک صفحه خاصی باز نمی شود، فقط اولاما در حالت اجرا قرار گرفته و آیکون برنامه در نوار وظیفه ویندوز اضافه می‌شود.
![[Pasted image 20240911115136.png|200]]

<br/><br/>

## گام دوم: نصب مدل‌ها
بعد از نصب، باید مدل زبانی مدنظر خود را دانلود کنید. در [ollama.com/library](https://ollama.com/library "ollama model library") می توانید فهرست همه مدل ها را مشاهده کنید. در [صفحه گیت هاب اولاما](https://github.com/ollama/ollama) یک جدول وجود دارد که حجم و مقدار پارامتر هر مدل را توضیح داده است.

![[Screenshot112438.webp]]

طبق توضیح اولاما برای مدل‌های 7B باید حداقل 8 گیگ رم، مدل‌های 13B حداقل 16 گیگ رم و مدل‌های 33B حداقل 32 گیگ رم داشته باشید. هر چه قدر حجم مدل بیشتر باشد پردازش آن هم طولانی‌تر می‌شود. اگر سیستم قوی ندارید، از مدل‌های کوچک‌تر استفاده کنید.

مدل خود را انتخاب کرده و به صفحه مخصوص آن بروید. مثلا من قصد دارم مدل [llama3.1](https://ollama.com/library/llama3.1) را اجرا کنم.
![[llama3.1.webp]]
 
 برای دانلود مدل کافیست کامند `ollama run llama3.1` را در ترمینال وارد کنید.  اگر از ویندوز استفاده می‌کنید، ابتدا **CMD (Command Prompt)** را باز کنید. برای این کار:

کلیدهای **Win + R** را فشار دهید، سپس عبارت `cmd` را تایپ کرده و **Enter** بزنید. یا در **نوار جستجوی ویندوز**، عبارت `cmd` را تایپ کنید و روی **Command Prompt** کلیک کنید. پس از باز شدن CMD، برای دانلود مدل کافیست دستور زیر را وارد کنید:
```
ollama run llama3.1
```

  بعد از تکمیل دانلود مدل آماده اجرا است و در همان ترمینال میتوانید با آن چت کنید.
 ![[Pasted image 20240911201143.png|500]]
برای مشاهده مدل‌های نصب شده می توانید از دستور `ollama list` و برای دیدن مدل در حال اجرا از دستور `ollama ps` استفاده کنید.

مدل های دانلود شده در مسیر `C:\Users\%username%\.ollama\models` قرار می‌گیرند. برای حذف مدل‌های نصب شده به جای حذف آنها از این پوشه بهتر است از دستور `ollama rm model-name` استفاده کنید.

موارد بیشتر را می توانید در [صفحه گیت هاب](https://github.com/ollama/ollama) یا [سوالات متداول](https://github.com/ollama/ollama/blob/main/docs/faq.md) مطالعه کنید.

<br/>

> [!question] آیا مدل‌ها از زبان فارسی پشتیبانی می کنند؟
> بله، بعضی از مدل‌ها از زبان فارسی پشتیبانی می‌کنند و اگر پرامپت فارسی بنویسید پاسخ شما را به زبان فارسی می‌نویسند. مدل های زیر علاوه بر پشتیبانی از زبان فارسی عملکرد بالایی دارند:
> - **مدل gemma:** یک مدل چند زبانه است که توسط گوگل توسعه یافته. سرعت و عملکرد بالایی دارد و در تولید متن به زبان فارسی بهتر عمل می کند. (دانلود نسخه [gemma3](https://ollama.com/library/gemma3))
> - **مدل llama:** این مدل توسط شرکت متا ساخته شده. (دانلود نسخه [llama3.1](https://ollama.com/library/llama3.1))
> - **مدل qwen:** یک مدل چینی است که توسط شرکت Alibaba Cloud توسعه داده شده. (دانلود نسخه [qwen2](https://ollama.com/library/qwen2))
> - **مدل deepseek:** این هم یک مدل چینی است که به خاطر عملکردش معروف تر وشناخته شده تر هست. ورژن های مختلف این مدل هم از طریق سایت اولاما قابل دانلود و استفاده است. (دانلود نسخه [deepseek-r1](https://ollama.com/library/deepseek-r1 "deepseek-r1"))
> 
> با توجه به اینکه این مدل‌ها به طور مداوم به‌روزرسانی می شوند و نسخه‌های جدیدی منتشر می‌شوند، توصیه می‌کنم خودتان در سایت اولاما جستجو کرده و آخرین نسخه را دانلود کنید. اگر فرصت کافی برای تست تمام مدل‌ها ندارید پیشنهاد می‌کنم از gemma استفاده کنید. نسبت به سایر مدل‌ها سرعت و عملکرد بهینه تری دارد.
> 
> یک مدل هم هست به اسم [dorna-llama3](https://ollama.com/partai/dorna-llama3) که توسط «مرکز تحقیقات هوش مصنوعی پارت» روی داده های فارسی آموزش دیده.([+](https://partdp.ai/blog/dorna/)) البته توقع نداشته باشید که این مدل بهتر از مدل های دیگر باشد. در حال حاضر مدل llama3.1 عملکرد بسیار بهتری از درنا دارد که روی نسخه 3 آموزش دیده.[^1]
> 
> اگر شما مدل‌های دیگری را تست کردید و نتیجه بهتری گرفتید می‌توانید در کامنت‌های همین صفحه به اشتراک بگذارید.


<br/><br/>

## گام سوم: استفاده از محیط‌های تعاملی
چت کردن با مدل‌ها در محیط ترمینال کمی پیچیده است و به همین خاطر ممکن است برای همه راحت و جذاب نباشد. خوشبختانه با استفاده از افزونه‌ها و پلاگین‌های مختلف می‌توانیم از محیط های تعاملی پیشرفته تری استفاده کنیم. این محیط‌ها امکان دسترسی آسان‌تر به قابلیت‌های مدل را فراهم می‌کنند و به کاربران اجازه می‌دهند بدون نیاز به دستورات پیچیده، از توانایی‌های مدل به بهترین شکل استفاده کنند. موارد مختلف و متعددی از این رابط‌ها وجود دارد که در اینجا به چند مورد از آنها اشاره می‌کنم.

<br/>

### افزونه Page Assist
![[Screenshot124227.webp]]

راحت ترین و پر امکانات ترین روش استفاده از افزونه Page Assist است که بدون دردسر روی مروگر شما نصب می شود. یک رابط کاربری ساده دارد که بدون مشکل می توانید در آن چت کنید.

بخشی از امکانات این افزونه:
- رابط کاربری فارسی
- امکان جستجو در وب
- چت کردن بر اساس یک صفحه وب مشخص (حالت side panel)
- مدیریت مدل‌ها :دانلود، آپدیت و حذف مدل‌
- مدیریت دانش :جستجو در دیتای شما با رویکرد [[RAG]]
- مدیریت پرامپت :ساخت پرامپت از پیش تعریف شده
- ذخیره تاریخچه چت، امکان حذف سابقه
- اشتراک گذاری چت به صورت عمومی
- ایمپورت و اکسپورت گرفتن از داده‌ها (سابقه چت، پرامپت‌ها و پایگاه دانش)

> [!purple] 🛠️ نصب و استفاده
> 
> برای نصب به صفحه گیت‌هاب [Page Assist](https://github.com/n4ze3m/page-assist) مراجعه کنید.
> 
> آموزش استفاده از این افزونه را هم می‌توانید در این ویدئو مشاهده کنید:
> 
>  [This Chrome Extension Surprised Me](https://www.youtube.com/watch?v=IvLTlDy9G8c)
> 

<br/><br/>
### رابط Open WebUI

![[webui.webp]]

با Open WebUI یک رابط کاربری مشابه چتGPT خواهید داشت. به راحتی می توانید مدل های مختلف را انتخاب و چت کنید. مشابه افزونه قبلی از امکانات مختلفی پشتیبانی می کند: مدیریت دانش(RAG)، مدیریت مدل‌ها، مدیریت پرامپت‌ها، ذخیره تاریخچه چت، رابط کاربری فارسی و غیره.

> [!purple] 🛠️ نصب و استفاده
> برای نصب به صفحه گیت‌هاب [Open WebUI](https://github.com/open-webui/open-webui) مراجعه کنید.
> (اگر قصد دارید از پایتون برای نصب این رابط کاربری استفاده کنید حتما باید از نسخه 3.11 استفاده کنید. اگر فایل اینستالر این نسخه را پیدا نکردید میتوانید از [آرشیو](https://www.python.org/ftp/python/) آن را دانلود کنید.)
> 
> علاوه بر روش های نصبی که داخل این صفحه گفته شده می توانید از طریق نرم افزار [pinokio](https://pinokio.computer/) هم این رابط کاربری را نصب کنید.
> 

<br/><br/>

### پلاگین‌های ابسیدین
اگر از [[obsidian review|نرم افزار ابسیدین]] استفاده می‌کنید می‌توانید به راحتی با نصب یک پلاگین از مدل‌های زبانی در محیط این نرم‌افزار استفاده کنید. این پلاگین ها عبارت اند از:
- Local GPT
- Text Generator
- Smart Second Brain
- Copilot
- BMO Chatbot
- Quiz Generator

در یادداشت [[ai in obsidian|استفاده از هوش مصنوعی در ابسیدین]] این پلاگین‌ها را به طور مفصل معرفی و بررسی کردم.



[^1]: . محمد علی صدرایی توضیح صادقانه ای در مورد این مدل ها داده: [00:50:52](https://youtu.be/dAsCc7AiIsY?si=RbKESnChW0OgzQm9&t=3052)