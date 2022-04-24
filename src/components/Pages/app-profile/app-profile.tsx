import { AuthService } from "@fireenjin/sdk";
import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "app-profile",
})
export class AppProfile {
  @Prop() userId: string;
  @Prop() auth: AuthService;
  @Prop() documentId: string;
  @Prop() user: User;

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
                  endpoint=""
                  documentId=""
                  style={{
                    "text-align": "center",
                    margin: "0 auto",
                  }}
                >
                  <fireenjin-input
                    labelPosition="stacked"
                    name="name"
                    label="Name"
                    value={this.user?.name}
                  />
                  <fireenjin-input
                    labelPosition="stacked"
                    name="email"
                    label="E-mail"
                    value={this.user?.email}
                  />
                  <fireenjin-input
                    labelPosition="stacked"
                    name="discordId"
                    label="Discord Username"
                    value={this.user?.discordId}
                  />
                  <fireenjin-input
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
                        value: "enteringAs",
                      },
                      {
                        label: "Killer",
                        value: "enteringAs",
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
