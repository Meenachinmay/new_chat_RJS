import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    user: userReducer,
    chat: chatReducer
});

export default rootReducer;