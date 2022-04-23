import { r as registerInstance, k as Build, h } from './index-0fc14935.js';

const tournamentListCss = "app-tournament-list{display:block}";

let PageTournamentList = class {
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
    return (h("ion-content", null, h("fireenjin-search-bar", { ref: (el) => (this.filterBarEl = el), paginationEl: this.paginationEl, filters: this.filters }), h("fireenjin-pagination", { ref: (el) => (this.paginationEl = el), listEl: (result) => (h("ion-item", null, result === null || result === void 0 ? void 0 : result.id)), endpoint: this.endpoint, limit: this.limit, query: this.query })));
  }
};
PageTournamentList.style = tournamentListCss;

export { PageTournamentList as app_tournament_list };
