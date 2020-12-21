(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,f=m["".concat(b,".").concat(u)]||m[u]||l[u]||o;return r?a.a.createElement(f,c(c({ref:t},i),{},{components:r})):a.a.createElement(f,c({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,b=new Array(o);b[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<o;i++)b[i]=r[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},986:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(1086)),b={id:"eventtype",title:"Enumeration: EventType",sidebar_label:"EventType"},c={unversionedId:"api/enums/eventtype",id:"version-4.2/api/enums/eventtype",isDocsHomePage:!1,title:"Enumeration: EventType",description:"Enumeration members",source:"@site/versioned_docs/version-4.2/api/enums/eventtype.md",slug:"/api/enums/eventtype",permalink:"/docs/4.2/api/enums/eventtype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/enums/eventtype.md",version:"4.2",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1608514401,sidebar_label:"EventType",sidebar:"version-4.2/API",previous:{title:"Enumeration: ChangeSetType",permalink:"/docs/4.2/api/enums/changesettype"},next:{title:"Enumeration: GroupOperator",permalink:"/docs/4.2/api/enums/groupoperator"}},p=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"afterCreate",id:"aftercreate",children:[]},{value:"afterDelete",id:"afterdelete",children:[]},{value:"afterFlush",id:"afterflush",children:[]},{value:"afterUpdate",id:"afterupdate",children:[]},{value:"beforeCreate",id:"beforecreate",children:[]},{value:"beforeDelete",id:"beforedelete",children:[]},{value:"beforeFlush",id:"beforeflush",children:[]},{value:"beforeUpdate",id:"beforeupdate",children:[]},{value:"onFlush",id:"onflush",children:[]},{value:"onInit",id:"oninit",children:[]}]}],i={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(o.b)("h3",{id:"aftercreate"},"afterCreate"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"afterCreate"),':  = "afterCreate"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L98"}),"packages/core/src/enums.ts:98"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"afterdelete"},"afterDelete"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"afterDelete"),':  = "afterDelete"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L102"}),"packages/core/src/enums.ts:102"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"afterflush"},"afterFlush"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"afterFlush"),':  = "afterFlush"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L105"}),"packages/core/src/enums.ts:105"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"afterupdate"},"afterUpdate"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"afterUpdate"),':  = "afterUpdate"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L100"}),"packages/core/src/enums.ts:100"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"beforecreate"},"beforeCreate"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"beforeCreate"),':  = "beforeCreate"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L97"}),"packages/core/src/enums.ts:97"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"beforedelete"},"beforeDelete"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"beforeDelete"),':  = "beforeDelete"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L101"}),"packages/core/src/enums.ts:101"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"beforeflush"},"beforeFlush"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"beforeFlush"),':  = "beforeFlush"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L103"}),"packages/core/src/enums.ts:103"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"beforeupdate"},"beforeUpdate"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"beforeUpdate"),':  = "beforeUpdate"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L99"}),"packages/core/src/enums.ts:99"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onflush"},"onFlush"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"onFlush"),':  = "onFlush"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L104"}),"packages/core/src/enums.ts:104"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oninit"},"onInit"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"onInit"),':  = "onInit"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L96"}),"packages/core/src/enums.ts:96"))))}s.isMDXComponent=!0}}]);