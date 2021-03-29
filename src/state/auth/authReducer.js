// src/state/auth/authReducer.js
import { AUTH_INIT_TEST } from './authActions';

const initialState = {
    token: null,
    status: null
}

export default function authReducer(state = initialState, {type, payload}){
    switch(type){
        case AUTH_INIT_TEST:
            return { ...state, status: "initialized"};
    }
    return state;
};