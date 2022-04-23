import { r as registerInstance, h } from './index-a091ab89.js';
import './index-8d58a465.js';
import { t as toastController } from './overlays-d4c0b42d.js';
import './utils-6d7b2653.js';
import './animation-f4dcdfa9.js';
import './helpers-e7913fb8.js';
import './ios.transition-acae6065.js';
import './index-db11ab58.js';
import './md.transition-78076c14.js';
import './cubic-bezier-4c0db14f.js';
import './index-dd414b33.js';
import './ionic-global-65ffbf98.js';
import './index-be6112f8.js';
import './index-310a046e.js';
import './hardware-back-button-fa04d6e9.js';

const appListCss = "ion-content{--background:none;background:url(\"/assets/\");background-position:center top;background-repeat:repeat;background-size:contain;background-color:rgb(66, 66, 66);opacity:1}.choices{text-align:center;font-size:x-large}ion-row{justify-content:center;padding:30px}ion-col{border-style:ridge;border-color:#7a7a79}#bLogo{position:absolute;height:240px;width:280px;max-width:100%;opacity:.7}";

const AppList = class {
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
        padding: "0px",
      } }, h("ion-col", { size: "8", "size-md": "2" }, h("ion-accordion-group", null, h("ion-accordion", { "toggle-icon": "arrow-down-circle" }, h("ion-item", { style: {
        "text-align": "center",
      }, slot: "header" }, h("ion-label", null, "Links")), h("ion-list", { slot: "content" }, h("ion-item", null, h("a", { href: "https://deadbydaylight.group/tournament" }, "Tournament sign-up")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/list" }, "Tournament List")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/profile" }, "Profile")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/admin" }, "Admin")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group" }, "Home"))))))), h("ion-row", { style: {
        "justify-content": "center",
        padding: "0px",
      } }, h("ion-col", { style: {
        "text-align": "center",
        "border-color": "transparent",
      } }, h("ion-card", { style: {
        opacity: ".6",
      } }, h("h1", { style: {
        "font-family": "sans-serif",
        color: "white",
      } }, h("div", { class: "ion-text-center" }, h("b", null, "DEAD BY DAYLIGHT TOURNAMENTS")))))), h("ion-row", null, h("ion-col", null, h("dbd-tournament-card", null, h("dbd-tournament-details", null, " "), " "))))));
  }
};
AppList.style = appListCss;

export { AppList as app_list };
