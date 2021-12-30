import {
  PlayerAction,
  GET_PLAYER,
  SET_LOADING,
  SET_ERROR,
  playerState,
  GET_PLAYER_STATS,
} from "../../types/types";

const initialState: playerState = {
  data: null,
  loading: false,
  error: "",
};

const playerReducer = (
  state = initialState,
  action: PlayerAction
): playerState => {
  switch (action.type) {
    case GET_PLAYER:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case GET_PLAYER_STATS:
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

export default playerReducer;
