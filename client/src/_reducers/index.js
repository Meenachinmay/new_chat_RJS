import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import chatReducer from './chatReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    user: userReducer,
    chat: chatReducer,
    ui: uiReducer
});

export default rootReducer;