import { CONNECT_TO_SOCKET, DISCONNECT_TO_SOCKET, GET_ERRORS, GET_MESSAGES } from './types';
import axios from 'axios';

export const connectToSocket = (chatRoomID, socket) => dispatch => {

    socket.on('testing', data => console.log(data));
    
    socket.emit('joinRoom', {
        chatRoomID: chatRoomID
    })
    
    dispatch ({
        type: CONNECT_TO_SOCKET,
        payload: true
    })
}

export const disconnectToSocket = (chatRoomID, socket) => dispatch => {

    socket.emit('leaveRoom' , {
        chatRoomID: chatRoomID
    })

    dispatch({
        type: DISCONNECT_TO_SOCKET,
        payload: false
    })
}

export const getMessages = () => dispatch => {
    axios.get('http://localhost:4000/messages', { headers: { "Authorization": localStorage.getItem('token')} })
        .then(response => {
            dispatch({
                type: GET_MESSAGES,
                payload: response.data.messages
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.error
            })
        })
}