"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[4451],{44451:(t,n,i)=>{i.r(n),i.d(n,{default:()=>m,extensions:()=>y});var e=i(82382),o=i(15950),s=i(5027),r=i(49608);function a(t,n,i,e,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void i(t)}a.done?n(l):Promise.resolve(l).then(e,o)}const l=function(){var t,n=(t=function*(){return new((yield Promise.all([i.e(2099),i.e(9493),i.e(7691)]).then(i.bind(i,67691))).TextBlockLayoutEditorMetadata)},function(){var n=this,i=arguments;return new Promise((function(e,o){var s=t.apply(n,i);function r(t){a(s,e,o,r,l,"next",t)}function l(t){a(s,e,o,r,l,"throw",t)}r(void 0)}))});return function(){return n.apply(this,arguments)}}();var d=i(35767),c=i(12900),u=i(39238),h=i(10073),f=i(38662),g=i(88912);let p=class extends s.h{};p.ɵfac=function(){let t;return function(n){return(t||(t=d.n5(p)))(n||p)}}(),p.ɵcmp=c.Xp({type:p,selectors:[["text-block"]],standalone:!0,features:[u.q,h.j],decls:1,vars:1,template:function(t,n){if(1&t&&f._(0),2&t){let t;g.Oq(null!==(t=null==n.options?null:n.options.text)&&void 0!==t?t:"")}},styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),p=(0,o.gn)([(0,r.w)(l)],p);const m=p,y=[e.O]},49608:(t,n,i)=>{i.d(n,{w:()=>o});var e=i(56538);function o(t){return(0,e.R)(t,"layoutEditorMetadata")}},5027:(t,n,i)=>{i.d(n,{h:()=>g});var e=i(84432),o=i(71714),s=i(54285),r=i(56274),a=i(41080),l=i(2492),d=i(905),c=i(12900),u=i(11817);function h(t,n,i,e,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void i(t)}a.done?n(l):Promise.resolve(l).then(e,o)}function f(t){return function(){var n=this,i=arguments;return new Promise((function(e,o){var s=t.apply(n,i);function r(t){h(s,e,o,r,a,"next",t)}function a(t){h(s,e,o,r,a,"throw",t)}r(void 0)}))}}class g{constructor(t,n,i,e){this.changeDetector=t,this.componentElement=n,this.injector=i,this.logger=e,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const t of this.extensions)t.destroy();this.onDestroy()}}ngOnInit(){var t=this;return f((function*(){if(t.initialized)return;t.initialized=!0;const n=t.extensionsOptions;if(yield t.onInit(),yield t.onOptionsSet(),n)for(const n of t.extensions)yield n.initialize(t.injector,t.element,t);yield t.afterInit()}))()}ngOnChanges(t){var n=this;return f((function*(){if((0,o.$)("options")in t){yield n.onOptionsSet();const t=n.extensionsOptions;if(t)for(const i of n.extensions)yield i.optionsChange(t);if(!n.initialized)return;yield n.onOptionsChange()}delete t[(0,o.$)("options")],(0,s.Qr)(t)||n.onChanges(t)}))()}registerExtensions(t){this.extensions=t}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(t){}onOptionsSet(){}onDestroy(){}}g.ɵfac=function(t){return new(t||g)(r.Y(a.s),r.Y(l.SB),r.Y(d.z),r.Y(e.bZ,8))},g.ɵdir=c.lG({type:g,features:[u.T]})},82382:(t,n,i)=>{i.d(n,{O:()=>s});var e=i(71029),o=i(54285);class s extends e.z{onInit(){this._applyStyling()}onOptionsChange(){this._applyStyling()}_applyStyling(){const t=this.options,n=this.element?.nativeElement.style;if(this.element){if((0,o.EN)(this.lastCssClass))for(const t of this.lastCssClass.split(" "))t&&this.element.nativeElement.classList.remove(t);if(this.lastCssClass=t?.cssClass,t?.cssClass)for(const n of t.cssClass.split(" "))n&&this.element?.nativeElement.classList.add(n)}(0,o.EN)(n)&&(t?.margin&&((0,o.EN)(t.margin.bottom)&&(n.marginBottom=t.margin.bottom),(0,o.EN)(t.margin.right)&&(n.marginRight=t.margin.right),(0,o.EN)(t.margin.top)&&(n.marginTop=t.margin.top),(0,o.EN)(t.margin.left)&&(n.marginLeft=t.margin.left)),t?.padding&&((0,o.EN)(t.padding.bottom)&&(n.paddingBottom=t.padding.bottom),(0,o.EN)(t.padding.right)&&(n.paddingRight=t.padding.right),(0,o.EN)(t.padding.top)&&(n.paddingTop=t.padding.top),(0,o.EN)(t.padding.left)&&(n.paddingLeft=t.padding.left)),t?.textStyling&&((0,o.EN)(t.textStyling.fontSize)&&(n.fontSize=t.textStyling.fontSize),(0,o.EN)(t.textStyling.fontWeight)&&(n.fontWeight=t.textStyling.fontWeight.toString())))}}},56538:(t,n,i)=>{function e(t,n){return function(i){return i[n]=t(),i}}i.d(n,{R:()=>e})},71029:(t,n,i)=>{function e(t,n,i,e,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void i(t)}a.done?n(l):Promise.resolve(l).then(e,o)}function o(t){return function(){var n=this,i=arguments;return new Promise((function(o,s){var r=t.apply(n,i);function a(t){e(r,o,s,a,l,"next",t)}function l(t){e(r,o,s,a,l,"throw",t)}a(void 0)}))}}i.d(n,{z:()=>s});class s{constructor(t){this.metadata=t,this.initialized=!1}initialize(t,n,i){var e=this;return o((function*(){e.initialized=!0,e.injector=t,e.element=n,e.instance=i,yield e.onInit()}))()}optionsChange(t){var n=this;return o((function*(){n.options=t,n.initialized&&(yield n.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}}}]);
//# sourceMappingURL=4451.client.chunk.ba0d5eee4399329a0360.js.map