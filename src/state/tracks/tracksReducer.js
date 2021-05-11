import * as types from './tracksTypes';
import { createReducer } from '../utils';

const initialState = {
    status: null,
    stash: [],
    selectedTrack: "",
    trackLocations: {},
    previewPlayer: {},
}

export default createReducer(initialState, {
    [types.PLAYLIST_DELETE_FROM_LIST]: (state, action) => {

    },
    [types.PLAYLIST_ADD_TO_TRACK]: (state, action) => {

    }
})