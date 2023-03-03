---
title: Why should we use `never` in switch case in typescript
description: How to use switch - case safely in typescript
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-03-03
---

## When to use
Handle all case in switch case statement. <br></br>
Especially in enum type, custom union type.

## Why to use
Especially enum type, we want to handle all cases in switch - case statement. <br></br>
If we just write `default` is not enough. Maybe it doesn't handle other cases according to in enum, or custom type you defined.

## How to use
Make variable `never` type from function argument. <br></br>
Typescript compiler would check that are there missing types not handled above `case:` . 

:::info
**`never` type is used when you are sure that something is never going to occur.**
:::

Refer to [official typescript `never` document](https://www.typescriptlang.org/docs/handbook/2/functions.html#never)

#### Example 1

```typescript
interface Pig {
    kind: 'pig',
    growling(): void
}
interface Rooster {
    kind: 'rooster'
    growling(): void
}

interface Cow {
    kind: 'cow'
    growling(): void
}

interface Sheep {
    kind: 'sheep',
    growling(): void
}

type FarmAnimal = Pig | Rooster | Cow | Sheep

function printGrowling(animal: FarmAnimal) {
    switch (animal.kind) {
        case "pig":
            animal.growling()
            return
        case 'rooster':
            animal.growling()
            return
        case 'cow':
            animal.growling()
            return
        // case 'sheep':
        //     animal.growling()
        //     return
        default:
            // `never` type is used when you are sure that something is never going to occur.
            // To enforce handling all types , You should make variable `never` type.
            // ⚠️ Typescript compiler notify you should handle `sheep` since not able to assign `sheep` type into `never`.
            const _exhaustiveCheck: never = animal
            throw new Error(_exhaustiveCheck)
    }
}
```

Typescript compiler warn you in `default` clause, and make you implement all case. <br></br>
Write your code safely in typescript using `never` type!.

## 🔗 Reference
- [Technical Feeder post](https://www.technicalfeeder.com/2021/08/typescript-using-never-type-in-switch-case/)
- [yceffort post](https://yceffort.kr/2022/03/understanding-typescript-never#switch-if-else-%EB%AC%B8%EC%97%90%EC%84%9C-%EC%9D%BC%EC%B9%98-%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EA%B0%92%EC%9D%B4-%EC%98%A4%EB%8A%94-%EA%B2%BD%EC%9A%B0)
