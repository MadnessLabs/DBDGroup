import { r as registerInstance, h } from './index-bac865b7.js';
import './index-8d526bb0.js';
import { t as toastController } from './overlays-884665fe.js';
import './utils-1446f01d.js';
import './animation-ff813219.js';
import './helpers-b5b4d5eb.js';
import './ios.transition-53377047.js';
import './index-3f3f61b5.js';
import './md.transition-bf0d55d6.js';
import './cubic-bezier-a7ad9c8e.js';
import './index-c31991b6.js';
import './ionic-global-48c6f4a1.js';
import './index-435af8e6.js';
import './index-ae4d9ece.js';
import './hardware-back-button-b6ccf74a.js';

const appSignupCss = "ion-content{--background:none;background:url(\"/assets/dbd-background.png\");background-position:center top;background-repeat:no-repeat;background-size:contain;background-color:rgb(66, 66, 66)}.choices{text-align:center;font-size:x-large}";

let AppSignup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async presentToast(_event) {
    const toast = await toastController.create({
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
    return (h("ion-content", null, h("ion-button", { href: "https://discord.com/api/oauth2/authorize?client_id=938334670196723812&redirect_uri=https%3A%2F%2Fdeadbydaylight.group%2Foauth%2Fcallback&response_type=code&scope=identify%20email%20guilds.join" }, h("ion-icon", { slot: "start", name: "logo-discord" }), "Login with Discord"), h("form", null, h("ion-label", { position: "floating" }, "E-mail"), h("ion-input", { type: "text", name: "email", value: "" }), h("ion-label", { position: "floating" }, "Password"), h("ion-input", { type: "password", name: "password", value: "" }), h("ion-button", { type: "submit", color: "tertiary" }, "Submit")), h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("ion-card", null, h("div", { class: 'choices' }, h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("ion-text", { color: "danger" }, "Killer")), h("ion-col", null, h("ion-text", { color: "tertiary" }, "Survivor")))))))), h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("ion-button", { color: "medium", expand: "block", href: "", target: "_blank" }, h("ion-icon", { slot: "start", name: "logo-steam" }), "Steam")), h("ion-col", null, h("ion-button", { color: "medium", expand: "block", href: "https://discord.com/channels/933969468227481690/933970601230618634", target: "_blank" }, h("ion-icon", { slot: "start", name: "logo-discord" }), "Discord")), h("ion-col", null, h("ion-button", { expand: "block", onClick: (event) => this.presentToast(event), target: "_blank" }, h("ion-icon", { slot: "start", name: "help-circle" }), "Help")))))));
  }
};
AppSignup.style = appSignupCss;

export { AppSignup as app_signup };
