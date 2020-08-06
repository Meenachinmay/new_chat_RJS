import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../_actions/userActions';

import { withRouter } from 'react-router-dom';

const Index = (props) => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.authenticated);

    const logout = () => {
        dispatch(logoutUser());
        props.history.push("/login");
    }

    if (isAuthenticated) {
        return (
            <div className="">
                <div className="flex flex-shrink-0 justify-between items-center bg-indigo-500 text-white px-8 py-4 cursor-pointer">
                    <a href="/" className="uppercase hover:text-white hover:bg-indigo-600">Messenger</a>
                    <div className="flex justify-between items-center">
                        <a href="/dashboard" className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                            Dashboard
                        </a>
                        <a href="/chatroom" className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                            Chatroom
                        </a>
                    </div>
                    <div className="flex justify-between items-center">
                        <button onClick={logout} className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
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
                    <a href="/" className="uppercase">Messenger</a>
                    <div className="flex justify-between items-center">
                        <a href="/chatroom" className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                            Chatroom
                        </a>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="/login" className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                            Login
                        </a>
                        <a href="/register" className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                            Register
                        </a>
                    </div>
                </div> 
                <div>
                    
                </div>
            </div>
        )
    }
}

export default withRouter(Index);
