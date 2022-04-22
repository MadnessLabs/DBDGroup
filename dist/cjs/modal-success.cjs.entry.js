'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const modalSuccessCss = "";

const ModalSuccess = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ion-content", null, index.h("ion-icon", { name: "checkmark-circle" }), index.h("h1", null, "Success")));
  }
};
ModalSuccess.style = modalSuccessCss;

exports.modal_success = ModalSuccess;
