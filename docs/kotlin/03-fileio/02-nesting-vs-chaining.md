---
title: Nesting vs Chaining
description: Chaining is better than nesting in terms of readability
tags: [kotlin]
keywords: [kotlin]
last_update:
    date: 2023-02-11
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::tip
Chaining is better than nesting in terms of readability
:::

<Tabs>
<TabItem value="kotlin-nesting" label="kotlin-nesting.kt">

```kotlin
stream1
    .flatMap {
        stream2.flatMap {
            stream3.flatMap {
                stream4
            }
        }
    }
    .collect()
```
</TabItem>
<TabItem value="kotlin-chaining" label="kotlin-chaining.kt">

```kotlin
stream1
    .flatMap { stream2 }
    .flatMap { stream3 }
    .flatMap { stream4 }
    .collect()
```
</TabItem>
</Tabs>


<Tabs>
<TabItem value="node-nesting" label="node-nesting.js">

```javascript
const makeBurger = nextStep => {
    getBeef(function(beef) {
        cookBeef(beef, function(cookedBeef) {
            getBuns(function(buns) {
                putBeefBetweenBuns(buns, beef, function(burger) {
                    nextStep(burger);
                });
            });
        });
    });
};
```
</TabItem>
<TabItem value="kotlin-chaining" label="node-chaining.js">

```javascript
const makeBurger = () => {
    return getBeef()
        .then(cookBeef)
        .then(getBuns)
        .then(putBeefBetweenBuns);
};

makeBurger().then(serve);
```

</TabItem>
</Tabs>
