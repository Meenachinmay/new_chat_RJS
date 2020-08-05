import { SHOW_ALERT } from './types';

const showAlert = (data) => dispatch => {
    dispatch({
        type: SHOW_ALERT,
        payload: data
    })
}

export default showAlert;