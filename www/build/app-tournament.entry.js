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
    return (h(Host, null, h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-button", { href: "/", color: "primary" }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Tournament Page"))), h("ion-content", null, h("ion-row", { style: {
        "justify-content": "center",
        padding: "0px",
      } }, h("ion-col", { size: "12", "size-md": "4", style: {
        "text-align": "center",
        "border-color": "transparent",
      } }, h("ion-card", { style: {
        opacity: ".6",
      } }, h("h1", { style: {
        "font-family": "sans-serif",
        color: "white",
      } }, h("div", { class: "ion-text-center" }, h("b", null, "DEAD BY DAYLIGHT TOURNAMENTS")))))), h("ion-card", null, h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "4", "size-md": "" }, h("ion-item", null, h("ion-thumbnail", { slot: "start", style: {
        height: "90px",
        width: "110px",
      } }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })))), h("ion-col", { size: "7", "size-md": "" }, h("ion-card-title", null, " Tournament Title "), h("ion-card-content", null, " Date and Time "), h("ion-card-content", null, " TLDR Tourney Rules ")), h("ion-col", { size: "1", "size-md": "" }, h("a", { href: "http://localhost:3333/tournament" }, h("ion-icon", { name: "chevron-forward-outline" }))))), h("dbd-tournament-details", null), h("ion-row", { style: {
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
