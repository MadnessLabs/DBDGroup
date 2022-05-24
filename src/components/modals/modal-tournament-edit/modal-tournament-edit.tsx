import { Component, Event, EventEmitter, h, Listen, Prop } from "@stencil/core";
import { Tournament } from "../../../interfaces";

@Component({
  tag: "modal-tournament-edit",
  styleUrl: "modal-tournament-edit.css",
})
export class ModalTournamentEdit {
  @Event() dbdModalClose: EventEmitter;

  @Prop() tournament: Tournament;
  @Prop() tournamentId: string;
  @Prop() mainTitle: "Create Tournament";

  @Listen("fireenjinSuccess")
  onSucess() {
    this.dbdModalClose.emit();
  }

  @Listen("fireenjinReset")
  onReset() {
    // DELETE Tournament
    if (!confirm("Are you sure you want to delete?")) return;
    console.log("TOURNAMENT DELETED!");
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
          <ion-title>{this.mainTitle}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        <ion-card>
          <fireenjin-form
            resetButtonColor="warning"
            resetButton="DELETE"
            endpoint="tournaments"
            documentId={this.tournamentId}
          >
            <fireenjin-input
              labelPosition="stacked"
              name="name"
              label="Tournament Name"
              value={this.tournament?.name}
            />
            <fireenjin-select
              labelPosition="stacked"
              data-fill
              name="status"
              label="Status"
              value={this.tournament?.status || ["open"]}
              options={[
                {
                  label: "Open",
                  value: "open",
                },
                {
                  label: "Full",
                  value: "full",
                },
                {
                  label: "In Progress",
                  value: "in progress",
                },
                {
                  label: "Completed",
                  value: "completed",
                },
              ]}
            />
            <fireenjin-input
              labelPosition="stacked"
              data-fill
              type="date"
              name="timestamp"
              label="Date"
              value={this.tournament?.timestamp}
            />
            <fireenjin-input
              labelPosition="stacked"
              type="number"
              min="1"
              name="matchCount"
              label="Tournament Match Count"
              value={this.tournament?.matchCount || 4}
            />
            <fireenjin-select-tags
              labelPosition="stacked"
              data-fill
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
