import { r as registerInstance, h } from './index-a091ab89.js';

const modalSuccessCss = "";

const ModalSuccess = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-content", null, h("ion-icon", { name: "checkmark-circle" }), h("h1", null, "Success")));
  }
};
ModalSuccess.style = modalSuccessCss;

export { ModalSuccess as modal_success };
