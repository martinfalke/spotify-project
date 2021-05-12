// src/state/playlist/playlistActions.js
import { createAction } from '../utils';
import * as types from './playlistTypes';

export default {
    moveUpSong: (token, playlistId, range_start, insert_before, snapshot_id) => createAction(types.PLAYLIST_MOVE_UP_SONG, {token, playlistId, range_start, insert_before, snapshot_id}),
    moveDownSong: (token, playlistId, range_start, insert_before, snapshot_id) => createAction(types.PLAYLIST_MOVE_DOWN_SONG, {token, playlistId, range_start, insert_before, snapshot_id}),
    deleteFromList: ( CI ) => createAction(types.PLAYLIST_DELETE_FROM_LIST, {CI}),
}