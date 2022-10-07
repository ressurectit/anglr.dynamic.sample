"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[1293],{83982:(t,n,e)=>{e.d(n,{j:()=>l});var i=e(46365),o=e(12987),s=e(55163),r=e(37654),a=e(13341);class l{constructor(t){this._logger=t}transform(t,n){return(0,s.fp)(t)?null:t instanceof i.NI?t:(this._logger?.warn("Failed to cast AbstractControl to FormControl"),null)}}l.ɵfac=function(t){return new(t||l)(r.Y(o.bZ,24))},l.ɵpipe=a.Yj({name:"asFormControl",type:l,pure:!0})},3084:(t,n,e)=>{e.d(n,{B:()=>y});var i=e(14392),o=e(46365),s=e(65227),r=e(34987),a=e(12987),l=e(50603),c=e(37199),u=e(69675),d=e(65343),h=e(37654),p=e(66382),g=e(47948),f=e(97873),m=e(13341),v=e(52900);class y extends r.h{constructor(t,n,e,i,s){super(t,n,e,s),this._parentControl=i,this.control=new o.NI}set value(t){const n=this.value;this.valueOutput=t,t!==n&&this.control?.patchValue(t)}get value(){return this.valueOutput}set required(t){this._required=t,!0!==t?this.control?.removeValidators(s.kI.required):this.control?.addValidators(s.kI.required)}get required(){return this._required}set disabled(t){this._disabled=t,!0!==t?this.control?.enable():this.control?.disable()}get disabled(){return this._disabled}onOptionsSet(){this.options&&(this.controlSubscription?.unsubscribe(),this.controlSubscription=null,this.control=this._getFormControl(this.options?.controlName,this._parentControl,u.Z.FormControl,this.value),this._registerValidations(),this.controlSubscription=this.control?.valueChanges?.subscribe((t=>{this.valueOutput=t})))}_registerValidations(){}_getFormControl(t,n,e=u.Z.FormControl,i){let o=(0,d.sx)(t,n,e,i);return o||(this.logger?.warn("FormComponentBase: Unable to find control with name {@name}",{name:t}),o=(0,d.Wm)(e,i)),this.required&&o.addValidators(s.kI.required),this.disabled&&o.disable(),o}}y.ɵfac=function(t){return new(t||y)(h.Y(p.s),h.Y(g.SB),h.Y(f.z),h.Y(c.O,8),h.Y(a.bZ,8))},y.ɵdir=m.lG({type:y,inputs:{value:"value",required:"required",disabled:"disabled"},features:[v.q]}),(0,i.gn)([(0,l.A)(),(0,i.w6)("design:type",Object)],y.prototype,"valueOutput",void 0)},41293:(t,n,e)=>{e.r(n),e.d(n,{default:()=>M,extensions:()=>Y});var i=e(60583),o=e(56890),s=e(14392),r=e(12405),a=e(8423),l=e(3084),c=e(15523),u=e(10382),d=e(99074),h=e(68118);function p(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function g(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function r(t){p(s,i,o,r,a,"next",t)}function a(t){p(s,i,o,r,a,"throw",t)}r(void 0)}))}}const f=function(){var t=g((function*(){return new((yield Promise.all([e.e(7),e.e(8047)]).then(e.bind(e,98047))).TextFieldLayoutEditorMetadata)}));return function(){return t.apply(this,arguments)}}(),m=function(){var t=g((function*(){return new((yield Promise.all([e.e(8440),e.e(9444),e.e(8178)]).then(e.bind(e,48178))).TextFieldRelationsEditorMetadata)}));return function(){return t.apply(this,arguments)}}();var v=e(46936),y=e(13341),C=e(52900),b=e(94128),O=e(12890),x=e(50478),w=e(87859),_=e(28588),E=e(4149),P=e(5419),S=e(42885),z=e(83982),N=e(57419),j=e(86039),q=e(58433),I=e(29405);let F=class extends l.B{};F.ɵfac=function(){let t;return function(n){return(t||(t=v.n5(F)))(n||F)}}(),F.ɵcmp=y.Xp({type:F,selectors:[["form-text-field"]],standalone:!0,features:[C.q,b.j],decls:5,vars:7,consts:[["type","text",3,"formControl"]],template:function(t,n){1&t&&(O.Tg(0,"label"),x._(1),O.qZ(),O._U(2,"input",0),w.AL(3,"asRequired"),w.AL(4,"asFormControl")),2&t&&(_.x(1),E.Oq(null==n.options?null:n.options.label),_.x(1),P.Q("formControl",w.lc(3,3,w.lc(4,5,n.control))),S.u("placeholder",null==n.options?null:n.options.placeholder))},dependencies:[h.j,z.j,d.A,N.i,a.U,j.Fj,q.JJ,I.oH,r.e],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),F=(0,s.gn)([(0,u.i)(m),(0,c.w)(f)],F);const M=F,Y=[i.O,o.i]},37199:(t,n,e)=>{e.d(n,{O:()=>i});const i=new(e(14660).O)("FORM_COMPONENT_CONTROL")},15523:(t,n,e)=>{e.d(n,{w:()=>o});var i=e(32501);function o(t){return(0,i.R)(t,"layoutEditorMetadata")}},34987:(t,n,e)=>{e.d(n,{h:()=>g});var i=e(12987),o=e(34955),s=e(55163),r=e(37654),a=e(66382),l=e(47948),c=e(97873),u=e(13341),d=e(92927);function h(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function p(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function r(t){h(s,i,o,r,a,"next",t)}function a(t){h(s,i,o,r,a,"throw",t)}r(void 0)}))}}class g{constructor(t,n,e,i){this.changeDetector=t,this.componentElement=n,this.injector=e,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const t of this.extensions)t.destroy();this.onDestroy()}}ngOnInit(){var t=this;return p((function*(){if(t.initialized)return;t.initialized=!0;const n=t.extensionsOptions;if(yield t.onInit(),yield t.onOptionsSet(),n)for(const n of t.extensions)yield n.initialize(t.injector,t.element,t);yield t.afterInit()}))()}ngOnChanges(t){var n=this;return p((function*(){if((0,o.$)("options")in t){yield n.onOptionsSet();const t=n.extensionsOptions;if(t)for(const e of n.extensions)yield e.optionsChange(t);if(!n.initialized)return;yield n.onOptionsChange()}delete t[(0,o.$)("options")],(0,s.Qr)(t)||n.onChanges(t)}))()}registerExtensions(t){this.extensions=t}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(t){}onOptionsSet(){}onDestroy(){}}g.ɵfac=function(t){return new(t||g)(r.Y(a.s),r.Y(l.SB),r.Y(c.z),r.Y(i.bZ,8))},g.ɵdir=u.lG({type:g,features:[d.T]})},60583:(t,n,e)=>{e.d(n,{O:()=>s});var i=e(67793),o=e(55163);class s extends i.z{onInit(){this._applyStyling()}onOptionsChange(){this._applyStyling()}_applyStyling(){const t=this.options,n=this.element?.nativeElement.style;if(this.element){if((0,o.EN)(this.lastCssClass))for(const t of this.lastCssClass.split(" "))t&&this.element.nativeElement.classList.remove(t);if(this.lastCssClass=t?.cssClass,t?.cssClass)for(const n of t.cssClass.split(" "))n&&this.element?.nativeElement.classList.add(n)}(0,o.EN)(n)&&(t?.margin&&((0,o.EN)(t.margin.bottom)&&(n.marginBottom=t.margin.bottom),(0,o.EN)(t.margin.right)&&(n.marginRight=t.margin.right),(0,o.EN)(t.margin.top)&&(n.marginTop=t.margin.top),(0,o.EN)(t.margin.left)&&(n.marginLeft=t.margin.left)),t?.padding&&((0,o.EN)(t.padding.bottom)&&(n.paddingBottom=t.padding.bottom),(0,o.EN)(t.padding.right)&&(n.paddingRight=t.padding.right),(0,o.EN)(t.padding.top)&&(n.paddingTop=t.padding.top),(0,o.EN)(t.padding.left)&&(n.paddingLeft=t.padding.left)),t?.textStyling&&((0,o.EN)(t.textStyling.fontSize)&&(n.fontSize=t.textStyling.fontSize),(0,o.EN)(t.textStyling.fontWeight)&&(n.fontWeight=t.textStyling.fontWeight.toString())))}}},50603:(t,n,e)=>{e.d(n,{A:()=>o});var i=e(78072);function o(){return function(t,n){const e=n;Object.defineProperty(t,`${e}Change`,{get:function(){return this[`ɵ${e}Change`]||(this[`ɵ${e}Change`]=new i.x),this[`ɵ${e}Change`]}}),Object.defineProperty(t,e,{get:function(){return this[`ɵ${e}`]},set:function(t){this[`ɵ${e}`]=t,this[`${e}Change`].next()}})}}},56890:(t,n,e)=>{e.d(n,{i:()=>a});var i=e(67793),o=e(93533),s=e(74421);function r(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}class a extends i.z{constructor(){super(...arguments),this.relationsProcessor=null,this.componentManager=null}onInit(){var t,n=this;return(t=function*(){n.injector&&n.metadata&&n.instance&&(n.relationsProcessor??(n.relationsProcessor=n.injector.get(o.v,null)),n.componentManager??(n.componentManager=n.injector.get(s.s,null)),n.relationsProcessor&&n.componentManager&&(n.componentManager.registerComponent(n.metadata.id,n.instance),yield n.relationsProcessor.initialized,n.relationsProcessor.updateRelations(n.metadata.id)))},function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function a(t){r(s,i,o,a,l,"next",t)}function l(t){r(s,i,o,a,l,"throw",t)}a(void 0)}))})()}onDestroy(){this.relationsProcessor&&this.componentManager&&this.metadata&&(this.relationsProcessor.destroyComponent(this.metadata.id),this.componentManager.unregisterComponent(this.metadata.id))}}},67793:(t,n,e)=>{function i(t,n,e,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void e(t)}a.done?n(l):Promise.resolve(l).then(i,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,s){var r=t.apply(n,e);function a(t){i(r,o,s,a,l,"next",t)}function l(t){i(r,o,s,a,l,"throw",t)}a(void 0)}))}}e.d(n,{z:()=>s});class s{constructor(t){this.metadata=t,this.initialized=!1}initialize(t,n,e){var i=this;return o((function*(){i.initialized=!0,i.injector=t,i.element=n,i.instance=e,yield i.onInit()}))()}optionsChange(t){var n=this;return o((function*(){n.options=t,n.initialized&&(yield n.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=1293.client.chunk.f7a839f338174966036d.js.map