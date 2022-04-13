import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  @Event() dbdModalOpen: EventEmitter<{
    component: string;
    componentProps?: any;
    cssClass?: string;
  }>;

  @Prop() db: Firestore;
  @Prop() auth: Auth;

  async componentDidLoad() {
    // this.dbdModalOpen.emit({
    //   component: "modal-login",
    //   componentProps: {},
    // });
  }

  render() {
    return <ion-content></ion-content>;
  }
}
