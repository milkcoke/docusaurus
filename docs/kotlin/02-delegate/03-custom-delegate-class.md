---
title: Custom class for delegation 
description: Know about how to define custom delegation class
tags: [kotlin]
last_update:
    date: 2023-02-04
---

## When to use custom delegate class?
Centralize the implementation of a property and make it more reusable and easier to maintain. <br></br> 
This way, you can reduce duplicated code

Imagine you should logging property read count. <br></br>
If you define custom `get()` and `set()` per every property, there should occur duplicates code.

### Example code

```kotlin
class ReadCountTest {
    class AutoIncrementCount {
        private var count: Int = 0
        operator fun getValue(thisRef: Any?, property: KProperty<*>): Int {
            ++count
            return count
        }
        // not defined 'setValue()' method
        // so this is for value property.
    }

    class Board() {
        // highlight-next-line
        val readCount: Int by AutoIncrementCount()
    }

    @DisplayName("property read count")
    @Test
    internal fun testCount() {
        val board = Board()
        assertEquals(1, board.readCount)
        assertEquals(2, board.readCount)
        assertEquals(3, board.readCount)
    }
}
```