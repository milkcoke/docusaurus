"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6953],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,k=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var r=a(7462),n=a(7294),o=a(6010),l=a(2466),s=a(6550),i=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=k({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=i??p;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=a(2389);const v="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==s&&(p(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",h,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function C(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function S(e){const t=(0,f.Z)();return n.createElement(C,(0,r.Z)({key:String(t)},e))}},9977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),o=a(4866),l=a(5162);const s={title:"Comparable & Comparator",description:"How to sort data with Comparable and Comparator?",tags:["kotlin"],last_update:{date:new Date("2023-01-29T00:00:00.000Z")}},i=void 0,c={unversionedId:"kotlin/syntax/Comparator_Comparable",id:"kotlin/syntax/Comparator_Comparable",title:"Comparable & Comparator",description:"How to sort data with Comparable and Comparator?",source:"@site/docs/kotlin/01-syntax/09-Comparator_Comparable.md",sourceDirName:"kotlin/01-syntax",slug:"/kotlin/syntax/Comparator_Comparable",permalink:"/docusaurus/docs/kotlin/syntax/Comparator_Comparable",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/kotlin/01-syntax/09-Comparator_Comparable.md",tags:[{label:"kotlin",permalink:"/docusaurus/docs/tags/kotlin"}],version:"current",lastUpdatedAt:1674950400,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 29\uc77c",sidebarPosition:9,frontMatter:{title:"Comparable & Comparator",description:"How to sort data with Comparable and Comparator?",tags:["kotlin"],last_update:{date:"2023-01-29T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Singleton Pattern",permalink:"/docusaurus/docs/kotlin/syntax/Singleton"},next:{title:"Iterator",permalink:"/docusaurus/docs/kotlin/syntax/Iterator"}},u={},p=[{value:"Comparator",id:"comparator",level:2},{value:"Comparable",id:"comparable",level:2},{value:"\uc608\uc81c",id:"\uc608\uc81c",level:2},{value:"\uc2e4\ud589 \uacb0\uacfc",id:"\uc2e4\ud589-\uacb0\uacfc",level:4},{value:"\u26a0\ufe0f \uc2e4\uc218\ud558\uae30 \uc26c\uc6b4 \uc608",id:"\ufe0f-\uc2e4\uc218\ud558\uae30-\uc26c\uc6b4-\uc608",level:2},{value:"SortTest.kt",id:"sorttestkt",level:4},{value:"\uc2e4\ud589 \uacb0\uacfc",id:"\uc2e4\ud589-\uacb0\uacfc-1",level:4}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"comparator"},"Comparator"),(0,n.kt)("p",null,"\uceec\ub809\uc158\uc758 \uc815\ub82c \uae30\uc900\uc744 \uc815\uc758\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub85c ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"compare()")," \ucd94\uc0c1 \uba54\uc18c\ub4dc\ub97c \uc815\uc758\ud574\uc57c\ud55c\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"// \uc6b0\uc120\uc21c\uc704 \ube44\uad50\n// a == b => 0\n// a < b => Negative value\n// a > b => Positive value \nabstract fun compare(a: T, b: T): Int\n")),(0,n.kt)("h2",{id:"comparable"},"Comparable"),(0,n.kt)("p",null,"\uceec\ub809\uc158\uc758 Default \uc815\ub82c \uae30\uc900\uc744 \uc815\uc758\ud55c\ub2e4. ",(0,n.kt)("br",null),"\nComparator \uac00 \uc784\uc2dc\ub85c \ub78c\ub2e4\uc2dd\uc744 \ub118\uae30\ub294 \ubc29\uc2dd\uc73c\ub85c \ud55c\ubc88 \uc4f0\uace0 \ub9d0 \uc815\uc758\ub97c \ud55c\ub2e4\uba74 ",(0,n.kt)("br",null),"\nComparable \uc740 \ud574\ub2f9 \uceec\ub809\uc158\uc758 \uae30\ubcf8 \uc815\ub82c\uae30\uc900\uc744 \ubbf8\ub9ac \uc815\uc758\ud55c\ub2e4\ub294 \uc810\uc774 \ub2e4\ub974\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"compareTo()")," \ucd94\uc0c1 \uba54\uc18c\ub4dc\ub97c \uc815\uc758\ud574\uc57c\ud55c\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"// \uc6b0\uc120\uc21c\uc704 \ube44\uad50\n// a == b => 0\n// a < b => Negative value\n// a > b => Positive value\nabstract operator fun compareTo(other: T): Int\n")),(0,n.kt)("h2",{id:"\uc608\uc81c"},"\uc608\uc81c"),(0,n.kt)("p",null,"\uac00\uaca9\uacfc \uc885\ubaa9 \uba85\uc744 \uac16\ub294 \uc8fc\uc2dd \ud074\ub798\uc2a4\ub97c \uc815\uc758\ud55c\ub2e4. ",(0,n.kt)("br",null),"\n\uac00\uaca9\uc744 \ub0b4\ub9bc\ucc28\uc21c, \uc885\ubaa9\uba85\uc740 \uc624\ub984\ucc28\uc21c\uc73c\ub85c \uc5ec\ub7ec \uc18d\uc131\uc744 \uae30\uc900\uc73c\ub85c \uc815\ub82c\ud558\uace0\uc2f6\ub2e4."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"comparable",label:"ComparableTest.kt",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'// highlight-next-line\ndata class Stock(var price: Int, val name: String) : Comparable<Stock> {\n    override fun compareTo(other: Stock): Int {\n        return if (this.price != other.price) other.price.compareTo(this.price)\n        else this.name.compareTo(other.name)\n    }\n}\n\n@Test\ninternal fun testSort() {\n    val stocks = arrayOf(\n        Stock(60_000, "Apple"),\n        Stock(60_000, "Amazon"),\n        Stock(60_000, "Google"),\n        Stock(50_000, "Microsoft"),\n        Stock(80_000, "Tesla")\n    )\n\n    // highlight-next-line\n    stocks.sort()\n    stocks.forEach { println(it) }\n}\n'))),(0,n.kt)(l.Z,{value:"Comparator",label:"ComparatorTest.kt",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Stock(var price: Int, val name: String)\n\n@Test\ninternal fun testComparator() {\n    val stocks = listOf(\n        Stock(60_000, "Apple"),\n        Stock(60_000, "Amazon"),\n        Stock(60_000, "Google"),\n        Stock(50_000, "Microsoft"),\n        Stock(80_000, "Tesla")\n    )\n\n    // \uac00\uaca9 \ub0b4\ub9bc\ucc28\uc21c \ud6c4 \uc774\ub984 \uc624\ub984\ucc28\uc21c\n    // sortedWith \uc758 \ud30c\ub77c\ubbf8\ud130\ub294 Comparator\n    // compareBy \uba54\uc18c\ub4dc\ub294 \uac00\ubcc0\uc778\uc790 \uc140\ub809\ud130\ub85c, \uc5ec\ub7ec \uc18d\uc131\uc744 \uba85\uc2dc\ud55c \uc21c\uc11c\ub300\ub85c \ud574\ub2f9 \uc18d\uc131\uc744 \uae30\uc900\uc73c\ub85c \uc815\ub82c\ud558\ub294 Comparator \uac1d\uccb4\ub97c \ubc18\ud658\ud55c\ub2e4.\n    // highlight-next-line\n    val stocksSorted = stocks.sortedWith(compareBy({-it.price}, {it.name}))\n    stocksSorted.forEach { println(it) }\n\n}\n')))),(0,n.kt)("h4",{id:"\uc2e4\ud589-\uacb0\uacfc"},"\uc2e4\ud589 \uacb0\uacfc"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Stock(price=80000, name=Tesla)\nStock(price=60000, name=Amazon)\nStock(price=60000, name=Apple)\nStock(price=60000, name=Google)\nStock(price=50000, name=Microsoft)\n")),(0,n.kt)("h2",{id:"\ufe0f-\uc2e4\uc218\ud558\uae30-\uc26c\uc6b4-\uc608"},"\u26a0\ufe0f \uc2e4\uc218\ud558\uae30 \uc26c\uc6b4 \uc608"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"sortedBy")," \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 \uc815\ub82c \uae30\uc900\uc744 \ucc28\ub840\ub300\ub85c \uc18d\uc131\uc744 \uccb4\uc774\ub2dd\ud558\ub294 \ud615\ud0dc\ub85c \uc815\ub82c\uc744 \uc2dc\ub3c4\ud558\uba74 ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"\ub9e8 \ub9c8\uc9c0\ub9c9 \uc815\ub82c\uae30\uc900\ub9cc \uc801\uc6a9\ub41c\ub2e4.")),(0,n.kt)("h4",{id:"sorttestkt"},"SortTest.kt"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Test\ninternal fun testComparator() {\n    val stocks = listOf(\n        Stock(60_000, "Apple"),\n        Stock(60_000, "Amazon"),\n        Stock(60_000, "Google"),\n        Stock(50_000, "Microsoft"),\n        Stock(80_000, "Tesla")\n    )\n\n    stocks.sortedBy { -it.price }\n        // \uc774\uc804 \uc815\ub82c \uae30\uc900\uc740 \ubb34\uc2dc\ub418\uc5b4 \uc774\ub984 \uae30\uc900 \uc624\ub984\ucc28\uc21c\uc5d0 \uc758\ud574 \ubb34\uc2dc\ub418\ub294 \ud6a8\uacfc.\n        // highlight-next-line\n        .sortedBy { it.name }\n        .forEach { println(it) }\n}\n')),(0,n.kt)("h4",{id:"\uc2e4\ud589-\uacb0\uacfc-1"},"\uc2e4\ud589 \uacb0\uacfc"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Stock(price=60000, name=Amazon)\nStock(price=60000, name=Apple)\nStock(price=60000, name=Google)\nStock(price=50000, name=Microsoft)\nStock(price=80000, name=Tesla)\n")))}d.isMDXComponent=!0}}]);