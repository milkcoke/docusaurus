"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},u=Object.keys(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(r),g=n,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||u;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,i=new Array(u);i[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:n,i[1]=a;for(var s=2;s<u;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const u={title:"Go Scheduler",description:"Describe goroutine scheduler and state",tags:["go"],keywords:["go","goroutine"],last_update:{date:new Date("2023-03-05T00:00:00.000Z")}},i=void 0,a={unversionedId:"go/go-scheduler",id:"go/go-scheduler",title:"Go Scheduler",description:"Describe goroutine scheduler and state",source:"@site/docs/go/02-go-scheduler.md",sourceDirName:"go",slug:"/go/go-scheduler",permalink:"/docusaurus/ko/docs/go/go-scheduler",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/go/02-go-scheduler.md",tags:[{label:"go",permalink:"/docusaurus/ko/docs/tags/go"}],version:"current",lastUpdatedAt:1677974400,formattedLastUpdatedAt:"2023\ub144 3\uc6d4 5\uc77c",sidebarPosition:2,frontMatter:{title:"Go Scheduler",description:"Describe goroutine scheduler and state",tags:["go"],keywords:["go","goroutine"],last_update:{date:"2023-03-05T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Goroutine introduction",permalink:"/docusaurus/ko/docs/go/goroutine-introduction"},next:{title:"Goroutine State",permalink:"/docusaurus/ko/docs/go/goroutine-state"}},l={},s=[{value:"Scheduling in goroutine",id:"scheduling-in-goroutine",level:2},{value:"Overview",id:"overview",level:3},{value:"Global Run Queue",id:"global-run-queue",level:3},{value:"OS Thread",id:"os-thread",level:3},{value:"Logical Run Queue",id:"logical-run-queue",level:3}],c={toc:s};function d(e){let{components:t,...u}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"scheduling-in-goroutine"},"Scheduling in goroutine"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go scheduler is a part of the Go runtime. It's known as M:N scheduler."),(0,n.kt)("li",{parentName:"ul"},"Go scheduler runs in user space."),(0,n.kt)("li",{parentName:"ul"},"Go scheduler uses OS threads to schedule goroutines for execution."),(0,n.kt)("li",{parentName:"ul"},"Go runtime creates number of worker OS threads, equal to GOMAXPROCS. ",(0,n.kt)("br",null),"\nGOMAXPROCS : default value is number of processors on machine."),(0,n.kt)("li",{parentName:"ul"},"GO scheduler distrbiutes runnable goroutines over multiple worker OS threads."),(0,n.kt)("li",{parentName:"ul"},"N goroutines could be scheduled on M OS threads that run on at most GOMAXPROCS numbers of processors."),(0,n.kt)("li",{parentName:"ul"},"Time slice ",(0,n.kt)("inlineCode",{parentName:"li"},"10ms")," is set, so when goroutine is running for more than 10ms, Go will try to preempt it. (Asynchronous preemptive scheduling) ",(0,n.kt)("br",null),"\nThis is for protecting specific goroutine hog on the CPU for long time.")),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Go Schduler Overview",src:r(17).Z,width:"2742",height:"1532"})),(0,n.kt)("h3",{id:"global-run-queue"},"Global Run Queue"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Global Run Queue",src:r(7443).Z,width:"2714",height:"1542"})),(0,n.kt)("h3",{id:"os-thread"},"OS Thread"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"OS Thread",src:r(671).Z,width:"2722",height:"1524"})),(0,n.kt)("h3",{id:"logical-run-queue"},"Logical Run Queue"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Logical Run Queue",src:r(3959).Z,width:"2712",height:"1496"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Go scheduler periodically checks each logical run queue of logical processor and reassigns the goroutines as needed to balance the load.")," ",(0,n.kt)("br",null),"\nThis is mechanism of load balancing protecting specific logical processor from being overloaded. ",(0,n.kt)("br",null),"\nIn other world, each logical processor has logical run queue, and which can take other one's goroutines when it's idle."))}d.isMDXComponent=!0},7443:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Global_Run_Queue-e0ea5df1979377e1ccbe426de6bc9d48.png"},671:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Go_OS_Thread-bc596766e23cdb98b6861bd4bd21ba54.png"},17:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Go_Scheduler_Overview-20e60ca569629c232385a5473f24a0ff.png"},3959:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Goroutines_in_local_run_queue-76684b7747490d72e3d3806188296a03.png"}}]);