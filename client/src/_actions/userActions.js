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

// export function loginUser(dataToSubmit){
//     const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
//                 .then(response => response.data);

//     return {
//         type: LOGIN_USER,
//         payload: request
//     }
// }

// export function auth(){
//     const request = axios.get(`${USER_SERVER}/auth`)
//     .then(response => response.data);

//     return {
//         type: AUTH_USER,
//         payload: request
//     }
// }

// export function logoutUser(){
//     const request = axios.get(`${USER_SERVER}/logout`)
//     .then(response => response.data);

//     return {
//         type: LOGOUT_USER,
//         payload: request
//     }
// }
