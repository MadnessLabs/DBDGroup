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
          The tournament is on {this.tournamentId}
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
            <h1
              style={{
                "text-align": "center",
              }}
            >
              Dead by Daylight Tournament Signup
            </h1>
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
              </ion-list>
            </fireenjin-form>
          </ion-card>
        </ion-content>
      </Host>
    );
  }
}
