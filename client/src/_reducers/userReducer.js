import { CREATE_CHATROOM } from '../_actions/types';

const initialState = {
    chatRoomCreatedSuccess: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_CHATROOM:
            return {
                ...state, chatRoomCreatedSuccess: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;