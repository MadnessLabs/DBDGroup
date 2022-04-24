import { r as registerInstance, i as createEvent, h } from './index-a091ab89.js';

const modalTournamentDetailCss = "modal-tournament-detail ion-item{text-align:justify;font-size:16px;padding-bottom:10px}";

const ModalTournamentDetail = class {
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
    var _a;
    return (h("ion-content", null, h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { href: "/", onClick: (event) => this.closeModal(event), color: "primary" }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Tournament Rules"))), (((_a = this.tournament) === null || _a === void 0 ? void 0 : _a.rules) || []).map((rule) => (h("ion-item", null, h("ion-thumbnail", { slot: "start", style: {
        height: "25px",
        width: "25px",
      } }, h("img", { src: "/assets/icon/bloodpoint.png" })), h("ion-label", null, rule))))));
  }
};
ModalTournamentDetail.style = modalTournamentDetailCss;

export { ModalTournamentDetail as modal_tournament_detail };
