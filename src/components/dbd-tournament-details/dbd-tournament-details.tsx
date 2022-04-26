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

  @Prop() image: string =
    "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  @Prop() name: string;
  @Prop() dateTime: string;
  @Prop() rules: string[];
  @Prop() tournamentId: string;
  @Prop() db: DatabaseService;
  @Prop() tournament: Tournament;

  // @Prop() component: string;
  // @Prop() componentProps?: any;
  // @Prop() cssClass?: string;
  // @Prop() paginationEl: HTMLFireenjinPaginationElement;
  // @Prop() endpoint: string;
  // @Prop() limit: number;
  // @Prop() query: string;

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
              <h2>{this.dateTime}</h2>
              <ion-button
                onClick={() =>
                  this.dbdModalOpen.emit({
                    component: "modal-tournament-detail",
                    componentProps: {
                      tournament: this.tournament,
                      tournamentId: this.tournamentId,
                    },
                  })
                }
              >
                Tournament Details
              </ion-button>
            </ion-label>
          </ion-item>
        </ion-card>

        <ion-row
          style={{
            "flex-wrap": "wrap-reverse",
          }}
        >
          {/* <fireenjin-pagination
              ref={(el) => (this.paginationEl = el)}
              listEl={(result) => <ion-item>{result?.id}</ion-item>}
              endpoint={this.endpoint}
              limit={this.limit}
              query={this.query}
            /> */}
          <ion-col size="12" size-md="6">
            {(this.tournament?.survivors || []).map((survivor) => (
              <ion-card>
                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </ion-avatar>
                  <p>{survivor?.name || "No name given"}</p>
                </ion-item>
              </ion-card>
            ))}
          </ion-col>
          {/* <fireenjin-pagination
              ref={(el) => (this.paginationEl = el)}
              listEl={(result) => <ion-item>{result?.id}</ion-item>}
              endpoint={this.endpoint}
              limit={this.limit}
              query={this.query}
            /> */}
          <ion-col size="12" size-md="6">
            <ion-card>
              <ion-item>
                <ion-avatar slot="start">
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </ion-avatar>
                <p>KILLER</p>
              </ion-item>
            </ion-card>
          </ion-col>
        </ion-row>
      </div>
    );
  }
}
