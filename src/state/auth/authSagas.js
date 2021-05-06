// src/state/auth/authSagas.js
import { all, take, takeLatest } from 'redux-saga/effects';
import * as types from './authTypes';
import actions from './authActions';

const firebase = null; // TODO: set up firebase
function signIn() {
    return firebase.auth().signInAnonymously()
      .then(user => ({ user }))
      .catch(error => ({ error }));
  }

function* handleAuthInit(){
    while(true){
        yield take(types.AUTH_INIT_TEST);

        console.log("reached initial saga (auth)");
    }
}

function* authRootSaga() {
    yield all([
        takeLatest(types.AUTH_INIT_TEST, handleAuthInit)
    ])
};

export default authRootSaga;