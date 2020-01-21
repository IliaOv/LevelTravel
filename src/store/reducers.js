import { combineReducers } from "redux";
import { cardsReducer } from "./changing/reducers";

export default combineReducers({
  change: cardsReducer
});
