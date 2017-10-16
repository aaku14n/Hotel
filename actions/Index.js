import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_RESET,
    GET_ROOM_REQUEST,
    GET_ROOM_FAILURE,
    GET_ROOM_SUCCESS,
    REQUEST,
    SUCCESS,
    FAILURE
} from "./config";

const userLoginRequest = () =>{
    return {
        type:USER_LOGIN_REQUEST,
        status:REQUEST
    };
};

const userLoginSuccess = (userData) =>{
    return {
        type:USER_LOGIN_SUCCESS,
        status:SUCCESS,
        isLogedin:userData
    };
};
const userLoginFailure = (message) =>{
    return {
        type:USER_LOGIN_FAILURE,
        status:FAILURE,
        message
    };
};
const userLoginReset = () =>{
    return {
        type:USER_LOGIN_RESET,
        status:null,
    };
};
export function userLogin(userData){
    return async (dispatch, getState, api) => {
        setTimeout(()=>dispatch(userLoginReset()),3000);
        dispatch(userLoginRequest());
        try {
            const result = await api.login(userData);
            if(result.data.statusCode == 200) dispatch(userLoginSuccess(result.data.body));
            else dispatch(userLoginFailure(result.data.body));
        } catch (e) {
        dispatch(userLoginFailure(e.message));
        }
    };
};

const getRoomListRequest = () =>{
    return {
        type:GET_ROOM_REQUEST,
        status:REQUEST
    };
};

const getRoomListSuccess = (userData) =>{
    return {
        type:GET_ROOM_SUCCESS,
        status:SUCCESS,
        roomList:userData
    };
};
const getRoomListFailure = (message) =>{
    return {
        type:GET_ROOM_FAILURE,
        status:FAILURE,
        message
    };
};

export function getRoomList(){
return async (dispatch, getState, api) => {
    dispatch(getRoomListRequest());
    try {
        const result = await api.getRoom();
        if(result.data.statusCode == 400) dispatch(getRoomListSuccess(result.data.body));
        else dispatch(getRoomListFailure(result.data.body));
    } catch (e) {
      dispatch(getRoomListFailure(e.message));
    }
  };
};