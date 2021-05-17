// src/state/fbase/fbaseSagas.js
import { all, call, put, takeLeading, takeLatest, select } from 'redux-saga/effects';
import * as types from './fbaseTypes';
import * as authTypes from '../auth/authTypes';
import { initializeApp } from 'firebase/app';
import config from '../../api/firebaseConfig';
import { initializeAuth, browserSessionPersistence, getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { handleSignIn, handleSignOut } from '../../api/firebaseAuth';

function* initializeFirebase(){
    const app = yield call(initializeApp, config);
    const auth = yield call(initializeAuth, app, {persistence: browserSessionPersistence,
        popupRedirectResolver: undefined,
    });
    yield put({'type': types.FBASE_INIT_COMPLETED, payload: {app, auth} });
}

function* authenticateFirebase(){
    const auth = getAuth();
    const { response, error } = yield call(handleSignIn, auth);
    if(error){
        yield put({'type': types.FBASE_AUTHENTICATE_ERROR, payload: error});
    }else{
        yield put({'type': types.FBASE_AUTHENTICATE_SUCCESS, payload: {...response}});
    }
}

function* logout(){
    const auth = getAuth();
    yield put({'type': authTypes.AUTH_SPOTIFY_LOGOUT});
    const { response, error } = yield call(handleSignOut, auth);
    if(error){
        yield put({'type': types.FBASE_SIGN_OUT_ERROR});
    }else{
        yield put({'type': types.FBASE_SIGN_OUT_SUCCESS});
    }
}

function* handleSetRef(action){
    const uid = yield select(getUid);
    const db = yield call(getDatabase);
    set(ref(db, '/persistedState/'+uid+"/"+action.endpoint))

}

function* fbaseRootSaga() {
    yield all([
        takeLeading(types.FBASE_INIT, initializeFirebase),
        takeLatest(types.FBASE_AUTHENTICATE, authenticateFirebase),
        takeLeading(types.FBASE_SIGN_OUT, logout),
    ])
};

const getUid = (state) => state.fbase.uid;

export default fbaseRootSaga;