(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return y}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=s(r),u=n,y=l["".concat(a,".").concat(u)]||l[u]||m[u]||o;return r?i.a.createElement(y,c(c({ref:t},p),{},{components:r})):i.a.createElement(y,c({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},498:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(7),o=(r(0),r(1086)),a={id:"factoryoptions",title:"Interface: FactoryOptions",sidebar_label:"FactoryOptions"},c={unversionedId:"api/interfaces/factoryoptions",id:"version-4.3/api/interfaces/factoryoptions",isDocsHomePage:!1,title:"Interface: FactoryOptions",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/interfaces/factoryoptions.md",slug:"/api/interfaces/factoryoptions",permalink:"/docs/api/interfaces/factoryoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/factoryoptions.md",version:"4.3",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1608514401,sidebar_label:"FactoryOptions",sidebar:"version-4.3/API",previous:{title:"Interface: EventSubscriber<T>",permalink:"/docs/api/interfaces/eventsubscriber"},next:{title:"Interface: FindOneOptions<T, P>",permalink:"/docs/api/interfaces/findoneoptions"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"merge",id:"merge",children:[]},{value:"newEntity",id:"newentity",children:[]},{value:"refresh",id:"refresh",children:[]}]}],p={rightToc:b};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FactoryOptions"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"convertCustomTypes"),": boolean"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L12"}),"packages/core/src/entity/EntityFactory.ts:12"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"initialized"},"initialized"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"initialized"),": boolean"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L8"}),"packages/core/src/entity/EntityFactory.ts:8"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"merge"},"merge"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"merge"),": boolean"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L10"}),"packages/core/src/entity/EntityFactory.ts:10"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"newentity"},"newEntity"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"newEntity"),": boolean"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L9"}),"packages/core/src/entity/EntityFactory.ts:9"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"refresh"},"refresh"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"refresh"),": boolean"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L11"}),"packages/core/src/entity/EntityFactory.ts:11"))))}s.isMDXComponent=!0}}]);