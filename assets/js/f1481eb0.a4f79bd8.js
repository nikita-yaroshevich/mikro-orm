(window.webpackJsonp=window.webpackJsonp||[]).push([[904],{1048:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(r),u=n,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return r?a.a.createElement(d,o(o({ref:t},b),{},{components:r})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},976:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),i=(r(0),r(1048)),c={id:"knex.foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",hide_title:!0},o={unversionedId:"api/interfaces/knex.foreignkey",id:"version-4.4/api/interfaces/knex.foreignkey",isDocsHomePage:!1,title:"Interface: ForeignKey",description:"Interface: ForeignKey",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.foreignkey.md",slug:"/api/interfaces/knex.foreignkey",permalink:"/docs/api/interfaces/knex.foreignkey",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.foreignkey.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1613125179,sidebar_label:"ForeignKey",sidebar:"version-4.4/API",previous:{title:"Interface: Column",permalink:"/docs/api/interfaces/knex.column"},next:{title:"Interface: ICriteriaNode",permalink:"/docs/api/interfaces/knex.icriterianode"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[]},{value:"constraintName",id:"constraintname",children:[]},{value:"deleteRule",id:"deleterule",children:[]},{value:"referencedColumnName",id:"referencedcolumnname",children:[]},{value:"referencedTableName",id:"referencedtablename",children:[]},{value:"updateRule",id:"updaterule",children:[]}]}],b={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-foreignkey"},"Interface: ForeignKey"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".ForeignKey"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ForeignKey"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"columnname"},"columnName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"columnName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L45"},"packages/knex/src/typings.ts:45")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"constraintname"},"constraintName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"constraintName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L46"},"packages/knex/src/typings.ts:46")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"deleterule"},"deleteRule"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"deleteRule"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L50"},"packages/knex/src/typings.ts:50")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"referencedcolumnname"},"referencedColumnName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"referencedColumnName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L48"},"packages/knex/src/typings.ts:48")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"referencedtablename"},"referencedTableName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"referencedTableName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L47"},"packages/knex/src/typings.ts:47")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"updaterule"},"updateRule"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"updateRule"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L49"},"packages/knex/src/typings.ts:49")))}l.isMDXComponent=!0}}]);