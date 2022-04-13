import { r as registerInstance, h } from './index-0fc14935.js';
import './index.esm-7f18c43a.js';
import { i as il, g as gc } from './index.esm2017-64852796.js';
import './process-es6-6fcfb3fc.js';
import './global-e1c7e609.js';

const appAdminCss = "";

let AppAdmin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    il(gc(this.db, `tournaments/${id}`), { ...this.formData, id }, {
      merge: true,
    });
  }
  render() {
    var _a, _b, _c, _d;
    return (h("ion-content", null, h("ion-grid", null, h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "8", "size-md": "2" }, h("ion-accordion-group", null, h("ion-accordion", { "toggle-icon": "arrow-down-circle" }, h("ion-item", { style: {
        "text-align": "center",
      }, slot: "header" }, h("ion-label", null, "Links")), h("ion-list", { slot: "content" }, h("ion-item", null, h("a", { href: "https://deadbydaylight.group/tournament" }, "Tournament sign-up")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/list" }, "Tournament List")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/profile" }, "Profile")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/admin" }, "Admin")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group" }, "Home"))))))), h("ion-row", null, h("ion-col", null, h("ion-card", null, h("ion-list", { class: "ion-no-padding" }, h("ion-item-divider", null, "Survivors"), (_b = (_a = this.formData) === null || _a === void 0 ? void 0 : _a.survivors) === null || _b === void 0 ? void 0 :
      _b.map((survivor) => (h("ion-item", null, "BP: ", survivor.bloodpoints)))))), h("ion-col", null, h("ion-card", null, h("ion-list", { class: "ion-no-padding" }, h("ion-item-divider", null, "Killers"), (_d = (_c = this.formData) === null || _c === void 0 ? void 0 : _c.killers) === null || _d === void 0 ? void 0 :
      _d.map((killer) => (h("ion-item", null, "KP: ", killer.killerpoints)))))))), h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("fireenjin-form", { style: {
        "max-width": "700px",
        "background-color": "var(--ion-item-background",
        "text-align": "center",
        margin: "0 auto",
      } }, h("ion-list", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Tournament Name"), h("ion-input", { name: "id" })), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Days"), h("ion-select", { name: "Days", okText: "Okay", cancelText: "Dismiss" }, h("ion-select-option", { value: "Saturday" }, "Saturday"), h("ion-select-option", { value: "Sunday" }, "Sunday"), h("ion-select-option", { value: "Both" }, "Both"), "/")), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Items"), h("ion-select", { name: "Items", okText: "Okay", cancelText: "Dismiss" }, h("ion-select-option", { value: "" }))), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Perks"), h("ion-select", { name: "Perks", okText: "Okay", cancelText: "Dismiss" }, h("ion-select-option", { value: "" }))), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Maps"), h("ion-select", { name: "Maps", okText: "Okay", cancelText: "Dismiss" }, h("ion-select-option", { value: "" }))), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Survivors"), h("ion-input", { type: "number", value: "8" })), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Killers"), h("ion-input", { type: "number", value: "2" })))))))));
  }
};
AppAdmin.style = appAdminCss;

export { AppAdmin as app_admin };
