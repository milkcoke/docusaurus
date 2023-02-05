---
title: delegate by map
description: Know about delegating by map.
tags: [kotlin]
keywords: [kotlin]
last_update:
    date: 2023-02-04
---

## When to use
Map 을 통해 객체를 생성하고 싶을 때

## How to use
:::info
kotlin Map already implements method for delegating.
:::

#### Project.kt
Use `by map` on property.

#### Project.kt
```kotlin
data class Project(val map: MutableMap<String, Any?>) {
    var name: String by map
    var priority: Int by map
    var completed: Boolean by map
}
```

#### ProjectTest.kt
```kotlin
class ProjectTest {
    @DisplayName("Map 으로 project 인스턴스 생성")
    @Test
    internal fun createProjectByMap() {
        val map = mutableMapOf(
            "name" to "Falcon",
            "priority" to 5,
            "completed" to true
        )
        // construction with map
        val project = Project(map)
    }

    @DisplayName("JSON parsing and create project")
    @Test
    internal fun createProjectFromJson() {
        val project = Project(getMapFromDummyJson())
        print(project)
    }
    
    private fun getMapFromDummyJson(): MutableMap<String, Any?> {
        return Gson().fromJson<MutableMap<String, Any?>>(
            """{ "name" : "Learn Kotlin", "priority": 5, "completed": true}""",
            MutableMap::class.java
        )
    }
}
```

### Furthermore
We can support value - based constructor and by map as shown below
```kotlin
data class Project(val map: MutableMap<String, Any?>) {
    var name: String by map
    var priority: Int by map
    var completed: Boolean by map

    constructor(name: String, priority: Int, completed: Boolean) : this(
        mutableMapOf(
            "name" to name,
            "priority" to priority,
            "completed" to completed
        )
    )
}
```

```kotlin
@DisplayName("create json with property value")
@Test
internal fun createProjectWithPropValue() {
    print(Project("카르마", 5, true))
}
```