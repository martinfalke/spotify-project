// src/state/search/searchReducer.js
import * as types from './searchTypes';
import { createReducer } from '../utils';

const initialState = {
    status: null,
    latestQuery: null,
    activePage: null,
    isExact: false,
    resulTypes: ["track"]
}

export default createReducer(initialState, {
    [types.SEARCH_INIT_TEST]: (state, action) => {
        return { ...state, status: "initialized"};
    },
});