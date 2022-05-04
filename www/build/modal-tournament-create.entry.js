import { r as registerInstance, i as createEvent, h } from './index-6e03bf48.js';

const modalTournamentCreateCss = "";

const ModalTournamentCreate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalClose = createEvent(this, "dbdModalClose", 7);
  }
  onSucess() {
    this.dbdModalClose.emit();
  }
  closeModal(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.dbdModalClose.emit();
  }
  render() {
    return (h("ion-content", null, h("fireenjin-form", { endpoint: "tournaments" }, h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { color: "primary", href: "/", onClick: (event) => this.closeModal(event) }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Create Tournament"))), h("fireenjin-input", { labelPosition: "stacked", name: "id", label: "Tournament ID" }), h("fireenjin-input", { labelPosition: "stacked", name: "name", label: "Tournament Name" }))));
  }
};
ModalTournamentCreate.style = modalTournamentCreateCss;

export { ModalTournamentCreate as modal_tournament_create };
