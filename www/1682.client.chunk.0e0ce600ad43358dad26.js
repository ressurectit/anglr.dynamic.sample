"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[1682],{61682:(t,e,a)=>{a.r(e),a.d(e,{DynamicContentModule:()=>gt});var n=a(15950),s=a(51098),o=a(18713),i=a(52252),r=a(34307),c=a(41080),d=a(37921),u=a(41803),p=a(44922),l=a(26921),g=a(99045),h=a(57563),f=a(52786),_=a(11749),m=a(51871),v=a(38048),y=a(74499),b=a(43718),C=a(37611),w=a(94864),T=a(83963),k=a(35355),D=a(95591),Y=a(48567),M=a(32247),O=a(29557),x=a(69147),N=a(54285),U=a(82450),E=a(703),A=a(84432),P=a(28393),S=a(17305),q=a(10515);const I="CUSTOM_COMPONENTS";class z extends Y.t{constructor(t){super(),this._store=t,this._registeredChange=new P.x}get registeredChange(){return this._registeredChange.asObservable()}toggleRegisteredComponent(t){const e=this.getRegisteredComponents(),a=e.indexOf(t);a>=0?e.splice(a,1):e.push(t),this._store.set(I,e),this._registeredChange.next()}getRegisteredComponents(){return this._store.get(I)??[]}}z.ɵfac=function(t){return new(t||z)(S.LF(A.T0))},z.ɵprov=q.Yz({token:z,factory:z.ɵfac});class Z extends m.L{constructor(){super("LAYOUT_PACKAGES_STORE")}}Z.ɵfac=function(t){return new(t||Z)},Z.ɵprov=q.Yz({token:Z,factory:Z.ɵfac});var J=a(77544),L=a(40727),Q=a(56274),R=a(12900),j=a(89285),F=a(90090),K=a(38662),$=a(67550),B=a(5617),G=a(58138),H=a(20394),W=a(46629),X=a(40066),V=a(436);function tt(t,e,a,n,s,o,i){try{var r=t[o](i),c=r.value}catch(t){return void a(t)}r.done?e(c):Promise.resolve(c).then(n,s)}let et=class{constructor(t,e,a,n,s,o){this._route=t,this._store=e,this._metaManager=a,this.dialog=n,this._notifications=s,this._changeDetector=o,this._id="",this.metadata=this.emptyMetadata}get emptyMetadata(){return{id:`stackPanel-${(0,x.Ox)(10)}`,displayName:"root",package:"basic-components",name:"stackPanel",options:{children:[]}}}ngOnInit(){this._route.params.subscribe((({id:t})=>{this._id=t,this.metadata=this._store.getData(this._id)?.layout??this.emptyMetadata}))}save(){const t=this._store.getData(this._id)??{};t.layout=this._metaManager.getMetadata()??void 0,this._store.setData(this._id,t)}import(){var t,e=this;return(t=function*(){const t=yield(0,U.n)(e.dialog.open(l.I,{title:"Import layout metadata",width:"75vw",height:"75vh",data:{content:"",languageModel:g.H}}).afterClosed());if((0,N.EN)(t))try{e.metadata=JSON.parse(t.content),e._changeDetector.detectChanges()}catch(t){e._notifications.error(`Failed to parse json ${t}`)}},function(){var e=this,a=arguments;return new Promise((function(n,s){var o=t.apply(e,a);function i(t){tt(o,n,s,i,r,"next",t)}function r(t){tt(o,n,s,i,r,"throw",t)}i(void 0)}))})()}};et.ɵfac=function(t){return new(t||et)(Q.Y(d.gz),Q.Y(E.U),Q.Y(h.Qh),Q.Y(M.J),Q.Y(O.fD),Q.Y(c.s))},et.ɵcmp=R.Xp({type:et,selectors:[["layout-editor-view"]],features:[j._([f.z,{provide:v.qO,useFactory:t=>new _.I((e=>t.getData(e)?.layout??null)),deps:[E.U]},(0,y._)(),(0,C.iS)(),(0,w.vQ)(),(0,T.gJ)(),(0,k.hd)(),(0,L.jS)(),(0,D.Wh)([],z),{provide:m.L,useClass:Z},{provide:z,useExisting:Y.t},{provide:b.dK,useFactory:t=>t.registeredChange,deps:[z],multi:!0},(0,J.Y)("DYNAMIC_CONTENT_DATA")])],decls:16,vars:2,consts:[[1,"flex-row"],["type","button","goBack","",1,"btn","btn-info"],[1,"fas","fa-arrow-left"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fas","fa-save"],[1,"fas","fa-file-import"],[3,"copyClick"],[1,"flex-1",3,"metadata"]],template:function(t,e){1&t&&(F.Tg(0,"div",0)(1,"button",1),F._U(2,"span",2),F.Tg(3,"span"),K._(4,"back"),F.qZ()(),F.Tg(5,"button",3),$.N("click",(function(){return e.save()})),F._U(6,"span",4),F.Tg(7,"span"),K._(8,"save"),F.qZ()(),F.Tg(9,"button",3),$.N("click",(function(){return e.import()})),F._U(10,"span",5),F.Tg(11,"span"),K._(12,"import"),F.qZ()(),F.Tg(13,"debug-data",6),K._(14,"copy metadata"),F.qZ()(),F._U(15,"layout-editor",7)),2&t&&(B.x(13),G.Q("copyClick",e.metadata),B.x(2),G.Q("metadata",e.metadata))},dependencies:[W.v,V.Z,H.v,X.o],styles:["[_nghost-%COMP%]{padding:0}"],changeDetection:0}),et=(0,n.gn)([(0,u.n)({path:"layout/:id"}),(0,p.q)("layoutEditor-page"),(0,n.w6)("design:paramtypes",[d.gz,E.U,Object,M.J,O.fD,c.s])],et);var at=a(23597),nt=a(79745),st=a(76340);class ot extends m.L{constructor(){super("RELATIONS_PACKAGES_STORE")}}ot.ɵfac=function(t){return new(t||ot)},ot.ɵprov=q.Yz({token:ot,factory:ot.ɵfac});var it=a(58463),rt=a(35767);class ct extends it.w{getDefinedTypes(){return{}}}ct.ɵfac=function(){let t;return function(e){return(t||(t=rt.n5(ct)))(e||ct)}}(),ct.ɵprov=q.Yz({token:ct,factory:ct.ɵfac});var dt=a(24374);function ut(t,e,a,n,s,o,i){try{var r=t[o](i),c=r.value}catch(t){return void a(t)}r.done?e(c):Promise.resolve(c).then(n,s)}let pt=class{constructor(t,e,a,n,s,o,i){this._route=t,this._store=e,this._metaManager=a,this.layoutManager=n,this.dialog=s,this._notifications=o,this._changeDetector=i,this._id="",this.metadata=[]}ngOnInit(){this._route.params.subscribe((({id:t})=>{this._id=t;const e=this._store.getData(this._id);this.metadata=e?.relations??[],e?.layout&&this.layoutManager.setLayout(e?.layout)}))}save(){const t=this._store.getData(this._id)??{};t.relations=this._metaManager.getMetadata()??void 0,this._store.setData(this._id,t)}import(){var t,e=this;return(t=function*(){const t=yield(0,U.n)(e.dialog.open(l.I,{title:"Import relations metadata",width:"75vw",height:"75vh",data:{content:"",languageModel:g.H}}).afterClosed());if((0,N.EN)(t))try{e.metadata=JSON.parse(t.content),e._changeDetector.detectChanges()}catch(t){e._notifications.error(`Failed to parse json ${t}`)}},function(){var e=this,a=arguments;return new Promise((function(n,s){var o=t.apply(e,a);function i(t){ut(o,n,s,i,r,"next",t)}function r(t){ut(o,n,s,i,r,"throw",t)}i(void 0)}))})()}};pt.ɵfac=function(t){return new(t||pt)(Q.Y(d.gz),Q.Y(E.U),Q.Y(h.Qh),Q.Y(st.n),Q.Y(M.J),Q.Y(O.fD),Q.Y(c.s))},pt.ɵcmp=R.Xp({type:pt,selectors:[["relations-editor-view"]],features:[j._([f.z,{provide:at.te,useFactory:t=>new _.I((e=>t.getData(e)?.relations??[])),deps:[E.U]},(0,k.vu)(),(0,nt.xb)(),(0,T.Rn)(),(0,w.El)(),(0,L.Mr)(),(0,D.Kc)((0,D.Sf)(ct),z),{provide:m.L,useClass:ot},(0,J.Y)("DYNAMIC_CONTENT_DATA")])],decls:16,vars:2,consts:[[1,"flex-row"],["type","button","goBack","",1,"btn","btn-info"],[1,"fas","fa-arrow-left"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fas","fa-save"],[1,"fas","fa-file-import"],[3,"copyClick"],[1,"flex-1",3,"metadata"]],template:function(t,e){1&t&&(F.Tg(0,"div",0)(1,"button",1),F._U(2,"span",2),F.Tg(3,"span"),K._(4,"back"),F.qZ()(),F.Tg(5,"button",3),$.N("click",(function(){return e.save()})),F._U(6,"span",4),F.Tg(7,"span"),K._(8,"save"),F.qZ()(),F.Tg(9,"button",3),$.N("click",(function(){return e.import()})),F._U(10,"span",5),F.Tg(11,"span"),K._(12,"import"),F.qZ()(),F.Tg(13,"debug-data",6),K._(14,"copy metadata"),F.qZ()(),F._U(15,"relations-editor",7)),2&t&&(B.x(13),G.Q("copyClick",e.metadata),B.x(2),G.Q("metadata",e.metadata))},dependencies:[W.v,dt.Y,H.v,X.o],styles:["[_nghost-%COMP%]{padding:0}"],changeDetection:0}),pt=(0,n.gn)([(0,u.n)({path:"relations/:id"}),(0,p.q)("relationsEditor-page"),(0,n.w6)("design:paramtypes",[d.gz,E.U,Object,st.n,M.J,O.fD,c.s])],pt);const lt=[et,pt];let gt=class{};gt.ɵfac=function(t){return new(t||gt)},gt.ɵmod=R.oA({type:gt}),gt.ɵinj=q.cJ({imports:[s.p,r.W,i.s]}),gt=(0,n.gn)([(0,o.P)(lt)],gt)}}]);
//# sourceMappingURL=1682.client.chunk.0e0ce600ad43358dad26.js.map