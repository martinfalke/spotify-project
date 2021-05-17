import React from "react";
import {useState, useEffect} from "react";
import { connect } from 'react-redux';
import searchActions from '../state/search/searchActions';
import TracksView from '../views/TracksView';
import PlaylistView from '../views/PlaylistView';
import LoadingView from '../views/LoadingView';
import playlistActions from '../state/playlist/playlistActions';
import tracksActions from '../state/tracks/tracksActions';
import FuzzySearch from 'fuzzy-search';


function TracksPresenter(props){

const deleteFromTracks = (CI) => props.deleteFromTracks(CI);

return (
    <TracksView tracks= {props.results} 
                onDeleteTrack = {deleteFromTracks}
    />
    )

}

const mapStateToProps = (state) => { 
    let tracksArray = state.tracks.stash;
    let stashTracks = null;
    if(tracksArray){
    stashTracks = tracksArray.map(trackId => {
        let trackObj = state.lists.trackIndex[trackId];
        let artistString = trackObj.artists.reduce((tot,artist,i,arr) => {
            if (arr.length-1!==i){
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
            image: trackObj.album_image,
            uri: trackObj.uri,
            id: trackObj.id
        }
    })
    return {
        results: stashTracks,
        token: state.auth.spotify.token
    };
}
}
  
const mapDispatchToProps = {
    deleteFromTracks: tracksActions.deleteFromTracks,
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksPresenter);
