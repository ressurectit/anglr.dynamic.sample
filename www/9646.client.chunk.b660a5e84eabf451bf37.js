"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[9646],{34047:(n,t,e)=>{e.d(t,{j:()=>i});const i=(n,t)=>{t.gridRowStart=n?.gridRowStart?.toString()??"",t.gridRowEnd=n?.gridRowEnd?.toString()??"",t.gridColumnStart=n?.gridColumnStart?.toString()??"",t.gridColumnEnd=n?.gridColumnEnd?.toString()??""}},89646:(n,t,e)=>{e.r(t),e.d(t,{default:()=>m});var i=e(15950),o=e(5027),r=e(71422),s=e(49608);function a(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}const c=function(){var n,t=(n=function*(){return new((yield e.e(3102).then(e.bind(e,93102))).GridPanelCellLayoutEditorMetadata)},function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function s(n){a(r,i,o,s,c,"next",n)}function c(n){a(r,i,o,s,c,"throw",n)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();var l=e(34047),u=e(35767),d=e(12900),h=e(39238),f=e(10073),p=e(40486),g=e(58138);function y(n,t){}let v=class extends o.h{onOptionsSet(){const n=this.componentElement.nativeElement.style;(0,l.j)(this.options,n)}};v.ɵfac=function(){let n;return function(t){return(n||(n=u.n5(v)))(t||v)}}(),v.ɵcmp=d.Xp({type:v,selectors:[["grid-panel-cell"]],standalone:!0,features:[h.q,f.j],decls:1,vars:1,consts:[[3,"layoutComponentRenderer"]],template:function(n,t){1&n&&p.Y(0,y,0,0,"ng-template",0),2&n&&g.Q("layoutComponentRenderer",null==t.options?null:t.options.component)},dependencies:[r.i],encapsulation:2,changeDetection:0}),v=(0,i.gn)([(0,s.w)(c)],v);const m=v},49608:(n,t,e)=>{e.d(t,{w:()=>o});var i=e(56538);function o(n){return(0,i.R)(n,"layoutEditorMetadata")}},5027:(n,t,e)=>{e.d(t,{h:()=>p});var i=e(84432),o=e(71714),r=e(54285),s=e(56274),a=e(41080),c=e(2492),l=e(905),u=e(12900),d=e(11817);function h(n,t,e,i,o,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(i,o)}function f(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function s(n){h(r,i,o,s,a,"next",n)}function a(n){h(r,i,o,s,a,"throw",n)}s(void 0)}))}}class p{constructor(n,t,e,i){this.changeDetector=n,this.componentElement=t,this.injector=e,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const n of this.extensions)n.destroy();this.onDestroy()}}ngOnInit(){var n=this;return f((function*(){if(n.initialized)return;n.initialized=!0;const t=n.extensionsOptions;if(yield n.onInit(),yield n.onOptionsSet(),t)for(const t of n.extensions)yield t.initialize(n.injector,n.element,n);yield n.afterInit()}))()}ngOnChanges(n){var t=this;return f((function*(){if((0,o.$)("options")in n){yield t.onOptionsSet();const n=t.extensionsOptions;if(n)for(const e of t.extensions)yield e.optionsChange(n);if(!t.initialized)return;yield t.onOptionsChange()}delete n[(0,o.$)("options")],(0,r.Qr)(n)||t.onChanges(n)}))()}registerExtensions(n){this.extensions=n}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(n){}onOptionsSet(){}onDestroy(){}}p.ɵfac=function(n){return new(n||p)(s.Y(a.s),s.Y(c.SB),s.Y(l.z),s.Y(i.bZ,8))},p.ɵdir=u.lG({type:p,features:[d.T]})}}]);
//# sourceMappingURL=9646.client.chunk.b660a5e84eabf451bf37.js.map