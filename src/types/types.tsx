export const GET_PLAYER = "GET_PLAYER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";

export interface StatsPlayer {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  games: {
    appearences: number;
    lineups: number;
    minutes: number | null;
    number: number | null;
    position: string;
    rating: number;
    captain: boolean;
  };
  substitutes: {
    in: number;
    out: number;
    bench: number;
  };
  shots: {
    total: number;
    on: number;
  };
  goals: {
    total: number | null;
    conceded: number | null;
    assists: number | null;
    saves: number | null;
  };
  passes: {
    total: number;
    key: number;
    accuracy: number;
  };
  tackles: {
    total: number;
    blocks: number | null;
    interceptions: number | null;
  };
  duels: {
    total: number | null;
    won: number | null;
  };
  dribbles: {
    attempts: number | null;
    success: number | null;
    past: number | null;
  };
  fouls: {
    drawn: number | null;
    committed: number | null;
  };
  cards: {
    yellow: number | null;
    yellowred: number | null;
    red: number | null;
  };
  penalty: {
    won: number | null;
    commited: number | null;
    scored: number | null;
    missed: number | null;
    saved: number | null;
  };
}

export interface PlayerData {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string;
      place: string;
      country: string;
    };
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
  };
  statistics: StatsPlayer[];
}

export interface PlayerError {
  message: string;
}

export interface playerState {
  data: PlayerData[] | null;
  loading: boolean;
  error: string;
}

interface GetPlayerAction {
  type: typeof GET_PLAYER;
  payload: PlayerData[];
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type PlayerAction = GetPlayerAction | SetLoadingAction | SetErrorAction;

// Team
export const GET_TEAM = "GET_TEAM";

export interface TeamData {
  team: {
    id: number;
    name: string;
    country: string;
    founded: number;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
}

export interface teamError {
  message: string;
}

export interface teamState {
  data: TeamData[] | null;
  loading: boolean;
  error: string;
}

interface GetTeamAction {
  type: typeof GET_TEAM;
  payload: TeamData[];
}

export type TeamAction = GetTeamAction | SetLoadingAction | SetErrorAction;

// LiveMatch
export const GET_LIVE_MATCH = "GET_LIVE_MATCH";

export interface LiveMatch {
  fixture: {
    id: number;
    referee: string;
    date: string;
    periods: {
      first: number;
      second: number | null;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    halftime: {
      home: number;
      away: number;
    };
    fulltime: {
      home: number;
      away: number;
    };
    extratime: {
      home: number;
      away: number;
    };
    penalty: {
      home: number;
      away: number;
    };
  };
  events: [];
}

export interface teamError {
  message: string;
}

export interface matchState {
  data: LiveMatch[] | null;
  loading: boolean;
  error: string;
}

interface GetMatchAction {
  type: typeof GET_LIVE_MATCH;
  payload: LiveMatch[];
}

export type MatchAction = GetMatchAction | SetLoadingAction | SetErrorAction;

// League
export const GET_LEAGUE_STANDING = "GET_LEAGUE_STANDING";

export interface LeagueData {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: string;
  };
}

export interface leagueError {
  message: string;
}

export interface leagueState {
  data: LeagueData[] | null;
  loading: boolean;
  error: string;
}

interface GetLeagueAction {
  type: typeof GET_LEAGUE_STANDING;
  payload: LeagueData[];
}

export type LeagueAction = GetLeagueAction | SetLoadingAction | SetErrorAction;

//Standings
export const GET_STANDINGS = "GET_STANDINGS";

export interface Standings {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  standing: Rankings[];
}

export interface Rankings {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  goalsDiff: number;
  form: string;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };

  home: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  away: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
}

export interface standingError {
  message: string;
}

export interface standingState {
  data: Standings[] | null;
  loading: boolean;
  error: string;
}

interface GetStandingAction {
  type: typeof GET_STANDINGS;
  payload: Standings[];
}

export type standingAction =
  | GetStandingAction
  | SetLoadingAction
  | SetErrorAction;
