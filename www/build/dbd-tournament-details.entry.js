import { r as registerInstance, i as createEvent, h } from './index-a091ab89.js';

const dbdTournamentDetailsCss = "";

const DbdTournamentDetails = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalOpen = createEvent(this, "dbdModalOpen", 7);
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
    return (h("div", null, h("ion-card", null, h("ion-item", null, h("ion-thumbnail", { slot: "start", style: {
        height: "80px",
        width: "100px",
      } }, h("img", { src: this.image })), h("ion-label", null, h("h2", null, this.name), h("h2", null, this.dateTime), h("ion-button", { onClick: () => this.dbdModalOpen.emit({
        component: "modal-tournament-detail",
        componentProps: {
          tournament: this.tournament,
          tournamentId: this.tournamentId,
        },
      }) }, "Tournament Details")))), h("ion-row", { style: {
        "flex-wrap": "wrap-reverse",
      } }, h("ion-col", { size: "12", "size-md": "6" }, h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "SURVIVOR"))), h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "SURVIVOR"))), h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "SURVIVOR"))), h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "SURVIVOR")))), h("ion-col", { size: "12", "size-md": "6" }, h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "KILLER")))))));
  }
};
DbdTournamentDetails.style = dbdTournamentDetailsCss;

export { DbdTournamentDetails as dbd_tournament_details };
