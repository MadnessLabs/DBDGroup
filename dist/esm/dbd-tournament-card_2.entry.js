import { r as registerInstance, B as Build, h, H as Host } from './index-4531603b.js';
import { g as getIonMode } from './ionic-global-89c58f88.js';
import { c as createColorClasses } from './theme-7ef00c83.js';

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

const cardSubtitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}";

const cardSubtitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, #737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;font-weight:500}";

const CardSubtitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { role: "heading", "aria-level": "3", class: createColorClasses(this.color, {
        'ion-inherit-color': true,
        [mode]: true,
      }) }, h("slot", null)));
  }
};
CardSubtitle.style = {
  ios: cardSubtitleIosCss,
  md: cardSubtitleMdCss
};

export { TournamentCard as dbd_tournament_card, CardSubtitle as ion_card_subtitle };
