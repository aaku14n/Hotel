import { 
    GET_ROOM_BY_DATE_SUCCESS,
    GET_ROOM_BY_DATE_REQUEST,
    GET_ROOM_BY_DATE_FAILURE
} from "../actions/config";
const roomByDate = (state= { roomByDate:null,status:null }, action) => {
    switch(action.type)
    {
        case GET_ROOM_BY_DATE_SUCCESS:
            return Object.assign({},state,{roomByDate:action.roomByDate,status:action.status});
        case GET_ROOM_BY_DATE_REQUEST:
            return Object.assign({},state,{status:action.status});
        case GET_ROOM_BY_DATE_FAILURE:
            return Object.assign({},state,{status:action.status});
        default:
            return state;
    }
};
export default roomByDate;