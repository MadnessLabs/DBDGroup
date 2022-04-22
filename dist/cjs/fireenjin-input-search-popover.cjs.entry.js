'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const InputSearchPopover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.results = [];
  }
  render() {
    return this.results.map(result => this.template(result));
  }
};

exports.fireenjin_input_search_popover = InputSearchPopover;
