/*! For license information please see 8342.client.chunk.593923b35e7edc3c512b.js.LICENSE.txt */
"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[8342],{34679:(t,o,n)=>{n.d(o,{O5:()=>h,zc:()=>f});var i=n(97610),e=n(81267),c=n(33484),a=n(48424),d=n(50880),s=n(25779),r=n(37654),m=n(13341),u=n(79175),l=n(52900);const b=[{selector:"mat-button",mdcClasses:["mdc-button","mat-mdc-button"]},{selector:"mat-flat-button",mdcClasses:["mdc-button","mdc-button--unelevated","mat-mdc-unelevated-button"]},{selector:"mat-raised-button",mdcClasses:["mdc-button","mdc-button--raised","mat-mdc-raised-button"]},{selector:"mat-stroked-button",mdcClasses:["mdc-button","mdc-button--outlined","mat-mdc-outlined-button"]},{selector:"mat-fab",mdcClasses:["mdc-fab","mat-mdc-fab"]},{selector:"mat-mini-fab",mdcClasses:["mdc-fab","mdc-fab--mini","mat-mdc-mini-fab"]},{selector:"mat-icon-button",mdcClasses:["mdc-icon-button","mat-mdc-icon-button"]}],p=(0,c.p)((0,a.I)((0,d.I)(class{constructor(t){this._elementRef=t}})));class h extends p{constructor(t,o,n,c){super(t),this._platform=o,this._ngZone=n,this._animationMode=c,this._focusMonitor=(0,e.f3)(i.tE),this._isFab=!1;const a=t.nativeElement.classList;for(const t of b)this._hasHostAttributes(t.selector)&&t.mdcClasses.forEach((t=>{a.add(t)}))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t="program",o){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,o):this._elementRef.nativeElement.focus(o)}_hasHostAttributes(...t){return t.some((t=>this._elementRef.nativeElement.hasAttribute(t)))}_isRippleDisabled(){return this.disableRipple||this.disabled}}h.ɵfac=function(t){r.$()},h.ɵdir=m.lG({type:h,viewQuery:function(t,o){if(1&t&&u.Gf(s.w,5),2&t){let t;u.iG(t=u.CR())&&(o.ripple=t.first)}},features:[l.q]});class f extends h{constructor(t,o,n,i){super(t,o,n,i),this._haltDisabledEvents=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}}ngOnInit(){this._ngZone.runOutsideAngular((()=>{this._elementRef.nativeElement.addEventListener("click",this._haltDisabledEvents)}))}ngOnDestroy(){super.ngOnDestroy(),this._elementRef.nativeElement.removeEventListener("click",this._haltDisabledEvents)}}f.ɵfac=function(t){r.$()},f.ɵdir=m.lG({type:f,features:[l.q]})},10785:(t,o,n)=>{n.d(o,{R:()=>v});var i=n(709),e=n(34679),c=n(37654),a=n(47948),d=n(18205),s=n(13341),r=n(42885),m=n(41169),u=n(52900),l=n(7633),b=n(57165),p=n(28588),h=n(5419),f=n(83495),g=n(25779);const _=["mat-icon-button",""],x=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]];class v extends e.O5{constructor(t,o,n,i){super(t,o,n,i)}}v.ɵfac=function(t){return new(t||v)(c.Y(a.SB),c.Y(f.t),c.Y(d.R),c.Y(i.Qb,8))},v.ɵcmp=s.Xp({type:v,selectors:[["button","mat-icon-button",""]],hostVars:7,hostBindings:function(t,o){2&t&&(r.u("disabled",o.disabled||null),m.ek("_mat-animation-noopable","NoopAnimations"===o._animationMode)("mat-unthemed",!o.color)("mat-mdc-button-base",!0))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[u.q],attrs:_,ngContentSelectors:["*"],decls:5,vars:3,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-focus-indicator"],["matRipple","",1,"mat-mdc-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){1&t&&(l.F$(),b._U(0,"span",0),l.Hs(1),b._U(2,"span",1)(3,"span",2)(4,"span",3)),2&t&&(p.x(3),h.Q("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0)("matRippleTrigger",o._elementRef.nativeElement))},dependencies:[g.w],styles:['.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{max-height:48px;max-width:48px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{height:var(--mdc-icon-button-state-layer-size, 48px);width:var(--mdc-icon-button-state-layer-size, 48px);color:var(--mdc-icon-button-icon-color, inherit);border-radius:50%;flex-shrink:0;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size, 24px)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size, 24px);height:var(--mdc-icon-button-icon-size, 24px)}.mat-mdc-icon-button:disabled{opacity:var(--mdc-icon-button-disabled-icon-opacity, 0.38)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color, #000)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled]{cursor:default;pointer-events:none;opacity:1}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0;background-color:var(--mat-mdc-button-persistent-ripple-color)}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-mdc-button-ripple-color)}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0});class y extends e.zc{constructor(t,o,n,i){super(t,o,n,i)}}y.ɵfac=function(t){return new(t||y)(c.Y(a.SB),c.Y(f.t),c.Y(d.R),c.Y(i.Qb,8))},y.ɵcmp=s.Xp({type:y,selectors:[["a","mat-icon-button",""]],hostVars:9,hostBindings:function(t,o){2&t&&(r.u("disabled",o.disabled||null)("tabindex",o.disabled?-1:o.tabIndex)("aria-disabled",o.disabled.toString()),m.ek("_mat-animation-noopable","NoopAnimations"===o._animationMode)("mat-unthemed",!o.color)("mat-mdc-button-base",!0))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matButton","matAnchor"],features:[u.q],attrs:_,ngContentSelectors:[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],decls:8,vars:6,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-focus-indicator"],["matRipple","",1,"mat-mdc-button-ripple",3,"matRippleDisabled","matRippleTrigger"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){1&t&&(l.F$(x),b._U(0,"span",0),l.Hs(1),b.Tg(2,"span",1),l.Hs(3,1),b.qZ(),l.Hs(4,2),b._U(5,"span",2)(6,"span",3)(7,"span",4)),2&t&&(m.ek("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),p.x(6),h.Q("matRippleDisabled",o._isRippleDisabled())("matRippleTrigger",o._elementRef.nativeElement))},dependencies:[g.w],styles:['.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{max-height:48px;max-width:48px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{height:var(--mdc-icon-button-state-layer-size, 48px);width:var(--mdc-icon-button-state-layer-size, 48px);color:var(--mdc-icon-button-icon-color, inherit);border-radius:50%;flex-shrink:0;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size, 24px)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size, 24px);height:var(--mdc-icon-button-icon-size, 24px)}.mat-mdc-icon-button:disabled{opacity:var(--mdc-icon-button-disabled-icon-opacity, 0.38)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color, #000)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled]{cursor:default;pointer-events:none;opacity:1}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0;background-color:var(--mat-mdc-button-persistent-ripple-color)}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-mdc-button-ripple-color)}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0})},54780:(t,o,n)=>{n.d(o,{o:()=>d});var i=n(72959),e=n(71761),c=n(13341),a=n(10012);class d{}d.ɵfac=function(t){return new(t||d)},d.ɵmod=c.oA({type:d}),d.ɵinj=a.cJ({imports:[i.BQ,e.si,i.BQ]})}}]);
//# sourceMappingURL=8342.client.chunk.593923b35e7edc3c512b.js.map