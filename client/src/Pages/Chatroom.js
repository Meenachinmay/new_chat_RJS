import React, { useEffect, useState } from 'react';
import { connectToSocket, disconnectToSocket, getMessages } from '../_actions/chatRoomActions';

import { useDispatch, useSelector } from 'react-redux';

import io from 'socket.io-client';
import { message } from 'antd';

const Chatroom = ({ match }) => {

    const chatRoomID = match.params.id;
    const [newmessage, setNewMessage] = useState("");
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const authUser = useSelector(state => state.auth.authUserID);
    const messages = useSelector(state => state.chat.messages);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newmessage){
            alert("You can't send empty message.")
        }

        const socket = io.connect('http://localhost:4000');

        socket.emit('chatroomMessage', {
            chatRoomID: chatRoomID,
            userID: authUser,
            message: newmessage
        })

        setNewMessage("");
        setQuery(newmessage);
        // setMessages([...messages, newmessage]);
    }

    useEffect(() => {

        const socket = io.connect('http://localhost:4000');

        dispatch(connectToSocket(chatRoomID, socket));

        socket.on('newMessage', ({ message }) => {
            
        })

        dispatch(getMessages());

        return ( () => {
            dispatch(disconnectToSocket(chatRoomID, socket));
        })
       
    },[query]);

    return (
        <div className="flex-shrink-0 mx-auto w-1/2 shadow">
            <div className="p-2 mt-32 rounded-md bg-white">
                <p className="text-center text-xl text-gray-700 font-semibold border-b">Messages</p>
                <div className="p-1 mt-2 overflow-auto" style={{ height: '500px'}}>
                    <div className="flex" style={{ maxWidth: '400px'}}>
                        <div className="flex bg-blue-500 text-white font-semibold p-2 rounded"> 
                            <p>Meenachinmay:</p>
                            <p className="ml-1" style={{ width: '300px'}}>How are you? okay i will come on monday</p>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 mt-2">
                        <div className="flex bg-gray-500 text-white font-semibold p-2 rounded"> 
                            <p>Meenachinmay2:</p>
                            <p className="ml-1" style={{ width: '300px'}}>i am fine</p>
                        </div>
                    </div>
                    {messages.map(message => (
                        <div key={message._id} className="flex flex-shrink-0 mt-2">
                            <div className="flex bg-gray-500 text-white font-semibold p-2 rounded"> 
                                <p>{message.user.name}:</p>
                                <p className="ml-1" style={{ width: '300px'}} >{message.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-shrink-0 justify-between items-center p-1 mt-1">
                    <input type="text" value={newmessage} onChange={(e) => setNewMessage(e.target.value)} className="border rounded text-sm font-semibold py-1 px-1  w-full focus:outline-none" placeholder="Enter message..."/>
                    <button onClick={handleSubmit} className="bg-indigo-500 p-1 rounded text-white px-3 ml-2 focus:outline-none uppercase" >Send</button>
            </div>
        </div>
    )
}

export default Chatroom;
