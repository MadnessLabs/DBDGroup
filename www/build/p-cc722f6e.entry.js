import{r as t,d as i,h as s,c as e,H as h}from"./p-a77c936b.js";import{g as n}from"./p-84bd14d5.js";import{j as o}from"./p-2bde1599.js";let a;const r=class{constructor(s){t(this,s),this.ionDrag=i(this,"ionDrag",7),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.closestContent=null,this.initialContentScrollY=!0,this.state=2,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){this.item=this.el.querySelector("ion-item"),this.closestContent=this.el.closest("ion-content"),await this.updateOptions(),this.gesture=(await import("./p-e9431eeb.js")).createGesture({el:this.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:t=>this.canStart(t),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,a===this.el&&(a=void 0)}getOpenAmount(){return Promise.resolve(this.openAmount)}getSlidingRatio(){return Promise.resolve(this.getSlidingRatioSync())}async open(t){if(null===this.item)return;const i=this.getOptions(t);i&&(void 0===t&&(t=i===this.leftOptions?"start":"end"),t=o(t)?"end":"start",this.openAmount<0&&i===this.leftOptions||this.openAmount>0&&i===this.rightOptions||(this.closeOpened(),this.state=4,requestAnimationFrame((()=>{this.calculateOptsWidth(),a=this.el,this.setOpenAmount("end"===t?this.optsWidthRightSide:-this.optsWidthLeftSide,!1),this.state="end"===t?8:16}))))}async close(){this.setOpenAmount(0,!0)}async closeOpened(){return void 0!==a&&(a.close(),a=void 0,!0)}getOptions(t){return void 0===t?this.leftOptions||this.rightOptions:"start"===t?this.leftOptions:this.rightOptions}async updateOptions(){const t=this.el.querySelectorAll("ion-item-options");let i=0;this.leftOptions=this.rightOptions=void 0;for(let s=0;s<t.length;s++){const e=t.item(s),h=void 0!==e.componentOnReady?await e.componentOnReady():e;"start"==(o(h.side)?"end":"start")?(this.leftOptions=h,i|=1):(this.rightOptions=h,i|=2)}this.optsDirty=!0,this.sides=i}canStart(t){return!("rtl"===document.dir?window.innerWidth-t.startX<15:t.startX<15)&&(a&&a!==this.el&&this.closeOpened(),!(!this.rightOptions&&!this.leftOptions))}disableContentScrollY(){null!==this.closestContent&&(this.initialContentScrollY=this.closestContent.scrollY,this.closestContent.scrollY=!1)}restoreContentScrollY(){null!==this.closestContent&&(this.closestContent.scrollY=this.initialContentScrollY)}onStart(){this.item=this.el.querySelector("ion-item"),this.disableContentScrollY(),a=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}onMove(t){this.optsDirty&&this.calculateOptsWidth();let i,s=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:s=Math.max(0,s);break;case 1:s=Math.min(0,s);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}s>this.optsWidthRightSide?(i=this.optsWidthRightSide,s=i+.55*(s-i)):s<-this.optsWidthLeftSide&&(i=-this.optsWidthLeftSide,s=i+.55*(s-i)),this.setOpenAmount(s,!1)}onEnd(t){this.restoreContentScrollY();const i=t.velocityX;let s=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;const e=this.openAmount>0==!(i<0),h=Math.abs(i)>.3,n=Math.abs(this.openAmount)<Math.abs(s/2);d(e,h,n)&&(s=0);const o=this.state;this.setOpenAmount(s,!0),0!=(32&o)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&o)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}calculateOptsWidth(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1}setOpenAmount(t,i){if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),!this.item)return;const s=this.item.style;if(this.openAmount=t,i&&(s.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.gesture&&this.gesture.enable(!1),this.tmr=setTimeout((()=>{this.state=2,this.tmr=void 0,this.gesture&&this.gesture.enable(!this.disabled)}),600),a=void 0,void(s.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}s.transform=`translate3d(${-t}px,0,0)`,this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}getSlidingRatioSync(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}render(){const t=n(this);return s(h,{class:{[t]:!0,"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":0!=(8&this.state),"item-sliding-active-options-start":0!=(16&this.state),"item-sliding-active-swipe-end":0!=(32&this.state),"item-sliding-active-swipe-start":0!=(64&this.state)}})}get el(){return e(this)}static get watchers(){return{disabled:["disabledChanged"]}}},d=(t,i,s)=>!i&&s||t&&i;r.style="ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;user-select:none}ion-item-sliding .item{user-select:none}.item-sliding-active-slide .item{position:relative;transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;order:1;transition-duration:0.6s;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;order:-1;transition-duration:0.6s;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{order:1}";export{r as ion_item_sliding}