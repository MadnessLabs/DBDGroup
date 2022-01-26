import { r as registerInstance, h } from './index-7eb109b0.js';

const appHomeCss = "";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-conten", null, "Home Page", h("ion-button", { href: "/signup" }, "Sign up")));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
