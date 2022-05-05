import { r as registerInstance, i as createEvent, h } from './index-6e03bf48.js';

const dbdTournamentDetailsCss = "";

const DbdTournamentDetails = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalOpen = createEvent(this, "dbdModalOpen", 7);
    this.fireenjinShare = createEvent(this, "fireenjinShare", 7);
    this.image = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  }
  // @Prop() component: string;
  // @Prop() componentProps?: any;
  // @Prop() cssClass?: string;
  // @Prop() paginationEl: HTMLFireenjinPaginationElement;
  // @Prop() endpoint: string;
  // @Prop() limit: number;
  // @Prop() query: string;
  render() {
    var _a;
    return (h("div", null, h("ion-card", null, h("ion-item", null, h("ion-thumbnail", { slot: "start", style: {
        height: "80px",
        width: "100px",
      } }, h("img", { src: this.image })), h("ion-label", null, h("h2", null, this.name), h("h2", null, this.dateTime), h("ion-button", { onClick: () => this.dbdModalOpen.emit({
        component: "modal-tournament-detail",
        componentProps: {
          tournament: this.tournament,
          tournamentId: this.tournamentId,
        },
      }) }, "Tournament Details")), h("ion-buttons", { slot: "end" }, h("ion-button", { onClick: () => {
        var _a, _b;
        return this.fireenjinShare.emit({
          data: {
            url: ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.href) ||
              "https://deadbydaylight.group",
            text: `I entered a DBD tourney called ${((_b = this.tournament) === null || _b === void 0 ? void 0 : _b.name) || "unknown"} on a new app. Enter with the link so we can play together.`,
            title: `Enter this DBD tourney with me.`,
          },
        });
      } }, "Share")))), h("ion-row", { style: {
        "flex-wrap": "wrap-reverse",
      } }, h("ion-col", { size: "12", "size-md": "6" }, h("ion-card", null, (((_a = this.tournament) === null || _a === void 0 ? void 0 : _a.survivors) || []).map((survivor) => (h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, (survivor === null || survivor === void 0 ? void 0 : survivor.name) || "No name given")))), h("ion-item", null, h("ion-label", null, h("h2", null, "Searching for Survivors..."))))), h("ion-col", { size: "12", "size-md": "6" }, h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "KILLER")))))));
  }
};
DbdTournamentDetails.style = dbdTournamentDetailsCss;

export { DbdTournamentDetails as dbd_tournament_details };
