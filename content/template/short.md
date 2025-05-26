---
title: 
aliases: 
date: 
lastmod: 
draft: true
status: 
parent: 
order: 
image: 
tags:
---

```
npx quartz build --serve
```



```
npx quartz sync
```


## دردسترس نبودن پورت 8080
```
netstat -ano | findstr :8080
```

اگه خروجی چیزی مثل این بود:
```
TCP    127.0.0.1:8080      0.0.0.0:0        LISTENING       12345
```

عدد آخر (`12345`) **شماره پردازش (PID)** هست. برای بستن اون از این دستور استفاده کن:
```
taskkill /PID 12345 /F

```