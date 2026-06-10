---
title: گزارش ۱۴۰۲
aliases:
  - گزارش ۱۴۰۲
  - گزارش 1402
created: 2024-03-29
modified: 2026-02-26
publish: true
comments: true
wordcount: false
status: 🌿
cssclasses:
  - card-s
  - nowarp2
draft: false
---


سال ۱۴۰۲ برای من نسبت به سال های قبل تفاوت زیادی داشت. برای توسعه فردی و مدیریت دانش شخصی فرصت بیشتری گذاشتم. ژورنال روزانه نوشتم، کتاب های بیشتری خواندم، پادکست گوش کردم و برای اولین بار به طور منظم ورزش کردم. 

از قضا چون اوایل سال با [[obsidian-review|نرم افزار ابسیدین]] آشنا شدم خیلی دقیق و مرتب توانستم این فعالیت ها را ثبت کنم. با کمک ابسیدین این اطلاعات را کنار هم گذاشتم و گزارش جامع و مفصلی از آن بیرون کشیدم.

به ذهنم رسید مثل بعضی از دوستان متممی که گزارش ماهانه و سالانه توسعه فردی شان را می نویسند من هم این گزارش را اینجا منتشر کنم.
<br> <br>
## در یک نگاه
همانطور که گفتم با کمک ابسیدین توانستم آمار و ارقام خوبی از فعالیت های سال گذشته جمع آوری کنم. در واقع از محتواهایی که مصرف میکردم مثل کتاب، پادکست، دوره و... یک پایگاه داده ساختم و جزئیات آن مثل تعداد صفحات یا مدت زمان را در متاداده ها وارد کردم. بعد یک صفحه را اختصاص دادم به استخراج این جزئیات و با استفاده از پلاگین دیتا ویو آن ها را جمع زدم:

<div class="overview-4">


<!-- QueryToSerialize: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->

| icon | count       | sum         |
| ---- | ----------- | ----------- |
| 📚   | 18 جلد کتاب | `4334 صفحه` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->

| icon | count          | sum          |
| ---- | -------------- | ------------ |
| 🎓   | 11 دوره‌آموزشی | `134.3 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->

| icon | count     | sum         |
| ---- | --------- | ----------- |
| 🎙   | 27 پادکست | `51.8 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "film" AND length != null AND date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "film" AND length != null AND date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->

| icon | count   | sum         |
| ---- | ------- | ----------- |
| 🎬   | 23 فیلم | `53.7 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->

| icon | count   | sum          |
| ---- | ------- | ------------ |
| 📺   | 7 سریال | `123.1 ساعت` |
<!-- SerializedQuery END -->



<!-- QueryToSerialize: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null AND date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null AND date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->

| icon | count         | sum        |
| ---- | ------------- | ---------- |
| ⌛    | 16 فیلم کوتاه | `1.8 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "documentaries" AND date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "documentaries" AND date >= date("2023-03-21") AND date <= date("2024-03-19") GROUP BY "" -->

| icon | count    | sum         |
| ---- | -------- | ----------- |
| 🎥   | 15 مستند | `20.4 ساعت` |
<!-- SerializedQuery END -->


</div>
<br> <br>

## بخش اول: مصرف محتوا

### 📚 کتاب

<br>

<!-- QueryToSerialize:  table without id ("![](" + cover_self + ")"), file.name, "`" + pages + " صفحه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Book WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->



نسبت به سال گذشته امسال مطالعه بیشتر و منظم‌تری داشتم. البته به نظرم فرصت و ظرفیت بیشتری برای مطالعه داشتم اما نتوانستم به خوبی از آن استفاده کنم.

<br> <br>

### 🎓 دوره‌های آموزشی

<br>

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + round(length.hours) + " ساعت`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Course WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + round(length.hours) + " ساعت`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Course WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->

| ("![](" + cover_self + ")")                                                        | file.name                         | "`" + round(length.hours) + " ساعت`" | rating |
| ---------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------ | ------ |
| ![](https://ifard.ir/assets/covers/courses/dwrh-swty-tfkr-systmy.webp)             | دوره صوتی تفکر سیستمی             | `6 ساعت`                             |        |
| ![](https://ifard.ir/assets/covers/courses/hft-kar-marfy-athrbkhsh.webp)           | هفت کار (معرفی اثربخش)            | `5 ساعت`                             | ★★★★★  |
| ![](https://ifard.ir/assets/covers/courses/kargah-zban-khwdkhwan.webp)             | کارگاه زبان خودخوان               | `5 ساعت`                             | ★★★★★  |
| ![](https://ifard.ir/assets/covers/courses/migrate-from-wordpress-to-hugo.webp)    | Migrate from WordPress to Hugo    | `6 ساعت`                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/rwayt-ansan-fsl-2.webp)                 | روایت انسان (فصل 2)               | `17 ساعت`                            | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/2d-character-design-magician.webp)      | 2D Character Design Magician      | `5 ساعت`                             | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/dwrh-tswyrsazy-aarzwy-khadmy.webp)      | دوره تصویرسازی (آرزوی خادمی)      | `20 ساعت`                            | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/rwayt-ansan-fsl-3.webp)                 | روایت انسان (فصل 3)               | `12 ساعت`                            | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/chgwnh-astkhdam-shwym.webp)             | چگونه استخدام شویم؟               | `5 ساعت`                             | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/khlaqyt-dr-dyzayn.webp)                 | خلاقیت در دیزاین                  | `3 ساعت`                             | ★      |
| ![](https://ifard.ir/assets/covers/courses/dwrh-aamwzsh-nrmafzar-aylwstrytwr.webp) | دوره‌ آموزش نرم‌افزار ایلوستریتور | `50 ساعت`                            |        |
<!-- SerializedQuery END -->


یکی از چالشی ترین دوره‌ها ساخت سایت استاتیک با هوگو بود. طراحی سایت با وردپرس را بلد بودم، فکر می کردم یادگیری این هم راحت باشد اما برای من که برنامه نویسی بلد نبودم دشوار ترین کار ممکن بود. چندین بار ناامید شدم و خواستم رها کنم اما یک عطشی داشتم برای اینکه بتوانم سایت خودم را با این روش بسازم. متاسفانه دوره فارسی جامع و کاملی هم نبود. بخشی از کار را توانستم با دوره [مهاجرت از وردپرس به هوگو](https://git.ir/udemy-migrate-from-wordpress-to-hugo-step-by-step/) جلو ببرم، باقی را هم با سرچ های متعدد داخل گوگل و یوتیوب توانستم تکمیل کنم. نزدیک به یک هفته طول کشید تا توانستم سایت شخصی ام را با همین دامنه با ترکیب هوگو و ابسیدین راه اندازی کنم. وقتی سایت بالا آمدم تمام خستگی و فشار این یک هفته از بدنم در رفت.

دوره هفت کار اولین دوره ای بود که از مدرسه نویسندگی شرکت می کردم. برای من دوره فوق العاده ای بود با توجه به [[wandering-in-youth|سرگردانی]] که داشتم، برای شفاف شدن ذهنم کمک خیلی زیادی کرد.

<br> <br>

### 🎙 پادکست

<br>

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Podcast WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Podcast WHERE date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->

| ("![](" + cover_self + ")")                                                                          | file.name                                           | "`" + length.minute + " دقیقه`" | rating |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/podcasts/tkaml-frdy-w-msyr-dstyaby-bh-aan.webp)                   | تکامل فردی و مسیر دستیابی به آن                     | `124 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-1-chalsh-aatmad-bh-nfs.webp)                  | خودشناسی (1) - چالش اعتماد به نفس                   | `69 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-2-ahsas-hay-bd.webp)                          | خودشناسی (2) - احساس های بد                         | `65 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-3-braawrd-shyh-az-khwyshtn.webp)              | خودشناسی (3) - برآورد صحیح از خویشتن                | `76 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-4-tlash-khwyshtndary-w-aayndh-ngry.webp)      | خودشناسی (4) - تلاش، خویشتنداری و آینده نگری        | `80 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-5-razhay-mwfqyt-thsyly.webp)                  | خودشناسی (5) - رازهای موفقیت تحصیلی                 | `75 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-9-tlashgry.webp)                              | خودشناسی (9) - تلاشگری                              | `82 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-mhmdrdha-shabanaly.webp)                     | گفت و گو با محمدرضا شعبانعلی                        | `320 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-nyma-qadhy.webp)                             | گفت و گو با نیما قاضی                               | `225 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/amirmousavi2.webp)                                       | گفت و گو با امیر موسوی جهانگرد                      | `160 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/bhthy-drbarhy-ktab-asb-taryk.webp)                       | بحثی درباره‌ی کتاب اسب تاریک                        | `80 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khlash-ktab-gstrh.webp)                                  | خلاصه کتاب گستره                                    | `58 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khlashy-ktab-aslgrayy.webp)                              | خلاصه‌ی کتاب اصل‌گرایی                              | `56 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-10-shwr-w-ashtyaq-dr-zndgy.webp)              | خودشناسی (10) - شور و اشتیاق در زندگی               | `78 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-6-shadkamy-w-slamt-rwan-dr-asr-nabrabry.webp) | خودشناسی (6) - شادکامی و سلامت روان در عصر نابرابری | `78 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-7-ngahy-byshtr-bh-aadt-ha.webp)               | خودشناسی (7) - نگاهی بیشتر به عادت ها               | `80 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-8-shady-rdhaytmndy-w-manay-zndgy.webp)        | خودشناسی (8) - شادی رضایتمندی و معنای زندگی         | `73 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-hamd-bydy.webp)                              | گفت و گو با حامد بیدی                               | `146 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-pwrya-aalmy.webp)                            | گفت و گو با پوریا عالمی                             | `180 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-pyman-fkharyan.webp)                         | گفت و گو با پیمان فخاریان                           | `110 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/iminaramesh.webp)                                        | گفت و گو با امین آرامش                              | `90 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/by-hsy.webp)                                             | بی حسی                                              | `15 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/jafkry-fsl-15-lyly-mhsny.webp)                           | جافکری فصل 15 - لیلی محسنی                          | `290 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/rkhtkn-bazndhha-pwrya-aalmy.webp)                        | رختکن بازنده‌ها - پوریا عالمی                       | `99 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-hamd-w-hsam-twkly.webp)                      | گفت و گو با حامد و حسام توکلی                       | `120 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-mstfy-alhyary.webp)                          | گفت و گو با مصطفی الهیاری                           | `148 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-hady-shjary.webp)                            | گفت و گو با هادی شجاری                              | `128 دقیقه`                     | ★★★    |
<!-- SerializedQuery END -->

امسال اولین سالی بود که مخاطب جدی پادکست شدم. پادکست های دکتر آذخرش مکری و امین آرامش را بیشتر دنبال کردم چون ذهنم دقیقا درگیر همین مسائل بود. از پادکست بی پلاس خلاصه کتاب اصل گرایی و گستره را شنیدم. چند قسمتی هم از جا فکری گوش دادم.

<br> <br>

### 🍿 فیلم و سریال


#### فیلم

<br>

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "film" AND date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "film" AND date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->

| ("![](" + cover_self + ")")                                                           | file.name                             | badge                                           | rating |
| ------------------------------------------------------------------------------------- | ------------------------------------- | ----------------------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/zodiac.webp)                                | Zodiac                                | <ul><li>🌀مرموز</li></ul>                       | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/the-pianist.webp)                           | The Pianist                           | <ul><li>☕تلخ</li></ul>                          | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/the-game.webp)                              | The Game                              | <ul><li>🧲گیرا</li><li>🗝️ماجراجویانه</li></ul> | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/parasite.webp)                              | Parasite                              | \-                                              | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/12-angry-men.webp)                          | 12 Angry Men                          | <ul><li>🦉آموزنده</li></ul>                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/eternal-sunshine-of-the-spotless-mind.webp) | Eternal Sunshine of the Spotless Mind | \-                                              | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-truman-show.webp)                       | The Truman Show                       | \-                                              | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-shining.webp)                           | The Shining                           | \-                                              | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/schindlers-list.webp)                       | Schindlers List                       | \-                                              | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/prisoners.webp)                             | Prisoners                             | <ul><li>🌀مرموز</li></ul>                       | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/panic-room.webp)                            | Panic Room                            | \-                                              | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/forrest-gump.webp)                          | Forrest Gump                          | \-                                              | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-girl-with-the-dragon-tattoo.webp)       | The Girl with the Dragon Tattoo       | \-                                              | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/sherlock-holmes.webp)                       | Sherlock Holmes                       | \-                                              | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/sherlock-holmes-a-game-of-shadows.webp)     | Sherlock Holmes A Game of Shadows     | \-                                              | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/pulp-fiction.webp)                          | Pulp Fiction                          | \-                                              | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/oppenheimer.webp)                           | Oppenheimer                           | \-                                              | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/killers-of-the-flower-moon.webp)            | Killers of the Flower Moon            | \-                                              | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/insomnia.webp)                              | Insomnia                              | \-                                              | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/gone-girl.webp)                             | Gone Girl                             | \-                                              | ★★     |
| ![](https://ifard.ir/assets/covers/movies/dunkirk.webp)                               | Dunkirk                               | \-                                              | ★★     |
| ![](https://ifard.ir/assets/covers/movies/downfall.webp)                              | Downfall                              | \-                                              | ★★     |
| ![](https://ifard.ir/assets/covers/movies/the-killer.webp)                            | The Killer                            | <ul><li>🥱کسل‌کننده</li></ul>                   | ★      |
<!-- SerializedQuery END -->


امسال آثار جدیدی از کارگردان های معروف اکران شد: Killers of the Flower Moon از اسکورسیزی، Oppenheimer از کریستوفر نولان و The Killer از دیوید فینچر.

از دیوید فینچر قبلا سون و فایت کلاب را دیده بودم. تصمیم گرفتم بقیه کارهایش را هم ببینم. فیلم the Game و Zodiac فوق العاده بود. فیلم Panic Room هرچند امتیاز پایینی داشت اما برای من جذاب بود. امسال وقتی The Killer از نتفلیکیس منتشر شد بلافاصله نگاه کردم اما به شدت کسل کننده و حوصله سر بر بود. من همان ژانرهای معمایی‌اش را بیشتر می پسندم.  

<br> <br>

#### سریال


<br>

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + round(length.hours) + " ساعت`", rating FROM #Movie WHERE type = "series" AND date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + round(length.hours) + " ساعت`", rating FROM #Movie WHERE type = "series" AND date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->

| ("![](" + cover_self + ")")                                   | file.name     | "`" + round(length.hours) + " ساعت`" | rating |
| ------------------------------------------------------------- | ------------- | ------------------------------------ | ------ |
| ![](https://ifard.ir/assets/covers/movies/ted-lasso.webp)     | Ted Lasso     | `24 ساعت`                            | 5      |
| ![](https://ifard.ir/assets/covers/movies/lie-to-me.webp)     | Lie to Me     | `34 ساعت`                            | 4      |
| ![](https://ifard.ir/assets/covers/movies/the-lion-skin.webp) | The Lion Skin | `20 ساعت`                            | 3.5    |
| ![](https://ifard.ir/assets/covers/movies/shrinking.webp)     | Shrinking     | `5 ساعت`                             | 3.5    |
| ![](https://ifard.ir/assets/covers/movies/dark.webp)          | Dark          | `24 ساعت`                            | 3      |
| ![](https://ifard.ir/assets/covers/movies/berlin.webp)        | Berlin        | `7 ساعت`                             | 2.5    |
| ![](https://ifard.ir/assets/covers/movies/bodies.webp)        | Bodies        | `8 ساعت`                             | 2      |
<!-- SerializedQuery END -->


سریال Ted Lasso دوست داشتنی بود و حس و حال خوبی داشت فقط فصل دومش مقداری کسل کننده بود. مینی سریال Shrinking را هم عوامل همین تدلاسو ساخته بودند. سریال بدی نبود اما تدلاسو داستان درگیرکننده‌تری داشت.

سریال Lie to Me هم خوب بود. هرچند علاقه‌ی زیادی به سریال های آنتولوژی (هر قسمت یک داستان دارد) ندارم با این حال سریال تعلیق خوبی داشت و تمایل داشتم داستانش را دنبال کنم. اولین بار اسم سریال را در [فایل صوتی یادگیری کریستالی درمورد دروغگویی](https://motamem.org/%D9%81%D8%A7%DB%8C%D9%84-%D8%B5%D9%88%D8%AA%DB%8C-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%DB%8C%D8%A7%D8%AF%DA%AF%DB%8C%D8%B1%DB%8C-%DA%A9%D8%B1%DB%8C%D8%B3%D8%AA%D8%A7%D9%84%DB%8C-%D9%85%D8%A7%D8%AC/) از محمدرضا شعبانعلی شنیدم. دکتر لایتمن و همکارانش متخصص زبان بدن هستند و می توانند با زیر نظر گرفتن حرکات بدن، صورت، احساسات و واکنش ها پی ببرند که چه کسی دروغ میگوید.

سریال Berlin به نظرم خوب نبود و نتوانست یادآور مناسبی برای Money Heist باشد.

سریال Dark هم تا پایان فصل دوم خوب بود. اما فصل سوم کلا فضا عوض شد. مینی سریال Bodies را هم به خاطر شباهت‌هایی که با Dark داشت نگاه کردم. البته که به پای جذابیت و پیچیدگی دارک نمی رسید. علاوه بر اینکه سریال دارک تلاش می‌کرد با مفاهیم فلسفی و علمی بعد زمانی را طوری تفسیر کند که داستان فیلم باور پذیر باشد اما در Bodies این وجه علمی و فلسفی کمرنگ‌تر بود و بیشتر تمرکز سریال بر پیشبرد خط داستانی بود.

<br> <br>

#### فیلم کوتاه


<br>

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "short" AND date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "short" AND date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->

| ("![](" + cover_self + ")")                                       | file.name         | "`" + length.minute + " دقیقه`" | rating |
| ----------------------------------------------------------------- | ----------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/timber.webp)            | Timber            | `6 دقیقه`                       | 5      |
| ![](https://ifard.ir/assets/covers/movies/kutoja.webp)            | Kutoja            | `7 دقیقه`                       | 5      |
| ![](https://ifard.ir/assets/covers/movies/purl.webp)              | Purl              | `8 دقیقه`                       | 4      |
| ![](https://ifard.ir/assets/covers/movies/mr-indifferent.webp)    | Mr Indifferent    | `3 دقیقه`                       | 4      |
| ![](https://ifard.ir/assets/covers/movies/leaving-home.webp)      | Leaving Home      | `7 دقیقه`                       | 4      |
| ![](https://ifard.ir/assets/covers/movies/an-object-at-rest.webp) | An Object at Rest | `6 دقیقه`                       | 4      |
| ![](https://ifard.ir/assets/covers/movies/alarm.webp)             | Alarm             | `9 دقیقه`                       | 4      |
| ![](https://ifard.ir/assets/covers/movies/the-angler.webp)        | The Angler        | `14 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/snack-attack.webp)      | Snack Attack      | `5 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/scrambled.webp)         | Scrambled         | `7 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/runaway.webp)           | Runaway           | `4 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/heavenly-appeals.webp)  | Heavenly Appeals  | `2 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/walter.webp)            | Walter            | `7 دقیقه`                       | 2      |
| ![](https://ifard.ir/assets/covers/movies/some-thing.webp)        | Some Thing        | `7 دقیقه`                       | 2      |
| ![](https://ifard.ir/assets/covers/movies/el-empleo.webp)         | El empleo         | `7 دقیقه`                       | 2      |
| ![](https://ifard.ir/assets/covers/movies/benigni.webp)           | Benigni           | `8 دقیقه`                       | 2      |
<!-- SerializedQuery END -->



من علاقه خاصی به فیلم‌ها و انیمیشن‌های کوتاه دارم. امسال برنامه خاصی برای دیدن این موارد نداشتم، به طور اتفاقی یکی دو مورد را در یوتیوب دیدم، باقی موارد را یوتیوب پیشنهاد می‌کرد و من هم اگر حوصله داشتم نگاه می‌کردم. Timber و Kutoja تاثیرگذار و قابل تأمل بودند.

<br> <br> 

#### مستند

<br>

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "documentaries" AND date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "documentaries" AND date >= date("2023-03-21") AND date <= date("2024-03-19") SORT rating DESC -->

| ("![](" + cover_self + ")")                                           | file.name            | "`" + length.minute + " دقیقه`" | rating |
| --------------------------------------------------------------------- | -------------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/latarynw.webp)              | لاتارینو             | `76 دقیقه`                      | 4      |
| ![](https://ifard.ir/assets/covers/movies/jzyrh-mahy.webp)            | جزیره ماهی           | `78 دقیقه`                      | 4      |
| ![](https://ifard.ir/assets/covers/movies/bray-ps-az-mrgm.webp)       | برای پس از مرگم      | `70 دقیقه`                      | 4      |
| ![](https://ifard.ir/assets/covers/movies/ataq-jng.webp)              | اتاق جنگ             | `86 دقیقه`                      | 4      |
| ![](https://ifard.ir/assets/covers/movies/beyond-utopia.webp)         | Beyond Utopia        | `115 دقیقه`                     | 4      |
| ![](https://ifard.ir/assets/covers/movies/alphago.webp)               | AlphaGo              | `90 دقیقه`                      | 4      |
| ![](https://ifard.ir/assets/covers/movies/kwdtay-khzndh-dr-spah.webp) | کودتای خزنده در سپاه | `47 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/rwyahay-dm-sbh.webp)        | رویاهای دم صبح       | `76 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/rwzgar-gl-aaqayy.webp)      | روزگار گل آقایی      | `78 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/jwan-mrg.webp)              | جوان مرگ             | `86 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/jam-zhr.webp)               | جام زهر              | `56 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/bhtan-bray-hfz-nzam.webp)   | بهتان برای حفظ نظام  | `150 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/movies/room-237.webp)              | Room 237             | `102 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/movies/qmar.webp)                  | قمار                 | `75 دقیقه`                      | 2      |
| ![](https://ifard.ir/assets/covers/movies/shkwfh-hay-zmstan.webp)     | شکوفه های زمستان     | `40 دقیقه`                      | 2      |
<!-- SerializedQuery END -->


مستند Room 237 را دوست داشتم. مستند در مورد فیلم The Shining است و حقایق پنهان فیلم را بررسی میکند. فکر نمی کردم فیلم اینقدر نکته های فنی ریز و نامحسوس داشته باشد خصوصا فیلمی که در سال 1980 ساخته شده.

مستند AlphaGo هم جذاب بود. خصوصا الان که بحث هوش مصنوعی بالا گرفته دیدن این مستند خالی از لطف نیست.

مستند جزیره ماهی هم خوب بود. اگر به ناگفته‌های دفاع مقدس علاقه دارید ببینید. ظاهرا چند سالی هم توقیف بوده. کتاب نکته های تاریخی نوشته جعفر شیرعلی‌نیا هم در مورد این ناگفته ها مطالب مفیدی دارد.

<br> <br>




## بخش دوم: ردیابی عادت

### 🏋🏻 ورزش

من از ابتدای سال مصمم شدم ورزش کنم. البته فروردین و اردیبهشت فعالیت جدی نداشتم. هم تعطیلات بود هم ماه رمضان. از ابتدای خرداد توانستم به صورت مستمر ورزش را شروع کنم و تا آخر سال ادامه بدهم. البته این میان وقفه های چند هفته ای هم داشتم اما تلاش کردم برگردم و به طور منظم ادامه بدهم.

من 75 کیلو بودم و 93 سانتی متر اندازه دور شکمم بود. طبق شاخص توده بدنی (BMI)  13 کیلو اضافه وزن داشتم و 13 سانت هم باید از دور شکمم آب میشد. از ۳۶۵ روز، ۲۰۸ روز ورزش کردم. در نهایت 11 کیلو کم کردم و 11 سانت هم از دور شکمم آب شد. نکته ای که برام جالب بود اینکه دور شکم پا به پای کاهش وزن بود. انگار به ازای هر یک کیلو یک سانت هم کاهش دور شکم داشتم. 

از همان روز اول تمام جزئیات را داخل یک فایل اکسل وارد کردم. چه روزی هایی ورزش کردم، وزن و دور شکمم چه مقدار بوده. بعدا این جزئیات را تبدیل به نمودار کردم که یک خاصیت گیمیفیکیشن برای من ایجاد کرد. در تلاش بودم که این نمودار همیشه سیر نزولی داشته باشد و زود تر هم به آن نتیجه مطلوب برسد.

این نمودار کاهش وزن است:
![[report1402-1772048540476.webp]]

این هم نمودار دور شکم:
![[report1402-1772048555368.webp]]


چند ماه اول جدیت بیشتری داشتم. رژیم سخت تری گرفتم در نتیجه سرعت کاهش وزن بیشتر بود. در ادامه اما هم دچار وقفه شدم هم کمی پیچ رژیم را شل کردم. به همین خاطر دیر تر نتیجه می گرفتم.
طبق نمودار می شود این مدت را به سه بخش تقسیم کرد:
1. از خرداد تا مرداد: جدیت بالا رژیم و ورزش سخت ⬅ 6 کیلو کاهش وزن
2. از مرداد تا آذر:  رژیم معمولی، ورزش معمولی اما با وقفه ⬅ 3 کیلو
3. دی تا اسفند: ورزش مستمر اما رژیم سطحی ⬅ 2 کیلو

عمده فعالیت من در این مدت ورزش های هوازی بوده. معمولا 20 تا 30 دقیقه در روز می دویدم. یکسری تمرینات استقامتی هم انجام میدادم. مثل پوش آپ (شنا)، اسکات، کرانچ، پول آپ(بارفکیس) و غیره. هفته ای یکبار هم سالن فوتسال میرفتم.

برنامه غذایی هم خیلی معمولی بود. فست فود و نوشابه را حذف کردم. مصرف قند، چربی، کربوهیدرات را کاهش دادم. تنقلات (چیپس و پفک و کیک و بستنی)، انواع سس و خوراکی ها را هم کم کردم. به جای اینها از میوه و خوراکی های سالم تر استفاده کردم.

قصد دارم سال آینده پیش متخصص تغذیه بروم هم آنالیز دقیق تر بگیرم هم یک برنامه غذایی. ورزش بدنسازی را هم شروع کنم.

در یادداشت [[fitness-and-healthy-eating|تجربه من از ورزش و تغذیه سالم]] مفصل توضیح دادم که برای ورزش و رژیم از کجا باید شروع کنید و چه نکاتی را لازم هست رعایت کنید.

<br> <br>

## ارزیابی نهایی
اگر بخواهم خودم را نسبت به سال قبل مقایسه کنم عملکرد بهتری داشتم اما اگه بخواهم نسبت به ظرفیت خودم مقایسه کنم انصافا کم کاری کردم. فرصت خوبی داشتم و می توانستم بیشتر تلاش کنم. اهمال کاری زیادی داشتم و همش دنبال راه فراری بودم که به کارهای اصلیم نرسم.

برای سال جدید این جمله را هر روز با خودم مرور می کنم: «پس کی میری سر اصل مطلب؟!»

زمان زیادی هم در شبکه‌های اجتماعی به بطالت گذراندم. تصمیم دارم این‌ها را بیشتر مدیریت کنم. قصد دارم روتین‌های روزانه را ثبت و پیگیری کنم. سال گذشته فقط ورزش را ثبت کردم. قصد دارم در ژورنال روزانه‌ای که می نویسم جایی برای مطالعه و روتین های روزانه اضافه کنم تا بتوانم  عملکردم را بهتر ارزیابی کنم. 
گزارشی که الان نوشتم از این جهت ناقص است، معلوم نیست که چقدر ظرفیت داشتم چه مقدار برای کارهای بیهوده صرف کردم چه مقدار برای کارهای مفید.

<br><br>
