"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7294),r=n(6010),l=n(833),o=n(5281),i=n(9460),c=n(9058),s=n(804),m=n(7462),u=n(5999),d=n(2244);function f(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function g(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:r,date:o,tags:c,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(l.d,{title:n,description:r,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var v=n(9407);function p(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:l}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:u}=r,{hide_table_of_contents:d,toc_min_heading_level:g,toc_max_heading_level:p}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&l.length>0?a.createElement(v.Z,{toc:l,minHeadingLevel:g,maxHeadingLevel:p}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(f,{nextItem:o,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(g,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),o=n(3743);const i="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},r.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),r=n(7294),l=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const f=r.memo(d);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...g}=e;const v=(0,l.L)(),p=m??v.tableOfContents.minHeadingLevel,h=d??v.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:h});return u((0,r.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:h}}),[c,s,p,h])),r.createElement(f,(0,a.Z)({toc:b,className:n,linkClassName:c},g))}},804:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(390),l=n(2949);function o(){const e=(0,a.useRef)(null),t=(0,a.useRef)(null),{colorMode:n}=(0,l.I)(),r="dark"===n?"github-dark":"github-light";return(0,a.useEffect)((()=>{(()=>{const n=document.createElement("script");n.src="https://utteranc.es/client.js",n.setAttribute("repo","milkcoke/blog-comments"),n.setAttribute("issue-term","title"),n.setAttribute("label","comment"),n.setAttribute("theme",r),n.crossOrigin="anonymous",n.async=!0,n.onload=()=>{t.current=document.querySelector(".utterances-frame")},e.current.appendChild(n)})()}),[]),(0,a.useEffect)((()=>{if(!t.current)return;const e={type:"set-theme",theme:r};t.current.contentWindow.postMessage(e,"https://utteranc.es")}),[r]),a.createElement("div",{ref:e})}function i(e){return a.createElement(a.Fragment,null,a.createElement(r.Z,e),a.createElement(o,null))}}}]);