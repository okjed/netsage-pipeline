(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),a=(n(0),n(99)),o={id:"pipeline",title:"Pipeline",sidebar_label:"Intro"},c={unversionedId:"pipeline",id:"version-1.2.6/pipeline",isDocsHomePage:!1,title:"Pipeline",description:"The NetSage Pipeline",source:"@site/versioned_docs/version-1.2.6/pipeline.md",slug:"/pipeline",permalink:"/netsage-pipeline/docs/pipeline",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.6/pipeline.md",version:"1.2.6",sidebar_label:"Intro",sidebar:"version-1.2.6/Pipeline",next:{title:"Importer",permalink:"/netsage-pipeline/docs/pipeline_importer"}},l=[{value:"Components",id:"components",children:[]},{value:"Sensors and Data Collection",id:"sensors-and-data-collection",children:[{value:"Importer",id:"importer",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"the-netsage-pipeline"},"The NetSage Pipeline"),Object(a.b)("h1",{id:"description"},"Description"),Object(a.b)("p",null,"The Netsage Flow Processing Pipeline includes several components for processing network flow data, including importing, deidentification, metadata tagging, flow stitching, etc."),Object(a.b)("h2",{id:"components"},"Components"),Object(a.b)("p",null,"The Pipeline is made of the following components (Currently)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/netsage-project/netsage-pipeline/blob/master/lib/GRNOC/NetSage/Deidentifier/NetflowImporter.pm"}),"Importer"),"  (Collection of perl scripts)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"pipeline_importer"}),"doc")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.elastic.co/logstash"}),"Elastic Logstash")," Performs a variety of transformation on the data",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"pipeline_logstash"}),"doc")," "))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.rabbitmq.com/"}),"RabbitMQ")," used for message passing and queing of tasks.")),Object(a.b)("h2",{id:"sensors-and-data-collection"},"Sensors and Data Collection"),Object(a.b)("p",null,'"Testpoints" or "sensors" collect flow data (',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://tstat.polito.it/"}),"tstat"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.rfc-editor.org/info/rfc3176"}),"sflow"),", or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.cisco.com/c/en/us/products/collateral/ios-nx-os-software/ios-netflow/prod_white_paper0900aecd80406232.html"}),"netflow"),') and send it to a "pipeline host" for processing (for globanoc, flow-proc.bldc.grnoc.iu.edu or netsage-probe1.grnoc.iu.edu). '),Object(a.b)("p",null,"Tstat data goes directly into the netsage_deidentifier_raw queue rabbit queue. The other data is written to nfcapd files."),Object(a.b)("h3",{id:"importer"},"Importer"),Object(a.b)("p",null,"A netsage-netflow-importer-daemon reads any new nfcapd files that have come in after a configurable delay. The importer aggregates flows within each file, and writes the results to the netsage_deidentifier_raw queue rabbit queue."))}s.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return n?i.a.createElement(f,c(c({ref:t},p),{},{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);