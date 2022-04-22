import { DatabaseService } from "@fireenjin/sdk";
import { EventEmitter } from "../../../stencil-public-runtime";
export declare class AppTournament {
  dbdModalOpen: EventEmitter;
  dbdPopoverOpen: EventEmitter;
  db: DatabaseService;
  tournamentId: string;
  tournament: Tournament;
  componentDidLoad(): Promise<void>;
  render(): any;
}
