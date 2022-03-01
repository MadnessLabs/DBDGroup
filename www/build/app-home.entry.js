import { r as registerInstance, h } from './index-bac865b7.js';
import './index.esm-a25bb2b3.js';
import { j as jh, i as ia, F as Fh } from './index.esm2017-e414a212.js';
import './process-es6-6fcfb3fc.js';
import './global-e1c7e609.js';

const appHomeCss = "";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formData = {};
  }
  onSubmit() {
    jh(ia(this.db, `users/${this.auth.currentUser.uid}`), this.formData, {
      merge: true,
    });
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  async componentDidLoad() {
    var _a, _b;
    if (!((_b = (_a = this.auth) === null || _a === void 0 ? void 0 : _a.currentUser) === null || _b === void 0 ? void 0 : _b.uid))
      return;
    const query = await Fh(ia(this.db, `users/${this.auth.currentUser.uid}`));
    this.formData = query.data();
  }
  render() {
    var _a, _b;
    return (h("ion-conten", null, h("ion-card", null, h("form", null, h("ion-list", null, h("ion-item", null, h("ion-input", { name: "name", value: (_a = this.formData) === null || _a === void 0 ? void 0 : _a.name }), h("ion-input", { name: "type", value: (_b = this.formData) === null || _b === void 0 ? void 0 : _b.type }))), h("ion-button", { type: "submit" }, "Save")))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
