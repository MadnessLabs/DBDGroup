import { r as registerInstance, h } from './index-0fc14935.js';

const appDetailCss = "ion-list,ion-item{background:var(--ion-color-step-50);--background:var(--ion-color-step-50)}";

let AppDetail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-content", null, h("ion-card", null, h("ion-row", null, h("ion-col", { size: "4", "size-md": "1" }, h("ion-item", null, h("ion-thumbnail", { slot: "start", style: {
        height: "90px",
        width: "110px",
      } }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })))), h("ion-col", { size: "8", "size-md": "11" }, h("ion-card-title", null, "TOURNAMENT NAME"), h("ion-card-subtitle", null, "DATE"), h("ion-button", { size: "cover", id: "trigger-button" }, "Tournament Details"), h("ion-popover", { trigger: "trigger-button" }, h("ion-content", null, h("ul", null, h("p", null, h("li", null, "Don't Be Cringe, Don't Be Cringe, Don't Be Cringe, Don't Be Cringe")), h("p", null, h("li", null, "Don't Be Cringe")), h("p", null, h("li", null, "Don't Be Cringe")), h("p", null, h("li", null, "Don't Be Cringe")), h("p", null, h("li", null, "Don't Be Cringe")), h("p", null, h("li", null, "Don't Be Cringe")), h("p", null, h("li", null, "Don't Be Cringe")))))))), h("ion-grid", null, h("ion-row", { style: {
        "flex-wrap": "wrap-reverse",
      } }, h("ion-col", { size: "12", "size-md": "6" }, h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "SURVIVOR"))), h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "SURVIVOR"))), h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "SURVIVOR"))), h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "SURVIVOR")))), h("ion-col", { size: "12", "size-md": "6" }, h("ion-card", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), h("p", null, "KILLER"))))), h("ion-row", null, h("ion-col", { size: "12", "size-md": "6" }, h("ion-card", null, h("p", null, "SIGNUP HERE")))))));
  }
};
AppDetail.style = appDetailCss;

export { AppDetail as app_detail };
