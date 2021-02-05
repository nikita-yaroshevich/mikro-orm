(window.webpackJsonp=window.webpackJsonp||[]).push([[860],{1256:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),s=function(e){var r=c.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return c.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},f=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=n,m=p["".concat(o,".").concat(f)]||p[f]||b[f]||a;return t?c.a.createElement(m,i(i({ref:r},u),{},{components:t})):c.a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},929:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),c=t(7),a=(t(0),t(1256)),o={id:"cli.cliconfigurator",title:"Class: CLIConfigurator",sidebar_label:"CLIConfigurator",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/cli.cliconfigurator",id:"api/classes/cli.cliconfigurator",isDocsHomePage:!1,title:"Class: CLIConfigurator",description:"Class: CLIConfigurator",source:"@site/docs/api/classes/cli.cliconfigurator.md",slug:"/api/classes/cli.cliconfigurator",permalink:"/docs/next/api/classes/cli.cliconfigurator",editUrl:null,version:"current",sidebar_label:"CLIConfigurator",sidebar:"API",previous:{title:"Enumeration: QueryType",permalink:"/docs/next/api/enums/knex.querytype"},next:{title:"Class: CLIHelper",permalink:"/docs/next/api/classes/cli.clihelper"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"configure",id:"configure",children:[]}]}],u={toc:l};function s(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"class-cliconfigurator"},"Class: CLIConfigurator"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/cli"}),"cli"),".CLIConfigurator"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CLIConfigurator"))),Object(a.b)("h2",{id:"constructors"},"Constructors"),Object(a.b)("h3",{id:"constructor"},"constructor"),Object(a.b)("p",null,"+"," ",Object(a.b)("strong",{parentName:"p"},"new CLIConfigurator"),"(): ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/cli.cliconfigurator"}),Object(a.b)("em",{parentName:"a"},"CLIConfigurator"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/cli.cliconfigurator"}),Object(a.b)("em",{parentName:"a"},"CLIConfigurator"))),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"configure"},"configure"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("inlineCode",{parentName:"p"},"Static"),Object(a.b)("strong",{parentName:"p"},"configure"),"(): ",Object(a.b)("em",{parentName:"p"},"Promise"),"<",Object(a.b)("em",{parentName:"p"},"Argv"),"<{}",">",">"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"Promise"),"<",Object(a.b)("em",{parentName:"p"},"Argv"),"<{}",">",">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f8c626d/packages/cli/src/CLIConfigurator.ts#L14"}),"packages/cli/src/CLIConfigurator.ts:14")))}s.isMDXComponent=!0}}]);