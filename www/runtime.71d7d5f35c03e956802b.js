(()=>{"use strict";var e,a,b,c,d,f,t,r={},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var b=n[e]={exports:{}};return r[e].call(b.exports,b,b.exports,o),b.exports}o.m=r,o.amdO={},e=[],o.O=(a,b,c,d)=>{if(!b){var f=1/0;for(i=0;i<e.length;i++){for(var[b,c,d]=e[i],t=!0,r=0;r<b.length;r++)(!1&d||f>=d)&&Object.keys(o.O).every((e=>o.O[e](b[r])))?b.splice(r--,1):(t=!1,d<f&&(f=d));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[b,c,d]},b=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);o.r(d);var f={};a=a||[null,b({}),b([]),b(b)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=b(t))Object.getOwnPropertyNames(t).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,o.d(d,f),d},o.d=(e,a)=>{for(var b in a)o.o(a,b)&&!o.o(e,b)&&Object.defineProperty(e,b,{enumerable:!0,get:a[b]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,b)=>(o.f[b](e,a),a)),[])),o.u=e=>e+".client.chunk."+{45:"85be99b762075a4c9dee",127:"8c088bce4b95eeed2289",238:"490504996e6291e6cc9c",370:"22810fb036413e83f6d6",434:"6ce9c2de66302891bf1b",543:"a0a7d903409177275dfa",695:"81f929826b78801fb13d",709:"23bd606700f8bc697bcd",786:"4c2c8ac4c184a3a55004",805:"5385e9d595cbc394a9ba",912:"beb770ebbe491e1c3c0b",945:"20ec23555949d1028989",1111:"6df4e124e188a6fd25f9",1124:"b2af5fd599584fe790f9",1144:"bd031864e2f2ee8f4340",1164:"177646b13ec653395512",1170:"98e99f1d41b8dd827f2c",1243:"c8a51ffbdaf32b4a6798",1248:"6ff41c95c8fd8e9c6a55",1424:"637b36ea84028819c16b",1430:"c617e4eaa98ed5fda560",1433:"c0591c37f73dcb992f74",1452:"d354e63ede48958c9152",1527:"35c65ec1522de1d284df",1573:"5dfe30dab9a40a775ba8",1627:"fce73da9d5285c37343d",1648:"5f193cf58b1006a54bda",1682:"0e0ce600ad43358dad26",1688:"4bc3576fe9c9eb404e5b",1694:"eb998df06442a02b151b",1754:"1e7df2eb0f916968d7d2",1849:"804ea4ed166bec8628a7",1942:"906662811b4ad857c260",1961:"833c53a889247690008a",1982:"3b556992f336350c675b",2030:"0460bd0a523eea59d498",2078:"c538b49ea80dd4842daf",2099:"38fb920368f259c00c90",2106:"8f017b81e35ee4048da4",2122:"b9358389b4b60fb3cc45",2125:"83b109c25b276fe06e58",2160:"b55471aa285f75ce0a93",2169:"1480b535dddbb723459e",2223:"fb012724c5c0e6587aac",2262:"b6ec89b41d651b843d7f",2268:"e64a8964500adab485b0",2295:"90774fc08fa00b530dd4",2301:"b73caa5b121e732e400d",2340:"b0c9c79188871cdf82ea",2362:"352bbab36cbbadb1b114",2371:"5aa289daa6e61b2fcb6f",2384:"78f2ec662ffded67325a",2463:"be1ccc706c8df1fb220b",2502:"fde026f7abd72168dfba",2562:"8f8a347d8333363bda94",2567:"f42c874a1119ee87961b",2582:"4a98e7d591f7c7b52cc3",2618:"1d5145f2a0587ec8e85c",2674:"8de597681a2159fa768c",2690:"e40aebf3693b10190bc1",2703:"455e714459cc30fe9383",2712:"5237dc2d91e9a66b49d9",2803:"a75afc2d76e9d5c0b9fc",2823:"fb8f36047cd0e7b66842",2828:"47a0a50937206cf49456",2857:"05f98a2ddc1bba9476f9",2908:"71c80443ed845b51d34b",3048:"ab547b6f6562cec10788",3082:"100f5088661658a13f04",3085:"539bcbb49e7dca734feb",3102:"948b47924c72ef525aaf",3121:"62ef33e2fb07df865bd2",3232:"81f9c65df9ad830e4dc0",3296:"69dd630d3e02d1fef6a5",3361:"92e889a5ec9dbc492e08",3362:"e32728bdba8a3378ab54",3387:"04e8f002a09c90503da3",3465:"14531ae11100877781d3",3559:"3c2697bb89d040d2ad51",3631:"4041d7511c07405d3c34",3646:"22ace5361c4b2af9c4bb",3688:"4941d2c8ddb73f1ae16f",3697:"1d978cd2b12560a8c877",3729:"19ad06beaf67de061420",3734:"dd8fd1fc882a6f2b2be2",3777:"500845e7b06c814c4e6d",3809:"5c05b7aa943de5267167",3850:"ce2ba2683b68fc42dd9e",3863:"47efc8ad21a5e68563b9",3874:"3bcade20d21f898807b2",3904:"98df26e789eb63fb7786",3920:"6de24124de9faa1b8359",3930:"a0ee9f058e4d9a833486",3959:"44f3082016f3e6a86f90",3978:"d52954c06b5be05c7de5",4036:"08c6e8ab6440c6e857e4",4075:"36630bdf3732c65900a7",4119:"d604ccc521d91e2638b2",4136:"1991cff9cb5a99187809",4138:"2b76640c021ae668a0fb",4196:"b7284c02146fff7b1098",4375:"8404823b53782c3041a0",4383:"542e019f9f7eb8325d7b",4389:"cb62e4f7336a5554bfba",4414:"c658b94bc4c0f9902c5e",4438:"3eccaa5afa4a0849d47c",4451:"ba0d5eee4399329a0360",4456:"5e0f51058cd56ee2bddc",4495:"d9282add61b8ae2520c3",4507:"e2e5676f4f28f89567be",4566:"345fde69983d8ef3982b",4640:"58c79367bf5a928e96b9",4647:"8016b5869f7239c4c45f",4692:"d5421cbde7693c93e57a",4708:"0dc18201d26b5044572a",4711:"ed9771d536e06d72acd4",4714:"a986b1c8ab6d2e42f199",4718:"cd1faa3eae3698643d89",4727:"bb13b46da2d8620bbe36",4824:"e28224867e7033b879f9",4853:"14ecba31910fb866c80a",4861:"bd89e3f732d9ad80f8a8",4864:"260b7a84241a7fa00bde",4930:"c271627552e7b245cbb2",4938:"9ad5a698d65b2398abba",4960:"7893e74fe09a8f30d009",5120:"f8c6c3be2c46abbe048f",5199:"3b6d7400d0a75a10ea14",5252:"310fbaa81fa7ae844c9b",5255:"cacb06659d6b50743d30",5265:"544c451542d1b2a78eb2",5306:"40530ec9f14415e7ed45",5366:"2edfe423dd19eb9ff268",5426:"345f6b3fb886f926d98a",5450:"757093109113fa2b3896",5455:"39e68ebdbcce13221511",5494:"bd08def3c5bd4c59f85c",5516:"649a0e5c17319321ef3a",5517:"e6aae4cfeec7b6e6195e",5556:"43420e3c7741023a705b",5630:"9fff368f41e110a06cd0",5697:"7c1b8774bc097e98e4ff",5702:"50da38bd7dc32d3d9886",5705:"242160ec2452a59b4bdd",5711:"81f91e4c53246a76ec90",5716:"23d8c03da503b5af0e80",5766:"037d88abf87074d792d1",5795:"cf54ad81a08817107b5d",5917:"a5865f6624e99e7908e0",5930:"daabfa8d06112bfb7e77",5983:"0208650363d68162b22f",5990:"f41e874100d84314d985",5993:"473b52aaaa5d65a6cb68",5996:"f6969837b377c5cc146c",6017:"a675b92640459d11da23",6039:"ccb6835a140bcd9f0ec5",6069:"e1957f5ee5580f992f0b",6083:"85b74ebf48cfd4870760",6154:"0c989052c137b56001e5",6170:"bc956bf37958beeef6e6",6229:"9da395de670d4df28c5a",6336:"343079442a1228f68901",6411:"0c16518ec8d6bc0116c8",6465:"260500a4f728ffe41d62",6481:"7592e5c661194a341cd4",6495:"a88178b40641c27bd3da",6602:"715fd6d09af01768db20",6607:"26a959fcebee0157c97a",6732:"1bc59bcfdf93f5513322",6797:"ae1966f31a2e25e65e44",6805:"f79177ec233ec667eeff",6813:"d6cf9e90aaab527c211f",6834:"b91fbd4844e6b003c653",6849:"0f494c537bd8832ab0fa",6913:"913620d1c19581269d5c",6960:"ce2f062ca457b453740f",6963:"46ba5ea1dbfb63483a0e",7001:"a63f9335a9404109fd33",7144:"79c44a22dfa47d3ec07f",7201:"fb8c704bcdb4779d4b80",7373:"80d6b05372700462c6a2",7379:"7dc7a76a926a9406b1cb",7390:"3a5fcdd2f5cc38a11fe5",7420:"68fe3db3e79b411adff0",7427:"e9868f9bd0e3a664f315",7469:"f20c85b265f716ceed8b",7542:"dc619899e7a064ee2ec4",7552:"4b58232e10713a73bd3b",7607:"34634e1bbd28a51c3dc3",7643:"9af281db3558db8eb9f6",7691:"b098bba2b4eb7a65e5d4",7706:"084c880921425637920e",7730:"4221ea7277180fa5d884",7763:"019f53ff26ff42aabe3d",7808:"c8eaa54ca45a1090dd5f",7838:"6fe5168691086db8cbd9",7862:"11c9f5464bb42f3ce3be",7907:"2c529443b678016ee573",7908:"197eb9ea77198a4ebbfb",7937:"daf301486449b7391e74",7973:"7abb743e62fde74ae757",7974:"59832f75fa24534900f7",8057:"6f79158c224c57afd15b",8087:"03775afecdc11a56ceef",8112:"84e67b67f400f445966b",8179:"3abd10131387e0e8734d",8227:"57bece2e1ebdc5ce7b66",8241:"8f0c19eb2acdba5c636d",8261:"4d5a252709c31a8cb45a",8301:"684dc7344d536f0ecd35",8333:"828734a7d4bb397a6a95",8357:"e9108f4b4f2b4063a168",8358:"0a5f3d12b2d8a3a739f6",8542:"05d6838adeacdf0949c4",8638:"2fce2d3ff249e6832a00",8640:"bfd1d591ba04fbc522c6",8643:"87620c5cf0092890cf40",8730:"1cb706461637ccc7c7c9",8753:"e1e9d58c06656a5f3f21",8830:"b01bc3021b0e9a096826",8843:"35f461f6c8812e289cef",8856:"7c5e11a2aaf51647bb80",8902:"724c8d8cdf2b02f596f6",8969:"18ce8cc9d960aa853e03",9075:"b2d63ffe9e5544bf803f",9178:"7ef40483885b98acaf56",9199:"05729d08c338bf976469",9287:"d3a3206c0a32c36a589c",9345:"06caa58c7aba28db43de",9383:"93e0cf7bf7e3138071cd",9392:"7f0ce87f58c93038c4a3",9416:"489b063eac72dc5ddfec",9441:"f4bbc63b85951b05a594",9467:"7ae81062633aa545221e",9486:"38ac78c1e526fdd19f96",9493:"753438df9825c01a6e1f",9507:"a29b3c11b5946eb50ec5",9587:"ce608a006ad2458e2e62",9598:"ead17e253cc1754ad763",9646:"4d77d25ba25ffa0eb28b",9667:"f0d81bc90808f937c899",9695:"43a8736f92e4149c2be7",9821:"8b6ebbba3437a1a0182c",9824:"a10ab01aa5bed4eadc34",9850:"0b9f599e188c375a6351",9880:"9d674772f9ede9b37c5c",9964:"7a90868b9a574e22414d"}[e]+".js",o.miniCssF=e=>e+"."+o.h()+".css",o.h=()=>"71d7d5f35c03e956802b",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="ng-universal-demo:",o.l=(e,a,b,f)=>{if(c[e])c[e].push(a);else{var t,r;if(void 0!==b)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==d+b){t=l;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,o.nc&&t.setAttribute("nonce",o.nc),t.setAttribute("data-webpack",d+b),t.src=e),c[e]=[a];var u=(a,b)=>{t.onerror=t.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(b))),a)return a(b)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),r&&document.head.appendChild(t)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="www/",f=e=>new Promise(((a,b)=>{var c=o.miniCssF(e),d=o.p+c;if(((e,a)=>{for(var b=document.getElementsByTagName("link"),c=0;c<b.length;c++){var d=(t=b[c]).getAttribute("data-href")||t.getAttribute("href");if("stylesheet"===t.rel&&(d===e||d===a))return t}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){var t;if((d=(t=f[c]).getAttribute("data-href"))===e||d===a)return t}})(c,d))return a();((e,a,b,c)=>{var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onerror=d.onload=f=>{if(d.onerror=d.onload=null,"load"===f.type)b();else{var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.href||a,n=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.type=t,n.request=r,d.parentNode.removeChild(d),c(n)}},d.href=a,document.head.appendChild(d)})(e,d,a,b)})),t={3666:0},o.f.miniCss=(e,a)=>{t[e]?a.push(t[e]):0!==t[e]&&{3688:1}[e]&&a.push(t[e]=f(e).then((()=>{t[e]=0}),(a=>{throw delete t[e],a})))},(()=>{var e={3666:0,8233:0};o.f.j=(a,b)=>{var c=o.o(e,a)?e[a]:void 0;if(0!==c)if(c)b.push(c[2]);else if(/^(3666|8233)$/.test(a))e[a]=0;else{var d=new Promise(((b,d)=>c=e[a]=[b,d]));b.push(c[2]=d);var f=o.p+o.u(a),t=new Error;o.l(f,(b=>{if(o.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=b&&("load"===b.type?"missing":b.type),f=b&&b.target&&b.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+f+")",t.name="ChunkLoadError",t.type=d,t.request=f,c[1](t)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,b)=>{var c,d,[f,t,r]=b,n=0;if(f.some((a=>0!==e[a]))){for(c in t)o.o(t,c)&&(o.m[c]=t[c]);if(r)var i=r(o)}for(a&&a(b);n<f.length;n++)d=f[n],o.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return o.O(i)},b=self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[];b.forEach(a.bind(null,0)),b.push=a.bind(null,b.push.bind(b))})()})();
//# sourceMappingURL=runtime.71d7d5f35c03e956802b.js.map