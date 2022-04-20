import { r as registerInstance, h, m as Host } from './index-0fc14935.js';
import './index.esm-6f00acbe.js';
import { e as el, T as Tc } from './index.esm2017-5b1fb817.js';
import './process-es6-6fcfb3fc.js';
import './global-e1c7e609.js';

let AppTournament = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentDidLoad() {
    const query = await el(Tc(this.db, `tournaments/${this.tournamentId}`));
    this.tournament = query.data();
  }
  render() {
    return (h(Host, null, h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { href: "/", color: "primary" }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Tournament Page"))), h("ion-content", null, h("ion-row", { style: {
        "justify-content": "center",
        padding: "0px",
      } }, h("ion-col", { size: "12", "size-md": "4", style: {
        "text-align": "center",
        "border-color": "transparent",
      } }, h("h1", { style: {
        "font-family": "sans-serif",
        color: "white",
      } }, h("div", { class: "ion-text-center" }, h("b", null, "DEAD BY DAYLIGHT TOURNAMENTS"))))), h("dbd-tournament-details", null), h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "12", "size-md": "9" }, h("ion-card", null, h("fireenjin-form", { style: {
        "max-width": "750px",
        "text-align": "center",
        margin: "0 auto",
      } }, h("ion-label", null, h("h1", { style: {
        "text-align": "center",
      } }, "Dead by Daylight Tournament Signup")), h("ion-list", null, h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "E-mail"), h("ion-input", null)), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Discord username"), h("ion-input", null)), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Steam code"), h("ion-input", { name: "number" })), h("ion-item", null, h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Entering as?"), h("ion-select", { style: {
        "font-size": "20px",
      }, okText: "Okay", cancelText: "Dismiss", placeholder: "Select one" }, h("ion-select-option", { value: "killer" }, "Killer"), h("ion-select-option", { value: "survivor" }, "Survivor")))))))))));
  }
};

export { AppTournament as app_tournament };
