// src/state/playlist/playlistSagas.js
import { all, put, takeEvery, takeLeading, call,select } from 'redux-saga/effects';
import * as types from './tracksTypes'
import action from './tracksActions';

function* tracksRootSaga(playlistChannel) {
    yield all([
    ])
};

export default tracksRootSaga;
