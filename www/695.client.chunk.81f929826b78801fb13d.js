"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[695],{38359:(n,t,e)=>{e.d(t,{I:()=>D});var i=e(15950),o=e(14015),r=e(5027),s=e(71422),a=e(36851),c=e(49608),u=e(30048);function l(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function d(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function s(n){l(r,i,o,s,a,"next",n)}function a(n){l(r,i,o,s,a,"throw",n)}s(void 0)}))}}const f=function(){var n=d((function*(){return new((yield Promise.all([e.e(2099),e.e(2823)]).then(e.bind(e,72823))).IfBlockLayoutEditorMetadata)}));return function(){return n.apply(this,arguments)}}(),h=function(){var n=d((function*(){return new((yield Promise.all([e.e(1243),e.e(3729),e.e(1849)]).then(e.bind(e,71849))).IfBlockRelationsEditorMetadata)}));return function(){return n.apply(this,arguments)}}(),p=function(){var n=d((function*(){return(yield e.e(9075).then(e.bind(e,13361))).IfBlockDesignerSAComponent}));return function(){return n.apply(this,arguments)}}();var v=e(97740),y=e(40486),g=e(14151),m=e(5617),C=e(58138),P=e(35767),x=e(12900),O=e(39238),w=e(10073),I=e(77177);function z(n,t){}function M(n,t){if(1&n&&(v.yn(0),y.Y(1,z,0,0,"ng-template",1),v.BQ()),2&n){const n=g.o();m.x(1),C.Q("layoutComponentRenderer",null==n.options?null:n.options.content)}}let D=class extends r.h{constructor(){super(...arguments),this.condition=!0}onOptionsSet(){this.condition=this.options?.condition??!1}};D.ɵfac=function(){let n;return function(t){return(n||(n=P.n5(D)))(t||D)}}(),D.ɵcmp=x.Xp({type:D,selectors:[["if-block"]],inputs:{condition:"condition"},standalone:!0,features:[O.q,w.j],decls:1,vars:1,consts:[[4,"ngIf"],[3,"layoutComponentRenderer"]],template:function(n,t){1&n&&y.Y(0,M,2,1,"ng-container",0),2&n&&C.Q("ngIf",t.condition)},dependencies:[o.e,I.O,s.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),D=(0,i.gn)([(0,a.W)(p),(0,u.i)(h),(0,c.w)(f)],D)},70695:(n,t,e)=>{e.r(t),e.d(t,{default:()=>o,extensions:()=>r});var i=e(8046);const o=e(38359).I,r=[i.i]},36851:(n,t,e)=>{e.d(t,{W:()=>o});var i=e(56538);function o(n){return(0,i.R)(n,"layoutEditorDesignerType")}},49608:(n,t,e)=>{e.d(t,{w:()=>o});var i=e(56538);function o(n){return(0,i.R)(n,"layoutEditorMetadata")}},5027:(n,t,e)=>{e.d(t,{h:()=>p});var i=e(84432),o=e(71714),r=e(54285),s=e(56274),a=e(41080),c=e(2492),u=e(905),l=e(12900),d=e(11817);function f(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function h(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function s(n){f(r,i,o,s,a,"next",n)}function a(n){f(r,i,o,s,a,"throw",n)}s(void 0)}))}}class p{constructor(n,t,e,i){this.changeDetector=n,this.componentElement=t,this.injector=e,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const n of this.extensions)n.destroy();this.onDestroy()}}ngOnInit(){var n=this;return h((function*(){if(n.initialized)return;n.initialized=!0;const t=n.extensionsOptions;if(yield n.onInit(),yield n.onOptionsSet(),t)for(const t of n.extensions)yield t.initialize(n.injector,n.element,n);yield n.afterInit()}))()}ngOnChanges(n){var t=this;return h((function*(){if((0,o.$)("options")in n){yield t.onOptionsSet();const n=t.extensionsOptions;if(n)for(const e of t.extensions)yield e.optionsChange(n);if(!t.initialized)return;yield t.onOptionsChange()}delete n[(0,o.$)("options")],(0,r.Qr)(n)||t.onChanges(n)}))()}registerExtensions(n){this.extensions=n}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(n){}onOptionsSet(){}onDestroy(){}}p.ɵfac=function(n){return new(n||p)(s.Y(a.s),s.Y(c.SB),s.Y(u.z),s.Y(i.bZ,8))},p.ɵdir=l.lG({type:p,features:[d.T]})},30048:(n,t,e)=>{e.d(t,{i:()=>o});var i=e(56538);function o(n){return(0,i.R)(n,"relationsEditorMetadata")}},8046:(n,t,e)=>{e.d(t,{i:()=>a});var i=e(71029),o=e(54699),r=e(43816);function s(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}class a extends i.z{constructor(){super(...arguments),this.relationsProcessor=null,this.componentManager=null}onInit(){var n,t=this;return(n=function*(){t.injector&&t.metadata&&t.instance&&(t.relationsProcessor??(t.relationsProcessor=t.injector.get(o.v,null)),t.componentManager??(t.componentManager=t.injector.get(r.s,null)),t.relationsProcessor&&t.componentManager&&(t.componentManager.registerComponent(t.metadata.id,t.instance),yield t.relationsProcessor.initialized,t.relationsProcessor.updateRelations(t.metadata.id)))},function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function a(n){s(r,i,o,a,c,"next",n)}function c(n){s(r,i,o,a,c,"throw",n)}a(void 0)}))})()}onDestroy(){this.relationsProcessor&&this.componentManager&&this.metadata&&(this.relationsProcessor.destroyComponent(this.metadata.id),this.componentManager.unregisterComponent(this.metadata.id))}}},56538:(n,t,e)=>{function i(n,t){return function(e){return e[t]=n(),e}}e.d(t,{R:()=>i})},71029:(n,t,e)=>{function i(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,r){var s=n.apply(t,e);function a(n){i(s,o,r,a,c,"next",n)}function c(n){i(s,o,r,a,c,"throw",n)}a(void 0)}))}}e.d(t,{z:()=>r});class r{constructor(n){this.metadata=n,this.initialized=!1}initialize(n,t,e){var i=this;return o((function*(){i.initialized=!0,i.injector=n,i.element=t,i.instance=e,yield i.onInit()}))()}optionsChange(n){var t=this;return o((function*(){t.options=n,t.initialized&&(yield t.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=695.client.chunk.81f929826b78801fb13d.js.map