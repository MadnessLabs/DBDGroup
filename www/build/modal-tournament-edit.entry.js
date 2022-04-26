import { r as registerInstance, i as createEvent, h } from './index-a091ab89.js';

const modalTournamentEditCss = "";

const ModalTournamentEdit = class {
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
    var _a, _b, _c;
    return [
      h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { color: "primary", href: "/", onClick: (event) => this.closeModal(event) }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Edit Tournament"))),
      h("ion-content", { class: "ion-padding" }, h("ion-card", null, h("fireenjin-form", { endpoint: "tournaments", documentId: this.tournamentId }, h("fireenjin-input", { labelPosition: "stacked", name: "name", label: "Tournament Name", value: (_a = this.tournament) === null || _a === void 0 ? void 0 : _a.name }), h("fireenjin-input", { labelPosition: "stacked", name: "id", label: "id", value: (_b = this.tournament) === null || _b === void 0 ? void 0 : _b.id }), h("fireenjin-select", { labelPosition: "stacked", "data-fill": true, multiple: true, name: "rules", label: "Rules", value: ((_c = this.tournament) === null || _c === void 0 ? void 0 : _c.rules) || [], options: [
          {
            label: "No Items",
            value: "no items",
          },
          {
            label: "No Offerings",
            value: "no offerings",
          },
          {
            label: "No Keys",
            value: "no keys",
          },
          {
            label: "No Iridescent Items",
            value: "no iridescent items",
          },
          {
            label: "Killer Picks Map",
            value: "killer picks map",
          },
          {
            label: "Random Maps",
            value: "random maps",
          },
        ] })))),
    ];
  }
};
ModalTournamentEdit.style = modalTournamentEditCss;

export { ModalTournamentEdit as modal_tournament_edit };
