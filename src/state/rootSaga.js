// src/state/rootReducer.js
import { fork } from 'redux-saga/effects';
import auth from './auth/authSagas';
import fbase from './fbase/fbaseSagas';
import search from './search/searchSagas';
import user from './user/userSagas';
import lists from './playlist/playlistSagas';
//import track from './tracks/tracksSagas';

export default function* rootSaga() {
    yield fork(auth);
    yield fork(fbase);
    yield fork(search);
    yield fork(user);
    yield fork(lists);
    //yield fork(track);
    // yield fork(module);
}