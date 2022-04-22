'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const appHomeCss = "app-home ion-card{max-width:600px;margin:30px auto;display:block}";

const AppHome = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dbdModalOpen = index.createEvent(this, "dbdModalOpen", 7);
  }
  async componentDidLoad() {
    this.tournaments = await this.db.list("tournaments", []);
    // this.auth.withSocial("google");
  }
  render() {
    return (index.h("ion-content", null, index.h("ion-grid", null, index.h("ion-row", null, (this.tournaments || []).map((tournament) => (index.h("ion-col", { size: "12", "size-md": "6" }, index.h("dbd-tournament-card", { href: `/tournament/${tournament === null || tournament === void 0 ? void 0 : tournament.id}`, image: tournament.image, name: tournament.name || "ope", rules: tournament.rules })))))), index.h("ion-card", null, index.h("img", { src: "./assets/icon/icon.png" }), index.h("ion-card-header", null, index.h("ion-card-subtitle", null, "DeadByDaylight.Group"), index.h("ion-card-title", null, "Stick together, stay alive.")), index.h("ion-card-content", null, "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.")), index.h("fireenjin-pagination", { endpoint: "tournaments", listEl: (tournament) => (index.h("ion-card", null, index.h("img", { src: "./assets/icon/icon.png" }), index.h("ion-card-header", null, index.h("ion-card-subtitle", null, tournament === null || tournament === void 0 ? void 0 : tournament.date), index.h("ion-card-title", null, (tournament === null || tournament === void 0 ? void 0 : tournament.name) || "No Tournament Name")), index.h("ion-card-content", null, "Enter HERE"))) }), index.h("ion-card", null, index.h("img", { src: "./assets/icon/icon.png" }), index.h("ion-card-header", null, index.h("ion-card-subtitle", null, "Testing Tourney"), index.h("ion-card-title", null, "Tournament")), index.h("ion-card-content", null, "Enter HERE", index.h("ion-button", { href: "/tournament/test" }, "ENTER NOW")))));
  }
};
AppHome.style = appHomeCss;

exports.app_home = AppHome;
