import { r as registerInstance, h } from './index-a091ab89.js';

const modalTournamentDetailCss = "modal-tournament-detail ion-item{text-align:justify;font-size:16px;padding-bottom:10px}";

const ModalTournamentDetail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    var _a;
    return (h("ion-content", null, (((_a = this.tournament) === null || _a === void 0 ? void 0 : _a.rules) || []).map((rule) => (h("ion-item", null, h("ion-thumbnail", { slot: "start", style: {
        height: "25px",
        width: "25px",
      } }, h("img", { src: "./assets/icon/bloodpoint.webp" })), h("ion-label", null, rule))))));
  }
};
ModalTournamentDetail.style = modalTournamentDetailCss;

export { ModalTournamentDetail as modal_tournament_detail };
