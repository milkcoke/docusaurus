"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3089],{46:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(7294),r=n(6010),l=n(2263),i=n(833),s=n(5281),o=n(9058),c=n(9703),u=n(197),m=n(9985);function g(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,l.Z)(),{blogDescription:r,blogTitle:s,permalink:o}=t,c="/"===o?n:s;return a.createElement(a.Fragment,null,a.createElement(i.d,{title:c,description:r}),a.createElement(u.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:n,sidebar:r}=e;return a.createElement(o.Z,{sidebar:r},a.createElement(m.Z,{items:n}),a.createElement(c.Z,{metadata:t}))}function d(e){return a.createElement(i.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},a.createElement(g,e),a.createElement(p,e))}},9703:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(5999),l=n(2244);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(l.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&a.createElement(l.Z,{permalink:i,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(9460),l=n(804);function i(e){let{items:t,component:n=l.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(r.n,{key:t.metadata.permalink,content:t},a.createElement(n,null,a.createElement(t,null)))})))}},804:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(390),l=n(2949);function i(){const e=(0,a.useRef)(null),t=(0,a.useRef)(null),{colorMode:n}=(0,l.I)(),r="dark"===n?"github-dark":"github-light";return(0,a.useEffect)((()=>{(()=>{const n=document.createElement("script");n.src="https://utteranc.es/client.js",n.setAttribute("repo","milkcoke/blog-comments"),n.setAttribute("issue-term","title"),n.setAttribute("label","comment"),n.setAttribute("theme",r),n.crossOrigin="anonymous",n.async=!0,n.onload=()=>{t.current=document.querySelector(".utterances-frame")},e.current.appendChild(n)})()}),[]),(0,a.useEffect)((()=>{if(!t.current)return;const e={type:"set-theme",theme:r};t.current.contentWindow.postMessage(e,"https://utteranc.es")}),[r]),a.createElement("div",{ref:e})}function s(e){return a.createElement(a.Fragment,null,a.createElement(r.Z,e),a.createElement(i,null))}}}]);