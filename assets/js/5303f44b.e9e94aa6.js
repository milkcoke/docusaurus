"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"delegate by map",description:"Know about delegating by map.",tags:["kotlin"],keywords:["kotlin"],last_update:{date:new Date("2023-02-04T00:00:00.000Z")}},l=void 0,i={unversionedId:"kotlin/delegate/map-delegate",id:"kotlin/delegate/map-delegate",title:"delegate by map",description:"Know about delegating by map.",source:"@site/docs/kotlin/02-delegate/02-map-delegate.md",sourceDirName:"kotlin/02-delegate",slug:"/kotlin/delegate/map-delegate",permalink:"/docusaurus/docs/kotlin/delegate/map-delegate",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/kotlin/02-delegate/02-map-delegate.md",tags:[{label:"kotlin",permalink:"/docusaurus/docs/tags/kotlin"}],version:"current",lastUpdatedAt:1675468800,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:2,frontMatter:{title:"delegate by map",description:"Know about delegating by map.",tags:["kotlin"],keywords:["kotlin"],last_update:{date:"2023-02-04T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"by keyword",permalink:"/docusaurus/docs/kotlin/delegate/by-keyword"},next:{title:"Custom class for delegation",permalink:"/docusaurus/docs/kotlin/delegate/custom-delegate-class"}},p={},c=[{value:"When to use",id:"when-to-use",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Project.kt",id:"projectkt",level:4},{value:"Project.kt",id:"projectkt-1",level:4},{value:"ProjectTest.kt",id:"projecttestkt",level:4},{value:"Furthermore",id:"furthermore",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"when-to-use"},"When to use"),(0,a.kt)("p",null,"Map \uc744 \ud1b5\ud574 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uace0 \uc2f6\uc744 \ub54c"),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"kotlin Map already implements method for delegating.")),(0,a.kt)("h4",{id:"projectkt"},"Project.kt"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"by map")," on property."),(0,a.kt)("h4",{id:"projectkt-1"},"Project.kt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Project(val map: MutableMap<String, Any?>) {\n    var name: String by map\n    var priority: Int by map\n    var completed: Boolean by map\n}\n")),(0,a.kt)("h4",{id:"projecttestkt"},"ProjectTest.kt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ProjectTest {\n    @DisplayName("Map \uc73c\ub85c project \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131")\n    @Test\n    internal fun createProjectByMap() {\n        val map = mutableMapOf(\n            "name" to "Falcon",\n            "priority" to 5,\n            "completed" to true\n        )\n        // construction with map\n        val project = Project(map)\n    }\n\n    @DisplayName("JSON parsing and create project")\n    @Test\n    internal fun createProjectFromJson() {\n        val project = Project(getMapFromDummyJson())\n        print(project)\n    }\n    \n    private fun getMapFromDummyJson(): MutableMap<String, Any?> {\n        return Gson().fromJson<MutableMap<String, Any?>>(\n            """{ "name" : "Learn Kotlin", "priority": 5, "completed": true}""",\n            MutableMap::class.java\n        )\n    }\n}\n')),(0,a.kt)("h3",{id:"furthermore"},"Furthermore"),(0,a.kt)("p",null,"We can support value - based constructor and by map as shown below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Project(val map: MutableMap<String, Any?>) {\n    var name: String by map\n    var priority: Int by map\n    var completed: Boolean by map\n\n    constructor(name: String, priority: Int, completed: Boolean) : this(\n        mutableMapOf(\n            "name" to name,\n            "priority" to priority,\n            "completed" to completed\n        )\n    )\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@DisplayName("create json with property value")\n@Test\ninternal fun createProjectWithPropValue() {\n    print(Project("\uce74\ub974\ub9c8", 5, true))\n}\n')))}u.isMDXComponent=!0}}]);