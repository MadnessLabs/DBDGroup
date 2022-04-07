import { r as registerInstance, h } from './index-e5ab994a.js';
import './index.esm-7f18c43a.js';
import { i as il, g as gc, Y as Yh } from './index.esm2017-64852796.js';
import './process-es6-6fcfb3fc.js';
import './global-e1c7e609.js';

const appHomeCss = "ion-content{--background:none;background:url(\"/assets/dbdtreeBkgd.png\");background-position:center;width:100%;background-repeat:repeat;background-size:fill;background-color:rgb(66, 66, 66)}fireenjin-form{max-width:650px;background-color:#3d0105;text-align:center;margin:0 auto;font-family:sans-serif;opacity:0.6;border-style:ridge;border-color:#7a7a79}#bLogo{position:fixed;height:240px;width:280px;max-width:100%;margin-left:-120px;opacity:.7}";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formData = {};
  }
  onSubmit() {
    il(gc(this.db, `users/${this.auth.currentUser.uid}`), this.formData, {
      merge: true,
    });
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  async componentDidLoad() {
    var _a, _b;
    if (!((_b = (_a = this.auth) === null || _a === void 0 ? void 0 : _a.currentUser) === null || _b === void 0 ? void 0 : _b.uid))
      return;
    const query = await Yh(gc(this.db, `users/${this.auth.currentUser.uid}`));
    this.formData = query.data();
  }
  render() {
    var _a, _b;
    return (h("ion-content", null, h("ion-grid", { class: "ion-no-padding" }, h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "8", "size-sm": "2" }, h("ion-accordion-group", null, h("ion-accordion", { value: "colors", "toggle-icon": "arrow-down-circle" }, h("ion-item", { style: {
        "text-align": "center",
      }, slot: "header" }, h("ion-label", null, "Links")), h("ion-list", { slot: "content" }, h("ion-item", null, h("a", { href: "https://deadbydaylight.group/tournament" }, "Tournament sign-up")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/list" }, "Tournament List")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/profile" }, "Profile")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/admin" }, "Admin")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group" }, "Home"))))))), h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "10", "size-sm": "4", style: {
        "text-align": "center",
      } }, h("ion-card", { style: {
        opacity: ".6",
        "border-style": "ridge",
        "border-color": "#7a7a79",
      } }, h("h1", { style: {
        "font-family": "sans-serif",
        color: "white",
      } }, h("b", null, "DEAD BY DAYLIGHT GROUP SIGN-UP"))), h("fireenjin-form", null, h("ion-list", null, h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
        "font-family": "sans-serif",
        color: "white",
      }, position: "floating" }, h("b", null, "Name")), h("ion-input", { name: "name", value: (_a = this.formData) === null || _a === void 0 ? void 0 : _a.name })), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
        "font-family": "sans-serif",
      }, position: "floating" }, h("b", null, "E-mail")), h("ion-input", { name: "email", value: (_b = this.formData) === null || _b === void 0 ? void 0 : _b.email })))), h("img", { id: "bLogo", src: "/assets/dbdlogoblack.png" }))))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
