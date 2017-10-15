import { combineReducers } from "redux";
import isLogedin from "./login";

const allReducers = combineReducers({
  isLogedin
});
export default allReducers;