import { r as registerInstance, i as createEvent, h } from './index-6e03bf48.js';
import { s as state } from './store-521aeb0c.js';

const appHomeCss = "app-home ion-card{max-width:600px;margin:30px auto;display:block}";

const AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalOpen = createEvent(this, "dbdModalOpen", 7);
  }
  async componentWillLoad() {
    this.auth.onAuthChanged(async (session) => {
      if (session === null || session === void 0 ? void 0 : session.uid) {
        state.session = session;
        // IF LOGGED IN
        console.log(session.uid, "session.uid");
        console.log(session, "session");
        this.db.watchDocument("users", session.uid, async (snapshot) => {
          console.log(snapshot);
        });
        // Create the user a document in the database
        // Email
      }
      else {
        // IF LOGGED OUT
      }
    });
  }
  async componentDidLoad() {
    this.db.subscribe({ collectionName: "tournaments", orderBy: "timestamp:desc" }, ({ docs }) => {
      this.tournaments = (docs || []).map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
    // this.auth.withSocial("google");
    // this.auth.withEmail("a@a.com", "mypass");
  }
  render() {
    var _a, _b, _c, _d;
    return [
      h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", { slot: "end" }, ((_a = state === null || state === void 0 ? void 0 : state.claims) === null || _a === void 0 ? void 0 : _a.admin) && (h("ion-button", { color: "primary", onClick: () => this.dbdModalOpen.emit({
          component: "modal-tournament-create",
        }) }, "Create", h("ion-icon", { slot: "end", name: "create" }))), ((_b = state === null || state === void 0 ? void 0 : state.session) === null || _b === void 0 ? void 0 : _b.uid) ? (h("ion-button", { color: "primary", onClick: () => {
          var _a;
          return this.dbdModalOpen.emit({
            component: "modal-profile",
            componentProps: {
              auth: this.auth,
              userId: (_a = state === null || state === void 0 ? void 0 : state.session) === null || _a === void 0 ? void 0 : _a.uid,
            },
          });
        } }, "Edit", h("ion-icon", { slot: "end", color: "primary", name: "person" }))) : (h("ion-button", { color: "primary", onClick: () => this.dbdModalOpen.emit({
          component: "modal-login",
          componentProps: {
            auth: this.auth,
          },
        }) }, "Login"))), h("h2", null, "Dead By Daylight Group"))),
      h("ion-content", null, h("ion-grid", null, h("ion-row", null, (_d = (_c = this.tournaments) === null || _c === void 0 ? void 0 : _c.map) === null || _d === void 0 ? void 0 : _d.call(_c, (tournament) => (h("ion-col", { size: "12", "size-md": "6" }, h("dbd-tournament-card", { ...tournament, href: `/tournament/${tournament === null || tournament === void 0 ? void 0 : tournament.id}` }))))))),
    ];
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
