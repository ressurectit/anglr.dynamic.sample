"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[8712],{18712:(n,t,e)=>{e.r(t),e.d(t,{default:()=>w,extensions:()=>x});var i=e(56890),o=e(14392),r=e(34987),s=e(15523),a=e(10382),c=e(34955),l=e(10658);function u(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function d(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function s(n){u(r,i,o,s,a,"next",n)}function a(n){u(r,i,o,s,a,"throw",n)}s(void 0)}))}}const h=function(){var n=d((function*(){return new((yield e.e(8972).then(e.bind(e,38972))).DataBlockLayoutEditorMetadata)}));return function(){return n.apply(this,arguments)}}(),p=function(){var n=d((function*(){return new((yield Promise.all([e.e(6178),e.e(9444),e.e(6021)]).then(e.bind(e,86021))).DataBlockRelationsEditorMetadata)}));return function(){return n.apply(this,arguments)}}();var f=e(46936),v=e(13341),m=e(52900),y=e(92927),g=e(94128);function P(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}let C=class extends r.h{ngOnChanges(n){var t,e=()=>super.ngOnChanges,i=this;return(t=function*(){yield e().call(i,n),(0,c.$)("data")in n&&(i.componentElement.nativeElement.innerHTML=i.compiledTemplate?.(i.data)??"")},function(){var n=this,e=arguments;return new Promise((function(i,o){var r=t.apply(n,e);function s(n){P(r,i,o,s,a,"next",n)}function a(n){P(r,i,o,s,a,"throw",n)}s(void 0)}))})()}onOptionsSet(){this.initialized&&(this.options?.template&&(this.compiledTemplate=l.compile(this.options.template)),this.componentElement.nativeElement.innerHTML=this.compiledTemplate?.(this.data)??"")}};C.ɵfac=function(){let n;return function(t){return(n||(n=f.n5(C)))(t||C)}}(),C.ɵcmp=v.Xp({type:C,selectors:[["data-block"]],inputs:{data:"data"},standalone:!0,features:[m.q,y.T,g.j],decls:0,vars:0,template:function(n,t){},styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),C=(0,o.gn)([(0,a.i)(p),(0,s.w)(h)],C);const w=C,x=[i.i]},15523:(n,t,e)=>{e.d(t,{w:()=>o});var i=e(32501);function o(n){return(0,i.R)(n,"layoutEditorMetadata")}},34987:(n,t,e)=>{e.d(t,{h:()=>f});var i=e(12987),o=e(34955),r=e(55163),s=e(37654),a=e(66382),c=e(47948),l=e(97873),u=e(13341),d=e(92927);function h(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function p(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function s(n){h(r,i,o,s,a,"next",n)}function a(n){h(r,i,o,s,a,"throw",n)}s(void 0)}))}}class f{get element(){return this.componentElement}get extensionsOptions(){return this.options}constructor(n,t,e,i){this.changeDetector=n,this.componentElement=t,this.injector=e,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const n of this.extensions)n.destroy();this.onDestroy()}}ngOnInit(){var n=this;return p((function*(){if(n.initialized)return;n.initialized=!0;const t=n.extensionsOptions;if(yield n.onInit(),yield n.onOptionsSet(),t)for(const t of n.extensions)yield t.initialize(n.injector,n.element,n);yield n.afterInit()}))()}ngOnChanges(n){var t=this;return p((function*(){if((0,o.$)("options")in n){yield t.onOptionsSet();const n=t.extensionsOptions;if(n)for(const e of t.extensions)yield e.optionsChange(n);if(!t.initialized)return;yield t.onOptionsChange()}delete n[(0,o.$)("options")],(0,r.Qr)(n)||t.onChanges(n)}))()}registerExtensions(n){this.extensions=n}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(n){}onOptionsSet(){}onDestroy(){}}f.ɵfac=function(n){return new(n||f)(s.Y(a.s),s.Y(c.SB),s.Y(l.z),s.Y(i.bZ,8))},f.ɵdir=u.lG({type:f,features:[d.T]})},56890:(n,t,e)=>{e.d(t,{i:()=>a});var i=e(67793),o=e(93533),r=e(74421);function s(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}class a extends i.z{constructor(){super(...arguments),this.relationsProcessor=null,this.componentManager=null}onInit(){var n,t=this;return(n=function*(){t.injector&&t.metadata&&t.instance&&(t.relationsProcessor??(t.relationsProcessor=t.injector.get(o.v,null)),t.componentManager??(t.componentManager=t.injector.get(r.s,null)),t.relationsProcessor&&t.componentManager&&(t.componentManager.registerComponent(t.metadata.id,t.instance),yield t.relationsProcessor.initialized,t.relationsProcessor.updateRelations(t.metadata.id)))},function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function a(n){s(r,i,o,a,c,"next",n)}function c(n){s(r,i,o,a,c,"throw",n)}a(void 0)}))})()}onDestroy(){this.relationsProcessor&&this.componentManager&&this.metadata&&(this.relationsProcessor.destroyComponent(this.metadata.id),this.componentManager.unregisterComponent(this.metadata.id))}}},67793:(n,t,e)=>{function i(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,r){var s=n.apply(t,e);function a(n){i(s,o,r,a,c,"next",n)}function c(n){i(s,o,r,a,c,"throw",n)}a(void 0)}))}}e.d(t,{z:()=>r});class r{constructor(n){this.metadata=n,this.initialized=!1}initialize(n,t,e){var i=this;return o((function*(){i.initialized=!0,i.injector=n,i.element=t,i.instance=e,yield i.onInit()}))()}optionsChange(n){var t=this;return o((function*(){t.options=n,t.initialized&&(yield t.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=8712.client.chunk.9225117929a77db0d669.js.map