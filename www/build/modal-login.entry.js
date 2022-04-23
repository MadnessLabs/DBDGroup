import { r as registerInstance, h } from './index-a091ab89.js';

const modalLoginCss = "";

const ModalLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formData = {};
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  render() {
    var _a, _b;
    return (h("ion-content", null, h("ion-card", { style: { maxWidth: "400px", margin: "30px auto" } }, h("h1", { style: {
        "font-family": "sans-serif",
      } }, h("b", null, "DEAD BY DAYLIGHT GROUP SIGN-UP")), h("fireenjin-form", null, h("ion-list", null, h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
        "font-family": "sans-serif",
      }, position: "floating" }, h("b", null, "Name")), h("ion-input", { name: "name", value: (_a = this.formData) === null || _a === void 0 ? void 0 : _a.name })), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
        "font-family": "sans-serif",
      }, position: "floating" }, h("b", null, "E-mail")), h("ion-input", { name: "email", value: (_b = this.formData) === null || _b === void 0 ? void 0 : _b.email })))))));
  }
};
ModalLogin.style = modalLoginCss;

export { ModalLogin as modal_login };
