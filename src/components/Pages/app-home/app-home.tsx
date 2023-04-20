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

  async googleLogin() {
    await this.auth?.withSocial("google");
  }

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
        <ion-toolbar color="light">
          <ion-buttons slot="end">
            {state?.claims?.admin && (
              <ion-button
                color="primary"
                onClick={() =>
                  this.dbdModalOpen.emit({
                    component: "modal-tournament-edit",
                    componentProps: {
                      mainTitle: "Create Tournament",
                    },
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
                style={{ textTransform: "capitalize" }}
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
                Email Login
              </ion-button>
            )}
            {!state?.session?.uid && (
              <ion-button
                style={{ textTransform: "capitalize" }}
                size="small"
                color="primary"
                onClick={() => this.googleLogin()}
              >
                Google login
              </ion-button>
            )}
          </ion-buttons>
          <ion-thumbnail
            slot="start"
            style={{
              height: "50px",
              width: "50px",
            }}
          >
            <img src="assets/icon/icon-group.png"></img>
          </ion-thumbnail>
          <ion-label>Dead By Daylight Group </ion-label>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size="12" sizeMd="6">
              <img
                src="./assets/icon/icon-group.png"
                style={{
                  margin: "15px auto",
                  display: "block",
                  maxHeight: "300px",
                  height: "30vh",
                }}
              />
            </ion-col>
            <ion-col
              size="12"
              sizeMd="6"
              class="ion-text-center ion-text-md-left"
            >
              <h2>Welcome to DeadByDaylight Group</h2>
              <ion-text>
                General tournament rule - don't be a toxic survivor/killer
              </ion-text>
            </ion-col>
          </ion-row>
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
