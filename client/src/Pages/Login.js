import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../_actions/userActions';

const Login = () => {

    const user = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const show = () => {
        const data = {
            email: email,
            password: password,
        }

        dispatch(loginUser(data));
        setTimeout(() => {
            console.log(errorMessage);
        }, 1000);
    }

    const errorMessage = useSelector(state => state.errors);

    return (
        <div className="flex-shrink-0 mx-auto w-1/5">
            <div className="p-2 mt-32 rounded bg-white shadow-lg">
                <div className="flex flex-col m-1 p-2">
                    <p className="text-center text-2xl uppercase text-gray-500 mb-5">
                        Sign In
                    </p>
                    <label className="text-gray-600 text-sm">
                        Email:
                    </label>
                    <input 
                        type="email" 
                        className="p-2 focus:outline-none bg-gray-100 border-1 border-solid rounded hover:bg-gray-300 focus:bg-gray-300 text-gray-700" 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        required
                    />

                    <label className="text-gray-600 mt-3 text-sm">
                        Password:
                    </label>
                    <input 
                        type="password" 
                        className="p-2 focus:outline-none bg-gray-100 border-1 border-solid rounded hover:bg-gray-300 focus:bg-gray-300 text-gray-700" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="text-center mt-6">
                <button onClick={show} className="text-white bg-indigo-500 px-6 py-3 rounded focus:outline-none hover:bg-indigo-600 shadow-xl">Sign In</button>
            </div>
        </div>
    )
}

export default Login;