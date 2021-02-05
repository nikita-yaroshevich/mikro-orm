(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},603:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(1256)),c={id:"core.deleteoptions",title:"Interface: DeleteOptions<T>",sidebar_label:"DeleteOptions",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.deleteoptions",id:"api/interfaces/core.deleteoptions",isDocsHomePage:!1,title:"Interface: DeleteOptions<T>",description:"Interface: DeleteOptions",source:"@site/docs/api/interfaces/core.deleteoptions.md",slug:"/api/interfaces/core.deleteoptions",permalink:"/docs/next/api/interfaces/core.deleteoptions",editUrl:null,version:"current",sidebar_label:"DeleteOptions",sidebar:"API",previous:{title:"Interface: CountOptions<T>",permalink:"/docs/next/api/interfaces/core.countoptions"},next:{title:"Interface: Edge",permalink:"/docs/next/api/interfaces/core.edge"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"filters",id:"filters",children:[]}]}],l={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-deleteoptionst"},"Interface: DeleteOptions<T",">"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".DeleteOptions"),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"T"))))),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DeleteOptions"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"filters"},"filters"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"filters"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(o.b)("em",{parentName:"a"},"Dictionary")),"<",Object(o.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(o.b)("em",{parentName:"a"},"Dictionary")),"<",Object(o.b)("em",{parentName:"p"},"any"),">",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f8c626d/packages/core/src/drivers/IDatabaseDriver.ts#L122"}),"packages/core/src/drivers/IDatabaseDriver.ts:122")))}b.isMDXComponent=!0}}]);