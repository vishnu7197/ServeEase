"use strict";(self.webpackChunkvehicle_servicing_app=self.webpackChunkvehicle_servicing_app||[]).push([[461],{6935:()=>{const ie=globalThis;function ce(e){return(ie.__Zone_symbol_prefix||"__zone_symbol__")+e}const ke=Object.getOwnPropertyDescriptor,st=Object.defineProperty,Fe=Object.getPrototypeOf,wt=Object.create,dt=Array.prototype.slice,We="addEventListener",qe="removeEventListener",Xe=ce(We),Ye=ce(qe),Ee="true",he="false",Le=ce("");function Ze(e,r){return Zone.current.wrap(e,r)}function $e(e,r,u,t,a){return Zone.current.scheduleMacroTask(e,r,u,t,a)}const z=ce,Me=typeof window<"u",ve=Me?window:void 0,q=Me&&ve||globalThis;function Ae(e,r){for(let u=e.length-1;u>=0;u--)"function"==typeof e[u]&&(e[u]=Ze(e[u],r+"_"+u));return e}function Ke(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const it=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,He=!("nw"in q)&&typeof q.process<"u"&&"[object process]"===q.process.toString(),Je=!He&&!it&&!(!Me||!ve.HTMLElement),ct=typeof q.process<"u"&&"[object process]"===q.process.toString()&&!it&&!(!Me||!ve.HTMLElement),je={},Tt=z("enable_beforeunload"),Qe=function(e){if(!(e=e||q.event))return;let r=je[e.type];r||(r=je[e.type]=z("ON_PROPERTY"+e.type));const u=this||e.target||q,t=u[r];let a;return Je&&u===ve&&"error"===e.type?(a=t&&t.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===a&&e.preventDefault()):(a=t&&t.apply(this,arguments),"beforeunload"===e.type&&q[Tt]&&"string"==typeof a?e.returnValue=a:null!=a&&!a&&e.preventDefault()),a};function at(e,r,u){let t=ke(e,r);if(!t&&u&&ke(u,r)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;const a=z("on"+r+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete t.writable,delete t.value;const _=t.get,y=t.set,k=r.slice(2);let R=je[k];R||(R=je[k]=z("ON_PROPERTY"+k)),t.set=function(M){let E=this;!E&&e===q&&(E=q),E&&("function"==typeof E[R]&&E.removeEventListener(k,Qe),y&&y.call(E,null),E[R]=M,"function"==typeof M&&E.addEventListener(k,Qe,!1))},t.get=function(){let M=this;if(!M&&e===q&&(M=q),!M)return null;const E=M[R];if(E)return E;if(_){let O=_.call(this);if(O)return t.set.call(this,O),"function"==typeof M.removeAttribute&&M.removeAttribute(r),O}return null},st(e,r,t),e[a]=!0}function Et(e,r,u){if(r)for(let t=0;t<r.length;t++)at(e,"on"+r[t],u);else{const t=[];for(const a in e)"on"==a.slice(0,2)&&t.push(a);for(let a=0;a<t.length;a++)at(e,t[a],u)}}const _e=z("originalInstance");function xe(e){const r=q[e];if(!r)return;q[z(e)]=r,q[e]=function(){const a=Ae(arguments,e);switch(a.length){case 0:this[_e]=new r;break;case 1:this[_e]=new r(a[0]);break;case 2:this[_e]=new r(a[0],a[1]);break;case 3:this[_e]=new r(a[0],a[1],a[2]);break;case 4:this[_e]=new r(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},Te(q[e],r);const u=new r(function(){});let t;for(t in u)"XMLHttpRequest"===e&&"responseBlob"===t||function(a){"function"==typeof u[a]?q[e].prototype[a]=function(){return this[_e][a].apply(this[_e],arguments)}:st(q[e].prototype,a,{set:function(_){"function"==typeof _?(this[_e][a]=Ze(_,e+"."+a),Te(this[_e][a],_)):this[_e][a]=_},get:function(){return this[_e][a]}})}(t);for(t in r)"prototype"!==t&&r.hasOwnProperty(t)&&(q[e][t]=r[t])}function be(e,r,u){let t=e;for(;t&&!t.hasOwnProperty(r);)t=Fe(t);!t&&e[r]&&(t=e);const a=z(r);let _=null;if(t&&(!(_=t[a])||!t.hasOwnProperty(a))&&(_=t[a]=t[r],Ke(t&&ke(t,r)))){const k=u(_,a,r);t[r]=function(){return k(this,arguments)},Te(t[r],_)}return _}function lt(e,r,u){let t=null;function a(_){const y=_.data;return y.args[y.cbIdx]=function(){_.invoke.apply(this,arguments)},t.apply(y.target,y.args),_}t=be(e,r,_=>function(y,k){const R=u(y,k);return R.cbIdx>=0&&"function"==typeof k[R.cbIdx]?$e(R.name,k[R.cbIdx],R,a):_.apply(y,k)})}function Te(e,r){e[z("OriginalDelegate")]=r}let mt=!1,ut=!1;function et(){if(mt)return ut;mt=!0;try{const e=ve.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(ut=!0)}catch{}return ut}function ft(e){return"function"==typeof e}function tt(e){return"number"==typeof e}let o=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{o=!1}const i={useG:!0},l={},f={},p=new RegExp("^"+Le+"(\\w+)(true|false)$"),w=z("propagationStopped");function ae(e,r){const u=(r?r(e):e)+he,t=(r?r(e):e)+Ee,a=Le+u,_=Le+t;l[e]={},l[e][he]=a,l[e][Ee]=_}function X(e,r,u,t){const a=t&&t.add||We,_=t&&t.rm||qe,y=t&&t.listeners||"eventListeners",k=t&&t.rmAll||"removeAllListeners",R=z(a),M="."+a+":",E="prependListener",O="."+E+":",B=function(S,T,V){if(S.isRemoved)return;const W=S.callback;let se;"object"==typeof W&&W.handleEvent&&(S.callback=v=>W.handleEvent(v),S.originalDelegate=W);try{S.invoke(S,T,[V])}catch(v){se=v}const Y=S.options;return Y&&"object"==typeof Y&&Y.once&&T[_].call(T,V.type,S.originalDelegate?S.originalDelegate:S.callback,Y),se};function F(S,T,V){if(!(T=T||e.event))return;const W=S||T.target||e,se=W[l[T.type][V?Ee:he]];if(se){const Y=[];if(1===se.length){const v=B(se[0],W,T);v&&Y.push(v)}else{const v=se.slice();for(let ee=0;ee<v.length&&(!T||!0!==T[w]);ee++){const j=B(v[ee],W,T);j&&Y.push(j)}}if(1===Y.length)throw Y[0];for(let v=0;v<Y.length;v++){const ee=Y[v];r.nativeScheduleMicroTask(()=>{throw ee})}}}const Q=function(S){return F(this,S,!1)},ue=function(S){return F(this,S,!0)};function fe(S,T){if(!S)return!1;let V=!0;T&&void 0!==T.useG&&(V=T.useG);const W=T&&T.vh;let se=!0;T&&void 0!==T.chkDup&&(se=T.chkDup);let Y=!1;T&&void 0!==T.rt&&(Y=T.rt);let v=S;for(;v&&!v.hasOwnProperty(a);)v=Fe(v);if(!v&&S[a]&&(v=S),!v||v[R])return!1;const ee=T&&T.eventNameToString,j={},D=v[R]=v[a],I=v[z(_)]=v[_],A=v[z(y)]=v[y],de=v[z(k)]=v[k];let te;T&&T.prepend&&(te=v[z(T.prepend)]=v[T.prepend]);const ne=V?function(c){if(!j.isExisting)return D.call(j.target,j.eventName,j.capture?ue:Q,j.options)}:function(c){return D.call(j.target,j.eventName,c.invoke,j.options)},U=V?function(c){if(!c.isRemoved){const d=l[c.eventName];let N;d&&(N=d[c.capture?Ee:he]);const L=N&&c.target[N];if(L)for(let b=0;b<L.length;b++)if(L[b]===c){L.splice(b,1),c.isRemoved=!0,c.removeAbortListener&&(c.removeAbortListener(),c.removeAbortListener=null),0===L.length&&(c.allRemoved=!0,c.target[N]=null);break}}if(c.allRemoved)return I.call(c.target,c.eventName,c.capture?ue:Q,c.options)}:function(c){return I.call(c.target,c.eventName,c.invoke,c.options)},Se=T&&T.diff?T.diff:function(c,d){const N=typeof d;return"function"===N&&c.callback===d||"object"===N&&c.originalDelegate===d},Ne=Zone[z("UNPATCHED_EVENTS")],pe=e[z("PASSIVE_EVENTS")],h=function(c,d,N,L,b=!1,Z=!1){return function(){const $=this||e;let H=arguments[0];T&&T.transferEventName&&(H=T.transferEventName(H));let K=arguments[1];if(!K)return c.apply(this,arguments);if(He&&"uncaughtException"===H)return c.apply(this,arguments);let J=!1;if("function"!=typeof K){if(!K.handleEvent)return c.apply(this,arguments);J=!0}if(W&&!W(c,K,$,arguments))return;const De=o&&!!pe&&-1!==pe.indexOf(H),Re=function g(c){if("object"==typeof c&&null!==c){const d={...c};return c.signal&&(d.signal=c.signal),d}return c}(function x(c,d){return!o&&"object"==typeof c&&c?!!c.capture:o&&d?"boolean"==typeof c?{capture:c,passive:!0}:c?"object"==typeof c&&!1!==c.passive?{...c,passive:!0}:c:{passive:!0}:c}(arguments[2],De)),Ue=Re?.signal;if(Ue?.aborted)return;if(Ne)for(let Pe=0;Pe<Ne.length;Pe++)if(H===Ne[Pe])return De?c.call($,H,K,Re):c.apply(this,arguments);const vt=!!Re&&("boolean"==typeof Re||Re.capture),Pt=!(!Re||"object"!=typeof Re)&&Re.once,jt=Zone.current;let bt=l[H];bt||(ae(H,ee),bt=l[H]);const St=bt[vt?Ee:he];let ht,ze=$[St],Nt=!1;if(ze){if(Nt=!0,se)for(let Pe=0;Pe<ze.length;Pe++)if(Se(ze[Pe],K))return}else ze=$[St]=[];const It=$.constructor.name,Ct=f[It];Ct&&(ht=Ct[H]),ht||(ht=It+d+(ee?ee(H):H)),j.options=Re,Pt&&(j.options.once=!1),j.target=$,j.capture=vt,j.eventName=H,j.isExisting=Nt;const ot=V?i:void 0;ot&&(ot.taskData=j),Ue&&(j.options.signal=void 0);const ye=jt.scheduleEventTask(ht,K,ot,N,L);if(Ue){j.options.signal=Ue;const Pe=()=>ye.zone.cancelTask(ye);c.call(Ue,"abort",Pe,{once:!0}),ye.removeAbortListener=()=>Ue.removeEventListener("abort",Pe)}return j.target=null,ot&&(ot.taskData=null),Pt&&(j.options.once=!0),!o&&"boolean"==typeof ye.options||(ye.options=Re),ye.target=$,ye.capture=vt,ye.eventName=H,J&&(ye.originalDelegate=K),Z?ze.unshift(ye):ze.push(ye),b?$:void 0}};return v[a]=h(D,M,ne,U,Y),te&&(v[E]=h(te,O,function(c){return te.call(j.target,j.eventName,c.invoke,j.options)},U,Y,!0)),v[_]=function(){const c=this||e;let d=arguments[0];T&&T.transferEventName&&(d=T.transferEventName(d));const N=arguments[2],L=!!N&&("boolean"==typeof N||N.capture),b=arguments[1];if(!b)return I.apply(this,arguments);if(W&&!W(I,b,c,arguments))return;const Z=l[d];let $;Z&&($=Z[L?Ee:he]);const H=$&&c[$];if(H)for(let K=0;K<H.length;K++){const J=H[K];if(Se(J,b))return H.splice(K,1),J.isRemoved=!0,0!==H.length||(J.allRemoved=!0,c[$]=null,L||"string"!=typeof d)||(c[Le+"ON_PROPERTY"+d]=null),J.zone.cancelTask(J),Y?c:void 0}return I.apply(this,arguments)},v[y]=function(){const c=this||e;let d=arguments[0];T&&T.transferEventName&&(d=T.transferEventName(d));const N=[],L=G(c,ee?ee(d):d);for(let b=0;b<L.length;b++){const Z=L[b];N.push(Z.originalDelegate?Z.originalDelegate:Z.callback)}return N},v[k]=function(){const c=this||e;let d=arguments[0];if(d){T&&T.transferEventName&&(d=T.transferEventName(d));const N=l[d];if(N){const Z=c[N[he]],$=c[N[Ee]];if(Z){const H=Z.slice();for(let K=0;K<H.length;K++){const J=H[K];this[_].call(this,d,J.originalDelegate?J.originalDelegate:J.callback,J.options)}}if($){const H=$.slice();for(let K=0;K<H.length;K++){const J=H[K];this[_].call(this,d,J.originalDelegate?J.originalDelegate:J.callback,J.options)}}}}else{const N=Object.keys(c);for(let L=0;L<N.length;L++){const Z=p.exec(N[L]);let $=Z&&Z[1];$&&"removeListener"!==$&&this[k].call(this,$)}this[k].call(this,"removeListener")}if(Y)return this},Te(v[a],D),Te(v[_],I),de&&Te(v[k],de),A&&Te(v[y],A),!0}let oe=[];for(let S=0;S<u.length;S++)oe[S]=fe(u[S],t);return oe}function G(e,r){if(!r){const _=[];for(let y in e){const k=p.exec(y);let R=k&&k[1];if(R&&(!r||R===r)){const M=e[y];if(M)for(let E=0;E<M.length;E++)_.push(M[E])}}return _}let u=l[r];u||(ae(r),u=l[r]);const t=e[u[he]],a=e[u[Ee]];return t?a?t.concat(a):t.slice():a?a.slice():[]}function le(e,r){const u=e.Event;u&&u.prototype&&r.patchMethod(u.prototype,"stopImmediatePropagation",t=>function(a,_){a[w]=!0,t&&t.apply(a,_)})}const we=z("zoneTask");function me(e,r,u,t){let a=null,_=null;u+=t;const y={};function k(M){const E=M.data;E.args[0]=function(){return M.invoke.apply(this,arguments)};const O=a.apply(e,E.args);return tt(O)?E.handleId=O:(E.handle=O,E.isRefreshable=ft(O.refresh)),M}function R(M){const{handle:E,handleId:O}=M.data;return _.call(e,E??O)}a=be(e,r+=t,M=>function(E,O){if(ft(O[0])){const B={isRefreshable:!1,isPeriodic:"Interval"===t,delay:"Timeout"===t||"Interval"===t?O[1]||0:void 0,args:O},F=O[0];O[0]=function(){try{return F.apply(this,arguments)}finally{const{handle:V,handleId:W,isPeriodic:se,isRefreshable:Y}=B;!se&&!Y&&(W?delete y[W]:V&&(V[we]=null))}};const Q=$e(r,O[0],B,k,R);if(!Q)return Q;const{handleId:ue,handle:fe,isRefreshable:oe,isPeriodic:S}=Q.data;if(ue)y[ue]=Q;else if(fe&&(fe[we]=Q,oe&&!S)){const T=fe.refresh;fe.refresh=function(){const{zone:V,state:W}=Q;return"notScheduled"===W?(Q._state="scheduled",V._updateTaskCount(Q,1)):"running"===W&&(Q._state="scheduling"),T.call(this)}}return fe??ue??Q}return M.apply(e,O)}),_=be(e,u,M=>function(E,O){const B=O[0];let F;tt(B)?(F=y[B],delete y[B]):(F=B?.[we],F?B[we]=null:F=B),F?.type?F.cancelFn&&F.zone.cancelTask(F):M.apply(e,O)})}function re(e,r,u){if(!u||0===u.length)return r;const t=u.filter(_=>_.target===e);if(!t||0===t.length)return r;const a=t[0].ignoreProperties;return r.filter(_=>-1===a.indexOf(_))}function Ce(e,r,u,t){e&&Et(e,re(e,r,u),t)}function rt(e){return Object.getOwnPropertyNames(e).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function Lt(e,r,u,t,a){const _=Zone.__symbol__(t);if(r[_])return;const y=r[_]=r[t];r[t]=function(k,R,M){return R&&R.prototype&&a.forEach(function(E){const O=`${u}.${t}::`+E,B=R.prototype;try{if(B.hasOwnProperty(E)){const F=e.ObjectGetOwnPropertyDescriptor(B,E);F&&F.value?(F.value=e.wrapWithCurrentZone(F.value,O),e._redefineProperty(R.prototype,E,F)):B[E]&&(B[E]=e.wrapWithCurrentZone(B[E],O))}else B[E]&&(B[E]=e.wrapWithCurrentZone(B[E],O))}catch{}}),y.call(r,k,R,M)},e.attachOriginToPatched(r[t],y)}const Rt=function Ge(){const e=globalThis,r=!0===e[ce("forceDuplicateZoneCheck")];if(e.Zone&&(r||"function"!=typeof e.Zone.__symbol__))throw new Error("Zone already loaded.");return e.Zone??=function Ve(){const e=ie.performance;function r(x){e&&e.mark&&e.mark(x)}function u(x,m){e&&e.measure&&e.measure(x,m)}r("Zone");let t=(()=>{class x{static{this.__symbol__=ce}static assertZonePatched(){if(ie.Promise!==j.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let n=x.current;for(;n.parent;)n=n.parent;return n}static get current(){return I.zone}static get currentTask(){return A}static __load_patch(n,s,P=!1){if(j.hasOwnProperty(n)){const C=!0===ie[ce("forceDuplicateZoneCheck")];if(!P&&C)throw Error("Already loaded patch: "+n)}else if(!ie["__Zone_disable_"+n]){const C="Zone:"+n;r(C),j[n]=s(ie,x,D),u(C,C)}}get parent(){return this._parent}get name(){return this._name}constructor(n,s){this._parent=n,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new _(this,this._parent&&this._parent._zoneDelegate,s)}get(n){const s=this.getZoneWith(n);if(s)return s._properties[n]}getZoneWith(n){let s=this;for(;s;){if(s._properties.hasOwnProperty(n))return s;s=s._parent}return null}fork(n){if(!n)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,n)}wrap(n,s){if("function"!=typeof n)throw new Error("Expecting function got: "+n);const P=this._zoneDelegate.intercept(this,n,s),C=this;return function(){return C.runGuarded(P,this,arguments,s)}}run(n,s,P,C){I={parent:I,zone:this};try{return this._zoneDelegate.invoke(this,n,s,P,C)}finally{I=I.parent}}runGuarded(n,s=null,P,C){I={parent:I,zone:this};try{try{return this._zoneDelegate.invoke(this,n,s,P,C)}catch(ne){if(this._zoneDelegate.handleError(this,ne))throw ne}}finally{I=I.parent}}runTask(n,s,P){if(n.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(n.zone||fe).name+"; Execution: "+this.name+")");const C=n,{type:ne,data:{isPeriodic:U=!1,isRefreshable:Oe=!1}={}}=n;if(n.state===oe&&(ne===ee||ne===v))return;const Se=n.state!=V;Se&&C._transitionTo(V,T);const Ne=A;A=C,I={parent:I,zone:this};try{ne==v&&n.data&&!U&&!Oe&&(n.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,C,s,P)}catch(pe){if(this._zoneDelegate.handleError(this,pe))throw pe}}finally{const pe=n.state;if(pe!==oe&&pe!==se)if(ne==ee||U||Oe&&pe===S)Se&&C._transitionTo(T,V,S);else{const g=C._zoneDelegates;this._updateTaskCount(C,-1),Se&&C._transitionTo(oe,V,oe),Oe&&(C._zoneDelegates=g)}I=I.parent,A=Ne}}scheduleTask(n){if(n.zone&&n.zone!==this){let P=this;for(;P;){if(P===n.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);P=P.parent}}n._transitionTo(S,oe);const s=[];n._zoneDelegates=s,n._zone=this;try{n=this._zoneDelegate.scheduleTask(this,n)}catch(P){throw n._transitionTo(se,S,oe),this._zoneDelegate.handleError(this,P),P}return n._zoneDelegates===s&&this._updateTaskCount(n,1),n.state==S&&n._transitionTo(T,S),n}scheduleMicroTask(n,s,P,C){return this.scheduleTask(new y(Y,n,s,P,C,void 0))}scheduleMacroTask(n,s,P,C,ne){return this.scheduleTask(new y(v,n,s,P,C,ne))}scheduleEventTask(n,s,P,C,ne){return this.scheduleTask(new y(ee,n,s,P,C,ne))}cancelTask(n){if(n.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(n.zone||fe).name+"; Execution: "+this.name+")");if(n.state===T||n.state===V){n._transitionTo(W,T,V);try{this._zoneDelegate.cancelTask(this,n)}catch(s){throw n._transitionTo(se,W),this._zoneDelegate.handleError(this,s),s}return this._updateTaskCount(n,-1),n._transitionTo(oe,W),n.runCount=-1,n}}_updateTaskCount(n,s){const P=n._zoneDelegates;-1==s&&(n._zoneDelegates=null);for(let C=0;C<P.length;C++)P[C]._updateTaskCount(n.type,s)}}return x})();const a={name:"",onHasTask:(x,m,n,s)=>x.hasTask(n,s),onScheduleTask:(x,m,n,s)=>x.scheduleTask(n,s),onInvokeTask:(x,m,n,s,P,C)=>x.invokeTask(n,s,P,C),onCancelTask:(x,m,n,s)=>x.cancelTask(n,s)};class _{get zone(){return this._zone}constructor(m,n,s){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=m,this._parentDelegate=n,this._forkZS=s&&(s&&s.onFork?s:n._forkZS),this._forkDlgt=s&&(s.onFork?n:n._forkDlgt),this._forkCurrZone=s&&(s.onFork?this._zone:n._forkCurrZone),this._interceptZS=s&&(s.onIntercept?s:n._interceptZS),this._interceptDlgt=s&&(s.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=s&&(s.onIntercept?this._zone:n._interceptCurrZone),this._invokeZS=s&&(s.onInvoke?s:n._invokeZS),this._invokeDlgt=s&&(s.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=s&&(s.onInvoke?this._zone:n._invokeCurrZone),this._handleErrorZS=s&&(s.onHandleError?s:n._handleErrorZS),this._handleErrorDlgt=s&&(s.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=s&&(s.onHandleError?this._zone:n._handleErrorCurrZone),this._scheduleTaskZS=s&&(s.onScheduleTask?s:n._scheduleTaskZS),this._scheduleTaskDlgt=s&&(s.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=s&&(s.onScheduleTask?this._zone:n._scheduleTaskCurrZone),this._invokeTaskZS=s&&(s.onInvokeTask?s:n._invokeTaskZS),this._invokeTaskDlgt=s&&(s.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=s&&(s.onInvokeTask?this._zone:n._invokeTaskCurrZone),this._cancelTaskZS=s&&(s.onCancelTask?s:n._cancelTaskZS),this._cancelTaskDlgt=s&&(s.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=s&&(s.onCancelTask?this._zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const P=s&&s.onHasTask;(P||n&&n._hasTaskZS)&&(this._hasTaskZS=P?s:a,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,s.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this._zone),s.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this._zone),s.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this._zone))}fork(m,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,m,n):new t(m,n)}intercept(m,n,s){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,m,n,s):n}invoke(m,n,s,P,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,m,n,s,P,C):n.apply(s,P)}handleError(m,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,m,n)}scheduleTask(m,n){let s=n;if(this._scheduleTaskZS)this._hasTaskZS&&s._zoneDelegates.push(this._hasTaskDlgtOwner),s=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,m,n),s||(s=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=Y)throw new Error("Task is missing scheduleFn.");Q(n)}return s}invokeTask(m,n,s,P){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,m,n,s,P):n.callback.apply(s,P)}cancelTask(m,n){let s;if(this._cancelTaskZS)s=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,m,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");s=n.cancelFn(n)}return s}hasTask(m,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,m,n)}catch(s){this.handleError(m,s)}}_updateTaskCount(m,n){const s=this._taskCounts,P=s[m],C=s[m]=P+n;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=P&&0!=C||this.hasTask(this._zone,{microTask:s.microTask>0,macroTask:s.macroTask>0,eventTask:s.eventTask>0,change:m})}}class y{constructor(m,n,s,P,C,ne){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=m,this.source=n,this.data=P,this.scheduleFn=C,this.cancelFn=ne,!s)throw new Error("callback is not defined");this.callback=s;const U=this;this.invoke=m===ee&&P&&P.useG?y.invokeTask:function(){return y.invokeTask.call(ie,U,this,arguments)}}static invokeTask(m,n,s){m||(m=this),de++;try{return m.runCount++,m.zone.runTask(m,n,s)}finally{1==de&&ue(),de--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(oe,S)}_transitionTo(m,n,s){if(this._state!==n&&this._state!==s)throw new Error(`${this.type} '${this.source}': can not transition to '${m}', expecting state '${n}'${s?" or '"+s+"'":""}, was '${this._state}'.`);this._state=m,m==oe&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const k=ce("setTimeout"),R=ce("Promise"),M=ce("then");let B,E=[],O=!1;function F(x){if(B||ie[R]&&(B=ie[R].resolve(0)),B){let m=B[M];m||(m=B.then),m.call(B,x)}else ie[k](x,0)}function Q(x){0===de&&0===E.length&&F(ue),x&&E.push(x)}function ue(){if(!O){for(O=!0;E.length;){const x=E;E=[];for(let m=0;m<x.length;m++){const n=x[m];try{n.zone.runTask(n,null,null)}catch(s){D.onUnhandledError(s)}}}D.microtaskDrainDone(),O=!1}}const fe={name:"NO ZONE"},oe="notScheduled",S="scheduling",T="scheduled",V="running",W="canceling",se="unknown",Y="microTask",v="macroTask",ee="eventTask",j={},D={symbol:ce,currentZoneFrame:()=>I,onUnhandledError:te,microtaskDrainDone:te,scheduleMicroTask:Q,showUncaughtError:()=>!t[ce("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:te,patchMethod:()=>te,bindArguments:()=>[],patchThen:()=>te,patchMacroTask:()=>te,patchEventPrototype:()=>te,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>te,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>te,wrapWithCurrentZone:()=>te,filterProperties:()=>[],attachOriginToPatched:()=>te,_redefineProperty:()=>te,patchCallbacks:()=>te,nativeScheduleMicroTask:F};let I={parent:null,zone:new t(null,null)},A=null,de=0;function te(){}return u("Zone","Zone"),t}(),e.Zone}();(function At(e){(function Ot(e){e.__load_patch("ZoneAwarePromise",(r,u,t)=>{const a=Object.getOwnPropertyDescriptor,_=Object.defineProperty,k=t.symbol,R=[],M=!1!==r[k("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],E=k("Promise"),O=k("then");t.onUnhandledError=g=>{if(t.showUncaughtError()){const h=g&&g.rejection;h?console.error("Unhandled Promise rejection:",h instanceof Error?h.message:h,"; Zone:",g.zone.name,"; Task:",g.task&&g.task.source,"; Value:",h,h instanceof Error?h.stack:void 0):console.error(g)}},t.microtaskDrainDone=()=>{for(;R.length;){const g=R.shift();try{g.zone.runGuarded(()=>{throw g.throwOriginal?g.rejection:g})}catch(h){Q(h)}}};const F=k("unhandledPromiseRejectionHandler");function Q(g){t.onUnhandledError(g);try{const h=u[F];"function"==typeof h&&h.call(this,g)}catch{}}function ue(g){return g&&g.then}function fe(g){return g}function oe(g){return U.reject(g)}const S=k("state"),T=k("value"),V=k("finally"),W=k("parentPromiseValue"),se=k("parentPromiseState"),v=null,j=!1;function I(g,h){return c=>{try{x(g,h,c)}catch(d){x(g,!1,d)}}}const A=function(){let g=!1;return function(c){return function(){g||(g=!0,c.apply(null,arguments))}}},de="Promise resolved with itself",te=k("currentTaskTrace");function x(g,h,c){const d=A();if(g===c)throw new TypeError(de);if(g[S]===v){let N=null;try{("object"==typeof c||"function"==typeof c)&&(N=c&&c.then)}catch(L){return d(()=>{x(g,!1,L)})(),g}if(h!==j&&c instanceof U&&c.hasOwnProperty(S)&&c.hasOwnProperty(T)&&c[S]!==v)n(c),x(g,c[S],c[T]);else if(h!==j&&"function"==typeof N)try{N.call(c,d(I(g,h)),d(I(g,!1)))}catch(L){d(()=>{x(g,!1,L)})()}else{g[S]=h;const L=g[T];if(g[T]=c,g[V]===V&&!0===h&&(g[S]=g[se],g[T]=g[W]),h===j&&c instanceof Error){const b=u.currentTask&&u.currentTask.data&&u.currentTask.data.__creationTrace__;b&&_(c,te,{configurable:!0,enumerable:!1,writable:!0,value:b})}for(let b=0;b<L.length;)s(g,L[b++],L[b++],L[b++],L[b++]);if(0==L.length&&h==j){g[S]=0;let b=c;try{throw new Error("Uncaught (in promise): "+function y(g){return g&&g.toString===Object.prototype.toString?(g.constructor&&g.constructor.name||"")+": "+JSON.stringify(g):g?g.toString():Object.prototype.toString.call(g)}(c)+(c&&c.stack?"\n"+c.stack:""))}catch(Z){b=Z}M&&(b.throwOriginal=!0),b.rejection=c,b.promise=g,b.zone=u.current,b.task=u.currentTask,R.push(b),t.scheduleMicroTask()}}}return g}const m=k("rejectionHandledHandler");function n(g){if(0===g[S]){try{const h=u[m];h&&"function"==typeof h&&h.call(this,{rejection:g[T],promise:g})}catch{}g[S]=j;for(let h=0;h<R.length;h++)g===R[h].promise&&R.splice(h,1)}}function s(g,h,c,d,N){n(g);const L=g[S],b=L?"function"==typeof d?d:fe:"function"==typeof N?N:oe;h.scheduleMicroTask("Promise.then",()=>{try{const Z=g[T],$=!!c&&V===c[V];$&&(c[W]=Z,c[se]=L);const H=h.run(b,void 0,$&&b!==oe&&b!==fe?[]:[Z]);x(c,!0,H)}catch(Z){x(c,!1,Z)}},c)}const C=function(){},ne=r.AggregateError;class U{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(h){return h instanceof U?h:x(new this(null),!0,h)}static reject(h){return x(new this(null),j,h)}static withResolvers(){const h={};return h.promise=new U((c,d)=>{h.resolve=c,h.reject=d}),h}static any(h){if(!h||"function"!=typeof h[Symbol.iterator])return Promise.reject(new ne([],"All promises were rejected"));const c=[];let d=0;try{for(let b of h)d++,c.push(U.resolve(b))}catch{return Promise.reject(new ne([],"All promises were rejected"))}if(0===d)return Promise.reject(new ne([],"All promises were rejected"));let N=!1;const L=[];return new U((b,Z)=>{for(let $=0;$<c.length;$++)c[$].then(H=>{N||(N=!0,b(H))},H=>{L.push(H),d--,0===d&&(N=!0,Z(new ne(L,"All promises were rejected")))})})}static race(h){let c,d,N=new this((Z,$)=>{c=Z,d=$});function L(Z){c(Z)}function b(Z){d(Z)}for(let Z of h)ue(Z)||(Z=this.resolve(Z)),Z.then(L,b);return N}static all(h){return U.allWithCallback(h)}static allSettled(h){return(this&&this.prototype instanceof U?this:U).allWithCallback(h,{thenCallback:d=>({status:"fulfilled",value:d}),errorCallback:d=>({status:"rejected",reason:d})})}static allWithCallback(h,c){let d,N,L=new this((H,K)=>{d=H,N=K}),b=2,Z=0;const $=[];for(let H of h){ue(H)||(H=this.resolve(H));const K=Z;try{H.then(J=>{$[K]=c?c.thenCallback(J):J,b--,0===b&&d($)},J=>{c?($[K]=c.errorCallback(J),b--,0===b&&d($)):N(J)})}catch(J){N(J)}b++,Z++}return b-=2,0===b&&d($),L}constructor(h){const c=this;if(!(c instanceof U))throw new Error("Must be an instanceof Promise.");c[S]=v,c[T]=[];try{const d=A();h&&h(d(I(c,!0)),d(I(c,j)))}catch(d){x(c,!1,d)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return U}then(h,c){let d=this.constructor?.[Symbol.species];(!d||"function"!=typeof d)&&(d=this.constructor||U);const N=new d(C),L=u.current;return this[S]==v?this[T].push(L,N,h,c):s(this,L,N,h,c),N}catch(h){return this.then(null,h)}finally(h){let c=this.constructor?.[Symbol.species];(!c||"function"!=typeof c)&&(c=U);const d=new c(C);d[V]=V;const N=u.current;return this[S]==v?this[T].push(N,d,h,h):s(this,N,d,h,h),d}}U.resolve=U.resolve,U.reject=U.reject,U.race=U.race,U.all=U.all;const Oe=r[E]=r.Promise;r.Promise=U;const Se=k("thenPatched");function Ne(g){const h=g.prototype,c=a(h,"then");if(c&&(!1===c.writable||!c.configurable))return;const d=h.then;h[O]=d,g.prototype.then=function(N,L){return new U((Z,$)=>{d.call(this,Z,$)}).then(N,L)},g[Se]=!0}return t.patchThen=Ne,Oe&&(Ne(Oe),be(r,"fetch",g=>function pe(g){return function(h,c){let d=g.apply(h,c);if(d instanceof U)return d;let N=d.constructor;return N[Se]||Ne(N),d}}(g))),Promise[u.__symbol__("uncaughtPromiseErrors")]=R,U})})(e),function Dt(e){e.__load_patch("toString",r=>{const u=Function.prototype.toString,t=z("OriginalDelegate"),a=z("Promise"),_=z("Error"),y=function(){if("function"==typeof this){const E=this[t];if(E)return"function"==typeof E?u.call(E):Object.prototype.toString.call(E);if(this===Promise){const O=r[a];if(O)return u.call(O)}if(this===Error){const O=r[_];if(O)return u.call(O)}}return u.call(this)};y[t]=u,Function.prototype.toString=y;const k=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":k.call(this)}})}(e),function Mt(e){e.__load_patch("util",(r,u,t)=>{const a=rt(r);t.patchOnProperties=Et,t.patchMethod=be,t.bindArguments=Ae,t.patchMacroTask=lt;const _=u.__symbol__("BLACK_LISTED_EVENTS"),y=u.__symbol__("UNPATCHED_EVENTS");r[y]&&(r[_]=r[y]),r[_]&&(u[_]=u[y]=r[_]),t.patchEventPrototype=le,t.patchEventTarget=X,t.isIEOrEdge=et,t.ObjectDefineProperty=st,t.ObjectGetOwnPropertyDescriptor=ke,t.ObjectCreate=wt,t.ArraySlice=dt,t.patchClass=xe,t.wrapWithCurrentZone=Ze,t.filterProperties=re,t.attachOriginToPatched=Te,t._redefineProperty=Object.defineProperty,t.patchCallbacks=Lt,t.getGlobalObjects=()=>({globalSources:f,zoneSymbolEventNames:l,eventNames:a,isBrowser:Je,isMix:ct,isNode:He,TRUE_STR:Ee,FALSE_STR:he,ZONE_SYMBOL_PREFIX:Le,ADD_EVENT_LISTENER_STR:We,REMOVE_EVENT_LISTENER_STR:qe})})}(e)})(Rt),function kt(e){e.__load_patch("legacy",r=>{const u=r[e.__symbol__("legacyPatch")];u&&u()}),e.__load_patch("timers",r=>{const u="set",t="clear";me(r,u,t,"Timeout"),me(r,u,t,"Interval"),me(r,u,t,"Immediate")}),e.__load_patch("requestAnimationFrame",r=>{me(r,"request","cancel","AnimationFrame"),me(r,"mozRequest","mozCancel","AnimationFrame"),me(r,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(r,u)=>{const t=["alert","prompt","confirm"];for(let a=0;a<t.length;a++)be(r,t[a],(y,k,R)=>function(M,E){return u.current.run(y,r,E,R)})}),e.__load_patch("EventTarget",(r,u,t)=>{(function Be(e,r){r.patchEventPrototype(e,r)})(r,t),function ge(e,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:u,zoneSymbolEventNames:t,TRUE_STR:a,FALSE_STR:_,ZONE_SYMBOL_PREFIX:y}=r.getGlobalObjects();for(let R=0;R<u.length;R++){const M=u[R],B=y+(M+_),F=y+(M+a);t[M]={},t[M][_]=B,t[M][a]=F}const k=e.EventTarget;k&&k.prototype&&r.patchEventTarget(e,r,[k&&k.prototype])}(r,t);const a=r.XMLHttpRequestEventTarget;a&&a.prototype&&t.patchEventTarget(r,t,[a.prototype])}),e.__load_patch("MutationObserver",(r,u,t)=>{xe("MutationObserver"),xe("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(r,u,t)=>{xe("IntersectionObserver")}),e.__load_patch("FileReader",(r,u,t)=>{xe("FileReader")}),e.__load_patch("on_property",(r,u,t)=>{!function yt(e,r){if(He&&!ct||Zone[e.symbol("patchEvents")])return;const u=r.__Zone_ignore_on_properties;let t=[];if(Je){const a=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const _=function pt(){try{const e=ve.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];Ce(a,rt(a),u&&u.concat(_),Fe(a))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<t.length;a++){const _=r[t[a]];_&&_.prototype&&Ce(_.prototype,rt(_.prototype),u)}}(t,r)}),e.__load_patch("customElements",(r,u,t)=>{!function nt(e,r){const{isBrowser:u,isMix:t}=r.getGlobalObjects();(u||t)&&e.customElements&&"customElements"in e&&r.patchCallbacks(r,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,t)}),e.__load_patch("XHR",(r,u)=>{!function M(E){const O=E.XMLHttpRequest;if(!O)return;const B=O.prototype;let Q=B[Xe],ue=B[Ye];if(!Q){const D=E.XMLHttpRequestEventTarget;if(D){const I=D.prototype;Q=I[Xe],ue=I[Ye]}}const fe="readystatechange",oe="scheduled";function S(D){const I=D.data,A=I.target;A[y]=!1,A[R]=!1;const de=A[_];Q||(Q=A[Xe],ue=A[Ye]),de&&ue.call(A,fe,de);const te=A[_]=()=>{if(A.readyState===A.DONE)if(!I.aborted&&A[y]&&D.state===oe){const m=A[u.__symbol__("loadfalse")];if(0!==A.status&&m&&m.length>0){const n=D.invoke;D.invoke=function(){const s=A[u.__symbol__("loadfalse")];for(let P=0;P<s.length;P++)s[P]===D&&s.splice(P,1);!I.aborted&&D.state===oe&&n.call(D)},m.push(D)}else D.invoke()}else!I.aborted&&!1===A[y]&&(A[R]=!0)};return Q.call(A,fe,te),A[t]||(A[t]=D),ee.apply(A,I.args),A[y]=!0,D}function T(){}function V(D){const I=D.data;return I.aborted=!0,j.apply(I.target,I.args)}const W=be(B,"open",()=>function(D,I){return D[a]=0==I[2],D[k]=I[1],W.apply(D,I)}),Y=z("fetchTaskAborting"),v=z("fetchTaskScheduling"),ee=be(B,"send",()=>function(D,I){if(!0===u.current[v]||D[a])return ee.apply(D,I);{const A={target:D,url:D[k],isPeriodic:!1,args:I,aborted:!1},de=$e("XMLHttpRequest.send",T,A,S,V);D&&!0===D[R]&&!A.aborted&&de.state===oe&&de.invoke()}}),j=be(B,"abort",()=>function(D,I){const A=function F(D){return D[t]}(D);if(A&&"string"==typeof A.type){if(null==A.cancelFn||A.data&&A.data.aborted)return;A.zone.cancelTask(A)}else if(!0===u.current[Y])return j.apply(D,I)})}(r);const t=z("xhrTask"),a=z("xhrSync"),_=z("xhrListener"),y=z("xhrScheduled"),k=z("xhrURL"),R=z("xhrErrorBeforeScheduled")}),e.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function gt(e,r){const u=e.constructor.name;for(let t=0;t<r.length;t++){const a=r[t],_=e[a];if(_){if(!Ke(ke(e,a)))continue;e[a]=(k=>{const R=function(){return k.apply(this,Ae(arguments,u+"."+a))};return Te(R,k),R})(_)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(r,u)=>{function t(a){return function(_){G(r,a).forEach(k=>{const R=r.PromiseRejectionEvent;if(R){const M=new R(a,{promise:_.promise,reason:_.rejection});k.invoke(M)}})}}r.PromiseRejectionEvent&&(u[z("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),u[z("rejectionHandledHandler")]=t("rejectionhandled"))}),e.__load_patch("queueMicrotask",(r,u,t)=>{!function Ie(e,r){r.patchMethod(e,"queueMicrotask",u=>function(t,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}(r,t)})}(Rt)},4073:()=>{Error;const et=function(o,...i){if(et.translate){const f=et.translate(o,i);o=f[0],i=f[1]}let l=tt(o[0],o.raw[0]);for(let f=1;f<o.length;f++)l+=i[f-1]+tt(o[f],o.raw[f]);return l},ft=":";function tt(o,i){return i.charAt(0)===ft?o.substring(function Qe(o,i){for(let l=1,f=1;l<o.length;l++,f++)if("\\"===i[f])f++;else if(":"===o[l])return l;throw new Error(`Unterminated $localize metadata block in "${i}".`)}(o,i)+1):o}globalThis.$localize=et}},ie=>{var ce=Ge=>ie(ie.s=Ge);ce(6935),ce(4073)}]);