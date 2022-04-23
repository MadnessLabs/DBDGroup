import { Component, Event, EventEmitter, h, Listen, Prop } from "@stencil/core";

@Component({
  tag: "modal-tournament-edit",
  styleUrl: "modal-tournament-edit.css",
})
export class ModalTournamentEdit {
  @Event() dbdModalClose: EventEmitter;

  @Prop() tournament: Tournament;
  @Prop() tournamentId: string;

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
    return [
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
          <ion-title>Edit Tournament</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        <ion-card>
          <fireenjin-form endpoint="tournaments" documentId={this.tournamentId}>
            <fireenjin-input
              labelPosition="stacked"
              name="name"
              label="Tournament Name"
              value={this.tournament?.name}
            />
            <fireenjin-select
              labelPosition="stacked"
              data-fill
              multiple
              name="rules"
              label="Rules"
              value={this.tournament?.rules || []}
              options={[
                {
                  label: "No Items",
                  value: "no items",
                },
                {
                  label: "No Offerings",
                  value: "no offerings",
                },
                {
                  label: "No Keys",
                  value: "no keys",
                },
                {
                  label: "No Iridescent Items",
                  value: "no iridescent items",
                },
                {
                  label: "Killer Picks Map",
                  value: "killer picks map",
                },
                {
                  label: "Random Maps",
                  value: "random maps",
                },
              ]}
            />
          </fireenjin-form>
        </ion-card>
      </ion-content>,
    ];
  }
}
