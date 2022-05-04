import { r as registerInstance, i as createEvent, m as Build, h } from './index-6e03bf48.js';

const selectTagsCss = "fireenjin-select-tags{display:block;overflow:visible !important;position:relative;z-index:9}fireenjin-select-tags ion-label{align-self:unset !important;color:var(--ion-text-color, #000);font-size:12px;font-weight:bold;font-family:arial;display:inline-block;background:transparent;text-align:left;padding:2px 35px 8px 0;font-family:var(--ion-font-family);color:var(--ion-text-color, #000) !important}fireenjin-select-tags .invalid{--border-color:var(--ion-color-danger) !important}fireenjin-select-tags .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-select-tags .valid{--border-color:var(--ion-color-success) !important}fireenjin-select-tags .valid ion-label{color:var(--ion-color-success) !important}fireenjin-select-tags ion-item{--background:transparent !important}fireenjin-select-tags .options-wrapper{height:50px}fireenjin-select-tags fireenjin-chip-bar{position:absolute;left:0;right:0;bottom:0;height:50px}";

const SelectTags = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    this.fireenjinTrigger = createEvent(this, "fireenjinTrigger", 7);
    this.disableFetch = false;
    this.name = "tags";
    this.placeholder = "Select Tags";
    this.options = [];
    this.required = false;
    this.duplicates = false;
    this.disabled = false;
    this.allowAdding = false;
    this.limit = 15;
    this.page = 0;
    this.results = [];
    this.labelPosition = "stacked";
    this.addIcon = "add-circle";
    this.hasValue = false;
    this.paramData = {};
  }
  async onSuccess(event) {
    var _a, _b, _c;
    if (event.detail.name === "selectTags") {
      try {
        if (this.page === 0) {
          this.results = [];
        }
        this.page = ((_c = (_b = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.results) === null || _c === void 0 ? void 0 : _c.page)
          ? event.detail.data.results.page
          : this.page + 1;
        await this.addResults(event.detail.data.results);
      }
      catch (err) {
        console.log("Error updating results!");
      }
    }
  }
  async onChange(event) {
    if (!event ||
      !event.detail ||
      !event.detail.value ||
      !this.options.length) {
      return false;
    }
    if (this.multiple) {
      try {
        this.ionChange.emit({
          event,
          name: this.name,
          value: this.value,
        });
      }
      catch (error) {
        console.log("Error setting value");
      }
    }
    else {
      this.value = event.detail.value;
      this.ionChange.emit({
        event,
        name: this.name,
        value: this.value,
      });
    }
  }
  async onKeyDown(event) {
    var _a, _b;
    if (event.key === "Enter" &&
      this.allowAdding &&
      ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.length) >= 1) {
      const value = event.target.value.toLocaleLowerCase();
      this.addTag(value, event);
    }
  }
  async clearParamData(key) {
    if (key && this.paramData[key]) {
      const paramData = this.paramData;
      delete paramData[key];
      this.paramData = paramData;
    }
    else if (!key) {
      this.paramData = {};
    }
    return this.paramData;
  }
  async addResults(results = []) {
    this.results = [...this.results, ...results];
    this.options = this.results.map((result) => ({
      label: result.label
        ? result.label
        : result.name
          ? result.name
          : result.id
            ? result.id
            : null,
      value: result.value ? result.value : result.id ? result.id : null,
    }));
  }
  async clearResults() {
    this.page = 0;
    this.results = [];
  }
  async addTag(tag, event) {
    const value = tag.toLocaleLowerCase();
    if (!value.length)
      return;
    this.fireenjinTrigger.emit({
      name: "newTag",
      payload: {
        value,
      },
    });
    if (!(this.value || []).includes(value)) {
      const option = {
        label: value,
        value,
        selected: true,
      };
      this.options = [...(this.options ? this.options : []), option];
    }
    this.addValue(value, event);
    this.query = null;
    if (this.inputEl)
      this.inputEl.value = null;
  }
  async getResults(options = {}) {
    var _a, _b, _c;
    this.paramData = Object.assign(Object.assign(Object.assign({}, this.paramData), { limit: options.limit ? options.limit : this.limit, orderBy: this.orderBy, orderDirection: this.orderDirection }), ((options === null || options === void 0 ? void 0 : options.paramData) ? options.paramData : {}));
    if (options.page) {
      this.page = options.page;
    }
    if (((_a = this.query) === null || _a === void 0 ? void 0 : _a.length) > 1) {
      this.paramData.query = this.query;
    }
    if (((_b = this.results) === null || _b === void 0 ? void 0 : _b.length) && ((_c = this.results[this.results.length - 1]) === null || _c === void 0 ? void 0 : _c.id)) {
      this.paramData.next = this.results[this.results.length - 1].id;
    }
    this.fireenjinFetch.emit({
      name: "selectTags",
      endpoint: this.endpoint,
      dataPropsMap: this.dataPropsMap
        ? this.dataPropsMap
        : this.resultsKey
          ? { [this.resultsKey]: "results" }
          : null,
      disableFetch: this.disableFetch,
      params: {
        data: this.fetchData ? this.fetchData : this.paramData,
      },
    });
  }
  async addValue(value, event) {
    this.value = [...new Set([...(this.value ? this.value : []), value])];
    this.ionChange.emit({
      event,
      name: this.name,
      value: this.value,
    });
  }
  async removeValue(value, event) {
    this.value = (this.value || []).filter((val) => val !== value);
    this.ionChange.emit({
      event,
      name: this.name,
      value: this.value,
    });
  }
  componentDidLoad() {
    if (!(Build === null || Build === void 0 ? void 0 : Build.isBrowser))
      return;
    if (this.endpoint) {
      this.getResults();
    }
    if (!this.itemEl || !this.itemEl.shadowRoot) {
      return false;
    }
    this.itemEl.shadowRoot.querySelector(".input-wrapper").style.overflow = "visible";
  }
  render() {
    return (h("ion-item", { ref: (el) => (this.itemEl = el), lines: this.lines }, this.label && (h("ion-label", { position: this.labelPosition }, this.label)), this.allowAdding && (h("ion-input", { ref: (el) => (this.inputEl = el), value: this.query })), h("div", { class: "options-wrapper" }, h("fireenjin-chip-bar", null, this.allowAdding && (h("ion-chip", { class: "add-tag", onClick: (event) => { var _a; return this.addTag((_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.value, event); } }, "Add", h("ion-icon", { name: this.addIcon }))), (this.options || []).map((option) => (h("ion-chip", { outline: !(this.value || []).includes(option === null || option === void 0 ? void 0 : option.value), onClick: (event) => (this.value || []).includes(option === null || option === void 0 ? void 0 : option.value)
        ? this.removeValue(option === null || option === void 0 ? void 0 : option.value, event)
        : this.addValue(option === null || option === void 0 ? void 0 : option.value, event) }, (option === null || option === void 0 ? void 0 : option.label) || "", (this.value || []).includes(option === null || option === void 0 ? void 0 : option.value) && (h("ion-icon", { name: "close-circle" })))))))));
  }
};
SelectTags.style = selectTagsCss;

export { SelectTags as fireenjin_select_tags };
