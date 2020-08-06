import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createChatRoom, getAllChatRooms } from '../_actions/userActions';

import Authentication from '../_hoc/Authentication';

const Dashboard = () => {

    const [chatroom, setChatRoom] = useState("");
    const [roomsFromCache, setRoomsFromCache] = useState([]);
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    let ChatRoomsList = useSelector(state => state.chat.chatRooms);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: chatroom
        }

        dispatch(createChatRoom(data));
    }    

    useEffect(() => {
        if (localStorage.getItem('chatrooms')){
            const rooms = JSON.parse(localStorage.getItem('chatrooms'));
            setRoomsFromCache(rooms);
        } else {
            dispatch(getAllChatRooms())
        }
    },[query]);

    return (
        <div className="flex-shrink-0 mx-auto w-1/5">
            <div className="p-2 mt-32 rounded bg-white shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col m-2 p-2">
                        <p className="text-center text-2xl text-gray-500 mb-5">
                            Create ChatRoom
                        </p>
                        <input 
                            type="email" 
                            className="p-2 focus:outline-none bg-gray-100 border-1 border-solid rounded hover:bg-gray-300 focus:bg-gray-300 text-gray-700" 
                            value={chatroom}
                            onChange={(e) => {setChatRoom(e.target.value)}}
                            placeholder="Create new chat room..."
                            required
                        />
                    </div>
                    <div className="text-center mb-2">
                        <button 
                            type="submit"  
                            onClick={handleSubmit} 
                            className="text-white bg-indigo-500 px-3 py-2 rounded focus:outline-none hover:bg-indigo-600">
                                Create Chatroom
                        </button>
                    </div>
                </form>
            </div>
            <div className="p-2 mt-5 rounded bg-white shadow-lg">
                <p className="font-light text-gray-700 text-center">
                    Created Chatrooms
                </p>
                <div className="m-2 p-2 overflow-auto" style={{ maxHeight: '300px'}}>
                    <ul>
                        {ChatRoomsList.map(chatroom => (
                            <li key={chatroom._id} className="mb-1 text-sm font-light tracking-normal flex justify-between items-center">
                                {chatroom.name}
                                <button className="bg-indigo-500 text-white p-1 rounded px-2 focus:outline-none">Join</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>  
    )
}

export default Authentication(Dashboard);