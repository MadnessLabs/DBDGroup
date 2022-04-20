import { Component, h, Host, Prop, State } from "@stencil/core";
import { getDoc, doc, Firestore } from "firebase/firestore";

@Component({
  tag: "app-tournament",
})
export class AppTournament {
  @Prop() db: Firestore;
  @Prop() tournamentId: string;

  @State() tournament: Tournament;

  async componentDidLoad() {
    const query = await getDoc(
      doc(this.db, `tournaments/${this.tournamentId}`)
    );
    this.tournament = query.data() as Tournament;
  }

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button href="/" color="primary">
                <ion-icon name="arrow-back" color="primary" />
              </ion-button>
            </ion-buttons>
            <ion-title>Tournament Page</ion-title>
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
              <ion-card>
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
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-card>
            <ion-row
              style={{
                "justify-content": "center",
              }}
            >
              <ion-col size="4" size-md="">
                <ion-item>
                  <ion-thumbnail
                    slot="start"
                    style={{
                      height: "90px",
                      width: "110px",
                    }}
                  >
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </ion-thumbnail>
                </ion-item>
              </ion-col>
              <ion-col size="7" size-md="">
                <ion-card-title> Tournament Title </ion-card-title>
                <ion-card-content> Date and Time </ion-card-content>
                <ion-card-content> TLDR Tourney Rules </ion-card-content>
              </ion-col>
              <ion-col size="1" size-md="">
                <a href="http://localhost:3333/tournament">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </ion-col>
            </ion-row>
          </ion-card>
          <dbd-tournament-details />
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
