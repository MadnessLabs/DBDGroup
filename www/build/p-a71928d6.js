import{b as t}from"./p-e369b114.js";import{g as n}from"./p-2d180048.js";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e=function(t,n){if(!t)throw i(n)},i=function(t){return new Error("Firebase Database (${JSCORE_VERSION}) INTERNAL ASSERT FAILED: "+t)},s=function(t){const n=[];let e=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?n[e++]=s:s<2048?(n[e++]=s>>6|192,n[e++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),n[e++]=s>>18|240,n[e++]=s>>12&63|128,n[e++]=s>>6&63|128,n[e++]=63&s|128):(n[e++]=s>>12|224,n[e++]=s>>6&63|128,n[e++]=63&s|128)}return n},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,n){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let n=0;n<t.length;n+=3){const s=t[n],r=n+1<t.length,o=r?t[n+1]:0,h=n+2<t.length,u=h?t[n+2]:0;let c=(15&o)<<2|u>>6,a=63&u;h||(a=64,r||(c=64)),i.push(e[s>>2],e[(3&s)<<4|o>>4],e[c],e[a])}return i.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(s(t),n)},decodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(t):function(t){const n=[];let e=0,i=0;for(;e<t.length;){const s=t[e++];if(s<128)n[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[e++];n[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[e++])<<12|(63&t[e++])<<6|63&t[e++])-65536;n[i++]=String.fromCharCode(55296+(r>>10)),n[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[e++],o=t[e++];n[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return n.join("")}(this.decodeStringToByteArray(t,n))},decodeStringToByteArray(t,n){this.init_();const e=n?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let n=0;n<t.length;){const s=e[t.charAt(n++)],r=n<t.length?e[t.charAt(n)]:0;++n;const o=n<t.length?e[t.charAt(n)]:64;++n;const h=n<t.length?e[t.charAt(n)]:64;if(++n,null==s||null==r||null==o||null==h)throw Error();i.push(s<<2|r>>4),64!==o&&(i.push(r<<4&240|o>>2),64!==h&&i.push(o<<6&192|h))}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const n=s(t);return r.encodeByteArray(n,!0)},h=function(t){return o(t).replace(/\./g,"")},u=function(t){try{return r.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(t){return a(void 0,t)}function a(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(const e in n)n.hasOwnProperty(e)&&"__proto__"!==e&&(t[e]=a(t[e],n[e]));return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}wrapCallback(t){return(n,e)=>{n?this.reject(n):this.resolve(e),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(n):t(n,e))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function d(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function w(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function m(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){const t=f();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return!1}function y(){return"object"==typeof indexedDB}class v extends Error{constructor(t,n,e){super(n),this.code=t,this.customData=e,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(t,n,e){this.service=t,this.serviceName=n,this.errors=e}create(t,...n){const e=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,n){return t.replace(I,((t,e)=>{const i=n[e];return null!=i?String(i):`<${e}?>`}))}(s,e):"Error";return new v(i,`${this.serviceName}: ${r} (${i}).`,e)}}const I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t){return JSON.parse(t)}function D(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t){let n={},e={},i={},s="";try{const r=t.split(".");n=E(u(r[0])||""),e=E(u(r[1])||""),s=r[2],i=e.d||{},delete e.d}catch(t){}return{header:n,claims:e,data:i,signature:s}},S=function(t){const n=T(t).claims;return!!n&&"object"==typeof n&&n.hasOwnProperty("iat")},A=function(t){const n=T(t).claims;return"object"==typeof n&&!0===n.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function x(t,n){return Object.prototype.hasOwnProperty.call(t,n)?t[n]:void 0}function N(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}function k(t,n,e){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=n.call(e,t[s],s,t));return i}function R(t,n){if(t===n)return!0;const e=Object.keys(t),i=Object.keys(n);for(const s of e){if(!i.includes(s))return!1;const e=t[s],r=n[s];if(M(e)&&M(r)){if(!R(e,r))return!1}else if(e!==r)return!1}for(const t of i)if(!e.includes(t))return!1;return!0}function M(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){const n=[];for(const[e,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{n.push(encodeURIComponent(e)+"="+encodeURIComponent(t))})):n.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return n.length?"&"+n.join("&"):""}function $(t){const n={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[e,i]=t.split("=");n[decodeURIComponent(e)]=decodeURIComponent(i)}})),n}function _(t){const n=t.indexOf("?");if(!n)return"";const e=t.indexOf("#",n);return t.substring(n,e>0?e:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const e=this.W_;if("string"==typeof t)for(let i=0;i<16;i++)e[i]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let i=0;i<16;i++)e[i]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let t=16;t<80;t++){const n=e[t-3]^e[t-8]^e[t-14]^e[t-16];e[t]=4294967295&(n<<1|n>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],h=this.chain_[2],u=this.chain_[3],c=this.chain_[4];for(let t=0;t<80;t++){t<40?t<20?(i=u^o&(h^u),s=1518500249):(i=o^h^u,s=1859775393):t<60?(i=o&h|u&(o|h),s=2400959708):(i=o^h^u,s=3395469782);const n=(r<<5|r>>>27)+i+c+s+e[t]&4294967295;c=u,u=h,h=4294967295&(o<<30|o>>>2),o=r,r=n}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(t,n){if(null==t)return;void 0===n&&(n=t.length);const e=n-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<n;){if(0===r)for(;i<=e;)this.compress_(t,i),i+=this.blockSize;if("string"==typeof t){for(;i<n;)if(s[r]=t.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<n;)if(s[r]=t[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=n}digest(){const t=[];let n=8*this.total_;this.update(this.pad_,this.inbuf_<56?56-this.inbuf_:this.blockSize-(this.inbuf_-56));for(let t=this.blockSize-1;t>=56;t--)this.buf_[t]=255&n,n/=256;this.compress_(this.buf_);let e=0;for(let n=0;n<5;n++)for(let i=24;i>=0;i-=8)t[e]=this.chain_[n]>>i&255,++e;return t}}function V(t,n){const e=new F(t,n);return e.subscribe.bind(e)}class F{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((n=>{n.next(t)}))}error(t){this.forEachObserver((n=>{n.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,n,e){let i;if(void 0===t&&void 0===n&&void 0===e)throw new Error("Missing Observer.");i=function(t){if("object"!=typeof t||null===t)return!1;for(const n of["next","error","complete"])if(n in t&&"function"==typeof t[n])return!0;return!1}(t)?t:{next:t,error:n,complete:e},void 0===i.next&&(i.next=L),void 0===i.error&&(i.error=L),void 0===i.complete&&(i.complete=L);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{n(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function L(){}function U(t,n){return`${t} failed: ${n} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t){const n=[];let i=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const n=r-55296;s++,e(s<t.length,"Surrogate pair missing trail surrogate."),r=65536+(n<<10)+(t.charCodeAt(s)-56320)}r<128?n[i++]=r:r<2048?(n[i++]=r>>6|192,n[i++]=63&r|128):r<65536?(n[i++]=r>>12|224,n[i++]=r>>6&63|128,n[i++]=63&r|128):(n[i++]=r>>18|240,n[i++]=r>>12&63|128,n[i++]=r>>6&63|128,n[i++]=63&r|128)}return n},q=function(t){let n=0;for(let e=0;e<t.length;e++){const i=t.charCodeAt(e);i<128?n++:i<2048?n+=2:i>=55296&&i<=56319?(n+=4,e++):n+=3}return n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,n){return new Promise(((e,i)=>{t.onsuccess=t=>{e(t.target.result)},t.onerror=t=>{var e;i(`${n}: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`)}}))}class K{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n="readonly"){return new H(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new z(this._db.createObjectStore(t,n))}close(){this._db.close()}}class H{constructor(t){this._transaction=t,this.complete=new Promise(((t,n)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{n(this._transaction.error)},this._transaction.onabort=()=>{n(this._transaction.error)}}))}objectStore(t){return new z(this._transaction.objectStore(t))}}class z{constructor(t){this._store=t}index(t){return new Q(this._store.index(t))}createIndex(t,n,e){return new Q(this._store.createIndex(t,n,e))}get(t){return G(this._store.get(t),"Error reading from IndexedDB")}put(t,n){return G(this._store.put(t,n),"Error writing to IndexedDB")}delete(t){return G(this._store.delete(t),"Error deleting from IndexedDB")}clear(){return G(this._store.clear(),"Error clearing IndexedDB object store")}}class Q{constructor(t){this._index=t}get(t){return G(this._index.get(t),"Error reading from IndexedDB")}}class W{constructor(t,n,e){this.name=t,this.instanceFactory=n,this.type=e,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const t=new l;if(this.instancesDeferred.set(n,t),this.isInitialized(n)||this.shouldAutoInitialize())try{const e=this.getOrInitializeService({instanceIdentifier:n});e&&t.resolve(e)}catch(t){}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const e=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(n=null==t?void 0:t.optional)&&void 0!==n&&n;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,n]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:e});n.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,e=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(e))throw Error(`${this.name}(${e}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:e,options:n});for(const[t,n]of this.instancesDeferred.entries())e===this.normalizeInstanceIdentifier(t)&&n.resolve(i);return i}onInit(t,n){var e;const i=this.normalizeInstanceIdentifier(n),s=null!==(e=this.onInitCallbacks.get(i))&&void 0!==e?e:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const e=this.onInitCallbacks.get(n);if(e)for(const i of e)try{i(t,n)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let e=this.instances.get(t);if(!e&&this.component&&(e=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:n}),this.instances.set(t,e),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(e,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,e)}catch(t){}var i;return e||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Y{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new X(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(J||(J={}));const Z={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},tt=J.INFO,nt={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},et=(t,n,...e)=>{if(n<t.logLevel)return;const i=(new Date).toISOString(),s=nt[n];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`);console[s](`[${i}]  ${t.name}:`,...e)};class it{constructor(t){this.name=t,this._logLevel=tt,this._logHandler=et,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Z[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const n=t.getComponent();return"VERSION"===(null==n?void 0:n.type)}(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}return null})).filter((t=>t)).join(" ")}}const rt="@firebase/app",ot=new it("@firebase/app"),ht={[rt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ut=new Map,ct=new Map;function at(t,n){try{t.container.addComponent(n)}catch(e){ot.debug(`Component ${n.name} failed to register with FirebaseApp ${t.name}`,e)}}function lt(t){const n=t.name;if(ct.has(n))return ot.debug(`There were multiple attempts to register component ${n}.`),!1;ct.set(n,t);for(const n of ut.values())at(n,t);return!0}function ft(t,n){const e=t.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),t.container.getProvider(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new b("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(t,n,e){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=e,this.container.addComponent(new W("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="9.6.11";function pt(t,n={}){"object"!=typeof n&&(n={name:n});const e=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},n),i=e.name;if("string"!=typeof i||!i)throw dt.create("bad-app-name",{appName:String(i)});const s=ut.get(i);if(s){if(R(t,s.options)&&R(e,s.config))return s;throw dt.create("duplicate-app",{appName:i})}const r=new Y(i);for(const t of ct.values())r.addComponent(t);const o=new wt(t,e,r);return ut.set(i,o),o}function gt(t="[DEFAULT]"){const n=ut.get(t);if(!n)throw dt.create("no-app",{appName:t});return n}function yt(t,n,e){var i;let s=null!==(i=ht[t])&&void 0!==i?i:t;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=n.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${n}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${n}" contains illegal characters (whitespace or "/")`),void ot.warn(t.join(" "))}lt(new W(`${s}-version`,(()=>({library:s,version:n})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="firebase-heartbeat-store";let bt=null;function It(){var t;return bt||(bt=("firebase-heartbeat-database",1,t=(t,n)=>{switch(n){case 0:t.createObjectStore(vt)}},new Promise(((n,e)=>{try{const i=indexedDB.open("firebase-heartbeat-database",1);i.onsuccess=t=>{n(new K(t.target.result))},i.onerror=t=>{var n;e(`Error opening indexedDB: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)},i.onupgradeneeded=n=>{t(new K(i.result),n.oldVersion,new H(i.transaction))}}catch(t){e(`Error opening indexedDB: ${t.message}`)}}))).catch((t=>{throw dt.create("storage-open",{originalErrorMessage:t.message})}))),bt}async function Et(t,n){try{const e=(await It()).transaction(vt,"readwrite"),i=e.objectStore(vt);return await i.put(n,Dt(t)),e.complete}catch(t){throw dt.create("storage-set",{originalErrorMessage:t.message})}}function Dt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new At(n),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=St();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const n=new Date(t.date).valueOf();return Date.now()-n<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=St(),{heartbeatsToSend:n,unsentEntries:e}=function(t,n=1024){const e=[];let i=t.slice();for(const s of t){const t=e.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Ct(e)>n){t.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ct(e)>n){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=h(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,e.length>0?(this._heartbeatsCache.heartbeats=e,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function St(){return(new Date).toISOString().substring(0,10)}class At{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!y()&&new Promise(((t,n)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var t;n((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){n(t)}})).then((()=>!0)).catch((()=>!1))}async read(){return await this._canUseIndexedDBPromise&&await async function(t){try{return(await It()).transaction(vt).objectStore(vt).get(Dt(t))}catch(t){throw dt.create("storage-get",{originalErrorMessage:t.message})}}(this.app)||{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const e=await this.read();return Et(this.app,{lastSentHeartbeatDate:null!==(n=t.lastSentHeartbeatDate)&&void 0!==n?n:e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var n;if(await this._canUseIndexedDBPromise){const e=await this.read();return Et(this.app,{lastSentHeartbeatDate:null!==(n=t.lastSentHeartbeatDate)&&void 0!==n?n:e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function Ct(t){return h(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(new W("platform-logger",(t=>new st(t)),"PRIVATE")),lt(new W("heartbeat",(t=>new Tt(t)),"PRIVATE")),yt(rt,"0.7.21",""),yt(rt,"0.7.21","esm2017"),yt("fire-js","");var xt,Nt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},kt=kt||{},Rt=Nt||self;function Mt(){}function Ot(t){var n=typeof t;return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function $t(t){var n=typeof t;return"object"==n&&null!=t||"function"==n}var _t="closure_uid_"+(1e9*Math.random()>>>0),Pt=0;function Vt(t,n,e){return t.call.apply(t.bind,arguments)}function Ft(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function Lt(t,n,e){return(Lt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Vt:Ft).apply(null,arguments)}function Ut(t,n){var e=Array.prototype.slice.call(arguments,1);return function(){var n=e.slice();return n.push.apply(n,arguments),t.apply(this,n)}}function Bt(t,n){function e(){}e.prototype=n.prototype,t.Z=n.prototype,t.prototype=new e,t.prototype.constructor=t,t.Vb=function(t,e,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return n.prototype[e].apply(t,s)}}function qt(){this.s=this.s,this.o=this.o}qt.prototype.s=!1,qt.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,_t)&&t[_t]||(t[_t]=++Pt))},qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jt=Array.prototype.indexOf?function(t,n){return Array.prototype.indexOf.call(t,n,void 0)}:function(t,n){if("string"==typeof t)return"string"!=typeof n||1!=n.length?-1:t.indexOf(n,0);for(let e=0;e<t.length;e++)if(e in t&&t[e]===n)return e;return-1},Gt=Array.prototype.forEach?function(t,n,e){Array.prototype.forEach.call(t,n,e)}:function(t,n,e){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&n.call(e,s[r],r,t)};function Kt(t){return Array.prototype.concat.apply([],arguments)}function Ht(t){const n=t.length;if(0<n){const e=Array(n);for(let i=0;i<n;i++)e[i]=t[i];return e}return[]}function zt(t){return/^[\s\xa0]*$/.test(t)}var Qt,Wt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xt(t,n){return-1!=t.indexOf(n)}function Yt(t,n){return t<n?-1:t>n?1:0}t:{var Jt=Rt.navigator;if(Jt){var Zt=Jt.userAgent;if(Zt){Qt=Zt;break t}}Qt=""}function tn(t,n,e){for(const i in t)n.call(e,t[i],i,t)}function nn(t){const n={};for(const e in t)n[e]=t[e];return n}var en="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sn(t,n){let e,i;for(let n=1;n<arguments.length;n++){for(e in i=arguments[n],i)t[e]=i[e];for(let n=0;n<en.length;n++)e=en[n],Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}}function rn(t){return rn[" "](t),t}rn[" "]=Mt;var on,hn,un=Xt(Qt,"Opera"),cn=Xt(Qt,"Trident")||Xt(Qt,"MSIE"),an=Xt(Qt,"Edge"),ln=an||cn,fn=Xt(Qt,"Gecko")&&!(Xt(Qt.toLowerCase(),"webkit")&&!Xt(Qt,"Edge"))&&!(Xt(Qt,"Trident")||Xt(Qt,"MSIE"))&&!Xt(Qt,"Edge"),dn=Xt(Qt.toLowerCase(),"webkit")&&!Xt(Qt,"Edge");function wn(){var t=Rt.document;return t?t.documentMode:void 0}t:{var mn="",pn=(hn=Qt,fn?/rv:([^\);]+)(\)|;)/.exec(hn):an?/Edge\/([\d\.]+)/.exec(hn):cn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(hn):dn?/WebKit\/(\S+)/.exec(hn):un?/(?:Version)[ \/]?(\S+)/.exec(hn):void 0);if(pn&&(mn=pn?pn[1]:""),cn){var gn=wn();if(null!=gn&&gn>parseFloat(mn)){on=String(gn);break t}}on=mn}var yn,vn={};function bn(){return t=vn,Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=function(){let t=0;const n=Wt(String(on)).split("."),e=Wt("9").split("."),i=Math.max(n.length,e.length);for(let o=0;0==t&&o<i;o++){var s=n[o]||"",r=e[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=Yt(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||Yt(0==s[2].length,0==r[2].length)||Yt(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}();var t}Rt.document&&cn?yn=wn()||parseInt(on,10)||void 0:yn=void 0;var In=yn,En=function(){if(!Rt.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Rt.addEventListener("test",Mt,n),Rt.removeEventListener("test",Mt,n)}catch(t){}return t}();function Dn(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}function Tn(t,n){if(Dn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var e=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget){if(fn){t:{try{rn(n.nodeName);var s=!0;break t}catch(t){}s=!1}s||(n=null)}}else"mouseover"==e?n=t.fromElement:"mouseout"==e&&(n=t.toElement);this.relatedTarget=n,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Sn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Tn.Z.h.call(this)}}Dn.prototype.h=function(){this.defaultPrevented=!0},Bt(Tn,Dn);var Sn={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var An="closure_listenable_"+(1e6*Math.random()|0),Cn=0;function xn(t,n,e,i,s){this.listener=t,this.proxy=null,this.src=n,this.type=e,this.capture=!!i,this.ia=s,this.key=++Cn,this.ca=this.fa=!1}function Nn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function kn(t){this.src=t,this.g={},this.h=0}function Rn(t,n){var e=n.type;if(e in t.g){var i,s=t.g[e],r=jt(s,n);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Nn(n),0==t.g[e].length&&(delete t.g[e],t.h--))}}function Mn(t,n,e,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==n&&r.capture==!!e&&r.ia==i)return s}return-1}kn.prototype.add=function(t,n,e,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Mn(t,n,i,s);return-1<o?(n=t[o],e||(n.fa=!1)):((n=new xn(n,this.src,r,!!i,s)).fa=e,t.push(n)),n};var On="closure_lm_"+(1e6*Math.random()|0),$n={};function _n(t,n,e,i,s){if(i&&i.once)return Vn(t,n,e,i,s);if(Array.isArray(n)){for(var r=0;r<n.length;r++)_n(t,n[r],e,i,s);return null}return e=Gn(e),t&&t[An]?t.N(n,e,$t(i)?!!i.capture:!!i,s):Pn(t,n,e,!1,i,s)}function Pn(t,n,e,i,s,r){if(!n)throw Error("Invalid event type");var o=$t(s)?!!s.capture:!!s,h=qn(t);if(h||(t[On]=h=new kn(t)),(e=h.add(n,e,i,o,r)).proxy)return e;if(i=function(){var t=Bn;return function n(e){return t.call(n.src,n.listener,e)}}(),e.proxy=i,i.src=t,i.listener=e,t.addEventListener)En||(s=o),void 0===s&&(s=!1),t.addEventListener(n.toString(),i,s);else if(t.attachEvent)t.attachEvent(Un(n.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return e}function Vn(t,n,e,i,s){if(Array.isArray(n)){for(var r=0;r<n.length;r++)Vn(t,n[r],e,i,s);return null}return e=Gn(e),t&&t[An]?t.O(n,e,$t(i)?!!i.capture:!!i,s):Pn(t,n,e,!0,i,s)}function Fn(t,n,e,i,s){if(Array.isArray(n))for(var r=0;r<n.length;r++)Fn(t,n[r],e,i,s);else i=$t(i)?!!i.capture:!!i,e=Gn(e),t&&t[An]?(t=t.i,(n=String(n).toString())in t.g&&-1<(e=Mn(r=t.g[n],e,i,s))&&(Nn(r[e]),Array.prototype.splice.call(r,e,1),0==r.length&&(delete t.g[n],t.h--))):t&&(t=qn(t))&&(n=t.g[n.toString()],t=-1,n&&(t=Mn(n,e,i,s)),(e=-1<t?n[t]:null)&&Ln(e))}function Ln(t){if("number"!=typeof t&&t&&!t.ca){var n=t.src;if(n&&n[An])Rn(n.i,t);else{var e=t.type,i=t.proxy;n.removeEventListener?n.removeEventListener(e,i,t.capture):n.detachEvent?n.detachEvent(Un(e),i):n.addListener&&n.removeListener&&n.removeListener(i),(e=qn(n))?(Rn(e,t),0==e.h&&(e.src=null,n[On]=null)):Nn(t)}}}function Un(t){return t in $n?$n[t]:$n[t]="on"+t}function Bn(t,n){if(t.ca)t=!0;else{n=new Tn(n,this);var e=t.listener,i=t.ia||t.src;t.fa&&Ln(t),t=e.call(i,n)}return t}function qn(t){return(t=t[On])instanceof kn?t:null}var jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gn(t){return"function"==typeof t?t:(t[jn]||(t[jn]=function(n){return t.handleEvent(n)}),t[jn])}function Kn(){qt.call(this),this.i=new kn(this),this.P=this,this.I=null}function Hn(t,n){var e,i=t.I;if(i)for(e=[];i;i=i.I)e.push(i);if(t=t.P,i=n.type||n,"string"==typeof n)n=new Dn(n,t);else if(n instanceof Dn)n.target=n.target||t;else{var s=n;sn(n=new Dn(i,t),s)}if(s=!0,e)for(var r=e.length-1;0<=r;r--){var o=n.g=e[r];s=zn(o,i,!0,n)&&s}if(s=zn(o=n.g=t,i,!0,n)&&s,s=zn(o,i,!1,n)&&s,e)for(r=0;r<e.length;r++)s=zn(o=n.g=e[r],i,!1,n)&&s}function zn(t,n,e,i){if(!(n=t.i.g[String(n)]))return!0;n=n.concat();for(var s=!0,r=0;r<n.length;++r){var o=n[r];if(o&&!o.ca&&o.capture==e){var h=o.listener,u=o.ia||o.src;o.fa&&Rn(t.i,o),s=!1!==h.call(u,i)&&s}}return s&&!i.defaultPrevented}Bt(Kn,qt),Kn.prototype[An]=!0,Kn.prototype.removeEventListener=function(t,n,e,i){Fn(this,t,n,e,i)},Kn.prototype.M=function(){if(Kn.Z.M.call(this),this.i){var t,n=this.i;for(t in n.g){for(var e=n.g[t],i=0;i<e.length;i++)Nn(e[i]);delete n.g[t],n.h--}}this.I=null},Kn.prototype.N=function(t,n,e,i){return this.i.add(String(t),n,!1,e,i)},Kn.prototype.O=function(t,n,e,i){return this.i.add(String(t),n,!0,e,i)};var Qn=Rt.JSON.stringify;function Wn(){var t=ee;let n=null;return t.g&&(n=t.g,t.g=t.g.next,t.g||(t.h=null),n.next=null),n}var Xn,Yn=new class{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Jn),(t=>t.reset()));class Jn{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Zn(t){Rt.setTimeout((()=>{throw t}),0)}function te(t,n){Xn||function(){var t=Rt.Promise.resolve(void 0);Xn=function(){t.then(ie)}}(),ne||(Xn(),ne=!0),ee.add(t,n)}var ne=!1,ee=new class{constructor(){this.h=this.g=null}add(t,n){const e=Yn.get();e.set(t,n),this.h?this.h.next=e:this.g=e,this.h=e}};function ie(){for(var t;t=Wn();){try{t.h.call(t.g)}catch(t){Zn(t)}var n=Yn;n.j(t),100>n.h&&(n.h++,t.next=n.g,n.g=t)}ne=!1}function se(t,n){Kn.call(this),this.h=t||1,this.g=n||Rt,this.j=Lt(this.kb,this),this.l=Date.now()}function re(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function oe(t,n,e){if("function"==typeof t)e&&(t=Lt(t,e));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Lt(t.handleEvent,t)}return 2147483647<Number(n)?-1:Rt.setTimeout(t,n||0)}function he(t){t.g=oe((()=>{t.g=null,t.i&&(t.i=!1,he(t))}),t.j);const n=t.h;t.h=null,t.m.apply(null,n)}Bt(se,Kn),(xt=se.prototype).da=!1,xt.S=null,xt.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Hn(this,"tick"),this.da&&(re(this),this.start()))}},xt.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},xt.M=function(){se.Z.M.call(this),re(this),delete this.g};class ue extends qt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:he(this)}M(){super.M(),this.g&&(Rt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(t){qt.call(this),this.h=t,this.g={}}Bt(ce,qt);var ae=[];function le(t,n,e,i){Array.isArray(e)||(e&&(ae[0]=e.toString()),e=ae);for(var s=0;s<e.length;s++){var r=_n(n,e[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function fe(t){tn(t.g,(function(t,n){this.g.hasOwnProperty(n)&&Ln(t)}),t),t.g={}}function de(){this.g=!0}function we(t,n,e,i){t.info((function(){return"XMLHTTP TEXT ("+n+"): "+function(t,n){if(!t.g)return n;if(!n)return null;try{var e=JSON.parse(n);if(e)for(t=0;t<e.length;t++)if(Array.isArray(e[t])){var i=e[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Qn(e)}catch(t){return n}}(t,e)+(i?" "+i:"")}))}ce.prototype.M=function(){ce.Z.M.call(this),fe(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},de.prototype.Aa=function(){this.g=!1},de.prototype.info=function(){};var me={},pe=null;function ge(){return pe=pe||new Kn}function ye(t){Dn.call(this,me.Ma,t)}function ve(t){const n=ge();Hn(n,new ye(n,t))}function be(t,n){Dn.call(this,me.STAT_EVENT,t),this.stat=n}function Ie(t){const n=ge();Hn(n,new be(n,t))}function Ee(t,n){Dn.call(this,me.Na,t),this.size=n}function De(t,n){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Rt.setTimeout((function(){t()}),n)}me.Ma="serverreachability",Bt(ye,Dn),me.STAT_EVENT="statevent",Bt(be,Dn),me.Na="timingevent",Bt(Ee,Dn);var Te={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Se={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ae(){}function Ce(){}Ae.prototype.h=null;var xe,Ne={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ke(){Dn.call(this,"d")}function Re(){Dn.call(this,"c")}function Me(){}function Oe(t,n,e,i){this.l=t,this.j=n,this.m=e,this.X=i||1,this.V=new ce(this),this.P=_e,this.W=new se(t=ln?125:void 0),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new $e}function $e(){this.i=null,this.g="",this.h=!1}Bt(ke,Dn),Bt(Re,Dn),Bt(Me,Ae),Me.prototype.g=function(){return new XMLHttpRequest},Me.prototype.i=function(){return{}},xe=new Me;var _e=45e3,Pe={},Ve={};function Fe(t,n,e){t.K=1,t.v=hi(ni(n)),t.s=e,t.U=!0,Le(t,null)}function Le(t,n){t.F=Date.now(),je(t),t.A=ni(t.v);var e=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),bi(e.h,"t",i),t.C=0,e=t.l.H,t.h=new $e,t.g=bs(t.l,e?n:null,!t.s),0<t.O&&(t.L=new ue(Lt(t.Ia,t,t.g),t.O)),le(t.V,t.g,"readystatechange",t.gb),n=t.H?nn(t.H):{},t.s?(t.u||(t.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,n)):(t.u="GET",t.g.ea(t.A,t.u,null,n)),ve(1),function(t,n,e,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",h=r.split("&"),u=0;u<h.length;u++){var c=h[u].split("=");if(1<c.length){var a=c[0];c=c[1];var l=a.split("_");o=2<=l.length&&"type"==l[1]?o+(a+"=")+c+"&":o+(a+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+n+"\n"+e+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Ue(t){return!!t.g&&"GET"==t.u&&2!=t.K&&t.l.Ba}function Be(t,n,e){let i,s=!0;for(;!t.I&&t.C<e.length;){if(i=qe(t,e),i==Ve){4==n&&(t.o=4,Ie(14),s=!1),we(t.j,t.m,null,"[Incomplete Response]");break}if(i==Pe){t.o=4,Ie(15),we(t.j,t.m,e,"[Invalid Chunk]"),s=!1;break}we(t.j,t.m,i,null),Qe(t,i)}Ue(t)&&i!=Ve&&i!=Pe&&(t.h.g="",t.C=0),4!=n||0!=e.length||t.h.h||(t.o=1,Ie(16),s=!1),t.i=t.i&&s,s?0<e.length&&!t.aa&&(t.aa=!0,(n=t.l).g==t&&n.$&&!n.L&&(n.h.info("Great, no buffering proxy detected. Bytes received: "+e.length),fs(n),n.L=!0,Ie(11))):(we(t.j,t.m,e,"[Invalid Chunked Response]"),ze(t),He(t))}function qe(t,n){var e=t.C,i=n.indexOf("\n",e);return-1==i?Ve:(e=Number(n.substring(e,i)),isNaN(e)?Pe:(i+=1)+e>n.length?Ve:(n=n.substr(i,e),t.C=i+e,n))}function je(t){t.Y=Date.now()+t.P,Ge(t,t.P)}function Ge(t,n){if(null!=t.B)throw Error("WatchDog timer not null");t.B=De(Lt(t.eb,t),n)}function Ke(t){t.B&&(Rt.clearTimeout(t.B),t.B=null)}function He(t){0==t.l.G||t.I||ms(t.l,t)}function ze(t){Ke(t);var n=t.L;n&&"function"==typeof n.na&&n.na(),t.L=null,re(t.W),fe(t.V),t.g&&(n=t.g,t.g=null,n.abort(),n.na())}function Qe(t,n){try{var e=t.l;if(0!=e.G&&(e.g==t||Ai(e.i,t)))if(e.I=t.N,!t.J&&Ai(e.i,t)&&3==e.G){try{var i=e.Ca.g.parse(n)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!e.u){if(e.g){if(!(e.g.F+3e3<t.F))break t;ws(e),is(e)}ls(e),Ie(18)}}else e.ta=s[1],0<e.ta-e.U&&37500>s[2]&&e.N&&0==e.A&&!e.v&&(e.v=De(Lt(e.ab,e),6e3));if(1>=Si(e.i)&&e.ka){try{e.ka()}catch(t){}e.ka=void 0}}else gs(e,11)}else if((t.J||e.g==t)&&ws(e),!zt(n))for(s=e.Ca.g.parse(n),n=0;n<s.length;n++){let c=s[n];if(e.U=c[0],c=c[1],2==e.G)if("c"==c[0]){e.J=c[1],e.la=c[2];const n=c[3];null!=n&&(e.ma=n,e.h.info("VER="+e.ma));const s=c[4];null!=s&&(e.za=s,e.h.info("SVER="+e.za));const a=c[5];null!=a&&"number"==typeof a&&0<a&&(e.K=i=1.5*a,e.h.info("backChannelRequestTimeoutMs_="+i)),i=e;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(Xt(t,"spdy")||Xt(t,"quic")||Xt(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ci(r,r.h),r.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,oi(i.F,i.D,t))}}e.G=3,e.j&&e.j.xa(),e.$&&(e.O=Date.now()-t.F,e.h.info("Handshake RTT: "+e.O+"ms"));var o=t;if((i=e).oa=vs(i,i.H?i.la:null,i.W),o.J){xi(i.i,o);var h=o,u=i.K;u&&h.setTimeout(u),h.B&&(Ke(h),je(h)),i.g=o}else as(i);0<e.l.length&&os(e)}else"stop"!=c[0]&&"close"!=c[0]||gs(e,7);else 3==e.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?gs(e,7):es(e):"noop"!=c[0]&&e.j&&e.j.wa(c),e.A=0)}ve(4)}catch(t){}}function We(t,n){if(t.forEach&&"function"==typeof t.forEach)t.forEach(n,void 0);else if(Ot(t)||"string"==typeof t)Gt(t,n,void 0);else{if(t.T&&"function"==typeof t.T)var e=t.T();else if(t.R&&"function"==typeof t.R)e=void 0;else if(Ot(t)||"string"==typeof t){e=[];for(var i=t.length,s=0;s<i;s++)e.push(s)}else for(s in e=[],i=0,t)e[i++]=s;s=(i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Ot(t)){for(var n=[],e=t.length,i=0;i<e;i++)n.push(t[i]);return n}for(i in n=[],e=0,t)n[e++]=t[i];return n}(t)).length;for(var r=0;r<s;r++)n.call(void 0,i[r],e&&e[r],t)}}function Xe(t,n){this.h={},this.g=[],this.i=0;var e=arguments.length;if(1<e){if(e%2)throw Error("Uneven number of arguments");for(var i=0;i<e;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Xe)for(e=t.T(),i=0;i<e.length;i++)this.set(e[i],t.get(e[i]));else for(i in t)this.set(i,t[i])}function Ye(t){if(t.i!=t.g.length){for(var n=0,e=0;n<t.g.length;){var i=t.g[n];Je(t.h,i)&&(t.g[e++]=i),n++}t.g.length=e}if(t.i!=t.g.length){var s={};for(e=n=0;n<t.g.length;)Je(s,i=t.g[n])||(t.g[e++]=i,s[i]=1),n++;t.g.length=e}}function Je(t,n){return Object.prototype.hasOwnProperty.call(t,n)}(xt=Oe.prototype).setTimeout=function(t){this.P=t},xt.gb=function(t){t=t.target;const n=this.L;n&&3==Yi(t)?n.l():this.Ia(t)},xt.Ia=function(t){try{if(t==this.g)t:{const a=Yi(this.g);var n=this.g.Da();const l=this.g.ba();if(!(3>a)&&(3!=a||ln||this.g&&(this.h.h||this.g.ga()||Ji(this.g)))){this.I||4!=a||7==n||ve(8==n||0>=l?3:2),Ke(this);var e=this.g.ba();this.N=e;n:if(Ue(this)){var i=Ji(this.g);t="";var s=i.length,r=4==Yi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ze(this),He(this);var o="";break n}this.h.i=new Rt.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,t+=this.h.i.decode(i[n],{stream:r&&n==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==e,function(t,n,e,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+n+"\n"+e+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,a,e),this.i){if(this.$&&!this.J){n:{if(this.g){var h,u=this.g;if((h=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zt(h)){var c=h;break n}}c=null}if(!(e=c)){this.i=!1,this.o=3,Ie(12),ze(this),He(this);break t}we(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qe(this,e)}this.U?(Be(this,a,o),ln&&this.i&&3==a&&(le(this.V,this.W,"tick",this.fb),this.W.start())):(we(this.j,this.m,o,null),Qe(this,o)),4==a&&ze(this),this.i&&!this.I&&(4==a?ms(this.l,this):(this.i=!1,je(this)))}else 400==e&&0<o.indexOf("Unknown SID")?(this.o=3,Ie(12)):(this.o=0,Ie(13)),ze(this),He(this)}}}catch(t){}},xt.fb=function(){if(this.g){var t=Yi(this.g),n=this.g.ga();this.C<n.length&&(Ke(this),Be(this,t,n),this.i&&4!=t&&je(this))}},xt.cancel=function(){this.I=!0,ze(this)},xt.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,n){t.info((function(){return"TIMEOUT: "+n}))}(this.j,this.A),2!=this.K&&(ve(3),Ie(17)),ze(this),this.o=2,He(this)):Ge(this,this.Y-t)},(xt=Xe.prototype).R=function(){Ye(this);for(var t=[],n=0;n<this.g.length;n++)t.push(this.h[this.g[n]]);return t},xt.T=function(){return Ye(this),this.g.concat()},xt.get=function(t,n){return Je(this.h,t)?this.h[t]:n},xt.set=function(t,n){Je(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=n},xt.forEach=function(t,n){for(var e=this.T(),i=0;i<e.length;i++){var s=e[i],r=this.get(s);t.call(n,r,s,this)}};var Ze=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ti(t,n){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ti){this.g=void 0!==n?n:t.g,ei(this,t.j),this.s=t.s,ii(this,t.i),si(this,t.m),this.l=t.l,n=t.h;var e=new pi;e.i=n.i,n.g&&(e.g=new Xe(n.g),e.h=n.h),ri(this,e),this.o=t.o}else t&&(e=String(t).match(Ze))?(this.g=!!n,ei(this,e[1]||"",!0),this.s=ui(e[2]||""),ii(this,e[3]||"",!0),si(this,e[4]),this.l=ui(e[5]||"",!0),ri(this,e[6]||"",!0),this.o=ui(e[7]||"")):(this.g=!!n,this.h=new pi(null,this.g))}function ni(t){return new ti(t)}function ei(t,n,e){t.j=e?ui(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function ii(t,n,e){t.i=e?ui(n,!0):n}function si(t,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);t.m=n}else t.m=null}function ri(t,n,e){n instanceof pi?(t.h=n,function(t,n){n&&!t.j&&(gi(t),t.i=null,t.g.forEach((function(t,n){var e=n.toLowerCase();n!=e&&(yi(this,n),bi(this,e,t))}),t)),t.j=n}(t.h,t.g)):(e||(n=ci(n,wi)),t.h=new pi(n,t.g))}function oi(t,n,e){t.h.set(n,e)}function hi(t){return oi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ui(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ci(t,n,e){return"string"==typeof t?(t=encodeURI(t).replace(n,ai),e&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ai(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ti.prototype.toString=function(){var t=[],n=this.j;n&&t.push(ci(n,li,!0),":");var e=this.i;return(e||"file"==n)&&(t.push("//"),(n=this.s)&&t.push(ci(n,li,!0),"@"),t.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(e=this.m)&&t.push(":",String(e))),(e=this.l)&&(this.i&&"/"!=e.charAt(0)&&t.push("/"),t.push(ci(e,"/"==e.charAt(0)?di:fi,!0))),(e=this.h.toString())&&t.push("?",e),(e=this.o)&&t.push("#",ci(e,mi)),t.join("")};var li=/[#\/\?@]/g,fi=/[#\?:]/g,di=/[#\?]/g,wi=/[#\?@]/g,mi=/#/g;function pi(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function gi(t){t.g||(t.g=new Xe,t.h=0,t.i&&function(t,n){if(t){t=t.split("&");for(var e=0;e<t.length;e++){var i=t[e].indexOf("="),s=null;if(0<=i){var r=t[e].substring(0,i);s=t[e].substring(i+1)}else r=t[e];n(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(n,e){t.add(decodeURIComponent(n.replace(/\+/g," ")),e)})))}function yi(t,n){gi(t),n=Ii(t,n),Je(t.g.h,n)&&(t.i=null,t.h-=t.g.get(n).length,Je((t=t.g).h,n)&&(delete t.h[n],t.i--,t.g.length>2*t.i&&Ye(t)))}function vi(t,n){return gi(t),n=Ii(t,n),Je(t.g.h,n)}function bi(t,n,e){yi(t,n),0<e.length&&(t.i=null,t.g.set(Ii(t,n),Ht(e)),t.h+=e.length)}function Ii(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function Ei(t){this.l=t||Di,t=Rt.PerformanceNavigationTiming?0<(t=Rt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(Rt.g&&Rt.g.Ea&&Rt.g.Ea()&&Rt.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}(xt=pi.prototype).add=function(t,n){gi(this),this.i=null,t=Ii(this,t);var e=this.g.get(t);return e||this.g.set(t,e=[]),e.push(n),this.h+=1,this},xt.forEach=function(t,n){gi(this),this.g.forEach((function(e,i){Gt(e,(function(e){t.call(n,e,i,this)}),this)}),this)},xt.T=function(){gi(this);for(var t=this.g.R(),n=this.g.T(),e=[],i=0;i<n.length;i++)for(var s=t[i],r=0;r<s.length;r++)e.push(n[i]);return e},xt.R=function(t){gi(this);var n=[];if("string"==typeof t)vi(this,t)&&(n=Kt(n,this.g.get(Ii(this,t))));else{t=this.g.R();for(var e=0;e<t.length;e++)n=Kt(n,t[e])}return n},xt.set=function(t,n){return gi(this),this.i=null,vi(this,t=Ii(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},xt.get=function(t,n){return t&&0<(t=this.R(t)).length?String(t[0]):n},xt.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],n=this.g.T(),e=0;e<n.length;e++){var i=n[e],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};var Di=10;function Ti(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Si(t){return t.h?1:t.g?t.g.size:0}function Ai(t,n){return t.h?t.h==n:!!t.g&&t.g.has(n)}function Ci(t,n){t.g?t.g.add(n):t.h=n}function xi(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}function Ni(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let n=t.i;for(const e of t.g.values())n=n.concat(e.D);return n}return Ht(t.i)}function ki(){}function Ri(){this.g=new ki}function Mi(t,n,e){const i=e||"";try{We(t,(function(t,e){let s=t;$t(t)&&(s=Qn(t)),n.push(i+e+"="+encodeURIComponent(s))}))}catch(t){throw n.push(i+"type="+encodeURIComponent("_badmap")),t}}function Oi(t,n,e,i,s){try{n.onload=null,n.onerror=null,n.onabort=null,n.ontimeout=null,s(i)}catch(t){}}function $i(t){this.l=t.$b||null,this.j=t.ib||!1}function _i(t,n){Kn.call(this),this.D=t,this.u=n,this.m=void 0,this.readyState=Pi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ei.prototype.cancel=function(){if(this.i=Ni(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ki.prototype.stringify=function(t){return Rt.JSON.stringify(t,void 0)},ki.prototype.parse=function(t){return Rt.JSON.parse(t,void 0)},Bt($i,Ae),$i.prototype.g=function(){return new _i(this.l,this.j)},$i.prototype.i=function(t){return function(){return t}}({}),Bt(_i,Kn);var Pi=0;function Vi(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Li(t)}function Li(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(xt=_i.prototype).open=function(t,n){if(this.readyState!=Pi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=n,this.readyState=1,Li(this)},xt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const n={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(n.body=t),(this.D||Rt).fetch(new Request(this.B,n)).then(this.Va.bind(this),this.ha.bind(this))},xt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fi(this)),this.readyState=Pi},xt.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Rt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vi(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},xt.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var n=t.value?t.value:new Uint8Array(0);(n=this.A.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?Fi(this):Li(this),3==this.readyState&&Vi(this)}},xt.Ua=function(t){this.g&&(this.response=this.responseText=t,Fi(this))},xt.Ta=function(t){this.g&&(this.response=t,Fi(this))},xt.ha=function(){this.g&&Fi(this)},xt.setRequestHeader=function(t,n){this.v.append(t,n)},xt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},xt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],n=this.h.entries();for(var e=n.next();!e.done;)t.push((e=e.value)[0]+": "+e[1]),e=n.next();return t.join("\r\n")},Object.defineProperty(_i.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ui=Rt.JSON.parse;function Bi(t){Kn.call(this),this.headers=new Xe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qi,this.K=this.L=!1}Bt(Bi,Kn);var qi="",ji=/^https?$/i,Gi=["POST","PUT"];function Ki(t){return"content-type"==t.toLowerCase()}function Hi(t,n){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=n,t.m=5,zi(t),Wi(t)}function zi(t){t.D||(t.D=!0,Hn(t,"complete"),Hn(t,"error"))}function Qi(t){if(t.h&&void 0!==kt&&(!t.C[1]||4!=Yi(t)||2!=t.ba()))if(t.v&&4==Yi(t))oe(t.Fa,0,t);else if(Hn(t,"readystatechange"),4==Yi(t)){t.h=!1;try{const h=t.ba();t:switch(h){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break t;default:n=!1}var e;if(!(e=n)){var i;if(i=0===h){var s=String(t.H).match(Ze)[1]||null;if(!s&&Rt.self&&Rt.self.location){var r=Rt.self.location.protocol;s=r.substr(0,r.length-1)}i=!ji.test(s?s.toLowerCase():"")}e=i}if(e)Hn(t,"complete"),Hn(t,"success");else{t.m=6;try{var o=2<Yi(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",zi(t)}}finally{Wi(t)}}}function Wi(t,n){if(t.g){Xi(t);const e=t.g,i=t.C[0]?Mt:null;t.g=null,t.C=null,n||Hn(t,"ready");try{e.onreadystatechange=i}catch(t){}}}function Xi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Rt.clearTimeout(t.A),t.A=null)}function Yi(t){return t.g?t.g.readyState:0}function Ji(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qi:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Zi(t,n,e){t:{for(i in e){var i=!1;break t}i=!0}i||(e=function(t){let n="";return tn(t,(function(t,e){n+=e,n+=":",n+=t,n+="\r\n"})),n}(e),"string"==typeof t?null!=e&&encodeURIComponent(String(e)):oi(t,n,e))}function ts(t,n,e){return e&&e.internalChannelParams&&e.internalChannelParams[t]||n}function ns(t){this.za=0,this.l=[],this.h=new de,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ts("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ts("baseRetryDelayMs",5e3,t),this.$a=ts("retryDelaySeedMs",1e4,t),this.Ya=ts("forwardChannelMaxRetries",2,t),this.ra=ts("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ei(t&&t.concurrentRequestLimit),this.Ca=new Ri,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function es(t){if(ss(t),3==t.G){var n=t.V++,e=ni(t.F);oi(e,"SID",t.J),oi(e,"RID",n),oi(e,"TYPE","terminate"),us(t,e),(n=new Oe(t,t.h,n,void 0)).K=2,n.v=hi(ni(e)),e=!1,Rt.navigator&&Rt.navigator.sendBeacon&&(e=Rt.navigator.sendBeacon(n.v.toString(),"")),!e&&Rt.Image&&((new Image).src=n.v,e=!0),e||(n.g=bs(n.l,null),n.g.ea(n.v)),n.F=Date.now(),je(n)}ys(t)}function is(t){t.g&&(fs(t),t.g.cancel(),t.g=null)}function ss(t){is(t),t.u&&(Rt.clearTimeout(t.u),t.u=null),ws(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Rt.clearTimeout(t.m),t.m=null)}function rs(t,n){t.l.push(new class{constructor(t,n){this.h=t,this.g=n}}(t.Za++,n)),3==t.G&&os(t)}function os(t){Ti(t.i)||t.m||(t.m=!0,te(t.Ha,t),t.C=0)}function hs(t,n){var e;e=n?n.m:t.V++;const i=ni(t.F);oi(i,"SID",t.J),oi(i,"RID",e),oi(i,"AID",t.U),us(t,i),t.o&&t.s&&Zi(i,t.o,t.s),e=new Oe(t,t.h,e,t.C+1),null===t.o&&(e.H=t.s),n&&(t.l=n.D.concat(t.l)),n=cs(t,e,1e3),e.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ci(t.i,e),Fe(e,i,n)}function us(t,n){t.j&&We({},(function(t,e){oi(n,e,t)}))}function cs(t,n,e){e=Math.min(t.l.length,e);var i=t.j?Lt(t.j.Oa,t.j,t):null;t:{var s=t.l;let n=-1;for(;;){const t=["count="+e];-1==n?0<e?(n=s[0].h,t.push("ofs="+n)):n=0:t.push("ofs="+n);let r=!0;for(let o=0;o<e;o++){let e=s[o].h;const h=s[o].g;if(e-=n,0>e)n=Math.max(0,s[o].h-100),r=!1;else try{Mi(h,t,"req"+e+"_")}catch(t){i&&i(h)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,e),n.D=t,i}function as(t){t.g||t.u||(t.Y=1,te(t.Ga,t),t.A=0)}function ls(t){return!(t.g||t.u||3<=t.A||(t.Y++,t.u=De(Lt(t.Ga,t),ps(t,t.A)),t.A++,0))}function fs(t){null!=t.B&&(Rt.clearTimeout(t.B),t.B=null)}function ds(t){t.g=new Oe(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var n=ni(t.oa);oi(n,"RID","rpc"),oi(n,"SID",t.J),oi(n,"CI",t.N?"0":"1"),oi(n,"AID",t.U),us(t,n),oi(n,"TYPE","xmlhttp"),t.o&&t.s&&Zi(n,t.o,t.s),t.K&&t.g.setTimeout(t.K);var e=t.g;t=t.la,e.K=1,e.v=hi(ni(n)),e.s=null,e.U=!0,Le(e,t)}function ws(t){null!=t.v&&(Rt.clearTimeout(t.v),t.v=null)}function ms(t,n){var e=null;if(t.g==n){ws(t),fs(t),t.g=null;var i=2}else{if(!Ai(t.i,n))return;e=n.D,xi(t.i,n),i=1}if(t.I=n.N,0!=t.G)if(n.i)if(1==i){e=n.s?n.s.length:0,n=Date.now()-n.F;var s=t.C;Hn(i=ge(),new Ee(i,e,n,s)),os(t)}else as(t);else if(3==(s=n.o)||0==s&&0<t.I||!(1==i&&function(t,n){return!(Si(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=n.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=De(Lt(t.Ha,t,n),ps(t,t.C)),t.C++,0)))}(t,n)||2==i&&ls(t)))switch(e&&0<e.length&&(n=t.i,n.i=n.i.concat(e)),s){case 1:gs(t,5);break;case 4:gs(t,10);break;case 3:gs(t,6);break;default:gs(t,2)}}function ps(t,n){let e=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(e*=2),e*n}function gs(t,n){if(t.h.info("Error code "+n),2==n){var e=null;t.j&&(e=null);var i=Lt(t.jb,t);e||(e=new ti("//www.google.com/images/cleardot.gif"),Rt.location&&"http"==Rt.location.protocol||ei(e,"https"),hi(e)),function(t,n){const e=new de;if(Rt.Image){const i=new Image;i.onload=Ut(Oi,e,i,"TestLoadImage: loaded",!0,n),i.onerror=Ut(Oi,e,i,"TestLoadImage: error",!1,n),i.onabort=Ut(Oi,e,i,"TestLoadImage: abort",!1,n),i.ontimeout=Ut(Oi,e,i,"TestLoadImage: timeout",!1,n),Rt.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else n(!1)}(e.toString(),i)}else Ie(2);t.G=0,t.j&&t.j.va(n),ys(t),ss(t)}function ys(t){t.G=0,t.I=-1,t.j&&(0==Ni(t.i).length&&0==t.l.length||(t.i.i.length=0,Ht(t.l),t.l.length=0),t.j.ua())}function vs(t,n,e){let i=function(t){return t instanceof ti?ni(t):new ti(t,void 0)}(e);if(""!=i.i)n&&ii(i,n+"."+i.i),si(i,i.m);else{const t=Rt.location;i=function(t,n,e,i){var s=new ti(null,void 0);return t&&ei(s,t),n&&ii(s,n),e&&si(s,e),i&&(s.l=i),s}(t.protocol,n?n+"."+t.hostname:t.hostname,+t.port,e)}return t.aa&&tn(t.aa,(function(t,n){oi(i,n,t)})),e=t.sa,(n=t.D)&&e&&oi(i,n,e),oi(i,"VER",t.ma),us(t,i),i}function bs(t,n,e){if(n&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(n=new Bi(e&&t.Ba&&!t.qa?new $i({ib:!0}):t.qa)).L=t.H,n}function Is(){}function Es(){if(cn&&!(10<=Number(In)))throw Error("Environmental error: no available transport.")}function Ds(t,n){Kn.call(this),this.g=new ns(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.ya&&(t?t["X-WebChannel-Client-Profile"]=n.ya:t={"X-WebChannel-Client-Profile":n.ya}),this.g.P=t,(t=n&&n.httpHeadersOverwriteParam)&&!zt(t)&&(this.g.o=t),this.A=n&&n.supportsCrossDomainXhr||!1,this.v=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!zt(n)&&(this.g.D=n,null!==(t=this.h)&&n in t&&n in(t=this.h)&&delete t[n]),this.j=new As(this)}function Ts(t){ke.call(this);var n=t.__sm__;if(n){t:{for(const e in n){t=e;break t}t=void 0}(this.i=t)&&(t=this.i,n=null!==n&&t in n?n[t]:void 0),this.data=n}else this.data=t}function Ss(){Re.call(this),this.status=1}function As(t){this.g=t}(xt=Bi.prototype).ea=function(t,n,e,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);n=n?n.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xe.g(),this.C=function(t){return t.h||(t.h=t.i())}(this.u?this.u:xe),this.g.onreadystatechange=Lt(this.Fa,this);try{this.F=!0,this.g.open(n,String(t),!0),this.F=!1}catch(t){return void Hi(this,t)}t=e||"";const s=new Xe(this.headers);i&&We(i,(function(t,n){s.set(n,t)})),i=function(t){t:{var n=Ki;const e=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<e;s++)if(s in i&&n.call(void 0,i[s],s,t)){n=s;break t}n=-1}return 0>n?null:"string"==typeof t?t.charAt(n):t[n]}(s.T()),e=Rt.FormData&&t instanceof Rt.FormData,!(0<=jt(Gi,n))||i||e||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,n){this.g.setRequestHeader(n,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xi(this),0<this.B&&((this.K=function(t){return cn&&bn()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Lt(this.pa,this)):this.A=oe(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Hi(this,t)}},xt.pa=function(){void 0!==kt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Hn(this,"timeout"),this.abort(8))},xt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Hn(this,"complete"),Hn(this,"abort"),Wi(this))},xt.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wi(this,!0)),Bi.Z.M.call(this)},xt.Fa=function(){this.s||(this.F||this.v||this.l?Qi(this):this.cb())},xt.cb=function(){Qi(this)},xt.ba=function(){try{return 2<Yi(this)?this.g.status:-1}catch(t){return-1}},xt.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},xt.Qa=function(t){if(this.g){var n=this.g.responseText;return t&&0==n.indexOf(t)&&(n=n.substring(t.length)),Ui(n)}},xt.Da=function(){return this.m},xt.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(xt=ns.prototype).ma=8,xt.G=1,xt.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},xt.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Oe(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=nn(r),sn(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var n=0,e=0;e<this.l.length;e++){var i=this.l[e];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(n+=i)){n=e;break t}if(4096===n||e===this.l.length-1){n=e+1;break t}}n=1e3}else n=1e3;n=cs(this,s,n),oi(e=ni(this.F),"RID",t),oi(e,"CVER",22),this.D&&oi(e,"X-HTTP-Session-Id",this.D),us(this,e),this.o&&r&&Zi(e,this.o,r),Ci(this.i,s),this.Ra&&oi(e,"TYPE","init"),this.ja?(oi(e,"$req",n),oi(e,"SID","null"),s.$=!0,Fe(s,e,null)):Fe(s,e,n),this.G=2}}else 3==this.G&&(t?hs(this,t):0==this.l.length||Ti(this.i)||hs(this))},xt.Ga=function(){if(this.u=null,ds(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=De(Lt(this.bb,this),t)}},xt.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ie(10),is(this),ds(this))},xt.ab=function(){null!=this.v&&(this.v=null,is(this),ls(this),Ie(19))},xt.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ie(2)):(this.h.info("Failed to ping google.com"),Ie(1))},(xt=Is.prototype).xa=function(){},xt.wa=function(){},xt.va=function(){},xt.ua=function(){},xt.Oa=function(){},Es.prototype.g=function(t,n){return new Ds(t,n)},Bt(Ds,Kn),Ds.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,n=this.l,e=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),te(Lt(t.hb,t,n))),Ie(0),t.W=n,t.aa=e||{},t.N=t.X,t.F=vs(t,null,t.W),os(t)},Ds.prototype.close=function(){es(this.g)},Ds.prototype.u=function(t){if("string"==typeof t){var n={};n.__data__=t,rs(this.g,n)}else this.v?((n={}).__data__=Qn(t),rs(this.g,n)):rs(this.g,t)},Ds.prototype.M=function(){this.g.j=null,delete this.j,es(this.g),delete this.g,Ds.Z.M.call(this)},Bt(Ts,ke),Bt(Ss,Re),Bt(As,Is),As.prototype.xa=function(){Hn(this.g,"a")},As.prototype.wa=function(t){Hn(this.g,new Ts(t))},As.prototype.va=function(t){Hn(this.g,new Ss(t))},As.prototype.ua=function(){Hn(this.g,"b")},Es.prototype.createWebChannel=Es.prototype.g,Ds.prototype.send=Ds.prototype.u,Ds.prototype.open=Ds.prototype.m,Ds.prototype.close=Ds.prototype.close,Te.NO_ERROR=0,Te.TIMEOUT=8,Te.HTTP_ERROR=6,Se.COMPLETE="complete",Ce.EventType=Ne,Ne.OPEN="a",Ne.CLOSE="b",Ne.ERROR="c",Ne.MESSAGE="d",Kn.prototype.listen=Kn.prototype.N,Bi.prototype.listenOnce=Bi.prototype.O,Bi.prototype.getLastError=Bi.prototype.La,Bi.prototype.getLastErrorCode=Bi.prototype.Da,Bi.prototype.getStatus=Bi.prototype.ba,Bi.prototype.getResponseJson=Bi.prototype.Qa,Bi.prototype.getResponseText=Bi.prototype.ga,Bi.prototype.send=Bi.prototype.ea;var Cs=Te,xs=Se,Ns=me,ks=$i,Rs=Ce,Ms=Bi;const Os="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$s.UNAUTHENTICATED=new $s(null),$s.GOOGLE_CREDENTIALS=new $s("google-credentials-uid"),$s.FIRST_PARTY=new $s("first-party-uid"),$s.MOCK_USER=new $s("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let _s="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new it("@firebase/firestore");function Vs(){return Ps.logLevel}function Fs(t,...n){if(Ps.logLevel<=J.DEBUG){const e=n.map(Bs);Ps.debug(`Firestore (${_s}): ${t}`,...e)}}function Ls(t,...n){if(Ps.logLevel<=J.ERROR){const e=n.map(Bs);Ps.error(`Firestore (${_s}): ${t}`,...e)}}function Us(t,...n){if(Ps.logLevel<=J.WARN){const e=n.map(Bs);Ps.warn(`Firestore (${_s}): ${t}`,...e)}}function Bs(t){if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(n){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t="Unexpected state"){const n=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+t;throw Ls(n),new Error(n)}function js(t){t||qs()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ks extends v{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Qs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n($s.UNAUTHENTICATED)))}shutdown(){}}class Ws{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Xs{constructor(t){this.t=t,this.currentUser=$s.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let e=this.i;const i=t=>this.i!==e?(e=this.i,n(t)):Promise.resolve();let s=new Hs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hs,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const n=s;t.enqueueRetryable((async()=>{await n.promise,await i(this.currentUser)}))},o=t=>{Fs("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Fs("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hs)}}),0),r()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((n=>this.i!==t?(Fs("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(js("string"==typeof n.accessToken),new zs(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return js(null===t||"string"==typeof t),new $s(t)}}class Ys{constructor(t,n,e){this.type="FirstParty",this.user=$s.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),e&&this.headers.set("X-Goog-Iam-Authorization-Token",e)}}class Js{constructor(t,n,e){this.h=t,this.l=n,this.m=e}getToken(){return Promise.resolve(new Ys(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable((()=>n($s.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const e=t=>{null!=t.error&&Fs("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const e=t.token!==this.p;return this.p=t.token,Fs("FirebaseAppCheckTokenProvider",`Received ${e?"new":"existing"} token.`),e?n(t.token):Promise.resolve()};this.o=n=>{t.enqueueRetryable((()=>e(n)))};const i=t=>{Fs("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Fs("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(js("string"==typeof t.token),this.p=t.token,new Zs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=t=>this.I(t),this.T=t=>n.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t){const n="undefined"!=typeof self&&(self.crypto||self.msCrypto),e=new Uint8Array(t);if(n&&"function"==typeof n.getRandomValues)n.getRandomValues(e);else for(let n=0;n<t;n++)e[n]=Math.floor(256*Math.random());return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr.A=-1;class ir{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let e="";for(;e.length<20;){const i=er(40);for(let s=0;s<i.length;++s)e.length<20&&i[s]<n&&(e+=t.charAt(i[s]%t.length))}return e}}function sr(t,n){return t<n?-1:t>n?1:0}function rr(t,n,e){return t.length===n.length&&t.every(((t,i)=>e(t,n[i])))}function or(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Ks(Gs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ks(Gs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new Ks(Gs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ks(Gs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hr.fromMillis(Date.now())}static fromDate(t){return hr.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),e=Math.floor(1e6*(t-1e3*n));return new hr(n,e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?sr(this.nanoseconds,t.nanoseconds):sr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ur(t)}static min(){return new ur(new hr(0,0))}static max(){return new ur(new hr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){let n=0;for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&n++;return n}function ar(t,n){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&n(e,t[e])}function lr(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,n,e){void 0===n?n=0:n>t.length&&qs(),void 0===e?e=t.length-n:e>t.length-n&&qs(),this.segments=t,this.offset=n,this.len=e}get length(){return this.len}isEqual(t){return 0===fr.comparator(this,t)}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof fr?t.forEach((t=>{n.push(t)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return this.construct(this.segments,this.offset+(t=void 0===t?1:t),this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,e=this.limit();n<e;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const e=Math.min(t.length,n.length);for(let i=0;i<e;i++){const e=t.get(i),s=n.get(i);if(e<s)return-1;if(e>s)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class dr extends fr{construct(t,n,e){return new dr(t,n,e)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const e of t){if(e.indexOf("//")>=0)throw new Ks(Gs.INVALID_ARGUMENT,`Invalid segment (${e}). Paths must not contain // in them.`);n.push(...e.split("/").filter((t=>t.length>0)))}return new dr(n)}static emptyPath(){return new dr([])}}const wr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mr extends fr{construct(t,n,e){return new mr(t,n,e)}static isValidIdentifier(t){return wr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new mr(["__name__"])}static fromServerFormat(t){const n=[];let e="",i=0;const s=()=>{if(0===e.length)throw new Ks(Gs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(e),e=""};let r=!1;for(;i<t.length;){const n=t[i];if("\\"===n){if(i+1===t.length)throw new Ks(Gs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const n=t[i+1];if("\\"!==n&&"."!==n&&"`"!==n)throw new Ks(Gs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);e+=n,i+=2}else"`"===n?(r=!r,i++):"."!==n||r?(e+=n,i++):(s(),i++)}if(s(),r)throw new Ks(Gs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mr(n)}static emptyPath(){return new mr([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t){this.fields=t,t.sort(mr.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return rr(this.fields,t.fields,((t,n)=>t.isEqual(n)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new gr(n)}static fromUint8Array(t){const n=function(t){let n="";for(let e=0;e<t.length;++e)n+=String.fromCharCode(t[e]);return n}(t);return new gr(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return sr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gr.EMPTY_BYTE_STRING=new gr("");const yr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(js(!!t),"string"==typeof t){let n=0;const e=yr.exec(t);if(js(!!e),e[1]){let t=e[1];t=(t+"000000000").substr(0,9),n=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:n}}return{seconds:br(t.seconds),nanos:br(t.nanos)}}function br(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ir(t){return"string"==typeof t?gr.fromBase64String(t):gr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){var n,e;return"server_timestamp"===(null===(e=((null===(n=null==t?void 0:t.mapValue)||void 0===n?void 0:n.fields)||{}).__type__)||void 0===e?void 0:e.stringValue)}function Dr(t){const n=t.mapValue.fields.__previous_value__;return Er(n)?Dr(n):n}function Tr(t){const n=vr(t.mapValue.fields.__local_write_time__.timestampValue);return new hr(n.seconds,n.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,n,e,i,s,r,o,h){this.databaseId=t,this.appId=n,this.persistenceKey=e,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=h}}class Ar{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ar("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ar&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){return null==t}function xr(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{constructor(t){this.path=t}static fromPath(t){return new Nr(dr.fromString(t))}static fromName(t){return new Nr(dr.fromString(t).popFirst(5))}static empty(){return new Nr(dr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===dr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,n){return dr.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Nr(new dr(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Rr={nullValue:"NULL_VALUE"};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Er(t)?4:Hr(t)?9:10:qs()}function Or(t,n){if(t===n)return!0;const e=Mr(t);if(e!==Mr(n))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===n.booleanValue;case 4:return Tr(t).isEqual(Tr(n));case 3:return function(t,n){if("string"==typeof t.timestampValue&&"string"==typeof n.timestampValue&&t.timestampValue.length===n.timestampValue.length)return t.timestampValue===n.timestampValue;const e=vr(t.timestampValue),i=vr(n.timestampValue);return e.seconds===i.seconds&&e.nanos===i.nanos}(t,n);case 5:return t.stringValue===n.stringValue;case 6:return function(t,n){return Ir(t.bytesValue).isEqual(Ir(n.bytesValue))}(t,n);case 7:return t.referenceValue===n.referenceValue;case 8:return function(t,n){return br(t.geoPointValue.latitude)===br(n.geoPointValue.latitude)&&br(t.geoPointValue.longitude)===br(n.geoPointValue.longitude)}(t,n);case 2:return function(t,n){if("integerValue"in t&&"integerValue"in n)return br(t.integerValue)===br(n.integerValue);if("doubleValue"in t&&"doubleValue"in n){const e=br(t.doubleValue),i=br(n.doubleValue);return e===i?xr(e)===xr(i):isNaN(e)&&isNaN(i)}return!1}(t,n);case 9:return rr(t.arrayValue.values||[],n.arrayValue.values||[],Or);case 10:return function(t,n){const e=t.mapValue.fields||{},i=n.mapValue.fields||{};if(cr(e)!==cr(i))return!1;for(const t in e)if(e.hasOwnProperty(t)&&(void 0===i[t]||!Or(e[t],i[t])))return!1;return!0}(t,n);default:return qs()}}function $r(t,n){return void 0!==(t.values||[]).find((t=>Or(t,n)))}function _r(t,n){if(t===n)return 0;const e=Mr(t),i=Mr(n);if(e!==i)return sr(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return sr(t.booleanValue,n.booleanValue);case 2:return function(t,n){const e=br(t.integerValue||t.doubleValue),i=br(n.integerValue||n.doubleValue);return e<i?-1:e>i?1:e===i?0:isNaN(e)?isNaN(i)?0:-1:1}(t,n);case 3:return Pr(t.timestampValue,n.timestampValue);case 4:return Pr(Tr(t),Tr(n));case 5:return sr(t.stringValue,n.stringValue);case 6:return function(t,n){const e=Ir(t),i=Ir(n);return e.compareTo(i)}(t.bytesValue,n.bytesValue);case 7:return function(t,n){const e=t.split("/"),i=n.split("/");for(let t=0;t<e.length&&t<i.length;t++){const n=sr(e[t],i[t]);if(0!==n)return n}return sr(e.length,i.length)}(t.referenceValue,n.referenceValue);case 8:return function(t,n){const e=sr(br(t.latitude),br(n.latitude));return 0!==e?e:sr(br(t.longitude),br(n.longitude))}(t.geoPointValue,n.geoPointValue);case 9:return function(t,n){const e=t.values||[],i=n.values||[];for(let t=0;t<e.length&&t<i.length;++t){const n=_r(e[t],i[t]);if(n)return n}return sr(e.length,i.length)}(t.arrayValue,n.arrayValue);case 10:return function(t,n){const e=t.fields||{},i=Object.keys(e),s=n.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const n=sr(i[t],r[t]);if(0!==n)return n;const o=_r(e[i[t]],s[r[t]]);if(0!==o)return o}return sr(i.length,r.length)}(t.mapValue,n.mapValue);default:throw qs()}}function Pr(t,n){if("string"==typeof t&&"string"==typeof n&&t.length===n.length)return sr(t,n);const e=vr(t),i=vr(n),s=sr(e.seconds,i.seconds);return 0!==s?s:sr(e.nanos,i.nanos)}function Vr(t){return Fr(t)}function Fr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const n=vr(t);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ir(t.bytesValue).toBase64():"referenceValue"in t?Nr.fromName(t.referenceValue).toString():"geoPointValue"in t?`geo(${(n=t.geoPointValue).latitude},${n.longitude})`:"arrayValue"in t?function(t){let n="[",e=!0;for(const i of t.values||[])e?e=!1:n+=",",n+=Fr(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){const n=Object.keys(t.fields||{}).sort();let e="{",i=!0;for(const s of n)i?i=!1:e+=",",e+=`${s}:${Fr(t.fields[s])}`;return e+"}"}(t.mapValue):qs();var n}function Lr(t,n){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${n.path.canonicalString()}`}}function Ur(t){return!!t&&"integerValue"in t}function Br(t){return!!t&&"arrayValue"in t}function qr(t){return!!t&&"nullValue"in t}function jr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gr(t){return!!t&&"mapValue"in t}function Kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const n={mapValue:{fields:{}}};return ar(t.mapValue.fields,((t,e)=>n.mapValue.fields[t]=Kr(e))),n}if(t.arrayValue){const n={arrayValue:{values:[]}};for(let e=0;e<(t.arrayValue.values||[]).length;++e)n.arrayValue.values[e]=Kr(t.arrayValue.values[e]);return n}return Object.assign({},t)}function Hr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}function zr(t){return"nullValue"in t?Rr:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Lr(Ar.empty(),Nr.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:qs()}function Qr(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Lr(Ar.empty(),Nr.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?kr:qs()}function Wr(t,n){return void 0===t?n:void 0===n||_r(t,n)>0?t:n}function Xr(t,n){return void 0===t?n:void 0===n||_r(t,n)<0?t:n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t){this.value=t}static empty(){return new Yr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let e=0;e<t.length-1;++e)if(n=(n.mapValue.fields||{})[t.get(e)],!Gr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Kr(n)}setAll(t){let n=mr.emptyPath(),e={},i=[];t.forEach(((t,s)=>{if(!n.isImmediateParentOf(s)){const t=this.getFieldsMap(n);this.applyChanges(t,e,i),e={},i=[],n=s.popLast()}t?e[s.lastSegment()]=Kr(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(n);this.applyChanges(s,e,i)}delete(t){const n=this.field(t.popLast());Gr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Or(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let e=0;e<t.length;++e){let i=n.mapValue.fields[t.get(e)];Gr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(e)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,e){ar(n,((n,e)=>t[n]=e));for(const n of e)delete t[n]}clone(){return new Yr(Kr(this.value))}}function Jr(t){const n=[];return ar(t.fields,((t,e)=>{const i=new mr([t]);if(Gr(e)){const t=Jr(e.mapValue).fields;if(0===t.length)n.push(i);else for(const e of t)n.push(i.child(e))}else n.push(i)})),new pr(n)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zr{constructor(t,n,e,i,s,r){this.key=t,this.documentType=n,this.version=e,this.readTime=i,this.data=s,this.documentState=r}static newInvalidDocument(t){return new Zr(t,0,ur.min(),ur.min(),Yr.empty(),0)}static newFoundDocument(t,n,e){return new Zr(t,1,n,ur.min(),e,0)}static newNoDocument(t,n){return new Zr(t,2,n,ur.min(),Yr.empty(),0)}static newUnknownDocument(t,n){return new Zr(t,3,n,ur.min(),Yr.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Yr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Yr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Zr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Zr(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class to{constructor(t,n,e,i){this.indexId=t,this.collectionGroup=n,this.fields=e,this.indexState=i}}function no(t){return t.fields.find((t=>2===t.kind))}function eo(t){return t.fields.filter((t=>2!==t.kind))}to.UNKNOWN_ID=-1;class io{constructor(t,n){this.fieldPath=t,this.kind=n}}class so{constructor(t,n){this.sequenceNumber=t,this.offset=n}static empty(){return new so(0,oo.min())}}function ro(t){return new oo(t.readTime,t.key,-1)}class oo{constructor(t,n,e){this.readTime=t,this.documentKey=n,this.largestBatchId=e}static min(){return new oo(ur.min(),Nr.empty(),-1)}static max(){return new oo(ur.max(),Nr.empty(),-1)}}function ho(t,n){let e=t.readTime.compareTo(n.readTime);return 0!==e?e:(e=Nr.comparator(t.documentKey,n.documentKey),0!==e?e:sr(t.largestBatchId,n.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,n=null,e=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=n,this.orderBy=e,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.P=null}}function co(t,n=null,e=[],i=[],s=null,r=null,o=null){return new uo(t,n,e,i,s,r,o)}function ao(t){const n=t;if(null===n.P){let t=n.path.canonicalString();null!==n.collectionGroup&&(t+="|cg:"+n.collectionGroup),t+="|f:",t+=n.filters.map((t=>{return(n=t).field.canonicalString()+n.op.toString()+Vr(n.value);var n})).join(","),t+="|ob:",t+=n.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Cr(n.limit)||(t+="|l:",t+=n.limit),n.startAt&&(t+="|lb:",t+=n.startAt.inclusive?"b:":"a:",t+=n.startAt.position.map((t=>Vr(t))).join(",")),n.endAt&&(t+="|ub:",t+=n.endAt.inclusive?"a:":"b:",t+=n.endAt.position.map((t=>Vr(t))).join(",")),n.P=t}return n.P}function lo(t,n){if(t.limit!==n.limit)return!1;if(t.orderBy.length!==n.orderBy.length)return!1;for(let e=0;e<t.orderBy.length;e++)if(!xo(t.orderBy[e],n.orderBy[e]))return!1;if(t.filters.length!==n.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if((e=t.filters[s]).op!==(i=n.filters[s]).op||!e.field.isEqual(i.field)||!Or(e.value,i.value))return!1;var e,i;return t.collectionGroup===n.collectionGroup&&!!t.path.isEqual(n.path)&&!!ko(t.startAt,n.startAt)&&ko(t.endAt,n.endAt)}function fo(t){return Nr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function wo(t,n){return t.filters.filter((t=>t instanceof go&&t.field.isEqual(n)))}function mo(t,n,e){let i,s=!0;for(const e of wo(t,n)){let t,n=!0;switch(e.op){case"<":case"<=":t=zr(e.value);break;case"==":case"in":case">=":t=e.value;break;case">":t=e.value,n=!1;break;case"!=":case"not-in":t=Rr}Wr(i,t)===t&&(i=t,s=n)}if(null!==e)for(let r=0;r<t.orderBy.length;++r)if(t.orderBy[r].field.isEqual(n)){const t=e.position[r];Wr(i,t)===t&&(i=t,s=e.inclusive);break}return{value:i,inclusive:s}}function po(t,n,e){let i,s=!0;for(const e of wo(t,n)){let t,n=!0;switch(e.op){case">=":case">":t=Qr(e.value),n=!1;break;case"==":case"in":case"<=":t=e.value;break;case"<":t=e.value,n=!1;break;case"!=":case"not-in":t=kr}Xr(i,t)===t&&(i=t,s=n)}if(null!==e)for(let r=0;r<t.orderBy.length;++r)if(t.orderBy[r].field.isEqual(n)){const t=e.position[r];Xr(i,t)===t&&(i=t,s=e.inclusive);break}return{value:i,inclusive:s}}class go extends class{}{constructor(t,n,e){super(),this.field=t,this.op=n,this.value=e}static create(t,n,e){return t.isKeyField()?"in"===n||"not-in"===n?this.V(t,n,e):new yo(t,n,e):"array-contains"===n?new Eo(t,e):"in"===n?new Do(t,e):"not-in"===n?new To(t,e):"array-contains-any"===n?new So(t,e):new go(t,n,e)}static V(t,n,e){return"in"===n?new vo(t,e):new bo(t,e)}matches(t){const n=t.data.field(this.field);return"!="===this.op?null!==n&&this.v(_r(n,this.value)):null!==n&&Mr(this.value)===Mr(n)&&this.v(_r(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return qs()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class yo extends go{constructor(t,n,e){super(t,n,e),this.key=Nr.fromName(e.referenceValue)}matches(t){const n=Nr.comparator(t.key,this.key);return this.v(n)}}class vo extends go{constructor(t,n){super(t,"in",n),this.keys=Io(0,n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class bo extends go{constructor(t,n){super(t,"not-in",n),this.keys=Io(0,n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function Io(t,n){var e;return((null===(e=n.arrayValue)||void 0===e?void 0:e.values)||[]).map((t=>Nr.fromName(t.referenceValue)))}class Eo extends go{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Br(n)&&$r(n.arrayValue,this.value)}}class Do extends go{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return null!==n&&$r(this.value.arrayValue,n)}}class To extends go{constructor(t,n){super(t,"not-in",n)}matches(t){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return null!==n&&!$r(this.value.arrayValue,n)}}class So extends go{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Br(n)||!n.arrayValue.values)&&n.arrayValue.values.some((t=>$r(this.value.arrayValue,t)))}}class Ao{constructor(t,n){this.position=t,this.inclusive=n}}class Co{constructor(t,n="asc"){this.field=t,this.dir=n}}function xo(t,n){return t.dir===n.dir&&t.field.isEqual(n.field)}function No(t,n,e){let i=0;for(let s=0;s<t.position.length;s++){const r=n[s],o=t.position[s];if(i=r.field.isKeyField()?Nr.comparator(Nr.fromName(o.referenceValue),e.key):_r(o,e.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function ko(t,n){if(null===t)return null===n;if(null===n)return!1;if(t.inclusive!==n.inclusive||t.position.length!==n.position.length)return!1;for(let e=0;e<t.position.length;e++)if(!Or(t.position[e],n.position[e]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,n=null,e=[],i=[],s=null,r="F",o=null,h=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=e,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=h,this.D=null,this.C=null}}function Mo(t){return new Ro(t)}function Oo(t){return!Cr(t.limit)&&"F"===t.limitType}function $o(t){return!Cr(t.limit)&&"L"===t.limitType}function _o(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Po(t){for(const n of t.filters)if(n.S())return n.field;return null}function Vo(t){return null!==t.collectionGroup}function Fo(t){const n=t;if(null===n.D){n.D=[];const t=Po(n),e=_o(n);if(null!==t&&null===e)t.isKeyField()||n.D.push(new Co(t)),n.D.push(new Co(mr.keyField(),"asc"));else{let t=!1;for(const e of n.explicitOrderBy)n.D.push(e),e.field.isKeyField()&&(t=!0);if(!t){const t=n.explicitOrderBy.length>0?n.explicitOrderBy[n.explicitOrderBy.length-1].dir:"asc";n.D.push(new Co(mr.keyField(),t))}}}return n.D}function Lo(t){const n=t;if(!n.C)if("F"===n.limitType)n.C=co(n.path,n.collectionGroup,Fo(n),n.filters,n.limit,n.startAt,n.endAt);else{const t=[];for(const e of Fo(n))t.push(new Co(e.field,"desc"===e.dir?"asc":"desc"));const e=n.endAt?new Ao(n.endAt.position,!n.endAt.inclusive):null,i=n.startAt?new Ao(n.startAt.position,!n.startAt.inclusive):null;n.C=co(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}return n.C}function Uo(t,n,e){return new Ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,e,t.startAt,t.endAt)}function Bo(t,n){return lo(Lo(t),Lo(n))&&t.limitType===n.limitType}function qo(t){return`${ao(Lo(t))}|lt:${t.limitType}`}function jo(t){return`Query(target=${function(t){let n=t.path.canonicalString();return null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((t=>{return`${(n=t).field.canonicalString()} ${n.op} ${Vr(n.value)}`;var n})).join(", ")}]`),Cr(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((t=>Vr(t))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((t=>Vr(t))).join(",")),`Target(${n})`}(Lo(t))}; limitType=${t.limitType})`}function Go(t,n){return n.isFoundDocument()&&function(t,n){const e=n.key.path;return null!==t.collectionGroup?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(e):Nr.isDocumentKey(t.path)?t.path.isEqual(e):t.path.isImmediateParentOf(e)}(t,n)&&function(t,n){for(const e of t.explicitOrderBy)if(!e.field.isKeyField()&&null===n.data.field(e.field))return!1;return!0}(t,n)&&function(t,n){for(const e of t.filters)if(!e.matches(n))return!1;return!0}(t,n)&&function(t,n){return!(t.startAt&&!function(t,n,e){const i=No(t,n,e);return t.inclusive?i<=0:i<0}(t.startAt,Fo(t),n)||t.endAt&&!function(t,n,e){const i=No(t,n,e);return t.inclusive?i>=0:i>0}(t.endAt,Fo(t),n))}(t,n)}function Ko(t){return(n,e)=>{let i=!1;for(const s of Fo(t)){const t=Ho(s,n,e);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Ho(t,n,e){const i=t.field.isKeyField()?Nr.comparator(n.key,e.key):function(t,n,e){const i=n.data.field(t),s=e.data.field(t);return null!==i&&null!==s?_r(i,s):qs()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,n,e);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return qs()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,n){if(t.N){if(isNaN(n))return{doubleValue:"NaN"};if(n===1/0)return{doubleValue:"Infinity"};if(n===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(n)?"-0":n}}function Qo(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this._=void 0}}function Xo(t,n,e){return t instanceof Zo?function(t,n){const e={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return n&&(e.fields.__previous_value__=n),{mapValue:e}}(e,n):t instanceof th?nh(t,n):t instanceof eh?ih(t,n):function(t,n){const e=Jo(t,n),i=rh(e)+rh(t.k);return Ur(e)&&Ur(t.k)?Qo(i):zo(t.M,i)}(t,n)}function Yo(t,n,e){return t instanceof th?nh(t,n):t instanceof eh?ih(t,n):e}function Jo(t,n){return t instanceof sh?Ur(e=n)||function(t){return!!t&&"doubleValue"in t}(e)?n:{integerValue:0}:null;var e}class Zo extends Wo{}class th extends Wo{constructor(t){super(),this.elements=t}}function nh(t,n){const e=oh(n);for(const n of t.elements)e.some((t=>Or(t,n)))||e.push(n);return{arrayValue:{values:e}}}class eh extends Wo{constructor(t){super(),this.elements=t}}function ih(t,n){let e=oh(n);for(const n of t.elements)e=e.filter((t=>!Or(t,n)));return{arrayValue:{values:e}}}class sh extends Wo{constructor(t,n){super(),this.M=t,this.k=n}}function rh(t){return br(t.integerValue||t.doubleValue)}function oh(t){return Br(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n){this.field=t,this.transform=n}}class uh{constructor(t,n){this.version=t,this.transformResults=n}}class ch{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ch}static exists(t){return new ch(void 0,t)}static updateTime(t){return new ch(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ah(t,n){return void 0!==t.updateTime?n.isFoundDocument()&&n.version.isEqual(t.updateTime):void 0===t.exists||t.exists===n.isFoundDocument()}class lh{}function fh(t,n,e){t instanceof gh?function(t,n,e){const i=t.value.clone(),s=bh(t.fieldTransforms,n,e.transformResults);i.setAll(s),n.convertToFoundDocument(e.version,i).setHasCommittedMutations()}(t,n,e):t instanceof yh?function(t,n,e){if(!ah(t.precondition,n))return void n.convertToUnknownDocument(e.version);const i=bh(t.fieldTransforms,n,e.transformResults),s=n.data;s.setAll(vh(t)),s.setAll(i),n.convertToFoundDocument(e.version,s).setHasCommittedMutations()}(t,n,e):function(t,n,e){n.convertToNoDocument(e.version).setHasCommittedMutations()}(0,n,e)}function dh(t,n,e){t instanceof gh?function(t,n,e){if(!ah(t.precondition,n))return;const i=t.value.clone(),s=Ih(t.fieldTransforms,e,n);i.setAll(s),n.convertToFoundDocument(ph(n),i).setHasLocalMutations()}(t,n,e):t instanceof yh?function(t,n,e){if(!ah(t.precondition,n))return;const i=Ih(t.fieldTransforms,e,n),s=n.data;s.setAll(vh(t)),s.setAll(i),n.convertToFoundDocument(ph(n),s).setHasLocalMutations()}(t,n,e):function(t,n){ah(t.precondition,n)&&n.convertToNoDocument(ur.min())}(t,n)}function wh(t,n){let e=null;for(const i of t.fieldTransforms){const t=n.data.field(i.field),s=Jo(i.transform,t||null);null!=s&&(null==e&&(e=Yr.empty()),e.set(i.field,s))}return e||null}function mh(t,n){return t.type===n.type&&!!t.key.isEqual(n.key)&&!!t.precondition.isEqual(n.precondition)&&!!function(t,n){return void 0===t&&void 0===n||!(!t||!n)&&rr(t,n,((t,n)=>function(t,n){return t.field.isEqual(n.field)&&function(t,n){return t instanceof th&&n instanceof th||t instanceof eh&&n instanceof eh?rr(t.elements,n.elements,Or):t instanceof sh&&n instanceof sh?Or(t.k,n.k):t instanceof Zo&&n instanceof Zo}(t.transform,n.transform)}(t,n)))}(t.fieldTransforms,n.fieldTransforms)&&(0===t.type?t.value.isEqual(n.value):1!==t.type||t.data.isEqual(n.data)&&t.fieldMask.isEqual(n.fieldMask))}function ph(t){return t.isFoundDocument()?t.version:ur.min()}class gh extends lh{constructor(t,n,e,i=[]){super(),this.key=t,this.value=n,this.precondition=e,this.fieldTransforms=i,this.type=0}}class yh extends lh{constructor(t,n,e,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=e,this.precondition=i,this.fieldTransforms=s,this.type=1}}function vh(t){const n=new Map;return t.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const i=t.data.field(e);n.set(e,i)}})),n}function bh(t,n,e){const i=new Map;js(t.length===e.length);for(let s=0;s<e.length;s++){const r=t[s],o=r.transform,h=n.data.field(r.field);i.set(r.field,Yo(o,h,e[s]))}return i}function Ih(t,n,e){const i=new Map;for(const s of t){const t=s.transform,r=e.data.field(s.field);i.set(s.field,Xo(t,r,n))}return i}class Eh extends lh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Dh extends lh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sh,Ah;function Ch(t){if(void 0===t)return Ls("GRPC error has no .code"),Gs.UNKNOWN;switch(t){case Sh.OK:return Gs.OK;case Sh.CANCELLED:return Gs.CANCELLED;case Sh.UNKNOWN:return Gs.UNKNOWN;case Sh.DEADLINE_EXCEEDED:return Gs.DEADLINE_EXCEEDED;case Sh.RESOURCE_EXHAUSTED:return Gs.RESOURCE_EXHAUSTED;case Sh.INTERNAL:return Gs.INTERNAL;case Sh.UNAVAILABLE:return Gs.UNAVAILABLE;case Sh.UNAUTHENTICATED:return Gs.UNAUTHENTICATED;case Sh.INVALID_ARGUMENT:return Gs.INVALID_ARGUMENT;case Sh.NOT_FOUND:return Gs.NOT_FOUND;case Sh.ALREADY_EXISTS:return Gs.ALREADY_EXISTS;case Sh.PERMISSION_DENIED:return Gs.PERMISSION_DENIED;case Sh.FAILED_PRECONDITION:return Gs.FAILED_PRECONDITION;case Sh.ABORTED:return Gs.ABORTED;case Sh.OUT_OF_RANGE:return Gs.OUT_OF_RANGE;case Sh.UNIMPLEMENTED:return Gs.UNIMPLEMENTED;case Sh.DATA_LOSS:return Gs.DATA_LOSS;default:return qs()}}(Ah=Sh||(Sh={}))[Ah.OK=0]="OK",Ah[Ah.CANCELLED=1]="CANCELLED",Ah[Ah.UNKNOWN=2]="UNKNOWN",Ah[Ah.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ah[Ah.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ah[Ah.NOT_FOUND=5]="NOT_FOUND",Ah[Ah.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ah[Ah.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ah[Ah.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ah[Ah.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ah[Ah.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ah[Ah.ABORTED=10]="ABORTED",Ah[Ah.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ah[Ah.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ah[Ah.INTERNAL=13]="INTERNAL",Ah[Ah.UNAVAILABLE=14]="UNAVAILABLE",Ah[Ah.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xh{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),e=this.inner[n];if(void 0!==e)for(const[n,i]of e)if(this.equalsFn(n,t))return i}has(t){return void 0!==this.get(t)}set(t,n){const e=this.mapKeyFn(t),i=this.inner[e];if(void 0===i)return this.inner[e]=[[t,n]],void this.innerSize++;for(let e=0;e<i.length;e++)if(this.equalsFn(i[e][0],t))return void(i[e]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),e=this.inner[n];if(void 0===e)return!1;for(let i=0;i<e.length;i++)if(this.equalsFn(e[i][0],t))return 1===e.length?delete this.inner[n]:e.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ar(this.inner,((n,e)=>{for(const[n,i]of e)t(n,i)}))}isEmpty(){return lr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,n){this.comparator=t,this.root=n||Rh.EMPTY}insert(t,n){return new Nh(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Rh.BLACK,null,null))}remove(t){return new Nh(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Rh.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const e=this.comparator(t,n.key);if(0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}indexOf(t){let n=0,e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return n+e.left.size;i<0?e=e.left:(n+=e.left.size+1,e=e.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,e)=>(t(n,e),!1)))}toString(){const t=[];return this.inorderTraversal(((n,e)=>(t.push(`${n}:${e}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kh(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kh(this.root,t,this.comparator,!1)}getReverseIterator(){return new kh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kh(this.root,t,this.comparator,!0)}}class kh{constructor(t,n,e,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?e(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Rh{constructor(t,n,e,i,s){this.key=t,this.value=n,this.color=null!=e?e:Rh.RED,this.left=null!=i?i:Rh.EMPTY,this.right=null!=s?s:Rh.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,e,i,s){return new Rh(null!=t?t:this.key,null!=n?n:this.value,null!=e?e:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,e){let i=this;const s=e(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,e),null):0===s?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,e)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Rh.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let e,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return Rh.EMPTY;e=i.right.min(),i=i.copy(e.key,e.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Rh.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Rh.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw qs();if(this.right.isRed())throw qs();const t=this.left.check();if(t!==this.right.check())throw qs();return t+(this.isRed()?0:1)}}Rh.EMPTY=null,Rh.RED=!0,Rh.BLACK=!1,Rh.EMPTY=new class{constructor(){this.size=0}get key(){throw qs()}get value(){throw qs()}get color(){throw qs()}get left(){throw qs()}get right(){throw qs()}copy(t,n,e,i,s){return this}insert(t,n,e){return new Rh(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mh{constructor(t){this.comparator=t,this.data=new Nh(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n=>(t(n),!1)))}forEachInRange(t,n){const e=this.data.getIteratorFrom(t[0]);for(;e.hasNext();){const i=e.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let e;for(e=void 0!==n?this.data.getIteratorFrom(n):this.data.getIterator();e.hasNext();)if(!t(e.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Oh(this.data.getIterator())}getIteratorFrom(t){return new Oh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((t=>{n=n.add(t)})),n}isEqual(t){if(!(t instanceof Mh))return!1;if(this.size!==t.size)return!1;const n=this.data.getIterator(),e=t.data.getIterator();for(;n.hasNext();){const t=n.getNext().key,i=e.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Mh(this.comparator);return n.data=t,n}}class Oh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function $h(t){return t.hasNext()?t.getNext():void 0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Nh(Nr.comparator);function Ph(){return _h}const Vh=new Nh(Nr.comparator);function Fh(){return Vh}function Lh(){return new xh((t=>t.toString()),((t,n)=>t.isEqual(n)))}const Uh=new Nh(Nr.comparator),Bh=new Mh(Nr.comparator);function qh(...t){let n=Bh;for(const e of t)n=n.add(e);return n}const jh=new Mh(sr);function Gh(){return jh}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,n,e,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=e,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n){const e=new Map;return e.set(t,Hh.createSynthesizedTargetChangeForCurrentChange(t,n)),new Kh(ur.min(),e,Gh(),Ph(),qh())}}class Hh{constructor(t,n,e,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=e,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Hh(gr.EMPTY_BYTE_STRING,n,qh(),qh(),qh())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,n,e,i){this.O=t,this.removedTargetIds=n,this.key=e,this.F=i}}class Qh{constructor(t,n){this.targetId=t,this.$=n}}class Wh{constructor(t,n,e=gr.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=e,this.cause=i}}class Xh{constructor(){this.B=0,this.L=Zh(),this.U=gr.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=qh(),n=qh(),e=qh();return this.L.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:e=e.add(i);break;default:qs()}})),new Hh(this.U,this.q,t,n,e)}J(){this.K=!1,this.L=Zh()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Yh{constructor(t){this.nt=t,this.st=new Map,this.it=Ph(),this.rt=Jh(),this.ot=new Mh(sr)}ut(t){for(const n of t.O)t.F&&t.F.isFoundDocument()?this.at(n,t.F):this.ct(n,t.key,t.F);for(const n of t.removedTargetIds)this.ct(n,t.key,t.F)}ht(t){this.forEachTarget(t,(n=>{const e=this.lt(n);switch(t.state){case 0:this.ft(n)&&e.W(t.resumeToken);break;case 1:e.tt(),e.G||e.J(),e.W(t.resumeToken);break;case 2:e.tt(),e.G||this.removeTarget(n);break;case 3:this.ft(n)&&(e.et(),e.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),e.W(t.resumeToken));break;default:qs()}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach(((t,e)=>{this.ft(e)&&n(e)}))}_t(t){const n=t.targetId,e=t.$.count,i=this.wt(n);if(i){const t=i.target;if(fo(t))if(0===e){const e=new Nr(t.path);this.ct(n,e,Zr.newNoDocument(e,ur.min()))}else js(1===e);else this.gt(n)!==e&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach(((e,i)=>{const s=this.wt(i);if(s){if(e.current&&fo(s.target)){const n=new Nr(s.target.path);null!==this.it.get(n)||this.It(i,n)||this.ct(i,n,Zr.newNoDocument(n,t))}e.j&&(n.set(i,e.H()),e.J())}}));let e=qh();this.rt.forEach(((t,n)=>{let i=!0;n.forEachWhile((t=>{const n=this.wt(t);return!n||2===n.purpose||(i=!1,!1)})),i&&(e=e.add(t))})),this.it.forEach(((n,e)=>e.setReadTime(t)));const i=new Kh(t,n,this.ot,this.it,e);return this.it=Ph(),this.rt=Jh(),this.ot=new Mh(sr),i}at(t,n){if(!this.ft(t))return;const e=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,e),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,e){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),e&&(this.it=this.it.insert(n,e))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Xh,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new Mh(sr),this.rt=this.rt.insert(t,n)),n}ft(t){const n=null!==this.wt(t);return n||Fs("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Xh),this.nt.getRemoteKeysForTarget(t).forEach((n=>{this.ct(t,n,null)}))}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Jh(){return new Nh(Nr.comparator)}function Zh(){return new Nh(Nr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu={asc:"ASCENDING",desc:"DESCENDING"},nu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class eu{constructor(t,n){this.databaseId=t,this.N=n}}function iu(t,n){return t.N?`${new Date(1e3*n.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+n.nanoseconds).slice(-9)}Z`:{seconds:""+n.seconds,nanos:n.nanoseconds}}function su(t,n){return t.N?n.toBase64():n.toUint8Array()}function ru(t,n){return iu(t,n.toTimestamp())}function ou(t){return js(!!t),ur.fromTimestamp(function(t){const n=vr(t);return new hr(n.seconds,n.nanos)}(t))}function hu(t,n){return function(t){return new dr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(n).canonicalString()}function uu(t){const n=dr.fromString(t);return js(Nu(n)),n}function cu(t,n){return hu(t.databaseId,n.path)}function au(t,n){const e=uu(n);if(e.get(1)!==t.databaseId.projectId)throw new Ks(Gs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+t.databaseId.projectId);if(e.get(3)!==t.databaseId.database)throw new Ks(Gs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+t.databaseId.database);return new Nr(wu(e))}function lu(t,n){return hu(t.databaseId,n)}function fu(t){const n=uu(t);return 4===n.length?dr.emptyPath():wu(n)}function du(t){return new dr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wu(t){return js(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function mu(t,n,e){return{name:cu(t,n),fields:e.value.mapValue.fields}}function pu(t,n){let e;if(n instanceof gh)e={update:mu(t,n.key,n.value)};else if(n instanceof Eh)e={delete:cu(t,n.key)};else if(n instanceof yh)e={update:mu(t,n.key,n.data),updateMask:xu(n.fieldMask)};else{if(!(n instanceof Dh))return qs();e={verify:cu(t,n.key)}}return n.fieldTransforms.length>0&&(e.updateTransforms=n.fieldTransforms.map((t=>function(t,n){const e=n.transform;if(e instanceof Zo)return{fieldPath:n.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(e instanceof th)return{fieldPath:n.field.canonicalString(),appendMissingElements:{values:e.elements}};if(e instanceof eh)return{fieldPath:n.field.canonicalString(),removeAllFromArray:{values:e.elements}};if(e instanceof sh)return{fieldPath:n.field.canonicalString(),increment:e.k};throw qs()}(0,t)))),n.precondition.isNone||(e.currentDocument=function(t,n){return void 0!==n.updateTime?{updateTime:ru(t,n.updateTime)}:void 0!==n.exists?{exists:n.exists}:qs()}(t,n.precondition)),e}function gu(t,n){const e=n.currentDocument?function(t){return void 0!==t.updateTime?ch.updateTime(ou(t.updateTime)):void 0!==t.exists?ch.exists(t.exists):ch.none()}(n.currentDocument):ch.none(),i=n.updateTransforms?n.updateTransforms.map((n=>function(t,n){let e=null;"setToServerValue"in n?(js("REQUEST_TIME"===n.setToServerValue),e=new Zo):"appendMissingElements"in n?e=new th(n.appendMissingElements.values||[]):"removeAllFromArray"in n?e=new eh(n.removeAllFromArray.values||[]):"increment"in n?e=new sh(t,n.increment):qs();const i=mr.fromServerFormat(n.fieldPath);return new hh(i,e)}(t,n))):[];if(n.update){const s=au(t,n.update.name),r=new Yr({mapValue:{fields:n.update.fields}});if(n.updateMask){const t=function(t){return new pr((t.fieldPaths||[]).map((t=>mr.fromServerFormat(t))))}(n.updateMask);return new yh(s,r,t,e,i)}return new gh(s,r,e,i)}if(n.delete){const i=au(t,n.delete);return new Eh(i,e)}if(n.verify){const i=au(t,n.verify);return new Dh(i,e)}return qs()}function yu(t,n){return{documents:[lu(t,n.path)]}}function vu(t,n){const e={structuredQuery:{}},i=n.path;null!==n.collectionGroup?(e.parent=lu(t,i),e.structuredQuery.from=[{collectionId:n.collectionGroup,allDescendants:!0}]):(e.parent=lu(t,i.popLast()),e.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const n=t.map((t=>function(t){if("=="===t.op){if(jr(t.value))return{unaryFilter:{field:Tu(t.field),op:"IS_NAN"}};if(qr(t.value))return{unaryFilter:{field:Tu(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(jr(t.value))return{unaryFilter:{field:Tu(t.field),op:"IS_NOT_NAN"}};if(qr(t.value))return{unaryFilter:{field:Tu(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tu(t.field),op:Du(t.op),value:t.value}}}(t)));return 1===n.length?n[0]:{compositeFilter:{op:"AND",filters:n}}}(n.filters);s&&(e.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Tu(t.field),direction:Eu(t.dir)}}(t)))}(n.orderBy);r&&(e.structuredQuery.orderBy=r);const o=function(t,n){return t.N||Cr(n)?n:{value:n}}(t,n.limit);var h;return null!==o&&(e.structuredQuery.limit=o),n.startAt&&(e.structuredQuery.startAt={before:(h=n.startAt).inclusive,values:h.position}),n.endAt&&(e.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(n.endAt)),e}function bu(t){let n=fu(t.parent);const e=t.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){js(1===i);const t=e.from[0];t.allDescendants?s=t.collectionId:n=n.child(t.collectionId)}let r=[];e.where&&(r=Iu(e.where));let o=[];e.orderBy&&(o=e.orderBy.map((t=>function(t){return new Co(Su(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let h=null;e.limit&&(h=function(t){let n;return n="object"==typeof t?t.value:t,Cr(n)?null:n}(e.limit));let u=null;e.startAt&&(u=function(t){return new Ao(t.values||[],!!t.before)}(e.startAt));let c=null;return e.endAt&&(c=function(t){return new Ao(t.values||[],!t.before)}(e.endAt)),function(t,n,e,i,s,r,o,h){return new Ro(t,n,e,i,s,"F",o,h)}(n,s,o,r,h,0,u,c)}function Iu(t){return t?void 0!==t.unaryFilter?[Cu(t)]:void 0!==t.fieldFilter?[Au(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Iu(t))).reduce(((t,n)=>t.concat(n))):qs():[]}function Eu(t){return tu[t]}function Du(t){return nu[t]}function Tu(t){return{fieldPath:t.canonicalString()}}function Su(t){return mr.fromServerFormat(t.fieldPath)}function Au(t){return go.create(Su(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return qs()}}(t.fieldFilter.op),t.fieldFilter.value)}function Cu(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Su(t.unaryFilter.field);return go.create(n,"==",{doubleValue:NaN});case"IS_NULL":const e=Su(t.unaryFilter.field);return go.create(e,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Su(t.unaryFilter.field);return go.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Su(t.unaryFilter.field);return go.create(s,"!=",{nullValue:"NULL_VALUE"});default:return qs()}}function xu(t){const n=[];return t.fields.forEach((t=>n.push(t.canonicalString()))),{fieldPaths:n}}function Nu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){let n="";for(let e=0;e<t.length;e++)n.length>0&&(n=Mu(n)),n=Ru(t.get(e),n);return Mu(n)}function Ru(t,n){let e=n;const i=t.length;for(let n=0;n<i;n++){const i=t.charAt(n);switch(i){case"\0":e+="";break;case"":e+="";break;default:e+=i}}return e}function Mu(t){return t+""}function Ou(t){const n=t.length;if(js(n>=2),2===n)return js(""===t.charAt(0)&&""===t.charAt(1)),dr.emptyPath();const e=n-2,i=[];let s="";for(let r=0;r<n;){const n=t.indexOf("",r);switch((n<0||n>e)&&qs(),t.charAt(n+1)){case"":const e=t.substring(r,n);let o;0===s.length?o=e:(s+=e,o=s,s=""),i.push(o);break;case"":s+=t.substring(r,n),s+="\0";break;case"":s+=t.substring(r,n+1);break;default:qs()}r=n+2}return new dr(i)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t,n){return[t,ku(n)]}function Pu(t,n,e){return[t,ku(n),e]}const Vu={},Fu=["prefixPath","collectionGroup","readTime","documentId"],Lu=["prefixPath","collectionGroup","documentId"],Uu=["collectionGroup","readTime","prefixPath","documentId"],Bu=["canonicalId","targetId"],qu=["targetId","path"],ju=["path","targetId"],Gu=["collectionId","parent"],Ku=["indexId","uid"],Hu=["uid","sequenceNumber"],zu=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Qu=["indexId","uid","orderedDocumentKey"],Wu=["userId","collectionPath","documentId"],Xu=["userId","collectionPath","largestBatchId"],Yu=["userId","collectionGroup","largestBatchId"],Ju=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Zu=[...Ju,"documentOverlays"],tc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],nc=[...tc,"indexConfiguration","indexState","indexEntries"],ec="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&qs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new sc(((e,i)=>{this.nextCallback=n=>{this.wrapSuccess(t,n).next(e,i)},this.catchCallback=t=>{this.wrapFailure(n,t).next(e,i)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof sc?n:sc.resolve(n)}catch(t){return sc.reject(t)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):sc.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):sc.reject(n)}static resolve(t){return new sc((n=>{n(t)}))}static reject(t){return new sc(((n,e)=>{e(t)}))}static waitFor(t){return new sc(((n,e)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&n()}),(t=>e(t)))})),r=!0,s===i&&n()}))}static or(t){let n=sc.resolve(!1);for(const e of t)n=n.next((t=>t?sc.resolve(t):e()));return n}static forEach(t,n){const e=[];return t.forEach(((t,i)=>{e.push(n.call(this,t,i))})),this.waitFor(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.At=new Hs,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{n.error?this.At.reject(new uc(t,n.error)):this.At.resolve()},this.transaction.onerror=n=>{const e=dc(n.target.error);this.At.reject(new uc(t,e))}}static open(t,n,e,i){try{return new rc(n,t.transaction(i,e))}catch(t){throw new uc(n,t)}}get Rt(){return this.At.promise}abort(t){t&&this.At.reject(t),this.aborted||(Fs("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const n=this.transaction.objectStore(t);return new ac(n)}}class oc{constructor(t,n,e){this.name=t,this.version=n,this.bt=e,12.2===oc.Vt(f())&&Ls("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return Fs("SimpleDb","Removing database:",t),lc(window.indexedDB.deleteDatabase(t)).toPromise()}static vt(){if(!y())return!1;if(oc.St())return!0;const t=f(),n=oc.Vt(t),e=0<n&&n<10,i=oc.Dt(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||e||s)}static St(){var n;return void 0!==t&&"YES"===(null===(n=t.env)||void 0===n?void 0:n.Ct)}static xt(t,n){return t.store(n)}static Vt(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),e=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(e)}static Dt(t){const n=t.match(/Android ([\d.]+)/i),e=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(e)}async Nt(t){return this.db||(Fs("SimpleDb","Opening database:",this.name),this.db=await new Promise(((n,e)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=t=>{n(t.target.result)},i.onblocked=()=>{e(new uc(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=n=>{const i=n.target.error;e("VersionError"===i.name?new Ks(Gs.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."):"InvalidStateError"===i.name?new Ks(Gs.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i):new uc(t,i))},i.onupgradeneeded=t=>{Fs("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion),this.bt.kt(t.target.result,i.transaction,t.oldVersion,this.version).next((()=>{Fs("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Mt&&(this.db.onversionchange=t=>this.Mt(t)),this.db}Ot(t){this.Mt=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,e,i){const s="readonly"===n;let r=0;for(;;){++r;try{this.db=await this.Nt(t);const n=rc.open(this.db,t,s?"readonly":"readwrite",e),r=i(n).next((t=>(n.Pt(),t))).catch((t=>(n.abort(t),sc.reject(t)))).toPromise();return r.catch((()=>{})),await n.Rt,r}catch(t){const n="FirebaseError"!==t.name&&r<3;if(Fs("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class hc{constructor(t){this.Ft=t,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(t){this.Ft=t}done(){this.$t=!0}Ut(t){this.Bt=t}delete(){return lc(this.Ft.delete())}}class uc extends Ks{constructor(t,n){super(Gs.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function cc(t){return"IndexedDbTransactionError"===t.name}class ac{constructor(t){this.store=t}put(t,n){let e;return void 0!==n?(Fs("SimpleDb","PUT",this.store.name,t,n),e=this.store.put(n,t)):(Fs("SimpleDb","PUT",this.store.name,"<auto-key>",t),e=this.store.put(t)),lc(e)}add(t){return Fs("SimpleDb","ADD",this.store.name,t,t),lc(this.store.add(t))}get(t){return lc(this.store.get(t)).next((n=>(void 0===n&&(n=null),Fs("SimpleDb","GET",this.store.name,t,n),n)))}delete(t){return Fs("SimpleDb","DELETE",this.store.name,t),lc(this.store.delete(t))}count(){return Fs("SimpleDb","COUNT",this.store.name),lc(this.store.count())}qt(t,n){const e=this.options(t,n);if(e.index||"function"!=typeof this.store.getAll){const t=this.cursor(e),n=[];return this.Kt(t,((t,e)=>{n.push(e)})).next((()=>n))}{const t=this.store.getAll(e.range);return new sc(((n,e)=>{t.onerror=t=>{e(t.target.error)},t.onsuccess=t=>{n(t.target.result)}}))}}Gt(t,n){const e=this.store.getAll(t,null===n?void 0:n);return new sc(((t,n)=>{e.onerror=t=>{n(t.target.error)},e.onsuccess=n=>{t(n.target.result)}}))}Qt(t,n){Fs("SimpleDb","DELETE ALL",this.store.name);const e=this.options(t,n);e.jt=!1;const i=this.cursor(e);return this.Kt(i,((t,n,e)=>e.delete()))}Wt(t,n){let e;n?e=t:(e={},n=t);const i=this.cursor(e);return this.Kt(i,n)}zt(t){const n=this.cursor({});return new sc(((e,i)=>{n.onerror=t=>{const n=dc(t.target.error);i(n)},n.onsuccess=n=>{const i=n.target.result;i?t(i.primaryKey,i.value).next((t=>{t?i.continue():e()})):e()}}))}Kt(t,n){const e=[];return new sc(((i,s)=>{t.onerror=t=>{s(t.target.error)},t.onsuccess=t=>{const s=t.target.result;if(!s)return void i();const r=new hc(s),o=n(s.primaryKey,s.value,r);if(o instanceof sc){const t=o.catch((t=>(r.done(),sc.reject(t))));e.push(t)}r.isDone?i():null===r.Lt?s.continue():s.continue(r.Lt)}})).next((()=>sc.waitFor(e)))}options(t,n){let e;return void 0!==t&&("string"==typeof t?e=t:n=t),{index:e,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const e=this.store.index(t.index);return t.jt?e.openKeyCursor(t.range,n):e.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function lc(t){return new sc(((n,e)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{const n=dc(t.target.error);e(n)}}))}let fc=!1;function dc(t){const n=oc.Vt(f());if(n>=12.2&&n<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const t=new Ks("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fc||(fc=!0,setTimeout((()=>{throw t}),0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends ic{constructor(t,n){super(),this.Ht=t,this.currentSequenceNumber=n}}function mc(t,n){return oc.xt(t.Ht,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,n,e,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=e,this.mutations=i}applyToRemoteDocument(t,n){const e=n.mutationResults;for(let n=0;n<this.mutations.length;n++){const i=this.mutations[n];i.key.isEqual(t.key)&&fh(i,t,e[n])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&dh(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&dh(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((n=>{const e=t.get(n.key),i=e;this.applyToLocalView(i),e.isValidDocument()||i.convertToNoDocument(ur.min())}))}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),qh())}isEqual(t){return this.batchId===t.batchId&&rr(this.mutations,t.mutations,((t,n)=>mh(t,n)))&&rr(this.baseMutations,t.baseMutations,((t,n)=>mh(t,n)))}}class gc{constructor(t,n,e,i){this.batch=t,this.commitVersion=n,this.mutationResults=e,this.docVersions=i}static from(t,n,e){js(t.mutations.length===e.length);let i=Uh;const s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,e[t].version);return new gc(t,n,e,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,n,e,i,s=ur.min(),r=ur.min(),o=gr.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=e,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new vc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.Jt=t}}function Ic(t,n){const e=n.key,i={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Ec(n.readTime),hasCommittedMutations:n.hasCommittedMutations};if(n.isFoundDocument())i.document=function(t,n){return{name:cu(t,n.key),fields:n.data.value.mapValue.fields,updateTime:iu(t,n.version.toTimestamp())}}(t.Jt,n);else if(n.isNoDocument())i.noDocument={path:e.path.toArray(),readTime:Dc(n.version)};else{if(!n.isUnknownDocument())return qs();i.unknownDocument={path:e.path.toArray(),version:Dc(n.version)}}return i}function Ec(t){const n=t.toTimestamp();return[n.seconds,n.nanoseconds]}function Dc(t){const n=t.toTimestamp();return{seconds:n.seconds,nanoseconds:n.nanoseconds}}function Tc(t){const n=new hr(t.seconds,t.nanoseconds);return ur.fromTimestamp(n)}function Sc(t,n){const e=(n.baseMutations||[]).map((n=>gu(t.Jt,n)));for(let t=0;t<n.mutations.length-1;++t){const e=n.mutations[t];t+1<n.mutations.length&&void 0!==n.mutations[t+1].transform&&(e.updateTransforms=n.mutations[t+1].transform.fieldTransforms,n.mutations.splice(t+1,1),++t)}const i=n.mutations.map((n=>gu(t.Jt,n))),s=hr.fromMillis(n.localWriteTimeMs);return new pc(n.batchId,s,e,i)}function Ac(t){const n=Tc(t.readTime),e=void 0!==t.lastLimboFreeSnapshotVersion?Tc(t.lastLimboFreeSnapshotVersion):ur.min();let i;var s;return void 0!==t.query.documents?(js(1===(s=t.query).documents.length),i=Lo(Mo(fu(s.documents[0])))):i=function(t){return Lo(bu(t))}(t.query),new vc(i,t.targetId,0,t.lastListenSequenceNumber,n,e,gr.fromBase64String(t.resumeToken))}function Cc(t,n){const e=Dc(n.snapshotVersion),i=Dc(n.lastLimboFreeSnapshotVersion);let s;s=fo(n.target)?yu(t.Jt,n.target):vu(t.Jt,n.target);const r=n.resumeToken.toBase64();return{targetId:n.targetId,canonicalId:ao(n.target),readTime:e,resumeToken:r,lastListenSequenceNumber:n.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:s}}function xc(t){const n=bu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Uo(n,n.limit,"L"):n}function Nc(t,n){return new yc(n.largestBatchId,gu(t.Jt,n.overlayMutation))}function kc(t,n){const e=n.path.lastSegment();return[t,ku(n.path.popLast()),e]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{getBundleMetadata(t,n){return Mc(t).get(n).next((t=>{if(t)return{id:(n=t).bundleId,createTime:Tc(n.createTime),version:n.version};var n}))}saveBundleMetadata(t,n){return Mc(t).put({bundleId:(e=n).id,createTime:Dc(ou(e.createTime)),version:e.version});var e}getNamedQuery(t,n){return Oc(t).get(n).next((t=>{if(t)return{name:(n=t).name,query:xc(n.bundledQuery),readTime:Tc(n.readTime)};var n}))}saveNamedQuery(t,n){return Oc(t).put(function(t){return{name:t.name,readTime:Dc(ou(t.readTime)),bundledQuery:t.bundledQuery}}(n))}}function Mc(t){return mc(t,"bundles")}function Oc(t){return mc(t,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,n){this.M=t,this.userId=n}static Yt(t,n){return new $c(t,n.uid||"")}getOverlay(t,n){return _c(t).get(kc(this.userId,n)).next((t=>t?Nc(this.M,t):null))}saveOverlays(t,n,e){const i=[];return e.forEach(((e,s)=>{const r=new yc(n,s);i.push(this.Xt(t,r))})),sc.waitFor(i)}removeOverlaysForBatchId(t,n,e){const i=new Set;n.forEach((t=>i.add(ku(t.getCollectionPath()))));const s=[];return i.forEach((n=>{const i=IDBKeyRange.bound([this.userId,n,e],[this.userId,n,e+1],!1,!0);s.push(_c(t).Qt("collectionPathOverlayIndex",i))})),sc.waitFor(s)}getOverlaysForCollection(t,n,e){const i=Lh(),s=ku(n),r=IDBKeyRange.bound([this.userId,s,e],[this.userId,s,Number.POSITIVE_INFINITY],!0);return _c(t).qt("collectionPathOverlayIndex",r).next((t=>{for(const n of t){const t=Nc(this.M,n);i.set(t.getKey(),t)}return i}))}getOverlaysForCollectionGroup(t,n,e,i){const s=Lh();let r;const o=IDBKeyRange.bound([this.userId,n,e],[this.userId,n,Number.POSITIVE_INFINITY],!0);return _c(t).Wt({index:"collectionGroupOverlayIndex",range:o},((t,n,e)=>{const o=Nc(this.M,n);s.size()<i||o.largestBatchId===r?(s.set(o.getKey(),o),r=o.largestBatchId):e.done()})).next((()=>s))}Xt(t,n){return _c(t).put(function(t,n,e){const[i,s,r]=kc(n,e.mutation.key);return{userId:n,collectionPath:s,documentId:r,collectionGroup:e.mutation.key.getCollectionGroup(),largestBatchId:e.largestBatchId,overlayMutation:pu(t.Jt,e.mutation)}}(this.M,this.userId,n))}}function _c(t){return mc(t,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){}Zt(t,n){this.te(t,n),n.ee()}te(t,n){if("nullValue"in t)this.ne(n,5);else if("booleanValue"in t)this.ne(n,10),n.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(n,15),n.se(br(t.integerValue));else if("doubleValue"in t){const e=br(t.doubleValue);isNaN(e)?this.ne(n,13):(this.ne(n,15),xr(e)?n.se(0):n.se(e))}else if("timestampValue"in t){const e=t.timestampValue;this.ne(n,20),"string"==typeof e?n.ie(e):(n.ie(`${e.seconds||""}`),n.se(e.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,n),this.oe(n);else if("bytesValue"in t)this.ne(n,30),n.ue(Ir(t.bytesValue)),this.oe(n);else if("referenceValue"in t)this.ae(t.referenceValue,n);else if("geoPointValue"in t){const e=t.geoPointValue;this.ne(n,45),n.se(e.latitude||0),n.se(e.longitude||0)}else"mapValue"in t?Hr(t)?this.ne(n,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,n),this.oe(n)):"arrayValue"in t?(this.he(t.arrayValue,n),this.oe(n)):qs()}re(t,n){this.ne(n,25),this.le(t,n)}le(t,n){n.ie(t)}ce(t,n){const e=t.fields||{};this.ne(n,55);for(const t of Object.keys(e))this.re(t,n),this.te(e[t],n)}he(t,n){const e=t.values||[];this.ne(n,50);for(const t of e)this.te(t,n)}ae(t,n){this.ne(n,37),Nr.fromName(t).path.forEach((t=>{this.ne(n,60),this.le(t,n)}))}ne(t,n){t.se(n)}oe(t){t.se(2)}}function Vc(t){if(0===t)return 8;let n=0;return t>>4==0&&(n+=4,t<<=4),t>>6==0&&(n+=2,t<<=2),t>>7==0&&(n+=1),n}function Fc(t){const n=64-function(t){let n=0;for(let e=0;e<8;++e){const i=Vc(255&t[e]);if(n+=i,8!==i)break}return n}(t);return Math.ceil(n/8)}Pc.fe=new Pc;class Lc{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(t){const n=t[Symbol.iterator]();let e=n.next();for(;!e.done;)this._e(e.value),e=n.next();this.we()}me(t){const n=t[Symbol.iterator]();let e=n.next();for(;!e.done;)this.ge(e.value),e=n.next();this.ye()}pe(t){for(const n of t){const t=n.charCodeAt(0);if(t<128)this._e(t);else if(t<2048)this._e(960|t>>>6),this._e(128|63&t);else if(n<"\ud800"||"\udbff"<n)this._e(480|t>>>12),this._e(128|63&t>>>6),this._e(128|63&t);else{const t=n.codePointAt(0);this._e(240|t>>>18),this._e(128|63&t>>>12),this._e(128|63&t>>>6),this._e(128|63&t)}}this.we()}Ie(t){for(const n of t){const t=n.charCodeAt(0);if(t<128)this.ge(t);else if(t<2048)this.ge(960|t>>>6),this.ge(128|63&t);else if(n<"\ud800"||"\udbff"<n)this.ge(480|t>>>12),this.ge(128|63&t>>>6),this.ge(128|63&t);else{const t=n.codePointAt(0);this.ge(240|t>>>18),this.ge(128|63&t>>>12),this.ge(128|63&t>>>6),this.ge(128|63&t)}}this.ye()}Te(t){const n=this.Ee(t),e=Fc(n);this.Ae(1+e),this.buffer[this.position++]=255&e;for(let t=n.length-e;t<n.length;++t)this.buffer[this.position++]=255&n[t]}Re(t){const n=this.Ee(t),e=Fc(n);this.Ae(1+e),this.buffer[this.position++]=~(255&e);for(let t=n.length-e;t<n.length;++t)this.buffer[this.position++]=~(255&n[t])}Pe(){this.be(255),this.be(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(t){this.Ae(t.length),this.buffer.set(t,this.position),this.position+=t.length}Se(){return this.buffer.slice(0,this.position)}Ee(t){const n=function(t){const n=new DataView(new ArrayBuffer(8));return n.setFloat64(0,t,!1),new Uint8Array(n.buffer)}(t),e=0!=(128&n[0]);n[0]^=e?255:128;for(let t=1;t<n.length;++t)n[t]^=e?255:0;return n}_e(t){const n=255&t;0===n?(this.be(0),this.be(255)):255===n?(this.be(255),this.be(0)):this.be(n)}ge(t){const n=255&t;0===n?(this.ve(0),this.ve(255)):255===n?(this.ve(255),this.ve(0)):this.ve(t)}we(){this.be(0),this.be(1)}ye(){this.ve(0),this.ve(1)}be(t){this.Ae(1),this.buffer[this.position++]=t}ve(t){this.Ae(1),this.buffer[this.position++]=~t}Ae(t){const n=t+this.position;if(n<=this.buffer.length)return;let e=2*this.buffer.length;e<n&&(e=n);const i=new Uint8Array(e);i.set(this.buffer),this.buffer=i}}class Uc{constructor(t){this.De=t}ue(t){this.De.de(t)}ie(t){this.De.pe(t)}se(t){this.De.Te(t)}ee(){this.De.Pe()}}class Bc{constructor(t){this.De=t}ue(t){this.De.me(t)}ie(t){this.De.Ie(t)}se(t){this.De.Re(t)}ee(){this.De.Ve()}}class qc{constructor(){this.De=new Lc,this.Ce=new Uc(this.De),this.xe=new Bc(this.De)}seed(t){this.De.seed(t)}Ne(t){return 0===t?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,n,e,i){this.indexId=t,this.documentKey=n,this.arrayValue=e,this.directionalValue=i}ke(){const t=this.directionalValue.length,n=0===t||255===this.directionalValue[t-1]?t+1:t,e=new Uint8Array(n);return e.set(this.directionalValue,0),n!==t?e.set([0],this.directionalValue.length):++e[e.length-1],new jc(this.indexId,this.documentKey,this.arrayValue,e)}}function Gc(t,n){let e=t.indexId-n.indexId;return 0!==e?e:(e=Kc(t.arrayValue,n.arrayValue),0!==e?e:(e=Kc(t.directionalValue,n.directionalValue),0!==e?e:Nr.comparator(t.documentKey,n.documentKey)))}function Kc(t,n){for(let e=0;e<t.length&&e<n.length;++e){const i=t[e]-n[e];if(0!==i)return i}return t.length-n.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.Me=t.orderBy,this.Oe=[];for(const n of t.filters){const t=n;t.S()?this.Fe=t:this.Oe.push(t)}}$e(t){const n=no(t);if(void 0!==n&&!this.Be(n))return!1;const e=eo(t);let i=0,s=0;for(;i<e.length&&this.Be(e[i]);++i);if(i===e.length)return!0;if(void 0!==this.Fe){const t=e[i];if(!this.Le(this.Fe,t)||!this.Ue(this.Me[s++],t))return!1;++i}for(;i<e.length;++i){const t=e[i];if(s>=this.Me.length||!this.Ue(this.Me[s++],t))return!1}return!0}Be(t){for(const n of this.Oe)if(this.Le(n,t))return!0;return!1}Le(t,n){return!(void 0===t||!t.field.isEqual(n.fieldPath))&&2===n.kind==("array-contains"===t.op||"array-contains-any"===t.op)}Ue(t,n){return!!t.field.isEqual(n.fieldPath)&&(0===n.kind&&"asc"===t.dir||1===n.kind&&"desc"===t.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.qe=new Qc}addToCollectionParentIndex(t,n){return this.qe.add(n),sc.resolve()}getCollectionParents(t,n){return sc.resolve(this.qe.getEntries(n))}addFieldIndex(t,n){return sc.resolve()}deleteFieldIndex(t,n){return sc.resolve()}getDocumentsMatchingTarget(t,n){return sc.resolve(null)}getFieldIndex(t,n){return sc.resolve(null)}getFieldIndexes(t,n){return sc.resolve([])}getNextCollectionGroupToUpdate(t){return sc.resolve(null)}updateCollectionGroup(t,n,e){return sc.resolve()}updateIndexEntries(t,n){return sc.resolve()}}class Qc{constructor(){this.index={}}add(t){const n=t.lastSegment(),e=t.popLast(),i=this.index[n]||new Mh(dr.comparator),s=!i.has(e);return this.index[n]=i.add(e),s}has(t){const n=t.lastSegment(),e=t.popLast(),i=this.index[n];return i&&i.has(e)}getEntries(t){return(this.index[t]||new Mh(dr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new Uint8Array(0);class Xc{constructor(t,n){this.user=t,this.databaseId=n,this.Ke=new Qc,this.Ge=new xh((t=>ao(t)),((t,n)=>lo(t,n))),this.uid=t.uid||""}addToCollectionParentIndex(t,n){if(!this.Ke.has(n)){const e=n.lastSegment(),i=n.popLast();t.addOnCommittedListener((()=>{this.Ke.add(n)}));const s={collectionId:e,parent:ku(i)};return Yc(t).put(s)}return sc.resolve()}getCollectionParents(t,n){const e=[],i=IDBKeyRange.bound([n,""],[or(n),""],!1,!0);return Yc(t).qt(i).next((t=>{for(const i of t){if(i.collectionId!==n)break;e.push(Ou(i.parent))}return e}))}addFieldIndex(t,n){const e=Zc(t),i=function(t){return{indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map((t=>[t.fieldPath.canonicalString(),t.kind]))}}(n);return delete i.indexId,e.add(i).next()}deleteFieldIndex(t,n){const e=Zc(t),i=ta(t),s=Jc(t);return e.delete(n.indexId).next((()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))))}getDocumentsMatchingTarget(t,n){const e=Jc(t);let i=!0;const s=new Map;return sc.forEach(this.Qe(n),(n=>this.getFieldIndex(t,n).next((t=>{i&&(i=!!t),s.set(n,t)})))).next((()=>{if(i){let t=qh();const i=[];return sc.forEach(s,((s,r)=>{var o;Fs("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t=>`${t.fieldPath}:${t.kind}`)).join(",")}`} to execute ${ao(n)}`);const h=function(t,n){const e=no(n);if(void 0===e)return null;for(const n of wo(t,e.fieldPath))switch(n.op){case"array-contains-any":return n.value.arrayValue.values||[];case"array-contains":return[n.value]}return null}(r,s),u=function(t,n){const e=new Map;for(const i of eo(n))for(const n of wo(t,i.fieldPath))switch(n.op){case"==":case"in":e.set(i.fieldPath.canonicalString(),n.value);break;case"not-in":case"!=":return e.set(i.fieldPath.canonicalString(),n.value),Array.from(e.values())}return null}(r,s),c=function(t,n){const e=[];let i=!0;for(const s of eo(n)){const n=0===s.kind?mo(t,s.fieldPath,t.startAt):po(t,s.fieldPath,t.startAt);if(!n.value)return null;e.push(n.value),i&&(i=n.inclusive)}return new Ao(e,i)}(r,s),a=function(t,n){const e=[];let i=!0;for(const s of eo(n)){const n=0===s.kind?po(t,s.fieldPath,t.endAt):mo(t,s.fieldPath,t.endAt);if(!n.value)return null;e.push(n.value),i&&(i=n.inclusive)}return new Ao(e,i)}(r,s),l=this.je(s,r,c),f=this.je(s,r,a),d=this.We(s,r,u),w=this.ze(s.indexId,h,l,!!c&&c.inclusive,f,!!a&&a.inclusive,d);return sc.forEach(w,(s=>e.Gt(s,n.limit).next((n=>{n.forEach((n=>{const e=Nr.fromSegments(n.documentKey);t.has(e)||(t=t.add(e),i.push(e))}))}))))})).next((()=>i))}return sc.resolve(null)}))}Qe(t){let n=this.Ge.get(t);return n||(n=[t],this.Ge.set(t,n),n)}ze(t,n,e,i,s,r,o){const h=(null!=n?n.length:1)*Math.max(null!=e?e.length:1,null!=s?s.length:1),u=h/(null!=n?n.length:1),c=[];for(let a=0;a<h;++a){const h=n?this.He(n[a/u]):Wc,l=e?this.Je(t,h,e[a%u],i):this.Ye(t),f=s?this.Xe(t,h,s[a%u],r):this.Ye(t+1);c.push(...this.createRange(l,f,o.map((n=>this.Je(t,h,n,!0)))))}return c}Je(t,n,e,i){const s=new jc(t,Nr.empty(),n,e);return i?s:s.ke()}Xe(t,n,e,i){const s=new jc(t,Nr.empty(),n,e);return i?s.ke():s}Ye(t){return new jc(t,Nr.empty(),Wc,Wc)}getFieldIndex(t,n){const e=new Hc(n),i=null!=n.collectionGroup?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(t,i).next((t=>{const n=t.filter((t=>e.$e(t)));return n.sort(((t,n)=>n.fields.length-t.fields.length)),n.length>0?n[0]:null}))}Ze(t,n){const e=new qc;for(const i of eo(t)){const t=n.data.field(i.fieldPath);if(null==t)return null;const s=e.Ne(i.kind);Pc.fe.Zt(t,s)}return e.Se()}He(t){const n=new qc;return Pc.fe.Zt(t,n.Ne(0)),n.Se()}tn(t,n){const e=new qc;return Pc.fe.Zt(Lr(this.databaseId,n),e.Ne(function(t){const n=eo(t);return 0===n.length?0:n[n.length-1].kind}(t))),e.Se()}We(t,n,e){if(null===e)return[];let i=[];i.push(new qc);let s=0;for(const r of eo(t)){const t=e[s++];for(const e of i)if(this.en(n,r.fieldPath)&&Br(t))i=this.nn(i,r,t);else{const n=e.Ne(r.kind);Pc.fe.Zt(t,n)}}return this.sn(i)}je(t,n,e){return null==e?null:this.We(t,n,e.position)}sn(t){const n=[];for(let e=0;e<t.length;++e)n[e]=t[e].Se();return n}nn(t,n,e){const i=[...t],s=[];for(const t of e.arrayValue.values||[])for(const e of i){const i=new qc;i.seed(e.Se()),Pc.fe.Zt(t,i.Ne(n.kind)),s.push(i)}return s}en(t,n){return!!t.filters.find((t=>t instanceof go&&t.field.isEqual(n)&&("in"===t.op||"not-in"===t.op)))}getFieldIndexes(t,n){const e=Zc(t),i=ta(t);return(n?e.qt("collectionGroupIndex",IDBKeyRange.bound(n,n)):e.qt()).next((t=>{const n=[];return sc.forEach(t,(t=>i.get([t.indexId,this.uid]).next((e=>{n.push(function(t,n){const e=n?new so(n.sequenceNumber,new oo(Tc(n.readTime),new Nr(Ou(n.documentKey)),n.largestBatchId)):so.empty(),i=t.fields.map((([t,n])=>new io(mr.fromServerFormat(t),n)));return new to(t.indexId,t.collectionGroup,i,e)}(t,e))})))).next((()=>n))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((t=>0===t.length?null:(t.sort(((t,n)=>{const e=t.indexState.sequenceNumber-n.indexState.sequenceNumber;return 0!==e?e:sr(t.collectionGroup,n.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(t,n,e){const i=Zc(t),s=ta(t);return this.rn(t).next((t=>i.qt("collectionGroupIndex",IDBKeyRange.bound(n,n)).next((n=>sc.forEach(n,(n=>s.put(function(t,n,e,i){return{indexId:t,uid:n.uid||"",sequenceNumber:e,readTime:Dc(i.readTime),documentKey:ku(i.documentKey.path),largestBatchId:i.largestBatchId}}(n.indexId,this.user,t,e))))))))}updateIndexEntries(t,n){const e=new Map;return sc.forEach(n,((n,i)=>{const s=e.get(n.collectionGroup);return(s?sc.resolve(s):this.getFieldIndexes(t,n.collectionGroup)).next((s=>(e.set(n.collectionGroup,s),sc.forEach(s,(e=>this.on(t,n,e).next((n=>{const s=this.un(i,e);return n.isEqual(s)?sc.resolve():this.an(t,i,e,n,s)})))))))}))}cn(t,n,e,i){return Jc(t).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.tn(e,n.key),documentKey:n.key.path.toArray()})}hn(t,n,e,i){return Jc(t).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.tn(e,n.key),n.key.path.toArray()])}on(t,n,e){const i=Jc(t);let s=new Mh(Gc);return i.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([e.indexId,this.uid,this.tn(e,n)])},((t,i)=>{s=s.add(new jc(e.indexId,n,i.arrayValue,i.directionalValue))})).next((()=>s))}un(t,n){let e=new Mh(Gc);const i=this.Ze(n,t);if(null==i)return e;const s=no(n);if(null!=s){const r=t.data.field(s.fieldPath);if(Br(r))for(const s of r.arrayValue.values||[])e=e.add(new jc(n.indexId,t.key,this.He(s),i))}else e=e.add(new jc(n.indexId,t.key,Wc,i));return e}an(t,n,e,i,s){Fs("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const r=[];return function(t,n,e,i,s){const r=t.getIterator(),o=n.getIterator();let h=$h(r),u=$h(o);for(;h||u;){let t=!1,n=!1;if(h&&u){const i=e(h,u);i<0?n=!0:i>0&&(t=!0)}else null!=h?n=!0:t=!0;t?(i(u),u=$h(o)):n?(s(h),h=$h(r)):(h=$h(r),u=$h(o))}}(i,s,Gc,(i=>{r.push(this.cn(t,n,e,i))}),(i=>{r.push(this.hn(t,n,e,i))})),sc.waitFor(r)}rn(t){let n=1;return ta(t).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((t,e,i)=>{i.done(),n=e.sequenceNumber+1})).next((()=>n))}createRange(t,n,e){e=e.sort(((t,n)=>Gc(t,n))).filter(((t,n,e)=>!n||0!==Gc(t,e[n-1])));const i=[];i.push(t);for(const s of e){const e=Gc(s,t),r=Gc(s,n);if(0===e)i[0]=t.ke();else if(e>0&&r<0)i.push(s),i.push(s.ke());else if(r>0)break}i.push(n);const s=[];for(let t=0;t<i.length;t+=2)s.push(IDBKeyRange.bound([i[t].indexId,this.uid,i[t].arrayValue,i[t].directionalValue,Wc,[]],[i[t+1].indexId,this.uid,i[t+1].arrayValue,i[t+1].directionalValue,Wc,[]]));return s}}function Yc(t){return mc(t,"collectionParents")}function Jc(t){return mc(t,"indexEntries")}function Zc(t){return mc(t,"indexConfiguration")}function ta(t){return mc(t,"indexState")}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ea{constructor(t,n,e){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=e}static withCacheSize(t){return new ea(t,ea.DEFAULT_COLLECTION_PERCENTILE,ea.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t,n,e){const i=t.store("mutations"),s=t.store("documentMutations"),r=[],o=IDBKeyRange.only(e.batchId);let h=0;const u=i.Wt({range:o},((t,n,e)=>(h++,e.delete())));r.push(u.next((()=>{js(1===h)})));const c=[];for(const t of e.mutations){const i=Pu(n,t.key.path,e.batchId);r.push(s.delete(i)),c.push(t.key)}return sc.waitFor(r).next((()=>c))}function sa(t){if(!t)return 0;let n;if(t.document)n=t.document;else if(t.unknownDocument)n=t.unknownDocument;else{if(!t.noDocument)throw qs();n=t.noDocument}return JSON.stringify(n).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ea.DEFAULT_COLLECTION_PERCENTILE=10,ea.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ea.DEFAULT=new ea(41943040,ea.DEFAULT_COLLECTION_PERCENTILE,ea.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ea.DISABLED=new ea(-1,0,0);class ra{constructor(t,n,e,i){this.userId=t,this.M=n,this.indexManager=e,this.referenceDelegate=i,this.ln={}}static Yt(t,n,e,i){js(""!==t.uid);const s=t.isAuthenticated()?t.uid:"";return new ra(s,n,e,i)}checkEmpty(t){let n=!0;const e=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ha(t).Wt({index:"userMutationsIndex",range:e},((t,e,i)=>{n=!1,i.done()})).next((()=>n))}addMutationBatch(t,n,e,i){const s=ua(t),r=ha(t);return r.add({}).next((o=>{js("number"==typeof o);const h=new pc(o,n,e,i),u=function(t,n,e){const i=e.baseMutations.map((n=>pu(t.Jt,n))),s=e.mutations.map((n=>pu(t.Jt,n)));return{userId:n,batchId:e.batchId,localWriteTimeMs:e.localWriteTime.toMillis(),baseMutations:i,mutations:s}}(this.M,this.userId,h),c=[];let a=new Mh(((t,n)=>sr(t.canonicalString(),n.canonicalString())));for(const t of i){const n=Pu(this.userId,t.key.path,o);a=a.add(t.key.path.popLast()),c.push(r.put(u)),c.push(s.put(n,Vu))}return a.forEach((n=>{c.push(this.indexManager.addToCollectionParentIndex(t,n))})),t.addOnCommittedListener((()=>{this.ln[o]=h.keys()})),sc.waitFor(c).next((()=>h))}))}lookupMutationBatch(t,n){return ha(t).get(n).next((t=>t?(js(t.userId===this.userId),Sc(this.M,t)):null))}fn(t,n){return this.ln[n]?sc.resolve(this.ln[n]):this.lookupMutationBatch(t,n).next((t=>{if(t){const e=t.keys();return this.ln[n]=e,e}return null}))}getNextMutationBatchAfterBatchId(t,n){const e=n+1,i=IDBKeyRange.lowerBound([this.userId,e]);let s=null;return ha(t).Wt({index:"userMutationsIndex",range:i},((t,n,i)=>{n.userId===this.userId&&(js(n.batchId>=e),s=Sc(this.M,n)),i.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(t){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let e=-1;return ha(t).Wt({index:"userMutationsIndex",range:n,reverse:!0},((t,n,i)=>{e=n.batchId,i.done()})).next((()=>e))}getAllMutationBatches(t){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ha(t).qt("userMutationsIndex",n).next((t=>t.map((t=>Sc(this.M,t)))))}getAllMutationBatchesAffectingDocumentKey(t,n){const e=_u(this.userId,n.path),i=IDBKeyRange.lowerBound(e),s=[];return ua(t).Wt({range:i},((e,i,r)=>{const[o,h,u]=e,c=Ou(h);if(o===this.userId&&n.path.isEqual(c))return ha(t).get(u).next((t=>{if(!t)throw qs();js(t.userId===this.userId),s.push(Sc(this.M,t))}));r.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(t,n){let e=new Mh(sr);const i=[];return n.forEach((n=>{const s=_u(this.userId,n.path),r=IDBKeyRange.lowerBound(s),o=ua(t).Wt({range:r},((t,i,s)=>{const[r,o,h]=t,u=Ou(o);r===this.userId&&n.path.isEqual(u)?e=e.add(h):s.done()}));i.push(o)})),sc.waitFor(i).next((()=>this.dn(t,e)))}getAllMutationBatchesAffectingQuery(t,n){const e=n.path,i=e.length+1,s=_u(this.userId,e),r=IDBKeyRange.lowerBound(s);let o=new Mh(sr);return ua(t).Wt({range:r},((t,n,s)=>{const[r,h,u]=t,c=Ou(h);r===this.userId&&e.isPrefixOf(c)?c.length===i&&(o=o.add(u)):s.done()})).next((()=>this.dn(t,o)))}dn(t,n){const e=[],i=[];return n.forEach((n=>{i.push(ha(t).get(n).next((t=>{if(null===t)throw qs();js(t.userId===this.userId),e.push(Sc(this.M,t))})))})),sc.waitFor(i).next((()=>e))}removeMutationBatch(t,n){return ia(t.Ht,this.userId,n).next((e=>(t.addOnCommittedListener((()=>{this._n(n.batchId)})),sc.forEach(e,(n=>this.referenceDelegate.markPotentiallyOrphaned(t,n))))))}_n(t){delete this.ln[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((n=>{if(!n)return sc.resolve();const e=IDBKeyRange.lowerBound([this.userId]),i=[];return ua(t).Wt({range:e},((t,n,e)=>{if(t[0]===this.userId){const n=Ou(t[1]);i.push(n)}else e.done()})).next((()=>{js(0===i.length)}))}))}containsKey(t,n){return oa(t,this.userId,n)}wn(t){return ca(t).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function oa(t,n,e){const i=_u(n,e.path),s=i[1],r=IDBKeyRange.lowerBound(i);let o=!1;return ua(t).Wt({range:r,jt:!0},((t,e,i)=>{const[r,h,u]=t;r===n&&h===s&&(o=!0),i.done()})).next((()=>o))}function ha(t){return mc(t,"mutations")}function ua(t){return mc(t,"documentMutations")}function ca(t){return mc(t,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new aa(0)}static yn(){return new aa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,n){this.referenceDelegate=t,this.M=n}allocateTargetId(t){return this.pn(t).next((n=>{const e=new aa(n.highestTargetId);return n.highestTargetId=e.next(),this.In(t,n).next((()=>n.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.pn(t).next((t=>ur.fromTimestamp(new hr(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.pn(t).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(t,n,e){return this.pn(t).next((i=>(i.highestListenSequenceNumber=n,e&&(i.lastRemoteSnapshotVersion=e.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.In(t,i))))}addTargetData(t,n){return this.Tn(t,n).next((()=>this.pn(t).next((e=>(e.targetCount+=1,this.En(n,e),this.In(t,e))))))}updateTargetData(t,n){return this.Tn(t,n)}removeTargetData(t,n){return this.removeMatchingKeysForTargetId(t,n.targetId).next((()=>fa(t).delete(n.targetId))).next((()=>this.pn(t))).next((n=>(js(n.targetCount>0),n.targetCount-=1,this.In(t,n))))}removeTargets(t,n,e){let i=0;const s=[];return fa(t).Wt(((r,o)=>{const h=Ac(o);h.sequenceNumber<=n&&null===e.get(h.targetId)&&(i++,s.push(this.removeTargetData(t,h)))})).next((()=>sc.waitFor(s))).next((()=>i))}forEachTarget(t,n){return fa(t).Wt(((t,e)=>{const i=Ac(e);n(i)}))}pn(t){return da(t).get("targetGlobalKey").next((t=>(js(null!==t),t)))}In(t,n){return da(t).put("targetGlobalKey",n)}Tn(t,n){return fa(t).put(Cc(this.M,n))}En(t,n){let e=!1;return t.targetId>n.highestTargetId&&(n.highestTargetId=t.targetId,e=!0),t.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=t.sequenceNumber,e=!0),e}getTargetCount(t){return this.pn(t).next((t=>t.targetCount))}getTargetData(t,n){const e=ao(n),i=IDBKeyRange.bound([e,Number.NEGATIVE_INFINITY],[e,Number.POSITIVE_INFINITY]);let s=null;return fa(t).Wt({range:i,index:"queryTargetsIndex"},((t,e,i)=>{const r=Ac(e);lo(n,r.target)&&(s=r,i.done())})).next((()=>s))}addMatchingKeys(t,n,e){const i=[],s=wa(t);return n.forEach((n=>{const r=ku(n.path);i.push(s.put({targetId:e,path:r})),i.push(this.referenceDelegate.addReference(t,e,n))})),sc.waitFor(i)}removeMatchingKeys(t,n,e){const i=wa(t);return sc.forEach(n,(n=>{const s=ku(n.path);return sc.waitFor([i.delete([e,s]),this.referenceDelegate.removeReference(t,e,n)])}))}removeMatchingKeysForTargetId(t,n){const e=wa(t),i=IDBKeyRange.bound([n],[n+1],!1,!0);return e.delete(i)}getMatchingKeysForTargetId(t,n){const e=IDBKeyRange.bound([n],[n+1],!1,!0),i=wa(t);let s=qh();return i.Wt({range:e,jt:!0},(t=>{const n=Ou(t[1]),e=new Nr(n);s=s.add(e)})).next((()=>s))}containsKey(t,n){const e=ku(n.path),i=IDBKeyRange.bound([e],[or(e)],!1,!0);let s=0;return wa(t).Wt({index:"documentTargetsIndex",jt:!0,range:i},(([t,n],e,i)=>{0!==t&&(s++,i.done())})).next((()=>s>0))}Et(t,n){return fa(t).get(n).next((t=>t?Ac(t):null))}}function fa(t){return mc(t,"targets")}function da(t){return mc(t,"targetGlobal")}function wa(t){return mc(t,"targetDocuments")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t){if(t.code!==Gs.FAILED_PRECONDITION||t.message!==ec)throw t;Fs("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa([t,n],[e,i]){const s=sr(t,e);return 0===s?sr(n,i):s}class ga{constructor(t){this.An=t,this.buffer=new Mh(pa),this.Rn=0}Pn(){return++this.Rn}bn(t){const n=[t,this.Pn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(n);else{const t=this.buffer.last();pa(n,t)<0&&(this.buffer=this.buffer.delete(t).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ya{constructor(t,n){this.garbageCollector=t,this.asyncQueue=n,this.Vn=!1,this.vn=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Sn(t)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return null!==this.vn}Sn(t){const n=this.Vn?3e5:6e4;Fs("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,(async()=>{this.vn=null,this.Vn=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){cc(t)?Fs("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ma(t)}await this.Sn(t)}))}}class va{constructor(t,n){this.Dn=t,this.params=n}calculateTargetCount(t,n){return this.Dn.Cn(t).next((t=>Math.floor(n/100*t)))}nthSequenceNumber(t,n){if(0===n)return sc.resolve(nr.A);const e=new ga(n);return this.Dn.forEachTarget(t,(t=>e.bn(t.sequenceNumber))).next((()=>this.Dn.xn(t,(t=>e.bn(t))))).next((()=>e.maxValue))}removeTargets(t,n,e){return this.Dn.removeTargets(t,n,e)}removeOrphanedDocuments(t,n){return this.Dn.removeOrphanedDocuments(t,n)}collect(t,n){return-1===this.params.cacheSizeCollectionThreshold?(Fs("LruGarbageCollector","Garbage collection skipped; disabled"),sc.resolve(na)):this.getCacheSize(t).next((e=>e<this.params.cacheSizeCollectionThreshold?(Fs("LruGarbageCollector",`Garbage collection skipped; Cache size ${e} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),na):this.Nn(t,n)))}getCacheSize(t){return this.Dn.getCacheSize(t)}Nn(t,n){let e,i,s,r,o,h,u;const c=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((n=>(n>this.params.maximumSequenceNumbersToCollect?(Fs("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${n}`),i=this.params.maximumSequenceNumbersToCollect):i=n,r=Date.now(),this.nthSequenceNumber(t,i)))).next((i=>(e=i,o=Date.now(),this.removeTargets(t,e,n)))).next((n=>(s=n,h=Date.now(),this.removeOrphanedDocuments(t,e)))).next((t=>(u=Date.now(),Vs()<=J.DEBUG&&Fs("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${r-c}ms\n\tDetermined least recently used ${i} in `+(o-r)+"ms\n"+`\tRemoved ${s} targets in `+(h-o)+"ms\n"+`\tRemoved ${t} documents in `+(u-h)+"ms\n"+`Total Duration: ${u-c}ms`),sc.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:t}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,n){this.db=t,this.garbageCollector=function(t,n){return new va(t,n)}(this,n)}Cn(t){const n=this.kn(t);return this.db.getTargetCache().getTargetCount(t).next((t=>n.next((n=>t+n))))}kn(t){let n=0;return this.xn(t,(()=>{n++})).next((()=>n))}forEachTarget(t,n){return this.db.getTargetCache().forEachTarget(t,n)}xn(t,n){return this.Mn(t,((t,e)=>n(e)))}addReference(t,n,e){return Ia(t,e)}removeReference(t,n,e){return Ia(t,e)}removeTargets(t,n,e){return this.db.getTargetCache().removeTargets(t,n,e)}markPotentiallyOrphaned(t,n){return Ia(t,n)}On(t,n){return function(t,n){let e=!1;return ca(t).zt((i=>oa(t,i,n).next((t=>(t&&(e=!0),sc.resolve(!t)))))).next((()=>e))}(t,n)}removeOrphanedDocuments(t,n){const e=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Mn(t,((r,o)=>{if(o<=n){const n=this.On(t,r).next((n=>{if(!n)return s++,e.getEntry(t,r).next((()=>(e.removeEntry(r,ur.min()),wa(t).delete([0,ku(r.path)]))))}));i.push(n)}})).next((()=>sc.waitFor(i))).next((()=>e.apply(t))).next((()=>s))}removeTarget(t,n){const e=n.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,e)}updateLimboDocument(t,n){return Ia(t,n)}Mn(t,n){const e=wa(t);let i,s=nr.A;return e.Wt({index:"documentTargetsIndex"},(([t,e],{path:r,sequenceNumber:o})=>{0===t?(s!==nr.A&&n(new Nr(Ou(i)),s),s=o,i=r):s=nr.A})).next((()=>{s!==nr.A&&n(new Nr(Ou(i)),s)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ia(t,n){return wa(t).put(function(t,n){return{targetId:0,path:ku(t.path),sequenceNumber:n}}(n,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.changes=new xh((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Zr.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const e=this.changes.get(n);return void 0!==e?sc.resolve(e):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t){this.M=t}setIndexManager(t){this.indexManager=t}addEntry(t,n,e){return Aa(t).put(e)}removeEntry(t,n,e){return Aa(t).delete(function(t,n){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],Ec(n),e[e.length-1]]}(n,e))}updateMetadata(t,n){return this.getMetadata(t).next((e=>(e.byteSize+=n,this.Fn(t,e))))}getEntry(t,n){let e=Zr.newInvalidDocument(n);return Aa(t).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Ca(n))},((t,i)=>{e=this.$n(n,i)})).next((()=>e))}Bn(t,n){let e={size:0,document:Zr.newInvalidDocument(n)};return Aa(t).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Ca(n))},((t,i)=>{e={document:this.$n(n,i),size:sa(i)}})).next((()=>e))}getEntries(t,n){let e=Ph();return this.Ln(t,n,((t,n)=>{const i=this.$n(t,n);e=e.insert(t,i)})).next((()=>e))}Un(t,n){let e=Ph(),i=new Nh(Nr.comparator);return this.Ln(t,n,((t,n)=>{const s=this.$n(t,n);e=e.insert(t,s),i=i.insert(t,sa(n))})).next((()=>({documents:e,qn:i})))}Ln(t,n,e){if(n.isEmpty())return sc.resolve();let i=new Mh(Na);n.forEach((t=>i=i.add(t)));const s=IDBKeyRange.bound(Ca(i.first()),Ca(i.last())),r=i.getIterator();let o=r.getNext();return Aa(t).Wt({index:"documentKeyIndex",range:s},((t,n,i)=>{const s=Nr.fromSegments([...n.prefixPath,n.collectionGroup,n.documentId]);for(;o&&Na(o,s)<0;)e(o,null),o=r.getNext();o&&o.isEqual(s)&&(e(o,n),o=r.hasNext()?r.getNext():null),o?i.Ut(Ca(o)):i.done()})).next((()=>{for(;o;)e(o,null),o=r.hasNext()?r.getNext():null}))}getAllFromCollection(t,n,e){const i=[n.popLast().toArray(),n.lastSegment(),Ec(e.readTime),e.documentKey.path.isEmpty()?"":e.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Aa(t).qt(IDBKeyRange.bound(i,s,!0)).next((t=>{let n=Ph();for(const e of t){const t=this.$n(Nr.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);n=n.insert(t.key,t)}return n}))}getAllFromCollectionGroup(t,n,e,i){let s=Ph();const r=xa(n,e),o=xa(n,oo.max());return Aa(t).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(r,o,!0)},((t,n,e)=>{const r=this.$n(Nr.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);s=s.insert(r.key,r),s.size===i&&e.done()})).next((()=>s))}newChangeBuffer(t){return new Ta(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((t=>t.byteSize))}getMetadata(t){return Sa(t).get("remoteDocumentGlobalKey").next((t=>(js(!!t),t)))}Fn(t,n){return Sa(t).put("remoteDocumentGlobalKey",n)}$n(t,n){if(n){const t=function(t,n){let e;if(n.document)e=function(t,n,e){const i=au(t,n.name),s=ou(n.updateTime),r=new Yr({mapValue:{fields:n.fields}}),o=Zr.newFoundDocument(i,s,r);return e&&o.setHasCommittedMutations(),e?o.setHasCommittedMutations():o}(t.Jt,n.document,!!n.hasCommittedMutations);else if(n.noDocument){const t=Nr.fromSegments(n.noDocument.path),i=Tc(n.noDocument.readTime);e=Zr.newNoDocument(t,i),n.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!n.unknownDocument)return qs();{const t=Nr.fromSegments(n.unknownDocument.path),i=Tc(n.unknownDocument.version);e=Zr.newUnknownDocument(t,i)}}return n.readTime&&e.setReadTime(function(t){const n=new hr(t[0],t[1]);return ur.fromTimestamp(n)}(n.readTime)),e}(this.M,n);if(!t.isNoDocument()||!t.version.isEqual(ur.min()))return t}return Zr.newInvalidDocument(t)}}class Ta extends Ea{constructor(t,n){super(),this.Kn=t,this.trackRemovals=n,this.Gn=new xh((t=>t.toString()),((t,n)=>t.isEqual(n)))}applyChanges(t){const n=[];let e=0,i=new Mh(((t,n)=>sr(t.canonicalString(),n.canonicalString())));return this.changes.forEach(((s,r)=>{const o=this.Gn.get(s);if(n.push(this.Kn.removeEntry(t,s,o.readTime)),r.isValidDocument()){const h=Ic(this.Kn.M,r);i=i.add(s.path.popLast());const u=sa(h);e+=u-o.size,n.push(this.Kn.addEntry(t,s,h))}else if(e-=o.size,this.trackRemovals){const e=Ic(this.Kn.M,r.convertToNoDocument(ur.min()));n.push(this.Kn.addEntry(t,s,e))}})),i.forEach((e=>{n.push(this.Kn.indexManager.addToCollectionParentIndex(t,e))})),n.push(this.Kn.updateMetadata(t,e)),sc.waitFor(n)}getFromCache(t,n){return this.Kn.Bn(t,n).next((t=>(this.Gn.set(n,{size:t.size,readTime:t.document.readTime}),t.document)))}getAllFromCache(t,n){return this.Kn.Un(t,n).next((({documents:t,qn:n})=>(n.forEach(((n,e)=>{this.Gn.set(n,{size:e,readTime:t.get(n).readTime})})),t)))}}function Sa(t){return mc(t,"remoteDocumentGlobal")}function Aa(t){return mc(t,"remoteDocumentsV14")}function Ca(t){const n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],n[n.length-1]]}function xa(t,n){const e=n.documentKey.path.toArray();return[t,Ec(n.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Na(t,n){const e=t.path.toArray(),i=n.path.toArray();let s=0;for(let t=0;t<e.length-2&&t<i.length-2;++t)if(s=sr(e[t],i[t]),s)return s;return s=sr(e.length,i.length),s||(s=sr(e[e.length-2],i[i.length-2]),s||sr(e[e.length-1],i[i.length-1]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t){this.M=t}kt(t,n,e,i){const s=new rc("createOrUpgrade",n);e<1&&i>=1&&(function(t){t.createObjectStore("owner")}(t),function(t){t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$u,{unique:!0}),t.createObjectStore("documentMutations")}(t),Ra(t),function(t){t.createObjectStore("remoteDocuments")}(t));let r=sc.resolve();return e<3&&i>=3&&(0!==e&&(function(t){t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal")}(t),Ra(t)),r=r.next((()=>function(t){const n=t.store("targetGlobal"),e={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ur.min().toTimestamp(),targetCount:0};return n.put("targetGlobalKey",e)}(s)))),e<4&&i>=4&&(0!==e&&(r=r.next((()=>function(t,n){return n.store("mutations").qt().next((e=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$u,{unique:!0});const i=n.store("mutations"),s=e.map((t=>i.put(t)));return sc.waitFor(s)}))}(t,s)))),r=r.next((()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)}))),e<5&&i>=5&&(r=r.next((()=>this.Qn(s)))),e<6&&i>=6&&(r=r.next((()=>(function(t){t.createObjectStore("remoteDocumentGlobal")}(t),this.jn(s))))),e<7&&i>=7&&(r=r.next((()=>this.Wn(s)))),e<8&&i>=8&&(r=r.next((()=>this.zn(t,s)))),e<9&&i>=9&&(r=r.next((()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t)}))),e<10&&i>=10&&(r=r.next((()=>this.Hn(s)))),e<11&&i>=11&&(r=r.next((()=>{!function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})}(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)}))),e<12&&i>=12&&(r=r.next((()=>{!function(t){const n=t.createObjectStore("documentOverlays",{keyPath:Wu});n.createIndex("collectionPathOverlayIndex",Xu,{unique:!1}),n.createIndex("collectionGroupOverlayIndex",Yu,{unique:!1})}(t)}))),e<13&&i>=13&&(r=r.next((()=>function(t){const n=t.createObjectStore("remoteDocumentsV14",{keyPath:Fu});n.createIndex("documentKeyIndex",Lu),n.createIndex("collectionGroupIndex",Uu)}(t))).next((()=>this.Jn(t,s))).next((()=>t.deleteObjectStore("remoteDocuments")))),e<14&&i>=14&&(r=r.next((()=>{!function(t){t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:Ku}).createIndex("sequenceNumberIndex",Hu,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:zu}).createIndex("documentKeyIndex",Qu,{unique:!1})}(t)}))),r}jn(t){let n=0;return t.store("remoteDocuments").Wt(((t,e)=>{n+=sa(e)})).next((()=>{const e={byteSize:n};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",e)}))}Qn(t){const n=t.store("mutationQueues"),e=t.store("mutations");return n.qt().next((n=>sc.forEach(n,(n=>{const i=IDBKeyRange.bound([n.userId,-1],[n.userId,n.lastAcknowledgedBatchId]);return e.qt("userMutationsIndex",i).next((e=>sc.forEach(e,(e=>{js(e.userId===n.userId);const i=Sc(this.M,e);return ia(t,n.userId,i).next((()=>{}))}))))}))))}Wn(t){const n=t.store("targetDocuments"),e=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next((t=>{const i=[];return e.Wt((e=>{const s=new dr(e),r=function(t){return[0,ku(t)]}(s);i.push(n.get(r).next((e=>e?sc.resolve():(e=>n.put({targetId:0,path:ku(e),sequenceNumber:t.highestListenSequenceNumber}))(s))))})).next((()=>sc.waitFor(i)))}))}zn(t,n){t.createObjectStore("collectionParents",{keyPath:Gu});const e=n.store("collectionParents"),i=new Qc,s=t=>{if(i.add(t)){const n=t.lastSegment(),i=t.popLast();return e.put({collectionId:n,parent:ku(i)})}};return n.store("remoteDocuments").Wt({jt:!0},(t=>{const n=new dr(t);return s(n.popLast())})).next((()=>n.store("documentMutations").Wt({jt:!0},(([t,n,e])=>{const i=Ou(n);return s(i.popLast())}))))}Hn(t){const n=t.store("targets");return n.Wt(((t,e)=>{const i=Ac(e),s=Cc(this.M,i);return n.put(s)}))}Jn(t,n){const e=n.store("remoteDocuments"),i=[];return e.Wt(((t,e)=>{const s=n.store("remoteDocumentsV14"),r=(o=e,o.document?new Nr(dr.fromString(o.document.name).popFirst(5)):o.noDocument?Nr.fromSegments(o.noDocument.path):o.unknownDocument?Nr.fromSegments(o.unknownDocument.path):qs()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h={prefixPath:r.slice(0,r.length-2),collectionGroup:r[r.length-2],documentId:r[r.length-1],readTime:e.readTime||[0,0],unknownDocument:e.unknownDocument,noDocument:e.noDocument,document:e.document,hasCommittedMutations:!!e.hasCommittedMutations};i.push(s.put(h))})).next((()=>sc.waitFor(i)))}}function Ra(t){t.createObjectStore("targetDocuments",{keyPath:qu}).createIndex("documentTargetsIndex",ju,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Bu,{unique:!0}),t.createObjectStore("targetGlobal")}const Ma="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Oa{constructor(t,n,e,i,s,r,o,h,u,c,a=13){if(this.allowTabSynchronization=t,this.persistenceKey=n,this.clientId=e,this.Yn=s,this.window=r,this.document=o,this.Xn=u,this.Zn=c,this.ts=a,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=()=>Promise.resolve(),!Oa.vt())throw new Ks(Gs.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ba(this,i),this.hs=n+"main",this.M=new bc(h),this.ls=new oc(this.hs,this.ts,new ka(this.M)),this.fs=new la(this.referenceDelegate,this.M),this.ds=function(t){return new Da(t)}(this.M),this._s=new Rc,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,!1===c&&Ls("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Ks(Gs.FAILED_PRECONDITION,Ma);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.fs.getHighestSequenceNumber(t)))})).then((t=>{this.es=new nr(t,this.Xn)})).then((()=>{this.ns=!0})).catch((t=>(this.ls&&this.ls.close(),Promise.reject(t))))}Ts(t){return this.cs=async n=>{if(this.started)return t(n)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ls.Ot((async n=>{null===n.newVersion&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Yn.enqueueAndForget((async()=>{this.started&&await this.gs()})))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>_a(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Es(t).next((t=>{t||(this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))))}))})).next((()=>this.As(t))).next((n=>this.isPrimary&&!n?this.Rs(t).next((()=>!1)):!!n&&this.Ps(t).next((()=>!0)))))).catch((t=>{if(cc(t))return Fs("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return Fs("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Yn.enqueueRetryable((()=>this.cs(t))),this.isPrimary=t}))}Es(t){return $a(t).get("owner").next((t=>sc.resolve(this.bs(t))))}Vs(t){return _a(t).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=mc(t,"clientMetadata");return n.qt().next((t=>{const e=this.Ds(t,18e5),i=t.filter((t=>-1===e.indexOf(t)));return sc.forEach(i,(t=>n.delete(t.clientId))).next((()=>i))}))})).catch((()=>[]));if(this.ws)for(const n of t)this.ws.removeItem(this.Cs(n.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.gs().then((()=>this.vs())).then((()=>this.Is()))))}bs(t){return!!t&&t.ownerId===this.clientId}As(t){return this.Zn?sc.resolve(!0):$a(t).get("owner").next((n=>{if(null!==n&&this.Ss(n.leaseTimestampMs,5e3)&&!this.xs(n.ownerId)){if(this.bs(n)&&this.networkEnabled)return!0;if(!this.bs(n)){if(!n.allowTabSynchronization)throw new Ks(Gs.FAILED_PRECONDITION,Ma);return!1}}return!(!this.networkEnabled||!this.inForeground)||_a(t).qt().next((t=>void 0===this.Ds(t,5e3).find((t=>{if(this.clientId!==t.clientId){const n=!this.inForeground&&t.inForeground,e=this.networkEnabled===t.networkEnabled;if(!this.networkEnabled&&t.networkEnabled||n&&e)return!0}return!1}))))})).next((t=>(this.isPrimary!==t&&Fs("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(t=>{const n=new wc(t,nr.A);return this.Rs(n).next((()=>this.Vs(n)))})),this.ls.close(),this.Os()}Ds(t,n){return t.filter((t=>this.Ss(t.updateTimeMs,n)&&!this.xs(t.clientId)))}Fs(){return this.runTransaction("getActiveClients","readonly",(t=>_a(t).qt().next((t=>this.Ds(t,18e5).map((t=>t.clientId))))))}get started(){return this.ns}getMutationQueue(t,n){return ra.Yt(t,this.M,n,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(t){return new Xc(t,this.M.Jt.databaseId)}getDocumentOverlayCache(t){return $c.Yt(this.M,t)}getBundleCache(){return this._s}runTransaction(t,n,e){Fs("IndexedDbPersistence","Starting transaction:",t);const i="readonly"===n?"readonly":"readwrite",s=14===(r=this.ts)?nc:13===r?tc:12===r?Zu:11===r?Ju:void qs();var r;let o;return this.ls.runTransaction(t,i,s,(i=>(o=new wc(i,this.es?this.es.next():nr.A),"readwrite-primary"===n?this.Es(o).next((t=>!!t||this.As(o))).next((n=>{if(!n)throw Ls(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))),new Ks(Gs.FAILED_PRECONDITION,ec);return e(o)})).next((t=>this.Ps(o).next((()=>t)))):this.$s(o).next((()=>e(o)))))).then((t=>(o.raiseOnCommittedEvent(),t)))}$s(t){return $a(t).get("owner").next((t=>{if(null!==t&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)&&!this.bs(t)&&!(this.Zn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Ks(Gs.FAILED_PRECONDITION,Ma)}))}Ps(t){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return $a(t).put("owner",n)}static vt(){return oc.vt()}Rs(t){const n=$a(t);return n.get("owner").next((t=>this.bs(t)?(Fs("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):sc.resolve()))}Ss(t,n){const e=Date.now();return!(t<e-n||t>e&&(Ls(`Detected an update time that is in the future: ${t} > ${e}`),1))}ys(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.rs=()=>{this.Yn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.gs())))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground="visible"===this.document.visibilityState)}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.ss=()=>{this.Ns(),!function(){try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(t){var n;try{const e=null!==(null===(n=this.ws)||void 0===n?void 0:n.getItem(this.Cs(t)));return Fs("IndexedDbPersistence",`Client '${t}' ${e?"is":"is not"} zombied in LocalStorage`),e}catch(t){return Ls("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(t){Ls("Failed to set zombie client id.",t)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch(t){}}Cs(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function $a(t){return mc(t,"owner")}function _a(t){return mc(t,"clientMetadata")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa{constructor(t,n,e){this.ds=t,this.Bs=n,this.indexManager=e}Ls(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,n).next((e=>this.Us(t,n,e)))}Us(t,n,e){return this.ds.getEntry(t,n).next((t=>{for(const n of e)n.applyToLocalView(t);return t}))}qs(t,n){t.forEach(((t,e)=>{for(const t of n)t.applyToLocalView(e)}))}Ks(t,n){return this.ds.getEntries(t,n).next((n=>this.Gs(t,n).next((()=>n))))}Gs(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,n).next((t=>this.qs(n,t)))}Qs(t,n,e){return function(t){return Nr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(n)?this.js(t,n.path):Vo(n)?this.Ws(t,n,e):this.zs(t,n,e)}js(t,n){return this.Ls(t,new Nr(n)).next((t=>{let n=Fh();return t.isFoundDocument()&&(n=n.insert(t.key,t)),n}))}Ws(t,n,e){const i=n.collectionGroup;let s=Fh();return this.indexManager.getCollectionParents(t,i).next((r=>sc.forEach(r,(r=>{const o=function(t,n){return new Ro(n,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(n,r.child(i));return this.zs(t,o,e).next((t=>{t.forEach(((t,n)=>{s=s.insert(t,n)}))}))})).next((()=>s))))}zs(t,n,e){let i;return this.ds.getAllFromCollection(t,n.path,e).next((e=>(i=e,this.Bs.getAllMutationBatchesAffectingQuery(t,n)))).next((t=>{for(const n of t)for(const t of n.mutations){const e=t.key;let s=i.get(e);null==s&&(s=Zr.newInvalidDocument(e),i=i.insert(e,s)),dh(t,s,n.localWriteTime),s.isFoundDocument()||(i=i.remove(e))}})).next((()=>(i.forEach(((t,e)=>{Go(n,e)||(i=i.remove(t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,n,e,i){this.targetId=t,this.fromCache=n,this.Hs=e,this.Js=i}static Ys(t,n){let e=qh(),i=qh();for(const t of n.docChanges)switch(t.type){case 0:e=e.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Va(t,n.fromCache,e,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{Xs(t){this.Zs=t}Qs(t,n,e,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(n)||e.isEqual(ur.min())?this.ti(t,n):this.Zs.Ks(t,i).next((s=>{const r=this.ei(n,s);return(Oo(n)||$o(n))&&this.ni(n.limitType,r,i,e)?this.ti(t,n):(Vs()<=J.DEBUG&&Fs("QueryEngine","Re-using previous result from %s to execute query: %s",e.toString(),jo(n)),this.Zs.Qs(t,n,function(t){const n=t.toTimestamp().seconds,e=t.toTimestamp().nanoseconds+1,i=ur.fromTimestamp(1e9===e?new hr(n+1,0):new hr(n,e));return new oo(i,Nr.empty(),-1)}(e)).next((t=>(r.forEach((n=>{t=t.insert(n.key,n)})),t))))}))}ei(t,n){let e=new Mh(Ko(t));return n.forEach(((n,i)=>{Go(t,i)&&(e=e.add(i))})),e}ni(t,n,e,i){if(e.size!==n.size)return!0;const s="F"===t?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ti(t,n){return Vs()<=J.DEBUG&&Fs("QueryEngine","Using full collection scan to execute query:",jo(n)),this.Zs.Qs(t,n,oo.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,n,e,i){this.persistence=t,this.si=n,this.M=i,this.ii=new Nh(sr),this.ri=new xh((t=>ao(t)),lo),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(e)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new Pa(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.ii)))}}function Ua(t,n,e,i){return new La(t,n,e,i)}async function Ba(t,n){const e=t;return await e.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return e.Bs.getAllMutationBatches(t).next((s=>(i=s,e.ai(n),e.Bs.getAllMutationBatches(t)))).next((n=>{const s=[],r=[];let o=qh();for(const t of i){s.push(t.batchId);for(const n of t.mutations)o=o.add(n.key)}for(const t of n){r.push(t.batchId);for(const n of t.mutations)o=o.add(n.key)}return e.ci.Ks(t,o).next((t=>({hi:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function qa(t){const n=t;return n.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>n.fs.getLastRemoteSnapshotVersion(t)))}function ja(t,n){const e=t;return e.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===n&&(n=-1),e.Bs.getNextMutationBatchAfterBatchId(t,n))))}async function Ga(t,n,e){const i=t,s=i.ii.get(n),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!cc(t))throw t;Fs("LocalStore",`Failed to update sequence numbers for target ${n}: ${t}`)}i.ii=i.ii.remove(n),i.ri.delete(s.target)}function Ka(t,n,e){const i=t;let s=ur.min(),r=qh();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,n,e){const i=t,s=i.ri.get(e);return void 0!==s?sc.resolve(i.ii.get(s)):i.fs.getTargetData(n,e)}(i,t,Lo(n)).next((n=>{if(n)return s=n.lastLimboFreeSnapshotVersion,i.fs.getMatchingKeysForTargetId(t,n.targetId).next((t=>{r=t}))})).next((()=>i.si.Qs(t,n,e?s:ur.min(),e?r:qh()))).next((t=>(function(t,n,e){let i=ur.min();e.forEach(((t,n)=>{n.readTime.compareTo(i)>0&&(i=n.readTime)})),t.oi.set(n,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(n),t),{documents:t,li:r})))))}class Ha{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,n){return sc.resolve(this.wi.get(n))}saveBundleMetadata(t,n){var e;return this.wi.set(n.id,{id:(e=n).id,version:e.version,createTime:ou(e.createTime)}),sc.resolve()}getNamedQuery(t,n){return sc.resolve(this.mi.get(n))}saveNamedQuery(t,n){return this.mi.set(n.name,function(t){return{name:t.name,query:xc(t.bundledQuery),readTime:ou(t.readTime)}}(n)),sc.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.overlays=new Nh(Nr.comparator),this.gi=new Map}getOverlay(t,n){return sc.resolve(this.overlays.get(n))}saveOverlays(t,n,e){return e.forEach(((e,i)=>{this.Xt(t,n,i)})),sc.resolve()}removeOverlaysForBatchId(t,n,e){const i=this.gi.get(e);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.gi.delete(e)),sc.resolve()}getOverlaysForCollection(t,n,e){const i=Lh(),s=n.length+1,r=new Nr(n.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!n.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>e&&i.set(t.getKey(),t)}return sc.resolve(i)}getOverlaysForCollectionGroup(t,n,e,i){let s=new Nh(((t,n)=>t-n));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===n&&t.largestBatchId>e){let n=s.get(t.largestBatchId);null===n&&(n=Lh(),s=s.insert(t.largestBatchId,n)),n.set(t.getKey(),t)}}const o=Lh(),h=s.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((t,n)=>o.set(t,n))),!(o.size()>=i)););return sc.resolve(o)}Xt(t,n,e){if(null===e)return;const i=this.overlays.get(e.key);if(null!==i){const t=this.gi.get(i.largestBatchId).delete(e.key);this.gi.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(e.key,new yc(n,e));let s=this.gi.get(n);void 0===s&&(s=qh(),this.gi.set(n,s)),this.gi.set(n,s.add(e.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.yi=new Mh(Wa.pi),this.Ii=new Mh(Wa.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,n){const e=new Wa(t,n);this.yi=this.yi.add(e),this.Ii=this.Ii.add(e)}Ei(t,n){t.forEach((t=>this.addReference(t,n)))}removeReference(t,n){this.Ai(new Wa(t,n))}Ri(t,n){t.forEach((t=>this.removeReference(t,n)))}Pi(t){const n=new Nr(new dr([])),e=new Wa(n,t),i=new Wa(n,t+1),s=[];return this.Ii.forEachInRange([e,i],(t=>{this.Ai(t),s.push(t.key)})),s}bi(){this.yi.forEach((t=>this.Ai(t)))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const n=new Nr(new dr([])),e=new Wa(n,t),i=new Wa(n,t+1);let s=qh();return this.Ii.forEachInRange([e,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const n=new Wa(t,0),e=this.yi.firstAfterOrEqual(n);return null!==e&&t.isEqual(e.key)}}class Wa{constructor(t,n){this.key=t,this.vi=n}static pi(t,n){return Nr.comparator(t.key,n.key)||sr(t.vi,n.vi)}static Ti(t,n){return sr(t.vi,n.vi)||Nr.comparator(t.key,n.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new Mh(Wa.pi)}checkEmpty(t){return sc.resolve(0===this.Bs.length)}addMutationBatch(t,n,e,i){const s=this.Si;this.Si++;const r=new pc(s,n,e,i);this.Bs.push(r);for(const n of i)this.Di=this.Di.add(new Wa(n.key,s)),this.indexManager.addToCollectionParentIndex(t,n.key.path.popLast());return sc.resolve(r)}lookupMutationBatch(t,n){return sc.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(t,n){const e=this.xi(n+1),i=e<0?0:e;return sc.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return sc.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(t){return sc.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const e=new Wa(n,0),i=new Wa(n,Number.POSITIVE_INFINITY),s=[];return this.Di.forEachInRange([e,i],(t=>{const n=this.Ci(t.vi);s.push(n)})),sc.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let e=new Mh(sr);return n.forEach((t=>{const n=new Wa(t,0),i=new Wa(t,Number.POSITIVE_INFINITY);this.Di.forEachInRange([n,i],(t=>{e=e.add(t.vi)}))})),sc.resolve(this.Ni(e))}getAllMutationBatchesAffectingQuery(t,n){const e=n.path,i=e.length+1;let s=e;Nr.isDocumentKey(s)||(s=s.child(""));const r=new Wa(new Nr(s),0);let o=new Mh(sr);return this.Di.forEachWhile((t=>{const n=t.key.path;return!!e.isPrefixOf(n)&&(n.length===i&&(o=o.add(t.vi)),!0)}),r),sc.resolve(this.Ni(o))}Ni(t){const n=[];return t.forEach((t=>{const e=this.Ci(t);null!==e&&n.push(e)})),n}removeMutationBatch(t,n){js(0===this.ki(n.batchId,"removed")),this.Bs.shift();let e=this.Di;return sc.forEach(n.mutations,(i=>{const s=new Wa(i.key,n.batchId);return e=e.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Di=e}))}_n(t){}containsKey(t,n){const e=new Wa(n,0),i=this.Di.firstAfterOrEqual(e);return sc.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return sc.resolve()}ki(t,n){return this.xi(t)}xi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}Ci(t){const n=this.xi(t);return n<0||n>=this.Bs.length?null:this.Bs[n]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this.Mi=t,this.docs=new Nh(Nr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const e=n.key,i=this.docs.get(e),s=i?i.size:0,r=this.Mi(n);return this.docs=this.docs.insert(e,{document:n.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,e.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const e=this.docs.get(n);return sc.resolve(e?e.document.mutableCopy():Zr.newInvalidDocument(n))}getEntries(t,n){let e=Ph();return n.forEach((t=>{const n=this.docs.get(t);e=e.insert(t,n?n.document.mutableCopy():Zr.newInvalidDocument(t))})),sc.resolve(e)}getAllFromCollection(t,n,e){let i=Ph();const s=new Nr(n.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!n.isPrefixOf(t.path))break;t.path.length>n.length+1||ho(ro(s),e)<=0||(i=i.insert(s.key,s.mutableCopy()))}return sc.resolve(i)}getAllFromCollectionGroup(t,n,e,i){qs()}Oi(t,n){return sc.forEach(this.docs,(t=>n(t)))}newChangeBuffer(t){return new Ja(this)}getSize(t){return sc.resolve(this.size)}}class Ja extends Ea{constructor(t){super(),this.Kn=t}applyChanges(t){const n=[];return this.changes.forEach(((e,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(t,i)):this.Kn.removeEntry(e)})),sc.waitFor(n)}getFromCache(t,n){return this.Kn.getEntry(t,n)}getAllFromCache(t,n){return this.Kn.getEntries(t,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t){this.persistence=t,this.Fi=new xh((t=>ao(t)),lo),this.lastRemoteSnapshotVersion=ur.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Qa,this.targetCount=0,this.Li=aa.gn()}forEachTarget(t,n){return this.Fi.forEach(((t,e)=>n(e))),sc.resolve()}getLastRemoteSnapshotVersion(t){return sc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return sc.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),sc.resolve(this.highestTargetId)}setTargetsMetadata(t,n,e){return e&&(this.lastRemoteSnapshotVersion=e),n>this.$i&&(this.$i=n),sc.resolve()}Tn(t){this.Fi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Li=new aa(n),this.highestTargetId=n),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,n){return this.Tn(n),this.targetCount+=1,sc.resolve()}updateTargetData(t,n){return this.Tn(n),sc.resolve()}removeTargetData(t,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,sc.resolve()}removeTargets(t,n,e){let i=0;const s=[];return this.Fi.forEach(((r,o)=>{o.sequenceNumber<=n&&null===e.get(o.targetId)&&(this.Fi.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),sc.waitFor(s).next((()=>i))}getTargetCount(t){return sc.resolve(this.targetCount)}getTargetData(t,n){const e=this.Fi.get(n)||null;return sc.resolve(e)}addMatchingKeys(t,n,e){return this.Bi.Ei(n,e),sc.resolve()}removeMatchingKeys(t,n,e){this.Bi.Ri(n,e);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach((n=>{s.push(i.markPotentiallyOrphaned(t,n))})),sc.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Bi.Pi(n),sc.resolve()}getMatchingKeysForTargetId(t,n){const e=this.Bi.Vi(n);return sc.resolve(e)}containsKey(t,n){return sc.resolve(this.Bi.containsKey(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t,n){this.Ui={},this.overlays={},this.es=new nr(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Za(this),this.indexManager=new zc,this.ds=function(t){return new Ya(t)}((t=>this.referenceDelegate.qi(t))),this.M=new bc(n),this._s=new Ha(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new za,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let e=this.Ui[t.toKey()];return e||(e=new Xa(n,this.referenceDelegate),this.Ui[t.toKey()]=e),e}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,n,e){Fs("MemoryPersistence","Starting transaction:",t);const i=new nl(this.es.next());return this.referenceDelegate.Ki(),e(i).next((t=>this.referenceDelegate.Gi(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Qi(t,n){return sc.or(Object.values(this.Ui).map((e=>()=>e.containsKey(t,n))))}}class nl extends ic{constructor(t){super(),this.currentSequenceNumber=t}}class el{constructor(t){this.persistence=t,this.ji=new Qa,this.Wi=null}static zi(t){return new el(t)}get Hi(){if(this.Wi)return this.Wi;throw qs()}addReference(t,n,e){return this.ji.addReference(e,n),this.Hi.delete(e.toString()),sc.resolve()}removeReference(t,n,e){return this.ji.removeReference(e,n),this.Hi.add(e.toString()),sc.resolve()}markPotentiallyOrphaned(t,n){return this.Hi.add(n.toString()),sc.resolve()}removeTarget(t,n){this.ji.Pi(n.targetId).forEach((t=>this.Hi.add(t.toString())));const e=this.persistence.getTargetCache();return e.getMatchingKeysForTargetId(t,n.targetId).next((t=>{t.forEach((t=>this.Hi.add(t.toString())))})).next((()=>e.removeTargetData(t,n)))}Ki(){this.Wi=new Set}Gi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return sc.forEach(this.Hi,(e=>{const i=Nr.fromPath(e);return this.Ji(t,i).next((t=>{t||n.removeEntry(i,ur.min())}))})).next((()=>(this.Wi=null,n.apply(t))))}updateLimboDocument(t,n){return this.Ji(t,n).next((t=>{t?this.Hi.delete(n.toString()):this.Hi.add(n.toString())}))}qi(t){return 0}Ji(t,n){return sc.or([()=>sc.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Qi(t,n)])}}class il{constructor(){this.activeTargetIds=Gh()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class sl{constructor(){this.$r=new il,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,e){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,n,e){this.Br[t]=n}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new il,Promise.resolve()}handleUserChange(t,n,e){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{Lr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){Fs("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){Fs("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId,this.io=(t.ssl?"https":"http")+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,n,e,i,s){const r=this.uo(t,n);Fs("RestConnection","Sending: ",r,e);const o={};return this.ao(o,i,s),this.co(t,r,o,e).then((t=>(Fs("RestConnection","Received: ",t),t)),(n=>{throw Us("RestConnection",`${t} failed with error: `,n,"url: ",r,"request:",e),n}))}ho(t,n,e,i,s){return this.oo(t,n,e,i,s)}ao(t,n,e){t["X-Goog-Api-Client"]="gl-js/ fire/"+_s,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((n,e)=>t[e]=n)),e&&e.headers.forEach(((n,e)=>t[e]=n))}uo(t,n){return`${this.io}/v1/${n}:${hl[t]}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,e,i){return new Promise(((s,r)=>{const o=new Ms;o.listenOnce(xs.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Cs.NO_ERROR:const n=o.getResponseJson();Fs("Connection","XHR received:",JSON.stringify(n)),s(n);break;case Cs.TIMEOUT:Fs("Connection",'RPC "'+t+'" timed out'),r(new Ks(Gs.DEADLINE_EXCEEDED,"Request time out"));break;case Cs.HTTP_ERROR:const e=o.getStatus();if(Fs("Connection",'RPC "'+t+'" failed with status:',e,"response text:",o.getResponseText()),e>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const n=function(t){const n=t.toLowerCase().replace(/_/g,"-");return Object.values(Gs).indexOf(n)>=0?n:Gs.UNKNOWN}(t.status);r(new Ks(n,t.message))}else r(new Ks(Gs.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Ks(Gs.UNAVAILABLE,"Connection failed."));break;default:qs()}}finally{Fs("Connection",'RPC "'+t+'" completed.')}}));const h=JSON.stringify(i);o.send(n,"POST",h,e,15)}))}lo(t,n,e){const i=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new Es,r=ge(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ks({})),this.ao(o.initMessageHeaders,n,e),d()||m()||f().indexOf("Electron/")>=0||p()||f().indexOf("MSAppHost/")>=0||w()||(o.httpHeadersOverwriteParam="$httpHeaders");const h=i.join("");Fs("Connection","Creating WebChannel: "+h,o);const u=s.createWebChannel(h,o);let c=!1,a=!1;const l=new ul({Wr:t=>{a?Fs("Connection","Not sending because WebChannel is closed:",t):(c||(Fs("Connection","Opening WebChannel transport."),u.open(),c=!0),Fs("Connection","WebChannel sending:",t),u.send(t))},zr:()=>u.close()}),g=(t,n,e)=>{t.listen(n,(t=>{try{e(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return g(u,Rs.EventType.OPEN,(()=>{a||Fs("Connection","WebChannel transport opened.")})),g(u,Rs.EventType.CLOSE,(()=>{a||(a=!0,Fs("Connection","WebChannel transport closed"),l.no())})),g(u,Rs.EventType.ERROR,(t=>{a||(a=!0,Us("Connection","WebChannel transport errored:",t),l.no(new Ks(Gs.UNAVAILABLE,"The operation could not be completed")))})),g(u,Rs.EventType.MESSAGE,(t=>{var n;if(!a){const e=t.data[0];js(!!e);const i=e,s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){Fs("Connection","WebChannel received error:",s);const t=s.status;let n=function(t){const n=Sh[t];if(void 0!==n)return Ch(n)}(t),e=s.message;void 0===n&&(n=Gs.INTERNAL,e="Unknown error status: "+t+" with message "+s.message),a=!0,l.no(new Ks(n,e)),u.close()}else Fs("Connection","WebChannel received:",e),l.so(e)}})),g(r,Ns.STAT_EVENT,(t=>{10===t.stat?Fs("Connection","Detected buffering proxy"):11===t.stat&&Fs("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.eo()}),0),l}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){return new eu(t,!0)}class fl{constructor(t,n,e=1e3,i=1.5,s=6e4){this.Yn=t,this.timerId=n,this.fo=e,this._o=i,this.wo=s,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const n=Math.floor(this.mo+this.Eo()),e=Math.max(0,Date.now()-this.po),i=Math.max(0,n-e);i>0&&Fs("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${e} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,(()=>(this.po=Date.now(),t()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,n,e,i,s,r,o,h){this.Yn=t,this.Ro=e,this.Po=i,this.bo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=h,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new fl(t,n)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==t?this.Do.reset():n&&n.code===Gs.RESOURCE_EXHAUSTED?(Ls(n.toString()),Ls("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===Gs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,e])=>{this.Vo===n&&this.qo(t,e)}),(n=>{t((()=>{const t=new Ks(Gs.UNKNOWN,"Fetching auth token failed: "+n.message);return this.Ko(t)}))}))}qo(t,n){const e=this.Uo(this.Vo);this.stream=this.Go(t,n),this.stream.Hr((()=>{e((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((t=>{e((()=>this.Ko(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(t){return Fs("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Yn.enqueueAndForget((()=>this.Vo===t?n():(Fs("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wl extends dl{constructor(t,n,e,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,e,i,r),this.M=s}Go(t,n){return this.bo.lo("Listen",t,n)}onMessage(t){this.Do.reset();const n=function(t,n){let e;if("targetChange"in n){const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:qs()}(n.targetChange.targetChangeType||"NO_CHANGE"),s=n.targetChange.targetIds||[],r=function(t,n){return t.N?(js(void 0===n||"string"==typeof n),gr.fromBase64String(n||"")):(js(void 0===n||n instanceof Uint8Array),gr.fromUint8Array(n||new Uint8Array))}(t,n.targetChange.resumeToken),o=n.targetChange.cause,h=o&&function(t){const n=void 0===t.code?Gs.UNKNOWN:Ch(t.code);return new Ks(n,t.message||"")}(o);e=new Wh(i,s,r,h||null)}else if("documentChange"in n){const i=n.documentChange,s=au(t,i.document.name),r=ou(i.document.updateTime),o=new Yr({mapValue:{fields:i.document.fields}}),h=Zr.newFoundDocument(s,r,o);e=new zh(i.targetIds||[],i.removedTargetIds||[],h.key,h)}else if("documentDelete"in n){const i=n.documentDelete,s=au(t,i.document),r=i.readTime?ou(i.readTime):ur.min(),o=Zr.newNoDocument(s,r);e=new zh([],i.removedTargetIds||[],o.key,o)}else if("documentRemove"in n){const i=n.documentRemove,s=au(t,i.document);e=new zh([],i.removedTargetIds||[],s,null)}else{if(!("filter"in n))return qs();{const t=n.filter,i=new Th(t.count||0);e=new Qh(t.targetId,i)}}return e}(this.M,t),e=function(t){if(!("targetChange"in t))return ur.min();const n=t.targetChange;return n.targetIds&&n.targetIds.length?ur.min():n.readTime?ou(n.readTime):ur.min()}(t);return this.listener.Qo(n,e)}jo(t){const n={};n.database=du(this.M),n.addTarget=function(t,n){let e;const i=n.target;return e=fo(i)?{documents:yu(t,i)}:{query:vu(t,i)},e.targetId=n.targetId,n.resumeToken.approximateByteSize()>0?e.resumeToken=su(t,n.resumeToken):n.snapshotVersion.compareTo(ur.min())>0&&(e.readTime=iu(t,n.snapshotVersion.toTimestamp())),e}(this.M,t);const e=function(t,n){const e=function(t,n){switch(n){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return qs()}}(0,n.purpose);return null==e?null:{"goog-listen-tags":e}}(0,t);e&&(n.labels=e),this.Fo(n)}Wo(t){const n={};n.database=du(this.M),n.removeTarget=t,this.Fo(n)}}class ml extends dl{constructor(t,n,e,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,e,i,r),this.M=s,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,n){return this.bo.lo("Write",t,n)}onMessage(t){if(js(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const n=function(t,n){return t&&t.length>0?(js(void 0!==n),t.map((t=>function(t,n){let e=ou(t.updateTime?t.updateTime:n);return e.isEqual(ur.min())&&(e=ou(n)),new uh(e,t.transformResults||[])}(t,n)))):[]}(t.writeResults,t.commitTime),e=ou(t.commitTime);return this.listener.Yo(e,n)}return js(!t.writeResults||0===t.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=du(this.M),this.Fo(t)}Jo(t){const n={streamToken:this.lastStreamToken,writes:t.map((t=>pu(this.M,t)))};this.Fo(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends class{}{constructor(t,n,e,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=e,this.M=i,this.tu=!1}eu(){if(this.tu)throw new Ks(Gs.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,n,e){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.oo(t,n,e,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Gs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ks(Gs.UNKNOWN,t.toString())}))}ho(t,n,e){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ho(t,n,e,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Gs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ks(Gs.UNKNOWN,t.toString())}))}terminate(){this.tu=!0}}class gl{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,"Online"===t&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const n=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Ls(n),this.iu=!1):Fs("OnlineStateTracker",n)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,n,e,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=e,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=s,this._u.Lr((()=>{e.enqueueAndForget((async()=>{Cl(this)&&(Fs("RemoteStore","Restarting streams for network reachability change."),await async function(t){const n=t;n.fu.add(4),await bl(n),n.wu.set("Unknown"),n.fu.delete(4),await vl(n)}(this))}))})),this.wu=new gl(e,i)}}async function vl(t){if(Cl(t))for(const n of t.du)await n(!0)}async function bl(t){for(const n of t.du)await n(!1)}function Il(t,n){const e=t;e.lu.has(n.targetId)||(e.lu.set(n.targetId,n),Al(e)?Sl(e):Gl(e).xo()&&Dl(e,n))}function El(t,n){const e=t,i=Gl(e);e.lu.delete(n),i.xo()&&Tl(e,n),0===e.lu.size&&(i.xo()?i.Mo():Cl(e)&&e.wu.set("Unknown"))}function Dl(t,n){t.mu.Z(n.targetId),Gl(t).jo(n)}function Tl(t,n){t.mu.Z(n),Gl(t).Wo(n)}function Sl(t){t.mu=new Yh({getRemoteKeysForTarget:n=>t.remoteSyncer.getRemoteKeysForTarget(n),Et:n=>t.lu.get(n)||null}),Gl(t).start(),t.wu.ru()}function Al(t){return Cl(t)&&!Gl(t).Co()&&t.lu.size>0}function Cl(t){return 0===t.fu.size}function xl(t){t.mu=void 0}async function Nl(t){t.lu.forEach((n=>{Dl(t,n)}))}async function kl(t,n){xl(t),Al(t)?(t.wu.au(n),Sl(t)):t.wu.set("Unknown")}async function Rl(t,n,e){if(t.wu.set("Online"),n instanceof Wh&&2===n.state&&n.cause)try{await async function(t,n){const e=n.cause;for(const i of n.targetIds)t.lu.has(i)&&(await t.remoteSyncer.rejectListen(i,e),t.lu.delete(i),t.mu.removeTarget(i))}(t,n)}catch(e){Fs("RemoteStore","Failed to remove targets %s: %s ",n.targetIds.join(","),e),await Ml(t,e)}else if(n instanceof zh?t.mu.ut(n):n instanceof Qh?t.mu._t(n):t.mu.ht(n),!e.isEqual(ur.min()))try{const n=await qa(t.localStore);e.compareTo(n)>=0&&await function(t,n){const e=t.mu.yt(n);return e.targetChanges.forEach(((e,i)=>{if(e.resumeToken.approximateByteSize()>0){const s=t.lu.get(i);s&&t.lu.set(i,s.withResumeToken(e.resumeToken,n))}})),e.targetMismatches.forEach((n=>{const e=t.lu.get(n);if(!e)return;t.lu.set(n,e.withResumeToken(gr.EMPTY_BYTE_STRING,e.snapshotVersion)),Tl(t,n);const i=new vc(e.target,n,1,e.sequenceNumber);Dl(t,i)})),t.remoteSyncer.applyRemoteEvent(e)}(t,e)}catch(n){Fs("RemoteStore","Failed to raise snapshot:",n),await Ml(t,n)}}async function Ml(t,n,e){if(!cc(n))throw n;t.fu.add(1),await bl(t),t.wu.set("Offline"),e||(e=()=>qa(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Fs("RemoteStore","Retrying IndexedDB access"),await e(),t.fu.delete(1),await vl(t)}))}function Ol(t,n){return n().catch((e=>Ml(t,e,n)))}async function $l(t){const n=t,e=Kl(n);let i=n.hu.length>0?n.hu[n.hu.length-1].batchId:-1;for(;_l(n);)try{const t=await ja(n.localStore,i);if(null===t){0===n.hu.length&&e.Mo();break}i=t.batchId,Pl(n,t)}catch(t){await Ml(n,t)}Vl(n)&&Fl(n)}function _l(t){return Cl(t)&&t.hu.length<10}function Pl(t,n){t.hu.push(n);const e=Kl(t);e.xo()&&e.Ho&&e.Jo(n.mutations)}function Vl(t){return Cl(t)&&!Kl(t).Co()&&t.hu.length>0}function Fl(t){Kl(t).start()}async function Ll(t){Kl(t).Zo()}async function Ul(t){const n=Kl(t);for(const e of t.hu)n.Jo(e.mutations)}async function Bl(t,n,e){const i=t.hu.shift(),s=gc.from(i,n,e);await Ol(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await $l(t)}async function ql(t,n){n&&Kl(t).Ho&&await async function(t,n){if(function(t){switch(t){default:return qs();case Gs.CANCELLED:case Gs.UNKNOWN:case Gs.DEADLINE_EXCEEDED:case Gs.RESOURCE_EXHAUSTED:case Gs.INTERNAL:case Gs.UNAVAILABLE:case Gs.UNAUTHENTICATED:return!1;case Gs.INVALID_ARGUMENT:case Gs.NOT_FOUND:case Gs.ALREADY_EXISTS:case Gs.PERMISSION_DENIED:case Gs.FAILED_PRECONDITION:case Gs.ABORTED:case Gs.OUT_OF_RANGE:case Gs.UNIMPLEMENTED:case Gs.DATA_LOSS:return!0}}(e=n.code)&&e!==Gs.ABORTED){const e=t.hu.shift();Kl(t).ko(),await Ol(t,(()=>t.remoteSyncer.rejectFailedWrite(e.batchId,n))),await $l(t)}var e}(t,n),Vl(t)&&Fl(t)}async function jl(t,n){const e=t;e.asyncQueue.verifyOperationInProgress(),Fs("RemoteStore","RemoteStore received new credentials");const i=Cl(e);e.fu.add(3),await bl(e),i&&e.wu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(n),e.fu.delete(3),await vl(e)}function Gl(t){return t.gu||(t.gu=function(t,n,e){const i=t;return i.eu(),new wl(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,e)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Hr:Nl.bind(null,t),Yr:kl.bind(null,t),Qo:Rl.bind(null,t)}),t.du.push((async n=>{n?(t.gu.ko(),Al(t)?Sl(t):t.wu.set("Unknown")):(await t.gu.stop(),xl(t))}))),t.gu}function Kl(t){return t.yu||(t.yu=function(t,n,e){const i=t;return i.eu(),new ml(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,e)}(t.datastore,t.asyncQueue,{Hr:Ll.bind(null,t),Yr:ql.bind(null,t),Xo:Ul.bind(null,t),Yo:Bl.bind(null,t)}),t.du.push((async n=>{n?(t.yu.ko(),await $l(t)):(await t.yu.stop(),t.hu.length>0&&(Fs("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))}))),t.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Hl{constructor(t,n,e,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=e,this.op=i,this.removalCallback=s,this.deferred=new Hs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((()=>{}))}static createAndSchedule(t,n,e,i,s){const r=Date.now()+e,o=new Hl(t,n,r,i,s);return o.start(e),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ks(Gs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zl(t,n){if(Ls("AsyncQueue",`${n}: ${t}`),cc(t))return new Ks(Gs.UNAVAILABLE,`${n}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t){this.comparator=t?(n,e)=>t(n,e)||Nr.comparator(n.key,e.key):(t,n)=>Nr.comparator(t.key,n.key),this.keyedMap=Fh(),this.sortedSet=new Nh(this.comparator)}static emptySet(t){return new Ql(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ql))return!1;if(this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),e=t.sortedSet.getIterator();for(;n.hasNext();){const t=n.getNext().key,i=e.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,n){const e=new Ql;return e.comparator=this.comparator,e.keyedMap=t,e.sortedSet=n,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.pu=new Nh(Nr.comparator)}track(t){const n=t.doc.key,e=this.pu.get(n);e?0!==t.type&&3===e.type?this.pu=this.pu.insert(n,t):3===t.type&&1!==e.type?this.pu=this.pu.insert(n,{type:e.type,doc:t.doc}):2===t.type&&2===e.type?this.pu=this.pu.insert(n,{type:2,doc:t.doc}):2===t.type&&0===e.type?this.pu=this.pu.insert(n,{type:0,doc:t.doc}):1===t.type&&0===e.type?this.pu=this.pu.remove(n):1===t.type&&2===e.type?this.pu=this.pu.insert(n,{type:1,doc:e.doc}):0===t.type&&1===e.type?this.pu=this.pu.insert(n,{type:2,doc:t.doc}):qs():this.pu=this.pu.insert(n,t)}Iu(){const t=[];return this.pu.inorderTraversal(((n,e)=>{t.push(e)})),t}}class Xl{constructor(t,n,e,i,s,r,o,h){this.query=t,this.docs=n,this.oldDocs=e,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=h}static fromInitialDocuments(t,n,e,i){const s=[];return n.forEach((t=>{s.push({type:0,doc:t})})),new Xl(t,n,Ql.emptySet(n),s,e,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Bo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,e=t.docChanges;if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t].type!==e[t].type||!n[t].doc.isEqual(e[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.Tu=void 0,this.listeners=[]}}class Jl{constructor(){this.queries=new xh((t=>qo(t)),Bo),this.onlineState="Unknown",this.Eu=new Set}}async function Zl(t,n){const e=t,i=n.query;let s=!1,r=e.queries.get(i);if(r||(s=!0,r=new Yl),s)try{r.Tu=await e.onListen(i)}catch(t){const e=zl(t,`Initialization of query '${jo(n.query)}' failed`);return void n.onError(e)}e.queries.set(i,r),r.listeners.push(n),n.Au(e.onlineState),r.Tu&&n.Ru(r.Tu)&&sf(e)}async function tf(t,n){const e=t,i=n.query;let s=!1;const r=e.queries.get(i);if(r){const t=r.listeners.indexOf(n);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return e.queries.delete(i),e.onUnlisten(i)}function nf(t,n){const e=t;let i=!1;for(const t of n){const n=e.queries.get(t.query);if(n){for(const e of n.listeners)e.Ru(t)&&(i=!0);n.Tu=t}}i&&sf(e)}function ef(t,n,e){const i=t,s=i.queries.get(n);if(s)for(const t of s.listeners)t.onError(e);i.queries.delete(n)}function sf(t){t.Eu.forEach((t=>{t.next()}))}class rf{constructor(t,n,e){this.query=t,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=e||{}}Ru(t){if(!this.options.includeMetadataChanges){const n=[];for(const e of t.docChanges)3!==e.type&&n.push(e);t=new Xl(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),n=!0):this.Su(t,this.onlineState)&&(this.Du(t),n=!0),this.Vu=t,n}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),n=!0),n}Su(t,n){return!t.fromCache||!(this.options.Cu&&"Offline"!==n||t.docs.isEmpty()&&"Offline"!==n)}vu(t){return t.docChanges.length>0||!!(t.syncStateChanged||this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites)&&!0===this.options.includeMetadataChanges}Du(t){t=Xl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t){this.key=t}}class hf{constructor(t){this.key=t}}class uf{constructor(t,n){this.query=t,this.$u=n,this.Bu=null,this.current=!1,this.Lu=qh(),this.mutatedKeys=qh(),this.Uu=Ko(t),this.qu=new Ql(this.Uu)}get Ku(){return this.$u}Gu(t,n){const e=n?n.Qu:new Wl,i=n?n.qu:this.qu;let s=n?n.mutatedKeys:this.mutatedKeys,r=i,o=!1;const h=Oo(this.query)&&i.size===this.query.limit?i.last():null,u=$o(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,n)=>{const c=i.get(t),a=Go(this.query,n)?n:null,l=!!c&&this.mutatedKeys.has(c.key),f=!!a&&(a.hasLocalMutations||this.mutatedKeys.has(a.key)&&a.hasCommittedMutations);let d=!1;c&&a?c.data.isEqual(a.data)?l!==f&&(e.track({type:3,doc:a}),d=!0):this.ju(c,a)||(e.track({type:2,doc:a}),d=!0,(h&&this.Uu(a,h)>0||u&&this.Uu(a,u)<0)&&(o=!0)):!c&&a?(e.track({type:0,doc:a}),d=!0):c&&!a&&(e.track({type:1,doc:c}),d=!0,(h||u)&&(o=!0)),d&&(a?(r=r.add(a),s=f?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),Oo(this.query)||$o(this.query))for(;r.size>this.query.limit;){const t=Oo(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),e.track({type:1,doc:t})}return{qu:r,Qu:e,ni:o,mutatedKeys:s}}ju(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,e){const i=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const s=t.Qu.Iu();s.sort(((t,n)=>function(t,n){const e=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return qs()}};return e(t)-e(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,n.type)||this.Uu(t.doc,n.doc))),this.Wu(e);const r=n?this.zu():[],o=0===this.Lu.size&&this.current?1:0,h=o!==this.Bu;return this.Bu=o,0!==s.length||h?{snapshot:new Xl(this.query,t.qu,i,s,t.mutatedKeys,0===o,h,!1),Hu:r}:{Hu:r}}Au(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Wl,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach((t=>this.$u=this.$u.add(t))),t.modifiedDocuments.forEach((()=>{})),t.removedDocuments.forEach((t=>this.$u=this.$u.delete(t))),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=qh(),this.qu.forEach((t=>{this.Ju(t.key)&&(this.Lu=this.Lu.add(t.key))}));const n=[];return t.forEach((t=>{this.Lu.has(t)||n.push(new hf(t))})),this.Lu.forEach((e=>{t.has(e)||n.push(new of(e))})),n}Yu(t){this.$u=t.li,this.Lu=qh();const n=this.Gu(t.documents);return this.applyChanges(n,!0)}Xu(){return Xl.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class cf{constructor(t,n,e){this.query=t,this.targetId=n,this.view=e}}class af{constructor(t){this.key=t,this.Zu=!1}}class lf{constructor(t,n,e,i,s,r){this.localStore=t,this.remoteStore=n,this.eventManager=e,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.ta={},this.ea=new xh((t=>qo(t)),Bo),this.na=new Map,this.sa=new Set,this.ia=new Nh(Nr.comparator),this.ra=new Map,this.oa=new Qa,this.ua={},this.aa=new Map,this.ca=aa.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function ff(t,n){const e=function(t){const n=t;return n.remoteStore.remoteSyncer.applyRemoteEvent=wf.bind(null,n),n.remoteStore.remoteSyncer.getRemoteKeysForTarget=xf.bind(null,n),n.remoteStore.remoteSyncer.rejectListen=pf.bind(null,n),n.ta.Qo=nf.bind(null,n.eventManager),n.ta.fa=ef.bind(null,n.eventManager),n}(t);let i,s;const r=e.ea.get(n);if(r)i=r.targetId,e.sharedClientState.addLocalQueryTarget(i),s=r.view.Xu();else{const t=await function(t,n){const e=t;return e.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return e.fs.getTargetData(t,n).next((s=>s?(i=s,sc.resolve(i)):e.fs.allocateTargetId(t).next((s=>(i=new vc(n,s,0,t.currentSequenceNumber),e.fs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=e.ii.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ii=e.ii.insert(t.targetId,t),e.ri.set(n,t.targetId)),t}))}(e.localStore,Lo(n));e.isPrimaryClient&&Il(e.remoteStore,t);const r=e.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await async function(t,n,e,i){t.la=(n,e,i)=>async function(t,n,e,i){let s=n.view.Gu(e);s.ni&&(s=await Ka(t.localStore,n.query,!1).then((({documents:t})=>n.view.Gu(t,s))));const r=i&&i.targetChanges.get(n.targetId),o=n.view.applyChanges(s,t.isPrimaryClient,r);return Df(t,n.targetId,o.Hu),o.snapshot}(t,n,e,i);const s=await Ka(t.localStore,n,!0),r=new uf(n,s.li),o=r.Gu(s.documents),h=Hh.createSynthesizedTargetChangeForCurrentChange(e,i&&"Offline"!==t.onlineState),u=r.applyChanges(o,t.isPrimaryClient,h);Df(t,e,u.Hu);const c=new cf(n,e,r);return t.ea.set(n,c),t.na.has(e)?t.na.get(e).push(n):t.na.set(e,[n]),u.snapshot}(e,n,i,"current"===r)}return s}async function df(t,n){const e=t,i=e.ea.get(n),s=e.na.get(i.targetId);if(s.length>1)return e.na.set(i.targetId,s.filter((t=>!Bo(t,n)))),void e.ea.delete(n);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(i.targetId),e.sharedClientState.isActiveQueryTarget(i.targetId)||await Ga(e.localStore,i.targetId,!1).then((()=>{e.sharedClientState.clearQueryState(i.targetId),El(e.remoteStore,i.targetId),If(e,i.targetId)})).catch(ma)):(If(e,i.targetId),await Ga(e.localStore,i.targetId,!0))}async function wf(t,n){const e=t;try{const t=await function(t,n){const e=t,i=n.snapshotVersion;let s=e.ii;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=e.ui.newChangeBuffer({trackRemovals:!0});s=e.ii;const o=[];n.targetChanges.forEach(((r,h)=>{const u=s.get(h);if(!u)return;o.push(e.fs.removeMatchingKeys(t,r.removedDocuments,h).next((()=>e.fs.addMatchingKeys(t,r.addedDocuments,h))));let c=u.withSequenceNumber(t.currentSequenceNumber);n.targetMismatches.has(h)?c=c.withResumeToken(gr.EMPTY_BYTE_STRING,ur.min()).withLastLimboFreeSnapshotVersion(ur.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,i)),s=s.insert(h,c),function(t,n,e){return 0===t.resumeToken.approximateByteSize()||n.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size>0}(u,c,r)&&o.push(e.fs.updateTargetData(t,c))}));let h=Ph();if(n.documentUpdates.forEach((i=>{n.resolvedLimboDocuments.has(i)&&o.push(e.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(function(t,n,e){let i=qh();return e.forEach((t=>i=i.add(t))),n.getEntries(t,i).next((t=>{let i=Ph();return e.forEach(((e,s)=>{const r=t.get(e);s.isNoDocument()&&s.version.isEqual(ur.min())?(n.removeEntry(e,s.readTime),i=i.insert(e,s)):!r.isValidDocument()||s.version.compareTo(r.version)>0||0===s.version.compareTo(r.version)&&r.hasPendingWrites?(n.addEntry(s),i=i.insert(e,s)):Fs("LocalStore","Ignoring outdated watch update for ",e,". Current version:",r.version," Watch version:",s.version)})),i}))}(t,r,n.documentUpdates).next((t=>{h=t}))),!i.isEqual(ur.min())){const n=e.fs.getLastRemoteSnapshotVersion(t).next((()=>e.fs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(n)}return sc.waitFor(o).next((()=>r.apply(t))).next((()=>e.ci.Gs(t,h))).next((()=>h))})).then((t=>(e.ii=s,t)))}(e.localStore,n);n.targetChanges.forEach(((t,n)=>{const i=e.ra.get(n);i&&(js(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Zu=!0:t.modifiedDocuments.size>0?js(i.Zu):t.removedDocuments.size>0&&(js(i.Zu),i.Zu=!1))})),await Af(e,t,n)}catch(t){await ma(t)}}function mf(t,n,e){const i=t;if(i.isPrimaryClient&&0===e||!i.isPrimaryClient&&1===e){const t=[];i.ea.forEach(((e,i)=>{const s=i.view.Au(n);s.snapshot&&t.push(s.snapshot)})),function(t,n){const e=t;e.onlineState=n;let i=!1;e.queries.forEach(((t,e)=>{for(const t of e.listeners)t.Au(n)&&(i=!0)})),i&&sf(e)}(i.eventManager,n),t.length&&i.ta.Qo(t),i.onlineState=n,i.isPrimaryClient&&i.sharedClientState.setOnlineState(n)}}async function pf(t,n,e){const i=t;i.sharedClientState.updateQueryState(n,"rejected",e);const s=i.ra.get(n),r=s&&s.key;if(r){let t=new Nh(Nr.comparator);t=t.insert(r,Zr.newNoDocument(r,ur.min()));const e=qh().add(r),s=new Kh(ur.min(),new Map,new Mh(sr),t,e);await wf(i,s),i.ia=i.ia.remove(r),i.ra.delete(n),Sf(i)}else await Ga(i.localStore,n,!1).then((()=>If(i,n,e))).catch(ma)}async function gf(t,n){const e=t,i=n.batch.batchId;try{const t=await function(t,n){const e=t;return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=n.batch.keys(),s=e.ui.newChangeBuffer({trackRemovals:!0});return function(t,n,e,i){const s=e.batch,r=s.keys();let o=sc.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(n,t))).next((n=>{const r=e.docVersions.get(t);js(null!==r),n.version.compareTo(r)<0&&(s.applyToRemoteDocument(n,e),n.isValidDocument()&&(n.setReadTime(e.commitVersion),i.addEntry(n)))}))})),o.next((()=>t.Bs.removeMutationBatch(n,s)))}(e,t,n,s).next((()=>s.apply(t))).next((()=>e.Bs.performConsistencyCheck(t))).next((()=>e.ci.Ks(t,i)))}))}(e.localStore,n);bf(e,i,null),vf(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Af(e,t)}catch(t){await ma(t)}}async function yf(t,n,e){const i=t;try{const t=await function(t,n){const e=t;return e.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return e.Bs.lookupMutationBatch(t,n).next((n=>(js(null!==n),i=n.keys(),e.Bs.removeMutationBatch(t,n)))).next((()=>e.Bs.performConsistencyCheck(t))).next((()=>e.ci.Ks(t,i)))}))}(i.localStore,n);bf(i,n,e),vf(i,n),i.sharedClientState.updateMutationState(n,"rejected",e),await Af(i,t)}catch(e){await ma(e)}}function vf(t,n){(t.aa.get(n)||[]).forEach((t=>{t.resolve()})),t.aa.delete(n)}function bf(t,n,e){const i=t;let s=i.ua[i.currentUser.toKey()];if(s){const t=s.get(n);t&&(e?t.reject(e):t.resolve(),s=s.remove(n)),i.ua[i.currentUser.toKey()]=s}}function If(t,n,e=null){t.sharedClientState.removeLocalQueryTarget(n);for(const i of t.na.get(n))t.ea.delete(i),e&&t.ta.fa(i,e);t.na.delete(n),t.isPrimaryClient&&t.oa.Pi(n).forEach((n=>{t.oa.containsKey(n)||Ef(t,n)}))}function Ef(t,n){t.sa.delete(n.path.canonicalString());const e=t.ia.get(n);null!==e&&(El(t.remoteStore,e),t.ia=t.ia.remove(n),t.ra.delete(e),Sf(t))}function Df(t,n,e){for(const i of e)i instanceof of?(t.oa.addReference(i.key,n),Tf(t,i)):i instanceof hf?(Fs("SyncEngine","Document no longer in limbo: "+i.key),t.oa.removeReference(i.key,n),t.oa.containsKey(i.key)||Ef(t,i.key)):qs()}function Tf(t,n){const e=n.key,i=e.path.canonicalString();t.ia.get(e)||t.sa.has(i)||(Fs("SyncEngine","New document in limbo: "+e),t.sa.add(i),Sf(t))}function Sf(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const n=t.sa.values().next().value;t.sa.delete(n);const e=new Nr(dr.fromString(n)),i=t.ca.next();t.ra.set(i,new af(e)),t.ia=t.ia.insert(e,i),Il(t.remoteStore,new vc(Lo(Mo(e.path)),i,2,nr.A))}}async function Af(t,n,e){const i=t,s=[],r=[],o=[];i.ea.isEmpty()||(i.ea.forEach(((t,h)=>{o.push(i.la(h,n,e).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(h.targetId,t.fromCache?"not-current":"current"),s.push(t);const n=Va.Ys(h.targetId,t);r.push(n)}})))})),await Promise.all(o),i.ta.Qo(s),await async function(t,n){const e=t;try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>sc.forEach(n,(n=>sc.forEach(n.Hs,(i=>e.persistence.referenceDelegate.addReference(t,n.targetId,i))).next((()=>sc.forEach(n.Js,(i=>e.persistence.referenceDelegate.removeReference(t,n.targetId,i)))))))))}catch(t){if(!cc(t))throw t;Fs("LocalStore","Failed to update sequence numbers: "+t)}for(const t of n){const n=t.targetId;if(!t.fromCache){const t=e.ii.get(n),i=t.withLastLimboFreeSnapshotVersion(t.snapshotVersion);e.ii=e.ii.insert(n,i)}}}(i.localStore,r))}async function Cf(t,n){const e=t;if(!e.currentUser.isEqual(n)){Fs("SyncEngine","User change. New user:",n.toKey());const t=await Ba(e.localStore,n);e.currentUser=n,function(t){t.aa.forEach((t=>{t.forEach((t=>{t.reject(new Ks(Gs.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.aa.clear()}(e),e.sharedClientState.handleUserChange(n,t.removedBatchIds,t.addedBatchIds),await Af(e,t.hi)}}function xf(t,n){const e=t,i=e.ra.get(n);if(i&&i.Zu)return qh().add(i.key);{let t=qh();const i=e.na.get(n);if(!i)return t;for(const n of i){const i=e.ea.get(n);t=t.unionWith(i.view.Ku)}return t}}function Nf(t){const n=t;return n.remoteStore.remoteSyncer.applySuccessfulWrite=gf.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=yf.bind(null,n),n}class kf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=ll(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return Ua(this.persistence,new Fa,t.initialUser,this.M)}wa(t){return new tl(el.zi,this.M)}_a(t){return new sl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rf extends kf{constructor(t,n,e){super(),this.ya=t,this.cacheSizeBytes=n,this.forceOwnership=e,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.ya.initialize(this,t),await Nf(this.ya.syncEngine),await $l(this.ya.remoteStore),await this.persistence.Ts((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}ga(t){return Ua(this.persistence,new Fa,t.initialUser,this.M)}ma(t){return new ya(this.persistence.referenceDelegate.garbageCollector,t.asyncQueue)}wa(t){const n=function(t,n){let e=t.projectId;return t.isDefaultDatabase||(e+="."+t.database),"firestore/"+n+"/"+e+"/"}(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),e=void 0!==this.cacheSizeBytes?ea.withCacheSize(this.cacheSizeBytes):ea.DEFAULT;return new Oa(this.synchronizeTabs,n,t.clientId,e,t.asyncQueue,"undefined"!=typeof window?window:null,al(),this.M,this.sharedClientState,!!this.forceOwnership)}_a(t){return new sl}}class Mf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>mf(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cf.bind(null,this.syncEngine),await async function(t,n){const e=t;n?(e.fu.delete(2),await vl(e)):n||(e.fu.add(2),await bl(e),e.wu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Jl}createDatastore(t){const n=ll(t.databaseInfo.databaseId),e=new cl(t.databaseInfo);return function(t,n,e,i){return new pl(t,n,e,i)}(t.authCredentials,t.appCheckCredentials,e,n)}createRemoteStore(t){return n=this.localStore,e=this.datastore,i=t.asyncQueue,s=t=>mf(this.syncEngine,t,0),r=ol.vt()?new ol:new rl,new yl(n,e,i,s,r);var n,e,i,s,r}createSyncEngine(t,n){return function(t,n,e,i,s,r,o){const h=new lf(t,n,e,i,s,r);return o&&(h.ha=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=t;Fs("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await bl(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,n){this.muted||setTimeout((()=>{this.muted||t(n)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,n,e,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=e,this.databaseInfo=i,this.user=$s.UNAUTHENTICATED,this.clientId=ir.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(e,(async t=>{Fs("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(e,(t=>(Fs("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ks(Gs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Hs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const e=zl(n,"Failed to shutdown persistence");t.reject(e)}})),t.promise}}async function _f(t,n){t.asyncQueue.verifyOperationInProgress(),Fs("FirestoreClient","Initializing OfflineComponentProvider");const e=await t.getConfiguration();await n.initialize(e);let i=e.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Ba(n.localStore,t),i=t)})),n.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=n}async function Pf(t,n){t.asyncQueue.verifyOperationInProgress();const e=await async function(t){return t.offlineComponents||(Fs("FirestoreClient","Using default OfflineComponentProvider"),await _f(t,new kf)),t.offlineComponents}(t);Fs("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await n.initialize(e,i),t.setCredentialChangeListener((t=>jl(n.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,e)=>jl(n.remoteStore,e))),t.onlineComponents=n}async function Vf(t){return t.onlineComponents||(Fs("FirestoreClient","Using default OnlineComponentProvider"),await Pf(t,new Mf)),t.onlineComponents}async function Ff(t){const n=await Vf(t),e=n.eventManager;return e.onListen=ff.bind(null,n.syncEngine),e.onUnlisten=df.bind(null,n.syncEngine),e}const Lf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t,n,e){if(!e)throw new Ks(Gs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${n}.`)}function Bf(t){if(!Nr.isDocumentKey(t))throw new Ks(Gs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qf(t){if(Nr.isDocumentKey(t))throw new Ks(Gs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=function(t){return t.constructor?t.constructor.name:null}(t);return n?`a custom ${n} object`:"an object"}}return"function"==typeof t?"a function":qs()}function Gf(t,n){if("_delegate"in t&&(t=t._delegate),!(t instanceof n)){if(n.name===t.constructor.name)throw new Ks(Gs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=jf(t);throw new Ks(Gs.INVALID_ARGUMENT,`Expected type '${n.name}', but it was: ${e}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kf{constructor(t){var n;if(void 0===t.host){if(void 0!==t.ssl)throw new Ks(Gs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(n=t.ssl)||void 0===n||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ks(Gs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,n,e,i){if(!0===n&&!0===i)throw new Ks(Gs.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,n,e){this._authCredentials=n,this._appCheckCredentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kf({}),this._settingsFrozen=!1,t instanceof Ar?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ks(Gs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ar(t.options.projectId)}(t))}get app(){if(!this._app)throw new Ks(Gs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ks(Gs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Qs;switch(t.type){case"gapi":const n=t.client;return js(!("object"!=typeof n||null===n||!n.auth||!n.auth.getAuthHeaderValueForFirstParty)),new Js(n,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Ks(Gs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Lf.get(t);n&&(Fs("ComponentProvider","Removing Datastore"),Lf.delete(t),n.terminate())}(this),Promise.resolve()}}function zf(t,n,e,i={}){var s;const r=(t=Gf(t,Hf))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==n&&Us("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${n}:${e}`,ssl:!1})),i.mockUserToken){let n,e;if("string"==typeof i.mockUserToken)n=i.mockUserToken,e=$s.MOCK_USER;else{n=function(t,n){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e=n||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${e}`,aud:e,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[h(JSON.stringify({alg:"none",type:"JWT"})),h(JSON.stringify(r)),""].join(".")}(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new Ks(Gs.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");e=new $s(r)}t._authCredentials=new Ws(new zs(n,e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,n,e){this.converter=n,this._key=e,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qf(this.firestore,t,this._key)}}class Wf{constructor(t,n,e){this.converter=n,this._query=e,this.type="query",this.firestore=t}withConverter(t){return new Wf(this.firestore,t,this._query)}}class Xf extends Wf{constructor(t,n,e){super(t,n,Mo(e)),this._path=e,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qf(this.firestore,null,new Nr(t))}withConverter(t){return new Xf(this.firestore,t,this._path)}}function Yf(t,n,...e){if(t=j(t),Uf("collection","path",n),t instanceof Hf){const i=dr.fromString(n,...e);return qf(i),new Xf(t,null,i)}{if(!(t instanceof Qf||t instanceof Xf))throw new Ks(Gs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(dr.fromString(n,...e));return qf(i),new Xf(t.firestore,null,i)}}function Jf(t,n,...e){if(t=j(t),1===arguments.length&&(n=ir.R()),Uf("doc","path",n),t instanceof Hf){const i=dr.fromString(n,...e);return Bf(i),new Qf(t,null,new Nr(i))}{if(!(t instanceof Qf||t instanceof Xf))throw new Ks(Gs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(dr.fromString(n,...e));return Bf(i),new Qf(t.firestore,t instanceof Xf?t.converter:null,new Nr(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new fl(this,"async_queue_retry"),this.qa=()=>{const t=al();t&&Fs("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Do.Ao()};const t=al();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const n=al();n&&"function"==typeof n.removeEventListener&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise((()=>{}));const n=new Hs;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ma.push(t),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(t){if(!cc(t))throw t;Fs("AsyncQueue","Operation failed with retryable error: "+t)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(t){const n=this.ka.then((()=>(this.Ba=!0,t().catch((t=>{throw this.$a=t,this.Ba=!1,Ls("INTERNAL UNHANDLED ERROR: ",function(t){let n=t.message||"";return t.stack&&(n=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t})).then((t=>(this.Ba=!1,t))))));return this.ka=n,n}enqueueAfterDelay(t,n,e){this.Ka(),this.Ua.indexOf(t)>-1&&(n=0);const i=Hl.createAndSchedule(this,t,n,e,(t=>this.ja(t)));return this.Fa.push(i),i}Ka(){this.$a&&qs()}verifyOperationInProgress(){}async Wa(){let t;do{t=this.ka,await t}while(t!==this.ka)}za(t){for(const n of this.Fa)if(n.timerId===t)return!0;return!1}Ha(t){return this.Wa().then((()=>{this.Fa.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const n of this.Fa)if(n.skipDelay(),"all"!==t&&n.timerId===t)break;return this.Wa()}))}Ja(t){this.Ua.push(t)}ja(t){const n=this.Fa.indexOf(t);this.Fa.splice(n,1)}}function td(t){return function(t){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}class nd extends Hf{constructor(t,n,e){super(t,n,e),this.type="firestore",this._queue=new Zf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||sd(this),this._firestoreClient.terminate()}}function ed(t=gt()){return ft(t,"firestore").getImmediate()}function id(t){return t._firestoreClient||sd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sd(t){var n;const e=t._freezeSettings(),i=function(t,n,e,i){return new Sr(t,n,e,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(n=t._app)||void 0===n?void 0:n.options.appId)||"",t._persistenceKey,e);t._firestoreClient=new $f(t._authCredentials,t._appCheckCredentials,t._queue,i)}function rd(t,n){!function(t){if(t._initialized||t._terminated)throw new Ks(Gs.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t=Gf(t,nd));const e=id(t),i=t._freezeSettings(),s=new Mf;return function(t,n,e){const i=new Hs;return t.asyncQueue.enqueue((async()=>{try{await _f(t,e),await Pf(t,n),i.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===Gs.FAILED_PRECONDITION||t.code===Gs.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),i.reject(t)}})).then((()=>i.promise))}(e,s,new Rf(s,i.cacheSizeBytes,null==n?void 0:n.forceOwnership))}class od{constructor(...t){for(let n=0;n<t.length;++n)if(0===t[n].length)throw new Ks(Gs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t){this._byteString=t}static fromBase64String(t){try{return new hd(gr.fromBase64String(t))}catch(t){throw new Ks(Gs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new hd(gr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Ks(Gs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Ks(Gs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return sr(this._lat,t._lat)||sr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=/^__.*__$/;class ld{constructor(t,n,e){this.data=t,this.fieldMask=n,this.fieldTransforms=e}toMutation(t,n){return null!==this.fieldMask?new yh(t,this.data,this.fieldMask,n,this.fieldTransforms):new gh(t,this.data,n,this.fieldTransforms)}}class fd{constructor(t,n,e){this.data=t,this.fieldMask=n,this.fieldTransforms=e}toMutation(t,n){return new yh(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function dd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw qs()}}class wd{constructor(t,n,e,i,s,r){this.settings=t,this.databaseId=n,this.M=e,this.ignoreUndefinedProperties=i,void 0===s&&this.Ya(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new wd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var n;const e=null===(n=this.path)||void 0===n?void 0:n.child(t),i=this.Za({path:e,ec:!1});return i.nc(t),i}sc(t){var n;const e=null===(n=this.path)||void 0===n?void 0:n.child(t),i=this.Za({path:e,ec:!1});return i.Ya(),i}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return Ad(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return void 0!==this.fieldMask.find((n=>t.isPrefixOf(n)))||void 0!==this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(0===t.length)throw this.rc("Document fields must not be empty");if(dd(this.Xa)&&ad.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class md{constructor(t,n,e){this.databaseId=t,this.ignoreUndefinedProperties=n,this.M=e||ll(t)}ac(t,n,e,i=!1){return new wd({Xa:t,methodName:n,uc:e,path:mr.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function pd(t){const n=t._freezeSettings(),e=ll(t._databaseId);return new md(t._databaseId,!!n.ignoreUndefinedProperties,e)}function gd(t,n,e,i,s,r={}){const o=t.ac(r.merge||r.mergeFields?2:0,n,e,s);Ed("Data must be an object, but it was:",o,i);const h=bd(i,o);let u,c;if(r.merge)u=new pr(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=Dd(n,i,e);if(!o.contains(s))throw new Ks(Gs.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Cd(t,s)||t.push(s)}u=new pr(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new ld(new Yr(h),u,c)}class yd extends ud{_toFieldTransform(t){if(2!==t.Xa)throw t.rc(1===t.Xa?`${this._methodName}() can only appear at the top level of your update data`:`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof yd}}function vd(t,n){if(Id(t=j(t)))return Ed("Unsupported field value:",n,t),bd(t,n);if(t instanceof ud)return function(t,n){if(!dd(n.Xa))throw n.rc(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n.rc(`${t._methodName}() is not currently supported inside arrays`);const e=t._toFieldTransform(n);e&&n.fieldTransforms.push(e)}(t,n),null;if(void 0===t&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),t instanceof Array){if(n.settings.ec&&4!==n.Xa)throw n.rc("Nested arrays are not supported");return function(t,n){const e=[];let i=0;for(const s of t){let t=vd(s,n.ic(i));null==t&&(t={nullValue:"NULL_VALUE"}),e.push(t),i++}return{arrayValue:{values:e}}}(t,n)}return function(t,n){if(null===(t=j(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return function(t,n){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!xr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(n)?Qo(n):zo(t,n)}(n.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const e=hr.fromDate(t);return{timestampValue:iu(n.M,e)}}if(t instanceof hr){const e=new hr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:iu(n.M,e)}}if(t instanceof cd)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof hd)return{bytesValue:su(n.M,t._byteString)};if(t instanceof Qf){const e=n.databaseId,i=t.firestore._databaseId;if(!i.isEqual(e))throw n.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:hu(t.firestore._databaseId||n.databaseId,t._key.path)}}throw n.rc(`Unsupported field value: ${jf(t)}`)}(t,n)}function bd(t,n){const e={};return lr(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):ar(t,((t,i)=>{const s=vd(i,n.tc(t));null!=s&&(e[t]=s)})),{mapValue:{fields:e}}}function Id(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof hr||t instanceof cd||t instanceof hd||t instanceof Qf||t instanceof ud)}function Ed(t,n,e){if(!Id(e)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(e)){const i=jf(e);throw n.rc("an object"===i?t+" a custom object":t+" "+i)}}function Dd(t,n,e){if((n=j(n))instanceof od)return n._internalPath;if("string"==typeof n)return Sd(t,n);throw Ad("Field path arguments must be of type string or ",t,!1,void 0,e)}const Td=new RegExp("[~\\*/\\[\\]]");function Sd(t,n,e){if(n.search(Td)>=0)throw Ad(`Invalid field path (${n}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,e);try{return new od(...n.split("."))._internalPath}catch(i){throw Ad(`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,e)}}function Ad(t,n,e,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let h=`Function ${n}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${i}`),o&&(u+=` in document ${s}`),u+=")"),new Ks(Gs.INVALID_ARGUMENT,h+t+u)}function Cd(t,n){return t.some((t=>t.isEqual(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,n,e,i,s){this._firestore=t,this._userDataWriter=n,this._key=e,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Nd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(kd("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n)}}}class Nd extends xd{data(){return super.data()}}function kd(t,n){return"string"==typeof n?Sd(t,n):n instanceof od?n._internalPath:n._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Md extends xd{constructor(t,n,e,i,s,r){super(t,n,e,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Od(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const e=this._document.data.field(kd("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e,n.serverTimestamps)}}}class Od extends Md{data(t={}){return super.data(t)}}class $d{constructor(t,n,e,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Rd(i.hasPendingWrites,i.fromCache),this.query=e}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,n){this._snapshot.docs.forEach((e=>{t.call(n,new Od(this._firestore,this._userDataWriter,e.key,e,new Rd(this._snapshot.mutatedKeys.has(e.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ks(Gs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(t,n){if(t._snapshot.oldDocs.isEmpty()){let n=0;return t._snapshot.docChanges.map((e=>({type:"added",doc:new Od(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Rd(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:n++})))}{let e=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>n||3!==t.type)).map((n=>{const i=new Od(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Rd(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==n.type&&(s=e.indexOf(n.doc.key),e=e.delete(n.doc.key)),1!==n.type&&(e=e.add(n.doc),r=e.indexOf(n.doc.key)),{type:_d(n.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _d(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return qs()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){if($o(t)&&0===t.explicitOrderBy.length)throw new Ks(Gs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vd{}function Fd(t,...n){for(const e of n)t=e._apply(t);return t}class Ld extends Vd{constructor(t,n,e){super(),this.lc=t,this.fc=n,this.dc=e,this.type="where"}_apply(t){const n=pd(t.firestore),e=function(t,n,e,i,s,r,o){let h;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new Ks(Gs.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Hd(o,r);const n=[];for(const e of o)n.push(Kd(i,t,e));h={arrayValue:{values:n}}}else h=Kd(i,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Hd(o,r),h=function(t,n,e,i=!1){return vd(e,t.ac(i?4:3,"where"))}(e,0,o,"in"===r||"not-in"===r);const u=go.create(s,r,h);return function(t,n){if(n.S()){const e=Po(t);if(null!==e&&!e.isEqual(n.field))throw new Ks(Gs.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${e.toString()}' and '${n.field.toString()}'`);const i=_o(t);null!==i&&zd(0,n.field,i)}const e=function(t,n){for(const e of t.filters)if(n.indexOf(e.op)>=0)return e.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(n.op));if(null!==e)throw new Ks(Gs.INVALID_ARGUMENT,e===n.op?`Invalid query. You cannot use more than one '${n.op.toString()}' filter.`:`Invalid query. You cannot use '${n.op.toString()}' filters with '${e.toString()}' filters.`)}(t,u),u}(t._query,0,n,t.firestore._databaseId,this.lc,this.fc,this.dc);return new Wf(t.firestore,t.converter,function(t,n){const e=t.filters.concat([n]);return new Ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),e,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Ud(t,n,e){const i=n,s=kd("where",t);return new Ld(s,i,e)}class Bd extends Vd{constructor(t,n){super(),this.lc=t,this._c=n,this.type="orderBy"}_apply(t){const n=function(t,n,e){if(null!==t.startAt)throw new Ks(Gs.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Ks(Gs.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Co(n,e);return function(t,n){if(null===_o(t)){const e=Po(t);null!==e&&zd(0,e,n.field)}}(t,i),i}(t._query,this.lc,this._c);return new Wf(t.firestore,t.converter,function(t,n){const e=t.explicitOrderBy.concat([n]);return new Ro(t.path,t.collectionGroup,e,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function qd(t,n="asc"){const e=n,i=kd("orderBy",t);return new Bd(i,e)}class jd extends Vd{constructor(t,n,e){super(),this.type=t,this.wc=n,this.mc=e}_apply(t){return new Wf(t.firestore,t.converter,Uo(t._query,this.wc,this.mc))}}function Gd(t){return function(t,n){if(n<=0)throw new Ks(Gs.INVALID_ARGUMENT,`Function limit() requires a positive number, but it was: ${n}.`)}(0,t),new jd("limit",t,"F")}function Kd(t,n,e){if("string"==typeof(e=j(e))){if(""===e)throw new Ks(Gs.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vo(n)&&-1!==e.indexOf("/"))throw new Ks(Gs.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=n.path.child(dr.fromString(e));if(!Nr.isDocumentKey(i))throw new Ks(Gs.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Lr(t,new Nr(i))}if(e instanceof Qf)return Lr(t,e._key);throw new Ks(Gs.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jf(e)}.`)}function Hd(t,n){if(!Array.isArray(t)||0===t.length)throw new Ks(Gs.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${n.toString()}' filters.`);if(t.length>10)throw new Ks(Gs.INVALID_ARGUMENT,`Invalid Query. '${n.toString()}' filters support a maximum of 10 elements in the value array.`)}function zd(t,n,e){if(!e.isEqual(n))throw new Ks(Gs.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${n.toString()}' and so you must also use '${n.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qd(t,n,e){let i;return i=t?e&&(e.merge||e.mergeFields)?t.toFirestore(n,e):t.toFirestore(n):n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){t=Gf(t,Qf);const n=Gf(t.firestore,nd);return function(t,n,e={}){const i=new Hs;return t.asyncQueue.enqueueAndForget((async()=>function(t,n,e,i,s){const r=new Of({next:r=>{n.enqueueAndForget((()=>tf(t,o)));const h=r.docs.has(e);!h&&r.fromCache?s.reject(new Ks(Gs.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&r.fromCache&&i&&"server"===i.source?s.reject(new Ks(Gs.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new rf(Mo(e.path),r,{includeMetadataChanges:!0,Cu:!0});return Zl(t,o)}(await Ff(t),t.asyncQueue,n,e,i))),i.promise}(id(n),t._key).then((e=>sw(n,t,e)))}class Xd extends class{convertValue(t,n="none"){switch(Mr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return br(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ir(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw qs()}}convertObject(t,n){const e={};return ar(t.fields,((t,i)=>{e[t]=this.convertValue(i,n)})),e}convertGeoPoint(t){return new cd(br(t.latitude),br(t.longitude))}convertArray(t,n){return(t.values||[]).map((t=>this.convertValue(t,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const e=Dr(t);return null==e?null:this.convertValue(e,n);case"estimate":return this.convertTimestamp(Tr(t));default:return null}}convertTimestamp(t){const n=vr(t);return new hr(n.seconds,n.nanos)}convertDocumentKey(t,n){const e=dr.fromString(t);js(Nu(e));const i=new Ar(e.get(1),e.get(3)),s=new Nr(e.popFirst(5));return i.isEqual(n)||Ls(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new hd(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Qf(this.firestore,null,n)}}function Yd(t){t=Gf(t,Wf);const n=Gf(t.firestore,nd),e=id(n),i=new Xd(n);return Pd(t._query),function(t,n,e={}){const i=new Hs;return t.asyncQueue.enqueueAndForget((async()=>function(t,n,e,i,s){const r=new Of({next:e=>{n.enqueueAndForget((()=>tf(t,o))),e.fromCache&&"server"===i.source?s.reject(new Ks(Gs.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(e)},error:t=>s.reject(t)}),o=new rf(e,r,{includeMetadataChanges:!0,Cu:!0});return Zl(t,o)}(await Ff(t),t.asyncQueue,n,e,i))),i.promise}(e,t._query).then((e=>new $d(n,i,t,e)))}function Jd(t,n,e){t=Gf(t,Qf);const i=Gf(t.firestore,nd),s=Qd(t.converter,n,e);return iw(i,[gd(pd(i),"setDoc",t._key,s,null!==t.converter,e).toMutation(t._key,ch.none())])}function Zd(t,n,e,...i){t=Gf(t,Qf);const s=Gf(t.firestore,nd),r=pd(s);let o;return o="string"==typeof(n=j(n))||n instanceof od?function(t,n,e,i,s,r){const o=t.ac(1,n,e),h=[Dd(n,i,e)],u=[s];if(r.length%2!=0)throw new Ks(Gs.INVALID_ARGUMENT,`Function ${n}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)h.push(Dd(n,r[t])),u.push(r[t+1]);const c=[],a=Yr.empty();for(let t=h.length-1;t>=0;--t)if(!Cd(c,h[t])){const n=h[t];let e=u[t];e=j(e);const i=o.sc(n);if(e instanceof yd)c.push(n);else{const t=vd(e,i);null!=t&&(c.push(n),a.set(n,t))}}const l=new pr(c);return new fd(a,l,o.fieldTransforms)}(r,"updateDoc",t._key,n,e,i):function(t,n,e,i){const s=t.ac(1,n,e);Ed("Data must be an object, but it was:",s,i);const r=[],o=Yr.empty();ar(i,((t,i)=>{const h=Sd(n,t,e);i=j(i);const u=s.sc(h);if(i instanceof yd)r.push(h);else{const t=vd(i,u);null!=t&&(r.push(h),o.set(h,t))}}));const h=new pr(r);return new fd(o,h,s.fieldTransforms)}(r,"updateDoc",t._key,n),iw(s,[o.toMutation(t._key,ch.exists(!0))])}function tw(t){return iw(Gf(t.firestore,nd),[new Eh(t._key,ch.none())])}function nw(t,n){const e=Gf(t.firestore,nd),i=Jf(t),s=Qd(t.converter,n);return iw(e,[gd(pd(t.firestore),"addDoc",i._key,s,null!==t.converter,{}).toMutation(i._key,ch.exists(!1))]).then((()=>i))}function ew(t,...n){var e,i,s;t=j(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof n[o]||td(n[o])||(r=n[o],o++);const h={includeMetadataChanges:r.includeMetadataChanges};if(td(n[o])){const t=n[o];n[o]=null===(e=t.next)||void 0===e?void 0:e.bind(t),n[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),n[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let u,c,a;if(t instanceof Qf)c=Gf(t.firestore,nd),a=Mo(t._key.path),u={next:e=>{n[o]&&n[o](sw(c,t,e))},error:n[o+1],complete:n[o+2]};else{const e=Gf(t,Wf);c=Gf(e.firestore,nd),a=e._query;const i=new Xd(c);u={next:t=>{n[o]&&n[o](new $d(c,i,e,t))},error:n[o+1],complete:n[o+2]},Pd(t._query)}return function(t,n,e,i){const s=new Of(i),r=new rf(n,s,e);return t.asyncQueue.enqueueAndForget((async()=>Zl(await Ff(t),r))),()=>{s.Ia(),t.asyncQueue.enqueueAndForget((async()=>tf(await Ff(t),r)))}}(id(c),a,h,u)}function iw(t,n){return function(t,n){const e=new Hs;return t.asyncQueue.enqueueAndForget((async()=>async function(t,n,e){const i=Nf(t);try{const t=await function(t,n){const e=t,i=hr.now(),s=n.reduce(((t,n)=>t.add(n.key)),qh());let r;return e.persistence.runTransaction("Locally write mutations","readwrite",(t=>e.ci.Ks(t,s).next((s=>{r=s;const o=[];for(const t of n){const n=wh(t,r.get(t.key));null!=n&&o.push(new yh(t.key,n,Jr(n.value.mapValue),ch.exists(!0)))}return e.Bs.addMutationBatch(t,i,o,n)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(i.localStore,n);i.sharedClientState.addPendingMutation(t.batchId),function(t,n,e){let i=t.ua[t.currentUser.toKey()];i||(i=new Nh(sr)),i=i.insert(n,e),t.ua[t.currentUser.toKey()]=i}(i,t.batchId,e),await Af(i,t.changes),await $l(i.remoteStore)}catch(t){const n=zl(t,"Failed to persist write");e.reject(n)}}(await function(t){return Vf(t).then((t=>t.syncEngine))}(t),n,e))),e.promise}(id(t),n)}function sw(t,n,e){const i=e.docs.get(n._key),s=new Xd(t);return new Md(t,s,n._key,i,new Rd(e.hasPendingWrites,e.fromCache),n.converter)}!function(t,n=!0){_s="9.6.11",lt(new W("firestore",((t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=new nd(i,new Xs(t.getProvider("auth-internal")),new tr(t.getProvider("app-check-internal")));return e=Object.assign({useFetchStreams:n},e),s._setSettings(e),s}),"PUBLIC")),yt(Os,"3.4.8",t),yt(Os,"3.4.8","esm2017")}();export{ew as $,q as A,U as B,W as C,l as D,b as E,v as F,i as G,g as H,A as I,S as J,c as K,J as L,o as M,pt as N,ed as O,zf as P,rd as Q,Jd as R,mt as S,nw as T,tw as U,Yf as V,Yd as W,Jf as X,Wd as Y,Zd as Z,lt as _,m as a,Ud as a0,qd as a1,Gd as a2,Fd as a3,u as b,gt as c,ft as d,R as e,w as f,j as g,V as h,d as i,$ as j,_ as k,it as l,f as m,p as n,N as o,e as p,O as q,yt as r,r as s,D as t,E as u,C as v,B as w,P as x,x as y,k as z}