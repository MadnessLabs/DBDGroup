import { r as registerInstance, h } from './index-a091ab89.js';

const AppProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    var _a, _b, _c, _d, _e;
    return (h("ion-content", null, h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { href: "/", color: "primary" }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Edit Profile"))), h("ion-grid", null, h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "12", "size-md": "9" }, h("ion-card", null, h("fireenjin-form", { endpoint: "", documentId: "", style: {
        "text-align": "center",
        margin: "0 auto",
      } }, h("fireenjin-input", { labelPosition: "stacked", name: "name", label: "Name", value: (_a = this.user) === null || _a === void 0 ? void 0 : _a.name }), h("fireenjin-input", { labelPosition: "stacked", name: "email", label: "E-mail", value: (_b = this.user) === null || _b === void 0 ? void 0 : _b.email }), h("fireenjin-input", { labelPosition: "stacked", name: "discordId", label: "Discord Username", value: (_c = this.user) === null || _c === void 0 ? void 0 : _c.discordId }), h("fireenjin-input", { labelPosition: "stacked", name: "steamId", label: "Steam Code", value: (_d = this.user) === null || _d === void 0 ? void 0 : _d.steamId }), h("fireenjin-select", { labelPosition: "stacked", "data-fill": true, name: "enteringAs", label: "Entering as?", value: (_e = this.user) === null || _e === void 0 ? void 0 : _e.enteringAs, options: [
        {
          label: "Survivor",
          value: "enteringAs",
        },
        {
          label: "Killer",
          value: "enteringAs",
        },
      ] }))))))));
  }
};

export { AppProfile as app_profile };
