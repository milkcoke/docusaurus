---
title: Work stealing
description: Describe about work stealing of logical run queue 
tags: [go]
keywords: [go, goroutine]
last_update:
    date: 2023-03-11
---

## Work stealing process
1. One logical run queue is in empty state
2. Check if existence of goroutines in another logical run queue
3. Check if existence of other goroutines in global rune queue.
4. Check if existence of goroutine NetPoller

![Work stealing](img/Work_Stealing.gif)