(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{1051:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),c=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return t?i.a.createElement(m,l(l({ref:n},d),{},{components:t})):i.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},553:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(8),r=(t(0),t(1051)),o={title:"Upgrading from v2 to v3"},l={unversionedId:"upgrading-v2-to-v3",id:"version-4.4/upgrading-v2-to-v3",isDocsHomePage:!1,title:"Upgrading from v2 to v3",description:"Following sections describe (hopefully) all breaking changes, most of them might be not valid",source:"@site/versioned_docs/version-4.4/upgrading-v2-to-v3.md",slug:"/upgrading-v2-to-v3",permalink:"/docs/upgrading-v2-to-v3",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/upgrading-v2-to-v3.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1614131624},s=[{value:"Default value of autoFlush has changed to false",id:"default-value-of-autoflush-has-changed-to-false",children:[]},{value:"Reworked entity definition",id:"reworked-entity-definition",children:[]},{value:"Integrated Knex.js as query builder and runner",id:"integrated-knexjs-as-query-builder-and-runner",children:[]},{value:"ManyToMany now uses composite primary key",id:"manytomany-now-uses-composite-primary-key",children:[]},{value:"Entity references now don&#39;t have instantiated collections",id:"entity-references-now-dont-have-instantiated-collections",children:[]},{value:"EntityAssigner.assign() requires EM for new entities",id:"entityassignerassign-requires-em-for-new-entities",children:[]},{value:"Strict FilterQuery and smart query conditions",id:"strict-filterquery-and-smart-query-conditions",children:[]},{value:"Logging configuration",id:"logging-configuration",children:[]},{value:"Removed deprecated fk option from 1:m and m:1 decorators",id:"removed-deprecated-fk-option-from-1m-and-m1-decorators",children:[]},{value:"SchemaGenerator.generate() is now async",id:"schemageneratorgenerate-is-now-async",children:[]},{value:"New method on NamingStrategy interface",id:"new-method-on-namingstrategy-interface",children:[]},{value:"TypescriptMetadataProvider has been renamed",id:"typescriptmetadataprovider-has-been-renamed",children:[]},{value:"Updated mongodb driver",id:"updated-mongodb-driver",children:[]},{value:"EntityManager.find() now requires where parameter",id:"entitymanagerfind-now-requires-where-parameter",children:[]}],d={toc:s};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Following sections describe (hopefully) all breaking changes, most of them might be not valid\nfor you, like if you do not use custom ",Object(r.b)("inlineCode",{parentName:"p"},"NamingStrategy")," implementation, you do not care about\nthe interface being changed."),Object(r.b)("h2",{id:"default-value-of-autoflush-has-changed-to-false"},"Default value of autoFlush has changed to false"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you had ",Object(r.b)("inlineCode",{parentName:"p"},"autoFlush: false")," in your ORM configuration before, you can now remove\nthis line, no changes are needed in your app. ")),Object(r.b)("p",null,"Default value for ",Object(r.b)("inlineCode",{parentName:"p"},"autoFlush")," is now ",Object(r.b)("inlineCode",{parentName:"p"},"false"),". That means you need to call\n",Object(r.b)("inlineCode",{parentName:"p"},"em.flush()")," yourself to persist changes into database. You can still change this via ORM's\noptions to ease the transition but generally it is not recommended as it can cause unwanted\nsmall transactions being created around each ",Object(r.b)("inlineCode",{parentName:"p"},"persist"),". "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"orm.em.persist(new Entity()); // no auto-flushing by default\nawait orm.em.flush();\nawait orm.em.persist(new Entity(), true); // you can still use second parameter to auto-flush\n")),Object(r.b)("h2",{id:"reworked-entity-definition"},"Reworked entity definition"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Implementing those interfaces is optional.  ")),Object(r.b)("p",null,"Now it is no longer needed to merge entities with ",Object(r.b)("inlineCode",{parentName:"p"},"IEntity")," interface, that was polluting entity's\ninterface with internal methods. New interfaces ",Object(r.b)("inlineCode",{parentName:"p"},"IdentifiedEntity<T>"),", ",Object(r.b)("inlineCode",{parentName:"p"},"UuidEntity<T>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"MongoEntity<T>"),"\nare introduced, that can be implemented by entities. They are not adding any new properties or methods,\nkeeping the entity's interface clean. This is also the reason why they can be omitted."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"IEntity")," interface has been renamed to ",Object(r.b)("inlineCode",{parentName:"p"},"AnyEntity<T, PK>")," and it no longer has public methods\nlike ",Object(r.b)("inlineCode",{parentName:"p"},"toJSON()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"toObject()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"init()"),". One can use ",Object(r.b)("inlineCode",{parentName:"p"},"wrap()")," method provided by ORM that\nwill enhance property type when needed with those methods (",Object(r.b)("inlineCode",{parentName:"p"},"await wrap(book.author).init()"),").\nTo keep all methods available on the entity, you can still use interface merging with\n",Object(r.b)("inlineCode",{parentName:"p"},"WrappedEntity<T, PK>")," that both extends ",Object(r.b)("inlineCode",{parentName:"p"},"AnyEntity<T, PK>")," and defines all those methods."),Object(r.b)("p",null,"You can mark the entity by implementing one of ",Object(r.b)("inlineCode",{parentName:"p"},"*Entity")," interfaces:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IdEntity<T>")," for numeric/string PK on ",Object(r.b)("inlineCode",{parentName:"li"},"id")," property (",Object(r.b)("inlineCode",{parentName:"li"},"id: number"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UuidEntity<T>")," for string PK on ",Object(r.b)("inlineCode",{parentName:"li"},"uuid")," property (",Object(r.b)("inlineCode",{parentName:"li"},"uuid: string"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MongoEntity<T>")," for mongo, where ",Object(r.b)("inlineCode",{parentName:"li"},"id: string")," and ",Object(r.b)("inlineCode",{parentName:"li"},"_id: ObjectId")," are required"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AnyEntity<T, PK>")," for other possible properties (fill the PK property name to ",Object(r.b)("inlineCode",{parentName:"li"},"PK"),"\nparameter, e.g.: ",Object(r.b)("inlineCode",{parentName:"li"},"AnyEntity<Book, 'myPrimaryProperty'>'"),")")),Object(r.b)("p",null,"To keep all public methods that were part of ",Object(r.b)("inlineCode",{parentName:"p"},"IEntity")," interface in v2, you can use\n",Object(r.b)("inlineCode",{parentName:"p"},"WrappedEntity<T, PK>")," via interface merging:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book { ... }\nexport interface Book extends WrappedEntity<Book, 'id'> { }\n")),Object(r.b)("p",null,"For more examples, take a look at ",Object(r.b)("a",{parentName:"p",href:"/docs/defining-entities"},"defining entities section"),"."),Object(r.b)("h2",{id:"integrated-knexjs-as-query-builder-and-runner"},"Integrated Knex.js as query builder and runner"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"QueryBuilder")," now internally uses knex to run all queries. As knex already supports connection\npooling, this feature comes without any effort. New configuration for pooling is now available"),Object(r.b)("p",null,"Transactions now require using ",Object(r.b)("inlineCode",{parentName:"p"},"em.transactional()")," method, previous helpers\n",Object(r.b)("inlineCode",{parentName:"p"},"beginTransaction"),"/",Object(r.b)("inlineCode",{parentName:"p"},"commit"),"/",Object(r.b)("inlineCode",{parentName:"p"},"rollback")," are now removed."),Object(r.b)("p",null,"All transaction management has been removed from ",Object(r.b)("inlineCode",{parentName:"p"},"IDatabaseDriver")," interface, now EM handles\nthis, passing the transaction context (carried by EM, and created by ",Object(r.b)("inlineCode",{parentName:"p"},"Connection"),") to all\ndriver methods. New methods on EM exists: ",Object(r.b)("inlineCode",{parentName:"p"},"isInTransaction()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"getTransactionContext()"),"."),Object(r.b)("p",null,"In postgres driver, it used to be required to pass parameters as indexed dollar sign\n($1, $2, ...), while now knex requires the placeholder to be simple question mark (",Object(r.b)("inlineCode",{parentName:"p"},"?"),"),\nlike in other dialects, so this is now unified with other drivers."),Object(r.b)("h2",{id:"manytomany-now-uses-composite-primary-key"},"ManyToMany now uses composite primary key"),Object(r.b)("p",null,"Previously it was required to have autoincrement primary key for m:n pivot tables. Now this\nhas changed. By default, only foreign columns are required and composite key over both of them\nis used as primary key."),Object(r.b)("p",null,"To preserve stable order of collections, you can force previous behaviour by defining the\nm:n property as ",Object(r.b)("inlineCode",{parentName:"p"},"fixedOrder: true"),", which will start ordering by ",Object(r.b)("inlineCode",{parentName:"p"},"id")," column. You can also\noverride the order column name via ",Object(r.b)("inlineCode",{parentName:"p"},"fixedOrderColumn: 'order'"),". "),Object(r.b)("p",null,"You can also specify default ordering via ",Object(r.b)("inlineCode",{parentName:"p"},"orderBy: { ... }")," attribute."),Object(r.b)("h2",{id:"entity-references-now-dont-have-instantiated-collections"},"Entity references now don't have instantiated collections"),Object(r.b)("p",null,"Previously all entity instances, including entity references (not fully loaded entities where\nwe know only the primary key), had instantiated collection classes. Now only initialized entities\nhave them."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const book = em.getReference(Book, 1);\nconsole.log(book.tags); // undefined\nawait book.init();\nconsole.log(book.tags); // instance of Collection (not initialized)\n")),Object(r.b)("h2",{id:"entityassignerassign-requires-em-for-new-entities"},"EntityAssigner.assign() requires EM for new entities"),Object(r.b)("p",null,"Previously all entities had internal reference to the root EM - the one created when\ninitializing the ORM. Now only managed entities (those merged to the EM, e.g. loaded\nfrom the database) have this internal reference. "),Object(r.b)("p",null,"To use ",Object(r.b)("inlineCode",{parentName:"p"},"assign()")," method on new (not managed) entities, you need to provide the ",Object(r.b)("inlineCode",{parentName:"p"},"em"),"\nparameter:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const book = new Book();\nwrap(book).assign(data, { em: orm.em });\n")),Object(r.b)("h2",{id:"strict-filterquery-and-smart-query-conditions"},"Strict FilterQuery and smart query conditions"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"FilterQuery")," now does not allow using smart query operators. You can either cast your condition\nas any or use object syntax instead (instead of ",Object(r.b)("inlineCode",{parentName:"p"},"{ 'age:gte': 18 }")," use ",Object(r.b)("inlineCode",{parentName:"p"},"{ age: { $gte: 18 } }"),")."),Object(r.b)("h2",{id:"logging-configuration"},"Logging configuration"),Object(r.b)("p",null,"Previously to start logging it was required to provide your custom logger. Logger now defaults\nto ",Object(r.b)("inlineCode",{parentName:"p"},"console.log()"),", and users can specify what namespaces are they interested in via ",Object(r.b)("inlineCode",{parentName:"p"},"debug"),"\noption. ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"/",Object(r.b)("inlineCode",{parentName:"p"},"false")," will enable/disable all namespaces."),Object(r.b)("p",null,"Available logger namespaces: ",Object(r.b)("inlineCode",{parentName:"p"},"'query' | 'query-params' | 'discovery' | 'info'"),"."),Object(r.b)("h2",{id:"removed-deprecated-fk-option-from-1m-and-m1-decorators"},"Removed deprecated fk option from 1:m and m:1 decorators"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"mappedBy"),"/",Object(r.b)("inlineCode",{parentName:"p"},"inversedBy")," instead."),Object(r.b)("h2",{id:"schemageneratorgenerate-is-now-async"},"SchemaGenerator.generate() is now async"),Object(r.b)("p",null,"If you used ",Object(r.b)("inlineCode",{parentName:"p"},"SchemaGenerator"),", now there is CLI tool you can use instead. Learn more\nin ",Object(r.b)("a",{parentName:"p",href:"/docs/schema-generator"},"SchemaGenerator docs"),". To setup CLI, take a look at\n",Object(r.b)("a",{parentName:"p",href:"/docs/installation"},"installation section"),"."),Object(r.b)("h2",{id:"new-method-on-namingstrategy-interface"},"New method on NamingStrategy interface"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"getClassName()")," is used to find entity class name based on its file name. Now users can\noverride the default implementation to accommodate their specific needs."),Object(r.b)("p",null,"If you used custom naming strategy, you will either need to implement this method yourself,\nor extend ",Object(r.b)("inlineCode",{parentName:"p"},"AbstractNamingStrategy"),"."),Object(r.b)("h2",{id:"typescriptmetadataprovider-has-been-renamed"},"TypescriptMetadataProvider has been renamed"),Object(r.b)("p",null,"The name is now ",Object(r.b)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),", there is also newly added ",Object(r.b)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),"\nthat uses ",Object(r.b)("inlineCode",{parentName:"p"},"reflect-metadata")," instead. As ",Object(r.b)("inlineCode",{parentName:"p"},"TypescriptMetadataProvider")," was the default, no\nchanges should be required. "),Object(r.b)("h2",{id:"updated-mongodb-driver"},"Updated mongodb driver"),Object(r.b)("p",null,"MongoDB driver version 3.3.4 or higher is now required."),Object(r.b)("h2",{id:"entitymanagerfind-now-requires-where-parameter"},"EntityManager.find() now requires where parameter"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"EntityManager")," has now same ",Object(r.b)("inlineCode",{parentName:"p"},"find")," method interface aligned with ",Object(r.b)("inlineCode",{parentName:"p"},"EntityRepository"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"where")," parameter is now required. To select all entities, use ",Object(r.b)("inlineCode",{parentName:"p"},"em.find(Entity, {})"),"\nas value."))}c.isMDXComponent=!0}}]);