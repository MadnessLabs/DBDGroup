import { DatabaseService } from "@fireenjin/sdk";
export declare class AppTournament {
  db: DatabaseService;
  tournamentId: string;
  tournament: Tournament;
  componentDidLoad(): Promise<void>;
  render(): any;
}
