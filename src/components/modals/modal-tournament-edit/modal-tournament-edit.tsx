import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "modal-tournament-edit",
  styleUrl: "modal-tournament-edit.css",
})
export class ModalTournamentEdit {
  @Prop() tournament: Tournament;
  @Prop() tournamentId: string;

  render() {
    return (
      <ion-content>
        <fireenjin-form
          fetch
          endpoint="tournaments"
          documentId={this.tournamentId}
        >
          <fireenjin-input
            labelPosition="stacked"
            data-fill
            name="name"
            label="Tournament Name"
          />
          <fireenjin-select
            labelPosition="stacked"
            data-fill
            multiple
            name="rules"
            label="Rules"
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
      </ion-content>
    );
  }
}
