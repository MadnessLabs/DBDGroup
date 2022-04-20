import { AuthService, DatabaseService } from "@fireenjin/sdk";
import { EventEmitter } from "../../../stencil-public-runtime";
export declare class AppHome {
  dbdModalOpen: EventEmitter<{
    component: string;
    componentProps?: any;
    cssClass?: string;
  }>;
  db: DatabaseService;
  auth: AuthService;
  tournaments: any[];
  componentDidLoad(): Promise<void>;
  render(): any;
}
