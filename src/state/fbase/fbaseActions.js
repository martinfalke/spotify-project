// src/state/fbase/fbaseActions.js
import { createAction } from '../utils';
import * as types from './fbaseTypes';

const actions = {
    initFbase: () => createAction(types.FBASE_INIT),
};
export default actions;