import { r as registerInstance, i as createEvent, h } from './index-0fc14935.js';

const appHomeCss = "app-home ion-content{--background:none;background:url(\"/assets/dbdtreeBkgd.png\");background-position:center;width:100%;background-repeat:no-repeat;background-size:cover;background-color:rgb(66, 66, 66);position:relative}app-home #bLogo{position:fixed;height:240px;width:280px;max-width:100%;margin-left:-120px;opacity:.7}app-home ion-card{max-width:600px;margin:30px auto;display:block}";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalOpen = createEvent(this, "dbdModalOpen", 7);
  }
  async componentDidLoad() {
    // this.dbdModalOpen.emit({
    //   component: "modal-login",
    //   componentProps: {},
    // });
  }
  render() {
    return (h("ion-content", null, h("ion-card", null, h("img", { src: "./assets/icon/icon.png" }), h("ion-card-header", null, h("ion-card-subtitle", null, "DeadByDaylight.Group"), h("ion-card-title", null, "Stick together, stay alive.")), h("ion-card-content", null, "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.")), h("fireenjin-pagination", { endpoint: "tournaments", listEl: (tournament) => (h("ion-card", null, h("img", { src: "./assets/icon/icon.png" }), h("ion-card-header", null, h("ion-card-subtitle", null, tournament === null || tournament === void 0 ? void 0 : tournament.date), h("ion-card-title", null, (tournament === null || tournament === void 0 ? void 0 : tournament.name) || "No Tournament Name")), h("ion-card-content", null, "Enter HERE"))) }), h("ion-card", null, h("img", { src: "./assets/icon/icon.png" }), h("ion-card-header", null, h("ion-card-subtitle", null, "Testing Tourney"), h("ion-card-title", null, "Tournament")), h("ion-card-content", null, "Enter HERE", h("ion-button", { href: "/tournament/test" }, "ENTER NOW")))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
