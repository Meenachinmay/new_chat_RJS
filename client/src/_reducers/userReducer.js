import { CREATE_CHATROOM } from '../_actions/types';

const initialState = {
    data: {}
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_CHATROOM:
            return {
                ...state, data: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;