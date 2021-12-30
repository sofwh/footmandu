import {
  SET_LOADING,
  SET_ERROR,
  standingState,
  standingAction,
  GET_STANDINGS,
} from "../../types/types";

const initialState: standingState = {
  data: null,
  loading: false,
  error: "",
};

const standingReducer = (
  state = initialState,
  action: standingAction
): standingState => {
  switch (action.type) {
    case GET_STANDINGS:
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

export default standingReducer;
