// src/state/playlist/playlistSagas.js
import { fork, all, put, take, takeLatest, takeEvery, takeLeading, call } from 'redux-saga/effects';
import * as types from './playlistTypes';
import action from './playlistActions';
import { moveTrack, deleteFromPlaylist } from '../../api/spotifyPlaylist'


function* handleMoveUp(action){
    const { response, error } = yield call(moveTrack, {token, playlistId, snapshotId, range_start, insert_before});
    if(error){
        console.log(error)
        return
    }else{
        const data = response;


        yield put({'type': types.PLAYLIST_MOVE_UP_SONG, payload: CI});
    }
}

function* handleMoveDown(){

}

function* handleDeleteFromPlaylist(){

}

export default function*() {
    yield all([
        takeEvery(types.TRIGGER_MOVE_UP_SONG, handleMoveUp),
        takeEvery(types.TRIGGER_MOVE_DOWN_SONG, handleMoveDown),
        takeLeading(types.TRIGGER_DELETE_FROM_LIST, handleDeleteFromPlaylist)
    ])
};