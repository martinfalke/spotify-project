// src/presenters/PlaylistPresenter.js
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PlaylistView from '../views/PlaylistView';
import playlistActions from '../state/playlist/playlistActions';

function PlaylistPresenter(props){
    const { token, playlists, playlistsFetched, playlist, playlistTracks, allPlaylists  } = props;

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
    const moveUpSong = (token, playlistId, CI, snapshot_id) => props.moveUpSong(token, playlistId, CI, snapshot_id);
    const moveDownSong = (token, playlistId, CI, snapshot_id) => props.moveDownSong(token, playlistId, CI, snapshot_id);
    const deleteFromList = (token, playlistId, trackId, snapshot_id, CI) => props.deleteFromList(token, playlistId, trackId, snapshot_id, CI); 
    
    //console.log(playlistTracks);
    return (playlist && playlists && playlistTracks && allPlaylists) ? 
            <PlaylistView   onSelectPlaylist = {updateSelectedPlaylist} 
                            onMoveUpSong = {moveUpSong}
                            onMoveDownSong = {moveDownSong}
                            onDeleteSong = {deleteFromList}
                            tracks = {playlistTracks}
                            allPlaylists = {allPlaylists}
                            playlist = {playlist}

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
                let artistString = trackObj.artists.reduce((tot,artist,i,arr) => {
                    if (arr.length-1!=i){
                        return (tot + artist + ', ');
                    }else return (tot + artist);
                }, "");

                let trackMinutes = Math.floor((trackObj.duration/1000)/60);
                let trackSeconds = Math.round((trackObj.duration - trackMinutes * 1000 * 60)/1000);

                return {
                    name: trackObj.name,
                    album_name: trackObj.album_name,
                    artist: artistString,
                    spotifyUrl: trackObj.external_urls,
                    duration: trackMinutes + ":" + trackSeconds,
                    previewSong: trackObj.preview_url,
                    image: trackObj.album_image
                }
            })
        }

        // create array containing relevant info about all playlists
        allPlaylists = Object.values(state.lists.playlists).map((playlist) => ({
            name: playlist.name,
            image: playlist.image,
            id: playlist.id,
        }))

    }
    return ({
        token: state.auth.spotify.token,
        //selectedPlaylist: state.lists.selectedPlaylist,
        playlists: state.lists.playlists,
        playlist: selectedPlaylistData,
        playlistsFetched: state.lists.playlistsFetched,
        playlistTracks: playlistTracks,
        allPlaylists: allPlaylists,
    });
}
  
const mapDispatchToProps = {
    fetchPlaylists: playlistActions.fetchPlaylists,
    fetchTracks: playlistActions.fetchTrack,
    selectPlaylist: playlistActions.selectPlaylist,
    moveUpSong: playlistActions.moveUpSong,
    moveDownSong: playlistActions.moveDownSong,
    deleteFromList: playlistActions.deleteFromList,


}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresenter);