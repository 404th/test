import { createStore, combineReducers } from "redux";

import { mainPageReducer } from "./containers/main/reducer";

const reducers = combineReducers({
  mainPage: mainPageReducer,
});

export default createStore(reducers);
