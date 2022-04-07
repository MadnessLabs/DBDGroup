import { Component, h, Listen, Prop, State } from "@stencil/core";
import { Auth } from "firebase/auth";
import { doc, Firestore, getDoc, setDoc } from "firebase/firestore";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  @State() formData: {
    name?: string;
    email?: string;
  } = {};

  @Prop() db: Firestore;
  @Prop() auth: Auth;

  @Listen("submit")
  onSubmit() {
    setDoc(doc(this.db, `users/${this.auth.currentUser.uid}`), this.formData, {
      merge: true,
    });
  }

  @Listen("ionInput")
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }

  async componentDidLoad() {
    if (!this.auth?.currentUser?.uid) return;
    const query = await getDoc(
      doc(this.db, `users/${this.auth.currentUser.uid}`)
    );
    this.formData = query.data();
  }

  render() {
    return (
      <ion-content>
        <ion-grid class="ion-no-padding">
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
                      <a href="https://deadbydaylight.group/admin">
                        Admin
                      </a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group">
                        Home
                      </a>
                    </ion-item>
                  </ion-list>
                </ion-accordion>
              </ion-accordion-group>
            </ion-col>
          </ion-row>
          <ion-row
            style={{
              "justify-content": "center",
            }}
          >
            <ion-col
              size="10"
              size-md="4"
              style={{
                "text-align": "center",
              }}
            >
              <ion-card
                style={{
                  opacity: ".6",
                  "border-style": "ridge",
                  "border-color": "#7a7a79",
                }}
              >
                <h1
                  style={{
                    "font-family": "sans-serif",
                    color: "white",
                  }}
                >
                  <b>DEAD BY DAYLIGHT GROUP SIGN-UP</b>
                </h1>
              </ion-card>
              <fireenjin-form>
                <ion-list>
                  <ion-item>
                    <ion-label
                      style={{
                        "font-size": "20px",
                        "font-family": "sans-serif",
                        color: "white",
                      }}
                      position="floating"
                    >
                      <b>Name</b>
                    </ion-label>
                    <ion-input name="name" value={this.formData?.name} />
                  </ion-item>
                  <ion-item>
                    <ion-label
                      style={{
                        "font-size": "20px",
                        "font-family": "sans-serif",
                      }}
                      position="floating"
                    >
                      <b>E-mail</b>
                    </ion-label>
                    <ion-input name="email" value={this.formData?.email} />
                  </ion-item>
                </ion-list>
              </fireenjin-form>
              <img id="bLogo" src="/assets/dbdlogoblack.png"></img>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
