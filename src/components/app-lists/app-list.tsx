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
            }}
          >
            <ion-col
              size-sm="10"
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
            <ion-col size="12" size-sm="8"></ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="8"></ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="8"></ion-col>
          </ion-row>
          <ion-row>
            <img id="bLogo" src="/assets/dbdlogoblack.png"></img>
          </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
