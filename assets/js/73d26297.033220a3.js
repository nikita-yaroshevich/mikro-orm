(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return r?a.a.createElement(u,i(i({ref:t},s),{},{components:r})):a.a.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},590:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(1256)),c={id:"postgresqlexceptionconverter",title:"Class: PostgreSqlExceptionConverter",sidebar_label:"PostgreSqlExceptionConverter"},i={unversionedId:"api/classes/postgresqlexceptionconverter",id:"version-4.3/api/classes/postgresqlexceptionconverter",isDocsHomePage:!1,title:"Class: PostgreSqlExceptionConverter",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/postgresqlexceptionconverter.md",slug:"/api/classes/postgresqlexceptionconverter",permalink:"/docs/4.3/api/classes/postgresqlexceptionconverter",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/postgresqlexceptionconverter.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612304550,sidebar_label:"PostgreSqlExceptionConverter",sidebar:"version-4.3/API",previous:{title:"Class: PostgreSqlDriver",permalink:"/docs/4.3/api/classes/postgresqldriver"},next:{title:"Class: PostgreSqlPlatform",permalink:"/docs/4.3/api/classes/postgresqlplatform"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"convertException",id:"convertexception",children:[]}]}],s={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"ExceptionConverter"),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"PostgreSqlExceptionConverter")))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"convertexception"},"convertException"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"convertException"),"(",Object(o.b)("inlineCode",{parentName:"p"},"exception"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/driverexception#error"}),"Error")," & ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),"): DriverException"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Overrides void")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/postgresql/src/PostgreSqlExceptionConverter.ts#L14"}),"packages/postgresql/src/PostgreSqlExceptionConverter.ts:14"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"link"))," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.postgresql.org/docs/9.4/static/errcodes-appendix.html"}),"http://www.postgresql.org/docs/9.4/static/errcodes-appendix.html")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"link"))," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/doctrine/dbal/blob/master/src/Driver/AbstractPostgreSQLDriver.php"}),"https://github.com/doctrine/dbal/blob/master/src/Driver/AbstractPostgreSQLDriver.php")),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"exception")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/driverexception#error"}),"Error")," & ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," DriverException"))}l.isMDXComponent=!0}}]);