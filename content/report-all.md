---
title: گزارش کلی
aliases:
  - گزارش کلی
created: 2024-08-29
modified: 2026-01-03
publish: true
comments: true
wordcount: false
status: 🌱
cssclasses:
  - nowarp2
  - card-s
draft: false
image: "[[reports.webp]]"
---


## در یک نگاه

<br> 


<div class="overview-4">

<!-- QueryToSerialize: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE file.name !="New Book" GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE file.name !="New Book" GROUP BY "" -->

| icon | count        | sum          |
| ---- | ------------ | ------------ |
| 📚   | 103 جلد کتاب | `24540 صفحه` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE length !=null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE length !=null GROUP BY "" -->

| icon | count          | sum          |
| ---- | -------------- | ------------ |
| 🎓   | 39 دوره‌آموزشی | `483.8 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE length !=null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE length !=null GROUP BY "" -->

| icon | count     | sum          |
| ---- | --------- | ------------ |
| 🎙   | 93 پادکست | `237.5 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "film" AND length != null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "film" AND length != null GROUP BY "" -->

| icon | count    | sum          |
| ---- | -------- | ------------ |
| 🎬   | 179 فیلم | `387.8 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null GROUP BY "" -->

| icon | count    | sum          |
| ---- | -------- | ------------ |
| 📺   | 33 سریال | `759.2 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🎈" as icon, length(rows) + " انیمیشن" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "animation" AND length != null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎈" as icon, length(rows) + " انیمیشن" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "animation" AND length != null GROUP BY "" -->

| icon | count      | sum         |
| ---- | ---------- | ----------- |
| 🎈   | 25 انیمیشن | `40.8 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null GROUP BY "" -->

| icon | count         | sum         |
| ---- | ------------- | ----------- |
| ⌛    | 60 فیلم کوتاه | `10.1 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "documentaries" AND length !=null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "documentaries" AND length !=null GROUP BY "" -->

| icon | count    | sum         |
| ---- | -------- | ----------- |
| 🎥   | 34 مستند | `52.9 ساعت` |
<!-- SerializedQuery END -->


</div>

‌<br>‌<br>



## 📚 کتاب



<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Book WHERE pages !=null AND file.name !="New Book" AND status !="🟥 Cancelled" SORT rating desc -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Book WHERE pages !=null AND file.name !="New Book" AND status !="🟥 Cancelled" SORT rating desc -->

| ("![](" + cover_self + ")")                                                                            | file.name                                                        | badge                                          | rating |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/books/ky-bwd-ky-bwd.webp)                                           | کی بود کی بود؟                                                   | <ul><li>🦉آموزنده</li></ul>                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/ktabkhwan.webp)                                               | کتاب‌خوان                                                        | <ul><li>🪶خوش‌خوان</li><li>☕تلخ</li></ul>      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/hmh-chyz-bwdn.webp)                                           | همه چیز بودن                                                     | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/nym-dang-pywng-yang.webp)                                     | نیم دانگ پیونگ یانگ                                              | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/mrdy-bh-nam-awh.webp)                                         | مردی به نام اوه                                                  | <ul><li>🪶خوش‌خوان</li><li>😊دلنشین</li></ul>  | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/qlah-hywanat.webp)                                            | قلعه حیوانات                                                     | <ul><li>🪶خوش‌خوان</li><li>🧲گیرا</li></ul>    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/zmstan-62.webp)                                               | زمستان ۶۲                                                        | <ul><li>🧲گیرا</li><li>☕تلخ</li></ul>          | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/dayy-jan-naplewn.webp)                                        | دایی جان ناپلئون                                                 | <ul><li>🧲گیرا</li><li>🪶خوش‌خوان</li></ul>    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/jnayt-w-mkafat.webp)                                          | جنایت و مکافات                                                   | <ul><li>🧲گیرا</li><li>🪶خوش‌خوان</li></ul>    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/az-ktab.webp)                                                 | از کتاب                                                          | <ul><li>🌳پربار</li><li>🪶خوش‌خوان</li></ul>   | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/az-qytryh-ta-awrnj-kanty.webp)                                | از قیطریه تا اورنج کانتی                                         | <ul><li>☕تلخ</li><li>🪶خوش‌خوان</li></ul>      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/abwalmshaghl.webp)                                            | ابوالمشاغل                                                       | <ul><li>🧲گیرا</li></ul>                       | ★★★★★  |
| ![](https://ifard.ir/assets/covers/books/yadgyry-yadgyry.webp)                                         | یادگیری یادگیری                                                  | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/books/waqa-byny.webp)                                               | واقع بینی                                                        | <ul><li>🌳پربار</li></ul>                      | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/books/dstwralamlhay-fyl-aaby-bray-aydh-yaby.webp)                   | دستورالعمل‌های فیل آبی برای ایده یابی                            | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/books/tshya-alwy-w-tshya-sfwy.webp)                                 | تشیع علوی و تشیع صفوی                                            | \-                                             | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/books/asl-grayy.webp)                                               | اصل گرایی                                                        | \-                                             | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/books/nkth-hay-wyraysh.webp)                                        | نکته های ویرایش                                                  | \-                                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/nkth-hay-tarykhy.webp)                                        | نکته های تاریخی                                                  | \-                                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/nfhat-nft.webp)                                               | نفحات نفت                                                        | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/mzkhrfat-farsy.webp)                                          | مزخرفات فارسی                                                    | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/qdrt-nwshtn.webp)                                             | قدرت نوشتن                                                       | \-                                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/fqt-bray-tfryh.webp)                                          | فقط برای تفریح                                                   | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/farhang-goftari.webp)                                         | فرهنگ گفتاری                                                     | \-                                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/sh-tar.webp)                                                  | سه تار                                                           | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/dygr-akhbar-nkhwanyd.webp)                                    | دیگر اخبار نخوانید                                               | <ul><li>🦉آموزنده</li></ul>                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/dstwralamlhay-rnh-magryt-bh-fyl-aaby-bray-aydhyaby.webp)      | دستورالعمل‌های «رنه ماگریت» به فیل آبی برای ایده‌یابی            | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/dastan-prdazy-ba-dadhha.webp)                                 | داستان پردازی با داده‌ها                                         | <ul><li>🪶خوش‌خوان</li><li>🌳پربار</li></ul>   | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/khtr-sqwt-bhmn.webp)                                          | خطر سقوط بهمن                                                    | <ul><li>🦉آموزنده</li><li>🪶خوش‌خوان</li></ul> | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/teori-act.webp)                                               | تئوری اکت                                                        | <ul><li>🦉آموزنده</li><li>🤏موجز</li></ul>     | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/astadan-w-naastadanm.webp)                                    | استادان و نااستادانم                                             | \-                                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/akhbar-w-sayr-chrndyat.webp)                                  | اخبار و سایر چرندیات                                             | <ul><li>🦉آموزنده</li></ul>                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/atwprtrh.webp)                                                | اتوپرتره                                                         | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/abn-mshghlh.webp)                                             | ابن مشغله                                                        | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★★   |
| ![](\-)                                                                                                | The Sketchnote Handbook                                          | <ul><li>🦉آموزنده</li></ul>                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/books/hft-rwayt-khswsy-az-zndgy-syd-mwsy-sdr.webp)                  | هفت روایت خصوصی از زندگی سید موسی صدر                            | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/books/nkhl-w-narnj.webp)                                            | نخل و نارنج                                                      | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/books/mntq-karbrdy.webp)                                            | منطق کاربردی                                                     | \-                                             | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/books/shahrah-tathyrgthary.webp)                                    | شاهراه تاثیرگذاری                                                | \-                                             | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/books/zndgy-khwd-ra-trahy-knyd.webp)                                | زندگی خود را طراحی کنید                                          | <ul><li>🦉آموزنده</li></ul>                    | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/books/aswl-frylnsyng-mwfq.webp)                                     | اصول فریلنسینگ موفق                                              | \-                                             | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/books/asm-nmy-khwahd.webp)                                          | اسم نمی خواهد                                                    | <ul><li>🪶خوش‌خوان</li><li>🦉آموزنده</li></ul> | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/books/estizah-rahbari.webp)                                         | استیضاح رهبری                                                    | \-                                             | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/books/asb-syah.webp)                                                | اسب سیاه                                                         | \-                                             | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/books/ykhzar-kwdn.webp)                                             | یک‌هزار کودن                                                     | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★    |
| ![](https://ifard.ir/assets/covers/books/klthwm-nnh-aqaed-alnsaa.webp)                                 | کلثوم ننه (عقائد النساء)                                         | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/ktab-80000-saat.webp)                                         | کتاب 80000 ساعت                                                  | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/chksh-bsry.webp)                                              | چکش بصری                                                         | <ul><li>🦉آموزنده</li><li>🪶خوش‌خوان</li></ul> | ★★★    |
| ![](https://ifard.ir/assets/covers/books/hnr-shfaf-andyshydn.webp)                                     | هنر شفاف اندیشیدن                                                | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/nsht-nsha.webp)                                               | نشت نشا                                                          | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/naqwsha-bh-sda-drmy-aaynd.webp)                               | ناقوسها به صدا درمی آیند                                         | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/mynymalysm-dyjytal.webp)                                      | مینیمالیسم دیجیتال                                               | <ul><li>🦉آموزنده</li></ul>                    | ★★★    |
| ![](https://ifard.ir/assets/covers/books/mbany-trahy-grafyk.webp)                                      | مبانی طراحی گرافیک                                               | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/qdrt-skwt.webp)                                               | قدرت سکوت                                                        | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/aarfanh.webp)                                                 | عارفانه                                                          | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/shyb.webp)                                                    | شیب                                                              | <ul><li>🦉آموزنده</li></ul>                    | ★★★    |
| ![](https://ifard.ir/assets/covers/books/shghl-mwrd-alaqh.webp)                                        | شغل مورد علاقه                                                   | <ul><li>🦉آموزنده</li></ul>                    | ★★★    |
| ![](https://ifard.ir/assets/covers/books/shrab-kham.webp)                                              | شراب خام                                                         | <ul><li>☕تلخ</li></ul>                         | ★★★    |
| ![](https://ifard.ir/assets/covers/books/syry-dr-nhj-alblaghh.webp)                                    | سیری در نهج البلاغه                                              | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/sm-zdayy-dyjytal.webp)                                        | سم زدایی دیجیتال                                                 | <ul><li>🦉آموزنده</li></ul>                    | ★★★    |
| ![](https://ifard.ir/assets/covers/books/slam-br-abrahym-zndgy-namh-w-khatrat-shhyd-abrahym-hady.webp) | سلام بر ابراهیم زندگی نامه و خاطرات شهید ابراهیم هادی            | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/rahnmay-khwshbkhty-w-thrwtmndy-bh-rwayt-nawal-rawykant.webp)  | راهنمای خوشبختی و ثروتمندی به روایت ناوال راویکانت               | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/dr-staysh-atlaf-wqt.webp)                                     | در ستایش اتلاف وقت                                               | <ul><li>🦉آموزنده</li></ul>                    | ★★★    |
| ![](https://ifard.ir/assets/covers/books/khwn-khda.webp)                                               | خون خدا                                                          | <ul><li>🦉آموزنده</li></ul>                    | ★★★    |
| ![](https://ifard.ir/assets/covers/books/jathbh-w-dafah-aly.webp)                                      | جاذبه و دافعه علی                                                | \-                                             | ★★★    |
| ![](https://ifard.ir/assets/covers/books/aazady-manwy.webp)                                            | آزادی معنوی                                                      | \-                                             | ★★★    |
| ![](\-)                                                                                                | The PARA Method Simplify, Organize, and Master Your Digital Life | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★★    |
| ![](https://ifard.ir/assets/covers/books/shb-hay-rwshn.webp)                                           | شب های روشن                                                      | <ul><li>☕تلخ</li></ul>                         | ★★⯩    |
| ![](https://ifard.ir/assets/covers/books/dar-setayesh-namadari.webp)                                   | در ستایش نامادری                                                 | <ul><li>🧩سرگرم‌کننده</li></ul>                | ★★⯩    |
| ![](https://ifard.ir/assets/covers/books/yadgyry-zaya.webp)                                            | یادگیری زایا                                                     | <ul><li>🐢سخت‌خوان</li></ul>                   | ★★     |
| ![](https://ifard.ir/assets/covers/books/kf-khyabwn.webp)                                              | کف خیابون                                                        | <ul><li>🌊آبکی</li></ul>                       | ★★     |
| ![](https://ifard.ir/assets/covers/books/kafh-arwpa.webp)                                              | کافه اروپا                                                       | \-                                             | ★★     |
| ![](https://ifard.ir/assets/covers/books/chnd-rwayt-matbr-mjmwah-dastan.webp)                          | چند روایت معتبر (مجموعه داستان)                                  | <ul><li>🥱کسل‌کننده</li></ul>                  | ★★     |
| ![](https://ifard.ir/assets/covers/books/nshkhwar-thhny.webp)                                          | نشخوار ذهنی                                                      | <ul><li>🦉آموزنده</li></ul>                    | ★★     |
| ![](https://ifard.ir/assets/covers/books/mym-w-aan-dygran.webp)                                        | میم و آن دیگران                                                  | \-                                             | ★★     |
| ![](https://ifard.ir/assets/covers/books/mhrh-hyaty.webp)                                              | مهره حیاتی                                                       | <ul><li>🦉آموزنده</li></ul>                    | ★★     |
| ![](https://ifard.ir/assets/covers/books/mn-danay-kl-hstm-mjmwah-dastan.webp)                          | من دانای کل هستم؛ مجموعه داستان                                  | <ul><li>🥱کسل‌کننده</li></ul>                  | ★★     |
| ![](https://ifard.ir/assets/covers/books/mskh-w-dastan-hay-dygr.webp)                                  | مسخ و داستان های دیگر                                            | <ul><li>🥱کسل‌کننده</li></ul>                  | ★★     |
| ![](https://ifard.ir/assets/covers/books/mayzlys-tewry-bnyady-shtrnj.webp)                             | مایزلیس، تئوری بنیادی شطرنج                                      | <ul><li>🦉آموزنده</li></ul>                    | ★★     |
| ![](https://ifard.ir/assets/covers/books/flakt-rwzmrh.webp)                                            | فلاکت روزمره                                                     | \-                                             | ★★     |
| ![](https://ifard.ir/assets/covers/books/dr-staysh-btalt.webp)                                         | در ستایش بطالت                                                   | <ul><li>😵‍💫گنگ</li></ul>                     | ★★     |
| ![](https://ifard.ir/assets/covers/books/hyfa.webp)                                                    | حیفا                                                             | <ul><li>🌊آبکی</li></ul>                       | ★★     |
| ![](https://ifard.ir/assets/covers/books/tb-mzhgan.webp)                                               | تب مژگان                                                         | <ul><li>🌊آبکی</li></ul>                       | ★★     |
| ![](https://ifard.ir/assets/covers/books/taksy-swary.webp)                                             | تاکسی سواری                                                      | <ul><li>🪶خوش‌خوان</li></ul>                   | ★★     |
| ![](https://ifard.ir/assets/covers/books/byshyadgyry.webp)                                             | بیش‌یادگیری                                                      | <ul><li>🦉آموزنده</li></ul>                    | ★★     |
| ![](https://ifard.ir/assets/covers/books/bwf-kwr.webp)                                                 | بوف کور                                                          | \-                                             | ★★     |
| ![](\-)                                                                                                | بامداد خمار                                                      | <ul><li>☕تلخ</li></ul>                         | ★★     |
| ![](https://ifard.ir/assets/covers/books/sexuality.webp)                                               | سکسوالیته                                                        | <ul><li>🐢سخت‌خوان</li></ul>                   | ★★     |
| ![](https://ifard.ir/assets/covers/books/msyr-shghly.webp)                                             | مسیر شغلی                                                        | <ul><li>🐢سخت‌خوان</li></ul>                   | ★      |
| ![](https://ifard.ir/assets/covers/books/mstr-jykak.webp)                                              | مستر جیکاک                                                       | <ul><li>🥱کسل‌کننده</li></ul>                  | ★      |
| ![](https://ifard.ir/assets/covers/books/aykygay.webp)                                                 | ایکیگای                                                          | \-                                             | ★      |
| ![](https://ifard.ir/assets/covers/books/chra-mlt-ha-shkst-mykhwrnd.webp)                              | چرا ملت ها شکست میخورند؟                                         | <ul><li>🐢سخت‌خوان</li></ul>                   |        |
| ![](https://ifard.ir/assets/covers/books/chra-adbyat.webp)                                             | چرا ادبیات                                                       | \-                                             |        |
| ![](https://ifard.ir/assets/covers/books/mjmwah-aathar-chkhwf-jld-chharm.webp)                         | مجموعه آثار چخوف (جلد چهارم)                                     | \-                                             |        |
| ![](https://ifard.ir/assets/covers/books/qmarbaz.webp)                                                 | قمارباز                                                          | \-                                             |        |
| ![](https://ifard.ir/assets/covers/books/shb-yk-shb-dw.webp)                                           | شب یک شب دو                                                      | \-                                             |        |
| ![](https://ifard.ir/assets/covers/books/tarykh-mkhtsr-bh-gnd-kshydn-jhan.webp)                        | تاریخ مختصر به گند کشیدن جهان                                    | \-                                             |        |
| ![](https://ifard.ir/assets/covers/books/artbat-bdwn-khshwnt-zban-zndgy.webp)                          | ارتباط بدون خشونت، زبان زندگی                                    | <ul><li>🦉آموزنده</li></ul>                    |        |
<!-- SerializedQuery END -->

‌<br>‌<br>

## 🎓 دوره‌های آموزشی

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + round(length.hours) + " ساعت`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Course WHERE length !=null SORT rating desc -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + round(length.hours) + " ساعت`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Course WHERE length !=null SORT rating desc -->

| ("![](" + cover_self + ")")                                                            | file.name                             | "`" + round(length.hours) + " ساعت`" | rating |
| -------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------ | ------ |
| ![](https://ifard.ir/assets/covers/courses/dwrh-swty-aamwzsh-hdf-gthary.webp)          | دوره صوتی آموزش هدف گذاری             | `8 ساعت`                             |        |
| ![](https://ifard.ir/assets/covers/courses/fayl-swty-afzaysh-azt-nfs-msyr-asly.webp)   | فایل صوتی افزایش عزت نفس - مسیر اصلی  | `3 ساعت`                             |        |
| ![](https://ifard.ir/assets/covers/courses/dwrh-swty-tfkr-systmy.webp)                 | دوره صوتی تفکر سیستمی                 | `6 ساعت`                             |        |
| ![](https://ifard.ir/assets/covers/courses/fayl-swty-drbarh-mwfqyt-w-brnamh-ryzy.webp) | فایل صوتی درباره موفقیت و برنامه ریزی | `2 ساعت`                             |        |
| ![](https://ifard.ir/assets/covers/courses/illustration-for-animation.webp)            | Illustration for Animation            | `6 ساعت`                             | ★★★★★  |
| ![](https://ifard.ir/assets/covers/courses/dwrh-trahy-karaktr.webp)                    | دوره طراحی کاراکتر                    | `50 ساعت`                            | ★★★★★  |
| ![](https://ifard.ir/assets/covers/courses/dwktab-asl-grayy.webp)                      | دوکتاب اصل گرایی                      | `12 ساعت`                            | ★★★★★  |
| ![](https://ifard.ir/assets/covers/courses/dwktab-trahy-msyr-zndgy.webp)               | دوکتاب طراحی مسیر زندگی               | `14 ساعت`                            | ★★★★★  |
| ![](https://ifard.ir/assets/covers/courses/fwtwfn-aamwzsh-nrm-afzar-ftwshap.webp)      | فوتوفن - آموزش نرم افزار فتوشاپ       | `40 ساعت`                            | ★★★★★  |
| ![](https://ifard.ir/assets/covers/courses/fwtwfntwm-dwrh-tkhssy-ftwmwntazh.webp)      | فوتوفنتوم - دوره تخصصی فتومونتاژ      | `15 ساعت`                            | ★★★★★  |
| ![](https://ifard.ir/assets/covers/courses/hft-kar-marfy-athrbkhsh.webp)               | هفت کار (معرفی اثربخش)                | `5 ساعت`                             | ★★★★★  |
| ![](https://ifard.ir/assets/covers/courses/kargah-zban-khwdkhwan.webp)                 | کارگاه زبان خودخوان                   | `5 ساعت`                             | ★★★★★  |
| ![](https://ifard.ir/assets/covers/courses/aamwzsh-jama-gyt-w-gyt-hab-2026.webp)       | آموزش جامع گیت و گیت هاب 2026         | `8 ساعت`                             | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/courses/migrate-from-wordpress-to-hugo.webp)        | Migrate from WordPress to Hugo        | `6 ساعت`                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/aamwzsh-css-rakt.webp)                      | آموزش css - راکت                      | `12 ساعت`                            | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/aamwzsh-html-rakt.webp)                     | آموزش HTML - راکت                     | `3 ساعت`                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/tmrkzaar.webp)                              | تمرکزآر                               | `12 ساعت`                            | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/dwrh-jama-astybl-dyfywzhn.webp)             | دوره جامع استیبل دیفیوژن              | `20 ساعت`                            | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/dwrh-swty-hrfhay-gry-dr-mhyt-kar.webp)      | دوره صوتی حرفه‌ای گری در محیط کار     | `4 ساعت`                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/rwayt-ansan-fsl-1.webp)                     | روایت انسان (فصل 1)                   | `15 ساعت`                            | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/rwayt-ansan-fsl-2.webp)                     | روایت انسان (فصل 2)                   | `17 ساعت`                            | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/hk-qanwnmnd-jady-34-chalsh-natas.webp)      | هک قانونمند جادی + ۳۴ چالش ناتاس      | `13 ساعت`                            | ★★★★   |
| ![](https://ifard.ir/assets/covers/courses/2d-character-design-magician.webp)          | 2D Character Design Magician          | `5 ساعت`                             | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/figma-ui-ux-design-essentials.webp)         | Figma UI UX Design Essentials         | `12 ساعت`                            | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/dwrh-tswyrsazy-aarzwy-khadmy.webp)          | دوره تصویرسازی (آرزوی خادمی)          | `20 ساعت`                            | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/dwrh-jama-trahy-msyr-shghly.webp)           | دوره جامع طراحی مسیر شغلی             | `11 ساعت`                            | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/rwayt-ansan-fsl-3.webp)                     | روایت انسان (فصل 3)                   | `12 ساعت`                            | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/rwayt-ansan-fsl-4.webp)                     | روایت انسان (فصل 4)                   | `15 ساعت`                            | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/swt-dr-prymyr.webp)                         | صوت در پریمیر                         | `10 ساعت`                            | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/tnz-bank.webp)                              | طنز بانک                              | `8 ساعت`                             | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/chgwnh-astkhdam-shwym.webp)                 | چگونه استخدام شویم؟                   | `5 ساعت`                             | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/dastan-kotah.webp)                          | کارگاه داستان کوتاه                   | `6 ساعت`                             | ★★★    |
| ![](https://ifard.ir/assets/covers/courses/khlaqyt-dr-dyzayn.webp)                     | خلاقیت در دیزاین                      | `3 ساعت`                             | ★      |
| ![](https://ifard.ir/assets/covers/courses/dwrh-swty-aqtsad-twjh.webp)                 | دوره صوتی اقتصاد توجه                 | `4 ساعت`                             |        |
| ![](https://ifard.ir/assets/covers/courses/rwayt-ansan-fsl-5.webp)                     | روایت انسان (فصل 5)                   | `15 ساعت`                            |        |
| ![](https://ifard.ir/assets/covers/courses/rwayt-ansan-fsl-6.webp)                     | روایت انسان (فصل 6)                   | `15 ساعت`                            |        |
| ![](https://ifard.ir/assets/covers/courses/dwrh-aamwzsh-nrmafzar-aylwstrytwr.webp)     | دوره‌ آموزش نرم‌افزار ایلوستریتور     | `50 ساعت`                            |        |
| ![](https://ifard.ir/assets/covers/courses/kargah-jama-gramr.webp)                     | کارگاه جامع گرامر                     | `7 ساعت`                             |        |
| ![](https://ifard.ir/assets/covers/courses/jsmirland.webp)                             | جاوا اسکریپت - میرلند                 | `10 ساعت`                            |        |
<!-- SerializedQuery END -->



‌<br>‌<br>

## 🎙 پادکست



<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Podcast WHERE length !=null SORT rating desc -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Podcast WHERE length !=null SORT rating desc -->

| ("![](" + cover_self + ")")                                                                                  | file.name                                                   | "`" + length.minute + " دقیقه`" | rating |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/podcasts/arwn-swartz.webp)                                                | ارون سوارتز                                                 | `143 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/tkaml-frdy-w-msyr-dstyaby-bh-aan.webp)                           | تکامل فردی و مسیر دستیابی به آن                             | `124 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-1-chalsh-aatmad-bh-nfs.webp)                          | خودشناسی (1) - چالش اعتماد به نفس                           | `69 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-2-ahsas-hay-bd.webp)                                  | خودشناسی (2) - احساس های بد                                 | `65 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-3-braawrd-shyh-az-khwyshtn.webp)                      | خودشناسی (3) - برآورد صحیح از خویشتن                        | `76 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-4-tlash-khwyshtndary-w-aayndh-ngry.webp)              | خودشناسی (4) - تلاش، خویشتنداری و آینده نگری                | `80 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-5-razhay-mwfqyt-thsyly.webp)                          | خودشناسی (5) - رازهای موفقیت تحصیلی                         | `75 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-9-tlashgry.webp)                                      | خودشناسی (9) - تلاشگری                                      | `82 دقیقه`                      | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/drbarhy-jady.webp)                                               | درباره‌ی جادی                                               | `115 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/sryal-ashw.webp)                                                 | سریال اشو                                                   | `2327 دقیقه`                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/nyma-asmaayly.webp)                                              | نیما اسماعیلی                                               | `153 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/padkst-sryaly-sylk-rwd.webp)                                     | پادکست سریالی سیلک رود                                      | `261 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-mhmdrdha-shabanaly.webp)                             | گفت و گو با محمدرضا شعبانعلی                                | `320 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-mylad-nwry.webp)                                     | گفت و گو با میلاد نوری                                      | `162 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-nyma-qadhy.webp)                                     | گفت و گو با نیما قاضی                                       | `225 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/amirmousavi2.webp)                                               | گفت و گو با امیر موسوی جهانگرد                              | `160 دقیقه`                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/podcasts/21-syd-mhmdjwad-fydh-aabady-danshgah-w-snat-w-mdlhay-zbany.webp) | 21   سید محمدجواد فیض آبادی  دانشگاه و صنعت و مدل‌های زبانی | `122 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/athr-prwanhay-60-hmyd-mhmdy.webp)                                | اثر پروانه‌ای (۶۰) حمید محمدی                               | `100 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/bhthy-drbarhy-ktab-asb-taryk.webp)                               | بحثی درباره‌ی کتاب اسب تاریک                                | `80 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/twrj-sabry-wnd-brnd-dyzaynr.webp)                                | تورج صابری وند - برند دیزاینر                               | `145 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/hsyn-klhr.webp)                                                  | حسین کلهر                                                   | `70 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khlash-ktab-gstrh.webp)                                          | خلاصه کتاب گستره                                            | `58 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khlashy-ktab-aslgrayy.webp)                                      | خلاصه‌ی کتاب اصل‌گرایی                                      | `56 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-10-shwr-w-ashtyaq-dr-zndgy.webp)                      | خودشناسی (10) - شور و اشتیاق در زندگی                       | `78 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-6-shadkamy-w-slamt-rwan-dr-asr-nabrabry.webp)         | خودشناسی (6) - شادکامی و سلامت روان در عصر نابرابری         | `78 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-7-ngahy-byshtr-bh-aadt-ha.webp)                       | خودشناسی (7) - نگاهی بیشتر به عادت ها                       | `80 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/khwdshnasy-8-shady-rdhaytmndy-w-manay-zndgy.webp)                | خودشناسی (8) - شادی رضایتمندی و معنای زندگی                 | `73 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/rdha-hsamyfrd.webp)                                              | رضا حسامی‌فرد                                               | `150 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/fsl-28-jafkry-shryk-aatfy.webp)                                  | فصل 28 جافکری - شریک عاطفی                                  | `155 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/mhmwd-mqdsy-slamt-rwan-ma-qbl-hyn-w-bad-az-jng.webp)             | محمود مقدسی  سلامت روان ما، قبل، حین و بعد از جنگ           | `127 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/mqdad-wlayy-bazar-kar-kdwm-rshth-khwbh.webp)                     | مقداد ولایی  بازار کار کدوم رشته خوبه؟                      | `88 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/mqdad-wlayy-hmbnyangthar-w-hmmdyraaml-jabwyzhn.webp)             | مقداد ولایی  هم‌بنیان‌گذار و هم‌مدیرعامل جاب‌ویژن           | `144 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-hamd-bydy.webp)                                      | گفت و گو با حامد بیدی                                       | `146 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-pwrya-aalmy.webp)                                    | گفت و گو با پوریا عالمی                                     | `180 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-pyman-fkharyan.webp)                                 | گفت و گو با پیمان فخاریان                                   | `110 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-amyr-mwswy-twr-lydr.webp)                               | گفتگو با امیر موسوی تور لیدر                                | `128 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-zwje-twlydknnd-asl.webp)                                | گفتگو با زوجِ تولیدکنندۀ عسل                                | `84 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-mhmd-anayty-bnyangthar-tamyraky.webp)                   | گفتگو با محمد عنایتی  بنیان‌گذار تعمیراکی                   | `106 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-mhmdaly-sdrayy-karshnas-prdazsh-zbanhay-tbyay.webp)     | گفتگو با محمدعلی صدرایی - کارشناس پردازش زبان‌های طبیعی     | `107 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-mhdy-aakhy-drbarh-mdlhay-zbany-bzrg.webp)               | گفتگو با مهدی آخی درباره مدل‌های زبانی بزرگ                 | `144 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-pyman-krmy.webp)                                        | گفتگو با پیمان کرمی                                         | `121 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/gyzmwndw.webp)                                                   | گیزموندو                                                    | `103 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/ywnabambr.webp)                                                  | یونابامبر                                                   | `110 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/abotaleb.webp)                                                   | گفتگو با ابوطالب حسینی                                      | `83 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/amirhosseinghiasi.webp)                                          | گفتگو با امیرحسین قیاسی                                     | `137 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/iminaramesh.webp)                                                | گفت و گو با امین آرامش                                      | `90 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/channelb.webp)                                                   | مَسترمایند                                                  | `386 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/mcaffe.webp)                                                     | جان مکافی                                                   | `120 دقیقه`                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/eshqh-atashin.webp)                                              | عشق آتشین اتصالات عميق عاطفی چگونه شکل می‌گیرد؟             | `53 دقیقه`                      | ★★★★   |
| ![](https://ifard.ir/assets/covers/podcasts/fsl-25-ashq-rabth-aatfy-w-azdwaj.webp)                           | فصل 25 عشق، رابطه عاطفی و ازدواج                            | `338 دقیقه`                     | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/podcasts/myna-kamran-w-ahsan-mhtdy-bnyangtharan-rwstatysh.webp)           | مینا کامران و احسان مهتدی بنیان‌گذاران روستاتیش             | `148 دقیقه`                     | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/podcasts/mahyasaedi.webp)                                                 | محیا ساعدی                                                  | `86 دقیقه`                      | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/podcasts/maggie-appletons-journey-to-design.webp)                         | Maggie Appleton's journey to design                         | `64 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/athr-prwanhay-67-whyd-rhbany.webp)                               | اثر پروانه‌ای (۶۷) وحید رهبانی                              | `85 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/amyrabas-abdalaly-ywtywbr.webp)                                  | امیرعباس عبدالعلی یوتیوبر                                   | `110 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/by-hsy.webp)                                                     | بی حسی                                                      | `15 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/jafkry-fsl-15-lyly-mhsny.webp)                                   | جافکری فصل 15 - لیلی محسنی                                  | `290 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/jafkry-fsl-19-lykly-mhsny.webp)                                  | جافکری فصل 19 - لیکلی محسنی                                 | `246 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/jafkry-fsl-20-frwzan-nzhad.webp)                                 | جافکری فصل 20 - فروزان نژاد                                 | `143 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/jafkry-fsl-23-syamk-qasmy.webp)                                  | جافکری فصل 23 - سیامک قاسمی                                 | `309 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/jnwbgan.webp)                                                    | جنوبگان                                                     | `130 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/hsyn-yzdy.webp)                                                  | حسین یزدی                                                   | `172 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/hmyd-mhmwdzadh-bnyangthar-crm-dydar.webp)                        | حمید محمودزاده  بنیان‌گذار CRM دیدار                        | `160 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/radywgyk-shmarh-147-cht-jy-py-ty.webp)                           | رادیوگیک – شماره ۱۴۷ – چت جی پی تی                          | `53 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/rkhtkn-bazndhha-pwrya-aalmy.webp)                                | رختکن بازنده‌ها - پوریا عالمی                               | `99 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/sryal-watrgyt.webp)                                              | سریال واترگیت                                               | `284 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/sd-w-chhl-w-pnj-kylwmtrdrsaat.webp)                              | صد و چهل و پنج کیلومتر‌در‌ساعت                              | `104 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/mhsn-hsam-mzahry-jamahshnas.webp)                                | محسن حسام مظاهری - جامعه‌شناس                               | `144 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/prssh-w-paskh-ba-dktr-aly-khzayy-7-apyzwd.webp)                  | پرسش و پاسخ با دکتر علی خزایی (7 اپیزود)                    | `496 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/kyanwsh-mkhtaryan.webp)                                          | کیانوش مختاریان                                             | `140 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-hamd-w-hsam-twkly.webp)                              | گفت و گو با حامد و حسام توکلی                               | `120 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-mstfy-alhyary.webp)                                  | گفت و گو با مصطفی الهیاری                                   | `148 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-hady-shjary.webp)                                    | گفت و گو با هادی شجاری                                      | `128 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-amyrhsyn-natqy-bnyangthar-kwyyz-aaf-kyngz.webp)         | گفتگو با امیرحسین ناطقی بنیان‌گذار کوییز آف کینگز           | `110 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-ahwra-nyazy.webp)                                       | گفتگو با اهورا نیازی                                        | `113 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-sayd-ansaryan-bnyad-algn.webp)                          | گفتگو با سعید انصاریان ‌ بنیاد الگن                         | `152 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-syawsh-sfaryanpwr-zhwrnalyst-w-padkstr.webp)            | گفتگو با سیاوش صفاریان‌پور  ژورنالیست و پادکستر             | `70 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-salh-skhndan.webp)                                      | گفتگو با صالح سخندان                                        | `75 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-mrtdhy-shjaay-draamd-dlary.webp)                        | گفتگو با مرتضی شجاعی درآمد دلاری                            | `142 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-mhdy-ahmdy-rahandazy-rsanh-aazad.webp)                  | گفتگو با مهدی احمدی - راه‌اندازی رسانه آزاد                 | `95 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/gp-w-gft-mhmdrdha-shabanaly-w-aadl-talby.webp)                   | گپ و گفت محمدرضا شعبانعلی و عادل طالبی                      | `77 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/ardam.webp)                                                      | گفتگو با علی آردم  (2 اپیزود)                               | `170 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/esmaeel.webp)                                                    | اسماعیل آذری‌نژاد  بنیان‌گذار پویش قصه، رنگ، توپ            | `133 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/estgah-ai.webp)                                                  | 23 ازار کار و صنعت هوش مصنوعی                               | `48 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/estgah-ai.webp)                                                  | تفاوت‌های هوش مصنوعی در صنعت و دانشگاه                      | `43 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/estgah-ai.webp)                                                  | ایستگاه هوش مصنوعی اپیزود 1-10                              | `180 دقیقه`                     | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/channelb.webp)                                                   | پانصد کیلو دینامیت                                          | `97 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/aamwk.webp)                                                      | چرا آخرش وقت کم می‌آوریم؟                                   | `90 دقیقه`                      | ★★★    |
| ![](https://ifard.ir/assets/covers/podcasts/aamwk.webp)                                                      | آموک                                                        | `105 دقیقه`                     | ★★     |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-sayd-hsyn-zadh.webp)                                 | گفت و گو با سعید حسین زاده                                  | `111 دقیقه`                     | ★★     |
| ![](https://ifard.ir/assets/covers/podcasts/rhbry-shsh-mtalah-dr-astratzhy-jhany.webp)                       | رهبری شش مطالعه در استراتژی جهانی                           | `78 دقیقه`                      |        |
| ![](https://ifard.ir/assets/covers/podcasts/bplus.webp)                                                      | چرا آمریکا به ایران حمله کرد؟                               | `55 دقیقه`                      |        |
| ![](https://ifard.ir/assets/covers/podcasts/bplus.webp)                                                      | حوزه علمیه نهاد دینی، رابطه با پول و رابطه با قدرت          | `46 دقیقه`                      |        |
<!-- SerializedQuery END -->


‌<br>‌<br>

## 🍿 فیلم و سریال


### 🎬 فیلم

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "film" SORT rating desc -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "film" SORT rating desc -->

| ("![](" + cover_self + ")")                                                                           | file.name                                             | badge                                                  | rating |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ | ------ |
| ![](https://ifard.ir/assets/covers/movies/zodiac.webp)                                                | Zodiac                                                | <ul><li>🌀مرموز</li></ul>                              | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/the-silence-of-the-lambs.webp)                              | The Silence of the Lambs                              | <ul><li>🧲گیرا</li></ul>                               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/the-secret-in-their-eyes.webp)                              | The Secret in Their Eyes                              | <ul><li>🧲گیرا</li><li>🌀مرموز</li></ul>               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/the-prestige.webp)                                          | The Prestige                                          | <ul><li>🌀مرموز</li><li>🧲گیرا</li></ul>               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/the-pianist.webp)                                           | The Pianist                                           | <ul><li>☕تلخ</li></ul>                                 | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/the-game.webp)                                              | The Game                                              | <ul><li>🧲گیرا</li><li>🗝️ماجراجویانه</li></ul>        | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/the-fisher-king.webp)                                       | The Fisher King                                       | <ul><li>😊دلنشین</li><li>🧲گیرا</li></ul>              | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/shutter-island.webp)                                        | Shutter Island                                        | <ul><li>🌀مرموز</li></ul>                              | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/se7en.webp)                                                 | Se7en                                                 | <ul><li>🌀مرموز</li></ul>                              | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/parasite.webp)                                              | Parasite                                              | \-                                                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/modern-times.webp)                                          | Modern Times                                          | <ul><li>😊دلنشین</li></ul>                             | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/marriage-story.webp)                                        | Marriage Story                                        | <ul><li>🧲گیرا</li></ul>                               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/la-confidential.webp)                                       | L.A. Confidential                                     | <ul><li>🧲گیرا</li><li>🌀مرموز</li></ul>               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/interstellar.webp)                                          | Interstellar                                          | <ul><li>🧲گیرا</li><li>🗝️ماجراجویانه</li></ul>        | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/inception.webp)                                             | Inception                                             | <ul><li>🌀مرموز</li><li>🗝️ماجراجویانه</li></ul>       | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/good-will-hunting.webp)                                     | Good Will Hunting                                     | <ul><li>🧲گیرا</li><li>😊دلنشین</li></ul>              | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/django-unchained.webp)                                      | Django Unchained                                      | \-                                                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/dead-poets-society.webp)                                    | Dead Poets Society                                    | <ul><li>🧲گیرا</li></ul>                               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/coda.webp)                                                  | CODA                                                  | <ul><li>✨حال‌خوب‌کن</li></ul>                          | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/310-to-yuma.webp)                                           | 310 to Yuma                                           | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/12-angry-men.webp)                                          | 12 Angry Men                                          | <ul><li>🦉آموزنده</li></ul>                            | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/the-lord-of-the-rings-the-return-of-the-king.webp)          | The Lord of the Rings The Return of the King          | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-lord-of-the-rings-the-fellowship-of-the-ring.webp)      | The Lord of the Rings The Fellowship of the Ring      | <ul><li>🗝️ماجراجویانه</li><li>🧩سرگرم‌کننده</li></ul> | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-lizard.webp)                                            | The Lizard                                            | \-                                                     | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-kid.webp)                                               | The Kid                                               | <ul><li>😊دلنشین</li></ul>                             | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-invisible-guest.webp)                                   | The Invisible Guest                                   | <ul><li>🌀مرموز</li></ul>                              | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-gold-rush.webp)                                         | The Gold Rush                                         | <ul><li>😊دلنشین</li><li>🧩سرگرم‌کننده</li></ul>       | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-french-dispatch.webp)                                   | The French Dispatch                                   | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-body.webp)                                              | The Body                                              | <ul><li>🌀مرموز</li></ul>                              | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/psycho.webp)                                                | Psycho                                                | <ul><li>🧲گیرا</li></ul>                               | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/memento.webp)                                               | Memento                                               | <ul><li>🌀مرموز</li></ul>                              | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/hugo.webp)                                                  | Hugo                                                  | <ul><li>🌀مرموز</li><li>🗝️ماجراجویانه</li></ul>       | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/hit-man.webp)                                               | Hit Man                                               | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/heroic-losers.webp)                                         | Heroic Losers                                         | <ul><li>😊دلنشین</li><li>🧲گیرا</li></ul>              | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/eternal-sunshine-of-the-spotless-mind.webp)                 | Eternal Sunshine of the Spotless Mind                 | \-                                                     | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/atonement.webp)                                             | Atonement                                             | <ul><li>☕تلخ</li></ul>                                 | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/all-quiet-on-the-western-front.webp)                        | All Quiet on the Western Front                        | <ul><li>☕تلخ</li></ul>                                 | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/a-beautiful-mind.webp)                                      | A Beautiful Mind                                      | <ul><li>🌀مرموز</li></ul>                              | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/12-years-a-slave.webp)                                      | 12 Years a Slave                                      | <ul><li>☕تلخ</li></ul>                                 | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/where-is-the-friends-house.webp)                            | Where Is the Friend's House                           | <ul><li>😊دلنشین</li></ul>                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/titanic.webp)                                               | Titanic                                               | <ul><li>😊دلنشین</li></ul>                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-truman-show.webp)                                       | The Truman Show                                       | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-town.webp)                                              | The Town                                              | <ul><li>🧩سرگرم‌کننده</li><li>🧲گیرا</li></ul>         | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-shining.webp)                                           | The Shining                                           | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-shawshank-redemption.webp)                              | The Shawshank Redemption                              | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-phoenician-scheme.webp)                                 | The Phoenician Scheme                                 | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-life-of-chuck.webp)                                     | The Life of Chuck                                     | <ul><li>✨حال‌خوب‌کن</li></ul>                          | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-insider.webp)                                           | The Insider                                           | <ul><li>🧲گیرا</li></ul>                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-grand-budapest-hotel.webp)                              | The Grand Budapest Hotel                              | <ul><li>😊دلنشین</li><li>🧩سرگرم‌کننده</li></ul>       | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-godfather.webp)                                         | The Godfather                                         | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-glass-agency.webp)                                      | The Glass Agency                                      | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/spotlight.webp)                                             | Spotlight                                             | <ul><li>🌀مرموز</li><li>🧲گیرا</li></ul>               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/schindlers-list.webp)                                       | Schindlers List                                       | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/saving-private-ryan.webp)                                   | Saving Private Ryan                                   | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/prisoners.webp)                                             | Prisoners                                             | <ul><li>🌀مرموز</li></ul>                              | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/pirates-of-the-caribbean-the-curse-of-the-black-pearl.webp) | Pirates of the Caribbean The Curse of the Black Pearl | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/papillon.webp)                                              | Papillon                                              | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/panic-room.webp)                                            | Panic Room                                            | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/leon-the-professional.webp)                                 | Léon The Professional                                 | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/hacksaw-ridge.webp)                                         | Hacksaw Ridge                                         | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/gladiator.webp)                                             | Gladiator                                             | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/forrest-gump.webp)                                          | Forrest Gump                                          | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/city-lights.webp)                                           | City Lights                                           | <ul><li>😊دلنشین</li></ul>                             | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/cinema-paradiso.webp)                                       | Cinema Paradiso                                       | <ul><li>🧲گیرا</li><li>☕تلخ</li></ul>                  | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/american-gangster.webp)                                     | American Gangster                                     | <ul><li>🧩سرگرم‌کننده</li><li>🧲گیرا</li></ul>         | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/about-time.webp)                                            | About Time                                            | <ul><li>✨حال‌خوب‌کن</li></ul>                          | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/a-cube-of-sugar.webp)                                       | A Cube of Sugar                                       | \-                                                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-painting-pool.webp)                                     | The Painting Pool                                     | \-                                                     | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/the-lord-of-the-rings-the-two-towers.webp)                  | The Lord of the Rings The Two Towers                  | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/the-imitation-game.webp)                                    | The Imitation Game                                    | \-                                                     | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/the-great-dictator.webp)                                    | The Great Dictator                                    | \-                                                     | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/the-circus.webp)                                            | The Circus                                            | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/the-breakfast-club.webp)                                    | The Breakfast Club                                    | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/snowden.webp)                                               | Snowden                                               | \-                                                     | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/one-flew-over-the-cuckoos-nest.webp)                        | One Flew Over the Cuckoos Nest                        | \-                                                     | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/now-you-see-me.webp)                                        | Now You See Me                                        | \-                                                     | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/memories-of-murder.webp)                                    | Memories of Murder                                    | <ul><li>🌀مرموز</li></ul>                              | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/may-god-save-us.webp)                                       | May God Save Us                                       | <ul><li>🌀مرموز</li></ul>                              | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/chinatown.webp)                                             | Chinatown                                             | <ul><li>🌀مرموز</li></ul>                              | ★★★⯩   |
| ![](https://ifard.ir/assets/covers/movies/white-nights.webp)                                          | White Nights                                          | <ul><li>☕تلخ</li></ul>                                 | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/whiplash.webp)                                              | Whiplash                                              | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/wag-the-dog.webp)                                           | Wag the Dog                                           | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/total-recall.webp)                                          | Total Recall                                          | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/there-will-be-blood.webp)                                   | There Will Be Blood                                   | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-social-network.webp)                                    | The Social Network                                    | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-revenant.webp)                                          | The Revenant                                          | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-platform.webp)                                          | The Platform                                          | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-matrix.webp)                                            | The Matrix                                            | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-matrix-revolutions.webp)                                | The Matrix Revolutions                                | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-matrix-reloaded.webp)                                   | The Matrix Reloaded                                   | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-hobbit-the-desolation-of-smaug.webp)                    | The Hobbit The Desolation of Smaug                    | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-hobbit-an-unexpected-journey.webp)                      | The Hobbit An Unexpected Journey                      | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-godfather-part-ii.webp)                                 | The Godfather Part II                                 | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-girl-with-the-dragon-tattoo.webp)                       | The Girl with the Dragon Tattoo                       | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-dictator.webp)                                          | The Dictator                                          | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-dark-knight.webp)                                       | The Dark Knight                                       | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-dark-knight-rises.webp)                                 | The Dark Knight Rises                                 | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-big-short.webp)                                         | The Big Short                                         | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/state-of-play.webp)                                         | State of Play                                         | <ul><li>🌀مرموز</li></ul>                              | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/spider-man.webp)                                            | Spider-Man                                            | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/sherlock-holmes.webp)                                       | Sherlock Holmes                                       | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/sherlock-holmes-a-game-of-shadows.webp)                     | Sherlock Holmes A Game of Shadows                     | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/pulp-fiction.webp)                                          | Pulp Fiction                                          | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/predestination.webp)                                        | Predestination                                        | <ul><li>🧩سرگرم‌کننده</li><li>🌀مرموز</li></ul>        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/poor-things.webp)                                           | Poor Things                                           | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/oppenheimer.webp)                                           | Oppenheimer                                           | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/oldboy.webp)                                                | Oldboy                                                | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/nuremberg.webp)                                             | Nuremberg                                             | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/now-you-see-me-2.webp)                                      | Now You See Me 2                                      | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/noah.webp)                                                  | Noah                                                  | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/no-country-for-old-men.webp)                                | No Country for Old Men                                | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/my-left-foot.webp)                                          | My Left Foot                                          | <ul><li>☕تلخ</li></ul>                                 | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/maslahat.webp)                                              | Maslahat                                              | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/kingsman-the-secret-service.webp)                           | Kingsman The Secret Service                           | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/killers-of-the-flower-moon.webp)                            | Killers of the Flower Moon                            | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/joker.webp)                                                 | Joker                                                 | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/her.webp)                                                   | Her                                                   | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/harry-potter-and-the-sorcerers-stone.webp)                  | Harry Potter and the Sorcerers Stone                  | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/goodfellas.webp)                                            | Goodfellas                                            | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/fury.webp)                                                  | Fury                                                  | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/exodus-gods-and-kings.webp)                                 | Exodus Gods and Kings                                 | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/escape-from-pretoria.webp)                                  | Escape from Pretoria                                  | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/dog-day-afternoon.webp)                                     | Dog Day Afternoon                                     | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/close-up.webp)                                              | Close-Up                                              | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/che-part-two.webp)                                          | Che Part Two                                          | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/che-part-one.webp)                                          | Che Part One                                          | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/breakfast-at-tiffanys.webp)                                 | Breakfast at Tiffanys                                 | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/boyhood.webp)                                               | Boyhood                                               | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/begin-again.webp)                                           | Begin Again                                           | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/batman-begins.webp)                                         | Batman Begins                                         | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/amelie.webp)                                                | Amélie                                                | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/about-elly.webp)                                            | About Elly                                            | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/21.webp)                                                    | 21                                                    | \-                                                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/2001-a-space-odyssey.webp)                                  | 2001 A Space Odyssey                                  | <ul><li>🌀مرموز</li></ul>                              | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/1917.webp)                                                  | 1917                                                  | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/vertigo.webp)                                               | Vertigo                                               | \-                                                     | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/triangle-of-sadness.webp)                                   | Triangle of Sadness                                   | <ul><li>🗑️چرت</li></ul>                               | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/the-pilgrim.webp)                                           | The Pilgrim                                           | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/the-notebook.webp)                                          | The Notebook                                          | \-                                                     | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/insomnia.webp)                                              | Insomnia                                              | \-                                                     | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/inglourious-basterds.webp)                                  | Inglourious Basterds                                  | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/argo.webp)                                                  | Argo                                                  | \-                                                     | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/vicky-cristina-barcelona.webp)                              | Vicky Cristina Barcelona                              | <ul><li>🌊آبکی</li></ul>                               | ★★     |
| ![](https://ifard.ir/assets/covers/movies/v-for-vendetta.webp)                                        | V for Vendetta                                        | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/three-colors-red.webp)                                      | Three Colors Red                                      | <ul><li>🥱کسل‌کننده</li></ul>                          | ★★     |
| ![](https://ifard.ir/assets/covers/movies/the-wolf-of-wall-street.webp)                               | The Wolf of Wall Street                               | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/the-usual-suspects.webp)                                    | The Usual Suspects                                    | <ul><li>🗑️چرت</li></ul>                               | ★★     |
| ![](https://ifard.ir/assets/covers/movies/the-hobbit-the-battle-of-the-five-armies.webp)              | The Hobbit The Battle of the Five Armies              | <ul><li>🧩سرگرم‌کننده</li></ul>                        | ★★     |
| ![](https://ifard.ir/assets/covers/movies/the-departed.webp)                                          | The Departed                                          | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/tenet.webp)                                                 | Tenet                                                 | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/taxi-driver.webp)                                           | Taxi Driver                                           | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/taste-of-cherry.webp)                                       | Taste of Cherry                                       | <ul><li>🥱کسل‌کننده</li></ul>                          | ★★     |
| ![](https://ifard.ir/assets/covers/movies/son-of-god.webp)                                            | Son of God                                            | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/reservoir-dogs.webp)                                        | Reservoir Dogs                                        | <ul><li>🌊آبکی</li><li>🗑️چرت</li></ul>                | ★★     |
| ![](https://ifard.ir/assets/covers/movies/real-steel.webp)                                            | Real Steel                                            | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/public-enemies.webp)                                        | Public Enemies                                        | <ul><li>☕تلخ</li><li>🌊آبکی</li></ul>                  | ★★     |
| ![](https://ifard.ir/assets/covers/movies/miracle-at-st-anna.webp)                                    | Miracle at St. Anna                                   | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/midnight-in-paris.webp)                                     | Midnight in Paris                                     | <ul><li>🌊آبکی</li></ul>                               | ★★     |
| ![](https://ifard.ir/assets/covers/movies/gone-girl.webp)                                             | Gone Girl                                             | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/fight-club.webp)                                            | Fight Club                                            | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/dunkirk.webp)                                               | Dunkirk                                               | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/downfall.webp)                                              | Downfall                                              | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/constantine.webp)                                           | Constantine                                           | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/catch-me-if-you-can.webp)                                   | Catch Me If You Can                                   | \-                                                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/asteroid-city.webp)                                         | Asteroid City                                         | <ul><li>🥱کسل‌کننده</li></ul>                          | ★★     |
| ![](https://ifard.ir/assets/covers/movies/american-beauty.webp)                                       | American Beauty                                       | <ul></ul>                                              | ★★     |
| ![](https://ifard.ir/assets/covers/movies/the-post.webp)                                              | The Post                                              | <ul><li>🥱کسل‌کننده</li></ul>                          | ★      |
| ![](https://ifard.ir/assets/covers/movies/the-matrix-resurrections.webp)                              | The Matrix Resurrections                              | <ul><li>🌊آبکی</li></ul>                               | ★      |
| ![](https://ifard.ir/assets/covers/movies/the-killer.webp)                                            | The Killer                                            | <ul><li>🥱کسل‌کننده</li></ul>                          | ★      |
| ![](https://ifard.ir/assets/covers/movies/the-big-lebowski.webp)                                      | The Big Lebowski                                      | <ul><li>🗑️چرت</li></ul>                               | ★      |
| ![](https://ifard.ir/assets/covers/movies/the-batman.webp)                                            | The Batman                                            | <ul><li>🌊آبکی</li></ul>                               | ★      |
| ![](https://ifard.ir/assets/covers/movies/silk-road.webp)                                             | Silk Road                                             | <ul><li>🌊آبکی</li></ul>                               | ★      |
| ![](https://ifard.ir/assets/covers/movies/revolutionary-road.webp)                                    | Revolutionary Road                                    | \-                                                     | ★      |
| ![](https://ifard.ir/assets/covers/movies/mad-max-fury-road.webp)                                     | Mad Max Fury Road                                     | \-                                                     | ★      |
| ![](https://ifard.ir/assets/covers/movies/dune.webp)                                                  | Dune                                                  | \-                                                     | ★      |
| ![](https://ifard.ir/assets/covers/movies/camp-x-ray.webp)                                            | Camp X-Ray                                            | \-                                                     | ★      |
| ![](https://ifard.ir/assets/covers/movies/american-hustle.webp)                                       | American Hustle                                       | <ul><li>🗑️چرت</li></ul>                               | ★      |
| ![](https://ifard.ir/assets/covers/movies/6-underground.webp)                                         | 6 Underground                                         | <ul><li>🌊آبکی</li><li>🗑️چرت</li></ul>                | ★      |
| ![](https://ifard.ir/assets/covers/movies/1987-when-the-day-comes.webp)                               | 1987 When the Day Comes                               | \-                                                     | ★      |
<!-- SerializedQuery END -->


‌<br>‌<br>



### 📺 سریال



<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating, "`" + round(length.hours,1) + " ساعت`" FROM #Movie WHERE type = "series" SORT rating desc -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating, "`" + round(length.hours,1) + " ساعت`" FROM #Movie WHERE type = "series" SORT rating desc -->

| ("![](" + cover_self + ")")                                        | file.name          | badge                                            | rating | "`" + round(length.hours,1) + " ساعت`" |
| ------------------------------------------------------------------ | ------------------ | ------------------------------------------------ | ------ | -------------------------------------- |
| ![](https://ifard.ir/assets/covers/movies/ted-lasso.webp)          | Ted Lasso          | <ul><li>✨حال‌خوب‌کن</li></ul>                    | ★★★★★  | `24.2 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/sherlock.webp)           | Sherlock           | <ul><li>🌀مرموز</li></ul>                        | ★★★★★  | `19.4 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/breaking-bad.webp)       | Breaking Bad       | <ul><li>🧲گیرا</li></ul>                         | ★★★★★  | `50.5 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/better-call-saul.webp)   | Better Call Saul   | <ul><li>🧲گیرا</li></ul>                         | ★★★★★  | `52.6 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/westworld.webp)          | Westworld          | <ul><li>🌀مرموز</li></ul>                        | ★★★★⯩  | `34.9 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/vaziat-sefid.webp)       | Vaziat Sefid       | <ul><li>✨حال‌خوب‌کن</li></ul>                    | ★★★★⯩  | `28 ساعت`                              |
| ![](https://ifard.ir/assets/covers/movies/true-detective.webp)     | True Detective     | <ul><li>🌀مرموز</li></ul>                        | ★★★★⯩  | `32.6 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/the-sopranos.webp)       | The Sopranos       | <ul><li>😊دلنشین</li></ul>                       | ★★★★⯩  | `78 ساعت`                              |
| ![](https://ifard.ir/assets/covers/movies/the-queens-gambit.webp)  | The Queens Gambit  | <ul><li>🧲گیرا</li></ul>                         | ★★★★⯩  | `6.6 ساعت`                             |
| ![](https://ifard.ir/assets/covers/movies/money-heist.webp)        | Money Heist        | <ul><li>🧩سرگرم‌کننده</li></ul>                  | ★★★★⯩  | `38.8 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/chernobyl.webp)          | Chernobyl          | <ul><li>☕تلخ</li></ul>                           | ★★★★⯩  | `5.5 ساعت`                             |
| ![](https://ifard.ir/assets/covers/movies/adolescence.webp)        | Adolescence        | <ul><li>🧲گیرا</li></ul>                         | ★★★★⯩  | `4 ساعت`                               |
| ![](https://ifard.ir/assets/covers/movies/the-wire.webp)           | The Wire           | <ul><li>🧩سرگرم‌کننده</li></ul>                  | ★★★★   | `1 ساعت`                               |
| ![](https://ifard.ir/assets/covers/movies/the-penguin.webp)        | The Penguin        | <ul><li>🧩سرگرم‌کننده</li></ul>                  | ★★★★   | `8 ساعت`                               |
| ![](https://ifard.ir/assets/covers/movies/the-good-lord-bird.webp) | The Good Lord Bird | <ul><li>🧩سرگرم‌کننده</li><li>😊دلنشین</li></ul> | ★★★★   | `5.6 ساعت`                             |
| ![](https://ifard.ir/assets/covers/movies/peaky-blinders.webp)     | Peaky Blinders     | \-                                               | ★★★★   | `35.1 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/mobland.webp)            | MobLand            | <ul><li>🧲گیرا</li></ul>                         | ★★★★   | `7.8 ساعت`                             |
| ![](https://ifard.ir/assets/covers/movies/lie-to-me.webp)          | Lie to Me          | <ul><li>🧩سرگرم‌کننده</li></ul>                  | ★★★★   | `34.4 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/the-lion-skin.webp)      | The Lion Skin      | \-                                               | ★★★⯩   | `20 ساعت`                              |
| ![](https://ifard.ir/assets/covers/movies/the-frog.webp)           | The Frog           | \-                                               | ★★★⯩   | `12 ساعت`                              |
| ![](https://ifard.ir/assets/covers/movies/shrinking.webp)          | Shrinking          | <ul><li>✨حال‌خوب‌کن</li></ul>                    | ★★★⯩   | `5.3 ساعت`                             |
| ![](https://ifard.ir/assets/covers/movies/mindhunter.webp)         | Mindhunter         | <ul><li>🌀مرموز</li></ul>                        | ★★★⯩   | `17 ساعت`                              |
| ![](https://ifard.ir/assets/covers/movies/house-of-cards.webp)     | House of Cards     | \-                                               | ★★★⯩   | `63.4 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/homeland.webp)           | Homeland           | \-                                               | ★★★⯩   | `86.8 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/the-peripheral.webp)     | The Peripheral     | \-                                               | ★★★    | `8.3 ساعت`                             |
| ![](https://ifard.ir/assets/covers/movies/squid-game.webp)         | Squid Game         | \-                                               | ★★★    | `14.1 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/severance.webp)          | Severance          | <ul><li>🌀مرموز</li></ul>                        | ★★★    | `15.8 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/dark.webp)               | Dark               | <ul><li>🌀مرموز</li></ul>                        | ★★★    | `24.3 ساعت`                            |
| ![](https://ifard.ir/assets/covers/movies/baby-reindeer.webp)      | Baby Reindeer      | \-                                               | ★★★    | `4 ساعت`                               |
| ![](https://ifard.ir/assets/covers/movies/berlin.webp)             | Berlin             | <ul><li>🧩سرگرم‌کننده</li></ul>                  | ★★⯩    | `7.3 ساعت`                             |
| ![](https://ifard.ir/assets/covers/movies/bodies.webp)             | Bodies             | <ul><li>🌀مرموز</li></ul>                        | ★★     | `7.6 ساعت`                             |
| ![](https://ifard.ir/assets/covers/movies/tehran.webp)             | Tehran             | \-                                               | ★      | `6.4 ساعت`                             |
<!-- SerializedQuery END -->

‌<br>‌<br>

### 🎈 انیمیشن

<br> 


<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "animation" SORT rating desc -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "animation" SORT rating desc -->

| ("![](" + cover_self + ")")                                             | file.name               | badge                            | rating |
| ----------------------------------------------------------------------- | ----------------------- | -------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/the-emperors-new-groove.webp) | The Emperors New Groove | \-                               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/soul.webp)                    | Soul                    | \-                               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/inside-out.webp)              | Inside Out              | \-                               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/inside-out-2.webp)            | Inside Out 2            | \-                               | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/coco.webp)                    | Coco                    | <ul><li>🗝️ماجراجویانه</li></ul> | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/walle.webp)                   | WALL·E                  | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/treasure-planet.webp)         | Treasure Planet         | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-wild-robot.webp)          | The Wild Robot          | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/the-incredibles.webp)         | The Incredibles         | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/shrek.webp)                   | Shrek                   | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/ratatouille.webp)             | Ratatouille             | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/monsters-inc.webp)            | Monsters Inc.           | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/madagascar.webp)              | Madagascar              | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/ice-age.webp)                 | Ice Age                 | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/finding-nemo.webp)            | Finding Nemo            | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/cars.webp)                    | Cars                    | \-                               | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/zootopia.webp)                | Zootopia                | \-                               | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/toy-story.webp)               | Toy Story               | \-                               | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-lion-king-1.webp)         | The Lion King 1½        | <ul><li>🧩سرگرم‌کننده</li></ul>  | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/spirited-away.webp)           | Spirited Away           | <ul><li>🗝️ماجراجویانه</li></ul> | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/rango.webp)                   | Rango                   | \-                               | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/ponyo.webp)                   | Ponyo                   | <ul><li>🧩سرگرم‌کننده</li></ul>  | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/persepolis.webp)              | Persepolis              | \-                               | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/luca.webp)                    | Luca                    | \-                               | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/coraline.webp)                | Coraline                | \-                               | ★★★    |
<!-- SerializedQuery END -->






‌<br>‌<br>

### ⌛ فیلم کوتاه

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "short" SORT rating desc -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "short" SORT rating desc -->

| ("![](" + cover_self + ")")                                                            | file.name                              | badge                                 | rating |
| -------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/wildebeest.webp)                             | Wildebeest                             | \-                                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/timber.webp)                                 | Timber                                 | \-                                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/room-8.webp)                                 | Room 8                                 | <ul><li>🌀مرموز</li></ul>             | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/piper.webp)                                  | Piper                                  | \-                                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/partly-cloudy.webp)                          | Partly Cloudy                          | \-                                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/kutoja.webp)                                 | Kutoja                                 | \-                                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/in-the-shadow-of-the-cypress.webp)           | In the Shadow of the Cypress           | <ul><li>☕تلخ</li><li>🧲گیرا</li></ul> | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/borrowed-time.webp)                          | Borrowed Time                          | <ul><li>☕تلخ</li></ul>                | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/ant.webp)                                    | ANT                                    | \-                                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/alike.webp)                                  | Alike                                  | \-                                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/a-tale-of-momentum-inertia.webp)             | A Tale of Momentum  Inertia            | \-                                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/oo.webp)                                     | (OO)                                   | \-                                    | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/the-wonderful-story-of-henry-sugar.webp)     | The Wonderful Story of Henry Sugar     | <ul><li>🧩سرگرم‌کننده</li></ul>       | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/a-dogs-life.webp)                            | A Dogs Life                            | <ul><li>😊دلنشین</li></ul>            | ★★★★⯩  |
| ![](https://ifard.ir/assets/covers/movies/the-boy-the-mole-the-fox-and-the-horse.webp) | The Boy the Mole the Fox and the Horse | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/re-gifted.webp)                              | Re-Gifted                              | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/purl.webp)                                   | Purl                                   | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/mr-indifferent.webp)                         | Mr Indifferent                         | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/leaving-home.webp)                           | Leaving Home                           | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/inner-workings.webp)                         | Inner Workings                         | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/hair-love.webp)                              | Hair Love                              | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/geris-game.webp)                             | Geris Game                             | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/father.webp)                                 | Father                                 | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/day-night.webp)                              | Day  Night                             | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/an-object-at-rest.webp)                      | An Object at Rest                      | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/alarm.webp)                                  | Alarm                                  | \-                                    | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/zero.webp)                                   | Zero                                   | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/tomorrow.webp)                               | Tomorrow                               | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-rat-catcher.webp)                        | The Rat Catcher                        | <ul><li>🧩سرگرم‌کننده</li></ul>       | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-cure.webp)                               | The Cure                               | <ul><li>🧩سرگرم‌کننده</li></ul>       | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-box.webp)                                | The Box                                | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-blue-umbrella.webp)                      | The Blue Umbrella                      | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-black-hole.webp)                         | The Black Hole                         | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-bank.webp)                               | The Bank                               | <ul><li>🧩سرگرم‌کننده</li></ul>       | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-angler.webp)                             | The Angler                             | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/strings.webp)                                | Strings                                | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/snack-attack.webp)                           | Snack Attack                           | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/shoulder-arms.webp)                          | Shoulder Arms                          | <ul><li>🧩سرگرم‌کننده</li></ul>       | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/scrambled.webp)                              | Scrambled                              | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/runaway.webp)                                | Runaway                                | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/pour-585.webp)                               | Pour 585                               | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/our-uniform.webp)                            | Our Uniform                            | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/one-man-band.webp)                           | One Man Band                           | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/napo.webp)                                   | Napo                                   | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/less-than-human.webp)                        | Less Than Human                        | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/heavenly-appeals.webp)                       | Heavenly Appeals                       | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/for-the-birds.webp)                          | For the Birds                          | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/double-king.webp)                            | Double King                            | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/dinner-for-few.webp)                         | Dinner for Few                         | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/destiny.webp)                                | Destiny                                | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/best-friend.webp)                            | Best Friend                            | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/afternoon-class.webp)                        | Afternoon Class                        | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/22-vs-earth.webp)                            | 22 vs. Earth                           | \-                                    | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-swan.webp)                               | The Swan                               | <ul><li>🧩سرگرم‌کننده</li></ul>       | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/the-adventurer.webp)                         | The Adventurer                         | <ul><li>🧩سرگرم‌کننده</li></ul>       | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/poison.webp)                                 | Poison                                 | <ul><li>🧩سرگرم‌کننده</li></ul>       | ★★⯩    |
| ![](https://ifard.ir/assets/covers/movies/walter.webp)                                 | Walter                                 | \-                                    | ★★     |
| ![](https://ifard.ir/assets/covers/movies/some-thing.webp)                             | Some Thing                             | \-                                    | ★★     |
| ![](https://ifard.ir/assets/covers/movies/el-empleo.webp)                              | El empleo                              | \-                                    | ★★     |
| ![](https://ifard.ir/assets/covers/movies/benigni.webp)                                | Benigni                                | \-                                    | ★★     |
<!-- SerializedQuery END -->

‌<br>‌<br>

#### 🎥 مستند

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "documentaries" AND length !=null SORT rating desc -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "documentaries" AND length !=null SORT rating desc -->

| ("![](" + cover_self + ")")                                                                          | file.name                                            | badge                  | rating |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/shabnaameh.webp)                                           | Shabnaameh                                           | \-                     | ★★★★★  |
| ![](https://ifard.ir/assets/covers/movies/latarynw.webp)                                             | لاتارینو                                             | \-                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/jzyrh-mahy.webp)                                           | جزیره ماهی                                           | \-                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/bray-ps-az-mrgm.webp)                                      | برای پس از مرگم                                      | \-                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/ataq-jng.webp)                                             | اتاق جنگ                                             | \-                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/beyond-utopia.webp)                                        | Beyond Utopia                                        | \-                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/alphago.webp)                                              | AlphaGo                                              | \-                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/deep-web.webp)                                             | Deep Web                                             | \-                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/gringo-the-dangerous-life-of-john-mcafee.webp)             | Gringo The Dangerous Life of John McAfee             | \-                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/homework.webp)                                             | Homework                                             | <ul><li>☕تلخ</li></ul> | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/zero-days.webp)                                            | Zero Days                                            | \-                     | ★★★★   |
| ![](https://ifard.ir/assets/covers/movies/kwdtay-khzndh-dr-spah.webp)                                | کودتای خزنده در سپاه                                 | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/rwyahay-dm-sbh.webp)                                       | رویاهای دم صبح                                       | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/rwzgar-gl-aaqayy.webp)                                     | روزگار گل آقایی                                      | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/rdha-aabdyny-grafyk-ayrany.webp)                           | رضا عابدینی گرافیک ایرانی                            | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/jwan-mrg.webp)                                             | جوان مرگ                                             | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/jam-zhr.webp)                                              | جام زهر                                              | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/bhtan-bray-hfz-nzam.webp)                                  | بهتان برای حفظ نظام                                  | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/room-237.webp)                                             | Room 237                                             | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/american-factory.webp)                                     | American Factory                                     | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/76-minutes-and-15-seconds-with-abbas-kiarostami.webp)      | 76 Minutes and 15 Seconds with Abbas Kiarostami      | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/kabeh-abrisham.webp)                                       | Kabeh abrisham                                       | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/minimalism-a-documentary-about-the-important-things.webp)  | Minimalism A Documentary About the Important Things  | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/president-actor-of-cinema.webp)                            | President; Actor of Cinema                           | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/revolution-os.webp)                                        | Revolution OS                                        | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/running-with-the-devil-the-wild-world-of-john-mcafee.webp) | Running with the Devil The Wild World of John McAfee | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-code.webp)                                             | The Code                                             | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/xsunami.webp)                                              | Xsunami                                              | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/wild-wild-country.webp)                                    | Wild Wild Country                                    | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-inventor-out-for-blood-in-silicon-valley.webp)         | The Inventor Out for Blood in Silicon Valley         | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/the-internets-own-boy-the-story-of-aaron-swartz.webp)      | The Internets Own Boy The Story of Aaron Swartz      | \-                     | ★★★    |
| ![](https://ifard.ir/assets/covers/movies/qmar.webp)                                                 | قمار                                                 | \-                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/shkwfh-hay-zmstan.webp)                                    | شکوفه های زمستان                                     | \-                     | ★★     |
| ![](https://ifard.ir/assets/covers/movies/tpb-afk-the-pirate-bay-away-from-keyboard.webp)            | TPB AFK The Pirate Bay Away from Keyboard            | \-                     | ★★     |
<!-- SerializedQuery END -->




‌<br>‌<br>