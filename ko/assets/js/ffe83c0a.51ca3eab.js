"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=v({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var h=n(2389);const b="tabList__CuJ",f="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",f,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},9192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={title:"Command Pattern",description:"Understand about command pattern",tags:["design-pattern","behavior-pattern"],keywords:["design pattern","command pattern"],last_update:{date:new Date("2023-01-28T00:00:00.000Z")}},s=void 0,u={unversionedId:"design-pattern/behavior-pattern/command-pattern",id:"design-pattern/behavior-pattern/command-pattern",title:"Command Pattern",description:"Understand about command pattern",source:"@site/docs/design-pattern/03-behavior-pattern/02-command-pattern.md",sourceDirName:"design-pattern/03-behavior-pattern",slug:"/design-pattern/behavior-pattern/command-pattern",permalink:"/docusaurus/ko/docs/design-pattern/behavior-pattern/command-pattern",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/design-pattern/03-behavior-pattern/02-command-pattern.md",tags:[{label:"design-pattern",permalink:"/docusaurus/ko/docs/tags/design-pattern"},{label:"behavior-pattern",permalink:"/docusaurus/ko/docs/tags/behavior-pattern"}],version:"current",lastUpdatedAt:1674864e3,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 28\uc77c",sidebarPosition:2,frontMatter:{title:"Command Pattern",description:"Understand about command pattern",tags:["design-pattern","behavior-pattern"],keywords:["design pattern","command pattern"],last_update:{date:"2023-01-28T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Chain of Responsibility Pattern",permalink:"/docusaurus/ko/docs/design-pattern/behavior-pattern/chain-of-responsibility-pattern"},next:{title:"State Pattern",permalink:"/docusaurus/ko/docs/design-pattern/behavior-pattern/state-pattern"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Why to use",id:"why-to-use",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"Invoker - Receiver Java Example",id:"invoker---receiver-java-example",level:3},{value:"Button.java",id:"buttonjava",level:4},{value:"How to use",id:"how-to-use",level:2},{value:"Diagram",id:"diagram",level:3},{value:"Command.java",id:"commandjava",level:4},{value:"ButtonTest.java",id:"buttontestjava",level:4},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"\ud83d\udd17 Reference",id:"-reference",level:2}],m={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Invoker - Command - Receiver \uad00\uacc4\ub85c \ud638\ucd9c\uc790\uc640 \uc2e4\ud589\uc790\uc758 \uad00\uacc4\ub97c \ub514\ucee4\ud50c\ub9c1\ud558\ub294 \ub514\uc790\uc778\ud328\ud134."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Command pattern diagram",src:n(2830).Z,width:"671",height:"271"})),(0,r.kt)("h2",{id:"why-to-use"},"Why to use"),(0,r.kt)("p",null,"Invoker (\uc694\uccad\uc790)\uc640 Receiver(\uc2e4\ud589\uc790)\uc758 \ud0c0\uc774\ud2b8\ud55c \uc758\uc874\uad00\uacc4\ub97c \ubd84\ub9ac\ud558\uc5ec \ubcc0\ud654\uc5d0 \uc720\uc5f0\ud55c \uad6c\uc870\ub97c \ub9cc\ub4e0\ub2e4. ",(0,r.kt)("br",null),"\n\uc11c\ub85c \uc758\uc874\uad00\uacc4\uac00 \ud0c0\uc774\ud2b8\ud560 \ub54c Receiver \ucf54\ub4dc\uac00 \ubcc0\uacbd\ub418\uba74, Invoker \ucf54\ub4dc\ub3c4 \ubcc0\uacbd\uc774 \ubd88\uac00\ud53c\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud55c\ub2e4. ",(0,r.kt)("br",null),"\n\ucee4\ub9e8\ub4dc \ud328\ud134 \ub3c4\uc785 \ud6c4 Receiver \ucf54\ub4dc \ubcc0\uacbd\uc2dc \uc624\ub85c\uc9c0 Command \ub9cc \uc601\ud5a5\ubc1b\ub294\ub2e4."),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("p",null,"Invoker - Receiver \ub514\ucee4\ud50c\ub9c1\uc774 \ud544\uc694\ud560 \ub54c"),(0,r.kt)("h3",{id:"invoker---receiver-java-example"},"Invoker - Receiver Java Example"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Getter\npublic class Light {\n\n    private boolean isOn = false;\n\n    public void on() {\n        if (this.isOn) {\n            System.out.println("\uc774\ubbf8 \ubd88\uc774 \ucf1c\uc838\uc788\uc2b5\ub2c8\ub2e4.");\n        } else {\n            this.isOn = true;\n        }\n    }\n    public void off() {\n        if (!this.isOn) {\n            System.out.println("\uc774\ubbf8 \ubd88\uc774 \uaebc\uc838\uc788\uc2b5\ub2c8\ub2e4.");\n        } else {\n            this.isOn = false;\n        }\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"game",label:"Game",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Getter\npublic class Game {\n    private boolean isStarted = false;\n\n    public void start() {\n        if (isStarted) {\n            System.out.println("\uc774\ubbf8 \uac8c\uc784\uc774 \uc2e4\ud589\uc911\uc785\ub2c8\ub2e4.");\n            return;\n        }\n        System.out.println("\uac8c\uc784 \uc2dc\uc791");\n        this.isStarted = true;\n    }\n\n    public void finish() {\n        if (!isStarted) {\n            System.out.println("\uac8c\uc784\uc774 \uc2e4\ud589\uc911\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");\n        }\n        System.out.println("\uac8c\uc784 \uc885\ub8cc");\n        this.isStarted = false;\n    }\n}\n')))),(0,r.kt)("h4",{id:"buttonjava"},"Button.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Getter\n@RequiredArgsConstructor\npublic class Button {\n    private final Light light;\n\n    // toggle \ubc84\ud2bc\uc774\ub77c \uc0c1\ud0dc\uc804\ud658 \ubb34\uc870\uac74 \uc77c\uc5b4\ub0a8.\n    public void press() {\n        if (this.light.isOn()) this.light.off();\n        else this.light.on();\n    }\n}\n")),(0,r.kt)("p",null,"\ub098\uc758 \uc571\uc774 \ubc84\ud2bc(Invoker)\uc744 \ud1b5\ud574 Game \ud639\uc740 Light \uc744 \ud0a4\uace0 \ub048\ub2e4\uace0 \uac00\uc815\ud574\ubcf4\uc800. ",(0,r.kt)("br",null),"\n\uc5ec\uae30\uc11c Game, Light \uac00 Receiver \uac00 \ub41c\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7fc Receiver \uac00 \ubc14\ub014 \ub54c\ub9c8\ub2e4 \ub0b4 \uc571 \ud074\ub798\uc2a4\uac00 \uacc4\uc18d \ubcc0\uacbd\ub418\uc5b4\uc57c\ud55c\ub2e4."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"light-app",label:"LightApp",mdxType:"TabItem"},(0,r.kt)("p",null,"LightApp \uc740 Light (Receiver) \uc5d0 \uc758\uc874\uc801\uc774\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Getter\n@RequiredArgsConstructor\npublic class LightApp {\n    // highlight-next-line\n    private final Light light;\n    \n    public void press() {\n        this.light.off();\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"game-app",label:"GameApp",mdxType:"TabItem"},(0,r.kt)("p",null,"GameApp \uc740 Game (Receiver) \uc5d0 \uc758\uc874\uc801\uc774\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Getter\n@RequiredArgsConstructor\npublic class GameApp {\n    // highlight-next-line\n    private final Game game;\n\n    public void press() {\n        this.game.finish();\n    }\n}\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"GameApp \uacfc LightApp \uc740 \uc0ac\uc2e4\uc0c1 \uac70\uc758 \uac19\uc740 \ucf54\ub4dc\ub2e4.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Invoker(GameApp, LightApp) \uc640 Receiver(Game, Light) \uc758 \ucee4\ud50c\ub9c1 \uad00\uacc4\ub85c \uc778\ud574 \uac70\uc758 \uac19\uc740 \ucf54\ub4dc\uac00 \ubc18\ubcf5\ub418\ub294 Invoker \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uac70\ub098, \uae30\uc874 Invoker \ucf54\ub4dc\ub97c \uc218\uc815\ud574\uc57c\ud55c\ub2e4.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udcdd ",(0,r.kt)("strong",{parentName:"p"},"\uc774\ub7f4 \ub54c \ucee4\ub9e8\ub4dc \ud328\ud134\uc73c\ub85c Invoker, Receiver \uac04 \uc758\uc874 \uad00\uacc4\ub97c \ubd84\ub9ac\ud560 \uc218 \uc788\ub2e4."))),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"Command \uc778\ud130\ud398\uc774\uc2a4\uc640 \uad6c\ud604\uccb4\ub97c \uc544\ub798\uc640 \uac19\uc740 \uad6c\uc870\ub85c \uc815\uc758\ud55c\ub2e4. ",(0,r.kt)("br",null),"\nReceiver \ucf54\ub4dc\uac00 \ubcc0\uacbd\ub418\uba74 Invoker \ub294 \uc601\ud5a5\uc744 \ubc1b\uc9c0 \uc54a\uace0 \uc624\ub85c\uc9c0 Command \ub9cc \ubcc0\uacbd\ud558\uba74 \ub41c\ub2e4. "),(0,r.kt)("h3",{id:"diagram"},"Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"command pattern diagram",src:n(3644).Z,width:"1764",height:"773"})),(0,r.kt)("h4",{id:"commandjava"},"Command.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface Command {\n    // \uc624\ub85c\uc9c0 \uc2e4\ud589\ub9cc\n    void execute();\n}\n")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"light-command-on",label:"LightCommandOn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@RequiredArgsConstructor\npublic class LightOnCommand implements Command {\n    private final Light light;\n    @Override\n    public void execute() {\n        this.light.on();\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"game-command-start",label:"GameCommand",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@RequiredArgsConstructor\npublic class GameStartCommand implements Command {\n    // Command \uac1d\uccb4\uc5d0\uc11c \uad73\uc774 game \uac1d\uccb4\uc5d0 \uc811\uadfc\ud574\uc11c \uc5b4\ub5a4 \uc0c1\ud0dc\ub97c \uc870\uc791\ud560 \ud544\uc694\ub294 \uc5c6\ub2e4.\n    // Command \ub294 \uc624\ub85c\uc9c0 '\ub3d9\uc791'\uc774\ub77c\ub294 \ucc45\uc784\ub9cc \uac16\ub294\ub2e4.\n    // \ub530\ub77c\uc11c Getter \ub294 \ud544\uc694\ud558\uc9c0 \uc54a\ub2e4.\n    private final Game game;\n\n    @Override\n    public void execute() {\n        this.game.start();\n    }\n}\n")))),(0,r.kt)("h4",{id:"buttontestjava"},"ButtonTest.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class ButtonTest {\n\n    @DisplayName("On Off \ubc84\ud2bc \ucee4\ub9e8\ub4dc\uc640 \ud568\uaed8 \uc0dd\uc131")\n    @Test\n    void lightButtonOnOffTest() {\n        Light currentRoomLight = new Light();\n\n        // \ub3d9\uc77c\ud55c \ubd88\ube5b\uc744 \uc804\ub2ec\ubc1b\uc544 \ucee4\ub9e8\ub4dc \uc0dd\uc0c1\uc790 \uc8fc\uc785\n        Button onButton = new Button(new LightOnCommand(currentRoomLight));\n        Button offButton = new Button(new LightOffCommand(currentRoomLight));\n        \n        onButton.press();\n        assertThat(currentRoomLight.isOn()).isTrue();\n\n        offButton.press();\n        assertThat(currentRoomLight.isOn()).isFalse();\n    }\n\n    @DisplayName("\uac8c\uc784 \uc2dc\uc791 - \uc885\ub8cc \ubc84\ud2bc \ud14c\uc2a4\ud2b8")\n    @Test\n    void gameButtonTest() {\n        Game game = new Game();\n        Button gameStartButton = new Button(new GameStartCommand(game));\n        Button gameFinishButton = new Button(new GameFinishCommand(game));\n\n        gameStartButton.press();\n        assertThat(game.isStarted()).isTrue();\n        gameFinishButton.press();\n        assertThat(game.isStarted()).isFalse();\n    }\n}\n')),(0,r.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,r.kt)("h3",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,r.kt)("p",null,"Single Responsibility Principle (SRP) \uc900\uc218."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud558\ub098\uc758 \ucee4\ub9e8\ub4dc\uac00 \uc624\ub85c\uc9c0 \ud558\ub098\uc758 \ucc45\uc784\ub9cc \uac16\ub294\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Receiver \ucf54\ub4dc \ubcc0\uacbd\uc2dc Invoker \ucf54\ub4dc\uac00 \uc601\ud5a5\ubc1b\uc9c0 \uc54a\ub294\ub2e4.")),(0,r.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \ubcf5\uc7a1\ub3c4 \uc99d\uac00")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-reference"},"\ud83d\udd17 Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4"},"\ucf54\ub529\uc73c\ub85c \ud559\uc2b5\ud558\ub294 GoF\uc758 \ub514\uc790\uc778 \ud328\ud134 - \ubc31\uae30\uc120")))}d.isMDXComponent=!0},2830:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Command_Pattern_diagram-3c06e23dcab9999dfa23c76f0908a596.svg"},3644:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/command_pattern_diagram-e3aa70c0143084dee37f0363d76a5d54.png"}}]);