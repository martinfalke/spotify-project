// src/state/tracks/tracksActions.js
import { createAction } from '../utils';
import * as types from './tracksTypes';

export default {
    deleteFromList: ( playlistId) => createAction(types.TRACKS_DELETE_LOCATIONS, {playlistId}),
    addToTracks: (trackId) => createAction(types.PLAYLIST_ADD_TO_TRACKS, {trackId}),
}