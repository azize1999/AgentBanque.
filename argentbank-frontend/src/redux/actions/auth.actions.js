import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type.actions"; 


export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS, 
    payload: token,  
});


export const loginFailed = (error) => ({
    type: LOGIN_FAIL, 
    payload: error,   
});


export const logout = () => ({
    type: LOGOUT, 
});