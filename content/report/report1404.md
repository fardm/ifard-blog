---
title: گزارش توسعه فردی ۱۴۰۴
aliases:
  - گزارش توسعه فردی ۱۴۰۴
date: 2025-04-24
lastmod: 2025-06-07
draft: false
tags: 
status: 🌱نهال
image: 
parent:
  - "[[reports|📋 گزارش‌های توسعه فردی]]"
cssclasses:
  - card-s
  - nowarp2
  - c3-4
order: "1404"
emoji: 🌱
---


این یادداشت صرفا گزارش کلی از محتوا ها و فعالیت هاست. توضیحات تکمیلی انتهای سال اضافه می شود...

## در یک نگاه

<br/>

<div class="overview-3">
<!-- QueryToSerialize: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count      | sum         |
| ---- | ---------- | ----------- |
| 📚   | 9 جلد کتاب | `2017 صفحه` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count         | sum         |
| ---- | ------------- | ----------- |
| 🎓   | 2 دوره‌آموزشی | `16.2 ساعت` |
<!-- SerializedQuery END -->



<!-- QueryToSerialize: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count    | sum         |
| ---- | -------- | ----------- |
| 🎙   | 7 پادکست | `14.3 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "✨" as icon, length(rows) + " محتوای مفید" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Media WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "✨" as icon, length(rows) + " محتوای مفید" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Media WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count         | sum        |
| ---- | ------------- | ---------- |
| ✨    | 2 محتوای مفید | `3.2 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🍿" as icon, length(rows) + " فیلم و سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🍿" as icon, length(rows) + " فیلم و سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count          | sum         |
| ---- | -------------- | ----------- |
| 🍿   | 8 فیلم و سریال | `59.8 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Documentary WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Documentary WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count   | sum      |
| ---- | ------- | -------- |
| 🎥   | 1 مستند | `2 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🏋️" as icon, "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`", "ورزش کردم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🏋️" as icon, "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`", "ورزش کردم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->

| icon | "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`" | "ورزش کردم" |
| ---- | ----------------------------------------------------------------- | ----------- |
| 🏋️  | `51 روز`                                                          | ورزش کردم   |
<!-- SerializedQuery END -->



<!-- QueryToSerialize: TABLE WITHOUT ID "📖" as icon, "`" + round(sum(rows.📚reading)) + " پومودورو`", "مطالعه کردم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📖" as icon, "`" + round(sum(rows.📚reading)) + " پومودورو`", "مطالعه کردم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->

| icon | "`" + round(sum(rows.📚reading)) + " پومودورو`" | "مطالعه کردم" |
| ---- | ----------------------------------------------- | ------------- |
| 📖   | `113 پومودورو`                                  | مطالعه کردم   |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "📱" as icon, "`" + round(sum(rows.📱social)) + " ساعت`", "در سوشال‌مدیا بودم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📱" as icon, "`" + round(sum(rows.📱social)) + " ساعت`", "در سوشال‌مدیا بودم" FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->

| icon | "`" + round(sum(rows.📱social)) + " ساعت`" | "در سوشال‌مدیا بودم" |
| ---- | ------------------------------------------ | -------------------- |
| 📱   | `88 ساعت`                                  | در سوشال‌مدیا بودم   |
<!-- SerializedQuery END -->


</div>

<br/><br/>

## بخش اول: مصرف محتوا


### 📚 کتاب 

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, badge, rating FROM #Book WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, badge, rating FROM #Book WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                               | file.name                                             | badge                                          | rating |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- | ------ |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1733936644i/222473148.jpg) | دستورالعمل‌های «رنه ماگریت» به فیل آبی برای ایده‌یابی | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ⭐⭐⭐⭐   |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1372230262i/18131269.jpg)  | دستورالعمل‌های فیل آبی برای ایده یابی                 | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ⭐⭐⭐⭐⭐  |
| ![](https://www.iranketab.ir/Images/ProductImages/ddbb022862d746f693ec326801975f38.jpg)                              | یادگیری زایا                                          | <ul><li>🐢سخت‌خوان</li></ul>                   | ⭐⭐     |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1711024105i/210226829.jpg) | تاکسی سواری                                           | \-                                             | \-     |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678958674i/123254244.jpg) | یادگیری یادگیری                                       | <ul><li>🪶خوش‌خوان</li></ul>                   | ⭐⭐⭐⭐⭐  |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1732359122i/37542567.jpg)  | مزخرفات فارسی                                         | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ⭐⭐⭐⭐   |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630003593i/58863007.jpg)  | از قیطریه تا اورنج کانتی                              | <ul><li>☕تلخ</li><li>🪶خوش‌خوان</li></ul>      | ⭐⭐⭐⭐⭐  |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681403696i/55973999.jpg)  | قدرت سکوت                                             | \-                                             | ⭐⭐⭐    |
| ![](https://img.taaghche.com/frontCover/211482.jpg)                                                                  | کتاب 80000 ساعت                                       | \-                                             | ⭐⭐⭐    |
<!-- SerializedQuery END -->


<br><br>

### 🎓 دوره‌های آموزشی

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours,1) + " ساعت`", rating FROM #Course WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours,1) + " ساعت`", rating FROM #Course WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                | file.name                     | "`" + round(length.hours,1) + " ساعت`" | rating |
| ----------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------- | ------ |
| ![](https://static.skillshare.com/uploads/video/thumbnails/0bcdb57f80be0d1cceb3f11e51408c6e/original) | Figma UI UX Design Essentials | `12 ساعت`                              | ⭐⭐⭐    |
| ![](https://motamem.org/wp-content/uploads/2021/11/attention-management-1.gif)                        | دوره صوتی اقتصاد توجه         | `4.2 ساعت`                             | \-     |
<!-- SerializedQuery END -->


<br><br>


### 🎙 پادکست

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Podcast WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Podcast WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                   | file.name                      | "`" + length.minute + " دقیقه`" | rating |
| ---------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------- | ------ |
| ![](https://s3.castbox.fm/86/38/01/c544ff728e068a62237ffa6752ad56883e_scaled_v1_400.jpg) | جنوبگان                        | `130 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/a2/8b/ec/48ec56b385d9f4baac2e136bcd9f10e399_scaled_v1_400.jpg) | صد و چهل و پنج کیلومتر‌در‌ساعت | `104 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/fa/2a/d7/aaa93a35d438332970e72f5a0f2898dade_scaled_v1_400.jpg) | ارون سوارتز                    | `143 دقیقه`                     | ⭐⭐⭐⭐⭐  |
| ![](https://s3.castbox.fm/a3/3c/4a/0a7a8af00e5b77b549a924e612850fea77_scaled_v1_400.jpg) | حسین یزدی                      | `172 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/8e/57/36/03fa6ea0da1189a0b0d87f1e6ac2252350_scaled_v1_400.jpg) | آموک                           | `105 دقیقه`                     | ⭐⭐     |
| ![](https://s3.castbox.fm/c0/fc/94/79f1a4dc63e91ae50957acfba1a34fb225_scaled_v1_400.jpg) | پانصد کیلو دینامیت             | `97 دقیقه`                      | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/2e/4e/ab/a277df9ddad004eb959e6299a939f501c7_scaled_v1_400.jpg) | یونابامبر                      | `110 دقیقه`                     | ⭐⭐⭐⭐   |
<!-- SerializedQuery END -->



<br><br>

### ✨ محتوای مفید


<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Media WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Media WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                | file.name                 | "`" + length.minute + " دقیقه`" | rating |
| --------------------------------------------------------------------- | ------------------------- | ------------------------------- | ------ |
| ![](https://static.cdn.asset.filimo.com/flmt/mov_159113_288651-b.jpg) | اکنون محمدرضا شعبانعلی    | `100 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://i.ytimg.com/vi/3u8b_fLj_zs/maxresdefault.jpg)             | چرا آخرش وقت کم می‌آوریم؟ | `90 دقیقه`                      | ⭐⭐⭐    |
<!-- SerializedQuery END -->



<br><br>

### 🍿 فیلم و سریال


<div class="overview-4">
<!-- QueryToSerialize: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "movie" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "movie" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count  | sum         |
| ---- | ------ | ----------- |
| 🎬   | 5 فیلم | `10.4 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count   | sum         |
| ---- | ------- | ----------- |
| 📺   | 3 سریال | `49.4 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎈" as icon, length(rows) + " انیمیشن" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "animation" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎈" as icon, length(rows) + " انیمیشن" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "animation" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count | sum |
| ---- | ----- | --- |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null AND date >= date("2025-03-21") AND date <= date("2026-03-20") GROUP BY "" -->

| icon | count | sum |
| ---- | ----- | --- |
<!-- SerializedQuery END -->

</div>

#### فیلم
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, badge, rating FROM #Movie WHERE type = "movie" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, badge, rating FROM #Movie WHERE type = "movie" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                  | file.name          | badge                    | rating |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------ | ------ |
| ![](https://m.media-amazon.com/images/M/MV5BZmQ5ZjZlMzMtODA1ZS00NTNiLWIzOTYtOTQyYjQ2YWQxMTA1XkEyXkFqcGc@._V1_SX300.jpg) | Atonement          | <ul><li>☕تلخ</li></ul>   | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BNmE0OWJlM2MtNzhmMi00YmQyLTlmY2EtZmUzNzBiNGRlN2JkXkEyXkFqcGc@._V1_SX300.jpg) | Marriage Story     | <ul><li>🧲گیرا</li></ul> | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BMGQ2NzEwZGEtYjk1MC00NWFmLTgyYTgtZmRhMTRmOTBlN2U5XkEyXkFqcGc@._V1_SX300.jpg) | American Hustle    | \-                       | ⭐      |
| ![](https://m.media-amazon.com/images/M/MV5BMTQ0YTQyYzItNGEzMi00NmI4LWJkOTMtOWMyMjAwMWEzYTZhXkEyXkFqcGc@._V1_SX300.jpg) | Three Colors Red   | \-                       | ⭐⭐     |
| ![](https://m.media-amazon.com/images/M/MV5BMDYwNGVlY2ItMWYxMS00YjZiLWE5MTAtYWM5NWQ2ZWJjY2Q3XkEyXkFqcGc@._V1_SX300.jpg) | Dead Poets Society | <ul><li>🧲گیرا</li></ul> | ⭐⭐⭐⭐⭐  |
<!-- SerializedQuery END -->


<br><br>


#### سریال
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, badge, rating FROM #Movie WHERE type = "series" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, badge, rating FROM #Movie WHERE type = "series" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                  | file.name      | badge                     | rating |
| ----------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------- | ------ |
| ![](https://m.media-amazon.com/images/M/MV5BZDVmMzJkOWUtMjdjMi00NzA4LTgxMTItYjA4NjVjZDI0ZWU1XkEyXkFqcGc@._V1_SX300.jpg) | MobLand        | \-                        | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_SX300.jpg) | Severance      | \-                        | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BYjgwYzA1NWMtNDYyZi00ZGQyLWI5NTktMDYwZjE2OTIwZWEwXkEyXkFqcGc@._V1_SX300.jpg) | True Detective | <ul><li>🌀مرموز</li></ul> | ⭐⭐⭐⭐⭐  |
<!-- SerializedQuery END -->



سریال True Detective آنتولوژیه و هر فصلش داستان و بازیگرای متفاوتی داره. فصل اول و سومش خوب بود. فصل یک داستان و تعلیق خوبی داشت، اجرای مک‌کانهی و هارلسون هم به کار نشسته بود. فصل سه داستان و فیلم برداری خوبی داشت، پر بود از مچ کات های تمیز. اما فصل دوم و چهارمش افتضاح بود.([+](https://tvcharts.co/show/true-detective-tt2356777))  کلا یه فاز دیگه داشت از اون حالت معمایی فاصله گرفته بود. دیالوگ، بازیگری و داستان ضعیف بود. فصل دوم که تقریبا اکشن بود. فصل چهارم هم دلهره‌آور.
<br><br>

#### انیمیشن

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "animation" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "animation" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover + ")") | file.name | "`" + length.minute + " دقیقه`" | rating |
| ---------------------- | --------- | ------------------------------- | ------ |
<!-- SerializedQuery END -->


<br><br>

#### فیلم کوتاه
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "short" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "short" AND date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover + ")") | file.name | "`" + length.minute + " دقیقه`" | rating |
| ---------------------- | --------- | ------------------------------- | ------ |
<!-- SerializedQuery END -->


<br><br>

### 🎥 مستند

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Documentary WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Documentary WHERE date >= date("2025-03-21") AND date <= date("2026-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                  | file.name                                    | "`" + length.minute + " دقیقه`" | rating |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------- | ------ |
| ![](https://m.media-amazon.com/images/M/MV5BYmM2ZjAxZWYtOTIwYS00NDgyLThlYjctZTdlOTkxOTExZjliXkEyXkFqcGc@._V1_SX300.jpg) | The Inventor Out for Blood in Silicon Valley | `119 دقیقه`                     | \-     |
<!-- SerializedQuery END -->



<br><br>

### 🎵 موسیقی

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0YRYs1HSkie0eZ02ON4euX?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<br><br> 

## بخش دوم: ردیابی عادت


### 🏋🏻 ورزش


<div class="full">
<!-- QueryToSerialize: TABLE "🏋️ " + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز ورزش کردم" as true, "🛌 " + length(filter(rows, (r) => r.🏋️exercise = false)) + " روز استراحت کردم" as false FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE "🏋️ " + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز ورزش کردم" as true, "🛌 " + length(filter(rows, (r) => r.🏋️exercise = false)) + " روز استراحت کردم" as false FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->

| "" | true                 | false                  |
| -- | -------------------- | ---------------------- |
|    | 🏋️ 51 روز ورزش کردم | 🛌 28 روز استراحت کردم |
<!-- SerializedQuery END -->

</div>
<br><br>

### 📖 مطالعه
مدت زمان مطالعه را با پومودورو اندازه گرفتم. هر پومودورو 25 تا 30 دقیقه.

<div class="full">
<!-- QueryToSerialize: table without id "🔘 جمع کل: " + round(sum(rows.📚reading)) + " پ" as Total, "🔺 بیشترین: " + round(max(rows.📚reading)) + " پ" as Maximum, "🔻 کمترین: " + round(min(rows.📚reading)) + " پ" as Minimum, "📈 میانگین: " + round(sum(rows.📚reading) / length(rows), 1) + " پ" as Average FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: table without id "🔘 جمع کل: " + round(sum(rows.📚reading)) + " پ" as Total, "🔺 بیشترین: " + round(max(rows.📚reading)) + " پ" as Maximum, "🔻 کمترین: " + round(min(rows.📚reading)) + " پ" as Minimum, "📈 میانگین: " + round(sum(rows.📚reading) / length(rows), 1) + " پ" as Average FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->

| Total            | Maximum         | Minimum        | Average           |
| ---------------- | --------------- | -------------- | ----------------- |
| 🔘 جمع کل: 113 پ | 🔺 بیشترین: 8 پ | 🔻 کمترین: 0 پ | 📈 میانگین: 1.4 پ |
<!-- SerializedQuery END -->
</div>
<br><br>

### 📱 رسانه‌های اجتماعی


<div class="full">
<!-- QueryToSerialize: table without id "🔘 جمع کل: " + round(sum(rows.📱social)) + " ساعت" as Total, "🔺 بیشترین: " + round(max(rows.📱social),1) + " ساعت" as Maximum, "🔻 کمترین: " + round(min(rows.📱social),1) + " ساعت" as Minimum, "📈 میانگین: " + round(sum(rows.📱social) / length(rows), 1) + " ساعت" as Average FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->
<!-- SerializedQuery: table without id "🔘 جمع کل: " + round(sum(rows.📱social)) + " ساعت" as Total, "🔺 بیشترین: " + round(max(rows.📱social),1) + " ساعت" as Maximum, "🔻 کمترین: " + round(min(rows.📱social),1) + " ساعت" as Minimum, "📈 میانگین: " + round(sum(rows.📱social) / length(rows), 1) + " ساعت" as Average FROM #journal WHERE file.name >= ("2025-03-21") AND file.name <= ("2026-03-20") GROUP BY "" -->

| Total              | Maximum              | Minimum           | Average              |
| ------------------ | -------------------- | ----------------- | -------------------- |
| 🔘 جمع کل: 88 ساعت | 🔺 بیشترین: 2.5 ساعت | 🔻 کمترین: 0 ساعت | 📈 میانگین: 1.1 ساعت |
<!-- SerializedQuery END -->
</div>

<br><br>




<br><br>


