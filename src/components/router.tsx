import { AuthService, DatabaseService, FireEnjin } from "@fireenjin/sdk";
import { Component, ComponentInterface, Listen, h, Build } from "@stencil/core";
import { initializeApp } from "firebase/app";
import { modalController, popoverController } from "@ionic/core";
import env from "../helpers/env";

@Component({
  tag: "dbdgroup-router",
})
export class AppRoot implements ComponentInterface {
  app = Build.isBrowser ? initializeApp(env("firebase")) : null;
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
  modal: HTMLIonModalElement;
  popover: HTMLIonPopoverElement;

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

  @Listen("dbdPopoverOpen", { target: "document" })
  async presentPopover(event: CustomEvent) {
    this.popover = await popoverController.create({
      event: event?.detail?.event,
      component: event?.detail?.component,
      componentProps: event?.detail?.componentProps,
      cssClass: event?.detail?.cssClass,
    });
    await this.popover.present();
  }

  @Listen("dbdModalOpen", { target: "document" })
  async presentModal(event: CustomEvent) {
    this.modal = await modalController.create({
      component: event?.detail?.component,
      componentProps: event?.detail?.componentProps,
      cssClass: event?.detail?.cssClass,
    });
    await this.modal.present();
  }

  @Listen("dbdModalClose", { target: "document" })
  async closeModal() {
    this.modal.dismiss();
  }

  async componentWillLoad() {
    this.auth.onAuthChanged(async (session) => {
      if (session?.uid) {
        // IF LOGGED IN
        console.log(session.uid);
        this.db.watchDocument("users", session.uid, async (snapshot) => {
          console.log(snapshot);
        });

        // Create the user a document in the database
        // Email
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
          url="/list"
          component="app-list"
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
        {/* <ion-route
          url="/user/:userId"
          component=""
          componentProps={this.componentProps}
        /> */}
      </ion-router>
    );
  }
}
