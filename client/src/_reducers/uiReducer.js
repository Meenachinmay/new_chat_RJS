import { SHOW_ALERT } from '../_actions/types';

const initialState = {
    alertData: ""
}

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_ALERT:
            return {
                ...state, alertData: action.payload
            }
        default:
            return state;
    }
}

export default uiReducer;