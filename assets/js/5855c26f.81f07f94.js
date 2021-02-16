(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,m=d["".concat(o,".").concat(s)]||d[s]||u[s]||l;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),l=(n(0),n(1051)),o={title:"Smart Query Conditions"},i={unversionedId:"query-conditions",id:"version-4.4/query-conditions",isDocsHomePage:!1,title:"Smart Query Conditions",description:"When you want to make complex queries, you can easily end up with a lot of boilerplate code",source:"@site/versioned_docs/version-4.4/query-conditions.md",slug:"/query-conditions",permalink:"/docs/query-conditions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/query-conditions.md",version:"4.4",lastUpdatedBy:"Jens Mikkelsen",lastUpdatedAt:1613503743,sidebar:"version-4.4/docs",previous:{title:"Smart Nested Populate",permalink:"/docs/nested-populate"},next:{title:"Propagation",permalink:"/docs/propagation"}},c=[{value:"List of supported operators",id:"list-of-supported-operators",children:[{value:"Comparison",id:"comparison",children:[]},{value:"Logical",id:"logical",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"When you want to make complex queries, you can easily end up with a lot of boilerplate code\nfull of curly brackets:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { id: { $in: [1, 2, 7] }, },\n  { id: { $nin: [3, 4] }, },\n  { id: { $gt: 5 }, },\n  { id: { $lt: 10 }, },\n  { id: { $gte: 7 }, },\n  { id: { $lte: 8 }, },\n  { id: { $ne: 9 }, },\n] });\n")),Object(l.b)("p",null,"For AND condition with single field, you can also do this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { \n  id: { \n    $in: [1, 2, 7],\n    $nin: [3, 4],\n    $gt: 5,\n    $lt: 10,\n    $gte: 7,\n    $lte: 8,\n    $ne: 9,\n  },\n});\n")),Object(l.b)("p",null,"Another way to do this by including the operator in your keys:"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This approach is deprecated and will be removed in future versions.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { 'id:in': [1, 2, 7] },\n  { 'id:nin': [3, 4] },\n  { 'id:gt': 5 },\n  { 'id:lt': 10 },\n  { 'id:gte': 7 },\n  { 'id:lte': 8 },\n  { 'id:ne': 9 },\n] });\n")),Object(l.b)("p",null,"For comparison operators, you can also use their mathematical symbols:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { 'id >': 5 },\n  { 'id <': 10 },\n  { 'id >=': 7 },\n  { 'id <=': 8 },\n  { 'id !=': 9 },\n] });\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Keys with operators like this will cause TypeScript errors as there is no way to support\nthem on the typings side. They are still supported, but you will need to cast the condition\nto ",Object(l.b)("inlineCode",{parentName:"p"},"any")," to use them. ")),Object(l.b)("p",null,"There is also shortcut for ",Object(l.b)("inlineCode",{parentName:"p"},"$in")," - simply provide array as value and it\nwill be converted automatically:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { favouriteBook: [1, 2, 7] });\n")),Object(l.b)("p",null,"For primary key lookup, you can provide the array directly to ",Object(l.b)("inlineCode",{parentName:"p"},"em.find()"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, [1, 2, 7]);\n")),Object(l.b)("h2",{id:"list-of-supported-operators"},"List of supported operators"),Object(l.b)("h3",{id:"comparison"},"Comparison"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"operator"),Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$eq")),Object(l.b)("td",{parentName:"tr",align:null},"equals"),Object(l.b)("td",{parentName:"tr",align:null},"Matches values that are equal to a specified value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$gt")),Object(l.b)("td",{parentName:"tr",align:null},"greater"),Object(l.b)("td",{parentName:"tr",align:null},"Matches values that are greater than a specified value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$gte")),Object(l.b)("td",{parentName:"tr",align:null},"greater or equal"),Object(l.b)("td",{parentName:"tr",align:null},"Matches values that are greater than or equal to a specified value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$in")),Object(l.b)("td",{parentName:"tr",align:null},"contains"),Object(l.b)("td",{parentName:"tr",align:null},"Matches any of the values specified in an array.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$lt")),Object(l.b)("td",{parentName:"tr",align:null},"lower"),Object(l.b)("td",{parentName:"tr",align:null},"Matches values that are less than a specified value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$lte")),Object(l.b)("td",{parentName:"tr",align:null},"lower or equal"),Object(l.b)("td",{parentName:"tr",align:null},"Matches values that are less than or equal to a specified value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$ne")),Object(l.b)("td",{parentName:"tr",align:null},"not equal"),Object(l.b)("td",{parentName:"tr",align:null},"Matches all values that are not equal to a specified value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$nin")),Object(l.b)("td",{parentName:"tr",align:null},"not contains"),Object(l.b)("td",{parentName:"tr",align:null},"Matches none of the values specified in an array.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$like")),Object(l.b)("td",{parentName:"tr",align:null},"like"),Object(l.b)("td",{parentName:"tr",align:null},"Uses LIKE operator")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$re")),Object(l.b)("td",{parentName:"tr",align:null},"regexp"),Object(l.b)("td",{parentName:"tr",align:null},"Uses REGEXP operator")))),Object(l.b)("h3",{id:"logical"},"Logical"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"operator"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$and")),Object(l.b)("td",{parentName:"tr",align:null},"Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$not")),Object(l.b)("td",{parentName:"tr",align:null},"Inverts the effect of a query expression and returns documents that do not match the query expression.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$or")),Object(l.b)("td",{parentName:"tr",align:null},"Joins query clauses with a logical OR returns all documents that match the conditions of either clause.")))))}p.isMDXComponent=!0}}]);