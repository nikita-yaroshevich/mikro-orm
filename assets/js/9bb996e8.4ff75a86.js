(window.webpackJsonp=window.webpackJsonp||[]).push([[704],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),s=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=a,O=l["".concat(c,".").concat(d)]||l[d]||m[d]||b;return r?n.a.createElement(O,i(i({ref:t},o),{},{components:r})):n.a.createElement(O,i({ref:t},o))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<b;o++)c[o]=r[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},774:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),b=(r(0),r(1256)),c={id:"core.findoptions",title:"Interface: FindOptions<T, P>",sidebar_label:"FindOptions",hide_title:!0},i={unversionedId:"api/interfaces/core.findoptions",id:"version-4.4/api/interfaces/core.findoptions",isDocsHomePage:!1,title:"Interface: FindOptions<T, P>",description:"Interface: FindOptions",source:"@site/versioned_docs/version-4.4/api/interfaces/core.findoptions.md",slug:"/api/interfaces/core.findoptions",permalink:"/docs/api/interfaces/core.findoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.findoptions.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612304550,sidebar_label:"FindOptions",sidebar:"version-4.4/API",previous:{title:"Interface: FindOneOrFailOptions<T, P>",permalink:"/docs/api/interfaces/core.findoneorfailoptions"},next:{title:"Interface: FlatQueryOrderMap",permalink:"/docs/api/interfaces/core.flatqueryordermap"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[]},{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"disableIdentityMap",id:"disableidentitymap",children:[]},{value:"fields",id:"fields",children:[]},{value:"filters",id:"filters",children:[]},{value:"flags",id:"flags",children:[]},{value:"groupBy",id:"groupby",children:[]},{value:"having",id:"having",children:[]},{value:"limit",id:"limit",children:[]},{value:"offset",id:"offset",children:[]},{value:"orderBy",id:"orderby",children:[]},{value:"populate",id:"populate",children:[]},{value:"refresh",id:"refresh",children:[]},{value:"schema",id:"schema",children:[]},{value:"strategy",id:"strategy",children:[]}]}],o={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-findoptionst-p"},"Interface: FindOptions<T, P",">"),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".FindOptions"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/modules/core#populate"}),Object(b.b)("em",{parentName:"a"},"Populate")),"<T",">"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/modules/core#populate"}),Object(b.b)("em",{parentName:"a"},"Populate")),"<T","\\",">")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"FindOptions"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"cache"},"cache"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"cache"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," ","[",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("em",{parentName:"p"},"number"),"]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L85"}),"packages/core/src/drivers/IDatabaseDriver.ts:85")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"convertCustomTypes"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L89"}),"packages/core/src/drivers/IDatabaseDriver.ts:89")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"disableidentitymap"},"disableIdentityMap"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"disableIdentityMap"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L90"}),"packages/core/src/drivers/IDatabaseDriver.ts:90")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fields"},"fields"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"fields"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core#fieldsmap"}),Object(b.b)("em",{parentName:"a"},"FieldsMap")),")[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L91"}),"packages/core/src/drivers/IDatabaseDriver.ts:91")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"filters"},"filters"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"filters"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L97"}),"packages/core/src/drivers/IDatabaseDriver.ts:97")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"flags"},"flags"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"flags"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/enums/core.queryflag"}),Object(b.b)("em",{parentName:"a"},"QueryFlag")),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L93"}),"packages/core/src/drivers/IDatabaseDriver.ts:93")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"groupby"},"groupBy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"groupBy"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L94"}),"packages/core/src/drivers/IDatabaseDriver.ts:94")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"having"},"having"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"having"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," { ",Object(b.b)("inlineCode",{parentName:"p"},"__@PrimaryKeyType@41543?"),": ",Object(b.b)("em",{parentName:"p"},"any"),"  } ","|"," { ",Object(b.b)("inlineCode",{parentName:"p"},"__@PrimaryKeyType@41543?"),": ",Object(b.b)("em",{parentName:"p"},"any"),"  } & ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"," ","|"," ",Object(b.b)("em",{parentName:"p"},"NonNullable"),"<",Object(b.b)("em",{parentName:"p"},"Query"),"<T",">",">"," ","|"," ",Object(b.b)("em",{parentName:"p"},"NonNullable"),"<",Object(b.b)("em",{parentName:"p"},"Query"),"<T",">",">"," & ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L95"}),"packages/core/src/drivers/IDatabaseDriver.ts:95")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"limit"},"limit"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"limit"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L86"}),"packages/core/src/drivers/IDatabaseDriver.ts:86")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"offset"},"offset"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"offset"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L87"}),"packages/core/src/drivers/IDatabaseDriver.ts:87")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"orderby"},"orderBy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"orderBy"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.queryordermap"}),Object(b.b)("em",{parentName:"a"},"QueryOrderMap"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L84"}),"packages/core/src/drivers/IDatabaseDriver.ts:84")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"populate"},"populate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"populate"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," P"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L83"}),"packages/core/src/drivers/IDatabaseDriver.ts:83")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"refresh"},"refresh"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"refresh"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L88"}),"packages/core/src/drivers/IDatabaseDriver.ts:88")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"schema"},"schema"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"schema"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L92"}),"packages/core/src/drivers/IDatabaseDriver.ts:92")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"strategy"},"strategy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"strategy"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/enums/core.loadstrategy#select_in"}),Object(b.b)("em",{parentName:"a"},"SELECT","_","IN"))," ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/enums/core.loadstrategy#joined"}),Object(b.b)("em",{parentName:"a"},"JOINED"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L96"}),"packages/core/src/drivers/IDatabaseDriver.ts:96")))}s.isMDXComponent=!0}}]);