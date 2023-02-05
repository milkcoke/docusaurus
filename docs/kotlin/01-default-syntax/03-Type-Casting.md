---
title: Type Casting
description: Introduce type casting in kotlin.
tags: [kotlin]
keywords: [kotlin]
last_update:
    date: 2023-01-10
---

# Introduction
Type casting is the process of converting a variable data type from one to another.

Keep in mind that type casting operation is error-prone one. <br></br>
This is why you learn about casting operation. If not, fatal error or exception would occur.

## Any
`Any` is the root of the Kotlin class, which means that every Kotlin class has `Any` as a parent class. <br></br>
In other terms, any Kotlin variable can have `Any` as a type.


## Unsafe casting
You can use `as` keyword for unsafe casting

Let me show you explicit unsafe casting using `as`.

```kotlin
val num : Any = 42
// highlight-next-line
val str1 : String = num as String
println(str1)    
```
This code would lead to following error:
```text
Exception in thread "main" java.lang.ClassCastException: 
    class java.lang.Integer cannot be cast to class java.lang.String
```

Similarly, the `as` cast operator should fail when nullable types are involved, as shown below
```kotlin
val num : Any? = null
// highlight-next-line
val str1 : String = num as String
println(str1)   
```

So, everytime you perform an explicit unsafe cast through the `as` operator <br></br>
You should consider that a `ClassCastException` might be thrown. <br></br>
If you want to prevent this error from crashing your application, you must handle it as follows:
```kotlin
val num : Any? = null
try {
    val str1: String = num as String
    println(str1)
} catch (e: ClassCastException) {
    println("Cast failed!")
} 
```



## Safe Casting
The `as?` cast operator is called safe because it returns `null` when the cast can't be performed. <br></br>
In other words, it's considered safe because it allows you to avoid exceptions, returning `null` on failure.

`as?` operator allow receiver variable should always be nullable when casting fails.

```kotlin
val champ : Any = "khazix"
// highlight-next-line
val str1 : String = champ as? String
println(str1)
```

This code would lead to following error:
```text
Kotlin: Type mismatch: inferred type is String? but String was expected
```
Because str1 doesn't have a nullable type. \
To make it work, all you have to do it declare str1 as `String?`:
```kotlin
val champ : Any = "khazix"
// highlight-next-line
val str1 : String? = champ as? String
println(str1)
```

### Avoid `ClassCastException` with `as?` keyword
```kotlin
var num: Any = 42
val str1: String? = num as? String
println(str1)
```

This would no longer fail. it would print:
```text
null
```
You can avoid `ClassCastException` even though fail since 'Integer' can't be cast to 'String'. <br></br>
So the `try ~ catch` statement is no longer required when using `as?` the safe cast operator.

#### You have to consider receiver variable has `null` value when cast failed.
```kotlin
val str1: String? = num as? String

if (str1 == null) {
    // Cast failed!
} else {
    // Cast succeeded!    
}
```

## 📝 Summary
- Use `as` operator only when you can make sure the cast will be successful. <br></br>
For example when casting a type to its supertype in an inheritance hierarchy.

- Use `as?` operator with handling null-checking code. 
Your application wouldn't be shut down even type casting fails. <br></br>
However, required how to deal with them.




## 🔗 Reference
- [Type casting kotlin safe vs unsafe](https://blog.logrocket.com/type-casting-kotlin-unsafe-vs-safe/)
- [Kotlin official docs](https://kotlinlang.org/docs/typecasts.html#unsafe-cast-operator)