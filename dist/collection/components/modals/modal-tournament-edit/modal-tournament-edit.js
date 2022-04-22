import { Component, h, Prop } from "@stencil/core";
export class ModalTournamentEdit {
  render() {
    return (h("ion-content", null,
      h("fireenjin-form", { fetch: true, endpoint: "tournaments", documentId: this.tournamentId },
        h("fireenjin-input", { labelPosition: "stacked", "data-fill": true, name: "name", label: "Tournament Name" }),
        h("fireenjin-select", { labelPosition: "stacked", "data-fill": true, multiple: true, name: "rules", label: "Rules", options: [
            {
              label: "No Items",
              value: "no items",
            },
            {
              label: "No Offerings",
              value: "no offerings",
            },
          ] }))));
  }
  static get is() { return "modal-tournament-edit"; }
  static get originalStyleUrls() { return {
    "$": ["modal-tournament-edit.css"]
  }; }
  static get styleUrls() { return {
    "$": ["modal-tournament-edit.css"]
  }; }
  static get properties() { return {
    "tournament": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Tournament",
        "resolved": "{ id?: string; survivors?: Survivor[]; name?: string; rules?: string[]; killers?: { user: User; killerpoints: number; generatorsLeft: number; hooks: number; kills: number; survivorsEscaped: number; }[]; }",
        "references": {
          "Tournament": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "tournamentId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "tournament-id",
      "reflect": false
    }
  }; }
}
