"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[9850],{95188:(n,t,e)=>{e.d(t,{W:()=>p});var o=e(15950),i=e(905),r=e(4033),s=e(43816),a=e(30048),u=e(28393);function c(n,t,e,o,i,r,s){try{var a=n[r](s),u=a.value}catch(n){return void e(n)}a.done?t(u):Promise.resolve(u).then(o,i)}const l=function(){var n,t=(n=function*(){return new((yield Promise.all([e.e(213),e.e(3729),e.e(9695)]).then(e.bind(e,29695))).ComponentOutputsRelationsEditorMetadata)},function(){var t=this,e=arguments;return new Promise((function(o,i){var r=n.apply(t,e);function s(n){c(r,o,i,s,a,"next",n)}function a(n){c(r,o,i,s,a,"throw",n)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();function d(n,t,e,o,i,r,s){try{var a=n[r](s),u=a.value}catch(n){return void e(n)}a.done?t(u):Promise.resolve(u).then(o,i)}let p=class{constructor(n){this.injector=n,this.relationsProcessor=this.injector.get(r.v,null),this.componentManager=this.injector.get(s.s,null),this.id=""}ngOnChanges(n){for(const t of Object.keys(n))this.customComponent[t]=n[t].currentValue,this.customComponent[`${t}Change`]?.next?.()}invalidateVisuals(){}ngOnDestroy(){this.id&&(this.relationsProcessor?.destroyComponent(this.id),this.componentManager?.unregisterComponent(this.id))}initOutputs(n,t,e){var o,i=this;return(o=function*(){if(i.id=t,i.customComponent=e,i.componentManager&&i.relationsProcessor){for(const t of n.relationsOptions?.outputs??[])Object.defineProperty(i.customComponent,t.name,{value:t.defaultValue,writable:!0}),Object.defineProperty(i.customComponent,`${t.name}Change`,{value:new u.x});i.componentManager.registerComponent(i.id,i),yield i.relationsProcessor.initialized,i.relationsProcessor.updateRelations(i.id)}},function(){var n=this,t=arguments;return new Promise((function(e,i){var r=o.apply(n,t);function s(n){d(r,e,i,s,a,"next",n)}function a(n){d(r,e,i,s,a,"throw",n)}s(void 0)}))})()}};p=(0,o.gn)([(0,a.i)(l),(0,o.w6)("design:paramtypes",[i.z])],p)},19850:(n,t,e)=>{e.r(t),e.d(t,{default:()=>o});const o=e(95188).W}}]);
//# sourceMappingURL=9850.client.chunk.c540ca3fdc4ccbe72ae0.js.map