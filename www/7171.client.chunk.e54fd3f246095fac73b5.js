"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[7171],{7171:(t,n,e)=>{e.r(n),e.d(n,{default:()=>Y,extensions:()=>Z});var o=e(56890),r=e(14392),i=e(81267),s=e(97873),a=e(34987),u=e(10431),c=e(41216),l=e(55523),d=e(15523),f=e(10382),h=e(9526),p=e(61655),v=e(46365),m=e(69675),y=e(10012);function g(t,n,e,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(o,r)}function C(t){function n(t){if(Object(t)!==t)return Promise.reject(new TypeError(t+" is not an object."));var n=t.done;return Promise.resolve(t.value).then((function(t){return{value:t,done:n}}))}return C=function(t){this.s=t,this.n=t.next},C.prototype={s:null,n:null,next:function(){return n(this.n.apply(this.s,arguments))},return:function(t){var e=this.s.return;return void 0===e?Promise.resolve({value:t,done:!0}):n(e.apply(this.s,arguments))},throw:function(t){var e=this.s.return;return void 0===e?Promise.reject(t):n(e.apply(this.s,arguments))}},new C(t)}class w{constructor(t){this._iteratorsSvc=t}build(t){var n,e=this;return(n=function*(){const n=new h.cw({});let o=n;var r,i=!1,s=!1;try{for(var a,u=function(t){var n,e,o,r=2;for("undefined"!=typeof Symbol&&(e=Symbol.asyncIterator,o=Symbol.iterator);r--;){if(e&&null!=(n=t[e]))return n.call(t);if(o&&null!=(n=t[o]))return new C(n.call(t));e="@@asyncIterator",o="@@iterator"}throw new TypeError("Object is not async iterable")}(e._iteratorsSvc.getIteratorFor(t));i=!(a=yield u.next()).done;i=!1){const t=a.value,n=e._getControlName(t.metadata);if(n){const r=e._getControlForMetadata(t.metadata);e._getActiveGroup(t.parent,o).addControl(n,r),r instanceof h.cw&&(o=r)}}}catch(t){s=!0,r=t}finally{try{i&&null!=u.return&&(yield u.return())}finally{if(s)throw r}}return n},function(){var t=this,e=arguments;return new Promise((function(o,r){var i=n.apply(t,e);function s(t){g(i,o,r,s,a,"next",t)}function a(t){g(i,o,r,s,a,"throw",t)}s(void 0)}))})()}_getActiveGroup(t,n){if(!n.parent||!t)return n;const e=this._getControlName(t.metadata);return e?n.parent.get(e)?n:this._getActiveGroup(t,n.parent):t.parent?this._getActiveGroup(t.parent,n):this._getActiveGroup(t.parent,n.root)}_getControlName(t){return t?t.options?.controlName:null}_getControlForMetadata(t){switch(t?.options?.controlType){case m.Z.FormArray:return new p.Oe([]);case m.Z.FormGroup:return new h.cw({});default:return new v.NI}}}w.ɵfac=function(t){return new(t||w)(i.LF(c.$))},w.ɵprov=y.Yz({token:w,factory:w.ɵfac});var P=e(37199),O=e(50603),b=e(13816),x=e(34955);function j(t,n,e,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(o,r)}function _(t){return function(){var n=this,e=arguments;return new Promise((function(o,r){var i=t.apply(n,e);function s(t){j(i,o,r,s,a,"next",t)}function a(t){j(i,o,r,s,a,"throw",t)}s(void 0)}))}}const I=function(){var t=_((function*(){return new((yield Promise.all([e.e(7),e.e(6408)]).then(e.bind(e,43356))).FormBlockLayoutEditorMetadata)}));return function(){return t.apply(this,arguments)}}(),z=function(){var t=_((function*(){return new((yield Promise.all([e.e(8440),e.e(9444),e.e(7167)]).then(e.bind(e,47167))).FormBlockRelationsEditorMetadata)}));return function(){return t.apply(this,arguments)}}();var M=e(46936),G=e(13341),$=e(18968),k=e(52900),D=e(94128),F=e(12890),E=e(27805),A=e(83210),N=e(28588),R=e(5419);function S(t,n,e,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(o,r)}function T(t,n){}let B=class extends a.h{constructor(){super(...arguments),this.formComponentControlBuilder=(0,i.f3)(w),this.formInjector=(0,i.f3)(s.z),this.submit={}}submitForm(t){t.preventDefault(),t.stopPropagation(),this.submit={}}onInit(){var t,n=this;return(t=function*(){n.formGroup=yield n.formComponentControlBuilder.build({id:(0,b.Ox)(10),name:"formBlock",package:"sample-components",options:n.options}),n.formGroup.valueChanges.subscribe((t=>n.value=t)),n.value=n.formGroup.value,n.formInjector=s.z.create({parent:n.injector,providers:[{provide:P.O,useValue:n.formGroup}]}),n.changeDetector.detectChanges()},function(){var n=this,e=arguments;return new Promise((function(o,r){var i=t.apply(n,e);function s(t){S(i,o,r,s,a,"next",t)}function a(t){S(i,o,r,s,a,"throw",t)}s(void 0)}))})()}onChanges(t){(0,x.$)("value")in t&&this.formGroup?.patchValue(this.value??{},{emitEvent:!1})}};B.ɵfac=function(){let t;return function(n){return(t||(t=M.n5(B)))(n||B)}}(),B.ɵcmp=G.Xp({type:B,selectors:[["form-block"]],standalone:!0,features:[$._([w,c.$,l.T]),k.q,D.j],decls:2,vars:2,consts:[[3,"submit"],[3,"layoutComponentRenderer","layoutComponentRendererInjector"]],template:function(t,n){1&t&&(F.Tg(0,"form",0),E.N("submit",(function(t){return n.submitForm(t)})),A.Y(1,T,0,0,"ng-template",1),F.qZ()),2&t&&(N.x(1),R.Q("layoutComponentRenderer",null==n.options?null:n.options.content)("layoutComponentRendererInjector",n.formInjector))},dependencies:[u.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),(0,r.gn)([(0,O.A)(),(0,r.w6)("design:type",Object)],B.prototype,"value",void 0),(0,r.gn)([(0,O.A)(),(0,r.w6)("design:type",Object)],B.prototype,"submit",void 0),B=(0,r.gn)([(0,f.i)(z),(0,d.w)(I)],B);const Y=B,Z=[o.i]},37199:(t,n,e)=>{e.d(n,{O:()=>o});const o=new(e(14660).O)("FORM_COMPONENT_CONTROL")},15523:(t,n,e)=>{e.d(n,{w:()=>r});var o=e(32501);function r(t){return(0,o.R)(t,"layoutEditorMetadata")}},34987:(t,n,e)=>{e.d(n,{h:()=>p});var o=e(12987),r=e(34955),i=e(55163),s=e(37654),a=e(66382),u=e(47948),c=e(97873),l=e(13341),d=e(92927);function f(t,n,e,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(o,r)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(o,r){var i=t.apply(n,e);function s(t){f(i,o,r,s,a,"next",t)}function a(t){f(i,o,r,s,a,"throw",t)}s(void 0)}))}}class p{constructor(t,n,e,o){this.changeDetector=t,this.componentElement=n,this.injector=e,this.logger=o,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const t of this.extensions)t.destroy();this.onDestroy()}}ngOnInit(){var t=this;return h((function*(){if(t.initialized)return;t.initialized=!0;const n=t.extensionsOptions;if(yield t.onInit(),yield t.onOptionsSet(),n)for(const n of t.extensions)yield n.initialize(t.injector,t.element,t);yield t.afterInit()}))()}ngOnChanges(t){var n=this;return h((function*(){if((0,r.$)("options")in t){yield n.onOptionsSet();const t=n.extensionsOptions;if(t)for(const e of n.extensions)yield e.optionsChange(t);if(!n.initialized)return;yield n.onOptionsChange()}delete t[(0,r.$)("options")],(0,i.Qr)(t)||n.onChanges(t)}))()}registerExtensions(t){this.extensions=t}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(t){}onOptionsSet(){}onDestroy(){}}p.ɵfac=function(t){return new(t||p)(s.Y(a.s),s.Y(u.SB),s.Y(c.z),s.Y(o.bZ,8))},p.ɵdir=l.lG({type:p,features:[d.T]})},50603:(t,n,e)=>{e.d(n,{A:()=>r});var o=e(78072);function r(){return function(t,n){const e=n;Object.defineProperty(t,`${e}Change`,{get:function(){return this[`ɵ${e}Change`]||(this[`ɵ${e}Change`]=new o.x),this[`ɵ${e}Change`]}}),Object.defineProperty(t,e,{get:function(){return this[`ɵ${e}`]},set:function(t){this[`ɵ${e}`]=t,this[`${e}Change`].next()}})}}},56890:(t,n,e)=>{e.d(n,{i:()=>a});var o=e(67793),r=e(93533),i=e(74421);function s(t,n,e,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(o,r)}class a extends o.z{constructor(){super(...arguments),this.relationsProcessor=null,this.componentManager=null}onInit(){var t,n=this;return(t=function*(){n.injector&&n.metadata&&n.instance&&(n.relationsProcessor??(n.relationsProcessor=n.injector.get(r.v,null)),n.componentManager??(n.componentManager=n.injector.get(i.s,null)),n.relationsProcessor&&n.componentManager&&(n.componentManager.registerComponent(n.metadata.id,n.instance),yield n.relationsProcessor.initialized,n.relationsProcessor.updateRelations(n.metadata.id)))},function(){var n=this,e=arguments;return new Promise((function(o,r){var i=t.apply(n,e);function a(t){s(i,o,r,a,u,"next",t)}function u(t){s(i,o,r,a,u,"throw",t)}a(void 0)}))})()}onDestroy(){this.relationsProcessor&&this.componentManager&&this.metadata&&(this.relationsProcessor.destroyComponent(this.metadata.id),this.componentManager.unregisterComponent(this.metadata.id))}}},67793:(t,n,e)=>{function o(t,n,e,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(o,r)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var s=t.apply(n,e);function a(t){o(s,r,i,a,u,"next",t)}function u(t){o(s,r,i,a,u,"throw",t)}a(void 0)}))}}e.d(n,{z:()=>i});class i{constructor(t){this.metadata=t,this.initialized=!1}initialize(t,n,e){var o=this;return r((function*(){o.initialized=!0,o.injector=t,o.element=n,o.instance=e,yield o.onInit()}))()}optionsChange(t){var n=this;return r((function*(){n.options=t,n.initialized&&(yield n.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=7171.client.chunk.e54fd3f246095fac73b5.js.map