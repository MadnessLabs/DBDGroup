import { Component, h } from "@stencil/core";
export class ModalSuccess {
  render() {
    return (h("ion-content", null,
      h("ion-icon", { name: "checkmark-circle" }),
      h("h1", null, "Success")));
  }
  static get is() { return "modal-success"; }
  static get originalStyleUrls() { return {
    "$": ["modal-success.css"]
  }; }
  static get styleUrls() { return {
    "$": ["modal-success.css"]
  }; }
}
