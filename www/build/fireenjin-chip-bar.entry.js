import { r as registerInstance, h, o as Host } from './index-6e03bf48.js';

const chipBarCss = "fireenjin-chip-bar{display:block;padding:3px;height:46px;width:100%;overflow:hidden;overflow-x:auto !important;white-space:nowrap}ion-chip ion-icon.ft-icon-style{height:14px !important;width:14px !important;padding:4px !important}fireenjin-chip-bar ion-router-link:hover ion-icon{color:var(--ion-color-secondary)}fireenjin-chip-bar::-webkit-scrollbar{width:0;height:5px}fireenjin-chip-bar::-webkit-scrollbar-thumb{background:rgba(var(--ion-text-color-rgb), 0.6);border-radius:2px}";

const ChipBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
ChipBar.style = chipBarCss;

export { ChipBar as fireenjin_chip_bar };
