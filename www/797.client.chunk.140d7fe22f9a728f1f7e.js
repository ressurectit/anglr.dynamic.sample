"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[797],{95469:(t,e,n)=>{n.d(e,{N:()=>g});var a=n(16173),o=n(18168),r=n(55163),i=n(37654),s=n(7342),l=n(47948),c=n(13341),u=n(27805),d=n(84570),m=n(18968);const p={provide:o.JU,useExisting:(0,a.Gp)((()=>g)),multi:!0};class g{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{},this.disabled=!1}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",t)}registerOnChange(t){this.onChange=e=>{(0,r.fp)(e)||""==e?t(null):(e=e.replace(/\s+/g,""),/^[+-]?\d+(?:[,.]\d+)?$/g.test(e)?t(parseFloat(e.replace(",","."))):t(NaN))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t}}g.ɵfac=function(t){return new(t||g)(i.Y(s.Qs),i.Y(l.SB))},g.ɵdir=c.lG({type:g,selectors:[["input","number","","formControlName",""],["input","number","","formControl",""],["input","number","","ngModel",""]],hostVars:1,hostBindings:function(t,e){1&t&&u.N("change",(function(t){return e.onChange(t.target.value)}))("input",(function(t){return e.onChange(t.target.value)}))("blur",(function(){return e.onTouched()})),2&t&&d.I("disabled",e.disabled)},features:[m._([p])]})},12914:(t,e,n)=>{n.d(e,{L:()=>u});var a=n(16173),o=n(65227),r=n(55163);class i{static number(t){return isNaN(t.value)?{number:!0}:null}static max(t){return e=>!isNaN(e.value)&&(0,r.EN)(e.value)&&(0,r.EN)(t)&&e.value>t?{maxValue:t,actualValue:e.value}:null}static min(t){return e=>!isNaN(e.value)&&(0,r.EN)(e.value)&&(0,r.EN)(t)&&e.value<t?{minValue:t,actualValue:e.value}:null}}var s=n(13341),l=n(18968);const c={provide:o.Cf,useExisting:(0,a.Gp)((()=>u)),multi:!0};class u{validate(t){return i.number(t)}}u.ɵfac=function(t){return new(t||u)},u.ɵdir=s.lG({type:u,selectors:[["input","number","","formControlName",""],["input","number","","formControl",""],["input","number","","ngModel",""]],features:[l._([c])]})},30797:(t,e,n)=>{n.r(e),n.d(e,{SyncValuesRelationsEditorMetadata:()=>ot});var a=n(12405),o=n(41762),r=n(74062),i=n(92288),s=n(12125),l=n(32123),c=n(74957),u=n(69445),d=n(13816),m=n(55163),p=n(89033);class g{constructor(t){this.triggerSync=!1,this.idleTimeout=0,d.Rl.bind(this)(t)}}var f=n(46365),y=n(6631),v=n(65540),h=n(37654),b=n(13341),x=n(94128),_=n(57165),N=n(50478),O=n(28588),C=n(5419),P=n(86039),T=n(58433),q=n(29405),S=n(78525);class Z{constructor(t){this.control=new f.NI,this.control.setValue(t)}}Z.ɵfac=function(t){return new(t||Z)(h.Y(v.m))},Z.ɵcmp=b.Xp({type:Z,selectors:[["configure-sync-property"]],standalone:!0,features:[x.j],decls:11,vars:3,consts:[[1,"dynamic-form-group","dynamic-margin-bottom-extra-small"],[1,"dynamic-control-label","dynamic-text-uppercase"],["type","text",1,"dynamic-form-control",3,"formControl"],[1,"dynamic-flex-row","dynamic-flex-end"],["type","button",1,"dynamic-btn","dynamic-btn-info","dynamic-margin-right-extra-small",3,"mat-dialog-close"],["type","button",1,"dynamic-btn","dynamic-btn-primary",3,"mat-dialog-close"]],template:function(t,e){1&t&&(_.Tg(0,"div",0)(1,"label",1),N._(2,"name"),_.qZ(),_._U(3,"input",2),_.qZ(),_.Tg(4,"div",3)(5,"button",4)(6,"span"),N._(7,"cancel"),_.qZ()(),_.Tg(8,"button",5)(9,"span"),N._(10,"ok"),_.qZ()()()),2&t&&(O.x(3),C.Q("formControl",e.control),O.x(2),C.Q("mat-dialog-close",null),O.x(3),C.Q("mat-dialog-close",e.control.value))},dependencies:[o.U,P.Fj,T.JJ,q.oH,y.I,S.ZT],encapsulation:2,changeDetection:0});var w=n(38256),Q=n(46410),U=n(27805),V=n(63289),Y=n(52455),E=n(4149),L=n(66382),k=n(47948),z=n(18968),D=n(52900),j=n(83210),F=n(81473),I=n(95469),J=n(12914),G=n(15704),B=n(97503),M=n(77549),R=n(57684),H=n(76909),K=n(49308),$=n(48215);function X(t,e,n,a,o,r,i){try{var s=t[r](i),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(a,o)}function A(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var r=t.apply(e,n);function i(t){X(r,a,o,i,s,"next",t)}function s(t){X(r,a,o,i,s,"throw",t)}i(void 0)}))}}function W(t,e){1&t&&(_.Tg(0,"div",2)(1,"label",3),N._(2,"idle timeout"),_.qZ(),_._U(3,"input",14),_.qZ())}function tt(t,e){if(1&t){const t=w.E();Q.yn(0),_.Tg(1,"div",15),_._U(2,"relation-node-input",16),_.Tg(3,"div"),N._(4),_.qZ(),_.Tg(5,"button",17),U.N("click",(function(e){const n=V.CH(t).index,a=Y.o();return e.preventDefault(),e.stopPropagation(),V.Kt(a.configureSyncProperty(n))})),_._U(6,"span",18),_.qZ(),_.Tg(7,"button",7),U.N("click",(function(e){const n=V.CH(t).index,a=Y.o();return e.preventDefault(),e.stopPropagation(),V.Kt(a.removeProperty(n))})),_._U(8,"span",19),_.qZ()(),Q.BQ()}if(2&t){const t=e.$implicit,n=Y.o();O.x(2),C.Q("parentCoordiantes",n.nodePosition)("zoomLevel",n.zoomLevel)("name",t)("parent",n),O.x(2),E.Oq(t)}}function et(t,e){if(1&t&&(_.Tg(0,"div",15),_._U(1,"relation-node-input",20),_.Tg(2,"div"),N._(3,"trigger"),_.qZ()()),2&t){const t=Y.o();O.x(1),C.Q("parentCoordiantes",t.nodePosition)("zoomLevel",t.zoomLevel)("parent",t)}}function nt(t,e){if(1&t&&(Q.yn(0),_.Tg(1,"div",21)(2,"div"),N._(3),_.qZ(),_._U(4,"relation-node-output",16),_.qZ(),Q.BQ()),2&t){const t=e.$implicit,n=Y.o();O.x(3),E.Oq(t),O.x(1),C.Q("parentCoordiantes",n.nodePosition)("zoomLevel",n.zoomLevel)("name",t)("parent",n)}}class at extends s.M{constructor(t,e,n,a){super(t,e),this.dialog=n,this.form=a.build(new g(null)),this.form.valueChanges.subscribe((t=>{this.metadata?.relationsOptions&&((0,d.l7)(this.metadata.relationsOptions,t),this.history.getNewState())}))}addProperty(){var t=this;return A((function*(){yield t.configureSyncProperty(t.metadata?.relationsOptions?.syncProperties?.length??0),t.changeDetector.detectChanges()}))()}removeProperty(t){this.metadata?.relationsOptions?.syncProperties&&(this.metadata.relationsOptions.syncProperties.splice(t,1),this.history.getNewState())}configureSyncProperty(t){var e=this;return A((function*(){var n;const a=yield(0,p.n)(e.dialog.open(Z,{title:"configure sync property",width:"60vw",data:e.metadata?.relationsOptions?.syncProperties?.[t]??""}).afterClosed());(0,m.EN)(a)&&e.metadata?.relationsOptions&&((n=e.metadata.relationsOptions).syncProperties??(n.syncProperties=[]),e.metadata.relationsOptions.syncProperties[t]=a,e.history.getNewState())}))()}metadataSet(){this.metadata?.relationsOptions&&this.form.patchValue(this.metadata.relationsOptions)}}at.ɵfac=function(t){return new(t||at)(h.Y(L.s),h.Y(k.SB),h.Y(F.J),h.Y(r.p))},at.ɵcmp=b.Xp({type:at,selectors:[["sync-values-node"]],standalone:!0,features:[z._([r.p]),D.q,x.j],decls:19,vars:9,consts:[["name","sync values",3,"parent","destroySubject"],[1,"node-content",3,"formGroup"],[1,"dynamic-form-group","dynamic-margin-bottom-extra-small"],[1,"dynamic-control-label","dynamic-text-uppercase"],["formControlName","triggerSync",1,"dynamic-form-control"],[3,"ngValue"],["class","dynamic-form-group dynamic-margin-bottom-extra-small",4,"ngIf"],["type","button",1,"dynamic-btn-icon",3,"click"],[1,"fas","fa-plus"],[1,"inputs-outputs"],[1,"inputs"],[4,"ngFor","ngForOf"],["class","input",4,"ngIf"],[1,"outputs"],["type","text","formControlName","idleTimeout","number","","required","",1,"dynamic-form-control"],[1,"input"],[3,"parentCoordiantes","zoomLevel","name","parent"],["type","button",1,"dynamic-btn-icon","dynamic-margin-horizontal-extra-small",3,"click"],[1,"fas","fa-cog"],[1,"fas","fa-times"],["name","trigger",3,"parentCoordiantes","zoomLevel","parent"],[1,"output"]],template:function(t,e){1&t&&(_._U(0,"relations-node-header",0),_.Tg(1,"div",1)(2,"div",2)(3,"label",3),N._(4,"sync on"),_.qZ(),_.Tg(5,"select",4)(6,"option",5),N._(7,"idle"),_.qZ(),_.Tg(8,"option",5),N._(9,"trigger"),_.qZ()()(),j.Y(10,W,4,0,"div",6),_.Tg(11,"button",7),U.N("click",(function(t){return t.preventDefault(),t.stopPropagation(),e.addProperty()})),_._U(12,"span",8),_.qZ(),_.Tg(13,"div",9)(14,"div",10),j.Y(15,tt,9,5,"ng-container",11),j.Y(16,et,4,3,"div",12),_.qZ(),_.Tg(17,"div",13),j.Y(18,nt,5,5,"ng-container",11),_.qZ()()()),2&t&&(C.Q("parent",e)("destroySubject",e.destroySubject),O.x(1),C.Q("formGroup",e.form),O.x(5),C.Q("ngValue",!1),O.x(2),C.Q("ngValue",!0),O.x(2),C.Q("ngIf",!(null!=e.metadata&&null!=e.metadata.relationsOptions&&e.metadata.relationsOptions.triggerSync)),O.x(5),C.Q("ngForOf",null==e.metadata||null==e.metadata.relationsOptions?null:e.metadata.relationsOptions.syncProperties),O.x(1),C.Q("ngIf",null==e.metadata||null==e.metadata.relationsOptions?null:e.metadata.relationsOptions.triggerSync),O.x(2),C.Q("ngForOf",null==e.metadata||null==e.metadata.relationsOptions?null:e.metadata.relationsOptions.syncProperties))},dependencies:[a.e,G.sg,B.O,o.U,M.YN,R.Kr,P.Fj,M.EJ,T.JJ,T.JL,H.Q7,K.s,$.u,i.F,I.N,J.L,l.e,c.P,u.n],encapsulation:2,changeDetection:0});class ot{constructor(){this.metaInfo={name:"Sync values",description:"Sync values, allowing triggered changes run at once",group:"Data"},this.nodeDefinition=at,Object.freeze(this)}}}}]);
//# sourceMappingURL=797.client.chunk.140d7fe22f9a728f1f7e.js.map