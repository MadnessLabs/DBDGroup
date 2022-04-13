import { r as registerInstance, h } from './index-0fc14935.js';
import './index-62d18b6a.js';
import { t as toastController } from './overlays-649ff82c.js';
import './utils-c2726041.js';
import './animation-e960c982.js';
import './helpers-e7913fb8.js';
import './ios.transition-26e4fa83.js';
import './index-31774ee3.js';
import './md.transition-62a411f7.js';
import './cubic-bezier-4c0db14f.js';
import './index-dd414b33.js';
import './ionic-global-140a6091.js';
import './index-be6112f8.js';
import './index-4833c137.js';
import './hardware-back-button-fa04d6e9.js';

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

export { AppSignup as temp_temp };
