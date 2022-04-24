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
        <ion-header>
          <ion-toolbar color="light">
            <ion-buttons slot="start">
              <ion-button href="/" color="primary">
                <ion-icon name="arrow-back" color="primary" />
              </ion-button>
            </ion-buttons>
            <ion-title>Tournament Rules</ion-title>
            </ion-toolbar>
        </ion-header>
        {(this.tournament?.rules || []).map((rule) => (
        <ion-item>
            <ion-thumbnail
              slot="start"
              style={{
                height: "25px",
                width: "25px",
              }}
            >
              <img src="/assets/icon/bloodpoint.png" />
            </ion-thumbnail>
            <ion-label>{rule}</ion-label>
            </ion-item>
            ))}
      </ion-content>
    );
  }
}
