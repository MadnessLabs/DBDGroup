import { Component, ComponentInterface, Listen, h, Build } from "@stencil/core";
import { initializeApp } from "firebase/app";
import { AuthService, DatabaseService, FireEnjin } from "@fireenjin/sdk";

@Component({
  tag: "dbdgroup-router",
})
export class AppRoot implements ComponentInterface {
  app = Build.isBrowser
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
  auth = Build.isBrowser
    ? new AuthService({
        app: this.app,
        config: {
          tokenLocalStorageKey: "madnessdev:token",
          authLocalStorageKey: "madnessdev:session",
          emulate: false,
        },
      })
    : null;
  db = Build.isBrowser
    ? new DatabaseService({
        app: this.app,
        emulate: false,
      })
    : null;
  fireenjin = Build.isBrowser
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
  componentProps = {
    app: this.app,
    auth: this.auth,
    db: this.db,
    fireenjin: this.fireenjin,
  };

  @Listen("swUpdate", { target: "window" })
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

  async componentWillLoad() {
    this.auth.onAuthChanged(async (session) => {
      if (session?.uid) {
        // IF LOGGED IN
        console.log(session.uid);
        this.db.watchDocument("users", session.uid, async (snapshot) => {
          console.log(snapshot);
        });
      } else {
        // IF LOGGED OUT
      }
    });
  }

  render() {
    return (
      <ion-router useHash={false}>
        <ion-route
          url="/"
          component="app-home"
          componentProps={this.componentProps}
        />
        <ion-route
          url="/signup"
          component="app-signup"
          componentProps={this.componentProps}
        />
        <ion-route
          url="/admin"
          component="app-admin"
          componentProps={this.componentProps}
        />
        <ion-route
          url="/tournament/:tournamentId"
          component="app-tournament"
          componentProps={this.componentProps}
        />
        <ion-route
          url="/profile/:userId"
          component="app-profile"
          componentProps={this.componentProps}
        />
      </ion-router>
    );
  }
}
