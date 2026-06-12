---
title: گزارش ۱۴۰۴
aliases:
  - گزارش ۱۴۰۴
  - گزارش 1404
created: 2025-04-24
modified: 2026-04-23
publish: true
comments: true
wordcount: false
status: 🌱
cssclasses:
  - card-s
  - nowarp2
  - c3-4
draft: false
image: "[[reports.webp]]"
---

> [!quote] ‌
> زندگی‌های ما شده مثل جونورایی که یه گوشه خزیده‌ن جمع شده‌ن... سرنوشت‌مون دست کسائی‌یه که یه‌جا قایم شده‌ن و با فشار دادن یه دکمه کنترل راکت می‌فرستن سرمون. اتفاق و قرعه‌س که امشب به اسم کی و روی کله کی بیفته... این دست خدا نیست...
> 
> `زمستان 62، اسماعیل فصیح`

امسال سخت گذشت. جنگ 12 روزه، اعتراضات دیماه و دوباره جنگ. اینترنتی که نبود و قیمت‌هایی که اوج می‌گرفت و خط فقر رو با خودش بالا می‌کشید. ایران می‌تونست چقدر بهتر و قوی‌تر باشه. افسوس که عمر ما داره اینطور تباه میشه.

مایوس و دلسرد شدم اما خودمو نباختم. روتینم رو حفظ کردم. نه اینکه بی تفاوت باشم. کاری که از دستم بر میومد رو انجام دادم. به قول محمدرضا «سوگواری مولد نیست. همین و بس.» [+](https://mrshabanali.com/%da%86%d9%87-%d8%a8%d8%a7%db%8c%d8%af-%da%a9%d8%b1%d8%af/)

هنوز امیدوارم. نه امید واهی. روزای خوب میاد. ایران روزای بدتر از اینم داشته.

<br> 

## در یک نگاه

<br> 

<div class="overview-4">


<!-- QueryToSerialize: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count       | sum         |
| ---- | ----------- | ----------- |
| 📚   | 39 جلد کتاب | `9964 صفحه` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count         | sum         |
| ---- | ------------- | ----------- |
| 🎓   | 8 دوره‌آموزشی | `59.9 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count     | sum         |
| ---- | --------- | ----------- |
| 🎙   | 26 پادکست | `54.3 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "film" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "film" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count   | sum          |
| ---- | ------- | ------------ |
| 🎬   | 52 فیلم | `108.4 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count   | sum         |
| ---- | ------- | ----------- |
| 📺   | 7 سریال | `66.8 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🏋️" as icon, "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`", "ورزش کردم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🏋️" as icon, "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`", "ورزش کردم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->

| icon | "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`" | "ورزش کردم" |
| ---- | ----------------------------------------------------------------- | ----------- |
| 🏋️  | `228 روز`                                                         | ورزش کردم   |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "📖" as icon, "`" + round(sum(rows.📚reading)) + " پومودورو`", "مطالعه کردم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📖" as icon, "`" + round(sum(rows.📚reading)) + " پومودورو`", "مطالعه کردم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->

| icon | "`" + round(sum(rows.📚reading)) + " پومودورو`" | "مطالعه کردم" |
| ---- | ----------------------------------------------- | ------------- |
| 📖   | `489 پومودورو`                                  | مطالعه کردم   |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "📱" as icon, "`" + round(sum(rows.📱social)) + " ساعت`", "در سوشال‌مدیا بودم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📱" as icon, "`" + round(sum(rows.📱social)) + " ساعت`", "در سوشال‌مدیا بودم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->

| icon | "`" + round(sum(rows.📱social)) + " ساعت`" | "در سوشال‌مدیا بودم" |
| ---- | ------------------------------------------ | -------------------- |
| 📱   | `357 ساعت`                                 | در سوشال‌مدیا بودم   |
<!-- SerializedQuery END -->


</div>

<br><br>

## ۱. مصرف محتوا


### 📚 کتاب

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Book WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Book WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                                       | file.name                                                        | badge                                          | rating |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/books/chra-adbyat.webp)                                        | چرا ادبیات                                                       | \-                                             |        |
| ![](https://ifard.ir/assets/covers/books/farhang-goftari.webp)                                    | فرهنگ گفتاری                                                     | \-                                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/shrab-kham.webp)                                         | شراب خام                                                         | <ul><li>☕تلخ</li></ul>                         | ★★★    |
| ![](https://ifard.ir/assets/covers/books/teori-act.webp)                                          | تئوری اکت                                                        | <ul><li>🦉آموزنده</li><li>🤏موجز</li></ul>     | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/artbat-bdwn-khshwnt-zban-zndgy.webp)                     | ارتباط بدون خشونت، زبان زندگی                                    | <ul><li>🦉آموزنده</li></ul>                    |        |
| ![](https://ifard.ir/assets/covers/books/zmstan-62.webp)                                          | زمستان ۶۲                                                        | <ul><li>🧲گیرا</li><li>☕تلخ</li></ul>          | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/flakt-rwzmrh.webp)                                       | فلاکت روزمره                                                     | \-                                             | ★★     |
| ![](https://ifard.ir/assets/covers/books/asm-nmy-khwahd.webp)                                     | اسم نمی خواهد                                                    | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/books/shb-hay-rwshn.webp)                                      | شب های روشن                                                      | <ul><li>☕تلخ</li></ul>                         | ★★⯩    |
| ![](https://ifard.ir/assets/covers/books/chra-mlt-ha-shkst-mykhwrnd.webp)                         | چرا ملت ها شکست میخورند؟                                         | <ul><li>🐢سخت‌خوان</li></ul>                   |        |
| ![](https://ifard.ir/assets/covers/books/jnayt-w-mkafat.webp)                                     | جنایت و مکافات                                                   | <ul><li>🧲گیرا</li><li>🪶خوش‌خوان</li></ul>    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/chnd-rwayt-matbr-mjmwah-dastan.webp)                     | چند روایت معتبر (مجموعه داستان)                                  | <ul><li>🥱کسل‌کننده</li></ul>                  | ★★     |
| ![](https://ifard.ir/assets/covers/books/mrdy-bh-nam-awh.webp)                                    | مردی به نام اوه                                                  | <ul><li>🪶خوش‌خوان</li><li>😊دلنشین</li></ul>  | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/khtr-sqwt-bhmn.webp)                                     | خطر سقوط بهمن                                                    | <ul><li>🦉آموزنده</li><li>🪶خوش‌خوان</li></ul> | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/mskh-w-dastan-hay-dygr.webp)                             | مسخ و داستان های دیگر                                            | <ul><li>🥱کسل‌کننده</li></ul>                  | ★★     |
| ![](https://ifard.ir/assets/covers/books/mn-danay-kl-hstm-mjmwah-dastan.webp)                     | من دانای کل هستم؛ مجموعه داستان                                  | <ul><li>🥱کسل‌کننده</li></ul>                  | ★★     |
| ![](https://ifard.ir/assets/covers/books/tarykh-mkhtsr-bh-gnd-kshydn-jhan.webp)                   | تاریخ مختصر به گند کشیدن جهان                                    | \-                                             |        |
| ![](https://ifard.ir/assets/covers/books/sh-tar.webp)                                             | سه تار                                                           | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/qlah-hywanat.webp)                                       | قلعه حیوانات                                                     | <ul><li>🪶خوش‌خوان</li><li>🧲گیرا</li></ul>    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/fqt-bray-tfryh.webp)                                     | فقط برای تفریح                                                   | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/nshkhwar-thhny.webp)                                     | نشخوار ذهنی                                                      | <ul><li>🦉آموزنده</li></ul>                    | ★★     |
| ![](\-)                                                                                           | بامداد خمار                                                      | <ul><li>☕تلخ</li></ul>                         | ★★     |
| ![](https://ifard.ir/assets/covers/books/dayy-jan-naplewn.webp)                                   | دایی جان ناپلئون                                                 | <ul><li>🧲گیرا</li><li>🪶خوش‌خوان</li></ul>    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/ktabkhwan.webp)                                          | کتاب‌خوان                                                        | <ul><li>🪶خوش‌خوان</li><li>☕تلخ</li></ul>      | ★★★★★  |
| ![](\-)                                                                                           | The PARA Method Simplify, Organize, and Master Your Digital Life | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★    |
| ![](https://ifard.ir/assets/covers/books/byshyadgyry.webp)                                        | بیش‌یادگیری                                                      | <ul><li>🦉آموزنده</li></ul>                    | ★★     |
| ![](https://ifard.ir/assets/covers/books/sm-zdayy-dyjytal.webp)                                   | سم زدایی دیجیتال                                                 | <ul><li>🦉آموزنده</li></ul>                    | ★★★    |
| ![](https://ifard.ir/assets/covers/books/mayzlys-tewry-bnyady-shtrnj.webp)                        | مایزلیس، تئوری بنیادی شطرنج                                      | <ul><li>🦉آموزنده</li></ul>                    | ★★     |
| ![](https://ifard.ir/assets/covers/books/mynymalysm-dyjytal.webp)                                 | مینیمالیسم دیجیتال                                               | <ul><li>🦉آموزنده</li></ul>                    | ★★★    |
| ![](https://ifard.ir/assets/covers/books/dastan-prdazy-ba-dadhha.webp)                            | داستان پردازی با داده‌ها                                         | <ul><li>🪶خوش‌خوان</li><li>🌳پربار</li></ul>   | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/dstwralamlhay-rnh-magryt-bh-fyl-aaby-bray-aydhyaby.webp) | دستورالعمل‌های «رنه ماگریت» به فیل آبی برای ایده‌یابی            | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/dstwralamlhay-fyl-aaby-bray-aydh-yaby.webp)              | دستورالعمل‌های فیل آبی برای ایده یابی                            | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/books/yadgyry-zaya.webp)                                       | یادگیری زایا                                                     | <ul><li>🐢سخت‌خوان</li></ul>                   | ★★     |
| ![](https://ifard.ir/assets/covers/books/taksy-swary.webp)                                        | تاکسی سواری                                                      | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★     |
| ![](https://ifard.ir/assets/covers/books/yadgyry-yadgyry.webp)                                    | یادگیری یادگیری                                                  | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/books/mzkhrfat-farsy.webp)                                     | مزخرفات فارسی                                                    | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/az-qytryh-ta-awrnj-kanty.webp)                           | از قیطریه تا اورنج کانتی                                         | <ul><li>☕تلخ</li><li>🪶خوش‌خوان</li></ul>      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/qdrt-skwt.webp)                                          | قدرت سکوت                                                        | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/ktab-80000-saat.webp)                                    | کتاب 80000 ساعت                                                  | \-                                             | ★★★    |
<!-- SerializedQuery END -->


خیلی وقت بود داستان نخونده بودم. اکثر کتاب‌هایی که خونده بودم غیرداستانی بودند. امسال شروع کردم به خوندن داستان و رمان. تازه مزه کتاب خوندن رو چشیدم. **کتابخوان**، **قلعه حیوانات**، **دایی جان ناپلئون**، **مردی به نام اوه**، **جنایات و مکافات** رو بیشتر از بقیه دوست داشتم.

نمیدونم چرا تا الان سراغ داستان نرفته بودم. انگار یک گاردی داشتم. فکر می‌کردم داستان خوندن وقت تلف کردنه. نمیدونم چرا این باور توی ذهنم شکل گرفته بوده. انگار توقع داشتم کتاب همیشه پند و موعظه‌ی مستقیم داشته باشه. کتاب هم مثل فیلم میتونه روایتگر یه داستان باشه. داستانی که به مراتب از فیلم غنی‌تر و جذاب‌تره. تازه توی فیلم کاری از دست من برنمیاد فقط تماشاگرم اما توی کتاب منم عاملیت دارم. صحنه‌ها توی ذهن من ساخته میشن. چهره‌ها رو من تصویرسازی می‌کنم. اینجا فیلم بردار و کارگردان و تدوینگر منم. 

توی رمان هنوز سلیقم رو پیدا نکردم. فکر میکنم طبیعه چون رمان کم خوندم. مثل اون موقع‌هایی که تازه شروع کرده بودم به فیلم دیدن. همینطور درهم برهم نگاه میکردم. الان به بینشی رسیدم که میتونم تشخیص بدم فلان فیلم رو دوست دارم یا نه. دلم میخواد به این شهود توی کتاب هم برسم!

یه عادت بدی هم دارم کتاب رو که شروع کنم باید تا تهش بخونم. مثلا **بامداد خمار** رو دوست نداشتم و به زور ادامه دادم. همینطور کتاب های مصطفی مستور.


<br><br>

### 🎓 دوره‌های آموزشی

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + round(length.hours,1) + " ساعت`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Course WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + round(length.hours,1) + " ساعت`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Course WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                       | file.name                         | "`" + round(length.hours,1) + " ساعت`" | rating |
| --------------------------------------------------------------------------------- | --------------------------------- | -------------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/courses/aamwzsh-jama-gyt-w-gyt-hab-2026.webp)  | آموزش جامع گیت و گیت هاب 2026     | `8 ساعت`                               | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/courses/dwrh-swty-hrfhay-gry-dr-mhyt-kar.webp) | دوره صوتی حرفه‌ای گری در محیط کار | `3.8 ساعت`                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/jsmirland.webp)                        | جاوا اسکریپت - میرلند             | `10 ساعت`                              |        |
| ![](https://ifard.ir/assets/covers/courses/aamwzsh-html-rakt.webp)                | آموزش HTML - راکت                 | `3 ساعت`                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/tmrkzaar.webp)                         | تمرکزآر                           | `12 ساعت`                              | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/kargah-jama-gramr.webp)                | کارگاه جامع گرامر                 | `7 ساعت`                               |        |
| ![](https://ifard.ir/assets/covers/courses/figma-ui-ux-design-essentials.webp)    | Figma UI UX Design Essentials     | `12 ساعت`                              | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/dwrh-swty-aqtsad-twjh.webp)            | دوره صوتی اقتصاد توجه             | `4.2 ساعت`                             |        |
<!-- SerializedQuery END -->


برای کارم مجبورم شدم فیگما یادبگیرم. البته نه برای طراحی UI UX، بیشتر برای پست و استوری اینستاگرام. چون فتوشاپ و ایلستریتور بلد بودم سریع یادش گرفتم. فقط یه سری ریزه کاری هاش بودم که باید سر در میاوردم. برای جایی که کار میکنم فیگما خیلی بهتر از ادوبیه. آنلاینه و میشه تیمی روش کار کرد. مثلا من تمپلیت ها رو طراحی میکردم و دسترسی میدادم به ادمین اینستاگرام تا خودش تیتر و عکس اضافه کنه. اینطوری وقت کمتری از من گرفته میشد. البته برای ما که توی ایرانیم و اینترنت درستی نداریم همین آنلاین بودن یه مشکل بزرگه. چون وقتی نت داخلی بشه دیگه بهش دسترسی نداریم.

برای برنامه نویسی گیت و جاوااسکریپت رو یاد گرفتم. هنوز ایده ای ندارم که میخوام چه کار کنم. اما فعلا میخوام با فرانت شروع کنم. فعلا هم نگاه شغل و درآمدزایی ندارم. فقط دارم علاقمو دنبال میکنم. من کلا به ساختن چیزی که کار کنه علاقه دارم. سایت، پلاگین، اپ هرچی. ولی باتوجه به تجربه ای که دارم بیشتر روی سایت کار میکنم.


<br><br>


### 🎙 پادکست

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Podcast WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Podcast WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                                                  | file.name                                                   | "`" + length.minute + " دقیقه`" | rating |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/podcasts/mahyasaedi.webp)                                                 | محیا ساعدی                                                  | `86 دقیقه`                      | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/podcasts/athr-prwanhay-60-hmyd-mhmdy.webp)                                | اثر پروانه‌ای (۶۰) حمید محمدی                               | `100 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/fsl-25-ashq-rabth-aatfy-w-azdwaj.webp)                           | فصل 25 عشق، رابطه عاطفی و ازدواج                            | `338 دقیقه`                     | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/podcasts/athr-prwanhay-67-whyd-rhbany.webp)                               | اثر پروانه‌ای (۶۷) وحید رهبانی                              | `85 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/kyanwsh-mkhtaryan.webp)                                          | کیانوش مختاریان                                             | `140 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/fsl-28-jafkry-shryk-aatfy.webp)                                  | فصل 28 جافکری - شریک عاطفی                                  | `155 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/rdha-hsamyfrd.webp)                                              | رضا حسامی‌فرد                                               | `150 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/nyma-asmaayly.webp)                                              | نیما اسماعیلی                                               | `153 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/hmyd-mhmwdzadh-bnyangthar-crm-dydar.webp)                        | حمید محمودزاده  بنیان‌گذار CRM دیدار                        | `160 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/esmaeel.webp)                                                    | اسماعیل آذری‌نژاد  بنیان‌گذار پویش قصه، رنگ، توپ            | `133 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gyzmwndw.webp)                                                   | گیزموندو                                                    | `103 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/mcaffe.webp)                                                     | جان مکافی                                                   | `120 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/estgah-ai.webp)                                                  | 23 ازار کار و صنعت هوش مصنوعی                               | `48 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/21-syd-mhmdjwad-fydh-aabady-danshgah-w-snat-w-mdlhay-zbany.webp) | 21   سید محمدجواد فیض آبادی  دانشگاه و صنعت و مدل‌های زبانی | `122 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/mqdad-wlayy-bazar-kar-kdwm-rshth-khwbh.webp)                     | مقداد ولایی  بازار کار کدوم رشته خوبه؟                      | `88 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/mqdad-wlayy-hmbnyangthar-w-hmmdyraaml-jabwyzhn.webp)             | مقداد ولایی  هم‌بنیان‌گذار و هم‌مدیرعامل جاب‌ویژن           | `144 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/eshqh-atashin.webp)                                              | عشق آتشین اتصالات عميق عاطفی چگونه شکل می‌گیرد؟             | `53 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/mhmwd-mqdsy-slamt-rwan-ma-qbl-hyn-w-bad-az-jng.webp)             | محمود مقدسی  سلامت روان ما، قبل، حین و بعد از جنگ           | `127 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/jnwbgan.webp)                                                    | جنوبگان                                                     | `130 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/sd-w-chhl-w-pnj-kylwmtrdrsaat.webp)                              | صد و چهل و پنج کیلومتر‌در‌ساعت                              | `104 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/arwn-swartz.webp)                                                | ارون سوارتز                                                 | `143 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/hsyn-yzdy.webp)                                                  | حسین یزدی                                                   | `172 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/aamwk.webp)                                                      | آموک                                                        | `105 دقیقه`                     | ★★     |
| ![](https://ifard.ir/assets/covers/podcasts/channelb.webp)                                                   | پانصد کیلو دینامیت                                          | `97 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/ywnabambr.webp)                                                  | یونابامبر                                                   | `110 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/aamwk.webp)                                                      | چرا آخرش وقت کم می‌آوریم؟                                   | `90 دقیقه`                      | ★★★    |
<!-- SerializedQuery END -->


از **چنل بی** جان مکافی و گیزموندو رو دوست داشتم. بقیه اپیزودها اونقدر برام جذاب نبود. دنبال تجربه مشابهی مثل سیلک‌رود یا اشو میگردم.

پادکست **کارنکن** رو یه مدت گوش نمی دادم. مثل سابق برام گیرا و کاربردی نبود. نمیدونم مشکل از اپیزودها بود یا خود من که دیگه مثل سابق دغدغه مسیر شغلی نداشتم. اما اپیزودهایی که بعد جنگ 12 روزه منتشر شد کمی بهتر شده بود. گفتگو با مقداد ولایی و نیما اسماعیلی رو دوست داشتم.


از **ایستگاه هوش مصنوعی** گفتگو با محمدجواد فیض آبادی رو دوست داشتم. خصوصا که دیدگاه امیر با محمدجواد زاویه داشت. معمولا این اتفاق توی پادکست نمی‌افته. یا یه نفر مثل منبر سخرانی می‌کنه، یا توی گفتگوی دونفره میزبان فقط تایید و تحسین می‌کنه. با این روند وقتی توی زمینه‌ای تخصص نداریم احتمال سوگیری و دریافت داده اشتباه بالا میره. به نظرم باید یه مقدار رویکردشون رو تغییر بدن. نمیگم همش انتقادی باشه، اما دست‌کم اینقدر تعریف و تمجید پاسکاری نکنند. یا مثل **دکتر آذرخش مکری** دیدگاه‌های مختلف رو هم بگن که در جریان باشیم این حرف مخالف هم داره.

پادکست **اثر پروانه‌ای** هم بد نیست. محتوای آموزنده‌ای نداره یه گفتگوی خودمونی و دوستانه است.

کلا امسال پادکست خیلی کمتری نسبت به پارسال گوش دادم. نمیدونم چرا. قبلا دنبال این بودم که هرطور شده وقت های هدر رفتمو با پادکست پر کنم. امسال اینطور نبودم و میذاشتم وقتم تلف شه. شاید درستشم همینه. انگار یه وسواسی داشتم که باید تمام وقتم مفید باشه.

<br><br>

### 🍿 فیلم و سریال


#### فیلم

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "film" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "film" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                                      | file.name                                        | badge                                                  | rating |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------------ | ------ |
| ![](https://ifard.ir/assets/covers/movies/may-god-save-us.webp)                                  | May God Save Us                                  | <ul><li>🌀مرموز</li></ul>                              | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/the-body.webp)                                         | The Body                                         | <ul><li>🌀مرموز</li></ul>                              | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-invisible-guest.webp)                              | The Invisible Guest                              | <ul><li>🌀مرموز</li></ul>                              | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/memories-of-murder.webp)                               | Memories of Murder                               | <ul><li>🌀مرموز</li></ul>                              | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/white-nights.webp)                                     | White Nights                                     | <ul><li>☕تلخ</li></ul>                                 | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/2001-a-space-odyssey.webp)                             | 2001 A Space Odyssey                             | <ul><li>🌀مرموز</li></ul>                              | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/chinatown.webp)                                        | Chinatown                                        | <ul><li>🌀مرموز</li></ul>                              | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/the-pilgrim.webp)                                      | The Pilgrim                                      | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/the-kid.webp)                                          | The Kid                                          | <ul><li>😊دلنشین</li></ul>                             | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-circus.webp)                                       | The Circus                                       | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/the-gold-rush.webp)                                    | The Gold Rush                                    | <ul><li>😊دلنشین</li><li>🧩سرگرم‌کننده</li></ul>       | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-great-dictator.webp)                               | The Great Dictator                               | \-                                                     | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/city-lights.webp)                                      | City Lights                                      | <ul><li>😊دلنشین</li></ul>                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/modern-times.webp)                                     | Modern Times                                     | <ul><li>😊دلنشین</li></ul>                             | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/asteroid-city.webp)                                    | Asteroid City                                    | <ul><li>🥱کسل‌کننده</li></ul>                          | ★★     |
| ![](https://ifard.ir/assets/covers/movies/the-insider.webp)                                      | The Insider                                      | <ul><li>🧲گیرا</li></ul>                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-notebook.webp)                                     | The Notebook                                     | \-                                                     | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/the-grand-budapest-hotel.webp)                         | The Grand Budapest Hotel                         | <ul><li>😊دلنشین</li><li>🧩سرگرم‌کننده</li></ul>       | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-fisher-king.webp)                                  | The Fisher King                                  | <ul><li>😊دلنشین</li><li>🧲گیرا</li></ul>              | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/midnight-in-paris.webp)                                | Midnight in Paris                                | <ul><li>🌊آبکی</li></ul>                               | ★★     |
| ![](https://ifard.ir/assets/covers/movies/about-time.webp)                                       | About Time                                       | <ul><li>✨حال‌خوب‌کن</li></ul>                          | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/nuremberg.webp)                                        | Nuremberg                                        | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-hobbit-the-battle-of-the-five-armies.webp)         | The Hobbit The Battle of the Five Armies         | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★     |
| ![](https://ifard.ir/assets/covers/movies/the-hobbit-the-desolation-of-smaug.webp)               | The Hobbit The Desolation of Smaug               | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-hobbit-an-unexpected-journey.webp)                 | The Hobbit An Unexpected Journey                 | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-lord-of-the-rings-the-return-of-the-king.webp)     | The Lord of the Rings The Return of the King     | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-lord-of-the-rings-the-two-towers.webp)             | The Lord of the Rings The Two Towers             | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/the-lord-of-the-rings-the-fellowship-of-the-ring.webp) | The Lord of the Rings The Fellowship of the Ring | <ul><li>🗝️ماجراجویانه</li><li>🧩سرگرم‌کننده</li></ul> | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-town.webp)                                         | The Town                                         | <ul><li>🧩سرگرم‌کننده</li><li>🧲گیرا</li></ul>         | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/fury.webp)                                             | Fury                                             | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/1917.webp)                                             | 1917                                             | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/poor-things.webp)                                      | Poor Things                                      | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/predestination.webp)                                   | Predestination                                   | <ul><li>🧩سرگرم‌کننده</li><li>🌀مرموز</li></ul>        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/american-gangster.webp)                                | American Gangster                                | <ul><li>🧩سرگرم‌کننده</li><li>🧲گیرا</li></ul>         | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/breakfast-at-tiffanys.webp)                            | Breakfast at Tiffanys                            | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/inglourious-basterds.webp)                             | Inglourious Basterds                             | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/state-of-play.webp)                                    | State of Play                                    | <ul><li>🌀مرموز</li></ul>                              | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-life-of-chuck.webp)                                | The Life of Chuck                                | <ul><li>✨حال‌خوب‌کن</li></ul>                          | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/vicky-cristina-barcelona.webp)                         | Vicky Cristina Barcelona                         | <ul><li>🌊آبکی</li></ul>                               | ★★     |
| ![](https://ifard.ir/assets/covers/movies/hugo.webp)                                             | Hugo                                             | <ul><li>🌀مرموز</li><li>🗝️ماجراجویانه</li></ul>       | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/cinema-paradiso.webp)                                  | Cinema Paradiso                                  | <ul><li>🧲گیرا</li><li>☕تلخ</li></ul>                  | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/no-country-for-old-men.webp)                           | No Country for Old Men                           | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-breakfast-club.webp)                               | The Breakfast Club                               | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/american-beauty.webp)                                  | American Beauty                                  | <ul></ul>                                              | ★★     |
| ![](https://ifard.ir/assets/covers/movies/the-secret-in-their-eyes.webp)                         | The Secret in Their Eyes                         | <ul><li>🧲گیرا</li><li>🌀مرموز</li></ul>               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/public-enemies.webp)                                   | Public Enemies                                   | <ul><li>☕تلخ</li><li>🌊آبکی</li></ul>                  | ★★     |
| ![](https://ifard.ir/assets/covers/movies/la-confidential.webp)                                  | L.A. Confidential                                | <ul><li>🧲گیرا</li><li>🌀مرموز</li></ul>               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/atonement.webp)                                        | Atonement                                        | <ul><li>☕تلخ</li></ul>                                 | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/marriage-story.webp)                                   | Marriage Story                                   | <ul><li>🧲گیرا</li></ul>                               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/american-hustle.webp)                                  | American Hustle                                  | <ul><li>🗑️چرت</li></ul>                               | ★      |
| ![](https://ifard.ir/assets/covers/movies/three-colors-red.webp)                                 | Three Colors Red                                 | <ul><li>🥱کسل‌کننده</li></ul>                          | ★★     |
| ![](https://ifard.ir/assets/covers/movies/dead-poets-society.webp)                               | Dead Poets Society                               | <ul><li>🧲گیرا</li></ul>                               | ★★★★★  |
<!-- SerializedQuery END -->


**ارباب حلقه‌ها** رو دوباره دیدم. فکر کنم اولین بار که دیدمش 12-13 سالم بود. خداروشکر پایانش رو فراموش کرده بودم و هنوز برام تعلیق و هیجان داشت. **هابیت** رو هم دیدم. به نظرم اسپین آف خوبی برای ارباب حلقه‌ها نبود. ارباب حلقه‌ها خیلی حماسی‌تر بود. حس جنگ‌آوری یا به اصطلاح جهادی داشت اما این توی هابیت کمرنگ بود.

یه مدتی هم رفتم سراغ فیلم های چارلی چاپلین. فکر میکردم فیلم های ساده و آبکی باشند اما بعضیاش داستان های گیرا و عمیقی داشت خصوصا مدرن تایم، سیتی لایت و گولد راش.

فیلم های وس اندرسون هم تازه دیدم. استروید سیتی رو دوست نداشتم ولی هتل گرند بوداپست خیلی خوب بود. بیشتر محو خلاقیت و فرم فیلم بودم. چه قدر یونیک و منحصر بفرده. رنگ ها، اندازه قاب دوربین، حرکت دوربین، نگاه به دوربین ها. فیلماش خیلی بصریه. دیدن فیلماش با زیرنویس واقعا کار سختیه. اینقدر که جزئیات داره من دوباره بر میگردم و بدون توجه به دیالوگ فقط تصاویر رو نگاه میکنم. 

این اواخر یه کم سلیقه‌ام تغییر کرده بود و رفتم سراغ فیلم‌هایی که فقط سرگرم کننده هستند. قبلا فقط ژانرهای جنایی و معمایی دوست داشتم. چیزی که ذهنم رو به چالش بکشه و درکش سخت باشه. اما الان دنبال قصه‌های معمولی میگردم. یه داستان خوب که گیرا و دلنشین باشه.

سینمای اسپانیا رو هم تازه شناختم. چقدر فیلم های خوبی داره. چندتا فیلم جنایی دیدم: The Body, The Invisible Guest, May God Save Us و The Secret in Their Eyes. آخری از همشون بهتر بود و داستان منطقی تری داشت.

کلا این چندتایی که دیدم یک ویژگی مشترک داشتند. یک پیچیدگی خاصی دارند، از این لحاظ که تا آخرین دقیقه نمیتونی حدس بزنی چی میشه. نویسنده یک سناریویی رو توی آستینش داره که تو هرگز بهش فکر نکردی. آخرش اون رو از تو آستینش میکشه بیرون و تو مات و مبهوت میمونی. نقطه‌ی قوتش اینجاست که اصلا تخیلی و غیرمنطقی نیست چون بذرهاش از اول توی فیلم کاشته شده.

کلا به اسپانیا علاقه خاصی پیدا کردم. یک احساس قرابتی هم باهاشون دارم، چهره هاشون، خونه و زندگی و روابطشون به ما ایرانی ها نزدیک تره. زبانشون رو هم دوست دارم. اگر انگلیسی رو مسلط بشم احتمالا زبان بعدی که یادبگیرم اسپانیایی باشه. سر جنگ هم جسارت بخرج دادند و با آمریکا همکاری نکردند که از حریم هوایی و زمینی شون استفاده کنه. 

<br><br>


#### سریال

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "series" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "series" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                        | file.name          | badge                                            | rating |
| ------------------------------------------------------------------ | ------------------ | ------------------------------------------------ | ------ |
| ![](https://ifard.ir/assets/covers/movies/the-wire.webp)           | The Wire           | <ul><li>🧩سرگرم‌کننده</li></ul>                  | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/pluribus.webp)           | Pluribus           | <ul><li>🧩سرگرم‌کننده</li></ul>                  | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-good-lord-bird.webp) | The Good Lord Bird | <ul><li>🧩سرگرم‌کننده</li><li>😊دلنشین</li></ul> | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/adolescence.webp)        | Adolescence        | <ul><li>🧲گیرا</li></ul>                         | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/mobland.webp)            | MobLand            | <ul><li>🧲گیرا</li></ul>                         | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/severance.webp)          | Severance          | <ul><li>🌀مرموز</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/true-detective.webp)     | True Detective     | <ul><li>🌀مرموز</li></ul>                        | ★★★★⯩  |
<!-- SerializedQuery END -->




**True Detective** <br> 
سریال **کاراگاه حقیقی** آنتولوژیه و هر فصلش داستان و بازیگرای متفاوتی داره. فصل اول و سومش خوب بود. فصل یک داستان و تعلیق خوبی داشت، بازی مک‌کانهی و هارلسون هم به کار نشسته بود. فصل سه داستان و فیلم برداری خوبی داشت، پر بود از مچ‌کات‌های تمیز. اما فصل دوم و چهارمش افتضاح بود.([+](https://tvcharts.co/show/true-detective-tt2356777))  کلا یه فاز دیگه داشت از اون حالت معمایی فاصله گرفته بود. دیالوگ، بازیگری و داستان ضعیف بود. فصل دوم که تقریبا اکشن بود. فصل چهارم هم دلهره‌آور.

**Adolescence**<br> 
مینی سریال **Adolescence** خیلی خوب بود. از اول تا آخرش محو سکانس پلان بودن فیلم شدم. از سکانس پلان خوشم میاد چون آدم رو به فیلم نزدیک تر میکنه. انگار واقعیه و خودت اونجا هستی و داری با چشم‌های خودت داستان رو از نزدیک میبینی. وقتی فیلم کات میخوره واقعی بودنش رو از دست میده.

**The Wire** <br>
سریال **شنود** خوب بود. قبلا به لیست فیلم هام اضافه کرده بودم که ببینم بعد از خوندن [یادداشت امین کاکاوند](https://kakavand.me/posts/the-wire/) ترغیب شدم ببینمش. همه اپیزودهاش هم نمره بالایی داره.([+](https://tvcharts.co/show/the-wire-tv-series-20142024-tt0306414)) البته که سریال آرومیه و نباید توقع هیجان و شور زیادی ازش داشته باشید. عوضش شخصیت پردازی هاش خوبه. اولش بازیگرهاش برام جذاب نبودند نه معروف بودند نه قشنگ.  اول اتفاقات توی خیابون ها برام جذاب بود. اون سیاه پوست ها، نحوه‌ی حرف زدنشون و تکون دادن دستاشون منو یاد GTA مینداخت. بعد یه کم که گذشت آدماش هم توی دلم جا باز کردند. شخصیت ها که شکل گرفتند علاقه داشتم داستانشون رو دنبال کنم. عوضی بودن مک نالتی. بانمک بودن بانک. مرموز و  حرفه ای بودن لستر. مدیریت استرینگر.

<br><br>

#### انیمیشن

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "animation" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "animation" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                     | file.name        | "`" + length.minute + " دقیقه`" | rating |
| --------------------------------------------------------------- | ---------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/ponyo.webp)           | Ponyo            | `101 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-lion-king-1.webp) | The Lion King 1½ | `77 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/spirited-away.webp)   | Spirited Away    | `124 دقیقه`                     | ★★★    |
<!-- SerializedQuery END -->


امسال انیمیشن زیاد ندیدم. با اینکه انیمه دوست ندارم ولی دلم میخواد آثار میازاکی رو ببینم. پونیو و شهر اشباح رو دیدم که هردو خوب بودند. هم داستانش قویه هم سبک و فرم اجرای میازاکی.

<br><br>

#### فیلم کوتاه

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "short" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "short" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                    | file.name      | "`" + length.minute + " دقیقه`" | rating |
| -------------------------------------------------------------- | -------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/the-bank.webp)       | The Bank       | `25 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-cure.webp)       | The Cure       | `24 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/a-dogs-life.webp)    | A Dogs Life    | `33 دقیقه`                      | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-adventurer.webp) | The Adventurer | `24 دقیقه`                      | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/shoulder-arms.webp)  | Shoulder Arms  | `36 دقیقه`                      | ★★★    |
<!-- SerializedQuery END -->



<br><br>

#### مستند
<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "documentaries" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "documentaries" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                                          | file.name                                            | "`" + length.minute + " دقیقه`" | rating |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/zero-days.webp)                                            | Zero Days                                            | `116 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-code.webp)                                             | The Code                                             | `58 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/tpb-afk-the-pirate-bay-away-from-keyboard.webp)            | TPB AFK The Pirate Bay Away from Keyboard            | `85 دقیقه`                      | ★★     |
| ![](https://ifard.ir/assets/covers/movies/the-internets-own-boy-the-story-of-aaron-swartz.webp)      | The Internets Own Boy The Story of Aaron Swartz      | `105 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/revolution-os.webp)                                        | Revolution OS                                        | `85 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/homework.webp)                                             | Homework                                             | `86 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/minimalism-a-documentary-about-the-important-things.webp)  | Minimalism A Documentary About the Important Things  | `78 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/running-with-the-devil-the-wild-world-of-john-mcafee.webp) | Running with the Devil The Wild World of John McAfee | `105 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/gringo-the-dangerous-life-of-john-mcafee.webp)             | Gringo The Dangerous Life of John McAfee             | `97 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/76-minutes-and-15-seconds-with-abbas-kiarostami.webp)      | 76 Minutes and 15 Seconds with Abbas Kiarostami      | `76 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-inventor-out-for-blood-in-silicon-valley.webp)         | The Inventor Out for Blood in Silicon Valley         | `119 دقیقه`                     | ★★★    |
<!-- SerializedQuery END -->

**The Inventor**<br> 
بعد از خوندن [این یاددشت](https://motamem.org/%DA%A9%D8%AA%D8%A7%D8%A8-%D8%AE%D9%88%D9%86-%D9%86%D8%AD%D8%B3/) در متمم ترغیب شدم مستند [The Inventor](https://www.imdb.com/title/tt8488126/) رو ببینم. الیزابت هلمز یک ایده برای آزمایش خون داشت؛ میخواست یه دستگاه اختراع کنه که بیمار بدون مراجعه به آزمایشگاه، خودش مقدار کمی خون رو بگیره و به سرور مرکزی آزمایشگاه ارسال کنه. یک شرکت تاسیس کرد به اسم ترانوس و سرمایه های کلانی گرفت و آخرش موفق نشد و متهم به کلاهبرداری شد.

ماجرای الیزابت جالب و عبرت آموزه. امروز هم سرمایه های عظیمی داره به سمت شرکت های هوش مصنوعی سرازیر میشه. احتمال اینکه به سرنوشت ترانوس دچار بشه یا حبابش مثل دات کام بترکه دور از اتنظار نیست.



**جان مکافی** <br> 
بعد از شنیدن پادکست چنل بی در مورد جان مکافی میخواستم در موردش بیشتر بدونم. دو تا مستند درموردش ساخته شده: [Gringo](https://www.imdb.com/title/tt6071534/) و [Running with the Devil](https://www.imdb.com/title/tt21379574/) اولی روایت منجسم تری داره. دومی توسط کسی ساخته شده که از زمان فرار مکافی از بلیز کنارش بوده و از تمامی احوالاتش فیلم گرفته. جالب اینجاست که این پیشنهاد خود مکافی بوده که بیان و ازش فیلم بگیرند.



**Minimalism** <br> 
اولین بار توسط [حامد](https://hameds.net/tag/minimalism/) با این جنبش مینیمالیسم آشنا شدم. اول سخنرانی تدشون رو دیدم. بعد مستندشون رو.
یه کتاب هم نوشتند که دیگه اون رو نخوندم. اصل حرفشون رو میشه در حد همون سخنرانی تد گرفت. بقیه اش نکته خاصی نداره. 

ایده شون رو دوست داشتم. منم رفتم سراغ وسایلام و هرچیزی که نیاز نداشتم رو جمع کردم.  البته من حوصله نداشتم طبق فرمول پیشنهادی اونها پیش برم. (فرمولشون [اینجاست](https://hameds.net/mingame/))

![[report1404-1766825655996.webp|400]]

این جنبش شاخه های افراطی تری هم داره. مثلا راب گرینفیلد فقط با 47 وسیله زندگی میکنه که خودش توی [این ویدئو](https://www.youtube.com/watch?v=3zO3xUg157c) توضیح داده. این دیگه خیلی زاهدانه است شبیه مرتاض‌ها شده. ولی وقتی همچین چیزی میبنم واقعا به وجد میام. خیلی احساس رهایی به آدم میده.



<br><br> 


## ۲. ردیابی عادت


### 🏋🏻 ورزش


![[report1404-1776500548793.webp]]

امسال **228 روز** ورزش کردم. ورزش تنها عادتیه که تونستم استمرارش رو حفظ کنم و ترکش نکنم. الان 3 ساله که مستمر ورزش می‌کنم. 

باشگاه رفتن برام چیزی فراتر از ورزش کردن شده. یه رابطه‌ی اجتماعیه، یه معاشرت خوب. آدم های باصفا. با هم ورزش می‌کنیم. شوخی می‌کنیم گپ می‌زنیم. داود کراس رو دست میندازیم. با هایزنبرگ مشورت می‌کنیم. از نادر صابون تریاک می‌خریم. غرولند خرابی دستگاه‌ها رو سر سجاد خالی می‌کنیم. فیگورهای هادی رو تماشا می‌کنیم. خلاصه فقط ورزش نمی‌کنیم. باشگاه کوچیکه. نصف دستگاه‌ها قدیمیه. بعضی وقتا شلوغ میشه باید صف وایسیم. اما عوضش آدمای با حالی داره. 

نتایج ورزش امسال خیلی چشمگیر نبود ولی در کل راضیم. حس خوب، سرحالی و انرژی که ورزش کردن بهم میده کافیه. 

شهریور رفتم تست بادی آنالیز دادم. تست قبلی برای 6 ماه قبل بود یعنی اسفند 1403. این مدت 2 کیلو اضافه کرده بودم. خوشحال بودم که عضله سازی کردم. با غرور رفتم روی دستگاه وایسادم و منتظر نتیجه بودم. تست قبلی چربی بدنم 20درصد بود. توقع داشتم اینبار کمتر از 20 باشه. آنالیز شروع شد و عدد شروع کرد به حرکت. اما اتفاقی افتاد که نباید می‌افتاد. عدد از 20 هم گذشت و روی 21 جا خوش کرد.

خیلی ناراحت شدم. نتیجه دور از انتظار نبود. این مدت دور شکمم رو هم اندازه گرفته بودم که متاسفانه یک سانت اضافه شده بود. نتیجه این همه رژیم و ورزش شده این خرابکاری. نسبت به 6 ماه قبل 1300 گرم چربی آوردم و فقط 400 گرم عضله ساختم. البته که عضله‌سازی بدون افزایش چربی کار ساده‌ای نیست. دست کم اگر 50-50 بود قابل اغماض بود اما حجم چربی من 3 برابر عضله‌ست! تازه 400 گرم عضله برای 6 ماه خیلی کمه، خیلی!

باز خوب شد فهمیدم و تونستم جلوش رو بگیرم. برنامه تمرینم رو تغییر دادم. تغذیه رو هم بیشتر رعایت کردم. بعد 6 ماه یعنی اسفند دوباره رفتم تست دادم. چربی بدنم کم شده بود و رسیده بود به 19 درصد. ولی همچنان عضله کمی ساخته بودم و کلا 100 گرم عضله ساختم.



> [!NOTE]- جزئیات تغییر برنامه
> اینکه شش ماه اول نتیجه بدی گرفتم به خاطر این موارد بوده:
> - من محدودیتی توی مصرف نون نداشتم. نون‌هایی هم که ما مصرف میکنیم آردش کامل نیست و کربوهیدارتش سریع جذب میشه.
> - حجم پروتئین دریافتی ام پایین بود و تنوع لازم رو هم نداشت. معمولا از مرغ و تخم مرغ تامین میشد.
> - تمریناتم ایراد داشت. افزایش وزنه ها و تغییر برنامه با تاخیر انجام میشد به خاطر همین عضله‌ها به تمرین عادت کرده بودند و خوب رشد نکردند. تمرین هوازی هم یا انجام نمی‌دادم یا شدت لازم رو نداشت.
> 
> بعد از اون این کارها رو انجام دادم و تونستم توی شش ماه دو کیلو چربی خالص کم کنم:
> - مصرف نون رو خیلی کم کردم و به جای سنگک و بربری از نون پروتئینی استفاده کردم. به جای نون، از حجم زیادی کاهو و هویج و فلفل دلمه استفاده کردم تا سیر بشم. 
> - برای حفظ انرژی از کربوهیدارت پیچیده مثل سیب‌زمینی استفاده کردم.
> - برای تنوع غذایی ماهی و پروتئین‌های گیاهی مثل عدس و لوبیا رو هم به برنامه اضافه کردم.
> - تمرین‌ها رو قدرتی‌تر کردم. وزنه ها رو افزایش دادم با تکرار پایین مثلا 6 تا 8 حرکت.
> - تمرین هوازی رو هم کامل‌تر انجام دادم. ۳۰ تا ۴۰ دقیقه دویدن مداوم بدون توقف.



<br> 

### 📖 مطالعه

![[report1404-1776500578987.webp]]

امسال **231 روز** مطالعه کردم که مجموعا **489 پومودورو** بود. نسبت به پارسال مطالعه‌ام خیلی بیشتر شده بود. تونستم استمرارش رو حفظ کنم و حداقل روزی 1 پومودورو مطالعه کنم. البته اینکه رفتم سراغ کتاب های داستانی هم بی تاثیر نبوده.

کتاب های غیرداستانی معمولا انرژی بیشتری میخواد و مغزم باید برای فهمیدنش تلاش کنه. به خاطر همین از خوندن کتاب فرار میکردم و دنبال یک موقعیت مناسب بودم. حالا که رمان و داستان به کتاب‌هام اضافه شده توی هر شرایطی کتاب میخونم. گیرایی و تعلیق داستان هم باعث میشه بیشتر مطالعه کنم.

<br><br>

### 🌎 زبان انگلیسی

![[report1404-1776500600523.webp]]

امسال **98 روز** زبان خوندم که مجموعا **206 پومودورو** بود.

یادگیری زبان رو بارها شروع کردم ولی هیچ وقت ادامه ندادم. امسال تلاش کردم با کمک هبیت ترکر تبدیلش کنم به عادت. مدتی هم موفق شدم ولی هنوز نتونستم بهش پایبند باشم.

فعلا خودآموز با تاپ ناچ جلو میرم. هر چند قدیمی شده اما فعلا قصد دارم همین کتاب رو تموم کنم تا ببینم بعدش چی میشه. 

یک تمرین جدید رو هم شروع کردم. به پیشنهاد [سارا درهمی](https://youtu.be/TUwX7GysPqA?si=S2U7aIwL0fOcNWDi) داستان های کوتاه رو حفظ می کردم. البته نه از اپلیکیشن زبان آموز، از خود سایت [BritishCouncil](https://learnenglishkids.britishcouncil.org/listen-watch/short-stories).

من معمولا اعتقادی به صحبت کردن و تکرار کردن مکالمات با صدای بلند نداشتم. خصوصا چون چیزی بلد نبودم می‌ترسیدم کلمات اشتباهی توی ذهنم ثبت بشه. اما با حفظ کردن این داستان‌ها شرایط فرق کرد. تازه با مفهوم «حافظه عضلانی» آشنا شدم. اینکه دهن، فک و زبان هم باید عادت کنند به تلفظ کلمات جدید.

مزیت دیگه این تمرین این بود که حس کردم واقعا دارم حرف می‌زنم. هرچند متن رو از حفظ می‌گفتم ولی همین که میتونستم لحن گوینده رو تقلید کنم و حرف بزنم انگیزه‌ای می‌شد برای اینکه تمرین کنم و ادامه بدم. متن این داستان‌ها خیلی بهتر از مکالمات خشک و بی‌روح کورس‌بوک‌ها بود.

چیزی که من الان بهش نیاز دارم فهمیدنه. یعنی بتونم بخونم و بشنوم. میدونم که هر چهارتا مهارت باید باهم رشد کنه ولی فعلا حرف زدن و نوشتن اولویتم نیست. برای ریدینگ یه نفر پیشنهاد داد کتاب Read This رو بخونم. تقریبا خوب بود. داستان هاش هم بد نبود ولی داستان های سایت BritishCouncil برام جذاب تر بود. لغاتش هم بهتر توی ذهنم مونده. نمیدونم شایدم به خاطر این بوده که متنش رو حفظ میکردم.

هنوز به اون تسلطی که میخوام نرسیدم خیلی بیشتر باید تلاش کنم.


<br> 


### 📱 رسانه‌های اجتماعی

![[report1404-1776500882429.webp]]

مجموعا **357 ساعت** توی سوشال مدیا بودم. نسبت به پارسال 200 ساعت کمتر وقت تلف کردم. کاهش نسبتا خوبی بود. البته نبود اینترنت هم بی تاثیر نبود. همونطور که توی تقویم مشخصه زمان اعتراضات دیماه 9 روز کلا گوشی رو باز نکردم و زمانش صفر بود. بعدش هم که جنگ شد. با اینکه موج خبرا زیاد بود ولی ترجیح دادم کمتر خبرها رو دنبال کنم.

اگر این زمان رو صرف پیاده روی کرده بودم 1585 کیلومتر پیاده رفته بودم. نسبت به [[report1403#📱 رسانه‌های اجتماعی|مسیر پارسال]] 900 کیلومتر کمتر شده و تقریبا معادل [ارومیه تا رفسنجان](https://maps.app.goo.gl/b1LuyeZHYSME6RYd7) میشه:

![[report1404-1776714868152.webp|500]]


<br><br>

## ۳. پروژه‌ها

### سایت [پرامپت‌ساز](https://fardm.github.io/PromptSaz/)
![[1749996183100.webp|400]]

برای ساخت تصویر با هوش مصنوعی یکسری کلیدواژه هست که برای گرفتن خروجی بهتر خیلی کمک میکنه. موقع توصیف سوژه هم معمولا همه‌ی جزئیات مثل نورپردازی، ترکیب‌بندی و رنگ‌بندی سخته و ممکنه خیلی موارد رو فراموش کنیم. 
با کمک bolt.new یه سایت درست کردم و همه این موارد رو بهش اضافه کردم. دسته بندی خیلی دقیقی داره و رابط کاربری اش هم خیلی خوبه. روی هر کلمه کلیک میکنید و به پرامپت اضافه میشه. خروجی جیسون هم میده. 

اولین سایتی بود که با bolt.new ساختم. فقط با چندتا پرامپت ساختار کلی اش رو ساخت و بقیه جزئیات رو خودم بهش اضافه کردم. خیلی خوب و راحت بود.

<br>

### سایت [تمرین‌ساز](https://tamrinsaz.ir)
![[1752437408804.webp|400]]

قبلا توی Notion یه دیتابیس برای تمرینات بدنسازی ساخته بودم و برنامه تمرینی خودم رو اونجا میساختم. بعد از تجربه ساخت سایت با bolt وسوسه شدم اون دیتابیس رو هم تبدیل به سایت کنم. این سایت یه کم پیچیده تر بود و جزئیات بیشتری داشت به خاطر همین وقت بیشتری ازم گرفت.

این سایت مخصوص کسانیه که می‌خوان برنامه تمرینی خودشون رو بسازن یا برنامه‌ای که از مربی گرفتن رو وارد کنن و راحت‌تر پیگیری کنن. این قابلیت ها رو هم داره:
- ✅ چک‌لیست و نوار پیشرفت برای هر جلسه
- ✅ آموزش اجرای صحیح حرکات
- ✅ فیلتر تمرین‌ها بر اساس عضله یا تجهیزات
- ✅ امکان ساخت برنامه با هوش مصنوعی

<br>

### پلاگین [Book Clipper](https://github.com/fardm/obsidian-book-clipper)
برای ذخیره اطلاعات کتاب توی ابسیدین قبلا یک اکستنشن ساخته بودم به اسم به اسم [ObsiBook](https://github.com/fardm/ObsiBook). بعدا تبدیلش کردم به یک اسکریپت ([ObsiBook-Script](https://github.com/fardm/ObsiBook/tree/script)) که داخل خود ابسیدین اجرا بشه. تصمیم گرفتم تبدیلش کنم به پلاگین که توی ابسیدین راحت تر بشه ازش استفاده کرد.

با توجه به اینکه تایپ اسکریپت بلد نبودم یه کم کار سختی بود. داکیومنت ابسیدین رو خوندم و با هوش مصنوعی تونستم همون اسکریپت که با جاوااسکریپت نوشته شده بود رو به تایپ اسکریپت تبدیل کنم.

تقریبا سه ماه طول کشید تا توسط تیم ابسیدین تایید بشه. 23 سپتامبر درخواست دادم و 11 دسامبر تایید شد.([+](https://github.com/obsidianmd/obsidian-releases/pull/7921)) 

<br>

### [[memento-mori-calendar-obsidian|تقویم Memento Mori در ابسیدین]]

![[1755097469793.webp|400]]

معمولا این تقویم رو چاپ میکنند و هر هفته خونه هاش رو پر میکنند. اما من یادم میرفت یا حوصله ام نمی شد این کار رو انجام بدم. یه اسکریپت نوشتم که تاریخ تولدم رو بگیره و خودش اینکار رو انجام بده. 

<br>

### داشبورد [[habit-tracker-in-obsidian|هبیت ترکر]]
![[1755378027311.webp|400]]

به هبیت ترکر ابسیدین یه داشبورد اضافه کردم که وضعیت عادت های امروز رو نشون میده. محاسبه زنجیره عادت رو هم بهش اضافه کردم. اینطوری خاصیت گیمیفیکیشن‎‌اش بیشتر میشه و آدم تلاش میکنه امتیاز بیشتری بگیره. یه سری لوس بازی مثل مدال و کاپ و اینا هم بهش اضافه کردم:)

<br><br> 

## ارزیابی
نسبت به پارسال وضعیت بهتری داشتم. بیشتر مطالعه کردم، سوشال مدیا کمتر وقت تلف کردم. 

در مورد آینده نگرانی زیاد دارم. هنوز سردرگمم. امسال خودمو به روزمرگی مشغول کردم که فکرم کمتر مشغول بشه. از صبح تا شب یه طوری وقتم رو با کار و ورزش و مطالعه و فیلم پر میکردم که ذهنم نخواد فکر و خیال کنه. همین روزمرگی اجازه میده ابهام رو تحمل کنم اما نمیدونم تا کی قراره ادامه پیدا کنه. باید یه کار اساسی بکنم. باید تکلیفمو روشن کنم. دانشگاه رو تموم کنم. سربازی برم. یه کار بهتر پیدا کنم. کار نکرده زیاد دارم.

سال دیگه میخوام روی روابطم بیشتر وقت بذارم. با آدمای همفکر بیشتر ارتباط بگیرم. با کسایی که حداقل توی یک چیز زبان مشترک داریم. 


<br><br>