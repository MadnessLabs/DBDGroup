import { DatabaseService } from "@fireenjin/sdk";
import { EventEmitter } from "../../stencil-public-runtime";
export declare class DbdTournamentDetails {
  dbdModalOpen: EventEmitter<{
    component?: string;
    cssClass?: string;
    componentProps?: any;
  }>;
  image: string;
  name: string;
  dateTime: string;
  rules: string[];
  tournamentId: string;
  db: DatabaseService;
  tournament: Tournament;
  render(): any;
}
