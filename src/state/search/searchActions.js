// src/state/search/searchActions.js
import { createAction } from '../utils';
import * as types from './searchTypes';

const actions = {
    initSearch: () => createAction(types.SEARCH_INIT_TEST),
};
export default actions;