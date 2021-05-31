// src/state/playlist/playlistReducer.js
import * as types from './playlistTypes';
import * as tracksTypes from '../tracks/tracksTypes';
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
    fetchProgress: null,


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
        if(!action.payload.playlists || Object.keys(action.payload.playlists).length === 0){
            // user has no playlists
            return {...state, playlistsFetched: true};
        }
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
        }


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
        //const playlistId = action.playlistId;
        let snapshot_id = action.payload.snapshot_id;
        const CI = action.payload.CI;
        if(CI === 0){
            return state;
        }

        let playlistobj = state.playlists[state.selectedList];
        let reorderedList = playlistobj.tracks;

        let tmp = reorderedList[CI-1];
        reorderedList[CI-1] = reorderedList[CI];
        reorderedList[CI] = tmp;

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
        console.log(state.selectedList)
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
    [types.PLAYLIST_FETCH_PROGRESS]: (state, action) => {
        return { ...state, fetchProgress: action.currentPercentage };
    },
    [tracksTypes.PLAYLIST_ADD_TO_TRACKS]: (state, action) => {
        const trackId = action.trackId;
        const track = action.track;
        let trackIndex = state.trackIndex;
        if(!trackIndex.hasOwnProperty(trackId) && track){
            let trackObj = {
                album_name: track.album.name,
                album_image: (track.album.images.length >= 2 && track.album.images[1]) || null,
                artists: track.artists.map(a=>a.name),
                is_local: track.is_local,
                external_urls: track.external_urls,
                name: track.name,
                id: track.id,
                preview_url: track.preview_url,
                uri: track.uri,
                duration: track.duration_ms
            };
            trackIndex[trackId]=trackObj;
        }
        return {...state, trackIndex: {...trackIndex}};
    },
    [types.PLAYLIST_ADD_TO_LIST_SUCCESS]: (state, action) => {
        let snapshot_id = action.payload.snapshot_id;
        const playlist_id = action.payload.playlistId;
        const trackId = action.payload.trackId;
        let playlistobj = state.playlists[playlist_id];
        let trackList = playlistobj.tracks;
        let updatedList = [...trackList, trackId];

        let trackObj = action.payload.trackObj;
        let trackIndex = state.trackIndex;
        if(trackObj){
            let track = {
                album_name: trackObj.album.name,
                album_image: (trackObj.album.images.length >= 2 && trackObj.album.images[1]) || null,
                artists: trackObj.artists.map(a=>a.name),
                is_local: trackObj.is_local,
                external_urls: trackObj.external_urls,
                name: trackObj.name,
                id: trackObj.id,
                preview_url: trackObj.preview_url,
                uri: trackObj.uri,
                duration: trackObj.duration_ms
            }
            trackIndex[trackId]=track;
        }


        return { ...state, 
            playlists: {
                ...state.playlists,
                [playlist_id]: {
                    ...playlistobj,
                    snapshot_id: snapshot_id,
                    tracks: updatedList
                },
            },
            trackIndex: {...trackIndex},
        };


    },
    [types.PLAYLIST_ADD_TO_LIST_ERROR]: (state, action) => {
        return {...state,
            error: action.payload, 
            status: "ERROR"
        }
    },
})

