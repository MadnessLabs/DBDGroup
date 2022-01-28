import { r as registerInstance, h } from './index-7eb109b0.js';

const appHomeCss = "ion-content{--background:url(\"./assets/icon/Dbd.jpg\") no-repeat bottom center /\r\n        cover}";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-conten", null, "Home Page", h("ion-button", { href: "/signup" }, "Sign up", h("ion-button", null))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
