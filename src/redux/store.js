import Reducers from "../reducers";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import { middlewares } from "./middlewares";

const reducers = combineReducers({
  ...Reducers,
});

const compositions = [applyMiddleware(...middlewares)];

const composer = compose(...compositions);

export default createStore(reducers, composer);
