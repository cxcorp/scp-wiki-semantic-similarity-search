var Sc=Object.defineProperty;var wc=(e,n,t)=>n in e?Sc(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var nu=(e,n,t)=>wc(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var M1={exports:{}},J0={},D1={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=Symbol.for("react.element"),xc=Symbol.for("react.portal"),Cc=Symbol.for("react.fragment"),Ec=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),Pc=Symbol.for("react.provider"),zc=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),Ic=Symbol.for("react.suspense"),Tc=Symbol.for("react.memo"),Rc=Symbol.for("react.lazy"),tu=Symbol.iterator;function Lc(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var j1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F1=Object.assign,A1={};function Ut(e,n,t){this.props=e,this.context=n,this.refs=A1,this.updater=t||j1}Ut.prototype.isReactComponent={};Ut.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U1(){}U1.prototype=Ut.prototype;function ni(e,n,t){this.props=e,this.context=n,this.refs=A1,this.updater=t||j1}var ti=ni.prototype=new U1;ti.constructor=ni;F1(ti,Ut.prototype);ti.isPureReactComponent=!0;var ru=Array.isArray,W1=Object.prototype.hasOwnProperty,ri={current:null},B1={key:!0,ref:!0,__self:!0,__source:!0};function V1(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)W1.call(n,r)&&!B1.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var s=Array(u),d=0;d<u;d++)s[d]=arguments[d+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Or,type:e,key:o,ref:i,props:l,_owner:ri.current}}function Oc(e,n){return{$$typeof:Or,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function li(e){return typeof e=="object"&&e!==null&&e.$$typeof===Or}function $c(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var lu=/\/+/g;function wl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?$c(""+e.key):n.toString(36)}function i0(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Or:case xc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+wl(i,0):r,ru(l)?(t="",e!=null&&(t=e.replace(lu,"$&/")+"/"),i0(l,n,t,"",function(d){return d})):l!=null&&(li(l)&&(l=Oc(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(lu,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",ru(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+wl(o,u);i+=i0(o,n,t,s,l)}else if(s=Lc(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+wl(o,u++),i+=i0(o,n,t,s,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Ur(e,n,t){if(e==null)return e;var r=[],l=0;return i0(e,r,"","",function(o){return n.call(t,o,l++)}),r}function Mc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},u0={transition:null},Dc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:u0,ReactCurrentOwner:ri};function H1(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Ur,forEach:function(e,n,t){Ur(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ur(e,function(){n++}),n},toArray:function(e){return Ur(e,function(n){return n})||[]},only:function(e){if(!li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Ut;L.Fragment=Cc;L.Profiler=_c;L.PureComponent=ni;L.StrictMode=Ec;L.Suspense=Ic;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dc;L.act=H1;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=F1({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=ri.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)W1.call(n,s)&&!B1.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var d=0;d<s;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:Or,type:e.type,key:l,ref:o,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:zc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pc,_context:e},e.Consumer=e};L.createElement=V1;L.createFactory=function(e){var n=V1.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Nc,render:e}};L.isValidElement=li;L.lazy=function(e){return{$$typeof:Rc,_payload:{_status:-1,_result:e},_init:Mc}};L.memo=function(e,n){return{$$typeof:Tc,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=u0.transition;u0.transition={};try{e()}finally{u0.transition=n}};L.unstable_act=H1;L.useCallback=function(e,n){return me.current.useCallback(e,n)};L.useContext=function(e){return me.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return me.current.useDeferredValue(e)};L.useEffect=function(e,n){return me.current.useEffect(e,n)};L.useId=function(){return me.current.useId()};L.useImperativeHandle=function(e,n,t){return me.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return me.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return me.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return me.current.useMemo(e,n)};L.useReducer=function(e,n,t){return me.current.useReducer(e,n,t)};L.useRef=function(e){return me.current.useRef(e)};L.useState=function(e){return me.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return me.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return me.current.useTransition()};L.version="18.3.1";D1.exports=L;var Z=D1.exports;const zt=kc(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=Z,Fc=Symbol.for("react.element"),Ac=Symbol.for("react.fragment"),Uc=Object.prototype.hasOwnProperty,Wc=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function Q1(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Uc.call(n,r)&&!Bc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Fc,type:e,key:o,ref:i,props:l,_owner:Wc.current}}J0.Fragment=Ac;J0.jsx=Q1;J0.jsxs=Q1;M1.exports=J0;var A=M1.exports,ql={},K1={exports:{}},Ie={},G1={exports:{}},Y1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,N){var I=_.length;_.push(N);e:for(;0<I;){var D=I-1>>>1,j=_[D];if(0<l(j,N))_[D]=N,_[I]=j,I=D;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var N=_[0],I=_.pop();if(I!==N){_[0]=I;e:for(var D=0,j=_.length,Ye=j>>>1;D<Ye;){var oe=2*(D+1)-1,Fe=_[oe],Ce=oe+1,ln=_[Ce];if(0>l(Fe,I))Ce<j&&0>l(ln,Fe)?(_[D]=ln,_[Ce]=I,D=Ce):(_[D]=Fe,_[oe]=I,D=oe);else if(Ce<j&&0>l(ln,I))_[D]=ln,_[Ce]=I,D=Ce;else break e}}return N}function l(_,N){var I=_.sortIndex-N.sortIndex;return I!==0?I:_.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var s=[],d=[],v=1,m=null,h=3,y=!1,w=!1,p=!1,E=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var N=t(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=_)r(d),N.sortIndex=N.expirationTime,n(s,N);else break;N=t(d)}}function g(_){if(p=!1,f(_),!w)if(t(s)!==null)w=!0,An(S);else{var N=t(d);N!==null&&Ge(g,N.startTime-_)}}function S(_,N){w=!1,p&&(p=!1,c(P),P=-1),y=!0;var I=h;try{for(f(N),m=t(s);m!==null&&(!(m.expirationTime>N)||_&&!ne());){var D=m.callback;if(typeof D=="function"){m.callback=null,h=m.priorityLevel;var j=D(m.expirationTime<=N);N=e.unstable_now(),typeof j=="function"?m.callback=j:m===t(s)&&r(s),f(N)}else r(s);m=t(s)}if(m!==null)var Ye=!0;else{var oe=t(d);oe!==null&&Ge(g,oe.startTime-N),Ye=!1}return Ye}finally{m=null,h=I,y=!1}}var x=!1,k=null,P=-1,O=5,T=-1;function ne(){return!(e.unstable_now()-T<O)}function tn(){if(k!==null){var _=e.unstable_now();T=_;var N=!0;try{N=k(!0,_)}finally{N?rn():(x=!1,k=null)}}else x=!1}var rn;if(typeof a=="function")rn=function(){a(tn)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Ht=lt.port2;lt.port1.onmessage=tn,rn=function(){Ht.postMessage(null)}}else rn=function(){E(tn,0)};function An(_){k=_,x||(x=!0,rn())}function Ge(_,N){P=E(function(){_(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,An(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var I=h;h=N;try{return _()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,N){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=h;h=_;try{return N()}finally{h=I}},e.unstable_scheduleCallback=function(_,N,I){var D=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?D+I:D):I=D,_){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=I+j,_={id:v++,callback:N,priorityLevel:_,startTime:I,expirationTime:j,sortIndex:-1},I>D?(_.sortIndex=I,n(d,_),t(s)===null&&_===t(d)&&(p?(c(P),P=-1):p=!0,Ge(g,I-D))):(_.sortIndex=j,n(s,_),w||y||(w=!0,An(S))),_},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(_){var N=h;return function(){var I=h;h=N;try{return _.apply(this,arguments)}finally{h=I}}}})(Y1);G1.exports=Y1;var Vc=G1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=Z,Ne=Vc;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X1=new Set,mr={};function tt(e,n){Nt(e,n),Nt(e+"Capture",n)}function Nt(e,n){for(mr[e]=n,e=0;e<n.length;e++)X1.add(n[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,Qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},iu={};function Kc(e){return bl.call(iu,e)?!0:bl.call(ou,e)?!1:Qc.test(e)?iu[e]=!0:(ou[e]=!0,!1)}function Gc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yc(e,n,t,r){if(n===null||typeof n>"u"||Gc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];se[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var oi=/[\-:]([a-z])/g;function ii(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(oi,ii);se[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(oi,ii);se[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(oi,ii);se[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ui(e,n,t,r){var l=se.hasOwnProperty(n)?se[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Yc(n,t,l,r)&&(t=null),r||l===null?Kc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var vn=Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),st=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),si=Symbol.for("react.strict_mode"),eo=Symbol.for("react.profiler"),Z1=Symbol.for("react.provider"),J1=Symbol.for("react.context"),ai=Symbol.for("react.forward_ref"),no=Symbol.for("react.suspense"),to=Symbol.for("react.suspense_list"),ci=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),q1=Symbol.for("react.offscreen"),uu=Symbol.iterator;function Kt(e){return e===null||typeof e!="object"?null:(e=uu&&e[uu]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,kl;function er(e){if(kl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);kl=n&&n[1]||""}return`
`+kl+e}var xl=!1;function Cl(e,n){if(!e||xl)return"";xl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{xl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?er(e):""}function Xc(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case st:return"Portal";case eo:return"Profiler";case si:return"StrictMode";case no:return"Suspense";case to:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case J1:return(e.displayName||"Context")+".Consumer";case Z1:return(e._context.displayName||"Context")+".Provider";case ai:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ci:return n=e.displayName||null,n!==null?n:ro(e.type)||"Memo";case wn:n=e._payload,e=e._init;try{return ro(e(n))}catch{}}return null}function Zc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ro(n);case 8:return n===si?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function b1(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jc(e){var n=b1(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Br(e){e._valueTracker||(e._valueTracker=Jc(e))}function es(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=b1(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function C0(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lo(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function su(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=$n(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ns(e,n){n=n.checked,n!=null&&ui(e,"checked",n,!1)}function oo(e,n){ns(e,n);var t=$n(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?io(e,n.type,t):n.hasOwnProperty("defaultValue")&&io(e,n.type,$n(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function au(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function io(e,n,t){(n!=="number"||C0(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var nr=Array.isArray;function kt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+$n(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function uo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(nr(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:$n(t)}}function ts(e,n){var t=$n(n.value),r=$n(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function fu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function rs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function so(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?rs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vr,ls=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function vr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qc=["Webkit","ms","Moz","O"];Object.keys(or).forEach(function(e){qc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),or[n]=or[e]})});function os(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||or.hasOwnProperty(e)&&or[e]?(""+n).trim():n+"px"}function is(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=os(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var bc=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ao(e,n){if(n){if(bc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function co(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var po=null,xt=null,Ct=null;function du(e){if(e=Dr(e)){if(typeof po!="function")throw Error(C(280));var n=e.stateNode;n&&(n=tl(n),po(e.stateNode,e.type,n))}}function us(e){xt?Ct?Ct.push(e):Ct=[e]:xt=e}function ss(){if(xt){var e=xt,n=Ct;if(Ct=xt=null,du(e),n)for(e=0;e<n.length;e++)du(n[e])}}function as(e,n){return e(n)}function cs(){}var El=!1;function fs(e,n,t){if(El)return e(n,t);El=!0;try{return as(e,n,t)}finally{El=!1,(xt!==null||Ct!==null)&&(cs(),ss())}}function gr(e,n){var t=e.stateNode;if(t===null)return null;var r=tl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var ho=!1;if(dn)try{var Gt={};Object.defineProperty(Gt,"passive",{get:function(){ho=!0}}),window.addEventListener("test",Gt,Gt),window.removeEventListener("test",Gt,Gt)}catch{ho=!1}function ef(e,n,t,r,l,o,i,u,s){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(v){this.onError(v)}}var ir=!1,E0=null,_0=!1,mo=null,nf={onError:function(e){ir=!0,E0=e}};function tf(e,n,t,r,l,o,i,u,s){ir=!1,E0=null,ef.apply(nf,arguments)}function rf(e,n,t,r,l,o,i,u,s){if(tf.apply(this,arguments),ir){if(ir){var d=E0;ir=!1,E0=null}else throw Error(C(198));_0||(_0=!0,mo=d)}}function rt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ds(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function pu(e){if(rt(e)!==e)throw Error(C(188))}function lf(e){var n=e.alternate;if(!n){if(n=rt(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return pu(l),e;if(o===r)return pu(l),n;o=o.sibling}throw Error(C(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===t){i=!0,t=l,r=o;break}if(u===r){i=!0,r=l,t=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===t){i=!0,t=o,r=l;break}if(u===r){i=!0,r=o,t=l;break}u=u.sibling}if(!i)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function ps(e){return e=lf(e),e!==null?hs(e):null}function hs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=hs(e);if(n!==null)return n;e=e.sibling}return null}var ms=Ne.unstable_scheduleCallback,hu=Ne.unstable_cancelCallback,of=Ne.unstable_shouldYield,uf=Ne.unstable_requestPaint,X=Ne.unstable_now,sf=Ne.unstable_getCurrentPriorityLevel,di=Ne.unstable_ImmediatePriority,vs=Ne.unstable_UserBlockingPriority,P0=Ne.unstable_NormalPriority,af=Ne.unstable_LowPriority,gs=Ne.unstable_IdlePriority,q0=null,be=null;function cf(e){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(q0,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:pf,ff=Math.log,df=Math.LN2;function pf(e){return e>>>=0,e===0?32:31-(ff(e)/df|0)|0}var Hr=64,Qr=4194304;function tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function z0(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var u=i&~l;u!==0?r=tr(u):(o&=i,o!==0&&(r=tr(o)))}else i=t&~l,i!==0?r=tr(i):o!==0&&(r=tr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ve(n),l=1<<t,r|=e[t],n&=~l;return r}function hf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ve(o),u=1<<i,s=l[i];s===-1?(!(u&t)||u&r)&&(l[i]=hf(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ys(){var e=Hr;return Hr<<=1,!(Hr&4194240)&&(Hr=64),e}function _l(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function $r(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ve(n),e[n]=t}function vf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Ve(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function pi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ve(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var F=0;function Ss(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ws,hi,ks,xs,Cs,go=!1,Kr=[],Pn=null,zn=null,Nn=null,yr=new Map,Sr=new Map,xn=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,n){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":yr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(n.pointerId)}}function Yt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=Dr(n),n!==null&&hi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function yf(e,n,t,r,l){switch(n){case"focusin":return Pn=Yt(Pn,e,n,t,r,l),!0;case"dragenter":return zn=Yt(zn,e,n,t,r,l),!0;case"mouseover":return Nn=Yt(Nn,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return yr.set(o,Yt(yr.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Sr.set(o,Yt(Sr.get(o)||null,e,n,t,r,l)),!0}return!1}function Es(e){var n=Vn(e.target);if(n!==null){var t=rt(n);if(t!==null){if(n=t.tag,n===13){if(n=ds(t),n!==null){e.blockedOn=n,Cs(e.priority,function(){ks(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function s0(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=yo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);fo=r,t.target.dispatchEvent(r),fo=null}else return n=Dr(t),n!==null&&hi(n),e.blockedOn=t,!1;n.shift()}return!0}function vu(e,n,t){s0(e)&&t.delete(n)}function Sf(){go=!1,Pn!==null&&s0(Pn)&&(Pn=null),zn!==null&&s0(zn)&&(zn=null),Nn!==null&&s0(Nn)&&(Nn=null),yr.forEach(vu),Sr.forEach(vu)}function Xt(e,n){e.blockedOn===n&&(e.blockedOn=null,go||(go=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Sf)))}function wr(e){function n(l){return Xt(l,e)}if(0<Kr.length){Xt(Kr[0],e);for(var t=1;t<Kr.length;t++){var r=Kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&Xt(Pn,e),zn!==null&&Xt(zn,e),Nn!==null&&Xt(Nn,e),yr.forEach(n),Sr.forEach(n),t=0;t<xn.length;t++)r=xn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(t=xn[0],t.blockedOn===null);)Es(t),t.blockedOn===null&&xn.shift()}var Et=vn.ReactCurrentBatchConfig,N0=!0;function wf(e,n,t,r){var l=F,o=Et.transition;Et.transition=null;try{F=1,mi(e,n,t,r)}finally{F=l,Et.transition=o}}function kf(e,n,t,r){var l=F,o=Et.transition;Et.transition=null;try{F=4,mi(e,n,t,r)}finally{F=l,Et.transition=o}}function mi(e,n,t,r){if(N0){var l=yo(e,n,t,r);if(l===null)Ml(e,n,r,I0,t),mu(e,r);else if(yf(l,e,n,t,r))r.stopPropagation();else if(mu(e,r),n&4&&-1<gf.indexOf(e)){for(;l!==null;){var o=Dr(l);if(o!==null&&ws(o),o=yo(e,n,t,r),o===null&&Ml(e,n,r,I0,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ml(e,n,r,null,t)}}var I0=null;function yo(e,n,t,r){if(I0=null,e=fi(r),e=Vn(e),e!==null)if(n=rt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ds(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return I0=e,null}function _s(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sf()){case di:return 1;case vs:return 4;case P0:case af:return 16;case gs:return 536870912;default:return 16}default:return 16}}var En=null,vi=null,a0=null;function Ps(){if(a0)return a0;var e,n=vi,t=n.length,r,l="value"in En?En.value:En.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return a0=l.slice(e,1<r?1-r:void 0)}function c0(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function gu(){return!1}function Te(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Gr:gu,this.isPropagationStopped=gu,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),n}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=Te(Wt),Mr=G({},Wt,{view:0,detail:0}),xf=Te(Mr),Pl,zl,Zt,b0=G({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zt&&(Zt&&e.type==="mousemove"?(Pl=e.screenX-Zt.screenX,zl=e.screenY-Zt.screenY):zl=Pl=0,Zt=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),yu=Te(b0),Cf=G({},b0,{dataTransfer:0}),Ef=Te(Cf),_f=G({},Mr,{relatedTarget:0}),Nl=Te(_f),Pf=G({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),zf=Te(Pf),Nf=G({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),If=Te(Nf),Tf=G({},Wt,{data:0}),Su=Te(Tf),Rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Of[e])?!!n[e]:!1}function yi(){return $f}var Mf=G({},Mr,{key:function(e){if(e.key){var n=Rf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=c0(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yi,charCode:function(e){return e.type==="keypress"?c0(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?c0(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Df=Te(Mf),jf=G({},b0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=Te(jf),Ff=G({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yi}),Af=Te(Ff),Uf=G({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wf=Te(Uf),Bf=G({},b0,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vf=Te(Bf),Hf=[9,13,27,32],Si=dn&&"CompositionEvent"in window,ur=null;dn&&"documentMode"in document&&(ur=document.documentMode);var Qf=dn&&"TextEvent"in window&&!ur,zs=dn&&(!Si||ur&&8<ur&&11>=ur),ku=" ",xu=!1;function Ns(e,n){switch(e){case"keyup":return Hf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Is(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ct=!1;function Kf(e,n){switch(e){case"compositionend":return Is(n);case"keypress":return n.which!==32?null:(xu=!0,ku);case"textInput":return e=n.data,e===ku&&xu?null:e;default:return null}}function Gf(e,n){if(ct)return e==="compositionend"||!Si&&Ns(e,n)?(e=Ps(),a0=vi=En=null,ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zs&&n.locale!=="ko"?null:n.data;default:return null}}var Yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Yf[e.type]:n==="textarea"}function Ts(e,n,t,r){us(r),n=T0(n,"onChange"),0<n.length&&(t=new gi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var sr=null,kr=null;function Xf(e){Ws(e,0)}function el(e){var n=pt(e);if(es(n))return e}function Zf(e,n){if(e==="change")return n}var Rs=!1;if(dn){var Il;if(dn){var Tl="oninput"in document;if(!Tl){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),Tl=typeof Eu.oninput=="function"}Il=Tl}else Il=!1;Rs=Il&&(!document.documentMode||9<document.documentMode)}function _u(){sr&&(sr.detachEvent("onpropertychange",Ls),kr=sr=null)}function Ls(e){if(e.propertyName==="value"&&el(kr)){var n=[];Ts(n,kr,e,fi(e)),fs(Xf,n)}}function Jf(e,n,t){e==="focusin"?(_u(),sr=n,kr=t,sr.attachEvent("onpropertychange",Ls)):e==="focusout"&&_u()}function qf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(kr)}function bf(e,n){if(e==="click")return el(n)}function e2(e,n){if(e==="input"||e==="change")return el(n)}function n2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ke=typeof Object.is=="function"?Object.is:n2;function xr(e,n){if(Ke(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!bl.call(n,l)||!Ke(e[l],n[l]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,n){var t=Pu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pu(t)}}function Os(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Os(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $s(){for(var e=window,n=C0();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=C0(e.document)}return n}function wi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function t2(e){var n=$s(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Os(t.ownerDocument.documentElement,t)){if(r!==null&&wi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=zu(t,o);var i=zu(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var r2=dn&&"documentMode"in document&&11>=document.documentMode,ft=null,So=null,ar=null,wo=!1;function Nu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;wo||ft==null||ft!==C0(r)||(r=ft,"selectionStart"in r&&wi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ar&&xr(ar,r)||(ar=r,r=T0(So,"onSelect"),0<r.length&&(n=new gi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ft)))}function Yr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var dt={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionend:Yr("Transition","TransitionEnd")},Rl={},Ms={};dn&&(Ms=document.createElement("div").style,"AnimationEvent"in window||(delete dt.animationend.animation,delete dt.animationiteration.animation,delete dt.animationstart.animation),"TransitionEvent"in window||delete dt.transitionend.transition);function nl(e){if(Rl[e])return Rl[e];if(!dt[e])return e;var n=dt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ms)return Rl[e]=n[t];return e}var Ds=nl("animationend"),js=nl("animationiteration"),Fs=nl("animationstart"),As=nl("transitionend"),Us=new Map,Iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,n){Us.set(e,n),tt(n,[e])}for(var Ll=0;Ll<Iu.length;Ll++){var Ol=Iu[Ll],l2=Ol.toLowerCase(),o2=Ol[0].toUpperCase()+Ol.slice(1);Dn(l2,"on"+o2)}Dn(Ds,"onAnimationEnd");Dn(js,"onAnimationIteration");Dn(Fs,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(As,"onTransitionEnd");Nt("onMouseEnter",["mouseout","mouseover"]);Nt("onMouseLeave",["mouseout","mouseover"]);Nt("onPointerEnter",["pointerout","pointerover"]);Nt("onPointerLeave",["pointerout","pointerover"]);tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i2=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function Tu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,rf(r,n,void 0,e),e.currentTarget=null}function Ws(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,d=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;Tu(l,u,d),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,d=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;Tu(l,u,d),o=s}}}if(_0)throw e=mo,_0=!1,mo=null,e}function W(e,n){var t=n[_o];t===void 0&&(t=n[_o]=new Set);var r=e+"__bubble";t.has(r)||(Bs(n,e,2,!1),t.add(r))}function $l(e,n,t){var r=0;n&&(r|=4),Bs(t,e,r,n)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[Xr]){e[Xr]=!0,X1.forEach(function(t){t!=="selectionchange"&&(i2.has(t)||$l(t,!1,e),$l(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xr]||(n[Xr]=!0,$l("selectionchange",!1,n))}}function Bs(e,n,t,r){switch(_s(n)){case 1:var l=wf;break;case 4:l=kf;break;default:l=mi}t=l.bind(null,n,t,e),l=void 0,!ho||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Ml(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Vn(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}fs(function(){var d=o,v=fi(t),m=[];e:{var h=Us.get(e);if(h!==void 0){var y=gi,w=e;switch(e){case"keypress":if(c0(t)===0)break e;case"keydown":case"keyup":y=Df;break;case"focusin":w="focus",y=Nl;break;case"focusout":w="blur",y=Nl;break;case"beforeblur":case"afterblur":y=Nl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Af;break;case Ds:case js:case Fs:y=zf;break;case As:y=Wf;break;case"scroll":y=xf;break;case"wheel":y=Vf;break;case"copy":case"cut":case"paste":y=If;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wu}var p=(n&4)!==0,E=!p&&e==="scroll",c=p?h!==null?h+"Capture":null:h;p=[];for(var a=d,f;a!==null;){f=a;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,c!==null&&(g=gr(a,c),g!=null&&p.push(Er(a,g,f)))),E)break;a=a.return}0<p.length&&(h=new y(h,w,null,t,v),m.push({event:h,listeners:p}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==fo&&(w=t.relatedTarget||t.fromElement)&&(Vn(w)||w[pn]))break e;if((y||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=t.relatedTarget||t.toElement,y=d,w=w?Vn(w):null,w!==null&&(E=rt(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=d),y!==w)){if(p=yu,g="onMouseLeave",c="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(p=wu,g="onPointerLeave",c="onPointerEnter",a="pointer"),E=y==null?h:pt(y),f=w==null?h:pt(w),h=new p(g,a+"leave",y,t,v),h.target=E,h.relatedTarget=f,g=null,Vn(v)===d&&(p=new p(c,a+"enter",w,t,v),p.target=f,p.relatedTarget=E,g=p),E=g,y&&w)n:{for(p=y,c=w,a=0,f=p;f;f=ot(f))a++;for(f=0,g=c;g;g=ot(g))f++;for(;0<a-f;)p=ot(p),a--;for(;0<f-a;)c=ot(c),f--;for(;a--;){if(p===c||c!==null&&p===c.alternate)break n;p=ot(p),c=ot(c)}p=null}else p=null;y!==null&&Ru(m,h,y,p,!1),w!==null&&E!==null&&Ru(m,E,w,p,!0)}}e:{if(h=d?pt(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var S=Zf;else if(Cu(h))if(Rs)S=e2;else{S=qf;var x=Jf}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=bf);if(S&&(S=S(e,d))){Ts(m,S,t,v);break e}x&&x(e,h,d),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&io(h,"number",h.value)}switch(x=d?pt(d):window,e){case"focusin":(Cu(x)||x.contentEditable==="true")&&(ft=x,So=d,ar=null);break;case"focusout":ar=So=ft=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,Nu(m,t,v);break;case"selectionchange":if(r2)break;case"keydown":case"keyup":Nu(m,t,v)}var k;if(Si)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ct?Ns(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(zs&&t.locale!=="ko"&&(ct||P!=="onCompositionStart"?P==="onCompositionEnd"&&ct&&(k=Ps()):(En=v,vi="value"in En?En.value:En.textContent,ct=!0)),x=T0(d,P),0<x.length&&(P=new Su(P,e,null,t,v),m.push({event:P,listeners:x}),k?P.data=k:(k=Is(t),k!==null&&(P.data=k)))),(k=Qf?Kf(e,t):Gf(e,t))&&(d=T0(d,"onBeforeInput"),0<d.length&&(v=new Su("onBeforeInput","beforeinput",null,t,v),m.push({event:v,listeners:d}),v.data=k))}Ws(m,n)})}function Er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function T0(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=gr(e,t),o!=null&&r.unshift(Er(e,o,l)),o=gr(e,n),o!=null&&r.push(Er(e,o,l))),e=e.return}return r}function ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ru(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var u=t,s=u.alternate,d=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&d!==null&&(u=d,l?(s=gr(t,o),s!=null&&i.unshift(Er(t,s,u))):l||(s=gr(t,o),s!=null&&i.push(Er(t,s,u)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var u2=/\r\n?/g,s2=/\u0000|\uFFFD/g;function Lu(e){return(typeof e=="string"?e:""+e).replace(u2,`
`).replace(s2,"")}function Zr(e,n,t){if(n=Lu(n),Lu(e)!==n&&t)throw Error(C(425))}function R0(){}var ko=null,xo=null;function Co(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Eo=typeof setTimeout=="function"?setTimeout:void 0,a2=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,c2=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(f2)}:Eo;function f2(e){setTimeout(function(){throw e})}function Dl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),wr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);wr(n)}function In(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function $u(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Bt=Math.random().toString(36).slice(2),qe="__reactFiber$"+Bt,_r="__reactProps$"+Bt,pn="__reactContainer$"+Bt,_o="__reactEvents$"+Bt,d2="__reactListeners$"+Bt,p2="__reactHandles$"+Bt;function Vn(e){var n=e[qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[pn]||t[qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=$u(e);e!==null;){if(t=e[qe])return t;e=$u(e)}return n}e=t,t=e.parentNode}return null}function Dr(e){return e=e[qe]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function tl(e){return e[_r]||null}var Po=[],ht=-1;function jn(e){return{current:e}}function V(e){0>ht||(e.current=Po[ht],Po[ht]=null,ht--)}function U(e,n){ht++,Po[ht]=e.current,e.current=n}var Mn={},de=jn(Mn),we=jn(!1),Jn=Mn;function It(e,n){var t=e.type.contextTypes;if(!t)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function L0(){V(we),V(de)}function Mu(e,n,t){if(de.current!==Mn)throw Error(C(168));U(de,n),U(we,t)}function Vs(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(C(108,Zc(e)||"Unknown",l));return G({},t,r)}function O0(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,Jn=de.current,U(de,e),U(we,we.current),!0}function Du(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=Vs(e,n,Jn),r.__reactInternalMemoizedMergedChildContext=e,V(we),V(de),U(de,e)):V(we),U(we,t)}var sn=null,rl=!1,jl=!1;function Hs(e){sn===null?sn=[e]:sn.push(e)}function h2(e){rl=!0,Hs(e)}function Fn(){if(!jl&&sn!==null){jl=!0;var e=0,n=F;try{var t=sn;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}sn=null,rl=!1}catch(l){throw sn!==null&&(sn=sn.slice(e+1)),ms(di,Fn),l}finally{F=n,jl=!1}}return null}var mt=[],vt=0,$0=null,M0=0,Re=[],Le=0,qn=null,an=1,cn="";function Wn(e,n){mt[vt++]=M0,mt[vt++]=$0,$0=e,M0=n}function Qs(e,n,t){Re[Le++]=an,Re[Le++]=cn,Re[Le++]=qn,qn=e;var r=an;e=cn;var l=32-Ve(r)-1;r&=~(1<<l),t+=1;var o=32-Ve(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,an=1<<32-Ve(n)+l|t<<l|r,cn=o+e}else an=1<<o|t<<l|r,cn=e}function ki(e){e.return!==null&&(Wn(e,1),Qs(e,1,0))}function xi(e){for(;e===$0;)$0=mt[--vt],mt[vt]=null,M0=mt[--vt],mt[vt]=null;for(;e===qn;)qn=Re[--Le],Re[Le]=null,cn=Re[--Le],Re[Le]=null,an=Re[--Le],Re[Le]=null}var ze=null,Pe=null,H=!1,Be=null;function Ks(e,n){var t=Oe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ju(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,Pe=In(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=qn!==null?{id:an,overflow:cn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Oe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,Pe=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function No(e){if(H){var n=Pe;if(n){var t=n;if(!ju(e,n)){if(zo(e))throw Error(C(418));n=In(t.nextSibling);var r=ze;n&&ju(e,n)?Ks(r,t):(e.flags=e.flags&-4097|2,H=!1,ze=e)}}else{if(zo(e))throw Error(C(418));e.flags=e.flags&-4097|2,H=!1,ze=e}}}function Fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Jr(e){if(e!==ze)return!1;if(!H)return Fu(e),H=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Co(e.type,e.memoizedProps)),n&&(n=Pe)){if(zo(e))throw Gs(),Error(C(418));for(;n;)Ks(e,n),n=In(n.nextSibling)}if(Fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=In(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=ze?In(e.stateNode.nextSibling):null;return!0}function Gs(){for(var e=Pe;e;)e=In(e.nextSibling)}function Tt(){Pe=ze=null,H=!1}function Ci(e){Be===null?Be=[e]:Be.push(e)}var m2=vn.ReactCurrentBatchConfig;function Jt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function qr(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Au(e){var n=e._init;return n(e._payload)}function Ys(e){function n(c,a){if(e){var f=c.deletions;f===null?(c.deletions=[a],c.flags|=16):f.push(a)}}function t(c,a){if(!e)return null;for(;a!==null;)n(c,a),a=a.sibling;return null}function r(c,a){for(c=new Map;a!==null;)a.key!==null?c.set(a.key,a):c.set(a.index,a),a=a.sibling;return c}function l(c,a){return c=On(c,a),c.index=0,c.sibling=null,c}function o(c,a,f){return c.index=f,e?(f=c.alternate,f!==null?(f=f.index,f<a?(c.flags|=2,a):f):(c.flags|=2,a)):(c.flags|=1048576,a)}function i(c){return e&&c.alternate===null&&(c.flags|=2),c}function u(c,a,f,g){return a===null||a.tag!==6?(a=Hl(f,c.mode,g),a.return=c,a):(a=l(a,f),a.return=c,a)}function s(c,a,f,g){var S=f.type;return S===at?v(c,a,f.props.children,g,f.key):a!==null&&(a.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===wn&&Au(S)===a.type)?(g=l(a,f.props),g.ref=Jt(c,a,f),g.return=c,g):(g=g0(f.type,f.key,f.props,null,c.mode,g),g.ref=Jt(c,a,f),g.return=c,g)}function d(c,a,f,g){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Ql(f,c.mode,g),a.return=c,a):(a=l(a,f.children||[]),a.return=c,a)}function v(c,a,f,g,S){return a===null||a.tag!==7?(a=Yn(f,c.mode,g,S),a.return=c,a):(a=l(a,f),a.return=c,a)}function m(c,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Hl(""+a,c.mode,f),a.return=c,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case Wr:return f=g0(a.type,a.key,a.props,null,c.mode,f),f.ref=Jt(c,null,a),f.return=c,f;case st:return a=Ql(a,c.mode,f),a.return=c,a;case wn:var g=a._init;return m(c,g(a._payload),f)}if(nr(a)||Kt(a))return a=Yn(a,c.mode,f,null),a.return=c,a;qr(c,a)}return null}function h(c,a,f,g){var S=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:u(c,a,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wr:return f.key===S?s(c,a,f,g):null;case st:return f.key===S?d(c,a,f,g):null;case wn:return S=f._init,h(c,a,S(f._payload),g)}if(nr(f)||Kt(f))return S!==null?null:v(c,a,f,g,null);qr(c,f)}return null}function y(c,a,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return c=c.get(f)||null,u(a,c,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wr:return c=c.get(g.key===null?f:g.key)||null,s(a,c,g,S);case st:return c=c.get(g.key===null?f:g.key)||null,d(a,c,g,S);case wn:var x=g._init;return y(c,a,f,x(g._payload),S)}if(nr(g)||Kt(g))return c=c.get(f)||null,v(a,c,g,S,null);qr(a,g)}return null}function w(c,a,f,g){for(var S=null,x=null,k=a,P=a=0,O=null;k!==null&&P<f.length;P++){k.index>P?(O=k,k=null):O=k.sibling;var T=h(c,k,f[P],g);if(T===null){k===null&&(k=O);break}e&&k&&T.alternate===null&&n(c,k),a=o(T,a,P),x===null?S=T:x.sibling=T,x=T,k=O}if(P===f.length)return t(c,k),H&&Wn(c,P),S;if(k===null){for(;P<f.length;P++)k=m(c,f[P],g),k!==null&&(a=o(k,a,P),x===null?S=k:x.sibling=k,x=k);return H&&Wn(c,P),S}for(k=r(c,k);P<f.length;P++)O=y(k,c,P,f[P],g),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?P:O.key),a=o(O,a,P),x===null?S=O:x.sibling=O,x=O);return e&&k.forEach(function(ne){return n(c,ne)}),H&&Wn(c,P),S}function p(c,a,f,g){var S=Kt(f);if(typeof S!="function")throw Error(C(150));if(f=S.call(f),f==null)throw Error(C(151));for(var x=S=null,k=a,P=a=0,O=null,T=f.next();k!==null&&!T.done;P++,T=f.next()){k.index>P?(O=k,k=null):O=k.sibling;var ne=h(c,k,T.value,g);if(ne===null){k===null&&(k=O);break}e&&k&&ne.alternate===null&&n(c,k),a=o(ne,a,P),x===null?S=ne:x.sibling=ne,x=ne,k=O}if(T.done)return t(c,k),H&&Wn(c,P),S;if(k===null){for(;!T.done;P++,T=f.next())T=m(c,T.value,g),T!==null&&(a=o(T,a,P),x===null?S=T:x.sibling=T,x=T);return H&&Wn(c,P),S}for(k=r(c,k);!T.done;P++,T=f.next())T=y(k,c,P,T.value,g),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?P:T.key),a=o(T,a,P),x===null?S=T:x.sibling=T,x=T);return e&&k.forEach(function(tn){return n(c,tn)}),H&&Wn(c,P),S}function E(c,a,f,g){if(typeof f=="object"&&f!==null&&f.type===at&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Wr:e:{for(var S=f.key,x=a;x!==null;){if(x.key===S){if(S=f.type,S===at){if(x.tag===7){t(c,x.sibling),a=l(x,f.props.children),a.return=c,c=a;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===wn&&Au(S)===x.type){t(c,x.sibling),a=l(x,f.props),a.ref=Jt(c,x,f),a.return=c,c=a;break e}t(c,x);break}else n(c,x);x=x.sibling}f.type===at?(a=Yn(f.props.children,c.mode,g,f.key),a.return=c,c=a):(g=g0(f.type,f.key,f.props,null,c.mode,g),g.ref=Jt(c,a,f),g.return=c,c=g)}return i(c);case st:e:{for(x=f.key;a!==null;){if(a.key===x)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){t(c,a.sibling),a=l(a,f.children||[]),a.return=c,c=a;break e}else{t(c,a);break}else n(c,a);a=a.sibling}a=Ql(f,c.mode,g),a.return=c,c=a}return i(c);case wn:return x=f._init,E(c,a,x(f._payload),g)}if(nr(f))return w(c,a,f,g);if(Kt(f))return p(c,a,f,g);qr(c,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(t(c,a.sibling),a=l(a,f),a.return=c,c=a):(t(c,a),a=Hl(f,c.mode,g),a.return=c,c=a),i(c)):t(c,a)}return E}var Rt=Ys(!0),Xs=Ys(!1),D0=jn(null),j0=null,gt=null,Ei=null;function _i(){Ei=gt=j0=null}function Pi(e){var n=D0.current;V(D0),e._currentValue=n}function Io(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function _t(e,n){j0=e,Ei=gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ye=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:n,next:null},gt===null){if(j0===null)throw Error(C(308));gt=e,j0.dependencies={lanes:0,firstContext:e}}else gt=gt.next=e;return n}var Hn=null;function zi(e){Hn===null?Hn=[e]:Hn.push(e)}function Zs(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,zi(n)):(t.next=l.next,l.next=t),n.interleaved=t,hn(e,r)}function hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var kn=!1;function Ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Js(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Tn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,hn(e,t)}return l=r.interleaved,l===null?(n.next=n,zi(r)):(n.next=l.next,l.next=n),r.interleaved=n,hn(e,t)}function f0(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pi(e,t)}}function Uu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function F0(e,n,t,r){var l=e.updateQueue;kn=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,d=s.next;s.next=null,i===null?o=d:i.next=d,i=s;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==i&&(u===null?v.firstBaseUpdate=d:u.next=d,v.lastBaseUpdate=s))}if(o!==null){var m=l.baseState;i=0,v=d=s=null,u=o;do{var h=u.lane,y=u.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,p=u;switch(h=n,y=t,p.tag){case 1:if(w=p.payload,typeof w=="function"){m=w.call(y,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=p.payload,h=typeof w=="function"?w.call(y,m,h):w,h==null)break e;m=G({},m,h);break e;case 2:kn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[u]:h.push(u))}else y={eventTime:y,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(d=v=y,s=m):v=v.next=y,i|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;h=u,u=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(v===null&&(s=m),l.baseState=s,l.firstBaseUpdate=d,l.lastBaseUpdate=v,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);et|=i,e.lanes=i,e.memoizedState=m}}function Wu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(C(191,l));l.call(r)}}}var jr={},en=jn(jr),Pr=jn(jr),zr=jn(jr);function Qn(e){if(e===jr)throw Error(C(174));return e}function Ii(e,n){switch(U(zr,n),U(Pr,e),U(en,jr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:so(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=so(n,e)}V(en),U(en,n)}function Lt(){V(en),V(Pr),V(zr)}function qs(e){Qn(zr.current);var n=Qn(en.current),t=so(n,e.type);n!==t&&(U(Pr,e),U(en,t))}function Ti(e){Pr.current===e&&(V(en),V(Pr))}var Q=jn(0);function A0(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fl=[];function Ri(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var d0=vn.ReactCurrentDispatcher,Al=vn.ReactCurrentBatchConfig,bn=0,K=null,b=null,te=null,U0=!1,cr=!1,Nr=0,v2=0;function ae(){throw Error(C(321))}function Li(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ke(e[t],n[t]))return!1;return!0}function Oi(e,n,t,r,l,o){if(bn=o,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,d0.current=e===null||e.memoizedState===null?w2:k2,e=t(r,l),cr){o=0;do{if(cr=!1,Nr=0,25<=o)throw Error(C(301));o+=1,te=b=null,n.updateQueue=null,d0.current=x2,e=t(r,l)}while(cr)}if(d0.current=W0,n=b!==null&&b.next!==null,bn=0,te=b=K=null,U0=!1,n)throw Error(C(300));return e}function $i(){var e=Nr!==0;return Nr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?K.memoizedState=te=e:te=te.next=e,te}function De(){if(b===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var n=te===null?K.memoizedState:te.next;if(n!==null)te=n,b=e;else{if(e===null)throw Error(C(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},te===null?K.memoizedState=te=e:te=te.next=e}return te}function Ir(e,n){return typeof n=="function"?n(e):n}function Ul(e){var n=De(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=b,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,d=o;do{var v=d.lane;if((bn&v)===v)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(u=s=m,i=r):s=s.next=m,K.lanes|=v,et|=v}d=d.next}while(d!==null&&d!==o);s===null?i=r:s.next=u,Ke(r,n.memoizedState)||(ye=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,K.lanes|=o,et|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Wl(e){var n=De(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ke(o,n.memoizedState)||(ye=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function bs(){}function ea(e,n){var t=K,r=De(),l=n(),o=!Ke(r.memoizedState,l);if(o&&(r.memoizedState=l,ye=!0),r=r.queue,Mi(ra.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,Tr(9,ta.bind(null,t,r,l,n),void 0,null),le===null)throw Error(C(349));bn&30||na(t,n,l)}return l}function na(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ta(e,n,t,r){n.value=t,n.getSnapshot=r,la(n)&&oa(e)}function ra(e,n,t){return t(function(){la(n)&&oa(e)})}function la(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ke(e,t)}catch{return!0}}function oa(e){var n=hn(e,1);n!==null&&He(n,e,1,-1)}function Bu(e){var n=Ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},n.queue=e,e=e.dispatch=S2.bind(null,K,e),[n.memoizedState,e]}function Tr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ia(){return De().memoizedState}function p0(e,n,t,r){var l=Ze();K.flags|=e,l.memoizedState=Tr(1|n,t,void 0,r===void 0?null:r)}function ll(e,n,t,r){var l=De();r=r===void 0?null:r;var o=void 0;if(b!==null){var i=b.memoizedState;if(o=i.destroy,r!==null&&Li(r,i.deps)){l.memoizedState=Tr(n,t,o,r);return}}K.flags|=e,l.memoizedState=Tr(1|n,t,o,r)}function Vu(e,n){return p0(8390656,8,e,n)}function Mi(e,n){return ll(2048,8,e,n)}function ua(e,n){return ll(4,2,e,n)}function sa(e,n){return ll(4,4,e,n)}function aa(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ca(e,n,t){return t=t!=null?t.concat([e]):null,ll(4,4,aa.bind(null,n,e),t)}function Di(){}function fa(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Li(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function da(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Li(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function pa(e,n,t){return bn&21?(Ke(t,n)||(t=ys(),K.lanes|=t,et|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=t)}function g2(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),n()}finally{F=t,Al.transition=r}}function ha(){return De().memoizedState}function y2(e,n,t){var r=Ln(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ma(e))va(n,t);else if(t=Zs(e,n,t,r),t!==null){var l=he();He(t,e,r,l),ga(t,n,r)}}function S2(e,n,t){var r=Ln(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ma(e))va(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,u=o(i,t);if(l.hasEagerState=!0,l.eagerState=u,Ke(u,i)){var s=n.interleaved;s===null?(l.next=l,zi(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=Zs(e,n,l,r),t!==null&&(l=he(),He(t,e,r,l),ga(t,n,r))}}function ma(e){var n=e.alternate;return e===K||n!==null&&n===K}function va(e,n){cr=U0=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ga(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pi(e,t)}}var W0={readContext:Me,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},w2={readContext:Me,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:Vu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,p0(4194308,4,aa.bind(null,n,e),t)},useLayoutEffect:function(e,n){return p0(4194308,4,e,n)},useInsertionEffect:function(e,n){return p0(4,2,e,n)},useMemo:function(e,n){var t=Ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ze();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=y2.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:Bu,useDebugValue:Di,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Bu(!1),n=e[0];return e=g2.bind(null,e[1]),Ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=K,l=Ze();if(H){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),le===null)throw Error(C(349));bn&30||na(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Vu(ra.bind(null,r,o,e),[e]),r.flags|=2048,Tr(9,ta.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ze(),n=le.identifierPrefix;if(H){var t=cn,r=an;t=(r&~(1<<32-Ve(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Nr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=v2++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},k2={readContext:Me,useCallback:fa,useContext:Me,useEffect:Mi,useImperativeHandle:ca,useInsertionEffect:ua,useLayoutEffect:sa,useMemo:da,useReducer:Ul,useRef:ia,useState:function(){return Ul(Ir)},useDebugValue:Di,useDeferredValue:function(e){var n=De();return pa(n,b.memoizedState,e)},useTransition:function(){var e=Ul(Ir)[0],n=De().memoizedState;return[e,n]},useMutableSource:bs,useSyncExternalStore:ea,useId:ha,unstable_isNewReconciler:!1},x2={readContext:Me,useCallback:fa,useContext:Me,useEffect:Mi,useImperativeHandle:ca,useInsertionEffect:ua,useLayoutEffect:sa,useMemo:da,useReducer:Wl,useRef:ia,useState:function(){return Wl(Ir)},useDebugValue:Di,useDeferredValue:function(e){var n=De();return b===null?n.memoizedState=e:pa(n,b.memoizedState,e)},useTransition:function(){var e=Wl(Ir)[0],n=De().memoizedState;return[e,n]},useMutableSource:bs,useSyncExternalStore:ea,useId:ha,unstable_isNewReconciler:!1};function Ue(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function To(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ol={isMounted:function(e){return(e=e._reactInternals)?rt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=he(),l=Ln(e),o=fn(r,l);o.payload=n,t!=null&&(o.callback=t),n=Tn(e,o,l),n!==null&&(He(n,e,l,r),f0(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=he(),l=Ln(e),o=fn(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Tn(e,o,l),n!==null&&(He(n,e,l,r),f0(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),r=Ln(e),l=fn(t,r);l.tag=2,n!=null&&(l.callback=n),n=Tn(e,l,r),n!==null&&(He(n,e,r,t),f0(n,e,r))}};function Hu(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!xr(t,r)||!xr(l,o):!0}function ya(e,n,t){var r=!1,l=Mn,o=n.contextType;return typeof o=="object"&&o!==null?o=Me(o):(l=ke(n)?Jn:de.current,r=n.contextTypes,o=(r=r!=null)?It(e,l):Mn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ol,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Qu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ol.enqueueReplaceState(n,n.state,null)}function Ro(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Ni(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Me(o):(o=ke(n)?Jn:de.current,l.context=It(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(To(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ol.enqueueReplaceState(l,l.state,null),F0(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Ot(e,n){try{var t="",r=n;do t+=Xc(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Bl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Lo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var C2=typeof WeakMap=="function"?WeakMap:Map;function Sa(e,n,t){t=fn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){V0||(V0=!0,Bo=r),Lo(e,n)},t}function wa(e,n,t){t=fn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Lo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Lo(e,n),typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Ku(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new C2;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=j2.bind(null,e,n,t),n.then(e,e))}function Gu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Yu(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=fn(-1,1),n.tag=2,Tn(t,n,1))),t.lanes|=1),e)}var E2=vn.ReactCurrentOwner,ye=!1;function pe(e,n,t,r){n.child=e===null?Xs(n,null,t,r):Rt(n,e.child,t,r)}function Xu(e,n,t,r,l){t=t.render;var o=n.ref;return _t(n,l),r=Oi(e,n,t,r,o,l),t=$i(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,mn(e,n,l)):(H&&t&&ki(n),n.flags|=1,pe(e,n,r,l),n.child)}function Zu(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Hi(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,ka(e,n,o,r,l)):(e=g0(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:xr,t(i,r)&&e.ref===n.ref)return mn(e,n,l)}return n.flags|=1,e=On(o,r),e.ref=n.ref,e.return=n,n.child=e}function ka(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(xr(o,r)&&e.ref===n.ref)if(ye=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return n.lanes=e.lanes,mn(e,n,l)}return Oo(e,n,t,r,l)}function xa(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(St,_e),_e|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(St,_e),_e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,U(St,_e),_e|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,U(St,_e),_e|=r;return pe(e,n,l,t),n.child}function Ca(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Oo(e,n,t,r,l){var o=ke(t)?Jn:de.current;return o=It(n,o),_t(n,l),t=Oi(e,n,t,r,o,l),r=$i(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,mn(e,n,l)):(H&&r&&ki(n),n.flags|=1,pe(e,n,t,l),n.child)}function Ju(e,n,t,r,l){if(ke(t)){var o=!0;O0(n)}else o=!1;if(_t(n,l),n.stateNode===null)h0(e,n),ya(n,t,r),Ro(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,u=n.memoizedProps;i.props=u;var s=i.context,d=t.contextType;typeof d=="object"&&d!==null?d=Me(d):(d=ke(t)?Jn:de.current,d=It(n,d));var v=t.getDerivedStateFromProps,m=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==d)&&Qu(n,i,r,d),kn=!1;var h=n.memoizedState;i.state=h,F0(n,r,i,l),s=n.memoizedState,u!==r||h!==s||we.current||kn?(typeof v=="function"&&(To(n,t,v,r),s=n.memoizedState),(u=kn||Hu(n,t,u,r,h,s,d))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=d,r=u):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Js(e,n),u=n.memoizedProps,d=n.type===n.elementType?u:Ue(n.type,u),i.props=d,m=n.pendingProps,h=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=ke(t)?Jn:de.current,s=It(n,s));var y=t.getDerivedStateFromProps;(v=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==m||h!==s)&&Qu(n,i,r,s),kn=!1,h=n.memoizedState,i.state=h,F0(n,r,i,l);var w=n.memoizedState;u!==m||h!==w||we.current||kn?(typeof y=="function"&&(To(n,t,y,r),w=n.memoizedState),(d=kn||Hu(n,t,d,r,h,w,s)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),i.props=r,i.state=w,i.context=s,r=d):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return $o(e,n,t,r,o,l)}function $o(e,n,t,r,l,o){Ca(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&Du(n,t,!1),mn(e,n,o);r=n.stateNode,E2.current=n;var u=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Rt(n,e.child,null,o),n.child=Rt(n,null,u,o)):pe(e,n,u,o),n.memoizedState=r.state,l&&Du(n,t,!0),n.child}function Ea(e){var n=e.stateNode;n.pendingContext?Mu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Mu(e,n.context,!1),Ii(e,n.containerInfo)}function qu(e,n,t,r,l){return Tt(),Ci(l),n.flags|=256,pe(e,n,t,r),n.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function Do(e){return{baseLanes:e,cachePool:null,transitions:null}}function _a(e,n,t){var r=n.pendingProps,l=Q.current,o=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(Q,l&1),e===null)return No(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=sl(i,r,0,null),e=Yn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Do(t),n.memoizedState=Mo,e):ji(n,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return _2(e,n,i,r,u,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=On(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=On(u,o):(o=Yn(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Do(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Mo,r}return o=e.child,e=o.sibling,r=On(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ji(e,n){return n=sl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function br(e,n,t,r){return r!==null&&Ci(r),Rt(n,e.child,null,t),e=ji(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _2(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Bl(Error(C(422))),br(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=sl({mode:"visible",children:r.children},l,0,null),o=Yn(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Rt(n,e.child,null,i),n.child.memoizedState=Do(i),n.memoizedState=Mo,o);if(!(n.mode&1))return br(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(C(419)),r=Bl(o,r,void 0),br(e,n,i,r)}if(u=(i&e.childLanes)!==0,ye||u){if(r=le,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,hn(e,l),He(r,e,l,-1))}return Vi(),r=Bl(Error(C(421))),br(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=F2.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,Pe=In(l.nextSibling),ze=n,H=!0,Be=null,e!==null&&(Re[Le++]=an,Re[Le++]=cn,Re[Le++]=qn,an=e.id,cn=e.overflow,qn=n),n=ji(n,r.children),n.flags|=4096,n)}function bu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Io(e.return,n,t)}function Vl(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function Pa(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(pe(e,n,r.children,t),r=Q.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bu(e,t,n);else if(e.tag===19)bu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&A0(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Vl(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&A0(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Vl(n,!0,t,null,o);break;case"together":Vl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function h0(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function mn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),et|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=On(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=On(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function P2(e,n,t){switch(n.tag){case 3:Ea(n),Tt();break;case 5:qs(n);break;case 1:ke(n.type)&&O0(n);break;case 4:Ii(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;U(D0,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),n.flags|=128,null):t&n.child.childLanes?_a(e,n,t):(U(Q,Q.current&1),e=mn(e,n,t),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Pa(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return n.lanes=0,xa(e,n,t)}return mn(e,n,t)}var za,jo,Na,Ia;za=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};jo=function(){};Na=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Qn(en.current);var o=null;switch(t){case"input":l=lo(e,l),r=lo(e,r),o=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":l=uo(e,l),r=uo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=R0)}ao(t,r);var i;t=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var u=l[d];for(i in u)u.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(mr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(u=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&s!==u&&(s!=null||u!=null))if(d==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(d,t)),t=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(mr.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&W("scroll",e),o||u===s||(o=[])):(o=o||[]).push(d,s))}t&&(o=o||[]).push("style",t);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};Ia=function(e,n,t,r){t!==r&&(n.flags|=4)};function qt(e,n){if(!H)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function z2(e,n,t){var r=n.pendingProps;switch(xi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(n),null;case 1:return ke(n.type)&&L0(),ce(n),null;case 3:return r=n.stateNode,Lt(),V(we),V(de),Ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(Qo(Be),Be=null))),jo(e,n),ce(n),null;case 5:Ti(n);var l=Qn(zr.current);if(t=n.type,e!==null&&n.stateNode!=null)Na(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return ce(n),null}if(e=Qn(en.current),Jr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[qe]=n,r[_r]=o,e=(n.mode&1)!==0,t){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<rr.length;l++)W(rr[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":su(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":cu(r,o),W("invalid",r)}ao(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Zr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Zr(r.textContent,u,e),l=["children",""+u]):mr.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&W("scroll",r)}switch(t){case"input":Br(r),au(r,o,!0);break;case"textarea":Br(r),fu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=R0)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[qe]=n,e[_r]=r,za(e,n,!1,!1),n.stateNode=e;e:{switch(i=co(t,r),t){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<rr.length;l++)W(rr[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":su(e,r),l=lo(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),W("invalid",e);break;case"textarea":cu(e,r),l=uo(e,r),W("invalid",e);break;default:l=r}ao(t,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?is(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ls(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&vr(e,s):typeof s=="number"&&vr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&W("scroll",e):s!=null&&ui(e,o,s,i))}switch(t){case"input":Br(e),au(e,r,!1);break;case"textarea":Br(e),fu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kt(e,!!r.multiple,o,!1):r.defaultValue!=null&&kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=R0)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ce(n),null;case 6:if(e&&n.stateNode!=null)Ia(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=Qn(zr.current),Qn(en.current),Jr(n)){if(r=n.stateNode,t=n.memoizedProps,r[qe]=n,(o=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:Zr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[qe]=n,n.stateNode=r}return ce(n),null;case 13:if(V(Q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Pe!==null&&n.mode&1&&!(n.flags&128))Gs(),Tt(),n.flags|=98560,o=!1;else if(o=Jr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[qe]=n}else Tt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ce(n),o=!1}else Be!==null&&(Qo(Be),Be=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?ee===0&&(ee=3):Vi())),n.updateQueue!==null&&(n.flags|=4),ce(n),null);case 4:return Lt(),jo(e,n),e===null&&Cr(n.stateNode.containerInfo),ce(n),null;case 10:return Pi(n.type._context),ce(n),null;case 17:return ke(n.type)&&L0(),ce(n),null;case 19:if(V(Q),o=n.memoizedState,o===null)return ce(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)qt(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=A0(e),i!==null){for(n.flags|=128,qt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(Q,Q.current&1|2),n.child}e=e.sibling}o.tail!==null&&X()>$t&&(n.flags|=128,r=!0,qt(o,!1),n.lanes=4194304)}else{if(!r)if(e=A0(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),qt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!H)return ce(n),null}else 2*X()-o.renderingStartTime>$t&&t!==1073741824&&(n.flags|=128,r=!0,qt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=X(),n.sibling=null,t=Q.current,U(Q,r?t&1|2:t&1),n):(ce(n),null);case 22:case 23:return Bi(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?_e&1073741824&&(ce(n),n.subtreeFlags&6&&(n.flags|=8192)):ce(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function N2(e,n){switch(xi(n),n.tag){case 1:return ke(n.type)&&L0(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Lt(),V(we),V(de),Ri(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ti(n),null;case 13:if(V(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));Tt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(Q),null;case 4:return Lt(),null;case 10:return Pi(n.type._context),null;case 22:case 23:return Bi(),null;case 24:return null;default:return null}}var e0=!1,fe=!1,I2=typeof WeakSet=="function"?WeakSet:Set,z=null;function yt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Y(e,n,r)}else t.current=null}function Fo(e,n,t){try{t()}catch(r){Y(e,n,r)}}var e1=!1;function T2(e,n){if(ko=N0,e=$s(),wi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,u=-1,s=-1,d=0,v=0,m=e,h=null;n:for(;;){for(var y;m!==t||l!==0&&m.nodeType!==3||(u=i+l),m!==o||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break n;if(h===t&&++d===l&&(u=i),h===o&&++v===r&&(s=i),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(xo={focusedElem:e,selectionRange:t},N0=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var p=w.memoizedProps,E=w.memoizedState,c=n.stateNode,a=c.getSnapshotBeforeUpdate(n.elementType===n.type?p:Ue(n.type,p),E);c.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(g){Y(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return w=e1,e1=!1,w}function fr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Fo(n,t,o)}l=l.next}while(l!==r)}}function il(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ao(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ta(e){var n=e.alternate;n!==null&&(e.alternate=null,Ta(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qe],delete n[_r],delete n[_o],delete n[d2],delete n[p2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ra(e){return e.tag===5||e.tag===3||e.tag===4}function n1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ra(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=R0));else if(r!==4&&(e=e.child,e!==null))for(Uo(e,n,t),e=e.sibling;e!==null;)Uo(e,n,t),e=e.sibling}function Wo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wo(e,n,t),e=e.sibling;e!==null;)Wo(e,n,t),e=e.sibling}var ie=null,We=!1;function yn(e,n,t){for(t=t.child;t!==null;)La(e,n,t),t=t.sibling}function La(e,n,t){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(q0,t)}catch{}switch(t.tag){case 5:fe||yt(t,n);case 6:var r=ie,l=We;ie=null,yn(e,n,t),ie=r,We=l,ie!==null&&(We?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(We?(e=ie,t=t.stateNode,e.nodeType===8?Dl(e.parentNode,t):e.nodeType===1&&Dl(e,t),wr(e)):Dl(ie,t.stateNode));break;case 4:r=ie,l=We,ie=t.stateNode.containerInfo,We=!0,yn(e,n,t),ie=r,We=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Fo(t,n,i),l=l.next}while(l!==r)}yn(e,n,t);break;case 1:if(!fe&&(yt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){Y(t,n,u)}yn(e,n,t);break;case 21:yn(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,yn(e,n,t),fe=r):yn(e,n,t);break;default:yn(e,n,t)}}function t1(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new I2),n.forEach(function(r){var l=A2.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ae(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,u=i;e:for(;u!==null;){switch(u.tag){case 5:ie=u.stateNode,We=!1;break e;case 3:ie=u.stateNode.containerInfo,We=!0;break e;case 4:ie=u.stateNode.containerInfo,We=!0;break e}u=u.return}if(ie===null)throw Error(C(160));La(o,i,l),ie=null,We=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(d){Y(l,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Oa(n,e),n=n.sibling}function Oa(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(n,e),Xe(e),r&4){try{fr(3,e,e.return),il(3,e)}catch(p){Y(e,e.return,p)}try{fr(5,e,e.return)}catch(p){Y(e,e.return,p)}}break;case 1:Ae(n,e),Xe(e),r&512&&t!==null&&yt(t,t.return);break;case 5:if(Ae(n,e),Xe(e),r&512&&t!==null&&yt(t,t.return),e.flags&32){var l=e.stateNode;try{vr(l,"")}catch(p){Y(e,e.return,p)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&ns(l,o),co(u,i);var d=co(u,o);for(i=0;i<s.length;i+=2){var v=s[i],m=s[i+1];v==="style"?is(l,m):v==="dangerouslySetInnerHTML"?ls(l,m):v==="children"?vr(l,m):ui(l,v,m,d)}switch(u){case"input":oo(l,o);break;case"textarea":ts(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?kt(l,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?kt(l,!!o.multiple,o.defaultValue,!0):kt(l,!!o.multiple,o.multiple?[]:"",!1))}l[_r]=o}catch(p){Y(e,e.return,p)}}break;case 6:if(Ae(n,e),Xe(e),r&4){if(e.stateNode===null)throw Error(C(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(p){Y(e,e.return,p)}}break;case 3:if(Ae(n,e),Xe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{wr(n.containerInfo)}catch(p){Y(e,e.return,p)}break;case 4:Ae(n,e),Xe(e);break;case 13:Ae(n,e),Xe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ui=X())),r&4&&t1(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(d=fe)||v,Ae(n,e),fe=d):Ae(n,e),Xe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(z=e,v=e.child;v!==null;){for(m=z=v;z!==null;){switch(h=z,y=h.child,h.tag){case 0:case 11:case 14:case 15:fr(4,h,h.return);break;case 1:yt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(p){Y(r,t,p)}}break;case 5:yt(h,h.return);break;case 22:if(h.memoizedState!==null){l1(m);continue}}y!==null?(y.return=h,z=y):l1(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{l=m.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=os("display",i))}catch(p){Y(e,e.return,p)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(p){Y(e,e.return,p)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ae(n,e),Xe(e),r&4&&t1(e);break;case 21:break;default:Ae(n,e),Xe(e)}}function Xe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ra(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(vr(l,""),r.flags&=-33);var o=n1(e);Wo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=n1(e);Uo(e,u,i);break;default:throw Error(C(161))}}catch(s){Y(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function R2(e,n,t){z=e,$a(e)}function $a(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var l=z,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||e0;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||fe;u=e0;var d=fe;if(e0=i,(fe=s)&&!d)for(z=l;z!==null;)i=z,s=i.child,i.tag===22&&i.memoizedState!==null?o1(l):s!==null?(s.return=i,z=s):o1(l);for(;o!==null;)z=o,$a(o),o=o.sibling;z=l,e0=u,fe=d}r1(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,z=o):r1(e)}}function r1(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||il(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Ue(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Wu(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Wu(n,i,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&wr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}fe||n.flags&512&&Ao(n)}catch(h){Y(n,n.return,h)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function l1(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function o1(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{il(4,n)}catch(s){Y(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){Y(n,l,s)}}var o=n.return;try{Ao(n)}catch(s){Y(n,o,s)}break;case 5:var i=n.return;try{Ao(n)}catch(s){Y(n,i,s)}}}catch(s){Y(n,n.return,s)}if(n===e){z=null;break}var u=n.sibling;if(u!==null){u.return=n.return,z=u;break}z=n.return}}var L2=Math.ceil,B0=vn.ReactCurrentDispatcher,Fi=vn.ReactCurrentOwner,$e=vn.ReactCurrentBatchConfig,$=0,le=null,q=null,ue=0,_e=0,St=jn(0),ee=0,Rr=null,et=0,ul=0,Ai=0,dr=null,ge=null,Ui=0,$t=1/0,on=null,V0=!1,Bo=null,Rn=null,n0=!1,_n=null,H0=0,pr=0,Vo=null,m0=-1,v0=0;function he(){return $&6?X():m0!==-1?m0:m0=X()}function Ln(e){return e.mode&1?$&2&&ue!==0?ue&-ue:m2.transition!==null?(v0===0&&(v0=ys()),v0):(e=F,e!==0||(e=window.event,e=e===void 0?16:_s(e.type)),e):1}function He(e,n,t,r){if(50<pr)throw pr=0,Vo=null,Error(C(185));$r(e,t,r),(!($&2)||e!==le)&&(e===le&&(!($&2)&&(ul|=t),ee===4&&Cn(e,ue)),xe(e,r),t===1&&$===0&&!(n.mode&1)&&($t=X()+500,rl&&Fn()))}function xe(e,n){var t=e.callbackNode;mf(e,n);var r=z0(e,e===le?ue:0);if(r===0)t!==null&&hu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&hu(t),n===1)e.tag===0?h2(i1.bind(null,e)):Hs(i1.bind(null,e)),c2(function(){!($&6)&&Fn()}),t=null;else{switch(Ss(r)){case 1:t=di;break;case 4:t=vs;break;case 16:t=P0;break;case 536870912:t=gs;break;default:t=P0}t=Ba(t,Ma.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ma(e,n){if(m0=-1,v0=0,$&6)throw Error(C(327));var t=e.callbackNode;if(Pt()&&e.callbackNode!==t)return null;var r=z0(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Q0(e,r);else{n=r;var l=$;$|=2;var o=ja();(le!==e||ue!==n)&&(on=null,$t=X()+500,Gn(e,n));do try{M2();break}catch(u){Da(e,u)}while(!0);_i(),B0.current=o,$=l,q!==null?n=0:(le=null,ue=0,n=ee)}if(n!==0){if(n===2&&(l=vo(e),l!==0&&(r=l,n=Ho(e,l))),n===1)throw t=Rr,Gn(e,0),Cn(e,r),xe(e,X()),t;if(n===6)Cn(e,r);else{if(l=e.current.alternate,!(r&30)&&!O2(l)&&(n=Q0(e,r),n===2&&(o=vo(e),o!==0&&(r=o,n=Ho(e,o))),n===1))throw t=Rr,Gn(e,0),Cn(e,r),xe(e,X()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:Bn(e,ge,on);break;case 3:if(Cn(e,r),(r&130023424)===r&&(n=Ui+500-X(),10<n)){if(z0(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Eo(Bn.bind(null,e,ge,on),n);break}Bn(e,ge,on);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-Ve(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L2(r/1960))-r,10<r){e.timeoutHandle=Eo(Bn.bind(null,e,ge,on),r);break}Bn(e,ge,on);break;case 5:Bn(e,ge,on);break;default:throw Error(C(329))}}}return xe(e,X()),e.callbackNode===t?Ma.bind(null,e):null}function Ho(e,n){var t=dr;return e.current.memoizedState.isDehydrated&&(Gn(e,n).flags|=256),e=Q0(e,n),e!==2&&(n=ge,ge=t,n!==null&&Qo(n)),e}function Qo(e){ge===null?ge=e:ge.push.apply(ge,e)}function O2(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Ke(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Cn(e,n){for(n&=~Ai,n&=~ul,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ve(n),r=1<<t;e[t]=-1,n&=~r}}function i1(e){if($&6)throw Error(C(327));Pt();var n=z0(e,0);if(!(n&1))return xe(e,X()),null;var t=Q0(e,n);if(e.tag!==0&&t===2){var r=vo(e);r!==0&&(n=r,t=Ho(e,r))}if(t===1)throw t=Rr,Gn(e,0),Cn(e,n),xe(e,X()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Bn(e,ge,on),xe(e,X()),null}function Wi(e,n){var t=$;$|=1;try{return e(n)}finally{$=t,$===0&&($t=X()+500,rl&&Fn())}}function nt(e){_n!==null&&_n.tag===0&&!($&6)&&Pt();var n=$;$|=1;var t=$e.transition,r=F;try{if($e.transition=null,F=1,e)return e()}finally{F=r,$e.transition=t,$=n,!($&6)&&Fn()}}function Bi(){_e=St.current,V(St)}function Gn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,a2(t)),q!==null)for(t=q.return;t!==null;){var r=t;switch(xi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&L0();break;case 3:Lt(),V(we),V(de),Ri();break;case 5:Ti(r);break;case 4:Lt();break;case 13:V(Q);break;case 19:V(Q);break;case 10:Pi(r.type._context);break;case 22:case 23:Bi()}t=t.return}if(le=e,q=e=On(e.current,null),ue=_e=n,ee=0,Rr=null,Ai=ul=et=0,ge=dr=null,Hn!==null){for(n=0;n<Hn.length;n++)if(t=Hn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}Hn=null}return e}function Da(e,n){do{var t=q;try{if(_i(),d0.current=W0,U0){for(var r=K.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}U0=!1}if(bn=0,te=b=K=null,cr=!1,Nr=0,Fi.current=null,t===null||t.return===null){ee=1,Rr=n,q=null;break}e:{var o=e,i=t.return,u=t,s=n;if(n=ue,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,v=u,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=Gu(i);if(y!==null){y.flags&=-257,Yu(y,i,u,o,n),y.mode&1&&Ku(o,d,n),n=y,s=d;var w=n.updateQueue;if(w===null){var p=new Set;p.add(s),n.updateQueue=p}else w.add(s);break e}else{if(!(n&1)){Ku(o,d,n),Vi();break e}s=Error(C(426))}}else if(H&&u.mode&1){var E=Gu(i);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Yu(E,i,u,o,n),Ci(Ot(s,u));break e}}o=s=Ot(s,u),ee!==4&&(ee=2),dr===null?dr=[o]:dr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var c=Sa(o,s,n);Uu(o,c);break e;case 1:u=s;var a=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Rn===null||!Rn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=wa(o,u,n);Uu(o,g);break e}}o=o.return}while(o!==null)}Aa(t)}catch(S){n=S,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function ja(){var e=B0.current;return B0.current=W0,e===null?W0:e}function Vi(){(ee===0||ee===3||ee===2)&&(ee=4),le===null||!(et&268435455)&&!(ul&268435455)||Cn(le,ue)}function Q0(e,n){var t=$;$|=2;var r=ja();(le!==e||ue!==n)&&(on=null,Gn(e,n));do try{$2();break}catch(l){Da(e,l)}while(!0);if(_i(),$=t,B0.current=r,q!==null)throw Error(C(261));return le=null,ue=0,ee}function $2(){for(;q!==null;)Fa(q)}function M2(){for(;q!==null&&!of();)Fa(q)}function Fa(e){var n=Wa(e.alternate,e,_e);e.memoizedProps=e.pendingProps,n===null?Aa(e):q=n,Fi.current=null}function Aa(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=N2(t,n),t!==null){t.flags&=32767,q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,q=null;return}}else if(t=z2(t,n,_e),t!==null){q=t;return}if(n=n.sibling,n!==null){q=n;return}q=n=e}while(n!==null);ee===0&&(ee=5)}function Bn(e,n,t){var r=F,l=$e.transition;try{$e.transition=null,F=1,D2(e,n,t,r)}finally{$e.transition=l,F=r}return null}function D2(e,n,t,r){do Pt();while(_n!==null);if($&6)throw Error(C(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(vf(e,o),e===le&&(q=le=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||n0||(n0=!0,Ba(P0,function(){return Pt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var i=F;F=1;var u=$;$|=4,Fi.current=null,T2(e,t),Oa(t,e),t2(xo),N0=!!ko,xo=ko=null,e.current=t,R2(t),uf(),$=u,F=i,$e.transition=o}else e.current=t;if(n0&&(n0=!1,_n=e,H0=l),o=e.pendingLanes,o===0&&(Rn=null),cf(t.stateNode),xe(e,X()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(V0)throw V0=!1,e=Bo,Bo=null,e;return H0&1&&e.tag!==0&&Pt(),o=e.pendingLanes,o&1?e===Vo?pr++:(pr=0,Vo=e):pr=0,Fn(),null}function Pt(){if(_n!==null){var e=Ss(H0),n=$e.transition,t=F;try{if($e.transition=null,F=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,H0=0,$&6)throw Error(C(331));var l=$;for($|=4,z=e.current;z!==null;){var o=z,i=o.child;if(z.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var d=u[s];for(z=d;z!==null;){var v=z;switch(v.tag){case 0:case 11:case 15:fr(8,v,o)}var m=v.child;if(m!==null)m.return=v,z=m;else for(;z!==null;){v=z;var h=v.sibling,y=v.return;if(Ta(v),v===d){z=null;break}if(h!==null){h.return=y,z=h;break}z=y}}}var w=o.alternate;if(w!==null){var p=w.child;if(p!==null){w.child=null;do{var E=p.sibling;p.sibling=null,p=E}while(p!==null)}}z=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,z=i;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fr(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,z=c;break e}z=o.return}}var a=e.current;for(z=a;z!==null;){i=z;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,z=f;else e:for(i=a;z!==null;){if(u=z,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:il(9,u)}}catch(S){Y(u,u.return,S)}if(u===i){z=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,z=g;break e}z=u.return}}if($=l,Fn(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(q0,e)}catch{}r=!0}return r}finally{F=t,$e.transition=n}}return!1}function u1(e,n,t){n=Ot(t,n),n=Sa(e,n,1),e=Tn(e,n,1),n=he(),e!==null&&($r(e,1,n),xe(e,n))}function Y(e,n,t){if(e.tag===3)u1(e,e,t);else for(;n!==null;){if(n.tag===3){u1(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))){e=Ot(t,e),e=wa(n,e,1),n=Tn(n,e,1),e=he(),n!==null&&($r(n,1,e),xe(n,e));break}}n=n.return}}function j2(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(ue&t)===t&&(ee===4||ee===3&&(ue&130023424)===ue&&500>X()-Ui?Gn(e,0):Ai|=t),xe(e,n)}function Ua(e,n){n===0&&(e.mode&1?(n=Qr,Qr<<=1,!(Qr&130023424)&&(Qr=4194304)):n=1);var t=he();e=hn(e,n),e!==null&&($r(e,n,t),xe(e,t))}function F2(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ua(e,t)}function A2(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),Ua(e,t)}var Wa;Wa=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||we.current)ye=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ye=!1,P2(e,n,t);ye=!!(e.flags&131072)}else ye=!1,H&&n.flags&1048576&&Qs(n,M0,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;h0(e,n),e=n.pendingProps;var l=It(n,de.current);_t(n,t),l=Oi(null,n,r,e,l,t);var o=$i();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ke(r)?(o=!0,O0(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ni(n),l.updater=ol,n.stateNode=l,l._reactInternals=n,Ro(n,r,e,t),n=$o(null,n,r,!0,o,t)):(n.tag=0,H&&o&&ki(n),pe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(h0(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=W2(r),e=Ue(r,e),l){case 0:n=Oo(null,n,r,e,t);break e;case 1:n=Ju(null,n,r,e,t);break e;case 11:n=Xu(null,n,r,e,t);break e;case 14:n=Zu(null,n,r,Ue(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ue(r,l),Oo(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ue(r,l),Ju(e,n,r,l,t);case 3:e:{if(Ea(n),e===null)throw Error(C(387));r=n.pendingProps,o=n.memoizedState,l=o.element,Js(e,n),F0(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=Ot(Error(C(423)),n),n=qu(e,n,r,t,l);break e}else if(r!==l){l=Ot(Error(C(424)),n),n=qu(e,n,r,t,l);break e}else for(Pe=In(n.stateNode.containerInfo.firstChild),ze=n,H=!0,Be=null,t=Xs(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Tt(),r===l){n=mn(e,n,t);break e}pe(e,n,r,t)}n=n.child}return n;case 5:return qs(n),e===null&&No(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Co(r,l)?i=null:o!==null&&Co(r,o)&&(n.flags|=32),Ca(e,n),pe(e,n,i,t),n.child;case 6:return e===null&&No(n),null;case 13:return _a(e,n,t);case 4:return Ii(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Rt(n,null,r,t):pe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ue(r,l),Xu(e,n,r,l,t);case 7:return pe(e,n,n.pendingProps,t),n.child;case 8:return pe(e,n,n.pendingProps.children,t),n.child;case 12:return pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,U(D0,r._currentValue),r._currentValue=i,o!==null)if(Ke(o.value,i)){if(o.children===l.children&&!we.current){n=mn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=fn(-1,t&-t),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?s.next=s:(s.next=v.next,v.next=s),d.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Io(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(C(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Io(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}pe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,_t(n,t),l=Me(l),r=r(l),n.flags|=1,pe(e,n,r,t),n.child;case 14:return r=n.type,l=Ue(r,n.pendingProps),l=Ue(r.type,l),Zu(e,n,r,l,t);case 15:return ka(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ue(r,l),h0(e,n),n.tag=1,ke(r)?(e=!0,O0(n)):e=!1,_t(n,t),ya(n,r,l),Ro(n,r,l,t),$o(null,n,r,!0,e,t);case 19:return Pa(e,n,t);case 22:return xa(e,n,t)}throw Error(C(156,n.tag))};function Ba(e,n){return ms(e,n)}function U2(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,n,t,r){return new U2(e,n,t,r)}function Hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function W2(e){if(typeof e=="function")return Hi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ai)return 11;if(e===ci)return 14}return 2}function On(e,n){var t=e.alternate;return t===null?(t=Oe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function g0(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")Hi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case at:return Yn(t.children,l,o,n);case si:i=8,l|=8;break;case eo:return e=Oe(12,t,n,l|2),e.elementType=eo,e.lanes=o,e;case no:return e=Oe(13,t,n,l),e.elementType=no,e.lanes=o,e;case to:return e=Oe(19,t,n,l),e.elementType=to,e.lanes=o,e;case q1:return sl(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z1:i=10;break e;case J1:i=9;break e;case ai:i=11;break e;case ci:i=14;break e;case wn:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=Oe(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function Yn(e,n,t,r){return e=Oe(7,e,r,n),e.lanes=t,e}function sl(e,n,t,r){return e=Oe(22,e,r,n),e.elementType=q1,e.lanes=t,e.stateNode={isHidden:!1},e}function Hl(e,n,t){return e=Oe(6,e,null,n),e.lanes=t,e}function Ql(e,n,t){return n=Oe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function B2(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Qi(e,n,t,r,l,o,i,u,s){return e=new B2(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Oe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ni(o),e}function V2(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:st,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Va(e){if(!e)return Mn;e=e._reactInternals;e:{if(rt(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(ke(t))return Vs(e,t,n)}return n}function Ha(e,n,t,r,l,o,i,u,s){return e=Qi(t,r,!0,e,l,o,i,u,s),e.context=Va(null),t=e.current,r=he(),l=Ln(t),o=fn(r,l),o.callback=n??null,Tn(t,o,l),e.current.lanes=l,$r(e,l,r),xe(e,r),e}function al(e,n,t,r){var l=n.current,o=he(),i=Ln(l);return t=Va(t),n.context===null?n.context=t:n.pendingContext=t,n=fn(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Tn(l,n,i),e!==null&&(He(e,l,i,o),f0(e,l,i)),i}function K0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function s1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ki(e,n){s1(e,n),(e=e.alternate)&&s1(e,n)}function H2(){return null}var Qa=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gi(e){this._internalRoot=e}cl.prototype.render=Gi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));al(e,n,null,null)};cl.prototype.unmount=Gi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nt(function(){al(null,e,null,null)}),n[pn]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var n=xs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<xn.length&&n!==0&&n<xn[t].priority;t++);xn.splice(t,0,e),t===0&&Es(e)}};function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function a1(){}function Q2(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=K0(i);o.call(d)}}var i=Ha(n,r,e,0,null,!1,!1,"",a1);return e._reactRootContainer=i,e[pn]=i.current,Cr(e.nodeType===8?e.parentNode:e),nt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var d=K0(s);u.call(d)}}var s=Qi(e,0,!1,null,null,!1,!1,"",a1);return e._reactRootContainer=s,e[pn]=s.current,Cr(e.nodeType===8?e.parentNode:e),nt(function(){al(n,s,t,r)}),s}function dl(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=K0(i);u.call(s)}}al(n,i,e,l)}else i=Q2(t,n,e,l,r);return K0(i)}ws=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=tr(n.pendingLanes);t!==0&&(pi(n,t|1),xe(n,X()),!($&6)&&($t=X()+500,Fn()))}break;case 13:nt(function(){var r=hn(e,1);if(r!==null){var l=he();He(r,e,1,l)}}),Ki(e,1)}};hi=function(e){if(e.tag===13){var n=hn(e,134217728);if(n!==null){var t=he();He(n,e,134217728,t)}Ki(e,134217728)}};ks=function(e){if(e.tag===13){var n=Ln(e),t=hn(e,n);if(t!==null){var r=he();He(t,e,n,r)}Ki(e,n)}};xs=function(){return F};Cs=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};po=function(e,n,t){switch(n){case"input":if(oo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=tl(r);if(!l)throw Error(C(90));es(r),oo(r,l)}}}break;case"textarea":ts(e,t);break;case"select":n=t.value,n!=null&&kt(e,!!t.multiple,n,!1)}};as=Wi;cs=nt;var K2={usingClientEntryPoint:!1,Events:[Dr,pt,tl,us,ss,Wi]},bt={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G2={bundleType:bt.bundleType,version:bt.version,rendererPackageName:bt.rendererPackageName,rendererConfig:bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ps(e),e===null?null:e.stateNode},findFiberByHostInstance:bt.findFiberByHostInstance||H2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var t0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t0.isDisabled&&t0.supportsFiber)try{q0=t0.inject(G2),be=t0}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K2;Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yi(n))throw Error(C(200));return V2(e,n,null,t)};Ie.createRoot=function(e,n){if(!Yi(e))throw Error(C(299));var t=!1,r="",l=Qa;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Qi(e,1,!1,null,null,t,!1,r,l),e[pn]=n.current,Cr(e.nodeType===8?e.parentNode:e),new Gi(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=ps(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return nt(e)};Ie.hydrate=function(e,n,t){if(!fl(n))throw Error(C(200));return dl(null,e,n,!0,t)};Ie.hydrateRoot=function(e,n,t){if(!Yi(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=Qa;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Ha(n,null,e,1,t??null,l,!1,o,i),e[pn]=n.current,Cr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new cl(n)};Ie.render=function(e,n,t){if(!fl(n))throw Error(C(200));return dl(null,e,n,!1,t)};Ie.unmountComponentAtNode=function(e){if(!fl(e))throw Error(C(40));return e._reactRootContainer?(nt(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};Ie.unstable_batchedUpdates=Wi;Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!fl(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return dl(e,n,t,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Ka(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ka)}catch(e){console.error(e)}}Ka(),K1.exports=Ie;var Y2=K1.exports,c1=Y2;ql.createRoot=c1.createRoot,ql.hydrateRoot=c1.hydrateRoot;var Se=function(){return Se=Object.assign||function(n){for(var t,r=1,l=arguments.length;r<l;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},Se.apply(this,arguments)};function G0(e,n,t){if(t||arguments.length===2)for(var r=0,l=n.length,o;r<l;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))}var B="-ms-",hr="-moz-",M="-webkit-",Ga="comm",pl="rule",Xi="decl",X2="@import",Ya="@keyframes",Z2="@layer",Xa=Math.abs,Zi=String.fromCharCode,Ko=Object.assign;function J2(e,n){return re(e,0)^45?(((n<<2^re(e,0))<<2^re(e,1))<<2^re(e,2))<<2^re(e,3):0}function Za(e){return e.trim()}function un(e,n){return(e=n.exec(e))?e[0]:e}function R(e,n,t){return e.replace(n,t)}function y0(e,n,t){return e.indexOf(n,t)}function re(e,n){return e.charCodeAt(n)|0}function Mt(e,n,t){return e.slice(n,t)}function Je(e){return e.length}function Ja(e){return e.length}function lr(e,n){return n.push(e),e}function q2(e,n){return e.map(n).join("")}function f1(e,n){return e.filter(function(t){return!un(t,n)})}var hl=1,Dt=1,qa=0,je=0,J=0,Vt="";function ml(e,n,t,r,l,o,i,u){return{value:e,root:n,parent:t,type:r,props:l,children:o,line:hl,column:Dt,length:i,return:"",siblings:u}}function Sn(e,n){return Ko(ml("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function it(e){for(;e.root;)e=Sn(e.root,{children:[e]});lr(e,e.siblings)}function b2(){return J}function e5(){return J=je>0?re(Vt,--je):0,Dt--,J===10&&(Dt=1,hl--),J}function Qe(){return J=je<qa?re(Vt,je++):0,Dt++,J===10&&(Dt=1,hl++),J}function Xn(){return re(Vt,je)}function S0(){return je}function vl(e,n){return Mt(Vt,e,n)}function Go(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function n5(e){return hl=Dt=1,qa=Je(Vt=e),je=0,[]}function t5(e){return Vt="",e}function Kl(e){return Za(vl(je-1,Yo(e===91?e+2:e===40?e+1:e)))}function r5(e){for(;(J=Xn())&&J<33;)Qe();return Go(e)>2||Go(J)>3?"":" "}function l5(e,n){for(;--n&&Qe()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return vl(e,S0()+(n<6&&Xn()==32&&Qe()==32))}function Yo(e){for(;Qe();)switch(J){case e:return je;case 34:case 39:e!==34&&e!==39&&Yo(J);break;case 40:e===41&&Yo(e);break;case 92:Qe();break}return je}function o5(e,n){for(;Qe()&&e+J!==57;)if(e+J===84&&Xn()===47)break;return"/*"+vl(n,je-1)+"*"+Zi(e===47?e:Qe())}function i5(e){for(;!Go(Xn());)Qe();return vl(e,je)}function u5(e){return t5(w0("",null,null,null,[""],e=n5(e),0,[0],e))}function w0(e,n,t,r,l,o,i,u,s){for(var d=0,v=0,m=i,h=0,y=0,w=0,p=1,E=1,c=1,a=0,f="",g=l,S=o,x=r,k=f;E;)switch(w=a,a=Qe()){case 40:if(w!=108&&re(k,m-1)==58){y0(k+=R(Kl(a),"&","&\f"),"&\f",Xa(d?u[d-1]:0))!=-1&&(c=-1);break}case 34:case 39:case 91:k+=Kl(a);break;case 9:case 10:case 13:case 32:k+=r5(w);break;case 92:k+=l5(S0()-1,7);continue;case 47:switch(Xn()){case 42:case 47:lr(s5(o5(Qe(),S0()),n,t,s),s);break;default:k+="/"}break;case 123*p:u[d++]=Je(k)*c;case 125*p:case 59:case 0:switch(a){case 0:case 125:E=0;case 59+v:c==-1&&(k=R(k,/\f/g,"")),y>0&&Je(k)-m&&lr(y>32?p1(k+";",r,t,m-1,s):p1(R(k," ","")+";",r,t,m-2,s),s);break;case 59:k+=";";default:if(lr(x=d1(k,n,t,d,v,l,u,f,g=[],S=[],m,o),o),a===123)if(v===0)w0(k,n,x,x,g,o,m,u,S);else switch(h===99&&re(k,3)===110?100:h){case 100:case 108:case 109:case 115:w0(e,x,x,r&&lr(d1(e,x,x,0,0,l,u,f,l,g=[],m,S),S),l,S,m,u,r?g:S);break;default:w0(k,x,x,x,[""],S,0,u,S)}}d=v=y=0,p=c=1,f=k="",m=i;break;case 58:m=1+Je(k),y=w;default:if(p<1){if(a==123)--p;else if(a==125&&p++==0&&e5()==125)continue}switch(k+=Zi(a),a*p){case 38:c=v>0?1:(k+="\f",-1);break;case 44:u[d++]=(Je(k)-1)*c,c=1;break;case 64:Xn()===45&&(k+=Kl(Qe())),h=Xn(),v=m=Je(f=k+=i5(S0())),a++;break;case 45:w===45&&Je(k)==2&&(p=0)}}return o}function d1(e,n,t,r,l,o,i,u,s,d,v,m){for(var h=l-1,y=l===0?o:[""],w=Ja(y),p=0,E=0,c=0;p<r;++p)for(var a=0,f=Mt(e,h+1,h=Xa(E=i[p])),g=e;a<w;++a)(g=Za(E>0?y[a]+" "+f:R(f,/&\f/g,y[a])))&&(s[c++]=g);return ml(e,n,t,l===0?pl:u,s,d,v,m)}function s5(e,n,t,r){return ml(e,n,t,Ga,Zi(b2()),Mt(e,2,-2),0,r)}function p1(e,n,t,r,l){return ml(e,n,t,Xi,Mt(e,0,r),Mt(e,r+1,-1),r,l)}function ba(e,n,t){switch(J2(e,n)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return hr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+hr+e+B+e+e;case 5936:switch(re(e,n+11)){case 114:return M+e+B+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+B+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+B+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+B+e+e;case 6165:return M+e+B+"flex-"+e+e;case 5187:return M+e+R(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return M+e+B+"flex-item-"+R(e,/flex-|-self/g,"")+(un(e,/flex-|baseline/)?"":B+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return M+e+B+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+B+R(e,"shrink","negative")+e;case 5292:return M+e+B+R(e,"basis","preferred-size")+e;case 6060:return M+"box-"+R(e,"-grow","")+M+e+B+R(e,"grow","positive")+e;case 4554:return M+R(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!un(e,/flex-|baseline/))return B+"grid-column-align"+Mt(e,n)+e;break;case 2592:case 3360:return B+R(e,"template-","")+e;case 4384:case 3616:return t&&t.some(function(r,l){return n=l,un(r.props,/grid-\w+-end/)})?~y0(e+(t=t[n].value),"span",0)?e:B+R(e,"-start","")+e+B+"grid-row-span:"+(~y0(t,"span",0)?un(t,/\d+/):+un(t,/\d+/)-+un(e,/\d+/))+";":B+R(e,"-start","")+e;case 4896:case 4128:return t&&t.some(function(r){return un(r.props,/grid-\w+-start/)})?e:B+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-n>6)switch(re(e,n+1)){case 109:if(re(e,n+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+hr+(re(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~y0(e,"stretch",0)?ba(R(e,"stretch","fill-available"),n,t)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,l,o,i,u,s,d){return B+l+":"+o+d+(i?B+l+"-span:"+(u?s:+s-+o)+d:"")+e});case 4949:if(re(e,n+6)===121)return R(e,":",":"+M)+e;break;case 6444:switch(re(e,re(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(re(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+B+"$2box$3")+e;case 100:return R(e,":",":"+B)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function Y0(e,n){for(var t="",r=0;r<e.length;r++)t+=n(e[r],r,e,n)||"";return t}function a5(e,n,t,r){switch(e.type){case Z2:if(e.children.length)break;case X2:case Xi:return e.return=e.return||e.value;case Ga:return"";case Ya:return e.return=e.value+"{"+Y0(e.children,r)+"}";case pl:if(!Je(e.value=e.props.join(",")))return""}return Je(t=Y0(e.children,r))?e.return=e.value+"{"+t+"}":""}function c5(e){var n=Ja(e);return function(t,r,l,o){for(var i="",u=0;u<n;u++)i+=e[u](t,r,l,o)||"";return i}}function f5(e){return function(n){n.root||(n=n.return)&&e(n)}}function d5(e,n,t,r){if(e.length>-1&&!e.return)switch(e.type){case Xi:e.return=ba(e.value,e.length,t);return;case Ya:return Y0([Sn(e,{value:R(e.value,"@","@"+M)})],r);case pl:if(e.length)return q2(t=e.props,function(l){switch(un(l,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":it(Sn(e,{props:[R(l,/:(read-\w+)/,":"+hr+"$1")]})),it(Sn(e,{props:[l]})),Ko(e,{props:f1(t,r)});break;case"::placeholder":it(Sn(e,{props:[R(l,/:(plac\w+)/,":"+M+"input-$1")]})),it(Sn(e,{props:[R(l,/:(plac\w+)/,":"+hr+"$1")]})),it(Sn(e,{props:[R(l,/:(plac\w+)/,B+"input-$1")]})),it(Sn(e,{props:[l]})),Ko(e,{props:f1(t,r)});break}return""})}}var p5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ee={},jt=typeof process<"u"&&Ee!==void 0&&(Ee.REACT_APP_SC_ATTR||Ee.SC_ATTR)||"data-styled",ec="active",nc="data-styled-version",gl="6.1.12",Ji=`/*!sc*/
`,X0=typeof window<"u"&&"HTMLElement"in window,h5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ee!==void 0&&Ee.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ee.REACT_APP_SC_DISABLE_SPEEDY!==""?Ee.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ee.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ee!==void 0&&Ee.SC_DISABLE_SPEEDY!==void 0&&Ee.SC_DISABLE_SPEEDY!==""&&Ee.SC_DISABLE_SPEEDY!=="false"&&Ee.SC_DISABLE_SPEEDY),yl=Object.freeze([]),Ft=Object.freeze({});function m5(e,n,t){return t===void 0&&(t=Ft),e.theme!==t.theme&&e.theme||n||t.theme}var tc=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),v5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,g5=/(^-|-$)/g;function h1(e){return e.replace(v5,"-").replace(g5,"")}var y5=/(a)(d)/gi,r0=52,m1=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xo(e){var n,t="";for(n=Math.abs(e);n>r0;n=n/r0|0)t=m1(n%r0)+t;return(m1(n%r0)+t).replace(y5,"$1-$2")}var Gl,rc=5381,wt=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},lc=function(e){return wt(rc,e)};function S5(e){return Xo(lc(e)>>>0)}function w5(e){return e.displayName||e.name||"Component"}function Yl(e){return typeof e=="string"&&!0}var oc=typeof Symbol=="function"&&Symbol.for,ic=oc?Symbol.for("react.memo"):60115,k5=oc?Symbol.for("react.forward_ref"):60112,x5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},C5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E5=((Gl={})[k5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gl[ic]=uc,Gl);function v1(e){return("type"in(n=e)&&n.type.$$typeof)===ic?uc:"$$typeof"in e?E5[e.$$typeof]:x5;var n}var _5=Object.defineProperty,P5=Object.getOwnPropertyNames,g1=Object.getOwnPropertySymbols,z5=Object.getOwnPropertyDescriptor,N5=Object.getPrototypeOf,y1=Object.prototype;function sc(e,n,t){if(typeof n!="string"){if(y1){var r=N5(n);r&&r!==y1&&sc(e,r,t)}var l=P5(n);g1&&(l=l.concat(g1(n)));for(var o=v1(e),i=v1(n),u=0;u<l.length;++u){var s=l[u];if(!(s in C5||t&&t[s]||i&&s in i||o&&s in o)){var d=z5(n,s);try{_5(e,s,d)}catch{}}}}return e}function At(e){return typeof e=="function"}function qi(e){return typeof e=="object"&&"styledComponentId"in e}function Kn(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function S1(e,n){if(e.length===0)return"";for(var t=e[0],r=1;r<e.length;r++)t+=e[r];return t}function Lr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Zo(e,n,t){if(t===void 0&&(t=!1),!t&&!Lr(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var r=0;r<n.length;r++)e[r]=Zo(e[r],n[r]);else if(Lr(n))for(var r in n)e[r]=Zo(e[r],n[r]);return e}function bi(e,n){Object.defineProperty(e,"toString",{value:n})}function Fr(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var I5=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var t=0,r=0;r<n;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(n,t){if(n>=this.groupSizes.length){for(var r=this.groupSizes,l=r.length,o=l;n>=o;)if((o<<=1)<0)throw Fr(16,"".concat(n));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=l;i<o;i++)this.groupSizes[i]=0}for(var u=this.indexOfGroup(n+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(u,t[i])&&(this.groupSizes[n]++,u++)},e.prototype.clearGroup=function(n){if(n<this.length){var t=this.groupSizes[n],r=this.indexOfGroup(n),l=r+t;this.groupSizes[n]=0;for(var o=r;o<l;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(n){var t="";if(n>=this.length||this.groupSizes[n]===0)return t;for(var r=this.groupSizes[n],l=this.indexOfGroup(n),o=l+r,i=l;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(Ji);return t},e}(),k0=new Map,Z0=new Map,x0=1,l0=function(e){if(k0.has(e))return k0.get(e);for(;Z0.has(x0);)x0++;var n=x0++;return k0.set(e,n),Z0.set(n,e),n},T5=function(e,n){x0=n+1,k0.set(e,n),Z0.set(n,e)},R5="style[".concat(jt,"][").concat(nc,'="').concat(gl,'"]'),L5=new RegExp("^".concat(jt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),O5=function(e,n,t){for(var r,l=t.split(","),o=0,i=l.length;o<i;o++)(r=l[o])&&e.registerName(n,r)},$5=function(e,n){for(var t,r=((t=n.textContent)!==null&&t!==void 0?t:"").split(Ji),l=[],o=0,i=r.length;o<i;o++){var u=r[o].trim();if(u){var s=u.match(L5);if(s){var d=0|parseInt(s[1],10),v=s[2];d!==0&&(T5(v,d),O5(e,v,s[3]),e.getTag().insertRules(d,l)),l.length=0}else l.push(u)}}},w1=function(e){for(var n=document.querySelectorAll(R5),t=0,r=n.length;t<r;t++){var l=n[t];l&&l.getAttribute(jt)!==ec&&($5(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function M5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ac=function(e){var n=document.head,t=e||n,r=document.createElement("style"),l=function(u){var s=Array.from(u.querySelectorAll("style[".concat(jt,"]")));return s[s.length-1]}(t),o=l!==void 0?l.nextSibling:null;r.setAttribute(jt,ec),r.setAttribute(nc,gl);var i=M5();return i&&r.setAttribute("nonce",i),t.insertBefore(r,o),r},D5=function(){function e(n){this.element=ac(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,l=0,o=r.length;l<o;l++){var i=r[l];if(i.ownerNode===t)return i}throw Fr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,t){try{return this.sheet.insertRule(t,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var t=this.sheet.cssRules[n];return t&&t.cssText?t.cssText:""},e}(),j5=function(){function e(n){this.element=ac(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,t){if(n<=this.length&&n>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),F5=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,t){return n<=this.length&&(this.rules.splice(n,0,t),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),k1=X0,A5={isServer:!X0,useCSSOMInjection:!h5},cc=function(){function e(n,t,r){n===void 0&&(n=Ft),t===void 0&&(t={});var l=this;this.options=Se(Se({},A5),n),this.gs=t,this.names=new Map(r),this.server=!!n.isServer,!this.server&&X0&&k1&&(k1=!1,w1(this)),bi(this,function(){return function(o){for(var i=o.getTag(),u=i.length,s="",d=function(m){var h=function(c){return Z0.get(c)}(m);if(h===void 0)return"continue";var y=o.names.get(h),w=i.getGroup(m);if(y===void 0||!y.size||w.length===0)return"continue";var p="".concat(jt,".g").concat(m,'[id="').concat(h,'"]'),E="";y!==void 0&&y.forEach(function(c){c.length>0&&(E+="".concat(c,","))}),s+="".concat(w).concat(p,'{content:"').concat(E,'"}').concat(Ji)},v=0;v<u;v++)d(v);return s}(l)})}return e.registerId=function(n){return l0(n)},e.prototype.rehydrate=function(){!this.server&&X0&&w1(this)},e.prototype.reconstructWithOptions=function(n,t){return t===void 0&&(t=!0),new e(Se(Se({},this.options),n),this.gs,t&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(t){var r=t.useCSSOMInjection,l=t.target;return t.isServer?new F5(l):r?new D5(l):new j5(l)}(this.options),new I5(n)));var n},e.prototype.hasNameForId=function(n,t){return this.names.has(n)&&this.names.get(n).has(t)},e.prototype.registerName=function(n,t){if(l0(n),this.names.has(n))this.names.get(n).add(t);else{var r=new Set;r.add(t),this.names.set(n,r)}},e.prototype.insertRules=function(n,t,r){this.registerName(n,t),this.getTag().insertRules(l0(n),r)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(l0(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),U5=/&/g,W5=/^\s*\/\/.*$/gm;function fc(e,n){return e.map(function(t){return t.type==="rule"&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(r){return"".concat(n," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=fc(t.children,n)),t})}function B5(e){var n,t,r,l=Ft,o=l.options,i=o===void 0?Ft:o,u=l.plugins,s=u===void 0?yl:u,d=function(h,y,w){return w.startsWith(t)&&w.endsWith(t)&&w.replaceAll(t,"").length>0?".".concat(n):h},v=s.slice();v.push(function(h){h.type===pl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(U5,t).replace(r,d))}),i.prefix&&v.push(d5),v.push(a5);var m=function(h,y,w,p){y===void 0&&(y=""),w===void 0&&(w=""),p===void 0&&(p="&"),n=p,t=y,r=new RegExp("\\".concat(t,"\\b"),"g");var E=h.replace(W5,""),c=u5(w||y?"".concat(w," ").concat(y," { ").concat(E," }"):E);i.namespace&&(c=fc(c,i.namespace));var a=[];return Y0(c,c5(v.concat(f5(function(f){return a.push(f)})))),a};return m.hash=s.length?s.reduce(function(h,y){return y.name||Fr(15),wt(h,y.name)},rc).toString():"",m}var V5=new cc,Jo=B5(),dc=zt.createContext({shouldForwardProp:void 0,styleSheet:V5,stylis:Jo});dc.Consumer;zt.createContext(void 0);function x1(){return Z.useContext(dc)}var H5=function(){function e(n,t){var r=this;this.inject=function(l,o){o===void 0&&(o=Jo);var i=r.name+o.hash;l.hasNameForId(r.id,i)||l.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=t,bi(this,function(){throw Fr(12,String(r.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=Jo),this.name+n.hash},e}(),Q5=function(e){return e>="A"&&e<="Z"};function C1(e){for(var n="",t=0;t<e.length;t++){var r=e[t];if(t===1&&r==="-"&&e[0]==="-")return e;Q5(r)?n+="-"+r.toLowerCase():n+=r}return n.startsWith("ms-")?"-"+n:n}var pc=function(e){return e==null||e===!1||e===""},hc=function(e){var n,t,r=[];for(var l in e){var o=e[l];e.hasOwnProperty(l)&&!pc(o)&&(Array.isArray(o)&&o.isCss||At(o)?r.push("".concat(C1(l),":"),o,";"):Lr(o)?r.push.apply(r,G0(G0(["".concat(l," {")],hc(o),!1),["}"],!1)):r.push("".concat(C1(l),": ").concat((n=l,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||n in p5||n.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Zn(e,n,t,r){if(pc(e))return[];if(qi(e))return[".".concat(e.styledComponentId)];if(At(e)){if(!At(o=e)||o.prototype&&o.prototype.isReactComponent||!n)return[e];var l=e(n);return Zn(l,n,t,r)}var o;return e instanceof H5?t?(e.inject(t,r),[e.getName(r)]):[e]:Lr(e)?hc(e):Array.isArray(e)?Array.prototype.concat.apply(yl,e.map(function(i){return Zn(i,n,t,r)})):[e.toString()]}function K5(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(At(t)&&!qi(t))return!1}return!0}var G5=lc(gl),Y5=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&K5(n),this.componentId=t,this.baseHash=wt(G5,t),this.baseStyle=r,cc.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))l=Kn(l,this.staticRulesId);else{var o=S1(Zn(this.rules,n,t,r)),i=Xo(wt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var u=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,u)}l=Kn(l,i),this.staticRulesId=i}else{for(var s=wt(this.baseHash,r.hash),d="",v=0;v<this.rules.length;v++){var m=this.rules[v];if(typeof m=="string")d+=m;else if(m){var h=S1(Zn(m,n,t,r));s=wt(s,h+v),d+=h}}if(d){var y=Xo(s>>>0);t.hasNameForId(this.componentId,y)||t.insertRules(this.componentId,y,r(d,".".concat(y),void 0,this.componentId)),l=Kn(l,y)}}return l},e}(),mc=zt.createContext(void 0);mc.Consumer;var Xl={};function X5(e,n,t){var r=qi(e),l=e,o=!Yl(e),i=n.attrs,u=i===void 0?yl:i,s=n.componentId,d=s===void 0?function(g,S){var x=typeof g!="string"?"sc":h1(g);Xl[x]=(Xl[x]||0)+1;var k="".concat(x,"-").concat(S5(gl+x+Xl[x]));return S?"".concat(S,"-").concat(k):k}(n.displayName,n.parentComponentId):s,v=n.displayName,m=v===void 0?function(g){return Yl(g)?"styled.".concat(g):"Styled(".concat(w5(g),")")}(e):v,h=n.displayName&&n.componentId?"".concat(h1(n.displayName),"-").concat(n.componentId):n.componentId||d,y=r&&l.attrs?l.attrs.concat(u).filter(Boolean):u,w=n.shouldForwardProp;if(r&&l.shouldForwardProp){var p=l.shouldForwardProp;if(n.shouldForwardProp){var E=n.shouldForwardProp;w=function(g,S){return p(g,S)&&E(g,S)}}else w=p}var c=new Y5(t,h,r?l.componentStyle:void 0);function a(g,S){return function(x,k,P){var O=x.attrs,T=x.componentStyle,ne=x.defaultProps,tn=x.foldedComponentIds,rn=x.styledComponentId,lt=x.target,Ht=zt.useContext(mc),An=x1(),Ge=x.shouldForwardProp||An.shouldForwardProp,_=m5(k,Ht,ne)||Ft,N=function(Fe,Ce,ln){for(var Qt,Un=Se(Se({},Ce),{className:void 0,theme:ln}),Sl=0;Sl<Fe.length;Sl+=1){var Ar=At(Qt=Fe[Sl])?Qt(Un):Qt;for(var gn in Ar)Un[gn]=gn==="className"?Kn(Un[gn],Ar[gn]):gn==="style"?Se(Se({},Un[gn]),Ar[gn]):Ar[gn]}return Ce.className&&(Un.className=Kn(Un.className,Ce.className)),Un}(O,k,_),I=N.as||lt,D={};for(var j in N)N[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&N.theme===_||(j==="forwardedAs"?D.as=N.forwardedAs:Ge&&!Ge(j,I)||(D[j]=N[j]));var Ye=function(Fe,Ce){var ln=x1(),Qt=Fe.generateAndInjectStyles(Ce,ln.styleSheet,ln.stylis);return Qt}(T,N),oe=Kn(tn,rn);return Ye&&(oe+=" "+Ye),N.className&&(oe+=" "+N.className),D[Yl(I)&&!tc.has(I)?"class":"className"]=oe,D.ref=P,Z.createElement(I,D)}(f,g,S)}a.displayName=m;var f=zt.forwardRef(a);return f.attrs=y,f.componentStyle=c,f.displayName=m,f.shouldForwardProp=w,f.foldedComponentIds=r?Kn(l.foldedComponentIds,l.styledComponentId):"",f.styledComponentId=h,f.target=r?l.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(S){for(var x=[],k=1;k<arguments.length;k++)x[k-1]=arguments[k];for(var P=0,O=x;P<O.length;P++)Zo(S,O[P],!0);return S}({},l.defaultProps,g):g}}),bi(f,function(){return".".concat(f.styledComponentId)}),o&&sc(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function E1(e,n){for(var t=[e[0]],r=0,l=n.length;r<l;r+=1)t.push(n[r],e[r+1]);return t}var _1=function(e){return Object.assign(e,{isCss:!0})};function Z5(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];if(At(e)||Lr(e))return _1(Zn(E1(yl,G0([e],n,!0))));var r=e;return n.length===0&&r.length===1&&typeof r[0]=="string"?Zn(r):_1(Zn(E1(r,n)))}function qo(e,n,t){if(t===void 0&&(t=Ft),!n)throw Fr(1,n);var r=function(l){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(n,t,Z5.apply(void 0,G0([l],o,!1)))};return r.attrs=function(l){return qo(e,n,Se(Se({},t),{attrs:Array.prototype.concat(t.attrs,l).filter(Boolean)}))},r.withConfig=function(l){return qo(e,n,Se(Se({},t),l))},r}var vc=function(e){return qo(X5,e)},nn=vc;tc.forEach(function(e){nn[e]=vc(e)});function bo(){return bo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},bo.apply(null,arguments)}function P1(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ei(e,n){return ei=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},ei(e,n)}function J5(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,ei(e,n)}var z1=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function q5(e,n){return!!(e===n||z1(e)&&z1(n))}function b5(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!q5(e[t],n[t]))return!1;return!0}function Zl(e,n){n===void 0&&(n=b5);var t,r=[],l,o=!1;function i(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];return o&&t===this&&n(u,r)||(l=e.apply(this,u),o=!0,t=this,r=u),l}return i}var e9=typeof performance=="object"&&typeof performance.now=="function",N1=e9?function(){return performance.now()}:function(){return Date.now()};function I1(e){cancelAnimationFrame(e.id)}function n9(e,n){var t=N1();function r(){N1()-t>=n?e.call(null):l.id=requestAnimationFrame(r)}var l={id:requestAnimationFrame(r)};return l}var Jl=-1;function T1(e){if(e===void 0&&(e=!1),Jl===-1||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",document.body.appendChild(n),Jl=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return Jl}var ut=null;function R1(e){if(e===void 0&&(e=!1),ut===null||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var r=document.createElement("div"),l=r.style;return l.width="100px",l.height="100px",n.appendChild(r),document.body.appendChild(n),n.scrollLeft>0?ut="positive-descending":(n.scrollLeft=1,n.scrollLeft===0?ut="negative":ut="positive-ascending"),document.body.removeChild(n),ut}return ut}var t9=150,r9=function(n,t){return n};function l9(e){var n,t=e.getItemOffset,r=e.getEstimatedTotalSize,l=e.getItemSize,o=e.getOffsetForIndexAndAlignment,i=e.getStartIndexForOffset,u=e.getStopIndexForStartIndex,s=e.initInstanceProps,d=e.shouldResetStyleCacheOnItemSizeChange,v=e.validateProps;return n=function(m){J5(h,m);function h(w){var p;return p=m.call(this,w)||this,p._instanceProps=s(p.props,P1(p)),p._outerRef=void 0,p._resetIsScrollingTimeoutId=null,p.state={instance:P1(p),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof p.props.initialScrollOffset=="number"?p.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},p._callOnItemsRendered=void 0,p._callOnItemsRendered=Zl(function(E,c,a,f){return p.props.onItemsRendered({overscanStartIndex:E,overscanStopIndex:c,visibleStartIndex:a,visibleStopIndex:f})}),p._callOnScroll=void 0,p._callOnScroll=Zl(function(E,c,a){return p.props.onScroll({scrollDirection:E,scrollOffset:c,scrollUpdateWasRequested:a})}),p._getItemStyle=void 0,p._getItemStyle=function(E){var c=p.props,a=c.direction,f=c.itemSize,g=c.layout,S=p._getItemStyleCache(d&&f,d&&g,d&&a),x;if(S.hasOwnProperty(E))x=S[E];else{var k=t(p.props,E,p._instanceProps),P=l(p.props,E,p._instanceProps),O=a==="horizontal"||g==="horizontal",T=a==="rtl",ne=O?k:0;S[E]=x={position:"absolute",left:T?void 0:ne,right:T?ne:void 0,top:O?0:k,height:O?"100%":P,width:O?P:"100%"}}return x},p._getItemStyleCache=void 0,p._getItemStyleCache=Zl(function(E,c,a){return{}}),p._onScrollHorizontal=function(E){var c=E.currentTarget,a=c.clientWidth,f=c.scrollLeft,g=c.scrollWidth;p.setState(function(S){if(S.scrollOffset===f)return null;var x=p.props.direction,k=f;if(x==="rtl")switch(R1()){case"negative":k=-f;break;case"positive-descending":k=g-a-f;break}return k=Math.max(0,Math.min(k,g-a)),{isScrolling:!0,scrollDirection:S.scrollOffset<k?"forward":"backward",scrollOffset:k,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._onScrollVertical=function(E){var c=E.currentTarget,a=c.clientHeight,f=c.scrollHeight,g=c.scrollTop;p.setState(function(S){if(S.scrollOffset===g)return null;var x=Math.max(0,Math.min(g,f-a));return{isScrolling:!0,scrollDirection:S.scrollOffset<x?"forward":"backward",scrollOffset:x,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._outerRefSetter=function(E){var c=p.props.outerRef;p._outerRef=E,typeof c=="function"?c(E):c!=null&&typeof c=="object"&&c.hasOwnProperty("current")&&(c.current=E)},p._resetIsScrollingDebounced=function(){p._resetIsScrollingTimeoutId!==null&&I1(p._resetIsScrollingTimeoutId),p._resetIsScrollingTimeoutId=n9(p._resetIsScrolling,t9)},p._resetIsScrolling=function(){p._resetIsScrollingTimeoutId=null,p.setState({isScrolling:!1},function(){p._getItemStyleCache(-1,null)})},p}h.getDerivedStateFromProps=function(p,E){return o9(p,E),v(p),null};var y=h.prototype;return y.scrollTo=function(p){p=Math.max(0,p),this.setState(function(E){return E.scrollOffset===p?null:{scrollDirection:E.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},y.scrollToItem=function(p,E){E===void 0&&(E="auto");var c=this.props,a=c.itemCount,f=c.layout,g=this.state.scrollOffset;p=Math.max(0,Math.min(p,a-1));var S=0;if(this._outerRef){var x=this._outerRef;f==="vertical"?S=x.scrollWidth>x.clientWidth?T1():0:S=x.scrollHeight>x.clientHeight?T1():0}this.scrollTo(o(this.props,p,E,g,this._instanceProps,S))},y.componentDidMount=function(){var p=this.props,E=p.direction,c=p.initialScrollOffset,a=p.layout;if(typeof c=="number"&&this._outerRef!=null){var f=this._outerRef;E==="horizontal"||a==="horizontal"?f.scrollLeft=c:f.scrollTop=c}this._callPropsCallbacks()},y.componentDidUpdate=function(){var p=this.props,E=p.direction,c=p.layout,a=this.state,f=a.scrollOffset,g=a.scrollUpdateWasRequested;if(g&&this._outerRef!=null){var S=this._outerRef;if(E==="horizontal"||c==="horizontal")if(E==="rtl")switch(R1()){case"negative":S.scrollLeft=-f;break;case"positive-ascending":S.scrollLeft=f;break;default:var x=S.clientWidth,k=S.scrollWidth;S.scrollLeft=k-x-f;break}else S.scrollLeft=f;else S.scrollTop=f}this._callPropsCallbacks()},y.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&I1(this._resetIsScrollingTimeoutId)},y.render=function(){var p=this.props,E=p.children,c=p.className,a=p.direction,f=p.height,g=p.innerRef,S=p.innerElementType,x=p.innerTagName,k=p.itemCount,P=p.itemData,O=p.itemKey,T=O===void 0?r9:O,ne=p.layout,tn=p.outerElementType,rn=p.outerTagName,lt=p.style,Ht=p.useIsScrolling,An=p.width,Ge=this.state.isScrolling,_=a==="horizontal"||ne==="horizontal",N=_?this._onScrollHorizontal:this._onScrollVertical,I=this._getRangeToRender(),D=I[0],j=I[1],Ye=[];if(k>0)for(var oe=D;oe<=j;oe++)Ye.push(Z.createElement(E,{data:P,key:T(oe,P),index:oe,isScrolling:Ht?Ge:void 0,style:this._getItemStyle(oe)}));var Fe=r(this.props,this._instanceProps);return Z.createElement(tn||rn||"div",{className:c,onScroll:N,ref:this._outerRefSetter,style:bo({position:"relative",height:f,width:An,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},lt)},Z.createElement(S||x||"div",{children:Ye,ref:g,style:{height:_?"100%":Fe,pointerEvents:Ge?"none":void 0,width:_?Fe:"100%"}}))},y._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var p=this.props.itemCount;if(p>0){var E=this._getRangeToRender(),c=E[0],a=E[1],f=E[2],g=E[3];this._callOnItemsRendered(c,a,f,g)}}if(typeof this.props.onScroll=="function"){var S=this.state,x=S.scrollDirection,k=S.scrollOffset,P=S.scrollUpdateWasRequested;this._callOnScroll(x,k,P)}},y._getRangeToRender=function(){var p=this.props,E=p.itemCount,c=p.overscanCount,a=this.state,f=a.isScrolling,g=a.scrollDirection,S=a.scrollOffset;if(E===0)return[0,0,0,0];var x=i(this.props,S,this._instanceProps),k=u(this.props,x,S,this._instanceProps),P=!f||g==="backward"?Math.max(1,c):1,O=!f||g==="forward"?Math.max(1,c):1;return[Math.max(0,x-P),Math.max(0,Math.min(E-1,k+O)),x,k]},h}(Z.PureComponent),n.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var o9=function(n,t){n.children,n.direction,n.height,n.layout,n.innerTagName,n.outerTagName,n.width,t.instance},i9=l9({getItemOffset:function(n,t){var r=n.itemSize;return t*r},getItemSize:function(n,t){var r=n.itemSize;return r},getEstimatedTotalSize:function(n){var t=n.itemCount,r=n.itemSize;return r*t},getOffsetForIndexAndAlignment:function(n,t,r,l,o,i){var u=n.direction,s=n.height,d=n.itemCount,v=n.itemSize,m=n.layout,h=n.width,y=u==="horizontal"||m==="horizontal",w=y?h:s,p=Math.max(0,d*v-w),E=Math.min(p,t*v),c=Math.max(0,t*v-w+v+i);switch(r==="smart"&&(l>=c-w&&l<=E+w?r="auto":r="center"),r){case"start":return E;case"end":return c;case"center":{var a=Math.round(c+(E-c)/2);return a<Math.ceil(w/2)?0:a>p+Math.floor(w/2)?p:a}case"auto":default:return l>=c&&l<=E?l:l<c?c:E}},getStartIndexForOffset:function(n,t){var r=n.itemCount,l=n.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/l)))},getStopIndexForStartIndex:function(n,t,r){var l=n.direction,o=n.height,i=n.itemCount,u=n.itemSize,s=n.layout,d=n.width,v=l==="horizontal"||s==="horizontal",m=t*u,h=v?d:o,y=Math.ceil((h+r-m)/u);return Math.max(0,Math.min(i-1,t+y-1))},initInstanceProps:function(n){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(n){n.itemSize}});const gc=Z.createContext({corpus:[],buf:new ArrayBuffer(0),selectedLink:"",setSelectedLink:()=>{}});function eu(e){const n=Z.useContext(gc),t=e?e(n):n;return Z.useMemo(()=>t,[t])}const u9=`R, G, B
1.46159096e-03, 4.66127766e-04, 1.38655200e-02
2.25764007e-03, 1.29495431e-03, 1.83311461e-02
3.27943222e-03, 2.30452991e-03, 2.37083291e-02
4.51230222e-03, 3.49037666e-03, 2.99647059e-02
5.94976987e-03, 4.84285000e-03, 3.71296695e-02
7.58798550e-03, 6.35613622e-03, 4.49730774e-02
9.42604390e-03, 8.02185006e-03, 5.28443561e-02
1.14654337e-02, 9.82831486e-03, 6.07496380e-02
1.37075706e-02, 1.17705913e-02, 6.86665843e-02
1.61557566e-02, 1.38404966e-02, 7.66026660e-02
1.88153670e-02, 1.60262753e-02, 8.45844897e-02
2.16919340e-02, 1.83201254e-02, 9.26101050e-02
2.47917814e-02, 2.07147875e-02, 1.00675555e-01
2.81228154e-02, 2.32009284e-02, 1.08786954e-01
3.16955304e-02, 2.57651161e-02, 1.16964722e-01
3.55204468e-02, 2.83974570e-02, 1.25209396e-01
3.96084872e-02, 3.10895652e-02, 1.33515085e-01
4.38295350e-02, 3.38299885e-02, 1.41886249e-01
4.80616391e-02, 3.66066101e-02, 1.50326989e-01
5.23204388e-02, 3.94066020e-02, 1.58841025e-01
5.66148978e-02, 4.21598925e-02, 1.67445592e-01
6.09493930e-02, 4.47944924e-02, 1.76128834e-01
6.53301801e-02, 4.73177796e-02, 1.84891506e-01
6.97637296e-02, 4.97264666e-02, 1.93735088e-01
7.42565152e-02, 5.20167766e-02, 2.02660374e-01
7.88150034e-02, 5.41844801e-02, 2.11667355e-01
8.34456313e-02, 5.62249365e-02, 2.20755099e-01
8.81547730e-02, 5.81331465e-02, 2.29921611e-01
9.29486914e-02, 5.99038167e-02, 2.39163669e-01
9.78334770e-02, 6.15314414e-02, 2.48476662e-01
1.02814972e-01, 6.30104053e-02, 2.57854400e-01
1.07898679e-01, 6.43351102e-02, 2.67288933e-01
1.13094451e-01, 6.54920358e-02, 2.76783978e-01
1.18405035e-01, 6.64791593e-02, 2.86320656e-01
1.23832651e-01, 6.72946449e-02, 2.95879431e-01
1.29380192e-01, 6.79349264e-02, 3.05442931e-01
1.35053322e-01, 6.83912798e-02, 3.14999890e-01
1.40857952e-01, 6.86540710e-02, 3.24537640e-01
1.46785234e-01, 6.87382323e-02, 3.34011109e-01
1.52839217e-01, 6.86368599e-02, 3.43404450e-01
1.59017511e-01, 6.83540225e-02, 3.52688028e-01
1.65308131e-01, 6.79108689e-02, 3.61816426e-01
1.71713033e-01, 6.73053260e-02, 3.70770827e-01
1.78211730e-01, 6.65758073e-02, 3.79497161e-01
1.84800877e-01, 6.57324381e-02, 3.87972507e-01
1.91459745e-01, 6.48183312e-02, 3.96151969e-01
1.98176877e-01, 6.38624166e-02, 4.04008953e-01
2.04934882e-01, 6.29066192e-02, 4.11514273e-01
2.11718061e-01, 6.19917876e-02, 4.18646741e-01
2.18511590e-01, 6.11584918e-02, 4.25391816e-01
2.25302032e-01, 6.04451843e-02, 4.31741767e-01
2.32076515e-01, 5.98886855e-02, 4.37694665e-01
2.38825991e-01, 5.95170384e-02, 4.43255999e-01
2.45543175e-01, 5.93524384e-02, 4.48435938e-01
2.52220252e-01, 5.94147119e-02, 4.53247729e-01
2.58857304e-01, 5.97055998e-02, 4.57709924e-01
2.65446744e-01, 6.02368754e-02, 4.61840297e-01
2.71994089e-01, 6.09935552e-02, 4.65660375e-01
2.78493300e-01, 6.19778136e-02, 4.69190328e-01
2.84951097e-01, 6.31676261e-02, 4.72450879e-01
2.91365817e-01, 6.45534486e-02, 4.75462193e-01
2.97740413e-01, 6.61170432e-02, 4.78243482e-01
3.04080941e-01, 6.78353452e-02, 4.80811572e-01
3.10382027e-01, 6.97024767e-02, 4.83186340e-01
3.16654235e-01, 7.16895272e-02, 4.85380429e-01
3.22899126e-01, 7.37819504e-02, 4.87408399e-01
3.29114038e-01, 7.59715081e-02, 4.89286796e-01
3.35307503e-01, 7.82361045e-02, 4.91024144e-01
3.41481725e-01, 8.05635079e-02, 4.92631321e-01
3.47635742e-01, 8.29463512e-02, 4.94120923e-01
3.53773161e-01, 8.53726329e-02, 4.95501096e-01
3.59897941e-01, 8.78311772e-02, 4.96778331e-01
3.66011928e-01, 9.03143031e-02, 4.97959963e-01
3.72116205e-01, 9.28159917e-02, 4.99053326e-01
3.78210547e-01, 9.53322947e-02, 5.00066568e-01
3.84299445e-01, 9.78549106e-02, 5.01001964e-01
3.90384361e-01, 1.00379466e-01, 5.01864236e-01
3.96466670e-01, 1.02902194e-01, 5.02657590e-01
4.02547663e-01, 1.05419865e-01, 5.03385761e-01
4.08628505e-01, 1.07929771e-01, 5.04052118e-01
4.14708664e-01, 1.10431177e-01, 5.04661843e-01
4.20791157e-01, 1.12920210e-01, 5.05214935e-01
4.26876965e-01, 1.15395258e-01, 5.05713602e-01
4.32967001e-01, 1.17854987e-01, 5.06159754e-01
4.39062114e-01, 1.20298314e-01, 5.06555026e-01
4.45163096e-01, 1.22724371e-01, 5.06900806e-01
4.51270678e-01, 1.25132484e-01, 5.07198258e-01
4.57385535e-01, 1.27522145e-01, 5.07448336e-01
4.63508291e-01, 1.29892998e-01, 5.07651812e-01
4.69639514e-01, 1.32244819e-01, 5.07809282e-01
4.75779723e-01, 1.34577500e-01, 5.07921193e-01
4.81928997e-01, 1.36891390e-01, 5.07988509e-01
4.88088169e-01, 1.39186217e-01, 5.08010737e-01
4.94257673e-01, 1.41462106e-01, 5.07987836e-01
5.00437834e-01, 1.43719323e-01, 5.07919772e-01
5.06628929e-01, 1.45958202e-01, 5.07806420e-01
5.12831195e-01, 1.48179144e-01, 5.07647570e-01
5.19044825e-01, 1.50382611e-01, 5.07442938e-01
5.25269968e-01, 1.52569121e-01, 5.07192172e-01
5.31506735e-01, 1.54739247e-01, 5.06894860e-01
5.37755194e-01, 1.56893613e-01, 5.06550538e-01
5.44015371e-01, 1.59032895e-01, 5.06158696e-01
5.50287252e-01, 1.61157816e-01, 5.05718782e-01
5.56570783e-01, 1.63269149e-01, 5.05230210e-01
5.62865867e-01, 1.65367714e-01, 5.04692365e-01
5.69172368e-01, 1.67454379e-01, 5.04104606e-01
5.75490107e-01, 1.69530062e-01, 5.03466273e-01
5.81818864e-01, 1.71595728e-01, 5.02776690e-01
5.88158375e-01, 1.73652392e-01, 5.02035167e-01
5.94508337e-01, 1.75701122e-01, 5.01241011e-01
6.00868399e-01, 1.77743036e-01, 5.00393522e-01
6.07238169e-01, 1.79779309e-01, 4.99491999e-01
6.13617209e-01, 1.81811170e-01, 4.98535746e-01
6.20005032e-01, 1.83839907e-01, 4.97524075e-01
6.26401108e-01, 1.85866869e-01, 4.96456304e-01
6.32804854e-01, 1.87893468e-01, 4.95331769e-01
6.39215638e-01, 1.89921182e-01, 4.94149821e-01
6.45632778e-01, 1.91951556e-01, 4.92909832e-01
6.52055535e-01, 1.93986210e-01, 4.91611196e-01
6.58483116e-01, 1.96026835e-01, 4.90253338e-01
6.64914668e-01, 1.98075202e-01, 4.88835712e-01
6.71349279e-01, 2.00133166e-01, 4.87357807e-01
6.77785975e-01, 2.02202663e-01, 4.85819154e-01
6.84223712e-01, 2.04285721e-01, 4.84219325e-01
6.90661380e-01, 2.06384461e-01, 4.82557941e-01
6.97097796e-01, 2.08501100e-01, 4.80834678e-01
7.03531700e-01, 2.10637956e-01, 4.79049270e-01
7.09961888e-01, 2.12797337e-01, 4.77201121e-01
7.16387038e-01, 2.14981693e-01, 4.75289780e-01
7.22805451e-01, 2.17193831e-01, 4.73315708e-01
7.29215521e-01, 2.19436516e-01, 4.71278924e-01
7.35615545e-01, 2.21712634e-01, 4.69179541e-01
7.42003713e-01, 2.24025196e-01, 4.67017774e-01
7.48378107e-01, 2.26377345e-01, 4.64793954e-01
7.54736692e-01, 2.28772352e-01, 4.62508534e-01
7.61077312e-01, 2.31213625e-01, 4.60162106e-01
7.67397681e-01, 2.33704708e-01, 4.57755411e-01
7.73695380e-01, 2.36249283e-01, 4.55289354e-01
7.79967847e-01, 2.38851170e-01, 4.52765022e-01
7.86212372e-01, 2.41514325e-01, 4.50183695e-01
7.92426972e-01, 2.44242250e-01, 4.47543155e-01
7.98607760e-01, 2.47039798e-01, 4.44848441e-01
8.04751511e-01, 2.49911350e-01, 4.42101615e-01
8.10854841e-01, 2.52861399e-01, 4.39304963e-01
8.16914186e-01, 2.55894550e-01, 4.36461074e-01
8.22925797e-01, 2.59015505e-01, 4.33572874e-01
8.28885740e-01, 2.62229049e-01, 4.30643647e-01
8.34790818e-01, 2.65539703e-01, 4.27671352e-01
8.40635680e-01, 2.68952874e-01, 4.24665620e-01
8.46415804e-01, 2.72473491e-01, 4.21631064e-01
8.52126490e-01, 2.76106469e-01, 4.18572767e-01
8.57762870e-01, 2.79856666e-01, 4.15496319e-01
8.63320397e-01, 2.83729003e-01, 4.12402889e-01
8.68793368e-01, 2.87728205e-01, 4.09303002e-01
8.74176342e-01, 2.91858679e-01, 4.06205397e-01
8.79463944e-01, 2.96124596e-01, 4.03118034e-01
8.84650824e-01, 3.00530090e-01, 4.00047060e-01
8.89731418e-01, 3.05078817e-01, 3.97001559e-01
8.94700194e-01, 3.09773445e-01, 3.93994634e-01
8.99551884e-01, 3.14616425e-01, 3.91036674e-01
9.04281297e-01, 3.19609981e-01, 3.88136889e-01
9.08883524e-01, 3.24755126e-01, 3.85308008e-01
9.13354091e-01, 3.30051947e-01, 3.82563414e-01
9.17688852e-01, 3.35500068e-01, 3.79915138e-01
9.21884187e-01, 3.41098112e-01, 3.77375977e-01
9.25937102e-01, 3.46843685e-01, 3.74959077e-01
9.29845090e-01, 3.52733817e-01, 3.72676513e-01
9.33606454e-01, 3.58764377e-01, 3.70540883e-01
9.37220874e-01, 3.64929312e-01, 3.68566525e-01
9.40687443e-01, 3.71224168e-01, 3.66761699e-01
9.44006448e-01, 3.77642889e-01, 3.65136328e-01
9.47179528e-01, 3.84177874e-01, 3.63701130e-01
9.50210150e-01, 3.90819546e-01, 3.62467694e-01
9.53099077e-01, 3.97562894e-01, 3.61438431e-01
9.55849237e-01, 4.04400213e-01, 3.60619076e-01
9.58464079e-01, 4.11323666e-01, 3.60014232e-01
9.60949221e-01, 4.18323245e-01, 3.59629789e-01
9.63310281e-01, 4.25389724e-01, 3.59469020e-01
9.65549351e-01, 4.32518707e-01, 3.59529151e-01
9.67671128e-01, 4.39702976e-01, 3.59810172e-01
9.69680441e-01, 4.46935635e-01, 3.60311120e-01
9.71582181e-01, 4.54210170e-01, 3.61030156e-01
9.73381238e-01, 4.61520484e-01, 3.61964652e-01
9.75082439e-01, 4.68860936e-01, 3.63111292e-01
9.76690494e-01, 4.76226350e-01, 3.64466162e-01
9.78209957e-01, 4.83612031e-01, 3.66024854e-01
9.79645181e-01, 4.91013764e-01, 3.67782559e-01
9.81000291e-01, 4.98427800e-01, 3.69734157e-01
9.82279159e-01, 5.05850848e-01, 3.71874301e-01
9.83485387e-01, 5.13280054e-01, 3.74197501e-01
9.84622298e-01, 5.20712972e-01, 3.76698186e-01
9.85692925e-01, 5.28147545e-01, 3.79370774e-01
9.86700017e-01, 5.35582070e-01, 3.82209724e-01
9.87646038e-01, 5.43015173e-01, 3.85209578e-01
9.88533173e-01, 5.50445778e-01, 3.88365009e-01
9.89363341e-01, 5.57873075e-01, 3.91670846e-01
9.90138201e-01, 5.65296495e-01, 3.95122099e-01
9.90871208e-01, 5.72706259e-01, 3.98713971e-01
9.91558165e-01, 5.80106828e-01, 4.02441058e-01
9.92195728e-01, 5.87501706e-01, 4.06298792e-01
9.92784669e-01, 5.94891088e-01, 4.10282976e-01
9.93325561e-01, 6.02275297e-01, 4.14389658e-01
9.93834412e-01, 6.09643540e-01, 4.18613221e-01
9.94308514e-01, 6.16998953e-01, 4.22949672e-01
9.94737698e-01, 6.24349657e-01, 4.27396771e-01
9.95121854e-01, 6.31696376e-01, 4.31951492e-01
9.95480469e-01, 6.39026596e-01, 4.36607159e-01
9.95809924e-01, 6.46343897e-01, 4.41360951e-01
9.96095703e-01, 6.53658756e-01, 4.46213021e-01
9.96341406e-01, 6.60969379e-01, 4.51160201e-01
9.96579803e-01, 6.68255621e-01, 4.56191814e-01
9.96774784e-01, 6.75541484e-01, 4.61314158e-01
9.96925427e-01, 6.82827953e-01, 4.66525689e-01
9.97077185e-01, 6.90087897e-01, 4.71811461e-01
9.97186253e-01, 6.97348991e-01, 4.77181727e-01
9.97253982e-01, 7.04610791e-01, 4.82634651e-01
9.97325180e-01, 7.11847714e-01, 4.88154375e-01
9.97350983e-01, 7.19089119e-01, 4.93754665e-01
9.97350583e-01, 7.26324415e-01, 4.99427972e-01
9.97341259e-01, 7.33544671e-01, 5.05166839e-01
9.97284689e-01, 7.40771893e-01, 5.10983331e-01
9.97228367e-01, 7.47980563e-01, 5.16859378e-01
9.97138480e-01, 7.55189852e-01, 5.22805996e-01
9.97019342e-01, 7.62397883e-01, 5.28820775e-01
9.96898254e-01, 7.69590975e-01, 5.34892341e-01
9.96726862e-01, 7.76794860e-01, 5.41038571e-01
9.96570645e-01, 7.83976508e-01, 5.47232992e-01
9.96369065e-01, 7.91167346e-01, 5.53498939e-01
9.96162309e-01, 7.98347709e-01, 5.59819643e-01
9.95932448e-01, 8.05527126e-01, 5.66201824e-01
9.95680107e-01, 8.12705773e-01, 5.72644795e-01
9.95423973e-01, 8.19875302e-01, 5.79140130e-01
9.95131288e-01, 8.27051773e-01, 5.85701463e-01
9.94851089e-01, 8.34212826e-01, 5.92307093e-01
9.94523666e-01, 8.41386618e-01, 5.98982818e-01
9.94221900e-01, 8.48540474e-01, 6.05695903e-01
9.93865767e-01, 8.55711038e-01, 6.12481798e-01
9.93545285e-01, 8.62858846e-01, 6.19299300e-01
9.93169558e-01, 8.70024467e-01, 6.26189463e-01
9.92830963e-01, 8.77168404e-01, 6.33109148e-01
9.92439881e-01, 8.84329694e-01, 6.40099465e-01
9.92089454e-01, 8.91469549e-01, 6.47116021e-01
9.91687744e-01, 8.98627050e-01, 6.54201544e-01
9.91331929e-01, 9.05762748e-01, 6.61308839e-01
9.90929685e-01, 9.12915010e-01, 6.68481201e-01
9.90569914e-01, 9.20048699e-01, 6.75674592e-01
9.90174637e-01, 9.27195612e-01, 6.82925602e-01
9.89814839e-01, 9.34328540e-01, 6.90198194e-01
9.89433736e-01, 9.41470354e-01, 6.97518628e-01
9.89077438e-01, 9.48604077e-01, 7.04862519e-01
9.88717064e-01, 9.55741520e-01, 7.12242232e-01
9.88367028e-01, 9.62878026e-01, 7.19648627e-01
9.88032885e-01, 9.70012413e-01, 7.27076773e-01
9.87690702e-01, 9.77154231e-01, 7.34536205e-01
9.87386827e-01, 9.84287561e-01, 7.42001547e-01
9.87052509e-01, 9.91437853e-01, 7.49504188e-01`,s9=`R, G, B
0.26700401,  0.00487433,  0.32941519
0.26851048,  0.00960483,  0.33542652
0.26994384,  0.01462494,  0.34137895
0.27130489,  0.01994186,  0.34726862
0.27259384,  0.02556309,  0.35309303
0.27380934,  0.03149748,  0.35885256
0.27495242,  0.03775181,  0.36454323
0.27602238,  0.04416723,  0.37016418
0.2770184 ,  0.05034437,  0.37571452
0.27794143,  0.05632444,  0.38119074
0.27879067,  0.06214536,  0.38659204
0.2795655 ,  0.06783587,  0.39191723
0.28026658,  0.07341724,  0.39716349
0.28089358,  0.07890703,  0.40232944
0.28144581,  0.0843197 ,  0.40741404
0.28192358,  0.08966622,  0.41241521
0.28232739,  0.09495545,  0.41733086
0.28265633,  0.10019576,  0.42216032
0.28291049,  0.10539345,  0.42690202
0.28309095,  0.11055307,  0.43155375
0.28319704,  0.11567966,  0.43611482
0.28322882,  0.12077701,  0.44058404
0.28318684,  0.12584799,  0.44496   
0.283072  ,  0.13089477,  0.44924127
0.28288389,  0.13592005,  0.45342734
0.28262297,  0.14092556,  0.45751726
0.28229037,  0.14591233,  0.46150995
0.28188676,  0.15088147,  0.46540474
0.28141228,  0.15583425,  0.46920128
0.28086773,  0.16077132,  0.47289909
0.28025468,  0.16569272,  0.47649762
0.27957399,  0.17059884,  0.47999675
0.27882618,  0.1754902 ,  0.48339654
0.27801236,  0.18036684,  0.48669702
0.27713437,  0.18522836,  0.48989831
0.27619376,  0.19007447,  0.49300074
0.27519116,  0.1949054 ,  0.49600488
0.27412802,  0.19972086,  0.49891131
0.27300596,  0.20452049,  0.50172076
0.27182812,  0.20930306,  0.50443413
0.27059473,  0.21406899,  0.50705243
0.26930756,  0.21881782,  0.50957678
0.26796846,  0.22354911,  0.5120084 
0.26657984,  0.2282621 ,  0.5143487 
0.2651445 ,  0.23295593,  0.5165993 
0.2636632 ,  0.23763078,  0.51876163
0.26213801,  0.24228619,  0.52083736
0.26057103,  0.2469217 ,  0.52282822
0.25896451,  0.25153685,  0.52473609
0.25732244,  0.2561304 ,  0.52656332
0.25564519,  0.26070284,  0.52831152
0.25393498,  0.26525384,  0.52998273
0.25219404,  0.26978306,  0.53157905
0.25042462,  0.27429024,  0.53310261
0.24862899,  0.27877509,  0.53455561
0.2468114 ,  0.28323662,  0.53594093
0.24497208,  0.28767547,  0.53726018
0.24311324,  0.29209154,  0.53851561
0.24123708,  0.29648471,  0.53970946
0.23934575,  0.30085494,  0.54084398
0.23744138,  0.30520222,  0.5419214 
0.23552606,  0.30952657,  0.54294396
0.23360277,  0.31382773,  0.54391424
0.2316735 ,  0.3181058 ,  0.54483444
0.22973926,  0.32236127,  0.54570633
0.22780192,  0.32659432,  0.546532  
0.2258633 ,  0.33080515,  0.54731353
0.22392515,  0.334994  ,  0.54805291
0.22198915,  0.33916114,  0.54875211
0.22005691,  0.34330688,  0.54941304
0.21812995,  0.34743154,  0.55003755
0.21620971,  0.35153548,  0.55062743
0.21429757,  0.35561907,  0.5511844 
0.21239477,  0.35968273,  0.55171011
0.2105031 ,  0.36372671,  0.55220646
0.20862342,  0.36775151,  0.55267486
0.20675628,  0.37175775,  0.55311653
0.20490257,  0.37574589,  0.55353282
0.20306309,  0.37971644,  0.55392505
0.20123854,  0.38366989,  0.55429441
0.1994295 ,  0.38760678,  0.55464205
0.1976365 ,  0.39152762,  0.55496905
0.19585993,  0.39543297,  0.55527637
0.19410009,  0.39932336,  0.55556494
0.19235719,  0.40319934,  0.55583559
0.19063135,  0.40706148,  0.55608907
0.18892259,  0.41091033,  0.55632606
0.18723083,  0.41474645,  0.55654717
0.18555593,  0.4185704 ,  0.55675292
0.18389763,  0.42238275,  0.55694377
0.18225561,  0.42618405,  0.5571201 
0.18062949,  0.42997486,  0.55728221
0.17901879,  0.43375572,  0.55743035
0.17742298,  0.4375272 ,  0.55756466
0.17584148,  0.44128981,  0.55768526
0.17427363,  0.4450441 ,  0.55779216
0.17271876,  0.4487906 ,  0.55788532
0.17117615,  0.4525298 ,  0.55796464
0.16964573,  0.45626209,  0.55803034
0.16812641,  0.45998802,  0.55808199
0.1666171 ,  0.46370813,  0.55811913
0.16511703,  0.4674229 ,  0.55814141
0.16362543,  0.47113278,  0.55814842
0.16214155,  0.47483821,  0.55813967
0.16066467,  0.47853961,  0.55811466
0.15919413,  0.4822374 ,  0.5580728 
0.15772933,  0.48593197,  0.55801347
0.15626973,  0.4896237 ,  0.557936  
0.15481488,  0.49331293,  0.55783967
0.15336445,  0.49700003,  0.55772371
0.1519182 ,  0.50068529,  0.55758733
0.15047605,  0.50436904,  0.55742968
0.14903918,  0.50805136,  0.5572505 
0.14760731,  0.51173263,  0.55704861
0.14618026,  0.51541316,  0.55682271
0.14475863,  0.51909319,  0.55657181
0.14334327,  0.52277292,  0.55629491
0.14193527,  0.52645254,  0.55599097
0.14053599,  0.53013219,  0.55565893
0.13914708,  0.53381201,  0.55529773
0.13777048,  0.53749213,  0.55490625
0.1364085 ,  0.54117264,  0.55448339
0.13506561,  0.54485335,  0.55402906
0.13374299,  0.54853458,  0.55354108
0.13244401,  0.55221637,  0.55301828
0.13117249,  0.55589872,  0.55245948
0.1299327 ,  0.55958162,  0.55186354
0.12872938,  0.56326503,  0.55122927
0.12756771,  0.56694891,  0.55055551
0.12645338,  0.57063316,  0.5498411 
0.12539383,  0.57431754,  0.54908564
0.12439474,  0.57800205,  0.5482874 
0.12346281,  0.58168661,  0.54744498
0.12260562,  0.58537105,  0.54655722
0.12183122,  0.58905521,  0.54562298
0.12114807,  0.59273889,  0.54464114
0.12056501,  0.59642187,  0.54361058
0.12009154,  0.60010387,  0.54253043
0.11973756,  0.60378459,  0.54139999
0.11951163,  0.60746388,  0.54021751
0.11942341,  0.61114146,  0.53898192
0.11948255,  0.61481702,  0.53769219
0.11969858,  0.61849025,  0.53634733
0.12008079,  0.62216081,  0.53494633
0.12063824,  0.62582833,  0.53348834
0.12137972,  0.62949242,  0.53197275
0.12231244,  0.63315277,  0.53039808
0.12344358,  0.63680899,  0.52876343
0.12477953,  0.64046069,  0.52706792
0.12632581,  0.64410744,  0.52531069
0.12808703,  0.64774881,  0.52349092
0.13006688,  0.65138436,  0.52160791
0.13226797,  0.65501363,  0.51966086
0.13469183,  0.65863619,  0.5176488 
0.13733921,  0.66225157,  0.51557101
0.14020991,  0.66585927,  0.5134268 
0.14330291,  0.66945881,  0.51121549
0.1466164 ,  0.67304968,  0.50893644
0.15014782,  0.67663139,  0.5065889 
0.15389405,  0.68020343,  0.50417217
0.15785146,  0.68376525,  0.50168574
0.16201598,  0.68731632,  0.49912906
0.1663832 ,  0.69085611,  0.49650163
0.1709484 ,  0.69438405,  0.49380294
0.17570671,  0.6978996 ,  0.49103252
0.18065314,  0.70140222,  0.48818938
0.18578266,  0.70489133,  0.48527326
0.19109018,  0.70836635,  0.48228395
0.19657063,  0.71182668,  0.47922108
0.20221902,  0.71527175,  0.47608431
0.20803045,  0.71870095,  0.4728733 
0.21400015,  0.72211371,  0.46958774
0.22012381,  0.72550945,  0.46622638
0.2263969 ,  0.72888753,  0.46278934
0.23281498,  0.73224735,  0.45927675
0.2393739 ,  0.73558828,  0.45568838
0.24606968,  0.73890972,  0.45202405
0.25289851,  0.74221104,  0.44828355
0.25985676,  0.74549162,  0.44446673
0.26694127,  0.74875084,  0.44057284
0.27414922,  0.75198807,  0.4366009 
0.28147681,  0.75520266,  0.43255207
0.28892102,  0.75839399,  0.42842626
0.29647899,  0.76156142,  0.42422341
0.30414796,  0.76470433,  0.41994346
0.31192534,  0.76782207,  0.41558638
0.3198086 ,  0.77091403,  0.41115215
0.3277958 ,  0.77397953,  0.40664011
0.33588539,  0.7770179 ,  0.40204917
0.34407411,  0.78002855,  0.39738103
0.35235985,  0.78301086,  0.39263579
0.36074053,  0.78596419,  0.38781353
0.3692142 ,  0.78888793,  0.38291438
0.37777892,  0.79178146,  0.3779385 
0.38643282,  0.79464415,  0.37288606
0.39517408,  0.79747541,  0.36775726
0.40400101,  0.80027461,  0.36255223
0.4129135 ,  0.80304099,  0.35726893
0.42190813,  0.80577412,  0.35191009
0.43098317,  0.80847343,  0.34647607
0.44013691,  0.81113836,  0.3409673 
0.44936763,  0.81376835,  0.33538426
0.45867362,  0.81636288,  0.32972749
0.46805314,  0.81892143,  0.32399761
0.47750446,  0.82144351,  0.31819529
0.4870258 ,  0.82392862,  0.31232133
0.49661536,  0.82637633,  0.30637661
0.5062713 ,  0.82878621,  0.30036211
0.51599182,  0.83115784,  0.29427888
0.52577622,  0.83349064,  0.2881265 
0.5356211 ,  0.83578452,  0.28190832
0.5455244 ,  0.83803918,  0.27562602
0.55548397,  0.84025437,  0.26928147
0.5654976 ,  0.8424299 ,  0.26287683
0.57556297,  0.84456561,  0.25641457
0.58567772,  0.84666139,  0.24989748
0.59583934,  0.84871722,  0.24332878
0.60604528,  0.8507331 ,  0.23671214
0.61629283,  0.85270912,  0.23005179
0.62657923,  0.85464543,  0.22335258
0.63690157,  0.85654226,  0.21662012
0.64725685,  0.85839991,  0.20986086
0.65764197,  0.86021878,  0.20308229
0.66805369,  0.86199932,  0.19629307
0.67848868,  0.86374211,  0.18950326
0.68894351,  0.86544779,  0.18272455
0.69941463,  0.86711711,  0.17597055
0.70989842,  0.86875092,  0.16925712
0.72039115,  0.87035015,  0.16260273
0.73088902,  0.87191584,  0.15602894
0.74138803,  0.87344918,  0.14956101
0.75188414,  0.87495143,  0.14322828
0.76237342,  0.87642392,  0.13706449
0.77285183,  0.87786808,  0.13110864
0.78331535,  0.87928545,  0.12540538
0.79375994,  0.88067763,  0.12000532
0.80418159,  0.88204632,  0.11496505
0.81457634,  0.88339329,  0.11034678
0.82494028,  0.88472036,  0.10621724
0.83526959,  0.88602943,  0.1026459 
0.84556056,  0.88732243,  0.09970219
0.8558096 ,  0.88860134,  0.09745186
0.86601325,  0.88986815,  0.09595277
0.87616824,  0.89112487,  0.09525046
0.88627146,  0.89237353,  0.09537439
0.89632002,  0.89361614,  0.09633538
0.90631121,  0.89485467,  0.09812496
0.91624212,  0.89609127,  0.1007168 
0.92610579,  0.89732977,  0.10407067
0.93590444,  0.8985704 ,  0.10813094
0.94563626,  0.899815  ,  0.11283773
0.95529972,  0.90106534,  0.11812832
0.96489353,  0.90232311,  0.12394051
0.97441665,  0.90358991,  0.13021494
0.98386829,  0.90486726,  0.13689671
0.99324789,  0.90615657,  0.1439362`,a9=`R, G, B
5.03832136e-02, 2.98028976e-02, 5.27974883e-01
6.35363639e-02, 2.84259729e-02, 5.33123681e-01
7.53531234e-02, 2.72063728e-02, 5.38007001e-01
8.62217979e-02, 2.61253206e-02, 5.42657691e-01
9.63786097e-02, 2.51650976e-02, 5.47103487e-01
1.05979704e-01, 2.43092436e-02, 5.51367851e-01
1.15123641e-01, 2.35562500e-02, 5.55467728e-01
1.23902903e-01, 2.28781011e-02, 5.59423480e-01
1.32380720e-01, 2.22583774e-02, 5.63250116e-01
1.40603076e-01, 2.16866674e-02, 5.66959485e-01
1.48606527e-01, 2.11535876e-02, 5.70561711e-01
1.56420649e-01, 2.06507174e-02, 5.74065446e-01
1.64069722e-01, 2.01705326e-02, 5.77478074e-01
1.71573925e-01, 1.97063415e-02, 5.80805890e-01
1.78950212e-01, 1.92522243e-02, 5.84054243e-01
1.86212958e-01, 1.88029767e-02, 5.87227661e-01
1.93374449e-01, 1.83540593e-02, 5.90329954e-01
2.00445260e-01, 1.79015512e-02, 5.93364304e-01
2.07434551e-01, 1.74421086e-02, 5.96333341e-01
2.14350298e-01, 1.69729276e-02, 5.99239207e-01
2.21196750e-01, 1.64970484e-02, 6.02083323e-01
2.27982971e-01, 1.60071509e-02, 6.04867403e-01
2.34714537e-01, 1.55015065e-02, 6.07592438e-01
2.41396253e-01, 1.49791041e-02, 6.10259089e-01
2.48032377e-01, 1.44393586e-02, 6.12867743e-01
2.54626690e-01, 1.38820918e-02, 6.15418537e-01
2.61182562e-01, 1.33075156e-02, 6.17911385e-01
2.67702993e-01, 1.27162163e-02, 6.20345997e-01
2.74190665e-01, 1.21091423e-02, 6.22721903e-01
2.80647969e-01, 1.14875915e-02, 6.25038468e-01
2.87076059e-01, 1.08554862e-02, 6.27294975e-01
2.93477695e-01, 1.02128849e-02, 6.29490490e-01
2.99855122e-01, 9.56079551e-03, 6.31623923e-01
3.06209825e-01, 8.90185346e-03, 6.33694102e-01
3.12543124e-01, 8.23900704e-03, 6.35699759e-01
3.18856183e-01, 7.57551051e-03, 6.37639537e-01
3.25150025e-01, 6.91491734e-03, 6.39512001e-01
3.31425547e-01, 6.26107379e-03, 6.41315649e-01
3.37683446e-01, 5.61830889e-03, 6.43048936e-01
3.43924591e-01, 4.99053080e-03, 6.44710195e-01
3.50149699e-01, 4.38202557e-03, 6.46297711e-01
3.56359209e-01, 3.79781761e-03, 6.47809772e-01
3.62553473e-01, 3.24319591e-03, 6.49244641e-01
3.68732762e-01, 2.72370721e-03, 6.50600561e-01
3.74897270e-01, 2.24514897e-03, 6.51875762e-01
3.81047116e-01, 1.81356205e-03, 6.53068467e-01
3.87182639e-01, 1.43446923e-03, 6.54176761e-01
3.93304010e-01, 1.11388259e-03, 6.55198755e-01
3.99410821e-01, 8.59420809e-04, 6.56132835e-01
4.05502914e-01, 6.78091517e-04, 6.56977276e-01
4.11580082e-01, 5.77101735e-04, 6.57730380e-01
4.17642063e-01, 5.63847476e-04, 6.58390492e-01
4.23688549e-01, 6.45902780e-04, 6.58956004e-01
4.29719186e-01, 8.31008207e-04, 6.59425363e-01
4.35733575e-01, 1.12705875e-03, 6.59797077e-01
4.41732123e-01, 1.53984779e-03, 6.60069009e-01
4.47713600e-01, 2.07954744e-03, 6.60240367e-01
4.53677394e-01, 2.75470302e-03, 6.60309966e-01
4.59622938e-01, 3.57374415e-03, 6.60276655e-01
4.65549631e-01, 4.54518084e-03, 6.60139383e-01
4.71456847e-01, 5.67758762e-03, 6.59897210e-01
4.77343929e-01, 6.97958743e-03, 6.59549311e-01
4.83210198e-01, 8.45983494e-03, 6.59094989e-01
4.89054951e-01, 1.01269996e-02, 6.58533677e-01
4.94877466e-01, 1.19897486e-02, 6.57864946e-01
5.00677687e-01, 1.40550640e-02, 6.57087561e-01
5.06454143e-01, 1.63333443e-02, 6.56202294e-01
5.12206035e-01, 1.88332232e-02, 6.55209222e-01
5.17932580e-01, 2.15631918e-02, 6.54108545e-01
5.23632990e-01, 2.45316468e-02, 6.52900629e-01
5.29306474e-01, 2.77468735e-02, 6.51586010e-01
5.34952244e-01, 3.12170300e-02, 6.50165396e-01
5.40569510e-01, 3.49501310e-02, 6.48639668e-01
5.46157494e-01, 3.89540334e-02, 6.47009884e-01
5.51715423e-01, 4.31364795e-02, 6.45277275e-01
5.57242538e-01, 4.73307585e-02, 6.43443250e-01
5.62738096e-01, 5.15448092e-02, 6.41509389e-01
5.68201372e-01, 5.57776706e-02, 6.39477440e-01
5.73631859e-01, 6.00281369e-02, 6.37348841e-01
5.79028682e-01, 6.42955547e-02, 6.35126108e-01
5.84391137e-01, 6.85790261e-02, 6.32811608e-01
5.89718606e-01, 7.28775875e-02, 6.30407727e-01
5.95010505e-01, 7.71902878e-02, 6.27916992e-01
6.00266283e-01, 8.15161895e-02, 6.25342058e-01
6.05485428e-01, 8.58543713e-02, 6.22685703e-01
6.10667469e-01, 9.02039303e-02, 6.19950811e-01
6.15811974e-01, 9.45639838e-02, 6.17140367e-01
6.20918555e-01, 9.89336721e-02, 6.14257440e-01
6.25986869e-01, 1.03312160e-01, 6.11305174e-01
6.31016615e-01, 1.07698641e-01, 6.08286774e-01
6.36007543e-01, 1.12092335e-01, 6.05205491e-01
6.40959444e-01, 1.16492495e-01, 6.02064611e-01
6.45872158e-01, 1.20898405e-01, 5.98867442e-01
6.50745571e-01, 1.25309384e-01, 5.95617300e-01
6.55579615e-01, 1.29724785e-01, 5.92317494e-01
6.60374266e-01, 1.34143997e-01, 5.88971318e-01
6.65129493e-01, 1.38566428e-01, 5.85582301e-01
6.69845385e-01, 1.42991540e-01, 5.82153572e-01
6.74522060e-01, 1.47418835e-01, 5.78688247e-01
6.79159664e-01, 1.51847851e-01, 5.75189431e-01
6.83758384e-01, 1.56278163e-01, 5.71660158e-01
6.88318440e-01, 1.60709387e-01, 5.68103380e-01
6.92840088e-01, 1.65141174e-01, 5.64521958e-01
6.97323615e-01, 1.69573215e-01, 5.60918659e-01
7.01769334e-01, 1.74005236e-01, 5.57296144e-01
7.06177590e-01, 1.78437000e-01, 5.53656970e-01
7.10548747e-01, 1.82868306e-01, 5.50003579e-01
7.14883195e-01, 1.87298986e-01, 5.46338299e-01
7.19181339e-01, 1.91728906e-01, 5.42663338e-01
7.23443604e-01, 1.96157962e-01, 5.38980786e-01
7.27670428e-01, 2.00586086e-01, 5.35292612e-01
7.31862231e-01, 2.05013174e-01, 5.31600995e-01
7.36019424e-01, 2.09439071e-01, 5.27908434e-01
7.40142557e-01, 2.13863965e-01, 5.24215533e-01
7.44232102e-01, 2.18287899e-01, 5.20523766e-01
7.48288533e-01, 2.22710942e-01, 5.16834495e-01
7.52312321e-01, 2.27133187e-01, 5.13148963e-01
7.56303937e-01, 2.31554749e-01, 5.09468305e-01
7.60263849e-01, 2.35975765e-01, 5.05793543e-01
7.64192516e-01, 2.40396394e-01, 5.02125599e-01
7.68090391e-01, 2.44816813e-01, 4.98465290e-01
7.71957916e-01, 2.49237220e-01, 4.94813338e-01
7.75795522e-01, 2.53657797e-01, 4.91170517e-01
7.79603614e-01, 2.58078397e-01, 4.87539124e-01
7.83382636e-01, 2.62499662e-01, 4.83917732e-01
7.87132978e-01, 2.66921859e-01, 4.80306702e-01
7.90855015e-01, 2.71345267e-01, 4.76706319e-01
7.94549101e-01, 2.75770179e-01, 4.73116798e-01
7.98215577e-01, 2.80196901e-01, 4.69538286e-01
8.01854758e-01, 2.84625750e-01, 4.65970871e-01
8.05466945e-01, 2.89057057e-01, 4.62414580e-01
8.09052419e-01, 2.93491117e-01, 4.58869577e-01
8.12611506e-01, 2.97927865e-01, 4.55337565e-01
8.16144382e-01, 3.02368130e-01, 4.51816385e-01
8.19651255e-01, 3.06812282e-01, 4.48305861e-01
8.23132309e-01, 3.11260703e-01, 4.44805781e-01
8.26587706e-01, 3.15713782e-01, 4.41315901e-01
8.30017584e-01, 3.20171913e-01, 4.37835947e-01
8.33422053e-01, 3.24635499e-01, 4.34365616e-01
8.36801237e-01, 3.29104836e-01, 4.30905052e-01
8.40155276e-01, 3.33580106e-01, 4.27454836e-01
8.43484103e-01, 3.38062109e-01, 4.24013059e-01
8.46787726e-01, 3.42551272e-01, 4.20579333e-01
8.50066132e-01, 3.47048028e-01, 4.17153264e-01
8.53319279e-01, 3.51552815e-01, 4.13734445e-01
8.56547103e-01, 3.56066072e-01, 4.10322469e-01
8.59749520e-01, 3.60588229e-01, 4.06916975e-01
8.62926559e-01, 3.65119408e-01, 4.03518809e-01
8.66077920e-01, 3.69660446e-01, 4.00126027e-01
8.69203436e-01, 3.74211795e-01, 3.96738211e-01
8.72302917e-01, 3.78773910e-01, 3.93354947e-01
8.75376149e-01, 3.83347243e-01, 3.89975832e-01
8.78422895e-01, 3.87932249e-01, 3.86600468e-01
8.81442916e-01, 3.92529339e-01, 3.83228622e-01
8.84435982e-01, 3.97138877e-01, 3.79860246e-01
8.87401682e-01, 4.01761511e-01, 3.76494232e-01
8.90339687e-01, 4.06397694e-01, 3.73130228e-01
8.93249647e-01, 4.11047871e-01, 3.69767893e-01
8.96131191e-01, 4.15712489e-01, 3.66406907e-01
8.98983931e-01, 4.20391986e-01, 3.63046965e-01
9.01807455e-01, 4.25086807e-01, 3.59687758e-01
9.04601295e-01, 4.29797442e-01, 3.56328796e-01
9.07364995e-01, 4.34524335e-01, 3.52969777e-01
9.10098088e-01, 4.39267908e-01, 3.49610469e-01
9.12800095e-01, 4.44028574e-01, 3.46250656e-01
9.15470518e-01, 4.48806744e-01, 3.42890148e-01
9.18108848e-01, 4.53602818e-01, 3.39528771e-01
9.20714383e-01, 4.58417420e-01, 3.36165582e-01
9.23286660e-01, 4.63250828e-01, 3.32800827e-01
9.25825146e-01, 4.68103387e-01, 3.29434512e-01
9.28329275e-01, 4.72975465e-01, 3.26066550e-01
9.30798469e-01, 4.77867420e-01, 3.22696876e-01
9.33232140e-01, 4.82779603e-01, 3.19325444e-01
9.35629684e-01, 4.87712357e-01, 3.15952211e-01
9.37990034e-01, 4.92666544e-01, 3.12575440e-01
9.40312939e-01, 4.97642038e-01, 3.09196628e-01
9.42597771e-01, 5.02639147e-01, 3.05815824e-01
9.44843893e-01, 5.07658169e-01, 3.02433101e-01
9.47050662e-01, 5.12699390e-01, 2.99048555e-01
9.49217427e-01, 5.17763087e-01, 2.95662308e-01
9.51343530e-01, 5.22849522e-01, 2.92274506e-01
9.53427725e-01, 5.27959550e-01, 2.88883445e-01
9.55469640e-01, 5.33093083e-01, 2.85490391e-01
9.57468770e-01, 5.38250172e-01, 2.82096149e-01
9.59424430e-01, 5.43431038e-01, 2.78700990e-01
9.61335930e-01, 5.48635890e-01, 2.75305214e-01
9.63202573e-01, 5.53864931e-01, 2.71909159e-01
9.65023656e-01, 5.59118349e-01, 2.68513200e-01
9.66798470e-01, 5.64396327e-01, 2.65117752e-01
9.68525639e-01, 5.69699633e-01, 2.61721488e-01
9.70204593e-01, 5.75028270e-01, 2.58325424e-01
9.71835007e-01, 5.80382015e-01, 2.54931256e-01
9.73416145e-01, 5.85761012e-01, 2.51539615e-01
9.74947262e-01, 5.91165394e-01, 2.48151200e-01
9.76427606e-01, 5.96595287e-01, 2.44766775e-01
9.77856416e-01, 6.02050811e-01, 2.41387186e-01
9.79232922e-01, 6.07532077e-01, 2.38013359e-01
9.80556344e-01, 6.13039190e-01, 2.34646316e-01
9.81825890e-01, 6.18572250e-01, 2.31287178e-01
9.83040742e-01, 6.24131362e-01, 2.27937141e-01
9.84198924e-01, 6.29717516e-01, 2.24595006e-01
9.85300760e-01, 6.35329876e-01, 2.21264889e-01
9.86345421e-01, 6.40968508e-01, 2.17948456e-01
9.87332067e-01, 6.46633475e-01, 2.14647532e-01
9.88259846e-01, 6.52324832e-01, 2.11364122e-01
9.89127893e-01, 6.58042630e-01, 2.08100426e-01
9.89935328e-01, 6.63786914e-01, 2.04858855e-01
9.90681261e-01, 6.69557720e-01, 2.01642049e-01
9.91364787e-01, 6.75355082e-01, 1.98452900e-01
9.91984990e-01, 6.81179025e-01, 1.95294567e-01
9.92540939e-01, 6.87029567e-01, 1.92170500e-01
9.93031693e-01, 6.92906719e-01, 1.89084459e-01
9.93456302e-01, 6.98810484e-01, 1.86040537e-01
9.93813802e-01, 7.04740854e-01, 1.83043180e-01
9.94103226e-01, 7.10697814e-01, 1.80097207e-01
9.94323596e-01, 7.16681336e-01, 1.77207826e-01
9.94473934e-01, 7.22691379e-01, 1.74380656e-01
9.94553260e-01, 7.28727890e-01, 1.71621733e-01
9.94560594e-01, 7.34790799e-01, 1.68937522e-01
9.94494964e-01, 7.40880020e-01, 1.66334918e-01
9.94355411e-01, 7.46995448e-01, 1.63821243e-01
9.94140989e-01, 7.53136955e-01, 1.61404226e-01
9.93850778e-01, 7.59304390e-01, 1.59091984e-01
9.93482190e-01, 7.65498551e-01, 1.56890625e-01
9.93033251e-01, 7.71719833e-01, 1.54807583e-01
9.92505214e-01, 7.77966775e-01, 1.52854862e-01
9.91897270e-01, 7.84239120e-01, 1.51041581e-01
9.91208680e-01, 7.90536569e-01, 1.49376885e-01
9.90438793e-01, 7.96858775e-01, 1.47869810e-01
9.89587065e-01, 8.03205337e-01, 1.46529128e-01
9.88647741e-01, 8.09578605e-01, 1.45357284e-01
9.87620557e-01, 8.15977942e-01, 1.44362644e-01
9.86509366e-01, 8.22400620e-01, 1.43556679e-01
9.85314198e-01, 8.28845980e-01, 1.42945116e-01
9.84031139e-01, 8.35315360e-01, 1.42528388e-01
9.82652820e-01, 8.41811730e-01, 1.42302653e-01
9.81190389e-01, 8.48328902e-01, 1.42278607e-01
9.79643637e-01, 8.54866468e-01, 1.42453425e-01
9.77994918e-01, 8.61432314e-01, 1.42808191e-01
9.76264977e-01, 8.68015998e-01, 1.43350944e-01
9.74443038e-01, 8.74622194e-01, 1.44061156e-01
9.72530009e-01, 8.81250063e-01, 1.44922913e-01
9.70532932e-01, 8.87896125e-01, 1.45918663e-01
9.68443477e-01, 8.94563989e-01, 1.47014438e-01
9.66271225e-01, 9.01249365e-01, 1.48179639e-01
9.64021057e-01, 9.07950379e-01, 1.49370428e-01
9.61681481e-01, 9.14672479e-01, 1.50520343e-01
9.59275646e-01, 9.21406537e-01, 1.51566019e-01
9.56808068e-01, 9.28152065e-01, 1.52409489e-01
9.54286813e-01, 9.34907730e-01, 1.52921158e-01
9.51726083e-01, 9.41670605e-01, 1.52925363e-01
9.49150533e-01, 9.48434900e-01, 1.52177604e-01
9.46602270e-01, 9.55189860e-01, 1.50327944e-01
9.44151742e-01, 9.61916487e-01, 1.46860789e-01
9.41896120e-01, 9.68589814e-01, 1.40955606e-01
9.40015097e-01, 9.75158357e-01, 1.31325517e-01`,c9=`R,G,B
0.18995,0.07176,0.23217
0.19483,0.08339,0.26149
0.19956,0.09498,0.29024
0.20415,0.10652,0.31844
0.2086,0.11802,0.34607
0.21291,0.12947,0.37314
0.21708,0.14087,0.39964
0.22111,0.15223,0.42558
0.225,0.16354,0.45096
0.22875,0.17481,0.47578
0.23236,0.18603,0.50004
0.23582,0.1972,0.52373
0.23915,0.20833,0.54686
0.24234,0.21941,0.56942
0.24539,0.23044,0.59142
0.2483,0.24143,0.61286
0.25107,0.25237,0.63374
0.25369,0.26327,0.65406
0.25618,0.27412,0.67381
0.25853,0.28492,0.693
0.26074,0.29568,0.71162
0.2628,0.30639,0.72968
0.26473,0.31706,0.74718
0.26652,0.32768,0.76412
0.26816,0.33825,0.7805
0.26967,0.34878,0.79631
0.27103,0.35926,0.81156
0.27226,0.3697,0.82624
0.27334,0.38008,0.84037
0.27429,0.39043,0.85393
0.27509,0.40072,0.86692
0.27576,0.41097,0.87936
0.27628,0.42118,0.89123
0.27667,0.43134,0.90254
0.27691,0.44145,0.91328
0.27701,0.45152,0.92347
0.27698,0.46153,0.93309
0.2768,0.47151,0.94214
0.27648,0.48144,0.95064
0.27603,0.49132,0.95857
0.27543,0.50115,0.96594
0.27469,0.51094,0.97275
0.27381,0.52069,0.97899
0.27273,0.5304,0.98461
0.27106,0.54015,0.9893
0.26878,0.54995,0.99303
0.26592,0.55979,0.99583
0.26252,0.56967,0.99773
0.25862,0.57958,0.99876
0.25425,0.5895,0.99896
0.24946,0.59943,0.99835
0.24427,0.60937,0.99697
0.23874,0.61931,0.99485
0.23288,0.62923,0.99202
0.22676,0.63913,0.98851
0.22039,0.64901,0.98436
0.21382,0.65886,0.97959
0.20708,0.66866,0.97423
0.20021,0.67842,0.96833
0.19326,0.68812,0.9619
0.18625,0.69775,0.95498
0.17923,0.70732,0.94761
0.17223,0.7168,0.93981
0.16529,0.7262,0.93161
0.15844,0.73551,0.92305
0.15173,0.74472,0.91416
0.14519,0.75381,0.90496
0.13886,0.76279,0.8955
0.13278,0.77165,0.8858
0.12698,0.78037,0.8759
0.12151,0.78896,0.86581
0.11639,0.7974,0.85559
0.11167,0.80569,0.84525
0.10738,0.81381,0.83484
0.10357,0.82177,0.82437
0.10026,0.82955,0.81389
0.0975,0.83714,0.80342
0.09532,0.84455,0.79299
0.09377,0.85175,0.78264
0.09287,0.85875,0.7724
0.09267,0.86554,0.7623
0.0932,0.87211,0.75237
0.09451,0.87844,0.74265
0.09662,0.88454,0.73316
0.09958,0.8904,0.72393
0.10342,0.896,0.715
0.10815,0.90142,0.70599
0.11374,0.90673,0.69651
0.12014,0.91193,0.6866
0.12733,0.91701,0.67627
0.13526,0.92197,0.66556
0.14391,0.9268,0.65448
0.15323,0.93151,0.64308
0.16319,0.93609,0.63137
0.17377,0.94053,0.61938
0.18491,0.94484,0.60713
0.19659,0.94901,0.59466
0.20877,0.95304,0.58199
0.22142,0.95692,0.56914
0.23449,0.96065,0.55614
0.24797,0.96423,0.54303
0.2618,0.96765,0.52981
0.27597,0.97092,0.51653
0.29042,0.97403,0.50321
0.30513,0.97697,0.48987000000000003
0.32006,0.97974000000000006,0.47654
0.33517,0.98234,0.46325
0.35043,0.98477,0.45002
0.36581,0.98702,0.43688
0.38127,0.98909,0.42386
0.39678,0.99098,0.41098
0.41229,0.99268,0.39826
0.42778,0.99419,0.38575
0.44321,0.99551,0.37345
0.45854,0.99663,0.3614
0.47375,0.99755,0.34963
0.48879,0.99828,0.33816
0.50362,0.99879,0.32701
0.51822,0.9991,0.31622
0.53255,0.99919,0.30581
0.54658,0.99907,0.29581
0.56026,0.99873,0.28623
0.57357,0.99817,0.27712
0.58646,0.99739,0.26849
0.59891,0.99638,0.26038
0.61088,0.99514,0.2528
0.62233,0.99366,0.24579
0.63323,0.99195,0.23937
0.64362,0.98999,0.23356
0.65394,0.98775,0.22835
0.66428,0.98524,0.2237
0.67462,0.98246,0.2196
0.68494,0.97941,0.21602
0.69525,0.9761,0.21294
0.70553,0.97255,0.21032
0.71577,0.96875,0.20815
0.72596,0.9647,0.2064
0.7361,0.96043,0.20504
0.74617,0.95593,0.20406
0.75617,0.95121,0.20343
0.76608,0.94626999999999994,0.20311
0.77591,0.94113,0.2031
0.78563,0.93579,0.20336
0.79524,0.93025,0.20386
0.80473,0.92452,0.20459
0.8141,0.91861,0.20552
0.82333,0.91253,0.20663
0.83241,0.90627,0.20788
0.84133,0.89986,0.20926
0.8501,0.89328,0.21074
0.85868,0.88655,0.2123
0.86709,0.87968,0.21391
0.8753,0.87267,0.21555
0.88331,0.86553,0.21719
0.89112,0.85826,0.2188
0.8987,0.85087,0.22038
0.90605,0.84337,0.22188
0.91317,0.83576,0.22328
0.92004,0.82806,0.22456
0.92666,0.82025,0.2257
0.93301,0.81236,0.22667
0.93909,0.80439,0.22744
0.94489,0.79634,0.228
0.95039,0.78823,0.22831
0.9556,0.78005,0.22836
0.96049,0.77181,0.22811
0.96507,0.76352,0.22754
0.96931,0.75519,0.22663
0.97323,0.74682,0.22536
0.97679,0.73842,0.22369
0.98,0.73,0.22161
0.98289,0.7214,0.21918
0.98549,0.7125,0.2165
0.98781,0.7033,0.21358
0.98986,0.69382,0.21043
0.99163,0.68408,0.20706
0.99314,0.67408,0.20348
0.99438,0.66386,0.19971
0.99535,0.65341,0.19577
0.99607,0.64277,0.19165
0.99654,0.63193,0.18738
0.99675,0.62093,0.18297
0.99672,0.60977,0.17842
0.99644,0.59846,0.17376
0.99593,0.58703,0.16899
0.99517,0.57549,0.16412
0.99419,0.56386,0.15918
0.99297,0.55214,0.15417
0.99153,0.54036,0.1491
0.98987,0.52854,0.14398
0.98799,0.51667,0.13883
0.9859,0.50479,0.13367
0.9836,0.49291,0.12849
0.98108,0.48104,0.12332
0.97837,0.4692,0.11817
0.97545,0.4574,0.11305
0.97234,0.44565,0.10797
0.96904,0.43399,0.10294
0.96555,0.42241,0.09798
0.96187,0.41093,0.0931
0.95801,0.39958,0.08831
0.95398,0.38836,0.08362
0.94977,0.37729,0.07905
0.94538,0.36638,0.07461
0.94084,0.35566,0.07031
0.93612,0.34513,0.06616
0.93125,0.33482,0.06218
0.92623,0.32473,0.05837
0.92105,0.31489,0.05475
0.91572,0.3053,0.05134
0.91024,0.29599,0.04814
0.90463,0.28696,0.04516
0.89888,0.27824,0.04243
0.89298,0.26981,0.03993
0.88691,0.26152,0.03753
0.88066,0.25334,0.03521
0.87422,0.24526,0.03297
0.8676,0.2373,0.03082
0.86079,0.22945,0.02875
0.8538,0.2217,0.02677
0.84662,0.21407,0.02487
0.83926,0.20654,0.02305
0.83172,0.19912,0.02131
0.82399,0.19182,0.01966
0.81608,0.18462,0.01809
0.80799,0.17753,0.0166
0.79971,0.17055,0.0152
0.79125,0.16368,0.01387
0.7826,0.15693,0.01264
0.77377,0.15028,0.01148
0.76476,0.14374,0.01041
0.75556,0.13731,0.00942
0.74617,0.13098,0.00851
0.73661,0.12477,0.00769
0.72686,0.11867,0.00695
0.71692,0.11268,0.00629
0.7068,0.1068,0.00571
0.6965,0.10102,0.00522
0.68602,0.09536,0.00481
0.67535,0.0898,0.00449
0.66449,0.08436,0.00424
0.65345,0.07902,0.00408
0.64223,0.0738,0.00401
0.63082,0.06868,0.00401
0.61923,0.06367,0.0041
0.60746,0.05878,0.00427
0.5955,0.05399,0.00453
0.58336,0.04931,0.00486
0.57103,0.04474,0.00529
0.55852,0.04028,0.00579
0.54583,0.03593,0.00638
0.53295,0.03169,0.00705
0.51989,0.02756,0.0078
0.50664,0.02354,0.00863
0.49321,0.01963,0.00955
0.4796,0.01583,0.01055`,o0=e=>e.split(`
`).slice(1).map(n=>n.trim()).filter(n=>!!n).map(n=>{const t=n.split(/,\s*/),[r,l,o]=t.map(u=>parseFloat(u));return[r,l,o]}),f9=new Map([["magma",o0(u9)],["viridis",o0(s9)],["plasma",o0(a9)],["turbo",o0(c9)]]);class d9{constructor(n,t){nu(this,"mapping");const r=f9.get(n);if(!r)throw new Error(`Unrecognized mapping "${n}"`);this.mapping=[...r],t&&this.mapping.reverse()}color(n,t,r){const l=p9(O1(n,t,r,0,255),0,255),o=Math.floor(l),i=Math.ceil(l);if(o===i)return L1(this.mapping[o]);const u=this.mapping[o],s=this.mapping[i];return L1(h9(u,s,O1(l,o,i,0,1)))}}function L1(e){const[n,t,r]=e.map(l=>l*255);return`rgb(${n}, ${t}, ${r})`}function p9(e,n,t){return Math.max(n,Math.min(t,e))}function O1(e,n,t,r,l){return r+(e-n)*(l-r)/(t-n)}function h9(e,n,t){return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}const m9=i9,yc=nn.li`
  margin: 0;
  line-height: 40px;
  vertical-align: middle;
`,v9=nn.button`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0 10px;
  overflow: hidden;

  border-radius: 0;
  background: none;
  font-weight: normal;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`,g9=({index:e,style:n,data:t})=>{const r=eu(i=>i.setSelectedLink),l=t[e],o=Z.useCallback(()=>{r(l)},[l,r]);return A.jsx(yc,{style:n,children:A.jsx(v9,{onClick:o,children:l})})},y9=nn(m9)`
  list-style-type: none;
  padding: 0;
  margin: 0;

  ${yc}:not(:first-child) {
    //border-top: 1px solid gray;
    box-shadow: 0 -1px 0 0 gray;
  }
`,S9=nn.aside`
  width: 300px;

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: 50vh;
    overflow-y: hidden;
    border-bottom: 1px solid #ccc;
  }
`,w9=nn.div`
  display: flex;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`,k9=nn.input`
  font-size: 16px;
  padding: 5px 10px;
  width: 100%;
`,x9=nn.div`
  padding-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  align-items: stretch;
`,C9=(e,n)=>n[e],E9=({searchFilter:e})=>{const{corpus:n}=eu(),t=Z.useMemo(()=>{const r=e.trim();return[...r.length>=3?n.filter(o=>o.includes(r)):n].sort()},[e,n]);return A.jsx(y9,{innerElementType:"ul",height:720,width:"100%",itemSize:40,itemCount:t.length,itemData:t,itemKey:C9,children:g9})},_9=()=>{const[e,n]=Z.useState("");return A.jsxs(S9,{children:[A.jsxs(x9,{children:[A.jsx(k9,{value:e,onChange:Z.useCallback(t=>n(t.currentTarget.value),[])}),A.jsx("button",{onClick:Z.useCallback(()=>{n("")},[]),children:"x"})]}),A.jsx(E9,{searchFilter:e})]})},$1="/scp-wiki-semantic-similarity-search";function P9(){const[e,n]=Z.useState(null),[t,r]=Z.useState("");Z.useEffect(()=>{const o=fetch(`${$1}/corpus.txt`).then(u=>u.text()).then(u=>u.split(`
`).map(s=>s.trim()).filter(s=>!!s)),i=fetch(`${$1}/matches.bin`).then(u=>u.arrayBuffer());Promise.all([o,i]).then(([u,s])=>{n({corpus:u,buf:s}),r(u[0])})},[]);const l=Z.useMemo(()=>({...e??{},selectedLink:t,setSelectedLink:r}),[e,t,r]);return e?A.jsx(gc.Provider,{value:l,children:A.jsxs(w9,{children:[A.jsx(_9,{}),A.jsx(R9,{})]})}):A.jsx("div",{className:"app",children:"loading"})}const z9=(e,n,t)=>{const r=[],l=new DataView(e),o=6,i=50*o,u=t*i;for(let s=0;s<50;s++){const d=l.getUint16(u+s*o,!0);if(d<0||d>n.length)throw console.error({corpusIndexOfThisItem:d,index:t,buf:e,corpus:n}),new Error("corpusIndexOfThisItem out of range");r.push({link:n[d],similarity:l.getFloat32(u+s*o+2,!0)})}return r},N9=new d9("viridis"),I9=nn.a`
  color: inherit;
  text-decoration: none;
`,T9=nn.button`
  border: none;
  background: none;
  padding: 0;
  text-decoration: none;
`;function R9(){const{corpus:e,buf:n,selectedLink:t,setSelectedLink:r}=eu(),l=e.indexOf(t),o=z9(n,e,l);return A.jsxs("div",{style:{padding:"10px"},children:[A.jsx("h2",{children:t}),A.jsx("table",{children:A.jsx("tbody",{children:o.map(({link:i,similarity:u})=>A.jsxs("tr",{children:[A.jsx("td",{style:{padding:"0 5px"},children:A.jsx(T9,{onClick:()=>{r(i)},children:"Search"})}),A.jsx("td",{style:{padding:"0 5px"},children:A.jsx(I9,{href:`https://scp-wiki.wikidot.com/${encodeURI(i)}`,target:"_blank",rel:"noopener noreferrer",children:"Wiki 🡥"})}),A.jsx("td",{style:{backgroundColor:N9.color(u,0,1),color:"#000"},children:u.toFixed(3)}),A.jsx("td",{style:{paddingLeft:"10px"},children:i})]},i))})})]})}ql.createRoot(document.getElementById("root")).render(A.jsx(zt.StrictMode,{children:A.jsx(P9,{})}));
