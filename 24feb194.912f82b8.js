(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=l(r),O=a,d=m["".concat(o,".").concat(O)]||m[O]||s[O]||b;return r?n.a.createElement(d,c(c({ref:t},i),{},{components:r})):n.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,o=new Array(b);o[0]=O;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<b;i++)o[i]=r[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},213:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),b=(r(0),r(1086)),o={id:"primarykeyoptions",title:"Interface: PrimaryKeyOptions<T>",sidebar_label:"PrimaryKeyOptions"},c={unversionedId:"api/interfaces/primarykeyoptions",id:"version-4.2/api/interfaces/primarykeyoptions",isDocsHomePage:!1,title:"Interface: PrimaryKeyOptions<T>",description:"Type parameters",source:"@site/versioned_docs/version-4.2/api/interfaces/primarykeyoptions.md",slug:"/api/interfaces/primarykeyoptions",permalink:"/docs/4.2/api/interfaces/primarykeyoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/interfaces/primarykeyoptions.md",version:"4.2",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1608514401,sidebar_label:"PrimaryKeyOptions",sidebar:"version-4.2/API",previous:{title:"Interface: PoolConfig",permalink:"/docs/4.2/api/interfaces/poolconfig"},next:{title:"Interface: QueryOrderMap",permalink:"/docs/4.2/api/interfaces/queryordermap"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"columnType",id:"columntype",children:[]},{value:"comment",id:"comment",children:[]},{value:"customType",id:"customtype",children:[]},{value:"default",id:"default",children:[]},{value:"defaultRaw",id:"defaultraw",children:[]},{value:"fieldName",id:"fieldname",children:[]},{value:"fieldNames",id:"fieldnames",children:[]},{value:"formula",id:"formula",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"index",id:"index",children:[]},{value:"lazy",id:"lazy",children:[]},{value:"length",id:"length",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"onCreate",id:"oncreate",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"persist",id:"persist",children:[]},{value:"primary",id:"primary",children:[]},{value:"serializedName",id:"serializedname",children:[]},{value:"serializedPrimaryKey",id:"serializedprimarykey",children:[]},{value:"serializer",id:"serializer",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"version",id:"version",children:[]}]}],i={rightToc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"{ columnType?: string ; comment?: string ; customType?: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api/classes/type"}),"Type"),"<","any> ; default?: string ","|"," string[] ","|"," number ","|"," number[] ","|"," boolean ","|"," null ; defaultRaw?: string ; fieldName?: string ; fieldNames?: string[] ; formula?: string ","|"," (alias: string) => string ; hidden?: boolean ; index?: boolean ","|"," string ; lazy?: boolean ; length?: number ; name?: string ; nullable?: boolean ; onCreate?: (entity: T) => any ; onUpdate?: (entity: T) => any ; persist?: boolean ; primary?: boolean ; serializedName?: string ; serializedPrimaryKey?: boolean ; serializer?: (value: any) => any ; type?: ",'"',"string",'"'," ","|"," ",'"',"number",'"'," ","|"," ",'"',"boolean",'"'," ","|"," ",'"',"bigint",'"'," ","|"," ",'"',"ObjectId",'"'," ","|"," string ","|"," unknown ","|"," bigint ","|"," Date ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api#constructor"}),"Constructor"),"<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api/classes/type"}),"Type"),"<","any>> ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api/classes/type"}),"Type"),"<","any> ; unique?: boolean ","|"," string ; unsigned?: boolean ; version?: boolean  }"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"PrimaryKeyOptions")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"columntype"},"columnType"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"columnType"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.columnType")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L42"}),"packages/core/src/decorators/Property.ts:42"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"comment"},"comment"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"comment"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.comment")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L62"}),"packages/core/src/decorators/Property.ts:62"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"customtype"},"customType"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"customType"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api/classes/type"}),"Type"),"<","any>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.customType")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L41"}),"packages/core/src/decorators/Property.ts:41"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"default"},"default"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"default"),": string ","|"," string[] ","|"," number ","|"," number[] ","|"," boolean ","|"," null"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.default")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L47"}),"packages/core/src/decorators/Property.ts:47"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"defaultraw"},"defaultRaw"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"defaultRaw"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.defaultRaw")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L48"}),"packages/core/src/decorators/Property.ts:48"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fieldname"},"fieldName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"fieldName"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.fieldName")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L39"}),"packages/core/src/decorators/Property.ts:39"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fieldnames"},"fieldNames"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"fieldNames"),": string[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.fieldNames")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L40"}),"packages/core/src/decorators/Property.ts:40"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"formula"},"formula"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"formula"),": string ","|"," (alias: string) => string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.formula")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L49"}),"packages/core/src/decorators/Property.ts:49"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hidden"},"hidden"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"hidden"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.hidden")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L53"}),"packages/core/src/decorators/Property.ts:53"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"index"},"index"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"index"),": boolean ","|"," string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.index")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L55"}),"packages/core/src/decorators/Property.ts:55"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"lazy"},"lazy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"lazy"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.lazy")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L57"}),"packages/core/src/decorators/Property.ts:57"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"length"},"length"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"length"),": number"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.length")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L44"}),"packages/core/src/decorators/Property.ts:44"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"name"},"name"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"name"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.name")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L38"}),"packages/core/src/decorators/Property.ts:38"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nullable"},"nullable"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"nullable"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.nullable")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L50"}),"packages/core/src/decorators/Property.ts:50"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"oncreate"},"onCreate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onCreate"),": (entity: T) => any"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.onCreate")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L45"}),"packages/core/src/decorators/Property.ts:45"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onupdate"},"onUpdate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onUpdate"),": (entity: T) => any"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.onUpdate")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L46"}),"packages/core/src/decorators/Property.ts:46"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"persist"},"persist"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"persist"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.persist")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L52"}),"packages/core/src/decorators/Property.ts:52"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"primary"},"primary"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"primary"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.primary")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L58"}),"packages/core/src/decorators/Property.ts:58"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"serializedname"},"serializedName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"serializedName"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.serializedName")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L61"}),"packages/core/src/decorators/Property.ts:61"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"serializedprimarykey"},"serializedPrimaryKey"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"serializedPrimaryKey"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.serializedPrimaryKey")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L59"}),"packages/core/src/decorators/Property.ts:59"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"serializer"},"serializer"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"serializer"),": (value: any) => any"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.serializer")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L60"}),"packages/core/src/decorators/Property.ts:60"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"type"},"type"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"type"),": ",'"',"string",'"'," ","|"," ",'"',"number",'"'," ","|"," ",'"',"boolean",'"'," ","|"," ",'"',"bigint",'"'," ","|"," ",'"',"ObjectId",'"'," ","|"," string ","|"," unknown ","|"," bigint ","|"," Date ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api#constructor"}),"Constructor"),"<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api/classes/type"}),"Type"),"<","any>> ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.2/api/classes/type"}),"Type"),"<","any>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.type")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L43"}),"packages/core/src/decorators/Property.ts:43"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unique"},"unique"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"unique"),": boolean ","|"," string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.unique")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L56"}),"packages/core/src/decorators/Property.ts:56"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unsigned"},"unsigned"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"unsigned"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.unsigned")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L51"}),"packages/core/src/decorators/Property.ts:51"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"version"},"version"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"version"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from __type.version")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/decorators/Property.ts#L54"}),"packages/core/src/decorators/Property.ts:54"))))}l.isMDXComponent=!0}}]);