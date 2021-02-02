(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),O=n,j=m["".concat(c,".").concat(O)]||m[O]||l[O]||b;return a?r.a.createElement(j,i(i({ref:t},p),{},{components:a})):r.a.createElement(j,i({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},716:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),b=(a(0),a(1256)),c={id:"migrations.migration",title:"Class: Migration",sidebar_label:"Migration",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/migrations.migration",id:"api/classes/migrations.migration",isDocsHomePage:!1,title:"Class: Migration",description:"Class: Migration",source:"@site/docs/api/classes/migrations.migration.md",slug:"/api/classes/migrations.migration",permalink:"/docs/next/api/classes/migrations.migration",editUrl:null,version:"current",sidebar_label:"Migration",sidebar:"API",previous:{title:"Class: SqlEntityRepository<T>",permalink:"/docs/next/api/classes/knex.sqlentityrepository"},next:{title:"Class: MigrationGenerator",permalink:"/docs/next/api/classes/migrations.migrationgenerator"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"ctx",id:"ctx",children:[]},{value:"driver",id:"driver",children:[]},{value:"queries",id:"queries",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addSql",id:"addsql",children:[]},{value:"down",id:"down",children:[]},{value:"execute",id:"execute",children:[]},{value:"getKnex",id:"getknex",children:[]},{value:"getQueries",id:"getqueries",children:[]},{value:"isTransactional",id:"istransactional",children:[]},{value:"reset",id:"reset",children:[]},{value:"setTransactionContext",id:"settransactioncontext",children:[]},{value:"up",id:"up",children:[]}]}],p={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-migration"},"Class: Migration"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations"}),"migrations"),".Migration"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Migration"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Migration"),"(",Object(b.b)("inlineCode",{parentName:"p"},"driver"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"config"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/migrations.migration"}),Object(b.b)("em",{parentName:"a"},"Migration"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"driver")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/migrations.migration"}),Object(b.b)("em",{parentName:"a"},"Migration"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L9"}),"packages/migrations/src/Migration.ts:9")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ctx"},"ctx"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"ctx"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.transaction"}),Object(b.b)("em",{parentName:"a"},"Transaction")),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L9"}),"packages/migrations/src/Migration.ts:9")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"driver"},"driver"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"driver"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"queries"},"queries"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"queries"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations#query"}),Object(b.b)("em",{parentName:"a"},"Query")),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L8"}),"packages/migrations/src/Migration.ts:8")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"addsql"},"addSql"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addSql"),"(",Object(b.b)("inlineCode",{parentName:"p"},"sql"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations#query"}),Object(b.b)("em",{parentName:"a"},"Query")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sql")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/migrations#query"}),Object(b.b)("em",{parentName:"a"},"Query")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L24"}),"packages/migrations/src/Migration.ts:24")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"down"},"down"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"down"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L16"}),"packages/migrations/src/Migration.ts:16")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"execute"},"execute"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"execute"),"(",Object(b.b)("inlineCode",{parentName:"p"},"sql"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations#query"}),Object(b.b)("em",{parentName:"a"},"Query")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(b.b)("em",{parentName:"a"},"EntityData")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#anyentity"}),Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",">","[]",">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sql")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/migrations#query"}),Object(b.b)("em",{parentName:"a"},"Query")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(b.b)("em",{parentName:"a"},"EntityData")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#anyentity"}),Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",">","[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L37"}),"packages/migrations/src/Migration.ts:37")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getknex"},"getKnex"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getKnex"),"(): ",Object(b.b)("em",{parentName:"p"},"Knex"),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"unknown"),"[]",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Knex"),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"unknown"),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L41"}),"packages/migrations/src/Migration.ts:41")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getqueries"},"getQueries"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getQueries"),"(): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations#query"}),Object(b.b)("em",{parentName:"a"},"Query")),"[]"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations#query"}),Object(b.b)("em",{parentName:"a"},"Query")),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L45"}),"packages/migrations/src/Migration.ts:45")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"istransactional"},"isTransactional"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isTransactional"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L20"}),"packages/migrations/src/Migration.ts:20")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"reset"},"reset"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"reset"),"(): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L28"}),"packages/migrations/src/Migration.ts:28")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"settransactioncontext"},"setTransactionContext"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setTransactionContext"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(b.b)("em",{parentName:"p"},"any"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ctx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L33"}),"packages/migrations/src/Migration.ts:33")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"up"},"up"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"up"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/cdb7e2b/packages/migrations/src/Migration.ts#L14"}),"packages/migrations/src/Migration.ts:14")))}s.isMDXComponent=!0}}]);