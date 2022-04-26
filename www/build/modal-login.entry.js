import { r as registerInstance, h } from './index-a091ab89.js';

const modalLoginCss = "";

const ModalLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formData = {};
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  // @Listen("fireenjinSubmit")
  // async onSubmit() {
  //   let res;
  //   if (true === true) {
  //     res = await this.auth.withEmailLink(this.formData?.email, {
  //       url: "https://deadbydaylight.group",
  //       dynamicLinkDomain: "dbdgroup.page.link",
  //       iOS: {
  //         bundleId: "com.fireenjin.dbdgroup",
  //       },
  //       android: {
  //         packageName: "com.fireenjin.dbdgroup",
  //         installApp: false,
  //         minimumVersion: "12",
  //       },
  //       handleCodeInApp: true,
  //     });
  //   } else {
  //     res = await this.auth.withSocial("google");
  //   }
  //   console.log(res);
  // }
  render() {
    return (h("ion-content", null, h("ion-card", { style: { maxWidth: "400px", margin: "30px auto" } }, h("h1", { style: {
        "font-family": "sans-serif",
      } }, h("b", null, "DEAD BY DAYLIGHT GROUP SIGN-UP")), h("fireenjin-form", null, h("fireenjin-input", { label: "Email", labelPosition: "stacked", name: "email", type: "email" }), h("fireenjin-input", { label: "Password", labelPosition: "stacked", name: "password", type: "password" })))));
  }
};
ModalLogin.style = modalLoginCss;

export { ModalLogin as modal_login };
