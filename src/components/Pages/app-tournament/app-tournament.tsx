import { DatabaseService } from "@fireenjin/sdk";
import {
  Component,
  h,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "app-tournament",
  styleUrl: "app-tournament.css",
})
export class AppTournament {
  @Event() dbdModalOpen: EventEmitter;
  @Event() dbdPopoverOpen: EventEmitter;

  @Prop() db: DatabaseService;
  @Prop() tournamentId: string;
  @Prop() user: User;

  @State() tournament: Tournament;

  async componentDidLoad() {
    this.db.watchDocument("tournaments", this.tournamentId, ({ data }) => {
      console.log(data);
      this.tournament = data;
    });
  }

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="light">
            <ion-buttons slot="start">
              <ion-button href="/" color="primary">
                <ion-icon name="arrow-back" color="primary" />
              </ion-button>
            </ion-buttons>
            <ion-title>Tournament Page</ion-title>
            <ion-buttons slot="end">
              <ion-button
                color="primary"
                onClick={() =>
                  this.dbdModalOpen.emit({
                    component: "modal-tournament-edit",
                    componentProps: {
                      tournament: this.tournament,
                      tournamentId: this.tournamentId,
                    },
                  })
                }
              >
                Edit
                <ion-icon slot="end" name="create" />
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
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
              }}
            >
              <h1>DEAD BY DAYLIGHT TOURNAMENTS</h1>
            </ion-col>
          </ion-row>
          <dbd-tournament-details
            name={this.tournament?.name}
            rules={this.tournament?.rules}
            dateTime={this.tournament?.id}
            tournamentId={this.tournamentId}
            tournament={this.tournament}
          />
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
                  <ion-title>Dead by Daylight Tournament Signup</ion-title>
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
        </ion-content>
      </Host>
    );
  }
}
