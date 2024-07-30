var _c=Object.defineProperty;var Pc=(e,n,t)=>n in e?_c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ru=(e,n,t)=>Pc(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function Nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F1={exports:{}},Z0={},A1={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),zc=Symbol.for("react.portal"),Ic=Symbol.for("react.fragment"),Tc=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Lc=Symbol.for("react.context"),$c=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Dc=Symbol.for("react.memo"),Mc=Symbol.for("react.lazy"),lu=Symbol.iterator;function Fc(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var U1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W1=Object.assign,B1={};function Ut(e,n,t){this.props=e,this.context=n,this.refs=B1,this.updater=t||U1}Ut.prototype.isReactComponent={};Ut.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function H1(){}H1.prototype=Ut.prototype;function li(e,n,t){this.props=e,this.context=n,this.refs=B1,this.updater=t||U1}var oi=li.prototype=new H1;oi.constructor=li;W1(oi,Ut.prototype);oi.isPureReactComponent=!0;var ou=Array.isArray,V1=Object.prototype.hasOwnProperty,ii={current:null},Q1={key:!0,ref:!0,__self:!0,__source:!0};function K1(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)V1.call(n,r)&&!Q1.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Lr,type:e,key:o,ref:i,props:l,_owner:ii.current}}function Ac(e,n){return{$$typeof:Lr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ui(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function Uc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var iu=/\/+/g;function kl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Uc(""+e.key):n.toString(36)}function i0(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Lr:case zc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+kl(i,0):r,ou(l)?(t="",e!=null&&(t=e.replace(iu,"$&/")+"/"),i0(l,n,t,"",function(f){return f})):l!=null&&(ui(l)&&(l=Ac(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(iu,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",ou(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+kl(o,u);i+=i0(o,n,t,s,l)}else if(s=Fc(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+kl(o,u++),i+=i0(o,n,t,s,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Ur(e,n,t){if(e==null)return e;var r=[],l=0;return i0(e,r,"","",function(o){return n.call(t,o,l++)}),r}function Wc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},u0={transition:null},Bc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:u0,ReactCurrentOwner:ii};function G1(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Ur,forEach:function(e,n,t){Ur(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ur(e,function(){n++}),n},toArray:function(e){return Ur(e,function(n){return n})||[]},only:function(e){if(!ui(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Ut;L.Fragment=Ic;L.Profiler=Oc;L.PureComponent=li;L.StrictMode=Tc;L.Suspense=jc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bc;L.act=G1;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=W1({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=ii.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)V1.call(n,s)&&!Q1.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Lr,type:e.type,key:l,ref:o,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:Lc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rc,_context:e},e.Consumer=e};L.createElement=K1;L.createFactory=function(e){var n=K1.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:$c,render:e}};L.isValidElement=ui;L.lazy=function(e){return{$$typeof:Mc,_payload:{_status:-1,_result:e},_init:Wc}};L.memo=function(e,n){return{$$typeof:Dc,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=u0.transition;u0.transition={};try{e()}finally{u0.transition=n}};L.unstable_act=G1;L.useCallback=function(e,n){return me.current.useCallback(e,n)};L.useContext=function(e){return me.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return me.current.useDeferredValue(e)};L.useEffect=function(e,n){return me.current.useEffect(e,n)};L.useId=function(){return me.current.useId()};L.useImperativeHandle=function(e,n,t){return me.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return me.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return me.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return me.current.useMemo(e,n)};L.useReducer=function(e,n,t){return me.current.useReducer(e,n,t)};L.useRef=function(e){return me.current.useRef(e)};L.useState=function(e){return me.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return me.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return me.current.useTransition()};L.version="18.3.1";A1.exports=L;var U=A1.exports;const Nt=Nc(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=U,Vc=Symbol.for("react.element"),Qc=Symbol.for("react.fragment"),Kc=Object.prototype.hasOwnProperty,Gc=Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yc={key:!0,ref:!0,__self:!0,__source:!0};function Y1(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Kc.call(n,r)&&!Yc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Vc,type:e,key:o,ref:i,props:l,_owner:Gc.current}}Z0.Fragment=Qc;Z0.jsx=Y1;Z0.jsxs=Y1;F1.exports=Z0;var I=F1.exports,eo={},X1={exports:{}},Ie={},J1={exports:{}},Z1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,z){var T=_.length;_.push(z);e:for(;0<T;){var M=T-1>>>1,F=_[M];if(0<l(F,z))_[M]=z,_[T]=F,T=M;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var z=_[0],T=_.pop();if(T!==z){_[0]=T;e:for(var M=0,F=_.length,Xe=F>>>1;M<Xe;){var oe=2*(M+1)-1,Ae=_[oe],Ee=oe+1,ln=_[Ee];if(0>l(Ae,T))Ee<F&&0>l(ln,Ae)?(_[M]=ln,_[Ee]=T,M=Ee):(_[M]=Ae,_[oe]=T,M=oe);else if(Ee<F&&0>l(ln,T))_[M]=ln,_[Ee]=T,M=Ee;else break e}}return z}function l(_,z){var T=_.sortIndex-z.sortIndex;return T!==0?T:_.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var s=[],f=[],h=1,v=null,m=3,y=!1,S=!1,p=!1,C=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var z=t(f);z!==null;){if(z.callback===null)r(f);else if(z.startTime<=_)r(f),z.sortIndex=z.expirationTime,n(s,z);else break;z=t(f)}}function g(_){if(p=!1,d(_),!S)if(t(s)!==null)S=!0,An(w);else{var z=t(f);z!==null&&Ye(g,z.startTime-_)}}function w(_,z){S=!1,p&&(p=!1,c(P),P=-1),y=!0;var T=m;try{for(d(z),v=t(s);v!==null&&(!(v.expirationTime>z)||_&&!ne());){var M=v.callback;if(typeof M=="function"){v.callback=null,m=v.priorityLevel;var F=M(v.expirationTime<=z);z=e.unstable_now(),typeof F=="function"?v.callback=F:v===t(s)&&r(s),d(z)}else r(s);v=t(s)}if(v!==null)var Xe=!0;else{var oe=t(f);oe!==null&&Ye(g,oe.startTime-z),Xe=!1}return Xe}finally{v=null,m=T,y=!1}}var x=!1,k=null,P=-1,$=5,O=-1;function ne(){return!(e.unstable_now()-O<$)}function tn(){if(k!==null){var _=e.unstable_now();O=_;var z=!0;try{z=k(!0,_)}finally{z?rn():(x=!1,k=null)}}else x=!1}var rn;if(typeof a=="function")rn=function(){a(tn)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Vt=lt.port2;lt.port1.onmessage=tn,rn=function(){Vt.postMessage(null)}}else rn=function(){C(tn,0)};function An(_){k=_,x||(x=!0,rn())}function Ye(_,z){P=C(function(){_(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,An(w))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var T=m;m=z;try{return _()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=m;m=_;try{return z()}finally{m=T}},e.unstable_scheduleCallback=function(_,z,T){var M=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?M+T:M):T=M,_){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=T+F,_={id:h++,callback:z,priorityLevel:_,startTime:T,expirationTime:F,sortIndex:-1},T>M?(_.sortIndex=T,n(f,_),t(s)===null&&_===t(f)&&(p?(c(P),P=-1):p=!0,Ye(g,T-M))):(_.sortIndex=F,n(s,_),S||y||(S=!0,An(w))),_},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(_){var z=m;return function(){var T=m;m=z;try{return _.apply(this,arguments)}finally{m=T}}}})(Z1);J1.exports=Z1;var Xc=J1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc=U,ze=Xc;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q1=new Set,mr={};function tt(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(mr[e]=n,e=0;e<n.length;e++)q1.add(n[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),no=Object.prototype.hasOwnProperty,Zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uu={},su={};function qc(e){return no.call(su,e)?!0:no.call(uu,e)?!1:Zc.test(e)?su[e]=!0:(uu[e]=!0,!1)}function bc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ef(e,n,t,r){if(n===null||typeof n>"u"||bc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];se[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var si=/[\-:]([a-z])/g;function ai(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(si,ai);se[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(si,ai);se[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(si,ai);se[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ci(e,n,t,r){var l=se.hasOwnProperty(n)?se[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ef(n,t,l,r)&&(t=null),r||l===null?qc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var vn=Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),st=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),fi=Symbol.for("react.strict_mode"),to=Symbol.for("react.profiler"),b1=Symbol.for("react.provider"),es=Symbol.for("react.context"),di=Symbol.for("react.forward_ref"),ro=Symbol.for("react.suspense"),lo=Symbol.for("react.suspense_list"),pi=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),ns=Symbol.for("react.offscreen"),au=Symbol.iterator;function Kt(e){return e===null||typeof e!="object"?null:(e=au&&e[au]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,xl;function er(e){if(xl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xl=n&&n[1]||""}return`
`+xl+e}var El=!1;function Cl(e,n){if(!e||El)return"";El=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var r=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){r=f}e.call(n.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{El=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?er(e):""}function nf(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function oo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case st:return"Portal";case to:return"Profiler";case fi:return"StrictMode";case ro:return"Suspense";case lo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case es:return(e.displayName||"Context")+".Consumer";case b1:return(e._context.displayName||"Context")+".Provider";case di:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pi:return n=e.displayName||null,n!==null?n:oo(e.type)||"Memo";case wn:n=e._payload,e=e._init;try{return oo(e(n))}catch{}}return null}function tf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oo(n);case 8:return n===fi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ts(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rf(e){var n=ts(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Br(e){e._valueTracker||(e._valueTracker=rf(e))}function rs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ts(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function E0(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function io(e,n){var t=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function cu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=$n(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ls(e,n){n=n.checked,n!=null&&ci(e,"checked",n,!1)}function uo(e,n){ls(e,n);var t=$n(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?so(e,n.type,t):n.hasOwnProperty("defaultValue")&&so(e,n.type,$n(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function fu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function so(e,n,t){(n!=="number"||E0(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var nr=Array.isArray;function kt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+$n(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ao(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function du(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(nr(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:$n(t)}}function os(e,n){var t=$n(n.value),r=$n(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function pu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function is(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function co(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?is(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,us=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function vr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lf=["Webkit","ms","Moz","O"];Object.keys(or).forEach(function(e){lf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),or[n]=or[e]})});function ss(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||or.hasOwnProperty(e)&&or[e]?(""+n).trim():n+"px"}function as(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=ss(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var of=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fo(e,n){if(n){if(of[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function po(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ho=null;function hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mo=null,xt=null,Et=null;function hu(e){if(e=Dr(e)){if(typeof mo!="function")throw Error(E(280));var n=e.stateNode;n&&(n=tl(n),mo(e.stateNode,e.type,n))}}function cs(e){xt?Et?Et.push(e):Et=[e]:xt=e}function fs(){if(xt){var e=xt,n=Et;if(Et=xt=null,hu(e),n)for(e=0;e<n.length;e++)hu(n[e])}}function ds(e,n){return e(n)}function ps(){}var _l=!1;function hs(e,n,t){if(_l)return e(n,t);_l=!0;try{return ds(e,n,t)}finally{_l=!1,(xt!==null||Et!==null)&&(ps(),fs())}}function gr(e,n){var t=e.stateNode;if(t===null)return null;var r=tl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var vo=!1;if(dn)try{var Gt={};Object.defineProperty(Gt,"passive",{get:function(){vo=!0}}),window.addEventListener("test",Gt,Gt),window.removeEventListener("test",Gt,Gt)}catch{vo=!1}function uf(e,n,t,r,l,o,i,u,s){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(h){this.onError(h)}}var ir=!1,C0=null,_0=!1,go=null,sf={onError:function(e){ir=!0,C0=e}};function af(e,n,t,r,l,o,i,u,s){ir=!1,C0=null,uf.apply(sf,arguments)}function cf(e,n,t,r,l,o,i,u,s){if(af.apply(this,arguments),ir){if(ir){var f=C0;ir=!1,C0=null}else throw Error(E(198));_0||(_0=!0,go=f)}}function rt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ms(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function mu(e){if(rt(e)!==e)throw Error(E(188))}function ff(e){var n=e.alternate;if(!n){if(n=rt(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return mu(l),e;if(o===r)return mu(l),n;o=o.sibling}throw Error(E(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===t){i=!0,t=l,r=o;break}if(u===r){i=!0,r=l,t=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===t){i=!0,t=o,r=l;break}if(u===r){i=!0,r=o,t=l;break}u=u.sibling}if(!i)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function vs(e){return e=ff(e),e!==null?gs(e):null}function gs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=gs(e);if(n!==null)return n;e=e.sibling}return null}var ys=ze.unstable_scheduleCallback,vu=ze.unstable_cancelCallback,df=ze.unstable_shouldYield,pf=ze.unstable_requestPaint,J=ze.unstable_now,hf=ze.unstable_getCurrentPriorityLevel,mi=ze.unstable_ImmediatePriority,Ss=ze.unstable_UserBlockingPriority,P0=ze.unstable_NormalPriority,mf=ze.unstable_LowPriority,ws=ze.unstable_IdlePriority,q0=null,en=null;function vf(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(q0,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Sf,gf=Math.log,yf=Math.LN2;function Sf(e){return e>>>=0,e===0?32:31-(gf(e)/yf|0)|0}var Vr=64,Qr=4194304;function tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function N0(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var u=i&~l;u!==0?r=tr(u):(o&=i,o!==0&&(r=tr(o)))}else i=t&~l,i!==0?r=tr(i):o!==0&&(r=tr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ve(n),l=1<<t,r|=e[t],n&=~l;return r}function wf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ve(o),u=1<<i,s=l[i];s===-1?(!(u&t)||u&r)&&(l[i]=wf(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ks(){var e=Vr;return Vr<<=1,!(Vr&4194240)&&(Vr=64),e}function Pl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function $r(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ve(n),e[n]=t}function xf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Ve(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function vi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ve(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var A=0;function xs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Es,gi,Cs,_s,Ps,So=!1,Kr=[],Pn=null,Nn=null,zn=null,yr=new Map,Sr=new Map,xn=[],Ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gu(e,n){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":yr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(n.pointerId)}}function Yt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=Dr(n),n!==null&&gi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Cf(e,n,t,r,l){switch(n){case"focusin":return Pn=Yt(Pn,e,n,t,r,l),!0;case"dragenter":return Nn=Yt(Nn,e,n,t,r,l),!0;case"mouseover":return zn=Yt(zn,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return yr.set(o,Yt(yr.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Sr.set(o,Yt(Sr.get(o)||null,e,n,t,r,l)),!0}return!1}function Ns(e){var n=Hn(e.target);if(n!==null){var t=rt(n);if(t!==null){if(n=t.tag,n===13){if(n=ms(t),n!==null){e.blockedOn=n,Ps(e.priority,function(){Cs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function s0(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=wo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ho=r,t.target.dispatchEvent(r),ho=null}else return n=Dr(t),n!==null&&gi(n),e.blockedOn=t,!1;n.shift()}return!0}function yu(e,n,t){s0(e)&&t.delete(n)}function _f(){So=!1,Pn!==null&&s0(Pn)&&(Pn=null),Nn!==null&&s0(Nn)&&(Nn=null),zn!==null&&s0(zn)&&(zn=null),yr.forEach(yu),Sr.forEach(yu)}function Xt(e,n){e.blockedOn===n&&(e.blockedOn=null,So||(So=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,_f)))}function wr(e){function n(l){return Xt(l,e)}if(0<Kr.length){Xt(Kr[0],e);for(var t=1;t<Kr.length;t++){var r=Kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&Xt(Pn,e),Nn!==null&&Xt(Nn,e),zn!==null&&Xt(zn,e),yr.forEach(n),Sr.forEach(n),t=0;t<xn.length;t++)r=xn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(t=xn[0],t.blockedOn===null);)Ns(t),t.blockedOn===null&&xn.shift()}var Ct=vn.ReactCurrentBatchConfig,z0=!0;function Pf(e,n,t,r){var l=A,o=Ct.transition;Ct.transition=null;try{A=1,yi(e,n,t,r)}finally{A=l,Ct.transition=o}}function Nf(e,n,t,r){var l=A,o=Ct.transition;Ct.transition=null;try{A=4,yi(e,n,t,r)}finally{A=l,Ct.transition=o}}function yi(e,n,t,r){if(z0){var l=wo(e,n,t,r);if(l===null)Dl(e,n,r,I0,t),gu(e,r);else if(Cf(l,e,n,t,r))r.stopPropagation();else if(gu(e,r),n&4&&-1<Ef.indexOf(e)){for(;l!==null;){var o=Dr(l);if(o!==null&&Es(o),o=wo(e,n,t,r),o===null&&Dl(e,n,r,I0,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else Dl(e,n,r,null,t)}}var I0=null;function wo(e,n,t,r){if(I0=null,e=hi(r),e=Hn(e),e!==null)if(n=rt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ms(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return I0=e,null}function zs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hf()){case mi:return 1;case Ss:return 4;case P0:case mf:return 16;case ws:return 536870912;default:return 16}default:return 16}}var Cn=null,Si=null,a0=null;function Is(){if(a0)return a0;var e,n=Si,t=n.length,r,l="value"in Cn?Cn.value:Cn.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return a0=l.slice(e,1<r?1-r:void 0)}function c0(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function Su(){return!1}function Te(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Gr:Su,this.isPropagationStopped=Su,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),n}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=Te(Wt),jr=Y({},Wt,{view:0,detail:0}),zf=Te(jr),Nl,zl,Jt,b0=Y({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jt&&(Jt&&e.type==="mousemove"?(Nl=e.screenX-Jt.screenX,zl=e.screenY-Jt.screenY):zl=Nl=0,Jt=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),wu=Te(b0),If=Y({},b0,{dataTransfer:0}),Tf=Te(If),Of=Y({},jr,{relatedTarget:0}),Il=Te(Of),Rf=Y({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Lf=Te(Rf),$f=Y({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jf=Te($f),Df=Y({},Wt,{data:0}),ku=Te(Df),Mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Af={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Af[e])?!!n[e]:!1}function ki(){return Uf}var Wf=Y({},jr,{key:function(e){if(e.key){var n=Mf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=c0(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ki,charCode:function(e){return e.type==="keypress"?c0(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?c0(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bf=Te(Wf),Hf=Y({},b0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=Te(Hf),Vf=Y({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ki}),Qf=Te(Vf),Kf=Y({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gf=Te(Kf),Yf=Y({},b0,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xf=Te(Yf),Jf=[9,13,27,32],xi=dn&&"CompositionEvent"in window,ur=null;dn&&"documentMode"in document&&(ur=document.documentMode);var Zf=dn&&"TextEvent"in window&&!ur,Ts=dn&&(!xi||ur&&8<ur&&11>=ur),Eu=" ",Cu=!1;function Os(e,n){switch(e){case"keyup":return Jf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ct=!1;function qf(e,n){switch(e){case"compositionend":return Rs(n);case"keypress":return n.which!==32?null:(Cu=!0,Eu);case"textInput":return e=n.data,e===Eu&&Cu?null:e;default:return null}}function bf(e,n){if(ct)return e==="compositionend"||!xi&&Os(e,n)?(e=Is(),a0=Si=Cn=null,ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ts&&n.locale!=="ko"?null:n.data;default:return null}}var e2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!e2[e.type]:n==="textarea"}function Ls(e,n,t,r){cs(r),n=T0(n,"onChange"),0<n.length&&(t=new wi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var sr=null,kr=null;function n2(e){Vs(e,0)}function el(e){var n=pt(e);if(rs(n))return e}function t2(e,n){if(e==="change")return n}var $s=!1;if(dn){var Tl;if(dn){var Ol="oninput"in document;if(!Ol){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),Ol=typeof Pu.oninput=="function"}Tl=Ol}else Tl=!1;$s=Tl&&(!document.documentMode||9<document.documentMode)}function Nu(){sr&&(sr.detachEvent("onpropertychange",js),kr=sr=null)}function js(e){if(e.propertyName==="value"&&el(kr)){var n=[];Ls(n,kr,e,hi(e)),hs(n2,n)}}function r2(e,n,t){e==="focusin"?(Nu(),sr=n,kr=t,sr.attachEvent("onpropertychange",js)):e==="focusout"&&Nu()}function l2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(kr)}function o2(e,n){if(e==="click")return el(n)}function i2(e,n){if(e==="input"||e==="change")return el(n)}function u2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ge=typeof Object.is=="function"?Object.is:u2;function xr(e,n){if(Ge(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!no.call(n,l)||!Ge(e[l],n[l]))return!1}return!0}function zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,n){var t=zu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=zu(t)}}function Ds(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ds(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ms(){for(var e=window,n=E0();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=E0(e.document)}return n}function Ei(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function s2(e){var n=Ms(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ds(t.ownerDocument.documentElement,t)){if(r!==null&&Ei(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Iu(t,o);var i=Iu(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var a2=dn&&"documentMode"in document&&11>=document.documentMode,ft=null,ko=null,ar=null,xo=!1;function Tu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xo||ft==null||ft!==E0(r)||(r=ft,"selectionStart"in r&&Ei(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ar&&xr(ar,r)||(ar=r,r=T0(ko,"onSelect"),0<r.length&&(n=new wi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ft)))}function Yr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var dt={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionend:Yr("Transition","TransitionEnd")},Rl={},Fs={};dn&&(Fs=document.createElement("div").style,"AnimationEvent"in window||(delete dt.animationend.animation,delete dt.animationiteration.animation,delete dt.animationstart.animation),"TransitionEvent"in window||delete dt.transitionend.transition);function nl(e){if(Rl[e])return Rl[e];if(!dt[e])return e;var n=dt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Fs)return Rl[e]=n[t];return e}var As=nl("animationend"),Us=nl("animationiteration"),Ws=nl("animationstart"),Bs=nl("transitionend"),Hs=new Map,Ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,n){Hs.set(e,n),tt(n,[e])}for(var Ll=0;Ll<Ou.length;Ll++){var $l=Ou[Ll],c2=$l.toLowerCase(),f2=$l[0].toUpperCase()+$l.slice(1);Dn(c2,"on"+f2)}Dn(As,"onAnimationEnd");Dn(Us,"onAnimationIteration");Dn(Ws,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Bs,"onTransitionEnd");zt("onMouseEnter",["mouseout","mouseover"]);zt("onMouseLeave",["mouseout","mouseover"]);zt("onPointerEnter",["pointerout","pointerover"]);zt("onPointerLeave",["pointerout","pointerover"]);tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d2=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function Ru(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,cf(r,n,void 0,e),e.currentTarget=null}function Vs(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,f=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;Ru(l,u,f),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,f=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;Ru(l,u,f),o=s}}}if(_0)throw e=go,_0=!1,go=null,e}function B(e,n){var t=n[No];t===void 0&&(t=n[No]=new Set);var r=e+"__bubble";t.has(r)||(Qs(n,e,2,!1),t.add(r))}function jl(e,n,t){var r=0;n&&(r|=4),Qs(t,e,r,n)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[Xr]){e[Xr]=!0,q1.forEach(function(t){t!=="selectionchange"&&(d2.has(t)||jl(t,!1,e),jl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xr]||(n[Xr]=!0,jl("selectionchange",!1,n))}}function Qs(e,n,t,r){switch(zs(n)){case 1:var l=Pf;break;case 4:l=Nf;break;default:l=yi}t=l.bind(null,n,t,e),l=void 0,!vo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Dl(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Hn(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}hs(function(){var f=o,h=hi(t),v=[];e:{var m=Hs.get(e);if(m!==void 0){var y=wi,S=e;switch(e){case"keypress":if(c0(t)===0)break e;case"keydown":case"keyup":y=Bf;break;case"focusin":S="focus",y=Il;break;case"focusout":S="blur",y=Il;break;case"beforeblur":case"afterblur":y=Il;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Qf;break;case As:case Us:case Ws:y=Lf;break;case Bs:y=Gf;break;case"scroll":y=zf;break;case"wheel":y=Xf;break;case"copy":case"cut":case"paste":y=jf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xu}var p=(n&4)!==0,C=!p&&e==="scroll",c=p?m!==null?m+"Capture":null:m;p=[];for(var a=f,d;a!==null;){d=a;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,c!==null&&(g=gr(a,c),g!=null&&p.push(Cr(a,g,d)))),C)break;a=a.return}0<p.length&&(m=new y(m,S,null,t,h),v.push({event:m,listeners:p}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==ho&&(S=t.relatedTarget||t.fromElement)&&(Hn(S)||S[pn]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=t.relatedTarget||t.toElement,y=f,S=S?Hn(S):null,S!==null&&(C=rt(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=f),y!==S)){if(p=wu,g="onMouseLeave",c="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(p=xu,g="onPointerLeave",c="onPointerEnter",a="pointer"),C=y==null?m:pt(y),d=S==null?m:pt(S),m=new p(g,a+"leave",y,t,h),m.target=C,m.relatedTarget=d,g=null,Hn(h)===f&&(p=new p(c,a+"enter",S,t,h),p.target=d,p.relatedTarget=C,g=p),C=g,y&&S)n:{for(p=y,c=S,a=0,d=p;d;d=ot(d))a++;for(d=0,g=c;g;g=ot(g))d++;for(;0<a-d;)p=ot(p),a--;for(;0<d-a;)c=ot(c),d--;for(;a--;){if(p===c||c!==null&&p===c.alternate)break n;p=ot(p),c=ot(c)}p=null}else p=null;y!==null&&Lu(v,m,y,p,!1),S!==null&&C!==null&&Lu(v,C,S,p,!0)}}e:{if(m=f?pt(f):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var w=t2;else if(_u(m))if($s)w=i2;else{w=l2;var x=r2}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=o2);if(w&&(w=w(e,f))){Ls(v,w,t,h);break e}x&&x(e,m,f),e==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&so(m,"number",m.value)}switch(x=f?pt(f):window,e){case"focusin":(_u(x)||x.contentEditable==="true")&&(ft=x,ko=f,ar=null);break;case"focusout":ar=ko=ft=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,Tu(v,t,h);break;case"selectionchange":if(a2)break;case"keydown":case"keyup":Tu(v,t,h)}var k;if(xi)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ct?Os(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Ts&&t.locale!=="ko"&&(ct||P!=="onCompositionStart"?P==="onCompositionEnd"&&ct&&(k=Is()):(Cn=h,Si="value"in Cn?Cn.value:Cn.textContent,ct=!0)),x=T0(f,P),0<x.length&&(P=new ku(P,e,null,t,h),v.push({event:P,listeners:x}),k?P.data=k:(k=Rs(t),k!==null&&(P.data=k)))),(k=Zf?qf(e,t):bf(e,t))&&(f=T0(f,"onBeforeInput"),0<f.length&&(h=new ku("onBeforeInput","beforeinput",null,t,h),v.push({event:h,listeners:f}),h.data=k))}Vs(v,n)})}function Cr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function T0(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=gr(e,t),o!=null&&r.unshift(Cr(e,o,l)),o=gr(e,n),o!=null&&r.push(Cr(e,o,l))),e=e.return}return r}function ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lu(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var u=t,s=u.alternate,f=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&f!==null&&(u=f,l?(s=gr(t,o),s!=null&&i.unshift(Cr(t,s,u))):l||(s=gr(t,o),s!=null&&i.push(Cr(t,s,u)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var p2=/\r\n?/g,h2=/\u0000|\uFFFD/g;function $u(e){return(typeof e=="string"?e:""+e).replace(p2,`
`).replace(h2,"")}function Jr(e,n,t){if(n=$u(n),$u(e)!==n&&t)throw Error(E(425))}function O0(){}var Eo=null,Co=null;function _o(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Po=typeof setTimeout=="function"?setTimeout:void 0,m2=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,v2=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(g2)}:Po;function g2(e){setTimeout(function(){throw e})}function Ml(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),wr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);wr(n)}function In(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Du(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Bt=Math.random().toString(36).slice(2),be="__reactFiber$"+Bt,_r="__reactProps$"+Bt,pn="__reactContainer$"+Bt,No="__reactEvents$"+Bt,y2="__reactListeners$"+Bt,S2="__reactHandles$"+Bt;function Hn(e){var n=e[be];if(n)return n;for(var t=e.parentNode;t;){if(n=t[pn]||t[be]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Du(e);e!==null;){if(t=e[be])return t;e=Du(e)}return n}e=t,t=e.parentNode}return null}function Dr(e){return e=e[be]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function tl(e){return e[_r]||null}var zo=[],ht=-1;function Mn(e){return{current:e}}function V(e){0>ht||(e.current=zo[ht],zo[ht]=null,ht--)}function W(e,n){ht++,zo[ht]=e.current,e.current=n}var jn={},de=Mn(jn),we=Mn(!1),Zn=jn;function It(e,n){var t=e.type.contextTypes;if(!t)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function R0(){V(we),V(de)}function Mu(e,n,t){if(de.current!==jn)throw Error(E(168));W(de,n),W(we,t)}function Ks(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(E(108,tf(e)||"Unknown",l));return Y({},t,r)}function L0(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Zn=de.current,W(de,e),W(we,we.current),!0}function Fu(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=Ks(e,n,Zn),r.__reactInternalMemoizedMergedChildContext=e,V(we),V(de),W(de,e)):V(we),W(we,t)}var sn=null,rl=!1,Fl=!1;function Gs(e){sn===null?sn=[e]:sn.push(e)}function w2(e){rl=!0,Gs(e)}function Fn(){if(!Fl&&sn!==null){Fl=!0;var e=0,n=A;try{var t=sn;for(A=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}sn=null,rl=!1}catch(l){throw sn!==null&&(sn=sn.slice(e+1)),ys(mi,Fn),l}finally{A=n,Fl=!1}}return null}var mt=[],vt=0,$0=null,j0=0,Oe=[],Re=0,qn=null,an=1,cn="";function Wn(e,n){mt[vt++]=j0,mt[vt++]=$0,$0=e,j0=n}function Ys(e,n,t){Oe[Re++]=an,Oe[Re++]=cn,Oe[Re++]=qn,qn=e;var r=an;e=cn;var l=32-Ve(r)-1;r&=~(1<<l),t+=1;var o=32-Ve(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,an=1<<32-Ve(n)+l|t<<l|r,cn=o+e}else an=1<<o|t<<l|r,cn=e}function Ci(e){e.return!==null&&(Wn(e,1),Ys(e,1,0))}function _i(e){for(;e===$0;)$0=mt[--vt],mt[vt]=null,j0=mt[--vt],mt[vt]=null;for(;e===qn;)qn=Oe[--Re],Oe[Re]=null,cn=Oe[--Re],Oe[Re]=null,an=Oe[--Re],Oe[Re]=null}var Ne=null,Pe=null,Q=!1,He=null;function Xs(e,n){var t=Le(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Au(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ne=e,Pe=In(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ne=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=qn!==null?{id:an,overflow:cn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Le(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ne=e,Pe=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function To(e){if(Q){var n=Pe;if(n){var t=n;if(!Au(e,n)){if(Io(e))throw Error(E(418));n=In(t.nextSibling);var r=Ne;n&&Au(e,n)?Xs(r,t):(e.flags=e.flags&-4097|2,Q=!1,Ne=e)}}else{if(Io(e))throw Error(E(418));e.flags=e.flags&-4097|2,Q=!1,Ne=e}}}function Uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Zr(e){if(e!==Ne)return!1;if(!Q)return Uu(e),Q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!_o(e.type,e.memoizedProps)),n&&(n=Pe)){if(Io(e))throw Js(),Error(E(418));for(;n;)Xs(e,n),n=In(n.nextSibling)}if(Uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=In(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=Ne?In(e.stateNode.nextSibling):null;return!0}function Js(){for(var e=Pe;e;)e=In(e.nextSibling)}function Tt(){Pe=Ne=null,Q=!1}function Pi(e){He===null?He=[e]:He.push(e)}var k2=vn.ReactCurrentBatchConfig;function Zt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function qr(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Wu(e){var n=e._init;return n(e._payload)}function Zs(e){function n(c,a){if(e){var d=c.deletions;d===null?(c.deletions=[a],c.flags|=16):d.push(a)}}function t(c,a){if(!e)return null;for(;a!==null;)n(c,a),a=a.sibling;return null}function r(c,a){for(c=new Map;a!==null;)a.key!==null?c.set(a.key,a):c.set(a.index,a),a=a.sibling;return c}function l(c,a){return c=Ln(c,a),c.index=0,c.sibling=null,c}function o(c,a,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<a?(c.flags|=2,a):d):(c.flags|=2,a)):(c.flags|=1048576,a)}function i(c){return e&&c.alternate===null&&(c.flags|=2),c}function u(c,a,d,g){return a===null||a.tag!==6?(a=Ql(d,c.mode,g),a.return=c,a):(a=l(a,d),a.return=c,a)}function s(c,a,d,g){var w=d.type;return w===at?h(c,a,d.props.children,g,d.key):a!==null&&(a.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===wn&&Wu(w)===a.type)?(g=l(a,d.props),g.ref=Zt(c,a,d),g.return=c,g):(g=g0(d.type,d.key,d.props,null,c.mode,g),g.ref=Zt(c,a,d),g.return=c,g)}function f(c,a,d,g){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=Kl(d,c.mode,g),a.return=c,a):(a=l(a,d.children||[]),a.return=c,a)}function h(c,a,d,g,w){return a===null||a.tag!==7?(a=Yn(d,c.mode,g,w),a.return=c,a):(a=l(a,d),a.return=c,a)}function v(c,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Ql(""+a,c.mode,d),a.return=c,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case Wr:return d=g0(a.type,a.key,a.props,null,c.mode,d),d.ref=Zt(c,null,a),d.return=c,d;case st:return a=Kl(a,c.mode,d),a.return=c,a;case wn:var g=a._init;return v(c,g(a._payload),d)}if(nr(a)||Kt(a))return a=Yn(a,c.mode,d,null),a.return=c,a;qr(c,a)}return null}function m(c,a,d,g){var w=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return w!==null?null:u(c,a,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Wr:return d.key===w?s(c,a,d,g):null;case st:return d.key===w?f(c,a,d,g):null;case wn:return w=d._init,m(c,a,w(d._payload),g)}if(nr(d)||Kt(d))return w!==null?null:h(c,a,d,g,null);qr(c,d)}return null}function y(c,a,d,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return c=c.get(d)||null,u(a,c,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wr:return c=c.get(g.key===null?d:g.key)||null,s(a,c,g,w);case st:return c=c.get(g.key===null?d:g.key)||null,f(a,c,g,w);case wn:var x=g._init;return y(c,a,d,x(g._payload),w)}if(nr(g)||Kt(g))return c=c.get(d)||null,h(a,c,g,w,null);qr(a,g)}return null}function S(c,a,d,g){for(var w=null,x=null,k=a,P=a=0,$=null;k!==null&&P<d.length;P++){k.index>P?($=k,k=null):$=k.sibling;var O=m(c,k,d[P],g);if(O===null){k===null&&(k=$);break}e&&k&&O.alternate===null&&n(c,k),a=o(O,a,P),x===null?w=O:x.sibling=O,x=O,k=$}if(P===d.length)return t(c,k),Q&&Wn(c,P),w;if(k===null){for(;P<d.length;P++)k=v(c,d[P],g),k!==null&&(a=o(k,a,P),x===null?w=k:x.sibling=k,x=k);return Q&&Wn(c,P),w}for(k=r(c,k);P<d.length;P++)$=y(k,c,P,d[P],g),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?P:$.key),a=o($,a,P),x===null?w=$:x.sibling=$,x=$);return e&&k.forEach(function(ne){return n(c,ne)}),Q&&Wn(c,P),w}function p(c,a,d,g){var w=Kt(d);if(typeof w!="function")throw Error(E(150));if(d=w.call(d),d==null)throw Error(E(151));for(var x=w=null,k=a,P=a=0,$=null,O=d.next();k!==null&&!O.done;P++,O=d.next()){k.index>P?($=k,k=null):$=k.sibling;var ne=m(c,k,O.value,g);if(ne===null){k===null&&(k=$);break}e&&k&&ne.alternate===null&&n(c,k),a=o(ne,a,P),x===null?w=ne:x.sibling=ne,x=ne,k=$}if(O.done)return t(c,k),Q&&Wn(c,P),w;if(k===null){for(;!O.done;P++,O=d.next())O=v(c,O.value,g),O!==null&&(a=o(O,a,P),x===null?w=O:x.sibling=O,x=O);return Q&&Wn(c,P),w}for(k=r(c,k);!O.done;P++,O=d.next())O=y(k,c,P,O.value,g),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?P:O.key),a=o(O,a,P),x===null?w=O:x.sibling=O,x=O);return e&&k.forEach(function(tn){return n(c,tn)}),Q&&Wn(c,P),w}function C(c,a,d,g){if(typeof d=="object"&&d!==null&&d.type===at&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Wr:e:{for(var w=d.key,x=a;x!==null;){if(x.key===w){if(w=d.type,w===at){if(x.tag===7){t(c,x.sibling),a=l(x,d.props.children),a.return=c,c=a;break e}}else if(x.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===wn&&Wu(w)===x.type){t(c,x.sibling),a=l(x,d.props),a.ref=Zt(c,x,d),a.return=c,c=a;break e}t(c,x);break}else n(c,x);x=x.sibling}d.type===at?(a=Yn(d.props.children,c.mode,g,d.key),a.return=c,c=a):(g=g0(d.type,d.key,d.props,null,c.mode,g),g.ref=Zt(c,a,d),g.return=c,c=g)}return i(c);case st:e:{for(x=d.key;a!==null;){if(a.key===x)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){t(c,a.sibling),a=l(a,d.children||[]),a.return=c,c=a;break e}else{t(c,a);break}else n(c,a);a=a.sibling}a=Kl(d,c.mode,g),a.return=c,c=a}return i(c);case wn:return x=d._init,C(c,a,x(d._payload),g)}if(nr(d))return S(c,a,d,g);if(Kt(d))return p(c,a,d,g);qr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(t(c,a.sibling),a=l(a,d),a.return=c,c=a):(t(c,a),a=Ql(d,c.mode,g),a.return=c,c=a),i(c)):t(c,a)}return C}var Ot=Zs(!0),qs=Zs(!1),D0=Mn(null),M0=null,gt=null,Ni=null;function zi(){Ni=gt=M0=null}function Ii(e){var n=D0.current;V(D0),e._currentValue=n}function Oo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function _t(e,n){M0=e,Ni=gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ye=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(Ni!==e)if(e={context:e,memoizedValue:n,next:null},gt===null){if(M0===null)throw Error(E(308));gt=e,M0.dependencies={lanes:0,firstContext:e}}else gt=gt.next=e;return n}var Vn=null;function Ti(e){Vn===null?Vn=[e]:Vn.push(e)}function bs(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Ti(n)):(t.next=l.next,l.next=t),n.interleaved=t,hn(e,r)}function hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var kn=!1;function Oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ea(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Tn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,hn(e,t)}return l=r.interleaved,l===null?(n.next=n,Ti(r)):(n.next=l.next,l.next=n),r.interleaved=n,hn(e,t)}function f0(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vi(e,t)}}function Bu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function F0(e,n,t,r){var l=e.updateQueue;kn=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,f=s.next;s.next=null,i===null?o=f:i.next=f,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==i&&(u===null?h.firstBaseUpdate=f:u.next=f,h.lastBaseUpdate=s))}if(o!==null){var v=l.baseState;i=0,h=f=s=null,u=o;do{var m=u.lane,y=u.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=e,p=u;switch(m=n,y=t,p.tag){case 1:if(S=p.payload,typeof S=="function"){v=S.call(y,v,m);break e}v=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=p.payload,m=typeof S=="function"?S.call(y,v,m):S,m==null)break e;v=Y({},v,m);break e;case 2:kn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else y={eventTime:y,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(f=h=y,s=v):h=h.next=y,i|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(s=v),l.baseState=s,l.firstBaseUpdate=f,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);et|=i,e.lanes=i,e.memoizedState=v}}function Hu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(E(191,l));l.call(r)}}}var Mr={},nn=Mn(Mr),Pr=Mn(Mr),Nr=Mn(Mr);function Qn(e){if(e===Mr)throw Error(E(174));return e}function Ri(e,n){switch(W(Nr,n),W(Pr,e),W(nn,Mr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:co(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=co(n,e)}V(nn),W(nn,n)}function Rt(){V(nn),V(Pr),V(Nr)}function na(e){Qn(Nr.current);var n=Qn(nn.current),t=co(n,e.type);n!==t&&(W(Pr,e),W(nn,t))}function Li(e){Pr.current===e&&(V(nn),V(Pr))}var K=Mn(0);function A0(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Al=[];function $i(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var d0=vn.ReactCurrentDispatcher,Ul=vn.ReactCurrentBatchConfig,bn=0,G=null,b=null,te=null,U0=!1,cr=!1,zr=0,x2=0;function ae(){throw Error(E(321))}function ji(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ge(e[t],n[t]))return!1;return!0}function Di(e,n,t,r,l,o){if(bn=o,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,d0.current=e===null||e.memoizedState===null?P2:N2,e=t(r,l),cr){o=0;do{if(cr=!1,zr=0,25<=o)throw Error(E(301));o+=1,te=b=null,n.updateQueue=null,d0.current=z2,e=t(r,l)}while(cr)}if(d0.current=W0,n=b!==null&&b.next!==null,bn=0,te=b=G=null,U0=!1,n)throw Error(E(300));return e}function Mi(){var e=zr!==0;return zr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?G.memoizedState=te=e:te=te.next=e,te}function De(){if(b===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var n=te===null?G.memoizedState:te.next;if(n!==null)te=n,b=e;else{if(e===null)throw Error(E(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},te===null?G.memoizedState=te=e:te=te.next=e}return te}function Ir(e,n){return typeof n=="function"?n(e):n}function Wl(e){var n=De(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=b,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,f=o;do{var h=f.lane;if((bn&h)===h)s!==null&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var v={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};s===null?(u=s=v,i=r):s=s.next=v,G.lanes|=h,et|=h}f=f.next}while(f!==null&&f!==o);s===null?i=r:s.next=u,Ge(r,n.memoizedState)||(ye=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,G.lanes|=o,et|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bl(e){var n=De(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ge(o,n.memoizedState)||(ye=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function ta(){}function ra(e,n){var t=G,r=De(),l=n(),o=!Ge(r.memoizedState,l);if(o&&(r.memoizedState=l,ye=!0),r=r.queue,Fi(ia.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,Tr(9,oa.bind(null,t,r,l,n),void 0,null),le===null)throw Error(E(349));bn&30||la(t,n,l)}return l}function la(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function oa(e,n,t,r){n.value=t,n.getSnapshot=r,ua(n)&&sa(e)}function ia(e,n,t){return t(function(){ua(n)&&sa(e)})}function ua(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ge(e,t)}catch{return!0}}function sa(e){var n=hn(e,1);n!==null&&Qe(n,e,1,-1)}function Vu(e){var n=Ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},n.queue=e,e=e.dispatch=_2.bind(null,G,e),[n.memoizedState,e]}function Tr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function aa(){return De().memoizedState}function p0(e,n,t,r){var l=Ze();G.flags|=e,l.memoizedState=Tr(1|n,t,void 0,r===void 0?null:r)}function ll(e,n,t,r){var l=De();r=r===void 0?null:r;var o=void 0;if(b!==null){var i=b.memoizedState;if(o=i.destroy,r!==null&&ji(r,i.deps)){l.memoizedState=Tr(n,t,o,r);return}}G.flags|=e,l.memoizedState=Tr(1|n,t,o,r)}function Qu(e,n){return p0(8390656,8,e,n)}function Fi(e,n){return ll(2048,8,e,n)}function ca(e,n){return ll(4,2,e,n)}function fa(e,n){return ll(4,4,e,n)}function da(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function pa(e,n,t){return t=t!=null?t.concat([e]):null,ll(4,4,da.bind(null,n,e),t)}function Ai(){}function ha(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ji(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ma(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ji(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function va(e,n,t){return bn&21?(Ge(t,n)||(t=ks(),G.lanes|=t,et|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=t)}function E2(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),n()}finally{A=t,Ul.transition=r}}function ga(){return De().memoizedState}function C2(e,n,t){var r=Rn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ya(e))Sa(n,t);else if(t=bs(e,n,t,r),t!==null){var l=he();Qe(t,e,r,l),wa(t,n,r)}}function _2(e,n,t){var r=Rn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ya(e))Sa(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,u=o(i,t);if(l.hasEagerState=!0,l.eagerState=u,Ge(u,i)){var s=n.interleaved;s===null?(l.next=l,Ti(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=bs(e,n,l,r),t!==null&&(l=he(),Qe(t,e,r,l),wa(t,n,r))}}function ya(e){var n=e.alternate;return e===G||n!==null&&n===G}function Sa(e,n){cr=U0=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function wa(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vi(e,t)}}var W0={readContext:je,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},P2={readContext:je,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:Qu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,p0(4194308,4,da.bind(null,n,e),t)},useLayoutEffect:function(e,n){return p0(4194308,4,e,n)},useInsertionEffect:function(e,n){return p0(4,2,e,n)},useMemo:function(e,n){var t=Ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ze();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=C2.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:Vu,useDebugValue:Ai,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Vu(!1),n=e[0];return e=E2.bind(null,e[1]),Ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=G,l=Ze();if(Q){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),le===null)throw Error(E(349));bn&30||la(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Qu(ia.bind(null,r,o,e),[e]),r.flags|=2048,Tr(9,oa.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ze(),n=le.identifierPrefix;if(Q){var t=cn,r=an;t=(r&~(1<<32-Ve(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=zr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=x2++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},N2={readContext:je,useCallback:ha,useContext:je,useEffect:Fi,useImperativeHandle:pa,useInsertionEffect:ca,useLayoutEffect:fa,useMemo:ma,useReducer:Wl,useRef:aa,useState:function(){return Wl(Ir)},useDebugValue:Ai,useDeferredValue:function(e){var n=De();return va(n,b.memoizedState,e)},useTransition:function(){var e=Wl(Ir)[0],n=De().memoizedState;return[e,n]},useMutableSource:ta,useSyncExternalStore:ra,useId:ga,unstable_isNewReconciler:!1},z2={readContext:je,useCallback:ha,useContext:je,useEffect:Fi,useImperativeHandle:pa,useInsertionEffect:ca,useLayoutEffect:fa,useMemo:ma,useReducer:Bl,useRef:aa,useState:function(){return Bl(Ir)},useDebugValue:Ai,useDeferredValue:function(e){var n=De();return b===null?n.memoizedState=e:va(n,b.memoizedState,e)},useTransition:function(){var e=Bl(Ir)[0],n=De().memoizedState;return[e,n]},useMutableSource:ta,useSyncExternalStore:ra,useId:ga,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ro(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ol={isMounted:function(e){return(e=e._reactInternals)?rt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=he(),l=Rn(e),o=fn(r,l);o.payload=n,t!=null&&(o.callback=t),n=Tn(e,o,l),n!==null&&(Qe(n,e,l,r),f0(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=he(),l=Rn(e),o=fn(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Tn(e,o,l),n!==null&&(Qe(n,e,l,r),f0(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),r=Rn(e),l=fn(t,r);l.tag=2,n!=null&&(l.callback=n),n=Tn(e,l,r),n!==null&&(Qe(n,e,r,t),f0(n,e,r))}};function Ku(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!xr(t,r)||!xr(l,o):!0}function ka(e,n,t){var r=!1,l=jn,o=n.contextType;return typeof o=="object"&&o!==null?o=je(o):(l=ke(n)?Zn:de.current,r=n.contextTypes,o=(r=r!=null)?It(e,l):jn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ol,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Gu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ol.enqueueReplaceState(n,n.state,null)}function Lo(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Oi(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=je(o):(o=ke(n)?Zn:de.current,l.context=It(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ro(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ol.enqueueReplaceState(l,l.state,null),F0(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Lt(e,n){try{var t="",r=n;do t+=nf(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Hl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function $o(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var I2=typeof WeakMap=="function"?WeakMap:Map;function xa(e,n,t){t=fn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){H0||(H0=!0,Vo=r),$o(e,n)},t}function Ea(e,n,t){t=fn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){$o(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){$o(e,n),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Yu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new I2;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=H2.bind(null,e,n,t),n.then(e,e))}function Xu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ju(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=fn(-1,1),n.tag=2,Tn(t,n,1))),t.lanes|=1),e)}var T2=vn.ReactCurrentOwner,ye=!1;function pe(e,n,t,r){n.child=e===null?qs(n,null,t,r):Ot(n,e.child,t,r)}function Zu(e,n,t,r,l){t=t.render;var o=n.ref;return _t(n,l),r=Di(e,n,t,r,o,l),t=Mi(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,mn(e,n,l)):(Q&&t&&Ci(n),n.flags|=1,pe(e,n,r,l),n.child)}function qu(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Gi(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Ca(e,n,o,r,l)):(e=g0(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:xr,t(i,r)&&e.ref===n.ref)return mn(e,n,l)}return n.flags|=1,e=Ln(o,r),e.ref=n.ref,e.return=n,n.child=e}function Ca(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(xr(o,r)&&e.ref===n.ref)if(ye=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return n.lanes=e.lanes,mn(e,n,l)}return jo(e,n,t,r,l)}function _a(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(St,_e),_e|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(St,_e),_e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,W(St,_e),_e|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,W(St,_e),_e|=r;return pe(e,n,l,t),n.child}function Pa(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function jo(e,n,t,r,l){var o=ke(t)?Zn:de.current;return o=It(n,o),_t(n,l),t=Di(e,n,t,r,o,l),r=Mi(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,mn(e,n,l)):(Q&&r&&Ci(n),n.flags|=1,pe(e,n,t,l),n.child)}function bu(e,n,t,r,l){if(ke(t)){var o=!0;L0(n)}else o=!1;if(_t(n,l),n.stateNode===null)h0(e,n),ka(n,t,r),Lo(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,u=n.memoizedProps;i.props=u;var s=i.context,f=t.contextType;typeof f=="object"&&f!==null?f=je(f):(f=ke(t)?Zn:de.current,f=It(n,f));var h=t.getDerivedStateFromProps,v=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==f)&&Gu(n,i,r,f),kn=!1;var m=n.memoizedState;i.state=m,F0(n,r,i,l),s=n.memoizedState,u!==r||m!==s||we.current||kn?(typeof h=="function"&&(Ro(n,t,h,r),s=n.memoizedState),(u=kn||Ku(n,t,u,r,m,s,f))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=f,r=u):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,ea(e,n),u=n.memoizedProps,f=n.type===n.elementType?u:We(n.type,u),i.props=f,v=n.pendingProps,m=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=je(s):(s=ke(t)?Zn:de.current,s=It(n,s));var y=t.getDerivedStateFromProps;(h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||m!==s)&&Gu(n,i,r,s),kn=!1,m=n.memoizedState,i.state=m,F0(n,r,i,l);var S=n.memoizedState;u!==v||m!==S||we.current||kn?(typeof y=="function"&&(Ro(n,t,y,r),S=n.memoizedState),(f=kn||Ku(n,t,f,r,m,S,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,S,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,S,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),i.props=r,i.state=S,i.context=s,r=f):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Do(e,n,t,r,o,l)}function Do(e,n,t,r,l,o){Pa(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&Fu(n,t,!1),mn(e,n,o);r=n.stateNode,T2.current=n;var u=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Ot(n,e.child,null,o),n.child=Ot(n,null,u,o)):pe(e,n,u,o),n.memoizedState=r.state,l&&Fu(n,t,!0),n.child}function Na(e){var n=e.stateNode;n.pendingContext?Mu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Mu(e,n.context,!1),Ri(e,n.containerInfo)}function e1(e,n,t,r,l){return Tt(),Pi(l),n.flags|=256,pe(e,n,t,r),n.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function Fo(e){return{baseLanes:e,cachePool:null,transitions:null}}function za(e,n,t){var r=n.pendingProps,l=K.current,o=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),W(K,l&1),e===null)return To(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=sl(i,r,0,null),e=Yn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Fo(t),n.memoizedState=Mo,e):Ui(n,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return O2(e,n,i,r,u,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Ln(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=Ln(u,o):(o=Yn(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Fo(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Mo,r}return o=e.child,e=o.sibling,r=Ln(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ui(e,n){return n=sl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function br(e,n,t,r){return r!==null&&Pi(r),Ot(n,e.child,null,t),e=Ui(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function O2(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Hl(Error(E(422))),br(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=sl({mode:"visible",children:r.children},l,0,null),o=Yn(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Ot(n,e.child,null,i),n.child.memoizedState=Fo(i),n.memoizedState=Mo,o);if(!(n.mode&1))return br(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(E(419)),r=Hl(o,r,void 0),br(e,n,i,r)}if(u=(i&e.childLanes)!==0,ye||u){if(r=le,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,hn(e,l),Qe(r,e,l,-1))}return Ki(),r=Hl(Error(E(421))),br(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=V2.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,Pe=In(l.nextSibling),Ne=n,Q=!0,He=null,e!==null&&(Oe[Re++]=an,Oe[Re++]=cn,Oe[Re++]=qn,an=e.id,cn=e.overflow,qn=n),n=Ui(n,r.children),n.flags|=4096,n)}function n1(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Oo(e.return,n,t)}function Vl(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function Ia(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(pe(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&n1(e,t,n);else if(e.tag===19)n1(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(K,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&A0(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Vl(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&A0(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Vl(n,!0,t,null,o);break;case"together":Vl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function h0(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function mn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),et|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=Ln(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ln(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function R2(e,n,t){switch(n.tag){case 3:Na(n),Tt();break;case 5:na(n);break;case 1:ke(n.type)&&L0(n);break;case 4:Ri(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;W(D0,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(W(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?za(e,n,t):(W(K,K.current&1),e=mn(e,n,t),e!==null?e.sibling:null);W(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ia(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,_a(e,n,t)}return mn(e,n,t)}var Ta,Ao,Oa,Ra;Ta=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ao=function(){};Oa=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Qn(nn.current);var o=null;switch(t){case"input":l=io(e,l),r=io(e,r),o=[];break;case"select":l=Y({},l,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":l=ao(e,l),r=ao(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=O0)}fo(t,r);var i;t=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var u=l[f];for(i in u)u.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(mr.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var s=r[f];if(u=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&s!==u&&(s!=null||u!=null))if(f==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(f,t)),t=s;else f==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(f,s)):f==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(f,""+s):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(mr.hasOwnProperty(f)?(s!=null&&f==="onScroll"&&B("scroll",e),o||u===s||(o=[])):(o=o||[]).push(f,s))}t&&(o=o||[]).push("style",t);var f=o;(n.updateQueue=f)&&(n.flags|=4)}};Ra=function(e,n,t,r){t!==r&&(n.flags|=4)};function qt(e,n){if(!Q)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function L2(e,n,t){var r=n.pendingProps;switch(_i(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(n),null;case 1:return ke(n.type)&&R0(),ce(n),null;case 3:return r=n.stateNode,Rt(),V(we),V(de),$i(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,He!==null&&(Go(He),He=null))),Ao(e,n),ce(n),null;case 5:Li(n);var l=Qn(Nr.current);if(t=n.type,e!==null&&n.stateNode!=null)Oa(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return ce(n),null}if(e=Qn(nn.current),Zr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[be]=n,r[_r]=o,e=(n.mode&1)!==0,t){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<rr.length;l++)B(rr[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":cu(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":du(r,o),B("invalid",r)}fo(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Jr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Jr(r.textContent,u,e),l=["children",""+u]):mr.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&B("scroll",r)}switch(t){case"input":Br(r),fu(r,o,!0);break;case"textarea":Br(r),pu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=O0)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=is(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[be]=n,e[_r]=r,Ta(e,n,!1,!1),n.stateNode=e;e:{switch(i=po(t,r),t){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<rr.length;l++)B(rr[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":cu(e,r),l=io(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Y({},r,{value:void 0}),B("invalid",e);break;case"textarea":du(e,r),l=ao(e,r),B("invalid",e);break;default:l=r}fo(t,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?as(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&us(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&vr(e,s):typeof s=="number"&&vr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&B("scroll",e):s!=null&&ci(e,o,s,i))}switch(t){case"input":Br(e),fu(e,r,!1);break;case"textarea":Br(e),pu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kt(e,!!r.multiple,o,!1):r.defaultValue!=null&&kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=O0)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ce(n),null;case 6:if(e&&n.stateNode!=null)Ra(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=Qn(Nr.current),Qn(nn.current),Zr(n)){if(r=n.stateNode,t=n.memoizedProps,r[be]=n,(o=r.nodeValue!==t)&&(e=Ne,e!==null))switch(e.tag){case 3:Jr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[be]=n,n.stateNode=r}return ce(n),null;case 13:if(V(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Pe!==null&&n.mode&1&&!(n.flags&128))Js(),Tt(),n.flags|=98560,o=!1;else if(o=Zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[be]=n}else Tt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ce(n),o=!1}else He!==null&&(Go(He),He=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?ee===0&&(ee=3):Ki())),n.updateQueue!==null&&(n.flags|=4),ce(n),null);case 4:return Rt(),Ao(e,n),e===null&&Er(n.stateNode.containerInfo),ce(n),null;case 10:return Ii(n.type._context),ce(n),null;case 17:return ke(n.type)&&R0(),ce(n),null;case 19:if(V(K),o=n.memoizedState,o===null)return ce(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)qt(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=A0(e),i!==null){for(n.flags|=128,qt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(K,K.current&1|2),n.child}e=e.sibling}o.tail!==null&&J()>$t&&(n.flags|=128,r=!0,qt(o,!1),n.lanes=4194304)}else{if(!r)if(e=A0(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),qt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Q)return ce(n),null}else 2*J()-o.renderingStartTime>$t&&t!==1073741824&&(n.flags|=128,r=!0,qt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=J(),n.sibling=null,t=K.current,W(K,r?t&1|2:t&1),n):(ce(n),null);case 22:case 23:return Qi(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?_e&1073741824&&(ce(n),n.subtreeFlags&6&&(n.flags|=8192)):ce(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function $2(e,n){switch(_i(n),n.tag){case 1:return ke(n.type)&&R0(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Rt(),V(we),V(de),$i(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Li(n),null;case 13:if(V(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));Tt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(K),null;case 4:return Rt(),null;case 10:return Ii(n.type._context),null;case 22:case 23:return Qi(),null;case 24:return null;default:return null}}var e0=!1,fe=!1,j2=typeof WeakSet=="function"?WeakSet:Set,N=null;function yt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){X(e,n,r)}else t.current=null}function Uo(e,n,t){try{t()}catch(r){X(e,n,r)}}var t1=!1;function D2(e,n){if(Eo=z0,e=Ms(),Ei(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,u=-1,s=-1,f=0,h=0,v=e,m=null;n:for(;;){for(var y;v!==t||l!==0&&v.nodeType!==3||(u=i+l),v!==o||r!==0&&v.nodeType!==3||(s=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(y=v.firstChild)!==null;)m=v,v=y;for(;;){if(v===e)break n;if(m===t&&++f===l&&(u=i),m===o&&++h===r&&(s=i),(y=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=y}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Co={focusedElem:e,selectionRange:t},z0=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var p=S.memoizedProps,C=S.memoizedState,c=n.stateNode,a=c.getSnapshotBeforeUpdate(n.elementType===n.type?p:We(n.type,p),C);c.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(g){X(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return S=t1,t1=!1,S}function fr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Uo(n,t,o)}l=l.next}while(l!==r)}}function il(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Wo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function La(e){var n=e.alternate;n!==null&&(e.alternate=null,La(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[be],delete n[_r],delete n[No],delete n[y2],delete n[S2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $a(e){return e.tag===5||e.tag===3||e.tag===4}function r1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$a(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=O0));else if(r!==4&&(e=e.child,e!==null))for(Bo(e,n,t),e=e.sibling;e!==null;)Bo(e,n,t),e=e.sibling}function Ho(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ho(e,n,t),e=e.sibling;e!==null;)Ho(e,n,t),e=e.sibling}var ie=null,Be=!1;function yn(e,n,t){for(t=t.child;t!==null;)ja(e,n,t),t=t.sibling}function ja(e,n,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(q0,t)}catch{}switch(t.tag){case 5:fe||yt(t,n);case 6:var r=ie,l=Be;ie=null,yn(e,n,t),ie=r,Be=l,ie!==null&&(Be?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(Be?(e=ie,t=t.stateNode,e.nodeType===8?Ml(e.parentNode,t):e.nodeType===1&&Ml(e,t),wr(e)):Ml(ie,t.stateNode));break;case 4:r=ie,l=Be,ie=t.stateNode.containerInfo,Be=!0,yn(e,n,t),ie=r,Be=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Uo(t,n,i),l=l.next}while(l!==r)}yn(e,n,t);break;case 1:if(!fe&&(yt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){X(t,n,u)}yn(e,n,t);break;case 21:yn(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,yn(e,n,t),fe=r):yn(e,n,t);break;default:yn(e,n,t)}}function l1(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new j2),n.forEach(function(r){var l=Q2.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ue(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,u=i;e:for(;u!==null;){switch(u.tag){case 5:ie=u.stateNode,Be=!1;break e;case 3:ie=u.stateNode.containerInfo,Be=!0;break e;case 4:ie=u.stateNode.containerInfo,Be=!0;break e}u=u.return}if(ie===null)throw Error(E(160));ja(o,i,l),ie=null,Be=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(f){X(l,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Da(n,e),n=n.sibling}function Da(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(n,e),Je(e),r&4){try{fr(3,e,e.return),il(3,e)}catch(p){X(e,e.return,p)}try{fr(5,e,e.return)}catch(p){X(e,e.return,p)}}break;case 1:Ue(n,e),Je(e),r&512&&t!==null&&yt(t,t.return);break;case 5:if(Ue(n,e),Je(e),r&512&&t!==null&&yt(t,t.return),e.flags&32){var l=e.stateNode;try{vr(l,"")}catch(p){X(e,e.return,p)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&ls(l,o),po(u,i);var f=po(u,o);for(i=0;i<s.length;i+=2){var h=s[i],v=s[i+1];h==="style"?as(l,v):h==="dangerouslySetInnerHTML"?us(l,v):h==="children"?vr(l,v):ci(l,h,v,f)}switch(u){case"input":uo(l,o);break;case"textarea":os(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?kt(l,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?kt(l,!!o.multiple,o.defaultValue,!0):kt(l,!!o.multiple,o.multiple?[]:"",!1))}l[_r]=o}catch(p){X(e,e.return,p)}}break;case 6:if(Ue(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(E(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(p){X(e,e.return,p)}}break;case 3:if(Ue(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{wr(n.containerInfo)}catch(p){X(e,e.return,p)}break;case 4:Ue(n,e),Je(e);break;case 13:Ue(n,e),Je(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Hi=J())),r&4&&l1(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(f=fe)||h,Ue(n,e),fe=f):Ue(n,e),Je(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(v=N=h;N!==null;){switch(m=N,y=m.child,m.tag){case 0:case 11:case 14:case 15:fr(4,m,m.return);break;case 1:yt(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(p){X(r,t,p)}}break;case 5:yt(m,m.return);break;case 22:if(m.memoizedState!==null){i1(v);continue}}y!==null?(y.return=m,N=y):i1(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{l=v.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=v.stateNode,s=v.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=ss("display",i))}catch(p){X(e,e.return,p)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=f?"":v.memoizedProps}catch(p){X(e,e.return,p)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ue(n,e),Je(e),r&4&&l1(e);break;case 21:break;default:Ue(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if($a(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(vr(l,""),r.flags&=-33);var o=r1(e);Ho(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=r1(e);Bo(e,u,i);break;default:throw Error(E(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function M2(e,n,t){N=e,Ma(e)}function Ma(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var l=N,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||e0;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||fe;u=e0;var f=fe;if(e0=i,(fe=s)&&!f)for(N=l;N!==null;)i=N,s=i.child,i.tag===22&&i.memoizedState!==null?u1(l):s!==null?(s.return=i,N=s):u1(l);for(;o!==null;)N=o,Ma(o),o=o.sibling;N=l,e0=u,fe=f}o1(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,N=o):o1(e)}}function o1(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||il(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Hu(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Hu(n,i,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&wr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}fe||n.flags&512&&Wo(n)}catch(m){X(n,n.return,m)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function i1(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function u1(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{il(4,n)}catch(s){X(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){X(n,l,s)}}var o=n.return;try{Wo(n)}catch(s){X(n,o,s)}break;case 5:var i=n.return;try{Wo(n)}catch(s){X(n,i,s)}}}catch(s){X(n,n.return,s)}if(n===e){N=null;break}var u=n.sibling;if(u!==null){u.return=n.return,N=u;break}N=n.return}}var F2=Math.ceil,B0=vn.ReactCurrentDispatcher,Wi=vn.ReactCurrentOwner,$e=vn.ReactCurrentBatchConfig,j=0,le=null,q=null,ue=0,_e=0,St=Mn(0),ee=0,Or=null,et=0,ul=0,Bi=0,dr=null,ge=null,Hi=0,$t=1/0,on=null,H0=!1,Vo=null,On=null,n0=!1,_n=null,V0=0,pr=0,Qo=null,m0=-1,v0=0;function he(){return j&6?J():m0!==-1?m0:m0=J()}function Rn(e){return e.mode&1?j&2&&ue!==0?ue&-ue:k2.transition!==null?(v0===0&&(v0=ks()),v0):(e=A,e!==0||(e=window.event,e=e===void 0?16:zs(e.type)),e):1}function Qe(e,n,t,r){if(50<pr)throw pr=0,Qo=null,Error(E(185));$r(e,t,r),(!(j&2)||e!==le)&&(e===le&&(!(j&2)&&(ul|=t),ee===4&&En(e,ue)),xe(e,r),t===1&&j===0&&!(n.mode&1)&&($t=J()+500,rl&&Fn()))}function xe(e,n){var t=e.callbackNode;kf(e,n);var r=N0(e,e===le?ue:0);if(r===0)t!==null&&vu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&vu(t),n===1)e.tag===0?w2(s1.bind(null,e)):Gs(s1.bind(null,e)),v2(function(){!(j&6)&&Fn()}),t=null;else{switch(xs(r)){case 1:t=mi;break;case 4:t=Ss;break;case 16:t=P0;break;case 536870912:t=ws;break;default:t=P0}t=Qa(t,Fa.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Fa(e,n){if(m0=-1,v0=0,j&6)throw Error(E(327));var t=e.callbackNode;if(Pt()&&e.callbackNode!==t)return null;var r=N0(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Q0(e,r);else{n=r;var l=j;j|=2;var o=Ua();(le!==e||ue!==n)&&(on=null,$t=J()+500,Gn(e,n));do try{W2();break}catch(u){Aa(e,u)}while(!0);zi(),B0.current=o,j=l,q!==null?n=0:(le=null,ue=0,n=ee)}if(n!==0){if(n===2&&(l=yo(e),l!==0&&(r=l,n=Ko(e,l))),n===1)throw t=Or,Gn(e,0),En(e,r),xe(e,J()),t;if(n===6)En(e,r);else{if(l=e.current.alternate,!(r&30)&&!A2(l)&&(n=Q0(e,r),n===2&&(o=yo(e),o!==0&&(r=o,n=Ko(e,o))),n===1))throw t=Or,Gn(e,0),En(e,r),xe(e,J()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:Bn(e,ge,on);break;case 3:if(En(e,r),(r&130023424)===r&&(n=Hi+500-J(),10<n)){if(N0(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Po(Bn.bind(null,e,ge,on),n);break}Bn(e,ge,on);break;case 4:if(En(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-Ve(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*F2(r/1960))-r,10<r){e.timeoutHandle=Po(Bn.bind(null,e,ge,on),r);break}Bn(e,ge,on);break;case 5:Bn(e,ge,on);break;default:throw Error(E(329))}}}return xe(e,J()),e.callbackNode===t?Fa.bind(null,e):null}function Ko(e,n){var t=dr;return e.current.memoizedState.isDehydrated&&(Gn(e,n).flags|=256),e=Q0(e,n),e!==2&&(n=ge,ge=t,n!==null&&Go(n)),e}function Go(e){ge===null?ge=e:ge.push.apply(ge,e)}function A2(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Ge(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function En(e,n){for(n&=~Bi,n&=~ul,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ve(n),r=1<<t;e[t]=-1,n&=~r}}function s1(e){if(j&6)throw Error(E(327));Pt();var n=N0(e,0);if(!(n&1))return xe(e,J()),null;var t=Q0(e,n);if(e.tag!==0&&t===2){var r=yo(e);r!==0&&(n=r,t=Ko(e,r))}if(t===1)throw t=Or,Gn(e,0),En(e,n),xe(e,J()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Bn(e,ge,on),xe(e,J()),null}function Vi(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&($t=J()+500,rl&&Fn())}}function nt(e){_n!==null&&_n.tag===0&&!(j&6)&&Pt();var n=j;j|=1;var t=$e.transition,r=A;try{if($e.transition=null,A=1,e)return e()}finally{A=r,$e.transition=t,j=n,!(j&6)&&Fn()}}function Qi(){_e=St.current,V(St)}function Gn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,m2(t)),q!==null)for(t=q.return;t!==null;){var r=t;switch(_i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&R0();break;case 3:Rt(),V(we),V(de),$i();break;case 5:Li(r);break;case 4:Rt();break;case 13:V(K);break;case 19:V(K);break;case 10:Ii(r.type._context);break;case 22:case 23:Qi()}t=t.return}if(le=e,q=e=Ln(e.current,null),ue=_e=n,ee=0,Or=null,Bi=ul=et=0,ge=dr=null,Vn!==null){for(n=0;n<Vn.length;n++)if(t=Vn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}Vn=null}return e}function Aa(e,n){do{var t=q;try{if(zi(),d0.current=W0,U0){for(var r=G.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}U0=!1}if(bn=0,te=b=G=null,cr=!1,zr=0,Wi.current=null,t===null||t.return===null){ee=1,Or=n,q=null;break}e:{var o=e,i=t.return,u=t,s=n;if(n=ue,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=s,h=u,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Xu(i);if(y!==null){y.flags&=-257,Ju(y,i,u,o,n),y.mode&1&&Yu(o,f,n),n=y,s=f;var S=n.updateQueue;if(S===null){var p=new Set;p.add(s),n.updateQueue=p}else S.add(s);break e}else{if(!(n&1)){Yu(o,f,n),Ki();break e}s=Error(E(426))}}else if(Q&&u.mode&1){var C=Xu(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ju(C,i,u,o,n),Pi(Lt(s,u));break e}}o=s=Lt(s,u),ee!==4&&(ee=2),dr===null?dr=[o]:dr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var c=xa(o,s,n);Bu(o,c);break e;case 1:u=s;var a=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(On===null||!On.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=Ea(o,u,n);Bu(o,g);break e}}o=o.return}while(o!==null)}Ba(t)}catch(w){n=w,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function Ua(){var e=B0.current;return B0.current=W0,e===null?W0:e}function Ki(){(ee===0||ee===3||ee===2)&&(ee=4),le===null||!(et&268435455)&&!(ul&268435455)||En(le,ue)}function Q0(e,n){var t=j;j|=2;var r=Ua();(le!==e||ue!==n)&&(on=null,Gn(e,n));do try{U2();break}catch(l){Aa(e,l)}while(!0);if(zi(),j=t,B0.current=r,q!==null)throw Error(E(261));return le=null,ue=0,ee}function U2(){for(;q!==null;)Wa(q)}function W2(){for(;q!==null&&!df();)Wa(q)}function Wa(e){var n=Va(e.alternate,e,_e);e.memoizedProps=e.pendingProps,n===null?Ba(e):q=n,Wi.current=null}function Ba(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=$2(t,n),t!==null){t.flags&=32767,q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,q=null;return}}else if(t=L2(t,n,_e),t!==null){q=t;return}if(n=n.sibling,n!==null){q=n;return}q=n=e}while(n!==null);ee===0&&(ee=5)}function Bn(e,n,t){var r=A,l=$e.transition;try{$e.transition=null,A=1,B2(e,n,t,r)}finally{$e.transition=l,A=r}return null}function B2(e,n,t,r){do Pt();while(_n!==null);if(j&6)throw Error(E(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(xf(e,o),e===le&&(q=le=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||n0||(n0=!0,Qa(P0,function(){return Pt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var i=A;A=1;var u=j;j|=4,Wi.current=null,D2(e,t),Da(t,e),s2(Co),z0=!!Eo,Co=Eo=null,e.current=t,M2(t),pf(),j=u,A=i,$e.transition=o}else e.current=t;if(n0&&(n0=!1,_n=e,V0=l),o=e.pendingLanes,o===0&&(On=null),vf(t.stateNode),xe(e,J()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(H0)throw H0=!1,e=Vo,Vo=null,e;return V0&1&&e.tag!==0&&Pt(),o=e.pendingLanes,o&1?e===Qo?pr++:(pr=0,Qo=e):pr=0,Fn(),null}function Pt(){if(_n!==null){var e=xs(V0),n=$e.transition,t=A;try{if($e.transition=null,A=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,V0=0,j&6)throw Error(E(331));var l=j;for(j|=4,N=e.current;N!==null;){var o=N,i=o.child;if(N.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var f=u[s];for(N=f;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:fr(8,h,o)}var v=h.child;if(v!==null)v.return=h,N=v;else for(;N!==null;){h=N;var m=h.sibling,y=h.return;if(La(h),h===f){N=null;break}if(m!==null){m.return=y,N=m;break}N=y}}}var S=o.alternate;if(S!==null){var p=S.child;if(p!==null){S.child=null;do{var C=p.sibling;p.sibling=null,p=C}while(p!==null)}}N=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,N=i;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fr(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,N=c;break e}N=o.return}}var a=e.current;for(N=a;N!==null;){i=N;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,N=d;else e:for(i=a;N!==null;){if(u=N,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:il(9,u)}}catch(w){X(u,u.return,w)}if(u===i){N=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,N=g;break e}N=u.return}}if(j=l,Fn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(q0,e)}catch{}r=!0}return r}finally{A=t,$e.transition=n}}return!1}function a1(e,n,t){n=Lt(t,n),n=xa(e,n,1),e=Tn(e,n,1),n=he(),e!==null&&($r(e,1,n),xe(e,n))}function X(e,n,t){if(e.tag===3)a1(e,e,t);else for(;n!==null;){if(n.tag===3){a1(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){e=Lt(t,e),e=Ea(n,e,1),n=Tn(n,e,1),e=he(),n!==null&&($r(n,1,e),xe(n,e));break}}n=n.return}}function H2(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(ue&t)===t&&(ee===4||ee===3&&(ue&130023424)===ue&&500>J()-Hi?Gn(e,0):Bi|=t),xe(e,n)}function Ha(e,n){n===0&&(e.mode&1?(n=Qr,Qr<<=1,!(Qr&130023424)&&(Qr=4194304)):n=1);var t=he();e=hn(e,n),e!==null&&($r(e,n,t),xe(e,t))}function V2(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ha(e,t)}function Q2(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),Ha(e,t)}var Va;Va=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||we.current)ye=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ye=!1,R2(e,n,t);ye=!!(e.flags&131072)}else ye=!1,Q&&n.flags&1048576&&Ys(n,j0,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;h0(e,n),e=n.pendingProps;var l=It(n,de.current);_t(n,t),l=Di(null,n,r,e,l,t);var o=Mi();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ke(r)?(o=!0,L0(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Oi(n),l.updater=ol,n.stateNode=l,l._reactInternals=n,Lo(n,r,e,t),n=Do(null,n,r,!0,o,t)):(n.tag=0,Q&&o&&Ci(n),pe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(h0(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=G2(r),e=We(r,e),l){case 0:n=jo(null,n,r,e,t);break e;case 1:n=bu(null,n,r,e,t);break e;case 11:n=Zu(null,n,r,e,t);break e;case 14:n=qu(null,n,r,We(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:We(r,l),jo(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:We(r,l),bu(e,n,r,l,t);case 3:e:{if(Na(n),e===null)throw Error(E(387));r=n.pendingProps,o=n.memoizedState,l=o.element,ea(e,n),F0(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=Lt(Error(E(423)),n),n=e1(e,n,r,t,l);break e}else if(r!==l){l=Lt(Error(E(424)),n),n=e1(e,n,r,t,l);break e}else for(Pe=In(n.stateNode.containerInfo.firstChild),Ne=n,Q=!0,He=null,t=qs(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Tt(),r===l){n=mn(e,n,t);break e}pe(e,n,r,t)}n=n.child}return n;case 5:return na(n),e===null&&To(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,_o(r,l)?i=null:o!==null&&_o(r,o)&&(n.flags|=32),Pa(e,n),pe(e,n,i,t),n.child;case 6:return e===null&&To(n),null;case 13:return za(e,n,t);case 4:return Ri(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ot(n,null,r,t):pe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:We(r,l),Zu(e,n,r,l,t);case 7:return pe(e,n,n.pendingProps,t),n.child;case 8:return pe(e,n,n.pendingProps.children,t),n.child;case 12:return pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,W(D0,r._currentValue),r._currentValue=i,o!==null)if(Ge(o.value,i)){if(o.children===l.children&&!we.current){n=mn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=fn(-1,t&-t),s.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?s.next=s:(s.next=h.next,h.next=s),f.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Oo(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(E(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Oo(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}pe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,_t(n,t),l=je(l),r=r(l),n.flags|=1,pe(e,n,r,t),n.child;case 14:return r=n.type,l=We(r,n.pendingProps),l=We(r.type,l),qu(e,n,r,l,t);case 15:return Ca(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:We(r,l),h0(e,n),n.tag=1,ke(r)?(e=!0,L0(n)):e=!1,_t(n,t),ka(n,r,l),Lo(n,r,l,t),Do(null,n,r,!0,e,t);case 19:return Ia(e,n,t);case 22:return _a(e,n,t)}throw Error(E(156,n.tag))};function Qa(e,n){return ys(e,n)}function K2(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,n,t,r){return new K2(e,n,t,r)}function Gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G2(e){if(typeof e=="function")return Gi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===di)return 11;if(e===pi)return 14}return 2}function Ln(e,n){var t=e.alternate;return t===null?(t=Le(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function g0(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")Gi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case at:return Yn(t.children,l,o,n);case fi:i=8,l|=8;break;case to:return e=Le(12,t,n,l|2),e.elementType=to,e.lanes=o,e;case ro:return e=Le(13,t,n,l),e.elementType=ro,e.lanes=o,e;case lo:return e=Le(19,t,n,l),e.elementType=lo,e.lanes=o,e;case ns:return sl(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case b1:i=10;break e;case es:i=9;break e;case di:i=11;break e;case pi:i=14;break e;case wn:i=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=Le(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function Yn(e,n,t,r){return e=Le(7,e,r,n),e.lanes=t,e}function sl(e,n,t,r){return e=Le(22,e,r,n),e.elementType=ns,e.lanes=t,e.stateNode={isHidden:!1},e}function Ql(e,n,t){return e=Le(6,e,null,n),e.lanes=t,e}function Kl(e,n,t){return n=Le(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Y2(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Yi(e,n,t,r,l,o,i,u,s){return e=new Y2(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Le(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oi(o),e}function X2(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:st,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ka(e){if(!e)return jn;e=e._reactInternals;e:{if(rt(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(ke(t))return Ks(e,t,n)}return n}function Ga(e,n,t,r,l,o,i,u,s){return e=Yi(t,r,!0,e,l,o,i,u,s),e.context=Ka(null),t=e.current,r=he(),l=Rn(t),o=fn(r,l),o.callback=n??null,Tn(t,o,l),e.current.lanes=l,$r(e,l,r),xe(e,r),e}function al(e,n,t,r){var l=n.current,o=he(),i=Rn(l);return t=Ka(t),n.context===null?n.context=t:n.pendingContext=t,n=fn(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Tn(l,n,i),e!==null&&(Qe(e,l,i,o),f0(e,l,i)),i}function K0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function c1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Xi(e,n){c1(e,n),(e=e.alternate)&&c1(e,n)}function J2(){return null}var Ya=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ji(e){this._internalRoot=e}cl.prototype.render=Ji.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));al(e,n,null,null)};cl.prototype.unmount=Ji.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nt(function(){al(null,e,null,null)}),n[pn]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var n=_s();e={blockedOn:null,target:e,priority:n};for(var t=0;t<xn.length&&n!==0&&n<xn[t].priority;t++);xn.splice(t,0,e),t===0&&Ns(e)}};function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function f1(){}function Z2(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=K0(i);o.call(f)}}var i=Ga(n,r,e,0,null,!1,!1,"",f1);return e._reactRootContainer=i,e[pn]=i.current,Er(e.nodeType===8?e.parentNode:e),nt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var f=K0(s);u.call(f)}}var s=Yi(e,0,!1,null,null,!1,!1,"",f1);return e._reactRootContainer=s,e[pn]=s.current,Er(e.nodeType===8?e.parentNode:e),nt(function(){al(n,s,t,r)}),s}function dl(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=K0(i);u.call(s)}}al(n,i,e,l)}else i=Z2(t,n,e,l,r);return K0(i)}Es=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=tr(n.pendingLanes);t!==0&&(vi(n,t|1),xe(n,J()),!(j&6)&&($t=J()+500,Fn()))}break;case 13:nt(function(){var r=hn(e,1);if(r!==null){var l=he();Qe(r,e,1,l)}}),Xi(e,1)}};gi=function(e){if(e.tag===13){var n=hn(e,134217728);if(n!==null){var t=he();Qe(n,e,134217728,t)}Xi(e,134217728)}};Cs=function(e){if(e.tag===13){var n=Rn(e),t=hn(e,n);if(t!==null){var r=he();Qe(t,e,n,r)}Xi(e,n)}};_s=function(){return A};Ps=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};mo=function(e,n,t){switch(n){case"input":if(uo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=tl(r);if(!l)throw Error(E(90));rs(r),uo(r,l)}}}break;case"textarea":os(e,t);break;case"select":n=t.value,n!=null&&kt(e,!!t.multiple,n,!1)}};ds=Vi;ps=nt;var q2={usingClientEntryPoint:!1,Events:[Dr,pt,tl,cs,fs,Vi]},bt={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b2={bundleType:bt.bundleType,version:bt.version,rendererPackageName:bt.rendererPackageName,rendererConfig:bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vs(e),e===null?null:e.stateNode},findFiberByHostInstance:bt.findFiberByHostInstance||J2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var t0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t0.isDisabled&&t0.supportsFiber)try{q0=t0.inject(b2),en=t0}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q2;Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zi(n))throw Error(E(200));return X2(e,n,null,t)};Ie.createRoot=function(e,n){if(!Zi(e))throw Error(E(299));var t=!1,r="",l=Ya;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Yi(e,1,!1,null,null,t,!1,r,l),e[pn]=n.current,Er(e.nodeType===8?e.parentNode:e),new Ji(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=vs(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return nt(e)};Ie.hydrate=function(e,n,t){if(!fl(n))throw Error(E(200));return dl(null,e,n,!0,t)};Ie.hydrateRoot=function(e,n,t){if(!Zi(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=Ya;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Ga(n,null,e,1,t??null,l,!1,o,i),e[pn]=n.current,Er(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new cl(n)};Ie.render=function(e,n,t){if(!fl(n))throw Error(E(200));return dl(null,e,n,!1,t)};Ie.unmountComponentAtNode=function(e){if(!fl(e))throw Error(E(40));return e._reactRootContainer?(nt(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};Ie.unstable_batchedUpdates=Vi;Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!fl(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return dl(e,n,t,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Xa(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xa)}catch(e){console.error(e)}}Xa(),X1.exports=Ie;var e5=X1.exports,d1=e5;eo.createRoot=d1.createRoot,eo.hydrateRoot=d1.hydrateRoot;function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Yo.apply(null,arguments)}function p1(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Xo(e,n){return Xo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Xo(e,n)}function n5(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,Xo(e,n)}var h1=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function t5(e,n){return!!(e===n||h1(e)&&h1(n))}function r5(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!t5(e[t],n[t]))return!1;return!0}function Gl(e,n){n===void 0&&(n=r5);var t,r=[],l,o=!1;function i(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];return o&&t===this&&n(u,r)||(l=e.apply(this,u),o=!0,t=this,r=u),l}return i}var l5=typeof performance=="object"&&typeof performance.now=="function",m1=l5?function(){return performance.now()}:function(){return Date.now()};function v1(e){cancelAnimationFrame(e.id)}function o5(e,n){var t=m1();function r(){m1()-t>=n?e.call(null):l.id=requestAnimationFrame(r)}var l={id:requestAnimationFrame(r)};return l}var Yl=-1;function g1(e){if(e===void 0&&(e=!1),Yl===-1||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",document.body.appendChild(n),Yl=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return Yl}var it=null;function y1(e){if(e===void 0&&(e=!1),it===null||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var r=document.createElement("div"),l=r.style;return l.width="100px",l.height="100px",n.appendChild(r),document.body.appendChild(n),n.scrollLeft>0?it="positive-descending":(n.scrollLeft=1,n.scrollLeft===0?it="negative":it="positive-ascending"),document.body.removeChild(n),it}return it}var i5=150,u5=function(n,t){return n};function s5(e){var n,t=e.getItemOffset,r=e.getEstimatedTotalSize,l=e.getItemSize,o=e.getOffsetForIndexAndAlignment,i=e.getStartIndexForOffset,u=e.getStopIndexForStartIndex,s=e.initInstanceProps,f=e.shouldResetStyleCacheOnItemSizeChange,h=e.validateProps;return n=function(v){n5(m,v);function m(S){var p;return p=v.call(this,S)||this,p._instanceProps=s(p.props,p1(p)),p._outerRef=void 0,p._resetIsScrollingTimeoutId=null,p.state={instance:p1(p),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof p.props.initialScrollOffset=="number"?p.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},p._callOnItemsRendered=void 0,p._callOnItemsRendered=Gl(function(C,c,a,d){return p.props.onItemsRendered({overscanStartIndex:C,overscanStopIndex:c,visibleStartIndex:a,visibleStopIndex:d})}),p._callOnScroll=void 0,p._callOnScroll=Gl(function(C,c,a){return p.props.onScroll({scrollDirection:C,scrollOffset:c,scrollUpdateWasRequested:a})}),p._getItemStyle=void 0,p._getItemStyle=function(C){var c=p.props,a=c.direction,d=c.itemSize,g=c.layout,w=p._getItemStyleCache(f&&d,f&&g,f&&a),x;if(w.hasOwnProperty(C))x=w[C];else{var k=t(p.props,C,p._instanceProps),P=l(p.props,C,p._instanceProps),$=a==="horizontal"||g==="horizontal",O=a==="rtl",ne=$?k:0;w[C]=x={position:"absolute",left:O?void 0:ne,right:O?ne:void 0,top:$?0:k,height:$?"100%":P,width:$?P:"100%"}}return x},p._getItemStyleCache=void 0,p._getItemStyleCache=Gl(function(C,c,a){return{}}),p._onScrollHorizontal=function(C){var c=C.currentTarget,a=c.clientWidth,d=c.scrollLeft,g=c.scrollWidth;p.setState(function(w){if(w.scrollOffset===d)return null;var x=p.props.direction,k=d;if(x==="rtl")switch(y1()){case"negative":k=-d;break;case"positive-descending":k=g-a-d;break}return k=Math.max(0,Math.min(k,g-a)),{isScrolling:!0,scrollDirection:w.scrollOffset<k?"forward":"backward",scrollOffset:k,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._onScrollVertical=function(C){var c=C.currentTarget,a=c.clientHeight,d=c.scrollHeight,g=c.scrollTop;p.setState(function(w){if(w.scrollOffset===g)return null;var x=Math.max(0,Math.min(g,d-a));return{isScrolling:!0,scrollDirection:w.scrollOffset<x?"forward":"backward",scrollOffset:x,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._outerRefSetter=function(C){var c=p.props.outerRef;p._outerRef=C,typeof c=="function"?c(C):c!=null&&typeof c=="object"&&c.hasOwnProperty("current")&&(c.current=C)},p._resetIsScrollingDebounced=function(){p._resetIsScrollingTimeoutId!==null&&v1(p._resetIsScrollingTimeoutId),p._resetIsScrollingTimeoutId=o5(p._resetIsScrolling,i5)},p._resetIsScrolling=function(){p._resetIsScrollingTimeoutId=null,p.setState({isScrolling:!1},function(){p._getItemStyleCache(-1,null)})},p}m.getDerivedStateFromProps=function(p,C){return a5(p,C),h(p),null};var y=m.prototype;return y.scrollTo=function(p){p=Math.max(0,p),this.setState(function(C){return C.scrollOffset===p?null:{scrollDirection:C.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},y.scrollToItem=function(p,C){C===void 0&&(C="auto");var c=this.props,a=c.itemCount,d=c.layout,g=this.state.scrollOffset;p=Math.max(0,Math.min(p,a-1));var w=0;if(this._outerRef){var x=this._outerRef;d==="vertical"?w=x.scrollWidth>x.clientWidth?g1():0:w=x.scrollHeight>x.clientHeight?g1():0}this.scrollTo(o(this.props,p,C,g,this._instanceProps,w))},y.componentDidMount=function(){var p=this.props,C=p.direction,c=p.initialScrollOffset,a=p.layout;if(typeof c=="number"&&this._outerRef!=null){var d=this._outerRef;C==="horizontal"||a==="horizontal"?d.scrollLeft=c:d.scrollTop=c}this._callPropsCallbacks()},y.componentDidUpdate=function(){var p=this.props,C=p.direction,c=p.layout,a=this.state,d=a.scrollOffset,g=a.scrollUpdateWasRequested;if(g&&this._outerRef!=null){var w=this._outerRef;if(C==="horizontal"||c==="horizontal")if(C==="rtl")switch(y1()){case"negative":w.scrollLeft=-d;break;case"positive-ascending":w.scrollLeft=d;break;default:var x=w.clientWidth,k=w.scrollWidth;w.scrollLeft=k-x-d;break}else w.scrollLeft=d;else w.scrollTop=d}this._callPropsCallbacks()},y.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&v1(this._resetIsScrollingTimeoutId)},y.render=function(){var p=this.props,C=p.children,c=p.className,a=p.direction,d=p.height,g=p.innerRef,w=p.innerElementType,x=p.innerTagName,k=p.itemCount,P=p.itemData,$=p.itemKey,O=$===void 0?u5:$,ne=p.layout,tn=p.outerElementType,rn=p.outerTagName,lt=p.style,Vt=p.useIsScrolling,An=p.width,Ye=this.state.isScrolling,_=a==="horizontal"||ne==="horizontal",z=_?this._onScrollHorizontal:this._onScrollVertical,T=this._getRangeToRender(),M=T[0],F=T[1],Xe=[];if(k>0)for(var oe=M;oe<=F;oe++)Xe.push(U.createElement(C,{data:P,key:O(oe,P),index:oe,isScrolling:Vt?Ye:void 0,style:this._getItemStyle(oe)}));var Ae=r(this.props,this._instanceProps);return U.createElement(tn||rn||"div",{className:c,onScroll:z,ref:this._outerRefSetter,style:Yo({position:"relative",height:d,width:An,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},lt)},U.createElement(w||x||"div",{children:Xe,ref:g,style:{height:_?"100%":Ae,pointerEvents:Ye?"none":void 0,width:_?Ae:"100%"}}))},y._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var p=this.props.itemCount;if(p>0){var C=this._getRangeToRender(),c=C[0],a=C[1],d=C[2],g=C[3];this._callOnItemsRendered(c,a,d,g)}}if(typeof this.props.onScroll=="function"){var w=this.state,x=w.scrollDirection,k=w.scrollOffset,P=w.scrollUpdateWasRequested;this._callOnScroll(x,k,P)}},y._getRangeToRender=function(){var p=this.props,C=p.itemCount,c=p.overscanCount,a=this.state,d=a.isScrolling,g=a.scrollDirection,w=a.scrollOffset;if(C===0)return[0,0,0,0];var x=i(this.props,w,this._instanceProps),k=u(this.props,x,w,this._instanceProps),P=!d||g==="backward"?Math.max(1,c):1,$=!d||g==="forward"?Math.max(1,c):1;return[Math.max(0,x-P),Math.max(0,Math.min(C-1,k+$)),x,k]},m}(U.PureComponent),n.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var a5=function(n,t){n.children,n.direction,n.height,n.layout,n.innerTagName,n.outerTagName,n.width,t.instance},c5=s5({getItemOffset:function(n,t){var r=n.itemSize;return t*r},getItemSize:function(n,t){var r=n.itemSize;return r},getEstimatedTotalSize:function(n){var t=n.itemCount,r=n.itemSize;return r*t},getOffsetForIndexAndAlignment:function(n,t,r,l,o,i){var u=n.direction,s=n.height,f=n.itemCount,h=n.itemSize,v=n.layout,m=n.width,y=u==="horizontal"||v==="horizontal",S=y?m:s,p=Math.max(0,f*h-S),C=Math.min(p,t*h),c=Math.max(0,t*h-S+h+i);switch(r==="smart"&&(l>=c-S&&l<=C+S?r="auto":r="center"),r){case"start":return C;case"end":return c;case"center":{var a=Math.round(c+(C-c)/2);return a<Math.ceil(S/2)?0:a>p+Math.floor(S/2)?p:a}case"auto":default:return l>=c&&l<=C?l:l<c?c:C}},getStartIndexForOffset:function(n,t){var r=n.itemCount,l=n.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/l)))},getStopIndexForStartIndex:function(n,t,r){var l=n.direction,o=n.height,i=n.itemCount,u=n.itemSize,s=n.layout,f=n.width,h=l==="horizontal"||s==="horizontal",v=t*u,m=h?f:o,y=Math.ceil((m+r-v)/u);return Math.max(0,Math.min(i-1,t+y-1))},initInstanceProps:function(n){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(n){n.itemSize}}),Se=function(){return Se=Object.assign||function(n){for(var t,r=1,l=arguments.length;r<l;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},Se.apply(this,arguments)};function G0(e,n,t){if(t||arguments.length===2)for(var r=0,l=n.length,o;r<l;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))}var H="-ms-",hr="-moz-",D="-webkit-",Ja="comm",pl="rule",qi="decl",f5="@import",Za="@keyframes",d5="@layer",qa=Math.abs,bi=String.fromCharCode,Jo=Object.assign;function p5(e,n){return re(e,0)^45?(((n<<2^re(e,0))<<2^re(e,1))<<2^re(e,2))<<2^re(e,3):0}function ba(e){return e.trim()}function un(e,n){return(e=n.exec(e))?e[0]:e}function R(e,n,t){return e.replace(n,t)}function y0(e,n,t){return e.indexOf(n,t)}function re(e,n){return e.charCodeAt(n)|0}function jt(e,n,t){return e.slice(n,t)}function qe(e){return e.length}function ec(e){return e.length}function lr(e,n){return n.push(e),e}function h5(e,n){return e.map(n).join("")}function S1(e,n){return e.filter(function(t){return!un(t,n)})}var hl=1,Dt=1,nc=0,Me=0,Z=0,Ht="";function ml(e,n,t,r,l,o,i,u){return{value:e,root:n,parent:t,type:r,props:l,children:o,line:hl,column:Dt,length:i,return:"",siblings:u}}function Sn(e,n){return Jo(ml("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function ut(e){for(;e.root;)e=Sn(e.root,{children:[e]});lr(e,e.siblings)}function m5(){return Z}function v5(){return Z=Me>0?re(Ht,--Me):0,Dt--,Z===10&&(Dt=1,hl--),Z}function Ke(){return Z=Me<nc?re(Ht,Me++):0,Dt++,Z===10&&(Dt=1,hl++),Z}function Xn(){return re(Ht,Me)}function S0(){return Me}function vl(e,n){return jt(Ht,e,n)}function Zo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g5(e){return hl=Dt=1,nc=qe(Ht=e),Me=0,[]}function y5(e){return Ht="",e}function Xl(e){return ba(vl(Me-1,qo(e===91?e+2:e===40?e+1:e)))}function S5(e){for(;(Z=Xn())&&Z<33;)Ke();return Zo(e)>2||Zo(Z)>3?"":" "}function w5(e,n){for(;--n&&Ke()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return vl(e,S0()+(n<6&&Xn()==32&&Ke()==32))}function qo(e){for(;Ke();)switch(Z){case e:return Me;case 34:case 39:e!==34&&e!==39&&qo(Z);break;case 40:e===41&&qo(e);break;case 92:Ke();break}return Me}function k5(e,n){for(;Ke()&&e+Z!==57;)if(e+Z===84&&Xn()===47)break;return"/*"+vl(n,Me-1)+"*"+bi(e===47?e:Ke())}function x5(e){for(;!Zo(Xn());)Ke();return vl(e,Me)}function E5(e){return y5(w0("",null,null,null,[""],e=g5(e),0,[0],e))}function w0(e,n,t,r,l,o,i,u,s){for(var f=0,h=0,v=i,m=0,y=0,S=0,p=1,C=1,c=1,a=0,d="",g=l,w=o,x=r,k=d;C;)switch(S=a,a=Ke()){case 40:if(S!=108&&re(k,v-1)==58){y0(k+=R(Xl(a),"&","&\f"),"&\f",qa(f?u[f-1]:0))!=-1&&(c=-1);break}case 34:case 39:case 91:k+=Xl(a);break;case 9:case 10:case 13:case 32:k+=S5(S);break;case 92:k+=w5(S0()-1,7);continue;case 47:switch(Xn()){case 42:case 47:lr(C5(k5(Ke(),S0()),n,t,s),s);break;default:k+="/"}break;case 123*p:u[f++]=qe(k)*c;case 125*p:case 59:case 0:switch(a){case 0:case 125:C=0;case 59+h:c==-1&&(k=R(k,/\f/g,"")),y>0&&qe(k)-v&&lr(y>32?k1(k+";",r,t,v-1,s):k1(R(k," ","")+";",r,t,v-2,s),s);break;case 59:k+=";";default:if(lr(x=w1(k,n,t,f,h,l,u,d,g=[],w=[],v,o),o),a===123)if(h===0)w0(k,n,x,x,g,o,v,u,w);else switch(m===99&&re(k,3)===110?100:m){case 100:case 108:case 109:case 115:w0(e,x,x,r&&lr(w1(e,x,x,0,0,l,u,d,l,g=[],v,w),w),l,w,v,u,r?g:w);break;default:w0(k,x,x,x,[""],w,0,u,w)}}f=h=y=0,p=c=1,d=k="",v=i;break;case 58:v=1+qe(k),y=S;default:if(p<1){if(a==123)--p;else if(a==125&&p++==0&&v5()==125)continue}switch(k+=bi(a),a*p){case 38:c=h>0?1:(k+="\f",-1);break;case 44:u[f++]=(qe(k)-1)*c,c=1;break;case 64:Xn()===45&&(k+=Xl(Ke())),m=Xn(),h=v=qe(d=k+=x5(S0())),a++;break;case 45:S===45&&qe(k)==2&&(p=0)}}return o}function w1(e,n,t,r,l,o,i,u,s,f,h,v){for(var m=l-1,y=l===0?o:[""],S=ec(y),p=0,C=0,c=0;p<r;++p)for(var a=0,d=jt(e,m+1,m=qa(C=i[p])),g=e;a<S;++a)(g=ba(C>0?y[a]+" "+d:R(d,/&\f/g,y[a])))&&(s[c++]=g);return ml(e,n,t,l===0?pl:u,s,f,h,v)}function C5(e,n,t,r){return ml(e,n,t,Ja,bi(m5()),jt(e,2,-2),0,r)}function k1(e,n,t,r,l){return ml(e,n,t,qi,jt(e,0,r),jt(e,r+1,-1),r,l)}function tc(e,n,t){switch(p5(e,n)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return hr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+hr+e+H+e+e;case 5936:switch(re(e,n+11)){case 114:return D+e+H+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+H+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+H+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+H+e+e;case 6165:return D+e+H+"flex-"+e+e;case 5187:return D+e+R(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return D+e+H+"flex-item-"+R(e,/flex-|-self/g,"")+(un(e,/flex-|baseline/)?"":H+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return D+e+H+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+H+R(e,"shrink","negative")+e;case 5292:return D+e+H+R(e,"basis","preferred-size")+e;case 6060:return D+"box-"+R(e,"-grow","")+D+e+H+R(e,"grow","positive")+e;case 4554:return D+R(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!un(e,/flex-|baseline/))return H+"grid-column-align"+jt(e,n)+e;break;case 2592:case 3360:return H+R(e,"template-","")+e;case 4384:case 3616:return t&&t.some(function(r,l){return n=l,un(r.props,/grid-\w+-end/)})?~y0(e+(t=t[n].value),"span",0)?e:H+R(e,"-start","")+e+H+"grid-row-span:"+(~y0(t,"span",0)?un(t,/\d+/):+un(t,/\d+/)-+un(e,/\d+/))+";":H+R(e,"-start","")+e;case 4896:case 4128:return t&&t.some(function(r){return un(r.props,/grid-\w+-start/)})?e:H+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-n>6)switch(re(e,n+1)){case 109:if(re(e,n+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+hr+(re(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~y0(e,"stretch",0)?tc(R(e,"stretch","fill-available"),n,t)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,l,o,i,u,s,f){return H+l+":"+o+f+(i?H+l+"-span:"+(u?s:+s-+o)+f:"")+e});case 4949:if(re(e,n+6)===121)return R(e,":",":"+D)+e;break;case 6444:switch(re(e,re(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(re(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+H+"$2box$3")+e;case 100:return R(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function Y0(e,n){for(var t="",r=0;r<e.length;r++)t+=n(e[r],r,e,n)||"";return t}function _5(e,n,t,r){switch(e.type){case d5:if(e.children.length)break;case f5:case qi:return e.return=e.return||e.value;case Ja:return"";case Za:return e.return=e.value+"{"+Y0(e.children,r)+"}";case pl:if(!qe(e.value=e.props.join(",")))return""}return qe(t=Y0(e.children,r))?e.return=e.value+"{"+t+"}":""}function P5(e){var n=ec(e);return function(t,r,l,o){for(var i="",u=0;u<n;u++)i+=e[u](t,r,l,o)||"";return i}}function N5(e){return function(n){n.root||(n=n.return)&&e(n)}}function z5(e,n,t,r){if(e.length>-1&&!e.return)switch(e.type){case qi:e.return=tc(e.value,e.length,t);return;case Za:return Y0([Sn(e,{value:R(e.value,"@","@"+D)})],r);case pl:if(e.length)return h5(t=e.props,function(l){switch(un(l,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ut(Sn(e,{props:[R(l,/:(read-\w+)/,":"+hr+"$1")]})),ut(Sn(e,{props:[l]})),Jo(e,{props:S1(t,r)});break;case"::placeholder":ut(Sn(e,{props:[R(l,/:(plac\w+)/,":"+D+"input-$1")]})),ut(Sn(e,{props:[R(l,/:(plac\w+)/,":"+hr+"$1")]})),ut(Sn(e,{props:[R(l,/:(plac\w+)/,H+"input-$1")]})),ut(Sn(e,{props:[l]})),Jo(e,{props:S1(t,r)});break}return""})}}var I5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},Mt=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",rc="active",lc="data-styled-version",gl="6.1.12",eu=`/*!sc*/
`,X0=typeof window<"u"&&"HTMLElement"in window,T5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),yl=Object.freeze([]),Ft=Object.freeze({});function O5(e,n,t){return t===void 0&&(t=Ft),e.theme!==t.theme&&e.theme||n||t.theme}var oc=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),R5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,L5=/(^-|-$)/g;function x1(e){return e.replace(R5,"-").replace(L5,"")}var $5=/(a)(d)/gi,r0=52,E1=function(e){return String.fromCharCode(e+(e>25?39:97))};function bo(e){var n,t="";for(n=Math.abs(e);n>r0;n=n/r0|0)t=E1(n%r0)+t;return(E1(n%r0)+t).replace($5,"$1-$2")}var Jl,ic=5381,wt=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},uc=function(e){return wt(ic,e)};function j5(e){return bo(uc(e)>>>0)}function D5(e){return e.displayName||e.name||"Component"}function Zl(e){return typeof e=="string"&&!0}var sc=typeof Symbol=="function"&&Symbol.for,ac=sc?Symbol.for("react.memo"):60115,M5=sc?Symbol.for("react.forward_ref"):60112,F5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},A5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},U5=((Jl={})[M5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jl[ac]=cc,Jl);function C1(e){return("type"in(n=e)&&n.type.$$typeof)===ac?cc:"$$typeof"in e?U5[e.$$typeof]:F5;var n}var W5=Object.defineProperty,B5=Object.getOwnPropertyNames,_1=Object.getOwnPropertySymbols,H5=Object.getOwnPropertyDescriptor,V5=Object.getPrototypeOf,P1=Object.prototype;function fc(e,n,t){if(typeof n!="string"){if(P1){var r=V5(n);r&&r!==P1&&fc(e,r,t)}var l=B5(n);_1&&(l=l.concat(_1(n)));for(var o=C1(e),i=C1(n),u=0;u<l.length;++u){var s=l[u];if(!(s in A5||t&&t[s]||i&&s in i||o&&s in o)){var f=H5(n,s);try{W5(e,s,f)}catch{}}}}return e}function At(e){return typeof e=="function"}function nu(e){return typeof e=="object"&&"styledComponentId"in e}function Kn(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function N1(e,n){if(e.length===0)return"";for(var t=e[0],r=1;r<e.length;r++)t+=e[r];return t}function Rr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ei(e,n,t){if(t===void 0&&(t=!1),!t&&!Rr(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var r=0;r<n.length;r++)e[r]=ei(e[r],n[r]);else if(Rr(n))for(var r in n)e[r]=ei(e[r],n[r]);return e}function tu(e,n){Object.defineProperty(e,"toString",{value:n})}function Fr(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var Q5=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var t=0,r=0;r<n;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(n,t){if(n>=this.groupSizes.length){for(var r=this.groupSizes,l=r.length,o=l;n>=o;)if((o<<=1)<0)throw Fr(16,"".concat(n));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=l;i<o;i++)this.groupSizes[i]=0}for(var u=this.indexOfGroup(n+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(u,t[i])&&(this.groupSizes[n]++,u++)},e.prototype.clearGroup=function(n){if(n<this.length){var t=this.groupSizes[n],r=this.indexOfGroup(n),l=r+t;this.groupSizes[n]=0;for(var o=r;o<l;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(n){var t="";if(n>=this.length||this.groupSizes[n]===0)return t;for(var r=this.groupSizes[n],l=this.indexOfGroup(n),o=l+r,i=l;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(eu);return t},e}(),k0=new Map,J0=new Map,x0=1,l0=function(e){if(k0.has(e))return k0.get(e);for(;J0.has(x0);)x0++;var n=x0++;return k0.set(e,n),J0.set(n,e),n},K5=function(e,n){x0=n+1,k0.set(e,n),J0.set(n,e)},G5="style[".concat(Mt,"][").concat(lc,'="').concat(gl,'"]'),Y5=new RegExp("^".concat(Mt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),X5=function(e,n,t){for(var r,l=t.split(","),o=0,i=l.length;o<i;o++)(r=l[o])&&e.registerName(n,r)},J5=function(e,n){for(var t,r=((t=n.textContent)!==null&&t!==void 0?t:"").split(eu),l=[],o=0,i=r.length;o<i;o++){var u=r[o].trim();if(u){var s=u.match(Y5);if(s){var f=0|parseInt(s[1],10),h=s[2];f!==0&&(K5(h,f),X5(e,h,s[3]),e.getTag().insertRules(f,l)),l.length=0}else l.push(u)}}},z1=function(e){for(var n=document.querySelectorAll(G5),t=0,r=n.length;t<r;t++){var l=n[t];l&&l.getAttribute(Mt)!==rc&&(J5(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function Z5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dc=function(e){var n=document.head,t=e||n,r=document.createElement("style"),l=function(u){var s=Array.from(u.querySelectorAll("style[".concat(Mt,"]")));return s[s.length-1]}(t),o=l!==void 0?l.nextSibling:null;r.setAttribute(Mt,rc),r.setAttribute(lc,gl);var i=Z5();return i&&r.setAttribute("nonce",i),t.insertBefore(r,o),r},q5=function(){function e(n){this.element=dc(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,l=0,o=r.length;l<o;l++){var i=r[l];if(i.ownerNode===t)return i}throw Fr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,t){try{return this.sheet.insertRule(t,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var t=this.sheet.cssRules[n];return t&&t.cssText?t.cssText:""},e}(),b5=function(){function e(n){this.element=dc(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,t){if(n<=this.length&&n>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),e9=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,t){return n<=this.length&&(this.rules.splice(n,0,t),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),I1=X0,n9={isServer:!X0,useCSSOMInjection:!T5},pc=function(){function e(n,t,r){n===void 0&&(n=Ft),t===void 0&&(t={});var l=this;this.options=Se(Se({},n9),n),this.gs=t,this.names=new Map(r),this.server=!!n.isServer,!this.server&&X0&&I1&&(I1=!1,z1(this)),tu(this,function(){return function(o){for(var i=o.getTag(),u=i.length,s="",f=function(v){var m=function(c){return J0.get(c)}(v);if(m===void 0)return"continue";var y=o.names.get(m),S=i.getGroup(v);if(y===void 0||!y.size||S.length===0)return"continue";var p="".concat(Mt,".g").concat(v,'[id="').concat(m,'"]'),C="";y!==void 0&&y.forEach(function(c){c.length>0&&(C+="".concat(c,","))}),s+="".concat(S).concat(p,'{content:"').concat(C,'"}').concat(eu)},h=0;h<u;h++)f(h);return s}(l)})}return e.registerId=function(n){return l0(n)},e.prototype.rehydrate=function(){!this.server&&X0&&z1(this)},e.prototype.reconstructWithOptions=function(n,t){return t===void 0&&(t=!0),new e(Se(Se({},this.options),n),this.gs,t&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(t){var r=t.useCSSOMInjection,l=t.target;return t.isServer?new e9(l):r?new q5(l):new b5(l)}(this.options),new Q5(n)));var n},e.prototype.hasNameForId=function(n,t){return this.names.has(n)&&this.names.get(n).has(t)},e.prototype.registerName=function(n,t){if(l0(n),this.names.has(n))this.names.get(n).add(t);else{var r=new Set;r.add(t),this.names.set(n,r)}},e.prototype.insertRules=function(n,t,r){this.registerName(n,t),this.getTag().insertRules(l0(n),r)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(l0(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),t9=/&/g,r9=/^\s*\/\/.*$/gm;function hc(e,n){return e.map(function(t){return t.type==="rule"&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(r){return"".concat(n," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=hc(t.children,n)),t})}function l9(e){var n,t,r,l=Ft,o=l.options,i=o===void 0?Ft:o,u=l.plugins,s=u===void 0?yl:u,f=function(m,y,S){return S.startsWith(t)&&S.endsWith(t)&&S.replaceAll(t,"").length>0?".".concat(n):m},h=s.slice();h.push(function(m){m.type===pl&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(t9,t).replace(r,f))}),i.prefix&&h.push(z5),h.push(_5);var v=function(m,y,S,p){y===void 0&&(y=""),S===void 0&&(S=""),p===void 0&&(p="&"),n=p,t=y,r=new RegExp("\\".concat(t,"\\b"),"g");var C=m.replace(r9,""),c=E5(S||y?"".concat(S," ").concat(y," { ").concat(C," }"):C);i.namespace&&(c=hc(c,i.namespace));var a=[];return Y0(c,P5(h.concat(N5(function(d){return a.push(d)})))),a};return v.hash=s.length?s.reduce(function(m,y){return y.name||Fr(15),wt(m,y.name)},ic).toString():"",v}var o9=new pc,ni=l9(),mc=Nt.createContext({shouldForwardProp:void 0,styleSheet:o9,stylis:ni});mc.Consumer;Nt.createContext(void 0);function T1(){return U.useContext(mc)}var i9=function(){function e(n,t){var r=this;this.inject=function(l,o){o===void 0&&(o=ni);var i=r.name+o.hash;l.hasNameForId(r.id,i)||l.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=t,tu(this,function(){throw Fr(12,String(r.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=ni),this.name+n.hash},e}(),u9=function(e){return e>="A"&&e<="Z"};function O1(e){for(var n="",t=0;t<e.length;t++){var r=e[t];if(t===1&&r==="-"&&e[0]==="-")return e;u9(r)?n+="-"+r.toLowerCase():n+=r}return n.startsWith("ms-")?"-"+n:n}var vc=function(e){return e==null||e===!1||e===""},gc=function(e){var n,t,r=[];for(var l in e){var o=e[l];e.hasOwnProperty(l)&&!vc(o)&&(Array.isArray(o)&&o.isCss||At(o)?r.push("".concat(O1(l),":"),o,";"):Rr(o)?r.push.apply(r,G0(G0(["".concat(l," {")],gc(o),!1),["}"],!1)):r.push("".concat(O1(l),": ").concat((n=l,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||n in I5||n.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Jn(e,n,t,r){if(vc(e))return[];if(nu(e))return[".".concat(e.styledComponentId)];if(At(e)){if(!At(o=e)||o.prototype&&o.prototype.isReactComponent||!n)return[e];var l=e(n);return Jn(l,n,t,r)}var o;return e instanceof i9?t?(e.inject(t,r),[e.getName(r)]):[e]:Rr(e)?gc(e):Array.isArray(e)?Array.prototype.concat.apply(yl,e.map(function(i){return Jn(i,n,t,r)})):[e.toString()]}function s9(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(At(t)&&!nu(t))return!1}return!0}var a9=uc(gl),c9=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&s9(n),this.componentId=t,this.baseHash=wt(a9,t),this.baseStyle=r,pc.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))l=Kn(l,this.staticRulesId);else{var o=N1(Jn(this.rules,n,t,r)),i=bo(wt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var u=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,u)}l=Kn(l,i),this.staticRulesId=i}else{for(var s=wt(this.baseHash,r.hash),f="",h=0;h<this.rules.length;h++){var v=this.rules[h];if(typeof v=="string")f+=v;else if(v){var m=N1(Jn(v,n,t,r));s=wt(s,m+h),f+=m}}if(f){var y=bo(s>>>0);t.hasNameForId(this.componentId,y)||t.insertRules(this.componentId,y,r(f,".".concat(y),void 0,this.componentId)),l=Kn(l,y)}}return l},e}(),yc=Nt.createContext(void 0);yc.Consumer;var ql={};function f9(e,n,t){var r=nu(e),l=e,o=!Zl(e),i=n.attrs,u=i===void 0?yl:i,s=n.componentId,f=s===void 0?function(g,w){var x=typeof g!="string"?"sc":x1(g);ql[x]=(ql[x]||0)+1;var k="".concat(x,"-").concat(j5(gl+x+ql[x]));return w?"".concat(w,"-").concat(k):k}(n.displayName,n.parentComponentId):s,h=n.displayName,v=h===void 0?function(g){return Zl(g)?"styled.".concat(g):"Styled(".concat(D5(g),")")}(e):h,m=n.displayName&&n.componentId?"".concat(x1(n.displayName),"-").concat(n.componentId):n.componentId||f,y=r&&l.attrs?l.attrs.concat(u).filter(Boolean):u,S=n.shouldForwardProp;if(r&&l.shouldForwardProp){var p=l.shouldForwardProp;if(n.shouldForwardProp){var C=n.shouldForwardProp;S=function(g,w){return p(g,w)&&C(g,w)}}else S=p}var c=new c9(t,m,r?l.componentStyle:void 0);function a(g,w){return function(x,k,P){var $=x.attrs,O=x.componentStyle,ne=x.defaultProps,tn=x.foldedComponentIds,rn=x.styledComponentId,lt=x.target,Vt=Nt.useContext(yc),An=T1(),Ye=x.shouldForwardProp||An.shouldForwardProp,_=O5(k,Vt,ne)||Ft,z=function(Ae,Ee,ln){for(var Qt,Un=Se(Se({},Ee),{className:void 0,theme:ln}),wl=0;wl<Ae.length;wl+=1){var Ar=At(Qt=Ae[wl])?Qt(Un):Qt;for(var gn in Ar)Un[gn]=gn==="className"?Kn(Un[gn],Ar[gn]):gn==="style"?Se(Se({},Un[gn]),Ar[gn]):Ar[gn]}return Ee.className&&(Un.className=Kn(Un.className,Ee.className)),Un}($,k,_),T=z.as||lt,M={};for(var F in z)z[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&z.theme===_||(F==="forwardedAs"?M.as=z.forwardedAs:Ye&&!Ye(F,T)||(M[F]=z[F]));var Xe=function(Ae,Ee){var ln=T1(),Qt=Ae.generateAndInjectStyles(Ee,ln.styleSheet,ln.stylis);return Qt}(O,z),oe=Kn(tn,rn);return Xe&&(oe+=" "+Xe),z.className&&(oe+=" "+z.className),M[Zl(T)&&!oc.has(T)?"class":"className"]=oe,M.ref=P,U.createElement(T,M)}(d,g,w)}a.displayName=v;var d=Nt.forwardRef(a);return d.attrs=y,d.componentStyle=c,d.displayName=v,d.shouldForwardProp=S,d.foldedComponentIds=r?Kn(l.foldedComponentIds,l.styledComponentId):"",d.styledComponentId=m,d.target=r?l.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(w){for(var x=[],k=1;k<arguments.length;k++)x[k-1]=arguments[k];for(var P=0,$=x;P<$.length;P++)ei(w,$[P],!0);return w}({},l.defaultProps,g):g}}),tu(d,function(){return".".concat(d.styledComponentId)}),o&&fc(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function R1(e,n){for(var t=[e[0]],r=0,l=n.length;r<l;r+=1)t.push(n[r],e[r+1]);return t}var L1=function(e){return Object.assign(e,{isCss:!0})};function d9(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];if(At(e)||Rr(e))return L1(Jn(R1(yl,G0([e],n,!0))));var r=e;return n.length===0&&r.length===1&&typeof r[0]=="string"?Jn(r):L1(Jn(R1(r,n)))}function ti(e,n,t){if(t===void 0&&(t=Ft),!n)throw Fr(1,n);var r=function(l){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(n,t,d9.apply(void 0,G0([l],o,!1)))};return r.attrs=function(l){return ti(e,n,Se(Se({},t),{attrs:Array.prototype.concat(t.attrs,l).filter(Boolean)}))},r.withConfig=function(l){return ti(e,n,Se(Se({},t),l))},r}var Sc=function(e){return ti(f9,e)},Fe=Sc;oc.forEach(function(e){Fe[e]=Sc(e)});const wc=U.createContext({corpus:[],buf:new ArrayBuffer(0),selectedLink:"",setSelectedLink:()=>{}});function Sl(e){const n=U.useContext(wc),t=e?e(n):n;return U.useMemo(()=>t,[t])}const p9=`R, G, B
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
9.87052509e-01, 9.91437853e-01, 7.49504188e-01`,h9=`R, G, B
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
0.99324789,  0.90615657,  0.1439362`,m9=`R, G, B
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
9.40015097e-01, 9.75158357e-01, 1.31325517e-01`,v9=`R,G,B
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
`).slice(1).map(n=>n.trim()).filter(n=>!!n).map(n=>{const t=n.split(/,\s*/),[r,l,o]=t.map(u=>parseFloat(u));return[r,l,o]}),g9=new Map([["magma",o0(p9)],["viridis",o0(h9)],["plasma",o0(m9)],["turbo",o0(v9)]]);class y9{constructor(n,t){ru(this,"mapping");const r=g9.get(n);if(!r)throw new Error(`Unrecognized mapping "${n}"`);this.mapping=[...r],t&&this.mapping.reverse()}color(n,t,r){const l=S9(j1(n,t,r,0,255),0,255),o=Math.floor(l),i=Math.ceil(l);if(o===i)return $1(this.mapping[o]);const u=this.mapping[o],s=this.mapping[i];return $1(w9(u,s,j1(l,o,i,0,1)))}}function $1(e){const[n,t,r]=e.map(l=>l*255);return`rgb(${n}, ${t}, ${r})`}function S9(e,n,t){return Math.max(n,Math.min(t,e))}function j1(e,n,t,r,l){return r+(e-n)*(l-r)/(t-n)}function w9(e,n,t){return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}const k9="modulepreload",x9=function(e){return"/scp-wiki-semantic-similarity-search/"+e},D1={},M1=function(n,t,r){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),i=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));l=Promise.all(t.map(u=>{if(u=x9(u),u in D1)return;D1[u]=!0;const s=u.endsWith(".css"),f=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=s?"stylesheet":k9,s||(h.as="script",h.crossOrigin=""),h.href=u,i&&h.setAttribute("nonce",i),document.head.appendChild(h),s)return new Promise((v,m)=>{h.addEventListener("load",v),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}return l.then(()=>n()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},E9="/scp-wiki-semantic-similarity-search/assets/sql-wasm-Bku9E_kW.wasm",C9=()=>{try{if(typeof WebAssembly=="object"&&typeof WebAssembly.instantiate=="function"){const e=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(e instanceof WebAssembly.Module)return new WebAssembly.Instance(e)instanceof WebAssembly.Instance}}catch{}return!1},_9=async()=>C9()?(await M1(()=>import("./sql-wasm-D_rsaqy9.js"),[]).then(n=>n.default))({locateFile:n=>{if(n!=="sql-wasm.wasm")throw new Error(`Unexpected path "${n}" in initSqlJs->locateFile`);return E9}}):(await M1(()=>import("./sql-asm-CB-bv5ax.js"),[]).then(n=>n.default))();async function P9(e){const n=await _9(),t=await fetch(e).then(l=>l.arrayBuffer()).then(l=>new Uint8Array(l));return new n.Database(t)}const N9=c5,kc=Fe.li`
  margin: 0;
  line-height: 40px;
  vertical-align: middle;
`,z9=Fe.button`
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
`,I9=({index:e,style:n,data:t})=>{const r=Sl(i=>i.setSelectedLink),l=t[e],o=U.useCallback(()=>{r(l)},[l,r]);return I.jsx(kc,{style:n,children:I.jsx(z9,{onClick:o,children:l})})},T9=Fe(N9)`
  list-style-type: none;
  padding: 0;
  margin: 0;

  ${kc}:not(:first-child) {
    //border-top: 1px solid gray;
    box-shadow: 0 -1px 0 0 gray;
  }
`,O9=Fe.aside`
  width: 300px;

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: 50vh;
    overflow-y: hidden;
    border-bottom: 1px solid #ccc;
  }
`,R9=Fe.div`
  display: flex;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`,L9=Fe.input`
  font-size: 16px;
  padding: 5px 10px;
  width: 100%;
`,$9=Fe.div`
  padding-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  align-items: stretch;
`,j9=(e,n)=>n[e],D9=({searchFilter:e})=>{const{corpus:n}=Sl(),t=U.useMemo(()=>{const r=e.trim();return[...r.length>=3?n.filter(o=>o.includes(r)):n].sort()},[e,n]);return I.jsx(T9,{innerElementType:"ul",height:720,width:"100%",itemSize:40,itemCount:t.length,itemData:t,itemKey:j9,children:I9})},M9=()=>{const[e,n]=U.useState("");return I.jsxs(O9,{children:[I.jsxs($9,{children:[I.jsx(L9,{value:e,onChange:U.useCallback(t=>n(t.currentTarget.value),[])}),I.jsx("button",{onClick:U.useCallback(()=>{n("")},[]),children:"x"})]}),I.jsx(D9,{searchFilter:e})]})},ri="/scp-wiki-semantic-similarity-search";function F9(){const[e,n]=U.useState(null),[t,r]=U.useState("");U.useEffect(()=>{const o=fetch(`${ri}/corpus.txt`).then(u=>u.text()).then(u=>u.split(`
`).map(s=>s.trim()).filter(s=>!!s)),i=fetch(`${ri}/matches.bin`).then(u=>u.arrayBuffer());Promise.all([o,i]).then(([u,s])=>{n({corpus:u,buf:s}),r(u[0])})},[]);const l=U.useMemo(()=>({...e??{},selectedLink:t,setSelectedLink:r}),[e,t,r]);return e?I.jsx(wc.Provider,{value:l,children:I.jsxs(R9,{children:[I.jsx(M9,{}),I.jsx(G9,{})]})}):I.jsx("div",{className:"app",children:"loading"})}const A9=(e,n,t)=>{const r=[],l=new DataView(e),o=6,i=50*o,u=t*i;for(let s=0;s<50;s++){const f=l.getUint16(u+s*o,!0);if(f<0||f>n.length)throw console.error({corpusIndexOfThisItem:f,index:t,buf:e,corpus:n}),new Error("corpusIndexOfThisItem out of range");r.push({link:n[f],similarity:l.getFloat32(u+s*o+2,!0)})}return r},xc=new y9("viridis"),Ec=Fe.a`
  color: inherit;
  text-decoration: none;
`,Cc=Fe.button`
  border: none;
  background: none;
  padding: 0;
  text-decoration: none;

  &:hover {
    color: #535bf2;
  }
`,bl=Object.create(null),U9=e=>{const n=bl[e]??(bl[e]=0);return bl[e]++,t=>{console.log(`[${e} ${n}] ${t}`)}},W9=()=>{const[e,n]=U.useState();return U.useEffect(()=>{const t=U9("usePageHubsDb");let r=!1,l;return(async()=>{const i=`${ri}/hubs.sqlite`;if(t("begin init"),l=await P9(i),r){t("initSqliteDb finish but is unmounted -> close"),l.close();return}t("initSqliteDb finish, setDb()"),n(()=>l)})(),()=>{t("initSqliteDb unmount hook, closing"),r=!0,n(()=>{}),l==null||l.close()}},[]),{db:e}},B9=({hubInfo:e,items:n})=>{const[t,r]=U.useState(!1),l=Sl(u=>u.setSelectedLink),o=Object.entries(e.hubToPages),i=o.length!==o.filter(([,u])=>u.length>1).length;return I.jsxs("div",{children:[I.jsx("table",{children:I.jsx("tbody",{children:o.sort(([,u],[,s])=>s.length-u.length).filter(([,u])=>t?u:u.length>1).flatMap(([u,s])=>{const f=s.map(h=>n.find(m=>m.link===h)).filter(h=>!!h).sort((h,v)=>v.similarity-h.similarity);return[I.jsx("tr",{children:I.jsx("th",{colSpan:4,style:{textAlign:"left",fontWeight:"normal",borderBottom:"1px solid grey"},children:u})},`hub:${u}`),...f.map(({link:h,similarity:v})=>I.jsxs("tr",{children:[I.jsx("td",{style:{padding:"0 5px"},children:I.jsx(Cc,{onClick:()=>{l(h)},children:"Search"})}),I.jsx("td",{style:{padding:"0 5px"},children:I.jsx(Ec,{href:`https://scp-wiki.wikidot.com/${encodeURI(h)}`,target:"_blank",rel:"noopener noreferrer",children:"Wiki 🡥"})}),I.jsx("td",{style:{backgroundColor:xc.color(v,0,1),color:"#000"},children:v.toFixed(3)}),I.jsx("td",{style:{paddingLeft:"10px"},children:h})]},`hub:${u}-page:${h}`)),I.jsx("tr",{style:{height:"10px"}},`padding:${u}`)]})})}),i&&I.jsxs("label",{style:{paddingTop:"1rem",display:"block"},children:[I.jsx("input",{type:"checkbox",checked:t,onChange:u=>{const s=u.currentTarget.checked;r(()=>s)}})," ","Show more"]})]})},H9=Fe.div`
  display: flex;

  @media only screen and (min-width: 577px) {
    align-items: flex-start;
    justify-content: flex-start;

    & > div {
      padding: 0 10px;
    }
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
  }
`,V9=e=>Array(e).fill("?").join(", "),Q9=Fe.div`
  padding: 0 50px;
  width: 100%;

  @media only screen and (max-width: 576px) {
    padding: 0 5px;
  }

  & td {
    white-space: nowrap;
  }
`;function K9({selectedLink:e,items:n}){const{db:t}=W9(),[r,l]=U.useState();return U.useEffect(()=>{const i=(()=>{if(!t||!t.db||!e){console.log("no db, db closed, or no selected link");return}const[u]=t.exec(`
          SELECT page_link, hub_link
          FROM hubs_pages
          WHERE
            page_link IN (${V9(n.length)})
          `,[...n.map(v=>v.link)]);if(!u){console.log("no hub info found for pages in items");return}const s=u.values,f=Object.create(null),h=Object.create(null);for(const[v,m]of s)(f[v]||(f[v]=[])).push(m),(h[m]||(h[m]=[])).push(v);return{for:e,pageToHubs:f,hubToPages:h}})();return l(()=>i),()=>{l(()=>{})}},[t,e,n]),!r||r.for!==e?(console.log("hubinfo not for this",{selectedLink:e,hubInfo:JSON.parse(JSON.stringify(r??"undefined")),items:JSON.parse(JSON.stringify(n))}),null):(console.log("hubinfo for this",{selectedLink:e,hubInfo:JSON.parse(JSON.stringify(r??"undefined")),items:JSON.parse(JSON.stringify(n))}),I.jsxs("div",{children:[I.jsx("h2",{children:"Top 50 similar pages by hub"}),I.jsx("p",{}),I.jsx(B9,{hubInfo:r,items:n})]}))}function G9(){const{corpus:e,buf:n,selectedLink:t,setSelectedLink:r}=Sl(),l=U.useMemo(()=>{const o=e.indexOf(t);return A9(n,e,o)},[n,e,t]);return I.jsxs(Q9,{children:[I.jsx("h1",{children:t}),I.jsxs(H9,{children:[I.jsxs("div",{children:[I.jsx("h2",{children:"Top 50 most similar pages"}),I.jsx("table",{children:I.jsx("tbody",{children:l.map(({link:o,similarity:i})=>I.jsxs("tr",{children:[I.jsx("td",{style:{padding:"0 5px"},children:I.jsx(Cc,{onClick:()=>{r(o)},children:"Search"})}),I.jsx("td",{style:{padding:"0 5px"},children:I.jsx(Ec,{href:`https://scp-wiki.wikidot.com/${encodeURI(o)}`,target:"_blank",rel:"noopener noreferrer",children:"Wiki 🡥"})}),I.jsx("td",{style:{backgroundColor:xc.color(i,0,1),color:"#000"},children:i.toFixed(3)}),I.jsx("td",{style:{paddingLeft:"10px"},children:o})]},o))})})]}),I.jsx(K9,{selectedLink:t,items:l})]})]})}eo.createRoot(document.getElementById("root")).render(I.jsx(Nt.StrictMode,{children:I.jsx(F9,{})}));const X9=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{M1 as _,X9 as a};
