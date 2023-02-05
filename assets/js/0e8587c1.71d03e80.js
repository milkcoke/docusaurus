"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2685],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,f=c["".concat(o,".").concat(k)]||c[k]||d[k]||i;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Pair and Triple in Kotlin",description:"Introduce Pair and Triple data class in kotlin.",tags:["kotlin"],keywords:["kotlin"],last_update:{date:new Date("2023-01-06T00:00:00.000Z")}},l="Pair and Triple",s={unversionedId:"kotlin/default-syntax/Pair-Triple",id:"kotlin/default-syntax/Pair-Triple",title:"Pair and Triple in Kotlin",description:"Introduce Pair and Triple data class in kotlin.",source:"@site/docs/kotlin/01-default-syntax/04-Pair-Triple.md",sourceDirName:"kotlin/01-default-syntax",slug:"/kotlin/default-syntax/Pair-Triple",permalink:"/docusaurus/docs/kotlin/default-syntax/Pair-Triple",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/kotlin/01-default-syntax/04-Pair-Triple.md",tags:[{label:"kotlin",permalink:"/docusaurus/docs/tags/kotlin"}],version:"current",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 6\uc77c",sidebarPosition:4,frontMatter:{title:"Pair and Triple in Kotlin",description:"Introduce Pair and Triple data class in kotlin.",tags:["kotlin"],keywords:["kotlin"],last_update:{date:"2023-01-06T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Type Casting",permalink:"/docusaurus/docs/kotlin/default-syntax/Type-Casting"},next:{title:"const vs val",permalink:"/docusaurus/docs/kotlin/default-syntax/const-vs-val"}},o={},p=[{value:"Pair",id:"pair",level:2},{value:"When to use?",id:"when-to-use",level:3},{value:"How to use",id:"how-to-use",level:3},{value:"PairTest.kt",id:"pairtestkt",level:4},{value:"Triple",id:"triple",level:2},{value:"Java \uc5d0\uc11c\ub294?",id:"java-\uc5d0\uc11c\ub294",level:2},{value:"JavaTripleTest.java",id:"javatripletestjava",level:4}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pair-and-triple"},"Pair and Triple"),(0,r.kt)("h2",{id:"pair"},"Pair"),(0,r.kt)("p",null,"Data class \ub85c 2\uac1c\uc758 \ub370\uc774\ud130\ub97c \uac1d\uccb4\ub85c \ub9cc\ub4dc\ub294\ub370 \ud65c\uc6a9\ud55c\ub2e4."),(0,r.kt)("h3",{id:"when-to-use"},"When to use?"),(0,r.kt)("p",null,"\uc11c\ub85c \ub2e4\ub978 \uc790\ub8cc\ud615 \uc30d\uc774 \ud544\uc694\ud560 \ub54c"),(0,r.kt)("h3",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Pair()")," \uc0dd\uc131\uc790\ub97c \uc0ac\uc6a9\ud574\uc11c \uc120\uc5b8\ud560 \uc218\ub3c4 \uc788\uace0 ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'"a" to 2')," \uc640 \uac19\uc774 infix \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,r.kt)("h4",{id:"pairtestkt"},"PairTest.kt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'    @Test\n    internal fun testPair() {\n        val pair1 = Pair("a", 1)\n        val pair2 = Pair("b", 2)\n        val pair3 = "c" to 3\n        assertThat(pair1.first).isEqualTo("a")\n        assertThat(pair1.second).isEqualTo(1)\n    }\n')),(0,r.kt)("p",null,"Data class \uae30 \ub54c\ubb38\uc5d0 \uad6c\uc870\ubd84\ud574\ud560\ub2f9\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"    @Test\n    internal fun testDestructuringPair() {\n        val point = Pair(3, 5)\n        // highlight-next-line\n        val (X, Y) = point // Destructuring\n        assertThat(X).isEqualTo(3)\n        assertThat(Y).isEqualTo(5)\n    }\n")),(0,r.kt)("h2",{id:"triple"},"Triple"),(0,r.kt)("p",null,"Data class \ub85c 3\uac1c\uc758 \ub370\uc774\ud130\ub97c \uac1d\uccb4\ub85c \ub9cc\ub4dc\ub294\ub370 \ud65c\uc6a9\ud55c\ub2e4. ",(0,r.kt)("br",null),"\n\uc774\ub984 \uadf8\ub300\ub85c \uac2f\uc218\uac00 3\uac1c\ub85c \ub298\uc5c8\uc744 \ubfd0\uc774\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'    @Test\n    internal fun testTriple() {\n        val triple = Triple("x", 5, 3.0)\n        assertThat(triple.first).isEqualTo("x")\n        assertThat(triple.second).isEqualTo(5)\n        assertThat(triple.third).isEqualTo(3.0)\n    }\n')),(0,r.kt)("h2",{id:"java-\uc5d0\uc11c\ub294"},"Java \uc5d0\uc11c\ub294?"),(0,r.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c Pair, Triple \uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc9c1\uc811 \uc815\uc758\ud574\uc57c\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("del",{parentName:"strong"},"\uc790\ubc14 \uad6c\ub370\uae30"))),(0,r.kt)("h4",{id:"javatripletestjava"},"JavaTripleTest.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class Triple <T, G, U>{\n    private T first;\n    private G second;\n    private U third;\n    Triple(T first, G second, U third) {\n        this.first = first;\n        this.second = second;\n        this.thrid = third;\n    }\n}\n\npublic class PairTripleTest2 {\n    @Test\n    void pairTest() {\n        Triple triple = new Triple("a", 3, 2.0);\n    }\n}\n')))}c.isMDXComponent=!0}}]);