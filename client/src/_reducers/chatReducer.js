import { GET_ALL_CHATROOMS } from '../_actions/types';

const initialState = {
    chatRooms: []
}

const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_CHATROOMS: 
            return {
                ...state, chatRooms: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default chatReducer;