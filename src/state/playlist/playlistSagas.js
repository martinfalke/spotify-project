// src/state/playlist/playlistSagas.js
import { fork, all, put, take, takeLatest, takeEvery, takeLeading } from 'redux-saga/effects';
import * as types from './playlistTypes';
import actions from './playlistActions';

function* handleMoveUp(){

}

function* handleMoveDown(){
    while(true){
        yield take(types.PLAYLIST_MOVE_DOWN_SONG);
    }
}

function* handleDeleteFromPlaylist(){
    while(true){
        yield take(types.PLAYLIST_DELETE_FROM_LIST);
    }
}

export default function*() {
    yield all([
        takeEvery(types.PLAYLIST_MOVE_UP_SONG, handleMoveUp),
        takeEvery(types.PLAYLIST_MOVE_DOWN_SONG, handleMoveDown),
        takeLeading(types.PLAYLIST_DELETE_FROM_LIST, handleDeleteFromPlaylist)
    ])
};