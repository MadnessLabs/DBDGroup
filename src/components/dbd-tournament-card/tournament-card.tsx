import {
  Build,
  Component,
  ComponentInterface,
  h,
  Host,
  Prop,
} from "@stencil/core";

@Component({
  tag: "dbd-tournament-card",
  styleUrl: "tournament-card.css",
})
export class TournamentCard implements ComponentInterface {
  @Prop() image: string =
    "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  @Prop() name: string;
  @Prop() dateTime: string;
  @Prop() rules: string[];
  @Prop() href: string;
  @Prop() timestamp: Date;
  @Prop() status: string;

  componentDidLoad() {
    if (!Build?.isBrowser) return;
    // Get Data
  }

  render() {
    return (
      <Host>
        <ion-card>
          <ion-item href={this.href} detail>
            <ion-thumbnail
              slot="start"
              style={{
                height: "90px",
                width: "110px",
              }}
            >
              <img src={this.image} />
            </ion-thumbnail>
            <ion-label>
              <h2>{this.name || "DBD Tourney"}</h2>
              <h3>{this.timestamp}</h3>
              <h3>Status - {this.status || "TBD"}</h3>
              {this.rules && (
                <div class="ion-text-wrap">
                  {(this.rules || []).map((rule) => (
                    <ion-chip>{rule}</ion-chip>
                  ))}
                </div>
              )}
            </ion-label>
          </ion-item>
        </ion-card>
      </Host>
    );
  }
}
