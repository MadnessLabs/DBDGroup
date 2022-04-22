'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const modalTournamentEditCss = "";

const ModalTournamentEdit = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ion-content", null, index.h("fireenjin-form", { fetch: true, endpoint: "tournaments", documentId: this.tournamentId }, index.h("fireenjin-input", { labelPosition: "stacked", "data-fill": true, name: "name", label: "Tournament Name" }), index.h("fireenjin-select", { labelPosition: "stacked", "data-fill": true, multiple: true, name: "rules", label: "Rules", options: [
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

exports.modal_tournament_edit = ModalTournamentEdit;
