"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[5387],{15523:(n,t,e)=>{e.d(t,{w:()=>o});var i=e(32501);function o(n){return(0,i.R)(n,"layoutEditorMetadata")}},15387:(n,t,e)=>{e.r(t),e.d(t,{default:()=>g});var i=e(14392),o=e(34987),s=e(10431),r=e(15523);function a(n,t,e,i,o,s,r){try{var a=n[s](r),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}const c=function(){var n,t=(n=function*(){return new((yield e.e(8762).then(e.bind(e,98762))).PlaceholderContainerLayoutEditorMetadata)},function(){var t=this,e=arguments;return new Promise((function(i,o){var s=n.apply(t,e);function r(n){a(s,i,o,r,c,"next",n)}function c(n){a(s,i,o,r,c,"throw",n)}r(void 0)}))});return function(){return t.apply(this,arguments)}}();var u=e(46936),l=e(13341),d=e(52900),h=e(94128),f=e(83210),p=e(5419);function y(n,t){}let v=class extends o.h{};v.ɵfac=function(){let n;return function(t){return(n||(n=u.n5(v)))(t||v)}}(),v.ɵcmp=l.Xp({type:v,selectors:[["placeholder-container"]],standalone:!0,features:[d.q,h.j],decls:1,vars:1,consts:[[3,"layoutComponentRenderer"]],template:function(n,t){1&n&&f.Y(0,y,0,0,"ng-template",0),2&n&&p.Q("layoutComponentRenderer",null==t.options?null:t.options.content)},dependencies:[s.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),v=(0,i.gn)([(0,r.w)(c)],v);const g=v},34987:(n,t,e)=>{e.d(t,{h:()=>p});var i=e(12987),o=e(34955),s=e(55163),r=e(37654),a=e(66382),c=e(47948),u=e(97873),l=e(13341),d=e(92927);function h(n,t,e,i,o,s,r){try{var a=n[s](r),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function f(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var s=n.apply(t,e);function r(n){h(s,i,o,r,a,"next",n)}function a(n){h(s,i,o,r,a,"throw",n)}r(void 0)}))}}class p{constructor(n,t,e,i){this.changeDetector=n,this.componentElement=t,this.injector=e,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const n of this.extensions)n.destroy();this.onDestroy()}}ngOnInit(){var n=this;return f((function*(){if(n.initialized)return;n.initialized=!0;const t=n.extensionsOptions;if(yield n.onInit(),yield n.onOptionsSet(),t)for(const t of n.extensions)yield t.initialize(n.injector,n.element,n);yield n.afterInit()}))()}ngOnChanges(n){var t=this;return f((function*(){if((0,o.$)("options")in n){yield t.onOptionsSet();const n=t.extensionsOptions;if(n)for(const e of t.extensions)yield e.optionsChange(n);if(!t.initialized)return;yield t.onOptionsChange()}delete n[(0,o.$)("options")],(0,s.Qr)(n)||t.onChanges(n)}))()}registerExtensions(n){this.extensions=n}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(n){}onOptionsSet(){}onDestroy(){}}p.ɵfac=function(n){return new(n||p)(r.Y(a.s),r.Y(c.SB),r.Y(u.z),r.Y(i.bZ,8))},p.ɵdir=l.lG({type:p,features:[d.T]})}}]);
//# sourceMappingURL=5387.client.chunk.a875496dfa638ba962a7.js.map