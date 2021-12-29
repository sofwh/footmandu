import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import {
  PlayerAction,
  GET_PLAYER,
  SET_LOADING,
  SET_ERROR,
  PlayerData,
} from "../../types/types";
import axios from "axios";
export var url: string = "https://api-football-v1.p.rapidapi.com/v3/";

export const getPlayer = (
  player: string
): ThunkAction<void, RootState, null, PlayerAction> => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${url}players?search=${player}&league=39&season=2021`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "3b06053756mshed867df12f3df31p17bbe4jsn9f788a49c5bf",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          },
        }
      );
      if (res.status === 200) {
        const resData: PlayerData[] = await res.data.response;

        dispatch({
          type: GET_PLAYER,
          payload: resData,
        });
      }
    } catch (err) {
      let msg = (err as Error).message;
      dispatch({
        type: SET_ERROR,
        payload: msg,
      });
    }
  };
};

export const setLoading = (): PlayerAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): PlayerAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
