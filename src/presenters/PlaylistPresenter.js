// src/presenters/PlaylistPresenter.js
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PlaylistView from '../views/PlaylistView';
import playlistActions from '../state/playlist/playlistActions';

function PlaylistPresenter(props){
    const { token, playlists, playlistsFetched, selectedPlaylist, playlist, playlistTracks  } = props;

    useEffect(()=>{
        props.fetchPlaylists(token);
    },[])

    useEffect(()=>{
        if(playlistsFetched && Object.keys(playlists).length !== 0){
            Object.values(playlists).forEach(playlist => {
                if(!playlist.tracks){
                    props.fetchTracks(token, playlist.id);
                }
            });
        }
    },[playlistsFetched])
    
    const updateSelectedPlaylist = (playlistId) => props.selectPlaylist(playlistId);
    
    useEffect(() => {
        
        
    },[selectedPlaylist])
    
    
    
    
    
    return (playlist && playlists && playlistTracks) ? <PlaylistView    onSelectPlaylist={updateSelectedPlaylist} tracks={playlistTracks}
    /> : <div>Fetching playlists and tracks..</div>
}

const mapStateToProps = (state) => {
    let selectedPlaylistData = null;
    let allPlaylists = null;
    let playlistTracks = null;
    if(state.lists.playlistsFetched){
        // retrieve the focused playlist

        if(state.lists.selectedPlaylist){
            console.log(state.lists.playlists);
            selectedPlaylistData = state.lists.playlists[state.lists.selectedPlaylist];
        }
        else{
            selectedPlaylistData = Object.values(state.lists.playlists)[0];
        }

        // retrieve the tracks of the focused playlist
        if(selectedPlaylistData.tracks){
            playlistTracks = selectedPlaylistData.tracks.map(trackId => {
                let trackObj = state.lists.trackIndex[trackId];
                return {
                    name: trackObj.name,
                    album_name: trackObj.album_name
                    // TODO: Rami's code for artists+duration
                    // etc.
                }
            })
        }

        // create array containing relevant info about all playlists
        allPlaylists = Object.values(state.lists.playlists).map((playlist) => ({
            name: playlist.name,
            img: playlist.image,
            id: playlist.id
        }))

    }
    return ({
        token: state.auth.spotify.token,
        selectedPlaylist: state.lists.selectedPlaylist,
        playlists: state.lists.playlists,
        playlist: selectedPlaylistData,
        playlistsFetched: state.lists.playlistsFetched,
        playlistTracks: playlistTracks,
    });
}
  
const mapDispatchToProps = {
    fetchPlaylists: playlistActions.fetchPlaylists,
    fetchTracks: playlistActions.fetchTrack,
    selectPlaylist: playlistActions.selectPlaylist,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresenter);