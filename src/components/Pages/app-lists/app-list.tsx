import { Component, h } from "@stencil/core";
import { toastController } from "@ionic/core";

@Component({
  tag: "app-list",
  styleUrl: "app-list.css",
})
export class AppList {
  async presentToast(_event) {
    const toast = await toastController.create({
      message: "Help yourself you fuck!",
      duration: 2000,
    });
    toast.present();
  }

  render() {
    return (
      <ion-content>
        <ion-grid>
          <ion-row
            style={{
              "justify-content": "center",
              padding: "0px",
            }}
          >
            <ion-col size="8" size-md="2">
              <ion-accordion-group>
                <ion-accordion toggle-icon="arrow-down-circle">
                  <ion-item
                    style={{
                      "text-align": "center",
                    }}
                    slot="header"
                  >
                    <ion-label>Links</ion-label>
                  </ion-item>
                  <ion-list slot="content">
                    <ion-item>
                      <a href="https://deadbydaylight.group/tournament">
                        Tournament sign-up
                      </a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group/list">
                        Tournament List
                      </a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group/profile">Profile</a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group/admin">Admin</a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group">Home</a>
                    </ion-item>
                  </ion-list>
                </ion-accordion>
              </ion-accordion-group>
            </ion-col>
          </ion-row>
          <ion-row
            style={{
              "justify-content": "center",
              padding: "0px",
            }}
          >
            <ion-col
              size="12"
              size-md="4"
              style={{
                "text-align": "center",
                "border-color": "transparent",
              }}
            >
              <ion-card
                style={{
                  opacity: ".6",
                  "border-style": "ridge",
                  "border-color": "#7a7a79",
                }}
              >
                <h1
                  style={{
                    "font-family": "sans-serif",
                    color: "white",
                  }}
                >
                  <b>DEAD BY DAYLIGHT TOURNAMENTS</b>
                </h1>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="12" size-md="8"></ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="12" size-md="8"></ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="12" size-md="8"></ion-col>
          </ion-row>
          <ion-row>
            <img id="bLogo" src="/assets/dbdlogoblack.png"></img>
          </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
