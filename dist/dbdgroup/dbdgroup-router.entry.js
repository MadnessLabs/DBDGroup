import { r as registerInstance, h } from './index-fb33124a.js';

let AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async onUpdate() {
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration || !registration.waiting) {
      // If there is no registration, this is the first service
      // worker to be installed. registration.waiting is the one
      // waiting to be activiated.
      return;
    }
    if (confirm("There is an update, would you like to reload now?")) {
      window.location.reload();
    }
  }
  render() {
    return (h("ion-router", { useHash: false }, h("ion-route", { url: "/", component: "app-home" }), h("ion-route", { url: "/signup", component: "app-signup" })));
  }
};

export { AppRoot as dbdgroup_router };
