import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import leagueReducer from "./reducers/leagueReducer";
import matchReducer from "./reducers/matchReducer";
import playerReducer from "./reducers/playerReducer";
import standingReducer from "./reducers/standingReducer";
import teamReducer from "./reducers/teamReducer";
const rootReducer = combineReducers({
  players: playerReducer,
  teams: teamReducer,
  matchs: matchReducer,
  league: leagueReducer,
  standings: standingReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
