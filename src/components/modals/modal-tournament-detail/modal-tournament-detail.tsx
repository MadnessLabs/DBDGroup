import { DatabaseService } from "@fireenjin/sdk";
import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { Tournament } from "../../../interfaces";

@Component({
  tag: "modal-tournament-detail",
  styleUrl: "modal-tournament-detail.css",
})
export class ModalTournamentDetail {
  @Event() dbdModalClose: EventEmitter;

  @Prop() tournament: Tournament;
  @Prop() tournamentId: string;
  @Prop() rules: string[];
  @Prop() db: DatabaseService;

  closeModal(event: MouseEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.dbdModalClose.emit();
  }

  render() {
    return (
      <ion-content>
        <ion-header>
          <ion-toolbar color="light">
            <ion-buttons slot="start">
              <ion-button
                href="/"
                onClick={(event) => this.closeModal(event)}
                color="primary"
              >
                <ion-icon name="arrow-back" color="primary" />
              </ion-button>
            </ion-buttons>
            <ion-title>Disclosure</ion-title>
          </ion-toolbar>
        </ion-header>
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
          <ion-label></ion-label>
        </ion-item>
      </ion-content>
    );
  }
}
