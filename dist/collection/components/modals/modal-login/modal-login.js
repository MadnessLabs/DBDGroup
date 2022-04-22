import { Component, State, h, Listen } from "@stencil/core";
export class ModalLogin {
  constructor() {
    this.formData = {};
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  render() {
    var _a, _b;
    return (h("ion-content", null,
      h("ion-card", { style: { maxWidth: "400px", margin: "30px auto" } },
        h("h1", { style: {
            "font-family": "sans-serif",
          } },
          h("b", null, "DEAD BY DAYLIGHT GROUP SIGN-UP")),
        h("fireenjin-form", null,
          h("ion-list", null,
            h("ion-item", null,
              h("ion-label", { style: {
                  "font-size": "20px",
                  "font-family": "sans-serif",
                }, position: "floating" },
                h("b", null, "Name")),
              h("ion-input", { name: "name", value: (_a = this.formData) === null || _a === void 0 ? void 0 : _a.name })),
            h("ion-item", null,
              h("ion-label", { style: {
                  "font-size": "20px",
                  "font-family": "sans-serif",
                }, position: "floating" },
                h("b", null, "E-mail")),
              h("ion-input", { name: "email", value: (_b = this.formData) === null || _b === void 0 ? void 0 : _b.email })))))));
  }
  static get is() { return "modal-login"; }
  static get originalStyleUrls() { return {
    "$": ["modal-login.css"]
  }; }
  static get styleUrls() { return {
    "$": ["modal-login.css"]
  }; }
  static get states() { return {
    "formData": {}
  }; }
  static get listeners() { return [{
      "name": "ionInput",
      "method": "onInput",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
