import { createStore, combineReducers } from "redux";
import userReducers from "../../redux/reducers/userReducers";
import watchlistReducers from "../../redux/reducers/watchlistReducers";

const rootReducer = combineReducers({ userReducers, watchlistReducers });

export default createStore(userReducers);
