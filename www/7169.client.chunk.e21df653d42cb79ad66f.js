"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[7169],{37169:(t,e,a)=>{a.r(e),a.d(e,{DynamicContentModule:()=>nt});var s=a(14392),n=a(82494),r=a(88549),i=a(18579),o=a(7097),d=a(86836),c=a(39205),h=a(33844),u=a(49023),g=a(59098),l=a(89901),m=a(91628),_=a(8265),p=a(94183),f=a(65343),v=a(33293),y=a(24939),C=a(35139),Y=a(25844),O=a(85746),w=a(41350),M=a(16896),D=a(13816),x=a(89952),T=a(81337),E=a(97926),A=a(53245),b=a(58883),R=a(37654),N=a(13341),z=a(18968),U=a(57165),L=a(27805),I=a(5419),S=a(28588),k=a(79875),Q=a(78750);let q=class{get emptyMetadata(){return{id:`root-${(0,D.Ox)(10)}`,displayName:"root",package:"basic-components",name:"stackPanel",options:{children:[]}}}constructor(t,e,a,s){this._route=t,this._store=e,this._metaManager=a,this.history=s,this._id="",this.metadata=this.emptyMetadata}ngOnInit(){this._route.params.subscribe((({id:t})=>{this._id=t,this.metadata=this._store.getData(this._id)?.layout??this.emptyMetadata}))}save(){const t=this._store.getData(this._id)??{};t.layout=this._metaManager.getMetadata()??void 0,this._store.setData(this._id,t)}};q.ɵfac=function(t){return new(t||q)(R.Y(i.gz),R.Y(x.U),R.Y(c.Qh),R.Y(_.dB))},q.ɵcmp=N.Xp({type:q,selectors:[["layout-editor-view"]],features:[z._([h.z,{provide:m.qO,useFactory:t=>new u.I((e=>t.getData(e)?.layout??null)),deps:[x.U]},(0,p._)(),(0,w.rj)(),(0,M.m_)(),(0,f.iS)(),(0,v.vQ)(),(0,y.gJ)(),(0,C.hd)(),(0,b.jS)(),(0,Y.Wh)([],T.V),{provide:g.L,useClass:E.m},{provide:T.V,useExisting:O.t},{provide:_.dK,useFactory:t=>t.registeredChange,deps:[T.V],multi:!0},(0,A.Y)("DYNAMIC_CONTENT_DATA")])],decls:2,vars:3,consts:[[3,"metadata","history","metadataChange","save"],[1,"flex-1",3,"metadata"]],template:function(t,e){1&t&&(U.Tg(0,"editor-controls",0),L.N("metadataChange",(function(t){return e.metadata=t}))("save",(function(){return e.save()})),U.qZ(),U._U(1,"layout-editor",1)),2&t&&(I.Q("metadata",e.metadata)("history",e.history),S.x(1),I.Q("metadata",e.metadata))},dependencies:[k.Z,Q.w],styles:["[_nghost-%COMP%]{padding:0}"],changeDetection:0}),q=(0,s.gn)([(0,o.n)({path:"layout/:id"}),(0,d.q)("layoutEditor-page"),(0,s.w6)("design:paramtypes",[i.gz,x.U,Object,l.Y])],q);var P=a(73760),j=a(52205),V=a(19706),F=a(40752),K=a(81044),Z=a(74967);let G=class{constructor(t,e,a,s,n){this._route=t,this._store=e,this._metaManager=a,this.layoutManager=s,this.history=n,this._id="",this.metadata=[]}ngOnInit(){this._route.params.subscribe((({id:t})=>{this._id=t;const e=this._store.getData(this._id);this.metadata=e?.relations??[],e?.layout&&this.layoutManager.setLayout(e?.layout)}))}save(){const t=this._store.getData(this._id)??{};t.relations=this._metaManager.getMetadata()??void 0,this._store.setData(this._id,t)}};G.ɵfac=function(t){return new(t||G)(R.Y(i.gz),R.Y(x.U),R.Y(c.Qh),R.Y(F.n),R.Y(j.nR))},G.ɵcmp=N.Xp({type:G,selectors:[["relations-editor-view"]],features:[z._([h.z,{provide:P.te,useFactory:t=>new u.I((e=>t.getData(e)?.relations??[])),deps:[x.U]},(0,w.qm)(),(0,M.Od)(),(0,C.vu)(),(0,V.xb)(),(0,y.Rn)(),(0,v.El)(),(0,b.Mr)(),(0,Y.Kc)((0,Y.$R)(),T.V),{provide:g.L,useClass:K.i},(0,A.Y)("DYNAMIC_CONTENT_DATA")])],decls:2,vars:3,consts:[[3,"metadata","history","metadataChange","save"],[1,"flex-1",3,"metadata"]],template:function(t,e){1&t&&(U.Tg(0,"editor-controls",0),L.N("metadataChange",(function(t){return e.metadata=t}))("save",(function(){return e.save()})),U.qZ(),U._U(1,"relations-editor",1)),2&t&&(I.Q("metadata",e.metadata)("history",e.history),S.x(1),I.Q("metadata",e.metadata))},dependencies:[Z.Y,Q.w],styles:["[_nghost-%COMP%]{padding:0}"],changeDetection:0}),G=(0,s.gn)([(0,o.n)({path:"relations/:id"}),(0,d.q)("relationsEditor-page"),(0,s.w6)("design:paramtypes",[i.gz,x.U,Object,F.n,l.Y])],G);var X=a(2860),J=a(63810),W=a(35845),$=a(82222),B=a(46936),H=a(10012);class tt extends J.w{getDefinedTypes(){const t={};return t[W.default.relationsId]=W.default,t[$.default.relationsId]=$.default,t}}tt.ɵfac=function(){let t;return function(e){return(t||(t=B.n5(tt)))(e||tt)}}(),tt.ɵprov=H.Yz({token:tt,factory:tt.ɵfac});let et=class{constructor(t,e,a,s){this._route=t,this._store=e,this._metaManager=a,this.history=s,this._id="",this.metadata=[]}ngOnInit(){this._route.params.subscribe((({id:t})=>{this._id=t,this.metadata=this._store.getData(this._id)??[]}))}save(){const t=this._metaManager.getMetadata();t&&this._store.setData(this._id,t)}};et.ɵfac=function(t){return new(t||et)(R.Y(i.gz),R.Y(x.U),R.Y(c.Qh),R.Y(j.nR))},et.ɵcmp=N.Xp({type:et,selectors:[["resolver-relations-editor-view"]],features:[z._([h.z,(0,C.wr)(),(0,V.Gc)(),(0,y.eh)(),(0,b.Lr)(),(0,X.hE)(tt),{provide:g.L,useClass:K.i},(0,A.Y)("RESOLVER_RELATIONS_DATA")])],decls:2,vars:3,consts:[[3,"metadata","history","metadataChange","save"],[1,"flex-1",3,"metadata"]],template:function(t,e){1&t&&(U.Tg(0,"editor-controls",0),L.N("metadataChange",(function(t){return e.metadata=t}))("save",(function(){return e.save()})),U.qZ(),U._U(1,"relations-editor",1)),2&t&&(I.Q("metadata",e.metadata)("history",e.history),S.x(1),I.Q("metadata",e.metadata))},dependencies:[Z.Y,Q.w],styles:["[_nghost-%COMP%]{padding:0}"],changeDetection:0}),et=(0,s.gn)([(0,o.n)({path:"resolverRelations/:id"}),(0,d.q)("resolverRelationsEditor-page"),(0,s.w6)("design:paramtypes",[i.gz,x.U,Object,l.Y])],et);const at=[q,G,et];var st=a(83139);let nt=class{};nt.ɵfac=function(t){return new(t||nt)},nt.ɵmod=N.oA({type:nt}),nt.ɵinj=H.cJ({imports:[r.W,st.wx]}),nt=(0,s.gn)([(0,n.P)(at)],nt)},81337:(t,e,a)=>{a.d(e,{V:()=>c});var s=a(85746),n=a(12987),r=a(78072),i=a(81267),o=a(10012);const d="CUSTOM_COMPONENTS";class c extends s.t{get registeredChange(){return this._registeredChange.asObservable()}constructor(t){super(),this._store=t,this._registeredChange=new r.x}addCustomComponent(t){const e=this.getRegisteredComponents();e.indexOf(t)>=0||(e.push(t),this._store.set(d,e),this._registeredChange.next())}removeCustomComponent(t){const e=this.getRegisteredComponents(),a=e.indexOf(t);a<0||(e.splice(a,1),this._store.set(d,e),this._registeredChange.next())}getRegisteredComponents(){return this._store.get(d)??[]}}c.ɵfac=function(t){return new(t||c)(i.LF(n.T0))},c.ɵprov=o.Yz({token:c,factory:c.ɵfac})},97926:(t,e,a)=>{a.d(e,{m:()=>r});var s=a(59098),n=a(10012);class r extends s.L{constructor(){super("LAYOUT_PACKAGES_STORE")}}r.ɵfac=function(t){return new(t||r)},r.ɵprov=n.Yz({token:r,factory:r.ɵfac})},81044:(t,e,a)=>{a.d(e,{i:()=>r});var s=a(59098),n=a(10012);class r extends s.L{constructor(){super("RELATIONS_PACKAGES_STORE")}}r.ɵfac=function(t){return new(t||r)},r.ɵprov=n.Yz({token:r,factory:r.ɵfac})}}]);
//# sourceMappingURL=7169.client.chunk.e21df653d42cb79ad66f.js.map