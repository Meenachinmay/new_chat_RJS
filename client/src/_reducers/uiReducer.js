import { SHOW_NOTIFICATION, RESET_NOTIFICATION, SET_LOADING, UNSET_LOADING } from '../_actions/types';

const initialState = {
    showNotification: false,
    notificationMessage: "",
    loading: false
}

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_NOTIFICATION:
            return {
                ...state, showNotification: action.payload.show, notificationMessage: action.payload.notificationMessage
            }
        case RESET_NOTIFICATION:
            return {
                ...state, showNotification: action.payload.show, notificationMessage: action.payload.notificationMessage
            }
        case SET_LOADING:
            return {
                ...state, loading: action.payload
            }
        case UNSET_LOADING:
            return {
                ...state, loading: action.payload
            }
        default:
            return { ...state }
    }
}

export default uiReducer;