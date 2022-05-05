import { AuthService, DatabaseService } from "@fireenjin/sdk";
import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Listen,
} from "@stencil/core";

@Component({
  tag: "modal-profile",
  styleUrl: "modal-profile.css",
})
export class ModalProfile {
  @Event() dbdModalClose: EventEmitter;

  @Prop() userId: string;
  @Prop() auth: AuthService;
  @Prop() documentId: string;
  @Prop() db: DatabaseService;
  @Prop() headerTitle = "Edit Profile";

  @State() user: User;

  @Listen("fireenjinError")
  async onError(event) {
    console.log(event);
    if (event?.detail?.error?.code === "not-found") {
      await this.db.add("users", this.user, this.userId);
    }
  }

  closeModal(event: MouseEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.dbdModalClose.emit();
  }

  render() {
    return (
      <ion-content>
        <ion-header>
          <ion-toolbar color="light">
            <ion-buttons slot="start">
              <ion-button
                color="primary"
                href="/"
                onClick={(event) => this.closeModal(event)}
              >
                <ion-icon name="arrow-back" color="primary" />
              </ion-button>
            </ion-buttons>
            <ion-title>{this.headerTitle}</ion-title>
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
                  fetch
                  endpoint="users"
                  documentId={this.userId}
                  beforeSubmit={async (data) => {
                    this.user = data;
                    return data;
                  }}
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
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    name="email"
                    label="E-mail"
                  />
                  <fireenjin-input
                    data-fill
                    required
                    labelPosition="stacked"
                    name="discordId"
                    label="Discord Username"
                  />
                  <fireenjin-input
                    data-fill
                    labelPosition="stacked"
                    name="steamId"
                    label="Steam Code"
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
