import { r as registerInstance, i as createEvent, h, o as Host } from './index-6e03bf48.js';
import { s as state } from './store-521aeb0c.js';

const appTournamentCss = "";

const AppTournament = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalOpen = createEvent(this, "dbdModalOpen", 7);
    this.dbdPopoverOpen = createEvent(this, "dbdPopoverOpen", 7);
  }
  async componentDidLoad() {
    this.users = await this.db.list("users", []);
    console.log(this.users, "here");
    this.db.watchDocument("tournaments", this.tournamentId, ({ data }) => {
      console.log(data);
      this.tournament = data;
    });
  }
  async enterTournament(type) {
    var _a, _b, _c;
    if ((_a = state === null || state === void 0 ? void 0 : state.session) === null || _a === void 0 ? void 0 : _a.uid) {
      const killers = ((_b = this.tournament) === null || _b === void 0 ? void 0 : _b.killers) || [];
      const survivors = ((_c = this.tournament) === null || _c === void 0 ? void 0 : _c.survivors) || [];
      if (type === "survivor") {
        survivors.push({
          user: null,
        });
      }
      else {
        killers.push({
          user: null,
        });
      }
      this.tournament = { ...this.tournament, killers, survivors };
      await this.db.update("tournaments", this.tournamentId, this.tournament);
      console.log(this.tournament, killers);
    }
    else {
      this.dbdModalOpen.emit({
        component: "modal-profile",
        componentProps: {
          headerTitle: type === "survivor" ? "Enter as Survivor" : "Enter as Killer",
        },
      });
    }
  }
  render() {
    var _a, _b, _c, _d;
    return (h(Host, null, h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { href: "/", color: "primary" }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Tournament Page"), h("ion-buttons", { slot: "end" }, ((_a = state === null || state === void 0 ? void 0 : state.claims) === null || _a === void 0 ? void 0 : _a.admin) && (h("ion-button", { color: "primary", onClick: () => this.dbdModalOpen.emit({
        component: "modal-tournament-edit",
        componentProps: {
          tournament: this.tournament,
          tournamentId: this.tournamentId,
        },
      }) }, "Edit", h("ion-icon", { slot: "end", name: "create" })))))), h("ion-content", null, h("ion-row", { style: {
        "justify-content": "center",
        padding: "0px",
      } }, h("ion-col", { size: "12", "size-md": "4", style: {
        "text-align": "center",
      } }, h("h1", null, "DEAD BY DAYLIGHT TOURNAMENTS"))), h("dbd-tournament-details", { name: (_b = this.tournament) === null || _b === void 0 ? void 0 : _b.name, rules: (_c = this.tournament) === null || _c === void 0 ? void 0 : _c.rules, dateTime: (_d = this.tournament) === null || _d === void 0 ? void 0 : _d.id, tournamentId: this.tournamentId, tournament: this.tournament }), h("ion-grid", null, h("ion-row", null, h("ion-col", { size: "6" }, h("ion-button", { expand: "block", onClick: () => this.enterTournament("survivor") }, "Enter as Survivor")), h("ion-col", { size: "6" }, h("ion-button", { expand: "block", fill: "outline", onClick: () => this.enterTournament("killer") }, "Enter as Killer")))), h("ion-grid", null, h("ion-row", null, h("ion-card", { color: "tertiary" }, h("ion-item", null, "Game 1"))), h("ion-row", null, h("ion-col", null, h("ion-card", null, h("ion-item", null, "Survivor"))), h("ion-col", null, h("ion-card", null, h("ion-item", null, "Killer")))), h("ion-row", null, h("ion-col", null, h("ion-card", null, h("ion-item", null, "S1B"))), h("ion-col", null, h("ion-card", null, h("ion-item", null, "Kills")))), h("ion-row", null, h("ion-col", null, h("ion-card", null, h("ion-item", null, "S2B"))), h("ion-col", null, h("ion-card", null, h("ion-item", null, "Total Hooks")))), h("ion-row", null, h("ion-col", null, h("ion-card", null, h("ion-item", null, "S3B"))), h("ion-col", null, h("ion-card", null, h("ion-item", null, "Generators Left")))), h("ion-row", null, h("ion-col", null, h("ion-card", null, h("ion-item", null, "S4B"))), h("ion-col", null, h("ion-card", null, h("ion-item", null, "Escapes"))))))));
  }
};
AppTournament.style = appTournamentCss;

export { AppTournament as app_tournament };
