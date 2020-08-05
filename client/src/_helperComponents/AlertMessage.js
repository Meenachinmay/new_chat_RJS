import React, { useState } from 'react'
import { useSelector } from 'react-redux';



const AlertMessage = ({message, alertType}) => {

    return (
        <div className="">
            <div className={`flex items-center ${alertType} text-white px-8 py-4`}>
                <div className="flex-1 text-center w-full">
                    {message}
                </div>
                <div className="w-6 text-xl">
                    <button className="focus:outline-none">x</button>
                </div>
            </div> 
        </div>
    )
}

export default AlertMessage;
