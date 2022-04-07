import { AuthService } from "@fireenjin/sdk";
import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "app-profile",
})
export class AppProfile {
  @Prop() userId: string;
  @Prop() auth: AuthService;

  render() {
    return (
      <ion-content>
        <ion-grid>
          <ion-row
            style={{
              "justify-content": "center",
            }}
          >
            <ion-col size="8" size-sm="2">
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
          <fireenjin-form
            fetch
            endpoint="users"
            documentId={this.userId || this.auth?.isLoggedIn?.()?.uid}
          >
            <fireenjin-input label="Name" name="name" data-fill />
          </fireenjin-form>
        </ion-grid>
      </ion-content>
    );
  }
}
