(window.webpackJsonp=window.webpackJsonp||[]).push([[864],{1256:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),o=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=o(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(t),u=r,m=d["".concat(b,".").concat(u)]||d[u]||s[u]||a;return t?i.a.createElement(m,c(c({ref:n},p),{},{components:t})):i.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,b=new Array(a);b[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var p=2;p<a;p++)b[p]=t[p];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},933:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return o}));var r=t(3),i=t(7),a=(t(0),t(1256)),b={id:"knex.knex.mariasqlconnectionconfig",title:"Interface: MariaSqlConnectionConfig",sidebar_label:"MariaSqlConnectionConfig",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.mariasqlconnectionconfig",id:"version-4.4/api/interfaces/knex.knex.mariasqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MariaSqlConnectionConfig",description:"Interface: MariaSqlConnectionConfig",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.mariasqlconnectionconfig.md",slug:"/api/interfaces/knex.knex.mariasqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex.mariasqlconnectionconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.mariasqlconnectionconfig.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612304550,sidebar_label:"MariaSqlConnectionConfig",sidebar:"version-4.4/API",previous:{title:"Interface: Logger",permalink:"/docs/api/interfaces/knex.knex.logger"},next:{title:"Interface: MariaSslConfiguration",permalink:"/docs/api/interfaces/knex.knex.mariasslconfiguration"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"charset",id:"charset",children:[]},{value:"compress",id:"compress",children:[]},{value:"connTimeout",id:"conntimeout",children:[]},{value:"db",id:"db",children:[]},{value:"host",id:"host",children:[]},{value:"keepQueries",id:"keepqueries",children:[]},{value:"local_infile",id:"local_infile",children:[]},{value:"multiStatements",id:"multistatements",children:[]},{value:"password",id:"password",children:[]},{value:"pingInterval",id:"pinginterval",children:[]},{value:"port",id:"port",children:[]},{value:"protocol",id:"protocol",children:[]},{value:"read_default_file",id:"read_default_file",children:[]},{value:"read_default_group",id:"read_default_group",children:[]},{value:"secureAuth",id:"secureauth",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"streamHWM",id:"streamhwm",children:[]},{value:"unixSocket",id:"unixsocket",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],p={toc:l};function o(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-mariasqlconnectionconfig"},"Interface: MariaSqlConnectionConfig"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".MariaSqlConnectionConfig"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"MariaSqlConnectionConfig"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"charset"},"charset"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"charset"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1962"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"compress"},"compress"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"compress"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1957"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"conntimeout"},"connTimeout"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"connTimeout"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1954"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"db"},"db"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"db"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1951"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"host"},"host"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"host"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1947"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"keepqueries"},"keepQueries"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"keepQueries"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1952"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"local_infile"},"local","_","infile"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"local","_","infile"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1959"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"multistatements"},"multiStatements"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"multiStatements"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1953"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"password"},"password"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"password"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1946"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"pinginterval"},"pingInterval"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"pingInterval"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1955"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"port"},"port"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"port"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1948"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"protocol"},"protocol"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"protocol"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1950"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"read_default_file"},"read","_","default","_","file"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"read","_","default","_","file"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1960"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"read_default_group"},"read","_","default","_","group"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"read","_","default","_","group"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1961"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"secureauth"},"secureAuth"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"secureAuth"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1956"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"ssl"},"ssl"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"ssl"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.mariasslconfiguration"}),Object(a.b)("em",{parentName:"a"},"MariaSslConfiguration"))),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1958"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"streamhwm"},"streamHWM"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"streamHWM"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1963"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"unixsocket"},"unixSocket"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"unixSocket"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1949"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"user"},"user"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"user"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1945"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"expirationChecker"),":"))}o.isMDXComponent=!0}}]);