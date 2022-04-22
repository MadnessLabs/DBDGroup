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
};

declare type User = {
  id?: string;
  name?: string;
  steamId?: string;
  email?: string;
};
