(window.webpackJsonp=window.webpackJsonp||[]).push([[25,26],{162:function(e,t,n){"use strict";n.r(t);n(30),n(20),n(21),n(59),n(217);var a=n(0),r=n.n(a),o=n(167),i=n(165),l=n(67),c=n(169),s=n(2),u=n(9),d=(n(221),n(168)),p=n(190),m=n(197),h=n(198),f=n(199),y=n(196),v=n(166),g=n(173),b=n(143),k=n.n(b);var j=function e(t,n){return"link"===t.type?(a=t.href,r=n,(o=function(e){return e.endsWith("/")?e:e+"/"})(a)===o(r)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var a,r,o};function E(e){var t,n,o,i=e.item,l=e.onItemClick,c=e.collapsible,p=e.activePath,m=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=i.items,f=i.label,y=j(i,p),v=(n=y,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!c&&(!y&&i.collapsed)})),b=g[0],E=g[1];Object(a.useEffect)((function(){y&&!v&&b&&E(!1)}),[y,v,b]);var O=Object(a.useCallback)((function(e){e.preventDefault(),E((function(e){return!e}))}),[E]);return 0===h.length?null:r.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":b}),key:f},r.a.createElement("a",Object(s.a)({className:Object(d.a)("menu__link",(t={"menu__link--sublist":c,"menu__link--active":c&&y},t[k.a.menuLinkText]=!c,t)),onClick:c?O:void 0,href:c?"#!":void 0},m),f),r.a.createElement("ul",{className:"menu__list"},h.map((function(e){return r.a.createElement(C,{tabIndex:b?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:c,activePath:p})}))))}function O(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=t.href,l=t.label,c=j(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(v.a,Object(s.a)({className:Object(d.a)("menu__link",{"menu__link--active":c}),to:i},Object(g.a)(i)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function C(e){switch(e.item.type){case"category":return r.a.createElement(E,e);case"link":default:return r.a.createElement(O,e)}}var N=function(e){var t,n,o=Object(a.useState)(!1),l=o[0],c=o[1],u=Object(i.a)(),g=u.siteConfig,b=(g=void 0===g?{}:g).themeConfig.navbar,j=(b=void 0===b?{}:b).title,E=b.hideOnScroll,O=void 0!==E&&E,N=u.isClient,x=Object(f.a)(),w=x.logoLink,_=x.logoLinkProps,P=x.logoImageUrl,S=x.logoAlt,I=Object(p.a)().isAnnouncementBarClosed,T=Object(y.a)().scrollY,A=e.docsSidebars,L=e.path,B=e.sidebar,M=e.sidebarCollapsible;Object(m.a)(l);var D=Object(h.a)();if(Object(a.useEffect)((function(){D===h.b.desktop&&c(!1)}),[D]),!B)return null;var W=A[B];if(!W)throw new Error('Cannot find the sidebar "'+B+'" in the sidebar config!');return r.a.createElement("div",{className:Object(d.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=O,t))},O&&r.a.createElement(v.a,Object(s.a)({tabIndex:"-1",className:k.a.sidebarLogo,to:w},_),null!=P&&r.a.createElement("img",{key:N,src:P,alt:S}),null!=j&&r.a.createElement("strong",null,j)),r.a.createElement("div",{className:Object(d.a)("menu","menu--responsive",k.a.menu,(n={"menu--show":l},n[k.a.menuWithAnnouncementBar]=!I&&0===T,n))},r.a.createElement("button",{"aria-label":l?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){c(!l)}},l?r.a.createElement("span",{className:Object(d.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},W.map((function(e){return r.a.createElement(C,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),c(!1)},collapsible:M,activePath:L})})))))},x=n(186),w=n(187),_=n(195),P=n(144),S=n.n(P);t.default=function(e){var t=e.route,n=e.docsMetadata,a=e.location,s=t.routes.find((function(e){return Object(_.a)(a.pathname,e)}))||{},u=n.permalinkToSidebar,d=n.docsSidebars,p=n.version,m=u[s.path],h=Object(i.a)(),f=h.siteConfig,y=(f=void 0===f?{}:f).themeConfig,v=void 0===y?{}:y,g=h.isClient,b=v.sidebarCollapsible,k=void 0===b||b;return 0===Object.keys(s).length?r.a.createElement(w.default,e):r.a.createElement(c.a,{version:p,key:g},r.a.createElement("div",{className:S.a.docPage},m&&r.a.createElement("div",{className:S.a.docSidebarContainer,role:"complementary"},r.a.createElement(N,{docsSidebars:d,path:s.path,sidebar:m,sidebarCollapsible:k})),r.a.createElement("main",{className:S.a.docMainContainer},r.a.createElement(o.a,{components:x.a},Object(l.a)(t.routes)))))}},171:function(e,t,n){"use strict";var a=n(12),r=n(80)(!0);a(a.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(77)("includes")},172:function(e,t,n){"use strict";var a=n(12),r=n(174);a(a.P+a.F*n(175)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},182:function(e,t,n){"use strict";var a=n(8),r=n(25),o=n(56),i=n(57);n(58)("match",1,(function(e,t,n,l){return[function(n){var a=e(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=l(n,e,this);if(t.done)return t.value;var c=a(e),s=String(this);if(!c.global)return i(c,s);var u=c.unicode;c.lastIndex=0;for(var d,p=[],m=0;null!==(d=i(c,s));){var h=String(d[0]);p[m]=h,""===h&&(c.lastIndex=o(s,r(c.lastIndex),u)),m++}return 0===m?null:p}]}))},183:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),i};e.exports=a,e.exports.default=a},184:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],i=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=i);for(var l=n;l!=r;l+=i)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},186:function(e,t,n){"use strict";var a=n(2),r=(n(171),n(172),n(0)),o=n.n(r),i=n(166),l=(n(76),n(78),n(182),n(179),n(168)),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(52).a,theme:c};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=d({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=d({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var v=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=d({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==r&&(o.style=void 0!==o.style?d({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),u(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var i=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),u(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,i=d({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?d({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,i=0,l=[],c=[l];i>-1;){for(;(o=a[i]++)<r[i];){var s=void 0,u=t[i],d=n[i][o];if("string"==typeof d?(u=i>0?u:["plain"],s=d):(u=h(u,d.type),d.alias&&(u=h(u,d.alias)),s=d.content),"string"==typeof s){var f=s.split(p),y=f.length;l.push({types:u,content:f[0]});for(var v=1;v<y;v++)m(l),c.push(l=[]),l.push({types:u,content:f[v]})}else i++,t.push(u),n.push(s),a.push(0),r.push(s.length)}i--,t.pop(),n.pop(),a.pop(),r.pop()}return m(l),c}(void 0!==i?t.tokenize(a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),g=n(183),b=n.n(g),k=n(184),j=n.n(k),E=n(165),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},C=n(176),N=function(){var e=Object(E.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(C.a)().isDarkTheme,a=t.theme||O,r=t.darkTheme||a;return n?r:a},x=n(130),w=n.n(x),_=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},S=/title=".*"/,I=function(e){var t=e.children,n=e.className,i=e.metastring,c=Object(E.a)().siteConfig.themeConfig.prism,u=void 0===c?{}:c,d=Object(r.useState)(!1),p=d[0],m=d[1],h=Object(r.useState)(!1),f=h[0],y=h[1];Object(r.useEffect)((function(){y(!0)}),[]);var g=Object(r.useRef)(null),k=[],O="",C=N();if(i&&_.test(i)){var x=i.match(_)[1];k=j.a.parse(x).filter((function(e){return e>0}))}i&&S.test(i)&&(O=i.match(S)[0].split("title=")[1].replace(/"+/g,""));var I=n&&n.replace(/language-/,"");!I&&u.defaultLanguage&&(I=u.defaultLanguage);var T=t.replace(/\n$/,"");if(0===k.length&&void 0!==I){for(var A,L="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(I),M=t.replace(/\n$/,"").split("\n"),D=0;D<M.length;){var W=D+1,F=M[D].match(B);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=W+",";break;case"highlight-start":A=W;break;case"highlight-end":L+=A+"-"+(W-1)+","}M.splice(D,1)}else D+=1}k=j.a.parse(L),T=M.join("\n")}var R=function(){b()(T),m(!0),setTimeout((function(){return m(!1)}),2e3)};return o.a.createElement(v,Object(a.a)({},s,{key:f,theme:C,code:T,language:I}),(function(e){var t,n,r=e.className,i=e.style,c=e.tokens,s=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,O&&o.a.createElement("div",{style:i,className:w.a.codeBlockTitle},O),o.a.createElement("div",{className:w.a.codeBlockContent},o.a.createElement("button",{ref:g,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(w.a.copyButton,(t={},t[w.a.copyButtonWithTitle]=O,t)),onClick:R},p?"Copied":"Copy"),o.a.createElement("div",{tabIndex:"0",className:Object(l.a)(r,w.a.codeBlock,(n={},n[w.a.codeBlockWithTitle]=O,n))},o.a.createElement("div",{className:w.a.codeBlockLines,style:i},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return k.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},u({token:e,key:t})))})))}))))))}))},T=n(9),A=(n(131),n(132)),L=n.n(A),B=function(e){return function(t){var n,a=t.id,r=Object(T.a)(t,["id"]),i=Object(E.a)().siteConfig,c=(i=void 0===i?{}:i).themeConfig,s=(c=void 0===c?{}:c).navbar,u=(s=void 0===s?{}:s).hideOnScroll,d=void 0!==u&&u;return a?o.a.createElement(e,r,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:Object(l.a)("anchor",(n={},n[L.a.enhancedAnchor]=!d,n)),id:a}),r.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):o.a.createElement(e,r)}},M=n(133),D=n.n(M);t.a={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(I,e):o.a.createElement("code",e):t},a:function(e){return/\.[^./]+$/.test(e.href)?o.a.createElement("a",e):o.a.createElement(i.a,e)},pre:function(e){return o.a.createElement("div",Object(a.a)({className:D.a.mdxCodeBlock},e))},h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6")}},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(169);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},217:function(e,t,n){"use strict";var a=n(12),r=n(218)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(77)("find")},218:function(e,t,n){var a=n(29),r=n(61),o=n(28),i=n(25),l=n(219);e.exports=function(e,t){var n=1==e,c=2==e,s=3==e,u=4==e,d=6==e,p=5==e||d,m=t||l;return function(t,l,h){for(var f,y,v=o(t),g=r(v),b=a(l,h,3),k=i(g.length),j=0,E=n?m(t,k):c?m(t,0):void 0;k>j;j++)if((p||j in g)&&(y=b(f=g[j],j,v),e))if(n)E[j]=y;else if(y)switch(e){case 3:return!0;case 5:return f;case 6:return j;case 2:E.push(f)}else if(u)return!1;return d?-1:s||u?u:E}}},219:function(e,t,n){var a=n(220);e.exports=function(e,t){return new(a(e))(t)}},220:function(e,t,n){var a=n(13),r=n(193),o=n(3)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),a(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},221:function(e,t,n){"use strict";var a=n(12),r=n(25),o=n(174),i="".endsWith;a(a.P+a.F*n(175)("endsWith"),"String",{endsWith:function(e){var t=o(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,a=r(t.length),l=void 0===n?a:Math.min(r(n),a),c=String(e);return i?i.call(t,c,l):t.slice(l-c.length,l)===c}})}}]);