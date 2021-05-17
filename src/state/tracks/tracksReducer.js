import * as types from './tracksTypes';
import { createReducer } from '../utils';

const initialState = {
    status: null,
    stash: [],
    selectedTrack: "",
    trackLocations: {},
    previewPlayer: {},

    //mock data
    // status: null,
    // stash: ["s1","s2"],
    // selectedTrack: "s1",
    // trackLocations: {
    //     "s1": {
    //         "p1": true,
    //         "p2": true
    //     },
    //     "s2": {
    //         "p1": true
    //     }
    // },
    // previewPlayer: {},
}

export default createReducer(initialState, {
    [types.TRACKS_DELETE_LOCATIONS]: (state, action) => {
        const playlistId = action.payload.playlistId;
        const trackId = action.payload.trackId;
        let trackLocationsObj = state.trackLocations[trackId];

        return {...state,
            trackLocations: {
                ...state.trackLocations,
                [trackId]:{
                    ...trackLocationsObj,
                    [playlistId]: false
                }
            }
        }
    },
    [types.PLAYLIST_ADD_TO_TRACKS]: (state, action) => {
        const trackId = action.trackId;
        let updatedStash = [...state.stash, trackId];

        return {...state,
            stash: updatedStash
        }
    },
    [types.TRACKS_SAVE_LOCATIONS]: (state, action) => {
        const playlist_id = action.payload.playlist_id;
        let trackIds = action.payload.trackIds;
        let trackLocations = state.trackLocations;
        trackIds.forEach((trackId) => {
            if(!trackLocations.hasOwnProperty(trackId)){
                trackLocations[trackId] = {};
            }
            if(!trackLocations[trackId][playlist_id]){
                trackLocations[trackId][playlist_id] = true;
            }
        });
        return {
            ...state,
            trackLocations: {
                ...trackLocations
            }
        };
    }
})