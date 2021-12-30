import {
  SET_LOADING,
  SET_ERROR,
  matchState,
  MatchAction,
  GET_LIVE_MATCH,
} from "../../types/types";

const initialState: matchState = {
  data: null,
  loading: false,
  error: "",
};

const matchReducer = (
  state = initialState,
  action: MatchAction
): matchState => {
  switch (action.type) {
    case GET_LIVE_MATCH:
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

export default matchReducer;
