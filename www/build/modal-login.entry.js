import { r as registerInstance, h } from './index-a091ab89.js';
import { e as env } from './env-2c0efef6.js';

const modalLoginCss = "";

const ModalLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formData = {};
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  async onSubmit() {
    var _a;
    let res;
    if (true === true) {
      res = await this.auth.withEmailLink((_a = this.formData) === null || _a === void 0 ? void 0 : _a.email, {
        url: env("url"),
        dynamicLinkDomain: env("dynamicLinkDomain"),
        iOS: {
          bundleId: "com.fireenjin.dbdgroup",
        },
        android: {
          packageName: "com.fireenjin.dbdgroup",
          installApp: false,
          minimumVersion: "12",
        },
        handleCodeInApp: true,
      });
    }
    else {
      res = await this.auth.withSocial("google");
    }
    console.log(res);
  }
  render() {
    return (h("ion-content", null, h("ion-card", { style: { maxWidth: "400px", margin: "30px auto" } }, h("h1", { style: {
        "font-family": "sans-serif",
      } }, h("b", null, "DEAD BY DAYLIGHT GROUP SIGN-UP")), h("fireenjin-form", null, h("fireenjin-input", { label: "Email", labelPosition: "stacked", name: "email", type: "email" }), h("fireenjin-input", { label: "Password", labelPosition: "stacked", name: "password", type: "password" })))));
  }
};
ModalLogin.style = modalLoginCss;

export { ModalLogin as modal_login };
