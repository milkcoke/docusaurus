"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(n),v=r,m=p["".concat(u,".").concat(v)]||p[v]||c[v]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=v;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),s=n(6550),u=n(1980),o=n(7392),d=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function v(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,o]=m({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=u??p;return v({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!v({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),b(e)}),[o,b,i]),tabValues:i}}var h=n(2389);const g="tabList__CuJ",f="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=o[n].value;a!==s&&(p(t),u(a))},v=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:v,onClick:c},l,{className:(0,i.Z)("tabs__item",f,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function S(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(S,(0,a.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},4196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162);const s={title:"State Pattern",description:"Understand about state pattern",tags:["design-pattern","behavior-pattern"],keywords:["design pattern","state pattern"],last_update:{date:new Date("2023-02-02T00:00:00.000Z")}},u=void 0,o={unversionedId:"design-pattern/behavior-pattern/state-pattern",id:"design-pattern/behavior-pattern/state-pattern",title:"State Pattern",description:"Understand about state pattern",source:"@site/docs/design-pattern/03-behavior-pattern/07-state-pattern.md",sourceDirName:"design-pattern/03-behavior-pattern",slug:"/design-pattern/behavior-pattern/state-pattern",permalink:"/docusaurus/docs/design-pattern/behavior-pattern/state-pattern",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/design-pattern/03-behavior-pattern/07-state-pattern.md",tags:[{label:"design-pattern",permalink:"/docusaurus/docs/tags/design-pattern"},{label:"behavior-pattern",permalink:"/docusaurus/docs/tags/behavior-pattern"}],version:"current",lastUpdatedAt:1675296e3,formattedLastUpdatedAt:"Feb 2, 2023",sidebarPosition:7,frontMatter:{title:"State Pattern",description:"Understand about state pattern",tags:["design-pattern","behavior-pattern"],keywords:["design pattern","state pattern"],last_update:{date:"2023-02-02T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Observer Pattern",permalink:"/docusaurus/docs/design-pattern/behavior-pattern/observer-pattern"},next:{title:"Template Method Pattern",permalink:"/docusaurus/docs/design-pattern/behavior-pattern/template-method-pattern"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Why to use",id:"why-to-use",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"Example",id:"example",level:3},{value:"OnlineCourse.java",id:"onlinecoursejava",level:4},{value:"How to use",id:"how-to-use",level:2},{value:"Context",id:"context",level:3},{value:"OnlineCourse.java",id:"onlinecoursejava-1",level:4},{value:"State",id:"state",level:3},{value:"Client (Test code)",id:"client-test-code",level:3},{value:"ClientTest.java",id:"clienttestjava",level:4},{value:"Class Diagram",id:"class-diagram",level:3},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"\ud83d\udd17 Reference",id:"-reference",level:2}],c={toc:p};function v(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"\uac1d\uccb4 \ub0b4\ubd80 \uc0c1\ud0dc\uc5d0 \ub530\ub77c \uac1d\uccb4\uc758 \ud589\ub3d9\uc774 \ub2ec\ub77c\uc9c0\ub294 \ud328\ud134 ",(0,r.kt)("br",null),"\n\ud2b9\uc815 \uc0c1\ud0dc\ub97c \uc870\uac74\uc73c\ub85c \ud558\ub294 \ud589\uc704\ub97c \ubd84\ub9ac\ud560 \uc218 \uc788\ub2e4. ",(0,r.kt)("br",null),"\n\uc0c8 \ud589\uc704\ub97c \ucd94\uac00\ud574\ub3c4 \uae30\uc874 \ud589\uc704\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\ub294\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"State pattern overview diagram",src:n(5824).Z,width:"581",height:"279"})),(0,r.kt)("h2",{id:"why-to-use"},"Why to use"),(0,r.kt)("p",null,"\ub85c\uc9c1\uc774 \ud2b9\uc815 \uc0c1\ud0dc\uc5d0 \ub530\ub77c \uc870\uac74\ubd80\ub85c \uc2e4\ud589\ub418\uba74 ",(0,r.kt)("br",null),"\n\ucf54\ub4dc\ub97c \uc704\uc5d0\uc11c \uc544\ub798\ub85c \uc77d\ub294 \ubc29\uc2dd\uc73c\ub85c \uc2dc\ub098\ub9ac\uc624 \ud30c\uc545\uc774 \uc5b4\ub835\ub2e4. ",(0,r.kt)("br",null),"\n\uc774\ub7f4 \ub54c \uc0c1\ud0dc \ud328\ud134\uc744 \ud65c\uc6a9\ud55c\ub2e4."),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Operation \uc744 \uc0c1\ud0dc\uc5d0 \ub530\ub77c \uc2e4\ud589\uc2dc\ud0a4\ub294 \ub85c\uc9c1\uc744 \uad6c\uc870\ud654 \ud558\uace0 \uc2f6\uc744 \ub54c")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"\uc628\ub77c\uc778 \uac15\uc758 - \ud559\uc0dd\uc774 \uc874\uc7ac\ud558\uace0\n\uc628\ub77c\uc778 \uac15\uc758 \uc0c1\ud0dc\ub294 DRAFT, PRIVATE, PUBLISHED 3\uac00\uc9c0\ub97c \uac16\ub294\ub2e4.\n\uc628\ub77c\uc778 \uac15\uc758 \uc0c1\ud0dc\uc5d0 \ub530\ub77c \ub2e4\uc74c\uacfc \uac19\uc774 \uad8c\ud55c\uc774 \ubd80\uc5ec\ub41c\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Index"),(0,r.kt)("th",{parentName:"tr",align:null},"\ud559\uc0dd \ub4f1\ub85d"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub9ac\ubdf0 \ub4f1\ub85d"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DRAFT"),(0,r.kt)("td",{parentName:"tr",align:null},"1\uba85\ub9cc \uac00\ub2a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubd88\uac00\ub2a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PRIVATE"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc804 \ub4f1\ub85d\ub41c \ud559\uc0dd\ub9cc \uac00\ub2a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\uac00\ub2a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC"),(0,r.kt)("td",{parentName:"tr",align:null},"\uac00\ub2a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\uac00\ub2a5")))),(0,r.kt)("p",null,"\uc0c1\ud0dc\ubcc4 \ud589\uc704\ub97c \uc628\ub77c\uc778 \uac15\uc758 \ud074\ub798\uc2a4 \ub0b4\uc5d0\uc11c \ubaa8\ub450 \uad00\ub9ac\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ubcf5\uc7a1\ud55c \ucf54\ub4dc\uac00 \ub9cc\ub4e4\uc5b4\uc9c4\ub2e4."),(0,r.kt)("h4",{id:"onlinecoursejava"},"OnlineCourse.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Getter\npublic class OnlineCourse {\n\n    public enum State {\n        // \ucd1d 3\uac1c\uc758 \uc0c1\ud0dc\ub97c \uac16\uace0, \uc774 \uc0c1\ud0dc\ub9c8\ub2e4 \ud589\uc704\uac00 \ub2ec\ub77c\uc9c4\ub2e4.\n        DRAFT, PUBLISHED, PRIVATE\n    }\n\n    private State state = State.DRAFT;\n    private List<String> reviews = new ArrayList<>();\n    private List<Student> students = new ArrayList<>();\n\n    // \ub9ac\ubdf0 \ub4f1\ub85d \uc544\ubaa8\ub974\ud30c\ud2f0 \n    public void addReview(String review, Student student) {\n        if (this.state == State.PUBLISHED) {\n            this.reviews.add(review);\n        } else if (this.state == State.PRIVATE && this.students.contains(student)) {\n            this.reviews.add(review);\n        } else {\n            throw new UnsupportedOperationException("\ub9ac\ubdf0\ub97c \uc791\uc131\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");\n        }\n    }\n\n    // \ud559\uc0dd \ub4f1\ub85d \uc544\ubaa8\ub974\ud30c\ud2f0\n    public void addStudent(Student student) {\n        if (this.state == State.DRAFT || this.state == State.PUBLISHED) {\n            this.students.add(student);\n        } else if (this.state == State.PRIVATE && availableTo(student)) {\n            this.students.add(student);\n        } else {\n            throw new UnsupportedOperationException("\ud559\uc0dd\uc744 \ud574\ub2f9 \uc218\uc5c5\uc5d0 \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");\n        }\n\n        if (this.students.size() > 1) {\n            this.state = State.PRIVATE;\n        }\n    }\n\n    public void changeState(State newState) {\n        this.state = newState;\n    }\n    \n    private boolean availableTo(Student student) {\n        return student.isEnabledForPrivateClass(this);\n    }\n}\n')),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\uc0c1\ud0dc\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c0\ub294 \ud589\uc704\ub97c State \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc704\uc784\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},"\uc0c1\ud0dc \uac1c\uc218\ub9cc\ud07c State \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\ub294 Concrete Class \ub97c \uc0dd\uc131\ud55c\ub2e4. ",(0,r.kt)("br",null),"\n\uc774\ub54c, \uac01\uac01\uc758 \uc0c1\ud0dc\ub294 Context \ub85c \uc628\ub77c\uc778 \uac15\uc758\ub97c \ucc38\uc870\ud55c\ub2e4."))),(0,r.kt)("p",null,"\uc628\ub77c\uc778 \uac15\uc758 \uc0c1\ud0dc\uc5d0 \ub530\ub77c \ud559\uc0dd \ub4f1\ub85d\uacfc \ub9ac\ubdf0 \ub4f1\ub85d \ud589\uc704\uac00 \ub2ec\ub77c\uc9c0\ubbc0\ub85c\n\ub450 \uba54\uc18c\ub4dc\ub97c state \ud328\ud134\uc758 State interface \ub85c \uc704\uc784\ud560 \ud544\uc694\uac00 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// state \uc5d0 \uc5bd\ud600\uc788\ub294 \uba54\uc18c\ub4dc => State interface \ub85c \uc704\uc784.\npublic void addStudent(Student student) {}\n// state \uc5d0 \uc5bd\ud600\uc788\ub294 \uba54\uc18c\ub4dc => State interface \ub85c \uc704\uc784.\npublic void addReview(String review, Student student) {}\n")),(0,r.kt)("h3",{id:"context"},"Context"),(0,r.kt)("h4",{id:"onlinecoursejava-1"},"OnlineCourse.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Getter\npublic class OnlineCourse {\n    private State state = new DraftState(this);\n    private Set<Student> students = new HashSet<>();\n    private List<String> reviews = new ArrayList<>();\n\n    public void changeState(State newState) {\n        this.state = newState;\n    }\n\n    public boolean isRegisteredStudent(Student student) {\n        return this.students.contains(student);\n    }\n\n    // add -> \uc9c1\uc811 online course \uc5d0 \uc801\uc6a9\n    public void addStudent(Student student) {\n        this.students.add(student);\n    }\n\n    public void addReview(String review) {\n        this.reviews.add(review);\n    }\n    // register -> state \uc5d0 \uc704\uc784.\n    public void registerStudent(Student student) {\n        if (isRegisteredStudent(student)) throw new IllegalArgumentException("\uc774\ubbf8 \ub4f1\ub85d\ub41c \ud559\uc0dd\uc785\ub2c8\ub2e4.");\n        this.state.addStudent(student);\n    }\n\n    public void registerReview(Student student, String review) {\n        this.state.addReview(student, review);\n    }\n}\n')),(0,r.kt)("h3",{id:"state"},"State"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"interface",label:"State.java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface State {\n    void addStudent(Student student);\n    void addReview(Student student, String review);\n}\n"))),(0,r.kt)(l.Z,{value:"draft",label:"DraftState.java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RequiredArgsConstructor\npublic class DraftState implements State {\n    // \uc77c\uc885\uc758 \ucee8\ud14d\uc2a4\ud2b8\n    private final OnlineCourse onlineCourse;\n    @Override\n    public void addStudent(Student student) {\n        this.onlineCourse.addStudent(student);\n        // \ub4f1\ub85d\ub41c \ud559\uc0dd \uc218\uac00 2\uba85 \uc774\uc0c1\uc774\uba74 \uc0c1\ud0dc \ubcc0\uacbd\n        if (this.onlineCourse.getStudents().size() > 1) {\n            this.onlineCourse.changeState(new PrivateState(this.onlineCourse));\n        }\n    }\n\n    @Override\n    public void addReview(Student student, String review) {\n        throw new UnsupportedOperationException("\ub4dc\ub798\ud504\ud2b8 \uc0c1\ud0dc\uc5d0\uc11c\ub294 \ub9ac\ubdf0\ub97c \ub0a8\uae38 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"private",label:"PrivateState.java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RequiredArgsConstructor\npublic class PrivateState implements State {\n    private final OnlineCourse onlineCourse;\n\n    @Override\n    public void addStudent(Student student) {\n        if (student.isRegistered(this.onlineCourse)) {\n            this.onlineCourse.addStudent(student);\n        } else {\n            throw new UnsupportedOperationException("\ud504\ub77c\uc774\ube57 \ucf54\uc2a4\uc5d0 \uc0ac\uc804 \ub4f1\ub85d\ub41c \ud559\uc0dd\ub9cc \uc815\uc2dd \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4.");\n        }\n    }\n\n    @Override\n    public void addReview(Student student, String review) {\n        if (this.onlineCourse.isRegisteredStudent(student)) {\n            this.onlineCourse.addReview(review);\n        } else {\n            throw new UnsupportedOperationException("\ud504\ub77c\uc774\ube57 \ucf54\uc2a4\uc5d0 \uc0ac\uc804 \ub4f1\ub85d\ub41c \ud559\uc0dd\ub9cc \ub9ac\ubdf0\ub97c \ub0a8\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");\n        }\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"published",label:"PublishedState.java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@RequiredArgsConstructor\npublic class PublishedState implements State {\n    private final OnlineCourse onlineCourse;\n\n    @Override\n    public void addStudent(Student student) {\n        this.onlineCourse.addStudent(student);\n    }\n\n    @Override\n    public void addReview(Student student, String review) {\n        this.onlineCourse.addReview(review);\n    }\n}\n")))),(0,r.kt)("h3",{id:"client-test-code"},"Client (Test code)"),(0,r.kt)("h4",{id:"clienttestjava"},"ClientTest.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class ClientTest {\n    private Student falcon;\n    private Student vladimir;\n    private OnlineCourse onlineCourse;\n\n    @BeforeEach\n    void beforeEach() {\n        falcon = new Student("falcon");\n        vladimir = new Student("vladimir");\n        onlineCourse = new OnlineCourse();\n    }\n\n    @DisplayName("\ub4dc\ub798\ud504\ud2b8 \uc0c1\ud0dc \ub9ac\ubdf0 \ub4f1\ub85d \uc2e4\ud328")\n    @Test\n    void addReviewFailTest() {\n        assertThrows(UnsupportedOperationException.class, () -> onlineCourse.registerReview(falcon, "\ub098 \ud330\ucf58\uc778\ub370 \uc774\uac70 \u3139\u3147 \uac1c\uc88b\uc74c"));\n    }\n\n    @DisplayName("\ud504\ub9ac\uc774\ube57 \uc0c1\ud0dc \uc0ac\uc804 \ubbf8\ub4f1\ub85d \ud559\uc0dd \ub4f1\ub85d \uc2e4\ud328")\n    @Test\n    void addStudentFailTest() {\n        this.onlineCourse.changeState(new PrivateState(onlineCourse));\n\n        falcon.registerCourse(onlineCourse);\n        onlineCourse.registerStudent(falcon); // \uc131\uacf5\n\n        // vladimir \ub294 \ubbf8\ub4f1\ub85d\n        assertThrows(UnsupportedOperationException.class, () -> onlineCourse.registerStudent(vladimir));\n    }\n\n    @DisplayName("\uacf5\uac1c \uc218\uc5c5\uc740 \ubaa8\ub4e0 \ud559\uc0dd \ub4f1\ub85d \ubc0f \ub9ac\ubdf0 \ub4f1\ub85d \uc131\uacf5")\n    @Test\n    void addStudentsAndReviewsTest() {\n        this.onlineCourse.changeState(new PublishedState(onlineCourse));\n\n        onlineCourse.registerStudent(falcon);\n        onlineCourse.registerReview(vladimir, "\ub098 \ube14\ub77c\ub514\uc778\ub370 \uc774\uac70 \ub4e3\uc9c0\ub3c4 \uc54a\uc558\uc9c0\ub9cc \ub9ac\ubdf0 \ub4f1\ub85d \ub41c\ub2e4\ud574\uc11c \ud574\ubd04 \u314b");\n    }\n}\n')),(0,r.kt)("h3",{id:"class-diagram"},"Class Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"State pattern class diagram",src:n(7934).Z,width:"1593",height:"629"})),(0,r.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,r.kt)("h3",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc0c1\ud0dc\uc5d0 \ub530\ub978 \ud589\ub3d9\uc744 \uae54\ub054\ud558\uac8c \ubd84\ub9ac\ud560 \uc218 \uc788\ub2e4.")," ",(0,r.kt)("br",null),"\n\ucf54\ub4dc\ub97c \uc704\uc5d0\uc11c \uc544\ub798\ub85c \uc77d\uc5b4 \uc2dc\ub098\ub9ac\uc624\ub97c \ubd84\uc11d\ud560 \uc218 \uc788\uac8c \ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc0c1\ud0dc - \ud589\uc704\ubcc4\ub85c \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uac00 \uc26c\uc6cc\uc9c4\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client \uae30\uc874 \ucf54\ub4dc \ubcc0\uacbd \uc5c6\uc774 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc \ud655\uc7a5\uc774 \uac00\ub2a5\ud558\ub2e4. (OCP)"))),(0,r.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ubcf5\uc7a1\ub3c4 \uc99d\uac00")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc0c1\ud0dc \uac1c\uc218\uac00 \uc99d\uac00\ud55c \ub9cc\ud07c \ud074\ub798\uc2a4\ub97c \uc0dd\uc131\ud574\uc57c\ud558\uace0 \uad00\ub9ac\ud574\uc57c\ud568.")," ",(0,r.kt)("br",null),"\n\uc0c1\ud0dc \uc870\uac74 - \ud2b8\ub9ac\uac70\uac00 \uc644\ubcbd\ud558\uac8c \uad6c\uc131\ub41c \uac83 \uac19\uc9c0\ub9cc \uc774\ub807\uac8c \ubcf5\uc7a1\ud55c \uc0c1\ud0dc\uac00 \uc874\uc7ac\ud560 \uacbd\uc6b0 ",(0,r.kt)("br",null),"\nNode.js \uac19\uc740 Event-Driven \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc81c\uacf5\ud558\ub294 \ud50c\ub7ab\ud3fc\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub354 \ub098\uc544\ubcf4\uc778\ub2e4.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-reference"},"\ud83d\udd17 Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4"},"\ucf54\ub529\uc73c\ub85c \ud559\uc2b5\ud558\ub294 GoF\uc758 \ub514\uc790\uc778 \ud328\ud134 - \ubc31\uae30\uc120")))}v.isMDXComponent=!0},5824:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/state_pattern_overview_diagram-65c1f32b93be402262dc70a86527ab09.svg"},7934:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/statepattern_diagram-410eee9f848541853e7ef7ffcfdabb15.png"}}]);