import { r as registerInstance, h, n as Host } from './index-e5ab994a.js';
import { g as getIonMode } from './ionic-global-fc3774f0.js';

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
