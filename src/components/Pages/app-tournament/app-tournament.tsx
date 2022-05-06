import { AuthService, DatabaseService } from "@fireenjin/sdk";
import {
  Component,
  h,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
} from "@stencil/core";
import state from "../../../store";

@Component({
  tag: "app-tournament",
  styleUrl: "app-tournament.css",
})
export class AppTournament {
  @Event() dbdModalOpen: EventEmitter;
  @Event() dbdPopoverOpen: EventEmitter;

  @Prop() db: DatabaseService;
  @Prop() tournamentId: string;
  @Prop() auth: AuthService;
  @Prop() userId: string;

  @State() tournament: Tournament;
  @State() users: any;

  async componentDidLoad() {
    this.users = await this.db.list("users", []);
    console.log(this.users, "here");
    this.db.watchDocument("tournaments", this.tournamentId, ({ data }) => {
      console.log(data);
      this.tournament = data;
    });
  }

  async enterTournament(type?: "killer" | "survivor") {
    if (state?.session?.uid) {
      const killers = this.tournament?.killers || [];
      const survivors = this.tournament?.survivors || [];
      if (type === "survivor") {
        survivors.push({
          user: null,
        });
      } else {
        killers.push({
          user: null,
        });
      }

      this.tournament = { ...this.tournament, killers, survivors };
      await this.db.update("tournaments", this.tournamentId, this.tournament);
      console.log(this.tournament, killers);
    } else {
      this.dbdModalOpen.emit({
        component: "modal-profile",
        componentProps: {
          headerTitle:
            type === "survivor" ? "Enter as Survivor" : "Enter as Killer",
        },
      });
    }
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
              {state?.claims?.admin && (
                <ion-button
                  color="primary"
                  onClick={() =>
                    this.dbdModalOpen.emit({
                      component: "modal-tournament-edit",
                      componentProps: {
                        tournament: this.tournament,
                        tournamentId: this.tournamentId,
                        mainTitle: "Edit Tournament",
                      },
                    })
                  }
                >
                  Edit
                  <ion-icon slot="end" name="create" />
                </ion-button>
              )}
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
            timestamp={this.tournament?.timestamp}
            tournamentId={this.tournamentId}
            tournament={this.tournament}
          />
          <ion-grid>
            <ion-row>
              <ion-col size="6">
                <ion-button
                  expand="block"
                  onClick={() => this.enterTournament("survivor")}
                >
                  Enter as Survivor
                </ion-button>
              </ion-col>
              <ion-col size="6">
                <ion-button
                  expand="block"
                  fill="outline"
                  onClick={() => this.enterTournament("killer")}
                >
                  Enter as Killer
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-card color="tertiary">
                <ion-item color="light">Game 1</ion-item>
              </ion-card>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-item>
                    <ion-badge color="primary">Survivor</ion-badge>
                  </ion-item>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-item>
                    <ion-badge>Killer</ion-badge>
                  </ion-item>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-item>
                    <ion-badge color="secondary">S1B</ion-badge>
                    <ion-badge color="medium" slot="end">
                      Bloodpoints
                    </ion-badge>
                  </ion-item>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-item>
                    <ion-badge color="secondary">Kills</ion-badge>
                    <ion-badge color="medium" slot="end">
                      NumberofKills
                    </ion-badge>
                  </ion-item>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-item>
                    <ion-badge color="secondary">S2B</ion-badge>
                    <ion-badge color="medium" slot="end">
                      Bloodpoints
                    </ion-badge>
                  </ion-item>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-item>
                    <ion-badge color="secondary">Total Hooks</ion-badge>
                    <ion-badge color="medium" slot="end">
                      #
                    </ion-badge>
                  </ion-item>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-item>
                    <ion-badge color="secondary">S3B</ion-badge>
                    <ion-badge color="medium" slot="end">
                      Bloodpoints
                    </ion-badge>
                  </ion-item>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-item>
                    <ion-badge color="secondary">Gens Left</ion-badge>
                    <ion-badge color="medium" slot="end">
                      #
                    </ion-badge>
                  </ion-item>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-item>
                    <ion-badge color="secondary">S4B</ion-badge>
                    <ion-badge color="medium" slot="end">
                      Bloodpoints
                    </ion-badge>
                  </ion-item>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-item>
                    <ion-badge color="secondary">Escapes</ion-badge>
                    <ion-badge color="medium" slot="end">
                      #
                    </ion-badge>
                  </ion-item>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>

          {/* // Scoreboard

            // Bloodpoints

                //Game 1            Killer//
                // S1B                //Kills
                // S2B                //Total Hooks
                // S3B                //Gens Left
                // S4B                //Escapes

                //Game 2
                // S1B ~~
            // Total Points Survivors                   //Total Killers */}
        </ion-content>
      </Host>
    );
  }
}
