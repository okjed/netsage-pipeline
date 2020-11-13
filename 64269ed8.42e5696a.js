(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(100)),i={},c={unversionedId:"components/docker_env",id:"components/docker_env",isDocsHomePage:!1,title:"docker_env",description:"Please copy env.example to .env",source:"@site/docs/components/docker_env.md",slug:"/components/docker_env",permalink:"/netsage-pipeline/docs/next/components/docker_env",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/docs/components/docker_env.md",version:"current"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Please copy ",Object(r.b)("inlineCode",{parentName:"p"},"env.example")," to ",Object(r.b)("inlineCode",{parentName:"p"},".env"),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cp env.example .env \n")),Object(r.b)("p",null,"then edit the .env file to set the sensor names"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'sflowSensorName="my sflow sensor name"\nnetflowSensorName="my netflow sensor name"\n')),Object(r.b)("p",null,"Simply change the names to unique identifiers and you're good to go. (Use quotes if the names have spaces.) "),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'These names uniquely identify the source of the data. Choose names that are meaningful and unique.\nFor example, your sensor names might be "RNDNet Sflow" and "RNDNet Netflow" or "rtr.one.rndnet.edu" and "rtr.two.nrdnet.edu". Whatever makes sense in your situation.'))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you don't set a sensor name, the default docker hostname, which changes each time you run the pipeline, will be used."),Object(r.b)("li",{parentName:"ul"},"If you have only one collector, comment out the line for the one you are not using."),Object(r.b)("li",{parentName:"ul"},'If you have more than one of the same type of collector, see the "Docker Advanced" documentation.'),Object(r.b)("li",{parentName:"ul"},"If you're not using a netflow or an sflow collector (you are getting only tstat data), then simply disregard the env settings and don't start up either collector.")),Object(r.b)("p",null,"Other settings of note in this file includes the following. You will not necessarily need to change these, but be aware."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"rabbit_output_host"),": this defines where the final data will land after going through the pipeline.  Use the default ",Object(r.b)("inlineCode",{parentName:"p"},"rabbit")," for the local rabbitMQ server, running in its docker container. Enter a hostname to send to a remote rabbitMQ server (also the correct username, password, and queue key/name)."),Object(r.b)("p",null,"The Logstash Aggregation Filter settings are exposed in case you wish to use different values.\n(See comments in the ","*","-aggregation.conf file.) This config stitches together long-lasting flows that are seen in multiple nfcapd files, matching by the 5-tuple (source and destination IPs, ports, and protocol) plus sensor name. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Aggregation_maps_path"),": the name of the file to which logstash will write in-progress aggregation data when logstash shuts down. When logstash starts up again, it will read this file in and resume aggregating. The filename is configurable for complex situations, but /data/ is required.  "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inactivity_timeout"),": If more than inactivity_timeout seconds have passed between the 'start' of a flow and the 'start'\nof the LAST matching flow, OR if no matching flow has coming in for inactivity_timeout seconds\non the clock, assume the flow has ended."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Nfcapd files are typically written every 5 minutes. Netsage uses an inactivity_timeout = 630 sec = 10.5 min for 5-min files; 960 sec = 16 min for 15-min files.  (For 5-min files, this allows one 5 min gap or period during which the no. of bits transferred don't meet the cutoff)"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"max_flow_timeout"),": If a long-lasting flow is still aggregating when this timeout is reached, arbitrarily cut it off and start a new flow.  The default is 24 hours."))}p.isMDXComponent=!0}}]);