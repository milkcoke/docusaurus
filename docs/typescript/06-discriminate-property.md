---
title: Discriminate property
description: How to discriminate type using literal type
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-02-27
---

## When to use
Discriminate multiple types in one block codes. (e.g. `if ~ else` , `switch - case` statement)

## Why to use
A lot of type exists, we need discriminating the type in condition statement. <br></br>
But in union type made by interfaces , `instanceof` is invalid, and using type-predicates provided by `is` , it's required much type checking functions.

:::tip
We should discriminate multiple types in one function simply.
:::
## How to use
**Creating a literal property that is common across multiple types narrowing the type using literal property.**

## Example
```typescript
interface Champion {
    hp: number;
    level: number;
}
interface Vladimir extends Champion{
    name: 'Vladimir'
}

interface Garen extends Champion{
    name: 'Garen'
}

interface Arii extends Champion{
    name: 'Arii'
}

type Champ = Vladimir | Garen | Arii;

function getSpeech(champion: Champ) {
    switch (champion.name) {
        case 'Vladimir':
            console.log("Mountain is colored with blood");
            break;
        case 'Garen':
            console.log("Noxus!!!");
            break;
        case 'Arii':
            console.log("I'll attract you");
            break;
        default:
            throw new Error("Unknown champion")
    }
}

// Typescript compiler say you should input discriminated property 'name' as literal type
// If missing `name`, ts compiler warn you it's missing.
const defaultGarean : Garen = {
    name: 'Garen',
    level: 1,
    hp: 550
}

getSpeech(defaultGarean) /// "Noxus!!"
```
