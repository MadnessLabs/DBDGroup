'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');
const overlays = require('./overlays-0a768df0.js');
require('./ionic-global-07f11642.js');
require('./hardware-back-button-92d97ff8.js');
require('./helpers-061c1472.js');

const appListCss = "ion-content{--background:none;background:url(\"/assets/\");background-position:center top;background-repeat:repeat;background-size:contain;background-color:rgb(66, 66, 66);opacity:1}.choices{text-align:center;font-size:x-large}ion-row{justify-content:center;padding:30px}ion-col{border-style:ridge;border-color:#7a7a79}#bLogo{position:absolute;height:240px;width:280px;max-width:100%;opacity:.7}";

const AppList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async presentToast(_event) {
    const toast = await overlays.toastController.create({
      message: "Help yourself you fuck!",
      duration: 2000,
    });
    toast.present();
  }
  render() {
    return (index.h("ion-content", null, index.h("ion-grid", null, index.h("ion-row", { style: {
        "justify-content": "center",
        padding: "0px",
      } }, index.h("ion-col", { size: "8", "size-md": "2" }, index.h("ion-accordion-group", null, index.h("ion-accordion", { "toggle-icon": "arrow-down-circle" }, index.h("ion-item", { style: {
        "text-align": "center",
      }, slot: "header" }, index.h("ion-label", null, "Links")), index.h("ion-list", { slot: "content" }, index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/tournament" }, "Tournament sign-up")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/list" }, "Tournament List")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/profile" }, "Profile")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/admin" }, "Admin")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group" }, "Home"))))))), index.h("ion-row", { style: {
        "justify-content": "center",
        padding: "0px",
      } }, index.h("ion-col", { size: "12", "size-md": "4", style: {
        "text-align": "center",
        "border-color": "transparent",
      } }, index.h("ion-card", { style: {
        opacity: ".6",
      } }, index.h("h1", { style: {
        "font-family": "sans-serif",
        color: "white",
      } }, index.h("div", { class: "ion-text-center" }, index.h("b", null, "DEAD BY DAYLIGHT TOURNAMENTS")))))), index.h("ion-row", null, index.h("ion-col", { size: "12", "size-md": "8" }, index.h("ion-card", null, index.h("ion-card-header", null, index.h("ion-row", null, index.h("ion-col", null, index.h("ion-card-title", null, " Tournament Title ")), index.h("ion-row", null, index.h("ion-row", null, index.h("ion-card-content", null, " Date and Time "))), index.h("ion-card-content", null, " TLDR Tourney Rules "), index.h("ion-item", null, index.h("a", { href: "http://localhost:3333/tournament" }, index.h("ion-icon", { name: "chevron-forward-outline" })))))))))));
  }
};
AppList.style = appListCss;

exports.app_list = AppList;
