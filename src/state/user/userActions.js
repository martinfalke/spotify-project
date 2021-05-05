// src/state/user/userActions.js
import { createAction } from '../utils';
import * as types from './userTypes';

const actions = {
    initUser: () => createAction(types.USER_INIT),
    fetchUser: (token) => createAction(types.USER_GET, {token} ),
};
export default actions;