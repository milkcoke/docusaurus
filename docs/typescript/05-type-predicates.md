---
title: Type Predicates
description: How to use type predicates
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-02-24
---

## Why to use
Complex data type checking (e.g. interface, object array, class, prototype, property based check) <br></br>
`instanceof` keyword is only useful when checking type of class or prototype. <br></br>
**Whereas type predicates make you provide the type to typescript compiler.**

## When to use
interface, property or character based type checking on complex type.

## How to use (example)
Type predicates signature: `arg name` is `Type`

```typescript
interface Square {
    kind: 'square';
    length: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

class Triangle {
    kind: string = 'triangle';
    constructor(public baseLength: number, public height: number) {
    }
}

type Shape = Square | Rectangle | Triangle;

function isSquare(shape: Shape): shape is Square {
    return shape.kind === 'square';
}

function isRectangle(shape: Shape): shape is Rectangle {
    return shape.kind === 'rectangle';
}
```
#### instanceof.ts
```typescript
function getSize(shape: Shape) {
    // Can't use `instanceof` for instance.
    // 🚫 Error occurs because `instanceof` just valid in class, prototype
    if (shape instanceof Square) {
    }
}
```

#### type-predicates.ts
```typescript
function getSize(shape: Shape) {
    // Can't use `instanceof` for instance.
    // just valid in class, prototype
    // if (shape instanceof Square) 

    if (isSquare(shape)) {
        return shape.length * shape.length;
    } else if (isRectangle(shape)) {
        return shape.width * shape.height;
    } else {
        return shape.baseLength * shape.height * 0.5;
    }
}

const squaure1: Square = {
    kind: 'square',
    length: 5
}
console.log(getSize(squaure1));
```

## Questions
You may have questions like this.

> _However, Does type predicates make developers write more code according to increasing the number of interface, class etc.. ? _

**Sure**, In this example, More shape type is added, you should add type checking function with type predicates. <br></br>
But we have to think about why we use Typescript instead of Javascript.
We want help of type checker powered by typescript, so reduce risk of runtime error!

## Answer
**The benefits of increased type safety and reduced risk of runtime errors can outweigh this cost**, although using type predicates may require some additional effort in defining and maintaining the codes.
