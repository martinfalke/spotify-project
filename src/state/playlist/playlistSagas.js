// src/state/playlist/playlistSagas.js
import { fork, all, put, take, takeLatest, takeEvery, takeLeading, call,select } from 'redux-saga/effects';
import * as types from './playlistTypes';
import action from './playlistActions';
import { moveTrack, deleteFromPlaylist, fetchPlaylist,fetchTrack } from '../../api/spotifyPlaylist'


export const token = (state) => state.auth.spotify.token;

function* handleMoveUp(action){
    const token = yield select(token);
    const playlistId = action.playlistId;
    const range_start = action.CI;
    const insert_before = action.CI-1;
    const snapshot_id = action.snapshot_id;
    const { response, error } = yield call(moveTrack, token, playlistId, range_start, insert_before, snapshot_id);
    if(error){
        console.log(error)
        return
    }else{
        console.log("move up success")
        yield put({'type': types.PLAYLIST_MOVE_UP_SONG_SUCCESS, payload: {CI: action.CI, snapshot_id: response.snapshot_id}});
    }
}

function* handleMoveDown(action){
    const token = yield select(token);
    const playlistId = action.playlistId;
    const range_start = action.CI+1;
    const insert_before = action.CI;
    const snapshot_id = action.snapshot_id;
    const { response, error } = yield call(moveTrack, token, playlistId, range_start, insert_before, snapshot_id);
    if(error){
        console.log(error)
        return
    }else{
        console.log("move down success")
        yield put({'type': types.PLAYLIST_MOVE_UP_SONG_SUCCESS, payload: {CI: action.CI, snapshot_id: response.snapshot_id}});
    }
}

function* handleDeleteFromPlaylist(action){
    const token = yield select(token);
    const playlistId = action.playlistId;
    const snapshot_id = action.snapshot_id;
    const tracks = [{"uri": action.trackId, "positions": [action.CI]}];
    const { response, error } = yield call(deleteFromPlaylist, token, playlistId, tracks, snapshot_id);
    if(error){
        console.log(error)
        return
    }else{
        console.log("delete success")
        yield put({'type': types.PLAYLIST_DELETE_FROM_LIST_SUCCESS, payload: {CI: action.CI, snapshot_id: response.snapshot_id}});
    }
}

function* handleFetchPlaylist(action){
    const token = yield select(token);
    const { response, error } = yield call(fetchPlaylist, token);
    if(error){
        console.log(error)
    }else{

        console.log("fetch playlist success");
        console.log(response);
        yield put({'type': types.PLAYLIST_GET_SUCCESS, payload: {playlists: response.items}});
    }
}

function* handleFetchTrack(action){
    const token = yield select(token);
    const playlist_id = action.playlistId;
    const market = "SE";
    const { response, error } = yield call(fetchTrack, token, playlist_id, market);
    if(error){
        console.log(error)
    }else{
        console.log("fetch track success");
        yield put({'type':types.PLAYLIST_TRACK_GET_SUCCESS, payload: {playlist_id, track: response.items.track}})
    }
}



export default function*() {
    yield all([
        takeEvery(types.PLAYLIST_MOVE_UP_SONG, handleMoveUp),
        takeEvery(types.PLAYLIST_MOVE_DOWN_SONG, handleMoveDown),
        takeLeading(types.PLAYLIST_DELETE_FROM_LIST, handleDeleteFromPlaylist),
        takeLeading(types.PLAYLIST_GET,handleFetchPlaylist),
        takeLeading(types.PLAYLIST_TRACK_GET, handleFetchTrack),
    ])
};

