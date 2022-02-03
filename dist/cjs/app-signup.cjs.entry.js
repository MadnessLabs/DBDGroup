'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e14d11a5.js');
const overlays = require('./overlays-8a1a5405.js');
require('./ionic-global-c6a27ea6.js');
require('./hardware-back-button-ca468aae.js');
require('./helpers-ff618d5e.js');

const appSignupCss = "ion-content{--background:none;background:url(\"/assets/dbd-background.png\");background-position:center top;background-repeat:no-repeat;background-size:contain;background-color:rgb(66, 66, 66)}.choices{text-align:center;font-size:x-large}";

let AppSignup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async presentToast(_event) {
    const toast = await overlays.toastController.create({
      message: 'Help yourself you fuck!',
      duration: 2000
    });
    toast.present();
  }
  onInput(event) {
    if (event.target.name === "email") {
      this.email = event.target.value;
    }
    else if (event.target.name === "password") {
      this.password = event.target.value;
    }
  }
  onSubmit(event) {
    event.preventDefault();
    console.log(this.email, this.password);
  }
  render() {
    return (index.h("ion-content", null, index.h("ion-button", { href: "https://discord.com/api/oauth2/authorize?client_id=938334670196723812&redirect_uri=https%3A%2F%2Fdeadbydaylight.group%2Foauth%2Fcallback&response_type=code&scope=identify%20email%20guilds.join" }, index.h("ion-icon", { slot: "start", name: "logo-discord" }), "Login with Discord"), index.h("form", null, index.h("ion-label", { position: "floating" }, "E-mail"), index.h("ion-input", { type: "text", name: "email", value: "" }), index.h("ion-label", { position: "floating" }, "Password"), index.h("ion-input", { type: "password", name: "password", value: "" }), index.h("ion-button", { type: "submit", color: "tertiary" }, "Submit")), index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", null, index.h("ion-card", null, index.h("div", { class: 'choices' }, index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", null, index.h("ion-text", { color: "danger" }, "Killer")), index.h("ion-col", null, index.h("ion-text", { color: "tertiary" }, "Survivor")))))))), index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", null, index.h("ion-button", { color: "medium", expand: "block", href: "", target: "_blank" }, index.h("ion-icon", { slot: "start", name: "logo-steam" }), "Steam")), index.h("ion-col", null, index.h("ion-button", { color: "medium", expand: "block", href: "https://discord.com/channels/933969468227481690/933970601230618634", target: "_blank" }, index.h("ion-icon", { slot: "start", name: "logo-discord" }), "Discord")), index.h("ion-col", null, index.h("ion-button", { expand: "block", onClick: (event) => this.presentToast(event), target: "_blank" }, index.h("ion-icon", { slot: "start", name: "help-circle" }), "Help")))))));
  }
};
AppSignup.style = appSignupCss;

exports.app_signup = AppSignup;
