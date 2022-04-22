import { Build, Component, h, Host, Prop, } from "@stencil/core";
export class TournamentCard {
  constructor() {
    this.image = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  }
  componentDidLoad() {
    if (!(Build === null || Build === void 0 ? void 0 : Build.isBrowser))
      return;
    // Get Data
  }
  render() {
    return (h(Host, null,
      h("ion-card", null,
        h("ion-item", { href: this.href, detail: true },
          h("ion-thumbnail", { slot: "start", style: {
              height: "90px",
              width: "110px",
            } },
            h("img", { src: this.image })),
          h("ion-label", null,
            h("h2", null, this.name || "DBD Tourney"),
            h("h3", null, this.dateTime),
            this.rules && (h("fireenjin-chip-bar", null, (this.rules || []).map((rule) => (h("ion-chip", null, rule))))))))));
  }
  static get is() { return "dbd-tournament-card"; }
  static get originalStyleUrls() { return {
    "$": ["tournament-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tournament-card.css"]
  }; }
  static get properties() { return {
    "image": {
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
      "attribute": "image",
      "reflect": false,
      "defaultValue": "\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\""
    },
    "name": {
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
      "attribute": "name",
      "reflect": false
    },
    "dateTime": {
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
      "attribute": "date-time",
      "reflect": false
    },
    "rules": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "href": {
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
      "attribute": "href",
      "reflect": false
    }
  }; }
}
