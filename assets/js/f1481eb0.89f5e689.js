(window.webpackJsonp=window.webpackJsonp||[]).push([[906],{1051:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var n=a.a.useContext(b),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=l(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(r),u=t,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return r?a.a.createElement(d,o(o({ref:n},b),{},{components:r})):a.a.createElement(d,o({ref:n},b))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var b=2;b<i;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},979:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return o})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return l}));var t=r(3),a=r(8),i=(r(0),r(1051)),c={id:"knex.foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",hide_title:!0},o={unversionedId:"api/interfaces/knex.foreignkey",id:"version-4.4/api/interfaces/knex.foreignkey",isDocsHomePage:!1,title:"Interface: ForeignKey",description:"Interface: ForeignKey",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.foreignkey.md",slug:"/api/interfaces/knex.foreignkey",permalink:"/docs/api/interfaces/knex.foreignkey",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.foreignkey.md",version:"4.4",lastUpdatedBy:"Jens Mikkelsen",lastUpdatedAt:1613503743,sidebar_label:"ForeignKey",sidebar:"version-4.4/API",previous:{title:"Interface: Column",permalink:"/docs/api/interfaces/knex.column"},next:{title:"Interface: ICriteriaNode",permalink:"/docs/api/interfaces/knex.icriterianode"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[]},{value:"constraintName",id:"constraintname",children:[]},{value:"deleteRule",id:"deleterule",children:[]},{value:"referencedColumnName",id:"referencedcolumnname",children:[]},{value:"referencedTableName",id:"referencedtablename",children:[]},{value:"updateRule",id:"updaterule",children:[]}]}],b={toc:p};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},b,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-foreignkey"},"Interface: ForeignKey"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".ForeignKey"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ForeignKey"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"columnname"},"columnName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"columnName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L45"},"packages/knex/src/typings.ts:45")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"constraintname"},"constraintName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"constraintName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L46"},"packages/knex/src/typings.ts:46")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"deleterule"},"deleteRule"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"deleteRule"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L50"},"packages/knex/src/typings.ts:50")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"referencedcolumnname"},"referencedColumnName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"referencedColumnName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L48"},"packages/knex/src/typings.ts:48")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"referencedtablename"},"referencedTableName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"referencedTableName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L47"},"packages/knex/src/typings.ts:47")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"updaterule"},"updateRule"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"updateRule"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L49"},"packages/knex/src/typings.ts:49")))}l.isMDXComponent=!0}}]);