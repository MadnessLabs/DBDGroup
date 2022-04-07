import { AuthService, DatabaseService, FireEnjin } from "@fireenjin/sdk";
import { ComponentInterface } from "../stencil-public-runtime";
export declare class AppRoot implements ComponentInterface {
  app: import("@firebase/app").FirebaseApp;
  auth: AuthService;
  db: DatabaseService;
  fireenjin: FireEnjin;
  componentProps: {
    app: import("@firebase/app").FirebaseApp;
    auth: AuthService;
    db: DatabaseService;
    fireenjin: FireEnjin;
  };
  onUpdate(): Promise<void>;
  componentWillLoad(): Promise<void>;
  render(): any;
}
