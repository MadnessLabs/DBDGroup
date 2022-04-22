import { r as registerInstance, d as createEvent, B as Build, h } from './index-4531603b.js';

const selectTagsCss = "fireenjin-select-tags{display:block;overflow:visible !important;position:relative;z-index:9}fireenjin-select-tags ion-label{align-self:unset !important;color:var(--ion-text-color, #000);font-size:12px;font-weight:bold;font-family:arial;display:inline-block;background:transparent;text-align:left;padding:2px 35px 8px 0;font-family:var(--ion-font-family);color:var(--ion-text-color, #000) !important}fireenjin-select-tags .invalid{--border-color:var(--ion-color-danger) !important}fireenjin-select-tags .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-select-tags .valid{--border-color:var(--ion-color-success) !important}fireenjin-select-tags .valid ion-label{color:var(--ion-color-success) !important}fireenjin-select-tags ion-item{overflow:visible;--background:transparent !important}fireenjin-select-tags select{display:none !important}fireenjin-select-tags .choices{width:100%;display:block;margin-top:15px}fireenjin-select-tags .choices.is-open{z-index:90}fireenjin-select-tags .choices__inner{padding:0 !important;padding-bottom:0 !important;background-color:transparent;border:none;min-height:30px}fireenjin-select-tags .choices{position:relative;margin-bottom:24px;font-size:16px}fireenjin-select-tags .choices:focus{outline:0}fireenjin-select-tags .choices:last-child{margin-bottom:0}fireenjin-select-tags .choices.is-disabled .choices__inner,fireenjin-select-tags .choices.is-disabled .choices__input{background-color:transparent;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}fireenjin-select-tags .choices.is-disabled .choices__item{cursor:not-allowed}fireenjin-select-tags .choices [hidden]{display:none !important}fireenjin-select-tags .choices[data-type*=\"select-one\"]{cursor:pointer}fireenjin-select-tags .choices[data-type*=\"select-one\"] .choices__inner{padding-bottom:7.5px}fireenjin-select-tags .choices[data-type*=\"select-one\"] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #ddd;background-color:transparent;margin:0}fireenjin-select-tags .choices[data-type*=\"select-one\"] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:0.5}fireenjin-select-tags .choices[data-type*=\"select-one\"] .choices__button:focus,fireenjin-select-tags .choices[data-type*=\"select-one\"] .choices__button:hover{opacity:1}fireenjin-select-tags .choices[data-type*=\"select-one\"] .choices__button:focus{box-shadow:0 0 0 2px var(--ion-color-primary)}fireenjin-select-tags .choices[data-type*=\"select-one\"]:after{content:\"\";height:0;width:0;border-style:solid;border-color:#333 transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none}fireenjin-select-tags .choices[data-type*=\"select-one\"].is-open:after{border-color:transparent transparent #333;margin-top:-7.5px}fireenjin-select-tags .choices[data-type*=\"select-one\"][dir=\"rtl\"]:after{left:11.5px;right:auto}fireenjin-select-tags .choices[data-type*=\"select-one\"][dir=\"rtl\"] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0}fireenjin-select-tags .choices[data-type*=\"select-multiple\"] .choices__inner,fireenjin-select-tags .choices[data-type*=\"text\"] .choices__inner{cursor:text}fireenjin-select-tags .choices[data-type*=\"select-multiple\"] .choices__button,fireenjin-select-tags .choices[data-type*=\"text\"] .choices__button{position:relative;display:inline-block;margin:0 -4px 0 8px;padding-left:16px;border-left:1px solid var(--ion-color-primary-shade);background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:0.75;border-radius:0}fireenjin-select-tags .choices[data-type*=\"select-multiple\"] .choices__button:focus,fireenjin-select-tags .choices[data-type*=\"select-multiple\"] .choices__button:hover,fireenjin-select-tags .choices[data-type*=\"text\"] .choices__button:focus,fireenjin-select-tags .choices[data-type*=\"text\"] .choices__button:hover{opacity:1}fireenjin-select-tags .choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:transparent;padding:7.5px 7.5px 3.75px;border:none;border-radius:2.5px;font-size:14px;min-height:34px;overflow:hidden;z-index:99}fireenjin-select-tags .is-focused .choices__inner,fireenjin-select-tags .is-open .choices__inner{border-color:var(--ion-color-light)}fireenjin-select-tags .is-open .choices__inner{border-radius:2.5px 2.5px 0 0}fireenjin-select-tags .is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}fireenjin-select-tags .choices__list{margin:0;padding-left:0;list-style:none}fireenjin-select-tags .choices__list--single{padding:4px 16px 4px 4px;width:100%;display:flex;align-items:center;justify-content:center}fireenjin-select-tags [dir=\"rtl\"] .choices__list--single{padding-right:4px;padding-left:16px}fireenjin-select-tags .choices__list--single .choices__item{width:100%}fireenjin-select-tags .choices__list--multiple{display:inline}fireenjin-select-tags .choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:var(--ion-color-primary);border:1px solid var(--ion-color-primary-shade);color:var(--ion-text-color, #000);word-break:break-all;position:relative}fireenjin-select-tags .choices__list--multiple .choices__item ion-icon{position:absolute;top:3px;right:5px;height:20px;width:20px}fireenjin-select-tags .choices__list--multiple .choices__item[data-deletable]{padding-right:5px}fireenjin-select-tags [dir=\"rtl\"] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px}fireenjin-select-tags .choices__list--multiple .choices__item.is-highlighted{background-color:var(--ion-color-primary);border:1px solid var(--ion-color-primary-shade)}fireenjin-select-tags .is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}fireenjin-select-tags .choices__list--dropdown{display:none;z-index:1;position:absolute;width:100%;background-color:var(--ion-background-color, #fff);border:1px solid #ddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all}fireenjin-select-tags .choices__list--dropdown.is-active{display:block}fireenjin-select-tags .is-open .choices__list--dropdown{border-color:var(--ion-color-light)}fireenjin-select-tags .is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:0.25rem 0.25rem 0 0}fireenjin-select-tags .choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}fireenjin-select-tags .choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px}fireenjin-select-tags [dir=\"rtl\"] .choices__list--dropdown .choices__item{text-align:right}@media (min-width: 640px){fireenjin-select-tags .choices__list--dropdown .choices__item--selectable{padding-right:100px}fireenjin-select-tags .choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%)}fireenjin-select-tags [dir=\"rtl\"] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px}fireenjin-select-tags [dir=\"rtl\"] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px}}fireenjin-select-tags .choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:var(--ion-color-primary)}fireenjin-select-tags .choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:0.5}fireenjin-select-tags .choices__item{cursor:default}fireenjin-select-tags .choices__item--selectable{cursor:pointer}fireenjin-select-tags .choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none;opacity:0.5}fireenjin-select-tags .choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:gray}fireenjin-select-tags .choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer}fireenjin-select-tags .choices__button:focus,fireenjin-select-tags .choices__input:focus{outline:0}fireenjin-select-tags .choices__input{position:absolute;right:0px;top:-38px;vertical-align:baseline;background-color:var(--ion-color-success);font-size:14px;margin-bottom:5px;color:#ffffff;border:0;width:auto;border-radius:15px;padding:6px 0;font-weight:bold;text-indent:10px;max-width:138px;cursor:pointer}fireenjin-select-tags .choices__input::placeholder{text-indent:10px;color:#ffffff}fireenjin-select-tags .choices__input:-ms-input-placeholder{text-indent:10px;color:#ffffff}fireenjin-select-tags .choices__input::-ms-input-placeholder{text-indent:10px;color:#ffffff}fireenjin-select-tags [dir=\"rtl\"] .choices__input{padding-right:2px;padding-left:0}fireenjin-select-tags .choices__placeholder{opacity:0.5}";

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
        this.value = this.choices
          .getValue()
          .map((choice) => this.options.find((option) => option.value === choice.value).value);
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
      this.value = [...(this.value ? this.value : []), value];
      const option = {
        label: event.target.value,
        value,
        selected: true,
      };
      this.options.push(option);
      this.choices.setChoices([option]);
      this.choices.clearInput();
      this.ionChange.emit({
        event,
        name: this.name,
        value: this.value,
      });
    }
  }
  toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  async setValue(value) {
    try {
      this.choices.setChoiceByValue(value);
    }
    catch (error) {
      console.log("Error setting value...");
    }
  }
  async getChoices() {
    return this.choices;
  }
  async onValueChange(newValue, oldValue) {
    if (!this.value || newValue === oldValue || !this.choices)
      return false;
    await this.setValue(this.value);
  }
  async onOptionsChange(newValue, oldValue) {
    if (newValue === oldValue || !this.choices)
      return false;
    await this.choices.setChoices(newValue, this.value, this.label, true);
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
  async addTag() {
    this.fireenjinTrigger.emit({
      name: "newTag",
      payload: {},
    });
    if ((window === null || window === void 0 ? void 0 : window.prompt) && this.allowAdding !== "custom") {
      const value = prompt(this.addPrompt ||
        `What ${this.label || this.name} would you like to add?`);
      this.options = [
        ...this.options,
        { label: this.toTitleCase(value), value },
      ];
    }
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
    const OptionEl = "option";
    return (h("ion-item", { ref: (el) => (this.itemEl = el), lines: this.lines }, this.label && (h("ion-label", { position: this.labelPosition }, this.label)), h("ion-select", { title: this.placeholder || this.name, disabled: this.disabled, multiple: this.multiple, name: this.name, value: this.value, ref: (el) => (this.choicesEl = el) }, h("slot", null), !this.multiple && this.placeholder ? (h(OptionEl, { placeholder: true }, this.placeholder)) : null, this.options.map((option) => (h("ion-select-option", { value: option.value }, option.label)))), this.allowAdding && (h("ion-button", { slot: "end", size: "large", fill: "clear", shape: "round", onClick: () => this.addTag() }, h("ion-icon", { slot: "icon-only", name: this.addIcon })))));
  }
  static get watchers() { return {
    "value": ["onValueChange"],
    "options": ["onOptionsChange"]
  }; }
};
SelectTags.style = selectTagsCss;

export { SelectTags as fireenjin_select_tags };
