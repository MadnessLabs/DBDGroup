import { Build, Component, h, Prop } from "@stencil/core";

@Component({
  tag: "dbd-tournament-details",
  styleUrl: "dbd-tournament-details.css",
})
export class DbdTournamentDetails {
  @Prop() image: string =
    "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  @Prop() name: string;
  @Prop() dateTime: string;
  @Prop() rules: string[];
  // @Prop() component: string;
  // @Prop() componentProps?: any;
  // @Prop() cssClass?: string;
  // @Prop() paginationEl: HTMLFireenjinPaginationElement;
  // @Prop() endpoint: string;
  // @Prop() limit: number;
  // @Prop() query: string;

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
  }

  render() {
    return (
      <div>
        <ion-card>
          <ion-item>
            <ion-thumbnail
              slot="start"
              style={{
                height: "80px",
                width: "100px",
              }}
            >
              <img src={this.image} />
            </ion-thumbnail>
            <ion-label>
              <h2>{this.name}</h2>
              <h2>{this.dateTime}</h2>
              <ion-button id="trigger-button">Tournament Details</ion-button>
              {(this.rules || []).find((rule) => (
                <ion-popover trigger="trigger-button">
                  <ul>
                    <li>{rule}</li>
                  </ul>
                </ion-popover>
              ))}
            </ion-label>
          </ion-item>
        </ion-card>

        <ion-row
          style={{
            "flex-wrap": "wrap-reverse",
          }}
        >
          {/* <fireenjin-pagination
              ref={(el) => (this.paginationEl = el)}
              listEl={(result) => <ion-item>{result?.id}</ion-item>}
              endpoint={this.endpoint}
              limit={this.limit}
              query={this.query}
            /> */}
          <ion-col size="12" size-md="6">
            <ion-card>
              <ion-item>
                <ion-avatar slot="start">
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </ion-avatar>
                <p>SURVIVOR</p>
              </ion-item>
            </ion-card>
            <ion-card>
              <ion-item>
                <ion-avatar slot="start">
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </ion-avatar>
                <p>SURVIVOR</p>
              </ion-item>
            </ion-card>
            <ion-card>
              <ion-item>
                <ion-avatar slot="start">
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </ion-avatar>
                <p>SURVIVOR</p>
              </ion-item>
            </ion-card>
            <ion-card>
              <ion-item>
                <ion-avatar slot="start">
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </ion-avatar>
                <p>SURVIVOR</p>
              </ion-item>
            </ion-card>
          </ion-col>
          {/* <fireenjin-pagination
              ref={(el) => (this.paginationEl = el)}
              listEl={(result) => <ion-item>{result?.id}</ion-item>}
              endpoint={this.endpoint}
              limit={this.limit}
              query={this.query}
            /> */}
          <ion-col size="12" size-md="6">
            <ion-card>
              <ion-item>
                <ion-avatar slot="start">
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </ion-avatar>
                <p>KILLER</p>
              </ion-item>
            </ion-card>
          </ion-col>
        </ion-row>
      </div>
    );
  }
}
