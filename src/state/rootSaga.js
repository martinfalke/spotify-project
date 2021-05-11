// src/state/rootReducer.js
import { fork } from 'redux-saga/effects';
import auth from './auth/authSagas';
import fbase from './fbase/fbaseSagas';
import search from './search/searchSagas';
import user from './user/userSagas';
import playlist from './playlist/playlistSagas';

export default function* rootSaga() {
    yield fork(auth);
    yield fork(fbase);
    yield fork(search);
    yield fork(user);
    yield fork(playlist);
    // yield fork(module);
}