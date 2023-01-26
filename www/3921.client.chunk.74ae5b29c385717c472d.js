"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[3921],{13921:(t,n,e)=>{e.r(n),e.d(n,{default:()=>C,extensions:()=>x});var i=e(60583),o=e(14392),s=e(34987),r=e(10431),a=e(36482),l=e(15523);function d(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}const c=function(){var t,n=(t=function*(){return new((yield Promise.all([e.e(7),e.e(1367)]).then(e.bind(e,18983))).BlockLayoutEditorMetadata)},function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function r(t){d(s,i,o,r,a,"next",t)}function a(t){d(s,i,o,r,a,"throw",t)}r(void 0)}))});return function(){return n.apply(this,arguments)}}();var h=e(46936),u=e(13341),g=e(52900),f=e(94128),p=e(83210),m=e(5419);function y(t,n){}let v=class extends s.h{};v.ɵfac=function(){let t;return function(n){return(t||(t=h.n5(v)))(n||v)}}(),v.ɵcmp=u.Xp({type:v,selectors:[["block"]],standalone:!0,features:[g.q,f.j],decls:1,vars:1,consts:[[3,"layoutComponentRenderer"]],template:function(t,n){1&t&&p.Y(0,y,0,0,"ng-template",0),2&t&&m.Q("layoutComponentRenderer",null==n.options?null:n.options.content)},dependencies:[r.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),v=(0,o.gn)([(0,a.T)((t=>t?.content?[t?.content]:[])),(0,l.w)(c)],v);const C=v,x=[i.O]},15523:(t,n,e)=>{e.d(n,{w:()=>o});var i=e(32501);function o(t){return(0,i.R)(t,"layoutEditorMetadata")}},34987:(t,n,e)=>{e.d(n,{h:()=>f});var i=e(12987),o=e(34955),s=e(55163),r=e(37654),a=e(66382),l=e(47948),d=e(97873),c=e(13341),h=e(92927);function u(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function g(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function r(t){u(s,i,o,r,a,"next",t)}function a(t){u(s,i,o,r,a,"throw",t)}r(void 0)}))}}class f{get element(){return this.componentElement}get extensionsOptions(){return this.options}constructor(t,n,e,i){this.changeDetector=t,this.componentElement=n,this.injector=e,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const t of this.extensions)t.destroy();this.onDestroy()}}ngOnInit(){var t=this;return g((function*(){if(t.initialized)return;t.initialized=!0;const n=t.extensionsOptions;if(yield t.onInit(),yield t.onOptionsSet(),n)for(const n of t.extensions)yield n.initialize(t.injector,t.element,t);yield t.afterInit()}))()}ngOnChanges(t){var n=this;return g((function*(){if((0,o.$)("options")in t){yield n.onOptionsSet();const t=n.extensionsOptions;if(t)for(const e of n.extensions)yield e.optionsChange(t);if(!n.initialized)return;yield n.onOptionsChange()}delete t[(0,o.$)("options")],(0,s.Qr)(t)||n.onChanges(t)}))()}registerExtensions(t){this.extensions=t}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(t){}onOptionsSet(){}onDestroy(){}}f.ɵfac=function(t){return new(t||f)(r.Y(a.s),r.Y(l.SB),r.Y(d.z),r.Y(i.bZ,8))},f.ɵdir=c.lG({type:f,features:[h.T]})},60583:(t,n,e)=>{e.d(n,{O:()=>s});var i=e(67793),o=e(55163);class s extends i.z{onInit(){this._applyStyling()}onOptionsChange(){this._applyStyling()}_applyStyling(){const t=this.options,n=this.element?.nativeElement.style;if(this.element){if((0,o.EN)(this.lastCssClass))for(const t of this.lastCssClass.split(" "))t&&this.element.nativeElement.classList.remove(t);if(this.lastCssClass=t?.cssClass,t?.cssClass)for(const n of t.cssClass.split(" "))n&&this.element?.nativeElement.classList.add(n)}(0,o.EN)(n)&&(t?.margin&&((0,o.EN)(t.margin.bottom)&&(n.marginBottom=t.margin.bottom),(0,o.EN)(t.margin.right)&&(n.marginRight=t.margin.right),(0,o.EN)(t.margin.top)&&(n.marginTop=t.margin.top),(0,o.EN)(t.margin.left)&&(n.marginLeft=t.margin.left)),t?.padding&&((0,o.EN)(t.padding.bottom)&&(n.paddingBottom=t.padding.bottom),(0,o.EN)(t.padding.right)&&(n.paddingRight=t.padding.right),(0,o.EN)(t.padding.top)&&(n.paddingTop=t.padding.top),(0,o.EN)(t.padding.left)&&(n.paddingLeft=t.padding.left)),t?.textStyling&&((0,o.EN)(t.textStyling.fontSize)&&(n.fontSize=t.textStyling.fontSize),(0,o.EN)(t.textStyling.fontWeight)&&(n.fontWeight=t.textStyling.fontWeight.toString())))}}},67793:(t,n,e)=>{function i(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,s){var r=t.apply(n,e);function a(t){i(r,o,s,a,l,"next",t)}function l(t){i(r,o,s,a,l,"throw",t)}a(void 0)}))}}e.d(n,{z:()=>s});class s{constructor(t){this.metadata=t,this.initialized=!1}initialize(t,n,e){var i=this;return o((function*(){i.initialized=!0,i.injector=t,i.element=n,i.instance=e,yield i.onInit()}))()}optionsChange(t){var n=this;return o((function*(){n.options=t,n.initialized&&(yield n.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=3921.client.chunk.74ae5b29c385717c472d.js.map