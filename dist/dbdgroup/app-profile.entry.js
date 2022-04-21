import { r as registerInstance, h } from './index-0fc14935.js';

const appProfileCss = "#test{font-size:80px;background:blue;background-color:purple}";

let AppProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("floodteam-header-bar", null), h("div", { id: "test" }, h("p", null, "This is how we do it"))));
  }
};
AppProfile.style = appProfileCss;

export { AppProfile as app_profile };
