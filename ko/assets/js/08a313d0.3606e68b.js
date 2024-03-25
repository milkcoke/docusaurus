"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[273],{2054:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(7294),l=o(9521);const n=()=>a.createElement(i,null,a.createElement(d,{target:"_blank",href:"https://github.com/milkcoke/toolbox-gui/releases/download/v1.0.0/Toolbox-Windows-x64.exe",className:"download"},a.createElement("svg",{width:"1000px",height:"1000px",viewBox:"0 0 512 499.81",version:"1.1",id:"windows"},a.createElement("path",{d:"M0,67.048l207.238-27.137v197.803H0V67.048z M207.238,459.904L0,432.762V262.096h207.238V459.904z M512,0v237.714H231.619  v-201L512,0z M512,499.81l-280.381-36.714v-201H512V499.81z"})),a.createElement("span",{style:{fontWeight:"bold"}},"Windows"),a.createElement("span",null,"(x64)")),a.createElement(d,{target:"_blank",href:"https://github.com/milkcoke/toolbox-gui/releases/download/v1.0.0/Toolbox-osx-arm64.dmg",className:"download"},a.createElement("svg",{width:"1100px",height:"1100px",viewBox:"0 0 40 48",version:"1.1",id:"macOS"},a.createElement("path",{d:"M33.3732057,25.4546901 C33.3112919,19.3876023 38.4333971,16.4779415 38.6622967,16.3333801 C35.7842105,12.2154854 31.3010526,11.6513684 29.7033493,11.586152 C25.8879426,11.2084211 22.2585646,13.7825497 20.3221053,13.7825497 C18.390622,13.7825497 15.4025837,11.6420117 12.2382775,11.6982456 C8.07961722,11.7586901 4.24507177,14.0625965 2.10373206,17.7043275 C-2.21712919,25.0352281 0.99722488,35.8957661 5.20851675,41.8413099 C7.26631579,44.751345 9.72009569,48.0203041 12.9418182,47.9035322 C16.0443062,47.7824561 17.217512,45.9405848 20.9685167,45.9405848 C24.7195215,45.9405848 25.7736842,47.9035322 29.0571292,47.8432749 C32.3955981,47.7826433 34.5108134,44.8772865 36.5543541,41.9580819 C38.917512,38.5818012 39.8905263,35.3130292 39.9478469,35.1451696 C39.8736842,35.1121404 33.4377033,32.7013801 33.3732057,25.4546901 L33.3732057,25.4546901 Z"}),a.createElement("path",{d:"M27.2041148,7.65015205 C28.9139713,5.6217076 30.068134,2.80748538 29.7533014,0 C27.2902392,0.0980584795 24.3045933,1.60421053 22.537512,3.62807018 C20.9517703,5.4234386 19.5639234,8.28893567 19.9357895,11.0402807 C22.6854545,11.250152 25.4922488,9.6740117 27.2041148,7.65015205 L27.2041148,7.65015205 Z"})),a.createElement("span",{style:{fontWeight:"bold"}},"macOS"),a.createElement("span",null,"(arm64)"))),s=l.F4`
  to {
    transform: translateY(0px) rotate(50deg);
  }
`,r=l.F4`
  to {
    transform: translateY(0px) rotate(-50deg);
  }
`,i=l.ZP.div`
  //background: #d6dce4;
  text-align: center;
  padding: 2em 0;
  //font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
`,d=l.ZP.a`
  /* text-decoration: none; */
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  overflow: hidden;
  border-radius: 5px;
  box-sizing: border-box;
  background: var(--ifm-color-primary);
  border: 1px solid var(--ifm-color-primary-darkest);
  color: white;
  padding: 26px 0 26px 28px;
  width: 300px;
  display: inline-block;
  position: relative;
  transition: all 500ms ease;
  margin-right: 20px;
  span {
    display: block;
    position: relative;
    z-index: 1;
    transform: translate(0, 0);
    &:after,
    &:before {
      content: '';
      width: 1px;
      height: 16px;
      background: var(--ifm-color-primary);
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 100%;
      transition: all 10ms ease-out;
      transform-origin: center bottom;
      transform: translateY(0) rotate(0deg);
      animation: (0);
    }
  }
  svg {
    z-index: 0;
    fill: rgba(255, 255, 255, 1);
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(0deg) scale(0.04857);
    transition: all 400ms ease-out;
  }
  #linux {
    transform: translate(-50%, -50%) rotate(0deg) scale(0.05857);
  }
  &:hover {
    padding: 26px 0;
    color: var(--ifm-color-primary);
    svg {
      left: 50%;
      transform: translate(-50%, -50%) rotate(60deg) scale(1);
    }
    svg#macOS {
      transform: translate(-50%, -0%) rotate(60deg) scale(2);
    }
    svg#windows {
      transform: translate(-50%, -10%) rotate(60deg) scale(1);
    }
    svg#linux {
      transform: translate(-120%, -125%) rotate(60deg) scale(6);
    }
    span {
      transform: translate(0, -10px) scale(1.1);
      transition: transform 400ms ease-out 400ms;
      &:after,
      &:before {
        opacity: 1;
        transition: all 400ms ease-out 400ms, transform 300ms ease-in 100ms;
      }
      &:after {
        transform: translateY(7px) rotate(50deg);
        animation: ${s} 800ms linear alternate infinite;
      }
      &:before {
        transform: translateY(7px) rotate(-50deg);
        animation: ${r} 800ms linear alternate infinite;
      }
    }
  }
`},8297:(e,t,o)=>{o(7243).Z.init(3547539,6)},6674:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=o(7462),l=(o(7294),o(3905)),n=(o(8297),o(2054));const s={slug:"toolbox-dev/releases/v1.0.0",title:"Toolbox Dev v1.0.0",description:"Toolbox Dev is desktop app for developers. Welcome Release Toolbox Dev v1.0.0!",authors:["m-falcon"],tags:["toolbox-dev"],keywords:["toolbox-dev","toolbox"]},r=void 0,i={permalink:"/docusaurus/ko/toolbox-dev/releases/v1.0.0",editUrl:"https://milkcoke.github.io/docusaurus/blog/blog/toolbox-dev/2023-05-28-toolbox-release1.0.0.md",source:"@site/blog/toolbox-dev/2023-05-28-toolbox-release1.0.0.md",title:"Toolbox Dev v1.0.0",description:"Toolbox Dev is desktop app for developers. Welcome Release Toolbox Dev v1.0.0!",date:"2023-05-28T00:00:00.000Z",formattedDate:"2023\ub144 5\uc6d4 28\uc77c",tags:[{label:"toolbox-dev",permalink:"/docusaurus/ko/tags/toolbox-dev"}],readingTime:.65,hasTruncateMarker:!1,authors:[{name:"Milkcoke",title:"Backend engineer @ Nexon",url:"https://www.linkedin.com/in/%EC%8A%B9%ED%9B%88-%EB%AC%B8-750789197/",email:"mbh023@gmail.com",imageURL:"https://milkcoke.github.io/docusaurus/img/m_falcon_logo.png",key:"m-falcon"}],frontMatter:{slug:"toolbox-dev/releases/v1.0.0",title:"Toolbox Dev v1.0.0",description:"Toolbox Dev is desktop app for developers. Welcome Release Toolbox Dev v1.0.0!",authors:["m-falcon"],tags:["toolbox-dev"],keywords:["toolbox-dev","toolbox"]},prevItem:{title:"Toolbox Dev v1.1.0",permalink:"/docusaurus/ko/toolbox-dev/releases/v1.1.0"},nextItem:{title:"Introduction",permalink:"/docusaurus/ko/toolbox-dev/introduction"}},d={authorsImageUrls:[void 0]},m=[{value:"What&#39;s Toolbox Dev?",id:"whats-toolbox-dev",level:2},{value:"Install now!",id:"install-now",level:2},{value:"Demo",id:"demo",level:2},{value:"When &amp; Where to use?",id:"when--where-to-use",level:2}],p={toc:m};function c(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"whats-toolbox-dev"},"What's Toolbox Dev?"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Just 5 minutes, get ready for installer tool.")))),(0,l.kt)("p",null,"Toolbox Dev can simplify the process of setting up a development environment by clicking the installation."),(0,l.kt)("h2",{id:"install-now"},"Install now!"),(0,l.kt)(n.Z,{mdxType:"ImageButton"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Please wait Linux, MacOS x64(Intel Mac) version."))),(0,l.kt)("h2",{id:"demo"},"Demo"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Dev Toolbox demo",src:o(6970).Z,width:"1026",height:"1156"})),(0,l.kt)("h2",{id:"when--where-to-use"},"When & Where to use?"),(0,l.kt)("p",null,"Dev-toolbox helps you set up installers for example, as shown below."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PC room"),(0,l.kt)("li",{parentName:"ul"},"Classroom of University, college, academy"),(0,l.kt)("li",{parentName:"ul"},"On the new desktop"),(0,l.kt)("li",{parentName:"ul"},"After formatting the disk drive")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"In addition, it can be used in many spaces where the file system is initialized. ",(0,l.kt)("br",null),"\nDon't visit the website! Just use this and remove the need to find files specific to your operating system and architecture!")))}c.isMDXComponent=!0},6970:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/v1.0.0-b7fced45334146601e6ed4d868500df9.gif"}}]);