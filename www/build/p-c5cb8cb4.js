const t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,n){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,e=[];for(let n=0;n<t.length;n+=3){const s=t[n],r=n+1<t.length,o=r?t[n+1]:0,h=n+2<t.length,u=h?t[n+2]:0;let c=(15&o)<<2|u>>6,a=63&u;h||(a=64,r||(c=64)),e.push(i[s>>2],i[(3&s)<<4|o>>4],i[c],i[a])}return e.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(function(t){const n=[];let i=0;for(let e=0;e<t.length;e++){let s=t.charCodeAt(e);s<128?n[i++]=s:s<2048?(n[i++]=s>>6|192,n[i++]=63&s|128):55296==(64512&s)&&e+1<t.length&&56320==(64512&t.charCodeAt(e+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++e)),n[i++]=s>>18|240,n[i++]=s>>12&63|128,n[i++]=s>>6&63|128,n[i++]=63&s|128):(n[i++]=s>>12|224,n[i++]=s>>6&63|128,n[i++]=63&s|128)}return n}(t),n)},decodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(t):function(t){const n=[];let i=0,e=0;for(;i<t.length;){const s=t[i++];if(s<128)n[e++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[i++];n[e++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536;n[e++]=String.fromCharCode(55296+(r>>10)),n[e++]=String.fromCharCode(56320+(1023&r))}else{const r=t[i++],o=t[i++];n[e++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return n.join("")}(this.decodeStringToByteArray(t,n))},decodeStringToByteArray(t,n){this.init_();const i=n?this.charToByteMapWebSafe_:this.charToByteMap_,e=[];for(let n=0;n<t.length;){const s=i[t.charAt(n++)],r=n<t.length?i[t.charAt(n)]:0;++n;const o=n<t.length?i[t.charAt(n)]:64;++n;const h=n<t.length?i[t.charAt(n)]:64;if(++n,null==s||null==r||null==o||null==h)throw Error();e.push(s<<2|r>>4),64!==o&&(e.push(r<<4&240|o>>2),64!==h&&e.push(o<<6&192|h))}return e},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},i=function(t){try{return n.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
class e{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(n):t(n,i))}}}
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
 */function s(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function r(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(s())}function o(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function h(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function u(){const t=s();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function c(){return"object"==typeof indexedDB}function a(){return new Promise(((t,n)=>{try{let i=!0;const e="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(e);s.onsuccess=()=>{s.result.close(),i||self.indexedDB.deleteDatabase(e),t(!0)},s.onupgradeneeded=()=>{i=!1},s.onerror=()=>{var t;n((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){n(t)}}))}function l(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
 */class f extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,f.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,d.prototype.create)}}class d{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},e=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,n){return t.replace(w,((t,i)=>{const e=n[i];return null!=e?String(e):`<${i}?>`}))}(s,i):"Error";return new f(e,`${this.serviceName}: ${r} (${e}).`,i)}}const w=/\{\$([^}]+)}/g;function p(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}function m(t,n){if(t===n)return!0;const i=Object.keys(t),e=Object.keys(n);for(const s of i){if(!e.includes(s))return!1;const i=t[s],r=n[s];if(v(i)&&v(r)){if(!m(i,r))return!1}else if(i!==r)return!1}for(const t of e)if(!i.includes(t))return!1;return!0}function v(t){return null!==t&&"object"==typeof t}
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
 */function g(t){const n=[];for(const[i,e]of Object.entries(t))Array.isArray(e)?e.forEach((t=>{n.push(encodeURIComponent(i)+"="+encodeURIComponent(t))})):n.push(encodeURIComponent(i)+"="+encodeURIComponent(e));return n.length?"&"+n.join("&"):""}function y(t){const n={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[i,e]=t.split("=");n[decodeURIComponent(i)]=decodeURIComponent(e)}})),n}function b(t){const n=t.indexOf("?");if(!n)return"";const i=t.indexOf("#",n);return t.substring(n,i>0?i:void 0)}function E(t,n){const i=new T(t,n);return i.subscribe.bind(i)}class T{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((n=>{n.next(t)}))}error(t){this.forEachObserver((n=>{n.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,n,i){let e;if(void 0===t&&void 0===n&&void 0===i)throw new Error("Missing Observer.");e=function(t){if("object"!=typeof t||null===t)return!1;for(const n of["next","error","complete"])if(n in t&&"function"==typeof t[n])return!0;return!1}(t)?t:{next:t,error:n,complete:i},void 0===e.next&&(e.next=A),void 0===e.error&&(e.error=A),void 0===e.complete&&(e.complete=A);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?e.error(this.finalError):e.complete()}catch(t){}})),this.observers.push(e),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{n(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function A(){}
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
 */function S(t,n=1e3,i=2){const e=n*Math.pow(i,t),s=Math.round(.5*e*(Math.random()-.5)*2);return Math.min(144e5,e+s)}
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
 */function N(t){return t&&t._delegate?t._delegate:t}class C{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
class I{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const t=new e;if(this.instancesDeferred.set(n,t),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&t.resolve(i)}catch(t){}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),e=null!==(n=null==t?void 0:t.optional)&&void 0!==n&&n;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(e)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(t){if(e)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const e=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[t,n]of this.instancesDeferred.entries())i===this.normalizeInstanceIdentifier(t)&&n.resolve(e);return e}onInit(t,n){var i;const e=this.normalizeInstanceIdentifier(n),s=null!==(i=this.onInitCallbacks.get(e))&&void 0!==i?i:new Set;s.add(t),this.onInitCallbacks.set(e,s);const r=this.instances.get(e);return r&&t(r,e),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const e of i)try{e(t,n)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(e=t,"[DEFAULT]"===e?void 0:e),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(t){}var e;return i||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class D{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new I(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}
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
 */var R;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(R||(R={}));const k={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},_=R.INFO,O={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},M=(t,n,...i)=>{if(n<t.logLevel)return;const e=(new Date).toISOString(),s=O[n];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`);console[s](`[${e}]  ${t.name}:`,...i)};class ${constructor(t){this.name=t,this._logLevel=_,this._logHandler=M,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in R))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?k[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...t),this._logHandler(this,R.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...t),this._logHandler(this,R.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,R.INFO,...t),this._logHandler(this,R.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,R.WARN,...t),this._logHandler(this,R.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...t),this._logHandler(this,R.ERROR,...t)}}
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
 */class L{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const n=t.getComponent();return"VERSION"===(null==n?void 0:n.type)}(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}return null})).filter((t=>t)).join(" ")}}const P="@firebase/app",U=new $("@firebase/app"),F={[P]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},x=new Map,V=new Map;function j(t,n){try{t.container.addComponent(n)}catch(i){U.debug(`Component ${n.name} failed to register with FirebaseApp ${t.name}`,i)}}function B(t){const n=t.name;if(V.has(n))return U.debug(`There were multiple attempts to register component ${n}.`),!1;V.set(n,t);for(const n of x.values())j(n,t);return!0}function q(t,n){return t.container.getProvider(n)}
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
 */const H=new d("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Q{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new C("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
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
 */const z="9.6.4";function G(t,n={}){"object"!=typeof n&&(n={name:n});const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},n),e=i.name;if("string"!=typeof e||!e)throw H.create("bad-app-name",{appName:String(e)});const s=x.get(e);if(s){if(m(t,s.options)&&m(i,s.config))return s;throw H.create("duplicate-app",{appName:e})}const r=new D(e);for(const t of V.values())r.addComponent(t);const o=new Q(t,i,r);return x.set(e,o),o}function K(t="[DEFAULT]"){const n=x.get(t);if(!n)throw H.create("no-app",{appName:t});return n}function W(t,n,i){var e;let s=null!==(e=F[t])&&void 0!==e?e:t;i&&(s+=`-${i}`);const r=s.match(/\s|\//),o=n.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${n}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${n}" contains illegal characters (whitespace or "/")`),void U.warn(t.join(" "))}B(new C(`${s}-version`,(()=>({library:s,version:n})),"VERSION"))}
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
 */B(new C("platform-logger",(t=>new L(t)),"PRIVATE")),W(P,"0.7.14",""),W(P,"0.7.14","esm2017"),W("fire-js","");var X,J="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Y=Y||{},Z=J||self;function tt(){}function nt(t){var n=typeof t;return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function it(t){var n=typeof t;return"object"==n&&null!=t||"function"==n}var et="closure_uid_"+(1e9*Math.random()>>>0),st=0;function rt(t,n,i){return t.call.apply(t.bind,arguments)}function ot(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function ht(t,n,i){return(ht=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?rt:ot).apply(null,arguments)}function ut(t,n){var i=Array.prototype.slice.call(arguments,1);return function(){var n=i.slice();return n.push.apply(n,arguments),t.apply(this,n)}}function ct(t,n){function i(){}i.prototype=n.prototype,t.Z=n.prototype,t.prototype=new i,t.prototype.constructor=t,t.Vb=function(t,i,e){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return n.prototype[i].apply(t,s)}}function at(){this.s=this.s,this.o=this.o}at.prototype.s=!1,at.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,et)&&t[et]||(t[et]=++st))},at.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lt=Array.prototype.indexOf?function(t,n){return Array.prototype.indexOf.call(t,n,void 0)}:function(t,n){if("string"==typeof t)return"string"!=typeof n||1!=n.length?-1:t.indexOf(n,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===n)return i;return-1},ft=Array.prototype.forEach?function(t,n,i){Array.prototype.forEach.call(t,n,i)}:function(t,n,i){const e=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<e;r++)r in s&&n.call(i,s[r],r,t)};function dt(t){return Array.prototype.concat.apply([],arguments)}function wt(t){const n=t.length;if(0<n){const i=Array(n);for(let e=0;e<n;e++)i[e]=t[e];return i}return[]}function pt(t){return/^[\s\xa0]*$/.test(t)}var mt,vt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function gt(t,n){return-1!=t.indexOf(n)}function yt(t,n){return t<n?-1:t>n?1:0}t:{var bt=Z.navigator;if(bt){var Et=bt.userAgent;if(Et){mt=Et;break t}}mt=""}function Tt(t,n,i){for(const e in t)n.call(i,t[e],e,t)}function At(t){const n={};for(const i in t)n[i]=t[i];return n}var St="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nt(t,n){let i,e;for(let n=1;n<arguments.length;n++){for(i in e=arguments[n],e)t[i]=e[i];for(let n=0;n<St.length;n++)i=St[n],Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}}function Ct(t){return Ct[" "](t),t}Ct[" "]=tt;var It,Dt,Rt=gt(mt,"Opera"),kt=gt(mt,"Trident")||gt(mt,"MSIE"),_t=gt(mt,"Edge"),Ot=_t||kt,Mt=gt(mt,"Gecko")&&!(gt(mt.toLowerCase(),"webkit")&&!gt(mt,"Edge"))&&!(gt(mt,"Trident")||gt(mt,"MSIE"))&&!gt(mt,"Edge"),$t=gt(mt.toLowerCase(),"webkit")&&!gt(mt,"Edge");function Lt(){var t=Z.document;return t?t.documentMode:void 0}t:{var Pt="",Ut=(Dt=mt,Mt?/rv:([^\);]+)(\)|;)/.exec(Dt):_t?/Edge\/([\d\.]+)/.exec(Dt):kt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Dt):$t?/WebKit\/(\S+)/.exec(Dt):Rt?/(?:Version)[ \/]?(\S+)/.exec(Dt):void 0);if(Ut&&(Pt=Ut?Ut[1]:""),kt){var Ft=Lt();if(null!=Ft&&Ft>parseFloat(Pt)){It=String(Ft);break t}}It=Pt}var xt,Vt={};function jt(){return t=Vt,Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=function(){let t=0;const n=vt(String(It)).split("."),i=vt("9").split("."),e=Math.max(n.length,i.length);for(let o=0;0==t&&o<e;o++){var s=n[o]||"",r=i[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=yt(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||yt(0==s[2].length,0==r[2].length)||yt(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}();var t}Z.document&&kt?xt=Lt()||parseInt(It,10)||void 0:xt=void 0;var Bt=xt,qt=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",tt,n),Z.removeEventListener("test",tt,n)}catch(t){}return t}();function Ht(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}function Qt(t,n){if(Ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,e=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget){if(Mt){t:{try{Ct(n.nodeName);var s=!0;break t}catch(t){}s=!1}s||(n=null)}}else"mouseover"==i?n=t.fromElement:"mouseout"==i&&(n=t.toElement);this.relatedTarget=n,e?(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:zt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Qt.Z.h.call(this)}}Ht.prototype.h=function(){this.defaultPrevented=!0},ct(Qt,Ht);var zt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),Kt=0;function Wt(t,n,i,e,s){this.listener=t,this.proxy=null,this.src=n,this.type=i,this.capture=!!e,this.ia=s,this.key=++Kt,this.ca=this.fa=!1}function Xt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Jt(t){this.src=t,this.g={},this.h=0}function Yt(t,n){var i=n.type;if(i in t.g){var e,s=t.g[i],r=lt(s,n);(e=0<=r)&&Array.prototype.splice.call(s,r,1),e&&(Xt(n),0==t.g[i].length&&(delete t.g[i],t.h--))}}function Zt(t,n,i,e){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==n&&r.capture==!!i&&r.ia==e)return s}return-1}Jt.prototype.add=function(t,n,i,e,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Zt(t,n,e,s);return-1<o?(n=t[o],i||(n.fa=!1)):((n=new Wt(n,this.src,r,!!e,s)).fa=i,t.push(n)),n};var tn="closure_lm_"+(1e6*Math.random()|0),nn={};function en(t,n,i,e,s){if(e&&e.once)return rn(t,n,i,e,s);if(Array.isArray(n)){for(var r=0;r<n.length;r++)en(t,n[r],i,e,s);return null}return i=fn(i),t&&t[Gt]?t.N(n,i,it(e)?!!e.capture:!!e,s):sn(t,n,i,!1,e,s)}function sn(t,n,i,e,s,r){if(!n)throw Error("Invalid event type");var o=it(s)?!!s.capture:!!s,h=an(t);if(h||(t[tn]=h=new Jt(t)),(i=h.add(n,i,e,o,r)).proxy)return i;if(e=function(){var t=cn;return function n(i){return t.call(n.src,n.listener,i)}}(),i.proxy=e,e.src=t,e.listener=i,t.addEventListener)qt||(s=o),void 0===s&&(s=!1),t.addEventListener(n.toString(),e,s);else if(t.attachEvent)t.attachEvent(un(n.toString()),e);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(e)}return i}function rn(t,n,i,e,s){if(Array.isArray(n)){for(var r=0;r<n.length;r++)rn(t,n[r],i,e,s);return null}return i=fn(i),t&&t[Gt]?t.O(n,i,it(e)?!!e.capture:!!e,s):sn(t,n,i,!0,e,s)}function on(t,n,i,e,s){if(Array.isArray(n))for(var r=0;r<n.length;r++)on(t,n[r],i,e,s);else e=it(e)?!!e.capture:!!e,i=fn(i),t&&t[Gt]?(t=t.i,(n=String(n).toString())in t.g&&-1<(i=Zt(r=t.g[n],i,e,s))&&(Xt(r[i]),Array.prototype.splice.call(r,i,1),0==r.length&&(delete t.g[n],t.h--))):t&&(t=an(t))&&(n=t.g[n.toString()],t=-1,n&&(t=Zt(n,i,e,s)),(i=-1<t?n[t]:null)&&hn(i))}function hn(t){if("number"!=typeof t&&t&&!t.ca){var n=t.src;if(n&&n[Gt])Yt(n.i,t);else{var i=t.type,e=t.proxy;n.removeEventListener?n.removeEventListener(i,e,t.capture):n.detachEvent?n.detachEvent(un(i),e):n.addListener&&n.removeListener&&n.removeListener(e),(i=an(n))?(Yt(i,t),0==i.h&&(i.src=null,n[tn]=null)):Xt(t)}}}function un(t){return t in nn?nn[t]:nn[t]="on"+t}function cn(t,n){if(t.ca)t=!0;else{n=new Qt(n,this);var i=t.listener,e=t.ia||t.src;t.fa&&hn(t),t=i.call(e,n)}return t}function an(t){return(t=t[tn])instanceof Jt?t:null}var ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function fn(t){return"function"==typeof t?t:(t[ln]||(t[ln]=function(n){return t.handleEvent(n)}),t[ln])}function dn(){at.call(this),this.i=new Jt(this),this.P=this,this.I=null}function wn(t,n){var i,e=t.I;if(e)for(i=[];e;e=e.I)i.push(e);if(t=t.P,e=n.type||n,"string"==typeof n)n=new Ht(n,t);else if(n instanceof Ht)n.target=n.target||t;else{var s=n;Nt(n=new Ht(e,t),s)}if(s=!0,i)for(var r=i.length-1;0<=r;r--){var o=n.g=i[r];s=pn(o,e,!0,n)&&s}if(s=pn(o=n.g=t,e,!0,n)&&s,s=pn(o,e,!1,n)&&s,i)for(r=0;r<i.length;r++)s=pn(o=n.g=i[r],e,!1,n)&&s}function pn(t,n,i,e){if(!(n=t.i.g[String(n)]))return!0;n=n.concat();for(var s=!0,r=0;r<n.length;++r){var o=n[r];if(o&&!o.ca&&o.capture==i){var h=o.listener,u=o.ia||o.src;o.fa&&Yt(t.i,o),s=!1!==h.call(u,e)&&s}}return s&&!e.defaultPrevented}ct(dn,at),dn.prototype[Gt]=!0,dn.prototype.removeEventListener=function(t,n,i,e){on(this,t,n,i,e)},dn.prototype.M=function(){if(dn.Z.M.call(this),this.i){var t,n=this.i;for(t in n.g){for(var i=n.g[t],e=0;e<i.length;e++)Xt(i[e]);delete n.g[t],n.h--}}this.I=null},dn.prototype.N=function(t,n,i,e){return this.i.add(String(t),n,!1,i,e)},dn.prototype.O=function(t,n,i,e){return this.i.add(String(t),n,!0,i,e)};var mn=Z.JSON.stringify;function vn(){var t=Sn;let n=null;return t.g&&(n=t.g,t.g=t.g.next,t.g||(t.h=null),n.next=null),n}var gn,yn=new class{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new bn),(t=>t.reset()));class bn{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function En(t){Z.setTimeout((()=>{throw t}),0)}function Tn(t,n){gn||function(){var t=Z.Promise.resolve(void 0);gn=function(){t.then(Nn)}}(),An||(gn(),An=!0),Sn.add(t,n)}var An=!1,Sn=new class{constructor(){this.h=this.g=null}add(t,n){const i=yn.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}};function Nn(){for(var t;t=vn();){try{t.h.call(t.g)}catch(t){En(t)}var n=yn;n.j(t),100>n.h&&(n.h++,t.next=n.g,n.g=t)}An=!1}function Cn(t,n){dn.call(this),this.h=t||1,this.g=n||Z,this.j=ht(this.kb,this),this.l=Date.now()}function In(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Dn(t,n,i){if("function"==typeof t)i&&(t=ht(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ht(t.handleEvent,t)}return 2147483647<Number(n)?-1:Z.setTimeout(t,n||0)}function Rn(t){t.g=Dn((()=>{t.g=null,t.i&&(t.i=!1,Rn(t))}),t.j);const n=t.h;t.h=null,t.m.apply(null,n)}ct(Cn,dn),(X=Cn.prototype).da=!1,X.S=null,X.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),wn(this,"tick"),this.da&&(In(this),this.start()))}},X.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},X.M=function(){Cn.Z.M.call(this),In(this),delete this.g};class kn extends at{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Rn(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _n(t){at.call(this),this.h=t,this.g={}}ct(_n,at);var On=[];function Mn(t,n,i,e){Array.isArray(i)||(i&&(On[0]=i.toString()),i=On);for(var s=0;s<i.length;s++){var r=en(n,i[s],e||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function $n(t){Tt(t.g,(function(t,n){this.g.hasOwnProperty(n)&&hn(t)}),t),t.g={}}function Ln(){this.g=!0}function Pn(t,n,i,e){t.info((function(){return"XMLHTTP TEXT ("+n+"): "+function(t,n){if(!t.g)return n;if(!n)return null;try{var i=JSON.parse(n);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var e=i[t];if(!(2>e.length)){var s=e[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return mn(i)}catch(t){return n}}(t,i)+(e?" "+e:"")}))}_n.prototype.M=function(){_n.Z.M.call(this),$n(this)},_n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ln.prototype.Aa=function(){this.g=!1},Ln.prototype.info=function(){};var Un={},Fn=null;function xn(){return Fn=Fn||new dn}function Vn(t){Ht.call(this,Un.Ma,t)}function jn(t){const n=xn();wn(n,new Vn(n,t))}function Bn(t,n){Ht.call(this,Un.STAT_EVENT,t),this.stat=n}function qn(t){const n=xn();wn(n,new Bn(n,t))}function Hn(t,n){Ht.call(this,Un.Na,t),this.size=n}function Qn(t,n){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Z.setTimeout((function(){t()}),n)}Un.Ma="serverreachability",ct(Vn,Ht),Un.STAT_EVENT="statevent",ct(Bn,Ht),Un.Na="timingevent",ct(Hn,Ht);var zn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Gn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Kn(){}function Wn(){}Kn.prototype.h=null;var Xn,Jn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Yn(){Ht.call(this,"d")}function Zn(){Ht.call(this,"c")}function ti(){}function ni(t,n,i,e){this.l=t,this.j=n,this.m=i,this.X=e||1,this.V=new _n(this),this.P=ei,this.W=new Cn(t=Ot?125:void 0),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ii}function ii(){this.i=null,this.g="",this.h=!1}ct(Yn,Ht),ct(Zn,Ht),ct(ti,Kn),ti.prototype.g=function(){return new XMLHttpRequest},ti.prototype.i=function(){return{}},Xn=new ti;var ei=45e3,si={},ri={};function oi(t,n,i){t.K=1,t.v=Ri(Ai(n)),t.s=i,t.U=!0,hi(t,null)}function hi(t,n){t.F=Date.now(),li(t),t.A=Ai(t.v);var i=t.A,e=t.X;Array.isArray(e)||(e=[String(e)]),Bi(i.h,"t",e),t.C=0,i=t.l.H,t.h=new ii,t.g=Be(t.l,i?n:null,!t.s),0<t.O&&(t.L=new kn(ht(t.Ia,t,t.g),t.O)),Mn(t.V,t.g,"readystatechange",t.gb),n=t.H?At(t.H):{},t.s?(t.u||(t.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,n)):(t.u="GET",t.g.ea(t.A,t.u,null,n)),jn(1),function(t,n,i,e,s,r){t.info((function(){if(t.g)if(r)for(var o="",h=r.split("&"),u=0;u<h.length;u++){var c=h[u].split("=");if(1<c.length){var a=c[0];c=c[1];var l=a.split("_");o=2<=l.length&&"type"==l[1]?o+(a+"=")+c+"&":o+(a+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+e+") [attempt "+s+"]: "+n+"\n"+i+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function ui(t){return!!t.g&&"GET"==t.u&&2!=t.K&&t.l.Ba}function ci(t,n,i){let e,s=!0;for(;!t.I&&t.C<i.length;){if(e=ai(t,i),e==ri){4==n&&(t.o=4,qn(14),s=!1),Pn(t.j,t.m,null,"[Incomplete Response]");break}if(e==si){t.o=4,qn(15),Pn(t.j,t.m,i,"[Invalid Chunk]"),s=!1;break}Pn(t.j,t.m,e,null),mi(t,e)}ui(t)&&e!=ri&&e!=si&&(t.h.g="",t.C=0),4!=n||0!=i.length||t.h.h||(t.o=1,qn(16),s=!1),t.i=t.i&&s,s?0<i.length&&!t.aa&&(t.aa=!0,(n=t.l).g==t&&n.$&&!n.L&&(n.h.info("Great, no buffering proxy detected. Bytes received: "+i.length),$e(n),n.L=!0,qn(11))):(Pn(t.j,t.m,i,"[Invalid Chunked Response]"),pi(t),wi(t))}function ai(t,n){var i=t.C,e=n.indexOf("\n",i);return-1==e?ri:(i=Number(n.substring(i,e)),isNaN(i)?si:(e+=1)+i>n.length?ri:(n=n.substr(e,i),t.C=e+i,n))}function li(t){t.Y=Date.now()+t.P,fi(t,t.P)}function fi(t,n){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Qn(ht(t.eb,t),n)}function di(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}function wi(t){0==t.l.G||t.I||Ue(t.l,t)}function pi(t){di(t);var n=t.L;n&&"function"==typeof n.na&&n.na(),t.L=null,In(t.W),$n(t.V),t.g&&(n=t.g,t.g=null,n.abort(),n.na())}function mi(t,n){try{var i=t.l;if(0!=i.G&&(i.g==t||Ki(i.i,t)))if(i.I=t.N,!t.J&&Ki(i.i,t)&&3==i.G){try{var e=i.Ca.g.parse(n)}catch(t){e=null}if(Array.isArray(e)&&3==e.length){var s=e;if(0==s[0]){t:if(!i.u){if(i.g){if(!(i.g.F+3e3<t.F))break t;Pe(i),Ne(i)}Me(i),qn(18)}}else i.ta=s[1],0<i.ta-i.U&&37500>s[2]&&i.N&&0==i.A&&!i.v&&(i.v=Qn(ht(i.ab,i),6e3));if(1>=Gi(i.i)&&i.ka){try{i.ka()}catch(t){}i.ka=void 0}}else xe(i,11)}else if((t.J||i.g==t)&&Pe(i),!pt(n))for(s=i.Ca.g.parse(n),n=0;n<s.length;n++){let c=s[n];if(i.U=c[0],c=c[1],2==i.G)if("c"==c[0]){i.J=c[1],i.la=c[2];const n=c[3];null!=n&&(i.ma=n,i.h.info("VER="+i.ma));const s=c[4];null!=s&&(i.za=s,i.h.info("SVER="+i.za));const a=c[5];null!=a&&"number"==typeof a&&0<a&&(i.K=e=1.5*a,i.h.info("backChannelRequestTimeoutMs_="+e)),e=i;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=e.i;!r.g&&(gt(t,"spdy")||gt(t,"quic")||gt(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Wi(r,r.h),r.h=null))}if(e.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(e.sa=t,Di(e.F,e.D,t))}}i.G=3,i.j&&i.j.xa(),i.$&&(i.O=Date.now()-t.F,i.h.info("Handshake RTT: "+i.O+"ms"));var o=t;if((e=i).oa=je(e,e.H?e.la:null,e.W),o.J){Xi(e.i,o);var h=o,u=e.K;u&&h.setTimeout(u),h.B&&(di(h),li(h)),e.g=o}else Oe(e);0<i.l.length&&De(i)}else"stop"!=c[0]&&"close"!=c[0]||xe(i,7);else 3==i.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?xe(i,7):Se(i):"noop"!=c[0]&&i.j&&i.j.wa(c),i.A=0)}jn(4)}catch(t){}}function vi(t,n){if(t.forEach&&"function"==typeof t.forEach)t.forEach(n,void 0);else if(nt(t)||"string"==typeof t)ft(t,n,void 0);else{if(t.T&&"function"==typeof t.T)var i=t.T();else if(t.R&&"function"==typeof t.R)i=void 0;else if(nt(t)||"string"==typeof t){i=[];for(var e=t.length,s=0;s<e;s++)i.push(s)}else for(s in i=[],e=0,t)i[e++]=s;s=(e=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(nt(t)){for(var n=[],i=t.length,e=0;e<i;e++)n.push(t[e]);return n}for(e in n=[],i=0,t)n[i++]=t[e];return n}(t)).length;for(var r=0;r<s;r++)n.call(void 0,e[r],i&&i[r],t)}}function gi(t,n){this.h={},this.g=[],this.i=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var e=0;e<i;e+=2)this.set(arguments[e],arguments[e+1])}else if(t)if(t instanceof gi)for(i=t.T(),e=0;e<i.length;e++)this.set(i[e],t.get(i[e]));else for(e in t)this.set(e,t[e])}function yi(t){if(t.i!=t.g.length){for(var n=0,i=0;n<t.g.length;){var e=t.g[n];bi(t.h,e)&&(t.g[i++]=e),n++}t.g.length=i}if(t.i!=t.g.length){var s={};for(i=n=0;n<t.g.length;)bi(s,e=t.g[n])||(t.g[i++]=e,s[e]=1),n++;t.g.length=i}}function bi(t,n){return Object.prototype.hasOwnProperty.call(t,n)}(X=ni.prototype).setTimeout=function(t){this.P=t},X.gb=function(t){t=t.target;const n=this.L;n&&3==ye(t)?n.l():this.Ia(t)},X.Ia=function(t){try{if(t==this.g)t:{const a=ye(this.g);var n=this.g.Da();const l=this.g.ba();if(!(3>a)&&(3!=a||Ot||this.g&&(this.h.h||this.g.ga()||be(this.g)))){this.I||4!=a||7==n||jn(8==n||0>=l?3:2),di(this);var i=this.g.ba();this.N=i;n:if(ui(this)){var e=be(this.g);t="";var s=e.length,r=4==ye(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){pi(this),wi(this);var o="";break n}this.h.i=new Z.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,t+=this.h.i.decode(e[n],{stream:r&&n==s-1});e.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==i,function(t,n,i,e,s,r,o){t.info((function(){return"XMLHTTP RESP ("+e+") [ attempt "+s+"]: "+n+"\n"+i+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,a,i),this.i){if(this.$&&!this.J){n:{if(this.g){var h,u=this.g;if((h=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pt(h)){var c=h;break n}}c=null}if(!(i=c)){this.i=!1,this.o=3,qn(12),pi(this),wi(this);break t}Pn(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mi(this,i)}this.U?(ci(this,a,o),Ot&&this.i&&3==a&&(Mn(this.V,this.W,"tick",this.fb),this.W.start())):(Pn(this.j,this.m,o,null),mi(this,o)),4==a&&pi(this),this.i&&!this.I&&(4==a?Ue(this.l,this):(this.i=!1,li(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.o=3,qn(12)):(this.o=0,qn(13)),pi(this),wi(this)}}}catch(t){}},X.fb=function(){if(this.g){var t=ye(this.g),n=this.g.ga();this.C<n.length&&(di(this),ci(this,t,n),this.i&&4!=t&&li(this))}},X.cancel=function(){this.I=!0,pi(this)},X.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,n){t.info((function(){return"TIMEOUT: "+n}))}(this.j,this.A),2!=this.K&&(jn(3),qn(17)),pi(this),this.o=2,wi(this)):fi(this,this.Y-t)},(X=gi.prototype).R=function(){yi(this);for(var t=[],n=0;n<this.g.length;n++)t.push(this.h[this.g[n]]);return t},X.T=function(){return yi(this),this.g.concat()},X.get=function(t,n){return bi(this.h,t)?this.h[t]:n},X.set=function(t,n){bi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=n},X.forEach=function(t,n){for(var i=this.T(),e=0;e<i.length;e++){var s=i[e],r=this.get(s);t.call(n,r,s,this)}};var Ei=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ti(t,n){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ti){this.g=void 0!==n?n:t.g,Si(this,t.j),this.s=t.s,Ni(this,t.i),Ci(this,t.m),this.l=t.l,n=t.h;var i=new Fi;i.i=n.i,n.g&&(i.g=new gi(n.g),i.h=n.h),Ii(this,i),this.o=t.o}else t&&(i=String(t).match(Ei))?(this.g=!!n,Si(this,i[1]||"",!0),this.s=ki(i[2]||""),Ni(this,i[3]||"",!0),Ci(this,i[4]),this.l=ki(i[5]||"",!0),Ii(this,i[6]||"",!0),this.o=ki(i[7]||"")):(this.g=!!n,this.h=new Fi(null,this.g))}function Ai(t){return new Ti(t)}function Si(t,n,i){t.j=i?ki(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function Ni(t,n,i){t.i=i?ki(n,!0):n}function Ci(t,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);t.m=n}else t.m=null}function Ii(t,n,i){n instanceof Fi?(t.h=n,function(t,n){n&&!t.j&&(xi(t),t.i=null,t.g.forEach((function(t,n){var i=n.toLowerCase();n!=i&&(Vi(this,n),Bi(this,i,t))}),t)),t.j=n}(t.h,t.g)):(i||(n=_i(n,Pi)),t.h=new Fi(n,t.g))}function Di(t,n,i){t.h.set(n,i)}function Ri(t){return Di(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ki(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _i(t,n,i){return"string"==typeof t?(t=encodeURI(t).replace(n,Oi),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Oi(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ti.prototype.toString=function(){var t=[],n=this.j;n&&t.push(_i(n,Mi,!0),":");var i=this.i;return(i||"file"==n)&&(t.push("//"),(n=this.s)&&t.push(_i(n,Mi,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&t.push(":",String(i))),(i=this.l)&&(this.i&&"/"!=i.charAt(0)&&t.push("/"),t.push(_i(i,"/"==i.charAt(0)?Li:$i,!0))),(i=this.h.toString())&&t.push("?",i),(i=this.o)&&t.push("#",_i(i,Ui)),t.join("")};var Mi=/[#\/\?@]/g,$i=/[#\?:]/g,Li=/[#\?]/g,Pi=/[#\?@]/g,Ui=/#/g;function Fi(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function xi(t){t.g||(t.g=new gi,t.h=0,t.i&&function(t,n){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var e=t[i].indexOf("="),s=null;if(0<=e){var r=t[i].substring(0,e);s=t[i].substring(e+1)}else r=t[i];n(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(n,i){t.add(decodeURIComponent(n.replace(/\+/g," ")),i)})))}function Vi(t,n){xi(t),n=qi(t,n),bi(t.g.h,n)&&(t.i=null,t.h-=t.g.get(n).length,bi((t=t.g).h,n)&&(delete t.h[n],t.i--,t.g.length>2*t.i&&yi(t)))}function ji(t,n){return xi(t),n=qi(t,n),bi(t.g.h,n)}function Bi(t,n,i){Vi(t,n),0<i.length&&(t.i=null,t.g.set(qi(t,n),wt(i)),t.h+=i.length)}function qi(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function Hi(t){this.l=t||Qi,t=Z.PerformanceNavigationTiming?0<(t=Z.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(Z.g&&Z.g.Ea&&Z.g.Ea()&&Z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}(X=Fi.prototype).add=function(t,n){xi(this),this.i=null,t=qi(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(n),this.h+=1,this},X.forEach=function(t,n){xi(this),this.g.forEach((function(i,e){ft(i,(function(i){t.call(n,i,e,this)}),this)}),this)},X.T=function(){xi(this);for(var t=this.g.R(),n=this.g.T(),i=[],e=0;e<n.length;e++)for(var s=t[e],r=0;r<s.length;r++)i.push(n[e]);return i},X.R=function(t){xi(this);var n=[];if("string"==typeof t)ji(this,t)&&(n=dt(n,this.g.get(qi(this,t))));else{t=this.g.R();for(var i=0;i<t.length;i++)n=dt(n,t[i])}return n},X.set=function(t,n){return xi(this),this.i=null,ji(this,t=qi(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},X.get=function(t,n){return t&&0<(t=this.R(t)).length?String(t[0]):n},X.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],n=this.g.T(),i=0;i<n.length;i++){var e=n[i],s=encodeURIComponent(String(e));e=this.R(e);for(var r=0;r<e.length;r++){var o=s;""!==e[r]&&(o+="="+encodeURIComponent(String(e[r]))),t.push(o)}}return this.i=t.join("&")};var Qi=10;function zi(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Gi(t){return t.h?1:t.g?t.g.size:0}function Ki(t,n){return t.h?t.h==n:!!t.g&&t.g.has(n)}function Wi(t,n){t.g?t.g.add(n):t.h=n}function Xi(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}function Ji(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let n=t.i;for(const i of t.g.values())n=n.concat(i.D);return n}return wt(t.i)}function Yi(){}function Zi(){this.g=new Yi}function te(t,n,i){const e=i||"";try{vi(t,(function(t,i){let s=t;it(t)&&(s=mn(t)),n.push(e+i+"="+encodeURIComponent(s))}))}catch(t){throw n.push(e+"type="+encodeURIComponent("_badmap")),t}}function ne(t,n,i,e,s){try{n.onload=null,n.onerror=null,n.onabort=null,n.ontimeout=null,s(e)}catch(t){}}function ie(t){this.l=t.$b||null,this.j=t.ib||!1}function ee(t,n){dn.call(this),this.D=t,this.u=n,this.m=void 0,this.readyState=se,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Hi.prototype.cancel=function(){if(this.i=Ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Yi.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)},Yi.prototype.parse=function(t){return Z.JSON.parse(t,void 0)},ct(ie,Kn),ie.prototype.g=function(){return new ee(this.l,this.j)},ie.prototype.i=function(t){return function(){return t}}({}),ct(ee,dn);var se=0;function re(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function oe(t){t.readyState=4,t.l=null,t.j=null,t.A=null,he(t)}function he(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(X=ee.prototype).open=function(t,n){if(this.readyState!=se)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=n,this.readyState=1,he(this)},X.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const n={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(n.body=t),(this.D||Z).fetch(new Request(this.B,n)).then(this.Va.bind(this),this.ha.bind(this))},X.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,oe(this)),this.readyState=se},X.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,he(this)),this.g&&(this.readyState=3,he(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Z.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;re(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},X.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var n=t.value?t.value:new Uint8Array(0);(n=this.A.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?oe(this):he(this),3==this.readyState&&re(this)}},X.Ua=function(t){this.g&&(this.response=this.responseText=t,oe(this))},X.Ta=function(t){this.g&&(this.response=t,oe(this))},X.ha=function(){this.g&&oe(this)},X.setRequestHeader=function(t,n){this.v.append(t,n)},X.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},X.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],n=this.h.entries();for(var i=n.next();!i.done;)t.push((i=i.value)[0]+": "+i[1]),i=n.next();return t.join("\r\n")},Object.defineProperty(ee.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ue=Z.JSON.parse;function ce(t){dn.call(this),this.headers=new gi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ae,this.K=this.L=!1}ct(ce,dn);var ae="",le=/^https?$/i,fe=["POST","PUT"];function de(t){return"content-type"==t.toLowerCase()}function we(t,n){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=n,t.m=5,pe(t),ve(t)}function pe(t){t.D||(t.D=!0,wn(t,"complete"),wn(t,"error"))}function me(t){if(t.h&&void 0!==Y&&(!t.C[1]||4!=ye(t)||2!=t.ba()))if(t.v&&4==ye(t))Dn(t.Fa,0,t);else if(wn(t,"readystatechange"),4==ye(t)){t.h=!1;try{const h=t.ba();t:switch(h){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break t;default:n=!1}var i;if(!(i=n)){var e;if(e=0===h){var s=String(t.H).match(Ei)[1]||null;if(!s&&Z.self&&Z.self.location){var r=Z.self.location.protocol;s=r.substr(0,r.length-1)}e=!le.test(s?s.toLowerCase():"")}i=e}if(i)wn(t,"complete"),wn(t,"success");else{t.m=6;try{var o=2<ye(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",pe(t)}}finally{ve(t)}}}function ve(t,n){if(t.g){ge(t);const i=t.g,e=t.C[0]?tt:null;t.g=null,t.C=null,n||wn(t,"ready");try{i.onreadystatechange=e}catch(t){}}}function ge(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function ye(t){return t.g?t.g.readyState:0}function be(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ae:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ee(t,n,i){t:{for(e in i){var e=!1;break t}e=!0}e||(i=function(t){let n="";return Tt(t,(function(t,i){n+=i,n+=":",n+=t,n+="\r\n"})),n}(i),"string"==typeof t?null!=i&&encodeURIComponent(String(i)):Di(t,n,i))}function Te(t,n,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||n}function Ae(t){this.za=0,this.l=[],this.h=new Ln,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Te("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Te("baseRetryDelayMs",5e3,t),this.$a=Te("retryDelaySeedMs",1e4,t),this.Ya=Te("forwardChannelMaxRetries",2,t),this.ra=Te("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Hi(t&&t.concurrentRequestLimit),this.Ca=new Zi,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Se(t){if(Ce(t),3==t.G){var n=t.V++,i=Ai(t.F);Di(i,"SID",t.J),Di(i,"RID",n),Di(i,"TYPE","terminate"),ke(t,i),(n=new ni(t,t.h,n,void 0)).K=2,n.v=Ri(Ai(i)),i=!1,Z.navigator&&Z.navigator.sendBeacon&&(i=Z.navigator.sendBeacon(n.v.toString(),"")),!i&&Z.Image&&((new Image).src=n.v,i=!0),i||(n.g=Be(n.l,null),n.g.ea(n.v)),n.F=Date.now(),li(n)}Ve(t)}function Ne(t){t.g&&($e(t),t.g.cancel(),t.g=null)}function Ce(t){Ne(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Pe(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Z.clearTimeout(t.m),t.m=null)}function Ie(t,n){t.l.push(new class{constructor(t,n){this.h=t,this.g=n}}(t.Za++,n)),3==t.G&&De(t)}function De(t){zi(t.i)||t.m||(t.m=!0,Tn(t.Ha,t),t.C=0)}function Re(t,n){var i;i=n?n.m:t.V++;const e=Ai(t.F);Di(e,"SID",t.J),Di(e,"RID",i),Di(e,"AID",t.U),ke(t,e),t.o&&t.s&&Ee(e,t.o,t.s),i=new ni(t,t.h,i,t.C+1),null===t.o&&(i.H=t.s),n&&(t.l=n.D.concat(t.l)),n=_e(t,i,1e3),i.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Wi(t.i,i),oi(i,e,n)}function ke(t,n){t.j&&vi({},(function(t,i){Di(n,i,t)}))}function _e(t,n,i){i=Math.min(t.l.length,i);var e=t.j?ht(t.j.Oa,t.j,t):null;t:{var s=t.l;let n=-1;for(;;){const t=["count="+i];-1==n?0<i?(n=s[0].h,t.push("ofs="+n)):n=0:t.push("ofs="+n);let r=!0;for(let o=0;o<i;o++){let i=s[o].h;const h=s[o].g;if(i-=n,0>i)n=Math.max(0,s[o].h-100),r=!1;else try{te(h,t,"req"+i+"_")}catch(t){e&&e(h)}}if(r){e=t.join("&");break t}}}return t=t.l.splice(0,i),n.D=t,e}function Oe(t){t.g||t.u||(t.Y=1,Tn(t.Ga,t),t.A=0)}function Me(t){return!(t.g||t.u||3<=t.A||(t.Y++,t.u=Qn(ht(t.Ga,t),Fe(t,t.A)),t.A++,0))}function $e(t){null!=t.B&&(Z.clearTimeout(t.B),t.B=null)}function Le(t){t.g=new ni(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var n=Ai(t.oa);Di(n,"RID","rpc"),Di(n,"SID",t.J),Di(n,"CI",t.N?"0":"1"),Di(n,"AID",t.U),ke(t,n),Di(n,"TYPE","xmlhttp"),t.o&&t.s&&Ee(n,t.o,t.s),t.K&&t.g.setTimeout(t.K);var i=t.g;t=t.la,i.K=1,i.v=Ri(Ai(n)),i.s=null,i.U=!0,hi(i,t)}function Pe(t){null!=t.v&&(Z.clearTimeout(t.v),t.v=null)}function Ue(t,n){var i=null;if(t.g==n){Pe(t),$e(t),t.g=null;var e=2}else{if(!Ki(t.i,n))return;i=n.D,Xi(t.i,n),e=1}if(t.I=n.N,0!=t.G)if(n.i)if(1==e){i=n.s?n.s.length:0,n=Date.now()-n.F;var s=t.C;wn(e=xn(),new Hn(e,i,n,s)),De(t)}else Oe(t);else if(3==(s=n.o)||0==s&&0<t.I||!(1==e&&function(t,n){return!(Gi(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=n.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Qn(ht(t.Ha,t,n),Fe(t,t.C)),t.C++,0)))}(t,n)||2==e&&Me(t)))switch(i&&0<i.length&&(n=t.i,n.i=n.i.concat(i)),s){case 1:xe(t,5);break;case 4:xe(t,10);break;case 3:xe(t,6);break;default:xe(t,2)}}function Fe(t,n){let i=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(i*=2),i*n}function xe(t,n){if(t.h.info("Error code "+n),2==n){var i=null;t.j&&(i=null);var e=ht(t.jb,t);i||(i=new Ti("//www.google.com/images/cleardot.gif"),Z.location&&"http"==Z.location.protocol||Si(i,"https"),Ri(i)),function(t,n){const i=new Ln;if(Z.Image){const e=new Image;e.onload=ut(ne,i,e,"TestLoadImage: loaded",!0,n),e.onerror=ut(ne,i,e,"TestLoadImage: error",!1,n),e.onabort=ut(ne,i,e,"TestLoadImage: abort",!1,n),e.ontimeout=ut(ne,i,e,"TestLoadImage: timeout",!1,n),Z.setTimeout((function(){e.ontimeout&&e.ontimeout()}),1e4),e.src=t}else n(!1)}(i.toString(),e)}else qn(2);t.G=0,t.j&&t.j.va(n),Ve(t),Ce(t)}function Ve(t){t.G=0,t.I=-1,t.j&&(0==Ji(t.i).length&&0==t.l.length||(t.i.i.length=0,wt(t.l),t.l.length=0),t.j.ua())}function je(t,n,i){let e=function(t){return t instanceof Ti?Ai(t):new Ti(t,void 0)}(i);if(""!=e.i)n&&Ni(e,n+"."+e.i),Ci(e,e.m);else{const t=Z.location;e=function(t,n,i,e){var s=new Ti(null,void 0);return t&&Si(s,t),n&&Ni(s,n),i&&Ci(s,i),e&&(s.l=e),s}(t.protocol,n?n+"."+t.hostname:t.hostname,+t.port,i)}return t.aa&&Tt(t.aa,(function(t,n){Di(e,n,t)})),i=t.sa,(n=t.D)&&i&&Di(e,n,i),Di(e,"VER",t.ma),ke(t,e),e}function Be(t,n,i){if(n&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(n=new ce(i&&t.Ba&&!t.qa?new ie({ib:!0}):t.qa)).L=t.H,n}function qe(){}function He(){if(kt&&!(10<=Number(Bt)))throw Error("Environmental error: no available transport.")}function Qe(t,n){dn.call(this),this.g=new Ae(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.ya&&(t?t["X-WebChannel-Client-Profile"]=n.ya:t={"X-WebChannel-Client-Profile":n.ya}),this.g.P=t,(t=n&&n.httpHeadersOverwriteParam)&&!pt(t)&&(this.g.o=t),this.A=n&&n.supportsCrossDomainXhr||!1,this.v=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!pt(n)&&(this.g.D=n,null!==(t=this.h)&&n in t&&n in(t=this.h)&&delete t[n]),this.j=new Ke(this)}function ze(t){Yn.call(this);var n=t.__sm__;if(n){t:{for(const i in n){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,n=null!==n&&t in n?n[t]:void 0),this.data=n}else this.data=t}function Ge(){Zn.call(this),this.status=1}function Ke(t){this.g=t}(X=ce.prototype).ea=function(t,n,i,e){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);n=n?n.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xn.g(),this.C=function(t){return t.h||(t.h=t.i())}(this.u?this.u:Xn),this.g.onreadystatechange=ht(this.Fa,this);try{this.F=!0,this.g.open(n,String(t),!0),this.F=!1}catch(t){return void we(this,t)}t=i||"";const s=new gi(this.headers);e&&vi(e,(function(t,n){s.set(n,t)})),e=function(t){t:{var n=de;const i=t.length,e="string"==typeof t?t.split(""):t;for(let s=0;s<i;s++)if(s in e&&n.call(void 0,e[s],s,t)){n=s;break t}n=-1}return 0>n?null:"string"==typeof t?t.charAt(n):t[n]}(s.T()),i=Z.FormData&&t instanceof Z.FormData,!(0<=lt(fe,n))||e||i||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,n){this.g.setRequestHeader(n,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ge(this),0<this.B&&((this.K=function(t){return kt&&jt()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.pa,this)):this.A=Dn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){we(this,t)}},X.pa=function(){void 0!==Y&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wn(this,"timeout"),this.abort(8))},X.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wn(this,"complete"),wn(this,"abort"),ve(this))},X.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ve(this,!0)),ce.Z.M.call(this)},X.Fa=function(){this.s||(this.F||this.v||this.l?me(this):this.cb())},X.cb=function(){me(this)},X.ba=function(){try{return 2<ye(this)?this.g.status:-1}catch(t){return-1}},X.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},X.Qa=function(t){if(this.g){var n=this.g.responseText;return t&&0==n.indexOf(t)&&(n=n.substring(t.length)),ue(n)}},X.Da=function(){return this.m},X.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(X=Ae.prototype).ma=8,X.G=1,X.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},X.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new ni(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=At(r),Nt(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var n=0,i=0;i<this.l.length;i++){var e=this.l[i];if(void 0===(e="__data__"in e.g&&"string"==typeof(e=e.g.__data__)?e.length:void 0))break;if(4096<(n+=e)){n=i;break t}if(4096===n||i===this.l.length-1){n=i+1;break t}}n=1e3}else n=1e3;n=_e(this,s,n),Di(i=Ai(this.F),"RID",t),Di(i,"CVER",22),this.D&&Di(i,"X-HTTP-Session-Id",this.D),ke(this,i),this.o&&r&&Ee(i,this.o,r),Wi(this.i,s),this.Ra&&Di(i,"TYPE","init"),this.ja?(Di(i,"$req",n),Di(i,"SID","null"),s.$=!0,oi(s,i,null)):oi(s,i,n),this.G=2}}else 3==this.G&&(t?Re(this,t):0==this.l.length||zi(this.i)||Re(this))},X.Ga=function(){if(this.u=null,Le(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Qn(ht(this.bb,this),t)}},X.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,qn(10),Ne(this),Le(this))},X.ab=function(){null!=this.v&&(this.v=null,Ne(this),Me(this),qn(19))},X.jb=function(t){t?(this.h.info("Successfully pinged google.com"),qn(2)):(this.h.info("Failed to ping google.com"),qn(1))},(X=qe.prototype).xa=function(){},X.wa=function(){},X.va=function(){},X.ua=function(){},X.Oa=function(){},He.prototype.g=function(t,n){return new Qe(t,n)},ct(Qe,dn),Qe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,n=this.l,i=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Tn(ht(t.hb,t,n))),qn(0),t.W=n,t.aa=i||{},t.N=t.X,t.F=je(t,null,t.W),De(t)},Qe.prototype.close=function(){Se(this.g)},Qe.prototype.u=function(t){if("string"==typeof t){var n={};n.__data__=t,Ie(this.g,n)}else this.v?((n={}).__data__=mn(t),Ie(this.g,n)):Ie(this.g,t)},Qe.prototype.M=function(){this.g.j=null,delete this.j,Se(this.g),delete this.g,Qe.Z.M.call(this)},ct(ze,Yn),ct(Ge,Zn),ct(Ke,qe),Ke.prototype.xa=function(){wn(this.g,"a")},Ke.prototype.wa=function(t){wn(this.g,new ze(t))},Ke.prototype.va=function(t){wn(this.g,new Ge(t))},Ke.prototype.ua=function(){wn(this.g,"b")},He.prototype.createWebChannel=He.prototype.g,Qe.prototype.send=Qe.prototype.u,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,zn.NO_ERROR=0,zn.TIMEOUT=8,zn.HTTP_ERROR=6,Gn.COMPLETE="complete",Wn.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",dn.prototype.listen=dn.prototype.N,ce.prototype.listenOnce=ce.prototype.O,ce.prototype.getLastError=ce.prototype.La,ce.prototype.getLastErrorCode=ce.prototype.Da,ce.prototype.getStatus=ce.prototype.ba,ce.prototype.getResponseJson=ce.prototype.Qa,ce.prototype.getResponseText=ce.prototype.ga,ce.prototype.send=ce.prototype.ea;var We=zn,Xe=Gn,Je=Un,Ye=ie,Ze=Wn,ts=ce;const ns="@firebase/firestore";
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
 */class is{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}is.UNAUTHENTICATED=new is(null),is.GOOGLE_CREDENTIALS=new is("google-credentials-uid"),is.FIRST_PARTY=new is("first-party-uid"),is.MOCK_USER=new is("mock-user");
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
let es="9.6.3";
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
 */const ss=new $("@firebase/firestore");function rs(){return ss.logLevel}function os(t,...n){if(ss.logLevel<=R.DEBUG){const i=n.map(cs);ss.debug(`Firestore (${es}): ${t}`,...i)}}function hs(t,...n){if(ss.logLevel<=R.ERROR){const i=n.map(cs);ss.error(`Firestore (${es}): ${t}`,...i)}}function us(t,...n){if(ss.logLevel<=R.WARN){const i=n.map(cs);ss.warn(`Firestore (${es}): ${t}`,...i)}}function cs(t){if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(n){return t}
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
 */function as(t="Unexpected state"){const n=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw hs(n),new Error(n)}function ls(t){t||as()}
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
const fs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ds extends f{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class ws{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}
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
 */class ps{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ms{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(is.UNAUTHENTICATED)))}shutdown(){}}class vs{constructor(t){this.t=t,this.currentUser=is.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const e=t=>this.i!==i?(i=this.i,n(t)):Promise.resolve();let s=new ws;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ws,t.enqueueRetryable((()=>e(this.currentUser)))};const r=()=>{const n=s;t.enqueueRetryable((async()=>{await n.promise,await e(this.currentUser)}))},o=t=>{os("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(os("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ws)}}),0),r()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((n=>this.i!==t?(os("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ls("string"==typeof n.accessToken),new ps(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ls(null===t||"string"==typeof t),new is(t)}}class gs{constructor(t,n,i){this.type="FirstParty",this.user=is.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const e=t.auth.getAuthHeaderValueForFirstParty([]);e&&this.headers.set("Authorization",e),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class ys{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new gs(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable((()=>n(is.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class bs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Es{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,n){this.o=i=>{t.enqueueRetryable((()=>(t=>(null!=t.error&&os("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),n(t.token)))(i)))};const i=t=>{os("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):os("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ls("string"==typeof t.token),new bs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */class Ts{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=t=>this.p(t),this.T=t=>n.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
 */function As(t){const n="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(n&&"function"==typeof n.getRandomValues)n.getRandomValues(i);else for(let n=0;n<t;n++)i[n]=Math.floor(256*Math.random());return i}
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
 */Ts.I=-1;class Ss{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const e=As(40);for(let s=0;s<e.length;++s)i.length<20&&e[s]<n&&(i+=t.charAt(e[s]%t.length))}return i}}function Ns(t,n){return t<n?-1:t>n?1:0}function Cs(t,n,i){return t.length===n.length&&t.every(((t,e)=>i(t,n[e])))}
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
 */class Is{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ds(fs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ds(fs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new ds(fs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ds(fs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Is.fromMillis(Date.now())}static fromDate(t){return Is.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new Is(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ns(this.nanoseconds,t.nanoseconds):Ns(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Ds{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ds(t)}static min(){return new Ds(new Is(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function Rs(t){let n=0;for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&n++;return n}function ks(t,n){for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&n(i,t[i])}function _s(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}
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
 */class Os{constructor(t,n,i){void 0===n?n=0:n>t.length&&as(),void 0===i?i=t.length-n:i>t.length-n&&as(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return 0===Os.comparator(this,t)}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Os?t.forEach((t=>{n.push(t)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return this.construct(this.segments,this.offset+(t=void 0===t?1:t),this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let e=0;e<i;e++){const i=t.get(e),s=n.get(e);if(i<s)return-1;if(i>s)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Ms extends Os{construct(t,n,i){return new Ms(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new ds(fs.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter((t=>t.length>0)))}return new Ms(n)}static emptyPath(){return new Ms([])}}const $s=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ls extends Os{construct(t,n,i){return new Ls(t,n,i)}static isValidIdentifier(t){return $s.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ls.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ls(["__name__"])}static fromServerFormat(t){const n=[];let i="",e=0;const s=()=>{if(0===i.length)throw new ds(fs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let r=!1;for(;e<t.length;){const n=t[e];if("\\"===n){if(e+1===t.length)throw new ds(fs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const n=t[e+1];if("\\"!==n&&"."!==n&&"`"!==n)throw new ds(fs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=n,e+=2}else"`"===n?(r=!r,e++):"."!==n||r?(i+=n,e++):(s(),e++)}if(s(),r)throw new ds(fs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ls(n)}static emptyPath(){return new Ls([])}}
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
 */class Ps{constructor(t){this.fields=t,t.sort(Ls.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Cs(this.fields,t.fields,((t,n)=>t.isEqual(n)))}}
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
 */class Us{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Us(n)}static fromUint8Array(t){const n=function(t){let n="";for(let i=0;i<t.length;++i)n+=String.fromCharCode(t[i]);return n}(t);return new Us(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ns(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Us.EMPTY_BYTE_STRING=new Us("");const Fs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(t){if(ls(!!t),"string"==typeof t){let n=0;const i=Fs.exec(t);if(ls(!!i),i[1]){let t=i[1];t=(t+"000000000").substr(0,9),n=Number(t)}const e=new Date(t);return{seconds:Math.floor(e.getTime()/1e3),nanos:n}}return{seconds:Vs(t.seconds),nanos:Vs(t.nanos)}}function Vs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function js(t){return"string"==typeof t?Us.fromBase64String(t):Us.fromUint8Array(t)}
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
 */function Bs(t){var n,i;return"server_timestamp"===(null===(i=((null===(n=null==t?void 0:t.mapValue)||void 0===n?void 0:n.fields)||{}).__type__)||void 0===i?void 0:i.stringValue)}function qs(t){const n=t.mapValue.fields.__previous_value__;return Bs(n)?qs(n):n}function Hs(t){const n=xs(t.mapValue.fields.__local_write_time__.timestampValue);return new Is(n.seconds,n.nanos)}
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
 */function Qs(t){return null==t}function zs(t){return 0===t&&1/t==-1/0}
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
class Gs{constructor(t){this.path=t}static fromPath(t){return new Gs(Ms.fromString(t))}static fromName(t){return new Gs(Ms.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Ms.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,n){return Ms.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Gs(new Ms(t.slice()))}}
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
 */function Ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bs(t)?4:10:as()}function Ws(t,n){if(t===n)return!0;const i=Ks(t);if(i!==Ks(n))return!1;switch(i){case 0:return!0;case 1:return t.booleanValue===n.booleanValue;case 4:return Hs(t).isEqual(Hs(n));case 3:return function(t,n){if("string"==typeof t.timestampValue&&"string"==typeof n.timestampValue&&t.timestampValue.length===n.timestampValue.length)return t.timestampValue===n.timestampValue;const i=xs(t.timestampValue),e=xs(n.timestampValue);return i.seconds===e.seconds&&i.nanos===e.nanos}(t,n);case 5:return t.stringValue===n.stringValue;case 6:return function(t,n){return js(t.bytesValue).isEqual(js(n.bytesValue))}(t,n);case 7:return t.referenceValue===n.referenceValue;case 8:return function(t,n){return Vs(t.geoPointValue.latitude)===Vs(n.geoPointValue.latitude)&&Vs(t.geoPointValue.longitude)===Vs(n.geoPointValue.longitude)}(t,n);case 2:return function(t,n){if("integerValue"in t&&"integerValue"in n)return Vs(t.integerValue)===Vs(n.integerValue);if("doubleValue"in t&&"doubleValue"in n){const i=Vs(t.doubleValue),e=Vs(n.doubleValue);return i===e?zs(i)===zs(e):isNaN(i)&&isNaN(e)}return!1}(t,n);case 9:return Cs(t.arrayValue.values||[],n.arrayValue.values||[],Ws);case 10:return function(t,n){const i=t.mapValue.fields||{},e=n.mapValue.fields||{};if(Rs(i)!==Rs(e))return!1;for(const t in i)if(i.hasOwnProperty(t)&&(void 0===e[t]||!Ws(i[t],e[t])))return!1;return!0}(t,n);default:return as()}}function Xs(t,n){return void 0!==(t.values||[]).find((t=>Ws(t,n)))}function Js(t,n){if(t===n)return 0;const i=Ks(t),e=Ks(n);if(i!==e)return Ns(i,e);switch(i){case 0:return 0;case 1:return Ns(t.booleanValue,n.booleanValue);case 2:return function(t,n){const i=Vs(t.integerValue||t.doubleValue),e=Vs(n.integerValue||n.doubleValue);return i<e?-1:i>e?1:i===e?0:isNaN(i)?isNaN(e)?0:-1:1}(t,n);case 3:return Ys(t.timestampValue,n.timestampValue);case 4:return Ys(Hs(t),Hs(n));case 5:return Ns(t.stringValue,n.stringValue);case 6:return function(t,n){const i=js(t),e=js(n);return i.compareTo(e)}(t.bytesValue,n.bytesValue);case 7:return function(t,n){const i=t.split("/"),e=n.split("/");for(let t=0;t<i.length&&t<e.length;t++){const n=Ns(i[t],e[t]);if(0!==n)return n}return Ns(i.length,e.length)}(t.referenceValue,n.referenceValue);case 8:return function(t,n){const i=Ns(Vs(t.latitude),Vs(n.latitude));return 0!==i?i:Ns(Vs(t.longitude),Vs(n.longitude))}(t.geoPointValue,n.geoPointValue);case 9:return function(t,n){const i=t.values||[],e=n.values||[];for(let t=0;t<i.length&&t<e.length;++t){const n=Js(i[t],e[t]);if(n)return n}return Ns(i.length,e.length)}(t.arrayValue,n.arrayValue);case 10:return function(t,n){const i=t.fields||{},e=Object.keys(i),s=n.fields||{},r=Object.keys(s);e.sort(),r.sort();for(let t=0;t<e.length&&t<r.length;++t){const n=Ns(e[t],r[t]);if(0!==n)return n;const o=Js(i[e[t]],s[r[t]]);if(0!==o)return o}return Ns(e.length,r.length)}(t.mapValue,n.mapValue);default:throw as()}}function Ys(t,n){if("string"==typeof t&&"string"==typeof n&&t.length===n.length)return Ns(t,n);const i=xs(t),e=xs(n),s=Ns(i.seconds,e.seconds);return 0!==s?s:Ns(i.nanos,e.nanos)}function Zs(t){return tr(t)}function tr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const n=xs(t);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?js(t.bytesValue).toBase64():"referenceValue"in t?Gs.fromName(t.referenceValue).toString():"geoPointValue"in t?`geo(${(n=t.geoPointValue).latitude},${n.longitude})`:"arrayValue"in t?function(t){let n="[",i=!0;for(const e of t.values||[])i?i=!1:n+=",",n+=tr(e);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",e=!0;for(const s of n)e?e=!1:i+=",",i+=`${s}:${tr(t.fields[s])}`;return i+"}"}(t.mapValue):as();var n}function nr(t){return!!t&&"integerValue"in t}function ir(t){return!!t&&"arrayValue"in t}function er(t){return!!t&&"nullValue"in t}function sr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rr(t){return!!t&&"mapValue"in t}function or(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const n={mapValue:{fields:{}}};return ks(t.mapValue.fields,((t,i)=>n.mapValue.fields[t]=or(i))),n}if(t.arrayValue){const n={arrayValue:{values:[]}};for(let i=0;i<(t.arrayValue.values||[]).length;++i)n.arrayValue.values[i]=or(t.arrayValue.values[i]);return n}return Object.assign({},t)}
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
 */class hr{constructor(t){this.value=t}static empty(){return new hr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!rr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=or(n)}setAll(t){let n=Ls.emptyPath(),i={},e=[];t.forEach(((t,s)=>{if(!n.isImmediateParentOf(s)){const t=this.getFieldsMap(n);this.applyChanges(t,i,e),i={},e=[],n=s.popLast()}t?i[s.lastSegment()]=or(t):e.push(s.lastSegment())}));const s=this.getFieldsMap(n);this.applyChanges(s,i,e)}delete(t){const n=this.field(t.popLast());rr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ws(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let e=n.mapValue.fields[t.get(i)];rr(e)&&e.mapValue.fields||(e={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=e),n=e}return n.mapValue.fields}applyChanges(t,n,i){ks(n,((n,i)=>t[n]=i));for(const n of i)delete t[n]}clone(){return new hr(or(this.value))}}function ur(t){const n=[];return ks(t.fields,((t,i)=>{const e=new Ls([t]);if(rr(i)){const t=ur(i.mapValue).fields;if(0===t.length)n.push(e);else for(const i of t)n.push(e.child(i))}else n.push(e)})),new Ps(n)
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
 */}class cr{constructor(t,n,i,e,s){this.key=t,this.documentType=n,this.version=i,this.data=e,this.documentState=s}static newInvalidDocument(t){return new cr(t,0,Ds.min(),hr.empty(),0)}static newFoundDocument(t,n,i){return new cr(t,1,n,i,0)}static newNoDocument(t,n){return new cr(t,2,n,hr.empty(),0)}static newUnknownDocument(t,n){return new cr(t,3,n,hr.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=hr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=hr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof cr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new cr(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class ar{constructor(t,n=null,i=[],e=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=e,this.limit=s,this.startAt=r,this.endAt=o,this.R=null}}function lr(t,n=null,i=[],e=[],s=null,r=null,o=null){return new ar(t,n,i,e,s,r,o)}function fr(t){const n=t;if(null===n.R){let t=n.path.canonicalString();null!==n.collectionGroup&&(t+="|cg:"+n.collectionGroup),t+="|f:",t+=n.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Zs(t.value)}(t))).join(","),t+="|ob:",t+=n.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Qs(n.limit)||(t+="|l:",t+=n.limit),n.startAt&&(t+="|lb:",t+=Nr(n.startAt)),n.endAt&&(t+="|ub:",t+=Nr(n.endAt)),n.R=t}return n.R}function dr(t,n){if(t.limit!==n.limit)return!1;if(t.orderBy.length!==n.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Ir(t.orderBy[i],n.orderBy[i]))return!1;if(t.filters.length!==n.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if((i=t.filters[s]).op!==(e=n.filters[s]).op||!i.field.isEqual(e.field)||!Ws(i.value,e.value))return!1;var i,e;return t.collectionGroup===n.collectionGroup&&!!t.path.isEqual(n.path)&&!!Rr(t.startAt,n.startAt)&&Rr(t.endAt,n.endAt)}function wr(t){return Gs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class pr extends class{}{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?"in"===n||"not-in"===n?this.P(t,n,i):new mr(t,n,i):"array-contains"===n?new br(t,i):"in"===n?new Er(t,i):"not-in"===n?new Tr(t,i):"array-contains-any"===n?new Ar(t,i):new pr(t,n,i)}static P(t,n,i){return"in"===n?new vr(t,i):new gr(t,i)}matches(t){const n=t.data.field(this.field);return"!="===this.op?null!==n&&this.v(Js(n,this.value)):null!==n&&Ks(this.value)===Ks(n)&&this.v(Js(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return as()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class mr extends pr{constructor(t,n,i){super(t,n,i),this.key=Gs.fromName(i.referenceValue)}matches(t){const n=Gs.comparator(t.key,this.key);return this.v(n)}}class vr extends pr{constructor(t,n){super(t,"in",n),this.keys=yr(0,n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class gr extends pr{constructor(t,n){super(t,"not-in",n),this.keys=yr(0,n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function yr(t,n){var i;return((null===(i=n.arrayValue)||void 0===i?void 0:i.values)||[]).map((t=>Gs.fromName(t.referenceValue)))}class br extends pr{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ir(n)&&Xs(n.arrayValue,this.value)}}class Er extends pr{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return null!==n&&Xs(this.value.arrayValue,n)}}class Tr extends pr{constructor(t,n){super(t,"not-in",n)}matches(t){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return null!==n&&!Xs(this.value.arrayValue,n)}}class Ar extends pr{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ir(n)||!n.arrayValue.values)&&n.arrayValue.values.some((t=>Xs(this.value.arrayValue,t)))}}class Sr{constructor(t,n){this.position=t,this.before=n}}function Nr(t){return`${t.before?"b":"a"}:${t.position.map((t=>Zs(t))).join(",")}`}class Cr{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ir(t,n){return t.dir===n.dir&&t.field.isEqual(n.field)}function Dr(t,n,i){let e=0;for(let s=0;s<t.position.length;s++){const r=n[s],o=t.position[s];if(e=r.field.isKeyField()?Gs.comparator(Gs.fromName(o.referenceValue),i.key):Js(o,i.data.field(r.field)),"desc"===r.dir&&(e*=-1),0!==e)break}return t.before?e<=0:e<0}function Rr(t,n){if(null===t)return null===n;if(null===n)return!1;if(t.before!==n.before||t.position.length!==n.position.length)return!1;for(let i=0;i<t.position.length;i++)if(!Ws(t.position[i],n.position[i]))return!1;return!0}
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
 */class kr{constructor(t,n=null,i=[],e=[],s=null,r="F",o=null,h=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=e,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=h,this.S=null,this.D=null}}function _r(t){return new kr(t)}function Or(t){return!Qs(t.limit)&&"F"===t.limitType}function Mr(t){return!Qs(t.limit)&&"L"===t.limitType}function $r(t){const n=t;if(null===n.S){n.S=[];const t=function(t){for(const n of t.filters)if(n.V())return n.field;return null}(n),i=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(n);if(null!==t&&null===i)t.isKeyField()||n.S.push(new Cr(t)),n.S.push(new Cr(Ls.keyField(),"asc"));else{let t=!1;for(const i of n.explicitOrderBy)n.S.push(i),i.field.isKeyField()&&(t=!0);if(!t){const t=n.explicitOrderBy.length>0?n.explicitOrderBy[n.explicitOrderBy.length-1].dir:"asc";n.S.push(new Cr(Ls.keyField(),t))}}}return n.S}function Lr(t){const n=t;if(!n.D)if("F"===n.limitType)n.D=lr(n.path,n.collectionGroup,$r(n),n.filters,n.limit,n.startAt,n.endAt);else{const t=[];for(const i of $r(n))t.push(new Cr(i.field,"desc"===i.dir?"asc":"desc"));const i=n.endAt?new Sr(n.endAt.position,!n.endAt.before):null,e=n.startAt?new Sr(n.startAt.position,!n.startAt.before):null;n.D=lr(n.path,n.collectionGroup,t,n.filters,n.limit,i,e)}return n.D}function Pr(t,n){return dr(Lr(t),Lr(n))&&t.limitType===n.limitType}function Ur(t){return`${fr(Lr(t))}|lt:${t.limitType}`}function Fr(t){return`Query(target=${function(t){let n=t.path.canonicalString();return null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((t=>{return`${(n=t).field.canonicalString()} ${n.op} ${Zs(n.value)}`;var n})).join(", ")}]`),Qs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(n+=", startAt: "+Nr(t.startAt)),t.endAt&&(n+=", endAt: "+Nr(t.endAt)),`Target(${n})`}(Lr(t))}; limitType=${t.limitType})`}function xr(t,n){return n.isFoundDocument()&&function(t,n){const i=n.key.path;return null!==t.collectionGroup?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):Gs.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(t,n)&&function(t,n){for(const i of t.explicitOrderBy)if(!i.field.isKeyField()&&null===n.data.field(i.field))return!1;return!0}(t,n)&&function(t,n){for(const i of t.filters)if(!i.matches(n))return!1;return!0}(t,n)&&function(t,n){return!(t.startAt&&!Dr(t.startAt,$r(t),n)||t.endAt&&Dr(t.endAt,$r(t),n))}(t,n)}function Vr(t){return(n,i)=>{let e=!1;for(const s of $r(t)){const t=jr(s,n,i);if(0!==t)return t;e=e||s.field.isKeyField()}return 0}}function jr(t,n,i){const e=t.field.isKeyField()?Gs.comparator(n.key,i.key):function(t,n,i){const e=n.data.field(t),s=i.data.field(t);return null!==e&&null!==s?Js(e,s):as()}(t.field,n,i);switch(t.dir){case"asc":return e;case"desc":return-1*e;default:return as()}}
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
 */function Br(t,n){if(t.C){if(isNaN(n))return{doubleValue:"NaN"};if(n===1/0)return{doubleValue:"Infinity"};if(n===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zs(n)?"-0":n}}function qr(t){return{integerValue:""+t}}
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
 */class Hr{constructor(){this._=void 0}}function Qr(t,n,i){return t instanceof Kr?function(t,n){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return n&&(i.fields.__previous_value__=n),{mapValue:i}}(i,n):t instanceof Wr?Xr(t,n):t instanceof Jr?Yr(t,n):function(t,n){const i=Gr(t,n),e=to(i)+to(t.N);return nr(i)&&nr(t.N)?qr(e):Br(t.k,e)}(t,n)}function zr(t,n,i){return t instanceof Wr?Xr(t,n):t instanceof Jr?Yr(t,n):i}function Gr(t,n){return t instanceof Zr?nr(i=n)||function(t){return!!t&&"doubleValue"in t}(i)?n:{integerValue:0}:null;var i}class Kr extends Hr{}class Wr extends Hr{constructor(t){super(),this.elements=t}}function Xr(t,n){const i=no(n);for(const n of t.elements)i.some((t=>Ws(t,n)))||i.push(n);return{arrayValue:{values:i}}}class Jr extends Hr{constructor(t){super(),this.elements=t}}function Yr(t,n){let i=no(n);for(const n of t.elements)i=i.filter((t=>!Ws(t,n)));return{arrayValue:{values:i}}}class Zr extends Hr{constructor(t,n){super(),this.k=t,this.N=n}}function to(t){return Vs(t.integerValue||t.doubleValue)}function no(t){return ir(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class io{constructor(t,n){this.version=t,this.transformResults=n}}class eo{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new eo}static exists(t){return new eo(void 0,t)}static updateTime(t){return new eo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function so(t,n){return void 0!==t.updateTime?n.isFoundDocument()&&n.version.isEqual(t.updateTime):void 0===t.exists||t.exists===n.isFoundDocument()}class ro{}function oo(t,n,i){t instanceof lo?function(t,n,i){const e=t.value.clone(),s=po(t.fieldTransforms,n,i.transformResults);e.setAll(s),n.convertToFoundDocument(i.version,e).setHasCommittedMutations()}(t,n,i):t instanceof fo?function(t,n,i){if(!so(t.precondition,n))return void n.convertToUnknownDocument(i.version);const e=po(t.fieldTransforms,n,i.transformResults),s=n.data;s.setAll(wo(t)),s.setAll(e),n.convertToFoundDocument(i.version,s).setHasCommittedMutations()}(t,n,i):function(t,n,i){n.convertToNoDocument(i.version).setHasCommittedMutations()}(0,n,i)}function ho(t,n,i){t instanceof lo?function(t,n,i){if(!so(t.precondition,n))return;const e=t.value.clone(),s=mo(t.fieldTransforms,i,n);e.setAll(s),n.convertToFoundDocument(ao(n),e).setHasLocalMutations()}(t,n,i):t instanceof fo?function(t,n,i){if(!so(t.precondition,n))return;const e=mo(t.fieldTransforms,i,n),s=n.data;s.setAll(wo(t)),s.setAll(e),n.convertToFoundDocument(ao(n),s).setHasLocalMutations()}(t,n,i):function(t,n){so(t.precondition,n)&&n.convertToNoDocument(Ds.min())}(t,n)}function uo(t,n){let i=null;for(const e of t.fieldTransforms){const t=n.data.field(e.field),s=Gr(e.transform,t||null);null!=s&&(null==i&&(i=hr.empty()),i.set(e.field,s))}return i||null}function co(t,n){return t.type===n.type&&!!t.key.isEqual(n.key)&&!!t.precondition.isEqual(n.precondition)&&!!function(t,n){return void 0===t&&void 0===n||!(!t||!n)&&Cs(t,n,((t,n)=>function(t,n){return t.field.isEqual(n.field)&&function(t,n){return t instanceof Wr&&n instanceof Wr||t instanceof Jr&&n instanceof Jr?Cs(t.elements,n.elements,Ws):t instanceof Zr&&n instanceof Zr?Ws(t.N,n.N):t instanceof Kr&&n instanceof Kr}(t.transform,n.transform)}(t,n)))}(t.fieldTransforms,n.fieldTransforms)&&(0===t.type?t.value.isEqual(n.value):1!==t.type||t.data.isEqual(n.data)&&t.fieldMask.isEqual(n.fieldMask))}function ao(t){return t.isFoundDocument()?t.version:Ds.min()}class lo extends ro{constructor(t,n,i,e=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=e,this.type=0}}class fo extends ro{constructor(t,n,i,e,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=e,this.fieldTransforms=s,this.type=1}}function wo(t){const n=new Map;return t.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const e=t.data.field(i);n.set(i,e)}})),n}function po(t,n,i){const e=new Map;ls(t.length===i.length);for(let s=0;s<i.length;s++){const r=t[s],o=r.transform,h=n.data.field(r.field);e.set(r.field,zr(o,h,i[s]))}return e}function mo(t,n,i){const e=new Map;for(const s of t){const t=s.transform,r=i.data.field(s.field);e.set(s.field,Qr(t,r,n))}return e}class vo extends ro{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class go extends ro{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}
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
 */class yo{constructor(t){this.count=t}}
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
 */var bo,Eo;function To(t){if(void 0===t)return hs("GRPC error has no .code"),fs.UNKNOWN;switch(t){case bo.OK:return fs.OK;case bo.CANCELLED:return fs.CANCELLED;case bo.UNKNOWN:return fs.UNKNOWN;case bo.DEADLINE_EXCEEDED:return fs.DEADLINE_EXCEEDED;case bo.RESOURCE_EXHAUSTED:return fs.RESOURCE_EXHAUSTED;case bo.INTERNAL:return fs.INTERNAL;case bo.UNAVAILABLE:return fs.UNAVAILABLE;case bo.UNAUTHENTICATED:return fs.UNAUTHENTICATED;case bo.INVALID_ARGUMENT:return fs.INVALID_ARGUMENT;case bo.NOT_FOUND:return fs.NOT_FOUND;case bo.ALREADY_EXISTS:return fs.ALREADY_EXISTS;case bo.PERMISSION_DENIED:return fs.PERMISSION_DENIED;case bo.FAILED_PRECONDITION:return fs.FAILED_PRECONDITION;case bo.ABORTED:return fs.ABORTED;case bo.OUT_OF_RANGE:return fs.OUT_OF_RANGE;case bo.UNIMPLEMENTED:return fs.UNIMPLEMENTED;case bo.DATA_LOSS:return fs.DATA_LOSS;default:return as()}}(Eo=bo||(bo={}))[Eo.OK=0]="OK",Eo[Eo.CANCELLED=1]="CANCELLED",Eo[Eo.UNKNOWN=2]="UNKNOWN",Eo[Eo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Eo[Eo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Eo[Eo.NOT_FOUND=5]="NOT_FOUND",Eo[Eo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Eo[Eo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Eo[Eo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Eo[Eo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Eo[Eo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Eo[Eo.ABORTED=10]="ABORTED",Eo[Eo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Eo[Eo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Eo[Eo.INTERNAL=13]="INTERNAL",Eo[Eo.UNAVAILABLE=14]="UNAVAILABLE",Eo[Eo.DATA_LOSS=15]="DATA_LOSS";
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
class Ao{constructor(t,n){this.comparator=t,this.root=n||No.EMPTY}insert(t,n){return new Ao(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,No.BLACK,null,null))}remove(t){return new Ao(this.comparator,this.root.remove(t,this.comparator).copy(null,null,No.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const e=this.comparator(t,i.key);if(0===e)return n+i.left.size;e<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,i)=>(t(n,i),!1)))}toString(){const t=[];return this.inorderTraversal(((n,i)=>(t.push(`${n}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new So(this.root,t,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new So(this.root,t,this.comparator,!0)}}class So{constructor(t,n,i,e){this.isReverse=e,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,e&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class No{constructor(t,n,i,e,s){this.key=t,this.value=n,this.color=null!=i?i:No.RED,this.left=null!=e?e:No.EMPTY,this.right=null!=s?s:No.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,e,s){return new No(null!=t?t:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=e?e:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let e=this;const s=i(t,e.key);return e=s<0?e.copy(null,null,null,e.left.insert(t,n,i),null):0===s?e.copy(null,n,null,null,null):e.copy(null,null,null,null,e.right.insert(t,n,i)),e.fixUp()}removeMin(){if(this.left.isEmpty())return No.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,e=this;if(n(t,e.key)<0)e.left.isEmpty()||e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.remove(t,n),null);else{if(e.left.isRed()&&(e=e.rotateRight()),e.right.isEmpty()||e.right.isRed()||e.right.left.isRed()||(e=e.moveRedRight()),0===n(t,e.key)){if(e.right.isEmpty())return No.EMPTY;i=e.right.min(),e=e.copy(i.key,i.value,null,null,e.right.removeMin())}e=e.copy(null,null,null,null,e.right.remove(t,n))}return e.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,No.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,No.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw as();if(this.right.isRed())throw as();const t=this.left.check();if(t!==this.right.check())throw as();return t+(this.isRed()?0:1)}}No.EMPTY=null,No.RED=!0,No.BLACK=!1,No.EMPTY=new class{constructor(){this.size=0}get key(){throw as()}get value(){throw as()}get color(){throw as()}get left(){throw as()}get right(){throw as()}copy(t,n,i,e,s){return this}insert(t,n,i){return new No(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Co{constructor(t){this.comparator=t,this.data=new Ao(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n=>(t(n),!1)))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const e=i.getNext();if(this.comparator(e.key,t[1])>=0)return;n(e.key)}}forEachWhile(t,n){let i;for(i=void 0!==n?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Io(this.data.getIterator())}getIteratorFrom(t){return new Io(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((t=>{n=n.add(t)})),n}isEqual(t){if(!(t instanceof Co))return!1;if(this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const t=n.getNext().key,e=i.getNext().key;if(0!==this.comparator(t,e))return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Co(this.comparator);return n.data=t,n}}class Io{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const Do=new Ao(Gs.comparator);function Ro(){return Do}const ko=new Ao(Gs.comparator);function _o(){return ko}const Oo=new Ao(Gs.comparator),Mo=new Co(Gs.comparator);function $o(...t){let n=Mo;for(const i of t)n=n.add(i);return n}const Lo=new Co(Ns);function Po(){return Lo}
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
 */class Uo{constructor(t,n,i,e,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=e,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n){const i=new Map;return i.set(t,Fo.createSynthesizedTargetChangeForCurrentChange(t,n)),new Uo(Ds.min(),i,Po(),Ro(),$o())}}class Fo{constructor(t,n,i,e,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=e,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Fo(Us.EMPTY_BYTE_STRING,n,$o(),$o(),$o())}}
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
 */class xo{constructor(t,n,i,e){this.$=t,this.removedTargetIds=n,this.key=i,this.O=e}}class Vo{constructor(t,n){this.targetId=t,this.M=n}}class jo{constructor(t,n,i=Us.EMPTY_BYTE_STRING,e=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=e}}class Bo{constructor(){this.F=0,this.L=Qo(),this.B=Us.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=$o(),n=$o(),i=$o();return this.L.forEach(((e,s)=>{switch(s){case 0:t=t.add(e);break;case 2:n=n.add(e);break;case 1:i=i.add(e);break;default:as()}})),new Fo(this.B,this.U,t,n,i)}H(){this.q=!1,this.L=Qo()}J(t,n){this.q=!0,this.L=this.L.insert(t,n)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class qo{constructor(t){this.et=t,this.nt=new Map,this.st=Ro(),this.it=Ho(),this.rt=new Co(Ns)}ot(t){for(const n of t.$)t.O&&t.O.isFoundDocument()?this.ct(n,t.O):this.at(n,t.key,t.O);for(const n of t.removedTargetIds)this.at(n,t.key,t.O)}ut(t){this.forEachTarget(t,(n=>{const i=this.ht(n);switch(t.state){case 0:this.lt(n)&&i.W(t.resumeToken);break;case 1:i.Z(),i.K||i.H(),i.W(t.resumeToken);break;case 2:i.Z(),i.K||this.removeTarget(n);break;case 3:this.lt(n)&&(i.tt(),i.W(t.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),i.W(t.resumeToken));break;default:as()}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.nt.forEach(((t,i)=>{this.lt(i)&&n(i)}))}dt(t){const n=t.targetId,i=t.M.count,e=this.wt(n);if(e){const t=e.target;if(wr(t))if(0===i){const i=new Gs(t.path);this.at(n,i,cr.newNoDocument(i,Ds.min()))}else ls(1===i);else this._t(n)!==i&&(this.ft(n),this.rt=this.rt.add(n))}}gt(t){const n=new Map;this.nt.forEach(((i,e)=>{const s=this.wt(e);if(s){if(i.current&&wr(s.target)){const n=new Gs(s.target.path);null!==this.st.get(n)||this.yt(e,n)||this.at(e,n,cr.newNoDocument(n,t))}i.j&&(n.set(e,i.G()),i.H())}}));let i=$o();this.it.forEach(((t,n)=>{let e=!0;n.forEachWhile((t=>{const n=this.wt(t);return!n||2===n.purpose||(e=!1,!1)})),e&&(i=i.add(t))}));const e=new Uo(t,n,this.rt,this.st,i);return this.st=Ro(),this.it=Ho(),this.rt=new Co(Ns),e}ct(t,n){if(!this.lt(t))return;const i=this.yt(t,n.key)?2:0;this.ht(t).J(n.key,i),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(t))}at(t,n,i){if(!this.lt(t))return;const e=this.ht(t);this.yt(t,n)?e.J(n,1):e.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(t)),i&&(this.st=this.st.insert(n,i))}removeTarget(t){this.nt.delete(t)}_t(t){const n=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let n=this.nt.get(t);return n||(n=new Bo,this.nt.set(t,n)),n}Tt(t){let n=this.it.get(t);return n||(n=new Co(Ns),this.it=this.it.insert(t,n)),n}lt(t){const n=null!==this.wt(t);return n||os("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.nt.get(t);return n&&n.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Bo),this.et.getRemoteKeysForTarget(t).forEach((n=>{this.at(t,n,null)}))}yt(t,n){return this.et.getRemoteKeysForTarget(t).has(n)}}function Ho(){return new Ao(Gs.comparator)}function Qo(){return new Ao(Gs.comparator)}
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
 */const zo={asc:"ASCENDING",desc:"DESCENDING"},Go={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Ko{constructor(t,n){this.databaseId=t,this.C=n}}function Wo(t,n){return t.C?`${new Date(1e3*n.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+n.nanoseconds).slice(-9)}Z`:{seconds:""+n.seconds,nanos:n.nanoseconds}}function Xo(t,n){return t.C?n.toBase64():n.toUint8Array()}function Jo(t,n){return Wo(t,n.toTimestamp())}function Yo(t){return ls(!!t),Ds.fromTimestamp(function(t){const n=xs(t);return new Is(n.seconds,n.nanos)}(t))}function Zo(t,n){return function(t){return new Ms(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(n).canonicalString()}function th(t){const n=Ms.fromString(t);return ls(bh(n)),n}function nh(t,n){return Zo(t.databaseId,n.path)}function ih(t,n){const i=th(n);if(i.get(1)!==t.databaseId.projectId)throw new ds(fs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+t.databaseId.projectId);if(i.get(3)!==t.databaseId.database)throw new ds(fs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+t.databaseId.database);return new Gs(rh(i))}function eh(t,n){return Zo(t.databaseId,n)}function sh(t){return new Ms(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rh(t){return ls(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function oh(t,n,i){return{name:nh(t,n),fields:i.value.mapValue.fields}}function hh(t,n){return{documents:[eh(t,n.path)]}}function uh(t,n){const i={structuredQuery:{}},e=n.path;null!==n.collectionGroup?(i.parent=eh(t,e),i.structuredQuery.from=[{collectionId:n.collectionGroup,allDescendants:!0}]):(i.parent=eh(t,e.popLast()),i.structuredQuery.from=[{collectionId:e.lastSegment()}]);const s=function(t){if(0===t.length)return;const n=t.map((t=>function(t){if("=="===t.op){if(sr(t.value))return{unaryFilter:{field:ph(t.field),op:"IS_NAN"}};if(er(t.value))return{unaryFilter:{field:ph(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(sr(t.value))return{unaryFilter:{field:ph(t.field),op:"IS_NOT_NAN"}};if(er(t.value))return{unaryFilter:{field:ph(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ph(t.field),op:wh(t.op),value:t.value}}}(t)));return 1===n.length?n[0]:{compositeFilter:{op:"AND",filters:n}}}(n.filters);s&&(i.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ph(t.field),direction:dh(t.dir)}}(t)))}(n.orderBy);r&&(i.structuredQuery.orderBy=r);const o=function(t,n){return t.C||Qs(n)?n:{value:n}}(t,n.limit);return null!==o&&(i.structuredQuery.limit=o),n.startAt&&(i.structuredQuery.startAt=lh(n.startAt)),n.endAt&&(i.structuredQuery.endAt=lh(n.endAt)),i}function ch(t){let n=function(t){const n=th(t);return 4===n.length?Ms.emptyPath():rh(n)}(t.parent);const i=t.structuredQuery,e=i.from?i.from.length:0;let s=null;if(e>0){ls(1===e);const t=i.from[0];t.allDescendants?s=t.collectionId:n=n.child(t.collectionId)}let r=[];i.where&&(r=ah(i.where));let o=[];i.orderBy&&(o=i.orderBy.map((t=>function(t){return new Cr(mh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let h=null;i.limit&&(h=function(t){let n;return n="object"==typeof t?t.value:t,Qs(n)?null:n}(i.limit));let u=null;i.startAt&&(u=fh(i.startAt));let c=null;return i.endAt&&(c=fh(i.endAt)),function(t,n,i,e,s,r,o,h){return new kr(t,n,i,e,s,"F",o,h)}(n,s,o,r,h,0,u,c)}function ah(t){return t?void 0!==t.unaryFilter?[gh(t)]:void 0!==t.fieldFilter?[vh(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ah(t))).reduce(((t,n)=>t.concat(n))):as():[]}function lh(t){return{before:t.before,values:t.position}}function fh(t){return new Sr(t.values||[],!!t.before)}function dh(t){return zo[t]}function wh(t){return Go[t]}function ph(t){return{fieldPath:t.canonicalString()}}function mh(t){return Ls.fromServerFormat(t.fieldPath)}function vh(t){return pr.create(mh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return as()}}(t.fieldFilter.op),t.fieldFilter.value)}function gh(t){switch(t.unaryFilter.op){case"IS_NAN":const n=mh(t.unaryFilter.field);return pr.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=mh(t.unaryFilter.field);return pr.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const e=mh(t.unaryFilter.field);return pr.create(e,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=mh(t.unaryFilter.field);return pr.create(s,"!=",{nullValue:"NULL_VALUE"});default:return as()}}function yh(t){const n=[];return t.fields.forEach((t=>n.push(t.canonicalString()))),{fieldPaths:n}}function bh(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
class Eh{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&as(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Eh(((i,e)=>{this.nextCallback=n=>{this.wrapSuccess(t,n).next(i,e)},this.catchCallback=t=>{this.wrapFailure(n,t).next(i,e)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof Eh?n:Eh.resolve(n)}catch(t){return Eh.reject(t)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):Eh.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):Eh.reject(n)}static resolve(t){return new Eh((n=>{n(t)}))}static reject(t){return new Eh(((n,i)=>{i(t)}))}static waitFor(t){return new Eh(((n,i)=>{let e=0,s=0,r=!1;t.forEach((t=>{++e,t.next((()=>{++s,r&&s===e&&n()}),(t=>i(t)))})),r=!0,s===e&&n()}))}static or(t){let n=Eh.resolve(!1);for(const i of t)n=n.next((t=>t?Eh.resolve(t):i()));return n}static forEach(t,n){const i=[];return t.forEach(((t,e)=>{i.push(n.call(this,t,e))})),this.waitFor(i)}}function Th(t){return"IndexedDbTransactionError"===t.name}
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
 */class Ah{constructor(t,n,i,e){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=e}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let n=0;n<this.mutations.length;n++){const e=this.mutations[n];e.key.isEqual(t.key)&&oo(e,t,i[n])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&ho(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&ho(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((n=>{const i=t.get(n.key),e=i;this.applyToLocalView(e),i.isValidDocument()||e.convertToNoDocument(Ds.min())}))}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),$o())}isEqual(t){return this.batchId===t.batchId&&Cs(this.mutations,t.mutations,((t,n)=>co(t,n)))&&Cs(this.baseMutations,t.baseMutations,((t,n)=>co(t,n)))}}class Sh{constructor(t,n,i,e){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=e}static from(t,n,i){ls(t.mutations.length===i.length);let e=Oo;const s=t.mutations;for(let t=0;t<s.length;t++)e=e.insert(s[t].key,i[t].version);return new Sh(t,n,i,e)}}
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
 */class Nh{constructor(t,n,i,e,s=Ds.min(),r=Ds.min(),o=Us.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=e,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Nh(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Nh(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Nh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Ch{constructor(t){this.Gt=t}}function Ih(t){const n=ch({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,n){return new kr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,"L",t.startAt,t.endAt)}(n,n.limit):n}
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
 */class Dh{constructor(){this.zt=new Rh}addToCollectionParentIndex(t,n){return this.zt.add(n),Eh.resolve()}getCollectionParents(t,n){return Eh.resolve(this.zt.getEntries(n))}}class Rh{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),e=this.index[n]||new Co(Ms.comparator),s=!e.has(i);return this.index[n]=e.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),e=this.index[n];return e&&e.has(i)}getEntries(t){return(this.index[t]||new Co(Ms.comparator)).toArray()}}
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
 */class kh{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new kh(0)}static re(){return new kh(-1)}}
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
 */async function _h(t){if(t.code!==fs.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;os("LocalStore","Unexpectedly lost primary lease")}
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
 */class Oh{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i)for(const[n,e]of i)if(this.equalsFn(n,t))return e}has(t){return void 0!==this.get(t)}set(t,n){const i=this.mapKeyFn(t),e=this.inner[i];if(void 0!==e){for(let i=0;i<e.length;i++)if(this.equalsFn(e[i][0],t))return void(e[i]=[t,n]);e.push([t,n])}else this.inner[i]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return!1;for(let e=0;e<i.length;e++)if(this.equalsFn(i[e][0],t))return 1===i.length?delete this.inner[n]:i.splice(e,1),!0;return!1}forEach(t){ks(this.inner,((n,i)=>{for(const[n,e]of i)t(n,e)}))}isEmpty(){return _s(this.inner)}}
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
class Mh{constructor(t,n,i){this.Je=t,this.An=n,this.Jt=i}Rn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKey(t,n).next((i=>this.bn(t,n,i)))}bn(t,n,i){return this.Je.getEntry(t,n).next((t=>{for(const n of i)n.applyToLocalView(t);return t}))}Pn(t,n){t.forEach(((t,i)=>{for(const t of n)t.applyToLocalView(i)}))}vn(t,n){return this.Je.getEntries(t,n).next((n=>this.Vn(t,n).next((()=>n))))}Vn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,n).next((t=>this.Pn(n,t)))}getDocumentsMatchingQuery(t,n,i){return function(t){return Gs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(n)?this.Sn(t,n.path):function(t){return null!==t.collectionGroup}(n)?this.Dn(t,n,i):this.Cn(t,n,i)}Sn(t,n){return this.Rn(t,new Gs(n)).next((t=>{let n=_o();return t.isFoundDocument()&&(n=n.insert(t.key,t)),n}))}Dn(t,n,i){const e=n.collectionGroup;let s=_o();return this.Jt.getCollectionParents(t,e).next((r=>Eh.forEach(r,(r=>{const o=function(t,n){return new kr(n,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(n,r.child(e));return this.Cn(t,o,i).next((t=>{t.forEach(((t,n)=>{s=s.insert(t,n)}))}))})).next((()=>s))))}Cn(t,n,i){let e,s;return this.Je.getDocumentsMatchingQuery(t,n,i).next((i=>(e=i,this.An.getAllMutationBatchesAffectingQuery(t,n)))).next((n=>(s=n,this.Nn(t,s,e).next((t=>{e=t;for(const t of s)for(const n of t.mutations){const i=n.key;let s=e.get(i);null==s&&(s=cr.newInvalidDocument(i),e=e.insert(i,s)),ho(n,s,t.localWriteTime),s.isFoundDocument()||(e=e.remove(i))}}))))).next((()=>(e.forEach(((t,i)=>{xr(n,i)||(e=e.remove(t))})),e)))}Nn(t,n,i){let e=$o();for(const t of n)for(const n of t.mutations)n instanceof fo&&null===i.get(n.key)&&(e=e.add(n.key));let s=i;return this.Je.getEntries(t,e).next((t=>(t.forEach(((t,n)=>{n.isFoundDocument()&&(s=s.insert(t,n))})),s)))}}
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
 */class $h{constructor(t,n,i,e){this.targetId=t,this.fromCache=n,this.kn=i,this.xn=e}static $n(t,n){let i=$o(),e=$o();for(const t of n.docChanges)switch(t.type){case 0:i=i.add(t.doc.key);break;case 1:e=e.add(t.doc.key)}return new $h(t,n.fromCache,i,e)}}
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
 */class Lh{On(t){this.Mn=t}getDocumentsMatchingQuery(t,n,i,e){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(Ds.min())?this.Fn(t,n):this.Mn.vn(t,e).next((s=>{const r=this.Ln(n,s);return(Or(n)||Mr(n))&&this.Bn(n.limitType,r,e,i)?this.Fn(t,n):(rs()<=R.DEBUG&&os("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fr(n)),this.Mn.getDocumentsMatchingQuery(t,n,i).next((t=>(r.forEach((n=>{t=t.insert(n.key,n)})),t))))}))}Ln(t,n){let i=new Co(Vr(t));return n.forEach(((n,e)=>{xr(t,e)&&(i=i.add(e))})),i}Bn(t,n,i,e){if(i.size!==n.size)return!0;const s="F"===t?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(e)>0)}Fn(t,n){return rs()<=R.DEBUG&&os("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.Mn.getDocumentsMatchingQuery(t,n,Ds.min())}}
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
 */class Ph{constructor(t,n,i,e){this.persistence=t,this.Un=n,this.k=e,this.qn=new Ao(Ns),this.Kn=new Oh((t=>fr(t)),dr),this.jn=Ds.min(),this.An=t.getMutationQueue(i),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Mh(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.qn)))}}async function Uh(t,n){const i=t;let e=i.An,s=i.Wn;const r=await i.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return i.An.getAllMutationBatches(t).next((o=>(r=o,e=i.persistence.getMutationQueue(n),s=new Mh(i.Qn,e,i.persistence.getIndexManager()),e.getAllMutationBatches(t)))).next((n=>{const i=[],e=[];let o=$o();for(const t of r){i.push(t.batchId);for(const n of t.mutations)o=o.add(n.key)}for(const t of n){e.push(t.batchId);for(const n of t.mutations)o=o.add(n.key)}return s.vn(t,o).next((t=>({Gn:t,removedBatchIds:i,addedBatchIds:e})))}))}));return i.An=e,i.Wn=s,i.Un.On(i.Wn),r}function Fh(t){const n=t;return n.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>n.He.getLastRemoteSnapshotVersion(t)))}function xh(t,n){const i=t;return i.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===n&&(n=-1),i.An.getNextMutationBatchAfterBatchId(t,n))))}async function Vh(t,n,i){const e=t,s=e.qn.get(n),r=i?"readwrite":"readwrite-primary";try{i||await e.persistence.runTransaction("Release target",r,(t=>e.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Th(t))throw t;os("LocalStore",`Failed to update sequence numbers for target ${n}: ${t}`)}e.qn=e.qn.remove(n),e.Kn.delete(s.target)}function jh(t,n,i){const e=t;let s=Ds.min(),r=$o();return e.persistence.runTransaction("Execute query","readonly",(t=>function(t,n,i){const e=t,s=e.Kn.get(i);return void 0!==s?Eh.resolve(e.qn.get(s)):e.He.getTargetData(n,i)}(e,t,Lr(n)).next((n=>{if(n)return s=n.lastLimboFreeSnapshotVersion,e.He.getMatchingKeysForTargetId(t,n.targetId).next((t=>{r=t}))})).next((()=>e.Un.getDocumentsMatchingQuery(t,n,i?s:Ds.min(),i?r:$o()))).next((t=>({documents:t,zn:r})))))}
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
 */class Bh{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,n){return Eh.resolve(this.Xn.get(n))}saveBundleMetadata(t,n){var i;return this.Xn.set(n.id,{id:(i=n).id,version:i.version,createTime:Yo(i.createTime)}),Eh.resolve()}getNamedQuery(t,n){return Eh.resolve(this.Zn.get(n))}saveNamedQuery(t,n){return this.Zn.set(n.name,function(t){return{name:t.name,query:Ih(t.bundledQuery),readTime:Yo(t.readTime)}}(n)),Eh.resolve()}}
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
 */class qh{constructor(){this.ts=new Co(Hh.es),this.ns=new Co(Hh.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,n){const i=new Hh(t,n);this.ts=this.ts.add(i),this.ns=this.ns.add(i)}rs(t,n){t.forEach((t=>this.addReference(t,n)))}removeReference(t,n){this.os(new Hh(t,n))}cs(t,n){t.forEach((t=>this.removeReference(t,n)))}us(t){const n=new Gs(new Ms([])),i=new Hh(n,t),e=new Hh(n,t+1),s=[];return this.ns.forEachInRange([i,e],(t=>{this.os(t),s.push(t.key)})),s}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const n=new Gs(new Ms([])),i=new Hh(n,t),e=new Hh(n,t+1);let s=$o();return this.ns.forEachInRange([i,e],(t=>{s=s.add(t.key)})),s}containsKey(t){const n=new Hh(t,0),i=this.ts.firstAfterOrEqual(n);return null!==i&&t.isEqual(i.key)}}class Hh{constructor(t,n){this.key=t,this.fs=n}static es(t,n){return Gs.comparator(t.key,n.key)||Ns(t.fs,n.fs)}static ss(t,n){return Ns(t.fs,n.fs)||Gs.comparator(t.key,n.key)}}
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
 */class Qh{constructor(t,n){this.Jt=t,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new Co(Hh.es)}checkEmpty(t){return Eh.resolve(0===this.An.length)}addMutationBatch(t,n,i,e){const s=this.ds;this.ds++;const r=new Ah(s,n,i,e);this.An.push(r);for(const n of e)this.ws=this.ws.add(new Hh(n.key,s)),this.Jt.addToCollectionParentIndex(t,n.key.path.popLast());return Eh.resolve(r)}lookupMutationBatch(t,n){return Eh.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const i=this.gs(n+1),e=i<0?0:i;return Eh.resolve(this.An.length>e?this.An[e]:null)}getHighestUnacknowledgedBatchId(){return Eh.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Eh.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new Hh(n,0),e=new Hh(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([i,e],(t=>{const n=this._s(t.fs);s.push(n)})),Eh.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new Co(Ns);return n.forEach((t=>{const n=new Hh(t,0),e=new Hh(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([n,e],(t=>{i=i.add(t.fs)}))})),Eh.resolve(this.ys(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,e=i.length+1;let s=i;Gs.isDocumentKey(s)||(s=s.child(""));const r=new Hh(new Gs(s),0);let o=new Co(Ns);return this.ws.forEachWhile((t=>{const n=t.key.path;return!!i.isPrefixOf(n)&&(n.length===e&&(o=o.add(t.fs)),!0)}),r),Eh.resolve(this.ys(o))}ys(t){const n=[];return t.forEach((t=>{const i=this._s(t);null!==i&&n.push(i)})),n}removeMutationBatch(t,n){ls(0===this.ps(n.batchId,"removed")),this.An.shift();let i=this.ws;return Eh.forEach(n.mutations,(e=>{const s=new Hh(e.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,e.key)})).next((()=>{this.ws=i}))}ee(t){}containsKey(t,n){const i=new Hh(n,0),e=this.ws.firstAfterOrEqual(i);return Eh.resolve(n.isEqual(e&&e.key))}performConsistencyCheck(t){return Eh.resolve()}ps(t,n){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const n=this.gs(t);return n<0||n>=this.An.length?null:this.An[n]}}
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
 */class zh{constructor(t,n){this.Jt=t,this.Ts=n,this.docs=new Ao(Gs.comparator),this.size=0}addEntry(t,n,i){const e=n.key,s=this.docs.get(e),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(e,{document:n.mutableCopy(),size:o,readTime:i}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,e.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return Eh.resolve(i?i.document.mutableCopy():cr.newInvalidDocument(n))}getEntries(t,n){let i=Ro();return n.forEach((t=>{const n=this.docs.get(t);i=i.insert(t,n?n.document.mutableCopy():cr.newInvalidDocument(t))})),Eh.resolve(i)}getDocumentsMatchingQuery(t,n,i){let e=Ro();const s=new Gs(n.path.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s,readTime:o}}=r.getNext();if(!n.path.isPrefixOf(t.path))break;o.compareTo(i)<=0||xr(n,s)&&(e=e.insert(s.key,s.mutableCopy()))}return Eh.resolve(e)}Es(t,n){return Eh.forEach(this.docs,(t=>n(t)))}newChangeBuffer(t){return new Gh(this)}getSize(t){return Eh.resolve(this.size)}}class Gh extends class{constructor(){this.changes=new Oh((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}getReadTime(t){const n=this.changes.get(t);return n?n.readTime:Ds.min()}addEntry(t,n){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:n})}removeEntry(t,n=null){this.assertNotApplied(),this.changes.set(t,{document:cr.newInvalidDocument(t),readTime:n})}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return void 0!==i?Eh.resolve(i.document):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.De=t}applyChanges(t){const n=[];return this.changes.forEach(((i,e)=>{e.document.isValidDocument()?n.push(this.De.addEntry(t,e.document,this.getReadTime(i))):this.De.removeEntry(i)})),Eh.waitFor(n)}getFromCache(t,n){return this.De.getEntry(t,n)}getAllFromCache(t,n){return this.De.getEntries(t,n)}}
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
 */class Kh{constructor(t){this.persistence=t,this.Is=new Oh((t=>fr(t)),dr),this.lastRemoteSnapshotVersion=Ds.min(),this.highestTargetId=0,this.As=0,this.Rs=new qh,this.targetCount=0,this.bs=kh.ie()}forEachTarget(t,n){return this.Is.forEach(((t,i)=>n(i))),Eh.resolve()}getLastRemoteSnapshotVersion(t){return Eh.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Eh.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),Eh.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.As&&(this.As=n),Eh.resolve()}ae(t){this.Is.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new kh(n),this.highestTargetId=n),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,n){return this.ae(n),this.targetCount+=1,Eh.resolve()}updateTargetData(t,n){return this.ae(n),Eh.resolve()}removeTargetData(t,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,Eh.resolve()}removeTargets(t,n,i){let e=0;const s=[];return this.Is.forEach(((r,o)=>{o.sequenceNumber<=n&&null===i.get(o.targetId)&&(this.Is.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),e++)})),Eh.waitFor(s).next((()=>e))}getTargetCount(t){return Eh.resolve(this.targetCount)}getTargetData(t,n){const i=this.Is.get(n)||null;return Eh.resolve(i)}addMatchingKeys(t,n,i){return this.Rs.rs(n,i),Eh.resolve()}removeMatchingKeys(t,n,i){this.Rs.cs(n,i);const e=this.persistence.referenceDelegate,s=[];return e&&n.forEach((n=>{s.push(e.markPotentiallyOrphaned(t,n))})),Eh.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Rs.us(n),Eh.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Rs.ls(n);return Eh.resolve(i)}containsKey(t,n){return Eh.resolve(this.Rs.containsKey(n))}}
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
 */class Wh{constructor(t,n){this.Ps={},this.Be=new Ts(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Kh(this),this.Jt=new Dh,this.Je=function(t,n){return new zh(t,n)}(this.Jt,(t=>this.referenceDelegate.vs(t))),this.k=new Ch(n),this.Ye=new Bh(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let n=this.Ps[t.toKey()];return n||(n=new Qh(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,n,i){os("MemoryPersistence","Starting transaction:",t);const e=new Xh(this.Be.next());return this.referenceDelegate.Vs(),i(e).next((t=>this.referenceDelegate.Ss(e).next((()=>t)))).toPromise().then((t=>(e.raiseOnCommittedEvent(),t)))}Ds(t,n){return Eh.or(Object.values(this.Ps).map((i=>()=>i.containsKey(t,n))))}}class Xh extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Jh{constructor(t){this.persistence=t,this.Cs=new qh,this.Ns=null}static ks(t){return new Jh(t)}get xs(){if(this.Ns)return this.Ns;throw as()}addReference(t,n,i){return this.Cs.addReference(i,n),this.xs.delete(i.toString()),Eh.resolve()}removeReference(t,n,i){return this.Cs.removeReference(i,n),this.xs.add(i.toString()),Eh.resolve()}markPotentiallyOrphaned(t,n){return this.xs.add(n.toString()),Eh.resolve()}removeTarget(t,n){this.Cs.us(n.targetId).forEach((t=>this.xs.add(t.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>i.removeTargetData(t,n)))}Vs(){this.Ns=new Set}Ss(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Eh.forEach(this.xs,(i=>{const e=Gs.fromPath(i);return this.$s(t,e).next((t=>{t||n.removeEntry(e)}))})).next((()=>(this.Ns=null,n.apply(t))))}updateLimboDocument(t,n){return this.$s(t,n).next((t=>{t?this.xs.delete(n.toString()):this.xs.add(n.toString())}))}vs(t){return 0}$s(t,n){return Eh.or([()=>Eh.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ds(t,n)])}}class Yh{constructor(){this.activeTargetIds=Po()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zh{constructor(){this.pi=new Yh,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,n,i){this.Ti[t]=n}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Yh,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class tu{Ei(t){}shutdown(){}}
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
 */class nu{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){os("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){os("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const iu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class eu{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}
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
 */class su extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId,this.Fi=(t.ssl?"https":"http")+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,n,i,e,s){const r=this.Ui(t,n);os("RestConnection","Sending: ",r,i);const o={};return this.qi(o,e,s),this.Ki(t,r,o,i).then((t=>(os("RestConnection","Received: ",t),t)),(n=>{throw us("RestConnection",`${t} failed with error: `,n,"url: ",r,"request:",i),n}))}ji(t,n,i,e,s){return this.Bi(t,n,i,e,s)}qi(t,n,i){t["X-Goog-Api-Client"]="gl-js/ fire/"+es,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((n,i)=>t[i]=n)),i&&i.headers.forEach(((n,i)=>t[i]=n))}Ui(t,n){return`${this.Fi}/v1/${n}:${iu[t]}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,n,i,e){return new Promise(((s,r)=>{const o=new ts;o.listenOnce(Xe.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case We.NO_ERROR:const n=o.getResponseJson();os("Connection","XHR received:",JSON.stringify(n)),s(n);break;case We.TIMEOUT:os("Connection",'RPC "'+t+'" timed out'),r(new ds(fs.DEADLINE_EXCEEDED,"Request time out"));break;case We.HTTP_ERROR:const i=o.getStatus();if(os("Connection",'RPC "'+t+'" failed with status:',i,"response text:",o.getResponseText()),i>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const n=function(t){const n=t.toLowerCase().replace(/_/g,"-");return Object.values(fs).indexOf(n)>=0?n:fs.UNKNOWN}(t.status);r(new ds(n,t.message))}else r(new ds(fs.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ds(fs.UNAVAILABLE,"Connection failed."));break;default:as()}}finally{os("Connection",'RPC "'+t+'" completed.')}}));const h=JSON.stringify(e);o.send(n,"POST",h,i,15)}))}Qi(t,n,i){const e=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=new He,a=xn(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new Ye({})),this.qi(l.initMessageHeaders,n,i),r()||h()||s().indexOf("Electron/")>=0||u()||s().indexOf("MSAppHost/")>=0||o()||(l.httpHeadersOverwriteParam="$httpHeaders");const f=e.join("");os("Connection","Creating WebChannel: "+f,l);const d=c.createWebChannel(f,l);let w=!1,p=!1;const m=new eu({Vi:t=>{p?os("Connection","Not sending because WebChannel is closed:",t):(w||(os("Connection","Opening WebChannel transport."),d.open(),w=!0),os("Connection","WebChannel sending:",t),d.send(t))},Si:()=>d.close()}),v=(t,n,i)=>{t.listen(n,(t=>{try{i(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return v(d,Ze.EventType.OPEN,(()=>{p||os("Connection","WebChannel transport opened.")})),v(d,Ze.EventType.CLOSE,(()=>{p||(p=!0,os("Connection","WebChannel transport closed"),m.Oi())})),v(d,Ze.EventType.ERROR,(t=>{p||(p=!0,us("Connection","WebChannel transport errored:",t),m.Oi(new ds(fs.UNAVAILABLE,"The operation could not be completed")))})),v(d,Ze.EventType.MESSAGE,(t=>{var n;if(!p){const i=t.data[0];ls(!!i);const e=i,s=e.error||(null===(n=e[0])||void 0===n?void 0:n.error);if(s){os("Connection","WebChannel received error:",s);const t=s.status;let n=function(t){const n=bo[t];if(void 0!==n)return To(n)}(t),i=s.message;void 0===n&&(n=fs.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),p=!0,m.Oi(new ds(n,i)),d.close()}else os("Connection","WebChannel received:",i),m.Mi(i)}})),v(a,Je.STAT_EVENT,(t=>{10===t.stat?os("Connection","Detected buffering proxy"):11===t.stat&&os("Connection","Detected no buffering proxy")})),setTimeout((()=>{m.$i()}),0),m}}function ru(){return"undefined"!=typeof document?document:null}
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
 */function ou(t){return new Ko(t,!0)}class hu{constructor(t,n,i=1e3,e=1.5,s=6e4){this.Me=t,this.timerId=n,this.Wi=i,this.Gi=e,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const n=Math.floor(this.Hi+this.tr()),i=Math.max(0,Date.now()-this.Yi),e=Math.max(0,n-i);e>0&&os("ExponentialBackoff",`Backing off for ${e} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,e,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
 */class uu{constructor(t,n,i,e,s,r,o,h){this.Me=t,this.nr=i,this.sr=e,this.ir=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=h,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new hu(t,n)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():n&&n.code===fs.RESOURCE_EXHAUSTED?(hs(n.toString()),hs("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===fs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,i])=>{this.rr===n&&this.Ir(t,i)}),(n=>{t((()=>{const t=new ds(fs.UNKNOWN,"Fetching auth token failed: "+n.message);return this.Ar(t)}))}))}Ir(t,n){const i=this.Er(this.rr);this.stream=this.Rr(t,n),this.stream.Di((()=>{i((()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{i((()=>this.Ar(t)))})),this.stream.onMessage((t=>{i((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return os("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return n=>{this.Me.enqueueAndForget((()=>this.rr===t?n():(os("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cu extends uu{constructor(t,n,i,e,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,e,r),this.k=s}Rr(t,n){return this.ir.Qi("Listen",t,n)}onMessage(t){this.ur.reset();const n=function(t,n){let i;if("targetChange"in n){const e=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:as()}(n.targetChange.targetChangeType||"NO_CHANGE"),s=n.targetChange.targetIds||[],r=function(t,n){return t.C?(ls(void 0===n||"string"==typeof n),Us.fromBase64String(n||"")):(ls(void 0===n||n instanceof Uint8Array),Us.fromUint8Array(n||new Uint8Array))}(t,n.targetChange.resumeToken),o=n.targetChange.cause,h=o&&function(t){const n=void 0===t.code?fs.UNKNOWN:To(t.code);return new ds(n,t.message||"")}(o);i=new jo(e,s,r,h||null)}else if("documentChange"in n){const e=n.documentChange,s=ih(t,e.document.name),r=Yo(e.document.updateTime),o=new hr({mapValue:{fields:e.document.fields}}),h=cr.newFoundDocument(s,r,o);i=new xo(e.targetIds||[],e.removedTargetIds||[],h.key,h)}else if("documentDelete"in n){const e=n.documentDelete,s=ih(t,e.document),r=e.readTime?Yo(e.readTime):Ds.min(),o=cr.newNoDocument(s,r);i=new xo([],e.removedTargetIds||[],o.key,o)}else if("documentRemove"in n){const e=n.documentRemove,s=ih(t,e.document);i=new xo([],e.removedTargetIds||[],s,null)}else{if(!("filter"in n))return as();{const t=n.filter,e=new yo(t.count||0);i=new Vo(t.targetId,e)}}return i}(this.k,t),i=function(t){if(!("targetChange"in t))return Ds.min();const n=t.targetChange;return n.targetIds&&n.targetIds.length?Ds.min():n.readTime?Yo(n.readTime):Ds.min()}(t);return this.listener.br(n,i)}Pr(t){const n={};n.database=sh(this.k),n.addTarget=function(t,n){let i;const e=n.target;return i=wr(e)?{documents:hh(t,e)}:{query:uh(t,e)},i.targetId=n.targetId,n.resumeToken.approximateByteSize()>0?i.resumeToken=Xo(t,n.resumeToken):n.snapshotVersion.compareTo(Ds.min())>0&&(i.readTime=Wo(t,n.snapshotVersion.toTimestamp())),i}(this.k,t);const i=function(t,n){const i=function(t,n){switch(n){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return as()}}(0,n.purpose);return null==i?null:{"goog-listen-tags":i}}(0,t);i&&(n.labels=i),this.gr(n)}vr(t){const n={};n.database=sh(this.k),n.removeTarget=t,this.gr(n)}}class au extends uu{constructor(t,n,i,e,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,e,r),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,n){return this.ir.Qi("Write",t,n)}onMessage(t){if(ls(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const n=function(t,n){return t&&t.length>0?(ls(void 0!==n),t.map((t=>function(t,n){let i=Yo(t.updateTime?t.updateTime:n);return i.isEqual(Ds.min())&&(i=Yo(n)),new io(i,t.transformResults||[])}(t,n)))):[]}(t.writeResults,t.commitTime),i=Yo(t.commitTime);return this.listener.Cr(i,n)}return ls(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=sh(this.k),this.gr(t)}Dr(t){const n={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,n){let i;if(n instanceof lo)i={update:oh(t,n.key,n.value)};else if(n instanceof vo)i={delete:nh(t,n.key)};else if(n instanceof fo)i={update:oh(t,n.key,n.data),updateMask:yh(n.fieldMask)};else{if(!(n instanceof go))return as();i={verify:nh(t,n.key)}}return n.fieldTransforms.length>0&&(i.updateTransforms=n.fieldTransforms.map((t=>function(t,n){const i=n.transform;if(i instanceof Kr)return{fieldPath:n.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof Wr)return{fieldPath:n.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof Jr)return{fieldPath:n.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof Zr)return{fieldPath:n.field.canonicalString(),increment:i.N};throw as()}(0,t)))),n.precondition.isNone||(i.currentDocument=function(t,n){return void 0!==n.updateTime?{updateTime:Jo(t,n.updateTime)}:void 0!==n.exists?{exists:n.exists}:as()}(t,n.precondition)),i}(this.k,t)))};this.gr(n)}}
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
 */class lu extends class{}{constructor(t,n,i,e){super(),this.authCredentials=t,this.appCheckCredentials=n,this.ir=i,this.k=e,this.$r=!1}Or(){if(this.$r)throw new ds(fs.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,n,i){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([e,s])=>this.ir.Bi(t,n,i,e,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===fs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ds(fs.UNKNOWN,t.toString())}))}ji(t,n,i){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([e,s])=>this.ir.ji(t,n,i,e,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===fs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ds(fs.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class fu{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const n=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(hs(n),this.Lr=!1):os("OnlineStateTracker",n)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
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
 */class du{constructor(t,n,i,e,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei((()=>{i.enqueueAndForget((async()=>{Tu(this)&&(os("RemoteStore","Restarting streams for network reachability change."),await async function(t){const n=t;n.Gr.add(4),await pu(n),n.Jr.set("Unknown"),n.Gr.delete(4),await wu(n)}(this))}))})),this.Jr=new fu(i,e)}}async function wu(t){if(Tu(t))for(const n of t.zr)await n(!0)}async function pu(t){for(const n of t.zr)await n(!1)}function mu(t,n){const i=t;i.Wr.has(n.targetId)||(i.Wr.set(n.targetId,n),Eu(i)?bu(i):Fu(i).lr()&&gu(i,n))}function vu(t,n){const i=t,e=Fu(i);i.Wr.delete(n),e.lr()&&yu(i,n),0===i.Wr.size&&(e.lr()?e._r():Tu(i)&&i.Jr.set("Unknown"))}function gu(t,n){t.Yr.X(n.targetId),Fu(t).Pr(n)}function yu(t,n){t.Yr.X(n),Fu(t).vr(n)}function bu(t){t.Yr=new qo({getRemoteKeysForTarget:n=>t.remoteSyncer.getRemoteKeysForTarget(n),Et:n=>t.Wr.get(n)||null}),Fu(t).start(),t.Jr.Br()}function Eu(t){return Tu(t)&&!Fu(t).hr()&&t.Wr.size>0}function Tu(t){return 0===t.Gr.size}function Au(t){t.Yr=void 0}async function Su(t){t.Wr.forEach((n=>{gu(t,n)}))}async function Nu(t,n){Au(t),Eu(t)?(t.Jr.Kr(n),bu(t)):t.Jr.set("Unknown")}async function Cu(t,n,i){if(t.Jr.set("Online"),n instanceof jo&&2===n.state&&n.cause)try{await async function(t,n){const i=n.cause;for(const e of n.targetIds)t.Wr.has(e)&&(await t.remoteSyncer.rejectListen(e,i),t.Wr.delete(e),t.Yr.removeTarget(e))}(t,n)}catch(i){os("RemoteStore","Failed to remove targets %s: %s ",n.targetIds.join(","),i),await Iu(t,i)}else if(n instanceof xo?t.Yr.ot(n):n instanceof Vo?t.Yr.dt(n):t.Yr.ut(n),!i.isEqual(Ds.min()))try{const n=await Fh(t.localStore);i.compareTo(n)>=0&&await function(t,n){const i=t.Yr.gt(n);return i.targetChanges.forEach(((i,e)=>{if(i.resumeToken.approximateByteSize()>0){const s=t.Wr.get(e);s&&t.Wr.set(e,s.withResumeToken(i.resumeToken,n))}})),i.targetMismatches.forEach((n=>{const i=t.Wr.get(n);if(!i)return;t.Wr.set(n,i.withResumeToken(Us.EMPTY_BYTE_STRING,i.snapshotVersion)),yu(t,n);const e=new Nh(i.target,n,1,i.sequenceNumber);gu(t,e)})),t.remoteSyncer.applyRemoteEvent(i)}(t,i)}catch(n){os("RemoteStore","Failed to raise snapshot:",n),await Iu(t,n)}}async function Iu(t,n,i){if(!Th(n))throw n;t.Gr.add(1),await pu(t),t.Jr.set("Offline"),i||(i=()=>Fh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{os("RemoteStore","Retrying IndexedDB access"),await i(),t.Gr.delete(1),await wu(t)}))}function Du(t,n){return n().catch((i=>Iu(t,i,n)))}async function Ru(t){const n=t,i=xu(n);let e=n.Qr.length>0?n.Qr[n.Qr.length-1].batchId:-1;for(;ku(n);)try{const t=await xh(n.localStore,e);if(null===t){0===n.Qr.length&&i._r();break}e=t.batchId,_u(n,t)}catch(t){await Iu(n,t)}Ou(n)&&Mu(n)}function ku(t){return Tu(t)&&t.Qr.length<10}function _u(t,n){t.Qr.push(n);const i=xu(t);i.lr()&&i.Sr&&i.Dr(n.mutations)}function Ou(t){return Tu(t)&&!xu(t).hr()&&t.Qr.length>0}function Mu(t){xu(t).start()}async function $u(t){xu(t).kr()}async function Lu(t){const n=xu(t);for(const i of t.Qr)n.Dr(i.mutations)}async function Pu(t,n,i){const e=t.Qr.shift(),s=Sh.from(e,n,i);await Du(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ru(t)}async function Uu(t,n){n&&xu(t).Sr&&await async function(t,n){if(function(t){switch(t){default:return as();case fs.CANCELLED:case fs.UNKNOWN:case fs.DEADLINE_EXCEEDED:case fs.RESOURCE_EXHAUSTED:case fs.INTERNAL:case fs.UNAVAILABLE:case fs.UNAUTHENTICATED:return!1;case fs.INVALID_ARGUMENT:case fs.NOT_FOUND:case fs.ALREADY_EXISTS:case fs.PERMISSION_DENIED:case fs.FAILED_PRECONDITION:case fs.ABORTED:case fs.OUT_OF_RANGE:case fs.UNIMPLEMENTED:case fs.DATA_LOSS:return!0}}(i=n.code)&&i!==fs.ABORTED){const i=t.Qr.shift();xu(t).wr(),await Du(t,(()=>t.remoteSyncer.rejectFailedWrite(i.batchId,n))),await Ru(t)}var i}(t,n),Ou(t)&&Mu(t)}function Fu(t){return t.Xr||(t.Xr=function(t,n,i){const e=t;return e.Or(),new cu(n,e.ir,e.authCredentials,e.appCheckCredentials,e.k,i)
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
 */}(t.datastore,t.asyncQueue,{Di:Su.bind(null,t),Ni:Nu.bind(null,t),br:Cu.bind(null,t)}),t.zr.push((async n=>{n?(t.Xr.wr(),Eu(t)?bu(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Au(t))}))),t.Xr}function xu(t){return t.Zr||(t.Zr=function(t,n,i){const e=t;return e.Or(),new au(n,e.ir,e.authCredentials,e.appCheckCredentials,e.k,i)}(t.datastore,t.asyncQueue,{Di:$u.bind(null,t),Ni:Uu.bind(null,t),Nr:Lu.bind(null,t),Cr:Pu.bind(null,t)}),t.zr.push((async n=>{n?(t.Zr.wr(),await Ru(t)):(await t.Zr.stop(),t.Qr.length>0&&(os("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))}))),t.Zr
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
 */}class Vu{constructor(t,n,i,e,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=e,this.removalCallback=s,this.deferred=new ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((()=>{}))}static createAndSchedule(t,n,i,e,s){const r=Date.now()+i,o=new Vu(t,n,r,e,s);return o.start(i),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ds(fs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ju(t,n){if(hs("AsyncQueue",`${n}: ${t}`),Th(t))return new ds(fs.UNAVAILABLE,`${n}: ${t}`);throw t}
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
 */class Bu{constructor(t){this.comparator=t?(n,i)=>t(n,i)||Gs.comparator(n.key,i.key):(t,n)=>Gs.comparator(t.key,n.key),this.keyedMap=_o(),this.sortedSet=new Ao(this.comparator)}static emptySet(t){return new Bu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Bu))return!1;if(this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const t=n.getNext().key,e=i.getNext().key;if(!t.isEqual(e))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,n){const i=new Bu;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}
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
 */class qu{constructor(){this.eo=new Ao(Gs.comparator)}track(t){const n=t.doc.key,i=this.eo.get(n);i?0!==t.type&&3===i.type?this.eo=this.eo.insert(n,t):3===t.type&&1!==i.type?this.eo=this.eo.insert(n,{type:i.type,doc:t.doc}):2===t.type&&2===i.type?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):2===t.type&&0===i.type?this.eo=this.eo.insert(n,{type:0,doc:t.doc}):1===t.type&&0===i.type?this.eo=this.eo.remove(n):1===t.type&&2===i.type?this.eo=this.eo.insert(n,{type:1,doc:i.doc}):0===t.type&&1===i.type?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):as():this.eo=this.eo.insert(n,t)}no(){const t=[];return this.eo.inorderTraversal(((n,i)=>{t.push(i)})),t}}class Hu{constructor(t,n,i,e,s,r,o,h){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=e,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=h}static fromInitialDocuments(t,n,i,e){const s=[];return n.forEach((t=>{s.push({type:0,doc:t})})),new Hu(t,n,Bu.emptySet(n),s,i,e,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let t=0;t<n.length;t++)if(n[t].type!==i[t].type||!n[t].doc.isEqual(i[t].doc))return!1;return!0}}
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
 */class Qu{constructor(){this.so=void 0,this.listeners=[]}}class zu{constructor(){this.queries=new Oh((t=>Ur(t)),Pr),this.onlineState="Unknown",this.io=new Set}}function Gu(t,n){const i=t;let e=!1;for(const t of n){const n=i.queries.get(t.query);if(n){for(const i of n.listeners)i.oo(t)&&(e=!0);n.so=t}}e&&Wu(i)}function Ku(t,n,i){const e=t,s=e.queries.get(n);if(s)for(const t of s.listeners)t.onError(i);e.queries.delete(n)}function Wu(t){t.io.forEach((t=>{t.next()}))}class Xu{constructor(t,n,i){this.query=t,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=i||{}}oo(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)3!==i.type&&n.push(i);t=new Hu(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(t)&&(this.co.next(t),n=!0):this.lo(t,this.onlineState)&&(this.fo(t),n=!0),this.uo=t,n}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),n=!0),n}lo(t,n){return!t.fromCache||!(this.options.wo&&"Offline"!==n||t.docs.isEmpty()&&"Offline"!==n)}ho(t){return t.docChanges.length>0||!!(t.syncStateChanged||this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites)&&!0===this.options.includeMetadataChanges}fo(t){t=Hu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}
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
 */class Ju{constructor(t){this.key=t}}class Yu{constructor(t){this.key=t}}class Zu{constructor(t,n){this.query=t,this.To=n,this.Eo=null,this.current=!1,this.Io=$o(),this.mutatedKeys=$o(),this.Ao=Vr(t),this.Ro=new Bu(this.Ao)}get bo(){return this.To}Po(t,n){const i=n?n.vo:new qu,e=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,r=e,o=!1;const h=Or(this.query)&&e.size===this.query.limit?e.last():null,u=Mr(this.query)&&e.size===this.query.limit?e.first():null;if(t.inorderTraversal(((t,n)=>{const c=e.get(t),a=xr(this.query,n)?n:null,l=!!c&&this.mutatedKeys.has(c.key),f=!!a&&(a.hasLocalMutations||this.mutatedKeys.has(a.key)&&a.hasCommittedMutations);let d=!1;c&&a?c.data.isEqual(a.data)?l!==f&&(i.track({type:3,doc:a}),d=!0):this.Vo(c,a)||(i.track({type:2,doc:a}),d=!0,(h&&this.Ao(a,h)>0||u&&this.Ao(a,u)<0)&&(o=!0)):!c&&a?(i.track({type:0,doc:a}),d=!0):c&&!a&&(i.track({type:1,doc:c}),d=!0,(h||u)&&(o=!0)),d&&(a?(r=r.add(a),s=f?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),Or(this.query)||Mr(this.query))for(;r.size>this.query.limit;){const t=Or(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),i.track({type:1,doc:t})}return{Ro:r,vo:i,Bn:o,mutatedKeys:s}}Vo(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i){const e=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const s=t.vo.no();s.sort(((t,n)=>function(t,n){const i=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return as()}};return i(t)-i(n)}
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
 */(t.type,n.type)||this.Ao(t.doc,n.doc))),this.So(i);const r=n?this.Do():[],o=0===this.Io.size&&this.current?1:0,h=o!==this.Eo;return this.Eo=o,0!==s.length||h?{snapshot:new Hu(this.query,t.Ro,e,s,t.mutatedKeys,0===o,h,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new qu,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((()=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=$o(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const n=[];return t.forEach((t=>{this.Io.has(t)||n.push(new Yu(t))})),this.Io.forEach((i=>{t.has(i)||n.push(new Ju(i))})),n}ko(t){this.To=t.zn,this.Io=$o();const n=this.Po(t.documents);return this.applyChanges(n,!0)}xo(){return Hu.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class tc{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class nc{constructor(t){this.key=t,this.$o=!1}}class ic{constructor(t,n,i,e,s,r){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=e,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Oo={},this.Mo=new Oh((t=>Ur(t)),Pr),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ao(Gs.comparator),this.Uo=new Map,this.qo=new qh,this.Ko={},this.jo=new Map,this.Qo=kh.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function ec(t,n){const i=function(t){const n=t;return n.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,n),n.remoteStore.remoteSyncer.getRemoteKeysForTarget=bc.bind(null,n),n.remoteStore.remoteSyncer.rejectListen=uc.bind(null,n),n.Oo.br=Gu.bind(null,n.eventManager),n.Oo.zo=Ku.bind(null,n.eventManager),n}(t);let e,s;const r=i.Mo.get(n);if(r)e=r.targetId,i.sharedClientState.addLocalQueryTarget(e),s=r.view.xo();else{const t=await function(t,n){const i=t;return i.persistence.runTransaction("Allocate target","readwrite",(t=>{let e;return i.He.getTargetData(t,n).next((s=>s?(e=s,Eh.resolve(e)):i.He.allocateTargetId(t).next((s=>(e=new Nh(n,s,0,t.currentSequenceNumber),i.He.addTargetData(t,e).next((()=>e)))))))})).then((t=>{const e=i.qn.get(t.targetId);return(null===e||t.snapshotVersion.compareTo(e.snapshotVersion)>0)&&(i.qn=i.qn.insert(t.targetId,t),i.Kn.set(n,t.targetId)),t}))}(i.localStore,Lr(n)),r=i.sharedClientState.addLocalQueryTarget(t.targetId);e=t.targetId,s=await async function(t,n,i,e){t.Go=(n,i,e)=>async function(t,n,i,e){let s=n.view.Po(i);s.Bn&&(s=await jh(t.localStore,n.query,!1).then((({documents:t})=>n.view.Po(t,s))));const r=e&&e.targetChanges.get(n.targetId),o=n.view.applyChanges(s,t.isPrimaryClient,r);return pc(t,n.targetId,o.Co),o.snapshot}(t,n,i,e);const s=await jh(t.localStore,n,!0),r=new Zu(n,s.zn),o=r.Po(s.documents),h=Fo.createSynthesizedTargetChangeForCurrentChange(i,e&&"Offline"!==t.onlineState),u=r.applyChanges(o,t.isPrimaryClient,h);pc(t,i,u.Co);const c=new tc(n,i,r);return t.Mo.set(n,c),t.Fo.has(i)?t.Fo.get(i).push(n):t.Fo.set(i,[n]),u.snapshot}(i,n,e,"current"===r),i.isPrimaryClient&&mu(i.remoteStore,t)}return s}async function sc(t,n){const i=t,e=i.Mo.get(n),s=i.Fo.get(e.targetId);if(s.length>1)return i.Fo.set(e.targetId,s.filter((t=>!Pr(t,n)))),void i.Mo.delete(n);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(e.targetId),i.sharedClientState.isActiveQueryTarget(e.targetId)||await Vh(i.localStore,e.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(e.targetId),vu(i.remoteStore,e.targetId),dc(i,e.targetId)})).catch(_h)):(dc(i,e.targetId),await Vh(i.localStore,e.targetId,!0))}async function rc(t,n,i){const e=function(t){const n=t;return n.remoteStore.remoteSyncer.applySuccessfulWrite=cc.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=ac.bind(null,n),n}(t);try{const t=await function(t,n){const i=t,e=Is.now(),s=n.reduce(((t,n)=>t.add(n.key)),$o());let r;return i.persistence.runTransaction("Locally write mutations","readwrite",(t=>i.Wn.vn(t,s).next((s=>{r=s;const o=[];for(const t of n){const n=uo(t,r.get(t.key));null!=n&&o.push(new fo(t.key,n,ur(n.value.mapValue),eo.exists(!0)))}return i.An.addMutationBatch(t,e,o,n)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(e.localStore,n);e.sharedClientState.addPendingMutation(t.batchId),function(t,n,i){let e=t.Ko[t.currentUser.toKey()];e||(e=new Ao(Ns)),e=e.insert(n,i),t.Ko[t.currentUser.toKey()]=e}(e,t.batchId,i),await gc(e,t.changes),await Ru(e.remoteStore)}catch(t){const n=ju(t,"Failed to persist write");i.reject(n)}}async function oc(t,n){const i=t;try{const t=await function(t,n){const i=t,e=n.snapshotVersion;let s=i.qn;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=i.Qn.newChangeBuffer({trackRemovals:!0});s=i.qn;const o=[];n.targetChanges.forEach(((r,h)=>{const u=s.get(h);if(!u)return;o.push(i.He.removeMatchingKeys(t,r.removedDocuments,h).next((()=>i.He.addMatchingKeys(t,r.addedDocuments,h))));let c=u.withSequenceNumber(t.currentSequenceNumber);n.targetMismatches.has(h)?c=c.withResumeToken(Us.EMPTY_BYTE_STRING,Ds.min()).withLastLimboFreeSnapshotVersion(Ds.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,e)),s=s.insert(h,c),function(t,n,i){return 0===t.resumeToken.approximateByteSize()||n.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0}(u,c,r)&&o.push(i.He.updateTargetData(t,c))}));let h=Ro();if(n.documentUpdates.forEach((e=>{n.resolvedLimboDocuments.has(e)&&o.push(i.persistence.referenceDelegate.updateLimboDocument(t,e))})),o.push(function(t,n,i,e){let s=$o();return i.forEach((t=>s=s.add(t))),n.getEntries(t,s).next((t=>{let s=Ro();return i.forEach(((i,r)=>{const o=t.get(i),h=e;r.isNoDocument()&&r.version.isEqual(Ds.min())?(n.removeEntry(i,h),s=s.insert(i,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(n.addEntry(r,h),s=s.insert(i,r)):os("LocalStore","Ignoring outdated watch update for ",i,". Current version:",o.version," Watch version:",r.version)})),s}))}(t,r,n.documentUpdates,e).next((t=>{h=t}))),!e.isEqual(Ds.min())){const n=i.He.getLastRemoteSnapshotVersion(t).next((()=>i.He.setTargetsMetadata(t,t.currentSequenceNumber,e)));o.push(n)}return Eh.waitFor(o).next((()=>r.apply(t))).next((()=>i.Wn.Vn(t,h))).next((()=>h))})).then((t=>(i.qn=s,t)))}(i.localStore,n);n.targetChanges.forEach(((t,n)=>{const e=i.Uo.get(n);e&&(ls(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?e.$o=!0:t.modifiedDocuments.size>0?ls(e.$o):t.removedDocuments.size>0&&(ls(e.$o),e.$o=!1))})),await gc(i,t,n)}catch(t){await _h(t)}}function hc(t,n,i){const e=t;if(e.isPrimaryClient&&0===i||!e.isPrimaryClient&&1===i){const t=[];e.Mo.forEach(((i,e)=>{const s=e.view.ro(n);s.snapshot&&t.push(s.snapshot)})),function(t,n){const i=t;i.onlineState=n;let e=!1;i.queries.forEach(((t,i)=>{for(const t of i.listeners)t.ro(n)&&(e=!0)})),e&&Wu(i)}(e.eventManager,n),t.length&&e.Oo.br(t),e.onlineState=n,e.isPrimaryClient&&e.sharedClientState.setOnlineState(n)}}async function uc(t,n,i){const e=t;e.sharedClientState.updateQueryState(n,"rejected",i);const s=e.Uo.get(n),r=s&&s.key;if(r){let t=new Ao(Gs.comparator);t=t.insert(r,cr.newNoDocument(r,Ds.min()));const i=$o().add(r),s=new Uo(Ds.min(),new Map,new Co(Ns),t,i);await oc(e,s),e.Bo=e.Bo.remove(r),e.Uo.delete(n),vc(e)}else await Vh(e.localStore,n,!1).then((()=>dc(e,n,i))).catch(_h)}async function cc(t,n){const i=t,e=n.batch.batchId;try{const t=await function(t,n){const i=t;return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const e=n.batch.keys(),s=i.Qn.newChangeBuffer({trackRemovals:!0});return function(t,n,i,e){const s=i.batch,r=s.keys();let o=Eh.resolve();return r.forEach((t=>{o=o.next((()=>e.getEntry(n,t))).next((n=>{const r=i.docVersions.get(t);ls(null!==r),n.version.compareTo(r)<0&&(s.applyToRemoteDocument(n,i),n.isValidDocument()&&e.addEntry(n,i.commitVersion))}))})),o.next((()=>t.An.removeMutationBatch(n,s)))}(i,t,n,s).next((()=>s.apply(t))).next((()=>i.An.performConsistencyCheck(t))).next((()=>i.Wn.vn(t,e)))}))}(i.localStore,n);fc(i,e,null),lc(i,e),i.sharedClientState.updateMutationState(e,"acknowledged"),await gc(i,t)}catch(t){await _h(t)}}async function ac(t,n,i){const e=t;try{const t=await function(t,n){const i=t;return i.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let e;return i.An.lookupMutationBatch(t,n).next((n=>(ls(null!==n),e=n.keys(),i.An.removeMutationBatch(t,n)))).next((()=>i.An.performConsistencyCheck(t))).next((()=>i.Wn.vn(t,e)))}))}(e.localStore,n);fc(e,n,i),lc(e,n),e.sharedClientState.updateMutationState(n,"rejected",i),await gc(e,t)}catch(i){await _h(i)}}function lc(t,n){(t.jo.get(n)||[]).forEach((t=>{t.resolve()})),t.jo.delete(n)}function fc(t,n,i){const e=t;let s=e.Ko[e.currentUser.toKey()];if(s){const t=s.get(n);t&&(i?t.reject(i):t.resolve(),s=s.remove(n)),e.Ko[e.currentUser.toKey()]=s}}function dc(t,n,i=null){t.sharedClientState.removeLocalQueryTarget(n);for(const e of t.Fo.get(n))t.Mo.delete(e),i&&t.Oo.zo(e,i);t.Fo.delete(n),t.isPrimaryClient&&t.qo.us(n).forEach((n=>{t.qo.containsKey(n)||wc(t,n)}))}function wc(t,n){t.Lo.delete(n.path.canonicalString());const i=t.Bo.get(n);null!==i&&(vu(t.remoteStore,i),t.Bo=t.Bo.remove(n),t.Uo.delete(i),vc(t))}function pc(t,n,i){for(const e of i)e instanceof Ju?(t.qo.addReference(e.key,n),mc(t,e)):e instanceof Yu?(os("SyncEngine","Document no longer in limbo: "+e.key),t.qo.removeReference(e.key,n),t.qo.containsKey(e.key)||wc(t,e.key)):as()}function mc(t,n){const i=n.key,e=i.path.canonicalString();t.Bo.get(i)||t.Lo.has(e)||(os("SyncEngine","New document in limbo: "+i),t.Lo.add(e),vc(t))}function vc(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const n=t.Lo.values().next().value;t.Lo.delete(n);const i=new Gs(Ms.fromString(n)),e=t.Qo.next();t.Uo.set(e,new nc(i)),t.Bo=t.Bo.insert(i,e),mu(t.remoteStore,new Nh(Lr(_r(i.path)),e,2,Ts.I))}}async function gc(t,n,i){const e=t,s=[],r=[],o=[];e.Mo.isEmpty()||(e.Mo.forEach(((t,h)=>{o.push(e.Go(h,n,i).then((t=>{if(t){e.isPrimaryClient&&e.sharedClientState.updateQueryState(h.targetId,t.fromCache?"not-current":"current"),s.push(t);const n=$h.$n(h.targetId,t);r.push(n)}})))})),await Promise.all(o),e.Oo.br(s),await async function(t,n){const i=t;try{await i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Eh.forEach(n,(n=>Eh.forEach(n.kn,(e=>i.persistence.referenceDelegate.addReference(t,n.targetId,e))).next((()=>Eh.forEach(n.xn,(e=>i.persistence.referenceDelegate.removeReference(t,n.targetId,e)))))))))}catch(t){if(!Th(t))throw t;os("LocalStore","Failed to update sequence numbers: "+t)}for(const t of n){const n=t.targetId;if(!t.fromCache){const t=i.qn.get(n),e=t.withLastLimboFreeSnapshotVersion(t.snapshotVersion);i.qn=i.qn.insert(n,e)}}}(e.localStore,r))}async function yc(t,n){const i=t;if(!i.currentUser.isEqual(n)){os("SyncEngine","User change. New user:",n.toKey());const t=await Uh(i.localStore,n);i.currentUser=n,function(t){t.jo.forEach((t=>{t.forEach((t=>{t.reject(new ds(fs.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.jo.clear()}(i),i.sharedClientState.handleUserChange(n,t.removedBatchIds,t.addedBatchIds),await gc(i,t.Gn)}}function bc(t,n){const i=t,e=i.Uo.get(n);if(e&&e.$o)return $o().add(e.key);{let t=$o();const e=i.Fo.get(n);if(!e)return t;for(const n of e){const e=i.Mo.get(n);t=t.unionWith(e.view.bo)}return t}}class Ec{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=ou(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return function(t,n,i,e){return new Ph(t,n,i,e)}(this.persistence,new Lh,t.initialUser,this.k)}Yo(t){return new Wh(Jh.ks,this.k)}Jo(t){return new Zh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tc{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>hc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=yc.bind(null,this.syncEngine),await async function(t,n){const i=t;n?(i.Gr.delete(2),await wu(i)):n||(i.Gr.add(2),await pu(i),i.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new zu}createDatastore(t){const n=ou(t.databaseInfo.databaseId),i=new su(t.databaseInfo);return function(t,n,i,e){return new lu(t,n,i,e)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return n=this.localStore,i=this.datastore,e=t.asyncQueue,s=t=>hc(this.syncEngine,t,0),r=nu.Pt()?new nu:new tu,new du(n,i,e,s,r);var n,i,e,s,r}createSyncEngine(t,n){return function(t,n,i,e,s,r,o){const h=new ic(t,n,i,e,s,r);return o&&(h.Wo=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=t;os("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await pu(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}
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
 */class Ac{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,n){this.muted||setTimeout((()=>{this.muted||t(n)}),0)}}
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
 */class Sc{constructor(t,n,i,e){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=e,this.user=is.UNAUTHENTICATED,this.clientId=Ss.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async t=>{os("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(i,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ds(fs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=ju(n,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function Nc(t){return t.onlineComponents||(os("FirestoreClient","Using default OnlineComponentProvider"),await async function(t,n){t.asyncQueue.verifyOperationInProgress();const i=await async function(t){return t.offlineComponents||(os("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,n){t.asyncQueue.verifyOperationInProgress(),os("FirestoreClient","Initializing OfflineComponentProvider");const i=await t.getConfiguration();await n.initialize(i);let e=i.initialUser;t.setCredentialChangeListener((async t=>{e.isEqual(t)||(await Uh(n.localStore,t),e=t)})),n.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=n}(t,new Ec)),t.offlineComponents}(t);os("FirestoreClient","Initializing OnlineComponentProvider");const e=await t.getConfiguration();await n.initialize(i,e),t.setCredentialChangeListener((t=>async function(t,n){const i=t;i.asyncQueue.verifyOperationInProgress(),os("RemoteStore","RemoteStore received new credentials");const e=Tu(i);i.Gr.add(3),await pu(i),e&&i.Jr.set("Unknown"),await i.remoteSyncer.handleCredentialChange(n),i.Gr.delete(3),await wu(i)}(n.remoteStore,t))),t.onlineComponents=n}(t,new Tc)),t.onlineComponents}async function Cc(t){const n=await Nc(t),i=n.eventManager;return i.onListen=ec.bind(null,n.syncEngine),i.onUnlisten=sc.bind(null,n.syncEngine),i}class Ic{constructor(t,n,i,e,s,r,o,h){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=e,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=h}}class Dc{constructor(t,n){this.projectId=t,this.database=n||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Dc&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Rc=new Map;
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
 */function kc(t,n,i){if(!i)throw new ds(fs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${n}.`)}function _c(t){if(!Gs.isDocumentKey(t))throw new ds(fs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Oc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=function(t){return t.constructor?t.constructor.name:null}(t);return n?`a custom ${n} object`:"an object"}}return"function"==typeof t?"a function":as()}function Mc(t,n){if("_delegate"in t&&(t=t._delegate),!(t instanceof n)){if(n.name===t.constructor.name)throw new ds(fs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Oc(t);throw new ds(fs.INVALID_ARGUMENT,`Expected type '${n.name}', but it was: ${i}`)}}return t}
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
 */class $c{constructor(t){var n;if(void 0===t.host){if(void 0!==t.ssl)throw new ds(fs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(n=t.ssl)||void 0===n||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ds(fs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,n,i,e){if(!0===n&&!0===e)throw new ds(fs.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class Lc{constructor(t,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $c({}),this._settingsFrozen=!1,t instanceof Dc?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ds(fs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dc(t.options.projectId)}(t))}get app(){if(!this._app)throw new ds(fs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ds(fs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $c(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ms;switch(t.type){case"gapi":const n=t.client;return ls(!("object"!=typeof n||null===n||!n.auth||!n.auth.getAuthHeaderValueForFirstParty)),new ys(n,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ds(fs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Rc.get(t);n&&(os("ComponentProvider","Removing Datastore"),Rc.delete(t),n.terminate())}(this),Promise.resolve()}}
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
 */class Pc{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pc(this.firestore,t,this._key)}}class Uc{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Uc(this.firestore,t,this._query)}}class Fc extends Uc{constructor(t,n,i){super(t,n,_r(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pc(this.firestore,null,new Gs(t))}withConverter(t){return new Fc(this.firestore,t,this._path)}}function xc(t,n,...i){if(t=N(t),1===arguments.length&&(n=Ss.A()),kc("doc","path",n),t instanceof Lc){const e=Ms.fromString(n,...i);return _c(e),new Pc(t,null,new Gs(e))}{if(!(t instanceof Pc||t instanceof Fc))throw new ds(fs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const e=t._path.child(Ms.fromString(n,...i));return _c(e),new Pc(t.firestore,t instanceof Fc?t.converter:null,new Gs(e))}}
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
 */class Vc{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new hu(this,"async_queue_retry"),this.bc=()=>{const t=ru();t&&os("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=ru();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const n=ru();n&&"function"==typeof n.removeEventListener&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise((()=>{}));const n=new ws;return this.vc((()=>this.yc&&this.Ac?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.gc.push(t),this.Vc())))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Th(t))throw t;os("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi((()=>this.Vc()))}}vc(t){const n=this.mc.then((()=>(this.Ic=!0,t().catch((t=>{throw this.Ec=t,this.Ic=!1,hs("INTERNAL UNHANDLED ERROR: ",function(t){let n=t.message||"";return t.stack&&(n=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),n}
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
 */(t)),t})).then((t=>(this.Ic=!1,t))))));return this.mc=n,n}enqueueAfterDelay(t,n,i){this.Pc(),this.Rc.indexOf(t)>-1&&(n=0);const e=Vu.createAndSchedule(this,t,n,i,(t=>this.Sc(t)));return this.Tc.push(e),e}Pc(){this.Ec&&as()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const n of this.Tc)if(n.timerId===t)return!0;return!1}Nc(t){return this.Dc().then((()=>{this.Tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const n of this.Tc)if(n.skipDelay(),"all"!==t&&n.timerId===t)break;return this.Dc()}))}kc(t){this.Rc.push(t)}Sc(t){const n=this.Tc.indexOf(t);this.Tc.splice(n,1)}}class jc extends Lc{constructor(t,n,i){super(t,n,i),this.type="firestore",this._queue=new Vc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Hc(this),this._firestoreClient.terminate()}}function Bc(t=K()){return q(t,"firestore").getImmediate()}function qc(t){return t._firestoreClient||Hc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Hc(t){var n;const i=t._freezeSettings(),e=function(t,n,i,e){return new Ic(t,n,i,e.host,e.ssl,e.experimentalForceLongPolling,e.experimentalAutoDetectLongPolling,e.useFetchStreams)}(t._databaseId,(null===(n=t._app)||void 0===n?void 0:n.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Sc(t._authCredentials,t._appCheckCredentials,t._queue,e)}
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
 */class Qc{constructor(...t){for(let n=0;n<t.length;++n)if(0===t[n].length)throw new ds(fs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ls(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
 */class zc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zc(Us.fromBase64String(t))}catch(t){throw new ds(fs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new zc(Us.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Gc{constructor(t){this._methodName=t}}
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
 */class Kc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ds(fs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ds(fs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ns(this._lat,t._lat)||Ns(this._long,t._long)}}
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
 */const Wc=/^__.*__$/;class Xc{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return null!==this.fieldMask?new fo(t,this.data,this.fieldMask,n,this.fieldTransforms):new lo(t,this.data,n,this.fieldTransforms)}}function Jc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw as()}}class Yc{constructor(t,n,i,e,s,r){this.settings=t,this.databaseId=n,this.k=i,this.ignoreUndefinedProperties=e,void 0===s&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new Yc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var n;const i=null===(n=this.path)||void 0===n?void 0:n.child(t),e=this.Oc({path:i,Fc:!1});return e.Lc(t),e}Bc(t){var n;const i=null===(n=this.path)||void 0===n?void 0:n.child(t),e=this.Oc({path:i,Fc:!1});return e.xc(),e}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return ca(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return void 0!==this.fieldMask.find((n=>t.isPrefixOf(n)))||void 0!==this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(0===t.length)throw this.qc("Document fields must not be empty");if(Jc(this.$c)&&Wc.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class Zc{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.k=i||ou(t)}Qc(t,n,i,e=!1){return new Yc({$c:t,methodName:n,jc:i,path:Ls.emptyPath(),Fc:!1,Kc:e},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function ta(t){const n=t._freezeSettings(),i=ou(t._databaseId);return new Zc(t._databaseId,!!n.ignoreUndefinedProperties,i)}function na(t,n,i,e,s,r={}){const o=t.Qc(r.merge||r.mergeFields?2:0,n,i,s);ra("Data must be an object, but it was:",o,e);const h=ea(e,o);let u,c;if(r.merge)u=new Ps(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const e of r.mergeFields){const s=oa(n,e,i);if(!o.contains(s))throw new ds(fs.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);aa(t,s)||t.push(s)}u=new Ps(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new Xc(new hr(h),u,c)}function ia(t,n){if(sa(t=N(t)))return ra("Unsupported field value:",n,t),ea(t,n);if(t instanceof Gc)return function(t,n){if(!Jc(n.$c))throw n.qc(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n.qc(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(n);i&&n.fieldTransforms.push(i)}(t,n),null;if(void 0===t&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),t instanceof Array){if(n.settings.Fc&&4!==n.$c)throw n.qc("Nested arrays are not supported");return function(t,n){const i=[];let e=0;for(const s of t){let t=ia(s,n.Uc(e));null==t&&(t={nullValue:"NULL_VALUE"}),i.push(t),e++}return{arrayValue:{values:i}}}(t,n)}return function(t,n){if(null===(t=N(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return function(t,n){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!zs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(n)?qr(n):Br(t,n)}(n.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const i=Is.fromDate(t);return{timestampValue:Wo(n.k,i)}}if(t instanceof Is){const i=new Is(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Wo(n.k,i)}}if(t instanceof Kc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof zc)return{bytesValue:Xo(n.k,t._byteString)};if(t instanceof Pc){const i=n.databaseId,e=t.firestore._databaseId;if(!e.isEqual(i))throw n.qc(`Document reference is for database ${e.projectId}/${e.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zo(t.firestore._databaseId||n.databaseId,t._key.path)}}throw n.qc(`Unsupported field value: ${Oc(t)}`)}(t,n)}function ea(t,n){const i={};return _s(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):ks(t,((t,e)=>{const s=ia(e,n.Mc(t));null!=s&&(i[t]=s)})),{mapValue:{fields:i}}}function sa(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Is||t instanceof Kc||t instanceof zc||t instanceof Pc||t instanceof Gc)}function ra(t,n,i){if(!sa(i)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(i)){const e=Oc(i);throw n.qc("an object"===e?t+" a custom object":t+" "+e)}}function oa(t,n,i){if((n=N(n))instanceof Qc)return n._internalPath;if("string"==typeof n)return ua(t,n);throw ca("Field path arguments must be of type string or ",t,!1,void 0,i)}const ha=new RegExp("[~\\*/\\[\\]]");function ua(t,n,i){if(n.search(ha)>=0)throw ca(`Invalid field path (${n}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,i);try{return new Qc(...n.split("."))._internalPath}catch(e){throw ca(`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,i)}}function ca(t,n,i,e,s){const r=e&&!e.isEmpty(),o=void 0!==s;let h=`Function ${n}() called with invalid data`;i&&(h+=" (via `toFirestore()`)"),h+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${e}`),o&&(u+=` in document ${s}`),u+=")"),new ds(fs.INVALID_ARGUMENT,h+t+u)}function aa(t,n){return t.some((t=>t.isEqual(n)))}
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
 */class la{constructor(t,n,i,e,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=e,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new fa(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(da("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n)}}}class fa extends la{data(){return super.data()}}function da(t,n){return"string"==typeof n?ua(t,n):n instanceof Qc?n._internalPath:n._delegate._internalPath}
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
 */class wa{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pa extends la{constructor(t,n,i,e,s,r){super(t,n,i,e,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(da("DocumentSnapshot.get",t));if(null!==i)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class ma extends pa{data(t={}){return super.data(t)}}
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
function va(t){t=Mc(t,Pc);const n=Mc(t.firestore,jc);return function(t,n,i={}){const e=new ws;return t.asyncQueue.enqueueAndForget((async()=>function(t,n,i,e,s){const r=new Ac({next:r=>{n.enqueueAndForget((()=>async function(t,n){const i=t,e=n.query;let s=!1;const r=i.queries.get(e);if(r){const t=r.listeners.indexOf(n);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return i.queries.delete(e),i.onUnlisten(e)}(t,o)));const h=r.docs.has(i);!h&&r.fromCache?s.reject(new ds(fs.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&r.fromCache&&e&&"server"===e.source?s.reject(new ds(fs.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new Xu(_r(i.path),r,{includeMetadataChanges:!0,wo:!0});return async function(t,n){const i=t,e=n.query;let s=!1,r=i.queries.get(e);if(r||(s=!0,r=new Qu),s)try{r.so=await i.onListen(e)}catch(t){const i=ju(t,`Initialization of query '${Fr(n.query)}' failed`);return void n.onError(i)}i.queries.set(e,r),r.listeners.push(n),n.ro(i.onlineState),r.so&&n.oo(r.so)&&Wu(i)}(t,o)}(await Cc(t),t.asyncQueue,n,i,e))),e.promise}(qc(n),t._key).then((i=>function(t,n,i){const e=i.docs.get(n._key),s=new ga(t);return new pa(t,s,n._key,e,new wa(i.hasPendingWrites,i.fromCache),n.converter)}(n,t,i)))}class ga extends class{convertValue(t,n="none"){switch(Ks(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(js(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw as()}}convertObject(t,n){const i={};return ks(t.fields,((t,e)=>{i[t]=this.convertValue(e,n)})),i}convertGeoPoint(t){return new Kc(Vs(t.latitude),Vs(t.longitude))}convertArray(t,n){return(t.values||[]).map((t=>this.convertValue(t,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const i=qs(t);return null==i?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Hs(t));default:return null}}convertTimestamp(t){const n=xs(t);return new Is(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Ms.fromString(t);ls(bh(i));const e=new Dc(i.get(1),i.get(3)),s=new Gs(i.popFirst(5));return e.isEqual(n)||hs(`Document ${s} contains a document reference within a different database (${e.projectId}/${e.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}
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
 */{constructor(t){super(),this.firestore=t}convertBytes(t){return new zc(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Pc(this.firestore,null,n)}}function ya(t,n,i){t=Mc(t,Pc);const e=Mc(t.firestore,jc),s=function(t,n,i){let e;return e=t?i&&(i.merge||i.mergeFields)?t.toFirestore(n,i):t.toFirestore(n):n,e}(t.converter,n,i);return function(t,n){return function(t,n){const i=new ws;return t.asyncQueue.enqueueAndForget((async()=>rc(await function(t){return Nc(t).then((t=>t.syncEngine))}(t),n,i))),i.promise}(qc(t),n)}(e,[na(ta(e),"setDoc",t._key,s,null!==t.converter,i).toMutation(t._key,eo.none())])}!function(t,n=!0){es="9.6.4",B(new C("firestore",((t,{options:i})=>{const e=t.getProvider("app").getImmediate(),s=new jc(e,new vs(t.getProvider("auth-internal")),new Es(t.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:n},i),s._setSettings(i),s}),"PUBLIC")),W(ns,"3.4.3",t),W(ns,"3.4.3","esm2017")}();export{Bc as B,C,d as E,f as F,$ as L,z as S,B as _,q as a,N as b,c,m as d,l as e,S as f,K as g,r as h,o as i,h as j,E as k,b as l,s as m,R as n,g as o,i as p,y as q,W as r,u as s,p as t,G as u,a as v,xc as w,va as x,ya as y}