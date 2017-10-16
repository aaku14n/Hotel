import { combineReducers } from "redux";
import isLogedin from "./login";
import roomList from "./RoomList";

const allReducers = combineReducers({
    isLogedin,
    roomList
});
export default allReducers;