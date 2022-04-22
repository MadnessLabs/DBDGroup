'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const tabCss = "fireenjin-tab .tab-wrapper{opacity:0;pointer-events:none;height:0;display:block;transition:0.3s ease opacity;overflow:hidden}fireenjin-tab .tab-wrapper.tab-selected{opacity:1;pointer-events:all;height:auto;overflow:auto}";

const Tab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.selected = false;
  }
  render() {
    return (index.h("div", { class: {
        "tab-selected": this.selected,
        "tab-deselected": !this.selected,
        "tab-wrapper": true,
      } }, index.h("slot", null)));
  }
};
Tab.style = tabCss;

exports.fireenjin_tab = Tab;
