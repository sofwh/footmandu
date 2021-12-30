import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  GET_LIVE_MATCH,
  LiveMatch,
  MatchAction,
  SET_ERROR,
} from "../../types/types";
import axios from "axios";

export var url: string = "https://api-football-v1.p.rapidapi.com/v3/";

export const getMatch = (): ThunkAction<void, RootState, null, MatchAction> => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}fixtures?live=all`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3b06053756mshed867df12f3df31p17bbe4jsn9f788a49c5bf",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
      });
      if (res.status === 200) {
        const resData: LiveMatch[] = await res.data.response;

        dispatch({
          type: GET_LIVE_MATCH,
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
