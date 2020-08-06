import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../_actions/userActions';


const Index = () => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.authenticated);

    if (isAuthenticated) {
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
                        <button onClick={() => dispatch(logoutUser())} className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                            Logout
                        </button>
                    </div>
                </div> 
                <div>
                    
                </div>
            </div>
        )
    }else {
        return (
            <div className="">
                <div className="flex flex-shrink-0 justify-between items-center bg-indigo-500 text-white px-8 py-4 cursor-pointer">
                    <Link to="/" className="uppercase">Messenger</Link>
                    <div className="flex justify-between items-center">
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
}

export default Index;
