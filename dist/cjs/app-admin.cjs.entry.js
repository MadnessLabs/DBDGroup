'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');
const index_esm2017 = require('./index.esm2017-d58aff36.js');
require('./process-es6-39ef8921.js');
require('./global-9027a413.js');

const appAdminCss = "";

const AppAdmin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.formData = {
      survivors: [],
      killers: [],
    };
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  onSubmit() {
    var _a;
    const timestamp = new Date();
    const id = ((_a = this.formData) === null || _a === void 0 ? void 0 : _a.id) ||
      `${timestamp.getFullYear()}-${timestamp.getMonth() + 1}`;
    index_esm2017.al(index_esm2017.Tc(this.db, `tournaments/${id}`), { ...this.formData, id }, {
      merge: true,
    });
  }
  render() {
    var _a, _b, _c, _d;
    return (index.h("ion-content", null, index.h("ion-grid", null, index.h("ion-row", { style: {
        "justify-content": "center",
      } }, index.h("ion-col", { size: "8", "size-md": "2" }, index.h("ion-accordion-group", null, index.h("ion-accordion", { "toggle-icon": "arrow-down-circle" }, index.h("ion-item", { style: {
        "text-align": "center",
      }, slot: "header" }, index.h("ion-label", null, "Links")), index.h("ion-list", { slot: "content" }, index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/tournament" }, "Tournament sign-up")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/list" }, "Tournament List")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/profile" }, "Profile")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/admin" }, "Admin")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group" }, "Home"))))))), index.h("ion-row", null, index.h("ion-col", null, index.h("ion-card", null, index.h("ion-list", { class: "ion-no-padding" }, index.h("ion-item-divider", null, "Survivors"), (_b = (_a = this.formData) === null || _a === void 0 ? void 0 : _a.survivors) === null || _b === void 0 ? void 0 :
      _b.map((survivor) => (index.h("ion-item", null, "BP: ", survivor.bloodpoints)))))), index.h("ion-col", null, index.h("ion-card", null, index.h("ion-list", { class: "ion-no-padding" }, index.h("ion-item-divider", null, "Killers"), (_d = (_c = this.formData) === null || _c === void 0 ? void 0 : _c.killers) === null || _d === void 0 ? void 0 :
      _d.map((killer) => (index.h("ion-item", null, "KP: ", killer.killerpoints)))))))), index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", null, index.h("fireenjin-form", { style: {
        "max-width": "700px",
        "background-color": "var(--ion-item-background",
        "text-align": "center",
        margin: "0 auto",
      } }, index.h("ion-list", null, index.h("ion-item", null, index.h("ion-label", { position: "stacked" }, "Tournament Name"), index.h("ion-input", { name: "id" })), index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Days"), index.h("ion-select", { name: "Days", okText: "Okay", cancelText: "Dismiss" }, index.h("ion-select-option", { value: "Saturday" }, "Saturday"), index.h("ion-select-option", { value: "Sunday" }, "Sunday"), index.h("ion-select-option", { value: "Both" }, "Both"), "/")), index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Items"), index.h("ion-select", { name: "Items", okText: "Okay", cancelText: "Dismiss" }, index.h("ion-select-option", { value: "" }))), index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Perks"), index.h("ion-select", { name: "Perks", okText: "Okay", cancelText: "Dismiss" }, index.h("ion-select-option", { value: "" }))), index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Maps"), index.h("ion-select", { name: "Maps", okText: "Okay", cancelText: "Dismiss" }, index.h("ion-select-option", { value: "" }))), index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Survivors"), index.h("ion-input", { type: "number", value: "8" })), index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Killers"), index.h("ion-input", { type: "number", value: "2" })))))))));
  }
};
AppAdmin.style = appAdminCss;

exports.app_admin = AppAdmin;
