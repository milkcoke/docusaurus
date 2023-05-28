"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:r,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={title:"Goroutine introduction",description:"Introduction about goroutine.",tags:["go"],keywords:["go","goroutine"],last_update:{date:new Date("2023-03-05T00:00:00.000Z")}},a="Goroutine",u={unversionedId:"go/goroutine-introduction",id:"go/goroutine-introduction",title:"Goroutine introduction",description:"Introduction about goroutine.",source:"@site/docs/go/01-goroutine-introduction.md",sourceDirName:"go",slug:"/go/goroutine-introduction",permalink:"/docusaurus/docs/go/goroutine-introduction",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/go/01-goroutine-introduction.md",tags:[{label:"go",permalink:"/docusaurus/docs/tags/go"}],version:"current",lastUpdatedAt:1677974400,formattedLastUpdatedAt:"Mar 5, 2023",sidebarPosition:1,frontMatter:{title:"Goroutine introduction",description:"Introduction about goroutine.",tags:["go"],keywords:["go","goroutine"],last_update:{date:"2023-03-05T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/docusaurus/docs/category/go"},next:{title:"Go Scheduler",permalink:"/docusaurus/docs/go/go-scheduler"}},l={},c=[{value:"Old concurrency problem",id:"old-concurrency-problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Limit of locking",id:"limit-of-locking",level:2},{value:"Communicating Sequential Process (CSP)",id:"communicating-sequential-process-csp",level:2},{value:"Goroutines",id:"goroutines",level:2},{value:"Memory map of goroutine",id:"memory-map-of-goroutine",level:3},{value:"WaitGroup",id:"waitgroup",level:2},{value:"Wrong example",id:"wrong-example",level:4},{value:"Right example",id:"right-example",level:4}],s={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"goroutine"},"Goroutine"),(0,r.kt)("h2",{id:"old-concurrency-problem"},"Old concurrency problem"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Race condition ",(0,r.kt)("br",null),"\nThis occurs when order of execution is not guaranteed."),(0,r.kt)("li",{parentName:"ul"},"Deadlock ",(0,r.kt)("br",null),"\nConcurrent program has risk of Blocking.")),(0,r.kt)("p",null,"Expect next program output. ",(0,r.kt)("br",null),"\nIt shows race condition , ",(0,r.kt)("em",{parentName:"p"},"this program output is different whenever execution.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package goroutine\n\nimport (\n    "log"\n    "testing"\n)\n\nfunc TestGoroutine(t *testing.T) {\n    var sharedData int = 0\n\n    go func() {\n        sharedData++\n    }()\n\n    if sharedData == 0 { // if goroutine gets scheduled after this line\n        // sharedData is already \'1\' incremented from 0\n        log.Printf("Data is %v", sharedData) // print 1\n    }\n}\n')),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Locking mechanism (e.g. Mutex, Semaphore)"),(0,r.kt)("h2",{id:"limit-of-locking"},"Limit of locking"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Reduce performance, parallelism since it forces to execute sequentially"),(0,r.kt)("li",{parentName:"ol"},"Deadlock risk if there's circular reference.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"communicating-sequential-process-csp"},"Communicating Sequential Process (CSP)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each process is built for sequential execution."),(0,r.kt)("li",{parentName:"ul"},"Data is communicated between processes. ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"No shared memory"))," ",(0,r.kt)("br",null),"\n=> This protects from deadlock or race condition."),(0,r.kt)("li",{parentName:"ul"},"Scale by adding more of the same.")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"concurrency-in-go"},"Concurrency in go"),(0,r.kt)("h2",{id:"goroutines"},"Goroutines"),(0,r.kt)("p",null,"Goroutine is user space light-weight thread managed by go runtime. ",(0,r.kt)("br",null),"\nGoroutines starts with 2KB of stack whcih grows and shrinks as required. ",(0,r.kt)("br",null),"\nCan create hundreds of thousdands of goroutines in the same address space. ",(0,r.kt)("br",null),"\nGoroutine doesn't use shared memory to avoid deadlock or race condition problem."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Goroutine is different to thread. ",(0,r.kt)("br",null),"\nThis is running in the context of the OS threads.\nMany goroutines can be executed in the context of the single OS thread.")),(0,r.kt)("h3",{id:"memory-map-of-goroutine"},"Memory map of goroutine"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"goroutine memory map",src:n(8720).Z,width:"2744",height:"1552"})),(0,r.kt)("h2",{id:"waitgroup"},"WaitGroup"),(0,r.kt)("h4",{id:"wrong-example"},"Wrong example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Calling ",(0,r.kt)("inlineCode",{parentName:"em"},"WaitGroup.Add()")," in function is bad approach."))," ",(0,r.kt)("br",null),"\nIf goroutine failed to get scheduling, then main routine return without blocking leaving goroutine is not executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func asyncDoSomething(wg *sync.WaitGroup) {\n    wg.Add(1)       // \u274c increment is not executed if goroutine couldn't have the chance to be executed.\n    defer wg.Done() // decrement dynamically\n    // ..\n}\n\nfunc main() {\n    waitGroup := &sync.WaitGroup{}\n    go asyncDoSomething(waitGroup)\n    waitGroup.Wait()\n}\n")),(0,r.kt)("h4",{id:"right-example"},"Right example"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Always use ",(0,r.kt)("inlineCode",{parentName:"p"},"waitGroup.add()")," outside of goroutine function. ",(0,r.kt)("br",null),"\nFor goroutine have to have chance to execute.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func asyncDoSomething(wg *sync.WaitGroup) {\n    defer wg.Done()\n    // ..\n}\n\nfunc main() {\n    waitGroup := &sync.WaitGroup{}\n    waitGroup.add(1) // \u2705 Enclosure scope add()\n    go asyncDoSomething(waitGroup)\n    waitGroup.Wait()\n}\n")))}d.isMDXComponent=!0},8720:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/memeorymap_in_goroutine-2a41f87b8a9b13d956dfe6a48812fa12.png"}}]);