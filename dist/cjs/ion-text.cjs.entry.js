'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e14d11a5.js');
const ionicGlobal = require('./ionic-global-c6a27ea6.js');
const theme = require('./theme-98ccfc24.js');

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

let Text = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: theme.createColorClasses(this.color, {
        [mode]: true,
      }) }, index.h("slot", null)));
  }
};
Text.style = textCss;

exports.ion_text = Text;
