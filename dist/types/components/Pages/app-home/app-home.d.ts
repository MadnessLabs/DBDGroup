import { EventEmitter } from "../../../stencil-public-runtime";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
export declare class AppHome {
  dbdModalOpen: EventEmitter<{
    component: string;
    componentProps?: any;
    cssClass?: string;
  }>;
  db: Firestore;
  auth: Auth;
  componentDidLoad(): Promise<void>;
  render(): any;
}
