import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import {
  SET_LOADING,
  SET_ERROR,
  GET_TEAM,
  TeamAction,
  TeamData,
} from "../../types/types";
import axios from "axios";
export var url: string = "https://api-football-v1.p.rapidapi.com/v3/";

export const getTeam = (
  team: string
): ThunkAction<void, RootState, null, TeamAction> => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}teams?search=${team}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3b06053756mshed867df12f3df31p17bbe4jsn9f788a49c5bf",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
      });
      if (res.status === 200) {
        const resData: TeamData[] = await res.data.response;

        dispatch({
          type: GET_TEAM,
          payload: resData,
        });
      }

      // Individual player
    } catch (err) {
      let msg = (err as Error).message;
      dispatch({
        type: SET_ERROR,
        payload: msg,
      });
    }
  };
};

export const setLoading = (): TeamAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): TeamAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
