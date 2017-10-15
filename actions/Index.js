import {
    USER_LOGIN_REQUEST,
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
        type:USER_LOGIN_REQUEST,
        status:SUCCESS,
        payload:userData
    };
};
const userLoginFailure = (message) =>{
    return {
        type:USER_LOGIN_REQUEST,
        status:FAILURE,
        message
    };
};

export function userLogin(userData){
    console.log(userData);
return async (dispatch, getState, api) => {
    dispatch(userLoginRequest());
    try {
      dispatch(userLoginSuccess(userData));
    } catch (e) {
      dispatch(userLoginFailure(e.message));
    }
  };
};