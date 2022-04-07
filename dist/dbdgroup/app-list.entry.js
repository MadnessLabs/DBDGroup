import { r as registerInstance, h } from './index-bac865b7.js';
import './index-8d526bb0.js';
import { t as toastController } from './overlays-884665fe.js';
import './utils-1446f01d.js';
import './animation-ff813219.js';
import './helpers-b5b4d5eb.js';
import './ios.transition-53377047.js';
import './index-3f3f61b5.js';
import './md.transition-bf0d55d6.js';
import './cubic-bezier-a7ad9c8e.js';
import './index-c31991b6.js';
import './ionic-global-48c6f4a1.js';
import './index-435af8e6.js';
import './index-ae4d9ece.js';
import './hardware-back-button-b6ccf74a.js';

const appListCss = "ion-content{--background:none;background:url(\"/assets/\");background-position:center top;background-repeat:repeat;background-size:contain;background-color:rgb(66, 66, 66);opacity:1}.choices{text-align:center;font-size:x-large}ion-row{justify-content:center;padding:30px}ion-col{border-style:ridge;border-color:#7a7a79}#bLogo{position:absolute;height:240px;width:280px;max-width:100%;opacity:.7}";

let AppList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async presentToast(_event) {
    const toast = await toastController.create({
      message: "Help yourself you fuck!",
      duration: 2000,
    });
    toast.present();
  }
  render() {
    return (h("ion-content", null, h("ion-grid", null, h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { "size-sm": "10", "size-md": "4", style: {
        "text-align": "center",
        "border-color": "transparent",
      } }, h("ion-card", { style: {
        opacity: ".6",
        "border-style": "ridge",
        "border-color": "#7a7a79",
      } }, h("h1", { style: {
        "font-family": "sans-serif",
        color: "white",
      } }, h("b", null, "DEAD BY DAYLIGHT TOURNAMENTS"))))), h("ion-row", null, h("ion-col", { size: "12", "size-sm": "8" })), h("ion-row", null, h("ion-col", { size: "8" })), h("ion-row", null, h("ion-col", { size: "8" })), h("ion-row", null, h("img", { id: "bLogo", src: "/assets/dbdlogoblack.png" })))));
  }
};
AppList.style = appListCss;

export { AppList as app_list };
