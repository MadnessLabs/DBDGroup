import { r as registerInstance, h, m as Host } from './index-0fc14935.js';
import './index.esm-7f18c43a.js';
import { Y as Yh, g as gc } from './index.esm2017-64852796.js';
import './process-es6-6fcfb3fc.js';
import './global-e1c7e609.js';

let AppTournament = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentDidLoad() {
    const query = await Yh(gc(this.db, `tournaments/${this.tournamentId}`));
    this.tournament = query.data();
  }
  render() {
    var _a, _b, _c, _d;
    return (h(Host, null, h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-button", { href: "/", color: "primary" }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Tournament Page"))), h("ion-content", null, h("dbd-tournament-details", null), "The tournament is on ", this.tournamentId, h("ion-card", null, h("ion-list", { class: "ion-no-padding" }, h("ion-item-divider", { style: {
        "text-align": "center",
        "font-size": "30px",
      }, color: "success" }, "Survivor"), (_b = (_a = this.tournament) === null || _a === void 0 ? void 0 : _a.survivors) === null || _b === void 0 ? void 0 :
      _b.map((survivor) => (h("ion-item", null, "BP: ", survivor.bloodpoints)))), h("ion-list", { class: "ion-no-padding" }, h("ion-item-divider", { style: {
        "text-align": "center",
        "font-size": "30px",
      }, color: "danger" }, "Killer"), (_d = (_c = this.tournament) === null || _c === void 0 ? void 0 : _c.killers) === null || _d === void 0 ? void 0 :
      _d.map((killer) => (h("ion-item", null, "KP: ", killer.killerpoints)))), h("h1", { style: {
        "text-align": "center",
      } }, "Dead by Daylight Tournament Signup"), h("fireenjin-form", { style: {
        "max-width": "700px",
        "background-color": "var(--ion-item-background",
        "text-align": "center",
        margin: "0 auto",
      } }, h("ion-list", null, h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Tournament Name"), h("ion-input", { name: "id" })), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "E-mail"), h("ion-input", null)), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Discord username"), h("ion-input", null)), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Steam code"), h("ion-input", { name: "number" })), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Entering as?"), h("ion-select", { style: {
        "font-size": "20px",
      }, okText: "Okay", cancelText: "Dismiss" }, h("ion-select-option", { value: "killer" }, "killer"), h("ion-select-option", { value: "survivor" }, "survivor")))))))));
  }
};

export { AppTournament as app_tournament };
