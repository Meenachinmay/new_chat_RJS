import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    user: userReducer,
});

export default rootReducer;