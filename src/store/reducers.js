import { combineReducers } from "redux";
import { addingReducer } from "./changing/reducers";

export default combineReducers({
  change: addingReducer
});
