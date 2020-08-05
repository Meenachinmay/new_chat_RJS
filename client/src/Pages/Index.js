import React from 'react'
import { Link } from 'react-router-dom';



const Index = () => {
    return (
        <div className="">
            <div className="flex flex-shrink-0 justify-between items-center bg-indigo-500 text-white px-8 py-4 cursor-pointer">
                <Link to="/" className="uppercase">Messenger</Link>
                <div className="flex justify-between items-center">
                    <Link to="/dashboard" className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                        Dashboard
                    </Link>
                    <Link to="/chatroom" className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                        Chatroom
                    </Link>
                </div>
                <div className="flex justify-between items-center">
                    <Link to="/login" className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                        Login
                    </Link>
                    <Link to="/register" className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                        Register
                    </Link>
                </div>
            </div> 
            <div>
                
            </div>
        </div>
    )
}

export default Index;
