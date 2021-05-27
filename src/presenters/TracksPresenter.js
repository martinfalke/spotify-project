import React from "react";
import { connect } from 'react-redux';
import TracksView from '../views/TracksView';
import tracksActions from '../state/tracks/tracksActions';
import playlistActions from '../state/playlist/playlistActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function TracksPresenter(props){
    const { token } = props;

const deleteFromTracks = (CI) => props.deleteFromTracks(CI);
const addToPlaylist = (playlistId, trackId) => props.addToPlaylist(token,playlistId, trackId);

const notify = () => {
    if(token && props.results && props.playlists){
        toast.success("Add to playlist successfully!")
    }
    else{
        toast.error("Ops, something wrong!")
    }
    
};

return (
    <TracksView tracks={props.results} 
                onDeleteTrack={deleteFromTracks}
                playlists={props.playlists}
                onAddToPlaylist={addToPlaylist}
                notify={notify}
    />
    )

}

const mapStateToProps = (state) => { 
    let tracksArray = state.tracks.stash;
    let stashTracks = null;
    let playlists = [];
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
                spotifyUrl: trackObj.external_urls.spotify,
                duration: trackMinutes + ":" + trackSeconds,
                previewSong: trackObj.preview_url,
                image: trackObj.album_image,
                uri: trackObj.uri,
                id: trackObj.id
            }
        });
        playlists = Object.values(state.lists.playlists).map(list => {
            return {name: list.name, id: list.id};
        });
    }

    return {
        results: stashTracks,
        token: state.auth.spotify.token,
        playlists: playlists,
    };
}
  
const mapDispatchToProps = {
    deleteFromTracks: tracksActions.deleteFromTracks,
    addToPlaylist: playlistActions.addToPlaylist
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksPresenter);
