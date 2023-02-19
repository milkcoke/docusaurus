---
title: Union type & Literal type
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

### Tips
Types in typescript are **open** in the sense that an object has to have **at least the properties.**

```typescript
type DataA = {
    value: number,
    data: string
}

type DataB = {
    value: number,
    note: string
}

type Data = DataA | DataB;

const dataA : Data = {
    value: 3,
    data: 'str',
    // ✅ Ok although it consists of combination DataA and DataB.
    note: 'adk',
    // 🚫 Not allowed extra property
    // z: 'adsa'
}
```

:::warning
Don't use union type only if you want to restrict exclusive type. <br></br>
It's open.
:::

:::info
Use [mapped](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) and [conditional types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html) to express an exclusive union of object types.
:::

Refer to [stackoverflow Q & A](https://stackoverflow.com/questions/46370222/why-does-a-b-allow-a-combination-of-both-and-how-can-i-prevent-it/46370791#46370791).


## Literal Type
```typescript
// 0 is literal type not value of `zero`
let zero : 0 = 0;
// 🚫 error occurs
zero = 2; // can't allocation value 2 to type 0

// "hi" is type of `hi`
// 🚫 error occurs
let hi: "hi" = "khazix"; // type of hi is "hi" so can't allocate value "khazix"
```

### When to use?
If you combination with union type and literal type. <br></br>
You can restrict several literal type on parameter or return type as shown below.

```typescript
// Union type + Literal type
type Answer = "yes" | "no" | "maybe";

function getAnswerMsg(answer: Answer) {
    return `answer is ${answer}`;
}

// only `Answer` type is allowed here.
const msg = getAnswerMsg("no");
```



