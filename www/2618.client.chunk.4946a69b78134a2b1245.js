"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[2618],{42618:(n,t,e)=>{e.r(t),e.d(t,{default:()=>w,extensions:()=>x});var i=e(8046),o=e(15950),r=e(5027),s=e(49608),a=e(30048),c=e(71714),l=e(34291);function u(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function d(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function s(n){u(r,i,o,s,a,"next",n)}function a(n){u(r,i,o,s,a,"throw",n)}s(void 0)}))}}const h=function(){var n=d((function*(){return new((yield e.e(169).then(e.bind(e,80169))).DataBlockLayoutEditorMetadata)}));return function(){return n.apply(this,arguments)}}(),p=function(){var n=d((function*(){return new((yield Promise.all([e.e(213),e.e(3729),e.e(9467)]).then(e.bind(e,99467))).DataBlockRelationsEditorMetadata)}));return function(){return n.apply(this,arguments)}}();var f=e(35767),v=e(12900),m=e(39238),y=e(11817),g=e(10073);function P(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}let C=class extends r.h{ngOnChanges(n){var t,e=()=>super.ngOnChanges,i=this;return(t=function*(){yield e().call(i,n),(0,c.$)("data")in n&&(i.componentElement.nativeElement.innerHTML=i.compiledTemplate?.(i.data)??"")},function(){var n=this,e=arguments;return new Promise((function(i,o){var r=t.apply(n,e);function s(n){P(r,i,o,s,a,"next",n)}function a(n){P(r,i,o,s,a,"throw",n)}s(void 0)}))})()}onOptionsSet(){this.initialized&&(this.options?.template&&(this.compiledTemplate=l.compile(this.options.template)),this.componentElement.nativeElement.innerHTML=this.compiledTemplate?.(this.data)??"")}};C.ɵfac=function(){let n;return function(t){return(n||(n=f.n5(C)))(t||C)}}(),C.ɵcmp=v.Xp({type:C,selectors:[["data-block"]],inputs:{data:"data"},standalone:!0,features:[m.q,y.T,g.j],decls:0,vars:0,template:function(n,t){},styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),C=(0,o.gn)([(0,a.i)(p),(0,s.w)(h)],C);const w=C,x=[i.i]},49608:(n,t,e)=>{e.d(t,{w:()=>o});var i=e(56538);function o(n){return(0,i.R)(n,"layoutEditorMetadata")}},5027:(n,t,e)=>{e.d(t,{h:()=>f});var i=e(84432),o=e(71714),r=e(54285),s=e(56274),a=e(41080),c=e(2492),l=e(905),u=e(12900),d=e(11817);function h(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function p(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function s(n){h(r,i,o,s,a,"next",n)}function a(n){h(r,i,o,s,a,"throw",n)}s(void 0)}))}}class f{constructor(n,t,e,i){this.changeDetector=n,this.componentElement=t,this.injector=e,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const n of this.extensions)n.destroy();this.onDestroy()}}ngOnInit(){var n=this;return p((function*(){if(n.initialized)return;n.initialized=!0;const t=n.extensionsOptions;if(yield n.onInit(),yield n.onOptionsSet(),t)for(const t of n.extensions)yield t.initialize(n.injector,n.element,n);yield n.afterInit()}))()}ngOnChanges(n){var t=this;return p((function*(){if((0,o.$)("options")in n){yield t.onOptionsSet();const n=t.extensionsOptions;if(n)for(const e of t.extensions)yield e.optionsChange(n);if(!t.initialized)return;yield t.onOptionsChange()}delete n[(0,o.$)("options")],(0,r.Qr)(n)||t.onChanges(n)}))()}registerExtensions(n){this.extensions=n}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(n){}onOptionsSet(){}onDestroy(){}}f.ɵfac=function(n){return new(n||f)(s.Y(a.s),s.Y(c.SB),s.Y(l.z),s.Y(i.bZ,8))},f.ɵdir=u.lG({type:f,features:[d.T]})},8046:(n,t,e)=>{e.d(t,{i:()=>a});var i=e(71029),o=e(4033),r=e(43816);function s(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}class a extends i.z{constructor(){super(...arguments),this.relationsProcessor=null,this.componentManager=null}onInit(){var n,t=this;return(n=function*(){t.injector&&t.metadata&&t.instance&&(t.relationsProcessor??(t.relationsProcessor=t.injector.get(o.v,null)),t.componentManager??(t.componentManager=t.injector.get(r.s,null)),t.relationsProcessor&&t.componentManager&&(t.componentManager.registerComponent(t.metadata.id,t.instance),yield t.relationsProcessor.initialized,t.relationsProcessor.updateRelations(t.metadata.id)))},function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function a(n){s(r,i,o,a,c,"next",n)}function c(n){s(r,i,o,a,c,"throw",n)}a(void 0)}))})()}onDestroy(){this.relationsProcessor&&this.componentManager&&this.metadata&&(this.relationsProcessor.destroyComponent(this.metadata.id),this.componentManager.unregisterComponent(this.metadata.id))}}},71029:(n,t,e)=>{function i(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,r){var s=n.apply(t,e);function a(n){i(s,o,r,a,c,"next",n)}function c(n){i(s,o,r,a,c,"throw",n)}a(void 0)}))}}e.d(t,{z:()=>r});class r{constructor(n){this.metadata=n,this.initialized=!1}initialize(n,t,e){var i=this;return o((function*(){i.initialized=!0,i.injector=n,i.element=t,i.instance=e,yield i.onInit()}))()}optionsChange(n){var t=this;return o((function*(){t.options=n,t.initialized&&(yield t.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=2618.client.chunk.4946a69b78134a2b1245.js.map