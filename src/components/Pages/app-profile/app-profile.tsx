import { AuthService, DatabaseService } from "@fireenjin/sdk";
import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "app-profile",
})
export class AppProfile {
  @Prop() userId: string;
  @Prop() auth: AuthService;
  @Prop() documentId: string;
  @Prop() db: DatabaseService;

  @State() user: any;

  async componentdidload() {
   
  }

  render() {
    return (
      <ion-content>
        <ion-header>
          <ion-toolbar color="light">
            <ion-buttons slot="start">
              <ion-button href="/" color="primary">
                <ion-icon name="arrow-back" color="primary" />
              </ion-button>
            </ion-buttons>
            <ion-title>Edit Profile</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-grid>
          <ion-row
            style={{
              "justify-content": "center",
            }}
          >
            <ion-col size="12" size-md="9">
              <ion-card>
              <fireenjin-form
                  endpoint="users"
                  documentId={this.userId}
                  style={{
                    "text-align": "center",
                    margin: "0 auto",
                  }}
                >
                  <fireenjin-input
                    data-fill
                    labelPosition="stacked"
                    name="name"
                    label="Name"
                  />
                  <fireenjin-input
                    data-fill
                    labelPosition="stacked"
                    name="email"
                    label="E-mail"
                    value={this.user?.email}
                  />
                  <fireenjin-input
                    data-fill
                    labelPosition="stacked"
                    name="discordId"
                    label="Discord Username"
                    value={this.user?.discordId}
                  />
                  <fireenjin-input
                    data-fill
                    labelPosition="stacked"
                    name="steamId"
                    label="Steam Code"
                    value={this.user?.steamId}
                  />
                  <fireenjin-select
                    labelPosition="stacked"
                    data-fill
                    name="enteringAs"
                    label="Entering as?"
                    value={this.user?.enteringAs}
                    options={[
                      {
                        label: "Survivor",
                      },
                      {
                        label: "Killer",
                      },
                    ]}
                  />
                </fireenjin-form>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
