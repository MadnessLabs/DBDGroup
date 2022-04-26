import { AuthService, DatabaseService } from "@fireenjin/sdk";
import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  @Event() dbdModalOpen: EventEmitter<{
    component: string;
    componentProps?: any;
    cssClass?: string;
  }>;

  @Prop() db: DatabaseService;
  @Prop() auth: AuthService;

  @State() tournaments: any[];

  async componentDidLoad() {
    this.tournaments = await this.db.list("tournaments", []);
    // this.auth.withSocial("google");
    this.auth.withEmail("a@a.com", "mypass");
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <ion-buttons>
          <ion-button
                color="primary"
                onClick={() =>
                  this.dbdModalOpen.emit({
                    component: "modal-login",
                    componentProps: {
                      auth: this.auth,
                    },
                  })
                }
              >
              Login
            </ion-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-button
              color="primary"
              href="https://deadbydaylight.group/user/someone"
            >
              <ion-title>Edit</ion-title>
              <ion-icon slot="end" color="primary" name="person" />
            </ion-button>
          </ion-buttons>
          <ion-title>Dead By Daylight Group</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-grid>
          <ion-row>
            {this.tournaments?.map?.((tournament) => (
              <ion-col size="12" size-md="6">
                <dbd-tournament-card
                  {...tournament}
                  href={`/tournament/${tournament?.id}`}
                />
              </ion-col>
            ))}
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
