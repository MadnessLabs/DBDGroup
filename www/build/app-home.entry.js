import { r as registerInstance, i as createEvent, h } from './index-a091ab89.js';

const appHomeCss = "app-home ion-card{max-width:600px;margin:30px auto;display:block}";

const AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalOpen = createEvent(this, "dbdModalOpen", 7);
  }
  async componentDidLoad() {
    this.tournaments = await this.db.list("tournaments", []);
    // this.auth.withSocial("google");
  }
  render() {
    var _a, _b;
    return [
      h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "start" }, h("ion-button", { href: "/", color: "primary" }, h("ion-icon", { name: "arrow-back", color: "primary" }))), h("ion-title", null, "Dead By Daylight Group"))),
      h("ion-content", null, h("ion-grid", null, h("ion-row", null, (_b = (_a = this.tournaments) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.call(_a, (tournament) => (h("ion-col", { size: "12", "size-md": "6" }, h("dbd-tournament-card", { ...tournament, href: `/tournament/${tournament === null || tournament === void 0 ? void 0 : tournament.id}` }))))))),
    ];
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
