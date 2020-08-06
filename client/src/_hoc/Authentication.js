/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

export default function (SpecificComponent, customprops = {}) {
    function Authenticated(props) {

        let isAuthenticated = useSelector(state => state.auth.authenticated);
        const authUserID = useSelector(state => state.auth.authUserID);

        useEffect(() => {
            //To know my current status, send Auth request 
            //Not Loggined in Status 
            if (!isAuthenticated) {
                props.history.push('/login')
                //Loggined in Status 
            } else {
                //Logged in Status, but Try to go into log in page 
                props.history.push('/dashboard')
            }

        }, [])

        return (
            <SpecificComponent {...props} user={authUserID}/>
        )
    }
    return Authenticated;
}