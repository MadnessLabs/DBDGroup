import { Component, h, Event, Host, Prop, State, } from "@stencil/core";
export class AppTournament {
  async componentDidLoad() {
    this.tournament = (await this.db.find("tournaments", this.tournamentId));
  }
  render() {
    var _a, _b, _c;
    return (h(Host, null,
      h("ion-header", null,
        h("ion-toolbar", { color: "light" },
          h("ion-buttons", { slot: "start" },
            h("ion-button", { href: "/", color: "primary" },
              h("ion-icon", { name: "arrow-back", color: "primary" }))),
          h("ion-title", { onClick: () => this.dbdModalOpen.emit({
              component: "modal-login",
            }) }, "Tournament Page"))),
      h("ion-content", null,
        h("ion-button", { onClick: () => this.dbdModalOpen.emit({
            component: "modal-tournament-edit",
            componentProps: {
              tournament: this.tournament,
              tournamentId: this.tournamentId,
            },
          }) }, "Edit"),
        h("ion-row", { style: {
            "justify-content": "center",
            padding: "0px",
          } },
          h("ion-col", { size: "12", "size-md": "4", style: {
              "text-align": "center",
              "border-color": "transparent",
            } },
            h("h1", { style: {
                "font-family": "sans-serif",
                color: "white",
              } },
              h("div", { class: "ion-text-center" },
                h("b", null, "DEAD BY DAYLIGHT TOURNAMENTS"))))),
        h("dbd-tournament-details", { name: (_a = this.tournament) === null || _a === void 0 ? void 0 : _a.name, rules: (_b = this.tournament) === null || _b === void 0 ? void 0 : _b.rules, dateTime: (_c = this.tournament) === null || _c === void 0 ? void 0 : _c.id }),
        h("ion-row", { style: {
            "justify-content": "center",
          } },
          h("ion-col", { size: "12", "size-md": "9" },
            h("ion-card", null,
              h("fireenjin-form", { onClick: (event) => this.dbdPopoverOpen.emit({
                  component: "modal-login",
                  event,
                }), style: {
                  "max-width": "750px",
                  "text-align": "center",
                  margin: "0 auto",
                } },
                h("ion-label", null,
                  h("h1", { style: {
                      "text-align": "center",
                    } }, "Dead by Daylight Tournament Signup")),
                h("ion-list", null,
                  h("ion-item", null,
                    h("ion-label", { style: {
                        "font-size": "20px",
                      }, position: "stacked" }, "E-mail"),
                    h("ion-input", null)),
                  h("ion-item", null,
                    h("ion-label", { style: {
                        "font-size": "20px",
                      }, position: "stacked" }, "Discord username"),
                    h("ion-input", null)),
                  h("ion-item", null,
                    h("ion-label", { style: {
                        "font-size": "20px",
                      }, position: "stacked" }, "Steam code"),
                    h("ion-input", { name: "number" })),
                  h("ion-item", null,
                    h("ion-label", { style: {
                        "font-size": "20px",
                      }, position: "stacked" }, "Entering as?"),
                    h("ion-select", { style: {
                        "font-size": "20px",
                      }, okText: "Okay", cancelText: "Dismiss", placeholder: "Select one" },
                      h("ion-select-option", { value: "killer" }, "Killer"),
                      h("ion-select-option", { value: "survivor" }, "Survivor")))))))))));
  }
  static get is() { return "app-tournament"; }
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
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "dbdPopoverOpen",
      "name": "dbdPopoverOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
