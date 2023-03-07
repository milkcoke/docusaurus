"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=i,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"Why should we use `never` in switch case in typescript",description:"How to use switch - case safely in typescript",tags:["typescript"],keywords:["typescript"],last_update:{date:new Date("2023-03-03T00:00:00.000Z")}},o=void 0,s={unversionedId:"typescript/switch-case-tip",id:"typescript/switch-case-tip",title:"Why should we use `never` in switch case in typescript",description:"How to use switch - case safely in typescript",source:"@site/docs/typescript/07-switch-case-tip.md",sourceDirName:"typescript",slug:"/typescript/switch-case-tip",permalink:"/docusaurus/docs/typescript/switch-case-tip",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/typescript/07-switch-case-tip.md",tags:[{label:"typescript",permalink:"/docusaurus/docs/tags/typescript"}],version:"current",lastUpdatedAt:1677801600,formattedLastUpdatedAt:"Mar 3, 2023",sidebarPosition:7,frontMatter:{title:"Why should we use `never` in switch case in typescript",description:"How to use switch - case safely in typescript",tags:["typescript"],keywords:["typescript"],last_update:{date:"2023-03-03T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Discriminate property",permalink:"/docusaurus/docs/typescript/discriminate-property"},next:{title:"Use generic instead of `any`",permalink:"/docusaurus/docs/typescript/generic-type"}},c={},p=[{value:"When to use",id:"when-to-use",level:2},{value:"Why to use",id:"why-to-use",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Example 1",id:"example-1",level:4},{value:"\ud83d\udd17 Reference",id:"-reference",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"when-to-use"},"When to use"),(0,i.kt)("p",null,"Handle all case in switch case statement. ",(0,i.kt)("br",null),"\nEspecially in enum type, custom union type."),(0,i.kt)("h2",{id:"why-to-use"},"Why to use"),(0,i.kt)("p",null,"Especially enum type, we want to handle all cases in switch - case statement. ",(0,i.kt)("br",null),"\nIf we just write ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," is not enough. Maybe it doesn't handle other cases according to in enum, or custom type you defined."),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"Make variable ",(0,i.kt)("inlineCode",{parentName:"p"},"never")," type from function argument. ",(0,i.kt)("br",null),"\nTypescript compiler would check that are there missing types not handled above ",(0,i.kt)("inlineCode",{parentName:"p"},"case:")," . "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"never")," type is used when you are sure that something is never going to occur."))),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/functions.html#never"},"official typescript ",(0,i.kt)("inlineCode",{parentName:"a"},"never")," document")),(0,i.kt)("h4",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Pig {\n    kind: 'pig',\n    growling(): void\n}\ninterface Rooster {\n    kind: 'rooster'\n    growling(): void\n}\n\ninterface Cow {\n    kind: 'cow'\n    growling(): void\n}\n\ninterface Sheep {\n    kind: 'sheep',\n    growling(): void\n}\n\ntype FarmAnimal = Pig | Rooster | Cow | Sheep\n\nfunction printGrowling(animal: FarmAnimal) {\n    switch (animal.kind) {\n        case \"pig\":\n            animal.growling()\n            return\n        case 'rooster':\n            animal.growling()\n            return\n        case 'cow':\n            animal.growling()\n            return\n        // case 'sheep':\n        //     animal.growling()\n        //     return\n        default:\n            // `never` type is used when you are sure that something is never going to occur.\n            // To enforce handling all types , You should make variable `never` type.\n            // \u26a0\ufe0f Typescript compiler notify you should handle `sheep` since not able to assign `sheep` type into `never`.\n            const _exhaustiveCheck: never = animal\n            throw new Error(_exhaustiveCheck)\n    }\n}\n")),(0,i.kt)("p",null,"Typescript compiler warn you in ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," clause, and make you implement all case. ",(0,i.kt)("br",null),"\nWrite your code safely in typescript using ",(0,i.kt)("inlineCode",{parentName:"p"},"never")," type!."),(0,i.kt)("h2",{id:"-reference"},"\ud83d\udd17 Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.technicalfeeder.com/2021/08/typescript-using-never-type-in-switch-case/"},"Technical Feeder post")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yceffort.kr/2022/03/understanding-typescript-never#switch-if-else-%EB%AC%B8%EC%97%90%EC%84%9C-%EC%9D%BC%EC%B9%98-%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EA%B0%92%EC%9D%B4-%EC%98%A4%EB%8A%94-%EA%B2%BD%EC%9A%B0"},"yceffort post"))))}u.isMDXComponent=!0}}]);