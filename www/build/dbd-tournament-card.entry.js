import { r as registerInstance, m as Build, h, o as Host } from './index-6e03bf48.js';

const tournamentCardCss = "dbd-tournament-card{display:block}";

const TournamentCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.image = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  }
  componentDidLoad() {
    if (!(Build === null || Build === void 0 ? void 0 : Build.isBrowser))
      return;
    // Get Data
  }
  render() {
    return (h(Host, null, h("ion-card", null, h("ion-item", { href: this.href, detail: true }, h("ion-thumbnail", { slot: "start", style: {
        height: "90px",
        width: "110px",
      } }, h("img", { src: this.image })), h("ion-label", null, h("h2", null, this.name || "DBD Tourney"), h("h3", null, this.dateTime), this.rules && (h("fireenjin-chip-bar", null, (this.rules || []).map((rule) => (h("ion-chip", null, rule))))))))));
  }
};
TournamentCard.style = tournamentCardCss;

export { TournamentCard as dbd_tournament_card };
