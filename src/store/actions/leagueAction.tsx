import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  GET_LEAGUE_STANDING,
  GET_LIVE_MATCH,
  LeagueAction,
  LeagueData,
  LiveMatch,
  MatchAction,
  SET_ERROR,
} from "../../types/types";
import axios from "axios";

export var url: string = "https://api-football-v1.p.rapidapi.com/v3/";

export const getLeague = (): ThunkAction<
  void,
  RootState,
  null,
  LeagueAction
> => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}leagues`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3b06053756mshed867df12f3df31p17bbe4jsn9f788a49c5bf",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
      });
      if (res.status === 200) {
        const resData: LeagueData[] = await res.data.response;

        dispatch({
          type: GET_LEAGUE_STANDING,
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
