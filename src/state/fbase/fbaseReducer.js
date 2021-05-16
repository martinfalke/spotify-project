// src/state/fbase/fbaseReducer.js
import * as types from './fbaseTypes';
import { createReducer } from '../utils';

const initialState = {
    status: null,
    app: null,
    auth: null,
    uid: "",
}

export default createReducer(initialState, {
    [types.FBASE_INIT_COMPLETED]: (state, action) => {
        return { ...state, status: "OK", app: action.payload.app, auth: action.payload.auth };
    },
    [types.FBASE_AUTHENTICATE_SUCCESS]: (state, action) => {
        return { ...state, status: "OK", ...action.payload };
    },
    [types.FBASE_SET_UID]: (state, action) => {
        return { ...state, uid: action.uid};
    },
    [types.FBASE_SIGN_OUT]: (state, action) => {
        return { ...initialState };
    },
    [types.FBASE_SIGN_OUT_SUCCESS]: (state, action) => {
        return { ...initialState };
    },
    [types.FBASE_SIGN_OUT_ERROR]: (state, action) => {
        return { ...initialState, status: "ERROR"}
    }
});