import { r as registerInstance, h } from './index-bac865b7.js';
import './index.esm-a25bb2b3.js';
import { j as jh, i as ia } from './index.esm2017-e414a212.js';
import './process-es6-6fcfb3fc.js';
import './global-e1c7e609.js';

const appAdminCss = "";

let AppAdmin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    jh(ia(this.db, `tournaments/${id}`), { ...this.formData, id }, {
      merge: true
    });
  }
  render() {
    var _a, _b, _c, _d;
    return (h("ion-content", null, h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("ion-card", null, h("ion-list", { class: "ion-no-padding" }, h("ion-item-divider", null, "Survivors"), (_b = (_a = this.formData) === null || _a === void 0 ? void 0 : _a.survivors) === null || _b === void 0 ? void 0 :
      _b.map(survivor => h("ion-item", null, "BP: ", survivor.bloodpoints))))), h("ion-col", null, h("ion-card", null, h("ion-list", { class: "ion-no-padding" }, h("ion-item-divider", null, "Killers"), (_d = (_c = this.formData) === null || _c === void 0 ? void 0 : _c.killers) === null || _d === void 0 ? void 0 :
      _d.map(killer => h("ion-item", null, "KP: ", killer.killerpoints))))))), h("ion-card", null, h("form", null, h("ion-list", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Tournament Name"), h("ion-input", { name: "id" })), h("ion-button", { type: "submit" }, "Save"))))));
  }
};
AppAdmin.style = appAdminCss;

export { AppAdmin as app_admin };
