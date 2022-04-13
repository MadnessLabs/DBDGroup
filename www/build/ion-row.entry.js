import { r as registerInstance, h, m as Host } from './index-0fc14935.js';
import { g as getIonMode } from './ionic-global-140a6091.js';

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
