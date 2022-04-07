import { r as registerInstance, h, n as Host } from './index-e5ab994a.js';
import { g as getIonMode } from './ionic-global-fc3774f0.js';
import { c as createColorClasses } from './theme-7ef00c83.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

let Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
      }) }, h("slot", null)));
  }
};
Text.style = textCss;

export { Text as ion_text };
