import { Build, Component, Listen, State, h } from "@stencil/core";
export class PageTournamentList {
  constructor() {
    this.filters = {};
    this.endpoint = "tournaments";
    this.limit = 24;
  }
  onSearchInput(event) {
    this.query = event.target.value;
  }
  componentDidLoad() {
    if (!(Build === null || Build === void 0 ? void 0 : Build.isBrowser))
      return;
    // Get Data
  }
  render() {
    return (h("ion-content", null,
      h("fireenjin-search-bar", { ref: (el) => (this.filterBarEl = el), paginationEl: this.paginationEl, filters: this.filters }),
      h("fireenjin-pagination", { ref: (el) => (this.paginationEl = el), listEl: (result) => (h("ion-item", null, result === null || result === void 0 ? void 0 : result.id)), endpoint: this.endpoint, limit: this.limit, query: this.query })));
  }
  static get is() { return "app-tournament-list"; }
  static get originalStyleUrls() { return {
    "$": ["tournament-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tournament-list.css"]
  }; }
  static get states() { return {
    "query": {},
    "filters": {},
    "endpoint": {},
    "limit": {}
  }; }
  static get listeners() { return [{
      "name": "ionInput",
      "method": "onSearchInput",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
