import { r as registerInstance, h, n as Host, m as getElement } from './index-73e0b707.js';
import { g as getIonMode } from './ionic-global-ed3e9db3.js';

const selectOptionCss = ":host{display:none}";

let SelectOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputId = `ion-selopt-${selectOptionIds++}`;
    /**
     * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `ion-action-sheet` does not allow for disabled buttons.
     */
    this.disabled = false;
  }
  render() {
    return h(Host, { role: "option", id: this.inputId, class: getIonMode(this) });
  }
  get el() { return getElement(this); }
};
let selectOptionIds = 0;
SelectOption.style = selectOptionCss;

export { SelectOption as ion_select_option };
