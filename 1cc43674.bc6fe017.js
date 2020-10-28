(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(99)),i={id:"nfdump",title:"Nfdump",sidebar_label:"Nfdump"},p={unversionedId:"pipeline/nfdump",id:"pipeline/nfdump",isDocsHomePage:!1,title:"Nfdump",description:"nfdump is a toolset in order to collect and process netflow and sflow data, sent from netflow/sflow compatible devices. The toolset supports netflow v1, v5/v7,v9,IPFIX and SFLOW. nfdump supports IPv4 as well as IPv6.",source:"@site/docs/pipeline/nfdump.md",slug:"/pipeline/nfdump",permalink:"/netsage-pipeline/docs/next/pipeline/nfdump",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/docs/pipeline/nfdump.md",version:"current",sidebar_label:"Nfdump",sidebar:"Pipeline",previous:{title:"Tstat",permalink:"/netsage-pipeline/docs/next/pipeline/tstat"},next:{title:"Importer",permalink:"/netsage-pipeline/docs/next/pipeline/importer"}},c=[{value:"Netsage Usage",id:"netsage-usage",children:[]},{value:"Docker",id:"docker",children:[]}],s={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"nfdump is a toolset in order to collect and process netflow and sflow data, sent from netflow/sflow compatible devices. The toolset supports netflow v1, v5/v7,v9,IPFIX and SFLOW. nfdump supports IPv4 as well as IPv6."),Object(a.b)("h2",{id:"netsage-usage"},"Netsage Usage"),Object(a.b)("p",null,"The nfdump utility is used to collect netflow and sflow data and persisted to disk.  At which stage the data is processed by the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"importer"}),"importer")," and sent to rabbitmq.  The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"logstash"}),"logstash")," pipeline then processes the messages same as tstat with the same transformations.  The final result will eventually make it to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/netsage-project/netsage-grafana-configs"}),"grafana dashboard"),"."),Object(a.b)("h2",{id:"docker"},"Docker"),Object(a.b)("p",null,"The nfdump process can be invoked locally or using a docker container.  The docker deployment guide walks you through utilizing the docker container created.  The docker image definitions can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/netsage-project/docker-nfdump-collector"}),"here")))}l.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return n?o.a.createElement(m,p(p({ref:t},s),{},{components:n})):o.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);