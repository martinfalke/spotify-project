// src/state/search/searchReducer.js
import * as types from './searchTypes';
import * as authTypes from '../auth/authTypes';
import { createReducer } from '../utils';

const initialState = {
    status: null,
    latestQuery: null,
    activePage: null,
    isExact: false,
    resultTypes: ["track"],
    isTabVisible: false,
}

export default createReducer(initialState, {
    [types.SEARCH_INIT_TEST]: (state, action) => {
        return { ...state, status: "initialized"};
    },
    [types.SEARCH_GET]: (state, action) => {
        return { ...state, status: "Query accepted"}
    },
    [types.SEARCH_GET_SUCCESS]: (state, action) => {
        return { ...state, activePage: action.payload, status: "API OK"}
    },
    [types.SEARCH_GET_ERROR]: (state, action) => {
        return { ...state, activePage: initialState.activePage, status: "API ERROR"}
    },
    [types.SEARCH_NEXT]: (state, action) => {
        return { ...state, status: "Next Page Found"}
    },
    [types.SEARCH_PREV]: (state, action) => {
        return { ...state, status: "Prev Page Found"}
    },
    [types.SEARCH_TAB_VISBILITY]: (state, action) => {
        return { ...state, isTabVisible: action.visible }
    },
    [authTypes.AUTH_SPOTIFY_LOGOUT]: (state, action) => {
        return {...initialState};
    },   
});

