"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(v,i(i({ref:t},c),{},{components:r})):a.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={title:"Proxy Pattern",description:"Understand about proxy pattern",tags:["design-pattern","structure-pattern"],last_update:{date:new Date("2023-01-26T00:00:00.000Z")}},i=void 0,o={unversionedId:"design-pattern/structure-pattern/proxy-pattern",id:"design-pattern/structure-pattern/proxy-pattern",title:"Proxy Pattern",description:"Understand about proxy pattern",source:"@site/docs/design-pattern/02-structure-pattern/07-proxy-pattern.md",sourceDirName:"design-pattern/02-structure-pattern",slug:"/design-pattern/structure-pattern/proxy-pattern",permalink:"/docusaurus/docs/design-pattern/structure-pattern/proxy-pattern",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/design-pattern/02-structure-pattern/07-proxy-pattern.md",tags:[{label:"design-pattern",permalink:"/docusaurus/docs/tags/design-pattern"},{label:"structure-pattern",permalink:"/docusaurus/docs/tags/structure-pattern"}],version:"current",lastUpdatedAt:1674691200,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 26\uc77c",sidebarPosition:7,frontMatter:{title:"Proxy Pattern",description:"Understand about proxy pattern",tags:["design-pattern","structure-pattern"],last_update:{date:"2023-01-26T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Decorator Pattern",permalink:"/docusaurus/docs/design-pattern/structure-pattern/decorator-pattern"},next:{title:"Command Pattern",permalink:"/docusaurus/docs/design-pattern/behavior-pattern/command-pattern"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Why to use?",id:"why-to-use",level:2},{value:"When to use?",id:"when-to-use",level:2},{value:"How to use?",id:"how-to-use",level:2},{value:"GameService.java",id:"gameservicejava",level:4},{value:"DefaultGameService.java",id:"defaultgameservicejava",level:4},{value:"GameServiceProxy.java",id:"gameserviceproxyjava",level:4},{value:"GameServiceTest.java",id:"gameservicetestjava",level:4},{value:"\uc2e4\ud589\uacb0\uacfc",id:"\uc2e4\ud589\uacb0\uacfc",level:4},{value:"Class Diagram",id:"class-diagram",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"\ud83d\udd17 Reference",id:"-reference",level:2}],c={toc:u};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"\ubcf8 \uac1d\uccb4 \ub300\uc2e0 \ud504\ub85d\uc2dc \uac1d\uccb4\ub97c \uba3c\uc800 \uac70\uccd0\uc11c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\n",(0,n.kt)("img",{alt:"Proxy pattern diagram",src:r(3518).Z,width:"740",height:"740"}),"\n\ucd9c\ucc98: ",(0,n.kt)("a",{parentName:"p",href:"https://refactoring.guru/design-patterns/proxy"},"Design pattern guru")),(0,n.kt)("h2",{id:"why-to-use"},"Why to use?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Lazy Loading ",(0,n.kt)("br",null),"\n\uc0dd\uc131\uc2dc \ub9ce\uc740 \ub9ac\uc18c\uc2a4\uac00 \ud544\uc694\ud560 \ub54c \uc720\uc6a9"),(0,n.kt)("li",{parentName:"ul"},"\ub85c\uae45"),(0,n.kt)("li",{parentName:"ul"},"\uce90\uc2f1 ",(0,n.kt)("br",null))),(0,n.kt)("h2",{id:"when-to-use"},"When to use?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubcf8 \uac1d\uccb4\uc5d0 \ub300\ud55c \uc811\uadfc \uc81c\uc5b4\uac00 \ud544\uc694\ud560 \ub54c"),(0,n.kt)("li",{parentName:"ul"},"\ub85c\uae45, \uce90\uc2f1, \ub808\uc774\uc9c0 \ub85c\ub529 \ub4f1 \ud544\uc694\ud55c \uae30\ub2a5\uc744 \uae30\uc874 \ucf54\ub4dc \ubcc0\uacbd\uc5c6\uc774 ",(0,n.kt)("br",null),"\nOCP \uc6d0\uce59\uc744 \uc9c0\ud0a4\uba70 \ucd94\uac00\ud558\uace0 \uc2f6\uc744 \ub54c")),(0,n.kt)("h2",{id:"how-to-use"},"How to use?"),(0,n.kt)("p",null,"\ud504\ub85d\uc2dc \uac1d\uccb4\ub97c \uc815\uc758\ud55c\ub2e4. \uc774 \ub54c, Interface \ud0c0\uc785 \ud544\ub4dc\ub97c \uac16\ub294 property \ub97c \uc0dd\uc131\uc790 \uc8fc\uc785\ubc1b\uc744 \uc218 \uc788\uac8c \uac04\ub2e4. ",(0,n.kt)("br",null),"\n\uc774\ub294 \uad6c\ud604\uccb4 \ucc38\uc870 \ubcc0\uc218\ub97c \uc720\uc9c0\ud558\uae30 \uc704\ud55c \uac83\uc73c\ub85c \ub370\ucf54\ub808\uc774\ud130 \ud328\ud134\uacfc \uc720\uc0ac\ud558\ub2e4."),(0,n.kt)("h4",{id:"gameservicejava"},"GameService.java"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface GameService {\n    void loadGame() throws InterruptedException;\n    void startGame();\n}\n")),(0,n.kt)("h4",{id:"defaultgameservicejava"},"DefaultGameService.java"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class DefaultGameService implements GameService{\n    public void loadGame() throws InterruptedException {\n        System.out.println("\uac8c\uc784 \ub85c\ub529\uc911\uc785\ub2c8\ub2e4.");\n        // 1\ucd08 \uc9c0\uc5f0\n        Thread.sleep(1000L);\n        System.out.println("\ub85c\ub529 \uc644\ub8cc");\n    }\n    public void startGame() {\n        System.out.println("\uac8c\uc784 \uc2dc\uc791!");\n    }\n}\n')),(0,n.kt)("h4",{id:"gameserviceproxyjava"},"GameServiceProxy.java"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@Getter\n@RequiredArgsConstructor(access = AccessLevel.PUBLIC)\npublic class GameServiceProxy implements GameService {\n    private final GameService gameService;\n\n    @Override\n    public void loadGame() throws InterruptedException {\n        // lazy Loading\n//        if (gameService == null) {this.gameService = new DefaultGameService();}\n\n        long before = System.currentTimeMillis();\n        this.gameService.loadGame();\n        long after = System.currentTimeMillis();\n        System.out.println(after - before + "ms elapsed.");\n    }\n\n    @Override\n    public void startGame() {\n    }\n}\n')),(0,n.kt)("h4",{id:"gameservicetestjava"},"GameServiceTest.java"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"class GameServiceTest {\n    @Test\n    void loadGameTest() throws InterruptedException {\n        // Constructor DI\n        GameServiceProxy gameServiceProxy = new GameServiceProxy(new DefaultGameService());\n        gameServiceProxy.loadGame();\n    }\n}\n")),(0,n.kt)("h4",{id:"\uc2e4\ud589\uacb0\uacfc"},"\uc2e4\ud589\uacb0\uacfc"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\uac8c\uc784 \ub85c\ub529\uc911\uc785\ub2c8\ub2e4.\n\ub85c\ub529 \uc644\ub8cc\n1002ms elapsed.\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd \uac8c\uc784 \uc11c\ube44\uc2a4 \uad6c\ud604\uccb4 \ucf54\ub4dc\ub97c \uc804\ud600 \uac74\ub4dc\ub9ac\uc9c0 \uc54a\uace0 ",(0,n.kt)("br",null),"\n(\ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\uc758 \ubcc0\uacbd \uc5c6\uc774 (main , \ud638\ucd9c\ubd80)) ",(0,n.kt)("br",null),"\n\ubcc0\uacbd\uc5d0 \ub2eb\ud600\uc788\uace0, \ud655\uc7a5\uc5d0 \uc5f4\ub824\uc788\ub294 OCP \uc6d0\uce59\uc744 \uc9c0\ud0a4\uba70 \uba54\uc18c\ub4dc \uc2e4\ud589 \uc18c\uc694\uc2dc\uac04\uc744 \uce21\uc815\ud55c\ub2e4.",(0,n.kt)("br",null))),(0,n.kt)("h2",{id:"class-diagram"},"Class Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Game Service Diagram",src:r(3298).Z,width:"551",height:"261"})),(0,n.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,n.kt)("h3",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uae30\uc874 \ucf54\ub4dc(\uad6c\ud604\uccb4, \ud074\ub77c\uc774\uc5b8\ud2b8) \ubcc0\uacbd\uc5c6\uc774 \ud504\ub85d\uc2dc \uac1d\uccb4 \ucd94\uac00\ub9cc\uc73c\ub85c \ucd94\uac00\uae30\ub2a5 \uad6c\ud604 \uac00\ub2a5. ",(0,n.kt)("br",null),"\nex) \uc9c0\uc5f0\ub85c\ub529, \uce90\uc2f1, \uc2dc\uac04\uce21\uc815, \ub85c\uae45")),(0,n.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \ubcf5\uc7a1\ub3c4 \uc99d\uac00")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"-reference"},"\ud83d\udd17 Reference"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4/dashboard"},"GoF \ub514\uc790\uc778 \ud328\ud134 - \ubc31\uae30\uc120")))}p.isMDXComponent=!0},3298:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/gameservice_proxy_diagram-4e7533024f4afa4db925f4c52aedbc03.svg"},3518:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/proxy_pattern-b1916ea546e60f6a60f5be66bc7e9402.png"}}]);