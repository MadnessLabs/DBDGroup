import { r as registerInstance, i as createEvent, h, m as Host } from './index-a091ab89.js';

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
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (h(Host, null, h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { href: "/", color: "primary" }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Tournament Page"), h("ion-buttons", { slot: "end" }, h("ion-button", { color: "primary", onClick: () => this.dbdModalOpen.emit({
        component: "modal-tournament-edit",
        componentProps: {
          tournament: this.tournament,
          tournamentId: this.tournamentId,
        },
      }) }, "Edit", h("ion-icon", { slot: "end", name: "create" }))))), h("ion-content", null, h("ion-row", { style: {
        "justify-content": "center",
        padding: "0px",
      } }, h("ion-col", { size: "12", "size-md": "4", style: {
        "text-align": "center",
      } }, h("h1", null, "DEAD BY DAYLIGHT TOURNAMENTS"))), h("dbd-tournament-details", { name: (_a = this.tournament) === null || _a === void 0 ? void 0 : _a.name, rules: (_b = this.tournament) === null || _b === void 0 ? void 0 : _b.rules, dateTime: (_c = this.tournament) === null || _c === void 0 ? void 0 : _c.id, tournamentId: this.tournamentId, tournament: this.tournament }), h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "12", "size-md": "9" }, h("ion-card", null, h("fireenjin-form", { endpoint: "users", documentId: "userId", style: {
        "text-align": "center",
        margin: "0 auto",
      } }, h("ion-title", null, "Dead by Daylight Tournament Signup"), h("fireenjin-input", { labelPosition: "stacked", name: "name", label: "Name", value: (_d = this.users) === null || _d === void 0 ? void 0 : _d.name }), h("fireenjin-input", { labelPosition: "stacked", name: "email", label: "E-mail", value: (_e = this.users) === null || _e === void 0 ? void 0 : _e.email }), h("fireenjin-input", { labelPosition: "stacked", name: "discordId", label: "Discord Username", value: (_f = this.users) === null || _f === void 0 ? void 0 : _f.discordId }), h("fireenjin-input", { labelPosition: "stacked", name: "steamId", label: "Steam Code", value: (_g = this.users) === null || _g === void 0 ? void 0 : _g.steamId }), h("fireenjin-select", { labelPosition: "stacked", "data-fill": true, name: "enteringAs", label: "Entering as?", value: (_h = this.users) === null || _h === void 0 ? void 0 : _h.enteringAs, options: [
        {
          label: "Survivor",
          value: "enteringAs",
        },
        {
          label: "Killer",
          value: "enteringAs",
        },
      ] }))))))));
  }
};
AppTournament.style = appTournamentCss;

export { AppTournament as app_tournament };
