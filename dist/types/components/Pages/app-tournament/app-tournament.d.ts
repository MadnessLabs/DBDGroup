import { DatabaseService } from "@fireenjin/sdk";
export declare class AppTournament {
  db: DatabaseService;
  tournamentId: string;
  tournaments: any[];
  componentDidLoad(): Promise<void>;
  render(): any;
}
