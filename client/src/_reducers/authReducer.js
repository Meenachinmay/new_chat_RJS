import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
} from '../_actions/types';
 
const initialState = {
    authenticated: "",
    authUserID: ""
}

const authReducer = (state=initialState,action) => {
    switch(action.type){
        case REGISTER_USER:
            return { state }
        case LOGIN_USER:
            return { ...state, authenticated: action.payload.token, authUserID: action.payload.authUserID }
        case LOGOUT_USER:
            return {
                state
            }
        // case AUTH_USER:
        //     return {...state, userData: action.payload }
        // case LOGOUT_USER:
        //     return {...state }
        default:
            return state;
    }
}

export default authReducer;