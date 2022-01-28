import { r as registerInstance, h } from './index-47739846.js';
import { t as toastController } from './overlays-74f0cabb.js';
import './ionic-global-9868b782.js';
import './hardware-back-button-508e48cf.js';
import './helpers-d9e8a9eb.js';

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
    return (h("ion-content", null, h("form", null, h("ion-label", { position: "floating" }, "E-mail"), h("ion-input", { type: "text", name: "email", value: "" }), h("ion-label", { position: "floating" }, "Password"), h("ion-input", { type: "password", name: "password", value: "" }), h("ion-button", { type: "submit", color: "tertiary" }, "Submit")), h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("ion-card", null, h("div", { class: 'choices' }, h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("ion-text", { color: "danger" }, "Killer")), h("ion-col", null, h("ion-text", { color: "tertiary" }, "Survivor")))))))), h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("ion-button", { color: "medium", expand: "block", href: "", target: "_blank" }, h("ion-icon", { slot: "start", name: "logo-steam" }), "Steam")), h("ion-col", null, h("ion-button", { color: "medium", expand: "block", href: "https://discord.com/channels/933969468227481690/933970601230618634", target: "_blank" }, h("ion-icon", { slot: "start", name: "logo-discord" }), "Discord")), h("ion-col", null, h("ion-button", { expand: "block", onClick: (event) => this.presentToast(event), target: "_blank" }, h("ion-icon", { slot: "start", name: "help-circle" }), "Help")))))));
  }
};
AppSignup.style = appSignupCss;

export { AppSignup as app_signup };