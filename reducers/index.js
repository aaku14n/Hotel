import { combineReducers } from "redux";
import isLogedin from "./login";
import roomList from "./RoomList";
import roomByDate from "./RoomByDate";

const allReducers = combineReducers({
    isLogedin,
    roomList,
    roomByDate
});
export default allReducers;