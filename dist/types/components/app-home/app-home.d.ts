import { EventEmitter } from "../../stencil-public-runtime";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
export declare class AppHome {
  dbdModalOpen: EventEmitter<{
    component: string;
    componentProps?: any;
    cssClass?: string;
  }>;
  formData: {
    name?: string;
    email?: string;
  };
  db: Firestore;
  auth: Auth;
  onSubmit(): void;
  onInput(event: any): void;
  componentDidLoad(): Promise<void>;
  render(): any;
}
