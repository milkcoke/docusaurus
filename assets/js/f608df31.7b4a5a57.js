"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7462),a=n(7294),i=n(6010),o=n(2466),s=n(6550),l=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,c]=h({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),y=(()=>{const e=l??p;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var y=n(2389);const f="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(p(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",b,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",f)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function x(e){const t=(0,y.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},7451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(4866),o=n(5162);const s={title:"Use generic instead of `any`",description:"When and Why need generic type",tags:["typescript"],keywords:["typescript"],last_update:{date:new Date("2023-03-14T00:00:00.000Z")}},l=void 0,c={unversionedId:"typescript/generic-type",id:"typescript/generic-type",title:"Use generic instead of `any`",description:"When and Why need generic type",source:"@site/docs/typescript/08-generic-type.md",sourceDirName:"typescript",slug:"/typescript/generic-type",permalink:"/docusaurus/docs/typescript/generic-type",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/typescript/08-generic-type.md",tags:[{label:"typescript",permalink:"/docusaurus/docs/tags/typescript"}],version:"current",lastUpdatedAt:1678752e3,formattedLastUpdatedAt:"Mar 14, 2023",sidebarPosition:8,frontMatter:{title:"Use generic instead of `any`",description:"When and Why need generic type",tags:["typescript"],keywords:["typescript"],last_update:{date:"2023-03-14T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Why should we use `never` in switch case in typescript",permalink:"/docusaurus/docs/typescript/switch-case-tip"},next:{title:"Type declaration",permalink:"/docusaurus/docs/typescript/type-declaration"}},u={},p=[{value:"When to use",id:"when-to-use",level:2},{value:"Why to use",id:"why-to-use",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Type inference in Generic",id:"type-inference-in-generic",level:3},{value:"pickRandomElement.test.ts",id:"pickrandomelementtestts",level:4},{value:"mergeObject.test.ts",id:"mergeobjecttestts",level:4},{value:"constraintGeneric.test.ts",id:"constraintgenerictestts",level:4},{value:"constraintGeneric2.test.ts",id:"constraintgeneric2testts",level:4},{value:"How to decide to use generic with <code>extends</code> or interface?",id:"how-to-decide-to-use-generic-with-extends-or-interface",level:3},{value:"Default type allocation",id:"default-type-allocation",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"when-to-use"},"When to use"),(0,a.kt)("p",null,"Required general function for covering all type. ",(0,a.kt)("br",null),"\nSuppose return itself as it is. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function getNumberFirstElement(arr: number[]): number {\n    return arr[0];\n}\nfunction getStringFirstElement(arr: string[]): string {\n    return arr[0]\n}\n// ..\n")),(0,a.kt)("p",null,"You should have write handy code with all types you need."),(0,a.kt)("h2",{id:"why-to-use"},"Why to use"),(0,a.kt)("p",null,"There's ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," type in typescript. ",(0,a.kt)("br",null),"\nBut it doesn't care about that data type changed in function (e.g. request type and response type is not matched)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function getNumberFirstElement(arr: any[]): any {\n    // No error whatever something type\n    // e.g. number to string\n    return arr[0].toString()\n}\n")),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"Declare function with ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," keyword."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// higlihght-next-line\nfunction returnItSelf<T>(something: T): T {\n    // Ensure request type and reesponse type is same.\n    return something\n}\n\ndescribe('Generics', ()=>{\n    test('generic function call', ()=>{\n        const str = 'Khazix'\n        expect(typeof str).toBe('string')\n        expect(typeof returnItSelf(str)).toBe('string')\n        \n        const num = 5\n        expect(typeof num).toBe('number')\n        expect(typeof returnItSelf(num)).toBe('number')\n    })\n})\n")),(0,a.kt)("p",null,"You get reusable code using generic type. ",(0,a.kt)("br",null),"\nMake it easier to write modular code that can be used in different contexts. ",(0,a.kt)("br",null),"\nHowever, take care about overuse of generic types can make code more complex and harder to read. ",(0,a.kt)("br",null),"\nIt's important to get balance between flexibility and simplicity."),(0,a.kt)("h3",{id:"type-inference-in-generic"},"Type inference in Generic"),(0,a.kt)("p",null,"Typescript compiler supports type inference at generic type function from input type. ",(0,a.kt)("br",null),"\nIt's enough smart to infer type."),(0,a.kt)("h4",{id:"pickrandomelementtestts"},"pickRandomElement.test.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('Generics', ()=> {\n    function pickRandomElement<T>(arr: T[]): T {\n        const randomIdx = Math.floor(Math.random() * arr.length)\n        return arr[randomIdx]\n    }\n    \n    test('Pick random number from array',()=>{\n        const nums = [1, 6, 3, 4]\n        const randomNum = pickRandomElement(nums)\n        // Typescript compiler already knows typeof randomNum is number\n        // also knows input type is number[]\n        randomNum.toExponential(3)\n    })\n\n    test('Pick random string from array', ()=>{\n        const strs = ['khazix', 'rumble', 'jayce']\n        const str = pickRandomElement(strs)\n        // Typescript compiler is smart!\n        str.toLowerCase()\n    })\n})\n")),(0,a.kt)("h4",{id:"mergeobjecttestts"},"mergeObject.test.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('Generic2',()=>{\n    // Notify type and return type to typescript compiler.\n    function mergeObj<T,U>(obj1: T, obj2: U): T & U {\n        return {\n            ...obj1,\n            ...obj2\n        }\n    }\n\n    interface RGB {\n        R: number\n        G: number\n        B: number\n    }\n    interface Circle {\n        radius: number\n    }\n\n    test('Merge any type object', ()=>{\n        const rgb : RGB = {R: 221, G: 15, B: 93}\n        const circle : Circle = {radius: 4}\n        // TSC let you know what's the return type of `mergeObj()` by type inference\n        // since Generic <T, U> is used to define function. \n        // highlight-next-line\n        const drawing = mergeObj(rgb, circle)\n\n        expect(drawing.R).toBe(rgb.R)\n        expect(drawing.G).toBe(rgb.G)\n        expect(drawing.B).toBe(rgb.B)\n        expect(drawing.radius).toBe(circle.radius)\n    })\n})\n")),(0,a.kt)("h4",{id:"constraintgenerictestts"},"constraintGeneric.test.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('Restrict generic parameter with extends', ()=>{\n    // Restrict only object parameter on function\n    // highlight-next-line\n    function mergeObj<T extends Object,U extends Object>(obj1: T, obj2: U): T & U {\n        return {\n            ...obj1,\n            ...obj2\n        }\n    }\n\n    test('merge: primitive types should not be spread except string', ()=>{\n        expect(mergeObj({name: 'khazix'}, 4)).toStrictEqual({name: 'khazix'})\n        expect(mergeObj({name: 'khazix'}, false)).toStrictEqual({name: 'khazix'})\n        expect(mergeObj({name: 'khazix'}, null)).toStrictEqual({name: 'khazix'})\n        expect(mergeObj({name: 'khazix'}, 'str')).not.toStrictEqual(({name: 'khazix'}))\n    })\n})\n")),(0,a.kt)("h4",{id:"constraintgeneric2testts"},"constraintGeneric2.test.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('Restrict generic parameter with extends or interface', ()=> {\n    // When to use type generic and when to use interface on parameter?\n    // More generic code, and modifiable\n    // However, it's not easy to maintain the code\n    function printDoubleLength<T extends Lengthy>(thing: T): number {\n        return thing.length * 2\n    }\n\n    interface Lengthy {\n        length: number\n    }\n\n\n    function printDoubleLengthWithInterface(thing: Lengthy): number {\n        return thing.length * 2\n    }\n\n\n    test('Constraint with generic', () => {\n        const str = 'sdt'\n        expect(printDoubleLength(str)).toBe(str.length * 2)\n    })\n    \n    test('Constraint with interface', ()=>{\n        const lengtyd = {\n            length: 7,\n            age: 23\n        }\n        expect(printDoubleLengthWithInterface(lengtyd)).toBe(lengtyd.length * 2)\n    })\n})\n")),(0,a.kt)("h3",{id:"how-to-decide-to-use-generic-with-extends-or-interface"},"How to decide to use generic with ",(0,a.kt)("inlineCode",{parentName:"h3"},"extends")," or interface?"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"I usually recommend ",(0,a.kt)("inlineCode",{parentName:"p"},"interface")," for maintenance.")),(0,a.kt)("p",null,"Generic type function is not easy to maintain even if it's a little more flexible. ",(0,a.kt)("br",null),"\nHowever, when to make library code, you could consider using generic with ",(0,a.kt)("inlineCode",{parentName:"p"},"extends"),"."),(0,a.kt)("h3",{id:"default-type-allocation"},"Default type allocation"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"makeArray",label:"makeArray.ts",mdxType:"TabItem"},(0,a.kt)("p",null,"Default type allocation as shown below. ",(0,a.kt)("br",null),"\nIf use bracket on general function, type allocation occurs, if don't, default type is allocated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Default type is string <T = string>\n// highlight-next-line\nfunction makeEmptyList<T = string>(): T[] {\n    return []\n}\n\nconst strs = makeEmptyList()\n// Just allowed push 'string'\n// highlight-next-line\nstrs.push('5')\n\nconst numbers = makeEmptyList<number>()\n// Just allowed to push 'number'\n// highlight-next-line\nnumbers.push(5)\n"))),(0,a.kt)(o.Z,{value:"Champion",label:"ChampionList.ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type VERSION = 'v1' | 'v2'\n\nexport interface ChampionV1 {\n    version: 'v1'\n    name: string\n    hp: number\n}\nexport interface ChampionV2 {\n    version: 'v2'\n    name: string\n    hp: number\n    mp: number\n}\n\n\nexport default class ChampionList<T> {\n    public queue: T[] = []\n    add(element: T): void {\n        this.queue.push(element)\n    }\n\n    printAllQueue(): void {\n        for (const element of this.queue) {\n            console.log(element)\n        }\n    }\n}\n"))),(0,a.kt)(o.Z,{value:"ChampionTest",label:"ChampionList.test.ts",mdxType:"TabItem"},(0,a.kt)("p",null,"champV1List permit only add element of ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," not allowed since type allocation with bracket"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const champV1List = new ChampionList<ChampionV1>()\nchampV1List.add({\n    version: 'v1',\n    name: 'Garen',\n    hp: 500,\n})\n\nchampV1List.add({\n    // \ud83d\udeab Not allowed\n    // highlight-next-line\n    version: 'v2',\n    name: 'Garen',\n    hp: 550,\n    mp: 0\n})\n")))))}m.isMDXComponent=!0}}]);