import { Build, Component, h, Prop } from "@stencil/core";
import getParameter from "../../../helpers/getParameter";

@Component({
  tag: "app-oauth",
})
export class AppOauth {
  @Prop() discord: boolean;

  componentDidLoad() {
    if (!Build.isBrowser) return;
    const code = getParameter("code");
    if (code)
      window.location.href = `https://us-central1-dead-by-daylight-group.cloudfunctions.net/oauth?code=${code}`;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <ion-title>Dead By Daylight Group</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        <ion-card>
          {this.discord ? (
            <ion-card-content>
              <h2>You are Logged In!</h2>
              <p>Your account is setup, you can now join a tournament.</p>
              <ion-button href="/">Tournament List</ion-button>
            </ion-card-content>
          ) : (
            <h2>Redirecting please wait...</h2>
          )}
        </ion-card>
      </ion-content>,
    ];
  }
}
