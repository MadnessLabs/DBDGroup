import { r as registerInstance, i as createEvent, h } from './index-6e03bf48.js';

const ModalSignup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalClose = createEvent(this, "dbdModalClose", 7);
  }
  closeModal(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.dbdModalClose.emit();
  }
  render() {
    var _a, _b, _c, _d;
    return [
      h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { color: "primary", href: "/", onClick: (event) => this.closeModal(event) }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Sign Up"))),
      h("ion-content", { class: "ion-padding" }, h("fireenjin-form", { endpoint: "users", documentId: this.userId, style: {
          "text-align": "center",
          margin: "0 auto",
        } }, h("ion-title", null, "Dead by Daylight Tournament Signup"), h("fireenjin-input", { labelPosition: "stacked", name: "name", label: "Name", value: (_a = this.user) === null || _a === void 0 ? void 0 : _a.name }), h("fireenjin-input", { labelPosition: "stacked", name: "email", label: "E-mail", value: (_b = this.user) === null || _b === void 0 ? void 0 : _b.email }), h("fireenjin-input", { labelPosition: "stacked", name: "discordId", label: "Discord Username", value: (_c = this.user) === null || _c === void 0 ? void 0 : _c.discordId }), h("fireenjin-input", { labelPosition: "stacked", name: "steamId", label: "Steam Code", value: (_d = this.user) === null || _d === void 0 ? void 0 : _d.steamId }))),
    ];
  }
};

export { ModalSignup as modal_signup };
