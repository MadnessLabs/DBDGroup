import { r as registerInstance, i as createEvent, m as Build, h } from './index-6e03bf48.js';

const radiosCss = "";

const Radios = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    this.disabled = false;
    this.allowEmptySelection = false;
    this.lines = "none";
    this.labelPosition = "stacked";
    this.limit = 15;
    this.radioSlot = "start";
    this.results = [];
  }
  onSuccess(event) {
    var _a, _b, _c;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.name) !== "radios" ||
      event.detail.endpoint !== this.endpoint)
      return;
    this.results = ((_c = (_b = event === null || event === void 0 ? void 0 : event.detail) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.results)
      ? event.detail.data.results
      : [];
    setTimeout(() => {
      this.value = this.value;
    }, 200);
  }
  fetchData() {
    if (!this.endpoint)
      return;
    this.fireenjinFetch.emit({
      name: "radios",
      endpoint: this.endpoint,
      dataPropsMap: this.dataPropsMap
        ? this.dataPropsMap
        : this.resultsKey
          ? { [this.resultsKey]: "results" }
          : null,
      params: Object.assign({ data: Object.assign(Object.assign(Object.assign({}, (this.query ? { query: this.query } : {})), (this.orderBy ? { orderBy: this.orderBy } : {})), { limit: this.limit ? this.limit : 15 }) }, (this.params ? this.params : {})),
    });
  }
  componentWillLoad() {
    if (!Build.isBrowser)
      return;
    this.fetchData();
  }
  render() {
    return (h("ion-list", null, h("ion-radio-group", { name: this.name, value: this.value, allowEmptySelection: this.allowEmptySelection }, h("ion-list-header", { position: this.labelPosition }, this.label), (this.options ? this.options : []).map((option) => this.optionEl ? (this.optionEl(option)) : (h("ion-item", { lines: this.lines }, h("ion-label", null, (option === null || option === void 0 ? void 0 : option.label) || (option === null || option === void 0 ? void 0 : option.value)), h("ion-radio", { mode: this.mode, color: (option === null || option === void 0 ? void 0 : option.color) || this.color, disabled: this.disabled || option.disabled, slot: (option === null || option === void 0 ? void 0 : option.slot) || this.radioSlot, value: (option === null || option === void 0 ? void 0 : option.value) || null })))), (this.results ? this.results : []).map((result) => this.optionEl ? (this.optionEl(result)) : (h("ion-item", { lines: this.lines }, h("ion-label", null, (result === null || result === void 0 ? void 0 : result.label) || (result === null || result === void 0 ? void 0 : result.name) || (result === null || result === void 0 ? void 0 : result.value) || (result === null || result === void 0 ? void 0 : result.id)), h("ion-radio", { mode: this.mode, color: (result === null || result === void 0 ? void 0 : result.color) || this.color, disabled: this.disabled || (result === null || result === void 0 ? void 0 : result.disabled), slot: (result === null || result === void 0 ? void 0 : result.slot) || this.radioSlot, value: (result === null || result === void 0 ? void 0 : result.value) || (result === null || result === void 0 ? void 0 : result.id) || null })))))));
  }
};
Radios.style = radiosCss;

export { Radios as fireenjin_radios };
