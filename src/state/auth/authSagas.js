// src/state/auth/authSagas.js
import { fork, call, put, take, select} from 'redux-saga/effects';
import { AUTH_INIT_TEST } from './authActions';

const firebase = null; // TODO: set up firebase
function signIn() {
    return firebase.auth().signInAnonymously()
      .then(user => ({ user }))
      .catch(error => ({ error }));
  }

function* handleAuthInit(){
    while(true){
        yield take(AUTH_INIT_TEST);

        console.log("reached initial saga");
    }
}

export default function* authSaga() {
    yield fork(handleAuthInit);
};