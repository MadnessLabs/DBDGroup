import { Component, h, Listen, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "modal-tournament-create",
  styleUrl: "modal-tournament-create.css",
})
export class ModalTournamentCreate {
    @Event() dbdModalClose: EventEmitter;

    @Listen("fireenjinSuccess")
    onSucess() {
      this.dbdModalClose.emit();
    }
  
    closeModal(event: MouseEvent) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.dbdModalClose.emit();
    }

  render() {
    return (
      <ion-content>
        <fireenjin-form endpoint="tournaments">
          <ion-header>
            <ion-toolbar color="light">
            <ion-buttons slot="start">
            <ion-button
              color="primary"
              href="/"
              onClick={(event) => this.closeModal(event)}
            >
              <ion-icon name="arrow-back" color="primary" />
            </ion-button>
          </ion-buttons>
              <ion-title>Create Tournament</ion-title>
            </ion-toolbar>
          </ion-header>
          <fireenjin-input
            labelPosition="stacked"
            name="id"
            label="Tournament ID"
          />
          <fireenjin-input
            labelPosition="stacked"
            name="name"
            label="Tournament Name"
          />
        </fireenjin-form>
      </ion-content>
    );
  }
}
