import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    GET_ERRORS
} from './types';
import showAlert from './uiActions';

export const registerUser = (dataToSubmit) => dispatch => {
    let errorData = "";

    axios.post('http://localhost:4000/signup',dataToSubmit)
        .then(response => {
            dispatch({
                type: REGISTER_USER,
                payload: response.data
            })
            
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.error
            });
            
            errorData = {
                message: error.response.data.error,
                alertType: "bg-red-500"
            }

            dispatch(showAlert(errorData));
        });
}

export const loginUser = (dataToSubmit) => dispatch => {
    axios.post('http://localhost:4000/signin',dataToSubmit)
        .then(response => {
            dispatch({
                type: LOGIN_USER,
                payload: response.data
            })
            
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.error
            })
        });
}

// export function loginUser(dataToSubmit){
//     const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
//                 .then(response => response.data);

//     return {
//         type: LOGIN_USER,
//         payload: request
//     }
// }

// export function auth(){
//     const request = axios.get(`${USER_SERVER}/auth`)
//     .then(response => response.data);

//     return {
//         type: AUTH_USER,
//         payload: request
//     }
// }

// export function logoutUser(){
//     const request = axios.get(`${USER_SERVER}/logout`)
//     .then(response => response.data);

//     return {
//         type: LOGOUT_USER,
//         payload: request
//     }
// }
