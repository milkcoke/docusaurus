---
title: Observer Pattern
description: Understand about the observer pattern
tags: [design-pattern, behavior-pattern]
keywords: [design pattern, command pattern]
last_update:
    date: 2025-02-10
---


## Overview

## When to use
특정 객체의 상태가 변경될 때 다른 객체에게 알림을 전달해야 할 때
- 버튼 클릭시 Display 업데이트
- 이벤트 발생시 Display 업데이트

## Why to use

## How to use
Subject (주제) 와 Observer (관찰자)로 구성한다.


### Push 방식
Subject 가 Observer 에게 데이터를 직접 전달한다.
### Polling 방식
이벤트 발생시 Observer 가 필요한 데이터를 Subject 에게 요청한다.

:::tip
📝 **Polling 방식을 사용하라. Subject 변경에 유연하고, 필요한 데이터만 접근한다.**
:::

## Pros and Cons
### Pros
- 동기식으로 구현하면 디버깅이 쉽다.

### Cons
- Pub/Sub 패턴에 비해 객체간 의존성 강결합이 발생한다. \
Observer - Subject 간의 의존성이 강하다.
