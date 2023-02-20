"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,m=c["".concat(s,".").concat(y)]||c[y]||d[y]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:r}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=s??c;return y({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const g="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==l&&(c(t),s(r))},y=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:y,onClick:d},i,{className:(0,o.Z)("tabs__item",h,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},2365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={title:"Union type & Literal type",description:"How to use union type and type narrowing in typescript.",tags:["typescript"],keywords:["typescript"],last_update:{date:new Date("2023-02-17T00:00:00.000Z")}},s=void 0,u={unversionedId:"typescript/union-type",id:"typescript/union-type",title:"Union type & Literal type",description:"How to use union type and type narrowing in typescript.",source:"@site/docs/typescript/01-union-type.md",sourceDirName:"typescript",slug:"/typescript/union-type",permalink:"/docusaurus/ko/docs/typescript/union-type",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/typescript/01-union-type.md",tags:[{label:"typescript",permalink:"/docusaurus/ko/docs/tags/typescript"}],version:"current",lastUpdatedAt:1676592e3,formattedLastUpdatedAt:"2023\ub144 2\uc6d4 17\uc77c",sidebarPosition:1,frontMatter:{title:"Union type & Literal type",description:"How to use union type and type narrowing in typescript.",tags:["typescript"],keywords:["typescript"],last_update:{date:"2023-02-17T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Typescript",permalink:"/docusaurus/ko/docs/category/typescript"}},p={},c=[{value:"Union type",id:"union-type",level:2},{value:"example.ts",id:"examplets",level:4},{value:"Array with union type",id:"array-with-union-type",level:3},{value:"Type narrowing",id:"type-narrowing",level:2},{value:"Primitive.ts",id:"primitivets",level:4},{value:"customTypeUnion.ts",id:"customtypeunionts",level:4},{value:"Tips",id:"tips",level:3},{value:"Literal Type",id:"literal-type",level:2},{value:"When to use?",id:"when-to-use",level:3}],d={toc:c};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"union-type"},"Union type"),(0,a.kt)("h4",{id:"examplets"},"example.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let age : number | string;\n\ntype Point = {\n    x: number;\n    y: number;\n}\n\ntype Log = {\n    latitude: number;\n    longitude: number;\n}\n// Union two types\ntype Coordinate = Point | Log;\n")),(0,a.kt)("h3",{id:"array-with-union-type"},"Array with union type"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ok",label:"arrayUnion.ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// OK\nconst ages: (number | string)[] = [15, 23, "15", "23"];\n'))),(0,a.kt)(i.Z,{value:"fail",label:"failArrayUnion.ts",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\ud83d\udeab error occurs 'true'(boolean) is not allowed")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// Fail\nconst ages: (number | string)[] = [15, 23, "15", "23", true];\n')))),(0,a.kt)("h2",{id:"type-narrowing"},"Type narrowing"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"We can type narrowing with ",(0,a.kt)("inlineCode",{parentName:"strong"},"typeof")," keyword.")),(0,a.kt)("h4",{id:"primitivets"},"Primitive.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// Type Narrowing\nconsole.log(isTeenager(23));\n\nfunction isTeenager (age: number | string) : boolean {\n    if (typeof age === "string") {\n        return age.charAt(0) === \'1\';\n    }\n    if (typeof age === "number") {\n        return age >= 10 && age < 20;\n    }\n\n    throw new TypeError("Invalid age type");\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"typeof")," only supports at primitive type ",(0,a.kt)("br",null),'\n"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"')),(0,a.kt)("h4",{id:"customtypeunionts"},"customTypeUnion.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'type Point = {\n    x: number;\n    y: number;\n}\ntype Log = {\n    latitude: number;\n    longitude: number;\n}\n\nfunction printCoordinate(coordinate: Point | Log) {\n    // \ud83d\udeab error occurs\n    // highlight-next-line\n    if (typeof coordinate === "Point") {\n        // ..\n    }\n}\n')),(0,a.kt)("h3",{id:"tips"},"Tips"),(0,a.kt)("p",null,"Types in typescript are ",(0,a.kt)("strong",{parentName:"p"},"open")," in the sense that an object has to have ",(0,a.kt)("strong",{parentName:"p"},"at least the properties.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type DataA = {\n    value: number,\n    data: string\n}\n\ntype DataB = {\n    value: number,\n    note: string\n}\n\ntype Data = DataA | DataB;\n\nconst dataA : Data = {\n    value: 3,\n    data: 'str',\n    // \u2705 Ok although it consists of combination DataA and DataB.\n    note: 'adk',\n    // \ud83d\udeab Not allowed extra property\n    // z: 'adsa'\n}\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Don't use union type only if you want to restrict exclusive type. ",(0,a.kt)("br",null),"\nIt's open.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/mapped-types.html"},"mapped")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/conditional-types.html"},"conditional types")," to express an exclusive union of object types.")),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/46370222/why-does-a-b-allow-a-combination-of-both-and-how-can-i-prevent-it/46370791#46370791"},"stackoverflow Q & A"),"."),(0,a.kt)("h2",{id:"literal-type"},"Literal Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// 0 is literal type not value of `zero`\nlet zero : 0 = 0;\n// \ud83d\udeab error occurs\nzero = 2; // can\'t allocation value 2 to type 0\n\n// "hi" is type of `hi`\n// \ud83d\udeab error occurs\nlet hi: "hi" = "khazix"; // type of hi is "hi" so can\'t allocate value "khazix"\n')),(0,a.kt)("h3",{id:"when-to-use"},"When to use?"),(0,a.kt)("p",null,"If you combination with union type and literal type. ",(0,a.kt)("br",null),"\nYou can restrict several literal type on parameter or return type as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// Union type + Literal type\ntype Answer = "yes" | "no" | "maybe";\n\nfunction getAnswerMsg(answer: Answer) {\n    return `answer is ${answer}`;\n}\n\n// only `Answer` type is allowed here.\nconst msg = getAnswerMsg("no");\n')))}y.isMDXComponent=!0}}]);