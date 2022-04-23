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
  }

  render() {
    return (
      <ion-content>
        <ion-grid>
          <ion-row>
            {(this.tournaments || []).map((tournament) => (
              <ion-col size="12" size-md="6">
                <dbd-tournament-card
                  href={`/tournament/${tournament?.id}`}
                  image={tournament.image}
                  name={tournament.name || "ope"}
                  rules={tournament.rules}
                />
              </ion-col>
            ))}
          </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
