import { r as registerInstance, h } from './index-0fc14935.js';

const appDetailCss = "";

let AppDetail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-content", null, h("ion-grid", null, h("ion-row", { style: "flex-wrap: wrap-reverse" }, h("ion-col", { size: "12", "size-md": "6" }, h("p", null, "test"), h("p", null, "test"), h("p", null, "test"), h("p", null, "test")), h("ion-col", { size: "12", "size-md": "6" }, h("p", null, "test"))))));
  }
};
AppDetail.style = appDetailCss;

export { AppDetail as app_detail };
