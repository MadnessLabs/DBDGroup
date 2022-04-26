declare type Tournament = {
  id?: string;
  survivors?: Survivor[];
  name?: string;
  rules?: string[];
  killers?: {
    user: User;
    killerpoints: number;
    generatorsLeft: number;
    hooks: number;
    kills: number;
    survivorsEscaped: number;
  }[];
};

declare type Survivor = {
  user: User;
  bloodpoints: number;
  name?: string;
};

declare type User = {
  id?: string;
  name?: string;
  discordId?: string;
  steamId?: string;
  email?: string;
  enteringAs?: string;
};
