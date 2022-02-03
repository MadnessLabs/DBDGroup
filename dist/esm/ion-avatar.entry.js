import { r as registerInstance, h, H as Host } from './index-47739846.js';
import { g as getIonMode } from './ionic-global-9868b782.js';

const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";

const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";

let Avatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Avatar.style = {
  ios: avatarIosCss,
  md: avatarMdCss
};

export { Avatar as ion_avatar };
