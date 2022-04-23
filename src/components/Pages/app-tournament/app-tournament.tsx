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
})
export class AppTournament {
  @Event() dbdModalOpen: EventEmitter;
  @Event() dbdPopoverOpen: EventEmitter;

  @Prop() db: DatabaseService;
  @Prop() tournamentId: string;

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
            <ion-title
              onClick={() =>
                this.dbdModalOpen.emit({
                  component: "modal-login",
                })
              }
            >
              Tournament Page
            </ion-title>
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
                "border-color": "transparent",
              }}
            >
              <h1
                style={{
                  "font-family": "sans-serif",
                  color: "white",
                }}
              >
                <div class="ion-text-center">
                  <b>DEAD BY DAYLIGHT TOURNAMENTS</b>
                </div>
              </h1>
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
                {/* <ion-list class="ion-no-padding">
              <ion-item-divider
                style={{
                  "text-align": "center",
                  "font-size": "30px",
                }}
                color="success"
              >
                Survivor
              </ion-item-divider>
              {this.tournament?.survivors?.map((survivor) => (
                <ion-item>BP: {survivor.bloodpoints}</ion-item>
              ))}
            </ion-list>

            <ion-list class="ion-no-padding">
              <ion-item-divider
                style={{
                  "text-align": "center",
                  "font-size": "30px",
                }}
                color="danger"
              >
                Killer
              </ion-item-divider>
              {this.tournament?.killers?.map((killer) => (
                <ion-item>KP: {killer.killerpoints}</ion-item>
              ))}
            </ion-list> */}
                <fireenjin-form
                  onClick={(event) =>
                    this.dbdPopoverOpen.emit({
                      component: "modal-login",
                      event,
                    })
                  }
                  style={{
                    "max-width": "750px",
                    "text-align": "center",
                    margin: "0 auto",
                  }}
                >
                  <ion-label>
                    <h1
                      style={{
                        "text-align": "center",
                      }}
                    >
                      Dead by Daylight Tournament Signup
                    </h1>
                  </ion-label>
                  <ion-list>
                    <ion-item>
                      <ion-label
                        style={{
                          "font-size": "20px",
                        }}
                        position="stacked"
                      >
                        E-mail
                      </ion-label>
                      <ion-input />
                    </ion-item>
                    <ion-item>
                      <ion-label
                        style={{
                          "font-size": "20px",
                        }}
                        position="stacked"
                      >
                        Discord username
                      </ion-label>
                      <ion-input />
                    </ion-item>
                    <ion-item>
                      <ion-label
                        style={{
                          "font-size": "20px",
                        }}
                        position="stacked"
                      >
                        Steam code
                      </ion-label>
                      <ion-input name="number" />
                    </ion-item>
                    <ion-item>
                      <ion-label
                        style={{
                          "font-size": "20px",
                        }}
                        position="stacked"
                      >
                        Entering as?
                      </ion-label>
                      <ion-select
                        style={{
                          "font-size": "20px",
                        }}
                        okText="Okay"
                        cancelText="Dismiss"
                        placeholder="Select one"
                      >
                        <ion-select-option value="killer">
                          Killer
                        </ion-select-option>
                        <ion-select-option value="survivor">
                          Survivor
                        </ion-select-option>
                      </ion-select>
                    </ion-item>
                  </ion-list>
                </fireenjin-form>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-content>
      </Host>
    );
  }
}
