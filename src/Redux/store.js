import { createStore, combineReducers } from "redux";
import userReducers from "./reducers/userReducers";
import watchlistReducers from "./reducers/watchlistReducers";

const rootReducer = combineReducers({ userReducers, watchlistReducers });

export default createStore(userReducers);
