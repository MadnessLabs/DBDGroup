import { r as registerInstance, h } from './index-bac865b7.js';

let AppProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    var _a, _b, _c;
    return (h("ion-content", null, h("fireenjin-form", { fetch: true, endpoint: "users", documentId: this.userId || ((_c = (_b = (_a = this.auth) === null || _a === void 0 ? void 0 : _a.isLoggedIn) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.uid) }, h("fireenjin-input", { label: "Name", name: "name", "data-fill": true }))));
  }
};

export { AppProfile as app_profile };
