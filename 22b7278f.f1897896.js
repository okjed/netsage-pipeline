(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,f=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(f,l(l({ref:t},s),{},{components:n})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(119)),o={id:"intro",title:"Intro",sidebar_label:"Intro"},l={unversionedId:"pipeline/intro",id:"pipeline/intro",isDocsHomePage:!1,title:"Intro",description:"The NetSage Pipeline",source:"@site/docs/pipeline/intro.md",slug:"/pipeline/intro",permalink:"/netsage-pipeline/docs/next/pipeline/intro",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/docs/pipeline/intro.md",version:"current",sidebar_label:"Intro",sidebar:"Pipeline",next:{title:"Tstat",permalink:"/netsage-pipeline/docs/next/pipeline/tstat"}},c=[{value:"Description",id:"description",children:[]},{value:"Data Collection",id:"data-collection",children:[]},{value:"Pipeline Components",id:"pipeline-components",children:[]},{value:"Visualization",id:"visualization",children:[]},{value:"Pipeline Installation",id:"pipeline-installation",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"the-netsage-pipeline"},"The NetSage Pipeline"),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,'The Netsage Flow Processing Pipeline is composed of several components for processing network flow data, including importing, deidentification, metadata tagging, flow stitching, etc.\nThere are many ways the components can be combined, configured, and run. These documents will describe the standard "simple" set up and provide information for more complex configurations.'),Object(r.b)("h2",{id:"data-collection"},"Data Collection"),Object(r.b)("p",null,"In Netsage, sensor(s) are network devices configured to collect flow data (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://tstat.polito.it/"}),"tstat"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.rfc-editor.org/info/rfc3176"}),"sflow"),", or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.cisco.com/c/en/us/products/collateral/ios-nx-os-software/ios-netflow/prod_white_paper0900aecd80406232.html"}),"netflow"),') and send it to a "pipeline host" for processing. '),Object(r.b)("p",null,"Tstat flow data can be sent directly to the pipeline ingest RabbitMQ queue on the pipeline host using the Netsage ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/netsage-project/tstat-transport"}),"tstat-transport")," tool. This can be installed as usual or via Docker. "),Object(r.b)("p",null,"Sflow and netflow data from configured routers should be sent to the pipeline host where it is collected and stored into nfcapd files using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/phaag/nfdump"}),"nfdump tools"),". The Netsage project has packaged the nfdump tools into a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/netsage-project/docker-nfdump-collector"}),"Docker container")," for ease of use."),Object(r.b)("h2",{id:"pipeline-components"},"Pipeline Components"),Object(r.b)("p",null,"The Netsage Flow Processing Pipeline is made of the following components (currently)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Importer:  Perl scripts on the pipeline host that read nfcapd flow files and send the flow data to a RabbitMQ queue.   (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/netsage-pipeline/docs/next/pipeline/importer"}),"Doc"),", ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/netsage-project/netsage-pipeline/blob/master/lib/GRNOC/NetSage/Deidentifier/NetflowImporter.pm"}),"in github"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.rabbitmq.com/"}),"RabbitMQ"),": Used for message passing and queuing of tasks."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.elastic.co/logstash"}),"Logstash")," pipeline: Performs a variety of operations on the flow data to transform it and add additional information.  (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/netsage-pipeline/docs/next/pipeline/logstash"}),"Doc"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.elastic.co/what-is/elasticsearch"}),"Elasticsearch"),": Used for storing the final flow data. ")),Object(r.b)("h2",{id:"visualization"},"Visualization"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://grafana.com/oss/grafana/"}),"Grafana")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.elastic.co/kibana"}),"Kibana")," can be used to visualize the data stored in elasticsearch.  Netsage Grafana Dashboards are available ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/netsage-project/netsage-grafana-configs"}),"in github"),"."),Object(r.b)("h2",{id:"pipeline-installation"},"Pipeline Installation"),Object(r.b)("p",null,'Originally, the pipeline was deployed by installing all of the components individually on one or more servers (the "BareMetal" or "Server" Install). More recently, we\'ve also added a Docker deployment option. With simple pipelines having just one sflow and/or one netflow sensor (and any number of tstat sensors), the "Docker Simple" Install should suffice. The "Docker Advanced" guide will help when there are more sensors and/or other customizations required.'))}p.isMDXComponent=!0}}]);