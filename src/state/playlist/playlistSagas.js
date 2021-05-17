// src/state/playlist/playlistSagas.js
import { buffers } from 'redux-saga';
import { delay, all, put, take, takeLatest, takeEvery, takeLeading, call,select, actionChannel, fork } from 'redux-saga/effects';
import * as types from './playlistTypes';
import * as tracksTypes from '../tracks/tracksTypes';
import * as fbaseTypes from '../fbase/fbaseTypes';
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

    if(!error){
        yield put({'type': tracksTypes.TRACKS_DELETE_LOCATIONS, payload: {playlistId, trackId}});
        yield put({'type': types.PLAYLIST_DELETE_FROM_LIST_SUCCESS, payload: {CI: action.CI, snapshot_id: response.snapshot_id}});
    }else{
        yield put({'type': types.PLAYLIST_DELETE_FROM_LIST_ERROR, payload: error.error});
    }
}

function* handleFetchPlaylist(action){
    yield put({'type': types.PLAYLIST_FETCH_PROGRESS, currentPercentage: 0});
    const token = yield select(getToken);
    let offset = 0;
    let response, error;
    ({ response, error } = yield call(fetchPlaylist, token, offset));
    if(error){
        if(error.status === 401){
            yield put({'type': fbaseTypes.FBASE_SIGN_OUT});
        }
    }else{
        let total = response.total;
        let remainingPlaylists = (total > 50);
        let allPlaylists = response.items;
        while(remainingPlaylists && !error){
            offset += 20;
            ({ response, error } = yield call(fetchPlaylist, token, offset));
            if(!error){
                allPlaylists = allPlaylists.concat(response.items);
            }else if(error.status === 429){
                offset -= 50;
                yield delay(1000*error.retry_after);
            }
            remainingPlaylists = (total > offset+50);
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
                allTracks = allTracks.concat(response.items);
            }else if(error.status === 429){
                offset -= 100;
                yield delay(1000*error.retry_after);
            }else{
                console.error(error);
            }
            remainingTracks = (total > offset+100);
        }
        if(!error){
            let tracks = allTracks.filter(wt => (!wt.is_local)).map(wrappedTrack => {
                let track = wrappedTrack.track;
                return {
                    album_name: track.album.name,
                    album_image: (track.album.images.length >= 2 && track.album.images[1]) || null,
                    artists: track.artists.map(a=>a.name),
                    is_local: track.is_local,
                    external_urls: track.external_urls,
                    name: track.name,
                    id: track.id,
                    preview_url: track.preview_url,
                    uri: track.uri,
                    duration: track.duration_ms
                };
            });
            let trackIds = response.items.map(wrappedTrack => wrappedTrack.track.id);
            yield put({'type':types.PLAYLIST_TRACK_GET_SUCCESS, payload: {playlist_id, tracks: tracks}})
            yield put({'type':tracksTypes.TRACKS_SAVE_LOCATIONS, payload: {playlist_id, trackIds: trackIds}})
        }else{
            yield put({'type': types.PLAYLIST_TRACK_GET_ERROR, payload: error.error});

        }
    }

}


function* watchTracksFetch(){
    const buffer = buffers.expanding(10);
    const trackFetchChannel = yield actionChannel(types.PLAYLIST_TRACK_GET, buffer);
    let counter = 0;
    while(counter <= 0 || !buffer.isEmpty()){
        const action = yield take(trackFetchChannel);
        yield call(handleFetchTrack, action);
        counter++;
        const numPlaylists = yield select(getNumPlaylists);
        yield put({'type': types.PLAYLIST_FETCH_PROGRESS, currentPercentage: Math.round((counter/numPlaylists)*100)})
    }
    yield put({'type': types.PLAYLIST_TRACK_GET_ALL_DONE});
}


function* playlistRootSaga() {
    yield all([
        takeEvery(types.PLAYLIST_MOVE_UP_SONG, handleMoveUp),
        takeEvery(types.PLAYLIST_MOVE_DOWN_SONG, handleMoveDown),
        takeLeading(types.PLAYLIST_DELETE_FROM_LIST, handleDeleteFromPlaylist),
        takeLeading(types.PLAYLIST_GET,handleFetchPlaylist),
        fork(watchTracksFetch),
    ])
};

// selectors
const getNumPlaylists = (state) => Object.keys(state.lists.playlists).length;

export default playlistRootSaga;
