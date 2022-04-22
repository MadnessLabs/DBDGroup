'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const AppProfile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    var _a, _b, _c;
    return (index.h("ion-content", null, index.h("ion-grid", null, index.h("ion-row", { style: {
        "justify-content": "center",
      } }, index.h("ion-col", { size: "8", "size-md": "2" }, index.h("ion-accordion-group", null, index.h("ion-accordion", { "toggle-icon": "arrow-down-circle" }, index.h("ion-item", { style: {
        "text-align": "center",
      }, slot: "header" }, index.h("ion-label", null, "Links")), index.h("ion-list", { slot: "content" }, index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/tournament" }, "Tournament sign-up")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/list" }, "Tournament List")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/profile" }, "Profile")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group/admin" }, "Admin")), index.h("ion-item", null, index.h("a", { href: "https://deadbydaylight.group" }, "Home"))))))), index.h("fireenjin-form", { fetch: true, endpoint: "users", documentId: this.userId || ((_c = (_b = (_a = this.auth) === null || _a === void 0 ? void 0 : _a.isLoggedIn) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.uid) }, index.h("fireenjin-input", { label: "Name", name: "name", "data-fill": true })))));
  }
};

exports.app_profile = AppProfile;
