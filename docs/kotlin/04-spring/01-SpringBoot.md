---
title: SpringBoot Setup
description: How to setup on kotlin SpringBoot
tags: [kotlin]
keywords: [kotlin]
last_update:
    date: 2023-02-12
---

### Spring initializr
![Spring Initializr](screenshots/spring-initializr.png)

### build.gradle.kts
![build.gralde](screenshots/build_gradle.png)

### What's the role of plugin.spring?
Spring uses proxy pattern. This pattern requires inheritance so all spring bean classes have to be `open`. <br></br>
That plugin automatically adds `open` keyword when we add annotation on classes. (e.g. `@Component`, `@Transactional`)

### build.gradle document
![Legacy build.gradle](screenshots/gradle_docs_all_open_legacy.png)
    

### 🔗 Reference
- [Kotlin + Spring setting - github.io](https://cheese10yun.github.io/spring-kotlin/)
- [Spring Support - Kotlin official docs](https://kotlinlang.org/docs/all-open-plugin.html#spring-support)