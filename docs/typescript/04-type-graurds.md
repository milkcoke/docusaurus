---
title: Type Guards
description: How to use type guard for writing safe code
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-02-22
---

You are capable of writing safe code with type guard in typescript.

### Type guard
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

### Truthiness guards
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
