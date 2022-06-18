var qd=Object.defineProperty,Hd=Object.defineProperties;var Bd=Object.getOwnPropertyDescriptors;var Ao=Object.getOwnPropertySymbols;var Vd=Object.prototype.hasOwnProperty,Wd=Object.prototype.propertyIsEnumerable;var So=(s,e,t)=>e in s?qd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Pe=(s,e)=>{for(var t in e||(e={}))Vd.call(e,t)&&So(s,t,e[t]);if(Ao)for(var t of Ao(e))Wd.call(e,t)&&So(s,t,e[t]);return s},yr=(s,e)=>Hd(s,Bd(e));var Yd=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var Zh=Yd((zu,Li)=>{const Gd=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};Gd();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ri=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ni=Symbol(),Po=new Map;class Jo{constructor(e,t){if(this._$cssResult$=!0,t!==Ni)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Po.get(this.cssText);return Ri&&e===void 0&&(Po.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const ji=s=>new Jo(typeof s=="string"?s:s+"",Ni),N=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[i+1],s[0]);return new Jo(t,Ni)},Xd=(s,e)=>{Ri?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),o=window.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,s.appendChild(r)})},Eo=Ri?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ji(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mi;const zo=window.trustedTypes,Zd=zo?zo.emptyScript:"",To=window.reactiveElementPolyfillSupport,Pi={toAttribute(s,e){switch(e){case Boolean:s=s?Zd:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Qo=(s,e)=>e!==s&&(e==e||s==s),gi={attribute:!0,type:String,converter:Pi,reflect:!1,hasChanged:Qo};class St extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const o=this._$Eh(r,t);o!==void 0&&(this._$Eu.set(o,r),e.push(o))}),e}static createProperty(e,t=gi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||gi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of r)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Eo(o))}else e!==void 0&&t.push(Eo(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Xd(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=gi){var o,i;const l=this.constructor._$Eh(e,r);if(l!==void 0&&r.reflect===!0){const d=((i=(o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&i!==void 0?i:Pi.toAttribute)(t,r.type);this._$Ei=e,d==null?this.removeAttribute(l):this.setAttribute(l,d),this._$Ei=null}}_$AK(e,t){var r,o,i;const l=this.constructor,d=l._$Eu.get(e);if(d!==void 0&&this._$Ei!==d){const x=l.getPropertyOptions(d),y=x.converter,P=(i=(o=(r=y)===null||r===void 0?void 0:r.fromAttribute)!==null&&o!==void 0?o:typeof y=="function"?y:null)!==null&&i!==void 0?i:Pi.fromAttribute;this._$Ei=d,this[d]=P(t,x.type),this._$Ei=null}}requestUpdate(e,t,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Qo)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,i)=>this[i]=o),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}St.finalized=!0,St.elementProperties=new Map,St.elementStyles=[],St.shadowRootOptions={mode:"open"},To==null||To({ReactiveElement:St}),((mi=globalThis.reactiveElementVersions)!==null&&mi!==void 0?mi:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wi;const Et=globalThis.trustedTypes,Oo=Et?Et.createPolicy("lit-html",{createHTML:s=>s}):void 0,We=`lit$${(Math.random()+"").slice(9)}$`,Mi="?"+We,Jd=`<${Mi}>`,zt=document,Xt=(s="")=>zt.createComment(s),Zt=s=>s===null||typeof s!="object"&&typeof s!="function",Ko=Array.isArray,es=s=>{var e;return Ko(s)||typeof((e=s)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lo=/-->/g,Ro=/>/g,ct=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,No=/'/g,jo=/"/g,ts=/^(?:script|style|textarea|title)$/i,Qd=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),T=Qd(1),Ue=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Mo=new WeakMap,Kd=(s,e,t)=>{var r,o;const i=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let l=i._$litPart$;if(l===void 0){const d=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=l=new jt(e.insertBefore(Xt(),d),d,void 0,t!=null?t:{})}return l._$AI(s),l},Pt=zt.createTreeWalker(zt,129,null,!1),rs=(s,e)=>{const t=s.length-1,r=[];let o,i=e===2?"<svg>":"",l=Bt;for(let x=0;x<t;x++){const y=s[x];let P,C,S=-1,R=0;for(;R<y.length&&(l.lastIndex=R,C=l.exec(y),C!==null);)R=l.lastIndex,l===Bt?C[1]==="!--"?l=Lo:C[1]!==void 0?l=Ro:C[2]!==void 0?(ts.test(C[2])&&(o=RegExp("</"+C[2],"g")),l=ct):C[3]!==void 0&&(l=ct):l===ct?C[0]===">"?(l=o!=null?o:Bt,S=-1):C[1]===void 0?S=-2:(S=l.lastIndex-C[2].length,P=C[1],l=C[3]===void 0?ct:C[3]==='"'?jo:No):l===jo||l===No?l=ct:l===Lo||l===Ro?l=Bt:(l=ct,o=void 0);const L=l===ct&&s[x+1].startsWith("/>")?" ":"";i+=l===Bt?y+Jd:S>=0?(r.push(P),y.slice(0,S)+"$lit$"+y.slice(S)+We+L):y+We+(S===-2?(r.push(void 0),x):L)}const d=i+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Oo!==void 0?Oo.createHTML(d):d,r]};class Jt{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,l=0;const d=e.length-1,x=this.parts,[y,P]=rs(e,t);if(this.el=Jt.createElement(y,r),Pt.currentNode=this.el.content,t===2){const C=this.el.content,S=C.firstChild;S.remove(),C.append(...S.childNodes)}for(;(o=Pt.nextNode())!==null&&x.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const C=[];for(const S of o.getAttributeNames())if(S.endsWith("$lit$")||S.startsWith(We)){const R=P[l++];if(C.push(S),R!==void 0){const L=o.getAttribute(R.toLowerCase()+"$lit$").split(We),w=/([.?@])?(.*)/.exec(R);x.push({type:1,index:i,name:w[2],strings:L,ctor:w[1]==="."?ns:w[1]==="?"?os:w[1]==="@"?ss:ir})}else x.push({type:6,index:i})}for(const S of C)o.removeAttribute(S)}if(ts.test(o.tagName)){const C=o.textContent.split(We),S=C.length-1;if(S>0){o.textContent=Et?Et.emptyScript:"";for(let R=0;R<S;R++)o.append(C[R],Xt()),Pt.nextNode(),x.push({type:2,index:++i});o.append(C[S],Xt())}}}else if(o.nodeType===8)if(o.data===Mi)x.push({type:2,index:i});else{let C=-1;for(;(C=o.data.indexOf(We,C+1))!==-1;)x.push({type:7,index:i}),C+=We.length-1}i++}}static createElement(e,t){const r=zt.createElement("template");return r.innerHTML=e,r}}function ut(s,e,t=s,r){var o,i,l,d;if(e===Ue)return e;let x=r!==void 0?(o=t._$Cl)===null||o===void 0?void 0:o[r]:t._$Cu;const y=Zt(e)?void 0:e._$litDirective$;return(x==null?void 0:x.constructor)!==y&&((i=x==null?void 0:x._$AO)===null||i===void 0||i.call(x,!1),y===void 0?x=void 0:(x=new y(s),x._$AT(s,t,r)),r!==void 0?((l=(d=t)._$Cl)!==null&&l!==void 0?l:d._$Cl=[])[r]=x:t._$Cu=x),x!==void 0&&(e=ut(s,x._$AS(s,e.values),x,r)),e}class is{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:o}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:zt).importNode(r,!0);Pt.currentNode=i;let l=Pt.nextNode(),d=0,x=0,y=o[0];for(;y!==void 0;){if(d===y.index){let P;y.type===2?P=new jt(l,l.nextSibling,this,e):y.type===1?P=new y.ctor(l,y.name,y.strings,this,e):y.type===6&&(P=new as(l,this,e)),this.v.push(P),y=o[++x]}d!==(y==null?void 0:y.index)&&(l=Pt.nextNode(),d++)}return i}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class jt{constructor(e,t,r,o){var i;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cg=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ut(this,e,t),Zt(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==Ue&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):es(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==K&&Zt(this._$AH)?this._$AA.nextSibling.data=e:this.k(zt.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Jt.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.m(r);else{const l=new is(i,this),d=l.p(this.options);l.m(r),this.k(d),this._$AH=l}}_$AC(e){let t=Mo.get(e.strings);return t===void 0&&Mo.set(e.strings,t=new Jt(e)),t}S(e){Ko(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new jt(this.M(Xt()),this.M(Xt()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ir{constructor(e,t,r,o,i){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const i=this.strings;let l=!1;if(i===void 0)e=ut(this,e,t,0),l=!Zt(e)||e!==this._$AH&&e!==Ue,l&&(this._$AH=e);else{const d=e;let x,y;for(e=i[0],x=0;x<i.length-1;x++)y=ut(this,d[r+x],t,x),y===Ue&&(y=this._$AH[x]),l||(l=!Zt(y)||y!==this._$AH[x]),y===K?e=K:e!==K&&(e+=(y!=null?y:"")+i[x+1]),this._$AH[x]=y}l&&!o&&this.C(e)}C(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ns extends ir{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===K?void 0:e}}const eh=Et?Et.emptyScript:"";class os extends ir{constructor(){super(...arguments),this.type=4}C(e){e&&e!==K?this.element.setAttribute(this.name,eh):this.element.removeAttribute(this.name)}}class ss extends ir{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=ut(this,e,t,0))!==null&&r!==void 0?r:K)===Ue)return;const o=this._$AH,i=e===K&&o!==K||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,l=e!==K&&(o===K||i);i&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class as{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ut(this,e)}}const th={L:"$lit$",P:We,V:Mi,I:1,N:rs,R:is,j:es,D:ut,H:jt,F:ir,O:os,W:ss,B:ns,Z:as},Do=window.litHtmlPolyfillSupport;Do==null||Do(Jt,jt),((wi=globalThis.litHtmlVersions)!==null&&wi!==void 0?wi:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yi,xi;class q extends St{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Kd(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Ue}}q.finalized=!0,q._$litElement$=!0,(yi=globalThis.litElementHydrateSupport)===null||yi===void 0||yi.call(globalThis,{LitElement:q});const Fo=globalThis.litElementPolyfillSupport;Fo==null||Fo({LitElement:q});((xi=globalThis.litElementVersions)!==null&&xi!==void 0?xi:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=s=>e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(s,e):((t,r)=>{const{kind:o,elements:i}=r;return{kind:o,elements:i,finisher(l){window.customElements.define(t,l)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rh=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?yr(Pe({},e),{finisher(t){t.createProperty(e.key,s)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function m(s){return(e,t)=>t!==void 0?((r,o,i)=>{o.constructor.createProperty(i,r)})(s,e,t):rh(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xe(s){return m(yr(Pe({},s),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=({finisher:s,descriptor:e})=>(t,r)=>{var o;if(r===void 0){const i=(o=t.originalKey)!==null&&o!==void 0?o:t.key,l=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(t.key)}:yr(Pe({},t),{key:i});return s!=null&&(l.finisher=function(d){s(d,i)}),l}{const i=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),s==null||s(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(s,e){return Di({descriptor:t=>{const r={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){const o=typeof t=="symbol"?Symbol():"__"+t;r.get=function(){var i,l;return this[o]===void 0&&(this[o]=(l=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s))!==null&&l!==void 0?l:null),this[o]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _i;const ih=((_i=window.HTMLSlotElement)===null||_i===void 0?void 0:_i.prototype.assignedElements)!=null?(s,e)=>s.assignedElements(e):(s,e)=>s.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function jr(s){const{slot:e,selector:t}=s!=null?s:{};return Di({descriptor:r=>({get(){var o;const i="slot"+(e?`[name=${e}]`:":not([name])"),l=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i),d=l!=null?ih(l,s):[];return t?d.filter(x=>x.matches(t)):d},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _e(s,e,t){let r,o=s;return typeof s=="object"?(o=s.slot,r=s):r={flatten:e},t?jr({slot:o,flatten:e,selector:t}):Di({descriptor:i=>({get(){var l,d;const x="slot"+(o?`[name=${o}]`:":not([name])"),y=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(x);return(d=y==null?void 0:y.assignedNodes(r))!==null&&d!==void 0?d:[]},enumerable:!0,configurable:!0})})}const nh=N`
  :host {
    /* --sc-rfs: 16px; */

    /* polices*/
    --sc-font-family-base: "neue-haas-unica", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    --sc-font-weight-base: 400;
    --sc-font-style-base: inherit;

    --sc-headings-font-family: var(--sc-font-family-base);
    --sc-headings-font-style: var(--sc-font-family-base);
    --sc-headings-line-height: 1.1;
    --sc-headings-font-weight: 700;
    --sc-headings-text-transform: none;

    /* Button*/
    --sc-btn-font-weight: var(--sc-font-weight-base);
    --sc-btn-font-family: var(--sc-font-family-base);
    --sc-btn-font-style: var(--sc-font-weight-base);

    /* ROUNDED*/
    --sc-btn-rounded: 0.38em;
    --sc-input-rounded: 0.38em;

    --sc-rounded-sm: calc(var(--sc-rounded) * 0.5);
    --sc-rounded: 0.35rem;
    --sc-rounded-md: calc(var(--sc-rounded) * 1.8);
    --sc-rounded-lg: calc(var(--sc-rounded) * 3.5);
    --sc-rounded-xl: calc(var(--sc-rounded) * 7);

    /* Placeholder */
    --sc-placeholder-bg: rgba(17, 24, 39, 0.05);

    /* Images*/
    --sc-shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --sc-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --sc-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --sc-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --sc-shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    /* formulaires*/
    --sc-form-border-width: 0.1rem;

    /*Couleurs -- textes sur images*/
    --sc-contrast-content: #fff;
    --sc-contrast: #0f172a;
  }
`,oh=N`
  :host {
    /*Boutons*/
    --sc-primary: var(--sc-base-800);
    --sc-info: #2563eb;
    --sc-danger: #f43f5e;
    --sc-warning: #f97316;
    --sc-success: #14b8a6;

    --sc-primary-content: var(--sc-base);
    --sc-info-content: var(--sc-base);
    --sc-danger-content: var(--sc-base);
    --sc-warning-content: var(--sc-base);
    --sc-success-content: var(--sc-base);

    /*Bases*/
    --sc-base: #fff;
    --sc-base-100: #f1f5f9;
    --sc-base-200: #e2e8f0;
    --sc-base-300: #cbd5e1;
    --sc-base-400: #94a3b8;
    --sc-base-500: #64748b;
    --sc-base-600: #475569;
    --sc-base-700: #334155;
    --sc-base-800: #1e293b;
    --sc-base-900: #0f172a;
    --sc-base-content: var(--sc-base-700);

    /*formulaires*/
    --sc-input-border-color: var(--sc-base-100);
    --sc-input-bg: var(--sc-base-100);
    --sc-input-color: var(--sc-base-content);
  }
`,Uo=N`
  --sc-primary: var(--sc-dark-primary, var(--sc-base-700));
  --sc-info: var(--sc-dark-info, #3abff8);
  --sc-danger: var(--sc-dark-danger, #f87272);
  --sc-warning: var(--sc-dark-warning, #fbbd23);
  --sc-success: var(--sc-dark-success, #36d399);

  --sc-primary-content: var(--sc-dark-primary-content, #002b3d);
  --sc-info-content: var(--sc-dark-info-content, #002b3d);
  --sc-danger-content: var(--sc-dark-danger-content, #382800);
  --sc-warning-content: var(--sc-dark-warning-content, #382800);
  --sc-success-content: var(--sc-dark-success-content, #003320);

  --sc-base: var(--sc-dark-base, #1f2937);
  --sc-base-100: var(--sc-dark-base-100, #262f3d);
  --sc-base-200: var(--sc-dark-base-200, #2c3543);
  --sc-base-300: var(--sc-dark-base-300, #38414e);
  --sc-base-400: var(--sc-dark-base-400, #515964);
  --sc-base-500: var(--sc-dark-base-500, #828891);
  --sc-base-600: var(--sc-dark-base-600, #b4b8be);
  --sc-base-700: var(--sc-dark-base-700, #cdd0d5);
  --sc-base-800: var(--sc-dark-base-800, #d9dce0);
  --sc-base-900: var(--sc-dark-base-900, #e5e7eb);
  --sc-base-content: var(--sc-dark-base-content, #e5e7eb);

  --sc-input-border-color: var(--sc-dark-input-border-color, var(--sc-base-100));
  --sc-input-bg: var(--sc-dark-input-bg, var(--sc-base-100));
  --sc-input-color: var(--sc-dark-input-color, var(--sc-base-content));
`,sh=N`
  :host([theme="dark"]) {
    ${Uo}
  }

  @media (prefers-color-scheme: dark) {
    :host([theme="auto"]) {
      ${Uo}
    }
  }
`;var ah=(()=>`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-0{top:0px}.left-0{left:0px}.right-1{right:.25rem}.bottom-1{bottom:.25rem}.bottom-4{bottom:1rem}.right-4{right:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-0{z-index:0}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-auto{margin-top:auto;margin-bottom:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.mb-3{margin-bottom:.75rem}.mb-1{margin-bottom:.25rem}.mt-8{margin-top:2rem}.mb-2{margin-bottom:.5rem}.mt-4{margin-top:1rem}.mt-2{margin-top:.5rem}.mb-4{margin-bottom:1rem}.mt-5{margin-top:1.25rem}.mt-1{margin-top:.25rem}.mr-3{margin-right:.75rem}.mr-2{margin-right:.5rem}.mr-4{margin-right:1rem}.mt-3{margin-top:.75rem}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.ml-auto{margin-left:auto}.mb-\\[2em\\]{margin-bottom:2em}.mb-20{margin-bottom:5rem}.mr-\\[\\.25em\\]{margin-right:.25em}.mt-12{margin-top:3rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-1\\/2{height:50%}.h-20{height:5rem}.h-96{height:24rem}.h-5{height:1.25rem}.w-full{width:100%}.w-20{width:5rem}.w-5{width:1.25rem}.max-w-lg{max-width:32rem}.max-w-xs{max-width:20rem}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-\\[7rem\\,auto\\]{grid-template-columns:7rem auto}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[minmax\\(0\\,2fr\\)_minmax\\(0\\,1\\.5fr\\)\\]{grid-template-columns:minmax(0,2fr) minmax(0,1.5fr)}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:1rem}.gap-2{gap:.5rem}.gap-8{gap:2rem}.gap-\\[1\\.5em\\]{gap:1.5em}.gap-6{gap:1.5rem}.gap-\\[\\.25em\\]{gap:.25em}.gap-\\[\\.75em\\]{gap:.75em}.gap-3{gap:.75rem}.gap-10{gap:2.5rem}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-lg{border-radius:var(--sc-rounded-lg)}.rounded-md{border-radius:var(--sc-rounded-md)}.rounded{border-radius:var(--sc-rounded)}.border-0{border-width:0px}.border{border-width:1px}.border-t-2{border-top-width:2px}.border-b-\\[1px\\]{border-bottom-width:1px}.border-solid{border-style:solid}.border-dotted{border-style:dotted}.border-t-neutral-200{border-top-color:var(--sc-base-200)}.border-b-neutral-300{border-bottom-color:var(--sc-base-300)}.bg-neutral-200{background-color:var(--sc-base-200)}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-\\[rgba\\(0\\,0\\,10\\,\\.2\\)\\]{--tw-gradient-from: rgba(0,0,10,.2);--tw-gradient-to: rgb(0 0 10 / 0);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.p-4{padding:1rem}.p-3{padding:.75rem}.p-7{padding:1.75rem}.p-5{padding:1.25rem}.p-8{padding:2rem}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pt-\\[\\.06em\\]{padding-top:.06em}.pt-10{padding-top:2.5rem}.text-center{text-align:center}.font-headings{font-family:var(--sc-font-family-headings)}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-xs{font-size:.75rem;line-height:1rem}.text-5xl{font-size:3rem;line-height:1}.font-black{font-weight:900}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.leading-none{line-height:1}.leading-tight{line-height:1.25}.leading-\\[\\.8em\\]{line-height:.8em}.text-contrast-content{color:var(--sc-contrast-content)}.text-neutral-400{color:var(--sc-base-400)}.text-info{color:var(--sc-info)}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.no-underline{-webkit-text-decoration-line:none;text-decoration-line:none}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.drop-shadow-lg{--tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / .04)) drop-shadow(0 4px 3px rgb(0 0 0 / .1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.group:hover .group-hover\\:underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}@media (min-width: 640px){.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width: 768px){.md\\:block{display:block}.md\\:hidden{display:none}.md\\:grid-cols-\\[minmax\\(0\\,2fr\\)\\,minmax\\(0\\,5fr\\)\\]{grid-template-columns:minmax(0,2fr) minmax(0,5fr)}.md\\:grid-cols-\\[repeat\\(auto-fit\\,minmax\\(25rem\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fit,minmax(25rem,1fr))}.md\\:p-4{padding:1rem}.md\\:shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}}@media (min-width: 1024px){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width: 1280px){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.xl\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.xl\\:text-lg{font-size:1.125rem;line-height:1.75rem}.xl\\:text-2xl{font-size:1.5rem;line-height:2rem}}
`)(),ls=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},Ei;const lh=N`
  ${ji(ah)}
`;let Cr=Ei=class extends q{constructor(){super(...arguments),this.theme="light"}connectedCallback(){super.connectedCallback(),window.addEventListener("message",e=>this.receiveMessage(e),!1),this.postCSSVars()}postCSSVars(){const e=document.styleSheets,t=e.length;let r=[];for(let o=0;o<t;o++){let i=e[o];i.href&&(i.href.includes("googleapis")||i.href.includes("typekit.net"))&&r.push(i.href)}document.querySelectorAll("iframe").forEach(o=>{var i;return(i=o.contentWindow)===null||i===void 0?void 0:i.postMessage({type:"SonicTheme",variables:this.getCssVariables(),fonts:r},"*")})}receiveMessage(e){let t=e.data;!t.type||t.type!="GetSonicTheme"||this.postCSSVars()}getCssVariables(){let e=[],t=[...Ei.styles.map(i=>i.styleSheet),...Array.from(document.styleSheets)];for(let i of t)try{let l=i==null?void 0:i.cssRules;for(let d of l)if(!!d.style)for(let x of d.style)e.includes(x)||x.indexOf("--sc")!==0||e.push(x)}catch{}let r=window.getComputedStyle(this),o={};return e.forEach(i=>o[i]=r.getPropertyValue(i)),o}render(){return T`<slot></slot>`}};Cr.styles=[oh,sh,nh,N`
      :host([background]) {
        display: block !important;
        background: var(--sc-base) !important;
      }

      :host([color]) {
        color: var(--sc-base-content);
      }

      :host([font]) {
        font-family: var(--sc-font-family-base);
        font-weight: var(--sc-font-weight-base);
        font-style: var(--sc-font-style-base);
      }
    `];ls([m({type:String,reflect:!0})],Cr.prototype,"theme",void 0);Cr=Ei=ls([B("sonic-theme")],Cr);var Mr=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let pt=class extends q{constructor(){super(...arguments),this.type="default",this.variant="default",this.size="md"}render(){return T`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};pt.styles=[N`
      :host {
        --sc-badge-gap: 0.3em;
        --sc-badge-py: 0.15em;
        --sc-badge-px: 0.66em;
        --sc-badge-fs: 1rem;
        --sc-badge-fw: 1rem;

        --sc-badge-color: var(--sc-base-content, #1f2937);
        --sc-badge-bg: var(--sc-base-200, #e5e7eb);

        --sc-badge-border-with: var(--sc-form-border-width, 0.1rem);
        --sc-badge-border-color: transparent;
        --sc-badge-border: var(--sc-badge-border-with) solid var(--sc-badge-border-color);

        --sc-badge-rounded: 9999px;
        --sc-badge-line-height: 1.15;
        --sc-badge-fw: var(--sc-font-weight-base);

        display: inline-flex;
        align-items:center;
        box-sizing: border-box;
        line-height: var(--sc-badge-line-height);
        border-radius: var(--sc-badge-rounded);
        background: var(--sc-badge-bg);
        color: var(--sc-badge-color);

        font-family: var(--sc-badge-ff, var(--sc-font-family-base, inherit));
        font-weight: var(--sc-badge-fw);

        padding-top: var(--sc-badge-py);
        padding-bottom: var(--sc-badge-py);
        padding-left: var(--sc-badge-px);
        padding-right: var(--sc-badge-px);
        min-height: calc(var(--sc-badge-px) * 2);
        border: var(--sc-badge-border);
      }

      /*TYPES*/
      :host([type="primary"]) {
        --sc-badge-color: var(--sc-primary-content);
        --sc-badge-bg: var(--sc-primary);
      }
      :host([type="warning"]) {
        --sc-badge-color: var(--sc-warning-content);
        --sc-badge-bg: var(--sc-warning);
      }
      :host([type="danger"]) {
        --sc-badge-color: var(--sc-danger-content);
        --sc-badge-bg: var(--sc-danger);
      }
      :host([type="info"]) {
        --sc-badge-color: var(--sc-info-content);
        --sc-badge-bg: var(--sc-info);
      }
      :host([type="success"]) {
        --sc-badge-color: var(--sc-success-content);
        --sc-badge-bg: var(--sc-success);
      }
      :host([type="neutral"]) {
        --sc-badge-color: var(--sc-base);
        --sc-badge-bg: var(--sc-base-content);
      }

      /*SIZE*/
      :host {
        font-size: var(--sc-badge-fs);
        gap: var(--sc-badge-gap);
      }

      :host([size="xs"]) {
        --sc-badge-fs: 0.68rem;
        --sc-badge-gap: 0.35em;
      }

      :host([size="sm"]) {
        --sc-badge-fs: 0.85rem;
        --sc-badge-gap: 0.35em;
      }

      :host([size="lg"]) {
        --sc-badge-line-height: 1.2;
        --sc-badge-fs: 1.25rem;
        --sc-badge-gap: 0.5em;
      }

      :host([size="xl"]) {
        --sc-badge-line-height: 1.2;
        --sc-badge-fs: 1.5rem;
        --sc-badge-gap: 0.5em;
      }

      /*OUTLINE*/
      :host([variant="outline"][type]) {
        border-width: var(--sc-badge-border-with) !important;
        border-color: var(--sc-badge-bg);
        color: var(--sc-badge-bg);
        background: transparent;
      }

      :host([variant="outline"][type="default"]) {
        border-color: var(--sc-base-400);
        color: var(--sc-base-500);
        background: transparent;
      }

      /*GHOST*/
      :host([variant="ghost"][type]) {
        color: var(--sc-badge-bg);
        background: transparent;
        padding: 0;
      }

      :host([variant="ghost"][type="default"]) {
        color: var(--sc-badge-color);
        background: transparent;
      }
    `];Mr([m({type:String,reflect:!0})],pt.prototype,"type",void 0);Mr([m({type:String,reflect:!0})],pt.prototype,"variant",void 0);Mr([m({type:String,reflect:!0})],pt.prototype,"size",void 0);pt=Mr([B("sonic-badge")],pt);try{customElements.define("sonic-badge",pt)}catch{}class Q{static listen(){if(!Q.listening)return;let e=document.location.href.replace(document.location.origin,"");Q.prevURL&&Q.prevURL!=e&&(Q.prevURL=e,Q.listeners.forEach(t=>{t.location=e})),window.requestAnimationFrame(Q.listen)}static offChange(e){let t=Q.listeners.indexOf(e);t!=-1&&(Q.listeners.splice(t,1),Q.listeners.length==0&&(Q.listening=!1))}static onChange(e){Q.listening||(Q.listening=!0,Q.listen()),Q.listeners.push(e)}static changeFromComponent(e){let t=e.getAttribute("to");if(t||(t=e.href),!t)return;if(t.indexOf("#")==0){document.location.hash=t.substring(1);return}let r=new URL(t,document.location.href),o=r.pathname.split("/"),i=[],l="";for(let d of o)d!=l&&i.push(d),l=d;t="/"+i.join("/")+r.search+(r.hash?+r.hash:""),e.hasAttribute("pushState")?history.pushState(null,"",t):e.hasAttribute("replaceState")?history.replaceState(null,"",t):document.location.href=t}static updateComponentActiveState(e){if(e.href&&e.href.indexOf("http")!=0){let t=new URL(e.href,document.location.href),r=new URL(e.location,document.location.origin);t.pathname==r.pathname&&t.hash==r.hash&&t.search==r.search?e.setAttribute("active","true"):e.removeAttribute("active")}}}Q.listeners=[];Q.listening=!1;Q.prevURL=document.location.href.replace(document.location.origin,"");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},nr=s=>(...e)=>({_$litDirective$:s,values:e});class or{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=nr(class extends or{constructor(s){var e;if(super(s),s.type!==Mt.ATTRIBUTE||s.name!=="style"||((e=s.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,t)=>{const r=s[t];return r==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(s,[e]){const{style:t}=s.element;if(this.ct===void 0){this.ct=new Set;for(const r in e)this.ct.add(r);return this.render(e)}this.ct.forEach(r=>{e[r]==null&&(this.ct.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(const r in e){const o=e[r];o!=null&&(this.ct.add(r),r.includes("-")?t.setProperty(r,o):t[r]=o)}return Ue}});function Yt(s){return typeof s=="object"&&s!=null}class ch{constructor(e,t=null){for(this._proxies_=new Map,this._value_=e,this._assignListeners_=new Set,this._mutationListeners_=new Set,this._fillListeners_=new Set,this._templateFillListeners_=new Set,this._lockInternalMutationPublishing_=!1,this.parent=t,this.root=this;this.root.parent;)this.root=this.root.parent}delete(){for(let e of this._proxies_.values())e.delete();this._assignListeners_.clear(),this._mutationListeners_.clear(),this._fillListeners_.clear(),this._templateFillListeners_.clear(),this._proxies_.clear()}hasListener(){return this._templateFillListeners_.size>0||this._assignListeners_.size>0||this._mutationListeners_.size>0||this._fillListeners_.size>0}_publishInternalMutation_(e=!1){this._mutationListeners_.forEach(t=>t()),!e&&this.parent&&this.parent._publishInternalMutation_()}_publishAssignement_(e=!1){this._assignListeners_.forEach(t=>t(this._value_.__value?this._value_.__value:this._value_)),this._publishInternalMutation_(e)}_publishDynamicFilling_(e,t){this._fillListeners_.forEach(r=>{r[e]!==t&&(r[e]=t)}),this._publishTemplateFilling_(e,t)}_publishTemplateFilling_(e,t){this._templateFillListeners_.forEach(r=>{typeof r[e]!="undefined"&&r[e]!==t&&(r[e]=t)})}onAssign(e){typeof e=="function"&&(this._assignListeners_.add(e),e(this._value_.__value?this._value_.__value:this._value_))}offAssign(e){this._assignListeners_.delete(e)}onInternalMutation(e){typeof e=="function"&&(this._mutationListeners_.add(e),e())}offInternalMutation(e){this._mutationListeners_.delete(e)}startTemplateFilling(e){this._templateFillListeners_.add(e);for(var t in this._value_){const r=this._value_[t];typeof e[t]!="undefined"&&e[t]!==r&&(e[t]=r)}}stopTemplateFilling(e){this._templateFillListeners_.delete(e)}startDynamicFilling(e){this._fillListeners_.add(e);for(var t in this._value_){const r=this._value_[t];e[t]!==r&&(e[t]=r)}}stopDynamicFilling(e){this._fillListeners_.delete(e)}set(e,t=!1){if(this._value_===e||this._value_.hasOwnProperty("__value")&&e.hasOwnProperty("__value")&&this._value_.__value===e.__value)return!0;if(this._value_=e,this._value_.hasOwnProperty("__value"))return this._publishAssignement_(t),!0;if(Array.from(this._proxies_.keys()).forEach(r=>{!this._value_[r]&&this._proxies_.has(r)&&!this._proxies_.get(r).hasListener()&&this._proxies_.delete(r)}),Yt(this._value_))for(let r in this._value_){let o=e[r],l=Yt(o)?o:{__value:o};if(!this._proxies_.has(r)){let d=new Tt(l,this);this._proxies_.set(r,d,!0),d._proxies_.set("_parent_",this)}this._proxies_.get(r).set(l,!0),this._publishDynamicFilling_(r,o)}return this._publishAssignement_(),!0}get(){return this._value_.__value?this._value_.__value:this._value_}}class ye{constructor(){if(ye.instance!=null)throw"Singleton / use getInstance";ye.instance=this,this.publishers=new Map}static getInstance(){return ye.instance==null?new ye:ye.instance}static get(e){return ye.getInstance().get(e)}static delete(e){return ye.getInstance().delete(e)}get(e){return this.publishers.has(e)||this.publishers.set(e,new Tt({})),this.publishers.get(e)}set(e,t){this.publishers.set(e,t)}delete(e){if(!this.publishers.has(e))return!1;this.publishers.get(e),this.publishers.delete(e)}}ye.instance=null;class Tt extends ch{constructor(e,t=null){super(e,t);let r=this,o=new Proxy(this,{get:function(i,l){if(["onAssign","offAssign","startDynamicFilling","stopDynamicFilling","startTemplateFilling","stopTemplateFilling","onInternalMutation","offInternalMutation","set","get","_templateFillListeners_","_fillListeners_","_assignListeners_","_publishInternalMutation_","hasListener","delete","_mutationListeners_","_publishDynamicFilling_","_publishTemplateFilling_","_publishAssignement_","_proxies_","parent","_value_","_lockInternalMutationPublishing_"].includes(l))return r[l];if(!r._proxies_.has(l)){let d=r._value_[l],x=new Tt(Yt(d)?d:{__value:d},r);x._proxies_.set("_parent_",o),r._proxies_.set(l,x)}return r._proxies_.get(l)},set:function(i,l,d){if(l=="_value_")return i._value_=d,i._value_;const x=Yt(d);if(!r._proxies_.has(l)){let P=new Tt(x?d:{__value:d},r);P._proxies_.set("_parent_",o),r._proxies_.set(l,P)}return r._value_[l]===d&&x?d:(r._value_[l]!==d&&(r._value_[l]=d,r._publishDynamicFilling_(l,d)),r._proxies_.get(l).set(Yt(d)?d:{__value:d}),r._proxies_.get(l))},deleteProperty:function(i,l){return r._proxies_.get(l).set(null),r._publishDynamicFilling_(l,null),r._proxies_.delete(l),delete r._value_[l]},enumerate:function(i,l){return r._value_.keys()},has:function(i,l){return l in r._value_&&l!="_lockInternalMutationPublishing_"},defineProperty:function(i,l,d){return d&&"value"in d&&(r._value_[l]=d.value),r._value_},getOwnPropertyDescriptor:function(i,l){return r._value_[l],{enumerable:!0,configurable:!0}},ownKeys:function(i){return r._value_.__value?Object.keys(this._value_.__value):Object.keys(r._value_)}});return o}}typeof Li!="undefined"&&(Li.exports={Publisher:Tt,PublisherManager:ye});class Re{static shallowEqual(e,t){const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(let i of r)if(e[i]!==t[i])return!1;return!0}static deepEqual(e,t){const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(const i of r){const l=e[i],d=t[i],x=Re.isObject(l)&&Re.isObject(d);if(x&&!Re.deepEqual(l,d)||!x&&l!==d)return!1}return!0}static isObject(e){return e!=null&&typeof e=="object"}static isUndefindOrNull(e){return e==null}static traverse(e,t){for(let r of t){if(e[r]===void 0)return;e=e[r]}return e}}var At=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const xr=new Map,sr=s=>{class e extends s{constructor(...r){super(),this.error=null,this.autofocus=null,this.disabled=null,this.required=null,this.onValueAssign=null,this.onFormValueAssign=null,this.formDataProvider="",this._name="",this._value="",this.onValueAssign=o=>{this.setValueFromPublisher(o)},this.onFormValueAssign=o=>{this.setFormValueFromPublisher(o)}}get name(){return this._name}set name(r){this._name=r}updateDataValue(){if(this._name){let r=this.getFormPublisher();r&&(r[this._name]=this.getValueForFormPublisher(),this.setFormValueFromPublisher(r[this.name].get()))}}getFormPublisher(){return this.formDataProvider||(this.formDataProvider=this.getAncestorAttributeValue("formDataProvider")),this.formDataProvider?ye.get(this.formDataProvider):this.publisher}getValueForFormPublisher(){return this.value}setValueFromPublisher(r){this.value=r}setFormValueFromPublisher(r){this.value=r}get value(){return this._value}set value(r){Re.isObject(r)&&r.hasOwnProperty("__value")&&r.value==null||r!=null&&this._value!=r&&(this._value=r,this.updateDataValue(),this.requestUpdate())}initPublisher(){this._name&&this.publisher&&this.publisher[this._name].offAssign(this.onValueAssign);let r=this.getFormPublisher();this._name&&r&&r[this._name].offAssign(this.onFormValueAssign),super.initPublisher(),this.name||(this._name=this.getAttribute("name")),this.value||(this._value=this.getAttribute("value")),this.updateDataValue(),this.publisher&&this._name&&this.publisher[this._name].onAssign(this.onValueAssign),r=this.getFormPublisher(),this._name&&r&&r[this._name].onAssign(this.onFormValueAssign)}handleChange(r){this.value=r.target.value;const o=new Event("change");this.dispatchEvent(o)}addKeyboardNavigation(){let r=this.getAncestorAttributeValue("data-keyboard-nav");if(!r)return;let o=r.split(" "),i=o[0];if(!i)return;for(let d of o){xr.has(d)||xr.set(d,[]);let x=xr.get(d);x.indexOf(this)==-1&&x.push(this)}let l=xr.get(i);this.addEventListener("keydown",d=>{if(!["ArrowDown","ArrowUp"].includes(d.key))return;let x="input:not([disabled]), button:not([disabled]), select:not([disabled]), textarea:not([disabled])",y=l.filter(S=>{let R=S.shadowRoot.querySelector(x);if(!R)return!1;let L=window.getComputedStyle(R);return L.display!=="none"&&L.display!==""&&L.pointerEvents!="none"&&L.visibility!=="hidden"&&R.getBoundingClientRect().width>0}),P=null;if(d.key=="ArrowDown"){let S=y.indexOf(this);S==y.length-1?P=y[0]:P=y[S+1]}else if(d.key=="ArrowUp"){let S=y.indexOf(this);S==0?P=y[y.length-1]:P=y[S-1]}console.log(P);let C=P.shadowRoot.querySelector(x);C&&(C.focus(),d.preventDefault())})}connectedCallback(){super.connectedCallback(),this.addKeyboardNavigation()}disconnectedCallback(){super.disconnectedCallback(),this._name&&this.publisher&&this.publisher[this._name].offAssign(this.onValueAssign);let r=this.getFormPublisher();this._name&&r&&r[this._name].offAssign(this.onFormValueAssign)}}return At([m({type:Boolean})],e.prototype,"error",void 0),At([m({type:Boolean})],e.prototype,"autofocus",void 0),At([m({type:Boolean})],e.prototype,"disabled",void 0),At([m({type:Boolean})],e.prototype,"required",void 0),At([m()],e.prototype,"name",null),At([m()],e.prototype,"value",null),e};var Vt=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const cs=s=>{class e extends s{constructor(){super(...arguments),this._value="",this._name="",this.unique=null,this.radio=null,this._checked=null}get value(){return this._value}set value(r){this.hasAttribute("value")&&(r=this.getAttribute("value")),this._value!=r&&(this._value=r,this.updateDataValue(),this.requestUpdate())}get name(){return this._name}set name(r){this.hasAttribute("name")&&(r=this.getAttribute("name")),this._name=r}get checked(){return this._checked}set checked(r){this.setCheckedValue(r)}setCheckedValue(r){this._checked!=r&&(this._checked=r,this.updateDataValue(),this.requestUpdate(),this.publisher&&!this.radio&&!this.unique&&(this.publisher.checked=this._checked))}handleChange(){this.checked=this.checked?this.radio?!0:null:!0;const r=new Event("change");this.dispatchEvent(r)}getValueForFormPublisher(){let o=this.getFormPublisher()[this.name].get();if(this.unique||this.radio)return this.checked&&this.value!=null?this.value:o;Array.isArray(o)||(o=[]),o=o.slice(0);let i=o.indexOf(this.value);return this.checked===!0&&i===-1&&o.push(this.value),this.checked===null&&i!==-1&&o.splice(i,1),o}setFormValueFromPublisher(r){if(this.unique||this.radio){this.checked=this.value==r?!0:null;return}Array.isArray(r)||(r=[]),this.checked=r.indexOf(this.value)!==-1?!0:null}initPublisher(){super.initPublisher(),!!this.hasAttribute("checked")&&(!this.publisher||this.publisher.get().checked!==!1)&&(this.checked=!0)}}return Vt([m()],e.prototype,"value",null),Vt([m()],e.prototype,"name",null),Vt([m({type:Boolean})],e.prototype,"unique",void 0),Vt([m({type:Boolean})],e.prototype,"radio",void 0),Vt([m()],e.prototype,"checked",null),e};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zi extends or{constructor(e){if(super(e),this.it=K,e.type!==Mt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===K||e==null)return this.ft=void 0,this.it=e;if(e===Ue)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}zi.directiveName="unsafeHTML",zi.resultType=1;const Dr=nr(zi),dh={cancel:`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"check-circled-outline":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,check:`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>\r
</svg>\r
`,"emoji-think-left":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10 15H7M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>\r
<path d="M8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>\r
<path d="M15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>\r
</svg>\r
`,"info-empty":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 11.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"more-vert":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>\r
<path d="M12 18.5C12.2761 18.5 12.5 18.2761 12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18C11.5 18.2761 11.7239 18.5 12 18.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>\r
<path d="M12 6.5C12.2761 6.5 12.5 6.27614 12.5 6C12.5 5.72386 12.2761 5.5 12 5.5C11.7239 5.5 11.5 5.72386 11.5 6C11.5 6.27614 11.7239 6.5 12 6.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>\r
</svg>\r
`,"nav-arrow-down":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"warning-circled-outline":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7L12 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.01L12.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`};var ds={iconoir:dh};class Ar{static registerIcons(e){const t=ds;for(let r in e){const o=e[r],i=t[r]||{};for(let l in o)i[l]=o[l];t[r]=i}}}Ar.fontAwesomeNext={get:s=>{var e;let t=((e=s.prefix)===null||e===void 0?void 0:e.replace("far","regular").replace("fas","solid"))||"regular";return Dr(ds[t][s.name]||"")}};Ar.default=Ar.fontAwesomeNext;var Fi=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ot=class extends q{constructor(){super(...arguments),this.name="",this.prefix=""}render(){return this.name?(this.style.removeProperty("display"),T`${Ar.default.get({name:this.name,prefix:this.prefix})}`):(this.style.display="none",K)}};Ot.styles=N`
    :host {
      line-height: 0;
      width: fit-content;
      height: fit-content;
      vertical-align: -0.125em;
    }
    svg {
      height: var(--sc-icon-size, 1em);
      width: var(--sc-icon-size, 1em);
    }

    svg:not([fill="none"]){
      fill: currentColor;
    }

    svg[fill="none"]{
      stroke-width: 2;
    }
    
    :host([size="2xs"]) svg {
      --sc-icon-size: 0.625em;
    }

    :host([size="xs"]) svg {
      --sc-icon-size: 0.75em;
    }

    :host([size="sm"]) svg {
      --sc-icon-size: 0.875em;
    }

    :host([size="lg"]) svg {
      --sc-icon-size: 1.25em;
    }

    :host([size="xl"]) svg {
      --sc-icon-size: 1.5em;
    }

    :host([size="2xl"]) svg {
      --sc-icon-size: 2em;
    }
  `;Fi([m({type:String})],Ot.prototype,"name",void 0);Fi([m({type:String})],Ot.prototype,"prefix",void 0);Ot=Fi([B("sonic-icon")],Ot);try{customElements.define("sonic-icon",Ot)}catch{}class Fr{static getLanguage(){return document.getElementsByTagName("html")[0].getAttribute("lang")}static getAncestorAttributeValue(e,t){for(;!(e.hasAttribute&&e.hasAttribute(t))&&(e.parentNode||e.host);)e=e.parentNode||e.host;return e.hasAttribute?e.getAttribute(t):null}}var tt=globalThis&&globalThis.__awaiter||function(s,e,t,r){function o(i){return i instanceof t?i:new t(function(l){l(i)})}return new(t||(t=Promise))(function(i,l){function d(P){try{y(r.next(P))}catch(C){l(C)}}function x(P){try{y(r.throw(P))}catch(C){l(C)}}function y(P){P.done?i(P.value):o(P.value).then(d,x)}y((r=r.apply(s,e||[])).next())})};class Le{constructor(e){this.serviceURL=e.serviceURL,this.serviceURL||(this.serviceURL=document.location.origin),this.userName=e.userName,this.password=e.password,this.token=e.token,this.tokenProvider=e.tokenProvider}auth(){return tt(this,void 0,void 0,function*(){if(this.token)return;if(Le.tokens.has(this.serviceURL)){this.token=Le.tokens.get(this.serviceURL);return}if(!this.userName||!this.password||!this.tokenProvider)return;let e={Authorization:"Basic "+window.btoa(unescape(encodeURIComponent(this.userName+":"+this.password)))},t=yield fetch(this.computeURL(this.tokenProvider),{headers:e});try{let r=yield t.json();this.token=r.token,Le.tokens.set(this.serviceURL,this.token)}catch{}})}get(e){return tt(this,void 0,void 0,function*(){let t=yield this.createHeaders();const r=this.computeURL(e);if(!Le.loadingGetPromises.has(r)){let i=new Promise(l=>tt(this,void 0,void 0,function*(){let d=yield fetch(r,{headers:t});try{let x=yield d.json();l(x)}catch{l(null)}}));Le.loadingGetPromises.set(r,i)}let o=yield Le.loadingGetPromises.get(r);return Le.loadingGetPromises.delete(r),o})}createHeaders(){return tt(this,void 0,void 0,function*(){yield this.auth();let e={};return this.token&&(e.Authorization="Bearer "+this.token),e.credentials="include",e["Accept-Language"]=Fr.getLanguage(),e})}computeURL(e){return this.serviceURL+"/"+e}send(e,t,r="POST"){return tt(this,void 0,void 0,function*(){yield this.auth();let o=yield this.createHeaders();o.Accept="application/json",o["Content-Type"]="application/json";let i=yield fetch(this.computeURL(e),{headers:o,method:r,body:JSON.stringify(t)});try{return yield i.json()}catch{return null}})}put(e,t){return tt(this,void 0,void 0,function*(){return this.send(e,t,"PUT")})}post(e,t){return tt(this,void 0,void 0,function*(){return this.send(e,t,"POST")})}delete(e,t){return tt(this,void 0,void 0,function*(){return this.send(e,t,"POST")})}}Le.loadingGetPromises=new Map;Le.tokens=new Map;class Io{static ucFirst(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.substring(1)}static js(e){try{return Function("return "+e)()}catch{return""}}}class ee{static observe(e){if(ee.observedElements.has(e))return;let t=new MutationObserver(ee.onMutation),r={};r.childList=!0,r.subtree=!0,r.attributes=!0,r.attributeFilter=["data-bind"],t.observe(e,r),e.querySelectorAll("[data-bind]").forEach(o=>ee.addPublisherListeners(o)),ee.observedElements.set(e,t)}static unObserve(e){let t=this.observedElements.get(e);!t||(t.disconnect(),e.querySelectorAll("[data-bind]").forEach(r=>ee.removePublisherListeners(r)))}static onAdded(e){e.hasAttribute&&e.hasAttribute("data-bind")&&ee.addPublisherListeners(e),e.querySelectorAll?e.querySelectorAll("[data-bind]").forEach(t=>ee.addPublisherListeners(t)):e.childNodes.forEach(t=>ee.onAdded(t))}static onRemoved(e){e.hasAttribute&&e.hasAttribute("data-bind")&&ee.removePublisherListeners(e),e.querySelectorAll?e.querySelectorAll("[data-bind]").forEach(t=>ee.removePublisherListeners(t)):e.childNodes.forEach(t=>ee.onRemoved(t))}static onMutation(e){for(let o of e)switch(o.type){case"attributes":ee.addPublisherListeners(o.target);break;case"childList":var t=o.addedNodes,r=o.removedNodes;t.forEach(i=>{ee.onAdded(i)}),r.forEach(i=>{ee.onRemoved(i)});break}}static removePublisherListeners(e){let t=ee.publisherListeners.get(e);!t||(ee.publisherListeners.delete(e),t.forEach(r=>{r.publisher.offAssign(r.onAssign)}))}static getVariablesDescriptor(e){let t=e.match(/(\$(?:\w+\\?\.?)+)/g);return t?t=t.map(r=>r.replace("$","")):t=[e],t=t.filter(r=>r.length>0),{expression:e.replace("\\",""),variables:t.map(r=>r.split(/\b\.\b/).map(o=>o.replace("\\","")))}}static getDataBindItems(e){return Array.from(e.attributes).filter(t=>t.name.indexOf("::")==0).map(t=>({propertyToUpdate:t.name.substring(2).replace(/\-((html)|\w)/g,o=>o.substring(1).toUpperCase()),bindedVariablesDescriptor:ee.getVariablesDescriptor(t.value)}))}static getSubPublisher(e,t){for(let r of t)r!="_self_"&&(e=e[r]);return e}static addPublisherListeners(e){ee.removePublisherListeners(e);let t=Fr.getAncestorAttributeValue(e,"dataProvider");if(!t)return;let r=ye.getInstance().get(t),o=ee.getDataBindItems(e),i=[];o.forEach(l=>{let d=l.bindedVariablesDescriptor,x=l.propertyToUpdate;for(let y of d.variables){let P=y,C=r;C=ee.getSubPublisher(r,P);let S=e,R={publisher:C,onAssign:()=>{let L=d.variables.map(te=>ee.getSubPublisher(r,te).get()),w=d.expression,F=!1;if(L.length==1&&d.variables[0].join(".")==w.substring(1)){let te=L[0];Re.isObject(te)&&te.hasOwnProperty("__value")&&(Re.isUndefindOrNull(te.__value)||te.__value==="")&&(te=""),S[x]=te;return}for(let te=0;te<L.length;te++){let he=L[te],He=d.variables[te];Re.isObject(he)&&he.hasOwnProperty("__value")&&Re.isUndefindOrNull(he.__value)&&(F=!0,he=void 0),w=w.replace("$"+He.join("."),he)}if(w.indexOf("|")!=-1){let te=w.indexOf("|");if(te==0)w=Io.js(w.substring(1));else{let he=w.substring(0,te),He=w.substring(te+1),$e=Io;w=F?"":$e[he]?$e[he](He):w}}else w=F?"":w;S[x]=w}};C.onAssign(R.onAssign),i.push(R)}}),ee.publisherListeners.set(e,i)}}ee.observedElements=new Map;ee.publisherListeners=new Map;ee.observe(document.documentElement);var _r=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},hh=globalThis&&globalThis.__awaiter||function(s,e,t,r){function o(i){return i instanceof t?i:new t(function(l){l(i)})}return new(t||(t=Promise))(function(i,l){function d(P){try{y(r.next(P))}catch(C){l(C)}}function x(P){try{y(r.throw(P))}catch(C){l(C)}}function y(P){P.done?i(P.value):o(P.value).then(d,x)}y((r=r.apply(s,e||[])).next())})};let $r=!1,$i=new Set;const Xe=s=>{class e extends s{constructor(...r){super(),this.noShadowDom=null,this.title="",this.dataProvider=null,this.bindPublisher=null,this._props=null,this.defferedDebug=null,this.debug=null,this.onAssign=null,this.args=r}makeShadow(r,o){if(typeof o=="object"&&o!==null){let i=Array.isArray(o)?[]:{};Object.assign(i,o),o=i;for(let l in r)o[l]||(o[l]=r[l])}return o}hasAncestorAttribute(r){return this.getAncestorAttributeValue(r)!=null}getAncestorAttributeValue(r){let o=this;return Fr.getAncestorAttributeValue(o,r)}get props(){return this.publisher?this.publisher.get():this._props}set props(r){typeof r=="string"&&["{","["].includes(r.trim().charAt(0))&&(r=JSON.parse(r)),(r==null||r==="")&&(r={}),this.publisher||this.initPublisher(),this._props=r,this.publisher&&this.publisher.set(r),this.requestUpdate()}updated(r){super.updated(r),this.shadowRoot?this.shadowRoot.children.length==0?this.style.display="none":this.style.removeProperty("display"):this.children.length==0?this.style.display="none":this.style.removeProperty("display")}connectedCallback(){if(this.hasAttribute("lazyRendering")){let r={root:null,rootMargin:Math.max(window.innerWidth*.1,window.innerHeight*.1)+"px"},o=!0;new IntersectionObserver(l=>{for(const d of l)o&&d.isIntersecting&&(o=!1,this.initWording(),this.initPublisher())},r).observe(this)}else this.initWording(),this.initPublisher();this.addDebugger(),super.connectedCallback(),e.instanceCounter++}disconnectedCallback(){this.removeDebugger(),super.disconnectedCallback(),this.publisher&&this.publisher.stopTemplateFilling(this),this.onAssign&&this.publisher.offAssign(this.onAssign)}addDebugger(){if(this.hasAttribute("debug")&&!this.defferedDebug){if(!this.debug){this.debug=document.createElement("div");let r=this.debug.style;r.position="fixed",r.top="0",r.right="0",r.margin="auto",r.borderRadius=".7rem",r.backgroundColor="#0f1729",r.color="#c5d4f9",r.padding="16px 16px",r.margin="16px 16px",r.boxShadow="0 10px 30px -18px rgba(0,0,0,.3)",r.overflowY="auto",r.zIndex="99999999",r.maxHeight="calc(100vh - 32px)",r.fontFamily="Consolas, monospace",r.maxWidth="50vw",r.fontSize="12px",r.minWidth="300px",r.overflowWrap="break-word"}if(this.addEventListener("click",r=>{!r.ctrlKey||(r.preventDefault(),$r=!$r)}),this.dataProvider){let r=window;r[this.dataProvider]=this.publisher}this.addEventListener("mouseover",()=>{$r||this.removeDebugger(),document.body.appendChild(this.debug),$i.add(this.debug)}),this.addEventListener("mouseout",()=>{$r||this.removeDebugger()}),this.publisher.onInternalMutation(()=>{this.debug.innerHTML=`\u{1F916} DataProvider : "<b style="font-weight:bold;color:#fff;">${this.dataProvider}</b>"<br>
          <div style="font-size:10px;border-top:1px dashed;margin-top:5px;padding-left:23px;opacity:.6;padding-top:5px;">
            Variable disponible dans la console<br>
            ctrl + Clique : \xE9pingler / d\xE9s\xE9pingler
           </div>
          <pre style="margin-top:10px;background:transparent;padding:0;font-size:inherit;color:inherit;">${JSON.stringify(this.publisher.get(),null,"  ")}</pre>`})}}removeDebugger(){$i.forEach(r=>{document.body.contains(r)&&document.body.removeChild(r)}),$i=new Set}getApiConfiguration(){const r=this.getAncestorAttributeValue("token");let o=this.getAncestorAttributeValue("serviceURL"),i=null,l=null,d=null;return r||(i=this.getAncestorAttributeValue("userName"),l=this.getAncestorAttributeValue("password"),d=this.getAncestorAttributeValue("tokenProvider")),{serviceURL:o,token:r,userName:i,password:l,tokenProvider:d}}initWording(){return hh(this,void 0,void 0,function*(){let r=!1;const o=Object.getOwnPropertyNames(this.constructor.prototype);for(let x of o)if(x.indexOf("wording_")==0){r=!0;break}if(!r)return;let i=ye.getInstance().get("sonic-wording"),l=this.getAncestorAttributeValue("wordingProvider");const d=new Le(this.getApiConfiguration());if(l){let x=[];for(let y of o)if(y.indexOf("wording_")==0){let P=y.substring(8);i.get()[y]||(i[y]="...",x.push(P))}if(x.length>0){let y=yield d.post(l,{labels:x});for(let P in y)i["wording_"+P]=y[P]}i.startTemplateFilling(this)}})}createRenderRoot(){if(this.noShadowDom===""||this.getAttribute("noShadowDom")==="")return this;let r=super.createRenderRoot();return ee.observe(r),r}initPublisher(){if(!document)return;this.publisher&&(this.publisher.stopTemplateFilling(this),this.onAssign&&this.publisher.offAssign(this.onAssign));const r=ye.getInstance();this.dataProvider||(this.dataProvider=this.getAncestorAttributeValue("dataProvider"));let o=this.dataProvider;if(!o&&this._props&&(this.dataProvider=o="__subscriber__"+e.instanceCounter),o){this.bindPublisher&&r.set(o,this.bindPublisher());let i=r.get(o);if(this.dataProvider=o,this.hasAttribute("subDataProvider")){let l=this.getAttribute("subDataProvider");this.dataProvider=o+"/"+l,i=Re.traverse(i,l.split(".")),this.publisher=i}this.publisher=i}this.publisher&&(this.onAssign=()=>{this.requestUpdate()},this.publisher.onAssign(this.onAssign),this.publisher.startTemplateFilling(this),this._props&&this.publisher.set(this._props))}}return e.instanceCounter=0,_r([m({type:String,attribute:"data-title"})],e.prototype,"title",void 0),_r([m({reflect:!0})],e.prototype,"dataProvider",void 0),_r([m()],e.prototype,"bindPublisher",void 0),_r([m()],e.prototype,"props",null),e};let qo=window;qo.SonicPublisherManager||(qo.SonicPublisherManager=ye);var Ce=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ce=class extends cs(sr(Xe(q))){constructor(){super(...arguments),this.type="default",this.variant="default",this.size="md",this.shape="default",this.direction="row",this.align="center",this.justify="center",this.textAlign="center",this.minWidth="0",this.loading=!1,this._href="",this.pushState=null,this.active=!1,this._location=""}set href(e){this._href=e,this.href&&this.href.indexOf("http")!=0?(Q.onChange(this),this.location=document.location.href.replace(document.location.origin,"")):Q.offChange(this),this.requestUpdate()}get href(){return this._href}handlePushState(e){e.preventDefault(),Q.changeFromComponent(this)}handleChange(e){super.handleChange(e),this.pushState&&(e.preventDefault(),e.stopPropagation(),Q.changeFromComponent(this))}connectedCallback(){super.connectedCallback()}setCheckedValue(e){if(this.name){if(e==this._checked)return;super.setCheckedValue(e),this._checked?this.setAttribute("active","true"):this.removeAttribute("active")}}disconnectedCallback(){Q.offChange(this),super.disconnectedCallback()}get location(){return this._location}set location(e){this._location=e,Q.updateComponentActiveState(this)}render(){const e={flexDirection:this.direction,alignItems:this.align,justifyContent:this.justify,textAlign:this.textAlign,minWidth:this.minWidth},t=T`
      <button part="button" style=${Qt(e)} @click=${this.handleChange}>
        <slot part="prefix" name="prefix"></slot>
        <slot part="main" class="main-slot"></slot>
        <slot part="suffix" name="suffix"></slot>
        ${this.loading==!0?T`<sonic-icon prefix="iconoir" name="notch" class="loader"></sonic-icon>`:""}
      </button>
    `;return this.href?T`<a href="${this.href}" @click=${this.pushState?this.handlePushState:null}>${t}</a>`:T`${t}`}};ce.styles=[N`
      * {
        box-sizing: border-box;
      }
      :host {
        --sc-btn-gap: 0.35em;
        --sc-btn-py: 0.25em;
        --sc-btn-px: 1.1em;
        --sc-btn-fs: 1rem;
        --sc-btn-fw: var(--sc-btn-font-weight);
        --sc-btn-ff: var(--sc-btn-font-family);

        --sc-btn-height: var(--sc-form-height, 2.5em);
        --sc-btn-color: var(--sc-base-content, #1f2937);
        --sc-btn-bg: var(--sc-base-100, #e5e7eb);

        --sc-btn-border-style: solid;
        --sc-btn-border-with: var(--sc-form-border-width, 0.1rem);
        --sc-btn-border-color: transparent;

        --sc-btn-outline-bg-hover: var(--sc-base-100);
        --sc-btn-ghost-bg-hover: var(--sc-base-100);

        --sc-btn-active-color: var(--sc-base);
        --sc-btn-hover-filter: brightness(0.97);
        --sc-btn-active-filter: brightness(0.96);
        --sc-btn-active-bg: var(--sc-base-content);

        --sc-item-rounded-tr: var(--sc-btn-rounded);
        --sc-item-rounded-tl: var(--sc-btn-rounded);
        --sc-item-rounded-bl: var(--sc-btn-rounded);
        --sc-item-rounded-br: var(--sc-btn-rounded);

        display: inline-flex;
        vertical-align: middle;
        box-sizing: border-box;
      }

      :host a {
        display: contents;
      }

      :host button {
        display: flex;
        flex: 1;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        font-family: var(--sc-btn-ff);
        font-weight: var(--sc-btn-fw);
        font-size: var(--sc-btn-fs);

        cursor: pointer;
        text-align: center;
        line-height: 1.2;
        border-radius: var(--sc-item-rounded-tl) var(--sc-item-rounded-tr) var(--sc-item-rounded-br)
          var(--sc-item-rounded-bl);
        gap: var(--sc-btn-gap);

        background: var(--sc-btn-bg);
        color: var(--sc-btn-color);

        padding-top: var(--sc-btn-py);
        padding-bottom: var(--sc-btn-py);
        padding-left: var(--sc-btn-px);
        padding-right: var(--sc-btn-px);

        border: var(--sc-btn-border-with) var(--sc-btn-border-style) var(--sc-btn-border-color);
        min-height: var(--sc-btn-height);
      }

      :host button:focus,
      :host button:hover {
        filter: var(--sc-btn-hover-filter);
      }

      :host button:active {
        filter: var(--sc-btn-active-filter);
      }

      /*TYPES*/
      :host([type="default"]) button {
        --sc-btn-color: var(--sc-base-content);
        --sc-btn-bg: var(--sc-base-100);
      }

      :host([type="primary"]) button {
        --sc-btn-color: var(--sc-primary-content);
        --sc-btn-bg: var(--sc-primary);
      }
      :host([type="warning"]) button {
        --sc-btn-color: var(--sc-warning-content);
        --sc-btn-bg: var(--sc-warning);
      }
      :host([type="danger"]) button {
        --sc-btn-color: var(--sc-danger-content);
        --sc-btn-bg: var(--sc-danger);
      }
      :host([type="info"]) button {
        --sc-btn-color: var(--sc-info-content);
        --sc-btn-bg: var(--sc-info);
      }
      :host([type="success"]) button {
        --sc-btn-color: var(--sc-success-content);
        --sc-btn-bg: var(--sc-success);
      }
      :host([type="neutral"]) button {
        --sc-btn-color: var(--sc-base);
        --sc-btn-bg: var(--sc-base-600);
      }

      /*SIZE*/
      :host([size="xs"]) {
        --sc-btn-fs: 0.75rem;
      }
      :host([size="sm"]) {
        --sc-btn-fs: 0.85rem;
      }
      :host([size="lg"]) {
        --sc-btn-fs: 1.2rem;
      }
      :host([size="xl"]) {
        --sc-btn-fs: 1.5rem;
      }

      /*UNSTYLED*/
      :host([variant="unstyled"]) button {
        all: unset;
        transition: 0.1s;
        display: inline-flex;
        cursor: pointer;
        --sc-btn-height: auto;
        --sc-btn-width: auto;
      }

      /*GESTION DU FOCUS*/
      :host(:not([disabled])) button:focus {
        box-shadow: 0 0 0 0.18rem var(--sc-base-300);
        border-color: var(--sc-base-300) !important;
        outline: none;
      }

      /*GHOST*/
      :host([variant="ghost"][type]) button {
        color: var(--sc-btn-bg);
        background: transparent;
      }

      :host([variant="ghost"][type="default"]) button {
        color: var(--sc-btn-color);
        background: transparent;
      }

      /*:host([variant="ghost"]) button:focus,*/
      :host([variant="ghost"]) button:hover {
        background: var(--sc-btn-ghost-bg-hover);
        filter: none;
      }

      :host([active][variant="ghost"]) button {
        background: var(--sc-btn-ghost-bg-hover);
        filter: none;
      }

      :host([active][variant="ghost"]) button:hover {
        filter: var(--sc-btn-hover-filter);
      }

      /*OUTLINE*/
      :host([variant="outline"][type]) button {
        border-color: var(--sc-btn-bg);
        color: var(--sc-btn-bg);
        background: transparent;
      }

      :host([variant="outline"][type="default"]) button {
        border-color: var(--sc-base-400);
        color: var(--sc-base-500);
        background: transparent;
      }

      /*:host([variant="outline"]) button:focus,*/
      :host([variant="outline"]) button:hover {
        background: var(--sc-btn-outline-bg-hover);
      }

      /*OUTLINE*/
      :host([variant="link"]) {
        vertical-align: baseline;
      }

      :host([variant="link"]) button {
        text-decoration: underline;
        padding: 0;
        background: none;
        border: none;
        font-size: inherit;
        min-height: 0;
        color: inherit;
      }

      :host([variant="link"][type]) button {
        color: var(--sc-btn-bg);
      }
      :host([variant="link"][type="default"]) button {
        color: inherit;
      }

      :host([variant="link"]) button:focus,
      :host([variant="link"]) button:hover {
        text-decoration: none;
      }

      /*SHAPE*/
      :host([shape="circle"]) button {
        border-radius: 50%;
      }

      :host([shape="circle"]) button,
      :host([shape="square"]) button {
        width: var(--sc-btn-height);
        height: var(--sc-btn-height);
        overflow: hidden;
        padding: 0;
        align-items: center;
        justify-content: 0;
      }

      :host([shape="block"]),
      :host([shape="block"]) button {
        width: 100%;
      }

      :host([disabled]) {
        opacity: 0.3;
        pointer-events: none;
        user-select: none;
      }

      /*ACTIVE*/
      :host([active]:not([variant="ghost"])) button {
        background: var(--sc-btn-active-bg);
        color: var(--sc-btn-active-color);
        border-color: var(--sc-btn-active-bg);
      }

      :host([textAlign="left"]) button {
        text-align: left;
      }

      :host([textAlign="right"]) button {
        text-align: right;
      }

      .main-slot {
        flex-grow: 1;
        display: block;
        /*align-items: center;
        justify-content: center;*/
      }

      slot[name="suffix"],
      slot[name="prefix"] {
        flex-shrink: 0;
      }

      /*ALIGNEMENT DES ICONES
        permet de tous les avoir alignés dans un menu
      */
      ::slotted(sonic-icon) {
        min-width: 1.3em;
        text-align: center;
      }

      /*Tooltip ne joue pas sur le layout*/
      sonic-tooltip {
        display: contents;
      }

      /*OUTLINE*/
      :host(:not([active])) ::slotted([swap="on"]) {
        display: none;
      }

      :host([active]) ::slotted([swap="off"]) {
        display: none;
      }

      /*Loading*/
      :host([loading]) {
        pointer-events: none;
        position: relative;
      }

      :host([loading]) slot {
        opacity: 0 !important;
        pointer-events: none;
      }
      /*Loading*/
      :host([loading]) .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        height: var(--sc-btn-ff);
        width: var(--sc-btn-ff);
        animation: rotation 2s infinite linear;
      }

      @keyframes rotation {
        from {
          transform-origin: 50% 50%;
          transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
          transform-origin: 50% 50%;
          transform: translate(-50%, -50%) rotate(359deg);
        }
      }
    `];Ce([m({type:String,reflect:!0})],ce.prototype,"type",void 0);Ce([m({type:String,reflect:!0})],ce.prototype,"variant",void 0);Ce([m({type:String,reflect:!0})],ce.prototype,"size",void 0);Ce([m({type:String,reflect:!0})],ce.prototype,"shape",void 0);Ce([m({type:String})],ce.prototype,"direction",void 0);Ce([m({type:String,reflect:!0})],ce.prototype,"align",void 0);Ce([m({type:String})],ce.prototype,"justify",void 0);Ce([m({type:String,reflect:!0})],ce.prototype,"textAlign",void 0);Ce([m({type:String})],ce.prototype,"minWidth",void 0);Ce([m({type:Boolean,reflect:!0})],ce.prototype,"loading",void 0);Ce([m({type:String})],ce.prototype,"href",null);Ce([m({type:Boolean})],ce.prototype,"pushState",void 0);Ce([m({type:Boolean,reflect:!0})],ce.prototype,"active",void 0);ce=Ce([B("sonic-button")],ce);try{customElements.define("sonic-button",ce)}catch{}var Ui=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Kt=class extends q{constructor(){super(...arguments),this.href="",this._location="",this.pushState=null}get location(){return this._location}set location(e){this._location=e,Q.updateComponentActiveState(this)}connectedCallback(){this.href&&this.href.indexOf("http")!=0&&(Q.onChange(this),this.location=document.location.href.replace(document.location.origin,"")),super.connectedCallback()}disconnectedCallback(){Q.offChange(this),super.disconnectedCallback()}handlePushState(e){e.preventDefault(),Q.changeFromComponent(this)}render(){return this.href?T`
      <a href="${this.href}" @click=${this.pushState?this.handlePushState:null}>
        <slot></slot>
      </a>
    `:T`<slot></slot>`}};Kt.styles=[N`
      a {
        color: inherit;
        text-decoration: none;
        display:contents;
      }
    `];Ui([m({type:String})],Kt.prototype,"href",void 0);Ui([m({type:Boolean})],Kt.prototype,"pushState",void 0);Kt=Ui([B("sonic-link")],Kt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=s=>s!=null?s:K,Ii=N`
  * {
    box-sizing: border-box;
  }

  :host {
    --sc-input-height: var(--sc-form-height, 2.5em);
    --sc-input-border-with: var(--sc-form-border-width, 0.1rem);
    --sc-input-border: var(--sc-input-border-with) solid var(--sc-input-border-color, var(--sc-base-300, #aaa));
    --sc-input-color: var(--sc-base-content, #1f2937);

    --sc-item-rounded-tr: var(--sc-input-rounded, var(--sc-rounded));
    --sc-item-rounded-tl: var(--sc-input-rounded, var(--sc-rounded));
    --sc-item-rounded-bl: var(--sc-input-rounded, var(--sc-rounded));
    --sc-item-rounded-br: var(--sc-input-rounded, var(--sc-rounded));

    --sc-input-ff: inherit;
    --sc-input-py: 0.6em;
    --sc-input-px: 1.15em;

    --sc-input-prefix-color: var(--sc-input-color);
    --sc-input-prefix-bg: var(--sc-input-bg);
    --sc-input-prefix-border-color: var(--sc-input-border-color);

    --sc-input-suffix-color: var(--sc-input-color);
    --sc-input-suffix-bg: var(--sc-input-bg);
    --sc-input-suffix-border-color: var(--sc-input-border-color);
    --sc-label-fs: var(--sc-input-fs);
  }

  .form-element {
    display: block;
    flex-grow: 1;
    width: 100%;

    line-height: 1.1;
    color: var(--sc-input-color);
    border-radius: var(--sc-item-rounded-tl) var(--sc-item-rounded-tr) var(--sc-item-rounded-br)
      var(--sc-item-rounded-bl);

    font-family: var(--sc-input-ff);
    background-color: var(--sc-input-bg, var(--sc-base, #fff));
    border: var(--sc-input-border);
    width: 100%;
    font-size: var(--sc-input-fs);

    padding-top: var(--sc-input-py);
    padding-bottom: var(--sc-input-py);
    padding-left: var(--sc-input-px);
    padding-right: var(--sc-input-px);

    min-height: var(--sc-input-height);
  }

  label {
    font-size: var(--sc-label-fs);
    line-height: 1.2;
  }

  .form-control {
    display: flex;
    width: 100%;
  }

  /*Suffix*/
  :host(:not([inlineContent])) .has-suffix slot[name="suffix"],
  :host(:not([inlineContent])) .has-prefix slot[name="prefix"] {
    min-width: var(--sc-input-height);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.1;
    flex-shrink: 0;
    padding-left: calc(-1 * var(--sc-input-px));
    padding-right: calc(-1 * var(--sc-input-px));
  }

  :host(:not([inlineContent])) slot[name="prefix"] {
    border-radius: var(--sc-item-rounded-tl) 0 0 var(--sc-item-rounded-bl);
    background-color: var(--sc-input-prefix-bg);
    color: var(--sc-input-prefix-color);
    border: var(--sc-input-border-with) solid var(--sc-input-prefix-border-color);
    margin-right: calc(-1 * var(--sc-input-border-with));
  }

  :host(:not([inlineContent])) slot[name="suffix"] {
    border-radius: 0 var(--sc-item-rounded-tr) var(--sc-item-rounded-br) 0;
    background-color: var(--sc-input-suffix-bg);
    color: var(--sc-input-suffix-color);
    border: var(--sc-input-border-with) solid var(--sc-input-suffix-border-color);
    margin-left: calc(-1 * var(--sc-input-border-with));
  }

  :host(:not([inlineContent])) .has-prefix .form-element {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  :host(:not([inlineContent])) .has-suffix .form-element {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /*InlineCONTENT */
  :host([inlineContent]) {
    --sc-input-py: 0;
  }
  :host([inlineContent]) .form-element {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.2em;
  }

  /*Disabled */
  :host([disabled]) .form-element-container {
    cursor: not-allowed;
  }

  /*SIZE*/
  :host {
    --sc-input-fs: 1rem;
  }

  :host([size="xs"]) {
    --sc-input-fs: 0.75rem;
  }
  :host([size="sm"]) {
    --sc-input-fs: 0.85rem;
  }
  :host([size="lg"]) {
    --sc-input-fs: 1.2rem;
  }

  :host([variant="ghost"]) .form-element {
    --sc-input-bg: transparent;
  }

  /*ERROR*/
  :host([error]) {
    --sc-input-border-color: var(--sc-danger);
  }

  :host :not([value=""]):not(:focus):invalid {
    --sc-input-color: var(--sc-danger);
  }

  /*Disbaled*/
  :host([disabled]) .form-element {
    pointer-events: none;
    background-color: var(--sc-base-100);
    border-color: transparent;
    color: var(--sc-base-400);
  }

  /*PLACEHOLDER*/
  ::placeholder {
    color: inherit;
    opacity: 0.45;
  }

  :focus::placeholder {
    opacity: 0;
  }

  /*HOVER*/
  :host(:not([disabled])) .form-element:hover,
  .form-element:focus-visible,
  .form-element:focus {
    filter: brightness(0.97);
    outline: none;
  }

  .form-label {
    margin-bottom: 0.22em;
    display: block;
  }

  .form-description {
    color: var(--sc-base-400);
    font-size: 0.85em;
    margin-top: 0.2em;
    display: block;
  }

  .form-element > slot,
  .form-element .form-element {
    all: unset !important;
  }

  /*Textarea scrollbar*/
  textarea::-webkit-scrollbar {
    width: 0.4rem;
  }
  textarea::-webkit-scrollbar-track {
    width: 0.4rem;
  }
  textarea::-webkit-scrollbar-thumb {
    background-color: var(--sc-base-500);
    width: 0.4rem;
    border-radius: var(--sc-rounded);
  }
  textarea::-webkit-scrollbar {
    width: 0.4rem;
  }
  textarea::-webkit-scrollbar-track {
    width: 0.4rem;
  }

  /*Utilitaires*/
  .hidden {
    display: none;
  }
  .contents {
    display: contents;
  }
`;var ki=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const qi=s=>{class e extends s{constructor(...r){super(),this.type="text",this.tabindex=null,this.autocomplete=null}}return ki([m({type:String})],e.prototype,"type",void 0),ki([m({type:String})],e.prototype,"tabindex",void 0),ki([m({type:String})],e.prototype,"autocomplete",void 0),e};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs=nr(class extends or{constructor(s){var e;if(super(s),s.type!==Mt.ATTRIBUTE||s.name!=="class"||((e=s.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var t,r;if(this.et===void 0){this.et=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!(!((t=this.st)===null||t===void 0)&&t.has(i))&&this.et.add(i);return this.render(e)}const o=s.element.classList;this.et.forEach(i=>{i in e||(o.remove(i),this.et.delete(i))});for(const i in e){const l=!!e[i];l===this.et.has(i)||((r=this.st)===null||r===void 0?void 0:r.has(i))||(l?(o.add(i),this.et.add(i)):(o.remove(i),this.et.delete(i)))}return Ue}});var oe=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ie=class extends qi(sr(Xe(q))){constructor(){super(...arguments),this.size="",this.list=null,this.placeholder="",this.readonly=null,this.pattern=null,this.min=null,this.max=null,this.step=null,this.minlength=null,this.maxlength=null,this.label="",this.description="",this.inlineContent=!1,this.hasDescription=!1,this.hasLabel=!1,this.hasSuffix=!1,this.hasPrefix=!1}updated(){var e,t,r,o;this.hasLabel=!!(this.label||((e=this.slotLabelNodes)===null||e===void 0?void 0:e.length)),this.hasDescription=!!(this.description||((t=this.slotDescriptionNodes)===null||t===void 0?void 0:t.length)),this.hasSuffix=!!(!((r=this.slotSuffixNodes)===null||r===void 0)&&r.length),this.hasPrefix=!!(!((o=this.slotPrefixNodes)===null||o===void 0)&&o.length)}onSlotChange(){this.requestUpdate()}render(){const e={"has-prefix":this.hasPrefix,"has-suffix":this.hasSuffix};return T`
      <label for="form-element" class="${this.hasLabel?"form-label":"hidden"}"
        >${this.label?this.label:""}<slot name="label" @slotchange=${this.onSlotChange}></slot
      ></label>

      <div class="form-control ${hs(e)}">
        <div class=" ${this.inlineContent?"form-element form-element-wrapper":"contents"}">
          <slot name="prefix" @slotchange=${this.onSlotChange}></slot>
          <input
            id="form-element"
            part="input"
            class="form-element input"
            type=${this.type}
            @input=${this.handleChange}
            disabled="${Y(this.disabled)}"
            list=${Y(this.list)}
            readonly=${Y(this.readonly)}
            autofocus=${Y(this.autofocus)}
            required=${Y(this.required)}
            tabindex=${Y(this.tabindex)}
            pattern=${Y(this.pattern)}
            min=${Y(this.min)}
            max=${Y(this.max)}
            step=${Y(this.step)}
            minlength=${Y(this.minlength)}
            maxlength=${Y(this.maxlength)}
            placeholder="${this.placeholder}"
            .name=${this.name}
            .value=${this.value}
            autocomplete=${Y(this.autocomplete)}
          />
          <slot name="suffix" @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
      <slot name="description" class=" ${this.hasDescription?"form-description":"hidden"}">
        ${this.description?T`${this.description}`:""}
      </slot>
    `}};ie.styles=[Ii];oe([m({type:String})],ie.prototype,"size",void 0);oe([m({type:String})],ie.prototype,"list",void 0);oe([m({type:String})],ie.prototype,"placeholder",void 0);oe([m({type:Boolean})],ie.prototype,"readonly",void 0);oe([m({type:String})],ie.prototype,"pattern",void 0);oe([m({type:String})],ie.prototype,"min",void 0);oe([m({type:String})],ie.prototype,"max",void 0);oe([m({type:String})],ie.prototype,"step",void 0);oe([m({type:String})],ie.prototype,"minlength",void 0);oe([m({type:String})],ie.prototype,"maxlength",void 0);oe([m({type:String})],ie.prototype,"label",void 0);oe([m({type:String})],ie.prototype,"description",void 0);oe([m({type:Boolean,reflect:!0})],ie.prototype,"inlineContent",void 0);oe([_e({slot:"label"})],ie.prototype,"slotLabelNodes",void 0);oe([_e({slot:"description"})],ie.prototype,"slotDescriptionNodes",void 0);oe([_e({slot:"suffix"})],ie.prototype,"slotSuffixNodes",void 0);oe([_e({slot:"prefix"})],ie.prototype,"slotPrefixNodes",void 0);oe([xe()],ie.prototype,"hasDescription",void 0);oe([xe()],ie.prototype,"hasLabel",void 0);oe([xe()],ie.prototype,"hasSuffix",void 0);oe([xe()],ie.prototype,"hasPrefix",void 0);ie=oe([B("sonic-input")],ie);try{customElements.define("sonic-input",ie)}catch{}var Dt=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ne=class extends cs(qi(sr(Xe(q)))){constructor(){super(...arguments),this.iconName="check",this.description="",this.label="",this.hasDescription=!1}updated(){var e;this.hasDescription=!!(this.description||((e=this.slotDescriptionNodes)===null||e===void 0?void 0:e.length))}connectedCallback(){this.type="checkbox",super.connectedCallback()}render(){return T`
          <label class="checkbox-container ${this.disabled?"disabled":""}">
          <span class="icon-container">
            <input 
              type="${this.type}"
              @change=${this.handleChange}
              disabled="${Y(this.disabled)}"
              .checked="${Y(this.checked)}"
              required=${Y(this.required)}
              .name=${this.name}
              .value=${this.value}
              autofocus=${Y(this.autofocus)}
              
           />
            <sonic-icon prefix="iconoir"
            name="${this.iconName}" class="sc-input-icon"></sonic-icon>
          </span>
          <div class="checkbox-text">
                ${this.label?this.label:""}
                <slot></slot>
                <slot name="description" class="${this.hasDescription?"description":"hidden"} ">
                  ${this.description?T`${this.description}`:""}
                <slot>
              </div>
          </label>

    `}};Ne.styles=[N`
      * {
        box-sizing: border-box;
      }
      .checkbox-container {
        min-height: 1.4em;
        display: flex;
        gap: 0.5em;
        line-height: 1.2;
        align-items: flex-start;
      }

      .icon-container {
        position: relative;
        display: flex;
        flex-shrink: 0;
      }

      input {
        appearance: none;
        flex-shrink: 0;
        height: 1.5em;
        width: 1.5em;
        display: block;
        cursor: pointer;
        border-radius: 0.25em;
        transition: 0.2s;
        outline: none;
        margin: 0;
        background-color: var(--sc-base-200);
      }

      input:focus,
      :host(:not([disabled])) input:active {
        box-shadow: 0 0 0 2px var(--sc-primary);
      }

      :host(:not([disabled])) label {
        cursor: pointer;
      }

      sonic-icon {
        line-height: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) scale(0);
        transition: transform 0.2s ease-in-out;
        color: var(--sc-primary-content);
      }

      /* .checkbox-text {
        align-self: center;
      } */

      .description {
        color: var(--sc-base-400);
        font-size: 0.85em;
        margin-top: 0.2em;
        display: block;
      }

      /*Active */
      input:checked,
      input[checked="true"] {
        background: var(--sc-primary);
      }

      input:checked + sonic-icon,
      input[checked="true"] + sonic-icon {
        transform: translateX(-50%) translateY(-50%) scale(1);
      }
      /*DISABLED */
      .disabled {
        cursor: not-allowed;
      }
      .disabled input {
        opacity: 0.4;
      }

      .disabled .checkbox-text {
        opacity: 0.6;
      }

      ::slotted(a) {
        color: inherit;
        text-decoration: underline !important;
      }

      ::slotted(a:hover) {
        text-decoration: none !important;
      }
      /*Utils */
      .hidden {
        display: none;
      }
    `];Dt([m({type:String})],Ne.prototype,"iconName",void 0);Dt([m({type:String})],Ne.prototype,"description",void 0);Dt([m({type:String})],Ne.prototype,"label",void 0);Dt([_e({slot:"description"})],Ne.prototype,"slotDescriptionNodes",void 0);Dt([m({type:Boolean})],Ne.prototype,"hasDescription",void 0);Ne=Dt([B("sonic-checkbox")],Ne);try{customElements.define("sonic-checkbox",Ne)}catch{}var uh=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Sr=class extends Ne{constructor(){super()}connectedCallback(){this.radio=!0,super.connectedCallback(),this.type="radio"}};Sr.styles=[Ne.styles,N`
      :host input {
        border-radius: 50%;
      }

      :host sonic-icon {
        border-radius: 50%;
        overflow: hidden;
        background-color:var(--sc-primary-content);
        line-height:0;
        display:block;
        font-size:0;
        height:10px;
        width:10px;
      }
    `];Sr=uh([B("sonic-radio")],Sr);try{customElements.define("sonic-radio",Sr)}catch{}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:ph}=th,fh=s=>s.strings===void 0,Ho=()=>document.createComment(""),Wt=(s,e,t)=>{var r;const o=s._$AA.parentNode,i=e===void 0?s._$AB:e._$AA;if(t===void 0){const l=o.insertBefore(Ho(),i),d=o.insertBefore(Ho(),i);t=new ph(l,d,s,s.options)}else{const l=t._$AB.nextSibling,d=t._$AM,x=d!==s;if(x){let y;(r=t._$AQ)===null||r===void 0||r.call(t,s),t._$AM=s,t._$AP!==void 0&&(y=s._$AU)!==d._$AU&&t._$AP(y)}if(l!==i||x){let y=t._$AA;for(;y!==l;){const P=y.nextSibling;o.insertBefore(y,i),y=P}}}return t},dt=(s,e,t=s)=>(s._$AI(e,t),s),vh={},bh=(s,e=vh)=>s._$AH=e,mh=s=>s._$AH,Ci=s=>{var e;(e=s._$AP)===null||e===void 0||e.call(s,!1,!0);let t=s._$AA;const r=s._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo=(s,e,t)=>{const r=new Map;for(let o=e;o<=t;o++)r.set(s[o],o);return r},Hi=nr(class extends or{constructor(s){if(super(s),s.type!==Mt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);const o=[],i=[];let l=0;for(const d of s)o[l]=r?r(d,l):l,i[l]=t(d,l),l++;return{values:i,keys:o}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,r]){var o;const i=mh(s),{values:l,keys:d}=this.dt(e,t,r);if(!Array.isArray(i))return this.ut=d,l;const x=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],y=[];let P,C,S=0,R=i.length-1,L=0,w=l.length-1;for(;S<=R&&L<=w;)if(i[S]===null)S++;else if(i[R]===null)R--;else if(x[S]===d[L])y[L]=dt(i[S],l[L]),S++,L++;else if(x[R]===d[w])y[w]=dt(i[R],l[w]),R--,w--;else if(x[S]===d[w])y[w]=dt(i[S],l[w]),Wt(s,y[w+1],i[S]),S++,w--;else if(x[R]===d[L])y[L]=dt(i[R],l[L]),Wt(s,i[S],i[R]),R--,L++;else if(P===void 0&&(P=Bo(d,L,w),C=Bo(x,S,R)),P.has(x[S]))if(P.has(x[R])){const F=C.get(d[L]),te=F!==void 0?i[F]:null;if(te===null){const he=Wt(s,i[S]);dt(he,l[L]),y[L]=he}else y[L]=dt(te,l[L]),Wt(s,i[S],te),i[F]=null;L++}else Ci(i[R]),R--;else Ci(i[S]),S++;for(;L<=w;){const F=Wt(s,y[w+1]);dt(F,l[L]),y[L++]=F}for(;S<=R;){const F=i[S++];F!==null&&Ci(F)}return this.ut=d,bh(s,y),Ue}});var be=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let se=class extends sr(Xe(q)){constructor(){super(...arguments),this.valueKey="value",this.wordingKey="wording",this.multiple=null,this.size="",this.selectSize=null,this._options=[],this._value="",this.label="",this.description="",this.hasDescription=!1,this.hasLabel=!1,this.hasSuffix=!1,this.hasPrefix=!1}set options(e){this._options=e,!this.value&&this._options.length>0&&(this.value=this._options[0][this.valueKey]),this.requestUpdate()}get options(){return this._options}get value(){return this._value}set value(e){!e||this._value!=e&&(this._value=e,this.formDataProvider||(this.formDataProvider=this.getAncestorAttributeValue("formDataProvider")),this.formDataProvider?ye.getInstance().get(this.formDataProvider)[this._name]=e:this.publisher&&(this.publisher[this._name]=e),this.requestUpdate())}connectedCallback(){super.connectedCallback();let e=this.querySelectorAll("option");e.length>0&&(this.options=Array.from(e).map(t=>({value:t.value,wording:t.text})))}updated(){var e,t,r,o;this.hasLabel=!!(this.label||((e=this.slotLabelNodes)===null||e===void 0?void 0:e.length)),this.hasDescription=!!(this.description||((t=this.slotDescriptionNodes)===null||t===void 0?void 0:t.length)),this.hasSuffix=!!(!((r=this.slotSuffixNodes)===null||r===void 0)&&r.length),this.hasPrefix=!!(!((o=this.slotPrefixNodes)===null||o===void 0)&&o.length)}onSlotChange(){this.requestUpdate()}render(){const e={"has-prefix":this.hasPrefix,"has-suffix":this.hasSuffix};return T`
      <label for="form-element" class="${this.hasLabel?"form-label":"hidden"}"
        >${this.label?this.label:""}<slot name="label" @slotchange=${this.onSlotChange}></slot
      ></label>

      <div class="form-control ${hs(e)}">
        <slot name="prefix" @slotchange=${this.onSlotChange}></slot>
        <div class="form-select-wrapper">
          <select
            @change=${this.handleChange}
            disabled=${Y(this.multiple)}
            size=${Y(this.selectSize)}
            autofocus=${Y(this.autofocus)}
            required=${Y(this.required)}
            .value="${this.value}"
            class="form-element"
          >
            ${Hi(this.options,t=>t[this.valueKey],t=>{const r=this.value==t[this.valueKey]?"selected":null;return T`<option selected=${Y(r)} value="${t[this.valueKey]}">
                  ${t[this.wordingKey]}
                </option>`})}
            <slot></slot>
          </select>
          <sonic-icon prefix="iconoir" name="nav-arrow-down" size="${this.size}"></sonic-icon>
        </div>
        <slot name="suffix" @slotchange=${this.onSlotChange}></slot>
      </div>

      <slot name="description" class=" ${this.hasDescription?"form-description":"hidden"}">
        ${this.description?T`${this.description}`:""}
      </slot>
    `}};se.styles=[Ii,N`
      .form-element {
        appearance: none;
      }
      .form-select-wrapper {
        position: relative;
        width: 100%;
      }
      sonic-icon {
        position: absolute;
        right: 1em;
        top: 50%;
        pointer-events: none;
        transform: translateY(-50%);
      }

      option {
        padding: 0.1rem 5rem;
        color: var(--sc-base-content);
        background: var(--sc-base);
      }
    `];be([m({type:String})],se.prototype,"valueKey",void 0);be([m({type:String})],se.prototype,"wordingKey",void 0);be([m({type:Boolean})],se.prototype,"multiple",void 0);be([m({type:String})],se.prototype,"size",void 0);be([m({type:String})],se.prototype,"selectSize",void 0);be([m({type:Array})],se.prototype,"options",null);be([m()],se.prototype,"value",null);be([m({type:String})],se.prototype,"label",void 0);be([m({type:String})],se.prototype,"description",void 0);be([_e({slot:"label"})],se.prototype,"slotLabelNodes",void 0);be([_e({slot:"description"})],se.prototype,"slotDescriptionNodes",void 0);be([_e({slot:"suffix"})],se.prototype,"slotSuffixNodes",void 0);be([_e({slot:"prefix"})],se.prototype,"slotPrefixNodes",void 0);be([xe()],se.prototype,"hasDescription",void 0);be([xe()],se.prototype,"hasLabel",void 0);be([xe()],se.prototype,"hasSuffix",void 0);be([xe()],se.prototype,"hasPrefix",void 0);se=be([B("sonic-select")],se);try{customElements.define("sonic-select",se)}catch{}var de=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ne=class extends qi(sr(Xe(q))){constructor(){super(...arguments),this.size="",this.rows="",this.cols="",this.maxlength="",this.minlength="",this.wrap=null,this.readonly=null,this.placeholder="",this.label="",this.description="",this.hasDescription=!1,this.hasLabel=!1,this.hasSuffix=!1,this.hasPrefix=!1,this.slotClasses={}}updated(){var e,t,r,o;this.hasLabel=!!(this.label||((e=this.slotLabelNodes)===null||e===void 0?void 0:e.length)),this.hasDescription=!!(this.description||((t=this.slotDescriptionNodes)===null||t===void 0?void 0:t.length)),this.hasSuffix=!!(!((r=this.slotSuffixNodes)===null||r===void 0)&&r.length),this.hasPrefix=!!(!((o=this.slotPrefixNodes)===null||o===void 0)&&o.length)}onSlotChange(){this.requestUpdate()}render(){return T`
      <label for="form-element" class="${this.hasLabel?"form-label":"hidden"}"
        >${this.label?this.label:""}<slot name="label" @slotchange=${this.onSlotChange}></slot
      ></label>

      <div class="form-control">
        <textarea
          @input=${this.handleChange}
          disabled=${Y(this.disabled)}
          autocomplete=${Y(this.autocomplete)}
          autofocus=${Y(this.autofocus)}
          rows=${Y(this.rows)}
          cols=${Y(this.cols)}
          maxlength=${Y(this.maxlength)}
          minlength=${Y(this.minlength)}
          readonly=${Y(this.readonly)}
          spellcheck=${Y(this.spellcheck)}
          wrap=${Y(this.wrap)}
          class="form-element textarea"
          placeholder="${this.placeholder}"
        >
${this.value}</textarea
        >
      </div>

      <slot name="description" class=" ${this.hasDescription?"form-description":"hidden"}">
        ${this.description?T`${this.description}`:""}
      </slot>
    `}};ne.styles=[Ii,N`
      textarea {
        font-size: inherit;
      }
    `];de([m({type:String})],ne.prototype,"size",void 0);de([m({type:String})],ne.prototype,"rows",void 0);de([m({type:String})],ne.prototype,"cols",void 0);de([m({type:String})],ne.prototype,"maxlength",void 0);de([m({type:String})],ne.prototype,"minlength",void 0);de([m({type:String})],ne.prototype,"wrap",void 0);de([m({type:Boolean})],ne.prototype,"readonly",void 0);de([m({type:String})],ne.prototype,"placeholder",void 0);de([m({type:String})],ne.prototype,"label",void 0);de([m({type:String})],ne.prototype,"description",void 0);de([_e({slot:"label"})],ne.prototype,"slotLabelNodes",void 0);de([_e({slot:"description"})],ne.prototype,"slotDescriptionNodes",void 0);de([_e({slot:"suffix"})],ne.prototype,"slotSuffixNodes",void 0);de([_e({slot:"prefix"})],ne.prototype,"slotPrefixNodes",void 0);de([xe()],ne.prototype,"hasDescription",void 0);de([xe()],ne.prototype,"hasLabel",void 0);de([xe()],ne.prototype,"hasSuffix",void 0);de([xe()],ne.prototype,"hasPrefix",void 0);de([m()],ne.prototype,"slotClasses",void 0);ne=de([B("sonic-textarea")],ne);var Bi=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Lt=class extends Xe(q){constructor(){super(...arguments),this.disabled=!1,this.form=""}render(){return T`<fieldset form="${Y(this.form)}" ?disabled="${this.disabled}">
      <slot></slot>
    </fieldset>`}};Lt.styles=[N`
      :host {
        --sc-fieldset-mt: 0;
        --sc-fieldset-mb: 2rem;
        --sc-fieldset-border-color: var(--sc-base-200);
        --sc-fieldset-border-width: var(--sc-form-border-width);

        margin-top: var(--sc-fieldset-mt);
        margin-bottom: var(--sc-fieldset-mb);
        display: block;
        border: var(--sc-fieldset-border-width) solid var(--sc-fieldset-border-color) !important;
        padding: 1.25rem;
        border-radius: var(--sc-rounded-lg);
      }

      fieldset {
        all: unset;
        display: contents;
      }
      ::slotted(sonic-legend) {
        margin-bottom: 1.5rem;
        display: block;
      }
    `];Bi([m({type:Boolean,reflect:!0})],Lt.prototype,"disabled",void 0);Bi([m({type:String})],Lt.prototype,"form",void 0);Lt=Bi([B("sonic-fieldset")],Lt);try{customElements.define("sonic-fieldset",Lt)}catch{}var ar=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let rt=class extends Xe(q){constructor(){super(...arguments),this.iconName="check",this.iconPrefix="",this.description="",this.label=""}render(){return T`<legend part="legend">
      <div class="legend-content">
        ${this.label}<slot></slot>
        <slot name="description" class="description"> ${this.description?T`${this.description}`:""}</slot>
      </div>
      <slot name="suffix"></slot>
    </legend>`}};rt.styles=[N`
      :host {
        --sc-legend-font-size: 1.875rem;
        --sc-legend-font-weight: var(--sc-headings-font-weight);
        --sc-legend-font-style: var(--sc-headings-font-style);
        --sc-legend-family: var(--sc-headings-font-family);
        --sc-legend-line-height: var(--sc-headings-line-height);
        display: flex;
        width: 100%;
      }

      legend {
        font-size: var(--sc-legend-font-size);
        font-weight: var(--sc-legend-font-weight);
        font-style: var(--sc-legend-font-style);
        font-family: var(--sc-legend-font-family);
        line-height: var(--sc-legend-line-height);
        padding: 0;
        display: flex;
        width: 100%;
        align-items: center;
      }

      slot[name="suffix"]:not(:empty) {
        display: block;
        margin-left: auto;
        flex-shrink: 0;
      }

      .description {
        color: var(--sc-neutral-500);
        font-size: 1.25rem;
        line-height: 1.2;
        display: block;
        font-weight: normal;
        font-style: normal;
        margin-top: 0.25eem;
      }
      .legend-content {
        flex-grow: 1;
      }
    `];ar([m({type:String})],rt.prototype,"iconName",void 0);ar([m({type:String})],rt.prototype,"iconPrefix",void 0);ar([m({type:String})],rt.prototype,"description",void 0);ar([m({type:String})],rt.prototype,"label",void 0);rt=ar([B("sonic-legend")],rt);try{customElements.define("sonic-legend",rt)}catch{}class us{constructor(e,{target:t,config:r,callback:o,skipInitial:i}){this.t=!1,this.i=!1,this.callback=()=>!0,(this.h=e).addController(this),this.o=t===null||t!=null?t:this.h,this.l=r,this.t=i!=null?i:this.t,this.callback=o!=null?o:this.callback,window.ResizeObserver?this.u=new ResizeObserver(l=>{this.handleChanges(l),this.h.requestUpdate()}):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){this.value=this.callback(e,this.u)}hostConnected(){this.o&&this.observe(this.o)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.t&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}}var gh=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Pr=class extends Xe(q){constructor(){super(...arguments),this._resizeController=new us(this,{})}render(){return T`<div class=${this.offsetWidth>440?"cq--md":""}><slot></slot></div>`}};Pr.styles=[N`
      :host {
        display: block;
      }

      div {
        display: grid;
        grid-gap: 1.5rem;
        align-items: flex-start;
      }

      .cq--md {
        grid-gap: 1.75rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      ::slotted(sonic-radio),
      ::slotted(sonic-checkbox),
      ::slotted(sonic-form-actions),
      ::slotted(sonic-divider),
      ::slotted(sonic-textarea) {
        grid-column: 1 / -1;
      }

      ::slotted(sonic-divider) {
        --sc-divider-my: 0;
      }
    `];Pr=gh([B("sonic-form-layout")],Pr);try{customElements.define("sonic-form-layout",Pr)}catch{}var wh=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Er=class extends q{updated(){const e=this.querySelectorAll("sonic-input, sonic-button"),t=e.length;t>1&&e.forEach((r,o)=>{o===0?(r.style.setProperty("--sc-item-rounded-tr","0"),r.style.setProperty("--sc-item-rounded-br","0")):o===t-1?(r.style.setProperty("--sc-item-rounded-tl","0"),r.style.setProperty("--sc-item-rounded-bl","0")):(r.style.setProperty("--sc-item-rounded-tr","0"),r.style.setProperty("--sc-item-rounded-br","0"),r.style.setProperty("--sc-item-rounded-tl","0"),r.style.setProperty("--sc-item-rounded-bl","0"))})}render(){return T`<slot></slot>`}};Er.styles=[N`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }

      slot {
        width: 100%;
        display: flex;
        align-items: flex-end;
      }
    `];Er=wh([B("sonic-group")],Er);try{customElements.define("sonic-group",Er)}catch{}var qe=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ee=class extends q{constructor(){super(...arguments),this.rounded="none",this.src="",this.alt="",this.loading="lazy",this.ratio="auto",this.objectPosition="center center",this.imageRendering="auto",this.shadow="none",this.cover=!1}render(){const e={aspectRatio:this.cover?"auto":this.ratio,imageRendering:this.imageRendering,objectPosition:this.objectPosition};return T`<div part="image">
      <picture part="picture"
        ><img part="img" src="${this.src}" loading="${this.loading}" alt="${this.alt}" style=${Qt(e)}
      /></picture>
    </div>`}};Ee.styles=[N`
      :host {
        --sc-img-radius: 0;
        --sc-img-bg: var(--sc-placeholder-bg);
        border-radius: var(--sc-img-radius);
        display: block;
        width: 100%;
        background: var(--sc-img-bg);
      }

      img {
        width: 100%;
        vertical-align: middle;
        object-fit: cover;
      }

      img[src=""] {
        visibility: hidden;
      }

      /*Rounded*/
      :host([rounded]) {
        --sc-img-radius: var(--sc-rounded);
        overflow: hidden;
      }
      :host([rounded="sm"]) {
        --sc-img-radius: var(--sc-rounded-sm);
      }

      :host([rounded="md"]) {
        --sc-img-radius: var(--sc-rounded-md);
      }

      :host([rounded="lg"]) {
        --sc-img-radius: var(--sc-rounded-lg);
      }
      :host([rounded="xl"]) {
        --sc-img-radius: var(--sc-rounded-xl);
      }

      /*Cercle*/
      :host([rounded="full"]) {
        --sc-img-radius: 50% !important;
      }
      :host([rounded="none"]) {
        --sc-img-radius: 0 !important;
      }

      /*OMBRE*/
      :host([shadow]) > div,
      :host([shadow="md"]) > div,
      :host([shadow="true"]) > div {
        box-shadow: var(--sc-shadow);
      }

      :host([shadow="sm"]) > div {
        box-shadow: var(--sc-shadow-sm);
      }

      :host([shadow="none"]) > div {
        box-shadow: none;
      }

      :host([shadow="lg"]) > div {
        box-shadow: var(--sc-shadow-lg);
      }

      :host([cover]),
      :host([cover]) > div,
      :host([cover]) img {
        position: absolute !important;
        left: 0 !important;
        top: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        height: 100% !important;
        width: 100% !important;
      }
    `];qe([m({type:String})],Ee.prototype,"rounded",void 0);qe([m({type:String})],Ee.prototype,"src",void 0);qe([m({type:String})],Ee.prototype,"alt",void 0);qe([m({type:String})],Ee.prototype,"loading",void 0);qe([m({type:String})],Ee.prototype,"ratio",void 0);qe([m({type:String})],Ee.prototype,"objectPosition",void 0);qe([m({type:String})],Ee.prototype,"imageRendering",void 0);qe([m({type:String,reflect:!0})],Ee.prototype,"shadow",void 0);qe([m({type:Boolean,reflect:!0})],Ee.prototype,"cover",void 0);Ee=qe([B("sonic-image")],Ee);try{customElements.define("sonic-image",Ee)}catch{}const yh=N`

  :host([align="left"]) .sonic-loader--inline {
    margin-left:0;
  }
  
  :host([align="right"]) .sonic-loader--inline {
    margin-left:auto;
    margin-right:0;
  }
  .sonic-loader--inline {
    display:block;
    position: relative;
    width: 80px;
    height: 80px;
    margin:auto;
    z-index:20;
  }
  .sonic-loader--inline  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background:var(--sc-loader-bg);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .sonic-loader--inline  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .sonic-loader--inline  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .sonic-loader--inline  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .sonic-loader--inline div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

`,xh=N`

  @keyframes sonic-loader--fixed {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    70% {
      opacity:90%;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  .sonic-loader--fixed {
    position: fixed;
    top:50%;
    left:50%;
    transform:transateY(-50%) translateX(-50%);
    z-index:999;
  }
  
  .sonic-loader--fixed > div:nth-child(2) {
    animation-delay: -0.5s;
  }
  .sonic-loader--fixed > div:nth-child(3) {
    animation-delay: -0.2s;
  }

  .sonic-loader--fixed > div:nth-child(4) {
    display:none !important;
  }
  .sonic-loader--fixed > div {
    background-color: var(--sc-loader-bg);
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    margin: 2px;
    animation-fill-mode: both;
    position: absolute;
    top: 0px;
    opacity: 0;
    margin: 0;
    top: -2.5rem;
    left: -2.5rem;
    width: 5rem;
    height: 5rem;
    animation: sonic-loader--fixed 1s 0s linear infinite;
  }
  
`;var ps=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},Fe;let Rt=Fe=class extends q{constructor(){super(...arguments),this.mode="fixed"}static show(e){Fe.loader||(Fe.loader=document.createElement("sonic-loader"));let t=Fe.loader;e||(e={});let r=e;for(let o in r)t.setAttribute(o,r[o]);e.container||(e.container=document.querySelector("sonic-theme")||document.body,e.mode="fixed"),e.container.appendChild(t),Fe.callCounter++}static hide(){Fe.callCounter--,!(Fe.callCounter>0)&&Fe.loader&&Fe.loader.remove()}render(){return T`<div class="sonic-loader sonic-loader--${this.mode} ">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>`}};Rt.styles=[yh,xh,N`
      :host {
        --sc-loader-bg: var(--sc-primary, currentColor);
        pointer-events: none;
      }

      .sonic-loader {
        opacity: 0;
        animation: showLoader 0.5s 0.5s forwards;
      }
      .sonic-loader--inline {
        animation-delay: 0s;
      }

      @keyframes showLoader {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    `];Rt.callCounter=0;ps([m({type:String})],Rt.prototype,"mode",void 0);Rt=Fe=ps([B("sonic-loader")],Rt);try{customElements.define("sonic-loader",Rt)}catch{}var ot=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let je=class extends q{constructor(){super(...arguments),this.icon={},this.taxonomy=[],this.separator=",&nbsp;",this.key="",this.type="default",this.variant="default",this.size="md"}render(){if(!this.taxonomy)return K;let e=this.key+"_display",t=this.taxonomy.filter(r=>r!=null&&(r[e]===!0||r[e]=="1"||!r.hasOwnProperty(e)));return t.length===0?(this.style.display="none",K):(this.style.removeProperty("display"),T`
      <sonic-badge type=${this.type} variant=${this.variant} size=${this.size}>
        <sonic-icon slot="prefix" name=${this.icon.name} prefix=${this.icon.prefix}></sonic-icon>
        <span class="taxonomy-list">
          ${Hi(t,r=>r[this.key+"_id"],r=>T`<span> ${r[this.key+"_name"]}</span
                ><span class="sonic-taxonomy-separator">${Dr(this.separator)}</span>`)}
        </span>
      </sonic-badge>
    `)}};je.styles=N`
    :host .sonic-taxonomy-separator:last-child {
      display: none;
    }

    .taxonomy-list {
      display: flex;
      flex-wrap: wrap;
    }
  `;ot([m({type:Object})],je.prototype,"icon",void 0);ot([m({type:Array})],je.prototype,"taxonomy",void 0);ot([m({type:String})],je.prototype,"separator",void 0);ot([m({type:String})],je.prototype,"key",void 0);ot([m({type:String,reflect:!0})],je.prototype,"type",void 0);ot([m({type:String,reflect:!0})],je.prototype,"variant",void 0);ot([m({type:String,reflect:!0})],je.prototype,"size",void 0);je=ot([B("sonic-taxonomy")],je);try{customElements.define("sonic-taxonomy",je)}catch{}var ft=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ie=class extends q{constructor(){super(...arguments),this.size="",this.direction="column",this.shadow="none",this.minWidth="0"}updated(e){super.updated(e),this._setChildrenSize()}_setChildrenSize(){this.size&&this.querySelectorAll("sonic-button, sonic-menu-item").forEach(r=>{r.hasAttribute("size")||r.setAttribute("size",this.size)}),this.querySelectorAll("sonic-divider").forEach(t=>{t.hasAttribute("size")||t.setAttribute("size","xs")})}render(){const e={minWidth:this.minWidth};return T`<menu part="menu" style=${Qt(e)}> <slot></slot></menu>`}};Ie.styles=[N`
      :host {
        display: block;
      }
      :host > menu {
        display: flex;
        flex-direction: column;
        border-radius: min(calc(var(--sc-btn-rounded) * 2), 0.4em);
        margin: 0;
        padding: 0.35em;
        gap: 0.15rem;
      }

      /*OMBRE*/
      :host([shadow]) > :not(slot),
      :host([shadow="md"]) > :not(slot),
      :host([shadow="true"]) > :not(slot) {
        box-shadow: var(--sc-shadow);
      }

      :host([shadow="sm"]) > :not(slot) {
        box-shadow: var(--sc-shadow-sm);
      }

      :host([shadow="none"]) > :not(slot) {
        box-shadow: none;
      }

      :host([shadow="lg"]) > :not(slot) {
        box-shadow: var(--sc-shadow-lg);
      }
    `];ft([m({type:String,reflect:!0})],Ie.prototype,"size",void 0);ft([m({type:String,reflect:!0})],Ie.prototype,"direction",void 0);ft([m({type:String,reflect:!0})],Ie.prototype,"shadow",void 0);ft([m({type:String})],Ie.prototype,"minWidth",void 0);ft([jr({slot:"main",selector:"*"})],Ie.prototype,"menuChildren",void 0);ft([_e({slot:"main",flatten:!0})],Ie.prototype,"menuNodes",void 0);Ie=ft([B("sonic-menu")],Ie);try{customElements.define("sonic-menu",Ie)}catch{}var _h=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ti=class extends ce{constructor(){super()}connectedCallback(){this.hasAttribute("variant")||(this.variant="ghost"),this.hasAttribute("type")||(this.type="primary"),this.hasAttribute("shape")||(this.shape="block"),this.hasAttribute("textAlign")||(this.textAlign="left"),super.connectedCallback()}};Ti=_h([B("sonic-menu-item")],Ti);try{customElements.define("sonic-menu-item",Ti)}catch{}var lr=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let it=class extends q{constructor(){super(...arguments),this.size="md",this.direction="column",this.icon=!1,this._resizeController=new us(this,{})}updated(e){super.updated(e),this._setChildrenSize()}firstUpdated(){const e=this.menu;let t=!1,r,o;e.addEventListener("mousedown",i=>{t=!0,e.classList.add("active"),r=i.pageX-e.offsetLeft,o=e.scrollLeft}),e.addEventListener("mouseleave",()=>{t=!1,e.classList.remove("active")}),e.addEventListener("mouseup",()=>{t=!1,e.classList.remove("active")}),e.addEventListener("mousemove",i=>{if(!t)return;i.preventDefault();const d=(i.pageX-e.offsetLeft-r)*1.5;e.scrollLeft=o-d})}_setChildrenSize(){this.size&&this.querySelectorAll("sonic-button, sonic-tabs-item").forEach(t=>{t.hasAttribute("size")||t.setAttribute("size",this.size)})}render(){return T`<menu part="tabs"
      ><slot></slot>
      <sonic-pop class="flex"  >
        <sonic-tab >
          <sonic-icon prefix="iconoir" class="my-auto" size="xl" name="more-vert"></sonic-icon>
        </sonic-tab>
        <sonic-menu slot="content"></sonic-menu>
      <sonic-pop>
    </menu>`}};it.styles=[lh,N`
      :host {
        display: block;
      }

      menu::-webkit-scrollbar {
        display: none;
      }

      menu {
        -ms-overflow-style: none;
        scrollbar-width: none;
        overflow-x: scroll;
        display: flex;
        max-width: 100%;
        flex-direction: row;
        padding: 0.5em;
        margin: 0;
        gap: 0.15rem;
      }

      :host([icon]) {
        --sc-icon-size: 1.6em;
      }

      :host([icon]) ::slotted(sonic-tab) {
        font-size: 85em;
        border: 7px solid;
        text-transform: uppercase;
      }
    `];lr([m({type:String,reflect:!0})],it.prototype,"size",void 0);lr([m({type:String,reflect:!0})],it.prototype,"direction",void 0);lr([m({type:Boolean,reflect:!0})],it.prototype,"icon",void 0);lr([nt("menu")],it.prototype,"menu",void 0);it=lr([B("sonic-tabs")],it);try{customElements.define("sonic-tabs",it)}catch{}var $h=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let zr=class extends ce{constructor(){super()}connectedCallback(){this.hasAttribute("variant")||(this.variant="ghost"),super.connectedCallback()}};zr.styles=[ce.styles,N`
      :host {
        --sc-tab-white-space : nowrap;
        --sc-tab-flex-wrap : nowrap ;
        flex-wrap:nowrap;
        scroll-snap-align: start;
      }

      button {
        flex-wrap:var(--sc-tab-flex-wrap) !important;
        white-space:var(--sc-tab-white-space);
      }

    `];zr=$h([B("sonic-tab")],zr);try{customElements.define("sonic-tab",zr)}catch{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=(s,e)=>{var t,r;const o=s._$AN;if(o===void 0)return!1;for(const i of o)(r=(t=i)._$AO)===null||r===void 0||r.call(t,e,!1),Gt(i,e);return!0},Tr=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},fs=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),Ah(e)}};function kh(s){this._$AN!==void 0?(Tr(this),this._$AM=s,fs(this)):this._$AM=s}function Ch(s,e=!1,t=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let i=t;i<r.length;i++)Gt(r[i],!1),Tr(r[i]);else r!=null&&(Gt(r,!1),Tr(r));else Gt(this,s)}const Ah=s=>{var e,t,r,o;s.type==Mt.CHILD&&((e=(r=s)._$AP)!==null&&e!==void 0||(r._$AP=Ch),(t=(o=s)._$AQ)!==null&&t!==void 0||(o._$AQ=kh))};class Sh extends or{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),fs(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),t&&(Gt(this,e),Tr(this))}setValue(e){if(fh(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Ph=new WeakMap;let Vo=0;const Ai=new Map,Wo=new WeakSet,Yo=()=>new Promise(s=>requestAnimationFrame(s)),Eh=[{opacity:0}],zh=[{opacity:0},{opacity:1}],Go=(s,e)=>{const t=s-e;return t===0?void 0:t},Xo=(s,e)=>{const t=s/e;return t===1?void 0:t},Si={left:(s,e)=>{const t=Go(s,e);return{value:t,transform:t&&`translateX(${t}px)`}},top:(s,e)=>{const t=Go(s,e);return{value:t,transform:t&&`translateY(${t}px)`}},width:(s,e)=>{const t=Xo(s,e);return{value:t,transform:t&&`scaleX(${t})`}},height:(s,e)=>{const t=Xo(s,e);return{value:t,transform:t&&`scaleY(${t})`}}},Th={duration:333,easing:"ease-in-out"},Oh=["left","top","width","height","opacity","color","background"],Zo=new WeakMap;class Lh extends Sh{constructor(e){if(super(e),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,e.type===Mt.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var e;(e=this.resolveFinished)===null||e===void 0||e.call(this),this.finished=new Promise(t=>{this.h=t})}async resolveFinished(){var e;(e=this.h)===null||e===void 0||e.call(this),this.h=void 0}render(e){return K}getController(){return Ph.get(this.l)}isDisabled(){var e;return this.options.disabled||((e=this.getController())===null||e===void 0?void 0:e.disabled)}update(e,[t]){var r;const o=this.l===void 0;return o&&(this.l=(r=e.options)===null||r===void 0?void 0:r.host,this.l.addController(this),this.element=e.element,Zo.set(this.element,this)),this.optionsOrCallback=t,(o||typeof t!="function")&&this.u(t),this.render(t)}u(e){var t,r;e=e!=null?e:{};const o=this.getController();o!==void 0&&((e=Pe(Pe({},o.defaultOptions),e)).keyframeOptions=Pe(Pe({},o.defaultOptions.keyframeOptions),e.keyframeOptions)),(t=(r=e).properties)!==null&&t!==void 0||(r.properties=Oh),this.options=e}v(){const e={},t=this.element.getBoundingClientRect(),r=getComputedStyle(this.element);return this.options.properties.forEach(o=>{var i;const l=(i=t[o])!==null&&i!==void 0?i:Si[o]?void 0:r[o],d=Number(l);e[o]=isNaN(d)?l+"":d}),e}p(){let e,t=!0;return this.options.guard&&(e=this.options.guard(),t=((r,o)=>{if(Array.isArray(r)){if(Array.isArray(o)&&o.length===r.length&&r.every((i,l)=>i===o[l]))return!1}else if(o===r)return!1;return!0})(e,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&t&&this.element.isConnected,this.o&&(this.m=Array.isArray(e)?Array.from(e):e),this.o}hostUpdate(){var e;typeof this.optionsOrCallback=="function"&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=(e=this.t)!==null&&e!==void 0?e:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let e;this.prepare(),await Yo;const t=this.A(),r=this._(this.options.keyframeOptions,t),o=this.v();if(this.g!==void 0){const{from:i,to:l}=this.j(this.g,o,t);this.log("measured",[this.g,o,i,l]),e=this.calculateKeyframes(i,l)}else{const i=Ai.get(this.options.inId);if(i){Ai.delete(this.options.inId);const{from:l,to:d}=this.j(i,o,t);e=this.calculateKeyframes(l,d),e=this.options.in?[Pe(Pe({},this.options.in[0]),e[0]),...this.options.in.slice(1),e[1]]:e,Vo++,e.forEach(x=>x.zIndex=Vo)}else this.options.in&&(e=[...this.options.in,{}])}this.animate(e,r)}resetStyles(){var e;this.S!==void 0&&(this.element.setAttribute("style",(e=this.S)!==null&&e!==void 0?e:""),this.S=void 0)}commitStyles(){var e,t;this.S=this.element.getAttribute("style"),(e=this.webAnimation)===null||e===void 0||e.commitStyles(),(t=this.webAnimation)===null||t===void 0||t.cancel()}reconnected(){}async disconnected(){var e;if(!this.o||(this.options.id!==void 0&&Ai.set(this.options.id,this.g),this.options.out===void 0))return;if(this.prepare(),await Yo(),(e=this.t)===null||e===void 0?void 0:e.isConnected){const r=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,r),this.options.stabilizeOut){const o=this.v();this.log("stabilizing out");const i=this.g.left-o.left,l=this.g.top-o.top;getComputedStyle(this.element).position!=="static"||i===0&&l===0||(this.element.style.position="relative"),i!==0&&(this.element.style.left=i+"px"),l!==0&&(this.element.style.top=l+"px")}}const t=this._(this.options.keyframeOptions);await this.animate(this.options.out,t),this.element.remove()}prepare(){this.createFinished()}start(){var e,t;(t=(e=this.options).onStart)===null||t===void 0||t.call(e,this)}didFinish(e){var t,r;e&&((r=(t=this.options).onComplete)===null||r===void 0||r.call(t,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}A(){const e=[];for(let t=this.element.parentNode;t;t=t==null?void 0:t.parentNode){const r=Zo.get(t);r&&!r.isDisabled()&&r&&e.push(r)}return e}get isHostRendered(){const e=Wo.has(this.l);return e||this.l.updateComplete.then(()=>{Wo.add(this.l)}),e}_(e,t=this.A()){const r=Pe({},Th);return t.forEach(o=>Object.assign(r,o.options.keyframeOptions)),Object.assign(r,e),r}j(e,t,r){e=Pe({},e),t=Pe({},t);const o=r.map(d=>d.animatingProperties).filter(d=>d!==void 0);let i=1,l=1;return o!==void 0&&(o.forEach(d=>{d.width&&(i/=d.width),d.height&&(l/=d.height)}),e.left!==void 0&&t.left!==void 0&&(e.left=i*e.left,t.left=i*t.left),e.top!==void 0&&t.top!==void 0&&(e.top=l*e.top,t.top=l*t.top)),{from:e,to:t}}calculateKeyframes(e,t,r=!1){var o;const i={},l={};let d=!1;const x={};for(const y in t){const P=e[y],C=t[y];if(y in Si){const S=Si[y];if(P===void 0||C===void 0)continue;const R=S(P,C);R.transform!==void 0&&(x[y]=R.value,d=!0,i.transform=`${(o=i.transform)!==null&&o!==void 0?o:""} ${R.transform}`)}else P!==C&&P!==void 0&&C!==void 0&&(d=!0,i[y]=P,l[y]=C)}return i.transformOrigin=l.transformOrigin=r?"center center":"top left",this.animatingProperties=x,d?[i,l]:void 0}async animate(e,t=this.options.keyframeOptions){this.start(),this.frames=e;let r=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=e=this.options.onFrames(this),this.log("modified frames",e)),e!==void 0)){this.log("animate",[e,t]),r=!0,this.webAnimation=this.element.animate(e,t);const o=this.getController();o==null||o.add(this);try{await this.webAnimation.finished}catch{}o==null||o.remove(this)}return this.didFinish(r),r}isAnimating(){var e,t;return((e=this.webAnimation)===null||e===void 0?void 0:e.playState)==="running"||((t=this.webAnimation)===null||t===void 0?void 0:t.pending)}log(e,t){this.shouldLog&&!this.isDisabled()&&console.log(e,this.options.id,t)}}const kr=nr(Lh);var vs=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let er=class extends q{firstUpdated(){var e;(e=this.buttons)===null||e===void 0||e.forEach(t=>{t.addEventListener("click",()=>{if(t.getAttribute("hideModal")!="false"){const r=this.closest("sonic-modal");r==null||r.hide()}})})}render(){return T`<slot></slot>`}};er.styles=[N`
      :host {
        display: flex;
        gap: 0.5rem;
        margin-top: auto;
        padding-top: 1rem;
      }
    `];vs([jr({selector:"sonic-button"})],er.prototype,"buttons",void 0);er=vs([B("sonic-modal-actions")],er);try{customElements.define("sonic-modal-actions",er)}catch{}var Rh=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Or=class extends q{render(){return T`<slot></slot>`}};Or.styles=[N`
      :host {
        font-weight: bold;
        font-size: 1.5rem;
        display: block;
        line-height: var(--sc-headings-line-height);
        font-family: var(--sc-headings-font-family);
      }
    `];Or=Rh([B("sonic-modal-title")],Or);try{customElements.define("sonic-modal-title",Or)}catch{}var Nh=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Lr=class extends q{render(){return T`<slot></slot>`}};Lr.styles=[N`
      :host {
        font-size: 1.1rem;
        display: block;
        text-transform: uppercase;
        line-height: var(--sc-headings-line-height);
        font-family: var(--sc-headings-font-family);
      }
    `];Lr=Nh([B("sonic-modal-subtitle")],Lr);try{customElements.define("sonic-modal-subtitle",Lr)}catch{}var jh=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Rr=class extends q{render(){return T`<slot></slot>`}};Rr.styles=[N`
      :host {
        display: block;
      }
    `];Rr=jh([B("sonic-modal-content")],Rr);try{customElements.define("sonic-modal-content",Rr)}catch{}var Mh=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Nr=class extends q{render(){return T`<sonic-button shape="circle" variant="ghost" @click=${this.handleClick}
      ><sonic-icon prefix="iconoir" name="cancel" size="lg"></sonic-icon
    ></sonic-button>`}handleClick(){this.closest("sonic-modal").hide()}};Nr.styles=[N`
      :host {
        position: absolute;
        right: 0.6rem;
        top: 0.6rem;
        z-index: 20;
      }
    `];Nr=Mh([B("sonic-modal-close")],Nr);try{customElements.define("sonic-modal-close",Nr)}catch{}var Ae=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ve=class extends Xe(q){constructor(){super(...arguments),this.hideOnOverlayClick=!0,this.hideOnEscape=!0,this.align="center",this.padding="var(--sc-modal-py) var(--sc-modal-px)",this.maxWidth="var(--sc-modal-max-w) ",this.maxHeight="var(--sc-modal-max-h) ",this.width="100%",this.height="auto",this.fullScreen=!1,this.visible=!1}static create(e){const t=document.createElement("sonic-modal");return t.innerHTML=`<sonic-modal-close></sonic-modal-close><sonic-modal-content>${e.content}</sonic-modal-content>`||"",(document.querySelector("sonic-theme")||document.body).appendChild(t),t.show(),t}connectedCallback(){super.connectedCallback()}updated(){const e=this;document.addEventListener("keydown",this.handleEscape),e.closeBtn.forEach(t=>{t.addEventListener("click",function(){e.hide()},{once:!0})})}render(){if(this.visible==!1)return K;this.handleFullsceen();const e={padding:this.padding,maxWidth:this.maxWidth,maxHeight:this.maxHeight,width:this.width,height:this.height,borderRadius:this.fullScreen?"0":"var(--sc-modal-rounded)"},t={maxWidth:this.maxWidth,maxHeight:this.maxHeight,width:this.width,height:this.height,borderRadius:this.fullScreen?"0":"var(--sc-modal-rounded)"};return T`<div
        class="modal-wrapper"
        style=${Qt(t)}
        ${kr({out:Eh})}
        tabindex="0"
      >
        <div
          part="modal"
          class="modal"
          style=${Qt(e)}
          ${kr({keyframeOptions:{duration:400,easing:"cubic-bezier(0.250, 0.250, 0.420, 1.225)"},in:[{transform:"translateY(25%) scale(1)",boxShadow:"0 0 0 rgba(0,0,0,0)",opacity:0}],out:[{transform:"translateY(20%) scale(1)",boxShadow:"0 0 0 rgba(0,0,0,0)",opacity:0}]})}
        >
          <div class="modal-content">
            <slot></slot>
          </div>
        </div>
      </div>

      <div
        class="overlay"
        @click="${this.hideOnOverlayClick?this.hide:""}"
        ${kr({keyframeOptions:{duration:500},in:zh,out:[{opacity:0,pointerEvents:"none"}]})}
      ></div>`}show(){var e,t;this.visible=!0,(e=this.modalElement)===null||e===void 0||e.setAttribute("tabindex","0"),(t=this.modalElement)===null||t===void 0||t.focus(),this.dispatchEvent(new CustomEvent("show"))}hide(){var e;this.visible=!1,(e=this.modalElement)===null||e===void 0||e.setAttribute("tabindex","-1"),this.dispatchEvent(new CustomEvent("hide"))}dispose(){this.hide(),this.remove()}handleEscape(e){e.key==="Escape"&&[...document.querySelectorAll("sonic-modal")].forEach(r=>{this.hideOnEscape==!0&&r.hide()})}handleFullsceen(){this.fullScreen&&(this.width="100%",this.height="100%",this.maxWidth="none",this.maxHeight="none")}};ve.styles=[N`
      :host {
        --sc-modal-py: 2.5rem;
        --sc-modal-px: 1.5rem;
        --sc-modal-content: var(--sc-base-content);
        --sc-modal-bg: var(--sc-base);
        --sc-modal-max-w: min(100vw, 64ch);
        --sc-modal-max-h: 80vh;
        --sc-modal-scrollbar-bg: var(--sc-base-300);
        --sc-modal-rounded: var(--sc-rounded-lg);
      }

      * {
        box-sizing: border-box;
      }

      .modal-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 990;
        text-align: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: flex;
        pointer-events: none;
      }

      /*SCROLLBAR*/
      .modal-content::-webkit-scrollbar-track {
        z-index: 20;
        background-color: transparent;
      }

      .modal-content::-webkit-scrollbar {
        width: 0.9rem;
        background-color: transparent;
      }

      .modal-content::-webkit-scrollbar-thumb {
        background-color: var(--sc-modal-scrollbar-bg);
        border: 0.3rem solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: var(--sc-modal-rounded);
      }
      .modal-content {
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        min-height: 10rem;
      }

      .modal {
        background: var(--sc-base);
        width: 100%;
        box-shadow: var(--sc-shadow-lg);
        border-radius: var(--sc-modal-rounded) var(--sc-modal-rounded) 0 0;
        pointer-events: auto;
        overflow: hidden;
        transform: translateZ(0);
      }

      .overlay {
        background: var(--sc-base-200);
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 900;
        opacity: 0.8;
        position: fixed;
      }

      ::slotted(sonic-modal-title) {
        margin-bottom: 1rem;
      }

      ::slotted(sonic-modal-subtitle) {
        margin-top: -0.45rem;
        margin-bottom: 1rem;
      }

      @media (max-width: 767.5px) {
        .modal-wrapper,
        .modal {
          max-width: none !important;
          width: 100% !important;
        }
      }

      @media (min-width: 768px) {
        .modal-wrapper {
          top: 50%;
          left: 50%;
          bottom: auto;
          right: auto;
          transform: translateX(-50%) translateY(-50%);
        }

        .modal {
          top: 50%;
          bottom: auto;
          right: auto;
          border-radius: var(--sc-modal-rounded);
        }
      }

      :host([align="left"]) .modal-content {
        text-align: left;
        align-items: flex-start;
      }

      :host([align="right"]) .modal-content {
        text-align: right;
        align-items: flex-end;
      }

      /* Border radius */
      :host([rounded="none"]) modal {
        --sc-img-radius: 0 !important;
      }
    `];Ae([m({type:Boolean,reflect:!0})],ve.prototype,"hideOnOverlayClick",void 0);Ae([m({type:Boolean,reflect:!0})],ve.prototype,"hideOnEscape",void 0);Ae([m({type:String,reflect:!0})],ve.prototype,"align",void 0);Ae([m({type:String})],ve.prototype,"padding",void 0);Ae([m({type:String})],ve.prototype,"maxWidth",void 0);Ae([m({type:String})],ve.prototype,"maxHeight",void 0);Ae([m({type:String})],ve.prototype,"width",void 0);Ae([m({type:String})],ve.prototype,"height",void 0);Ae([m({type:Boolean,reflect:!0})],ve.prototype,"fullScreen",void 0);Ae([m({type:Boolean,reflect:!0})],ve.prototype,"visible",void 0);Ae([nt(".modal-wrapper")],ve.prototype,"modalWrapper",void 0);Ae([nt(".modal")],ve.prototype,"modalElement",void 0);Ae([jr({selector:"sonic-modal-close"})],ve.prototype,"closeBtn",void 0);ve=Ae([B("sonic-modal")],ve);if(typeof window!="undefined"){let s=window;s.SonicModal=ve}try{customElements.define("sonic-modal",ve)}catch{}var Ft=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Dh={warning:"warning-circled-outline",success:"check-circled-outline",error:"warning-circled-outline",info:"info-empty",default:"info-empty"};let Ye=class extends q{constructor(){super(...arguments),this.label="",this.text="",this.size="md",this.background=!1,this.status="default"}render(){return T`<div part="alert" class="alert">
                  <div>
                    ${this.status&&T`<sonic-icon prefix="iconoir" name=${Dh[this.status]}></sonic-icon>`}
                  </div>
                  <div >
                    ${this.label?T`<span class="alert-title">${this.label} :</span>`:K}
                    ${this.text} <slot><slot>
                  </div>
                </div>`}};Ye.styles=[N`
      :host {
        --sc-alert-color: inherit;
        --sc-alert-rounded: var(--sc-rounded);
        --sc-alert-fw: var(--sc-font-weight-base);
        --sc-alert-fst: var(--sc-font-style-base);
        --sc-alert-fs: 1rem;
        --sc-alert-title-fw: bold;

        display: block;
        font-size: var(--sc-alert-fs);
        font-weight: var(--sc-alert-fw);
        font-style: var(--sc-alert-fst);
      }

      .alert {
        color: var(--sc-alert-color);
        position: relative;
        display: flex;
        gap: 0.4em;
        line-height: 1.2;
        border-radius: var(--sc-alert-rounded);
      }

      .alert-title {
        font-weight: var(--sc-alert-title-fw);
      }

      :host([status="warning"]) .alert {
        --sc-alert-color: var(--sc-warning);
      }

      :host([status="error"]) .alert {
        --sc-alert-color: var(--sc-danger);
      }
      :host([status="info"]) .alert {
        --sc-alert-color: var(--sc-info);
      }
      :host([status="success"]) .alert {
        --sc-alert-color: var(--sc-success);
      }

      /*background*/
      :host([background]) .alert {
        background: var(--sc-base);
        padding: 0.8em 1.15em;
      }
      :host([background]) .alert:before {
        background-color: currentColor;
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        opacity: 0.08;
        border-radius: var(--sc-alert-rounded);
      }

      /*SIZE*/
      :host([size="xs"]) {
        --sc-alert-fs: 0.75rem;
      }
      :host([size="sm"]) {
        --sc-alert-fs: 0.85rem;
      }
      :host([size="lg"]) {
        --sc-alert-fs: 1.2rem;
      }

      /*Rounded*/
      :host([size="xs"]) .alert {
        --sc-alert-rounded: var(--sc-rounded-sm);
      }
      :host([size="sm"]) .alert {
        --sc-alert-rounded: var(--sc-rounded-sm);
      }
    `];Ft([m({type:String})],Ye.prototype,"label",void 0);Ft([m({type:String})],Ye.prototype,"text",void 0);Ft([m({type:String,reflect:!0})],Ye.prototype,"size",void 0);Ft([m({type:Boolean,reflect:!0})],Ye.prototype,"background",void 0);Ft([m({type:String,reflect:!0})],Ye.prototype,"status",void 0);Ye=Ft([B("sonic-alert")],Ye);try{customElements.define("sonic-alert",Ye)}catch{}var bs=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Fh={warning:"warning-circled-outline",success:"check-circled-outline",error:"warning-circled-outline",info:"info-empty"};let tr=class extends q{constructor(){super(...arguments),this.toasts=[]}render(){var e;if(!this.toasts)return K;let t=((e=this.toasts[0])===null||e===void 0?void 0:e.marginTop)||"0";return T`<div
      style=${"margin-top:"+t}
      class="sonic-toast-area ${window.parent==window?"fixed-area":""}"
    >
      ${Hi(this.toasts,r=>r.id,r=>T`
          <div
            class="sonic-toast ${r.status} ${r.ghost?"ghost":""}"
            ${kr({keyframeOptions:{duration:250,easing:"cubic-bezier(0.250, 0.250, 0.420, 1.225)"},in:[{transform:"translateY(0) scale(1.25)",boxShadow:"0 0 0 rgba(0,0,0,0)",opacity:0}],out:[{transform:"scale(.90) ",opacity:0,duration:3e3,easing:"ease-in-out"}],stabilizeOut:!0})}
          >
            ${r.status&&T`<sonic-icon prefix="iconoir" name=${Fh[r.status]} class="sonic-toast-icon" size="2xl"></sonic-icon>`}

            <div class="sonic-toast-text">
              ${r.title?T`<div class="sonic-toast-title">${r.title}</div>`:""}
              ${r.text?Dr(r.text):""}
              <slot></slot>
            </div>
            
            ${T`<button class="sonic-toast-close" @click=${()=>this.removeItem(r)}>
                  <sonic-icon prefix="iconoir" name="cancel"></sonic-icon>
                </button>`}
            ${r.preserve?"":this.autoRemoveItem(r)}
          </div>
        `)}
    </div>`}static removeAll(){let e=document.querySelector("sonic-toast");!e||(e.toasts=e.toasts.filter(t=>t.ghost))}static add(e){if(!document.querySelector("sonic-toast")){let i=document.createElement("sonic-toast");(document.querySelector("sonic-theme")||document.body).prepend(i)}let t=document.querySelector("sonic-toast");const o={id:new Date().valueOf(),text:e.text,title:e.title,status:e.status,preserve:e.preserve,ghost:e.ghost,marginTop:e.marginTop};if(t.toasts.length>0){let i=Object.assign({},o),l=Object.assign({},t.toasts[t.toasts.length-1]);if(i.id=l.id=0,!o.preserve&&Re.shallowEqual(i,l))return null}return t.toasts=[...t.toasts,o],o}removeItem(e){this.toasts=this.toasts.filter(t=>t!=e)}autoRemoveItem(e){setTimeout(()=>{this.removeItem(e)},4200)}};tr.styles=[N`
      * {
        box-sizing: border-box;
      }
      :host {
        display: contents;
      }

      .sonic-toast-area {
        pointer-events: none;
        width: calc(100% - 2.5rem);
        max-width: 40ch;
      }

      .fixed-area {
        position: fixed;
        top: 1.25rem;
        right: 1.25rem;
        z-index: 999;
      }

      .sonic-toast {
        --sc-toast-status-color: transparent;
        position: relative;
        pointer-events: auto;
        background: var(--sc-base-800);
        color: var(--sc-base);
        box-shadow: var(--sc-shadow);
        border-radius: var(--sc-rounded);
        padding: 1em 2rem 1em 1em;
        font-size: 0.85em;
        line-height: 1.25;
        display: flex;
        gap: 0.5rem;
        max-height: 10rem;
        overflow: auto;
      }

      .sonic-toast + .sonic-toast {
        margin-top: 1rem;
      }

      .sonic-toast-text {
        align-self: center;
        margin-top: auto;
        margin-bottom: auto;
      }

      ::slotted(a),
      .sonic-toast-text a {
        color: inherit;
        text-decoration: underline;
      }

      /*BUTTON CLOSE*/
      .sonic-toast-close {
        all: unset;
        position: absolute;
        pointer-events:initial;
        right: 0.5em;
        top: 0.5em;
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        text-align: center;
        opacity: 0.5;
        background: rgba(0, 0, 0, 0);
      }

      .sonic-toast-close:focus,
      .sonic-toast-close:hover {
        opacity: 1;
        background: rgba(0, 0, 0, 0.075);
      }

      .sonic-toast-close svg {
        width: 1rem;
        height: 1rem;
        object-fit: contain;
        object-position: center center;
      }

      /*Title*/
      .sonic-toast-title {
        font-weight: bold;
        margin-bottom: 0.25em;
      }

      /*STATUS*/
      .success {
        --sc-toast-status-color: var(--sc-success);
      }

      .error {
        --sc-toast-status-color: var(--sc-danger);
      }

      .warning {
        --sc-toast-status-color: var(--sc-warning);
      }

      .info {
        --sc-toast-status-color: var(--sc-info);
      }

      .success,
      .error,
      .info,
      .warning {
        border-top: 2px solid var(--sc-toast-status-color, curentColor);
      }

      .info .sonic-toast-icon,
      .error .sonic-toast-icon,
      .success .sonic-toast-icon,
      .warning .sonic-toast-icon {
        color: var(--sc-toast-status-color, curentColor);
      }

      .ghost {
        opacity: 0.85;
        pointer-events: none;
      }
    `];bs([m({type:Array})],tr.prototype,"toasts",void 0);tr=bs([B("sonic-toast")],tr);if(typeof window!="undefined"){let s=window;s.SonicToast=tr}var Vi=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let rr=class extends q{constructor(){super(...arguments),this.tooltipText="",this.disabled=!1}render(){let e=this.disabled||this.tooltipText==""?"disabled":"";return T`<div
      data-tooltip-text="${this.tooltipText.trim().replace("&nbsp;"," ")}"
      class="tooltip ${e}"
    >
      <slot></slot>
    </div>`}};rr.styles=[N`
      .tooltip {
        position: relative;
        display: flex;
        align-items: center;
        text-align: center;
      }
      .tooltip:before {
        position: absolute;
        content: attr(data-tooltip-text);
        font-size: 0.85rem;
        display: block;
        opacity: 0;
        pointer-events: none;
        bottom: calc(100% + 0.25rem);
        left: 50%;
        transform: translateX(-50%);
        background: var(--sc-base-content, #111827);
        padding: 0.25rem;
        border-radius: 0.25rem;
        color: var(--sc-base, #fff);
        z-index: 999;
        display: none;
        line-height: 1.1;
        width: max-content;
        max-width: 20rem;
      }
      .tooltip:not(.disabled):hover:before {
        opacity: 1;
        display: block;
      }
    `];Vi([m({type:String})],rr.prototype,"tooltipText",void 0);Vi([m({type:Boolean})],rr.prototype,"disabled",void 0);rr=Vi([B("sonic-tooltip")],rr);var vt=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},ht;let Me=ht=class extends q{constructor(){super(...arguments),this.open=!1,this.toggle="true",this.shadow="lg",this.placement="bottom",this.positioningRuns=!1,this.lastContentX=Number.NaN,this.lastContentY=Number.NaN}runPositioning(){!this.positioningRuns||(this.positioningRuns=!0,this._setUpMenu(this.placement),window.requestAnimationFrame(()=>this.runPositioning()))}_toggle(e){this.open&&this.toggle=="false"||e.type=="keydown"&&(e.key!="ArrowDown"||this.open)||(this.open=!this.open,this.open?this._show():this._hide())}_show(){this.open=!0,this.popContent.setAttribute("tabindex","0"),this.popBtn&&this.popContent&&!this.positioningRuns&&(this.positioningRuns=!0,this.lastContentX=Number.NaN,this.lastContentY=Number.NaN,this.runPositioning())}_hide(){this.open=!1,this.popContent.setAttribute("tabindex","-1"),this.positioningRuns=!1}_handleClosePop(e){let t=e.target;ht.pops.forEach(r=>{var o;const i=r.contains(t),l=(o=r.querySelector('[slot="content"]'))===null||o===void 0?void 0:o.contains(t),d=Fr.getAncestorAttributeValue(t,"data-on-select")==="keep";e.type=="pointerdown"&&i||e.type=="click"&&(i&&d||!l)||r._hide()})}connectedCallback(){super.connectedCallback(),ht.pops.size==0&&(document.addEventListener("pointerdown",this._handleClosePop),document.addEventListener("click",this._handleClosePop)),ht.pops.add(this)}disconnectedCallback(){super.disconnectedCallback(),ht.pops.delete(this),ht.pops.size==0&&(document.removeEventListener("pointerdown",this._handleClosePop),document.removeEventListener("click",this._handleClosePop))}_setUpMenu(e){var t;const r=(t=this.popContent)===null||t===void 0?void 0:t.getBoundingClientRect(),o=8,i=20,l=this.getBoundingClientRect();if(!this.offsetParent)return;let d=this.offsetParent.getBoundingClientRect(),x=l.left-d.left,y=l.top-d.top,P=x,C=y,S=y-r.height-o,R=x-r.width-2*o,L=x+l.width+2*o,w=y+l.height+o;switch(e){case"bottom":C=w;break;case"top":C=S;break;case"left":P=R;break;case"right":P=L;break}let F=window.innerWidth-L-d.left-r.width-i;F<0&&e==="right"&&(P=R),F<0&&["top","bottom"].includes(e)&&(P=Math.max(P+F,R+l.width)),-d.left-R>i&&e==="left"&&(P=L);let he=window.innerHeight-w-d.top-r.height-i;he<0&&e==="bottom"&&(C=S),he<0&&["left","right"].includes(e)&&(C=Math.max(C+he,S+l.height)),-d.top-S>-i&&e==="top"&&(C=w),this.lastContentX=P,this.lastContentY=C,Object.assign(this.popContent.style,{left:`${P}px`,top:`${C}px`})}render(){return T`
      <slot @click=${this._toggle} @keydown=${this._toggle} class="contents"></slot>
      <slot
        name="content"
        tabindex="-1"
        part="content"
        class="  
          ${this.open?"is-open":""}"
      ></slot>
    `}};Me.pops=new Set;Me.styles=[N`
      :host {
        display: inline-block;
        vertical-align: middle;
      }
      slot[name="content"] {
        background-color: var(--sc-base);
        position: absolute;
        z-index: 50;
        display: block;
        transform: translateY(1rem) scale(0.95);
        opacity: 0;
        pointer-events: none;
        transition: 0.2s ease;
        border-radius: min(calc(var(--sc-btn-rounded) * 2), 0.4em);
      }

      slot[name="content"].is-open {
        transform: translateY(0) scale(1);
        opacity: 1;
        pointer-events: auto;
        transition: 0.2s cubic-bezier(0.25, 0.25, 0.42, 1.225);
      }

      /*OMBRE*/
      :host([shadow]) slot[name="content"],
      :host([shadow="md"]) slot[name="content"],
      :host([shadow="true"]) slot[name="content"] {
        box-shadow: var(--sc-shadow);
      }

      :host([shadow="sm"]) slot[name="content"] {
        box-shadow: var(--sc-shadow-sm);
      }

      :host([shadow="none"]) slot[name="content"] {
        box-shadow: none;
      }

      :host([shadow="lg"]) slot[name="content"] {
        box-shadow: var(--sc-shadow-lg);
      }
    `];vt([xe()],Me.prototype,"open",void 0);vt([nt("slot:not([name=content])")],Me.prototype,"popBtn",void 0);vt([nt("slot[name=content]")],Me.prototype,"popContent",void 0);vt([m({type:String})],Me.prototype,"toggle",void 0);vt([m({type:String,reflect:!0})],Me.prototype,"shadow",void 0);vt([m({type:String})],Me.prototype,"placement",void 0);Me=ht=vt([B("sonic-pop")],Me);try{customElements.define("sonic-pop",Me)}catch{}var Ut=globalThis&&globalThis.__decorate||function(s,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,r);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ge=class extends q{constructor(){super(...arguments),this.label="",this.size="md",this.align="center"}firstUpdated(){var e,t;(this.label||((e=this.slotNodes)===null||e===void 0?void 0:e.length))&&((t=this.divider)===null||t===void 0||t.classList.add("has-text"))}render(){return T`<div part="divider">
      <span class="text">${this.label}<slot></slot></span>
    </div>`}};Ge.styles=[N`
      :host {
        --sc-divider-my: 0.5rem;
        --sc-divider-mx: 0;
        --sc-divider-border-width: min(2px, 0.15rem);
        --sc-divider-border-color: var(--sc-base-200);
        --sc-divider-border-style: solid;
        --sc-divider-color: var(--sc-base-500);
        --sc-divider-ff: var(--sc-font-family-base);
        --sc-divider-fs: 1rem;
        --sc-divider-fw: var(--sc-font-weight-base);
        --sc-divider-fst: var(--sc-font-style-base);

        margin: var(--sc-divider-my) var(--sc-divider-mx);
        font-size: var(--sc-divider-fs);
        font-style: var(--sc-divider-fst);
        font-family: var(--sc-divider-ff);
        font-weight: var(--sc-divider-fw);
        color: var(--sc-divider-color);
        display: block;
      }

      /*SIZE*/
      :host([size="xs"]) {
        --sc-divider-my: 0.5rem;
        --sc-divider-fs: 0.75rem;
      }

      :host([size="sm"]) {
        --sc-divider-my: 0.75rem;
        --sc-divider-fs: 0.85rem;
      }

      :host([size="md"]) {
        --sc-divider-my: 1.25rem;
      }

      :host([size="lg"]) {
        --sc-divider-my: 1.85rem;
      }

      :host([size="xl"]) {
        --sc-divider-my: 2.25rem;
      }

      :host([size="2xl"]) {
        --sc-divider-my: 3rem;
      }

      div {
        display: flex;
        align-items: center;
        width: 100%;
      }

      div:before {
        content: "";
        flex-grow: 1;
        border-top: var(--sc-divider-border-width) var(--sc-divider-border-style) var(--sc-divider-border-color);
        width: 100%;
      }

      div:after {
        content: "";
        flex-grow: 1;
        border-top: var(--sc-divider-border-width) var(--sc-divider-border-style) var(--sc-divider-border-color);
        width: 100%;
      }

      /*ALIGNEMENT*/
      :host([align="left"]) div:before {
        display: none;
      }

      :host([align="right"]) div:after {
        display: none;
      }

      /*TEXT*/
      .text {
        flex-shrink: 0;
        max-width: 80%;
      }

      .no-text .text {
        display: none;
      }

      .has-text {
        gap: 0.5rem;
      }
    `];Ut([_e()],Ge.prototype,"slotNodes",void 0);Ut([nt("div")],Ge.prototype,"divider",void 0);Ut([m({type:String})],Ge.prototype,"label",void 0);Ut([m({type:String,reflect:!0})],Ge.prototype,"size",void 0);Ut([m({type:String,reflect:!0})],Ge.prototype,"align",void 0);Ge=Ut([B("sonic-divider")],Ge);try{customElements.define("sonic-divider",Ge)}catch{}var Uh=(()=>`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-0{top:0px}.left-0{left:0px}.right-1{right:.25rem}.bottom-1{bottom:.25rem}.bottom-4{bottom:1rem}.right-4{right:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-0{z-index:0}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-auto{margin-top:auto;margin-bottom:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.mb-3{margin-bottom:.75rem}.mb-1{margin-bottom:.25rem}.mt-8{margin-top:2rem}.mb-2{margin-bottom:.5rem}.mt-4{margin-top:1rem}.mt-2{margin-top:.5rem}.mb-4{margin-bottom:1rem}.mt-5{margin-top:1.25rem}.mt-1{margin-top:.25rem}.mr-3{margin-right:.75rem}.mr-2{margin-right:.5rem}.mr-4{margin-right:1rem}.mt-3{margin-top:.75rem}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.ml-auto{margin-left:auto}.mb-\\[2em\\]{margin-bottom:2em}.mb-20{margin-bottom:5rem}.mr-\\[\\.25em\\]{margin-right:.25em}.mt-12{margin-top:3rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-1\\/2{height:50%}.h-20{height:5rem}.h-96{height:24rem}.h-5{height:1.25rem}.w-full{width:100%}.w-20{width:5rem}.w-5{width:1.25rem}.max-w-lg{max-width:32rem}.max-w-xs{max-width:20rem}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-\\[7rem\\,auto\\]{grid-template-columns:7rem auto}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[minmax\\(0\\,2fr\\)_minmax\\(0\\,1\\.5fr\\)\\]{grid-template-columns:minmax(0,2fr) minmax(0,1.5fr)}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:1rem}.gap-2{gap:.5rem}.gap-8{gap:2rem}.gap-\\[1\\.5em\\]{gap:1.5em}.gap-6{gap:1.5rem}.gap-\\[\\.25em\\]{gap:.25em}.gap-\\[\\.75em\\]{gap:.75em}.gap-3{gap:.75rem}.gap-10{gap:2.5rem}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-lg{border-radius:var(--sc-rounded-lg)}.rounded-md{border-radius:var(--sc-rounded-md)}.rounded{border-radius:var(--sc-rounded)}.border-0{border-width:0px}.border{border-width:1px}.border-t-2{border-top-width:2px}.border-b-\\[1px\\]{border-bottom-width:1px}.border-solid{border-style:solid}.border-dotted{border-style:dotted}.border-t-neutral-200{border-top-color:var(--sc-base-200)}.border-b-neutral-300{border-bottom-color:var(--sc-base-300)}.bg-neutral-200{background-color:var(--sc-base-200)}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-\\[rgba\\(0\\,0\\,10\\,\\.2\\)\\]{--tw-gradient-from: rgba(0,0,10,.2);--tw-gradient-to: rgb(0 0 10 / 0);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.p-4{padding:1rem}.p-3{padding:.75rem}.p-7{padding:1.75rem}.p-5{padding:1.25rem}.p-8{padding:2rem}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pt-\\[\\.06em\\]{padding-top:.06em}.pt-10{padding-top:2.5rem}.text-center{text-align:center}.font-headings{font-family:var(--sc-font-family-headings)}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-xs{font-size:.75rem;line-height:1rem}.text-5xl{font-size:3rem;line-height:1}.font-black{font-weight:900}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.leading-none{line-height:1}.leading-tight{line-height:1.25}.leading-\\[\\.8em\\]{line-height:.8em}.text-contrast-content{color:var(--sc-contrast-content)}.text-neutral-400{color:var(--sc-base-400)}.text-info{color:var(--sc-info)}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.no-underline{-webkit-text-decoration-line:none;text-decoration-line:none}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.drop-shadow-lg{--tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / .04)) drop-shadow(0 4px 3px rgb(0 0 0 / .1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.group:hover .group-hover\\:underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}@media (min-width: 640px){.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width: 768px){.md\\:block{display:block}.md\\:hidden{display:none}.md\\:grid-cols-\\[minmax\\(0\\,2fr\\)\\,minmax\\(0\\,5fr\\)\\]{grid-template-columns:minmax(0,2fr) minmax(0,5fr)}.md\\:grid-cols-\\[repeat\\(auto-fit\\,minmax\\(25rem\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fit,minmax(25rem,1fr))}.md\\:p-4{padding:1rem}.md\\:shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}}@media (min-width: 1024px){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width: 1280px){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.xl\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.xl\\:text-lg{font-size:1.125rem;line-height:1.75rem}.xl\\:text-2xl{font-size:1.5rem;line-height:2rem}}
`)();const Wi=N`
  ${ji(Uh)}
`,Ih={black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"}};var qh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ms={exports:{}};/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */(function(s,e){(function(t,r){s.exports=r()})(qh,function(){for(var t=function(n,a,c){return a===void 0&&(a=0),c===void 0&&(c=1),n<a?a:n>c?c:n},r=t,o=function(n){n._clipped=!1,n._unclipped=n.slice(0);for(var a=0;a<=3;a++)a<3?((n[a]<0||n[a]>255)&&(n._clipped=!0),n[a]=r(n[a],0,255)):a===3&&(n[a]=r(n[a],0,1));return n},i={},l=0,d=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];l<d.length;l+=1){var x=d[l];i["[object "+x+"]"]=x.toLowerCase()}var y=function(n){return i[Object.prototype.toString.call(n)]||"object"},P=y,C=function(n,a){return a===void 0&&(a=null),n.length>=3?Array.prototype.slice.call(n):P(n[0])=="object"&&a?a.split("").filter(function(c){return n[0][c]!==void 0}).map(function(c){return n[0][c]}):n[0]},S=y,R=function(n){if(n.length<2)return null;var a=n.length-1;return S(n[a])=="string"?n[a].toLowerCase():null},L=Math.PI,w={clip_rgb:o,limit:t,type:y,unpack:C,last:R,PI:L,TWOPI:L*2,PITHIRD:L/3,DEG2RAD:L/180,RAD2DEG:180/L},F={format:{},autodetect:[]},te=w.last,he=w.clip_rgb,He=w.type,$e=F,cr=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var h=this;if(He(a[0])==="object"&&a[0].constructor&&a[0].constructor===this.constructor)return a[0];var p=te(a),f=!1;if(!p){f=!0,$e.sorted||($e.autodetect=$e.autodetect.sort(function(_,A){return A.p-_.p}),$e.sorted=!0);for(var u=0,v=$e.autodetect;u<v.length;u+=1){var b=v[u];if(p=b.test.apply(b,a),p)break}}if($e.format[p]){var g=$e.format[p].apply(null,f?a:a.slice(0,-1));h._rgb=he(g)}else throw new Error("unknown format: "+a);h._rgb.length===3&&h._rgb.push(1)};cr.prototype.toString=function(){return He(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var j=cr,dr=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(dr.Color,[null].concat(n)))};dr.Color=j,dr.version="2.4.2";var ae=dr,gs=w.unpack,Yi=Math.max,ws=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=gs(n,"rgb"),h=c[0],p=c[1],f=c[2];h=h/255,p=p/255,f=f/255;var u=1-Yi(h,Yi(p,f)),v=u<1?1/(1-u):0,b=(1-h-u)*v,g=(1-p-u)*v,_=(1-f-u)*v;return[b,g,_,u]},ys=ws,xs=w.unpack,_s=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];n=xs(n,"cmyk");var c=n[0],h=n[1],p=n[2],f=n[3],u=n.length>4?n[4]:1;return f===1?[0,0,0,u]:[c>=1?0:255*(1-c)*(1-f),h>=1?0:255*(1-h)*(1-f),p>=1?0:255*(1-p)*(1-f),u]},$s=_s,ks=ae,Gi=j,Xi=F,Cs=w.unpack,As=w.type,Ss=ys;Gi.prototype.cmyk=function(){return Ss(this._rgb)},ks.cmyk=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(Gi,[null].concat(n,["cmyk"])))},Xi.format.cmyk=$s,Xi.autodetect.push({p:2,test:function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];if(n=Cs(n,"cmyk"),As(n)==="array"&&n.length===4)return"cmyk"}});var Ps=w.unpack,Es=w.last,Ir=function(n){return Math.round(n*100)/100},zs=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=Ps(n,"hsla"),h=Es(n)||"lsa";return c[0]=Ir(c[0]||0),c[1]=Ir(c[1]*100)+"%",c[2]=Ir(c[2]*100)+"%",h==="hsla"||c.length>3&&c[3]<1?(c[3]=c.length>3?c[3]:1,h="hsla"):c.length=3,h+"("+c.join(",")+")"},Ts=zs,Os=w.unpack,Ls=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];n=Os(n,"rgba");var c=n[0],h=n[1],p=n[2];c/=255,h/=255,p/=255;var f=Math.min(c,h,p),u=Math.max(c,h,p),v=(u+f)/2,b,g;return u===f?(b=0,g=Number.NaN):b=v<.5?(u-f)/(u+f):(u-f)/(2-u-f),c==u?g=(h-p)/(u-f):h==u?g=2+(p-c)/(u-f):p==u&&(g=4+(c-h)/(u-f)),g*=60,g<0&&(g+=360),n.length>3&&n[3]!==void 0?[g,b,v,n[3]]:[g,b,v]},Zi=Ls,Rs=w.unpack,Ns=w.last,js=Ts,Ms=Zi,qr=Math.round,Ds=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=Rs(n,"rgba"),h=Ns(n)||"rgb";return h.substr(0,3)=="hsl"?js(Ms(c),h):(c[0]=qr(c[0]),c[1]=qr(c[1]),c[2]=qr(c[2]),(h==="rgba"||c.length>3&&c[3]<1)&&(c[3]=c.length>3?c[3]:1,h="rgba"),h+"("+c.slice(0,h==="rgb"?3:4).join(",")+")")},Fs=Ds,Us=w.unpack,Hr=Math.round,Is=function(){for(var n,a=[],c=arguments.length;c--;)a[c]=arguments[c];a=Us(a,"hsl");var h=a[0],p=a[1],f=a[2],u,v,b;if(p===0)u=v=b=f*255;else{var g=[0,0,0],_=[0,0,0],A=f<.5?f*(1+p):f+p-f*p,$=2*f-A,z=h/360;g[0]=z+1/3,g[1]=z,g[2]=z-1/3;for(var E=0;E<3;E++)g[E]<0&&(g[E]+=1),g[E]>1&&(g[E]-=1),6*g[E]<1?_[E]=$+(A-$)*6*g[E]:2*g[E]<1?_[E]=A:3*g[E]<2?_[E]=$+(A-$)*(2/3-g[E])*6:_[E]=$;n=[Hr(_[0]*255),Hr(_[1]*255),Hr(_[2]*255)],u=n[0],v=n[1],b=n[2]}return a.length>3?[u,v,b,a[3]]:[u,v,b,1]},Ji=Is,Qi=Ji,Ki=F,en=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,tn=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,rn=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,nn=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,on=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,sn=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,an=Math.round,ln=function(n){n=n.toLowerCase().trim();var a;if(Ki.format.named)try{return Ki.format.named(n)}catch{}if(a=n.match(en)){for(var c=a.slice(1,4),h=0;h<3;h++)c[h]=+c[h];return c[3]=1,c}if(a=n.match(tn)){for(var p=a.slice(1,5),f=0;f<4;f++)p[f]=+p[f];return p}if(a=n.match(rn)){for(var u=a.slice(1,4),v=0;v<3;v++)u[v]=an(u[v]*2.55);return u[3]=1,u}if(a=n.match(nn)){for(var b=a.slice(1,5),g=0;g<3;g++)b[g]=an(b[g]*2.55);return b[3]=+b[3],b}if(a=n.match(on)){var _=a.slice(1,4);_[1]*=.01,_[2]*=.01;var A=Qi(_);return A[3]=1,A}if(a=n.match(sn)){var $=a.slice(1,4);$[1]*=.01,$[2]*=.01;var z=Qi($);return z[3]=+a[4],z}};ln.test=function(n){return en.test(n)||tn.test(n)||rn.test(n)||nn.test(n)||on.test(n)||sn.test(n)};var qs=ln,Hs=ae,cn=j,dn=F,Bs=w.type,Vs=Fs,hn=qs;cn.prototype.css=function(n){return Vs(this._rgb,n)},Hs.css=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(cn,[null].concat(n,["css"])))},dn.format.css=hn,dn.autodetect.push({p:5,test:function(n){for(var a=[],c=arguments.length-1;c-- >0;)a[c]=arguments[c+1];if(!a.length&&Bs(n)==="string"&&hn.test(n))return"css"}});var un=j,Ws=ae,Ys=F,Gs=w.unpack;Ys.format.gl=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=Gs(n,"rgba");return c[0]*=255,c[1]*=255,c[2]*=255,c},Ws.gl=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(un,[null].concat(n,["gl"])))},un.prototype.gl=function(){var n=this._rgb;return[n[0]/255,n[1]/255,n[2]/255,n[3]]};var Xs=w.unpack,Zs=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=Xs(n,"rgb"),h=c[0],p=c[1],f=c[2],u=Math.min(h,p,f),v=Math.max(h,p,f),b=v-u,g=b*100/255,_=u/(255-b)*100,A;return b===0?A=Number.NaN:(h===v&&(A=(p-f)/b),p===v&&(A=2+(f-h)/b),f===v&&(A=4+(h-p)/b),A*=60,A<0&&(A+=360)),[A,g,_]},Js=Zs,Qs=w.unpack,Ks=Math.floor,ea=function(){for(var n,a,c,h,p,f,u=[],v=arguments.length;v--;)u[v]=arguments[v];u=Qs(u,"hcg");var b=u[0],g=u[1],_=u[2],A,$,z;_=_*255;var E=g*255;if(g===0)A=$=z=_;else{b===360&&(b=0),b>360&&(b-=360),b<0&&(b+=360),b/=60;var M=Ks(b),I=b-M,V=_*(1-g),G=V+E*(1-I),me=V+E*I,fe=V+E;switch(M){case 0:n=[fe,me,V],A=n[0],$=n[1],z=n[2];break;case 1:a=[G,fe,V],A=a[0],$=a[1],z=a[2];break;case 2:c=[V,fe,me],A=c[0],$=c[1],z=c[2];break;case 3:h=[V,G,fe],A=h[0],$=h[1],z=h[2];break;case 4:p=[me,V,fe],A=p[0],$=p[1],z=p[2];break;case 5:f=[fe,V,G],A=f[0],$=f[1],z=f[2];break}}return[A,$,z,u.length>3?u[3]:1]},ta=ea,ra=w.unpack,ia=w.type,na=ae,pn=j,fn=F,oa=Js;pn.prototype.hcg=function(){return oa(this._rgb)},na.hcg=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(pn,[null].concat(n,["hcg"])))},fn.format.hcg=ta,fn.autodetect.push({p:1,test:function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];if(n=ra(n,"hcg"),ia(n)==="array"&&n.length===3)return"hcg"}});var sa=w.unpack,aa=w.last,hr=Math.round,la=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=sa(n,"rgba"),h=c[0],p=c[1],f=c[2],u=c[3],v=aa(n)||"auto";u===void 0&&(u=1),v==="auto"&&(v=u<1?"rgba":"rgb"),h=hr(h),p=hr(p),f=hr(f);var b=h<<16|p<<8|f,g="000000"+b.toString(16);g=g.substr(g.length-6);var _="0"+hr(u*255).toString(16);switch(_=_.substr(_.length-2),v.toLowerCase()){case"rgba":return"#"+g+_;case"argb":return"#"+_+g;default:return"#"+g}},vn=la,ca=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,da=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,ha=function(n){if(n.match(ca)){(n.length===4||n.length===7)&&(n=n.substr(1)),n.length===3&&(n=n.split(""),n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);var a=parseInt(n,16),c=a>>16,h=a>>8&255,p=a&255;return[c,h,p,1]}if(n.match(da)){(n.length===5||n.length===9)&&(n=n.substr(1)),n.length===4&&(n=n.split(""),n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]);var f=parseInt(n,16),u=f>>24&255,v=f>>16&255,b=f>>8&255,g=Math.round((f&255)/255*100)/100;return[u,v,b,g]}throw new Error("unknown hex color: "+n)},bn=ha,ua=ae,mn=j,pa=w.type,gn=F,fa=vn;mn.prototype.hex=function(n){return fa(this._rgb,n)},ua.hex=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(mn,[null].concat(n,["hex"])))},gn.format.hex=bn,gn.autodetect.push({p:4,test:function(n){for(var a=[],c=arguments.length-1;c-- >0;)a[c]=arguments[c+1];if(!a.length&&pa(n)==="string"&&[3,4,5,6,7,8,9].indexOf(n.length)>=0)return"hex"}});var va=w.unpack,wn=w.TWOPI,ba=Math.min,ma=Math.sqrt,ga=Math.acos,wa=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=va(n,"rgb"),h=c[0],p=c[1],f=c[2];h/=255,p/=255,f/=255;var u,v=ba(h,p,f),b=(h+p+f)/3,g=b>0?1-v/b:0;return g===0?u=NaN:(u=(h-p+(h-f))/2,u/=ma((h-p)*(h-p)+(h-f)*(p-f)),u=ga(u),f>p&&(u=wn-u),u/=wn),[u*360,g,b]},ya=wa,xa=w.unpack,Br=w.limit,bt=w.TWOPI,Vr=w.PITHIRD,mt=Math.cos,_a=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];n=xa(n,"hsi");var c=n[0],h=n[1],p=n[2],f,u,v;return isNaN(c)&&(c=0),isNaN(h)&&(h=0),c>360&&(c-=360),c<0&&(c+=360),c/=360,c<1/3?(v=(1-h)/3,f=(1+h*mt(bt*c)/mt(Vr-bt*c))/3,u=1-(v+f)):c<2/3?(c-=1/3,f=(1-h)/3,u=(1+h*mt(bt*c)/mt(Vr-bt*c))/3,v=1-(f+u)):(c-=2/3,u=(1-h)/3,v=(1+h*mt(bt*c)/mt(Vr-bt*c))/3,f=1-(u+v)),f=Br(p*f*3),u=Br(p*u*3),v=Br(p*v*3),[f*255,u*255,v*255,n.length>3?n[3]:1]},$a=_a,ka=w.unpack,Ca=w.type,Aa=ae,yn=j,xn=F,Sa=ya;yn.prototype.hsi=function(){return Sa(this._rgb)},Aa.hsi=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(yn,[null].concat(n,["hsi"])))},xn.format.hsi=$a,xn.autodetect.push({p:2,test:function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];if(n=ka(n,"hsi"),Ca(n)==="array"&&n.length===3)return"hsi"}});var Pa=w.unpack,Ea=w.type,za=ae,_n=j,$n=F,Ta=Zi;_n.prototype.hsl=function(){return Ta(this._rgb)},za.hsl=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(_n,[null].concat(n,["hsl"])))},$n.format.hsl=Ji,$n.autodetect.push({p:2,test:function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];if(n=Pa(n,"hsl"),Ea(n)==="array"&&n.length===3)return"hsl"}});var Oa=w.unpack,La=Math.min,Ra=Math.max,Na=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];n=Oa(n,"rgb");var c=n[0],h=n[1],p=n[2],f=La(c,h,p),u=Ra(c,h,p),v=u-f,b,g,_;return _=u/255,u===0?(b=Number.NaN,g=0):(g=v/u,c===u&&(b=(h-p)/v),h===u&&(b=2+(p-c)/v),p===u&&(b=4+(c-h)/v),b*=60,b<0&&(b+=360)),[b,g,_]},ja=Na,Ma=w.unpack,Da=Math.floor,Fa=function(){for(var n,a,c,h,p,f,u=[],v=arguments.length;v--;)u[v]=arguments[v];u=Ma(u,"hsv");var b=u[0],g=u[1],_=u[2],A,$,z;if(_*=255,g===0)A=$=z=_;else{b===360&&(b=0),b>360&&(b-=360),b<0&&(b+=360),b/=60;var E=Da(b),M=b-E,I=_*(1-g),V=_*(1-g*M),G=_*(1-g*(1-M));switch(E){case 0:n=[_,G,I],A=n[0],$=n[1],z=n[2];break;case 1:a=[V,_,I],A=a[0],$=a[1],z=a[2];break;case 2:c=[I,_,G],A=c[0],$=c[1],z=c[2];break;case 3:h=[I,V,_],A=h[0],$=h[1],z=h[2];break;case 4:p=[G,I,_],A=p[0],$=p[1],z=p[2];break;case 5:f=[_,I,V],A=f[0],$=f[1],z=f[2];break}}return[A,$,z,u.length>3?u[3]:1]},Ua=Fa,Ia=w.unpack,qa=w.type,Ha=ae,kn=j,Cn=F,Ba=ja;kn.prototype.hsv=function(){return Ba(this._rgb)},Ha.hsv=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(kn,[null].concat(n,["hsv"])))},Cn.format.hsv=Ua,Cn.autodetect.push({p:2,test:function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];if(n=Ia(n,"hsv"),qa(n)==="array"&&n.length===3)return"hsv"}});var ur={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},gt=ur,Va=w.unpack,An=Math.pow,Wa=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=Va(n,"rgb"),h=c[0],p=c[1],f=c[2],u=Ya(h,p,f),v=u[0],b=u[1],g=u[2],_=116*b-16;return[_<0?0:_,500*(v-b),200*(b-g)]},Wr=function(n){return(n/=255)<=.04045?n/12.92:An((n+.055)/1.055,2.4)},Yr=function(n){return n>gt.t3?An(n,1/3):n/gt.t2+gt.t0},Ya=function(n,a,c){n=Wr(n),a=Wr(a),c=Wr(c);var h=Yr((.4124564*n+.3575761*a+.1804375*c)/gt.Xn),p=Yr((.2126729*n+.7151522*a+.072175*c)/gt.Yn),f=Yr((.0193339*n+.119192*a+.9503041*c)/gt.Zn);return[h,p,f]},Sn=Wa,wt=ur,Ga=w.unpack,Xa=Math.pow,Za=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];n=Ga(n,"lab");var c=n[0],h=n[1],p=n[2],f,u,v,b,g,_;return u=(c+16)/116,f=isNaN(h)?u:u+h/500,v=isNaN(p)?u:u-p/200,u=wt.Yn*Xr(u),f=wt.Xn*Xr(f),v=wt.Zn*Xr(v),b=Gr(3.2404542*f-1.5371385*u-.4985314*v),g=Gr(-.969266*f+1.8760108*u+.041556*v),_=Gr(.0556434*f-.2040259*u+1.0572252*v),[b,g,_,n.length>3?n[3]:1]},Gr=function(n){return 255*(n<=.00304?12.92*n:1.055*Xa(n,1/2.4)-.055)},Xr=function(n){return n>wt.t1?n*n*n:wt.t2*(n-wt.t0)},Pn=Za,Ja=w.unpack,Qa=w.type,Ka=ae,En=j,zn=F,el=Sn;En.prototype.lab=function(){return el(this._rgb)},Ka.lab=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(En,[null].concat(n,["lab"])))},zn.format.lab=Pn,zn.autodetect.push({p:2,test:function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];if(n=Ja(n,"lab"),Qa(n)==="array"&&n.length===3)return"lab"}});var tl=w.unpack,rl=w.RAD2DEG,il=Math.sqrt,nl=Math.atan2,ol=Math.round,sl=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=tl(n,"lab"),h=c[0],p=c[1],f=c[2],u=il(p*p+f*f),v=(nl(f,p)*rl+360)%360;return ol(u*1e4)===0&&(v=Number.NaN),[h,u,v]},Tn=sl,al=w.unpack,ll=Sn,cl=Tn,dl=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=al(n,"rgb"),h=c[0],p=c[1],f=c[2],u=ll(h,p,f),v=u[0],b=u[1],g=u[2];return cl(v,b,g)},hl=dl,ul=w.unpack,pl=w.DEG2RAD,fl=Math.sin,vl=Math.cos,bl=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=ul(n,"lch"),h=c[0],p=c[1],f=c[2];return isNaN(f)&&(f=0),f=f*pl,[h,vl(f)*p,fl(f)*p]},On=bl,ml=w.unpack,gl=On,wl=Pn,yl=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];n=ml(n,"lch");var c=n[0],h=n[1],p=n[2],f=gl(c,h,p),u=f[0],v=f[1],b=f[2],g=wl(u,v,b),_=g[0],A=g[1],$=g[2];return[_,A,$,n.length>3?n[3]:1]},Ln=yl,xl=w.unpack,_l=Ln,$l=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=xl(n,"hcl").reverse();return _l.apply(void 0,c)},kl=$l,Cl=w.unpack,Al=w.type,Rn=ae,pr=j,Zr=F,Nn=hl;pr.prototype.lch=function(){return Nn(this._rgb)},pr.prototype.hcl=function(){return Nn(this._rgb).reverse()},Rn.lch=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(pr,[null].concat(n,["lch"])))},Rn.hcl=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(pr,[null].concat(n,["hcl"])))},Zr.format.lch=Ln,Zr.format.hcl=kl,["lch","hcl"].forEach(function(n){return Zr.autodetect.push({p:2,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a=Cl(a,n),Al(a)==="array"&&a.length===3)return n}})});var Sl={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},jn=Sl,Pl=j,Mn=F,El=w.type,It=jn,zl=bn,Tl=vn;Pl.prototype.name=function(){for(var n=Tl(this._rgb,"rgb"),a=0,c=Object.keys(It);a<c.length;a+=1){var h=c[a];if(It[h]===n)return h.toLowerCase()}return n},Mn.format.named=function(n){if(n=n.toLowerCase(),It[n])return zl(It[n]);throw new Error("unknown color name: "+n)},Mn.autodetect.push({p:5,test:function(n){for(var a=[],c=arguments.length-1;c-- >0;)a[c]=arguments[c+1];if(!a.length&&El(n)==="string"&&It[n.toLowerCase()])return"named"}});var Ol=w.unpack,Ll=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=Ol(n,"rgb"),h=c[0],p=c[1],f=c[2];return(h<<16)+(p<<8)+f},Rl=Ll,Nl=w.type,jl=function(n){if(Nl(n)=="number"&&n>=0&&n<=16777215){var a=n>>16,c=n>>8&255,h=n&255;return[a,c,h,1]}throw new Error("unknown num color: "+n)},Ml=jl,Dl=ae,Dn=j,Fn=F,Fl=w.type,Ul=Rl;Dn.prototype.num=function(){return Ul(this._rgb)},Dl.num=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(Dn,[null].concat(n,["num"])))},Fn.format.num=Ml,Fn.autodetect.push({p:5,test:function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];if(n.length===1&&Fl(n[0])==="number"&&n[0]>=0&&n[0]<=16777215)return"num"}});var Il=ae,Jr=j,Un=F,In=w.unpack,qn=w.type,Hn=Math.round;Jr.prototype.rgb=function(n){return n===void 0&&(n=!0),n===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(Hn)},Jr.prototype.rgba=function(n){return n===void 0&&(n=!0),this._rgb.slice(0,4).map(function(a,c){return c<3?n===!1?a:Hn(a):a})},Il.rgb=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(Jr,[null].concat(n,["rgb"])))},Un.format.rgb=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=In(n,"rgba");return c[3]===void 0&&(c[3]=1),c},Un.autodetect.push({p:3,test:function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];if(n=In(n,"rgba"),qn(n)==="array"&&(n.length===3||n.length===4&&qn(n[3])=="number"&&n[3]>=0&&n[3]<=1))return"rgb"}});var fr=Math.log,ql=function(n){var a=n/100,c,h,p;return a<66?(c=255,h=a<6?0:-155.25485562709179-.44596950469579133*(h=a-2)+104.49216199393888*fr(h),p=a<20?0:-254.76935184120902+.8274096064007395*(p=a-10)+115.67994401066147*fr(p)):(c=351.97690566805693+.114206453784165*(c=a-55)-40.25366309332127*fr(c),h=325.4494125711974+.07943456536662342*(h=a-50)-28.0852963507957*fr(h),p=255),[c,h,p,1]},Bn=ql,Hl=Bn,Bl=w.unpack,Vl=Math.round,Wl=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];for(var c=Bl(n,"rgb"),h=c[0],p=c[2],f=1e3,u=4e4,v=.4,b;u-f>v;){b=(u+f)*.5;var g=Hl(b);g[2]/g[0]>=p/h?u=b:f=b}return Vl(b)},Yl=Wl,Qr=ae,vr=j,Kr=F,Gl=Yl;vr.prototype.temp=vr.prototype.kelvin=vr.prototype.temperature=function(){return Gl(this._rgb)},Qr.temp=Qr.kelvin=Qr.temperature=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(vr,[null].concat(n,["temp"])))},Kr.format.temp=Kr.format.kelvin=Kr.format.temperature=Bn;var Xl=w.unpack,ei=Math.cbrt,Zl=Math.pow,Jl=Math.sign,Ql=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=Xl(n,"rgb"),h=c[0],p=c[1],f=c[2],u=[ti(h/255),ti(p/255),ti(f/255)],v=u[0],b=u[1],g=u[2],_=ei(.4122214708*v+.5363325363*b+.0514459929*g),A=ei(.2119034982*v+.6806995451*b+.1073969566*g),$=ei(.0883024619*v+.2817188376*b+.6299787005*g);return[.2104542553*_+.793617785*A-.0040720468*$,1.9779984951*_-2.428592205*A+.4505937099*$,.0259040371*_+.7827717662*A-.808675766*$]},Vn=Ql;function ti(n){var a=Math.abs(n);return a<.04045?n/12.92:(Jl(n)||1)*Zl((a+.055)/1.055,2.4)}var Kl=w.unpack,br=Math.pow,ec=Math.sign,tc=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];n=Kl(n,"lab");var c=n[0],h=n[1],p=n[2],f=br(c+.3963377774*h+.2158037573*p,3),u=br(c-.1055613458*h-.0638541728*p,3),v=br(c-.0894841775*h-1.291485548*p,3);return[255*ri(4.0767416621*f-3.3077115913*u+.2309699292*v),255*ri(-1.2684380046*f+2.6097574011*u-.3413193965*v),255*ri(-.0041960863*f-.7034186147*u+1.707614701*v),n.length>3?n[3]:1]},Wn=tc;function ri(n){var a=Math.abs(n);return a>.0031308?(ec(n)||1)*(1.055*br(a,1/2.4)-.055):n*12.92}var rc=w.unpack,ic=w.type,nc=ae,Yn=j,Gn=F,oc=Vn;Yn.prototype.oklab=function(){return oc(this._rgb)},nc.oklab=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(Yn,[null].concat(n,["oklab"])))},Gn.format.oklab=Wn,Gn.autodetect.push({p:3,test:function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];if(n=rc(n,"oklab"),ic(n)==="array"&&n.length===3)return"oklab"}});var sc=w.unpack,ac=Vn,lc=Tn,cc=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];var c=sc(n,"rgb"),h=c[0],p=c[1],f=c[2],u=ac(h,p,f),v=u[0],b=u[1],g=u[2];return lc(v,b,g)},dc=cc,hc=w.unpack,uc=On,pc=Wn,fc=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];n=hc(n,"lch");var c=n[0],h=n[1],p=n[2],f=uc(c,h,p),u=f[0],v=f[1],b=f[2],g=pc(u,v,b),_=g[0],A=g[1],$=g[2];return[_,A,$,n.length>3?n[3]:1]},vc=fc,bc=w.unpack,mc=w.type,gc=ae,Xn=j,Zn=F,wc=dc;Xn.prototype.oklch=function(){return wc(this._rgb)},gc.oklch=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return new(Function.prototype.bind.apply(Xn,[null].concat(n,["oklch"])))},Zn.format.oklch=vc,Zn.autodetect.push({p:3,test:function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];if(n=bc(n,"oklch"),mc(n)==="array"&&n.length===3)return"oklch"}});var Jn=j,yc=w.type;Jn.prototype.alpha=function(n,a){return a===void 0&&(a=!1),n!==void 0&&yc(n)==="number"?a?(this._rgb[3]=n,this):new Jn([this._rgb[0],this._rgb[1],this._rgb[2],n],"rgb"):this._rgb[3]};var xc=j;xc.prototype.clipped=function(){return this._rgb._clipped||!1};var st=j,_c=ur;st.prototype.darken=function(n){n===void 0&&(n=1);var a=this,c=a.lab();return c[0]-=_c.Kn*n,new st(c,"lab").alpha(a.alpha(),!0)},st.prototype.brighten=function(n){return n===void 0&&(n=1),this.darken(-n)},st.prototype.darker=st.prototype.darken,st.prototype.brighter=st.prototype.brighten;var $c=j;$c.prototype.get=function(n){var a=n.split("."),c=a[0],h=a[1],p=this[c]();if(h){var f=c.indexOf(h)-(c.substr(0,2)==="ok"?2:0);if(f>-1)return p[f];throw new Error("unknown channel "+h+" in mode "+c)}else return p};var yt=j,kc=w.type,Cc=Math.pow,Ac=1e-7,Sc=20;yt.prototype.luminance=function(n){if(n!==void 0&&kc(n)==="number"){if(n===0)return new yt([0,0,0,this._rgb[3]],"rgb");if(n===1)return new yt([255,255,255,this._rgb[3]],"rgb");var a=this.luminance(),c="rgb",h=Sc,p=function(u,v){var b=u.interpolate(v,.5,c),g=b.luminance();return Math.abs(n-g)<Ac||!h--?b:g>n?p(u,b):p(b,v)},f=(a>n?p(new yt([0,0,0]),this):p(this,new yt([255,255,255]))).rgb();return new yt(f.concat([this._rgb[3]]))}return Pc.apply(void 0,this._rgb.slice(0,3))};var Pc=function(n,a,c){return n=ii(n),a=ii(a),c=ii(c),.2126*n+.7152*a+.0722*c},ii=function(n){return n/=255,n<=.03928?n/12.92:Cc((n+.055)/1.055,2.4)},Se={},Qn=j,Kn=w.type,mr=Se,eo=function(n,a,c){c===void 0&&(c=.5);for(var h=[],p=arguments.length-3;p-- >0;)h[p]=arguments[p+3];var f=h[0]||"lrgb";if(!mr[f]&&!h.length&&(f=Object.keys(mr)[0]),!mr[f])throw new Error("interpolation mode "+f+" is not defined");return Kn(n)!=="object"&&(n=new Qn(n)),Kn(a)!=="object"&&(a=new Qn(a)),mr[f](n,a,c).alpha(n.alpha()+c*(a.alpha()-n.alpha()))},to=j,Ec=eo;to.prototype.mix=to.prototype.interpolate=function(n,a){a===void 0&&(a=.5);for(var c=[],h=arguments.length-2;h-- >0;)c[h]=arguments[h+2];return Ec.apply(void 0,[this,n,a].concat(c))};var ro=j;ro.prototype.premultiply=function(n){n===void 0&&(n=!1);var a=this._rgb,c=a[3];return n?(this._rgb=[a[0]*c,a[1]*c,a[2]*c,c],this):new ro([a[0]*c,a[1]*c,a[2]*c,c],"rgb")};var ni=j,zc=ur;ni.prototype.saturate=function(n){n===void 0&&(n=1);var a=this,c=a.lch();return c[1]+=zc.Kn*n,c[1]<0&&(c[1]=0),new ni(c,"lch").alpha(a.alpha(),!0)},ni.prototype.desaturate=function(n){return n===void 0&&(n=1),this.saturate(-n)};var io=j,no=w.type;io.prototype.set=function(n,a,c){c===void 0&&(c=!1);var h=n.split("."),p=h[0],f=h[1],u=this[p]();if(f){var v=p.indexOf(f)-(p.substr(0,2)==="ok"?2:0);if(v>-1){if(no(a)=="string")switch(a.charAt(0)){case"+":u[v]+=+a;break;case"-":u[v]+=+a;break;case"*":u[v]*=+a.substr(1);break;case"/":u[v]/=+a.substr(1);break;default:u[v]=+a}else if(no(a)==="number")u[v]=a;else throw new Error("unsupported value for Color.set");var b=new io(u,p);return c?(this._rgb=b._rgb,this):b}throw new Error("unknown channel "+f+" in mode "+p)}else return u};var Tc=j,Oc=function(n,a,c){var h=n._rgb,p=a._rgb;return new Tc(h[0]+c*(p[0]-h[0]),h[1]+c*(p[1]-h[1]),h[2]+c*(p[2]-h[2]),"rgb")};Se.rgb=Oc;var Lc=j,oi=Math.sqrt,xt=Math.pow,Rc=function(n,a,c){var h=n._rgb,p=h[0],f=h[1],u=h[2],v=a._rgb,b=v[0],g=v[1],_=v[2];return new Lc(oi(xt(p,2)*(1-c)+xt(b,2)*c),oi(xt(f,2)*(1-c)+xt(g,2)*c),oi(xt(u,2)*(1-c)+xt(_,2)*c),"rgb")};Se.lrgb=Rc;var Nc=j,jc=function(n,a,c){var h=n.lab(),p=a.lab();return new Nc(h[0]+c*(p[0]-h[0]),h[1]+c*(p[1]-h[1]),h[2]+c*(p[2]-h[2]),"lab")};Se.lab=jc;var oo=j,_t=function(n,a,c,h){var p,f,u,v;h==="hsl"?(u=n.hsl(),v=a.hsl()):h==="hsv"?(u=n.hsv(),v=a.hsv()):h==="hcg"?(u=n.hcg(),v=a.hcg()):h==="hsi"?(u=n.hsi(),v=a.hsi()):h==="lch"||h==="hcl"?(h="hcl",u=n.hcl(),v=a.hcl()):h==="oklch"&&(u=n.oklch().reverse(),v=a.oklch().reverse());var b,g,_,A,$,z;(h.substr(0,1)==="h"||h==="oklch")&&(p=u,b=p[0],_=p[1],$=p[2],f=v,g=f[0],A=f[1],z=f[2]);var E,M,I,V;return!isNaN(b)&&!isNaN(g)?(g>b&&g-b>180?V=g-(b+360):g<b&&b-g>180?V=g+360-b:V=g-b,M=b+c*V):isNaN(b)?isNaN(g)?M=Number.NaN:(M=g,($==1||$==0)&&h!="hsv"&&(E=A)):(M=b,(z==1||z==0)&&h!="hsv"&&(E=_)),E===void 0&&(E=_+c*(A-_)),I=$+c*(z-$),h==="oklch"?new oo([I,E,M],h):new oo([M,E,I],h)},Mc=_t,so=function(n,a,c){return Mc(n,a,c,"lch")};Se.lch=so,Se.hcl=so;var Dc=j,Fc=function(n,a,c){var h=n.num(),p=a.num();return new Dc(h+c*(p-h),"num")};Se.num=Fc;var Uc=_t,Ic=function(n,a,c){return Uc(n,a,c,"hcg")};Se.hcg=Ic;var qc=_t,Hc=function(n,a,c){return qc(n,a,c,"hsi")};Se.hsi=Hc;var Bc=_t,Vc=function(n,a,c){return Bc(n,a,c,"hsl")};Se.hsl=Vc;var Wc=_t,Yc=function(n,a,c){return Wc(n,a,c,"hsv")};Se.hsv=Yc;var Gc=j,Xc=function(n,a,c){var h=n.oklab(),p=a.oklab();return new Gc(h[0]+c*(p[0]-h[0]),h[1]+c*(p[1]-h[1]),h[2]+c*(p[2]-h[2]),"oklab")};Se.oklab=Xc;var Zc=_t,Jc=function(n,a,c){return Zc(n,a,c,"oklch")};Se.oklch=Jc;var si=j,Qc=w.clip_rgb,ai=Math.pow,li=Math.sqrt,ci=Math.PI,ao=Math.cos,lo=Math.sin,Kc=Math.atan2,ed=function(n,a,c){a===void 0&&(a="lrgb"),c===void 0&&(c=null);var h=n.length;c||(c=Array.from(new Array(h)).map(function(){return 1}));var p=h/c.reduce(function(M,I){return M+I});if(c.forEach(function(M,I){c[I]*=p}),n=n.map(function(M){return new si(M)}),a==="lrgb")return td(n,c);for(var f=n.shift(),u=f.get(a),v=[],b=0,g=0,_=0;_<u.length;_++)if(u[_]=(u[_]||0)*c[0],v.push(isNaN(u[_])?0:c[0]),a.charAt(_)==="h"&&!isNaN(u[_])){var A=u[_]/180*ci;b+=ao(A)*c[0],g+=lo(A)*c[0]}var $=f.alpha()*c[0];n.forEach(function(M,I){var V=M.get(a);$+=M.alpha()*c[I+1];for(var G=0;G<u.length;G++)if(!isNaN(V[G]))if(v[G]+=c[I+1],a.charAt(G)==="h"){var me=V[G]/180*ci;b+=ao(me)*c[I+1],g+=lo(me)*c[I+1]}else u[G]+=V[G]*c[I+1]});for(var z=0;z<u.length;z++)if(a.charAt(z)==="h"){for(var E=Kc(g/v[z],b/v[z])/ci*180;E<0;)E+=360;for(;E>=360;)E-=360;u[z]=E}else u[z]=u[z]/v[z];return $/=h,new si(u,a).alpha($>.99999?1:$,!0)},td=function(n,a){for(var c=n.length,h=[0,0,0,0],p=0;p<n.length;p++){var f=n[p],u=a[p]/c,v=f._rgb;h[0]+=ai(v[0],2)*u,h[1]+=ai(v[1],2)*u,h[2]+=ai(v[2],2)*u,h[3]+=v[3]*u}return h[0]=li(h[0]),h[1]=li(h[1]),h[2]=li(h[2]),h[3]>.9999999&&(h[3]=1),new si(Qc(h))},ze=ae,$t=w.type,rd=Math.pow,di=function(n){var a="rgb",c=ze("#ccc"),h=0,p=[0,1],f=[],u=[0,0],v=!1,b=[],g=!1,_=0,A=1,$=!1,z={},E=!0,M=1,I=function(k){if(k=k||["#fff","#000"],k&&$t(k)==="string"&&ze.brewer&&ze.brewer[k.toLowerCase()]&&(k=ze.brewer[k.toLowerCase()]),$t(k)==="array"){k.length===1&&(k=[k[0],k[0]]),k=k.slice(0);for(var O=0;O<k.length;O++)k[O]=ze(k[O]);f.length=0;for(var U=0;U<k.length;U++)f.push(U/(k.length-1))}return ke(),b=k},V=function(k){if(v!=null){for(var O=v.length-1,U=0;U<O&&k>=v[U];)U++;return U-1}return 0},G=function(k){return k},me=function(k){return k},fe=function(k,O){var U,D;if(O==null&&(O=!1),isNaN(k)||k===null)return c;if(O)D=k;else if(v&&v.length>2){var ge=V(k);D=ge/(v.length-2)}else A!==_?D=(k-_)/(A-_):D=1;D=me(D),O||(D=G(D)),M!==1&&(D=rd(D,M)),D=u[0]+D*(1-u[0]-u[1]),D=Math.min(1,Math.max(0,D));var re=Math.floor(D*1e4);if(E&&z[re])U=z[re];else{if($t(b)==="array")for(var W=0;W<f.length;W++){var X=f[W];if(D<=X){U=b[W];break}if(D>=X&&W===f.length-1){U=b[W];break}if(D>X&&D<f[W+1]){D=(D-X)/(f[W+1]-X),U=ze.interpolate(b[W],b[W+1],D,a);break}}else $t(b)==="function"&&(U=b(D));E&&(z[re]=U)}return U},ke=function(){return z={}};I(n);var H=function(k){var O=ze(fe(k));return g&&O[g]?O[g]():O};return H.classes=function(k){if(k!=null){if($t(k)==="array")v=k,p=[k[0],k[k.length-1]];else{var O=ze.analyze(p);k===0?v=[O.min,O.max]:v=ze.limits(O,"e",k)}return H}return v},H.domain=function(k){if(!arguments.length)return p;_=k[0],A=k[k.length-1],f=[];var O=b.length;if(k.length===O&&_!==A)for(var U=0,D=Array.from(k);U<D.length;U+=1){var ge=D[U];f.push((ge-_)/(A-_))}else{for(var re=0;re<O;re++)f.push(re/(O-1));if(k.length>2){var W=k.map(function(Z,J){return J/(k.length-1)}),X=k.map(function(Z){return(Z-_)/(A-_)});X.every(function(Z,J){return W[J]===Z})||(me=function(Z){if(Z<=0||Z>=1)return Z;for(var J=0;Z>=X[J+1];)J++;var Oe=(Z-X[J])/(X[J+1]-X[J]),Ke=W[J]+Oe*(W[J+1]-W[J]);return Ke})}}return p=[_,A],H},H.mode=function(k){return arguments.length?(a=k,ke(),H):a},H.range=function(k,O){return I(k),H},H.out=function(k){return g=k,H},H.spread=function(k){return arguments.length?(h=k,H):h},H.correctLightness=function(k){return k==null&&(k=!0),$=k,ke(),$?G=function(O){for(var U=fe(0,!0).lab()[0],D=fe(1,!0).lab()[0],ge=U>D,re=fe(O,!0).lab()[0],W=U+(D-U)*O,X=re-W,Z=0,J=1,Oe=20;Math.abs(X)>.01&&Oe-- >0;)(function(){return ge&&(X*=-1),X<0?(Z=O,O+=(J-O)*.5):(J=O,O+=(Z-O)*.5),re=fe(O,!0).lab()[0],X=re-W})();return O}:G=function(O){return O},H},H.padding=function(k){return k!=null?($t(k)==="number"&&(k=[k,k]),u=k,H):u},H.colors=function(k,O){arguments.length<2&&(O="hex");var U=[];if(arguments.length===0)U=b.slice(0);else if(k===1)U=[H(.5)];else if(k>1){var D=p[0],ge=p[1]-D;U=id(0,k,!1).map(function(J){return H(D+J/(k-1)*ge)})}else{n=[];var re=[];if(v&&v.length>2)for(var W=1,X=v.length,Z=1<=X;Z?W<X:W>X;Z?W++:W--)re.push((v[W-1]+v[W])*.5);else re=p;U=re.map(function(J){return H(J)})}return ze[O]&&(U=U.map(function(J){return J[O]()})),U},H.cache=function(k){return k!=null?(E=k,H):E},H.gamma=function(k){return k!=null?(M=k,H):M},H.nodata=function(k){return k!=null?(c=ze(k),H):c},H};function id(n,a,c){for(var h=[],p=n<a,f=c?p?a+1:a-1:a,u=n;p?u<f:u>f;p?u++:u--)h.push(u);return h}var qt=j,nd=di,od=function(n){for(var a=[1,1],c=1;c<n;c++){for(var h=[1],p=1;p<=a.length;p++)h[p]=(a[p]||0)+a[p-1];a=h}return a},sd=function(n){var a,c,h,p,f,u,v;if(n=n.map(function($){return new qt($)}),n.length===2)a=n.map(function($){return $.lab()}),f=a[0],u=a[1],p=function($){var z=[0,1,2].map(function(E){return f[E]+$*(u[E]-f[E])});return new qt(z,"lab")};else if(n.length===3)c=n.map(function($){return $.lab()}),f=c[0],u=c[1],v=c[2],p=function($){var z=[0,1,2].map(function(E){return(1-$)*(1-$)*f[E]+2*(1-$)*$*u[E]+$*$*v[E]});return new qt(z,"lab")};else if(n.length===4){var b;h=n.map(function($){return $.lab()}),f=h[0],u=h[1],v=h[2],b=h[3],p=function($){var z=[0,1,2].map(function(E){return(1-$)*(1-$)*(1-$)*f[E]+3*(1-$)*(1-$)*$*u[E]+3*(1-$)*$*$*v[E]+$*$*$*b[E]});return new qt(z,"lab")}}else if(n.length>=5){var g,_,A;g=n.map(function($){return $.lab()}),A=n.length-1,_=od(A),p=function($){var z=1-$,E=[0,1,2].map(function(M){return g.reduce(function(I,V,G){return I+_[G]*Math.pow(z,A-G)*Math.pow($,G)*V[M]},0)});return new qt(E,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return p},ad=function(n){var a=sd(n);return a.scale=function(){return nd(a)},a},hi=ae,Te=function(n,a,c){if(!Te[c])throw new Error("unknown blend mode "+c);return Te[c](n,a)},Je=function(n){return function(a,c){var h=hi(c).rgb(),p=hi(a).rgb();return hi.rgb(n(h,p))}},Qe=function(n){return function(a,c){var h=[];return h[0]=n(a[0],c[0]),h[1]=n(a[1],c[1]),h[2]=n(a[2],c[2]),h}},ld=function(n){return n},cd=function(n,a){return n*a/255},dd=function(n,a){return n>a?a:n},hd=function(n,a){return n>a?n:a},ud=function(n,a){return 255*(1-(1-n/255)*(1-a/255))},pd=function(n,a){return a<128?2*n*a/255:255*(1-2*(1-n/255)*(1-a/255))},fd=function(n,a){return 255*(1-(1-a/255)/(n/255))},vd=function(n,a){return n===255?255:(n=255*(a/255)/(1-n/255),n>255?255:n)};Te.normal=Je(Qe(ld)),Te.multiply=Je(Qe(cd)),Te.screen=Je(Qe(ud)),Te.overlay=Je(Qe(pd)),Te.darken=Je(Qe(dd)),Te.lighten=Je(Qe(hd)),Te.dodge=Je(Qe(vd)),Te.burn=Je(Qe(fd));for(var bd=Te,ui=w.type,md=w.clip_rgb,gd=w.TWOPI,wd=Math.pow,yd=Math.sin,xd=Math.cos,co=ae,_d=function(n,a,c,h,p){n===void 0&&(n=300),a===void 0&&(a=-1.5),c===void 0&&(c=1),h===void 0&&(h=1),p===void 0&&(p=[0,1]);var f=0,u;ui(p)==="array"?u=p[1]-p[0]:(u=0,p=[p,p]);var v=function(b){var g=gd*((n+120)/360+a*b),_=wd(p[0]+u*b,h),A=f!==0?c[0]+b*f:c,$=A*_*(1-_)/2,z=xd(g),E=yd(g),M=_+$*(-.14861*z+1.78277*E),I=_+$*(-.29227*z-.90649*E),V=_+$*(1.97294*z);return co(md([M*255,I*255,V*255,1]))};return v.start=function(b){return b==null?n:(n=b,v)},v.rotations=function(b){return b==null?a:(a=b,v)},v.gamma=function(b){return b==null?h:(h=b,v)},v.hue=function(b){return b==null?c:(c=b,ui(c)==="array"?(f=c[1]-c[0],f===0&&(c=c[1])):f=0,v)},v.lightness=function(b){return b==null?p:(ui(b)==="array"?(p=b,u=b[1]-b[0]):(p=[b,b],u=0),v)},v.scale=function(){return co.scale(v)},v.hue(c),v},$d=j,kd="0123456789abcdef",Cd=Math.floor,Ad=Math.random,Sd=function(){for(var n="#",a=0;a<6;a++)n+=kd.charAt(Cd(Ad()*16));return new $d(n,"hex")},pi=y,ho=Math.log,Pd=Math.pow,Ed=Math.floor,zd=Math.abs,uo=function(n,a){a===void 0&&(a=null);var c={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return pi(n)==="object"&&(n=Object.values(n)),n.forEach(function(h){a&&pi(h)==="object"&&(h=h[a]),h!=null&&!isNaN(h)&&(c.values.push(h),c.sum+=h,h<c.min&&(c.min=h),h>c.max&&(c.max=h),c.count+=1)}),c.domain=[c.min,c.max],c.limits=function(h,p){return po(c,h,p)},c},po=function(n,a,c){a===void 0&&(a="equal"),c===void 0&&(c=7),pi(n)=="array"&&(n=uo(n));var h=n.min,p=n.max,f=n.values.sort(function(vi,bi){return vi-bi});if(c===1)return[h,p];var u=[];if(a.substr(0,1)==="c"&&(u.push(h),u.push(p)),a.substr(0,1)==="e"){u.push(h);for(var v=1;v<c;v++)u.push(h+v/c*(p-h));u.push(p)}else if(a.substr(0,1)==="l"){if(h<=0)throw new Error("Logarithmic scales are only possible for values > 0");var b=Math.LOG10E*ho(h),g=Math.LOG10E*ho(p);u.push(h);for(var _=1;_<c;_++)u.push(Pd(10,b+_/c*(g-b)));u.push(p)}else if(a.substr(0,1)==="q"){u.push(h);for(var A=1;A<c;A++){var $=(f.length-1)*A/c,z=Ed($);if(z===$)u.push(f[z]);else{var E=$-z;u.push(f[z]*(1-E)+f[z+1]*E)}}u.push(p)}else if(a.substr(0,1)==="k"){var M,I=f.length,V=new Array(I),G=new Array(c),me=!0,fe=0,ke=null;ke=[],ke.push(h);for(var H=1;H<c;H++)ke.push(h+H/c*(p-h));for(ke.push(p);me;){for(var k=0;k<c;k++)G[k]=0;for(var O=0;O<I;O++)for(var U=f[O],D=Number.MAX_VALUE,ge=void 0,re=0;re<c;re++){var W=zd(ke[re]-U);W<D&&(D=W,ge=re),G[ge]++,V[O]=ge}for(var X=new Array(c),Z=0;Z<c;Z++)X[Z]=null;for(var J=0;J<I;J++)M=V[J],X[M]===null?X[M]=f[J]:X[M]+=f[J];for(var Oe=0;Oe<c;Oe++)X[Oe]*=1/G[Oe];me=!1;for(var Ke=0;Ke<c;Ke++)if(X[Ke]!==ke[Ke]){me=!0;break}ke=X,fe++,fe>200&&(me=!1)}for(var et={},kt=0;kt<c;kt++)et[kt]=[];for(var Ct=0;Ct<I;Ct++)M=V[Ct],et[M].push(f[Ct]);for(var Ve=[],at=0;at<c;at++)Ve.push(et[at][0]),Ve.push(et[at][et[at].length-1]);Ve=Ve.sort(function(vi,bi){return vi-bi}),u.push(Ve[0]);for(var Ht=1;Ht<Ve.length;Ht+=2){var lt=Ve[Ht];!isNaN(lt)&&u.indexOf(lt)===-1&&u.push(lt)}}return u},fo={analyze:uo,limits:po},vo=j,Td=function(n,a){n=new vo(n),a=new vo(a);var c=n.luminance(),h=a.luminance();return c>h?(c+.05)/(h+.05):(h+.05)/(c+.05)},bo=j,Be=Math.sqrt,le=Math.pow,Od=Math.min,Ld=Math.max,mo=Math.atan2,go=Math.abs,gr=Math.cos,wo=Math.sin,Rd=Math.exp,yo=Math.PI,Nd=function(n,a,c,h,p){c===void 0&&(c=1),h===void 0&&(h=1),p===void 0&&(p=1);var f=function(lt){return 360*lt/(2*yo)},u=function(lt){return 2*yo*lt/360};n=new bo(n),a=new bo(a);var v=Array.from(n.lab()),b=v[0],g=v[1],_=v[2],A=Array.from(a.lab()),$=A[0],z=A[1],E=A[2],M=(b+$)/2,I=Be(le(g,2)+le(_,2)),V=Be(le(z,2)+le(E,2)),G=(I+V)/2,me=.5*(1-Be(le(G,7)/(le(G,7)+le(25,7)))),fe=g*(1+me),ke=z*(1+me),H=Be(le(fe,2)+le(_,2)),k=Be(le(ke,2)+le(E,2)),O=(H+k)/2,U=f(mo(_,fe)),D=f(mo(E,ke)),ge=U>=0?U:U+360,re=D>=0?D:D+360,W=go(ge-re)>180?(ge+re+360)/2:(ge+re)/2,X=1-.17*gr(u(W-30))+.24*gr(u(2*W))+.32*gr(u(3*W+6))-.2*gr(u(4*W-63)),Z=re-ge;Z=go(Z)<=180?Z:re<=ge?Z+360:Z-360,Z=2*Be(H*k)*wo(u(Z)/2);var J=$-b,Oe=k-H,Ke=1+.015*le(M-50,2)/Be(20+le(M-50,2)),et=1+.045*O,kt=1+.015*O*X,Ct=30*Rd(-le((W-275)/25,2)),Ve=2*Be(le(O,7)/(le(O,7)+le(25,7))),at=-Ve*wo(2*u(Ct)),Ht=Be(le(J/(c*Ke),2)+le(Oe/(h*et),2)+le(Z/(p*kt),2)+at*(Oe/(h*et))*(Z/(p*kt)));return Ld(0,Od(100,Ht))},xo=j,jd=function(n,a,c){c===void 0&&(c="lab"),n=new xo(n),a=new xo(a);var h=n.get(c),p=a.get(c),f=0;for(var u in h){var v=(h[u]||0)-(p[u]||0);f+=v*v}return Math.sqrt(f)},Md=j,Dd=function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];try{return new(Function.prototype.bind.apply(Md,[null].concat(n))),!0}catch{return!1}},_o=ae,$o=di,Fd={cool:function(){return $o([_o.hsl(180,1,.9),_o.hsl(250,.7,.4)])},hot:function(){return $o(["#000","#f00","#ff0","#fff"]).mode("rgb")}},wr={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},fi=0,ko=Object.keys(wr);fi<ko.length;fi+=1){var Co=ko[fi];wr[Co.toLowerCase()]=wr[Co]}var Ud=wr,pe=ae;pe.average=ed,pe.bezier=ad,pe.blend=bd,pe.cubehelix=_d,pe.mix=pe.interpolate=eo,pe.random=Sd,pe.scale=di,pe.analyze=fo.analyze,pe.contrast=Td,pe.deltaE=Nd,pe.distance=jd,pe.limits=fo.limits,pe.valid=Dd,pe.scales=Fd,pe.colors=jn,pe.brewer=Ud;var Id=pe;return Id})})(ms);var ue=ms.exports,Hh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,Ze=(s,e,t,r)=>{for(var o=r>1?void 0:r?Bh(e,t):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(o=(r?l(e,t,o):l(o))||o);return r&&o&&Hh(e,t,o),o};const we={primary:"#0070f3",danger:"#dc2626",success:"#10b981",warning:"#fb923c",info:"#3b82f6",base:"#fff",maxNeutral:"#111827",neutral:"#1f2937"};let De=class extends q{constructor(){super(...arguments),this.primary=ue.random(),this.neutral=we.neutral,this.base=we.base,this.maxContrastNeutral=we.maxNeutral,this.contrastLuminance=.002,this.themeCSS="",this.tailwindClosestPrimary="",this.theme={base:this.base,"base-content":this.neutral,primary:{DEFAULT:this.primary,content:we.base},neutral:{DEFAULT:this.neutral,content:we.base},info:{DEFAULT:we.info,content:we.base},success:{DEFAULT:we.success,content:we.base},warning:{DEFAULT:we.warning,content:we.base},danger:{DEFAULT:we.danger,content:we.base}}}shadesHtml(s){var e;return T`<div class="shades">
      ${(e=Object.keys(this.theme[s]))==null?void 0:e.map((t,r)=>{const o=r==0?"50":r+"00";return t!="DEFAULT"&&t!="content"?T`<div
            class="shade-${o}"
            style="background-color:${this.theme[s][t]}"
          ></div>`:""})}
    </div>`}paletteHtml(s,e){var i,l;const t=this[s]||this.theme[s].DEFAULT;let r=((i=this.theme[s])==null?void 0:i.content)||"#ffffff";s=="base"?r=this.neutral:s=="maxContrastNeutral"?r=this.base:s=="neutral"&&(r=this.base);const o=((l=this.theme[s])==null?void 0:l.DEFAULT)||this[s];return T`<div class="palette-item">
      <div
        class="palette-main"
        style="background-color:${t};color:${r}"
      >
        ${e.input?T`<input
              data-color=${s}
              .value=${this[s]}
              type="color"
              @input=${this._commitValue}
            />`:""}
        <div class="text">${o}</div>
        <span class="legend">${s}</span>
      </div>
      ${e.shade?this.shadesHtml(s):""}
    </div>`}render(){const s=this._getStatusColor();return T`
      <div class="palette grid grid-cols-4 gap-8 items-start">
        ${this.paletteHtml("primary",{shade:!0,input:!0})}
        ${this.paletteHtml("base",{shade:!1,input:!0})}
        ${this.paletteHtml("neutral",{shade:!0,input:!0})}
        ${this.paletteHtml("maxContrastNeutral",{shade:!1,input:!0})}
      </div>
      <div class="grid grid-cols-4 gap-8 mt-8 items-start">
        ${Object.keys(s).map(e=>T` ${this.paletteHtml(e,{shade:!0,input:!1})}`)}
      </div>
    `}connectedCallback(){super.connectedCallback(),this._generateTheme()}_randomTheme(){this.primary=ue.random(),this._generateTheme()}_commitValue(s){const e=s.target,t=e.getAttribute("data-color"),r=e.value.trim(),o=this[t];this[t]=r,o!=r&&this._generateTheme()}_getStatusColor(){return Object.keys(this.theme).filter(s=>["success","info","danger","warning"].includes(s)).reduce((s,e)=>Object.assign(s,{[e]:this.theme[e]}),{})}_generateTheme(){if(!(ue.valid(this.primary)&&ue.valid(this.neutral)&&ue.valid(this.base)&&ue.valid(this.maxContrastNeutral)))return;const s=ue(this.primary),e=ue(this.neutral);let t=[];for(const C of Object.entries(Ih))typeof C[1]=="object"?Object.entries(C[1]).forEach(S=>{t.push({key:C[0]+"-"+S[0],delta:ue.deltaE(S[1],s),color:S[1]})}):t.push({key:C[0],delta:ue.deltaE(C[1],s),color:C[1]});var r=t.slice(0);r.sort(function(C,S){return C.delta-S.delta}),this.tailwindClosestPrimary=r[0].color;const o=s.hsl(),i=ue(r[0].color).hsl(),l=isNaN(o[0])||isNaN(i[0])?0:o[0]-i[0],d=o[1]-i[1],x=this._getStatusColor();Object.entries(x).forEach(C=>{const[S]=C,L=ue(we[S]).hsl(),w=.6,F=l<0?Math.max(-15,l):Math.min(15,l),te=Math.min(L[0]+F),he=L[1]+d*w,He=L[2],$e=ue.hsl(te,he,He);this.theme[S].DEFAULT=$e.hex();const cr=this._generateShades($e);this._setShades(cr,this.theme[S]),this._setContentColor(ue($e),this.theme[S])});const y=this._generateShades(s);this._setShades(y,this.theme.primary),this._setContentColor(s,this.theme.primary),this.theme.primary.DEFAULT=this.primary;const P=this._generateShades(ue(e),!0);this._setShades(P,this.theme.neutral),this._setContentColor(e,this.theme.neutral),this.theme.neutral.DEFAULT=this.neutral,this.theme["base-content"]=this.neutral,this.theme.base=this.base,this._setThemeCSS(this.theme),this.dispatchEvent(new CustomEvent("newTheme",{bubbles:!0,composed:!0}))}_setContentColor(s,e){ue(s).luminance()<.4?e.content=we.base:e.content=we.maxNeutral}_generateShades(s,e=!1){const t=ue(this.base).luminance();let r=Math.min(.3,.15*(1+(1-t))),o=.2;e==!0&&(o=0,r=Math.min(.08,.04*(1+(1-t))));const i=ue.scale([this.base,s,this.maxContrastNeutral]).mode("lab").correctLightness().padding([r,o]).colors(9),l=ue.mix(this.base,i[0],.6).hex();return i.unshift(l),i}_setShades(s,e){s.length>0&&s.forEach((t,r)=>{const o=r==0?"50":r+"00";e[o]=t})}_setThemeCSS(s){const e=[];for(const t of Object.entries(s))typeof t[1]=="object"&&t[1]!=null?Object.entries(t[1]).forEach(r=>{if(!(t[0]=="neutral"&&r[0]=="DEFAULT")&&!(t[0]=="neutral"&&r[0]=="content")){const o=t[0]=="neutral"?"base":t[0],i=r[0]=="DEFAULT"?"":`-${r[0]}`;e.push(`--sc-${o+i} : ${r[1]}`)}}):e.push(`--sc-${t[0]}: ${t[1]};`);this.themeCSS=e.join(";")}};De.styles=[Wi,N`
      * {
        box-sizing: border-box;
      }

      .palette-item {
        flex-shrink: 0;
        display: flex;
        position: relative;
        flex-direction: column;
        gap: 0.55rem;
      }

      .palette-main {
        display: flex;
        border-radius: 0.8rem;
        width: 100%;
        flex-grow: 1;
        position: relative;
        box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
      }

      .palette-main:focus-within {
        box-shadow: 0 0 0 0.2rem #000;
      }

      .text,
      .palette-input {
        all: unset;
        padding: 2rem 1rem;
        text-align: center;
        appearance: none;
        color: #666;
        border-radius: 1rem;
        font-family: monospace;
        font-size: 2rem;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        line-height: 0.85;
        z-index: 2;
        color: inherit;
        overflow: hidden;
      }

      input[type="color"] {
        all: unset;
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        appearance: none;
        z-index: 100;
        cursor: pointer;
      }

      input::selection {
        opacity: 1;
        background-color: #ccc;
      }
      .legend {
        font-size: 0.85rem;
        font-family: consolas;
        position: absolute;
        bottom: 0.65rem;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.5;
      }

      .hidden {
        display: none;
      }

      .shades {
        width: calc(100% - 2.8rem);
        display: flex;
        gap: 0.6rem;
        margin: 0 1.4rem;
        flex-shrink: 0;
      }
      .shades div {
        border-radius: 99px;
        aspect-ratio: 1;
        flex-grow: 1;
      }
    `];Ze([m({type:String})],De.prototype,"primary",2);Ze([m({type:String})],De.prototype,"neutral",2);Ze([m({type:String})],De.prototype,"base",2);Ze([m({type:String})],De.prototype,"maxContrastNeutral",2);Ze([m({type:Number})],De.prototype,"contrastLuminance",2);Ze([m({type:String})],De.prototype,"themeCSS",2);Ze([xe()],De.prototype,"tailwindClosestPrimary",2);Ze([xe()],De.prototype,"theme",2);De=Ze([B("sonic-theme-generator")],De);var Vh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,Yh=(s,e,t,r)=>{for(var o=r>1?void 0:r?Wh(e,t):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(o=(r?l(e,t,o):l(o))||o);return r&&o&&Vh(e,t,o),o};let Oi=class extends q{render(){return T`
      <div class="grid grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] gap-10">
        <div class="pt-10">
          <div class="flex gap-2 flex-wrap ">
            <sonic-button>Default</sonic-button>
            <sonic-button type="primary">Primary</sonic-button>
            <sonic-button type="neutral">Neutral</sonic-button>
            <sonic-button type="warning">Warning</sonic-button>
            <sonic-button type="info">Info</sonic-button>
            <sonic-button type="success">Success</sonic-button>
            <sonic-button type="danger">Danger</sonic-button>
          </div>
          <sonic-divider></sonic-divider>
          <div class="flex gap-2 flex-wrap ">
            <sonic-button variant="outline">Default</sonic-button>
            <sonic-button variant="outline" type="primary"
              >Primary</sonic-button
            >
            <sonic-button variant="outline" type="neutral"
              >Neutral</sonic-button
            >
            <sonic-button variant="outline" type="warning"
              >Warning</sonic-button
            >
            <sonic-button variant="outline" type="info">Info</sonic-button>
            <sonic-button variant="outline" type="success"
              >Success</sonic-button
            >
            <sonic-button variant="outline" type="danger">Danger</sonic-button>
          </div>

          <sonic-divider
            >Alerts <sonic-badge type="danger" size="xs">+5</sonic-badge></sonic-divider
          >
          <sonic-alert class="mb-2" background label="Lorem ipsum dolor">
            This address is already in use.
          </sonic-alert>
          <sonic-alert
            status="success"
            class="mb-2"
            background
            label="Lorem ipsum dolor"
          >
            This address is already in use.
          </sonic-alert>
          <sonic-alert
            status="error"
            class="mb-2"
            background
            label="Lorem ipsum dolor"
          >
            This address is already in use.
          </sonic-alert>
          <sonic-alert
            status="warning"
            class="mb-2"
            background
            label="Lorem ipsum dolor"
          >
            This address is already in use.
          </sonic-alert>
          <sonic-alert
            status="info"
            class="mb-2"
            background
            label="Lorem ipsum dolor"
          >
            This address is already in use.
          </sonic-alert>
        </div>
        <sonic-div formDataProvider="creation_compte">
          <form
            action="/inscription?lang=fr"
            method="POST"
            class="mb-20"
            accept-charset="UTF-8"
            id="youpla"
          >
            <sonic-fieldset form="formid" collapsible="true" collapsed="false">
              <sonic-legend>
                Informations personnelles
                <span slot="description"
                  >Description du fieldset lorem ipsum dolor</span
                >

                <sonic-pop class="inline-block" slot="suffix">
                  <sonic-button shape="circle" variant="ghost">
                    <sonic-icon size="lg" name="ellipsis-vertical"></sonic-icon
                  ></sonic-button>
                  <sonic-menu slot="content" class="min-w-20">
                    <sonic-menu-item>Mentions légales</sonic-menu-item>
                    <sonic-menu-item
                      >Conditions générales d'utilisation</sonic-menu-item
                    >
                  </sonic-menu>
                </sonic-pop>
              </sonic-legend>
              <sonic-form-layout>
                <sonic-input
                  autocomplete="family-name"
                  label="Nom"
                  name="nom"
                ></sonic-input>
                <sonic-input
                  autocomplete="given-name"
                  label="Prénom"
                  name="prenom"
                ></sonic-input>
                <sonic-select autocomplete="sex" label="Sexe" name="sexe">
                  <option value="" selected="selected">- Sélectionner -</option>
                  <option value="-">Je préfère ne pas le dire</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </sonic-select>
                <sonic-input
                  autocomplete="bday"
                  label="Date de naissance"
                  name="date_naissance"
                  type="date"
                ></sonic-input>

                <sonic-divider></sonic-divider>
                <sonic-input
                  autocomplete="email"
                  label="e-mail"
                  name="email"
                  type="email"
                ></sonic-input>
                <sonic-input
                  autocomplete="email"
                  label="Confirmer votre e-mail"
                  name="email_confirmation"
                  type="email"
                ></sonic-input>
                <sonic-input
                  autocomplete="new-password"
                  label="Mot de passe"
                  name="password"
                  type="password"
                ></sonic-input>
                <sonic-input
                  autocomplete="new-password"
                  label="Confirmer votre mot de passe"
                  name="password_confirmation"
                  type="password"
                ></sonic-input>
              </sonic-form-layout>
            </sonic-fieldset>
            <sonic-fieldset form="formid" collapsible="true" collapsed="false">
              <sonic-legend
                ><sonic-icon name="map-marker"></sonic-icon> Coordonnées
              </sonic-legend>
              <sonic-form-layout>
                <sonic-input
                  autocomplete="postal-code"
                  label="Code postal"
                  name="cp"
                ></sonic-input>
                <sonic-input
                  autocomplete="address-level2"
                  label="Ville"
                  name="ville"
                ></sonic-input>
              </sonic-form-layout>
            </sonic-fieldset>

            <div class="flex gap-3 items-center">
              <sonic-button submit type="primary">
                <sonic-icon name="check"></sonic-icon>
                S'inscrire
              </sonic-button>
              <sonic-tooltip
                class="inline-flex"
                tooltipText="Vous êtes sûr(e) ? 🙄"
              >
                <sonic-button size="sm" variant="ghost">
                  Continuer sans m'inscrire
                </sonic-button>
              </sonic-tooltip>
            </div>
          </form>

        </sonic-div>
      </div>
    `}};Oi.styles=[Wi];Oi=Yh([B("sonic-theme-preview")],Oi);var Gh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,Ur=(s,e,t,r)=>{for(var o=r>1?void 0:r?Xh(e,t):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(o=(r?l(e,t,o):l(o))||o);return r&&o&&Gh(e,t,o),o};let Nt=class extends q{constructor(){super(...arguments),this.hasPressedSpace=!1}render(){return T`
      <sonic-theme theme="auto" background color>
        <div class="grid gap-8">
            <header class=" flex gap-4  items-center">
              <div class="font-bold mb-3 leading-[.8em] text-5xl gap-4">
                concorde colors
              </div>
              <div class="flex gap-3 items-center">
                <sonic-button
                  type="primary"
                  variant="outline"
                  @click=${()=>{var s;(s=this.themeGenerator)==null||s._randomTheme()}}
                >
                  <span slot="prefix">
                    ${Dr('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-5 h-5 inline-block"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M327.5 85.19L384 64L405.2 7.491C406.9 2.985 411.2 0 416 0C420.8 0 425.1 2.985 426.8 7.491L448 64L504.5 85.19C509 86.88 512 91.19 512 96C512 100.8 509 105.1 504.5 106.8L448 128L426.8 184.5C425.1 189 420.8 192 416 192C411.2 192 406.9 189 405.2 184.5L384 128L327.5 106.8C322.1 105.1 320 100.8 320 96C320 91.19 322.1 86.88 327.5 85.19V85.19zM257.8 187.3L371.8 240C377.5 242.6 381.1 248.3 381.1 254.6C381.1 260.8 377.5 266.5 371.8 269.1L257.8 321.8L205.1 435.8C202.5 441.5 196.8 445.1 190.6 445.1C184.3 445.1 178.6 441.5 176 435.8L123.3 321.8L9.292 269.1C3.627 266.5 0 260.8 0 254.6C0 248.3 3.627 242.6 9.292 240L123.3 187.3L176 73.29C178.6 67.63 184.3 64 190.6 64C196.8 64 202.5 67.63 205.1 73.29L257.8 187.3zM405.2 327.5C406.9 322.1 411.2 320 416 320C420.8 320 425.1 322.1 426.8 327.5L448 384L504.5 405.2C509 406.9 512 411.2 512 416C512 420.8 509 425.1 504.5 426.8L448 448L426.8 504.5C425.1 509 420.8 512 416 512C411.2 512 406.9 509 405.2 504.5L384 448L327.5 426.8C322.1 425.1 320 420.8 320 416C320 411.2 322.1 406.9 327.5 405.2L384 384L405.2 327.5z"/></svg>')}
                  </span>
                  <span class="font-bold">Random color</span>
                </sonic-button>
                ${this.hasPressedSpace?"":T` <div class="text-sm text-neutral-400">
                      Or press space
                    </div>`}
              </div>
            </header>
            <sonic-theme-generator
              @newTheme=${this._handleNewTheme}
            ></sonic-theme-generator>
            <sonic-theme-preview class="mt-12 block"></sonic-theme-preview>
        </div>
      </sonic-theme>
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",s=>{var e;s.keyCode===32&&(s.preventDefault(),(e=this.themeGenerator)==null||e._randomTheme(),this.hasPressedSpace==!1&&(this.hasPressedSpace=!0))})}_handleNewTheme(){var s,e;((s=this.themeGenerator)==null?void 0:s.themeCSS)!=null&&this.themePreview.setAttribute("style",(e=this.themeGenerator)==null?void 0:e.themeCSS)}};Nt.styles=[Wi,N`
      :host {
        display: block;
        min-height: 100vh;
      }

      sonic-theme {
        padding: 1rem 4rem;
      }

      .btn-container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }

      .btn-generation {
        all: unset;
        font-size: 1.2rem;
        padding: 0.5em 1.2em;
        background-color: #000;
        color: #f5f5f5;
        border-radius: 999px;
        font-weight: bold;
        border: 2px solid;
        cursor: pointer;
      }

      .btn-generation:focus,
      .btn-generation:hover {
        background: #fff;
        color: #000;
      }
      button svg {
        display: inline-block;
        width: 1.1em;
        height: 1.1em;
        vertical-align: middle;
        margin-right: 0.2em;
      }
    `];Ur([xe()],Nt.prototype,"hasPressedSpace",2);Ur([nt("sonic-theme-generator")],Nt.prototype,"themeGenerator",2);Ur([nt("sonic-theme")],Nt.prototype,"themePreview",2);Nt=Ur([B("sonic-app-theme")],Nt)});export default Zh();
