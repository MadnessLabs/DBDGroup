import { r as registerInstance, h, H as Host } from './index-47739846.js';
import { g as getIonMode } from './ionic-global-9868b782.js';
import { m as menuController } from './index-4bc311e3.js';
import { u as updateVisibility } from './menu-toggle-util-c76c99b5.js';
import './hardware-back-button-508e48cf.js';
import './helpers-d9e8a9eb.js';
import './animation-e78ae4ea.js';

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

let MenuToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.visible = false;
    /**
     * Automatically hides the content when the corresponding menu is not active.
     *
     * By default, it's `true`. Change it to `false` in order to
     * keep `ion-menu-toggle` always visible regardless the state of the menu.
     */
    this.autoHide = true;
    this.onClick = () => {
      return menuController.toggle(this.menu);
    };
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await updateVisibility(this.menu);
  }
  render() {
    const mode = getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return (h(Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
        [mode]: true,
        'menu-toggle-hidden': hidden,
      } }, h("slot", null)));
  }
};
MenuToggle.style = menuToggleCss;

export { MenuToggle as ion_menu_toggle };
