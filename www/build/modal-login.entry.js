import { r as registerInstance, h } from './index-73e0b707.js';

const modalLoginCss = "";

let ModalLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-content", null, "LOGIN HERE"));
  }
};
ModalLogin.style = modalLoginCss;

export { ModalLogin as modal_login };
