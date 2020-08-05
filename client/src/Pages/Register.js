import React, { useState } from 'react'

const Register = () => {

    const [errors, setErrors] = useState({name: "", email: "", password: ""});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = {
            name: name,
            email: email,
            password: password
        }

        console.log(dataToSend);
    }

    return (
        <div className="mx-auto w-1/5">
            <form onSubmit={handleSubmit}>
                <div className="p-2 mt-32 rounded bg-white shadow-lg">
                    <div className="flex flex-col m-1 p-2">
                        <p className="text-center text-2xl uppercase text-gray-500">
                            Sign Up
                        </p>
                        <label className="text-gray-600">
                            Name:
                        </label>
                        <input 
                            type="text" 
                            className="p-2 focus:outline-none bg-gray-100 border-1 border-solid rounded hover:bg-gray-300 focus:bg-gray-300 text-gray-700" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        {errors.name ? <p className="p-1 font-semibold text-xs text-red-500">{errors.name}</p> : null }
                        <label className="text-gray-600 mt-3">
                            Email:
                        </label>
                        <input 
                            type="email" 
                            className="p-2 focus:outline-none bg-gray-100 border-1 border-solid rounded hover:bg-gray-300 focus:bg-gray-300 text-gray-700" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email ? <p className="p-1 font-semibold text-xs text-red-500">{errors.email}</p> : null }
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
                        {errors.password ? <p className="p-1 font-semibold text-xs text-red-500">{errors.password}</p> : null }
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button type="submit" className="text-white bg-indigo-500 px-6 py-3 rounded focus:outline-none hover:bg-indigo-600 shadow-xl">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Register;