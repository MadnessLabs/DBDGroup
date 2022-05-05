import { r as registerInstance, i as createEvent, h } from './index-6e03bf48.js';

const modalProfileCss = "";

const ModalProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalClose = createEvent(this, "dbdModalClose", 7);
    this.headerTitle = "Edit Profile";
  }
  async onError(event) {
    var _a, _b;
    console.log(event);
    if (((_b = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.code) === "not-found") {
      await this.db.add("users", this.user, this.userId);
    }
  }
  closeModal(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.dbdModalClose.emit();
  }
  render() {
    return (h("ion-content", null, h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { color: "primary", href: "/", onClick: (event) => this.closeModal(event) }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, this.headerTitle))), h("ion-grid", null, h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "12", "size-md": "9" }, h("ion-card", null, h("fireenjin-form", { fetch: true, endpoint: "users", documentId: this.userId, beforeSubmit: async (data) => {
        this.user = data;
        return data;
      }, style: {
        "text-align": "center",
        margin: "0 auto",
      } }, h("fireenjin-input", { "data-fill": true, labelPosition: "stacked", name: "name", label: "Name" }), h("fireenjin-input", { "data-fill": true, labelPosition: "stacked", pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", required: true, name: "email", label: "E-mail" }), h("fireenjin-input", { "data-fill": true, required: true, labelPosition: "stacked", name: "discordId", label: "Discord Username" }), h("fireenjin-input", { "data-fill": true, labelPosition: "stacked", name: "steamId", label: "Steam Code" }))))))));
  }
};
ModalProfile.style = modalProfileCss;

export { ModalProfile as modal_profile };
