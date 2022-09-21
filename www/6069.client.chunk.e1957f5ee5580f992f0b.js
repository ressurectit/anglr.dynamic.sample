/*! For license information please see 6069.client.chunk.e1957f5ee5580f992f0b.js.LICENSE.txt */
"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[6069],{82450:(t,e,n)=>{n.d(e,{n:()=>a});var i=n(6070);function a(t,e){const n="object"==typeof e;return new Promise(((a,o)=>{let s,r=!1;t.subscribe({next:t=>{s=t,r=!0},error:o,complete:()=>{r?a(s):n?a(e.defaultValue):o(new i.K)}})}))}},39463:(t,e,n)=>{n.d(e,{ZT:()=>h});var i=n(86373),a=n(56274),o=n(2492),s=n(12900),r=n(67550),l=n(90102),c=n(11817),d=n(61337),u=n(46170),g=n(62957);let p=0;class h{constructor(t,e,n){this.dialogRef=t,this._elementRef=e,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=_(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){(0,i.R)(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}h.ɵfac=function(t){return new(t||h)(a.Y(i.s,8),a.Y(o.SB),a.Y(g.uw))},h.ɵdir=s.lG({type:h,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&r.N("click",(function(t){return e._onButtonClick(t)})),2&t&&l.u("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[c.T]});class f{constructor(t,e,n){this._dialogRef=t,this._elementRef=e,this._dialog=n,this.id="mat-dialog-title-"+p++}ngOnInit(){this._dialogRef||(this._dialogRef=_(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then((()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)}))}}f.ɵfac=function(t){return new(t||f)(a.Y(i.s,8),a.Y(o.SB),a.Y(g.uw))},f.ɵdir=s.lG({type:f,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(t,e){2&t&&d.I("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]});class m{}m.ɵfac=function(t){return new(t||m)},m.ɵdir=s.lG({type:m,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]});class y{constructor(){this.align="start"}}function _(t,e){let n=t.nativeElement.parentElement;for(;n&&!n.classList.contains("mat-dialog-container");)n=n.parentElement;return n?e.find((t=>t.id===n.id)):null}y.ɵfac=function(t){return new(t||y)},y.ɵdir=s.lG({type:y,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"],hostVars:4,hostBindings:function(t,e){2&t&&u.ek("mat-dialog-actions-align-center","center"===e.align)("mat-dialog-actions-align-end","end"===e.align)},inputs:{align:"align"}})},80169:(t,e,n)=>{n.r(e),n.d(e,{DataBlockLayoutEditorMetadata:()=>r});var i=n(1524),a=n(79157),o=n(69147);class s{constructor(t){this.template="",o.Rl.bind(this)(t)}}class r{constructor(){this.metaInfo={name:"Data block",description:"Data block - allows displaying data in template",group:"Data",optionsMetadata:{propertiesMetadata:[{modelType:s,propertiesControls:[(0,i.R)("template",a.d)]}]}},Object.freeze(this)}}},1524:(t,e,n)=>{n.d(e,{R:()=>D});var i=n(87601),a=n(26921),o=n(54285),s=n(82450),r=n(77817),l=n(56274),c=n(41080),d=n(12900),u=n(39238),g=n(10073),p=n(90090),h=n(67550),f=n(38662),m=n(5617),y=n(88912),_=n(35767),v=n(42388),b=n(32247);function w(t,e,n,i,a,o,s){try{var r=t[o](s),l=r.value}catch(t){return void n(t)}r.done?e(l):Promise.resolve(l).then(i,a)}class R extends r.k{constructor(t,e,n){super(t,e),this.dialog=n}showCodeEditor(){var t,e=this;return(t=function*(){if((0,o.fp)(e.property)||!e.languageModel)return;const t=yield(0,s.n)(e.dialog.open(a.I,{title:"Code editor",width:"75vw",height:"75vh",data:{content:e.form?.get(e.property)?.value??"",languageModel:e.languageModel}}).afterClosed());if((0,o.EN)(t)){const n=e.form?.get(e.property);n instanceof i.NI&&n.setValue(t.content)}},function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function s(t){w(o,i,a,s,r,"next",t)}function r(t){w(o,i,a,s,r,"throw",t)}s(void 0)}))})()}}function D(t,e){class n extends R{constructor(){super(...arguments),this.property=t,this.languageModel=e}}return n.ɵfac=function(){let t;return function(e){return(t||(t=_.n5(n)))(e||n)}}(),n.ɵcmp=d.Xp({type:n,selectors:[["code-properties-control"]],inputs:{property:"property",languageModel:"languageModel"},standalone:!0,features:[u.q,g.j],decls:3,vars:1,consts:[["type","button","type","button",1,"dynamic-btn","dynamic-btn-primary","dynamic-margin-vertical-small",3,"click"]],template:function(t,e){1&t&&(p.Tg(0,"button",0),h.N("click",(function(){return e.showCodeEditor()})),p.Tg(1,"span"),f._(2),p.qZ()()),2&t&&(m.x(2),y.hi("Edit ",e.property,""))},encapsulation:2,changeDetection:0}),n}R.ɵfac=function(t){return new(t||R)(l.Y(c.s),l.Y(v.T),l.Y(b.J))},R.ɵcmp=d.Xp({type:R,selectors:[["base-code-properties-control"]],inputs:{property:"property",languageModel:"languageModel"},standalone:!0,features:[u.q,g.j],decls:3,vars:1,consts:[["type","button","type","button",1,"dynamic-btn","dynamic-btn-primary","dynamic-margin-vertical-small",3,"click"]],template:function(t,e){1&t&&(p.Tg(0,"button",0),h.N("click",(function(){return e.showCodeEditor()})),p.Tg(1,"span"),f._(2),p.qZ()()),2&t&&(m.x(2),y.hi("Edit ",e.property,""))},encapsulation:2,changeDetection:0})},77817:(t,e,n)=>{n.d(e,{k:()=>c});var i=n(56274),a=n(41080),o=n(12900),s=n(42388);function r(t,e,n,i,a,o,s){try{var r=t[o](s),l=r.value}catch(t){return void n(t)}r.done?e(l):Promise.resolve(l).then(i,a)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,l,"next",t)}function l(t){r(o,i,a,s,l,"throw",t)}s(void 0)}))}}class c{constructor(t,e){this._changeDetector=t,this._extractor=e,this._initialized=!1,this.propertiesMetadata=null}ngOnInit(){var t=this;return l((function*(){t._initialized||(t._initialized=!0,yield t._initialize())}))()}initialize(){var t=this;return l((function*(){yield t.ngOnInit()}))()}invalidateVisuals(){this._changeDetector.detectChanges()}_initialize(){}}c.ɵfac=function(t){return new(t||c)(i.Y(a.s),i.Y(s.T))},c.ɵdir=o.lG({type:c,inputs:{form:"form",propertiesMetadata:"propertiesMetadata"}})},79157:(t,e,n)=>{n.d(e,{d:()=>i});const i=new(n(25052).y)("handlebars","hbs",(t=>t.getModel()?.getValue()??""))}}]);
//# sourceMappingURL=6069.client.chunk.e1957f5ee5580f992f0b.js.map