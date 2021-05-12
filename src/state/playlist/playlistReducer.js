// src/state/playlist/playlistReducer.js
import * as types from './playlistTypes';
import { createReducer } from '../utils';

const initialState = {
    //mock data
    status: null,
    selectedList: "1234",
    playlists: {
        "1234" : {
            tracks: ["test1","test2","test3","test4","test5"]
        }
    },
    trackIndex: {},
    featureMaps: {},

    //initial state
    // status: null,
    // selectedList: "",
    // playlists: {},
    // trackIndex: {},
    // featureMaps: {},

}

export default createReducer(initialState, {
    [types.PLAYLIST_MOVE_UP_SONG_SUCCESS]: (state, action) => {
        console.log("move up");
        //const playlistId = action.playlistId;
        const CI = action.CI;
        if(CI === 0){
            return state;
        }

        let playlistobj = state.playlists[state.selectedList];
        let reorderedList = playlistobj.tracks;

        let tmp = reorderedList[CI-1];
        reorderedList[CI-1] = reorderedList[CI];
        reorderedList[CI] = tmp;

        console.log(reorderedList)

        return { ...state, 
                playlists: {
                    ...state.playlists,
                    [state.selectedList]: {
                        ...playlistobj,
                        tracks: [...reorderedList]
                    },

            }
        };
    },
    [types.PLAYLIST_MOVE_DOWN_SONG_SUCCESS]: (state, action) => {
        console.log("move down");
        //const playlistId = action.playlistId;
        const CI = action.CI;

        let playlistobj = state.playlists[state.selectedList];
        if(CI === playlistobj.tracks.length - 1){
            return state;
        }
        let reorderedList = playlistobj.tracks;

        let tmp = reorderedList[CI];
        reorderedList[CI] = reorderedList[CI+1];
        reorderedList[CI+1] = tmp;

        return { ...state, 
                playlists: {
                    ...state.playlists,
                    [state.selectedList]: {
                        ...playlistobj,
                        tracks: [...reorderedList]
                    },

            }
        };
    },
    [types.PLAYLIST_DELETE_FROM_LIST]: (state, action) => {
        console.log("delete from playlist")
        const CI = action.CI;
        let playlistobj = state.playlists[state.selectedList];
        let trackList = playlistobj.tracks;
        let updatedList = trackList.slice(0, CI).concat(trackList.slice(CI+1, trackList.length));

        return { ...state, 
                        playlists: {
                            ...state.playlists,
                            [state.selectedList]: {
                                ...playlistobj,
                                tracks: updatedList
                            },

                    }
                };
    },
})