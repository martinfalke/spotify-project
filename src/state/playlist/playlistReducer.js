// src/state/playlist/playlistReducer.js
import * as types from './playlistTypes';
import { createReducer } from '../utils';

const initialState = {
    //initial state
    status: null,
    error: null,
    selectedList: "",
    playlists: {},
    trackIndex: {},
    featureMaps: {},
    playlistsFetched: false,
    tracksFetched: false,


    //mock data
    // status: null,
    // selectedList: "",
    // playlists: {           
    //     "1234" : {
    //         tracks: ["test1","test2","test3","test4","test5"]
    //     }
    // },
    // trackIndex: {},
    // featureMaps: {},
    // playlistsFetched: false

}

export default createReducer(initialState, {
    [types.PLAYLIST_GET_SUCCESS]: (state, action) => {
        //console.log(action);
        let playlistsObj = {};
        action.payload.playlists.forEach(playlist => {
            playlistsObj[playlist.id] = {
                snapshot_id: playlist.snapshot_id,
                name: playlist.name,
                id: playlist.id,
                owner: playlist.owner.display_name || playlist.owner.id,
                description: playlist.description,
                image: (playlist.images.length >= 2 && playlist.images[1]) || null,
                external_urls: playlist.external_urls,
                collaborative: playlist.collaborative,
                tracks: null,
            };
        });

        return {...state,
            playlists: playlistsObj,
            playlistsFetched: true,
            selectedList: Object.values(playlistsObj)[0].id,
            status: "Fetch Playlists Success",
        }
    },
    [types.PLAYLIST_GET_ERROR]: (state, action) => {
        return {...state,
            error: action.payload, 
            status: "ERROR"
        }
    },

    [types.PLAYLIST_TRACK_GET_SUCCESS]: (state, action) => {
        const playlist_id = action.payload.playlist_id;
        let trackIds = action.payload.tracks.map(track => track.id);
        let trackIndex = state.trackIndex;
        let tracks = action.payload.tracks;
        tracks.forEach( track => {
            if(!trackIndex.hasOwnProperty(track.id)){
                trackIndex[track.id]=track;
            }

        });

        let playlist = state.playlists[playlist_id];
        if(tracks && playlist.image === null){
            playlist.image = (tracks.length >= 1 && tracks[0].album_image) ? action.payload.tracks[0].album_image : null;
            console.log(playlist.tracks)
        }

        //console.log(playlist)

        return {...state,
            playlists: {
                ...state.playlists,
                [playlist_id]:{
                    ...state.playlists[playlist_id],
                    tracks: trackIds
                }
                
            },
            trackIndex: {...trackIndex},
        }
    },
    [types.PLAYLIST_TRACK_GET_ERROR]: (state, action) => {
        return {...state,
            error: action.payload, 
            status: "ERROR"
        }
    },
    [types.PLAYLIST_TRACK_GET_ALL_DONE]: (state, action) => {
        return { ...state, tracksFetched: true };
    },

    [types.PLAYLIST_MOVE_UP_SONG_SUCCESS]: (state, action) => {
        //console.log("move up");
        //const playlistId = action.playlistId;
        let snapshot_id = action.payload.snapshot_id;
        const CI = action.payload.CI;
        if(CI === 0){
            return state;
        }

        let playlistobj = state.playlists[state.selectedList];
        let reorderedList = playlistobj.tracks;
        // console.log("before")
        // console.log(playlistobj.tracks)
        // console.log("CI" +CI)

        let tmp = reorderedList[CI-1];
        reorderedList[CI-1] = reorderedList[CI];
        reorderedList[CI] = tmp;

        // console.log("reordered");
        // console.log(reorderedList)

        return { ...state, 
                playlists: {
                    ...state.playlists,
                    [state.selectedList]: {
                        ...playlistobj,
                        snapshot_id: snapshot_id,
                        tracks: [...reorderedList]
                    },

            }
        };
    },
    [types.PLAYLIST_MOVE_UP_SONG_ERROR]: (state, action) => {
        return {...state,
            error: action.payload, 
            status: "ERROR"
        }
    },

    [types.PLAYLIST_MOVE_DOWN_SONG_SUCCESS]: (state, action) => {
        //console.log("move down");
        let snapshot_id = action.payload.snapshot_id;
        //const playlistId = action.playlistId;
        const CI = action.payload.CI;

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
                        snapshot_id: snapshot_id,
                        tracks: [...reorderedList]
                    },

            }
        };
    },
    [types.PLAYLIST_MOVE_DOWN_SONG_ERROR]: (state, action) => {
        return {...state,
            error: action.payload, 
            status: "ERROR"
        }
    },

    [types.PLAYLIST_DELETE_FROM_LIST_SUCCESS]: (state, action) => {
        let snapshot_id = action.payload.snapshot_id;
        const CI = action.payload.CI;
        let playlistobj = state.playlists[state.selectedList];
        let trackList = playlistobj.tracks;
        let updatedList = trackList.slice(0, CI).concat(trackList.slice(CI+1, trackList.length));

        return { ...state, 
                        playlists: {
                            ...state.playlists,
                            [state.selectedList]: {
                                ...playlistobj,
                                snapshot_id: snapshot_id,
                                tracks: updatedList
                            },

                    }
                };
    },
    [types.PLAYLIST_DELETE_FROM_LIST_ERROR]: (state, action) => {
        return {...state,
            error: action.payload, 
            status: "ERROR"
        }
    },

    [types.PLAYLIST_SELECT]: (state, action) => {
        let playlistId = action.playlistId;

        return {...state,
            selectedList: playlistId,
        }
    },
})