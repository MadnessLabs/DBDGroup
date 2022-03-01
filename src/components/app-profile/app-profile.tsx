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
        <fireenjin-form
          fetch
          endpoint="users"
          documentId={this.userId || this.auth?.isLoggedIn?.()?.uid}
        >
          <fireenjin-input label="Name" name="name" data-fill />
        </fireenjin-form>
      </ion-content>
    );
  }
}
