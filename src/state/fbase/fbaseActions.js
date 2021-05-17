// src/state/fbase/fbaseActions.js
import { createAction } from '../utils';
import * as types from './fbaseTypes';

const actions = {
    initFbase: () => createAction(types.FBASE_INIT),
    authFbase: () => createAction(types.FBASE_AUTHENTICATE),
    setUid: (uid) => createAction(types.FBASE_SET_UID, {uid}),
    logout: () => createAction(types.FBASE_SIGN_OUT),
};
export default actions;