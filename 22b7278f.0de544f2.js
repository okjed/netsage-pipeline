(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{102:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||u[f]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(102)),i={id:"intro",title:"Intro",sidebar_label:"Intro"},c={unversionedId:"pipeline/intro",id:"pipeline/intro",isDocsHomePage:!1,title:"Intro",description:"The NetSage Pipeline",source:"@site/docs/pipeline/intro.md",slug:"/pipeline/intro",permalink:"/netsage-pipeline/docs/next/pipeline/intro",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/docs/pipeline/intro.md",version:"current",sidebar_label:"Intro"},l=[{value:"Components",id:"components",children:[]},{value:"Sensors and Data Collection",id:"sensors-and-data-collection",children:[{value:"Importer",id:"importer",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"the-netsage-pipeline"},"The NetSage Pipeline"),Object(o.b)("h1",{id:"description"},"Description"),Object(o.b)("p",null,"The Netsage Flow Processing Pipeline includes several components for processing network flow data, including importing, deidentification, metadata tagging, flow stitching, etc."),Object(o.b)("h2",{id:"components"},"Components"),Object(o.b)("p",null,"The Pipeline is made of the following components (Currently)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/netsage-project/netsage-pipeline/blob/master/lib/GRNOC/NetSage/Deidentifier/NetflowImporter.pm"}),"Importer"),"  (Collection of perl scripts)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"importer"}),"doc")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.elastic.co/logstash"}),"Elastic Logstash")," Performs a variety of transformation on the data",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"logstash"}),"doc")," "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.rabbitmq.com/"}),"RabbitMQ")," used for message passing and queing of tasks.")),Object(o.b)("h2",{id:"sensors-and-data-collection"},"Sensors and Data Collection"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/netsage-project/docker-nfdump-collector"}),"nfdump")," Utility used to capture Netflow/Sflow to disk",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"nfdump"}),"doc")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/netsage-project/tstat-transport"}),"tstat")," Utility used to capture read more on the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://tstat.polito.it/"}),"official site"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"tstat"}),"doc"))))),Object(o.b)("p",null,'"Testpoints" or "sensors" collect flow data (',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://tstat.polito.it/"}),"tstat"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.rfc-editor.org/info/rfc3176"}),"sflow"),", or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.cisco.com/c/en/us/products/collateral/ios-nx-os-software/ios-netflow/prod_white_paper0900aecd80406232.html"}),"netflow"),') and send it to a "pipeline host" for processing (for globanoc, flow-proc.bldc.grnoc.iu.edu or netsage-probe1.grnoc.iu.edu). '),Object(o.b)("p",null,"Tstat data goes directly into the netsage_deidentifier_raw queue rabbit queue. The other data is written to nfcapd files."),Object(o.b)("h3",{id:"importer"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"importer"}),"Importer")),Object(o.b)("p",null,"A netsage-netflow-importer-daemon reads any new nfcapd files that have come in after a configurable delay. The importer aggregates flows within each file, and writes the results to the netsage_deidentifier_raw queue rabbit queue."))}s.isMDXComponent=!0}}]);