import{r as i,h as r,c as s,H as t}from"./p-a77c936b.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=class{constructor(r){i(this,r),this.routerDirection="forward",this.onClick=()=>((i,r,s,t,n)=>{const o=this.el.closest("ion-nav");if(o)if("forward"===r){if(void 0!==s)return o.push(s,t,{skipIfBusy:!0,animationBuilder:n})}else if("root"===r){if(void 0!==s)return o.setRoot(s,t,{skipIfBusy:!0,animationBuilder:n})}else if("back"===r)return o.pop({skipIfBusy:!0,animationBuilder:n});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation)}render(){return r(t,{onClick:this.onClick})}get el(){return s(this)}};export{n as ion_nav_link}