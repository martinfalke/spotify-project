// src/state/playlist/playlistReducer.js
import * as types from './playlistTypes';
import { createReducer } from '../utils';

const initialState = {
    //mock data
    status: null,
    selectedList: "",
    playlists: {
        "1234" : {
            tracks: ["test1","test2","test3","test4","test5"]
        }
    },
    trackIndex: {},
    featureMaps: {},
    playlistsFetched: false,

    //initial state

    // status: null,
    // selectedList: "",
    // playlists: {},
    // trackIndex: {},
    // featureMaps: {},
    // playlistsFetched: false

}

export default createReducer(initialState, {
    [types.PLAYLIST_GET_SUCCESS]: (state, action) => {
        let playlistsObj = {};
        action.payload.forEach(playlist => {
            playlistsObj[playlist.id] = {
                snapshot_id: playlist.snapshot_id,
                name: playlist.name,
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
            playlistsFetched: true
        }
    },

    [types.PLAYLIST_TRACK_GET_SUCCESS]: (state, action) => {
        const playlist_id = action.playlist_id;
        let trackIds = action.payload.map(track => track.id);
        let trackIndex = state.trackIndex;
        action.payload.forEach( track => {
            if(!trackIndex.hasOwnProperty(track.id)){
                trackIndex[track.id]={
                    album_name: track.album.name,
                    album_image: (track.album.images.length >= 2 && track.album.images[1]) || null,
                    artists: track.artists.name,
                    is_local: track.is_local,
                    external_urls: track.external_urls,
                    name: track.name,
                    preview_url: track.preview_url,
                    uri: track.uri,
                }
            }

        });

        return {...state,
            playlists: {
                ...state.playlists,
                [playlist_id]:{
                    ...state.playlists[playlist_id],
                    tracks: trackIds
                }
                
            },
            trackIndex: trackIndex
        }
    },
    [types.PLAYLIST_MOVE_UP_SONG_SUCCESS]: (state, action) => {
        console.log("move up");
        //const playlistId = action.playlistId;
        let snapshot_id = action.snapshot_id;
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
                    snapshot_id: snapshot_id,
                    [state.selectedList]: {
                        ...playlistobj,
                        tracks: [...reorderedList]
                    },

            }
        };
    },
    [types.PLAYLIST_MOVE_DOWN_SONG_SUCCESS]: (state, action) => {
        console.log("move down");
        let snapshot_id = action.snapshot_id;
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
                    snapshot_id: snapshot_id,
                    [state.selectedList]: {
                        ...playlistobj,
                        tracks: [...reorderedList]
                    },

            }
        };
    },
    [types.PLAYLIST_DELETE_FROM_LIST]: (state, action) => {
        console.log("delete from playlist");
        let snapshot_id = action.snapshot_id;
        const CI = action.CI;
        let playlistobj = state.playlists[state.selectedList];
        let trackList = playlistobj.tracks;
        let updatedList = trackList.slice(0, CI).concat(trackList.slice(CI+1, trackList.length));

        return { ...state, 
                        playlists: {
                            ...state.playlists,
                            snapshot_id: snapshot_id,
                            [state.selectedList]: {
                                ...playlistobj,
                                tracks: updatedList
                            },

                    }
                };
    },
    [types.PLAYLIST_SELECT]: (state, action) => {
        console.log('select playlist');
        let playlistId = action.playlistId;

        return {...state,
            selectedList: playlistId,
        }
    }
})