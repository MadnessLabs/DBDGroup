import { r as registerInstance, h } from './index-bac865b7.js';
import './index.esm-a25bb2b3.js';
import { j as jh, i as ia, F as Fh } from './index.esm2017-e414a212.js';
import './process-es6-6fcfb3fc.js';
import './global-e1c7e609.js';

const appHomeCss = "ion-content{--background:none;background:url(\"/assets/dbdtreeBkgd.png\");background-position:center;width:100%;background-repeat:repeat;background-size:fill;background-color:rgb(66, 66, 66)}fireenjin-form{max-width:650px;background-color:#3d0105;text-align:center;margin:0 auto;font-family:sans-serif;opacity:0.6;border-style:ridge;border-color:#7a7a79}#bLogo{position:fixed;height:240px;width:280px;max-width:100%;margin-left:-120px;opacity:.7}";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formData = {};
  }
  onSubmit() {
    jh(ia(this.db, `users/${this.auth.currentUser.uid}`), this.formData, {
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
    const query = await Fh(ia(this.db, `users/${this.auth.currentUser.uid}`));
    this.formData = query.data();
  }
  render() {
    var _a, _b;
    return (h("ion-content", null, h("ion-grid", null, h("ion-header", null, h("ion-toolbar", null, h("ion-list", null))), h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { "size-sm": "10", "size-md": "4", style: {
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
