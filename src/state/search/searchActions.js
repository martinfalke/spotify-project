// src/state/search/searchActions.js
import { createAction } from '../utils';
import * as types from './searchTypes';

export default {
    initSearch: () => createAction(types.SEARCH_INIT_TEST),
}