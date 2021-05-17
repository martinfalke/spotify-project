// src/state/user/userSagas.js
import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as types from './userTypes';
import * as fbaseTypes from '../fbase/fbaseTypes';
import { getCurrentUser } from "../../api/spotifyUser";

function* getUser(action){
    const { response, error } = yield call(getCurrentUser, action.token);
    if(error){
        // fetching the user from the API failed
        yield put({'type': fbaseTypes.FBASE_SIGN_OUT});
        yield put({'type': types.USER_GET_ERROR, payload: error.error})
    }else{
        // fetching the user from the API succeeded
        const data = response;
        const user = {
            id: data.id,
            display_name: data.display_name,
            country: data.country
        }
        yield put({'type': types.USER_GET_SUCCESS, payload: user});
    }
}

function* userRootSaga() {
    yield all([
        takeLatest(types.USER_GET, getUser)
    ])
};

export default userRootSaga;