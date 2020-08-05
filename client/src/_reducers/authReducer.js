import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
} from '../_actions/types';
 
const initialState = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state=initialState,action) => {
    switch(action.type){
        case REGISTER_USER:
            return {...state, isAuthenticated: false, user: action.payload }
        case LOGIN_USER:
            return { ...state, isAuthenticated: true, user: action.payload }
        // case AUTH_USER:
        //     return {...state, userData: action.payload }
        // case LOGOUT_USER:
        //     return {...state }
        default:
            return state;
    }
}

export default authReducer;