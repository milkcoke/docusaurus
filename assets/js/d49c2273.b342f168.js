"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,m=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,v=p["".concat(l,".").concat(d)]||p[d]||u[d]||m;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=n.length,i=new Array(m);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<m;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>m,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const m={title:"Decorator Pattern",description:"Understand about decorator pattern",tags:["design-pattern","structure-pattern"],keywords:["design pattern","decorator pattern"],last_update:{date:new Date("2023-01-24T00:00:00.000Z")}},i=void 0,o={unversionedId:"design-pattern/structure-pattern/decorator-pattern",id:"design-pattern/structure-pattern/decorator-pattern",title:"Decorator Pattern",description:"Understand about decorator pattern",source:"@site/docs/design-pattern/02-structure-pattern/04-decorator-pattern.md",sourceDirName:"design-pattern/02-structure-pattern",slug:"/design-pattern/structure-pattern/decorator-pattern",permalink:"/docusaurus/docs/design-pattern/structure-pattern/decorator-pattern",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/design-pattern/02-structure-pattern/04-decorator-pattern.md",tags:[{label:"design-pattern",permalink:"/docusaurus/docs/tags/design-pattern"},{label:"structure-pattern",permalink:"/docusaurus/docs/tags/structure-pattern"}],version:"current",lastUpdatedAt:1674518400,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 24\uc77c",sidebarPosition:4,frontMatter:{title:"Decorator Pattern",description:"Understand about decorator pattern",tags:["design-pattern","structure-pattern"],keywords:["design pattern","decorator pattern"],last_update:{date:"2023-01-24T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Adapter Pattern",permalink:"/docusaurus/docs/design-pattern/structure-pattern/adapter-pattern"},next:{title:"Proxy Pattern",permalink:"/docusaurus/docs/design-pattern/structure-pattern/proxy-pattern"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"Client.java",id:"clientjava",level:4},{value:"CommentService.java",id:"commentservicejava",level:4},{value:"TrimmingCommentService.java",id:"trimmingcommentservicejava",level:4},{value:"ClientCommentTest.java",id:"clientcommenttestjava",level:4},{value:"\ubb38\uc81c\uc810",id:"\ubb38\uc81c\uc810",level:3},{value:"HttpFilterCommentService.java",id:"httpfiltercommentservicejava",level:4},{value:"1. \uc790\uc2dd \ud074\ub798\uc2a4 \ucd94\uac00",id:"1-\uc790\uc2dd-\ud074\ub798\uc2a4-\ucd94\uac00",level:4},{value:"Why to use",id:"why-to-use",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"CommentService.java",id:"commentservicejava-1",level:4},{value:"DefaultCommentService.java",id:"defaultcommentservicejava",level:4},{value:"CommentDecorator.java",id:"commentdecoratorjava",level:4},{value:"HttpFilteringCommentDecorator.java",id:"httpfilteringcommentdecoratorjava",level:4},{value:"TrimmingCommentDecorator.java",id:"trimmingcommentdecoratorjava",level:4},{value:"ClientTest.java",id:"clienttestjava",level:3},{value:"\ucd9c\ub825 \uacb0\uacfc",id:"\ucd9c\ub825-\uacb0\uacfc",level:3},{value:"\ub0b4\ubd80 \ub3d9\uc791 \uc124\uba85 \uc601\uc0c1",id:"\ub0b4\ubd80-\ub3d9\uc791-\uc124\uba85-\uc601\uc0c1",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"SRP \uc704\ubc18 \ucf54\ub4dc",id:"srp-\uc704\ubc18-\ucf54\ub4dc",level:4},{value:"\ud83d\udd17 Reference",id:"-reference",level:2}],s={toc:c};function p(e){let{components:t,...m}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,m,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"\ud83d\udcdd ",(0,r.kt)("strong",{parentName:"p"},"\ub370\ucf54\ub808\uc774\ud130 \ud328\ud134\uc740 \ub3d9\uc801\uc73c\ub85c \ub7f0\ud0c0\uc784\uc5d0 \ubd80\uac00\uae30\ub2a5\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uac8c\ud558\ub294 \ub514\uc790\uc778 \ud328\ud134\uc774\ub2e4.")),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("p",null,"\ud2b9\uc815 \uc0ac\uc6a9\uc790 (Client) \uac00 \ub313\uae00\uc744 \ub2e4\ub294 \uc11c\ube44\uc2a4\uac00 \uc788\ub2e4\uace0 \ud558\uc790. ",(0,r.kt)("br",null),'\n\uc774 \ub54c, \ub313\uae00 \ub05d\uc5d0 \ubd99\uc740 ".." \uac19\uc740 \ubb38\uc790\uc5f4\uc740 \uc790\ub3d9\uc73c\ub85c trim \ucc98\ub9ac\uac00 \ud544\uc694\ud558\ub2e4\ub294 \uc694\uad6c\uc0ac\ud56d\uc774 \uc788\uc5b4\nTrimmingCommentService \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ubc1b\uc544 \uad6c\uc131\ud588\ub2e4.'),(0,r.kt)("h4",{id:"clientjava"},"Client.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Component\n@Getter\npublic class Client {\n    private CommentService commentService;\n\n    @Autowired\n    public Client(CommentService commentService) {\n        this.commentService = commentService;\n    }\n\n    public void writeComment(String comment) {\n        commentService.addComment(comment);\n    }\n}\n")),(0,r.kt)("h4",{id:"commentservicejava"},"CommentService.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class CommentService {\n    private List<String> comments = new ArrayList();\n\n    public void addComment(String comment) {\n        this.comments.add(comment);\n    }\n}\n")),(0,r.kt)("h4",{id:"trimmingcommentservicejava"},"TrimmingCommentService.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class TrimmingCommentService extends CommentService {\n\n    @Override\n    public void addComment(String comment) {\n        super.addComment(getTrimmedComment(comment));\n    }\n\n    // \ubd84\uba85 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc \ubcc0\uacbd \uc5c6\uc774 \uc0c8\ub85c\uc6b4 \uae30\ub2a5 \ud655\uc7a5\uc744 \ub3c4\ubaa8\ud588\uc9c0\ub9cc\n    // Compile time \uc5d0 \uc774\ubbf8 \uc774 \uae30\ub2a5\uc744 \uc644\ubcbd\ud788 fix \ud574\uc57c\ub9cc \ud55c\ub2e4\ub294\uac8c \ub2e8\uc810\uc774\ub2e4.\n    // \uc720\uc5f0\ud558\uc9c0 \uc54a\ub2e4. Runtime \uc2dc\uc5d0 \ubc14\uafd4\uc57c\ud55c\ub2e4\uba74?\n    private String getTrimmedComment(String comment) {\n        return comment.replace("..","");\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud604\uc7ac\uae4c\uc9c0\uc758 \uad6c\ud604 \ub0b4\uc5ed\uc744 \ud074\ub798\uc2a4 \ub2e4\uc774\uc5b4\uadf8\ub7a8\uc73c\ub85c \ud45c\ud604\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4."),"\n",(0,r.kt)("img",{alt:"Comment Service Diagram",src:n(5805).Z,width:"550",height:"477"})),(0,r.kt)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc774 Trimming \ub41c \ub313\uae00\uc744 \uc791\uc131\ud558\ub294 \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744 \uac83\uc774\ub2e4."),(0,r.kt)("h4",{id:"clientcommenttestjava"},"ClientCommentTest.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import m.falcon.designpattern.domain.comment.service.TrimmingCommentService;\nimport org.junit.jupiter.api.DisplayName;\nimport org.junit.jupiter.api.Test;\n\nimport static org.assertj.core.api.Assertions.*;\n\nclass ClientCommentTest {\n\n    @DisplayName("\ub313\uae00 \ub2ec\uae30 .. \uc81c\uac70 \ud14c\uc2a4\ud2b8")\n    @Test\n    void writeTrimCommentTest() {\n        // \uc0dd\uc131\uc790 DI\n        // highlight-start\n        // \ub9cc\uc57d, spam filtering \uc774 \ud544\uc694\ud558\ub2e4\uba74?\n        Client client = new Client(new TrimmingCommentService());\n        // highlight-end\n        client.writeComment("..\uce74\ub974\ub9c8..");\n\n        String trimmedComment = "\uce74\ub974\ub9c8";\n        assertThat(client.getCommentService().getComments().get(0)).isEqualTo(trimmedComment);\n    }\n}\n')),(0,r.kt)("h3",{id:"\ubb38\uc81c\uc810"},"\ubb38\uc81c\uc810"),(0,r.kt)("p",null,'\ub9cc\uc57d "Http" \uac00 \ud3ec\ud568\ub41c \ub313\uae00 \uc791\uc131\uc744 \ubc29\uc9c0\ud558\ub294 \ud544\ud130\ub9c1\uc774 \ud544\uc694\ud558\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c? ',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\uc0c1\uc18d\uc744 \ud1b5\ud574 SpamFilteringCommentService \ub97c \uad6c\ud604\ud558\uba74 \ub420 \uac83\uc774\ub2e4.")),(0,r.kt)("h4",{id:"httpfiltercommentservicejava"},"HttpFilterCommentService.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class HttpFilterCommentService extends CommentService {\n    @Override\n    public void addComment(String comment) {\n        if (isSpamComment(comment)) {\n            return;\n        }\n        super.addComment(comment);\n    }\n\n    private Boolean isSpamComment(String comment) {\n        return comment.contains("http://");\n    }\n}\n')),(0,r.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc0dd\uc131\uc790 \uc8fc\uc785\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \ubcc0\uacbd\ud558\uc5ec \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// highlight-start\nClient client = new Client(new HttpFilterCommentService());\n// highlight-end\nclient.writeComment("http://karma.com");\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ub354 \ub098\uc544\uac00\uc11c, Http \ud544\ud130\ub9c1\uacfc Trimming \uc815\ucc45\uc744 \ub3d9\uc2dc\uc5d0 \uc801\uc6a9\ud558\uace0\uc2f6\ub2e4. ",(0,r.kt)("br",null),"\n\uacbd\uc6b0\uc5d0 \ub530\ub77c\uc11c\ub294 \ub458\uc911 \ud55c \uc815\ucc45\ub9cc \uc801\uc6a9\ud558\uace0 \uc2f6\ub2e4. \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c?")),(0,r.kt)("h4",{id:"1-\uc790\uc2dd-\ud074\ub798\uc2a4-\ucd94\uac00"},"1. \uc790\uc2dd \ud074\ub798\uc2a4 \ucd94\uac00"),(0,r.kt)("p",null,"\uc0c1\uc18d\uacfc \uc0dd\uc131\uc790 \uc8fc\uc785\uc744 \ud1b5\ud574 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \ubc29\ubc95\uc774\ub2e4. ",(0,r.kt)("br",null),"\n\ud074\ub798\uc2a4 \ub2e4\uc774\uc5b4\uadf8\ub7a8\uc744 \ud45c\ud604\ud574\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ud544\uc694\ud55c \uc815\ucc45\uc774 \ub298\uc5b4\ub0a0 \ub54c\ub9c8\ub2e4 \ud074\ub798\uc2a4 \ucd94\uac00\uac00 \ubd88\uac00\ud53c\ud558\ub2e4.\n",(0,r.kt)("img",{alt:"Comments Service Diagrams",src:n(5378).Z,width:"1140",height:"495"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uc790\ubc14\uc5d0\uc11c \uc0c1\uc18d\uc740 \ub2e8\uc77c \uc0c1\uc18d\ub9cc \uac00\ub2a5\ud558\uace0, \ucef4\ud30c\uc77c \ud0c0\uc784\uc5d0 \uc815\ucc45 \uc124\uc815\uc774 \uc644\ub8cc\ub418\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \uc720\uc5f0\uc131\uc774 \ub5a8\uc5b4\uc9c4\ub2e4. ",(0,r.kt)("br",null),"\n\ud83d\udca1 Decorator \ud328\ud134\uc740 \uc774\ub7ec\ud55c \uc0c1\ud669\uc758 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc874\uc7ac\ud55c\ub2e4.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd ",(0,r.kt)("strong",{parentName:"p"},"\ub370\ucf54\ub808\uc774\ud130 \ud328\ud134\uc740 \ub7f0\ud0c0\uc784\uc5d0 \uc815\ucc45\uc744 \ubcc0\uacbd\ud558\uc5ec \ub2e4\ub974\uac8c \ub3d9\uc791\ud558\ub294 \uc720\uc5f0\ud55c \ucf54\ub4dc \uc791\uc131\uc744 \ub3d5\ub294 \ud328\ud134\uc774\ub2e4."))),(0,r.kt)("h2",{id:"why-to-use"},"Why to use"),(0,r.kt)("p",null,"\ub7f0\ud0c0\uc784\uc5d0 \ub3d9\uc801\uc73c\ub85c \ub2e4\ub978 \uc11c\ube44\uc2a4 (\uae30\ub2a5)\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uac8c \ud558\uae30\uc704\ud574."),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"\ud2b9\uc815 Component \ub97c \ud488\ub294 Decorator \ub97c Interface \ub610\ub294 abstract \ud074\ub798\uc2a4\ub85c \ub9cc\ub4e4\uace0 ",(0,r.kt)("br",null),"\n\uad6c\uccb4 Decorator \ud074\ub798\uc2a4\ub97c \ud558\ub098\uc529 \ucd94\uac00\ud55c\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"CommentService")," \uac00 Component \ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Decorator Class diagram",src:n(9809).Z,width:"1786",height:"923"})),(0,r.kt)("h4",{id:"commentservicejava-1"},"CommentService.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface CommentService {\n    void addComment(String comment);\n    void printAllComments();\n}\n")),(0,r.kt)("h4",{id:"defaultcommentservicejava"},"DefaultCommentService.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Component\n@Getter\npublic class DefaultCommentService implements CommentService {\n    private List<String> comments = new ArrayList();\n\n    @Override\n    public void addComment(String comment) {\n        this.comments.add(comment);\n    }\n\n    @Override\n    public void printAllComments() {\n        for (var comment : comments) {\n            System.out.println(comment);\n        }\n    }\n}\n\n")),(0,r.kt)("h4",{id:"commentdecoratorjava"},"CommentDecorator.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Component\n@RequiredArgsConstructor\npublic abstract class CommentDecorator implements CommentService {\n    // \uad6c\ud604\uccb4\uac00 \uc544\ub2cc Interface(\uc5ed\ud560) \uc5d0\ub9cc \uc758\uc874 => DIP \uc6d0\uce59 \uc900\uc218\n    private final CommentService commentService;\n\n    @Override\n    public void addComment(String comment) {\n        this.commentService.addComment(comment);\n    }\n\n    @Override\n    public void printAllComments() {\n        this.commentService.printAllComments();\n    }\n}\n")),(0,r.kt)("h4",{id:"httpfilteringcommentdecoratorjava"},"HttpFilteringCommentDecorator.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class HttpFilteringCommentDecorator extends CommentDecorator {\n    public HttpFilteringCommentDecorator(CommentService commentService) {\n        super(commentService);\n    }\n    @Override\n    public void addComment(String comment) {\n        if (isSpamComment(comment)) {\n            return;\n        }\n        super.addComment(comment);\n    }\n\n    private Boolean isSpamComment(String comment) {\n        return comment.contains("http://");\n    }\n}\n')),(0,r.kt)("h4",{id:"trimmingcommentdecoratorjava"},"TrimmingCommentDecorator.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class TrimmingCommentDecorator extends CommentDecorator {\n    public TrimmingCommentDecorator(CommentService commentService) {\n        super(commentService);\n    }\n\n    @Override\n    public void addComment(String comment) {\n        super.addComment(trimComment(comment));\n    }\n\n    private String trimComment(String comment) {\n        return comment.replace("..", "");\n    }\n}\n')),(0,r.kt)("h3",{id:"clienttestjava"},"ClientTest.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class ClientCommentTest {\n    private CommentService commentService = new DefaultCommentService();\n    private static boolean enabledHttpFilter = true;\n    private static boolean enabledTrimFilter = true;\n\n    @DisplayName("Http \ubc0f Trim \ud544\ud130 \ub3d9\uc2dc \uc801\uc6a9")\n    @Test\n    void dynamicCommentPolicyApplyTest() {\n        // \ud83d\udca1Decorator \ub97c \ud1b5\ud55c \uc0dd\uc131\uc790 \uc8fc\uc785\uc73c\ub85c Http, Trimming \ub3d9\uc2dc \ud544\ud130 \uc801\uc6a9\n        if (enabledHttpFilter) {\n            commentService = new HttpFilteringCommentDecorator(commentService);\n        }\n        if (enabledTrimFilter) {\n            commentService = new TrimmingCommentDecorator(commentService);\n        }\n\n        Client client = new Client(commentService);\n        client.writeComment("\uce74\ub974\ub9c8..");\n        client.writeComment("http://karma.com");\n        client.writeComment("https://karma.com");\n        client.getCommentService().printAllComments();\n    }\n}\n')),(0,r.kt)("h3",{id:"\ucd9c\ub825-\uacb0\uacfc"},"\ucd9c\ub825 \uacb0\uacfc"),(0,r.kt)("p",null,"Http, Trimming \ud544\ud130 \ubaa8\ub450 \uc801\uc6a9\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\uce74\ub974\ub9c8\nhttps://karma.com\n")),(0,r.kt)("p",null,"\uc774\ucc98\ub7fc \ub7f0\ud0c0\uc784 \ub0b4\uc5d0 \ub3d9\uc801\uc73c\ub85c \ud544\ud130\ub9c1 \uc815\ucc45\uc744 \uc801\uc6a9\ud560\uc218\ub3c4, \uc801\uc6a9\ud558\uc9c0 \uc54a\uc744 \uc218\ub3c4 \uc788\ub2e4."),(0,r.kt)("h2",{id:"\ub0b4\ubd80-\ub3d9\uc791-\uc124\uba85-\uc601\uc0c1"},"\ub0b4\ubd80 \ub3d9\uc791 \uc124\uba85 \uc601\uc0c1"),(0,r.kt)("p",null,"\uc5b4\ub5bb\uac8c \ud558\ub098\uc758 \uac1d\uccb4\ub85c\ubd80\ud130 \ud55c \ubc88\uc758 addComment \uba54\uc18c\ub4dc \ud638\ucd9c\ub85c \uc5ec\ub7ec \uc815\ucc45\uc744 \ubaa8\ub450 \uc801\uc6a9\ud560 \uc218 \uc788\ub294 \uac83\uc77c\uae4c? ",(0,r.kt)("br",null),"\n\uc601\uc0c1\uacfc \ud568\uaed8 \ud30c\ud5e4\uccd0\ubcf4\uc790"),(0,r.kt)("iframe",{width:"900",height:"600",src:"https://www.youtube.com/embed/0XQNSO_0kSc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,r.kt)("h3",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \ud074\ub798\uc2a4 \uc0dd\uc131 \uc5c6\uc774 \uae30\uc874 \uae30\ub2a5 \uc870\ud569 ",(0,r.kt)("br",null),"\nex) HttpFilterDecorator + TrimmingFilterDecorator \uc870\ud569 ",(0,r.kt)("br",null),"\n\uc870\ud569\uc774 \ubd88\uac00\ub2a5\ud558\ub2e4\uba74 \ud55c \ud074\ub798\uc2a4 \ub0b4\uc5d0 2\uac00\uc9c0 \uc774\uc0c1\uc758 \ud544\ud130\ub97c \uac19\uc774 \uac78\uc5b4\uc57c\ud568."),(0,r.kt)("li",{parentName:"ul"},"\ub7f0\ud0c0\uc784\uc5d0 \ub3d9\uc801\uc73c\ub85c \uae30\ub2a5 \uad50\uccb4")),(0,r.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub370\ucf54\ub808\uc774\ud130 \uc870\ud569 \ucf54\ub4dc \ubcf5\uc7a1\uc131 \uc99d\uac00",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\ub370\ucf54\ub808\uc774\ud130 \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744 \ub54c \uc11c\ube0c \ud074\ub798\uc2a4 \uc218\uac00 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mi",{parentName:"msup"},"N")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(2^N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0913em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8413em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"N")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," \uc73c\ub85c \ub298\uc5b4\ub0a0 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub2e8\uc810\uc774\ub77c \ubcf4\uae30\uc5d0 \ubbfc\ub9dd\ud568.")))),(0,r.kt)("h4",{id:"srp-\uc704\ubc18-\ucf54\ub4dc"},"SRP \uc704\ubc18 \ucf54\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if (enabledHttpFilter && enabledTrimFilter) {\n    // \uc815\uc801\uc73c\ub85c \ubaa8\ub4e0 \uc870\ud569\uc5d0 \ub300\ud55c \uc0c1\uc18d \ud074\ub798\uc2a4\uac00 \uc874\uc7ac\ud574\uc57c\ud568 => \uc11c\ube0c \ud074\ub798\uc2a4 \uc218 \uae09\uaca9\ud558\uac8c \uc99d\uac00 \uc704\ud5d8\n    // \uc5ec\ub7ec \ucc45\uc784\uc744 \uac16\ub294 \uc11c\ube0c \ud074\ub798\uc2a4 \uc0dd\uc131\uc2dc Single Responsibility Principal (SRP) \uc704\ubc30\n    commentService = new HttpFilterAndTrimmingComment(); // \ubd84\ub9ac\ub420 \uc218 \uc788\ub294 Filter \ub85c\uc9c1 2\uac1c\ub97c \ud558\ub098\uc758 \ud074\ub798\uc2a4\uac00 \ubb36\uc74c \ud615\ud0dc\ub85c \uac00\uc9c0\uace0\uc788\ub2e4.\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-reference"},"\ud83d\udd17 Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4/dashboard"},"GoF \ub514\uc790\uc778 \ud328\ud134 - \ubc31\uae30\uc120")))}p.isMDXComponent=!0},5805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Comment_service_diagram-429dc46c75ebf585a3bbb38707707ff8.png"},5378:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Comment_service_diagrams-5fa9c7fbcfa97c5e51bdf29fd73a6638.png"},9809:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/decorator_diagram-f602a2de03edde866fb1dff439fe37fe.png"}}]);