---
title: Enum
description: Don't use enum, use literal type
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-02-21
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Enum type
You can have merits of auto-completion in typescript enum.
But there's a side effect

<Tabs>
<TabItem value="enum" label="enum.ts">

```typescript
enum ArrowKey {
    UP= "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}
```

</TabItem>
<TabItem value="after-enum" label="enum.js">

```javascript
"use strict"
var ArrowKey;
(function (ArrowKey) {
    ArrowKey["UP"] = "up";
    ArrowKey["DOWN"] = "down";
    ArrowKey["LEFT"] = "left";
    ArrowKey["RIGHT"] = "right";
// IIFE Code
// highlight-next-line
})(ArrowKey || (ArrowKey = {}));
```
</TabItem>
</Tabs>

:::info
When `.ts` file is transpiling to `.js`, there's a IIFE(Immediately Invoked Function Expression). <br></br>
And IIFE would be excluded from [tree-shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) which supports removing dead code automatically when building multiple js files into single file.
:::


<Tabs>
<TabItem value="literal-type" label="literalType.ts">

```typescript
const ARROW_KEY = {
    UP: "up",
    DOWN : "down",
    LEFT : "left",
    RIGHT : "right"
} as const;

type ARROW_KEY_TYPE = keyof typeof ARROW_KEY;
```

</TabItem>
<TabItem value="literal-js-type" label="literalType.js">

```javascript
const ARROW_KEY = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right"
};
```
</TabItem>
</Tabs>


> Using webpack bundler, suppose you only use the `loadash.fill()` method only <br></br>
> then, tree shaking should be executed which removing other package methods and leaving just only `.fill()` method in bundled file.

## 📝 Conclusion
:::tip
**Use literal type and `keyof` , `typeof` keyword instead of enum.**
:::
