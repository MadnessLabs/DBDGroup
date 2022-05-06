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
  @Prop() tournamentId: any;

  @State() tournaments: any[];

  async componentDidLoad() {
    this.db.subscribe(
      { collectionName: "tournaments", orderBy: "timestamp:desc" },
      ({ docs }) => {
        this.tournaments = (docs || []).map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      }
    );
  }

  render() {
    return [
      <ion-header>
        <ion-button
                onClick={() =>
                  this.dbdModalOpen.emit({
                    component: "modal-tournament-detail",
                  })
                }
              >
                Tournament Details
              </ion-button>
        <ion-toolbar color="light">
          <ion-buttons slot="end">
            {state?.claims?.admin && (
              <ion-button
                color="primary"
                onClick={() =>
                  this.dbdModalOpen.emit({
                    component: "modal-tournament-edit",
                    componentProps: {
                      mainTitle: "Create Tournament"
                    }
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
