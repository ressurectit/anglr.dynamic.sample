"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[8529],{98529:(t,n,e)=>{e.r(n),e.d(n,{default:()=>S,extensions:()=>N});var i=e(60583),o=e(56890),s=e(14392),r=e(12405),a=e(34987),l=e(15523),c=e(50603),d=e(10382);function u(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function g(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function r(t){u(s,i,o,r,a,"next",t)}function a(t){u(s,i,o,r,a,"throw",t)}r(void 0)}))}}const h=function(){var t=g((function*(){return new((yield Promise.all([e.e(7),e.e(8439)]).then(e.bind(e,48439))).ToggleButtonLayoutEditorMetadata)}));return function(){return t.apply(this,arguments)}}(),p=function(){var t=g((function*(){return new((yield Promise.all([e.e(6178),e.e(9444),e.e(9684)]).then(e.bind(e,89684))).ToggleButtonRelationsEditorMetadata)}));return function(){return t.apply(this,arguments)}}();var f=e(46936),m=e(13341),y=e(52900),v=e(94128),C=e(57165),x=e(27805),b=e(50478),E=e(5419),O=e(28588),P=e(4149),w=e(11500);let z=class extends a.h{constructor(){super(...arguments),this.disabled=!1}onOptionsSet(){this.disabled=this.options?.disabled??!1,this.options?.state&&(this.toggle=this.options.state)}};z.ɵfac=function(){let t;return function(n){return(t||(t=f.n5(z)))(n||z)}}(),z.ɵcmp=m.Xp({type:z,selectors:[["toggle-button"]],inputs:{disabled:"disabled"},standalone:!0,features:[y.q,v.j],decls:3,vars:3,consts:[["type","button","type","button",3,"ngClass","disabled","click"]],template:function(t,n){if(1&t&&(C.Tg(0,"button",0),x.N("click",(function(){return n.toggle=!n.toggle})),C.Tg(1,"span"),b._(2),C.qZ()()),2&t){let t;E.Q("ngClass",null!==(t=null==n.options?null:n.options.buttonCssClass)&&void 0!==t?t:"")("disabled",n.disabled),O.x(2),P.Oq(n.toggle?null==n.options?null:n.options.onText:null==n.options?null:n.options.offText)}},dependencies:[r.e,w.m],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),(0,s.gn)([(0,c.A)(),(0,s.w6)("design:type",Object)],z.prototype,"toggle",void 0),z=(0,s.gn)([(0,d.i)(p),(0,l.w)(h)],z);const S=z,N=[i.O,o.i]},15523:(t,n,e)=>{e.d(n,{w:()=>o});var i=e(32501);function o(t){return(0,i.R)(t,"layoutEditorMetadata")}},34987:(t,n,e)=>{e.d(n,{h:()=>p});var i=e(12987),o=e(34955),s=e(55163),r=e(37654),a=e(66382),l=e(47948),c=e(97873),d=e(13341),u=e(92927);function g(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function r(t){g(s,i,o,r,a,"next",t)}function a(t){g(s,i,o,r,a,"throw",t)}r(void 0)}))}}class p{get element(){return this.componentElement}get extensionsOptions(){return this.options}constructor(t,n,e,i){this.changeDetector=t,this.componentElement=n,this.injector=e,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const t of this.extensions)t.destroy();this.onDestroy()}}ngOnInit(){var t=this;return h((function*(){if(t.initialized)return;t.initialized=!0;const n=t.extensionsOptions;if(yield t.onInit(),yield t.onOptionsSet(),n)for(const n of t.extensions)yield n.initialize(t.injector,t.element,t);yield t.afterInit()}))()}ngOnChanges(t){var n=this;return h((function*(){if((0,o.$)("options")in t){yield n.onOptionsSet();const t=n.extensionsOptions;if(t)for(const e of n.extensions)yield e.optionsChange(t);if(!n.initialized)return;yield n.onOptionsChange()}delete t[(0,o.$)("options")],(0,s.Qr)(t)||n.onChanges(t)}))()}registerExtensions(t){this.extensions=t}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(t){}onOptionsSet(){}onDestroy(){}}p.ɵfac=function(t){return new(t||p)(r.Y(a.s),r.Y(l.SB),r.Y(c.z),r.Y(i.bZ,8))},p.ɵdir=d.lG({type:p,features:[u.T]})},60583:(t,n,e)=>{e.d(n,{O:()=>s});var i=e(67793),o=e(55163);class s extends i.z{onInit(){this._applyStyling()}onOptionsChange(){this._applyStyling()}_applyStyling(){const t=this.options,n=this.element?.nativeElement.style;if(this.element){if((0,o.EN)(this.lastCssClass))for(const t of this.lastCssClass.split(" "))t&&this.element.nativeElement.classList.remove(t);if(this.lastCssClass=t?.cssClass,t?.cssClass)for(const n of t.cssClass.split(" "))n&&this.element?.nativeElement.classList.add(n)}(0,o.EN)(n)&&(t?.margin&&((0,o.EN)(t.margin.bottom)&&(n.marginBottom=t.margin.bottom),(0,o.EN)(t.margin.right)&&(n.marginRight=t.margin.right),(0,o.EN)(t.margin.top)&&(n.marginTop=t.margin.top),(0,o.EN)(t.margin.left)&&(n.marginLeft=t.margin.left)),t?.padding&&((0,o.EN)(t.padding.bottom)&&(n.paddingBottom=t.padding.bottom),(0,o.EN)(t.padding.right)&&(n.paddingRight=t.padding.right),(0,o.EN)(t.padding.top)&&(n.paddingTop=t.padding.top),(0,o.EN)(t.padding.left)&&(n.paddingLeft=t.padding.left)),t?.textStyling&&((0,o.EN)(t.textStyling.fontSize)&&(n.fontSize=t.textStyling.fontSize),(0,o.EN)(t.textStyling.fontWeight)&&(n.fontWeight=t.textStyling.fontWeight.toString())))}}},50603:(t,n,e)=>{e.d(n,{A:()=>a});var i=e(78072),o=e(56215),s=e(74421),r=e(91775);function a(t){return function(n,e){const a=e;Object.defineProperty(n,`${a}Change`,{get:function(){return this[`ɵ${a}Change`]||(this[`ɵ${a}Change`]=new i.x),this[`ɵ${a}Change`]}}),Object.defineProperty(n,a,{get:function(){return this[`ɵ${a}`]},set:function(n){if(this[`ɵ${a}`]=n,(0,o.gE)(this,a),t?.sync)this[`${a}Change`].next();else{const t=this.ɵɵinjector;if(!t)return;const n=t.get(s.s),e=t.get(r.H),i=n.getId(this);if(!i)return;e.markForCheck({componentId:i,outputName:a})}}}),t?.skipInit&&(0,o.pG)(n,a)}}},56890:(t,n,e)=>{e.d(n,{i:()=>a});var i=e(67793),o=e(93533),s=e(74421);function r(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}class a extends i.z{constructor(){super(...arguments),this.relationsProcessor=null,this.componentManager=null}onInit(){var t,n=this;return(t=function*(){n.injector&&n.metadata&&n.instance&&(n.relationsProcessor??(n.relationsProcessor=n.injector.get(o.v,null)),n.componentManager??(n.componentManager=n.injector.get(s.s,null)),n.relationsProcessor&&n.componentManager&&(n.componentManager.registerComponent(n.metadata.id,n.instance),yield n.relationsProcessor.initialized,n.relationsProcessor.updateRelations(n.metadata.id)))},function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function a(t){r(s,i,o,a,l,"next",t)}function l(t){r(s,i,o,a,l,"throw",t)}a(void 0)}))})()}onDestroy(){this.relationsProcessor&&this.componentManager&&this.metadata&&(this.relationsProcessor.destroyComponent(this.metadata.id),this.componentManager.unregisterComponent(this.metadata.id))}}},67793:(t,n,e)=>{function i(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,s){var r=t.apply(n,e);function a(t){i(r,o,s,a,l,"next",t)}function l(t){i(r,o,s,a,l,"throw",t)}a(void 0)}))}}e.d(n,{z:()=>s});class s{constructor(t){this.metadata=t,this.initialized=!1}initialize(t,n,e){var i=this;return o((function*(){i.initialized=!0,i.injector=t,i.element=n,i.instance=e,yield i.onInit()}))()}optionsChange(t){var n=this;return o((function*(){n.options=t,n.initialized&&(yield n.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=8529.client.chunk.2dc3d5606c66a90e8e59.js.map