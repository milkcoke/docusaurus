"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:n,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>T});var a=r(7462),n=r(7294),l=r(6010),o=r(2466),u=r(6550),s=r(1980),i=r(7392),c=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=d(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,i]=b({queryString:r,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),v(e)}),[i,v,l]),tabValues:l}}var f=r(2389);const h="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==u&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g,o?.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=v(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},5128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),l=r(4866),o=r(5162);const u={title:"Template Method Pattern",description:"Understand about state pattern",tags:["design-pattern","behavior-pattern"],keywords:["design pattern","template method pattern"],last_update:{date:new Date("2024-03-15T00:00:00.000Z")}},s=void 0,i={unversionedId:"design-pattern/behavior-pattern/template-method-pattern",id:"design-pattern/behavior-pattern/template-method-pattern",title:"Template Method Pattern",description:"Understand about state pattern",source:"@site/docs/design-pattern/03-behavior-pattern/09-template-method-pattern.md",sourceDirName:"design-pattern/03-behavior-pattern",slug:"/design-pattern/behavior-pattern/template-method-pattern",permalink:"/docusaurus/ko/docs/design-pattern/behavior-pattern/template-method-pattern",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/design-pattern/03-behavior-pattern/09-template-method-pattern.md",tags:[{label:"design-pattern",permalink:"/docusaurus/ko/docs/tags/design-pattern"},{label:"behavior-pattern",permalink:"/docusaurus/ko/docs/tags/behavior-pattern"}],version:"current",lastUpdatedAt:1710460800,formattedLastUpdatedAt:"2024\ub144 3\uc6d4 15\uc77c",sidebarPosition:9,frontMatter:{title:"Template Method Pattern",description:"Understand about state pattern",tags:["design-pattern","behavior-pattern"],keywords:["design pattern","template method pattern"],last_update:{date:"2024-03-15T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"State Pattern",permalink:"/docusaurus/ko/docs/design-pattern/behavior-pattern/state-pattern"},next:{title:"Typescript",permalink:"/docusaurus/ko/docs/category/typescript"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Why to use",id:"why-to-use",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Example",id:"example",level:2},{value:"Overview",id:"overview-1",level:2},{value:"Example (2)",id:"example-2",level:2}],d={toc:p};function m(e){let{components:t,...u}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Abstract Class \ub294 \ud15c\ud50c\ub9bf \uba54\uc18c\ub4dc\ub97c \uc81c\uacf5\ud558\uace0  ",(0,n.kt)("br",null),"\n\ud558\uc704 \ud074\ub798\uc2a4\ub294 \uad6c\uccb4\uc801\uc778 \ud589\uc704\ub97c \uc815\uc758\ud55c\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Template_Method_Overview",src:r(8315).Z,width:"2084",height:"1324"})),(0,n.kt)("h2",{id:"why-to-use"},"Why to use"),(0,n.kt)("p",null,"\ucf54\ub4dc\ub97c \uc7ac\uc0ac\uc6a9\ud558\uace0 \uad6c\uccb4\uc801\uc778 \ud589\uc704\ub9cc \ubd84\ub9ac\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("h2",{id:"when-to-use"},"When to use"),(0,n.kt)("p",null,"\uacf5\ud1b5\ub41c \ub85c\uc9c1\uc744 \uadf8\ub300\ub85c \ub450\uace0 \ucc28\uc774\uac00 \uc874\uc7ac\ud558\ub294 \uba54\uc18c\ub4dc\ub9cc \ubd84\ub9ac\ud558\uc5ec SRP / OCP \ub97c \uc9c0\ud0a4\uace0\uc790 \ud560 \ub54c."),(0,n.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,n.kt)("h3",{id:"pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud15c\ud50c\ub9bf \ucf54\ub4dc \uc7ac\uc0ac\uc6a9 ",(0,n.kt)("br",null),"\n\ucf54\ub4dc \uc911\ubcf5 \uc81c\uac70"),(0,n.kt)("li",{parentName:"ul"},"SRP / OCP \uc900\uc218")),(0,n.kt)("h3",{id:"cons"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59 \uc704\ubc30 \uc704\ud5d8  ",(0,n.kt)("br",null),"\n\uc778\ud130\ud398\uc774\uc2a4 \uc2dc\uadf8\ub2c8\ucc98\ub9cc \uc9c0\ud0a4\uace0, \uc2e4\uc81c \ub3d9\uc791\uc740 \uc6d0\ub798 \uc758\ub3c4\uc640 \ub2e4\ub974\uac8c \uc774\ub904\uc9c8 \uc218 \uc788\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud15c\ud50c\ub9bf\uc744 \uc81c\uc678\ud55c \uba54\uc18c\ub4dc\uac00 \ub9ce\uc544\uc9c8 \uc218\ub85d \ud15c\ud50c\ub9bf \uba54\uc18c\ub4dc\uac00 \ubcf5\uc7a1\ud574\uc9c8 \uc218 \uc788\ub2e4.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ucd94\uc0c1 \ud074\ub798\uc2a4 \ud15c\ud50c\ub9bf \uba54\uc18c\ub4dc\uc5d0 ",(0,n.kt)("inlineCode",{parentName:"p"},"final")," \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec Override \ub97c \ubc29\uc9c0\ud558\ub77c.")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"abstract",label:"AbstractFileProcessor.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'abstract class AbstractFileProcessor {\n  final public int process(String filePath) throws FileNotFoundException {\n    try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {\n\n      OptionalInt result = br.lines()\n        .mapToInt(Integer::parseInt)\n        .reduce(this::calculate);\n\n      if (result.isEmpty()) throw new IllegalStateException("The file has no content");\n      return result.getAsInt();\n\n    } catch (IOException e) {\n      throw new FileNotFoundException(e.getMessage());\n    }\n  }\n\n  abstract protected int calculate(int prevValue, int nextValue);\n}\n\n'))),(0,n.kt)(o.Z,{value:"PlusFileProcessor",label:"PlusFileProcessor.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"class PlusFileProcessor extends AbstractFileProcessor {\n  @Override\n  protected int calculate(int prevValue, int nextValue) {\n    return prevValue + nextValue;\n  }\n}\n\n"))),(0,n.kt)(o.Z,{value:"MultiplyFileProcessor",label:"MultiplyFileProcessor.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"class MultiplyFileProcessor extends AbstractFileProcessor {\n  @Override\n  protected int calculate(int prevValue, int nextValue) {\n    return prevValue * nextValue;\n  }\n}\n")))),(0,n.kt)("h1",{id:"template-callback-pattern"},"Template Callback Pattern"),(0,n.kt)("h2",{id:"overview-1"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Template_Callback_Pattern",src:r(744).Z,width:"3084",height:"1104"})),(0,n.kt)("h2",{id:"example-2"},"Example (2)"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Operation",label:"Operation.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface Operation<T> {\n  T operate(T accumulator, T currentValue);\n}]\n"))),(0,n.kt)(o.Z,{value:"templateInterface",label:"FileProcessor.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"interface FileProcessor<T> {\n  T process(String filePath, Operation<T> operation) throws FileNotFoundException;\n}\n\n"))),(0,n.kt)(o.Z,{value:"SingletonOperation",label:"SingletonIntOperation.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@RequiredArgsConstructor\nenum SingletonIntOperation implements Operation<Integer> {\n  PLUS((accumulator, currentValue)-> accumulator + currentValue),\n  MULTIPLY((accumulator, currentValue)-> accumulator * currentValue);\n\n  private final BiFunction<Integer, Integer, Integer> operation;\n\n  @Override\n  public Integer operate(Integer accumulator, Integer currentValue) {\n    return this.operation.apply(accumulator, currentValue);\n  }\n}\n\n"))),(0,n.kt)(o.Z,{value:"IntegerFileProcessor",label:"IntegerFileProcessor.java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class IntegerFileProcessor implements FileProcessor<Integer> {\n  @Override\n  public Integer process(String filePath, Operation<Integer> operation) throws FileNotFoundException {\n    try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {\n\n      OptionalInt result = br.lines()\n        .mapToInt(Integer::parseInt)\n        .reduce(operation::operate);\n\n      if (result.isEmpty()) throw new IllegalStateException("The file has no content");\n      return result.getAsInt();\n\n    } catch (IOException e) {\n      throw new FileNotFoundException(e.getMessage());\n    }\n  }\n}\n\n')))))}m.isMDXComponent=!0},744:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/template_callback_pattern-90d934106eb3d9bc6f478e7776a6e78f.png"},8315:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/template_method_pattern-924ee276f82b29fe75d65dac8ad3ce39.png"}}]);