import { r as registerInstance, h } from './index-4531603b.js';

const flowCss = "fireenjin-flow .flow-controls{display:flex;justify-content:space-between}";

const flow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The data from the form being filled out
     */
    this.formData = {};
    /**
     * The next button for the slider
     */
    this.nextButton = {
      label: "Next",
      color: "primary",
      fill: "clear",
      icon: "chevron-forward-circle-outline",
    };
    /**
     * The prev button for the slider
     */
    this.prevButton = {
      label: "Back",
      color: "medium",
      fill: "clear",
      icon: "chevron-back-circle-outline",
    };
    /**
     * The save button for the flow
     */
    this.saveButton = {
      label: "Save",
      fill: "solid",
      color: "primary",
      icon: "checkmark-circle-outline",
    };
    /**
     * Should the form controls be hidden?
     */
    this.hideControls = false;
    /**
     * The data to exclude from the form submit event
     */
    this.excludeData = [];
    /**
     * Should the form disable the loader on submit
     */
    this.disableLoader = false;
    /**
     * Is the component currently loading
     */
    this.loading = false;
    /**
     * Should the enter button binding be disabled
     */
    this.disableEnterButton = false;
    /**
     * Confirm leaving the page when the form is filled
     */
    this.confirmExit = false;
    /**
     * Has the form fields been changed
     */
    this.hasChanged = false;
    /**
     * The HTTP method to use when submitting the form
     */
    this.method = "post";
    /**
     * A list of options for SwiperJS
     * @link https://swiperjs.com/swiper-api#parameters
     */
    this.slidesOptions = { autoHeight: true, allowTouchMove: false };
    this.pager = false;
    this.scrollbar = false;
    this.steps = [];
    this.askConfirmation = false;
  }
  async onKeydown(event) {
    if ((event === null || event === void 0 ? void 0 : event.key) !== "Enter" || this.disableEnterButton)
      return;
    this.slideNext();
  }
  async onSlideChange() {
    const currentIndex = await this.getActiveIndex();
    if (currentIndex === this.steps.length) {
      this.hideControls = true;
      if (!this.askConfirmation)
        this.formEl.submit();
    }
    else {
      this.hideControls = false;
    }
    if (currentIndex === 0 && this.prevButton) {
      this.prevButton = Object.assign(Object.assign({}, this.prevButton), { disabled: true });
    }
    else {
      this.prevButton = Object.assign(Object.assign({}, this.prevButton), { disabled: false });
    }
  }
  async getActiveIndex() {
    return this.slidesEl.getActiveIndex();
  }
  async getSwiper() {
    return this.slidesEl.getSwiper();
  }
  async isBeginning() {
    return this.slidesEl.isBeginning();
  }
  async isEnd() {
    return this.slidesEl.isEnd();
  }
  async length() {
    return this.slidesEl.length();
  }
  async lockSwipeToNext(lock) {
    return this.slidesEl.lockSwipeToNext(lock);
  }
  async lockSwipeToPrev(lock) {
    return this.slidesEl.lockSwipeToPrev(lock);
  }
  async lockSwipes(lock) {
    return this.slidesEl.lockSwipes(lock);
  }
  async slideNext(speed, runCallbacks) {
    return this.slidesEl.slideNext(speed, runCallbacks);
  }
  async slidePrev(speed, runCallbacks) {
    if (this.hideControls)
      this.hideControls = false;
    return this.slidesEl.slidePrev(speed, runCallbacks);
  }
  async slideTo(index, speed, runCallbacks) {
    return this.slidesEl.slideTo(index, speed, runCallbacks);
  }
  async startAutoplay() {
    return this.slidesEl.startAutoplay();
  }
  async stopAutoplay() {
    return this.slidesEl.stopAutoplay();
  }
  async update() {
    return this.slidesEl.update();
  }
  async updateAutoHeight(speed) {
    return this.slidesEl.updateAutoHeight(speed);
  }
  async reportFormValidity() {
    this.formEl.reportFormValidity();
  }
  async setFormData(data) {
    this.formEl.setFormData(data);
  }
  async checkFormValidity(reportValidity) {
    this.formEl.checkFormValidity(reportValidity);
  }
  async reset(event) {
    this.formEl.reset(event);
    if (this.prevButton)
      this.prevButton.disabled = true;
  }
  async submit(event, options) {
    this.formEl.submit(event, options);
  }
  componentWillLoad() {
    if (this.prevButton)
      this.prevButton.disabled = true;
  }
  renderField(field) {
    if ((field === null || field === void 0 ? void 0 : field.type) === "file") {
      return (h("fireenjin-input-file", { path: field === null || field === void 0 ? void 0 : field.path, icon: field === null || field === void 0 ? void 0 : field.icon, label: field === null || field === void 0 ? void 0 : field.label, fileName: field === null || field === void 0 ? void 0 : field.fileName, name: field === null || field === void 0 ? void 0 : field.name, accept: field === null || field === void 0 ? void 0 : field.accept, defaultValue: field === null || field === void 0 ? void 0 : field.defaultValue, value: field === null || field === void 0 ? void 0 : field.value, documentId: field === null || field === void 0 ? void 0 : field.documentId, endpoint: field === null || field === void 0 ? void 0 : field.endpoint, uploadData: field === null || field === void 0 ? void 0 : field.uploadData, disabled: !!(field === null || field === void 0 ? void 0 : field.disabled) }));
    }
    else if ((field === null || field === void 0 ? void 0 : field.type) === "photo") {
      return (h("fireenjin-input-photo", { path: field === null || field === void 0 ? void 0 : field.path, fileName: field === null || field === void 0 ? void 0 : field.fileName, name: field === null || field === void 0 ? void 0 : field.name, value: field === null || field === void 0 ? void 0 : field.value, documentId: field === null || field === void 0 ? void 0 : field.documentId, endpoint: field === null || field === void 0 ? void 0 : field.endpoint, disabled: !!(field === null || field === void 0 ? void 0 : field.disabled), fallback: field === null || field === void 0 ? void 0 : field.fallback, showButton: !!(field === null || field === void 0 ? void 0 : field.showButton), buttonText: field === null || field === void 0 ? void 0 : field.buttonText, initials: field === null || field === void 0 ? void 0 : field.initials, multiple: !!(field === null || field === void 0 ? void 0 : field.multiple), resize: !!(field === null || field === void 0 ? void 0 : field.resize), loading: !!(field === null || field === void 0 ? void 0 : field.loading) }));
    }
    else if ((field === null || field === void 0 ? void 0 : field.type) === "address") {
      return (h("fireenjin-input-address", { googleMapsKey: (field === null || field === void 0 ? void 0 : field.googleMapsKey) || this.googleMapsKey, placeholder: field === null || field === void 0 ? void 0 : field.placeholder, value: field === null || field === void 0 ? void 0 : field.value, label: field === null || field === void 0 ? void 0 : field.label, required: !!(field === null || field === void 0 ? void 0 : field.required), name: field === null || field === void 0 ? void 0 : field.name, lines: field === null || field === void 0 ? void 0 : field.lines, labelPosition: field === null || field === void 0 ? void 0 : field.labelPosition }));
    }
    else if ((field === null || field === void 0 ? void 0 : field.type) === "select") {
      return (h("fireenjin-select", { disabled: !!(field === null || field === void 0 ? void 0 : field.disabled), cancelText: field === null || field === void 0 ? void 0 : field.cancelText, okText: field === null || field === void 0 ? void 0 : field.okText, placeholder: field === null || field === void 0 ? void 0 : field.placeholder, name: field === null || field === void 0 ? void 0 : field.name, selectedText: field === null || field === void 0 ? void 0 : field.selectedText, multiple: !!(field === null || field === void 0 ? void 0 : field.multiple), interface: field === null || field === void 0 ? void 0 : field.interface, interfaceOptions: field === null || field === void 0 ? void 0 : field.interfaceOptions, compareWith: field === null || field === void 0 ? void 0 : field.compareWith, value: field === null || field === void 0 ? void 0 : field.value, icon: field === null || field === void 0 ? void 0 : field.icon, endpoint: field === null || field === void 0 ? void 0 : field.endpoint, header: field === null || field === void 0 ? void 0 : field.header, subHeader: field === null || field === void 0 ? void 0 : field.subHeader, message: field === null || field === void 0 ? void 0 : field.message, orderBy: field === null || field === void 0 ? void 0 : field.orderBy, dataPropsMap: field === null || field === void 0 ? void 0 : field.dataPropsMap, optionEl: field === null || field === void 0 ? void 0 : field.optionEl, limit: field === null || field === void 0 ? void 0 : field.limit, params: field === null || field === void 0 ? void 0 : field.params, query: field === null || field === void 0 ? void 0 : field.query, label: field === null || field === void 0 ? void 0 : field.label, options: field === null || field === void 0 ? void 0 : field.options, required: !!(field === null || field === void 0 ? void 0 : field.required), resultsKey: field === null || field === void 0 ? void 0 : field.resultsKey, labelPosition: field === null || field === void 0 ? void 0 : field.labelPosition, lines: field === null || field === void 0 ? void 0 : field.lines }));
    }
    else if ((field === null || field === void 0 ? void 0 : field.type) === "radios") {
      return (h("fireenjin-radios", { disabled: !!(field === null || field === void 0 ? void 0 : field.disabled), name: field === null || field === void 0 ? void 0 : field.name, value: field === null || field === void 0 ? void 0 : field.value, endpoint: field === null || field === void 0 ? void 0 : field.endpoint, orderBy: field === null || field === void 0 ? void 0 : field.orderBy, dataPropsMap: field === null || field === void 0 ? void 0 : field.dataPropsMap, optionEl: field === null || field === void 0 ? void 0 : field.optionEl, limit: field === null || field === void 0 ? void 0 : field.limit, params: field === null || field === void 0 ? void 0 : field.params, query: field === null || field === void 0 ? void 0 : field.query, label: field === null || field === void 0 ? void 0 : field.label, options: field === null || field === void 0 ? void 0 : field.options, required: !!(field === null || field === void 0 ? void 0 : field.required), resultsKey: field === null || field === void 0 ? void 0 : field.resultsKey, labelPosition: field === null || field === void 0 ? void 0 : field.labelPosition, lines: field === null || field === void 0 ? void 0 : field.lines }));
    }
    else if ((field === null || field === void 0 ? void 0 : field.type) === "search") {
      return (h("fireenjin-input-search", { name: field === null || field === void 0 ? void 0 : field.name, label: field === null || field === void 0 ? void 0 : field.label, placeholder: field === null || field === void 0 ? void 0 : field.placeholder, value: field === null || field === void 0 ? void 0 : field.value, required: !!(field === null || field === void 0 ? void 0 : field.required), autofocus: !!(field === null || field === void 0 ? void 0 : field.autofocus), disabled: !!(field === null || field === void 0 ? void 0 : field.disabled), endpoint: field === null || field === void 0 ? void 0 : field.endpoint, dataPropsMap: field === null || field === void 0 ? void 0 : field.dataPropsMap, template: field === null || field === void 0 ? void 0 : field.template, searchParams: field === null || field === void 0 ? void 0 : field.searchParams, iconEnd: field === null || field === void 0 ? void 0 : field.iconRight, iconStart: field === null || field === void 0 ? void 0 : field.iconLeft, results: field === null || field === void 0 ? void 0 : field.results, resultsKey: field === null || field === void 0 ? void 0 : field.resultsKey, lines: field === null || field === void 0 ? void 0 : field.lines, labelPosition: field === null || field === void 0 ? void 0 : field.labelPosition }));
    }
    else {
      return (h("fireenjin-input", { type: (field === null || field === void 0 ? void 0 : field.type) || "text", stripeKey: (field === null || field === void 0 ? void 0 : field.stripeKey) || this.stripeKey, placeholder: field === null || field === void 0 ? void 0 : field.placeholder, label: field === null || field === void 0 ? void 0 : field.label, value: field === null || field === void 0 ? void 0 : field.value, required: !!(field === null || field === void 0 ? void 0 : field.required), name: field === null || field === void 0 ? void 0 : field.name, autocomplete: field === null || field === void 0 ? void 0 : field.autocomplete, autocapitalize: field === null || field === void 0 ? void 0 : field.autocapitalize, autocorrect: field === null || field === void 0 ? void 0 : field.autocorrect, autofocus: field === null || field === void 0 ? void 0 : field.autofocus, minlength: field === null || field === void 0 ? void 0 : field.minlength, maxlength: field === null || field === void 0 ? void 0 : field.maxlength, disabled: !!(field === null || field === void 0 ? void 0 : field.disabled), info: field === null || field === void 0 ? void 0 : field.info, edit: !!(field === null || field === void 0 ? void 0 : field.edit), min: field === null || field === void 0 ? void 0 : field.min, max: field === null || field === void 0 ? void 0 : field.max, iconLeft: field === null || field === void 0 ? void 0 : field.iconLeft, iconRight: field === null || field === void 0 ? void 0 : field.iconRight, silence: field === null || field === void 0 ? void 0 : field.silence, step: field === null || field === void 0 ? void 0 : field.step, actionOptions: field === null || field === void 0 ? void 0 : field.actionOptions, pattern: field === null || field === void 0 ? void 0 : field.pattern, clearInput: field === null || field === void 0 ? void 0 : field.clearInput, multiple: !!(field === null || field === void 0 ? void 0 : field.multiple), readOnly: !!(field === null || field === void 0 ? void 0 : field.readOnly), spellCheck: !!(field === null || field === void 0 ? void 0 : field.spellCheck), inputMode: field === null || field === void 0 ? void 0 : field.inputMode, stripeElements: (field === null || field === void 0 ? void 0 : field.stripeElements) || this.stripeElements, lines: field === null || field === void 0 ? void 0 : field.lines, labelPosition: field === null || field === void 0 ? void 0 : field.labelPosition }));
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    return (h("fireenjin-form", { ref: (el) => (this.formEl = el), name: this.name, formData: this.formData, submitButton: null, resetButton: null, documentId: this.documentId, endpoint: this.endpoint, hideControls: this.hideControls, filterData: this.filterData, beforeSubmit: this.beforeSubmit, disableLoader: this.disableLoader, loading: this.loading, disableEnterButton: true, confirmExit: this.confirmExit, hasChanged: this.hasChanged, method: this.method, action: this.action, fetch: this.fetch, fetchParams: this.fetchParams, fetchDataMap: this.fetchDataMap, fetchKey: this.fetchKey }, h("ion-slides", { ref: (el) => (this.slidesEl = el), pager: this.pager, options: this.slidesOptions, scrollbar: this.scrollbar }, (this.steps || []).map((step) => {
      const StepComponent = (step === null || step === void 0 ? void 0 : step.component) || null;
      return (h("ion-slide", null, h("div", null, (step === null || step === void 0 ? void 0 : step.beforeHTML) && h("div", { innerHTML: step.beforeHTML }), StepComponent && (h(StepComponent, Object.assign({}, ((step === null || step === void 0 ? void 0 : step.componentProps) || {})))), ((step === null || step === void 0 ? void 0 : step.fields) || []).map((field) => [
        (field === null || field === void 0 ? void 0 : field.beforeHTML) && h("div", { innerHTML: field.beforeHTML }),
        this.renderField(field),
        (field === null || field === void 0 ? void 0 : field.afterHTML) && h("div", { innerHTML: field.afterHTML }),
      ])), (step === null || step === void 0 ? void 0 : step.afterHTML) && h("div", { innerHTML: step.afterHTML })));
    }), h("ion-slide", null, this.askConfirmation ? (h("div", { class: "flow-confirmation" }, h("slot", { name: "confirmation" }))) : (h("div", { class: "flow-success" }, h("slot", { name: "success" }))))), !this.hideControls && (h("div", { class: "flow-controls control-pager" }, h("ion-button", { expand: (_a = this.prevButton) === null || _a === void 0 ? void 0 : _a.expand, disabled: !!((_b = this.prevButton) === null || _b === void 0 ? void 0 : _b.disabled), color: (_c = this.prevButton) === null || _c === void 0 ? void 0 : _c.color, fill: (_d = this.prevButton) === null || _d === void 0 ? void 0 : _d.fill, onClick: (event) => {
        var _a;
        return typeof ((_a = this.prevButton) === null || _a === void 0 ? void 0 : _a.onClick) === "function"
          ? this.prevButton.onClick(event)
          : this.slidePrev();
      } }, ((_e = this.prevButton) === null || _e === void 0 ? void 0 : _e.icon) && (h("ion-icon", { slot: ((_f = this.prevButton) === null || _f === void 0 ? void 0 : _f.iconSlot) || "start", name: this.prevButton.icon })), ((_g = this.prevButton) === null || _g === void 0 ? void 0 : _g.label) && (h("ion-label", null, this.prevButton.label))), h("ion-button", { expand: (_h = this.nextButton) === null || _h === void 0 ? void 0 : _h.expand, disabled: !!((_j = this.nextButton) === null || _j === void 0 ? void 0 : _j.disabled), color: (_k = this.nextButton) === null || _k === void 0 ? void 0 : _k.color, fill: (_l = this.nextButton) === null || _l === void 0 ? void 0 : _l.fill, onClick: (event) => {
        var _a;
        return typeof ((_a = this.nextButton) === null || _a === void 0 ? void 0 : _a.onClick) === "function"
          ? this.nextButton.onClick(event)
          : this.slideNext();
      } }, ((_m = this.nextButton) === null || _m === void 0 ? void 0 : _m.icon) && (h("ion-icon", { slot: ((_o = this.nextButton) === null || _o === void 0 ? void 0 : _o.iconSlot) || "end", name: this.nextButton.icon })), ((_p = this.nextButton) === null || _p === void 0 ? void 0 : _p.label) && (h("ion-label", null, this.nextButton.label))))), this.hideControls && this.askConfirmation && (h("div", { class: "flow-controls control-confirmation" }, h("ion-button", { expand: (_q = this.prevButton) === null || _q === void 0 ? void 0 : _q.expand, disabled: !!((_r = this.prevButton) === null || _r === void 0 ? void 0 : _r.disabled), color: (_s = this.prevButton) === null || _s === void 0 ? void 0 : _s.color, fill: (_t = this.prevButton) === null || _t === void 0 ? void 0 : _t.fill, onClick: (event) => {
        var _a;
        return typeof ((_a = this.prevButton) === null || _a === void 0 ? void 0 : _a.onClick) === "function"
          ? this.prevButton.onClick(event)
          : this.slidePrev();
      } }, ((_u = this.prevButton) === null || _u === void 0 ? void 0 : _u.icon) && (h("ion-icon", { slot: ((_v = this.prevButton) === null || _v === void 0 ? void 0 : _v.iconSlot) || "start", name: this.prevButton.icon })), ((_w = this.prevButton) === null || _w === void 0 ? void 0 : _w.label) && (h("ion-label", null, this.prevButton.label))), h("ion-button", { expand: (_x = this.saveButton) === null || _x === void 0 ? void 0 : _x.expand, disabled: !!((_y = this.saveButton) === null || _y === void 0 ? void 0 : _y.disabled), color: (_z = this.saveButton) === null || _z === void 0 ? void 0 : _z.color, fill: (_0 = this.saveButton) === null || _0 === void 0 ? void 0 : _0.fill, type: "submit" }, ((_1 = this.saveButton) === null || _1 === void 0 ? void 0 : _1.icon) && (h("ion-icon", { slot: ((_2 = this.saveButton) === null || _2 === void 0 ? void 0 : _2.iconSlot) || "end", name: this.saveButton.icon })), ((_3 = this.saveButton) === null || _3 === void 0 ? void 0 : _3.label) && (h("ion-label", null, this.saveButton.label)))))));
  }
};
flow.style = flowCss;

export { flow as fireenjin_flow };
