import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../_actions/userActions';

import Authentication from '../_hoc/Authentication';

import { Button } from 'antd';
import { unsetLoading, setLoading } from '../_actions/uiActions';

const Login = (props) => {

    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.message);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loading = useSelector(state => state.ui.loading);

    const handleSubmit = () => {
        dispatch(setLoading());
        const data = {
            email: email,
            password: password,
        }

        dispatch(loginUser(data,errors, () => {
            dispatch(unsetLoading());
            props.history.push("/dashboard");
        }));
    }

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
            <div className="text-center mt-6 mb-3">
                {/* <button onClick={handleSubmit} className="text-white bg-indigo-500 px-6 py-3 rounded focus:outline-none hover:bg-indigo-600 shadow-xl">Sign In</button> */}
                <Button loading={loading} onClick={handleSubmit} type="primary">Sign In</Button>
            </div>
            <div className="text-center">
                <a href="/register" className="text-sm font-light text-center hover:bg-indigo-500 hover:text-white rounded px-2 py-2">Don't have an account, create a new one.</a>
            </div>
        </div>
    )
}

export default Authentication(Login);