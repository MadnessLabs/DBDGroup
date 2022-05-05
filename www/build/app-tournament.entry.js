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
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
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
      } }, h("h1", null, "DEAD BY DAYLIGHT TOURNAMENTS"))), h("dbd-tournament-details", { name: (_b = this.tournament) === null || _b === void 0 ? void 0 : _b.name, rules: (_c = this.tournament) === null || _c === void 0 ? void 0 : _c.rules, dateTime: (_d = this.tournament) === null || _d === void 0 ? void 0 : _d.id, tournamentId: this.tournamentId, tournament: this.tournament }), h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "12", "size-md": "9" }, h("ion-card", null, h("fireenjin-form", { endpoint: "users", documentId: this.userId, style: {
        "text-align": "center",
        margin: "0 auto",
      } }, h("ion-title", null, "Dead by Daylight Tournament Signup"), h("fireenjin-input", { labelPosition: "stacked", name: "name", label: "Name", value: (_e = this.users) === null || _e === void 0 ? void 0 : _e.name }), h("fireenjin-input", { labelPosition: "stacked", name: "email", label: "E-mail", value: (_f = this.users) === null || _f === void 0 ? void 0 : _f.email }), h("fireenjin-input", { labelPosition: "stacked", name: "discordId", label: "Discord Username", value: (_g = this.users) === null || _g === void 0 ? void 0 : _g.discordId }), h("fireenjin-input", { labelPosition: "stacked", name: "steamId", label: "Steam Code", value: (_h = this.users) === null || _h === void 0 ? void 0 : _h.steamId }), h("fireenjin-select", { labelPosition: "stacked", "data-fill": true, name: "enteringAs", label: "Entering as?", value: (_j = this.users) === null || _j === void 0 ? void 0 : _j.enteringAs, options: [
        {
          label: "Survivor",
        },
        {
          label: "Killer",
        },
      ] }))))))));
  }
};
AppTournament.style = appTournamentCss;

export { AppTournament as app_tournament };
