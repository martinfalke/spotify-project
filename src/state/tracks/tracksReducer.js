import * as types from './tracksTypes';
import { createReducer } from '../utils';

const initialState = {
    // status: null,
    // stash: [],
    // selectedTrack: "",
    // trackLocations: {},
    // previewPlayer: {},

    //mock data
    status: null,
    stash: ["s1","s2"],
    selectedTrack: "s1",
    trackLocations: {
        "s1": {
            "p1": true,
            "p2": true
        },
        "s2": {
            "p1": true
        }
    },
    previewPlayer: {},
}

export default createReducer(initialState, {
    [types.PLAYLIST_DELETE_FROM_LIST]: (state, action) => {
        const playlistId = action.playlistId;
        let trackLocationsObj = state.trackLocations[state.selectedTrack];

        return {...state,
            trackLocations: {
                ...state.trackLocations,
                [state.selectedTrack]:{
                    ...trackLocationsObj,
                    [playlistId]: false
                }
            }
        }
    },
    [types.PLAYLIST_ADD_TO_TRACK]: (state, action) => {
        const trackId = action.trackId;
        let updatedStash = [...state.stash, trackId];

        return {...state,
            stash: updatedStash
        }
    }
})