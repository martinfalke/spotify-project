// src/state/playlist/playlistSagas.js
import { fork, all, put, take, takeLatest, takeEvery, takeLeading, call,select } from 'redux-saga/effects';
import * as types from './playlistTypes';
import * as tracksTypes from '../tracks/tracksTypes';
import action from './playlistActions';
import { moveTrack, deleteFromPlaylist, fetchPlaylist,fetchTrack } from '../../api/spotifyPlaylist'


const getToken = (state) => state.auth.spotify.token;

function* handleMoveUp(action){
    const token = yield select(getToken);
    const playlistId = action.playlistId;
    const range_start = action.CI;
    const insert_before = action.CI-1;
    const snapshot_id = action.snapshot_id;
    const { response, error } = yield call(moveTrack, token, playlistId, range_start, insert_before, snapshot_id);
    console.log(response);
    //console.log(error);
    //console.log(action.CI)
    if(!error){      
        yield put({'type': types.PLAYLIST_MOVE_UP_SONG_SUCCESS, payload: {CI: action.CI, snapshot_id: response.snapshot_id}});
    }else{
        yield put({'type': types.PLAYLIST_MOVE_UP_SONG_ERROR, payload: error.error});
    }
}

function* handleMoveDown(action){
    const token = yield select(getToken);
    const playlistId = action.playlistId;
    const range_start = action.CI+1;
    const insert_before = action.CI;
    const snapshot_id = action.snapshot_id;
    const { response, error } = yield call(moveTrack, token, playlistId, range_start, insert_before, snapshot_id);
    if(!error){
        yield put({'type': types.PLAYLIST_MOVE_DOWN_SONG_SUCCESS, payload: {CI: action.CI, snapshot_id: response.snapshot_id}});
    }else{
        yield put({'type': types.PLAYLIST_MOVE_DOWN_SONG_ERROR, payload: error.error});
    }
}

function* handleDeleteFromPlaylist(action){
    const token = yield select(getToken);
    const playlistId = action.playlistId;
    const snapshot_id = action.snapshot_id;
    const trackId = action.trackId;
    const tracks = [{"uri": action.track_uri, "positions": [action.CI]}];
    const { response, error } = yield call(deleteFromPlaylist, token, playlistId, tracks, snapshot_id);

    console.log(error)
    if(!error){
        yield put({'type': tracksTypes.TRACKS_DELETE_LOCATIONS, payload: {playlistId, trackId}});
        yield put({'type': types.PLAYLIST_DELETE_FROM_LIST_SUCCESS, payload: {CI: action.CI, snapshot_id: response.snapshot_id}});
    }else{
        yield put({'type': types.PLAYLIST_DELETE_FROM_LIST_ERROR, payload: error.error});
    }
}

function* handleFetchPlaylist(action){
    const token = yield select(getToken);
    let offset = 0;
    let response, error;
    ({ response, error } = yield call(fetchPlaylist, token, offset));
    if(error){
        console.log(error)
    }else{
        let total = response.total;
        let remainingPlaylists = (total > 20);
        let allPlaylists = response.items;
        while(remainingPlaylists && !error){
            offset += 20;
            ({ response, error } = yield call(fetchPlaylist, token, offset));
            if(!error){
                allPlaylists.concat(response.items);
            }
            remainingPlaylists = (total > offset+20);
        }
        if(!error){
            yield put({'type': types.PLAYLIST_GET_SUCCESS, payload: {playlists: allPlaylists}});
        }else{
            yield put({'type': types.PLAYLIST_GET_ERROR, payload: error.error});
        }
    }
}

function* handleFetchTrack(action){
    const token = yield select(getToken);
    const playlist_id = action.playlistId;
    let offset = 0;
    let response, error;
    ({ response, error } = yield call(fetchTrack, token, playlist_id, offset));
    if(error){
        console.log(error)
    }else{
        let total = response.total;
        let remainingTracks = (total > 100);
        let allTracks = response.items;
        while(remainingTracks && ! error){
            offset += 100;
            ({ response, error } = yield call(fetchTrack, token, playlist_id, offset));
            if(!error){
                allTracks.concat(response.items);
            }
            remainingTracks = (total > offset+100);
        }
        if(!error){
            yield put({'type':types.PLAYLIST_TRACK_GET_SUCCESS, payload: {playlist_id, tracks: response.items}})
            yield put({'type':tracksTypes.TRACKS_SAVE_LOCATIONS, payload: {playlist_id, tracks: response.items}})
        }else{
            yield put({'type': types.PLAYLIST_TRACK_GET_ERROR, payload: error.error});

        }
    }

}




function* playlistRootSaga() {
    yield all([
        takeEvery(types.PLAYLIST_MOVE_UP_SONG, handleMoveUp),
        takeEvery(types.PLAYLIST_MOVE_DOWN_SONG, handleMoveDown),
        takeLeading(types.PLAYLIST_DELETE_FROM_LIST, handleDeleteFromPlaylist),
        takeLeading(types.PLAYLIST_GET,handleFetchPlaylist),
        takeEvery(types.PLAYLIST_TRACK_GET, handleFetchTrack),
    ])
};

export default playlistRootSaga;
