(()=>{"use strict";var e,a,d,f,c,b,t,r={},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var d=n[e]={exports:{}};return r[e].call(d.exports,d,d.exports,o),d.exports}o.m=r,o.amdO={},e=[],o.O=(a,d,f,c)=>{if(!d){var b=1/0;for(i=0;i<e.length;i++){for(var[d,f,c]=e[i],t=!0,r=0;r<d.length;r++)(!1&c||b>=c)&&Object.keys(o.O).every((e=>o.O[e](d[r])))?d.splice(r--,1):(t=!1,c<b&&(b=c));if(t){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[d,f,c]},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var c=Object.create(null);o.r(c);var b={};a=a||[null,d({}),d([]),d(d)];for(var t=2&f&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,o.d(c,b),c},o.d=(e,a)=>{for(var d in a)o.o(a,d)&&!o.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,d)=>(o.f[d](e,a),a)),[])),o.u=e=>e+".client.chunk."+{7:"e5b0cb05a035e1861532",84:"f3d26d364540204e310d",118:"ec4322323d2ce6c8ee8d",169:"69ea6bc05bc0abc9a0ac",257:"85562c57ad9cb05ae513",316:"826d80d5214316461094",322:"99f9b6fb2c027db11a47",385:"870358b92b4e86be582e",433:"39c3d08e2f79c4251fd1",441:"f0bd03e6e1f86ca5421f",461:"1a70fabf20b406e9dd87",519:"e06b9aad66564c0e90fb",576:"bc86f10cab50548af3c5",603:"02f425f674252c698551",658:"e21041c1ef63b2a05e1b",670:"d6accf44e5032e40c532",688:"60a34dd8e8b65e3edebc",689:"647eb366012b6cfcdbd0",763:"ead0976ec5986fd332d4",783:"103f0da6f716d5c5e57e",797:"7740ccf916074e928b7b",850:"8180ed3fb51299156f5d",889:"a29cc847f3e8e8ad3242",972:"341f598794d7c879f9d8",1003:"f3ae5a18900ef61f5a96",1024:"b63a4e10330b1583928a",1081:"7f85f229a3e22d1e7baf",1120:"b014da4382ec0a645090",1123:"1edb1727975f0e662846",1138:"d4944ef5203244364032",1214:"475336f9842f96a20ee0",1217:"38747a7e6244d539f751",1231:"1dc67a25cbf8791211b2",1257:"81904e78c8814757713d",1263:"b4c778134ac5e8d90968",1293:"f7a839f338174966036d",1348:"c57bf1ec680ac9225927",1352:"943f7b3b9cc88defad00",1458:"dc7d6334d07f8bdc9e90",1527:"940dd599822e9642c994",1533:"9a28d397e4180a09e45d",1548:"8918979c2b9331bccdc8",1559:"0b915c0f0de54973b8d6",1614:"ccf4b51dd140f69f2895",1644:"9bc7ac7960133d8556ce",1719:"db296ed1df359c699bd4",1734:"8e0653b083661e6a4f51",1735:"eea254907181b16691d3",1758:"f1a16d5a6d31ec6680b4",1766:"20b69187bdebd67d153b",1771:"2650444271c2ea65a2e8",1828:"7c4edd1e9de4862f169b",1882:"769bb1419b31584d0270",1893:"e16bac322564c848d2c7",2149:"bd9be4b646b2ae2121eb",2252:"e1f5c0be32ea09cc6ed1",2267:"68dd5c29b8b41a8e88d7",2303:"e419efdf5ad7467225e3",2316:"c9025de5f892da629146",2365:"2bafeef334c1766fd91c",2369:"f802a40dddc1d7419f7d",2406:"fed29b42062eb376e274",2412:"34c7ab725266fd9c069a",2476:"b7db4dea4fcd581037a1",2504:"c0cf54bb88b0c705d80c",2505:"90810c0a922fd71bfd8a",2542:"b15e866b2fc00658c15f",2554:"d56efaad73db1f196162",2603:"38e7cfc4e9588b1267b7",2658:"4acb55d9695a810350ae",2666:"687c29a0e75d79379398",2668:"9e3699517385fa5786e6",2682:"e151e87364f84d71bced",2842:"6fd633b9b17223b9f106",2845:"cd5437b69b8a8b4ef6d0",2869:"8a0925d358d28a2a3a09",2878:"7efcb6f162fdce2e2ec3",2905:"86088a0b776fe4ada5ea",2914:"e193bd29b189a7138da0",2922:"1df9c81ca9a1ca0f8f6b",2971:"23c62d95f9a2dc4c8a06",3007:"22d9979869f24e4e985d",3056:"5d750da406e02466b5b9",3147:"c4a5e81e8cf5b6339d5f",3173:"f817c5119428c40a6de6",3224:"3835e11b6bab3251eefd",3285:"5294aa633142dd262dbe",3318:"af843eccee221d2f395d",3349:"8700604ca35d64499161",3437:"e27f99be809995114724",3464:"be56fe9ab28cf512acf7",3505:"9bc14abbd93b4379d319",3536:"d9d21003abc1ae13c7a2",3571:"caaba25b96d46c41dd2f",3604:"427893e310cb5b173b68",3647:"1cc21d0e1fbc9c25f6c6",3665:"58d49e46360bfaf2acd0",3703:"1442ba6437033d4addff",3711:"2860b953711c1b9f159f",3734:"883adcfc954e8a0e4210",3774:"bcebb13bbc09276839f0",3833:"0e560575f46b0cdc6e52",3919:"9d3613c97b50b690fc11",3928:"c42c472e1a23196c80de",3945:"8c3a239e326b3c9a681f",4073:"edb848c8aec7d9371a9e",4135:"ff4a9829f16edd29a5c2",4139:"1c8af45416c90ebf0baf",4183:"b658dc23a346804df19b",4195:"1ce2eedf6ea30ea8c4f7",4212:"42027e66edd56aad74c1",4346:"5ba607ec15f2ea1adeaa",4384:"a303e4939a1ea9bf312b",4459:"b33c9c32ca7f617da31f",4589:"a5c8100328fd0309982a",4641:"fd337befa9d669c37edf",4701:"a70b2d8cf59b31c82f9f",4741:"6fbbe1f1daf682cfb633",4743:"cd27b394e11876d88e64",4769:"558cfb7d8f5efa8a3685",4795:"681f0a002057773c05f4",4802:"1126864213d97c770e73",4873:"da23ef8b90655b1e41cd",4894:"836da3cac47a47d78079",4942:"651934a7e1c28b9f3087",4952:"58f0432628da333ba6d6",4981:"84bdb8b0eb76ec3d0a87",4996:"b8b8018772ffd5608a44",5016:"9396ae26779a0175f617",5061:"bf038a461b99b99bdb32",5114:"b0d7d80b5666d001b60e",5190:"a483f54bd88b3d79d41c",5247:"bca83769b43e17a2f812",5318:"4ce58f5e7285851e6100",5369:"e79d89e6f4e1a45ab1f2",5387:"a875496dfa638ba962a7",5399:"8a5356a276e918a91c55",5423:"bcf6deed2eb1fde973b2",5435:"e684afa96022cc30a402",5437:"f01a70e3c62e4cc7efd8",5453:"2242b7c6067a88b7e5a6",5489:"8ec8aaa31b0a35c1aef2",5538:"95444e1fff4088041c63",5578:"291e553d27a8decb4055",5593:"6915b72a19267ee97c6b",5595:"534104e038426cde3b6b",5640:"8411187b4e709d958300",5667:"0e74d0b2282523446e9d",5692:"f8301dd2f2b606441ce3",5739:"fef743dfa672b691f00e",5895:"8381498f7bbca8baf110",5930:"daabfa8d06112bfb7e77",5950:"8f6c86f490c55e0fa0c9",6021:"a21444c1af619de08c94",6086:"709616cad076f154d90d",6097:"4dea22e8b6aff527ed11",6110:"55545bdbc6abb7d4b706",6162:"a03dd7ef9bd286f77689",6166:"6fbec696c419f358ecc4",6222:"c53abc8b05d962fae9ba",6284:"32c66b97770087e3670f",6408:"4c5318b0265ccbfaa27a",6418:"34b4419210b5861dbad7",6519:"2fa4a95618189c5ff6aa",6527:"40f475f2d6ea4e11a135",6546:"0ddb584c8c6f3b33ddcc",6553:"5ee35979a58cfdeb0b0b",6609:"430f5deb1ced9c9c0d79",6610:"5c0bc9eb5a1640a2b313",6632:"960782ff5a7f19d5fe56",6644:"f52250a633ac91ff8f1d",6792:"9a5a23917f450a9886da",7054:"8b7761582bd0340eb69c",7114:"e0934bf2c6c770be2575",7126:"f8fc3946d40da5103404",7167:"18bb7755d91bd0418f1d",7171:"e54fd3f246095fac73b5",7204:"e1b58de6cd05677e72c9",7217:"5efeee0657c46d826fcc",7233:"bb1c2e3e891d1d0a2048",7260:"70704dfb52c7efef5e1c",7276:"2c626dcc1be2845d2f4c",7407:"8d03f830ab8859a17664",7437:"18fd563d12ed501703ce",7470:"e438d2d138a82fe5cdca",7499:"b5aaa30b60bdd82e5800",7519:"83c7145f0dfcb581c3a3",7539:"2b9f6d5fc9c6af6ff6c1",7623:"5c765a301bb62b4daf55",7628:"0e84af8eca04a7a2fb0c",7709:"c687f746ece8fe6cd93d",7730:"4221ea7277180fa5d884",7736:"366d912a84fde1ea7d6d",7847:"27879f28b713a2f2694b",7868:"70bca9518e5ee0dba431",7897:"b553770a40d6bc85f65e",7925:"7c3a4ba93fdfbccc96e3",7932:"4fb1196a5aaf92c245fa",7966:"2d7a8ee2d4a9ea946d1d",7973:"2306af41607725cd1d76",8047:"825221f802f6ec441593",8062:"2509ef197f2a69469cc4",8167:"4811a30138589ccbcd78",8177:"670ab420650a0beee638",8178:"ed99e29e97a6c6c6abf6",8191:"9b8978f2d4aa8e84730c",8282:"8250ef5279cfeec18305",8387:"00ce156fffe2434c94a1",8410:"70ad646493943d706611",8411:"e035fed98997b61de4cd",8439:"5c11529470a672873590",8440:"73dcb096ddf9aeb1c4a7",8464:"a1da633458495ed171e2",8467:"6e6a4cefa02cc54c1a3e",8496:"9e348519f290b7ee6469",8503:"822aedba9ac312802308",8513:"ffa198f3efc8438735d2",8529:"a07d3df7677aeb82e330",8555:"15dc415026635015b181",8571:"c3cbdfe07812587bad65",8603:"d13ad36531cf4cf72595",8684:"5f753d924849d28bb872",8697:"68ac6e5528493a096f65",8712:"46edd5556c3e7ed7215c",8757:"4ad3f7e2a7dbfe4f359e",8762:"679f71f5b07da115d237",8786:"6f2b374504f473200ed8",8819:"e05c038ad4857497acc5",8831:"1ea2e1cb520c528b6bb4",8881:"8214f9143e39bd534466",8887:"35b5eb6ad82d422ed585",8896:"f139b53df2bf18889956",8915:"d048744a420dca197813",8972:"6df983fc2a744dd1514c",8980:"2f18a870209b98b95911",8990:"54ca062b38787f3fa05a",9086:"d0db4e74b89ed9e9f4a8",9189:"627d97d2e91defeac738",9207:"1b4f7cc010fdc98d3559",9208:"6cd3a38690f280afd613",9245:"30f4c17527e263c7b610",9264:"64b0eebfc0bbf0f0ebb9",9284:"bfc1d1124b17528d3190",9309:"4a01af9f44da90e1669a",9316:"1ce9f11c4978e6bd4af4",9322:"2283503e42773c427764",9325:"75248a8feaa58a3979ca",9341:"5e433dc8048f2be7a129",9351:"6e65ebde915ad84b13f9",9438:"0879dc949d915f44769c",9444:"f23c45d2117956fcb640",9466:"9d62fddd557c02afa0c4",9486:"dbe41f15ad570093406f",9585:"ecdafde867682c2c2a06",9587:"ce608a006ad2458e2e62",9598:"3632fc58957f0d2c4fb2",9634:"0b0f7d9042a35907b1ac",9674:"7af3e34f316842b608bb",9684:"f5c85d793daf4491755e",9833:"f577aff4eb1f626fef54",9843:"3ea68c6fbdacfbae6fb8",9880:"a7eca34932787679d902",9912:"92b823fd215259316476"}[e]+".js",o.miniCssF=e=>e+"."+o.h()+".css",o.h=()=>"24a1813d8034ebd9a84c",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},c="ng-universal-demo:",o.l=(e,a,d,b)=>{if(f[e])f[e].push(a);else{var t,r;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+d){t=l;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,o.nc&&t.setAttribute("nonce",o.nc),t.setAttribute("data-webpack",c+d),t.src=e),f[e]=[a];var u=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var c=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(d))),a)return a(d)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),r&&document.head.appendChild(t)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="www/",b=e=>new Promise(((a,d)=>{var f=o.miniCssF(e),c=o.p+f;if(((e,a)=>{for(var d=document.getElementsByTagName("link"),f=0;f<d.length;f++){var c=(t=d[f]).getAttribute("data-href")||t.getAttribute("href");if("stylesheet"===t.rel&&(c===e||c===a))return t}var b=document.getElementsByTagName("style");for(f=0;f<b.length;f++){var t;if((c=(t=b[f]).getAttribute("data-href"))===e||c===a)return t}})(f,c))return a();((e,a,d,f)=>{var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onerror=c.onload=b=>{if(c.onerror=c.onload=null,"load"===b.type)d();else{var t=b&&("load"===b.type?"missing":b.type),r=b&&b.target&&b.target.href||a,n=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.type=t,n.request=r,c.parentNode.removeChild(c),f(n)}},c.href=a,document.head.appendChild(c)})(e,c,a,d)})),t={3666:0},o.f.miniCss=(e,a)=>{t[e]?a.push(t[e]):0!==t[e]&&{2542:1}[e]&&a.push(t[e]=b(e).then((()=>{t[e]=0}),(a=>{throw delete t[e],a})))},(()=>{var e={3666:0,8233:0};o.f.j=(a,d)=>{var f=o.o(e,a)?e[a]:void 0;if(0!==f)if(f)d.push(f[2]);else if(/^(3666|8233)$/.test(a))e[a]=0;else{var c=new Promise(((d,c)=>f=e[a]=[d,c]));d.push(f[2]=c);var b=o.p+o.u(a),t=new Error;o.l(b,(d=>{if(o.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var c=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+b+")",t.name="ChunkLoadError",t.type=c,t.request=b,f[1](t)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,d)=>{var f,c,[b,t,r]=d,n=0;if(b.some((a=>0!==e[a]))){for(f in t)o.o(t,f)&&(o.m[f]=t[f]);if(r)var i=r(o)}for(a&&a(d);n<b.length;n++)c=b[n],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(i)},d=self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();
//# sourceMappingURL=runtime.24a1813d8034ebd9a84c.js.map