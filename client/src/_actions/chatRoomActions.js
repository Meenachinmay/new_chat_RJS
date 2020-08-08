import { CONNECT_TO_SOCKET, DISCONNECT_TO_SOCKET } from './types';
import io from 'socket.io-client';

export const connectToSocket = () => dispatch => {
    const socket = io.connect('http://localhost:4000');

    socket.on('testing', data => console.log(data));

    dispatch ({
        type: CONNECT_TO_SOCKET,
        payload: true
    })
}

export const disconnectToSocket = () => dispatch => {
    dispatch({
        type: DISCONNECT_TO_SOCKET,
        payload: false
    })
}