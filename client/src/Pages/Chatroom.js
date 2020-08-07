import React from 'react'
import io from 'socket.io-client';

const Chatroom = ({ match }) => {

    const chatRoomID = match.params.id;
    
    alert(chatRoomID);

    const socket = io('http://localhost:4000' , {
        query: {
            token: localStorage.getItem('token')
        }
    })

    return (
        <div>
            Chatroom
        </div>
    )
}

export default Chatroom;
