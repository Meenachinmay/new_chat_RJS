import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';


const Chatroom = ({ match }) => {

    const socket = io.connect('http://localhost:4000');
    const [query, setQuery] = useState(false);
    
    useEffect(() => {
        socket.on('testing', data => console.log(data));
        
        // eslint-disable-next-line
    },[query]);

    return (
        <div>
            Chatroom
        </div>
    )
}

export default Chatroom;
