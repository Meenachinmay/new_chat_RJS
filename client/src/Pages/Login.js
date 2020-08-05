import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const show = () => {
        console.log(email);
    }

    return (
        <div className="flex-shrink-0 mx-auto w-1/5">
            <div className="p-2 mt-32 rounded bg-white shadow-lg">
                <div className="flex flex-col m-1 p-2">
                    <p className="text-center text-2xl uppercase text-gray-500">
                        Sign In
                    </p>
                    <label className="text-gray-600">
                        Email:
                    </label>
                    <input 
                        type="email" 
                        className="p-2 focus:outline-none bg-gray-100 border-1 border-solid rounded hover:bg-gray-300 focus:bg-gray-300 text-gray-700" 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        required
                    />

                    <label className="text-gray-600 mt-3">
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