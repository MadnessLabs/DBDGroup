import{r as t,h as n,H as e,c as i,d as r}from"./p-a77c936b.js";import{c as s,I as o}from"./p-fc1a362d.js";import{g as u,i as a,a as c,b as h,_ as l,C as f,S as d,r as p,c as v,d as m,L as w,e as y,f as g,F as b,E,h as _,q as I,j as T,k as N,l as S,m as O,n as A,o as k,p as R,s as C,D,t as P,u as j,v as M,w as L,x,y as F,z as U,A as V,B as q,G as B,H as $,I as W,J as G,K as J,M as z,N as H,O as K,P as Y,Q as X,R as Q,T as Z,U as tt,V as nt,W as et,X as it,Y as rt,Z as st,$ as ot,a0 as ut,a1 as at,a2 as ct,a3 as ht}from"./p-a71928d6.js";import{b as lt}from"./p-e369b114.js";import{c as ft,a as dt,b as pt}from"./p-4e9b4087.js";import{p as vt,m as mt}from"./p-41b4da3b.js";import{g as wt,c as yt,a as gt}from"./p-84bd14d5.js";import{c as bt,d as Et,s as _t}from"./p-2bde1599.js";import{g as It}from"./p-4d4077ea.js";import{a as Tt,d as Nt}from"./p-ea5f983d.js";import{t as St}from"./p-a9194817.js";import"./p-2d180048.js";import"./p-add30d46.js";var Ot,At=(Ot=function(t,n){return(Ot=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}Ot(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),kt=new(function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.EVENTS={EVENT_NAME_ACTIVATED_APP:"fb_mobile_activate_app",EVENT_NAME_DEACTIVATED_APP:"fb_mobile_deactivate_app",EVENT_NAME_SESSION_INTERRUPTIONS:"fb_mobile_app_interruptions",EVENT_NAME_TIME_BETWEEN_SESSIONS:"fb_mobile_time_between_sessions",EVENT_NAME_COMPLETED_REGISTRATION:"fb_mobile_complete_registration",EVENT_NAME_VIEWED_CONTENT:"fb_mobile_content_view",EVENT_NAME_SEARCHED:"fb_mobile_search",EVENT_NAME_RATED:"fb_mobile_rate",EVENT_NAME_COMPLETED_TUTORIAL:"fb_mobile_tutorial_completion",EVENT_NAME_PUSH_TOKEN_OBTAINED:"fb_mobile_obtain_push_token",EVENT_NAME_ADDED_TO_CART:"fb_mobile_add_to_cart",EVENT_NAME_ADDED_TO_WISHLIST:"fb_mobile_add_to_wishlist",EVENT_NAME_INITIATED_CHECKOUT:"fb_mobile_initiated_checkout",EVENT_NAME_ADDED_PAYMENT_INFO:"fb_mobile_add_payment_info",EVENT_NAME_PURCHASED:"fb_mobile_purchase",EVENT_NAME_ACHIEVED_LEVEL:"fb_mobile_level_achieved",EVENT_NAME_UNLOCKED_ACHIEVEMENT:"fb_mobile_achievement_unlocked",EVENT_NAME_SPENT_CREDITS:"fb_mobile_spent_credits",EVENT_PARAM_CURRENCY:"fb_currency",EVENT_PARAM_REGISTRATION_METHOD:"fb_registration_method",EVENT_PARAM_CONTENT_TYPE:"fb_content_type",EVENT_PARAM_CONTENT_ID:"fb_content_id",EVENT_PARAM_SEARCH_STRING:"fb_search_string",EVENT_PARAM_SUCCESS:"fb_success",EVENT_PARAM_MAX_RATING_VALUE:"fb_max_rating_value",EVENT_PARAM_PAYMENT_INFO_AVAILABLE:"fb_payment_info_available",EVENT_PARAM_NUM_ITEMS:"fb_num_items",EVENT_PARAM_LEVEL:"fb_level",EVENT_PARAM_DESCRIPTION:"fb_description",EVENT_PARAM_SOURCE_APPLICATION:"fb_mobile_launch_source",EVENT_PARAM_VALUE_YES:"1",EVENT_PARAM_VALUE_NO:"0"},n}return At(n,t),n.prototype.getApplicationId=function(){return s(this,"getApplicationId",{},arguments)},n.prototype.setApplicationId=function(t){return s(this,"setApplicationId",{},arguments)},n.prototype.getApplicationName=function(){return s(this,"getApplicationName",{},arguments)},n.prototype.setApplicationName=function(t){return s(this,"setApplicationName",{},arguments)},n.prototype.login=function(t){return s(this,"login",{},arguments)},n.prototype.loginWithLimitedTracking=function(t){return s(this,"loginWithLimitedTracking",{},arguments)},n.prototype.checkHasCorrectPermissions=function(t){return s(this,"checkHasCorrectPermissions",{},arguments)},n.prototype.isDataAccessExpired=function(){return s(this,"isDataAccessExpired",{},arguments)},n.prototype.reauthorizeDataAccess=function(){return s(this,"reauthorizeDataAccess",{},arguments)},n.prototype.logout=function(){return s(this,"logout",{},arguments)},n.prototype.getLoginStatus=function(){return s(this,"getLoginStatus",{},arguments)},n.prototype.getAccessToken=function(){return s(this,"getAccessToken",{},arguments)},n.prototype.getCurrentProfile=function(){return s(this,"getCurrentProfile",{},arguments)},n.prototype.showDialog=function(t){return s(this,"showDialog",{},arguments)},n.prototype.api=function(t,n,e){return s(this,"api",{},arguments)},n.prototype.logEvent=function(t,n,e){return s(this,"logEvent",{successIndex:3,errorIndex:4},arguments)},n.prototype.setAutoLogAppEventsEnabled=function(t){return s(this,"setAutoLogAppEventsEnabled",{successIndex:1,errorIndex:2},arguments)},n.prototype.setAdvertiserIDCollectionEnabled=function(t){return s(this,"setAdvertiserIDCollectionEnabled",{},arguments)},n.prototype.setAdvertiserTrackingEnabled=function(t){return s(this,"setAdvertiserTrackingEnabled",{},arguments)},n.prototype.logPurchase=function(t,n,e){return s(this,"logPurchase",{},arguments)},n.prototype.getDeferredApplink=function(){return s(this,"getDeferredApplink",{},arguments)},n.prototype.activateApp=function(){return s(this,"activateApp",{},arguments)},n.pluginName="Facebook",n.plugin="cordova-plugin-facebook-connect",n.pluginRef="facebookConnectPlugin",n.repo="https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect",n.install='ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="123456789" --variable APP_NAME="myApplication"',n.installVariables=["APP_ID","APP_NAME"],n.platforms=["Android","iOS","Browser"],n}(o)),Rt=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};return function(n,e){function i(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),Ct=new(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Rt(n,t),n.prototype.login=function(t){return s(this,"login",{successIndex:1,errorIndex:2},arguments)},n.prototype.trySilentLogin=function(t){return s(this,"trySilentLogin",{},arguments)},n.prototype.logout=function(){return s(this,"logout",{},arguments)},n.prototype.disconnect=function(){return s(this,"disconnect",{},arguments)},n.prototype.getSigningCertificateFingerprint=function(){return s(this,"getSigningCertificateFingerprint",{},arguments)},n.pluginName="GooglePlus",n.plugin="cordova-plugin-googleplus",n.pluginRef="window.plugins.googleplus",n.repo="https://github.com/EddyVerbruggen/cordova-plugin-googleplus",n.install="ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid",n.installVariables=["REVERSED_CLIENT_ID"],n.platforms=["Android","iOS"],n}(o)),Dt=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};return function(n,e){function i(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),Pt=new(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Dt(n,t),n.prototype.login=function(){return s(this,"login",{},arguments)},n.prototype.logout=function(){return s(this,"logout",{},arguments)},n.prototype.showUser=function(){return s(this,"showUser",{},arguments)},n.pluginName="TwitterConnect",n.plugin="twitter-connect-plugin",n.pluginRef="TwitterConnect",n.repo="https://github.com/chroa/twitter-connect-plugin",n.install="ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key> --variable TWITTER_KEY=<Twitter Consumer Key> --variable TWITTER_SECRET=<Twitter Consumer Secret>",n.installVariables=["FABRIC_KEY","TWITTER_KEY","TWITTER_SECRET"],n.platforms=["Android","iOS"],n}(o));function jt(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(e[i[r]]=t[i[r]])}return e}const Mt=function(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}},Lt=new E("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),xt=new S("@firebase/auth");function Ft(t,...n){xt.logLevel<=w.ERROR&&xt.error(`Auth (${d}): ${t}`,...n)}
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
 */function Ut(t,...n){throw $t(t,...n)}function Vt(t,...n){return $t(t,...n)}function qt(t,n,e){const i=Object.assign(Object.assign({},Mt()),{[n]:e});return new E("auth","Firebase",i).create(n,{appName:t.name})}function Bt(t,n,e){if(!(n instanceof e))throw e.name!==n.constructor.name&&Ut(t,"argument-error"),qt(t,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $t(t,...n){if("string"!=typeof t){const e=n[0],i=[...n.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(e,...i)}return Lt.create(t,...n)}function Wt(t,n,...e){if(!t)throw $t(n,...e)}function Gt(t){const n="INTERNAL ASSERTION FAILED: "+t;throw Ft(n),new Error(n)}function Jt(t,n){t||Gt(n)}
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
 */const zt=new Map;function Ht(t){Jt(t instanceof Function,"Expected a class definition");let n=zt.get(t);return n?(Jt(n instanceof t,"Instance stored in cache mismatched with class"),n):(n=new t,zt.set(t,n),n)}
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
function Kt(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Yt(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
class Xt{constructor(t,n){this.shortDelay=t,this.longDelay=n,Jt(n>t,"Short delay should be less than long delay!"),this.isMobile=a()||c()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===Yt()||"https:"===Yt()||g()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function Qt(t,n){Jt(t.emulator,"Emulator should always be set here");const{url:e}=t.emulator;return n?`${e}${n.startsWith("/")?n.slice(1):n}`:e}
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
 */class Zt{static initialize(t,n,e){this.fetchImpl=t,n&&(this.headersImpl=n),e&&(this.responseImpl=e)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const tn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},nn=new Xt(3e4,6e4);
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
 */function en(t,n){return t.tenantId&&!n.tenantId?Object.assign(Object.assign({},n),{tenantId:t.tenantId}):n}async function rn(t,n,e,i,r={}){return sn(t,r,(async()=>{let r={},s={};i&&("GET"===n?s=i:r={body:JSON.stringify(i)});const o=I(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Zt.fetch()(un(t,t.config.apiHost,e,o),Object.assign({method:n,headers:u,referrerPolicy:"no-referrer"},r))}))}async function sn(t,n,e){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},tn),n);try{const n=new an(t),r=await Promise.race([e(),n.promise]);n.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw cn(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const n=r.ok?s.errorMessage:s.error.message,[e,o]=n.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===e)throw cn(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===e)throw cn(t,"email-already-in-use",s);const u=i[e]||e.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw qt(t,u,o);Ut(t,u)}}catch(n){if(n instanceof b)throw n;Ut(t,"network-request-failed")}}async function on(t,n,e,i,r={}){const s=await rn(t,n,e,i,r);return"mfaPendingCredential"in s&&Ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function un(t,n,e,i){const r=`${n}${e}?${i}`;return t.config.emulator?Qt(t.config,r):`${t.config.apiScheme}://${r}`}class an{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,n)=>{this.timer=setTimeout((()=>n(Vt(this.auth,"network-request-failed"))),nn.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function cn(t,n,e){const i={appName:t.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const r=Vt(t,n,i);return r.customData._tokenResponse=e,r}
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
function hn(t){if(t)try{const n=new Date(Number(t));if(!isNaN(n.getTime()))return n.toUTCString()}catch(t){}}
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
 */function ln(t,n=!1){return u(t).getIdToken(n)}async function fn(t,n=!1){const e=u(t),i=await e.getIdToken(n),r=pn(i);Wt(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:hn(dn(r.auth_time)),issuedAtTime:hn(dn(r.iat)),expirationTime:hn(dn(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function dn(t){return 1e3*Number(t)}function pn(t){const[n,e,i]=t.split(".");if(void 0===n||void 0===e||void 0===i)return Ft("JWT malformed, contained fewer than 3 sections"),null;try{const t=h(e);return t?JSON.parse(t):(Ft("Failed to decode base64 JWT payload"),null)}catch(t){return Ft("Caught error parsing JWT payload as JSON",t),null}}
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
async function vn(t,n,e=!1){if(e)return n;try{return await n}catch(n){throw n instanceof b&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}class mn{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(n=this.user.stsTokenManager.expirationTime)&&void 0!==n?n:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
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
 */class wn{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hn(this.lastLoginAt),this.creationTime=hn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function yn(t){var n;const e=t.auth,i=await t.getIdToken(),r=await vn(t,async function(t,n){return rn(t,"POST","/v1/accounts:lookup",n)}(e,{idToken:i}));Wt(null==r?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?s.providerUserInfo.map((t=>{var{providerId:n}=t,e=jt(t,["providerId"]);return{providerId:n,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}})):[],u=(a=o,[...t.providerData.filter((t=>!a.some((n=>n.providerId===t.providerId)))),...a]);var a;const c=!!t.isAnonymous&&!(t.email&&s.passwordHash||(null==u?void 0:u.length)),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new wn(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function gn(t){const n=u(t);await yn(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}
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
class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Wt(t.idToken,"internal-error"),Wt(void 0!==t.idToken,"internal-error"),Wt(void 0!==t.refreshToken,"internal-error");const n="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const n=pn(t);return Wt(n,"internal-error"),Wt(void 0!==n.exp,"internal-error"),Wt(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return Wt(!this.accessToken||this.refreshToken,t,"user-token-expired"),n||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:e,refreshToken:i,expiresIn:r}=await
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
async function(t,n){const e=await sn(t,{},(async()=>{const e=I({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=un(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Zt.fetch()(s,{method:"POST",headers:o,body:e})}));return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}(t,n);this.updateTokensAndExpiration(e,i,Number(r))}updateTokensAndExpiration(t,n,e){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*e}static fromJSON(t,n){const{refreshToken:e,accessToken:i,expirationTime:r}=n,s=new bn;return e&&(Wt("string"==typeof e,"internal-error",{appName:t}),s.refreshToken=e),i&&(Wt("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(Wt("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return Gt("not implemented")}}
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
 */function En(t,n){Wt("string"==typeof t||void 0===t,"internal-error",{appName:n})}class _n{constructor(t){var{uid:n,auth:e,stsTokenManager:i}=t,r=jt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=e,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new wn(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await vn(this,this.stsTokenManager.getToken(this.auth,t));return Wt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return fn(this,t)}reload(){return gn(this)}_assign(t){this!==t&&(Wt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new _n(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){Wt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let e=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),e=!0),n&&await yn(this),await this.auth._persistUserIfCurrent(this),e&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await vn(this,async function(t,n){return rn(t,"POST","/v1/accounts:delete",n)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var e,i,r,s,o,u,a,c;const h=null!==(e=n.displayName)&&void 0!==e?e:void 0,l=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(r=n.phoneNumber)&&void 0!==r?r:void 0,d=null!==(s=n.photoURL)&&void 0!==s?s:void 0,p=null!==(o=n.tenantId)&&void 0!==o?o:void 0,v=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(a=n.createdAt)&&void 0!==a?a:void 0,w=null!==(c=n.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:g,isAnonymous:b,providerData:E,stsTokenManager:_}=n;Wt(y&&_,t,"internal-error");const I=bn.fromJSON(this.name,_);Wt("string"==typeof y,t,"internal-error"),En(h,t.name),En(l,t.name),Wt("boolean"==typeof g,t,"internal-error"),Wt("boolean"==typeof b,t,"internal-error"),En(f,t.name),En(d,t.name),En(p,t.name),En(v,t.name),En(m,t.name),En(w,t.name);const T=new _n({uid:y,auth:t,email:l,emailVerified:g,displayName:h,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:w});return E&&Array.isArray(E)&&(T.providerData=E.map((t=>Object.assign({},t)))),v&&(T._redirectEventId=v),T}static async _fromIdTokenResponse(t,n,e=!1){const i=new bn;i.updateFromServerResponse(n);const r=new _n({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:e});return await yn(r),r}}
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
 */class In{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return void 0===n?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}In.type="NONE";const Tn=In;
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
 */function Nn(t,n,e){return`firebase:${t}:${n}:${e}`}class Sn{constructor(t,n,e){this.persistence=t,this.auth=n,this.userKey=e;const{config:i,name:r}=this.auth;this.fullUserKey=Nn(this.userKey,i.apiKey,r),this.fullPersistenceKey=Nn("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?_n._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,n?this.setCurrentUser(n):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,e="authUser"){if(!n.length)return new Sn(Ht(Tn),t,e);const i=(await Promise.all(n.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||Ht(Tn);const s=Nn(e,t.config.apiKey,t.name);let o=null;for(const e of n)try{const n=await e._get(s);if(n){const i=_n._fromJSON(t,n);e!==r&&(o=i),r=e;break}}catch(t){}const u=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&u.length?(r=u[0],o&&await r._set(s,o.toJSON()),await Promise.all(n.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new Sn(r,t,e)):new Sn(r,t,e)}}
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
 */function On(t){const n=t.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(Cn(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(An(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(Pn(n))return"Blackberry";if(jn(n))return"Webos";if(kn(n))return"Safari";if((n.includes("chrome/")||Rn(n))&&!n.includes("edge/"))return"Chrome";if(Dn(n))return"Android";{const n=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function An(t=O()){return/firefox\//i.test(t)}function kn(t=O()){const n=t.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function Rn(t=O()){return/crios\//i.test(t)}function Cn(t=O()){return/iemobile/i.test(t)}function Dn(t=O()){return/android/i.test(t)}function Pn(t=O()){return/blackberry/i.test(t)}function jn(t=O()){return/webos/i.test(t)}function Mn(t=O()){return/iphone|ipad|ipod/i.test(t)}function Ln(t=O()){return Mn(t)||Dn(t)||jn(t)||Pn(t)||/windows phone/i.test(t)||Cn(t)}
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
function xn(t,n=[]){let e;switch(t){case"Browser":e=On(O());break;case"Worker":e=`${On(O())}-${t}`;break;default:e=t}const i=n.length?n.join(","):"FirebaseCore-web";return`${e}/JsCore/${d}/${i}`}
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
 */class Fn{constructor(t,n,e){this.app=t,this.heartbeatServiceProvider=n,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vn(this),this.idTokenSubscription=new Vn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue((async()=>{var e,i;if(!this._deleted&&(this.persistenceManager=await Sn.create(this,t),!this._deleted)){if(null===(e=this._popupRedirectResolver)||void 0===e?void 0:e._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(n),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var n;let e=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId,r=null==e?void 0:e._redirectEventId,s=await this.tryRedirectSignIn(t);i&&i!==r||!(null==s?void 0:s.user)||(e=s.user)}return e?e._redirectEventId?(Wt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===e._redirectEventId?this.directlySetCurrentUser(e):this.reloadAndSetCurrentUserOrClear(e)):this.reloadAndSetCurrentUserOrClear(e):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await yn(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?u(t):null;return n&&Wt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&Wt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ht(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new E("auth","Firebase",t())}onAuthStateChanged(t,n,e){return this.registerStateListener(this.authStateSubscription,t,n,e)}onIdTokenChanged(t,n,e){return this.registerStateListener(this.idTokenSubscription,t,n,e)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,n){const e=await this.getOrInitRedirectPersistenceManager(n);return null===t?e.removeCurrentUser():e.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ht(t)||this._popupRedirectResolver;Wt(n,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,e;return this._isInitialized&&await this.queue((async()=>{})),(null===(n=this._currentUser)||void 0===n?void 0:n._redirectEventId)===t?this._currentUser:(null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=null!==(n=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==n?n:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,e,i){if(this._deleted)return()=>{};const r="function"==typeof n?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Wt(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof n?t.addObserver(n,e,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Wt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const e=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return e&&(n["X-Firebase-Client"]=e),n}}function Un(t){return u(t)}class Vn{constructor(t){this.auth=t,this.observer=null,this.addObserver=_((t=>this.observer=t))}get next(){return Wt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function qn(t){const n=t.indexOf(":");return n<0?"":t.substr(0,n+1)}function Bn(t){if(!t)return null;const n=Number(t);return isNaN(n)?null:n}
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
class $n{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(t){return Gt("not implemented")}_linkToIdToken(t,n){return Gt("not implemented")}_getReauthenticationResolver(t){return Gt("not implemented")}}async function Wn(t,n){return rn(t,"POST","/v1/accounts:update",n)}
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
 */async function Gn(t,n){return rn(t,"POST","/v1/accounts:sendOobCode",en(t,n))}
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
class Jn extends $n{constructor(t,n,e,i=null){super("password",e),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Jn(t,n,"password")}static _fromEmailAndCode(t,n,e=null){return new Jn(t,n,"emailLink",e)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n="string"==typeof t?JSON.parse(t):t;if((null==n?void 0:n.email)&&(null==n?void 0:n.password)){if("password"===n.signInMethod)return this._fromEmailAndPassword(n.email,n.password);if("emailLink"===n.signInMethod)return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return async function(t,n){return on(t,"POST","/v1/accounts:signInWithPassword",en(t,n))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(t,n){return on(t,"POST","/v1/accounts:signInWithEmailLink",en(t,n))}(t,{email:this._email,oobCode:this._password});default:Ut(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Wn(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,n){return on(t,"POST","/v1/accounts:signInWithEmailLink",en(t,n))}(t,{idToken:n,email:this._email,oobCode:this._password});default:Ut(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function zn(t,n){return on(t,"POST","/v1/accounts:signInWithIdp",en(t,n))}
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
 */class Hn extends $n{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n="string"==typeof t?JSON.parse(t):t,{providerId:e,signInMethod:i}=n,r=jt(n,["providerId","signInMethod"]);if(!e||!i)return null;const s=new Hn(e,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return zn(t,this.buildRequest())}_linkToIdToken(t,n){const e=this.buildRequest();return e.idToken=n,zn(t,e)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zn(t,n)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=I(n)}return t}}
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
 */const Kn={USER_NOT_FOUND:"user-not-found"};
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
class Yn extends $n{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,n){return new Yn({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new Yn({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(t){return async function(t,n){return on(t,"POST","/v1/accounts:signInWithPhoneNumber",en(t,n))}(t,this._makeVerificationRequest())}_linkToIdToken(t,n){return async function(t,n){const e=await on(t,"POST","/v1/accounts:signInWithPhoneNumber",en(t,n));if(e.temporaryProof)throw cn(t,"account-exists-with-different-credential",e);return e}(t,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,n){return on(t,"POST","/v1/accounts:signInWithPhoneNumber",en(t,Object.assign(Object.assign({},n),{operation:"REAUTH"})),Kn)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:n,verificationId:e,verificationCode:i}=this.params;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:e,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:n,verificationCode:e,phoneNumber:i,temporaryProof:r}=t;return e||n||i||r?new Yn({verificationId:n,verificationCode:e,phoneNumber:i,temporaryProof:r}):null}}
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
 */class Xn{constructor(t){var n,e,i,r,s,o;const u=T(N(t)),a=null!==(n=u.apiKey)&&void 0!==n?n:null,c=null!==(e=u.oobCode)&&void 0!==e?e:null,h=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=u.mode)&&void 0!==i?i:null);Wt(a&&c&&h,"argument-error"),this.apiKey=a,this.operation=h,this.code=c,this.continueUrl=null!==(r=u.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=u.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=u.tenantId)&&void 0!==o?o:null}static parseLink(t){const n=function(t){const n=T(N(t)).link,e=n?T(N(n)).deep_link_id:null,i=T(N(t)).deep_link_id;return(i?T(N(i)).link:null)||i||e||n||t}(t);try{return new Xn(n)}catch(t){return null}}}
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
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(t,n){return Jn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const e=Xn.parseLink(n);return Wt(e,"argument-error"),Jn._fromEmailAndCode(t,e.code,e.tenantId)}}Qn.PROVIDER_ID="password",Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Zn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class te extends Zn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
 */class ne extends te{constructor(){super("facebook.com")}static credential(t){return Hn._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ne.credential(t.oauthAccessToken)}catch(t){return null}}}ne.FACEBOOK_SIGN_IN_METHOD="facebook.com",ne.PROVIDER_ID="facebook.com";
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
class ee extends te{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Hn._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:e}=t;if(!n&&!e)return null;try{return ee.credential(n,e)}catch(t){return null}}}ee.GOOGLE_SIGN_IN_METHOD="google.com",ee.PROVIDER_ID="google.com";
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
class ie extends te{constructor(){super("twitter.com")}static credential(t,n){return Hn._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ie.credentialFromTaggedObject(t)}static credentialFromError(t){return ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:e}=t;if(!n||!e)return null;try{return ie.credential(n,e)}catch(t){return null}}}
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
async function re(t,n){return on(t,"POST","/v1/accounts:signUp",en(t,n))}
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
 */ie.TWITTER_SIGN_IN_METHOD="twitter.com",ie.PROVIDER_ID="twitter.com";class se{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,e,i=!1){const r=await _n._fromIdTokenResponse(t,e,i),s=oe(e);return new se({user:r,providerId:s,_tokenResponse:e,operationType:n})}static async _forOperation(t,n,e){await t._updateTokensIfNecessary(e,!0);const i=oe(e);return new se({user:t,providerId:i,_tokenResponse:e,operationType:n})}}function oe(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class ue extends b{constructor(t,n,e,i){var r;super(n.code,n.message),this.operationType=e,this.user=i,Object.setPrototypeOf(this,ue.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:n.customData._serverResponse,operationType:e}}static _fromErrorAndOperation(t,n,e,i){return new ue(t,n,e,i)}}function ae(t,n,e,i){return("reauthenticate"===n?e._getReauthenticationResolver(t):e._getIdTokenResponse(t)).catch((e=>{if("auth/multi-factor-auth-required"===e.code)throw ue._fromErrorAndOperation(t,e,n,i);throw e}))}
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
async function ce(t,n,e=!1){const{auth:i}=t,r="reauthenticate";try{const s=await vn(t,ae(i,r,n,t),e);Wt(s.idToken,i,"internal-error");const o=pn(s.idToken);Wt(o,i,"internal-error");const{sub:u}=o;return Wt(t.uid===u,i,"user-mismatch"),se._forOperation(t,r,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Ut(i,"user-mismatch"),t}}
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
 */async function he(t,n,e=!1){const i="signIn",r=await ae(t,i,n),s=await se._fromIdTokenResponse(t,i,r);return e||await t._updateCurrentUser(s.user),s}async function le(t,n){return he(Un(t),n)}
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
function fe(t,n,e){var i;Wt((null===(i=e.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),Wt(void 0===e.dynamicLinkDomain||e.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),n.continueUrl=e.url,n.dynamicLinkDomain=e.dynamicLinkDomain,n.canHandleCodeInApp=e.handleCodeInApp,e.iOS&&(Wt(e.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),n.iOSBundleId=e.iOS.bundleId),e.android&&(Wt(e.android.packageName.length>0,t,"missing-android-pkg-name"),n.androidInstallApp=e.android.installApp,n.androidMinimumVersionCode=e.android.minimumVersion,n.androidPackageName=e.android.packageName)}
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
 */async function de(t,n,e){const{auth:i}=t,r={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(r.email=n),e&&(r.password=e);const s=await vn(t,Wn(i,r));await t._updateTokensIfNecessary(s,!0)}
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
class pe{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class ve extends pe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=O();return kn(t)||Mn(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Ln(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const e=this.storage.getItem(n),i=this.localCache[n];e!==i&&t(n,i,e)}}onStorageEvent(t,n=!1){if(!t.key)return void this.forAllChangedKeys(((t,n,e)=>{this.notifyListeners(t,e)}));const e=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(e);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(e,t.newValue):this.storage.removeItem(e);else if(this.localCache[e]===t.newValue&&!n)return}const i=()=>{const t=this.storage.getItem(e);(n||this.localCache[e]!==t)&&this.notifyListeners(e,t)},r=this.storage.getItem(e);A()&&10===document.documentMode&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,n){this.localCache[t]=n;const e=this.listeners[t];if(e)for(const t of Array.from(e))t(n?JSON.parse(n):n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,n,e)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:e}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ve.type="LOCAL";const me=ve;
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
 */class we extends pe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,n){}_removeListener(t,n){}}we.type="SESSION";const ye=we;
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
class ge{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find((n=>n.isListeningto(t)));if(n)return n;const e=new ge(t);return this.receivers.push(e),e}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:e,eventType:i,data:r}=n.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;n.ports[0].postMessage({status:"ack",eventId:e,eventType:i});const o=Array.from(s).map((async t=>t(n.origin,r))),u=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);n.ports[0].postMessage({status:"done",eventId:e,eventType:i,response:u})}_subscribe(t,n){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),n&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function be(t="",n=10){let e="";for(let t=0;t<n;t++)e+=Math.floor(10*Math.random());return t+e}
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
 */ge.receivers=[];class Ee{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,e=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,u)=>{const a=be("",20);i.port1.start();const c=setTimeout((()=>{u(new Error("unsupported_event"))}),e);s={messageChannel:i,onMessage(t){const n=t;if(n.data.eventId===a)switch(n.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{u(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(n.data.response);break;default:clearTimeout(c),clearTimeout(r),u(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:a,data:n},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function _e(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Ie(){return void 0!==_e().WorkerGlobalScope&&"function"==typeof _e().importScripts}
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
const Te="firebaseLocalStorageDb";class Ne{constructor(t){this.request=t}toPromise(){return new Promise(((t,n)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{n(this.request.error)}))}))}}function Se(t,n){return t.transaction(["firebaseLocalStorage"],n?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Oe(){const t=indexedDB.open(Te,1);return new Promise(((n,e)=>{t.addEventListener("error",(()=>{e(t.error)})),t.addEventListener("upgradeneeded",(()=>{const n=t.result;try{n.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){e(t)}})),t.addEventListener("success",(async()=>{const e=t.result;e.objectStoreNames.contains("firebaseLocalStorage")?n(e):(e.close(),await function(){const t=indexedDB.deleteDatabase(Te);return new Ne(t).toPromise()}(),n(await Oe()))}))}))}async function Ae(t,n,e){const i=Se(t,!0).put({fbase_key:n,value:e});return new Ne(i).toPromise()}function ke(t,n){const e=Se(t,!0).delete(n);return new Ne(e).toPromise()}class Re{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Oe()),this.db}async _withRetries(t){let n=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(t){if(n++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ie()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ge._getInstance(Ie()?self:null),this.receiver._subscribe("keyChanged",(async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)}))),this.receiver._subscribe("ping",(async()=>["keyChanged"]))}async initializeSender(){var t,n;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Ee(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(null===(t=e[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=e[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var n;if(this.sender&&this.activeServiceWorker&&((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Oe();return await Ae(t,"__sak","1"),await ke(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite((async()=>(await this._withRetries((e=>Ae(e,t,n))),this.localCache[t]=n,this.notifyServiceWorker(t))))}async _get(t){const n=await this._withRetries((n=>async function(t,n){const e=Se(t,!1).get(n),i=await new Ne(e).toPromise();return void 0===i?null:i.value}(n,t)));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ke(n,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const n=Se(t,!1).getAll();return new Ne(n).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const n=[],e=new Set;for(const{fbase_key:i,value:r}of t)e.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!e.has(t)&&(this.notifyListeners(t,null),n.push(t));return n}notifyListeners(t,n){this.localCache[t]=n;const e=this.listeners[t];if(e)for(const t of Array.from(e))t(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Re.type="LOCAL";const Ce=Re;
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
 */new Xt(3e4,6e4);
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
class De{constructor(t,n){this.verificationId=t,this.onConfirmation=n}confirm(t){const n=Yn._fromVerification(this.verificationId,t);return this.onConfirmation(n)}}
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
function Pe(t,n){return n?Ht(n):(Wt(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */class je extends $n{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Me(t){return he(t.auth,new je(t),t.bypassAuthState)}function Le(t){const{auth:n,user:e}=t;return Wt(e,n,"internal-error"),ce(e,new je(t),t.bypassAuthState)}async function xe(t){const{auth:n,user:e}=t;return Wt(e,n,"internal-error"),async function(t,n,e=!1){const i=await vn(t,n._linkToIdToken(t.auth,await t.getIdToken()),e);return se._forOperation(t,"link",i)}(e,new je(t),t.bypassAuthState)}
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
 */class Fe{constructor(t,n,e,i,r=!1){this.auth=t,this.resolver=e,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise((async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:n,sessionId:e,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const u={auth:this.auth,requestUri:n,sessionId:e,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(u))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Me;case"linkViaPopup":case"linkViaRedirect":return xe;case"reauthViaPopup":case"reauthViaRedirect":return Le;default:Ut(this.auth,"internal-error")}}resolve(t){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ue=new Xt(2e3,1e4);class Ve extends Fe{constructor(t,n,e,i,r){super(t,n,i,r),this.provider=e,this.authWindow=null,this.pollId=null,Ve.currentPopupAction&&Ve.currentPopupAction.cancel(),Ve.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Wt(t,this.auth,"internal-error"),t}async onExecution(){Jt(1===this.filter.length,"Popup operations only handle one event");const t=be();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Vt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ve.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,e;this.pollId=(null===(e=null===(n=this.authWindow)||void 0===n?void 0:n.window)||void 0===e?void 0:e.closed)?window.setTimeout((()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))}),2e3):window.setTimeout(t,Ue.get())};t()}}Ve.currentPopupAction=null;
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
const qe=new Map;class Be extends Fe{constructor(t,n,e=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,e),this.eventId=null}async execute(){let t=qe.get(this.auth._key());if(!t){try{const n=await async function(t,n){const e=We(n),i=$e(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(e);return await i._remove(e),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(n){t=()=>Promise.reject(n)}qe.set(this.auth._key(),t)}return this.bypassAuthState||qe.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function $e(t){return Ht(t._redirectPersistence)}function We(t){return Nn("pendingRedirect",t.config.apiKey,t.name)}
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
 */async function Ge(t,n,e=!1){const i=Un(t),r=Pe(i,n),s=new Be(i,r,e),o=await s.execute();return o&&!e&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,n)),o}
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
 */class Je{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach((e=>{this.isEventForConsumer(t,e)&&(n=!0,this.sendToConsumer(t,e),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return He(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var e;if(t.error&&!He(t)){const i=(null===(e=t.error.code)||void 0===e?void 0:e.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const e=null===n.eventId||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&e}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ze(t))}saveEventToCache(t){this.cachedEventUids.add(ze(t)),this.lastProcessedEventTime=Date.now()}}function ze(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function He({type:t,error:n}){return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}
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
const Ke=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ye=/^https?/;function Xe(t){const n=Kt(),{protocol:e,hostname:i}=new URL(n);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===e&&t.replace("chrome-extension://","")===n.replace("chrome-extension://",""):"chrome-extension:"===e&&r.hostname===i}if(!Ye.test(e))return!1;if(Ke.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new Xt(3e4,6e4);function Ze(){const t=_e().___jsl;if(null==t?void 0:t.H)for(const n of Object.keys(t.H))if(t.H[n].r=t.H[n].r||[],t.H[n].L=t.H[n].L||[],t.H[n].r=[...t.H[n].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function ti(t){return new Promise(((n,e)=>{var i,r,s,o;function u(){Ze(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{Ze(),e(Vt(t,"network-request-failed"))},timeout:Qe.get()})}if(null===(r=null===(i=_e().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)n(gapi.iframes.getContext());else{if(!(null===(s=_e().gapi)||void 0===s?void 0:s.load)){const n=`__iframefcb${Math.floor(1e6*Math.random())}`;return _e()[n]=()=>{gapi.load?u():e(Vt(t,"network-request-failed"))},(o=`https://apis.google.com/js/api.js?onload=${n}`,new Promise(((t,n)=>{const e=document.createElement("script");
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
var i,r;e.setAttribute("src",o),e.onload=t,e.onerror=t=>{const e=Vt("internal-error");e.customData=t,n(e)},e.type="text/javascript",e.charset="UTF-8",(null!==(r=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==r?r:document).appendChild(e)}))).catch((t=>e(t)))}u()}})).catch((t=>{throw ni=null,t}))}let ni=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const ei=new Xt(5e3,15e3),ii={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ri=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function si(t){const n=t.config;Wt(n.authDomain,t,"auth-domain-config-required");const e=n.emulator?Qt(n,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:n.apiKey,appName:t.name,v:d},r=ri.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${e}?${I(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const oi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ui{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function ai(t,n,e,i,r,s){Wt(t.config.authDomain,t,"auth-domain-config-required"),Wt(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:e,redirectUrl:i,v:d,eventId:r};if(n instanceof Zn){n.setDefaultLanguage(t.languageCode),o.providerId=n.providerId||"",k(n.getCustomParameters())||(o.customParameters=JSON.stringify(n.getCustomParameters()));for(const[t,n]of Object.entries(s||{}))o[t]=n}if(n instanceof te){const t=n.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const u=o;for(const t of Object.keys(u))void 0===u[t]&&delete u[t];return`${function({config:t}){return t.emulator?Qt(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
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
 */(t)}?${I(u).slice(1)}`}const ci=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ye,this._completeRedirectFn=Ge}async _openPopup(t,n,e,i){var r;return Jt(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()"),function(t,n,e,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const a=Object.assign(Object.assign({},oi),{width:i.toString(),height:r.toString(),top:s,left:o}),c=O().toLowerCase();e&&(u=Rn(c)?"_blank":e),An(c)&&(n=n||"http://localhost",a.scrollbars="yes");const h=Object.entries(a).reduce(((t,[n,e])=>`${t}${n}=${e},`),"");if(function(t=O()){var n;return Mn(t)&&!!(null===(n=window.navigator)||void 0===n?void 0:n.standalone)}(c)&&"_self"!==u)return function(t,n){const e=document.createElement("a");e.href=t,e.target=n;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}
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
 */(n||"",u),new ui(null);const l=window.open(n||"",u,h);Wt(l,t,"popup-blocked");try{l.focus()}catch(t){}return new ui(l)}(t,ai(t,n,e,Kt(),i),be())}async _openRedirect(t,n,e,i){var r;return await this._originValidation(t),r=ai(t,n,e,Kt(),i),_e().location.href=r,new Promise((()=>{}))}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:t,promise:e}=this.eventManagers[n];return t?Promise.resolve(t):(Jt(e,"If manager is not set, promise should be"),e)}const e=this.initAndGetManager(t);return this.eventManagers[n]={promise:e},e.catch((()=>{delete this.eventManagers[n]})),e}async initAndGetManager(t){const n=await async function(t){const n=await function(t){return ni=ni||ti(t),ni}(t),e=_e().gapi;return Wt(e,t,"internal-error"),n.open({where:document.body,url:si(t),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ii,dontclear:!0},(n=>new Promise((async(e,i)=>{await n.restyle({setHideOnLeave:!1});const r=Vt(t,"network-request-failed"),s=_e().setTimeout((()=>{i(r)}),ei.get());function o(){_e().clearTimeout(s),e(n)}n.ping(o).then(o,(()=>{i(r)}))}))))}(t),e=new Je(t);return n.register("authEvent",(n=>(Wt(null==n?void 0:n.authEvent,t,"invalid-auth-event"),{status:e.onEvent(n.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:e},this.iframes[t._key()]=n,e}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(e=>{var i;const r=null===(i=null==e?void 0:e[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&n(!!r),Ut(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=async function(t){if(t.config.emulator)return;const{authorizedDomains:n}=await async function(t,n={}){return rn(t,"GET","/v1/projects",n)}(t);for(const t of n)try{if(Xe(t))return}catch(t){}Ut(t,"unauthorized-domain")}(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ln()||kn()||Mn()}};
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
class hi{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged((n=>{var e;t((null===(e=n)||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Wt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */l(new f("auth",((t,{options:n})=>{const e=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:s}=e.options;return((t,e)=>{Wt(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),Wt(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:"Browser",apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xn("Browser")},o=new Fn(t,e,i);return function(t,n){const e=(null==n?void 0:n.persistence)||[],i=(Array.isArray(e)?e:[e]).map(Ht);(null==n?void 0:n.errorMap)&&t._updateErrorMap(n.errorMap),t._initializeWithPersistence(i,null==n?void 0:n.popupRedirectResolver)}(o,n),o})(e,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t=>{t.getProvider("auth-internal").initialize()}))),l(new f("auth-internal",(t=>{return n=Un(t.getProvider("auth").getImmediate()),new hi(n);var n}),"PRIVATE").setInstantiationMode("EXPLICIT")),p("@firebase/auth","0.19.12",void 0),p("@firebase/auth","0.19.12","esm2017");
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
let li="";
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
class fi{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){null==n?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),P(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return null==n?null:j(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
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
 */class di{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){null==n?delete this.cache_[t]:this.cache_[t]=n}get(t){return M(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
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
 */const pi=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){const n=window[t];return n.setItem("firebase:sentinel","cache"),n.removeItem("firebase:sentinel"),new fi(n)}}catch(t){}return new di},vi=pi("localStorage"),mi=pi("sessionStorage"),wi=new S("@firebase/database"),yi=function(){let t=1;return function(){return t++}}(),gi=function(t){const n=L(t),e=new x;e.update(n);const i=e.digest();return C.encodeByteArray(i)},bi=function(...t){let n="";for(let e=0;e<t.length;e++){const i=t[e];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?n+=bi.apply(null,i):n+="object"==typeof i?P(i):i,n+=" "}return n};let Ei=null,_i=!0;const Ii=function(...t){if(!0===_i&&(_i=!1,null===Ei&&!0===mi.get("logging_enabled")&&(!0,R(!0,"Can't turn on custom loggers persistently."),wi.logLevel=w.VERBOSE,Ei=wi.log.bind(wi))),Ei){const n=bi.apply(null,t);Ei(n)}},Ti=function(t){return function(...n){Ii(t,...n)}},Ni=function(...t){const n="FIREBASE INTERNAL ERROR: "+bi(...t);wi.error(n)},Si=function(...t){const n=`FIREBASE FATAL ERROR: ${bi(...t)}`;throw wi.error(n),new Error(n)},Oi=function(...t){const n="FIREBASE WARNING: "+bi(...t);wi.warn(n)},Ai=function(t){return"number"==typeof t&&(t!=t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ki="[MIN_NAME]",Ri="[MAX_NAME]",Ci=function(t,n){if(t===n)return 0;if(t===ki||n===Ri)return-1;if(n===ki||t===Ri)return 1;{const e=Ui(t),i=Ui(n);return null!==e?null!==i?e-i==0?t.length-n.length:e-i:-1:null!==i?1:t<n?-1:1}},Di=function(t,n){return t===n?0:t<n?-1:1},Pi=function(t,n){if(n&&t in n)return n[t];throw new Error("Missing required key ("+t+") in object: "+P(n))},ji=function(t){if("object"!=typeof t||null===t)return P(t);const n=[];for(const e in t)n.push(e);n.sort();let e="{";for(let i=0;i<n.length;i++)0!==i&&(e+=","),e+=P(n[i]),e+=":",e+=ji(t[n[i]]);return e+="}",e},Mi=function(t,n){const e=t.length;if(e<=n)return[t];const i=[];for(let r=0;r<e;r+=n)i.push(t.substring(r,r+n>e?e:r+n));return i};function Li(t,n){for(const e in t)t.hasOwnProperty(e)&&n(e,t[e])}const xi=function(t){R(!Ai(t),"Invalid JSON number");let n,e,i,r,s;0===t?(e=0,i=0,n=1/t==-1/0?1:0):(n=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(t)/Math.LN2),1023),e=r+1023,i=Math.round(t*Math.pow(2,52-r)-Math.pow(2,52))):(e=0,i=Math.round(t/Math.pow(2,-1074))));const o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(e%2?1:0),e=Math.floor(e/2);o.push(n?1:0),o.reverse();const u=o.join("");let a="";for(s=0;s<64;s+=8){let t=parseInt(u.substr(s,8),2).toString(16);1===t.length&&(t="0"+t),a+=t}return a.toLowerCase()},Fi=new RegExp("^-?(0*)\\d{1,10}$"),Ui=function(t){if(Fi.test(t)){const n=Number(t);if(n>=-2147483648&&n<=2147483647)return n}return null},Vi=function(t){try{t()}catch(t){setTimeout((()=>{throw Oi("Exception was thrown by user callback.",t.stack||""),t}),Math.floor(0))}},qi=function(t,n){const e=setTimeout(t,n);return"object"==typeof e&&e.unref&&e.unref(),e};
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
class Bi{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=null==n?void 0:n.getImmediate({optional:!0}),this.appCheck||null==n||n.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((n,e)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(n,e):n(null)}),0)}))}addTokenChangeListener(t){var n;null===(n=this.appCheckProvider)||void 0===n||n.get().then((n=>n.addTokenListener(t)))}notifyForInvalidToken(){Oi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class $i{constructor(t,n,e){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=e,this.auth_=null,this.auth_=e.getImmediate({optional:!0}),this.auth_||e.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(Ii("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((n,e)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(n,e):n(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((n=>n.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((n=>n.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';t+="credential"in this.firebaseOptions_?'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oi(t)}}class Wi{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Wi.OWNER="owner";
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
const Gi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class Ji{constructor(t,n,e,i,r=!1,s="",o=!1){this.secure=n,this.namespace=e,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vi.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&vi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){return`${this.secure?"https://":"http://"}${this.host}/${this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:""}`}}function zi(t,n,e){let i;if(R("string"==typeof n,"typeof type must == string"),R("object"==typeof e,"typeof params must == object"),"websocket"===n)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if("long_polling"!==n)throw new Error("Unknown connection type: "+n);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}(function(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams})(t)&&(e.ns=t.namespace);const r=[];return Li(e,((t,n)=>{r.push(t+"="+n)})),i+r.join("&")}
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
 */class Hi{constructor(){this.counters_={}}incrementCounter(t,n=1){M(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return J(this.counters_)}}
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
 */const Ki={},Yi={};function Xi(t){const n=t.toString();return Ki[n]||(Ki[n]=new Hi),Ki[n]}
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
class Qi{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let n=0;n<t.length;++n)t[n]&&Vi((()=>{this.onMessage_(t[n])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */class Zi{constructor(t,n,e,i,r,s,o){this.connId=t,this.repoInfo=n,this.applicationId=e,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ti(t),this.stats_=Xi(n),this.urlFn=t=>(this.appCheckToken&&(t.ac=this.appCheckToken),zi(n,"long_polling",t))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Qi(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(t){if("complete"===document.readyState)t();else{let n=!1;const e=function(){document.body?n||(n=!0,t()):setTimeout(e,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&e()})),window.attachEvent("onload",e))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new tr(((...t)=>{const[n,e,i,r,s]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===n)this.id=e,this.password=i;else{if("close"!==n)throw new Error("Unrecognized command received: "+n);e?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(e,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[n,e]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(n,e)}),(()=>{this.onClosed_()}),this.urlFn);const t={start:"t"};t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Gi.test(location.hostname)&&(t.r="f");const n=this.urlFn(t);this.log_("Connecting via long-poll to "+n),this.scriptTagHolder.addTag(n,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zi.forceAllow_=!0}static forceDisallow(){Zi.forceDisallow_=!0}static isAvailable(){return!!Zi.forceAllow_||!(Zi.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=P(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const e=z(n),i=Mi(e,1840);for(let t=0;t<i.length;t++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[t]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const e={dframe:"t"};e.id=t,e.pw=n,this.myDisconnFrame.src=this.urlFn(e),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=P(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tr{constructor(t,n,e,i){this.onDisconnect=e,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yi(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=n,this.myIFrame=tr.createIFrame_();let e="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)&&(e='<script>document.domain="'+document.domain+'";<\/script>');const i="<html><body>"+e+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(t){Ii("frame writing exception"),t.stack&&Ii(t.stack),Ii(t)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||Ii("No IE domain setting required")}catch(n){const e=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+e+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;let n=this.urlFn(t),e="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+30+e.length<=1870;){const t=this.pendingSegs.shift();e=e+"&seg"+i+"="+t.seg+"&ts"+i+"="+t.ts+"&d"+i+"="+t.d,i++}return n+=e,this.addLongPollTag_(n,this.currentSerial),!0}return!1}enqueueSegment(t,n,e){this.pendingSegs.push({seg:t,ts:n,d:e}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const e=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(e,Math.floor(25e3));this.addTag(t,(()=>{clearTimeout(i),e()}))}addTag(t,n){setTimeout((()=>{try{if(!this.sendNewPolls)return;const e=this.myIFrame.doc.createElement("script");e.type="text/javascript",e.async=!0,e.src=t,e.onload=e.onreadystatechange=function(){const t=e.readyState;t&&"loaded"!==t&&"complete"!==t||(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),n())},e.onerror=()=>{Ii("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(e)}catch(t){}}),Math.floor(1))}}
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
 */let nr,er=null;"undefined"!=typeof MozWebSocket?er=MozWebSocket:"undefined"!=typeof WebSocket&&(er=WebSocket);class ir{constructor(t,n,e,i,r,s,o){this.connId=t,this.applicationId=e,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ti(this.connId),this.stats_=Xi(n),this.connURL=ir.connectionURL_(n,s,o,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,e,i){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&Gi.test(location.hostname)&&(r.r="f"),n&&(r.s=n),e&&(r.ls=e),i&&(r.ac=i),zi(t,"websocket",r)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vi.set("previous_websocket_failure",!0);try{this.mySock=new er(this.connURL,[],{headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}})}catch(t){this.log_("Error instantiating WebSocket.");const n=t.message||t.data;return n&&this.log_(n),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const n=t.message||t.data;n&&this.log_(n),this.onClosed_()}}start(){}static forceDisallow(){ir.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==er&&!ir.forceDisallow_}static previouslyFailed(){return vi.isInMemoryStorage||!0===vi.get("previous_websocket_failure")}markConnectionHealthy(){vi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=j(t);this.onMessage(n)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(R(null===this.frames,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(n);else{const t=this.extractFrameCount_(n);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const n=P(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const e=Mi(n,16384);e.length>1&&this.sendString_(String(e.length));for(let t=0;t<e.length;t++)this.sendString_(e[t])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ir.responsesRequiredToBeHealthy=2,ir.healthyTimeout=3e4;
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
class rr{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Zi,ir]}initTransports_(t){const n=ir&&ir.isAvailable();let e=n&&!ir.previouslyFailed();if(t.webSocketOnly&&(n||Oi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),e=!0),e)this.transports_=[ir];else{const t=this.transports_=[];for(const n of rr.ALL_TRANSPORTS)n&&n.isAvailable()&&t.push(n)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
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
 */class sr{constructor(t,n,e,i,r,s,o,u,a,c){this.id=t,this.repoInfo_=n,this.applicationId_=e,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=u,this.onKill_=a,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ti("c:"+this.id+":"),this.transportManager_=new rr(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),e=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(n,e)}),Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=qi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){this.sendData_({t:"d",d:t})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if("t"in t){const n=t.t;"a"===n?this.upgradeIfSecondaryHealthy_():"r"===n?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===n&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Pi("t",t),e=Pi("d",t);if("c"===n)this.onSecondaryControl_(e);else{if("d"!==n)throw new Error("Unknown protocol layer: "+n);this.pendingDataMessages.push(e)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Pi("t",t),e=Pi("d",t);"c"===n?this.onControl_(e):"d"===n&&this.onDataMessage_(e)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Pi("t",t);if("d"in t){const e=t.d;if("h"===n)this.onHandshake_(e);else if("n"===n){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===n?this.onConnectionShutdown_(e):"r"===n?this.onReset_(e):"e"===n?Ni("Server Error: "+e):"o"===n?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ni("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,e=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),"5"!==e&&Oi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),e=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,e),qi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class or{put(t,n,e,i){}merge(t,n,e,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,e){}onDisconnectMerge(t,n,e){}onDisconnectCancel(t,n){}reportStats(t){}}
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
 */class ur{constructor(t){this.allowedEvents_=t,this.listeners_={},R(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const e=[...this.listeners_[t]];for(let t=0;t<e.length;t++)e[t].callback.apply(e[t].context,n)}}on(t,n,e){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:e});const i=this.getInitialEvent(t);i&&n.apply(e,i)}off(t,n,e){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let t=0;t<i.length;t++)if(i[t].callback===n&&(!e||e===i[t].context))return void i.splice(t,1)}validateEventType_(t){R(this.allowedEvents_.find((n=>n===t)),"Unknown event: "+t)}}
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
 */class ar extends ur{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||a()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ar}getInitialEvent(t){return R("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
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
 */class cr{constructor(t,n){if(void 0===n){this.pieces_=t.split("/");let n=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[n]=this.pieces_[t],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)""!==this.pieces_[n]&&(t+="/"+this.pieces_[n]);return t||"/"}}function hr(){return new cr("")}function lr(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fr(t){return t.pieces_.length-t.pieceNum_}function dr(t){let n=t.pieceNum_;return n<t.pieces_.length&&n++,new cr(t.pieces_,n)}function pr(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function vr(t,n=0){return t.pieces_.slice(t.pieceNum_+n)}function mr(t){if(t.pieceNum_>=t.pieces_.length)return null;const n=[];for(let e=t.pieceNum_;e<t.pieces_.length-1;e++)n.push(t.pieces_[e]);return new cr(n,0)}function wr(t,n){const e=[];for(let n=t.pieceNum_;n<t.pieces_.length;n++)e.push(t.pieces_[n]);if(n instanceof cr)for(let t=n.pieceNum_;t<n.pieces_.length;t++)e.push(n.pieces_[t]);else{const t=n.split("/");for(let n=0;n<t.length;n++)t[n].length>0&&e.push(t[n])}return new cr(e,0)}function yr(t){return t.pieceNum_>=t.pieces_.length}function gr(t,n){const e=lr(t),i=lr(n);if(null===e)return n;if(e===i)return gr(dr(t),dr(n));throw new Error("INTERNAL ERROR: innerPath ("+n+") is not within outerPath ("+t+")")}function br(t,n){const e=vr(t,0),i=vr(n,0);for(let t=0;t<e.length&&t<i.length;t++){const n=Ci(e[t],i[t]);if(0!==n)return n}return e.length===i.length?0:e.length<i.length?-1:1}function Er(t,n){if(fr(t)!==fr(n))return!1;for(let e=t.pieceNum_,i=n.pieceNum_;e<=t.pieces_.length;e++,i++)if(t.pieces_[e]!==n.pieces_[i])return!1;return!0}function _r(t,n){let e=t.pieceNum_,i=n.pieceNum_;if(fr(t)>fr(n))return!1;for(;e<t.pieces_.length;){if(t.pieces_[e]!==n.pieces_[i])return!1;++e,++i}return!0}class Ir{constructor(t,n){this.errorPrefix_=n,this.parts_=vr(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=V(this.parts_[t]);Tr(this)}}function Tr(t){if(t.byteLength_>768)throw new Error(t.errorPrefix_+"has a key path longer than 768 bytes ("+t.byteLength_+").");if(t.parts_.length>32)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Nr(t))}function Nr(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
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
 */class Sr extends ur{constructor(){let t,n;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(n="visibilitychange",t="hidden"):void 0!==document.mozHidden?(n="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(n="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,(()=>{const n=!document[t];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))}),!1)}static getInstance(){return new Sr}getInitialEvent(t){return R("visible"===t,"Unknown event type: "+t),[this.visible_]}}
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
 */class Or extends or{constructor(t,n,e,i,r,s,o,u){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=e,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=u,this.id=Or.nextPersistentConnectionId_++,this.log_=Ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!$())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sr.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&ar.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,e){const i=++this.requestNumber_,r={r:i,a:t,b:n};this.log_(P(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),e&&(this.requestCBHash_[i]=e)}get(t){this.initConnection_();const n=new D,e={p:t._path.toString(),q:t._queryObject},i={action:"g",request:e,onComplete:t=>{const i=t.d;"ok"===t.s?(this.onDataUpdate_(e.p,i,!1,null),n.resolve(i)):n.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const t=this.outstandingGets_[r];void 0!==t&&i===t&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(r),n.promise}listen(t,n,e,i){this.initConnection_();const r=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),R(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:n,query:t,tag:e};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,(e=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(e)}))}sendListen_(t){const n=t.query,e=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+e+" for "+i);const r={p:e};t.tag&&(r.q=n._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Or.warnOnListenWarnings_(s,n),(this.listens.get(e)&&this.listens.get(e).get(i))===t&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(e,i),t.onComplete&&t.onComplete(o,s))}))}static warnOnListenWarnings_(t,n){if(t&&"object"==typeof t&&M(t,"w")){const e=F(t,"w");if(Array.isArray(e)&&~e.indexOf("no_index")){const t='".indexOn": "'+n._queryParams.getIndex().toString()+'"',e=n._path.toString();Oi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${e} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&40===t.length||W(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=G(t)?"auth":"gauth",e={cred:t};null===this.authOverride_?e.noauth=!0:"object"==typeof this.authOverride_&&(e.authvar=this.authOverride_),this.sendRequest(n,e,(n=>{const e=n.s,i=n.d||"error";this.authToken_===t&&("ok"===e?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(e,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const n=t.s,e=t.d||"error";"ok"===n?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,e)}))}unlisten(t,n){const e=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+e+" "+i),R(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(e,i)&&this.connected_&&this.sendUnlisten_(e,i,t._queryObject,n)}sendUnlisten_(t,n,e,i){this.log_("Unlisten on "+t+" for "+n);const r={p:t};i&&(r.q=e,r.t=i),this.sendRequest("n",r)}onDisconnectPut(t,n,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:e})}onDisconnectMerge(t,n,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:e})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,e,i){const r={p:n,d:e};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,(t=>{i&&setTimeout((()=>{i(t.s,t.d)}),Math.floor(0))}))}put(t,n,e,i){this.putInternal("p",t,n,e,i)}merge(t,n,e,i){this.putInternal("m",t,n,e,i)}putInternal(t,n,e,i,r){this.initConnection_();const s={p:n,d:e};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++,this.connected_?this.sendPut_(this.outstandingPuts_.length-1):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,e=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,e,(e=>{this.log_(n+" response",e),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(e.s,e.d)}))}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,(t=>{"ok"!==t.s&&this.log_("reportStats","Error sending stats: "+t.d)}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+P(t));const n=t.r,e=this.requestCBHash_[n];e&&(delete this.requestCBHash_[n],e(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),"d"===t?this.onDataUpdate_(n.p,n.d,!1,n.t):"m"===t?this.onDataUpdate_(n.p,n.d,!0,n.t):"c"===t?this.onListenRevoked_(n.p,n.q):"ac"===t?this.onAuthRevoked_(n.s,n.d):"apc"===t?this.onAppCheckRevoked_(n.s,n.d):"sd"===t?this.onSecurityDebugPacket_(n):Ni("Unrecognized action received from server: "+P(t)+"\nAre you using the latest client?")}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&((new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime());const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),e=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Or.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const u=function(){o?o.close():(s=!0,e())};this.realtime_={close:u,sendRequest:function(t){R(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(t)}};const a=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,c]=await Promise.all([this.authTokenProvider_.getToken(a),this.appCheckTokenProvider_.getToken(a)]);s?Ii("getToken() completed but was canceled"):(Ii("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=c&&c.token,o=new sr(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,e,(t=>{Oi(t+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(t){this.log_("Failed to get token: "+t),s||(this.repoInfo_.nodeAdmin&&Oi(t),u())}}}interrupt(t){Ii("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Ii("Resuming connection for reason: "+t),delete this.interruptReasons_[t],k(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let e;e=n?n.map((t=>ji(t))).join("$"):"default";const i=this.removeListen_(t,e);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const e=new cr(t).toString();let i;if(this.listens.has(e)){const t=this.listens.get(e);i=t.get(n),t.delete(n),0===t.size&&this.listens.delete(e)}else i=void 0;return i}onAuthRevoked_(t,n){Ii("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Ii("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};t["sdk.js."+li.replace(/\./g,"-")]=1,a()?t["framework.cordova"]=1:c()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=ar.getInstance().currentlyOnline();return k(this.interruptReasons_)&&t}}Or.nextPersistentConnectionId_=0,Or.nextConnectionId_=0;
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
class Ar{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new Ar(t,n)}}
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
 */class kr{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const e=new Ar(ki,t),i=new Ar(ki,n);return 0!==this.compare(e,i)}minPost(){return Ar.MIN}}
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
 */class Rr extends kr{static get __EMPTY_NODE(){return nr}static set __EMPTY_NODE(t){nr=t}compare(t,n){return Ci(t.name,n.name)}isDefinedOn(t){throw B("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Ar.MIN}maxPost(){return new Ar(Ri,nr)}makePost(t,n){return R("string"==typeof t,"KeyIndex indexValue must always be a string."),new Ar(t,nr)}toString(){return".key"}}const Cr=new Rr;
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
 */class Dr{constructor(t,n,e,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(t=t,s=n?e(t.key,n):1,i&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,n=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(n.key,n.value):{key:n.key,value:n.value},this.isReverse_)for(n=n.left;!n.isEmpty();)this.nodeStack_.push(n),n=n.right;else for(n=n.right;!n.isEmpty();)this.nodeStack_.push(n),n=n.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Pr{constructor(t,n,e,i,r){this.key=t,this.value=n,this.color=null!=e?e:Pr.RED,this.left=null!=i?i:jr.EMPTY_NODE,this.right=null!=r?r:jr.EMPTY_NODE}copy(t,n,e,i,r){return new Pr(null!=t?t:this.key,null!=n?n:this.value,null!=e?e:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,e){let i=this;const r=e(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,e),null):0===r?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,e)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return jr.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let e,i;if(e=this,n(t,e.key)<0)e.left.isEmpty()||e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.remove(t,n),null);else{if(e.left.isRed_()&&(e=e.rotateRight_()),e.right.isEmpty()||e.right.isRed_()||e.right.left.isRed_()||(e=e.moveRedRight_()),0===n(t,e.key)){if(e.right.isEmpty())return jr.EMPTY_NODE;i=e.right.min_(),e=e.copy(i.key,i.value,null,null,e.right.removeMin_())}e=e.copy(null,null,null,null,e.right.remove(t,n))}return e.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Pr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Pr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Pr.RED=!0,Pr.BLACK=!1;class jr{constructor(t,n=jr.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new jr(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Pr.BLACK,null,null))}remove(t){return new jr(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Pr.BLACK,null,null))}get(t){let n,e=this.root_;for(;!e.isEmpty();){if(n=this.comparator_(t,e.key),0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}getPredecessorKey(t){let n,e=this.root_,i=null;for(;!e.isEmpty();){if(n=this.comparator_(t,e.key),0===n){if(e.left.isEmpty())return i?i.key:null;for(e=e.left;!e.right.isEmpty();)e=e.right;return e.key}n<0?e=e.left:n>0&&(i=e,e=e.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Dr(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Dr(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Dr(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Dr(this.root_,null,this.comparator_,!0,t)}}
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
function Mr(t,n){return Ci(t.name,n.name)}function Lr(t,n){return Ci(t,n)}
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
 */let xr;jr.EMPTY_NODE=new class{copy(t,n,e,i,r){return this}insert(t,n,e){return new Pr(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Fr=function(t){return"number"==typeof t?"number:"+xi(t):"string:"+t},Ur=function(t){if(t.isLeafNode()){const n=t.val();R("string"==typeof n||"number"==typeof n||"object"==typeof n&&M(n,".sv"),"Priority must be a string or number.")}else R(t===xr||t.isEmpty(),"priority of unexpected type.");R(t===xr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Vr,qr,Br;class $r{constructor(t,n=$r.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,R(null!=this.value_,"LeafNode shouldn't be created with null/undefined value."),Ur(this.priorityNode_)}static set __childrenNodeConstructor(t){Vr=t}static get __childrenNodeConstructor(){return Vr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new $r(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:$r.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return yr(t)?this:".priority"===lr(t)?this.priorityNode_:$r.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return".priority"===t?this.updatePriority(n):n.isEmpty()&&".priority"!==t?this:$r.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const e=lr(t);return null===e?n:n.isEmpty()&&".priority"!==e?this:(R(".priority"!==e||1===fr(t),".priority must be the last token in a path"),this.updateImmediateChild(e,$r.__childrenNodeConstructor.EMPTY_NODE.updateChild(dr(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Fr(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",t+="number"===n?xi(this.value_):this.value_,this.lazyHash_=gi(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===$r.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof $r.__childrenNodeConstructor?-1:(R(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,e=typeof this.value_,i=$r.VALUE_TYPE_ORDER.indexOf(n),r=$r.VALUE_TYPE_ORDER.indexOf(e);return R(i>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+e),i===r?"object"===e?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}return!1}}$r.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Wr=new class extends kr{compare(t,n){const e=t.node.getPriority(),i=n.node.getPriority(),r=e.compareTo(i);return 0===r?Ci(t.name,n.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Ar.MIN}maxPost(){return new Ar(Ri,new $r("[PRIORITY-POST]",Br))}makePost(t,n){const e=qr(t);return new Ar(n,new $r("[PRIORITY-POST]",e))}toString(){return".priority"}},Gr=Math.log(2);
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
 */class Jr{constructor(t){this.count=parseInt(Math.log(t+1)/Gr,10),this.current_=this.count-1;const n=parseInt(Array(this.count+1).join("1"),2);this.bits_=t+1&n}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const zr=function(t,n,e,i){t.sort(n);const r=function(n,i){const s=i-n;let o,u;if(0===s)return null;if(1===s)return o=t[n],u=e?e(o):o,new Pr(u,o.node,Pr.BLACK,null,null);{const a=parseInt(s/2,10)+n,c=r(n,a),h=r(a+1,i);return o=t[a],u=e?e(o):o,new Pr(u,o.node,Pr.BLACK,c,h)}},s=function(n){let i=null,s=null,o=t.length;const u=function(n,i){const s=o-n,u=o;o-=n;const c=r(s+1,u),h=t[s],l=e?e(h):h;a(new Pr(l,h.node,i,null,c))},a=function(t){i?(i.left=t,i=t):(s=t,i=t)};for(let t=0;t<n.count;++t){const e=n.nextBitIsOne(),i=Math.pow(2,n.count-(t+1));e?u(i,Pr.BLACK):(u(i,Pr.BLACK),u(i,Pr.RED))}return s}(new Jr(t.length));return new jr(i||n,s)};
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
 */let Hr;const Kr={};class Yr{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return R(Kr&&Wr,"ChildrenNode.ts has not been loaded"),Hr=Hr||new Yr({".priority":Kr},{".priority":Wr}),Hr}get(t){const n=F(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof jr?n:null}hasIndex(t){return M(this.indexSet_,t.toString())}addIndex(t,n){R(t!==Cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const e=[];let i=!1;const r=n.getIterator(Ar.Wrap);let s,o=r.getNext();for(;o;)i=i||t.isDefinedOn(o.node),e.push(o),o=r.getNext();s=i?zr(e,t.getCompare()):Kr;const u=t.toString(),a=Object.assign({},this.indexSet_);a[u]=t;const c=Object.assign({},this.indexes_);return c[u]=s,new Yr(c,a)}addToIndexes(t,n){const e=U(this.indexes_,((e,i)=>{const r=F(this.indexSet_,i);if(R(r,"Missing index implementation for "+i),e===Kr){if(r.isDefinedOn(t.node)){const e=[],i=n.getIterator(Ar.Wrap);let s=i.getNext();for(;s;)s.name!==t.name&&e.push(s),s=i.getNext();return e.push(t),zr(e,r.getCompare())}return Kr}{const i=n.get(t.name);let r=e;return i&&(r=r.remove(new Ar(t.name,i))),r.insert(t,t.node)}}));return new Yr(e,this.indexSet_)}removeFromIndexes(t,n){const e=U(this.indexes_,(e=>{if(e===Kr)return e;{const i=n.get(t.name);return i?e.remove(new Ar(t.name,i)):e}}));return new Yr(e,this.indexSet_)}}
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
 */let Xr;class Qr{constructor(t,n,e){this.children_=t,this.priorityNode_=n,this.indexMap_=e,this.lazyHash_=null,this.priorityNode_&&Ur(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xr||(Xr=new Qr(new jr(Lr),null,Yr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xr}updatePriority(t){return this.children_.isEmpty()?this:new Qr(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const n=this.children_.get(t);return null===n?Xr:n}}getChild(t){const n=lr(t);return null===n?this:this.getImmediateChild(n).getChild(dr(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,n){if(R(n,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(n);{const e=new Ar(t,n);let i,r;n.isEmpty()?(i=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(e,this.children_)):(i=this.children_.insert(t,n),r=this.indexMap_.addToIndexes(e,this.children_));const s=i.isEmpty()?Xr:this.priorityNode_;return new Qr(i,s,r)}}updateChild(t,n){const e=lr(t);if(null===e)return n;{R(".priority"!==lr(t)||1===fr(t),".priority must be the last token in a path");const i=this.getImmediateChild(e).updateChild(dr(t),n);return this.updateImmediateChild(e,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let e=0,i=0,r=!0;if(this.forEachChild(Wr,((s,o)=>{n[s]=o.val(t),e++,r&&Qr.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!t&&r&&i<2*e){const t=[];for(const e in n)t[e]=n[e];return t}return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Fr(this.getPriority().val())+":"),this.forEachChild(Wr,((n,e)=>{const i=e.hash();""!==i&&(t+=":"+n+":"+i)})),this.lazyHash_=""===t?"":gi(t)}return this.lazyHash_}getPredecessorChildName(t,n,e){const i=this.resolveIndex_(e);if(i){const e=i.getPredecessorKey(new Ar(t,n));return e?e.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const t=n.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Ar(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const t=n.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Ar(n,this.children_.get(n)):null}forEachChild(t,n){const e=this.resolveIndex_(t);return e?e.inorderTraversal((t=>n(t.name,t.node))):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const e=this.resolveIndex_(n);if(e)return e.getIteratorFrom(t,(t=>t));{const e=this.children_.getIteratorFrom(t.name,Ar.Wrap);let i=e.peek();for(;null!=i&&n.compare(i,t)<0;)e.getNext(),i=e.peek();return e}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const e=this.resolveIndex_(n);if(e)return e.getReverseIteratorFrom(t,(t=>t));{const e=this.children_.getReverseIteratorFrom(t.name,Ar.Wrap);let i=e.peek();for(;null!=i&&n.compare(i,t)>0;)e.getNext(),i=e.peek();return e}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Zr?-1:0}withIndex(t){if(t===Cr||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Qr(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Cr||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority())){if(this.children_.count()===n.children_.count()){const t=this.getIterator(Wr),e=n.getIterator(Wr);let i=t.getNext(),r=e.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=e.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(t){return t===Cr?null:this.indexMap_.get(t.toString())}}Qr.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Zr=new class extends Qr{constructor(){super(new jr(Lr),Qr.EMPTY_NODE,Yr.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Qr.EMPTY_NODE}isEmpty(){return!1}};function ts(t,n=null){if(null===t)return Qr.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),R(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+typeof n),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t)return new $r(t,ts(n));if(t instanceof Array){let e=Qr.EMPTY_NODE;return Li(t,((n,i)=>{if(M(t,n)&&"."!==n.substring(0,1)){const t=ts(i);!t.isLeafNode()&&t.isEmpty()||(e=e.updateImmediateChild(n,t))}})),e.updatePriority(ts(n))}{const e=[];let i=!1;if(Li(t,((t,n)=>{if("."!==t.substring(0,1)){const r=ts(n);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),e.push(new Ar(t,r)))}})),0===e.length)return Qr.EMPTY_NODE;const r=zr(e,Mr,(t=>t.name),Lr);if(i){const t=zr(e,Wr.getCompare());return new Qr(r,ts(n),new Yr({".priority":t},{".priority":Wr}))}return new Qr(r,ts(n),Yr.Default)}}Object.defineProperties(Ar,{MIN:{value:new Ar(ki,Qr.EMPTY_NODE)},MAX:{value:new Ar(Ri,Zr)}}),Rr.__EMPTY_NODE=Qr.EMPTY_NODE,$r.__childrenNodeConstructor=Qr,xr=Zr,Br=Zr,qr=ts;
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
class ns extends kr{constructor(t){super(),this.indexPath_=t,R(!yr(t)&&".priority"!==lr(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const e=this.extractChild(t.node),i=this.extractChild(n.node),r=e.compareTo(i);return 0===r?Ci(t.name,n.name):r}makePost(t,n){const e=ts(t),i=Qr.EMPTY_NODE.updateChild(this.indexPath_,e);return new Ar(n,i)}maxPost(){const t=Qr.EMPTY_NODE.updateChild(this.indexPath_,Zr);return new Ar(Ri,t)}toString(){return vr(this.indexPath_,0).join("/")}}
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
 */const es=new class extends kr{compare(t,n){const e=t.node.compareTo(n.node);return 0===e?Ci(t.name,n.name):e}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Ar.MIN}maxPost(){return Ar.MAX}makePost(t,n){const e=ts(t);return new Ar(n,e)}toString(){return".value"}};
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
 */function is(t){return{type:"value",snapshotNode:t}}function rs(t,n){return{type:"child_added",snapshotNode:n,childName:t}}function ss(t,n){return{type:"child_removed",snapshotNode:n,childName:t}}function os(t,n,e){return{type:"child_changed",snapshotNode:n,childName:t,oldSnap:e}}
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
class us{constructor(t){this.index_=t}updateChild(t,n,e,i,r,s){R(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=t.getImmediateChild(n);return o.getChild(i).equals(e.getChild(i))&&o.isEmpty()===e.isEmpty()?t:(null!=s&&(e.isEmpty()?t.hasChild(n)?s.trackChildChange(ss(n,o)):R(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(rs(n,e)):s.trackChildChange(os(n,e,o))),t.isLeafNode()&&e.isEmpty()?t:t.updateImmediateChild(n,e).withIndex(this.index_))}updateFullNode(t,n,e){return null!=e&&(t.isLeafNode()||t.forEachChild(Wr,((t,i)=>{n.hasChild(t)||e.trackChildChange(ss(t,i))})),n.isLeafNode()||n.forEachChild(Wr,((n,i)=>{if(t.hasChild(n)){const r=t.getImmediateChild(n);r.equals(i)||e.trackChildChange(os(n,i,r))}else e.trackChildChange(rs(n,i))}))),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Qr.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class as{constructor(t){this.indexedFilter_=new us(t.getIndex()),this.index_=t.getIndex(),this.startPost_=as.getStartPost_(t),this.endPost_=as.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,n,e,i,r,s){return this.matches(new Ar(n,e))||(e=Qr.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,e,i,r,s)}updateFullNode(t,n,e){n.isLeafNode()&&(n=Qr.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Qr.EMPTY_NODE);const r=this;return n.forEachChild(Wr,((t,n)=>{r.matches(new Ar(t,n))||(i=i.updateImmediateChild(t,Qr.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(t,i,e)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}return t.getIndex().maxPost()}}
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
 */class cs{constructor(t){this.rangedFilter_=new as(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,n,e,i,r,s){return this.rangedFilter_.matches(new Ar(n,e))||(e=Qr.EMPTY_NODE),t.getImmediateChild(n).equals(e)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,e,i,r,s):this.fullLimitUpdateChild_(t,n,e,r,s)}updateFullNode(t,n,e){let i;if(n.isLeafNode()||n.isEmpty())i=Qr.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<n.numChildren()&&n.isIndexed(this.index_)){let t;i=Qr.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let e=0;for(;t.hasNext()&&e<this.limit_;){const n=t.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),n)<=0:this.index_.compare(n,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(n.name,n.node),e++}}else{let t,e,r,s;if(i=n.withIndex(this.index_),i=i.updatePriority(Qr.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),e=this.rangedFilter_.getStartPost();const n=this.index_.getCompare();r=(t,e)=>n(e,t)}else s=i.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),e=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,u=!1;for(;s.hasNext();){const n=s.getNext();!u&&r(t,n)<=0&&(u=!0),u&&o<this.limit_&&r(n,e)<=0?o++:i=i.updateImmediateChild(n.name,Qr.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,e)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,e,i,r){let s;if(this.reverse_){const t=this.index_.getCompare();s=(n,e)=>t(e,n)}else s=this.index_.getCompare();const o=t;R(o.numChildren()===this.limit_,"");const u=new Ar(n,e),a=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(u);if(o.hasChild(n)){const t=o.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=h&&(h.name===n||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const l=null==h?1:s(h,u);if(c&&!e.isEmpty()&&l>=0)return null!=r&&r.trackChildChange(os(n,e,t)),o.updateImmediateChild(n,e);{null!=r&&r.trackChildChange(ss(n,t));const e=o.updateImmediateChild(n,Qr.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(rs(h.name,h.node)),e.updateImmediateChild(h.name,h.node)):e}}return e.isEmpty()?t:c&&s(a,u)>=0?(null!=r&&(r.trackChildChange(ss(a.name,a.node)),r.trackChildChange(rs(n,e))),o.updateImmediateChild(n,e).updateImmediateChild(a.name,Qr.EMPTY_NODE)):t}}
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
 */class hs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Wr}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ki}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ri}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Wr}copy(){const t=new hs;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function ls(t){const n={};if(t.isDefault())return n;let e;return t.index_===Wr?e="$priority":t.index_===es?e="$value":t.index_===Cr?e="$key":(R(t.index_ instanceof ns,"Unrecognized index type!"),e=t.index_.toString()),n.orderBy=P(e),t.startSet_&&(n.startAt=P(t.indexStartValue_),t.startNameSet_&&(n.startAt+=","+P(t.indexStartName_))),t.endSet_&&(n.endAt=P(t.indexEndValue_),t.endNameSet_&&(n.endAt+=","+P(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?n.limitToFirst=t.limit_:n.limitToLast=t.limit_),n}function fs(t){const n={};if(t.startSet_&&(n.sp=t.indexStartValue_,t.startNameSet_&&(n.sn=t.indexStartName_)),t.endSet_&&(n.ep=t.indexEndValue_,t.endNameSet_&&(n.en=t.indexEndName_)),t.limitSet_){n.l=t.limit_;let e=t.viewFrom_;""===e&&(e=t.isViewFromLeft()?"l":"r"),n.vf=e}return t.index_!==Wr&&(n.i=t.index_.toString()),n}
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
 */class ds extends or{constructor(t,n,e,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=e,this.appCheckTokenProvider_=i,this.log_=Ti("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return void 0!==n?"tag$"+n:(R(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,e,i){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const s=ds.getListenId_(t,e),o={};this.listens_[s]=o;const u=ls(t._queryParams);this.restRequest_(r+".json",u,((t,n)=>{let u=n;if(404===t&&(u=null,t=null),null===t&&this.onDataUpdate_(r,u,!1,e),F(this.listens_,s)===o){let n;n=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(n,null)}}))}unlisten(t,n){const e=ds.getListenId_(t,n);delete this.listens_[e]}get(t){const n=ls(t._queryParams),e=t._path.toString(),i=new D;return this.restRequest_(e+".json",n,((t,n)=>{let r=n;404===t&&(r=null,t=null),null===t?(this.onDataUpdate_(e,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(t){}restRequest_(t,n={},e){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+I(n);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(e&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=j(o.responseText)}catch(t){Oi("Failed to parse JSON response for "+s+": "+o.responseText)}e(null,t)}else 401!==o.status&&404!==o.status&&Oi("Got unsuccessful REST response for "+s+" Status: "+o.status),e(o.status);e=null}},o.open("GET",s,!0),o.send()}))}}
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
 */class ps{constructor(){this.rootNode_=Qr.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}
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
 */function vs(){return{value:null,children:new Map}}function ms(t,n,e){if(yr(n))t.value=e,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,e);else{const i=lr(n);t.children.has(i)||t.children.set(i,vs()),ms(t.children.get(i),n=dr(n),e)}}function ws(t,n){if(yr(n))return t.value=null,t.children.clear(),!0;if(null!==t.value){if(t.value.isLeafNode())return!1;{const e=t.value;return t.value=null,e.forEachChild(Wr,((n,e)=>{ms(t,new cr(n),e)})),ws(t,n)}}if(t.children.size>0){const e=lr(n);return n=dr(n),t.children.has(e)&&ws(t.children.get(e),n)&&t.children.delete(e),0===t.children.size}return!0}function ys(t,n,e){null!==t.value?e(n,t.value):function(t,n){t.children.forEach(((t,e)=>{n(e,t)}))}
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
 */(t,((t,i)=>{ys(i,new cr(n.toString()+"/"+t),e)}))}class gs{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Li(this.last_,((t,e)=>{n[t]=n[t]-e})),this.last_=t,n}}
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
 */class bs{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gs(t);const e=1e4+2e4*Math.random();qi(this.reportStats_.bind(this),Math.floor(e))}reportStats_(){const t=this.statsListener_.get(),n={};let e=!1;Li(t,((t,i)=>{i>0&&M(this.statsToReport_,t)&&(n[t]=i,e=!0)})),e&&this.server_.reportStats(n),qi(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var Es;function _s(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
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
 */!function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Es||(Es={}));class Is{constructor(t,n,e){this.path=t,this.affectedTree=n,this.revert=e,this.type=Es.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(t){if(yr(this.path)){if(null!=this.affectedTree.value)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new cr(t));return new Is(hr(),n,this.revert)}}return R(lr(this.path)===t,"operationForChild called for unrelated child."),new Is(dr(this.path),this.affectedTree,this.revert)}}
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
 */class Ts{constructor(t,n){this.source=t,this.path=n,this.type=Es.LISTEN_COMPLETE}operationForChild(t){return yr(this.path)?new Ts(this.source,hr()):new Ts(this.source,dr(this.path))}}
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
 */class Ns{constructor(t,n,e){this.source=t,this.path=n,this.snap=e,this.type=Es.OVERWRITE}operationForChild(t){return yr(this.path)?new Ns(this.source,hr(),this.snap.getImmediateChild(t)):new Ns(this.source,dr(this.path),this.snap)}}
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
 */class Ss{constructor(t,n,e){this.source=t,this.path=n,this.children=e,this.type=Es.MERGE}operationForChild(t){if(yr(this.path)){const n=this.children.subtree(new cr(t));return n.isEmpty()?null:n.value?new Ns(this.source,hr(),n.value):new Ss(this.source,hr(),n)}return R(lr(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ss(this.source,dr(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class Os{constructor(t,n,e){this.node_=t,this.fullyInitialized_=n,this.filtered_=e}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(yr(t))return this.isFullyInitialized()&&!this.filtered_;const n=lr(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
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
 */class As{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function ks(t,n,e,i,r,s){const o=i.filter((t=>t.type===e));o.sort(((n,e)=>function(t,n,e){if(null==n.childName||null==e.childName)throw B("Should only compare child_ events.");const i=new Ar(n.childName,n.snapshotNode),r=new Ar(e.childName,e.snapshotNode);return t.index_.compare(i,r)}
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
 */(t,n,e))),o.forEach((e=>{const i=function(t,n,e){return"value"===n.type||"child_removed"===n.type||(n.prevName=e.getPredecessorChildName(n.childName,n.snapshotNode,t.index_)),n}(t,e,s);r.forEach((r=>{r.respondsTo(e.type)&&n.push(r.createEvent(i,t.query_))}))}))}function Rs(t,n){return{eventCache:t,serverCache:n}}function Cs(t,n,e,i){return Rs(new Os(n,e,i),t.serverCache)}function Ds(t,n,e,i){return Rs(t.eventCache,new Os(n,e,i))}function Ps(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function js(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
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
 */let Ms;class Ls{constructor(t,n=(()=>(Ms||(Ms=new jr(Di)),Ms))()){this.value=t,this.children=n}static fromObject(t){let n=new Ls(null);return Li(t,((t,e)=>{n=n.set(new cr(t),e)})),n}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(null!=this.value&&n(this.value))return{path:hr(),value:this.value};if(yr(t))return null;{const e=lr(t),i=this.children.get(e);if(null!==i){const r=i.findRootMostMatchingPathAndValue(dr(t),n);return null!=r?{path:wr(new cr(e),r.path),value:r.value}:null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(yr(t))return this;{const n=lr(t),e=this.children.get(n);return null!==e?e.subtree(dr(t)):new Ls(null)}}set(t,n){if(yr(t))return new Ls(n,this.children);{const e=lr(t),i=(this.children.get(e)||new Ls(null)).set(dr(t),n),r=this.children.insert(e,i);return new Ls(this.value,r)}}remove(t){if(yr(t))return this.children.isEmpty()?new Ls(null):new Ls(null,this.children);{const n=lr(t),e=this.children.get(n);if(e){const i=e.remove(dr(t));let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),null===this.value&&r.isEmpty()?new Ls(null):new Ls(this.value,r)}return this}}get(t){if(yr(t))return this.value;{const n=lr(t),e=this.children.get(n);return e?e.get(dr(t)):null}}setTree(t,n){if(yr(t))return n;{const e=lr(t),i=(this.children.get(e)||new Ls(null)).setTree(dr(t),n);let r;return r=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),new Ls(this.value,r)}}fold(t){return this.fold_(hr(),t)}fold_(t,n){const e={};return this.children.inorderTraversal(((i,r)=>{e[i]=r.fold_(wr(t,i),n)})),n(t,this.value,e)}findOnPath(t,n){return this.findOnPath_(t,hr(),n)}findOnPath_(t,n,e){const i=!!this.value&&e(n,this.value);if(i)return i;if(yr(t))return null;{const i=lr(t),r=this.children.get(i);return r?r.findOnPath_(dr(t),wr(n,i),e):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,hr(),n)}foreachOnPath_(t,n,e){if(yr(t))return this;{this.value&&e(n,this.value);const i=lr(t),r=this.children.get(i);return r?r.foreachOnPath_(dr(t),wr(n,i),e):new Ls(null)}}foreach(t){this.foreach_(hr(),t)}foreach_(t,n){this.children.inorderTraversal(((e,i)=>{i.foreach_(wr(t,e),n)})),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal(((n,e)=>{e.value&&t(n,e.value)}))}}
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
 */class xs{constructor(t){this.writeTree_=t}static empty(){return new xs(new Ls(null))}}function Fs(t,n,e){if(yr(n))return new xs(new Ls(e));{const i=t.writeTree_.findRootMostValueAndPath(n);if(null!=i){const r=i.path;let s=i.value;const o=gr(r,n);return s=s.updateChild(o,e),new xs(t.writeTree_.set(r,s))}{const i=new Ls(e),r=t.writeTree_.setTree(n,i);return new xs(r)}}}function Us(t,n,e){let i=t;return Li(e,((t,e)=>{i=Fs(i,wr(n,t),e)})),i}function Vs(t,n){if(yr(n))return xs.empty();{const e=t.writeTree_.setTree(n,new Ls(null));return new xs(e)}}function qs(t,n){return null!=Bs(t,n)}function Bs(t,n){const e=t.writeTree_.findRootMostValueAndPath(n);return null!=e?t.writeTree_.get(e.path).getChild(gr(e.path,n)):null}function $s(t){const n=[],e=t.writeTree_.value;return null!=e?e.isLeafNode()||e.forEachChild(Wr,((t,e)=>{n.push(new Ar(t,e))})):t.writeTree_.children.inorderTraversal(((t,e)=>{null!=e.value&&n.push(new Ar(t,e.value))})),n}function Ws(t,n){if(yr(n))return t;{const e=Bs(t,n);return new xs(null!=e?new Ls(e):t.writeTree_.subtree(n))}}function Gs(t){return t.writeTree_.isEmpty()}function Js(t,n){return zs(hr(),t.writeTree_,n)}function zs(t,n,e){if(null!=n.value)return e.updateChild(t,n.value);{let i=null;return n.children.inorderTraversal(((n,r)=>{".priority"===n?(R(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):e=zs(wr(t,n),r,e)})),e.getChild(t).isEmpty()||null===i||(e=e.updateChild(wr(t,".priority"),i)),e}}
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
 */function Hs(t,n){return so(n,t)}function Ks(t,n){if(t.snap)return _r(t.path,n);for(const e in t.children)if(t.children.hasOwnProperty(e)&&_r(wr(t.path,e),n))return!0;return!1}function Ys(t){return t.visible}function Xs(t,n,e){let i=xs.empty();for(let r=0;r<t.length;++r){const s=t[r];if(n(s)){const t=s.path;let n;if(s.snap)_r(e,t)?(n=gr(e,t),i=Fs(i,n,s.snap)):_r(t,e)&&(n=gr(t,e),i=Fs(i,hr(),s.snap.getChild(n)));else{if(!s.children)throw B("WriteRecord should have .snap or .children");if(_r(e,t))n=gr(e,t),i=Us(i,n,s.children);else if(_r(t,e))if(n=gr(t,e),yr(n))i=Us(i,hr(),s.children);else{const t=F(s.children,lr(n));if(t){const e=t.getChild(dr(n));i=Fs(i,hr(),e)}}}}}return i}function Qs(t,n,e,i,r){if(i||r){const s=Ws(t.visibleWrites,n);return!r&&Gs(s)?e:r||null!=e||qs(s,hr())?Js(Xs(t.allWrites,(function(t){return(t.visible||r)&&(!i||!~i.indexOf(t.writeId))&&(_r(t.path,n)||_r(n,t.path))}),n),e||Qr.EMPTY_NODE):null}{const i=Bs(t.visibleWrites,n);if(null!=i)return i;{const i=Ws(t.visibleWrites,n);return Gs(i)?e:null!=e||qs(i,hr())?Js(i,e||Qr.EMPTY_NODE):null}}}function Zs(t,n,e,i){return Qs(t.writeTree,t.treePath,n,e,i)}function to(t,n){return function(t,n,e){let i=Qr.EMPTY_NODE;const r=Bs(t.visibleWrites,n);if(r)return r.isLeafNode()||r.forEachChild(Wr,((t,n)=>{i=i.updateImmediateChild(t,n)})),i;if(e){const r=Ws(t.visibleWrites,n);return e.forEachChild(Wr,((t,n)=>{const e=Js(Ws(r,new cr(t)),n);i=i.updateImmediateChild(t,e)})),$s(r).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}return $s(Ws(t.visibleWrites,n)).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}(t.writeTree,t.treePath,n)}function no(t,n,e,i){return function(t,n,e,i,r){R(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=wr(n,e);if(qs(t.visibleWrites,s))return null;{const n=Ws(t.visibleWrites,s);return Gs(n)?r.getChild(e):Js(n,r.getChild(e))}}(t.writeTree,t.treePath,n,e,i)}function eo(t,n){return function(t,n){return Bs(t.visibleWrites,n)}(t.writeTree,wr(t.treePath,n))}function io(t,n,e){return function(t,n,e,i){const r=wr(n,e),s=Bs(t.visibleWrites,r);return null!=s?s:i.isCompleteForChild(e)?Js(Ws(t.visibleWrites,r),i.getNode().getImmediateChild(e)):null}(t.writeTree,t.treePath,n,e)}function ro(t,n){return so(wr(t.treePath,n),t.writeTree)}function so(t,n){return{treePath:t,writeTree:n}}
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
 */class oo{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,e=t.childName;R("child_added"===n||"child_changed"===n||"child_removed"===n,"Only child changes supported for tracking"),R(".priority"!==e,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(e);if(i){const r=i.type;if("child_added"===n&&"child_removed"===r)this.changeMap.set(e,os(e,t.snapshotNode,i.snapshotNode));else if("child_removed"===n&&"child_added"===r)this.changeMap.delete(e);else if("child_removed"===n&&"child_changed"===r)this.changeMap.set(e,ss(e,i.oldSnap));else if("child_changed"===n&&"child_added"===r)this.changeMap.set(e,rs(e,t.snapshotNode));else{if("child_changed"!==n||"child_changed"!==r)throw B("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(e,os(e,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(e,t)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const uo=new class{getCompleteChild(t){return null}getChildAfterChild(t,n,e){return null}};class ao{constructor(t,n,e=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=e}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const n=null!=this.optCompleteServerCache_?new Os(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return io(this.writes_,t,n)}}getChildAfterChild(t,n,e){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:js(this.viewCache_),r=function(t,n,e,i,r,s){return function(t,n,e,i,r,s,o){let u;const a=Ws(t.visibleWrites,n),c=Bs(a,hr());if(null!=c)u=c;else{if(null==e)return[];u=Js(a,e)}if(u=u.withIndex(o),u.isEmpty()||u.isLeafNode())return[];{const t=[],n=o.getCompare(),e=s?u.getReverseIteratorFrom(i,o):u.getIteratorFrom(i,o);let a=e.getNext();for(;a&&t.length<r;)0!==n(a,i)&&t.push(a),a=e.getNext();return t}}(t.writeTree,t.treePath,n,e,i,r,s)}(this.writes_,i,n,1,e,t);return 0===r.length?null:r[0]}}
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
 */function co(t,n,e,i,r,s){const o=n.eventCache;if(null!=eo(i,e))return n;{let u,a;if(yr(e))if(R(n.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),n.serverCache.isFiltered()){const e=js(n),r=to(i,e instanceof Qr?e:Qr.EMPTY_NODE);u=t.filter.updateFullNode(n.eventCache.getNode(),r,s)}else{const e=Zs(i,js(n));u=t.filter.updateFullNode(n.eventCache.getNode(),e,s)}else{const c=lr(e);if(".priority"===c){R(1===fr(e),"Can't have a priority with additional path components");const r=o.getNode();a=n.serverCache.getNode();const s=no(i,e,r,a);u=null!=s?t.filter.updatePriority(r,s):o.getNode()}else{const h=dr(e);let l;if(o.isCompleteForChild(c)){a=n.serverCache.getNode();const t=no(i,e,o.getNode(),a);l=null!=t?o.getNode().getImmediateChild(c).updateChild(h,t):o.getNode().getImmediateChild(c)}else l=io(i,c,n.serverCache);u=null!=l?t.filter.updateChild(o.getNode(),c,l,h,r,s):o.getNode()}}return Cs(n,u,o.isFullyInitialized()||yr(e),t.filter.filtersNodes())}}function ho(t,n,e,i,r,s,o,u){const a=n.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(yr(e))c=h.updateFullNode(a.getNode(),i,null);else if(h.filtersNodes()&&!a.isFiltered()){const t=a.getNode().updateChild(e,i);c=h.updateFullNode(a.getNode(),t,null)}else{const t=lr(e);if(!a.isCompleteForPath(e)&&fr(e)>1)return n;const r=dr(e),s=a.getNode().getImmediateChild(t).updateChild(r,i);c=".priority"===t?h.updatePriority(a.getNode(),s):h.updateChild(a.getNode(),t,s,r,uo,null)}const l=Ds(n,c,a.isFullyInitialized()||yr(e),h.filtersNodes());return co(t,l,e,r,new ao(r,l,s),u)}function lo(t,n,e,i,r,s,o){const u=n.eventCache;let a,c;const h=new ao(r,n,s);if(yr(e))c=t.filter.updateFullNode(n.eventCache.getNode(),i,o),a=Cs(n,c,!0,t.filter.filtersNodes());else{const r=lr(e);if(".priority"===r)c=t.filter.updatePriority(n.eventCache.getNode(),i),a=Cs(n,c,u.isFullyInitialized(),u.isFiltered());else{const s=dr(e),c=u.getNode().getImmediateChild(r);let l;if(yr(s))l=i;else{const t=h.getCompleteChild(r);l=null!=t?".priority"===pr(s)&&t.getChild(mr(s)).isEmpty()?t:t.updateChild(s,i):Qr.EMPTY_NODE}a=c.equals(l)?n:Cs(n,t.filter.updateChild(u.getNode(),r,l,s,h,o),u.isFullyInitialized(),t.filter.filtersNodes())}}return a}function fo(t,n){return t.eventCache.isCompleteForChild(n)}function po(t,n,e){return e.foreach(((t,e)=>{n=n.updateChild(t,e)})),n}function vo(t,n,e,i,r,s,o,u){if(n.serverCache.getNode().isEmpty()&&!n.serverCache.isFullyInitialized())return n;let a,c=n;a=yr(e)?i:new Ls(null).setTree(e,i);const h=n.serverCache.getNode();return a.children.inorderTraversal(((e,i)=>{if(h.hasChild(e)){const a=po(0,n.serverCache.getNode().getImmediateChild(e),i);c=ho(t,c,new cr(e),a,r,s,o,u)}})),a.children.inorderTraversal(((e,i)=>{const a=!n.serverCache.isCompleteForChild(e)&&void 0===i.value;if(!h.hasChild(e)&&!a){const a=po(0,n.serverCache.getNode().getImmediateChild(e),i);c=ho(t,c,new cr(e),a,r,s,o,u)}})),c}
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
class mo{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const e=this.query_._queryParams,i=new us(e.getIndex()),r=(s=e).loadsAllData()?new us(s.getIndex()):s.hasLimit()?new cs(s):new as(s);var s;this.processor_=function(t){return{filter:t}}(r);const o=n.serverCache,u=n.eventCache,a=i.updateFullNode(Qr.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Qr.EMPTY_NODE,u.getNode(),null),h=new Os(a,o.isFullyInitialized(),i.filtersNodes()),l=new Os(c,u.isFullyInitialized(),r.filtersNodes());this.viewCache_=Rs(l,h),this.eventGenerator_=new As(this.query_)}get query(){return this.query_}}function wo(t,n){const e=js(t.viewCache_);return e&&(t.query._queryParams.loadsAllData()||!yr(n)&&!e.getImmediateChild(lr(n)).isEmpty())?e.getChild(n):null}function yo(t){return 0===t.eventRegistrations_.length}function go(t,n,e){const i=[];if(e){R(null==n,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach((t=>{const n=t.createCancelEvent(e,r);n&&i.push(n)}))}if(n){let e=[];for(let i=0;i<t.eventRegistrations_.length;++i){const r=t.eventRegistrations_[i];if(r.matches(n)){if(n.hasAnyCallback()){e=e.concat(t.eventRegistrations_.slice(i+1));break}}else e.push(r)}t.eventRegistrations_=e}else t.eventRegistrations_=[];return i}function bo(t,n,e,i){n.type===Es.MERGE&&null!==n.source.queryId&&(R(js(t.viewCache_),"We should always have a full cache before handling merges"),R(Ps(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=function(t,n,e,i,r){const s=new oo;let o,u;if(e.type===Es.OVERWRITE){const a=e;a.source.fromUser?o=lo(t,n,a.path,a.snap,i,r,s):(R(a.source.fromServer,"Unknown source."),u=a.source.tagged||n.serverCache.isFiltered()&&!yr(a.path),o=ho(t,n,a.path,a.snap,i,r,u,s))}else if(e.type===Es.MERGE){const a=e;a.source.fromUser?o=function(t,n,e,i,r,s,o){let u=n;return i.foreach(((i,a)=>{const c=wr(e,i);fo(n,lr(c))&&(u=lo(t,u,c,a,r,s,o))})),i.foreach(((i,a)=>{const c=wr(e,i);fo(n,lr(c))||(u=lo(t,u,c,a,r,s,o))})),u}(t,n,a.path,a.children,i,r,s):(R(a.source.fromServer,"Unknown source."),u=a.source.tagged||n.serverCache.isFiltered(),o=vo(t,n,a.path,a.children,i,r,u,s))}else if(e.type===Es.ACK_USER_WRITE){const u=e;o=u.revert?function(t,n,e,i,r,s){let o;if(null!=eo(i,e))return n;{const u=new ao(i,n,r),a=n.eventCache.getNode();let c;if(yr(e)||".priority"===lr(e)){let e;if(n.serverCache.isFullyInitialized())e=Zs(i,js(n));else{const t=n.serverCache.getNode();R(t instanceof Qr,"serverChildren would be complete if leaf node"),e=to(i,t)}e=e,c=t.filter.updateFullNode(a,e,s)}else{const r=lr(e);let h=io(i,r,n.serverCache);null==h&&n.serverCache.isCompleteForChild(r)&&(h=a.getImmediateChild(r)),c=null!=h?t.filter.updateChild(a,r,h,dr(e),u,s):n.eventCache.getNode().hasChild(r)?t.filter.updateChild(a,r,Qr.EMPTY_NODE,dr(e),u,s):a,c.isEmpty()&&n.serverCache.isFullyInitialized()&&(o=Zs(i,js(n)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=n.serverCache.isFullyInitialized()||null!=eo(i,hr()),Cs(n,c,o,t.filter.filtersNodes())}}(t,n,u.path,i,r,s):function(t,n,e,i,r,s,o){if(null!=eo(r,e))return n;const u=n.serverCache.isFiltered(),a=n.serverCache;if(null!=i.value){if(yr(e)&&a.isFullyInitialized()||a.isCompleteForPath(e))return ho(t,n,e,a.getNode().getChild(e),r,s,u,o);if(yr(e)){let i=new Ls(null);return a.getNode().forEachChild(Cr,((t,n)=>{i=i.set(new cr(t),n)})),vo(t,n,e,i,r,s,u,o)}return n}{let c=new Ls(null);return i.foreach((t=>{const n=wr(e,t);a.isCompleteForPath(n)&&(c=c.set(t,a.getNode().getChild(n)))})),vo(t,n,e,c,r,s,u,o)}}(t,n,u.path,u.affectedTree,i,r,s)}else{if(e.type!==Es.LISTEN_COMPLETE)throw B("Unknown operation type: "+e.type);o=function(t,n,e,i,r){const s=n.serverCache;return co(t,Ds(n,s.getNode(),s.isFullyInitialized()||yr(e),s.isFiltered()),e,i,uo,r)}(t,n,e.path,i,s)}const a=s.getChanges();return function(t,n,e){const i=n.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Ps(t);(e.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&e.push(is(Ps(n)))}}(n,o,a),{viewCache:o,changes:a}}(t.processor_,r,n,e,i);var o,u;return o=t.processor_,R((u=s.viewCache).eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),R(u.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),R(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Eo(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Eo(t,n,e,i){return function(t,n,e,i){const r=[],s=[];return n.forEach((n=>{"child_changed"===n.type&&t.index_.indexedValueChanged(n.oldSnap,n.snapshotNode)&&s.push({type:"child_moved",snapshotNode:n.snapshotNode,childName:n.childName})})),ks(t,r,"child_removed",n,i,e),ks(t,r,"child_added",n,i,e),ks(t,r,"child_moved",s,i,e),ks(t,r,"child_changed",n,i,e),ks(t,r,"value",n,i,e),r}(t.eventGenerator_,n,e,i?[i]:t.eventRegistrations_)}
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
 */let _o,Io;class To{constructor(){this.views=new Map}}function No(t,n,e,i){const r=n.source.queryId;if(null!==r){const s=t.views.get(r);return R(null!=s,"SyncTree gave us an op for an invalid query."),bo(s,n,e,i)}{let r=[];for(const s of t.views.values())r=r.concat(bo(s,n,e,i));return r}}function So(t){const n=[];for(const e of t.views.values())e.query._queryParams.loadsAllData()||n.push(e);return n}function Oo(t,n){let e=null;for(const i of t.views.values())e=e||wo(i,n);return e}function Ao(t,n){return n._queryParams.loadsAllData()?Co(t):t.views.get(n._queryIdentifier)}function ko(t,n){return null!=Ao(t,n)}function Ro(t){return null!=Co(t)}function Co(t){for(const n of t.views.values())if(n.query._queryParams.loadsAllData())return n;return null}
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
 */let Do=1;class Po{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ls(null),this.pendingWriteTree_={visibleWrites:xs.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jo(t,n,e,i,r){return function(t,n,e,i,r){R(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),t.allWrites.push({path:n,snap:e,writeId:i,visible:r}),r&&(t.visibleWrites=Fs(t.visibleWrites,n,e)),t.lastWriteId=i}(t.pendingWriteTree_,n,e,i,r),r?Vo(t,new Ns({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},n,e)):[]}function Mo(t,n,e=!1){const i=function(t,n){for(let e=0;e<t.allWrites.length;e++){const i=t.allWrites[e];if(i.writeId===n)return i}return null}(t.pendingWriteTree_,n);if(function(t,n){const e=t.allWrites.findIndex((t=>t.writeId===n));R(e>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[e];t.allWrites.splice(e,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const n=t.allWrites[o];n.visible&&(o>=e&&Ks(n,i.path)?r=!1:_r(i.path,n.path)&&(s=!0)),o--}return!!r&&(s?(function(t){t.visibleWrites=Xs(t.allWrites,Ys,hr()),t.lastWriteId=t.allWrites.length>0?t.allWrites[t.allWrites.length-1].writeId:-1}(t),!0):(i.snap?t.visibleWrites=Vs(t.visibleWrites,i.path):Li(i.children,(n=>{t.visibleWrites=Vs(t.visibleWrites,wr(i.path,n))})),!0))}(t.pendingWriteTree_,n)){let n=new Ls(null);return null!=i.snap?n=n.set(hr(),!0):Li(i.children,(t=>{n=n.set(new cr(t),!0)})),Vo(t,new Is(i.path,n,e))}return[]}function Lo(t,n,e){return Vo(t,new Ns({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},n,e))}function xo(t,n,e,i){const r=n._path,s=t.syncPointTree_.get(r);let o=[];if(s&&("default"===n._queryIdentifier||ko(s,n))){const u=function(t,n,e,i){const r=n._queryIdentifier,s=[];let o=[];const u=Ro(t);if("default"===r)for(const[n,r]of t.views.entries())o=o.concat(go(r,e,i)),yo(r)&&(t.views.delete(n),r.query._queryParams.loadsAllData()||s.push(r.query));else{const n=t.views.get(r);n&&(o=o.concat(go(n,e,i)),yo(n)&&(t.views.delete(r),n.query._queryParams.loadsAllData()||s.push(n.query)))}return u&&!Ro(t)&&s.push(new(R(_o,"Reference.ts has not been loaded"),_o)(n._repo,n._path)),{removed:s,events:o}}(s,n,e,i);0===s.views.size&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=u.removed;o=u.events;const c=-1!==a.findIndex((t=>t._queryParams.loadsAllData())),h=t.syncPointTree_.findOnPath(r,((t,n)=>Ro(n)));if(c&&!h){const n=t.syncPointTree_.subtree(r);if(!n.isEmpty()){const e=function(t){return t.fold(((t,n,e)=>{if(n&&Ro(n))return[Co(n)];{let t=[];return n&&(t=So(n)),Li(e,((n,e)=>{t=t.concat(e)})),t}}))}(n);for(let n=0;n<e.length;++n){const i=e[n],r=i.query,s=$o(t,i);t.listenProvider_.startListening(Ko(r),Wo(t,r),s.hashFn,s.onComplete)}}}if(!h&&a.length>0&&!i)if(c){const e=null;t.listenProvider_.stopListening(Ko(n),e)}else a.forEach((n=>{const e=t.queryToTagMap.get(Go(n));t.listenProvider_.stopListening(Ko(n),e)}));!function(t,n){for(let e=0;e<n.length;++e){const i=n[e];if(!i._queryParams.loadsAllData()){const n=Go(i),e=t.queryToTagMap.get(n);t.queryToTagMap.delete(n),t.tagToQueryMap.delete(e)}}}(t,a)}return o}function Fo(t,n,e){const i=n._path;let r=null,s=!1;t.syncPointTree_.foreachOnPath(i,((t,n)=>{const e=gr(t,i);r=r||Oo(n,e),s=s||Ro(n)}));let o,u=t.syncPointTree_.get(i);u?(s=s||Ro(u),r=r||Oo(u,hr())):(u=new To,t.syncPointTree_=t.syncPointTree_.set(i,u)),null!=r?o=!0:(o=!1,r=Qr.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild(((t,n)=>{const e=Oo(n,hr());e&&(r=r.updateImmediateChild(t,e))})));const a=ko(u,n);if(!a&&!n._queryParams.loadsAllData()){const e=Go(n);R(!t.queryToTagMap.has(e),"View does not exist, but we have a tag");const i=Do++;t.queryToTagMap.set(e,i),t.tagToQueryMap.set(i,e)}let c=function(t,n,e,i,r,s){const o=function(t,n,e,i,r){const s=t.views.get(n._queryIdentifier);if(!s){let t=Zs(e,r?i:null),s=!1;t?s=!0:i instanceof Qr?(t=to(e,i),s=!1):(t=Qr.EMPTY_NODE,s=!1);const o=Rs(new Os(t,s,!1),new Os(i,r,!1));return new mo(n,o)}return s}(t,n,i,r,s);return t.views.has(n._queryIdentifier)||t.views.set(n._queryIdentifier,o),function(t,n){t.eventRegistrations_.push(n)}(o,e),function(t,n){const e=t.viewCache_.eventCache,i=[];return e.getNode().isLeafNode()||e.getNode().forEachChild(Wr,((t,n)=>{i.push(rs(t,n))})),e.isFullyInitialized()&&i.push(is(e.getNode())),Eo(t,i,e.getNode(),n)}(o,e)}(u,n,e,Hs(t.pendingWriteTree_,i),r,o);if(!a&&!s){const e=Ao(u,n);c=c.concat(function(t,n,e){const i=n._path,r=Wo(t,n),s=$o(t,e),o=t.listenProvider_.startListening(Ko(n),r,s.hashFn,s.onComplete),u=t.syncPointTree_.subtree(i);if(r)R(!Ro(u.value),"If we're adding a query, it shouldn't be shadowed");else{const n=u.fold(((t,n,e)=>{if(!yr(t)&&n&&Ro(n))return[Co(n).query];{let t=[];return n&&(t=t.concat(So(n).map((t=>t.query)))),Li(e,((n,e)=>{t=t.concat(e)})),t}}));for(let e=0;e<n.length;++e){const i=n[e];t.listenProvider_.stopListening(Ko(i),Wo(t,i))}}return o}
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
 */(t,n,e))}return c}function Uo(t,n,e){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(n,((t,e)=>{const i=Oo(e,gr(t,n));if(i)return i}));return Qs(i,n,r,e,!0)}function Vo(t,n){return qo(n,t.syncPointTree_,null,Hs(t.pendingWriteTree_,hr()))}function qo(t,n,e,i){if(yr(t.path))return Bo(t,n,e,i);{const r=n.get(hr());null==e&&null!=r&&(e=Oo(r,hr()));let s=[];const o=lr(t.path),u=t.operationForChild(o),a=n.children.get(o);if(a&&u){const t=e?e.getImmediateChild(o):null,n=ro(i,o);s=s.concat(qo(u,a,t,n))}return r&&(s=s.concat(No(r,t,i,e))),s}}function Bo(t,n,e,i){const r=n.get(hr());null==e&&null!=r&&(e=Oo(r,hr()));let s=[];return n.children.inorderTraversal(((n,r)=>{const o=e?e.getImmediateChild(n):null,u=ro(i,n),a=t.operationForChild(n);a&&(s=s.concat(Bo(a,r,o,u)))})),r&&(s=s.concat(No(r,t,i,e))),s}function $o(t,n){const e=n.query,i=Wo(t,e);return{hashFn:()=>(function(t){return t.viewCache_.serverCache.getNode()}(n)||Qr.EMPTY_NODE).hash(),onComplete:n=>{if("ok"===n)return i?function(t,n,e){const i=Jo(t,e);if(i){const e=zo(i),r=e.path,s=e.queryId,o=gr(r,n);return Ho(t,r,new Ts(_s(s),o))}return[]}(t,e._path,i):function(t,n){return Vo(t,new Ts({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},n))}(t,e._path);{const i=function(t,n){let e="Unknown Error";"too_big"===t?e="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?e="Client doesn't have permission to access the desired data.":"unavailable"===t&&(e="The service is unavailable");const i=new Error(t+" at "+n._path.toString()+": "+e);return i.code=t.toUpperCase(),i}(n,e);return xo(t,e,null,i)}}}}function Wo(t,n){const e=Go(n);return t.queryToTagMap.get(e)}function Go(t){return t._path.toString()+"$"+t._queryIdentifier}function Jo(t,n){return t.tagToQueryMap.get(n)}function zo(t){const n=t.indexOf("$");return R(-1!==n&&n<t.length-1,"Bad queryKey."),{queryId:t.substr(n+1),path:new cr(t.substr(0,n))}}function Ho(t,n,e){const i=t.syncPointTree_.get(n);return R(i,"Missing sync point for query tag that we're tracking"),No(i,e,Hs(t.pendingWriteTree_,n),null)}function Ko(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(R(Io,"Reference.ts has not been loaded"),Io)(t._repo,t._path):t}class Yo{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Yo(n)}node(){return this.node_}}class Xo{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=wr(this.path_,t);return new Xo(this.syncTree_,n)}node(){return Uo(this.syncTree_,this.path_)}}const Qo=function(t,n,e){return t&&"object"==typeof t?(R(".sv"in t,"Unexpected leaf node or priority contents"),"string"==typeof t[".sv"]?Zo(t[".sv"],n,e):"object"==typeof t[".sv"]?tu(t[".sv"],n):void R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Zo=function(t,n,e){switch(t){case"timestamp":return e.timestamp;default:R(!1,"Unexpected server value: "+t)}},tu=function(t,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const e=t.increment;"number"!=typeof e&&R(!1,"Unexpected increment value: "+e);const i=n.node();if(R(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return e;const r=i.getValue();return"number"!=typeof r?e:r+e},nu=function(t,n,e){return eu(t,new Yo(n),e)};function eu(t,n,e){const i=t.getPriority().val(),r=Qo(i,n.getImmediateChild(".priority"),e);let s;if(t.isLeafNode()){const i=t,s=Qo(i.getValue(),n,e);return s!==i.getValue()||r!==i.getPriority().val()?new $r(s,ts(r)):t}{const i=t;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new $r(r))),i.forEachChild(Wr,((t,i)=>{const r=eu(i,n.getImmediateChild(t),e);r!==i&&(s=s.updateImmediateChild(t,r))})),s}}
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
 */class iu{constructor(t="",n=null,e={children:{},childCount:0}){this.name=t,this.parent=n,this.node=e}}function ru(t,n){let e=n instanceof cr?n:new cr(n),i=t,r=lr(e);for(;null!==r;){const t=F(i.node.children,r)||{children:{},childCount:0};i=new iu(r,i,t),e=dr(e),r=lr(e)}return i}function su(t){return t.node.value}function ou(t,n){t.node.value=n,lu(t)}function uu(t){return t.node.childCount>0}function au(t,n){Li(t.node.children,((e,i)=>{n(new iu(e,t,i))}))}function cu(t,n,e,i){e&&!i&&n(t),au(t,(t=>{cu(t,n,!0,i)})),e&&i&&n(t)}function hu(t){return new cr(null===t.parent?t.name:hu(t.parent)+"/"+t.name)}function lu(t){null!==t.parent&&function(t,n,e){const i=function(t){return void 0===su(t)&&!uu(t)}(e),r=M(t.node.children,n);i&&r?(delete t.node.children[n],t.node.childCount--,lu(t)):i||r||(t.node.children[n]=e.node,t.node.childCount++,lu(t))}
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
 */(t.parent,t.name,t)}const fu=/[\[\].#$\/\u0000-\u001F\u007F]/,du=/[\[\].#$\u0000-\u001F\u007F]/,pu=function(t){return"string"==typeof t&&0!==t.length&&!fu.test(t)},vu=function(t){return"string"==typeof t&&0!==t.length&&!du.test(t)},mu=function(t){return null===t||"string"==typeof t||"number"==typeof t&&!Ai(t)||t&&"object"==typeof t&&M(t,".sv")},wu=function(t,n,e,i){i&&void 0===n||yu(q(t,"value"),n,e)},yu=function(t,n,e){const i=e instanceof cr?new Ir(e,t):e;if(void 0===n)throw new Error(t+"contains undefined "+Nr(i));if("function"==typeof n)throw new Error(t+"contains a function "+Nr(i)+" with contents = "+n.toString());if(Ai(n))throw new Error(t+"contains "+n.toString()+" "+Nr(i));if("string"==typeof n&&n.length>10485760/3&&V(n)>10485760)throw new Error(t+"contains a string greater than 10485760 utf8 bytes "+Nr(i)+" ('"+n.substring(0,50)+"...')");if(n&&"object"==typeof n){let e=!1,r=!1;if(Li(n,((n,s)=>{if(".value"===n)e=!0;else if(".priority"!==n&&".sv"!==n&&(r=!0,!pu(n)))throw new Error(t+" contains an invalid key ("+n+") "+Nr(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(t,n){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(n),t.byteLength_+=V(n),Tr(t)}(i,n),yu(t,s,i),function(t){const n=t.parts_.pop();t.byteLength_-=V(n),t.parts_.length>0&&(t.byteLength_-=1)}(i)})),e&&r)throw new Error(t+' contains ".value" child '+Nr(i)+" in addition to actual children.")}},gu=function(t,n,e,i){if(!(i&&void 0===e||vu(e)))throw new Error(q(t,n)+'was an invalid path = "'+e+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},bu=function(t,n){if(".info"===lr(n))throw new Error(t+" failed = Can't modify data under /.info/")};
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
class Eu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _u(t,n){let e=null;for(let i=0;i<n.length;i++){const r=n[i],s=r.getPath();null===e||Er(s,e.path)||(t.eventLists_.push(e),e=null),null===e&&(e={events:[],path:s}),e.events.push(r)}e&&t.eventLists_.push(e)}function Iu(t,n,e){_u(t,e),Nu(t,(t=>Er(t,n)))}function Tu(t,n,e){_u(t,e),Nu(t,(t=>_r(t,n)||_r(n,t)))}function Nu(t,n){t.recursionDepth_++;let e=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];r&&(n(r.path)?(Su(t.eventLists_[i]),t.eventLists_[i]=null):e=!1)}e&&(t.eventLists_=[]),t.recursionDepth_--}function Su(t){for(let n=0;n<t.events.length;n++){const e=t.events[n];if(null!==e){t.events[n]=null;const i=e.getEventRunner();Ei&&Ii("event: "+e.toString()),Vi(i)}}}
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
 */class Ou{constructor(t,n,e,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=e,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Eu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vs(),this.transactionQueueTree_=new iu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Au(t,n,e){if(t.stats_=Xi(t.repoInfo_),t.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)t.server_=new ds(t.repoInfo_,((n,e,i,r)=>{Cu(t,n,e,i,r)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>Du(t,!0)),0);else{if(null!=e){if("object"!=typeof e)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{P(e)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}t.persistentConnection_=new Or(t.repoInfo_,n,((n,e,i,r)=>{Cu(t,n,e,i,r)}),(n=>{Du(t,n)}),(n=>{!function(t,n){Li(n,((n,e)=>{Pu(t,n,e)}))}(t,n)}),t.authTokenProvider_,t.appCheckProvider_,e),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((n=>{t.server_.refreshAuthToken(n)})),t.appCheckProvider_.addTokenChangeListener((n=>{t.server_.refreshAppCheckToken(n.token)})),t.statsReporter_=function(n){const e=n.toString();return Yi[e]||(Yi[e]=new bs(t.stats_,t.server_)),Yi[e]}(t.repoInfo_),t.infoData_=new ps,t.infoSyncTree_=new Po({startListening:(n,e,i,r)=>{let s=[];const o=t.infoData_.getNode(n._path);return o.isEmpty()||(s=Lo(t.infoSyncTree_,n._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Pu(t,"connected",!1),t.serverSyncTree_=new Po({startListening:(n,e,i,r)=>(t.server_.listen(n,i,e,((e,i)=>{const s=r(e,i);Tu(t.eventQueue_,n._path,s)})),[]),stopListening:(n,e)=>{t.server_.unlisten(n,e)}})}function ku(t){const n=t.infoData_.getNode(new cr(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+n}function Ru(t){return(n=(n={timestamp:ku(t)})||{}).timestamp=n.timestamp||(new Date).getTime(),n;var n}function Cu(t,n,e,i,r){t.dataUpdateCount++;const s=new cr(n);e=t.interceptServerDataCallback_?t.interceptServerDataCallback_(n,e):e;let o=[];if(r)if(i){const n=U(e,(t=>ts(t)));o=function(t,n,e,i){const r=Jo(t,i);if(r){const i=zo(r),s=i.path,o=i.queryId,u=gr(s,n),a=Ls.fromObject(e);return Ho(t,s,new Ss(_s(o),u,a))}return[]}(t.serverSyncTree_,s,n,r)}else{const n=ts(e);o=function(t,n,e,i){const r=Jo(t,i);if(null!=r){const i=zo(r),s=i.path,o=i.queryId,u=gr(s,n);return Ho(t,s,new Ns(_s(o),u,e))}return[]}(t.serverSyncTree_,s,n,r)}else if(i){const n=U(e,(t=>ts(t)));o=function(t,n,e){const i=Ls.fromObject(e);return Vo(t,new Ss({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},n,i))}(t.serverSyncTree_,s,n)}else{const n=ts(e);o=Lo(t.serverSyncTree_,s,n)}let u=s;o.length>0&&(u=Bu(t,s)),Tu(t.eventQueue_,u,o)}function Du(t,n){Pu(t,"connected",n),!1===n&&function(t){Fu(t,"onDisconnectEvents");const n=Ru(t),e=vs();ys(t.onDisconnect_,hr(),((i,r)=>{const s=function(t,n,e,i){return eu(n,new Xo(e,t),i)}(i,r,t.serverSyncTree_,n);ms(e,i,s)}));let i=[];ys(e,hr(),((n,e)=>{i=i.concat(Lo(t.serverSyncTree_,n,e));const r=zu(t,n);Bu(t,r)})),t.onDisconnect_=vs(),Tu(t.eventQueue_,hr(),i)}(t)}function Pu(t,n,e){const i=new cr("/.info/"+n),r=ts(e);t.infoData_.updateSnapshot(i,r);const s=Lo(t.infoSyncTree_,i,r);Tu(t.eventQueue_,i,s)}function ju(t){return t.nextWriteId_++}function Mu(t,n,e){t.server_.onDisconnectCancel(n.toString(),((i,r)=>{"ok"===i&&ws(t.onDisconnect_,n),Uu(0,e,i,r)}))}function Lu(t,n,e,i){const r=ts(e);t.server_.onDisconnectPut(n.toString(),r.val(!0),((e,s)=>{"ok"===e&&ms(t.onDisconnect_,n,r),Uu(0,i,e,s)}))}function xu(t,n,e){let i;i=".info"===lr(n._path)?xo(t.infoSyncTree_,n,e):xo(t.serverSyncTree_,n,e),Iu(t.eventQueue_,n._path,i)}function Fu(t,...n){let e="";t.persistentConnection_&&(e=t.persistentConnection_.id+":"),Ii(e,...n)}function Uu(t,n,e,i){n&&Vi((()=>{if("ok"===e)n(null);else{const t=(e||"error").toUpperCase();let r=t;i&&(r+=": "+i);const s=new Error(r);s.code=t,n(s)}}))}function Vu(t,n,e){return Uo(t.serverSyncTree_,n,e)||Qr.EMPTY_NODE}function qu(t,n=t.transactionQueueTree_){if(n||Ju(t,n),su(n)){const e=Wu(t,n);R(e.length>0,"Sending zero length transaction queue"),e.every((t=>0===t.status))&&function(t,n,e){const i=e.map((t=>t.currentWriteId)),r=Vu(t,n,i);let s=r;const o=r.hash();for(let t=0;t<e.length;t++){const i=e[t];R(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=gr(n,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const u=s.val(!0),a=n;t.server_.put(a.toString(),u,(i=>{Fu(t,"transaction put response",{path:a.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let n=0;n<e.length;n++)e[n].status=2,r=r.concat(Mo(t.serverSyncTree_,e[n].currentWriteId)),e[n].onComplete&&i.push((()=>e[n].onComplete(null,!0,e[n].currentOutputSnapshotResolved))),e[n].unwatcher();Ju(t,ru(t.transactionQueueTree_,n)),qu(t,t.transactionQueueTree_),Tu(t.eventQueue_,n,r);for(let t=0;t<i.length;t++)Vi(i[t])}else{if("datastale"===i)for(let t=0;t<e.length;t++)e[t].status=3===e[t].status?4:0;else{Oi("transaction at "+a.toString()+" failed: "+i);for(let t=0;t<e.length;t++)e[t].status=4,e[t].abortReason=i}Bu(t,n)}}),o)}(t,hu(n),e)}else uu(n)&&au(n,(n=>{qu(t,n)}))}function Bu(t,n){const e=$u(t,n),i=hu(e);return function(t,n,e){if(0===n.length)return;const i=[];let r=[];const s=n.filter((t=>0===t.status)).map((t=>t.currentWriteId));for(let o=0;o<n.length;o++){const u=n[o],a=gr(e,u.path);let c,h=!1;if(R(null!==a,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)h=!0,c=u.abortReason,r=r.concat(Mo(t.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)h=!0,c="maxretry",r=r.concat(Mo(t.serverSyncTree_,u.currentWriteId,!0));else{const e=Vu(t,u.path,s);u.currentInputSnapshot=e;const i=n[o].update(e.val());if(void 0!==i){yu("transaction failed: Data returned ",i,u.path);let n=ts(i);"object"==typeof i&&null!=i&&M(i,".priority")||(n=n.updatePriority(e.getPriority()));const o=u.currentWriteId,a=Ru(t),c=nu(n,e,a);u.currentOutputSnapshotRaw=n,u.currentOutputSnapshotResolved=c,u.currentWriteId=ju(t),s.splice(s.indexOf(o),1),r=r.concat(jo(t.serverSyncTree_,u.path,c,u.currentWriteId,u.applyLocally)),r=r.concat(Mo(t.serverSyncTree_,o,!0))}else h=!0,c="nodata",r=r.concat(Mo(t.serverSyncTree_,u.currentWriteId,!0))}Tu(t.eventQueue_,e,r),r=[],h&&(n[o].status=2,setTimeout(n[o].unwatcher,Math.floor(0)),n[o].onComplete&&i.push("nodata"===c?()=>n[o].onComplete(null,!1,n[o].currentInputSnapshot):()=>n[o].onComplete(new Error(c),!1,null)))}Ju(t,t.transactionQueueTree_);for(let t=0;t<i.length;t++)Vi(i[t]);qu(t,t.transactionQueueTree_)}(t,Wu(t,e),i),i}function $u(t,n){let e,i=t.transactionQueueTree_;for(e=lr(n);null!==e&&void 0===su(i);)i=ru(i,e),e=lr(n=dr(n));return i}function Wu(t,n){const e=[];return Gu(t,n,e),e.sort(((t,n)=>t.order-n.order)),e}function Gu(t,n,e){const i=su(n);if(i)for(let t=0;t<i.length;t++)e.push(i[t]);au(n,(n=>{Gu(t,n,e)}))}function Ju(t,n){const e=su(n);if(e){let t=0;for(let n=0;n<e.length;n++)2!==e[n].status&&(e[t]=e[n],t++);e.length=t,ou(n,e.length>0?e:void 0)}au(n,(n=>{Ju(t,n)}))}function zu(t,n){const e=hu($u(t,n)),i=ru(t.transactionQueueTree_,n);return function(t,n){let e=t.parent;for(;null!==e;){if(n(e))return!0;e=e.parent}}(i,(n=>{Hu(t,n)})),Hu(t,i),cu(i,(n=>{Hu(t,n)})),e}function Hu(t,n){const e=su(n);if(e){const i=[];let r=[],s=-1;for(let n=0;n<e.length;n++)3===e[n].status||(1===e[n].status?(R(s===n-1,"All SENT items should be at beginning of queue."),s=n,e[n].status=3,e[n].abortReason="set"):(R(0===e[n].status,"Unexpected transaction status in abort"),e[n].unwatcher(),r=r.concat(Mo(t.serverSyncTree_,e[n].currentWriteId,!0)),e[n].onComplete&&i.push(e[n].onComplete.bind(null,new Error("set"),!1,null))));-1===s?ou(n,void 0):e.length=s+1,Tu(t.eventQueue_,hu(n),r);for(let t=0;t<i.length;t++)Vi(i[t])}}
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
 */const Ku=function(t,n){const e=Yu(t),i=e.namespace;return"firebase.com"===e.domain&&Si(e.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===e.domain||Si("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),e.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Oi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."),{repoInfo:new Ji(e.host,e.secure,i,"ws"===e.scheme||"wss"===e.scheme,n,"",i!==e.subdomain),path:new cr(e.pathString)}},Yu=function(t){let n="",e="",i="",r="",s="",o=!0,u="https",a=443;if("string"==typeof t){let c=t.indexOf("//");c>=0&&(u=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");-1===h&&(h=t.length);let l=t.indexOf("?");-1===l&&(l=t.length),n=t.substring(0,Math.min(h,l)),h<l&&(r=function(t){let n="";const e=t.split("/");for(let t=0;t<e.length;t++)if(e[t].length>0){let i=e[t];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}n+="/"+i}return n}(t.substring(h,l)));const f=function(t){const n={};"?"===t.charAt(0)&&(t=t.substring(1));for(const e of t.split("&")){if(0===e.length)continue;const i=e.split("=");2===i.length?n[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Oi(`Invalid query segment '${e}' in query '${t}'`)}return n}(t.substring(Math.min(t.length,l)));c=n.indexOf(":"),c>=0?(o="https"===u||"wss"===u,a=parseInt(n.substring(c+1),10)):c=n.length;const d=n.slice(0,c);if("localhost"===d.toLowerCase())e="localhost";else if(d.split(".").length<=2)e=d;else{const t=n.indexOf(".");i=n.substring(0,t).toLowerCase(),e=n.substring(t+1),s=i}"ns"in f&&(s=f.ns)}return{host:n,port:a,domain:e,subdomain:i,secure:o,scheme:u,pathString:r,namespace:s}};
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
class Xu{constructor(t,n,e,i){this.eventType=t,this.eventRegistration=n,this.snapshot=e,this.prevName=i}getPath(){const t=this.snapshot.ref;return"value"===this.eventType?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+P(this.snapshot.exportVal())}}class Qu{constructor(t,n,e){this.eventRegistration=t,this.error=n,this.path=e}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class Zu{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}
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
 */class ta{constructor(t,n){this._repo=t,this._path=n}cancel(){const t=new D;return Mu(this._repo,this._path,t.wrapCallback((()=>{}))),t.promise}remove(){bu("OnDisconnect.remove",this._path);const t=new D;return Lu(this._repo,this._path,null,t.wrapCallback((()=>{}))),t.promise}set(t){bu("OnDisconnect.set",this._path),wu("OnDisconnect.set",t,this._path,!1);const n=new D;return Lu(this._repo,this._path,t,n.wrapCallback((()=>{}))),n.promise}setWithPriority(t,n){bu("OnDisconnect.setWithPriority",this._path),wu("OnDisconnect.setWithPriority",t,this._path,!1),function(t,n){if(Ai(n))throw new Error(q(t,"priority")+"is "+n.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!mu(n))throw new Error(q(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}("OnDisconnect.setWithPriority",n);const e=new D;return function(t,n,e,i,r){const s=ts(e,i);t.server_.onDisconnectPut(n.toString(),s.val(!0),((e,i)=>{"ok"===e&&ms(t.onDisconnect_,n,s),Uu(0,r,e,i)}))}(this._repo,this._path,t,n,e.wrapCallback((()=>{}))),e.promise}update(t){bu("OnDisconnect.update",this._path),function(t,n,e,i){if(i&&void 0===n)return;const r=q(t,"values");if(!n||"object"!=typeof n||Array.isArray(n))throw new Error(r+" must be an object containing the children to replace.");const s=[];Li(n,((t,n)=>{const i=new cr(t);if(yu(r,n,wr(e,i)),".priority"===pr(i)&&!mu(n))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(i)})),function(t,n){let e,i;for(e=0;e<n.length;e++){i=n[e];const r=vr(i);for(let n=0;n<r.length;n++)if(".priority"===r[n]&&n===r.length-1);else if(!pu(r[n]))throw new Error(t+"contains an invalid key ("+r[n]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}n.sort(br);let r=null;for(e=0;e<n.length;e++){if(i=n[e],null!==r&&_r(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,s)}("OnDisconnect.update",t,this._path,!1);const n=new D;return function(t,n,e,i){if(k(e))return Ii("onDisconnect().update() called with empty data.  Don't do anything."),void Uu(0,i,"ok",void 0);t.server_.onDisconnectMerge(n.toString(),e,((r,s)=>{"ok"===r&&Li(e,((e,i)=>{const r=ts(i);ms(t.onDisconnect_,wr(n,e),r)})),Uu(0,i,r,s)}))}(this._repo,this._path,t,n.wrapCallback((()=>{}))),n.promise}}
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
 */class na{constructor(t,n,e,i){this._repo=t,this._path=n,this._queryParams=e,this._orderByCalled=i}get key(){return yr(this._path)?null:pr(this._path)}get ref(){return new ea(this._repo,this._path)}get _queryIdentifier(){const t=fs(this._queryParams),n=ji(t);return"{}"===n?"default":n}get _queryObject(){return fs(this._queryParams)}isEqual(t){if(!((t=u(t))instanceof na))return!1;const n=this._repo===t._repo,e=Er(this._path,t._path);return n&&e&&this._queryIdentifier===t._queryIdentifier}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let n="";for(let e=t.pieceNum_;e<t.pieces_.length;e++)""!==t.pieces_[e]&&(n+="/"+encodeURIComponent(String(t.pieces_[e])));return n||"/"}(this._path)}}class ea extends na{constructor(t,n){super(t,n,new hs,!1)}get parent(){const t=mr(this._path);return null===t?null:new ea(this._repo,t)}get root(){let t=this;for(;null!==t.parent;)t=t.parent;return t}}class ia{constructor(t,n,e){this._node=t,this.ref=n,this._index=e}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new cr(t),e=sa(this.ref,t);return new ia(this._node.getChild(n),e,Wr)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,((n,e)=>t(new ia(e,sa(this.ref,n),Wr))))}hasChild(t){const n=new cr(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ra(t,n){return(t=u(t))._checkNotDeleted("ref"),void 0!==n?sa(t._root,n):t._root}function sa(t,n){var e;return null===lr((t=u(t))._path)?("child","path",!1,(e=n)&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),gu("child","path",e,false)):gu("child","path",n,!1),new ea(t._repo,wr(t._path,n))}function oa(t){return t=u(t),new ta(t._repo,t._path)}function ua(t,n){t=u(t),bu("set",t._path),wu("set",n,t._path,!1);const e=new D;return function(t,n,e,i,r){Fu(t,"set",{path:n.toString(),value:e,priority:null});const s=Ru(t),o=ts(e,null),u=Uo(t.serverSyncTree_,n),a=nu(o,u,s),c=ju(t),h=jo(t.serverSyncTree_,n,a,c,!0);_u(t.eventQueue_,h),t.server_.put(n.toString(),o.val(!0),((e,i)=>{const s="ok"===e;s||Oi("set at "+n+" failed: "+e);const o=Mo(t.serverSyncTree_,c,!s);Tu(t.eventQueue_,n,o),Uu(0,r,e,i)}));const l=zu(t,n);Bu(t,l),Tu(t.eventQueue_,l,[])}(t._repo,t._path,n,0,e.wrapCallback((()=>{}))),e.promise}class aa{constructor(t){this.callbackContext=t}respondsTo(t){return"value"===t}createEvent(t,n){const e=n._queryParams.getIndex();return new Xu("value",this,new ia(t.snapshotNode,new ea(n._repo,n._path),e))}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Qu(this,t,n):null}matches(t){return t instanceof aa&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ca{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n="children_added"===t?"child_added":t;return n="children_removed"===n?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Qu(this,t,n):null}createEvent(t,n){R(null!=t.childName,"Child events should have a childName.");const e=sa(new ea(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new Xu(t.type,this,new ia(t.snapshotNode,e,i),t.prevName)}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof ca&&this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}var ha;ha=ea,R(!_o,"__referenceConstructor has already been defined"),_o=ha,function(t){R(!Io,"__referenceConstructor has already been defined"),Io=t}(ea);
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
const la={};function fa(t,n,e,i,r){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||Si("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ii("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,u,a=Ku(s,r),c=a.repoInfo;void 0!==lt&&lt.env&&(u=lt.env.FIREBASE_DATABASE_EMULATOR_HOST),u?(o=!0,s=`http://${u}?ns=${c.namespace}`,a=Ku(s,r),c=a.repoInfo):o=!a.repoInfo.secure;const h=r&&o?new Wi(Wi.OWNER):new $i(t.name,t.options,n);(function(t,n){const e=n.path.toString();if("string"!=typeof n.repoInfo.host||0===n.repoInfo.host.length||!pu(n.repoInfo.namespace)&&"localhost"!==n.repoInfo.host.split(":")[0]||0!==e.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vu(t)}(e))throw new Error(q(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')})("Invalid Firebase Database URL",a),yr(a.path)||Si("Database URL must point to the root of a Firebase Database (not including a child path).");const l=function(t,n,e,i){let r=la[n.name];r||(r={},la[n.name]=r);let s=r[t.toURLString()];return s&&Si("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Ou(t,!1,e,i),r[t.toURLString()]=s,s}(c,t,h,new Bi(t.name,e));return new da(l,t)}class da{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Au(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ea(this._repo,hr())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(t,n){const e=la[n];e&&e[t.key]===t||Si(`Database ${n}(${t.repoInfo_}) has already been deleted.`),function(t){t.persistentConnection_&&t.persistentConnection_.interrupt("repo_interrupt")}(t),delete e[t.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&Si("Cannot call "+t+" on a deleted database.")}}Or.prototype.simpleListen=function(t,n){this.sendRequest("q",{p:t},n)},Or.prototype.echo=function(t,n){this.sendRequest("echo",{d:t},n)},li=d,l(new f("database",((t,{instanceIdentifier:n})=>fa(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"),t.getProvider("app-check-internal"),n)),"PUBLIC").setMultipleInstances(!0)),p("@firebase/database","0.12.8",undefined),p("@firebase/database","0.12.8","esm2017");class pa{ref;metadata;onError;setMetadataPromise;constructor(t,n,e){this.ref=t,this.metadata=n,this.onError=e,oa(this.ref).remove().then((()=>{this.setMetadataPromise=ua(this.ref,n),this.setMetadataPromise.catch(e)}),e)}updateMetadata(t){this.metadata=t,this.setMetadataPromise&&(this.setMetadataPromise=this.setMetadataPromise.then((()=>{var t=ua(this.ref,this.metadata);return t.catch(this.onError),t})))}end(){return this.setMetadataPromise?this.setMetadataPromise.then((()=>function(t){return bu("remove",t._path),ua(t,null)}(this.ref).then((()=>(this.setMetadataPromise=null,this.end())),this.onError)),(function(){})):oa(this.ref).cancel().catch(this.onError)}}class va{metadata=!0;session=null;user=null;forceOffline=!0;auth=null;ref;databaseConnected=null;constructor(t,n){this.auth=n,this.user=n?.currentUser,this.ref=ra(t,"_firebase_extensions/presence"),function(t,n,e,i,r){let s;if("object"==typeof i&&(s=void 0,r=i),"function"==typeof i&&(s=i),r&&r.onlyOnce){const n=e,i=(e,i)=>{xu(t._repo,t,u),n(e,i)};i.userCallback=e.userCallback,i.context=e.context,e=i}const o=new Zu(e,s||void 0),u="value"===n?new aa(o):new ca(n,o);(function(t,n,e){let i;i=".info"===lr(n._path)?Fo(t.infoSyncTree_,n,e):Fo(t.serverSyncTree_,n,e),Iu(t.eventQueue_,n._path,i)})(t._repo,t,u)}(ra(t,".info/connected"),"value",(t=>{this.databaseConnected=t.val(),this.session&&!this.databaseConnected&&(this.session.end(),this.session=null),this.createSessionIfNeeded()}),undefined,undefined),this.auth.onAuthStateChanged((t=>{!this.session||t&&t.uid===this.user.uid||(this.session=null),this.user=t,this.createSessionIfNeeded()}))}randomId(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",e=0;e<20;e++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}setMetadata(t){this.metadata=null==t||t,this.session&&this.session.updateMetadata(this.metadata)}goOffline(){if(this.forceOffline=!0,this.session){var t=this.session.end();return this.session=null,t}return Promise.resolve()}goOnline(){return this.forceOffline=!1,this.createSessionIfNeeded(),Promise.resolve()}createSessionIfNeeded(){if(!this.session&&!this.forceOffline&&this.databaseConnected&&this.user){var t=this.randomId(),n=sa(this.ref,`${this.user.uid}/sessions/${t}`);this.session=new pa(n,this.metadata,this.onSessionError)}}onSessionError(t){console.warn("Error updating presence",t),this.session.end(),this.session=null,"PERMISSION_DENIED"!==t.code&&setTimeout(this.createSessionIfNeeded,1e3)}}class ma{app;sessionManager;config={authLocalStorageKey:"enjin:session",tokenLocalStorageKey:"enjin:token",facebook:{permissions:["email","public_profile","user_friends"]}};facebook=kt;googlePlus=Ct;twitter=Pt;isOnline=!1;service;constructor(t){this.config={...this.config,...t?.config||{}},this.app=t?.app||null;const n="undefined"!=typeof window&&window;if(!this.app&&n)try{this.app=H(t?.config?.firebase),console.log("Initializing Firebase App...",this.app)}catch(t){console.log(t)}this.service=n?
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
function(t=v()){const n=m(t,"auth");return n.isInitialized()?n.getImmediate():function(t,n){const e=m(t,"auth");if(e.isInitialized()){const t=e.getImmediate(),i=e.getOptions();if(y(i,null!=n?n:{}))return t;Ut(t,"already-initialized")}return e.initialize({options:n})}(t,{popupRedirectResolver:ci,persistence:[Ce,me,ye]})}(this.app):null,this.config.googlePlus&&this.config.googlePlus.options&&this.config.googlePlus.options.webClientId||console.log("googlePlus.options.webClientId is required for Google Native Auth See Here: https://github.com/EddyVerbruggen/cordova-plugin-googleplus#6-usage"),this.config?.emulate&&n&&function(t,n,e){const i=Un(t);Wt(i._canInitEmulator,i,"emulator-config-failed"),Wt(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");const r=!!(null==e?void 0:e.disableWarnings),s=qn(n),{host:o,port:u}=function(t){const n=qn(t),e=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Bn(i.substr(t.length+1))}}{const[t,n]=i.split(":");return{host:t,port:Bn(n)}}}(n);i.config.emulator={url:`${s}//${o}${null===u?"":`:${u}`}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}()}(this.service,"http://localhost:9099"),n&&this.onEmailLink(window.location.href)}async getUser(t){return t||await gn(this.service.currentUser),this.service.currentUser}async getClaims(){try{await gn(this.service.currentUser);const{claims:t}=await fn(this.service?.currentUser);return t}catch(t){return{}}}async getToken(){const t=this.service?.currentUser?await ln(this.service.currentUser):localStorage.getItem(this.config?.tokenLocalStorageKey||"");return await this.setToken(t),t}async setToken(t){return localStorage.setItem(this.config.tokenLocalStorageKey||"",t),t}async onEmailLink(t){if(function(t,n){const e=Xn.parseLink(n);return"EMAIL_SIGNIN"===(null==e?void 0:e.operation)}(0,t)){let n=window.localStorage.getItem("emailForSignIn");n||(n=window.prompt("Please provide your email for confirmation"));const e=await async function(t,n,e){const i=u(t),r=Qn.credentialWithLink(n,e||Kt());return Wt(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),le(i,r)}(this.service,n||"",t);return window.localStorage.removeItem("emailForSignIn"),this.emitLoggedInEvent(e),e}}withGoogleCredential(t){return ee.credential(t)}withCredential(t){return le(this.service,t)}withToken(t){
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
return async function(t,n){const e=Un(t),i=await
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
async function(t,n){return on(t,"POST","/v1/accounts:signInWithCustomToken",en(t,n))}(e,{token:n,returnSecureToken:!0}),r=await se._fromIdTokenResponse(e,"signIn",i);return await e._updateCurrentUser(r.user),r}(this.service,t)}withPhoneNumber(t,n){return t="+"+t,window.localStorage.setItem("phoneForSignIn",t),async function(t,n,e){const i=Un(t),r=await async function(t,n,e){var i;const r=await e.verify();try{let s;if(Wt("string"==typeof r,t,"argument-error"),Wt("recaptcha"===e.type,t,"argument-error"),s="string"==typeof n?{phoneNumber:n}:n,"session"in s){const n=s.session;if("phoneNumber"in s)return Wt("enroll"===n.type,t,"internal-error"),(await
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
function(t,n){return rn(t,"POST","/v2/accounts/mfaEnrollment:start",en(t,n))}(t,{idToken:n.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{Wt("signin"===n.type,t,"internal-error");const e=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;return Wt(e,t,"missing-multi-factor-info"),(await function(t,n){return rn(t,"POST","/v2/accounts/mfaSignIn:start",en(t,n))}(t,{mfaPendingCredential:n.credential,mfaEnrollmentId:e,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:n}=await async function(t,n){return rn(t,"POST","/v1/accounts:sendVerificationCode",en(t,n))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return n}}finally{e._reset()}}(i,n,u(e));return new De(r,(t=>le(i,t)))}(this.service,t,n)}withEmailLink(t,n){return window.localStorage.setItem("emailForSignIn",t),
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
async function(t,n,e){const i=u(t),r={requestType:"EMAIL_SIGNIN",email:n};Wt(e.handleCodeInApp,i,"argument-error"),e&&fe(i,r,e),await async function(t,n){return Gn(t,n)}(i,r)}(this.service,t,n)}anonymously(){return async function(t){var n;const e=Un(t);if(await e._initializationPromise,null===(n=e.currentUser)||void 0===n?void 0:n.isAnonymous)return new se({user:e.currentUser,providerId:null,operationType:"signIn"});const i=await re(e,{returnSecureToken:!0}),r=await se._fromIdTokenResponse(e,"signIn",i,!0);return await e._updateCurrentUser(r.user),r}(this.service)}onAuthChanged(t){var n;n=async n=>{if(!n||!n.emailVerified&&n.providerData&&"password"===n.providerData[0].providerId)return!1;n&&(localStorage.setItem(this.config?.authLocalStorageKey||"",JSON.stringify(n)),localStorage.setItem(this.config?.tokenLocalStorageKey||"",await ln(this.service?.currentUser,!0))),t&&"function"==typeof t&&t(n)},u(this.service).onAuthStateChanged(n,void 0,void 0),localStorage.getItem(this.config?.authLocalStorageKey||"")||t(null)}getFromStorage(){return localStorage.getItem(this.config?.authLocalStorageKey||"")?JSON.parse(localStorage.getItem(this.config?.authLocalStorageKey||"")):null}isLoggedIn(){return this.service||this.getFromStorage()}emitLoggedInEvent(t){document.body.dispatchEvent(new CustomEvent("authLoggedIn",{detail:{data:t}}))}emitLoggedOutEvent(){document.body.dispatchEvent(new CustomEvent("authLoggedOut",{detail:{}}))}createUser(t,n){return async function(t,n,e){const i=Un(t),r=await re(i,{returnSecureToken:!0,email:n,password:e}),s=await se._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}(this.service,t,n)}sendEmailVerification(t){return async function(t,n){const e=u(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};n&&fe(e.auth,i,n);const{email:r}=await async function(t,n){return Gn(t,n)}(e.auth,i);r!==t.email&&await t.reload()}(this.service.currentUser,t||null)}sendPasswordReset(t,n){return async function(t,n,e){const i=u(t),r={requestType:"PASSWORD_RESET",email:n};e&&fe(i,r,e),await async function(t,n){return Gn(t,n)}(i,r)}(this.service,t,n||null)}withEmail(t,n){return new Promise(((e,i)=>{try{(function(t,n,e){return le(u(t),Qn.credential(n,e))})(this.service,t,n).then((t=>{this.emitLoggedInEvent({user:t}),e({data:{user:t}})})).catch((t=>{i(t)}))}catch(t){i(t)}}))}updateEmail(t,n){return new Promise(((e,i)=>{try{(function(t,n){return de(u(t),n,null)})(this.service?.currentUser,t).then((t=>{e({data:{user:t}}),this.sendEmailVerification(n)})).catch((t=>{i(t)}))}catch(t){i(t)}}))}async facebookNative(){const t=await this.facebook.login(this.config?.facebook?.permissions);return this.withCredential(ne.credential(t.authResponse.accessToken))}async googleNative(){let t;try{t=await this.googlePlus.login(this.config?.googlePlus?.options)}catch(t){console.log("Error with Google Native Login..."),console.log(t)}return this.withCredential(ee.credential(t.idToken))}async twitterNative(){const t=await this.twitter.login();return this.withCredential(ie.credential(t.token,t.secret))}async withSocial(t,n=!1){let e,i=n;return window.matchMedia("(display-mode: standalone)").matches&&(console.log("Running in PWA mode..."),i=!0),new Promise((async(n,r)=>{if(window.cordova)"google"===t?this.googleNative().then((t=>{this.emitLoggedInEvent(t),n(t)})).catch((t=>{console.log(t),r(t)})):"facebook"===t?this.facebookNative().then((t=>{this.emitLoggedInEvent(t),n(t)})).catch((t=>{console.log(t),r(t)})):"twitter"===t&&this.twitterNative().then((t=>{this.emitLoggedInEvent(t),n(t)})).catch((t=>{console.log(t),r(t)}));else{"facebook"===t?e=new ne:"google"===t?e=new ee:"twitter"===t?e=new ie:r({message:"A social network is required or the one provided is not yet supported."});try{i?await function(t,n,e){return async function(t,n,e){const i=Un(t);Bt(t,n,Zn);const r=Pe(i,e);return await async function(t,n){return $e(t)._set(We(n),"true")}(r,i),r._openRedirect(i,n,"signInViaRedirect")}(t,n,e)}(this.service,e):await async function(t,n){const e=Un(t);Bt(t,n,Zn);const i=Pe(e,void 0);return new Ve(e,"signInViaPopup",n,i).executeNotNull()}(this.service,e),this.emitLoggedInEvent({currentUser:this.service.currentUser})}catch(t){console.log(t)}}}))}logout(){return this.emitLoggedOutEvent(),u(this.service).signOut()}async updatePassword(t,n){return n&&await async function(t,n){return ce(u(t),n)}(this.service?.currentUser,n),function(t,n){return de(u(t),null,n)}(this.service.currentUser,t)}async storeRoles(t){return localStorage.setItem("roles",JSON.stringify(t)),t}async checkRolePermission(t,n,e){let i=[];const r=await this.getClaims();if(!e&&r?.admin)return!0;try{i=JSON.parse(localStorage.getItem("roles"))}catch(t){console.log("Error getting roles from local storage")}for(const e of i)if(e.id===t&&e.permissions&&e.permissions.includes(n))return!0;return!1}async goOnline(){if(!this.sessionManager){const t=function(t=v(),n){return m(t,"database").getImmediate({identifier:n})}
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
 */(this.app);this.sessionManager=new va(t,this.service)}return this.isOnline=!0,document.body.dispatchEvent(new CustomEvent("fireenjin:online",{detail:{sessionManager:this.sessionManager}})),this.sessionManager.goOnline()}async goOffline(){return this.sessionManager?(this.isOnline=!1,document.body.dispatchEvent(new CustomEvent("fireenjin:offline",{detail:{sessionManager:this.sessionManager}})),this.sessionManager.goOffline()):null}async getSessionManager(){return this.sessionManager}async getApp(){return this.app}async getService(){return this.service}}
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
 */function wa(t,n){const e={};for(const i in t)t.hasOwnProperty(i)&&(e[i]=n(t[i]));return e}function ya(t){if(null==t)return null;if(t instanceof Number&&(t=t.valueOf()),"number"==typeof t&&isFinite(t))return t;if(!0===t||!1===t)return t;if("[object String]"===Object.prototype.toString.call(t))return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map((t=>ya(t)));if("function"==typeof t||"object"==typeof t)return wa(t,(t=>ya(t)));throw new Error("Data cannot be encoded in JSON: "+t)}function ga(t){if(null==t)return t;if(t["@type"])switch(t["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const n=Number(t.value);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+t);return n}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map((t=>ga(t))):"function"==typeof t||"object"==typeof t?wa(t,(t=>ga(t))):t}
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
 */const ba={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
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
 */class Ea extends b{constructor(t,n,e){super(`functions/${t}`,n||""),this.details=e}}
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
class _a{constructor(t,n,e){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then((t=>this.auth=t),(()=>{})),this.messaging||n.get().then((t=>this.messaging=t),(()=>{})),this.appCheck||e.get().then((t=>this.appCheck=t),(()=>{}))}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return null==t?void 0:t.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken()}}}
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
 */class Ia{constructor(t,n,e,i,r="us-central1",s){this.app=t,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new _a(n,e,i),this.cancelAllRequests=new Promise((t=>{this.deleteService=()=>Promise.resolve(t())}));try{const t=new URL(r);this.customDomain=t.origin,this.region="us-central1"}catch(t){this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return null!==this.emulatorOrigin?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}async function Ta(t,n,e,i){let r;e["Content-Type"]="application/json";try{r=await i(t,{method:"POST",body:JSON.stringify(n),headers:e})}catch(t){return{status:0,json:null}}let s=null;try{s=await r.json()}catch(t){}return{status:r.status,json:s}}const Na="@firebase/functions";var Sa;
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
 */Sa=fetch.bind(self),l(new f("functions",((t,{instanceIdentifier:n})=>{const e=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("messaging-internal"),s=t.getProvider("app-check-internal");return new Ia(e,i,r,s,n,Sa)}),"PUBLIC").setMultipleInstances(!0)),p(Na,"0.7.11",void 0),p(Na,"0.7.11","esm2017");class Oa{app;service;watchers={};functions;constructor(t){if(this.app=t?.app||null,!this.app&&window)try{this.app=H(t?.config),console.log("Initializing Firebase App...")}catch(t){console.log(t)}this.service=K(this.app),this.functions=function(t=v(),n="us-central1"){return m(u(t),"functions").getImmediate({identifier:n})}(this.app),t?.emulate&&(Y(this.service,"localhost",8080),"localhost",5001,u(this.functions).emulatorOrigin="http://localhost:5001");try{X(this.service)}catch(t){console.log(t.message)}}call(t){return n=t,function(t,n,e){return i=>async function(t,n,e,i){const r=t._url(n),s={data:e=ya(e)},o={},u=await t.contextProvider.getContext();u.authToken&&(o.Authorization="Bearer "+u.authToken),u.messagingToken&&(o["Firebase-Instance-ID-Token"]=u.messagingToken),null!==u.appCheckToken&&(o["X-Firebase-AppCheck"]=u.appCheckToken);const a=function(t){let n=null;return{promise:new Promise(((e,i)=>{n=setTimeout((()=>{i(new Ea("deadline-exceeded","deadline-exceeded"))}),t)})),cancel:()=>{n&&clearTimeout(n)}}}(i.timeout||7e4),c=await Promise.race([Ta(r,s,o,t.fetchImpl),a.promise,t.cancelAllRequests]);if(a.cancel(),!c)throw new Ea("cancelled","Firebase Functions instance was deleted.");const h=function(t,n){let e,i=function(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(t),r=i;try{const t=n&&n.error;if(t){const n=t.status;if("string"==typeof n){if(!ba[n])return new Ea("internal","internal");i=ba[n],r=n}const s=t.message;"string"==typeof s&&(r=s),e=t.details,void 0!==e&&(e=ga(e))}}catch(t){}return"ok"===i?null:new Ea(i,r,e)}(c.status,c.json);if(h)throw h;if(!c.json)throw new Ea("internal","Response is not valid JSON object.");let l=c.json.data;if(void 0===l&&(l=c.json.result),void 0===l)throw new Ea("internal","Response is missing data field.");return{data:ga(l)}}(t,n,i,e||{})}(u(this.functions),n,void 0);var n}async add(t,n,e){const i=await this.collection(t);return e&&await Q(this.document(t,e),n),e?this.document(t,e):Z(i,n)}async delete(t,n){const e=this.document(t,n);return await tt(e),{id:e.id}}async find(t,n){return(await this.getDocument(t,n)).data()}collection(t){return nt(this.service,t)}getCollection(t){return et(this.collection(t))}document(t,n){return n?it(this.service,t,n):it(this.service,t)}getDocument(t,n){return rt(this.document(t,n))}async update(t,n,e){const i=this.document(t,n);return await st(i,e,{merge:!0}),(await this.getDocument(t,n)).data()}async clearWatchers(){for(const t of Object.keys(this.watchers))this.watchers[t]();return!0}subscribe(t,n,e){const i=e||(new Date).toISOString();return this.watchers[i]=ot(this.rawQuery(t?.collectionName,t?.where,t?.orderBy,t?.limit),(async t=>{n&&"function"==typeof n&&n({docs:t?.docs||[]})})),this.watchers[i]}unsubscribe(t){return this.watchers[t]&&"function"==typeof this.watchers[t]?(this.watchers[t](),!0):(console.log(`There is no watcher running on ${t} query.`),!1)}watchDocument(t,n,e){this.watchers[`${t}:${n}`]=ot(this.document(t,n),(async t=>{e&&"function"==typeof e&&e({data:t.data()})}))}unwatchDocument(t,n){const e=`${t}:${n}`;return this.watchers[e]&&"function"==typeof this.watchers[e]?(this.watchers[e](),!0):(console.log(`There is no watcher running on ${e} document.`),!1)}rawQuery(t,n,e,i){const r=[];for(const t of n||[])t?.conditional&&t?.key&&r.push(ut(t.key,t.conditional,t.value));return e&&r.push(at(e)),i&&r.push(ct(i)),ht(this.collection(t),...r)}async query(t,n,e,i){return et(this.rawQuery(t,n,e,i))}async list(t,n,e,i){return(await this.query(t,n,e,i))?.docs?.map((t=>({id:t.id,...t?.exists()?t.data():{}})))||null}async getApp(){return this.app}async getService(){return this.service}}var Aa=ft((function(t){
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
t.exports=function t(n,e,i){function r(o,u){if(!e[o]){if(!n[o]){var a="function"==typeof pt&&pt;if(!u&&a)return a(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=e[o]={exports:{}};n[o][0].call(h.exports,(function(t){return r(n[o][1][t]||t)}),h,h.exports,t,n,e,i)}return e[o].exports}for(var s="function"==typeof pt&&pt,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(t,n){(function(t){var e,i,r=t.MutationObserver||t.WebKitMutationObserver;if(r){var s=0,o=new r(h),u=t.document.createTextNode("");o.observe(u,{characterData:!0}),e=function(){u.data=s=++s%2}}else if(t.setImmediate||void 0===t.MessageChannel)e="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var n=t.document.createElement("script");n.onreadystatechange=function(){h(),n.onreadystatechange=null,n.parentNode.removeChild(n),n=null},t.document.documentElement.appendChild(n)}:function(){setTimeout(h,0)};else{var a=new t.MessageChannel;a.port1.onmessage=h,e=function(){a.port2.postMessage(0)}}var c=[];function h(){var t,n;i=!0;for(var e=c.length;e;){for(n=c,c=[],t=-1;++t<e;)n[t]();e=c.length}i=!1}n.exports=function(t){1!==c.push(t)||i||e()}}).call(this,void 0!==dt?dt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,n){var e=t(1);function i(){}var r={},s=["REJECTED"],o=["FULFILLED"],u=["PENDING"];function a(t){if("function"!=typeof t)throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,t!==i&&f(this,t)}function c(t,n,e){this.promise=t,"function"==typeof n&&(this.onFulfilled=n,this.callFulfilled=this.otherCallFulfilled),"function"==typeof e&&(this.onRejected=e,this.callRejected=this.otherCallRejected)}function h(t,n,i){e((function(){var e;try{e=n(i)}catch(n){return r.reject(t,n)}e===t?r.reject(t,new TypeError("Cannot resolve promise with itself")):r.resolve(t,e)}))}function l(t){var n=t&&t.then;if(t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof n)return function(){n.apply(t,arguments)}}function f(t,n){var e=!1;function i(n){e||(e=!0,r.reject(t,n))}function s(n){e||(e=!0,r.resolve(t,n))}var o=d((function(){n(s,i)}));"error"===o.status&&i(o.value)}function d(t,n){var e={};try{e.value=t(n),e.status="success"}catch(t){e.status="error",e.value=t}return e}n.exports=a,a.prototype.catch=function(t){return this.then(null,t)},a.prototype.then=function(t,n){if("function"!=typeof t&&this.state===o||"function"!=typeof n&&this.state===s)return this;var e=new this.constructor(i);return this.state!==u?h(e,this.state===o?t:n,this.outcome):this.queue.push(new c(e,t,n)),e},c.prototype.callFulfilled=function(t){r.resolve(this.promise,t)},c.prototype.otherCallFulfilled=function(t){h(this.promise,this.onFulfilled,t)},c.prototype.callRejected=function(t){r.reject(this.promise,t)},c.prototype.otherCallRejected=function(t){h(this.promise,this.onRejected,t)},r.resolve=function(t,n){var e=d(l,n);if("error"===e.status)return r.reject(t,e.value);var i=e.value;if(i)f(t,i);else{t.state=o,t.outcome=n;for(var s=-1,u=t.queue.length;++s<u;)t.queue[s].callFulfilled(n)}return t},r.reject=function(t,n){t.state=s,t.outcome=n;for(var e=-1,i=t.queue.length;++e<i;)t.queue[e].callRejected(n);return t},a.resolve=function(t){return t instanceof this?t:r.resolve(new this(i),t)},a.reject=function(t){var n=new this(i);return r.reject(n,t)},a.all=function(t){var n=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var e=t.length,s=!1;if(!e)return this.resolve([]);for(var o=new Array(e),u=0,a=-1,c=new this(i);++a<e;)h(t[a],a);return c;function h(t,i){n.resolve(t).then((function(t){o[i]=t,++u!==e||s||(s=!0,r.resolve(c,o))}),(function(t){s||(s=!0,r.reject(c,t))}))}},a.race=function(t){var n=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var e=t.length,s=!1;if(!e)return this.resolve([]);for(var o=-1,u=new this(i);++o<e;)n.resolve(t[o]).then((function(t){s||(s=!0,r.resolve(u,t))}),(function(t){s||(s=!0,r.reject(u,t))}));return u}},{1:1}],3:[function(t){(function(n){"function"!=typeof n.Promise&&(n.Promise=t(2))}).call(this,void 0!==dt?dt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(t,n){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var i=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(t){return}}();function r(t,n){t=t||[],n=n||{};try{return new Blob(t,n)}catch(r){if("TypeError"!==r.name)throw r;for(var e=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),i=0;i<t.length;i+=1)e.append(t[i]);return e.getBlob(n.type)}}"undefined"==typeof Promise&&t(3);var s=Promise;function o(t,n){n&&t.then((function(t){n(null,t)}),(function(t){n(t)}))}function u(t,n,e){"function"==typeof n&&t.then(n),"function"==typeof e&&t.catch(e)}function a(t){return"string"!=typeof t&&(console.warn(t+" used as a key, but it is not a string."),t=String(t)),t}function c(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var h="local-forage-detect-blob-support",l=void 0,f={},d=Object.prototype.toString,p="readonly",v="readwrite";function m(t){for(var n=t.length,e=new ArrayBuffer(n),i=new Uint8Array(e),r=0;r<n;r++)i[r]=t.charCodeAt(r);return e}function w(t){return"boolean"==typeof l?s.resolve(l):function(t){return new s((function(n){var e=t.transaction(h,v),i=r([""]);e.objectStore(h).put(i,"key"),e.onabort=function(t){t.preventDefault(),t.stopPropagation(),n(!1)},e.oncomplete=function(){var t=navigator.userAgent.match(/Chrome\/(\d+)/),e=navigator.userAgent.match(/Edge\//);n(e||!t||parseInt(t[1],10)>=43)}})).catch((function(){return!1}))}(t).then((function(t){return l=t}))}function y(t){var n=f[t.name],e={};e.promise=new s((function(t,n){e.resolve=t,e.reject=n})),n.deferredOperations.push(e),n.dbReady=n.dbReady?n.dbReady.then((function(){return e.promise})):e.promise}function g(t){var n=f[t.name].deferredOperations.pop();if(n)return n.resolve(),n.promise}function b(t,n){var e=f[t.name].deferredOperations.pop();if(e)return e.reject(n),e.promise}function E(t,n){return new s((function(e,r){if(f[t.name]=f[t.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},t.db){if(!n)return e(t.db);y(t),t.db.close()}var s=[t.name];n&&s.push(t.version);var o=i.open.apply(i,s);n&&(o.onupgradeneeded=function(n){var e=o.result;try{e.createObjectStore(t.storeName),n.oldVersion<=1&&e.createObjectStore(h)}catch(e){if("ConstraintError"!==e.name)throw e;console.warn('The database "'+t.name+'" has been upgraded from version '+n.oldVersion+" to version "+n.newVersion+', but the storage "'+t.storeName+'" already exists.')}}),o.onerror=function(t){t.preventDefault(),r(o.error)},o.onsuccess=function(){var n=o.result;n.onversionchange=function(t){t.target.close()},e(n),g(t)}}))}function _(t){return E(t,!1)}function I(t){return E(t,!0)}function T(t,n){if(!t.db)return!0;var e=!t.db.objectStoreNames.contains(t.storeName),i=t.version>t.db.version;if(t.version<t.db.version&&(t.version!==n&&console.warn('The database "'+t.name+"\" can't be downgraded from version "+t.db.version+" to version "+t.version+"."),t.version=t.db.version),i||e){if(e){var r=t.db.version+1;r>t.version&&(t.version=r)}return!0}return!1}function N(t){return r([m(atob(t.data))],{type:t.type})}function S(t){return t&&t.__local_forage_encoded_blob}function O(t){var n=this,e=n._initReady().then((function(){var t=f[n._dbInfo.name];if(t&&t.dbReady)return t.dbReady}));return u(e,t,t),e}function A(t,n,e,i){void 0===i&&(i=1);try{var r=t.db.transaction(t.storeName,n);e(null,r)}catch(r){if(i>0&&(!t.db||"InvalidStateError"===r.name||"NotFoundError"===r.name))return s.resolve().then((function(){if(!t.db||"NotFoundError"===r.name&&!t.db.objectStoreNames.contains(t.storeName)&&t.version<=t.db.version)return t.db&&(t.version=t.db.version+1),I(t)})).then((function(){return function(t){y(t);for(var n=f[t.name],e=n.forages,i=0;i<e.length;i++){var r=e[i];r._dbInfo.db&&(r._dbInfo.db.close(),r._dbInfo.db=null)}return t.db=null,_(t).then((function(n){return t.db=n,T(t)?I(t):n})).then((function(i){t.db=n.db=i;for(var r=0;r<e.length;r++)e[r]._dbInfo.db=i})).catch((function(n){throw b(t,n),n}))}(t).then((function(){A(t,n,e,i-1)}))})).catch(e);e(r)}}var k={_driver:"asyncStorage",_initStorage:function(t){var n=this,e={db:null};if(t)for(var i in t)e[i]=t[i];var r=f[e.name];r||(f[e.name]=r={forages:[],db:null,dbReady:null,deferredOperations:[]}),r.forages.push(n),n._initReady||(n._initReady=n.ready,n.ready=O);var o=[];function u(){return s.resolve()}for(var a=0;a<r.forages.length;a++){var c=r.forages[a];c!==n&&o.push(c._initReady().catch(u))}var h=r.forages.slice(0);return s.all(o).then((function(){return e.db=r.db,_(e)})).then((function(t){return e.db=t,T(e,n._defaultConfig.version)?I(e):t})).then((function(t){e.db=r.db=t,n._dbInfo=e;for(var i=0;i<h.length;i++){var s=h[i];s!==n&&(s._dbInfo.db=e.db,s._dbInfo.version=e.version)}}))},_support:function(){try{if(!i||!i.open)return!1;var t="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),n="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!t||n)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(t){return!1}}(),iterate:function(t,n){var e=this,i=new s((function(n,i){e.ready().then((function(){A(e._dbInfo,p,(function(r,s){if(r)return i(r);try{var o=s.objectStore(e._dbInfo.storeName).openCursor(),u=1;o.onsuccess=function(){var e=o.result;if(e){var i=e.value;S(i)&&(i=N(i));var r=t(i,e.key,u++);void 0!==r?n(r):e.continue()}else n()},o.onerror=function(){i(o.error)}}catch(t){i(t)}}))})).catch(i)}));return o(i,n),i},getItem:function(t,n){var e=this;t=a(t);var i=new s((function(n,i){e.ready().then((function(){A(e._dbInfo,p,(function(r,s){if(r)return i(r);try{var o=s.objectStore(e._dbInfo.storeName).get(t);o.onsuccess=function(){var t=o.result;void 0===t&&(t=null),S(t)&&(t=N(t)),n(t)},o.onerror=function(){i(o.error)}}catch(t){i(t)}}))})).catch(i)}));return o(i,n),i},setItem:function(t,n,e){var i=this;t=a(t);var r=new s((function(e,r){var o;i.ready().then((function(){return o=i._dbInfo,"[object Blob]"===d.call(n)?w(o.db).then((function(t){return t?n:(e=n,new s((function(t,n){var i=new FileReader;i.onerror=n,i.onloadend=function(n){var i=btoa(n.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},i.readAsBinaryString(e)})));var e})):n})).then((function(n){A(i._dbInfo,v,(function(s,o){if(s)return r(s);try{var u=o.objectStore(i._dbInfo.storeName);null===n&&(n=void 0);var a=u.put(n,t);o.oncomplete=function(){void 0===n&&(n=null),e(n)},o.onabort=o.onerror=function(){r(a.error?a.error:a.transaction.error)}}catch(t){r(t)}}))})).catch(r)}));return o(r,e),r},removeItem:function(t,n){var e=this;t=a(t);var i=new s((function(n,i){e.ready().then((function(){A(e._dbInfo,v,(function(r,s){if(r)return i(r);try{var o=s.objectStore(e._dbInfo.storeName).delete(t);s.oncomplete=function(){n()},s.onerror=function(){i(o.error)},s.onabort=function(){i(o.error?o.error:o.transaction.error)}}catch(t){i(t)}}))})).catch(i)}));return o(i,n),i},clear:function(t){var n=this,e=new s((function(t,e){n.ready().then((function(){A(n._dbInfo,v,(function(i,r){if(i)return e(i);try{var s=r.objectStore(n._dbInfo.storeName).clear();r.oncomplete=function(){t()},r.onabort=r.onerror=function(){e(s.error?s.error:s.transaction.error)}}catch(t){e(t)}}))})).catch(e)}));return o(e,t),e},length:function(t){var n=this,e=new s((function(t,e){n.ready().then((function(){A(n._dbInfo,p,(function(i,r){if(i)return e(i);try{var s=r.objectStore(n._dbInfo.storeName).count();s.onsuccess=function(){t(s.result)},s.onerror=function(){e(s.error)}}catch(t){e(t)}}))})).catch(e)}));return o(e,t),e},key:function(t,n){var e=this,i=new s((function(n,i){t<0?n(null):e.ready().then((function(){A(e._dbInfo,p,(function(r,s){if(r)return i(r);try{var o=s.objectStore(e._dbInfo.storeName),u=!1,a=o.openKeyCursor();a.onsuccess=function(){var e=a.result;e?0===t||u?n(e.key):(u=!0,e.advance(t)):n(null)},a.onerror=function(){i(a.error)}}catch(t){i(t)}}))})).catch(i)}));return o(i,n),i},keys:function(t){var n=this,e=new s((function(t,e){n.ready().then((function(){A(n._dbInfo,p,(function(i,r){if(i)return e(i);try{var s=r.objectStore(n._dbInfo.storeName).openKeyCursor(),o=[];s.onsuccess=function(){var n=s.result;n?(o.push(n.key),n.continue()):t(o)},s.onerror=function(){e(s.error)}}catch(t){e(t)}}))})).catch(e)}));return o(e,t),e},dropInstance:function(t,n){n=c.apply(this,arguments);var e=this.config();(t="function"!=typeof t&&t||{}).name||(t.name=t.name||e.name,t.storeName=t.storeName||e.storeName);var r,u=this;if(t.name){var a=t.name===e.name&&u._dbInfo.db?s.resolve(u._dbInfo.db):_(t).then((function(n){var e=f[t.name],i=e.forages;e.db=n;for(var r=0;r<i.length;r++)i[r]._dbInfo.db=n;return n}));r=a.then(t.storeName?function(n){if(n.objectStoreNames.contains(t.storeName)){var e=n.version+1;y(t);var r=f[t.name],o=r.forages;n.close();for(var u=0;u<o.length;u++){var a=o[u];a._dbInfo.db=null,a._dbInfo.version=e}return new s((function(n,r){var s=i.open(t.name,e);s.onerror=function(t){s.result.close(),r(t)},s.onupgradeneeded=function(){s.result.deleteObjectStore(t.storeName)},s.onsuccess=function(){var t=s.result;t.close(),n(t)}})).then((function(t){r.db=t;for(var n=0;n<o.length;n++){var e=o[n];e._dbInfo.db=t,g(e._dbInfo)}})).catch((function(n){throw(b(t,n)||s.resolve()).catch((function(){})),n}))}}:function(n){y(t);var e=f[t.name],r=e.forages;n.close();for(var o=0;o<r.length;o++)r[o]._dbInfo.db=null;return new s((function(n,e){var r=i.deleteDatabase(t.name);r.onerror=function(){var t=r.result;t&&t.close(),e(r.error)},r.onblocked=function(){console.warn('dropInstance blocked for database "'+t.name+'" until all open connections are closed')},r.onsuccess=function(){var t=r.result;t&&t.close(),n(t)}})).then((function(t){e.db=t;for(var n=0;n<r.length;n++)g(r[n]._dbInfo)})).catch((function(n){throw(b(t,n)||s.resolve()).catch((function(){})),n}))})}else r=s.reject("Invalid arguments");return o(r,n),r}};var R="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",C=/^~~local_forage_type~([^~]+)~/,D="__lfsc__:",P=D.length,j="arbf",M="blob",L="si08",x="ui08",F="uic8",U="si16",V="si32",q="ur16",B="ui32",$="fl32",W="fl64",G=P+j.length,J=Object.prototype.toString;function z(t){var n,e,i,r,s,o=.75*t.length,u=t.length,a=0;"="===t[t.length-1]&&(o--,"="===t[t.length-2]&&o--);var c=new ArrayBuffer(o),h=new Uint8Array(c);for(n=0;n<u;n+=4)e=R.indexOf(t[n]),i=R.indexOf(t[n+1]),r=R.indexOf(t[n+2]),s=R.indexOf(t[n+3]),h[a++]=e<<2|i>>4,h[a++]=(15&i)<<4|r>>2,h[a++]=(3&r)<<6|63&s;return c}function H(t){var n,e=new Uint8Array(t),i="";for(n=0;n<e.length;n+=3)i+=R[e[n]>>2],i+=R[(3&e[n])<<4|e[n+1]>>4],i+=R[(15&e[n+1])<<2|e[n+2]>>6],i+=R[63&e[n+2]];return e.length%3==2?i=i.substring(0,i.length-1)+"=":e.length%3==1&&(i=i.substring(0,i.length-2)+"=="),i}var K={serialize:function(t,n){var e="";if(t&&(e=J.call(t)),t&&("[object ArrayBuffer]"===e||t.buffer&&"[object ArrayBuffer]"===J.call(t.buffer))){var i,r=D;t instanceof ArrayBuffer?(i=t,r+=j):(i=t.buffer,"[object Int8Array]"===e?r+=L:"[object Uint8Array]"===e?r+=x:"[object Uint8ClampedArray]"===e?r+=F:"[object Int16Array]"===e?r+=U:"[object Uint16Array]"===e?r+=q:"[object Int32Array]"===e?r+=V:"[object Uint32Array]"===e?r+=B:"[object Float32Array]"===e?r+=$:"[object Float64Array]"===e?r+=W:n(new Error("Failed to get type for BinaryArray"))),n(r+H(i))}else if("[object Blob]"===e){var s=new FileReader;s.onload=function(){var e="~~local_forage_type~"+t.type+"~"+H(this.result);n("__lfsc__:blob"+e)},s.readAsArrayBuffer(t)}else try{n(JSON.stringify(t))}catch(e){console.error("Couldn't convert value into a JSON string: ",t),n(null,e)}},deserialize:function(t){if(t.substring(0,P)!==D)return JSON.parse(t);var n,e=t.substring(G),i=t.substring(P,G);if(i===M&&C.test(e)){var s=e.match(C);n=s[1],e=e.substring(s[0].length)}var o=z(e);switch(i){case j:return o;case M:return r([o],{type:n});case L:return new Int8Array(o);case x:return new Uint8Array(o);case F:return new Uint8ClampedArray(o);case U:return new Int16Array(o);case q:return new Uint16Array(o);case V:return new Int32Array(o);case B:return new Uint32Array(o);case $:return new Float32Array(o);case W:return new Float64Array(o);default:throw new Error("Unkown type: "+i)}},stringToBuffer:z,bufferToString:H};function Y(t,n,e,i){t.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],e,i)}function X(t,n,e,i,r,s){t.executeSql(e,i,r,(function(t,o){o.code===o.SYNTAX_ERR?t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[n.storeName],(function(t,u){u.rows.length?s(t,o):Y(t,n,(function(){t.executeSql(e,i,r,s)}),s)}),s):s(t,o)}),s)}function Q(t,n,e,i){var r=this;t=a(t);var u=new s((function(s,o){r.ready().then((function(){void 0===n&&(n=null);var u=n,a=r._dbInfo;a.serializer.serialize(n,(function(n,c){c?o(c):a.db.transaction((function(e){X(e,a,"INSERT OR REPLACE INTO "+a.storeName+" (key, value) VALUES (?, ?)",[t,n],(function(){s(u)}),(function(t,n){o(n)}))}),(function(n){if(n.code===n.QUOTA_ERR){if(i>0)return void s(Q.apply(r,[t,u,e,i-1]));o(n)}}))}))})).catch(o)}));return o(u,e),u}function Z(t){return new s((function(n,e){t.transaction((function(i){i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(e,i){for(var r=[],s=0;s<i.rows.length;s++)r.push(i.rows.item(s).name);n({db:t,storeNames:r})}),(function(t,n){e(n)}))}),(function(t){e(t)}))}))}var tt={_driver:"webSQLStorage",_initStorage:function(t){var n=this,e={db:null};if(t)for(var i in t)e[i]="string"!=typeof t[i]?t[i].toString():t[i];var r=new s((function(t,i){try{e.db=openDatabase(e.name,String(e.version),e.description,e.size)}catch(t){return i(t)}e.db.transaction((function(r){Y(r,e,(function(){n._dbInfo=e,t()}),(function(t,n){i(n)}))}),i)}));return e.serializer=K,r},_support:"function"==typeof openDatabase,iterate:function(t,n){var e=this,i=new s((function(n,i){e.ready().then((function(){var r=e._dbInfo;r.db.transaction((function(e){X(e,r,"SELECT * FROM "+r.storeName,[],(function(e,i){for(var s=i.rows,o=s.length,u=0;u<o;u++){var a=s.item(u),c=a.value;if(c&&(c=r.serializer.deserialize(c)),void 0!==(c=t(c,a.key,u+1)))return void n(c)}n()}),(function(t,n){i(n)}))}))})).catch(i)}));return o(i,n),i},getItem:function(t,n){var e=this;t=a(t);var i=new s((function(n,i){e.ready().then((function(){var r=e._dbInfo;r.db.transaction((function(e){X(e,r,"SELECT * FROM "+r.storeName+" WHERE key = ? LIMIT 1",[t],(function(t,e){var i=e.rows.length?e.rows.item(0).value:null;i&&(i=r.serializer.deserialize(i)),n(i)}),(function(t,n){i(n)}))}))})).catch(i)}));return o(i,n),i},setItem:function(t,n,e){return Q.apply(this,[t,n,e,1])},removeItem:function(t,n){var e=this;t=a(t);var i=new s((function(n,i){e.ready().then((function(){var r=e._dbInfo;r.db.transaction((function(e){X(e,r,"DELETE FROM "+r.storeName+" WHERE key = ?",[t],(function(){n()}),(function(t,n){i(n)}))}))})).catch(i)}));return o(i,n),i},clear:function(t){var n=this,e=new s((function(t,e){n.ready().then((function(){var i=n._dbInfo;i.db.transaction((function(n){X(n,i,"DELETE FROM "+i.storeName,[],(function(){t()}),(function(t,n){e(n)}))}))})).catch(e)}));return o(e,t),e},length:function(t){var n=this,e=new s((function(t,e){n.ready().then((function(){var i=n._dbInfo;i.db.transaction((function(n){X(n,i,"SELECT COUNT(key) as c FROM "+i.storeName,[],(function(n,e){var i=e.rows.item(0).c;t(i)}),(function(t,n){e(n)}))}))})).catch(e)}));return o(e,t),e},key:function(t,n){var e=this,i=new s((function(n,i){e.ready().then((function(){var r=e._dbInfo;r.db.transaction((function(e){X(e,r,"SELECT key FROM "+r.storeName+" WHERE id = ? LIMIT 1",[t+1],(function(t,e){var i=e.rows.length?e.rows.item(0).key:null;n(i)}),(function(t,n){i(n)}))}))})).catch(i)}));return o(i,n),i},keys:function(t){var n=this,e=new s((function(t,e){n.ready().then((function(){var i=n._dbInfo;i.db.transaction((function(n){X(n,i,"SELECT key FROM "+i.storeName,[],(function(n,e){for(var i=[],r=0;r<e.rows.length;r++)i.push(e.rows.item(r).key);t(i)}),(function(t,n){e(n)}))}))})).catch(e)}));return o(e,t),e},dropInstance:function(t,n){n=c.apply(this,arguments);var e=this.config();(t="function"!=typeof t&&t||{}).name||(t.name=t.name||e.name,t.storeName=t.storeName||e.storeName);var i,r=this;return o(i=t.name?new s((function(n){var i;i=t.name===e.name?r._dbInfo.db:openDatabase(t.name,"","",0),n(t.storeName?{db:i,storeNames:[t.storeName]}:Z(i))})).then((function(t){return new s((function(n,e){t.db.transaction((function(i){function r(t){return new s((function(n,e){i.executeSql("DROP TABLE IF EXISTS "+t,[],(function(){n()}),(function(t,n){e(n)}))}))}for(var o=[],u=0,a=t.storeNames.length;u<a;u++)o.push(r(t.storeNames[u]));s.all(o).then((function(){n()})).catch((function(t){e(t)}))}),(function(t){e(t)}))}))})):s.reject("Invalid arguments"),n),i}};function nt(t,n){var e=t.name+"/";return t.storeName!==n.storeName&&(e+=t.storeName+"/"),e}function et(){return!function(){var t="_localforage_support_test";try{return localStorage.setItem(t,!0),localStorage.removeItem(t),!1}catch(t){return!0}}()||localStorage.length>0}var it={_driver:"localStorageWrapper",_initStorage:function(t){var n={};if(t)for(var e in t)n[e]=t[e];return n.keyPrefix=nt(t,this._defaultConfig),et()?(this._dbInfo=n,n.serializer=K,s.resolve()):s.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(t){return!1}}(),iterate:function(t,n){var e=this,i=e.ready().then((function(){for(var n=e._dbInfo,i=n.keyPrefix,r=i.length,s=localStorage.length,o=1,u=0;u<s;u++){var a=localStorage.key(u);if(0===a.indexOf(i)){var c=localStorage.getItem(a);if(c&&(c=n.serializer.deserialize(c)),void 0!==(c=t(c,a.substring(r),o++)))return c}}}));return o(i,n),i},getItem:function(t,n){var e=this;t=a(t);var i=e.ready().then((function(){var n=e._dbInfo,i=localStorage.getItem(n.keyPrefix+t);return i&&(i=n.serializer.deserialize(i)),i}));return o(i,n),i},setItem:function(t,n,e){var i=this;t=a(t);var r=i.ready().then((function(){void 0===n&&(n=null);var e=n;return new s((function(r,s){var o=i._dbInfo;o.serializer.serialize(n,(function(n,i){if(i)s(i);else try{localStorage.setItem(o.keyPrefix+t,n),r(e)}catch(t){"QuotaExceededError"!==t.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==t.name||s(t),s(t)}}))}))}));return o(r,e),r},removeItem:function(t,n){var e=this;t=a(t);var i=e.ready().then((function(){localStorage.removeItem(e._dbInfo.keyPrefix+t)}));return o(i,n),i},clear:function(t){var n=this,e=n.ready().then((function(){for(var t=n._dbInfo.keyPrefix,e=localStorage.length-1;e>=0;e--){var i=localStorage.key(e);0===i.indexOf(t)&&localStorage.removeItem(i)}}));return o(e,t),e},length:function(t){var n=this.keys().then((function(t){return t.length}));return o(n,t),n},key:function(t,n){var e=this,i=e.ready().then((function(){var n,i=e._dbInfo;try{n=localStorage.key(t)}catch(t){n=null}return n&&(n=n.substring(i.keyPrefix.length)),n}));return o(i,n),i},keys:function(t){var n=this,e=n.ready().then((function(){for(var t=n._dbInfo,e=localStorage.length,i=[],r=0;r<e;r++){var s=localStorage.key(r);0===s.indexOf(t.keyPrefix)&&i.push(s.substring(t.keyPrefix.length))}return i}));return o(e,t),e},dropInstance:function(t,n){if(n=c.apply(this,arguments),!(t="function"!=typeof t&&t||{}).name){var e=this.config();t.name=t.name||e.name,t.storeName=t.storeName||e.storeName}var i,r=this;return o(i=t.name?new s((function(n){n(t.storeName?nt(t,r._defaultConfig):t.name+"/")})).then((function(t){for(var n=localStorage.length-1;n>=0;n--){var e=localStorage.key(n);0===e.indexOf(t)&&localStorage.removeItem(e)}})):s.reject("Invalid arguments"),n),i}},rt=function(t,n){for(var e=t.length,i=0;i<e;){if((r=t[i])===(s=n)||"number"==typeof r&&"number"==typeof s&&isNaN(r)&&isNaN(s))return!0;i++}var r,s;return!1},st=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},ot={},ut={},at={INDEXEDDB:k,WEBSQL:tt,LOCALSTORAGE:it},ct=[at.INDEXEDDB._driver,at.WEBSQL._driver,at.LOCALSTORAGE._driver],ht=["dropInstance"],lt=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(ht),ft={description:"",driver:ct.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function dt(t,n){t[n]=function(){var e=arguments;return t.ready().then((function(){return t[n].apply(t,e)}))}}function pt(){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var e in n)n.hasOwnProperty(e)&&(arguments[0][e]=st(n[e])?n[e].slice():n[e])}return arguments[0]}var vt=new(function(){function t(n){for(var e in function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),at)if(at.hasOwnProperty(e)){var i=at[e],r=i._driver;this[e]=r,ot[r]||this.defineDriver(i)}this._defaultConfig=pt({},ft),this._config=pt({},this._defaultConfig,n),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return t.prototype.config=function(t){if("object"===(void 0===t?"undefined":e(t))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var n in t){if("storeName"===n&&(t[n]=t[n].replace(/\W/g,"_")),"version"===n&&"number"!=typeof t[n])return new Error("Database version must be a number.");this._config[n]=t[n]}return!("driver"in t)||!t.driver||this.setDriver(this._config.driver)}return"string"==typeof t?this._config[t]:this._config},t.prototype.defineDriver=function(t,n,e){var i=new s((function(n,e){try{var i=t._driver,r=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver)return void e(r);for(var u=lt.concat("_initStorage"),a=0,c=u.length;a<c;a++){var h=u[a];if((!rt(ht,h)||t[h])&&"function"!=typeof t[h])return void e(r)}!function(){for(var n=function(t){return function(){var n=new Error("Method "+t+" is not implemented by the current driver"),e=s.reject(n);return o(e,arguments[arguments.length-1]),e}},e=0,i=ht.length;e<i;e++){var r=ht[e];t[r]||(t[r]=n(r))}}();var l=function(e){ot[i]&&console.info("Redefining LocalForage driver: "+i),ot[i]=t,ut[i]=e,n()};"_support"in t?t._support&&"function"==typeof t._support?t._support().then(l,e):l(!!t._support):l(!0)}catch(t){e(t)}}));return u(i,n,e),i},t.prototype.driver=function(){return this._driver||null},t.prototype.getDriver=function(t,n,e){var i=ot[t]?s.resolve(ot[t]):s.reject(new Error("Driver not found."));return u(i,n,e),i},t.prototype.getSerializer=function(t){var n=s.resolve(K);return u(n,t),n},t.prototype.ready=function(t){var n=this,e=n._driverSet.then((function(){return null===n._ready&&(n._ready=n._initDriver()),n._ready}));return u(e,t,t),e},t.prototype.setDriver=function(t,n,e){var i=this;st(t)||(t=[t]);var r=this._getSupportedDrivers(t);function o(){i._config.driver=i.driver()}function a(t){return i._extend(t),o(),i._ready=i._initStorage(i._config),i._ready}var c=null!==this._driverSet?this._driverSet.catch((function(){return s.resolve()})):s.resolve();return this._driverSet=c.then((function(){var t=r[0];return i._dbInfo=null,i._ready=null,i.getDriver(t).then((function(t){i._driver=t._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=function(t){return function(){var n=0;return function e(){for(;n<t.length;){var r=t[n];return n++,i._dbInfo=null,i._ready=null,i.getDriver(r).then(a).catch(e)}o();var u=new Error("No available storage method found.");return i._driverSet=s.reject(u),i._driverSet}()}}(r)}))})).catch((function(){o();var t=new Error("No available storage method found.");return i._driverSet=s.reject(t),i._driverSet})),u(this._driverSet,n,e),this._driverSet},t.prototype.supports=function(t){return!!ut[t]},t.prototype._extend=function(t){pt(this,t)},t.prototype._getSupportedDrivers=function(t){for(var n=[],e=0,i=t.length;e<i;e++){var r=t[e];this.supports(r)&&n.push(r)}return n},t.prototype._wrapLibraryMethodsWithReady=function(){for(var t=0,n=lt.length;t<n;t++)dt(this,lt[t])},t.prototype.createInstance=function(n){return new t(n)},t}());n.exports=vt},{3:3}]},{},[4])(4)})),ka=ft((function(t,n){var e="undefined"!=typeof self?self:dt,i=function(){function t(){this.fetch=!1,this.DOMException=e.DOMException}return t.prototype=e,new t}();!function(t){!function(n){var e="URLSearchParams"in t,i="Symbol"in t&&"iterator"in Symbol,r="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in t,o="ArrayBuffer"in t;if(o)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function h(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var n={next:function(){var n=t.shift();return{done:void 0===n,value:n}}};return i&&(n[Symbol.iterator]=function(){return n}),n}function f(t){this.map={},t instanceof f?t.forEach((function(t,n){this.append(n,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(n){this.append(n,t[n])}),this)}function d(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(n,e){t.onload=function(){n(t.result)},t.onerror=function(){e(t.error)}}))}function v(t){var n=new FileReader,e=p(n);return n.readAsArrayBuffer(t),e}function m(t){if(t.slice)return t.slice(0);var n=new Uint8Array(t.byteLength);return n.set(new Uint8Array(t)),n.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){var n;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:r&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():o&&r&&(n=t)&&DataView.prototype.isPrototypeOf(n)?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(v)}),this.text=function(){var t,n,e,i=d(this);if(i)return i;if(this._bodyBlob)return t=this._bodyBlob,e=p(n=new FileReader),n.readAsText(t),e;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var n=new Uint8Array(t),e=new Array(n.length),i=0;i<n.length;i++)e[i]=String.fromCharCode(n[i]);return e.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,n){t=c(t),n=h(n);var e=this.map[t];this.map[t]=e?e+", "+n:n},f.prototype.delete=function(t){delete this.map[c(t)]},f.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},f.prototype.set=function(t,n){this.map[c(t)]=h(n)},f.prototype.forEach=function(t,n){for(var e in this.map)this.map.hasOwnProperty(e)&&t.call(n,this.map[e],e,this)},f.prototype.keys=function(){var t=[];return this.forEach((function(n,e){t.push(e)})),l(t)},f.prototype.values=function(){var t=[];return this.forEach((function(n){t.push(n)})),l(t)},f.prototype.entries=function(){var t=[];return this.forEach((function(n,e){t.push([e,n])})),l(t)},i&&(f.prototype[Symbol.iterator]=f.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(t,n){var e,i,r=(n=n||{}).body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,n.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=n.credentials||this.credentials||"same-origin",!n.headers&&this.headers||(this.headers=new f(n.headers)),this.method=(i=(e=n.method||this.method||"GET").toUpperCase(),y.indexOf(i)>-1?i:e),this.mode=n.mode||this.mode||null,this.signal=n.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function b(t){var n=new FormData;return t.trim().split("&").forEach((function(t){if(t){var e=t.split("="),i=e.shift().replace(/\+/g," "),r=e.join("=").replace(/\+/g," ");n.append(decodeURIComponent(i),decodeURIComponent(r))}})),n}function E(t,n){n||(n={}),this.type="default",this.status=void 0===n.status?200:n.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in n?n.statusText:"OK",this.headers=new f(n.headers),this.url=n.url||"",this._initBody(t)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},w.call(g.prototype),w.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];E.redirect=function(t,n){if(-1===_.indexOf(n))throw new RangeError("Invalid status code");return new E(null,{status:n,headers:{location:t}})},n.DOMException=t.DOMException;try{new n.DOMException}catch(t){n.DOMException=function(t,n){this.message=t,this.name=n;var e=Error(t);this.stack=e.stack},n.DOMException.prototype=Object.create(Error.prototype),n.DOMException.prototype.constructor=n.DOMException}function I(t,e){return new Promise((function(i,s){var o=new g(t,e);if(o.signal&&o.signal.aborted)return s(new n.DOMException("Aborted","AbortError"));var u=new XMLHttpRequest;function a(){u.abort()}u.onload=function(){var t,n,e={status:u.status,statusText:u.statusText,headers:(t=u.getAllResponseHeaders()||"",n=new f,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var e=t.split(":"),i=e.shift().trim();if(i){var r=e.join(":").trim();n.append(i,r)}})),n)};e.url="responseURL"in u?u.responseURL:e.headers.get("X-Request-URL"),i(new E("response"in u?u.response:u.responseText,e))},u.onerror=function(){s(new TypeError("Network request failed"))},u.ontimeout=function(){s(new TypeError("Network request failed"))},u.onabort=function(){s(new n.DOMException("Aborted","AbortError"))},u.open(o.method,o.url,!0),"include"===o.credentials?u.withCredentials=!0:"omit"===o.credentials&&(u.withCredentials=!1),"responseType"in u&&r&&(u.responseType="blob"),o.headers.forEach((function(t,n){u.setRequestHeader(n,t)})),o.signal&&(o.signal.addEventListener("abort",a),u.onreadystatechange=function(){4===u.readyState&&o.signal.removeEventListener("abort",a)}),u.send(void 0===o._bodyInit?null:o._bodyInit)}))}I.polyfill=!0,t.fetch||(t.fetch=I,t.Headers=f,t.Request=g,t.Response=E),n.Headers=f,n.Request=g,n.Response=E,n.fetch=I,Object.defineProperty(n,"__esModule",{value:!0})}({})}(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var r=i;(n=r.fetch).default=r.fetch,n.fetch=r.fetch,n.Headers=r.Headers,n.Request=r.Request,n.Response=r.Response,t.exports=n})),Ra=ft((function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return"object"==e(t)&&null!==t}})),Ca=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.SYMBOL_TO_STRING_TAG=n.SYMBOL_ASYNC_ITERATOR=n.SYMBOL_ITERATOR=void 0;var e="function"==typeof Symbol&&null!=Symbol.iterator?Symbol.iterator:"@@iterator";n.SYMBOL_ITERATOR=e;var i="function"==typeof Symbol&&null!=Symbol.asyncIterator?Symbol.asyncIterator:"@@asyncIterator";n.SYMBOL_ASYNC_ITERATOR=i;var r="function"==typeof Symbol&&null!=Symbol.toStringTag?Symbol.toStringTag:"@@toStringTag";n.SYMBOL_TO_STRING_TAG=r})),Da=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getLocation=function(t,n){for(var e,i=/\r\n|[\n\r]/g,r=1,s=n+1;(e=i.exec(t.body))&&e.index<n;)r+=1,s=n+1-(e.index+e[0].length);return{line:r,column:s}}})),Pa=ft((function(t,n){function e(t,n){var e=t.locationOffset.column-1,s=r(e)+t.body,o=n.line-1,u=n.line+(t.locationOffset.line-1),a=n.column+(1===n.line?e:0),c="".concat(t.name,":").concat(u,":").concat(a,"\n"),h=s.split(/\r\n|[\n\r]/g),l=h[o];if(l.length>120){for(var f=Math.floor(a/80),d=a%80,p=[],v=0;v<l.length;v+=80)p.push(l.slice(v,v+80));return c+i([["".concat(u),p[0]]].concat(p.slice(1,f+1).map((function(t){return["",t]})),[[" ",r(d-1)+"^"],["",p[f+1]]]))}return c+i([["".concat(u-1),h[o-1]],["".concat(u),l],["",r(a-1)+"^"],["".concat(u+1),h[o+1]]])}function i(t){var n=t.filter((function(t){return void 0!==t[1]})),e=Math.max.apply(Math,n.map((function(t){return t[0].length})));return n.map((function(t){var n,i=t[1];return r(e-(n=t[0]).length)+n+(i?" | "+i:" |")})).join("\n")}function r(t){return Array(t+1).join(" ")}Object.defineProperty(n,"__esModule",{value:!0}),n.printLocation=function(t){return e(t.source,(0,Da.getLocation)(t.source,t.start))},n.printSourceLocation=e})),ja=ft((function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.printError=w,n.GraphQLError=void 0;var i,r=(i=Ra)&&i.__esModule?i:{default:i};function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?c(t):n}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){var n="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return l(t,arguments,p(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),d(e,t)})(t)}function l(t,n,e){return(l=f()?Reflect.construct:function(t,n,e){var i=[null];i.push.apply(i,n);var r=new(Function.bind.apply(t,i));return e&&d(r,e.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t,n){return(d=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&d(t,n)}(v,t);var n,e,i,h,l=(n=v,e=f(),function(){var t,i=p(n);if(e){var r=p(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return a(this,t)});function v(t,n,e,i,u,h,f){var d,p,w,y;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,v),(y=l.call(this,t)).name="GraphQLError",y.originalError=null!=h?h:void 0,y.nodes=m(Array.isArray(n)?n:n?[n]:void 0);for(var g=[],b=0,E=null!==(_=y.nodes)&&void 0!==_?_:[];b<E.length;b++){var _,I=E[b].loc;null!=I&&g.push(I)}g=m(g),y.source=null!=e?e:null===(d=g)||void 0===d?void 0:d[0].source,y.positions=null!=i?i:null===(p=g)||void 0===p?void 0:p.map((function(t){return t.start})),y.locations=i&&e?i.map((function(t){return(0,Da.getLocation)(e,t)})):null===(w=g)||void 0===w?void 0:w.map((function(t){return(0,Da.getLocation)(t.source,t.start)})),y.path=null!=u?u:void 0;var T=null==h?void 0:h.extensions;return y.extensions=null==f&&(0,r.default)(T)?function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},T):null!=f?f:{},Object.defineProperties(c(y),{message:{enumerable:!0},locations:{enumerable:null!=y.locations},path:{enumerable:null!=y.path},extensions:{enumerable:null!=y.extensions&&Object.keys(y.extensions).length>0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=h&&h.stack?(Object.defineProperty(c(y),"stack",{value:h.stack,writable:!0,configurable:!0}),a(y)):(Error.captureStackTrace?Error.captureStackTrace(c(y),v):Object.defineProperty(c(y),"stack",{value:Error().stack,writable:!0,configurable:!0}),y)}return i=v,(h=[{key:"toString",value:function(){return w(this)}},{key:Ca.SYMBOL_TO_STRING_TAG,get:function(){return"Object"}}])&&u(i.prototype,h),v}(h(Error));function m(t){return void 0===t||0===t.length?void 0:t}function w(t){var n=t.message;if(t.nodes)for(var e=0,i=t.nodes;e<i.length;e++){var r=i[e];r.loc&&(n+="\n\n"+(0,Pa.printLocation)(r.loc))}else if(t.source&&t.locations)for(var s=0,o=t.locations;s<o.length;s++)n+="\n\n"+(0,Pa.printSourceLocation)(t.source,o[s]);return n}n.GraphQLError=v})),Ma=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.syntaxError=function(t,n,e){return new ja.GraphQLError("Syntax Error: ".concat(e),void 0,t,[n])}})),La=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Kind=void 0;var e=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"});n.Kind=e})),xa=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,n){if(!Boolean(t))throw new Error(null!=n?n:"Unexpected invariant triggered.")}})),Fa=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):void 0;n.default=e})),Ua=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){var n=t.prototype.toJSON;"function"==typeof n||(0,e.default)(0),t.prototype.inspect=n,i.default&&(t.prototype[i.default]=n)};var e=r(xa),i=r(Fa);function r(t){return t&&t.__esModule?t:{default:t}}})),Va=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.isNode=function(t){return null!=t&&"string"==typeof t.kind},n.Token=n.Location=void 0;var e,i=(e=Ua)&&e.__esModule?e:{default:e},r=function(){function t(t,n,e){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=e}return t.prototype.toJSON=function(){return{start:this.start,end:this.end}},t}();n.Location=r,(0,i.default)(r);var s=function(){function t(t,n,e,i,r,s,o){this.kind=t,this.start=n,this.end=e,this.line=i,this.column=r,this.value=o,this.prev=s,this.next=null}return t.prototype.toJSON=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}},t}();n.Token=s,(0,i.default)(s)})),qa=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.TokenKind=void 0;var e=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});n.TokenKind=e})),Ba=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return s(t,[])};var e,i=(e=Fa)&&e.__esModule?e:{default:e};function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,n){switch(r(t)){case"string":return JSON.stringify(t);case"function":return t.name?"[function ".concat(t.name,"]"):"[function]";case"object":return null===t?"null":function(t,n){if(-1!==n.indexOf(t))return"[Circular]";var e=[].concat(n,[t]),r=function(t){var n=t[String(i.default)];return"function"==typeof n?n:"function"==typeof t.inspect?t.inspect:void 0}(t);if(void 0!==r){var o=r.call(t);if(o!==t)return"string"==typeof o?o:s(o,e)}else if(Array.isArray(t))return function(t,n){if(0===t.length)return"[]";if(n.length>2)return"[Array]";for(var e=Math.min(10,t.length),i=t.length-e,r=[],o=0;o<e;++o)r.push(s(t[o],n));return 1===i?r.push("... 1 more item"):i>1&&r.push("... ".concat(i," more items")),"["+r.join(", ")+"]"}(t,e);return function(t,n){var e=Object.keys(t);return 0===e.length?"{}":n.length>2?"["+function(t){var n=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if("Object"===n&&"function"==typeof t.constructor){var e=t.constructor.name;if("string"==typeof e&&""!==e)return e}return n}(t)+"]":"{ "+e.map((function(e){return e+": "+s(t[e],n)})).join(", ")+" }"}(t,e)}(t,n);default:return String(t)}}})),$a=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,n){if(!Boolean(t))throw new Error(n)}})),Wa=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,n.default=function(t,n){return t instanceof n}})),Ga=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.isSource=function(t){return(0,r.default)(t,u)},n.Source=void 0;var e=s(Ba),i=s($a),r=s(Wa);function s(t){return t&&t.__esModule?t:{default:t}}function o(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GraphQL request",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{line:1,column:1};"string"==typeof t||(0,i.default)(0,"Body must be a string. Received: ".concat((0,e.default)(t),".")),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||(0,i.default)(0,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||(0,i.default)(0,"column in locationOffset is 1-indexed and must be positive.")}var n,r;return n=t,(r=[{key:Ca.SYMBOL_TO_STRING_TAG,get:function(){return"Source"}}])&&o(n.prototype,r),t}();n.Source=u})),Ja=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.DirectiveLocation=void 0;var e=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"});n.DirectiveLocation=e})),za=ft((function(t,n){function e(t){for(var n=0;n<t.length;++n)if(" "!==t[n]&&"\t"!==t[n])return!1;return!0}function i(t){for(var n,e=!0,i=!0,r=0,s=null,o=0;o<t.length;++o)switch(t.charCodeAt(o)){case 13:10===t.charCodeAt(o+1)&&++o;case 10:e=!1,i=!0,r=0;break;case 9:case 32:++r;break;default:i&&!e&&(null===s||r<s)&&(s=r),i=!1}return null!==(n=s)&&void 0!==n?n:0}Object.defineProperty(n,"__esModule",{value:!0}),n.dedentBlockStringValue=function(t){var n=t.split(/\r\n|[\n\r]/g),r=i(t);if(0!==r)for(var s=1;s<n.length;s++)n[s]=n[s].slice(r);for(var o=0;o<n.length&&e(n[o]);)++o;for(var u=n.length;u>o&&e(n[u-1]);)--u;return n.slice(o,u).join("\n")},n.getBlockStringIndentation=i,n.printBlockString=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=-1===t.indexOf("\n"),r=" "===t[0]||"\t"===t[0],s='"'===t[t.length-1],o="\\"===t[t.length-1],u=!i||s||o||e,a="";return!u||i&&r||(a+="\n"+n),a+=n?t.replace(/\n/g,"\n"+n):t,u&&(a+="\n"),'"""'+a.replace(/"""/g,'\\"""')+'"""'}})),Ha=ft((function(t,n){function e(t){return isNaN(t)?qa.TokenKind.EOF:t<127?JSON.stringify(String.fromCharCode(t)):'"\\u'.concat(("00"+t.toString(16).toUpperCase()).slice(-4),'"')}function i(t,n){for(var e=t.source,i=e.body,u=i.length,h=n.end;h<u;){var f=i.charCodeAt(h),d=t.line,p=1+h-t.lineStart;switch(f){case 65279:case 9:case 32:case 44:++h;continue;case 10:++h,++t.line,t.lineStart=h;continue;case 13:10===i.charCodeAt(h+1)?h+=2:++h,++t.line,t.lineStart=h;continue;case 33:return new Va.Token(qa.TokenKind.BANG,h,h+1,d,p,n);case 35:return s(e,h,d,p,n);case 36:return new Va.Token(qa.TokenKind.DOLLAR,h,h+1,d,p,n);case 38:return new Va.Token(qa.TokenKind.AMP,h,h+1,d,p,n);case 40:return new Va.Token(qa.TokenKind.PAREN_L,h,h+1,d,p,n);case 41:return new Va.Token(qa.TokenKind.PAREN_R,h,h+1,d,p,n);case 46:if(46===i.charCodeAt(h+1)&&46===i.charCodeAt(h+2))return new Va.Token(qa.TokenKind.SPREAD,h,h+3,d,p,n);break;case 58:return new Va.Token(qa.TokenKind.COLON,h,h+1,d,p,n);case 61:return new Va.Token(qa.TokenKind.EQUALS,h,h+1,d,p,n);case 64:return new Va.Token(qa.TokenKind.AT,h,h+1,d,p,n);case 91:return new Va.Token(qa.TokenKind.BRACKET_L,h,h+1,d,p,n);case 93:return new Va.Token(qa.TokenKind.BRACKET_R,h,h+1,d,p,n);case 123:return new Va.Token(qa.TokenKind.BRACE_L,h,h+1,d,p,n);case 124:return new Va.Token(qa.TokenKind.PIPE,h,h+1,d,p,n);case 125:return new Va.Token(qa.TokenKind.BRACE_R,h,h+1,d,p,n);case 34:return 34===i.charCodeAt(h+1)&&34===i.charCodeAt(h+2)?c(e,h,d,p,n,t):a(e,h,d,p,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return o(e,h,f,d,p,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return l(e,h,d,p,n)}throw(0,Ma.syntaxError)(e,h,r(f))}return new Va.Token(qa.TokenKind.EOF,u,u,t.line,1+h-t.lineStart,n)}function r(t){return t<32&&9!==t&&10!==t&&13!==t?"Cannot contain the invalid character ".concat(e(t),"."):39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(e(t),".")}function s(t,n,e,i,r){var s,o=t.body,u=n;do{s=o.charCodeAt(++u)}while(!isNaN(s)&&(s>31||9===s));return new Va.Token(qa.TokenKind.COMMENT,n,u,e,i,r,o.slice(n+1,u))}function o(t,n,i,r,s,o){var a=t.body,c=i,h=n,l=!1;if(45===c&&(c=a.charCodeAt(++h)),48===c){if((c=a.charCodeAt(++h))>=48&&c<=57)throw(0,Ma.syntaxError)(t,h,"Invalid number, unexpected digit after 0: ".concat(e(c),"."))}else h=u(t,h,c),c=a.charCodeAt(h);if(46===c&&(l=!0,c=a.charCodeAt(++h),h=u(t,h,c),c=a.charCodeAt(h)),69!==c&&101!==c||(l=!0,43!==(c=a.charCodeAt(++h))&&45!==c||(c=a.charCodeAt(++h)),h=u(t,h,c),c=a.charCodeAt(h)),46===c||function(t){return 95===t||t>=65&&t<=90||t>=97&&t<=122}(c))throw(0,Ma.syntaxError)(t,h,"Invalid number, expected digit but got: ".concat(e(c),"."));return new Va.Token(l?qa.TokenKind.FLOAT:qa.TokenKind.INT,n,h,r,s,o,a.slice(n,h))}function u(t,n,i){var r=t.body,s=n,o=i;if(o>=48&&o<=57){do{o=r.charCodeAt(++s)}while(o>=48&&o<=57);return s}throw(0,Ma.syntaxError)(t,s,"Invalid number, expected digit but got: ".concat(e(o),"."))}function a(t,n,i,r,s){for(var o,u,a,c,l=t.body,f=n+1,d=f,p=0,v="";f<l.length&&!isNaN(p=l.charCodeAt(f))&&10!==p&&13!==p;){if(34===p)return v+=l.slice(d,f),new Va.Token(qa.TokenKind.STRING,n,f+1,i,r,s,v);if(p<32&&9!==p)throw(0,Ma.syntaxError)(t,f,"Invalid character within String: ".concat(e(p),"."));if(++f,92===p){switch(v+=l.slice(d,f-1),p=l.charCodeAt(f)){case 34:v+='"';break;case 47:v+="/";break;case 92:v+="\\";break;case 98:v+="\b";break;case 102:v+="\f";break;case 110:v+="\n";break;case 114:v+="\r";break;case 116:v+="\t";break;case 117:var m=(o=l.charCodeAt(f+1),u=l.charCodeAt(f+2),a=l.charCodeAt(f+3),c=l.charCodeAt(f+4),h(o)<<12|h(u)<<8|h(a)<<4|h(c));if(m<0){var w=l.slice(f+1,f+5);throw(0,Ma.syntaxError)(t,f,"Invalid character escape sequence: \\u".concat(w,"."))}v+=String.fromCharCode(m),f+=4;break;default:throw(0,Ma.syntaxError)(t,f,"Invalid character escape sequence: \\".concat(String.fromCharCode(p),"."))}d=++f}}throw(0,Ma.syntaxError)(t,f,"Unterminated string.")}function c(t,n,i,r,s,o){for(var u=t.body,a=n+3,c=a,h=0,l="";a<u.length&&!isNaN(h=u.charCodeAt(a));){if(34===h&&34===u.charCodeAt(a+1)&&34===u.charCodeAt(a+2))return l+=u.slice(c,a),new Va.Token(qa.TokenKind.BLOCK_STRING,n,a+3,i,r,s,(0,za.dedentBlockStringValue)(l));if(h<32&&9!==h&&10!==h&&13!==h)throw(0,Ma.syntaxError)(t,a,"Invalid character within String: ".concat(e(h),"."));10===h?(++a,++o.line,o.lineStart=a):13===h?(10===u.charCodeAt(a+1)?a+=2:++a,++o.line,o.lineStart=a):92===h&&34===u.charCodeAt(a+1)&&34===u.charCodeAt(a+2)&&34===u.charCodeAt(a+3)?(l+=u.slice(c,a)+'"""',c=a+=4):++a}throw(0,Ma.syntaxError)(t,a,"Unterminated string.")}function h(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function l(t,n,e,i,r){for(var s=t.body,o=s.length,u=n+1,a=0;u!==o&&!isNaN(a=s.charCodeAt(u))&&(95===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122);)++u;return new Va.Token(qa.TokenKind.NAME,n,u,e,i,r,s.slice(n,u))}Object.defineProperty(n,"__esModule",{value:!0}),n.isPunctuatorTokenKind=function(t){return t===qa.TokenKind.BANG||t===qa.TokenKind.DOLLAR||t===qa.TokenKind.AMP||t===qa.TokenKind.PAREN_L||t===qa.TokenKind.PAREN_R||t===qa.TokenKind.SPREAD||t===qa.TokenKind.COLON||t===qa.TokenKind.EQUALS||t===qa.TokenKind.AT||t===qa.TokenKind.BRACKET_L||t===qa.TokenKind.BRACKET_R||t===qa.TokenKind.BRACE_L||t===qa.TokenKind.PIPE||t===qa.TokenKind.BRACE_R},n.Lexer=void 0,n.Lexer=function(){function t(t){var n=new Va.Token(qa.TokenKind.SOF,0,0,0,0,null);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}var n=t.prototype;return n.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},n.lookahead=function(){var t=this.token;if(t.kind!==qa.TokenKind.EOF)do{var n;t=null!==(n=t.next)&&void 0!==n?n:t.next=i(this,t)}while(t.kind===qa.TokenKind.COMMENT);return t},t}()})),Ka=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.parse=function(t,n){return new e(t,n).parseDocument()},n.parseValue=function(t,n){var i=new e(t,n);i.expectToken(qa.TokenKind.SOF);var r=i.parseValueLiteral(!1);return i.expectToken(qa.TokenKind.EOF),r},n.parseType=function(t,n){var i=new e(t,n);i.expectToken(qa.TokenKind.SOF);var r=i.parseTypeReference();return i.expectToken(qa.TokenKind.EOF),r},n.Parser=void 0;var e=function(){function t(t,n){var e=(0,Ga.isSource)(t)?t:new Ga.Source(t);this._lexer=new Ha.Lexer(e),this._options=n}var n=t.prototype;return n.parseName=function(){var t=this.expectToken(qa.TokenKind.NAME);return{kind:La.Kind.NAME,value:t.value,loc:this.loc(t)}},n.parseDocument=function(){var t=this._lexer.token;return{kind:La.Kind.DOCUMENT,definitions:this.many(qa.TokenKind.SOF,this.parseDefinition,qa.TokenKind.EOF),loc:this.loc(t)}},n.parseDefinition=function(){if(this.peek(qa.TokenKind.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(qa.TokenKind.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},n.parseOperationDefinition=function(){var t=this._lexer.token;if(this.peek(qa.TokenKind.BRACE_L))return{kind:La.Kind.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(t)};var n,e=this.parseOperationType();return this.peek(qa.TokenKind.NAME)&&(n=this.parseName()),{kind:La.Kind.OPERATION_DEFINITION,operation:e,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},n.parseOperationType=function(){var t=this.expectToken(qa.TokenKind.NAME);switch(t.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(t)},n.parseVariableDefinitions=function(){return this.optionalMany(qa.TokenKind.PAREN_L,this.parseVariableDefinition,qa.TokenKind.PAREN_R)},n.parseVariableDefinition=function(){var t=this._lexer.token;return{kind:La.Kind.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(qa.TokenKind.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(qa.TokenKind.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(t)}},n.parseVariable=function(){var t=this._lexer.token;return this.expectToken(qa.TokenKind.DOLLAR),{kind:La.Kind.VARIABLE,name:this.parseName(),loc:this.loc(t)}},n.parseSelectionSet=function(){var t=this._lexer.token;return{kind:La.Kind.SELECTION_SET,selections:this.many(qa.TokenKind.BRACE_L,this.parseSelection,qa.TokenKind.BRACE_R),loc:this.loc(t)}},n.parseSelection=function(){return this.peek(qa.TokenKind.SPREAD)?this.parseFragment():this.parseField()},n.parseField=function(){var t,n,e=this._lexer.token,i=this.parseName();return this.expectOptionalToken(qa.TokenKind.COLON)?(t=i,n=this.parseName()):n=i,{kind:La.Kind.FIELD,alias:t,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(qa.TokenKind.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(e)}},n.parseArguments=function(t){return this.optionalMany(qa.TokenKind.PAREN_L,t?this.parseConstArgument:this.parseArgument,qa.TokenKind.PAREN_R)},n.parseArgument=function(){var t=this._lexer.token,n=this.parseName();return this.expectToken(qa.TokenKind.COLON),{kind:La.Kind.ARGUMENT,name:n,value:this.parseValueLiteral(!1),loc:this.loc(t)}},n.parseConstArgument=function(){var t=this._lexer.token;return{kind:La.Kind.ARGUMENT,name:this.parseName(),value:(this.expectToken(qa.TokenKind.COLON),this.parseValueLiteral(!0)),loc:this.loc(t)}},n.parseFragment=function(){var t=this._lexer.token;this.expectToken(qa.TokenKind.SPREAD);var n=this.expectOptionalKeyword("on");return!n&&this.peek(qa.TokenKind.NAME)?{kind:La.Kind.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(t)}:{kind:La.Kind.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},n.parseFragmentDefinition=function(){var t,n=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(t=this._options)||void 0===t?void 0:t.experimentalFragmentVariables)?{kind:La.Kind.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(n)}:{kind:La.Kind.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(n)}},n.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},n.parseValueLiteral=function(t){var n=this._lexer.token;switch(n.kind){case qa.TokenKind.BRACKET_L:return this.parseList(t);case qa.TokenKind.BRACE_L:return this.parseObject(t);case qa.TokenKind.INT:return this._lexer.advance(),{kind:La.Kind.INT,value:n.value,loc:this.loc(n)};case qa.TokenKind.FLOAT:return this._lexer.advance(),{kind:La.Kind.FLOAT,value:n.value,loc:this.loc(n)};case qa.TokenKind.STRING:case qa.TokenKind.BLOCK_STRING:return this.parseStringLiteral();case qa.TokenKind.NAME:switch(this._lexer.advance(),n.value){case"true":return{kind:La.Kind.BOOLEAN,value:!0,loc:this.loc(n)};case"false":return{kind:La.Kind.BOOLEAN,value:!1,loc:this.loc(n)};case"null":return{kind:La.Kind.NULL,loc:this.loc(n)};default:return{kind:La.Kind.ENUM,value:n.value,loc:this.loc(n)}}case qa.TokenKind.DOLLAR:if(!t)return this.parseVariable()}throw this.unexpected()},n.parseStringLiteral=function(){var t=this._lexer.token;return this._lexer.advance(),{kind:La.Kind.STRING,value:t.value,block:t.kind===qa.TokenKind.BLOCK_STRING,loc:this.loc(t)}},n.parseList=function(t){var n=this,e=this._lexer.token;return{kind:La.Kind.LIST,values:this.any(qa.TokenKind.BRACKET_L,(function(){return n.parseValueLiteral(t)}),qa.TokenKind.BRACKET_R),loc:this.loc(e)}},n.parseObject=function(t){var n=this,e=this._lexer.token;return{kind:La.Kind.OBJECT,fields:this.any(qa.TokenKind.BRACE_L,(function(){return n.parseObjectField(t)}),qa.TokenKind.BRACE_R),loc:this.loc(e)}},n.parseObjectField=function(t){var n=this._lexer.token,e=this.parseName();return this.expectToken(qa.TokenKind.COLON),{kind:La.Kind.OBJECT_FIELD,name:e,value:this.parseValueLiteral(t),loc:this.loc(n)}},n.parseDirectives=function(t){for(var n=[];this.peek(qa.TokenKind.AT);)n.push(this.parseDirective(t));return n},n.parseDirective=function(t){var n=this._lexer.token;return this.expectToken(qa.TokenKind.AT),{kind:La.Kind.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t),loc:this.loc(n)}},n.parseTypeReference=function(){var t,n=this._lexer.token;return this.expectOptionalToken(qa.TokenKind.BRACKET_L)?(t=this.parseTypeReference(),this.expectToken(qa.TokenKind.BRACKET_R),t={kind:La.Kind.LIST_TYPE,type:t,loc:this.loc(n)}):t=this.parseNamedType(),this.expectOptionalToken(qa.TokenKind.BANG)?{kind:La.Kind.NON_NULL_TYPE,type:t,loc:this.loc(n)}:t},n.parseNamedType=function(){var t=this._lexer.token;return{kind:La.Kind.NAMED_TYPE,name:this.parseName(),loc:this.loc(t)}},n.parseTypeSystemDefinition=function(){var t=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(t.kind===qa.TokenKind.NAME)switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(t)},n.peekDescription=function(){return this.peek(qa.TokenKind.STRING)||this.peek(qa.TokenKind.BLOCK_STRING)},n.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},n.parseSchemaDefinition=function(){var t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");var e=this.parseDirectives(!0),i=this.many(qa.TokenKind.BRACE_L,this.parseOperationTypeDefinition,qa.TokenKind.BRACE_R);return{kind:La.Kind.SCHEMA_DEFINITION,description:n,directives:e,operationTypes:i,loc:this.loc(t)}},n.parseOperationTypeDefinition=function(){var t=this._lexer.token,n=this.parseOperationType();this.expectToken(qa.TokenKind.COLON);var e=this.parseNamedType();return{kind:La.Kind.OPERATION_TYPE_DEFINITION,operation:n,type:e,loc:this.loc(t)}},n.parseScalarTypeDefinition=function(){var t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");var e=this.parseName(),i=this.parseDirectives(!0);return{kind:La.Kind.SCALAR_TYPE_DEFINITION,description:n,name:e,directives:i,loc:this.loc(t)}},n.parseObjectTypeDefinition=function(){var t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");var e=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),s=this.parseFieldsDefinition();return{kind:La.Kind.OBJECT_TYPE_DEFINITION,description:n,name:e,interfaces:i,directives:r,fields:s,loc:this.loc(t)}},n.parseImplementsInterfaces=function(){var t;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(t=this._options)||void 0===t?void 0:t.allowLegacySDLImplementsInterfaces)){var n=[];this.expectOptionalToken(qa.TokenKind.AMP);do{n.push(this.parseNamedType())}while(this.expectOptionalToken(qa.TokenKind.AMP)||this.peek(qa.TokenKind.NAME));return n}return this.delimitedMany(qa.TokenKind.AMP,this.parseNamedType)},n.parseFieldsDefinition=function(){var t;return!0===(null===(t=this._options)||void 0===t?void 0:t.allowLegacySDLEmptyFields)&&this.peek(qa.TokenKind.BRACE_L)&&this._lexer.lookahead().kind===qa.TokenKind.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(qa.TokenKind.BRACE_L,this.parseFieldDefinition,qa.TokenKind.BRACE_R)},n.parseFieldDefinition=function(){var t=this._lexer.token,n=this.parseDescription(),e=this.parseName(),i=this.parseArgumentDefs();this.expectToken(qa.TokenKind.COLON);var r=this.parseTypeReference(),s=this.parseDirectives(!0);return{kind:La.Kind.FIELD_DEFINITION,description:n,name:e,arguments:i,type:r,directives:s,loc:this.loc(t)}},n.parseArgumentDefs=function(){return this.optionalMany(qa.TokenKind.PAREN_L,this.parseInputValueDef,qa.TokenKind.PAREN_R)},n.parseInputValueDef=function(){var t=this._lexer.token,n=this.parseDescription(),e=this.parseName();this.expectToken(qa.TokenKind.COLON);var i,r=this.parseTypeReference();this.expectOptionalToken(qa.TokenKind.EQUALS)&&(i=this.parseValueLiteral(!0));var s=this.parseDirectives(!0);return{kind:La.Kind.INPUT_VALUE_DEFINITION,description:n,name:e,type:r,defaultValue:i,directives:s,loc:this.loc(t)}},n.parseInterfaceTypeDefinition=function(){var t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");var e=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),s=this.parseFieldsDefinition();return{kind:La.Kind.INTERFACE_TYPE_DEFINITION,description:n,name:e,interfaces:i,directives:r,fields:s,loc:this.loc(t)}},n.parseUnionTypeDefinition=function(){var t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");var e=this.parseName(),i=this.parseDirectives(!0),r=this.parseUnionMemberTypes();return{kind:La.Kind.UNION_TYPE_DEFINITION,description:n,name:e,directives:i,types:r,loc:this.loc(t)}},n.parseUnionMemberTypes=function(){return this.expectOptionalToken(qa.TokenKind.EQUALS)?this.delimitedMany(qa.TokenKind.PIPE,this.parseNamedType):[]},n.parseEnumTypeDefinition=function(){var t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");var e=this.parseName(),i=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();return{kind:La.Kind.ENUM_TYPE_DEFINITION,description:n,name:e,directives:i,values:r,loc:this.loc(t)}},n.parseEnumValuesDefinition=function(){return this.optionalMany(qa.TokenKind.BRACE_L,this.parseEnumValueDefinition,qa.TokenKind.BRACE_R)},n.parseEnumValueDefinition=function(){var t=this._lexer.token,n=this.parseDescription(),e=this.parseName(),i=this.parseDirectives(!0);return{kind:La.Kind.ENUM_VALUE_DEFINITION,description:n,name:e,directives:i,loc:this.loc(t)}},n.parseInputObjectTypeDefinition=function(){var t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");var e=this.parseName(),i=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();return{kind:La.Kind.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:e,directives:i,fields:r,loc:this.loc(t)}},n.parseInputFieldsDefinition=function(){return this.optionalMany(qa.TokenKind.BRACE_L,this.parseInputValueDef,qa.TokenKind.BRACE_R)},n.parseTypeSystemExtension=function(){var t=this._lexer.lookahead();if(t.kind===qa.TokenKind.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)},n.parseSchemaExtension=function(){var t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var n=this.parseDirectives(!0),e=this.optionalMany(qa.TokenKind.BRACE_L,this.parseOperationTypeDefinition,qa.TokenKind.BRACE_R);if(0===n.length&&0===e.length)throw this.unexpected();return{kind:La.Kind.SCHEMA_EXTENSION,directives:n,operationTypes:e,loc:this.loc(t)}},n.parseScalarTypeExtension=function(){var t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var n=this.parseName(),e=this.parseDirectives(!0);if(0===e.length)throw this.unexpected();return{kind:La.Kind.SCALAR_TYPE_EXTENSION,name:n,directives:e,loc:this.loc(t)}},n.parseObjectTypeExtension=function(){var t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var n=this.parseName(),e=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===e.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:La.Kind.OBJECT_TYPE_EXTENSION,name:n,interfaces:e,directives:i,fields:r,loc:this.loc(t)}},n.parseInterfaceTypeExtension=function(){var t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var n=this.parseName(),e=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===e.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:La.Kind.INTERFACE_TYPE_EXTENSION,name:n,interfaces:e,directives:i,fields:r,loc:this.loc(t)}},n.parseUnionTypeExtension=function(){var t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var n=this.parseName(),e=this.parseDirectives(!0),i=this.parseUnionMemberTypes();if(0===e.length&&0===i.length)throw this.unexpected();return{kind:La.Kind.UNION_TYPE_EXTENSION,name:n,directives:e,types:i,loc:this.loc(t)}},n.parseEnumTypeExtension=function(){var t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var n=this.parseName(),e=this.parseDirectives(!0),i=this.parseEnumValuesDefinition();if(0===e.length&&0===i.length)throw this.unexpected();return{kind:La.Kind.ENUM_TYPE_EXTENSION,name:n,directives:e,values:i,loc:this.loc(t)}},n.parseInputObjectTypeExtension=function(){var t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var n=this.parseName(),e=this.parseDirectives(!0),i=this.parseInputFieldsDefinition();if(0===e.length&&0===i.length)throw this.unexpected();return{kind:La.Kind.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:e,fields:i,loc:this.loc(t)}},n.parseDirectiveDefinition=function(){var t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(qa.TokenKind.AT);var e=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var s=this.parseDirectiveLocations();return{kind:La.Kind.DIRECTIVE_DEFINITION,description:n,name:e,arguments:i,repeatable:r,locations:s,loc:this.loc(t)}},n.parseDirectiveLocations=function(){return this.delimitedMany(qa.TokenKind.PIPE,this.parseDirectiveLocation)},n.parseDirectiveLocation=function(){var t=this._lexer.token,n=this.parseName();if(void 0!==Ja.DirectiveLocation[n.value])return n;throw this.unexpected(t)},n.loc=function(t){var n;if(!0!==(null===(n=this._options)||void 0===n?void 0:n.noLocation))return new Va.Location(t,this._lexer.lastToken,this._lexer.source)},n.peek=function(t){return this._lexer.token.kind===t},n.expectToken=function(t){var n=this._lexer.token;if(n.kind===t)return this._lexer.advance(),n;throw(0,Ma.syntaxError)(this._lexer.source,n.start,"Expected ".concat(r(t),", found ").concat(i(n),"."))},n.expectOptionalToken=function(t){var n=this._lexer.token;if(n.kind===t)return this._lexer.advance(),n},n.expectKeyword=function(t){var n=this._lexer.token;if(n.kind!==qa.TokenKind.NAME||n.value!==t)throw(0,Ma.syntaxError)(this._lexer.source,n.start,'Expected "'.concat(t,'", found ').concat(i(n),"."));this._lexer.advance()},n.expectOptionalKeyword=function(t){var n=this._lexer.token;return n.kind===qa.TokenKind.NAME&&n.value===t&&(this._lexer.advance(),!0)},n.unexpected=function(t){var n=null!=t?t:this._lexer.token;return(0,Ma.syntaxError)(this._lexer.source,n.start,"Unexpected ".concat(i(n),"."))},n.any=function(t,n,e){this.expectToken(t);for(var i=[];!this.expectOptionalToken(e);)i.push(n.call(this));return i},n.optionalMany=function(t,n,e){if(this.expectOptionalToken(t)){var i=[];do{i.push(n.call(this))}while(!this.expectOptionalToken(e));return i}return[]},n.many=function(t,n,e){this.expectToken(t);var i=[];do{i.push(n.call(this))}while(!this.expectOptionalToken(e));return i},n.delimitedMany=function(t,n){this.expectOptionalToken(t);var e=[];do{e.push(n.call(this))}while(this.expectOptionalToken(t));return e},t}();function i(t){var n=t.value;return r(t.kind)+(null!=n?' "'.concat(n,'"'):"")}function r(t){return(0,Ha.isPunctuatorTokenKind)(t)?'"'.concat(t,'"'):t}n.Parser=e})),Ya=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.visit=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,u=void 0,a=Array.isArray(t),c=[t],h=-1,l=[],f=void 0,d=void 0,p=void 0,v=[],m=[],w=t;do{var y=++h===c.length,g=y&&0!==l.length;if(y){if(d=0===m.length?void 0:v[v.length-1],f=p,p=m.pop(),g){if(a)f=f.slice();else{for(var b={},E=0,_=Object.keys(f);E<_.length;E++){var I=_[E];b[I]=f[I]}f=b}for(var T=0,N=0;N<l.length;N++){var S=l[N][0],O=l[N][1];a&&(S-=T),a&&null===O?(f.splice(S,1),T++):f[S]=O}}h=u.index,c=u.keys,l=u.edits,a=u.inArray,u=u.prev}else{if(d=p?a?h:c[h]:void 0,null==(f=p?p[d]:w))continue;p&&v.push(d)}var A,k=void 0;if(!Array.isArray(f)){if(!(0,Va.isNode)(f))throw new Error("Invalid AST Node: ".concat((0,i.default)(f),"."));var R=o(n,f.kind,y);if(R){if((k=R.call(n,f,d,p,v,m))===s)break;if(!1===k){if(!y){v.pop();continue}}else if(void 0!==k&&(l.push([d,k]),!y)){if(!(0,Va.isNode)(k)){v.pop();continue}f=k}}}void 0===k&&g&&l.push([d,f]),y?v.pop():(u={inArray:a,index:h,keys:c,edits:l,prev:u},c=(a=Array.isArray(f))?f:null!==(A=e[f.kind])&&void 0!==A?A:[],h=-1,l=[],p&&m.push(p),p=f)}while(void 0!==u);return 0!==l.length&&(w=l[l.length-1][1]),w},n.visitInParallel=function(t){var n=new Array(t.length);return{enter:function(e){for(var i=0;i<t.length;i++)if(null==n[i]){var r=o(t[i],e.kind,!1);if(r){var u=r.apply(t[i],arguments);if(!1===u)n[i]=e;else if(u===s)n[i]=s;else if(void 0!==u)return u}}},leave:function(e){for(var i=0;i<t.length;i++)if(null==n[i]){var r=o(t[i],e.kind,!0);if(r){var u=r.apply(t[i],arguments);if(u===s)n[i]=s;else if(void 0!==u&&!1!==u)return u}}else n[i]===e&&(n[i]=null)}}},n.getVisitFn=o,n.BREAK=n.QueryDocumentKeys=void 0;var e,i=(e=Ba)&&e.__esModule?e:{default:e},r={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]};n.QueryDocumentKeys=r;var s=Object.freeze({});function o(t,n,e){var i=t[n];if(i){if(!e&&"function"==typeof i)return i;var r=e?i.leave:i.enter;if("function"==typeof r)return r}else{var s=e?t.leave:t.enter;if(s){if("function"==typeof s)return s;var o=s[n];if("function"==typeof o)return o}}}n.BREAK=s})),Xa=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.print=function(t){return(0,Ya.visit)(t,{leave:e})};var e={Name:function(t){return t.value},Variable:function(t){return"$"+t.name},Document:function(t){return r(t.definitions,"\n\n")+"\n"},OperationDefinition:function(t){var n=t.operation,e=t.name,i=o("(",r(t.variableDefinitions,", "),")"),s=r(t.directives," "),u=t.selectionSet;return e||s||i||"query"!==n?r([n,r([e,i]),s,u]," "):u},VariableDefinition:function(t){var n=t.directives;return t.variable+": "+t.type+o(" = ",t.defaultValue)+o(" ",r(n," "))},SelectionSet:function(t){return s(t.selections)},Field:function(t){var n=t.name,e=t.arguments,i=t.directives,s=t.selectionSet,a=o("",t.alias,": ")+n,c=a+o("(",r(e,", "),")");return c.length>80&&(c=a+o("(\n",u(r(e,"\n")),"\n)")),r([c,r(i," "),s]," ")},Argument:function(t){return t.name+": "+t.value},FragmentSpread:function(t){return"..."+t.name+o(" ",r(t.directives," "))},InlineFragment:function(t){var n=t.directives,e=t.selectionSet;return r(["...",o("on ",t.typeCondition),r(n," "),e]," ")},FragmentDefinition:function(t){var n=t.typeCondition,e=t.variableDefinitions,i=t.directives,s=t.selectionSet;return"fragment ".concat(t.name).concat(o("(",r(e,", "),")")," ")+"on ".concat(n," ").concat(o("",r(i," ")," "))+s},IntValue:function(t){return t.value},FloatValue:function(t){return t.value},StringValue:function(t,n){var e=t.value;return t.block?(0,za.printBlockString)(e,"description"===n?"":"  "):JSON.stringify(e)},BooleanValue:function(t){return t.value?"true":"false"},NullValue:function(){return"null"},EnumValue:function(t){return t.value},ListValue:function(t){return"["+r(t.values,", ")+"]"},ObjectValue:function(t){return"{"+r(t.fields,", ")+"}"},ObjectField:function(t){return t.name+": "+t.value},Directive:function(t){return"@"+t.name+o("(",r(t.arguments,", "),")")},NamedType:function(t){return t.name},ListType:function(t){return"["+t.type+"]"},NonNullType:function(t){return t.type+"!"},SchemaDefinition:i((function(t){var n=t.operationTypes;return r(["schema",r(t.directives," "),s(n)]," ")})),OperationTypeDefinition:function(t){return t.operation+": "+t.type},ScalarTypeDefinition:i((function(t){return r(["scalar",t.name,r(t.directives," ")]," ")})),ObjectTypeDefinition:i((function(t){var n=t.directives,e=t.fields;return r(["type",t.name,o("implements ",r(t.interfaces," & ")),r(n," "),s(e)]," ")})),FieldDefinition:i((function(t){var n=t.arguments,e=t.type,i=t.directives;return t.name+(c(n)?o("(\n",u(r(n,"\n")),"\n)"):o("(",r(n,", "),")"))+": "+e+o(" ",r(i," "))})),InputValueDefinition:i((function(t){var n=t.directives;return r([t.name+": "+t.type,o("= ",t.defaultValue),r(n," ")]," ")})),InterfaceTypeDefinition:i((function(t){var n=t.directives,e=t.fields;return r(["interface",t.name,o("implements ",r(t.interfaces," & ")),r(n," "),s(e)]," ")})),UnionTypeDefinition:i((function(t){var n=t.types;return r(["union",t.name,r(t.directives," "),n&&0!==n.length?"= "+r(n," | "):""]," ")})),EnumTypeDefinition:i((function(t){var n=t.values;return r(["enum",t.name,r(t.directives," "),s(n)]," ")})),EnumValueDefinition:i((function(t){return r([t.name,r(t.directives," ")]," ")})),InputObjectTypeDefinition:i((function(t){var n=t.fields;return r(["input",t.name,r(t.directives," "),s(n)]," ")})),DirectiveDefinition:i((function(t){var n=t.arguments,e=t.repeatable,i=t.locations;return"directive @"+t.name+(c(n)?o("(\n",u(r(n,"\n")),"\n)"):o("(",r(n,", "),")"))+(e?" repeatable":"")+" on "+r(i," | ")})),SchemaExtension:function(t){var n=t.operationTypes;return r(["extend schema",r(t.directives," "),s(n)]," ")},ScalarTypeExtension:function(t){return r(["extend scalar",t.name,r(t.directives," ")]," ")},ObjectTypeExtension:function(t){var n=t.directives,e=t.fields;return r(["extend type",t.name,o("implements ",r(t.interfaces," & ")),r(n," "),s(e)]," ")},InterfaceTypeExtension:function(t){var n=t.directives,e=t.fields;return r(["extend interface",t.name,o("implements ",r(t.interfaces," & ")),r(n," "),s(e)]," ")},UnionTypeExtension:function(t){var n=t.types;return r(["extend union",t.name,r(t.directives," "),n&&0!==n.length?"= "+r(n," | "):""]," ")},EnumTypeExtension:function(t){var n=t.values;return r(["extend enum",t.name,r(t.directives," "),s(n)]," ")},InputObjectTypeExtension:function(t){var n=t.fields;return r(["extend input",t.name,r(t.directives," "),s(n)]," ")}};function i(t){return function(n){return r([n.description,t(n)],"\n")}}function r(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!==(n=null==t?void 0:t.filter((function(t){return t})).join(e))&&void 0!==n?n:""}function s(t){return o("{\n",u(r(t,"\n")),"\n}")}function o(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return null!=n&&""!==n?t+n+e:""}function u(t){return o("  ",t.replace(/\n/g,"\n  "))}function a(t){return-1!==t.indexOf("\n")}function c(t){return null!=t&&t.some(a)}})),Qa=function(t){var n=t.name,e=t.type;this.uri=t.uri,this.name=n,this.type=e},Za=function(t){return"undefined"!=typeof File&&t instanceof File||"undefined"!=typeof Blob&&t instanceof Blob||t instanceof Qa},tc=function t(n,e,i){var r;void 0===e&&(e=""),void 0===i&&(i=Za);var s=new Map;function o(t,n){var e=s.get(n);e?e.push.apply(e,t):s.set(n,t)}if(i(n))r=null,o([e],n);else{var u=e?e+".":"";if("undefined"!=typeof FileList&&n instanceof FileList)r=Array.prototype.map.call(n,(function(t,n){return o([""+u+n],t),null}));else if(Array.isArray(n))r=n.map((function(n,e){var r=t(n,""+u+e,i);return r.files.forEach(o),r.clone}));else if(n&&n.constructor===Object)for(var a in r={},n){var c=t(n[a],""+u+a,i);c.files.forEach(o),r[a]=c.clone}else r=n}return{clone:r,files:s}},nc=Za,ec="object"==typeof self?self.FormData:window.FormData,ic=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.defaultJsonSerializer=void 0,n.defaultJsonSerializer={parse:JSON.parse,stringify:JSON.stringify}})),rc=ft((function(t,n){var e=dt&&dt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var i=e(ec),r=function(t){return nc(t)||null!==t&&"object"==typeof t&&"function"==typeof t.pipe};n.default=function(t,n,e,s){void 0===s&&(s=ic.defaultJsonSerializer);var o=tc({query:t,variables:n,operationName:e},"",r),u=o.clone,a=o.files;if(0===a.size){if(!Array.isArray(t))return s.stringify(u);if(void 0!==n&&!Array.isArray(n))throw new Error("Cannot create request body with given variable type, array expected");var c=t.reduce((function(t,e,i){return t.push({query:e,variables:n?n[i]:void 0}),t}),[]);return s.stringify(c)}var h=new("undefined"==typeof FormData?i.default:FormData);h.append("operations",s.stringify(u));var l={},f=0;return a.forEach((function(t){l[++f]=t})),h.append("map",s.stringify(l)),f=0,a.forEach((function(t,n){h.append(""+ ++f,n)})),h}})),sc=ft((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.parseBatchRequestsExtendedArgs=n.parseRawRequestExtendedArgs=n.parseRequestExtendedArgs=n.parseBatchRequestArgs=n.parseRawRequestArgs=n.parseRequestArgs=void 0,n.parseRequestArgs=function(t,n,e){return t.document?t:{document:t,variables:n,requestHeaders:e,signal:void 0}},n.parseRawRequestArgs=function(t,n,e){return t.query?t:{query:t,variables:n,requestHeaders:e,signal:void 0}},n.parseBatchRequestArgs=function(t,n){return t.documents?t:{documents:t,requestHeaders:n,signal:void 0}},n.parseRequestExtendedArgs=function(t,n,e,i){return t.document?t:{url:t,document:n,variables:e,requestHeaders:i,signal:void 0}},n.parseRawRequestExtendedArgs=function(t,n,e,i){return t.query?t:{url:t,query:n,variables:e,requestHeaders:i,signal:void 0}},n.parseBatchRequestsExtendedArgs=function(t,n,e){return t.documents?t:{url:t,documents:n,requestHeaders:e,signal:void 0}}})),oc=ft((function(t,n){var e=dt&&dt.__extends||function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.ClientError=void 0;var i=function(t){function n(e,i){var r=this,s=n.extractMessage(e)+": "+JSON.stringify({response:e,request:i});return r=t.call(this,s)||this,Object.setPrototypeOf(r,n.prototype),r.response=e,r.request=i,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(r,n),r}return e(n,t),n.extractMessage=function(t){try{return t.errors[0].message}catch(n){return"GraphQL Error (Code: "+t.status+")"}},n}(Error);n.ClientError=i})),uc=ft((function(t,n){var e=dt&&dt.__assign||function(){return(e=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)},i=dt&&dt.__createBinding||(Object.create?function(t,n,e,i){void 0===i&&(i=e),Object.defineProperty(t,i,{enumerable:!0,get:function(){return n[e]}})}:function(t,n,e,i){void 0===i&&(i=e),t[i]=n[e]}),r=dt&&dt.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),s=dt&&dt.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&i(n,t,e);return r(n,t),n},o=dt&&dt.__awaiter||function(t,n,e,i){return new(e||(e=Promise))((function(r,s){function o(t){try{a(i.next(t))}catch(t){s(t)}}function u(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,u)}a((i=i.apply(t,n||[])).next())}))},u=dt&&dt.__generator||function(t,n){var e,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=n.call(t,o)}catch(t){s=[6,t],i=0}finally{e=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},a=dt&&dt.__rest||function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(e[i[r]]=t[i[r]])}return e},c=dt&&dt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.gql=n.batchRequests=n.request=n.rawRequest=n.GraphQLClient=n.ClientError=void 0;var h=s(ka),l=h,f=c(rc);Object.defineProperty(n,"ClientError",{enumerable:!0,get:function(){return oc.ClientError}});var d=function(t){var n={};return t&&("undefined"!=typeof Headers&&t instanceof Headers||t instanceof l.Headers?n=function(t){var n={};return t.forEach((function(t,e){n[e]=t})),n}(t):Array.isArray(t)?t.forEach((function(t){n[t[0]]=t[1]})):n=t),n},p=function(t){return t.replace(/([\s,]|#[^\n\r]+)+/g," ").trim()},v=function(t){var n=t.url,i=t.query,r=t.variables,s=t.operationName,a=t.headers,c=t.fetch,h=t.fetchOptions;return o(void 0,void 0,void 0,(function(){var t;return u(this,(function(o){switch(o.label){case 0:return t=f.default(i,r,s,h.jsonSerializer),[4,c(n,e({method:"POST",headers:e(e({},"string"==typeof t?{"Content-Type":"application/json"}:{}),a),body:t},h))];case 1:return[2,o.sent()]}}))}))},m=function(t){var n=t.url,i=t.query,r=t.variables,s=t.operationName,a=t.headers,c=t.fetch,h=t.fetchOptions;return o(void 0,void 0,void 0,(function(){var t;return u(this,(function(o){switch(o.label){case 0:return t=function(t){var n=t.query,e=t.variables,i=t.operationName,r=t.jsonSerializer;if(!Array.isArray(n)){var s=["query="+encodeURIComponent(p(n))];return e&&s.push("variables="+encodeURIComponent(r.stringify(e))),i&&s.push("operationName="+encodeURIComponent(i)),s.join("&")}if(void 0!==e&&!Array.isArray(e))throw new Error("Cannot create query with given variable type, array expected");var o=n.reduce((function(t,n,i){return t.push({query:p(n),variables:e?r.stringify(e[i]):void 0}),t}),[]);return"query="+encodeURIComponent(r.stringify(o))}({query:i,variables:r,operationName:s,jsonSerializer:h.jsonSerializer}),[4,c(n+"?"+t,e({method:"GET",headers:a},h))];case 1:return[2,o.sent()]}}))}))},w=function(){function t(t,n){this.url=t,this.options=n||{}}return t.prototype.rawRequest=function(t,n,i){return o(this,void 0,void 0,(function(){var r,s,o,c,l,f,p,v,m,w;return u(this,(function(){return r=sc.parseRawRequestArgs(t,n,i),o=(s=this.options).headers,l=void 0===(c=s.fetch)?h.default:c,p=void 0===(f=s.method)?"POST":f,v=a(s,["headers","fetch","method"]),m=this.url,void 0!==r.signal&&(v.signal=r.signal),w=_(r.query).operationName,[2,y({url:m,query:r.query,variables:r.variables,headers:e(e({},d(o)),d(r.requestHeaders)),operationName:w,fetch:l,method:p,fetchOptions:v})]}))}))},t.prototype.request=function(t,n,i){return o(this,void 0,void 0,(function(){var r,s,o,c,l,f,p,v,m,w,g;return u(this,(function(u){switch(u.label){case 0:return r=sc.parseRequestArgs(t,n,i),o=(s=this.options).headers,l=void 0===(c=s.fetch)?h.default:c,p=void 0===(f=s.method)?"POST":f,v=a(s,["headers","fetch","method"]),m=this.url,void 0!==r.signal&&(v.signal=r.signal),w=_(r.document),g=w.operationName,[4,y({url:m,query:w.query,variables:r.variables,headers:e(e({},d(o)),d(r.requestHeaders)),operationName:g,fetch:l,method:p,fetchOptions:v})];case 1:return[2,u.sent().data]}}))}))},t.prototype.batchRequests=function(t,n){return o(this,void 0,void 0,(function(){var i,r,s,o,c,l,f,p,v,m,w;return u(this,(function(u){switch(u.label){case 0:return i=sc.parseBatchRequestArgs(t,n),s=(r=this.options).headers,c=void 0===(o=r.fetch)?h.default:o,f=void 0===(l=r.method)?"POST":l,p=a(r,["headers","fetch","method"]),v=this.url,void 0!==i.signal&&(p.signal=i.signal),m=i.documents.map((function(t){return _(t.document).query})),w=i.documents.map((function(t){return t.variables})),[4,y({url:v,query:m,variables:w,headers:e(e({},d(s)),d(i.requestHeaders)),operationName:void 0,fetch:c,method:f,fetchOptions:p})];case 1:return[2,u.sent().data]}}))}))},t.prototype.setHeaders=function(t){return this.options.headers=t,this},t.prototype.setHeader=function(t,n){var e,i=this.options.headers;return i?i[t]=n:this.options.headers=((e={})[t]=n,e),this},t.prototype.setEndpoint=function(t){return this.url=t,this},t}();function y(t){var n=t.url,i=t.query,r=t.variables,s=t.headers,a=t.operationName,c=t.fetch,h=t.method,l=void 0===h?"POST":h,f=t.fetchOptions;return o(this,void 0,void 0,(function(){var t,o,h,d,p,w,y;return u(this,(function(u){switch(u.label){case 0:return t="POST"===l.toUpperCase()?v:m,o=Array.isArray(i),[4,t({url:n,query:i,variables:r,operationName:a,headers:s,fetch:c,fetchOptions:f})];case 1:return[4,b(h=u.sent(),f.jsonSerializer)];case 2:if(d=u.sent(),p=o&&Array.isArray(d)?!d.some((function(t){return!t.data})):!!d.data,h.ok&&!d.errors&&p)return w=h.headers,y=h.status,[2,e(e({},o?{data:d}:d),{headers:w,status:y})];throw new oc.ClientError(e(e({},"string"==typeof d?{error:d}:d),{status:h.status,headers:h.headers}),{query:i,variables:r})}}))}))}function g(t,n,i,r){return o(this,void 0,void 0,(function(){var s;return u(this,(function(){return s=sc.parseRequestExtendedArgs(t,n,i,r),[2,new w(s.url).request(e({},s))]}))}))}function b(t,n){return void 0===n&&(n=ic.defaultJsonSerializer),o(this,void 0,void 0,(function(){var e,i,r;return u(this,(function(s){switch(s.label){case 0:return t.headers.forEach((function(t,n){"content-type"===n.toLowerCase()&&(e=t)})),e&&e.toLowerCase().startsWith("application/json")?(r=(i=n).parse,[4,t.text()]):[3,2];case 1:return[2,r.apply(i,[s.sent()])];case 2:return[2,t.text()]}}))}))}function E(t){var n,e=void 0,i=t.definitions.filter((function(t){return"OperationDefinition"===t.kind}));return 1===i.length&&(e=null===(n=i[0].name)||void 0===n?void 0:n.value),e}function _(t){if("string"==typeof t){var n=void 0;try{n=E(Ka.parse(t))}catch(t){}return{query:t,operationName:n}}var e=E(t);return{query:Xa.print(t),operationName:e}}n.GraphQLClient=w,n.rawRequest=function(t,n,i,r){return o(this,void 0,void 0,(function(){var s;return u(this,(function(){return s=sc.parseRawRequestExtendedArgs(t,n,i,r),[2,new w(s.url).rawRequest(e({},s))]}))}))},n.request=g,n.batchRequests=function(t,n,i){return o(this,void 0,void 0,(function(){var r;return u(this,(function(){return r=sc.parseBatchRequestsExtendedArgs(t,n,i),[2,new w(r.url).batchRequests(e({},r))]}))}))},n.default=g,n.gql=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return t.reduce((function(t,e,i){return""+t+e+(i in n?n[i]:"")}),"")}}));async function ac(t,n){const e={cached:!!n?.cached,event:n?.event,name:n?.name,endpoint:n?.endpoint,bubbles:n?.bubbles??!0,cancelable:n?.cancelable??!0,composed:!!n?.composed,target:n?.target||n?.event?.target};try{const i=await t();return await async function(t,n){const e={event:t?.event,target:t?.target||t?.event?.target,data:t?.data||null,name:t?.name,endpoint:t?.endpoint,bubbles:!!t?.bubbles,cancelable:!!t?.cancelable,composed:!!t?.composed,cached:!!t?.cached};if(t?.dataPropsMap)try{e.data=await async function(t,n){let e=n||{};if(t){const i=Object.keys(t);for(const r of i)try{e[t[r]]=r.split(".").reduce(((t,n)=>t[n]),n)}catch(t){continue}}return e}(t?.dataPropsMap,t?.data)}catch{console.log("Error setting data props"),"function"==typeof n?.onError&&n.onError(e)}"function"==typeof n?.onSuccess&&n.onSuccess(e),(e?.target||document).dispatchEvent(new CustomEvent("fireenjinSuccess",{detail:e,bubbles:!!t?.bubbles,cancelable:!!t?.cancelable,composed:!!t?.composed}))}({...e,data:i},{onSuccess:n?.onSuccess,onError:n?.onError}),i}catch(t){return void await async function(t,n){const e={event:t?.event,target:t?.target||t?.event?.target,error:t?.error,name:t?.name,endpoint:t?.endpoint,bubbles:!!t?.bubbles,cancelable:!!t?.cancelable,composed:!!t?.composed,cached:!!t?.cached};"function"==typeof n?.onError&&n.onError(e),(e?.target||document).dispatchEvent(new CustomEvent("fireenjinError",{detail:e,bubbles:!!t?.bubbles,cancelable:!!t?.cancelable,composed:!!t?.composed}))}({...e,error:t},{onError:n?.onError})}}class cc{url;options;constructor(t,n){this.url=t||"http://localhost:4000",this.options=n||{}}async rawRequest(t,n,e){const i=e?.method||this.options?.method||"GET",r=e?.headers||this.options?.headers||{},s=`${this.url}/${t}${"get"===i?((t,n)=>"object"==typeof t?Object.keys(t).map((e=>e+"="+n?encodeURIComponent(t[e]):t[e])).join("&"):"")(n):""}`,o=await fetch(`${this.url}/${s}`,{method:i,...this.options||{},...e||{},headers:r,body:"get"===i?null:JSON.stringify(n||{})});return{data:await(o?.json?.())||null,headers:o.headers,status:o.status,extensions:{}}}async request(t,n,e){const i=e?.method||this.options?.method||"GET",r=e?.headers||this.options?.headers||{};return(await fetch(`${this.url}/${t}`,{method:i,...this.options||{},...e||{},headers:r,body:!["get","post"].includes(i.toLowerCase())&&JSON.stringify(n||{})||null})).json()}async batchRequests(t,n){const e={};for(const{document:i,variables:r}of t)try{e[i]=await this.request(i,r,n)}catch{e[i]=null}return e}setEndpoint(t){return this.url=t,!0}setHeader(t,n){return this.options||(this.options={}),this.options?.headers||(this.options.headers={}),this.options.headers[t]=n,this}setHeaders(t){for(const[n,e]of Object.entries(t))this.setHeader(n,e);return this}}class hc{url;db;options;constructor(t,n){this.url=t||"http://localhost:4000",this.options={...n,headers:n?.headers||{}},this.db=n?.db}async rawRequest(t,n,e){const i=e?.method||"GET",r=e?.headers||this.options?.headers||{},s=t,o=await("post"===i.toLowerCase()?this.db.add(s,n?.data||{},n?.id):"put"===i.toLowerCase()?this.db.update(s,n?.data||{},n?.id):"delete"===i.toLowerCase()?this.db.delete(s,n?.id):n?.id?this.db.find(s,n.id):this.db.list(s,n?.where||[],n?.orderBy||null,n?.limit||null));return{data:o,headers:r,extensions:{query:o?.query,metadata:o?.metadata,size:o?.size},status:200}}async request(t,n,e){return(await this.rawRequest(t,n,e))?.data||null}async batchRequests(t,n){const e={};for(const{document:i,variables:r}of t)try{e[i]=await this.request(i,r,n)}catch{e[i]=null}return e}setEndpoint(t){return this.url=t,!0}setHeader(t,n){const e=this.options?.headers||{};return e[t]=n,this.options.headers=e,this}setHeaders(t){for(const[n,e]of Object.entries(t))this.setHeader(n,e);return this}}class lc{client;sdk={};host={url:"http://localhost:4000"};currentConnection=0;options;constructor(t){this.options=t||{};const n={Authorization:t?.token?`Bearer ${t.token}`:"",...t.headers?t.headers:{}};this.host=t?.connections?.length?this.setConnection(0):{url:t.host,type:"rest",headers:n},this.client="graphql"===this.host.type?new uc.GraphQLClient(this.host?.url||"http://localhost:4000",{headers:this.host?.headers||{}}):"firebase"===this.host?.type?new hc(this.host.url,{db:this.host?.db?this.host.db:new Oa({emulate:!!t?.emulate,config:this.host?.auth})}):new cc(this.host.url,{headers:this.host?.headers||{}}),this.sdk="function"==typeof t?.getSdk?t.getSdk(this.client,this.options?.onRequest):null,document&&(document.addEventListener("fireenjinUpload",this.onUpload.bind(this)),document.addEventListener("fireenjinSubmit",this.onSubmit.bind(this)),document.addEventListener("fireenjinFetch",this.onFetch.bind(this)),t?.debug&&(document.addEventListener("fireenjinSuccess",(t=>{console.log("fireenjinSuccess: ",t)})),document.addEventListener("fireenjinError",(t=>{console.log("fireenjinError: ",t)})),document.addEventListener("fireenjinTrigger",(t=>{console.log("fireenjinTrigger: ",t)})),document.addEventListener("fireenjinReset",(t=>{console.log("fireenjinReset: ",t)})),document.addEventListener("fireenjinValidation",(t=>{console.log("fireenjinValidation: ",t)}))))}async onUpload(t){if(this.options?.debug&&console.log("fireenjinUpload: ",t),"function"==typeof this.options?.onUpload&&this.options.onUpload(t),!t.detail?.data?.encodedContent||"function"==typeof this.options?.onUpload)return!1;const n=await this.upload({data:{id:t.detail.data?.id,path:t.detail.data?.path,fileName:t.detail.data?.fileName,file:t.detail.data?.encodedContent,type:t.detail.data?.type}},{event:t,target:t?.detail?.target||t?.target,name:t?.detail?.name,endpoint:t?.detail?.endpoint,bubbles:t?.detail?.bubbles,cancelable:t?.detail?.cancelable,composed:t?.detail?.composed,method:t?.detail?.method});return t?.target&&(t.target.value=n?.url||null),n}async onSubmit(t){if(this.options?.debug&&console.log("fireenjinSubmit: ",t),!t||!t.detail||!t.detail.endpoint||t.detail.disableSubmit)return!1;const n=t?.detail?.target||t?.target;return this.submit(t.detail.endpoint,{id:t?.detail?.id,data:t?.detail?.data,params:t?.detail?.params,query:t?.detail?.query},{event:t,target:n,name:t?.detail?.name,bubbles:t?.detail?.bubbles,cancelable:t?.detail?.cancelable,composed:t?.detail?.composed,method:t?.detail?.method||n?.method})}async onFetch(t){if(this.options?.debug&&console.log("fireenjinFetch: ",t),!t||!t.detail||!t.detail.endpoint||t.detail.disableFetch)return!1;const n=t?.detail?.target||t?.target;return this.fetch(t.detail.endpoint,t?.detail?.params||{},{event:t,target:n,dataPropsMap:t?.detail?.dataPropsMap,name:t?.detail?.name,cacheKey:t?.detail?.cacheKey,disableCache:!!t?.detail?.disableCache,bubbles:t?.detail?.bubbles,cancelable:t?.detail?.cancelable,composed:t?.detail?.composed,method:t?.detail?.method||n?.method})}hash(t){var n,e=0;if(0===t.length)return e;for(n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return e}async upload(t,n){const e=n?.endpoint||"upload",i=n?.method||"post";return ac((async()=>"graphql"!==this.host?.type||this.options?.uploadUrl?this.client.request(this.options?.uploadUrl||e,t,{method:i}):t?.query?this.client.request(t.query,t.params,{method:i}):this.sdk[e](t?.params||{id:t?.id,data:t?.data})),{event:n?.event||null,target:n?.target||n?.event?.target,name:n?.name||e,bubbles:n?.bubbles,cancelable:n?.cancelable,composed:n?.composed,endpoint:e,cached:!0,onError:this.options?.onError,onSuccess:this.options?.onSuccess})}async fetch(t,n,e){let i=null;const r=e?.event||null,s=e?.name||null,o=e?.method||"get",u=e?.cacheKey?e.cacheKey:`${t}_${n?.id?`${n.id}:`:n?.params?this.hash(JSON.stringify(Object.values(n.params))):""}${this.hash(JSON.stringify(n||{}))}`;try{i=await Aa.getItem(u)}catch{console.log("No Local data found")}return i=await ac((async()=>"graphql"===this.host?.type?n?.query?this.client.request(n?.query,n?.params,{method:o}):this.sdk[t](n,e?.headers):this.client.request(t,n,{method:o})),{endpoint:t,event:r,target:e?.target||e?.event?.target,name:s,cached:!1,bubbles:e?.bubbles,cancelable:e?.cancelable,composed:e?.composed,onError:this.options?.onError,onSuccess:this.options?.onSuccess}),i}async submit(t,n,e){const i=e?.event||null,r=e?.method||"post";return ac((async()=>"graphql"===this.host?.type?n?.query?this.client.request(n.query,n.params,{method:r}):this.sdk[t](n?.params||{id:n?.id,data:n?.data}):this.client.request(t,n,{method:n?.id?"put":"post"})),{endpoint:t,event:i,target:e?.target||i?.target,name:e?.name||null,cached:!1,bubbles:e?.bubbles,cancelable:e?.cancelable,composed:e?.composed,onError:this.options?.onError,onSuccess:this.options?.onSuccess})}setHeader(t,n){return!!this.client&&(this.host?.headers||(this.host.headers={}),this.host.headers[t]=n,this.client.setHeader(t,n))}setHeaders(t){return!!this.client&&this.client.setHeaders(t)}setConnection(t){return this.host="string"==typeof t?(this.options?.connections||[]).find(((n,e)=>{if(n?.name===t||n?.url===t)return this.currentConnection=e,n})):this.options?.connections?.[t],this.host?.name||(this.host.name="default"),this.host?.type||(this.host.type="function"==typeof this.options?.getSdk?"graphql":this.host?.db||this.host?.auth?.databaseURL?"firebase":"rest"),this.host.headers={...this.host?.headers||{},...this.options?.headers||{}},this.client="graphql"===this.host.type?new uc.GraphQLClient(this.host?.url||"http://localhost:4000",{headers:this.host?.headers||{}}):"firebase"===this.host?.type?new hc(this.host.url,{db:this.host.db}):new cc(this.host.url,{headers:this.host?.headers||{}}),this.client.setEndpoint(this.host?.url||"http://localhost:4000"),this.host}}window&&!window.FireEnjin&&(window.FireEnjin=lc),
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
p("firebase","9.6.11","app");const fc=class{constructor(n){t(this,n),this.app=H({apiKey:"AIzaSyDBJ3MJ0T0pWqWWGVlnGJ6g97cR8axU5ak",authDomain:"dead-by-daylight-group.firebaseapp.com",projectId:"dead-by-daylight-group",storageBucket:"dead-by-daylight-group.appspot.com",messagingSenderId:"974124897552",appId:"1:974124897552:web:48ea2eadb5021f58d3c195",measurementId:"G-4KQFEEYLJS"}),this.auth=new ma({app:this.app,config:{tokenLocalStorageKey:"madnessdev:token",authLocalStorageKey:"madnessdev:session",emulate:!1}}),this.db=new Oa({app:this.app,emulate:!1}),this.fireenjin=new lc({debug:!0,connections:[{db:this.db,type:"firebase",url:"https://deadbydaylight.group/api"}]}),this.componentProps={app:this.app,auth:this.auth,db:this.db,fireenjin:this.fireenjin}}async onUpdate(){const t=await navigator.serviceWorker.getRegistration();t&&t.waiting&&confirm("There is an update, would you like to reload now?")&&window.location.reload()}async presentPopover(t){var n,e,i,r;this.popover=await vt.create({event:null===(n=null==t?void 0:t.detail)||void 0===n?void 0:n.event,component:null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.component,componentProps:null===(i=null==t?void 0:t.detail)||void 0===i?void 0:i.componentProps,cssClass:null===(r=null==t?void 0:t.detail)||void 0===r?void 0:r.cssClass}),await this.popover.present()}async presentModal(t){var n,e,i;this.modal=await mt.create({component:null===(n=null==t?void 0:t.detail)||void 0===n?void 0:n.component,componentProps:null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.componentProps,cssClass:null===(i=null==t?void 0:t.detail)||void 0===i?void 0:i.cssClass}),await this.modal.present()}async closeModal(){this.modal.dismiss()}async componentWillLoad(){this.auth.onAuthChanged((async t=>{(null==t?void 0:t.uid)&&(console.log(t.uid),this.db.watchDocument("users",t.uid,(async t=>{console.log(t)})))}))}render(){return n("ion-router",{useHash:!1},n("ion-route",{url:"/",component:"app-home",componentProps:this.componentProps}),n("ion-route",{url:"/list",component:"app-list",componentProps:this.componentProps}),n("ion-route",{url:"/admin",component:"app-admin",componentProps:this.componentProps}),n("ion-route",{url:"/tournament/:tournamentId",component:"app-tournament",componentProps:this.componentProps}),n("ion-route",{url:"/profile",component:"app-profile",componentProps:this.componentProps}))}},dc=class{constructor(n){t(this,n)}componentDidLoad(){vc((async()=>{const t=gt(window,"hybrid");yt.getBoolean("_testing")||import("./p-d2791186.js").then((t=>t.startTapClick(yt))),yt.getBoolean("statusTap",t)&&import("./p-3bda8f42.js").then((t=>t.startStatusTap())),yt.getBoolean("inputShims",pc())&&import("./p-83d1b093.js").then((t=>t.startInputShims(yt)));const n=await import("./p-add30d46.js");yt.getBoolean("hardwareBackButton",t)?n.startHardwareBackButton():n.blockHardwareBackButton(),"undefined"!=typeof window&&import("./p-7e7ce516.js").then((t=>t.startKeyboardAssist(window))),import("./p-924b2917.js").then((t=>this.focusVisible=t.startFocusVisible()))}))}async setFocus(t){this.focusVisible&&this.focusVisible.setFocus(t)}render(){const t=wt(this);return n(e,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":yt.getBoolean("_forceStatusbarPadding")}})}get el(){return i(this)}},pc=()=>gt(window,"ios")&&gt(window,"mobile"),vc=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};dc.style="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";const mc=class{constructor(n){t(this,n),this.ionRouteDataChanged=r(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,n){if(t===n)return;const e=t?Object.keys(t):[],i=n?Object.keys(n):[];if(e.length===i.length){for(const i of e)if(t[i]!==n[i])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},wc=t=>"/"+t.filter((t=>t.length>0)).join("/"),yc=t=>{let n,e=[""];if(null!=t){const i=t.indexOf("?");i>-1&&(n=t.substring(i+1),t=t.substring(0,i)),e=t.split("/").map((t=>t.trim())).filter((t=>t.length>0)),0===e.length&&(e=[""])}return{segments:e,queryString:n}},gc=async(t,n,e,i,r=!1,s)=>{try{const o=Ec(t);if(i>=n.length||!o)return r;await new Promise((t=>bt(o,t)));const u=n[i],a=await o.setRouteId(u.id,u.params,e,s);return a.changed&&(e="root",r=!0),r=await gc(a.element,n,e,i+1,r,s),a.markVisible&&await a.markVisible(),r}catch(t){return console.error(t),!1}},bc=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",Ec=t=>{if(!t)return;if(t.matches(bc))return t;const n=t.querySelector(bc);return null!=n?n:void 0},_c=(t,n)=>n.find((n=>((t,n)=>{const{from:e,to:i}=n;if(void 0===i)return!1;if(e.length>t.length)return!1;for(let n=0;n<e.length;n++){const i=e[n];if("*"===i)return!0;if(i!==t[n])return!1}return e.length===t.length})(t,n))),Ic=(t,n)=>{const e=Math.min(t.length,n.length);let i=0;for(let r=0;r<e;r++){const e=t[r],s=n[r];if(e.id.toLowerCase()!==s.id)break;if(e.params){const t=Object.keys(e.params);if(t.length===s.segments.length){const n=t.map((t=>`:${t}`));for(let t=0;t<n.length&&n[t].toLowerCase()===s.segments[t];t++)i++}}i++}return i},Tc=(t,n)=>{const e=new Ac(t);let i,r=!1;for(let t=0;t<n.length;t++){const s=n[t].segments;if(""===s[0])r=!0;else{for(const n of s){const r=e.next();if(":"===n[0]){if(""===r)return null;i=i||[],(i[t]||(i[t]={}))[n.slice(1)]=r}else if(r!==n)return null}r=!1}}return r&&r!==(""===e.next())?null:i?n.map(((t,n)=>({id:t.id,segments:t.segments,params:Nc(t.params,i[n]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}))):n},Nc=(t,n)=>t||n?Object.assign(Object.assign({},t),n):void 0,Sc=(t,n)=>{let e=null,i=0;for(const r of n){const n=Tc(t,r);if(null!==n){const t=Oc(n);t>i&&(i=t,e=n)}}return e},Oc=t=>{let n=1,e=1;for(const i of t)for(const t of i.segments)":"===t[0]?n+=Math.pow(1,e):""!==t&&(n+=Math.pow(2,e)),e++;return n};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */class Ac{constructor(t){this.segments=t.slice()}next(){return this.segments.length>0?this.segments.shift():""}}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const kc=(t,n)=>n in t?t[n]:t.hasAttribute(n)?t.getAttribute(n):null,Rc=t=>Array.from(t.children).filter((t=>"ION-ROUTE-REDIRECT"===t.tagName)).map((t=>{const n=kc(t,"to");return{from:yc(kc(t,"from")).segments,to:null==n?void 0:yc(n)}})),Cc=t=>Pc(Dc(t)),Dc=t=>Array.from(t.children).filter((t=>"ION-ROUTE"===t.tagName&&t.component)).map((t=>{const n=kc(t,"component");return{segments:yc(kc(t,"url")).segments,id:n.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:Dc(t)}})),Pc=t=>{const n=[];for(const e of t)jc([],n,e);return n},jc=(t,n,e)=>{if(t=[...t,{id:e.id,segments:e.segments,params:e.params,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter}],0!==e.children.length)for(const i of e.children)jc(t,n,i);else n.push(t)},Mc=class{constructor(n){t(this,n),this.ionRouteWillChange=r(this,"ionRouteWillChange",7),this.ionRouteDidChange=r(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){await(Ec(document.body)?Promise.resolve():new Promise((t=>{window.addEventListener("ionNavWillLoad",(()=>t()),{once:!0})})));const t=await this.runGuards(this.getSegments());if(!0!==t){if("object"==typeof t){const{redirect:n}=t,e=yc(n);this.setSegments(e.segments,"root",e.queryString),await this.writeNavStateRoot(e.segments,"root")}}else await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Et(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Et(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let n=this.getSegments();const e=await this.runGuards(n);if(!0!==e){if("object"!=typeof e)return!1;n=yc(e.redirect).segments}return this.writeNavStateRoot(n,t)}onBackButton(t){t.detail.register(0,(t=>{this.back(),t()}))}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,n="forward",e){var i;if(t.startsWith(".")){const n=null!==(i=this.previousPath)&&void 0!==i?i:"/",e=new URL(t,`https://host/${n}`);t=e.pathname+e.search}let r=yc(t);const s=await this.runGuards(r.segments);if(!0!==s){if("object"!=typeof s)return!1;r=yc(s.redirect)}return this.setSegments(r.segments,n,r.queryString),this.writeNavStateRoot(r.segments,n,e)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const n of t){const t=[];n.forEach((n=>t.push(...n.segments)));const e=n.map((t=>t.id));console.debug(`%c ${wc(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${e.join(", ")})`)}console.groupEnd()})(Cc(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const n of t)n.to&&console.debug("FROM: ",`$c ${wc(n.from)}`,"font-weight: bold"," TO: ",`$c ${wc(n.to.segments)}`,"font-weight: bold");console.groupEnd()})(Rc(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:n,outlet:e}=await(async()=>{const t=[];let n,e=window.document.body;for(;n=Ec(e);){const i=await n.getRouteId();if(!i)break;e=i.element,i.element=void 0,t.push(i)}return{ids:t,outlet:n}})(),i=((t,n)=>{let e=null,i=0;for(const r of n){const n=Ic(t,r);n>i&&(e=r,i=n)}return e?e.map(((n,e)=>{var i;return{id:n.id,segments:n.segments,params:Nc(n.params,null===(i=t[e])||void 0===i?void 0:i.params)}})):null})(n,Cc(this.el));if(!i)return console.warn("[ion-router] no matching URL for ",n.map((t=>t.id))),!1;const r=(t=>{const n=[];for(const e of t)for(const t of e.segments)if(":"===t[0]){const i=e.params&&e.params[t.slice(1)];if(!i)return null;n.push(i)}else""!==t&&n.push(t);return n})(i);return r?(this.setSegments(r,t),await this.safeWriteNavState(e,i,"root",r,null,n.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getSegments();t&&_c(t,Rc(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getSegments(),"root")}historyDirection(){var t;const n=window;null===n.history.state&&(this.state++,n.history.replaceState(this.state,n.document.title,null===(t=n.document.location)||void 0===t?void 0:t.href));const e=n.history.state,i=this.lastState;return this.lastState=e,e>i||e>=i&&i>0?"forward":e<i?"back":"root"}async writeNavStateRoot(t,n,e){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const i=Rc(this.el),r=_c(t,i);let s=null;if(r){const{segments:e,queryString:i}=r.to;this.setSegments(e,n,i),s=r.from,t=e}const o=Cc(this.el),u=Sc(t,o);return u?this.safeWriteNavState(document.body,u,n,t,s,0,e):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,n,e,i,r,s=0,o){const u=await this.lock();let a=!1;try{a=await this.writeNavState(t,n,e,i,r,s,o)}catch(t){console.error(t)}return u(),a}async lock(){const t=this.waitPromise;let n;return this.waitPromise=new Promise((t=>n=t)),void 0!==t&&await t,n}async runGuards(t=this.getSegments(),n){if(void 0===n&&(n=yc(this.previousPath).segments),!t||!n)return!0;const e=Cc(this.el),i=Sc(n,e),r=i&&i[i.length-1].beforeLeave,s=!r||await r();if(!1===s||"object"==typeof s)return s;const o=Sc(t,e),u=o&&o[o.length-1].beforeEnter;return!u||u()}async writeNavState(t,n,e,i,r,s=0,o){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const u=this.routeChangeEvent(i,r);u&&this.ionRouteWillChange.emit(u);const a=await gc(t,n,e,s,!1,o);return this.busy=!1,u&&this.ionRouteDidChange.emit(u),a}setSegments(t,n,e){this.state++,((t,n,e,i,r,s,o)=>{const u=((t,n,e)=>{let i=wc(t);return n&&(i="#"+i),void 0!==e&&(i+="?"+e),i})([...yc(n).segments,...i],e,o);"forward"===r?t.pushState(s,"",u):t.replaceState(s,"",u)})(window.history,this.root,this.useHash,t,n,this.state,e)}getSegments(){return((t,n,e)=>{const i=yc(this.root).segments,r=e?t.hash.slice(1):t.pathname;return((t,n)=>{if(t.length>n.length)return null;if(t.length<=1&&""===t[0])return n;for(let e=0;e<t.length;e++)if(t[e]!==n[e])return null;return n.length===t.length?[""]:n.slice(t.length)})(i,yc(r).segments)})(window.location,0,this.useHash)}routeChangeEvent(t,n){const e=this.previousPath,i=wc(t);return this.previousPath=i,i===e?null:{from:e,redirectedFrom:n?wc(n):null,to:i}}get el(){return i(this)}},Lc=class{constructor(n){t(this,n),this.ionNavWillLoad=r(this,"ionNavWillLoad",7),this.ionNavWillChange=r(this,"ionNavWillChange",3),this.ionNavDidChange=r(this,"ionNavDidChange",3),this.gestureOrAnimationInProgress=!1,this.mode=wt(this),this.animated=!0}swipeHandlerChanged(){this.gesture&&this.gesture.enable(void 0!==this.swipeHandler)}async connectedCallback(){const t=()=>{this.gestureOrAnimationInProgress=!0,this.swipeHandler&&this.swipeHandler.onStart()};this.gesture=(await import("./p-8ed3cead.js")).createSwipeBackGesture(this.el,(()=>!this.gestureOrAnimationInProgress&&!!this.swipeHandler&&this.swipeHandler.canStart()),(()=>t()),(t=>{var n;return null===(n=this.ani)||void 0===n?void 0:n.progressStep(t)}),((t,n,e)=>{if(this.ani){this.ani.onFinish((()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(t)}),{oneTimeCallback:!0});let i=t?-.001:.001;t?i+=It([0,0],[.32,.72],[0,1],[1,1],n)[0]:(this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=It([0,0],[1,0],[.68,.28],[1,1],n)[0]),this.ani.progressEnd(t?1:0,i,e)}else this.gestureOrAnimationInProgress=!1})),this.swipeHandlerChanged()}componentWillLoad(){this.ionNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,n,e){const i=await this.lock();let r=!1;try{r=await this.transition(t,n,e)}catch(t){console.error(t)}return i(),r}async setRouteId(t,n,e,i){return{changed:await this.setRoot(t,n,{duration:"root"===e?0:void 0,direction:"back"===e?"back":"forward",animationBuilder:i}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t,params:this.activeParams}:void 0}async setRoot(t,n,e){if(this.activeComponent===t&&_t(n,this.activeParams))return!1;const i=this.activeEl,r=await Tt(this.delegate,this.el,t,["ion-page","ion-page-invisible"],n);return this.activeComponent=t,this.activeEl=r,this.activeParams=n,await this.commit(r,i,e),await Nt(this.delegate,i),!0}async transition(t,n,e={}){if(n===t)return!1;this.ionNavWillChange.emit();const{el:i,mode:r}=this,s=this.animated&&yt.getBoolean("animated",!0),o=e.animationBuilder||this.animation||yt.get("navAnimation");return await St(Object.assign(Object.assign({mode:r,animated:s,enteringEl:t,leavingEl:n,baseEl:i,progressCallback:e.progressAnimation?t=>{void 0===t||this.gestureOrAnimationInProgress?this.ani=t:(this.gestureOrAnimationInProgress=!0,t.onFinish((()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(!1)}),{oneTimeCallback:!0}),t.progressEnd(0,0,0))}:void 0},e),{animationBuilder:o})),this.ionNavDidChange.emit(),!0}async lock(){const t=this.waitPromise;let n;return this.waitPromise=new Promise((t=>n=t)),void 0!==t&&await t,n}render(){return n("slot",null)}get el(){return i(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}};Lc.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";export{fc as dbdgroup_router,dc as ion_app,mc as ion_route,Mc as ion_router,Lc as ion_router_outlet}