(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},421:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(1256)),o={id:"knex.knex.stringtagsupport",title:"Interface: StringTagSupport",sidebar_label:"StringTagSupport",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.stringtagsupport",id:"version-4.4/api/interfaces/knex.knex.stringtagsupport",isDocsHomePage:!1,title:"Interface: StringTagSupport",description:"Interface: StringTagSupport",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.stringtagsupport.md",slug:"/api/interfaces/knex.knex.stringtagsupport",permalink:"/docs/api/interfaces/knex.knex.stringtagsupport",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.stringtagsupport.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612304550,sidebar_label:"StringTagSupport",sidebar:"version-4.4/API",previous:{title:"Interface: Sqlite3ConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.sqlite3connectionconfig"},next:{title:"Interface: Table<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.table"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"Symbol.toStringTag",id:"symboltostringtag",children:[]}]}],s={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-stringtagsupport"},"Interface: StringTagSupport"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".StringTagSupport"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"StringTagSupport")),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.chainableinterface"}),Object(i.b)("em",{parentName:"a"},"ChainableInterface"))))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"symboltostringtag"},"[Symbol.toStringTag]"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"[Symbol.toStringTag]"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1639"))}l.isMDXComponent=!0}}]);