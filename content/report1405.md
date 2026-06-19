---
title: گزارش ۱۴۰۵
aliases:
  - گزارش ۱۴۰۵
created: 2026-04-18
modified: 2026-04-19
comments: true
wordcount: false
status: 🌱
cssclasses:
  - card-s
  - nowarp2
  - c3-4
draft: true
image: "[[reports.webp]]"
---
<br> 

## در یک نگاه

<br> 

<div class="overview-4">


<!-- QueryToSerialize: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2026-03-21") AND date <= date("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2026-03-21") AND date <= date("2027-03-20") GROUP BY "" -->

| icon | count      | sum         |
| ---- | ---------- | ----------- |
| 📚   | 8 جلد کتاب | `2344 صفحه` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2026-03-21") AND date <= date("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎓" as icon, length(rows) + " دوره‌" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2026-03-21") AND date <= date("2027-03-20") GROUP BY "" -->

| icon | count   | sum      |
| ---- | ------- | -------- |
| 🎓   | 1 دوره‌ | `6 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2026-03-21") AND date <= date("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2026-03-21") AND date <= date("2027-03-20") GROUP BY "" -->

| icon | count    | sum        |
| ---- | -------- | ---------- |
| 🎙   | 4 پادکست | `5.5 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "film" AND length != null AND date >= date("2026-03-21") AND date <= date("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "film" AND length != null AND date >= date("2026-03-21") AND date <= date("2027-03-20") GROUP BY "" -->

| icon | count  | sum         |
| ---- | ------ | ----------- |
| 🎬   | 7 فیلم | `13.7 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2026-03-21") AND date <= date("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2026-03-21") AND date <= date("2027-03-20") GROUP BY "" -->

| icon | count | sum |
| ---- | ----- | --- |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🏋️" as icon, "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`", "ورزش کردم" FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🏋️" as icon, "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`", "ورزش کردم" FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->

| icon | "`" + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز`" | "ورزش کردم" |
| ---- | ----------------------------------------------------------------- | ----------- |
| 🏋️  | `41 روز`                                                          | ورزش کردم   |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "📖" as icon, "`" + round(sum(rows.📚reading)) + " پومودورو`", "مطالعه کردم" FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📖" as icon, "`" + round(sum(rows.📚reading)) + " پومودورو`", "مطالعه کردم" FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->

| icon | "`" + round(sum(rows.📚reading)) + " پومودورو`" | "مطالعه کردم" |
| ---- | ----------------------------------------------- | ------------- |
| 📖   | `103 پومودورو`                                  | مطالعه کردم   |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "📱" as icon, "`" + round(sum(rows.📱social)) + " ساعت`", "در سوشال‌مدیا بودم" FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📱" as icon, "`" + round(sum(rows.📱social)) + " ساعت`", "در سوشال‌مدیا بودم" FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->

| icon | "`" + round(sum(rows.📱social)) + " ساعت`" | "در سوشال‌مدیا بودم" |
| ---- | ------------------------------------------ | -------------------- |
| 📱   | `5 ساعت`                                   | در سوشال‌مدیا بودم   |
<!-- SerializedQuery END -->


</div>

<br><br>

## محتواها


### 📚 کتاب

<br><br>

### 🎓 دوره‌ها

<br><br>


### 🎙 پادکست
<br><br>

### 🍿 فیلم و سریال


#### فیلم

<br> 


<br><br>


#### سریال







<br><br>

#### انیمیشن

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "animation" AND date >= date("2026-03-21") AND date <= date("2027-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "animation" AND date >= date("2026-03-21") AND date <= date("2027-03-20") SORT date DESC -->

| ("![](" + cover_self + ")") | file.name | "`" + length.minute + " دقیقه`" | rating |
| --------------------------- | --------- | ------------------------------- | ------ |
<!-- SerializedQuery END -->



<br><br>

#### فیلم کوتاه

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "short" AND date >= date("2026-03-21") AND date <= date("2027-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "short" AND date >= date("2026-03-21") AND date <= date("2027-03-20") SORT date DESC -->

| ("![](" + cover_self + ")") | file.name                          | "`" + length.minute + " دقیقه`" | rating |
| --------------------------- | ---------------------------------- | ------------------------------- | ------ |
| ![](\-)                     | Poison                             | `17 دقیقه`                      | ★★⯩    |
| ![](\-)                     | The Rat Catcher                    | `17 دقیقه`                      | ★★★    |
| ![](\-)                     | The Swan                           | `17 دقیقه`                      | ★★⯩    |
| ![](\-)                     | The Wonderful Story of Henry Sugar | `40 دقیقه`                      | ★★★★⯩  |
<!-- SerializedQuery END -->



<br><br>

#### مستند

<br> 

<!-- QueryToSerialize: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "documentary" AND date >= date("2026-03-21") AND date <= date("2027-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover_self + ")"), file.name, "`" + length.minute + " دقیقه`", choice(rating = 5, "★★★★★", choice(rating = 4.5, "★★★★⯩", choice(rating = 4, "★★★★", choice(rating = 3.5, "★★★⯩", choice(rating = 3, "★★★", choice(rating = 2.5, "★★⯩", choice(rating = 2, "★★", choice(rating = 1.5, "★⯩", choice(rating = 1, "★", ""))))))))) AS rating FROM #Movie WHERE type = "documentary" AND date >= date("2026-03-21") AND date <= date("2027-03-20") SORT date DESC -->

| ("![](" + cover_self + ")") | file.name | "`" + length.minute + " دقیقه`" | rating |
| --------------------------- | --------- | ------------------------------- | ------ |
<!-- SerializedQuery END -->





## عادت‌ها


### 🏋🏻 ورزش

<br> 

<div class="full">

<!-- QueryToSerialize: TABLE "🏋️ " + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز ورزش کردم" as true, "🛌 " + length(filter(rows, (r) => r.🏋️exercise = false)) + " روز استراحت کردم" as false FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE "🏋️ " + length(filter(rows, (r) => r.🏋️exercise = true)) + " روز ورزش کردم" as true, "🛌 " + length(filter(rows, (r) => r.🏋️exercise = false)) + " روز استراحت کردم" as false FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->

| "" | true                 | false                  |
| -- | -------------------- | ---------------------- |
|    | 🏋️ 41 روز ورزش کردم | 🛌 50 روز استراحت کردم |
<!-- SerializedQuery END -->

</div>



<br> 

### 📖 مطالعه

<br> 

<div class="full">

<!-- QueryToSerialize: table without id "🚩 مجموعا " + length(filter(rows.📚reading, (e) => e >= 1)) + " روز مطالعه کردم" as true, "🔘 جمع کل: " + round(sum(rows.📚reading)) + " پومودورو" as Total, "📈 میانگین: " + round(sum(rows.📚reading) / length(rows), 1) + " پومودورو" as Average FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: table without id "🚩 مجموعا " + length(filter(rows.📚reading, (e) => e >= 1)) + " روز مطالعه کردم" as true, "🔘 جمع کل: " + round(sum(rows.📚reading)) + " پومودورو" as Total, "📈 میانگین: " + round(sum(rows.📚reading) / length(rows), 1) + " پومودورو" as Average FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->

| true                         | Total                   | Average                  |
| ---------------------------- | ----------------------- | ------------------------ |
| 🚩 مجموعا 60 روز مطالعه کردم | 🔘 جمع کل: 103 پومودورو | 📈 میانگین: 1.1 پومودورو |
<!-- SerializedQuery END -->

</div>


<br><br>

### 🌎 زبان انگلیسی

<br> 

<div class="full">

<!-- QueryToSerialize: table without id "🚩 مجموعا " + length(filter(rows.🌎en, (e) => e >= 1)) + " روز زبان خوندم" as true, "🔘 جمع کل: " + round(sum(filter(rows.🌎en, (e) => e))) + " پومودورو" as Total, "📈 میانگین: " + round(sum(filter(rows.🌎en, (e) => e)) / length(filter(rows.🌎en, (e) => e)), 1) + " پومودورو" as Average from #journal where file.name >= "2026-03-21" AND file.name <= "2027-03-20" GROUP BY "" -->
<!-- SerializedQuery: table without id "🚩 مجموعا " + length(filter(rows.🌎en, (e) => e >= 1)) + " روز زبان خوندم" as true, "🔘 جمع کل: " + round(sum(filter(rows.🌎en, (e) => e))) + " پومودورو" as Total, "📈 میانگین: " + round(sum(filter(rows.🌎en, (e) => e)) / length(filter(rows.🌎en, (e) => e)), 1) + " پومودورو" as Average from #journal where file.name >= "2026-03-21" AND file.name <= "2027-03-20" GROUP BY "" -->

| true                       | Total                  | Average                  |
| -------------------------- | ---------------------- | ------------------------ |
| 🚩 مجموعا 7 روز زبان خوندم | 🔘 جمع کل: 12 پومودورو | 📈 میانگین: 1.5 پومودورو |
<!-- SerializedQuery END -->

</div>




<br> 


### 📱 رسانه‌های اجتماعی


<br> 

<div class="full">

<!-- QueryToSerialize: table without id "🔘 جمع کل: " + round(sum(rows.📱social)) + " ساعت" as Total, "📈 میانگین: " + round(sum(rows.📱social) / length(rows), 1) + " ساعت" as Average FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: table without id "🔘 جمع کل: " + round(sum(rows.📱social)) + " ساعت" as Total, "📈 میانگین: " + round(sum(rows.📱social) / length(rows), 1) + " ساعت" as Average FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->

| Total             | Average              |
| ----------------- | -------------------- |
| 🔘 جمع کل: 5 ساعت | 📈 میانگین: 0.1 ساعت |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: table without id " اگر این زمان را صرف راه‌رفتن کرده بودم معادل " + round(sum(rows.📱social))*4.5 + " کیلومتر پیاده رفته بودم." FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->
<!-- SerializedQuery: table without id " اگر این زمان را صرف راه‌رفتن کرده بودم معادل " + round(sum(rows.📱social))*4.5 + " کیلومتر پیاده رفته بودم." FROM #journal WHERE file.name >= ("2026-03-21") AND file.name <= ("2027-03-20") GROUP BY "" -->

| " اگر این زمان را صرف راه‌رفتن کرده بودم معادل " + round(sum(rows.📱social))*4.5 + " کیلومتر پیاده رفته بودم." |
| -------------------------------------------------------------------------------------------------------------- |
|  اگر این زمان را صرف راه‌رفتن کرده بودم معادل 22.5 کیلومتر پیاده رفته بودم.                                    |
<!-- SerializedQuery END -->


</div>




<br><br>

## پروژه‌ها


<br><br> 

## ارزیابی

<br><br>