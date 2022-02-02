import { r as registerInstance, h } from './index-7eb109b0.js';
import { y as yh, C as Ca, l as lh } from './index.esm-0dfa3272.js';

const appHomeCss = "";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formData = {};
  }
  onSubmit() {
    yh(Ca(this.db, `users/${this.auth.currentUser.uid}`), this.formData, {
      merge: true
    });
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  async componentDidLoad() {
    const query = await lh(Ca(this.db, `users/${this.auth.currentUser.uid}`));
    this.formData = query.data();
  }
  render() {
    var _a, _b;
    return (h("ion-conten", null, h("ion-card", null, h("form", null, h("ion-list", null, h("ion-item", null, h("ion-input", { name: "name", value: (_a = this.formData) === null || _a === void 0 ? void 0 : _a.name }), h("ion-input", { name: "type", value: (_b = this.formData) === null || _b === void 0 ? void 0 : _b.type }))), h("ion-button", { type: "submit" }, "Save")))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
