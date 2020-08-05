import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    ui: uiReducer
});

export default rootReducer;