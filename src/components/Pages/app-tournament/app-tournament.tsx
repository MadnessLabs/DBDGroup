import { AuthService, DatabaseService } from "@fireenjin/sdk";
import {
  Component,
  h,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Listen,
} from "@stencil/core";
import { Match, Tournament } from "../../../interfaces";
import state from "../../../store";

@Component({
  tag: "app-tournament",
  styleUrl: "app-tournament.css",
})
export class AppTournament {
  @Event() dbdModalOpen: EventEmitter;
  @Event() dbdPopoverOpen: EventEmitter;
  @Event() fireenjinShare: EventEmitter;

  @Prop() db: DatabaseService;
  @Prop() tournamentId: string;
  @Prop() auth: AuthService;
  @Prop() userId: string;

  @State() tournament: Tournament;
  @State() users: any;
  @State() userIds: string[] = [];

  @Listen("ionChange")
  onChange(event) {
    if (
      event?.detail?.value === "on" ||
      (event?.detail?.checked && this.userIds.includes(event?.detail?.value))
    )
      return;
    this.userIds = event?.detail?.checked
      ? [...this.userIds, event.detail.value]
      : this.userIds.filter((userId) => userId !== event?.detail?.value);
  }

  async componentDidLoad() {
    this.users = await this.db.list("users", []);
    this.db.watchDocument("tournaments", this.tournamentId, ({ data }) => {
      console.log(data);
      this.tournament = data;
    });
  }

  async save() {
    return this.db.update("tournaments", this.tournamentId, this.tournament);
  }

  async start() {
    for (const [index, killer] of Object.entries(
      this.tournament?.killers || []
    )) {
      this.tournament.killers[index].participating = this.userIds.includes(
        killer?.user?.id
      );
    }
    for (const [index, survivor] of Object.entries(
      this.tournament?.survivors || []
    )) {
      this.tournament.survivors[index].participating = this.userIds.includes(
        survivor?.user?.id
      );
    }
    this.tournament.status = "full";
  }

  async enterTournament(type?: "killer" | "survivor") {
    if (state?.session?.uid) {
      const killers = (this.tournament?.killers || []).filter(
        (killer) => killer?.user?.id !== state?.session?.uid
      );
      const survivors = (this.tournament?.survivors || []).filter(
        (survivor) => survivor?.user?.id !== state?.session?.uid
      );
      if (type === "survivor") {
        survivors.push({
          user: this.db.document("users", state?.session?.uid),
          name: (state?.profile?.discordId || "").split("#")[0],
          scoring: {},
        });
      } else {
        killers.push({
          user: this.db.document("users", state?.session?.uid),
          name: (state?.profile?.discordId || "").split("#")[0],
          scoring: {},
        });
      }

      this.tournament = { ...this.tournament, killers, survivors };
      await this.db.update("tournaments", this.tournamentId, this.tournament);
      console.log(this.tournament, killers);
    } else {
      this.dbdModalOpen.emit({
        component: "modal-profile",
        componentProps: {
          headerTitle:
            type === "survivor" ? "Enter as Survivor" : "Enter as Killer",
        },
      });
    }
  }

  getUserName(userId: string) {
    const user = (this.tournament?.survivors || []).find(
      (survivor) => survivor?.user?.id === userId
    );
    return user?.name || "No Name Given";
  }

  async deleteMatch(_event, index) {
    this.tournament.matches = this.tournament.matches.filter(
      (_match, matchIndex) => matchIndex !== index
    );
    this.save();
  }

  render() {
    console.log(this.tournament?.matches);
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="light">
            <ion-buttons slot="start">
              <ion-button href="/" color="primary">
                <ion-icon name="arrow-back" color="primary" />
              </ion-button>
            </ion-buttons>
            Tournament Page
            <ion-buttons slot="end">
              {state?.claims?.admin && (
                <ion-button
                  color="primary"
                  onClick={() =>
                    this.dbdModalOpen.emit({
                      component: "modal-scoring",
                      componentProps: {
                        tournament: this.tournament,
                        tournamentId: this.tournamentId,
                      },
                    })
                  }
                >
                  Score
                </ion-button>
              )}
              {state?.claims?.admin && (
                <ion-button
                  color="primary"
                  onClick={() =>
                    this.dbdModalOpen.emit({
                      component: "modal-tournament-edit",
                      componentProps: {
                        tournament: this.tournament,
                        tournamentId: this.tournamentId,
                        mainTitle: "Edit Tournament",
                      },
                    })
                  }
                >
                  Edit
                  <ion-icon slot="end" name="create" />
                </ion-button>
              )}
              {state?.claims?.admin && (
                <ion-button color="primary" onClick={() => this.start()}>
                  Start
                  <ion-icon slot="start" name="start" />
                </ion-button>
              )}
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-row
            style={{
              "justify-content": "center",
              padding: "0px",
            }}
          >
            <ion-col
              size="12"
              size-md="4"
              style={{
                "text-align": "center",
              }}
            >
              <h1>DEAD BY DAYLIGHT TOURNAMENTS</h1>
            </ion-col>
          </ion-row>
          <ion-card>
            <ion-item>
              <ion-thumbnail
                slot="start"
                style={{
                  height: "80px",
                  width: "100px",
                }}
              >
                <img
                  src={
                    this.tournament?.image ||
                    "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                  }
                />
              </ion-thumbnail>
              <ion-label>
                <h2>{this.tournament?.name || "No Name Given"}</h2>
                <h2>{this.tournament?.timestamp || "No Date Set"}</h2>
                <h2> Status - {this.tournament?.status}</h2>
                {this.tournament?.rules && (
                  <fireenjin-chip-bar>
                    {(this.tournament?.rules || []).map((rule) => (
                      <ion-chip>{rule}</ion-chip>
                    ))}
                  </fireenjin-chip-bar>
                )}
              </ion-label>
              <ion-buttons slot="end">
                <ion-button
                  onClick={() =>
                    this.fireenjinShare.emit({
                      data: {
                        url:
                          window?.location?.href ||
                          "https://deadbydaylight.group",
                        text: `I entered a DBD tourney called ${
                          this.tournament?.name || "unknown"
                        } on a new app. Enter with the link so we can play together.`,
                        title: `Enter this DBD tourney with me.`,
                      },
                    })
                  }
                >
                  Share
                </ion-button>
              </ion-buttons>
            </ion-item>
          </ion-card>

          <ion-row
            style={{
              "flex-wrap": "wrap-reverse",
            }}
          >
            <ion-col size="12" size-md="6">
              <ion-card>
                {(this.tournament?.survivors || []).map((survivor) => (
                  <ion-item disabled={this.tournament?.status !== "open"}>
                    <ion-avatar slot="start">
                      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                    </ion-avatar>
                    <ion-label>
                      <ion-title>
                        {survivor?.name || "No name given"}
                      </ion-title>
                      <ion-chip style={{
                        "padding":"20px"
                      }}>
                        <ion-label style={{
                          "text-align":"center",
                          "line-height":"20px"
                        }}>Bloodpoints<br></br>
                        {survivor?.scoring?.bloodpoints}</ion-label>
                      </ion-chip>
                    </ion-label>
                    <ion-checkbox slot="end" value={survivor?.user?.id} />
                  </ion-item>
                ))}
                <ion-item>
                  <ion-label>
                    <h2>Searching for Survivors...</h2>
                  </ion-label>
                </ion-item>
              </ion-card>
            </ion-col>
            <ion-col size="12" size-md="6">
              <ion-card>
                {(this.tournament?.killers || []).map((killer) => (
                  <ion-item disabled={this.tournament?.status !== "open"}>
                    <ion-avatar slot="start">
                      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                    </ion-avatar>
                    <ion-label text-wrap class="ion-text-wrap">
                      <ion-title>
                        {killer?.name || "No Killer Name"}
                      </ion-title>
                      <ion-list>
                      <ion-chip style={{
                        "padding":"20px"
                      }}>
                        <ion-label style={{
                          "text-align":"center",
                          "line-height":"20px"
                        }}>Kills<br></br>
                        {killer?.scoring?.kills}</ion-label>
                      </ion-chip>
                      <ion-chip style={{
                        "padding":"20px"
                      }}>
                        <ion-label style={{
                          "text-align":"center",
                          "line-height":"20px"
                        }}>
                          Generators Left<br></br>
                        {killer?.scoring?.generatorsLeft}</ion-label>
                      </ion-chip>
                      <ion-chip style={{
                        "padding":"20px"
                      }}>
                        <ion-label style={{
                          "text-align":"center",
                          "line-height":"20px"
                        }}>Escapes<br></br>
                        {killer?.scoring?.escapes}</ion-label>
                      </ion-chip>
                      <ion-chip style={{
                        "padding":"20px"
                      }}>
                        <ion-label style={{
                          "text-align":"center",
                          "line-height":"20px"
                        }}>
                          <b>Score</b><br></br>
                        ??</ion-label>
                      </ion-chip>
                      </ion-list>
                    </ion-label>
                    <ion-checkbox slot="end" value={killer?.user?.id} />
                  </ion-item>
                ))}
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-grid>
            <ion-row>
              <ion-col size="6">
                <ion-button
                  disabled={this.tournament?.status !== "open"}
                  expand="block"
                  onClick={() => this.enterTournament("survivor")}
                >
                  Enter as Survivor
                </ion-button>
              </ion-col>
              <ion-col size="6">
                <ion-button
                  disabled={this.tournament?.status !== "open"}
                  expand="block"
                  fill="outline"
                  onClick={() => this.enterTournament("killer")}
                >
                  Enter as Killer
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-card>
              <ion-row style={{ "justify-content": "center" }}>
                <ion-text>
                  <ion-title>
                    Matches 0/{this.tournament?.matchCount || 0}
                  </ion-title>
                </ion-text>
              </ion-row>
              <ion-row>
                <ion-col>
                  {(this.tournament?.matches || []).map(
                    (game: Match, index) => (
                      <ion-grid>
                        <ion-row>
                          <ion-col>
                            <ion-item>
                              <ion-label>
                                <h1>
                                  {game?.timestamp
                                    ? game.timestamp
                                        .toDate()
                                        .toLocaleDateString()
                                    : "No Date"}
                                </h1>
                              </ion-label>
                              <ion-button
                                slot="end"
                                color="primary"
                                fill="clear"
                                onClick={(event) =>
                                  this.deleteMatch(event, index)
                                }
                              >
                                <ion-icon
                                  name="remove-circle"
                                  slot="icon-only"
                                />
                              </ion-button>
                            </ion-item>
                          </ion-col>
                        </ion-row>
                        <ion-row
                          style={{
                            "flex-wrap": "wrap-reverse",
                          }}
                        >
                          <ion-col size="12" size-md="6">
                            <ion-title>Survivor</ion-title>
                            {Object.keys(game?.scoring?.survivor || {}).map(
                              (userId) => {
                                const scoring =
                                  game?.scoring?.survivor?.[userId] || {};
                                return (
                                  <ion-item>
                                    <ion-label>
                                      <ion-title>
                                        {this.getUserName(userId)}
                                      </ion-title>
                                      <ion-chip>
                                        {scoring.bloodpoints || "0"} Bloodpoints
                                      </ion-chip>
                                    </ion-label>
                                  </ion-item>
                                );
                              }
                            )}
                          </ion-col>
                          <ion-col size="12" size-md="6">
                            <ion-title>Killer</ion-title>
                            {Object.keys(game?.scoring?.killer || {}).map(
                              (userId) => {
                                const scoring =
                                  game?.scoring?.killer?.[userId] || {};
                                return (
                                  <ion-item>
                                    <ion-label>
                                      <ion-title>
                                        {this.getUserName(userId)}
                                      </ion-title>
                                      <ion-chip>
                                        {scoring.kills || "0"} Kills
                                      </ion-chip>
                                      <ion-chip>
                                        {scoring.generatorsLeft || "0"}{" "}
                                        Generators Left
                                      </ion-chip>
                                      <ion-chip>
                                        {scoring.escapes || "0"} Escapes
                                      </ion-chip>
                                    </ion-label>
                                  </ion-item>
                                );
                              }
                            )}
                          </ion-col>
                        </ion-row>
                      </ion-grid>
                    )
                  )}
                </ion-col>
              </ion-row>
            </ion-card>
          </ion-grid>
        </ion-content>
      </Host>
    );
  }
}
