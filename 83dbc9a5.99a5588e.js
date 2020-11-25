(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=o,h=p["".concat(a,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(2),r=n(6),i=(n(0),n(119)),a={id:"docker",title:"Docker Guide",sidebar_label:"Docker Guide"},l={unversionedId:"devel/docker",id:"version-1.2.5/devel/docker",isDocsHomePage:!1,title:"Docker Guide",description:"Docker Setup",source:"@site/versioned_docs/version-1.2.5/devel/docker.md",slug:"/devel/docker",permalink:"/netsage-pipeline/docs/1.2.5/devel/docker",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.5/devel/docker.md",version:"1.2.5",sidebar_label:"Docker Guide",sidebar:"version-1.2.5/Pipeline",previous:{title:"Pipeline Logstash",permalink:"/netsage-pipeline/docs/1.2.5/pipeline_logstash"},next:{title:"Choosing Install",permalink:"/netsage-pipeline/docs/1.2.5/deploy/choose_install"}},c=[{value:"Selecting a Version",id:"selecting-a-version",children:[{value:"Stable Release Version",id:"stable-release-version",children:[]},{value:"Development Version",id:"development-version",children:[]}]},{value:"Build Base Images",id:"build-base-images",children:[{value:"Build Using Source Code",id:"build-using-source-code",children:[]}]},{value:"Configuring the Containers",id:"configuring-the-containers",children:[{value:"Environment File",id:"environment-file",children:[]},{value:"Rabbit",id:"rabbit",children:[]},{value:"Importer",id:"importer",children:[]},{value:"Logstash",id:"logstash",children:[]},{value:"Optional: ElasticSearch and Kibana",id:"optional-elasticsearch-and-kibana",children:[]}]},{value:"Running the Containers",id:"running-the-containers",children:[{value:"Start the Containers",id:"start-the-containers",children:[]},{value:"Stop the Containers",id:"stop-the-containers",children:[]},{value:"Enter a Container Shell",id:"enter-a-container-shell",children:[]},{value:"View Container Logs",id:"view-container-logs",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"docker-setup"},"Docker Setup"),Object(i.b)("h2",{id:"selecting-a-version"},"Selecting a Version"),Object(i.b)("p",null,"We currently release a development version and a tagged version.  The first version to support will be. v1.2.5 once release.  "),Object(i.b)("h3",{id:"stable-release-version"},"Stable Release Version"),Object(i.b)("p",null,"To select a released version please do the following."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"scripts/docker_select_version.sh tagValue")),Object(i.b)("p",null,"Example:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"scripts/docker_select_version.sh v1.2.5")),Object(i.b)("p",null,"If you run the script without any version specified it'll list all the current tags and prompt you to select a version."),Object(i.b)("p",null,"Once that's complete, all the instructions below are still applicable. "),Object(i.b)("h3",{id:"development-version"},"Development Version"),Object(i.b)("p",null,"If you wish to use the development version you are free to do so.  It is the default behavior on\nany git checkout.  Simply follow the directions below and setup your pipeline as instructed."),Object(i.b)("h2",{id:"build-base-images"},"Build Base Images"),Object(i.b)("p",null,"This is optional.  The image are published on docker hub, but if you'd like to incorporate local changes please follow the process below."),Object(i.b)("h3",{id:"build-using-source-code"},"Build Using Source Code"),Object(i.b)("p",null,"If you would like to build the ",Object(i.b)("em",{parentName:"p"},"importer")," container using the version of the pipeline scripts found in this GitHub repo then run the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose -f docker-compose.build.yml build\n")),Object(i.b)("h2",{id:"configuring-the-containers"},"Configuring the Containers"),Object(i.b)("h3",{id:"environment-file"},"Environment File"),Object(i.b)("p",null,"If you haven't done so already, copy env.example and update it to match your own settings:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"cp env.example .env\n")),Object(i.b)("h3",{id:"rabbit"},"Rabbit"),Object(i.b)("p",null,"This portion is primarily to set the Rabbit MQ server.  Most of the default settings work but whatever values you set\nhere should be consistent with the config for the logstash and importer "),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"RABBITMQ_ERLANG_COOKIE='secret cookie'\nRABBIT_HOST=rabbit\nRABBITMQ_DEFAULT_USER=guest\nRABBITMQ_DEFAULT_PASS=guest\ndiscovery.type=single-node\n")),Object(i.b)("p",null,"Note the hostname will follow the docker-compose label.  You can rename it if you like but by default it's set to rabbit"),Object(i.b)("h3",{id:"importer"},"Importer"),Object(i.b)("p",null,"The importer config is defined in compose/netsage_shared.xml.  If you use different values then the defaults you may want to change them/ ",Object(i.b)("strong",{parentName:"p"},"NOTE: Changes will require you to rebuild the container")),Object(i.b)("h3",{id:"logstash"},"Logstash"),Object(i.b)("p",null,"Define the input rabbit queue.  This should match the importer output queue"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"rabbitmq_input_host=rabbit\nrabbitmq_input_username=guest\nrabbitmq_input_pw=guest\n\n")),Object(i.b)("p",null,"Define the output rabbit queue.  This can be the docker container or any valid RabbitMQ server."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"rabbitmq_output_host=rabbit\nrabbitmq_output_username=guest\nrabbitmq_output_pw=guest\nrabbitmq_output_key=netsage_archive_input\n")),Object(i.b)("h3",{id:"optional-elasticsearch-and-kibana"},"Optional: ElasticSearch and Kibana"),Object(i.b)("p",null,"You can optionally store flow data locally in an ElasticSearch container and view the data with Kibana. Local storage can be enabled with the following steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Uncomment the following lines in conf-logstash/99-outputs.conf:")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'elasticsearch {\n    hosts => ["elasticsearch"]\n    index => "netsage_flow-%{+YYYY.MM.dd}"\n}\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Comment out the ",Object(i.b)("inlineCode",{parentName:"p"},"rabbitmq {...}")," block in conf-logstash/99-outputs.conf if you do not want to also send logstash output to RabbitMQ.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run the containers using the following line:  ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose -f docker-compose.yml  -f docker-compose.develop.yml up  -d")))),Object(i.b)("h2",{id:"running-the-containers"},"Running the Containers"),Object(i.b)("h3",{id:"start-the-containers"},"Start the Containers"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose up -d \n")),Object(i.b)("h3",{id:"stop-the-containers"},"Stop the Containers"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose stop && docker-compose rm \n")),Object(i.b)("h3",{id:"enter-a-container-shell"},"Enter a Container Shell"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose exec logstash bash     #bash shell in logstash container\ndocker-compose exec importer bash     #bash shell in importer container\ndocker-compose exec rabbit bash       #bash shell in rabbit container\n")),Object(i.b)("h3",{id:"view-container-logs"},"View Container Logs"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose logs -f              #view logs for all containers \ndocker-compose logs -f logstash     #view logs for logstash container\ndocker-compose logs -f importer     #view logs for importer container\ndocker-compose logs -f rabbit       #view logs for rabbit container\n")))}b.isMDXComponent=!0}}]);