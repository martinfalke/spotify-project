// src/state/rootReducer.js
import { fork } from 'redux-saga/effects';
import auth from './auth/authSagas';

export default function* rootSaga() {
    yield fork(auth);
    // yield fork(module);
    console.log("Root saga initialized and reached.");
}