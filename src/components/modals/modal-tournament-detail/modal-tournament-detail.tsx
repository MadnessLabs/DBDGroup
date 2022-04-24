import { DatabaseService } from "@fireenjin/sdk";
import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "modal-tournament-detail",
  styleUrl: "modal-tournament-detail.css",
})
export class ModalTournamentDetail {
  @Prop() tournament: Tournament;
  @Prop() tournamentId: string;
  @Prop() rules: string[];
  @Prop() db: DatabaseService;

  render() {
    return (
      <ion-content>
        {(this.tournament?.rules || []).map((rule) => (
        <ion-item>
            <ion-thumbnail
              slot="start"
              style={{
                height: "25px",
                width: "25px",
              }}
            >
              <img src="./assets/icon/bloodpoint.webp" />
            </ion-thumbnail>
            <ion-label>{rule}</ion-label>
            </ion-item>
            ))}
      </ion-content>
    );
  }
}
