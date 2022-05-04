import { r as registerInstance, i as createEvent, h } from './index-6e03bf48.js';

const modalProfileCss = "";

const ModalProfile = class {
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
    return (h("ion-content", null, h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { color: "primary", href: "/", onClick: (event) => this.closeModal(event) }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Edit Profile"))), h("ion-grid", null, h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "12", "size-md": "9" }, h("ion-card", null, h("fireenjin-form", { fetch: true, endpoint: "users", documentId: this.userId, style: {
        "text-align": "center",
        margin: "0 auto",
      } }, h("fireenjin-input", { "data-fill": true, labelPosition: "stacked", name: "name", label: "Name" }), h("fireenjin-input", { "data-fill": true, labelPosition: "stacked", pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", required: true, name: "email", label: "E-mail" }), h("fireenjin-input", { "data-fill": true, required: true, labelPosition: "stacked", name: "discordId", label: "Discord Username" }), h("fireenjin-input", { "data-fill": true, labelPosition: "stacked", name: "steamId", label: "Steam Code" }), h("fireenjin-select", { labelPosition: "stacked", "data-fill": true, required: true, name: "enteringAs", label: "Entering as?", options: [
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
