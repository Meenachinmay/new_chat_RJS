import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    GET_ERRORS,
    CREATE_CHATROOM,
    GET_ALL_CHATROOMS,
    LOGOUT_USER
} from './types';

import { clearErrors, showNotification, unsetLoading, resetNotification } from './uiActions';

export const registerUser = (dataToSubmit, errors, callback) => dispatch => {
    axios.post('http://localhost:4000/signup',dataToSubmit)
        .then(response => {
            dispatch({
                type: REGISTER_USER,
                payload: ""
            })
            
            if (errors){
                dispatch(clearErrors());
            }

            callback();
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.error
            });
            dispatch(unsetLoading());
        });
}

export const loginUser = (dataToSubmit, errors,callback) => dispatch => {
    axios.post('http://localhost:4000/signin',dataToSubmit)
        .then(response => {
            dispatch({
                type: LOGIN_USER,
                payload: {
                    token: response.data.token,
                    authUserID: response.data.user._id
                }
            })

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('authUserID', response.data.user._id);

            if (errors){
                dispatch(clearErrors());
            }

            callback();
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.error
            })
            dispatch(unsetLoading());
        });
}

export const createChatRoom = (data, errors,callback) => dispatch => {
    axios.post('http://localhost:4000/chat-rooms/create', data, { headers: { "Authorization": localStorage.getItem('token') } })
        .then(response => {
            dispatch({
                type: CREATE_CHATROOM,
                payload: response.data.success
            })

            callback();

            dispatch(showNotification("Chat room is created!"))

            setTimeout(() => {
                dispatch(resetNotification());
            }, 2000);

            if (errors){
                dispatch(clearErrors());
            }
            // getting updated chatrooms list
            dispatch(getAllChatRooms());
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.error
            })
        })
}

export const getAllChatRooms = () => dispatch => {
    axios.get('http://localhost:4000/chatrooms', { headers: {"Authorization": localStorage.getItem('token') } })
        .then(response => {
            dispatch({
                type: GET_ALL_CHATROOMS,
                payload: response.data.chatRooms
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: "Error in getting chatsrooms"
            })
        })
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('authUserID');

    dispatch({
        type: LOGOUT_USER,
        payload: ""
    });
}
