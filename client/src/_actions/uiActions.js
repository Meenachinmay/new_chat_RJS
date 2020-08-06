import { CLEAR_ERRORS, SHOW_NOTIFICATION, RESET_NOTIFICATION, SET_LOADING, UNSET_LOADING } from './types';

export const clearErrors = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS,
        payload: ""
    })
}

export const showNotification = (message) => dispatch => {
    dispatch({
        type: SHOW_NOTIFICATION,
        payload: {
            show: true,
            notificationMessage: message
        }   
    })
}

export const resetNotification = () => dispatch => {
    dispatch({
        type: RESET_NOTIFICATION,
        payload: {
            show: false,
            notificationMessage: ""
        }
    })
}

export const setLoading = () => dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
}

export const unsetLoading = () => dispatch => {
    dispatch({
        type: UNSET_LOADING,
        payload: false
    })
}