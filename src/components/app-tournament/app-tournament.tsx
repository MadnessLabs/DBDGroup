import { Component, h, Prop, State } from "@stencil/core";
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
      <ion-content>
        The tournament is on {this.tournamentId}
        <ion-grid>
          <ion-row
            style={{
              "justify-content": "center",
            }}
          >
            <ion-col size="8" size-md="2">
              <ion-accordion-group>
                <ion-accordion value="colors" toggle-icon="arrow-down-circle">
                  <ion-item
                    style={{
                      "text-align": "center",
                    }}
                    slot="header"
                  >
                    <ion-label>Links</ion-label>
                  </ion-item>
                  <ion-list slot="content">
                    <ion-item>
                      <a href="https://deadbydaylight.group/tournament">
                        Tournament sign-up
                      </a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group/list">
                        Tournament List
                      </a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group/profile">
                        Profile
                      </a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group/admin">Admin</a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group">Home</a>
                    </ion-item>
                  </ion-list>
                </ion-accordion>
              </ion-accordion-group>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card>
                <ion-list class="ion-no-padding">
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
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card>
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
                </ion-list>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-card>
            <h1
              style={{
                "text-align": "center",
              }}
            >
              Dead by Daylight Tournament Signup
            </h1>
          </ion-card>

          <fireenjin-form
            style={{
              "max-width": "700px",
              "background-color": "var(--ion-item-background",
              "text-align": "center",
              margin: "0 auto",
            }}
          >
            <ion-list>
              <ion-item>
                <ion-label
                  style={{
                    "font-size": "20px",
                  }}
                  position="stacked"
                >
                  Tournament Name
                </ion-label>
                <ion-input name="id" />
              </ion-item>
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
                >
                  <ion-select-option value="killer">killer</ion-select-option>
                  <ion-select-option value="survivor">
                    survivor
                  </ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-label
                  style={{
                    "font-size": "20px",
                  }}
                  position="stacked"
                >
                  Skill Level
                </ion-label>
                <ion-select name="skill" okText="Okay" cancelText="Dismiss">
                  <ion-select-option value="noob">Noob</ion-select-option>
                  <ion-select-option value="casual">Casual</ion-select-option>
                  <ion-select-option value="pro">Pro</ion-select-option>/
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-label
                  style={{
                    "font-size": "20px",
                  }}
                  position="stacked"
                >
                  Available
                </ion-label>
                <ion-select okText="Okay" cancelText="Dismiss">
                  <ion-select-option>Saturday</ion-select-option>
                  <ion-select-option>Sunday</ion-select-option>
                  <ion-select-option>Both</ion-select-option>/
                </ion-select>
              </ion-item>
            </ion-list>
          </fireenjin-form>
        </ion-grid>
      </ion-content>
    );
  }
}
