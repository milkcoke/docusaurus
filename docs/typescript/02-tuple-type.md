---
title: Tuple 
description: How to use tuple type in typescript
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-02-21
---

## Tuple type
**Array type fixed length and order.**

```typescript
type RGBColor = [number, number, number];
const rgb1: RGBColor = [102, 104, 230, 403]; // 🚫 not matched length
const rgb2: RGBColor = [102, 104, true]; // 🚫 not matched type
const rgb3: RGBColor = [102, 104, 230]; // ✅


// But after initialized, let it go append or pop since js/ts opened.
rgb1.push(204);
rgb1.pop();
rgb1.pop();
```

:::info
This is not recommended since it's not flexible and maintainable. <br></br>
**Use interface, type or class to define custom data type instead of tuple.**
:::

#### Use type, interface instead of tuple
I prefer to use this
```typescript
type RGB = {
    r: number
    g: number
    b: number
}
const rgb4 = {r: 102, g: 104, b: 230}
```
---
### 🔗 Reference
- [Typescript docs](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
