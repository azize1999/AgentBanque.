import { GET_USERPROFILE, EDIT_USERNAME } from "./type.actions";

/* User data recovery action */
export const userProfile = (userData) => ({
    type: GET_USERPROFILE,
    payload: userData,
});

/* Username update action */
export const updateUsername = (username) => ({
    type: EDIT_USERNAME,
    payload: username,
});
