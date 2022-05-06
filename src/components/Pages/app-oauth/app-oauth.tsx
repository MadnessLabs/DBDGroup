import { Build, Component, h } from "@stencil/core";
import getParameter from "../../../helpers/getParameter";

@Component({
  tag: "app-oauth",
})
export class AppOauth {
  componentDidLoad() {
    if (!Build.isBrowser) return;
    const token = getParameter("token");
    if (token) console.log(token);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <h2>Dead By Daylight Group</h2>
        </ion-toolbar>
      </ion-header>,
      <ion-content>Login Successful!</ion-content>,
    ];
  }
}
