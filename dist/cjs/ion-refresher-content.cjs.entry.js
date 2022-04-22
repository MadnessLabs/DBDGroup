'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');
const index$2 = require('./index-8540d72e.js');
const ionicGlobal = require('./ionic-global-07f11642.js');
const index$1 = require('./index-af080b50.js');
const spinnerConfigs = require('./spinner-configs-0ac05f2d.js');

const RefresherContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    if (this.pullingIcon === undefined) {
      const mode = ionicGlobal.getIonMode(this);
      const overflowRefresher = this.el.style.webkitOverflowScrolling !== undefined ? 'lines' : index$2.arrowDown;
      this.pullingIcon = ionicGlobal.config.get('refreshingIcon', mode === 'ios' && ionicGlobal.isPlatform('mobile') ? ionicGlobal.config.get('spinner', overflowRefresher) : 'circular');
    }
    if (this.refreshingSpinner === undefined) {
      const mode = ionicGlobal.getIonMode(this);
      this.refreshingSpinner = ionicGlobal.config.get('refreshingSpinner', ionicGlobal.config.get('spinner', mode === 'ios' ? 'lines' : 'circular'));
    }
  }
  render() {
    const pullingIcon = this.pullingIcon;
    const hasSpinner = pullingIcon != null && spinnerConfigs.SPINNERS[pullingIcon] !== undefined;
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: mode }, index.h("div", { class: "refresher-pulling" }, this.pullingIcon && hasSpinner && (index.h("div", { class: "refresher-pulling-icon" }, index.h("div", { class: "spinner-arrow-container" }, index.h("ion-spinner", { name: this.pullingIcon, paused: true }), mode === 'md' && this.pullingIcon === 'circular' && (index.h("div", { class: "arrow-container" }, index.h("ion-icon", { icon: index$2.caretBackSharp })))))), this.pullingIcon && !hasSpinner && (index.h("div", { class: "refresher-pulling-icon" }, index.h("ion-icon", { icon: this.pullingIcon, lazy: false }))), this.pullingText && (index.h("div", { class: "refresher-pulling-text", innerHTML: index$1.sanitizeDOMString(this.pullingText) }))), index.h("div", { class: "refresher-refreshing" }, this.refreshingSpinner && (index.h("div", { class: "refresher-refreshing-icon" }, index.h("ion-spinner", { name: this.refreshingSpinner }))), this.refreshingText && (index.h("div", { class: "refresher-refreshing-text", innerHTML: index$1.sanitizeDOMString(this.refreshingText) })))));
  }
  get el() { return index.getElement(this); }
};

exports.ion_refresher_content = RefresherContent;
