import {
  SET_LOADING,
  SET_ERROR,
  GET_TEAM,
  teamState,
  TeamAction,
} from "../../types/types";

const initialState: teamState = {
  data: null,
  loading: false,
  error: "",
};

const teamReducer = (state = initialState, action: TeamAction): teamState => {
  switch (action.type) {
    case GET_TEAM:
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

export default teamReducer;
