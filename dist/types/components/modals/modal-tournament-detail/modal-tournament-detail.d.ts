import { DatabaseService } from "@fireenjin/sdk";
export declare class ModalTournamentDetail {
  tournament: Tournament;
  tournamentId: string;
  rules: string[];
  db: DatabaseService;
  render(): any;
}
