import { r as registerInstance, h, H as Host, a as getElement } from './index-47739846.js';
import { a as attachComponent } from './framework-delegate-2b7f1eb9.js';
import './helpers-d9e8a9eb.js';

const tabCss = ":host(.tab-hidden){display:none !important}";

let Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loaded = false;
    /** @internal */
    this.active = false;
  }
  async componentWillLoad() {
    if (this.active) {
      await this.setActive();
    }
  }
  /** Set the active component for the tab */
  async setActive() {
    await this.prepareLazyLoaded();
    this.active = true;
  }
  changeActive(isActive) {
    if (isActive) {
      this.prepareLazyLoaded();
    }
  }
  prepareLazyLoaded() {
    if (!this.loaded && this.component != null) {
      this.loaded = true;
      try {
        return attachComponent(this.delegate, this.el, this.component, ['ion-page']);
      }
      catch (e) {
        console.error(e);
      }
    }
    return Promise.resolve(undefined);
  }
  render() {
    const { tab, active, component } = this;
    return (h(Host, { role: "tabpanel", "aria-hidden": !active ? 'true' : null, "aria-labelledby": `tab-button-${tab}`, class: {
        'ion-page': component === undefined,
        'tab-hidden': !active
      } }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "active": ["changeActive"]
  }; }
};
Tab.style = tabCss;

export { Tab as ion_tab };
