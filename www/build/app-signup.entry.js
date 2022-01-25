import { r as registerInstance, h } from './index-fb33124a.js';

const appSignupCss = "";

let AppSignup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-content", null, "Signup", h("ion-button", { href: "/" }, "Go Home")));
  }
};
AppSignup.style = appSignupCss;

export { AppSignup as app_signup };
