"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,b=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),u=n(6550),o=n(1980),s=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,s]=b({queryString:n,groupId:a}),[c,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=o??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),v(e)}),[s,v,l]),tabValues:l}}var h=n(2389);const g="tabList__CuJ",k="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:u,selectValue:o,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=s[n].value;a!==u&&(c(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",k,i?.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function D(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(D,(0,a.Z)({key:String(t)},e))}},6766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const u={title:"Builder Pattern",description:"Understand about builder pattern",tags:["design-pattern","create-pattern"],keywords:["design pattern","builder pattern"],last_update:{date:new Date("2023-01-22T00:00:00.000Z")}},o=void 0,s={unversionedId:"design-pattern/create-pattern/builder-pattern",id:"design-pattern/create-pattern/builder-pattern",title:"Builder Pattern",description:"Understand about builder pattern",source:"@site/docs/design-pattern/01-create-pattern/04-builder-pattern.md",sourceDirName:"design-pattern/01-create-pattern",slug:"/design-pattern/create-pattern/builder-pattern",permalink:"/docusaurus/docs/design-pattern/create-pattern/builder-pattern",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/design-pattern/01-create-pattern/04-builder-pattern.md",tags:[{label:"design-pattern",permalink:"/docusaurus/docs/tags/design-pattern"},{label:"create-pattern",permalink:"/docusaurus/docs/tags/create-pattern"}],version:"current",lastUpdatedAt:1674345600,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 22\uc77c",sidebarPosition:4,frontMatter:{title:"Builder Pattern",description:"Understand about builder pattern",tags:["design-pattern","create-pattern"],keywords:["design pattern","builder pattern"],last_update:{date:"2023-01-22T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Factory Method Pattern",permalink:"/docusaurus/docs/design-pattern/create-pattern/factory-method-pattern"},next:{title:"Adapter Pattern",permalink:"/docusaurus/docs/design-pattern/structure-pattern/adapter-pattern"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Why to use",id:"why-to-use",level:2},{value:"\uae30\uc874 \uc0dd\uc131\uc790 \ubc29\uc2dd\uc758 \ud55c\uacc4",id:"\uae30\uc874-\uc0dd\uc131\uc790-\ubc29\uc2dd\uc758-\ud55c\uacc4",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Example",id:"example",level:3},{value:"TourPlan.java",id:"tourplanjava",level:4},{value:"TourPlanBuilder.java",id:"tourplanbuilderjava",level:4},{value:"CalendarTourBuilder.java",id:"calendartourbuilderjava",level:4},{value:"TourPlanDirector.java",id:"tourplandirectorjava",level:4},{value:"<code>@Builder</code> annotation in Lombok (Not Recommended)",id:"builder-annotation-in-lombok-not-recommended",level:3},{value:"Spring \ud65c\uc6a9 \uc608",id:"spring-\ud65c\uc6a9-\uc608",level:3},{value:"Question",id:"question",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"\ud83d\udd17 Reference",id:"-reference",level:2}],p={toc:c};function m(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"\ub3d9\uc77c\ud55c \ud504\ub85c\uc138\uc2a4\ub85c \uac1d\uccb4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uac8c\ud558\ub294 \ud328\ud134.\n",(0,r.kt)("img",{alt:"Builder pattern overview diagram",src:n(4792).Z,width:"551",height:"455"})),(0,r.kt)("h2",{id:"why-to-use"},"Why to use"),(0,r.kt)("p",null,"\uc77c\uad00\ub41c \ud074\ub798\uc2a4 \uc0dd\uc131 \uaddc\uce59\uacfc \ud504\ub85c\uc138\uc2a4\ub85c \uac00\ub3c5\uc131 \uc788\ub294 \ucf54\ub4dc\ub85c \uac1d\uccb4 \uc0dd\uc131 \ubc29\uc2dd \uc815\ub9bd."),(0,r.kt)("h2",{id:"\uae30\uc874-\uc0dd\uc131\uc790-\ubc29\uc2dd\uc758-\ud55c\uacc4"},"\uae30\uc874 \uc0dd\uc131\uc790 \ubc29\uc2dd\uc758 \ud55c\uacc4"),(0,r.kt)("p",null,"\ub9e4\uc6b0 \uae34 \uc0dd\uc131\uc790\ub97c \uc0dd\uc131\ud558\uac70\ub098, \uac04\ub2e8\ud55c \uc0dd\uc131\uc790\ub85c \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131\ud6c4 \uc7a5\ud669\ud558\uac8c setter \ub85c \ub9cc\ub4e4\uba74 \uc77c\uad04\ub41c \ud504\ub85c\uc138\uc2a4\ub85c \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uc9c0 \ubabb\ud558\ubbc0\ub85c \uc2e4\uc218\ud560 \uc704\ud5d8\uc774 \uc99d\uac00\ud568. ",(0,r.kt)("br",null),"\nex) 5\ubc15 6\uc77c\uc774\uba74 '6\uc77c'\ub9cc \uad6c\ud558\uac70\ub098 '5\ubc15'\ub9cc \uc138\ud305\ud558\uba74 \uc548\ub418\uace0 \uac15\uc81c\ud574\uc57c\ud568 ",(0,r.kt)("br",null),"\nsetter \ub97c \uc0ac\uc6a9\ud558\uba74 \uc548\ub428. => \uc778\uc2a4\ud134\uc2a4\uac00 \ubd88\uc644\uc804\ud55c \ud504\ub85c\uc138\uc2a4\ub85c \ub9cc\ub4e4\uc5b4\uc9c8 \uc704\ud5d8\uc774 \uc788\uace0 ",(0,r.kt)("br",null),"\n\ub2e4\uc591\ud55c \ud30c\ub77c\ubbf8\ud130\ub97c \uc9c0\uc6d0\ud558\ub294 \uc0dd\uc131\uc790\ub97c \ub9cc\ub4e4 \ub54c \ub108\ubb34 \uae40."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\uc0dd\uc131\uc790 \uc0dd\uc131\uc2dc \ub108\ubb34 \uae38\uace0 \uc7a5\ud669\ud558\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},"\ubd88\uc644\uc804\ud55c \uac1d\uccb4 \uc0dd\uc131 \ud504\ub85c\uc138\uc2a4 ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"li"},"\uac1d\uccb4 \uc0dd\uc131 \ud504\ub85c\uc138\uc2a4\ub97c \uac15\uc81c\ud560 \uc218 \uc5c6\ub2e4.")," ",(0,r.kt)("br",null),"\nex) \uc5ec\ud589\uc758 \uacbd\uc6b0 Days, nights, startDate, endDate \ub294 \ubc18\ub4dc\uc2dc \ud544\uc694\ud558\uace0 ",(0,r.kt)("br",null),"\n\ub098\uba38\uc9c0 \uc18d\uc131\uc740 Optional \uc774\ub77c\uace0 \uac00\uc815\ud558\uc790. ",(0,r.kt)("br",null),"\n\ud574\ub2f9 \ud30c\ub77c\ubbf8\ud130\ub4e4\ub9cc \ubc1b\ub294 \uc0dd\uc131\uc790\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\ub3c4 \uc788\uc9c0\ub9cc ",(0,r.kt)("br",null),"\n\uac01 \uc18d\uc131\ubcc4\ub85c \ubcc0\uacbd\ud558\ub294 \ucee4\uc2a4\ud140 \uba54\uc18c\ub4dc\ub97c \ub098\ub220\ub1a8\ub2e4\uace0\ud558\uba74 \uc774\ub97c \uac15\uc81c\ud558\uae30 \uae4c\ub2e4\ub86d\ub2e4.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc640 \uac19\uc740 \uc0c1\ud669\uc5d0\uc11c\ub294 \ub9e4\uc6b0 \uc5ec\ub7ec \uc0dd\uc131\uc790\ub97c \uc815\uc758\ud574\uc57c\ud558\uace0 \ub0b4\ubd80 \ub85c\uc9c1\ub3c4 \ubcf5\uc7a1\ud574\uc9c0\uae30 \uc27d\ub2e4.")),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud55c \uac1d\uccb4\ub97c \ub9cc\ub4dc\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \uc815\ub9bd\ud558\uace0 \ub3c5\ub9bd\uc801\uc73c\ub85c \ubd84\ub9ac\ud574\uc57c\ud560 \ub54c"),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc0dd\uc131 \ud504\ub85c\uc138\uc2a4 \ub85c\uc9c1\uc774 \ubcf5\uc7a1\ud560 \ub54c"),(0,r.kt)("li",{parentName:"ul"},"\ub9ce\uc740 \uc0dd\uc131\uc790\ub97c \uc815\uc758\ud574\uc57c \ud560 \ub54c"),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc0dd\uc131\uc2dc \uc0dd\uc131\uc790\uc5d0 \ud544\uc694\ud55c \ud30c\ub77c\ubbf8\ud130\uac00 \ub9ce\uc544\uc9c8 \ub54c")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uc778\uc2a4\ud134\uc2a4 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 Builder \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud558\uace0 step \ubcc4\ub85c \ub098\ub220 \ud504\ub85c\uc138\uc2a4\ub97c \uc815\ub9bd\ud55c\ub2e4.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ube4c\ub354 Interface \uc815\uc758"),(0,r.kt)("li",{parentName:"ol"},"\ube4c\ub354 \uad6c\ud604\uccb4 \uc815\uc758"),(0,r.kt)("li",{parentName:"ol"},"Director \uc815\uc758 (Optional)")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"\uce74\uc9c1\uc2a4"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"product",label:"Product",mdxType:"TabItem"},(0,r.kt)("h4",{id:"tourplanjava"},"TourPlan.java"),(0,r.kt)("p",null,"Product class \uc815\uc758"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Getter\n@NoArgsConstructor(access = AccessLevel.PUBLIC)\n// Don\'t recommend input al fields into constructor\n@AllArgsConstructor(access = AccessLevel.PUBLIC)\npublic class TourPlan {\n    private String title;\n    private int nights;\n    private int days;\n\n    private LocalDate startDate;\n    private LocalDate endDate;\n    private String stayPlace;\n    private List<DetailPlan> plans = new ArrayList();\n    \n    // nights - days \ub294 \ubcc4\ub3c4\ub85c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc544\ub3c4\n    // startDate - endDate \uc5f0\uc0b0 \ub9cc\uc73c\ub85c \uc27d\uac8c \uad6c\ud574\uc9c4\ub2e4.\n    public void changeDays(int days) {\n        if (days <= 0) {\n            throw new IllegalArgumentException("days should be greater than 0");\n        }\n\n        this.nights = days - 1;\n        this.days = days;\n    }\n\n    // \ud544\uc218 \uc9c0\uc815 \uba54\uc18c\ub4dc\n    public void changeDate(LocalDate startDate, LocalDate endDate) {\n        this.startDate = startDate;\n        this.endDate = endDate;\n    }\n\n    public void changeStayPlace(String stayPlace) {\n        this.stayPlace = stayPlace;\n    }\n\n    @Override\n    public String toString() {\n        return "title : " + this.title + "\\n" +\n                "start date:  " + this.startDate + "\\n"\n                + "endDate: " + this.endDate;\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"builder",label:"Builder",mdxType:"TabItem"},(0,r.kt)("h4",{id:"tourplanbuilderjava"},"TourPlanBuilder.java"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Builder interface \uc815\uc758")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface TourPlanBuilder {\n    // builderStep A, B, C ..\n   TourPlanBuilder title(String title);\n   TourPlanBuilder date(LocalDate startDate, LocalDate endDate) throws IllegalArgumentException;\n   TourPlanBuilder days(int days);\n   TourPlanBuilder stayPlace(String stayPlace);\n\n   // \uc774 \uc548\uc5d0\uc11c \ube4c\ub4dc \uc2dc\uc810\uc5d0 \ub370\uc774\ud130\ub97c \uac80\uc99d\ud560 \uc218 \uc788\uc74c.\n   // ex) Required \uac00 \ubaa8\ub450 \ube60\uc9d0\uc5c6\uc774 \uc785\ub825\ub418\uc5c8\ub294\uac00?\n   // highlight-next-line\n   TourPlan build();\n}\n"))),(0,r.kt)(i.Z,{value:"concrete builder",label:"ConcreteBuilder",mdxType:"TabItem"},(0,r.kt)("h4",{id:"calendartourbuilderjava"},"CalendarTourBuilder.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Getter\n@NoArgsConstructor(access =  AccessLevel.PUBLIC)\npublic class CalendarTourBuilder implements TourPlanBuilder {\n    private String title;\n    private int nights;\n    private int days;\n\n    private LocalDate startDate;\n    private LocalDate endDate;\n    private String stayPlace;\n    private List<DetailPlan> plans = new ArrayList();\n\n    private void updateNightsAndDaysByDate(LocalDate startDate, LocalDate endDate) {\n        this.days = Period.between(startDate, endDate).getDays() + 1;\n        this.nights = days - 1;\n    }\n    @Override\n    public TourPlanBuilder title(String title) {\n        this.title = title;\n        return this;\n    }\n\n    @Override\n    public TourPlanBuilder date(LocalDate startDate, LocalDate endDate) throws IllegalArgumentException {\n\n        if (endDate.isBefore(startDate)) {\n            throw new IllegalArgumentException("startDate should precede endDate.");\n        }\n        this.startDate = startDate;\n        this.endDate = endDate;\n\n        // \uc790\ub3d9\uc73c\ub85c N\ubc15 N+1\uc77c\uc774 \uc815\ud574\uc9d0\n        updateNightsAndDaysByDate(startDate, endDate);\n        return this;\n    }\n\n    @Override\n    public TourPlanBuilder days(int days) {\n        this.days = days;\n        return this;\n    }\n\n    @Override\n    public TourPlanBuilder stayPlace(String stayPlace) {\n        this.stayPlace = stayPlace;\n        return this;\n    }\n    \n    @Override\n    public TourPlan build() {\n        if (this.startDate == null || this.endDate == null) {\n            throw new MissingFormatArgumentException("You are required to input " + "startDate and endDate");\n        } else if (this.title == null) {\n            throw new MissingFormatArgumentException("You are required to input " + "title");\n        }\n\n        return new TourPlan(title, nights, days, startDate, endDate, stayPlace, plans);\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"director",label:"Director",mdxType:"TabItem"},(0,r.kt)("h4",{id:"tourplandirectorjava"},"TourPlanDirector.java"),(0,r.kt)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ubcf5\uc7a1\ud55c \uc0dd\uc131 \ub85c\uc9c1\uc744 \ubaa8\ub978\uccb4 Director \ub97c \ud1b5\ud574 \uace7\ubc14\ub85c Product \ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc74c."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Component\n@RequiredArgsConstructor\npublic class TourPlanDirector {\n    private final TourPlanBuilder tourPlanBuilder;\n\n    public TourPlan createHawaiiPackageTourPlan(LocalDate startDate, LocalDate endDate) {\n        return this.tourPlanBuilder\n                .title("Hawaii")\n                .date(startDate, endDate)\n                .build();\n    }\n\n    public TourPlan createClimbingPlan(LocalDate startDate, LocalDate endDate) {\n        return this.tourPlanBuilder\n                .title("\ub3d9\ub124\ub4b7\uc0b0")\n                .date(startDate, endDate)\n                .build();\n    }\n}\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"builder-annotation-in-lombok-not-recommended"},(0,r.kt)("inlineCode",{parentName:"h3"},"@Builder")," annotation in Lombok (Not Recommended)"),(0,r.kt)("p",null,"\ubcc4\ub3c4\ub85c Builder, Director \ud074\ub798\uc2a4 \uc815\uc758\uc5c6\uc774 \ube4c\ub354\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4 \ub9e4\uc6b0 \uac04\ub2e8\ud558\ub2e4. ",(0,r.kt)("br",null),"\n\uadf8\ub7ec\ub098 \uc774 \ubc29\ubc95\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"@AllArgsConstructor")," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud574\uc57c\ud558\ubbc0\ub85c \uad8c\uc7a5\ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,r.kt)("h3",{id:"spring-\ud65c\uc6a9-\uc608"},"Spring \ud65c\uc6a9 \uc608"),(0,r.kt)("p",null,"UriComponentBuilder \ub85c URI \ub97c \uc548\uc804\ud558\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class SpringCreatePatternTest {\n    @Test\n    void uriComponentTest() {\n        var uriComponents = UriComponentsBuilder.newInstance()\n                .scheme("https")\n                .host("www.m-falcon.tistory")\n                .path("656")\n                .build()\n                .encode()\n                .toUriString();\n\n        var designPatternUri = "https://www.m-falcon.tistory/656";\n\n        assertThat(uriComponents).isEqualTo(designPatternUri);\n    }\n}\n')),(0,r.kt)("h2",{id:"question"},"Question"),(0,r.kt)("p",null,"Required / Optional \ub098\ub20c \uc218 \uc788\uc744\uae4c?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"build()")," method \uc5d0\uc11c null check \ud558\ub294 \ubc29\ubc95\ubcf4\ub2e4 \ubb54\uac00 \ub354 fancy \ud55c \ubc29\ubc95\uc774 \uc788\uc744 \uac83 \uac19\ub2e4.")),(0,r.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,r.kt)("h3",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\ub294 \ud504\ub85c\uc138\uc2a4 \uac15\uc81c"),(0,r.kt)("br",null),"\n\ub2e8\uc21c \uc0dd\uc131\uc790\ub85c \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4 \ub54c\uc5d0\ub294 \uc77c\ub828\uc758 \uccb4\uacc4\uac00 \uc5c6\uc5b4 \uc2e4\uc218\ud558\uae30 \uc26c\uc6c0.",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\uc0dd\uc131\uc790\uc5d0 validation \ub85c\uc9c1 \uc0bd\uc785\uc2dc \ubcf5\uc7a1\ub3c4 \uc99d\uac00 \ubd88\uac00\ud53c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Director \ud074\ub798\uc2a4\ub97c \ud1b5\ud574 \ubcf5\uc7a1\ud55c \uac1d\uccb4\ub97c \ub9cc\ub4dc\ub294 \uacfc\uc815\uc744 Wrapping \ud560 \uc218 \uc788\uc74c."),(0,r.kt)("br",null),"\n\ubcc4\ub3c4\uc758 Builder \ub97c \ucee4\uc2a4\ud140\ud558\uc5ec \ub3d9\uc77c\ud55c \ud504\ub85c\uc138\uc2a4\ub97c \uac70\uce58\uc9c0\ub9cc \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4 \uc218\ub3c4 \uc788\uac8c\ud568 (\ud655\uc7a5\uc131)"))),(0,r.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc131\ub2a5 \uba74\uc5d0\uc11c \uc57d\uac04\uc758 \uc624\ubc84\ud5e4\ub4dc\uac00 \ubc1c\uc0dd ",(0,r.kt)("br",null),"\n\uc0dd\uc131\ud558\uace0\uc790\ud558\ub294 \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131\uc790\uac00 \uc544\ub2cc builder \ub97c \uacbd\uc720\ud574\uc57c \ud558\ubbc0\ub85c \ucd94\uac00 \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131\uc73c\ub85c \uc778\ud55c \uc57d\uac04\uc758 \uc624\ubca0\ud5e4\ub4dc \ubc1c\uc0dd"),(0,r.kt)("li",{parentName:"ul"},"\uad6c\uc870\uc0c1 \ubcf5\uc7a1\ub3c4 \uc99d\uac00 ",(0,r.kt)("br",null),"\nBuilder \ub610\ub294 Director \ub4f1 \ubcc4\ub3c4\uc758 \uc778\ud130\ud398\uc774\uc2a4 \ubc0f \ud074\ub798\uc2a4 \uc815\uc758 \ud544\uc694.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-reference"},"\ud83d\udd17 Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4"},"\ucf54\ub529\uc73c\ub85c \ud559\uc2b5\ud558\ub294 GoF\uc758 \ub514\uc790\uc778 \ud328\ud134 - \ubc31\uae30\uc120")))}m.isMDXComponent=!0},4792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/builder_pattern-d59d7b2771c60ee1b70d68cd6a7ea697.svg"}}]);