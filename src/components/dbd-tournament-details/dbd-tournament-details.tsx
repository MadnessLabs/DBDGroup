import { DatabaseService } from "@fireenjin/sdk";
import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "dbd-tournament-details",
  styleUrl: "dbd-tournament-details.css",
})
export class DbdTournamentDetails {
  @Event() dbdModalOpen: EventEmitter<{
    component?: string;
    cssClass?: string;
    componentProps?: any;
  }>;
  @Event() fireenjinShare: EventEmitter;

  @Prop() image: string =
    "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  @Prop() name: string;
  @Prop() dateTime: string;
  @Prop() rules: string[];
  @Prop() tournamentId: string;
  @Prop() db: DatabaseService;
  @Prop() tournament: Tournament;
  @Prop() timestamp: Date


  render() {
    return (
      <div>
        <ion-card>
          <ion-item>
            <ion-thumbnail
              slot="start"
              style={{
                height: "80px",
                width: "100px",
              }}
            >
              <img src={this.image} />
            </ion-thumbnail>
            <ion-label>
              <h2>{this.name}</h2>
              <h2>{this.timestamp}</h2>
              {this.rules && (
                <fireenjin-chip-bar>
                  {(this.rules || []).map((rule) => (
                    <ion-chip>{rule}</ion-chip>
                  ))}
                </fireenjin-chip-bar>
              )}
            </ion-label>
            <ion-buttons slot="end">
              <ion-button
                onClick={() =>
                  this.fireenjinShare.emit({
                    data: {
                      url:
                        window?.location?.href ||
                        "https://deadbydaylight.group",
                      text: `I entered a DBD tourney called ${
                        this.tournament?.name || "unknown"
                      } on a new app. Enter with the link so we can play together.`,
                      title: `Enter this DBD tourney with me.`,
                    },
                  })
                }
              >
                Share
              </ion-button>
            </ion-buttons>
          </ion-item>
        </ion-card>

        <ion-row
          style={{
            "flex-wrap": "wrap-reverse",
          }}
        >
          <ion-col size="12" size-md="6">
            <ion-card>
              {(this.tournament?.survivors || []).map((survivor) => (
                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </ion-avatar>
                  <p>{survivor?.name || "No name given"}</p>
                </ion-item>
              ))}
              <ion-item>
                <ion-label>
                  <h2>Searching for Survivors...</h2>
                </ion-label>
              </ion-item>
            </ion-card>
          </ion-col>
          <ion-col size="12" size-md="6">
            <ion-card>
              {(this.tournament?.killers || []).map((killer) => (
                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </ion-avatar>
                  <p>{killer?.name || "No name given"}</p>
                </ion-item>
              ))}
            </ion-card>
          </ion-col>
        </ion-row>
      </div>
    );
  }
}
