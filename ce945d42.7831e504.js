(window.webpackJsonp=window.webpackJsonp||[]).push([[804],{1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var a=r(0),c=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},l=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=p(r),d=a,O=l["".concat(o,".").concat(d)]||l[d]||m[d]||n;return r?c.a.createElement(O,b(b({ref:t},s),{},{components:r})):c.a.createElement(O,b({ref:t},s))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var s=2;s<n;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},873:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(3),c=r(7),n=(r(0),r(1086)),o={id:"deadlockexception",title:"Class: DeadlockException",sidebar_label:"DeadlockException"},b={unversionedId:"api/classes/deadlockexception",id:"version-4.2/api/classes/deadlockexception",isDocsHomePage:!1,title:"Class: DeadlockException",description:"Exception for a deadlock error of a transaction detected in the driver.",source:"@site/versioned_docs/version-4.2/api/classes/deadlockexception.md",slug:"/api/classes/deadlockexception",permalink:"/docs/4.2/api/classes/deadlockexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/deadlockexception.md",version:"4.2",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1608514401,sidebar_label:"DeadlockException",sidebar:"version-4.2/API",previous:{title:"Class: DateType",permalink:"/docs/4.2/api/classes/datetype"},next:{title:"Class: DebugCommand",permalink:"/docs/4.2/api/classes/debugcommand"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]}]}],s={rightToc:i};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Exception for a deadlock error of a transaction detected in the driver."),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api/classes/serverexception"}),"ServerException")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"DeadlockException")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new DeadlockException"),"(",Object(n.b)("inlineCode",{parentName:"p"},"previous"),": ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api/classes/driverexception#error"}),"Error"),"): ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api/classes/deadlockexception"}),"DeadlockException")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#constructor"}),"constructor"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"previous")),Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.2/api/classes/driverexception#error"}),"Error"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api/classes/deadlockexception"}),"DeadlockException")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"code"},"code"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"code"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#code"}),"code"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"errmsg"},"errmsg"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"errmsg"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#errmsg"}),"errmsg"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"errno"},"errno"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"errno"),": number"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#errno"}),"errno"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"message"},"message"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"message"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#message"}),"message"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/typescript/lib/lib.es5.d.ts:974")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"name"},"name"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"name"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#name"}),"name"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/typescript/lib/lib.es5.d.ts:973")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"sqlMessage"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#sqlmessage"}),"sqlMessage"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sqlstate"},"sqlState"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"sqlState"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#sqlstate"}),"sqlState"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"stack"},"stack"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"stack"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#stack"}),"stack"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/typescript/lib/lib.es5.d.ts:975")))}p.isMDXComponent=!0}}]);