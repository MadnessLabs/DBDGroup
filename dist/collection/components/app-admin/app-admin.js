import { Component, h, Listen, Prop, State } from '@stencil/core';
import { setDoc, doc } from 'firebase/firestore';
export class AppAdmin {
  constructor() {
    this.formData = {
      survivors: [],
      killers: []
    };
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  onSubmit() {
    var _a;
    const timestamp = new Date();
    const id = ((_a = this.formData) === null || _a === void 0 ? void 0 : _a.id) || `${timestamp.getFullYear()}-${timestamp.getMonth() + 1}`;
    setDoc(doc(this.db, `tournaments/${id}`), { ...this.formData, id }, {
      merge: true
    });
  }
  render() {
    var _a, _b, _c, _d;
    return (h("ion-content", null,
      h("ion-grid", null,
        h("ion-row", null,
          h("ion-col", null,
            h("ion-card", null,
              h("ion-list", { class: "ion-no-padding" },
                h("ion-item-divider", null, "Survivors"), (_b = (_a = this.formData) === null || _a === void 0 ? void 0 : _a.survivors) === null || _b === void 0 ? void 0 :
                _b.map(survivor => h("ion-item", null,
                  "BP: ",
                  survivor.bloodpoints))))),
          h("ion-col", null,
            h("ion-card", null,
              h("ion-list", { class: "ion-no-padding" },
                h("ion-item-divider", null, "Killers"), (_d = (_c = this.formData) === null || _c === void 0 ? void 0 : _c.killers) === null || _d === void 0 ? void 0 :
                _d.map(killer => h("ion-item", null,
                  "KP: ",
                  killer.killerpoints))))))),
      h("ion-card", null,
        h("form", null,
          h("ion-list", null,
            h("ion-item", null,
              h("ion-label", { position: "stacked" }, "Tournament Name"),
              h("ion-input", { name: "id" })),
            h("ion-button", { type: "submit" }, "Save"))))));
  }
  static get is() { return "app-admin"; }
  static get originalStyleUrls() { return {
    "$": ["app-admin.css"]
  }; }
  static get styleUrls() { return {
    "$": ["app-admin.css"]
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
      "name": "ionInput",
      "method": "onInput",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "submit",
      "method": "onSubmit",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
