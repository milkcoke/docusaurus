---
title: Singleton Pattern
description: Why, When, How to use singleton pattern?
tags: [kotlin]
keywords: [kotlin]
last_update:
    date: 2023-01-13
---

# Singleton

## Why to use?
Enable handling global state force to use single instance.

## When to use?
1. Ensure just only one instance existence
2. Handle global state

ex) Logging, Network state manager

## How to use?

### old java solution
This is not recommended because **It's not ensuring single instance in multi-thread environment.**

```java
public class Singleton {
    private static Singleton instance;
    private Singleton() {}

    public static Singleton getInstance() {
        if(instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    // etc methods..
}
```
This code is not thread-safe.

Assume your environment is in dual thread env consists of Thread A, B <br></br>
Thread B make new Singleton instance even though thread A already made one.


### Simple kotlin solution

### object
Use `object` for ensuring thread safe.
```kotlin
object Singleton {
    // ...
}
```

```kotlin
object MySingleton {
    val Priority = 3
    fun myPriority() : String = "Hello"
}

class SingleTonPatternTest {
    @Test
    internal fun testMySingleTon() {
        assertThat(MySingleton.Priority).isEqualTo(3)
        assertThat(MySingleton.myPriority()).isEqualTo("Hello")
    }
}
```

But `object` solution can't have parameter on constructor <br></br>
If you want to pass parameter, Use `companion object`. 

### companion object
You can use `companion object` with parameter
```kotlin
class MySingleton private constructor(context: Context) {
    companion object {
        private var instance: MySingleton? = null
        
        fun getInstance(context: Context) : MySingleton {
            return instance ?: MySingleton(context).also {instance = it}
        }
    }
}
```

**Not yet resolved multi-thread synchronization issue.**

### Double Check Locking
```kotlin
class MySingleton private constructor(context: Context) {
    companion object {
        @Volatile
        private var instance: MySingleton? = null
        
        fun getInstance(context: Context) : MySingleton {
            // 1. null check
            // 2. locking
            // highlight-next-line
            instance ?: synchronized(MySingleton::class.java) {
                instance ?: MySingleton(context).also { instance = it }
            }
        }
    }
}
```
**This solution ensures thread-safe** 

`@Volatile` enable each thread can access directly to main memory variable. <br></br>
In this code, that's instance. However, this is possibility of performance degradation because of locking.

### Bill Pugh Solution (Recommended)

```kotlin
object MySingleton {
    val instance: MySingleton by lazy {Holder.instance}
    private object Holder {
        val instance = MySingleton
    }
}
```
#### BillPughSingletonTest.kt
```kotlin
    @Test
    internal fun testBillPughSingletonTest() {
        val firstInstance = MySingleton.instance
        val secondInstance = MySingleton.instance
        Assertions.assertThat(firstInstance).isEqualTo(secondInstance) // ✅
        Assertions.assertThat(firstInstance).isSameAs(secondInstance)  // ✅ 
    }
```
```text
Initialized!
```

> In java, use `static final` keyword instead of `object`

This  is awesome solution.
1. Thread-safe
2. Avoid performance degradation
3. Instance lazy loading <br></br>
Instance is not loaded until `MySingleton.instance` is called.

## 📝 Conclusion
Use Bill Pugh solution when you should use singleton pattern if you don't need a constructor parameter passing.

---
## 🔗 Reference
- [How to create a singleton class in kotlin](https://blog.mindorks.com/how-to-create-a-singleton-class-in-kotlin/)