import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "modal-scoring",
})
export class ModalScoring {

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
          name=""
          label="" 
        >

          </fireenjin-input>
        </fireenjin-form>
      </ion-content>
    );
  }
}
