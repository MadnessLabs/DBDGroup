import { Firestore } from "firebase/firestore";
export declare class AppTournament {
  db: Firestore;
  tournamentId: string;
  tournament: Tournament;
  componentDidLoad(): Promise<void>;
  render(): any;
}
