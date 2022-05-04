import { AuthService, DatabaseService } from "@fireenjin/sdk";
import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core";
import state from "../../../store";

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

  async componentWillLoad() {
    this.auth.onAuthChanged(async (session) => {
      if (session?.uid) {
        state.session = session;
        // IF LOGGED IN
        console.log(session.uid, "session.uid");
        console.log(session, "session");
        this.db.watchDocument("users", session.uid, async (snapshot) => {
          console.log(snapshot);
        });

        // Create the user a document in the database
        // Email
      } else {
        // IF LOGGED OUT
      }
    });
  }

  async componentDidLoad() {
    this.tournaments = await this.db.list("tournaments", []);
    // this.auth.withSocial("google");
    // this.auth.withEmail("a@a.com", "mypass");
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <ion-buttons slot="end">
          {state?.claims?.admin && (
                <ion-button
                  color="primary"
                  onClick={() =>
                    this.dbdModalOpen.emit({
                      component: "modal-tournament-create",  
                  })
                }
                >
                  Create
                  <ion-icon slot="end" name="create" />
                </ion-button>
              )}
            {state?.session?.uid ? (
              <ion-button
                color="primary"
                onClick={() =>
                  this.dbdModalOpen.emit({
                    component: "modal-profile",
                    componentProps: {
                      auth: this.auth,
                      userId: state?.session?.uid,
                    },
                  })
                }
              >
                Edit
                <ion-icon slot="end" color="primary" name="person" />
              </ion-button>
            ) : (
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
            )}
          </ion-buttons>
          <h2>Dead By Daylight Group</h2>
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
