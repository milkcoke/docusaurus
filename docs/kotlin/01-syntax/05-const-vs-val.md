---
title: const vs val
description: Compare const to val
tags: [kotlin]
last_update:
    date: 2023-01-11
---

## `const`
The `const` keyword is used to declare properties that are **immutable** (i.e. **read-only** properties) at the **compile time**.

When to use `const`, required conditions as shown below:
1. Should start from a primitive data type <br></br>
ex) Boolean, Int, Long, Char, String
2. Must be at the top level or member of an object or a companion object
3. No custom getter method


```kotlin
class Task (_name: String, _priority: Int = DEFAULT_PRIORITY) {
    companion object {
        const val MIN_PRIORITY = 1
        const val DEFAULT_PRIORITY = 3
        const val MAX_PRIORITY = 5
        const val NAME = "KHAZIX"
//        highlight-next-line
        const val TASK_INDEX_NAMES = Array<String>(5){i->"task $i"} // error occurs
    }
}
```
This code must lead to following error:
```text
Const 'val' has type 'Array<String>'. 
    Only primitives and String are allowed
```


## `val`
Initialized at runtime. As a result, you may assign a val variable a method or class

```kotlin
class Task(_name: String, _priority: Int = DEFAULT_PRIORITY){
    companion object {
        const val MIN_PRIORITY = 1
        const val DEFAULT_PRIORITY = 3
        const val MAX_PRIORITY = 5
        // highlight-start
        val currentTimeStamp: LocalDateTime
            get() = LocalDateTime.now()
        // highlight-end
    }
    
    private fun setNameWithTimestamp(_name : String) = _name + "_" + currentTimeStamp
    private fun validPriority(p: Int) = p.coerceIn(MIN_PRIORITY, MAX_PRIORITY)
}
```


`currentTimestamp` declared with `val` is allocated in runtime. You are able to declare custom get method.

### Example code
```kotlin
class Task(_name: String, _priority: Int = DEFAULT_PRIORITY){
    companion object {
        const val MIN_PRIORITY = 1
        const val DEFAULT_PRIORITY = 3
        const val MAX_PRIORITY = 5
        val currentTimeStamp: LocalDateTime
            get() = LocalDateTime.now()
    }
    var currentPriority = validPriority(_priority)
        set(value) {
            field = validPriority(value)
        }

    // custom setter
    var name = setNameWithTimestamp(_name)
        set(value) {
            field = setNameWithTimestamp(value)
        }

    private fun setNameWithTimestamp(_name : String) = _name + "_" + currentTimeStamp
    private fun validPriority(p: Int) = p.coerceIn(MIN_PRIORITY, MAX_PRIORITY)

}
```

## 📝Conclusion

| Index                | const                             | val                                 |
|----------------------|-----------------------------------|-------------------------------------|
| **When to use**      | Variable value to remain constant | Control variable with custom method |
| **Declaration time** | Compile                           | Runtime                             |
| **Assignment times** | Just one                          | Multiple times                      |

