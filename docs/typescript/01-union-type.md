---
title: Union type & Type narrowing
description: How to use union type and type narrowing in typescript.
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-02-17
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Union type
#### example.ts
```typescript
let age : number | string;

type Point = {
    x: number;
    y: number;
}

type Log = {
    latitude: number;
    longitude: number;
}
// Union two types
type Coordinate = Point | Log;
```


### Array with union type

<Tabs>
<TabItem value="ok" label="arrayUnion.ts">

```typescript
// OK
const ages: (number | string)[] = [15, 23, "15", "23"];
```
</TabItem>

<TabItem value="fail" label="failArrayUnion.ts">

_🚫 error occurs 'true'(boolean) is not allowed_
```typescript
// Fail
const ages: (number | string)[] = [15, 23, "15", "23", true];
```
</TabItem>

</Tabs>


## Type narrowing

**We can type narrowing with `typeof` keyword.**

#### Primitive.ts
```typescript
// Type Narrowing
console.log(isTeenager(23));

function isTeenager (age: number | string) : boolean {
    if (typeof age === "string") {
        return age.charAt(0) === '1';
    }
    if (typeof age === "number") {
        return age >= 10 && age < 20;
    }

    throw new TypeError("Invalid age type");
}
```

::::info
`typeof` only supports at primitive type <br></br>
"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
::::

#### customTypeUnion.ts
```typescript
type Point = {
    x: number;
    y: number;
}
type Log = {
    latitude: number;
    longitude: number;
}

function printCoordinate(coordinate: Point | Log) {
    // 🚫 error occurs
    // highlight-next-line
    if (typeof coordinate === "Point") {
        // ..
    }
}
```

