import { AuthService, DatabaseService, FireEnjin } from "@fireenjin/sdk";
import { Component, Listen, h, Build } from "@stencil/core";
import { initializeApp } from "firebase/app";
import { modalController, popoverController } from "@ionic/core";
export class AppRoot {
  constructor() {
    this.app = Build.isBrowser
      ? initializeApp({
        apiKey: "AIzaSyDBJ3MJ0T0pWqWWGVlnGJ6g97cR8axU5ak",
        authDomain: "dead-by-daylight-group.firebaseapp.com",
        projectId: "dead-by-daylight-group",
        storageBucket: "dead-by-daylight-group.appspot.com",
        messagingSenderId: "974124897552",
        appId: "1:974124897552:web:48ea2eadb5021f58d3c195",
        measurementId: "G-4KQFEEYLJS",
      })
      : null;
    this.auth = Build.isBrowser
      ? new AuthService({
        app: this.app,
        config: {
          tokenLocalStorageKey: "madnessdev:token",
          authLocalStorageKey: "madnessdev:session",
          emulate: false,
        },
      })
      : null;
    this.db = Build.isBrowser
      ? new DatabaseService({
        app: this.app,
        emulate: false,
      })
      : null;
    this.fireenjin = Build.isBrowser
      ? new FireEnjin({
        debug: true,
        connections: [
          {
            db: this.db,
            type: "firebase",
            url: "https://deadbydaylight.group/api",
          },
        ],
      })
      : null;
    this.componentProps = {
      app: this.app,
      auth: this.auth,
      db: this.db,
      fireenjin: this.fireenjin,
    };
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
  async presentPopover(event) {
    var _a, _b, _c, _d;
    this.popover = await popoverController.create({
      event: (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.event,
      component: (_b = event === null || event === void 0 ? void 0 : event.detail) === null || _b === void 0 ? void 0 : _b.component,
      componentProps: (_c = event === null || event === void 0 ? void 0 : event.detail) === null || _c === void 0 ? void 0 : _c.componentProps,
      cssClass: (_d = event === null || event === void 0 ? void 0 : event.detail) === null || _d === void 0 ? void 0 : _d.cssClass,
    });
    await this.popover.present();
  }
  async presentModal(event) {
    var _a, _b, _c;
    this.modal = await modalController.create({
      component: (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.component,
      componentProps: (_b = event === null || event === void 0 ? void 0 : event.detail) === null || _b === void 0 ? void 0 : _b.componentProps,
      cssClass: (_c = event === null || event === void 0 ? void 0 : event.detail) === null || _c === void 0 ? void 0 : _c.cssClass,
    });
    await this.modal.present();
  }
  async closeModal() {
    this.modal.dismiss();
  }
  async componentWillLoad() {
    this.auth.onAuthChanged(async (session) => {
      if (session === null || session === void 0 ? void 0 : session.uid) {
        // IF LOGGED IN
        console.log(session.uid);
        this.db.watchDocument("users", session.uid, async (snapshot) => {
          console.log(snapshot);
        });
      }
      else {
        // IF LOGGED OUT
      }
    });
  }
  render() {
    return (h("ion-router", { useHash: false },
      h("ion-route", { url: "/", component: "app-home", componentProps: this.componentProps }),
      h("ion-route", { url: "/list", component: "app-list", componentProps: this.componentProps }),
      h("ion-route", { url: "/admin", component: "app-admin", componentProps: this.componentProps }),
      h("ion-route", { url: "/tournament/:tournamentId", component: "app-tournament", componentProps: this.componentProps }),
      h("ion-route", { url: "/profile", component: "app-profile", componentProps: this.componentProps })));
  }
  static get is() { return "dbdgroup-router"; }
  static get listeners() { return [{
      "name": "swUpdate",
      "method": "onUpdate",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "dbdPopoverOpen",
      "method": "presentPopover",
      "target": "document",
      "capture": false,
      "passive": false
    }, {
      "name": "dbdModalOpen",
      "method": "presentModal",
      "target": "document",
      "capture": false,
      "passive": false
    }, {
      "name": "dbdModalClose",
      "method": "closeModal",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
