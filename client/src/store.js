import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './_reducers';
import thunk from 'redux-thunk';

const InitialState = {
    auth: {authenticated: localStorage.getItem('token'), authUserID: localStorage.getItem('authUserID') }
};

const store = createStore(
    rootReducer, 
    InitialState,
    compose(
        applyMiddleware(thunk), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;