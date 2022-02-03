'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e14d11a5.js');
const index_esm2017 = require('./index.esm2017-905605db.js');

const appAdminCss = "";

let AppAdmin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    index_esm2017.yh(index_esm2017.Ca(this.db, `tournaments/${id}`), { ...this.formData, id }, {
      merge: true
    });
  }
  render() {
    var _a, _b, _c, _d;
    return (index.h("ion-content", null, index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", null, index.h("ion-card", null, index.h("ion-list", { class: "ion-no-padding" }, index.h("ion-item-divider", null, "Survivors"), (_b = (_a = this.formData) === null || _a === void 0 ? void 0 : _a.survivors) === null || _b === void 0 ? void 0 :
      _b.map(survivor => index.h("ion-item", null, "BP: ", survivor.bloodpoints))))), index.h("ion-col", null, index.h("ion-card", null, index.h("ion-list", { class: "ion-no-padding" }, index.h("ion-item-divider", null, "Killers"), (_d = (_c = this.formData) === null || _c === void 0 ? void 0 : _c.killers) === null || _d === void 0 ? void 0 :
      _d.map(killer => index.h("ion-item", null, "KP: ", killer.killerpoints))))))), index.h("ion-card", null, index.h("form", null, index.h("ion-list", null, index.h("ion-item", null, index.h("ion-label", { position: "stacked" }, "Tournament Name"), index.h("ion-input", { name: "id" })), index.h("ion-button", { type: "submit" }, "Save"))))));
  }
};
AppAdmin.style = appAdminCss;

exports.app_admin = AppAdmin;
