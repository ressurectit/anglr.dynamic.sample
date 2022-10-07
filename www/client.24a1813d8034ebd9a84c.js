/*! For license information please see client.24a1813d8034ebd9a84c.js.LICENSE.txt */
"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[6047],{76757:(e,n,t)=>{t.d(n,{v:()=>r});const r=JSON.parse('{"configuration":{"debug":false,"apiBaseUrl":"api/","defaultApiHeaders":{"Accept":"application/json"},"themes":["light","dark"],"languages":[{"lang":"en","name":"English"},{"lang":"sk","name":"Slovenčina"}]},"general":{"theme":"light","language":"en"},"debug":{"consoleEnabled":false,"debugData":false},"logging":{"consoleLogLevel":"verbose"}}')},63856:(e,n,t)=>{t(46895);var r=t(76757);function o(e,n,t,r,o,i,s){try{var l=e[i](s),a=l.value}catch(e){return void t(e)}l.done?n(a):Promise.resolve(a).then(r,o)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function l(e){o(s,r,i,l,a,"next",e)}function a(e){o(s,r,i,l,a,"throw",e)}l(void 0)}))}}function s(e){const n=function(e){return null!=e};if(n(e?.configuration?.debug)){let n=e?.configuration?.debug;"string"==typeof e.configuration.debug&&(n="true"==e.configuration.debug.toLowerCase()),r.v.configuration.debug=n}n(e?.configuration?.apiBaseUrl)&&(r.v.configuration.apiBaseUrl=e.configuration.apiBaseUrl),n(e?.general?.theme)&&(r.v.general.theme=e.general.theme),n(e?.general?.language)&&(r.v.general.language=e.general.language)}function l(){return a.apply(this,arguments)}function a(){return a=i((function*(){const e=function(){var e=i((function*(e){const n=yield fetch(new Request(e));return yield n.json()}));return function(n){return e.apply(this,arguments)}}();try{const n=yield e("local/config");Object.keys(n).forEach((e=>{const t=r.v,o=n;t[e]=o[e]}))}catch(e){console.log("failed to load default configuration")}try{s(yield e("local/configEnv"))}catch(e){console.log("failed to load environment configuration")}})),a.apply(this,arguments)}function d(e,n,t,r,o,i,s){try{var l=e[i](s),a=l.value}catch(e){return void t(e)}l.done?n(a):Promise.resolve(a).then(r,o)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function s(e){d(i,r,o,s,l,"next",e)}function l(e){d(i,r,o,s,l,"throw",e)}s(void 0)}))}}function c(){return(c=u((function*(){yield l(),yield Promise.all([t.e(2542),t.e(1263)]).then(t.bind(t,81249))}))).apply(this,arguments)}!function(){c.apply(this,arguments)}()},46895:()=>{!function(window,document,undefined){function is(e,n){return typeof e===n}function testRunner(){var e,n,t,r,o,i;for(var s in tests)if(tests.hasOwnProperty(s)){if(e=[],(n=tests[s]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=is(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?Modernizr[i[0]]=r:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=r),classes.push((r?"":"no-")+i.join("-"))}}function setClasses(e){var n=docElement.className,t=Modernizr._config.classPrefix||"";if(isSVG&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),isSVG?docElement.className.baseVal=n:docElement.className=n)}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,(function(e,n,t){return n+t.toUpperCase()})).replace(/^-/,"")}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function contains(e,n){return!!~(""+e).indexOf(n)}function fnBind(e,n){return function(){return e.apply(n,arguments)}}function testDOMProps(e,n,t){var r;for(var o in e)if(e[o]in n)return!1===t?e[o]:is(r=n[e[o]],"function")?fnBind(r,t||n):r;return!1}function domToCSS(e){return e.replace(/([A-Z])/g,(function(e,n){return"-"+n.toLowerCase()})).replace(/^ms-/,"-ms-")}function computedStyle(e,n,t){var r;if("getComputedStyle"in window){r=getComputedStyle.call(window,e,n);var o=window.console;null!==r?t&&(r=r.getPropertyValue(t)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!n&&e.currentStyle&&e.currentStyle[t];return r}function getBody(){var e=document.body;return e||((e=createElement(isSVG?"svg":"body")).fake=!0),e}function injectElementWithStyles(e,n,t,r){var o,i,s,l,a="modernizr",d=createElement("div"),u=getBody();if(parseInt(t,10))for(;t--;)(s=createElement("div")).id=r?r[t]:a+(t+1),d.appendChild(s);return(o=createElement("style")).type="text/css",o.id="s"+a,(u.fake?u:d).appendChild(o),u.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),d.id=a,u.fake&&(u.style.background="",u.style.overflow="hidden",l=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(u)),i=n(d,e),u.fake?(u.parentNode.removeChild(u),docElement.style.overflow=l,docElement.offsetHeight):d.parentNode.removeChild(d),!!i}function nativeTestProps(e,n){var t=e.length;if("CSS"in window&&"supports"in window.CSS){for(;t--;)if(window.CSS.supports(domToCSS(e[t]),n))return!0;return!1}if("CSSSupportsRule"in window){for(var r=[];t--;)r.push("("+domToCSS(e[t])+":"+n+")");return injectElementWithStyles("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"==computedStyle(e,null,"position")}))}return undefined}function testProps(e,n,t,r){function o(){s&&(delete mStyle.style,delete mStyle.modElem)}if(r=!is(r,"undefined")&&r,!is(t,"undefined")){var i=nativeTestProps(e,t);if(!is(i,"undefined"))return i}for(var s,l,a,d,u,c=["modernizr","tspan","samp"];!mStyle.style&&c.length;)s=!0,mStyle.modElem=createElement(c.shift()),mStyle.style=mStyle.modElem.style;for(a=e.length,l=0;a>l;l++)if(d=e[l],u=mStyle.style[d],contains(d,"-")&&(d=cssToDOM(d)),mStyle.style[d]!==undefined){if(r||is(t,"undefined"))return o(),"pfx"!=n||d;try{mStyle.style[d]=t}catch(e){}if(mStyle.style[d]!=u)return o(),"pfx"!=n||d}return o(),!1}function testPropsAll(e,n,t,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+cssomPrefixes.join(i+" ")+i).split(" ");return is(n,"string")||is(n,"undefined")?testProps(s,n,r,o):testDOMProps(s=(e+" "+domPrefixes.join(i+" ")+i).split(" "),n,t)}function testAllProps(e,n,t){return testPropsAll(e,undefined,undefined,n,t)}var classes=[],tests=[],ModernizrProto={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout((function(){n(t[e])}),0)},addTest:function(e,n,t){tests.push({name:e,fn:n,options:t})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr,Modernizr.addTest("customelements","customElements"in window),Modernizr.addTest("serviceworker","serviceWorker"in navigator),Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var supports=!1;try{supports="WebSocket"in window&&2===window.WebSocket.CLOSING}catch(e){}Modernizr.addTest("websockets",supports),Modernizr.addTest("arrow",(function(){try{eval("()=>{}")}catch(e){return!1}return!0})),Modernizr.addTest("webworkers","Worker"in window);var docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(e){var n,t=prefixes.length,r=window.CSSRule;if(void 0===r)return undefined;if(!e)return!1;if((n=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in r)return"@"+e;for(var o=0;t>o;o++){var i=prefixes[o];if(i.toUpperCase()+"_"+n in r)return"@-"+i.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var modElem={elem:createElement("modernizr")};Modernizr._q.push((function(){delete modElem.elem}));var mStyle={style:modElem.elem.style};Modernizr._q.unshift((function(){delete mStyle.style})),Modernizr.addTest("inlinesvg",(function(){var e=createElement("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)})),ModernizrProto.testAllProps=testPropsAll,ModernizrProto.testAllProps=testAllProps,Modernizr.addTest("cssgridlegacy",testAllProps("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",testAllProps("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0));var prefixed=ModernizrProto.prefixed=function(e,n,t){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),n?testPropsAll(e,n,t):testPropsAll(e,"pfx"))},url=prefixed("URL",window,!1);url=url&&window[url],Modernizr.addTest("bloburls",url&&"revokeObjectURL"in url&&"createObjectURL"in url),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document)}},e=>{e(e.s=63856)}]);
//# sourceMappingURL=client.24a1813d8034ebd9a84c.js.map