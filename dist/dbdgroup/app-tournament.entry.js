import { r as registerInstance, h } from './index-bac865b7.js';
import './index.esm-a25bb2b3.js';
import { F as Fh, i as ia } from './index.esm2017-e414a212.js';
import './process-es6-6fcfb3fc.js';
import './global-e1c7e609.js';

let AppTournament = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentDidLoad() {
    const query = await Fh(ia(this.db, `tournaments/${this.tournamentId}`));
    this.tournament = query.data();
  }
  render() {
    var _a, _b, _c, _d;
    return (h("ion-content", null, "The tournament is on ", this.tournamentId, h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("ion-card", null, h("ion-list", { class: "ion-no-padding" }, h("ion-item-divider", null, "Survivors"), (_b = (_a = this.tournament) === null || _a === void 0 ? void 0 : _a.survivors) === null || _b === void 0 ? void 0 :
      _b.map(survivor => h("ion-item", null, "BP: ", survivor.bloodpoints))))), h("ion-col", null, h("ion-card", null, h("ion-list", { class: "ion-no-padding" }, h("ion-item-divider", null, "Killers"), (_d = (_c = this.tournament) === null || _c === void 0 ? void 0 : _c.killers) === null || _d === void 0 ? void 0 :
      _d.map(killer => h("ion-item", null, "KP: ", killer.killerpoints))))))), h("ion-card", null, h("form", null, h("h1", null, "Tournament Signup"), h("ion-list", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Tournament Name"), h("ion-input", { name: "id" })), h("ion-button", { type: "submit" }, "Save"))))));
  }
};

export { AppTournament as app_tournament };
