(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),m=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=m(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),o=a,O=u["".concat(l,".").concat(o)]||u[o]||d[o]||b;return n?r.a.createElement(O,c(c({ref:t},p),{},{components:n})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=o;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<b;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},495:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),b=(n(0),n(1051)),l={id:"knex.knex.mysqlaltercolumnbuilder",title:"Interface: MySqlAlterColumnBuilder",sidebar_label:"MySqlAlterColumnBuilder",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.mysqlaltercolumnbuilder",id:"version-4.4/api/interfaces/knex.knex.mysqlaltercolumnbuilder",isDocsHomePage:!1,title:"Interface: MySqlAlterColumnBuilder",description:"Interface: MySqlAlterColumnBuilder",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.mysqlaltercolumnbuilder.md",slug:"/api/interfaces/knex.knex.mysqlaltercolumnbuilder",permalink:"/docs/api/interfaces/knex.knex.mysqlaltercolumnbuilder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.mysqlaltercolumnbuilder.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1614131624,sidebar_label:"MySqlAlterColumnBuilder",sidebar:"version-4.4/API",previous:{title:"Interface: MySql2ConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.mysql2connectionconfig"},next:{title:"Interface: MySqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.mysqlconnectionconfig"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"after",id:"after",children:[]},{value:"alter",id:"alter",children:[]},{value:"comment",id:"comment",children:[]},{value:"defaultTo",id:"defaultto",children:[]},{value:"first",id:"first",children:[]},{value:"index",id:"index",children:[]},{value:"notNullable",id:"notnullable",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"onDelete",id:"ondelete",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"primary",id:"primary",children:[]},{value:"queryContext",id:"querycontext",children:[]},{value:"references",id:"references",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"withKeyName",id:"withkeyname",children:[]}]}],p={toc:i};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-mysqlaltercolumnbuilder"},"Interface: MySqlAlterColumnBuilder"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MySqlAlterColumnBuilder"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},Object(b.b)("em",{parentName:"a"},"AlterColumnBuilder"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"MySqlAlterColumnBuilder")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"after"},"after"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"after"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},Object(b.b)("em",{parentName:"a"},"AlterColumnBuilder"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"columnName")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},Object(b.b)("em",{parentName:"a"},"AlterColumnBuilder"))),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1835"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"alter"},"alter"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"alter"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1808"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"comment"},"comment"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"comment"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1807"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"defaultto"},"defaultTo"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"defaultTo"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},Object(b.b)("em",{parentName:"a"},"Value")),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},Object(b.b)("em",{parentName:"a"},"Value")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1803"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"first"},"first"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"first"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},Object(b.b)("em",{parentName:"a"},"AlterColumnBuilder"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},Object(b.b)("em",{parentName:"a"},"AlterColumnBuilder"))),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1834"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"index"},"index"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"index"),"(",Object(b.b)("inlineCode",{parentName:"p"},"indexName?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"indexName?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1797"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"notnullable"},"notNullable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"notNullable"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1805"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nullable"},"nullable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"nullable"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1806"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ondelete"},"onDelete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"onDelete"),"(",Object(b.b)("inlineCode",{parentName:"p"},"command"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"command")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1801"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onupdate"},"onUpdate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"onUpdate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"command"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"command")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1802"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"primary"},"primary"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"primary"),"(",Object(b.b)("inlineCode",{parentName:"p"},"constraintName?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"constraintName?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1798"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"querycontext"},"queryContext"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"queryContext"),"(",Object(b.b)("inlineCode",{parentName:"p"},"context"),": ",Object(b.b)("em",{parentName:"p"},"any"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1809"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"references"},"references"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"references"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.referencingcolumnbuilder"},Object(b.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"columnName")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.referencingcolumnbuilder"},Object(b.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1800"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unique"},"unique"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"unique"),"(",Object(b.b)("inlineCode",{parentName:"p"},"indexName?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"indexName?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1799"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unsigned"},"unsigned"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"unsigned"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1804"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"withkeyname"},"withKeyName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"withKeyName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"keyName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("h4",{id:"parameters-10"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"keyName")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnbuilder"},Object(b.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"},"AlterColumnBuilder")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1810"))}m.isMDXComponent=!0}}]);