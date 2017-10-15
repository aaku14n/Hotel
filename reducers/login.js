import { 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAILURE,
    USER_LOGIN_RESET
} from "../actions/config";
const isLogedin = (state= { isLogedin:false,status:null }, action) => {
    switch(action.type)
    {
        case USER_LOGIN_SUCCESS:
            return Object.assign({},state,{isLogedin:false,status:action.status});
        case USER_LOGIN_REQUEST:
            return Object.assign({},state,{status:action.status});
        case USER_LOGIN_FAILURE:
            return Object.assign({},state,{status:action.status});
            case USER_LOGIN_RESET:
            return Object.assign({},state,{status:action.status});
        default:
            return state;
    }
};
export default isLogedin;