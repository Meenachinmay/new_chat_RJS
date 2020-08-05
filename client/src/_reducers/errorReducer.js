import { GET_ERRORS, CLEAR_ERRORS } from '../_actions/types';

const initialState = {
    message: "",
    alertType: "bg-red-500"
}

const errorReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ERRORS:
            return {
               ...state, message: action.payload
            }
        case CLEAR_ERRORS:
            return { ...state, message: action.payload }
        default: 
            return state;
    }
}

export default errorReducer;