import { r as registerInstance, m as Build, h } from './index-1d93f1ff.js';

const tournamentListCss = "app-tournament-list{display:block}";

const PageTournamentList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("ion-content", null, h("ion-grid", null, h("ion-row", { style: {
        "justify-content": "center",
      } }, h("ion-col", { size: "8", "size-md": "2" }, h("ion-accordion-group", null, h("ion-accordion", { "toggle-icon": "arrow-down-circle" }, h("ion-item", { style: {
        "text-align": "center",
      }, slot: "header" }, h("ion-label", null, "Links")), h("ion-list", { slot: "content" }, h("ion-item", null, h("a", { href: "https://deadbydaylight.group/tournament" }, "Tournament sign-up")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/list" }, "Tournament List")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/profile" }, "Profile")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group/admin" }, "Admin")), h("ion-item", null, h("a", { href: "https://deadbydaylight.group" }, "Home")))))))), h("fireenjin-search-bar", { ref: (el) => (this.filterBarEl = el), paginationEl: this.paginationEl, filters: this.filters }), h("fireenjin-pagination", { ref: (el) => (this.paginationEl = el), listEl: (result) => (h("ion-item", null, result === null || result === void 0 ? void 0 : result.id)), endpoint: this.endpoint, limit: this.limit, query: this.query })));
  }
};
PageTournamentList.style = tournamentListCss;

export { PageTournamentList as app_tournament_list };
