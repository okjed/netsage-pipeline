(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return p})),i.d(t,"default",(function(){return d}));var r=i(2),n=i(9),o=(i(0),i(167)),a={id:"pipeline_importer",title:"Importer",sidebar_label:"Importer"},l={id:"pipeline_importer",isDocsHomePage:!1,title:"Importer",description:"Importer",source:"@site/docs/pipeline_importer.md",permalink:"/netsage-pipeline/docs/pipeline_importer",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/docs/pipeline_importer.md",sidebar_label:"Importer",sidebar:"Pipeline",previous:{title:"Pipeline",permalink:"/netsage-pipeline/docs/pipeline"},next:{title:"Pipeline Logstash",permalink:"/netsage-pipeline/docs/pipeline_logstash"}},p=[{value:"Importer",id:"importer",children:[]},{value:"Importer",id:"importer-1",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Internals",id:"internals",children:[]}]}],s={rightToc:p};function d(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"importer"},"Importer"),Object(o.b)("p",null,"A netsage-netflow-importer-daemon reads any new nfcapd files that have come in after a configurable delay. The importer aggregates flows within each file, and writes the results to the netsage_deidentifier_raw queue rabbit queue."),Object(o.b)("h2",{id:"importer-1"},"Importer"),Object(o.b)("p",null,"NOTE: Importer will be deprecated in the future and replace with a logstash operation."),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"configuration files for the importer are ",Object(o.b)("inlineCode",{parentName:"p"},"netsage_netflow_importer.xml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"netsage_shared.xml")," in ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/grnoc/netsage/deidentifer/"),". Comments in the files briefly describe the options."),Object(o.b)("p",null,"Names of files have already been read are stored in /var/cache/netsage/netflow_importer.cache. "),Object(o.b)("h3",{id:"internals"},"Internals"),Object(o.b)("p",null,"The importer uses the nfdump command with -a to aggregate within the file, and -L ",Object(o.b)("inlineCode",{parentName:"p"},"threshold")," to throw out any flows under a flow size threshold. "),Object(o.b)("p",null,"For cenic, data from the importer first goes into a ...prefilter queue. A netsage-flow-filter-daemon reads it out, removes some flows , then sends it to the ...raw queue.\nA ...raw2 or ...fake queue is created for historical reasons but never actually holds any messages."),Object(o.b)("p",null,"All flow data waits in the netsage_deidentifier_raw queue until it is processed by the logstash pipeline as follows."))}d.isMDXComponent=!0}}]);