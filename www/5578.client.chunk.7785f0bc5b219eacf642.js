"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[5578],{15578:(t,n,i)=>{i.r(n),i.d(n,{default:()=>z,extensions:()=>N});var e=i(60583),o=i(14392),s=i(12405),r=i(34987),a=i(10431),l=i(36482),c=i(15523),d=i(13816);function p(t,n,i,e,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void i(t)}a.done?n(l):Promise.resolve(l).then(e,o)}const h=function(){var t,n=(t=function*(){return new((yield i.e(7519).then(i.bind(i,87519))).GridPanelLayoutEditorMetadata)},function(){var n=this,i=arguments;return new Promise((function(e,o){var s=t.apply(n,i);function r(t){p(s,e,o,r,a,"next",t)}function a(t){p(s,e,o,r,a,"throw",t)}r(void 0)}))});return function(){return n.apply(this,arguments)}}();var g=i(46410),f=i(83210),u=i(28588),m=i(5419),y=i(46936),v=i(13341),C=i(52900),E=i(94128),x=i(15704);function w(t,n){}function S(t,n){if(1&t&&(g.yn(0),f.Y(1,w,0,0,"ng-template",1),g.BQ()),2&t){const t=n.$implicit;u.x(1),m.Q("layoutComponentRenderer",t)}}let O=class extends r.h{onOptionsSet(){this._fixCells();const t=this.componentElement.nativeElement.style;let n="",i="";if(this.options?.rows&&Array.isArray(this.options?.rows))for(const t of this.options.rows)n+=`${t.height} `;if(this.options?.columns&&Array.isArray(this.options?.columns))for(const t of this.options.columns)i+=`${t.width} `;t.gridTemplateRows=n.trim(),t.gridTemplateColumns=i.trim()}_fixCells(){var t;if(!this.options)return;(t=this.options).cells??(t.cells=[]);const n=[];for(let t=0;t<(this.options.rows??[]).length;t++)for(let i=0;i<(this.options.columns??[]).length;i++)n[t]??(n[t]=[]),n[t][i]="";for(const t of this.options.cells){t.package="basic-components",t.name="gridPanelCell";for(let i=t.options?.gridRowStart??1;i<(t.options?.gridRowEnd??2);i++)for(let e=t.options?.gridColumnStart??1;e<(t.options?.gridColumnEnd??2);e++){const o=i-1,s=e-1;""===n[o][s]&&(n[o][s]=t.id)}}for(let t=1;t<=(this.options.rows??[]).length;t++)for(let i=1;i<=(this.options.columns??[]).length;i++)""===n[t-1][i-1]&&this.options.cells.push({id:`${(0,d.Ox)(6)}-r${t}-${t+1}-c${i}-${i+1}`,package:"basic-components",name:"gridPanelCell",options:{gridRowStart:t,gridRowEnd:t+1,gridColumnStart:i,gridColumnEnd:i+1}})}};O.ɵfac=function(){let t;return function(n){return(t||(t=y.n5(O)))(n||O)}}(),O.ɵcmp=v.Xp({type:O,selectors:[["grid-panel"]],standalone:!0,features:[C.q,E.j],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"layoutComponentRenderer"]],template:function(t,n){1&t&&f.Y(0,S,2,1,"ng-container",0),2&t&&m.Q("ngForOf",null==n.options?null:n.options.cells)},dependencies:[s.e,x.sg,a.i],encapsulation:2,changeDetection:0}),O=(0,o.gn)([(0,l.T)((t=>t?.cells??[])),(0,c.w)(h)],O);const z=O,N=[e.O]},15523:(t,n,i)=>{i.d(n,{w:()=>o});var e=i(32501);function o(t){return(0,e.R)(t,"layoutEditorMetadata")}},34987:(t,n,i)=>{i.d(n,{h:()=>f});var e=i(12987),o=i(34955),s=i(55163),r=i(37654),a=i(66382),l=i(47948),c=i(97873),d=i(13341),p=i(92927);function h(t,n,i,e,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void i(t)}a.done?n(l):Promise.resolve(l).then(e,o)}function g(t){return function(){var n=this,i=arguments;return new Promise((function(e,o){var s=t.apply(n,i);function r(t){h(s,e,o,r,a,"next",t)}function a(t){h(s,e,o,r,a,"throw",t)}r(void 0)}))}}class f{get element(){return this.componentElement}get extensionsOptions(){return this.options}constructor(t,n,i,e){this.changeDetector=t,this.componentElement=n,this.injector=i,this.logger=e,this.extensions=[],this.initialized=!1,this.destroyed=!1}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const t of this.extensions)t.destroy();this.onDestroy()}}ngOnInit(){var t=this;return g((function*(){if(t.initialized)return;t.initialized=!0;const n=t.extensionsOptions;if(yield t.onInit(),yield t.onOptionsSet(),n)for(const n of t.extensions)yield n.initialize(t.injector,t.element,t);yield t.afterInit()}))()}ngOnChanges(t){var n=this;return g((function*(){if((0,o.$)("options")in t){yield n.onOptionsSet();const t=n.extensionsOptions;if(t)for(const i of n.extensions)yield i.optionsChange(t);if(!n.initialized)return;yield n.onOptionsChange()}delete t[(0,o.$)("options")],(0,s.Qr)(t)||n.onChanges(t)}))()}registerExtensions(t){this.extensions=t}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(t){}onOptionsSet(){}onDestroy(){}}f.ɵfac=function(t){return new(t||f)(r.Y(a.s),r.Y(l.SB),r.Y(c.z),r.Y(e.bZ,8))},f.ɵdir=d.lG({type:f,features:[p.T]})},60583:(t,n,i)=>{i.d(n,{O:()=>s});var e=i(67793),o=i(55163);class s extends e.z{onInit(){this._applyStyling()}onOptionsChange(){this._applyStyling()}_applyStyling(){const t=this.options,n=this.element?.nativeElement.style;if(this.element){if((0,o.EN)(this.lastCssClass))for(const t of this.lastCssClass.split(" "))t&&this.element.nativeElement.classList.remove(t);if(this.lastCssClass=t?.cssClass,t?.cssClass)for(const n of t.cssClass.split(" "))n&&this.element?.nativeElement.classList.add(n)}(0,o.EN)(n)&&(t?.margin&&((0,o.EN)(t.margin.bottom)&&(n.marginBottom=t.margin.bottom),(0,o.EN)(t.margin.right)&&(n.marginRight=t.margin.right),(0,o.EN)(t.margin.top)&&(n.marginTop=t.margin.top),(0,o.EN)(t.margin.left)&&(n.marginLeft=t.margin.left)),t?.padding&&((0,o.EN)(t.padding.bottom)&&(n.paddingBottom=t.padding.bottom),(0,o.EN)(t.padding.right)&&(n.paddingRight=t.padding.right),(0,o.EN)(t.padding.top)&&(n.paddingTop=t.padding.top),(0,o.EN)(t.padding.left)&&(n.paddingLeft=t.padding.left)),t?.textStyling&&((0,o.EN)(t.textStyling.fontSize)&&(n.fontSize=t.textStyling.fontSize),(0,o.EN)(t.textStyling.fontWeight)&&(n.fontWeight=t.textStyling.fontWeight.toString())))}}},67793:(t,n,i)=>{function e(t,n,i,e,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void i(t)}a.done?n(l):Promise.resolve(l).then(e,o)}function o(t){return function(){var n=this,i=arguments;return new Promise((function(o,s){var r=t.apply(n,i);function a(t){e(r,o,s,a,l,"next",t)}function l(t){e(r,o,s,a,l,"throw",t)}a(void 0)}))}}i.d(n,{z:()=>s});class s{constructor(t){this.metadata=t,this.initialized=!1}initialize(t,n,i){var e=this;return o((function*(){e.initialized=!0,e.injector=t,e.element=n,e.instance=i,yield e.onInit()}))()}optionsChange(t){var n=this;return o((function*(){n.options=t,n.initialized&&(yield n.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=5578.client.chunk.7785f0bc5b219eacf642.js.map