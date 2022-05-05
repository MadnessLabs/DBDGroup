import { r as registerInstance, i as createEvent, h } from './index-6e03bf48.js';
import { D as Debounce } from './index-d436df2d.js';
import './index-61fa2b80.js';
import { p as popoverController } from './overlays-6f119ace.js';
import './_commonjsHelpers-6cb8dacb.js';
import './utils-5f10070f.js';
import './animation-0a29ef4d.js';
import './helpers-caa5a9ed.js';
import './ios.transition-66526da7.js';
import './index-e33bd69d.js';
import './md.transition-81d81144.js';
import './cubic-bezier-4c0db14f.js';
import './index-dd414b33.js';
import './ionic-global-e5e0f581.js';
import './index-be6112f8.js';
import './index-f45bd30f.js';
import './hardware-back-button-fa04d6e9.js';

/**
 * Get the value from an object using a dot notation string.
 *
 * @param obj The object you are searching through
 * @param path The dot noation path to the value
 * @returns The value of the path in the object
 */
function pathToValue(obj, path) {
  return path.split(".").reduce((o, i) => o[i], obj);
}

const inputSearchCss = "fireenjin-input-search .search-input ion-label{color:var(--ion-color-medium) !important;font-size:12px;font-weight:bold;text-transform:uppercase;font-family:arial;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--ion-font-family)}fireenjin-input-search ion-icon{color:var(--ion-text-color)}fireenjin-input-search .search-input ion-icon[slot=\"start\"]{margin-right:5px}fireenjin-input-search .search-input [slot=\"end\"]{margin-left:5px}fireenjin-input-search .invalid{--border-color:var(--ion-color-danger) !important}fireenjin-input-search .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-input-search .valid{--border-color:var(--ion-color-success) !important}fireenjin-input-search .valid ion-label{color:var(--ion-color-success) !important}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const InputSearch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    this.type = "text";
    this.searchParams = {};
    this.disableSearch = false;
    this.mode = "popover";
    this.results = [];
  }
  async checkValidity(options) {
    if (this.required || (options && options.setValidationClass)) {
      await this.setValidationClass(options && options.validationClassOptions
        ? options.validationClassOptions
        : null);
    }
    return this.inputEl
      ? await (await this.inputEl.getInputElement()).checkValidity()
      : true;
  }
  async reportValidity() {
    const isValid = this.inputEl
      ? await (await this.inputEl.getInputElement()).reportValidity()
      : true;
    this.inputEl.classList[isValid ? "remove" : "add"]("invalid");
    await this.setValidationClass();
    return isValid;
  }
  async onBlur() {
    const isValid = await this.checkValidity();
    this.inputEl.classList[isValid ? "remove" : "add"]("invalid");
    await this.setValidationClass();
  }
  async onSuccess(event) {
    var _a, _b;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.endpoint) !== this.endpoint || !((_b = event === null || event === void 0 ? void 0 : event.detail) === null || _b === void 0 ? void 0 : _b.data))
      return;
    this.results = await pathToValue(event.detail.data, this.resultsKey ? this.resultsKey : "searchUsers.results");
    console.log(this.results);
    if (this.mode === "popover") {
      this.resultsPopover = await popoverController.create({
        translucent: true,
        showBackdrop: false,
        event: event.detail.event,
        component: "fireenjin-input-search-popover",
        componentProps: {
          results: this.results,
          template: this.template,
        },
      });
      this.resultsPopover.present();
    }
  }
  onInput(event) {
    var _a, _b;
    if (this.disableSearch || ((_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.length) <= 1)
      return;
    this.fireenjinFetch.emit({
      event,
      endpoint: this.endpoint,
      params: {
        data: Object.assign({ query: event.target.value }, this.searchParams),
      },
      dataPropsMap: this.dataPropsMap,
    });
  }
  async clearResults() {
    return (this.results = []);
  }
  async closePopover() {
    return this.resultsPopover.dismiss();
  }
  async openPopover() {
    return this.resultsPopover.present();
  }
  async setValidationClass(options) {
    const classList = Object.values(this.itemEl.classList);
    if (classList.indexOf("invalid") >= 0) {
      this.itemEl.classList.remove("invalid");
    }
    if (classList.indexOf("valid") >= 0) {
      this.itemEl.classList.remove("valid");
    }
    const isValid = await (await this.inputEl.getInputElement()).checkValidity();
    if (!options ||
      !options.ignoreInvalid ||
      (options && options.ignoreInvalid && isValid)) {
      this.itemEl.classList.add(isValid ? "valid" : "invalid");
    }
  }
  render() {
    var _a;
    return [
      h("ion-item", { lines: this.lines, class: "search-input", ref: (el) => (this.itemEl = el), onClick: (event) => this.onInput(event) }, h("slot", { name: "start" }), this.iconStart && h("ion-icon", { name: this.iconStart, slot: "start" }), this.label && (h("ion-label", { position: this.labelPosition }, this.label)), h("ion-input", { onInput: (event) => this.onInput(event), ref: (el) => (this.inputEl = el), disabled: this.disabled, type: this.type, name: this.name, placeholder: this.placeholder, required: this.required, autofocus: this.autofocus, value: this.value }), this.iconEnd && h("ion-icon", { name: this.iconEnd, slot: "end" }), h("slot", { name: "end" })),
      this.mode === "inline" && ((_a = this.results) === null || _a === void 0 ? void 0 : _a.length)
        ? this.results.map((result) => this.template(result))
        : null,
    ];
  }
};
__decorate([
  Debounce(1000)
], InputSearch.prototype, "onInput", null);
InputSearch.style = inputSearchCss;

export { InputSearch as fireenjin_input_search };
