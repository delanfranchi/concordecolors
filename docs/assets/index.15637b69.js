var Ru=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var im=Ru((gv,ho)=>{const ju=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};ju();var fi=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};class Tr{static getLanguage(){return document.getElementsByTagName("html")[0].getAttribute("lang")}static getCookies(){return document.cookie.split(";").reduce((e,t)=>{const i=t.indexOf("=");return e[t.substring(0,i).trim()]=t.substring(i+1),e},{})}static getAncestorAttributeValue(e,t){if(!e)return null;for(;!("hasAttribute"in e&&e.hasAttribute(t))&&(e.parentNode||e.host);)e=e.parentNode||e.host;return"hasAttribute"in e?e.getAttribute(t):null}static getClosestForm(e){for(;!(e.nodeName&&e.nodeName.toLowerCase()==="form")&&(e.parentNode||e.host);)e=e.parentNode||e.host;return e.nodeName?e:null}static loadJS(e){return fi(this,void 0,void 0,function*(){return new Promise(i=>fi(this,void 0,void 0,function*(){const s=document.createElement("script");s.src=e,s.onload=()=>i(!0),s.onerror=()=>i(!0),document.head.appendChild(s)}))})}static loadCSS(e){return fi(this,void 0,void 0,function*(){return new Promise(i=>fi(this,void 0,void 0,function*(){const s=document.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=e,s.onload=()=>i(!0),s.onerror=()=>i(!0),document.head.appendChild(s)}))})}}class be{static shallowEqual(e,t,i=!0){const s=Object.keys(e),r=Object.keys(t);if(s.length!==r.length&&i)return!1;for(const o of s){const l=e[o],p=t[o];if(i?l!==p:l!=p)return!1}return!0}static deepEqual(e,t,i=!0){const s=Object.keys(e),r=Object.keys(t);if(s.length!==r.length&&i)return!1;for(const o of s){const l=e[o],p=t[o],v=be.isObject(l)&&be.isObject(p),m=i?l!==p:l!=p;if(v&&!be.deepEqual(l,p)||!v&&m)return!1}return!0}static isObject(e){return e!=null&&typeof e=="object"}static isUndefindOrNull(e){return e==null}static traverse(e,t,i=!1){for(const s of t){const r=e[s];if(r===void 0)return;i&&be.isObject(r)?e=Object.assign(Array.isArray(r)?[]:{},e,r):e=e[s]}return e}static getURLSearchArray(e,t=""){let i=[];for(let s in e){const r=e[s];t&&(s=t+"["+s+"]"),be.isObject(r)?i=[...i,...this.getURLSearchArray(r,s)]:i.push(`${s}=${r}`)}return i}static getURLSearchString(e){return be.getURLSearchArray(e,"").join("&")}}var lt=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};class ue{set token(e){if(this._token=e,!e){ue.tokens.delete(this.serviceURL);return}ue.invalidTokens.includes(e)||ue.tokens.set(this.serviceURL,e)}get token(){return ue.invalidTokens.includes(this._token)?ue.tokens.get(this.serviceURL):this._token}handleInvalidToken(e){!e||ue.invalidTokens.includes(e)||(ue.invalidTokens.push(e),this.token=null)}constructor(e){this.addHTTPResponse=!1,this.cache="default",this.serviceURL=e.serviceURL,this.serviceURL||(this.serviceURL=document.location.origin),this.userName=e.userName,this.password=e.password,e.token&&(this.token=e.token),this.tokenProvider=e.tokenProvider,this.authToken=e.authToken,this.addHTTPResponse=e.addHTTPResponse||!1,this.credentials=e.credentials,this.cache=e.cache||"default"}handleResult(e,t){var i;return lt(this,void 0,void 0,function*(){this.lastResult=e;const s=(i=e.headers.get("content-type"))===null||i===void 0?void 0:i.toLowerCase(),r=e.status;let o={};if(!s||s.indexOf("text/")==0)o={text:yield e.text()};else try{o=yield e.json()}catch{o={}}return this.addHTTPResponse&&be.isObject(o)&&(o._sonic_http_response_=e),r===498&&!ue.failledTokenUpdates.has(this.serviceURL)&&(this.handleInvalidToken(this.token),t.apiMethod==="get"?o=yield this[t.apiMethod](t.path,t.additionalHeaders):o=yield this[t.apiMethod](t.path,t.data,t.method,t.additionalHeaders)),o})}auth(){return lt(this,void 0,void 0,function*(){if(this.token)return;if(ue.tokens.has(this.serviceURL)){this.token=ue.tokens.get(this.serviceURL);return}if(!this.tokenProvider)return;let e={};this.userName&&this.password?e={Authorization:"Basic "+window.btoa(unescape(encodeURIComponent(this.userName+":"+this.password)))}:this.authToken&&(e={Authorization:"Bearer "+this.authToken});const t=new URL(this.serviceURL),i=t.protocol+"//"+t.host,s=yield fetch(this.computeURL(this.tokenProvider,{serviceHost:i}),{headers:e,credentials:this.credentials});try{const r=yield s.json();r.token?this.token=r.token:ue.failledTokenUpdates.set(this.serviceURL,!0)}catch{ue.failledTokenUpdates.set(this.serviceURL,!0)}})}get(e,t){return lt(this,void 0,void 0,function*(){const i={apiMethod:"get",path:e,additionalHeaders:t},s=yield this.createHeaders(t),r=this.computeURL(e),o=JSON.stringify({url:r,headers:s});if(!ue.loadingGetPromises.has(o)){const p=new Promise(v=>lt(this,void 0,void 0,function*(){const m=yield fetch(r,{headers:s,credentials:this.credentials,cache:this.cache}),x=yield this.handleResult(m,i);v(x)}));ue.loadingGetPromises.set(o,p)}const l=yield ue.loadingGetPromises.get(o);return ue.loadingGetPromises.delete(o),l})}createHeaders(e){return lt(this,void 0,void 0,function*(){yield this.auth();const t={};return this.token&&(t.Authorization="Bearer "+this.token),t["Accept-Language"]=Tr.getLanguage(),e&&Object.assign(t,e),t})}computeURL(e,t={}){let i="";e.startsWith("http")?i=e:i=this.serviceURL+"/"+e,i.startsWith("http")||(i=window.location.origin+i);const s=new URL(i);for(const r in t)s.searchParams.set(r,t[r]);return s.toString().replace(/([^(https?:)])\/{2,}/g,"$1/")}send(e,t,i="POST",s){return lt(this,void 0,void 0,function*(){const r={apiMethod:"send",path:e,additionalHeaders:s,method:i,data:t},o=yield this.createHeaders(s);o.Accept="application/json",o["Content-Type"]="application/json";const l=yield fetch(this.computeURL(e),{headers:o,credentials:this.credentials,method:i,body:JSON.stringify(t)});return yield this.handleResult(l,r)})}submitFormData(e,t,i="POST",s){return lt(this,void 0,void 0,function*(){const r={apiMethod:"submitFormData",path:e,additionalHeaders:s,method:i,data:t},o=yield this.createHeaders(s);o.Accept="application/json";const l=new FormData,p=t;for(const m in p)l.set(m,p[m]);const v=yield fetch(this.computeURL(e),{headers:o,credentials:this.credentials,method:i,body:l});return yield this.handleResult(v,r)})}put(e,t,i){return lt(this,void 0,void 0,function*(){return this.send(e,t,"PUT",i)})}post(e,t,i){return lt(this,void 0,void 0,function*(){return this.send(e,t,"POST",i)})}delete(e,t,i){return lt(this,void 0,void 0,function*(){return this.send(e,t,"delete",i)})}}ue.loadingGetPromises=new Map;ue.tokens=new Map;ue.invalidTokens=[];ue.failledTokenUpdates=new Map;class xi{static ucFirst(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.substring(1)}static js(e){try{return Function("return "+e)()}catch{return""}}}var xr=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};function qr(n){return typeof n=="object"&&n!=null}class ht{constructor(e,t){for(this._proxies_=new Map,this._is_savable_=!1,this._invalidateListeners_=new Set,this._assignListeners_=new Set,this._mutationListeners_=new Set,this._fillListeners_=new Set,this._templateFillListeners_=new Set,this._lockInternalMutationPublishing_=!1,this._instanceCounter_=0,this._value_=e,this.parent=t||null,this.root=this,this._instanceCounter_=0;this.root.parent;)this.root=this.root.parent}delete(){for(const e of this._proxies_.values())e.delete();this._invalidateListeners_.clear(),this._assignListeners_.clear(),this._mutationListeners_.clear(),this._fillListeners_.clear(),this._templateFillListeners_.clear(),this._proxies_.clear(),ht.instances.delete(this._instanceCounter_)}hasListener(){return this._templateFillListeners_.size>0||this._assignListeners_.size>0||this._invalidateListeners_.size>0||this._mutationListeners_.size>0||this._fillListeners_.size>0}_publishInternalMutation_(e=!1){if(this._mutationListeners_.forEach(t=>t()),!e){if(!Z.changed&&this._is_savable_){Z.changed=!0,Z.saveId++;const t=Z.saveId;setTimeout(()=>Z.getInstance().saveToLocalStorage(t),1e3)}this.parent&&this.parent._publishInternalMutation_()}}_publishAssignement_(e=!1){this._assignListeners_.forEach(t=>t(this.get())),this._publishInternalMutation_(e)}_publishInvalidation_(){this._invalidateListeners_.forEach(e=>e())}_publishDynamicFilling_(e,t){this._fillListeners_.forEach(i=>{i[e]!==t&&(i[e]=t)}),this._publishTemplateFilling_(e,t)}_publishTemplateFilling_(e,t){this._templateFillListeners_.forEach(i=>{const s=Object.getOwnPropertyDescriptor(i,e);s&&!s.set&&!s.writable||(i.propertyMap&&i.propertyMap[e]&&(e=i.propertyMap[e]),typeof i[e]!="undefined"&&i[e]!==t&&(i[e]=t))})}onAssign(e){typeof e=="function"&&(this._assignListeners_.add(e),e(this.get()))}offAssign(e){this._assignListeners_.delete(e)}onInvalidate(e){typeof e=="function"&&this._invalidateListeners_.add(e)}offInvalidate(e){typeof e=="function"&&this._invalidateListeners_.delete(e)}invalidate(){this._publishInvalidation_()}onInternalMutation(e){typeof e=="function"&&(this._mutationListeners_.add(e),e())}offInternalMutation(e){typeof e=="function"&&this._mutationListeners_.delete(e)}startTemplateFilling(e){if(this._templateFillListeners_.add(e),typeof this._value_=="object")for(const t in this._value_){let i=t;const s=this._value_[t];e.propertyMap&&e.propertyMap[t]&&(i=e.propertyMap[t]),typeof e[t]!="undefined"&&e[t]!==s&&(e[i]=s)}}stopTemplateFilling(e){this._templateFillListeners_.delete(e)}startDynamicFilling(e){this._fillListeners_.add(e);for(const t in this._value_){const i=this._value_[t];e[t]!==i&&(e[t]=i)}}stopDynamicFilling(e){this._fillListeners_.delete(e)}set(e,t=!1){var i;if(this._value_===e||this._value_&&Object.prototype.hasOwnProperty.call(this._value_,"__value")&&Object.prototype.hasOwnProperty.call(e,"__value")&&this._value_.__value===e.__value)return!0;const s=this._value_;if(this._value_=qr(e)?e:{__value:e},Object.prototype.hasOwnProperty.call(this._value_,"__value"))return this._publishAssignement_(t),!0;for(const o in this._value_)typeof this._value_[o]=="undefined"&&delete this._value_[o];if(Array.from(this._proxies_.keys()).forEach(o=>{if(typeof this._value_[o]=="undefined"&&this._proxies_.has(o)){const l=this._proxies_.get(o);l!=null&&l.hasListener()?o!="_parent_"&&s[o]&&(this._value_[o]=null):this._proxies_.delete(o)}}),this._publishAssignement_(),qr(this._value_))for(const o in this._value_){const l=e[o],v=qr(l)?l:{__value:l};if(!this._proxies_.has(o)){const m=new Jt({},this);this._proxies_.set(o,m),m._proxies_.set("_parent_",this)}(i=this._proxies_.get(o))===null||i===void 0||i.set(v,!0),this._publishDynamicFilling_(o,l)}return!0}get(){if(Object.prototype.hasOwnProperty.call(this._value_,"__value")){const e=this._value_.__value;return e!=null?e:null}return this._value_}get $tag(){return this._instanceCounter_||(ht.instancesCounter++,this._instanceCounter_=ht.instancesCounter),ht.instances.set(this._instanceCounter_,this),'<reactive-publisher-proxy publisher="'+this._instanceCounter_+'"></reactive-publisher-proxy>'}}ht.instances=new Map;ht.instancesCounter=0;class Z{constructor(){if(this.enabledLocaStorageProxies=[],this.publishers=new Map,this.localStorageData={},this.isLocalStrorageReady=null,this.initialisedData=[],Z.instance!=null)throw"Singleton / use getInstance";Z.instance=this,this.isLocalStrorageReady=this.cleanStorageData()}cleanStorageData(){return xr(this,void 0,void 0,function*(){return new Promise(e=>{(()=>xr(this,void 0,void 0,function*(){try{let i=localStorage.getItem("publisher-proxies-data"),s=null;if(i&&(s=yield this.decompress(i,"gzip")),s)try{this.localStorageData=JSON.parse(s)}catch{this.localStorageData={}}else i=yield this.compress("{}","gzip"),localStorage.setItem("publisher-proxies-data",i),this.localStorageData={};const r=new Date().getTime()-1e3*60*60*12;for(const o in this.localStorageData)this.localStorageData[o].lastModifiationMS<r&&delete this.localStorageData[o];e(!0)}catch{window.requestAnimationFrame(()=>{e(!1)}),console.log("no publisher cache in this browser")}}))()})})}static getInstance(){return Z.instance==null?new Z:Z.instance}static get(e,t){return Z.getInstance().get(e,t)}static delete(e){return Z.getInstance().delete(e)}setLocalData(e,t){var i;return xr(this,void 0,void 0,function*(){yield this.isLocalStrorageReady,e.set(((i=this.localStorageData[t+"\xA4page:>"+document.location.pathname])===null||i===void 0?void 0:i.data)||e.get())})}get(e,t){const i=(t==null?void 0:t.localStorageMode)==="enabled";if(!this.publishers.has(e)){const r={},o=new Jt(r);this.set(e,o)}const s=this.publishers.get(e);return i&&this.initialisedData.indexOf(e)===-1&&(s._is_savable_=!0,this.initialisedData.push(e),this.setLocalData(s,e)),this.publishers.get(e)}set(e,t){this.publishers.set(e,t)}delete(e){return this.publishers.has(e)?(this.publishers.delete(e),!0):!1}saveToLocalStorage(e=0){return xr(this,void 0,void 0,function*(){if(!(e!==Z.saveId&&e%10!=0))try{if(!Z.changed||Z.saving)return;Z.saving=!0,Z.changed=!1;const t=Array.from(this.publishers.keys());let i=!1;for(const s of t){const r=this.publishers.get(s);if(!(r!=null&&r._is_savable_))continue;const o=r==null?void 0:r.get();!o||(this.localStorageData[s+"\xA4page:>"+document.location.pathname]={lastModifiationMS:new Date().getTime(),data:o},i=!0)}if(i){const s=yield this.compress(JSON.stringify(this.localStorageData),"gzip");localStorage.setItem("publisher-proxies-data",s)}if(Z.saving=!1,Z.changed){Z.saveId++;const s=Z.saveId;setTimeout(()=>this.saveToLocalStorage(s),1e3)}}catch{Z.saving=!1}})}compress(e,t){return xr(this,void 0,void 0,function*(){const i=new TextEncoder().encode(e),s=window,r=new s.CompressionStream(t),o=r.writable.getWriter();o.write(i),o.close();const l=yield new Response(r.readable).arrayBuffer(),p=new Uint8Array(l);let v="";for(let m=0;m<p.length;m++)v+=String.fromCharCode(p[m]);return btoa(v)})}decompress(e,t){return xr(this,void 0,void 0,function*(){const i=atob(e),r=Uint8Array.from(i,m=>m.charCodeAt(0)).buffer,o=window,l=new o.DecompressionStream(t),p=l.writable.getWriter();p.write(r),p.close();const v=yield new Response(l.readable).arrayBuffer();return new TextDecoder().decode(v)})}}Z.changed=!1;Z.saving=!1;Z.saveId=0;Z.instance=null;class Jt extends ht{constructor(e,t=null){super(e,t);const i=new Proxy(this,{get:function(s,r){if(["invalidate","onInvalidate","offInvalidate","onAssign","offAssign","startDynamicFilling","stopDynamicFilling","startTemplateFilling","stopTemplateFilling","onInternalMutation","offInternalMutation","set","get","$tag","_templateFillListeners_","_fillListeners_","_assignListeners_","_invalidateListeners_","_publishInternalMutation_","hasListener","delete","_mutationListeners_","_publishDynamicFilling_","_publishInvalidation_","_publishTemplateFilling_","_publishAssignement_","_proxies_","parent","_value_","_is_savable_","_lockInternalMutationPublishing_","_instanceCounter_"].includes(r))return s[r];if(!s._proxies_.has(r)){const o=s._value_[r],l=new Jt(qr(o)?o:{__value:o},s);l._proxies_.set("_parent_",i),s._proxies_.set(r,l)}return s._proxies_.get(r)},set:function(s,r,o){var l;if(r=="_value_")return s._value_=o,!0;if(r=="_is_savable_")return s._is_savable_=o,!0;if(r=="_instanceCounter_")return s._instanceCounter_=o,!0;if(!s._proxies_.has(r)){const v=new Jt({},s);v._proxies_.set("_parent_",i),s._proxies_.set(r,v)}return s._value_[r]!==o&&(s._value_[r]=o,s._publishDynamicFilling_(r,o),(l=s._proxies_.get(r))===null||l===void 0||l.set(qr(o)?o:{__value:o})),!0},deleteProperty:function(s,r){return s._publishDynamicFilling_(r,null),s._proxies_.delete(r),delete s._value_[r]},has:function(s,r){return r in s._value_&&r!="_lockInternalMutationPublishing_"},defineProperty:function(s,r,o){return o&&"value"in o&&(s._value_[r]=o.value),!0},getOwnPropertyDescriptor:function(s,r){return{enumerable:!0,configurable:!0}},ownKeys:function(s){return s._value_.__value?Object.keys(s._value_.__value):Object.keys(s._value_)}});return i}getProperty(e,t){return e[t]}}typeof ho!="undefined"&&(ho.exports={Publisher:Jt,PublisherManager:Z});class Du extends HTMLElement{constructor(){super(),this.publisherId="",this.onAssign=e=>{this.innerHTML=e.toString()}}connectedCallback(){var e;this.publisherId=this.getAttribute("publisher")||"",this.publisher=ht.instances.get(parseInt(this.publisherId)),(e=this.publisher)===null||e===void 0||e.onAssign(this.onAssign)}disconnectedCallback(){var e;(e=this.publisher)===null||e===void 0||e.offAssign(this.onAssign)}}customElements.define("reactive-publisher-proxy",Du);class ie{static disable(){!this.enabled||(this.enabled=!1,Array.from(ie.observedElements.keys()).forEach(e=>ie.unObserve(e)))}static observe(e){if(!e||!ie.enabled||ie.observedElements.has(e))return;const t=new MutationObserver(ie.onMutation),i={};i.childList=!0,i.subtree=!0,i.attributes=!0,i.attributeFilter=["data-bind"],t.observe(e,i),e.querySelectorAll("[data-bind]").forEach(s=>ie.addPublisherListeners(s)),ie.observedElements.set(e,t)}static unObserve(e){if(!e)return;const t=this.observedElements.get(e);!t||(t.disconnect(),e.querySelectorAll("[data-bind]").forEach(i=>ie.removePublisherListeners(i)))}static onAdded(e){e.hasAttribute&&e.hasAttribute("data-bind")&&ie.addPublisherListeners(e),e.querySelectorAll?e.querySelectorAll("[data-bind]").forEach(t=>ie.addPublisherListeners(t)):e.childNodes.forEach(t=>ie.onAdded(t))}static onRemoved(e){e.hasAttribute&&e.hasAttribute("data-bind")&&ie.removePublisherListeners(e),e.querySelectorAll?e.querySelectorAll("[data-bind]").forEach(t=>ie.removePublisherListeners(t)):e.childNodes.forEach(t=>ie.onRemoved(t))}static onMutation(e){for(const t of e)switch(t.type){case"attributes":ie.addPublisherListeners(t.target);break;case"childList":t.addedNodes.forEach(i=>{ie.onAdded(i)}),t.removedNodes.forEach(i=>{ie.onRemoved(i)});break}}static removePublisherListeners(e){const t=ie.publisherListeners.get(e);!t||(ie.publisherListeners.delete(e),t.forEach(i=>{var s;(s=i.publisher)===null||s===void 0||s.offAssign(i.onAssign)}))}static getVariablesDescriptor(e){let t=e.match(/(\$(?:\w+\\?\.?)+)/g);return t?t=t.map(i=>i.replace("$","")):t=[e],t=t.filter(i=>i.length>0),{expression:e.replace("\\",""),variables:t.map(i=>i.split(/\b\.\b/).map(s=>s.replace("\\","")))}}static getDataBindItems(e){return"attributes"in e?Array.from(e.attributes).filter(t=>t.name.indexOf("::")==0).map(t=>({propertyToUpdate:t.name.substring(2).replace(/-((html)|\w)/g,s=>s.substring(1).toUpperCase()),bindedVariablesDescriptor:ie.getVariablesDescriptor(t.value)})):[]}static getSubPublisher(e,t){if(!t)return e;for(const i of t)if(i!="_self_"){if(!e)return null;e=e[i]}return e}static addPublisherListeners(e){ie.removePublisherListeners(e);const t=Tr.getAncestorAttributeValue(e.parentNode||e.host||e,"dataProvider");if(!t)return;const i=Z.getInstance().get(t),s=ie.getDataBindItems(e),r=[];s.forEach(o=>{const l=o.bindedVariablesDescriptor,p=o.propertyToUpdate;for(const v of l.variables){const m=v;let x=i;x=ie.getSubPublisher(i,m);const A=e,R={publisher:x,onAssign:()=>{const N=l.variables.map(H=>{var _;return(_=ie.getSubPublisher(i,H))===null||_===void 0?void 0:_.get()});let $=l.expression,U=!1;if(N.length==1&&l.variables[0].join(".")==$.substring(1)){let H=N[0];H===null&&(H=""),A[p]=H;return}for(let H=0;H<N.length;H++){let _=N[H];const k=l.variables[H];_===null&&(U=!0,_=void 0),$=$.replace("$"+k.join("."),_)}if($.indexOf("|")!=-1){const H=$.indexOf("|");if(H==0)$=xi.js($.substring(1));else{const _=$.substring(0,H),k=$.substring(H+1),j=xi[_];$=U?"":j?j(k):$}}else $=U?"":$;A[p]=$}};x==null||x.onAssign(R.onAssign),r.push(R)}}),ie.publisherListeners.set(e,r)}}ie.observedElements=new Map;ie.enabled=!0;ie.publisherListeners=new Map;ie.observe(document.documentElement);window.SonicDataBindObserver||(window.SonicDataBindObserver=ie);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eu=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},Nu=(n,e,t)=>{e.constructor.createProperty(t,n)};function h(n){return(e,t)=>t!==void 0?Nu(n,e,t):Eu(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(n){return h({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uo=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const r=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return n!=null&&(o.finisher=function(l){n(l,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nr(n,e){return uo({descriptor:t=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _s;const Mu=((_s=window.HTMLSlotElement)===null||_s===void 0?void 0:_s.prototype.assignedElements)!=null?(n,e)=>n.assignedElements(e):(n,e)=>n.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function At(n){const{slot:e,selector:t}=n!=null?n:{};return uo({descriptor:i=>({get(){var s;const r="slot"+(e?`[name=${e}]`:":not([name])"),o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(r),l=o!=null?Mu(o,n):[];return t?l.filter(p=>p.matches(t)):l},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ze(n,e,t){let i,s=n;return typeof n=="object"?(s=n.slot,i=n):i={flatten:e},t?At({slot:s,flatten:e,selector:t}):uo({descriptor:r=>({get(){var o,l;const p="slot"+(s?`[name=${s}]`:":not([name])"),v=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(p);return(l=v==null?void 0:v.assignedNodes(i))!==null&&l!==void 0?l:[]},enumerable:!0,configurable:!0})})}var jt=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},zu=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};let mi=!1,$s=new Set;const ve=(n,e)=>{class t extends n{constructor(...s){super(),this.displayContents=!1,this.noAutoFill=!1,this.forceAutoFill=!1,this.renderOnPropsInternalChange=!1,this.noShadowDom=null,this.propertyMap=null,this.title="",this.dataProvider=null,this.bindPublisher=null,this._props=null,this.defferedDebug=null,this.debug=null,this.onAssign=r=>{this.props=r}}hasAncestorAttribute(s){return this.getAncestorAttributeValue(s)!=null}getAncestorAttributeValue(s){return Tr.getAncestorAttributeValue(this,s)}get props(){return this._props!==null||!this.publisher?this._props:this.publisher.get()}set props(s){typeof s=="string"&&["{","["].includes(s.trim().charAt(0))&&(s=JSON.parse(s)),s!=this._props&&(this._props=s,this.publisher&&this.publisher.get()!=s&&this.publisher.set(s),this.requestUpdate())}updated(s){super.updated(s);const o=[...(this.shadowRoot||this).children].filter(p=>p.tagName!="STYLE"),l=this.displayContents?"contents":o.length==0?"none":null;l?this.style.display=l:this.style.removeProperty("display")}connectedCallback(){if(t.instanceCounter++,this.hasAttribute("lazyRendering")){const s={root:null,rootMargin:Math.max(window.innerWidth,window.innerHeight)+"px"};let r=!0;const o=new IntersectionObserver(l=>{for(const p of l)if(r&&p.isIntersecting){this.addDebugger(),r=!1,this.initWording(),this.initPublisher(),o.disconnect();break}},s);o.observe(this)}else this.initWording(),this.initPublisher(),this.addDebugger();super.connectedCallback()}disconnectedCallback(){var s;this.removeDebugger(),super.disconnectedCallback(),this.publisher&&(this.publisher.stopTemplateFilling(this),this.publisher.offInternalMutation(this.requestUpdate)),this.wordingPublisher&&this.wordingPublisher.stopTemplateFilling(this),this.onAssign&&((s=this.publisher)===null||s===void 0||s.offAssign(this.onAssign))}addDebugger(){var s;if(this.hasAttribute("debug")&&!this.defferedDebug){if(!this.debug){this.debug=document.createElement("div");const r=this.debug.style;r.position="fixed",r.top="0",r.right="0",r.margin="auto",r.borderRadius=".7rem",r.backgroundColor="#0f1729",r.color="#c5d4f9",r.padding="16px 16px",r.margin="16px 16px",r.boxShadow="0 10px 30px -18px rgba(0,0,0,.3)",r.overflowY="auto",r.zIndex="99999999",r.maxHeight="calc(100vh - 32px)",r.fontFamily="Consolas, monospace",r.maxWidth="min(50vw,25rem)",r.fontSize="12px",r.minWidth="300px",r.overflowWrap="break-word",r.resize="vertical"}this.addEventListener("click",r=>{!r.ctrlKey||(r.preventDefault(),mi=!mi)}),this.dataProvider&&(window[this.dataProvider]=this.publisher),this.addEventListener("mouseover",()=>{mi||this.removeDebugger(),document.body.appendChild(this.debug),$s.add(this.debug)}),this.addEventListener("mouseout",()=>{mi||this.removeDebugger()}),(s=this.publisher)===null||s===void 0||s.onInternalMutation(()=>{var r;this.debug.innerHTML=`\u{1F916} DataProvider : "<b style="font-weight:bold;color:#fff;">${this.dataProvider}</b>"<br>
          <div style="font-size:10px;border-top:1px dashed;margin-top:5px;padding-left:23px;opacity:.6;padding-top:5px;">
            Variable disponible dans la console<br>
            ctrl + Clique : \xE9pingler / d\xE9s\xE9pingler
           </div>
          <pre style="margin-top:10px;background:transparent;padding:0;font-size:inherit;color:inherit;">${JSON.stringify((r=this.publisher)===null||r===void 0?void 0:r.get(),null,"  ")}</pre>`})}}removeDebugger(){$s.forEach(s=>{document.body.contains(s)&&document.body.removeChild(s)}),$s=new Set}getApiConfiguration(){const s=this.getAncestorAttributeValue("token"),r=this.getAncestorAttributeValue("addHTTPResponse")!=null,o=this.getAncestorAttributeValue("serviceURL");let l=null,p=null;const v=this.getAncestorAttributeValue("tokenProvider"),m=this.getAncestorAttributeValue("eventsApiToken");s||(l=this.getAncestorAttributeValue("userName"),p=this.getAncestorAttributeValue("password"));const x=this.getAncestorAttributeValue("credentials")||void 0,A=this.getAttribute("cache")||void 0||void 0;return{serviceURL:o,token:s,userName:l,password:p,authToken:m,tokenProvider:v,addHTTPResponse:r,credentials:x,cache:A}}initWording(){return zu(this,void 0,void 0,function*(){let s=!1;const r=Object.getOwnPropertyNames(this.constructor.prototype);for(const v of r)if(v.indexOf("wording_")==0){s=!0;break}if(!s)return;const o=Z.get("sonic-wording"),l=this.getAncestorAttributeValue("wordingProvider"),p=new ue(this.getApiConfiguration());if(l){const v=[],m=o.get();for(const x of r)if(x.indexOf("wording_")==0){const A=x.substring(8);m[x]||(o[x]="...",v.push(A))}if(v.length>0){const x=yield p.post(l,{labels:v});for(const A in x)o["wording_"+A]=x[A]}o.startTemplateFilling(this),this.wordingPublisher=o}})}createRenderRoot(){if(this.noShadowDom===""||this.getAttribute("noShadowDom")==="")return this;const s=super.createRenderRoot();return ie.observe(s),s}initPublisher(){if(!document)return;this.publisher&&(this.publisher.stopTemplateFilling(this),this.publisher.offInternalMutation(this.requestUpdate),this.onAssign&&this.publisher.offAssign(this.onAssign));const s=Z.getInstance();this.dataProvider||(this.dataProvider=this.getAncestorAttributeValue("dataProvider"));let r=this.dataProvider;if(!r&&this._props&&(this.dataProvider=r="__subscriber__"+t.instanceCounter),r){this.bindPublisher&&s.set(r,this.bindPublisher());let o=s.get(r,{localStorageMode:this.getAttribute("localStorage")||"disabled"});if(this.dataProvider=r,this.hasAttribute("subDataProvider")){const l=this.getAttribute("subDataProvider");this.dataProvider=r+"/"+l,o=be.traverse(o,l.split(".")),s.set(this.dataProvider,o),this.publisher=o}this.publisher=o}this.publisher&&(this._props&&this.publisher.set(this._props),this.noAutoFill||this.publisher.startTemplateFilling(this),this.renderOnPropsInternalChange&&this.publisher.onInternalMutation(this.requestUpdate),this.publisher.onAssign(this.onAssign))}}return t.instanceCounter=0,jt([h({type:Boolean})],t.prototype,"displayContents",void 0),jt([h({type:Boolean})],t.prototype,"noAutoFill",void 0),jt([h({type:Boolean})],t.prototype,"forceAutoFill",void 0),jt([h({type:Object})],t.prototype,"propertyMap",void 0),jt([h({type:String,attribute:"data-title"})],t.prototype,"title",void 0),jt([h({reflect:!0})],t.prototype,"dataProvider",void 0),jt([h()],t.prototype,"bindPublisher",void 0),jt([h()],t.prototype,"props",null),t};window.SonicPublisherManager||(window.SonicPublisherManager=Z);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=window,po=yi.ShadowRoot&&(yi.ShadyCSS===void 0||yi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fo=Symbol(),oa=new WeakMap;class Na{constructor(e,t,i){if(this._$cssResult$=!0,i!==fo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(po&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=oa.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&oa.set(t,e))}return e}toString(){return this.cssText}}const Ma=n=>new Na(typeof n=="string"?n:n+"",void 0,fo),F=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Na(t,n,fo)},Fu=(n,e)=>{po?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=yi.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},na=po?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ma(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Cs;const _i=window,aa=_i.trustedTypes,Iu=aa?aa.emptyScript:"",la=_i.reactiveElementPolyfillSupport,Ns={toAttribute(n,e){switch(e){case Boolean:n=n?Iu:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},za=(n,e)=>e!==n&&(e==e||n==n),ks={attribute:!0,type:String,converter:Ns,reflect:!1,hasChanged:za},Ms="finalized";class Cr extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=ks){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ks}static finalize(){if(this.hasOwnProperty(Ms))return!1;this[Ms]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(na(s))}else e!==void 0&&t.push(na(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Fu(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ks){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Ns).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Ns;this._$El=r,this[r]=l.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||za)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}Cr[Ms]=!0,Cr.elementProperties=new Map,Cr.elementStyles=[],Cr.shadowRootOptions={mode:"open"},la==null||la({ReactiveElement:Cr}),((Cs=_i.reactiveElementVersions)!==null&&Cs!==void 0?Cs:_i.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var As;const $i=window,Ar=$i.trustedTypes,ca=Ar?Ar.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ci="$lit$",xt=`lit$${(Math.random()+"").slice(9)}$`,mo="?"+xt,Uu=`<${mo}>`,er=document,Hr=()=>er.createComment(""),Wr=n=>n===null||typeof n!="object"&&typeof n!="function",Fa=Array.isArray,Ia=n=>Fa(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Ss=`[ 	
\f\r]`,Ur=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,da=/-->/g,ha=/>/g,Yt=RegExp(`>|${Ss}(?:([^\\s"'>=/]+)(${Ss}*=${Ss}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ua=/'/g,pa=/"/g,Ua=/^(?:script|style|textarea|title)$/i,Vu=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),S=Vu(1),st=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),fa=new WeakMap,Qt=er.createTreeWalker(er,129,null,!1);function Va(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ca!==void 0?ca.createHTML(e):e}const qa=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=Ur;for(let l=0;l<t;l++){const p=n[l];let v,m,x=-1,A=0;for(;A<p.length&&(o.lastIndex=A,m=o.exec(p),m!==null);)A=o.lastIndex,o===Ur?m[1]==="!--"?o=da:m[1]!==void 0?o=ha:m[2]!==void 0?(Ua.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=Yt):m[3]!==void 0&&(o=Yt):o===Yt?m[0]===">"?(o=s!=null?s:Ur,x=-1):m[1]===void 0?x=-2:(x=o.lastIndex-m[2].length,v=m[1],o=m[3]===void 0?Yt:m[3]==='"'?pa:ua):o===pa||o===ua?o=Yt:o===da||o===ha?o=Ur:(o=Yt,s=void 0);const R=o===Yt&&n[l+1].startsWith("/>")?" ":"";r+=o===Ur?p+Uu:x>=0?(i.push(v),p.slice(0,x)+Ci+p.slice(x)+xt+R):p+xt+(x===-2?(i.push(void 0),l):R)}return[Va(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class Zr{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const l=e.length-1,p=this.parts,[v,m]=qa(e,t);if(this.el=Zr.createElement(v,i),Qt.currentNode=this.el.content,t===2){const x=this.el.content,A=x.firstChild;A.remove(),x.append(...A.childNodes)}for(;(s=Qt.nextNode())!==null&&p.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const x=[];for(const A of s.getAttributeNames())if(A.endsWith(Ci)||A.startsWith(xt)){const R=m[o++];if(x.push(A),R!==void 0){const N=s.getAttribute(R.toLowerCase()+Ci).split(xt),$=/([.?@])?(.*)/.exec(R);p.push({type:1,index:r,name:$[2],strings:N,ctor:$[1]==="."?Ha:$[1]==="?"?Wa:$[1]==="@"?Za:Jr})}else p.push({type:6,index:r})}for(const A of x)s.removeAttribute(A)}if(Ua.test(s.tagName)){const x=s.textContent.split(xt),A=x.length-1;if(A>0){s.textContent=Ar?Ar.emptyScript:"";for(let R=0;R<A;R++)s.append(x[R],Hr()),Qt.nextNode(),p.push({type:2,index:++r});s.append(x[A],Hr())}}}else if(s.nodeType===8)if(s.data===mo)p.push({type:2,index:r});else{let x=-1;for(;(x=s.data.indexOf(xt,x+1))!==-1;)p.push({type:7,index:r}),x+=xt.length-1}r++}}static createElement(e,t){const i=er.createElement("template");return i.innerHTML=e,i}}function tr(n,e,t=n,i){var s,r,o,l;if(e===st)return e;let p=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const v=Wr(e)?void 0:e._$litDirective$;return(p==null?void 0:p.constructor)!==v&&((r=p==null?void 0:p._$AO)===null||r===void 0||r.call(p,!1),v===void 0?p=void 0:(p=new v(n),p._$AT(n,t,i)),i!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[i]=p:t._$Cl=p),p!==void 0&&(e=tr(n,p._$AS(n,e.values),p,i)),e}class Ba{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:er).importNode(i,!0);Qt.currentNode=r;let o=Qt.nextNode(),l=0,p=0,v=s[0];for(;v!==void 0;){if(l===v.index){let m;v.type===2?m=new Lr(o,o.nextSibling,this,e):v.type===1?m=new v.ctor(o,v.name,v.strings,this,e):v.type===6&&(m=new Ga(o,this,e)),this._$AV.push(m),v=s[++p]}l!==(v==null?void 0:v.index)&&(o=Qt.nextNode(),l++)}return Qt.currentNode=er,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Lr{constructor(e,t,i,s){var r;this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=tr(this,e,t),Wr(e)?e===G||e==null||e===""?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==st&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ia(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==G&&Wr(this._$AH)?this._$AA.nextSibling.data=e:this.$(er.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Zr.createElement(Va(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Ba(r,this),l=o.u(this.options);o.v(i),this.$(l),this._$AH=o}}_$AC(e){let t=fa.get(e.strings);return t===void 0&&fa.set(e.strings,t=new Zr(e)),t}T(e){Fa(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Lr(this.k(Hr()),this.k(Hr()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Jr{constructor(e,t,i,s,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=tr(this,e,t,0),o=!Wr(e)||e!==this._$AH&&e!==st,o&&(this._$AH=e);else{const l=e;let p,v;for(e=r[0],p=0;p<r.length-1;p++)v=tr(this,l[i+p],t,p),v===st&&(v=this._$AH[p]),o||(o=!Wr(v)||v!==this._$AH[p]),v===G?e=G:e!==G&&(e+=(v!=null?v:"")+r[p+1]),this._$AH[p]=v}o&&!s&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ha extends Jr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}const qu=Ar?Ar.emptyScript:"";class Wa extends Jr{constructor(){super(...arguments),this.type=4}j(e){e&&e!==G?this.element.setAttribute(this.name,qu):this.element.removeAttribute(this.name)}}class Za extends Jr{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=tr(this,e,t,0))!==null&&i!==void 0?i:G)===st)return;const s=this._$AH,r=e===G&&s!==G||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==G&&(s===G||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Ga{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){tr(this,e)}}const Bu={O:Ci,P:xt,A:mo,C:1,M:qa,L:Ba,R:Ia,D:tr,I:Lr,V:Jr,H:Wa,N:Za,U:Ha,F:Ga},ma=$i.litHtmlPolyfillSupport;ma==null||ma(Zr,Lr),((As=$i.litHtmlVersions)!==null&&As!==void 0?As:$i.litHtmlVersions=[]).push("2.8.0");const Hu=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const l=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Lr(e.insertBefore(Hr(),l),l,void 0,t!=null?t:{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ps,Os;class D extends Cr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Hu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return st}}D.finalized=!0,D._$litElement$=!0,(Ps=globalThis.litElementHydrateSupport)===null||Ps===void 0||Ps.call(globalThis,{LitElement:D});const va=globalThis.litElementPolyfillSupport;va==null||va({LitElement:D});((Os=globalThis.litElementVersions)!==null&&Os!==void 0?Os:globalThis.litElementVersions=[]).push("3.3.3");var Wu=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const ei=n=>{class e extends n{constructor(){super(...arguments),this.templates=null,this.templateValueAttribute="data-value",this.templateList=[],this.templateParts={},this.templatePartsList=[]}connectedCallback(){const i=this.templates||[...this.querySelectorAll("template")];for(const s of i)s.hasAttribute(this.templateValueAttribute)&&(this.templateParts[s.getAttribute(this.templateValueAttribute)]=s,this.templatePartsList.push(s));this.templateList=i.filter(s=>!s.getAttribute("data-value")),this.templateList.length==0&&(this.templateList=i),super.connectedCallback()}}return Wu([h({type:Array})],e.prototype,"templates",void 0),e};var Ce=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Zu="sonic-date";let xe=class extends ve(ei(D)){constructor(){super(...arguments),this.pageLanguage="fr",this.duAu=[],this._wording_billet_periode_validite="",this.designMode=null,this.time_zone=null,this.date=null,this.date_string=null,this.start_date_string=null,this.end_date_string=null,this.start_date=0,this.end_date=0,this.era="",this.year="numeric",this.month="short",this.day="2-digit",this.weekday="short",this.hour="2-digit",this.minute="2-digit",this.language="",this.renderIf=!0,this.now=!1,this.startDateObject=new Date,this.endDateObject=new Date}get wording_billet_periode_validite(){return this._wording_billet_periode_validite}set wording_billet_periode_validite(e){this._wording_billet_periode_validite=e,this.duAu=this.wording_billet_periode_validite.split("%s").map(t=>t.trim()),this.duAu.pop(),this.requestUpdate()}connectedCallback(){this.hasAttribute("wording_billet_periode_validite")||(this.wording_billet_periode_validite="Du %s au %s"),this.pageLanguage=Tr.getLanguage(),super.connectedCallback()}getDatesParts(e,t,i){const s=this.startDateObject;s.setTime(e*1e3);let r=[];if(t>0){const o=this.endDateObject;o.setTime(t*1e3);const l=s.toDateString()==o.toDateString();if(l||(delete i.hour,delete i.minute),r=new Intl.DateTimeFormat(this.language||this.pageLanguage,i).formatRangeToParts(s,o),!l){const v=r.find(m=>m.type=="literal"&&m.source=="shared"&&m.value.trim().length>0);v&&(v.value=" "+this.duAu[1]+" ",v.type="to"),this.designMode||r.unshift({type:"from",value:this.duAu[0]+" ",source:"shared"})}}else r=new Intl.DateTimeFormat(this.language||this.pageLanguage,i).formatToParts(s);return this.designMode&&r.forEach(o=>o.hidden=o.value.trim()==","),r[0].value=xi.ucFirst(r[0].value),r.filter(o=>o.hidden!==!0)}dateStringToSeconds(e){return new Date(e).getTime()/1e3}render(){if(!this.renderIf||(this.date_string&&(this.date=this.dateStringToSeconds(this.date_string)),this.date&&(this.start_date=this.date),this.start_date_string&&(this.start_date=this.dateStringToSeconds(this.start_date_string)),this.end_date_string&&(this.end_date=this.dateStringToSeconds(this.end_date_string)),!this.start_date&&!this.now&&!this.end_date))return G;if(this.start_date||(this.start_date=Date.now()/1e3),this.end_date>0&&this.end_date<this.start_date){const i=this.start_date;this.start_date=this.end_date,this.end_date=i}const e={year:this.year,month:this.month,day:this.day};this.weekday!=="hidden"&&(e.weekday=this.weekday),this.hour!=="hidden"&&(e.hour=this.hour),this.minute!=="hidden"&&(e.minute=this.minute),this.era&&(e.era=this.era),this.time_zone&&(e.timeZone=this.time_zone);const t=this.getDatesParts(this.start_date,this.end_date,e);return S`${t.map(i=>{const s=this.templateParts[i.type];if(s){const r=document.importNode(s.content,!0),o=r.children[0];return o.innerText.trim()==""&&(o.innerText=i.value),r}return S`<span class="${i.type}">${i.value}</span>`})}`}};Ce([h()],xe.prototype,"wording_billet_periode_validite",null);Ce([h({type:Boolean})],xe.prototype,"designMode",void 0);Ce([h({type:String})],xe.prototype,"time_zone",void 0);Ce([h({type:Number})],xe.prototype,"date",void 0);Ce([h({type:String})],xe.prototype,"date_string",void 0);Ce([h({type:String})],xe.prototype,"start_date_string",void 0);Ce([h({type:String})],xe.prototype,"end_date_string",void 0);Ce([h({type:Number})],xe.prototype,"start_date",void 0);Ce([h({type:Number})],xe.prototype,"end_date",void 0);Ce([h({type:String})],xe.prototype,"era",void 0);Ce([h({type:String})],xe.prototype,"year",void 0);Ce([h({type:String})],xe.prototype,"month",void 0);Ce([h({type:String})],xe.prototype,"day",void 0);Ce([h({type:String})],xe.prototype,"weekday",void 0);Ce([h({type:String})],xe.prototype,"hour",void 0);Ce([h({type:String})],xe.prototype,"minute",void 0);Ce([h({type:String})],xe.prototype,"language",void 0);Ce([h({type:Boolean})],xe.prototype,"renderIf",void 0);Ce([h({type:Boolean})],xe.prototype,"now",void 0);xe=Ce([E(Zu)],xe);var Ts;class se{static listen(){var e;if(!se.listening)return;const t=(e=document.location)===null||e===void 0?void 0:e.href.replace(document.location.origin,"");se.prevURL&&se.prevURL!=t&&(se.prevURL=t,se.listeners.forEach(i=>{i.location=t})),window.requestAnimationFrame(se.listen)}static offChange(e){const t=se.listeners.indexOf(e);t!=-1&&(se.listeners.splice(t,1),se.listeners.length==0&&(se.listening=!1))}static onChange(e){se.listening||(se.listening=!0,se.listen()),se.listeners.push(e),e.location=this.prevURL}static changeFromComponent(e){const t=e.goBack,i=document.referrer;if(t!=null){const v=document.location.origin,m=t||v,A=i.indexOf("http")==0?new URL(i).origin!=v:!1,R=i=="",N=history.length<3,$=R&&N,U=m!=document.location.href;if(A&&U||$){const _=history.state||{};_.concorde=_.concorde||{},_.concorde.hasDoneHistoryBack=!0,history.pushState(_,document.title),history.back(),document.location.replace(m)}else history.back();return}let s=e.getAttribute("to")||"";if(s||(s=e.href||""),!s)return;if(s.indexOf("#")==0){document.location.hash=s.substring(1);return}const r=new URL(s,document.location.href),o=r.pathname.split("/"),l=[];let p="";for(const v of o)v!=p&&l.push(v),p=v;s="/"+l.join("/")+r.search+(r.hash?+r.hash:""),e.hasAttribute("pushState")?history.pushState(null,"",s):e.hasAttribute("replaceState")?history.replaceState(null,"",s):document.location.href=s}static updateComponentActiveState(e){if(e.autoActive!="disabled"&&e.href&&e.href.indexOf("http")!=0){const t=new URL(e.href,document.location.href),i=new URL(e.location||"",document.location.origin);let s=!1;e.autoActive=="strict"?s=t.pathname==i.pathname&&t.hash==i.hash&&t.search==i.search:s=i.href.indexOf(t.href)==0,s?e.setAttribute("active","true"):e.removeAttribute("active")}}}se.listeners=[];se.listening=!1;se.prevURL=(Ts=document.location)===null||Ts===void 0?void 0:Ts.href.replace(document.location.origin,"");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rr=n=>(...e)=>({_$litDirective$:n,values:e});class jr{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ya="important",Gu=" !"+Ya,qe=Rr(class extends jr{constructor(n){var e;if(super(n),n.type!==ar.ATTRIBUTE||n.name!=="style"||((e=n.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(n,[e]){const{style:t}=n.element;if(this.ht===void 0){this.ht=new Set;for(const i in e)this.ht.add(i);return this.render(e)}this.ht.forEach(i=>{e[i]==null&&(this.ht.delete(i),i.includes("-")?t.removeProperty(i):t[i]="")});for(const i in e){const s=e[i];if(s!=null){this.ht.add(i);const r=typeof s=="string"&&s.endsWith(Gu);i.includes("-")||r?t.setProperty(i,r?s.slice(0,-11):s,r?Ya:""):t[i]=s}}return st}});var ct=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const vi=new Map,Dr=n=>{class e extends n{constructor(...i){super(),this.touched=!1,this.error=!1,this.autofocus=!1,this.required=!1,this.forceAutoFill=!1,this.disabled=null,this.formDataProvider="",this._name="",this._value="",this.onValueAssign=s=>{this.setValueFromPublisher(s)},this.onFormValueAssign=s=>{this.setFormValueFromPublisher(s)},this.onFormDataInValidate=()=>{const s=this.getFormPublisher();!(s&&s.isFormValid.get())||this.validateFormElement()}}get name(){return this._name}set name(i){this.hasAttribute("name")&&!this.forceAutoFill&&(i=this.getAttribute("name")),this._name=i,this.requestUpdate()}validateFormElement(){}updateDataValue(){const i=this.getAttribute("name");if(i){const s=this.getFormPublisher();s&&(s[i]=this.getValueForFormPublisher(),this.setFormValueFromPublisher(s[i].get()))}}getFormPublisher(){return this.formDataProvider||(this.formDataProvider=this.getAncestorAttributeValue("formDataProvider")),this.formDataProvider?Z.get(this.formDataProvider):null}getValueForFormPublisher(){return this.value}setValueFromPublisher(i){this.value=i}setFormValueFromPublisher(i){this.value=i}get value(){return this._value}set value(i){i==null&&(i=""),be.isObject(i)&&Object.prototype.hasOwnProperty.call(i,"__value")&&i._value==null&&(i=""),this._value!=i&&(this._value=i,this.updateDataValue(),this.requestUpdate())}initPublisher(){let i=this.getFormPublisher();const s=this.hasAncestorAttribute("initFromPublisher")&&this._name&&i[this._name].get()?i[this._name].get():this.getAttribute("value");this._name&&this.publisher&&this.publisher[this._name].offAssign(this.onValueAssign),this._name&&i&&i[this._name].offAssign(this.onFormValueAssign),super.initPublisher(),this.name||(this._name=this.getAttribute("name")),this.value||(this._value=this.getAttribute("value")),this.publisher&&this._name&&this.publisher[this._name].onAssign(this.onValueAssign),i=this.getFormPublisher(),this._name&&i&&(i[this._name].onAssign(this.onFormValueAssign),i.onInvalidate(this.onFormDataInValidate)),this.updateDataValue(),s&&(this.value=s)}handleBlur(){this.touched=!0}handleChange(i){this.value=i.target.value;const s=new Event("change");this.dispatchEvent(s)}addKeyboardNavigation(){const i=this.getAncestorAttributeValue("data-keyboard-nav");if(!i)return;const s=i.split(" "),r=s[0];if(!r)return;for(const l of s){vi.has(l)||vi.set(l,[]);const p=vi.get(l);(p==null?void 0:p.indexOf(this))==-1&&p.push(this)}const o=vi.get(r);this.addEventListener("keydown",l=>{var p;const v=l;if(!["ArrowDown","ArrowUp"].includes(v.key))return;const m="input:not([disabled]), button:not([disabled]), select:not([disabled]), textarea:not([disabled])",x=o==null?void 0:o.filter(N=>{var $;const U=($=N.shadowRoot)===null||$===void 0?void 0:$.querySelector(m);if(!U)return!1;const H=window.getComputedStyle(U);return H.display!=="none"&&H.display!==""&&H.pointerEvents!="none"&&H.visibility!=="hidden"&&U.getBoundingClientRect().width>0});let A=null;if(v.key=="ArrowDown"&&x){const N=x.indexOf(this);N==x.length-1?A=x[0]:A=x[N+1]}else if(v.key=="ArrowUp"&&x){const N=x.indexOf(this);N==0?A=x[x.length-1]:A=x[N-1]}const R=(p=A==null?void 0:A.shadowRoot)===null||p===void 0?void 0:p.querySelector(m);R&&R.focus&&(R.focus(),l.preventDefault())})}connectedCallback(){this.formDataProvider=this.getAncestorAttributeValue("formDataProvider"),super.connectedCallback(),this.addKeyboardNavigation()}disconnectedCallback(){super.disconnectedCallback(),this._name&&this.publisher&&this.publisher[this._name].offAssign(this.onValueAssign);const i=this.getFormPublisher();this._name&&i&&(i[this._name].offAssign(this.onFormValueAssign),i.offInvalidate(this.onFormDataInValidate))}}return ct([h({type:Boolean,reflect:!0})],e.prototype,"touched",void 0),ct([h({type:Boolean})],e.prototype,"error",void 0),ct([h({type:Boolean})],e.prototype,"autofocus",void 0),ct([h({type:Boolean})],e.prototype,"required",void 0),ct([h()],e.prototype,"forceAutoFill",void 0),ct([h({type:Boolean})],e.prototype,"disabled",void 0),ct([h({type:String,attribute:"data-aria-label"})],e.prototype,"ariaLabel",void 0),ct([h({type:String,attribute:"data-aria-labelledby"})],e.prototype,"ariaLabelledby",void 0),ct([h()],e.prototype,"name",null),ct([h()],e.prototype,"value",null),e};var Yu=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};class Ku{static delayPromise(e){return Yu(this,void 0,void 0,function*(){return new Promise(t=>{setTimeout(t,e)})})}}class Dt{static areEqual(e,t){return e.length===t.length?e.every((i,s)=>i===t[s]):!1}static from2d(e){return{to1D:()=>{let t=[];return e.forEach(i=>t=t.concat(i)),this.from(t)}}}static from(e){return{get:()=>e||[],everyItem:()=>({has:()=>({same:()=>({value:()=>({forKey:t=>{if(e.length<1)return!0;const i=(e[0]||{})[t];return e.every(s=>(s||{})[t]==i)}})})}),value:()=>({forKey:t=>Dt.from(e.map(i=>i[t]))}),copy:()=>({fromKey:t=>({toKey:i=>{e.forEach(s=>{s[i]=Array.isArray(s[t])?[...s[t]]:typeof s[t]=="object"&&s[t]!=null?Object.assign({},s[t]):s[t]})}})})}),map:t=>Dt.from(e.map(t)),filter:t=>Dt.from(e.filter(t)),find:t=>e.find(t),some:t=>e.some(t),every:t=>e.every(t),group:()=>({byKey:t=>{const i=[],s=new Map;for(const r of e){const o=r[t];if(!s.has(o)){const l=i.length;s.set(o,l);const p={items:[]};p[t]=o,i.push(p)}i[s.get(o)].items.push(r)}return Dt.from(i)}}),without:()=>({duplicates:()=>({forKey:t=>{const i=[...new Set(e.map(s=>s[t]))];return Dt.from(i.map(s=>e.find(r=>r[t]==s)))}}),itemsIn:t=>({havingSameValue:()=>({forKey:i=>{const s=(r,o)=>l=>r[o]!=l[o];return Dt.from(e.filter(r=>t.every(s(r,i))))}})})})}}}const Xu=Ku,Qu=Dt,Ju=ie,ep=xi,Gr=Tr,tp=se,vo=be,rp=Jt,Be=Z,ip=ue;window["concorde-utils"]=window["concorde-utils"]||{};window["concorde-utils"]={Utils:Xu,Arrays:Qu,DataBindObserver:Ju,Format:ep,HTML:Gr,LocationHandler:tp,Objects:vo,PublisherProxy:rp,PublisherManager:Be,api:ip};var _r=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const go=n=>{class e extends n{constructor(){super(...arguments),this._value="",this.forceAutoFill=!1,this.unique=null,this.radio=null,this.unCheckOnDisconnect=!1,this._checked=null,this.updateAllChecked=()=>{const i=this.getAttribute("name"),s=this.getCheckAllPublisher(),r=this.getFormPublisher();if(!!(s!=null&&s.hasCheckAll.get())&&!this.checksAll()&&s&&r&&i){if(r[this.name].get().length)(this.checked===null||s.checkMode.get()=="noneChecked"||s.checkMode.get()==null)&&(s.checkMode="someUnchecked");else{s.checkMode="noneChecked";return}const o=r[i].get(),l=s.values.get();if(l&&l.length){let p=l.length;for(const v of l)o.indexOf(v)==-1&&(p-=1);p==l.length&&(s.checkMode="allChecked"),p==0&&(s.checkMode="noneChecked")}l.indexOf(this.value)==-1&&(this.checked=null)}},this.onChecksAllRequest=i=>{this.removeAttribute("allChecked"),this.removeAttribute("indeterminate"),i=="allChecked"&&(this.checked=!0,this.setAttribute("allChecked","")),i=="noneChecked"&&(this.checked=null),i=="someUnchecked"&&(this.checksAll()&&(this.checked="indeterminate"),this.setAttribute("indeterminate",""))}}get value(){return this._value}set value(i){if(this.value==i||(this.hasAttribute("value")&&!this.forceAutoFill&&(i=this.getAttribute("value")),this._value==i)||i==null||(this._value=i,!this.value))return;const s=this.getFormPublisher();if(s&&this.name){let r=s[this.name].get();(this.radio||this.unique)&&(this.checked=r==i?!0:null),Array.isArray(r)||(r=[]),r.indexOf(i)!=-1&&(this.checked=!0)}this.checked==!0&&this.updateDataValue(),this.requestUpdate()}get checked(){return this._checked}set checked(i){if(this.setCheckedValue(i),this.checksAll()){const s=this.getCheckAllPublisher();if(s){if(this.checked===!0)s.checkMode="allChecked";else if(this.checked===null){s.checkMode="noneChecked";const r=this.getFormPublisher();r&&(r[this.name]=[])}}}this.requestUpdate()}validateFormElement(){var i;const s=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelector("input");if(!s||s.checkValidity())return;const r=this.getFormPublisher();if(r){const o=r[this.name].get();if((this.unique||this.radio)&&o!==null&&o.toString().length>0)return;r.isFormValid=!1,s.reportValidity()}}checksAll(){return this.hasAttribute("checksAll")}setCheckedValue(i){this._checked!=i&&(this._checked=i,this.updateDataValue(),this.requestUpdate(),setTimeout(()=>this.updateAllChecked(),1))}handleChange(){const i=this.checked===!0?this.radio?!0:null:!0;this.checked=i;const s=new Event("change");this.dispatchEvent(s)}getValueForFormPublisher(){const i=this.getFormPublisher();if(!i)return null;let s=i[this.name].get();if(this.radio)return this.checked===!0&&this.value!=null?this.value:s;if(this.unique)return this.checked===!0&&this.value!=null?this.value:null;Array.isArray(s)||(s=[]),s=s.slice(0);const r=s.indexOf(this.value);return this.checked===!0&&r===-1&&!this.checksAll()&&s.push(this.value),this.checked===null&&r!==-1&&s.splice(r,1),s}setFormValueFromPublisher(i){if(this.unique||this.radio){this.checked=this.value==i?!0:null;return}Array.isArray(i)||(i=[]),!this.checksAll()&&(this.checked=i.indexOf(this.value)!==-1?!0:null)}getCheckAllPublisher(){this.formDataProvider||(this.formDataProvider=this.getAncestorAttributeValue("formDataProvider"));const i=this.formDataProvider,s=this.getAttribute("name");return!i||!s?null:Be.get(i+"/"+s+"/_available_values_")}disconnectedCallback(){super.disconnectedCallback();const i=this.getCheckAllPublisher();if(i&&(i.checkMode.offAssign(this.onChecksAllRequest),!this.checksAll())){const s=i.values.get().slice(0),r=s.indexOf(this.value);r!=-1&&(s.splice(r,1),i.values=s)}setTimeout(()=>this.updateAllChecked(),1)}connectedCallback(){super.connectedCallback();const i=this.getFormPublisher();if(i&&this.name){const r=i[this.name].get();r&&Array.isArray(r)&&r.indexOf(this.value)!==-1&&(this.checked=!0)}const s=this.getCheckAllPublisher();s&&(s.checkMode.onAssign(this.onChecksAllRequest),this.checksAll()&&(s.hasCheckAll=!0),s.values.get()||(s.values=[]),this.checksAll()||(s.values=[...s.values.get(),this.value])),!!this.hasAttribute("checked")&&(!this.publisher||this.publisher.get().checked!==!1)&&setTimeout(()=>this.checked=!0,1)}}return _r([h()],e.prototype,"value",null),_r([h()],e.prototype,"forceAutoFill",void 0),_r([h({type:Boolean})],e.prototype,"unique",void 0),_r([h({type:Boolean})],e.prototype,"radio",void 0),_r([h({type:Boolean})],e.prototype,"unCheckOnDisconnect",void 0),_r([h()],e.prototype,"checked",null),e};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=n=>n!=null?n:G,vt=F`
  /*SIZES*/
  :host {
    --sc-fs: 1rem;
    --sc-lh: 1.2;
    font-size: var(--sc-fs);
    line-height: var(--sc-lh);
  }
  :host([size="2xs"]) {
    --sc-fs: 0.625rem;
  }
  :host([size="xs"]) {
    --sc-fs: 0.75rem;
  }
  :host([size="sm"]) {
    --sc-fs: 0.875rem;
  }
  :host([size="lg"]) {
    --sc-fs: 1.125rem;
  }
  :host([size="xl"]) {
    --sc-fs: 1.25rem;
  }
  :host([size="2xl"]) {
    --sc-fs: 1.5rem;
  }
`;var ye=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const sp="sonic-button";let pe=class extends go(Dr(ve(D))){constructor(){super(...arguments),this.type="default",this.variant="default",this.shape="default",this.direction="row",this.alignItems="center",this.justify="center",this.minWidth="0",this.icon=!1,this.autoActive="partial",this.loading=!1,this.hasPrefix=!1,this.hasSuffix=!1,this._href="",this.goBack=null,this.pushState=!1,this.active=!1,this._location=""}set href(e){this._href=e,this.href&&this.href.indexOf("http")!=0?se.onChange(this):se.offChange(this),this.requestUpdate()}get href(){return this._href}handleNavigation(e){e.preventDefault(),se.changeFromComponent(this)}handleChange(e){if(super.handleChange(),(this.pushState||this.goBack!==null)&&(e==null||e.preventDefault(),e==null||e.stopPropagation(),se.changeFromComponent(this)),this.hasAttribute("reset")){const t=this.getAttribute("reset"),i=t?Be.get(t):this.getFormPublisher();i&&i.set({})}}connectedCallback(){super.connectedCallback()}setCheckedValue(e){if(this.name){if(e?this.setAttribute("active","true"):this.removeAttribute("active"),e==this._checked)return;super.setCheckedValue(e)}}disconnectedCallback(){se.offChange(this),super.disconnectedCallback()}get location(){return this._location}set location(e){this._location=e,this.requestUpdate()}updated(e){(e.has("location")||e.has("href")||e.has("autoActive"))&&se.updateComponentActiveState(this)}render(){const e={flexDirection:this.direction,alignItems:this.alignItems,justifyContent:this.justify,align:this.align,minWidth:this.minWidth},t=S`
      <button
        part="button"
        class=${this.hasPrefix||this.hasSuffix?"has-prefix-or-suffix":""}
        style=${qe(e)}
        aria-label=${V(this.ariaLabel)}
        aria-labelledby=${V(this.ariaLabelledby)}
        @click=${this.handleChange}
      >
        <slot
          @slotchange=${this.onSlotChange}
          part="prefix"
          name="prefix"
        ></slot>
        <slot part="main" class="main-slot"></slot>
        <slot
          @slotchange=${this.onSlotChange}
          part="suffix"
          name="suffix"
        ></slot>
        ${this.loading==!0?S`<sonic-icon name="loader" class="loader"></sonic-icon>`:""}
      </button>
    `;return this.href?S`<a
          href="${this.href}"
          target=${V(this.target)}
          aria-label=${V(this.ariaLabel)}
          aria-labelledby=${V(this.ariaLabelledby)}
          @click=${this.pushState||this.goBack!==null?this.handleNavigation:null}
          >${t}</a
        >`:S`${t}`}onSlotChange(){var e,t;this.hasPrefix=!!(!((e=this.prefixes)===null||e===void 0)&&e.length),this.hasSuffix=!!(!((t=this.suffixes)===null||t===void 0)&&t.length)}};pe.styles=[vt,F`
      * {
        box-sizing: border-box;
      }
      :host {
        --sc-btn-gap: 0.35em;
        --sc-btn-py: 0.25em;
        --sc-btn-px: 1.1em;
        --sc-btn-fs: var(--sc-fs, 1rem);
        --sc-btn-fw: var(--sc-btn-font-weight);
        --sc-btn-ff: var(--sc-btn-font-family);

        --sc-btn-height: var(--sc-form-height);
        --btn-color: var(--sc-btn-color, var(--sc-base-content));
        --btn-bg: var(--sc-btn-bg, var(--sc-base-100));

        --sc-btn-border-style: solid;
        --sc-btn-border-width: var(--sc-form-border-width);
        --sc-btn-border-color: transparent;

        --btn-outline-bg-hover: var(
          --sc-btn-outline-bg-hover,
          var(--sc-base-100)
        );
        --sc-btn-ghost-bg-hover: var(--sc-base-100);

        --sc-btn-active-color: var(--sc-base);
        --sc-btn-hover-filter: brightness(0.98);
        --sc-btn-active-filter: brightness(0.97);
        --sc-btn-active-bg: var(--sc-base-content);

        --sc-item-rounded-tr: var(--sc-btn-rounded);
        --sc-item-rounded-tl: var(--sc-btn-rounded);
        --sc-item-rounded-bl: var(--sc-btn-rounded);
        --sc-item-rounded-br: var(--sc-btn-rounded);

        display: inline-flex;
        vertical-align: middle;
        box-sizing: border-box;
        -webkit-print-color-adjust: exact;
      }

      :host a {
        display: contents;
        color: unset;
      }

      :host button {
        display: flex;
        flex: 1;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;

        font-family: var(--sc-btn-ff);
        font-weight: var(--sc-btn-fw);
        font-size: var(--sc-btn-fs);

        cursor: pointer;
        text-align: center;
        line-height: 1.1;
        border-radius: var(--sc-item-rounded-tl) var(--sc-item-rounded-tr)
          var(--sc-item-rounded-br) var(--sc-item-rounded-bl);

        background: var(--btn-bg);
        color: var(--btn-color);

        padding-top: var(--sc-btn-py);
        padding-bottom: var(--sc-btn-py);
        padding-left: var(--sc-btn-px);
        padding-right: var(--sc-btn-px);

        border: var(--sc-btn-border-width) var(--sc-btn-border-style)
          var(--sc-btn-border-color);
        min-height: var(--sc-btn-height);
      }

      :host button.has-prefix-or-suffix {
        gap: var(--sc-btn-gap);
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
        --btn-color: var(--sc-base-content);
        --btn-bg: var(--sc-base-100);
      }

      :host([type="primary"]) button {
        --btn-color: var(--sc-primary-content);
        --btn-bg: var(--sc-primary);
      }
      :host([type="warning"]) button {
        --btn-color: var(--sc-warning-content);
        --btn-bg: var(--sc-warning);
      }
      :host([type="danger"]) button {
        --btn-color: var(--sc-danger-content);
        --btn-bg: var(--sc-danger);
      }
      :host([type="info"]) button {
        --btn-color: var(--sc-info-content);
        --btn-bg: var(--sc-info);
      }
      :host([type="success"]) button {
        --btn-color: var(--sc-success-content);
        --btn-bg: var(--sc-success);
      }
      :host([type="neutral"]) button {
        --btn-color: var(--sc-base);
        --btn-bg: var(--sc-base-600);
      }
      :host([type="custom"]) button {
        --btn-color: var(--sc-btn-custom-color);
        --btn-bg: var(--sc-btn-custom-bg);
      }

      /*UNSTYLED*/
      :host([variant="unstyled"]) {
        display: inline-block;
      }

      :host([variant="unstyled"]) button {
        all: unset;
        display: contents;
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
        color: var(--btn-bg);
        background: transparent;
      }

      :host([variant="ghost"][type="default"]) button {
        color: var(--btn-color);
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
        border-color: var(--btn-bg);
        color: var(--btn-bg);
        background: transparent;
      }

      :host([variant="outline"][type="default"]) button {
        border-color: var(--sc-base-400);
        color: var(--sc-base-500);
        background: transparent;
      }

      /*:host([variant="outline"]) button:focus,*/
      :host([variant="outline"]) button:hover {
        background: var(--btn-outline-bg-hover);
      }

      /*OUTLINE*/
      :host([variant="link"]:not([size])) {
        vertical-align: baseline;
        margin-left: 0.25em;
        margin-right: 0.25em;
      }

      :host([variant="link"]:not([size])) {
        font-size: inherit;
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
        color: var(--btn-bg);
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
        /*overflow: hidden;*/ /* fix bug #42622 */
        padding: 0;
        align-items: center;
        justify-content: 0;
        text-align: center !important;
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

      :host([active]:not([variant="ghost"]):not([variant="unstyled"])) button {
        background: var(--sc-btn-active-bg);
        color: var(--sc-btn-active-color);
        border-color: var(--sc-btn-active-bg);
      }

      :host([align="left"]) button {
        text-align: left;
      }

      :host([align="right"]) button {
        text-align: right;
      }

      .main-slot {
        flex-grow: 1;
        display: block;
      }

      :host([minWidth]) .main-slot {
        flex-grow: 0;
      }

      slot[name="suffix"],
      slot[name="prefix"] {
        flex-shrink: 0;
      }

      /*ALIGNEMENT DES ICONES
        permet de tous les avoir alignés dans un menu
      */
      ::slotted(sonic-icon) {
        min-width: 1em;
        text-align: center;
      }

      /*BOUTON Avec icone seulement*/
      :host([icon]) ::slotted(sonic-icon) {
        font-size: 1.2em;
        vertical-align: middle;
      }

      /*Tooltip ne joue pas sur le layout*/
      sonic-tooltip {
        display: contents;
      }

      /*OUTLINE*/
      :host(:not([active])) ::slotted([swap="on"]) {
        display: none !important;
      }

      :host([active]) ::slotted([swap="off"]) {
        display: none !important;
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
    `];ye([h({type:String,reflect:!0})],pe.prototype,"type",void 0);ye([h({type:String,reflect:!0})],pe.prototype,"variant",void 0);ye([h({type:String,reflect:!0})],pe.prototype,"size",void 0);ye([h({type:String,reflect:!0})],pe.prototype,"shape",void 0);ye([h({type:String})],pe.prototype,"direction",void 0);ye([h({type:String,reflect:!0})],pe.prototype,"alignItems",void 0);ye([h({type:String})],pe.prototype,"justify",void 0);ye([h({type:String,reflect:!0})],pe.prototype,"align",void 0);ye([h({type:String})],pe.prototype,"minWidth",void 0);ye([h({type:Boolean,reflect:!0})],pe.prototype,"icon",void 0);ye([h({type:String})],pe.prototype,"autoActive",void 0);ye([h({type:Boolean,reflect:!0})],pe.prototype,"loading",void 0);ye([ce()],pe.prototype,"hasPrefix",void 0);ye([ce()],pe.prototype,"hasSuffix",void 0);ye([At({flatten:!0,slot:"prefix"})],pe.prototype,"prefixes",void 0);ye([At({flatten:!0,slot:"suffix"})],pe.prototype,"suffixes",void 0);ye([h({type:String})],pe.prototype,"target",void 0);ye([h({type:String})],pe.prototype,"href",null);ye([h({type:String})],pe.prototype,"goBack",void 0);ye([h({type:Boolean})],pe.prototype,"pushState",void 0);ye([h({type:Boolean,reflect:!0})],pe.prototype,"active",void 0);pe=ye([E(sp)],pe);const op=F`

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

`,np=F`

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
  
`;var Ka=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},dt;const ap="sonic-loader";let it=dt=class extends D{constructor(){super(...arguments),this.mode="fixed"}static show(e){dt.loader||(dt.loader=document.createElement("sonic-loader"));const t=dt.loader;e||(e={}),e.mode&&t.setAttribute("mode",e.mode),e.container||(e.container=document.querySelector("sonic-theme")||document.body,e.mode="fixed"),e.container.appendChild(t),dt.callCounter++}static hide(){dt.callCounter--,!(dt.callCounter>0)&&dt.loader&&dt.loader.remove()}render(){return S`<div class="sonic-loader sonic-loader--${this.mode} ">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>`}};it.styles=[op,np,F`
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
    `];it.callCounter=0;Ka([h({type:String})],it.prototype,"mode",void 0);it=dt=Ka([E(ap)],it);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:lp}=Bu,cp=n=>n.strings===void 0,ga=()=>document.createComment(""),Vr=(n,e,t)=>{var i;const s=n._$AA.parentNode,r=e===void 0?n._$AB:e._$AA;if(t===void 0){const o=s.insertBefore(ga(),r),l=s.insertBefore(ga(),r);t=new lp(o,l,n,n.options)}else{const o=t._$AB.nextSibling,l=t._$AM,p=l!==n;if(p){let v;(i=t._$AQ)===null||i===void 0||i.call(t,n),t._$AM=n,t._$AP!==void 0&&(v=n._$AU)!==l._$AU&&t._$AP(v)}if(o!==r||p){let v=t._$AA;for(;v!==o;){const m=v.nextSibling;s.insertBefore(v,r),v=m}}}return t},Kt=(n,e,t=n)=>(n._$AI(e,t),n),dp={},hp=(n,e=dp)=>n._$AH=e,up=n=>n._$AH,Ls=n=>{var e;(e=n._$AP)===null||e===void 0||e.call(n,!1,!0);let t=n._$AA;const i=n._$AB.nextSibling;for(;t!==i;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ba=(n,e,t)=>{const i=new Map;for(let s=e;s<=t;s++)i.set(n[s],s);return i},Ni=Rr(class extends jr{constructor(n){if(super(n),n.type!==ar.CHILD)throw Error("repeat() can only be used in text expressions")}ct(n,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const s=[],r=[];let o=0;for(const l of n)s[o]=i?i(l,o):o,r[o]=t(l,o),o++;return{values:r,keys:s}}render(n,e,t){return this.ct(n,e,t).values}update(n,[e,t,i]){var s;const r=up(n),{values:o,keys:l}=this.ct(e,t,i);if(!Array.isArray(r))return this.ut=l,o;const p=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],v=[];let m,x,A=0,R=r.length-1,N=0,$=o.length-1;for(;A<=R&&N<=$;)if(r[A]===null)A++;else if(r[R]===null)R--;else if(p[A]===l[N])v[N]=Kt(r[A],o[N]),A++,N++;else if(p[R]===l[$])v[$]=Kt(r[R],o[$]),R--,$--;else if(p[A]===l[$])v[$]=Kt(r[A],o[$]),Vr(n,v[$+1],r[A]),A++,$--;else if(p[R]===l[N])v[N]=Kt(r[R],o[N]),Vr(n,r[A],r[R]),R--,N++;else if(m===void 0&&(m=ba(l,N,$),x=ba(p,A,R)),m.has(p[A]))if(m.has(p[R])){const U=x.get(l[N]),H=U!==void 0?r[U]:null;if(H===null){const _=Vr(n,r[A]);Kt(_,o[N]),v[N]=_}else v[N]=Kt(H,o[N]),Vr(n,r[A],H),r[U]=null;N++}else Ls(r[R]),R--;else Ls(r[A]),A++;for(;N<=$;){const U=Vr(n,v[$+1]);Kt(U,o[N]),v[N++]=U}for(;A<=R;){const U=r[A++];U!==null&&Ls(U)}return this.ut=l,hp(n,v),st}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Br=(n,e)=>{var t,i;const s=n._$AN;if(s===void 0)return!1;for(const r of s)(i=(t=r)._$AO)===null||i===void 0||i.call(t,e,!1),Br(r,e);return!0},ki=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while((t==null?void 0:t.size)===0)},Xa=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),mp(e)}};function pp(n){this._$AN!==void 0?(ki(this),this._$AM=n,Xa(this)):this._$AM=n}function fp(n,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)Br(i[r],!1),ki(i[r]);else i!=null&&(Br(i,!1),ki(i));else Br(this,n)}const mp=n=>{var e,t,i,s;n.type==ar.CHILD&&((e=(i=n)._$AP)!==null&&e!==void 0||(i._$AP=fp),(t=(s=n)._$AQ)!==null&&t!==void 0||(s._$AQ=pp))};class vp extends jr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Xa(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(Br(this,e),ki(this))}setValue(e){if(cp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const gp=new WeakMap;let ya=0;const Rs=new Map,wa=new WeakSet,xa=()=>new Promise(n=>requestAnimationFrame(n)),bp=[{opacity:0}],yp=[{opacity:0},{opacity:1}],_a=(n,e)=>{const t=n-e;return t===0?void 0:t},$a=(n,e)=>{const t=n/e;return t===1?void 0:t},js={left:(n,e)=>{const t=_a(n,e);return{value:t,transform:t==null||isNaN(t)?void 0:`translateX(${t}px)`}},top:(n,e)=>{const t=_a(n,e);return{value:t,transform:t==null||isNaN(t)?void 0:`translateY(${t}px)`}},width:(n,e)=>{let t;e===0&&(e=1,t={width:"1px"});const i=$a(n,e);return{value:i,overrideFrom:t,transform:i==null||isNaN(i)?void 0:`scaleX(${i})`}},height:(n,e)=>{let t;e===0&&(e=1,t={height:"1px"});const i=$a(n,e);return{value:i,overrideFrom:t,transform:i==null||isNaN(i)?void 0:`scaleY(${i})`}}},wp={duration:333,easing:"ease-in-out"},xp=["left","top","width","height","opacity","color","background"],Ca=new WeakMap;class _p extends vp{constructor(e){if(super(e),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,e.type===ar.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var e;(e=this.resolveFinished)===null||e===void 0||e.call(this),this.finished=new Promise(t=>{this.h=t})}async resolveFinished(){var e;(e=this.h)===null||e===void 0||e.call(this),this.h=void 0}render(e){return G}getController(){return gp.get(this.l)}isDisabled(){var e;return this.options.disabled||((e=this.getController())===null||e===void 0?void 0:e.disabled)}update(e,[t]){var i;const s=this.l===void 0;return s&&(this.l=(i=e.options)===null||i===void 0?void 0:i.host,this.l.addController(this),this.element=e.element,Ca.set(this.element,this)),this.optionsOrCallback=t,(s||typeof t!="function")&&this.u(t),this.render(t)}u(e){var t,i;e=e!=null?e:{};const s=this.getController();s!==void 0&&((e={...s.defaultOptions,...e}).keyframeOptions={...s.defaultOptions.keyframeOptions,...e.keyframeOptions}),(t=(i=e).properties)!==null&&t!==void 0||(i.properties=xp),this.options=e}v(){const e={},t=this.element.getBoundingClientRect(),i=getComputedStyle(this.element);return this.options.properties.forEach(s=>{var r;const o=(r=t[s])!==null&&r!==void 0?r:js[s]?void 0:i[s],l=Number(o);e[s]=isNaN(l)?o+"":l}),e}p(){let e,t=!0;return this.options.guard&&(e=this.options.guard(),t=((i,s)=>{if(Array.isArray(i)){if(Array.isArray(s)&&s.length===i.length&&i.every((r,o)=>r===s[o]))return!1}else if(s===i)return!1;return!0})(e,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&t&&this.element.isConnected,this.o&&(this.m=Array.isArray(e)?Array.from(e):e),this.o}hostUpdate(){var e;typeof this.optionsOrCallback=="function"&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=(e=this.t)!==null&&e!==void 0?e:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let e;this.prepare(),await xa;const t=this._(),i=this.A(this.options.keyframeOptions,t),s=this.v();if(this.g!==void 0){const{from:r,to:o}=this.O(this.g,s,t);this.log("measured",[this.g,s,r,o]),e=this.calculateKeyframes(r,o)}else{const r=Rs.get(this.options.inId);if(r){Rs.delete(this.options.inId);const{from:o,to:l}=this.O(r,s,t);e=this.calculateKeyframes(o,l),e=this.options.in?[{...this.options.in[0],...e[0]},...this.options.in.slice(1),e[1]]:e,ya++,e.forEach(p=>p.zIndex=ya)}else this.options.in&&(e=[...this.options.in,{}])}this.animate(e,i)}resetStyles(){var e;this.j!==void 0&&(this.element.setAttribute("style",(e=this.j)!==null&&e!==void 0?e:""),this.j=void 0)}commitStyles(){var e,t;this.j=this.element.getAttribute("style"),(e=this.webAnimation)===null||e===void 0||e.commitStyles(),(t=this.webAnimation)===null||t===void 0||t.cancel()}reconnected(){}async disconnected(){var e;if(!this.o||(this.options.id!==void 0&&Rs.set(this.options.id,this.g),this.options.out===void 0))return;if(this.prepare(),await xa(),(e=this.t)===null||e===void 0?void 0:e.isConnected){const i=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,i),this.options.stabilizeOut){const s=this.v();this.log("stabilizing out");const r=this.g.left-s.left,o=this.g.top-s.top;getComputedStyle(this.element).position!=="static"||r===0&&o===0||(this.element.style.position="relative"),r!==0&&(this.element.style.left=r+"px"),o!==0&&(this.element.style.top=o+"px")}}const t=this.A(this.options.keyframeOptions);await this.animate(this.options.out,t),this.element.remove()}prepare(){this.createFinished()}start(){var e,t;(t=(e=this.options).onStart)===null||t===void 0||t.call(e,this)}didFinish(e){var t,i;e&&((i=(t=this.options).onComplete)===null||i===void 0||i.call(t,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}_(){const e=[];for(let t=this.element.parentNode;t;t=t==null?void 0:t.parentNode){const i=Ca.get(t);i&&!i.isDisabled()&&i&&e.push(i)}return e}get isHostRendered(){const e=wa.has(this.l);return e||this.l.updateComplete.then(()=>{wa.add(this.l)}),e}A(e,t=this._()){const i={...wp};return t.forEach(s=>Object.assign(i,s.options.keyframeOptions)),Object.assign(i,e),i}O(e,t,i){e={...e},t={...t};const s=i.map(l=>l.animatingProperties).filter(l=>l!==void 0);let r=1,o=1;return s!==void 0&&(s.forEach(l=>{l.width&&(r/=l.width),l.height&&(o/=l.height)}),e.left!==void 0&&t.left!==void 0&&(e.left=r*e.left,t.left=r*t.left),e.top!==void 0&&t.top!==void 0&&(e.top=o*e.top,t.top=o*t.top)),{from:e,to:t}}calculateKeyframes(e,t,i=!1){var s;const r={},o={};let l=!1;const p={};for(const v in t){const m=e[v],x=t[v];if(v in js){const A=js[v];if(m===void 0||x===void 0)continue;const R=A(m,x);R.transform!==void 0&&(p[v]=R.value,l=!0,r.transform=`${(s=r.transform)!==null&&s!==void 0?s:""} ${R.transform}`,R.overrideFrom!==void 0&&Object.assign(r,R.overrideFrom))}else m!==x&&m!==void 0&&x!==void 0&&(l=!0,r[v]=m,o[v]=x)}return r.transformOrigin=o.transformOrigin=i?"center center":"top left",this.animatingProperties=p,l?[r,o]:void 0}async animate(e,t=this.options.keyframeOptions){this.start(),this.frames=e;let i=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=e=this.options.onFrames(this),this.log("modified frames",e)),e!==void 0)){this.log("animate",[e,t]),i=!0,this.webAnimation=this.element.animate(e,t);const s=this.getController();s==null||s.add(this);try{await this.webAnimation.finished}catch{}s==null||s.remove(this)}return this.didFinish(i),i}isAnimating(){var e,t;return((e=this.webAnimation)===null||e===void 0?void 0:e.playState)==="running"||((t=this.webAnimation)===null||t===void 0?void 0:t.pending)}log(e,t){this.shouldLog&&!this.isDisabled()&&console.log(e,this.options.id,t)}}const wi=Rr(_p),$p={cancel:`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"check-circled-outline":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,check:`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"emoji-puzzled":'<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 15.5s1.5-2 4.5-2 4.5 2 4.5 2M3 4c0-2.754 4-2.754 4 0 0 1.967-2 1.64-2 4M5 11.01l.01-.011" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 9a.5.5 0 110-1 .5.5 0 010 1zM10.5 9a.5.5 0 110-1 .5.5 0 010 1z" fill="#000" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',"info-empty":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 11.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,loader:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>',"minus-small":`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
</svg>
`,"more-horiz":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 12.5C18.2761 12.5 18.5 12.2761 18.5 12C18.5 11.7239 18.2761 11.5 18 11.5C17.7239 11.5 17.5 11.7239 17.5 12C17.5 12.2761 17.7239 12.5 18 12.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 12.5C6.27614 12.5 6.5 12.2761 6.5 12C6.5 11.7239 6.27614 11.5 6 11.5C5.72386 11.5 5.5 11.7239 5.5 12C5.5 12.2761 5.72386 12.5 6 12.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"more-vert":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18.5C12.2761 18.5 12.5 18.2761 12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18C11.5 18.2761 11.7239 18.5 12 18.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6.5C12.2761 6.5 12.5 6.27614 12.5 6C12.5 5.72386 12.2761 5.5 12 5.5C11.7239 5.5 11.5 5.72386 11.5 6C11.5 6.27614 11.7239 6.5 12 6.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"nav-arrow-down":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"warning-circled-outline":`<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7L12 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.01L12.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`};var Qa={core:$p};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zs extends jr{constructor(e){if(super(e),this.et=G,e.type!==ar.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===G||e==null)return this.ft=void 0,this.et=e;if(e===st)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}zs.directiveName="unsafeHTML",zs.resultType=1;const me=Rr(zs);var ka=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};const gi=new Map,Ai={heroicons:{url:"https://cdn.jsdelivr.net/npm/heroicons@2.0.4/24/$prefix/$name.svg",defaultPrefix:"outline"},iconoir:{url:"https://cdnjs.cloudflare.com/ajax/libs/iconoir/5.1.4/icons/$name.svg"},feathers:{url:"https://cdn.jsdelivr.net/npm/feather-icons@4.29.0/dist/icons/$name.svg"},lucide:{url:"https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/$name.svg"},material:{url:"https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/$name/$prefix.svg",defaultPrefix:"regular"},fontAwesome:{url:"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/$prefix/$name.svg",defaultPrefix:"regular"},custom:{url:"",defaultPrefix:""}};let Aa=!1;function Cp(){var n,e;Aa||(Aa=!0,Ai.custom.url=((n=document.querySelector("[customIconLibraryPath]"))===null||n===void 0?void 0:n.getAttribute("customIconLibraryPath"))||"",Ai.custom.defaultPrefix=((e=document.querySelector("[customIconDefaultPrefix]"))===null||e===void 0?void 0:e.getAttribute("customIconDefaultPrefix"))||"")}class Si{static registerIcons(e){const t=Qa;for(const i in e){const s=e[i],r=t[i]||{};for(const o in s)r[o]=s[o];t[i]=r}}}Si.fontAwesomeNext={get:n=>ka(void 0,void 0,void 0,function*(){const e=n.library,t=n.name||"",i=Qa;if(e=="custom"&&Cp(),e&&Ai[e]){const s=Ai[e],r=n.prefix||s.defaultPrefix||"",o=i[e]||{};i[e]=o;const l=r+"-"+t;if(o[l])return me(o[l]);const p=s.url.replace("$prefix",r).replace("$name",t);if(!gi.has(p)){const m=new Promise(x=>ka(void 0,void 0,void 0,function*(){const A=yield fetch(p);if(!A.ok){x(`<b title="Erreur ${A.status}">\u{1F636}</b>`);return}try{const R=yield A.text();x(R)}catch{x(null)}}));gi.set(p,m)}const v=yield gi.get(p);return gi.delete(p),o[l]=v||"",me(v)}return me(i.core[n.name]||"")})};Si.default=Si.fontAwesomeNext;var Mi=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},kp=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};const Ap="sonic-icon";let Sr=class extends D{constructor(){super(...arguments),this.renderId=0,this.iconText="",this._name="",this._prefix="",this._library=""}updateIcon(){if(!this.name)return;this.renderId++;const e=this.renderId;(window.queueMicrotask||window.requestAnimationFrame)(()=>kp(this,void 0,void 0,function*(){e==this.renderId&&(this.iconText=yield Si.default.get({name:this.name,prefix:this.prefix,library:this.library}),this.requestUpdate())}))}get name(){return this._name}set name(e){this._name=e,this.updateIcon()}get prefix(){return this._prefix}set prefix(e){this._prefix=e,this.updateIcon()}get library(){return this._library}set library(e){this._library=e,this.updateIcon()}render(){return this.name?(this.style.removeProperty("display"),this.iconText):(this.style.display="none",G)}};Sr.styles=F`
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

    svg:not([fill="none"]) {
      fill: currentColor;
    }

    svg[fill="none"] {
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

    :host([size="3xl"]) svg {
      --sc-icon-size: 2.8em;
    }
  `;Mi([h({type:String})],Sr.prototype,"name",null);Mi([h({type:String})],Sr.prototype,"prefix",null);Mi([h({type:String})],Sr.prototype,"library",null);Sr=Mi([E(Ap)],Sr);const zi=F`
  .custom-scroll {
    overflow: auto !important;
    overflow-y: overlay !important;
  }

  .custom-scroll::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    border: solid 0.15rem transparent;
    border-radius: var(--sc-rounded);
    background: transparent;
  }

  .custom-scroll::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 2rem 2rem var(--sc-scrollbar-bg);
    border-radius: var(--sc-rounded);
    border: solid 0.15rem transparent;
  }
`;var gt=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Sp={warning:"warning-circled-outline",success:"check-circled-outline",error:"warning-circled-outline",info:"info-empty"},Pp="sonic-toast-item";let Ke=class extends D{constructor(){super(...arguments),this.title="",this.id="",this.text="",this.status="",this.ghost=!1,this.preserve=!1,this.dismissForever=!1,this.maxHeight="10rem",this.visible=!0}render(){if(this.dismissForever){const e=localStorage.getItem("sonic-toast-dismissed")||"{}";if(JSON.parse(e)[this.id])return G}return this.visible?S`<div
      class="sonic-toast ${this.status} ${this.ghost?"ghost":""}"
    >
    
    <button aria-label="Close" class="sonic-toast-close" @click=${()=>this.hide()}>
      <sonic-icon  name="cancel" size="lg"></sonic-icon>
    </button>
    <div class="sonic-toast-content custom-scroll"  style="max-height: ${this.maxHeight} ;">
      
        ${this.status&&S`<sonic-icon  name=${Sp[this.status]} class="sonic-toast-icon" size="2xl"></sonic-icon>`}
        
          
          <div class="sonic-toast-text">
            ${this.title?S`<div class="sonic-toast-title">${this.title}</div>`:""}
            ${this.text?me(this.text):""}
          <slot></slot>
          </div>
          
          ${this.preserve?"":this.autoHide()}
        </div>
    </div>`:G}hide(){if(this.closest("sonic-toast")||(this.visible=!1),this.dismissForever){const e=localStorage.getItem("sonic-toast-dismissed")||"{}",t=JSON.parse(e);t[this.id]=!0,localStorage.setItem("sonic-toast-dismissed",JSON.stringify(t))}this.dispatchEvent(new CustomEvent("hide",{bubbles:!0}))}show(){this.visible=!0}autoHide(){setTimeout(()=>{this.hide()},4200)}};Ke.styles=[zi,F`
      * {
        box-sizing: border-box;
      }
      :host {
        display: block;
        pointer-events: auto;
        position: relative;
        --sc-toast-status-color: transparent;
        --sc-toast-color: var(--sc-base-content);
        --sc-toast-bg: var(--sc-base);
        --sc-toast-rounded: var(--sc-rounded-md);
        --sc-toast-shadow: var(--sc-shadow-lg);
      }

      .fixed-area {
        position: fixed;
        bottom: 1.25rem;
        right: 1.25rem;
        z-index: 10000;
        display: flex;
        flex-direction: column-reverse;
      }

      .sonic-toast {
        position: relative;
        pointer-events: auto;
        overflow:hidden;
        line-height: 1.25;
        color: var(--sc-toast-color);
        box-shadow: var(--sc-toast-shadow);
        border-radius: var(--sc-toast-rounded);
        background: var(--sc-toast-bg);
      }

      .sonic-toast-content {
        padding: 1em 2.5rem 1em 1em;
        display: flex;
        gap: 0.5rem;
        overflow: auto;
        position:relative;
      } 

      .sonic-toast-text {
        align-self: center;
        margin-top: auto;
        margin-bottom: auto;
        max-width:70ch;
        line-height: 1.2;
      }

      ::slotted(a:not(.btn)),
      .sonic-toast-text a {
        color: inherit !important;
        text-decoration: underline !important;
        text-underline-offset: 0.15rem;
      }

      ::slotted(:is(p, ul, ol, hr, h1, h2, h3, h4, h5, h6)),
      .sonic-toast-text :is(p, ul, ol, hr, h1, h2, h3, h4, h5, h6) {
        margin: 0 0 0.3em !important;
      }

      ::slotted(li),
      .sonic-toast-text li {
        margin-bottom: .15em !important;
      }

      ::slotted( :is(p, ul, ol, hr, h1, h2, h3, h4, h5, h6):last-child),
      .sonic-toast-text > :is(p, ul, ol, hr, h1, h2, h3, h4, h5, h6):last-child {
        margin-bottom: 0 !important;
      } 


      /*BUTTON CLOSE*/
      .sonic-toast-close {
        all: unset;
        position: absolute;
        z-index:4;
        pointer-events: initial;
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
        font-size: 1.15rem;
        margin: 0.15em 0 0.25em;
        line-height: 1.2;
      }

      /*STATUS*/
      .success {
        --sc-toast-status-color: var(--sc-success);
        --sc-toast-title-color: var(--sc-toast-status-color);
      }

      .error {
        --sc-toast-status-color: var(--sc-danger);
        --sc-toast-title-color: var(--sc-toast-status-color);
      }

      .warning {
        --sc-toast-status-color: var(--sc-warning);
        --sc-toast-title-color: var(--sc-toast-status-color);
      }

      .info {
        --sc-toast-status-color: var(--sc-info);
        --sc-toast-title-color: var(--sc-toast-status-color);
      }

      .success,
      .error,
      .info,
      .warning {
        border-top: 3px solid var(--sc-toast-status-color, currentColor);
      }

      .sonic-toast:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        opacity: 0.05;
        pointer-events: none;
        transition: 0.2s;
        border-radius: var(--sc-toast-rounded);
        background-color: var(--sc-toast-status-color);
      }
      
      .sonic-toast:hover:before {
        opacity: 0.025;
      }

      .info .sonic-toast-icon,
      .error .sonic-toast-icon,
      .success .sonic-toast-icon,
      .warning .sonic-toast-icon {
        color: var(--sc-toast-status-color, currentColor);
      }

      .sonic-toast-icon {
        position:sticky;
        top:0;
      }

      .ghost {
        opacity: 0.85;
        pointer-events: none;
      }

    

    `];gt([h({type:String})],Ke.prototype,"title",void 0);gt([h({type:String})],Ke.prototype,"id",void 0);gt([h({type:String})],Ke.prototype,"text",void 0);gt([h({type:String})],Ke.prototype,"status",void 0);gt([h({type:Boolean})],Ke.prototype,"ghost",void 0);gt([h({type:Boolean})],Ke.prototype,"preserve",void 0);gt([h({type:Boolean})],Ke.prototype,"dismissForever",void 0);gt([h({type:String})],Ke.prototype,"maxHeight",void 0);gt([ce()],Ke.prototype,"visible",void 0);Ke=gt([E(Pp)],Ke);var Ja=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Op="sonic-toast";let rt=class extends D{constructor(){super(...arguments),this.toasts=[]}createRenderRoot(){return this}render(){const e=window.parent!=window;let t={pointerEvents:"none",gap:"1rem",display:"flex",margin:"1rem"};return e||(t=Object.assign(Object.assign({},t),{margin:"0",width:"calc(100% - 2.5rem)",position:"fixed",bottom:"1.25rem",right:"1.25rem",zIndex:"10000",maxWidth:"64ch",flexDirection:"column-reverse"})),this.toasts?S`<div aria-live="polite" style=${qe(t)}>
      ${Ni(this.toasts,i=>i.id,i=>S`
          <sonic-toast-item
            maxHeight=${e?"none":"10rem"}
            status=${V(i.status)}
            title=${V(i.title)}
            ?ghost=${i.ghost}
            ?dismissForever=${i.dismissForever}
            ?preserve=${i.preserve}
            id=${V(i.id)}
            @hide=${()=>this.removeItem(i)}
            ${wi({keyframeOptions:{duration:250,easing:"cubic-bezier(0.250, 0.250, 0.420, 1.225)"},in:[{transform:"translateY(0) scale(1.25)",boxShadow:"0 0 0 rgba(0,0,0,0)",opacity:0}],out:[{transform:"scale(.90) ",opacity:0,duration:3e3,easing:"ease-in-out"}],stabilizeOut:!0})}
          >
            <!-- Le texte est passé dans le slot et non pas en propriété pour contrer des problèmatiques de shadow-dom et d'appel exterieur (exemple: fancybox) -->
            ${i.text?me(i.text):""}
          </sonic-toast-item>
        `)}
    </div>`:G}static removeAll(){const e=document.querySelector("sonic-toast");!e||(e.toasts=e.toasts.filter(t=>t.ghost))}static add(e){var t;if(!document.querySelector("sonic-toast")){const p=document.createElement("sonic-toast");(document.querySelector("sonic-theme")||document.body).prepend(p)}const i=document.querySelector("sonic-toast"),s=(t=e.id)!==null&&t!==void 0?t:new Date().valueOf(),o=new RegExp("</a>|</.*?button>|</.*?input>|</.*?textarea>|</.*?select>").test(e.text),l={id:s,text:e.text,title:e.title,status:e.status,preserve:o?!0:e.preserve,ghost:e.ghost,dismissForever:e.dismissForever};if(e.dismissForever&&e.id){const p=localStorage.getItem("sonic-toast-dismissed")||"{}";if(JSON.parse(p)[e.id])return null}if(i.toasts.length>0){const p=Object.assign({},l);for(const v of i.toasts){const m=Object.assign({},v);if(p.id=m.id=0,be.shallowEqual(p,m))return null}}return i.toasts=[...i.toasts,l],l}static removeItem(e){const t=document.querySelector("sonic-toast");!t||t.removeItem(e)}removeItem(e){!e||(this.toasts=this.toasts.filter(t=>(t=Object.assign({},t),delete t.id,!be.shallowEqual(t,e,!1))))}};Ja([h({type:Array})],rt.prototype,"toasts",void 0);rt=Ja([E(Op)],rt);typeof window!="undefined"&&(window.SonicToast=rt);var bi=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Tp=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};const bo=(n,e)=>{class t extends n{constructor(...s){super(),this.api=null,this.key="",this.isFirstLoad=!0,this.isLoading=!1,this.iObserver=null,this.isDefaultLoaderEnabled=!0,this.isFetchEnabled=!0,this._endPoint="",this.requestId=0,this.refetchEveryMs=0,this.dataProvider=""}get props(){return super.props}set props(s){super.props=s}set endPoint(s){this._endPoint=s,this.isConnected&&this._fetchData()}get endPoint(){return this._endPoint}_fetchData(){return Tp(this,void 0,void 0,function*(){if(!this.isFetchEnabled||(this.api=new ue(this.getApiConfiguration()),!this.api)||(this.dispatchEvent(new CustomEvent("loading",{detail:this})),this.getAttribute("localStorage")==="enabled"&&(yield Be.getInstance().isLocalStrorageReady),!this.isConnected))return;const s=this.isDefaultLoaderEnabled&&!this.hasAttribute("noLoader");s&&it.show();const r=Be.getInstance().get(this.getAncestorAttributeValue("headersDataProvider")).get();this.isLoading=!0,be.isObject(this.props)&&Object.keys(this.props||{}).length>0&&this.isFirstLoad&&(this.dispatchEvent(new CustomEvent("load",{detail:this})),this.isFirstLoad=!1,this.isLoading=!1);let o=yield this.api.get(this.endPoint||this.dataProvider||"",r);if(!this.isConnected){s&&it.hide();return}if(o)o._sonic_http_response_&&!o._sonic_http_response_.ok&&Object.keys(o).length===1&&rt.add({text:"Network Error",status:"error"});else{rt.add({text:"Network Error",status:"error"}),this.isLoading=!1,s&&it.hide();return}if(s&&it.hide(),this.key){const l=o._sonic_http_response_;o=be.traverse(o,this.key.split("."),this.hasAttribute("preserveOtherKeys")),o&&be.isObject(o)&&l&&(o._sonic_http_response_=l)}this.props=o,this.dispatchEvent(new CustomEvent("load",{detail:this})),this.isFirstLoad=!1,this.isLoading=!1,this.refetchEveryMs&&this.isConnected&&(this.refetchTimeOutId=setTimeout(()=>this._fetchData(),this.refetchEveryMs))})}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this.publisher)===null||s===void 0||s.offInvalidate(this.onInvalidate),clearTimeout(this.refetchTimeOutId),this.isFirstLoad=!1}connectedCallback(){var s;if(super.connectedCallback(),!this.isFetchEnabled)return;this.key=this.getAttribute("key"),this.props&&this.publisher.set(this.props),this.onInvalidate=()=>this._fetchData(),(s=this.publisher)===null||s===void 0||s.onInvalidate(this.onInvalidate),this.getAttribute("lazyload")===null?this._fetchData():this.handleLazyLoad()}handleLazyLoad(){if(this.getAttribute("lazyload")===null)return;const r=this.getBoundingClientRect();if(r.x<window.innerWidth&&r.right>0&&r.y<window.innerHeight&&r.right>0){this._fetchData();return}const o=parseFloat(this.getAttribute("lazyBoundsRatio")||"1"),l={root:null,rootMargin:Math.max(window.innerWidth*o,window.innerHeight*o)+"px"};this.iObserver=new IntersectionObserver(v=>this.onIntersection(v),l);let p=this.shadowRoot?this.shadowRoot.children[0]:this.children[0];if((p==null?void 0:p.nodeName.toLocaleLowerCase())=="slot"&&(p=p.children[0]),!p||p.nodeName.toLocaleLowerCase()=="template"){p=document.createElement("span");const v=p.style;v.position="absolute",v.pointerEvents="none",this.lazyLoadSpan=p,this.appendChild(p)}p?this.iObserver.observe(p):this.isFirstLoad&&this._fetchData()}onIntersection(s){var r,o;for(const l of s)if(l.isIntersecting&&this.isFirstLoad){this._fetchData(),(r=this.lazyLoadSpan)===null||r===void 0||r.remove(),this.lazyLoadSpan=void 0,(o=this.iObserver)===null||o===void 0||o.disconnect();break}}}return bi([h()],t.prototype,"props",null),bi([h({type:String})],t.prototype,"endPoint",null),bi([h()],t.prototype,"requestId",void 0),bi([h({type:Number})],t.prototype,"refetchEveryMs",void 0),t};var Lp=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Rp="sonic-fetch";let Fs=class extends bo(ve(D)){render(){return S`<slot></slot>`}};Fs.styles=[F`
      :host {
        display: contents;
      }
    `];Fs=Lp([E(Rp)],Fs);var el=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const jp="sonic-if";let Pi=class extends D{constructor(){super(...arguments),this.condition=!1}render(){return this.condition?S` <slot></slot> `:G}};Pi.styles=F`
    :host {
      display: contents;
    }
  `;el([h({type:Boolean})],Pi.prototype,"condition",void 0);Pi=el([E(jp)],Pi);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=Rr(class extends jr{constructor(n){if(super(n),n.type!==ar.CHILD)throw Error("templateContent can only be used in child bindings")}render(n){return this.vt===n?st:(this.vt=n,document.importNode(n.content,!0))}});var Dp=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Ep="sonic-subscriber";let Sa=class extends ve(D){constructor(){super(...arguments),this.noAutofill=!0}connectedCallback(){this.noShadowDom="",super.connectedCallback()}updated(e){super.updated(e),this.children.length==0?this.style.display="none":this.style.display="contents"}render(){return S`<slot></slot> `}};Sa=Dp([E(Ep)],Sa);var Fi=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Np="sonic-list";let Yr=class extends bo(ve(ei(D))){constructor(){super(...arguments),this.templateKey="template",this.idKey="id"}connectedCallback(){this.noShadowDom="",this.defferedDebug=this.hasAttribute("debug")||null,this.isDefaultLoaderEnabled=!1,this.isFetchEnabled=this.hasAttribute("fetch"),this.isFetchEnabled&&(this.isLoading=!0),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}renderLoadingState(){return this.templateParts.skeleton?_t(this.templateParts.skeleton):S`<sonic-loader mode="inline"></sonic-loader>`}renderNoResultState(){return S` <div
      style="color: var(--sc-base-400);
    font-size: 1.5em;
    margin: 4rem 0;
    display: flex;
    gap: 0.5rem;"
    >
      <sonic-icon name="emoji-puzzled" size="lg"></sonic-icon
      ><span class="sonic-no-result-text"
        >${typeof this.props=="string"&&this.props==""?"Aucun r\xE9sultat":this.props}</span
      >
    </div>`}formatProps(){let e=this.props;if(e==null)return null;const t=e._sonic_http_response_,i=this.hasAttribute("extractValues");return Array.isArray(e)||(i?e=Object.entries(e).map(([s,r])=>({key:s,value:r})):be.isObject(e)&&Object.keys(e).length>0&&(!t||t.ok)?e=[e]:e=[]),e=e.filter(s=>s!=null),t&&(e._sonic_http_response_=t),e}render(){if(this.isLoading&&!Array.isArray(this.props))return this.renderLoadingState();if(typeof this.props=="string")return this.renderNoResultState();if(!be.isObject(this.props))return S`<div></div>`;const s=this.formatProps();if(((s==null?void 0:s.length)||0)==0&&this.templateParts["no-item"])return _t(this.templateParts["no-item"]);const r=this.templateList.length;let o=-1;const l=this.hasAttribute("extractValues"),p=this.templateParts.separator,v=(s==null?void 0:s.length)||0;return S`
      ${s==null?void 0:s.map((m,x)=>{if(m==null)return G;let A=null,R=x;if(typeof m=="object"&&!Array.isArray(m)){const H=m[this.templateKey];H&&typeof H=="string"&&(A=this.templateParts[H]),l&&(R=m==null?void 0:m.key)}if(R=="_sonic_http_response_"||typeof R!="string"&&typeof R!="number")return G;const N=x>=v-1,$=x%2,U=this.publisher[R];return U._key_=R+"",U._metadata_=Object.assign(Object.assign({},U._metadata_.get()),{key:R,even:$==0,odd:$==1,onlyChild:v==1,firstChild:x==0,lastChild:N}),o++,A&&(o=-1),m&&S`
            <sonic-subscriber
              ?debug=${this.defferedDebug===!0}
              .bindPublisher=${function(){return U}}
              .propertyMap?=${this.itemPropertyMap}
              dataProvider="${this.dataProvider}/list-item/${R}"
            >
              ${_t(A||this.templateList[o%r])}
            </sonic-subscriber>
            ${p&&!N?_t(p):G}
          `})}
    `}};Fi([h({type:Object})],Yr.prototype,"itemPropertyMap",void 0);Fi([h({type:String})],Yr.prototype,"templateKey",void 0);Fi([h({type:String})],Yr.prototype,"idKey",void 0);Yr=Fi([E(Np)],Yr);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Mp(n,e){if(n!==void 0){let t=0;for(const i of n)yield e(i,t++)}}var Ze=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Pa=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})},Is;const zp="sonic-queue";let Ee=Is=class extends ve(D){constructor(){super(...arguments),this.templates=null,this.lastRequestTime=0,this.key="",this.itemPropertyMap=null,this.cache="default",this.targetRequestDuration=500,this.limit=5,this.lazyBoundsRatio=1,this.offset=0,this.resultCount=0,this.noLazyload=!1,this.filteredFields="",this.localStorage="disabled",this.filterPublisher=null,this.searchHash="",this.requestId=0,this.isFirstRequest=!0,this.dataProviderExpression="",this.idKey="id",this.currentScrollPosition=void 0,this.listDataProviders=[],this.nextHadEvent=!1}disconnectedCallback(){for(const e of this.listDataProviders)Z.delete(e);super.disconnectedCallback()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return Pa(this,void 0,void 0,function*(){this.localStorage=this.getAttribute("localStorage")||this.localStorage,this.removeAttribute("localStorage"),this.noShadowDom="",this.defferedDebug=this.hasAttribute("debug")||null,this.dataProvider||(this.dataProvider=this.dataProviderExpression||"sonic-queue-"+Is.instanceCounter+++"-"+Math.random().toString(36).substring(7)),this.dataProviderExpression||(this.dataProviderExpression=Gr.getAncestorAttributeValue(this.parentElement,"dataProvider")||""),e.connectedCallback.call(this),this.key=this.getAttribute("key"),this.templates||(this.templates=Array.from(this.querySelectorAll("template"))),this.lastRequestTime=new Date().getTime(),yield Z.getInstance().isLocalStrorageReady,this.configFilter()})}configFilter(){var e;const t=this.getAncestorAttributeValue("dataFilterProvider");if(!t){this.next();return}this.filterPublisher=Z.getInstance().get(t),(e=this.filterPublisher)===null||e===void 0||e.onInternalMutation(()=>{this.updateFilteredContent()})}updateFilteredContent(){var e;const i=this.dataProviderExpression.split("?");i.shift();const s=new URLSearchParams(i.join("?")),r=(e=this.filterPublisher)===null||e===void 0?void 0:e.get(),o=this.filteredFields.split(" ");for(const p in r){let v=r[p];Array.isArray(v)&&(v=v.filter(m=>m!==null)),!(this.filteredFields&&!o.includes(p)||v==null||v.toString()==="")&&s.set(p,r[p].toString())}const l=s.toString();if(!(l==this.searchHash&&!this.isFirstRequest)){this.searchHash=l;for(const p of this.listDataProviders)Z.delete(p);this.listDataProviders=[],clearTimeout(this.filterTimeoutId),this.filterTimeoutId=setTimeout(()=>Pa(this,void 0,void 0,function*(){const p=this.resultCount;this.props=null,this.requestId++,this.resultCount=p,yield Z.getInstance().isLocalStrorageReady,window.requestAnimationFrame(()=>this.next())}),this.isFirstRequest?0:400),this.isFirstRequest=!1}}resetDuration(){this.lastRequestTime=new Date().getTime()}next(e){var t;let i=this.offset;const r=new Date().getTime()-this.lastRequestTime;if(!this.nextHadEvent&&e&&(this.resultCount=0),this.nextHadEvent=!!e,e){if(e.detail.requestId<this.requestId)return;if(this.resultCount+=e.detail.props.length,!e.detail.isFirstLoad||!e.detail.props.length||this.dataProviderExpression.indexOf("$offset")==-1){this.publisher.resultCount=this.resultCount;return}}if(Array.isArray(this.props)){const R=this.props,N=R[R.length-1];i=parseInt(N.offset.toString())+parseInt(N.limit.toString())}else{const R=[];R.resultCount=this.resultCount,this.props=R}r>0&&e&&!this.localStorage&&(this.limit=Math.round(this.limit/r*this.targetRequestDuration)),this.limit<1&&(this.limit=1),this.limit>15&&(this.limit=15);let o=this.dataProviderExpression.replace("$offset",i+"").replace("$limit",this.limit+"");const l=o.split("?"),p=l.shift(),v=new URLSearchParams(l.join("?")),m=(t=this.filterPublisher)===null||t===void 0?void 0:t.get(),x=this.filteredFields.split(" ");for(const R in m)this.filteredFields&&!x.includes(R)||m[R]==null||v.set(R,m[R]);this.searchHash||(this.searchHash=v.toString()),o=p+"?"+v.toString(),this.listDataProviders.push(o);const A=[...this.props,{id:v.toString()+"/"+this.props.length,dataProvider:o,offset:i,limit:this.limit}];A.resultCount=this.resultCount,this.props=A,this.lastRequestTime=new Date().getTime()}render(){return Array.isArray(this.props)?S`
      ${Mp(this.props,(e,t)=>{var i;const s=t==0?this.templates:(i=this.templates)===null||i===void 0?void 0:i.filter(r=>r.getAttribute("data-value")!="no-item");return S`
          <sonic-list
            fetch
            cache=${this.cache}
            displayContents
            lazyBoundsRatio=${this.lazyBoundsRatio}
            ?lazyload=${!this.noLazyload}
            localStorage=${this.localStorage}
            requestId=${this.requestId}
            .itemPropertyMap=${this.itemPropertyMap}
            ?debug=${this.defferedDebug===!0}
            @load=${this.next}
            key=${this.key}
            @loading=${this.resetDuration}
            dataProvider="${e.dataProvider}"
            idKey=${this.idKey}
            .templates=${s}
          >
          </sonic-list>
        `})}
    `:G}};Ee.instanceCounter=0;Ze([h({type:Array})],Ee.prototype,"templates",void 0);Ze([h({type:Object})],Ee.prototype,"itemPropertyMap",void 0);Ze([h()],Ee.prototype,"cache",void 0);Ze([h()],Ee.prototype,"targetRequestDuration",void 0);Ze([h()],Ee.prototype,"limit",void 0);Ze([h()],Ee.prototype,"lazyBoundsRatio",void 0);Ze([h()],Ee.prototype,"offset",void 0);Ze([h()],Ee.prototype,"resultCount",void 0);Ze([h({type:Boolean})],Ee.prototype,"noLazyload",void 0);Ze([h()],Ee.prototype,"filteredFields",void 0);Ze([h({type:String})],Ee.prototype,"dataProviderExpression",void 0);Ze([h({type:String})],Ee.prototype,"idKey",void 0);Ee=Is=Ze([E(zp)],Ee);var Er=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Ds=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};const Fp="sonic-submit";let Et=class extends ve(D){constructor(){super(...arguments),this.submitResultKey=null,this.disabled=!1,this.endPoint=null,this.name="",this.value="",this.api=null}connectedCallback(){this.hasAttribute("onClick")&&this.addEventListener("click",()=>this.submit()),this.hasAttribute("onEnterKey")&&this.addEventListener("keydown",e=>{e.key==="Enter"&&this.submit()}),super.connectedCallback(),this.api=new ue(this.getApiConfiguration())}submitNativeForm(){const e=Gr.getClosestForm(this);if(!e)return;const t=this.getAncestorAttributeValue("formDataProvider"),i=Z.get(t).get();for(const r in i){if(r=="isFormValid")continue;let o=e.querySelector('input[name="'+r+'"], select[name="'+r+'"], textarea[name="'+r+'"]');o||(o=document.createElement("input"),o.type="hidden",o.name=r,e.appendChild(o));let l=i[r];Array.isArray(l)&&(l=l.join(",")),o.type==="checkbox"||o.type==="radio"?l&&(o.checked=!0):o.value=l}const s=document.createElement("input");s.name=this.name,s.style.display="none",s.value=this.value,s.type="submit",e.appendChild(s),s&&s.click()}submit(){var e,t,i;return Ds(this,void 0,void 0,function*(){const s=Z.getInstance().get(this.getAncestorAttributeValue("formDataProvider"));if(s.isFormValid=!0,s.invalidate(),!s.isFormValid.get())return;if(this.publisher&&(this.publisher.disabled=!0),s.isFormValid,this.hasAttribute("native")){this.submitNativeForm();return}const o=((e=this.getAttribute("method"))===null||e===void 0?void 0:e.toLocaleLowerCase())||"post",l=this.hasAttribute("sendAsFormData"),p=s.get();delete p.isFormValid;const v=this.getAncestorAttributeValue("headersDataProvider"),m=v?Z.getInstance().get(v):null;let x={};m&&(x=m.get());let A=null;const R=this.getAncestorAttributeValue("dataProvider"),N=this.endPoint||R;it.show();const $=()=>Ds(this,void 0,void 0,function*(){var H,_,k,j,q,L,J;if(l)A=yield(H=this.api)===null||H===void 0?void 0:H.submitFormData(N,p,o,x);else switch(o){case"put":A=yield(_=this.api)===null||_===void 0?void 0:_.put(N,p,x);break;case"delete":A=yield(k=this.api)===null||k===void 0?void 0:k.delete(N,p,x);break;case"get":A=yield(j=this.api)===null||j===void 0?void 0:j.get(N,x);break;default:A=yield(q=this.api)===null||q===void 0?void 0:q.post(N,p,x);break}it.hide(),A?A._sonic_http_response_&&!A._sonic_http_response_.ok&&Object.keys(A).length===1&&(A.messages=[{content:"Network Error",status:"error"}]):A={messages:[{content:"Network Error",status:"error"}]};const W=this.getAncestorAttributeValue("clearedDataOnSuccess");W&&W.split(" ").forEach(Hi=>Z.get(Hi).set({}));const ge=this.hasAttribute("usernameKey")?this.getAttribute("usernameKey"):"username",Qe=this.hasAttribute("passwordKey")?this.getAttribute("passwordKey"):"password";((J=(L=this.api)===null||L===void 0?void 0:L.lastResult)===null||J===void 0?void 0:J.ok)&&p[ge]&&p[Qe]&&this.saveCredentials(p[ge],p[Qe]),this.submitResultKey&&(A=be.traverse(A,this.submitResultKey.split("."),!0));const si=this.getAncestorAttributeValue("submitResultDataProvider");si&&Z.get(si).set(A),this.publisher&&(this.publisher.disabled=null)}),U=m!=null&&m.needsCaptchaValidation.get()?m:s.needsCaptchaValidation.get()?s:null;if(U){U.captchaMethod=o,U.captchaAction=(i=(t=R==null?void 0:R.split("?")[0])!==null&&t!==void 0?t:this.getAncestorAttributeValue("formDataProvider"))!==null&&i!==void 0?i:"submit",U.captchaToken="request_token";const H=_=>{_!="request_token"&&($(),U.captchaToken.offAssign(H))};U.captchaToken.onAssign(H)}else $()})}saveCredentials(e,t){return Ds(this,void 0,void 0,function*(){if("PasswordCredential"in window){const i=new window.PasswordCredential({id:e,password:t});yield navigator.credentials.store(i)}})}render(){return S`<div ?data-disabled=${this.disabled}><slot></slot></div>`}};Et.styles=F`
    [data-disabled] {
      opacity: 0.3;
      pointer-events: none;
      user-select: none;
    }
  `;Er([h({type:String})],Et.prototype,"submitResultKey",void 0);Er([h({type:Boolean})],Et.prototype,"disabled",void 0);Er([h({type:String})],Et.prototype,"endPoint",void 0);Er([h()],Et.prototype,"name",void 0);Er([h()],Et.prototype,"value",void 0);Et=Er([E(Fp)],Et);var tl=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Us={exports:{}};(function(n,e){var t=[].slice;(function(i,s){return e!==null?n.exports=s():i.UrlPattern=s()})(tl,function(){var i,s,r,o,l,p,v,m,x,A,R,N,$,U,H;return x=function(_){return _.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},v=function(_,k){var j,q,L;for(L=[],j=-1,q=_.length;++j<q;)L=L.concat(k(_[j]));return L},U=function(_,k){var j,q,L;for(L="",j=-1,q=_.length;++j<q;)L+=k(_[j]);return L},$=function(_){return new RegExp(_.toString()+"|").exec("").length-1},R=function(_,k){var j,q,L,J,W;for(J={},j=-1,L=_.length;++j<L;)q=_[j],W=k[j],W!=null&&(J[q]!=null?(Array.isArray(J[q])||(J[q]=[J[q]]),J[q].push(W)):J[q]=W);return J},i={},i.Result=function(_,k){this.value=_,this.rest=k},i.Tagged=function(_,k){this.tag=_,this.value=k},i.tag=function(_,k){return function(j){var q,L;if(q=k(j),q!=null)return L=new i.Tagged(_,q.value),new i.Result(L,q.rest)}},i.regex=function(_){return function(k){var j,q;if(j=_.exec(k),j!=null)return q=j[0],new i.Result(q,k.slice(q.length))}},i.sequence=function(){var _;return _=1<=arguments.length?t.call(arguments,0):[],function(k){var j,q,L,J,W,ge;for(j=-1,q=_.length,ge=[],J=k;++j<q;){if(L=_[j],W=L(J),W==null)return;ge.push(W.value),J=W.rest}return new i.Result(ge,J)}},i.pick=function(){var _,k;return _=arguments[0],k=2<=arguments.length?t.call(arguments,1):[],function(j){var q,L;if(L=i.sequence.apply(i,k)(j),L!=null)return q=L.value,L.value=q[_],L}},i.string=function(_){var k;return k=_.length,function(j){if(j.slice(0,k)===_)return new i.Result(_,j.slice(k))}},i.lazy=function(_){var k;return k=null,function(j){return k==null&&(k=_()),k(j)}},i.baseMany=function(_,k,j,q,L){var J,W,ge,Qe;for(ge=L,Qe=j?"":[];!(k!=null&&(J=k(ge),J!=null)||(W=_(ge),W==null));)j?Qe+=W.value:Qe.push(W.value),ge=W.rest;if(!(q&&Qe.length===0))return new i.Result(Qe,ge)},i.many1=function(_){return function(k){return i.baseMany(_,null,!1,!0,k)}},i.concatMany1Till=function(_,k){return function(j){return i.baseMany(_,k,!0,!0,j)}},i.firstChoice=function(){var _;return _=1<=arguments.length?t.call(arguments,0):[],function(k){var j,q,L,J;for(j=-1,q=_.length;++j<q;)if(L=_[j],J=L(k),J!=null)return J}},N=function(_){var k;return k={},k.wildcard=i.tag("wildcard",i.string(_.wildcardChar)),k.optional=i.tag("optional",i.pick(1,i.string(_.optionalSegmentStartChar),i.lazy(function(){return k.pattern}),i.string(_.optionalSegmentEndChar))),k.name=i.regex(new RegExp("^["+_.segmentNameCharset+"]+")),k.named=i.tag("named",i.pick(1,i.string(_.segmentNameStartChar),i.lazy(function(){return k.name}))),k.escapedChar=i.pick(1,i.string(_.escapeChar),i.regex(/^./)),k.static=i.tag("static",i.concatMany1Till(i.firstChoice(i.lazy(function(){return k.escapedChar}),i.regex(/^./)),i.firstChoice(i.string(_.segmentNameStartChar),i.string(_.optionalSegmentStartChar),i.string(_.optionalSegmentEndChar),k.wildcard))),k.token=i.lazy(function(){return i.firstChoice(k.wildcard,k.optional,k.named,k.static)}),k.pattern=i.many1(i.lazy(function(){return k.token})),k},m={escapeChar:"\\",segmentNameStartChar:":",segmentValueCharset:"a-zA-Z0-9-_~ %",segmentNameCharset:"a-zA-Z0-9",optionalSegmentStartChar:"(",optionalSegmentEndChar:")",wildcardChar:"*"},p=function(_,k){if(Array.isArray(_))return U(_,function(j){return p(j,k)});switch(_.tag){case"wildcard":return"(.*?)";case"named":return"(["+k+"]+)";case"static":return x(_.value);case"optional":return"(?:"+p(_.value,k)+")?"}},l=function(_,k){return k==null&&(k=m.segmentValueCharset),"^"+p(_,k)+"$"},o=function(_){if(Array.isArray(_))return v(_,o);switch(_.tag){case"wildcard":return["_"];case"named":return[_.value];case"static":return[];case"optional":return o(_.value)}},A=function(_,k,j,q){var L,J,W,ge;if(q==null&&(q=!1),ge=_[k],ge==null){if(q)throw new Error("no values provided for key `"+k+"`");return}if(L=j[k]||0,J=Array.isArray(ge)?ge.length-1:0,L>J){if(q)throw new Error("too few values provided for key `"+k+"`");return}return W=Array.isArray(ge)?ge[L]:ge,q&&(j[k]=L+1),W},r=function(_,k,j){var q,L;if(Array.isArray(_)){for(q=-1,L=_.length;++q<L;)if(r(_[q],k,j))return!0;return!1}switch(_.tag){case"wildcard":return A(k,"_",j,!1)!=null;case"named":return A(k,_.value,j,!1)!=null;case"static":return!1;case"optional":return r(_.value,k,j)}},H=function(_,k,j){if(Array.isArray(_))return U(_,function(q){return H(q,k,j)});switch(_.tag){case"wildcard":return A(k,"_",j,!0);case"named":return A(k,_.value,j,!0);case"static":return _.value;case"optional":return r(_.value,k,j)?H(_.value,k,j):""}},s=function(_,k){var j,q,L,J,W;if(_ instanceof s){this.isRegex=_.isRegex,this.regex=_.regex,this.ast=_.ast,this.names=_.names;return}if(this.isRegex=_ instanceof RegExp,!(typeof _=="string"||this.isRegex))throw new TypeError("argument must be a regex or a string");if(this.isRegex){if(this.regex=_,k!=null){if(!Array.isArray(k))throw new Error("if first argument is a regex the second argument may be an array of group names but you provided something else");if(j=$(this.regex),k.length!==j)throw new Error("regex contains "+j+" groups but array of group names contains "+k.length);this.names=k}return}if(_==="")throw new Error("argument must not be the empty string");if(W=_.replace(/\s+/g,""),W!==_)throw new Error("argument must not contain whitespace");if(q={escapeChar:(k!=null?k.escapeChar:void 0)||m.escapeChar,segmentNameStartChar:(k!=null?k.segmentNameStartChar:void 0)||m.segmentNameStartChar,segmentNameCharset:(k!=null?k.segmentNameCharset:void 0)||m.segmentNameCharset,segmentValueCharset:(k!=null?k.segmentValueCharset:void 0)||m.segmentValueCharset,optionalSegmentStartChar:(k!=null?k.optionalSegmentStartChar:void 0)||m.optionalSegmentStartChar,optionalSegmentEndChar:(k!=null?k.optionalSegmentEndChar:void 0)||m.optionalSegmentEndChar,wildcardChar:(k!=null?k.wildcardChar:void 0)||m.wildcardChar},J=N(q),L=J.pattern(_),L==null)throw new Error("couldn't parse pattern");if(L.rest!=="")throw new Error("could only partially parse pattern");this.ast=L.value,this.regex=new RegExp(l(this.ast,q.segmentValueCharset)),this.names=o(this.ast)},s.prototype.match=function(_){var k,j;return j=this.regex.exec(_),j==null?null:(k=j.slice(1),this.names?R(this.names,k):k)},s.prototype.stringify=function(_){if(_==null&&(_={}),this.isRegex)throw new Error("can't stringify patterns generated from a regex");if(_!==Object(_))throw new Error("argument must be an object or undefined");return H(this.ast,_,{})},s.escapeForRegex=x,s.concatMap=v,s.stringConcatMap=U,s.regexGroupCount=$,s.keysAndValuesToObject=R,s.P=i,s.newParser=N,s.defaultOptions=m,s.astNodeToRegexString=l,s.astNodeToNames=o,s.getParam=A,s.astNodeContainsSegmentsForProvidedParams=r,s.stringify=H,s})})(Us,Us.exports);var kr=Us.exports,rl=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Ip="sonic-router";let Vs=class extends ve(ei(D)){constructor(){super(...arguments),this.templateValueAttribute="data-route",this._location=document.location.href.replace(document.location.origin,"")}connectedCallback(){this.noShadowDom="",se.onChange(this),super.connectedCallback()}disconnectedCallback(){se.offChange(this),super.disconnectedCallback()}set location(e){this._location=e,this.requestUpdate()}get location(){return this._location}render(){const e=[];for(const t of this.templatePartsList){const i=t.getAttribute(this.templateValueAttribute)||"";if(new RegExp(i).test(this.location))e.push(t);else try{new kr(i).match(this.location)&&(t.setAttribute("mode","patternMatching"),e.push(t))}catch{this.location.indexOf(i.replace(document.location.origin,""))!=-1&&e.push(t)}}return S`${Ni(e,(t,i)=>i+new Date().getTime(),t=>{var i;if(t.title&&(document.title=t.title),t.hasAttribute("dataProviderExpression")){let s="";const r=t.getAttribute("dataProviderExpression")||"";if(t.getAttribute("mode")=="patternMatching"){const o=new kr(t.getAttribute(this.templateValueAttribute)||"");s=new kr(r).stringify(o.match(this.location))}else{const o=new RegExp(t.getAttribute(this.templateValueAttribute)||""),l=(this.location+"").match(o);l&&(s=((i=l.shift())===null||i===void 0?void 0:i.replace(o,r))||"")}return S`<div style="display:contents" dataProvider="${s}">${_t(t)}</div>`}return _t(t)})}`}};rl([h()],Vs.prototype,"location",null);Vs=rl([E(Ip)],Vs);var Up=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Vp="sonic-redirect";let Oa=class extends ve(D){connectedCallback(){this.noShadowDom="",this.style.display="none",super.connectedCallback(),this.udpateCallBack=()=>this.update(),this.publisher&&this.publisher.onInternalMutation(this.udpateCallBack)}disconnectedCallback(){this.publisher&&this.publisher.offInternalMutation(this.udpateCallBack),super.disconnectedCallback()}update(){if(this.hasAttribute("onAdded")){se.changeFromComponent(this);return}if(!this.props)return;const e=this.getAttribute("onData").split("."),t=be.traverse(this.props,e);t&&!(be.isObject(t)&&t)&&se.changeFromComponent(this)}};Oa=Up([E(Vp)],Oa);var yo=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const qp="sonic-states";let Oi=class extends ve(ei(D)){constructor(){super(...arguments),this.state="",this.inverted=!1,this.statePath="",this.onAssign=e=>{this.state=e,this.requestUpdate()}}connectedCallback(){if(this.noShadowDom="",super.connectedCallback(),this.hasAttribute("data-path")&&(this.statePath=this.getAttribute("data-path")),this.statePath){this.statePublisher=this.publisher;const e=this.statePath.split(".");for(const t of e)this.statePublisher=this.statePublisher[t];this.statePublisher.onAssign(this.onAssign)}}disconnectedCallback(){var e;this.statePath&&((e=this.statePublisher)===null||e===void 0||e.offAssign(this.onAssign)),super.disconnectedCallback()}render(){const e=[];let t=this.state;(!Array.isArray(t)&&be.isObject(t)||t===void 0)&&(t="");for(const i of this.templatePartsList){let s=i.getAttribute(this.templateValueAttribute),r=t;if(this.inverted&&(r=s,s=t),s==""&&(s=this.inverted?".*?":"^$"),new RegExp(s).test(r))e.push(i),i.removeAttribute("mode");else{const l=new kr(s);l.names.length>0&&l.match(r)&&(i.setAttribute("mode","patternMatching"),e.push(i))}}return S`${Ni(e,(i,s)=>s+new Date().getTime(),i=>{var s;if(i.title&&(document.title=i.title),i.hasAttribute("dataProviderExpression")){const r=i.getAttribute("dataProviderExpression");let o="",l=t,p=i.getAttribute(this.templateValueAttribute);if(this.inverted&&(l=p,p=t),p==""&&(p=this.inverted?"*":"^$"),i.getAttribute("mode")=="patternMatching"){const v=new kr(p);o=new kr(r).stringify(v.match(l))}else{const v=new RegExp(p),m=(l+"").match(v);m&&(o=(s=m.shift())===null||s===void 0?void 0:s.replace(v,r))}return S`<div style="display:contents" dataProvider="${o}">${_t(i)}</div>`}return _t(i)})}`}};yo([h()],Oi.prototype,"state",void 0);yo([h({type:Boolean,reflect:!0})],Oi.prototype,"inverted",void 0);Oi=yo([E(qp)],Oi);var Bp=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Hp="sonic-scope";let Ta=class extends D{createRenderRoot(){return this}render(){return S`<slot></slot>`}};Ta=Bp([E(Hp)],Ta);var il=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Wp="sonic-example";let qs=class extends ve(D){constructor(){super(...arguments),this.text="Example"}render(){return S`<div>${this.text}</div>`}};il([h()],qs.prototype,"text",void 0);qs=il([E(Wp)],qs);const Zp={tagName:"sonic-checkbox"},Gp={tagName:"sonic-input",attributes:{type:"date"}},Yp={tagName:"sonic-fieldset",nodes:[{libraryKey:"formLayout"}],contentElementSelector:"sonic-form-layout"},Kp={tagName:"sonic-input",attributes:{variant:"ghost",type:"file"}},Xp={tagName:"sonic-input",attributes:{type:"password"}},Qp={tagName:"sonic-radio"},Jp={tagName:"sonic-select"},ef={tagName:"sonic-textarea"},tf={tagName:"sonic-input",attributes:{type:"text"}},rf={tagName:"sonic-input",attributes:{type:"hidden"}},sf={tagName:"sonic-button"},of={tagName:"sonic-submit",attributes:{onEnterKey:!0}},nf={tagName:"sonic-submit",attributes:{onClick:!0},contentElementSelector:"sonic-button",nodes:[{libraryKey:"button",attributes:{type:"success"},nodes:[{tagName:"sonic-icon",attributes:{name:"check",slot:"prefix"}}]}]},af={tagName:"sonic-input",attributes:{type:"email"}},lf={tagName:"div",attributes:{class:"form-item-container"}},cf={tagName:"sonic-form-layout"},df={tagName:"sonic-form-actions"},hf={tagName:"sonic-password-helper"},uf={tagName:"sonic-same-value-helper"},pf={tagName:"sonic-divider"};var ff={checkbox:Zp,date:Gp,fieldset:Yp,managed_file:Kp,password:Xp,radio:Qp,select:Jp,textarea:ef,textfield:tf,hidden:rf,button:sf,form:of,submit:nf,email:af,formItemContainer:lf,formLayout:cf,formActions:df,passwordHelper:hf,sameValueHelper:uf,divider:pf},mf=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};class vf{transform(e,t){return mf(this,void 0,void 0,function*(){if(this.sduiDescriptor=e,this.sduiDescriptor.library)for(const i in t.library)this.sduiDescriptor.library[i]=t.library[i];for(const i of t.transforms)this.transformAction(i)})}transformAction(e){const t=this.getNodesMatchingPatterns(e.patterns,this.sduiDescriptor);this[e.action](e,t)}getNodesMatchingPatterns(e,t){if(!e)return[];if(!t)return[];const i=t.nodes;if(!i)return[];let s=[],r=0;for(const o of e)for(const l of i)this.nodeMatchesPattern(o,l)&&s.push({parent:t,child:l,index:r}),s=s.concat(this.getNodesMatchingPatterns([o],l)),r++;return s}stringMatchesExpression(e,t){return!t||e&&e.match(t)}nodeMatchesPattern(e,t){const i=e,s=t,r=["libraryKey","innerHTML","prefix","suffix","markup"];for(const p of r)if(!this.stringMatchesExpression(s[p],i[p]))return!1;const o=e.attributes,l=t.attributes;if(o&&!l)return!1;if(o){for(const p in o)if(!l||!this.stringMatchesExpression(l[p],o[p]))return!1}return!0}unwrap(e,t){var i,s;for(const r of t)(i=r.parent.nodes)===null||i===void 0||i.splice(r.parent.nodes.indexOf(r.child),1),r.child.nodes&&((s=r.parent.nodes)===null||s===void 0||s.splice(r.parent.nodes.indexOf(r.child),0,...r.child.nodes))}wrap(e,t){var i,s,r,o,l,p;const v=Object.assign({},e.ui);v.nodes||(v.nodes=[]);let m=0;for(const A of t)(i=v.nodes)===null||i===void 0||i.push(A.child),m>0&&((s=A.parent.nodes)===null||s===void 0||s.splice(A.parent.nodes.indexOf(A.child),1)),m++;const x=(o=(r=t[0])===null||r===void 0?void 0:r.parent.nodes)===null||o===void 0?void 0:o.indexOf(t[0].child);x&&((l=t[0].parent.nodes)===null||l===void 0||l.splice(x,1),(p=t[0].parent.nodes)===null||p===void 0||p.splice(x,0,v))}move(e,t){var i,s;for(const r of t){(i=r.parent.nodes)===null||i===void 0||i.splice(r.parent.nodes.indexOf(r.child),1);let o=[];e.after&&(o=this.getNodesMatchingPatterns([e.after],this.sduiDescriptor)),e.before&&(o=this.getNodesMatchingPatterns([e.before],this.sduiDescriptor));const l=o[0];l&&((s=l.parent.nodes)===null||s===void 0||s.splice(l.parent.nodes.indexOf(l.child)+(e.after?1:0),0,r.child))}}remap(e,t){var i,s,r;for(const o of t){const l=Object.assign({},e.ui);l.attributes||(l.attributes={});const p=o.child.attributes;if(p)for(const N in p)Object.prototype.hasOwnProperty.call(l.attributes,"key")||(l.attributes[N]=p[N]);const v=["libraryKey","innerHTML","prefix","suffix","markup"],m=o.child,x=l;for(const N of v)!Object.prototype.hasOwnProperty.call(l,N)&&m[N]&&(x[N]=m[N]);l.nodes||(l.nodes=[]);const A=o.child.nodes;if(A)for(const N of A)l.nodes.push(N);const R=((i=o.parent.nodes)===null||i===void 0?void 0:i.indexOf(o.child))||-1;R!=-1&&((s=o.parent.nodes)===null||s===void 0||s.splice(R,1),(r=o.parent.nodes)===null||r===void 0||r.splice(R,0,l))}}delete(e,t){var i;for(const s of t)(i=s.parent.nodes)===null||i===void 0||i.splice(s.parent.nodes.indexOf(s.child),1)}insert(e,t){var i;const s=e.after?"after":e.before?"before":"in";t=[],e.after?t=this.getNodesMatchingPatterns([e.after],this.sduiDescriptor):e.before?t=this.getNodesMatchingPatterns([e.before],this.sduiDescriptor):e.in&&(t=this.getNodesMatchingPatterns([e.in],this.sduiDescriptor));const r=t[0];r&&(s=="in"?(r.child.nodes||(r.child.nodes=[]),r.child.nodes.push(Object.assign({},e.ui))):(i=r.parent.nodes)===null||i===void 0||i.splice(r.parent.nodes.indexOf(r.child)+(s=="after"?1:0),0,Object.assign({},e.ui)))}}var $r=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Ii=n=>{class e extends n{constructor(...i){super(),this.forceAutoFill=!1,this._type="text"}validateFormElement(){var i;const s=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelector("input");if(!s||s.checkValidity())return;const r=this.getFormPublisher();r&&(r.isFormValid=!1),s.reportValidity()}set type(i){this.hasAttribute("type")&&!this.forceAutoFill&&(i=this.getAttribute("type")),this._type=i,this.requestUpdate()}get type(){return this._type}get description(){return this._description}set description(i){this.hasAttribute("description")&&!this.forceAutoFill&&(i=this.getAttribute("description")),this._description=i,this.requestUpdate()}get label(){return this._label}set label(i){this.hasAttribute("label")&&!this.forceAutoFill&&(i=this.getAttribute("label")),this._label=i,this.requestUpdate()}}return $r([h()],e.prototype,"forceAutoFill",void 0),$r([h({type:String})],e.prototype,"type",null),$r([h()],e.prototype,"description",null),$r([h()],e.prototype,"label",null),$r([h({type:Number})],e.prototype,"tabindex",void 0),$r([h({type:String})],e.prototype,"autocomplete",void 0),e},sl=bo,gf=go,bf=Dr,yf=Ii,zt=ve,ol=ei;window["concorde-mixins"]=window["concorde-mixins"]||{};window["concorde-mixins"]={Fetcher:sl,FormCheckable:gf,FormElement:bf,FormInput:yf,Subscriber:zt,TemplatesContainer:ol};var wo=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Es=globalThis&&globalThis.__awaiter||function(n,e,t,i){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function l(m){try{v(i.next(m))}catch(x){o(x)}}function p(m){try{v(i.throw(m))}catch(x){o(x)}}function v(m){m.done?r(m.value):s(m.value).then(l,p)}v((i=i.apply(n,e||[])).next())})};const wf="sonic-sdui";let Ti=class extends sl(zt(D)){constructor(){super(...arguments),this.sduiDescriptor={}}connectedCallback(){this.noShadowDom="",this.displayContents=!0,this.isFetchEnabled=this.hasAttribute("fetch"),super.connectedCallback()}willUpdate(e){this.props==null&&(this.sduiDescriptor={});{const t=this.sduiKey?this.props[this.sduiKey]:this.props;if(this.sduiDescriptor==t)return;this.sduiDescriptor=t,this.updateContents()}super.willUpdate(e)}updateContents(){return Es(this,void 0,void 0,function*(){if(!this.sduiDescriptor)return;const e={};Object.assign(e,ff,this.sduiDescriptor.library),this.sduiDescriptor.library=e,this.loadAssets(),yield this.loadLibrary(),yield this.transformSDUIDescriptor(),this.parseRootNodes()})}removeChildren(){for(;[...this.children].filter(e=>e.nodeName!="SLOT").length>0;)this.removeChild(this.children[0])}loadAssets(){if(!!this.sduiDescriptor){if(this.sduiDescriptor.js)for(const e of this.sduiDescriptor.js)Gr.loadJS(e);if(this.sduiDescriptor.css)for(const e of this.sduiDescriptor.css)Gr.loadCSS(e)}}transformSDUIDescriptor(){return Es(this,void 0,void 0,function*(){if(!this.hasAttribute("transformation"))return;const t=yield(yield fetch(this.getAttribute("transformation"))).json();yield new vf().transform(this.sduiDescriptor,t)})}loadLibrary(){return Es(this,void 0,void 0,function*(){if(!this.hasAttribute("library"))return;const t=yield(yield fetch(this.getAttribute("library"))).json();this.sduiDescriptor.library=t})}parseRootNodes(){if(this.removeChildren(),!this.sduiDescriptor)return;let e=this.sduiDescriptor.nodes;e||(e=[]);const t={tagName:"sonic-toast-message-subscriber",attributes:{}};this.messagesKey&&(t.attributes={subDataProvider:this.messagesKey}),e.push(t),e.forEach(i=>this.appendChild(this.parseChild(i)))}parseChild(e){const t=e.tagName||"div";let{element:i,contentElement:s}=this.handleLibrary(e,t);return this.handleAttributes(e,i),i=this.handleMarkup(e,i),s||(s=i),this.handleChildNodes(e,s,i),this.handleInnerHTML(e,s),e.prefix||e.suffix?this.handlePrefixSuffix(e,i):i}handlePrefixSuffix(e,t){const i=document.createElement("div");return i.innerHTML=(e.prefix||"")+t.outerHTML+(e.suffix||""),i.style.display="contents",i}handleChildNodes(e,t,i){if(e.nodes){const s=e.nodes;for(const r of s){const o=this.parseChild(r);let l=t;r.parentElementSelector&&(l=i.querySelector(r.parentElementSelector)||t),l.shadowRoot?l.shadowRoot.appendChild(o):l.tagName.toLocaleLowerCase()=="template"?l.content.appendChild(o):l.appendChild(o)}}}handleLibrary(e,t){let i,s;if(e.libraryKey&&this.sduiDescriptor.library){i=this.parseChild(this.sduiDescriptor.library[e.libraryKey]||{tagName:"div"});const r=(this.sduiDescriptor.library[e.libraryKey]||{}).contentElementSelector;r&&(s=i.querySelector(r))}else i=document.createElement(t);return{element:i,contentElement:s}}handleAttributes(e,t){const i=e.attributes;for(const s in i){const r=i[s],o=vo.isObject(r)?JSON.stringify(r):r;t.setAttribute(s,o)}}handleMarkup(e,t){return e.markup&&(t=document.createElement("div"),t.style.display="contents",t.innerHTML=e.markup),t}handleInnerHTML(e,t){var i;if(!!e.innerHTML)if(e.innerHTML.indexOf("wording_")!=-1){const s=this.getAncestorAttributeValue("wordingProvider");(i=this.api)===null||i===void 0||i.post(s,{labels:[e.innerHTML.substring(8)]}).then(r=>{t&&(t.innerHTML+=r)})}else t&&(t.innerHTML+=e.innerHTML)}};wo([h()],Ti.prototype,"sduiKey",void 0);wo([h()],Ti.prototype,"messagesKey",void 0);Ti=wo([E(wf)],Ti);var nl=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let Li=class extends zt(D){constructor(){super(...arguments),this._composition={},this.listeners=[]}get composition(){return this._composition}set composition(e){this._composition=e,this.updateComposition()}connectedCallback(){super.connectedCallback(),this.updateComposition()}disconnectedCallback(){this.removePublisherListeners(),super.disconnectedCallback()}updateComposition(){this.removePublisherListeners(),this.publisher&&(this.publisher.set({}),this.parseComposition(this.composition,this.publisher))}removePublisherListeners(){const e=this.listeners;this.listeners=[],e.forEach(t=>{this.publisher.offAssign(t.subscriber)})}parseComposition(e,t){if(!!e)for(const i in e){const s=e[i];if(typeof s=="string"){const r=s.split("."),o=r.shift();if(!o)continue;let l=Be.get(o);l=vo.traverse(l,r);const p={publisher:l,subscriber:v=>{t[i]=v}};this.listeners.push(p),l.onAssign(p.subscriber),t._proxies_.set(i,l)}else{this.publisher[i]={};const r=new ht({},t);t._proxies_.set(i,r);const o={publisher:r,subscriber:l=>{t[i]=l}};this.listeners.push(o),r.onAssign(o.subscriber),this.parseComposition(s,r)}}}render(){return S`<slot></slot>`}};Li.styles=[F`
      :host {
        display: contents;
      }
    `];nl([h({type:Object})],Li.prototype,"composition",null);Li=nl([E("sonic-mix")],Li);var xf=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const _f="sonic-value";let La=class extends zt(D){connectedCallback(){this.setAttribute("subDataProvider",this.getAttribute("key")),super.connectedCallback()}render(){return typeof this.props=="object"||this.props===void 0?S`<slot name="prefix"></slot><slot></slot><slot name="suffix"></slot>`:S`${me(this.props.toString())}<slot name="prefix"></slot><slot></slot
      ><slot name="suffix"></slot>`}};La=xf([E(_f)],La);const $f=F`
  :host {
    /* polices*/
    --sc-font-family-base: "Inter var", "Inter", -apple-system, system-ui,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    --sc-font-weight-base: 400;
    --sc-font-style-base: normal;

    --sc-headings-font-family: var(--sc-font-family-base), sans-serif;
    --sc-headings-font-style: var(--sc-font-style-base);
    --sc-headings-line-height: 1.1;
    --sc-headings-font-weight: 700;
    --sc-headings-text-transform: none;

    /* Button*/
    --sc-btn-font-weight: var(--sc-font-weight-base);
    --sc-btn-font-family: var(--sc-font-family-base);
    --sc-btn-font-style: var(--sc-font-style-base);

    /* ROUNDED*/
    --sc-rounded-sm: calc(var(--sc-rounded) * 0.5);
    --sc-rounded: 0.375rem;
    --sc-rounded-md: calc(var(--sc-rounded) * 1.8);
    --sc-rounded-lg: calc(var(--sc-rounded) * 3);
    --sc-rounded-xl: calc(var(--sc-rounded) * 7);
    --sc-rounded-size-intensity: calc((1em - 1rem) * 0.4);

    /* 4 for rounded full*/
    --sc-btn-rounded-intensity: 1.4;
    --sc-btn-font-weight: 500;
    --sc-btn-rounded: calc(
      (var(--sc-rounded) + var(--sc-rounded-size-intensity)) *
        var(--sc-btn-rounded-intensity)
    );

    /* Placeholder */
    --sc-placeholder-bg: rgba(17, 24, 39, 0.05);

    /* OMBRES */
    --sc-shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1),
      0 1px 2px -1px rgb(0 0 0 / 0.1);
    --sc-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    --sc-shadow-lg: 0 10px 15px 0px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --sc-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    --sc-shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    /* Forms */
    --sc-border-width: max(1px, 0.12rem);
    --sc-border-color: var(--sc-base-200);
    --sc-form-height: 2.5em;
    --sc-form-border-width: var(--sc-border-width);
    --sc-input-bg: var(--sc-base-100);
    --sc-input-border-color: var(--sc-input-bg);
    --sc-input-rounded-intensity: 1.4;
    --sc-input-rounded: calc(
      (var(--sc-rounded) + var(--sc-rounded-size-intensity)) *
        var(--sc-input-rounded-intensity)
    );
    --sc-label-font-weight: 500;

    /* Contrast -- ex : Text on images */
    --sc-contrast-content: #fff;
    --sc-contrast: #11151f;

    /*Scrollbar*/
    --sc-scrollbar-bg: var(--sc-base-400);

    /*Body*/
    --sc-body-bg: var(--sc-base);
  }
`,Cf=F`
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
    --sc-base-50: #f8fafc;
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
    --sc-input-bg: var(--sc-base-100);
    --sc-input-color: var(--sc-base-content);
  }
`,Ra=F`
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

  --sc-base: var(--sc-dark-base, #1d2634);
  --sc-base-50: var(--sc-dark-base-50, #1f2937);
  --sc-base-100: var(--sc-dark-base-100, #252c36);
  --sc-base-200: var(--sc-dark-base-200, #2c3543);
  --sc-base-300: var(--sc-dark-base-300, #38414e);
  --sc-base-400: var(--sc-dark-base-400, #515964);
  --sc-base-500: var(--sc-dark-base-500, #828891);
  --sc-base-600: var(--sc-dark-base-600, #b4b8be);
  --sc-base-700: var(--sc-dark-base-700, #cdd0d5);
  --sc-base-800: var(--sc-dark-base-800, #d9dce0);
  --sc-base-900: var(--sc-dark-base-900, #e5e7eb);
  --sc-base-content: var(--sc-dark-base-content, #e5e7eb);
`,kf=F`
  :host([theme="dark"]) {
    ${Ra}
  }

  @media (prefers-color-scheme: dark) {
    :host([theme="auto"]) {
      ${Ra}
    }
  }
`;var ti=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Bs;const Af="sonic-theme";let rr=Bs=class extends D{constructor(){super(...arguments),this.theme="light",this.background=!1,this.color=!1,this.font=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("message",e=>this.receiveMessage(e),!1),this.postCSSVars()}postCSSVars(){var e;const t=document.styleSheets,i=t.length,s=[];for(let o=0;o<i;o++){const l=t[o];l.href&&(l.href.includes("googleapis")||l.href.includes("typekit.net"))&&s.push(l.href)}const r={variables:this.getCssVariables(),fonts:s};(e=Be.get("sonic-theme"))===null||e===void 0||e.set(r),document.querySelectorAll("iframe").forEach(o=>{var l;return(l=o.contentWindow)===null||l===void 0?void 0:l.postMessage(Object.assign({type:"SonicTheme"},r),"*")})}receiveMessage(e){const t=e.data;!t.type||t.type!="GetSonicTheme"||this.postCSSVars()}getCssVariables(){const e=[],t=[...Bs.styles.map(r=>r.styleSheet),...Array.from(document.styleSheets)];for(const r of t)try{if(!r)continue;const o=r.cssRules;for(const l of o){if(!("style"in l))continue;const p=l.style;for(const v of p)e.includes(v)||v.indexOf("--sc")!==0||e.push(v)}}catch{console.log("Erreur lors de la r\xE9cup\xE9ration des variables CSS")}const i=window.getComputedStyle(this),s={};return e.forEach(r=>s[r]=i.getPropertyValue(r)),s}render(){return S`<slot></slot>`}};rr.styles=[Cf,kf,$f,F`
      :host([background]) {
        display: block !important;
        background: var(--sc-body-bg) !important;
        min-height: 100vh;
      }

      :host([color]) {
        color: var(--sc-base-content);
      }

      :host([font]) {
        font-family: var(--sc-font-family-base), sans-serif;
        font-weight: var(--sc-font-weight-base);
        font-style: var(--sc-font-style-base);
      }
    `];ti([h({type:String,reflect:!0})],rr.prototype,"theme",void 0);ti([h({type:Boolean,reflect:!0})],rr.prototype,"background",void 0);ti([h({type:Boolean,reflect:!0})],rr.prototype,"color",void 0);ti([h({type:Boolean,reflect:!0})],rr.prototype,"font",void 0);rr=Bs=ti([E(Af)],rr);var ri=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Sf="sonic-badge";let ir=class extends D{constructor(){super(...arguments),this.type="default",this.variant="default",this.ellipsis=!1}render(){return S`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};ir.styles=[vt,F`
      :host {
        --sc-badge-gap: 0.3em;
        --sc-badge-py: 0.17em;
        --sc-badge-px: 0.66em;
        --sc-fs: 1rem;

        --sc-badge-color: var(--sc-base-content, #1f2937);
        --sc-badge-bg: var(--sc-base-200, #e5e7eb);

        --sc-badge-border-with: var(--sc-form-border-width, 0.1rem);
        --sc-badge-border-color: transparent;
        --sc-badge-border: var(--sc-badge-border-with) solid
          var(--sc-badge-border-color);

        --sc-badge-rounded: 0.85em;
        --sc-badge-fw: var(--sc-font-weight-base);

        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        line-height: var(--sc-lh);
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
        -webkit-print-color-adjust: exact;
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
        font-size: var(--sc-fs);
        gap: var(--sc-badge-gap);
      }

      :host([size="2xs"]) {
        --sc-badge-gap: 0.35em;
      }
      :host([size="xs"]) {
        --sc-badge-gap: 0.35em;
      }

      :host([size="sm"]) {
        --sc-badge-gap: 0.35em;
      }

      :host([size="lg"]) {
        --sc-lh: 1.2;
        --sc-badge-gap: 0.5em;
      }

      :host([size="xl"]) {
        --sc-lh: 1.2;
        --sc-badge-gap: 0.5em;
      }

      :host([contrast]) {
        --sc-badge-color: var(--sc-contrast-content);
        --sc-badge-bg: var(--sc-contrast);
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

      :host([ellipsis]) {
        flex-wrap: nowrap;
        white-space: nowrap;
        max-width: 100%;
      }
      :host([ellipsis]) slot {
        overflow: hidden;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
      }

      slot[name="suffix"],
      slot[name="prefix"] {
        flex-shrink: 0;
      }
    `];ri([h({type:String,reflect:!0})],ir.prototype,"type",void 0);ri([h({type:String,reflect:!0})],ir.prototype,"variant",void 0);ri([h({type:String,reflect:!0})],ir.prototype,"size",void 0);ri([h({type:Boolean,reflect:!0})],ir.prototype,"ellipsis",void 0);ir=ri([E(Sf)],ir);class Pf{static fixBlankLink(e){const t="electron",i=typeof require=="undefined"?null:require(t);typeof i&&e.target=="_blank"&&e.addEventListener("click",()=>{i==null||i.shell.openExternal(e.href)})}}var ii=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Of="sonic-link";let sr=class extends D{constructor(){super(...arguments),this.href="",this._location="",this.autoActive="partial",this._target=null,this.pushState=null}get location(){return this._location}set location(e){this._location=e,se.updateComponentActiveState(this)}connectedCallback(){this.href&&this.href.indexOf("http")!=0&&(se.onChange(this),this.location=document.location.href.replace(document.location.origin,"")),super.connectedCallback()}disconnectedCallback(){se.offChange(this),super.disconnectedCallback()}set target(e){this._target=e,Pf.fixBlankLink(this),this.requestUpdate()}get target(){return this._target}handlePushState(e){e.preventDefault(),se.changeFromComponent(this)}render(){return this.href?S`
      <a href="${this.href}" target=${V(this.target)} @click=${this.pushState?this.handlePushState:null}>
        <slot></slot>
      </a>
    `:S`<slot></slot>`}};sr.styles=[F`
      a {
        color: inherit;
        text-decoration: none;
        display: contents;
      }
    `];ii([h({type:String})],sr.prototype,"href",void 0);ii([h({type:String})],sr.prototype,"autoActive",void 0);ii([h({type:String})],sr.prototype,"target",null);ii([h({type:Boolean})],sr.prototype,"pushState",void 0);sr=ii([E(Of)],sr);var Nr=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Tf="sonic-progress";let Nt=class extends D{constructor(){super(...arguments),this.max=100,this.invert=!1,this.type="default",this.size="md"}render(){return S`
      <progress value=${V(this.value)} max=${this.max}></progress>
      <div class="slot-container">
        <slot></slot>
        <slot name="remaining"></slot>
      </div>
    `}};Nt.styles=[vt,F`
      :host {
        --sc-progress-bg: var(--sc-input-bg, var(--sc-base-100, #f5f5f5));
        --sc-progress-color: var(--sc-base-content, #1f2937);
        --sc-progress-height: 0.6em;
        --sc-progress-fs: var(--sc-fs, 1rem);
        --sc-progress-fw: 500;
        --sc-progress-rounded: var(--sc-rounded-lg);
        display: block;
        line-height: 1.2;
        font-weight: var(--sc-progress-fw);
        font-size: var(--sc-progress-fs);
      }

      progress {
        position: relative;
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        overflow: hidden;
        border: none;
        height: var(--sc-progress-height);
        border-radius: var(--sc-progress-rounded);
        background-color: var(--sc-progress-bg);
        color: var(--sc-progress-color);
      }
      progress::-moz-progress-bar {
        background-color: var(--sc-progress-color);
        border-radius: var(--sc-progress-rounded);
      }

      progress:not([value])::-moz-progress-bar {
        background-color: var(--sc-progress-bg);
      }

      progress::-webkit-progress-bar {
        background-color: var(--sc-progress-bg);
      }
      progress::-webkit-progress-value {
        background-color: var(--sc-progress-color);
        border-radius: var(--sc-progress-rounded);
      }

      /* Indeterminate */
      progress:indeterminate:after {
        background-color: var(--sc-progress-color);
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -40%;
        width: 33.333333%;
        border-radius: var(--sc-progress-rounded);
        animation: progress-loading 3s infinite ease-in-out;
      }

      @keyframes progress-loading {
        50% {
          left: 107%;
        }
      }

      /* COLOR TYPES */
      :host([type="warning"]) {
        --sc-progress-color: var(--sc-warning);
      }
      :host([type="danger"]) {
        --sc-progress-color: var(--sc-danger);
      }
      :host([type="info"]) {
        --sc-progress-color: var(--sc-info);
      }
      :host([type="success"]) {
        --sc-progress-color: var(--sc-success);
      }

      :host([invert]) {
        --sc-progress-bg: rgba(200, 200, 200, 0.1);
      }

      :host([type="default"][invert]) {
        --sc-progress-color: var(--sc-base);
      }

      slot[name="remaining"] {
        font-weight: var(--sc-font-weight-base);
        font-size: 0.85em;
        margin-top: 0.5em;
      }
      slot[name="remaining"]::slotted(*) {
        margin-left: auto;
      }

      slot:not([name]) {
        color: var(--sc-progress-color);
      }

      .slot-container {
        display: flex;
        justify-content: space-between;
        gap: 0.5em;
        margin-top: 0.15em;
      }
    `];Nr([h({type:Number})],Nt.prototype,"value",void 0);Nr([h({type:Number})],Nt.prototype,"max",void 0);Nr([h({type:Boolean})],Nt.prototype,"invert",void 0);Nr([h({type:String,reflect:!0})],Nt.prototype,"type",void 0);Nr([h({type:String,reflect:!0})],Nt.prototype,"size",void 0);Nt=Nr([E(Tf)],Nt);const Lf=F`
  .password-toggle {
    color: var(--sc-input-c);
    font-size: var(--sc-input-fs);
    cursor: pointer;
    margin-right: calc(-0.5 * var(--sc-input-px));
  }

  :host([inlineContent]) .has-suffix .password-toggle {
    margin-right: 0;
  }
`,Ui=F`
  :host {
    --sc-label-fs: var(--sc-fs, 1rem);
    --sc-label-fw: var(--sc-label-font-weight);
  }
  label {
    font-size: var(--sc-label-fs);
    font-weight: var(--sc-label-fw);
    line-height: 1.2;
  }
  .form-label {
    margin-bottom: 0.22em;
    display: block;
  }
`,Vi=F`
  .form-description {
    color: var(--sc-base-400);
    font-size: 0.85em;
    margin-top: 0.2em;
    display: block;
  }
`,xo=F`
  * {
    box-sizing: border-box;
  }

  :host {
    --sc-input-height: var(--sc-form-height);
    --sc-input-c: var(--sc-input-color, var(--sc-base-content));
    --sc-input-b-width: var(--sc-form-border-width);
    --sc-input-b-color: var(--sc-input-border-color);

    --sc-item-rounded-tr: var(--sc-input-rounded);
    --sc-item-rounded-tl: var(--sc-input-rounded);
    --sc-item-rounded-bl: var(--sc-input-rounded);
    --sc-item-rounded-br: var(--sc-input-rounded);

    --sc-input-fs: var(--sc-fs, 1rem);
    --sc-input-ff: inherit;
    --sc-input-py: 0.55em;
    --sc-input-px: clamp(0.3em, 8%, 1.1em);

    --sc-input-background: var(--sc-input-bg);
    --sc-input-addon-c: var(--sc-input-addon-color, var(--sc-base));
    --sc-input-addon-bg: var(--sc-input-c);
  }

  .form-element {
    display: block;
    flex-grow: 1;
    width: 100%;

    line-height: 1.1;
    color: var(--sc-input-c);
    border-radius: var(--sc-item-rounded-tl) var(--sc-item-rounded-tr) var(--sc-item-rounded-br)
      var(--sc-item-rounded-bl);

    font-family: var(--sc-input-ff);
    background-color: var(--sc-input-background);
    border: var(--sc-input-b-width) solid var(--sc-input-b-color, var(--sc-base-300, #aaa));
    width: 100%;
    font-size: var(--sc-input-fs);

    padding-top: var(--sc-input-py);
    padding-bottom: var(--sc-input-py);
    padding-left: var(--sc-input-px);
    padding-right: var(--sc-input-px);

    min-height: var(--sc-input-height);
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
    padding-left: clamp(0.25em, 3%, calc(0.33 * var(--sc-input-px)));
    padding-right: clamp(0.25em, 3%, calc(0.33 * var(--sc-input-px)));
  }

  :host(:not([inlineContent])) slot[name="prefix"] {
    border-radius: var(--sc-item-rounded-tl) 0 0 var(--sc-item-rounded-bl);
    background-color: var(--sc-input-addon-bg);
    color: var(--sc-input-addon-c);
    /*margin-right: calc(-1 * var(--sc-input-b-width));
    border: none;*/
  }

  :host(:not([inlineContent])) slot[name="suffix"] {
    border-radius: 0 var(--sc-item-rounded-tr) var(--sc-item-rounded-br) 0;
    background-color: var(--sc-input-addon-bg);
    color: var(--sc-input-addon-c);
    /*margin-left: calc(-1 * var(--sc-input-b-width));
    border: none;*/
  }

  :host(:not([inlineContent])) .has-prefix .form-element {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  :host(:not([inlineContent])) .has-suffix .form-element {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  slot[name="suffix"]::slotted(sonic-icon),
  slot[name="prefix"]::slotted(sonic-icon) {
    font-size: 1.2em;
  }

  /*InlineCONTENT */

  .form-element > slot,
  .form-element .form-element {
    all: unset;
  }

  :host([inlineContent]) .form-element {
    display: flex;
    align-items: center;
    gap: 0.35em;
    min-height: var(--sc-form-height);
  }

  :host([inlineContent]) .form-element .form-element {
    appearance: none;
    background: transparent;
    border: none;
    padding: 0;
    display: block;
    width: 50%;
    min-width: 0;
    flex: 1 1 auto;
    height: auto;
    min-height: auto;
    border-radius: 0;
  }
  :host([inlineContent]) slot[name="prefix"]::slotted(*),
  :host([inlineContent]) slot[name="suffix"]::slotted(*) {
    display: block;
    flex: 0 0 auto;
    max-width: 100%;
    max-width: 100%;
  }

  :host([inlineContent]) .has-suffix slot[name="suffix"] {
    margin-right: calc(-0.5 * var(--sc-input-px));
  }
  :host([inlineContent]) .has-prefix slot[name="prefix"] {
    margin-left: calc(-0.5 * var(--sc-input-px));
  }

  :host([inlineContent]) slot[name="suffix"]::slotted(*) {
    margin-left: auto;
  }

  :host([inlineContent]) .no-suffix slot[name="suffix"],
  :host([inlineContent]) .no-prefix slot[name="prefix"] {
    display: none;
  }

  /* :host([inlineContent]) .input {

  }*/
  /*Disabled */
  :host([disabled]) .form-control {
    cursor: not-allowed;
  }

  :host([variant="ghost"]) .form-element {
    --sc-input-bg: transparent;
  }

  /*Disbaled*/
  :host([disabled]) .form-element {
    pointer-events: none;
    opacity: 0.5;
    /* border-color: transparent;*/
  }
  :host([disabled]) .select-chevron {
    display: none;
    /* border-color: transparent;*/
  }

  /*PLACEHOLDER*/
  ::placeholder {
    color: inherit;
    opacity: 0.45;
  }

  :host([placehoderAsLabel]) ::placeholder {
    opacity: 1;
  }

  :focus::placeholder {
    opacity: 0 !important;
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

  /*Utilitaires*/
  .hidden {
    display: none;
  }
  .contents {
    display: contents;
  }

  /*ERROR*/
  :host([error]) {
    --sc-input-b-color: var(--sc-danger);
  }

  :host input:visited {
    display: none;
  }

  :host([touched][required]) :not(:focus):invalid {
    --sc-input-b-color: var(--sc-danger);
    --sc-input-c: var(--sc-danger);
  }

  :host([touched][required]) :not(:focus):invalid + .select-chevron {
    --sc-input-c: var(--sc-danger);
  }

  /*VALID*/
  :host([touched][required]) :not([value=""]):not(:focus):valid {
    --sc-input-b-color: var(--sc-success);
    --sc-input-c: var(--sc-success);
  }

  :host([touched][required]) :not(:focus):valid + .select-chevron {
    --sc-input-c: var(--sc-success);
  }

  /*Input COLOR*/
  :host([type="color"]) .form-element {
    padding: 0;
    border: 0;
    min-width: var(--sc-input-height);
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: var(--sc-item-rounded-tl) var(--sc-item-rounded-tr) var(--sc-item-rounded-br)
      var(--sc-item-rounded-bl);
  }

  /*Input Image*/
  :host([type="image"]) .form-element {
    padding: 0;
    border: none;
  }

  /*Input reset & image*/
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer;
  }

  /*Input search*/
  :host([type="search"]) {
    appearance: none !important;
  }

  input[type="search"]::-webkit-search-cancel-button {
    appearance: none;
    cursor: pointer;
    height: 0.65em;
    width: 0.65em;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEyMy4wNXB4IiBoZWlnaHQ9IjEyMy4wNXB4IiB2aWV3Qm94PSIwIDAgMTIzLjA1IDEyMy4wNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIzLjA1IDEyMy4wNTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTEyMS4zMjUsMTAuOTI1bC04LjUtOC4zOTljLTIuMy0yLjMtNi4xLTIuMy04LjUsMGwtNDIuNCw0Mi4zOTlMMTguNzI2LDEuNzI2Yy0yLjMwMS0yLjMwMS02LjEwMS0yLjMwMS04LjUsMGwtOC41LDguNQ0KCQljLTIuMzAxLDIuMy0yLjMwMSw2LjEsMCw4LjVsNDMuMSw0My4xbC00Mi4zLDQyLjVjLTIuMywyLjMtMi4zLDYuMSwwLDguNWw4LjUsOC41YzIuMywyLjMsNi4xLDIuMyw4LjUsMGw0Mi4zOTktNDIuNGw0Mi40LDQyLjQNCgkJYzIuMywyLjMsNi4xLDIuMyw4LjUsMGw4LjUtOC41YzIuMy0yLjMsMi4zLTYuMSwwLTguNWwtNDIuNS00Mi40bDQyLjQtNDIuMzk5QzEyMy42MjUsMTcuMTI1LDEyMy42MjUsMTMuMzI1LDEyMS4zMjUsMTAuOTI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);
    background-size: contain;
    background-repeat: no-repeat;
  }

  /* Text align */
  :host([align="center"]) .form-element {
    text-align: center;
  }
  :host([align="left"]) .form-element {
    text-align: left;
  }
  :host([align="right"]) .form-element {
    text-align: right;
  }

  /* No arrows ion input Number */
  :host([noAppearance]) input[type="number"]::-webkit-outer-spin-button,
  :host([noAppearance]) input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :host([noAppearance]) input[type="number"] {
    -moz-appearance: textfield !important;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _o=Rr(class extends jr{constructor(n){var e;if(super(n),n.type!==ar.ATTRIBUTE||n.name!=="class"||((e=n.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var t,i;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!(!((t=this.nt)===null||t===void 0)&&t.has(r))&&this.it.add(r);return this.render(e)}const s=n.element.classList;this.it.forEach(r=>{r in e||(s.remove(r),this.it.delete(r))});for(const r in e){const o=!!e[r];o===this.it.has(r)||((i=this.nt)===null||i===void 0?void 0:i.has(r))||(o?(s.add(r),this.it.add(r)):(s.remove(r),this.it.delete(r)))}return st}});var fe=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Rf="sonic-input";let de=class extends Ii(Dr(ve(D))){constructor(){super(...arguments),this.readonly=!1,this.inlineContent=!1,this.disableInlineContentFocus=!1,this.showPasswordToggle=!1,this.hasDescription=!1,this.hasLabel=!1,this.hasSuffix=!1,this.hasPrefix=!1,this.isPassword=!1}connectedCallback(){if(super.connectedCallback(),this.hasSlotOrProps(),this.hasAttribute("sameValueAs")){this.sameValueAsName=this.getAttribute("sameValueAs"),this.sameValueAsHandle=t=>this.pattern=t;const e=this.getFormPublisher();if(!e)return;e[this.sameValueAsName].onAssign(this.sameValueAsHandle)}this.type=="password"&&(this.isPassword=!0,this.showPasswordToggle=!0,this.inlineContent=!0)}disconnectedCallback(){if(super.disconnectedCallback(),this.hasAttribute("sameValueAs")&&this.sameValueAsName){const e=this.getFormPublisher();if(!e)return;e[this.sameValueAsName].offAssign(this.sameValueAsHandle)}}willUpdate(e){this.hasSlotOrProps(),super.willUpdate(e)}hasSlotOrProps(){var e,t,i,s;this.hasLabel=!!(this.label||((e=this.slotLabelNodes)===null||e===void 0?void 0:e.length)),this.hasDescription=!!(this.description||((t=this.slotDescriptionNodes)===null||t===void 0?void 0:t.length)),this.hasSuffix=!!(!((i=this.slotSuffixNodes)===null||i===void 0)&&i.length),this.hasPrefix=!!(!((s=this.slotPrefixNodes)===null||s===void 0)&&s.length)}inlineContentFocus(){var e;!this.inlineContent||this.disableInlineContentFocus||(e=this.input)===null||e===void 0||e.focus()}handleChange(e){if(!this.hasAttribute("inputDelayMs")){super.handleChange(e);return}this.changeTimeoutId&&clearTimeout(this.changeTimeoutId),this.changeTimeoutId=setTimeout(()=>super.handleChange(e),parseInt(this.getAttribute("inputDelayMs")))}togglePasswordVisibility(){this.isPassword=!this.isPassword,this._type=this.isPassword?"password":"text",console.log(this.isPassword)}render(){const e={"has-prefix":this.hasPrefix,"has-suffix":this.hasSuffix,"no-suffix":!this.hasSuffix,"no-prefix":!this.hasPrefix};return S`
      <label for="form-element" class="${this.hasLabel?"form-label":"hidden"}"
        >${this.label?me(this.label):""}<slot
          name="label"
          @slotchange=${this.hasSlotOrProps}
        ></slot
      ></label>

      <div @click=${this.inlineContentFocus} class="form-control ${_o(e)}">
        <div class="${this.inlineContent?"form-element form-element-wrapper":"contents"}">
            <slot name="prefix" @slotchange=${this.hasSlotOrProps}></slot>
            <input
              id="form-element"
              part="input"
              class="form-element input"
              @input=${this.handleChange}
              @blur=${this.handleBlur}
              type=${this.type}
              disabled=${V(this.disabled)}
              ?readonly=${this.readonly}
              ?autofocus=${this.autofocus}
              list=${V(this.list)}
              tabindex=${V(this.tabindex)}
              pattern=${V(this.pattern)}
              min=${V(this.min)}
              max=${V(this.max)}
              step=${V(this.step)}
              src=${V(this.src)}
              minlength=${V(this.minlength)}
              maxlength=${V(this.maxlength)}
              placeholder=${V(this.placeholder)}
              required=${V(this.required)}
              autocomplete=${V(this.autocomplete)}
              aria-label=${V(this.ariaLabel)}
              aria-labelledby=${V(this.ariaLabelledby)}
              .name=${this.name}
              .value=${this.value}
            />
              ${this.showPasswordToggle?S`<sonic-button
                      shape="circle"
                      class="password-toggle"
                      @click=${this.togglePasswordVisibility}
                      aria-label="Toggle password visibility"
                      variant="unstyled"
                    >
                      <sonic-icon library="heroicons" name=${this.isPassword?"eye":"eye-slash"}></sonic-icon>
                    </sonic-button>`:""}
            <slot name="suffix" @slotchange=${this.hasSlotOrProps}></slot>
          </div>
        </div>
        <slot
          name="description"
          @slotchange=${this.hasSlotOrProps}
          class="${this.hasDescription?"form-description":"hidden"}"
        >
          ${this.description?S`${me(this.description)}`:""}
        </slot>
        <slot name="list"></slot>
      </div>
    `}};de.styles=[vt,xo,Ui,Vi,Lf,F`
      :host([type="hidden"]) {
        appearance: none !important;
        display: none !important;
      }
      :host > .form-control {
        position: relative;
      }
    `];fe([h({type:String,reflect:!0})],de.prototype,"size",void 0);fe([h({type:String})],de.prototype,"list",void 0);fe([h({type:String})],de.prototype,"placeholder",void 0);fe([h({type:String})],de.prototype,"pattern",void 0);fe([h({type:String})],de.prototype,"min",void 0);fe([h({type:String})],de.prototype,"max",void 0);fe([h({type:Boolean})],de.prototype,"readonly",void 0);fe([h({type:Number})],de.prototype,"step",void 0);fe([h({type:Number})],de.prototype,"minlength",void 0);fe([h({type:Number})],de.prototype,"maxlength",void 0);fe([h({type:String})],de.prototype,"src",void 0);fe([h({type:Boolean,reflect:!0})],de.prototype,"inlineContent",void 0);fe([h({type:Boolean})],de.prototype,"disableInlineContentFocus",void 0);fe([h({type:Boolean})],de.prototype,"showPasswordToggle",void 0);fe([ze({slot:"label"})],de.prototype,"slotLabelNodes",void 0);fe([ze({slot:"description"})],de.prototype,"slotDescriptionNodes",void 0);fe([ze({slot:"suffix"})],de.prototype,"slotSuffixNodes",void 0);fe([ze({slot:"prefix"})],de.prototype,"slotPrefixNodes",void 0);fe([nr("input")],de.prototype,"input",void 0);fe([ce()],de.prototype,"hasDescription",void 0);fe([ce()],de.prototype,"hasLabel",void 0);fe([ce()],de.prototype,"hasSuffix",void 0);fe([ce()],de.prototype,"hasPrefix",void 0);fe([ce()],de.prototype,"isPassword",void 0);de=fe([E(Rf)],de);var Ft=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Xt;const jf="sonic-pop";let ot=Xt=class extends D{constructor(){super(...arguments),this.open=!1,this.noToggle=!1,this.inline=!1,this.shadow="lg",this.placement="bottom",this.positioningRuns=!1,this.lastContentX=0,this.lastContentY=0,this.resizeObserver=new ResizeObserver(()=>this.computePosition(this.placement))}runPositioningLoop(){!this.positioningRuns||(this.positioningRuns=!0,this.computePosition(this.placement),window.requestAnimationFrame(()=>this.runPositioningLoop()))}_toggle(e){if(this.open&&this.noToggle)return;const t=e;e.type=="keydown"&&(t.key!="ArrowDown"||this.open)||(this.open=!this.open,this.open?this._show():this._hide())}_show(){this.popContent.style.removeProperty("display"),this.open=!0,this.popContent.setAttribute("tabindex","0"),this.popBtn&&this.popContent&&!this.positioningRuns&&(this.positioningRuns=!0,this.lastContentX=0,this.lastContentY=0,this.runPositioningLoop())}_hide(){this.open=!1,this.popContent.setAttribute("tabindex","-1"),this.positioningRuns=!1}_handleClosePop(e){const t=e.composedPath(),i=t[0];Xt.pops.forEach(s=>{const r=t.includes(s),o=t.includes(s.querySelector('[slot="content"]')),l=Tr.getAncestorAttributeValue(i,"data-on-select")==="keep";e.type=="pointerdown"&&r||e.type=="click"&&(r&&l||!o)||s._hide()})}connectedCallback(){super.connectedCallback(),Xt.pops.size==0&&(document.addEventListener("pointerdown",this._handleClosePop),document.addEventListener("click",this._handleClosePop)),Xt.pops.add(this)}firstUpdated(e){super.firstUpdated(e),this.resizeObserver.observe(this.popContent)}disconnectedCallback(){super.disconnectedCallback(),Xt.pops.delete(this),Xt.pops.size==0&&(document.removeEventListener("pointerdown",this._handleClosePop),document.removeEventListener("click",this._handleClosePop)),this.resizeObserver.unobserve(this.popContent)}computePosition(e){var t,i,s;let r=(t=this.popContent)===null||t===void 0?void 0:t.getBoundingClientRect();const o=8,l=5,p=this.getBoundingClientRect(),v=p.left,m=p.top;let x=v,A=m;const R=m-r.height-o,N=v-r.width-o,$=v+p.width+o,U=m+p.height+o;switch(e){case"bottom":A=U;break;case"top":A=R;break;case"left":x=N;break;case"right":x=$;break}this.lastContentX+=x-r.x,this.lastContentY+=A-r.y,Object.assign(this.popContent.style,{left:`${this.lastContentX}px`,top:`${this.lastContentY}px`}),r=(i=this.popContent)===null||i===void 0?void 0:i.getBoundingClientRect(),r.x<l&&e=="left"&&(x=$),r.y<l&&e=="top"&&(A=U),r.x+r.width>window.innerWidth-l&&e=="right"&&(x=N),r.y+r.height>window.innerHeight-l&&e=="bottom"&&(A=R),this.lastContentX+=x-r.x,this.lastContentY+=A-r.y,Object.assign(this.popContent.style,{left:`${this.lastContentX}px`,top:`${this.lastContentY}px`}),r=(s=this.popContent)===null||s===void 0?void 0:s.getBoundingClientRect(),r.x<0&&(this.lastContentX+=-r.x),r.y<0&&(this.lastContentY+=-r.y),r.x+r.width>window.innerWidth&&(this.lastContentX+=window.innerWidth-(r.x+r.width)),r.y+r.height>window.innerHeight&&(this.lastContentY+=window.innerHeight-(r.y+r.height)),Object.assign(this.popContent.style,{left:`${this.lastContentX}px`,top:`${this.lastContentY}px`})}render(){return S`
      <slot @click=${this._toggle} @keydown=${this._toggle} class="contents"></slot>
      <slot
        name="content"
        tabindex="-1"
        part="content"
        style="display: none;"
        class="  
          ${this.open?"is-open":""}"
      ></slot>
    `}};ot.pops=new Set;ot.styles=[F`
      :host {
        display: inline-block;
        vertical-align: middle;
      }
      slot[name="content"] {
        max-width: 80vw;
        background-color: var(--sc-base);
        position: absolute;
        z-index: 50;
        display: block;
        transform: translateY(1rem) scale(0.95);
        opacity: 0;
        pointer-events: none;
        transition-duration: 0.15s;
        transition-timing-function: ease;
        transition-property: all;
        border-radius: min(calc(var(--sc-btn-rounded) * 2), 0.4em);
      }

      slot[name="content"].is-open:not(.is-empty) {
        transform: translateY(0) scale(1);
        opacity: 1;
        pointer-events: auto;
        transition-property: scale, opacity;
        transition-timing-function: cubic-bezier(0.25, 0.25, 0.42, 1.225);
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

      :host([inline]) {
        vertical-align: baseline;
      }
    `];Ft([ce()],ot.prototype,"open",void 0);Ft([nr("slot:not([name=content])")],ot.prototype,"popBtn",void 0);Ft([nr("slot[name=content]")],ot.prototype,"popContent",void 0);Ft([h({type:Boolean})],ot.prototype,"noToggle",void 0);Ft([h({type:Boolean,reflect:!0})],ot.prototype,"inline",void 0);Ft([h({type:String,reflect:!0})],ot.prototype,"shadow",void 0);Ft([h({type:String})],ot.prototype,"placement",void 0);ot=Xt=Ft([E(jf)],ot);var Df=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Ef="sonic-menu-item";let ja=class extends pe{constructor(){super()}connectedCallback(){this.hasAttribute("variant")||(this.variant="ghost"),this.hasAttribute("type")||(this.type="primary"),this.hasAttribute("shape")||(this.shape="block"),this.hasAttribute("align")||(this.align="left"),super.connectedCallback()}};ja=Df([E(Ef)],ja);var at=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let He=class extends ol(zt(D)){constructor(){super(...arguments),this._name="",this.forceAutoFill=!1,this.placeholder="",this.filteredFields="",this.readonly=null,this.dataProviderExpression="",this.key="",this.value="",this.formDataProvider=""}get name(){return this._name}set name(e){this.hasAttribute("name")&&!this.forceAutoFill&&(e=this.getAttribute("name")),this._name=e,this.requestUpdate()}get description(){return this._description}set description(e){this.hasAttribute("description")&&!this.forceAutoFill&&(e=this.getAttribute("description")),this._description=e,this.requestUpdate()}get label(){return this._label}set label(e){this.hasAttribute("label")&&!this.forceAutoFill&&(e=this.getAttribute("label")),this._label=e,this.requestUpdate()}connectedCallback(){this.formDataProvider=this.getAncestorAttributeValue("formDataProvider"),super.connectedCallback()}render(){return S`
      <sonic-pop noToggle style="display:block;">
        <sonic-input
          type="search"
          data-keyboard-nav="nav-autocomplete"
          label="${V(this.label)}"
          description="${V(this.description)}"
          name="${V(this.name)}"
          value="${V(this.value)}"
          autocomplete="off"
          clearable
        ></sonic-input>
        <sonic-menu slot="content">
          <sonic-queue
            filteredFields=${this.filteredFields}
            dataProviderExpression="${this.dataProviderExpression}"
            dataFilterProvider="${this.formDataProvider}"
            key="${this.key}"
            .templates=${this.templateList}
            displayContents
          >
          </sonic-queue>
        </sonic-menu>
      </sonic-pop>
    `}};He.styles=[F`
      :host {
        display: block;
      }
    `];at([h()],He.prototype,"name",null);at([h()],He.prototype,"forceAutoFill",void 0);at([h()],He.prototype,"description",null);at([h()],He.prototype,"label",null);at([h({type:String})],He.prototype,"placeholder",void 0);at([h()],He.prototype,"filteredFields",void 0);at([h({type:Boolean})],He.prototype,"readonly",void 0);at([h({type:String})],He.prototype,"dataProviderExpression",void 0);at([h({type:String})],He.prototype,"key",void 0);at([h({type:String})],He.prototype,"value",void 0);He=at([E("sonic-input-autocomplete")],He);var Fe=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Nf="sonic-password-helper";let je=class extends zt(D){constructor(){super(...arguments),this.minChars=8,this.hasNoChar=!0,this.hasEnoughChars=!1,this.hasMinuscule=!1,this.hasMajuscule=!1,this.hasNumber=!1,this.hasSpecialChar=!1,this.wording_password_helper_decription="Le mot de passe doit contenir au moins :",this.wording_password_helper_min_length="8 caract\xE8res",this.wording_password_helper_lower_case="1 minuscule",this.wording_password_helper_upper_case="1 majuscule",this.wording_password_helper_number="1 chiffre",this.wording_password_helper_special_char="1 caract\xE8re sp\xE9cial"}connectedCallback(){super.connectedCallback(),this.name&&(this.checkValue=e=>{e?(this.hasNoChar=e.length==0,this.hasEnoughChars=e.length>this.minChars):(this.hasNoChar=!0,this.hasEnoughChars=!1),this.hasMinuscule=/[a-z]/.test(e),this.hasMajuscule=/[A-Z]/.test(e),this.hasNumber=/[0-9]/.test(e),this.hasSpecialChar=/[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]/.test(e)},Be.get(this.getAncestorAttributeValue("formDataProvider"))[this.name].onAssign(this.checkValue))}disconnectedCallback(){this.checkValue&&this.name&&Be.get(this.getAncestorAttributeValue("formDataProvider"))[this.name].offAssign(this.checkValue),super.disconnectedCallback()}getIcon(e){return e?S`<sonic-icon library="heroicons" name="face-smile"></sonic-icon>`:S`<sonic-icon library="heroicons" name="x-mark"></sonic-icon>`}render(){return this.hasNoChar?G:S`
      <div>${this.wording_password_helper_decription}</div>
      <div>${this.getIcon(this.hasEnoughChars)} ${this.wording_password_helper_min_length}</div>
      <div>${this.getIcon(this.hasMinuscule)} ${this.wording_password_helper_lower_case}</div>
      <div>${this.getIcon(this.hasMajuscule)} ${this.wording_password_helper_upper_case}</div>
      <div>${this.getIcon(this.hasNumber)} ${this.wording_password_helper_number}</div>
      <div>${this.getIcon(this.hasSpecialChar)} ${this.wording_password_helper_special_char}</div>
    `}};Fe([h()],je.prototype,"name",void 0);Fe([h()],je.prototype,"minChars",void 0);Fe([ce()],je.prototype,"hasNoChar",void 0);Fe([ce()],je.prototype,"hasEnoughChars",void 0);Fe([ce()],je.prototype,"hasMinuscule",void 0);Fe([ce()],je.prototype,"hasMajuscule",void 0);Fe([ce()],je.prototype,"hasNumber",void 0);Fe([ce()],je.prototype,"hasSpecialChar",void 0);Fe([h()],je.prototype,"wording_password_helper_decription",void 0);Fe([h()],je.prototype,"wording_password_helper_min_length",void 0);Fe([h()],je.prototype,"wording_password_helper_lower_case",void 0);Fe([h()],je.prototype,"wording_password_helper_upper_case",void 0);Fe([h()],je.prototype,"wording_password_helper_number",void 0);Fe([h()],je.prototype,"wording_password_helper_special_char",void 0);je=Fe([E(Nf)],je);var lr=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Mf="sonic-same-value-helper";let Mt=class extends zt(D){constructor(){super(...arguments),this.descriptionWhenEqual="Correspondance : oui",this.descriptionWhenNotEqual="Correspondance : non",this.areEqual=!1,this.hasNoChar=!0}connectedCallback(){super.connectedCallback();const e=Be.get(this.getAncestorAttributeValue("formDataProvider"));this.name&&this.sameValueAs&&(this.checkValue=t=>{t?this.hasNoChar=t.length==0:this.hasNoChar=!0,this.name&&this.sameValueAs&&(this.areEqual=e[this.name].get()==e[this.sameValueAs].get())},e[this.name].onAssign(this.checkValue),e[this.sameValueAs].onAssign(this.checkValue))}disconnectedCallback(){if(this.checkValue&&this.name&&this.sameValueAs){const e=Be.get(this.getAncestorAttributeValue("formDataProvider"));e[this.name].offAssign(this.checkValue),e[this.sameValueAs].offAssign(this.checkValue)}super.disconnectedCallback()}render(){return this.hasNoChar?G:S`
      <span> ${this.areEqual?me(this.descriptionWhenEqual):me(this.descriptionWhenNotEqual)} </span>
    `}};lr([h()],Mt.prototype,"name",void 0);lr([h()],Mt.prototype,"sameValueAs",void 0);lr([h()],Mt.prototype,"descriptionWhenEqual",void 0);lr([h()],Mt.prototype,"descriptionWhenNotEqual",void 0);lr([ce()],Mt.prototype,"areEqual",void 0);lr([ce()],Mt.prototype,"hasNoChar",void 0);Mt=lr([E(Mf)],Mt);var St=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const zf="sonic-checkbox";let We=class extends go(Ii(Dr(ve(D)))){constructor(){super(...arguments),this.touched=!1,this.iconName="check",this.indeterminateIconName="minus-small",this.showAsIndeterminate=!1,this.hasDescription=!1,this.hasLabel=!1}connectedCallback(){this.type="checkbox",this.hasSlotOrProps(),super.connectedCallback()}willUpdate(e){this.hasSlotOrProps(),super.willUpdate(e)}hasSlotOrProps(){var e,t;this.hasLabel=!!(this.label||((e=this.slotLabelNodes)===null||e===void 0?void 0:e.length)),this.hasDescription=!!(this.description||((t=this.slotDescriptionNodes)===null||t===void 0?void 0:t.length))}render(){return S`
      <label class="checkbox-container ${this.disabled?"disabled":""}">

        <span class="icon-container">
          <input
            type="${this.type}"
            @click=${this.handleChange}
            @blur=${this.handleBlur}
            ?required=${this.required}
            ?data-indeterminate=${this.showAsIndeterminate}
            .disabled=${V(this.disabled)}
            .checked=${V(this.checked)}
            .name=${this.name}
            .value=${this.value}
            ?autofocus=${this.autofocus}
            aria-label=${V(this.ariaLabel)}
            aria-labelledby=${V(this.ariaLabelledby)}
          />
          <sonic-icon name="${this.checked=="indeterminate"||this.showAsIndeterminate?this.indeterminateIconName:this.iconName}" class="sc-input-icon"></sonic-icon>
        </span>

        <div class="checkbox-text ${!this.hasDescription&&!this.hasLabel?"hidden":"checkbox-text"}">
            ${this.label?me(this.label):""}
            <slot @slotchange=${this.hasSlotOrProps}></slot>
            <slot @slotchange=${this.hasSlotOrProps} name="description" class="${this.hasDescription?"description":"hidden"} ">
              ${this.description?S`${me(this.description)}`:""}
            </slot>
          </div>
        </label>
      </label>
    `}};We.styles=[vt,F`
      :host {
        --sc-checkbox-border-width: var(--sc-form-border-width);
        --sc-checkbox-border-color: var(--sc-input-border-color);
        --sc-checkbox-bg: var(--sc-input-bg);
        --sc-checkbox-color: transparent;
      }

      * {
        box-sizing: border-box;
      }

      .checkbox-container {
        min-height: 1.4em;
        display: flex;
        gap: 0.5em;
        line-height: 1.2;
        align-items: flex-start;
        font-size: var(--sc-fs);
      }

      .icon-container {
        position: relative;
        display: flex;
        flex-shrink: 0;
      }

      input {
        box-sizing: border-box;
        appearance: none;
        flex-shrink: 0;
        height: calc(var(--sc-fs) * 1.25);
        width: calc(var(--sc-fs) * 1.25);
        display: block;
        cursor: pointer;
        border-radius: 0.25em;
        transition: 0.2s;
        outline: none;
        margin: 0;
        background-color: var(--sc-checkbox-bg);
        border: var(--sc-checkbox-border-width) solid
          var(--sc-checkbox-border-color);
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
        color: var(--sc-checkbox-color);
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
      input[data-indeterminate],
      input[checked] {
        --sc-checkbox-border-color: var(--sc-primary);
        --sc-checkbox-bg: var(--sc-primary);
      }
      input:checked + sonic-icon,
      input[data-indeterminate] + sonic-icon,
      input[checked] + sonic-icon {
        --sc-checkbox-color: var(--sc-primary-content);
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

      /*INPUT HOVER*/
      :host(:not([disabled])) label:hover input {
        filter: brightness(0.97);
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

      /*ERROR*/
      /*
      :host([touched]) .checkbox-container:has(input:not(:focus):invalid) {
        --sc-checkbox-border-color:var(--sc-danger);
      }
      :host([touched]) .checkbox-container:has(input:not(:focus):invalid) .checkbox-text{
        color:var(--sc-danger);
      }
      */
    `];St([h({type:Boolean,reflect:!0})],We.prototype,"touched",void 0);St([h({type:String})],We.prototype,"iconName",void 0);St([h({type:String})],We.prototype,"indeterminateIconName",void 0);St([h({type:Boolean})],We.prototype,"showAsIndeterminate",void 0);St([h({type:Boolean})],We.prototype,"hasDescription",void 0);St([h({type:Boolean})],We.prototype,"hasLabel",void 0);St([ze()],We.prototype,"slotLabelNodes",void 0);St([ze({slot:"description"})],We.prototype,"slotDescriptionNodes",void 0);We=St([E(zf)],We);var Ff=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const If="sonic-radio";let Hs=class extends We{constructor(){super(),this.radio=!0}connectedCallback(){super.connectedCallback(),this.type="radio"}};Hs.styles=[We.styles,F`
      :host input {
        border-radius: 50%;
      }
      :host sonic-icon {
        border-radius: 50%;
        overflow: hidden;
        background-color: var(--sc-primary-content);
        line-height: 0;
        display: block;
        font-size: 1em;
        height: 0.6em;
        width: 0.6em;
      }
    `];Hs=Ff([E(If)],Hs);var ke=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Uf="sonic-select";let _e=class extends Dr(ve(D)){constructor(){super(...arguments),this.valueKey="value",this.wordingKey="wording",this.multiple=!1,this._options=[],this.hasDoneFirstUpdate=!1,this._value="",this.forceAutoFill=!1,this.hasDescription=!1,this.hasLabel=!1,this.hasSuffix=!1,this.hasPrefix=!1}set options(e){this._options=e;for(const i of e)i.selected&&(this.value=i.value||"");!(this.value||this.getAttribute("value"))&&this._options.length>0&&(this.value=this._options[0][this.valueKey]),this.requestUpdate()}get options(){return this._options}firstUpdated(){this.hasDoneFirstUpdate=!0}set value(e){e==null&&!this.hasDoneFirstUpdate||(e||(e=""),this._value!=e&&(this._value=e,this.updateFormPublisherValue(),this.requestUpdate()))}get value(){return this._value}updateFormPublisherValue(){const e=this.getFormPublisher();e&&(e[this.name]=this.value)}connectedCallback(){super.connectedCallback(),this.hasSlotOrProps();const e=this.querySelectorAll("option");e.length>0&&(this.options=Array.from(e).map(t=>({value:t.value,wording:t.text,selected:t.hasAttribute("selected")})))}get description(){return this._description}set description(e){this.hasAttribute("description")&&!this.forceAutoFill&&(e=this.getAttribute("description")),this._description=e,this.requestUpdate()}get label(){return this._label}set label(e){this.hasAttribute("label")&&!this.forceAutoFill&&(e=this.getAttribute("label")),this._label=e,this.requestUpdate()}willUpdate(e){this.hasSlotOrProps(),super.willUpdate(e)}hasSlotOrProps(){var e,t,i,s;this.hasLabel=!!(this.label||((e=this.slotLabelNodes)===null||e===void 0?void 0:e.length)),this.hasDescription=!!(this.description||((t=this.slotDescriptionNodes)===null||t===void 0?void 0:t.length)),this.hasSuffix=!!(!((i=this.slotSuffixNodes)===null||i===void 0)&&i.length),this.hasPrefix=!!(!((s=this.slotPrefixNodes)===null||s===void 0)&&s.length)}validateFormElement(){var e;const t=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("select");if(!t||t.checkValidity())return;const i=this.getFormPublisher();i&&(i.isFormValid=!1),t.reportValidity()}render(){const e={"has-prefix":this.hasPrefix,"has-suffix":this.hasSuffix};return S`
      <label for="form-element" class="${this.hasLabel?"form-label":"hidden"}"
        >${this.label?me(this.label):""}<slot
          name="label"
          @slotchange=${this.hasSlotOrProps}
        ></slot
      ></label>

      <div class="form-control ${_o(e)}">
        <slot name="prefix" @slotchange=${this.hasSlotOrProps}></slot>
        <div class="form-select-wrapper">
          <select
            id="form-element"
            @change=${this.handleChange}
            @blur=${this.handleBlur}
            ?disabled=${this.disabled}
            ?required=${this.required}
            ?multiple=${this.multiple}
            size=${V(this.selectSize)}
            ?autofocus=${this.autofocus}
            .value="${this.value}"
            class="form-element"
            aria-label=${V(this.ariaLabel)}
            aria-labelledby=${V(this.ariaLabelledby)}
          >
            ${Ni(this.options,t=>t[this.valueKey],t=>{const i=this.value==t[this.valueKey];return S`<option ?selected=${i} value="${t[this.valueKey]}">
                  ${t[this.wordingKey]}
                </option>`})}
            <slot></slot>
          </select>
          <sonic-icon class="select-chevron" name="nav-arrow-down" .size=${this.size}></sonic-icon>
        </div>
        <slot name="suffix" @slotchange=${this.hasSlotOrProps}></slot>
      </div>

      <slot
        name="description"
        @slotchange=${this.hasSlotOrProps}
        class="${this.hasDescription?"form-description":"hidden"}"
      >
        ${this.description?S`${me(this.description)}`:""}
      </slot>
    `}};_e.styles=[vt,xo,Ui,Vi,F`
      .form-element {
        appearance: none;
      }

      :host([disabled]) sonic-icon {
        opacity: 0;
      }

      @supports selector(:has(*)) {
        :host(:not([disabled])) .form-element:not(:has(option:only-child)) {
          padding-right: max(1.275em, calc(1.5 * var(--sc-input-px)));
        }
      }
      /*Firefox etc.*/
      @supports not selector(:has(*)) {
        :host(:not([disabled])) .form-element {
          padding-right: max(1.275em, calc(1.5 * var(--sc-input-px)));
        }
      }

      .form-select-wrapper {
        position: relative;
        width: 100%;
      }

      sonic-icon {
        position: absolute;
        right: calc(0.8 * var(--sc-input-px));
        top: 50%;
        pointer-events: none;
        transform: translateY(-50%);
        color: var(--sc-input-c);
      }

      option {
        padding: 0.1rem var(--sc-input-px);
        color: var(--sc-base-content);
        background: var(--sc-base);
      }

      select[multiple] option {
        background: transparent;
        padding: 0;
      }
    `];ke([h({type:String})],_e.prototype,"valueKey",void 0);ke([h({type:String})],_e.prototype,"wordingKey",void 0);ke([h({type:Boolean})],_e.prototype,"multiple",void 0);ke([h({type:String,reflect:!0})],_e.prototype,"size",void 0);ke([h({type:Number})],_e.prototype,"selectSize",void 0);ke([h({type:Array})],_e.prototype,"options",null);ke([h({reflect:!0})],_e.prototype,"value",null);ke([h({type:Boolean})],_e.prototype,"forceAutoFill",void 0);ke([h()],_e.prototype,"description",null);ke([h()],_e.prototype,"label",null);ke([ze({slot:"label"})],_e.prototype,"slotLabelNodes",void 0);ke([ze({slot:"description"})],_e.prototype,"slotDescriptionNodes",void 0);ke([ze({slot:"suffix"})],_e.prototype,"slotSuffixNodes",void 0);ke([ze({slot:"prefix"})],_e.prototype,"slotPrefixNodes",void 0);ke([ce()],_e.prototype,"hasDescription",void 0);ke([ce()],_e.prototype,"hasLabel",void 0);ke([ce()],_e.prototype,"hasSuffix",void 0);ke([ce()],_e.prototype,"hasPrefix",void 0);_e=ke([E(Uf)],_e);var Ge=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Vf="sonic-textarea";let Ne=class extends Ii(Dr(ve(D))){constructor(){super(...arguments),this.size="",this.readonly=!1,this.hasDescription=!1,this.hasLabel=!1}connectedCallback(){super.connectedCallback(),this.hasSlotOrProps()}willUpdate(e){this.hasSlotOrProps(),super.willUpdate(e)}hasSlotOrProps(){var e,t;this.hasLabel=!!(this.label||((e=this.slotLabelNodes)===null||e===void 0?void 0:e.length)),this.hasDescription=!!(this.description||((t=this.slotDescriptionNodes)===null||t===void 0?void 0:t.length))}validateFormElement(){var e;const t=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("textarea");if(!t||t.checkValidity())return;const i=this.getFormPublisher();i&&(i.isFormValid=!1),t.reportValidity()}render(){return S`
      <label for="form-element" class="${this.hasLabel?"form-label":"hidden"}"
        >${this.label?me(this.label):""}<slot
          name="label"
          @slotchange=${this.hasSlotOrProps}
        ></slot
      ></label>

      <div class="form-control">
        <textarea
          id="form-element"
          @input=${this.handleChange}
          @blur=${this.handleBlur}
          disabled=${V(this.disabled)}
          ?required=${this.required}
          ?autofocus=${this.autofocus}
          rows=${V(this.rows)}
          cols=${V(this.cols)}
          maxlength=${V(this.maxlength)}
          minlength=${V(this.minlength)}
          ?readonly=${this.readonly}
          spellcheck=${V(this.spellcheck)}
          autocomplete=${V(this.autocomplete)}
          tabindex=${V(this.tabindex)}
          wrap=${V(this.wrap)}
          placeholder="${this.placeholder}"
          class="form-element textarea custom-scroll"
          aria-label=${V(this.ariaLabel)}
          aria-labelledby=${V(this.ariaLabelledby)}
        >
${this.value}</textarea
        >
      </div>

      <slot
        name="description"
        @slotchange=${this.hasSlotOrProps}
        class="${this.hasDescription?"form-description":"hidden"}"
      >
        ${this.description?S`${me(this.description)}`:""}
      </slot>
    `}};Ne.styles=[vt,xo,Ui,Vi,zi,F`
      textarea {
        font-size: inherit;
      }
    `];Ge([h({type:String})],Ne.prototype,"size",void 0);Ge([h({type:Number})],Ne.prototype,"rows",void 0);Ge([h({type:Number})],Ne.prototype,"cols",void 0);Ge([h({type:Number})],Ne.prototype,"maxlength",void 0);Ge([h({type:Number})],Ne.prototype,"minlength",void 0);Ge([h({type:String})],Ne.prototype,"wrap",void 0);Ge([h({type:Boolean})],Ne.prototype,"readonly",void 0);Ge([h({type:String})],Ne.prototype,"placeholder",void 0);Ge([ze({slot:"label"})],Ne.prototype,"slotLabelNodes",void 0);Ge([ze({slot:"description"})],Ne.prototype,"slotDescriptionNodes",void 0);Ge([ce()],Ne.prototype,"hasDescription",void 0);Ge([ce()],Ne.prototype,"hasLabel",void 0);Ne=Ge([E(Vf)],Ne);var qf=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let Ws=class extends D{render(){return S`<slot></slot>`}};Ws.styles=[F`
      :host {
        color: var(--sc-neutral-500);
        font-size: 1.25rem;
        line-height: 1.2;
        display: block;
        font-weight: var(--sc-font-weight-base);
        font-style: var(--sc-font-style-base);
        margin-top: 0.25em;
      }
    `];Ws=qf([E("sonic-legend-description")],Ws);var cr=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Bf="sonic-legend";let $t=class extends D{constructor(){super(...arguments),this.forceAutoFill=!1}get description(){return this._description}set description(e){this.hasAttribute("description")&&!this.forceAutoFill&&(e=this.getAttribute("description")),this._description=e,this.requestUpdate()}get label(){return this._label}set label(e){this.hasAttribute("label")&&!this.forceAutoFill&&(e=this.getAttribute("label")),this._label=e,this.requestUpdate()}render(){return S`<legend part="legend">
      ${this.iconName?S`<div class="icon">
            <sonic-icon
              name=${this.iconName}
              prefix=${V(this.iconPrefix)}
              library=${V(this.iconLibrary)}
            ></sonic-icon>
          </div>`:""}

      <div class="legend-content">
        ${me(this.label?this.label:"")}
        ${this.description?S`<sonic-legend-description>${me(this.description)}</sonic-legend-description>`:""}
        <slot></slot>
      </div>
      <slot name="suffix"></slot>
    </legend>`}};$t.styles=[F`
      :host {
        --sc-legend-font-size: 1.5rem;
        --sc-legend-font-weight: var(--sc-font-weight-base);
        --sc-legend-font-style: var(--sc-headings-font-style);
        --sc-legend-family: var(--sc-headings-font-family);
        --sc-legend-line-height: var(--sc-headings-line-height);
        --sc-legend-color: var(--sc-base-content);
        display: flex;
        width: 100%;
      }

      legend {
        font-size: var(--sc-legend-font-size);
        font-weight: var(--sc-legend-font-weight);
        font-style: var(--sc-legend-font-style);
        font-family: var(--sc-legend-font-family);
        line-height: var(--sc-legend-line-height);
        color: var(--sc-legend-color);
        padding: 0;
        display: flex;
        width: 100%;
        align-items: flex-start;
        gap: 0.5em;
      }

      slot[name="suffix"] {
        display: block;
        margin-left: auto;
        flex-shrink: 0;
      }

      .legend-content {
        flex-grow: 1;
      }
    `];cr([h({type:Boolean})],$t.prototype,"forceAutoFill",void 0);cr([h()],$t.prototype,"description",null);cr([h()],$t.prototype,"label",null);cr([h({type:String})],$t.prototype,"iconName",void 0);cr([h({type:String})],$t.prototype,"iconLibrary",void 0);cr([h({type:String})],$t.prototype,"iconPrefix",void 0);$t=cr([E(Bf)],$t);var Pt=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Hf="sonic-fieldset";let nt=class extends ve(D){constructor(){super(...arguments),this.disabled=!1,this.variant="default"}render(){return S`<fieldset form="${V(this.form)}" ?disabled="${this.disabled}">
      ${this.label?S` <sonic-legend
            label=${V(this.label)}
            description=${V(this.description)}
            iconName=${V(this.iconName)}
            iconPrefix=${V(this.iconPrefix)}
            iconLibrary=${V(this.iconLibrary)}
          ></sonic-legend>`:G}
      <slot></slot>
    </fieldset>`}};nt.styles=[F`
      :host {
        --sc-fieldset-mt: 0;
        --sc-fieldset-mb: 1rem;
        --sc-fieldset-border-color: var(--sc-border-color);
        --sc-fieldset-border-width: var(--sc-form-border-width);

        margin-top: var(--sc-fieldset-mt);
        margin-bottom: var(--sc-fieldset-mb);
        display: block;
        border: var(--sc-fieldset-border-width) solid var(--sc-fieldset-border-color) !important;
        padding: 1.8rem 1.25rem;
        border-radius: var(--sc-rounded-lg);
      }

      fieldset {
        all: unset;
        display: contents;
      }
      :host([variant="shadow"]),
      :host([variant="ghost"]) {
        --sc-fieldset-border-color: transparent;
      }
      :host([variant="shadow"]) {
        --sc-fieldset-border-color: transparent;
        box-shadow: var(--sc-shadow-lg);
      }

      sonic-legend,
      ::slotted(sonic-legend) {
        margin-bottom: 1.5rem;
        display: block;
      }

      ::slotted(sonic-legend:last-child) {
        margin-bottom: 0;
      }
    `];Pt([h({type:Boolean,reflect:!0})],nt.prototype,"disabled",void 0);Pt([h({type:String})],nt.prototype,"form",void 0);Pt([h({type:String})],nt.prototype,"label",void 0);Pt([h({type:String})],nt.prototype,"description",void 0);Pt([h({type:String})],nt.prototype,"iconName",void 0);Pt([h({type:String})],nt.prototype,"iconLibrary",void 0);Pt([h({type:String})],nt.prototype,"iconPrefix",void 0);Pt([h({type:String,reflect:!0})],nt.prototype,"variant",void 0);nt=Pt([E(Hf)],nt);class Wf{constructor(e,{target:t,config:i,callback:s,skipInitial:r}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,t!==null&&this.t.add(t!=null?t:e),this.l=i,this.o=r!=null?r:this.o,this.callback=s,window.ResizeObserver?(this.u=new ResizeObserver(o=>{this.handleChanges(o),this.h.requestUpdate()}),e.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){var t;this.value=(t=this.callback)===null||t===void 0?void 0:t.call(this,e,this.u)}hostConnected(){for(const e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}}var $o=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Zf="sonic-form-layout";let Kr=class extends ve(D){constructor(){super(...arguments),this._resizeController=new Wf(this,{}),this.oneFormElement=!1}onSlotChange(){let e=this.slottedElements;const t=["sonic-input","sonic-select","sonic-input-autocomplete",".form-item-container"];e=e.filter(i=>t.includes(i.nodeName.toLowerCase())),this.oneFormElement=e.length==1}render(){const e={"cq--md":this.offsetWidth>440,"one-form-element":this.oneFormElement};return S`<div class=${_o(e)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </div>`}};Kr.styles=[F`
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
      .one-form-element {
        grid-template-columns: 1fr;
      }
      /*::slotted(sonic-radio),
      ::slotted(sonic-checkbox),
      ::slotted(sonic-form-actions),
      ::slotted(sonic-divider),
      ::slotted(sonic-textarea) {
        grid-column: 1 / -1;
      }*/

      ::slotted(:not(sonic-input):not(sonic-select):not(sonic-input-autocomplete):not(.form-item-container)) {
        grid-column: 1 / -1;
      }

      ::slotted(sonic-divider) {
        --sc-divider-my: 0;
      }
    `];$o([At({flatten:!0})],Kr.prototype,"slottedElements",void 0);$o([h({type:Boolean})],Kr.prototype,"oneFormElement",void 0);Kr=$o([E(Zf)],Kr);var Co=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Gf="sonic-form-actions";let Xr=class extends D{constructor(){super(...arguments),this.direction="row",this.justify="flex-start"}render(){const e={flexDirection:this.direction,justifyContent:this.justify};return S`<slot style=${qe(e)}></slot>`}};Xr.styles=[F`
      :host {
        display: block;
      }
      slot {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
      }
    `];Co([h({type:String})],Xr.prototype,"direction",void 0);Co([h({type:String})],Xr.prototype,"justify",void 0);Xr=Co([E(Gf)],Xr);var It=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Yf="sonic-group";let ut=class extends D{constructor(){super(...arguments),this.alignItems="center",this.hasDescription=!1,this.hasLabel=!1}updated(){const e=this.querySelectorAll("sonic-input, sonic-button, sonic-select"),t=e.length;t>1&&e.forEach((i,s)=>{const r=i;s===0?(r.style.setProperty("--sc-item-rounded-tr","0"),r.style.setProperty("--sc-item-rounded-br","0")):s===t-1?(r.style.setProperty("--sc-item-rounded-tl","0"),r.style.setProperty("--sc-item-rounded-bl","0")):(r.style.setProperty("--sc-item-rounded-tr","0"),r.style.setProperty("--sc-item-rounded-br","0"),r.style.setProperty("--sc-item-rounded-tl","0"),r.style.setProperty("--sc-item-rounded-bl","0"))})}connectedCallback(){super.connectedCallback(),this.hasSlotOrProps()}willUpdate(e){this.hasSlotOrProps(),super.willUpdate(e)}hasSlotOrProps(){var e,t;this.hasLabel=!!(this.label||((e=this.slotLabelNodes)===null||e===void 0?void 0:e.length)),this.hasDescription=!!(this.description||((t=this.slotDescriptionNodes)===null||t===void 0?void 0:t.length))}render(){const e={alignItems:this.alignItems};return S`<span class="${this.hasLabel?"form-label":"hidden"}"
        >${this.label?me(this.label):""}<slot
          name="label"
          @slotchange=${this.hasSlotOrProps}
        ></slot
      ></span>
      <slot class="main-slot" style=${qe(e)}></slot>
      <slot
        name="description"
        @slotchange=${this.hasSlotOrProps}
        class="${this.hasDescription?"form-description":"hidden"}"
      >
        ${this.description?S`${me(this.description)}`:""}
      </slot>`}};ut.styles=[vt,Ui,Vi,F`
      :host {
        display: inline-block;
        vertical-align: middle;
      }

      .main-slot {
        width: 100%;
        display: flex;
      }
      .hidden {
        display: none;
      }

      ::slotted(sonic-button),
      ::slotted(sonic-input),
      ::slotted(sonic-select) {
        flex-grow: 1;
      }
    `];It([h({type:String})],ut.prototype,"alignItems",void 0);It([h({type:String})],ut.prototype,"label",void 0);It([h({type:String})],ut.prototype,"description",void 0);It([ze({slot:"label"})],ut.prototype,"slotLabelNodes",void 0);It([ze({slot:"description"})],ut.prototype,"slotDescriptionNodes",void 0);It([ce()],ut.prototype,"hasDescription",void 0);It([ce()],ut.prototype,"hasLabel",void 0);ut=It([E(Yf)],ut);var bt=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Kf="sonic-image";let Xe=class extends D{constructor(){super(...arguments),this.rounded="none",this.src="",this.alt="",this.loading="lazy",this.ratio="auto",this.objectPosition="center center",this.imageRendering="auto",this.cover=!1}firstUpdated(){var e;if(this.transition){const t=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("img");if(!t)return;t.onload=function(){t.classList.add("loaded")}}}render(){const e={aspectRatio:this.cover?"auto":this.ratio,imageRendering:this.imageRendering,objectPosition:this.objectPosition};return S`<div part="image">
      <picture part="picture"
        ><img part="img" src="${this.src}" loading="${this.loading}" alt="${this.alt}" style=${qe(e)}
      /></picture>
    </div>`}};Xe.styles=[F`
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

      :host([transition]) img {
        opacity: 0;
        transition: 0.25s;
      }

      :host([transition="fade-scale-out"]) img {
        scale: 1.08;
        transition: opacity 0.3s linear, scale 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      :host([transition]) img.loaded {
        opacity: 1;
        scale: 1;
      }
    `];bt([h({type:String})],Xe.prototype,"rounded",void 0);bt([h({type:String})],Xe.prototype,"src",void 0);bt([h({type:String})],Xe.prototype,"alt",void 0);bt([h({type:String})],Xe.prototype,"loading",void 0);bt([h({type:String,reflect:!0})],Xe.prototype,"transition",void 0);bt([h({type:String})],Xe.prototype,"ratio",void 0);bt([h({type:String})],Xe.prototype,"objectPosition",void 0);bt([h({type:String})],Xe.prototype,"imageRendering",void 0);bt([h({type:Boolean,reflect:!0})],Xe.prototype,"cover",void 0);Xe=bt([E(Kf)],Xe);var Ye=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Xf="sonic-menu";let Me=class extends D{constructor(){super(...arguments),this.size="",this.direction="column",this.gap="var(--sc-menu-gap)",this.align="left",this.shadow=null,this.moreShape="circle",this.scrollable=!1,this.observer=null,this.minWidth="0",this.hasMoreElements=!1,this.updateIsScollable=()=>{this.scrollable&&(this.initScrollable(),this.setScrollShadow(this,this.direction))}}checkIfMore(){var e;this.hasMoreElements=!!(!((e=this.moreElements)===null||e===void 0)&&e.length)}updated(e){const t=this.querySelector(".more-btn");this.size&&t&&t.setAttribute("size",this.size),this.querySelectorAll("sonic-divider").forEach(s=>{s.hasAttribute("size")||s.setAttribute("size","xs")}),super.updated(e)}mainSlotChange(){this.setChildrenSize(this.menuChildren),this.updateIsScollable()}connectedCallback(){this.observer=new ResizeObserver(this.updateIsScollable),this.observer.observe(this),super.connectedCallback()}disconnectedCallback(){var e;(e=this.observer)===null||e===void 0||e.disconnect(),super.disconnectedCallback()}initScrollable(){let e=!1,t,i;this.scrollable&&(this.addEventListener("mousedown",s=>{e=!0,this.classList.add("active"),t=s.pageX-this.offsetLeft,i=this.scrollLeft}),this.addEventListener("mouseleave",()=>{e=!1,this.classList.remove("active")}),this.addEventListener("mouseup",()=>{e=!1,this.classList.remove("active")}),this.addEventListener("mousemove",s=>{if(!e)return;s.preventDefault();const o=(s.pageX-this.offsetLeft-t)*1.5;this.scrollLeft=i-o,this.setScrollShadow(this,this.direction)}),this.addEventListener("scroll",s=>{s.preventDefault(),this.setScrollShadow(this,this.direction)}))}setScrollShadow(e,t){t=="row"?(e.scrollLeft>0?this.classList.add("shadow-left"):this.classList.remove("shadow-left"),e.scrollLeft<e.scrollWidth-e.offsetWidth?this.classList.add("shadow-right"):this.classList.remove("shadow-right")):t=="column"&&(e.scrollTop>0?this.classList.add("shadow-top"):this.classList.remove("shadow-top"),e.scrollTop<e.scrollHeight-(e.offsetHeight+1)?this.classList.add("shadow-bottom"):this.classList.remove("shadow-bottom"))}setChildrenSize(e){e.forEach(t=>{this.size&&t.setAttribute("size",this.size),this.align&&t.setAttribute("align",this.align),this.direction=="row"&&t.getAttribute("shape")=="block"&&t.setAttribute("shape","default")})}render(){const e={minWidth:this.minWidth,flexDirection:this.direction,gap:this.gap},t=this.direction=="row",i={display:"block",alignSelf:t?"center":"flex-start",justifySelf:"center",flexDirection:this.direction},s={marginLeft:t?"":".55em"};return S`<menu part="menu" class="shadowable" style=${qe(e)}>
      <slot @slotchange=${this.mainSlotChange}></slot>
      <sonic-pop style=${qe(i)} class=${this.hasMoreElements?"":"hidden"}>
        <sonic-menu-item style=${qe(s)} class="more-btn" shape=${this.moreShape} align="center">
          <sonic-icon size="xl" name=${t?"more-vert":"more-horiz"}></sonic-icon>
        </sonic-menu-item>
        <slot name="more" @slotchange=${this.checkIfMore} slot="content"></slot>
      </sonic-pop>
    </menu>`}};Me.styles=[F`
      :host {
        display: block;
        --sc-menu-gap: 0.15rem;
      }

      :host > menu {
        display: flex;
        border-radius: min(calc(var(--sc-btn-rounded) * 2), 0.4em);
        margin: 0;
        padding: 0.35em;
      }

      .hidden {
        display: none !important;
      }

      /*OMBRE*/
      :host([shadow]) .shadowable,
      :host([shadow="md"]) .shadowable,
      :host([shadow="true"]) .shadowable {
        box-shadow: var(--sc-shadow);
      }

      :host([shadow="sm"]) .shadowable {
        box-shadow: var(--sc-shadow-sm);
      }

      :host([shadow="lg"]) .shadowable {
        box-shadow: var(--sc-shadow-lg);
      }

      :host([shadow="none"]) .shadowable {
        box-shadow: none;
      }

      /* SCROLLABLE*/
      :host([scrollable]) {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      :host([scrollable]) menu > * {
        scroll-snap-align: start;
        white-space: nowrap;
      }
      :host([scrollable][direction="row"]) {
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
      }
      :host([scrollable][direction="column"]) {
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
      }
      :host([scrollable])::-webkit-scrollbar {
        display: none !important;
      }
      :host([scrollable][direction="row"].shadow-right) {
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
      }
      :host([scrollable][direction="row"].shadow-left) {
        -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
        mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
      }
      :host([scrollable][direction="row"].shadow-left.shadow-right) {
        -webkit-mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 10%,
          rgba(0, 0, 0, 1) 90%,
          rgba(0, 0, 0, 0) 100%
        );
        mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 10%,
          rgba(0, 0, 0, 1) 90%,
          rgba(0, 0, 0, 0) 100%
        );
      }
      :host([scrollable][direction="column"].shadow-top) {
        -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
      }
      :host([scrollable][direction="column"].shadow-bottom) {
        -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
        mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
      }
      :host([scrollable][direction="column"].shadow-top.shadow-bottom) {
        -webkit-mask-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 10%,
          rgba(0, 0, 0, 1) 90%,
          rgba(0, 0, 0, 0) 100%
        );
        mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 10%,
          rgba(0, 0, 0, 1) 90%,
          rgba(0, 0, 0, 0) 100%
        );
      }
    `];Ye([h({type:String,reflect:!0})],Me.prototype,"size",void 0);Ye([h({type:String,reflect:!0})],Me.prototype,"direction",void 0);Ye([h({type:String})],Me.prototype,"gap",void 0);Ye([h({type:String,reflect:!0})],Me.prototype,"align",void 0);Ye([h({type:String,reflect:!0})],Me.prototype,"shadow",void 0);Ye([h({type:String})],Me.prototype,"moreShape",void 0);Ye([h({type:Boolean})],Me.prototype,"scrollable",void 0);Ye([h({type:String})],Me.prototype,"minWidth",void 0);Ye([nr("menu")],Me.prototype,"menu",void 0);Ye([At({selector:"sonic-menu-item"})],Me.prototype,"menuChildren",void 0);Ye([At({slot:"more",selector:"*"})],Me.prototype,"moreElements",void 0);Ye([ce()],Me.prototype,"hasMoreElements",void 0);Me=Ye([E(Xf)],Me);var al=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Qf="sonic-modal-actions";let Ri=class extends D{firstUpdated(){var e;(e=this.buttons)===null||e===void 0||e.forEach(t=>{t.addEventListener("click",()=>{if(t.getAttribute("hideModal")!="false"){const i=this.closest("sonic-modal");i==null||i.hide()}})})}render(){return S`<slot></slot>`}};Ri.styles=[F`
      :host {
        display: flex;
        gap: 0.5rem;
        margin-top: auto;
        padding-top: 1.5rem;
      }
    `];al([At({selector:"sonic-button"})],Ri.prototype,"buttons",void 0);Ri=al([E(Qf)],Ri);var ll=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Jf="sonic-modal-close";let ji=class extends D{render(){return S`<sonic-button reset=${V(this.reset)} shape="circle" @click=${this.handleClick}
      ><sonic-icon name="cancel" size="lg"></sonic-icon
    ></sonic-button>`}handleClick(){this.closest("sonic-modal").hide()}};ji.styles=[F`
      :host {
        position: sticky;
        display: block;
        align-self: flex-end;
        height: 0;
        top: 0.5rem;
        right: 0.5rem;
        transform: translate3d(calc(var(--sc-modal-px)), calc(-1 * var(--sc-modal-py)), 0);
        z-index: 20;
      }
    `];ll([h()],ji.prototype,"reset",void 0);ji=ll([E(Jf)],ji);var e0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const t0="sonic-modal-content";let Zs=class extends D{render(){return S`<slot></slot>`}};Zs.styles=[F`
      :host {
        display: block;
        width: 100%;
      }
    `];Zs=e0([E(t0)],Zs);var r0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const i0="sonic-modal-subtitle";let Gs=class extends D{render(){return S`<slot></slot>`}};Gs.styles=[F`
      :host {
        font-size: 1.1rem;
        display: block;
        line-height: 1.1rem;
        line-height: var(--sc-headings-line-height);
        font-family: var(--sc-headings-font-family);
        font-weight: var(--sc-headings-font-weight);
      }
    `];Gs=r0([E(i0)],Gs);var s0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const o0="sonic-modal-title";let Ys=class extends D{render(){return S`<slot></slot>`}};Ys.styles=[F`
      :host {
        font-weight: bold;
        font-size: 1.5rem;
        display: block;
        line-height: var(--sc-headings-line-height);
        font-family: var(--sc-headings-font-family);
      }
    `];Ys=s0([E(o0)],Ys);var Ie=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Ks="sonic-modal";let Pe=class extends ve(D){constructor(){super(...arguments),this.forceAction=!1,this.removeOnHide=!1,this.align="left",this.padding="var(--sc-modal-py) var(--sc-modal-px)",this.maxWidth="var(--sc-modal-max-w) ",this.maxHeight="var(--sc-modal-max-h) ",this.width="100%",this.height="auto",this.zIndex="var(--sc-modal-z-index)",this.fullScreen=!1,this.visible=!1}static create(e){const t=document.createElement(Ks);return e.removeOnHide===!0&&t.setAttribute("removeOnHide","true"),e.maxWidth&&(t.maxWidth=e==null?void 0:e.maxWidth),e.width&&(t.width=e==null?void 0:e.width),e.paddingX&&t.style.setProperty("--sc-modal-px",e==null?void 0:e.paddingX),e.paddingY&&t.style.setProperty("--sc-modal-py",e==null?void 0:e.paddingY),e.zIndex&&t.style.setProperty("--sc-modal-z-index",e==null?void 0:e.zIndex),t.innerHTML=`<sonic-modal-close></sonic-modal-close><sonic-modal-content>${e.content}</sonic-modal-content>`||"",(document.querySelector("sonic-theme")||document.body).appendChild(t),t.show(),t}connectedCallback(){super.connectedCallback(),this.handleFullsceen()}updated(){const e=this;document.addEventListener("keydown",this.handleEscape),e.closeBtn.forEach(t=>{t.addEventListener("click",function(){e.hide()},{once:!0})})}willUpdate(e){e.has("fullScreen")&&this.handleFullsceen(),super.willUpdate(e)}render(){if(this.visible==!1)return G;const e={padding:this.padding,maxWidth:this.maxWidth,maxHeight:this.maxHeight,width:this.width,height:this.height,zIndex:this.zIndex,borderRadius:this.fullScreen?"0":"var(--sc-modal-rounded)"},t={maxWidth:this.maxWidth,maxHeight:this.maxHeight,width:this.width,height:this.height,borderRadius:this.fullScreen?"0":"var(--sc-modal-rounded)"};return S`<div
        class="modal-wrapper"
        style=${qe(t)}
        ${wi({out:bp})}
        tabindex="0"
      >
        <div
          part="modal"
          class="modal custom-scroll"
          style=${qe(e)}
          ${wi({keyframeOptions:{duration:400,easing:"cubic-bezier(0.250, 0.250, 0.420, 1.225)"},in:[{transform:"translateY(25%) scale(1)",boxShadow:"0 0 0 rgba(0,0,0,0)",opacity:0}],out:[{transform:"translateY(20%) scale(1)",boxShadow:"0 0 0 rgba(0,0,0,0)",opacity:0}]})}
        >
          <div class="modal-content ">
            <slot></slot>
          </div>
        </div>
      </div>

      <div
        class="overlay"
        @click="${this.forceAction?null:this.hide}"
        ${wi({keyframeOptions:{duration:500},in:yp,out:[{opacity:0,pointerEvents:"none"}]})}
      ></div>`}show(){var e,t;this.visible=!0,(e=this.modalElement)===null||e===void 0||e.setAttribute("tabindex","0"),(t=this.modalElement)===null||t===void 0||t.focus(),this.dispatchEvent(new CustomEvent("show"))}hide(){var e;this.visible=!1,(e=this.modalElement)===null||e===void 0||e.setAttribute("tabindex","-1"),this.dispatchEvent(new CustomEvent("hide")),this.hasAttribute("resetDataProviderOnHide")&&Be.get(this.getAttribute("resetDataProviderOnHide")).set({}),this.removeOnHide&&this.remove()}dispose(){this.hide(),this.remove()}handleEscape(e){e.key==="Escape"&&[...document.querySelectorAll(Ks)].forEach(i=>{i.forceAction||i.hide()})}handleFullsceen(){this.fullScreen&&(this.width="100%",this.height="100%",this.maxWidth="none",this.maxHeight="none")}};Pe.styles=[zi,F`
      :host {
        --sc-modal-py: 2.5rem;
        --sc-modal-px: 1.5rem;
        --sc-modal-max-w: min(100vw, 64ch);
        --sc-modal-max-h: 80vh;
        --sc-modal-rounded: var(--sc-rounded-lg);
        --sc-modal-z-index: 990;
      }

      * {
        box-sizing: border-box;
      }

      .modal-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: calc(var(--sc-modal-z-index) + 1);
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: flex;
        pointer-events: none;
      }

      .modal-content {
        display: flex;
        flex-direction: column;
        min-height: 10rem;
        line-height: 1.25;
      }

      .modal {
        background: var(--sc-base);
        color: var(--sc-base-content);
        width: 100%;
        box-shadow: var(--sc-shadow-lg);
        border-radius: var(--sc-modal-rounded) var(--sc-modal-rounded) 0 0;
        pointer-events: auto;
        /*overflow: hidden;*/
        transform: translateZ(0);
      }

      .overlay {
        background: var(--sc-modal-overlay-bg, var(--sc-base-200));
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: var(--sc-modal-z-index);
        opacity: 0.8;
        position: fixed;
      }

      ::slotted(sonic-modal-title) {
        margin-bottom: 1.25rem;
      }

      ::slotted(sonic-modal-subtitle) {
        margin-top: -0.9rem;
        margin-bottom: 1.25rem;
      }

      @media (max-width: 767.5px) {
        .modal-wrapper,
        .modal {
          max-width: none !important;
          width: 100% !important;
          border-radius: var(--sc-modal-rounded) var(--sc-modal-rounded) 0 0 !important;
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

      :host([align="center"]) .modal-content {
        text-align: center;
        align-items: center;
      }

      :host([align="right"]) .modal-content {
        text-align: right;
        align-items: flex-end;
      }

      /* Border radius */
      :host([rounded="none"]) modal {
        --sc-img-radius: 0 !important;
      }
    `];Ie([h({type:Boolean})],Pe.prototype,"forceAction",void 0);Ie([h({type:Boolean})],Pe.prototype,"removeOnHide",void 0);Ie([h({type:String,reflect:!0})],Pe.prototype,"align",void 0);Ie([h({type:String})],Pe.prototype,"padding",void 0);Ie([h({type:String})],Pe.prototype,"maxWidth",void 0);Ie([h({type:String})],Pe.prototype,"maxHeight",void 0);Ie([h({type:String})],Pe.prototype,"width",void 0);Ie([h({type:String})],Pe.prototype,"height",void 0);Ie([h({type:String})],Pe.prototype,"zIndex",void 0);Ie([h({type:Boolean,reflect:!0})],Pe.prototype,"fullScreen",void 0);Ie([h({type:Boolean,reflect:!0})],Pe.prototype,"visible",void 0);Ie([nr(".modal-wrapper")],Pe.prototype,"modalWrapper",void 0);Ie([nr(".modal")],Pe.prototype,"modalElement",void 0);Ie([At({selector:"sonic-modal-close"})],Pe.prototype,"closeBtn",void 0);Pe=Ie([E(Ks)],Pe);typeof window!="undefined"&&(window.SonicModal=Pe);var Ut=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const n0={warning:"warning-circled-outline",success:"check-circled-outline",error:"warning-circled-outline",info:"info-empty",default:"info-empty"},a0="sonic-alert";let pt=class extends D{constructor(){super(...arguments),this.label="",this.noIcon=!1,this.text="",this.dismissible=!1,this.background=!1,this.status="default"}render(){return S`<div part="alert" class="alert">
      ${this.noIcon?G:S`<div>${this.status&&S`<sonic-icon name=${n0[this.status]}></sonic-icon>`}</div>`}
      <div>
        ${this.label?S`<span class="label">${me(this.label)}</span>`:G}
        <slot>${this.text}</slot>
      </div>
      ${this.dismissible?S`<sonic-button @click=${this.close} class="close-btn" variant="unstyled" shape="circle">
            <sonic-icon name="cancel" size="lg"></sonic-icon>
          </sonic-button>`:G}
    </div>`}close(){this.remove()}};pt.styles=[vt,F`
      :host {
        --sc-alert-color: var(--sc-base-content);
        --sc-alert-rounded: var(--sc-rounded);
        --sc-alert-fw: var(--sc-font-weight-base);
        --sc-alert-fst: var(--sc-font-style-base);
        --sc-alert-label-fw: bold;
        display: block;
        font-weight: var(--sc-alert-fw);
        font-style: var(--sc-alert-fst);
      }

      .alert {
        color: var(--sc-alert-color);
        position: relative;
        display: flex;
        gap: 0.4em;
        border-radius: var(--sc-alert-rounded);
      }

      .label {
        font-weight: var(--sc-alert-label-fw);
      }

      :host([status="warning"]) {
        --sc-alert-color: var(--sc-warning);
      }
      :host([status="error"]) {
        --sc-alert-color: var(--sc-danger);
      }
      :host([status="info"]) {
        --sc-alert-color: var(--sc-info);
      }
      :host([status="success"]) {
        --sc-alert-color: var(--sc-success);
      }

      /*background*/
      :host([dismissible]) .alert,
      :host([background]) .alert {
        background: var(--sc-base);
        padding: 0.8em 1.15em;
      }
      :host([dismissible]) .alert:before,
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
        pointer-events: none;
      }
      :host([dismissible]) > div,
      :host([background]) > div {
        z-index: 2;
        position: relative;
      }

      slot {
        display: block;
      }

      /*Rounded*/
      :host([size="xs"]) .alert {
        --sc-alert-rounded: var(--sc-rounded-sm);
      }
      :host([size="sm"]) .alert {
        --sc-alert-rounded: var(--sc-rounded-sm);
      }

      /*Dismissible*/
      :host([dismissible]) .alert {
        padding-right: 3rem;
      }
      :host([dismissible]) .close-btn {
        padding: 0.5em;
        position: absolute;
        top: 0.25rem;
        right: 0.25rem;
      }
    `];Ut([h({type:String})],pt.prototype,"label",void 0);Ut([h({type:Boolean,reflect:!0})],pt.prototype,"noIcon",void 0);Ut([h({type:String})],pt.prototype,"text",void 0);Ut([h({type:String,reflect:!0})],pt.prototype,"size",void 0);Ut([h({type:Boolean,reflect:!0})],pt.prototype,"dismissible",void 0);Ut([h({type:Boolean,reflect:!0})],pt.prototype,"background",void 0);Ut([h({type:String,reflect:!0})],pt.prototype,"status",void 0);pt=Ut([E(a0)],pt);var Mr=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const l0="sonic-toast-message-subscriber";let or=class extends ve(D){constructor(){super(...arguments),this._messages=[],this.success=null,this.status=null,this._message="",this._data=""}get messages(){return this._messages}set messages(e){this._messages=e,this.messages&&e.forEach(t=>{t.type=="public"&&rt.add({text:t.content||"",status:t.status})})}get message(){return this._message}set message(e){var t,i;this._message=e,!!this.message&&((t=this.props)===null||t===void 0?void 0:t.success)===!1&&(!((i=this.props)===null||i===void 0)&&i.public_message||rt.add({text:this.message,status:"error"}))}get data(){return this._data}set data(e){var t,i,s,r;this._data=e;const o={text:"Votre produit a bien \xE9t\xE9 ajout\xE9",status:"success"};Array.isArray(this.data)&&((t=this.props)===null||t===void 0?void 0:t.success)===!0&&rt.add(o),this.data==""&&((i=this.props)===null||i===void 0?void 0:i.status)===!0&&rt.add(o),((s=this.props)===null||s===void 0?void 0:s.success)===!1&&(!((r=this.props)===null||r===void 0)&&r.public_message||rt.add({text:this.data,status:"error"}))}render(){return G}};Mr([h({type:Boolean})],or.prototype,"success",void 0);Mr([h({type:Boolean})],or.prototype,"status",void 0);Mr([h({type:Array})],or.prototype,"messages",null);Mr([h({type:String})],or.prototype,"message",null);Mr([h()],or.prototype,"data",null);or=Mr([E(l0)],or);var qi=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const c0="sonic-tooltip";let Pr=class extends D{constructor(){super(...arguments),this.label="",this.disabled=!1}render(){const e=this.disabled||this.label==""?"disabled":"";return S`<div data-tooltip-text="${this.label.trim().replace("&nbsp;"," ")}" class="tooltip ${e}">
      <slot></slot>
    </div>`}};Pr.styles=[F`
      :host {
        position: relative;
        display: inline-flex;
        align-items: center;
        text-align: center;
        --sc-tooltip-fw: var(--sc-font-weight-base);
      }

      .tooltip:before {
        position: absolute;
        content: attr(data-tooltip-text);
        font-size: 0.85rem;
        display: block;
        opacity: 0;
        pointer-events: none;
        background: var(--sc-base-content, #111827);
        padding: 0.32rem 0.25rem;
        border-radius: var(--sc-rounded);
        color: var(--sc-base, #fff);
        z-index: 999;
        display: none;
        line-height: 1.1;
        width: max-content;
        max-width: 18rem;
        white-space: pre-line;
        font-weight: var(--sc-tooltip-fw);
      }
      .tooltip:not(.disabled):hover:before {
        opacity: 1;
        display: block;
      }

      :host(:not([placement])) .tooltip:before,
      :host([placement="top"]) .tooltip:before {
        bottom: calc(100% + 0.25rem);
        left: 50%;
        transform: translateX(-50%);
      }

      :host([placement="bottom"]) .tooltip:before {
        top: calc(100% + 0.25rem);
        left: 50%;
        transform: translateX(-50%);
      }

      :host([placement="left"]) .tooltip:before {
        top: 50%;
        right: calc(100% + 0.25rem);
        transform: translateY(-50%);
      }

      :host([placement="right"]) .tooltip:before {
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% + 0.25rem);
      }
    `];qi([h({type:String})],Pr.prototype,"label",void 0);qi([h({type:String,reflect:!0})],Pr.prototype,"placement",void 0);qi([h({type:Boolean})],Pr.prototype,"disabled",void 0);Pr=qi([E(c0)],Pr);var Vt=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const d0="sonic-divider";let ft=class extends D{constructor(){super(...arguments),this.label="",this.align="center",this.vertical=!1,this.noMargin=!1}firstUpdated(){var e,t;(this.label||((e=this.slotNodes)===null||e===void 0?void 0:e.length))&&((t=this.divider)===null||t===void 0||t.classList.add("has-text"))}render(){return S`<div part="divider">
      <span class="text">${me(this.label?this.label:"")}<slot></slot></span>
    </div>`}};ft.styles=[F`
      :host {
        --sc-divider-my: 0.5rem;
        --sc-divider-mx: 0;
        --sc-divider-border-width: max(1px, var(--sc-border-width));
        --sc-divider-border-color: var(--sc-border-color);
        --sc-divider-border-style: solid;
        --sc-divider-color: currentColor;
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
      :host([size="2xs"]) {
        --sc-divider-my: 0.35rem;
        --sc-divider-fs: 0.68rem;
      }

      :host([size="xs"]) {
        --sc-divider-my: 0.5rem;
        --sc-divider-fs: 0.75rem;
      }

      :host([size="sm"]) {
        --sc-divider-my: 0.75rem;
        --sc-divider-fs: 0.875rem;
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
        --sc-divider-my: 3.35rem;
      }

      div {
        display: flex;
        align-items: center;
        width: 100%;
      }

      div::before,
      div::after {
        content: "";
        flex-grow: 1;
        border-top: var(--sc-divider-border-width) var(--sc-divider-border-style) var(--sc-divider-border-color);
        width: 100%;
        opacity: var(--sc-divider-opacity, 1);
      }

      /*ALIGNEMENT*/
      :host([align="left"]) div:before {
        display: none;
      }

      :host([align="right"]) div:after {
        display: none;
      }

      :host([vertical]) {
        margin: var(--sc-divider-mx) var(--sc-divider-my);
      }

      :host([vertical]) div {
        flex-direction: column;
        height: 100%;
        min-height: var(--sc-form-height);
      }

      :host([vertical]) .has-text {
        gap: 0.25rem;
      }

      :host([vertical]) div::before,
      :host([vertical]) div::after {
        border-top: none;
        border-left: var(--sc-divider-border-width) var(--sc-divider-border-style) var(--sc-divider-border-color);
        width: auto;
        height: 100%;
        opacity: var(--sc-divider-opacity, 1);
      }

      :host([noMargin]) {
        margin: 0;
      }

      /*TEXT*/
      .text {
        flex-shrink: 0;
        line-height: 1.1;
        max-width: 80%;
      }

      .no-text .text {
        display: none;
      }

      .has-text {
        gap: 0.5rem;
      }
    `];Vt([ze()],ft.prototype,"slotNodes",void 0);Vt([nr("div")],ft.prototype,"divider",void 0);Vt([h({type:String})],ft.prototype,"label",void 0);Vt([h({type:String,reflect:!0})],ft.prototype,"size",void 0);Vt([h({type:String,reflect:!0})],ft.prototype,"align",void 0);Vt([h({type:Boolean,reflect:!0})],ft.prototype,"vertical",void 0);Vt([h({type:Boolean,reflect:!0})],ft.prototype,"noMargin",void 0);ft=Vt([E(d0)],ft);var h0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const u0="sonic-card-header-description";let Xs=class extends D{render(){return S`
      <div>
        <slot></slot>
      </div>
    `}};Xs.styles=[F`
      div {
        margin-top: 0.1em;
        font-family: var(--sc-font-family-base);
        font-size: 0.7em;
        font-weight: var(--sc-font-style-base);
      }
    `];Xs=h0([E(u0)],Xs);var ko=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const p0="sonic-card-header";let Qr=class extends D{render(){return S`
      <div class="header">
        <div class="header-content">
          ${me(this.label)}
          ${this.description?S`<sonic-card-header-description>${me(this.description)}</sonic-card-header-description>`:""}
          <slot></slot>
        </div>
        <slot name="suffix"></slot>
      </div>
    `}};Qr.styles=[F`
      :host {
        --sc-card-header-mb: 1.35rem;
        --sc-card-header-font-size: 1.875rem;
        --sc-card-header-font-weight: var(--sc-headings-font-weight);
        --sc-card-header-font-style: var(--sc-headings-font-style);
        --sc-card-header-family: var(--sc-headings-font-family);
        --sc-card-header-line-height: var(--sc-headings-line-height);
      }
      @media print {
        :host {
          --sc-card-header-font-size: 1.45rem;
        }
      }
      .header {
        display: flex;
        align-items: flex-start;
        gap: 0.5em 1em;
        margin-bottom: var(--sc-card-header-mb);
        line-height: var(--sc-card-header-line-height);
        font-family: var(--sc-card-header-font-family);
        font-size: var(--sc-card-header-font-size);
        font-style: var(--sc-card-header-font-style);
        font-weight: var(--sc-card-header-font-weight);
      }

      .header-content {
        flex-grow: 1;
      }

      slot[name="suffix"] {
        flex-shrink: 0;
      }
    `];ko([h()],Qr.prototype,"label",void 0);ko([h()],Qr.prototype,"description",void 0);Qr=ko([E(p0)],Qr);var f0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const m0="sonic-card-main";let Da=class extends D{render(){return S`
      <div>
        <slot></slot>
      </div>
    `}};Da=f0([E(m0)],Da);var v0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const g0="sonic-card-footer";let Ea=class extends D{render(){return S` <slot></slot> `}};Ea=v0([E(g0)],Ea);var cl=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const b0="sonic-card";let Di=class extends D{constructor(){super(...arguments),this.type="default"}render(){return S`
      <div part="card" class="card">
        <slot></slot>
      </div>
    `}};Di.styles=[F`
      * {
        box-sizing: border-box;
      }
      :host {
        --sc-card-padding: 1.5rem;
        --sc-card-color: var(--sc-base-content);
        --sc-card-bg: var(--sc-base);
        --sc-card-rounded: var(--sc-rounded-lg);
        --sc-card-shadow: var(--sc-shadow-lg);
        -webkit-print-color-adjust: exact;
      }

      @media print {
        .card {
          page-break-inside: avoid;
          break-inside: avoid;
          box-shadow: none !important;
          border: 1px solid var(--sc-base-200);
        }
      }

      .card {
        padding: var(--sc-card-padding);
        background-color: var(--sc-card-bg);
        border-radius: var(--sc-card-rounded);
        box-shadow: var(--sc-card-shadow);
        color: var(--sc-card-color);
      }

      /*TYPES*/
      :host([type="primary"]) {
        --sc-card-bg: var(--sc-primary);
        --sc-card-color: var(--sc-primary-content);
        --sc-border-color: var(--sc-primary-content);
        --sc-divider-opacity: 0.2;
      }
      :host([type="warning"]) {
        --sc-card-bg: var(--sc-warning);
        --sc-card-color: var(--sc-warning-content);
        --sc-border-color: var(--sc-primary-content);
        --sc-divider-opacity: 0.2;
      }
      :host([type="danger"]) {
        --sc-card-bg: var(--sc-danger);
        --sc-card-color: var(--sc-danger-content);
        --sc-border-color: var(--sc-primary-content);
        --sc-divider-opacity: 0.2;
      }
      :host([type="info"]) {
        --sc-card-bg: var(--sc-info);
        --sc-card-color: var(--sc-info-content);
        --sc-border-color: var(--sc-primary-content);
        --sc-divider-opacity: 0.2;
      }
      :host([type="success"]) {
        --sc-card-bg: var(--sc-success);
        --sc-card-color: var(--sc-success-content);
        --sc-border-color: var(--sc-primary-content);
        --sc-divider-opacity: 0.2;
      }

      :host([type="light"]) {
        --sc-card-bg: var(--sc-base-100);
        --sc-card-color: var(--sc-base-content);
      }

      :host([type="neutral"]) {
        --sc-card-bg: var(--sc-base-content);
        --sc-card-color: var(--sc-base);
      }

      :host([type="invert"]) {
        --sc-card-color: var(--sc-base);
        --sc-card-bg: var(--sc-base-900);
      }
    `];cl([h({type:String,reflect:!0})],Di.prototype,"type",void 0);Di=cl([E(b0)],Di);const Ao=F`
  :host {
    --sc-color: inherit;
    color: var(--sc-color);
  }

  :host([type="primary"]) {
    --sc-color: var(--sc-primary);
  }
  :host([type="warning"]) {
    --sc-color: var(--sc-warning);
  }
  :host([type="danger"]) {
    --sc-color: var(--sc-danger);
  }
  :host([type="info"]) {
    --sc-color: var(--sc-info);
  }
  :host([type="success"]) {
    --sc-color: var(--sc-success);
  }

  .inherit-color {
    color: var(--sc-color);
  }
`;F`
  :host {
    --sc-color: inherit;
    --sc-bg: inherit;
    color: var(--sc-color);
    background: var(--sc-bg);
  }

  :host([type="primary"]) {
    --sc-color: var(--sc-primary-content);
    --sc-bg: var(--sc-primary);
  }
  :host([type="warning"]) {
    --sc-color: var(--sc-warning-content);
    --sc-bg: var(--sc-warning);
  }
  :host([type="danger"]) {
    --sc-color: var(--sc-danger-content);
    --sc-bg: var(--sc-danger);
  }
  :host([type="info"]) {
    --sc-color: var(--sc-info-content);
    --sc-bg: var(--sc-info);
  }
  :host([type="success"]) {
    --sc-color: var(--sc-success-content);
    --sc-bg: var(--sc-success);
  }

  .inherit-bg {
    color: inherit;
  }
`;var y0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const w0="sonic-tr";let Qs=class extends D{render(){return S`<slot></slot>`}};Qs.styles=[Ao,F`
      :host {
        display: table-row;
      }

      :host([odd]) {
        background: var(--sc-table-accent-bg);
      }
    `];Qs=y0([E(w0)],Qs);var dr=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const x0="sonic-th";let Ct=class extends D{render(){const e={textAlign:this.align,minWidth:this.minWidth,maxWidth:this.maxWidth,width:this.width};return S`<th
      part="th"
      style=${qe(e)}
      colspan=${V(this.colSpan)}
      rowspan=${V(this.rowSpan)}
    >
      <slot></slot>
    </th> `}};Ct.styles=[Ao,F`
      :host {
        display: contents;
        background: var(--sc-table-bg);
        position: sticky;
        top: 0;
        z-index: 20;
      }

      th {
        all: inherit;
        display: table-cell;
        border-bottom: calc(var(--sc-border-width) * 1.5) solid var(--sc-table-border-color);
        text-transform: var(--sc-table-th-tt);
        font-weight: var(--sc-table-th-fw);
        font-size: var(--sc-table-th-fs);
        padding: var(--sc-table-th-py) var(--sc-table-th-px);
      }
    `];dr([h({type:Number})],Ct.prototype,"colSpan",void 0);dr([h({type:Number})],Ct.prototype,"rowSpan",void 0);dr([h({type:String})],Ct.prototype,"align",void 0);dr([h({type:String})],Ct.prototype,"minWidth",void 0);dr([h({type:String})],Ct.prototype,"maxWidth",void 0);dr([h({type:String})],Ct.prototype,"width",void 0);Ct=dr([E(x0)],Ct);var qt=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const _0="sonic-td";let mt=class extends D{render(){const e={textAlign:this.align,verticalAlign:this.vAlign,minWidth:this.minWidth,maxWidth:this.maxWidth,width:this.width};return S`<td
      part="td"
      style=${qe(e)}
      colspan=${V(this.colSpan)}
      rowspan=${V(this.rowSpan)}
    >
      <slot></slot>
    </td>`}};mt.styles=[Ao,F`
      :host {
        display: contents;
      }
      td {
        all: inherit;
        display: table-cell;
        padding: var(--sc-table-td-py) var(--sc-table-td-px);
      }
    `];qt([h({type:Number})],mt.prototype,"colSpan",void 0);qt([h({type:Number})],mt.prototype,"rowSpan",void 0);qt([h({type:String})],mt.prototype,"align",void 0);qt([h({type:String})],mt.prototype,"vAlign",void 0);qt([h({type:String})],mt.prototype,"minWidth",void 0);qt([h({type:String})],mt.prototype,"maxWidth",void 0);qt([h({type:String})],mt.prototype,"width",void 0);mt=qt([E(_0)],mt);var $0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const C0="sonic-thead";let Js=class extends D{render(){return S`<slot></slot>`}};Js.styles=[F`
      :host {
        display: table-header-group;
      }
    `];Js=$0([E(C0)],Js);var k0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const A0="sonic-tbody";let eo=class extends D{render(){return S`<tbody part="tbody">
      <slot></slot>
    </tbody>`}};eo.styles=[F`
      :host {
        display: table-row-group;
      }

      ::slotted(sonic-tr:nth-child(odd)) {
        background: var(--sc-table-accent-bg);
      }

      ::slotted(sonic-tr:hover) {
        background: var(--sc-table-hover-bg);
      }

      ::slotted(sonic-tr:not(:last-child)) {
        border-bottom: var(--sc-form-border-width) solid var(--sc-base-200) !important;
      }
    `];eo=k0([E(A0)],eo);var S0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const P0="sonic-tfoot";let to=class extends D{render(){return S`<tfoot>
      <slot></slot>
    </tfoot>`}};to.styles=[F`
      :host {
        display: contents;
      }
    `];to=S0([E(P0)],to);var O0=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const T0="sonic-caption";let ro=class extends D{render(){return S`<slot></slot>`}};ro.styles=[F`
      :host {
        display: table-caption;
        font-size: 0.75rem;
        color: var(--sc-table-caption-color);
        padding: var(--sc-table-td-py) var(--sc-table-td-px) calc(2 * var(--sc-table-td-py));
      }
    `];ro=O0([E(T0)],ro);var Bi=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const L0="sonic-table";let Or=class extends D{constructor(){super(...arguments),this.bordered=!1}render(){const e={maxHeight:this.maxHeight};return S`
      <div class="table-container custom-scroll" style=${qe(e)}>
        <div class="table">
          <slot></slot>
        </div>
      </div>
    `}};Or.styles=[zi,vt,F`
      :host {
        --sc-table-fw: var(--sc-font-weight-base);
        --sc-table-fst: var(--sc-font-style-base);
        --sc-table-fs: 1rem;
        --sc-table-border-color: var(--sc-border-color);
        --sc-table-caption-color: var(--sc-base-500);
        --sc-table-bg: var(--sc-base);
        --sc-table-accent-bg: var(--sc-base-50);
        --sc-table-hover-bg: var(--sc-base-100);
        --sc-table-th-fs: 0.85em;
        --sc-table-th-fw: bold;
        --sc-table-th-tt: uppercase;
        --sc-table-th-px: var(--sc-table-td-px);
        --sc-table-th-py: calc(1.8 * var(--sc-table-td-py));
        --sc-table-td-px: 0.5em;
        --sc-table-td-py: 0.5em;
        display: block;
      }

      :host([maxHeight]) .table-container {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }

      .table {
        width: 100%;
        display: table;
        box-sizing: border-box;
      }

      :host([bordered]) .table-container {
        border: var(--sc-border-width) solid var(--sc-table-border-color) !important;
      }
    `];Bi([h({type:String,reflect:!0})],Or.prototype,"size",void 0);Bi([h({type:Boolean,reflect:!0})],Or.prototype,"bordered",void 0);Bi([h({type:String})],Or.prototype,"maxHeight",void 0);Or=Bi([E(L0)],Or);var So=globalThis&&globalThis.__decorate||function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const R0="sonic-captcha";let Ei=class extends zt(D){constructor(){super(...arguments),this.key="",this.action=null}connectedCallback(){var e;const t=document.createElement("script");t.src="https://www.google.com/recaptcha/api.js?render="+this.key,document.head.appendChild(t),super.connectedCallback(),this.formPublisher=Be.get((e=this.getAncestorAttributeValue("headersDataProvider"))!==null&&e!==void 0?e:this.getAncestorAttributeValue("formDataProvider")),this.formPublisher&&(this.formPublisher.needsCaptchaValidation=!0,this.formPublisher.captchaToken.onAssign(i=>{i=="request_token"&&this.requestToken()}))}requestToken(){var e,t,i,s,r;if(!this.formPublisher)return;const o=((i=(e=this.action)!==null&&e!==void 0?e:(t=this.formPublisher.captchaAction)===null||t===void 0?void 0:t.get())!==null&&i!==void 0?i:"submit").replace(/[^\w_/]/g,"_"),l=((r=(s=this.formPublisher.captchaMethod)===null||s===void 0?void 0:s.get())!==null&&r!==void 0?r:"POST").toUpperCase();delete this.formPublisher.captchaAction,delete this.formPublisher.captchaMethod,window.grecaptcha.ready(()=>{window.grecaptcha.execute(this.key,{action:l+"//"+o}).then(p=>{this.formPublisher&&(this.formPublisher.captchaToken=p)})})}render(){return S` <slot></slot> `}};So([h()],Ei.prototype,"key",void 0);So([h()],Ei.prototype,"action",void 0);Ei=So([E(R0)],Ei);window.SonicPublisherManager||(window.SonicPublisherManager=Z);window.SonicDataBindObserver||(window.SonicDataBindObserver=ie);var j0=F`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0px;right:0px;bottom:0px;left:0px}.right-2{right:.5rem}.left-0{left:0px}.-top-1{top:-.25rem}.top-0{top:0px}.top-\\[100\\%\\]{top:100%}.bottom-0{bottom:0px}.top-4{top:1rem}.left-4{left:1rem}.top-\\[-\\.3em\\]{top:-.3em}.left-\\[\\.3em\\]{left:.3em}.top-\\[\\.10em\\]{top:.1em}.right-\\[\\.10em\\]{right:.1em}.top-\\[60px\\]{top:60px}.bottom-4{bottom:1rem}.right-4{right:1rem}.-left-2{left:-.5rem}.z-10{z-index:10}.z-\\[1000\\]{z-index:1000}.z-20{z-index:20}.z-0{z-index:0}.col-\\[1\\/-1\\]{grid-column:1/-1}.col-span-full{grid-column:1 / -1}.row-span-2{grid-row:span 2 / span 2}.my-1{margin-top:.25rem;margin-bottom:.25rem}.-mx-2{margin-left:-.5rem;margin-right:-.5rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-12{margin-top:3rem;margin-bottom:3rem}.my-\\[1\\.5rem\\]{margin-top:1.5rem;margin-bottom:1.5rem}.my-auto{margin-top:auto;margin-bottom:auto}.mx-auto{margin-left:auto;margin-right:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.-my-1{margin-top:-.25rem;margin-bottom:-.25rem}.my-20{margin-top:5rem;margin-bottom:5rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.my-\\[max\\(2\\%\\,\\.7rem\\)\\]{margin-top:max(2%,.7rem);margin-bottom:max(2%,.7rem)}.-mx-3{margin-left:-.75rem;margin-right:-.75rem}.-mx-6{margin-left:-1.5rem;margin-right:-1.5rem}.mt-2{margin-top:.5rem}.ml-auto{margin-left:auto}.ml-3{margin-left:.75rem}.mr-3{margin-right:.75rem}.mb-1{margin-bottom:.25rem}.mt-1{margin-top:.25rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.mt-3{margin-top:.75rem}.mb-\\[2rem\\]{margin-bottom:2rem}.mb-10{margin-bottom:2.5rem}.mr-6{margin-right:1.5rem}.mt-\\[\\.35rem\\]{margin-top:.35rem}.mt-4{margin-top:1rem}.mb-6{margin-bottom:1.5rem}.ml-\\[\\.3em\\]{margin-left:.3em}.mr-4{margin-right:1rem}.mt-\\[\\.15em\\]{margin-top:.15em}.mb-\\[1\\.5rem\\]{margin-bottom:1.5rem}.mt-\\[2rem\\]{margin-top:2rem}.mb-\\[1rem\\]{margin-bottom:1rem}.mb-7{margin-bottom:1.75rem}.mt-6{margin-top:1.5rem}.mb-3{margin-bottom:.75rem}.mb-8{margin-bottom:2rem}.mr-2{margin-right:.5rem}.mt-10{margin-top:2.5rem}.mb-\\[4px\\]{margin-bottom:4px}.mb-0\\.5{margin-bottom:.125rem}.mb-0{margin-bottom:0}.mb-auto{margin-bottom:auto}.mb-2{margin-bottom:.5rem}.-mt-2{margin-top:-.5rem}.mt-12{margin-top:3rem}.mb-5{margin-bottom:1.25rem}.ml-2{margin-left:.5rem}.-mr-2{margin-right:-.5rem}.mb-\\[\\.5em\\]{margin-bottom:.5em}.mr-\\[\\.25em\\]{margin-right:.25em}.mr-1{margin-right:.25rem}.-ml-2{margin-left:-.5rem}.-mt-4{margin-top:-1rem}.mb-\\[\\.3em\\]{margin-bottom:.3em}.-mr-\\[\\.5em\\]{margin-right:-.5em}.-mb-\\[\\.5em\\]{margin-bottom:-.5em}.-mb-1{margin-bottom:-.25rem}.mt-5{margin-top:1.25rem}.ml-4{margin-left:1rem}.mt-8{margin-top:2rem}.mt-7{margin-top:1.75rem}.ml-\\[\\.25em\\]{margin-left:.25em}.mt-\\[max\\(1\\.5\\%\\,\\.8rem\\)\\]{margin-top:max(1.5%,.8rem)}.mt-\\[\\.2em\\]{margin-top:.2em}.mb-\\[\\.6em\\]{margin-bottom:.6em}.mb-\\[\\.25em\\]{margin-bottom:.25em}.mt-24{margin-top:6rem}.-mt-6{margin-top:-1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-\\[3\\/2\\]{aspect-ratio:3/2}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.aspect-square{aspect-ratio:1 / 1}.h-3{height:.75rem}.h-\\[var\\(--sc-border-width\\)\\]{height:var(--sc-border-width)}.h-full{height:100%}.h-\\[--sc-header-height\\]{height:--sc-header-height}.h-4{height:1rem}.h-7{height:1.75rem}.h-2{height:.5rem}.h-\\[calc\\(100vh-4rem\\)\\]{height:calc(100vh - 4rem)}.h-5{height:1.25rem}.h-28{height:7rem}.h-10{height:2.5rem}.h-\\[\\.80em\\]{height:.8em}.h-\\[1em\\]{height:1em}.max-h-\\[50vh\\]{max-height:50vh}.max-h-\\[10rem\\]{max-height:10rem}.max-h-\\[30vh\\]{max-height:30vh}.max-h-\\[calc\\(80vh-100px\\)\\]{max-height:calc(80vh - 100px)}.min-h-\\[130px\\]{min-height:130px}.min-h-\\[3rem\\]{min-height:3rem}.min-h-\\[1\\.8rem\\]{min-height:1.8rem}.w-16{width:4rem}.w-full{width:100%}.w-\\[19rem\\]{width:19rem}.w-3{width:.75rem}.w-\\[11em\\]{width:11em}.w-10\\/12{width:83.333333%}.w-\\[max\\(60\\%\\,25rem\\)\\]{width:max(60%,25rem)}.w-1\\/3{width:33.333333%}.w-1\\/2{width:50%}.w-2\\/3{width:66.666667%}.w-\\[5rem\\]{width:5rem}.w-\\[14rem\\]{width:14rem}.w-\\[3rem\\]{width:3rem}.w-1{width:.25rem}.w-\\[1\\.2em\\]{width:1.2em}.w-\\[2\\.5rem\\]{width:2.5rem}.w-5{width:1.25rem}.min-w-\\[15rem\\]{min-width:15rem}.min-w-0{min-width:0px}.min-w-\\[3\\.6ch\\]{min-width:3.6ch}.min-w-\\[5em\\]{min-width:5em}.min-w-\\[60\\%\\]{min-width:60%}.min-w-\\[min\\(7\\.8ch\\,_4\\.5em\\)\\]{min-width:min(7.8ch,4.5em)}.min-w-\\[9ch\\]{min-width:9ch}.min-w-\\[8\\.5ch\\]{min-width:8.5ch}.min-w-\\[4rem\\]{min-width:4rem}.max-w-\\[40rem\\]{max-width:40rem}.max-w-\\[70\\%\\]{max-width:70%}.max-w-full{max-width:100%}.max-w-\\[22ch\\]{max-width:22ch}.max-w-\\[12rem\\]{max-width:12rem}.max-w-\\[80ch\\]{max-width:80ch}.max-w-\\[17rem\\]{max-width:17rem}.max-w-\\[16rem\\]{max-width:16rem}.max-w-\\[90\\%\\]{max-width:90%}.max-w-\\[20ch\\]{max-width:20ch}.max-w-\\[34ch\\]{max-width:34ch}.max-w-\\[15ch\\]{max-width:15ch}.max-w-\\[10ch\\]{max-width:10ch}.max-w-\\[23ch\\]{max-width:23ch}.max-w-\\[12ch\\]{max-width:12ch}.max-w-\\[18ch\\]{max-width:18ch}.max-w-\\[32rem\\]{max-width:32rem}.max-w-\\[13rem\\]{max-width:13rem}.max-w-\\[28ch\\]{max-width:28ch}.max-w-\\[8rem\\]{max-width:8rem}.max-w-\\[50rem\\]{max-width:50rem}.max-w-\\[calc\\(12rem\\+65ch\\)\\]{max-width:calc(12rem + 65ch)}.max-w-none{max-width:none}.max-w-\\[20rem\\]{max-width:20rem}.max-w-\\[18rem\\]{max-width:18rem}.max-w-\\[6ch\\]{max-width:6ch}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.flex-grow-0{flex-grow:0}.grow{flex-grow:1}.grow-0{flex-grow:0}.translate-y-\\[-10\\%\\]{--tw-translate-y: -10%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-\\[auto\\,1fr\\]{grid-template-columns:auto 1fr}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(min\\(100\\%\\,15rem\\)\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr))}.grid-cols-\\[6rem_minmax\\(0\\,1fr\\)\\]{grid-template-columns:6rem minmax(0,1fr)}.grid-cols-\\[minmax\\(0\\,_3fr\\)_1fr\\]{grid-template-columns:minmax(0,3fr) 1fr}.grid-cols-\\[6rem_minmax\\(0\\,2fr\\)\\]{grid-template-columns:6rem minmax(0,2fr)}.grid-cols-\\[6rem\\,1fr\\]{grid-template-columns:6rem 1fr}.grid-cols-\\[2\\.5rem_minmax\\(0\\,1fr\\)\\]{grid-template-columns:2.5rem minmax(0,1fr)}.grid-cols-\\[minmax\\(0\\,3fr\\)_minmax\\(0\\,1\\.5fr\\)_6rem\\]{grid-template-columns:minmax(0,3fr) minmax(0,1.5fr) 6rem}.grid-cols-\\[repeat\\(auto-fit\\,_minMax\\(11rem\\,_1fr\\)\\)\\]{grid-template-columns:repeat(auto-fit,minMax(11rem,1fr))}.grid-cols-\\[5rem_auto\\]{grid-template-columns:5rem auto}.grid-cols-\\[5rem_minmax\\(0\\,1fr\\)\\]{grid-template-columns:5rem minmax(0,1fr)}.grid-cols-\\[minmax\\(35\\%\\,1fr\\)_auto_minmax\\(0\\,max-content\\)\\]{grid-template-columns:minmax(35%,1fr) auto minmax(0,max-content)}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[18rem\\,_auto\\]{grid-template-columns:18rem auto}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-3{gap:.75rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-\\[3px\\]{gap:3px}.gap-8{gap:2rem}.gap-\\[\\.15em\\]{gap:.15em}.gap-\\[1\\.5em\\]{gap:1.5em}.gap-\\[\\.25em\\]{gap:.25em}.gap-5{gap:1.25rem}.gap-\\[\\.5em\\]{gap:.5em}.gap-6{gap:1.5rem}.gap-\\[2rem\\]{gap:2rem}.gap-\\[\\.35em\\]{gap:.35em}.gap-\\[\\.75em\\]{gap:.75em}.gap-12{gap:3rem}.gap-10{gap:2.5rem}.gap-y-4{row-gap:1rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-y-3{row-gap:.75rem}.gap-y-8{row-gap:2rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-x-2{-moz-column-gap:.5rem;column-gap:.5rem}.gap-y-1{row-gap:.25rem}.gap-x-3{-moz-column-gap:.75rem;column-gap:.75rem}.gap-y-2{row-gap:.5rem}.gap-y-\\[0\\.125em\\]{row-gap:.125em}.gap-x-10{-moz-column-gap:2.5rem;column-gap:2.5rem}.gap-x-\\[\\.75em\\]{-moz-column-gap:.75em;column-gap:.75em}.gap-x-8{-moz-column-gap:2rem;column-gap:2rem}.gap-x-5{-moz-column-gap:1.25rem;column-gap:1.25rem}.gap-x-\\[2\\.5rem\\]{-moz-column-gap:2.5rem;column-gap:2.5rem}.gap-y-5{row-gap:1.25rem}.divide-x>:not([hidden])~:not([hidden]){--tw-divide-x-reverse: 0;border-right-width:calc(var(--sc-border-width) * var(--tw-divide-x-reverse));border-left-width:calc(var(--sc-border-width) * calc(1 - var(--tw-divide-x-reverse)))}.divide-neutral-200>:not([hidden])~:not([hidden]){border-color:var(--sc-base-200)}.divide-neutral-100>:not([hidden])~:not([hidden]){border-color:var(--sc-base-100)}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.break-words{overflow-wrap:break-word}.rounded-md{border-radius:var(--sc-rounded-md)}.rounded{border-radius:var(--sc-rounded)}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--sc-rounded-lg)}.rounded-sm{border-radius:var(--sc-rounded-sm)}.rounded-tl-lg{border-top-left-radius:var(--sc-rounded-lg)}.rounded-tr-lg{border-top-right-radius:var(--sc-rounded-lg)}.border{border-width:var(--sc-border-width)}.border-t{border-top-width:var(--sc-border-width)}.border-l{border-left-width:var(--sc-border-width)}.border-r{border-right-width:var(--sc-border-width)}.border-b{border-bottom-width:var(--sc-border-width)}.border-solid{border-style:solid}.border-neutral-100{border-color:var(--sc-base-100)}.border-neutral-200{border-color:var(--sc-base-200)}.border-current{border-color:currentColor}.border-neutral-0{border-color:var(--sc-base)}.bg-current{background-color:currentColor}.bg-neutral-100{background-color:var(--sc-base-100)}.bg-neutral-0{background-color:var(--sc-base)}.bg-neutral-300{background-color:var(--sc-base-300)}.bg-neutral-200{background-color:var(--sc-base-200)}.bg-neutral-50{background-color:var(--sc-base-50)}.bg-neutral-400{background-color:var(--sc-base-400)}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.bg-gradient-to-t{background-image:linear-gradient(to top,var(--tw-gradient-stops))}.from-\\[rgba\\(0\\,0\\,0\\,\\.25\\)\\]{--tw-gradient-from: rgba(0,0,0,.25);--tw-gradient-to: rgb(0 0 0 / 0);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-\\[rgba\\(0\\,0\\,0\\,0\\)\\]{--tw-gradient-to: rgba(0,0,0,0)}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-4{padding:1rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-0{padding:0}.p-8{padding:2rem}.p-5{padding:1.25rem}.p-1{padding:.25rem}.p-10{padding:2.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-\\[--sc-header-gy\\]{padding-top:--sc-header-gy;padding-bottom:--sc-header-gy}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-16{padding-top:4rem;padding-bottom:4rem}.px-\\[\\.35em\\]{padding-left:.35em;padding-right:.35em}.px-1{padding-left:.25rem;padding-right:.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.pl-\\[\\.75rem\\],.pl-3{padding-left:.75rem}.pl-2{padding-left:.5rem}.pr-2{padding-right:.5rem}.pt-5{padding-top:1.25rem}.pb-6{padding-bottom:1.5rem}.pr-4{padding-right:1rem}.pl-4{padding-left:1rem}.pb-3{padding-bottom:.75rem}.pt-\\[\\.06em\\]{padding-top:.06em}.pt-3{padding-top:.75rem}.pb-4{padding-bottom:1rem}.pt-2{padding-top:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-middle{vertical-align:middle}.font-headings{font-family:var(--sc-font-family-headings)}.font-monospace{font-family:var(--sc-font-family-monospace, consolas, monospace)}.text-sm{font-size:.875rem;line-height:1.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-\\[\\.8rem\\]{font-size:.8rem}.text-\\[\\.9rem\\]{font-size:.9rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-\\[2rem\\]{font-size:2rem}.text-\\[1\\.5rem\\]{font-size:1.5rem}.text-xs{font-size:.75rem;line-height:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[\\.8em\\]{font-size:.8em}.text-\\[1\\.15em\\]{font-size:1.15em}.text-\\[1\\.6em\\]{font-size:1.6em}.text-\\[max\\(12px\\,\\.8em\\)\\]{font-size:max(12px,.8em)}.text-\\[2\\.25em\\]{font-size:2.25em}.text-\\[1\\.8em\\]{font-size:1.8em}.text-base{font-size:1rem;line-height:1.5rem}.text-\\[11px\\]{font-size:11px}.text-\\[\\.82em\\]{font-size:.82em}.text-\\[1\\.1em\\]{font-size:1.1em}.text-\\[2\\.2em\\]{font-size:2.2em}.text-\\[\\.9em\\]{font-size:.9em}.text-\\[\\.85em\\]{font-size:.85em}.text-\\[length\\:12px\\]{font-size:12px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.font-extrabold{font-weight:800}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.leading-none{line-height:1}.leading-tight{line-height:1.25}.leading-\\[1\\.05\\]{line-height:1.05}.tracking-tight{letter-spacing:-.025em}.text-neutral-400{color:var(--sc-base-400)}.text-neutral-300{color:var(--sc-base-300)}.text-warning{color:var(--sc-warning)}.text-contrast-content{color:var(--sc-contrast-content)}.text-neutral-200{color:var(--sc-base-200)}.text-info{color:var(--sc-info)}.text-success{color:var(--sc-success)}.text-danger{color:var(--sc-danger)}.text-neutral-0{color:var(--sc-base)}.text-neutral-500{color:var(--sc-base-500)}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.underline-offset-2{text-underline-offset:2px}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.opacity-30{opacity:.3}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_0_0_1px_rgba\\(0\\,0\\,0\\,\\.1\\)\\]{--tw-shadow: 0 0 0 1px rgba(0,0,0,.1);--tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.invert{--tw-invert: invert(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[boxShadow_\\.2s\\]{transition-property:boxShadow .2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-75{transition-duration:75ms}.duration-100{transition-duration:.1s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.\\[display\\:none\\]{display:none}.hover\\:z-\\[2\\]:hover{z-index:2}.hover\\:scale-\\[103\\%\\]:hover{--tw-scale-x: 103%;--tw-scale-y: 103%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:border-neutral-200:hover{border-color:var(--sc-base-200)}.hover\\:border-neutral-300:hover{border-color:var(--sc-base-300)}.hover\\:bg-neutral-100:hover{background-color:var(--sc-base-100)}.hover\\:text-primary:hover{color:var(--sc-primary)}.hover\\:text-neutral-400:hover{color:var(--sc-base-400)}.hover\\:text-neutral-600:hover{color:var(--sc-base-600)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-xl:hover{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:shadow:hover{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:border-neutral-300:focus{border-color:var(--sc-base-300)}.focus\\:opacity-100:focus{opacity:1}.group:hover .group-hover\\:border-neutral-300{border-color:var(--sc-base-300)}.group:hover .group-hover\\:underline{text-decoration-line:underline}.group:focus .group-focus\\:border-neutral-300{border-color:var(--sc-base-300)}@media print{.print\\:block{display:block}.print\\:inline-block{display:inline-block}.print\\:flex{display:flex}.print\\:grid{display:grid}.print\\:hidden{display:none}.print\\:w-full{width:100%}.print\\:max-w-\\[25\\%\\]{max-width:25%}.print\\:shrink-0{flex-shrink:0}.print\\:flex-grow,.print\\:grow{flex-grow:1}.print\\:basis-3\\/12{flex-basis:25%}.print\\:basis-5\\/12{flex-basis:41.666667%}.print\\:grid-cols-\\[minmax\\(0\\,_3fr\\)_minmax\\(0\\,_2fr\\)\\]{grid-template-columns:minmax(0,3fr) minmax(0,2fr)}.print\\:gap-\\[1rem\\]{gap:1rem}.print\\:gap-x-\\[2rem\\]{-moz-column-gap:2rem;column-gap:2rem}.print\\:self-start{align-self:flex-start}.print\\:opacity-100{opacity:1}}@media (min-width: 640px){.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width: 768px){.md\\:block{display:block}.md\\:inline-block{display:inline-block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-\\[3\\.5rem\\]{width:3.5rem}.md\\:grid-cols-\\[6rem_minmax\\(0\\,4fr\\)\\]{grid-template-columns:6rem minmax(0,4fr)}.md\\:grid-cols-\\[minmax\\(0\\,3fr\\)_minmax\\(0\\,2fr\\)\\]{grid-template-columns:minmax(0,3fr) minmax(0,2fr)}.md\\:grid-cols-\\[minmax\\(0\\,2fr\\)\\,minmax\\(0\\,5fr\\)\\]{grid-template-columns:minmax(0,2fr) minmax(0,5fr)}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:text-sm{font-size:.875rem;line-height:1.25rem}.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:leading-\\[1\\.1\\]{line-height:1.1}.md\\:leading-tight{line-height:1.25}}@media (min-width: 1024px){.lg\\:my-10{margin-top:2.5rem;margin-bottom:2.5rem}.lg\\:mb-\\[2\\.5rem\\]{margin-bottom:2.5rem}.lg\\:mb-12{margin-bottom:3rem}.lg\\:-mr-\\[calc\\(var\\(--sc-container-gutter-x\\)_-_var\\(--sc-container-gutter-y\\)\\)\\]{margin-right:calc(calc(var(--sc-container-gutter-x) - var(--sc-container-gutter-y)) * -1)}.lg\\:mt-8{margin-top:2rem}.lg\\:mb-8{margin-bottom:2rem}.lg\\:mb-4{margin-bottom:1rem}.lg\\:mt-14{margin-top:3.5rem}.lg\\:mt-16{margin-top:4rem}.lg\\:ml-auto{margin-left:auto}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:h-\\[calc\\(100vh-4rem\\)\\]{height:calc(100vh - 4rem)}.lg\\:h-full{height:100%}.lg\\:min-w-\\[30rem\\]{min-width:30rem}.lg\\:min-w-\\[10rem\\]{min-width:10rem}.lg\\:max-w-\\[32rem\\]{max-width:32rem}.lg\\:grid-cols-\\[minmax\\(0\\,1\\.2fr\\)_minmax\\(0\\,1fr\\)\\]{grid-template-columns:minmax(0,1.2fr) minmax(0,1fr)}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-\\[minmax\\(0\\,_5fr\\)_minmax\\(0\\,_3\\.5fr\\)_minmax\\(0\\,_3fr\\)_minmax\\(0\\,_1\\.8fr\\)_minmax\\(0\\,_1\\.8fr\\)\\]{grid-template-columns:minmax(0,5fr) minmax(0,3.5fr) minmax(0,3fr) minmax(0,1.8fr) minmax(0,1.8fr)}.lg\\:grid-cols-\\[8rem_minmax\\(0\\,6fr\\)\\]{grid-template-columns:8rem minmax(0,6fr)}.lg\\:grid-cols-\\[minmax\\(0\\,_3fr\\)_minmax\\(0\\,_2fr\\)\\]{grid-template-columns:minmax(0,3fr) minmax(0,2fr)}.lg\\:grid-cols-\\[minmax\\(0\\,1fr\\)_minmax\\(0\\,10fr\\)\\]{grid-template-columns:minmax(0,1fr) minmax(0,10fr)}.lg\\:grid-cols-\\[minmax\\(0\\,5fr\\)_minmax\\(0\\,_1\\.75fr\\)\\]{grid-template-columns:minmax(0,5fr) minmax(0,1.75fr)}.lg\\:grid-cols-\\[2fr_1fr\\]{grid-template-columns:2fr 1fr}.lg\\:grid-cols-\\[1fr\\,_2fr\\]{grid-template-columns:1fr 2fr}.lg\\:grid-cols-\\[repeat\\(auto-fill\\,minmax\\(25rem\\,_1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(25rem,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:justify-between{justify-content:space-between}.lg\\:gap-5{gap:1.25rem}.lg\\:divide-x>:not([hidden])~:not([hidden]){--tw-divide-x-reverse: 0;border-right-width:calc(var(--sc-border-width) * var(--tw-divide-x-reverse));border-left-width:calc(var(--sc-border-width) * calc(1 - var(--tw-divide-x-reverse)))}.lg\\:divide-neutral-200>:not([hidden])~:not([hidden]){border-color:var(--sc-base-200)}.lg\\:p-8{padding:2rem}.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.lg\\:py-2{padding-top:.5rem;padding-bottom:.5rem}.lg\\:pb-4{padding-bottom:1rem}.lg\\:pl-7{padding-left:1.75rem}.lg\\:pl-3{padding-left:.75rem}.lg\\:text-\\[1rem\\]{font-size:1rem}.lg\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.lg\\:text-sm{font-size:.875rem;line-height:1.25rem}.lg\\:leading-tight{line-height:1.25}.lg\\:leading-\\[1\\.05\\]{line-height:1.05}}@media (min-width: 1280px){.xl\\:block{display:block}.xl\\:flex{display:flex}.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.xl\\:grid-cols-\\[minmax\\(0\\,3fr\\)_minmax\\(0\\,2fr\\)_3\\.7rem\\]{grid-template-columns:minmax(0,3fr) minmax(0,2fr) 3.7rem}.xl\\:grid-cols-\\[minmax\\(0\\,3fr\\)_minmax\\(0\\,2fr\\)_3\\.6rem\\]{grid-template-columns:minmax(0,3fr) minmax(0,2fr) 3.6rem}.xl\\:grid-cols-\\[minmax\\(0\\,2fr\\)_minmax\\(0\\,1fr\\)\\]{grid-template-columns:minmax(0,2fr) minmax(0,1fr)}.xl\\:grid-cols-\\[minmax\\(0\\,_1fr\\)_minmax\\(0\\,_1\\.5fr\\)\\]{grid-template-columns:minmax(0,1fr) minmax(0,1.5fr)}.xl\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.xl\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.xl\\:text-lg{font-size:1.125rem;line-height:1.75rem}.xl\\:text-2xl{font-size:1.5rem;line-height:2rem}.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.\\[\\&\\[active\\]\\]\\:font-bold[active]{font-weight:700}.\\[\\&\\[active\\]\\]\\:text-primary[active]{color:var(--sc-primary)}.\\[\\&\\[active\\]\\]\\:underline[active]{text-decoration-line:underline}.\\[\\&\\:first-child\\]\\:hidden:first-child{display:none}.\\[\\&_\\.hour\\]\\:font-normal .hour,.\\[\\&_\\.minute\\]\\:font-normal .minute,.\\[\\&_\\.literal\\]\\:font-normal .literal{font-weight:400}
`;const Bt=F`
  ${Ma(j0)}
`,D0={black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"}};var dl={exports:{}};/**
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
 */(function(n,e){(function(t,i){n.exports=i()})(tl,function(){for(var t=function(a,c,d){return c===void 0&&(c=0),d===void 0&&(d=1),a<c?c:a>d?d:a},i=t,s=function(a){a._clipped=!1,a._unclipped=a.slice(0);for(var c=0;c<=3;c++)c<3?((a[c]<0||a[c]>255)&&(a._clipped=!0),a[c]=i(a[c],0,255)):c===3&&(a[c]=i(a[c],0,1));return a},r={},o=0,l=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];o<l.length;o+=1){var p=l[o];r["[object "+p+"]"]=p.toLowerCase()}var v=function(a){return r[Object.prototype.toString.call(a)]||"object"},m=v,x=function(a,c){return c===void 0&&(c=null),a.length>=3?Array.prototype.slice.call(a):m(a[0])=="object"&&c?c.split("").filter(function(d){return a[0][d]!==void 0}).map(function(d){return a[0][d]}):a[0]},A=v,R=function(a){if(a.length<2)return null;var c=a.length-1;return A(a[c])=="string"?a[c].toLowerCase():null},N=Math.PI,$={clip_rgb:s,limit:t,type:v,unpack:x,last:R,PI:N,TWOPI:N*2,PITHIRD:N/3,DEG2RAD:N/180,RAD2DEG:180/N},U={format:{},autodetect:[]},H=$.last,_=$.clip_rgb,k=$.type,j=U,q=function(){for(var c=[],d=arguments.length;d--;)c[d]=arguments[d];var u=this;if(k(c[0])==="object"&&c[0].constructor&&c[0].constructor===this.constructor)return c[0];var g=H(c),b=!1;if(!g){b=!0,j.sorted||(j.autodetect=j.autodetect.sort(function(P,M){return M.p-P.p}),j.sorted=!0);for(var f=0,y=j.autodetect;f<y.length;f+=1){var w=y[f];if(g=w.test.apply(w,c),g)break}}if(j.format[g]){var C=j.format[g].apply(null,b?c:c.slice(0,-1));u._rgb=_(C)}else throw new Error("unknown format: "+c);u._rgb.length===3&&u._rgb.push(1)};q.prototype.toString=function(){return k(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var L=q,J=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(J.Color,[null].concat(a)))};J.Color=L,J.version="2.4.2";var W=J,ge=$.unpack,Qe=Math.max,si=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=ge(a,"rgb"),u=d[0],g=d[1],b=d[2];u=u/255,g=g/255,b=b/255;var f=1-Qe(u,Qe(g,b)),y=f<1?1/(1-f):0,w=(1-u-f)*y,C=(1-g-f)*y,P=(1-b-f)*y;return[w,C,P,f]},Hi=si,hl=$.unpack,ul=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];a=hl(a,"cmyk");var d=a[0],u=a[1],g=a[2],b=a[3],f=a.length>4?a[4]:1;return b===1?[0,0,0,f]:[d>=1?0:255*(1-d)*(1-b),u>=1?0:255*(1-u)*(1-b),g>=1?0:255*(1-g)*(1-b),f]},pl=ul,fl=W,Po=L,Oo=U,ml=$.unpack,vl=$.type,gl=Hi;Po.prototype.cmyk=function(){return gl(this._rgb)},fl.cmyk=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(Po,[null].concat(a,["cmyk"])))},Oo.format.cmyk=pl,Oo.autodetect.push({p:2,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a=ml(a,"cmyk"),vl(a)==="array"&&a.length===4)return"cmyk"}});var bl=$.unpack,yl=$.last,Wi=function(a){return Math.round(a*100)/100},wl=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=bl(a,"hsla"),u=yl(a)||"lsa";return d[0]=Wi(d[0]||0),d[1]=Wi(d[1]*100)+"%",d[2]=Wi(d[2]*100)+"%",u==="hsla"||d.length>3&&d[3]<1?(d[3]=d.length>3?d[3]:1,u="hsla"):d.length=3,u+"("+d.join(",")+")"},xl=wl,_l=$.unpack,$l=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];a=_l(a,"rgba");var d=a[0],u=a[1],g=a[2];d/=255,u/=255,g/=255;var b=Math.min(d,u,g),f=Math.max(d,u,g),y=(f+b)/2,w,C;return f===b?(w=0,C=Number.NaN):w=y<.5?(f-b)/(f+b):(f-b)/(2-f-b),d==f?C=(u-g)/(f-b):u==f?C=2+(g-d)/(f-b):g==f&&(C=4+(d-u)/(f-b)),C*=60,C<0&&(C+=360),a.length>3&&a[3]!==void 0?[C,w,y,a[3]]:[C,w,y]},To=$l,Cl=$.unpack,kl=$.last,Al=xl,Sl=To,Zi=Math.round,Pl=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=Cl(a,"rgba"),u=kl(a)||"rgb";return u.substr(0,3)=="hsl"?Al(Sl(d),u):(d[0]=Zi(d[0]),d[1]=Zi(d[1]),d[2]=Zi(d[2]),(u==="rgba"||d.length>3&&d[3]<1)&&(d[3]=d.length>3?d[3]:1,u="rgba"),u+"("+d.slice(0,u==="rgb"?3:4).join(",")+")")},Ol=Pl,Tl=$.unpack,Gi=Math.round,Ll=function(){for(var a,c=[],d=arguments.length;d--;)c[d]=arguments[d];c=Tl(c,"hsl");var u=c[0],g=c[1],b=c[2],f,y,w;if(g===0)f=y=w=b*255;else{var C=[0,0,0],P=[0,0,0],M=b<.5?b*(1+g):b+g-b*g,O=2*b-M,I=u/360;C[0]=I+1/3,C[1]=I,C[2]=I-1/3;for(var z=0;z<3;z++)C[z]<0&&(C[z]+=1),C[z]>1&&(C[z]-=1),6*C[z]<1?P[z]=O+(M-O)*6*C[z]:2*C[z]<1?P[z]=M:3*C[z]<2?P[z]=O+(M-O)*(2/3-C[z])*6:P[z]=O;a=[Gi(P[0]*255),Gi(P[1]*255),Gi(P[2]*255)],f=a[0],y=a[1],w=a[2]}return c.length>3?[f,y,w,c[3]]:[f,y,w,1]},Lo=Ll,Ro=Lo,jo=U,Do=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Eo=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,No=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Mo=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,zo=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Fo=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Io=Math.round,Uo=function(a){a=a.toLowerCase().trim();var c;if(jo.format.named)try{return jo.format.named(a)}catch{}if(c=a.match(Do)){for(var d=c.slice(1,4),u=0;u<3;u++)d[u]=+d[u];return d[3]=1,d}if(c=a.match(Eo)){for(var g=c.slice(1,5),b=0;b<4;b++)g[b]=+g[b];return g}if(c=a.match(No)){for(var f=c.slice(1,4),y=0;y<3;y++)f[y]=Io(f[y]*2.55);return f[3]=1,f}if(c=a.match(Mo)){for(var w=c.slice(1,5),C=0;C<3;C++)w[C]=Io(w[C]*2.55);return w[3]=+w[3],w}if(c=a.match(zo)){var P=c.slice(1,4);P[1]*=.01,P[2]*=.01;var M=Ro(P);return M[3]=1,M}if(c=a.match(Fo)){var O=c.slice(1,4);O[1]*=.01,O[2]*=.01;var I=Ro(O);return I[3]=+c[4],I}};Uo.test=function(a){return Do.test(a)||Eo.test(a)||No.test(a)||Mo.test(a)||zo.test(a)||Fo.test(a)};var Rl=Uo,jl=W,Vo=L,qo=U,Dl=$.type,El=Ol,Bo=Rl;Vo.prototype.css=function(a){return El(this._rgb,a)},jl.css=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(Vo,[null].concat(a,["css"])))},qo.format.css=Bo,qo.autodetect.push({p:5,test:function(a){for(var c=[],d=arguments.length-1;d-- >0;)c[d]=arguments[d+1];if(!c.length&&Dl(a)==="string"&&Bo.test(a))return"css"}});var Ho=L,Nl=W,Ml=U,zl=$.unpack;Ml.format.gl=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=zl(a,"rgba");return d[0]*=255,d[1]*=255,d[2]*=255,d},Nl.gl=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(Ho,[null].concat(a,["gl"])))},Ho.prototype.gl=function(){var a=this._rgb;return[a[0]/255,a[1]/255,a[2]/255,a[3]]};var Fl=$.unpack,Il=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=Fl(a,"rgb"),u=d[0],g=d[1],b=d[2],f=Math.min(u,g,b),y=Math.max(u,g,b),w=y-f,C=w*100/255,P=f/(255-w)*100,M;return w===0?M=Number.NaN:(u===y&&(M=(g-b)/w),g===y&&(M=2+(b-u)/w),b===y&&(M=4+(u-g)/w),M*=60,M<0&&(M+=360)),[M,C,P]},Ul=Il,Vl=$.unpack,ql=Math.floor,Bl=function(){for(var a,c,d,u,g,b,f=[],y=arguments.length;y--;)f[y]=arguments[y];f=Vl(f,"hcg");var w=f[0],C=f[1],P=f[2],M,O,I;P=P*255;var z=C*255;if(C===0)M=O=I=P;else{w===360&&(w=0),w>360&&(w-=360),w<0&&(w+=360),w/=60;var Y=ql(w),Q=w-Y,te=P*(1-C),oe=te+z*(1-Q),Te=te+z*Q,Se=te+z;switch(Y){case 0:a=[Se,Te,te],M=a[0],O=a[1],I=a[2];break;case 1:c=[oe,Se,te],M=c[0],O=c[1],I=c[2];break;case 2:d=[te,Se,Te],M=d[0],O=d[1],I=d[2];break;case 3:u=[te,oe,Se],M=u[0],O=u[1],I=u[2];break;case 4:g=[Te,te,Se],M=g[0],O=g[1],I=g[2];break;case 5:b=[Se,te,oe],M=b[0],O=b[1],I=b[2];break}}return[M,O,I,f.length>3?f[3]:1]},Hl=Bl,Wl=$.unpack,Zl=$.type,Gl=W,Wo=L,Zo=U,Yl=Ul;Wo.prototype.hcg=function(){return Yl(this._rgb)},Gl.hcg=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(Wo,[null].concat(a,["hcg"])))},Zo.format.hcg=Hl,Zo.autodetect.push({p:1,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a=Wl(a,"hcg"),Zl(a)==="array"&&a.length===3)return"hcg"}});var Kl=$.unpack,Xl=$.last,oi=Math.round,Ql=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=Kl(a,"rgba"),u=d[0],g=d[1],b=d[2],f=d[3],y=Xl(a)||"auto";f===void 0&&(f=1),y==="auto"&&(y=f<1?"rgba":"rgb"),u=oi(u),g=oi(g),b=oi(b);var w=u<<16|g<<8|b,C="000000"+w.toString(16);C=C.substr(C.length-6);var P="0"+oi(f*255).toString(16);switch(P=P.substr(P.length-2),y.toLowerCase()){case"rgba":return"#"+C+P;case"argb":return"#"+P+C;default:return"#"+C}},Go=Ql,Jl=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,ec=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,tc=function(a){if(a.match(Jl)){(a.length===4||a.length===7)&&(a=a.substr(1)),a.length===3&&(a=a.split(""),a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]);var c=parseInt(a,16),d=c>>16,u=c>>8&255,g=c&255;return[d,u,g,1]}if(a.match(ec)){(a.length===5||a.length===9)&&(a=a.substr(1)),a.length===4&&(a=a.split(""),a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]+a[3]+a[3]);var b=parseInt(a,16),f=b>>24&255,y=b>>16&255,w=b>>8&255,C=Math.round((b&255)/255*100)/100;return[f,y,w,C]}throw new Error("unknown hex color: "+a)},Yo=tc,rc=W,Ko=L,ic=$.type,Xo=U,sc=Go;Ko.prototype.hex=function(a){return sc(this._rgb,a)},rc.hex=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(Ko,[null].concat(a,["hex"])))},Xo.format.hex=Yo,Xo.autodetect.push({p:4,test:function(a){for(var c=[],d=arguments.length-1;d-- >0;)c[d]=arguments[d+1];if(!c.length&&ic(a)==="string"&&[3,4,5,6,7,8,9].indexOf(a.length)>=0)return"hex"}});var oc=$.unpack,Qo=$.TWOPI,nc=Math.min,ac=Math.sqrt,lc=Math.acos,cc=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=oc(a,"rgb"),u=d[0],g=d[1],b=d[2];u/=255,g/=255,b/=255;var f,y=nc(u,g,b),w=(u+g+b)/3,C=w>0?1-y/w:0;return C===0?f=NaN:(f=(u-g+(u-b))/2,f/=ac((u-g)*(u-g)+(u-b)*(g-b)),f=lc(f),b>g&&(f=Qo-f),f/=Qo),[f*360,C,w]},dc=cc,hc=$.unpack,Yi=$.limit,hr=$.TWOPI,Ki=$.PITHIRD,ur=Math.cos,uc=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];a=hc(a,"hsi");var d=a[0],u=a[1],g=a[2],b,f,y;return isNaN(d)&&(d=0),isNaN(u)&&(u=0),d>360&&(d-=360),d<0&&(d+=360),d/=360,d<1/3?(y=(1-u)/3,b=(1+u*ur(hr*d)/ur(Ki-hr*d))/3,f=1-(y+b)):d<2/3?(d-=1/3,b=(1-u)/3,f=(1+u*ur(hr*d)/ur(Ki-hr*d))/3,y=1-(b+f)):(d-=2/3,f=(1-u)/3,y=(1+u*ur(hr*d)/ur(Ki-hr*d))/3,b=1-(f+y)),b=Yi(g*b*3),f=Yi(g*f*3),y=Yi(g*y*3),[b*255,f*255,y*255,a.length>3?a[3]:1]},pc=uc,fc=$.unpack,mc=$.type,vc=W,Jo=L,en=U,gc=dc;Jo.prototype.hsi=function(){return gc(this._rgb)},vc.hsi=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(Jo,[null].concat(a,["hsi"])))},en.format.hsi=pc,en.autodetect.push({p:2,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a=fc(a,"hsi"),mc(a)==="array"&&a.length===3)return"hsi"}});var bc=$.unpack,yc=$.type,wc=W,tn=L,rn=U,xc=To;tn.prototype.hsl=function(){return xc(this._rgb)},wc.hsl=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(tn,[null].concat(a,["hsl"])))},rn.format.hsl=Lo,rn.autodetect.push({p:2,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a=bc(a,"hsl"),yc(a)==="array"&&a.length===3)return"hsl"}});var _c=$.unpack,$c=Math.min,Cc=Math.max,kc=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];a=_c(a,"rgb");var d=a[0],u=a[1],g=a[2],b=$c(d,u,g),f=Cc(d,u,g),y=f-b,w,C,P;return P=f/255,f===0?(w=Number.NaN,C=0):(C=y/f,d===f&&(w=(u-g)/y),u===f&&(w=2+(g-d)/y),g===f&&(w=4+(d-u)/y),w*=60,w<0&&(w+=360)),[w,C,P]},Ac=kc,Sc=$.unpack,Pc=Math.floor,Oc=function(){for(var a,c,d,u,g,b,f=[],y=arguments.length;y--;)f[y]=arguments[y];f=Sc(f,"hsv");var w=f[0],C=f[1],P=f[2],M,O,I;if(P*=255,C===0)M=O=I=P;else{w===360&&(w=0),w>360&&(w-=360),w<0&&(w+=360),w/=60;var z=Pc(w),Y=w-z,Q=P*(1-C),te=P*(1-C*Y),oe=P*(1-C*(1-Y));switch(z){case 0:a=[P,oe,Q],M=a[0],O=a[1],I=a[2];break;case 1:c=[te,P,Q],M=c[0],O=c[1],I=c[2];break;case 2:d=[Q,P,oe],M=d[0],O=d[1],I=d[2];break;case 3:u=[Q,te,P],M=u[0],O=u[1],I=u[2];break;case 4:g=[oe,Q,P],M=g[0],O=g[1],I=g[2];break;case 5:b=[P,Q,te],M=b[0],O=b[1],I=b[2];break}}return[M,O,I,f.length>3?f[3]:1]},Tc=Oc,Lc=$.unpack,Rc=$.type,jc=W,sn=L,on=U,Dc=Ac;sn.prototype.hsv=function(){return Dc(this._rgb)},jc.hsv=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(sn,[null].concat(a,["hsv"])))},on.format.hsv=Tc,on.autodetect.push({p:2,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a=Lc(a,"hsv"),Rc(a)==="array"&&a.length===3)return"hsv"}});var ni={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},pr=ni,Ec=$.unpack,nn=Math.pow,Nc=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=Ec(a,"rgb"),u=d[0],g=d[1],b=d[2],f=Mc(u,g,b),y=f[0],w=f[1],C=f[2],P=116*w-16;return[P<0?0:P,500*(y-w),200*(w-C)]},Xi=function(a){return(a/=255)<=.04045?a/12.92:nn((a+.055)/1.055,2.4)},Qi=function(a){return a>pr.t3?nn(a,1/3):a/pr.t2+pr.t0},Mc=function(a,c,d){a=Xi(a),c=Xi(c),d=Xi(d);var u=Qi((.4124564*a+.3575761*c+.1804375*d)/pr.Xn),g=Qi((.2126729*a+.7151522*c+.072175*d)/pr.Yn),b=Qi((.0193339*a+.119192*c+.9503041*d)/pr.Zn);return[u,g,b]},an=Nc,fr=ni,zc=$.unpack,Fc=Math.pow,Ic=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];a=zc(a,"lab");var d=a[0],u=a[1],g=a[2],b,f,y,w,C,P;return f=(d+16)/116,b=isNaN(u)?f:f+u/500,y=isNaN(g)?f:f-g/200,f=fr.Yn*es(f),b=fr.Xn*es(b),y=fr.Zn*es(y),w=Ji(3.2404542*b-1.5371385*f-.4985314*y),C=Ji(-.969266*b+1.8760108*f+.041556*y),P=Ji(.0556434*b-.2040259*f+1.0572252*y),[w,C,P,a.length>3?a[3]:1]},Ji=function(a){return 255*(a<=.00304?12.92*a:1.055*Fc(a,1/2.4)-.055)},es=function(a){return a>fr.t1?a*a*a:fr.t2*(a-fr.t0)},ln=Ic,Uc=$.unpack,Vc=$.type,qc=W,cn=L,dn=U,Bc=an;cn.prototype.lab=function(){return Bc(this._rgb)},qc.lab=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(cn,[null].concat(a,["lab"])))},dn.format.lab=ln,dn.autodetect.push({p:2,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a=Uc(a,"lab"),Vc(a)==="array"&&a.length===3)return"lab"}});var Hc=$.unpack,Wc=$.RAD2DEG,Zc=Math.sqrt,Gc=Math.atan2,Yc=Math.round,Kc=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=Hc(a,"lab"),u=d[0],g=d[1],b=d[2],f=Zc(g*g+b*b),y=(Gc(b,g)*Wc+360)%360;return Yc(f*1e4)===0&&(y=Number.NaN),[u,f,y]},hn=Kc,Xc=$.unpack,Qc=an,Jc=hn,ed=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=Xc(a,"rgb"),u=d[0],g=d[1],b=d[2],f=Qc(u,g,b),y=f[0],w=f[1],C=f[2];return Jc(y,w,C)},td=ed,rd=$.unpack,id=$.DEG2RAD,sd=Math.sin,od=Math.cos,nd=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=rd(a,"lch"),u=d[0],g=d[1],b=d[2];return isNaN(b)&&(b=0),b=b*id,[u,od(b)*g,sd(b)*g]},un=nd,ad=$.unpack,ld=un,cd=ln,dd=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];a=ad(a,"lch");var d=a[0],u=a[1],g=a[2],b=ld(d,u,g),f=b[0],y=b[1],w=b[2],C=cd(f,y,w),P=C[0],M=C[1],O=C[2];return[P,M,O,a.length>3?a[3]:1]},pn=dd,hd=$.unpack,ud=pn,pd=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=hd(a,"hcl").reverse();return ud.apply(void 0,d)},fd=pd,md=$.unpack,vd=$.type,fn=W,ai=L,ts=U,mn=td;ai.prototype.lch=function(){return mn(this._rgb)},ai.prototype.hcl=function(){return mn(this._rgb).reverse()},fn.lch=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(ai,[null].concat(a,["lch"])))},fn.hcl=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(ai,[null].concat(a,["hcl"])))},ts.format.lch=pn,ts.format.hcl=fd,["lch","hcl"].forEach(function(a){return ts.autodetect.push({p:2,test:function(){for(var c=[],d=arguments.length;d--;)c[d]=arguments[d];if(c=md(c,a),vd(c)==="array"&&c.length===3)return a}})});var gd={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},vn=gd,bd=L,gn=U,yd=$.type,zr=vn,wd=Yo,xd=Go;bd.prototype.name=function(){for(var a=xd(this._rgb,"rgb"),c=0,d=Object.keys(zr);c<d.length;c+=1){var u=d[c];if(zr[u]===a)return u.toLowerCase()}return a},gn.format.named=function(a){if(a=a.toLowerCase(),zr[a])return wd(zr[a]);throw new Error("unknown color name: "+a)},gn.autodetect.push({p:5,test:function(a){for(var c=[],d=arguments.length-1;d-- >0;)c[d]=arguments[d+1];if(!c.length&&yd(a)==="string"&&zr[a.toLowerCase()])return"named"}});var _d=$.unpack,$d=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=_d(a,"rgb"),u=d[0],g=d[1],b=d[2];return(u<<16)+(g<<8)+b},Cd=$d,kd=$.type,Ad=function(a){if(kd(a)=="number"&&a>=0&&a<=16777215){var c=a>>16,d=a>>8&255,u=a&255;return[c,d,u,1]}throw new Error("unknown num color: "+a)},Sd=Ad,Pd=W,bn=L,yn=U,Od=$.type,Td=Cd;bn.prototype.num=function(){return Td(this._rgb)},Pd.num=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(bn,[null].concat(a,["num"])))},yn.format.num=Sd,yn.autodetect.push({p:5,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a.length===1&&Od(a[0])==="number"&&a[0]>=0&&a[0]<=16777215)return"num"}});var Ld=W,rs=L,wn=U,xn=$.unpack,_n=$.type,$n=Math.round;rs.prototype.rgb=function(a){return a===void 0&&(a=!0),a===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map($n)},rs.prototype.rgba=function(a){return a===void 0&&(a=!0),this._rgb.slice(0,4).map(function(c,d){return d<3?a===!1?c:$n(c):c})},Ld.rgb=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(rs,[null].concat(a,["rgb"])))},wn.format.rgb=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=xn(a,"rgba");return d[3]===void 0&&(d[3]=1),d},wn.autodetect.push({p:3,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a=xn(a,"rgba"),_n(a)==="array"&&(a.length===3||a.length===4&&_n(a[3])=="number"&&a[3]>=0&&a[3]<=1))return"rgb"}});var li=Math.log,Rd=function(a){var c=a/100,d,u,g;return c<66?(d=255,u=c<6?0:-155.25485562709179-.44596950469579133*(u=c-2)+104.49216199393888*li(u),g=c<20?0:-254.76935184120902+.8274096064007395*(g=c-10)+115.67994401066147*li(g)):(d=351.97690566805693+.114206453784165*(d=c-55)-40.25366309332127*li(d),u=325.4494125711974+.07943456536662342*(u=c-50)-28.0852963507957*li(u),g=255),[d,u,g,1]},Cn=Rd,jd=Cn,Dd=$.unpack,Ed=Math.round,Nd=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];for(var d=Dd(a,"rgb"),u=d[0],g=d[2],b=1e3,f=4e4,y=.4,w;f-b>y;){w=(f+b)*.5;var C=jd(w);C[2]/C[0]>=g/u?f=w:b=w}return Ed(w)},Md=Nd,is=W,ci=L,ss=U,zd=Md;ci.prototype.temp=ci.prototype.kelvin=ci.prototype.temperature=function(){return zd(this._rgb)},is.temp=is.kelvin=is.temperature=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(ci,[null].concat(a,["temp"])))},ss.format.temp=ss.format.kelvin=ss.format.temperature=Cn;var Fd=$.unpack,os=Math.cbrt,Id=Math.pow,Ud=Math.sign,Vd=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=Fd(a,"rgb"),u=d[0],g=d[1],b=d[2],f=[ns(u/255),ns(g/255),ns(b/255)],y=f[0],w=f[1],C=f[2],P=os(.4122214708*y+.5363325363*w+.0514459929*C),M=os(.2119034982*y+.6806995451*w+.1073969566*C),O=os(.0883024619*y+.2817188376*w+.6299787005*C);return[.2104542553*P+.793617785*M-.0040720468*O,1.9779984951*P-2.428592205*M+.4505937099*O,.0259040371*P+.7827717662*M-.808675766*O]},kn=Vd;function ns(a){var c=Math.abs(a);return c<.04045?a/12.92:(Ud(a)||1)*Id((c+.055)/1.055,2.4)}var qd=$.unpack,di=Math.pow,Bd=Math.sign,Hd=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];a=qd(a,"lab");var d=a[0],u=a[1],g=a[2],b=di(d+.3963377774*u+.2158037573*g,3),f=di(d-.1055613458*u-.0638541728*g,3),y=di(d-.0894841775*u-1.291485548*g,3);return[255*as(4.0767416621*b-3.3077115913*f+.2309699292*y),255*as(-1.2684380046*b+2.6097574011*f-.3413193965*y),255*as(-.0041960863*b-.7034186147*f+1.707614701*y),a.length>3?a[3]:1]},An=Hd;function as(a){var c=Math.abs(a);return c>.0031308?(Bd(a)||1)*(1.055*di(c,1/2.4)-.055):a*12.92}var Wd=$.unpack,Zd=$.type,Gd=W,Sn=L,Pn=U,Yd=kn;Sn.prototype.oklab=function(){return Yd(this._rgb)},Gd.oklab=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(Sn,[null].concat(a,["oklab"])))},Pn.format.oklab=An,Pn.autodetect.push({p:3,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a=Wd(a,"oklab"),Zd(a)==="array"&&a.length===3)return"oklab"}});var Kd=$.unpack,Xd=kn,Qd=hn,Jd=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var d=Kd(a,"rgb"),u=d[0],g=d[1],b=d[2],f=Xd(u,g,b),y=f[0],w=f[1],C=f[2];return Qd(y,w,C)},eh=Jd,th=$.unpack,rh=un,ih=An,sh=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];a=th(a,"lch");var d=a[0],u=a[1],g=a[2],b=rh(d,u,g),f=b[0],y=b[1],w=b[2],C=ih(f,y,w),P=C[0],M=C[1],O=C[2];return[P,M,O,a.length>3?a[3]:1]},oh=sh,nh=$.unpack,ah=$.type,lh=W,On=L,Tn=U,ch=eh;On.prototype.oklch=function(){return ch(this._rgb)},lh.oklch=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];return new(Function.prototype.bind.apply(On,[null].concat(a,["oklch"])))},Tn.format.oklch=oh,Tn.autodetect.push({p:3,test:function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];if(a=nh(a,"oklch"),ah(a)==="array"&&a.length===3)return"oklch"}});var Ln=L,dh=$.type;Ln.prototype.alpha=function(a,c){return c===void 0&&(c=!1),a!==void 0&&dh(a)==="number"?c?(this._rgb[3]=a,this):new Ln([this._rgb[0],this._rgb[1],this._rgb[2],a],"rgb"):this._rgb[3]};var hh=L;hh.prototype.clipped=function(){return this._rgb._clipped||!1};var Wt=L,uh=ni;Wt.prototype.darken=function(a){a===void 0&&(a=1);var c=this,d=c.lab();return d[0]-=uh.Kn*a,new Wt(d,"lab").alpha(c.alpha(),!0)},Wt.prototype.brighten=function(a){return a===void 0&&(a=1),this.darken(-a)},Wt.prototype.darker=Wt.prototype.darken,Wt.prototype.brighter=Wt.prototype.brighten;var ph=L;ph.prototype.get=function(a){var c=a.split("."),d=c[0],u=c[1],g=this[d]();if(u){var b=d.indexOf(u)-(d.substr(0,2)==="ok"?2:0);if(b>-1)return g[b];throw new Error("unknown channel "+u+" in mode "+d)}else return g};var mr=L,fh=$.type,mh=Math.pow,vh=1e-7,gh=20;mr.prototype.luminance=function(a){if(a!==void 0&&fh(a)==="number"){if(a===0)return new mr([0,0,0,this._rgb[3]],"rgb");if(a===1)return new mr([255,255,255,this._rgb[3]],"rgb");var c=this.luminance(),d="rgb",u=gh,g=function(f,y){var w=f.interpolate(y,.5,d),C=w.luminance();return Math.abs(a-C)<vh||!u--?w:C>a?g(f,w):g(w,y)},b=(c>a?g(new mr([0,0,0]),this):g(this,new mr([255,255,255]))).rgb();return new mr(b.concat([this._rgb[3]]))}return bh.apply(void 0,this._rgb.slice(0,3))};var bh=function(a,c,d){return a=ls(a),c=ls(c),d=ls(d),.2126*a+.7152*c+.0722*d},ls=function(a){return a/=255,a<=.03928?a/12.92:mh((a+.055)/1.055,2.4)},Ve={},Rn=L,jn=$.type,hi=Ve,Dn=function(a,c,d){d===void 0&&(d=.5);for(var u=[],g=arguments.length-3;g-- >0;)u[g]=arguments[g+3];var b=u[0]||"lrgb";if(!hi[b]&&!u.length&&(b=Object.keys(hi)[0]),!hi[b])throw new Error("interpolation mode "+b+" is not defined");return jn(a)!=="object"&&(a=new Rn(a)),jn(c)!=="object"&&(c=new Rn(c)),hi[b](a,c,d).alpha(a.alpha()+d*(c.alpha()-a.alpha()))},En=L,yh=Dn;En.prototype.mix=En.prototype.interpolate=function(a,c){c===void 0&&(c=.5);for(var d=[],u=arguments.length-2;u-- >0;)d[u]=arguments[u+2];return yh.apply(void 0,[this,a,c].concat(d))};var Nn=L;Nn.prototype.premultiply=function(a){a===void 0&&(a=!1);var c=this._rgb,d=c[3];return a?(this._rgb=[c[0]*d,c[1]*d,c[2]*d,d],this):new Nn([c[0]*d,c[1]*d,c[2]*d,d],"rgb")};var cs=L,wh=ni;cs.prototype.saturate=function(a){a===void 0&&(a=1);var c=this,d=c.lch();return d[1]+=wh.Kn*a,d[1]<0&&(d[1]=0),new cs(d,"lch").alpha(c.alpha(),!0)},cs.prototype.desaturate=function(a){return a===void 0&&(a=1),this.saturate(-a)};var Mn=L,zn=$.type;Mn.prototype.set=function(a,c,d){d===void 0&&(d=!1);var u=a.split("."),g=u[0],b=u[1],f=this[g]();if(b){var y=g.indexOf(b)-(g.substr(0,2)==="ok"?2:0);if(y>-1){if(zn(c)=="string")switch(c.charAt(0)){case"+":f[y]+=+c;break;case"-":f[y]+=+c;break;case"*":f[y]*=+c.substr(1);break;case"/":f[y]/=+c.substr(1);break;default:f[y]=+c}else if(zn(c)==="number")f[y]=c;else throw new Error("unsupported value for Color.set");var w=new Mn(f,g);return d?(this._rgb=w._rgb,this):w}throw new Error("unknown channel "+b+" in mode "+g)}else return f};var xh=L,_h=function(a,c,d){var u=a._rgb,g=c._rgb;return new xh(u[0]+d*(g[0]-u[0]),u[1]+d*(g[1]-u[1]),u[2]+d*(g[2]-u[2]),"rgb")};Ve.rgb=_h;var $h=L,ds=Math.sqrt,vr=Math.pow,Ch=function(a,c,d){var u=a._rgb,g=u[0],b=u[1],f=u[2],y=c._rgb,w=y[0],C=y[1],P=y[2];return new $h(ds(vr(g,2)*(1-d)+vr(w,2)*d),ds(vr(b,2)*(1-d)+vr(C,2)*d),ds(vr(f,2)*(1-d)+vr(P,2)*d),"rgb")};Ve.lrgb=Ch;var kh=L,Ah=function(a,c,d){var u=a.lab(),g=c.lab();return new kh(u[0]+d*(g[0]-u[0]),u[1]+d*(g[1]-u[1]),u[2]+d*(g[2]-u[2]),"lab")};Ve.lab=Ah;var Fn=L,gr=function(a,c,d,u){var g,b,f,y;u==="hsl"?(f=a.hsl(),y=c.hsl()):u==="hsv"?(f=a.hsv(),y=c.hsv()):u==="hcg"?(f=a.hcg(),y=c.hcg()):u==="hsi"?(f=a.hsi(),y=c.hsi()):u==="lch"||u==="hcl"?(u="hcl",f=a.hcl(),y=c.hcl()):u==="oklch"&&(f=a.oklch().reverse(),y=c.oklch().reverse());var w,C,P,M,O,I;(u.substr(0,1)==="h"||u==="oklch")&&(g=f,w=g[0],P=g[1],O=g[2],b=y,C=b[0],M=b[1],I=b[2]);var z,Y,Q,te;return!isNaN(w)&&!isNaN(C)?(C>w&&C-w>180?te=C-(w+360):C<w&&w-C>180?te=C+360-w:te=C-w,Y=w+d*te):isNaN(w)?isNaN(C)?Y=Number.NaN:(Y=C,(O==1||O==0)&&u!="hsv"&&(z=M)):(Y=w,(I==1||I==0)&&u!="hsv"&&(z=P)),z===void 0&&(z=P+d*(M-P)),Q=O+d*(I-O),u==="oklch"?new Fn([Q,z,Y],u):new Fn([Y,z,Q],u)},Sh=gr,In=function(a,c,d){return Sh(a,c,d,"lch")};Ve.lch=In,Ve.hcl=In;var Ph=L,Oh=function(a,c,d){var u=a.num(),g=c.num();return new Ph(u+d*(g-u),"num")};Ve.num=Oh;var Th=gr,Lh=function(a,c,d){return Th(a,c,d,"hcg")};Ve.hcg=Lh;var Rh=gr,jh=function(a,c,d){return Rh(a,c,d,"hsi")};Ve.hsi=jh;var Dh=gr,Eh=function(a,c,d){return Dh(a,c,d,"hsl")};Ve.hsl=Eh;var Nh=gr,Mh=function(a,c,d){return Nh(a,c,d,"hsv")};Ve.hsv=Mh;var zh=L,Fh=function(a,c,d){var u=a.oklab(),g=c.oklab();return new zh(u[0]+d*(g[0]-u[0]),u[1]+d*(g[1]-u[1]),u[2]+d*(g[2]-u[2]),"oklab")};Ve.oklab=Fh;var Ih=gr,Uh=function(a,c,d){return Ih(a,c,d,"oklch")};Ve.oklch=Uh;var hs=L,Vh=$.clip_rgb,us=Math.pow,ps=Math.sqrt,fs=Math.PI,Un=Math.cos,Vn=Math.sin,qh=Math.atan2,Bh=function(a,c,d){c===void 0&&(c="lrgb"),d===void 0&&(d=null);var u=a.length;d||(d=Array.from(new Array(u)).map(function(){return 1}));var g=u/d.reduce(function(Y,Q){return Y+Q});if(d.forEach(function(Y,Q){d[Q]*=g}),a=a.map(function(Y){return new hs(Y)}),c==="lrgb")return Hh(a,d);for(var b=a.shift(),f=b.get(c),y=[],w=0,C=0,P=0;P<f.length;P++)if(f[P]=(f[P]||0)*d[0],y.push(isNaN(f[P])?0:d[0]),c.charAt(P)==="h"&&!isNaN(f[P])){var M=f[P]/180*fs;w+=Un(M)*d[0],C+=Vn(M)*d[0]}var O=b.alpha()*d[0];a.forEach(function(Y,Q){var te=Y.get(c);O+=Y.alpha()*d[Q+1];for(var oe=0;oe<f.length;oe++)if(!isNaN(te[oe]))if(y[oe]+=d[Q+1],c.charAt(oe)==="h"){var Te=te[oe]/180*fs;w+=Un(Te)*d[Q+1],C+=Vn(Te)*d[Q+1]}else f[oe]+=te[oe]*d[Q+1]});for(var I=0;I<f.length;I++)if(c.charAt(I)==="h"){for(var z=qh(C/y[I],w/y[I])/fs*180;z<0;)z+=360;for(;z>=360;)z-=360;f[I]=z}else f[I]=f[I]/y[I];return O/=u,new hs(f,c).alpha(O>.99999?1:O,!0)},Hh=function(a,c){for(var d=a.length,u=[0,0,0,0],g=0;g<a.length;g++){var b=a[g],f=c[g]/d,y=b._rgb;u[0]+=us(y[0],2)*f,u[1]+=us(y[1],2)*f,u[2]+=us(y[2],2)*f,u[3]+=y[3]*f}return u[0]=ps(u[0]),u[1]=ps(u[1]),u[2]=ps(u[2]),u[3]>.9999999&&(u[3]=1),new hs(Vh(u))},Je=W,br=$.type,Wh=Math.pow,ms=function(a){var c="rgb",d=Je("#ccc"),u=0,g=[0,1],b=[],f=[0,0],y=!1,w=[],C=!1,P=0,M=1,O=!1,I={},z=!0,Y=1,Q=function(T){if(T=T||["#fff","#000"],T&&br(T)==="string"&&Je.brewer&&Je.brewer[T.toLowerCase()]&&(T=Je.brewer[T.toLowerCase()]),br(T)==="array"){T.length===1&&(T=[T[0],T[0]]),T=T.slice(0);for(var B=0;B<T.length;B++)T[B]=Je(T[B]);b.length=0;for(var X=0;X<T.length;X++)b.push(X/(T.length-1))}return Ue(),w=T},te=function(T){if(y!=null){for(var B=y.length-1,X=0;X<B&&T>=y[X];)X++;return X-1}return 0},oe=function(T){return T},Te=function(T){return T},Se=function(T,B){var X,K;if(B==null&&(B=!1),isNaN(T)||T===null)return d;if(B)K=T;else if(y&&y.length>2){var Le=te(T);K=Le/(y.length-2)}else M!==P?K=(T-P)/(M-P):K=1;K=Te(K),B||(K=oe(K)),Y!==1&&(K=Wh(K,Y)),K=f[0]+K*(1-f[0]-f[1]),K=Math.min(1,Math.max(0,K));var he=Math.floor(K*1e4);if(z&&I[he])X=I[he];else{if(br(w)==="array")for(var re=0;re<b.length;re++){var ne=b[re];if(K<=ne){X=w[re];break}if(K>=ne&&re===b.length-1){X=w[re];break}if(K>ne&&K<b[re+1]){K=(K-ne)/(b[re+1]-ne),X=Je.interpolate(w[re],w[re+1],K,c);break}}else br(w)==="function"&&(X=w(K));z&&(I[he]=X)}return X},Ue=function(){return I={}};Q(a);var ee=function(T){var B=Je(Se(T));return C&&B[C]?B[C]():B};return ee.classes=function(T){if(T!=null){if(br(T)==="array")y=T,g=[T[0],T[T.length-1]];else{var B=Je.analyze(g);T===0?y=[B.min,B.max]:y=Je.limits(B,"e",T)}return ee}return y},ee.domain=function(T){if(!arguments.length)return g;P=T[0],M=T[T.length-1],b=[];var B=w.length;if(T.length===B&&P!==M)for(var X=0,K=Array.from(T);X<K.length;X+=1){var Le=K[X];b.push((Le-P)/(M-P))}else{for(var he=0;he<B;he++)b.push(he/(B-1));if(T.length>2){var re=T.map(function(ae,le){return le/(T.length-1)}),ne=T.map(function(ae){return(ae-P)/(M-P)});ne.every(function(ae,le){return re[le]===ae})||(Te=function(ae){if(ae<=0||ae>=1)return ae;for(var le=0;ae>=ne[le+1];)le++;var tt=(ae-ne[le])/(ne[le+1]-ne[le]),Lt=re[le]+tt*(re[le+1]-re[le]);return Lt})}}return g=[P,M],ee},ee.mode=function(T){return arguments.length?(c=T,Ue(),ee):c},ee.range=function(T,B){return Q(T),ee},ee.out=function(T){return C=T,ee},ee.spread=function(T){return arguments.length?(u=T,ee):u},ee.correctLightness=function(T){return T==null&&(T=!0),O=T,Ue(),O?oe=function(B){for(var X=Se(0,!0).lab()[0],K=Se(1,!0).lab()[0],Le=X>K,he=Se(B,!0).lab()[0],re=X+(K-X)*B,ne=he-re,ae=0,le=1,tt=20;Math.abs(ne)>.01&&tt-- >0;)(function(){return Le&&(ne*=-1),ne<0?(ae=B,B+=(le-B)*.5):(le=B,B+=(ae-B)*.5),he=Se(B,!0).lab()[0],ne=he-re})();return B}:oe=function(B){return B},ee},ee.padding=function(T){return T!=null?(br(T)==="number"&&(T=[T,T]),f=T,ee):f},ee.colors=function(T,B){arguments.length<2&&(B="hex");var X=[];if(arguments.length===0)X=w.slice(0);else if(T===1)X=[ee(.5)];else if(T>1){var K=g[0],Le=g[1]-K;X=Zh(0,T,!1).map(function(le){return ee(K+le/(T-1)*Le)})}else{a=[];var he=[];if(y&&y.length>2)for(var re=1,ne=y.length,ae=1<=ne;ae?re<ne:re>ne;ae?re++:re--)he.push((y[re-1]+y[re])*.5);else he=g;X=he.map(function(le){return ee(le)})}return Je[B]&&(X=X.map(function(le){return le[B]()})),X},ee.cache=function(T){return T!=null?(z=T,ee):z},ee.gamma=function(T){return T!=null?(Y=T,ee):Y},ee.nodata=function(T){return T!=null?(d=Je(T),ee):d},ee};function Zh(a,c,d){for(var u=[],g=a<c,b=d?g?c+1:c-1:c,f=a;g?f<b:f>b;g?f++:f--)u.push(f);return u}var Fr=L,Gh=ms,Yh=function(a){for(var c=[1,1],d=1;d<a;d++){for(var u=[1],g=1;g<=c.length;g++)u[g]=(c[g]||0)+c[g-1];c=u}return c},Kh=function(a){var c,d,u,g,b,f,y;if(a=a.map(function(O){return new Fr(O)}),a.length===2)c=a.map(function(O){return O.lab()}),b=c[0],f=c[1],g=function(O){var I=[0,1,2].map(function(z){return b[z]+O*(f[z]-b[z])});return new Fr(I,"lab")};else if(a.length===3)d=a.map(function(O){return O.lab()}),b=d[0],f=d[1],y=d[2],g=function(O){var I=[0,1,2].map(function(z){return(1-O)*(1-O)*b[z]+2*(1-O)*O*f[z]+O*O*y[z]});return new Fr(I,"lab")};else if(a.length===4){var w;u=a.map(function(O){return O.lab()}),b=u[0],f=u[1],y=u[2],w=u[3],g=function(O){var I=[0,1,2].map(function(z){return(1-O)*(1-O)*(1-O)*b[z]+3*(1-O)*(1-O)*O*f[z]+3*(1-O)*O*O*y[z]+O*O*O*w[z]});return new Fr(I,"lab")}}else if(a.length>=5){var C,P,M;C=a.map(function(O){return O.lab()}),M=a.length-1,P=Yh(M),g=function(O){var I=1-O,z=[0,1,2].map(function(Y){return C.reduce(function(Q,te,oe){return Q+P[oe]*Math.pow(I,M-oe)*Math.pow(O,oe)*te[Y]},0)});return new Fr(z,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return g},Xh=function(a){var c=Kh(a);return c.scale=function(){return Gh(c)},c},vs=W,et=function(a,c,d){if(!et[d])throw new Error("unknown blend mode "+d);return et[d](a,c)},Ot=function(a){return function(c,d){var u=vs(d).rgb(),g=vs(c).rgb();return vs.rgb(a(u,g))}},Tt=function(a){return function(c,d){var u=[];return u[0]=a(c[0],d[0]),u[1]=a(c[1],d[1]),u[2]=a(c[2],d[2]),u}},Qh=function(a){return a},Jh=function(a,c){return a*c/255},eu=function(a,c){return a>c?c:a},tu=function(a,c){return a>c?a:c},ru=function(a,c){return 255*(1-(1-a/255)*(1-c/255))},iu=function(a,c){return c<128?2*a*c/255:255*(1-2*(1-a/255)*(1-c/255))},su=function(a,c){return 255*(1-(1-c/255)/(a/255))},ou=function(a,c){return a===255?255:(a=255*(c/255)/(1-a/255),a>255?255:a)};et.normal=Ot(Tt(Qh)),et.multiply=Ot(Tt(Jh)),et.screen=Ot(Tt(ru)),et.overlay=Ot(Tt(iu)),et.darken=Ot(Tt(eu)),et.lighten=Ot(Tt(tu)),et.dodge=Ot(Tt(ou)),et.burn=Ot(Tt(su));for(var nu=et,gs=$.type,au=$.clip_rgb,lu=$.TWOPI,cu=Math.pow,du=Math.sin,hu=Math.cos,qn=W,uu=function(a,c,d,u,g){a===void 0&&(a=300),c===void 0&&(c=-1.5),d===void 0&&(d=1),u===void 0&&(u=1),g===void 0&&(g=[0,1]);var b=0,f;gs(g)==="array"?f=g[1]-g[0]:(f=0,g=[g,g]);var y=function(w){var C=lu*((a+120)/360+c*w),P=cu(g[0]+f*w,u),M=b!==0?d[0]+w*b:d,O=M*P*(1-P)/2,I=hu(C),z=du(C),Y=P+O*(-.14861*I+1.78277*z),Q=P+O*(-.29227*I-.90649*z),te=P+O*(1.97294*I);return qn(au([Y*255,Q*255,te*255,1]))};return y.start=function(w){return w==null?a:(a=w,y)},y.rotations=function(w){return w==null?c:(c=w,y)},y.gamma=function(w){return w==null?u:(u=w,y)},y.hue=function(w){return w==null?d:(d=w,gs(d)==="array"?(b=d[1]-d[0],b===0&&(d=d[1])):b=0,y)},y.lightness=function(w){return w==null?g:(gs(w)==="array"?(g=w,f=w[1]-w[0]):(g=[w,w],f=0),y)},y.scale=function(){return qn.scale(y)},y.hue(d),y},pu=L,fu="0123456789abcdef",mu=Math.floor,vu=Math.random,gu=function(){for(var a="#",c=0;c<6;c++)a+=fu.charAt(mu(vu()*16));return new pu(a,"hex")},bs=v,Bn=Math.log,bu=Math.pow,yu=Math.floor,wu=Math.abs,Hn=function(a,c){c===void 0&&(c=null);var d={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return bs(a)==="object"&&(a=Object.values(a)),a.forEach(function(u){c&&bs(u)==="object"&&(u=u[c]),u!=null&&!isNaN(u)&&(d.values.push(u),d.sum+=u,u<d.min&&(d.min=u),u>d.max&&(d.max=u),d.count+=1)}),d.domain=[d.min,d.max],d.limits=function(u,g){return Wn(d,u,g)},d},Wn=function(a,c,d){c===void 0&&(c="equal"),d===void 0&&(d=7),bs(a)=="array"&&(a=Hn(a));var u=a.min,g=a.max,b=a.values.sort(function(ws,xs){return ws-xs});if(d===1)return[u,g];var f=[];if(c.substr(0,1)==="c"&&(f.push(u),f.push(g)),c.substr(0,1)==="e"){f.push(u);for(var y=1;y<d;y++)f.push(u+y/d*(g-u));f.push(g)}else if(c.substr(0,1)==="l"){if(u<=0)throw new Error("Logarithmic scales are only possible for values > 0");var w=Math.LOG10E*Bn(u),C=Math.LOG10E*Bn(g);f.push(u);for(var P=1;P<d;P++)f.push(bu(10,w+P/d*(C-w)));f.push(g)}else if(c.substr(0,1)==="q"){f.push(u);for(var M=1;M<d;M++){var O=(b.length-1)*M/d,I=yu(O);if(I===O)f.push(b[I]);else{var z=O-I;f.push(b[I]*(1-z)+b[I+1]*z)}}f.push(g)}else if(c.substr(0,1)==="k"){var Y,Q=b.length,te=new Array(Q),oe=new Array(d),Te=!0,Se=0,Ue=null;Ue=[],Ue.push(u);for(var ee=1;ee<d;ee++)Ue.push(u+ee/d*(g-u));for(Ue.push(g);Te;){for(var T=0;T<d;T++)oe[T]=0;for(var B=0;B<Q;B++)for(var X=b[B],K=Number.MAX_VALUE,Le=void 0,he=0;he<d;he++){var re=wu(Ue[he]-X);re<K&&(K=re,Le=he),oe[Le]++,te[B]=Le}for(var ne=new Array(d),ae=0;ae<d;ae++)ne[ae]=null;for(var le=0;le<Q;le++)Y=te[le],ne[Y]===null?ne[Y]=b[le]:ne[Y]+=b[le];for(var tt=0;tt<d;tt++)ne[tt]*=1/oe[tt];Te=!1;for(var Lt=0;Lt<d;Lt++)if(ne[Lt]!==Ue[Lt]){Te=!0;break}Ue=ne,Se++,Se>200&&(Te=!1)}for(var Rt={},yr=0;yr<d;yr++)Rt[yr]=[];for(var wr=0;wr<Q;wr++)Y=te[wr],Rt[Y].push(b[wr]);for(var wt=[],Zt=0;Zt<d;Zt++)wt.push(Rt[Zt][0]),wt.push(Rt[Zt][Rt[Zt].length-1]);wt=wt.sort(function(ws,xs){return ws-xs}),f.push(wt[0]);for(var Ir=1;Ir<wt.length;Ir+=2){var Gt=wt[Ir];!isNaN(Gt)&&f.indexOf(Gt)===-1&&f.push(Gt)}}return f},Zn={analyze:Hn,limits:Wn},Gn=L,xu=function(a,c){a=new Gn(a),c=new Gn(c);var d=a.luminance(),u=c.luminance();return d>u?(d+.05)/(u+.05):(u+.05)/(d+.05)},Yn=L,yt=Math.sqrt,$e=Math.pow,_u=Math.min,$u=Math.max,Kn=Math.atan2,Xn=Math.abs,ui=Math.cos,Qn=Math.sin,Cu=Math.exp,Jn=Math.PI,ku=function(a,c,d,u,g){d===void 0&&(d=1),u===void 0&&(u=1),g===void 0&&(g=1);var b=function(Gt){return 360*Gt/(2*Jn)},f=function(Gt){return 2*Jn*Gt/360};a=new Yn(a),c=new Yn(c);var y=Array.from(a.lab()),w=y[0],C=y[1],P=y[2],M=Array.from(c.lab()),O=M[0],I=M[1],z=M[2],Y=(w+O)/2,Q=yt($e(C,2)+$e(P,2)),te=yt($e(I,2)+$e(z,2)),oe=(Q+te)/2,Te=.5*(1-yt($e(oe,7)/($e(oe,7)+$e(25,7)))),Se=C*(1+Te),Ue=I*(1+Te),ee=yt($e(Se,2)+$e(P,2)),T=yt($e(Ue,2)+$e(z,2)),B=(ee+T)/2,X=b(Kn(P,Se)),K=b(Kn(z,Ue)),Le=X>=0?X:X+360,he=K>=0?K:K+360,re=Xn(Le-he)>180?(Le+he+360)/2:(Le+he)/2,ne=1-.17*ui(f(re-30))+.24*ui(f(2*re))+.32*ui(f(3*re+6))-.2*ui(f(4*re-63)),ae=he-Le;ae=Xn(ae)<=180?ae:he<=Le?ae+360:ae-360,ae=2*yt(ee*T)*Qn(f(ae)/2);var le=O-w,tt=T-ee,Lt=1+.015*$e(Y-50,2)/yt(20+$e(Y-50,2)),Rt=1+.045*B,yr=1+.015*B*ne,wr=30*Cu(-$e((re-275)/25,2)),wt=2*yt($e(B,7)/($e(B,7)+$e(25,7))),Zt=-wt*Qn(2*f(wr)),Ir=yt($e(le/(d*Lt),2)+$e(tt/(u*Rt),2)+$e(ae/(g*yr),2)+Zt*(tt/(u*Rt))*(ae/(g*yr)));return $u(0,_u(100,Ir))},ea=L,Au=function(a,c,d){d===void 0&&(d="lab"),a=new ea(a),c=new ea(c);var u=a.get(d),g=c.get(d),b=0;for(var f in u){var y=(u[f]||0)-(g[f]||0);b+=y*y}return Math.sqrt(b)},Su=L,Pu=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];try{return new(Function.prototype.bind.apply(Su,[null].concat(a))),!0}catch{return!1}},ta=W,ra=ms,Ou={cool:function(){return ra([ta.hsl(180,1,.9),ta.hsl(250,.7,.4)])},hot:function(){return ra(["#000","#f00","#ff0","#fff"]).mode("rgb")}},pi={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},ys=0,ia=Object.keys(pi);ys<ia.length;ys+=1){var sa=ia[ys];pi[sa.toLowerCase()]=pi[sa]}var Tu=pi,Ae=W;Ae.average=Bh,Ae.bezier=Xh,Ae.blend=nu,Ae.cubehelix=uu,Ae.mix=Ae.interpolate=Dn,Ae.random=gu,Ae.scale=ms,Ae.analyze=Zn.analyze,Ae.contrast=xu,Ae.deltaE=ku,Ae.distance=Au,Ae.limits=Zn.limits,Ae.valid=Pu,Ae.scales=Ou,Ae.colors=vn,Ae.brewer=Tu;var Lu=Ae;return Lu})})(dl);var Re=dl.exports,E0=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,De=(n,e,t,i)=>{for(var s=i>1?void 0:i?N0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&E0(e,t,s),s};const we={primary:"#0070f3",secondary:"#facc15",danger:"#dc2626",success:"#10b981",warning:"#fb923c",info:"#3b82f6",base:"#ffffff",maxContrastNeutral:"#111827",neutral:"#1f2937"};let Oe=class extends ve(D){constructor(){super(...arguments),this.primary=we.primary,this.secondary=we.secondary,this.neutral=we.neutral,this.base=we.base,this.maxContrastNeutral=we.maxContrastNeutral,this.rounded="md",this.border="sm",this.flat=!1,this.inputBordered=!1,this.buttonPills=!1,this.tailwindClosestPrimary="",this.settings={},this.theme={base:this.base,"base-content":this.neutral,primary:{DEFAULT:this.primary,content:we.base},neutral:{DEFAULT:this.neutral,content:we.base},info:{DEFAULT:we.info,content:we.base},success:{DEFAULT:we.success,content:we.base},warning:{DEFAULT:we.warning,content:we.base},danger:{DEFAULT:we.danger,content:we.base}}}render(){return S`<slot @slotchange=${this.mainSlotChange}></slot>`}connectedCallback(){super.connectedCallback(),this.generateTheme()}updated(n){var e;super.updated(n),(e=this.sonicTheme)==null||e.forEach(t=>{t.setAttribute("style",this.themeCSS||"")})}randomTheme(){this.primary=Re.random().hex(),this.generateTheme()}mainSlotChange(){this.requestUpdate()}willUpdate(n){super.willUpdate(n),this.generateTheme()}_getStatusColor(){return Object.keys(this.theme).filter(n=>["success","info","danger","warning"].includes(n)).reduce((n,e)=>Object.assign(n,{[e]:this.theme[e]}),{})}generateTheme(){if(!(Re.valid(this.primary)&&Re.valid(this.neutral)&&Re.valid(this.base)&&Re.valid(this.maxContrastNeutral)))return;const n=Re(this.primary),e=Re(this.neutral);let t=[];for(const v of Object.entries(D0))typeof v[1]=="object"?Object.entries(v[1]).forEach(m=>{t.push({key:v[0]+"-"+m[0],delta:Re.deltaE(m[1],n),color:m[1]})}):t.push({key:v[0],delta:Re.deltaE(v[1],n),color:v[1]});var i=t.slice(0);i.sort(function(v,m){return v.delta-m.delta}),this.tailwindClosestPrimary=i[0].color;const s=n.hsl(),r=Re(i[0].color).hsl(),o=isNaN(s[0])||isNaN(r[0])?0:s[0]-r[0],l=s[1]-r[1],p=this._getStatusColor();Object.entries(p).forEach(v=>{const[m]=v,A=Re(we[m]).hsl(),R=.6,N=o<0?Math.max(-15,o):Math.min(15,o),$=Math.min(A[0]+N),U=A[1]+l*R,H=A[2],_=Re.hsl($,U,H);this._generateShades(_,m)}),this._generateShades(n,"primary"),this._generateShades(Re(e),"neutral"),this.theme["base-content"]=this.neutral,this.theme.base=this.base,this.generateCss(this.theme),this.dispatchEvent(new CustomEvent("newTheme",{bubbles:!0,composed:!0}))}_generateShades(n,e){const t=Re(n).luminance()<.4,i=e=="neutral"?0:.15,s=Re.scale([this.base,n,this.maxContrastNeutral]).mode("lab").correctLightness().padding([0,i]);let r={50:s(.04).hex(),100:s(.08).hex(),200:s(.18).hex(),300:s(.25).hex(),400:s(.4).hex(),500:s(.5).hex(),600:s(.65).hex(),700:s(.8).hex(),800:s(.9).hex(),900:s(1).hex(),DEFAULT:n.hex(),content:t?we.base:we.maxContrastNeutral};this.theme[e]=r}generateCss(n){const e=[];for(const t of Object.entries(n))typeof t[1]=="object"&&t[1]!=null?Object.entries(t[1]).forEach(i=>{if(!(t[0]=="neutral"&&i[0]=="DEFAULT")&&!(t[0]=="neutral"&&i[0]=="content")){const s=t[0]=="neutral"?"base":t[0],r=i[0]=="DEFAULT"?"":`-${i[0]}`;e.push(`--sc-${s+r} : ${i[1]}`)}}):e.push(`--sc-${t[0]}: ${t[1]}`);this.rounded=="none"?e.push("--sc-rounded: 0;"):this.rounded=="lg"?(e.push("--sc-rounded: 0.5rem"),e.push("--sc-btn-rounded-intensity:1.6"),e.push("--sc-btn-input-intensity:1.6")):e.push("--sc-rounded: 0.375rem"),this.buttonPills&&e.push("--sc-btn-rounded:9999px"),this.border=="md"?e.push("--sc-border-width:max(2px, .125rem)"):e.push("--sc-border-width:max(1px, .1rem)"),this.inputBordered&&(e.push("--sc-input-bg:transparent"),e.push("--sc-input-border-color:var(--sc-base-content)")),this.flat&&(e.push("--sc-shadow-xs:none;"),e.push("--sc-shadow-sm:none;"),e.push("--sc-shadow-lg:none;"),e.push("--sc-shadow-xm:none;"),e.push("--sc-shadow:none;")),this.themeCSS=e.join(";")}};Oe.styles=F`
    :host{
      display:contents!important;
    }
  `;De([h({type:String})],Oe.prototype,"primary",2);De([h({type:String})],Oe.prototype,"secondary",2);De([h({type:String})],Oe.prototype,"neutral",2);De([h({type:String})],Oe.prototype,"base",2);De([h({type:String})],Oe.prototype,"maxContrastNeutral",2);De([h({type:String})],Oe.prototype,"rounded",2);De([h({type:String})],Oe.prototype,"border",2);De([h({type:Boolean})],Oe.prototype,"flat",2);De([h({type:Boolean})],Oe.prototype,"inputBordered",2);De([h({type:Boolean})],Oe.prototype,"buttonPills",2);De([ce()],Oe.prototype,"tailwindClosestPrimary",2);De([ce()],Oe.prototype,"settings",2);De([ce()],Oe.prototype,"theme",2);De([h({type:String})],Oe.prototype,"themeCSS",2);De([At({selector:"sonic-theme"})],Oe.prototype,"sonicTheme",2);Oe=De([E("concorde-theme-generator")],Oe);var M0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,F0=(n,e,t,i)=>{for(var s=i>1?void 0:i?z0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&M0(e,t,s),s};let io=class extends D{render(){return S`
      <sonic-card dataProvider="none">
        <div
          class="mb-4 -mt-6 -mx-6 rounded-tl-lg rounded-tr-lg overflow-hidden  "
        >
          <sonic-image
            src="https://m.media-amazon.com/images/I/61TUTL64HOL._AC_.jpg"
          ></sonic-image>
        </div>
        <sonic-card-main>
          <div class="mb-2">
            <div class="text-lg font-bold">The concorde - airport 79</div>
            <div>David Lowell Rich</div>
          </div>
          <div class="flex">
            <div class=" flex gap-2">
              <sonic-button type="primary" size="sm">
                <sonic-icon
                  slot="prefix"
                  library="iconoir"
                  size="lg"
                  name="play-outline"
                ></sonic-icon>
                Watch trailer</sonic-button
              >
              <sonic-button icon shape="circle" size="sm" class="ml-auto">
                <sonic-icon library="iconoir" name="playlist"></sonic-icon>
              </sonic-button>
            </div>

            <div class="ml-auto flex gap-2">
              <sonic-button
                icon
                name="favourite"
                value="true"
                type="neutral"
                shape="circle"
                size="sm"
                variant="outline"
                class="ml-auto"
              >
              
                <sonic-icon library="iconoir" name="heart"></sonic-icon>
              </sonic-button>
            </div>
          </div>
        </sonic-card-main>
      </sonic-card>
    `}};io.styles=[Bt];io=F0([E("concorde-movie-card")],io);var I0=Object.defineProperty,U0=Object.getOwnPropertyDescriptor,Ht=(n,e,t,i)=>{for(var s=i>1?void 0:i?U0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&I0(e,t,s),s};let so=class extends ve(D){render(){return S`
  <sonic-card>
  <sonic-list  fetch serviceurl="https://reqres.in" dataprovider="api/users" key="data" class="grid grid-cols-1  ">
      <template><concorde-preview-user-item></sonic-preview-user-item></template>
  </sonic-list>
  </sonic-card>`}};so.styles=[Bt];so=Ht([E("concorde-preview-users")],so);let kt=class extends ve(D){constructor(){super(...arguments),this.avatar="",this.first_name="",this.email="",this.last_name="",this.id="",this._key_=""}render(){const n=this._key_=="0";return S` ${n?"":S`<div class="border-t my-1 border-neutral-100"></div>`}
      <div
        class="flex items-center gap-2 rounded-md hover:bg-neutral-100 -mx-2 p-2"
      >
        <sonic-image
          data-bind=""
          src=${this.avatar}
          rounded="md"
          ratio="1/1"
          class="w-16 block"
        ></sonic-image>
        <div>
          <div class="text-bold">
            ${this.first_name} <span class="font-bold">${this.last_name}</span>
          </div>
          <span class="text-sm text-neutral-400"> ${this.email} </span>
        </div>
        <div class="ml-auto relative">
          ${this.id=="2"||this.id=="5"?S`
                <sonic-badge
                  type="danger"
                  size="2xs"
                  class="absolute left-0 -top-1 z-10"
                >
                  ${this.id}</sonic-badge
                >
              `:""}
          <sonic-button
            data-bind=""
            href="mailto:${this.email}"
            size="sm"
            variant="outline"
            shape="circle"
            class="relative"
            icon
          >
            <sonic-icon library="iconoir" name="chat-bubble"></sonic-icon>
          </sonic-button>
        </div>
      </div>`}};kt.styles=[Bt];Ht([h({type:String})],kt.prototype,"avatar",2);Ht([h({type:String})],kt.prototype,"first_name",2);Ht([h({type:String})],kt.prototype,"email",2);Ht([h({type:String})],kt.prototype,"last_name",2);Ht([h({type:String})],kt.prototype,"id",2);Ht([h({type:String})],kt.prototype,"_key_",2);kt=Ht([E("concorde-preview-user-item")],kt);var V0=Object.defineProperty,q0=Object.getOwnPropertyDescriptor,B0=(n,e,t,i)=>{for(var s=i>1?void 0:i?q0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&V0(e,t,s),s};let oo=class extends ve(D){render(){return S`<sonic-card formDataProvider="creation_compte">
      <sonic-fieldset>
        <sonic-legend iconLibrary="iconoir" label="My account"  iconName="user" ></sonic-legend>
        <sonic-form-layout>
          <sonic-input
            autocomplete="login"
            label="Login"
            name="login"
          ></sonic-input>
          <sonic-input
            autocomplete="new-password"
            label="Mot de passe"
            name="password"
            type="password"
          ></sonic-input>
          <sonic-form-actions class="flex-wrap gap-y-2 w-full">
            <sonic-submit>
              <sonic-button
                href="#my-account"
                type="success"
                class="w-full"
              >
                <sonic-icon
                  library="iconoir"
                  name="arrow-right"
                  slot="prefix"
                ></sonic-icon>
                Login</sonic-button
              >
            </sonic-submit>
            <sonic-button href="#missing-password" variant="link">
              <sonic-icon
                library="iconoir"
                name="question-mark-circle"
                slot="prefix"
              ></sonic-icon>
              Forgotten password
            </sonic-button>
          </sonic-form-actions>
        </sonic-form-layout>
      </sonic-fieldset>

      <sonic-fieldset>
        <sonic-legend iconLibrary="iconoir" iconName="add-user" label="New user ?" ></sonic-legend>

        <div class="-mt-4 mb-4">Lorem ipsum dolor sit amet consectur !</div>
        <div class="flex gap-2 flex-wrap">
          <sonic-button
            href="#create"
            type="primary"
            class="mr-2"
            ><sonic-icon
              library="iconoir"
              name="plus"
              slot="prefix"
            ></sonic-icon>
            Create an account</sonic-button
          >
          </div>   
      </sonic-fieldset>
    </sonic-card>`}};oo.styles=[Bt];oo=B0([E("concorde-preview-user-form")],oo);var H0=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,Z0=(n,e,t,i)=>{for(var s=i>1?void 0:i?W0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&H0(e,t,s),s};let no=class extends D{render(){return S`
      <div
        class="grid lg:grid-cols-[repeat(auto-fill,minmax(25rem,_1fr))] gap-8 items-start"
      >
        <div class="grid grid-cols-1 gap-6">
          <concorde-movie-card></concorde-movie-card>
        </div>
        <div class="grid grid-cols-1 gap-6">
          <concorde-preview-users></concorde-preview-users>
          <sonic-card>
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
          </sonic-card>
        </div>
        <div class="grid grid-cols-1 gap-6">
          <sonic-card>
            <div class="grid grid-cols-2 gap-x-3 gap-2 ">
              <sonic-button>Default</sonic-button>
              <sonic-button type="primary">Primary</sonic-button>
              <sonic-button type="neutral">Neutral</sonic-button>
              <sonic-button type="warning">Warning</sonic-button>
              <sonic-button type="info">Info</sonic-button>
              <sonic-button type="success">Success</sonic-button>
              <sonic-button type="danger">Danger</sonic-button>
            </div>
          </sonic-card>
          <concorde-preview-user-form></concorde-preview-user-form>
        </div>
      </div>
    `}};no.styles=[Bt];no=Z0([E("sonic-theme-preview")],no);var G0=Object.defineProperty,Y0=Object.getOwnPropertyDescriptor,K0=(n,e,t,i)=>{for(var s=i>1?void 0:i?Y0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&G0(e,t,s),s};let ao=class extends D{handleColorClick(n){var t,i;(i=(t=n.target.shadowRoot)==null?void 0:t.querySelector("input"))==null||i.select()}render(){return S`
      <div formDataProvider="themeSettings">
        <div class="flex items-center gap-2 font-bold text-xl mb-2">colors</div>
        <div class="grid grid-cols-2 gap-4 gap-x-6 mb-6">
          <div class="flex gap-1 items-end">
            <sonic-input
              size="sm"
              type="text"
              class="font-monospace"
              @click=${n=>{this.handleColorClick(n)}}
              name="primary"
              label="primary"
            ></sonic-input>
            <sonic-input
              size="2xs"
              type="color"
              class="overflow-hidden rounded-full shrink-0 mb-1 shadow-[0_0_0_1px_rgba(0,0,0,.1)]"
              name="primary"
              value=${Re.random().hex()}
            ></sonic-input>
          </div>
          <div class="flex gap-1 items-end hidden">
            <sonic-input
              size="sm"
              type="text"
              class="font-monospace "
              @click=${n=>{this.handleColorClick(n)}}
              name="secondary"
              label="secondary"
            ></sonic-input>
            <sonic-input
              size="2xs"
              type="color"
              class="overflow-hidden rounded-full shrink-0 mb-1 shadow-[0_0_0_1px_rgba(0,0,0,.1)] "
              name="secondary"
              value=${Re.random().hex()}
            ></sonic-input>
          </div>
          <div class="flex gap-1 items-end">
            <sonic-input
              size="sm"
              type="text"
              class="font-monospace"
              @click=${n=>{this.handleColorClick(n)}}
              name="neutral"
              label="neutral/text"
            ></sonic-input>
            <sonic-input
              size="2xs"
              value=${we.neutral}
              type="color"
              class="overflow-hidden rounded-full shrink-0 mb-1 shadow-[0_0_0_1px_rgba(0,0,0,.1)]"
              name="neutral"
            ></sonic-input>
          </div>
          <div class="flex gap-1 items-end">
            <sonic-input
              size="sm"
              type="text"
              class="font-monospace"
              @click=${n=>{this.handleColorClick(n)}}
              name="base"
              label="base/bg"
            ></sonic-input>
            <sonic-input
              value=${we.base}
              size="2xs"
              type="color"
              class="overflow-hidden rounded-full shrink-0 mb-1 shadow-[0_0_0_1px_rgba(0,0,0,.1)]"
              name="base"
            ></sonic-input>
          </div>

          <div class="flex gap-1 items-end">
            <sonic-input
              size="sm"
              type="text"
              class="font-monospace"
              name="maxContrastNeutral"
              label="max contrast "
            ></sonic-input>
            <sonic-input
              value=${we.maxContrastNeutral}
              size="2xs"
              type="color"
              class="overflow-hidden rounded-full shrink-0 mb-1 shadow-[0_0_0_1px_rgba(0,0,0,.1)]"
              name="maxContrastNeutral"
            ></sonic-input>
          </div>
        </div>
        <div class="mb-4">
          <div class="flex items-center gap-2  font-bold text-xl mb-2">
            radius
          </div>
          <div class="flex  gap-4">
            <sonic-radio
              checked
              class="min-w-[4rem]"
              name="rounded"
              value="none"
              label="none"
            ></sonic-radio>
            <sonic-radio
              class="min-w-[4rem]"
              name="rounded"
              value="md"
              label="medium"
              checked
            ></sonic-radio>
            <sonic-radio
              class="min-w-[4rem]"
              name="rounded"
              value="lg"
              label="large"
            ></sonic-radio>
          </div>
        </div>
        <div class="mb-4">
          <div class="flex items-center gap-2 font-bold text-xl mb-2">
            border
          </div>
          <div class="flex gap-4">
            <sonic-radio
              checked
              class="min-w-[4rem]"
              name="border"
              value="sm"
              label="thin"
            ></sonic-radio>
            <sonic-radio
              class="min-w-[4rem]"
              name="border"
              value="md"
              label="medium"
            ></sonic-radio>
          </div>
        </div>
        <div class="flex items-center gap-2 font-bold text-xl mb-2">extras</div>
        <div class="mb-2">
          <div>
            <div class="grid grid-cols-2 gap-2 gap-x-4">
              <sonic-checkbox
                name="flat"
                value="true"
                unique
                label="flat design"
              ></sonic-checkbox>
              <sonic-checkbox
                name="inputBordered"
                value="true"
                unique
                label="input bordered"
              ></sonic-checkbox>
              <sonic-checkbox
                name="buttonPills"
                value="true"
                unique
                label="button pills"
              ></sonic-checkbox>
            </div>
          </div>
        </div>
      </div>
    `}};ao.styles=[Bt,F``];ao=K0([E("concorde-configuration-form")],ao);var X0=Object.defineProperty,Q0=Object.getOwnPropertyDescriptor,J0=(n,e,t,i)=>{for(var s=i>1?void 0:i?Q0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&X0(e,t,s),s};let lo=class extends D{render(){return S`
      <div class="grid grid-cols-[18rem,_auto] gap-10">
        <concorde-configuration-form></concorde-configuration-form>
        <div dataProvider="themeSettings">
          <concorde-theme-generator>
            <sonic-theme color>
              <sonic-theme-preview
              class="block bg-neutral-50 p-10 rounded-lg"
              ></sonic-theme-preview>
            </sonic-theme>
          </concorde-theme-generator>
        </div>
      </div>
    `}};lo.styles=[Bt];lo=J0([E("concorde-configuration")],lo);var em=Object.defineProperty,tm=Object.getOwnPropertyDescriptor,rm=(n,e,t,i)=>{for(var s=i>1?void 0:i?tm(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&em(e,t,s),s};let co=class extends D{render(){return S`
      <sonic-theme theme="auto" background color class="py-4 px-5">
        <div class="border-b flex gap-8 py-3 mb-8">
          <div class="text-4xl ">
            <sonic-link href="/" variant="unstyled">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="222.442"
                height="47.558"
                viewBox="0 0 222.442 47.558"
              >
                <g transform="translate(-51.885 -25)">
                  <path
                    d="M11.045.384A9.984,9.984,0,0,1,5.862-.9,8.546,8.546,0,0,1,2.538-4.474,11.519,11.519,0,0,1,1.381-9.741a11.462,11.462,0,0,1,1.17-5.3,8.651,8.651,0,0,1,3.33-3.567,9.872,9.872,0,0,1,5.139-1.285,10.228,10.228,0,0,1,4.5.933,7.522,7.522,0,0,1,3.055,2.621,7.7,7.7,0,0,1,1.24,3.963H14.676a4.017,4.017,0,0,0-1.144-2.371,3.328,3.328,0,0,0-2.423-.9,3.647,3.647,0,0,0-2.205.684A4.416,4.416,0,0,0,7.44-12.976a8.472,8.472,0,0,0-.524,3.158,8.75,8.75,0,0,0,.518,3.2A4.393,4.393,0,0,0,8.9-4.615a3.651,3.651,0,0,0,2.212.69,3.63,3.63,0,0,0,1.681-.384,3.279,3.279,0,0,0,1.24-1.119A4.261,4.261,0,0,0,14.676-7.2h5.139a8.049,8.049,0,0,1-1.221,3.957A7.443,7.443,0,0,1,15.584-.575,10.038,10.038,0,0,1,11.045.384Zm19.7,0A9.985,9.985,0,0,1,25.6-.888a8.6,8.6,0,0,1-3.343-3.554,11.411,11.411,0,0,1-1.176-5.3,11.469,11.469,0,0,1,1.176-5.325A8.6,8.6,0,0,1,25.6-18.62a9.985,9.985,0,0,1,5.146-1.272A9.985,9.985,0,0,1,35.9-18.62a8.6,8.6,0,0,1,3.343,3.554,11.469,11.469,0,0,1,1.176,5.325,11.411,11.411,0,0,1-1.176,5.3A8.6,8.6,0,0,1,35.9-.888,9.985,9.985,0,0,1,30.75.384Zm.026-4.219a3.367,3.367,0,0,0,2.263-.773,4.757,4.757,0,0,0,1.374-2.116A9.279,9.279,0,0,0,34.88-9.78a9.279,9.279,0,0,0-.467-3.055,4.8,4.8,0,0,0-1.374-2.122,3.35,3.35,0,0,0-2.263-.78,3.443,3.443,0,0,0-2.295.78,4.726,4.726,0,0,0-1.393,2.122,9.279,9.279,0,0,0-.467,3.055,9.279,9.279,0,0,0,.467,3.055,4.681,4.681,0,0,0,1.393,2.116A3.461,3.461,0,0,0,30.776-3.835Zm17.2-7.517V0H42.529V-19.636h5.19v3.464h.23a5.512,5.512,0,0,1,2.186-2.717,6.647,6.647,0,0,1,3.72-1A6.906,6.906,0,0,1,57.423-19a6.091,6.091,0,0,1,2.365,2.55,8.589,8.589,0,0,1,.844,3.944V0H55.185V-11.531a3.968,3.968,0,0,0-.92-2.819,3.315,3.315,0,0,0-2.57-1.016,3.87,3.87,0,0,0-1.937.473,3.253,3.253,0,0,0-1.3,1.374A4.769,4.769,0,0,0,47.975-11.352ZM72.346.384A9.985,9.985,0,0,1,67.162-.9a8.546,8.546,0,0,1-3.324-3.573,11.519,11.519,0,0,1-1.157-5.267,11.462,11.462,0,0,1,1.17-5.3,8.651,8.651,0,0,1,3.33-3.567,9.872,9.872,0,0,1,5.139-1.285,10.228,10.228,0,0,1,4.5.933,7.522,7.522,0,0,1,3.055,2.621,7.7,7.7,0,0,1,1.24,3.963H75.977a4.017,4.017,0,0,0-1.144-2.371,3.328,3.328,0,0,0-2.423-.9,3.647,3.647,0,0,0-2.205.684,4.416,4.416,0,0,0-1.464,1.988,8.472,8.472,0,0,0-.524,3.158,8.75,8.75,0,0,0,.518,3.2A4.393,4.393,0,0,0,70.2-4.615a3.651,3.651,0,0,0,2.212.69,3.63,3.63,0,0,0,1.681-.384,3.279,3.279,0,0,0,1.24-1.119A4.261,4.261,0,0,0,75.977-7.2h5.139A8.049,8.049,0,0,1,79.9-3.241,7.443,7.443,0,0,1,76.885-.575,10.038,10.038,0,0,1,72.346.384Zm19.7,0A9.985,9.985,0,0,1,86.905-.888a8.6,8.6,0,0,1-3.343-3.554,11.411,11.411,0,0,1-1.176-5.3,11.469,11.469,0,0,1,1.176-5.325,8.6,8.6,0,0,1,3.343-3.554,9.985,9.985,0,0,1,5.146-1.272A9.985,9.985,0,0,1,97.2-18.62a8.6,8.6,0,0,1,3.343,3.554,11.469,11.469,0,0,1,1.176,5.325,11.411,11.411,0,0,1-1.176,5.3A8.6,8.6,0,0,1,97.2-.888,9.985,9.985,0,0,1,92.051.384Zm.026-4.219a3.367,3.367,0,0,0,2.263-.773,4.757,4.757,0,0,0,1.374-2.116A9.279,9.279,0,0,0,96.18-9.78a9.279,9.279,0,0,0-.467-3.055,4.8,4.8,0,0,0-1.374-2.122,3.35,3.35,0,0,0-2.263-.78,3.443,3.443,0,0,0-2.295.78,4.726,4.726,0,0,0-1.393,2.122,9.278,9.278,0,0,0-.467,3.055,9.278,9.278,0,0,0,.467,3.055,4.681,4.681,0,0,0,1.393,2.116A3.461,3.461,0,0,0,92.077-3.835ZM103.83,0V-19.636h5.28v3.426h.2a5.1,5.1,0,0,1,1.8-2.768,4.76,4.76,0,0,1,2.915-.94,8.238,8.238,0,0,1,.882.051,6.212,6.212,0,0,1,.831.141v4.832a7.115,7.115,0,0,0-1.061-.2,9.532,9.532,0,0,0-1.24-.089,4.363,4.363,0,0,0-2.141.518,3.847,3.847,0,0,0-1.483,1.438,4.1,4.1,0,0,0-.543,2.122V0Zm19.59.32a7.351,7.351,0,0,1-4.046-1.157,7.876,7.876,0,0,1-2.864-3.413,13.041,13.041,0,0,1-1.055-5.542,12.858,12.858,0,0,1,1.087-5.619,7.829,7.829,0,0,1,2.9-3.362,7.4,7.4,0,0,1,3.969-1.119,6.1,6.1,0,0,1,2.755.556,5.484,5.484,0,0,1,1.79,1.381,7.22,7.22,0,0,1,1.042,1.617h.166v-9.844h5.433V0h-5.369V-3.145h-.23a7,7,0,0,1-1.08,1.617,5.443,5.443,0,0,1-1.8,1.323A6.249,6.249,0,0,1,123.42.32Zm1.726-4.334a3.487,3.487,0,0,0,2.231-.722,4.56,4.56,0,0,0,1.406-2.026,8.637,8.637,0,0,0,.492-3.055,8.632,8.632,0,0,0-.486-3.043,4.367,4.367,0,0,0-1.406-1.994,3.577,3.577,0,0,0-2.237-.7,3.532,3.532,0,0,0-2.263.729,4.456,4.456,0,0,0-1.393,2.02,8.677,8.677,0,0,0-.473,2.991,8.776,8.776,0,0,0,.479,3.023,4.56,4.56,0,0,0,1.393,2.045A3.485,3.485,0,0,0,125.146-4.014Zm21.418,4.4a10.412,10.412,0,0,1-5.21-1.234A8.345,8.345,0,0,1,138-4.353a11.538,11.538,0,0,1-1.176-5.376A11.479,11.479,0,0,1,138-15.047a8.681,8.681,0,0,1,3.317-3.567,9.628,9.628,0,0,1,5.031-1.278,10.393,10.393,0,0,1,3.624.62,8.169,8.169,0,0,1,2.94,1.86,8.473,8.473,0,0,1,1.962,3.113,12.434,12.434,0,0,1,.7,4.379v1.5H139V-11.8H150.45a4.172,4.172,0,0,0-.511-2.084,3.721,3.721,0,0,0-1.413-1.425,4.122,4.122,0,0,0-2.09-.518,4.193,4.193,0,0,0-2.192.569,4.08,4.08,0,0,0-1.489,1.521,4.333,4.333,0,0,0-.55,2.116v3.209a5.462,5.462,0,0,0,.543,2.518,3.889,3.889,0,0,0,1.54,1.636,4.653,4.653,0,0,0,2.365.575,5.15,5.15,0,0,0,1.662-.256,3.449,3.449,0,0,0,1.291-.767,3.335,3.335,0,0,0,.818-1.253l5.037.332A6.866,6.866,0,0,1,153.9-2.461a7.868,7.868,0,0,1-3.043,2.1A11.435,11.435,0,0,1,146.563.384Zm14.31-.051a2.954,2.954,0,0,1-2.167-.9,2.954,2.954,0,0,1-.9-2.167,2.919,2.919,0,0,1,.9-2.148,2.965,2.965,0,0,1,2.167-.895,2.985,2.985,0,0,1,2.148.895,2.889,2.889,0,0,1,.92,2.148,2.884,2.884,0,0,1-.428,1.54,3.286,3.286,0,0,1-1.119,1.112A2.9,2.9,0,0,1,160.873.332Z"
                    transform="translate(110.385 62)"
                    fill="#2a282d"
                  ></path>
                  <g transform="translate(51.885 25)">
                    <g transform="translate(2.6 2.209)">
                      <path
                        d="M52.661,65.423h-1.4l-.091-.468h-.208l-.078.351-.078.065H49.646l-.065-.169-.091-.338h-.221v.208l-.118.065-3.859-.326L44.5,64.4v-.871a7.436,7.436,0,0,1,.156-1.079c.182-.883.546-1.962,2.833-5.224s3.08-4.481,4.665-10.3l.078-.324c.468-1.975.806-3.132.936-3.547V34.524a25.625,25.625,0,0,1,.312-2.82h0c.143-.923.312-1.754.468-2.4a21.623,21.623,0,0,0,.195,43.218,41.171,41.171,0,0,1-.845-6.8.668.668,0,0,0-.637-.3Z"
                        transform="translate(-33.181 -29.3)"
                        fill="#2a282d"
                      ></path>
                      <path
                        d="M34.658,65.423h1.4l.091-.468h.209l.078.351.078.065h1.157l.065-.169.091-.338h.221v.208l.118.065,3.857-.326.793-.416v-.871a7.436,7.436,0,0,0-.156-1.079c-.182-.883-.546-1.962-2.833-5.224s-3.08-4.481-4.665-10.3l-.078-.324c-.468-1.975-.806-3.132-.936-3.547V34.524a25.63,25.63,0,0,0-.312-2.82h0c-.143-.923-.312-1.754-.468-2.4a21.623,21.623,0,0,1-.195,43.218,41.171,41.171,0,0,0,.845-6.8.668.668,0,0,1,.637-.3Z"
                        transform="translate(-11.738 -29.3)"
                        fill="#2a282d"
                      ></path>
                    </g>
                    <path
                      d="M23.779,1.169a22.61,22.61,0,1,0,22.61,22.61,22.61,22.61,0,0,0-22.61-22.61m0-1.169A23.779,23.779,0,1,1,0,23.779,23.779,23.779,0,0,1,23.779,0Z"
                      transform="translate(0 0)"
                      fill="#2a282d"
                    ></path>
                  </g>
                </g>
              </svg>
            </sonic-link>
          </div>
          <div class="ml-auto flex gap-6 text-xl hidden">
            <sonic-link href="#documentation" variant="unstyled">
              documentation
            </sonic-link>
            <sonic-link href="#configuration" variant="unstyled">
              configuration
            </sonic-link>
            <sonic-link href="#search" variant="unstyled" icon>
              <sonic-icon library="iconoir" name="search"></sonic-icon>
            </sonic-link>
          </div>
        </div>
        <sonic-router>
          <template data-route="/$">
            <concorde-configuration></concorde-configuration>
          </template>
          <template data-route="/#documentation"> Coming soon </template>
          <template data-route="/#configuration"> </template>
        </sonic-router>
      </sonic-theme>
    `}};co.styles=[Bt,F`
      * {
        box-sizing: border-box;
      }
      sonic-theme {
        --sc-font-family-base: 'Inter var', -apple-system, system-ui,
          BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
          sans-serif !important;
        --sc-border-width: max(2px, 0.15rem);
        font-feature-settings: 'case', 'calt', 'ss03';
      }
    `];co=rm([E("concorde-app")],co)});export default im();
