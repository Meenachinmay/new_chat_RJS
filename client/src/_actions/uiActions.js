import { SHOW_ALERT, CLEAR_ERRORS } from './types';

export const showAlert = (data) => dispatch => {
    dispatch({
        type: SHOW_ALERT,
        payload: data
    })
}

export const clearErrors = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS
    })
}