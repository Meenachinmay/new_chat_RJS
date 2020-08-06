import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createChatRoom, getAllChatRooms } from '../_actions/userActions';

import Authentication from '../_hoc/Authentication';

const Dashboard = () => {

        const list = [
            {_id: "5f2bc3a266c8820efe85d36a", name: "firstchatroom", createdAt: "2020-08-06T08:47:30.146Z", updatedAt: "2020-08-06T08:47:30.146Z", __v: 0},
            {_id: "5f2bc576e9903b136c153cef", name: "firstchatroom2", createdAt: "2020-08-06T08:55:18.160Z", updatedAt: "2020-08-06T08:55:18.160Z", __v: 0},
            {_id: "5f2bc582e9903b136c153cf0", name: "firstchatroom3", createdAt: "2020-08-06T08:55:30.383Z", updatedAt: "2020-08-06T08:55:30.383Z", __v: 0},
            { _id: "5f2bc589e9903b136c153cf1", name: "firstchatroom4", createdAt: "2020-08-06T08:55:37.096Z", updatedAt: "2020-08-06T08:55:37.096Z", __v: 0}
        ]

    const [chatroom, setChatRoom] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: chatroom
        }
        
        dispatch(createChatRoom(data));
    }   

    const getRooms = () => {
        dispatch(getAllChatRooms());
        console.log(ChatRoomsList)
    }

    const ChatRoomsList = useSelector(state => state.chat.chatRooms)

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
                                <button className="bg-indigo-500 text-white p-1 rounded px-2">Join</button>
                            </li>
                        ))}
                        <li className="mb-1 text-sm font-light tracking-normal flex justify-between items-center">
                            get all the chat rooms
                            <button onClick={getRooms} className="bg-indigo-500 text-white p-1 rounded px-2">get</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
    )
}

export default Authentication(Dashboard);