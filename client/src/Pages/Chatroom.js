import React, { useEffect, useState } from 'react';
import { connectToSocket, disconnectToSocket } from '../_actions/chatRoomActions';

import { useDispatch } from 'react-redux';

const Chatroom = ({ match }) => {

    const chatRoomID = match.params.id;
    const [newmessage, setNewMessage] = useState("");

    const [query, setQuery] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(newmessage)
    }

    // useEffect(() => {
    //     dispatch(connectToSocket());

    //     return ( () => {
    //         dispatch(disconnectToSocket());
    //     })
    //     // eslint-disable-next-line
    // },[query]);

    return (
        <div className="flex-shrink-0 mx-auto w-1/3 shadow">
            <div className="p-2 mt-32 rounded-md bg-white overflow-hidden">
                <p className="text-center text-xl text-gray-700 font-semibold border-b">Messages</p>
                <div className="p-1 mt-2 overflow-auto" style={{ maxHeight: '350px'}}>
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
                </div>
                <div className="flex flex-shrink-0 justify-between items-center p-1 mt-1">
                    <input type="text" onChange={(e) => setNewMessage(e.target.value)} className="border rounded text-sm font-semibold py-1 px-1  w-full focus:outline-none" placeholder="Enter message..."/>
                    <button onClick={handleSubmit} className="bg-indigo-500 p-1 rounded text-white px-3 ml-2 focus:outline-none uppercase" >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chatroom;
