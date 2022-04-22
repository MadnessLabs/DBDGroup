'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const chipBarCss = "fireenjin-chip-bar{display:block;padding:3px;height:46px;width:100%;overflow:hidden;overflow-x:auto !important;white-space:nowrap}ion-chip ion-icon.ft-icon-style{height:14px !important;width:14px !important;padding:4px !important}fireenjin-chip-bar ion-router-link:hover ion-icon{color:var(--ion-color-secondary)}fireenjin-chip-bar::-webkit-scrollbar{width:0;height:5px}fireenjin-chip-bar::-webkit-scrollbar-thumb{background:rgba(var(--ion-text-color-rgb), 0.6);border-radius:2px}";

const ChipBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
ChipBar.style = chipBarCss;

exports.fireenjin_chip_bar = ChipBar;
