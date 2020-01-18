import { combineReducers } from "redux";
import { addingReducer } from "./adding/reducers";

export default combineReducers({
  change: addingReducer
});
