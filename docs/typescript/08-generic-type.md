---
title: Use generic instead of `any`
description: When and Why need generic type
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-03-14
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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


### Type inference in Generic
Typescript compiler supports type inference at generic type function from input type. <br></br>
It's enough smart to infer type.

#### pickRandomElement.test.ts
```typescript
describe('Generics', ()=> {
    function pickRandomElement<T>(arr: T[]): T {
        const randomIdx = Math.floor(Math.random() * arr.length)
        return arr[randomIdx]
    }
    
    test('Pick random number from array',()=>{
        const nums = [1, 6, 3, 4]
        const randomNum = pickRandomElement(nums)
        // Typescript compiler already knows typeof randomNum is number
        // also knows input type is number[]
        randomNum.toExponential(3)
    })

    test('Pick random string from array', ()=>{
        const strs = ['khazix', 'rumble', 'jayce']
        const str = pickRandomElement(strs)
        // Typescript compiler is smart!
        str.toLowerCase()
    })
})
```
#### mergeObject.test.ts
```typescript
describe('Generic2',()=>{
    // Notify type and return type to typescript compiler.
    function mergeObj<T,U>(obj1: T, obj2: U): T & U {
        return {
            ...obj1,
            ...obj2
        }
    }

    interface RGB {
        R: number
        G: number
        B: number
    }
    interface Circle {
        radius: number
    }

    test('Merge any type object', ()=>{
        const rgb : RGB = {R: 221, G: 15, B: 93}
        const circle : Circle = {radius: 4}
        // TSC let you know what's the return type of `mergeObj()` by type inference
        // since Generic <T, U> is used to define function. 
        // highlight-next-line
        const drawing = mergeObj(rgb, circle)

        expect(drawing.R).toBe(rgb.R)
        expect(drawing.G).toBe(rgb.G)
        expect(drawing.B).toBe(rgb.B)
        expect(drawing.radius).toBe(circle.radius)
    })
})
```

#### constraintGeneric.test.ts
```typescript
describe('Restrict generic parameter with extends', ()=>{
    // Restrict only object parameter on function
    // highlight-next-line
    function mergeObj<T extends Object,U extends Object>(obj1: T, obj2: U): T & U {
        return {
            ...obj1,
            ...obj2
        }
    }

    test('merge: primitive types should not be spread except string', ()=>{
        expect(mergeObj({name: 'khazix'}, 4)).toStrictEqual({name: 'khazix'})
        expect(mergeObj({name: 'khazix'}, false)).toStrictEqual({name: 'khazix'})
        expect(mergeObj({name: 'khazix'}, null)).toStrictEqual({name: 'khazix'})
        expect(mergeObj({name: 'khazix'}, 'str')).not.toStrictEqual(({name: 'khazix'}))
    })
})
```

#### constraintGeneric2.test.ts
```typescript
describe('Restrict generic parameter with extends or interface', ()=> {
    // When to use type generic and when to use interface on parameter?
    // More generic code, and modifiable
    // However, it's not easy to maintain the code
    function printDoubleLength<T extends Lengthy>(thing: T): number {
        return thing.length * 2
    }

    interface Lengthy {
        length: number
    }


    function printDoubleLengthWithInterface(thing: Lengthy): number {
        return thing.length * 2
    }


    test('Constraint with generic', () => {
        const str = 'sdt'
        expect(printDoubleLength(str)).toBe(str.length * 2)
    })
    
    test('Constraint with interface', ()=>{
        const lengtyd = {
            length: 7,
            age: 23
        }
        expect(printDoubleLengthWithInterface(lengtyd)).toBe(lengtyd.length * 2)
    })
})
```


### How to decide to use generic with `extends` or interface?
:::tip
I usually recommend `interface` for maintenance.
:::

Generic type function is not easy to maintain even if it's a little more flexible. <br></br>
However, when to make library code, you could consider using generic with `extends`.

### Default type allocation

<Tabs>
<TabItem value="makeArray" label="makeArray.ts">

Default type allocation as shown below. <br></br>
If use bracket on general function, type allocation occurs, if don't, default type is allocated.

```typescript
// Default type is string <T = string>
// highlight-next-line
function makeEmptyList<T = string>(): T[] {
    return []
}

const strs = makeEmptyList()
// Just allowed push 'string'
// highlight-next-line
strs.push('5')

const numbers = makeEmptyList<number>()
// Just allowed to push 'number'
// highlight-next-line
numbers.push(5)
```
</TabItem>

<TabItem value="Champion" label="ChampionList.ts">

```typescript
export type VERSION = 'v1' | 'v2'

export interface ChampionV1 {
    version: 'v1'
    name: string
    hp: number
}
export interface ChampionV2 {
    version: 'v2'
    name: string
    hp: number
    mp: number
}


export default class ChampionList<T> {
    public queue: T[] = []
    add(element: T): void {
        this.queue.push(element)
    }

    printAllQueue(): void {
        for (const element of this.queue) {
            console.log(element)
        }
    }
}
```
</TabItem>

<TabItem value="ChampionTest" label="ChampionList.test.ts">

champV1List permit only add element of `v1` not allowed since type allocation with bracket
```typescript
const champV1List = new ChampionList<ChampionV1>()
champV1List.add({
    version: 'v1',
    name: 'Garen',
    hp: 500,
})

champV1List.add({
    // 🚫 Not allowed
    // highlight-next-line
    version: 'v2',
    name: 'Garen',
    hp: 550,
    mp: 0
})
```
</TabItem>
</Tabs>
