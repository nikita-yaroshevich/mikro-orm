(window.webpackJsonp=window.webpackJsonp||[]).push([[927],{1048:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),m=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=m(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),l=m(r),O=n,d=l["".concat(p,".").concat(O)]||l[O]||s[O]||b;return r?a.a.createElement(d,c(c({ref:t},o),{},{components:r})):a.a.createElement(d,c({ref:t},o))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,p=new Array(b);p[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var o=2;o<b;o++)p[o]=r[o];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},999:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(8),b=(r(0),r(1048)),p={id:"core.entityproperty",title:"Interface: EntityProperty<T>",sidebar_label:"EntityProperty",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/core.entityproperty",id:"api/interfaces/core.entityproperty",isDocsHomePage:!1,title:"Interface: EntityProperty<T>",description:"Interface: EntityProperty",source:"@site/docs/api/interfaces/core.entityproperty.md",slug:"/api/interfaces/core.entityproperty",permalink:"/docs/next/api/interfaces/core.entityproperty",editUrl:null,version:"current",sidebar_label:"EntityProperty",sidebar:"API",previous:{title:"Interface: Edge",permalink:"/docs/next/api/interfaces/core.edge"},next:{title:"Interface: EnumOptions<T>",permalink:"/docs/next/api/interfaces/core.enumoptions"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"array",id:"array",children:[]},{value:"cascade",id:"cascade",children:[]},{value:"columnTypes",id:"columntypes",children:[]},{value:"comment",id:"comment",children:[]},{value:"customType",id:"customtype",children:[]},{value:"default",id:"default",children:[]},{value:"defaultRaw",id:"defaultraw",children:[]},{value:"eager",id:"eager",children:[]},{value:"embeddable",id:"embeddable",children:[]},{value:"embedded",id:"embedded",children:[]},{value:"embeddedProps",id:"embeddedprops",children:[]},{value:"entity",id:"entity",children:[]},{value:"enum",id:"enum",children:[]},{value:"fieldNameRaw",id:"fieldnameraw",children:[]},{value:"fieldNames",id:"fieldnames",children:[]},{value:"fixedOrder",id:"fixedorder",children:[]},{value:"fixedOrderColumn",id:"fixedordercolumn",children:[]},{value:"formula",id:"formula",children:[]},{value:"getter",id:"getter",children:[]},{value:"getterName",id:"gettername",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"index",id:"index",children:[]},{value:"inherited",id:"inherited",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"inversedBy",id:"inversedby",children:[]},{value:"items",id:"items",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"lazy",id:"lazy",children:[]},{value:"length",id:"length",children:[]},{value:"mapToPk",id:"maptopk",children:[]},{value:"mappedBy",id:"mappedby",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"object",id:"object",children:[]},{value:"onCreate",id:"oncreate",children:[]},{value:"onDelete",id:"ondelete",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"onUpdateIntegrity",id:"onupdateintegrity",children:[]},{value:"orderBy",id:"orderby",children:[]},{value:"orphanRemoval",id:"orphanremoval",children:[]},{value:"owner",id:"owner",children:[]},{value:"persist",id:"persist",children:[]},{value:"pivotTable",id:"pivottable",children:[]},{value:"prefix",id:"prefix",children:[]},{value:"primary",id:"primary",children:[]},{value:"reference",id:"reference",children:[]},{value:"referencedColumnNames",id:"referencedcolumnnames",children:[]},{value:"referencedPKs",id:"referencedpks",children:[]},{value:"referencedTableName",id:"referencedtablename",children:[]},{value:"serializedName",id:"serializedname",children:[]},{value:"serializedPrimaryKey",id:"serializedprimarykey",children:[]},{value:"serializer",id:"serializer",children:[]},{value:"setter",id:"setter",children:[]},{value:"strategy",id:"strategy",children:[]},{value:"targetMeta",id:"targetmeta",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"userDefined",id:"userdefined",children:[]},{value:"version",id:"version",children:[]},{value:"wrappedReference",id:"wrappedreference",children:[]}]}],o={toc:i};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-entitypropertyt"},"Interface: EntityProperty<T",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".EntityProperty"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"EntityProperty"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"array"},"array"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"array"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L135"},"packages/core/src/typings.ts:135")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"cascade"},"cascade"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"cascade"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/enums/core.cascade"},Object(b.b)("em",{parentName:"a"},"Cascade")),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L164"},"packages/core/src/typings.ts:164")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"columntypes"},"columnTypes"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"columnTypes"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L130"},"packages/core/src/typings.ts:130")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"comment"},"comment"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"comment"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L185"},"packages/core/src/typings.ts:185")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"customtype"},"customType"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"customType"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L131"},"packages/core/src/typings.ts:131")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"default"},"default"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"default"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L141"},"packages/core/src/typings.ts:141")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"defaultraw"},"defaultRaw"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"defaultRaw"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L142"},"packages/core/src/typings.ts:142")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"eager"},"eager"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"eager"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L160"},"packages/core/src/typings.ts:160")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"embeddable"},"embeddable"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"embeddable"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#constructor"},Object(b.b)("em",{parentName:"a"},"Constructor")),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L146"},"packages/core/src/typings.ts:146")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"embedded"},"embedded"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"embedded"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ","[",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("em",{parentName:"p"},"string"),"]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L145"},"packages/core/src/typings.ts:145")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"embeddedprops"},"embeddedProps"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"embeddedProps"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L147"},"packages/core/src/typings.ts:147")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"entity"},"entity"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"entity"),": () => ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#entityname"},Object(b.b)("em",{parentName:"a"},"EntityName")),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L127"},"packages/core/src/typings.ts:127")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"enum"},"enum"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"enum"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L157"},"packages/core/src/typings.ts:157")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fieldnameraw"},"fieldNameRaw"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"fieldNameRaw"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L140"},"packages/core/src/typings.ts:140")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fieldnames"},"fieldNames"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"fieldNames"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L139"},"packages/core/src/typings.ts:139")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fixedorder"},"fixedOrder"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"fixedOrder"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L175"},"packages/core/src/typings.ts:175")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fixedordercolumn"},"fixedOrderColumn"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"fixedOrderColumn"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L176"},"packages/core/src/typings.ts:176")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"formula"},"formula"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"formula"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(b.b)("em",{parentName:"p"},"string"),") => ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L143"},"packages/core/src/typings.ts:143")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getter"},"getter"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"getter"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L162"},"packages/core/src/typings.ts:162")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettername"},"getterName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"getterName"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," keyof T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L163"},"packages/core/src/typings.ts:163")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hidden"},"hidden"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"hidden"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L156"},"packages/core/src/typings.ts:156")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"index"},"index"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"index"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L149"},"packages/core/src/typings.ts:149")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"inherited"},"inherited"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"inherited"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L152"},"packages/core/src/typings.ts:152")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"inverseJoinColumns"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L179"},"packages/core/src/typings.ts:179")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"inversedby"},"inversedBy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"inversedBy"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L172"},"packages/core/src/typings.ts:172")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"items"},"items"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"items"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number"),")[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L158"},"packages/core/src/typings.ts:158")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"joincolumns"},"joinColumns"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"joinColumns"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L178"},"packages/core/src/typings.ts:178")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"lazy"},"lazy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"lazy"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L134"},"packages/core/src/typings.ts:134")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"length"},"length"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"length"),": ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L136"},"packages/core/src/typings.ts:136")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"maptopk"},"mapToPk"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"mapToPk"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L154"},"packages/core/src/typings.ts:154")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"mappedby"},"mappedBy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"mappedBy"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L173"},"packages/core/src/typings.ts:173")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"name"},"name"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string")," & keyof T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L126"},"packages/core/src/typings.ts:126")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nullable"},"nullable"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"nullable"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L151"},"packages/core/src/typings.ts:151")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"object"},"object"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"object"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L148"},"packages/core/src/typings.ts:148")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"oncreate"},"onCreate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onCreate"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T) => ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L166"},"packages/core/src/typings.ts:166")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ondelete"},"onDelete"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onDelete"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L168"},"packages/core/src/typings.ts:168")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onupdate"},"onUpdate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onUpdate"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T) => ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L167"},"packages/core/src/typings.ts:167")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onupdateintegrity"},"onUpdateIntegrity"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onUpdateIntegrity"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L169"},"packages/core/src/typings.ts:169")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"orderby"},"orderBy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"orderBy"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," { ","[field: string]",": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/enums/core.queryorder"},Object(b.b)("em",{parentName:"a"},"QueryOrder")),";  }"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L174"},"packages/core/src/typings.ts:174")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"orphanremoval"},"orphanRemoval"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"orphanRemoval"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L165"},"packages/core/src/typings.ts:165")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"owner"},"owner"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"owner"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L171"},"packages/core/src/typings.ts:171")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"persist"},"persist"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"persist"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L155"},"packages/core/src/typings.ts:155")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"pivottable"},"pivotTable"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"pivotTable"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L177"},"packages/core/src/typings.ts:177")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"prefix"},"prefix"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"prefix"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L144"},"packages/core/src/typings.ts:144")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"primary"},"primary"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"primary"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L132"},"packages/core/src/typings.ts:132")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"reference"},"reference"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"reference"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/enums/core.referencetype"},Object(b.b)("em",{parentName:"a"},"ReferenceType"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L137"},"packages/core/src/typings.ts:137")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"referencedcolumnnames"},"referencedColumnNames"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"referencedColumnNames"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L180"},"packages/core/src/typings.ts:180")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"referencedpks"},"referencedPKs"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"referencedPKs"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L182"},"packages/core/src/typings.ts:182")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"referencedtablename"},"referencedTableName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"referencedTableName"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L181"},"packages/core/src/typings.ts:181")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"serializedname"},"serializedName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"serializedName"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L184"},"packages/core/src/typings.ts:184")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"serializedprimarykey"},"serializedPrimaryKey"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"serializedPrimaryKey"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L133"},"packages/core/src/typings.ts:133")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"serializer"},"serializer"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"serializer"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"any"),") => ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L183"},"packages/core/src/typings.ts:183")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setter"},"setter"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"setter"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L161"},"packages/core/src/typings.ts:161")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"strategy"},"strategy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"strategy"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/enums/core.loadstrategy#select_in"},Object(b.b)("em",{parentName:"a"},"SELECT","_","IN"))," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/enums/core.loadstrategy#joined"},Object(b.b)("em",{parentName:"a"},"JOINED"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L170"},"packages/core/src/typings.ts:170")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"targetmeta"},"targetMeta"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"targetMeta"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L129"},"packages/core/src/typings.ts:129")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"type"},"type"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"type"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L128"},"packages/core/src/typings.ts:128")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unique"},"unique"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"unique"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L150"},"packages/core/src/typings.ts:150")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unsigned"},"unsigned"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"unsigned"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L153"},"packages/core/src/typings.ts:153")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"userdefined"},"userDefined"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"userDefined"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L186"},"packages/core/src/typings.ts:186")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"version"},"version"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"version"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L159"},"packages/core/src/typings.ts:159")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"wrappedreference"},"wrappedReference"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"wrappedReference"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4448285/packages/core/src/typings.ts#L138"},"packages/core/src/typings.ts:138")))}m.isMDXComponent=!0}}]);