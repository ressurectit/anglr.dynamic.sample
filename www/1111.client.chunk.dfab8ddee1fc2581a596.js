"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[1111],{72369:(n,e,t)=>{t.d(e,{C:()=>h});var o=t(15950),i=t(905),r=t(4033),s=t(43816),a=t(30048),u=t(28393);function c(n,e,t,o,i,r,s){try{var a=n[r](s),u=a.value}catch(n){return void t(n)}a.done?e(u):Promise.resolve(u).then(o,i)}const l=function(){var n,e=(n=function*(){return new((yield Promise.all([t.e(213),t.e(3729),t.e(5199)]).then(t.bind(t,55199))).ComponentInputsRelationsEditorMetadata)},function(){var e=this,t=arguments;return new Promise((function(o,i){var r=n.apply(e,t);function s(n){c(r,o,i,s,a,"next",n)}function a(n){c(r,o,i,s,a,"throw",n)}s(void 0)}))});return function(){return e.apply(this,arguments)}}();function d(n,e,t,o,i,r,s){try{var a=n[r](s),u=a.value}catch(n){return void t(n)}a.done?e(u):Promise.resolve(u).then(o,i)}let h=class{constructor(n){this.injector=n,this.relationsProcessor=this.injector.get(r.v,null),this.componentManager=this.injector.get(s.s,null),this.id=""}ngOnChanges(n){for(const e of Object.keys(n)){const t=this;t[e]=n[e].currentValue,t[`${e}Change`]?.next?.()}}invalidateVisuals(){}ngOnDestroy(){this.id&&(this.relationsProcessor?.destroyComponent(this.id),this.componentManager?.unregisterComponent(this.id))}initInputs(n,e){var t,o=this;return(t=function*(){if(o.id=e,o.componentManager&&o.relationsProcessor){for(const e of n.relationsOptions?.inputs??[])Object.defineProperty(o,e.name,{value:e.defaultValue,writable:!0}),Object.defineProperty(o,`${e.name}Change`,{value:new u.x});o.componentManager.registerComponent(o.id,o),yield o.relationsProcessor.initialized,o.relationsProcessor.updateRelations(o.id)}},function(){var n=this,e=arguments;return new Promise((function(o,i){var r=t.apply(n,e);function s(n){d(r,o,i,s,a,"next",n)}function a(n){d(r,o,i,s,a,"throw",n)}s(void 0)}))})()}};h=(0,o.gn)([(0,a.i)(l),(0,o.w6)("design:paramtypes",[i.z])],h)},51111:(n,e,t)=>{t.r(e),t.d(e,{default:()=>o});const o=t(72369).C}}]);
//# sourceMappingURL=1111.client.chunk.dfab8ddee1fc2581a596.js.map