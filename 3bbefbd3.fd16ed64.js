(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return p})),i.d(t,"default",(function(){return c}));var n=i(2),a=i(9),o=(i(0),i(167)),r={id:"pipeline",title:"Pipeline",sidebar_label:"Intro"},l={id:"pipeline",isDocsHomePage:!1,title:"Pipeline",description:"The NetSage Pipeline",source:"@site/docs/pipeline.md",permalink:"/netsage-pipeline/docs/pipeline",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/docs/pipeline.md",sidebar_label:"Intro",sidebar:"Pipeline",next:{title:"Importer",permalink:"/netsage-pipeline/docs/pipeline_importer"}},p=[{value:"Components",id:"components",children:[]},{value:"Sensors and Data Collection",id:"sensors-and-data-collection",children:[{value:"Importer",id:"importer",children:[]}]}],s={rightToc:p};function c(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"the-netsage-pipeline"},"The NetSage Pipeline"),Object(o.b)("h1",{id:"description"},"Description"),Object(o.b)("p",null,"The Netsage Flow Processing Pipeline includes several components for processing network flow data, including importing, deidentification, metadata tagging, flow stitching, etc."),Object(o.b)("h2",{id:"components"},"Components"),Object(o.b)("p",null,"The Pipeline is made of the following components (Currently)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/netsage-project/netsage-pipeline/blob/master/lib/GRNOC/NetSage/Deidentifier/NetflowImporter.pm"}),"Importer"),"  (Collection of perl scripts)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"pipeline_importer"}),"doc")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.elastic.co/logstash"}),"Elastic Logstash")," Performs a variety of transformation on the data",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"pipeline_logstash"}),"doc")," "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.rabbitmq.com/"}),"RabbitMQ")," used for message passing and queing of tasks.")),Object(o.b)("h2",{id:"sensors-and-data-collection"},"Sensors and Data Collection"),Object(o.b)("p",null,'"Testpoints" or "sensors" collect flow data (',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://tstat.polito.it/"}),"tstat"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.rfc-editor.org/info/rfc3176"}),"sflow"),", or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.cisco.com/c/en/us/products/collateral/ios-nx-os-software/ios-netflow/prod_white_paper0900aecd80406232.html"}),"netflow"),') and send it to a "pipeline host" for processing (for globanoc, flow-proc.bldc.grnoc.iu.edu or netsage-probe1.grnoc.iu.edu). '),Object(o.b)("p",null,"Tstat data goes directly into the netsage_deidentifier_raw queue rabbit queue. The other data is written to nfcapd files."),Object(o.b)("h3",{id:"importer"},"Importer"),Object(o.b)("p",null,"A netsage-netflow-importer-daemon reads any new nfcapd files that have come in after a configurable delay. The importer aggregates flows within each file, and writes the results to the netsage_deidentifier_raw queue rabbit queue."))}c.isMDXComponent=!0}}]);