// src/state/fbase/fbaseReducer.js
import * as types from './fbaseTypes';
import { createReducer } from '../utils';

const initialState = {
    status: null,
}

export default createReducer(initialState, {
    [types.FBASE_INIT]: (state, action) => {
        return { ...state, status: "OK"};
    },
});