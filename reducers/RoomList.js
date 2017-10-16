import { 
    GET_ROOM_SUCCESS,
    GET_ROOM_REQUEST,
    GET_ROOM_FAILURE
} from "../actions/config";
const roomList = (state= { roomList:null,status:null }, action) => {
    switch(action.type)
    {
    case GET_ROOM_SUCCESS:
        return Object.assign({},state,{roomList:action.roomList,status:action.status});
    case GET_ROOM_REQUEST:
        return Object.assign({},state,{status:action.status});
    case GET_ROOM_FAILURE:
        return Object.assign({},state,{status:action.status});
    default:
        return state;
    }
};
export default roomList;