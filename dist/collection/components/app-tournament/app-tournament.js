import { Component, h, Prop, State } from '@stencil/core';
import { getDoc, doc } from 'firebase/firestore';
export class AppTournament {
  async componentDidLoad() {
    const query = await getDoc(doc(this.db, `tournaments/${this.tournamentId}`));
    this.tournament = query.data();
  }
  render() {
    var _a, _b, _c, _d;
    return (h("ion-content", null,
      "The tournament is on ",
      this.tournamentId,
      h("ion-grid", null,
        h("ion-row", null,
          h("ion-col", null,
            h("ion-card", null,
              h("ion-list", { class: "ion-no-padding" },
                h("ion-item-divider", null, "Survivors"), (_b = (_a = this.tournament) === null || _a === void 0 ? void 0 : _a.survivors) === null || _b === void 0 ? void 0 :
                _b.map(survivor => h("ion-item", null,
                  "BP: ",
                  survivor.bloodpoints))))),
          h("ion-col", null,
            h("ion-card", null,
              h("ion-list", { class: "ion-no-padding" },
                h("ion-item-divider", null, "Killers"), (_d = (_c = this.tournament) === null || _c === void 0 ? void 0 : _c.killers) === null || _d === void 0 ? void 0 :
                _d.map(killer => h("ion-item", null,
                  "KP: ",
                  killer.killerpoints))))))),
      h("ion-card", null,
        h("form", null,
          h("h1", null, "Tournament Signup"),
          h("ion-list", null,
            h("ion-item", null,
              h("ion-label", { position: "stacked" }, "Tournament Name"),
              h("ion-input", { name: "id" })),
            h("ion-button", { type: "submit" }, "Save"))))));
  }
  static get is() { return "app-tournament"; }
  static get properties() { return {
    "db": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Firestore",
        "resolved": "Firestore",
        "references": {
          "Firestore": {
            "location": "import",
            "path": "firebase/firestore"
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
  static get states() { return {
    "tournament": {}
  }; }
}
