declare type Tournament = {
  id?: string;
  survivors: {
    user: User;
    bloodpoints: number;
  }[];
  killers: {
    user: User;
    killerpoints: number;
    generatorsLeft: number;
    hooks: number;
    kills: number;
    survivorsEscaped: number;
  }[];
};

declare type User = {
  id?: string;
  name?: string;
  steamId?: string;
  email?: string;
};
