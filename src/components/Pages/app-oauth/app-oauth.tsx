import { Build, Component, h } from "@stencil/core";
import getParameter from "../../../helpers/getParameter";

@Component({
  tag: "app-oauth",
})
export class AppOauth {
  componentDidLoad() {
    if (!Build.isBrowser) return;
    const code = getParameter("code");
    if (code) console.log(code);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <ion-title>Dead By Daylight Group</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>Login Successful!</ion-content>,
    ];
  }
}
