import{b as n}from"./p-2bde1599.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let i;const t=n=>{if(void 0===i){const t=void 0!==n.style.webkitAnimationName;i=void 0===n.style.animationName&&t?"-webkit-":""}return i},e=(n,i,e)=>{const o=i.startsWith("animation")?t(n):"";n.style.setProperty(o+i,e)},o=(n,i)=>{const e=i.startsWith("animation")?t(n):"";n.style.removeProperty(e+i)},a=[],r=(n=[],i)=>{if(void 0!==i){const t=Array.isArray(i)?i:[i];return[...n,...t]}return n},s=i=>{let s,l,d,m,f,c,u,v,y,p,g,$,b,A=[],E=[],k=[],C=!1,w={},h=[],S=[],T={},R=0,F=!1,D=!1,W=!0,I=!1,K=!0,M=!1;const j=i,x=[],z=[],P=[],Z=[],q=[],B=[],G=[],H=[],J=[],L=[],N="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,O="function"==typeof Element&&"function"==typeof Element.prototype.animate&&N,Q=()=>L,U=(n,i)=>(((null==i?void 0:i.oneTimeCallback)?z:x).push({c:n,o:i}),b),V=()=>{if(O)L.forEach((n=>{n.cancel()})),L.length=0;else{const i=P.slice();n((()=>{i.forEach((n=>{o(n,"animation-name"),o(n,"animation-duration"),o(n,"animation-timing-function"),o(n,"animation-iteration-count"),o(n,"animation-delay"),o(n,"animation-play-state"),o(n,"animation-fill-mode"),o(n,"animation-direction")}))}))}},X=()=>{q.forEach((n=>{(null==n?void 0:n.parentNode)&&n.parentNode.removeChild(n)})),q.length=0},Y=()=>void 0!==f?f:u?u.getFill():"both",_=()=>void 0!==y?y:void 0!==c?c:u?u.getDirection():"normal",nn=()=>F?"linear":void 0!==d?d:u?u.getEasing():"linear",tn=()=>D?0:void 0!==p?p:void 0!==l?l:u?u.getDuration():0,en=()=>void 0!==m?m:u?u.getIterations():1,on=()=>void 0!==g?g:void 0!==s?s:u?u.getDelay():0,an=()=>{0!==R&&(R--,0===R&&((()=>{vn(),H.forEach((n=>n())),J.forEach((n=>n()));const n=W?1:0,i=h,t=S,o=T;P.forEach((n=>{const a=n.classList;i.forEach((n=>a.add(n))),t.forEach((n=>a.remove(n)));for(const i in o)o.hasOwnProperty(i)&&e(n,i,o[i])})),x.forEach((i=>i.c(n,b))),z.forEach((i=>i.c(n,b))),z.length=0,K=!0,W&&(I=!0),W=!0})(),u&&u.animationFinish()))},rn=(o=!0)=>{X();const r=((s=A).forEach((n=>{for(const i in n)if(n.hasOwnProperty(i)){const t=n[i];if("easing"===i)n["animation-timing-function"]=t,delete n[i];else{const e=i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();e!==i&&(n[e]=t,delete n[i])}}})),s);var s;P.forEach((s=>{if(r.length>0){const l=((n=[])=>n.map((n=>{const i=n.offset,t=[];for(const i in n)n.hasOwnProperty(i)&&"offset"!==i&&t.push(`${i}: ${n[i]};`);return`${100*i}% { ${t.join(" ")} }`})).join(" "))(r);$=void 0!==i?i:(n=>{let i=a.indexOf(n);return i<0&&(i=a.push(n)-1),`ion-animation-${i}`})(l);const d=((n,i,e)=>{const o=(n=>{const i=n.getRootNode();return i.head||i})(e),a=t(e),r=o.querySelector("#"+n);if(r)return r;const s=(e.ownerDocument||document).createElement("style");return s.id=n,s.textContent=`@${a}keyframes ${n} { ${i} } @${a}keyframes ${n}-alt { ${i} }`,o.appendChild(s),s})($,l,s);q.push(d),e(s,"animation-duration",`${tn()}ms`),e(s,"animation-timing-function",nn()),e(s,"animation-delay",`${on()}ms`),e(s,"animation-fill-mode",Y()),e(s,"animation-direction",_());const m=en()===1/0?"infinite":en().toString();e(s,"animation-iteration-count",m),e(s,"animation-play-state","paused"),o&&e(s,"animation-name",`${d.id}-alt`),n((()=>{e(s,"animation-name",d.id||null)}))}}))},sn=(n=!0)=>{(()=>{B.forEach((n=>n())),G.forEach((n=>n()));const n=E,i=k,t=w;P.forEach((o=>{const a=o.classList;n.forEach((n=>a.add(n))),i.forEach((n=>a.remove(n)));for(const n in t)t.hasOwnProperty(n)&&e(o,n,t[n])}))})(),A.length>0&&(O?(P.forEach((n=>{const i=n.animate(A,{id:j,delay:on(),duration:tn(),easing:nn(),iterations:en(),fill:Y(),direction:_()});i.pause(),L.push(i)})),L.length>0&&(L[0].onfinish=()=>{an()})):rn(n)),C=!0},ln=n=>{if(n=Math.min(Math.max(n,0),.9999),O)L.forEach((i=>{i.currentTime=i.effect.getComputedTiming().delay+tn()*n,i.pause()}));else{const i=`-${tn()*n}ms`;P.forEach((n=>{A.length>0&&(e(n,"animation-delay",i),e(n,"animation-play-state","paused"))}))}},dn=n=>{L.forEach((n=>{n.effect.updateTiming({delay:on(),duration:tn(),easing:nn(),iterations:en(),fill:Y(),direction:_()})})),void 0!==n&&ln(n)},mn=(i=!0,t)=>{n((()=>{P.forEach((o=>{e(o,"animation-name",$||null),e(o,"animation-duration",`${tn()}ms`),e(o,"animation-timing-function",nn()),e(o,"animation-delay",void 0!==t?`-${t*tn()}ms`:`${on()}ms`),e(o,"animation-fill-mode",Y()||null),e(o,"animation-direction",_()||null);const a=en()===1/0?"infinite":en().toString();e(o,"animation-iteration-count",a),i&&e(o,"animation-name",`${$}-alt`),n((()=>{e(o,"animation-name",$||null)}))}))}))},fn=(n=!1,i=!0,t)=>(n&&Z.forEach((e=>{e.update(n,i,t)})),O?dn(t):mn(i,t),b),cn=()=>{C&&(O?L.forEach((n=>{n.pause()})):P.forEach((n=>{e(n,"animation-play-state","paused")})),M=!0)},un=()=>{v=void 0,an()},vn=()=>{v&&clearTimeout(v)},yn=i=>new Promise((t=>{(null==i?void 0:i.sync)&&(D=!0,U((()=>D=!1),{oneTimeCallback:!0})),C||sn(),I&&(O?(ln(0),dn()):mn(),I=!1),K&&(R=Z.length+1,K=!1),U((()=>t()),{oneTimeCallback:!0}),Z.forEach((n=>{n.play()})),O?(L.forEach((n=>{n.play()})),0!==A.length&&0!==P.length||an()):(()=>{if(vn(),n((()=>{P.forEach((n=>{A.length>0&&e(n,"animation-play-state","running")}))})),0===A.length||0===P.length)an();else{const i=on()||0,t=tn()||0,e=en()||1;isFinite(e)&&(v=setTimeout(un,i+t*e+100)),(i=>{let t;const e={passive:!0},a=e=>{i===e.target&&(t&&t(),vn(),n((()=>{P.forEach((n=>{o(n,"animation-duration"),o(n,"animation-delay"),o(n,"animation-play-state")})),n(an)})))};i&&(i.addEventListener("webkitAnimationEnd",a,e),i.addEventListener("animationend",a,e),t=()=>{i.removeEventListener("webkitAnimationEnd",a,e),i.removeEventListener("animationend",a,e)})})(P[0])}})(),M=!1})),pn=(n,i)=>{const t=A[0];return void 0===t||void 0!==t.offset&&0!==t.offset?A=[{offset:0,[n]:i},...A]:t[n]=i,b};return b={parentAnimation:u,elements:P,childAnimations:Z,id:j,animationFinish:an,from:pn,to:(n,i)=>{const t=A[A.length-1];return void 0===t||void 0!==t.offset&&1!==t.offset?A=[...A,{offset:1,[n]:i}]:t[n]=i,b},fromTo:(n,i,t)=>pn(n,i).to(n,t),parent:n=>(u=n,b),play:yn,pause:()=>(Z.forEach((n=>{n.pause()})),cn(),b),stop:()=>{Z.forEach((n=>{n.stop()})),C&&(V(),C=!1),F=!1,D=!1,K=!0,y=void 0,p=void 0,g=void 0,R=0,I=!1,W=!0,M=!1},destroy:n=>(Z.forEach((i=>{i.destroy(n)})),(n=>{V(),n&&X()})(n),P.length=0,Z.length=0,A.length=0,x.length=0,z.length=0,C=!1,K=!0,b),keyframes:n=>{const i=A!==n;return A=n,i&&(n=>{O?Q().forEach((i=>{if(i.effect.setKeyframes)i.effect.setKeyframes(n);else{const t=new KeyframeEffect(i.effect.target,n,i.effect.getTiming());i.effect=t}})):rn()})(A),b},addAnimation:n=>{if(null!=n)if(Array.isArray(n))for(const i of n)i.parent(b),Z.push(i);else n.parent(b),Z.push(n);return b},addElement:n=>{if(null!=n)if(1===n.nodeType)P.push(n);else if(n.length>=0)for(let i=0;i<n.length;i++)P.push(n[i]);else console.error("Invalid addElement value");return b},update:fn,fill:n=>(f=n,fn(!0),b),direction:n=>(c=n,fn(!0),b),iterations:n=>(m=n,fn(!0),b),duration:n=>(O||0!==n||(n=1),l=n,fn(!0),b),easing:n=>(d=n,fn(!0),b),delay:n=>(s=n,fn(!0),b),getWebAnimations:Q,getKeyframes:()=>A,getFill:Y,getDirection:_,getDelay:on,getIterations:en,getEasing:nn,getDuration:tn,afterAddRead:n=>(H.push(n),b),afterAddWrite:n=>(J.push(n),b),afterClearStyles:(n=[])=>{for(const i of n)T[i]="";return b},afterStyles:(n={})=>(T=n,b),afterRemoveClass:n=>(S=r(S,n),b),afterAddClass:n=>(h=r(h,n),b),beforeAddRead:n=>(B.push(n),b),beforeAddWrite:n=>(G.push(n),b),beforeClearStyles:(n=[])=>{for(const i of n)w[i]="";return b},beforeStyles:(n={})=>(w=n,b),beforeRemoveClass:n=>(k=r(k,n),b),beforeAddClass:n=>(E=r(E,n),b),onFinish:U,isRunning:()=>0!==R&&!M,progressStart:(n=!1,i)=>(Z.forEach((t=>{t.progressStart(n,i)})),cn(),F=n,C||sn(),fn(!1,!0,i),b),progressStep:n=>(Z.forEach((i=>{i.progressStep(n)})),ln(n),b),progressEnd:(n,i,t)=>(F=!1,Z.forEach((e=>{e.progressEnd(n,i,t)})),void 0!==t&&(p=t),I=!1,W=!0,0===n?(y="reverse"===_()?"normal":"reverse","reverse"===y&&(W=!1),O?(fn(),ln(1-i)):(g=(1-i)*tn()*-1,fn(!1,!1))):1===n&&(O?(fn(),ln(i)):(g=i*tn()*-1,fn(!1,!1))),void 0!==n&&(U((()=>{p=void 0,y=void 0,g=void 0}),{oneTimeCallback:!0}),u||yn()),b)}};export{s as c}