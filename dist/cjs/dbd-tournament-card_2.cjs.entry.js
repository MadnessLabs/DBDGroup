'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');
const ionicGlobal = require('./ionic-global-07f11642.js');
const theme = require('./theme-b0b295c1.js');

const tournamentCardCss = "dbd-tournament-card{display:block}";

const TournamentCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.image = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  }
  componentDidLoad() {
    if (!(index.Build === null || index.Build === void 0 ? void 0 : index.Build.isBrowser))
      return;
    // Get Data
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-card", null, index.h("ion-item", { href: this.href, detail: true }, index.h("ion-thumbnail", { slot: "start", style: {
        height: "90px",
        width: "110px",
      } }, index.h("img", { src: this.image })), index.h("ion-label", null, index.h("h2", null, this.name || "DBD Tourney"), index.h("h3", null, this.dateTime), this.rules && (index.h("fireenjin-chip-bar", null, (this.rules || []).map((rule) => (index.h("ion-chip", null, rule))))))))));
  }
};
TournamentCard.style = tournamentCardCss;

const cardSubtitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}";

const cardSubtitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, #737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;font-weight:500}";

const CardSubtitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { role: "heading", "aria-level": "3", class: theme.createColorClasses(this.color, {
        'ion-inherit-color': true,
        [mode]: true,
      }) }, index.h("slot", null)));
  }
};
CardSubtitle.style = {
  ios: cardSubtitleIosCss,
  md: cardSubtitleMdCss
};

exports.dbd_tournament_card = TournamentCard;
exports.ion_card_subtitle = CardSubtitle;
