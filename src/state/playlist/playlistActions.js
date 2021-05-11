// src/state/playlist/playlistActions.js
import { createAction } from '../utils';
import * as types from './playlistTypes';

export default {
    moveUpSong: ( CI) => createAction(types.PLAYLIST_MOVE_UP_SONG, { CI}),
    moveDownSong: ( CI) => createAction(types.PLAYLIST_MOVE_DOWN_SONG, { CI}),
    deleteFromList: ( CI ) => createAction(types.PLAYLIST_DELETE_FROM_LIST, {CI}),
}