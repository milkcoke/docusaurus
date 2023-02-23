---
title: Type Guards
description: How to use type guard for writing safe code
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-02-22
---

You are capable of writing safe code with type guard in typescript.

## Type guard
```typescript
function repeatThree(value: number | string) {
    // type narrowing is required.
    if (typeof value === "string") {
        return value.repeat(3) // error occurs since number doesn't have repeat() method.
    }

    return value * 3
}

console.log(repeatThree('hi')); // hihihi
console.log(repeatThree(3)); // 9
```

## Truthiness guards
```typescript
function printIfTruthNum(value: string | number | undefined | null) {
    if (typeof value === "number") {
        // console.log(`number: ${value}`)
        logger.warn(`number:${value}`);
    } else if (!value) {
        console.error('this is falsy')
    } else {
        console.log(value)
    }
}

printIfTruthNum(0); // number: 0
printIfTruthNum(null); // this is falsy
printIfTruthNum('champ'); // champ
```

:::info
Take care of that number `0` is also [Falsy value](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
:::


## `In` operator
`in` operator is type narrowing checking property existence in object.

```typescript
interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numOfEpisodes: number;
    episodesDuration: number;
}

function getRuntime(media: Movie | TVShow) : number {
    // media is type narrowed to `TVShow`
    // highlight-next-line
    if ('episodesDuration' in media) {
        return media.numOfEpisodes * media.episodesDuration;
    } else{
    // media is type narrowed to `Movie`
        return media.duration;
    }
}

const movie1 = {title: 'Khazix', duration: 140}
const tvShow1 = {title: 'Vladimir', numOfEpisodes: 20, episodesDuration: 10}
console.log(getRuntime(movie1)); // 140
console.log(getRuntime(tvShow1)) // 200 (20 * 10)
```


## instanceof
`instanceof` is a javascript operator that allow us to check if an instance of another prototype(class)

```typescript
interface IUser {
    name: string;
}

// https://timmousk.com/blog/typescript-instanceof-interface/

class RiotUser implements IUser {
    constructor(public readonly name: string, readonly riotId: string = "RID: " + name) {
    }
}

class NexonUser implements IUser {
    constructor(public readonly name: string, readonly nexonId: string = "NID: " + name) {
    }
}

const riotUser = new RiotUser('riot1');
const nexonUser = new NexonUser('nexon1');

function printUserName(user: IUser) {
    
    if (user instanceof RiotUser) {
        console.log(user.name); // riot1
        console.log(user.riotId); // RID: riot1
    }

    if (user instanceof NexonUser) {
        console.log(user.name); // nexon1
        console.log(user.nexonId); // NID: nexon1
    }
}

printUserName(riotUser); // 
printUserName(nexonUser);
```

:::info
Don't use this when checking interface.<br></br>
`instanceof` type narrowing is only allowed to prototype (class). 
:::


```typescript
function printUserName(user: IUser) {
    // 🚫 using instanceof to interface is not allowed since interface is just type.
    // if (user instanceof IUser) { 
    // 
    // }
}
```
Above code must lead to error.

### Pros and Cons
Using `instanceof` have trade-off. <br></br>
It might be a sign that your class hierarchy could be refactored to be more cohesive and have fewer dependencies on external state.

#### Pros
Reduce code duplication
#### Cons 
Difficult to modify the implementation of each class. <br></br>
`instanceof` code could break Open-Closed-Principal (OCP) because additional class added, that code should be modified.

### When to use
:::tip
Use `instanceof` All classes are independent on external state and methods are implemented in a similar way across all classes. <br></br>
Don't use when modification is important.
:::

