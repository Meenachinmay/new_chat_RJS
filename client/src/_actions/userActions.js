import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    GET_ERRORS,
    CREATE_CHATROOM,
    GET_ALL_CHATROOMS,
    LOGOUT_USER
} from './types';
import { clearErrors } from './uiActions';

export const registerUser = (dataToSubmit, callback) => dispatch => {
    axios.post('http://localhost:4000/signup',dataToSubmit)
        .then(response => {
            dispatch({
                type: REGISTER_USER,
                payload: ""
            })
            
            dispatch(clearErrors());

            callback();
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.error
            });
        });
}

export const loginUser = (dataToSubmit, callback) => dispatch => {
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

            dispatch(clearErrors());

            callback();
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.error
            })
        });
}

export const createChatRoom = (data) => dispatch => {
    axios.post('http://localhost:4000/chat-rooms/create', data, { headers: { "Authorization": localStorage.getItem('token') } })
        .then(response => {
            dispatch({
                type: CREATE_CHATROOM,
                payload: response.data.success
            })

            // getting updated chatrooms list
            dispatch(getAllChatRooms());

            dispatch(clearErrors());
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
                         
            dispatch(clearErrors());
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
