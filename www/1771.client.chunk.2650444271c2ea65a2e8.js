"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[1771],{21771:(t,e,n)=>{n.r(e),n.d(e,{DefaultModule:()=>U});var r=n(14392),o=n(82494),i=n(66382),a=n(16968),s=n(18579),c=n(89270),u=n(18508),l=n(34992),f=n(76986),g=n(12987),h=n(95161),m=n(40853),p=n(12890),d=n(50478),_=n(87859),b=n(5419),v=n(28588),A=n(4149),P=n(37654),q=n(13341),x=n(41169),y=n(83210),E=n(27805),w=n(74246),G=n(60491),Q=n(86039),B=n(33250),L=n(58433),Y=n(49308),N=n(48215),O=n(97503),Z=n(61105);function k(t,e){1&t&&(p.Tg(0,"div",12),d._(1),_.AL(2,"translate"),p.qZ()),2&t&&(b.Q("@slideInOut",void 0),v.x(1),A.hi(" ",_.lc(2,2,"Authentication failed! Please check your credentials and try again.")," "))}let C=class{constructor(t,e,n,r,o,i){this._authService=t,this._router=e,this._activeRoute=n,this._changeDetector=r,this._logger=o,this.authenticationError=!1,this.form=i.group({userName:null,password:null,rememberMe:null})}login(){this._authService.login(this.form.value).pipe((0,m.K)((t=>(this._logger.error(`Failed to log in '${t}'`),this.authenticationError=!0,this._changeDetector.detectChanges(),h.E)))).subscribe((()=>{this.authenticationError=!1,this._changeDetector.detectChanges(),this._activeRoute.snapshot.queryParams.returnUrl?this._router.navigateByUrl(this._activeRoute.snapshot.queryParams.returnUrl):this._router.navigate(["/"])}))}};C.ɵfac=function(t){return new(t||C)(P.Y(l.$),P.Y(a.F0),P.Y(s.gz),P.Y(i.s),P.Y(g.bZ),P.Y(c.qu))},C.ɵcmp=q.Xp({type:C,selectors:[["login-view"]],hostVars:2,hostBindings:function(t,e){2&t&&x.ek("justify-content-center",!0)},decls:26,vars:23,consts:[[1,"align-self-center"],[1,"text-uppercase","text-center"],["class","alert alert-danger",4,"ngIf"],["role","form",1,"form",3,"formGroup","submit"],[1,"form-group"],["for","username"],["type","text","id","username","formControlName","userName",1,"form-control",3,"placeholder"],["for","password"],["type","password","id","password","formControlName","password",1,"form-control",3,"placeholder"],["for","rememberme"],["type","checkbox","id","rememberme","formControlName","rememberMe"],["type","submit",1,"btn","btn-primary"],[1,"alert","alert-danger"]],template:function(t,e){1&t&&(p.Tg(0,"div",0)(1,"h1",1),d._(2),_.AL(3,"translate"),p.qZ(),y.Y(4,k,3,4,"div",2),p.Tg(5,"form",3),E.N("submit",(function(){return e.login()})),p.Tg(6,"div",4)(7,"label",5),d._(8),_.AL(9,"translate"),p.qZ(),p._U(10,"input",6),_.AL(11,"translate"),p.qZ(),p.Tg(12,"div",4)(13,"label",7),d._(14),_.AL(15,"translate"),p.qZ(),p._U(16,"input",8),_.AL(17,"translate"),p.qZ(),p.Tg(18,"div",4)(19,"label",9),d._(20),_.AL(21,"translate"),p._U(22,"input",10),p.qZ()(),p.Tg(23,"button",11),d._(24),_.AL(25,"translate"),p.qZ()()()),2&t&&(v.x(2),A.Oq(_.lc(3,9,"gui")),v.x(2),b.Q("ngIf",e.authenticationError),v.x(1),b.Q("formGroup",e.form),v.x(3),A.Oq(_.lc(9,11,"Login")),v.x(2),w.s9("placeholder",_.lc(11,13,"Your login")),v.x(4),A.Oq(_.lc(15,15,"Password")),v.x(2),w.s9("placeholder",_.lc(17,17,"Your password")),v.x(4),A.hi("",_.lc(21,19,"Remember me")," "),v.x(4),A.Oq(_.lc(25,21,"Authenticate")))},dependencies:[O.O,G._,Q.Fj,B.W,L.JJ,L.JL,Y.s,N.u,Z.X],encapsulation:2,data:{animation:[f.x]},changeDetection:0}),C=(0,r.gn)([(0,u.N)({path:"login",data:{animation:"login"}}),(0,r.w6)("design:paramtypes",[l.$,a.F0,s.gz,i.s,Object,c.qu])],C);const T=[C];var j=n(42983),D=n(10012);let U=class{};U.ɵfac=function(t){return new(t||U)},U.ɵmod=q.oA({type:U}),U.ɵinj=D.cJ({imports:[j._J,j.No,j.nP]}),U=(0,r.gn)([(0,o.P)(T)],U)},18508:(t,e,n)=>{n.d(e,{N:()=>o});var r=n(55163);function o(t){return function(e){const n=t;n.component=e;const o=e;return(0,r.fp)(o.routeValues)&&Object.defineProperty(e,"routeValues",{enumerable:!0,configurable:!1,writable:!1,value:[]}),o.routeValues.push(n),e}}},74246:(t,e,n)=>{n.d(e,{D:()=>d,FA:()=>g,H6:()=>_,MG:()=>u,XO:()=>h,bR:()=>p,cQ:()=>f,hY:()=>l,pb:()=>m,s9:()=>c});var r=n(11314),o=n(63289),i=n(27304),a=n(6784),s=n(80961);function c(t,e,n){return u(t,"",e,"",n),c}function u(t,e,n,c,l){const f=(0,o.QE)(),g=(0,a.Ai)(f,e,n,c);if(g!==i.l){const e=(0,o.GP)(),n=(0,o.A3)();(0,s.ig)(e,n,f,t,g,f[r._B],l,!1)}return u}function l(t,e,n,c,u,f,g){const h=(0,o.QE)(),m=(0,a.SP)(h,e,n,c,u,f);if(m!==i.l){const e=(0,o.GP)(),n=(0,o.A3)();(0,s.ig)(e,n,h,t,m,h[r._B],g,!1)}return l}function f(t,e,n,c,u,l,g,h,m){const p=(0,o.QE)(),d=(0,a.ab)(p,e,n,c,u,l,g,h);if(d!==i.l){const e=(0,o.GP)(),n=(0,o.A3)();(0,s.ig)(e,n,p,t,d,p[r._B],m,!1)}return f}function g(t,e,n,c,u,l,f,h,m,p,d){const _=(0,o.QE)(),b=(0,a.Kj)(_,e,n,c,u,l,f,h,m,p);if(b!==i.l){const e=(0,o.GP)(),n=(0,o.A3)();(0,s.ig)(e,n,_,t,b,_[r._B],d,!1)}return g}function h(t,e,n,c,u,l,f,g,m,p,d,_,b){const v=(0,o.QE)(),A=(0,a.EM)(v,e,n,c,u,l,f,g,m,p,d,_);if(A!==i.l){const e=(0,o.GP)(),n=(0,o.A3)();(0,s.ig)(e,n,v,t,A,v[r._B],b,!1)}return h}function m(t,e,n,c,u,l,f,g,h,p,d,_,b,v,A){const P=(0,o.QE)(),q=(0,a.IA)(P,e,n,c,u,l,f,g,h,p,d,_,b,v);if(q!==i.l){const e=(0,o.GP)(),n=(0,o.A3)();(0,s.ig)(e,n,P,t,q,P[r._B],A,!1)}return m}function p(t,e,n,c,u,l,f,g,h,m,d,_,b,v,A,P,q){const x=(0,o.QE)(),y=(0,a.tx)(x,e,n,c,u,l,f,g,h,m,d,_,b,v,A,P);if(y!==i.l){const e=(0,o.GP)(),n=(0,o.A3)();(0,s.ig)(e,n,x,t,y,x[r._B],q,!1)}return p}function d(t,e,n,c,u,l,f,g,h,m,p,_,b,v,A,P,q,x,y){const E=(0,o.QE)(),w=(0,a._V)(E,e,n,c,u,l,f,g,h,m,p,_,b,v,A,P,q,x);if(w!==i.l){const e=(0,o.GP)(),n=(0,o.A3)();(0,s.ig)(e,n,E,t,w,E[r._B],y,!1)}return d}function _(t,e,n){const c=(0,o.QE)(),u=(0,a.uG)(c,e);if(u!==i.l){const e=(0,o.GP)(),i=(0,o.A3)();(0,s.ig)(e,i,c,t,u,c[r._B],n,!1)}return _}}}]);
//# sourceMappingURL=1771.client.chunk.2650444271c2ea65a2e8.js.map