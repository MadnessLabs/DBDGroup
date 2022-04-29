import { r as registerInstance, h } from './index-6e03bf48.js';

const modalProfileCss = "";

const ModalProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    var _a, _b, _c, _d;
    return (h("ion-content", null, h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-title", null, "Edit Profile"))), h("ion-grid", null, h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "12", "size-md": "9" }, h("ion-card", null, h("fireenjin-form", { endpoint: "users", documentId: this.userId, style: {
        "text-align": "center",
        margin: "0 auto",
      } }, h("fireenjin-input", { "data-fill": true, labelPosition: "stacked", name: "name", label: "Name" }), h("fireenjin-input", { "data-fill": true, labelPosition: "stacked", name: "email", label: "E-mail", value: (_a = this.user) === null || _a === void 0 ? void 0 : _a.email }), h("fireenjin-input", { "data-fill": true, labelPosition: "stacked", name: "discordId", label: "Discord Username", value: (_b = this.user) === null || _b === void 0 ? void 0 : _b.discordId }), h("fireenjin-input", { "data-fill": true, labelPosition: "stacked", name: "steamId", label: "Steam Code", value: (_c = this.user) === null || _c === void 0 ? void 0 : _c.steamId }), h("fireenjin-select", { labelPosition: "stacked", "data-fill": true, name: "enteringAs", label: "Entering as?", value: (_d = this.user) === null || _d === void 0 ? void 0 : _d.enteringAs, options: [
        {
          label: "Survivor",
        },
        {
          label: "Killer",
        },
      ] }))))))));
  }
};
ModalProfile.style = modalProfileCss;

export { ModalProfile as modal_profile };
