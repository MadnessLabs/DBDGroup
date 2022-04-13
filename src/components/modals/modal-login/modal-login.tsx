import { Component, ComponentInterface, State, h, Listen } from "@stencil/core";

@Component({
  tag: "modal-login",
  styleUrl: "modal-login.css",
})
export class ModalLogin implements ComponentInterface {
  @State() formData: {
    name?: string;
    email?: string;
  } = {};

  @Listen("ionInput")
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }

  render() {
    return (
      <ion-content>
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
