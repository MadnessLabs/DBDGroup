'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const tournamentListCss = "app-tournament-list{display:block}";

const PageTournamentList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.filters = {};
    this.endpoint = "tournaments";
    this.limit = 24;
  }
  onSearchInput(event) {
    this.query = event.target.value;
  }
  componentDidLoad() {
    if (!(index.Build === null || index.Build === void 0 ? void 0 : index.Build.isBrowser))
      return;
    // Get Data
  }
  render() {
    return (index.h("ion-content", null, index.h("fireenjin-search-bar", { ref: (el) => (this.filterBarEl = el), paginationEl: this.paginationEl, filters: this.filters }), index.h("fireenjin-pagination", { ref: (el) => (this.paginationEl = el), listEl: (result) => (index.h("ion-item", null, result === null || result === void 0 ? void 0 : result.id)), endpoint: this.endpoint, limit: this.limit, query: this.query })));
  }
};
PageTournamentList.style = tournamentListCss;

exports.app_tournament_list = PageTournamentList;
