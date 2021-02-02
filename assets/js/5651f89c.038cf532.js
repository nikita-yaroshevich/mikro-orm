(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),l=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=l(a),j=n,s=m["".concat(r,".").concat(j)]||m[j]||O[j]||c;return a?b.a.createElement(s,o(o({ref:t},i),{},{components:a})):b.a.createElement(s,o({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=j;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var i=2;i<c;i++)r[i]=a[i];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},443:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),b=a(7),c=(a(0),a(1256)),r={id:"core.connection",title:"Class: Connection",sidebar_label:"Connection",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/core.connection",id:"api/classes/core.connection",isDocsHomePage:!1,title:"Class: Connection",description:"Class: Connection",source:"@site/docs/api/classes/core.connection.md",slug:"/api/classes/core.connection",permalink:"/docs/next/api/classes/core.connection",editUrl:null,version:"current",sidebar_label:"Connection",sidebar:"API",previous:{title:"Class: ConfigurationLoader",permalink:"/docs/next/api/classes/core.configurationloader"},next:{title:"Class: ConnectionException",permalink:"/docs/next/api/classes/core.connectionexception"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"client",id:"client",children:[]},{value:"config",id:"config",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"options",id:"options",children:[]},{value:"platform",id:"platform",children:[]},{value:"type",id:"type",children:[]}]},{value:"Methods",id:"methods",children:[{value:"begin",id:"begin",children:[]},{value:"close",id:"close",children:[]},{value:"commit",id:"commit",children:[]},{value:"connect",id:"connect",children:[]},{value:"execute",id:"execute",children:[]},{value:"executeQuery",id:"executequery",children:[]},{value:"getClientUrl",id:"getclienturl",children:[]},{value:"getConnectionOptions",id:"getconnectionoptions",children:[]},{value:"getDefaultClientUrl",id:"getdefaultclienturl",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"logQuery",id:"logquery",children:[]},{value:"rollback",id:"rollback",children:[]},{value:"setMetadata",id:"setmetadata",children:[]},{value:"setPlatform",id:"setplatform",children:[]},{value:"transactional",id:"transactional",children:[]}]}],i={toc:p};function l(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-connection"},"Class: Connection"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".Connection"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Connection")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(c.b)("em",{parentName:"a"},"AbstractSqlConnection"))))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new Connection"),"(",Object(c.b)("inlineCode",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(c.b)("em",{parentName:"a"},"Configuration")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.connectionoptions"}),Object(c.b)("em",{parentName:"a"},"ConnectionOptions")),", ",Object(c.b)("inlineCode",{parentName:"p"},"type?"),": ",Object(c.b)("em",{parentName:"p"},"read")," ","|"," ",Object(c.b)("em",{parentName:"p"},"write"),"): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.configuration"}),Object(c.b)("em",{parentName:"a"},"Configuration")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.connectionoptions"}),Object(c.b)("em",{parentName:"a"},"ConnectionOptions"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"type")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"read")," ","|"," ",Object(c.b)("em",{parentName:"td"},"write")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"'write'")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L14"}),"packages/core/src/connections/Connection.ts:14")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"client"},"client"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract")," ",Object(c.b)("strong",{parentName:"p"},"client"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L14"}),"packages/core/src/connections/Connection.ts:14")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"config"},"config"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(c.b)("em",{parentName:"a"},"Configuration")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"metadata"},"metadata"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("strong",{parentName:"p"},"metadata"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadatastorage"}),Object(c.b)("em",{parentName:"a"},"MetadataStorage"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L12"}),"packages/core/src/connections/Connection.ts:12")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"options"},"options"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"options"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.connectionoptions"}),Object(c.b)("em",{parentName:"a"},"ConnectionOptions"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"platform"},"platform"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("strong",{parentName:"p"},"platform"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(c.b)("em",{parentName:"a"},"Platform"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L13"}),"packages/core/src/connections/Connection.ts:13")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"type"),": ",Object(c.b)("em",{parentName:"p"},"read")," ","|"," ",Object(c.b)("em",{parentName:"p"},"write"),"= 'write'"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"begin"},"begin"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"begin"),"(",Object(c.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.transactioneventbroadcaster"}),Object(c.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"unknown"),">"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ctx?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.transactioneventbroadcaster"}),Object(c.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"unknown"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L49"}),"packages/core/src/connections/Connection.ts:49")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"close"},"close"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"close"),"(",Object(c.b)("inlineCode",{parentName:"p"},"force?"),": ",Object(c.b)("em",{parentName:"p"},"boolean"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Closes the database connection (aka disconnect)"),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"force?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"boolean"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L38"}),"packages/core/src/connections/Connection.ts:38")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"commit"},"commit"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"commit"),"(",Object(c.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.transactioneventbroadcaster"}),Object(c.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ctx")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.transactioneventbroadcaster"}),Object(c.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L53"}),"packages/core/src/connections/Connection.ts:53")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"connect"},"connect"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"connect"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Establishes connection to database"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L28"}),"packages/core/src/connections/Connection.ts:28")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"execute"},"execute"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"execute"),"(",Object(c.b)("inlineCode",{parentName:"p"},"query"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"params?"),": ",Object(c.b)("em",{parentName:"p"},"any"),"[], ",Object(c.b)("inlineCode",{parentName:"p"},"method?"),": ",Object(c.b)("em",{parentName:"p"},"all")," ","|"," ",Object(c.b)("em",{parentName:"p"},"get")," ","|"," ",Object(c.b)("em",{parentName:"p"},"run"),", ",Object(c.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(c.b)("em",{parentName:"p"},"any"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"any"),">"),Object(c.b)("h4",{id:"parameters-4"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"query")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"params?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"any"),"[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"method?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"all")," ","|"," ",Object(c.b)("em",{parentName:"td"},"get")," ","|"," ",Object(c.b)("em",{parentName:"td"},"run"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ctx?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"any"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"any"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L61"}),"packages/core/src/connections/Connection.ts:61")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"executequery"},"executeQuery"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected"),Object(c.b)("strong",{parentName:"p"},"executeQuery"),"<T",">","(",Object(c.b)("inlineCode",{parentName:"p"},"query"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"cb"),": () => ",Object(c.b)("em",{parentName:"p"},"Promise"),"<T",">","): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(c.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T"))))),Object(c.b)("h4",{id:"parameters-5"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"query")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"cb")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"() => ",Object(c.b)("em",{parentName:"td"},"Promise"),"<T",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L90"}),"packages/core/src/connections/Connection.ts:90")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getclienturl"},"getClientUrl"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getClientUrl"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L75"}),"packages/core/src/connections/Connection.ts:75")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getconnectionoptions"},"getConnectionOptions"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getConnectionOptions"),"(): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.connectionconfig"}),Object(c.b)("em",{parentName:"a"},"ConnectionConfig"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.connectionconfig"}),Object(c.b)("em",{parentName:"a"},"ConnectionConfig"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L63"}),"packages/core/src/connections/Connection.ts:63")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getdefaultclienturl"},"getDefaultClientUrl"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"getDefaultClientUrl"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Returns default client url for given driver (e.g. mongodb://127.0.0.1:27017 for mongodb)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L43"}),"packages/core/src/connections/Connection.ts:43")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isconnected"},"isConnected"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"isConnected"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"boolean"),">"),Object(c.b)("p",null,"Are we connected to the database"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"boolean"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L33"}),"packages/core/src/connections/Connection.ts:33")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"logquery"},"logQuery"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected"),Object(c.b)("strong",{parentName:"p"},"logQuery"),"(",Object(c.b)("inlineCode",{parentName:"p"},"query"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"took?"),": ",Object(c.b)("em",{parentName:"p"},"number"),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("h4",{id:"parameters-6"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"query")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"took?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"number"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L104"}),"packages/core/src/connections/Connection.ts:104")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"rollback"},"rollback"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"rollback"),"(",Object(c.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.transactioneventbroadcaster"}),Object(c.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("h4",{id:"parameters-7"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ctx")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.transactioneventbroadcaster"}),Object(c.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L57"}),"packages/core/src/connections/Connection.ts:57")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"setmetadata"},"setMetadata"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"setMetadata"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadatastorage"}),Object(c.b)("em",{parentName:"a"},"MetadataStorage")),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("h4",{id:"parameters-8"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.metadatastorage"}),Object(c.b)("em",{parentName:"a"},"MetadataStorage")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L82"}),"packages/core/src/connections/Connection.ts:82")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"setplatform"},"setPlatform"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"setPlatform"),"(",Object(c.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(c.b)("em",{parentName:"a"},"Platform")),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("h4",{id:"parameters-9"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"platform")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(c.b)("em",{parentName:"a"},"Platform")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L86"}),"packages/core/src/connections/Connection.ts:86")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transactional"},"transactional"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"transactional"),"<T",">","(",Object(c.b)("inlineCode",{parentName:"p"},"cb"),": (",Object(c.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(c.b)("em",{parentName:"p"},"any"),") => ",Object(c.b)("em",{parentName:"p"},"Promise"),"<T",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.transactioneventbroadcaster"}),Object(c.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(c.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T"))))),Object(c.b)("h4",{id:"parameters-10"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"cb")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(",Object(c.b)("inlineCode",{parentName:"td"},"trx"),": ",Object(c.b)("em",{parentName:"td"},"any"),") => ",Object(c.b)("em",{parentName:"td"},"Promise"),"<T",">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ctx?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.transactioneventbroadcaster"}),Object(c.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/core/src/connections/Connection.ts#L45"}),"packages/core/src/connections/Connection.ts:45")))}l.isMDXComponent=!0}}]);