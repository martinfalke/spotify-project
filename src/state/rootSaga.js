// src/state/rootReducer.js
import { fork } from 'redux-saga/effects';
import auth from './auth/authSagas';
import search from './search/searchSagas';

export default function* rootSaga() {
    yield fork(auth);
    yield fork(search);
    // yield fork(module);
    console.log("Root saga initialized and reached.");
}