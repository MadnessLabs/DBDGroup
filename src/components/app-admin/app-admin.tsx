import { Component, h, Listen, Prop, State } from "@stencil/core";
import { Auth } from "firebase/auth";
import { setDoc, doc, Firestore } from "firebase/firestore";

@Component({
  tag: "app-admin",
  styleUrl: "app-admin.css",
})
export class AppAdmin {
  @Prop() db: Firestore;
  @Prop() auth: Auth;

  @State() formData: Tournament = {
    survivors: [],
    killers: [],
  };

  @Listen("ionInput")
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }

  @Listen("submit")
  onSubmit() {
    const timestamp = new Date();
    const id =
      this.formData?.id ||
      `${timestamp.getFullYear()}-${timestamp.getMonth() + 1}`;
    setDoc(
      doc(this.db, `tournaments/${id}`),
      { ...this.formData, id },
      {
        merge: true,
      }
    );
  }

  render() {
    return (
      <ion-content>
        <ion-grid>
          <ion-row
            style={{
              "justify-content": "center",
            }}
          >
            <ion-col size="2">
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
                  <ion-item-divider>Survivors</ion-item-divider>
                  {this.formData?.survivors?.map((survivor) => (
                    <ion-item>BP: {survivor.bloodpoints}</ion-item>
                  ))}
                </ion-list>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card>
                <ion-list class="ion-no-padding">
                  <ion-item-divider>Killers</ion-item-divider>
                  {this.formData?.killers?.map((killer) => (
                    <ion-item>KP: {killer.killerpoints}</ion-item>
                  ))}
                </ion-list>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid>
          <ion-row>
            <ion-col size="4">
              <div>
                <img
                  src="/assets/Dwight.png"
                  style={{
                    "margin-left": "100px",
                    "margin-top": "80px",
                  }}
                  height={600}
                  width={300}
                ></img>
              </div>
            </ion-col>
            <ion-col>
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
                    <ion-label position="stacked">Tournament Name</ion-label>
                    <ion-input name="id" />
                  </ion-item>
                  <ion-item>
                    <ion-label
                      style={{
                        "font-size": "20px",
                      }}
                      position="stacked"
                    >
                      Days
                    </ion-label>
                    <ion-select name="Days" okText="Okay" cancelText="Dismiss">
                      <ion-select-option value="Saturday">
                        Saturday
                      </ion-select-option>
                      <ion-select-option value="Sunday">
                        Sunday
                      </ion-select-option>
                      <ion-select-option value="Both">Both</ion-select-option>/
                    </ion-select>
                  </ion-item>
                  <ion-item>
                    <ion-label
                      style={{
                        "font-size": "20px",
                      }}
                      position="stacked"
                    >
                      Items
                    </ion-label>
                    <ion-select name="Items" okText="Okay" cancelText="Dismiss">
                      <ion-select-option value=""></ion-select-option>
                    </ion-select>
                  </ion-item>
                  <ion-item>
                    <ion-label
                      style={{
                        "font-size": "20px",
                      }}
                      position="stacked"
                    >
                      Perks
                    </ion-label>
                    <ion-select name="Perks" okText="Okay" cancelText="Dismiss">
                      <ion-select-option value=""></ion-select-option>
                    </ion-select>
                  </ion-item>
                  <ion-item>
                    <ion-label
                      style={{
                        "font-size": "20px",
                      }}
                      position="stacked"
                    >
                      Maps
                    </ion-label>
                    <ion-select name="Maps" okText="Okay" cancelText="Dismiss">
                      <ion-select-option value=""></ion-select-option>
                    </ion-select>
                  </ion-item>
                  <ion-item>
                    <ion-label
                      style={{
                        "font-size": "20px",
                      }}
                      position="stacked"
                    >
                      Survivors
                    </ion-label>
                    <ion-input type="number" value="8"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label
                      style={{
                        "font-size": "20px",
                      }}
                      position="stacked"
                    >
                      Killers
                    </ion-label>
                    <ion-input type="number" value="2"></ion-input>
                  </ion-item>
                </ion-list>
              </fireenjin-form>
            </ion-col>
            <ion-col size="4">
              <div>
                <img src="/assets/Huntress.png" height={700} width={500}></img>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
