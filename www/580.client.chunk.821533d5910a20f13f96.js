"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[580],{82328:(t,e,n)=>{n.d(e,{j:()=>c});var o=n(87601),r=n(84432),a=n(54285),s=n(56274),i=n(12900);class c{constructor(t){this._logger=t}transform(t,e){return(0,a.fp)(t)?null:t instanceof o.NI?t:(this._logger?.warn("Failed to cast AbstractControl to FormControl"),null)}}c.ɵfac=function(t){return new(t||c)(s.Y(r.bZ,24))},c.ɵpipe=i.Yj({name:"asFormControl",type:c,pure:!0})},7431:(t,e,n)=>{n.r(e),n.d(e,{HtmlBlockLayoutEditorMetadata:()=>l});var o=n(58701),r=n(85464),a=n(1524);const s=new(n(25052).y)("html","html",(t=>t.getModel()?.getValue()??""));var i=n(69147);class c{constructor(t){this.content=null,i.Rl.bind(this)(t)}}class l{constructor(){this.metaInfo={name:"Html block",description:"Html block - displays html or string",group:"Data",optionsMetadata:{propertiesMetadata:[{modelType:o.k,propertiesControls:[r.e]},{modelType:c,propertiesControls:[(0,a.R)("content",s)]}]},defaultOptions:{content:"<div>This is your <strong>HTML</strong> block</div>"}},Object.freeze(this)}}},1524:(t,e,n)=>{n.d(e,{R:()=>C});var o=n(87601),r=n(26921),a=n(54285),s=n(82450),i=n(77817),c=n(56274),l=n(41080),u=n(12900),p=n(39238),d=n(10073),g=n(90090),m=n(67550),f=n(38662),y=n(5617),h=n(88912),v=n(35767),b=n(42388),k=n(32247);function w(t,e,n,o,r,a,s){try{var i=t[a](s),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(o,r)}class M extends i.k{constructor(t,e,n){super(t,e),this.dialog=n}showCodeEditor(){var t,e=this;return(t=function*(){if((0,a.fp)(e.property)||!e.languageModel)return;const t=yield(0,s.n)(e.dialog.open(r.I,{title:"Code editor",width:"75vw",height:"75vh",data:{content:e.form?.get(e.property)?.value??"",languageModel:e.languageModel}}).afterClosed());if((0,a.EN)(t)){const n=e.form?.get(e.property);n instanceof o.NI&&n.setValue(t.content)}},function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function s(t){w(a,o,r,s,i,"next",t)}function i(t){w(a,o,r,s,i,"throw",t)}s(void 0)}))})()}}function C(t,e){class n extends M{constructor(){super(...arguments),this.property=t,this.languageModel=e}}return n.ɵfac=function(){let t;return function(e){return(t||(t=v.n5(n)))(e||n)}}(),n.ɵcmp=u.Xp({type:n,selectors:[["code-properties-control"]],inputs:{property:"property",languageModel:"languageModel"},standalone:!0,features:[p.q,d.j],decls:3,vars:1,consts:[["type","button","type","button",1,"dynamic-btn","dynamic-btn-primary","dynamic-margin-vertical-small",3,"click"]],template:function(t,e){1&t&&(g.Tg(0,"button",0),m.N("click",(function(){return e.showCodeEditor()})),g.Tg(1,"span"),f._(2),g.qZ()()),2&t&&(y.x(2),h.hi("Edit ",e.property,""))},encapsulation:2,changeDetection:0}),n}M.ɵfac=function(t){return new(t||M)(c.Y(l.s),c.Y(b.T),c.Y(k.J))},M.ɵcmp=u.Xp({type:M,selectors:[["base-code-properties-control"]],inputs:{property:"property",languageModel:"languageModel"},standalone:!0,features:[p.q,d.j],decls:3,vars:1,consts:[["type","button","type","button",1,"dynamic-btn","dynamic-btn-primary","dynamic-margin-vertical-small",3,"click"]],template:function(t,e){1&t&&(g.Tg(0,"button",0),m.N("click",(function(){return e.showCodeEditor()})),g.Tg(1,"span"),f._(2),g.qZ()()),2&t&&(y.x(2),h.hi("Edit ",e.property,""))},encapsulation:2,changeDetection:0})}}]);
//# sourceMappingURL=580.client.chunk.821533d5910a20f13f96.js.map