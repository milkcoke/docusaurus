"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),y=o,f=l["".concat(c,".").concat(y)]||l[y]||d[y]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"Use generic instead of `any`",description:"When and Why need generic type",tags:["typescript"],keywords:["typescript"],last_update:{date:new Date("2023-03-07T00:00:00.000Z")}},a=void 0,s={unversionedId:"typescript/generic-type",id:"typescript/generic-type",title:"Use generic instead of `any`",description:"When and Why need generic type",source:"@site/docs/typescript/08-generic-type.md",sourceDirName:"typescript",slug:"/typescript/generic-type",permalink:"/docusaurus/ko/docs/typescript/generic-type",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/typescript/08-generic-type.md",tags:[{label:"typescript",permalink:"/docusaurus/ko/docs/tags/typescript"}],version:"current",lastUpdatedAt:1678147200,formattedLastUpdatedAt:"2023\ub144 3\uc6d4 7\uc77c",sidebarPosition:8,frontMatter:{title:"Use generic instead of `any`",description:"When and Why need generic type",tags:["typescript"],keywords:["typescript"],last_update:{date:"2023-03-07T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Why should we use `never` in switch case in typescript",permalink:"/docusaurus/ko/docs/typescript/switch-case-tip"},next:{title:"Go",permalink:"/docusaurus/ko/docs/category/go"}},c={},p=[{value:"When to use",id:"when-to-use",level:2},{value:"Why to use",id:"why-to-use",level:2},{value:"How to use",id:"how-to-use",level:2}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"when-to-use"},"When to use"),(0,o.kt)("p",null,"Required general function for covering all type. ",(0,o.kt)("br",null),"\nSuppose return itself as it is. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function getNumberFirstElement(arr: number[]): number {\n    return arr[0];\n}\nfunction getStringFirstElement(arr: string[]): string {\n    return arr[0]\n}\n// ..\n")),(0,o.kt)("p",null,"You should have write handy code with all types you need."),(0,o.kt)("h2",{id:"why-to-use"},"Why to use"),(0,o.kt)("p",null,"There's ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," type in typescript. ",(0,o.kt)("br",null),"\nBut it doesn't care about that data type changed in function (e.g. request type and response type is not matched)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function getNumberFirstElement(arr: any[]): any {\n    // No error whatever something type\n    // e.g. number to string\n    return arr[0].toString()\n}\n")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Declare function with ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," keyword."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// higlihght-next-line\nfunction returnItSelf<T>(something: T): T {\n    // Ensure request type and reesponse type is same.\n    return something\n}\n\ndescribe('Generics', ()=>{\n    test('generic function call', ()=>{\n        const str = 'Khazix'\n        expect(typeof str).toBe('string')\n        expect(typeof returnItSelf(str)).toBe('string')\n        \n        const num = 5\n        expect(typeof num).toBe('number')\n        expect(typeof returnItSelf(num)).toBe('number')\n    })\n})\n")),(0,o.kt)("p",null,"You get reusable code. Make it easier to write modular code that can be used in different contexts. ",(0,o.kt)("br",null),"\nHowever, take care about overuse of generic types can make code more complex and harder to read.\nIt's important to get balance between flexibility and simplicity."))}l.isMDXComponent=!0}}]);