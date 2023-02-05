---
title: Operator overloading, overriding
description: Compare const to val
tags: [kotlin]
keywords: [kotlin]
last_update:
    date: 2023-01-12
---

```kotlin

data class Point(val x: Int, val y: Int) {}

@Test
internal fun pairTestFail() {
    val pair1 = Pair(5, 10)
    val pair2 = Pair(22, 25)
    // highlight-next-line
    println(pair1 + pair2) // error occur
}
```

This code may lead to error:
```text
Kotlin: Unresolved reference. None of the following candidates is applicable because of receiver type mismatch: 
    public inline operator fun BigDecimal.plus(other: BigDecimal): BigDecimal defined in kotlin
```

=> plus 가 operator 중 하나임을 알 수 있다.

```kotlin
data class Point(val x: Int, val y: Int) {
    // highlight-next-line
    operator fun plus(anotherPoint: Point) = Point(x + anotherPoint.x, y + anotherPoint.y)
}
    @Test
    internal fun pointPlusSuccessTest() {
        val point1 = Point(5, 10)
        val point2 = Point(22, 25)
        println(point1 + point2) // Point(x=27, y=35)
    }
```
### 주요 연산자 목록
다음 operator 들은 특정 기호와 매핑된다.

- plus(+) & inus(-)
- times(*) & div(/)
- in(contains*()), !in(!contains())
- unaryPlus(+) & unaryMinus(-) <br></br>
부호 전환 
- inc(++) & dec(--)


### 
```kotlin
    @Test
    internal fun pointContainSuccessTest() {

        val point1 = Point(5, 10)
        val point2 = Point(22, 25)
        val points : List<Point> = listOf(point1, point2)

        assertThat(points.contains(point1)).isTrue
        assertThat(point1 in points).isTrue
    }
```

`in` 이라는 operator 는 어딘가에 오버로딩 되어있다. 

### Collections.kt
```kotlin
public interface Collection<out E> : Iterable<E> {
    /**
     * Checks if the specified element is contained in this collection.
     */
    //highlight-next-line
    public operator fun contains(element: @UnsafeVariance E): Boolean
    // ..
}

public interface List<out E> : Collection<E> {
    // Overriding
    // highlight-next-line
    override fun contains(element: @UnsafeVariance E): Boolean
    // ..
}
```
Iterable 을 상속받은 컬렉션 중 하나인 `List` 리스트는 `contains()` operator 를 오버로딩 했음을 알 수 있다.
=> 해당 원소를 컬렉션 내에서 iteration 하며 찾는데 성공한다면 true

## 📝 Summary
### 연산자 오버로딩 
`operator` 키워드와 함께 오버로딩 할 수 있다.
```kotlin
// Define '-' operator
operator minus(element: T) : T // ..
```
### 연산자 오버라이딩
`ovverride` 키워드와 함께 오버라이딩 할 수 있다.
```kotlin
override fun contains(element: @UnsafeVariance E): Boolean
```

특정 +, -, / 와 같은 연산 기호를 'symbolic representation' 라고 칭하는데 <br></br>
이 기호와 매핑된 메소드명은 다음 링크에서 모두 확인할 수 있다.


## 🔗 Reference
- [Operator overloading - kotlin docs](https://kotlinlang.org/docs/operator-overloading.html#property-delegation-operators)