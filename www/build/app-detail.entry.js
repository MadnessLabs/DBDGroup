import { r as registerInstance, h } from './index-0fc14935.js';

const appDetailCss = "";

let AppDetail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-content", null, h("ion-card", null, h("ion-card-title", null, "TOURNAMENT NAME"), h("ion-card-subtitle", null, "DATE"), h("ion-card-content", null, "Tournament rules (details)")), h("ion-grid", null, h("ion-row", { style: {
        "flex-wrap": "wrap-reverse",
      } }, h("ion-col", { size: "12", "size-md": "6" }, h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "SURVIVOR"))), h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "SURVIVOR")))), h("ion-col", { size: "12", "size-md": "6" }, h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "KILLER"))))), h("ion-row", null, h("ion-col", { size: "12", "size-md": "6" }, h("ion-card", null, h("p", null, "SIGNUP HERE")))))));
  }
};
AppDetail.style = appDetailCss;

export { AppDetail as app_detail };
