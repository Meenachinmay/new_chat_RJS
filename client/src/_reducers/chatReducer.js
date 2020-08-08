import { GET_ALL_CHATROOMS, CONNECT_TO_SOCKET, DISCONNECT_TO_SOCKET, GET_MESSAGES } from '../_actions/types';

const initialState = {
    chatRooms: [],
    messages: [],
    connectedToSocket: false
}

const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_CHATROOMS: 
            return {
                ...state, chatRooms: action.payload
            }
        case CONNECT_TO_SOCKET:
            return {
                ...state, connectedToSocket: action.payload
            }
        case GET_MESSAGES:
            return {
                ...state, messages: action.payload
            }
        case DISCONNECT_TO_SOCKET:
            return {
                ...state, connectedToSocket: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default chatReducer;