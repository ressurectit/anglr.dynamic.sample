/*! For license information please see 3729.client.chunk.42cc2e585d7fdcd7034f.js.LICENSE.txt */
"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[3729],{82450:(t,e,i)=>{i.d(e,{n:()=>n});var o=i(6070);function n(t,e){const i="object"==typeof e;return new Promise(((n,s)=>{let a,l=!1;t.subscribe({next:t=>{a=t,l=!0},error:s,complete:()=>{l?n(a):i?n(e.defaultValue):s(new o.K)}})}))}},97372:(t,e,i)=>{i.d(e,{i:()=>Q});var o=i(85230),n=i(61373),s=i(32461),a=i(69147),l=i(71714),r=i(54285),u=i(90090),h=i(38662),p=i(14151),c=i(5617),d=i(88912),m=i(58138),g=i(92156),_=i(97740),f=i(40486),y=i(59656),v=i(56274),C=i(41080),w=i(2492),b=i(12900),x=i(67550),D=i(77177),M=i(31644);function R(t,e){if(1&t&&(u.Tg(0,"div"),h._(1),u.qZ()),2&t){const t=p.o();c.x(1),d.Oq(t.data)}}function P(t,e){if(1&t&&u._U(0,"div",3),2&t){const t=p.o();m.Q("innerHTML",t.data,g.oJ)}}function T(t,e){1&t&&_.Gk(0)}const O=function(t){return{$implicit:t}};function E(t,e){if(1&t&&f.Y(0,T,1,0,"ng-container",4),2&t){const t=p.o();m.Q("ngTemplateOutlet",t.template)("ngTemplateOutletContext",y.VK(2,O,t.data))}}class Y{constructor(t,e){this._changeDetector=t,this._element=e,this._enterFn=()=>null,this._leaveFn=()=>null,this.allowHtml=!1}registerHoverEvents(t,e){this._enterFn=t,this._leaveFn=e}invalidateVisuals(){this.cssClass&&this._element.nativeElement.classList.add(this.cssClass),this._changeDetector.detectChanges()}mouseEnter(){this._enterFn()}mouseLeave(){this._leaveFn()}}Y.ɵfac=function(t){return new(t||Y)(v.Y(C.s),v.Y(w.SB))},Y.ɵcmp=b.Xp({type:Y,selectors:[["tooltip-popup"]],hostBindings:function(t,e){1&t&&x.N("mouseenter",(function(){return e.mouseEnter()}))("mouseleave",(function(){return e.mouseLeave()}))},decls:3,vars:3,consts:[[4,"ngIf"],[3,"innerHTML",4,"ngIf"],[3,"ngIf"],[3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(f.Y(0,R,2,1,"div",0),f.Y(1,P,1,1,"div",1),f.Y(2,E,1,4,"ng-template",2)),2&t&&(m.Q("ngIf",!e.template&&!e.allowHtml),c.x(1),m.Q("ngIf",!e.template&&e.allowHtml),c.x(1),m.Q("ngIf",e.template))},dependencies:[D.O,M.t],styles:["[_nghost-%COMP%]\r\n{\r\n    display: block;\r\n    position: absolute;\r\n    padding: 2px 4px;\r\n    border-radius: 3px;\r\n    font-size: 0.9em;\r\n    max-width: 300px;\r\n    user-select: text;\r\n}"],changeDetection:0});const I=new(i(13556).O)("TOOLTIP_OPTIONS");var L=i(34961),N=i(24677),q=i(7633);class A{constructor(t){this.template=t}static ngTemplateContextGuard(t,e){return!0}}A.ɵfac=function(t){return new(t||A)(v.Y(q.Rg))},A.ɵdir=b.lG({type:A,selectors:[["","tooltipTemplate",""]]});var S=i(84432),V=i(20264),k=i(905),z=i(8878),H=i(11817),B=i(22390);const j={delay:200,position:{offset:L.I.MouseEnter,placement:L.X.TopStart},allowSelection:!1,tooltipRenderer:Y,tooltipCssClass:null,stopPropagation:!1,enterAnimation:n.B,exitAnimation:s.S};class Q{constructor(t,e,i,o,n,s,l){this._viewContainerRef=t,this._injector=e,this._element=i,this._animationsPlayer=o,this._document=n,this._position=s,this._showRequest=!1,this._keepOpen=!1,this._timeout=null,this.allowHtml=!1,this._options=(0,a.l7)(!0,{},j,l),this._enterAnimation=this._animationsPlayer.build(this._options.enterAnimation),this._exitAnimation=this._animationsPlayer.build(this._options.exitAnimation)}get tooltipOptions(){return this._options}set tooltipOptions(t){this._options=(0,a.l7)(!0,{},this._options,t),this._enterAnimation=this._animationsPlayer.build(this._options.enterAnimation),this._exitAnimation=this._animationsPlayer.build(this._options.exitAnimation)}ngOnChanges(t){(0,l.$)("tooltipVisible")in t&&(this.tooltipVisible?this._showTooltip():this._hideTooltip())}ngOnDestroy(){this._timeout&&clearTimeout(this._timeout),this._destroyTooltip()}mouseLeave(t){this._options.stopPropagation&&t.stopPropagation(),(0,r.fp)(this.tooltipVisible)&&setTimeout((()=>{this._keepOpen||(this._showRequest=!1,this._hideTooltip())}),10)}mouseMove(t){this._options.stopPropagation&&t.stopPropagation(),this._showRequest=!0,this._tooltipComponent||(0,r.EN)(this.tooltipVisible)||((0,r.EN)(this._timeout)&&clearTimeout(this._timeout),this._timeout=setTimeout((()=>{this._timeout=null,this._showRequest&&(this._showTooltip(t),this._showRequest=!1)}),this._options.delay))}_showTooltip(t){this._createTooltip(),this._tooltipElement&&(this._showData(),this._position.placeElement(this._tooltipElement,this._element.nativeElement,{placement:this._options.position.placement,offset:this._options.position.offset,flip:!0,mouseEvent:t,autoUpdate:!1}).toPromise().then((t=>(0,N.e)(t))))}_hideTooltip(){this._destroyTooltip()}_destroyTooltip(){if(this._tooltipComponent){const t=this._tooltipComponent,e=this._tooltipElement,i=this._exitAnimation.create(e);i.onDone((()=>{t.destroy(),i.destroy()})),this._tooltipComponent=void 0,this._tooltipElement=void 0,i.play()}}_createTooltip(){this._destroyTooltip(),this._tooltipComponent=this._viewContainerRef.createComponent(this._options.tooltipRenderer,{injector:this._injector}),this._tooltipElement=this._tooltipComponent.hostView.rootNodes[0],this._document.body.appendChild(this._tooltipElement),this._enterAnimation.create(this._tooltipElement).play()}_showData(){this._tooltipComponent&&(this._tooltipComponent.instance.allowHtml=this.allowHtml,this._tooltipComponent.instance.data=this.tooltip,this._tooltipComponent.instance.template=this.template??this.tooltipTemplateChild?.template,this._tooltipComponent.instance.cssClass=this._options.tooltipCssClass,this._tooltipComponent.instance.registerHoverEvents((()=>{this._options.allowSelection&&(this._keepOpen=!0,this._showRequest=!1)}),(()=>{setTimeout((()=>{this._keepOpen=!1,this._showRequest||this._hideTooltip(),this._showRequest=!1}),5)})),this._tooltipComponent.instance.invalidateVisuals())}}Q.ɵfac=function(t){return new(t||Q)(v.Y(V.s_),v.Y(k.z),v.Y(w.SB),v.Y(B._),v.Y(o.K),v.Y(S.Vr),v.Y(I,8))},Q.ɵdir=b.lG({type:Q,selectors:[["","tooltip",""]],contentQueries:function(t,e,i){if(1&t&&z.Su(i,A,5),2&t){let t;z.iG(t=z.CR())&&(e.tooltipTemplateChild=t.first)}},hostBindings:function(t,e){1&t&&x.N("mouseleave",(function(t){return e.mouseLeave(t)}))("mousemove",(function(t){return e.mouseMove(t)}))},inputs:{tooltip:"tooltip",allowHtml:"allowHtml",template:"template",tooltipOptions:"tooltipOptions",tooltipVisible:"tooltipVisible"},features:[H.T]})},24677:(t,e,i)=>{function o(t){Object.assign(t.target.style,{top:"0",left:"0",transform:`translate(${t.x}px, ${t.y}px)`})}i.d(e,{e:()=>o})},39463:(t,e,i)=>{i.d(e,{ZT:()=>m});var o=i(86373),n=i(56274),s=i(2492),a=i(12900),l=i(67550),r=i(90102),u=i(11817),h=i(61337),p=i(46170),c=i(62957);let d=0;class m{constructor(t,e,i){this.dialogRef=t,this._elementRef=e,this._dialog=i,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=y(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){(0,o.R)(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}m.ɵfac=function(t){return new(t||m)(n.Y(o.s,8),n.Y(s.SB),n.Y(c.uw))},m.ɵdir=a.lG({type:m,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&l.N("click",(function(t){return e._onButtonClick(t)})),2&t&&r.u("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[u.T]});class g{constructor(t,e,i){this._dialogRef=t,this._elementRef=e,this._dialog=i,this.id="mat-dialog-title-"+d++}ngOnInit(){this._dialogRef||(this._dialogRef=y(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then((()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)}))}}g.ɵfac=function(t){return new(t||g)(n.Y(o.s,8),n.Y(s.SB),n.Y(c.uw))},g.ɵdir=a.lG({type:g,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(t,e){2&t&&h.I("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]});class _{}_.ɵfac=function(t){return new(t||_)},_.ɵdir=a.lG({type:_,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]});class f{constructor(){this.align="start"}}function y(t,e){let i=t.nativeElement.parentElement;for(;i&&!i.classList.contains("mat-dialog-container");)i=i.parentElement;return i?e.find((t=>t.id===i.id)):null}f.ɵfac=function(t){return new(t||f)},f.ɵdir=a.lG({type:f,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"],hostVars:4,hostBindings:function(t,e){2&t&&p.ek("mat-dialog-actions-align-center","center"===e.align)("mat-dialog-actions-align-end","end"===e.align)},inputs:{align:"align"}})},19277:(t,e,i)=>{i.d(e,{M:()=>f});var o=i(17305),n=i(71714),s=i(28393),a=i(60541),l=i(40433),r=i(16056),u=i(56274),h=i(41080),p=i(2492),c=i(12900),d=i(8878),m=i(67550),g=i(99654),_=i(11817);class f{constructor(t,e){this.changeDetector=t,this.element=e,this.history=(0,o.f3)(r.nR),this.initialized=!1,this.isDragging=!1,this.moved=!1,this.lastMouseDownPosition={x:0,y:0},this.lastMouseDownNodePosition={x:0,y:0},this.nodePosition={x:0,y:0},this.ɵAllOutputs=[],this.ɵInputs={},this.ɵOutputs={},this.destroySubject=new s.x,this.zoomLevel=1,this.element.nativeElement.classList.add("relations-node"),this.updatePosition(),this.observer=new ResizeObserver((()=>this.updateRelations())),this.observer.observe(this.element.nativeElement)}get id(){return this.metadata?.id??""}get allOutputs(){return this.ɵAllOutputs}get inputs(){return this.ɵInputs}get outputs(){return this.ɵOutputs}get destroy(){return this.destroySubject.asObservable()}ngOnChanges(t){(0,n.$)("metadata")in t&&this.metadata&&(this.metadata.nodeMetadata?.coordinates&&(this.nodePosition=this.metadata.nodeMetadata.coordinates,this.updatePosition()),this.metadataSet())}ngOnDestroy(){this.observer?.disconnect()}invalidateVisuals(){this.changeDetector.detectChanges(),this.initialized||(this.initialized=!0,this.initEndpoints())}initialize(){}onMouseDown(t){this.moved=!1,this.isDragging=!0,this.lastMouseDownPosition={x:t.clientX,y:t.clientY},this.lastMouseDownNodePosition={x:this.nodePosition.x,y:this.nodePosition.y},t.stopImmediatePropagation()}onMouseMove(t){this.isDragging&&(this.moved=!0,this.nodePosition={x:this.lastMouseDownNodePosition.x+1*(t.clientX-this.lastMouseDownPosition.x)/this.zoomLevel,y:this.lastMouseDownNodePosition.y+1*(t.clientY-this.lastMouseDownPosition.y)/this.zoomLevel},this.updatePosition(),t.stopImmediatePropagation(),t.preventDefault(),this.updateRelations())}onMouseUp(t){this.isDragging&&(this.moved&&this.history.getNewState(),this.isDragging=!1,t.stopImmediatePropagation(),t.preventDefault())}initEndpoints(){const t=()=>{this.ɵInputs={},this.inputsChildren?.forEach((t=>{t.name&&(this.ɵInputs[t.name]=t)})),Object.freeze(this.ɵInputs)},e=()=>{this.ɵAllOutputs=this.outputsChildren.toArray(),this.ɵOutputs={},this.outputsChildren?.forEach((t=>{t.name&&(this.ɵOutputs[t.name]=t)})),Object.freeze(this.ɵOutputs)};this.inputsChildren?.changes.subscribe((()=>t())),this.outputsChildren?.changes.subscribe((()=>e())),t(),e()}updateRelations(){this.inputsChildren.forEach((t=>{t.updateRelation()})),this.outputsChildren.forEach((t=>{t.updateRelation()}))}updatePosition(){this.element.nativeElement.style.left=`${this.nodePosition.x}px`,this.element.nativeElement.style.top=`${this.nodePosition.y}px`,this.metadata?.nodeMetadata?.coordinates&&(this.metadata.nodeMetadata.coordinates.x=this.nodePosition.x,this.metadata.nodeMetadata.coordinates.y=this.nodePosition.y)}metadataSet(){}}f.ɵfac=function(t){return new(t||f)(u.Y(h.s),u.Y(p.SB))},f.ɵdir=c.lG({type:f,viewQuery:function(t,e){if(1&t&&(d.Gf(l.P,5),d.Gf(a.n,5)),2&t){let t;d.iG(t=d.CR())&&(e.inputsChildren=t),d.iG(t=d.CR())&&(e.outputsChildren=t)}},hostBindings:function(t,e){1&t&&m.N("mousedown",(function(t){return e.onMouseDown(t)}))("mousemove",(function(t){return e.onMouseMove(t)}),!1,g.Jf)("mouseup",(function(t){return e.onMouseUp(t)}),!1,g.Jf)},features:[_.T]})},44346:(t,e,i)=>{i.d(e,{S:()=>u});var o=i(56274),n=i(2492),s=i(12900),a=i(46170),l=i(25457),r=i(88188);class u{constructor(t,e,i){this._element=t,this._relationManager=e,this._canvas=i,this._isDragging=!1,this._isHighlighted=!1,this._lastMouseDownPosition={x:0,y:0},this.zoomLevel=1,this.parentCoordiantes={x:0,y:0}}get parentId(){return this.parent?.id??""}ngOnInit(){if(!this.parent)throw new Error("Every input or output endpoint must have parent specified")}getCoordinates(){return{x:this.parentCoordiantes.x+this._element.nativeElement.offsetLeft+this._element.nativeElement.offsetWidth/2,y:this.parentCoordiantes.y+this._element.nativeElement.offsetTop+this._element.nativeElement.offsetHeight/2}}highlight(){this._isHighlighted=!0}cancelHighlight(){this._isHighlighted=!1}}u.ɵfac=function(t){return new(t||u)(o.Y(n.SB),o.Y(l.J),o.Y(r.F))},u.ɵdir=s.lG({type:u,hostVars:2,hostBindings:function(t,e){2&t&&a.ek("highlighted",e._isHighlighted)},inputs:{name:"name",zoomLevel:"zoomLevel",parentCoordiantes:"parentCoordiantes",parent:"parent"}})},29194:(t,e,i)=>{i.d(e,{e:()=>$});var o=i(14015),n=i(57095),s=i(82450),a=i(83580),l=i(40058),r=i(5545),u=i(43705),h=i(69147);class p{constructor(t){this.displayName=null,this.scope=null,h.Rl.bind(this)(t)}}var c=i(90090),d=i(58138),m=i(38662),g=i(5617),_=i(88912),f=i(40486),y=i(14151),v=i(56274),C=i(12900),w=i(89285),b=i(10073),x=i(20931),D=i(77177),M=i(39463),R=i(78596),P=i(24430),T=i(52548),O=i(86917),E=i(22369),Y=i(53829);function I(t,e){1&t&&c._U(0,"input",8),2&t&&d.Q("readonly",!0)}function L(t,e){if(1&t&&(c.Tg(0,"option",12),m._(1),c.qZ()),2&t){const t=e.$implicit;d.Q("value",t),g.x(1),_.Oq(t)}}function N(t,e){if(1&t&&(c.Tg(0,"select",9)(1,"option",10),m._(2,"---"),c.qZ(),f.Y(3,L,2,2,"option",11),c.qZ()),2&t){const t=y.o();g.x(3),d.Q("ngForOf",t.scopes)}}class q{constructor(t,e){this.data=t,this.scopes=[],this.form=e.build(new p(t.properties)),this.scopes=t.scopeRegister.scopes}}q.ɵfac=function(t){return new(t||q)(v.Y(r.m),v.Y(u.p))},q.ɵcmp=C.Xp({type:q,selectors:[["relations-node-properties-editor"]],standalone:!0,features:[w._([u.p]),b.j],decls:15,vars:5,consts:[[1,"dynamic-form-group",3,"formGroup"],[1,"dynamic-control-label"],["type","text","formControlName","displayName",1,"dynamic-form-control"],["class","dynamic-form-control","type","text","formControlName","scope",3,"readonly",4,"ngIf"],["class","dynamic-form-control","formControlName","scope",4,"ngIf"],[1,"dynamic-flex-row","dynamic-flex-end","dynamic-margin-top-small"],["type","button",1,"dynamic-btn","dynamic-btn-info","dynamic-margin-right-extra-small",3,"mat-dialog-close"],["type","button",1,"dynamic-btn","dynamic-btn-primary",3,"mat-dialog-close"],["type","text","formControlName","scope",1,"dynamic-form-control",3,"readonly"],["formControlName","scope",1,"dynamic-form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(c.Tg(0,"div",0)(1,"label",1),m._(2,"display name"),c.qZ(),c._U(3,"input",2),c.Tg(4,"label",1),m._(5,"scope"),c.qZ(),f.Y(6,I,1,1,"input",3),f.Y(7,N,4,1,"select",4),c.qZ(),c.Tg(8,"div",5)(9,"button",6)(10,"span"),m._(11,"cancel"),c.qZ()(),c.Tg(12,"button",7)(13,"span"),m._(14,"ok"),c.qZ()()()),2&t&&(d.Q("formGroup",e.form),g.x(6),d.Q("ngIf",!e.data.scopeConfigurable),g.x(1),d.Q("ngIf",e.data.scopeConfigurable),g.x(2),d.Q("mat-dialog-close",null),g.x(3),d.Q("mat-dialog-close",e.form.value))},dependencies:[o.e,x.sg,D.O,l.I,M.ZT,a.U,R.YN,P.Kr,T.Fj,R.EJ,O.JJ,O.JL,E.s,Y.u],encapsulation:2,changeDetection:0});var A=i(73573);class S{transform(t){return t?(0,A.Wg)(t):null}}S.ɵfac=function(t){return new(t||S)},S.ɵpipe=C.Yj({name:"toColor",type:S,pure:!0,standalone:!0});var V=i(16056),k=i(73221),z=i(46170),H=i(4028),B=i(67550),j=i(91742),Q=i(41080),G=i(32247),Z=i(40131),U=i(97372);function F(t,e,i,o,n,s,a){try{var l=t[s](a),r=l.value}catch(t){return void i(t)}l.done?e(r):Promise.resolve(r).then(o,n)}function J(t,e){if(1&t&&(c.Tg(0,"span",5),k.AL(1,"toColor"),m._(2,"{}"),c.qZ()),2&t){const t=y.o();z.Ud("color",k.lc(1,3,null==t.parent||null==t.parent.metadata?null:t.parent.metadata.scope)),d.Q("tooltip",null==t.parent||null==t.parent.metadata?null:t.parent.metadata.scope)}}function X(t,e){if(1&t){const t=H.E();c.Tg(0,"button",6),B.N("click",(function(){j.CH(t);const e=y.o();return j.Kt(e.destroySubject.next())})),c._U(1,"span",7),c.qZ()}}class ${constructor(t,e,i,o){this.dialog=t,this.changeDetector=e,this.scopeRegister=i,this.history=o}editProperties(){var t,e=this;return(t=function*(){const t=yield(0,s.n)(e.dialog.open(q,{title:"edit properties",width:"30vw",data:{properties:{displayName:e.parent?.metadata?.displayName||e.name||e.parent?.metadata?.id||"",scope:e.parent?.metadata?.scope??""},scopeConfigurable:e.parent?.metadata?.nodeMetadata?.scopeConfigurable??!1,scopeRegister:e.scopeRegister}}).afterClosed());t&&e.parent?.metadata&&(e.parent.metadata.displayName=t.displayName??void 0,e.parent.metadata.scope=t.scope??void 0,e.history.getNewState(),e.changeDetector.detectChanges())},function(){var e=this,i=arguments;return new Promise((function(o,n){var s=t.apply(e,i);function a(t){F(s,o,n,a,l,"next",t)}function l(t){F(s,o,n,a,l,"throw",t)}a(void 0)}))})()}}$.ɵfac=function(t){return new(t||$)(v.Y(G.J),v.Y(Q.s),v.Y(Z.a),v.Y(V.nR))},$.ɵcmp=C.Xp({type:$,selectors:[["relations-node-header"]],inputs:{parent:"parent",destroySubject:"destroySubject",name:"name"},standalone:!0,features:[b.j],decls:6,vars:3,consts:[[1,"header-content"],["class","dynamic-margin-horizontal-extra-small dynamic-bold",3,"tooltip","color",4,"ngIf"],["type","button",1,"dynamic-btn-icon","edit-icon",3,"click"],[1,"fas","fa-pen"],["type","button","class","dynamic-btn-icon destroy-icon",3,"click",4,"ngIf"],[1,"dynamic-margin-horizontal-extra-small","dynamic-bold",3,"tooltip"],["type","button",1,"dynamic-btn-icon","destroy-icon",3,"click"],[1,"fas","fa-times"]],template:function(t,e){1&t&&(c.Tg(0,"div",0),m._(1),c.qZ(),f.Y(2,J,3,5,"span",1),c.Tg(3,"button",2),B.N("click",(function(){return e.editProperties()})),c._U(4,"span",3),c.qZ(),f.Y(5,X,2,0,"button",4)),2&t&&(g.x(1),_.Oq((null==e.parent||null==e.parent.metadata?null:e.parent.metadata.displayName)||e.name||(null==e.parent||null==e.parent.metadata?null:e.parent.metadata.id)),g.x(1),d.Q("ngIf",null==e.parent||null==e.parent.metadata?null:e.parent.metadata.scope),g.x(3),d.Q("ngIf",e.destroySubject))},dependencies:[o.e,D.O,n.z,U.i,S],encapsulation:2,changeDetection:0})},40433:(t,e,i)=>{i.d(e,{P:()=>d});var o=i(14015),n=i(44346),s=i(13780),a=i(31937),l=i(35767),r=i(12900),u=i(67550),h=i(99654),p=i(39238),c=i(10073);class d extends n.S{ngOnDestroy(){this._relation&&this._relation.destroy()}addRelation(t){if(this._relation){if(this._relation.start?.x===t.start?.x&&this._relation.start?.y===t.start?.y)return!1;this._relation.destroy()}return this._relation=t,!0}endRelation(t){this.addRelation(t)&&this.updateRelation()}updateRelation(){this._relation&&(this._relation.end=this.getCoordinates(),this._relation.input=this,this._relation.invalidateVisuals())}_onMouseEnter(t){t.buttons===s.t.LEFT&&this._relationManager.setActiveInput(this),this._relation?.highlight()}_onMouseLeave(t){t.buttons===s.t.LEFT&&this._relationManager.setActiveInput(null),this._relation?.cancelHighlight()}_onMouseDown(t){t.stopImmediatePropagation(),t.preventDefault(),this._lastMouseDownPosition={x:t.clientX,y:t.clientY},this._tempRelation=this._relation,this._relation=null,this._isDragging=!0}_onMouseMove(t){this._isDragging&&(t.stopImmediatePropagation(),t.preventDefault(),this._tempRelation&&(this._tempRelation.end={x:this.getCoordinates().x+1*(t.clientX-this._lastMouseDownPosition?.x)/this.zoomLevel,y:this.getCoordinates().y+1*(t.clientY-this._lastMouseDownPosition?.y)/this.zoomLevel},this._tempRelation.invalidateVisuals()))}_onMouseUp(t){this._isDragging&&(this._isDragging=!1,t.stopImmediatePropagation(),t.preventDefault(),this._tempRelation?.invalidateVisuals(a.r))}}d.ɵfac=function(){let t;return function(e){return(t||(t=l.n5(d)))(e||d)}}(),d.ɵcmp=r.Xp({type:d,selectors:[["relation-node-input"]],hostBindings:function(t,e){1&t&&u.N("mouseenter",(function(t){return e._onMouseEnter(t)}))("mouseleave",(function(t){return e._onMouseLeave(t)}))("mousedown",(function(t){return e._onMouseDown(t)}))("mousemove",(function(t){return e._onMouseMove(t)}),!1,h.Jf)("mouseup",(function(t){return e._onMouseUp(t)}),!1,h.Jf)},standalone:!0,features:[p.q,c.j],decls:0,vars:0,template:function(t,e){},dependencies:[o.e],encapsulation:2,changeDetection:0})},60541:(t,e,i)=>{i.d(e,{n:()=>c});var o=i(14015),n=i(44346),s=i(31937),a=i(35767),l=i(12900),r=i(67550),u=i(99654),h=i(39238),p=i(10073);class c extends n.S{constructor(){super(...arguments),this._relations=[]}get relations(){return this._relations}ngOnDestroy(){if(this._relations){const t=[...this._relations];for(const e of t)e.destroy()}}startRelation(){const t=this._canvas.createRelation();return t.start=this.getCoordinates(),t.output=this,t.destroying.subscribe((()=>{const e=this._relations.indexOf(t);e>=0&&this._relations.splice(e,1)})),this._relations.push(t),t}updateRelation(){if(this._relations)for(const t of this._relations)t.start=this.getCoordinates(),t.invalidateVisuals()}_onMouseDown(t){t.stopImmediatePropagation(),t.preventDefault(),this._isDragging=!0,this._lastMouseDownPosition={x:t.clientX,y:t.clientY},this._relation=this.startRelation()}_onMouseEnter(t){this._relations?.forEach((t=>t?.highlight()))}_onMouseLeave(t){this._relations?.forEach((t=>t?.cancelHighlight()))}_onMouseMove(t){this._isDragging&&(t.stopImmediatePropagation(),t.preventDefault(),this._relation&&(this._relation.end={x:this.getCoordinates().x+1*(t.clientX-this._lastMouseDownPosition.x)/this.zoomLevel,y:this.getCoordinates().y+1*(t.clientY-this._lastMouseDownPosition.y)/this.zoomLevel},this._relation.invalidateVisuals()))}_onMouseUp(t){this._isDragging&&(this._isDragging=!1,t.stopImmediatePropagation(),t.preventDefault(),this._relation?.invalidateVisuals(s.r))}}c.ɵfac=function(){let t;return function(e){return(t||(t=a.n5(c)))(e||c)}}(),c.ɵcmp=l.Xp({type:c,selectors:[["relation-node-output"]],hostBindings:function(t,e){1&t&&r.N("mousedown",(function(t){return e._onMouseDown(t)}))("mouseenter",(function(t){return e._onMouseEnter(t)}))("mouseleave",(function(t){return e._onMouseLeave(t)}))("mousemove",(function(t){return e._onMouseMove(t)}),!1,u.Jf)("mouseup",(function(t){return e._onMouseUp(t)}),!1,u.Jf)},standalone:!0,features:[h.q,p.j],decls:0,vars:0,template:function(t,e){},dependencies:[o.e],encapsulation:2,changeDetection:0})}}]);
//# sourceMappingURL=3729.client.chunk.42cc2e585d7fdcd7034f.js.map