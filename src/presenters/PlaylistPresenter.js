// src/presenters/PlaylistPresenter.js
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PlaylistView from '../views/PlaylistView';
import playlistActions from '../state/playlist/playlistActions';

function PlaylistPresenter(props){
    const { token, playlists, playlistsFetched, selectedPlaylist  } = props;

    useEffect(()=>{
        props.fetchPlaylists(token);
    },[])

    useEffect(()=>{
        if(Object.keys(playlists).length !== 0){
            playlists.forEach(playlist => {
                if(!playlist.tracks){
                    props.fetchTracks(token, playlist.id);
                }
            });
        }
    },[playlistsFetched])

    const updateSelectedPlaylist = (playlistId) => props.selectPlaylist(playlistId);

    useEffect(() => {
        
    },[selectedPlaylist])





    return <PlaylistView playlist={}/> 
}

const mapStateToProps = (state) => ({
    token: state.auth.spotify.token,
    selectedPlaylist: state.lists.selectedPlaylist,
    playlists: state.lists.playlists,
    playlistsFetched: state.lists.playlistsFetched,
    tracks: state.tracks
})
  
const mapDispatchToProps = {
    fetchPlaylists: playlistActions.fetchPlaylist,
    fetchTracks: playlistActions.fetchTrack,
    selectPlaylist: playlistActions.selectPlaylist,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresenter);