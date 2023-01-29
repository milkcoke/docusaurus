"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6218],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(7462),a=r(7294),l=r(6010),o=r(2466),i=r(6550),u=r(1980),s=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=b({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),v=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,a.useEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var v=r(2389);const k="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==i&&(d(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",g,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return a.createElement(S,(0,n.Z)({key:String(t)},e))}},7394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),l=r(4866),o=r(5162);const i={title:"Iterator",description:"How to implement Iterable interface and iterator operator.",tags:["kotlin"],last_update:{date:new Date("2023-01-30T00:00:00.000Z")}},u=void 0,s={unversionedId:"kotlin/syntax/Iterator",id:"kotlin/syntax/Iterator",title:"Iterator",description:"How to implement Iterable interface and iterator operator.",source:"@site/docs/kotlin/01-syntax/10-Iterator.md",sourceDirName:"kotlin/01-syntax",slug:"/kotlin/syntax/Iterator",permalink:"/docusaurus/docs/kotlin/syntax/Iterator",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/kotlin/01-syntax/10-Iterator.md",tags:[{label:"kotlin",permalink:"/docusaurus/docs/tags/kotlin"}],version:"current",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 30\uc77c",sidebarPosition:10,frontMatter:{title:"Iterator",description:"How to implement Iterable interface and iterator operator.",tags:["kotlin"],last_update:{date:"2023-01-30T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Comparable & Comparator",permalink:"/docusaurus/docs/kotlin/syntax/Comparator_Comparable"},next:{title:"Create a Page",permalink:"/docusaurus/docs/kotlin/create-a-page"}},c={},d=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\uc608\uc81c \ucf54\ub4dc",id:"\uc608\uc81c-\ucf54\ub4dc",level:2},{value:"\uc2e4\ud589 \uacb0\uacfc",id:"\uc2e4\ud589-\uacb0\uacfc",level:4}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,a.kt)("p",null,"\uceec\ub809\uc158\uc744 \uac16\ub294 \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ud130\ub808\uc774\ud130\ub85c \uc21c\ud68c\ud558\uace0\uc790 \ud560 \ub54c \ub2e4\uc74c \uc608\uc81c\ucf54\ub4dc\ub97c \ud65c\uc6a9\ud558\uba74 \ub41c\ub2e4."),(0,a.kt)("h2",{id:"\uc608\uc81c-\ucf54\ub4dc"},"\uc608\uc81c \ucf54\ub4dc"),(0,a.kt)("p",null,"\uc8fc\uc2dd \uac00\uaca9, \uc8fc\uc2dd \uc885\ubaa9\uba85, \ub9e4\uc218\uc790 \ubaa9\ub85d\uc744 \uad00\ub9ac\ud558\ub294 \ub370\uc774\ud130 \ud074\ub798\uc2a4\ub97c \uc815\uc758\ud558\uace0 ",(0,a.kt)("br",null),"\n\ubaa8\ub4e0 \ub9e4\uc218\uc790 \ubaa9\ub85d\uc744 \ucd9c\ub825\ud558\ub294 \uc608\uc81c"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"for in",label:"IteratingProperty.kt",mdxType:"TabItem"},(0,a.kt)("p",null,"\ub9e4\uc218\uc790 \ubaa9\ub85d \uc18d\uc131\uc5d0 \uc9c1\uc811 \uc811\uadfc\ud558\uc5ec \uc21c\ud68c\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Stock(var price: Int, val name: String, val biderNames: MutableList<String>) {}\n\n@Test\ninternal fun bidTest() {\n    val biders = mutableListOf<String>(\n        "YHS",\n        "BSM",\n        "BSH",\n        "JYM",\n        "SHM"\n    )\n\n    val stock = Stock(200_000, "nexon", biders)\n    // highlight-next-line\n    for (biderName in stock.biderNames) {\n        println(biderName)\n    }\n}\n'))),(0,a.kt)(o.Z,{value:"client-iterator",label:"ClientIteratorOperator.kt",mdxType:"TabItem"},(0,a.kt)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"iterator")," \uc5f0\uc0b0\uc790 \ud568\uc218\ub97c \uc815\uc758\ud558\uc5ec \uc21c\ud68c\uc2dc \uace7\ubc14\ub85c \ub9e4\uc218\uc790 \ubaa9\ub85d\uc5d0 \uc811\uadfc\ud558\ub3c4\ub85d \ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Stock(var price: Int, val name: String, val biderNames: MutableList<String>) {}\n\n@Test\ninternal fun iteratorTest() {\n    val biderNames = mutableListOf<String>(\n        "YHS",\n        "BSM",\n        "BSH",\n        "JYM",\n        "SHM"\n    )\n\n    val stock = Stock(200_000, "nexon", biderNames)\n    // highlight-next-line\n    operator fun Stock.iterator() = biderNames.iterator()\n\n    for (biderName in stock) {\n        println(biderName)\n    }\n}\n'))),(0,a.kt)(o.Z,{value:"class-iterator",label:"ClassIteratorOperator.kt",mdxType:"TabItem"},(0,a.kt)("p",null,"\ud074\ub798\uc2a4 \ub0b4\uc5d0\uc11c iterator \uc5f0\uc0b0\uc790 \uba54\uc18c\ub4dc\ub97c \uc815\uc758\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Stock(var price: Int, val name: String, val biderNames: MutableList<String>) {\n    // highlight-next-line\n    operator fun iterator() = biderNames.iterator()\n}\n\n@Test\ninternal fun iteratorTest() {\n    val biderNames = mutableListOf<String>(\n        "YHS",\n        "BSM",\n        "BSH",\n        "JYM",\n        "SHM"\n    )\n\n    val stock = Stock(200_000, "nexon", biderNames)\n\n    for (biderName in stock) {\n        println(biderName)\n    }\n}\n')))),(0,a.kt)("h4",{id:"\uc2e4\ud589-\uacb0\uacfc"},"\uc2e4\ud589 \uacb0\uacfc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"YHS\nBSM\nBSH\nJYM\nSHM\n")))}m.isMDXComponent=!0}}]);