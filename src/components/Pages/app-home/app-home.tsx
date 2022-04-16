import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  @Event() dbdModalOpen: EventEmitter<{
    component: string;
    componentProps?: any;
    cssClass?: string;
  }>;

  @Prop() db: Firestore;
  @Prop() auth: Auth;

  async componentDidLoad() {
    // this.dbdModalOpen.emit({
    //   component: "modal-login",
    //   componentProps: {},
    // });
  }

  render() {
    return (
      <ion-content>
        <ion-card>
          <img src="./assets/icon/icon.png" />
          <ion-card-header>
            <ion-card-subtitle>DeadByDaylight.Group</ion-card-subtitle>
            <ion-card-title>Stick together, stay alive.</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
            Madison was named the capital of the Wisconsin Territory in 1836.
          </ion-card-content>
        </ion-card>
        <fireenjin-pagination
          endpoint="tournaments"
          listEl={(tournament) => (
            <ion-card>
              <img src="./assets/icon/icon.png" />
              <ion-card-header>
                <ion-card-subtitle>{tournament?.date}</ion-card-subtitle>
                <ion-card-title>
                  {tournament?.name || "No Tournament Name"}
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>Enter HERE</ion-card-content>
            </ion-card>
          )}
        />
        <ion-card>
          <img src="./assets/icon/icon.png" />
          <ion-card-header>
            <ion-card-subtitle>Testing Tourney</ion-card-subtitle>
            <ion-card-title>Tournament</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Enter HERE
            <ion-button href="/tournament/test">ENTER NOW</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-content>
    );
  }
}
