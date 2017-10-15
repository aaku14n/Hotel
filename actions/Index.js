import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_RESET,
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
      dispatch(userLoginSuccess(userData));
    } catch (e) {
      dispatch(userLoginFailure(e.message));
    }
  };
};