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
        <ion-grid>
          <ion-row>
            <ion-col size="4">
            <div>
                <img src="/assets/dbdtrees1.png"
                 style={{
                    "margin-left":"-10px",
                    "margin-top":"-10px"
                }}
                height={1050}
                width={650}
                ></img>
              </div>
            </ion-col>
            <ion-col>
        <ion-card
        style={{
          "opacity":".6",
          "border-style":"ridge",
          "border-color":"#7a7a79"
        }}>
          <h1
            style={{
              "text-align": "center",
              "font-family": "sans-serif",
              color: "white",
            }}
          >
            <b>DEAD BY DAYLIGHT GROUP SIGN-UP</b>
          </h1>
        </ion-card>
        <fireenjin-form
          style={{
            "max-width": "700px",
            "background-color": "#3d0105",
            "text-align": "center",
            margin: "0 auto",
            "font-family": "sans-serif",
            "opacity":".6",
            "border-style":"ridge",
            "border-color":"#7a7a79"
          }}
        >
          <ion-list>
            <ion-item>
              <ion-label
                style={{
                  "text-align": "center",
                  "font-family": "sans-serif",
                  color: "white",
                }}
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
                position="stacked"
              >
                <b>E-mail</b>
              </ion-label>
              <ion-input name="email" value={this.formData?.email} />
            </ion-item>
          </ion-list>
        </fireenjin-form>
        <div>
                <img src="/assets/dbdlogoblack.png"
                 style={{
                  "margin-left":"200px",
                  "margin-top":"450px",
              }}
              height={250}
              width={270}
                ></img>
              </div>
        </ion-col>
        <ion-col size="4">
        <div>
                <img src="/assets/dbdtrees.png"
                 style={{
                  "margin-left":"20px",
                  "margin-top":"-10px"
              }}
              height={1050}
              width={650}
                ></img>
              </div>
        </ion-col>
        </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
