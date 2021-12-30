import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  GET_STANDINGS,
  SET_ERROR,
  standingAction,
  Standings,
} from "../../types/types";
import axios from "axios";

export var url: string = "https://api-football-v1.p.rapidapi.com/v3/";

export const getStanding = (
  id: number
): ThunkAction<void, RootState, null, standingAction> => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}standings?season=2021&league=${id}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3b06053756mshed867df12f3df31p17bbe4jsn9f788a49c5bf",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
      });
      if (res.status === 200) {
        const resData: Standings[] = await res.data.response;

        dispatch({
          type: GET_STANDINGS,
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
