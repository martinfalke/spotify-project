// src/state/search/searchActions.js
import { createAction } from '../utils';
import * as types from './searchTypes';

const actions = {
    initSearch: () => createAction(types.SEARCH_INIT_TEST),
    getSearchResults: (token, query) => createAction(types.SEARCH_GET, {token, query}),
    getNextPage: (token) => createAction(types.SEARCH_NEXT, {token}),
    getPreviousPage: (token) => createAction(types.SEARCH_PREV, {token}),
    setIsTabVisible: (visible) => createAction(types.SEARCH_TAB_VISBILITY, {visible}),
};
export default actions;