---
title: گزارش ۱۴۰۳
aliases:
  - گزارش ۱۴۰۳
  - گزارش 1403
created: 2024-08-25
modified: 2026-04-23
publish: true
comments: true
wordcount: false
status: 🌿
cssclasses:
  - card-s
  - nowarp2
draft: false
image: "[[reports.webp]]"
---
<br>


## در یک نگاه
<br>
‌‌

<div class="overview-4">


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

<!-- QueryToSerialize: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "film" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "film" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count   | sum       |
| ---- | ------- | --------- |
| 🎬   | 36 فیلم | `75 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count   | sum          |
| ---- | ------- | ------------ |
| 📺   | 5 سریال | `112.5 ساعت` |
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

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + pages + " صفحه`", rating FROM #Book WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + pages + " صفحه`", rating FROM #Book WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                           | file.name                             | "`" + pages + " صفحه`" | rating |
| ------------------------------------------------------------------------------------- | ------------------------------------- | ---------------------- | ------ |
| ![](https://ifard.ir/assets/covers/books/mbady-swad-bsry.webp)                        | مبادی سواد بصری                       | `252 صفحه`             | 2      |
| ![](https://ifard.ir/assets/covers/books/hft-rwayt-khswsy-az-zndgy-syd-mwsy-sdr.webp) | هفت روایت خصوصی از زندگی سید موسی صدر | `192 صفحه`             | 3.5    |
| ![](https://ifard.ir/assets/covers/books/mstr-jykak.webp)                             | مستر جیکاک                            | `136 صفحه`             | 1      |
| ![](https://ifard.ir/assets/covers/books/chksh-bsry.webp)                             | چکش بصری                              | `183 صفحه`             | 3      |
| ![](https://ifard.ir/assets/covers/books/drwghhay-mslh.webp)                          | دروغ‌های مسلح                         | `344 صفحه`             | 3      |
| ![](\-)                                                                               | The Sketchnote Handbook               | `224 صفحه`             | 4      |
| ![](https://ifard.ir/assets/covers/books/dygr-akhbar-nkhwanyd.webp)                   | دیگر اخبار نخوانید                    | `152 صفحه`             | 4      |
| ![](https://ifard.ir/assets/covers/books/khwn-khda.webp)                              | خون خدا                               | `105 صفحه`             | 3      |
| ![](https://ifard.ir/assets/covers/books/atwprtrh.webp)                               | اتوپرتره                              | `92 صفحه`              | 4      |
| ![](https://ifard.ir/assets/covers/books/abn-mshghlh.webp)                            | ابن مشغله                             | `112 صفحه`             | 4      |
| ![](https://ifard.ir/assets/covers/books/nsht-nsha.webp)                              | نشت نشا                               | `80 صفحه`              | 3      |
| ![](https://ifard.ir/assets/covers/books/mhrh-hyaty.webp)                             | مهره حیاتی                            | `293 صفحه`             | 2      |
| ![](https://ifard.ir/assets/covers/books/nfhat-nft.webp)                              | نفحات نفت                             | `230 صفحه`             | 4      |
| ![](https://ifard.ir/assets/covers/books/az-ktab.webp)                                | از کتاب                               | `395 صفحه`             | 5      |
| ![](https://ifard.ir/assets/covers/books/zndgy-khwd-ra-trahy-knyd.webp)               | زندگی خود را طراحی کنید               | `260 صفحه`             | 3.5    |
| ![](https://ifard.ir/assets/covers/books/msyr-shghly.webp)                            | مسیر شغلی                             | `92 صفحه`              | 1      |
| ![](https://ifard.ir/assets/covers/books/shghl-mwrd-alaqh.webp)                       | شغل مورد علاقه                        | `170 صفحه`             | 3      |
| ![](https://ifard.ir/assets/covers/books/shyb.webp)                                   | شیب                                   | `65 صفحه`              | 3      |
| ![](https://ifard.ir/assets/covers/books/dr-staysh-btalt.webp)                        | در ستایش بطالت                        | `36 صفحه`              | 2      |
| ![](https://ifard.ir/assets/covers/books/dr-staysh-atlaf-wqt.webp)                    | در ستایش اتلاف وقت                    | `102 صفحه`             | 3      |
| ![](https://ifard.ir/assets/covers/books/bwf-kwr.webp)                                | بوف کور                               | `95 صفحه`              | 2      |
| ![](https://ifard.ir/assets/covers/books/mym-w-aan-dygran.webp)                       | میم و آن دیگران                       | `166 صفحه`             | 2      |
<!-- SerializedQuery END -->

**از کتاب** بهترین کتابی بود که امسال خوندم. ای کاش میشد همه محتواهای متمم رو مثل کتاب عرضه کرد. اصلا یه حس و حال دیگه ای داره.

طراحی و صفحه آرایی کتاب هم خیلی خوب بود. طرح جلد با هوشمندی از کنار هم قرار گرفتن کتابها طراحی شده. یک کتاب هم اخیرا از انتشارات پنگوئن دیدم که طرح جلدش مشابه همین دیزاین رو داشت. ([+](https://www.penguinrandomhouse.com/books/292766/the-shadow-of-the-wind-by-carlos-ruiz-zafon/9780143126393/readers-guide/)) تصویرسازی‌های داخل کتاب هم در عین مینیمال و ساده بودن مفاهیم انتزاعی جالبی داشتند.

چند کتاب هم در مورد مسیر شغلی خوندم. از بین اون‌ها **کتاب زندگی خود را طراحی کنید** قابل استفاده‌تر بود.

کتاب **The Sketchnote Handbook** هم ایده‌های خوبی داشت. اکثر تمریناتش رو انجام دادم. کتاب در مورد یک شیوه یادداشت برداری به اسم اسکچ نوته. اینطوری که شما مفاهیم رو به المان‌های بصری تبدیل می‌کنید تا بهتر توی ذهنتون ماندگار بشه. نویسنده کتاب آقای Mike Rohde فعالیت‌های زیادی توی این زمینه کرده. هم دوره داره هم پادکست. با افراد مختلفی که توی این زمینه فعالیت می‌کنند گفتگو می‌کنه. [از اینجا](https://sketchnotearmy.com/podcast) می‌تونید پادکست هاشو ببینید.

کتاب **ابن مشغله** رو هم خوندم. خوب بود ولی من کتاب **ابوالمشاغل** رو بیشتر دوست داشتم.

<br><br>

### 🎓 دوره‌های آموزشی

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + round(length.hours,1) + " ساعت`", rating FROM #Course WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + round(length.hours,1) + " ساعت`", rating FROM #Course WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                            | file.name                             | "`" + round(length.hours,1) + " ساعت`" | rating |
| -------------------------------------------------------------------------------------- | ------------------------------------- | -------------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/courses/aamwzsh-css-rakt.webp)                      | آموزش css - راکت                      | `11.5 ساعت`                            | 4      |
| ![](https://ifard.ir/assets/covers/courses/rwayt-ansan-fsl-4.webp)                     | روایت انسان (فصل 4)                   | `15 ساعت`                              | 3      |
| ![](https://ifard.ir/assets/covers/courses/dwrh-jama-trahy-msyr-shghly.webp)           | دوره جامع طراحی مسیر شغلی             | `11 ساعت`                              | 3      |
| ![](https://ifard.ir/assets/covers/courses/fayl-swty-drbarh-mwfqyt-w-brnamh-ryzy.webp) | فایل صوتی درباره موفقیت و برنامه ریزی | `1.8 ساعت`                             | 4      |
| ![](https://ifard.ir/assets/covers/courses/dwrh-jama-astybl-dyfywzhn.webp)             | دوره جامع استیبل دیفیوژن              | `20 ساعت`                              | 4      |
| ![](https://ifard.ir/assets/covers/courses/dwrh-swty-aamwzsh-hdf-gthary.webp)          | دوره صوتی آموزش هدف گذاری             | `7.8 ساعت`                             | 5      |
| ![](https://ifard.ir/assets/covers/courses/tnz-bank.webp)                              | طنز بانک                              | `8.2 ساعت`                             | 3      |
<!-- SerializedQuery END -->



**دوره CSS** واقعا نجاتم داد! قبلاً برای وب‌سایتم کلی زحمت می‌کشیدم و دست و پا می‌زدم تا یه چیزی رو اصلاح کنم. ولی حالا که از پایه یاد گرفتم کارم آسون‌تر شده. با هوش مصنوعی هم بهتر می‌تونم تعامل کنم و می‌دونم که چه طوری باید ازش درخواست کنم تا خروجی بهتری بهم بده.

از متمم دوره **هدف‌گذاری** و **موفقیت‌و برنامه ریزی** رو گوش کردم. دوره هدف‌گذاری رو باید یه مرتبه دیگه گوش بدم و یادداشت برداری کنم. هنوز نتونستم کامل به کار بگیرمش.

دوره **استیبل دیفیوژن** هم خیلی خوب بود. تا حالا هر دوره ای از جواد نبوی گرفتم راضی بودم. واقعا آموزش‌های باکیفیتی داره. همین استیبل رو بقیه آموزش میدن یه سری ورک‌فلوی آماده تحویلت میدن اما جواد نبوی همه چیز رو از پایه بهت میگه. اینطوری فرایندش رو درک می‌کنی و دیگه محتاج فایل آماده نیستی.

<br><br>


### 🎙 پادکست

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Podcast WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Podcast WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                                              | file.name                                               | "`" + length.minute + " دقیقه`" | rating |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/podcasts/sryal-ashw.webp)                                             | سریال اشو                                               | `2327 دقیقه`                    | 5      |
| ![](https://ifard.ir/assets/covers/podcasts/jafkry-fsl-23-syamk-qasmy.webp)                              | جافکری فصل 23 - سیامک قاسمی                             | `309 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/sryal-watrgyt.webp)                                          | سریال واترگیت                                           | `284 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/channelb.webp)                                               | مَسترمایند                                              | `386 دقیقه`                     | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/padkst-sryaly-sylk-rwd.webp)                                 | پادکست سریالی سیلک رود                                  | `261 دقیقه`                     | 5      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-mhmd-anayty-bnyangthar-tamyraky.webp)               | گفتگو با محمد عنایتی  بنیان‌گذار تعمیراکی               | `106 دقیقه`                     | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-ahwra-nyazy.webp)                                   | گفتگو با اهورا نیازی                                    | `113 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-sayd-ansaryan-bnyad-algn.webp)                      | گفتگو با سعید انصاریان ‌ بنیاد الگن                     | `152 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/twrj-sabry-wnd-brnd-dyzaynr.webp)                            | تورج صابری وند - برند دیزاینر                           | `145 دقیقه`                     | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-mhdy-ahmdy-rahandazy-rsanh-aazad.webp)              | گفتگو با مهدی احمدی - راه‌اندازی رسانه آزاد             | `95 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/mhsn-hsam-mzahry-jamahshnas.webp)                            | محسن حسام مظاهری - جامعه‌شناس                           | `144 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-mrtdhy-shjaay-draamd-dlary.webp)                    | گفتگو با مرتضی شجاعی درآمد دلاری                        | `142 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/estgah-ai.webp)                                              | تفاوت‌های هوش مصنوعی در صنعت و دانشگاه                  | `43 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/ardam.webp)                                                  | گفتگو با علی آردم  (2 اپیزود)                           | `170 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-pyman-krmy.webp)                                    | گفتگو با پیمان کرمی                                     | `121 دقیقه`                     | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-amyrhsyn-natqy-bnyangthar-kwyyz-aaf-kyngz.webp)     | گفتگو با امیرحسین ناطقی بنیان‌گذار کوییز آف کینگز       | `110 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-zwje-twlydknnd-asl.webp)                            | گفتگو با زوجِ تولیدکنندۀ عسل                            | `84 دقیقه`                      | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/amyrabas-abdalaly-ywtywbr.webp)                              | امیرعباس عبدالعلی یوتیوبر                               | `110 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/prssh-w-paskh-ba-dktr-aly-khzayy-7-apyzwd.webp)              | پرسش و پاسخ با دکتر علی خزایی (7 اپیزود)                | `496 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/radywgyk-shmarh-147-cht-jy-py-ty.webp)                       | رادیوگیک – شماره ۱۴۷ – چت جی پی تی                      | `53 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-mhdy-aakhy-drbarh-mdlhay-zbany-bzrg.webp)           | گفتگو با مهدی آخی درباره مدل‌های زبانی بزرگ             | `144 دقیقه`                     | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-mhmdaly-sdrayy-karshnas-prdazsh-zbanhay-tbyay.webp) | گفتگو با محمدعلی صدرایی - کارشناس پردازش زبان‌های طبیعی | `107 دقیقه`                     | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/estgah-ai.webp)                                              | ایستگاه هوش مصنوعی اپیزود 1-10                          | `180 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-syawsh-sfaryanpwr-zhwrnalyst-w-padkstr.webp)        | گفتگو با سیاوش صفاریان‌پور  ژورنالیست و پادکستر         | `70 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-amyr-mwswy-twr-lydr.webp)                           | گفتگو با امیر موسوی تور لیدر                            | `128 دقیقه`                     | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/hsyn-klhr.webp)                                              | حسین کلهر                                               | `70 دقیقه`                      | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/drbarhy-jady.webp)                                           | درباره‌ی جادی                                           | `115 دقیقه`                     | 5      |
| ![](https://ifard.ir/assets/covers/podcasts/jafkry-fsl-20-frwzan-nzhad.webp)                             | جافکری فصل 20 - فروزان نژاد                             | `143 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/maggie-appletons-journey-to-design.webp)                     | Maggie Appleton's journey to design                     | `64 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/amirhosseinghiasi.webp)                                      | گفتگو با امیرحسین قیاسی                                 | `137 دقیقه`                     | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/abotaleb.webp)                                               | گفتگو با ابوطالب حسینی                                  | `83 دقیقه`                      | 4      |
| ![](https://ifard.ir/assets/covers/podcasts/gftgw-ba-salh-skhndan.webp)                                  | گفتگو با صالح سخندان                                    | `75 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/jafkry-fsl-19-lykly-mhsny.webp)                              | جافکری فصل 19 - لیکلی محسنی                             | `246 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-mylad-nwry.webp)                                 | گفت و گو با میلاد نوری                                  | `162 دقیقه`                     | 5      |
| ![](https://ifard.ir/assets/covers/podcasts/gft-w-gw-ba-sayd-hsyn-zadh.webp)                             | گفت و گو با سعید حسین زاده                              | `111 دقیقه`                     | 2      |
| ![](https://ifard.ir/assets/covers/podcasts/gp-w-gft-mhmdrdha-shabanaly-w-aadl-talby.webp)               | گپ و گفت محمدرضا شعبانعلی و عادل طالبی                  | `77 دقیقه`                      | 3      |
<!-- SerializedQuery END -->




امسال خیلی اتفاقی پادکست های [چنل بی](https://channelbpodcast.com/) رو گوش دادم. **راس اولبریکت** 21 ژانویه توسط ترامپ آزاد شد منم تا حالا چیزی درموردش نشینده بودم. شروع کردم به سرچ کردن و رسیدم به پادکست سریالی چنل بی. معرکه بود. با وجود اینکه صوتی بود و هیچ تصویر و فیلمی نداشت اما روایتش پرهیجان و جذاب بود. اینقدر برام جذاب بودم مستند **Deep Web** و فیلم **Silk Road** رو هم دیدم. فیلمش افتضاح بود ولی مستندش خوب بود.

چند قسمت دیگه هم از چنل بی گوش کردم. **مستر مایند**، **واترگیت** و **اشو**. اینا هم خوب بودند. با اینکه قبلا پادکست [بی پلاس](https://bpluspodcast.com/) رو گوش داده بودم اما نمیدونم چرا سراغ چنل بی نرفتم. 

پادکست **کارگاه** هم برای اولین بار گوش کردم. بد نبود اما خیلی هم تعریفی نداشت.

پادکست **کارنکن** هم که خیلی وقته دنبال میکنم. البته اپیزود های قدیمی شون رو بیشتر دوست داشتم. داستان زندگی اون قبلی ها قابل استفاده تر بود.


<br><br>

### 🍿 فیلم و سریال


#### فیلم

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, rating FROM #Movie WHERE type = "film" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, rating FROM #Movie WHERE type = "film" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                    | file.name                      | badge                                     | rating |
| ------------------------------------------------------------------------------ | ------------------------------ | ----------------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/where-is-the-friends-house.webp)     | Where Is the Friend's House    | <ul><li>😊دلنشین</li></ul>                | 4      |
| ![](https://ifard.ir/assets/covers/movies/silk-road.webp)                      | Silk Road                      | <ul><li>🌊آبکی</li></ul>                  | 1      |
| ![](https://ifard.ir/assets/covers/movies/goodfellas.webp)                     | Goodfellas                     | <ul><li>🧩سرگرم‌کننده</li></ul>           | 3      |
| ![](https://ifard.ir/assets/covers/movies/boyhood.webp)                        | Boyhood                        | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/her.webp)                            | Her                            | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/my-left-foot.webp)                   | My Left Foot                   | <ul><li>☕تلخ</li></ul>                    | 3      |
| ![](https://ifard.ir/assets/covers/movies/the-big-short.webp)                  | The Big Short                  | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/spotlight.webp)                      | Spotlight                      | <ul><li>🌀مرموز</li><li>🧲گیرا</li></ul>  | 4      |
| ![](https://ifard.ir/assets/covers/movies/good-will-hunting.webp)              | Good Will Hunting              | <ul><li>🧲گیرا</li><li>😊دلنشین</li></ul> | 5      |
| ![](https://ifard.ir/assets/covers/movies/a-beautiful-mind.webp)               | A Beautiful Mind               | <ul><li>🌀مرموز</li></ul>                 | 4.5    |
| ![](https://ifard.ir/assets/covers/movies/v-for-vendetta.webp)                 | V for Vendetta                 | \-                                        | 2      |
| ![](https://ifard.ir/assets/covers/movies/there-will-be-blood.webp)            | There Will Be Blood            | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/gladiator.webp)                      | Gladiator                      | \-                                        | 4      |
| ![](https://ifard.ir/assets/covers/movies/one-flew-over-the-cuckoos-nest.webp) | One Flew Over the Cuckoos Nest | \-                                        | 3.5    |
| ![](https://ifard.ir/assets/covers/movies/oldboy.webp)                         | Oldboy                         | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/the-usual-suspects.webp)             | The Usual Suspects             | <ul><li>🗑️چرت</li></ul>                  | 2      |
| ![](https://ifard.ir/assets/covers/movies/saving-private-ryan.webp)            | Saving Private Ryan            | \-                                        | 4      |
| ![](https://ifard.ir/assets/covers/movies/the-imitation-game.webp)             | The Imitation Game             | \-                                        | 3.5    |
| ![](https://ifard.ir/assets/covers/movies/taste-of-cherry.webp)                | Taste of Cherry                | <ul><li>🥱کسل‌کننده</li></ul>             | 2      |
| ![](https://ifard.ir/assets/covers/movies/leon-the-professional.webp)          | Léon The Professional          | \-                                        | 4      |
| ![](https://ifard.ir/assets/covers/movies/the-batman.webp)                     | The Batman                     | <ul><li>🌊آبکی</li></ul>                  | 1      |
| ![](https://ifard.ir/assets/covers/movies/dog-day-afternoon.webp)              | Dog Day Afternoon              | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/310-to-yuma.webp)                    | 310 to Yuma                    | <ul><li>🧩سرگرم‌کننده</li></ul>           | 5      |
| ![](https://ifard.ir/assets/covers/movies/21.webp)                             | 21                             | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/taxi-driver.webp)                    | Taxi Driver                    | \-                                        | 2      |
| ![](https://ifard.ir/assets/covers/movies/the-big-lebowski.webp)               | The Big Lebowski               | <ul><li>🗑️چرت</li></ul>                  | 1      |
| ![](https://ifard.ir/assets/covers/movies/the-glass-agency.webp)               | The Glass Agency               | \-                                        | 4      |
| ![](https://ifard.ir/assets/covers/movies/wag-the-dog.webp)                    | Wag the Dog                    | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/close-up.webp)                       | Close-Up                       | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/reservoir-dogs.webp)                 | Reservoir Dogs                 | <ul><li>🌊آبکی</li><li>🗑️چرت</li></ul>   | 2      |
| ![](https://ifard.ir/assets/covers/movies/the-departed.webp)                   | The Departed                   | \-                                        | 2      |
| ![](https://ifard.ir/assets/covers/movies/the-silence-of-the-lambs.webp)       | The Silence of the Lambs       | <ul><li>🧲گیرا</li></ul>                  | 5      |
| ![](https://ifard.ir/assets/covers/movies/amelie.webp)                         | Amélie                         | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/che-part-two.webp)                   | Che Part Two                   | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/che-part-one.webp)                   | Che Part One                   | \-                                        | 3      |
| ![](https://ifard.ir/assets/covers/movies/maslahat.webp)                       | Maslahat                       | \-                                        | 3      |
<!-- SerializedQuery END -->


بهترین فیلم هایی که امسال دیدم اینا بودند:
- Good Will Hunting
- 310 to Yuma
- The Silence of the Lambs

 **رابین ویلیامز** و **راسل کرو** رو تازه کشف کردم😊 فیلم هایی که تا حالا ازشون دیدم خیلی خوب بوده.

<br><br>


#### سریال

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, badge, rating FROM #Movie WHERE type = "series" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, badge, rating FROM #Movie WHERE type = "series" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                   | file.name     | badge                           | rating |
| ------------------------------------------------------------- | ------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/chernobyl.webp)     | Chernobyl     | <ul><li>☕تلخ</li></ul>          | 4.5    |
| ![](https://ifard.ir/assets/covers/movies/mindhunter.webp)    | Mindhunter    | <ul><li>🌀مرموز</li></ul>       | 3.5    |
| ![](https://ifard.ir/assets/covers/movies/the-penguin.webp)   | The Penguin   | <ul><li>🧩سرگرم‌کننده</li></ul> | 4      |
| ![](https://ifard.ir/assets/covers/movies/the-sopranos.webp)  | The Sopranos  | <ul><li>😊دلنشین</li></ul>      | 4.5    |
| ![](https://ifard.ir/assets/covers/movies/baby-reindeer.webp) | Baby Reindeer | \-                              | 3      |
<!-- SerializedQuery END -->



طولانی ترین سریالی که دیدم **سوپرانوز** بود. با اینکه تعلیق و هیجان زیادی نداشت اما دنبال کردن داستانش رو دوست داشتم. الان که همه مغزمون به ریل های کوتاه اینستاگرام عادت کرده دیدن امثال این سریال ها خیلی سخت شده. خود من یه روزایی حوصله دیدنش رو نداشتم. اما بعد چند روز دلم برای داستان و اتفاقاتش تنگ میشد. 

به یک روال منطقی هم در دیدن سریال رسیدم. اینکه مثل آدم بیشنم و روزی یک قسمت ببینم نه بیشتر. قبلا میشستم یک فصل رو توی یک روز تموم میکردم. سریال هایی که هیجان و تعلیق زیادی دارند مثل **مانی هیست** و **برکینگ بد** رو اینطوری دیدم. اصلا عادت خوبی نبود.

سریال **چرنوبیل** هم فوق العاده بود. حتما پیشنهاد میکنم ببینید.

<br><br>

#### انیمیشن

<br> 


<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "animation" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "animation" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                    | file.name      | "`" + length.minute + " دقیقه`" | rating |
| -------------------------------------------------------------- | -------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/the-wild-robot.webp) | The Wild Robot | `102 دقیقه`                     | 4      |
| ![](https://ifard.ir/assets/covers/movies/inside-out-2.webp)   | Inside Out 2   | `96 دقیقه`                      | 5      |
| ![](https://ifard.ir/assets/covers/movies/coraline.webp)       | Coraline       | `100 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/movies/persepolis.webp)     | Persepolis     | `96 دقیقه`                      | 3      |
<!-- SerializedQuery END -->


انیمیشن **Inside Out 2** مثل قبلی اش عالی بود. چه قدر سازندگانش ذهن خلاقی دارند.

انیمیشن **The Wild Robot** هم امسال اومد. اصل داستانش یه کم تکراری بود اما روایت و پردازشش خوب بود.

<br><br>

#### فیلم کوتاه

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "short" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "short" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                            | file.name                              | "`" + length.minute + " دقیقه`" | rating |
| -------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/napo.webp)                                   | Napo                                   | `16 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/inner-workings.webp)                         | Inner Workings                         | `6 دقیقه`                       | 4      |
| ![](https://ifard.ir/assets/covers/movies/tomorrow.webp)                               | Tomorrow                               | `16 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/our-uniform.webp)                            | Our Uniform                            | `7 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/in-the-shadow-of-the-cypress.webp)           | In the Shadow of the Cypress           | `20 دقیقه`                      | 5      |
| ![](https://ifard.ir/assets/covers/movies/dinner-for-few.webp)                         | Dinner for Few                         | `10 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/the-box.webp)                                | The Box                                | `12 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/the-boy-the-mole-the-fox-and-the-horse.webp) | The Boy the Mole the Fox and the Horse | `32 دقیقه`                      | 4      |
| ![](https://ifard.ir/assets/covers/movies/destiny.webp)                                | Destiny                                | `5 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/best-friend.webp)                            | Best Friend                            | `6 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/hair-love.webp)                              | Hair Love                              | `7 دقیقه`                       | 4      |
| ![](https://ifard.ir/assets/covers/movies/strings.webp)                                | Strings                                | `10 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/afternoon-class.webp)                        | Afternoon Class                        | `3 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/oo.webp)                                     | (OO)                                   | `6 دقیقه`                       | 5      |
| ![](https://ifard.ir/assets/covers/movies/partly-cloudy.webp)                          | Partly Cloudy                          | `6 دقیقه`                       | 5      |
| ![](https://ifard.ir/assets/covers/movies/day-night.webp)                              | Day  Night                             | `6 دقیقه`                       | 4      |
| ![](https://ifard.ir/assets/covers/movies/22-vs-earth.webp)                            | 22 vs. Earth                           | `6 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/less-than-human.webp)                        | Less Than Human                        | `6 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/alike.webp)                                  | Alike                                  | `8 دقیقه`                       | 5      |
| ![](https://ifard.ir/assets/covers/movies/the-blue-umbrella.webp)                      | The Blue Umbrella                      | `7 دقیقه`                       | 3      |
| ![](https://ifard.ir/assets/covers/movies/borrowed-time.webp)                          | Borrowed Time                          | `7 دقیقه`                       | 5      |
| ![](https://ifard.ir/assets/covers/movies/zero.webp)                                   | Zero                                   | `13 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/double-king.webp)                            | Double King                            | `10 دقیقه`                      | 3      |
<!-- SerializedQuery END -->


بهترین فیلم کوتاه هایی که دیدم اینا بود:
- In the Shadow of the Cypress (در سایه سرو)
- Borrowed Time
- Alike


<br><br>

#### مستند

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "documentaries" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", rating FROM #Movie WHERE type = "documentaries" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover_self + ")")                                                | file.name                  | "`" + length.minute + " دقیقه`" | rating |
| -------------------------------------------------------------------------- | -------------------------- | ------------------------------- | ------ |
| ![](https://ifard.ir/assets/covers/movies/wild-wild-country.webp)          | Wild Wild Country          | `403 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/movies/president-actor-of-cinema.webp)  | President; Actor of Cinema | `75 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/kabeh-abrisham.webp)             | Kabeh abrisham             | `43 دقیقه`                      | 3      |
| ![](https://ifard.ir/assets/covers/movies/deep-web.webp)                   | Deep Web                   | `90 دقیقه`                      | 4      |
| ![](https://ifard.ir/assets/covers/movies/american-factory.webp)           | American Factory           | `110 دقیقه`                     | 3      |
| ![](https://ifard.ir/assets/covers/movies/rdha-aabdyny-grafyk-ayrany.webp) | رضا عابدینی گرافیک ایرانی  | `25 دقیقه`                      | 3      |
<!-- SerializedQuery END -->


بعد از دیدن سریال چرنوبیل علاقه من شدم در مورد شوروی بیشتر بدونم. فعلا مستند **پرزیدنت آکتور سینما** رو دیدم که بد نبود. اما دنبال منابع بهتر و موثق تری هستم که سوگیری کمتری داشته باشه.

 بعد از شنیدن پادکست اشو هم ترغیب شدم مستند **Wild Wild Country** رو ببینم. یه کم طولانی بود اما جالب بود.

<br><br>


## بخش دوم: ردیابی عادت


### 🏋🏻 ورزش

![[150925.webp]]

امسال **273 روز** ورزش کردم.

اگر [[report1402#🏋🏻 ورزش| گزارش پارسال]] رو خونده باشید اطلاع دارید که **13 کیلو** کم کردم. همش هم با هوازی و رژیم معمولی بود. امسال برای اینکه عضله از دست ندم رفتم باشگاه بدنسازی. هم برنامه تمرین گرفتم هم برنامه تغذیه. وعده های غذایی‌ام بیشتر شده، قبلا سه وعده میخوردم الان 5-4 وعده میخورم. ورزش‌های هوازی رو کمتر انجام دادم و بیشتر تمرکزم روی تمرین های قدرتی هست تا عضله بسازم. امسال تقریبا وزنم ثابت بود و فقط 2 سانت از دور شکمم کم شد.

پیش متخصص تغذیه رفتم و **تست بادی آنالیز** دادم. اکثر پارامتراش نرمال بود. کلا بدنم 13 کیلو چربی داره و 20 درصد از بدنم رو تشکیل میده. با اینکه نرماله اما توصیه شده بود که 4 کیلوش کم بشه. کات نشدن کامل عضلاتم هم به خاطر همین چربیه اضافه است. بخش عمده اش هم چربی میان تنه و دور شکمه.

عمکلرد راضی کننده ای داشتم اما هنوز جای کار داره. باید این چربی های اضافه رو بسوزونم. همزمان باید عضله بسازم که بدنم تحلیل نره. کار سختیه و خیلی هم زمان بره. 

توی یادداشت [[fitness-and-healthy-eating|تجربه من از ورزش و تغذیه سالم]] بیشتر درمورد این قضیه توضیح دادم.

<br><br>

### 📖 مطالعه

![[150817.webp]]

امسال **152 روز** مطالعه کردم که مجموعا **304 پومودورو** شد.

اوایل سال مطالعه خوبی داشتم اما این اواخر تنبلی کردم. یه بخشی اش هم به خاطر این بود که کتاب جذابی نداشتم بخونم. اردیبهشت از نمایشگاه این کتابا رو گرفتم:

![[20240517_102747.webp | 400]]

اونایی اش که برام جذاب بود رو همون اوایل خوندم. دیگه یه سری کتاب های عادی مونده بود که حوصله نداشتم بخونم. به خاطر همین این اواخر مطالعه‌ام کم شد.


<br><br>

### 📱 رسانه‌های اجتماعی

![[150700.webp]]
امسال **557 ساعت** توی سوشال مدیا بودم. ماه های اول که هنوز از هبیت‌ترکر استفاده نمی‌کردم معمولا روی 4 تا 5 ساعت وقتم رو می‌گرفت. از وقتی شروع کردم به ردیابی مدت زمانش کاهش پیدا کرد و به روی یک دو ساعت رسید. توی تقویم هم مشخصه که ماه های اول رنگ تیره تری داره. 

برای محاسبه مدت زمانش هم از اپلیکیشن [StayFree](https://stayfreeapps.com/) استفاده کردم. یه دسته جدید ساختم و اینستاگرام و تلگرام و توییتر رو بهش اضافه کردم که مجموع مدت زمان استفاده از این اپلیکیشن ها رو به صورت مجزا محاسبه کنه.

با این حال هنوز زمان زیادی صرف شده. برای اینکه بهتر درکش کنم با یه مقدار ملموس تر مقایسه اش کردم. مثلا اگر این زمان رو صرف **راه‌رفتن** کرده بودم معادل **2480 کیلومتر** پیاده رفته بودم. این مسافت تقریبا معادل پیاده روی از [ارومیه تا سیستان بلوچستان](https://maps.app.goo.gl/VwHCHPYeNgq6L9Zk9) میشه: 
![[report1403-1776714839935.webp|500]]




<br><br>

## بخش سوم: پروژه‌ها

[[habit-tracker-in-obsidian|هبیت ترکر]]: از هبیت ترکری که خودم استفاده میکردم یک تمپلیت ساختم تا بقیه هم بتونن ازش استفاده کنن. 

[اکستنشن Obsibook](https://github.com/fardm/ObsiBook): یک افزونه هست برای گوگل کروم. کمک میکنه کتاب هایی که مطالعه کردیم رو از سایت های مختلف وارد ابسیدین کنیم.

[جعبه ابزار طراحی](https://fardm.github.io/toolbox/): من سایت های مختلفی که برای طراحی و تولید محتوا استفاده می کردم رو روی مرورگر بوکمارک کرده بودم. به ذهنم رسید این ها رو به اشتراک بگذارم و یه کالکشن ازشون بسازم. نتیجه اش شد این سایت که توی دسته های مختلف میتونید سایت های مناسب رو پیدا کنید.

<br><br>

## ارزیابی

خب امسال نسبت سال قبل آمار و ارقام کامل تری رو تونستم ثبت کنم. از هبیت ترکر استفاده کردم و مدت زمان مطالعه و سوشال مدیا رو ثبت کردم. 

با عدد هایی که داشتم یه حساب کتاب کردم ببینم توی یکسال چند درصد رو به چه کاری اختصاص دادم. وقتی نسبت به کل سال حساب میکنم تازه متوجه میشم که اون عددا واقعا بزرگ نیستند و با توجه به این همه فرصتی که داشتم خیلی کم کاری کردم. سال دیگه باید جلوی این فرصت سوزی ها رو بگیرم.

طبیعیه هم هست چون من هیچ الزامی برای خودم تعریف نکرده بودم. خودم رو ملزم نکرده بودم که حتما باید فلان مقدار مطالعه کنم. یا نباید ساعت چرخیدن توی سوشال مدیا از فلان مقدار بیشتر بشه. نمی خواستم به خودم سخت بگیرم. حتی توی ورزش کردن هم تعهدی نداشتم. 

اینکه تونستم ورزش رو مستمر انجام بدم و نتیجه رضایت بخش بگیرم به خاطر این بود که تبدیل شده بود به عادت و اصلا اجباری در کار نبود. البته سال 1402 که تازه شروع کرده بودم به ورزش کردن یه مقدار سخت گیری و تعهد لازم بود. اون موقع تنبلی میکردم و دنبال فرصتی بودم که از زیرش در برم. به خاطر همین باید یه سری برنامه مشخص تعیین میکردم. اما بعدش دیگه تبدیل شد به عادت. بدون اینکه تعهدی بسته باشم خودم مثل بچه آدم میرفتم ورزش میکردم.

فکر میکنم باید برای مطالعه هم همین روش رو درپیش بگیرم. شاید اوایل لازم به سخت گیری باشه. بعدش که تبدیل شد به عادت دیگه خودش درست میشه.

خلاصه اینکه نسبت به سال قبل پیشرفت داشتم اما چشمگیر نبوده. نتیجه رضایت بخش نیست اما قابل قبوله.

یه نکته دیگه رو هم تازه متوجه شدم. اینکه یادگیری بهانه ای شده برای اینکه از زیر کار دربرم. بخش عمده فعالیتم رو اختصاص دادم به یادگیری. یادگرفتن کار راحت و لذت بخشیه. مطالعه میکنی، دوره میبنی. اما عمل کردن و به‌کاربستن انرژی بیشتری میخواد. به خاطر همین مغز ازش فرار میکنه. منم دچار همین مشکل شدم. الان بخش مصرف محتوا خیلی پر رنگ‌تر و شلوغ‌تر از بخش پروژه‌ها و خروجی‌هاست. باید سال دیگه تمرکزم رو بذارم روی عملگرایی. بیشتر بنویسم، بیشتر بسازم، بیشتر خلق کنم.


