"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[2825],{2825:(t,n,e)=>{e.r(n),e.d(n,{default:()=>b,extensions:()=>L});var i=e(82382),o=e(8046),s=e(15950),r=e(88100),a=e(14015),l=e(5027),c=e(49608),u=e(30048);function d(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function r(t){d(s,i,o,r,a,"next",t)}function a(t){d(s,i,o,r,a,"throw",t)}r(void 0)}))}}const p=function(){var t=h((function*(){return new((yield Promise.all([e.e(4165),e.e(3316)]).then(e.bind(e,3316))).RouterLinkLayoutEditorMetadata)}));return function(){return t.apply(this,arguments)}}(),g=function(){var t=h((function*(){return new((yield Promise.all([e.e(213),e.e(3729),e.e(1051)]).then(e.bind(e,31051))).RouterLinkRelationsEditorMetadata)}));return function(){return t.apply(this,arguments)}}();var f=e(35767),m=e(12900),y=e(39238),v=e(10073),C=e(90090),x=e(38662),E=e(58138),P=e(59656),z=e(5617),O=e(88912),S=e(88650),w=e(63278);const k=function(t,n){return[t,n]},N=function(t){return[t]};let M=class extends l.h{};M.ɵfac=function(){let t;return function(n){return(t||(t=f.n5(M)))(n||M)}}(),M.ɵcmp=m.Xp({type:M,selectors:[["router-link"]],inputs:{argument:"argument"},standalone:!0,features:[y.q,v.j],decls:2,vars:8,consts:[[3,"routerLink","ngClass"]],template:function(t,n){1&t&&(C.Tg(0,"a",0),x._(1),C.qZ()),2&t&&(E.Q("routerLink",n.argument?P.WL(3,k,null==n.options?null:n.options.link,n.argument):P.VK(6,N,null==n.options?null:n.options.link))("ngClass",null==n.options?null:n.options.linkCssClass),z.x(1),O.Oq(null==n.options?null:n.options.text))},dependencies:[a.e,S.m,r.Bz,w.y],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),M=(0,s.gn)([(0,u.i)(g),(0,c.w)(p)],M);const b=M,L=[i.O,o.i]},49608:(t,n,e)=>{e.d(n,{w:()=>o});var i=e(56538);function o(t){return(0,i.R)(t,"layoutEditorMetadata")}},5027:(t,n,e)=>{e.d(n,{h:()=>g});var i=e(84432),o=e(71714),s=e(54285),r=e(56274),a=e(41080),l=e(2492),c=e(905),u=e(12900),d=e(11817);function h(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function p(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function r(t){h(s,i,o,r,a,"next",t)}function a(t){h(s,i,o,r,a,"throw",t)}r(void 0)}))}}class g{constructor(t,n,e,i){this.changeDetector=t,this.componentElement=n,this.injector=e,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const t of this.extensions)t.destroy();this.onDestroy()}}ngOnInit(){var t=this;return p((function*(){if(t.initialized)return;t.initialized=!0;const n=t.extensionsOptions;if(yield t.onInit(),yield t.onOptionsSet(),n)for(const n of t.extensions)yield n.initialize(t.injector,t.element,t);yield t.afterInit()}))()}ngOnChanges(t){var n=this;return p((function*(){if((0,o.$)("options")in t){yield n.onOptionsSet();const t=n.extensionsOptions;if(t)for(const e of n.extensions)yield e.optionsChange(t);if(!n.initialized)return;yield n.onOptionsChange()}delete t[(0,o.$)("options")],(0,s.Qr)(t)||n.onChanges(t)}))()}registerExtensions(t){this.extensions=t}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(t){}onOptionsSet(){}onDestroy(){}}g.ɵfac=function(t){return new(t||g)(r.Y(a.s),r.Y(l.SB),r.Y(c.z),r.Y(i.bZ,8))},g.ɵdir=u.lG({type:g,features:[d.T]})},82382:(t,n,e)=>{e.d(n,{O:()=>s});var i=e(71029),o=e(54285);class s extends i.z{onInit(){this._applyStyling()}onOptionsChange(){this._applyStyling()}_applyStyling(){const t=this.options,n=this.element?.nativeElement.style;if(this.element){if((0,o.EN)(this.lastCssClass))for(const t of this.lastCssClass.split(" "))t&&this.element.nativeElement.classList.remove(t);if(this.lastCssClass=t?.cssClass,t?.cssClass)for(const n of t.cssClass.split(" "))n&&this.element?.nativeElement.classList.add(n)}(0,o.EN)(n)&&(t?.margin&&((0,o.EN)(t.margin.bottom)&&(n.marginBottom=t.margin.bottom),(0,o.EN)(t.margin.right)&&(n.marginRight=t.margin.right),(0,o.EN)(t.margin.top)&&(n.marginTop=t.margin.top),(0,o.EN)(t.margin.left)&&(n.marginLeft=t.margin.left)),t?.padding&&((0,o.EN)(t.padding.bottom)&&(n.paddingBottom=t.padding.bottom),(0,o.EN)(t.padding.right)&&(n.paddingRight=t.padding.right),(0,o.EN)(t.padding.top)&&(n.paddingTop=t.padding.top),(0,o.EN)(t.padding.left)&&(n.paddingLeft=t.padding.left)),t?.textStyling&&((0,o.EN)(t.textStyling.fontSize)&&(n.fontSize=t.textStyling.fontSize),(0,o.EN)(t.textStyling.fontWeight)&&(n.fontWeight=t.textStyling.fontWeight.toString())))}}},8046:(t,n,e)=>{e.d(n,{i:()=>a});var i=e(71029),o=e(4033),s=e(43816);function r(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}class a extends i.z{constructor(){super(...arguments),this.relationsProcessor=null,this.componentManager=null}onInit(){var t,n=this;return(t=function*(){n.injector&&n.metadata&&n.instance&&(n.relationsProcessor??(n.relationsProcessor=n.injector.get(o.v,null)),n.componentManager??(n.componentManager=n.injector.get(s.s,null)),n.relationsProcessor&&n.componentManager&&(n.componentManager.registerComponent(n.metadata.id,n.instance),yield n.relationsProcessor.initialized,n.relationsProcessor.updateRelations(n.metadata.id)))},function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function a(t){r(s,i,o,a,l,"next",t)}function l(t){r(s,i,o,a,l,"throw",t)}a(void 0)}))})()}onDestroy(){this.relationsProcessor&&this.componentManager&&this.metadata&&(this.relationsProcessor.destroyComponent(this.metadata.id),this.componentManager.unregisterComponent(this.metadata.id))}}},71029:(t,n,e)=>{function i(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,s){var r=t.apply(n,e);function a(t){i(r,o,s,a,l,"next",t)}function l(t){i(r,o,s,a,l,"throw",t)}a(void 0)}))}}e.d(n,{z:()=>s});class s{constructor(t){this.metadata=t,this.initialized=!1}initialize(t,n,e){var i=this;return o((function*(){i.initialized=!0,i.injector=t,i.element=n,i.instance=e,yield i.onInit()}))()}optionsChange(t){var n=this;return o((function*(){n.options=t,n.initialized&&(yield n.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=2825.client.chunk.876f66f40cdf7258acdf.js.map