import { r as registerInstance, h, m as Host, n as getElement } from './index-0fc14935.js';
import { r as reorderThreeOutline, n as reorderTwoSharp } from './index-5e1d0749.js';
import { g as getIonMode } from './ionic-global-140a6091.js';

const reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";

const reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";

let Reorder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onClick(ev) {
    const reorderGroup = this.el.closest('ion-reorder-group');
    ev.preventDefault();
    // Only stop event propagation if the reorder is inside of an enabled
    // reorder group. This allows interaction with clickable children components.
    if (!reorderGroup || !reorderGroup.disabled) {
      ev.stopImmediatePropagation();
    }
  }
  render() {
    const mode = getIonMode(this);
    const reorderIcon = mode === 'ios' ? reorderThreeOutline : reorderTwoSharp;
    return (h(Host, { class: mode }, h("slot", null, h("ion-icon", { icon: reorderIcon, lazy: false, class: "reorder-icon", part: "icon" }))));
  }
  get el() { return getElement(this); }
};
Reorder.style = {
  ios: reorderIosCss,
  md: reorderMdCss
};

export { Reorder as ion_reorder };
