"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[3711],{3711:(t,e,o)=>{o.r(e),o.d(e,{SubmitButtonLayoutEditorMetadata:()=>d});var n=o(54968),r=o(17649),i=o(6082),l=o(14392),p=o(11338),s=o(3840),a=o(74946),u=o(13816);class c{constructor(t){this.text=null,this.disabled=!1,this.buttonCssClass=null,u.Rl.bind(this)(t)}}(0,l.gn)([(0,p._)("Text"),(0,s.f)("Text to be displayed in button"),(0,a.T)("inputString"),(0,l.w6)("design:type",Object)],c.prototype,"text",void 0),(0,l.gn)([(0,p._)("Disabled"),(0,s.f)("Indication whether is button disabled"),(0,a.T)("inputBoolean"),(0,l.w6)("design:type",Object)],c.prototype,"disabled",void 0),(0,l.gn)([(0,p._)("Button css class"),(0,s.f)("Css class applied to button element itself"),(0,a.T)("inputString"),(0,l.w6)("design:type",Object)],c.prototype,"buttonCssClass",void 0);class d{constructor(){this.metaInfo={name:"Submit button",description:"Form submit button",group:"Buttons",optionsMetadata:{propertiesMetadata:[{modelType:n.k,propertiesControls:[r.e]},{modelType:c,propertiesControls:[(0,i.q)(["buttonCssClass","text","disabled"])]}]},defaultOptions:{text:"Submit",disabled:!1,buttonCssClass:"btn btn-primary"}},Object.freeze(this)}}},83982:(t,e,o)=>{o.d(e,{j:()=>s});var n=o(46365),r=o(12987),i=o(55163),l=o(37654),p=o(13341);class s{constructor(t){this._logger=t}transform(t,e){return(0,i.fp)(t)?null:t instanceof n.NI?t:(this._logger?.warn("Failed to cast AbstractControl to FormControl"),null)}}s.ɵfac=function(t){return new(t||s)(l.Y(r.bZ,24))},s.ɵpipe=p.Yj({name:"asFormControl",type:s,pure:!0})},6082:(t,e,o)=>{o.d(e,{q:()=>A});var n=o(12405),r=o(49392),i=o(68118),l=o(43846),p=o(64141),s=o(57165),a=o(52455),u=o(5419),c=o(50478),d=o(83210),f=o(46410),y=o(87859),g=o(28588),m=o(4149),v=o(62957),b=o(46936),h=o(13341),C=o(52900),M=o(94128),_=o(15704),T=o(97503),w=o(94035),x=o(12987),R=o(8265),O=o(37654),j=o(432),F=o(92927);function Q(t,e,o,n,r,i,l){try{var p=t[i](l),s=p.value}catch(t){return void o(t)}p.done?e(s):Promise.resolve(s).then(n,r)}class Y{constructor(t,e,o){this._viewContainerRef=t,this._typeControls=e,this._logger=o,this._componentRef=null,this.values=[]}ngOnChanges(){var t,e=this;return(t=function*(){const t=e.typeName??"inputString";if(e._logger?.debug("PropertyTypeControlRendererDirective: rendering property type control {@type}",{type:t}),e.ngOnDestroy(),e._viewContainerRef.clear(),e.typeName){const o=e._viewContainerRef.injector,n=e._typeControls[t];if(!n)throw e._logger?.error("PropertyTypeControlRendererDirective: unable to find property type control {@type}",{type:t}),new Error(`unable to find property type control ${t}`);if(e._componentRef=e._viewContainerRef.createComponent(n,{injector:o}),e._componentRef){const t=e._componentRef.instance;t.control=e.control,t.values=e.values,yield t.initialize(),t.invalidateVisuals()}}},function(){var e=this,o=arguments;return new Promise((function(n,r){var i=t.apply(e,o);function l(t){Q(i,n,r,l,p,"next",t)}function p(t){Q(i,n,r,l,p,"throw",t)}l(void 0)}))})()}ngOnDestroy(){this._componentRef&&(this._logger?.debug("PropertyTypeControlRendererDirective: destroying property type control {@type}",{type:this.typeName??"inputString"}),this._componentRef?.destroy(),this._componentRef=null)}}Y.ɵfac=function(t){return new(t||Y)(O.Y(j.s_),O.Y(R.Yh),O.Y(x.bZ,8))},Y.ɵdir=h.lG({type:Y,selectors:[["","propertyTypeControl",""]],inputs:{control:"control",typeName:["propertyTypeControl","typeName"],values:"values"},features:[F.T]});var I=o(83982);function D(t,e){if(1&t&&s._U(0,"span",6),2&t){const t=a.o(2).$implicit,e=a.o();u.Q("tooltip",null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].description)}}const k=function(){return[]};function q(t,e){if(1&t&&(s.Tg(0,"div",2)(1,"label",3),c._(2),d.Y(3,D,1,1,"span",4),s.qZ(),f.Gk(4,5),y.AL(5,"asFormControl"),s.qZ()),2&t){const t=a.o().$implicit,e=a.o();let o,n;g.x(2),m.hi("",null!==(o=null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].name)&&void 0!==o?o:t," "),g.x(1),u.Q("ngIf",null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].description),g.x(1),u.Q("propertyTypeControl",null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].type)("control",y.lc(5,5,null==e.form?null:e.form.get(t)))("values",null!==(n=null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].values)&&void 0!==n?n:v.Dd(7,k))}}function S(t,e){if(1&t&&(f.yn(0),d.Y(1,q,6,8,"div",1),f.BQ()),2&t){const t=e.$implicit,o=a.o();g.x(1),u.Q("ngIf",null==o.form?null:o.form.get(t))}}function $(t,e){if(1&t&&s._U(0,"span",6),2&t){const t=a.o(2).$implicit,e=a.o();u.Q("tooltip",null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].description)}}function B(t,e){if(1&t&&(s.Tg(0,"div",2)(1,"label",3),c._(2),d.Y(3,$,1,1,"span",4),s.qZ(),f.Gk(4,5),y.AL(5,"asFormControl"),s.qZ()),2&t){const t=a.o().$implicit,e=a.o();let o,n;g.x(2),m.hi("",null!==(o=null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].name)&&void 0!==o?o:t," "),g.x(1),u.Q("ngIf",null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].description),g.x(1),u.Q("propertyTypeControl",null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].type)("control",y.lc(5,5,null==e.form?null:e.form.get(t)))("values",null!==(n=null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].values)&&void 0!==n?n:v.Dd(7,k))}}function N(t,e){if(1&t&&(f.yn(0),d.Y(1,B,6,8,"div",1),f.BQ()),2&t){const t=e.$implicit,o=a.o();g.x(1),u.Q("ngIf",null==o.form?null:o.form.get(t))}}class Z extends l.k{constructor(){super(...arguments),this.properties=[]}}function A(t){class e extends Z{constructor(){super(...arguments),this.properties=t}}return e.ɵfac=function(){let t;return function(o){return(t||(t=b.n5(e)))(o||e)}}(),e.ɵcmp=h.Xp({type:e,selectors:[["generic-properties-control"]],inputs:{properties:"properties"},standalone:!0,features:[C.q,M.j],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","properties-form-group",4,"ngIf"],[1,"properties-form-group"],[1,"properties-control-label"],["class","fas fa-info-circle",3,"tooltip",4,"ngIf"],[3,"propertyTypeControl","control","values"],[1,"fas","fa-info-circle",3,"tooltip"]],template:function(t,e){1&t&&d.Y(0,N,2,1,"ng-container",0),2&t&&u.Q("ngForOf",e.properties)},dependencies:[n.e,_.sg,T.O,r.z,w.i,p.i,Y,i.j,I.j],encapsulation:2,changeDetection:0}),e}Z.ɵfac=function(){let t;return function(e){return(t||(t=b.n5(Z)))(e||Z)}}(),Z.ɵcmp=h.Xp({type:Z,selectors:[["default-generic-properties-control"]],inputs:{properties:"properties"},features:[C.q],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","properties-form-group",4,"ngIf"],[1,"properties-form-group"],[1,"properties-control-label"],["class","fas fa-info-circle",3,"tooltip",4,"ngIf"],[3,"propertyTypeControl","control","values"],[1,"fas","fa-info-circle",3,"tooltip"]],template:function(t,e){1&t&&d.Y(0,S,2,1,"ng-container",0),2&t&&u.Q("ngForOf",e.properties)},dependencies:[_.sg,T.O,w.i,Y,I.j],encapsulation:2,changeDetection:0})},64141:(t,e,o)=>{o.d(e,{i:()=>a});var n=o(12405),r=o(41762),i=o(99074),l=o(92288),p=o(13341),s=o(10012);class a{}a.ɵfac=function(t){return new(t||a)},a.ɵmod=p.oA({type:a}),a.ɵinj=s.cJ({imports:[n.e,r.U,i.A,l.F]})}}]);
//# sourceMappingURL=3711.client.chunk.b1da82ef9e76af64e469.js.map