"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5206],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=s(a),g=r,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return a?n.createElement(m,l(l({ref:e},c),{},{components:a})):n.createElement(m,l({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1597:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"Singleton Pattern",description:"Understand about singleton pattern",tags:["design-pattern","create-pattern"],keywords:["design pattern","singleton"],last_update:{date:new Date("2024-03-09T00:00:00.000Z")}},l="Multiple Approach",p={unversionedId:"design-pattern/create-pattern/singleton-pattern",id:"design-pattern/create-pattern/singleton-pattern",title:"Singleton Pattern",description:"Understand about singleton pattern",source:"@site/docs/design-pattern/01-create-pattern/01-singleton-pattern.md",sourceDirName:"design-pattern/01-create-pattern",slug:"/design-pattern/create-pattern/singleton-pattern",permalink:"/docusaurus/docs/design-pattern/create-pattern/singleton-pattern",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/design-pattern/01-create-pattern/01-singleton-pattern.md",tags:[{label:"design-pattern",permalink:"/docusaurus/docs/tags/design-pattern"},{label:"create-pattern",permalink:"/docusaurus/docs/tags/create-pattern"}],version:"current",lastUpdatedAt:1709942400,formattedLastUpdatedAt:"Mar 9, 2024",sidebarPosition:1,frontMatter:{title:"Singleton Pattern",description:"Understand about singleton pattern",tags:["design-pattern","create-pattern"],keywords:["design pattern","singleton"],last_update:{date:"2024-03-09T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Design-Pattern",permalink:"/docusaurus/docs/category/design-pattern"},next:{title:"Factory Method Pattern",permalink:"/docusaurus/docs/design-pattern/create-pattern/factory-method-pattern"}},o={},s=[{value:"(1) Native approach",id:"1-native-approach",level:2},{value:"(2) Static Factory method approach",id:"2-static-factory-method-approach",level:2},{value:"(3) BillPugh approach",id:"3-billpugh-approach",level:2},{value:"(4) Enum approach",id:"4-enum-approach",level:2}],c={toc:s};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multiple-approach"},"Multiple Approach"),(0,r.kt)("h2",{id:"1-native-approach"},"(1) Native approach"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Settings {\n  private static Settings instance;\n  \n  private Settings(){}\n  public static Settings getInstance() {\n    if (instance == null) this.instance = new Settings();\n    return instance;\n  }\n}\n")),(0,r.kt)("p",null,"This approach is simple but not thread-safe."),(0,r.kt)("h2",{id:"2-static-factory-method-approach"},"(2) Static Factory method approach"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Settings {\n  private Settings(){}\n  \n  // Thread safe since this is static instance.\n  // Eager loading\n  private final static Settings INSTANCE = new Settings();\n  \n  public static Settings getInstance() {\n    return INSTANCE;\n  }\n}\n")),(0,r.kt)("p",null,"This approach thread-safe but eager loading. \\\nThis class always be created even though you don't use this class."),(0,r.kt)("h2",{id:"3-billpugh-approach"},"(3) BillPugh approach"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Settings {\n  private Settings(){}\n  // Thread safe\n  // Lazy loading\n  private static class SettingsHolder {\n    private final static Settings INSTANCE = new Settings();\n  }\n  \n  public static Settings getInstance() {\n    return SettingsHolder.INSTANCE;\n  }\n}\n")),(0,r.kt)("p",null,"This approach is thread-safe and also be loaded lazily."),(0,r.kt)("h2",{id:"4-enum-approach"},"(4) Enum approach"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"enum Settings {\n  INSTANCE;\n}\n")),(0,r.kt)("p",null,"Enum is best simple approach. \\\nEnum is thread-safe but always be loaded eagerly. \\\nAnd does not support 'inheritance' from other class. \\\nEnum already inherits from Enum class in ",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.Enum.java"),"."),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Approach"),(0,r.kt)("th",{parentName:"tr",align:null},"Pros"),(0,r.kt)("th",{parentName:"tr",align:null},"Cons"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Naive"),(0,r.kt)("td",{parentName:"tr",align:null},"Simple"),(0,r.kt)("td",{parentName:"tr",align:null},"Not thread-safe, Eager Loading")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Static factory method"),(0,r.kt)("td",{parentName:"tr",align:null},"Thread-safe"),(0,r.kt)("td",{parentName:"tr",align:null},"Eager Loading")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BillPugh"),(0,r.kt)("td",{parentName:"tr",align:null},"Relative simple\\ Thread-safe\\ Lazy Loading"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enum"),(0,r.kt)("td",{parentName:"tr",align:null},"Best simple\\Thread-safe \\ Prevent reflection"),(0,r.kt)("td",{parentName:"tr",align:null},"Eager Loading  \\ Unable to inheritance from other class")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Use BillPugh approach when you have to lazy load or required to inheritance")," \\\n",(0,r.kt)("strong",{parentName:"p"},"In all other situation, use Enum"))))}u.isMDXComponent=!0}}]);