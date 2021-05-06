// src/state/fbase/fbaseSagas.js
import { all,take, takeLatest } from 'redux-saga/effects';
import * as types from './fbaseTypes';
import actions from './fbaseActions';
/*
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebase = null; // TODO: set up firebase
function signIn() {
    return signInAnonymously(auth)
      .then(user => ({ user }))
      .catch(error => ({ error }));
  }
*/
function* handleFbaseInit(){
    
}

function* fbaseRootSaga() {
    yield all([
        takeLatest(types.FBASE_INIT, handleFbaseInit)
    ])
};

export default fbaseRootSaga;