import { r as registerInstance, h } from './index-e5ab994a.js';
import './index-4447333a.js';
import { t as toastController } from './overlays-03fac0f0.js';
import './utils-d8a9ac74.js';
import './animation-e960c982.js';
import './helpers-e7913fb8.js';
import './ios.transition-e7072c65.js';
import './index-03e2d32b.js';
import './md.transition-14f741c0.js';
import './cubic-bezier-4c0db14f.js';
import './index-dd414b33.js';
import './ionic-global-fc3774f0.js';
import './index-be6112f8.js';
import './index-acba08f2.js';
import './hardware-back-button-fa04d6e9.js';

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
      } }, h("ion-col", { size: "2" }, h("ion-accordion-group", null, h("ion-accordion", { value: "colors", "toggle-icon": "arrow-down-circle" }, h("ion-item", { style: {
        "text-align": "center",
      }, slot: "header" }, h("ion-label", null, "Links")), h("ion-list", { slot: "content" }, h("ion-item", null, h("a", { href: "https://deadbydaylight.group/tournament" }, "Tournament sign-up")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/list" }, "Tournament List")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/profile" }, "Profile")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/admin" }, "Admin")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group" }, "Home"))))))), h("ion-row", { style: {
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
