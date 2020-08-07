import React from 'react';
import { useDispatch } from 'react-redux';
import { clearErrors } from '../_actions/uiActions';

const AlertMessage = ({message, alertType}) => {

    const dispatch = useDispatch();

    return (
        <div className="">
            {message ? 
                <div className={`flex items-center ${alertType} text-white px-8 py-4 overflow-hidden shadow-xl`} style={{ zIndex: '200' }} >
                    <div className="flex-1 text-center w-full">
                        {message}
                    </div>
                    <div className="w-6 text-xl">
                        <button onClick={() => dispatch(clearErrors())} className="focus:outline-none">x</button>
                    </div>
                </div> 
            : ''}
        </div>
    )
}

export default AlertMessage;
