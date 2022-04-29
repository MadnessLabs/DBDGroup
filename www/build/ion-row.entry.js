import { r as registerInstance, h, o as Host } from './index-1d93f1ff.js';
import { g as getIonMode } from './ionic-global-67b9f3db.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

const Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Row.style = rowCss;

export { Row as ion_row };
