import { AuthService } from "@fireenjin/sdk";
import {
  Component,
  ComponentInterface,
  State,
  h,
  Listen,
  Prop,
} from "@stencil/core";
import env from "../../../helpers/env";

@Component({
  tag: "modal-login",
  styleUrl: "modal-login.css",
})
export class ModalLogin implements ComponentInterface {
  @State() formData: {
    name?: string;
    email?: string;
  } = {};

  @Prop() auth: AuthService;

  @Listen("ionInput")
  onInput(event) {
    this.formData[event.target.name] = event.target.value;
  }

  @Listen("fireenjinSubmit")
  async onSubmit() {
    let res;
    if (true === true) {
      res = await this.auth.withEmailLink(this.formData?.email, {
        url: env("url"),
        dynamicLinkDomain: env("dynamicLinkDomain"),
        iOS: {
          bundleId: "com.fireenjin.dbdgroup",
        },
        android: {
          packageName: "com.fireenjin.dbdgroup",
          installApp: false,
          minimumVersion: "12",
        },
        handleCodeInApp: true,
      });
    } else {
      res = await this.auth.withSocial("google");
    }
    console.log(res);
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
            <fireenjin-input
              label="Email"
              labelPosition="stacked"
              name="email"
              type="email"
            />
            <fireenjin-input
              label="Password"
              labelPosition="stacked"
              name="password"
              type="password"
            />
          </fireenjin-form>
        </ion-card>
      </ion-content>
    );
  }
}
