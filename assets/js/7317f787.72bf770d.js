(window.webpackJsonp=window.webpackJsonp||[]).push([[516],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},586:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(1256)),i={title:"Unit of Work and Transactions",sidebar_label:"Unit of Work"},s={unversionedId:"unit-of-work",id:"version-4.1/unit-of-work",isDocsHomePage:!1,title:"Unit of Work and Transactions",description:"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from",source:"@site/versioned_docs/version-4.1/unit-of-work.md",slug:"/unit-of-work",permalink:"/docs/4.1/unit-of-work",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/unit-of-work.md",version:"4.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612454853,sidebar_label:"Unit of Work",sidebar:"version-4.1/docs",previous:{title:"Working with Entity Manager",permalink:"/docs/4.1/entity-manager"},next:{title:"Identity Map and Request Context",permalink:"/docs/4.1/identity-map"}},c=[{value:"Persisting Managed Entities",id:"persisting-managed-entities",children:[]},{value:"How MikroORM Detects Changes",id:"how-mikroorm-detects-changes",children:[]},{value:"Implicit Transactions",id:"implicit-transactions",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from\nthe database, MikroORM will keep a reference to this object inside its ",Object(r.b)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),Object(r.b)("p",null,"This allows MikroORM room for optimizations. If you call the EntityManager and ask for an\nentity with a specific ID twice, it will return the same instance:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne(1);\nconst jon2 = await authorRepository.findOne(1);\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),Object(r.b)("p",null,"Only one SELECT query will be fired against the database here. In the second ",Object(r.b)("inlineCode",{parentName:"p"},"findOne()"),"\ncall MikroORM will check the identity map first and will skip the database round trip as\nit will find the entity already loaded."),Object(r.b)("p",null,"The identity map being indexed by primary keys only allows shortcuts when you ask for objects\nby primary key. When you query by other properties, you will still get the same reference,\nbut two separate database calls will be made:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne({ name: 'Jon Snow' });\nconst jon2 = await authorRepository.findOne({ name: 'Jon Snow' });\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),Object(r.b)("p",null,"MikroORM only knows objects by id, so a query for different criteria has to go to the database,\neven if it was executed just before. But instead of creating a second ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," object MikroORM\nfirst gets the primary key from the row and checks if it already has an object inside the\n",Object(r.b)("inlineCode",{parentName:"p"},"UnitOfWork")," with that primary key. "),Object(r.b)("h2",{id:"persisting-managed-entities"},"Persisting Managed Entities"),Object(r.b)("p",null,"The identity map has a second use-case. When you call ",Object(r.b)("inlineCode",{parentName:"p"},"em.flush()"),", MikroORM will\nask the identity map for all objects that are currently managed. This means you don't have to\ncall ",Object(r.b)("inlineCode",{parentName:"p"},"em.persist()")," over and over again to pass known objects to the\n",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager"),". This is a NO-OP for known entities, but leads to much code written that is\nconfusing to other developers."),Object(r.b)("p",null,"The following code WILL update your database with the changes made to the ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," object,\neven if you did not call ",Object(r.b)("inlineCode",{parentName:"p"},"em.persist()"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne(1);\njon.email = 'foo@bar.com';\nawait authorRepository.flush(); // calling orm.em.flush() has same effect\n")),Object(r.b)("h2",{id:"how-mikroorm-detects-changes"},"How MikroORM Detects Changes"),Object(r.b)("p",null,'MikroORM is a data-mapper that tries to achieve persistence-ignorance (PI). This means you\nmap JS objects into a relational database that do not necessarily know about the database at\nall. A natural question would now be, "how does MikroORM even detect objects have changed?".'),Object(r.b)("p",null,"For this MikroORM keeps a second map inside the ",Object(r.b)("inlineCode",{parentName:"p"},"UnitOfWork"),". Whenever you fetch an object\nfrom the database MikroORM will keep a copy of all the properties and associations inside\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),Object(r.b)("p",null,"Now whenever you call ",Object(r.b)("inlineCode",{parentName:"p"},"em.flush()")," MikroORM will iterate over all entities you\npreviously marked for persisting via ",Object(r.b)("inlineCode",{parentName:"p"},"em.persist()"),". For each object it will\ncompare the original property and association values with the values that are currently set\non the object. If changes are detected then the object is queued for a UPDATE operation.\nOnly the fields that actually changed are updated."),Object(r.b)("h2",{id:"implicit-transactions"},"Implicit Transactions"),Object(r.b)("p",null,"First and most important implication of having Unit of Work is that it allows handling\ntransactions automatically. "),Object(r.b)("p",null,"When you call ",Object(r.b)("inlineCode",{parentName:"p"},"em.flush()"),", all computed changes are queried inside a database\ntransaction (if supported by given driver). This means that you can control the boundaries\nof transactions simply by calling ",Object(r.b)("inlineCode",{parentName:"p"},"em.persist()")," and once all your changes\nare ready, simply calling ",Object(r.b)("inlineCode",{parentName:"p"},"flush()")," will run them inside a transaction. "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can also control the transaction boundaries manually via ",Object(r.b)("inlineCode",{parentName:"p"},"em.transactional(cb)"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const user = await em.findOne(User, 1);\nuser.email = 'foo@bar.com';\nconst car = new Car();\nuser.cars.add(car);\n\n// thanks to bi-directional cascading we only need to persist user entity\n// flushing will create a transaction, insert new car and update user with new email\nawait em.persistAndFlush(user);\n")),Object(r.b)("p",null,"You can find more information about transactions in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.1/transactions"}),"Transactions and concurrency"),"\npage."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.doctrine-project.org/projects/doctrine-orm/en/2.6/reference/unitofwork.html"}),"doctrine internals docs"),"\nas the behaviour here is pretty much the same.")))}p.isMDXComponent=!0}}]);