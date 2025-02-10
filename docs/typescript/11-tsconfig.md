---
title: tsconfig usage tip
description: How to use tsconfig.json 
tags: [typescript]
keywords: [typescript]
last_update:
    date: 2023-06-01
---

## rootDir
Longest common path non-declaration input files. <br></br>
Inferred value for rootDir is `src`.

```log
MyProj
├── tsconfig.json
├── src
│   ├── a.ts
│   ├── b.ts
│   ├── sub
│   │   ├── c.ts
├── types.d.ts
```

If `outDir` was dist, Typescript would write this tree:
```log
MyProj
├── dist
│   ├── a.js
│   ├── b.js
│   ├── sub
│   │   ├── c.js

```


:::info
rootDir doesn't affect which files become part of the compilation.
rootDir have to include all files need to be transpiled to `.js`
:::

```log
MyProj
├── tsconfig.json
├── src
│   ├── a.ts
│   ├── b.ts
│   ├── sub
│   │   ├── c.ts
├── types.d.ts
├── hello.ts // error!
```

```log
hello.ts' is not under 'rootDir' '%PROJECT_DIR%/src'. 'rootDir' is expected to contain all source files.
The file is in the program because:
Matched by default include pattern '**/*'
```

## Reference
- [Typescriptlang.org](https://www.typescriptlang.org/tsconfig#composite)
