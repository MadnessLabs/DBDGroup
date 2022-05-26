import { Timestamp } from "firebase/firestore";

declare type TournamentStatus = "open" | "full" | "in progress" | "completed";

declare type Tournament = {
  id?: string;
  status?: TournamentStatus;
  matchCount?: number;
  image?: string;
  survivors?: Participant<SurvivorScores>[];
  name?: string;
  rules?: string[];
  timestamp?: Date;
  killers?: Participant<KillerScores>[];
  matches?: Match[];
};

declare type Match = {
  timestamp?: Timestamp;
  scoring?: {
    survivor: {
      [userId: string]: SurvivorScores;
    };
    killer: {
      [userId: string]: KillerScores;
    };
  };
};

declare type Participant<T> = {
  user: User;
  name?: string;
  scoring?: T;
  participating?: boolean;
};

declare type KillerScores = {
  kills?: number;
  generatorsLeft?: number;
  escapes?: number;
};

declare type SurvivorScores = {
  bloodpoints?: number;
};

declare type User = {
  id?: string;
  name?: string;
  discordId?: string;
  steamId?: string;
  email?: string;
  enteringAs?: string;
};

declare type GlobalState = {
  session?: any;
  claims?: {
    admin?: boolean;
    role?: string;
  };
  profile?: User;
};
