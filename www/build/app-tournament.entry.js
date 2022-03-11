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
    return (h("ion-content", null, "The tournament is on ", this.tournamentId, h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("ion-card", null, h("ion-list", { class: "ion-no-padding" }, h("ion-item-divider", { style: {
        "text-align": "center",
        "font-size": "30px",
      }, color: "success" }, "Survivor"), (_b = (_a = this.tournament) === null || _a === void 0 ? void 0 : _a.survivors) === null || _b === void 0 ? void 0 :
      _b.map((survivor) => (h("ion-item", null, "BP: ", survivor.bloodpoints)))))), h("ion-col", null, h("ion-card", null, h("ion-list", { class: "ion-no-padding" }, h("ion-item-divider", { style: {
        "text-align": "center",
        "font-size": "30px",
      }, color: "danger" }, "Killer"), (_d = (_c = this.tournament) === null || _c === void 0 ? void 0 : _c.killers) === null || _d === void 0 ? void 0 :
      _d.map((killer) => (h("ion-item", null, "KP: ", killer.killerpoints))))))), h("ion-card", null, h("h1", { style: {
        "text-align": "center",
      } }, "Dead by Daylight Tournament Signup")), h("fireenjin-form", { style: {
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
      }, okText: "Okay", cancelText: "Dismiss" }, h("ion-select-option", { value: "killer" }, "killer"), h("ion-select-option", { value: "survivor" }, "survivor"), "/")), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Skill Level"), h("ion-select", { name: "skill", okText: "Okay", cancelText: "Dismiss" }, h("ion-select-option", { value: "noob" }, "Noob"), h("ion-select-option", { value: "casual" }, "Casual"), h("ion-select-option", { value: "pro" }, "Pro"), "/")), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Available"), h("ion-select", { okText: "Okay", cancelText: "Dismiss" }, h("ion-select-option", null, "Saturday"), h("ion-select-option", null, "Sunday"), h("ion-select-option", null, "Both"), "/")))))));
  }
};

export { AppTournament as app_tournament };
