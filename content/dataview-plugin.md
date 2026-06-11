---
title: نمونه های کاربردی پلاگین دیتاویو
aliases:
  - نمونه های کاربردی پلاگین دیتاویو
created: 2024-07-04
modified: 2026-01-09
publish: true
tags:
status: 🌱
cssclasses:
  - fill-table
comments: true
draft: false
image: "[[dataview.webp]]"
---

![[dataview.webp]]

پلاگین دیتا ویو یکی از قدرتمند ترین پلاگین ها در استخراج داده است. در این یادداشت موارد کاربردی که تا به حال از آنها استفاده کردم را مستند کردم تا هم مرجعی باشد برای خودم هم راهنمایی باشد برای کسانی که میخواهند از امکانات این پلاگین استفاده کنند.
<br><br>
## ۱. محاسبات
### جمع زدن
برای جمع مقادیر موجود در یک پراپرتی می توانید از تابع sum استفاده کنید:
```md
TABLE WITHOUT ID
	sum(rows.yourproperties)
GROUP BY ""
```
‌
<br><br>
### شمردن
با تابع length می توانید فایل ها را بشمارید. فرض کنید می خواهید هر فایلی که تگ book دارد را بشمارید. تابع زیر این کار را انجام می دهد:
```md
TABLE WITHOUT ID
	length(rows) + " جلد کتاب" as count,
FROM #Book 
GROUP BY ""
```

می توانید نتایج را فیلتر کنید. مثلا فقط پراپرتی هایی جمع آوری شود که مقدار آن برابر با true باشد. تابع زیر این کار را انجام می دهد:
```md
TABLE WITHOUT ID
    length(filter(rows, (r) => r. yourproperties= true))
GROUP BY ""
```

<br><br>
### میانگین، حداکثر، حداقل
با توابع زیر هم میتوانید میانگین، حداکثر و حداقل اعداد را محاسبه کنید:
```md
TABLE WITHOUT ID Count, Total, Average, Minimum, Maximum
GROUP BY ""
FLATTEN length(rows.yourproperties) as Count
FLATTEN sum(rows.yourproperties) as Total
FLATTEN Total / Count as Average
FLATTEN min(rows.yourproperties) as Minimum
FLATTEN max(rows.yourproperties) as Maximum
```

> [!info] توضیحات بیشتر
> [Dataview Sums and Average](https://forum.obsidian.md/t/dataview-sums-and-average/53567)
> 

<br><br>
### رند کردن
از تابع round می توانید برای رند کردن اعداد استفاده کنید. مثلا تابع زیر جمع یک پراپرتی خاص را رند کرده و رقم اعشاری را مخفی میکند:
```md
round(sum(rows.yourproperties))
```

همچنین می توانید مشخص کنید چند رقم اعشار نمایش داده شود. مثلا تابع زیر فقط دو رقم اعشار را نمایش می دهد:
```md
round(sum(rows.yourproperties),2)
```

با این تابع میتوانیم واحد جمع زدن را هم مشخص کنیم. فرض کنید در یک پراپرتی مدت زمان را وارد کردید. به این شکل:
```md
file1
---
length: 3h
---

file2
---
length: 2h 50min
---

 file3...
```

اگر این مقادیر را جمع بزنیم دیتاویو به طور پیشفرض با افزایش حاصل جمع از واحد های بزرگ تر استفاده میکند. مثلا 25 ساعت را 1 روز 1 ساعت نمایش میدهد. یا 169 ساعت را یک هفته و یک ساعت نشان می دهد و همین طور با ماه و سال. با تابع round می توانیم مشخص کنیم که جمع زدن بر اساس چه واحدی باشد. مثلا تابع زیر حاصل جمع را به ساعت نشان می دهد:
```md
round(sum(rows.length.hours),1)
```

<br><br>
### درصد گرفتن
می خواییم درصد بگیریم. مثلا ببینیم یه کار چه قدر پیشرفت کرده. یا مثلا مشغول مطالعه کتاب هستیم چه قدر از کتاب رو مطالعه کردیم.
این صفحه یادداشت شماست:
```md
---
title: your-title
tags: book
current: 150
total: 300
---
```

تعداد کل صفحات در پراپرتی total می نویسیم و تعداد صفحاتی که خوانده شده را در current. برای درصد گرفتن نیاز به یک ضرب و تقسیم ساده داریم: current÷total×100.

به این شکل:
```md
TABLE WITHOUT ID
    title as Title,
	round(current/total*100) + "%" as Progress
FROM #book
```

<br><br>

## ۲. نمایش نوار پیشرفت
در حالت عادی اگر از کد زیر داخل فایل ها تون استفاده کنید یک نوار پیشرفت به شما نمایش میده.
```html
<progress max=100 value=75> </progress> 75%
```
به این شکل:
<div style="direction: ltr; background-color: #8080800a; border-radius: 8px; padding: 10px; text-align: center;" > 
<progress max=100 value=75> </progress> 75%
</div>

مقدار `value` و `max` این نوار پیشرفت تنظیم می‌شود. `value` درصد تکمیل‌شدن تسک‌ها را نشان می‌دهد و `max='100'` حداکثر مقدار نوار را به 100 تنظیم می‌کند.

از این نوار پیشرفت برای نمایش موارد مختلفی میشه استفاده کرد اینجا به دو موردش اشاره میکنم:
<br><br>
### حالت اول: جمع آوری تسک‌ها
فرض کنید توی یک صفحه تسک های مختلفی ایجاد کردید حالا میخوایید درصد پیشرفت کار رو مشاهده کنید. مثلا این محتوای یادداشت شماست:
```md
- [x] کار یک
- [ ] کار دو
- [ ] کار سه
- [ ] کار چهار
```
با استفاده از این کد می تونیم درصد پیشرفت کار رو ببینیم:
```md
TABLE WITHOUT ID
	"<progress value='" + (length(filter(this.file.tasks.completed, (t) => t = true)) / length(this.file.tasks)) * 100 + "' max='100'></progress>" + round((length(filter(this.file.tasks.completed, (t) => t = true)) / length(this.file.tasks)) * 100) + "% completed" as "Progress Bar"
GROUP BY ""
```

نتیجه کار به این شکل خواهد بود:
<div style="direction: ltr; background-color: #8080800a; border-radius: 8px; padding: 10px; text-align: center;"> 
<progress max=100 value=25> </progress> 25%
</div>
<br><br>
البته این کد فقط تسک هایی که توی یادداشت فعلی تون وجود داره رو جمع آوری میکنه. اگر میخوایید تسک ها از همه فایل ها جمع آوری بشه و خودتون اون ها رو فیلتر کنید میتونید از کد زیر استفاده کنید:

```md
TABLE WITHOUT ID
Total, Complete,  "<progress value='" + (Complete * 100 / Total) + "' max='100'></progress>" AS "Progress Bar", Percent
FROM ""
WHERE file.tasks 
GROUP BY ""
FLATTEN length(sum(rows.file.tasks.status)) as Total
FLATTEN length(filter(sum(rows.file.tasks.status), (t) => t = "A" or t = "x")) as Complete
FLATTEN round(Complete * 100 / Total) + "%" as Percent
```

نتیجه میشه این:
![[image05235.png]]

اگر هم میخوایید خلاصه تر باشه و فقط نوار و درصد رو نشون بده از این استفاده کنید:
```md
TABLE WITHOUT ID
round(Complete * 100 / Total) + "% " + "<progress value='" + (Complete * 100 / Total) + "' max='100'></progress>" AS "Progress Bar"
FROM ""
WHERE file.tasks 
GROUP BY ""
FLATTEN length(sum(rows.file.tasks.status)) as Total
FLATTEN length(filter(sum(rows.file.tasks.status), (t) => t = "A" or t = "x")) as Complete
```
<br><br>

> [!info] توضیحات بیشتر
> - [Progress bar for notes (Easy and powerful) with dataview](https://forum.obsidian.md/t/progress-bar-for-notes-easy-and-powerful-with-dataview/33144)
> - [Progress bar for incomplete/total tasks](https://forum.obsidian.md/t/progress-bar-for-incomplete-total-tasks/30744)
> - [Dataview query for all tasks in folder with custom status](https://forum.obsidian.md/t/dataview-query-for-all-tasks-in-folder-with-custom-status/56076)
> 

<br><br>
### حالت دوم: محاسبه پراپرتی‌ها
اگر می خوایید از اعداد و ارقام داخل پراپرتی ها استفاده کنید می تونید با نوار پیشرفت نمایش بدین. برای اینکار روش های مختلفی وجود داره:

#### روش اول
اون کد رو مستقیما توی پراپرتی وارد کنید به این شکل:
```md
---
title: your-title
tags: note
progress_bar: <progress max=100 value=0> </progress> 0%
---
```

برای هر یادداشت هم لازمه مقدایر صفر رو دستی تغییر بدین. یعنی اگر 50 درصد کار پیشرفته باید عدد های صفر رو روی 50 بذارید. من میذارم روی همون صفر باشه. حالا با کد زیر می تونید اطلاعات رو استخراج کنید:
```md
TABLE WITHOUT ID
    title as Title,
	 progress_bar as "Progress Bar"
FROM #note
```

نتیجه کار به این شکل خواهد بود:
<div style="direction: ltr; background-color: #8080800a; border-radius: 8px; padding: 10px; text-align: center;" > 
<progress max=100 value=0> </progress> 0%
</div>
<br> <br>

#### روش دوم
این روش یه کم پویا تره. به جای اینکه کد نوار پیشرفت رو داخل پراپرتی ها قرار بدیم داخل دیتا ویو قرار میدیم. یعنی داخل پراپرتی  فقط عدد(درصد پیشرفت کار) رو وارد می کنیم. بعد با استفاده از دیتا ویو اون عدد رو به صورت نوار پیشرفت نمایش میدیم.

فرض کنید این یادداشت شماست:
```md
---
title: your-title
tags: note
progress_bar: 25
---
```

اینجا در پراپرتی progress_bar مثلا مشخص کردیم که 25 درصد کار پیش رفته. حالا با کد زیر می تونیم توی دیتا ویو نمایش بدیم:
```md
TABLE WITHOUT ID
    title as Title,
	 "<progress max=100 value=" + progress_bar + "> </progress> " + progress_bar + "%" as "Progress Bar"
FROM #note
```

نتیجه به این شکل خواهد بود:
<div style="direction: ltr; background-color: #8080800a; border-radius: 8px; padding: 10px; text-align: center;" > 
<progress max=100 value=25> </progress> 25%
</div>
<br> <br>

#### روش سوم
بعضی وقتا درصد کار مشخص نیست و میخواییم خود دیتا ویو اون رو محاسبه کنه. فرض کنید در حال مطالعه یک کتاب هستیم. تعداد کل صفحات 300 صفحه است و ما 150 صفحه رو خوندیم حالا می خوایم پیشرفت کار رو بیینیم.
توی صفحه یادداشت این موارد رو نیاز داریم:
```md
---
title: your-title
tags: book
current: 150
total: 300
---
```

بالاتر نحوه محاسبه کردن و درصد گرفتن رو توضیح دادم اینجا عینا از همون کد استفاده می کنیم فقط کد رو باید به نحوی جایگذاری کنیم که نتیجه نهایی به جای نمایش یک عدد یک نوار پیشرفت رو نشون بده. به این شکل:
```md
TABLE WITHOUT ID
    title as Title,
    "<progress max=" + pages + " value=" + current + "> </progress> " + round(current/pages*100) + "%" as Progress
FROM #book
```

نتیجه به این شکل خواهد بود:
<div style="direction: ltr; background-color: #8080800a; border-radius: 8px; padding: 10px; text-align: center;" > 
<progress max=100 value=75> </progress> 50%
</div>

<br><br>

## ۳. نمایش تصاویر
اگر توی پراپرتی ها لینک تصویر رو گذاشته باشید با دیتا ویو میشه اون رو نمایش داد.  اینجا سه حالت وجود داره:

### حالت اول: لینک خارجی
زمانی که از لینک خارجی تصویر استفاده کردید یعنی به این شکل:
```md
---
cover: https://www.example.com/imagelink
---
```

میتونید از این کد استفاده کنید:
```md
table without id 
	"![cover|100](" + cover_self + ")" as cover,
	file.link as Title
```

<br>

### حالت دوم: لینک داخلی
زمانی که از تصویر ذخیره شده روی حافظه محلی (داخل والت) استفاده کردید به این شکل:
```md
---
cover: yourimage.png   /  [[yourimage.png]]
---
```
(فرقی هم نمیکنه فقط اسم فایل رو داخل پراپرتی بنویسید یا اینکه داخل دو تا براکت قرار بدید.)

میتونید از این کد استفاده کنید:
```md
table without id 
	embed(cover) as cover,
	file.link as Title
```

اندازه عکس رو هم اینطوری میتونید تنظیم کنید:
```md
embed(link(image, "200"))
```

<br>

### حالت سوم: ترکیب خارجی و داخلی
اگر هم از لینک خارجی استفاده کردید هم از لینک داخلی، یعنی یکسری از فایلها لینک خارجی دارند، یکسری دیگه لینک داخلی، میتونید از این کد استفاده کنید:
```md
table without id EmbededCover, file.link
FLATTEN choice(typeof(cover)="link", embed(link(meta(choice(typeof(cover)="link", cover, this.file.link ) ).path)), "![](" + cover_self + ")") AS EmbededCover
```
این یک تابع شرطی است که مقادیر موجود در فیلد cover رو بررسی میکنه. اگر لینک داخلی باشه دستور `embed(link(meta(...).path))` اجرا میشه. اگر لینک خارجی باشه دستور `"![](" + cover_self + ")` اجرا میشه.



<br> <br>

> [!info] توضیحات بیشتر
> - [Display images in a dataview table](https://s-blu.github.io/obsidian_dataview_example_vault/20%20Dataview%20Queries/Display%20images%20in%20a%20dataview%20table/)
> - [Functions](https://blacksmithgu.github.io/obsidian-dataview/reference/functions/#embedlink-embed)
> 

<br><br>

## ۴. نمایش شرطی

فرض کنید میخواییم یک هبیت ترکر بسازیم و گزارش هفتگی از عادت هامون بگیریم. مثلا در این فایل فعالیت ها رو به صورت تسک داخل پراپرتی ها تعریف کردیم:
```md
---
exercise: true
reading: false
---
```

حالا با این کد میتونیم اطلاعاتشو استخراج کنیم:
```md
Table without ID
	file.link as "تاریخ",
	choice(exercise=false, "⬜", "✅") as 🏋️,
	choice(reading=false, "⬜", "✅") as 📚
FROM #journal
WHERE file.name >= ("2024-04-23") AND file.name <= ("{{2024-04-30}}")
SORT file.link Asc
```

این میشه نتیجه نهایی. اگر تسک انجام شده باشه ✅ نمایش میده اگر انجام نشده باشه ⬜ نمایش میده

|   تاریخ    | 🏋️ | 📚  |
| :--------: | :-: | :-: |
| 2024-08-03 |  ✅  |  ✅  |
| 2024-08-04 |  ⬜  |  ⬜  |
| 2024-08-05 |  ✅  |  ⬜  |
| 2024-08-06 |  ⬜  |  ⬜  |
| 2024-08-07 |  ✅  |  ✅  |
| 2024-08-08 |  ⬜  |  ⬜  |
| 2024-08-09 |  ✅  |  ✅  |

> [!info] توضیحات بیشتر
>  [Super Simple Habit Tracker Template For Obsidian](https://youtu.be/zYzVwJq7eDg?si=dMbNV0luH1nhnVWj)
