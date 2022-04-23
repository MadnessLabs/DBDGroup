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
    return (h("ion-content", null, h("ion-grid", null, h("ion-row", null, (this.tournaments || []).map((tournament) => (h("ion-col", { size: "12", "size-md": "6" }, h("dbd-tournament-card", { href: `/tournament/${tournament === null || tournament === void 0 ? void 0 : tournament.id}`, image: tournament.image, name: tournament.name || "ope", rules: tournament.rules }))))))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
