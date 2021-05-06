// src/state/user/userReducer.js
import * as types from './userTypes';
import { createReducer } from '../utils';

const initialState = {
    status: null,
    id: null,
    display_name: null,
    country: null,
    error: null
}

export default createReducer(initialState, {
    [types.USER_INIT]: (state, action) => {
        return { ...state, status: "OK"};
    },
    [types.USER_GET_SUCCESS]: (state, action) => {
        return { ...state, ...action.payload, error: null, status: "OK"}
    },
    [types.USER_GET_ERROR]: (state, action) => {
        return { ...state, error: action.payload, status: "ERROR"}
    }
});