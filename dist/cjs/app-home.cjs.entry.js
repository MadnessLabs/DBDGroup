'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e14d11a5.js');
const index_esm2017 = require('./index.esm2017-905605db.js');

const appHomeCss = "";

let AppHome = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.formData = {};
  }
  onSubmit() {
    index_esm2017.yh(index_esm2017.Ca(this.db, `users/${this.auth.currentUser.uid}`), this.formData, {
      merge: true
    });
  }
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }
  async componentDidLoad() {
    const query = await index_esm2017.lh(index_esm2017.Ca(this.db, `users/${this.auth.currentUser.uid}`));
    this.formData = query.data();
  }
  render() {
    var _a, _b;
    return (index.h("ion-conten", null, index.h("ion-card", null, index.h("form", null, index.h("ion-list", null, index.h("ion-item", null, index.h("ion-input", { name: "name", value: (_a = this.formData) === null || _a === void 0 ? void 0 : _a.name }), index.h("ion-input", { name: "type", value: (_b = this.formData) === null || _b === void 0 ? void 0 : _b.type }))), index.h("ion-button", { type: "submit" }, "Save")))));
  }
};
AppHome.style = appHomeCss;

exports.app_home = AppHome;
