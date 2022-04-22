'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const modalLoginCss = "";

const ModalLogin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.formData = {};
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  render() {
    var _a, _b;
    return (index.h("ion-content", null, index.h("ion-card", { style: { maxWidth: "400px", margin: "30px auto" } }, index.h("h1", { style: {
        "font-family": "sans-serif",
      } }, index.h("b", null, "DEAD BY DAYLIGHT GROUP SIGN-UP")), index.h("fireenjin-form", null, index.h("ion-list", null, index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
        "font-family": "sans-serif",
      }, position: "floating" }, index.h("b", null, "Name")), index.h("ion-input", { name: "name", value: (_a = this.formData) === null || _a === void 0 ? void 0 : _a.name })), index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
        "font-family": "sans-serif",
      }, position: "floating" }, index.h("b", null, "E-mail")), index.h("ion-input", { name: "email", value: (_b = this.formData) === null || _b === void 0 ? void 0 : _b.email })))))));
  }
};
ModalLogin.style = modalLoginCss;

exports.modal_login = ModalLogin;
