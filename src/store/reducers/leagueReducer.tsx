import {
  SET_LOADING,
  SET_ERROR,
  leagueState,
  LeagueAction,
  GET_LEAGUE_STANDING,
} from "../../types/types";

const initialState: leagueState = {
  data: null,
  loading: false,
  error: "",
};

const leagueReducer = (
  state = initialState,
  action: LeagueAction
): leagueState => {
  switch (action.type) {
    case GET_LEAGUE_STANDING:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default leagueReducer;
