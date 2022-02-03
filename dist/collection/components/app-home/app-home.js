import { Component, h, Listen, Prop, State } from '@stencil/core';
import { doc, getDoc, setDoc } from 'firebase/firestore';
export class AppHome {
  constructor() {
    this.formData = {};
  }
  onSubmit() {
    setDoc(doc(this.db, `users/${this.auth.currentUser.uid}`), this.formData, {
      merge: true
    });
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  async componentDidLoad() {
    const query = await getDoc(doc(this.db, `users/${this.auth.currentUser.uid}`));
    this.formData = query.data();
  }
  render() {
    var _a, _b;
    return (h("ion-conten", null,
      h("ion-card", null,
        h("form", null,
          h("ion-list", null,
            h("ion-item", null,
              h("ion-input", { name: "name", value: (_a = this.formData) === null || _a === void 0 ? void 0 : _a.name }),
              h("ion-input", { name: "type", value: (_b = this.formData) === null || _b === void 0 ? void 0 : _b.type }))),
          h("ion-button", { type: "submit" }, "Save")))));
  }
  static get is() { return "app-home"; }
  static get originalStyleUrls() { return {
    "$": ["app-home.css"]
  }; }
  static get styleUrls() { return {
    "$": ["app-home.css"]
  }; }
  static get properties() { return {
    "db": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Firestore",
        "resolved": "Firestore",
        "references": {
          "Firestore": {
            "location": "import",
            "path": "firebase/firestore"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "auth": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Auth",
        "resolved": "Auth",
        "references": {
          "Auth": {
            "location": "import",
            "path": "firebase/auth"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "formData": {}
  }; }
  static get listeners() { return [{
      "name": "submit",
      "method": "onSubmit",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ionInput",
      "method": "onInput",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
