---
title: گزارش توسعه فردی ۱۴۰۳
aliases:
  - گزارش توسعه فردی ۱۴۰۳
date: 2024-08-25
lastmod: 2025-06-07
draft: false
tags: 
status: 🌿درختچه
image: 
parent:
  - "[[reports|📋 گزارش‌های توسعه فردی]]"
cssclasses:
  - card-s
  - nowarp2
order: "1403"
emoji: 🌿
---
<br>


## در یک نگاه

<br>

<div class="overview-3">
<!-- QueryToSerialize: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count       | sum         |
| ---- | ----------- | ----------- |
| 📚   | 22 جلد کتاب | `3776 صفحه` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count         | sum         |
| ---- | ------------- | ----------- |
| 🎓   | 7 دوره‌آموزشی | `75.3 ساعت` |
<!-- SerializedQuery END -->



<!-- QueryToSerialize: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count     | sum          |
| ---- | --------- | ------------ |
| 🎙   | 36 پادکست | `126.1 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "✨" as icon, length(rows) + " محتوای مفید" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Media WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "✨" as icon, length(rows) + " محتوای مفید" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Media WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count         | sum        |
| ---- | ------------- | ---------- |
| ✨    | 5 محتوای مفید | `7.3 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🍿" as icon, length(rows) + " فیلم و سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🍿" as icon, length(rows) + " فیلم و سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count           | sum          |
| ---- | --------------- | ------------ |
| 🍿   | 69 فیلم و سریال | `199.8 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Documentary WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Documentary WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count   | sum         |
| ---- | ------- | ----------- |
| 🎥   | 6 مستند | `12.4 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🏋️" as icon, "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`", "ورزش کردم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🏋️" as icon, "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`", "ورزش کردم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| icon | "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`" | "ورزش کردم" |
| ---- | ----------------------------------------------------------------- | ----------- |
| 🏋️  | `273 روز`                                                         | ورزش کردم   |
<!-- SerializedQuery END -->



<!-- QueryToSerialize: TABLE WITHOUT ID "📖" as icon, "`" + round(sum(rows.📚reading)) + " پومودورو`", "مطالعه کردم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📖" as icon, "`" + round(sum(rows.📚reading)) + " پومودورو`", "مطالعه کردم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| icon | "`" + round(sum(rows.📚reading)) + " پومودورو`" | "مطالعه کردم" |
| ---- | ----------------------------------------------- | ------------- |
| 📖   | `304 پومودورو`                                  | مطالعه کردم   |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "📱" as icon, "`" + round(sum(rows.📱social)) + " ساعت`", "در سوشال‌مدیا بودم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📱" as icon, "`" + round(sum(rows.📱social)) + " ساعت`", "در سوشال‌مدیا بودم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| icon | "`" + round(sum(rows.📱social)) + " ساعت`" | "در سوشال‌مدیا بودم" |
| ---- | ------------------------------------------ | -------------------- |
| 📱   | `557 ساعت`                                 | در سوشال‌مدیا بودم   |
<!-- SerializedQuery END -->


</div>


<br><br>

## بخش اول: مصرف محتوا


### 📚 کتاب 

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + pages + " صفحه`", rating FROM #Book WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + pages + " صفحه`", rating FROM #Book WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                              | file.name                             | "`" + pages + " صفحه`" | rating |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------------------- | ------ |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1460060004i/17336847.jpg) | مبادی سواد بصری                       | `252 صفحه`             | ⭐⭐     |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1477218519i/22050315.jpg) | هفت روایت خصوصی از زندگی سید موسی صدر | `192 صفحه`             | ⭐⭐⭐    |
| ![](https://s32.picofile.com/file/8478850484/mr_jicak.jpg)                                                          | مستر جیکاک                            | `136 صفحه`             | ⭐      |
| ![](https://s32.picofile.com/file/8478794884/Visual_Hammer.jpg)                                                     | چکش بصری                              | `183 صفحه`             | ⭐⭐⭐    |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1512139215i/36696980.jpg) | دروغ‌های مسلح                         | `344 صفحه`             | ⭐⭐⭐    |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1354312096i/15858089.jpg) | The Sketchnote Handbook               | `224 صفحه`             | ⭐⭐⭐⭐   |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595319091i/54622169.jpg) | دیگر اخبار نخوانید                    | `152 صفحه`             | ⭐⭐⭐⭐   |
| ![](https://s32.picofile.com/file/8478581668/khone_khoda.jpg)                                                       | خون خدا                               | `105 صفحه`             | ⭐⭐⭐⭐   |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1508160297i/36422557.jpg) | اتوپرتره                              | `92 صفحه`              | ⭐⭐⭐⭐   |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700136134i/252025.jpg)   | ابن مشغله                             | `112 صفحه`             | ⭐⭐⭐⭐   |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715779752i/178539.jpg)   | نشت نشا                               | `80 صفحه`              | ⭐⭐⭐    |
| ![](https://s32.picofile.com/file/8478581650/Indispensable.jpg)                                                     | مهره حیاتی                            | `293 صفحه`             | ⭐⭐     |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1518194023i/8177701.jpg)  | نفحات نفت                             | `230 صفحه`             | ⭐⭐⭐⭐   |
| ![](https://s32.picofile.com/file/8478581626/as_keteb.jpg)                                                          | از کتاب                               | `395 صفحه`             | ⭐⭐⭐⭐⭐  |
| ![](https://s32.picofile.com/file/8478581634/design_your_life.jpg)                                                  | زندگی خود را طراحی کنید               | `260 صفحه`             | ⭐⭐⭐⭐   |
| ![](https://s32.picofile.com/file/8478581676/masir_shoghli.jpg)                                                     | مسیر شغلی                             | `92 صفحه`              | ⭐      |
| ![](https://s32.picofile.com/file/8478581692/shoghle_morede_alagheh.jpg)                                            | شغل مورد علاقه                        | `170 صفحه`             | ⭐⭐⭐    |
| ![](https://s32.picofile.com/file/8478581684/shib.jpg)                                                              | شیب                                   | `65 صفحه`              | ⭐⭐⭐    |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1459158688i/29635204.jpg) | در ستایش بطالت                        | `36 صفحه`              | ⭐⭐     |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1596902578i/54579528.jpg) | در ستایش اتلاف وقت                    | `102 صفحه`             | ⭐⭐⭐    |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1709043680i/171942.jpg)   | بوف کور                               | `95 صفحه`              | ⭐⭐     |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1525192368i/13646602.jpg) | میم و آن دیگران                       | `166 صفحه`             | ⭐⭐     |
<!-- SerializedQuery END -->

**از کتاب** بهترین کتابی بود که امسال خوندم. ای کاش میشد همه محتواهای متمم رو مثل کتاب عرضه کرد. اصلا یه حس و حال دیگه ای داره.

طراحی و صفحه آرایی کتاب هم خیلی خوب بود. طرح جلد با هوشمندی از کنار هم قرار گرفتن کتابها طراحی شده. یک کتاب هم اخیرا از انتشارات پنگوئن دیدم که طرح جلدش مشابه همین دیزاین رو داشت. ([+](https://www.penguinrandomhouse.com/books/292766/the-shadow-of-the-wind-by-carlos-ruiz-zafon/9780143126393/readers-guide/)) تصویرسازی‌های داخل کتاب هم در عین مینیمال و ساده بودن مفاهیم انتزاعی جالبی داشتند.

چند کتاب هم در مورد مسیر شغلی خوندم. از بین اون‌ها **کتاب زندگی خود را طراحی کنید** قابل استفاده‌تر بود.

کتاب **The Sketchnote Handbook** هم ایده‌های خوبی داشت. اکثر تمریناتش رو انجام دادم. کتاب در مورد یک شیوه یادداشت برداری به اسم اسکچ نوته. اینطوری که شما مفاهیم رو به المان‌های بصری تبدیل می‌کنید تا بهتر توی ذهنتون ماندگار بشه. نویسنده کتاب آقای Mike Rohde فعالیت‌های زیادی توی این زمینه کرده. هم دوره داره هم پادکست. با افراد مختلفی که توی این زمینه فعالیت می‌کنند گفتگو می‌کنه. [از اینجا](https://sketchnotearmy.com/podcast) می‌تونید پادکست هاشو ببینید.

کتاب **ابن مشغله** رو هم خوندم. خوب بود ولی من کتاب **ابوالمشاغل** رو بیشتر دوست داشتم.

<br><br>

### 🎓 دوره‌های آموزشی

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours,1) + " ساعت`", rating FROM #Course WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours,1) + " ساعت`", rating FROM #Course WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                         | file.name                             | "`" + round(length.hours,1) + " ساعت`" | rating |
| -------------------------------------------------------------- | ------------------------------------- | -------------------------------------- | ------ |
| ![](https://s32.picofile.com/file/8478837334/css.jpg)          | دوره آموزش css                        | `11.5 ساعت`                            | ⭐⭐⭐⭐   |
| ![](https://s32.picofile.com/file/8478596484/ensan4.jpg)       | روایت انسان (فصل 4)                   | `15 ساعت`                              | ⭐⭐⭐    |
| ![](https://s32.picofile.com/file/8478596626/karnakon_job.jpg) | دوره جامع طراحی مسیر شغلی             | `11 ساعت`                              | ⭐⭐⭐    |
| ![](https://s32.picofile.com/file/8478596826/vic.jpg)          | فایل صوتی درباره موفقیت و برنامه ریزی | `1.8 ساعت`                             | ⭐⭐⭐⭐   |
| ![](https://s32.picofile.com/file/8478596792/stable.jpg)       | دوره جامع استیبل دیفیوژن              | `20 ساعت`                              | ⭐⭐⭐⭐   |
| ![](https://s32.picofile.com/file/8478598318/goal_setting.jpg) | دوره صوتی آموزش هدف گذاری             | `7.8 ساعت`                             | ⭐⭐⭐⭐⭐  |
| ![](https://s32.picofile.com/file/8478596800/tanz_bank.jpg)    | طنز بانک                              | `8.2 ساعت`                             | ⭐⭐⭐    |
<!-- SerializedQuery END -->

**دوره CSS** واقعا نجاتم داد! قبلاً برای وب‌سایتم کلی زحمت می‌کشیدم و دست و پا می‌زدم تا یه چیزی رو اصلاح کنم. ولی حالا که از پایه یاد گرفتم کارم آسون‌تر شده. با هوش مصنوعی هم بهتر می‌تونم تعامل کنم و می‌دونم که چه طوری باید ازش درخواست کنم تا خروجی بهتری بهم بده.

از متمم دوره **هدف‌گذاری** و **موفقیت‌و برنامه ریزی** رو گوش کردم. دوره هدف‌گذاری رو باید یه مرتبه دیگه گوش بدم و یادداشت برداری کنم. هنوز نتونستم کامل به کار بگیرمش.

دوره **استیبل دیفیوژن** هم خیلی خوب بود. تا حالا هر دوره ای از جواد نبوی گرفتم راضی بودم. واقعا آموزش‌های باکیفیتی داره. همین استیبل رو بقیه آموزش میدن یه سری ورک‌فلوی آماده تحویلت میدن اما جواد نبوی همه چیز رو از پایه بهت میگه. اینطوری فرایندش رو درک می‌کنی و دیگه محتاج فایل آماده نیستی.

<br><br>


### 🎙 پادکست

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Podcast WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Podcast WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                                     | file.name                                               | "`" + length.minute + " دقیقه`" | rating |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------- | ------ |
| ![](https://s3.castbox.fm/f2/15/32/ffaa96b5ad27d80948bcb03b7d5cefca97_scaled_v1_400.jpg)                                                                   | سریال اشو                                               | `2327 دقیقه`                    | ⭐⭐⭐⭐⭐  |
| ![](https://s3.castbox.fm/d3/9b/5e/2b6ce5956ee701fe89aac81e25ffaf1aea_scaled_v1_400.jpg)                                                                   | جافکری فصل 23 - مفاهیم اقتصادی - سیامک قاسمی            | `309 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/e8/f1/ab/6517d099c8d90dc2009680c4fbedd4a2c8_scaled_v1_400.jpg)                                                                   | سریال واترگیت                                           | `284 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/c0/fc/94/79f1a4dc63e91ae50957acfba1a34fb225_scaled_v1_400.jpg)                                                                   | مَسترمایند                                              | `386 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://assets.pippa.io/shows/651e9d60130f3400115df9a0/651e9d670934650010d2cb55.jpg)                                                                   | پادکست سریالی سیلک رود                                  | `261 دقیقه`                     | ⭐⭐⭐⭐⭐  |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/mohammadenayati_dcvy5e.jpg)                                                                  | گفتگو با محمد عنایتی  بنیان‌گذار تعمیراکی               | `106 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://s3.castbox.fm/57/e1/ee/2929939ba8a5714324d15d193ebdca46e1_scaled_v1_400.jpg)                                                                   | گفتگو با اهورا نیازی                                    | `113 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/b2/31/a4/04501b34491747900ee60a1a4de9dc67c9_scaled_v1_400.jpg)                                                                   | گفتگو با سعید انصاریان ‌ بنیاد الگن                     | `152 دقیقه`                     | ⭐⭐⭐    |
| ![](https://assets.pippa.io/shows/623ee6e745754c001233a890/1729809144778-a4754000-0f88-496c-98b5-46adf7f8e11f.jpeg)                                        | تورج صابری وند - برند دیزاینر                           | `145 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://s3.castbox.fm/38/0d/dc/a42fddd1aa45401a0299d332bcb573ba16_scaled_v1_400.jpg)                                                                   | گفتگو با مهدی احمدی - راه‌اندازی رسانه آزاد             | `95 دقیقه`                      | ⭐⭐⭐    |
| ![](https://assets.pippa.io/shows/623ee6e745754c001233a890/1731732178331-f1680530-55c7-45f7-a7e8-06d05f4997f9.jpeg)                                        | محسن حسام مظاهری - جامعه‌شناس                           | `144 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/5f/61/20/5cfbde933d42c54e280f04a425d4222c5f_scaled_v1_400.jpg)                                                                   | گفتگو با مرتضی شجاعی درآمد دلاری                        | `142 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/59/d0/84/a06aab444391f04df7eeb4ad0c.jpg)                                                                                         | تفاوت‌های هوش مصنوعی در صنعت و دانشگاه                  | `43 دقیقه`                      | ⭐⭐⭐    |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/photo_2020-11-23_17-48-58-Copy.jpg)                                                          | گفتگو با علی آردم  (2 اپیزود)                           | `170 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/aa/75/50/fc389bc28df41efe7fffefa5e9a16c5bed_scaled_v1_400.jpg)                                                                   | گفتگو با پیمان کرمی                                     | `121 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://s3.castbox.fm/ce/42/97/f5dd903f2d5ca3e35c00ad4311384765fe_scaled_v1_400.jpg)                                                                   | گفتگو با امیرحسین ناطقی بنیان‌گذار کوییز آف کینگز       | `110 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/8f/16/c6/cc4f96cdcb32a1cd888064e1d75d31c9f3_scaled_v1_400.jpg)                                                                   | گفتگو با زوجِ تولیدکنندۀ عسل                            | `84 دقیقه`                      | ⭐⭐⭐⭐   |
| ![](https://assets.pippa.io/shows/623ee6e745754c001233a890/1728667107207-3c654a02-2ad0-4ba5-b5a7-feafab3413e5.jpeg)                                        | امیرعباس عبدالعلی یوتیوبر                               | `110 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/f2/5d/97/5e302f4e6c8b1e446151cd6f90.jpg)                                                                                         | پرسش و پاسخ با دکتر علی خزایی (7 اپیزود)                | `496 دقیقه`                     | ⭐⭐⭐    |
| ![](https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/ac/e3/21/ace321b3-193c-1423-4c4c-ca46a52951a9/mza_5386946835372024842.png/400x400bb.jpg)       | رادیوگیک – شماره ۱۴۷ – چت جی پی تی                      | `53 دقیقه`                      | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/5f/2d/17/f23361428f86095c0ad82f589e.jpg)                                                                                         | گفتگو با مهدی آخی درباره مدل‌های زبانی بزرگ             | `144 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://s3.castbox.fm/e6/54/47/822e084ab0a3d37dedb48f2ce9.jpg)                                                                                         | گفتگو با محمدعلی صدرایی - کارشناس پردازش زبان‌های طبیعی | `107 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://s3.castbox.fm/1d/46/aa/191a374baca33d7b14174bf676.jpg)                                                                                         | ایستگاه هوش مصنوعی اپیزود 1-10                          | `180 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s3.castbox.fm/5e/2b/02/3139eb8577f21408a5e1b281e6067080ed_scaled_v1_400.jpg)                                                                   | گفتگو با سیاوش صفاریان‌پور  ژورنالیست و پادکستر         | `70 دقیقه`                      | ⭐⭐⭐    |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/amirmousavi_yprnuq.jpg)                                                                      | گفتگو با امیر موسوی تور لیدر                            | `128 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://assets.pippa.io/shows/623ee6e745754c001233a890/1714562705175-493bcfd80fd419fd3ac250ec8eb4aeee.jpeg)                                            | حسین کلهر                                               | `70 دقیقه`                      | ⭐⭐⭐⭐   |
| ![](https://assets.pippa.io/shows/623ee6e745754c001233a890/1723832715268-786aa403-420d-4f81-a6e5-ea92f8349905.jpeg)                                        | درباره‌ی جادی                                           | `115 دقیقه`                     | ⭐⭐⭐⭐⭐  |
| ![](https://s32.picofile.com/file/8478577776/%D8%AC%D8%A7%D9%81%DA%A9%D8%B1%DB%8C_%D9%81%D8%B5%D9%84_20.jpg)                                               | جافکری فصل 20                                           | `143 دقیقه`                     | ⭐⭐⭐    |
| ![](https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/d4/83/59/d4835940-003d-502a-cf95-b1fe1c5c0e24/mza_4199942390305222365.jpg/500x500bb.webp)      | Maggie Appleton's journey to design                     | `64 دقیقه`                      | ⭐⭐⭐    |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/WhatsApp_Image_2022-09-03_at_19_38_29_ckb8ze.jpeg)                                           | گفتگو با امیرحسین قیاسی                                 | `137 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/photo_2023-04-20_10-19-47_nrcnm3.jpg)                                                        | گفتگو با ابوطالب حسینی                                  | `83 دقیقه`                      | ⭐⭐⭐⭐   |
| ![](https://s32.picofile.com/file/8478577800/%D8%B5%D8%A7%D9%84%D8%AD_%D8%B3%D8%AE%D9%86%D8%AF%D8%A7%D9%86.jpg)                                            | گفتگو با صالح سخندان                                    | `75 دقیقه`                      | ⭐⭐⭐    |
| ![](https://s32.picofile.com/file/8478577768/%D8%AC%D8%A7%D9%81%DA%A9%D8%B1%DB%8C_%D9%81%D8%B5%D9%84_19.jpg)                                               | جافکری فصل 19                                           | `246 دقیقه`                     | ⭐⭐⭐    |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/41966155_544476649314360_7141092516463378432_n_2_rmuyxu.jpg)                                 | گفت و گو با میلاد نوری                                  | `162 دقیقه`                     | ⭐⭐⭐⭐⭐  |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/Fco0d82XwAUVarm_ra2iuz.jpg)                                                                  | گفت و گو با سعید حسین زاده                              | `111 دقیقه`                     | ⭐⭐     |
| ![](https://s32.picofile.com/file/8478577818/%D8%B9%D8%A7%D8%AF%D9%84_%D8%B7%D8%A7%D9%84%D8%A8%DB%8C_%D8%B4%D8%B9%D8%A8%D8%A7%D9%86%D8%B9%D9%84%DB%8C.jpg) | گپ و گفت محمدرضا شعبانعلی و عادل طالبی                  | `77 دقیقه`                      | ⭐⭐⭐    |
<!-- SerializedQuery END -->

امسال خیلی اتفاقی پادکست های [چنل بی](https://channelbpodcast.com/) رو گوش دادم. **راس اولبریکت** 21 ژانویه توسط ترامپ آزاد شد منم تا حالا چیزی درموردش نشینده بودم. شروع کردم به سرچ کردن و رسیدم به پادکست سریالی چنل بی. معرکه بود. با وجود اینکه صوتی بود و هیچ تصویر و فیلمی نداشت اما روایتش پرهیجان و جذاب بود. اینقدر برام جذاب بودم مستند **Deep Web** و فیلم **Silk Road** رو هم دیدم. فیلمش افتضاح بود ولی مستندش خوب بود.

چند قسمت دیگه هم از چنل بی گوش کردم. **مستر مایند**، **واترگیت** و **اشو**. اینا هم خوب بودند. با اینکه قبلا پادکست [بی پلاس](https://bpluspodcast.com/) رو گوش داده بودم اما نمیدونم چرا سراغ چنل بی نرفتم. 

پادکست **کارگاه** هم برای اولین بار گوش کردم. بد نبود اما خیلی هم تعریفی نداشت.

پادکست **کارنکن** هم که خیلی وقته دنبال میکنم. البته اپیزود های قدیمی شون رو بیشتر دوست داشتم. داستان زندگی اون قبلی ها قابل استفاده تر بود.


<br><br>

### ✨ محتوای مفید


<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Media WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Media WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                                                          | file.name                                                                 | "`" + length.minute + " دقیقه`" | rating |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------- | ------ |
| ![](https://i.ytimg.com/vi/qo5m92-9_QI/maxresdefault.jpg)                                                                                                                       | Home-cooked Software and Barefoot Programmers                             | `27 دقیقه`                      | ⭐⭐⭐⭐⭐  |
| ![](https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/9e003b0a822daba702608136e73f7be001b6b2f2_2880x1620.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82w=640) | تاریخ بصری دانش بشر                                                       | `13 دقیقه`                      | ⭐⭐⭐⭐   |
| ![](https://s32.picofile.com/file/8478604018/entekhabat.jpg)                                                                                                                    | آدمیزاد و انتخاب                                                          | `240 دقیقه`                     | ⭐⭐     |
| ![](https://s32.picofile.com/file/8478603950/amirkhani.jpg)                                                                                                                     | گفت و گوی میلاد دخانچی و رضا امیرخانی - آینده سیاسی ایران و مسئله جانشینی | `93 دقیقه`                      | ⭐⭐⭐⭐⭐  |
| ![](https://static.cdn.asset.aparat.cloud/avt/58975576-9466-l__8149.jpg?width=900&quality=90&secret=pzo294U3PY-dnGDjwvRVHA)                                                     | وبینار نویسنده کارآفرین                                                   | `65 دقیقه`                      | ⭐⭐⭐    |
<!-- SerializedQuery END -->

ویدئوی [Home-cooked Software and Barefoot Programmers](https://maggieappleton.com/home-cooked-software/) خیلی برام الهام بخش بود. کلا مطالبی که **مگی اپلتون** مینویسه خیلی برام تازگی داره. پارسال بحث [[digital garden|دیجیتال گاردن]] رو ازش خوندم. امسال هم این مطلبی که در مورد برنامه نویسی و هوش مصنوعی گفته. تو [این توئیت](https://x.com/ifard_ir/status/1879191913750041051) اجمالا درموردش توضیح دادم.


<br><br>

### 🍿 فیلم و سریال


<div class="overview-4">
<!-- QueryToSerialize: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "movie" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "movie" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count   | sum       |
| ---- | ------- | --------- |
| 🎬   | 37 فیلم | `77 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count   | sum          |
| ---- | ------- | ------------ |
| 📺   | 5 سریال | `112.5 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎈" as icon, length(rows) + " انیمیشن" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "animation" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎈" as icon, length(rows) + " انیمیشن" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "animation" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count     | sum        |
| ---- | --------- | ---------- |
| 🎈   | 4 انیمیشن | `6.6 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count         | sum        |
| ---- | ------------- | ---------- |
| ⌛    | 23 فیلم کوتاه | `3.8 ساعت` |
<!-- SerializedQuery END -->

</div>

#### فیلم
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "movie" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "movie" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                  | file.name                      | "`" + length.minute + " دقیقه`" | rating |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------- | ------ |
| ![](https://m.media-amazon.com/images/M/MV5BMjQyMjEwOTIwNV5BMl5BanBnXkFtZTgwOTkzNTMxNDM@._V1_SX300.jpg)                                 | The Post                       | `116 دقیقه`                     | ⭐      |
| ![](https://m.media-amazon.com/images/M/MV5BMDFhMDg2NTEtMTgxMi00YmRjLWEyNGEtYmVmYjQ0ZmQxOGNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg)         | Where Is the Friend's House    | `83 دقیقه`                      | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BMTI1NTYyYmUtN2JmYS00YjkyLWFiZmEtNDg4ZWFkMmU4NzQxXkEyXkFqcGc@._V1_SX300.jpg)                 | Silk Road                      | `112 دقیقه`                     | ⭐      |
| ![](https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_SX300.jpg)                 | Goodfellas                     | `145 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg)                                 | Boyhood                        | `165 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg)                                 | Her                            | `126 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BYzU2NDY0YzItOTVhNS00Yzk4LTg0ZTktNjFiZDJmZTgwMDYyXkEyXkFqcGc@._V1_SX300.jpg)                 | My Left Foot                   | `103 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BZDZkNDQ3YjktYjBlZC00YTY1LTgxOGYtY2RhMWFhZmNkZGY3XkEyXkFqcGc@._V1_SX300.jpg)                 | The Big Short                  | `130 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg)                                 | Spotlight                      | `129 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_SX300.jpg)                 | Good Will Hunting              | `126 دقیقه`                     | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BNzljZTk5ZDgtZTQ1Zi00NTM4LThlOGUtZDk2MGM4NDQ4NWQyXkEyXkFqcGc@._V1_SX300.jpg)                 | A Beautiful Mind               | `135 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg)                                 | V for Vendetta                 | `132 دقیقه`                     | ⭐⭐     |
| ![](https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg)                                 | There Will Be Blood            | `158 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_SX300.jpg)                 | Gladiator                      | `155 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_SX300.jpg)                 | One Flew Over the Cuckoos Nest | `133 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg)                                 | Oldboy                         | `120 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BOTE5MDUxZDUtZWZmZC00NDVmLWFhOGQtNWI2YTc4NzY3MGQ0XkEyXkFqcGc@._V1_SX300.jpg)                 | The Usual Suspects             | `106 دقیقه`                     | ⭐⭐     |
| ![](https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_SX300.jpg)                 | Saving Private Ryan            | `169 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_SX300.jpg)                                 | The Imitation Game             | `114 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BZWExZjliYTgtM2U2Yi00MTU5LWFmOTAtNThkZDE1MzMxYWU2XkEyXkFqcGc@._V1_SX300.jpg)                 | Taste of Cherry                | `95 دقیقه`                      | ⭐⭐     |
| ![](https://m.media-amazon.com/images/M/MV5BNGRkYTNhOWQtYmI0Ni00MjZhLWJmMzAtMTA2Mjg4NGNiNDU0XkEyXkFqcGc@._V1_SX300.jpg)                 | Léon The Professional          | `110 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg)                 | The Batman                     | `176 دقیقه`                     | ⭐      |
| ![](https://m.media-amazon.com/images/M/MV5BODExZmE2ZWItYTIzOC00MzI1LTgyNTktMDBhNmFhY2Y4OTQ3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg) | Dog Day Afternoon              | `125 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BODE0NTcxNTQzNF5BMl5BanBnXkFtZTcwMzczOTIzMw@@._V1_SX300.jpg)                                 | 310 to Yuma                    | `122 دقیقه`                     | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BMjAyNTU5OTcxOV5BMl5BanBnXkFtZTcwMDEyNjM2MQ@@._V1_SX300.jpg)                                 | 21                             | `123 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg) | Taxi Driver                    | `114 دقیقه`                     | ⭐⭐     |
| ![](https://m.media-amazon.com/images/M/MV5BMzliZDk0NjctNjhlOC00MWEyLWI3OWYtNjA5ZDYxMTMzNTc5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg) | The Big Lebowski               | `117 دقیقه`                     | ⭐      |
| ![](https://m.media-amazon.com/images/M/MV5BZGM5ZTY1ZTEtYjVlZi00M2RiLTllODgtMDYzMzk3YjY1MjNmXkEyXkFqcGdeQXVyMTAyNTQ0MTk@._V1_SX300.jpg) | The Glass Agency               | `114 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BMzRkZDVkMDItYjk3Mi00NDkyLThmODUtYzhkN2EwZmE2ZTljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg) | Wag the Dog                    | `97 دقیقه`                      | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BOTNlNWFiNTAtZTMxYS00NzgxLTlmOGYtZjY4NWVlNDlmZDJlXkEyXkFqcGc@._V1_SX300.jpg)                 | Close-Up                       | `98 دقیقه`                      | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg) | Reservoir Dogs                 | `99 دقیقه`                      | ⭐⭐     |
| ![](https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg)                                     | The Departed                   | `151 دقیقه`                     | ⭐⭐     |
| ![](https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg) | The Silence of the Lambs       | `118 دقیقه`                     | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg) | Amélie                         | `122 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BMTNmZGY4OTctYjUwNi00ZjNmLTlmODItMDVhOGJmYThmMTU5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg) | Che Part Two                   | `135 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BM2JiNjE4YjItNTFhNS00ZmYyLWEwNzctNzJmYzNiYWYzOGM3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg) | Che Part One                   | `134 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BY2M4OWU0MmMtYTQxYS00MDE3LWFkYzAtMzRlYzM1NDcxOWExXkEyXkFqcGc@._V1_SX300.jpg)                 | Maslahat                       | `110 دقیقه`                     | ⭐⭐⭐    |
<!-- SerializedQuery END -->

بهترین فیلم هایی که امسال دیدم اینا بودند:
- Good Will Hunting
- 310 to Yuma
- The Silence of the Lambs

 **رابین ویلیامز** و **راسل کرو** رو تازه کشف کردم😊 فیلم هایی که تا حالا ازشون دیدم خیلی خوب بوده.

<br><br>


#### سریال
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.hours + " ساعت`", rating FROM #Movie WHERE type = "series" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.hours + " ساعت`", rating FROM #Movie WHERE type = "series" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                  | file.name     | "`" + length.hours + " ساعت`" | rating |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------- | ------ |
| ![](https://m.media-amazon.com/images/M/MV5BMmQ0Y2JiM2EtOWIwMy00MWVjLTgxZDctZTQzOWU3ODkzMWY4XkEyXkFqcGc@._V1_SX300.jpg)                 | Chernobyl     | `5.5 ساعت`                    | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BYTk4NDA4MGMtNjliOC00MjExLWI1YzctOTc4NWIxM2I1YjM5XkEyXkFqcGc@._V1_SX300.jpg)                 | Mindhunter    | `17 ساعت`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BYmU3MzYzOWEtOTdkZi00YzA1LTliMzQtNDdiZDBjY2FiNmFlXkEyXkFqcGc@._V1_SX300.jpg)                 | The Penguin   | `8 ساعت`                      | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BZTZkMWVkNTEtYzMxMC00MzQzLTg5NjUtNTNmN2M2NzEwNzI0XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_SX300.jpg) | The Sopranos  | `78 ساعت`                     | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BZmQ0NDE5NjYtMGU4OS00NGMwLWJmOGYtZjVmYTFhMzA3ZGQ2XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg) | Baby Reindeer | `4 ساعت`                      | ⭐⭐⭐    |
<!-- SerializedQuery END -->

طولانی ترین سریالی که دیدم **سوپرانوز** بود. با اینکه تعلیق و هیجان زیادی نداشت اما دنبال کردن داستانش رو دوست داشتم. الان که همه مغزمون به ریل های کوتاه اینستاگرام عادت کرده دیدن امثال این سریال ها خیلی سخت شده. خود من یه روزایی حوصله دیدنش رو نداشتم. اما بعد چند روز دلم برای داستان و اتفاقاتش تنگ میشد. 

به یک روال منطقی هم در دیدن سریال رسیدم. اینکه مثل آدم بیشنم و روزی یک قسمت ببینم نه بیشتر. قبلا میشستم یک فصل رو توی یک روز تموم میکردم. سریال هایی که هیجان و تعلیق زیادی دارند مثل **مانی هیست** و **برکینگ بد** رو اینطوری دیدم. اصلا عادت خوبی نبود.

سریال **چرنوبیل** هم فوق العاده بود. حتما پیشنهاد میکنم ببینید.

<br><br>

#### انیمیشن

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "animation" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "animation" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                  | file.name      | "`" + length.minute + " دقیقه`" | rating |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------- | ------ |
| ![](https://m.media-amazon.com/images/M/MV5BZjM2M2E3YzAtZDJjYy00MDhkLThiYmItOGZhNzQ3NTgyZmI0XkEyXkFqcGc@._V1_SX300.jpg)                 | The Wild Robot | `102 دقیقه`                     | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWUtNjQ0OWJkMzI3MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg) | Inside Out 2   | `96 دقیقه`                      | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_SX300.jpg)                                 | Coraline       | `100 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BMGRkZThmYzEtYjQxZC00OWEzLThjYjAtYzFkMjY0NGZkZWI4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg) | Persepolis     | `96 دقیقه`                      | ⭐⭐⭐    |
<!-- SerializedQuery END -->

انیمیشن **Inside Out 2** مثل قبلی اش عالی بود. چه قدر سازندگانش ذهن خلاقی دارند.

انیمیشن **The Wild Robot** هم امسال اومد. اصل داستانش یه کم تکراری بود اما روایت و پردازشش خوب بود.

<br><br>

#### فیلم کوتاه
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "short" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "short" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                                  | file.name                              | "`" + length.minute + " دقیقه`" | rating |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------- | ------ |
| ![](https://m.media-amazon.com/images/M/MV5BMDhhMGE1N2YtNGFkMy00NmMzLWEwNjUtYWE3MWZhNmZlYWNjXkEyXkFqcGdeQXVyMTE0NDA0ODYw._V1_SX300.jpg)                 | Napo                                   | `16 دقیقه`                      | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BMGQ3ZWYwMGEtYzg4Yy00ZGNiLWI4ZWUtYjJlMmJkMmM1NmExXkEyXkFqcGc@._V1_SX300.jpg)                                 | Inner Workings                         | `6 دقیقه`                       | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BMjJhOTU2ODMtOGE4MC00NjYyLWIzNGUtOTcyMDg0N2JkZjBiXkEyXkFqcGdeQXVyNDYwMjg1MTc@._V1_SX300.jpg)                 | Tomorrow                               | `16 دقیقه`                      | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BYTBiNWM0NzYtNWNjYi00NmUxLWI5ZjgtODQ0ZmNkNDY0OTM1XkEyXkFqcGc@._V1_SX300.jpg)                                 | Our Uniform                            | `7 دقیقه`                       | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BM2JiY2Y5ZWUtN2MzMC00ZmFkLWIxYmUtYzc1MDc0YTQ2MjQzXkEyXkFqcGdeQXVyMTcwNTUzODk0._V1_SX300.jpg)                 | In the Shadow of the Cypress           | `20 دقیقه`                      | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BMTg0MDY2NzUwNF5BMl5BanBnXkFtZTgwNzQ0NDc2OTE@._V1_SX300.jpg)                                                 | Dinner for Few                         | `10 دقیقه`                      | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BZTI5YTNhYjAtNTRhYi00ZTg1LTllNGYtODQ5ZTUxZjNjOTMwXkEyXkFqcGdeQXVyMjYwMTc1NDQ@._V1_SX300.jpg)                 | The Box                                | `12 دقیقه`                      | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BZDg4MjI3NGMtOTcwMC00ZWQ0LWI0YjMtNDA0YmZjN2FlYzg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg)                         | The Boy the Mole the Fox and the Horse | `32 دقیقه`                      | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BNTFhNTU0OGQtZTJjYy00Yzg0LThkMmQtZDYxNjU5NzNiYzkyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjQ2MjA3NDQ@._V1_SX300.jpg) | Destiny                                | `5 دقیقه`                       | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BNjJlYTcxNmItYzgwOS00MWE3LTg3ZjUtODRhN2M4ODVkZDU5XkEyXkFqcGdeQXVyMzc0Njg0NzM@._V1_SX300.jpg)                 | Best Friend                            | `6 دقیقه`                       | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BYzE1OWRlNjItN2M1MC00MzAwLTllOWQtZjdkNjY0OTU2YTA2XkEyXkFqcGdeQXVyMjMzMTI2NzU@._V1_SX300.jpg)                 | Hair Love                              | `7 دقیقه`                       | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BMTQ2ODUzODM1OF5BMl5BanBnXkFtZTgwNTA0Njg5MTE@._V1_SX300.jpg)                                                 | Strings                                | `10 دقیقه`                      | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BYTkzNTA1MDItNTVhYi00ZGJhLWE1M2MtOGE0ZjEzZDU5YmEyXkEyXkFqcGdeQXVyNTkxMTQxMzc@._V1_SX300.jpg)                 | Afternoon Class                        | `3 دقیقه`                       | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BM2UzNjVlY2EtMzA2MS00MmE1LWEzOWUtOTJlOWEyZmVjMjliXkEyXkFqcGdeQXVyNzk4OTM3Nzk@._V1_SX300.jpg)                 | (OO)                                   | `6 دقیقه`                       | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BNWMzN2I5NTEtMTY5My00N2I4LTkxOTktNjRkNWUzZjBhZTE5XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg)                 | Partly Cloudy                          | `6 دقیقه`                       | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BMTYyMTk1MjE3NF5BMl5BanBnXkFtZTgwMjkxMDgwMjE@._V1_SX300.jpg)                                                 | Day  Night                             | `6 دقیقه`                       | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BNTk5YTcwYzktZWU0Yy00YmZiLWJlZGQtZDQ1ZjIwOTFkMDQzXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg)                 | 22 vs. Earth                           | `6 دقیقه`                       | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BMTg2ZTA3NTYtNzg0NS00Mjk0LWE1MjgtNDk1YTRhY2JkMGYxXkEyXkFqcGdeQXVyNzM4OTIxNzM@._V1_SX300.jpg)                 | Less Than Human                        | `6 دقیقه`                       | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BYzBhMDc4YzItZDk1ZC00N2U2LWE2YWUtYTU5YjFmMzJkMDZmXkEyXkFqcGdeQXVyNTg2ODU2Mw@@._V1_SX300.jpg)                 | Alike                                  | `8 دقیقه`                       | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BYWYwMWZjNDItOTg2Mi00NGY3LTljODItODgxNDhjYzFiYzJhXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg)                 | The Blue Umbrella                      | `7 دقیقه`                       | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BNDY5MDgxMDY3Nl5BMl5BanBnXkFtZTgwMTYwMDI0NjE@._V1_SX300.jpg)                                                 | Borrowed Time                          | `7 دقیقه`                       | ⭐⭐⭐⭐⭐  |
| ![](https://m.media-amazon.com/images/M/MV5BY2VhOWM2Y2EtZTVmMC00ZTMxLTgxNWItNmE0ZjQ3N2ViODI0XkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg)                 | Zero                                   | `13 دقیقه`                      | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BZmY5YmMwZWEtMDIyOC00NWMyLWE3NWQtYWMzNWRhMzQ2NWJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg)                 | Double King                            | `10 دقیقه`                      | ⭐⭐⭐    |
<!-- SerializedQuery END -->

بهترین فیلم کوتاه هایی که دیدم اینا بود:
- In the Shadow of the Cypress (در سایه سرو)
- Borrowed Time
- Alike


<br><br>

### 🎥 مستند

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Documentary WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Documentary WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                  | file.name                  | "`" + length.minute + " دقیقه`" | rating |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------- | ------ |
| ![](https://m.media-amazon.com/images/M/MV5BODY5ZWY0YzctOGNjMi00MzM0LWFjNDUtNDUxMzI0Mjc1N2Y1XkEyXkFqcGc@._V1_SX300.jpg)                 | Wild Wild Country          | `403 دقیقه`                     | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BNDJhNzNjMTQtZTk1Ny00NzJjLTlmOTEtMjMxYTI4MTM2NThiXkEyXkFqcGdeQXVyNzkxMDQ3ODg@._V1_SX300.jpg) | President; Actor of Cinema | `75 دقیقه`                      | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BNjliZGIxZDEtN2U5My00MGE1LWFjNTctZmM4MDI1MmUwM2FkXkEyXkFqcGdeQXVyMTU3MDQ1NjE@._V1_SX300.jpg) | Kabeh abrisham             | `43 دقیقه`                      | ⭐⭐⭐    |
| ![](https://m.media-amazon.com/images/M/MV5BMjQwMTI0NzcyOF5BMl5BanBnXkFtZTgwNzkzMTg0NDE@._V1_SX300.jpg)                                 | Deep Web                   | `90 دقیقه`                      | ⭐⭐⭐⭐   |
| ![](https://m.media-amazon.com/images/M/MV5BNWFkMDY1MjItZmNkOS00MDg2LWFlMjMtZWU3YmM0MmY3MWM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg) | American Factory           | `110 دقیقه`                     | ⭐⭐⭐    |
| ![](https://s32.picofile.com/file/8478552926/%D8%B1%D8%B6%D8%A7_%D8%B9%D8%A7%D8%A8%D8%AF%DB%8C%D9%86%DB%8C.jpg)                         | رضا عابدینی گرافیک ایرانی  | `25 دقیقه`                      | ⭐⭐⭐    |
<!-- SerializedQuery END -->

بعد از دیدن سریال چرنوبیل علاقه من شدم در مورد شوروی بیشتر بدونم. فعلا مستند **پرزیدنت آکتور سینما** رو دیدم که بد نبود. اما دنبال منابع بهتر و موثق تری هستم که سوگیری کمتری داشته باشه.

 بعد از شنیدن پادکست اشو هم ترغیب شدم مستند **Wild Wild Country** رو ببینم. یه کم طولانی بود اما جالب بود.

<br><br>

### 🎵 موسیقی
موسیقی‌های بینظری که امسال شنیدم:

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4HbQMB4aMPTATNBC1qweUN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5t4fzoVaTLNLsT0ug819zz?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3LT9Vu5I2dgwEdOKn4Tnmr?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5zvotQRVWAFpeb550Z3HgQ?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

[video](https://youtu.be/AzYIJdsSDms?si=GBq1H-mqY5D82M_1)

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4UAJf6d48Q6dBzgbC5pjya?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/55GUcDquFQJ1PnkhZWD7gX?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/535581300&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/daalband" title="DAAL دال" target="_blank" style="color: #cccccc; text-decoration: none;">DAAL دال</a> · <a href="https://soundcloud.com/daalband/05-last-days-of-esfand" title="Last Days Of Esfand روز های آخر اسفند" target="_blank" style="color: #cccccc; text-decoration: none;">Last Days Of Esfand روز های آخر اسفند</a></div>



کانال تلگرامی [شکیبا](https://t.me/shakiibaa) رو هم پیدا کردم. اغلب موزیک‌هایی که میذاره رو دوست دارم.

<br><br>


## بخش دوم: ردیابی عادت


### 🏋🏻 ورزش


<div class="full">
<!-- QueryToSerialize: TABLE "🏋️ " + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز ورزش کردم" as true, "🛌 " + length(filter(rows, (r) => r.🏋️exercise = false)) + " روز استراحت کردم" as false FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE "🏋️ " + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز ورزش کردم" as true, "🛌 " + length(filter(rows, (r) => r.🏋️exercise = false)) + " روز استراحت کردم" as false FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| "" | true                  | false                  |
| -- | --------------------- | ---------------------- |
|    | 🏋️ 273 روز ورزش کردم | 🛌 93 روز استراحت کردم |
<!-- SerializedQuery END -->

</div>

![[150925.webp]]

اگر [[report1402#🏋🏻 ورزش| گزارش پارسال]] رو خونده باشید اطلاع دارید که **13 کیلو** کم کردم. همش هم با هوازی و رژیم معمولی بود. امسال برای اینکه عضله از دست ندم رفتم باشگاه بدنسازی. هم برنامه تمرین گرفتم هم برنامه تغذیه. وعده های غذایی‌ام بیشتر شده، قبلا سه وعده میخوردم الان 5-4 وعده میخورم. ورزش‌های هوازی رو کمتر انجام دادم و بیشتر تمرکزم روی تمرین های قدرتی هست تا عضله بسازم. امسال تقریبا وزنم ثابت بود و فقط 2 سانت از دور شکمم کم شد.

پیش متخصص تغذیه رفتم و **تست بادی آنالیز** دادم. اکثر پارامتراش نرمال بود. کلا بدنم 13 کیلو چربی داره و 20 درصد از بدنم رو تشکیل میده. با اینکه نرماله اما توصیه شده بود که 4 کیلوش کم بشه. کات نشدن کامل عضلاتم هم به خاطر همین چربیه اضافه است. بخش عمده اش هم چربی میان تنه و دور شکمه.

عمکلرد راضی کننده ای داشتم اما هنوز جای کار داره. باید این چربی های اضافه رو بسوزونم. همزمان باید عضله بسازم که بدنم تحلیل نره. کار سختیه و خیلی هم زمان بره. 

توی یادداشت [[fitness and healthy eating|تجربه من از ورزش و تغذیه سالم]] بیشتر درمورد این قضیه توضیح دادم.

<br><br>

### 📖 مطالعه
مدت زمان مطالعه را با پومودورو اندازه گرفتم. هر پومودورو 25 تا 30 دقیقه.

<div class="full">
<!-- QueryToSerialize: table without id "🔘 جمع کل: " + round(sum(rows.📚reading)) + " پ" as Total, "🔺 بیشترین: " + round(max(rows.📚reading)) + " پ" as Maximum, "🔻 کمترین: " + round(min(rows.📚reading)) + " پ" as Minimum, "📈 میانگین: " + round(sum(rows.📚reading) / length(rows), 1) + " پ" as Average FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: table without id "🔘 جمع کل: " + round(sum(rows.📚reading)) + " پ" as Total, "🔺 بیشترین: " + round(max(rows.📚reading)) + " پ" as Maximum, "🔻 کمترین: " + round(min(rows.📚reading)) + " پ" as Minimum, "📈 میانگین: " + round(sum(rows.📚reading) / length(rows), 1) + " پ" as Average FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| Total            | Maximum         | Minimum        | Average           |
| ---------------- | --------------- | -------------- | ----------------- |
| 🔘 جمع کل: 304 پ | 🔺 بیشترین: 7 پ | 🔻 کمترین: 0 پ | 📈 میانگین: 0.8 پ |
<!-- SerializedQuery END -->
</div>

![[150817.webp]]

اوایل سال مطالعه خوبی داشتم اما این اواخر تنبلی کردم. یه بخشی اش هم به خاطر این بود که کتاب جذابی نداشتم بخونم. اردیبهشت از نمایشگاه این کتابا رو گرفتم:
![[20240517_102747.webp | 400]]

اونایی اش که برام جذاب بود رو همون اوایل خوندم. دیگه یه سری کتاب های عادی مونده بود که حوصله نداشتم بخونم. به خاطر همین این اواخر مطالعه‌ام کم شد.


<br><br>

### 📱 رسانه‌های اجتماعی
من مدت زمانی که وقتم رو در سوشال مدیا گذروندم ثبت کردم. به خاطر خاصیت گیمیفیکیشن هبیت ترکر این کار تاثیر خوبی در کاهش مدت زمان این کار داشت. ماه های اول که هنوز از هبیت ترکر استفاده نمی کردم معمولا 4 تا 5 ساعت وقتم رو اشغال میکرد. اما از زمانی که شروع کردم به ثبت کردن، مدتش کاهش پیدا کرد و به یکی دو ساعت در روز رسید. 

برای محاسبه مدت زمانش هم از اپلیکیشن [StayFree](https://stayfreeapps.com/) استفاده کردم. یک دسته جدید به اسم سوشال مدیا ساختم و اپلیکیشن های مختلف مثل اینستاگرام و تلگرام و توییتر را به آن اضافه کردم که مجموع مدت زمان استفاده از این اپلیکیشن ها رو به صورت مجزا محاسبه کنه.


<div class="full">
<!-- QueryToSerialize: table without id "🔘 جمع کل: " + round(sum(rows.📱social)) + " ساعت" as Total, "🔺 بیشترین: " + round(max(rows.📱social),1) + " ساعت" as Maximum, "🔻 کمترین: " + round(min(rows.📱social),1) + " ساعت" as Minimum, "📈 میانگین: " + round(sum(rows.📱social) / length(rows), 1) + " ساعت" as Average FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: table without id "🔘 جمع کل: " + round(sum(rows.📱social)) + " ساعت" as Total, "🔺 بیشترین: " + round(max(rows.📱social),1) + " ساعت" as Maximum, "🔻 کمترین: " + round(min(rows.📱social),1) + " ساعت" as Minimum, "📈 میانگین: " + round(sum(rows.📱social) / length(rows), 1) + " ساعت" as Average FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| Total               | Maximum            | Minimum             | Average              |
| ------------------- | ------------------ | ------------------- | -------------------- |
| 🔘 جمع کل: 557 ساعت | 🔺 بیشترین: 4 ساعت | 🔻 کمترین: 0.1 ساعت | 📈 میانگین: 1.5 ساعت |
<!-- SerializedQuery END -->
</div>

![[150700.webp]]

برای اینکه بهتر بفهمیم این عدد چه قدر است یک محاسبه جالب انجام دادم. اگر هر 5 ثانیه حدود 30 سانتی متر اسکرول کرده باشم 557 ساعت تقریبا می شود 120 کیلومتر. یعنی با انگشتم یک بار مسیر قم تهران را طی کردم.
<br><br>


## بخش سوم: خروجی ها
برای بلاگ برنامه های زیادی داشتم. قرار بود یادداشت‌های مفصلی بنویسم اما فرصت نشد.

برای ابسیدین تونستم دو تا کار انجام بدم:
1. [[habit tracker in obsidian|ساخت هبیت ترکر]]
2. [[add content obsidian#کتاب|اکستنشن Obsibook]]

اولیش از هبیت ترکری که خودم استفاده میکنم یک تمپلیت ساختم تا بقیه هم بتونن ازش استفاده کنن. دومیش هم یک افزونه هست برای گوگل کروم. کمک میکنه کتاب هایی که مطالعه کردیم رو از سایت های مختلف وارد ابسیدین کنیم. برای هردوی اینها یک ویدئو ضبط کردم و آموزش دادم که چه طور باید ازش استفاده کرد.

به غیر از اینها یک سایت دیگه ساختم به اسم [جعبه ابزار طراحی](https://toolbox.ifard.ir/). من سایت های مختلفی که برای طراحی و تولید محتوا استفاده می کردم رو روی مرورگر بوکمارک کرده بودم. به ذهنم رسید این ها رو به اشتراک بگذارم و یه کالکشن ازشون بسازم. نتیجه اش شد این سایت که توی دسته های مختلف میتونید سایت های مناسب رو پیدا کنید.

<br><br>

## ارزیابی
خب امسال نسبت سال قبل آمار و ارقام کامل تری رو تونستم ثبت کنم. از هبیت ترکر استفاده کردم و مدت زمان مطالعه و سوشال مدیا رو ثبت کردم. با عدد هایی که داشتم یه حساب کتاب کردم ببینم توی یکسال چند درصد رو به چه کاری اختصاص دادم:
![[F18701_3-24.webp]]


به نظرم وضعیت خوبی نیست. قبل از این نمودار وقتی عدد و رقم ها رو نگاه میکنم تصور میکنم که همه چیز خوبه و من خیلی تلاش کردم. اما وقتی حساب میکنم با این همه فرصتی که داشتم اون عددا واقعا بزرگ نیستن. اون مقداری که مطالعه کردم سهمش 1.5 درصد شده. سوشال مدیا باید کمتر بشه. اون بخش سه نقطه طبیعتا مربوط به کارهای روزمره است اما مشخصا یه بخش عمده اش داره تلف میشه. سال آینده باید جلوی این فرصت سوزی ها رو بگیرم.

طبیعیه هم هست چون من هیچ الزامی برای خودم تعریف نکرده بودم. خودم رو ملزم نکرده بودم که حتما باید فلان مقدار مطالعه کنم. یا نباید ساعت چرخیدن توی سوشال مدیا از فلان مقدار بیشتر بشه. هیچ عهد و پیمانی نبستم. نمی خواستم به خودم سخت بگیرم. حتی توی ورزش کردن هم تعهدی نداشتم. 

اینکه تونستم ورزش رو مستمر انجام بدم و نتیجه رضایت بخش بگیرم به خاطر این بود که تبدیل شده بود به عادت و دیسیپلین و اصلا اجباری در کار نبود. البته سال 1402 که تازه شروع کرده بودم به ورزش کردن یه مقدار سخت گیری و تعهد لازم بود. اون موقع تنبلی میکردم و دنبال فرصتی بودم که از زیرش در برم. به خاطر همین باید یه سری برنامه مشخص تعیین میکردم. اما بعدش دیگه تبدیل شد به عادت. بدون اینکه تعهدی بسته باشم خودم مثل بچه آدم میرفتم ورزش میکردم😊

فکر میکنم باید برای مطالعه هم همین روش رو درپیش بگیرم. شاید اوایل لازم به سخت گیری باشه. بعدش که تبدیل شد به عادت دیگه خودش درست میشه.

خلاصه اینکه نسبت به سال قبل پیشرفت داشتم اما چشمگیر نبوده. نتیجه رضایت بخش نیست اما قابل قبوله.

یه نکته دیگه رو هم تازه متوجه شدم. اینکه یادگیری بهانه ای شده برای فرار از عمل کردن. بخش عمده فعالیتم رو اختصاص دادم به یادگیری. یادگرفتن کار راحت و لذت بخشیه. مطالعه میکنی، دوره میبنی. اما عمل کردن و به‌کاربستن انرژی بیشتری میخواد. به خاطر همین مغز ازش فرار میکنه.

منم دچار همین مشکل شدم. الان [[#بخش اول مصرف محتوا|بخش مصرف محتوا]] خیلی پر رنگ‌تر و شلوغ‌تر از [[#بخش سوم خروجی ها|بخش خروجیه]]. باید سال دیگه تمرکزم رو بذارم روی عملگرایی. بیشتر بنویسم، بیشتر بسازم، بیشتر خلق کنم.


---

اگر علاقه دارید گزارشی شبیه به گزارش من بنویسید توی یادداشت [[create report|ساخت گزارش عملکرد شخصی با ابسیدین]] در موردش توضیح دادم.


