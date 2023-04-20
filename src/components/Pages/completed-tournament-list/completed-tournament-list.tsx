import { DatabaseService } from "@fireenjin/sdk";
import {
  Build,
  Component,
  ComponentInterface,
  Listen,
  Prop,
  State,
  h,
} from "@stencil/core";
import { Tournament } from "../../../interfaces";

@Component({
  tag: "app-completed-tournament-list",
  styleUrl: "completed-tournament-list.css",
})
export class PageCompletedTournamentList implements ComponentInterface {
  @Prop() db: DatabaseService;

  @State() query: string;
  @State() filters: any = {};
  @State() endpoint = "tournaments";
  @State() limit = 24;
  @State() tournaments: Tournament[];

  @Listen("ionInput")
  onSearchInput(event) {
    this.query = event.target.value;
  }

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
    const where = [];
    where.push({
      key: "status",
      conditional: "==",
      value: "completed",
    });
    this.tournaments = await this.db.list("tournaments", where);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <ion-buttons slot="start">
            <ion-button color="primary" href="/">
              <ion-icon name="arrow-back" color="primary" />
            </ion-button>
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
