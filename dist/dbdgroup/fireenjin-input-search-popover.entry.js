import { r as registerInstance } from './index-e5ab994a.js';

let InputSearchPopover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.results = [];
  }
  render() {
    return this.results.map(result => this.template(result));
  }
};

export { InputSearchPopover as fireenjin_input_search_popover };
