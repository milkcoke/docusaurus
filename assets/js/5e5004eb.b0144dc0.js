"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8821],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),c=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(o),p=r,m=d["".concat(a,".").concat(p)]||d[p]||h[p]||l;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,s=new Array(l);s[0]=p;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2280:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const l={title:"Context Switching",description:"Context switching in go when system call occurs.",tags:["go"],keywords:["go","goroutine"],last_update:{date:new Date("2023-03-05T00:00:00.000Z")}},s=void 0,i={unversionedId:"go/context-switching",id:"go/context-switching",title:"Context Switching",description:"Context switching in go when system call occurs.",source:"@site/docs/go/04-context-switching.md",sourceDirName:"go",slug:"/go/context-switching",permalink:"/docusaurus/docs/go/context-switching",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/go/04-context-switching.md",tags:[{label:"go",permalink:"/docusaurus/docs/tags/go"}],version:"current",lastUpdatedAt:1677974400,formattedLastUpdatedAt:"Mar 5, 2023",sidebarPosition:4,frontMatter:{title:"Context Switching",description:"Context switching in go when system call occurs.",tags:["go"],keywords:["go","goroutine"],last_update:{date:"2023-03-05T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Goroutine State",permalink:"/docusaurus/docs/go/goroutine-state"}},a={},c=[{value:"Synchronous system call",id:"synchronous-system-call",level:2},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Asynchronous system call",id:"asynchronous-system-call",level:2},{value:"Problem",id:"problem-1",level:3},{value:"Solution",id:"solution-1",level:3}],u={toc:c};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"synchronous-system-call"},"Synchronous system call"),(0,r.kt)("h3",{id:"problem"},"Problem"),(0,r.kt)("p",null,"Synchronous system call blocks the thread until I/O is to be completed. ",(0,r.kt)("br",null),"\nWhen synchronous system call occurs, OS thread is to be waiting state, and enqueue into waiting queue. This is not occupied by CPU. ",(0,r.kt)("br",null),"\nThis means synchronous system call reduces parallelism.\nmultiple goroutines can't be executed parallely since OS thread is blocked and waiting which has multiple logical processor including goroutine,"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"How to handle this problem in go scheduler?")),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Go scheduler gets another OS thread from thread pool or creates new one. ",(0,r.kt)("br",null),"\nProcess is shown below"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Synchronous context switching in Go",src:o(3801).Z,width:"1920",height:"1080"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Synchronous system call occurs. (e.g. File Read)"),(0,r.kt)("li",{parentName:"ol"},"OS thread is blocked and transforming state from running to waiting. ",(0,r.kt)("br",null),"\nWhich is located into waiting queue."),(0,r.kt)("li",{parentName:"ol"},"Go scheduler gets another OS thread from thread pool cache or creates new one."),(0,r.kt)("li",{parentName:"ol"},"And move the logical processor to new one except goroutine which makes I/O task."),(0,r.kt)("li",{parentName:"ol"},"With new OS thread, the other goroutines are activated by go scheduler."),(0,r.kt)("li",{parentName:"ol"},"In one side, IO completion, the I/O goroutine is returned to new OS thread."),(0,r.kt)("li",{parentName:"ol"},"Old OS thread is returned to thread pool cache.")),(0,r.kt)("h2",{id:"asynchronous-system-call"},"Asynchronous system call"),(0,r.kt)("h3",{id:"problem-1"},"Problem"),(0,r.kt)("p",null,"Asynchronous system call occurs when file descriptor (",(0,r.kt)("strong",{parentName:"p"},"FD")," as acronym) is used on network IO with non-blocking mode. ",(0,r.kt)("br",null),"\nAsync syscall doesn't block the OS thread but occurs error when the socket buffer is empty trying Read or buffer full trying Write. ",(0,r.kt)("br",null),"\nIn async mode, it should provide retrying mechanism network IO after error occurs."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"How does go handle this problem?")),(0,r.kt)("h3",{id:"solution-1"},"Solution"),(0,r.kt)("p",null,"Go uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang/go/blob/master/src/runtime/netpoll.go"},"NetPoller")," for handling asynchronous system call. ",(0,r.kt)("br",null),"\nThe NetPoller uses interface provided by OS (epoll kqueue, IOPC) to do polling status of FD."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Asynchronous system call context switching in go",src:o(9049).Z,width:"1920",height:"1080"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Asynchronous system call occurs in goroutine"),(0,r.kt)("li",{parentName:"ol"},"Go scheduler move the goroutine to NetPoller thread out of OS thread which is created."),(0,r.kt)("li",{parentName:"ol"},"NetPoller do polling the status of FD"),(0,r.kt)("li",{parentName:"ol"},"If IO operation is ready, NetPoller could get notification from OS"),(0,r.kt)("li",{parentName:"ol"},"NetPoller will notify to the goroutine to retry I/O"),(0,r.kt)("li",{parentName:"ol"},"The goroutine would return to origin logical run queue when I/O operation completes.")))}d.isMDXComponent=!0},9049:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Asynchronous_contexet_swiching_in_go-b60eab965e8a291057d8331854f08dde.gif"},3801:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Context_Switching_Synchronous-33c1e300829347a1f7bc681c17ca35bb.gif"}}]);