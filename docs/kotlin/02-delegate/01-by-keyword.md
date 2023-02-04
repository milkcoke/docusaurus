---
title: by keyword
description: Know about `by` keyword. 
tags: [kotlin]
last_update:
    date: 2023-02-04
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## When to use
Required delegating implements of interface or inheritance of abstract class to another object.

## Why to use
Enhance re-usability and reducing the amount of code.

## How to use
I'll introduce a SmartPhone class consists of Phone and Camera. <br></br>
So this is composition relation.

:::info
In recent, OOP prefers composition than inheritance.
:::

### Interface
<Tabs>
<TabItem value="phone" label="Phone.kt">

```kotlin
interface Phone {
    fun dial(phoneNumber: String) : String
}
```
</TabItem>
<TabItem value="camera" label="Camera.kt">

```kotlin
interface Camera {
    fun takePicture() : String
}
```
</TabItem>
</Tabs>

### Implements

<Tabs>
<TabItem value="default-phone" label="DefaultPhone.kt">

```kotlin
class DefaultPhone : Phone {
    override fun dial(phoneNumber: String): String {
        return "Dialing $phoneNumber.."
    }
}
```

</TabItem>

<TabItem value="default-camera" label="DefaultCamera.kt">

```kotlin
class DefaultCamera : Camera {
    override fun takePicture(): String {
        return "Shots!"
    }
}
```

</TabItem>
</Tabs>

### Client
Using `by` keyword, we can delegate implementation to camera and phone object. <br></br>
No need implements in SmartPhone class.

<Tabs>
<TabItem value="smartphone" label="SmartPhone.kt">

```kotlin
class SmartPhone (
    private val camera: Camera = DefaultCamera(),
    private val phone: Phone = DefaultPhone()
    // highlight-next-line
) : Camera by camera, Phone by phone
```
</TabItem>
<TabItem value="test" label="SmartPhoneTest.kt">

```kotlin
class SmartPhoneTest {
    @DisplayName("by 없이 참조하기")
    @Test
    internal fun testCall() {
        val smartPhone = SmartPhone()
        // can't use camera, phone method without opening 'camera' , 'phone' property
    }

    @DisplayName("by 로 합성관계 객체 메소드 사용")
    @Test
    internal fun testByCall() {
        val smartPhone = SmartPhone()
        // delegate!
        println(smartPhone.dial("+82 1011110000"))
        println(smartPhone.takePicture())
    }
}
```
</TabItem>
</Tabs>

## Reference
[delegation - kotlin docs](https://kotlinlang.org/docs/delegation.html)

