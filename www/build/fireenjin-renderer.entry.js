import { r as registerInstance, h } from './index-bac865b7.js';

let Renderer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-content", null, h("fireenjin-pagination", { endpoint: "listUsers", limit: 24, listEl: ({ result }) => h("ion-item", null, result.id) })));
  }
};

export { Renderer as fireenjin_renderer };
