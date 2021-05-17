// src/state/playlist/playlistActions.js
import { createAction } from '../utils';
import * as types from './playlistTypes';

export default {
    moveUpSong: (token, playlistId, CI, snapshot_id) => createAction(types.PLAYLIST_MOVE_UP_SONG, {token, playlistId, CI, snapshot_id}),
    moveDownSong: (token, playlistId, CI, snapshot_id) => createAction(types.PLAYLIST_MOVE_DOWN_SONG, {token, playlistId, CI, snapshot_id}),
    deleteFromList: ( token, playlistId, track_uri, snapshot_id, CI, trackId ) => createAction(types.PLAYLIST_DELETE_FROM_LIST, { token, playlistId, track_uri, snapshot_id, CI, trackId}),
    fetchPlaylists: (token) => createAction(types.PLAYLIST_GET, {token}), 
    fetchTrack: (token, playlistId) => createAction(types.PLAYLIST_TRACK_GET, {token, playlistId}),
    selectPlaylist: (playlistId) => createAction(types.PLAYLIST_SELECT, {playlistId})
}