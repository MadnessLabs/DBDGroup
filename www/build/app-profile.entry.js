import { r as registerInstance, h } from './index-e5ab994a.js';

let AppProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    var _a, _b, _c;
    return (h("ion-content", null, h("ion-grid", null, h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "2" }, h("ion-accordion-group", null, h("ion-accordion", { value: "colors", "toggle-icon": "arrow-down-circle" }, h("ion-item", { style: {
        "text-align": "center",
      }, slot: "header" }, h("ion-label", null, "Links")), h("ion-list", { slot: "content" }, h("ion-item", null, h("a", { href: "https://deadbydaylight.group/tournament" }, "Tournament sign-up")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/list" }, "Tournament List")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/profile" }, "Profile")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/admin" }, "Admin")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group" }, "Home"))))))), h("fireenjin-form", { fetch: true, endpoint: "users", documentId: this.userId || ((_c = (_b = (_a = this.auth) === null || _a === void 0 ? void 0 : _a.isLoggedIn) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.uid) }, h("fireenjin-input", { label: "Name", name: "name", "data-fill": true })))));
  }
};

export { AppProfile as app_profile };
