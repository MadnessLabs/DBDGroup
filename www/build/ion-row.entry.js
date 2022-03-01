import { r as registerInstance, h, n as Host } from './index-bac865b7.js';
import { g as getIonMode } from './ionic-global-48c6f4a1.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

let Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Row.style = rowCss;

export { Row as ion_row };
