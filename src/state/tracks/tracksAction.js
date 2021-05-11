// src/state/tracks/tracksActions.js
import { createAction } from '../utils';
import * as types from './tracksTypes';

export default {
    deleteFromList: () => createAction(types.PLAYLIST_DELETE_FROM_LIST, {}),
    addToTrack: () => createAction(types.PLAYLIST_ADD_TO_TRACK, {}),
}