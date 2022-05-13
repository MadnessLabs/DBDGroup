declare type Tournament = {
  id?: string;
  image?: string;
  survivors?: Survivor[];
  name?: string;
  rules?: string[];
  timestamp?: Date;
  killers?: {
    user: User;
    name?: string;
    scoring?: KillerScores;
  }[];
  matches?: Match[];
};

declare type Match = {
  timestamp?: Date;
  scoring: {
    survivor: {
      [userId: string]: SurvivorScores;
    };
    killer: {
      [userId: string]: KillerScores;
    };
  };
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
