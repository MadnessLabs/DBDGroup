import { r as registerInstance, i as createEvent, h } from './index-73e0b707.js';

const appHomeCss = "app-home ion-content{--background:none;background:url(\"/assets/dbdtreeBkgd.png\");background-position:center;width:100%;background-repeat:no-repeat;background-size:cover;background-color:rgb(66, 66, 66);position:relative}app-home #bLogo{position:fixed;height:240px;width:280px;max-width:100%;margin-left:-120px;opacity:.7}";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalOpen = createEvent(this, "dbdModalOpen", 7);
  }
  async componentDidLoad() {
    // this.dbdModalOpen.emit({
    //   component: "modal-login",
    //   componentProps: {},
    // });
  }
  render() {
    return h("ion-content", null);
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
