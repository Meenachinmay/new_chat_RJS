import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER
} from '../_actions/types';
 
const initialState = {
    authenticated: "",
    authUserID: "",
    authUser: {}
}

const authReducer = (state=initialState,action) => {
    switch(action.type){
        case REGISTER_USER:
            return { ...state, authenticated: action.payload, authUserID: action.payload }
        case LOGIN_USER:
            return { ...state, authenticated: action.payload.token, authUserID: action.payload.authUserID }
        case LOGOUT_USER:
            return {
                ...state, authenticated: action.payload, authUserID: action.payload
            }
        case GET_AUTH_USER:
            return {
                ...state, authUser: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;