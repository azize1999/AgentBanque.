import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT } from "../actions/type.actions";

/* Initial user state */
const initialState = {
    status: 'VOID',
    userData: {
        userName: '',
        firstName: '',
        lastName: '',
    },
};

/* User Reducer */
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload
            };

        case EDIT_USERNAME:
            return {
                ...state,
                status: 'MODIFIED',
                userData: {
                    ...state.userData,
                    username: action.payload
                }
            };

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
};
