"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>P});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),u=n(1980),s=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var k=n(2389);const f="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(d(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",g,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function P(e){const t=(0,k.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},1422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={title:"by keyword",description:"Know about `by` keyword.",tags:["kotlin"],keywords:["kotlin"],last_update:{date:new Date("2023-02-04T00:00:00.000Z")}},u=void 0,s={unversionedId:"kotlin/delegate/by-keyword",id:"kotlin/delegate/by-keyword",title:"by keyword",description:"Know about `by` keyword.",source:"@site/docs/kotlin/02-delegate/01-by-keyword.md",sourceDirName:"kotlin/02-delegate",slug:"/kotlin/delegate/by-keyword",permalink:"/docusaurus/docs/kotlin/delegate/by-keyword",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/kotlin/02-delegate/01-by-keyword.md",tags:[{label:"kotlin",permalink:"/docusaurus/docs/tags/kotlin"}],version:"current",lastUpdatedAt:1675468800,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:1,frontMatter:{title:"by keyword",description:"Know about `by` keyword.",tags:["kotlin"],keywords:["kotlin"],last_update:{date:"2023-02-04T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Delegate",permalink:"/docusaurus/docs/category/delegate"},next:{title:"delegate by map",permalink:"/docusaurus/docs/kotlin/delegate/map-delegate"}},c={},d=[{value:"When to use",id:"when-to-use",level:2},{value:"Why to use",id:"why-to-use",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Interface",id:"interface",level:3},{value:"Implements",id:"implements",level:3},{value:"Client",id:"client",level:3},{value:"Delegates singleton object",id:"delegates-singleton-object",level:2},{value:"vetoable",id:"vetoable",level:3},{value:"SmartPhone.kt",id:"smartphonekt",level:4},{value:"SmartPhoneTest.kt",id:"smartphonetestkt",level:4},{value:"observable",id:"observable",level:3},{value:"SmartPhone.kt",id:"smartphonekt-1",level:4},{value:"Reference",id:"reference",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("p",null,"Required delegating implements of interface or inheritance of abstract class to another object."),(0,r.kt)("h2",{id:"why-to-use"},"Why to use"),(0,r.kt)("p",null,"Enhance re-usability and reducing the amount of code."),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"I'll introduce a SmartPhone class consists of Phone and Camera. ",(0,r.kt)("br",null),"\nSo this is composition relation."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In recent, OOP prefers composition than inheritance.")),(0,r.kt)("h3",{id:"interface"},"Interface"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"phone",label:"Phone.kt",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface Phone {\n    fun dial(phoneNumber: String) : String\n}\n"))),(0,r.kt)(o.Z,{value:"camera",label:"Camera.kt",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface Camera {\n    fun takePicture() : String\n}\n")))),(0,r.kt)("h3",{id:"implements"},"Implements"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"default-phone",label:"DefaultPhone.kt",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class DefaultPhone : Phone {\n    override fun dial(phoneNumber: String): String {\n        return "Dialing $phoneNumber.."\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"default-camera",label:"DefaultCamera.kt",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class DefaultCamera : Camera {\n    override fun takePicture(): String {\n        return "Shots!"\n    }\n}\n')))),(0,r.kt)("h3",{id:"client"},"Client"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"by")," keyword, we can delegate implementation to camera and phone object. ",(0,r.kt)("br",null),"\nNo need implements in SmartPhone class."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"smartphone",label:"SmartPhone.kt",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SmartPhone (\n    private val camera: Camera = DefaultCamera(),\n    private val phone: Phone = DefaultPhone()\n    // highlight-next-line\n) : Camera by camera, Phone by phone\n"))),(0,r.kt)(o.Z,{value:"test",label:"SmartPhoneTest.kt",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SmartPhoneTest {\n    @DisplayName("by \uc5c6\uc774 \ucc38\uc870\ud558\uae30")\n    @Test\n    internal fun testCall() {\n        val smartPhone = SmartPhone()\n        // can\'t use camera, phone method without opening \'camera\' , \'phone\' property\n    }\n\n    @DisplayName("by \ub85c \ud569\uc131\uad00\uacc4 \uac1d\uccb4 \uba54\uc18c\ub4dc \uc0ac\uc6a9")\n    @Test\n    internal fun testByCall() {\n        val smartPhone = SmartPhone()\n        // delegate!\n        println(smartPhone.dial("+82 1011110000"))\n        println(smartPhone.takePicture())\n    }\n}\n')))),(0,r.kt)("h2",{id:"delegates-singleton-object"},"Delegates singleton object"),(0,r.kt)("h3",{id:"vetoable"},"vetoable"),(0,r.kt)("p",null,"We can limit the change the value using ",(0,r.kt)("inlineCode",{parentName:"p"},"by")," keyword and ",(0,r.kt)("inlineCode",{parentName:"p"},"Delegates.vetoable()")),(0,r.kt)("h4",{id:"smartphonekt"},"SmartPhone.kt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SmartPhone (\n    private val camera: Camera = DefaultCamera(),\n    private val phone: Phone = DefaultPhone()\n) : Camera by camera, Phone by phone {\n    // initial value is 1\n    // highlight-next-line\n    var serialNumber : Int by Delegates.vetoable(1){property, oldValue, newValue ->\n        // only true if range in [1,10]\n        newValue in 1 .. 10\n    }\n}\n")),(0,r.kt)("h4",{id:"smartphonetestkt"},"SmartPhoneTest.kt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SmartPhoneTest {\n    private val smartPhone = SmartPhone()\n\n    @DisplayName("\uc2dc\ub9ac\uc5bc \ucd08\uae30\uac12 \uac80\uc0ac")\n    @Test\n    internal fun testSerialNumberInitValue() {\n        assertEquals(1, smartPhone.serialNumber)\n    }\n\n    @DisplayName("\uc2dc\ub9ac\uc5bc\ub118\ubc84 \ubcc0\uacbd \uac10\uc9c0")\n    @Test\n    internal fun testSerialNumberChange() {\n        smartPhone.serialNumber = 11\n        // failed to change to 11 range 1..10\n        assertNotEquals(11, smartPhone.serialNumber)\n    }\n}\n')),(0,r.kt)("h3",{id:"observable"},"observable"),(0,r.kt)("p",null,"If you want only capturing changing. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"Delegates.observable()"),(0,r.kt)("br",null),"\nThis doesn't return anything (Unit)"),(0,r.kt)("h4",{id:"smartphonekt-1"},"SmartPhone.kt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SmartPhone (\n    private val camera: Camera = DefaultCamera(),\n    private val phone: Phone = DefaultPhone()\n) : Camera by camera, Phone by phone {\n    // initial value is 1\n    // highlight-next-line\n    var serialNumber : Int by Delegates.observable(1) {property, oldValue, newValue ->\n        println("${property.name} changed from $oldValue to $newValue")\n    }\n}\n')),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/delegation.html"},"delegation - kotlin docs")))}m.isMDXComponent=!0}}]);