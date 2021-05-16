// src/state/rootReducer.js
import { call, fork } from 'redux-saga/effects';
import { channel } from 'redux-saga';
import auth from './auth/authSagas';
import fbase from './fbase/fbaseSagas';
import search from './search/searchSagas';
import user from './user/userSagas';
import lists from './playlist/playlistSagas';
import track from './tracks/tracksSagas';

export default function* rootSaga() {
    const mutualChannel = yield call(channel);
    yield fork(auth);
    yield fork(fbase);
    yield fork(search);
    yield fork(user);
    yield fork(lists);
    yield fork(track);
    // yield fork(module);
}