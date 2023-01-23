"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Factory Method Pattern",description:"Understand about factory method pattern",tags:["design-pattern"],last_update:{date:new Date("2023-01-24T00:00:00.000Z")}},l=void 0,o={unversionedId:"design-pattern/create-pattern/factory-method-pattern",id:"design-pattern/create-pattern/factory-method-pattern",title:"Factory Method Pattern",description:"Understand about factory method pattern",source:"@site/docs/design-pattern/create-pattern/02-factory-method-pattern.md",sourceDirName:"design-pattern/create-pattern",slug:"/design-pattern/create-pattern/factory-method-pattern",permalink:"/docusaurus/docs/design-pattern/create-pattern/factory-method-pattern",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/design-pattern/create-pattern/02-factory-method-pattern.md",tags:[{label:"design-pattern",permalink:"/docusaurus/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1674518400,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 24\uc77c",sidebarPosition:2,frontMatter:{title:"Factory Method Pattern",description:"Understand about factory method pattern",tags:["design-pattern"],last_update:{date:"2023-01-24T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"Design-Pattern",permalink:"/docusaurus/docs/category/design-pattern"},next:{title:"Builder Pattern",permalink:"/docusaurus/docs/design-pattern/create-pattern/builder-pattern"}},p={},c=[{value:"Why to use",id:"why-to-use",level:2},{value:"Example",id:"example",level:3},{value:"Client.java",id:"clientjava",level:4},{value:"Ship.java",id:"shipjava",level:4},{value:"ShipFactory.java",id:"shipfactoryjava",level:3},{value:"When to use",id:"when-to-use",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Ship.java",id:"shipjava-1",level:4},{value:"WhiteShip.java",id:"whiteshipjava",level:4},{value:"BlackShip.java",id:"blackshipjava",level:4},{value:"ShipFactory.java",id:"shipfactoryjava-1",level:4},{value:"WhiteShipFactory.java",id:"whiteshipfactoryjava",level:4},{value:"BlackShipFactory.java",id:"blackshipfactoryjava",level:4},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"default \ud0a4\uc6cc\ub4dc",id:"default-\ud0a4\uc6cc\ub4dc",level:4},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"\ud83d\udd17 Reference",id:"-reference",level:2}],s={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-to-use"},"Why to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 ",(0,r.kt)("strong",{parentName:"li"},"\ud2b9\uc815 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ubc29\ubc95\uc744 \ubaa8\ub978 \uccb4\ub85c")," \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c\ud558\uace0 OCP \ub97c \uc9c0\ud0a4\uba70 \ud074\ub798\uc2a4 \uc885\ub958\ub97c \uc27d\uac8c \ud655\uc7a5\ud560 \uc218 \uc788\uac8c \ud558\uae30\uc704\ud568.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ship and ShipFactory relation",src:n(5175).Z,width:"920",height:"512"})),(0,r.kt)("h4",{id:"clientjava"},"Client.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Getter\npublic class Client {\n    private String name;\n    private String email;\n    public Client(String name, String email) {\n        this.name = name;\n        this.email = email;\n    }\n}\n")),(0,r.kt)("h4",{id:"shipjava"},"Ship.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Getter\npublic class Ship {\n    private String name;\n    private String color;\n    private String logo;\n\n    public Ship(String name) {\n        this.name = name;\n    }\n\n    public Ship(String name, String color, String logo) {\n        this.name = name;\n        this.color = color;\n        this.logo = logo;\n    }\n}\n")),(0,r.kt)("h3",{id:"shipfactoryjava"},"ShipFactory.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ShipFactory {\n\n    public static Ship orderShip(Client client, String shipName) {\n        if (client.getName() == null) {\n            throw new MissingFormatArgumentException("\uc8fc\ubb38 \uace0\uac1d\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694");\n        } else if (client.getEmail() == null) {\n            throw new MissingFormatArgumentException("\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694");\n        }\n\n        // highlight-start\n        // \ud83d\udca1 Ship \uc758 \uc885\ub958\ub098 \uc18d\uc131\uc774 \ubcc0\uacbd\ub41c\ub2e4\uba74?\n        // \uc544\ub798 \ucf54\ub4dc\uac00 \ubcc0\uacbd\ub420 \uc218 \ubc16\uc5d0 \uc5c6\ub2e4.\n        // \uc774\ub294 Open-Closed Principal (OCP) \uc5d0 \uc704\ubc30\ub41c\ub2e4.\n        // \ud655\uc7a5\uc5d0 \uc5f4\ub824\uc788\uace0, \ubcc0\uacbd\uc5d0 \ub2eb\ud600\uc788\uc5b4\uc57c\ud558\ub294\ub370\n        // \ud655\uc7a5\uacfc \ubcc0\uacbd \ubaa8\ub450 \uc5f4\ub824\uc788\ub2e4.\n        if (shipName == "white-ship") {\n            // ~~\n        } else if (shipName == "black-ship") {\n\n        } else {\n            throw new IllegalArgumentException("\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ubc30 \uc774\ub984\uc785\ub2c8\ub2e4.");\n        }\n        // highlight-end\n        return new Ship(shipName);\n    }\n}\n')),(0,r.kt)("p",null,"\uc704\uc758 \ucf54\ub4dc\ub294 OCP \uc5d0 \uc704\ubc18\ud55c\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud329\ud1a0\ub9ac \uba54\uc18c\ub4dc \ud328\ud134\uc740 \ud074\ub798\uc2a4 \ubcc0\uacbd\uc5d0 \ub3c5\ub9bd\uc801\uc778 \ud074\ub798\uc2a4 \uc0dd\uc131\uc744 \uc704\ud574 \ud544\uc694\ud558\ub2e4. ",(0,r.kt)("br",null),"\n\ub2e4\uc591\ud55c \uad6c\ud604\uccb4\uac00 \uc874\uc7ac\ud558\uace0, \uadf8\uc911\uc5d0 \ud2b9\uc815 \uad6c\ud604\uccb4\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub294 \ub2e4\uc591\ud55c \ud329\ud1a0\ub9ac\ub97c \uc81c\uacf5\ud558\ub294 \ud328\ud134 ",(0,r.kt)("br",null),"\n\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"p"},"\ud329\ud1a0\ub9ac \ud328\ud134\uc740 \uc704 \uc608\uc81c\uc5d0\uc11c ShipFactory \ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud568\uc73c\ub85c\uc368 \ub2e4\uc591\ud55c Ship \uc744 \ucee4\ubc84\ud560 \uc218 \uc788\uac8c\ud55c\ub2e4."))),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ud2b9\uc815 \ud074\ub798\uc2a4\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\uc2dd\uc744 OCP \uc6d0\uce59\uc744 \uc9c0\ud0a4\uba70 \ubcc0\ud654\uc5d0 \ub3c5\ub9bd\uc801\uc73c\ub85c \ud655\uc7a5\ud558\uace0 \uc2f6\uc744 \ub54c")),(0,r.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ud074\ub798\uc2a4\uc758 \uc0c1\ud0dc \uad00\ub9ac\ub97c ",(0,r.kt)("inlineCode",{parentName:"li"},"static")," \ud0a4\uc6cc\ub4dc \uc5c6\uc774 \ud558\uace0 \uc2f6\uc744 \ub54c")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Factory method pattern diagram",src:n(4317).Z,width:"803",height:"264"})),(0,r.kt)("p",null,"Factory \ub97c Interface \ubc0f \uad6c\ud604\uccb4\n\ucd94\uc0c1 \ud074\ub798\uc2a4 - \ud074\ub798\uc2a4 \uac04 \uacc4\uce35 \uad6c\uc870\ub97c \uac16\uac8c \ud558\ub294\uac8c \uc77c\ubc18\uc801"),(0,r.kt)("h4",{id:"shipjava-1"},"Ship.java"),(0,r.kt)("p",null,"\uc5ec\uae30\uc11c\ub294 Interface \ub300\uc2e0 Abstract class \ub97c \uc0ac\uc6a9\ud588\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Getter\nabstract class Ship {\n    private String name;\n    private String color;\n    private String logo;\n\n    protected Ship(String name) {\n        this.name = name;\n    }\n\n    protected Ship(String name, String color, String logo) {\n        this.name = name;\n        this.color = color;\n        this.logo = logo;\n    }\n\n    void changeShipInfo(String name, String color, String logo) {\n        this.name = name;\n        this.color = color;\n        this.logo = logo;\n    }\n}\n")),(0,r.kt)("h4",{id:"whiteshipjava"},"WhiteShip.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class WhiteShip extends Ship {\n    protected WhiteShip(String name, String color, String logo) {\n        super(name, color, logo);\n    }\n}\n")),(0,r.kt)("h4",{id:"blackshipjava"},"BlackShip.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class BlackShip extends Ship {\n    protected BlackShip(String name, String color, String logo) {\n        super(name, color, logo);\n    }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"WhiteShip, BlackShip \ub4f1 \uae30\uc874 \ucf54\ub4dc \ubcc0\uacbd\uc5d0 \ubb34\uad00\ud558\uac8c ",(0,r.kt)("br",null),"\n\ud074\ub798\uc2a4\ub97c \ud655\uc7a5\uc2dc\ud0ac \uc218 \uc788\ub2e4. ",(0,r.kt)("br",null),"\n\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"\uc774 \ub54c, \ud074\ub798\uc2a4 \ud655\uc7a5\uc2dc\ub9c8\ub2e4 \uac01\uac01 Factory \ub97c \uad6c\uc131\ud574\uc57c\ud55c\ub2e4."))),(0,r.kt)("h4",{id:"shipfactoryjava-1"},"ShipFactory.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public interface ShipFactory {\n\n    default Ship orderShip(Client client, String orderShipName) {\n        validateClient(client);\n        validateShipName(orderShipName);\n        Ship ship = createShip();\n        sendEmailToClient(client.getEmail(), ship);\n\n        return ship;\n    }\n\n    Ship createShip();\n\n    private void validateClient(Client client) {\n        if (client.getName() == null || client.getName().isBlank()) {\n            throw new IllegalArgumentException("\uc8fc\ubb38 \uace0\uac1d \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694");\n        }\n        if (client.getEmail() == null || client.getEmail().isBlank()) {\n            throw new IllegalArgumentException("\uc8fc\ubb38 \uace0\uac1d \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694");\n        }\n    }\n\n    private void validateShipName(String orderShipName) {\n        if (orderShipName.equalsIgnoreCase("white-ship")) {\n\n        } else if (orderShipName.equalsIgnoreCase("black-ship")) {\n\n        } else {\n            throw new IllegalArgumentException("\uc8fc\ubb38\ud560 \uc218 \uc5c6\ub294 \ubc30\uc555\ub2c8\ub2e4.");\n        }\n    }\n\n    private void sendEmailToClient(String clientEmail, Ship ship) {\n        System.out.println(clientEmail + "\ub85c \uc8fc\ubb38 \uc815\ubcf4 \ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.");\n    }\n}\n')),(0,r.kt)("h4",{id:"whiteshipfactoryjava"},"WhiteShipFactory.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class WhiteShipFactory implements ShipFactory {\n    // orderShip \uc740 default \uba54\uc18c\ub4dc\ub77c \ub530\ub85c \uad6c\ud604 \ud544\uc694 X\n    @Override\n    public WhiteShip createShip() {\n        return new WhiteShip("white-ship", "white", "\u21ef");\n    }\n}\n')),(0,r.kt)("h4",{id:"blackshipfactoryjava"},"BlackShipFactory.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class BlackShipFactory implements ShipFactory {\n    @Override\n    public Ship createShip() {\n        return new BlackShip("black-ship", "black", "\u2693");\n    }\n}\n')),(0,r.kt)("p",null,"Factory \uc640 Class \uc5d0 \uac01\uac01\uacc4\uce35 \uad6c\uc870\uac00 \uc788\uc5b4 \uad6c\ud604\uccb4 \ud329\ud1a0\ub9ac \ub0b4\uc5d0\uc11c \uc6d0\ud558\ub294 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \uac83\uc774\ub2e4. ",(0,r.kt)("br",null),"\n\uacb0\uacfc\uc801\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc740 \uad6c\uc870\ub97c \uac16\uac8c\ub41c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Factory method pattern diagram example",src:n(7737).Z,width:"801",height:"685"})),(0,r.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,r.kt)("h3",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OCP \uc6d0\uce59\uc744 \uc9c0\ud0a4\uba70 \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131 \ub85c\uc9c1\uc744 \uc804\ud600 \uac74\ub4dc\ub9ac\uc9c0 \uc54a\uace0 \ubcc4\ub3c4\uc758 \ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud560 \uc218 \uc788\ub2e4. ",(0,r.kt)("br",null),"\nProduct - Factory \uac04 Loosely coupled \ub85c \uad6c\ud604\ub418\uc5c8\uae30 \ub54c\ubb38\uc774\ub2e4.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ubcc0\uacbd\uc5d0 \ub2eb\ud600\uc788\ub2e4: \uae30\uc874 \ucf54\ub4dc\ub97c \ubcc0\uacbd\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4.",(0,r.kt)("br",null),"\n\ud655\uc7a5\uc5d0 \uc5f4\ub824\uc788\ub2e4: \uc0c8\ub85c\uc6b4 \ucf54\ub4dc\ub97c \uc5bc\ub9c8\ub4e0\uc9c0 \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4. ",(0,r.kt)("br",null),"\n\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 WhiteShip, BlackShip \uc744 \uc815\uc758\ud558\uba70 \ub3d9\uc2dc\uc5d0 \ud329\ud1a0\ub9ac\ub3c4 \ucd94\uac00 \uad6c\ud604\ud558\uc5ec \uc720\uc5f0\ud558\uac8c \ud655\uc7a5.")),(0,r.kt)("h4",{id:"default-\ud0a4\uc6cc\ub4dc"},"default \ud0a4\uc6cc\ub4dc"),(0,r.kt)("p",null,"interface \uc5d0\uc11c \uad6c\ud604\uccb4\ub97c \ub9cc\ub4e4 \uc218 \uc788\uac8c\ud558\ub294 \ud0a4\uc6cc\ub4dc",(0,r.kt)("br",null),"\n\uae30\uc874\uc5d0 abstract class \uc5d0\uc11c\ub9cc \uc9c0\uc6d0\ub418\ub358 \uba54\uc18c\ub4dc \uad6c\ud604\ubd80\ub97c interface \uc5d0\uc11c\ub3c4 \uc9c0\uc6d0\ud55c\ub2e4."),(0,r.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5ed\ud560\uc744 \ub098\ub204\uba74\uc11c \ud074\ub798\uc2a4\uac00 \ub298\uc5b4\ub098 \ubcf5\uc7a1\ub3c4\uac00 \uc99d\uac00\ud55c\ub2e4.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-reference"},"\ud83d\udd17 Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4"},"\ucf54\ub529\uc73c\ub85c \ud559\uc2b5\ud558\ub294 GoF\uc758 \ub514\uc790\uc778 \ud328\ud134 - \ubc31\uae30\uc120")))}u.isMDXComponent=!0},7737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Factory_pattern_diagram-92a4b2ee30b0c89819a87d546efce074.png"},5175:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ship_ShipFactory_diagram-4ac6f54ee6bf69d7d221d9b3cb484bf8.png"},4317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/factory_method_pattern-ba1d7041637bb8fcd490cbd5902ec1cf.svg"}}]);