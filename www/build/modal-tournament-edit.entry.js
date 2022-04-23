import { r as registerInstance, h } from './index-0fc14935.js';

const modalTournamentEditCss = "";

let ModalTournamentEdit = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-content", null, h("fireenjin-form", { fetch: true, endpoint: "tournaments", documentId: this.tournamentId }, h("fireenjin-input", { labelPosition: "stacked", "data-fill": true, name: "name", label: "Tournament Name" }), h("fireenjin-select", { labelPosition: "stacked", "data-fill": true, multiple: true, name: "rules", label: "Rules", options: [
        {
          label: "No Items",
          value: "no items",
        },
        {
          label: "No Offerings",
          value: "no offerings",
        },
      ] }))));
  }
};
ModalTournamentEdit.style = modalTournamentEditCss;

export { ModalTournamentEdit as modal_tournament_edit };
