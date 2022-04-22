import { Component, h } from "@stencil/core";
import { toastController } from "@ionic/core";
export class AppList {
  async presentToast(_event) {
    const toast = await toastController.create({
      message: "Help yourself you fuck!",
      duration: 2000,
    });
    toast.present();
  }
  render() {
    return (h("ion-content", null,
      h("ion-grid", null,
        h("ion-row", { style: {
            "justify-content": "center",
            padding: "0px",
          } },
          h("ion-col", { size: "8", "size-md": "2" },
            h("ion-accordion-group", null,
              h("ion-accordion", { "toggle-icon": "arrow-down-circle" },
                h("ion-item", { style: {
                    "text-align": "center",
                  }, slot: "header" },
                  h("ion-label", null, "Links")),
                h("ion-list", { slot: "content" },
                  h("ion-item", null,
                    h("a", { href: "https://deadbydaylight.group/tournament" }, "Tournament sign-up")),
                  h("ion-item", null,
                    h("a", { href: "https://deadbydaylight.group/list" }, "Tournament List")),
                  h("ion-item", null,
                    h("a", { href: "https://deadbydaylight.group/profile" }, "Profile")),
                  h("ion-item", null,
                    h("a", { href: "https://deadbydaylight.group/admin" }, "Admin")),
                  h("ion-item", null,
                    h("a", { href: "https://deadbydaylight.group" }, "Home"))))))),
        h("ion-row", { style: {
            "justify-content": "center",
            padding: "0px",
          } },
          h("ion-col", { size: "12", "size-md": "4", style: {
              "text-align": "center",
              "border-color": "transparent",
            } },
            h("ion-card", { style: {
                opacity: ".6",
              } },
              h("h1", { style: {
                  "font-family": "sans-serif",
                  color: "white",
                } },
                h("div", { class: "ion-text-center" },
                  h("b", null, "DEAD BY DAYLIGHT TOURNAMENTS")))))),
        h("ion-row", null,
          h("ion-col", { size: "12", "size-md": "8" },
            h("ion-card", null,
              h("ion-card-header", null,
                h("ion-row", null,
                  h("ion-col", null,
                    h("ion-card-title", null, " Tournament Title ")),
                  h("ion-row", null,
                    h("ion-row", null,
                      h("ion-card-content", null, " Date and Time "))),
                  h("ion-card-content", null, " TLDR Tourney Rules "),
                  h("ion-item", null,
                    h("a", { href: "http://localhost:3333/tournament" },
                      h("ion-icon", { name: "chevron-forward-outline" })))))))))));
  }
  static get is() { return "app-list"; }
  static get originalStyleUrls() { return {
    "$": ["app-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["app-list.css"]
  }; }
}
