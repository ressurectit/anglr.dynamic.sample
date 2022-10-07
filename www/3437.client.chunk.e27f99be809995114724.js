"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[3437],{25434:(t,n,e)=>{e.d(n,{b:()=>Z});var o=e(8423),i=e(47826),a=e(65540),r=e(74062),s=e(73512),c=e(14958),u=e(19598),d=e(13816),l=e(55163),p=e(89033);class m{constructor(t){this.defaultValue=null,this.name="",d.Rl.bind(this)(t)}}var f=e(37654),g=e(13341),v=e(18968),h=e(94128),y=e(12890),b=e(50478),w=e(27805),x=e(5419),_=e(28588),C=e(81473),k=e(86039),E=e(58433),N=e(49308),q=e(48215),O=e(78525);function T(t,n,e,o,i,a,r){try{var s=t[a](r),c=s.value}catch(t){return void e(t)}s.done?n(c):Promise.resolve(c).then(o,i)}class Z{constructor(t,n,e){this.data=t,this.dialog=n,this.form=e.build(new m(t)),this.form.valueChanges.subscribe((n=>(0,d.l7)(t,n)))}showCodeEditor(){var t,n=this;return(t=function*(){const t=(0,l.EN)(n.data.defaultValue)?JSON.stringify(n.data.defaultValue,null,4):"",e=yield(0,p.n)(n.dialog.open(s.I,{title:"Code editor",width:"75vw",height:"75vh",data:{content:t,languageModel:c.H}}).afterClosed());(0,l.EN)(e)&&(n.data.defaultValue=(0,u.LK)(e.content))},function(){var n=this,e=arguments;return new Promise((function(o,i){var a=t.apply(n,e);function r(t){T(a,o,i,r,s,"next",t)}function s(t){T(a,o,i,r,s,"throw",t)}r(void 0)}))})()}}Z.ɵfac=function(t){return new(t||Z)(f.Y(a.m),f.Y(C.J),f.Y(r.p))},Z.ɵcmp=g.Xp({type:Z,selectors:[["configure-node-endpoint"]],standalone:!0,features:[v._([r.p]),h.j],decls:16,vars:3,consts:[[3,"formGroup"],[1,"dynamic-form-group","dynamic-margin-bottom-extra-small"],[1,"dynamic-control-label","dynamic-text-uppercase"],["type","text","formControlName","name",1,"dynamic-form-control"],[1,"dynamic-flex-column"],["type","button",1,"dynamic-btn","dynamic-btn-primary","dynamic-align-self-center",3,"click"],[1,"dynamic-flex-row","dynamic-flex-end"],["type","button",1,"dynamic-btn","dynamic-btn-info","dynamic-margin-right-extra-small",3,"mat-dialog-close"],["type","button",1,"dynamic-btn","dynamic-btn-primary",3,"mat-dialog-close"]],template:function(t,n){1&t&&(y.Tg(0,"div",0)(1,"div",1)(2,"label",2),b._(3,"name"),y.qZ(),y._U(4,"input",3),y.qZ(),y.Tg(5,"div",4)(6,"button",5),w.N("click",(function(){return n.showCodeEditor()})),y.Tg(7,"span"),b._(8,"default value"),y.qZ()()()(),y.Tg(9,"div",6)(10,"button",7)(11,"span"),b._(12,"cancel"),y.qZ()(),y.Tg(13,"button",8)(14,"span"),b._(15,"ok"),y.qZ()()()),2&t&&(x.Q("formGroup",n.form),_.x(10),x.Q("mat-dialog-close",null),_.x(3),x.Q("mat-dialog-close",!0))},dependencies:[o.U,k.Fj,E.JJ,E.JL,N.s,q.u,i.I,O.ZT],encapsulation:2,changeDetection:0})},53437:(t,n,e)=>{e.r(n),e.d(n,{ComponentOutputsRelationsEditorMetadata:()=>P});var o=e(12405),i=e(12125),a=e(32123),r=e(74957),s=e(13816),c=e(89033),u=e(25434),d=e(38256),l=e(12890),p=e(50478),m=e(27805),f=e(63289),g=e(52455),v=e(28588),h=e(5419),y=e(4149),b=e(37654),w=e(66382),x=e(47948),_=e(13341),C=e(52900),k=e(94128),E=e(83210),N=e(81473),q=e(15704);function O(t,n,e,o,i,a,r){try{var s=t[a](r),c=s.value}catch(t){return void e(t)}s.done?n(c):Promise.resolve(c).then(o,i)}function T(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var a=t.apply(n,e);function r(t){O(a,o,i,r,s,"next",t)}function s(t){O(a,o,i,r,s,"throw",t)}r(void 0)}))}}function Z(t,n){if(1&t){const t=d.E();l.Tg(0,"div",9),l._U(1,"relation-node-input",10),l.Tg(2,"div",5)(3,"div"),p._(4),l.qZ(),l.Tg(5,"button",11),m.N("click",(function(n){const e=f.CH(t).$implicit,o=g.o();return n.preventDefault(),n.stopPropagation(),f.Kt(o.configureEndpoint(e))})),l._U(6,"span",12),l.qZ(),l.Tg(7,"button",13),m.N("click",(function(n){const e=f.CH(t).$implicit,o=g.o();return n.preventDefault(),n.stopPropagation(),f.Kt(o.removeEndpoint(e))})),l._U(8,"span",14),l.qZ()()()}if(2&t){const t=n.$implicit,e=g.o();v.x(1),h.Q("parentCoordiantes",e.nodePosition)("zoomLevel",e.zoomLevel)("name",t.name)("parent",e),v.x(3),y.Oq(t.name)}}class S extends i.M{constructor(t,n,e){super(t,n),this.dialog=e}get endpoints(){var t,n;return this.metadata?((t=this.metadata).relationsOptions??(t.relationsOptions={outputs:[]}),(n=this.metadata.relationsOptions).outputs??(n.outputs=[])):[]}addEndpoint(){var t=this;return T((function*(){const n={name:"",defaultValue:null};(yield t.configureEndpoint(n))&&(t.endpoints.push(n),t.history.getNewState())}))()}removeEndpoint(t){const n=this.endpoints.indexOf(t);n>=0&&(this.endpoints.splice(n,1),this.history.getNewState())}configureEndpoint(t){var n=this;return T((function*(){const e=JSON.parse(JSON.stringify(t)),o=yield(0,c.n)(n.dialog.open(u.b,{title:"configure component output",width:"60vw",data:t}).afterClosed());return o?n.history.getNewState():(0,s.l7)(t,e),o??!1}))()}}S.ɵfac=function(t){return new(t||S)(b.Y(w.s),b.Y(x.SB),b.Y(N.J))},S.ɵcmp=_.Xp({type:S,selectors:[["component-outputs-node"]],standalone:!0,features:[C.q,k.j],decls:9,vars:3,consts:[["name","component inputs",3,"parent","destroySubject"],[1,"node-content"],[1,"inputs-outputs"],[1,"inputs"],["class","input",4,"ngFor","ngForOf"],[1,"dynamic-flex-row"],["type","button",1,"dynamic-btn-icon","dynamic-margin-left-extra-small",3,"click"],[1,"fas","fa-plus"],[1,"outputs"],[1,"input"],[3,"parentCoordiantes","zoomLevel","name","parent"],["type","button",1,"dynamic-btn-icon","dynamic-margin-horizontal-extra-small",3,"click"],[1,"fas","fa-cog"],["type","button",1,"dynamic-btn-icon",3,"click"],[1,"fas","fa-times"]],template:function(t,n){1&t&&(l._U(0,"relations-node-header",0),l.Tg(1,"div",1)(2,"div",2)(3,"div",3),E.Y(4,Z,9,5,"div",4),l.Tg(5,"div",5)(6,"button",6),m.N("click",(function(t){return t.preventDefault(),t.stopPropagation(),n.addEndpoint()})),l._U(7,"span",7),l.qZ()()(),l._U(8,"div",8),l.qZ()()),2&t&&(h.Q("parent",n)("destroySubject",n.destroySubject),v.x(4),h.Q("ngForOf",n.endpoints))},dependencies:[o.e,q.sg,a.e,r.P],encapsulation:2,changeDetection:0});class P{constructor(){this.metaInfo={name:"Component outputs",description:"Definition of relations component outputs",group:"Component"},this.nodeDefinition=S,Object.freeze(this)}}}}]);
//# sourceMappingURL=3437.client.chunk.e27f99be809995114724.js.map