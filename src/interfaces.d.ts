import { Timestamp } from "firebase/firestore";

declare type Tournament = {
  id?: string;
  status?: "open" | "full" | "in progress" | "completed";
  matchCount?: number;
  image?: string;
  survivors?: Survivor[];
  name?: string;
  rules?: string[];
  timestamp?: Date;
  killers?: Killer[];
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

declare type Killer = {
  user: User;
  name?: string;
  scoring?: KillerScores;
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

declare type Survivor = {
  user: User;
  name?: string;
  scoring?: SurvivorScores;
  participating?: boolean;
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
