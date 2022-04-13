import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core";
import { Auth } from "firebase/auth";
import { doc, Firestore, getDoc, setDoc } from "firebase/firestore";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  @Event() dbdModalOpen: EventEmitter<{component: string; componentProps?: any; cssClass?: string;}>;

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
    this.dbdModalOpen.emit({
      component: "modal-login",
      componentProps: {}
    });
  }

  render() {
    return (
      <ion-content>
        <ion-accordion-group>
          <ion-accordion toggle-icon="arrow-down-circle">
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
                <a href="https://deadbydaylight.group/list">Tournament List</a>
              </ion-item>
              <ion-item>
                <a href="https://deadbydaylight.group/profile">Profile</a>
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
        <ion-card style={{ maxWidth: "400px", margin: "30px auto" }}>
          <h1
            style={{
              "font-family": "sans-serif",
            }}
          >
            <b>DEAD BY DAYLIGHT GROUP SIGN-UP</b>
          </h1>

          <fireenjin-form>
            <ion-list>
              <ion-item>
                <ion-label
                  style={{
                    "font-size": "20px",
                    "font-family": "sans-serif", 
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
        </ion-card>
      </ion-content>
    );
  }
}
