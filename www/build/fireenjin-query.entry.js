import { r as registerInstance, i as createEvent, m as Build, h, o as Host } from './index-6e03bf48.js';

const Query = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    this.params = {};
  }
  async onError(event) {
    var _a;
    if (event.detail.name === this.name) {
      let result = ((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.data) || null;
      if (typeof this.error === "function")
        this.error(result);
    }
  }
  async onSuccess(event) {
    var _a;
    if (event.detail.name === this.name) {
      let result = ((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.data) || [];
      if (this.resultsKey) {
        try {
          result = this.resultsKey
            .split(".")
            .reduce((o, i) => o[i], event.detail.data);
        }
        catch (error) {
          console.log("Error getting results", event.detail, this.resultsKey);
        }
      }
      if (typeof this.success === "function")
        this.success(result);
    }
  }
  async fetch() {
    this.fireenjinFetch.emit({
      name: this.name,
      endpoint: this.endpoint,
      dataPropsMap: this.dataPropsMap ? this.dataPropsMap : null,
      params: this.params || {},
    });
  }
  componentDidLoad() {
    if (!(Build === null || Build === void 0 ? void 0 : Build.isBrowser))
      return;
    if (!this.name)
      this.name = this.endpoint;
    this.fetch();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};

export { Query as fireenjin_query };
