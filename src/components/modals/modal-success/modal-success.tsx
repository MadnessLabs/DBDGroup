import { Component, h } from "@stencil/core";

@Component({
  tag: "modal-success",
  styleUrl: "modal-success.css",
})
export class ModalSuccess {
  render() {
    return (
      <ion-content>
        <ion-icon name="checkmark-circle" />
        <h1>Success</h1>
      </ion-content>
    );
  }
}
