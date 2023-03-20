"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),y=r,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||s;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7462),r=n(7294),s=n(6010),o=n(2466),i=n(6550),l=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,u]=m({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),h=(()=>{const e=l??c;return y({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var h=n(2389);const g="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),l(a))},y=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:y,onClick:d},o,{className:(0,s.Z)("tabs__item",k,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},6134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),s=n(4866),o=n(5162);const i={title:"Type declaration",description:"How to use .d.ts file?",tags:["typescript"],keywords:["typescript"],last_update:{date:new Date("2023-03-20T00:00:00.000Z")}},l=".d.ts",u={unversionedId:"typescript/type-declaration",id:"typescript/type-declaration",title:"Type declaration",description:"How to use .d.ts file?",source:"@site/docs/typescript/09-type-declaration.md",sourceDirName:"typescript",slug:"/typescript/type-declaration",permalink:"/docusaurus/docs/typescript/type-declaration",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/typescript/09-type-declaration.md",tags:[{label:"typescript",permalink:"/docusaurus/docs/tags/typescript"}],version:"current",lastUpdatedAt:1679270400,formattedLastUpdatedAt:"Mar 20, 2023",sidebarPosition:9,frontMatter:{title:"Type declaration",description:"How to use .d.ts file?",tags:["typescript"],keywords:["typescript"],last_update:{date:"2023-03-20T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Use generic instead of `any`",permalink:"/docusaurus/docs/typescript/generic-type"},next:{title:"Go",permalink:"/docusaurus/docs/category/go"}},p={},c=[{value:"When to use",id:"when-to-use",level:2},{value:"Why to use?",id:"why-to-use",level:2},{value:"Contents",id:"contents",level:2},{value:"How to use?",id:"how-to-use",level:2},{value:"How typescript compiler know type of any module?",id:"how-typescript-compiler-know-type-of-any-module",level:3},{value:"package.json",id:"packagejson",level:4},{value:"Advantage",id:"advantage",level:3},{value:"AxiosResponseType.test.ts",id:"axiosresponsetypetestts",level:4}],d={toc:c};function y(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dts"},".d.ts"),(0,r.kt)("p",null,"Why .d.ts file is used? when to use? ",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type declaration"),(0,r.kt)("li",{parentName:"ul"},"Use javascript library in typescript")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".d.ts file doesn't generate .js file")),(0,r.kt)("h2",{id:"why-to-use"},"Why to use?"),(0,r.kt)("p",null,"Many packages are written by javascript.\nIf package wouldn't have type definition file  ",(0,r.kt)("br",null),"\nWe can use it and find type in typescript project ",(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," file allow using a package with type on typescript project even though that package is written by javascript.")),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("p",null,"Almost of all codes which are consists of namespace, interface, type, and method signature."),(0,r.kt)("h2",{id:"how-to-use"},"How to use?"),(0,r.kt)("p",null,"Show you ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," example ",(0,r.kt)("inlineCode",{parentName:"p"},"index.d.ts")),(0,r.kt)("p",null,"You can find this on ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/axios")," ",(0,r.kt)("br",null),"\n",(0,r.kt)("img",{alt:"axios_package",src:n(3393).Z,width:"272",height:"295"})),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"axios-type",label:"index.d.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"\ninterface AxiosResponse<T = any, D = any>  {\n    data: T;\n    status: number;\n    statusText: string;\n    headers: RawAxiosResponseHeaders | AxiosResponseHeaders;\n    config: InternalAxiosRequestConfig<D>;\n    request?: any;\n}\n\nexport type Method =\n    | 'get' | 'GET'\n    | 'delete' | 'DELETE'\n    | 'head' | 'HEAD'\n    | 'options' | 'OPTIONS'\n    | 'post' | 'POST'\n    | 'put' | 'PUT'\n    | 'patch' | 'PATCH'\n    | 'purge' | 'PURGE'\n    | 'link' | 'LINK'\n    | 'unlink' | 'UNLINK';\n\n// ..\n\ndeclare const axios: AxiosStatic;\n\nexport default axios;\n"))),(0,r.kt)(o.Z,{value:"usage axios",label:"axios.test.ts",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," file already exists on 'axios' (index.d.ts)\nSo we don't need additional tasks when to use this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios, {AxiosResponse} from 'axios'\n\n// package.json tells typescript where to find the types from module.\n// So we can find type declaration.\naxios.get('https://localhost:8080')\n    // AxiosResponse type is provided by index.d.ts\n    .then((res: AxiosResponse) =>{\n        console.log(res.status)\n    })\n\n")))),(0,r.kt)("h3",{id:"how-typescript-compiler-know-type-of-any-module"},"How typescript compiler know type of any module?"),(0,r.kt)("p",null,"![axios package.json]","\nIn package.json, in there ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," is defined.  "),(0,r.kt)("h4",{id:"packagejson"},"package.json"),(0,r.kt)("p",null,"In axios, type is defined as shown below. ",(0,r.kt)("br",null),"\nSo, we don't need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/axios")," module for typescript project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.json"},'{\n  "name": "axios",\n  "version": "1.3.4",\n  "description": "Promise based HTTP client for the browser and node.js",\n  "main": "index.js",\n// .. \n  },\n  "type": "module", \n  "types": "index.d.ts", // \u2705 Let tsc know type from axios package.\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If the package doesn't have ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," file , you have to add @types/${package-name} on package.json (normally the name of which is ",(0,r.kt)("inlineCode",{parentName:"p"},"index.d.ts"),") ",(0,r.kt)("br",null),"\nAlso, if @types/* not exists too? and then you should create ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," for using it with type in typescript project.")),(0,r.kt)("h3",{id:"advantage"},"Advantage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"comes with its advantage"),(0,r.kt)("li",{parentName:"ol"},"Generic + interface => TSC infer type flexibly")),(0,r.kt)("h4",{id:"axiosresponsetypetestts"},"AxiosResponseType.test.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios, {AxiosResponse} from 'axios'\n\ninterface User {\n    id: number\n    name: string\n    email: string\n    address: {\n        street: string\n        suite: string\n        city: string\n        zipcode: string\n        geo: {\n            lat: string\n            lng: string\n        }\n    },\n    phone: string\n    website: string\n    company: {\n        name: string\n        catchPhrase: string\n        bs: string\n    }\n}\n\naxios\n    // get<T = any, R = axios.AxiosResponse<T>, D = any>(url: string, config?: axios.AxiosRequestConfig<D>): Promise<R>;\n    // T: User => R: AxiosResponse<User\n    .get<User>('https://jsonplaceholder.typicode.com/users/1')\n    .then((res)=>{\n        // user's type is interpreted as User\n        const user = res.data\n        console.dir(user)\n    })\n    .catch(console.error)\n\naxios\n    .get('https://jsonplaceholder.typicode.com/users')\n    .then((res: AxiosResponse<User[]>)=>{\n        // user's type is interpreted as User\n        // Typescript anticipate response data type is User[]\n        const users = res.data\n        console.dir(users)\n    })\n    .catch(console.error)\n})\n")))}y.isMDXComponent=!0},3393:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/axios_package-7e492e3d56635d07cb4bc13fe6cc6e37.png"}}]);