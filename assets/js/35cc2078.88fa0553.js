"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3322],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},o=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(g,u(u({ref:t},o),{},{components:a})):r.createElement(g,u({ref:t},o))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,u[1]=s;for(var c=2;c<l;c++)u[c]=a[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,u),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(7462),n=a(7294),l=a(6010),u=a(2466),s=a(6550),i=a(1980),c=a(7392),o=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[u,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=g({queryString:a,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,o.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),v(e)}),[c,v,l]),tabValues:l}}var b=a(2389);const f="tabList__CuJ",k="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,a=o.indexOf(t),r=c[a].value;r!==s&&(p(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>o.push(e),onKeyDown:m,onClick:d},u,{className:(0,l.Z)("tabs__item",k,u?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function A(e){const t=v(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return n.createElement(A,(0,r.Z)({key:String(t)},e))}},6028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),u=a(5162);const s={title:"Adapter Pattern",description:"Understand about adapter pattern",tags:["design-pattern","structure-pattern"],keywords:["design pattern","adapter pattern"],last_update:{date:new Date("2023-01-30T00:00:00.000Z")}},i=void 0,c={unversionedId:"design-pattern/structure-pattern/adapter-pattern",id:"design-pattern/structure-pattern/adapter-pattern",title:"Adapter Pattern",description:"Understand about adapter pattern",source:"@site/docs/design-pattern/02-structure-pattern/01-adapter-pattern.md",sourceDirName:"design-pattern/02-structure-pattern",slug:"/design-pattern/structure-pattern/adapter-pattern",permalink:"/docusaurus/docs/design-pattern/structure-pattern/adapter-pattern",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/design-pattern/02-structure-pattern/01-adapter-pattern.md",tags:[{label:"design-pattern",permalink:"/docusaurus/docs/tags/design-pattern"},{label:"structure-pattern",permalink:"/docusaurus/docs/tags/structure-pattern"}],version:"current",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:1,frontMatter:{title:"Adapter Pattern",description:"Understand about adapter pattern",tags:["design-pattern","structure-pattern"],keywords:["design pattern","adapter pattern"],last_update:{date:"2023-01-30T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Builder Pattern",permalink:"/docusaurus/docs/design-pattern/create-pattern/builder-pattern"},next:{title:"Decorator Pattern",permalink:"/docusaurus/docs/design-pattern/structure-pattern/decorator-pattern"}},o={},p=[{value:"Why to use",id:"why-to-use",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"Example Code",id:"example-code",level:3},{value:"Client",id:"client",level:4},{value:"Target",id:"target",level:4},{value:"Adaptee",id:"adaptee",level:4},{value:"How to use",id:"how-to-use",level:2},{value:"\uad00\uacc4 \uc815\ub9ac",id:"\uad00\uacc4-\uc815\ub9ac",level:4},{value:"AccountUserDetailsAdapter.java",id:"accountuserdetailsadapterjava",level:4},{value:"AccountUserDetailsServiceAdapter.java",id:"accountuserdetailsserviceadapterjava",level:4},{value:"Class Diagram",id:"class-diagram",level:3},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"Java \uc5d0 \uc801\uc6a9\ub41c \uc5b4\ub311\ud130 \ud328\ud134 \uc608\uc81c",id:"java-\uc5d0-\uc801\uc6a9\ub41c-\uc5b4\ub311\ud130-\ud328\ud134-\uc608\uc81c",level:2},{value:"AdapterInJava.java",id:"adapterinjavajava",level:4},{value:"\ud83d\udd17 Reference",id:"-reference",level:2}],d={toc:p};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\uae30\uc874 \ucf54\ub4dc\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc0ac\uc6a9\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uad6c\ud604\uccb4\ub85c \ubc14\uafd4\uc8fc\ub294 \ud328\ud134")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Adapter_Pattern",src:a(3587).Z,width:"341",height:"372"})),(0,n.kt)("h2",{id:"why-to-use"},"Why to use"),(0,n.kt)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc0ac\uc6a9\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub530\ub974\uc9c0 \uc54a\ub294 \uae30\uc874 \ucf54\ub4dc\ub97c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c\ud568. ",(0,n.kt)("br",null),"\n\uc778\ud130\ud398\uc774\uc2a4\uac00 \uc11c\ub85c \ub2ec\ub77c\ub3c4 \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c\ub054 \ud638\ud658\uc131\uc744 \uac16\ucd94\uac8c\ud574\uc90c."),(0,n.kt)("h2",{id:"when-to-use"},"When to use"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uae30\uc874 \ucf54\ub4dc\ub97c \uc5f0\uacb0\ud574\uc57c\ud560 \ub54c")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Adapter pattern before diagram",src:a(7728).Z,width:"1568",height:"489"})),(0,n.kt)("h3",{id:"example-code"},"Example Code"),(0,n.kt)("h4",{id:"client"},"Client"),(0,n.kt)("p",null,"LoginHandler \ub294 Client \uc5d0 \ud574\ub2f9\ud55c\ub2e4. ",(0,n.kt)("br",null),"\nUserDetailsService \ub77c\ub294 Target \uc744 \ucc38\uc870\ud558\uace0\uc788\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@RequiredArgsConstructor\npublic class LoginHandler {\n    private final UserDetailsService userDetailsService;\n\n    public String login(String username, String password) {\n\n        UserDetails userDetails = userDetailsService.loadUserByName(username);\n        // \uc785\ub825\ud55c \uc774\ub984\uacfc \ube44\ubc88\uc774 \ub9de\uc73c\uba74 return\n\n        if (userDetails.getPassword().equals(password)) {\n            return userDetails.getUserName();\n        } else {\n            throw new IllegalArgumentException();\n        }\n    }\n}\n")),(0,n.kt)("h4",{id:"target"},"Target"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"target1",label:"UserDetails.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface UserDetails {\n    String getUserName();\n    String getPassword();\n}\n"))),(0,n.kt)(u.Z,{value:"target2",label:"UserDetailsService.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface UserDetailsService {\n    UserDetails loadUserByName(String username);\n}\n")))),(0,n.kt)("h4",{id:"adaptee"},"Adaptee"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"adaptee-1",label:"Account.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@Getter\n@AllArgsConstructor\npublic class Account {\n    private String name;\n    private String password;\n    private String email;\n}\n"))),(0,n.kt)(u.Z,{value:"adaptee-2",label:"AccountService.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class AccountService {\n    private HashMap<String, Account> accountHashMap = new HashMap();\n    public Account createByUserName(String userName) {\n        Account account = new Account(userName, userName, userName);\n        this.accountHashMap.put(userName, account);\n        return account;\n    }\n\n    public Account findAccountByUserName(String userName) {\n        return this.accountHashMap.get(userName);\n    }\n\n    public void updateAccount(Account account) {\n\n    }\n}\n")))),(0,n.kt)("h2",{id:"how-to-use"},"How to use"),(0,n.kt)("p",null,"\uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \uc874\uc7ac\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4 UserDetails, UserDetailsService \uc640 ",(0,n.kt)("br",null),"\n\uc571\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud558\ub294 Account, AccountService \ub97c \uc5f0\uacb0\ud560 \uac83\uc778\uac00? ",(0,n.kt)("br",null)),(0,n.kt)("h4",{id:"\uad00\uacc4-\uc815\ub9ac"},"\uad00\uacc4 \uc815\ub9ac"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Class Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Role"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LogInHandler"),(0,n.kt)("td",{parentName:"tr",align:null},"Client")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UserDetails, UserDetailsService"),(0,n.kt)("td",{parentName:"tr",align:null},"Target")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Account, AccountService"),(0,n.kt)("td",{parentName:"tr",align:null},"Adaptee")))),(0,n.kt)("p",null,"Target \uacfc Adaptee \ub97c \uc5f0\uacb0\ud560 2\uac1c\uc758 Adapter \ud074\ub798\uc2a4 ",(0,n.kt)("inlineCode",{parentName:"p"},"AccountUserDetailsAdapter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AccountUserDetailsServiceAdapter")," \ub97c \uc815\uc758\ud55c\ub2e4. ",(0,n.kt)("br",null),"\n\ub2e4\uc74c\uacfc \uac19\uc774 Target \uacfc Adaptee \ub97c \ub9f5\ud551\ud558\uc5ec \uc5b4\ub311\ud130\ub97c \uad6c\ud604\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("h4",{id:"accountuserdetailsadapterjava"},"AccountUserDetailsAdapter.java"),(0,n.kt)("p",null,"UserDetails (Target) \uc744 \uad6c\ud604\ud558\uace0 Account (Adaptee) \ub97c \ucc38\uc870\ud55c\ub2e4. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@RequiredArgsConstructor\npublic class AccountUserDetailsAdapter implements UserDetails {\n    private final Account account;\n\n    @Override\n    public String getUserName() {\n        return this.account.getName();\n    }\n\n    @Override\n    public String getPassword() {\n        return this.account.getPassword();\n    }\n}\n")),(0,n.kt)("h4",{id:"accountuserdetailsserviceadapterjava"},"AccountUserDetailsServiceAdapter.java"),(0,n.kt)("p",null,"UserDetailsService (Target) \uc744 \uad6c\ud604\ud558\uace0 AccountService (Adaptee) \ub97c \ucc38\uc870\ud55c\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@RequiredArgsConstructor\npublic class AccountUserDetailsServiceAdapter implements UserDetailsService {\n    private final AccountService accountService;\n\n    @Override\n    public UserDetails loadUserByName(String username) {\n        Account foundAccount = this.accountService.findAccountByUserName(username);\n        return new AccountUserDetailsAdapter(foundAccount);\n    }\n}\n")),(0,n.kt)("h3",{id:"class-diagram"},"Class Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Adapter pattern class diagram",src:a(4261).Z,width:"2046",height:"612"})),(0,n.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,n.kt)("h3",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uae30\uc874 \ucf54\ub4dc Adaptee \ubcc0\uacbd \uc5c6\uc774 Adapter\ub97c \uc815\uc758\ud558\uc5ec \uc6d0\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud560 \uc218 \uc788\ub2e4. (OCP)"),(0,n.kt)("li",{parentName:"ul"},"\uc5b4\ub311\ud130\ub294 \uc624\ub85c\uc9c0 Target - Adaptee \ub97c ",(0,n.kt)("strong",{parentName:"li"},"\uc5f0\uacb0\ud558\ub294 \uc5ed\ud560\ub9cc \ud55c\ub2e4.")," (SRP) ",(0,n.kt)("br",null)," ")),(0,n.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4 \uc218 \uc99d\uac00\ub85c \uc778\ud55c \ubcf5\uc7a1\ub3c4 \uc99d\uac00")),(0,n.kt)("h2",{id:"java-\uc5d0-\uc801\uc6a9\ub41c-\uc5b4\ub311\ud130-\ud328\ud134-\uc608\uc81c"},"Java \uc5d0 \uc801\uc6a9\ub41c \uc5b4\ub311\ud130 \ud328\ud134 \uc608\uc81c"),(0,n.kt)("h4",{id:"adapterinjavajava"},"AdapterInJava.java"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131\uc790: Adapter"),(0,n.kt)("li",{parentName:"ul"},"\uc778\uc790: Adaptee"),(0,n.kt)("li",{parentName:"ul"},"\ubc18\ud658 \ud0c0\uc785: Target")),(0,n.kt)("p",null,"\uc73c\ub85c \uad6c\uc131\ub41c \uc608\uc81c\ub97c \uc0b4\ud3b4\ubcf4\uc790."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class AdapterInJava {\n    public static void main(String[] args) {\n        \n\n        String[] champNames = new String[]{"\uce74\ub974\ub9c8", "\ub7fc\ube14", "\ubc14\uc774"};\n        \n        // List<String> \uc740 Target\n        // Arrays.asList() \ub294 Adapter\n        // champNames \ub294 Adaptee\n        List<String> champNameList = Arrays.asList(champNames);\n\n        // \ubc18\ud658\ub41c Enumeration<String> \uc740 Target\n        // Collections.enumeration() \ub294 Adapter\n        // ChampNameList \ub294 Adaptee\n        Enumeration<String> enumeration = Collections.enumeration(champNameList);\n    }\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"-reference"},"\ud83d\udd17 Reference"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4/dashboard"},"GoF \ub514\uc790\uc778 \ud328\ud134 - \ubc31\uae30\uc120")))}m.isMDXComponent=!0},3587:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Adapter_Pattern-e0f73d26c529c2e72d6a1c3a707125fa.svg"},4261:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adapter_pattern_after_diagram-8317f73433ebcbbedd9497cc6146c0e4.png"},7728:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adapter_pattern_before_diagram-445adb25988ecf6f4898e288bd230490.png"}}]);