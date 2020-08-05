import React from 'react'



const Index = () => {
    return (
        <div className="">
            <div className="flex flex-shrink-0 justify-between items-center bg-indigo-500 text-white px-8 py-4 cursor-pointer">
                <a href="/" className="uppercase">Messenger</a>
                <div className="flex justify-between items-center">
                    <a href="/dashboard" className="px-3 mx-1 py-2 hover:font-semibold cursor-pointer hover:bg-indigo-700 rounded">
                        Dashboard
                    </a>
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

export default Index;
