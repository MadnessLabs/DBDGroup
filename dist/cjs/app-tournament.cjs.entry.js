'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const AppTournament = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dbdModalOpen = index.createEvent(this, "dbdModalOpen", 7);
    this.dbdPopoverOpen = index.createEvent(this, "dbdPopoverOpen", 7);
  }
  async componentDidLoad() {
    this.tournament = (await this.db.find("tournaments", this.tournamentId));
  }
  render() {
    var _a, _b, _c;
    return (index.h(index.Host, null, index.h("ion-header", null, index.h("ion-toolbar", { color: "light" }, index.h("ion-buttons", { slot: "start" }, index.h("ion-button", { href: "/", color: "primary" }, index.h("ion-icon", { name: "arrow-back", color: "primary" }))), index.h("ion-title", { onClick: () => this.dbdModalOpen.emit({
        component: "modal-login",
      }) }, "Tournament Page"))), index.h("ion-content", null, index.h("ion-button", { onClick: () => this.dbdModalOpen.emit({
        component: "modal-tournament-edit",
        componentProps: {
          tournament: this.tournament,
          tournamentId: this.tournamentId,
        },
      }) }, "Edit"), index.h("ion-row", { style: {
        "justify-content": "center",
        padding: "0px",
      } }, index.h("ion-col", { size: "12", "size-md": "4", style: {
        "text-align": "center",
        "border-color": "transparent",
      } }, index.h("h1", { style: {
        "font-family": "sans-serif",
        color: "white",
      } }, index.h("div", { class: "ion-text-center" }, index.h("b", null, "DEAD BY DAYLIGHT TOURNAMENTS"))))), index.h("dbd-tournament-details", { name: (_a = this.tournament) === null || _a === void 0 ? void 0 : _a.name, rules: (_b = this.tournament) === null || _b === void 0 ? void 0 : _b.rules, dateTime: (_c = this.tournament) === null || _c === void 0 ? void 0 : _c.id }), index.h("ion-row", { style: {
        "justify-content": "center",
      } }, index.h("ion-col", { size: "12", "size-md": "9" }, index.h("ion-card", null, index.h("fireenjin-form", { onClick: (event) => this.dbdPopoverOpen.emit({
        component: "modal-login",
        event,
      }), style: {
        "max-width": "750px",
        "text-align": "center",
        margin: "0 auto",
      } }, index.h("ion-label", null, index.h("h1", { style: {
        "text-align": "center",
      } }, "Dead by Daylight Tournament Signup")), index.h("ion-list", null, index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "E-mail"), index.h("ion-input", null)), index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Discord username"), index.h("ion-input", null)), index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Steam code"), index.h("ion-input", { name: "number" })), index.h("ion-item", null, index.h("ion-label", { style: {
        "font-size": "20px",
      }, position: "stacked" }, "Entering as?"), index.h("ion-select", { style: {
        "font-size": "20px",
      }, okText: "Okay", cancelText: "Dismiss", placeholder: "Select one" }, index.h("ion-select-option", { value: "killer" }, "Killer"), index.h("ion-select-option", { value: "survivor" }, "Survivor")))))))))));
  }
};

exports.app_tournament = AppTournament;
