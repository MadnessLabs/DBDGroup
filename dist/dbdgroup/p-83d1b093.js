import{g as o,b as t,a as n}from"./p-db955081.js";import{a as i,r,b as e,p as a,c as s}from"./p-2bde1599.js";import"./p-9887b817.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const c=new WeakMap,d=(o,t,n,i=0)=>{c.has(o)!==n&&(n?l(o,t,i):f(o,t))},u=o=>o===o.getRootNode().activeElement,l=(o,t,n)=>{const i=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,i.appendChild(r),c.set(o,r);const e="rtl"===o.ownerDocument.dir?9999:-9999;o.style.pointerEvents="none",t.style.transform=`translate3d(${e}px,${n}px,0) scale(0)`},f=(o,t)=>{const n=c.get(o);n&&(c.delete(o),n.remove()),o.style.pointerEvents="",t.style.transform=""},w="input, textarea, [no-blur], [contenteditable]",p=async(n,i,r,a,s)=>{if(!r&&!a)return;const c=((o,t,n)=>((o,t,n,i)=>{const r=o.top,e=o.bottom,a=t.top,s=a+15,c=.75*Math.min(t.bottom,i-n)-e,d=s-r,u=Math.round(c<0?-c:d>0?-d:0),l=Math.min(u,r-a),f=Math.abs(l);return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:n,inputSafeY:4-(r-s)}})((o.closest("ion-item,[ion-item]")||o).getBoundingClientRect(),t.getBoundingClientRect(),n,o.ownerDocument.defaultView.innerHeight))(n,r||a,s);if(r&&Math.abs(c.scrollAmount)<4)i.focus();else if(d(n,i,!0,c.inputSafeY),i.focus(),e((()=>n.click())),"undefined"!=typeof window){let e;const a=async()=>{void 0!==e&&clearTimeout(e),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",a),r&&await t(r,0,c.scrollAmount,c.scrollDuration),d(n,i,!1,c.inputSafeY),i.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",a)};if(r){const t=await o(r);if(c.scrollAmount>t.scrollHeight-t.clientHeight-t.scrollTop)return"password"===i.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",a),void(e=setTimeout(a,1e3))}a()}},h=(o,t)=>{var i,r;if("INPUT"!==o.tagName)return;if(o.parentElement&&"ION-INPUT"===o.parentElement.tagName)return;if("ION-SEARCHBAR"===(null===(r=null===(i=o.parentElement)||void 0===i?void 0:i.parentElement)||void 0===r?void 0:r.tagName))return;const e=n(o);if(null===e)return;const a=e.$ionPaddingTimer;a&&clearTimeout(a),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e.$ionPaddingTimer=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px")}),120)},b=o=>{const t=document,e=o.getNumber("keyboardHeight",290),c=o.getBoolean("scrollAssist",!0),l=o.getBoolean("hideCaretOnScroll",!0),f=o.getBoolean("inputBlurring",!0),b=o.getBoolean("scrollPadding",!0),m=Array.from(t.querySelectorAll("ion-input, ion-textarea")),S=new WeakMap,y=new WeakMap,M=async o=>{await new Promise((t=>s(o,t)));const t=o.shadowRoot||o,f=t.querySelector("input")||t.querySelector("textarea"),w=n(o),h=w?null:o.closest("ion-footer");if(f){if(w&&l&&!S.has(o)){const t=((o,t,n)=>{if(!n||!t)return()=>{};const e=n=>{u(t)&&d(o,t,n)},a=()=>d(o,t,!1),s=()=>e(!0),c=()=>e(!1);return i(n,"ionScrollStart",s),i(n,"ionScrollEnd",c),t.addEventListener("blur",a),()=>{r(n,"ionScrollStart",s),r(n,"ionScrollEnd",c),t.addEventListener("ionBlur",a)}})(o,f,w);S.set(o,t)}if((w||h)&&c&&!y.has(o)){const t=((o,t,n,i,r)=>{let e;const s=o=>{e=a(o)},c=s=>{if(!e)return;const c=a(s);((o,t,n)=>{if(t&&n){const i=t.x-n.x,r=t.y-n.y;return i*i+r*r>o*o}return!1})(6,e,c)||u(t)||(s.stopPropagation(),p(o,t,n,i,r))};return o.addEventListener("touchstart",s,!0),o.addEventListener("touchend",c,!0),()=>{o.removeEventListener("touchstart",s,!0),o.removeEventListener("touchend",c,!0)}})(o,f,w,h,e);y.set(o,t)}}};f&&(()=>{let o=!0,t=!1;const n=document;i(n,"ionScrollStart",(()=>{t=!0})),n.addEventListener("focusin",(()=>{o=!0}),!0),n.addEventListener("touchend",(i=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(w))return;const e=i.target;e!==r&&(e.matches(w)||e.closest(w)||(o=!1,setTimeout((()=>{o||r.blur()}),50)))}),!1)})(),b&&(o=>{const t=document;t.addEventListener("focusin",(t=>{h(t.target,o)})),t.addEventListener("focusout",(o=>{h(o.target,0)}))})(e);for(const o of m)M(o);t.addEventListener("ionInputDidLoad",(o=>{M(o.detail)})),t.addEventListener("ionInputDidUnload",(o=>{(o=>{if(l){const t=S.get(o);t&&t(),S.delete(o)}if(c){const t=y.get(o);t&&t(),y.delete(o)}})(o.detail)}))};export{b as startInputShims}