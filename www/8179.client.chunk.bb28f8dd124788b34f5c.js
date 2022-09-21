/*! For license information please see 8179.client.chunk.bb28f8dd124788b34f5c.js.LICENSE.txt */
"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[8179],{12129:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(10515);class o{constructor(){this._listeners=[]}notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter((t=>e!==t))}}ngOnDestroy(){this._listeners=[]}}o.ɵfac=function(e){return new(e||o)},o.ɵprov=i.Yz({token:o,factory:o.ɵfac,providedIn:"root"})},49608:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(56538);function o(e){return(0,i.R)(e,"layoutEditorMetadata")}},5027:(e,t,n)=>{n.d(t,{h:()=>m});var i=n(84432),o=n(71714),a=n(54285),s=n(56274),r=n(41080),d=n(2492),l=n(905),p=n(12900),c=n(11817);function h(e,t,n,i,o,a,s){try{var r=e[a](s),d=r.value}catch(e){return void n(e)}r.done?t(d):Promise.resolve(d).then(i,o)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function s(e){h(a,i,o,s,r,"next",e)}function r(e){h(a,i,o,s,r,"throw",e)}s(void 0)}))}}class m{constructor(e,t,n,i){this.changeDetector=e,this.componentElement=t,this.injector=n,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const e of this.extensions)e.destroy();this.onDestroy()}}ngOnInit(){var e=this;return g((function*(){if(e.initialized)return;e.initialized=!0;const t=e.extensionsOptions;if(yield e.onInit(),yield e.onOptionsSet(),t)for(const t of e.extensions)yield t.initialize(e.injector,e.element,e);yield e.afterInit()}))()}ngOnChanges(e){var t=this;return g((function*(){if((0,o.$)("options")in e){yield t.onOptionsSet();const e=t.extensionsOptions;if(e)for(const n of t.extensions)yield n.optionsChange(e);if(!t.initialized)return;yield t.onOptionsChange()}delete e[(0,o.$)("options")],(0,a.Qr)(e)||t.onChanges(e)}))()}registerExtensions(e){this.extensions=e}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(e){}onOptionsSet(){}onDestroy(){}}m.ɵfac=function(e){return new(e||m)(s.Y(r.s),s.Y(d.SB),s.Y(l.z),s.Y(i.bZ,8))},m.ɵdir=p.lG({type:m,features:[c.T]})},82382:(e,t,n)=>{n.d(t,{O:()=>a});var i=n(71029),o=n(54285);class a extends i.z{onInit(){this._applyStyling()}onOptionsChange(){this._applyStyling()}_applyStyling(){const e=this.options,t=this.element?.nativeElement.style;if(this.element){if((0,o.EN)(this.lastCssClass))for(const e of this.lastCssClass.split(" "))e&&this.element.nativeElement.classList.remove(e);if(this.lastCssClass=e?.cssClass,e?.cssClass)for(const t of e.cssClass.split(" "))t&&this.element?.nativeElement.classList.add(t)}(0,o.EN)(t)&&(e?.margin&&((0,o.EN)(e.margin.bottom)&&(t.marginBottom=e.margin.bottom),(0,o.EN)(e.margin.right)&&(t.marginRight=e.margin.right),(0,o.EN)(e.margin.top)&&(t.marginTop=e.margin.top),(0,o.EN)(e.margin.left)&&(t.marginLeft=e.margin.left)),e?.padding&&((0,o.EN)(e.padding.bottom)&&(t.paddingBottom=e.padding.bottom),(0,o.EN)(e.padding.right)&&(t.paddingRight=e.padding.right),(0,o.EN)(e.padding.top)&&(t.paddingTop=e.padding.top),(0,o.EN)(e.padding.left)&&(t.paddingLeft=e.padding.left)),e?.textStyling&&((0,o.EN)(e.textStyling.fontSize)&&(t.fontSize=e.textStyling.fontSize),(0,o.EN)(e.textStyling.fontWeight)&&(t.fontWeight=e.textStyling.fontWeight.toString())))}}},58179:(e,t,n)=>{n.r(t),n.d(t,{default:()=>He,extensions:()=>Ne});var i=n(82382),o=n(15950),a=n(12900),s=n(10515);class r{}r.ɵfac=function(e){return new(e||r)},r.ɵmod=a.oA({type:r}),r.ɵinj=s.cJ({});var d=n(75805),l=n(14015),p=n(70183);class c{}c.ɵfac=function(e){return new(e||c)},c.ɵmod=a.oA({type:c}),c.ɵinj=s.cJ({imports:[l.e,p.BQ,r,d.eL]});var h=n(5027),g=n(71422),m=n(49608);function u(e,t,n,i,o,a,s){try{var r=e[a](s),d=r.value}catch(e){return void n(e)}r.done?t(d):Promise.resolve(d).then(i,o)}const x=function(){var e,t=(e=function*(){return new((yield Promise.all([n.e(2099),n.e(9493),n.e(4692)]).then(n.bind(n,44692))).MaterialExpansionPanelLayoutEditorMetadata)},function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function s(e){u(a,i,o,s,r,"next",e)}function r(e){u(a,i,o,s,r,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();var f=n(97740),_=n(40486),b=n(5617),y=n(58138),v=n(35767),C=n(39238),w=n(10073),E=n(90090),A=n(38662),S=n(88912),O=n(20931),T=n(3322),P=n(64924),k=n(13556),I=n(28393),D=n(89285),Y=n(11817);let z=0;const H=new k.O("CdkAccordion");class N{constructor(){this._stateChanges=new I.x,this._openCloseAllActions=new I.x,this.id="cdk-accordion-"+z++,this._multi=!1}get multi(){return this._multi}set multi(e){this._multi=(0,P.I)(e)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}N.ɵfac=function(e){return new(e||N)},N.ɵdir=a.lG({type:N,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[D._([{provide:H,useExisting:N}]),Y.T]});var R=n(61496),M=n(56274),B=n(41080),q=n(12129);let Q=0;class L{constructor(e,t,n){this.accordion=e,this._changeDetectorRef=t,this._expansionDispatcher=n,this._openCloseAllSubscription=R.w0.EMPTY,this.closed=new T.v,this.opened=new T.v,this.destroyed=new T.v,this.expandedChange=new T.v,this.id="cdk-accordion-child-"+Q++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=n.listen(((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)})),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(e){if(e=(0,P.I)(e),this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();const e=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,e)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,P.I)(e)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe((e=>{this.disabled||(this.expanded=e)}))}}L.ɵfac=function(e){return new(e||L)(M.Y(H,12),M.Y(B.s),M.Y(q.A))},L.ɵdir=a.lG({type:L,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[D._([{provide:H,useValue:void 0}])]});var F=n(56982),G=n(85230),j=n(83253),V=n(76023),$=n(80033),U=n(38697),X=n(3137);const Z=new k.O("MAT_ACCORDION");var K=n(70421);const W="225ms cubic-bezier(0.4,0.0,0.2,1)",J={indicatorRotate:(0,K.X$)("indicatorRotate",[(0,K.SB)("collapsed, void",(0,K.oB)({transform:"rotate(0deg)"})),(0,K.SB)("expanded",(0,K.oB)({transform:"rotate(180deg)"})),(0,K.eR)("expanded <=> collapsed, void => collapsed",(0,K.jt)(W))]),bodyExpansion:(0,K.X$)("bodyExpansion",[(0,K.SB)("collapsed, void",(0,K.oB)({height:"0px",visibility:"hidden"})),(0,K.SB)("expanded",(0,K.oB)({height:"*",visibility:"visible"})),(0,K.eR)("expanded <=> collapsed, void => collapsed",(0,K.jt)(W))])},ee=new k.O("MAT_EXPANSION_PANEL");var te=n(7633);class ne{constructor(e,t){this._template=e,this._expansionPanel=t}}ne.ɵfac=function(e){return new(e||ne)(M.Y(te.Rg),M.Y(ee,8))},ne.ɵdir=a.lG({type:ne,selectors:[["ng-template","matExpansionPanelContent",""]]});var ie=n(20264),oe=n(8878),ae=n(46170),se=n(62139),re=n(67550),de=n(90102);const le=["body"];function pe(e,t){}const ce=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]];let he=0;const ge=new k.O("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");class me extends L{constructor(e,t,n,i,o,a,s){super(e,t,n),this._viewContainerRef=i,this._animationMode=a,this._hideToggle=!1,this.afterExpand=new T.v,this.afterCollapse=new T.v,this._inputChanges=new I.x,this._headerId="mat-expansion-panel-header-"+he++,this._bodyAnimationDone=new I.x,this.accordion=e,this._document=o,this._bodyAnimationDone.pipe((0,V.x)(((e,t)=>e.fromState===t.fromState&&e.toState===t.toState))).subscribe((e=>{"void"!==e.fromState&&("expanded"===e.toState?this.afterExpand.emit():"collapsed"===e.toState&&this.afterCollapse.emit())})),s&&(this.hideToggle=s.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=(0,P.I)(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,$.O)(null),(0,U.h)((()=>this.expanded&&!this._portal)),(0,X.q)(1)).subscribe((()=>{this._portal=new F.UE(this._lazyContent._template,this._viewContainerRef)}))}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}}me.ɵfac=function(e){return new(e||me)(M.Y(Z,12),M.Y(B.s),M.Y(q.A),M.Y(ie.s_),M.Y(G.K),M.Y(j.Qb,8),M.Y(ge,8))},me.ɵcmp=a.Xp({type:me,selectors:[["mat-expansion-panel"]],contentQueries:function(e,t,n){if(1&e&&oe.Su(n,ne,5),2&e){let e;oe.iG(e=oe.CR())&&(t._lazyContent=e.first)}},viewQuery:function(e,t){if(1&e&&oe.Gf(le,5),2&e){let e;oe.iG(e=oe.CR())&&(t._body=e.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,t){2&e&&ae.ek("mat-expanded",t.expanded)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-expansion-panel-spacing",t._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[D._([{provide:Z,useValue:void 0},{provide:ee,useExisting:me}]),C.q,Y.T],ngContentSelectors:["mat-expansion-panel-header","*","mat-action-row"],decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,t){1&e&&(se.F$(ce),se.Hs(0),E.Tg(1,"div",0,1),re.N("@bodyExpansion.done",(function(e){return t._bodyAnimationDone.next(e)})),E.Tg(3,"div",2),se.Hs(4,1),_.Y(5,pe,0,0,"ng-template",3),E.qZ(),se.Hs(6,2),E.qZ()),2&e&&(b.x(1),y.Q("@bodyExpansion",t._getExpandedState())("id",t.id),de.u("aria-labelledby",t._headerId),b.x(4),y.Q("cdkPortalOutlet",t._portal))},dependencies:[d.Pl],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[J.bodyExpansion]},changeDetection:0});class ue{}ue.ɵfac=function(e){return new(e||ue)},ue.ɵdir=a.lG({type:ue,selectors:[["mat-action-row"]],hostAttrs:[1,"mat-action-row"]});var xe=n(48293),fe=n(86655),_e=n(2701),be=n(15871),ye=n(22744),ve=n(14151),Ce=n(2492),we=n(87760),Ee=n(9596),Ae=n(77177);function Se(e,t){if(1&e&&E._U(0,"span",2),2&e){const e=ve.o();y.Q("@indicatorRotate",e._getExpandedState())}}const Oe=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Te=(0,_e.s)(class{});class Pe extends Te{constructor(e,t,n,i,o,a,s){super(),this.panel=e,this._element=t,this._focusMonitor=n,this._changeDetectorRef=i,this._animationMode=a,this._parentChangeSubscription=R.w0.EMPTY;const r=e.accordion?e.accordion._stateChanges.pipe((0,U.h)((e=>!(!e.hideToggle&&!e.togglePosition)))):be.E;this.tabIndex=parseInt(s||"")||0,this._parentChangeSubscription=(0,ye.T)(e.opened,e.closed,r,e._inputChanges.pipe((0,U.h)((e=>!!(e.hideToggle||e.disabled||e.togglePosition))))).subscribe((()=>this._changeDetectorRef.markForCheck())),e.closed.pipe((0,U.h)((()=>e._containsFocus()))).subscribe((()=>n.focusVia(t,"program"))),o&&(this.expandedHeight=o.expandedHeight,this.collapsedHeight=o.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case xe.L_:case xe.K5:(0,fe.V)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe((e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)}))}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}Pe.ɵfac=function(e){return new(e||Pe)(M.Y(me,1),M.Y(Ce.SB),M.Y(Ee.tE),M.Y(B.s),M.Y(ge,8),M.Y(j.Qb,8),we.$("tabindex"))},Pe.ɵcmp=a.Xp({type:Pe,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,t){1&e&&re.N("click",(function(){return t._toggle()}))("keydown",(function(e){return t._keydown(e)})),2&e&&(de.u("id",t.panel._headerId)("tabindex",t.tabIndex)("aria-controls",t._getPanelId())("aria-expanded",t._isExpanded())("aria-disabled",t.panel.disabled),ae.Ud("height",t._getHeaderHeight()),ae.ek("mat-expanded",t._isExpanded())("mat-expansion-toggle-indicator-after","after"===t._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===t._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[C.q],ngContentSelectors:["mat-panel-title","mat-panel-description","*"],decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,t){1&e&&(se.F$(Oe),E.Tg(0,"span",0),se.Hs(1),se.Hs(2,1),se.Hs(3,2),E.qZ(),_.Y(4,Se,1,1,"span",1)),2&e&&(ae.ek("mat-content-hide-toggle",!t._showToggle()),b.x(4),y.Q("ngIf",t._showToggle()))},dependencies:[Ae.O],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[J.indicatorRotate]},changeDetection:0});class ke{}ke.ɵfac=function(e){return new(e||ke)},ke.ɵdir=a.lG({type:ke,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]});class Ie{}function De(e,t){}function Ye(e,t){if(1&e&&(f.yn(0),_.Y(1,De,0,0,"ng-template",2),f.BQ()),2&e){const e=t.$implicit;b.x(1),y.Q("layoutComponentRenderer",e)}}Ie.ɵfac=function(e){return new(e||Ie)},Ie.ɵdir=a.lG({type:Ie,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]});let ze=class extends h.h{constructor(){super(...arguments),this.expanded=!0}onOptionsSet(){this.expanded=this.options?.expanded??!1,this.title=this.options?.title,this.description=this.options?.description}};ze.ɵfac=function(){let e;return function(t){return(e||(e=v.n5(ze)))(t||ze)}}(),ze.ɵcmp=a.Xp({type:ze,selectors:[["material-expansion-panel"]],inputs:{expanded:"expanded",title:"title",description:"description"},standalone:!0,features:[C.q,w.j],decls:7,vars:4,consts:[[3,"expanded"],[4,"ngFor","ngForOf"],[3,"layoutComponentRenderer"]],template:function(e,t){1&e&&(E.Tg(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),A._(3),E.qZ(),E.Tg(4,"mat-panel-description"),A._(5),E.qZ()(),_.Y(6,Ye,2,1,"ng-container",1),E.qZ()),2&e&&(y.Q("expanded",t.expanded),b.x(3),S.Oq(t.title),b.x(2),S.Oq(t.description),b.x(1),y.Q("ngForOf",null==t.options?null:t.options.children))},dependencies:[l.e,O.sg,c,me,Pe,Ie,ke,g.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),ze=(0,o.gn)([(0,m.w)(x)],ze);const He=ze,Ne=[i.O]},56538:(e,t,n)=>{function i(e,t){return function(n){return n[t]=e(),n}}n.d(t,{R:()=>i})},71029:(e,t,n)=>{function i(e,t,n,i,o,a,s){try{var r=e[a](s),d=r.value}catch(e){return void n(e)}r.done?t(d):Promise.resolve(d).then(i,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var s=e.apply(t,n);function r(e){i(s,o,a,r,d,"next",e)}function d(e){i(s,o,a,r,d,"throw",e)}r(void 0)}))}}n.d(t,{z:()=>a});class a{constructor(e){this.metadata=e,this.initialized=!1}initialize(e,t,n){var i=this;return o((function*(){i.initialized=!0,i.injector=e,i.element=t,i.instance=n,yield i.onInit()}))()}optionsChange(e){var t=this;return o((function*(){t.options=e,t.initialized&&(yield t.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=8179.client.chunk.bb28f8dd124788b34f5c.js.map