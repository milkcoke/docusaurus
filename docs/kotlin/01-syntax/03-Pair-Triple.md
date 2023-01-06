---
title: Pair and Triple in Kotlin
description: Introduce Pair and Triple data class in kotlin.
tags: [kotlin]
last_update:
    date: 2023-01-06
---

# Pair and Triple

## Pair
Data class 로 2개의 데이터를 객체로 만드는데 활용한다.

### When to use?
서로 다른 자료형 쌍이 필요할 때

### How to use
`Pair()` 생성자를 사용해서 선언할 수도 있고 \
`"a" to 2` 와 같이 infix 형식을 사용할 수도 있다.

#### PairTest.kt
```kotlin
    @Test
    internal fun testPair() {
        val pair1 = Pair("a", 1)
        val pair2 = Pair("b", 2)
        val pair3 = "c" to 3
        assertThat(pair1.first).isEqualTo("a")
        assertThat(pair1.second).isEqualTo(1)
    }
```

Data class 기 때문에 구조분해할당이 가능하다.
```kotlin
    @Test
    internal fun testDestructuringPair() {
        val point = Pair(3, 5)
        val (X, Y) = point // Destructuring
        assertThat(X).isEqualTo(3)
        assertThat(Y).isEqualTo(5)
    }
```


## Triple
Data class 로 3개의 데이터를 객체로 만드는데 활용한다. \
이름 그대로 갯수가 3개로 늘었을 뿐이다.

```kotlin
    @Test
    internal fun testTriple() {
        val triple = Triple("x", 5, 3.0)
        assertThat(triple.first).isEqualTo("x")
        assertThat(triple.second).isEqualTo(5)
        assertThat(triple.third).isEqualTo(3.0)
    }
```


## Java 에서는?
기본적으로 Pair, Triple 을 지원하지 않기 때문에 다음과 같이 직접 정의해야한다.

**~~자바 구데기~~**

#### JavaTripleTest.java
```java
class Triple <T, G, U>{
    private T first;
    private G second;
    private U third;
    Triple(T first, G second, U third) {
        this.first = first;
        this.second = second;
        this.thrid = third;
    }
}

public class PairTripleTest2 {
    @Test
    void pairTest() {
        Triple triple = new Triple("a", 3, 2.0);
    }
}
```