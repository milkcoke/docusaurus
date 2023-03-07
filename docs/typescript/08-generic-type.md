---
title: Use generic instead of `any`
description: When and Why need generic type
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-03-07
---

## When to use
Required general function for covering all type. <br></br>
Suppose return itself as it is. 
```typescript
function getNumberFirstElement(arr: number[]): number {
    return arr[0];
}
function getStringFirstElement(arr: string[]): string {
    return arr[0]
}
// ..
```
You should have write handy code with all types you need.

## Why to use
There's `any` type in typescript. <br></br>
But it doesn't care about that data type changed in function (e.g. request type and response type is not matched)

```typescript
function getNumberFirstElement(arr: any[]): any {
    // No error whatever something type
    // e.g. number to string
    return arr[0].toString()
}
```

## How to use
Declare function with `T` keyword.

```typescript
// higlihght-next-line
function returnItSelf<T>(something: T): T {
    // Ensure request type and reesponse type is same.
    return something
}

describe('Generics', ()=>{
    test('generic function call', ()=>{
        const str = 'Khazix'
        expect(typeof str).toBe('string')
        expect(typeof returnItSelf(str)).toBe('string')
        
        const num = 5
        expect(typeof num).toBe('number')
        expect(typeof returnItSelf(num)).toBe('number')
    })
})
```

You get reusable code using generic type. <br></br>
Make it easier to write modular code that can be used in different contexts. <br></br>
However, take care about overuse of generic types can make code more complex and harder to read. <br></br>
It's important to get balance between flexibility and simplicity.
