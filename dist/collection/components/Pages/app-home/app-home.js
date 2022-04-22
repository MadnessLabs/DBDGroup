import { Component, Event, h, Prop, State } from "@stencil/core";
export class AppHome {
  async componentDidLoad() {
    this.tournaments = await this.db.list("tournaments", []);
    // this.auth.withSocial("google");
  }
  render() {
    return (h("ion-content", null,
      h("ion-grid", null,
        h("ion-row", null, (this.tournaments || []).map((tournament) => (h("ion-col", { size: "12", "size-md": "6" },
          h("dbd-tournament-card", { href: `/tournament/${tournament === null || tournament === void 0 ? void 0 : tournament.id}`, image: tournament.image, name: tournament.name || "ope", rules: tournament.rules })))))),
      h("ion-card", null,
        h("img", { src: "./assets/icon/icon.png" }),
        h("ion-card-header", null,
          h("ion-card-subtitle", null, "DeadByDaylight.Group"),
          h("ion-card-title", null, "Stick together, stay alive.")),
        h("ion-card-content", null, "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.")),
      h("fireenjin-pagination", { endpoint: "tournaments", listEl: (tournament) => (h("ion-card", null,
          h("img", { src: "./assets/icon/icon.png" }),
          h("ion-card-header", null,
            h("ion-card-subtitle", null, tournament === null || tournament === void 0 ? void 0 : tournament.date),
            h("ion-card-title", null, (tournament === null || tournament === void 0 ? void 0 : tournament.name) || "No Tournament Name")),
          h("ion-card-content", null, "Enter HERE"))) }),
      h("ion-card", null,
        h("img", { src: "./assets/icon/icon.png" }),
        h("ion-card-header", null,
          h("ion-card-subtitle", null, "Testing Tourney"),
          h("ion-card-title", null, "Tournament")),
        h("ion-card-content", null,
          "Enter HERE",
          h("ion-button", { href: "/tournament/test" }, "ENTER NOW")))));
  }
  static get is() { return "app-home"; }
  static get originalStyleUrls() { return {
    "$": ["app-home.css"]
  }; }
  static get styleUrls() { return {
    "$": ["app-home.css"]
  }; }
  static get properties() { return {
    "db": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "DatabaseService",
        "resolved": "DatabaseService",
        "references": {
          "DatabaseService": {
            "location": "import",
            "path": "@fireenjin/sdk"
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
    "auth": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "AuthService",
        "resolved": "AuthService",
        "references": {
          "AuthService": {
            "location": "import",
            "path": "@fireenjin/sdk"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "tournaments": {}
  }; }
  static get events() { return [{
      "method": "dbdModalOpen",
      "name": "dbdModalOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "{\r\n    component: string;\r\n    componentProps?: any;\r\n    cssClass?: string;\r\n  }",
        "resolved": "{ component: string; componentProps?: any; cssClass?: string; }",
        "references": {}
      }
    }]; }
}
