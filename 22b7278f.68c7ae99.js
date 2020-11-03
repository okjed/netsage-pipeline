(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,f=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(100)),o={id:"intro",title:"Intro",sidebar_label:"Intro"},c={unversionedId:"pipeline/intro",id:"pipeline/intro",isDocsHomePage:!1,title:"Intro",description:"The NetSage Pipeline",source:"@site/docs/pipeline/intro.md",slug:"/pipeline/intro",permalink:"/netsage-pipeline/docs/next/pipeline/intro",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/docs/pipeline/intro.md",version:"current",sidebar_label:"Intro",sidebar:"Pipeline",next:{title:"Tstat",permalink:"/netsage-pipeline/docs/next/pipeline/tstat"}},l=[{value:"Description",id:"description",children:[]},{value:"Data Collection",id:"data-collection",children:[]},{value:"Pipeline Components",id:"pipeline-components",children:[]},{value:"Visualization",id:"visualization",children:[]},{value:"Pipeline Installation",id:"pipeline-installation",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"the-netsage-pipeline"},"The NetSage Pipeline"),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,'The Netsage Flow Processing Pipeline is composed of several components for processing network flow data, including importing, deidentification, metadata tagging, flow stitching, etc.\nThere are many ways the components can be combined, configured, and run. These documents will describe the standard "simple" set up and provide information for more complex configurations.'),Object(i.b)("h2",{id:"data-collection"},"Data Collection"),Object(i.b)("p",null,"In Netsage, sensor(s) are network devices configured to collect flow data (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://tstat.polito.it/"}),"tstat"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.rfc-editor.org/info/rfc3176"}),"sflow"),", or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.cisco.com/c/en/us/products/collateral/ios-nx-os-software/ios-netflow/prod_white_paper0900aecd80406232.html"}),"netflow"),') and send it to a "pipeline host" for processing. '),Object(i.b)("p",null,"Tstat flow data can be sent directly to the ingest RabbitMQ queue using the Netsage ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/netsage-project/tstat-transport"}),"tstat-transport")," tool. This can be installed as usual or via Docker. "),Object(i.b)("p",null,"Sflow and netflow data from configured routers can be collected and stored into nfcapd files using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/phaag/nfdump"}),"nfdump tools"),". The Netsage project has packaged the nfdump tools into a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/netsage-project/docker-nfdump-collector"}),"Docker container")," for ease of use."),Object(i.b)("h2",{id:"pipeline-components"},"Pipeline Components"),Object(i.b)("p",null,"The Netsage Flow Processing Pipeline is made of the following components (currently)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"[Importer]",":  Perl scripts on the pipeline host that read nfcapd flow files and send the flow data to a RabbitMQ queue.  - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/netsage-pipeline/docs/next/pipeline/importer"}),"doc")," - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/netsage-project/netsage-pipeline/blob/master/lib/GRNOC/NetSage/Deidentifier/NetflowImporter.pm"}),"on github")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.rabbitmq.com/"}),"RabbitMQ"),": Used for message passing and queuing of tasks."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.elastic.co/logstash"}),"Logstash Pipeline"),": Performs a variety of operations on the flow data to transform it and add additional information.  - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/netsage-pipeline/docs/next/pipeline/logstash"}),"doc")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.elastic.co/what-is/elasticsearch"}),"Elasticsearch"),": Used for storing the final flow data. ")),Object(i.b)("h2",{id:"visualization"},"Visualization"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://grafana.com/oss/grafana/"}),"Grafana Dashboards")," are used to visualize the data stored in elasticsearch.  - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/netsage-project/netsage-grafana-configs"}),"Netsage Dashboards on github")),Object(i.b)("h2",{id:"pipeline-installation"},"Pipeline Installation"),Object(i.b)("p",null,'Originally, the pipeline was deployed by installing all of the components individually on one or more servers (the "BareMetal" or "Server" Install). More recently, we\'ve also added a Docker deployment option. With simple pipelines having just one sflow or netflow sensor, or one of each (and any number of tstat sensors), the "Docker Simple" Install should suffice. The "Docker Advanced" guide will help when there are more sensors and/or other customizations required.'))}p.isMDXComponent=!0}}]);